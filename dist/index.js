import { renderStoryString as P_, persona_description_positions as Jg } from "../../../../power-user.js";
import { parseMesExamples as I_, baseChatReplace as B_, chat_metadata as Rs, getMaxContextSize as U_, name1 as Sr, name2 as Qr, this_chid as yn, extension_prompt_types as Ca, depth_prompt_role_default as H_, depth_prompt_depth_default as q_ } from "../../../../../script.js";
import { world_info_include_names as F_, wi_anchor_position as Z_, world_names as Kg } from "../../../../world-info.js";
import "../../../../slash-commands.js";
import "../../../../personas.js";
import { formatInstructModeExamples as G_, formatInstructModeSystemPrompt as V_ } from "../../../../instruct-mode.js";
import { appendFileContent as Y_ } from "../../../../chats.js";
import { setOpenAIMessages as X_, setOpenAIMessageExamples as $_, formatWorldInfo as Q_, getPromptPosition as J_, getPromptRole as K_, prepareOpenAIMessages as W_ } from "../../../../openai.js";
import { metadata_keys as zs } from "../../../../authors-note.js";
import { getGroupDepthPrompts as e2, selected_group as xr } from "../../../../group-chats.js";
import { getRegexedString as t2, regex_placement as Wg } from "../../../regex/engine.js";
import { removeFromArray as ev, runAfterAnimation as n2 } from "../../../../utils.js";
import "../../../../slash-commands/SlashCommandCommonEnumsProvider.js";
import "../../../../slash-commands/SlashCommandEnumValue.js";
import { Popup as Ci, fixToastrForDialogs as qf } from "../../../../popup.js";
import tv from "../../../../../lib/dialog-polyfill.esm.js";
function r2(t, r) {
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
function a2() {
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
function i2() {
  return rv || (rv = 1, Ff.exports = a2()), Ff.exports;
}
var S = i2(), Zf = { exports: {} }, De = {};
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
function s2() {
  if (av) return De;
  av = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), f = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), y = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), _ = Symbol.iterator;
  function m(R) {
    return R === null || typeof R != "object" ? null : (R = _ && R[_] || R["@@iterator"], typeof R == "function" ? R : null);
  }
  var g = {
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
  function E(R, Q, ae) {
    this.props = R, this.context = Q, this.refs = x, this.updater = ae || g;
  }
  E.prototype.isReactComponent = {}, E.prototype.setState = function(R, Q) {
    if (typeof R != "object" && typeof R != "function" && R != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, R, Q, "setState");
  }, E.prototype.forceUpdate = function(R) {
    this.updater.enqueueForceUpdate(this, R, "forceUpdate");
  };
  function T() {
  }
  T.prototype = E.prototype;
  function A(R, Q, ae) {
    this.props = R, this.context = Q, this.refs = x, this.updater = ae || g;
  }
  var M = A.prototype = new T();
  M.constructor = A, d(M, E.prototype), M.isPureReactComponent = !0;
  var C = Array.isArray, N = { H: null, A: null, T: null, S: null, V: null }, D = Object.prototype.hasOwnProperty;
  function k(R, Q, ae, se, le, je) {
    return ae = je.ref, {
      $$typeof: t,
      type: R,
      key: Q,
      ref: ae !== void 0 ? ae : null,
      props: je
    };
  }
  function q(R, Q) {
    return k(
      R.type,
      Q,
      void 0,
      void 0,
      void 0,
      R.props
    );
  }
  function V(R) {
    return typeof R == "object" && R !== null && R.$$typeof === t;
  }
  function I(R) {
    var Q = { "=": "=0", ":": "=2" };
    return "$" + R.replace(/[=:]/g, function(ae) {
      return Q[ae];
    });
  }
  var G = /\/+/g;
  function Y(R, Q) {
    return typeof R == "object" && R !== null && R.key != null ? I("" + R.key) : Q.toString(36);
  }
  function oe() {
  }
  function fe(R) {
    switch (R.status) {
      case "fulfilled":
        return R.value;
      case "rejected":
        throw R.reason;
      default:
        switch (typeof R.status == "string" ? R.then(oe, oe) : (R.status = "pending", R.then(
          function(Q) {
            R.status === "pending" && (R.status = "fulfilled", R.value = Q);
          },
          function(Q) {
            R.status === "pending" && (R.status = "rejected", R.reason = Q);
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
  function ve(R, Q, ae, se, le) {
    var je = typeof R;
    (je === "undefined" || je === "boolean") && (R = null);
    var X = !1;
    if (R === null) X = !0;
    else
      switch (je) {
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
              return X = R._init, ve(
                X(R._payload),
                Q,
                ae,
                se,
                le
              );
          }
      }
    if (X)
      return le = le(R), X = se === "" ? "." + Y(R, 0) : se, C(le) ? (ae = "", X != null && (ae = X.replace(G, "$&/") + "/"), ve(le, Q, ae, "", function(Ge) {
        return Ge;
      })) : le != null && (V(le) && (le = q(
        le,
        ae + (le.key == null || R && R.key === le.key ? "" : ("" + le.key).replace(
          G,
          "$&/"
        ) + "/") + X
      )), Q.push(le)), 1;
    X = 0;
    var ye = se === "" ? "." : se + ":";
    if (C(R))
      for (var be = 0; be < R.length; be++)
        se = R[be], je = ye + Y(se, be), X += ve(
          se,
          Q,
          ae,
          je,
          le
        );
    else if (be = m(R), typeof be == "function")
      for (R = be.call(R), be = 0; !(se = R.next()).done; )
        se = se.value, je = ye + Y(se, be++), X += ve(
          se,
          Q,
          ae,
          je,
          le
        );
    else if (je === "object") {
      if (typeof R.then == "function")
        return ve(
          fe(R),
          Q,
          ae,
          se,
          le
        );
      throw Q = String(R), Error(
        "Objects are not valid as a React child (found: " + (Q === "[object Object]" ? "object with keys {" + Object.keys(R).join(", ") + "}" : Q) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return X;
  }
  function U(R, Q, ae) {
    if (R == null) return R;
    var se = [], le = 0;
    return ve(R, se, "", "", function(je) {
      return Q.call(ae, je, le++);
    }), se;
  }
  function re(R) {
    if (R._status === -1) {
      var Q = R._result;
      Q = Q(), Q.then(
        function(ae) {
          (R._status === 0 || R._status === -1) && (R._status = 1, R._result = ae);
        },
        function(ae) {
          (R._status === 0 || R._status === -1) && (R._status = 2, R._result = ae);
        }
      ), R._status === -1 && (R._status = 0, R._result = Q);
    }
    if (R._status === 1) return R._result.default;
    throw R._result;
  }
  var de = typeof reportError == "function" ? reportError : function(R) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var Q = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof R == "object" && R !== null && typeof R.message == "string" ? String(R.message) : String(R),
        error: R
      });
      if (!window.dispatchEvent(Q)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", R);
      return;
    }
    console.error(R);
  };
  function Le() {
  }
  return De.Children = {
    map: U,
    forEach: function(R, Q, ae) {
      U(
        R,
        function() {
          Q.apply(this, arguments);
        },
        ae
      );
    },
    count: function(R) {
      var Q = 0;
      return U(R, function() {
        Q++;
      }), Q;
    },
    toArray: function(R) {
      return U(R, function(Q) {
        return Q;
      }) || [];
    },
    only: function(R) {
      if (!V(R))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return R;
    }
  }, De.Component = E, De.Fragment = i, De.Profiler = o, De.PureComponent = A, De.StrictMode = s, De.Suspense = h, De.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = N, De.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(R) {
      return N.H.useMemoCache(R);
    }
  }, De.cache = function(R) {
    return function() {
      return R.apply(null, arguments);
    };
  }, De.cloneElement = function(R, Q, ae) {
    if (R == null)
      throw Error(
        "The argument must be a React element, but you passed " + R + "."
      );
    var se = d({}, R.props), le = R.key, je = void 0;
    if (Q != null)
      for (X in Q.ref !== void 0 && (je = void 0), Q.key !== void 0 && (le = "" + Q.key), Q)
        !D.call(Q, X) || X === "key" || X === "__self" || X === "__source" || X === "ref" && Q.ref === void 0 || (se[X] = Q[X]);
    var X = arguments.length - 2;
    if (X === 1) se.children = ae;
    else if (1 < X) {
      for (var ye = Array(X), be = 0; be < X; be++)
        ye[be] = arguments[be + 2];
      se.children = ye;
    }
    return k(R.type, le, void 0, void 0, je, se);
  }, De.createContext = function(R) {
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
  }, De.createElement = function(R, Q, ae) {
    var se, le = {}, je = null;
    if (Q != null)
      for (se in Q.key !== void 0 && (je = "" + Q.key), Q)
        D.call(Q, se) && se !== "key" && se !== "__self" && se !== "__source" && (le[se] = Q[se]);
    var X = arguments.length - 2;
    if (X === 1) le.children = ae;
    else if (1 < X) {
      for (var ye = Array(X), be = 0; be < X; be++)
        ye[be] = arguments[be + 2];
      le.children = ye;
    }
    if (R && R.defaultProps)
      for (se in X = R.defaultProps, X)
        le[se] === void 0 && (le[se] = X[se]);
    return k(R, je, void 0, void 0, null, le);
  }, De.createRef = function() {
    return { current: null };
  }, De.forwardRef = function(R) {
    return { $$typeof: p, render: R };
  }, De.isValidElement = V, De.lazy = function(R) {
    return {
      $$typeof: b,
      _payload: { _status: -1, _result: R },
      _init: re
    };
  }, De.memo = function(R, Q) {
    return {
      $$typeof: y,
      type: R,
      compare: Q === void 0 ? null : Q
    };
  }, De.startTransition = function(R) {
    var Q = N.T, ae = {};
    N.T = ae;
    try {
      var se = R(), le = N.S;
      le !== null && le(ae, se), typeof se == "object" && se !== null && typeof se.then == "function" && se.then(Le, de);
    } catch (je) {
      de(je);
    } finally {
      N.T = Q;
    }
  }, De.unstable_useCacheRefresh = function() {
    return N.H.useCacheRefresh();
  }, De.use = function(R) {
    return N.H.use(R);
  }, De.useActionState = function(R, Q, ae) {
    return N.H.useActionState(R, Q, ae);
  }, De.useCallback = function(R, Q) {
    return N.H.useCallback(R, Q);
  }, De.useContext = function(R) {
    return N.H.useContext(R);
  }, De.useDebugValue = function() {
  }, De.useDeferredValue = function(R, Q) {
    return N.H.useDeferredValue(R, Q);
  }, De.useEffect = function(R, Q, ae) {
    var se = N.H;
    if (typeof ae == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return se.useEffect(R, Q);
  }, De.useId = function() {
    return N.H.useId();
  }, De.useImperativeHandle = function(R, Q, ae) {
    return N.H.useImperativeHandle(R, Q, ae);
  }, De.useInsertionEffect = function(R, Q) {
    return N.H.useInsertionEffect(R, Q);
  }, De.useLayoutEffect = function(R, Q) {
    return N.H.useLayoutEffect(R, Q);
  }, De.useMemo = function(R, Q) {
    return N.H.useMemo(R, Q);
  }, De.useOptimistic = function(R, Q) {
    return N.H.useOptimistic(R, Q);
  }, De.useReducer = function(R, Q, ae) {
    return N.H.useReducer(R, Q, ae);
  }, De.useRef = function(R) {
    return N.H.useRef(R);
  }, De.useState = function(R) {
    return N.H.useState(R);
  }, De.useSyncExternalStore = function(R, Q, ae) {
    return N.H.useSyncExternalStore(
      R,
      Q,
      ae
    );
  }, De.useTransition = function() {
    return N.H.useTransition();
  }, De.version = "19.1.1", De;
}
var iv;
function Vd() {
  return iv || (iv = 1, Zf.exports = s2()), Zf.exports;
}
var K = Vd();
const cu = /* @__PURE__ */ Gd(K);
var Gf = { exports: {} }, Ps = {}, Vf = { exports: {} }, Yf = {};
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
function l2() {
  return sv || (sv = 1, (function(t) {
    function r(U, re) {
      var de = U.length;
      U.push(re);
      e: for (; 0 < de; ) {
        var Le = de - 1 >>> 1, R = U[Le];
        if (0 < o(R, re))
          U[Le] = re, U[de] = R, de = Le;
        else break e;
      }
    }
    function i(U) {
      return U.length === 0 ? null : U[0];
    }
    function s(U) {
      if (U.length === 0) return null;
      var re = U[0], de = U.pop();
      if (de !== re) {
        U[0] = de;
        e: for (var Le = 0, R = U.length, Q = R >>> 1; Le < Q; ) {
          var ae = 2 * (Le + 1) - 1, se = U[ae], le = ae + 1, je = U[le];
          if (0 > o(se, de))
            le < R && 0 > o(je, se) ? (U[Le] = je, U[le] = de, Le = le) : (U[Le] = se, U[ae] = de, Le = ae);
          else if (le < R && 0 > o(je, de))
            U[Le] = je, U[le] = de, Le = le;
          else break e;
        }
      }
      return re;
    }
    function o(U, re) {
      var de = U.sortIndex - re.sortIndex;
      return de !== 0 ? de : U.id - re.id;
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
    var h = [], y = [], b = 1, _ = null, m = 3, g = !1, d = !1, x = !1, E = !1, T = typeof setTimeout == "function" ? setTimeout : null, A = typeof clearTimeout == "function" ? clearTimeout : null, M = typeof setImmediate < "u" ? setImmediate : null;
    function C(U) {
      for (var re = i(y); re !== null; ) {
        if (re.callback === null) s(y);
        else if (re.startTime <= U)
          s(y), re.sortIndex = re.expirationTime, r(h, re);
        else break;
        re = i(y);
      }
    }
    function N(U) {
      if (x = !1, C(U), !d)
        if (i(h) !== null)
          d = !0, D || (D = !0, Y());
        else {
          var re = i(y);
          re !== null && ve(N, re.startTime - U);
        }
    }
    var D = !1, k = -1, q = 5, V = -1;
    function I() {
      return E ? !0 : !(t.unstable_now() - V < q);
    }
    function G() {
      if (E = !1, D) {
        var U = t.unstable_now();
        V = U;
        var re = !0;
        try {
          e: {
            d = !1, x && (x = !1, A(k), k = -1), g = !0;
            var de = m;
            try {
              t: {
                for (C(U), _ = i(h); _ !== null && !(_.expirationTime > U && I()); ) {
                  var Le = _.callback;
                  if (typeof Le == "function") {
                    _.callback = null, m = _.priorityLevel;
                    var R = Le(
                      _.expirationTime <= U
                    );
                    if (U = t.unstable_now(), typeof R == "function") {
                      _.callback = R, C(U), re = !0;
                      break t;
                    }
                    _ === i(h) && s(h), C(U);
                  } else s(h);
                  _ = i(h);
                }
                if (_ !== null) re = !0;
                else {
                  var Q = i(y);
                  Q !== null && ve(
                    N,
                    Q.startTime - U
                  ), re = !1;
                }
              }
              break e;
            } finally {
              _ = null, m = de, g = !1;
            }
            re = void 0;
          }
        } finally {
          re ? Y() : D = !1;
        }
      }
    }
    var Y;
    if (typeof M == "function")
      Y = function() {
        M(G);
      };
    else if (typeof MessageChannel < "u") {
      var oe = new MessageChannel(), fe = oe.port2;
      oe.port1.onmessage = G, Y = function() {
        fe.postMessage(null);
      };
    } else
      Y = function() {
        T(G, 0);
      };
    function ve(U, re) {
      k = T(function() {
        U(t.unstable_now());
      }, re);
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(U) {
      U.callback = null;
    }, t.unstable_forceFrameRate = function(U) {
      0 > U || 125 < U ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : q = 0 < U ? Math.floor(1e3 / U) : 5;
    }, t.unstable_getCurrentPriorityLevel = function() {
      return m;
    }, t.unstable_next = function(U) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var re = 3;
          break;
        default:
          re = m;
      }
      var de = m;
      m = re;
      try {
        return U();
      } finally {
        m = de;
      }
    }, t.unstable_requestPaint = function() {
      E = !0;
    }, t.unstable_runWithPriority = function(U, re) {
      switch (U) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          U = 3;
      }
      var de = m;
      m = U;
      try {
        return re();
      } finally {
        m = de;
      }
    }, t.unstable_scheduleCallback = function(U, re, de) {
      var Le = t.unstable_now();
      switch (typeof de == "object" && de !== null ? (de = de.delay, de = typeof de == "number" && 0 < de ? Le + de : Le) : de = Le, U) {
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
      return R = de + R, U = {
        id: b++,
        callback: re,
        priorityLevel: U,
        startTime: de,
        expirationTime: R,
        sortIndex: -1
      }, de > Le ? (U.sortIndex = de, r(y, U), i(h) === null && U === i(y) && (x ? (A(k), k = -1) : x = !0, ve(N, de - Le))) : (U.sortIndex = R, r(h, U), d || g || (d = !0, D || (D = !0, Y()))), U;
    }, t.unstable_shouldYield = I, t.unstable_wrapCallback = function(U) {
      var re = m;
      return function() {
        var de = m;
        m = re;
        try {
          return U.apply(this, arguments);
        } finally {
          m = de;
        }
      };
    };
  })(Yf)), Yf;
}
var lv;
function o2() {
  return lv || (lv = 1, Vf.exports = l2()), Vf.exports;
}
var Xf = { exports: {} }, Ut = {};
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
function u2() {
  if (ov) return Ut;
  ov = 1;
  var t = Vd();
  function r(h) {
    var y = "https://react.dev/errors/" + h;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++)
        y += "&args[]=" + encodeURIComponent(arguments[b]);
    }
    return "Minified React error #" + h + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  function u(h, y, b) {
    var _ = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: _ == null ? null : "" + _,
      children: h,
      containerInfo: y,
      implementation: b
    };
  }
  var f = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(h, y) {
    if (h === "font") return "";
    if (typeof y == "string")
      return y === "use-credentials" ? y : "";
  }
  return Ut.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, Ut.createPortal = function(h, y) {
    var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
      throw Error(r(299));
    return u(h, y, null, b);
  }, Ut.flushSync = function(h) {
    var y = f.T, b = s.p;
    try {
      if (f.T = null, s.p = 2, h) return h();
    } finally {
      f.T = y, s.p = b, s.d.f();
    }
  }, Ut.preconnect = function(h, y) {
    typeof h == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, s.d.C(h, y));
  }, Ut.prefetchDNS = function(h) {
    typeof h == "string" && s.d.D(h);
  }, Ut.preinit = function(h, y) {
    if (typeof h == "string" && y && typeof y.as == "string") {
      var b = y.as, _ = p(b, y.crossOrigin), m = typeof y.integrity == "string" ? y.integrity : void 0, g = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      b === "style" ? s.d.S(
        h,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: _,
          integrity: m,
          fetchPriority: g
        }
      ) : b === "script" && s.d.X(h, {
        crossOrigin: _,
        integrity: m,
        fetchPriority: g,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0
      });
    }
  }, Ut.preinitModule = function(h, y) {
    if (typeof h == "string")
      if (typeof y == "object" && y !== null) {
        if (y.as == null || y.as === "script") {
          var b = p(
            y.as,
            y.crossOrigin
          );
          s.d.M(h, {
            crossOrigin: b,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
            nonce: typeof y.nonce == "string" ? y.nonce : void 0
          });
        }
      } else y == null && s.d.M(h);
  }, Ut.preload = function(h, y) {
    if (typeof h == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
      var b = y.as, _ = p(b, y.crossOrigin);
      s.d.L(h, b, {
        crossOrigin: _,
        integrity: typeof y.integrity == "string" ? y.integrity : void 0,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0,
        type: typeof y.type == "string" ? y.type : void 0,
        fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
        referrerPolicy: typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
        imageSrcSet: typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
        imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
        media: typeof y.media == "string" ? y.media : void 0
      });
    }
  }, Ut.preloadModule = function(h, y) {
    if (typeof h == "string")
      if (y) {
        var b = p(y.as, y.crossOrigin);
        s.d.m(h, {
          as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
          crossOrigin: b,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0
        });
      } else s.d.m(h);
  }, Ut.requestFormReset = function(h) {
    s.d.r(h);
  }, Ut.unstable_batchedUpdates = function(h, y) {
    return h(y);
  }, Ut.useFormState = function(h, y, b) {
    return f.H.useFormState(h, y, b);
  }, Ut.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, Ut.version = "19.1.1", Ut;
}
var uv;
function e0() {
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
  return t(), Xf.exports = u2(), Xf.exports;
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
function c2() {
  if (cv) return Ps;
  cv = 1;
  var t = o2(), r = Vd(), i = e0();
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
      var v = c.alternate;
      if (v === null) {
        if (l = c.return, l !== null) {
          a = l;
          continue;
        }
        break;
      }
      if (c.child === v.child) {
        for (v = c.child; v; ) {
          if (v === a) return p(c), e;
          if (v === l) return p(c), n;
          v = v.sibling;
        }
        throw Error(s(188));
      }
      if (a.return !== l.return) a = c, l = v;
      else {
        for (var w = !1, O = c.child; O; ) {
          if (O === a) {
            w = !0, a = c, l = v;
            break;
          }
          if (O === l) {
            w = !0, l = c, a = v;
            break;
          }
          O = O.sibling;
        }
        if (!w) {
          for (O = v.child; O; ) {
            if (O === a) {
              w = !0, a = v, l = c;
              break;
            }
            if (O === l) {
              w = !0, l = v, a = c;
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
  function y(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e;
    for (e = e.child; e !== null; ) {
      if (n = y(e), n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var b = Object.assign, _ = Symbol.for("react.element"), m = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), A = Symbol.for("react.consumer"), M = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), D = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), V = Symbol.for("react.activity"), I = Symbol.for("react.memo_cache_sentinel"), G = Symbol.iterator;
  function Y(e) {
    return e === null || typeof e != "object" ? null : (e = G && e[G] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var oe = Symbol.for("react.client.reference");
  function fe(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === oe ? null : e.displayName || e.name || null;
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
      case D:
        return "SuspenseList";
      case V:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case g:
          return "Portal";
        case M:
          return (e.displayName || "Context") + ".Provider";
        case A:
          return (e._context.displayName || "Context") + ".Consumer";
        case C:
          var n = e.render;
          return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case k:
          return n = e.displayName || null, n !== null ? n : fe(e.type) || "Memo";
        case q:
          n = e._payload, e = e._init;
          try {
            return fe(e(n));
          } catch {
          }
      }
    return null;
  }
  var ve = Array.isArray, U = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, re = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, de = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Le = [], R = -1;
  function Q(e) {
    return { current: e };
  }
  function ae(e) {
    0 > R || (e.current = Le[R], Le[R] = null, R--);
  }
  function se(e, n) {
    R++, Le[R] = e.current, e.current = n;
  }
  var le = Q(null), je = Q(null), X = Q(null), ye = Q(null);
  function be(e, n) {
    switch (se(X, n), se(je, e), se(le, null), n.nodeType) {
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
    ae(le), se(le, e);
  }
  function Ge() {
    ae(le), ae(je), ae(X);
  }
  function tt(e) {
    e.memoizedState !== null && se(ye, e);
    var n = le.current, a = Ag(n, e.type);
    n !== a && (se(je, e), se(le, a));
  }
  function ke(e) {
    je.current === e && (ae(le), ae(je)), ye.current === e && (ae(ye), Os._currentValue = de);
  }
  var ht = Object.prototype.hasOwnProperty, zn = t.unstable_scheduleCallback, P = t.unstable_cancelCallback, ne = t.unstable_shouldYield, te = t.unstable_requestPaint, ue = t.unstable_now, Te = t.unstable_getCurrentPriorityLevel, Ee = t.unstable_ImmediatePriority, ce = t.unstable_UserBlockingPriority, me = t.unstable_NormalPriority, qe = t.unstable_LowPriority, Fe = t.unstable_IdlePriority, Re = t.log, Dt = t.unstable_setDisableYieldValue, nr = null, pt = null;
  function Zn(e) {
    if (typeof Re == "function" && Dt(e), pt && typeof pt.setStrictMode == "function")
      try {
        pt.setStrictMode(nr, e);
      } catch {
      }
  }
  var qt = Math.clz32 ? Math.clz32 : sa, bn = Math.log, ia = Math.LN2;
  function sa(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (bn(e) / ia | 0) | 0;
  }
  var rr = 256, Gn = 4194304;
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
  function Ft(e, n, a) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var c = 0, v = e.suspendedLanes, w = e.pingedLanes;
    e = e.warmLanes;
    var O = l & 134217727;
    return O !== 0 ? (l = O & ~v, l !== 0 ? c = _n(l) : (w &= O, w !== 0 ? c = _n(w) : a || (a = O & ~e, a !== 0 && (c = _n(a))))) : (O = l & ~v, O !== 0 ? c = _n(O) : w !== 0 ? c = _n(w) : a || (a = l & ~e, a !== 0 && (c = _n(a)))), c === 0 ? 0 : n !== 0 && n !== c && (n & v) === 0 && (v = c & -c, a = n & -n, v >= a || v === 32 && (a & 4194048) !== 0) ? n : c;
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
  function Ia() {
    var e = rr;
    return rr <<= 1, (rr & 4194048) === 0 && (rr = 256), e;
  }
  function uh() {
    var e = Gn;
    return Gn <<= 1, (Gn & 62914560) === 0 && (Gn = 4194304), e;
  }
  function Mu(e) {
    for (var n = [], a = 0; 31 > a; a++) n.push(e);
    return n;
  }
  function Bi(e, n) {
    e.pendingLanes |= n, n !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function w1(e, n, a, l, c, v) {
    var w = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var O = e.entanglements, j = e.expirationTimes, H = e.hiddenUpdates;
    for (a = w & ~a; 0 < a; ) {
      var $ = 31 - qt(a), W = 1 << $;
      O[$] = 0, j[$] = -1;
      var F = H[$];
      if (F !== null)
        for (H[$] = null, $ = 0; $ < F.length; $++) {
          var Z = F[$];
          Z !== null && (Z.lane &= -536870913);
        }
      a &= ~W;
    }
    l !== 0 && ch(e, l, 0), v !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= v & ~(w & ~n));
  }
  function ch(e, n, a) {
    e.pendingLanes |= n, e.suspendedLanes &= ~n;
    var l = 31 - qt(n);
    e.entangledLanes |= n, e.entanglements[l] = e.entanglements[l] | 1073741824 | a & 4194090;
  }
  function fh(e, n) {
    var a = e.entangledLanes |= n;
    for (e = e.entanglements; a; ) {
      var l = 31 - qt(a), c = 1 << l;
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
  function ku(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function dh() {
    var e = re.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Gg(e.type));
  }
  function A1(e, n) {
    var a = re.p;
    try {
      return re.p = e, n();
    } finally {
      re.p = a;
    }
  }
  var Nr = Math.random().toString(36).slice(2), It = "__reactFiber$" + Nr, $t = "__reactProps$" + Nr, Ba = "__reactContainer$" + Nr, ju = "__reactEvents$" + Nr, N1 = "__reactListeners$" + Nr, T1 = "__reactHandles$" + Nr, hh = "__reactResources$" + Nr, Ui = "__reactMarker$" + Nr;
  function Ru(e) {
    delete e[It], delete e[$t], delete e[ju], delete e[N1], delete e[T1];
  }
  function Ua(e) {
    var n = e[It];
    if (n) return n;
    for (var a = e.parentNode; a; ) {
      if (n = a[Ba] || a[It]) {
        if (a = n.alternate, n.child !== null || a !== null && a.child !== null)
          for (e = Mg(e); e !== null; ) {
            if (a = e[It]) return a;
            e = Mg(e);
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
  var O1 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), gh = {}, vh = {};
  function M1(e) {
    return ht.call(vh, e) ? !0 : ht.call(gh, e) ? !1 : O1.test(e) ? vh[e] = !0 : (gh[e] = !0, !1);
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
  function Pu(e, n) {
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
                } catch (Z) {
                  var F = Z;
                }
                Reflect.construct(e, [], W);
              } else {
                try {
                  W.call();
                } catch (Z) {
                  F = Z;
                }
                e.call(W.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Z) {
                F = Z;
              }
              (W = e()) && typeof W.catch == "function" && W.catch(function() {
              });
            }
          } catch (Z) {
            if (Z && F && typeof Z.stack == "string")
              return [Z.stack, F.stack];
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
      var v = l.DetermineComponentFrameRoot(), w = v[0], O = v[1];
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
        return Pu(e.type, !1);
      case 11:
        return Pu(e.type.render, !1);
      case 1:
        return Pu(e.type, !0);
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
  function k1(e) {
    var n = _h(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      n
    ), l = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var c = a.get, v = a.set;
      return Object.defineProperty(e, n, {
        configurable: !0,
        get: function() {
          return c.call(this);
        },
        set: function(w) {
          l = "" + w, v.call(this, w);
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
    e._valueTracker || (e._valueTracker = k1(e));
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
  var j1 = /[\n"\\]/g;
  function xn(e) {
    return e.replace(
      j1,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Iu(e, n, a, l, c, v, w, O) {
    e.name = "", w != null && typeof w != "function" && typeof w != "symbol" && typeof w != "boolean" ? e.type = w : e.removeAttribute("type"), n != null ? w === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + Sn(n)) : e.value !== "" + Sn(n) && (e.value = "" + Sn(n)) : w !== "submit" && w !== "reset" || e.removeAttribute("value"), n != null ? Bu(e, w, Sn(n)) : a != null ? Bu(e, w, Sn(a)) : l != null && e.removeAttribute("value"), c == null && v != null && (e.defaultChecked = !!v), c != null && (e.checked = c && typeof c != "function" && typeof c != "symbol"), O != null && typeof O != "function" && typeof O != "symbol" && typeof O != "boolean" ? e.name = "" + Sn(O) : e.removeAttribute("name");
  }
  function xh(e, n, a, l, c, v, w, O) {
    if (v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" && (e.type = v), n != null || a != null) {
      if (!(v !== "submit" && v !== "reset" || n != null))
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
        if (ve(l)) {
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
  var R1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function wh(e, n, a) {
    var l = n.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? l ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "" : l ? e.setProperty(n, a) : typeof a != "number" || a === 0 || R1.has(n) ? n === "float" ? e.cssFloat = a : e[n] = ("" + a).trim() : e[n] = a + "px";
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
      for (var v in n)
        n.hasOwnProperty(v) && wh(e, v, n[v]);
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
  var z1 = /* @__PURE__ */ new Map([
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
  ]), L1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function pl(e) {
    return L1.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
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
          if (Iu(
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
                Iu(
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
    var e, n = Gu, a = n.length, l, c = "value" in Tr ? Tr.value : Tr.textContent, v = c.length;
    for (e = 0; e < a && n[e] === c[e]; e++) ;
    var w = a - e;
    for (l = 1; l <= w && n[a - l] === c[v - l]; l++) ;
    return ml = c.slice(e, 1 < l ? 1 - l : void 0);
  }
  function gl(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function vl() {
    return !0;
  }
  function Mh() {
    return !1;
  }
  function Qt(e) {
    function n(a, l, c, v, w) {
      this._reactName = a, this._targetInst = c, this.type = l, this.nativeEvent = v, this.target = w, this.currentTarget = null;
      for (var O in e)
        e.hasOwnProperty(O) && (a = e[O], this[O] = a ? a(v) : v[O]);
      return this.isDefaultPrevented = (v.defaultPrevented != null ? v.defaultPrevented : v.returnValue === !1) ? vl : Mh, this.isPropagationStopped = Mh, this;
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
  }), Dh = Qt(bl), I1 = b({}, bl, { dataTransfer: 0 }), B1 = Qt(I1), U1 = b({}, Zi, { relatedTarget: 0 }), Xu = Qt(U1), H1 = b({}, oa, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), q1 = Qt(H1), F1 = b({}, oa, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Z1 = Qt(F1), G1 = b({}, oa, { data: 0 }), kh = Qt(G1), V1 = {
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
  }, Y1 = {
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
  }, X1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function $1(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = X1[e]) ? !!n[e] : !1;
  }
  function $u() {
    return $1;
  }
  var Q1 = b({}, Zi, {
    key: function(e) {
      if (e.key) {
        var n = V1[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress" ? (e = gl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Y1[e.keyCode] || "Unidentified" : "";
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
  }), J1 = Qt(Q1), K1 = b({}, bl, {
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
  }), jh = Qt(K1), W1 = b({}, Zi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: $u
  }), eb = Qt(W1), tb = b({}, oa, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), nb = Qt(tb), rb = b({}, bl, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ab = Qt(rb), ib = b({}, oa, {
    newState: 0,
    oldState: 0
  }), sb = Qt(ib), lb = [9, 13, 27, 32], Qu = ir && "CompositionEvent" in window, Vi = null;
  ir && "documentMode" in document && (Vi = document.documentMode);
  var ob = ir && "TextEvent" in window && !Vi, Rh = ir && (!Qu || Vi && 8 < Vi && 11 >= Vi), zh = " ", Lh = !1;
  function Ph(e, n) {
    switch (e) {
      case "keyup":
        return lb.indexOf(n.keyCode) !== -1;
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
  function Ih(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var $a = !1;
  function ub(e, n) {
    switch (e) {
      case "compositionend":
        return Ih(n);
      case "keypress":
        return n.which !== 32 ? null : (Lh = !0, zh);
      case "textInput":
        return e = n.data, e === zh && Lh ? null : e;
      default:
        return null;
    }
  }
  function cb(e, n) {
    if ($a)
      return e === "compositionend" || !Qu && Ph(e, n) ? (e = Oh(), ml = Gu = Tr = null, $a = !1, e) : null;
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
  var fb = {
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
    return n === "input" ? !!fb[e.type] : n === "textarea";
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
  function db(e) {
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
      ), Th(db, n);
    }
  }
  function hb(e, n, a) {
    e === "focusin" ? (Zh(), Yi = n, Xi = a, Yi.attachEvent("onpropertychange", Gh)) : e === "focusout" && Zh();
  }
  function pb(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return _l(Xi);
  }
  function mb(e, n) {
    if (e === "click") return _l(n);
  }
  function gb(e, n) {
    if (e === "input" || e === "change")
      return _l(n);
  }
  function vb(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var sn = typeof Object.is == "function" ? Object.is : vb;
  function $i(e, n) {
    if (sn(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null)
      return !1;
    var a = Object.keys(e), l = Object.keys(n);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var c = a[l];
      if (!ht.call(n, c) || !sn(e[c], n[c]))
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
  var yb = ir && "documentMode" in document && 11 >= document.documentMode, Qa = null, ec = null, Qi = null, tc = !1;
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
  var Kh = ca("animationend"), Wh = ca("animationiteration"), ep = ca("animationstart"), bb = ca("transitionrun"), _b = ca("transitionstart"), Sb = ca("transitioncancel"), tp = ca("transitionend"), np = /* @__PURE__ */ new Map(), rc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
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
      var v = Cn[n];
      if (Cn[n++] = null, l !== null && c !== null) {
        var w = l.pending;
        w === null ? c.next = c : (c.next = w.next, w.next = c), l.pending = c;
      }
      v !== 0 && ap(a, c, v);
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
    for (var c = !1, v = e.return; v !== null; )
      v.childLanes |= a, l = v.alternate, l !== null && (l.childLanes |= a), v.tag === 22 && (e = v.stateNode, e === null || e._visibility & 1 || (c = !0)), e = v, v = v.return;
    return e.tag === 3 ? (v = e.stateNode, c && n !== null && (c = 31 - qt(a), e = v.hiddenUpdates, l = e[c], l === null ? e[c] = [n] : l.push(n), n.lane = a | 536870912), v) : null;
  }
  function El(e) {
    if (50 < Ss)
      throw Ss = 0, df = null, Error(s(185));
    for (var n = e.return; n !== null; )
      e = n, n = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ei = {};
  function xb(e, n, a, l) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ln(e, n, a, l) {
    return new xb(e, n, a, l);
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
  function Cl(e, n, a, l, c, v) {
    var w = 0;
    if (l = e, typeof e == "function") sc(e) && (w = 1);
    else if (typeof e == "string")
      w = C_(
        e,
        a,
        le.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case V:
          return e = ln(31, a, n, c), e.elementType = V, e.lanes = v, e;
        case d:
          return fa(a.children, c, v, n);
        case x:
          w = 8, c |= 24;
          break;
        case E:
          return e = ln(12, a, n, c | 2), e.elementType = E, e.lanes = v, e;
        case N:
          return e = ln(13, a, n, c), e.elementType = N, e.lanes = v, e;
        case D:
          return e = ln(19, a, n, c), e.elementType = D, e.lanes = v, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case T:
              case M:
                w = 10;
                break e;
              case A:
                w = 9;
                break e;
              case C:
                w = 11;
                break e;
              case k:
                w = 14;
                break e;
              case q:
                w = 16, l = null;
                break e;
            }
          w = 29, a = Error(
            s(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return n = ln(w, a, n, c), n.elementType = e, n.type = l, n.lanes = v, n;
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
    var c = 32 - qt(l) - 1;
    l &= ~(1 << c), a += 1;
    var v = 32 - qt(n) + c;
    if (30 < v) {
      var w = c - c % 5;
      v = (l & (1 << w) - 1).toString(32), l >>= w, c -= w, lr = 1 << 32 - qt(n) + c | a << c | l, or = v + e;
    } else
      lr = 1 << v | a << c | l, or = e;
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
  var Zt = null, ct = null, Ye = !1, pa = null, Vn = !1, fc = Error(s(519));
  function ma(e) {
    var n = Error(s(418, ""));
    throw Wi(En(n, e)), fc;
  }
  function lp(e) {
    var n = e.stateNode, a = e.type, l = e.memoizedProps;
    switch (n[It] = e, n[$t] = l, a) {
      case "dialog":
        Be("cancel", n), Be("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        Be("load", n);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Es.length; a++)
          Be(Es[a], n);
        break;
      case "source":
        Be("error", n);
        break;
      case "img":
      case "image":
      case "link":
        Be("error", n), Be("load", n);
        break;
      case "details":
        Be("toggle", n);
        break;
      case "input":
        Be("invalid", n), xh(
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
        Be("invalid", n);
        break;
      case "textarea":
        Be("invalid", n), Ch(n, l.value, l.defaultValue, l.children), dl(n);
    }
    a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || n.textContent === "" + a || l.suppressHydrationWarning === !0 || Cg(n.textContent, a) ? (l.popover != null && (Be("beforetoggle", n), Be("toggle", n)), l.onScroll != null && Be("scroll", n), l.onScrollEnd != null && Be("scrollend", n), l.onClick != null && (n.onclick = so), n = !0) : n = !1, n || ma(e);
  }
  function op(e) {
    for (Zt = e.return; Zt; )
      switch (Zt.tag) {
        case 5:
        case 13:
          Vn = !1;
          return;
        case 27:
        case 3:
          Vn = !0;
          return;
        default:
          Zt = Zt.return;
      }
  }
  function Ji(e) {
    if (e !== Zt) return !1;
    if (!Ye) return op(e), Ye = !0, !1;
    var n = e.tag, a;
    if ((a = n !== 3 && n !== 27) && ((a = n === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Tf(e.type, e.memoizedProps)), a = !a), a && ct && ma(e), op(e), n === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8)
            if (a = e.data, a === "/$") {
              if (n === 0) {
                ct = In(e.nextSibling);
                break e;
              }
              n--;
            } else
              a !== "$" && a !== "$!" && a !== "$?" || n++;
          e = e.nextSibling;
        }
        ct = null;
      }
    } else
      n === 27 ? (n = ct, Zr(e.type) ? (e = kf, kf = null, ct = e) : ct = n) : ct = Zt ? In(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ki() {
    ct = Zt = null, Ye = !1;
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
  var dc = Q(null), ga = null, ur = null;
  function Or(e, n, a) {
    se(dc, n._currentValue), n._currentValue = a;
  }
  function cr(e) {
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
      var v = c.dependencies;
      if (v !== null) {
        var w = c.child;
        v = v.firstContext;
        e: for (; v !== null; ) {
          var O = v;
          v = c;
          for (var j = 0; j < n.length; j++)
            if (O.context === n[j]) {
              v.lanes |= a, O = v.alternate, O !== null && (O.lanes |= a), hc(
                v.return,
                a,
                e
              ), l || (w = null);
              break e;
            }
          v = O.next;
        }
      } else if (c.tag === 18) {
        if (w = c.return, w === null) throw Error(s(341));
        w.lanes |= a, v = w.alternate, v !== null && (v.lanes |= a), hc(w, a, e), w = null;
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
    for (var c = n, v = !1; c !== null; ) {
      if (!v) {
        if ((c.flags & 524288) !== 0) v = !0;
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
  function Bt(e) {
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
  var Eb = typeof AbortController < "u" ? AbortController : function() {
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
  }, Cb = t.unstable_scheduleCallback, wb = t.unstable_NormalPriority, Et = {
    $$typeof: M,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function mc() {
    return {
      controller: new Eb(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function ts(e) {
    e.refCount--, e.refCount === 0 && Cb(wb, function() {
      e.controller.abort();
    });
  }
  var ns = null, gc = 0, ri = 0, ai = null;
  function Ab(e, n) {
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
  function Nb(e, n) {
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
  var dp = U.S;
  U.S = function(e, n) {
    typeof n == "object" && n !== null && typeof n.then == "function" && Ab(e, n), dp !== null && dp(e, n);
  };
  var ya = Q(null);
  function vc() {
    var e = ya.current;
    return e !== null ? e : nt.pooledCache;
  }
  function Ol(e, n) {
    n === null ? se(ya, ya.current) : se(ya, n.pool);
  }
  function hp() {
    var e = vc();
    return e === null ? null : { parent: Et._currentValue, pool: e };
  }
  var rs = Error(s(460)), pp = Error(s(474)), Ml = Error(s(542)), yc = { then: function() {
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
          if (e = nt, e !== null && 100 < e.shellSuspendCounter)
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
    if (e === rs || e === Ml)
      throw Error(s(483));
  }
  var Mr = !1;
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
  function Dr(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function kr(e, n, a) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (Xe & 2) !== 0) {
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
      var c = null, v = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var w = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          v === null ? c = v = w : v = v.next = w, a = a.next;
        } while (a !== null);
        v === null ? c = v = n : v = v.next = n;
      } else c = v = n;
      a = {
        baseState: l.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: v,
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
    Mr = !1;
    var v = c.firstBaseUpdate, w = c.lastBaseUpdate, O = c.shared.pending;
    if (O !== null) {
      c.shared.pending = null;
      var j = O, H = j.next;
      j.next = null, w === null ? v = H : w.next = H, w = j;
      var $ = e.alternate;
      $ !== null && ($ = $.updateQueue, O = $.lastBaseUpdate, O !== w && (O === null ? $.firstBaseUpdate = H : O.next = H, $.lastBaseUpdate = j));
    }
    if (v !== null) {
      var W = c.baseState;
      w = 0, $ = H = j = null, O = v;
      do {
        var F = O.lane & -536870913, Z = F !== O.lane;
        if (Z ? (Ze & F) === F : (l & F) === F) {
          F !== 0 && F === ri && (xc = !0), $ !== null && ($ = $.next = {
            lane: 0,
            tag: O.tag,
            payload: O.payload,
            callback: null,
            next: null
          });
          e: {
            var Ce = e, Se = O;
            F = n;
            var Ke = a;
            switch (Se.tag) {
              case 1:
                if (Ce = Se.payload, typeof Ce == "function") {
                  W = Ce.call(Ke, W, F);
                  break e;
                }
                W = Ce;
                break e;
              case 3:
                Ce.flags = Ce.flags & -65537 | 128;
              case 0:
                if (Ce = Se.payload, F = typeof Ce == "function" ? Ce.call(Ke, W, F) : Ce, F == null) break e;
                W = b({}, W, F);
                break e;
              case 2:
                Mr = !0;
            }
          }
          F = O.callback, F !== null && (e.flags |= 64, Z && (e.flags |= 8192), Z = c.callbacks, Z === null ? c.callbacks = [F] : Z.push(F));
        } else
          Z = {
            lane: F,
            tag: O.tag,
            payload: O.payload,
            callback: O.callback,
            next: null
          }, $ === null ? (H = $ = Z, j = W) : $ = $.next = Z, w |= F;
        if (O = O.next, O === null) {
          if (O = c.shared.pending, O === null)
            break;
          Z = O, O = Z.next, Z.next = null, c.lastBaseUpdate = Z, c.shared.pending = null;
        }
      } while (!0);
      $ === null && (j = W), c.baseState = j, c.firstBaseUpdate = H, c.lastBaseUpdate = $, v === null && (c.shared.lanes = 0), Ur |= w, e.lanes = w, e.memoizedState = W;
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
  var ii = Q(null), kl = Q(0);
  function Sp(e, n) {
    e = vr, se(kl, e), se(ii, n), vr = e | n.baseLanes;
  }
  function Ec() {
    se(kl, vr), se(ii, ii.current);
  }
  function Cc() {
    vr = kl.current, ae(ii), ae(kl);
  }
  var jr = 0, ze = null, Qe = null, yt = null, jl = !1, si = !1, ba = !1, Rl = 0, os = 0, li = null, Tb = 0;
  function mt() {
    throw Error(s(321));
  }
  function wc(e, n) {
    if (n === null) return !1;
    for (var a = 0; a < n.length && a < e.length; a++)
      if (!sn(e[a], n[a])) return !1;
    return !0;
  }
  function Ac(e, n, a, l, c, v) {
    return jr = v, ze = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, U.H = e === null || e.memoizedState === null ? am : im, ba = !1, v = a(l, c), ba = !1, si && (v = Ep(
      n,
      a,
      l,
      c
    )), xp(e), v;
  }
  function xp(e) {
    U.H = Ul;
    var n = Qe !== null && Qe.next !== null;
    if (jr = 0, yt = Qe = ze = null, jl = !1, os = 0, li = null, n) throw Error(s(300));
    e === null || Tt || (e = e.dependencies, e !== null && Nl(e) && (Tt = !0));
  }
  function Ep(e, n, a, l) {
    ze = e;
    var c = 0;
    do {
      if (si && (li = null), os = 0, si = !1, 25 <= c) throw Error(s(301));
      if (c += 1, yt = Qe = null, e.updateQueue != null) {
        var v = e.updateQueue;
        v.lastEffect = null, v.events = null, v.stores = null, v.memoCache != null && (v.memoCache.index = 0);
      }
      U.H = zb, v = n(a, l);
    } while (si);
    return v;
  }
  function Ob() {
    var e = U.H, n = e.useState()[0];
    return n = typeof n.then == "function" ? us(n) : n, e = e.useState()[0], (Qe !== null ? Qe.memoizedState : null) !== e && (ze.flags |= 1024), n;
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
    jr = 0, yt = Qe = ze = null, si = !1, os = Rl = 0, li = null;
  }
  function Jt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return yt === null ? ze.memoizedState = yt = e : yt = yt.next = e, yt;
  }
  function bt() {
    if (Qe === null) {
      var e = ze.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Qe.next;
    var n = yt === null ? ze.memoizedState : yt.next;
    if (n !== null)
      yt = n, Qe = e;
    else {
      if (e === null)
        throw ze.alternate === null ? Error(s(467)) : Error(s(310));
      Qe = e, e = {
        memoizedState: Qe.memoizedState,
        baseState: Qe.baseState,
        baseQueue: Qe.baseQueue,
        queue: Qe.queue,
        next: null
      }, yt === null ? ze.memoizedState = yt = e : yt = yt.next = e;
    }
    return yt;
  }
  function Mc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function us(e) {
    var n = os;
    return os += 1, li === null && (li = []), e = gp(li, e, n), n = ze, (yt === null ? n.memoizedState : yt.next) === null && (n = n.alternate, U.H = n === null || n.memoizedState === null ? am : im), e;
  }
  function zl(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return us(e);
      if (e.$$typeof === M) return Bt(e);
    }
    throw Error(s(438, String(e)));
  }
  function Dc(e) {
    var n = null, a = ze.updateQueue;
    if (a !== null && (n = a.memoCache), n == null) {
      var l = ze.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (n = {
        data: l.data.map(function(c) {
          return c.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), a === null && (a = Mc(), ze.updateQueue = a), a.memoCache = n, a = n.data[n.index], a === void 0)
      for (a = n.data[n.index] = Array(e), l = 0; l < e; l++)
        a[l] = I;
    return n.index++, a;
  }
  function fr(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Ll(e) {
    var n = bt();
    return kc(n, Qe, e);
  }
  function kc(e, n, a) {
    var l = e.queue;
    if (l === null) throw Error(s(311));
    l.lastRenderedReducer = a;
    var c = e.baseQueue, v = l.pending;
    if (v !== null) {
      if (c !== null) {
        var w = c.next;
        c.next = v.next, v.next = w;
      }
      n.baseQueue = c = v, l.pending = null;
    }
    if (v = e.baseState, c === null) e.memoizedState = v;
    else {
      n = c.next;
      var O = w = null, j = null, H = n, $ = !1;
      do {
        var W = H.lane & -536870913;
        if (W !== H.lane ? (Ze & W) === W : (jr & W) === W) {
          var F = H.revertLane;
          if (F === 0)
            j !== null && (j = j.next = {
              lane: 0,
              revertLane: 0,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            }), W === ri && ($ = !0);
          else if ((jr & F) === F) {
            H = H.next, F === ri && ($ = !0);
            continue;
          } else
            W = {
              lane: 0,
              revertLane: H.revertLane,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            }, j === null ? (O = j = W, w = v) : j = j.next = W, ze.lanes |= F, Ur |= F;
          W = H.action, ba && a(v, W), v = H.hasEagerState ? H.eagerState : a(v, W);
        } else
          F = {
            lane: W,
            revertLane: H.revertLane,
            action: H.action,
            hasEagerState: H.hasEagerState,
            eagerState: H.eagerState,
            next: null
          }, j === null ? (O = j = F, w = v) : j = j.next = F, ze.lanes |= W, Ur |= W;
        H = H.next;
      } while (H !== null && H !== n);
      if (j === null ? w = v : j.next = O, !sn(v, e.memoizedState) && (Tt = !0, $ && (a = ai, a !== null)))
        throw a;
      e.memoizedState = v, e.baseState = w, e.baseQueue = j, l.lastRenderedState = v;
    }
    return c === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function jc(e) {
    var n = bt(), a = n.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = e;
    var l = a.dispatch, c = a.pending, v = n.memoizedState;
    if (c !== null) {
      a.pending = null;
      var w = c = c.next;
      do
        v = e(v, w.action), w = w.next;
      while (w !== c);
      sn(v, n.memoizedState) || (Tt = !0), n.memoizedState = v, n.baseQueue === null && (n.baseState = v), a.lastRenderedState = v;
    }
    return [v, l];
  }
  function Cp(e, n, a) {
    var l = ze, c = bt(), v = Ye;
    if (v) {
      if (a === void 0) throw Error(s(407));
      a = a();
    } else a = n();
    var w = !sn(
      (Qe || c).memoizedState,
      a
    );
    w && (c.memoizedState = a, Tt = !0), c = c.queue;
    var O = Np.bind(null, l, c, e);
    if (cs(2048, 8, O, [e]), c.getSnapshot !== n || w || yt !== null && yt.memoizedState.tag & 1) {
      if (l.flags |= 2048, oi(
        9,
        Pl(),
        Ap.bind(
          null,
          l,
          c,
          a,
          n
        ),
        null
      ), nt === null) throw Error(s(349));
      v || (jr & 124) !== 0 || wp(l, n, a);
    }
    return a;
  }
  function wp(e, n, a) {
    e.flags |= 16384, e = { getSnapshot: n, value: a }, n = ze.updateQueue, n === null ? (n = Mc(), ze.updateQueue = n, n.stores = [e]) : (a = n.stores, a === null ? n.stores = [e] : a.push(e));
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
        Zn(!0);
        try {
          a();
        } finally {
          Zn(!1);
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
  function Mp(e, n, a, l) {
    return e.baseState = a, kc(
      e,
      Qe,
      typeof l == "function" ? l : fr
    );
  }
  function Mb(e, n, a, l, c) {
    if (Bl(e)) throw Error(s(485));
    if (e = n.action, e !== null) {
      var v = {
        payload: c,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(w) {
          v.listeners.push(w);
        }
      };
      U.T !== null ? a(!0) : v.isTransition = !1, l(v), a = n.pending, a === null ? (v.next = n.pending = v, Dp(n, v)) : (v.next = a.next, n.pending = a.next = v);
    }
  }
  function Dp(e, n) {
    var a = n.action, l = n.payload, c = e.state;
    if (n.isTransition) {
      var v = U.T, w = {};
      U.T = w;
      try {
        var O = a(c, l), j = U.S;
        j !== null && j(w, O), kp(e, n, O);
      } catch (H) {
        zc(e, n, H);
      } finally {
        U.T = v;
      }
    } else
      try {
        v = a(c, l), kp(e, n, v);
      } catch (H) {
        zc(e, n, H);
      }
  }
  function kp(e, n, a) {
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
    if (Ye) {
      var a = nt.formState;
      if (a !== null) {
        e: {
          var l = ze;
          if (Ye) {
            if (ct) {
              t: {
                for (var c = ct, v = Vn; c.nodeType !== 8; ) {
                  if (!v) {
                    c = null;
                    break t;
                  }
                  if (c = In(
                    c.nextSibling
                  ), c === null) {
                    c = null;
                    break t;
                  }
                }
                v = c.data, c = v === "F!" || v === "F" ? c : null;
              }
              if (c) {
                ct = In(
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
      ze,
      l
    ), l.dispatch = a, l = Rc(!1), v = Uc.bind(
      null,
      ze,
      !1,
      l.queue
    ), l = Jt(), c = {
      state: n,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = c, a = Mb.bind(
      null,
      ze,
      c,
      v,
      a
    ), c.dispatch = a, l.memoizedState = e, [n, a, !1];
  }
  function Pp(e) {
    var n = bt();
    return Ip(n, Qe, e);
  }
  function Ip(e, n, a) {
    if (n = kc(
      e,
      n,
      zp
    )[0], e = Ll(fr)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var l = us(n);
      } catch (w) {
        throw w === rs ? Ml : w;
      }
    else l = n;
    n = bt();
    var c = n.queue, v = c.dispatch;
    return a !== n.memoizedState && (ze.flags |= 2048, oi(
      9,
      Pl(),
      Db.bind(null, c, a),
      null
    )), [l, v, e];
  }
  function Db(e, n) {
    e.action = n;
  }
  function Bp(e) {
    var n = bt(), a = Qe;
    if (a !== null)
      return Ip(n, a, e);
    bt(), n = n.memoizedState, a = bt();
    var l = a.queue.dispatch;
    return a.memoizedState = e, [n, l, !1];
  }
  function oi(e, n, a, l) {
    return e = { tag: e, create: a, deps: l, inst: n, next: null }, n = ze.updateQueue, n === null && (n = Mc(), ze.updateQueue = n), a = n.lastEffect, a === null ? n.lastEffect = e.next = e : (l = a.next, a.next = e, e.next = l, n.lastEffect = e), e;
  }
  function Pl() {
    return { destroy: void 0, resource: void 0 };
  }
  function Up() {
    return bt().memoizedState;
  }
  function Il(e, n, a, l) {
    var c = Jt();
    l = l === void 0 ? null : l, ze.flags |= e, c.memoizedState = oi(
      1 | n,
      Pl(),
      a,
      l
    );
  }
  function cs(e, n, a, l) {
    var c = bt();
    l = l === void 0 ? null : l;
    var v = c.memoizedState.inst;
    Qe !== null && l !== null && wc(l, Qe.memoizedState.deps) ? c.memoizedState = oi(n, v, a, l) : (ze.flags |= e, c.memoizedState = oi(
      1 | n,
      v,
      a,
      l
    ));
  }
  function Hp(e, n) {
    Il(8390656, 8, e, n);
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
    var a = bt();
    n = n === void 0 ? null : n;
    var l = a.memoizedState;
    return n !== null && wc(n, l[1]) ? l[0] : (a.memoizedState = [e, n], e);
  }
  function Xp(e, n) {
    var a = bt();
    n = n === void 0 ? null : n;
    var l = a.memoizedState;
    if (n !== null && wc(n, l[1]))
      return l[0];
    if (l = e(), ba) {
      Zn(!0);
      try {
        e();
      } finally {
        Zn(!1);
      }
    }
    return a.memoizedState = [l, n], l;
  }
  function Pc(e, n, a) {
    return a === void 0 || (jr & 1073741824) !== 0 ? e.memoizedState = n : (e.memoizedState = a, e = Jm(), ze.lanes |= e, Ur |= e, a);
  }
  function $p(e, n, a, l) {
    return sn(a, n) ? a : ii.current !== null ? (e = Pc(e, a, l), sn(e, n) || (Tt = !0), e) : (jr & 42) === 0 ? (Tt = !0, e.memoizedState = a) : (e = Jm(), ze.lanes |= e, Ur |= e, n);
  }
  function Qp(e, n, a, l, c) {
    var v = re.p;
    re.p = v !== 0 && 8 > v ? v : 8;
    var w = U.T, O = {};
    U.T = O, Uc(e, !1, n, a);
    try {
      var j = c(), H = U.S;
      if (H !== null && H(O, j), j !== null && typeof j == "object" && typeof j.then == "function") {
        var $ = Nb(
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
      re.p = v, U.T = w;
    }
  }
  function kb() {
  }
  function Ic(e, n, a, l) {
    if (e.tag !== 5) throw Error(s(476));
    var c = Jp(e).queue;
    Qp(
      e,
      c,
      n,
      de,
      a === null ? kb : function() {
        return Kp(e), a(l);
      }
    );
  }
  function Jp(e) {
    var n = e.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: de,
      baseState: de,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fr,
        lastRenderedState: de
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
    return Bt(Os);
  }
  function Wp() {
    return bt().memoizedState;
  }
  function em() {
    return bt().memoizedState;
  }
  function jb(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var a = fn();
          e = Dr(a);
          var l = kr(n, e, a);
          l !== null && (dn(l, n, a), is(l, n, a)), n = { cache: mc() }, e.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function Rb(e, n, a) {
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
      var v = e.alternate;
      if (e.lanes === 0 && (v === null || v.lanes === 0) && (v = n.lastRenderedReducer, v !== null))
        try {
          var w = n.lastRenderedState, O = v(w, a);
          if (c.hasEagerState = !0, c.eagerState = O, sn(O, w))
            return xl(e, n, c, 0), nt === null && Sl(), !1;
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
    return e === ze || n !== null && n === ze;
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
    readContext: Bt,
    use: zl,
    useCallback: mt,
    useContext: mt,
    useEffect: mt,
    useImperativeHandle: mt,
    useLayoutEffect: mt,
    useInsertionEffect: mt,
    useMemo: mt,
    useReducer: mt,
    useRef: mt,
    useState: mt,
    useDebugValue: mt,
    useDeferredValue: mt,
    useTransition: mt,
    useSyncExternalStore: mt,
    useId: mt,
    useHostTransitionStatus: mt,
    useFormState: mt,
    useActionState: mt,
    useOptimistic: mt,
    useMemoCache: mt,
    useCacheRefresh: mt
  }, am = {
    readContext: Bt,
    use: zl,
    useCallback: function(e, n) {
      return Jt().memoizedState = [
        e,
        n === void 0 ? null : n
      ], e;
    },
    useContext: Bt,
    useEffect: Hp,
    useImperativeHandle: function(e, n, a) {
      a = a != null ? a.concat([e]) : null, Il(
        4194308,
        4,
        Gp.bind(null, n, e),
        a
      );
    },
    useLayoutEffect: function(e, n) {
      return Il(4194308, 4, e, n);
    },
    useInsertionEffect: function(e, n) {
      Il(4, 2, e, n);
    },
    useMemo: function(e, n) {
      var a = Jt();
      n = n === void 0 ? null : n;
      var l = e();
      if (ba) {
        Zn(!0);
        try {
          e();
        } finally {
          Zn(!1);
        }
      }
      return a.memoizedState = [l, n], l;
    },
    useReducer: function(e, n, a) {
      var l = Jt();
      if (a !== void 0) {
        var c = a(n);
        if (ba) {
          Zn(!0);
          try {
            a(n);
          } finally {
            Zn(!1);
          }
        }
      } else c = n;
      return l.memoizedState = l.baseState = c, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: c
      }, l.queue = e, e = e.dispatch = Rb.bind(
        null,
        ze,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var n = Jt();
      return e = { current: e }, n.memoizedState = e;
    },
    useState: function(e) {
      e = Rc(e);
      var n = e.queue, a = tm.bind(null, ze, n);
      return n.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: Lc,
    useDeferredValue: function(e, n) {
      var a = Jt();
      return Pc(a, e, n);
    },
    useTransition: function() {
      var e = Rc(!1);
      return e = Qp.bind(
        null,
        ze,
        e.queue,
        !0,
        !1
      ), Jt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, n, a) {
      var l = ze, c = Jt();
      if (Ye) {
        if (a === void 0)
          throw Error(s(407));
        a = a();
      } else {
        if (a = n(), nt === null)
          throw Error(s(349));
        (Ze & 124) !== 0 || wp(l, n, a);
      }
      c.memoizedState = a;
      var v = { value: a, getSnapshot: n };
      return c.queue = v, Hp(Np.bind(null, l, v, e), [
        e
      ]), l.flags |= 2048, oi(
        9,
        Pl(),
        Ap.bind(
          null,
          l,
          v,
          a,
          n
        ),
        null
      ), a;
    },
    useId: function() {
      var e = Jt(), n = nt.identifierPrefix;
      if (Ye) {
        var a = or, l = lr;
        a = (l & ~(1 << 32 - qt(l) - 1)).toString(32) + a, n = "«" + n + "R" + a, a = Rl++, 0 < a && (n += "H" + a.toString(32)), n += "»";
      } else
        a = Tb++, n = "«" + n + "r" + a.toString(32) + "»";
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
        ze,
        !0,
        a
      ), a.dispatch = n, [e, n];
    },
    useMemoCache: Dc,
    useCacheRefresh: function() {
      return Jt().memoizedState = jb.bind(
        null,
        ze
      );
    }
  }, im = {
    readContext: Bt,
    use: zl,
    useCallback: Yp,
    useContext: Bt,
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
      var a = bt();
      return $p(
        a,
        Qe.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = Ll(fr)[0], n = bt().memoizedState;
      return [
        typeof e == "boolean" ? e : us(e),
        n
      ];
    },
    useSyncExternalStore: Cp,
    useId: Wp,
    useHostTransitionStatus: Bc,
    useFormState: Pp,
    useActionState: Pp,
    useOptimistic: function(e, n) {
      var a = bt();
      return Mp(a, Qe, e, n);
    },
    useMemoCache: Dc,
    useCacheRefresh: em
  }, zb = {
    readContext: Bt,
    use: zl,
    useCallback: Yp,
    useContext: Bt,
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
      var a = bt();
      return Qe === null ? Pc(a, e, n) : $p(
        a,
        Qe.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = jc(fr)[0], n = bt().memoizedState;
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
      var a = bt();
      return Qe !== null ? Mp(a, Qe, e, n) : (a.baseState = e, [e, a.queue.dispatch]);
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
    function n(L, z) {
      if (e) {
        var B = L.deletions;
        B === null ? (L.deletions = [z], L.flags |= 16) : B.push(z);
      }
    }
    function a(L, z) {
      if (!e) return null;
      for (; z !== null; )
        n(L, z), z = z.sibling;
      return null;
    }
    function l(L) {
      for (var z = /* @__PURE__ */ new Map(); L !== null; )
        L.key !== null ? z.set(L.key, L) : z.set(L.index, L), L = L.sibling;
      return z;
    }
    function c(L, z) {
      return L = sr(L, z), L.index = 0, L.sibling = null, L;
    }
    function v(L, z, B) {
      return L.index = B, e ? (B = L.alternate, B !== null ? (B = B.index, B < z ? (L.flags |= 67108866, z) : B) : (L.flags |= 67108866, z)) : (L.flags |= 1048576, z);
    }
    function w(L) {
      return e && L.alternate === null && (L.flags |= 67108866), L;
    }
    function O(L, z, B, J) {
      return z === null || z.tag !== 6 ? (z = lc(B, L.mode, J), z.return = L, z) : (z = c(z, B), z.return = L, z);
    }
    function j(L, z, B, J) {
      var he = B.type;
      return he === d ? $(
        L,
        z,
        B.props.children,
        J,
        B.key
      ) : z !== null && (z.elementType === he || typeof he == "object" && he !== null && he.$$typeof === q && sm(he) === z.type) ? (z = c(z, B.props), hs(z, B), z.return = L, z) : (z = Cl(
        B.type,
        B.key,
        B.props,
        null,
        L.mode,
        J
      ), hs(z, B), z.return = L, z);
    }
    function H(L, z, B, J) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== B.containerInfo || z.stateNode.implementation !== B.implementation ? (z = oc(B, L.mode, J), z.return = L, z) : (z = c(z, B.children || []), z.return = L, z);
    }
    function $(L, z, B, J, he) {
      return z === null || z.tag !== 7 ? (z = fa(
        B,
        L.mode,
        J,
        he
      ), z.return = L, z) : (z = c(z, B), z.return = L, z);
    }
    function W(L, z, B) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return z = lc(
          "" + z,
          L.mode,
          B
        ), z.return = L, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case m:
            return B = Cl(
              z.type,
              z.key,
              z.props,
              null,
              L.mode,
              B
            ), hs(B, z), B.return = L, B;
          case g:
            return z = oc(
              z,
              L.mode,
              B
            ), z.return = L, z;
          case q:
            var J = z._init;
            return z = J(z._payload), W(L, z, B);
        }
        if (ve(z) || Y(z))
          return z = fa(
            z,
            L.mode,
            B,
            null
          ), z.return = L, z;
        if (typeof z.then == "function")
          return W(L, Hl(z), B);
        if (z.$$typeof === M)
          return W(
            L,
            Tl(L, z),
            B
          );
        ql(L, z);
      }
      return null;
    }
    function F(L, z, B, J) {
      var he = z !== null ? z.key : null;
      if (typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint")
        return he !== null ? null : O(L, z, "" + B, J);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case m:
            return B.key === he ? j(L, z, B, J) : null;
          case g:
            return B.key === he ? H(L, z, B, J) : null;
          case q:
            return he = B._init, B = he(B._payload), F(L, z, B, J);
        }
        if (ve(B) || Y(B))
          return he !== null ? null : $(L, z, B, J, null);
        if (typeof B.then == "function")
          return F(
            L,
            z,
            Hl(B),
            J
          );
        if (B.$$typeof === M)
          return F(
            L,
            z,
            Tl(L, B),
            J
          );
        ql(L, B);
      }
      return null;
    }
    function Z(L, z, B, J, he) {
      if (typeof J == "string" && J !== "" || typeof J == "number" || typeof J == "bigint")
        return L = L.get(B) || null, O(z, L, "" + J, he);
      if (typeof J == "object" && J !== null) {
        switch (J.$$typeof) {
          case m:
            return L = L.get(
              J.key === null ? B : J.key
            ) || null, j(z, L, J, he);
          case g:
            return L = L.get(
              J.key === null ? B : J.key
            ) || null, H(z, L, J, he);
          case q:
            var Pe = J._init;
            return J = Pe(J._payload), Z(
              L,
              z,
              B,
              J,
              he
            );
        }
        if (ve(J) || Y(J))
          return L = L.get(B) || null, $(z, L, J, he, null);
        if (typeof J.then == "function")
          return Z(
            L,
            z,
            B,
            Hl(J),
            he
          );
        if (J.$$typeof === M)
          return Z(
            L,
            z,
            B,
            Tl(z, J),
            he
          );
        ql(z, J);
      }
      return null;
    }
    function Ce(L, z, B, J) {
      for (var he = null, Pe = null, ge = z, xe = z = 0, Mt = null; ge !== null && xe < B.length; xe++) {
        ge.index > xe ? (Mt = ge, ge = null) : Mt = ge.sibling;
        var Ve = F(
          L,
          ge,
          B[xe],
          J
        );
        if (Ve === null) {
          ge === null && (ge = Mt);
          break;
        }
        e && ge && Ve.alternate === null && n(L, ge), z = v(Ve, z, xe), Pe === null ? he = Ve : Pe.sibling = Ve, Pe = Ve, ge = Mt;
      }
      if (xe === B.length)
        return a(L, ge), Ye && ha(L, xe), he;
      if (ge === null) {
        for (; xe < B.length; xe++)
          ge = W(L, B[xe], J), ge !== null && (z = v(
            ge,
            z,
            xe
          ), Pe === null ? he = ge : Pe.sibling = ge, Pe = ge);
        return Ye && ha(L, xe), he;
      }
      for (ge = l(ge); xe < B.length; xe++)
        Mt = Z(
          ge,
          L,
          xe,
          B[xe],
          J
        ), Mt !== null && (e && Mt.alternate !== null && ge.delete(
          Mt.key === null ? xe : Mt.key
        ), z = v(
          Mt,
          z,
          xe
        ), Pe === null ? he = Mt : Pe.sibling = Mt, Pe = Mt);
      return e && ge.forEach(function($r) {
        return n(L, $r);
      }), Ye && ha(L, xe), he;
    }
    function Se(L, z, B, J) {
      if (B == null) throw Error(s(151));
      for (var he = null, Pe = null, ge = z, xe = z = 0, Mt = null, Ve = B.next(); ge !== null && !Ve.done; xe++, Ve = B.next()) {
        ge.index > xe ? (Mt = ge, ge = null) : Mt = ge.sibling;
        var $r = F(L, ge, Ve.value, J);
        if ($r === null) {
          ge === null && (ge = Mt);
          break;
        }
        e && ge && $r.alternate === null && n(L, ge), z = v($r, z, xe), Pe === null ? he = $r : Pe.sibling = $r, Pe = $r, ge = Mt;
      }
      if (Ve.done)
        return a(L, ge), Ye && ha(L, xe), he;
      if (ge === null) {
        for (; !Ve.done; xe++, Ve = B.next())
          Ve = W(L, Ve.value, J), Ve !== null && (z = v(Ve, z, xe), Pe === null ? he = Ve : Pe.sibling = Ve, Pe = Ve);
        return Ye && ha(L, xe), he;
      }
      for (ge = l(ge); !Ve.done; xe++, Ve = B.next())
        Ve = Z(ge, L, xe, Ve.value, J), Ve !== null && (e && Ve.alternate !== null && ge.delete(Ve.key === null ? xe : Ve.key), z = v(Ve, z, xe), Pe === null ? he = Ve : Pe.sibling = Ve, Pe = Ve);
      return e && ge.forEach(function(L_) {
        return n(L, L_);
      }), Ye && ha(L, xe), he;
    }
    function Ke(L, z, B, J) {
      if (typeof B == "object" && B !== null && B.type === d && B.key === null && (B = B.props.children), typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case m:
            e: {
              for (var he = B.key; z !== null; ) {
                if (z.key === he) {
                  if (he = B.type, he === d) {
                    if (z.tag === 7) {
                      a(
                        L,
                        z.sibling
                      ), J = c(
                        z,
                        B.props.children
                      ), J.return = L, L = J;
                      break e;
                    }
                  } else if (z.elementType === he || typeof he == "object" && he !== null && he.$$typeof === q && sm(he) === z.type) {
                    a(
                      L,
                      z.sibling
                    ), J = c(z, B.props), hs(J, B), J.return = L, L = J;
                    break e;
                  }
                  a(L, z);
                  break;
                } else n(L, z);
                z = z.sibling;
              }
              B.type === d ? (J = fa(
                B.props.children,
                L.mode,
                J,
                B.key
              ), J.return = L, L = J) : (J = Cl(
                B.type,
                B.key,
                B.props,
                null,
                L.mode,
                J
              ), hs(J, B), J.return = L, L = J);
            }
            return w(L);
          case g:
            e: {
              for (he = B.key; z !== null; ) {
                if (z.key === he)
                  if (z.tag === 4 && z.stateNode.containerInfo === B.containerInfo && z.stateNode.implementation === B.implementation) {
                    a(
                      L,
                      z.sibling
                    ), J = c(z, B.children || []), J.return = L, L = J;
                    break e;
                  } else {
                    a(L, z);
                    break;
                  }
                else n(L, z);
                z = z.sibling;
              }
              J = oc(B, L.mode, J), J.return = L, L = J;
            }
            return w(L);
          case q:
            return he = B._init, B = he(B._payload), Ke(
              L,
              z,
              B,
              J
            );
        }
        if (ve(B))
          return Ce(
            L,
            z,
            B,
            J
          );
        if (Y(B)) {
          if (he = Y(B), typeof he != "function") throw Error(s(150));
          return B = he.call(B), Se(
            L,
            z,
            B,
            J
          );
        }
        if (typeof B.then == "function")
          return Ke(
            L,
            z,
            Hl(B),
            J
          );
        if (B.$$typeof === M)
          return Ke(
            L,
            z,
            Tl(L, B),
            J
          );
        ql(L, B);
      }
      return typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint" ? (B = "" + B, z !== null && z.tag === 6 ? (a(L, z.sibling), J = c(z, B), J.return = L, L = J) : (a(L, z), J = lc(B, L.mode, J), J.return = L, L = J), w(L)) : a(L, z);
    }
    return function(L, z, B, J) {
      try {
        ds = 0;
        var he = Ke(
          L,
          z,
          B,
          J
        );
        return ui = null, he;
      } catch (ge) {
        if (ge === rs || ge === Ml) throw ge;
        var Pe = ln(29, ge, null, L.mode);
        return Pe.lanes = J, Pe.return = L, Pe;
      } finally {
      }
    };
  }
  var ci = lm(!0), om = lm(!1), Nn = Q(null), Yn = null;
  function Rr(e) {
    var n = e.alternate;
    se(Ct, Ct.current & 1), se(Nn, e), Yn === null && (n === null || ii.current !== null || n.memoizedState !== null) && (Yn = e);
  }
  function um(e) {
    if (e.tag === 22) {
      if (se(Ct, Ct.current), se(Nn, e), Yn === null) {
        var n = e.alternate;
        n !== null && n.memoizedState !== null && (Yn = e);
      }
    } else zr();
  }
  function zr() {
    se(Ct, Ct.current), se(Nn, Nn.current);
  }
  function dr(e) {
    ae(Nn), Yn === e && (Yn = null), ae(Ct);
  }
  var Ct = Q(0);
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
      var l = fn(), c = Dr(l);
      c.payload = n, a != null && (c.callback = a), n = kr(e, c, l), n !== null && (dn(n, e, l), is(n, e, l));
    },
    enqueueReplaceState: function(e, n, a) {
      e = e._reactInternals;
      var l = fn(), c = Dr(l);
      c.tag = 1, c.payload = n, a != null && (c.callback = a), n = kr(e, c, l), n !== null && (dn(n, e, l), is(n, e, l));
    },
    enqueueForceUpdate: function(e, n) {
      e = e._reactInternals;
      var a = fn(), l = Dr(a);
      l.tag = 2, n != null && (l.callback = n), n = kr(e, l, a), n !== null && (dn(n, e, a), is(n, e, a));
    }
  };
  function cm(e, n, a, l, c, v, w) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, v, w) : n.prototype && n.prototype.isPureReactComponent ? !$i(a, l) || !$i(c, v) : !0;
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
    return a = Dr(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      Gl(e, n);
    }, a;
  }
  function gm(e) {
    return e = Dr(e), e.tag = 3, e;
  }
  function vm(e, n, a, l) {
    var c = a.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var v = l.value;
      e.payload = function() {
        return c(v);
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
  function Lb(e, n, a, l, c) {
    if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (n = a.alternate, n !== null && es(
        n,
        a,
        c,
        !0
      ), a = Nn.current, a !== null) {
        switch (a.tag) {
          case 13:
            return Yn === null ? pf() : a.alternate === null && ft === 0 && (ft = 3), a.flags &= -257, a.flags |= 65536, a.lanes = c, l === yc ? a.flags |= 16384 : (n = a.updateQueue, n === null ? a.updateQueue = /* @__PURE__ */ new Set([l]) : n.add(l), gf(e, l, c)), !1;
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
    if (Ye)
      return n = Nn.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = c, l !== fc && (e = Error(s(422), { cause: l }), Wi(En(e, a)))) : (l !== fc && (n = Error(s(423), {
        cause: l
      }), Wi(
        En(n, a)
      )), e = e.current.alternate, e.flags |= 65536, c &= -c, e.lanes |= c, l = En(l, a), c = Fc(
        e.stateNode,
        l,
        c
      ), Sc(e, c), ft !== 4 && (ft = 2)), !1;
    var v = Error(s(520), { cause: l });
    if (v = En(v, a), _s === null ? _s = [v] : _s.push(v), ft !== 4 && (ft = 2), n === null) return !0;
    l = En(l, a), a = n;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = c & -c, a.lanes |= e, e = Fc(a.stateNode, l, e), Sc(a, e), !1;
        case 1:
          if (n = a.type, v = a.stateNode, (a.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (Hr === null || !Hr.has(v))))
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
  function kt(e, n, a, l) {
    n.child = e === null ? om(n, null, a, l) : ci(
      n,
      e.child,
      a,
      l
    );
  }
  function bm(e, n, a, l, c) {
    a = a.render;
    var v = n.ref;
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
      v,
      c
    ), O = Nc(), e !== null && !Tt ? (Tc(e, n, c), hr(e, n, c)) : (Ye && O && uc(n), n.flags |= 1, kt(e, n, l, c), n.child);
  }
  function _m(e, n, a, l, c) {
    if (e === null) {
      var v = a.type;
      return typeof v == "function" && !sc(v) && v.defaultProps === void 0 && a.compare === null ? (n.tag = 15, n.type = v, Sm(
        e,
        n,
        v,
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
    if (v = e.child, !Jc(e, c)) {
      var w = v.memoizedProps;
      if (a = a.compare, a = a !== null ? a : $i, a(w, l) && e.ref === n.ref)
        return hr(e, n, c);
    }
    return n.flags |= 1, e = sr(v, l), e.ref = n.ref, e.return = n, n.child = e;
  }
  function Sm(e, n, a, l, c) {
    if (e !== null) {
      var v = e.memoizedProps;
      if ($i(v, l) && e.ref === n.ref)
        if (Tt = !1, n.pendingProps = l = v, Jc(e, c))
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
    var l = n.pendingProps, c = l.children, v = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (l = v !== null ? v.baseLanes | a : a, e !== null) {
          for (c = n.child = e.child, v = 0; c !== null; )
            v = v | c.lanes | c.childLanes, c = c.sibling;
          n.childLanes = v & ~l;
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
          v !== null ? v.cachePool : null
        ), v !== null ? Sp(n, v) : Ec(), um(n);
      else
        return n.lanes = n.childLanes = 536870912, Em(
          e,
          n,
          v !== null ? v.baseLanes | a : a,
          a
        );
    } else
      v !== null ? (Ol(n, v.cachePool), Sp(n, v), zr(), n.memoizedState = null) : (e !== null && Ol(n, null), Ec(), zr());
    return kt(e, n, c, a), n.child;
  }
  function Em(e, n, a, l) {
    var c = vc();
    return c = c === null ? null : { parent: Et._currentValue, pool: c }, n.memoizedState = {
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
    ), l = Nc(), e !== null && !Tt ? (Tc(e, n, c), hr(e, n, c)) : (Ye && l && uc(n), n.flags |= 1, kt(e, n, a, c), n.child);
  }
  function Cm(e, n, a, l, c, v) {
    return va(n), n.updateQueue = null, a = Ep(
      n,
      l,
      a,
      c
    ), xp(e), l = Nc(), e !== null && !Tt ? (Tc(e, n, v), hr(e, n, v)) : (Ye && l && uc(n), n.flags |= 1, kt(e, n, a, v), n.child);
  }
  function wm(e, n, a, l, c) {
    if (va(n), n.stateNode === null) {
      var v = ei, w = a.contextType;
      typeof w == "object" && w !== null && (v = Bt(w)), v = new a(l, v), n.memoizedState = v.state !== null && v.state !== void 0 ? v.state : null, v.updater = qc, n.stateNode = v, v._reactInternals = n, v = n.stateNode, v.props = l, v.state = n.memoizedState, v.refs = {}, bc(n), w = a.contextType, v.context = typeof w == "object" && w !== null ? Bt(w) : ei, v.state = n.memoizedState, w = a.getDerivedStateFromProps, typeof w == "function" && (Hc(
        n,
        a,
        w,
        l
      ), v.state = n.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof v.getSnapshotBeforeUpdate == "function" || typeof v.UNSAFE_componentWillMount != "function" && typeof v.componentWillMount != "function" || (w = v.state, typeof v.componentWillMount == "function" && v.componentWillMount(), typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount(), w !== v.state && qc.enqueueReplaceState(v, v.state, null), ls(n, l, v, c), ss(), v.state = n.memoizedState), typeof v.componentDidMount == "function" && (n.flags |= 4194308), l = !0;
    } else if (e === null) {
      v = n.stateNode;
      var O = n.memoizedProps, j = _a(a, O);
      v.props = j;
      var H = v.context, $ = a.contextType;
      w = ei, typeof $ == "object" && $ !== null && (w = Bt($));
      var W = a.getDerivedStateFromProps;
      $ = typeof W == "function" || typeof v.getSnapshotBeforeUpdate == "function", O = n.pendingProps !== O, $ || typeof v.UNSAFE_componentWillReceiveProps != "function" && typeof v.componentWillReceiveProps != "function" || (O || H !== w) && fm(
        n,
        v,
        l,
        w
      ), Mr = !1;
      var F = n.memoizedState;
      v.state = F, ls(n, l, v, c), ss(), H = n.memoizedState, O || F !== H || Mr ? (typeof W == "function" && (Hc(
        n,
        a,
        W,
        l
      ), H = n.memoizedState), (j = Mr || cm(
        n,
        a,
        j,
        l,
        F,
        H,
        w
      )) ? ($ || typeof v.UNSAFE_componentWillMount != "function" && typeof v.componentWillMount != "function" || (typeof v.componentWillMount == "function" && v.componentWillMount(), typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount()), typeof v.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof v.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = l, n.memoizedState = H), v.props = l, v.state = H, v.context = w, l = j) : (typeof v.componentDidMount == "function" && (n.flags |= 4194308), l = !1);
    } else {
      v = n.stateNode, _c(e, n), w = n.memoizedProps, $ = _a(a, w), v.props = $, W = n.pendingProps, F = v.context, H = a.contextType, j = ei, typeof H == "object" && H !== null && (j = Bt(H)), O = a.getDerivedStateFromProps, (H = typeof O == "function" || typeof v.getSnapshotBeforeUpdate == "function") || typeof v.UNSAFE_componentWillReceiveProps != "function" && typeof v.componentWillReceiveProps != "function" || (w !== W || F !== j) && fm(
        n,
        v,
        l,
        j
      ), Mr = !1, F = n.memoizedState, v.state = F, ls(n, l, v, c), ss();
      var Z = n.memoizedState;
      w !== W || F !== Z || Mr || e !== null && e.dependencies !== null && Nl(e.dependencies) ? (typeof O == "function" && (Hc(
        n,
        a,
        O,
        l
      ), Z = n.memoizedState), ($ = Mr || cm(
        n,
        a,
        $,
        l,
        F,
        Z,
        j
      ) || e !== null && e.dependencies !== null && Nl(e.dependencies)) ? (H || typeof v.UNSAFE_componentWillUpdate != "function" && typeof v.componentWillUpdate != "function" || (typeof v.componentWillUpdate == "function" && v.componentWillUpdate(l, Z, j), typeof v.UNSAFE_componentWillUpdate == "function" && v.UNSAFE_componentWillUpdate(
        l,
        Z,
        j
      )), typeof v.componentDidUpdate == "function" && (n.flags |= 4), typeof v.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof v.componentDidUpdate != "function" || w === e.memoizedProps && F === e.memoizedState || (n.flags |= 4), typeof v.getSnapshotBeforeUpdate != "function" || w === e.memoizedProps && F === e.memoizedState || (n.flags |= 1024), n.memoizedProps = l, n.memoizedState = Z), v.props = l, v.state = Z, v.context = j, l = $) : (typeof v.componentDidUpdate != "function" || w === e.memoizedProps && F === e.memoizedState || (n.flags |= 4), typeof v.getSnapshotBeforeUpdate != "function" || w === e.memoizedProps && F === e.memoizedState || (n.flags |= 1024), l = !1);
    }
    return v = l, Vl(e, n), l = (n.flags & 128) !== 0, v || l ? (v = n.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : v.render(), n.flags |= 1, e !== null && l ? (n.child = ci(
      n,
      e.child,
      null,
      c
    ), n.child = ci(
      n,
      null,
      a,
      c
    )) : kt(e, n, a, c), n.memoizedState = v.state, e = n.child) : e = hr(
      e,
      n,
      c
    ), e;
  }
  function Am(e, n, a, l) {
    return Ki(), n.flags |= 256, kt(e, n, a, l), n.child;
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
    var l = n.pendingProps, c = !1, v = (n.flags & 128) !== 0, w;
    if ((w = v) || (w = e !== null && e.memoizedState === null ? !1 : (Ct.current & 2) !== 0), w && (c = !0, n.flags &= -129), w = (n.flags & 32) !== 0, n.flags &= -33, e === null) {
      if (Ye) {
        if (c ? Rr(n) : zr(), Ye) {
          var O = ct, j;
          if (j = O) {
            e: {
              for (j = O, O = Vn; j.nodeType !== 8; ) {
                if (!O) {
                  O = null;
                  break e;
                }
                if (j = In(
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
            ), j.stateNode = O, j.return = n, n.child = j, Zt = n, ct = null, j = !0) : j = !1;
          }
          j || ma(n);
        }
        if (O = n.memoizedState, O !== null && (O = O.dehydrated, O !== null))
          return Df(O) ? n.lanes = 32 : n.lanes = 536870912, null;
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
      if (v)
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
      else if (Rr(n), Df(O)) {
        if (w = O.nextSibling && O.nextSibling.dataset, w) var H = w.dgst;
        w = H, l = Error(s(419)), l.stack = "", l.digest = w, Wi({ value: l, source: null, stack: null }), n = $c(
          e,
          n,
          a
        );
      } else if (Tt || es(e, n, a, !1), w = (a & e.childLanes) !== 0, Tt || w) {
        if (w = nt, w !== null && (l = a & -a, l = (l & 42) !== 0 ? 1 : Du(l), l = (l & (w.suspendedLanes | a)) !== 0 ? 0 : l, l !== 0 && l !== j.retryLane))
          throw j.retryLane = l, Wa(e, l), dn(w, e, l), ym;
        O.data === "$?" || pf(), n = $c(
          e,
          n,
          a
        );
      } else
        O.data === "$?" ? (n.flags |= 192, n.child = e.child, n = null) : (e = j.treeContext, ct = In(
          O.nextSibling
        ), Zt = n, Ye = !0, pa = null, Vn = !1, e !== null && (wn[An++] = lr, wn[An++] = or, wn[An++] = da, lr = e.id, or = e.overflow, da = n), n = Xc(
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
    ), c.flags |= 2), c.return = n, l.return = n, l.sibling = c, n.child = l, l = c, c = n.child, O = e.child.memoizedState, O === null ? O = Vc(a) : (j = O.cachePool, j !== null ? (H = Et._currentValue, j = j.parent !== H ? { parent: H, pool: H } : j) : j = hp(), O = {
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
    var v = e.memoizedState;
    v === null ? e.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: a,
      tailMode: c
    } : (v.isBackwards = n, v.rendering = null, v.renderingStartTime = 0, v.last = l, v.tail = a, v.tailMode = c);
  }
  function Om(e, n, a) {
    var l = n.pendingProps, c = l.revealOrder, v = l.tail;
    if (kt(e, n, l.children, a), l = Ct.current, (l & 2) !== 0)
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
    switch (se(Ct, l), c) {
      case "forwards":
        for (a = n.child, c = null; a !== null; )
          e = a.alternate, e !== null && Fl(e) === null && (c = a), a = a.sibling;
        a = c, a === null ? (c = n.child, n.child = null) : (c = a.sibling, a.sibling = null), Qc(
          n,
          !1,
          c,
          a,
          v
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
          v
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
        be(n, n.stateNode.containerInfo), Or(n, Et, e.memoizedState.cache), Ki();
        break;
      case 27:
      case 5:
        tt(n);
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
        if (c = n.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), se(Ct, Ct.current), l) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, xm(e, n, a);
      case 24:
        Or(n, Et, e.memoizedState.cache);
    }
    return hr(e, n, a);
  }
  function Mm(e, n, a) {
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
      Tt = !1, Ye && (n.flags & 1048576) !== 0 && sp(n, Al, n.index);
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
              } else if (c === k) {
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
          var v = n.memoizedState;
          c = v.element, _c(e, n), ls(n, l, null, a);
          var w = n.memoizedState;
          if (l = w.cache, Or(n, Et, l), l !== v.cache && pc(
            n,
            [Et],
            a,
            !0
          ), ss(), l = w.element, v.isDehydrated)
            if (v = {
              element: l,
              isDehydrated: !1,
              cache: w.cache
            }, n.updateQueue.baseState = v, n.memoizedState = v, n.flags & 256) {
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
              for (ct = In(e.firstChild), Zt = n, Ye = !0, pa = null, Vn = !0, a = om(
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
            kt(
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
        )) ? n.memoizedState = a : Ye || (a = n.type, e = n.pendingProps, l = lo(
          X.current
        ).createElement(a), l[It] = n, l[$t] = e, Rt(l, a, e), Nt(l), n.stateNode = l) : n.memoizedState = Rg(
          n.type,
          e.memoizedProps,
          n.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return tt(n), e === null && Ye && (l = n.stateNode = Dg(
          n.type,
          n.pendingProps,
          X.current
        ), Zt = n, Vn = !0, c = ct, Zr(n.type) ? (kf = c, ct = In(
          l.firstChild
        )) : ct = c), kt(
          e,
          n,
          n.pendingProps.children,
          a
        ), Vl(e, n), e === null && (n.flags |= 4194304), n.child;
      case 5:
        return e === null && Ye && ((c = l = ct) && (l = f_(
          l,
          n.type,
          n.pendingProps,
          Vn
        ), l !== null ? (n.stateNode = l, Zt = n, ct = In(
          l.firstChild
        ), Vn = !1, c = !0) : c = !1), c || ma(n)), tt(n), c = n.type, v = n.pendingProps, w = e !== null ? e.memoizedProps : null, l = v.children, Tf(c, v) ? l = null : w !== null && Tf(c, w) && (n.flags |= 32), n.memoizedState !== null && (c = Ac(
          e,
          n,
          Ob,
          null,
          null,
          a
        ), Os._currentValue = c), Vl(e, n), kt(e, n, l, a), n.child;
      case 6:
        return e === null && Ye && ((e = a = ct) && (a = d_(
          a,
          n.pendingProps,
          Vn
        ), a !== null ? (n.stateNode = a, Zt = n, ct = null, e = !0) : e = !1), e || ma(n)), null;
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
        ) : kt(
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
        return kt(
          e,
          n,
          n.pendingProps,
          a
        ), n.child;
      case 8:
        return kt(
          e,
          n,
          n.pendingProps.children,
          a
        ), n.child;
      case 12:
        return kt(
          e,
          n,
          n.pendingProps.children,
          a
        ), n.child;
      case 10:
        return l = n.pendingProps, Or(n, n.type, l.value), kt(
          e,
          n,
          l.children,
          a
        ), n.child;
      case 9:
        return c = n.type._context, l = n.pendingProps.children, va(n), c = Bt(c), l = l(c), n.flags |= 1, kt(e, n, l, a), n.child;
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
        return va(n), l = Bt(Et), e === null ? (c = vc(), c === null && (c = nt, v = mc(), c.pooledCache = v, v.refCount++, v !== null && (c.pooledCacheLanes |= a), c = v), n.memoizedState = {
          parent: l,
          cache: c
        }, bc(n), Or(n, Et, c)) : ((e.lanes & a) !== 0 && (_c(e, n), ls(n, null, null, a), ss()), c = e.memoizedState, v = n.memoizedState, c.parent !== l ? (c = { parent: l, cache: l }, n.memoizedState = c, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = c), Or(n, Et, l)) : (l = v.cache, Or(n, Et, l), l !== c.cache && pc(
          n,
          [Et],
          a,
          !0
        ))), kt(
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
  function Dm(e, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Bg(n)) {
      if (n = Nn.current, n !== null && ((Ze & 4194048) === Ze ? Yn !== null : (Ze & 62914560) !== Ze && (Ze & 536870912) === 0 || n !== Yn))
        throw as = yc, pp;
      e.flags |= 8192;
    }
  }
  function Xl(e, n) {
    n !== null && (e.flags |= 4), e.flags & 16384 && (n = e.tag !== 22 ? uh() : 536870912, e.lanes |= n, pi |= n);
  }
  function ps(e, n) {
    if (!Ye)
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
  function Ib(e, n, a) {
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
        return a = n.stateNode, l = null, e !== null && (l = e.memoizedState.cache), n.memoizedState.cache !== l && (n.flags |= 2048), cr(Et), Ge(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Ji(n) ? pr(n) : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, up())), lt(n), null;
      case 26:
        return a = n.memoizedState, e === null ? (pr(n), a !== null ? (lt(n), Dm(n, a)) : (lt(n), n.flags &= -16777217)) : a ? a !== e.memoizedState ? (pr(n), lt(n), Dm(n, a)) : (lt(n), n.flags &= -16777217) : (e.memoizedProps !== l && pr(n), lt(n), n.flags &= -16777217), null;
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
          e = le.current, Ji(n) ? lp(n) : (e = Dg(c, l, a), n.stateNode = e, pr(n));
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
          if (e = le.current, Ji(n))
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
            e: switch (Rt(e, a, l), a) {
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
            if (e = n.stateNode, a = n.memoizedProps, l = null, c = Zt, c !== null)
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
          var v = null;
          l.memoizedState !== null && l.memoizedState.cachePool !== null && (v = l.memoizedState.cachePool.pool), v !== c && (l.flags |= 2048);
        }
        return a !== e && a && (n.child.flags |= 8192), Xl(n, n.updateQueue), lt(n), null;
      case 4:
        return Ge(), e === null && Ef(n.stateNode.containerInfo), lt(n), null;
      case 10:
        return cr(n.type), lt(n), null;
      case 19:
        if (ae(Ct), c = n.memoizedState, c === null) return lt(n), null;
        if (l = (n.flags & 128) !== 0, v = c.rendering, v === null)
          if (l) ps(c, !1);
          else {
            if (ft !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = n.child; e !== null; ) {
                if (v = Fl(e), v !== null) {
                  for (n.flags |= 128, ps(c, !1), e = v.updateQueue, n.updateQueue = e, Xl(n, e), n.subtreeFlags = 0, e = a, a = n.child; a !== null; )
                    ip(a, e), a = a.sibling;
                  return se(
                    Ct,
                    Ct.current & 1 | 2
                  ), n.child;
                }
                e = e.sibling;
              }
            c.tail !== null && ue() > Jl && (n.flags |= 128, l = !0, ps(c, !1), n.lanes = 4194304);
          }
        else {
          if (!l)
            if (e = Fl(v), e !== null) {
              if (n.flags |= 128, l = !0, e = e.updateQueue, n.updateQueue = e, Xl(n, e), ps(c, !0), c.tail === null && c.tailMode === "hidden" && !v.alternate && !Ye)
                return lt(n), null;
            } else
              2 * ue() - c.renderingStartTime > Jl && a !== 536870912 && (n.flags |= 128, l = !0, ps(c, !1), n.lanes = 4194304);
          c.isBackwards ? (v.sibling = n.child, n.child = v) : (e = c.last, e !== null ? e.sibling = v : n.child = v, c.last = v);
        }
        return c.tail !== null ? (n = c.tail, c.rendering = n, c.tail = n.sibling, c.renderingStartTime = ue(), n.sibling = null, e = Ct.current, se(Ct, l ? e & 1 | 2 : e & 1), n) : (lt(n), null);
      case 22:
      case 23:
        return dr(n), Cc(), l = n.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (n.flags |= 8192) : l && (n.flags |= 8192), l ? (a & 536870912) !== 0 && (n.flags & 128) === 0 && (lt(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : lt(n), a = n.updateQueue, a !== null && Xl(n, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== a && (n.flags |= 2048), e !== null && ae(ya), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), n.memoizedState.cache !== a && (n.flags |= 2048), cr(Et), lt(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, n.tag));
  }
  function Bb(e, n) {
    switch (cc(n), n.tag) {
      case 1:
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return cr(Et), Ge(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
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
        return ae(Ct), null;
      case 4:
        return Ge(), null;
      case 10:
        return cr(n.type), null;
      case 22:
      case 23:
        return dr(n), Cc(), e !== null && ae(ya), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 24:
        return cr(Et), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function km(e, n) {
    switch (cc(n), n.tag) {
      case 3:
        cr(Et), Ge();
        break;
      case 26:
      case 27:
      case 5:
        ke(n);
        break;
      case 4:
        Ge();
        break;
      case 13:
        dr(n);
        break;
      case 19:
        ae(Ct);
        break;
      case 10:
        cr(n.type);
        break;
      case 22:
      case 23:
        dr(n), Cc(), e !== null && ae(ya);
        break;
      case 24:
        cr(Et);
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
            var v = a.create, w = a.inst;
            l = v(), w.destroy = l;
          }
          a = a.next;
        } while (a !== c);
      }
    } catch (O) {
      et(n, n.return, O);
    }
  }
  function Lr(e, n, a) {
    try {
      var l = n.updateQueue, c = l !== null ? l.lastEffect : null;
      if (c !== null) {
        var v = c.next;
        l = v;
        do {
          if ((l.tag & e) === e) {
            var w = l.inst, O = w.destroy;
            if (O !== void 0) {
              w.destroy = void 0, c = n;
              var j = a, H = O;
              try {
                H();
              } catch ($) {
                et(
                  c,
                  j,
                  $
                );
              }
            }
          }
          l = l.next;
        } while (l !== v);
      }
    } catch ($) {
      et(n, n.return, $);
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
  function Xn(e, n) {
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
      s_(l, e.type, a, n), l[$t] = n;
    } catch (c) {
      et(e, e.return, c);
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
  function Pm(e) {
    var n = e.stateNode, a = e.memoizedProps;
    try {
      for (var l = e.type, c = n.attributes; c.length; )
        n.removeAttributeNode(c[0]);
      Rt(n, l, a), n[It] = e, n[$t] = a;
    } catch (v) {
      et(e, e.return, v);
    }
  }
  var mr = !1, gt = !1, tf = !1, Im = typeof WeakSet == "function" ? WeakSet : Set, Ot = null;
  function Ub(e, n) {
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
            var c = l.anchorOffset, v = l.focusNode;
            l = l.focusOffset;
            try {
              a.nodeType, v.nodeType;
            } catch {
              a = null;
              break e;
            }
            var w = 0, O = -1, j = -1, H = 0, $ = 0, W = e, F = null;
            t: for (; ; ) {
              for (var Z; W !== a || c !== 0 && W.nodeType !== 3 || (O = w + c), W !== v || l !== 0 && W.nodeType !== 3 || (j = w + l), W.nodeType === 3 && (w += W.nodeValue.length), (Z = W.firstChild) !== null; )
                F = W, W = Z;
              for (; ; ) {
                if (W === e) break t;
                if (F === a && ++H === c && (O = w), F === v && ++$ === l && (j = w), (Z = W.nextSibling) !== null) break;
                W = F, F = W.parentNode;
              }
              W = Z;
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
          switch (n = Ot, v = n.alternate, e = n.flags, n.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && v !== null) {
                e = void 0, a = n, c = v.memoizedProps, v = v.memoizedState, l = a.stateNode;
                try {
                  var Ce = _a(
                    a.type,
                    c,
                    a.elementType === a.type
                  );
                  e = l.getSnapshotBeforeUpdate(
                    Ce,
                    v
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (Se) {
                  et(
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
                  Mf(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Mf(e);
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
        Pr(e, a), l & 4 && ms(5, a);
        break;
      case 1:
        if (Pr(e, a), l & 4)
          if (e = a.stateNode, n === null)
            try {
              e.componentDidMount();
            } catch (w) {
              et(a, a.return, w);
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
              et(
                a,
                a.return,
                w
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
          } catch (w) {
            et(a, a.return, w);
          }
        }
        break;
      case 27:
        n === null && l & 4 && Pm(a);
      case 26:
      case 5:
        Pr(e, a), n === null && l & 4 && zm(a), l & 512 && gs(a, a.return);
        break;
      case 12:
        Pr(e, a);
        break;
      case 13:
        Pr(e, a), l & 4 && qm(e, a), l & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = $b.bind(
          null,
          a
        ), h_(e, a))));
        break;
      case 22:
        if (l = a.memoizedState !== null || mr, !l) {
          n = n !== null && n.memoizedState !== null || gt, c = mr;
          var v = gt;
          mr = l, (gt = n) && !v ? Ir(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Pr(e, a), mr = c, gt = v;
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
  var at = null, Kt = !1;
  function gr(e, n, a) {
    for (a = a.child; a !== null; )
      Hm(e, n, a), a = a.sibling;
  }
  function Hm(e, n, a) {
    if (pt && typeof pt.onCommitFiberUnmount == "function")
      try {
        pt.onCommitFiberUnmount(nr, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        gt || Xn(a, n), gr(
          e,
          n,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        gt || Xn(a, n);
        var l = at, c = Kt;
        Zr(a.type) && (at = a.stateNode, Kt = !1), gr(
          e,
          n,
          a
        ), ws(a.stateNode), at = l, Kt = c;
        break;
      case 5:
        gt || Xn(a, n);
      case 6:
        if (l = at, c = Kt, at = null, gr(
          e,
          n,
          a
        ), at = l, Kt = c, at !== null)
          if (Kt)
            try {
              (at.nodeType === 9 ? at.body : at.nodeName === "HTML" ? at.ownerDocument.body : at).removeChild(a.stateNode);
            } catch (v) {
              et(
                a,
                n,
                v
              );
            }
          else
            try {
              at.removeChild(a.stateNode);
            } catch (v) {
              et(
                a,
                n,
                v
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
        gt || Lr(2, a, n), gt || Lr(4, a, n), gr(
          e,
          n,
          a
        );
        break;
      case 1:
        gt || (Xn(a, n), l = a.stateNode, typeof l.componentWillUnmount == "function" && Rm(
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
        gt = (l = gt) || a.memoizedState !== null, gr(
          e,
          n,
          a
        ), gt = l;
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
        et(n, n.return, a);
      }
  }
  function Hb(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var n = e.stateNode;
        return n === null && (n = e.stateNode = new Im()), n;
      case 22:
        return e = e.stateNode, n = e._retryCache, n === null && (n = e._retryCache = new Im()), n;
      default:
        throw Error(s(435, e.tag));
    }
  }
  function nf(e, n) {
    var a = Hb(e);
    n.forEach(function(l) {
      var c = Qb.bind(null, e, l);
      a.has(l) || (a.add(l), l.then(c, c));
    });
  }
  function on(e, n) {
    var a = n.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var c = a[l], v = e, w = n, O = w;
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
        Hm(v, w, c), at = null, Kt = !1, v = c.alternate, v !== null && (v.return = null), c.return = null;
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; )
        Fm(n, e), n = n.sibling;
  }
  var Pn = null;
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
        on(n, e), un(e), l & 512 && (gt || a === null || Xn(a, a.return)), l & 64 && mr && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
        break;
      case 26:
        var c = Pn;
        if (on(n, e), un(e), l & 512 && (gt || a === null || Xn(a, a.return)), l & 4) {
          var v = a !== null ? a.memoizedState : null;
          if (l = e.memoizedState, a === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, a = e.memoizedProps, c = c.ownerDocument || c;
                  t: switch (l) {
                    case "title":
                      v = c.getElementsByTagName("title")[0], (!v || v[Ui] || v[It] || v.namespaceURI === "http://www.w3.org/2000/svg" || v.hasAttribute("itemprop")) && (v = c.createElement(l), c.head.insertBefore(
                        v,
                        c.querySelector("head > title")
                      )), Rt(v, l, a), v[It] = e, Nt(v), l = v;
                      break e;
                    case "link":
                      var w = Pg(
                        "link",
                        "href",
                        c
                      ).get(l + (a.href || ""));
                      if (w) {
                        for (var O = 0; O < w.length; O++)
                          if (v = w[O], v.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && v.getAttribute("rel") === (a.rel == null ? null : a.rel) && v.getAttribute("title") === (a.title == null ? null : a.title) && v.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            w.splice(O, 1);
                            break t;
                          }
                      }
                      v = c.createElement(l), Rt(v, l, a), c.head.appendChild(v);
                      break;
                    case "meta":
                      if (w = Pg(
                        "meta",
                        "content",
                        c
                      ).get(l + (a.content || ""))) {
                        for (O = 0; O < w.length; O++)
                          if (v = w[O], v.getAttribute("content") === (a.content == null ? null : "" + a.content) && v.getAttribute("name") === (a.name == null ? null : a.name) && v.getAttribute("property") === (a.property == null ? null : a.property) && v.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && v.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            w.splice(O, 1);
                            break t;
                          }
                      }
                      v = c.createElement(l), Rt(v, l, a), c.head.appendChild(v);
                      break;
                    default:
                      throw Error(s(468, l));
                  }
                  v[It] = e, Nt(v), l = v;
                }
                e.stateNode = l;
              } else
                Ig(
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
            v !== l ? (v === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : v.count--, l === null ? Ig(
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
        on(n, e), un(e), l & 512 && (gt || a === null || Xn(a, a.return)), a !== null && l & 4 && Kc(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (on(n, e), un(e), l & 512 && (gt || a === null || Xn(a, a.return)), e.flags & 32) {
          c = e.stateNode;
          try {
            Va(c, "");
          } catch (Z) {
            et(e, e.return, Z);
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
          } catch (Z) {
            et(e, e.return, Z);
          }
        }
        break;
      case 3:
        if (co = null, c = Pn, Pn = oo(n.containerInfo), on(n, e), Pn = c, un(e), l & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            js(n.containerInfo);
          } catch (Z) {
            et(e, e.return, Z);
          }
        tf && (tf = !1, Zm(e));
        break;
      case 4:
        l = Pn, Pn = oo(
          e.stateNode.containerInfo
        ), on(n, e), un(e), Pn = l;
        break;
      case 12:
        on(n, e), un(e);
        break;
      case 13:
        on(n, e), un(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (uf = ue()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, nf(e, l)));
        break;
      case 22:
        c = e.memoizedState !== null;
        var j = a !== null && a.memoizedState !== null, H = mr, $ = gt;
        if (mr = H || c, gt = $ || j, on(n, e), gt = $, mr = H, un(e), l & 8192)
          e: for (n = e.stateNode, n._visibility = c ? n._visibility & -2 : n._visibility | 1, c && (a === null || j || mr || gt || Sa(e)), a = null, n = e; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (a === null) {
                j = a = n;
                try {
                  if (v = j.stateNode, c)
                    w = v.style, typeof w.setProperty == "function" ? w.setProperty("display", "none", "important") : w.display = "none";
                  else {
                    O = j.stateNode;
                    var W = j.memoizedProps.style, F = W != null && W.hasOwnProperty("display") ? W.display : null;
                    O.style.display = F == null || typeof F == "boolean" ? "" : ("" + F).trim();
                  }
                } catch (Z) {
                  et(j, j.return, Z);
                }
              }
            } else if (n.tag === 6) {
              if (a === null) {
                j = n;
                try {
                  j.stateNode.nodeValue = c ? "" : j.memoizedProps;
                } catch (Z) {
                  et(j, j.return, Z);
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
            var c = a.stateNode, v = Wc(e);
            $l(e, v, c);
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
        et(e, e.return, $);
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
          Lr(4, n, n.return), Sa(n);
          break;
        case 1:
          Xn(n, n.return);
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
          Xn(n, n.return), Sa(n);
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
  function Ir(e, n, a) {
    for (a = a && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var l = n.alternate, c = e, v = n, w = v.flags;
      switch (v.tag) {
        case 0:
        case 11:
        case 15:
          Ir(
            c,
            v,
            a
          ), ms(4, v);
          break;
        case 1:
          if (Ir(
            c,
            v,
            a
          ), l = v, c = l.stateNode, typeof c.componentDidMount == "function")
            try {
              c.componentDidMount();
            } catch (H) {
              et(l, l.return, H);
            }
          if (l = v, c = l.updateQueue, c !== null) {
            var O = l.stateNode;
            try {
              var j = c.shared.hiddenCallbacks;
              if (j !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < j.length; c++)
                  bp(j[c], O);
            } catch (H) {
              et(l, l.return, H);
            }
          }
          a && w & 64 && jm(v), gs(v, v.return);
          break;
        case 27:
          Pm(v);
        case 26:
        case 5:
          Ir(
            c,
            v,
            a
          ), a && l === null && w & 4 && zm(v), gs(v, v.return);
          break;
        case 12:
          Ir(
            c,
            v,
            a
          );
          break;
        case 13:
          Ir(
            c,
            v,
            a
          ), a && w & 4 && qm(c, v);
          break;
        case 22:
          v.memoizedState === null && Ir(
            c,
            v,
            a
          ), gs(v, v.return);
          break;
        case 30:
          break;
        default:
          Ir(
            c,
            v,
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
  function $n(e, n, a, l) {
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
        $n(
          e,
          n,
          a,
          l
        ), c & 2048 && ms(9, n);
        break;
      case 1:
        $n(
          e,
          n,
          a,
          l
        );
        break;
      case 3:
        $n(
          e,
          n,
          a,
          l
        ), c & 2048 && (e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && ts(e)));
        break;
      case 12:
        if (c & 2048) {
          $n(
            e,
            n,
            a,
            l
          ), e = n.stateNode;
          try {
            var v = n.memoizedProps, w = v.id, O = v.onPostCommit;
            typeof O == "function" && O(
              w,
              n.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (j) {
            et(n, n.return, j);
          }
        } else
          $n(
            e,
            n,
            a,
            l
          );
        break;
      case 13:
        $n(
          e,
          n,
          a,
          l
        );
        break;
      case 23:
        break;
      case 22:
        v = n.stateNode, w = n.alternate, n.memoizedState !== null ? v._visibility & 2 ? $n(
          e,
          n,
          a,
          l
        ) : vs(e, n) : v._visibility & 2 ? $n(
          e,
          n,
          a,
          l
        ) : (v._visibility |= 2, fi(
          e,
          n,
          a,
          l,
          (n.subtreeFlags & 10256) !== 0
        )), c & 2048 && rf(w, n);
        break;
      case 24:
        $n(
          e,
          n,
          a,
          l
        ), c & 2048 && af(n.alternate, n);
        break;
      default:
        $n(
          e,
          n,
          a,
          l
        );
    }
  }
  function fi(e, n, a, l, c) {
    for (c = c && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var v = e, w = n, O = a, j = l, H = w.flags;
      switch (w.tag) {
        case 0:
        case 11:
        case 15:
          fi(
            v,
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
            v,
            w,
            O,
            j,
            c
          ) : vs(
            v,
            w
          ) : ($._visibility |= 2, fi(
            v,
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
            v,
            w,
            O,
            j,
            c
          ), c && H & 2048 && af(w.alternate, w);
          break;
        default:
          fi(
            v,
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
        di(e), e.flags & ys && e.memoizedState !== null && A_(
          Pn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        di(e);
        break;
      case 3:
      case 4:
        var n = Pn;
        Pn = oo(e.stateNode.containerInfo), di(e), Pn = n;
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
          var c = l.sibling, v = l.return;
          if (Um(l), l === a) {
            Ot = null;
            break e;
          }
          if (c !== null) {
            c.return = v, Ot = c;
            break e;
          }
          Ot = v;
        }
    }
  }
  var qb = {
    getCacheForType: function(e) {
      var n = Bt(Et), a = n.data.get(e);
      return a === void 0 && (a = e(), n.data.set(e, a)), a;
    }
  }, Fb = typeof WeakMap == "function" ? WeakMap : Map, Xe = 0, nt = null, Ie = null, Ze = 0, $e = 0, cn = null, Br = !1, hi = !1, sf = !1, vr = 0, ft = 0, Ur = 0, xa = 0, lf = 0, Tn = 0, pi = 0, _s = null, Wt = null, of = !1, uf = 0, Jl = 1 / 0, Kl = null, Hr = null, jt = 0, qr = null, mi = null, gi = 0, cf = 0, ff = null, Qm = null, Ss = 0, df = null;
  function fn() {
    if ((Xe & 2) !== 0 && Ze !== 0)
      return Ze & -Ze;
    if (U.T !== null) {
      var e = ri;
      return e !== 0 ? e : bf();
    }
    return dh();
  }
  function Jm() {
    Tn === 0 && (Tn = (Ze & 536870912) === 0 || Ye ? Ia() : 536870912);
    var e = Nn.current;
    return e !== null && (e.flags |= 32), Tn;
  }
  function dn(e, n, a) {
    (e === nt && ($e === 2 || $e === 9) || e.cancelPendingCommit !== null) && (vi(e, 0), Fr(
      e,
      Ze,
      Tn,
      !1
    )), Bi(e, a), ((Xe & 2) === 0 || e !== nt) && (e === nt && ((Xe & 2) === 0 && (xa |= a), ft === 4 && Fr(
      e,
      Ze,
      Tn,
      !1
    )), Qn(e));
  }
  function Km(e, n, a) {
    if ((Xe & 6) !== 0) throw Error(s(327));
    var l = !a && (n & 124) === 0 && (n & e.expiredLanes) === 0 || Xt(e, n), c = l ? Vb(e, n) : mf(e, n, !0), v = l;
    do {
      if (c === 0) {
        hi && !l && Fr(e, n, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, v && !Zb(a)) {
          c = mf(e, n, !1), v = !1;
          continue;
        }
        if (c === 2) {
          if (v = n, e.errorRecoveryDisabledLanes & v)
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
                  O.errorRecoveryDisabledLanes |= v, xa |= v, c = 4;
                  break e;
                }
                v = Wt, Wt = c, v !== null && (Wt === null ? Wt = v : Wt.push.apply(
                  Wt,
                  v
                ));
              }
              c = w;
            }
            if (v = !1, c !== 2) continue;
          }
        }
        if (c === 1) {
          vi(e, 0), Fr(e, n, 0, !0);
          break;
        }
        e: {
          switch (l = e, v = c, v) {
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
          if ((n & 62914560) === n && (c = uf + 300 - ue(), 10 < c)) {
            if (Fr(
              l,
              n,
              Tn,
              !Br
            ), Ft(l, 0, !0) !== 0) break e;
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
                v,
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
            v,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Qn(e);
  }
  function Wm(e, n, a, l, c, v, w, O, j, H, $, W, F, Z) {
    if (e.timeoutHandle = -1, W = n.subtreeFlags, (W & 8192 || (W & 16785408) === 16785408) && (Ts = { stylesheets: null, count: 0, unsuspend: w_ }, Vm(n), W = N_(), W !== null)) {
      e.cancelPendingCommit = W(
        sg.bind(
          null,
          e,
          n,
          v,
          a,
          l,
          c,
          w,
          O,
          j,
          $,
          1,
          F,
          Z
        )
      ), Fr(e, v, w, !H);
      return;
    }
    sg(
      e,
      n,
      v,
      a,
      l,
      c,
      w,
      O,
      j
    );
  }
  function Zb(e) {
    for (var n = e; ; ) {
      var a = n.tag;
      if ((a === 0 || a === 11 || a === 15) && n.flags & 16384 && (a = n.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var l = 0; l < a.length; l++) {
          var c = a[l], v = c.getSnapshot;
          c = c.value;
          try {
            if (!sn(v(), c)) return !1;
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
      var v = 31 - qt(c), w = 1 << v;
      l[v] = -1, c &= ~w;
    }
    a !== 0 && ch(e, a, n);
  }
  function Wl() {
    return (Xe & 6) === 0 ? (xs(0), !1) : !0;
  }
  function hf() {
    if (Ie !== null) {
      if ($e === 0)
        var e = Ie.return;
      else
        e = Ie, ur = ga = null, Oc(e), ui = null, ds = 0, e = Ie;
      for (; e !== null; )
        km(e.alternate, e), e = e.return;
      Ie = null;
    }
  }
  function vi(e, n) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, o_(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), hf(), nt = e, Ie = a = sr(e.current, null), Ze = n, $e = 0, cn = null, Br = !1, hi = Xt(e, n), sf = !1, pi = Tn = lf = xa = Ur = ft = 0, Wt = _s = null, of = !1, (n & 8) !== 0 && (n |= n & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= n; 0 < l; ) {
        var c = 31 - qt(l), v = 1 << c;
        n |= e[c], l &= ~v;
      }
    return vr = n, Sl(), a;
  }
  function eg(e, n) {
    ze = null, U.H = Ul, n === rs || n === Ml ? (n = vp(), $e = 3) : n === pp ? (n = vp(), $e = 4) : $e = n === ym ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, cn = n, Ie === null && (ft = 1, Gl(
      e,
      En(n, e.current)
    ));
  }
  function tg() {
    var e = U.H;
    return U.H = Ul, e === null ? Ul : e;
  }
  function ng() {
    var e = U.A;
    return U.A = qb, e;
  }
  function pf() {
    ft = 4, Br || (Ze & 4194048) !== Ze && Nn.current !== null || (hi = !0), (Ur & 134217727) === 0 && (xa & 134217727) === 0 || nt === null || Fr(
      nt,
      Ze,
      Tn,
      !1
    );
  }
  function mf(e, n, a) {
    var l = Xe;
    Xe |= 2;
    var c = tg(), v = ng();
    (nt !== e || Ze !== n) && (Kl = null, vi(e, n)), n = !1;
    var w = ft;
    e: do
      try {
        if ($e !== 0 && Ie !== null) {
          var O = Ie, j = cn;
          switch ($e) {
            case 8:
              hf(), w = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Nn.current === null && (n = !0);
              var H = $e;
              if ($e = 0, cn = null, yi(e, O, j, H), a && hi) {
                w = 0;
                break e;
              }
              break;
            default:
              H = $e, $e = 0, cn = null, yi(e, O, j, H);
          }
        }
        Gb(), w = ft;
        break;
      } catch ($) {
        eg(e, $);
      }
    while (!0);
    return n && e.shellSuspendCounter++, ur = ga = null, Xe = l, U.H = c, U.A = v, Ie === null && (nt = null, Ze = 0, Sl()), w;
  }
  function Gb() {
    for (; Ie !== null; ) rg(Ie);
  }
  function Vb(e, n) {
    var a = Xe;
    Xe |= 2;
    var l = tg(), c = ng();
    nt !== e || Ze !== n ? (Kl = null, Jl = ue() + 500, vi(e, n)) : hi = Xt(
      e,
      n
    );
    e: do
      try {
        if ($e !== 0 && Ie !== null) {
          n = Ie;
          var v = cn;
          t: switch ($e) {
            case 1:
              $e = 0, cn = null, yi(e, n, v, 1);
              break;
            case 2:
            case 9:
              if (mp(v)) {
                $e = 0, cn = null, ag(n);
                break;
              }
              n = function() {
                $e !== 2 && $e !== 9 || nt !== e || ($e = 7), Qn(e);
              }, v.then(n, n);
              break e;
            case 3:
              $e = 7;
              break e;
            case 4:
              $e = 5;
              break e;
            case 7:
              mp(v) ? ($e = 0, cn = null, ag(n)) : ($e = 0, cn = null, yi(e, n, v, 7));
              break;
            case 5:
              var w = null;
              switch (Ie.tag) {
                case 26:
                  w = Ie.memoizedState;
                case 5:
                case 27:
                  var O = Ie;
                  if (!w || Bg(w)) {
                    $e = 0, cn = null;
                    var j = O.sibling;
                    if (j !== null) Ie = j;
                    else {
                      var H = O.return;
                      H !== null ? (Ie = H, eo(H)) : Ie = null;
                    }
                    break t;
                  }
              }
              $e = 0, cn = null, yi(e, n, v, 5);
              break;
            case 6:
              $e = 0, cn = null, yi(e, n, v, 6);
              break;
            case 8:
              hf(), ft = 6;
              break e;
            default:
              throw Error(s(462));
          }
        }
        Yb();
        break;
      } catch ($) {
        eg(e, $);
      }
    while (!0);
    return ur = ga = null, U.H = l, U.A = c, Xe = a, Ie !== null ? 0 : (nt = null, Ze = 0, Sl(), ft);
  }
  function Yb() {
    for (; Ie !== null && !ne(); )
      rg(Ie);
  }
  function rg(e) {
    var n = Mm(e.alternate, e, vr);
    e.memoizedProps = e.pendingProps, n === null ? eo(e) : Ie = n;
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
          Ze
        );
        break;
      case 11:
        n = Cm(
          a,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          Ze
        );
        break;
      case 5:
        Oc(n);
      default:
        km(a, n), n = Ie = ip(n, vr), n = Mm(a, n, vr);
    }
    e.memoizedProps = e.pendingProps, n === null ? eo(e) : Ie = n;
  }
  function yi(e, n, a, l) {
    ur = ga = null, Oc(n), ui = null, ds = 0;
    var c = n.return;
    try {
      if (Lb(
        e,
        c,
        n,
        a,
        Ze
      )) {
        ft = 1, Gl(
          e,
          En(a, e.current)
        ), Ie = null;
        return;
      }
    } catch (v) {
      if (c !== null) throw Ie = c, v;
      ft = 1, Gl(
        e,
        En(a, e.current)
      ), Ie = null;
      return;
    }
    n.flags & 32768 ? (Ye || l === 1 ? e = !0 : hi || (Ze & 536870912) !== 0 ? e = !1 : (Br = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Nn.current, l !== null && l.tag === 13 && (l.flags |= 16384))), ig(n, e)) : eo(n);
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
      var a = Ib(
        n.alternate,
        n,
        vr
      );
      if (a !== null) {
        Ie = a;
        return;
      }
      if (n = n.sibling, n !== null) {
        Ie = n;
        return;
      }
      Ie = n = e;
    } while (n !== null);
    ft === 0 && (ft = 5);
  }
  function ig(e, n) {
    do {
      var a = Bb(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, Ie = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !n && (e = e.sibling, e !== null)) {
        Ie = e;
        return;
      }
      Ie = e = a;
    } while (e !== null);
    ft = 6, Ie = null;
  }
  function sg(e, n, a, l, c, v, w, O, j) {
    e.cancelPendingCommit = null;
    do
      to();
    while (jt !== 0);
    if ((Xe & 6) !== 0) throw Error(s(327));
    if (n !== null) {
      if (n === e.current) throw Error(s(177));
      if (v = n.lanes | n.childLanes, v |= ac, w1(
        e,
        a,
        v,
        w,
        O,
        j
      ), e === nt && (Ie = nt = null, Ze = 0), mi = n, qr = e, gi = a, cf = v, ff = c, Qm = l, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Jb(me, function() {
        return fg(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || l) {
        l = U.T, U.T = null, c = re.p, re.p = 2, w = Xe, Xe |= 4;
        try {
          Ub(e, n, a);
        } finally {
          Xe = w, re.p = c, U.T = l;
        }
      }
      jt = 1, lg(), og(), ug();
    }
  }
  function lg() {
    if (jt === 1) {
      jt = 0;
      var e = qr, n = mi, a = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || a) {
        a = U.T, U.T = null;
        var l = re.p;
        re.p = 2;
        var c = Xe;
        Xe |= 4;
        try {
          Fm(n, e);
          var v = Nf, w = $h(e.containerInfo), O = v.focusedElem, j = v.selectionRange;
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
                var W = O.ownerDocument || document, F = W && W.defaultView || window;
                if (F.getSelection) {
                  var Z = F.getSelection(), Ce = O.textContent.length, Se = Math.min(j.start, Ce), Ke = j.end === void 0 ? Se : Math.min(j.end, Ce);
                  !Z.extend && Se > Ke && (w = Ke, Ke = Se, Se = w);
                  var L = Yh(
                    O,
                    Se
                  ), z = Yh(
                    O,
                    Ke
                  );
                  if (L && z && (Z.rangeCount !== 1 || Z.anchorNode !== L.node || Z.anchorOffset !== L.offset || Z.focusNode !== z.node || Z.focusOffset !== z.offset)) {
                    var B = W.createRange();
                    B.setStart(L.node, L.offset), Z.removeAllRanges(), Se > Ke ? (Z.addRange(B), Z.extend(z.node, z.offset)) : (B.setEnd(z.node, z.offset), Z.addRange(B));
                  }
                }
              }
            }
            for (W = [], Z = O; Z = Z.parentNode; )
              Z.nodeType === 1 && W.push({
                element: Z,
                left: Z.scrollLeft,
                top: Z.scrollTop
              });
            for (typeof O.focus == "function" && O.focus(), O = 0; O < W.length; O++) {
              var J = W[O];
              J.element.scrollLeft = J.left, J.element.scrollTop = J.top;
            }
          }
          po = !!Af, Nf = Af = null;
        } finally {
          Xe = c, re.p = l, U.T = a;
        }
      }
      e.current = n, jt = 2;
    }
  }
  function og() {
    if (jt === 2) {
      jt = 0;
      var e = qr, n = mi, a = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || a) {
        a = U.T, U.T = null;
        var l = re.p;
        re.p = 2;
        var c = Xe;
        Xe |= 4;
        try {
          Bm(e, n.alternate, n);
        } finally {
          Xe = c, re.p = l, U.T = a;
        }
      }
      jt = 3;
    }
  }
  function ug() {
    if (jt === 4 || jt === 3) {
      jt = 0, te();
      var e = qr, n = mi, a = gi, l = Qm;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? jt = 5 : (jt = 0, mi = qr = null, cg(e, e.pendingLanes));
      var c = e.pendingLanes;
      if (c === 0 && (Hr = null), ku(a), n = n.stateNode, pt && typeof pt.onCommitFiberRoot == "function")
        try {
          pt.onCommitFiberRoot(
            nr,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        n = U.T, c = re.p, re.p = 2, U.T = null;
        try {
          for (var v = e.onRecoverableError, w = 0; w < l.length; w++) {
            var O = l[w];
            v(O.value, {
              componentStack: O.stack
            });
          }
        } finally {
          U.T = n, re.p = c;
        }
      }
      (gi & 3) !== 0 && to(), Qn(e), c = e.pendingLanes, (a & 4194090) !== 0 && (c & 42) !== 0 ? e === df ? Ss++ : (Ss = 0, df = e) : Ss = 0, xs(0);
    }
  }
  function cg(e, n) {
    (e.pooledCacheLanes &= n) === 0 && (n = e.pooledCache, n != null && (e.pooledCache = null, ts(n)));
  }
  function to(e) {
    return lg(), og(), ug(), fg();
  }
  function fg() {
    if (jt !== 5) return !1;
    var e = qr, n = cf;
    cf = 0;
    var a = ku(gi), l = U.T, c = re.p;
    try {
      re.p = 32 > a ? 32 : a, U.T = null, a = ff, ff = null;
      var v = qr, w = gi;
      if (jt = 0, mi = qr = null, gi = 0, (Xe & 6) !== 0) throw Error(s(331));
      var O = Xe;
      if (Xe |= 4, Xm(v.current), Gm(
        v,
        v.current,
        w,
        a
      ), Xe = O, xs(0, !1), pt && typeof pt.onPostCommitFiberRoot == "function")
        try {
          pt.onPostCommitFiberRoot(nr, v);
        } catch {
        }
      return !0;
    } finally {
      re.p = c, U.T = l, cg(e, n);
    }
  }
  function dg(e, n, a) {
    n = En(a, n), n = Fc(e.stateNode, n, 2), e = kr(e, n, 2), e !== null && (Bi(e, 2), Qn(e));
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
          if (typeof n.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Hr === null || !Hr.has(l))) {
            e = En(a, e), a = gm(2), l = kr(n, a, 2), l !== null && (vm(
              a,
              l,
              n,
              e
            ), Bi(l, 2), Qn(l));
            break;
          }
        }
        n = n.return;
      }
  }
  function gf(e, n, a) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Fb();
      var c = /* @__PURE__ */ new Set();
      l.set(n, c);
    } else
      c = l.get(n), c === void 0 && (c = /* @__PURE__ */ new Set(), l.set(n, c));
    c.has(a) || (sf = !0, c.add(a), e = Xb.bind(null, e, n, a), n.then(e, e));
  }
  function Xb(e, n, a) {
    var l = e.pingCache;
    l !== null && l.delete(n), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, nt === e && (Ze & a) === a && (ft === 4 || ft === 3 && (Ze & 62914560) === Ze && 300 > ue() - uf ? (Xe & 2) === 0 && vi(e, 0) : lf |= a, pi === Ze && (pi = 0)), Qn(e);
  }
  function hg(e, n) {
    n === 0 && (n = uh()), e = Wa(e, n), e !== null && (Bi(e, n), Qn(e));
  }
  function $b(e) {
    var n = e.memoizedState, a = 0;
    n !== null && (a = n.retryLane), hg(e, a);
  }
  function Qb(e, n) {
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
  function Jb(e, n) {
    return zn(e, n);
  }
  var no = null, bi = null, vf = !1, ro = !1, yf = !1, Ea = 0;
  function Qn(e) {
    e !== bi && e.next === null && (bi === null ? no = bi = e : bi = bi.next = e), ro = !0, vf || (vf = !0, Wb());
  }
  function xs(e, n) {
    if (!yf && ro) {
      yf = !0;
      do
        for (var a = !1, l = no; l !== null; ) {
          if (e !== 0) {
            var c = l.pendingLanes;
            if (c === 0) var v = 0;
            else {
              var w = l.suspendedLanes, O = l.pingedLanes;
              v = (1 << 31 - qt(42 | e) + 1) - 1, v &= c & ~(w & ~O), v = v & 201326741 ? v & 201326741 | 1 : v ? v | 2 : 0;
            }
            v !== 0 && (a = !0, vg(l, v));
          } else
            v = Ze, v = Ft(
              l,
              l === nt ? v : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (v & 3) === 0 || Xt(l, v) || (a = !0, vg(l, v));
          l = l.next;
        }
      while (a);
      yf = !1;
    }
  }
  function Kb() {
    pg();
  }
  function pg() {
    ro = vf = !1;
    var e = 0;
    Ea !== 0 && (l_() && (e = Ea), Ea = 0);
    for (var n = ue(), a = null, l = no; l !== null; ) {
      var c = l.next, v = mg(l, n);
      v === 0 ? (l.next = null, a === null ? no = c : a.next = c, c === null && (bi = a)) : (a = l, (e !== 0 || (v & 3) !== 0) && (ro = !0)), l = c;
    }
    xs(e);
  }
  function mg(e, n) {
    for (var a = e.suspendedLanes, l = e.pingedLanes, c = e.expirationTimes, v = e.pendingLanes & -62914561; 0 < v; ) {
      var w = 31 - qt(v), O = 1 << w, j = c[w];
      j === -1 ? ((O & a) === 0 || (O & l) !== 0) && (c[w] = ul(O, n)) : j <= n && (e.expiredLanes |= O), v &= ~O;
    }
    if (n = nt, a = Ze, a = Ft(
      e,
      e === n ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, a === 0 || e === n && ($e === 2 || $e === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && P(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || Xt(e, a)) {
      if (n = a & -a, n === e.callbackPriority) return n;
      switch (l !== null && P(l), ku(a)) {
        case 2:
        case 8:
          a = ce;
          break;
        case 32:
          a = me;
          break;
        case 268435456:
          a = Fe;
          break;
        default:
          a = me;
      }
      return l = gg.bind(null, e), a = zn(a, l), e.callbackPriority = n, e.callbackNode = a, n;
    }
    return l !== null && l !== null && P(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function gg(e, n) {
    if (jt !== 0 && jt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (to() && e.callbackNode !== a)
      return null;
    var l = Ze;
    return l = Ft(
      e,
      e === nt ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (Km(e, l, n), mg(e, ue()), e.callbackNode != null && e.callbackNode === a ? gg.bind(null, e) : null);
  }
  function vg(e, n) {
    if (to()) return null;
    Km(e, n, !0);
  }
  function Wb() {
    u_(function() {
      (Xe & 6) !== 0 ? zn(
        Ee,
        Kb
      ) : pg();
    });
  }
  function bf() {
    return Ea === 0 && (Ea = Ia()), Ea;
  }
  function yg(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : pl("" + e);
  }
  function bg(e, n) {
    var a = n.ownerDocument.createElement("input");
    return a.name = n.name, a.value = n.value, e.id && a.setAttribute("form", e.id), n.parentNode.insertBefore(a, n), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function e_(e, n, a, l, c) {
    if (n === "submit" && a && a.stateNode === c) {
      var v = yg(
        (c[$t] || null).action
      ), w = l.submitter;
      w && (n = (n = w[$t] || null) ? yg(n.formAction) : w.getAttribute("formAction"), n !== null && (v = n, w = null));
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
                  Ic(
                    a,
                    {
                      pending: !0,
                      data: j,
                      method: c.method,
                      action: v
                    },
                    null,
                    j
                  );
                }
              } else
                typeof v == "function" && (O.preventDefault(), j = w ? bg(c, w) : new FormData(c), Ic(
                  a,
                  {
                    pending: !0,
                    data: j,
                    method: c.method,
                    action: v
                  },
                  v,
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
    var Sf = rc[_f], t_ = Sf.toLowerCase(), n_ = Sf[0].toUpperCase() + Sf.slice(1);
    Ln(
      t_,
      "on" + n_
    );
  }
  Ln(Kh, "onAnimationEnd"), Ln(Wh, "onAnimationIteration"), Ln(ep, "onAnimationStart"), Ln("dblclick", "onDoubleClick"), Ln("focusin", "onFocus"), Ln("focusout", "onBlur"), Ln(bb, "onTransitionRun"), Ln(_b, "onTransitionStart"), Ln(Sb, "onTransitionCancel"), Ln(tp, "onTransitionEnd"), Fa("onMouseEnter", ["mouseout", "mouseover"]), Fa("onMouseLeave", ["mouseout", "mouseover"]), Fa("onPointerEnter", ["pointerout", "pointerover"]), Fa("onPointerLeave", ["pointerout", "pointerover"]), la(
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
  ), r_ = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Es)
  );
  function _g(e, n) {
    n = (n & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var l = e[a], c = l.event;
      l = l.listeners;
      e: {
        var v = void 0;
        if (n)
          for (var w = l.length - 1; 0 <= w; w--) {
            var O = l[w], j = O.instance, H = O.currentTarget;
            if (O = O.listener, j !== v && c.isPropagationStopped())
              break e;
            v = O, c.currentTarget = H;
            try {
              v(c);
            } catch ($) {
              Zl($);
            }
            c.currentTarget = null, v = j;
          }
        else
          for (w = 0; w < l.length; w++) {
            if (O = l[w], j = O.instance, H = O.currentTarget, O = O.listener, j !== v && c.isPropagationStopped())
              break e;
            v = O, c.currentTarget = H;
            try {
              v(c);
            } catch ($) {
              Zl($);
            }
            c.currentTarget = null, v = j;
          }
      }
    }
  }
  function Be(e, n) {
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
        a !== "selectionchange" && (r_.has(a) || xf(a, !1, e), xf(a, !0, e));
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
        c = Pf;
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
    var v = l;
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
              l = v = w;
              continue e;
            }
            O = O.parentNode;
          }
        }
        l = l.return;
      }
    Th(function() {
      var H = v, $ = qu(a), W = [];
      e: {
        var F = np.get(e);
        if (F !== void 0) {
          var Z = yl, Ce = e;
          switch (e) {
            case "keypress":
              if (gl(a) === 0) break e;
            case "keydown":
            case "keyup":
              Z = J1;
              break;
            case "focusin":
              Ce = "focus", Z = Xu;
              break;
            case "focusout":
              Ce = "blur", Z = Xu;
              break;
            case "beforeblur":
            case "afterblur":
              Z = Xu;
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
              Z = Dh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Z = B1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Z = eb;
              break;
            case Kh:
            case Wh:
            case ep:
              Z = q1;
              break;
            case tp:
              Z = nb;
              break;
            case "scroll":
            case "scrollend":
              Z = P1;
              break;
            case "wheel":
              Z = ab;
              break;
            case "copy":
            case "cut":
            case "paste":
              Z = Z1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Z = jh;
              break;
            case "toggle":
            case "beforetoggle":
              Z = sb;
          }
          var Se = (n & 4) !== 0, Ke = !Se && (e === "scroll" || e === "scrollend"), L = Se ? F !== null ? F + "Capture" : null : F;
          Se = [];
          for (var z = H, B; z !== null; ) {
            var J = z;
            if (B = J.stateNode, J = J.tag, J !== 5 && J !== 26 && J !== 27 || B === null || L === null || (J = qi(z, L), J != null && Se.push(
              Cs(z, J, B)
            )), Ke) break;
            z = z.return;
          }
          0 < Se.length && (F = new Z(
            F,
            Ce,
            null,
            a,
            $
          ), W.push({ event: F, listeners: Se }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (F = e === "mouseover" || e === "pointerover", Z = e === "mouseout" || e === "pointerout", F && a !== Hu && (Ce = a.relatedTarget || a.fromElement) && (Ua(Ce) || Ce[Ba]))
            break e;
          if ((Z || F) && (F = $.window === $ ? $ : (F = $.ownerDocument) ? F.defaultView || F.parentWindow : window, Z ? (Ce = a.relatedTarget || a.toElement, Z = H, Ce = Ce ? Ua(Ce) : null, Ce !== null && (Ke = u(Ce), Se = Ce.tag, Ce !== Ke || Se !== 5 && Se !== 27 && Se !== 6) && (Ce = null)) : (Z = null, Ce = H), Z !== Ce)) {
            if (Se = Dh, J = "onMouseLeave", L = "onMouseEnter", z = "mouse", (e === "pointerout" || e === "pointerover") && (Se = jh, J = "onPointerLeave", L = "onPointerEnter", z = "pointer"), Ke = Z == null ? F : Hi(Z), B = Ce == null ? F : Hi(Ce), F = new Se(
              J,
              z + "leave",
              Z,
              a,
              $
            ), F.target = Ke, F.relatedTarget = B, J = null, Ua($) === H && (Se = new Se(
              L,
              z + "enter",
              Ce,
              a,
              $
            ), Se.target = B, Se.relatedTarget = Ke, J = Se), Ke = J, Z && Ce)
              t: {
                for (Se = Z, L = Ce, z = 0, B = Se; B; B = _i(B))
                  z++;
                for (B = 0, J = L; J; J = _i(J))
                  B++;
                for (; 0 < z - B; )
                  Se = _i(Se), z--;
                for (; 0 < B - z; )
                  L = _i(L), B--;
                for (; z--; ) {
                  if (Se === L || L !== null && Se === L.alternate)
                    break t;
                  Se = _i(Se), L = _i(L);
                }
                Se = null;
              }
            else Se = null;
            Z !== null && xg(
              W,
              F,
              Z,
              Se,
              !1
            ), Ce !== null && Ke !== null && xg(
              W,
              Ke,
              Ce,
              Se,
              !0
            );
          }
        }
        e: {
          if (F = H ? Hi(H) : window, Z = F.nodeName && F.nodeName.toLowerCase(), Z === "select" || Z === "input" && F.type === "file")
            var he = Hh;
          else if (Bh(F))
            if (qh)
              he = gb;
            else {
              he = pb;
              var Pe = hb;
            }
          else
            Z = F.nodeName, !Z || Z.toLowerCase() !== "input" || F.type !== "checkbox" && F.type !== "radio" ? H && Uu(H.elementType) && (he = Hh) : he = mb;
          if (he && (he = he(e, H))) {
            Uh(
              W,
              he,
              a,
              $
            );
            break e;
          }
          Pe && Pe(e, F, H), e === "focusout" && H && F.type === "number" && H.memoizedProps.value != null && Bu(F, "number", F.value);
        }
        switch (Pe = H ? Hi(H) : window, e) {
          case "focusin":
            (Bh(Pe) || Pe.contentEditable === "true") && (Qa = Pe, ec = H, Qi = null);
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
            if (yb) break;
          case "keydown":
          case "keyup":
            Qh(W, a, $);
        }
        var ge;
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
          $a ? Ph(e, a) && (xe = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (xe = "onCompositionStart");
        xe && (Rh && a.locale !== "ko" && ($a || xe !== "onCompositionStart" ? xe === "onCompositionEnd" && $a && (ge = Oh()) : (Tr = $, Gu = "value" in Tr ? Tr.value : Tr.textContent, $a = !0)), Pe = io(H, xe), 0 < Pe.length && (xe = new kh(
          xe,
          e,
          null,
          a,
          $
        ), W.push({ event: xe, listeners: Pe }), ge ? xe.data = ge : (ge = Ih(a), ge !== null && (xe.data = ge)))), (ge = ob ? ub(e, a) : cb(e, a)) && (xe = io(H, "onBeforeInput"), 0 < xe.length && (Pe = new kh(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          $
        ), W.push({
          event: Pe,
          listeners: xe
        }), Pe.data = ge)), e_(
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
      var c = e, v = c.stateNode;
      if (c = c.tag, c !== 5 && c !== 26 && c !== 27 || v === null || (c = qi(e, a), c != null && l.unshift(
        Cs(e, c, v)
      ), c = qi(e, n), c != null && l.push(
        Cs(e, c, v)
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
    for (var v = n._reactName, w = []; a !== null && a !== l; ) {
      var O = a, j = O.alternate, H = O.stateNode;
      if (O = O.tag, j !== null && j === l) break;
      O !== 5 && O !== 26 && O !== 27 || H === null || (j = H, c ? (H = qi(a, v), H != null && w.unshift(
        Cs(a, H, j)
      )) : c || (H = qi(a, v), H != null && w.push(
        Cs(a, H, j)
      ))), a = a.return;
    }
    w.length !== 0 && e.push({ event: n, listeners: w });
  }
  var a_ = /\r\n?/g, i_ = /\u0000|\uFFFD/g;
  function Eg(e) {
    return (typeof e == "string" ? e : "" + e).replace(a_, `
`).replace(i_, "");
  }
  function Cg(e, n) {
    return n = Eg(n), Eg(e) === n;
  }
  function so() {
  }
  function Je(e, n, a, l, c, v) {
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
        Ah(e, l, v);
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
          typeof v == "function" && (a === "formAction" ? (n !== "input" && Je(e, n, "name", c.name, c, null), Je(
            e,
            n,
            "formEncType",
            c.formEncType,
            c,
            null
          ), Je(
            e,
            n,
            "formMethod",
            c.formMethod,
            c,
            null
          ), Je(
            e,
            n,
            "formTarget",
            c.formTarget,
            c,
            null
          )) : (Je(e, n, "encType", c.encType, c, null), Je(e, n, "method", c.method, c, null), Je(e, n, "target", c.target, c, null)));
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
        l != null && Be("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Be("scrollend", e);
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
        Be("beforetoggle", e), Be("toggle", e), cl(e, "popover", l);
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
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = z1.get(a) || a, cl(e, a, l));
    }
  }
  function wf(e, n, a, l, c, v) {
    switch (a) {
      case "style":
        Ah(e, l, v);
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
        l != null && Be("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Be("scrollend", e);
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
            if (a[0] === "o" && a[1] === "n" && (c = a.endsWith("Capture"), n = a.slice(2, c ? a.length - 7 : void 0), v = e[$t] || null, v = v != null ? v[a] : null, typeof v == "function" && e.removeEventListener(n, v, c), typeof l == "function")) {
              typeof v != "function" && v !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(n, l, c);
              break e;
            }
            a in e ? e[a] = l : l === !0 ? e.setAttribute(a, "") : cl(e, a, l);
          }
    }
  }
  function Rt(e, n, a) {
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
        Be("error", e), Be("load", e);
        var l = !1, c = !1, v;
        for (v in a)
          if (a.hasOwnProperty(v)) {
            var w = a[v];
            if (w != null)
              switch (v) {
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
                  Je(e, n, v, w, a, null);
              }
          }
        c && Je(e, n, "srcSet", a.srcSet, a, null), l && Je(e, n, "src", a.src, a, null);
        return;
      case "input":
        Be("invalid", e);
        var O = v = w = c = null, j = null, H = null;
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
                  v = $;
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
                  Je(e, n, l, $, a, null);
              }
          }
        xh(
          e,
          v,
          O,
          j,
          H,
          w,
          c,
          !1
        ), dl(e);
        return;
      case "select":
        Be("invalid", e), l = w = v = null;
        for (c in a)
          if (a.hasOwnProperty(c) && (O = a[c], O != null))
            switch (c) {
              case "value":
                v = O;
                break;
              case "defaultValue":
                w = O;
                break;
              case "multiple":
                l = O;
              default:
                Je(e, n, c, O, a, null);
            }
        n = v, a = w, e.multiple = !!l, n != null ? Ga(e, !!l, n, !1) : a != null && Ga(e, !!l, a, !0);
        return;
      case "textarea":
        Be("invalid", e), v = c = l = null;
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
                v = O;
                break;
              case "dangerouslySetInnerHTML":
                if (O != null) throw Error(s(91));
                break;
              default:
                Je(e, n, w, O, a, null);
            }
        Ch(e, l, c, v), dl(e);
        return;
      case "option":
        for (j in a)
          if (a.hasOwnProperty(j) && (l = a[j], l != null))
            switch (j) {
              case "selected":
                e.selected = l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                Je(e, n, j, l, a, null);
            }
        return;
      case "dialog":
        Be("beforetoggle", e), Be("toggle", e), Be("cancel", e), Be("close", e);
        break;
      case "iframe":
      case "object":
        Be("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Es.length; l++)
          Be(Es[l], e);
        break;
      case "image":
        Be("error", e), Be("load", e);
        break;
      case "details":
        Be("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Be("error", e), Be("load", e);
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
                Je(e, n, H, l, a, null);
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
      a.hasOwnProperty(O) && (l = a[O], l != null && Je(e, n, O, l, a, null));
  }
  function s_(e, n, a, l) {
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
        var c = null, v = null, w = null, O = null, j = null, H = null, $ = null;
        for (Z in a) {
          var W = a[Z];
          if (a.hasOwnProperty(Z) && W != null)
            switch (Z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                j = W;
              default:
                l.hasOwnProperty(Z) || Je(e, n, Z, null, l, W);
            }
        }
        for (var F in l) {
          var Z = l[F];
          if (W = a[F], l.hasOwnProperty(F) && (Z != null || W != null))
            switch (F) {
              case "type":
                v = Z;
                break;
              case "name":
                c = Z;
                break;
              case "checked":
                H = Z;
                break;
              case "defaultChecked":
                $ = Z;
                break;
              case "value":
                w = Z;
                break;
              case "defaultValue":
                O = Z;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (Z != null)
                  throw Error(s(137, n));
                break;
              default:
                Z !== W && Je(
                  e,
                  n,
                  F,
                  Z,
                  l,
                  W
                );
            }
        }
        Iu(
          e,
          w,
          O,
          j,
          H,
          $,
          v,
          c
        );
        return;
      case "select":
        Z = w = O = F = null;
        for (v in a)
          if (j = a[v], a.hasOwnProperty(v) && j != null)
            switch (v) {
              case "value":
                break;
              case "multiple":
                Z = j;
              default:
                l.hasOwnProperty(v) || Je(
                  e,
                  n,
                  v,
                  null,
                  l,
                  j
                );
            }
        for (c in l)
          if (v = l[c], j = a[c], l.hasOwnProperty(c) && (v != null || j != null))
            switch (c) {
              case "value":
                F = v;
                break;
              case "defaultValue":
                O = v;
                break;
              case "multiple":
                w = v;
              default:
                v !== j && Je(
                  e,
                  n,
                  c,
                  v,
                  l,
                  j
                );
            }
        n = O, a = w, l = Z, F != null ? Ga(e, !!a, F, !1) : !!l != !!a && (n != null ? Ga(e, !!a, n, !0) : Ga(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        Z = F = null;
        for (O in a)
          if (c = a[O], a.hasOwnProperty(O) && c != null && !l.hasOwnProperty(O))
            switch (O) {
              case "value":
                break;
              case "children":
                break;
              default:
                Je(e, n, O, null, l, c);
            }
        for (w in l)
          if (c = l[w], v = a[w], l.hasOwnProperty(w) && (c != null || v != null))
            switch (w) {
              case "value":
                F = c;
                break;
              case "defaultValue":
                Z = c;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(s(91));
                break;
              default:
                c !== v && Je(e, n, w, c, l, v);
            }
        Eh(e, F, Z);
        return;
      case "option":
        for (var Ce in a)
          if (F = a[Ce], a.hasOwnProperty(Ce) && F != null && !l.hasOwnProperty(Ce))
            switch (Ce) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Je(
                  e,
                  n,
                  Ce,
                  null,
                  l,
                  F
                );
            }
        for (j in l)
          if (F = l[j], Z = a[j], l.hasOwnProperty(j) && F !== Z && (F != null || Z != null))
            switch (j) {
              case "selected":
                e.selected = F && typeof F != "function" && typeof F != "symbol";
                break;
              default:
                Je(
                  e,
                  n,
                  j,
                  F,
                  l,
                  Z
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
          F = a[Se], a.hasOwnProperty(Se) && F != null && !l.hasOwnProperty(Se) && Je(e, n, Se, null, l, F);
        for (H in l)
          if (F = l[H], Z = a[H], l.hasOwnProperty(H) && F !== Z && (F != null || Z != null))
            switch (H) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (F != null)
                  throw Error(s(137, n));
                break;
              default:
                Je(
                  e,
                  n,
                  H,
                  F,
                  l,
                  Z
                );
            }
        return;
      default:
        if (Uu(n)) {
          for (var Ke in a)
            F = a[Ke], a.hasOwnProperty(Ke) && F !== void 0 && !l.hasOwnProperty(Ke) && wf(
              e,
              n,
              Ke,
              void 0,
              l,
              F
            );
          for ($ in l)
            F = l[$], Z = a[$], !l.hasOwnProperty($) || F === Z || F === void 0 && Z === void 0 || wf(
              e,
              n,
              $,
              F,
              l,
              Z
            );
          return;
        }
    }
    for (var L in a)
      F = a[L], a.hasOwnProperty(L) && F != null && !l.hasOwnProperty(L) && Je(e, n, L, null, l, F);
    for (W in l)
      F = l[W], Z = a[W], !l.hasOwnProperty(W) || F === Z || F == null && Z == null || Je(e, n, W, F, l, Z);
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
  function l_() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Of ? !1 : (Of = e, !0) : (Of = null, !1);
  }
  var Ng = typeof setTimeout == "function" ? setTimeout : void 0, o_ = typeof clearTimeout == "function" ? clearTimeout : void 0, Tg = typeof Promise == "function" ? Promise : void 0, u_ = typeof queueMicrotask == "function" ? queueMicrotask : typeof Tg < "u" ? function(e) {
    return Tg.resolve(null).then(e).catch(c_);
  } : Ng;
  function c_(e) {
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
      var v = a.nextSibling;
      if (e.removeChild(a), v && v.nodeType === 8)
        if (a = v.data, a === "/$") {
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
            e.removeChild(v), js(n);
            return;
          }
          c--;
        } else
          a === "$" || a === "$?" || a === "$!" ? c++ : l = a.charCodeAt(0) - 48;
      else l = 0;
      a = v;
    } while (a);
    js(n);
  }
  function Mf(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var a = n;
      switch (n = n.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Mf(a), Ru(a);
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
  function f_(e, n, a, l) {
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
              if (v = e.getAttribute("rel"), v === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (v !== c.rel || e.getAttribute("href") !== (c.href == null || c.href === "" ? null : c.href) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin) || e.getAttribute("title") !== (c.title == null ? null : c.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (v = e.getAttribute("src"), (v !== (c.src == null ? null : c.src) || e.getAttribute("type") !== (c.type == null ? null : c.type) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin)) && v && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (n === "input" && e.type === "hidden") {
        var v = c.name == null ? null : "" + c.name;
        if (c.type === "hidden" && e.getAttribute("name") === v)
          return e;
      } else return e;
      if (e = In(e.nextSibling), e === null) break;
    }
    return null;
  }
  function d_(e, n, a) {
    if (n === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = In(e.nextSibling), e === null)) return null;
    return e;
  }
  function Df(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function h_(e, n) {
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
  function In(e) {
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
  var kf = null;
  function Mg(e) {
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
  var On = /* @__PURE__ */ new Map(), kg = /* @__PURE__ */ new Set();
  function oo(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var yr = re.d;
  re.d = {
    f: p_,
    r: m_,
    D: g_,
    C: v_,
    L: y_,
    m: b_,
    X: S_,
    S: __,
    M: x_
  };
  function p_() {
    var e = yr.f(), n = Wl();
    return e || n;
  }
  function m_(e) {
    var n = Ha(e);
    n !== null && n.tag === 5 && n.type === "form" ? Kp(n) : yr.r(e);
  }
  var Si = typeof document > "u" ? null : document;
  function jg(e, n, a) {
    var l = Si;
    if (l && typeof n == "string" && n) {
      var c = xn(n);
      c = 'link[rel="' + e + '"][href="' + c + '"]', typeof a == "string" && (c += '[crossorigin="' + a + '"]'), kg.has(c) || (kg.add(c), e = { rel: e, crossOrigin: a, href: n }, l.querySelector(c) === null && (n = l.createElement("link"), Rt(n, "link", e), Nt(n), l.head.appendChild(n)));
    }
  }
  function g_(e) {
    yr.D(e), jg("dns-prefetch", e, null);
  }
  function v_(e, n) {
    yr.C(e, n), jg("preconnect", e, n);
  }
  function y_(e, n, a) {
    yr.L(e, n, a);
    var l = Si;
    if (l && e && n) {
      var c = 'link[rel="preload"][as="' + xn(n) + '"]';
      n === "image" && a && a.imageSrcSet ? (c += '[imagesrcset="' + xn(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (c += '[imagesizes="' + xn(
        a.imageSizes
      ) + '"]')) : c += '[href="' + xn(e) + '"]';
      var v = c;
      switch (n) {
        case "style":
          v = xi(e);
          break;
        case "script":
          v = Ei(e);
      }
      On.has(v) || (e = b(
        {
          rel: "preload",
          href: n === "image" && a && a.imageSrcSet ? void 0 : e,
          as: n
        },
        a
      ), On.set(v, e), l.querySelector(c) !== null || n === "style" && l.querySelector(As(v)) || n === "script" && l.querySelector(Ns(v)) || (n = l.createElement("link"), Rt(n, "link", e), Nt(n), l.head.appendChild(n)));
    }
  }
  function b_(e, n) {
    yr.m(e, n);
    var a = Si;
    if (a && e) {
      var l = n && typeof n.as == "string" ? n.as : "script", c = 'link[rel="modulepreload"][as="' + xn(l) + '"][href="' + xn(e) + '"]', v = c;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          v = Ei(e);
      }
      if (!On.has(v) && (e = b({ rel: "modulepreload", href: e }, n), On.set(v, e), a.querySelector(c) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Ns(v)))
              return;
        }
        l = a.createElement("link"), Rt(l, "link", e), Nt(l), a.head.appendChild(l);
      }
    }
  }
  function __(e, n, a) {
    yr.S(e, n, a);
    var l = Si;
    if (l && e) {
      var c = qa(l).hoistableStyles, v = xi(e);
      n = n || "default";
      var w = c.get(v);
      if (!w) {
        var O = { loading: 0, preload: null };
        if (w = l.querySelector(
          As(v)
        ))
          O.loading = 5;
        else {
          e = b(
            { rel: "stylesheet", href: e, "data-precedence": n },
            a
          ), (a = On.get(v)) && jf(e, a);
          var j = w = l.createElement("link");
          Nt(j), Rt(j, "link", e), j._p = new Promise(function(H, $) {
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
        }, c.set(v, w);
      }
    }
  }
  function S_(e, n) {
    yr.X(e, n);
    var a = Si;
    if (a && e) {
      var l = qa(a).hoistableScripts, c = Ei(e), v = l.get(c);
      v || (v = a.querySelector(Ns(c)), v || (e = b({ src: e, async: !0 }, n), (n = On.get(c)) && Rf(e, n), v = a.createElement("script"), Nt(v), Rt(v, "link", e), a.head.appendChild(v)), v = {
        type: "script",
        instance: v,
        count: 1,
        state: null
      }, l.set(c, v));
    }
  }
  function x_(e, n) {
    yr.M(e, n);
    var a = Si;
    if (a && e) {
      var l = qa(a).hoistableScripts, c = Ei(e), v = l.get(c);
      v || (v = a.querySelector(Ns(c)), v || (e = b({ src: e, async: !0, type: "module" }, n), (n = On.get(c)) && Rf(e, n), v = a.createElement("script"), Nt(v), Rt(v, "link", e), a.head.appendChild(v)), v = {
        type: "script",
        instance: v,
        count: 1,
        state: null
      }, l.set(c, v));
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
          var v = qa(
            c
          ).hoistableStyles, w = v.get(e);
          if (w || (c = c.ownerDocument || c, w = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, v.set(e, w), (v = c.querySelector(
            As(e)
          )) && !v._p && (w.instance = v, w.state.loading = 5), On.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, On.set(e, a), v || E_(
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
  function E_(e, n, a, l) {
    e.querySelector('link[rel="preload"][as="style"][' + n + "]") ? l.loading = 1 : (n = e.createElement("link"), l.preload = n, n.addEventListener("load", function() {
      return l.loading |= 1;
    }), n.addEventListener("error", function() {
      return l.loading |= 2;
    }), Rt(n, "link", a), Nt(n), e.head.appendChild(n));
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
          ), Nt(l), Rt(l, "style", c), uo(l, a.precedence, e), n.instance = l;
        case "stylesheet":
          c = xi(a.href);
          var v = e.querySelector(
            As(c)
          );
          if (v)
            return n.state.loading |= 4, n.instance = v, Nt(v), v;
          l = zg(a), (c = On.get(c)) && jf(l, c), v = (e.ownerDocument || e).createElement("link"), Nt(v);
          var w = v;
          return w._p = new Promise(function(O, j) {
            w.onload = O, w.onerror = j;
          }), Rt(v, "link", l), n.state.loading |= 4, uo(v, a.precedence, e), n.instance = v;
        case "script":
          return v = Ei(a.src), (c = e.querySelector(
            Ns(v)
          )) ? (n.instance = c, Nt(c), c) : (l = a, (c = On.get(v)) && (l = b({}, a), Rf(l, c)), e = e.ownerDocument || e, c = e.createElement("script"), Nt(c), Rt(c, "link", l), e.head.appendChild(c), n.instance = c);
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
    ), c = l.length ? l[l.length - 1] : null, v = c, w = 0; w < l.length; w++) {
      var O = l[w];
      if (O.dataset.precedence === n) v = O;
      else if (v !== c) break;
    }
    v ? v.parentNode.insertBefore(e, v.nextSibling) : (n = a.nodeType === 9 ? a.head : a, n.insertBefore(e, n.firstChild));
  }
  function jf(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.title == null && (e.title = n.title);
  }
  function Rf(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.integrity == null && (e.integrity = n.integrity);
  }
  var co = null;
  function Pg(e, n, a) {
    if (co === null) {
      var l = /* @__PURE__ */ new Map(), c = co = /* @__PURE__ */ new Map();
      c.set(a, l);
    } else
      c = co, l = c.get(a), l || (l = /* @__PURE__ */ new Map(), c.set(a, l));
    if (l.has(e)) return l;
    for (l.set(e, null), a = a.getElementsByTagName(e), c = 0; c < a.length; c++) {
      var v = a[c];
      if (!(v[Ui] || v[It] || e === "link" && v.getAttribute("rel") === "stylesheet") && v.namespaceURI !== "http://www.w3.org/2000/svg") {
        var w = v.getAttribute(n) || "";
        w = e + w;
        var O = l.get(w);
        O ? O.push(v) : l.set(w, [v]);
      }
    }
    return l;
  }
  function Ig(e, n, a) {
    e = e.ownerDocument || e, e.head.insertBefore(
      a,
      n === "title" ? e.querySelector("head > title") : null
    );
  }
  function C_(e, n, a) {
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
  function w_() {
  }
  function A_(e, n, a) {
    if (Ts === null) throw Error(s(475));
    var l = Ts;
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var c = xi(a.href), v = e.querySelector(
          As(c)
        );
        if (v) {
          e = v._p, e !== null && typeof e == "object" && typeof e.then == "function" && (l.count++, l = fo.bind(l), e.then(l, l)), n.state.loading |= 4, n.instance = v, Nt(v);
          return;
        }
        v = e.ownerDocument || e, a = zg(a), (c = On.get(c)) && jf(a, c), v = v.createElement("link"), Nt(v);
        var w = v;
        w._p = new Promise(function(O, j) {
          w.onload = O, w.onerror = j;
        }), Rt(v, "link", a), n.instance = v;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (l.count++, n = fo.bind(l), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  function N_() {
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
    e.stylesheets = null, e.unsuspend !== null && (e.count++, ho = /* @__PURE__ */ new Map(), n.forEach(T_, e), ho = null, fo.call(e));
  }
  function T_(e, n) {
    if (!(n.state.loading & 4)) {
      var a = ho.get(e);
      if (a) var l = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), ho.set(e, a);
        for (var c = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), v = 0; v < c.length; v++) {
          var w = c[v];
          (w.nodeName === "LINK" || w.getAttribute("media") !== "not all") && (a.set(w.dataset.precedence, w), l = w);
        }
        l && a.set(null, l);
      }
      c = n.instance, w = c.getAttribute("data-precedence"), v = a.get(w) || l, v === l && a.set(null, c), a.set(w, c), this.count++, l = fo.bind(this), c.addEventListener("load", l), c.addEventListener("error", l), v ? v.parentNode.insertBefore(c, v.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(c, e.firstChild)), n.state.loading |= 4;
    }
  }
  var Os = {
    $$typeof: M,
    Provider: null,
    Consumer: null,
    _currentValue: de,
    _currentValue2: de,
    _threadCount: 0
  };
  function O_(e, n, a, l, c, v, w, O) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Mu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Mu(0), this.hiddenUpdates = Mu(null), this.identifierPrefix = l, this.onUncaughtError = c, this.onCaughtError = v, this.onRecoverableError = w, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = O, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Ug(e, n, a, l, c, v, w, O, j, H, $, W) {
    return e = new O_(
      e,
      n,
      a,
      w,
      O,
      j,
      H,
      W
    ), n = 1, v === !0 && (n |= 24), v = ln(3, null, null, n), e.current = v, v.stateNode = e, n = mc(), n.refCount++, e.pooledCache = n, n.refCount++, v.memoizedState = {
      element: l,
      isDehydrated: a,
      cache: n
    }, bc(v), e;
  }
  function Hg(e) {
    return e ? (e = ei, e) : ei;
  }
  function qg(e, n, a, l, c, v) {
    c = Hg(c), l.context === null ? l.context = c : l.pendingContext = c, l = Dr(n), l.payload = { element: a }, v = v === void 0 ? null : v, v !== null && (l.callback = v), a = kr(e, l, n), a !== null && (dn(a, e, n), is(a, e, n));
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
    var c = U.T;
    U.T = null;
    var v = re.p;
    try {
      re.p = 2, Pf(e, n, a, l);
    } finally {
      re.p = v, U.T = c;
    }
  }
  function D_(e, n, a, l) {
    var c = U.T;
    U.T = null;
    var v = re.p;
    try {
      re.p = 8, Pf(e, n, a, l);
    } finally {
      re.p = v, U.T = c;
    }
  }
  function Pf(e, n, a, l) {
    if (po) {
      var c = If(l);
      if (c === null)
        Cf(
          e,
          n,
          l,
          mo,
          a
        ), Vg(e, l);
      else if (j_(
        c,
        e,
        n,
        a,
        l
      ))
        l.stopPropagation();
      else if (Vg(e, l), n & 4 && -1 < k_.indexOf(e)) {
        for (; c !== null; ) {
          var v = Ha(c);
          if (v !== null)
            switch (v.tag) {
              case 3:
                if (v = v.stateNode, v.current.memoizedState.isDehydrated) {
                  var w = _n(v.pendingLanes);
                  if (w !== 0) {
                    var O = v;
                    for (O.pendingLanes |= 2, O.entangledLanes |= 2; w; ) {
                      var j = 1 << 31 - qt(w);
                      O.entanglements[1] |= j, w &= ~j;
                    }
                    Qn(v), (Xe & 6) === 0 && (Jl = ue() + 500, xs(0));
                  }
                }
                break;
              case 13:
                O = Wa(v, 2), O !== null && dn(O, v, 2), Wl(), Lf(v, 2);
            }
          if (v = If(l), v === null && Cf(
            e,
            n,
            l,
            mo,
            a
          ), v === c) break;
          c = v;
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
  function If(e) {
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
        switch (Te()) {
          case Ee:
            return 2;
          case ce:
            return 8;
          case me:
          case qe:
            return 32;
          case Fe:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Uf = !1, Gr = null, Vr = null, Yr = null, Ms = /* @__PURE__ */ new Map(), Ds = /* @__PURE__ */ new Map(), Xr = [], k_ = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
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
        Ms.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ds.delete(n.pointerId);
    }
  }
  function ks(e, n, a, l, c, v) {
    return e === null || e.nativeEvent !== v ? (e = {
      blockedOn: n,
      domEventName: a,
      eventSystemFlags: l,
      nativeEvent: v,
      targetContainers: [c]
    }, n !== null && (n = Ha(n), n !== null && Zg(n)), e) : (e.eventSystemFlags |= l, n = e.targetContainers, c !== null && n.indexOf(c) === -1 && n.push(c), e);
  }
  function j_(e, n, a, l, c) {
    switch (n) {
      case "focusin":
        return Gr = ks(
          Gr,
          e,
          n,
          a,
          l,
          c
        ), !0;
      case "dragenter":
        return Vr = ks(
          Vr,
          e,
          n,
          a,
          l,
          c
        ), !0;
      case "mouseover":
        return Yr = ks(
          Yr,
          e,
          n,
          a,
          l,
          c
        ), !0;
      case "pointerover":
        var v = c.pointerId;
        return Ms.set(
          v,
          ks(
            Ms.get(v) || null,
            e,
            n,
            a,
            l,
            c
          )
        ), !0;
      case "gotpointercapture":
        return v = c.pointerId, Ds.set(
          v,
          ks(
            Ds.get(v) || null,
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
            e.blockedOn = n, A1(e.priority, function() {
              if (a.tag === 13) {
                var l = fn();
                l = Du(l);
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
      var a = If(e.nativeEvent);
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
  function R_() {
    Uf = !1, Gr !== null && go(Gr) && (Gr = null), Vr !== null && go(Vr) && (Vr = null), Yr !== null && go(Yr) && (Yr = null), Ms.forEach(Xg), Ds.forEach(Xg);
  }
  function vo(e, n) {
    e.blockedOn === n && (e.blockedOn = null, Uf || (Uf = !0, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      R_
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
          var v = Ha(a);
          v !== null && (e.splice(n, 3), n -= 3, Ic(
            v,
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
    Gr !== null && vo(Gr, e), Vr !== null && vo(Vr, e), Yr !== null && vo(Yr, e), Ms.forEach(n), Ds.forEach(n);
    for (var a = 0; a < Xr.length; a++) {
      var l = Xr[a];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Xr.length && (a = Xr[0], a.blockedOn === null); )
      Yg(a), a.blockedOn === null && Xr.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (l = 0; l < a.length; l += 3) {
        var c = a[l], v = a[l + 1], w = c[$t] || null;
        if (typeof v == "function")
          w || $g(a);
        else if (w) {
          var O = null;
          if (v && v.hasAttribute("formAction")) {
            if (c = v, w = v[$t] || null)
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
    return e = h(n), e = e !== null ? y(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var z_ = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: U,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var _o = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!_o.isDisabled && _o.supportsFiber)
      try {
        nr = _o.inject(
          z_
        ), pt = _o;
      } catch {
      }
  }
  return Ps.createRoot = function(e, n) {
    if (!o(e)) throw Error(s(299));
    var a = !1, l = "", c = dm, v = hm, w = pm, O = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onUncaughtError !== void 0 && (c = n.onUncaughtError), n.onCaughtError !== void 0 && (v = n.onCaughtError), n.onRecoverableError !== void 0 && (w = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (O = n.unstable_transitionCallbacks)), n = Ug(
      e,
      1,
      !1,
      null,
      null,
      a,
      l,
      c,
      v,
      w,
      O,
      null
    ), e[Ba] = n.current, Ef(e), new Hf(n);
  }, Ps.hydrateRoot = function(e, n, a) {
    if (!o(e)) throw Error(s(299));
    var l = !1, c = "", v = dm, w = hm, O = pm, j = null, H = null;
    return a != null && (a.unstable_strictMode === !0 && (l = !0), a.identifierPrefix !== void 0 && (c = a.identifierPrefix), a.onUncaughtError !== void 0 && (v = a.onUncaughtError), a.onCaughtError !== void 0 && (w = a.onCaughtError), a.onRecoverableError !== void 0 && (O = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (j = a.unstable_transitionCallbacks), a.formState !== void 0 && (H = a.formState)), n = Ug(
      e,
      1,
      !0,
      n,
      a ?? null,
      l,
      c,
      v,
      w,
      O,
      j,
      H
    ), n.context = Hg(null), a = n.current, l = fn(), l = Du(l), c = Dr(l), c.callback = null, kr(a, c, l), a = l, n.current.lanes = a, Bi(n, a), Qn(n), e[Ba] = n.current, Ef(e), new bo(n);
  }, Ps.version = "19.1.1", Ps;
}
var fv;
function f2() {
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
  return t(), Gf.exports = c2(), Gf.exports;
}
var d2 = f2();
const dv = /* @__PURE__ */ Gd(d2);
var h2 = Object.defineProperty, p2 = (t, r, i) => r in t ? h2(t, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[r] = i, m2 = (t, r, i) => p2(t, r + "", i);
class t0 extends Error {
  constructor(r, i) {
    super(r), m2(this, "data"), this.data = i;
  }
  toString() {
    return this.message;
  }
}
async function g2(t, r) {
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
    throw new t0(u.statusText, u);
  await i.getCharacters();
}
async function v2(t, r) {
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
    throw new t0(f.message || `Request failed with status ${u.status}`, u);
  }
  await s.getCharacters();
}
var y2 = Object.defineProperty, b2 = (t, r, i) => r in t ? y2(t, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[r] = i, hv = (t, r, i) => b2(t, typeof r != "symbol" ? r + "" : r, i);
class n0 {
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
      let h = function(y, b) {
        let _ = !1;
        for (const m of Object.keys(b))
          y[m] === void 0 ? (y[m] = b[m], _ = !0) : typeof b[m] == "object" && b[m] !== null && (y[m] = y[m] || {}, h(y[m], b[m]) && (_ = !0));
        return _;
      };
      s && u.version !== s && (p.version.changed = !0, p.version.new = s, u.version = s), o && o !== "*" && u.formatVersion !== o && (p.formatVersion.changed = !0, p.formatVersion.new = o, u.formatVersion = o), (h(u, this.defaultSettings) || p.version.changed || p.formatVersion.changed) && this.saveSettings();
    } else if (Array.isArray(i)) {
      s && !u.version && (u.version = s, p.version.changed = !0, p.version.new = s), o && !u.formatVersion && (u.formatVersion = o, p.formatVersion.changed = !0, p.formatVersion.new = o);
      let h = structuredClone(u), y = u.formatVersion;
      try {
        let b;
        do {
          b = !1;
          let _ = i.find((m) => m.from === y);
          if (_ && _.to > y)
            h = await _.action(h), y = _.to, h.formatVersion = _.to, b = !0;
          else
            for (const m of i)
              if (m.from === "*" && m.to > y && y !== m.to) {
                h = await m.action(h), y = m.to, h.formatVersion = m.to, b = !0;
                break;
              }
        } while (b);
        if (y !== u.formatVersion) {
          p.formatVersion.changed = !0, p.formatVersion.new = y;
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
  return Array.isArray ? Array.isArray(t) : i0(t) === "[object Array]";
}
function _2(t) {
  if (typeof t == "string")
    return t;
  let r = t + "";
  return r == "0" && 1 / t == -1 / 0 ? "-0" : r;
}
function S2(t) {
  return t == null ? "" : _2(t);
}
function Wn(t) {
  return typeof t == "string";
}
function r0(t) {
  return typeof t == "number";
}
function x2(t) {
  return t === !0 || t === !1 || E2(t) && i0(t) == "[object Boolean]";
}
function a0(t) {
  return typeof t == "object";
}
function E2(t) {
  return a0(t) && t !== null;
}
function gn(t) {
  return t != null;
}
function $f(t) {
  return !t.trim().length;
}
function i0(t) {
  return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
}
const C2 = "Incorrect 'index' type", w2 = (t) => `Invalid value for key ${t}`, A2 = (t) => `Pattern length exceeds max of ${t}.`, N2 = (t) => `Missing ${t} property in key`, T2 = (t) => `Property 'weight' in key '${t}' must be a positive integer`, pv = Object.prototype.hasOwnProperty;
class O2 {
  constructor(r) {
    this._keys = [], this._keyMap = {};
    let i = 0;
    r.forEach((s) => {
      let o = s0(s);
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
function s0(t) {
  let r = null, i = null, s = null, o = 1, u = null;
  if (Wn(t) || Cr(t))
    s = t, r = mv(t), i = _d(t);
  else {
    if (!pv.call(t, "name"))
      throw new Error(N2("name"));
    const f = t.name;
    if (s = f, pv.call(t, "weight") && (o = t.weight, o <= 0))
      throw new Error(T2(f));
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
        const y = u[h];
        if (!gn(y))
          return;
        if (p === f.length - 1 && (Wn(y) || r0(y) || x2(y)))
          i.push(S2(y));
        else if (Cr(y)) {
          s = !0;
          for (let b = 0, _ = y.length; b < _; b += 1)
            o(y[b], f, p + 1);
        } else f.length && o(y, f, p + 1);
      }
  };
  return o(t, Wn(r) ? r.split(".") : r, 0), s ? i : i[0];
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
}, k2 = {
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
}, j2 = {
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
}, R2 = {
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
var Ne = {
  ...k2,
  ...D2,
  ...j2,
  ...R2
};
const z2 = /[^ ]+/g;
function L2(t = 1, r = 3) {
  const i = /* @__PURE__ */ new Map(), s = Math.pow(10, r);
  return {
    get(o) {
      const u = o.match(z2).length;
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
    getFn: r = Ne.getFn,
    fieldNormWeight: i = Ne.fieldNormWeight
  } = {}) {
    this.norm = L2(i, 3), this.getFn = r, this.isCreated = !1, this.setIndexRecords();
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
    this.isCreated || !this.docs.length || (this.isCreated = !0, Wn(this.docs[0]) ? this.docs.forEach((r, i) => {
      this._addString(r, i);
    }) : this.docs.forEach((r, i) => {
      this._addObject(r, i);
    }), this.norm.clear());
  }
  // Adds a doc to the end of the index
  add(r) {
    const i = this.size();
    Wn(r) ? this._addString(r, i) : this._addObject(r, i);
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
            const { nestedArrIndex: y, value: b } = h.pop();
            if (gn(b))
              if (Wn(b) && !$f(b)) {
                let _ = {
                  v: b,
                  i: y,
                  n: this.norm.get(b)
                };
                p.push(_);
              } else Cr(b) && b.forEach((_, m) => {
                h.push({
                  nestedArrIndex: m,
                  value: _
                });
              });
          }
          s.$[u] = p;
        } else if (Wn(f) && !$f(f)) {
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
function l0(t, r, { getFn: i = Ne.getFn, fieldNormWeight: s = Ne.fieldNormWeight } = {}) {
  const o = new Yd({ getFn: i, fieldNormWeight: s });
  return o.setKeys(t.map(s0)), o.setSources(r), o.create(), o;
}
function P2(t, { getFn: r = Ne.getFn, fieldNormWeight: i = Ne.fieldNormWeight } = {}) {
  const { keys: s, records: o } = t, u = new Yd({ getFn: r, fieldNormWeight: i });
  return u.setKeys(s), u.setIndexRecords(o), u;
}
function So(t, {
  errors: r = 0,
  currentLocation: i = 0,
  expectedLocation: s = 0,
  distance: o = Ne.distance,
  ignoreLocation: u = Ne.ignoreLocation
} = {}) {
  const f = r / t.length;
  if (u)
    return f;
  const p = Math.abs(s - i);
  return o ? f + p / o : p ? 1 : f;
}
function I2(t = [], r = Ne.minMatchCharLength) {
  let i = [], s = -1, o = -1, u = 0;
  for (let f = t.length; u < f; u += 1) {
    let p = t[u];
    p && s === -1 ? s = u : !p && s !== -1 && (o = u - 1, o - s + 1 >= r && i.push([s, o]), s = -1);
  }
  return t[u - 1] && u - s >= r && i.push([s, u - 1]), i;
}
const Ma = 32;
function B2(t, r, i, {
  location: s = Ne.location,
  distance: o = Ne.distance,
  threshold: u = Ne.threshold,
  findAllMatches: f = Ne.findAllMatches,
  minMatchCharLength: p = Ne.minMatchCharLength,
  includeMatches: h = Ne.includeMatches,
  ignoreLocation: y = Ne.ignoreLocation
} = {}) {
  if (r.length > Ma)
    throw new Error(A2(Ma));
  const b = r.length, _ = t.length, m = Math.max(0, Math.min(s, _));
  let g = u, d = m;
  const x = p > 1 || h, E = x ? Array(_) : [];
  let T;
  for (; (T = t.indexOf(r, d)) > -1; ) {
    let k = So(r, {
      currentLocation: T,
      expectedLocation: m,
      distance: o,
      ignoreLocation: y
    });
    if (g = Math.min(k, g), d = T + b, x) {
      let q = 0;
      for (; q < b; )
        E[T + q] = 1, q += 1;
    }
  }
  d = -1;
  let A = [], M = 1, C = b + _;
  const N = 1 << b - 1;
  for (let k = 0; k < b; k += 1) {
    let q = 0, V = C;
    for (; q < V; )
      So(r, {
        errors: k,
        currentLocation: m + V,
        expectedLocation: m,
        distance: o,
        ignoreLocation: y
      }) <= g ? q = V : C = V, V = Math.floor((C - q) / 2 + q);
    C = V;
    let I = Math.max(1, m - V + 1), G = f ? _ : Math.min(m + V, _) + b, Y = Array(G + 2);
    Y[G + 1] = (1 << k) - 1;
    for (let fe = G; fe >= I; fe -= 1) {
      let ve = fe - 1, U = i[t.charAt(ve)];
      if (x && (E[ve] = +!!U), Y[fe] = (Y[fe + 1] << 1 | 1) & U, k && (Y[fe] |= (A[fe + 1] | A[fe]) << 1 | 1 | A[fe + 1]), Y[fe] & N && (M = So(r, {
        errors: k,
        currentLocation: ve,
        expectedLocation: m,
        distance: o,
        ignoreLocation: y
      }), M <= g)) {
        if (g = M, d = ve, d <= m)
          break;
        I = Math.max(1, 2 * m - d);
      }
    }
    if (So(r, {
      errors: k + 1,
      currentLocation: m,
      expectedLocation: m,
      distance: o,
      ignoreLocation: y
    }) > g)
      break;
    A = Y;
  }
  const D = {
    isMatch: d >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, M)
  };
  if (x) {
    const k = I2(E, p);
    k.length ? h && (D.indices = k) : D.isMatch = !1;
  }
  return D;
}
function U2(t) {
  let r = {};
  for (let i = 0, s = t.length; i < s; i += 1) {
    const o = t.charAt(i);
    r[o] = (r[o] || 0) | 1 << s - i - 1;
  }
  return r;
}
const fu = String.prototype.normalize ? ((t) => t.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((t) => t);
class o0 {
  constructor(r, {
    location: i = Ne.location,
    threshold: s = Ne.threshold,
    distance: o = Ne.distance,
    includeMatches: u = Ne.includeMatches,
    findAllMatches: f = Ne.findAllMatches,
    minMatchCharLength: p = Ne.minMatchCharLength,
    isCaseSensitive: h = Ne.isCaseSensitive,
    ignoreDiacritics: y = Ne.ignoreDiacritics,
    ignoreLocation: b = Ne.ignoreLocation
  } = {}) {
    if (this.options = {
      location: i,
      threshold: s,
      distance: o,
      includeMatches: u,
      findAllMatches: f,
      minMatchCharLength: p,
      isCaseSensitive: h,
      ignoreDiacritics: y,
      ignoreLocation: b
    }, r = h ? r : r.toLowerCase(), r = y ? fu(r) : r, this.pattern = r, this.chunks = [], !this.pattern.length)
      return;
    const _ = (g, d) => {
      this.chunks.push({
        pattern: g,
        alphabet: U2(g),
        startIndex: d
      });
    }, m = this.pattern.length;
    if (m > Ma) {
      let g = 0;
      const d = m % Ma, x = m - d;
      for (; g < x; )
        _(this.pattern.substr(g, Ma), g), g += Ma;
      if (d) {
        const E = m - Ma;
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
      minMatchCharLength: y,
      ignoreLocation: b
    } = this.options;
    let _ = [], m = 0, g = !1;
    this.chunks.forEach(({ pattern: x, alphabet: E, startIndex: T }) => {
      const { isMatch: A, score: M, indices: C } = B2(r, x, E, {
        location: u + T,
        distance: f,
        threshold: p,
        findAllMatches: h,
        minMatchCharLength: y,
        includeMatches: o,
        ignoreLocation: b
      });
      A && (g = !0), m += M, A && C && (_ = [..._, ...C]);
    });
    let d = {
      isMatch: g,
      score: g ? m / this.chunks.length : 1
    };
    return g && o && (d.indices = _), d;
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
class H2 extends na {
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
class q2 extends na {
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
class F2 extends na {
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
class Z2 extends na {
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
class G2 extends na {
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
class V2 extends na {
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
class u0 extends na {
  constructor(r, {
    location: i = Ne.location,
    threshold: s = Ne.threshold,
    distance: o = Ne.distance,
    includeMatches: u = Ne.includeMatches,
    findAllMatches: f = Ne.findAllMatches,
    minMatchCharLength: p = Ne.minMatchCharLength,
    isCaseSensitive: h = Ne.isCaseSensitive,
    ignoreDiacritics: y = Ne.ignoreDiacritics,
    ignoreLocation: b = Ne.ignoreLocation
  } = {}) {
    super(r), this._bitapSearch = new o0(r, {
      location: i,
      threshold: s,
      distance: o,
      includeMatches: u,
      findAllMatches: f,
      minMatchCharLength: p,
      isCaseSensitive: h,
      ignoreDiacritics: y,
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
class c0 extends na {
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
  H2,
  c0,
  F2,
  Z2,
  V2,
  G2,
  q2,
  u0
], vv = Sd.length, Y2 = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, X2 = "|";
function $2(t, r = {}) {
  return t.split(X2).map((i) => {
    let s = i.trim().split(Y2).filter((u) => u && !!u.trim()), o = [];
    for (let u = 0, f = s.length; u < f; u += 1) {
      const p = s[u];
      let h = !1, y = -1;
      for (; !h && ++y < vv; ) {
        const b = Sd[y];
        let _ = b.isMultiMatch(p);
        _ && (o.push(new b(_, r)), h = !0);
      }
      if (!h)
        for (y = -1; ++y < vv; ) {
          const b = Sd[y];
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
const Q2 = /* @__PURE__ */ new Set([u0.type, c0.type]);
class J2 {
  constructor(r, {
    isCaseSensitive: i = Ne.isCaseSensitive,
    ignoreDiacritics: s = Ne.ignoreDiacritics,
    includeMatches: o = Ne.includeMatches,
    minMatchCharLength: u = Ne.minMatchCharLength,
    ignoreLocation: f = Ne.ignoreLocation,
    findAllMatches: p = Ne.findAllMatches,
    location: h = Ne.location,
    threshold: y = Ne.threshold,
    distance: b = Ne.distance
  } = {}) {
    this.query = null, this.options = {
      isCaseSensitive: i,
      ignoreDiacritics: s,
      includeMatches: o,
      minMatchCharLength: u,
      findAllMatches: p,
      ignoreLocation: f,
      location: h,
      threshold: y,
      distance: b
    }, r = i ? r : r.toLowerCase(), r = s ? fu(r) : r, this.pattern = r, this.query = $2(this.pattern, this.options);
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
    for (let y = 0, b = i.length; y < b; y += 1) {
      const _ = i[y];
      p.length = 0, f = 0;
      for (let m = 0, g = _.length; m < g; m += 1) {
        const d = _[m], { isMatch: x, indices: E, score: T } = d.search(r);
        if (x) {
          if (f += 1, h += T, s) {
            const A = d.constructor.type;
            Q2.has(A) ? p = [...p, ...E] : p.push(E);
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
function K2(...t) {
  xd.push(...t);
}
function Ed(t, r) {
  for (let i = 0, s = xd.length; i < s; i += 1) {
    let o = xd[i];
    if (o.condition(t, r))
      return new o(t, r);
  }
  return new o0(t, r);
}
const du = {
  AND: "$and",
  OR: "$or"
}, Cd = {
  PATH: "$path",
  PATTERN: "$val"
}, wd = (t) => !!(t[du.AND] || t[du.OR]), W2 = (t) => !!t[Cd.PATH], eS = (t) => !Cr(t) && a0(t) && !wd(t), yv = (t) => ({
  [du.AND]: Object.keys(t).map((r) => ({
    [r]: t[r]
  }))
});
function f0(t, r, { auto: i = !0 } = {}) {
  const s = (o) => {
    let u = Object.keys(o);
    const f = W2(o);
    if (!f && u.length > 1 && !wd(o))
      return s(yv(o));
    if (eS(o)) {
      const h = f ? o[Cd.PATH] : u[0], y = f ? o[Cd.PATTERN] : o[h];
      if (!Wn(y))
        throw new Error(w2(h));
      const b = {
        keyId: _d(h),
        pattern: y
      };
      return i && (b.searcher = Ed(y, r)), b;
    }
    let p = {
      children: [],
      operator: u[0]
    };
    return u.forEach((h) => {
      const y = o[h];
      Cr(y) && y.forEach((b) => {
        p.children.push(s(b));
      });
    }), p;
  };
  return wd(t) || (t = yv(t)), s(t);
}
function tS(t, { ignoreFieldNorm: r = Ne.ignoreFieldNorm }) {
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
function nS(t, r) {
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
function rS(t, r) {
  r.score = t.score;
}
function aS(t, r, {
  includeMatches: i = Ne.includeMatches,
  includeScore: s = Ne.includeScore
} = {}) {
  const o = [];
  return i && o.push(nS), s && o.push(rS), t.map((u) => {
    const { idx: f } = u, p = {
      item: r[f],
      refIndex: f
    };
    return o.length && o.forEach((h) => {
      h(u, p);
    }), p;
  });
}
class Ii {
  constructor(r, i = {}, s) {
    this.options = { ...Ne, ...i }, this.options.useExtendedSearch, this._keyStore = new O2(this.options.keys), this.setCollection(r, s);
  }
  setCollection(r, i) {
    if (this._docs = r, i && !(i instanceof Yd))
      throw new Error(C2);
    this._myIndex = i || l0(this.options.keys, this._docs, {
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
    let h = Wn(r) ? Wn(this._docs[0]) ? this._searchStringList(r) : this._searchObjectList(r) : this._searchLogical(r);
    return tS(h, { ignoreFieldNorm: p }), u && h.sort(f), r0(i) && i > -1 && (h = h.slice(0, i)), aS(h, this._docs, {
      includeMatches: s,
      includeScore: o
    });
  }
  _searchStringList(r) {
    const i = Ed(r, this.options), { records: s } = this._myIndex, o = [];
    return s.forEach(({ v: u, i: f, n: p }) => {
      if (!gn(u))
        return;
      const { isMatch: h, score: y, indices: b } = i.searchIn(u);
      h && o.push({
        item: u,
        idx: f,
        matches: [{ score: y, value: u, norm: p, indices: b }]
      });
    }), o;
  }
  _searchLogical(r) {
    const i = f0(r, this.options), s = (p, h, y) => {
      if (!p.children) {
        const { keyId: _, searcher: m } = p, g = this._findMatches({
          key: this._keyStore.get(_),
          value: this._myIndex.getValueForItemAtKeyId(h, _),
          searcher: m
        });
        return g && g.length ? [
          {
            idx: y,
            item: h,
            matches: g
          }
        ] : [];
      }
      const b = [];
      for (let _ = 0, m = p.children.length; _ < m; _ += 1) {
        const g = p.children[_], d = s(g, h, y);
        if (d.length)
          b.push(...d);
        else if (p.operator === du.AND)
          return [];
      }
      return b;
    }, o = this._myIndex.records, u = {}, f = [];
    return o.forEach(({ $: p, i: h }) => {
      if (gn(p)) {
        let y = s(i, p, h);
        y.length && (u[h] || (u[h] = { idx: h, item: p, matches: [] }, f.push(u[h])), y.forEach(({ matches: b }) => {
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
      s.forEach((y, b) => {
        h.push(
          ...this._findMatches({
            key: y,
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
        const { isMatch: h, score: y, indices: b } = s.searchIn(u);
        h && o.push({
          score: y,
          key: r,
          value: u,
          idx: f,
          norm: p,
          indices: b
        });
      });
    else {
      const { v: u, n: f } = i, { isMatch: p, score: h, indices: y } = s.searchIn(u);
      p && o.push({ score: h, key: r, value: u, norm: f, indices: y });
    }
    return o;
  }
}
Ii.version = "7.1.0";
Ii.createIndex = l0;
Ii.parseIndex = P2;
Ii.config = Ne;
Ii.parseQuery = f0;
K2(J2);
var iS = Object.defineProperty, sS = (t, r, i) => r in t ? iS(t, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[r] = i, lS = (t, r, i) => sS(t, r + "", i);
let oS = class {
  constructor() {
    lS(this, "requestMap"), this.requestMap = /* @__PURE__ */ new Map();
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
        for await (const y of p())
          h = y, i != null && i.onEntry && await i.onEntry(u, y);
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
async function uS(t, ...r) {
  await SillyTavern.getContext().SlashCommandParser.commands[t].callback(...r);
}
async function Me(t, r, { escapeHtml: i = !0 } = {}) {
  await uS("echo", { severity: t, escapeHtml: (!!i).toString() }, r);
}
function Qf(t) {
  return U_(t);
}
function bv(t, r) {
  return I_(t, r);
}
function xo(t, r, i) {
  return B_(t, r, i);
}
function cS(t, r, i) {
  return G_(t, r, i);
}
function fS(t, r) {
  return V_(t, r);
}
function dS(t, {
  customStoryString: r,
  customInstructSettings: i
} = {}) {
  return P_(t, { customStoryString: r, customInstructSettings: i });
}
function wa(t) {
  return K_(t);
}
function hS() {
  return {
    prompt: Rs[zs.prompt],
    interval: Rs[zs.interval],
    position: Rs[zs.position],
    depth: Rs[zs.depth],
    role: Rs[zs.role]
  };
}
function pS(t, r) {
  return e2(t, r);
}
function mS({
  name2: t,
  charDescription: r,
  charPersonality: i,
  Scenario: s,
  worldInfoBefore: o,
  worldInfoAfter: u,
  bias: f,
  type: p,
  quietPrompt: h,
  quietImage: y,
  extensionPrompts: b,
  cyclePrompt: _,
  systemPromptOverride: m,
  jailbreakPromptOverride: g,
  personaDescription: d,
  messages: x,
  messageExamples: E
}, T) {
  return W_(
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
      quietImage: y,
      cyclePrompt: _,
      systemPromptOverride: m,
      jailbreakPromptOverride: g,
      personaDescription: d,
      extensionPrompts: b,
      messages: x,
      messageExamples: E
    },
    T
  );
}
function gS(t) {
  return X_(t);
}
function vS(t) {
  return $_(t);
}
function yS(t, r, {
  characterOverride: i,
  isMarkdown: s,
  isPrompt: o,
  isEdit: u,
  depth: f
}) {
  return t2(t, r, { characterOverride: i, isMarkdown: s, isPrompt: o, isEdit: u, depth: f });
}
async function bS(t, r) {
  return await Y_(t, r);
}
function _v(t, {
  wiFormat: r
} = {}) {
  return Q_(t, { wiFormat: r });
}
function Is(t) {
  return J_(t);
}
class _S {
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
var SS = Object.defineProperty, xS = (t, r, i) => r in t ? SS(t, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[r] = i, Eo = (t, r, i) => xS(t, typeof r != "symbol" ? r + "" : r, i);
class ES {
  constructor(r) {
    Eo(this, "messages", []), Eo(this, "tokenizer"), Eo(this, "maxContext"), Eo(this, "currentTokenCount", 0), this.tokenizer = new _S(), this.maxContext = r;
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
      const h = i[p], y = s[p];
      if (this.currentTokenCount + u + y <= this.maxContext)
        f.unshift(h), u += y;
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
async function d0(t, {
  targetCharacterId: r,
  presetName: i,
  instructName: s,
  contextName: o,
  syspromptName: u,
  maxContext: f,
  includeNames: p,
  ignoreCharacterFields: h,
  ignoreAuthorNote: y,
  ignoreWorldInfo: b,
  messageIndexesBetween: _
} = {}) {
  var m, g, d, x, E, T, A, M, C, N, D, k, q, V;
  if (!["textgenerationwebui", "openai"].includes(t))
    throw new Error("Unsupported API");
  const I = SillyTavern.getContext();
  let { description: G, personality: Y, persona: oe, scenario: fe, mesExamples: ve, system: U, jailbreak: re } = h ? {
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
  const de = t === "textgenerationwebui" ? (m = I.getPresetManager("instruct")) == null ? void 0 : m.getCompletionPresetByName(s) : void 0, Le = !!(de != null && de.enabled);
  let R = bv(ve, Le);
  function Q() {
    var ce, me;
    if (typeof f == "number")
      return f;
    if (!f || f === "active" || !i)
      return Qf();
    if (typeof f == "number")
      return f;
    let qe;
    if (t === "textgenerationwebui") {
      const Fe = (ce = I.getPresetManager("textgenerationwebui")) == null ? void 0 : ce.getCompletionPresetByName(i);
      qe = Fe?.max_length;
    } else {
      const Fe = (me = I.getPresetManager("openai")) == null ? void 0 : me.getCompletionPresetByName(i);
      qe = Fe?.openai_max_context;
    }
    return typeof qe == "number" ? qe : Qf();
  }
  let ae = [];
  const se = Q();
  if (se <= 0)
    return { result: [], warnings: ae };
  const le = new ES(se), je = I.ToolManager.isToolCallingSupported(), X = _?.start ?? 0, ye = _ != null && _.end ? _.end + 1 : void 0;
  let be = X === -1 && ye === 0 ? [] : I.chat.slice(X, ye).filter((ce) => {
    var me;
    return !ce.is_system || je && Array.isArray((me = ce.extra) == null ? void 0 : me.tool_invocations);
  });
  be = await Promise.all(
    be.map(async (ce, me) => {
      var qe, Fe;
      let Re = ce.mes, Dt = ce.is_user ? Wg.USER_INPUT : Wg.AI_OUTPUT, nr = { isPrompt: !0, depth: be.length - me - 1 }, pt = yS(Re, Dt, nr);
      return pt = await bS(ce, pt), (qe = ce?.extra) != null && qe.append_title && (Fe = ce?.extra) != null && Fe.title && (pt = `${pt}

${ce.extra.title}`), {
        ...ce,
        mes: pt,
        index: me
      };
    })
  );
  const Ge = be.map((ce) => F_ ? `${ce.name}: ${ce.mes}` : ce.mes).reverse(), { worldInfoString: tt, worldInfoBefore: ke, worldInfoAfter: ht, worldInfoExamples: zn, worldInfoDepth: P, anBefore: ne, anAfter: te } = b ? {
    worldInfoString: "",
    worldInfoBefore: "",
    worldInfoAfter: "",
    worldInfoExamples: [],
    worldInfoDepth: [],
    anBefore: [],
    anAfter: []
  } : await I.getWorldInfoPrompt(Ge, se, !1);
  for (const ce of zn) {
    const me = ce.content;
    if (me.length === 0)
      continue;
    const qe = xo(me, Sr, Qr), Fe = bv(qe, Le);
    ce.position === Z_.before ? R.unshift(...Fe) : R.push(...Fe);
  }
  function ue() {
    const ce = [];
    for (let me = be.length - 1; me >= 0; me--) {
      const qe = be[me], Fe = qe.name === "System" && !qe.is_user ? "system" : qe.is_user ? "user" : "assistant";
      ce.unshift({
        role: Fe,
        content: p && Fe != "system" ? `${qe.name}: ${qe.mes}` : qe.mes,
        source: qe
      });
    }
    le.addMany(ce);
  }
  if (t === "textgenerationwebui") {
    const ce = [...R];
    R && (R = cS(R, Sr, Qr));
    const me = (g = I.getPresetManager("sysprompt")) == null ? void 0 : g.getCompletionPresetByName(u);
    me && (U = I.powerUserSettings.prefer_character_prompt && U ? U : xo(me.content, Sr, Qr), U = Le ? fS(
      I.substituteParams(U, Sr, Qr, me.content),
      de
    ) : U);
    const qe = {
      description: G,
      personality: Y,
      persona: I.powerUserSettings.persona_description_position == Jg.IN_PROMPT ? oe : "",
      scenario: fe,
      system: U,
      char: Qr,
      user: Sr,
      wiBefore: ke,
      wiAfter: ht,
      loreBefore: ke,
      loreAfter: ht,
      mesExamples: R.join(""),
      mesExamplesRaw: ce.join("")
    }, Fe = (d = I.getPresetManager("context")) == null ? void 0 : d.getCompletionPresetByName(o);
    let Re = dS(qe, {
      customInstructSettings: de,
      customStoryString: Fe?.story_string
    });
    Re && le.add({ role: "system", content: Re, ignoreInstruct: !0 }), ue();
  } else {
    let ce = function(Ft) {
      const Xt = bn.find((Ia) => Ia.identifier === Ft);
      if (Xt)
        return Xt;
      const ul = Re.prompts.find((Ia) => Ia.identifier === Ft);
      if (ul)
        return ul;
    }, me = gS(be), qe = vS(R);
    async function Fe() {
      let [Ft, Xt] = await mS(
        {
          name2: Qr,
          charDescription: G,
          charPersonality: Y,
          Scenario: fe,
          worldInfoBefore: ke,
          worldInfoAfter: ht,
          extensionPrompts: I.extensionPrompts,
          bias: "",
          type: "normal",
          quietPrompt: void 0,
          quietImage: void 0,
          cyclePrompt: "",
          systemPromptOverride: U,
          jailbreakPromptOverride: re,
          personaDescription: oe,
          messages: me,
          messageExamples: qe
        },
        !1
      );
      le.addMany(Ft);
    }
    if (!i)
      return ae.push("No preset name provided. Using default preset."), await Fe(), { result: le.getMessages(), warnings: ae };
    const Re = (x = I.getPresetManager("openai")) == null ? void 0 : x.getCompletionPresetByName(i);
    if (!Re)
      return console.warn(`Preset not found: ${i}. Using current preset.`), ae.push(`Preset not found: ${i}. Using current preset.`), Fe(), { result: le.getMessages(), warnings: ae };
    let Dt = (E = Re.prompt_order) == null ? void 0 : E.find((Ft) => Ft.character_id === yn);
    if (!Dt && Re.prompt_order && Re.prompt_order.length > 0 && (Dt = Re.prompt_order[0]), !Dt)
      return console.warn(`No prompt order found for preset: ${i}. Using current preset.`), ae.push(`No prompt order found for preset: ${i}. Using current preset.`), Fe(), { result: le.getMessages(), warnings: ae };
    const nr = fe && Re.scenario_format ? I.substituteParams(Re.scenario_format) : "", pt = Y && Re.personality_format ? I.substituteParams(Re.personality_format) : "", Zn = I.substituteParams(Re.group_nudge_prompt), qt = Re.impersonation_prompt ? I.substituteParams(Re.impersonation_prompt) : "", bn = [];
    b || bn.push(
      {
        role: "system",
        content: _v(ke, { wiFormat: Re.wi_format }),
        identifier: "worldInfoBefore"
      },
      {
        role: "system",
        content: _v(ht, { wiFormat: Re.wi_format }),
        identifier: "worldInfoAfter"
      }
    ), h || bn.push(
      { role: "system", content: G, identifier: "charDescription" },
      { role: "system", content: pt, identifier: "charPersonality" },
      { role: "system", content: nr, identifier: "scenario" }
    ), bn.push(
      { role: "system", content: qt, identifier: "impersonate" },
      { role: "system", content: Zn, identifier: "groupNudge" }
    );
    const ia = I.extensionPrompts["1_memory"];
    ia && ia.value && bn.push({
      role: wa(ia.role),
      content: ia.value,
      identifier: "summary",
      position: Is(ia.position)
    });
    const sa = I.extensionPrompts["2_floating_prompt"];
    !y && sa && sa.value && bn.push({
      role: wa(sa.role),
      content: sa.value,
      identifier: "authorsNote",
      position: Is(sa.position)
    });
    const rr = I.extensionPrompts["3_vectors"];
    rr && rr.value && bn.push({
      role: "system",
      content: rr.value,
      identifier: "vectorsMemory",
      position: Is(rr.position)
    });
    const Gn = I.extensionPrompts["4_vectors_data_bank"];
    Gn && Gn.value && bn.push({
      role: wa(Gn.role),
      content: Gn.value,
      identifier: "vectorsDataBank",
      position: Is(Gn.position)
    });
    const _n = I.extensionPrompts.chromadb;
    _n && _n.value && bn.push({
      role: "system",
      content: _n.value,
      identifier: "smartContext",
      position: Is(_n.position)
    }), !h && I.powerUserSettings.persona_description && I.powerUserSettings.persona_description_position === Jg.IN_PROMPT && bn.push({
      role: "system",
      content: I.powerUserSettings.persona_description,
      identifier: "personaDescription"
    }), Dt.order.forEach((Ft) => {
      if (!Ft.enabled)
        return;
      const Xt = ce(Ft.identifier);
      if (Xt && Xt.content) {
        le.add({
          role: Xt.role ?? "system",
          content: I.substituteParams(Xt.content)
        });
        return;
      }
      Ft.identifier === "chatHistory" && ue();
    });
  }
  const Te = [
    "1_memory",
    "2_floating_prompt",
    "3_vectors",
    "4_vectors_data_bank",
    "chromadb",
    "PERSONA_DESCRIPTION",
    "QUIET_PROMPT",
    "DEPTH_PROMPT"
  ];
  for (const ce in I.extensionPrompts)
    if (Object.hasOwn(I.extensionPrompts, ce)) {
      const me = I.extensionPrompts[ce];
      if (Te.includes(ce) || !I.extensionPrompts[ce].value || ![Ca.BEFORE_PROMPT, Ca.IN_PROMPT].includes(me.position) || typeof me.filter == "function" && !await me.filter()) continue;
      const qe = {
        role: wa(me.role) ?? "system",
        content: me.value
      };
      if (me.position === Ca.BEFORE_PROMPT)
        le.insert(me.depth, qe);
      else if (me.position === Ca.IN_PROMPT) {
        const Fe = le.getMessages();
        le.insert(Fe.length - me.depth, qe);
      }
    }
  for (const ce of P) {
    const me = le.getMessages();
    le.insert(me.length - ce.depth, {
      role: wa(ce.role),
      content: ce.entries.join(`
`)
    });
  }
  if (!h) {
    const ce = pS(xr, Number(yn));
    if (xr && Array.isArray(ce) && ce.length > 0)
      ce.filter((me) => me.text).forEach((me, qe) => {
        const Fe = le.getMessages();
        le.insert(Fe.length - me.depth, { role: me.role, content: me.text });
      });
    else {
      const me = xo(
        (N = (C = (M = (A = (T = I.characters[yn]) == null ? void 0 : T.data) == null ? void 0 : A.extensions) == null ? void 0 : M.depth_prompt) == null ? void 0 : C.prompt) == null ? void 0 : N.trim(),
        Sr,
        Qr
      ) || "";
      if (me) {
        const qe = q_, Fe = ((V = (q = (k = (D = I.characters[yn]) == null ? void 0 : D.data) == null ? void 0 : k.extensions) == null ? void 0 : q.depth_prompt) == null ? void 0 : V.role) ?? H_, Re = le.getMessages();
        le.insert(Re.length - qe, {
          role: wa(Fe),
          content: me
        });
      }
    }
  }
  let Ee = -1;
  if (!y) {
    const ce = hS();
    if (ce.prompt) {
      ce.prompt = xo(ce.prompt, Sr, Qr);
      const me = { role: wa(ce.role), content: ce.prompt };
      switch (ce.position) {
        case Ca.IN_PROMPT:
          le.insert(1, me), Ee = 1;
          break;
        case Ca.IN_CHAT:
          Ee = le.getMessages().length - ce.depth, le.insert(Ee, me);
          break;
        case Ca.BEFORE_PROMPT:
          le.addFront(me), Ee = 0;
          break;
      }
    }
  }
  return Ee >= 0 && (ne.length > 0 && (le.insert(Ee, { role: "system", content: ne.join(`
`) }), Ee++), te.length > 0 && le.insert(Ee + 1, { role: "system", content: te.join(`
`) })), { result: le.getMessages(), warnings: ae };
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
function tr(t) {
  for (var r = 1; r < arguments.length; r++) {
    var i = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Sv(Object(i), !0).forEach(function(s) {
      CS(t, s, i[s]);
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
function CS(t, r, i) {
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
function wS(t, r) {
  if (t == null) return {};
  var i = {}, s = Object.keys(t), o, u;
  for (u = 0; u < s.length; u++)
    o = s[u], !(r.indexOf(o) >= 0) && (i[o] = t[o]);
  return i;
}
function AS(t, r) {
  if (t == null) return {};
  var i = wS(t, r), s, o;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);
    for (o = 0; o < u.length; o++)
      s = u[o], !(r.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(t, s) && (i[s] = t[s]);
  }
  return i;
}
var NS = "1.15.6";
function Er(t) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(t);
}
var Ar = Er(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), il = Er(/Edge/i), xv = Er(/firefox/i), Js = Er(/safari/i) && !Er(/chrome/i) && !Er(/android/i), Xd = Er(/iP(ad|od|hone)/i), h0 = Er(/chrome/i) && Er(/android/i), p0 = {
  capture: !1,
  passive: !1
};
function He(t, r, i) {
  t.addEventListener(r, i, !Ar && p0);
}
function Ue(t, r, i) {
  t.removeEventListener(r, i, !Ar && p0);
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
function m0(t) {
  return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
}
function Hn(t, r, i, s) {
  if (t) {
    i = i || document;
    do {
      if (r != null && (r[0] === ">" ? t.parentNode === i && hu(t, r) : hu(t, r)) || s && t === i)
        return t;
      if (t === i) break;
    } while (t = m0(t));
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
function we(t, r, i) {
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
      var s = we(t, "transform");
      s && s !== "none" && (i = s + " " + i);
    } while (!r && (t = t.parentNode));
  var o = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return o && new o(i);
}
function g0(t, r, i) {
  if (t) {
    var s = t.getElementsByTagName(r), o = 0, u = s.length;
    if (i)
      for (; o < u; o++)
        i(s[o], o);
    return s;
  }
  return [];
}
function er() {
  var t = document.scrollingElement;
  return t || document.documentElement;
}
function St(t, r, i, s, o) {
  if (!(!t.getBoundingClientRect && t !== window)) {
    var u, f, p, h, y, b, _;
    if (t !== window && t.parentNode && t !== er() ? (u = t.getBoundingClientRect(), f = u.top, p = u.left, h = u.bottom, y = u.right, b = u.height, _ = u.width) : (f = 0, p = 0, h = window.innerHeight, y = window.innerWidth, b = window.innerHeight, _ = window.innerWidth), (r || i) && t !== window && (o = o || t.parentNode, !Ar))
      do
        if (o && o.getBoundingClientRect && (we(o, "transform") !== "none" || i && we(o, "position") !== "static")) {
          var m = o.getBoundingClientRect();
          f -= m.top + parseInt(we(o, "border-top-width")), p -= m.left + parseInt(we(o, "border-left-width")), h = f + u.height, y = p + u.width;
          break;
        }
      while (o = o.parentNode);
    if (s && t !== window) {
      var g = Ri(o || t), d = g && g.a, x = g && g.d;
      g && (f /= x, p /= d, _ /= d, b /= x, h = f + b, y = p + _);
    }
    return {
      top: f,
      left: p,
      bottom: h,
      right: y,
      width: _,
      height: b
    };
  }
}
function Cv(t, r, i) {
  for (var s = ta(t, !0), o = St(t)[r]; s; ) {
    var u = St(s)[i], f = void 0;
    if (f = o >= u, !f) return s;
    if (s === er()) break;
    s = ta(s, !1);
  }
  return !1;
}
function Pi(t, r, i, s) {
  for (var o = 0, u = 0, f = t.children; u < f.length; ) {
    if (f[u].style.display !== "none" && f[u] !== Ae.ghost && (s || f[u] !== Ae.dragged) && Hn(f[u], i.draggable, t, !1)) {
      if (o === r)
        return f[u];
      o++;
    }
    u++;
  }
  return null;
}
function $d(t, r) {
  for (var i = t.lastElementChild; i && (i === Ae.ghost || we(i, "display") === "none" || r && !hu(i, r)); )
    i = i.previousElementSibling;
  return i || null;
}
function Dn(t, r) {
  var i = 0;
  if (!t || !t.parentNode)
    return -1;
  for (; t = t.previousElementSibling; )
    t.nodeName.toUpperCase() !== "TEMPLATE" && t !== Ae.clone && (!r || hu(t, r)) && i++;
  return i;
}
function wv(t) {
  var r = 0, i = 0, s = er();
  if (t)
    do {
      var o = Ri(t), u = o.a, f = o.d;
      r += t.scrollLeft * u, i += t.scrollTop * f;
    } while (t !== s && (t = t.parentNode));
  return [r, i];
}
function TS(t, r) {
  for (var i in t)
    if (t.hasOwnProperty(i)) {
      for (var s in r)
        if (r.hasOwnProperty(s) && r[s] === t[i][s]) return Number(i);
    }
  return -1;
}
function ta(t, r) {
  if (!t || !t.getBoundingClientRect) return er();
  var i = t, s = !1;
  do
    if (i.clientWidth < i.scrollWidth || i.clientHeight < i.scrollHeight) {
      var o = we(i);
      if (i.clientWidth < i.scrollWidth && (o.overflowX == "auto" || o.overflowX == "scroll") || i.clientHeight < i.scrollHeight && (o.overflowY == "auto" || o.overflowY == "scroll")) {
        if (!i.getBoundingClientRect || i === document.body) return er();
        if (s || r) return i;
        s = !0;
      }
    }
  while (i = i.parentNode);
  return er();
}
function OS(t, r) {
  if (t && r)
    for (var i in r)
      r.hasOwnProperty(i) && (t[i] = r[i]);
  return t;
}
function Jf(t, r) {
  return Math.round(t.top) === Math.round(r.top) && Math.round(t.left) === Math.round(r.left) && Math.round(t.height) === Math.round(r.height) && Math.round(t.width) === Math.round(r.width);
}
var Ks;
function v0(t, r) {
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
function y0(t, r, i) {
  t.scrollLeft += r, t.scrollTop += i;
}
function b0(t) {
  var r = window.Polymer, i = window.jQuery || window.Zepto;
  return r && r.dom ? r.dom(t).cloneNode(!0) : i ? i(t).clone(!0)[0] : t.cloneNode(!0);
}
function _0(t, r, i) {
  var s = {};
  return Array.from(t.children).forEach(function(o) {
    var u, f, p, h;
    if (!(!Hn(o, r.draggable, t, !1) || o.animated || o === i)) {
      var y = St(o);
      s.left = Math.min((u = s.left) !== null && u !== void 0 ? u : 1 / 0, y.left), s.top = Math.min((f = s.top) !== null && f !== void 0 ? f : 1 / 0, y.top), s.right = Math.max((p = s.right) !== null && p !== void 0 ? p : -1 / 0, y.right), s.bottom = Math.max((h = s.bottom) !== null && h !== void 0 ? h : -1 / 0, y.bottom);
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
          if (!(we(o, "display") === "none" || o === Ae.ghost)) {
            t.push({
              target: o,
              rect: St(o)
            });
            var u = tr({}, t[t.length - 1].rect);
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
      t.splice(TS(t, {
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
        var h = 0, y = p.target, b = y.fromRect, _ = St(y), m = y.prevFromRect, g = y.prevToRect, d = p.rect, x = Ri(y, !0);
        x && (_.top -= x.f, _.left -= x.e), y.toRect = _, y.thisAnimationDuration && Jf(m, _) && !Jf(b, _) && // Make sure animatingRect is on line between toRect & fromRect
        (d.top - _.top) / (d.left - _.left) === (b.top - _.top) / (b.left - _.left) && (h = jS(d, m, g, o.options)), Jf(_, b) || (y.prevFromRect = b, y.prevToRect = _, h || (h = o.options.animation), o.animate(y, d, _, h)), h && (u = !0, f = Math.max(f, h), clearTimeout(y.animationResetTimer), y.animationResetTimer = setTimeout(function() {
          y.animationTime = 0, y.prevFromRect = null, y.fromRect = null, y.prevToRect = null, y.thisAnimationDuration = null;
        }, h), y.thisAnimationDuration = h);
      }), clearTimeout(r), u ? r = setTimeout(function() {
        typeof s == "function" && s();
      }, f) : typeof s == "function" && s(), t = [];
    },
    animate: function(s, o, u, f) {
      if (f) {
        we(s, "transition", ""), we(s, "transform", "");
        var p = Ri(this.el), h = p && p.a, y = p && p.d, b = (o.left - u.left) / (h || 1), _ = (o.top - u.top) / (y || 1);
        s.animatingX = !!b, s.animatingY = !!_, we(s, "transform", "translate3d(" + b + "px," + _ + "px,0)"), this.forRepaintDummy = kS(s), we(s, "transition", "transform " + f + "ms" + (this.options.easing ? " " + this.options.easing : "")), we(s, "transform", "translate3d(0,0,0)"), typeof s.animated == "number" && clearTimeout(s.animated), s.animated = setTimeout(function() {
          we(s, "transition", ""), we(s, "transform", ""), s.animated = !1, s.animatingX = !1, s.animatingY = !1;
        }, f);
      }
    }
  };
}
function kS(t) {
  return t.offsetWidth;
}
function jS(t, r, i, s) {
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
      i[f.pluginName] && (i[f.pluginName][u] && i[f.pluginName][u](tr({
        sortable: i
      }, s)), i.options[f.pluginName] && i[f.pluginName][r] && i[f.pluginName][r](tr({
        sortable: i
      }, s)));
    });
  },
  initializePlugins: function(r, i, s, o) {
    wi.forEach(function(p) {
      var h = p.pluginName;
      if (!(!r.options[h] && !p.initializeByDefault)) {
        var y = new p(r, i, r.options);
        y.sortable = r, y.options = r.options, r[h] = y, wr(s, y.defaults);
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
function RS(t) {
  var r = t.sortable, i = t.rootEl, s = t.name, o = t.targetEl, u = t.cloneEl, f = t.toEl, p = t.fromEl, h = t.oldIndex, y = t.newIndex, b = t.oldDraggableIndex, _ = t.newDraggableIndex, m = t.originalEvent, g = t.putSortable, d = t.extraEventProperties;
  if (r = r || i && i[nn], !!r) {
    var x, E = r.options, T = "on" + s.charAt(0).toUpperCase() + s.substr(1);
    window.CustomEvent && !Ar && !il ? x = new CustomEvent(s, {
      bubbles: !0,
      cancelable: !0
    }) : (x = document.createEvent("Event"), x.initEvent(s, !0, !0)), x.to = f || i, x.from = p || i, x.item = o || i, x.clone = u, x.oldIndex = h, x.newIndex = y, x.oldDraggableIndex = b, x.newDraggableIndex = _, x.originalEvent = m, x.pullMode = g ? g.lastPutMode : void 0;
    var A = tr(tr({}, d), sl.getEventProperties(s, r));
    for (var M in A)
      x[M] = A[M];
    i && i.dispatchEvent(x), E[T] && E[T].call(r, x);
  }
}
var zS = ["evt"], en = function(r, i) {
  var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = s.evt, u = AS(s, zS);
  sl.pluginEvent.bind(Ae)(r, i, tr({
    dragEl: ie,
    parentEl: dt,
    ghostEl: Oe,
    rootEl: it,
    nextEl: Ta,
    lastDownEl: su,
    cloneEl: ot,
    cloneHidden: ea,
    dragStarted: Ys,
    putSortable: zt,
    activeSortable: Ae.active,
    originalEvent: o,
    oldIndex: ki,
    oldDraggableIndex: Ws,
    newIndex: mn,
    newDraggableIndex: Wr,
    hideGhostForTarget: C0,
    unhideGhostForTarget: w0,
    cloneNowHidden: function() {
      ea = !0;
    },
    cloneNowShown: function() {
      ea = !1;
    },
    dispatchSortableEvent: function(p) {
      Gt({
        sortable: i,
        name: p,
        originalEvent: o
      });
    }
  }, u));
};
function Gt(t) {
  RS(tr({
    putSortable: zt,
    cloneEl: ot,
    targetEl: ie,
    rootEl: it,
    oldIndex: ki,
    oldDraggableIndex: Ws,
    newIndex: mn,
    newDraggableIndex: Wr
  }, t));
}
var ie, dt, Oe, it, Ta, su, ot, ea, ki, mn, Ws, Wr, Co, zt, Di = !1, pu = !1, mu = [], Aa, Bn, Wf, ed, Av, Nv, Ys, Ai, el, tl = !1, wo = !1, lu, Ht, td = [], Ad = !1, gu = [], wu = typeof document < "u", Ao = Xd, Tv = il || Ar ? "cssFloat" : "float", LS = wu && !h0 && !Xd && "draggable" in document.createElement("div"), S0 = (function() {
  if (wu) {
    if (Ar)
      return !1;
    var t = document.createElement("x");
    return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto";
  }
})(), x0 = function(r, i) {
  var s = we(r), o = parseInt(s.width) - parseInt(s.paddingLeft) - parseInt(s.paddingRight) - parseInt(s.borderLeftWidth) - parseInt(s.borderRightWidth), u = Pi(r, 0, i), f = Pi(r, 1, i), p = u && we(u), h = f && we(f), y = p && parseInt(p.marginLeft) + parseInt(p.marginRight) + St(u).width, b = h && parseInt(h.marginLeft) + parseInt(h.marginRight) + St(f).width;
  if (s.display === "flex")
    return s.flexDirection === "column" || s.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (s.display === "grid")
    return s.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (u && p.float && p.float !== "none") {
    var _ = p.float === "left" ? "left" : "right";
    return f && (h.clear === "both" || h.clear === _) ? "vertical" : "horizontal";
  }
  return u && (p.display === "block" || p.display === "flex" || p.display === "table" || p.display === "grid" || y >= o && s[Tv] === "none" || f && s[Tv] === "none" && y + b > o) ? "vertical" : "horizontal";
}, PS = function(r, i, s) {
  var o = s ? r.left : r.top, u = s ? r.right : r.bottom, f = s ? r.width : r.height, p = s ? i.left : i.top, h = s ? i.right : i.bottom, y = s ? i.width : i.height;
  return o === p || u === h || o + f / 2 === p + y / 2;
}, IS = function(r, i) {
  var s;
  return mu.some(function(o) {
    var u = o[nn].options.emptyInsertThreshold;
    if (!(!u || $d(o))) {
      var f = St(o), p = r >= f.left - u && r <= f.right + u, h = i >= f.top - u && i <= f.bottom + u;
      if (p && h)
        return s = o;
    }
  }), s;
}, E0 = function(r) {
  function i(u, f) {
    return function(p, h, y, b) {
      var _ = p.options.group.name && h.options.group.name && p.options.group.name === h.options.group.name;
      if (u == null && (f || _))
        return !0;
      if (u == null || u === !1)
        return !1;
      if (f && u === "clone")
        return u;
      if (typeof u == "function")
        return i(u(p, h, y, b), f)(p, h, y, b);
      var m = (f ? p : h).options.group.name;
      return u === !0 || typeof u == "string" && u === m || u.join && u.indexOf(m) > -1;
    };
  }
  var s = {}, o = r.group;
  (!o || iu(o) != "object") && (o = {
    name: o
  }), s.name = o.name, s.checkPull = i(o.pull, !0), s.checkPut = i(o.put), s.revertClone = o.revertClone, r.group = s;
}, C0 = function() {
  !S0 && Oe && we(Oe, "display", "none");
}, w0 = function() {
  !S0 && Oe && we(Oe, "display", "");
};
wu && !h0 && document.addEventListener("click", function(t) {
  if (pu)
    return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), pu = !1, !1;
}, !0);
var Na = function(r) {
  if (ie) {
    r = r.touches ? r.touches[0] : r;
    var i = IS(r.clientX, r.clientY);
    if (i) {
      var s = {};
      for (var o in r)
        r.hasOwnProperty(o) && (s[o] = r[o]);
      s.target = s.rootEl = i, s.preventDefault = void 0, s.stopPropagation = void 0, i[nn]._onDragOver(s);
    }
  }
}, BS = function(r) {
  ie && ie.parentNode[nn]._isOutsideThisEl(r.target);
};
function Ae(t, r) {
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
      return x0(t, this.options);
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
    supportPointer: Ae.supportPointer !== !1 && "PointerEvent" in window && (!Js || Xd),
    emptyInsertThreshold: 5
  };
  sl.initializePlugins(this, t, i);
  for (var s in i)
    !(s in r) && (r[s] = i[s]);
  E0(r);
  for (var o in this)
    o.charAt(0) === "_" && typeof this[o] == "function" && (this[o] = this[o].bind(this));
  this.nativeDraggable = r.forceFallback ? !1 : LS, this.nativeDraggable && (this.options.touchStartThreshold = 1), r.supportPointer ? He(t, "pointerdown", this._onTapStart) : (He(t, "mousedown", this._onTapStart), He(t, "touchstart", this._onTapStart)), this.nativeDraggable && (He(t, "dragover", this), He(t, "dragenter", this)), mu.push(this.el), r.store && r.store.get && this.sort(r.store.get(this) || []), wr(this, DS());
}
Ae.prototype = /** @lends Sortable.prototype */
{
  constructor: Ae,
  _isOutsideThisEl: function(r) {
    !this.el.contains(r) && r !== this.el && (Ai = null);
  },
  _getDirection: function(r, i) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, r, i, ie) : this.options.direction;
  },
  _onTapStart: function(r) {
    if (r.cancelable) {
      var i = this, s = this.el, o = this.options, u = o.preventOnFilter, f = r.type, p = r.touches && r.touches[0] || r.pointerType && r.pointerType === "touch" && r, h = (p || r).target, y = r.target.shadowRoot && (r.path && r.path[0] || r.composedPath && r.composedPath()[0]) || h, b = o.filter;
      if (YS(s), !ie && !(/mousedown|pointerdown/.test(f) && r.button !== 0 || o.disabled) && !y.isContentEditable && !(!this.nativeDraggable && Js && h && h.tagName.toUpperCase() === "SELECT") && (h = Hn(h, o.draggable, s, !1), !(h && h.animated) && su !== h)) {
        if (ki = Dn(h), Ws = Dn(h, o.draggable), typeof b == "function") {
          if (b.call(this, r, h, this)) {
            Gt({
              sortable: i,
              rootEl: y,
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
          if (_ = Hn(y, _.trim(), s, !1), _)
            return Gt({
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
        o.handle && !Hn(y, o.handle, s, !1) || this._prepareDragStart(r, p, h);
      }
    }
  },
  _prepareDragStart: function(r, i, s) {
    var o = this, u = o.el, f = o.options, p = u.ownerDocument, h;
    if (s && !ie && s.parentNode === u) {
      var y = St(s);
      if (it = u, ie = s, dt = ie.parentNode, Ta = ie.nextSibling, su = s, Co = f.group, Ae.dragged = ie, Aa = {
        target: ie,
        clientX: (i || r).clientX,
        clientY: (i || r).clientY
      }, Av = Aa.clientX - y.left, Nv = Aa.clientY - y.top, this._lastX = (i || r).clientX, this._lastY = (i || r).clientY, ie.style["will-change"] = "all", h = function() {
        if (en("delayEnded", o, {
          evt: r
        }), Ae.eventCanceled) {
          o._onDrop();
          return;
        }
        o._disableDelayedDragEvents(), !xv && o.nativeDraggable && (ie.draggable = !0), o._triggerDragStart(r, i), Gt({
          sortable: o,
          name: "choose",
          originalEvent: r
        }), pn(ie, f.chosenClass, !0);
      }, f.ignore.split(",").forEach(function(b) {
        g0(ie, b.trim(), nd);
      }), He(p, "dragover", Na), He(p, "mousemove", Na), He(p, "touchmove", Na), f.supportPointer ? (He(p, "pointerup", o._onDrop), !this.nativeDraggable && He(p, "pointercancel", o._onDrop)) : (He(p, "mouseup", o._onDrop), He(p, "touchend", o._onDrop), He(p, "touchcancel", o._onDrop)), xv && this.nativeDraggable && (this.options.touchStartThreshold = 4, ie.draggable = !0), en("delayStart", this, {
        evt: r
      }), f.delay && (!f.delayOnTouchOnly || i) && (!this.nativeDraggable || !(il || Ar))) {
        if (Ae.eventCanceled) {
          this._onDrop();
          return;
        }
        f.supportPointer ? (He(p, "pointerup", o._disableDelayedDrag), He(p, "pointercancel", o._disableDelayedDrag)) : (He(p, "mouseup", o._disableDelayedDrag), He(p, "touchend", o._disableDelayedDrag), He(p, "touchcancel", o._disableDelayedDrag)), He(p, "mousemove", o._delayedDragTouchMoveHandler), He(p, "touchmove", o._delayedDragTouchMoveHandler), f.supportPointer && He(p, "pointermove", o._delayedDragTouchMoveHandler), o._dragStartTimer = setTimeout(h, f.delay);
      } else
        h();
    }
  },
  _delayedDragTouchMoveHandler: function(r) {
    var i = r.touches ? r.touches[0] : r;
    Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    ie && nd(ie), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var r = this.el.ownerDocument;
    Ue(r, "mouseup", this._disableDelayedDrag), Ue(r, "touchend", this._disableDelayedDrag), Ue(r, "touchcancel", this._disableDelayedDrag), Ue(r, "pointerup", this._disableDelayedDrag), Ue(r, "pointercancel", this._disableDelayedDrag), Ue(r, "mousemove", this._delayedDragTouchMoveHandler), Ue(r, "touchmove", this._delayedDragTouchMoveHandler), Ue(r, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(r, i) {
    i = i || r.pointerType == "touch" && r, !this.nativeDraggable || i ? this.options.supportPointer ? He(document, "pointermove", this._onTouchMove) : i ? He(document, "touchmove", this._onTouchMove) : He(document, "mousemove", this._onTouchMove) : (He(ie, "dragend", this), He(it, "dragstart", this._onDragStart));
    try {
      document.selection ? ou(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(r, i) {
    if (Di = !1, it && ie) {
      en("dragStarted", this, {
        evt: i
      }), this.nativeDraggable && He(document, "dragover", BS);
      var s = this.options;
      !r && pn(ie, s.dragClass, !1), pn(ie, s.ghostClass, !0), Ae.active = this, r && this._appendGhost(), Gt({
        sortable: this,
        name: "start",
        originalEvent: i
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Bn) {
      this._lastX = Bn.clientX, this._lastY = Bn.clientY, C0();
      for (var r = document.elementFromPoint(Bn.clientX, Bn.clientY), i = r; r && r.shadowRoot && (r = r.shadowRoot.elementFromPoint(Bn.clientX, Bn.clientY), r !== i); )
        i = r;
      if (ie.parentNode[nn]._isOutsideThisEl(r), i)
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
        } while (i = m0(i));
      w0();
    }
  },
  _onTouchMove: function(r) {
    if (Aa) {
      var i = this.options, s = i.fallbackTolerance, o = i.fallbackOffset, u = r.touches ? r.touches[0] : r, f = Oe && Ri(Oe, !0), p = Oe && f && f.a, h = Oe && f && f.d, y = Ao && Ht && wv(Ht), b = (u.clientX - Aa.clientX + o.x) / (p || 1) + (y ? y[0] - td[0] : 0) / (p || 1), _ = (u.clientY - Aa.clientY + o.y) / (h || 1) + (y ? y[1] - td[1] : 0) / (h || 1);
      if (!Ae.active && !Di) {
        if (s && Math.max(Math.abs(u.clientX - this._lastX), Math.abs(u.clientY - this._lastY)) < s)
          return;
        this._onDragStart(r, !0);
      }
      if (Oe) {
        f ? (f.e += b - (Wf || 0), f.f += _ - (ed || 0)) : f = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: b,
          f: _
        };
        var m = "matrix(".concat(f.a, ",").concat(f.b, ",").concat(f.c, ",").concat(f.d, ",").concat(f.e, ",").concat(f.f, ")");
        we(Oe, "webkitTransform", m), we(Oe, "mozTransform", m), we(Oe, "msTransform", m), we(Oe, "transform", m), Wf = b, ed = _, Bn = u;
      }
      r.cancelable && r.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!Oe) {
      var r = this.options.fallbackOnBody ? document.body : it, i = St(ie, !0, Ao, !0, r), s = this.options;
      if (Ao) {
        for (Ht = r; we(Ht, "position") === "static" && we(Ht, "transform") === "none" && Ht !== document; )
          Ht = Ht.parentNode;
        Ht !== document.body && Ht !== document.documentElement ? (Ht === document && (Ht = er()), i.top += Ht.scrollTop, i.left += Ht.scrollLeft) : Ht = er(), td = wv(Ht);
      }
      Oe = ie.cloneNode(!0), pn(Oe, s.ghostClass, !1), pn(Oe, s.fallbackClass, !0), pn(Oe, s.dragClass, !0), we(Oe, "transition", ""), we(Oe, "transform", ""), we(Oe, "box-sizing", "border-box"), we(Oe, "margin", 0), we(Oe, "top", i.top), we(Oe, "left", i.left), we(Oe, "width", i.width), we(Oe, "height", i.height), we(Oe, "opacity", "0.8"), we(Oe, "position", Ao ? "absolute" : "fixed"), we(Oe, "zIndex", "100000"), we(Oe, "pointerEvents", "none"), Ae.ghost = Oe, r.appendChild(Oe), we(Oe, "transform-origin", Av / parseInt(Oe.style.width) * 100 + "% " + Nv / parseInt(Oe.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(r, i) {
    var s = this, o = r.dataTransfer, u = s.options;
    if (en("dragStart", this, {
      evt: r
    }), Ae.eventCanceled) {
      this._onDrop();
      return;
    }
    en("setupClone", this), Ae.eventCanceled || (ot = b0(ie), ot.removeAttribute("id"), ot.draggable = !1, ot.style["will-change"] = "", this._hideClone(), pn(ot, this.options.chosenClass, !1), Ae.clone = ot), s.cloneId = ou(function() {
      en("clone", s), !Ae.eventCanceled && (s.options.removeCloneOnHide || it.insertBefore(ot, ie), s._hideClone(), Gt({
        sortable: s,
        name: "clone"
      }));
    }), !i && pn(ie, u.dragClass, !0), i ? (pu = !0, s._loopId = setInterval(s._emulateDragOver, 50)) : (Ue(document, "mouseup", s._onDrop), Ue(document, "touchend", s._onDrop), Ue(document, "touchcancel", s._onDrop), o && (o.effectAllowed = "move", u.setData && u.setData.call(s, o, ie)), He(document, "drop", s), we(ie, "transform", "translateZ(0)")), Di = !0, s._dragStartId = ou(s._dragStarted.bind(s, i, r)), He(document, "selectstart", s), Ys = !0, window.getSelection().removeAllRanges(), Js && we(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(r) {
    var i = this.el, s = r.target, o, u, f, p = this.options, h = p.group, y = Ae.active, b = Co === h, _ = p.sort, m = zt || y, g, d = this, x = !1;
    if (Ad) return;
    function E(de, Le) {
      en(de, d, tr({
        evt: r,
        isOwner: b,
        axis: g ? "vertical" : "horizontal",
        revert: f,
        dragRect: o,
        targetRect: u,
        canSort: _,
        fromSortable: m,
        target: s,
        completed: A,
        onMove: function(Q, ae) {
          return No(it, i, ie, o, Q, St(Q), r, ae);
        },
        changed: M
      }, Le));
    }
    function T() {
      E("dragOverAnimationCapture"), d.captureAnimationState(), d !== m && m.captureAnimationState();
    }
    function A(de) {
      return E("dragOverCompleted", {
        insertion: de
      }), de && (b ? y._hideClone() : y._showClone(d), d !== m && (pn(ie, zt ? zt.options.ghostClass : y.options.ghostClass, !1), pn(ie, p.ghostClass, !0)), zt !== d && d !== Ae.active ? zt = d : d === Ae.active && zt && (zt = null), m === d && (d._ignoreWhileAnimating = s), d.animateAll(function() {
        E("dragOverAnimationComplete"), d._ignoreWhileAnimating = null;
      }), d !== m && (m.animateAll(), m._ignoreWhileAnimating = null)), (s === ie && !ie.animated || s === i && !s.animated) && (Ai = null), !p.dragoverBubble && !r.rootEl && s !== document && (ie.parentNode[nn]._isOutsideThisEl(r.target), !de && Na(r)), !p.dragoverBubble && r.stopPropagation && r.stopPropagation(), x = !0;
    }
    function M() {
      mn = Dn(ie), Wr = Dn(ie, p.draggable), Gt({
        sortable: d,
        name: "change",
        toEl: i,
        newIndex: mn,
        newDraggableIndex: Wr,
        originalEvent: r
      });
    }
    if (r.preventDefault !== void 0 && r.cancelable && r.preventDefault(), s = Hn(s, p.draggable, i, !0), E("dragOver"), Ae.eventCanceled) return x;
    if (ie.contains(r.target) || s.animated && s.animatingX && s.animatingY || d._ignoreWhileAnimating === s)
      return A(!1);
    if (pu = !1, y && !p.disabled && (b ? _ || (f = dt !== it) : zt === this || (this.lastPutMode = Co.checkPull(this, y, ie, r)) && h.checkPut(this, y, ie, r))) {
      if (g = this._getDirection(r, s) === "vertical", o = St(ie), E("dragOverValid"), Ae.eventCanceled) return x;
      if (f)
        return dt = it, T(), this._hideClone(), E("revert"), Ae.eventCanceled || (Ta ? it.insertBefore(ie, Ta) : it.appendChild(ie)), A(!0);
      var C = $d(i, p.draggable);
      if (!C || FS(r, g, this) && !C.animated) {
        if (C === ie)
          return A(!1);
        if (C && i === r.target && (s = C), s && (u = St(s)), No(it, i, ie, o, s, u, r, !!s) !== !1)
          return T(), C && C.nextSibling ? i.insertBefore(ie, C.nextSibling) : i.appendChild(ie), dt = i, M(), A(!0);
      } else if (C && qS(r, g, this)) {
        var N = Pi(i, 0, p, !0);
        if (N === ie)
          return A(!1);
        if (s = N, u = St(s), No(it, i, ie, o, s, u, r, !1) !== !1)
          return T(), i.insertBefore(ie, N), dt = i, M(), A(!0);
      } else if (s.parentNode === i) {
        u = St(s);
        var D = 0, k, q = ie.parentNode !== i, V = !PS(ie.animated && ie.toRect || o, s.animated && s.toRect || u, g), I = g ? "top" : "left", G = Cv(s, "top", "top") || Cv(ie, "top", "top"), Y = G ? G.scrollTop : void 0;
        Ai !== s && (k = u[I], tl = !1, wo = !V && p.invertSwap || q), D = ZS(r, s, u, g, V ? 1 : p.swapThreshold, p.invertedSwapThreshold == null ? p.swapThreshold : p.invertedSwapThreshold, wo, Ai === s);
        var oe;
        if (D !== 0) {
          var fe = Dn(ie);
          do
            fe -= D, oe = dt.children[fe];
          while (oe && (we(oe, "display") === "none" || oe === Oe));
        }
        if (D === 0 || oe === s)
          return A(!1);
        Ai = s, el = D;
        var ve = s.nextElementSibling, U = !1;
        U = D === 1;
        var re = No(it, i, ie, o, s, u, r, U);
        if (re !== !1)
          return (re === 1 || re === -1) && (U = re === 1), Ad = !0, setTimeout(HS, 30), T(), U && !ve ? i.appendChild(ie) : s.parentNode.insertBefore(ie, U ? ve : s), G && y0(G, 0, Y - G.scrollTop), dt = ie.parentNode, k !== void 0 && !wo && (lu = Math.abs(k - St(s)[I])), M(), A(!0);
      }
      if (i.contains(ie))
        return A(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    Ue(document, "mousemove", this._onTouchMove), Ue(document, "touchmove", this._onTouchMove), Ue(document, "pointermove", this._onTouchMove), Ue(document, "dragover", Na), Ue(document, "mousemove", Na), Ue(document, "touchmove", Na);
  },
  _offUpEvents: function() {
    var r = this.el.ownerDocument;
    Ue(r, "mouseup", this._onDrop), Ue(r, "touchend", this._onDrop), Ue(r, "pointerup", this._onDrop), Ue(r, "pointercancel", this._onDrop), Ue(r, "touchcancel", this._onDrop), Ue(document, "selectstart", this);
  },
  _onDrop: function(r) {
    var i = this.el, s = this.options;
    if (mn = Dn(ie), Wr = Dn(ie, s.draggable), en("drop", this, {
      evt: r
    }), dt = ie && ie.parentNode, mn = Dn(ie), Wr = Dn(ie, s.draggable), Ae.eventCanceled) {
      this._nulling();
      return;
    }
    Di = !1, wo = !1, tl = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Nd(this.cloneId), Nd(this._dragStartId), this.nativeDraggable && (Ue(document, "drop", this), Ue(i, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Js && we(document.body, "user-select", ""), we(ie, "transform", ""), r && (Ys && (r.cancelable && r.preventDefault(), !s.dropBubble && r.stopPropagation()), Oe && Oe.parentNode && Oe.parentNode.removeChild(Oe), (it === dt || zt && zt.lastPutMode !== "clone") && ot && ot.parentNode && ot.parentNode.removeChild(ot), ie && (this.nativeDraggable && Ue(ie, "dragend", this), nd(ie), ie.style["will-change"] = "", Ys && !Di && pn(ie, zt ? zt.options.ghostClass : this.options.ghostClass, !1), pn(ie, this.options.chosenClass, !1), Gt({
      sortable: this,
      name: "unchoose",
      toEl: dt,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: r
    }), it !== dt ? (mn >= 0 && (Gt({
      rootEl: dt,
      name: "add",
      toEl: dt,
      fromEl: it,
      originalEvent: r
    }), Gt({
      sortable: this,
      name: "remove",
      toEl: dt,
      originalEvent: r
    }), Gt({
      rootEl: dt,
      name: "sort",
      toEl: dt,
      fromEl: it,
      originalEvent: r
    }), Gt({
      sortable: this,
      name: "sort",
      toEl: dt,
      originalEvent: r
    })), zt && zt.save()) : mn !== ki && mn >= 0 && (Gt({
      sortable: this,
      name: "update",
      toEl: dt,
      originalEvent: r
    }), Gt({
      sortable: this,
      name: "sort",
      toEl: dt,
      originalEvent: r
    })), Ae.active && ((mn == null || mn === -1) && (mn = ki, Wr = Ws), Gt({
      sortable: this,
      name: "end",
      toEl: dt,
      originalEvent: r
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    en("nulling", this), it = ie = dt = Oe = Ta = ot = su = ea = Aa = Bn = Ys = mn = Wr = ki = Ws = Ai = el = zt = Co = Ae.dragged = Ae.ghost = Ae.clone = Ae.active = null, gu.forEach(function(r) {
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
        ie && (this._onDragOver(r), US(r));
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
      i = s[o], Hn(i, f.draggable, this.el, !1) && r.push(i.getAttribute(f.dataIdAttr) || VS(i));
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
    typeof o < "u" ? s[r] = o : s[r] = i, r === "group" && E0(s);
  },
  /**
   * Destroy
   */
  destroy: function() {
    en("destroy", this);
    var r = this.el;
    r[nn] = null, Ue(r, "mousedown", this._onTapStart), Ue(r, "touchstart", this._onTapStart), Ue(r, "pointerdown", this._onTapStart), this.nativeDraggable && (Ue(r, "dragover", this), Ue(r, "dragenter", this)), Array.prototype.forEach.call(r.querySelectorAll("[draggable]"), function(i) {
      i.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), mu.splice(mu.indexOf(this.el), 1), this.el = r = null;
  },
  _hideClone: function() {
    if (!ea) {
      if (en("hideClone", this), Ae.eventCanceled) return;
      we(ot, "display", "none"), this.options.removeCloneOnHide && ot.parentNode && ot.parentNode.removeChild(ot), ea = !0;
    }
  },
  _showClone: function(r) {
    if (r.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (ea) {
      if (en("showClone", this), Ae.eventCanceled) return;
      ie.parentNode == it && !this.options.group.revertClone ? it.insertBefore(ot, ie) : Ta ? it.insertBefore(ot, Ta) : it.appendChild(ot), this.options.group.revertClone && this.animate(ie, ot), we(ot, "display", ""), ea = !1;
    }
  }
};
function US(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
}
function No(t, r, i, s, o, u, f, p) {
  var h, y = t[nn], b = y.options.onMove, _;
  return window.CustomEvent && !Ar && !il ? h = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (h = document.createEvent("Event"), h.initEvent("move", !0, !0)), h.to = r, h.from = t, h.dragged = i, h.draggedRect = s, h.related = o || r, h.relatedRect = u || St(r), h.willInsertAfter = p, h.originalEvent = f, t.dispatchEvent(h), b && (_ = b.call(y, h, f)), _;
}
function nd(t) {
  t.draggable = !1;
}
function HS() {
  Ad = !1;
}
function qS(t, r, i) {
  var s = St(Pi(i.el, 0, i.options, !0)), o = _0(i.el, i.options, Oe), u = 10;
  return r ? t.clientX < o.left - u || t.clientY < s.top && t.clientX < s.right : t.clientY < o.top - u || t.clientY < s.bottom && t.clientX < s.left;
}
function FS(t, r, i) {
  var s = St($d(i.el, i.options.draggable)), o = _0(i.el, i.options, Oe), u = 10;
  return r ? t.clientX > o.right + u || t.clientY > s.bottom && t.clientX > s.left : t.clientY > o.bottom + u || t.clientX > s.right && t.clientY > s.top;
}
function ZS(t, r, i, s, o, u, f, p) {
  var h = s ? t.clientY : t.clientX, y = s ? i.height : i.width, b = s ? i.top : i.left, _ = s ? i.bottom : i.right, m = !1;
  if (!f) {
    if (p && lu < y * o) {
      if (!tl && (el === 1 ? h > b + y * u / 2 : h < _ - y * u / 2) && (tl = !0), tl)
        m = !0;
      else if (el === 1 ? h < b + lu : h > _ - lu)
        return -el;
    } else if (h > b + y * (1 - o) / 2 && h < _ - y * (1 - o) / 2)
      return GS(r);
  }
  return m = m || f, m && (h < b + y * u / 2 || h > _ - y * u / 2) ? h > b + y / 2 ? 1 : -1 : 0;
}
function GS(t) {
  return Dn(ie) < Dn(t) ? 1 : -1;
}
function VS(t) {
  for (var r = t.tagName + t.className + t.src + t.href + t.textContent, i = r.length, s = 0; i--; )
    s += r.charCodeAt(i);
  return s.toString(36);
}
function YS(t) {
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
wu && He(document, "touchmove", function(t) {
  (Ae.active || Di) && t.cancelable && t.preventDefault();
});
Ae.utils = {
  on: He,
  off: Ue,
  css: we,
  find: g0,
  is: function(r, i) {
    return !!Hn(r, i, r, !1);
  },
  extend: OS,
  throttle: v0,
  closest: Hn,
  toggleClass: pn,
  clone: b0,
  index: Dn,
  nextTick: ou,
  cancelNextTick: Nd,
  detectDirection: x0,
  getChild: Pi,
  expando: nn
};
Ae.get = function(t) {
  return t[nn];
};
Ae.mount = function() {
  for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
    r[i] = arguments[i];
  r[0].constructor === Array && (r = r[0]), r.forEach(function(s) {
    if (!s.prototype || !s.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(s));
    s.utils && (Ae.utils = tr(tr({}, Ae.utils), s.utils)), sl.mount(s);
  });
};
Ae.create = function(t, r) {
  return new Ae(t, r);
};
Ae.version = NS;
var _t = [], Xs, Td, Od = !1, rd, ad, vu, $s;
function XS() {
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
      this.sortable.nativeDraggable ? He(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? He(document, "pointermove", this._handleFallbackAutoScroll) : s.touches ? He(document, "touchmove", this._handleFallbackAutoScroll) : He(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(i) {
      var s = i.originalEvent;
      !this.options.dragOverBubble && !s.rootEl && this._handleAutoScroll(s);
    },
    drop: function() {
      this.sortable.nativeDraggable ? Ue(document, "dragover", this._handleAutoScroll) : (Ue(document, "pointermove", this._handleFallbackAutoScroll), Ue(document, "touchmove", this._handleFallbackAutoScroll), Ue(document, "mousemove", this._handleFallbackAutoScroll)), Ov(), uu(), MS();
    },
    nulling: function() {
      vu = Td = Xs = Od = $s = rd = ad = null, _t.length = 0;
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
          var y = ta(document.elementFromPoint(u, f), !0);
          y !== h && (h = y, uu()), id(i, o.options, y, s);
        }, 10), rd = u, ad = f);
      } else {
        if (!this.options.bubbleScroll || ta(p, !0) === er()) {
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
  _t.forEach(function(t) {
    clearInterval(t.pid);
  }), _t = [];
}
function Ov() {
  clearInterval($s);
}
var id = v0(function(t, r, i, s) {
  if (r.scroll) {
    var o = (t.touches ? t.touches[0] : t).clientX, u = (t.touches ? t.touches[0] : t).clientY, f = r.scrollSensitivity, p = r.scrollSpeed, h = er(), y = !1, b;
    Td !== i && (Td = i, uu(), Xs = r.scroll, b = r.scrollFn, Xs === !0 && (Xs = ta(i, !0)));
    var _ = 0, m = Xs;
    do {
      var g = m, d = St(g), x = d.top, E = d.bottom, T = d.left, A = d.right, M = d.width, C = d.height, N = void 0, D = void 0, k = g.scrollWidth, q = g.scrollHeight, V = we(g), I = g.scrollLeft, G = g.scrollTop;
      g === h ? (N = M < k && (V.overflowX === "auto" || V.overflowX === "scroll" || V.overflowX === "visible"), D = C < q && (V.overflowY === "auto" || V.overflowY === "scroll" || V.overflowY === "visible")) : (N = M < k && (V.overflowX === "auto" || V.overflowX === "scroll"), D = C < q && (V.overflowY === "auto" || V.overflowY === "scroll"));
      var Y = N && (Math.abs(A - o) <= f && I + M < k) - (Math.abs(T - o) <= f && !!I), oe = D && (Math.abs(E - u) <= f && G + C < q) - (Math.abs(x - u) <= f && !!G);
      if (!_t[_])
        for (var fe = 0; fe <= _; fe++)
          _t[fe] || (_t[fe] = {});
      (_t[_].vx != Y || _t[_].vy != oe || _t[_].el !== g) && (_t[_].el = g, _t[_].vx = Y, _t[_].vy = oe, clearInterval(_t[_].pid), (Y != 0 || oe != 0) && (y = !0, _t[_].pid = setInterval((function() {
        s && this.layer === 0 && Ae.active._onTouchMove(vu);
        var ve = _t[this.layer].vy ? _t[this.layer].vy * p : 0, U = _t[this.layer].vx ? _t[this.layer].vx * p : 0;
        typeof b == "function" && b.call(Ae.dragged.parentNode[nn], U, ve, t, vu, _t[this.layer].el) !== "continue" || y0(_t[this.layer].el, U, ve);
      }).bind({
        layer: _
      }), 24))), _++;
    } while (r.bubbleScroll && m !== h && (m = ta(m, !1)));
    Od = y;
  }
}, 30), A0 = function(r) {
  var i = r.originalEvent, s = r.putSortable, o = r.dragEl, u = r.activeSortable, f = r.dispatchSortableEvent, p = r.hideGhostForTarget, h = r.unhideGhostForTarget;
  if (i) {
    var y = s || u;
    p();
    var b = i.changedTouches && i.changedTouches.length ? i.changedTouches[0] : i, _ = document.elementFromPoint(b.clientX, b.clientY);
    h(), y && !y.el.contains(_) && (f("spill"), this.onSpill({
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
    var o = Pi(this.sortable.el, this.startIndex, this.options);
    o ? this.sortable.el.insertBefore(i, o) : this.sortable.el.appendChild(i), this.sortable.animateAll(), s && s.animateAll();
  },
  drop: A0
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
  drop: A0
};
wr(Jd, {
  pluginName: "removeOnSpill"
});
Ae.mount(new XS());
Ae.mount(Jd, Qd);
const Md = `=======

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

=======`, N0 = `{{#if characters}}
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
{{/if}}`, $S = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide your response wrapped ONLY in a single <response> XML tag.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
<response>Generated content for the field goes here.</response>
\`\`\``, QS = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide your response as a JSON object with a single key "response" containing the generated content as a string.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
{
  "response": "Generated content for the field goes here."
}
\`\`\``, JS = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide ONLY the raw text content for the field, without any formatting, XML tags, JSON structure, or explanatory text. Just the content itself.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
Generated content for the field goes here.
\`\`\``, Kd = "{{activeFormatInstructions}}", T0 = `{{#is_not_empty lorebooks}}
## Selected Lorebooks for Context
{{#each lorebooks}}
### {{@key}}
  {{#each this as |entry|}}
#### {{#if entry.comment}}{{entry.comment}}{{else}}*No title*{{/if}}
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}

  {{/each}}


{{/each}}
{{/is_not_empty}}`, KS = `### {{character.name}}
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
{{/is_not_empty}}`, WS = `## User's Persona Description
name: {{user}}
{{persona}}`, Wd = `Your task is to generate the content for the "{{targetField}}" field of a character card. Base your response on the preceding context (chat history, persona, system prompts, character/lore definitions, existing fields, etc.).
{{#if userInstructions}}

Follow these user instructions: {{userInstructions}}
{{/if}}
{{#if fieldSpecificInstructions}}

Field-specific instructions: {{fieldSpecificInstructions}}
{{/if}}`, ex = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid JSON object that strictly adheres to the provided JSON schema.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire JSON object in a markdown code block (```json\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The JSON object inside the code block MUST be valid and conform to the schema.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```json\n{{example_response}}\n```", tx = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid XML structure that strictly adheres to the provided example.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire XML object in a markdown code block (```xml\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The XML object inside the code block MUST be valid.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```json\n{{example_response}}\n```", nx = `You are an expert character writer assisting a user. Your task is to respond with the modified character data in the required structured format.
Your justification should be friendly and conversational. Be direct and focus on the changes you've made. Vary your responses and do not start every message the same way. Do not repeat the user's request back to them.

For this session, we are focusing on: {{#if isFieldSession}}the "{{targetLabel}}" field.{{else}}the entire character card.{{/if}}

Initial character state is provided in the context. Read the user's request, and provide a response that incorporates their changes.`, O0 = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", rx = O0 + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ax = "[" + O0 + "][" + rx + "]*", ix = new RegExp("^" + ax + "$");
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
  const r = ix.exec(t);
  return !(r === null || typeof r > "u");
};
function sx(t) {
  return typeof t < "u";
}
const lx = {
  allowBooleanAttributes: !1,
  //A tag can have attributes without any value
  unpairedTags: []
};
function D0(t, r) {
  r = Object.assign({}, lx, r);
  const i = [];
  let s = !1, o = !1;
  t[0] === "\uFEFF" && (t = t.substr(1));
  for (let u = 0; u < t.length; u++)
    if (t[u] === "<" && t[u + 1] === "?") {
      if (u += 2, u = Dv(t, u), u.err) return u;
    } else if (t[u] === "<") {
      let f = u;
      if (u++, t[u] === "!") {
        u = kv(t, u);
        continue;
      } else {
        let p = !1;
        t[u] === "/" && (p = !0, u++);
        let h = "";
        for (; u < t.length && t[u] !== ">" && t[u] !== " " && t[u] !== "	" && t[u] !== `
` && t[u] !== "\r"; u++)
          h += t[u];
        if (h = h.trim(), h[h.length - 1] === "/" && (h = h.substring(0, h.length - 1), u--), !mx(h)) {
          let _;
          return h.trim().length === 0 ? _ = "Invalid space after '<'." : _ = "Tag '" + h + "' is an invalid name.", vt("InvalidTag", _, Vt(t, u));
        }
        const y = cx(t, u);
        if (y === !1)
          return vt("InvalidAttr", "Attributes for '" + h + "' have open quote.", Vt(t, u));
        let b = y.value;
        if (u = y.index, b[b.length - 1] === "/") {
          const _ = u - b.length;
          b = b.substring(0, b.length - 1);
          const m = jv(b, r);
          if (m === !0)
            s = !0;
          else
            return vt(m.err.code, m.err.msg, Vt(t, _ + m.err.line));
        } else if (p)
          if (y.tagClosed) {
            if (b.trim().length > 0)
              return vt("InvalidTag", "Closing tag '" + h + "' can't have attributes or invalid starting.", Vt(t, f));
            if (i.length === 0)
              return vt("InvalidTag", "Closing tag '" + h + "' has not been opened.", Vt(t, f));
            {
              const _ = i.pop();
              if (h !== _.tagName) {
                let m = Vt(t, _.tagStartPos);
                return vt(
                  "InvalidTag",
                  "Expected closing tag '" + _.tagName + "' (opened in line " + m.line + ", col " + m.col + ") instead of closing tag '" + h + "'.",
                  Vt(t, f)
                );
              }
              i.length == 0 && (o = !0);
            }
          } else return vt("InvalidTag", "Closing tag '" + h + "' doesn't have proper closing.", Vt(t, u));
        else {
          const _ = jv(b, r);
          if (_ !== !0)
            return vt(_.err.code, _.err.msg, Vt(t, u - b.length + _.err.line));
          if (o === !0)
            return vt("InvalidXml", "Multiple possible root nodes found.", Vt(t, u));
          r.unpairedTags.indexOf(h) !== -1 || i.push({ tagName: h, tagStartPos: f }), s = !0;
        }
        for (u++; u < t.length; u++)
          if (t[u] === "<")
            if (t[u + 1] === "!") {
              u++, u = kv(t, u);
              continue;
            } else if (t[u + 1] === "?") {
              if (u = Dv(t, ++u), u.err) return u;
            } else
              break;
          else if (t[u] === "&") {
            const _ = hx(t, u);
            if (_ == -1)
              return vt("InvalidChar", "char '&' is not expected.", Vt(t, u));
            u = _;
          } else if (o === !0 && !Mv(t[u]))
            return vt("InvalidXml", "Extra text at the end", Vt(t, u));
        t[u] === "<" && u--;
      }
    } else {
      if (Mv(t[u]))
        continue;
      return vt("InvalidChar", "char '" + t[u] + "' is not expected.", Vt(t, u));
    }
  if (s) {
    if (i.length == 1)
      return vt("InvalidTag", "Unclosed tag '" + i[0].tagName + "'.", Vt(t, i[0].tagStartPos));
    if (i.length > 0)
      return vt("InvalidXml", "Invalid '" + JSON.stringify(i.map((u) => u.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
  } else return vt("InvalidXml", "Start tag expected.", 1);
  return !0;
}
function Mv(t) {
  return t === " " || t === "	" || t === `
` || t === "\r";
}
function Dv(t, r) {
  const i = r;
  for (; r < t.length; r++)
    if (t[r] == "?" || t[r] == " ") {
      const s = t.substr(i, r - i);
      if (r > 5 && s === "xml")
        return vt("InvalidXml", "XML declaration allowed only at the start of the document.", Vt(t, r));
      if (t[r] == "?" && t[r + 1] == ">") {
        r++;
        break;
      } else
        continue;
    }
  return r;
}
function kv(t, r) {
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
const ox = '"', ux = "'";
function cx(t, r) {
  let i = "", s = "", o = !1;
  for (; r < t.length; r++) {
    if (t[r] === ox || t[r] === ux)
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
const fx = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function jv(t, r) {
  const i = M0(t, fx), s = {};
  for (let o = 0; o < i.length; o++) {
    if (i[o][1].length === 0)
      return vt("InvalidAttr", "Attribute '" + i[o][2] + "' has no space in starting.", Bs(i[o]));
    if (i[o][3] !== void 0 && i[o][4] === void 0)
      return vt("InvalidAttr", "Attribute '" + i[o][2] + "' is without value.", Bs(i[o]));
    if (i[o][3] === void 0 && !r.allowBooleanAttributes)
      return vt("InvalidAttr", "boolean attribute '" + i[o][2] + "' is not allowed.", Bs(i[o]));
    const u = i[o][2];
    if (!px(u))
      return vt("InvalidAttr", "Attribute '" + u + "' is an invalid name.", Bs(i[o]));
    if (!s.hasOwnProperty(u))
      s[u] = 1;
    else
      return vt("InvalidAttr", "Attribute '" + u + "' is repeated.", Bs(i[o]));
  }
  return !0;
}
function dx(t, r) {
  let i = /\d/;
  for (t[r] === "x" && (r++, i = /[\da-fA-F]/); r < t.length; r++) {
    if (t[r] === ";")
      return r;
    if (!t[r].match(i))
      break;
  }
  return -1;
}
function hx(t, r) {
  if (r++, t[r] === ";")
    return -1;
  if (t[r] === "#")
    return r++, dx(t, r);
  let i = 0;
  for (; r < t.length; r++, i++)
    if (!(t[r].match(/\w/) && i < 20)) {
      if (t[r] === ";")
        break;
      return -1;
    }
  return r;
}
function vt(t, r, i) {
  return {
    err: {
      code: t,
      msg: r,
      line: i.line || i,
      col: i.col
    }
  };
}
function px(t) {
  return eh(t);
}
function mx(t) {
  return eh(t);
}
function Vt(t, r) {
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
const gx = {
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
}, vx = function(t) {
  return Object.assign({}, gx, t);
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
function yx(t, r) {
  const i = {};
  if (t[r + 3] === "O" && t[r + 4] === "C" && t[r + 5] === "T" && t[r + 6] === "Y" && t[r + 7] === "P" && t[r + 8] === "E") {
    r = r + 9;
    let s = 1, o = !1, u = !1, f = "";
    for (; r < t.length; r++)
      if (t[r] === "<" && !u) {
        if (o && Sx(t, r)) {
          r += 7;
          let p, h;
          [p, h, r] = bx(t, r + 1), h.indexOf("&") === -1 && (i[wx(p)] = {
            regx: RegExp(`&${p};`, "g"),
            val: h
          });
        } else if (o && xx(t, r)) r += 8;
        else if (o && Ex(t, r)) r += 8;
        else if (o && Cx(t, r)) r += 9;
        else if (_x) u = !0;
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
function bx(t, r) {
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
function _x(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "-" && t[r + 3] === "-";
}
function Sx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "E" && t[r + 3] === "N" && t[r + 4] === "T" && t[r + 5] === "I" && t[r + 6] === "T" && t[r + 7] === "Y";
}
function xx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "E" && t[r + 3] === "L" && t[r + 4] === "E" && t[r + 5] === "M" && t[r + 6] === "E" && t[r + 7] === "N" && t[r + 8] === "T";
}
function Ex(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "A" && t[r + 3] === "T" && t[r + 4] === "T" && t[r + 5] === "L" && t[r + 6] === "I" && t[r + 7] === "S" && t[r + 8] === "T";
}
function Cx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "N" && t[r + 3] === "O" && t[r + 4] === "T" && t[r + 5] === "A" && t[r + 6] === "T" && t[r + 7] === "I" && t[r + 8] === "O" && t[r + 9] === "N";
}
function wx(t) {
  if (eh(t))
    return t;
  throw new Error(`Invalid entity name ${t}`);
}
const Ax = /^[-+]?0x[a-fA-F0-9]+$/, Nx = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, Tx = {
  hex: !0,
  // oct: false,
  leadingZeros: !0,
  decimalPoint: ".",
  eNotation: !0
  //skipLike: /regex/
};
function Ox(t, r = {}) {
  if (r = Object.assign({}, Tx, r), !t || typeof t != "string") return t;
  let i = t.trim();
  if (r.skipLike !== void 0 && r.skipLike.test(i)) return t;
  if (t === "0") return 0;
  if (r.hex && Ax.test(i))
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
    const s = Nx.exec(i);
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
function kx(t) {
  return typeof t == "function" ? t : Array.isArray(t) ? (r) => {
    for (const i of t)
      if (typeof i == "string" && r === i || i instanceof RegExp && i.test(r))
        return !0;
  } : () => !1;
}
class jx {
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
    }, this.addExternalEntities = Rx, this.parseXml = Bx, this.parseTextData = zx, this.resolveNameSpace = Lx, this.buildAttributesMap = Ix, this.isItStopNode = Fx, this.replaceEntitiesValue = Hx, this.readStopNodeData = Gx, this.saveTextToParentTag = qx, this.addChild = Ux, this.ignoreAttributesFn = kx(this.options.ignoreAttributes);
  }
}
function Rx(t) {
  const r = Object.keys(t);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    this.lastEntities[s] = {
      regex: new RegExp("&" + s + ";", "g"),
      val: t[s]
    };
  }
}
function zx(t, r, i, s, o, u, f) {
  if (t !== void 0 && (this.options.trimValues && !s && (t = t.trim()), t.length > 0)) {
    f || (t = this.replaceEntitiesValue(t));
    const p = this.options.tagValueProcessor(r, t, i, o, u);
    return p == null ? t : typeof p != typeof t || p !== t ? p : this.options.trimValues ? kd(t, this.options.parseTagValue, this.options.numberParseOptions) : t.trim() === t ? kd(t, this.options.parseTagValue, this.options.numberParseOptions) : t;
  }
}
function Lx(t) {
  if (this.options.removeNSPrefix) {
    const r = t.split(":"), i = t.charAt(0) === "/" ? "/" : "";
    if (r[0] === "xmlns")
      return "";
    r.length === 2 && (t = i + r[1]);
  }
  return t;
}
const Px = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function Ix(t, r, i) {
  if (this.options.ignoreAttributes !== !0 && typeof t == "string") {
    const s = M0(t, Px), o = s.length, u = {};
    for (let f = 0; f < o; f++) {
      const p = this.resolveNameSpace(s[f][1]);
      if (this.ignoreAttributesFn(p, r))
        continue;
      let h = s[f][4], y = this.options.attributeNamePrefix + p;
      if (p.length)
        if (this.options.transformAttributeName && (y = this.options.transformAttributeName(y)), y === "__proto__" && (y = "#__proto__"), h !== void 0) {
          this.options.trimValues && (h = h.trim()), h = this.replaceEntitiesValue(h);
          const b = this.options.attributeValueProcessor(p, h, r);
          b == null ? u[y] = h : typeof b != typeof h || b !== h ? u[y] = b : u[y] = kd(
            h,
            this.options.parseAttributeValue,
            this.options.numberParseOptions
          );
        } else this.options.allowBooleanAttributes && (u[y] = !0);
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
const Bx = function(t) {
  t = t.replace(/\r\n?/g, `
`);
  const r = new Us("!xml");
  let i = r, s = "", o = "";
  for (let u = 0; u < t.length; u++)
    if (t[u] === "<")
      if (t[u + 1] === "/") {
        const p = ka(t, ">", u, "Closing Tag is not closed.");
        let h = t.substring(u + 2, p).trim();
        if (this.options.removeNSPrefix) {
          const _ = h.indexOf(":");
          _ !== -1 && (h = h.substr(_ + 1));
        }
        this.options.transformTagName && (h = this.options.transformTagName(h)), i && (s = this.saveTextToParentTag(s, i, o));
        const y = o.substring(o.lastIndexOf(".") + 1);
        if (h && this.options.unpairedTags.indexOf(h) !== -1)
          throw new Error(`Unpaired tag can not be used as closing tag: </${h}>`);
        let b = 0;
        y && this.options.unpairedTags.indexOf(y) !== -1 ? (b = o.lastIndexOf(".", o.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : b = o.lastIndexOf("."), o = o.substring(0, b), i = this.tagsNodeStack.pop(), s = "", u = p;
      } else if (t[u + 1] === "?") {
        let p = Dd(t, u, !1, "?>");
        if (!p) throw new Error("Pi Tag is not closed.");
        if (s = this.saveTextToParentTag(s, i, o), !(this.options.ignoreDeclaration && p.tagName === "?xml" || this.options.ignorePiTags)) {
          const h = new Us(p.tagName);
          h.add(this.options.textNodeName, ""), p.tagName !== p.tagExp && p.attrExpPresent && (h[":@"] = this.buildAttributesMap(p.tagExp, o, p.tagName)), this.addChild(i, h, o);
        }
        u = p.closeIndex + 1;
      } else if (t.substr(u + 1, 3) === "!--") {
        const p = ka(t, "-->", u + 4, "Comment is not closed.");
        if (this.options.commentPropName) {
          const h = t.substring(u + 4, p - 2);
          s = this.saveTextToParentTag(s, i, o), i.add(this.options.commentPropName, [{ [this.options.textNodeName]: h }]);
        }
        u = p;
      } else if (t.substr(u + 1, 2) === "!D") {
        const p = yx(t, u);
        this.docTypeEntities = p.entities, u = p.i;
      } else if (t.substr(u + 1, 2) === "![") {
        const p = ka(t, "]]>", u, "CDATA is not closed.") - 2, h = t.substring(u + 9, p);
        s = this.saveTextToParentTag(s, i, o);
        let y = this.parseTextData(h, i.tagname, o, !0, !1, !0, !0);
        y == null && (y = ""), this.options.cdataPropName ? i.add(this.options.cdataPropName, [{ [this.options.textNodeName]: h }]) : i.add(this.options.textNodeName, y), u = p + 2;
      } else {
        let p = Dd(t, u, this.options.removeNSPrefix), h = p.tagName;
        const y = p.rawTagName;
        let b = p.tagExp, _ = p.attrExpPresent, m = p.closeIndex;
        this.options.transformTagName && (h = this.options.transformTagName(h)), i && s && i.tagname !== "!xml" && (s = this.saveTextToParentTag(s, i, o, !1));
        const g = i;
        if (g && this.options.unpairedTags.indexOf(g.tagname) !== -1 && (i = this.tagsNodeStack.pop(), o = o.substring(0, o.lastIndexOf("."))), h !== r.tagname && (o += o ? "." + h : h), this.isItStopNode(this.options.stopNodes, o, h)) {
          let d = "";
          if (b.length > 0 && b.lastIndexOf("/") === b.length - 1)
            h[h.length - 1] === "/" ? (h = h.substr(0, h.length - 1), o = o.substr(0, o.length - 1), b = h) : b = b.substr(0, b.length - 1), u = p.closeIndex;
          else if (this.options.unpairedTags.indexOf(h) !== -1)
            u = p.closeIndex;
          else {
            const E = this.readStopNodeData(t, y, m + 1);
            if (!E) throw new Error(`Unexpected end of ${y}`);
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
          s = "", u = m;
        }
      }
    else
      s += t[u];
  return r.child;
};
function Ux(t, r, i) {
  const s = this.options.updateTag(r.tagname, i, r[":@"]);
  s === !1 || (typeof s == "string" && (r.tagname = s), t.addChild(r));
}
const Hx = function(t) {
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
function qx(t, r, i, s) {
  return t && (s === void 0 && (s = r.child.length === 0), t = this.parseTextData(
    t,
    r.tagname,
    i,
    !1,
    r[":@"] ? Object.keys(r[":@"]).length !== 0 : !1,
    s
  ), t !== void 0 && t !== "" && r.add(this.options.textNodeName, t), t = ""), t;
}
function Fx(t, r, i) {
  const s = "*." + i;
  for (const o in t) {
    const u = t[o];
    if (s === u || r === u) return !0;
  }
  return !1;
}
function Zx(t, r, i = ">") {
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
function ka(t, r, i, s) {
  const o = t.indexOf(r, i);
  if (o === -1)
    throw new Error(s);
  return o + r.length - 1;
}
function Dd(t, r, i, s = ">") {
  const o = Zx(t, r + 1, s);
  if (!o) return;
  let u = o.data;
  const f = o.index, p = u.search(/\s/);
  let h = u, y = !0;
  p !== -1 && (h = u.substring(0, p), u = u.substring(p + 1).trimStart());
  const b = h;
  if (i) {
    const _ = h.indexOf(":");
    _ !== -1 && (h = h.substr(_ + 1), y = h !== o.data.substr(_ + 1));
  }
  return {
    tagName: h,
    tagExp: u,
    closeIndex: f,
    attrExpPresent: y,
    rawTagName: b
  };
}
function Gx(t, r, i) {
  const s = i;
  let o = 1;
  for (; i < t.length; i++)
    if (t[i] === "<")
      if (t[i + 1] === "/") {
        const u = ka(t, ">", i, `${r} is not closed`);
        if (t.substring(i + 2, u).trim() === r && (o--, o === 0))
          return {
            tagContent: t.substring(s, i),
            i: u
          };
        i = u;
      } else if (t[i + 1] === "?")
        i = ka(t, "?>", i + 1, "StopNode is not closed.");
      else if (t.substr(i + 1, 3) === "!--")
        i = ka(t, "-->", i + 3, "StopNode is not closed.");
      else if (t.substr(i + 1, 2) === "![")
        i = ka(t, "]]>", i, "StopNode is not closed.") - 2;
      else {
        const u = Dd(t, i, ">");
        u && ((u && u.tagName) === r && u.tagExp[u.tagExp.length - 1] !== "/" && o++, i = u.closeIndex);
      }
}
function kd(t, r, i) {
  if (r && typeof t == "string") {
    const s = t.trim();
    return s === "true" ? !0 : s === "false" ? !1 : Ox(t, i);
  } else
    return sx(t) ? t : "";
}
function Vx(t, r) {
  return k0(t, r);
}
function k0(t, r, i) {
  let s;
  const o = {};
  for (let u = 0; u < t.length; u++) {
    const f = t[u], p = Yx(f);
    let h = "";
    if (i === void 0 ? h = p : h = i + "." + p, p === r.textNodeName)
      s === void 0 ? s = f[p] : s += "" + f[p];
    else {
      if (p === void 0)
        continue;
      if (f[p]) {
        let y = k0(f[p], r, h);
        const b = $x(y, r);
        f[":@"] ? Xx(y, f[":@"], h, r) : Object.keys(y).length === 1 && y[r.textNodeName] !== void 0 && !r.alwaysCreateTextNode ? y = y[r.textNodeName] : Object.keys(y).length === 0 && (r.alwaysCreateTextNode ? y[r.textNodeName] = "" : y = ""), o[p] !== void 0 && o.hasOwnProperty(p) ? (Array.isArray(o[p]) || (o[p] = [o[p]]), o[p].push(y)) : r.isArray(p, h, b) ? o[p] = [y] : o[p] = y;
      }
    }
  }
  return typeof s == "string" ? s.length > 0 && (o[r.textNodeName] = s) : s !== void 0 && (o[r.textNodeName] = s), o;
}
function Yx(t) {
  const r = Object.keys(t);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (s !== ":@") return s;
  }
}
function Xx(t, r, i, s) {
  if (r) {
    const o = Object.keys(r), u = o.length;
    for (let f = 0; f < u; f++) {
      const p = o[f];
      s.isArray(p, i + "." + p, !0, !0) ? t[p] = [r[p]] : t[p] = r[p];
    }
  }
}
function $x(t, r) {
  const { textNodeName: i } = r, s = Object.keys(t).length;
  return !!(s === 0 || s === 1 && (t[i] || typeof t[i] == "boolean" || t[i] === 0));
}
class Qx {
  constructor(r) {
    this.externalEntities = {}, this.options = vx(r);
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
    const s = new jx(this.options);
    s.addExternalEntities(this.externalEntities);
    const o = s.parseXml(r);
    return this.options.preserveOrder || o === void 0 ? o : Vx(o, this.options);
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
const Jx = {
  validate: D0
}, Kx = new Qx({
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
function j0(t, r, i = {}) {
  const s = /```(?:\w+\n|\n)?([\s\S]*?)```/, o = t.match(s);
  let u = o ? o[1].trim() : t.trim();
  try {
    switch (r) {
      case "xml":
        if (i.schema) {
          const h = Jx.validate(u);
          if (h !== !0)
            throw new Error(`Model response is not valid XML: ${h.err.msg}`);
        }
        let f = Kx.parse(u);
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
  zv = 1, tn.__esModule = !0, tn.extend = o, tn.indexOf = h, tn.escapeExpression = y, tn.isEmpty = b, tn.createFrame = _, tn.blockParams = m, tn.appendContextPath = g;
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
  function y(d) {
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
  function g(d, x) {
    return (d ? d + "." : "") + x;
  }
  return tn;
}
var Mo = { exports: {} }, Lv;
function Fn() {
  return Lv || (Lv = 1, (function(t, r) {
    r.__esModule = !0;
    var i = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
    function s(o, u) {
      var f = u && u.loc, p = void 0, h = void 0, y = void 0, b = void 0;
      f && (p = f.start.line, h = f.end.line, y = f.start.column, b = f.end.column, o += " - " + p + ":" + y);
      for (var _ = Error.prototype.constructor.call(this, o), m = 0; m < i.length; m++)
        this[i[m]] = _[i[m]];
      Error.captureStackTrace && Error.captureStackTrace(this, s);
      try {
        f && (this.lineNumber = p, this.endLineNumber = h, Object.defineProperty ? (Object.defineProperty(this, "column", {
          value: y,
          enumerable: !0
        }), Object.defineProperty(this, "endColumn", {
          value: b,
          enumerable: !0
        })) : (this.column = y, this.endColumn = b));
      } catch {
      }
    }
    s.prototype = new Error(), r.default = s, t.exports = r.default;
  })(Mo, Mo.exports)), Mo.exports;
}
var Hs = {}, Do = { exports: {} }, Pv;
function Wx() {
  return Pv || (Pv = 1, (function(t, r) {
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
  })(Do, Do.exports)), Do.exports;
}
var ko = { exports: {} }, Iv;
function eE() {
  return Iv || (Iv = 1, (function(t, r) {
    r.__esModule = !0;
    function i(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var s = rn(), o = Fn(), u = i(o);
    r.default = function(f) {
      f.registerHelper("each", function(p, h) {
        if (!h)
          throw new u.default("Must pass iterator to #each");
        var y = h.fn, b = h.inverse, _ = 0, m = "", g = void 0, d = void 0;
        h.data && h.ids && (d = s.appendContextPath(h.data.contextPath, h.ids[0]) + "."), s.isFunction(p) && (p = p.call(this)), h.data && (g = s.createFrame(h.data));
        function x(C, N, D) {
          g && (g.key = C, g.index = N, g.first = N === 0, g.last = !!D, d && (g.contextPath = d + C)), m = m + y(p[C], {
            data: g,
            blockParams: s.blockParams([p[C], C], [d + C, null])
          });
        }
        if (p && typeof p == "object")
          if (s.isArray(p))
            for (var E = p.length; _ < E; _++)
              _ in p && x(_, _, _ === p.length - 1);
          else if (typeof Symbol == "function" && p[Symbol.iterator]) {
            for (var T = [], A = p[Symbol.iterator](), M = A.next(); !M.done; M = A.next())
              T.push(M.value);
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
        return _ === 0 && (m = b(this)), m;
      });
    }, t.exports = r.default;
  })(ko, ko.exports)), ko.exports;
}
var jo = { exports: {} }, Bv;
function tE() {
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
function nE() {
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
function rE() {
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
function aE() {
  return qv || (qv = 1, (function(t, r) {
    r.__esModule = !0, r.default = function(i) {
      i.registerHelper("lookup", function(s, o, u) {
        return s && u.lookupProperty(s, o);
      });
    }, t.exports = r.default;
  })(Lo, Lo.exports)), Lo.exports;
}
var Po = { exports: {} }, Fv;
function iE() {
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
        var y = h.fn;
        if (s.isEmpty(p))
          return h.inverse(this);
        var b = h.data;
        return h.data && h.ids && (b = s.createFrame(h.data), b.contextPath = s.appendContextPath(h.data.contextPath, h.ids[0])), y(p, {
          data: b,
          blockParams: s.blockParams([p], [b && b.contextPath])
        });
      });
    }, t.exports = r.default;
  })(Po, Po.exports)), Po.exports;
}
var Zv;
function R0() {
  if (Zv) return Hs;
  Zv = 1, Hs.__esModule = !0, Hs.registerDefaultHelpers = x, Hs.moveHelperToHooks = E;
  function t(T) {
    return T && T.__esModule ? T : { default: T };
  }
  var r = Wx(), i = t(r), s = eE(), o = t(s), u = tE(), f = t(u), p = nE(), h = t(p), y = rE(), b = t(y), _ = aE(), m = t(_), g = iE(), d = t(g);
  function x(T) {
    i.default(T), o.default(T), f.default(T), h.default(T), b.default(T), m.default(T), d.default(T);
  }
  function E(T, A, M) {
    T.helpers[A] && (T.hooks[A] = T.helpers[A], M || delete T.helpers[A]);
  }
  return Hs;
}
var Io = {}, Bo = { exports: {} }, Gv;
function sE() {
  return Gv || (Gv = 1, (function(t, r) {
    r.__esModule = !0;
    var i = rn();
    r.default = function(s) {
      s.registerDecorator("inline", function(o, u, f, p) {
        var h = o;
        return u.partials || (u.partials = {}, h = function(y, b) {
          var _ = f.partials;
          f.partials = i.extend({}, _, u.partials);
          var m = o(y, b);
          return f.partials = _, m;
        }), u.partials[p.args[0]] = p.fn, h;
      });
    }, t.exports = r.default;
  })(Bo, Bo.exports)), Bo.exports;
}
var Vv;
function lE() {
  if (Vv) return Io;
  Vv = 1, Io.__esModule = !0, Io.registerDefaultDecorators = s;
  function t(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var r = sE(), i = t(r);
  function s(o) {
    i.default(o);
  }
  return Io;
}
var Uo = { exports: {} }, Yv;
function z0() {
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
          for (var p = arguments.length, h = Array(p > 1 ? p - 1 : 0), y = 1; y < p; y++)
            h[y - 1] = arguments[y];
          console[f].apply(console, h);
        }
      }
    };
    r.default = s, t.exports = r.default;
  })(Uo, Uo.exports)), Uo.exports;
}
var Ni = {}, Ho = {}, Xv;
function oE() {
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
function L0() {
  if ($v) return Ni;
  $v = 1, Ni.__esModule = !0, Ni.createProtoAccessControl = u, Ni.resultIsAllowed = f, Ni.resetLoggedProperties = y;
  function t(b) {
    return b && b.__esModule ? b : { default: b };
  }
  var r = oE(), i = z0(), s = t(i), o = /* @__PURE__ */ Object.create(null);
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
  function y() {
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
  var r = rn(), i = Fn(), s = t(i), o = R0(), u = lE(), f = z0(), p = t(f), h = L0(), y = "4.7.8";
  Un.VERSION = y;
  var b = 8;
  Un.COMPILER_REVISION = b;
  var _ = 7;
  Un.LAST_COMPATIBLE_COMPILER_REVISION = _;
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
  Un.REVISION_CHANGES = m;
  var g = "[object Object]";
  function d(E, T, A) {
    this.helpers = E || {}, this.partials = T || {}, this.decorators = A || {}, o.registerDefaultHelpers(this), u.registerDefaultDecorators(this);
  }
  d.prototype = {
    constructor: d,
    logger: p.default,
    log: p.default.log,
    registerHelper: function(T, A) {
      if (r.toString.call(T) === g) {
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
      if (r.toString.call(T) === g)
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
      if (r.toString.call(T) === g) {
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
function uE() {
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
function cE() {
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
function fE() {
  if (Wv) return br;
  Wv = 1, br.__esModule = !0, br.checkRevision = b, br.template = _, br.wrapProgram = m, br.resolvePartial = g, br.invokePartial = d, br.noop = x;
  function t(C) {
    return C && C.__esModule ? C : { default: C };
  }
  function r(C) {
    if (C && C.__esModule)
      return C;
    var N = {};
    if (C != null)
      for (var D in C)
        Object.prototype.hasOwnProperty.call(C, D) && (N[D] = C[D]);
    return N.default = C, N;
  }
  var i = rn(), s = r(i), o = Fn(), u = t(o), f = th(), p = R0(), h = cE(), y = L0();
  function b(C) {
    var N = C && C[0] || 1, D = f.COMPILER_REVISION;
    if (!(N >= f.LAST_COMPATIBLE_COMPILER_REVISION && N <= f.COMPILER_REVISION))
      if (N < f.LAST_COMPATIBLE_COMPILER_REVISION) {
        var k = f.REVISION_CHANGES[D], q = f.REVISION_CHANGES[N];
        throw new u.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + k + ") or downgrade your runtime to an older version (" + q + ").");
      } else
        throw new u.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + C[1] + ").");
  }
  function _(C, N) {
    if (!N)
      throw new u.default("No environment passed to template");
    if (!C || !C.main)
      throw new u.default("Unknown template object: " + typeof C);
    C.main.decorator = C.main_d, N.VM.checkRevision(C.compiler);
    var D = C.compiler && C.compiler[0] === 7;
    function k(I, G, Y) {
      Y.hash && (G = s.extend({}, G, Y.hash), Y.ids && (Y.ids[0] = !0)), I = N.VM.resolvePartial.call(this, I, G, Y);
      var oe = s.extend({}, Y, {
        hooks: this.hooks,
        protoAccessControl: this.protoAccessControl
      }), fe = N.VM.invokePartial.call(this, I, G, oe);
      if (fe == null && N.compile && (Y.partials[Y.name] = N.compile(I, C.compilerOptions, N), fe = Y.partials[Y.name](G, oe)), fe != null) {
        if (Y.indent) {
          for (var ve = fe.split(`
`), U = 0, re = ve.length; U < re && !(!ve[U] && U + 1 === re); U++)
            ve[U] = Y.indent + ve[U];
          fe = ve.join(`
`);
        }
        return fe;
      } else
        throw new u.default("The partial " + Y.name + " could not be compiled when running in runtime-only mode");
    }
    var q = {
      strict: function(G, Y, oe) {
        if (!G || !(Y in G))
          throw new u.default('"' + Y + '" not defined in ' + G, {
            loc: oe
          });
        return q.lookupProperty(G, Y);
      },
      lookupProperty: function(G, Y) {
        var oe = G[Y];
        if (oe == null || Object.prototype.hasOwnProperty.call(G, Y) || y.resultIsAllowed(oe, q.protoAccessControl, Y))
          return oe;
      },
      lookup: function(G, Y) {
        for (var oe = G.length, fe = 0; fe < oe; fe++) {
          var ve = G[fe] && q.lookupProperty(G[fe], Y);
          if (ve != null)
            return G[fe][Y];
        }
      },
      lambda: function(G, Y) {
        return typeof G == "function" ? G.call(Y) : G;
      },
      escapeExpression: s.escapeExpression,
      invokePartial: k,
      fn: function(G) {
        var Y = C[G];
        return Y.decorator = C[G + "_d"], Y;
      },
      programs: [],
      program: function(G, Y, oe, fe, ve) {
        var U = this.programs[G], re = this.fn(G);
        return Y || ve || fe || oe ? U = m(this, G, re, Y, oe, fe, ve) : U || (U = this.programs[G] = m(this, G, re)), U;
      },
      data: function(G, Y) {
        for (; G && Y--; )
          G = G._parent;
        return G;
      },
      mergeIfNeeded: function(G, Y) {
        var oe = G || Y;
        return G && Y && G !== Y && (oe = s.extend({}, Y, G)), oe;
      },
      // An empty object to use as replacement for null-contexts
      nullContext: Object.seal({}),
      noop: N.VM.noop,
      compilerInfo: C.compiler
    };
    function V(I) {
      var G = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], Y = G.data;
      V._setup(G), !G.partial && C.useData && (Y = E(I, Y));
      var oe = void 0, fe = C.useBlockParams ? [] : void 0;
      C.useDepths && (G.depths ? oe = I != G.depths[0] ? [I].concat(G.depths) : G.depths : oe = [I]);
      function ve(U) {
        return "" + C.main(q, U, q.helpers, q.partials, Y, fe, oe);
      }
      return ve = T(C.main, ve, q, G.depths || [], Y, fe), ve(I, G);
    }
    return V.isTop = !0, V._setup = function(I) {
      if (I.partial)
        q.protoAccessControl = I.protoAccessControl, q.helpers = I.helpers, q.partials = I.partials, q.decorators = I.decorators, q.hooks = I.hooks;
      else {
        var G = s.extend({}, N.helpers, I.helpers);
        A(G, q), q.helpers = G, C.usePartial && (q.partials = q.mergeIfNeeded(I.partials, N.partials)), (C.usePartial || C.useDecorators) && (q.decorators = s.extend({}, N.decorators, I.decorators)), q.hooks = {}, q.protoAccessControl = y.createProtoAccessControl(I);
        var Y = I.allowCallsToHelperMissing || D;
        p.moveHelperToHooks(q, "helperMissing", Y), p.moveHelperToHooks(q, "blockHelperMissing", Y);
      }
    }, V._child = function(I, G, Y, oe) {
      if (C.useBlockParams && !Y)
        throw new u.default("must pass block params");
      if (C.useDepths && !oe)
        throw new u.default("must pass parent depths");
      return m(q, I, C[I], G, 0, Y, oe);
    }, V;
  }
  function m(C, N, D, k, q, V, I) {
    function G(Y) {
      var oe = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], fe = I;
      return I && Y != I[0] && !(Y === C.nullContext && I[0] === null) && (fe = [Y].concat(I)), D(C, Y, C.helpers, C.partials, oe.data || k, V && [oe.blockParams].concat(V), fe);
    }
    return G = T(D, G, C, I, k, V), G.program = N, G.depth = I ? I.length : 0, G.blockParams = q || 0, G;
  }
  function g(C, N, D) {
    return C ? !C.call && !D.name && (D.name = C, C = D.partials[C]) : D.name === "@partial-block" ? C = D.data["partial-block"] : C = D.partials[D.name], C;
  }
  function d(C, N, D) {
    var k = D.data && D.data["partial-block"];
    D.partial = !0, D.ids && (D.data.contextPath = D.ids[0] || D.data.contextPath);
    var q = void 0;
    if (D.fn && D.fn !== x && (function() {
      D.data = f.createFrame(D.data);
      var V = D.fn;
      q = D.data["partial-block"] = function(G) {
        var Y = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
        return Y.data = f.createFrame(Y.data), Y.data["partial-block"] = k, V(G, Y);
      }, V.partials && (D.partials = s.extend({}, D.partials, V.partials));
    })(), C === void 0 && q && (C = q), C === void 0)
      throw new u.default("The partial " + D.name + " could not be found");
    if (C instanceof Function)
      return C(N, D);
  }
  function x() {
    return "";
  }
  function E(C, N) {
    return (!N || !("root" in N)) && (N = N ? f.createFrame(N) : {}, N.root = C), N;
  }
  function T(C, N, D, k, q, V) {
    if (C.decorator) {
      var I = {};
      N = C.decorator(N, I, D, k && k[0], q, V, k), s.extend(N, I);
    }
    return N;
  }
  function A(C, N) {
    Object.keys(C).forEach(function(D) {
      var k = C[D];
      C[D] = M(k, N);
    });
  }
  function M(C, N) {
    var D = N.lookupProperty;
    return h.wrapHelper(C, function(k) {
      return s.extend({ lookupProperty: D }, k);
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
function dE() {
  return ty || (ty = 1, (function(t, r) {
    r.__esModule = !0;
    function i(A) {
      return A && A.__esModule ? A : { default: A };
    }
    function s(A) {
      if (A && A.__esModule)
        return A;
      var M = {};
      if (A != null)
        for (var C in A)
          Object.prototype.hasOwnProperty.call(A, C) && (M[C] = A[C]);
      return M.default = A, M;
    }
    var o = th(), u = s(o), f = uE(), p = i(f), h = Fn(), y = i(h), b = rn(), _ = s(b), m = fE(), g = s(m), d = P0(), x = i(d);
    function E() {
      var A = new u.HandlebarsEnvironment();
      return _.extend(A, u), A.SafeString = p.default, A.Exception = y.default, A.Utils = _, A.escapeExpression = _.escapeExpression, A.VM = g, A.template = function(M) {
        return g.template(M, A);
      }, A;
    }
    var T = E();
    T.create = E, x.default(T), T.default = T, r.default = T, t.exports = r.default;
  })(Oo, Oo.exports)), Oo.exports;
}
var Go = { exports: {} }, ny;
function I0() {
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
function hE() {
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
        performAction: function(p, h, y, b, _, m, g) {
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
              var x = b.prepareBlock(m[d - 2], m[d - 1], m[d], m[d], !1, this._$), E = b.prepareProgram([x], m[d - 1].loc);
              E.chained = !0, this.$ = { strip: m[d - 2].strip, program: E, chain: !0 };
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
          var h = this, y = [0], b = [null], _ = [], m = this.table, g = "", d = 0, x = 0;
          this.lexer.setInput(p), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc > "u" && (this.lexer.yylloc = {});
          var E = this.lexer.yylloc;
          _.push(E);
          var T = this.lexer.options && this.lexer.options.ranges;
          typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
          function A() {
            var oe;
            return oe = h.lexer.lex() || 1, typeof oe != "number" && (oe = h.symbols_[oe] || oe), oe;
          }
          for (var M, C, N, D, k = {}, q, V, I, G; ; ) {
            if (C = y[y.length - 1], this.defaultActions[C] ? N = this.defaultActions[C] : ((M === null || typeof M > "u") && (M = A()), N = m[C] && m[C][M]), typeof N > "u" || !N.length || !N[0]) {
              var Y = "";
              {
                G = [];
                for (q in m[C]) this.terminals_[q] && q > 2 && G.push("'" + this.terminals_[q] + "'");
                this.lexer.showPosition ? Y = "Parse error on line " + (d + 1) + `:
` + this.lexer.showPosition() + `
Expecting ` + G.join(", ") + ", got '" + (this.terminals_[M] || M) + "'" : Y = "Parse error on line " + (d + 1) + ": Unexpected " + (M == 1 ? "end of input" : "'" + (this.terminals_[M] || M) + "'"), this.parseError(Y, { text: this.lexer.match, token: this.terminals_[M] || M, line: this.lexer.yylineno, loc: E, expected: G });
              }
            }
            if (N[0] instanceof Array && N.length > 1)
              throw new Error("Parse Error: multiple actions possible at state: " + C + ", token: " + M);
            switch (N[0]) {
              case 1:
                y.push(M), b.push(this.lexer.yytext), _.push(this.lexer.yylloc), y.push(N[1]), M = null, x = this.lexer.yyleng, g = this.lexer.yytext, d = this.lexer.yylineno, E = this.lexer.yylloc;
                break;
              case 2:
                if (V = this.productions_[N[1]][1], k.$ = b[b.length - V], k._$ = { first_line: _[_.length - (V || 1)].first_line, last_line: _[_.length - 1].last_line, first_column: _[_.length - (V || 1)].first_column, last_column: _[_.length - 1].last_column }, T && (k._$.range = [_[_.length - (V || 1)].range[0], _[_.length - 1].range[1]]), D = this.performAction.call(k, g, x, d, this.yy, N[1], b, _), typeof D < "u")
                  return D;
                V && (y = y.slice(0, -1 * V * 2), b = b.slice(0, -1 * V), _ = _.slice(0, -1 * V)), y.push(this.productions_[N[1]][0]), b.push(k.$), _.push(k._$), I = m[y[y.length - 2]][y[y.length - 1]], y.push(I);
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
          parseError: function(h, y) {
            if (this.yy.parser)
              this.yy.parser.parseError(h, y);
            else
              throw new Error(h);
          },
          setInput: function(h) {
            return this._input = h, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
          },
          input: function() {
            var h = this._input[0];
            this.yytext += h, this.yyleng++, this.offset++, this.match += h, this.matched += h;
            var y = h.match(/(?:\r\n?|\n).*/g);
            return y ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), h;
          },
          unput: function(h) {
            var y = h.length, b = h.split(/(?:\r\n?|\n)/g);
            this._input = h + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - y - 1), this.offset -= y;
            var _ = this.match.split(/(?:\r\n?|\n)/g);
            this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), b.length - 1 && (this.yylineno -= b.length - 1);
            var m = this.yylloc.range;
            return this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: b ? (b.length === _.length ? this.yylloc.first_column : 0) + _[_.length - b.length].length - b[0].length : this.yylloc.first_column - y
            }, this.options.ranges && (this.yylloc.range = [m[0], m[0] + this.yyleng - y]), this;
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
            var h = this.pastInput(), y = new Array(h.length + 1).join("-");
            return h + this.upcomingInput() + `
` + y + "^";
          },
          next: function() {
            if (this.done)
              return this.EOF;
            this._input || (this.done = !0);
            var h, y, b, _, m;
            this._more || (this.yytext = "", this.match = "");
            for (var g = this._currentRules(), d = 0; d < g.length && (b = this._input.match(this.rules[g[d]]), !(b && (!y || b[0].length > y[0].length) && (y = b, _ = d, !this.options.flex))); d++)
              ;
            return y ? (m = y[0].match(/(?:\r\n?|\n).*/g), m && (this.yylineno += m.length), this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: m ? m[m.length - 1].length - m[m.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + y[0].length
            }, this.yytext += y[0], this.match += y[0], this.matches = y, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(y[0].length), this.matched += y[0], h = this.performAction.call(this, this.yy, this, g[_], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), h || void 0) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
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
        return f.options = {}, f.performAction = function(h, y, b, _) {
          function m(g, d) {
            return y.yytext = y.yytext.substring(g, y.yyleng - d + g);
          }
          switch (b) {
            case 0:
              if (y.yytext.slice(-2) === "\\\\" ? (m(0, 1), this.begin("mu")) : y.yytext.slice(-1) === "\\" ? (m(0, 1), this.begin("emu")) : this.begin("mu"), y.yytext) return 15;
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
              this.unput(y.yytext), this.popState(), this.begin("com");
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
              return y.yytext = m(1, 2).replace(/\\"/g, '"'), 80;
            case 32:
              return y.yytext = m(1, 2).replace(/\\'/g, "'"), 80;
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
              return y.yytext = y.yytext.replace(/\\([\\\]])/g, "$1"), 72;
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
function B0() {
  return ay || (ay = 1, (function(t, r) {
    r.__esModule = !0;
    function i(y) {
      return y && y.__esModule ? y : { default: y };
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
    function f(y) {
      this.acceptRequired(y, "path"), this.acceptArray(y.params), this.acceptKey(y, "hash");
    }
    function p(y) {
      f.call(this, y), this.acceptKey(y, "program"), this.acceptKey(y, "inverse");
    }
    function h(y) {
      this.acceptRequired(y, "name"), this.acceptArray(y.params), this.acceptKey(y, "hash");
    }
    r.default = u, t.exports = r.default;
  })(Xo, Xo.exports)), Xo.exports;
}
var iy;
function pE() {
  return iy || (iy = 1, (function(t, r) {
    r.__esModule = !0;
    function i(b) {
      return b && b.__esModule ? b : { default: b };
    }
    var s = B0(), o = i(s);
    function u() {
      var b = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
      this.options = b;
    }
    u.prototype = new o.default(), u.prototype.Program = function(b) {
      var _ = !this.options.ignoreStandalone, m = !this.isRootSeen;
      this.isRootSeen = !0;
      for (var g = b.body, d = 0, x = g.length; d < x; d++) {
        var E = g[d], T = this.accept(E);
        if (T) {
          var A = f(g, d, m), M = p(g, d, m), C = T.openStandalone && A, N = T.closeStandalone && M, D = T.inlineStandalone && A && M;
          T.close && h(g, d, !0), T.open && y(g, d, !0), _ && D && (h(g, d), y(g, d) && E.type === "PartialStatement" && (E.indent = /([ \t]+$)/.exec(g[d - 1].original)[1])), _ && C && (h((E.program || E.inverse).body), y(g, d)), _ && N && (h(g, d), y((E.inverse || E.program).body));
        }
      }
      return b;
    }, u.prototype.BlockStatement = u.prototype.DecoratorBlock = u.prototype.PartialBlockStatement = function(b) {
      this.accept(b.program), this.accept(b.inverse);
      var _ = b.program || b.inverse, m = b.program && b.inverse, g = m, d = m;
      if (m && m.chained)
        for (g = m.body[0].program; d.chained; )
          d = d.body[d.body.length - 1].program;
      var x = {
        open: b.openStrip.open,
        close: b.closeStrip.close,
        // Determine the standalone candiacy. Basically flag our content as being possibly standalone
        // so our parent can determine if we actually are standalone
        openStandalone: p(_.body),
        closeStandalone: f((g || _).body)
      };
      if (b.openStrip.close && h(_.body, null, !0), m) {
        var E = b.inverseStrip;
        E.open && y(_.body, null, !0), E.close && h(g.body, null, !0), b.closeStrip.open && y(d.body, null, !0), !this.options.ignoreStandalone && f(_.body) && p(g.body) && (y(_.body), h(g.body));
      } else b.closeStrip.open && y(_.body, null, !0);
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
      var g = b[_ - 1], d = b[_ - 2];
      if (!g)
        return m;
      if (g.type === "ContentStatement")
        return (d || !m ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(g.original);
    }
    function p(b, _, m) {
      _ === void 0 && (_ = -1);
      var g = b[_ + 1], d = b[_ + 2];
      if (!g)
        return m;
      if (g.type === "ContentStatement")
        return (d || !m ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(g.original);
    }
    function h(b, _, m) {
      var g = b[_ == null ? 0 : _ + 1];
      if (!(!g || g.type !== "ContentStatement" || !m && g.rightStripped)) {
        var d = g.value;
        g.value = g.value.replace(m ? /^\s+/ : /^[ \t]*\r?\n?/, ""), g.rightStripped = g.value !== d;
      }
    }
    function y(b, _, m) {
      var g = b[_ == null ? b.length - 1 : _ - 1];
      if (!(!g || g.type !== "ContentStatement" || !m && g.leftStripped)) {
        var d = g.value;
        return g.value = g.value.replace(m ? /\s+$/ : /[ \t]+$/, ""), g.leftStripped = g.value !== d, g.leftStripped;
      }
    }
    r.default = u, t.exports = r.default;
  })(Yo, Yo.exports)), Yo.exports;
}
var hn = {}, sy;
function mE() {
  if (sy) return hn;
  sy = 1, hn.__esModule = !0, hn.SourceLocation = o, hn.id = u, hn.stripFlags = f, hn.stripComment = p, hn.preparePath = h, hn.prepareMustache = y, hn.prepareRawBlock = b, hn.prepareBlock = _, hn.prepareProgram = m, hn.preparePartialBlock = g;
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
    for (var T = d ? "@" : "", A = [], M = 0, C = 0, N = x.length; C < N; C++) {
      var D = x[C].part, k = x[C].original !== D;
      if (T += (x[C].separator || "") + D, !k && (D === ".." || D === "." || D === "this")) {
        if (A.length > 0)
          throw new i.default("Invalid path: " + T, { loc: E });
        D === ".." && M++;
      } else
        A.push(D);
    }
    return {
      type: "PathExpression",
      data: d,
      depth: M,
      parts: A,
      original: T,
      loc: E
    };
  }
  function y(d, x, E, T, A, M) {
    var C = T.charAt(3) || T.charAt(2), N = C !== "{" && C !== "&", D = /\*/.test(T);
    return {
      type: D ? "Decorator" : "MustacheStatement",
      path: d,
      params: x,
      hash: E,
      escaped: N,
      strip: A,
      loc: this.locInfo(M)
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
  function _(d, x, E, T, A, M) {
    T && T.path && s(d, T);
    var C = /\*/.test(d.open);
    x.blockParams = d.blockParams;
    var N = void 0, D = void 0;
    if (E) {
      if (C)
        throw new i.default("Unexpected inverse block on decorator", E);
      E.chain && (E.program.body[0].closeStrip = T.strip), D = E.strip, N = E.program;
    }
    return A && (A = N, N = x, x = A), {
      type: C ? "DecoratorBlock" : "BlockStatement",
      path: d.path,
      params: d.params,
      hash: d.hash,
      program: x,
      inverse: N,
      openStrip: d.strip,
      inverseStrip: D,
      closeStrip: T && T.strip,
      loc: this.locInfo(M)
    };
  }
  function m(d, x) {
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
  function g(d, x, E, T) {
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
function gE() {
  if (ly) return Ti;
  ly = 1, Ti.__esModule = !0, Ti.parseWithoutProcessing = b, Ti.parse = _;
  function t(m) {
    if (m && m.__esModule)
      return m;
    var g = {};
    if (m != null)
      for (var d in m)
        Object.prototype.hasOwnProperty.call(m, d) && (g[d] = m[d]);
    return g.default = m, g;
  }
  function r(m) {
    return m && m.__esModule ? m : { default: m };
  }
  var i = hE(), s = r(i), o = pE(), u = r(o), f = mE(), p = t(f), h = rn();
  Ti.parser = s.default;
  var y = {};
  h.extend(y, p);
  function b(m, g) {
    if (m.type === "Program")
      return m;
    s.default.yy = y, y.locInfo = function(x) {
      return new y.SourceLocation(g && g.srcName, x);
    };
    var d = s.default.parse(m);
    return d;
  }
  function _(m, g) {
    var d = b(m, g), x = new u.default(g);
    return x.accept(d);
  }
  return Ti;
}
var Oi = {}, oy;
function vE() {
  if (oy) return Oi;
  oy = 1, Oi.__esModule = !0, Oi.Compiler = p, Oi.precompile = h, Oi.compile = y;
  function t(m) {
    return m && m.__esModule ? m : { default: m };
  }
  var r = Fn(), i = t(r), s = rn(), o = I0(), u = t(o), f = [].slice;
  function p() {
  }
  p.prototype = {
    compiler: p,
    equals: function(g) {
      var d = this.opcodes.length;
      if (g.opcodes.length !== d)
        return !1;
      for (var x = 0; x < d; x++) {
        var E = this.opcodes[x], T = g.opcodes[x];
        if (E.opcode !== T.opcode || !b(E.args, T.args))
          return !1;
      }
      d = this.children.length;
      for (var x = 0; x < d; x++)
        if (!this.children[x].equals(g.children[x]))
          return !1;
      return !0;
    },
    guid: 0,
    compile: function(g, d) {
      return this.sourceNode = [], this.opcodes = [], this.children = [], this.options = d, this.stringParams = d.stringParams, this.trackIds = d.trackIds, d.blockParams = d.blockParams || [], d.knownHelpers = s.extend(/* @__PURE__ */ Object.create(null), {
        helperMissing: !0,
        blockHelperMissing: !0,
        each: !0,
        if: !0,
        unless: !0,
        with: !0,
        log: !0,
        lookup: !0
      }, d.knownHelpers), this.accept(g);
    },
    compileProgram: function(g) {
      var d = new this.compiler(), x = d.compile(g, this.options), E = this.guid++;
      return this.usePartial = this.usePartial || x.usePartial, this.children[E] = x, this.useDepths = this.useDepths || x.useDepths, E;
    },
    accept: function(g) {
      if (!this[g.type])
        throw new i.default("Unknown type: " + g.type, g);
      this.sourceNode.unshift(g);
      var d = this[g.type](g);
      return this.sourceNode.shift(), d;
    },
    Program: function(g) {
      this.options.blockParams.unshift(g.blockParams);
      for (var d = g.body, x = d.length, E = 0; E < x; E++)
        this.accept(d[E]);
      return this.options.blockParams.shift(), this.isSimple = x === 1, this.blockParams = g.blockParams ? g.blockParams.length : 0, this;
    },
    BlockStatement: function(g) {
      _(g);
      var d = g.program, x = g.inverse;
      d = d && this.compileProgram(d), x = x && this.compileProgram(x);
      var E = this.classifySexpr(g);
      E === "helper" ? this.helperSexpr(g, d, x) : E === "simple" ? (this.simpleSexpr(g), this.opcode("pushProgram", d), this.opcode("pushProgram", x), this.opcode("emptyHash"), this.opcode("blockValue", g.path.original)) : (this.ambiguousSexpr(g, d, x), this.opcode("pushProgram", d), this.opcode("pushProgram", x), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append");
    },
    DecoratorBlock: function(g) {
      var d = g.program && this.compileProgram(g.program), x = this.setupFullMustacheParams(g, d, void 0), E = g.path;
      this.useDecorators = !0, this.opcode("registerDecorator", x.length, E.original);
    },
    PartialStatement: function(g) {
      this.usePartial = !0;
      var d = g.program;
      d && (d = this.compileProgram(g.program));
      var x = g.params;
      if (x.length > 1)
        throw new i.default("Unsupported number of partial arguments: " + x.length, g);
      x.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : x.push({ type: "PathExpression", parts: [], depth: 0 }));
      var E = g.name.original, T = g.name.type === "SubExpression";
      T && this.accept(g.name), this.setupFullMustacheParams(g, d, void 0, !0);
      var A = g.indent || "";
      this.options.preventIndent && A && (this.opcode("appendContent", A), A = ""), this.opcode("invokePartial", T, E, A), this.opcode("append");
    },
    PartialBlockStatement: function(g) {
      this.PartialStatement(g);
    },
    MustacheStatement: function(g) {
      this.SubExpression(g), g.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append");
    },
    Decorator: function(g) {
      this.DecoratorBlock(g);
    },
    ContentStatement: function(g) {
      g.value && this.opcode("appendContent", g.value);
    },
    CommentStatement: function() {
    },
    SubExpression: function(g) {
      _(g);
      var d = this.classifySexpr(g);
      d === "simple" ? this.simpleSexpr(g) : d === "helper" ? this.helperSexpr(g) : this.ambiguousSexpr(g);
    },
    ambiguousSexpr: function(g, d, x) {
      var E = g.path, T = E.parts[0], A = d != null || x != null;
      this.opcode("getContext", E.depth), this.opcode("pushProgram", d), this.opcode("pushProgram", x), E.strict = !0, this.accept(E), this.opcode("invokeAmbiguous", T, A);
    },
    simpleSexpr: function(g) {
      var d = g.path;
      d.strict = !0, this.accept(d), this.opcode("resolvePossibleLambda");
    },
    helperSexpr: function(g, d, x) {
      var E = this.setupFullMustacheParams(g, d, x), T = g.path, A = T.parts[0];
      if (this.options.knownHelpers[A])
        this.opcode("invokeKnownHelper", E.length, A);
      else {
        if (this.options.knownHelpersOnly)
          throw new i.default("You specified knownHelpersOnly, but used the unknown helper " + A, g);
        T.strict = !0, T.falsy = !0, this.accept(T), this.opcode("invokeHelper", E.length, T.original, u.default.helpers.simpleId(T));
      }
    },
    PathExpression: function(g) {
      this.addDepth(g.depth), this.opcode("getContext", g.depth);
      var d = g.parts[0], x = u.default.helpers.scopedId(g), E = !g.depth && !x && this.blockParamIndex(d);
      E ? this.opcode("lookupBlockParam", E, g.parts) : d ? g.data ? (this.options.data = !0, this.opcode("lookupData", g.depth, g.parts, g.strict)) : this.opcode("lookupOnContext", g.parts, g.falsy, g.strict, x) : this.opcode("pushContext");
    },
    StringLiteral: function(g) {
      this.opcode("pushString", g.value);
    },
    NumberLiteral: function(g) {
      this.opcode("pushLiteral", g.value);
    },
    BooleanLiteral: function(g) {
      this.opcode("pushLiteral", g.value);
    },
    UndefinedLiteral: function() {
      this.opcode("pushLiteral", "undefined");
    },
    NullLiteral: function() {
      this.opcode("pushLiteral", "null");
    },
    Hash: function(g) {
      var d = g.pairs, x = 0, E = d.length;
      for (this.opcode("pushHash"); x < E; x++)
        this.pushParam(d[x].value);
      for (; x--; )
        this.opcode("assignToHash", d[x].key);
      this.opcode("popHash");
    },
    // HELPERS
    opcode: function(g) {
      this.opcodes.push({
        opcode: g,
        args: f.call(arguments, 1),
        loc: this.sourceNode[0].loc
      });
    },
    addDepth: function(g) {
      g && (this.useDepths = !0);
    },
    classifySexpr: function(g) {
      var d = u.default.helpers.simpleId(g.path), x = d && !!this.blockParamIndex(g.path.parts[0]), E = !x && u.default.helpers.helperExpression(g), T = !x && (E || d);
      if (T && !E) {
        var A = g.path.parts[0], M = this.options;
        M.knownHelpers[A] ? E = !0 : M.knownHelpersOnly && (T = !1);
      }
      return E ? "helper" : T ? "ambiguous" : "simple";
    },
    pushParams: function(g) {
      for (var d = 0, x = g.length; d < x; d++)
        this.pushParam(g[d]);
    },
    pushParam: function(g) {
      var d = g.value != null ? g.value : g.original || "";
      if (this.stringParams)
        d.replace && (d = d.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), g.depth && this.addDepth(g.depth), this.opcode("getContext", g.depth || 0), this.opcode("pushStringParam", d, g.type), g.type === "SubExpression" && this.accept(g);
      else {
        if (this.trackIds) {
          var x = void 0;
          if (g.parts && !u.default.helpers.scopedId(g) && !g.depth && (x = this.blockParamIndex(g.parts[0])), x) {
            var E = g.parts.slice(1).join(".");
            this.opcode("pushId", "BlockParam", x, E);
          } else
            d = g.original || d, d.replace && (d = d.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")), this.opcode("pushId", g.type, d);
        }
        this.accept(g);
      }
    },
    setupFullMustacheParams: function(g, d, x, E) {
      var T = g.params;
      return this.pushParams(T), this.opcode("pushProgram", d), this.opcode("pushProgram", x), g.hash ? this.accept(g.hash) : this.opcode("emptyHash", E), T;
    },
    blockParamIndex: function(g) {
      for (var d = 0, x = this.options.blockParams.length; d < x; d++) {
        var E = this.options.blockParams[d], T = E && s.indexOf(E, g);
        if (E && T >= 0)
          return [d, T];
      }
    }
  };
  function h(m, g, d) {
    if (m == null || typeof m != "string" && m.type !== "Program")
      throw new i.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + m);
    g = g || {}, "data" in g || (g.data = !0), g.compat && (g.useDepths = !0);
    var x = d.parse(m, g), E = new d.Compiler().compile(x, g);
    return new d.JavaScriptCompiler().compile(E, g);
  }
  function y(m, g, d) {
    if (g === void 0 && (g = {}), m == null || typeof m != "string" && m.type !== "Program")
      throw new i.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + m);
    g = s.extend({}, g), "data" in g || (g.data = !0), g.compat && (g.useDepths = !0);
    var x = void 0;
    function E() {
      var A = d.parse(m, g), M = new d.Compiler().compile(A, g), C = new d.JavaScriptCompiler().compile(M, g, void 0, !0);
      return d.template(C);
    }
    function T(A, M) {
      return x || (x = E()), x.call(this, A, M);
    }
    return T._setup = function(A) {
      return x || (x = E()), x._setup(A);
    }, T._child = function(A, M, C, N) {
      return x || (x = E()), x._child(A, M, C, N);
    }, T;
  }
  function b(m, g) {
    if (m === g)
      return !0;
    if (s.isArray(m) && s.isArray(g) && m.length === g.length) {
      for (var d = 0; d < m.length; d++)
        if (!b(m[d], g[d]))
          return !1;
      return !0;
    }
  }
  function _(m) {
    if (!m.path.parts) {
      var g = m.path;
      m.path = {
        type: "PathExpression",
        data: !1,
        depth: 0,
        parts: [g.original + ""],
        original: g.original + "",
        loc: g.loc
      };
    }
  }
  return Oi;
}
var $o = { exports: {} }, Qo = { exports: {} }, qs = {}, sd = {}, Jo = {}, Ko = {}, uy;
function yE() {
  if (uy) return Ko;
  uy = 1;
  var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return Ko.encode = function(r) {
    if (0 <= r && r < t.length)
      return t[r];
    throw new TypeError("Must be between 0 and 63: " + r);
  }, Ko.decode = function(r) {
    var i = 65, s = 90, o = 97, u = 122, f = 48, p = 57, h = 43, y = 47, b = 26, _ = 52;
    return i <= r && r <= s ? r - i : o <= r && r <= u ? r - o + b : f <= r && r <= p ? r - f + _ : r == h ? 62 : r == y ? 63 : -1;
  }, Ko;
}
var cy;
function U0() {
  if (cy) return Jo;
  cy = 1;
  var t = yE(), r = 5, i = 1 << r, s = i - 1, o = i;
  function u(p) {
    return p < 0 ? (-p << 1) + 1 : (p << 1) + 0;
  }
  function f(p) {
    var h = (p & 1) === 1, y = p >> 1;
    return h ? -y : y;
  }
  return Jo.encode = function(h) {
    var y = "", b, _ = u(h);
    do
      b = _ & s, _ >>>= r, _ > 0 && (b |= o), y += t.encode(b);
    while (_ > 0);
    return y;
  }, Jo.decode = function(h, y, b) {
    var _ = h.length, m = 0, g = 0, d, x;
    do {
      if (y >= _)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (x = t.decode(h.charCodeAt(y++)), x === -1)
        throw new Error("Invalid base64 digit: " + h.charAt(y - 1));
      d = !!(x & o), x &= s, m = m + (x << g), g += r;
    } while (d);
    b.value = f(m), b.rest = y;
  }, Jo;
}
var ld = {}, fy;
function ll() {
  return fy || (fy = 1, (function(t) {
    function r(C, N, D) {
      if (N in C)
        return C[N];
      if (arguments.length === 3)
        return D;
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
      var N = C, D = o(C);
      if (D) {
        if (!D.path)
          return C;
        N = D.path;
      }
      for (var k = t.isAbsolute(N), q = N.split(/\/+/), V, I = 0, G = q.length - 1; G >= 0; G--)
        V = q[G], V === "." ? q.splice(G, 1) : V === ".." ? I++ : I > 0 && (V === "" ? (q.splice(G + 1, I), I = 0) : (q.splice(G, 2), I--));
      return N = q.join("/"), N === "" && (N = k ? "/" : "."), D ? (D.path = N, u(D)) : N;
    }
    t.normalize = f;
    function p(C, N) {
      C === "" && (C = "."), N === "" && (N = ".");
      var D = o(N), k = o(C);
      if (k && (C = k.path || "/"), D && !D.scheme)
        return k && (D.scheme = k.scheme), u(D);
      if (D || N.match(s))
        return N;
      if (k && !k.host && !k.path)
        return k.host = N, u(k);
      var q = N.charAt(0) === "/" ? N : f(C.replace(/\/+$/, "") + "/" + N);
      return k ? (k.path = q, u(k)) : q;
    }
    t.join = p, t.isAbsolute = function(C) {
      return C.charAt(0) === "/" || i.test(C);
    };
    function h(C, N) {
      C === "" && (C = "."), C = C.replace(/\/$/, "");
      for (var D = 0; N.indexOf(C + "/") !== 0; ) {
        var k = C.lastIndexOf("/");
        if (k < 0 || (C = C.slice(0, k), C.match(/^([^\/]+:\/)?\/*$/)))
          return N;
        ++D;
      }
      return Array(D + 1).join("../") + N.substr(C.length + 1);
    }
    t.relative = h;
    var y = (function() {
      var C = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in C);
    })();
    function b(C) {
      return C;
    }
    function _(C) {
      return g(C) ? "$" + C : C;
    }
    t.toSetString = y ? b : _;
    function m(C) {
      return g(C) ? C.slice(1) : C;
    }
    t.fromSetString = y ? b : m;
    function g(C) {
      if (!C)
        return !1;
      var N = C.length;
      if (N < 9 || C.charCodeAt(N - 1) !== 95 || C.charCodeAt(N - 2) !== 95 || C.charCodeAt(N - 3) !== 111 || C.charCodeAt(N - 4) !== 116 || C.charCodeAt(N - 5) !== 111 || C.charCodeAt(N - 6) !== 114 || C.charCodeAt(N - 7) !== 112 || C.charCodeAt(N - 8) !== 95 || C.charCodeAt(N - 9) !== 95)
        return !1;
      for (var D = N - 10; D >= 0; D--)
        if (C.charCodeAt(D) !== 36)
          return !1;
      return !0;
    }
    function d(C, N, D) {
      var k = E(C.source, N.source);
      return k !== 0 || (k = C.originalLine - N.originalLine, k !== 0) || (k = C.originalColumn - N.originalColumn, k !== 0 || D) || (k = C.generatedColumn - N.generatedColumn, k !== 0) || (k = C.generatedLine - N.generatedLine, k !== 0) ? k : E(C.name, N.name);
    }
    t.compareByOriginalPositions = d;
    function x(C, N, D) {
      var k = C.generatedLine - N.generatedLine;
      return k !== 0 || (k = C.generatedColumn - N.generatedColumn, k !== 0 || D) || (k = E(C.source, N.source), k !== 0) || (k = C.originalLine - N.originalLine, k !== 0) || (k = C.originalColumn - N.originalColumn, k !== 0) ? k : E(C.name, N.name);
    }
    t.compareByGeneratedPositionsDeflated = x;
    function E(C, N) {
      return C === N ? 0 : C === null ? 1 : N === null ? -1 : C > N ? 1 : -1;
    }
    function T(C, N) {
      var D = C.generatedLine - N.generatedLine;
      return D !== 0 || (D = C.generatedColumn - N.generatedColumn, D !== 0) || (D = E(C.source, N.source), D !== 0) || (D = C.originalLine - N.originalLine, D !== 0) || (D = C.originalColumn - N.originalColumn, D !== 0) ? D : E(C.name, N.name);
    }
    t.compareByGeneratedPositionsInflated = T;
    function A(C) {
      return JSON.parse(C.replace(/^\)]}'[^\n]*\n/, ""));
    }
    t.parseSourceMapInput = A;
    function M(C, N, D) {
      if (N = N || "", C && (C[C.length - 1] !== "/" && N[0] !== "/" && (C += "/"), N = C + N), D) {
        var k = o(D);
        if (!k)
          throw new Error("sourceMapURL could not be parsed");
        if (k.path) {
          var q = k.path.lastIndexOf("/");
          q >= 0 && (k.path = k.path.substring(0, q + 1));
        }
        N = p(u(k), N);
      }
      return f(N);
    }
    t.computeSourceURL = M;
  })(ld)), ld;
}
var od = {}, dy;
function H0() {
  if (dy) return od;
  dy = 1;
  var t = ll(), r = Object.prototype.hasOwnProperty, i = typeof Map < "u";
  function s() {
    this._array = [], this._set = i ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  return s.fromArray = function(u, f) {
    for (var p = new s(), h = 0, y = u.length; h < y; h++)
      p.add(u[h], f);
    return p;
  }, s.prototype.size = function() {
    return i ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  }, s.prototype.add = function(u, f) {
    var p = i ? u : t.toSetString(u), h = i ? this.has(u) : r.call(this._set, p), y = this._array.length;
    (!h || f) && this._array.push(u), h || (i ? this._set.set(u, y) : this._set[p] = y);
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
function bE() {
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
function q0() {
  if (py) return sd;
  py = 1;
  var t = U0(), r = ll(), i = H0().ArraySet, s = bE().MappingList;
  function o(u) {
    u || (u = {}), this._file = r.getArg(u, "file", null), this._sourceRoot = r.getArg(u, "sourceRoot", null), this._skipValidation = r.getArg(u, "skipValidation", !1), this._sources = new i(), this._names = new i(), this._mappings = new s(), this._sourcesContents = null;
  }
  return o.prototype._version = 3, o.fromSourceMap = function(f) {
    var p = f.sourceRoot, h = new o({
      file: f.file,
      sourceRoot: p
    });
    return f.eachMapping(function(y) {
      var b = {
        generated: {
          line: y.generatedLine,
          column: y.generatedColumn
        }
      };
      y.source != null && (b.source = y.source, p != null && (b.source = r.relative(p, b.source)), b.original = {
        line: y.originalLine,
        column: y.originalColumn
      }, y.name != null && (b.name = y.name)), h.addMapping(b);
    }), f.sources.forEach(function(y) {
      var b = y;
      p !== null && (b = r.relative(p, y)), h._sources.has(b) || h._sources.add(b);
      var _ = f.sourceContentFor(y);
      _ != null && h.setSourceContent(y, _);
    }), h;
  }, o.prototype.addMapping = function(f) {
    var p = r.getArg(f, "generated"), h = r.getArg(f, "original", null), y = r.getArg(f, "source", null), b = r.getArg(f, "name", null);
    this._skipValidation || this._validateMapping(p, h, y, b), y != null && (y = String(y), this._sources.has(y) || this._sources.add(y)), b != null && (b = String(b), this._names.has(b) || this._names.add(b)), this._mappings.add({
      generatedLine: p.line,
      generatedColumn: p.column,
      originalLine: h != null && h.line,
      originalColumn: h != null && h.column,
      source: y,
      name: b
    });
  }, o.prototype.setSourceContent = function(f, p) {
    var h = f;
    this._sourceRoot != null && (h = r.relative(this._sourceRoot, h)), p != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[r.toSetString(h)] = p) : this._sourcesContents && (delete this._sourcesContents[r.toSetString(h)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  }, o.prototype.applySourceMap = function(f, p, h) {
    var y = p;
    if (p == null) {
      if (f.file == null)
        throw new Error(
          `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
        );
      y = f.file;
    }
    var b = this._sourceRoot;
    b != null && (y = r.relative(b, y));
    var _ = new i(), m = new i();
    this._mappings.unsortedForEach(function(g) {
      if (g.source === y && g.originalLine != null) {
        var d = f.originalPositionFor({
          line: g.originalLine,
          column: g.originalColumn
        });
        d.source != null && (g.source = d.source, h != null && (g.source = r.join(h, g.source)), b != null && (g.source = r.relative(b, g.source)), g.originalLine = d.line, g.originalColumn = d.column, d.name != null && (g.name = d.name));
      }
      var x = g.source;
      x != null && !_.has(x) && _.add(x);
      var E = g.name;
      E != null && !m.has(E) && m.add(E);
    }, this), this._sources = _, this._names = m, f.sources.forEach(function(g) {
      var d = f.sourceContentFor(g);
      d != null && (h != null && (g = r.join(h, g)), b != null && (g = r.relative(b, g)), this.setSourceContent(g, d));
    }, this);
  }, o.prototype._validateMapping = function(f, p, h, y) {
    if (p && typeof p.line != "number" && typeof p.column != "number")
      throw new Error(
        "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
      );
    if (!(f && "line" in f && "column" in f && f.line > 0 && f.column >= 0 && !p && !h && !y)) {
      if (f && "line" in f && "column" in f && p && "line" in p && "column" in p && f.line > 0 && f.column >= 0 && p.line > 0 && p.column >= 0 && h)
        return;
      throw new Error("Invalid mapping: " + JSON.stringify({
        generated: f,
        source: h,
        original: p,
        name: y
      }));
    }
  }, o.prototype._serializeMappings = function() {
    for (var f = 0, p = 1, h = 0, y = 0, b = 0, _ = 0, m = "", g, d, x, E, T = this._mappings.toArray(), A = 0, M = T.length; A < M; A++) {
      if (d = T[A], g = "", d.generatedLine !== p)
        for (f = 0; d.generatedLine !== p; )
          g += ";", p++;
      else if (A > 0) {
        if (!r.compareByGeneratedPositionsInflated(d, T[A - 1]))
          continue;
        g += ",";
      }
      g += t.encode(d.generatedColumn - f), f = d.generatedColumn, d.source != null && (E = this._sources.indexOf(d.source), g += t.encode(E - _), _ = E, g += t.encode(d.originalLine - 1 - y), y = d.originalLine - 1, g += t.encode(d.originalColumn - h), h = d.originalColumn, d.name != null && (x = this._names.indexOf(d.name), g += t.encode(x - b), b = x)), m += g;
    }
    return m;
  }, o.prototype._generateSourcesContent = function(f, p) {
    return f.map(function(h) {
      if (!this._sourcesContents)
        return null;
      p != null && (h = r.relative(p, h));
      var y = r.toSetString(h);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, y) ? this._sourcesContents[y] : null;
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
function _E() {
  return my || (my = 1, (function(t) {
    t.GREATEST_LOWER_BOUND = 1, t.LEAST_UPPER_BOUND = 2;
    function r(i, s, o, u, f, p) {
      var h = Math.floor((s - i) / 2) + i, y = f(o, u[h], !0);
      return y === 0 ? h : y > 0 ? s - h > 1 ? r(h, s, o, u, f, p) : p == t.LEAST_UPPER_BOUND ? s < u.length ? s : -1 : h : h - i > 1 ? r(i, h, o, u, f, p) : p == t.LEAST_UPPER_BOUND ? h : i < 0 ? -1 : i;
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
function SE() {
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
      for (var y = s[f], b = u; b < f; b++)
        o(s[b], y) <= 0 && (h += 1, t(s, h, b));
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
function xE() {
  if (vy) return Fs;
  vy = 1;
  var t = ll(), r = _E(), i = H0().ArraySet, s = U0(), o = SE().quickSort;
  function u(y, b) {
    var _ = y;
    return typeof y == "string" && (_ = t.parseSourceMapInput(y)), _.sections != null ? new h(_, b) : new f(_, b);
  }
  u.fromSourceMap = function(y, b) {
    return f.fromSourceMap(y, b);
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
    var g = _ || null, d = m || u.GENERATED_ORDER, x;
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
    }, this).forEach(b, g);
  }, u.prototype.allGeneratedPositionsFor = function(b) {
    var _ = t.getArg(b, "line"), m = {
      source: t.getArg(b, "source"),
      originalLine: _,
      originalColumn: t.getArg(b, "column", 0)
    };
    if (m.source = this._findSourceIndex(m.source), m.source < 0)
      return [];
    var g = [], d = this._findMapping(
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
        for (var E = x.originalLine; x && x.originalLine === E; )
          g.push({
            line: t.getArg(x, "generatedLine", null),
            column: t.getArg(x, "generatedColumn", null),
            lastColumn: t.getArg(x, "lastGeneratedColumn", null)
          }), x = this._originalMappings[++d];
      else
        for (var T = x.originalColumn; x && x.originalLine === _ && x.originalColumn == T; )
          g.push({
            line: t.getArg(x, "generatedLine", null),
            column: t.getArg(x, "generatedColumn", null),
            lastColumn: t.getArg(x, "lastGeneratedColumn", null)
          }), x = this._originalMappings[++d];
    }
    return g;
  }, Fs.SourceMapConsumer = u;
  function f(y, b) {
    var _ = y;
    typeof y == "string" && (_ = t.parseSourceMapInput(y));
    var m = t.getArg(_, "version"), g = t.getArg(_, "sources"), d = t.getArg(_, "names", []), x = t.getArg(_, "sourceRoot", null), E = t.getArg(_, "sourcesContent", null), T = t.getArg(_, "mappings"), A = t.getArg(_, "file", null);
    if (m != this._version)
      throw new Error("Unsupported version: " + m);
    x && (x = t.normalize(x)), g = g.map(String).map(t.normalize).map(function(M) {
      return x && t.isAbsolute(x) && t.isAbsolute(M) ? t.relative(x, M) : M;
    }), this._names = i.fromArray(d.map(String), !0), this._sources = i.fromArray(g, !0), this._absoluteSources = this._sources.toArray().map(function(M) {
      return t.computeSourceURL(x, M, b);
    }), this.sourceRoot = x, this.sourcesContent = E, this._mappings = T, this._sourceMapURL = b, this.file = A;
  }
  f.prototype = Object.create(u.prototype), f.prototype.consumer = u, f.prototype._findSourceIndex = function(y) {
    var b = y;
    if (this.sourceRoot != null && (b = t.relative(this.sourceRoot, b)), this._sources.has(b))
      return this._sources.indexOf(b);
    var _;
    for (_ = 0; _ < this._absoluteSources.length; ++_)
      if (this._absoluteSources[_] == y)
        return _;
    return -1;
  }, f.fromSourceMap = function(b, _) {
    var m = Object.create(f.prototype), g = m._names = i.fromArray(b._names.toArray(), !0), d = m._sources = i.fromArray(b._sources.toArray(), !0);
    m.sourceRoot = b._sourceRoot, m.sourcesContent = b._generateSourcesContent(
      m._sources.toArray(),
      m.sourceRoot
    ), m.file = b._file, m._sourceMapURL = _, m._absoluteSources = m._sources.toArray().map(function(D) {
      return t.computeSourceURL(m.sourceRoot, D, _);
    });
    for (var x = b._mappings.toArray().slice(), E = m.__generatedMappings = [], T = m.__originalMappings = [], A = 0, M = x.length; A < M; A++) {
      var C = x[A], N = new p();
      N.generatedLine = C.generatedLine, N.generatedColumn = C.generatedColumn, C.source && (N.source = d.indexOf(C.source), N.originalLine = C.originalLine, N.originalColumn = C.originalColumn, C.name && (N.name = g.indexOf(C.name)), T.push(N)), E.push(N);
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
    for (var m = 1, g = 0, d = 0, x = 0, E = 0, T = 0, A = b.length, M = 0, C = {}, N = {}, D = [], k = [], q, V, I, G, Y; M < A; )
      if (b.charAt(M) === ";")
        m++, M++, g = 0;
      else if (b.charAt(M) === ",")
        M++;
      else {
        for (q = new p(), q.generatedLine = m, G = M; G < A && !this._charIsMappingSeparator(b, G); G++)
          ;
        if (V = b.slice(M, G), I = C[V], I)
          M += V.length;
        else {
          for (I = []; M < G; )
            s.decode(b, M, N), Y = N.value, M = N.rest, I.push(Y);
          if (I.length === 2)
            throw new Error("Found a source, but no line and column");
          if (I.length === 3)
            throw new Error("Found a source and line, but no column");
          C[V] = I;
        }
        q.generatedColumn = g + I[0], g = q.generatedColumn, I.length > 1 && (q.source = E + I[1], E += I[1], q.originalLine = d + I[2], d = q.originalLine, q.originalLine += 1, q.originalColumn = x + I[3], x = q.originalColumn, I.length > 4 && (q.name = T + I[4], T += I[4])), k.push(q), typeof q.originalLine == "number" && D.push(q);
      }
    o(k, t.compareByGeneratedPositionsDeflated), this.__generatedMappings = k, o(D, t.compareByOriginalPositions), this.__originalMappings = D;
  }, f.prototype._findMapping = function(b, _, m, g, d, x) {
    if (b[m] <= 0)
      throw new TypeError("Line must be greater than or equal to 1, got " + b[m]);
    if (b[g] < 0)
      throw new TypeError("Column must be greater than or equal to 0, got " + b[g]);
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
      var g = this._generatedMappings[m];
      if (g.generatedLine === _.generatedLine) {
        var d = t.getArg(g, "source", null);
        d !== null && (d = this._sources.at(d), d = t.computeSourceURL(this.sourceRoot, d, this._sourceMapURL));
        var x = t.getArg(g, "name", null);
        return x !== null && (x = this._names.at(x)), {
          source: d,
          line: t.getArg(g, "originalLine", null),
          column: t.getArg(g, "originalColumn", null),
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
    var g = b;
    this.sourceRoot != null && (g = t.relative(this.sourceRoot, g));
    var d;
    if (this.sourceRoot != null && (d = t.urlParse(this.sourceRoot))) {
      var x = g.replace(/^file:\/\//, "");
      if (d.scheme == "file" && this._sources.has(x))
        return this.sourcesContent[this._sources.indexOf(x)];
      if ((!d.path || d.path == "/") && this._sources.has("/" + g))
        return this.sourcesContent[this._sources.indexOf("/" + g)];
    }
    if (_)
      return null;
    throw new Error('"' + g + '" is not in the SourceMap.');
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
    }, g = this._findMapping(
      m,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      t.compareByOriginalPositions,
      t.getArg(b, "bias", u.GREATEST_LOWER_BOUND)
    );
    if (g >= 0) {
      var d = this._originalMappings[g];
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
  function h(y, b) {
    var _ = y;
    typeof y == "string" && (_ = t.parseSourceMapInput(y));
    var m = t.getArg(_, "version"), g = t.getArg(_, "sections");
    if (m != this._version)
      throw new Error("Unsupported version: " + m);
    this._sources = new i(), this._names = new i();
    var d = {
      line: -1,
      column: 0
    };
    this._sections = g.map(function(x) {
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
      for (var y = [], b = 0; b < this._sections.length; b++)
        for (var _ = 0; _ < this._sections[b].consumer.sources.length; _++)
          y.push(this._sections[b].consumer.sources[_]);
      return y;
    }
  }), h.prototype.originalPositionFor = function(b) {
    var _ = {
      generatedLine: t.getArg(b, "line"),
      generatedColumn: t.getArg(b, "column")
    }, m = r.search(
      _,
      this._sections,
      function(d, x) {
        var E = d.generatedLine - x.generatedOffset.generatedLine;
        return E || d.generatedColumn - x.generatedOffset.generatedColumn;
      }
    ), g = this._sections[m];
    return g ? g.consumer.originalPositionFor({
      line: _.generatedLine - (g.generatedOffset.generatedLine - 1),
      column: _.generatedColumn - (g.generatedOffset.generatedLine === _.generatedLine ? g.generatedOffset.generatedColumn - 1 : 0),
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
      var g = this._sections[m], d = g.consumer.sourceContentFor(b, !0);
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
        var g = m.consumer.generatedPositionFor(b);
        if (g) {
          var d = {
            line: g.line + (m.generatedOffset.generatedLine - 1),
            column: g.column + (m.generatedOffset.generatedLine === g.line ? m.generatedOffset.generatedColumn - 1 : 0)
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
      for (var g = this._sections[m], d = g.consumer._generatedMappings, x = 0; x < d.length; x++) {
        var E = d[x], T = g.consumer._sources.at(E.source);
        T = t.computeSourceURL(g.consumer.sourceRoot, T, this._sourceMapURL), this._sources.add(T), T = this._sources.indexOf(T);
        var A = null;
        E.name && (A = g.consumer._names.at(E.name), this._names.add(A), A = this._names.indexOf(A));
        var M = {
          source: T,
          generatedLine: E.generatedLine + (g.generatedOffset.generatedLine - 1),
          generatedColumn: E.generatedColumn + (g.generatedOffset.generatedLine === E.generatedLine ? g.generatedOffset.generatedColumn - 1 : 0),
          originalLine: E.originalLine,
          originalColumn: E.originalColumn,
          name: A
        };
        this.__generatedMappings.push(M), typeof M.originalLine == "number" && this.__originalMappings.push(M);
      }
    o(this.__generatedMappings, t.compareByGeneratedPositionsDeflated), o(this.__originalMappings, t.compareByOriginalPositions);
  }, Fs.IndexedSourceMapConsumer = h, Fs;
}
var dd = {}, yy;
function EE() {
  if (yy) return dd;
  yy = 1;
  var t = q0().SourceMapGenerator, r = ll(), i = /(\r?\n)/, s = 10, o = "$$$isSourceNode$$$";
  function u(f, p, h, y, b) {
    this.children = [], this.sourceContents = {}, this.line = f ?? null, this.column = p ?? null, this.source = h ?? null, this.name = b ?? null, this[o] = !0, y != null && this.add(y);
  }
  return u.fromStringWithSourceMap = function(p, h, y) {
    var b = new u(), _ = p.split(i), m = 0, g = function() {
      var A = C(), M = C() || "";
      return A + M;
      function C() {
        return m < _.length ? _[m++] : void 0;
      }
    }, d = 1, x = 0, E = null;
    return h.eachMapping(function(A) {
      if (E !== null)
        if (d < A.generatedLine)
          T(E, g()), d++, x = 0;
        else {
          var M = _[m] || "", C = M.substr(0, A.generatedColumn - x);
          _[m] = M.substr(A.generatedColumn - x), x = A.generatedColumn, T(E, C), E = A;
          return;
        }
      for (; d < A.generatedLine; )
        b.add(g()), d++;
      if (x < A.generatedColumn) {
        var M = _[m] || "";
        b.add(M.substr(0, A.generatedColumn)), _[m] = M.substr(A.generatedColumn), x = A.generatedColumn;
      }
      E = A;
    }, this), m < _.length && (E && T(E, g()), b.add(_.splice(m).join(""))), h.sources.forEach(function(A) {
      var M = h.sourceContentFor(A);
      M != null && (y != null && (A = r.join(y, A)), b.setSourceContent(A, M));
    }), b;
    function T(A, M) {
      if (A === null || A.source === void 0)
        b.add(M);
      else {
        var C = y ? r.join(y, A.source) : A.source;
        b.add(new u(
          A.originalLine,
          A.originalColumn,
          C,
          M,
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
    for (var h, y = 0, b = this.children.length; y < b; y++)
      h = this.children[y], h[o] ? h.walk(p) : h !== "" && p(h, {
        source: this.source,
        line: this.line,
        column: this.column,
        name: this.name
      });
  }, u.prototype.join = function(p) {
    var h, y, b = this.children.length;
    if (b > 0) {
      for (h = [], y = 0; y < b - 1; y++)
        h.push(this.children[y]), h.push(p);
      h.push(this.children[y]), this.children = h;
    }
    return this;
  }, u.prototype.replaceRight = function(p, h) {
    var y = this.children[this.children.length - 1];
    return y[o] ? y.replaceRight(p, h) : typeof y == "string" ? this.children[this.children.length - 1] = y.replace(p, h) : this.children.push("".replace(p, h)), this;
  }, u.prototype.setSourceContent = function(p, h) {
    this.sourceContents[r.toSetString(p)] = h;
  }, u.prototype.walkSourceContents = function(p) {
    for (var h = 0, y = this.children.length; h < y; h++)
      this.children[h][o] && this.children[h].walkSourceContents(p);
    for (var b = Object.keys(this.sourceContents), h = 0, y = b.length; h < y; h++)
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
    }, y = new t(p), b = !1, _ = null, m = null, g = null, d = null;
    return this.walk(function(x, E) {
      h.code += x, E.source !== null && E.line !== null && E.column !== null ? ((_ !== E.source || m !== E.line || g !== E.column || d !== E.name) && y.addMapping({
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
      }), _ = E.source, m = E.line, g = E.column, d = E.name, b = !0) : b && (y.addMapping({
        generated: {
          line: h.line,
          column: h.column
        }
      }), _ = null, b = !1);
      for (var T = 0, A = x.length; T < A; T++)
        x.charCodeAt(T) === s ? (h.line++, h.column = 0, T + 1 === A ? (_ = null, b = !1) : b && y.addMapping({
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
      y.setSourceContent(x, E);
    }), { code: h.code, map: y };
  }, dd.SourceNode = u, dd;
}
var by;
function CE() {
  return by || (by = 1, qs.SourceMapGenerator = q0().SourceMapGenerator, qs.SourceMapConsumer = xE().SourceMapConsumer, qs.SourceNode = EE().SourceNode), qs;
}
var _y;
function wE() {
  return _y || (_y = 1, (function(t, r) {
    r.__esModule = !0;
    var i = rn(), s = void 0;
    try {
      var o = CE();
      s = o.SourceNode;
    } catch {
    }
    s || (s = function(p, h, y, b) {
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
    function u(p, h, y) {
      if (i.isArray(p)) {
        for (var b = [], _ = 0, m = p.length; _ < m; _++)
          b.push(h.wrap(p[_], y));
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
      prepend: function(h, y) {
        this.source.unshift(this.wrap(h, y));
      },
      push: function(h, y) {
        this.source.push(this.wrap(h, y));
      },
      merge: function() {
        var h = this.empty();
        return this.each(function(y) {
          h.add(["  ", y, `
`]);
        }), h;
      },
      each: function(h) {
        for (var y = 0, b = this.source.length; y < b; y++)
          h(this.source[y]);
      },
      empty: function() {
        var h = this.currentLocation || { start: {} };
        return new s(h.start.line, h.start.column, this.srcFile);
      },
      wrap: function(h) {
        var y = arguments.length <= 1 || arguments[1] === void 0 ? this.currentLocation || { start: {} } : arguments[1];
        return h instanceof s ? h : (h = u(h, this, y), new s(y.start.line, y.start.column, this.srcFile, h));
      },
      functionCall: function(h, y, b) {
        return b = this.generateList(b), this.wrap([h, y ? "." + y + "(" : "(", b, ")"]);
      },
      quotedString: function(h) {
        return '"' + (h + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
      },
      objectLiteral: function(h) {
        var y = this, b = [];
        Object.keys(h).forEach(function(m) {
          var g = u(h[m], y);
          g !== "undefined" && b.push([y.quotedString(m), ":", g]);
        });
        var _ = this.generateList(b);
        return _.prepend("{"), _.add("}"), _;
      },
      generateList: function(h) {
        for (var y = this.empty(), b = 0, _ = h.length; b < _; b++)
          b && y.add(","), y.add(u(h[b], this));
        return y;
      },
      generateArray: function(h) {
        var y = this.generateList(h);
        return y.prepend("["), y.add("]"), y;
      }
    }, r.default = f, t.exports = r.default;
  })(Qo, Qo.exports)), Qo.exports;
}
var Sy;
function AE() {
  return Sy || (Sy = 1, (function(t, r) {
    r.__esModule = !0;
    function i(m) {
      return m && m.__esModule ? m : { default: m };
    }
    var s = th(), o = Fn(), u = i(o), f = rn(), p = wE(), h = i(p);
    function y(m) {
      this.value = m;
    }
    function b() {
    }
    b.prototype = {
      // PUBLIC API: You can override these methods in a subclass to provide
      // alternative compiled forms for name lookup and buffering semantics
      nameLookup: function(g, d) {
        return this.internalNameLookup(g, d);
      },
      depthedLookup: function(g) {
        return [this.aliasable("container.lookup"), "(depths, ", JSON.stringify(g), ")"];
      },
      compilerInfo: function() {
        var g = s.COMPILER_REVISION, d = s.REVISION_CHANGES[g];
        return [g, d];
      },
      appendToBuffer: function(g, d, x) {
        return f.isArray(g) || (g = [g]), g = this.source.wrap(g, d), this.environment.isSimple ? ["return ", g, ";"] : x ? ["buffer += ", g, ";"] : (g.appendToBuffer = !0, g);
      },
      initializeBuffer: function() {
        return this.quotedString("");
      },
      // END PUBLIC API
      internalNameLookup: function(g, d) {
        return this.lookupPropertyFunctionIsUsed = !0, ["lookupProperty(", g, ",", JSON.stringify(d), ")"];
      },
      lookupPropertyFunctionIsUsed: !1,
      compile: function(g, d, x, E) {
        this.environment = g, this.options = d, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !E, this.name = this.environment.name, this.isChild = !!x, this.context = x || {
          decorators: [],
          programs: [],
          environments: []
        }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = { list: [] }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(g, d), this.useDepths = this.useDepths || g.useDepths || g.useDecorators || this.options.compat, this.useBlockParams = this.useBlockParams || g.useBlockParams;
        var T = g.opcodes, A = void 0, M = void 0, C = void 0, N = void 0;
        for (C = 0, N = T.length; C < N; C++)
          A = T[C], this.source.currentLocation = A.loc, M = M || A.loc, this[A.opcode].apply(this, A.args);
        if (this.source.currentLocation = M, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length)
          throw new u.default("Compile completed with content left on stack");
        this.decorators.isEmpty() ? this.decorators = void 0 : (this.useDecorators = !0, this.decorators.prepend(["var decorators = container.decorators, ", this.lookupPropertyFunctionVarDeclaration(), `;
`]), this.decorators.push("return fn;"), E ? this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]) : (this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`), this.decorators.push(`}
`), this.decorators = this.decorators.merge()));
        var D = this.createFunctionContext(E);
        if (this.isChild)
          return D;
        var k = {
          compiler: this.compilerInfo(),
          main: D
        };
        this.decorators && (k.main_d = this.decorators, k.useDecorators = !0);
        var q = this.context, V = q.programs, I = q.decorators;
        for (C = 0, N = V.length; C < N; C++)
          V[C] && (k[C] = V[C], I[C] && (k[C + "_d"] = I[C], k.useDecorators = !0));
        return this.environment.usePartial && (k.usePartial = !0), this.options.data && (k.useData = !0), this.useDepths && (k.useDepths = !0), this.useBlockParams && (k.useBlockParams = !0), this.options.compat && (k.compat = !0), E ? k.compilerOptions = this.options : (k.compiler = JSON.stringify(k.compiler), this.source.currentLocation = { start: { line: 1, column: 0 } }, k = this.objectLiteral(k), d.srcName ? (k = k.toStringWithSourceMap({ file: d.destName }), k.map = k.map && k.map.toString()) : k = k.toString()), k;
      },
      preamble: function() {
        this.lastContext = 0, this.source = new h.default(this.options.srcName), this.decorators = new h.default(this.options.srcName);
      },
      createFunctionContext: function(g) {
        var d = this, x = "", E = this.stackVars.concat(this.registers.list);
        E.length > 0 && (x += ", " + E.join(", "));
        var T = 0;
        Object.keys(this.aliases).forEach(function(C) {
          var N = d.aliases[C];
          N.children && N.referenceCount > 1 && (x += ", alias" + ++T + "=" + C, N.children[0] = "alias" + T);
        }), this.lookupPropertyFunctionIsUsed && (x += ", " + this.lookupPropertyFunctionVarDeclaration());
        var A = ["container", "depth0", "helpers", "partials", "data"];
        (this.useBlockParams || this.useDepths) && A.push("blockParams"), this.useDepths && A.push("depths");
        var M = this.mergeSource(x);
        return g ? (A.push(M), Function.apply(this, A)) : this.source.wrap(["function(", A.join(","), `) {
  `, M, "}"]);
      },
      mergeSource: function(g) {
        var d = this.environment.isSimple, x = !this.forceBuffer, E = void 0, T = void 0, A = void 0, M = void 0;
        return this.source.each(function(C) {
          C.appendToBuffer ? (A ? C.prepend("  + ") : A = C, M = C) : (A && (T ? A.prepend("buffer += ") : E = !0, M.add(";"), A = M = void 0), T = !0, d || (x = !1));
        }), x ? A ? (A.prepend("return "), M.add(";")) : T || this.source.push('return "";') : (g += ", buffer = " + (E ? "" : this.initializeBuffer()), A ? (A.prepend("return buffer + "), M.add(";")) : this.source.push("return buffer;")), g && this.source.prepend("var " + g.substring(2) + (E ? "" : `;
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
      blockValue: function(g) {
        var d = this.aliasable("container.hooks.blockHelperMissing"), x = [this.contextName(0)];
        this.setupHelperArgs(g, 0, x);
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
        var g = this.aliasable("container.hooks.blockHelperMissing"), d = [this.contextName(0)];
        this.setupHelperArgs("", 0, d, !0), this.flushInline();
        var x = this.topStack();
        d.splice(1, 0, x), this.pushSource(["if (!", this.lastHelper, ") { ", x, " = ", this.source.functionCall(g, "call", d), "}"]);
      },
      // [appendContent]
      //
      // On stack, before: ...
      // On stack, after: ...
      //
      // Appends the string value of `content` to the current buffer
      appendContent: function(g) {
        this.pendingContent ? g = this.pendingContent + g : this.pendingLocation = this.source.currentLocation, this.pendingContent = g;
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
          var g = this.popStack();
          this.pushSource(["if (", g, " != null) { ", this.appendToBuffer(g, void 0, !0), " }"]), this.environment.isSimple && this.pushSource(["else { ", this.appendToBuffer("''", void 0, !0), " }"]);
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
      getContext: function(g) {
        this.lastContext = g;
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
      lookupOnContext: function(g, d, x, E) {
        var T = 0;
        !E && this.options.compat && !this.lastContext ? this.push(this.depthedLookup(g[T++])) : this.pushContext(), this.resolvePath("context", g, T, d, x);
      },
      // [lookupBlockParam]
      //
      // On stack, before: ...
      // On stack, after: blockParam[name], ...
      //
      // Looks up the value of `parts` on the given block param and pushes
      // it onto the stack.
      lookupBlockParam: function(g, d) {
        this.useBlockParams = !0, this.push(["blockParams[", g[0], "][", g[1], "]"]), this.resolvePath("context", d, 1);
      },
      // [lookupData]
      //
      // On stack, before: ...
      // On stack, after: data, ...
      //
      // Push the data lookup operator
      lookupData: function(g, d, x) {
        g ? this.pushStackLiteral("container.data(data, " + g + ")") : this.pushStackLiteral("data"), this.resolvePath("data", d, 0, !0, x);
      },
      resolvePath: function(g, d, x, E, T) {
        var A = this;
        if (this.options.strict || this.options.assumeObjects) {
          this.push(_(this.options.strict && T, this, d, x, g));
          return;
        }
        for (var M = d.length; x < M; x++)
          this.replaceStack(function(C) {
            var N = A.nameLookup(C, d[x], g);
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
      pushStringParam: function(g, d) {
        this.pushContext(), this.pushString(d), d !== "SubExpression" && (typeof g == "string" ? this.pushString(g) : this.pushStackLiteral(g));
      },
      emptyHash: function(g) {
        this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}")), this.pushStackLiteral(g ? "undefined" : "{}");
      },
      pushHash: function() {
        this.hash && this.hashes.push(this.hash), this.hash = { values: {}, types: [], contexts: [], ids: [] };
      },
      popHash: function() {
        var g = this.hash;
        this.hash = this.hashes.pop(), this.trackIds && this.push(this.objectLiteral(g.ids)), this.stringParams && (this.push(this.objectLiteral(g.contexts)), this.push(this.objectLiteral(g.types))), this.push(this.objectLiteral(g.values));
      },
      // [pushString]
      //
      // On stack, before: ...
      // On stack, after: quotedString(string), ...
      //
      // Push a quoted version of `string` onto the stack
      pushString: function(g) {
        this.pushStackLiteral(this.quotedString(g));
      },
      // [pushLiteral]
      //
      // On stack, before: ...
      // On stack, after: value, ...
      //
      // Pushes a value onto the stack. This operation prevents
      // the compiler from creating a temporary variable to hold
      // it.
      pushLiteral: function(g) {
        this.pushStackLiteral(g);
      },
      // [pushProgram]
      //
      // On stack, before: ...
      // On stack, after: program(guid), ...
      //
      // Push a program expression onto the stack. This takes
      // a compile-time guid and converts it into a runtime-accessible
      // expression.
      pushProgram: function(g) {
        g != null ? this.pushStackLiteral(this.programExpression(g)) : this.pushStackLiteral(null);
      },
      // [registerDecorator]
      //
      // On stack, before: hash, program, params..., ...
      // On stack, after: ...
      //
      // Pops off the decorator's parameters, invokes the decorator,
      // and inserts the decorator into the decorators list.
      registerDecorator: function(g, d) {
        var x = this.nameLookup("decorators", d, "decorator"), E = this.setupHelperArgs(d, g);
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
      invokeHelper: function(g, d, x) {
        var E = this.popStack(), T = this.setupHelper(g, d), A = [];
        x && A.push(T.name), A.push(E), this.options.strict || A.push(this.aliasable("container.hooks.helperMissing"));
        var M = ["(", this.itemsSeparatedBy(A, "||"), ")"], C = this.source.functionCall(M, "call", T.callParams);
        this.push(C);
      },
      itemsSeparatedBy: function(g, d) {
        var x = [];
        x.push(g[0]);
        for (var E = 1; E < g.length; E++)
          x.push(d, g[E]);
        return x;
      },
      // [invokeKnownHelper]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of helper invocation
      //
      // This operation is used when the helper is known to exist,
      // so a `helperMissing` fallback is not required.
      invokeKnownHelper: function(g, d) {
        var x = this.setupHelper(g, d);
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
      invokeAmbiguous: function(g, d) {
        this.useRegister("helper");
        var x = this.popStack();
        this.emptyHash();
        var E = this.setupHelper(0, g, d), T = this.lastHelper = this.nameLookup("helpers", g, "helper"), A = ["(", "(helper = ", T, " || ", x, ")"];
        this.options.strict || (A[0] = "(helper = ", A.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"))), this.push(["(", A, E.paramsInit ? ["),(", E.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", E.callParams), " : helper))"]);
      },
      // [invokePartial]
      //
      // On stack, before: context, ...
      // On stack after: result of partial invocation
      //
      // This operation pops off a context, invokes a partial with that context,
      // and pushes the result of the invocation back.
      invokePartial: function(g, d, x) {
        var E = [], T = this.setupParams(d, 1, E);
        g && (d = this.popStack(), delete T.name), x && (T.indent = JSON.stringify(x)), T.helpers = "helpers", T.partials = "partials", T.decorators = "container.decorators", g ? E.unshift(d) : E.unshift(this.nameLookup("partials", d, "partial")), this.options.compat && (T.depths = "depths"), T = this.objectLiteral(T), E.push(T), this.push(this.source.functionCall("container.invokePartial", "", E));
      },
      // [assignToHash]
      //
      // On stack, before: value, ..., hash, ...
      // On stack, after: ..., hash, ...
      //
      // Pops a value off the stack and assigns it to the current hash
      assignToHash: function(g) {
        var d = this.popStack(), x = void 0, E = void 0, T = void 0;
        this.trackIds && (T = this.popStack()), this.stringParams && (E = this.popStack(), x = this.popStack());
        var A = this.hash;
        x && (A.contexts[g] = x), E && (A.types[g] = E), T && (A.ids[g] = T), A.values[g] = d;
      },
      pushId: function(g, d, x) {
        g === "BlockParam" ? this.pushStackLiteral("blockParams[" + d[0] + "].path[" + d[1] + "]" + (x ? " + " + JSON.stringify("." + x) : "")) : g === "PathExpression" ? this.pushString(d) : g === "SubExpression" ? this.pushStackLiteral("true") : this.pushStackLiteral("null");
      },
      // HELPERS
      compiler: b,
      compileChildren: function(g, d) {
        for (var x = g.children, E = void 0, T = void 0, A = 0, M = x.length; A < M; A++) {
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
      matchExistingProgram: function(g) {
        for (var d = 0, x = this.context.environments.length; d < x; d++) {
          var E = this.context.environments[d];
          if (E && E.equals(g))
            return E;
        }
      },
      programExpression: function(g) {
        var d = this.environment.children[g], x = [d.index, "data", d.blockParams];
        return (this.useBlockParams || this.useDepths) && x.push("blockParams"), this.useDepths && x.push("depths"), "container.program(" + x.join(", ") + ")";
      },
      useRegister: function(g) {
        this.registers[g] || (this.registers[g] = !0, this.registers.list.push(g));
      },
      push: function(g) {
        return g instanceof y || (g = this.source.wrap(g)), this.inlineStack.push(g), g;
      },
      pushStackLiteral: function(g) {
        this.push(new y(g));
      },
      pushSource: function(g) {
        this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), this.pendingContent = void 0), g && this.source.push(g);
      },
      replaceStack: function(g) {
        var d = ["("], x = void 0, E = void 0, T = void 0;
        if (!this.isInline())
          throw new u.default("replaceStack on non-inline");
        var A = this.popStack(!0);
        if (A instanceof y)
          x = [A.value], d = ["(", x], T = !0;
        else {
          E = !0;
          var M = this.incrStack();
          d = ["((", this.push(M), " = ", A, ")"], x = this.topStack();
        }
        var C = g.call(this, x);
        T || this.popStack(), E && this.stackSlot--, this.push(d.concat(C, ")"));
      },
      incrStack: function() {
        return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName();
      },
      topStackName: function() {
        return "stack" + this.stackSlot;
      },
      flushInline: function() {
        var g = this.inlineStack;
        this.inlineStack = [];
        for (var d = 0, x = g.length; d < x; d++) {
          var E = g[d];
          if (E instanceof y)
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
      popStack: function(g) {
        var d = this.isInline(), x = (d ? this.inlineStack : this.compileStack).pop();
        if (!g && x instanceof y)
          return x.value;
        if (!d) {
          if (!this.stackSlot)
            throw new u.default("Invalid stack pop");
          this.stackSlot--;
        }
        return x;
      },
      topStack: function() {
        var g = this.isInline() ? this.inlineStack : this.compileStack, d = g[g.length - 1];
        return d instanceof y ? d.value : d;
      },
      contextName: function(g) {
        return this.useDepths && g ? "depths[" + g + "]" : "depth" + g;
      },
      quotedString: function(g) {
        return this.source.quotedString(g);
      },
      objectLiteral: function(g) {
        return this.source.objectLiteral(g);
      },
      aliasable: function(g) {
        var d = this.aliases[g];
        return d ? (d.referenceCount++, d) : (d = this.aliases[g] = this.source.wrap(g), d.aliasable = !0, d.referenceCount = 1, d);
      },
      setupHelper: function(g, d, x) {
        var E = [], T = this.setupHelperArgs(d, g, E, x), A = this.nameLookup("helpers", d, "helper"), M = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
        return {
          params: E,
          paramsInit: T,
          name: A,
          callParams: [M].concat(E)
        };
      },
      setupParams: function(g, d, x) {
        var E = {}, T = [], A = [], M = [], C = !x, N = void 0;
        C && (x = []), E.name = this.quotedString(g), E.hash = this.popStack(), this.trackIds && (E.hashIds = this.popStack()), this.stringParams && (E.hashTypes = this.popStack(), E.hashContexts = this.popStack());
        var D = this.popStack(), k = this.popStack();
        (k || D) && (E.fn = k || "container.noop", E.inverse = D || "container.noop");
        for (var q = d; q--; )
          N = this.popStack(), x[q] = N, this.trackIds && (M[q] = this.popStack()), this.stringParams && (A[q] = this.popStack(), T[q] = this.popStack());
        return C && (E.args = this.source.generateArray(x)), this.trackIds && (E.ids = this.source.generateArray(M)), this.stringParams && (E.types = this.source.generateArray(A), E.contexts = this.source.generateArray(T)), this.options.data && (E.data = "data"), this.useBlockParams && (E.blockParams = "blockParams"), E;
      },
      setupHelperArgs: function(g, d, x, E) {
        var T = this.setupParams(g, d, x);
        return T.loc = JSON.stringify(this.source.currentLocation), T = this.objectLiteral(T), E ? (this.useRegister("options"), x.push("options"), ["options=", T]) : x ? (x.push(T), "") : T;
      }
    }, (function() {
      for (var m = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), g = b.RESERVED_WORDS = {}, d = 0, x = m.length; d < x; d++)
        g[m[d]] = !0;
    })(), b.isValidJavaScriptVariableName = function(m) {
      return !b.RESERVED_WORDS[m] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(m);
    };
    function _(m, g, d, x, E) {
      var T = g.popStack(), A = d.length;
      for (m && A--; x < A; x++)
        T = g.nameLookup(T, d[x], E);
      return m ? [g.aliasable("container.strict"), "(", T, ", ", g.quotedString(d[x]), ", ", JSON.stringify(g.source.currentLocation), " )"] : T;
    }
    r.default = b, t.exports = r.default;
  })($o, $o.exports)), $o.exports;
}
var xy;
function NE() {
  return xy || (xy = 1, (function(t, r) {
    r.__esModule = !0;
    function i(A) {
      return A && A.__esModule ? A : { default: A };
    }
    var s = dE(), o = i(s), u = I0(), f = i(u), p = gE(), h = vE(), y = AE(), b = i(y), _ = B0(), m = i(_), g = P0(), d = i(g), x = o.default.create;
    function E() {
      var A = x();
      return A.compile = function(M, C) {
        return h.compile(M, C, A);
      }, A.precompile = function(M, C) {
        return h.precompile(M, C, A);
      }, A.AST = f.default, A.Compiler = h.Compiler, A.JavaScriptCompiler = b.default, A.Parser = p.parser, A.parse = p.parse, A.parseWithoutProcessing = p.parseWithoutProcessing, A;
    }
    var T = E();
    T.create = E, d.default(T), T.Visitor = m.default, T.default = T, r.default = T, t.exports = r.default;
  })(To, To.exports)), To.exports;
}
var Lt = NE();
const TE = /* @__PURE__ */ Gd(Lt), F0 = /* @__PURE__ */ r2({
  __proto__: null,
  default: TE
}, [Lt]), Kn = SillyTavern.getContext(), kn = [
  "name",
  "description",
  "personality",
  "scenario",
  "first_mes",
  "mes_example"
], Jn = {
  name: "Name",
  description: "Description",
  personality: "Personality",
  scenario: "Scenario",
  first_mes: "First Message",
  mes_example: "Example Dialogue"
};
new n0("dumb", {}).getSettings();
async function OE({
  profileId: t,
  userPrompt: r,
  buildPromptOptions: i,
  continueFrom: s,
  session: o,
  allCharacters: u,
  entriesGroupByWorldName: f,
  promptSettings: p,
  formatDescription: h,
  mainContextList: y,
  includeUserMacro: b,
  maxResponseToken: _,
  targetField: m,
  outputFormat: g
}) {
  if (!t)
    throw new Error("No connection profile selected.");
  const d = Kn.extensionSettings.connectionManager?.profiles?.find((D) => D.id === t);
  if (!d)
    throw new Error(`Connection profile with ID "${t}" not found.`);
  const x = d.api ? Kn.CONNECT_API_MAP[d.api].selected : void 0;
  if (!x)
    throw new Error(`Could not determine API for profile "${d.name}".`);
  const E = {};
  E.char = o.fields.name.value ?? "{{char}}", E.user = b && Sr ? Sr : "{{user}}", E.persona = "{{persona}}", E.targetField = m, E.userInstructions = Lt.compile(r.trim(), { noEscape: !0 })(E), E.fieldSpecificInstructions = Lt.compile(
    o.draftFields[m]?.prompt ?? o.fields[m]?.prompt,
    { noEscape: !0 }
  )({
    ...E,
    char: m === "mes_example" ? "{{char}}" : E.char,
    user: m === "mes_example" ? "{{user}}" : E.user
  }), E.activeFormatInstructions = Lt.compile(h.content, { noEscape: !0 })(
    E
  );
  {
    const D = [];
    o.selectedCharacterIndexes.forEach((k) => {
      const q = parseInt(k), V = u[q];
      V && D.push(V);
    }), E.characters = D;
  }
  {
    const D = {};
    Object.entries(f).filter(
      ([k, q]) => q.length > 0 && o.selectedWorldNames.includes(k) && q.some((V) => !V.disable)
    ).forEach(([k, q]) => {
      D[k] = q.filter((V) => !V.disable);
    }), E.lorebooks = D;
  }
  {
    const D = {}, k = {}, q = {}, V = m.startsWith("alternate_greetings_"), I = Pt.getSettings().contextToSend.dontSendOtherGreetings;
    Object.entries(o.fields).forEach(([Y, oe]) => {
      let fe = !1;
      if (I) {
        const ve = Y.startsWith("alternate_greetings_");
        V ? fe = ve && Y !== m || Y === "first_mes" : fe = ve;
      }
      if (!fe) {
        const ve = Lt.compile(oe.value, { noEscape: !0 })({
          ...E,
          char: Y === "mes_example" ? "{{char}}" : E.char,
          user: Y === "mes_example" ? "{{user}}" : E.user
        });
        kn.includes(Y) ? D[oe.label] = ve : Y.startsWith("alternate_greetings_") && (k[Y] = ve);
      }
    }), Object.entries(o.draftFields || {}).forEach(([Y, oe]) => {
      q[oe.label] = Lt.compile(oe.value, { noEscape: !0 })(E);
    });
    const G = {};
    Object.keys(D).length > 0 && (G.core = D), Object.keys(k).length > 0 && (G.alternate_greetings = k), Object.keys(q).length > 0 && (G.draft = q), E.fields = G;
  }
  const T = [];
  {
    for (const D of y) {
      if (D.promptName === "chatHistory") {
        const I = await d0(x, i);
        if (I.warnings && I.warnings.length > 0)
          for (const G of I.warnings)
            Me("warning", G);
        T.push(...I.result);
        continue;
      }
      let k = structuredClone(E);
      D.promptName === "stDescription" && (k.char = "{{char}}", k.user = "{{user}}");
      const q = p[D.promptName];
      if (!q)
        continue;
      const V = {
        role: D.role,
        content: Lt.compile(q.content, { noEscape: !0 })(k)
      };
      V.content = V.content.replaceAll("{{user}}", "[[[crec_veryUniqueUserPlaceHolder]]]"), V.content = V.content.replaceAll("{{char}}", "[[[crec_veryUniqueCharPlaceHolder]]]"), V.content = Kn.substituteParams(V.content), V.content = V.content.replaceAll("[[[crec_veryUniqueUserPlaceHolder]]]", "{{user}}"), V.content = V.content.replaceAll("[[[crec_veryUniqueCharPlaceHolder]]]", "{{char}}"), V.content && T.push(V);
    }
    s && T.push({
      role: "assistant",
      content: Rv(s, g)
    });
  }
  const A = await Kn.ConnectionManagerRequestService.sendRequest(
    t,
    T,
    _
  ), M = s ? Rv(s, g) + A.content : A.content, C = j0(M, g);
  let N;
  if (typeof C == "string")
    N = C;
  else if (typeof C == "object" && C !== null)
    if ("response" in C && typeof C.response == "string")
      N = C.response;
    else {
      const D = Object.values(C)[0];
      N = D ? String(D) : "";
    }
  else
    N = "";
  return N;
}
const Da = "SillyTavern-Character-Creator", Z0 = "0.3.0", ME = "F_1.9", DE = {
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
], We = {
  stDescription: Md,
  charDefinitions: N0,
  lorebookDefinitions: T0,
  xmlFormat: $S,
  jsonFormat: QS,
  noneFormat: JS,
  worldInfoCharDefinition: KS,
  existingFieldDefinitions: nl,
  taskDescription: Wd,
  outputFormatInstructions: Kd,
  personaDescription: WS,
  reviseJsonPrompt: ex,
  reviseXmlPrompt: tx,
  reviseTaskDescription: nx
}, G0 = {
  version: Z0,
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
      content: We.stDescription,
      isDefault: !0,
      label: "ST/Char Card Description"
    },
    charDefinitions: {
      content: We.charDefinitions,
      isDefault: !0,
      label: "Character Definition Template"
    },
    lorebookDefinitions: {
      content: We.lorebookDefinitions,
      isDefault: !0,
      label: "Lorebook Definition Template"
    },
    xmlFormat: {
      content: We.xmlFormat,
      isDefault: !0,
      label: "XML Format Description"
    },
    jsonFormat: {
      content: We.jsonFormat,
      isDefault: !0,
      label: "JSON Format Description"
    },
    noneFormat: {
      content: We.noneFormat,
      isDefault: !0,
      label: "Plain Text Format Description"
    },
    worldInfoCharDefinition: {
      content: We.worldInfoCharDefinition,
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
      content: We.personaDescription,
      isDefault: !0,
      label: "User Persona Description Template"
    },
    reviseJsonPrompt: {
      content: We.reviseJsonPrompt,
      isDefault: !0,
      label: "Revise Session (JSON Mode)"
    },
    reviseXmlPrompt: {
      content: We.reviseXmlPrompt,
      isDefault: !0,
      label: "Revise Session (XML Mode)"
    },
    reviseTaskDescription: {
      content: We.reviseTaskDescription,
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
const Pt = new n0(DE.EXTENSION, G0);
async function kE() {
  return new Promise((t, r) => {
    Pt.initializeSettings({
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
                  content: We.stDescription,
                  isDefault: !0,
                  label: "ST/Char Card Description"
                },
                charDefinitions: {
                  content: We.charDefinitions,
                  isDefault: !0,
                  label: "Character Definition Template"
                },
                lorebookDefinitions: {
                  content: We.lorebookDefinitions,
                  isDefault: !0,
                  label: "Lorebook Definition Template"
                },
                xmlFormat: {
                  content: We.xmlFormat,
                  isDefault: !0,
                  label: "XML Format Description"
                },
                jsonFormat: {
                  content: We.jsonFormat,
                  isDefault: !0,
                  label: "JSON Format Description"
                },
                noneFormat: {
                  content: We.noneFormat,
                  isDefault: !0,
                  label: "Plain Text Format Description"
                },
                worldInfoCharDefinition: {
                  content: We.worldInfoCharDefinition,
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
                  content: We.personaDescription,
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
                  content: We.personaDescription,
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
            return await Me("info", `[${Da}] Added Alternate Greetings.`), {
              ...i,
              prompts: {
                ...i?.prompts,
                stDescription: {
                  content: We.stDescription,
                  isDefault: !0,
                  label: "ST/Char Card Description"
                },
                charDefinitions: {
                  content: We.charDefinitions,
                  isDefault: !0,
                  label: "Character Definition Template"
                },
                worldInfoCharDefinition: {
                  content: We.worldInfoCharDefinition,
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
            return i.prompts.stDescription.isDefault && (s.prompts.stDescription.content = Md), s;
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
              content: We.reviseJsonPrompt,
              isDefault: !0,
              label: "Revise Session (JSON Mode)"
            }, s.prompts.reviseXmlPrompt = {
              content: We.reviseXmlPrompt,
              isDefault: !0,
              label: "Revise Session (XML Mode)"
            }, s.prompts.reviseTaskDescription = {
              content: We.reviseTaskDescription,
              isDefault: !0,
              label: "Revise Session Task Description"
            }, i.prompts.charDefinitions.isDefault && (s.prompts.charDefinitions.content = N0), i.prompts.lorebookDefinitions.isDefault && (s.prompts.lorebookDefinitions.content = T0), i.prompts.existingFieldDefinitions.isDefault && (s.prompts.existingFieldDefinitions.content = nl), s;
          }
        },
        {
          from: "F_1.8",
          to: "F_1.9",
          action(i) {
            const s = {
              ...i
            };
            return i.prompts.stDescription.isDefault && (s.prompts.stDescription.content = Md), s;
          }
        }
      ]
    }).then((i) => {
      t();
    }).catch((i) => {
      console.error(`[${Da}] Error initializing settings:`, i), Me("error", `[${Da}] Failed to initialize settings: ${i.message}`), Kn.Popup.show.confirm(
        `[${Da}] Failed to load settings. This might be due to an update. Reset settings to default?`,
        "Extension Error"
      ).then((s) => {
        s && (Pt.resetSettings(), Me("success", `[${Da}] Settings reset. Reloading may be required.`), t());
      });
    });
  });
}
const pe = ({ children: t, className: r, overrideDefaults: i = !1, ...s }) => {
  const o = K.useMemo(() => {
    const u = [];
    return i || u.push("menu_button", "interactable"), u.push(r), u.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ S.jsx("button", { className: o, ...s, children: t });
}, jE = ({ label: t, className: r, overrideDefaults: i = !1, type: s = "text", ...o }) => {
  const u = K.useMemo(() => {
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
  const o = K.useMemo(() => {
    const u = [];
    return i || u.push("text_pole"), u.push(r), u.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ S.jsx("select", { className: o, ...s, children: t });
}, Yt = ({ children: t, className: r, overrideDefaults: i = !1, ...s }) => {
  const o = K.useMemo(() => {
    const u = [];
    return i || u.push("text_pole", "textarea_compact"), u.push(r), u.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ S.jsx("textarea", { className: o, ...s, children: t });
};
var RE = e0(), vn = /* @__PURE__ */ ((t) => (t[t.TEXT = 1] = "TEXT", t[t.CONFIRM = 2] = "CONFIRM", t[t.INPUT = 3] = "INPUT", t[t.DISPLAY = 4] = "DISPLAY", t))(vn || {}), Kr = /* @__PURE__ */ ((t) => (t[t.AFFIRMATIVE = 1] = "AFFIRMATIVE", t[t.NEGATIVE = 0] = "NEGATIVE", t[t.CANCELLED = null] = "CANCELLED", t))(Kr || {});
const zE = SillyTavern.getContext(), zi = ({
  content: t,
  type: r,
  inputValue: i = "",
  options: s = {},
  preventEscape: o = !1,
  onComplete: u
}) => {
  var f;
  const p = K.useRef(null), h = K.useRef(null), [y, b] = K.useState(!1), [_, m] = K.useState(null), g = K.useRef(zE.uuidv4()), d = K.useRef({
    id: g.current,
    type: r,
    dlg: null,
    mainInput: null,
    lastFocus: null,
    value: void 0,
    result: void 0,
    inputResults: void 0
  });
  K.useEffect(() => {
    const A = p.current;
    if (!A) return;
    const M = (C) => {
      C.preventDefault(), o || x(Kr.CANCELLED);
    };
    return A.addEventListener("cancel", M), d.current.dlg = A, d.current.mainInput = h.current, Ci.util.popups.push(d.current), A.showModal || (A.classList.add("poly_dialog"), tv.registerDialog(A), new ResizeObserver((C) => {
      for (const N of C)
        tv.reposition(N.target);
    }).observe(A)), A.showModal(), qf(), () => {
      ev(Ci.util.popups, d.current), qf(), A.removeEventListener("cancel", M);
    };
  }, []);
  const x = async (A) => {
    var M, C;
    let N = A;
    if (r === vn.INPUT && (A >= Kr.AFFIRMATIVE ? N = (M = h.current) == null ? void 0 : M.value : A === Kr.NEGATIVE ? N = !1 : A === Kr.CANCELLED ? N = null : N = !1), (C = s.customInputs) != null && C.length) {
      const k = new Map(
        s.customInputs.map((q) => {
          var V;
          const I = (V = p.current) == null ? void 0 : V.querySelector(`#${q.id}`);
          return [I.id, I.checked];
        })
      );
      d.current.inputResults = k;
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
    const D = p.current;
    D && (D.setAttribute("closing", ""), qf(), n2(D, async () => {
      var k;
      if (D.close(), s.onClose && await s.onClose(d.current), ev(Ci.util.popups, d.current), Ci.util.popups.length > 0) {
        const q = (k = document.activeElement) == null ? void 0 : k.closest(".popup"), V = q?.getAttribute("data-id"), I = Ci.util.popups.find((G) => G.id === V);
        I && I.lastFocus && I.lastFocus.focus();
      }
      u(N);
    }));
  }, E = (A) => {
    A.target instanceof HTMLElement && A.target !== p.current && (m(A.target), d.current.lastFocus = A.target);
  }, T = async (A) => {
  };
  return RE.createPortal(
    /* @__PURE__ */ S.jsx(
      "dialog",
      {
        ref: p,
        className: (() => {
          const A = ["popup"];
          return s.wide && A.push("wide_dialogue_popup"), s.wider && A.push("wider_dialogue_popup"), s.large && A.push("large_dialogue_popup"), s.transparent && A.push("transparent_dialogue_popup"), s.allowHorizontalScrolling && A.push("horizontal_scrolling_dialogue_popup"), s.allowVerticalScrolling && A.push("vertical_scrolling_dialogue_popup"), s.animation && A.push(`popup--animation-${s.animation}`), A.join(" ");
        })(),
        "data-id": g.current,
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
            (f = s.customButtons) == null ? void 0 : f.map((A, M) => {
              const C = typeof A == "string" ? { text: A, result: M + 2 } : A;
              return /* @__PURE__ */ S.jsx(
                "div",
                {
                  className: `menu_button popup-button-custom result-control ${C.classes ?? ""}`,
                  "data-result": C.result,
                  onClick: () => {
                    var N;
                    (N = C.action) == null || N.call(C), x(C.result ?? M + 2);
                  },
                  "data-i18n": C.text,
                  children: C.text
                },
                M
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
}, _r = SillyTavern.getContext(), V0 = ({
  initialSelectedProfileId: t,
  allowedTypes: r = { openai: "Chat Completion", textgenerationwebui: "Text Completion" },
  placeholder: i = "Select a Connection Profile",
  onChange: s,
  onCreate: o,
  onUpdate: u,
  onDelete: f
}) => {
  const [p, h] = K.useState(t ?? ""), [y, b] = K.useState(Date.now()), { isEnabled: _, profiles: m, connectApiMap: g } = K.useMemo(() => {
    var E, T;
    return (E = _r.extensionSettings.disabledExtensions) != null && E.includes("connection-manager") ? (console.error("Connection Manager extension is disabled."), { isEnabled: !1, profiles: [], connectApiMap: {} }) : {
      isEnabled: !0,
      profiles: ((T = _r.extensionSettings.connectionManager) == null ? void 0 : T.profiles) ?? [],
      connectApiMap: _r.CONNECT_API_MAP
    };
  }, [y]);
  K.useEffect(() => {
    if (!_) return;
    const E = (M) => {
      Zs(M, r, g) && (b(Date.now()), o?.(M));
    }, T = (M, C) => {
      const N = Zs(M, r, g), D = Zs(C, r, g);
      (N || D) && b(Date.now()), u?.(M, C), p === M.id && !D && (h(""), s?.(void 0));
    }, A = (M) => {
      Zs(M, r, g) && (b(Date.now()), f?.(M), p === M.id && (h(""), s?.(void 0)));
    };
    return _r.eventSource.on("CONNECTION_PROFILE_CREATED", E), _r.eventSource.on("CONNECTION_PROFILE_UPDATED", T), _r.eventSource.on("CONNECTION_PROFILE_DELETED", A), () => {
      _r.eventSource.removeListener("CONNECTION_PROFILE_CREATED", E), _r.eventSource.removeListener("CONNECTION_PROFILE_UPDATED", T), _r.eventSource.removeListener("CONNECTION_PROFILE_DELETED", A);
    };
  }, [_, p, r, g, s, o, u, f]);
  const d = K.useMemo(() => {
    if (!_) return [];
    const E = m.filter((A) => Zs(A, r, g)), T = {};
    for (const [A, M] of Object.entries(r))
      T[A] = { label: M, profiles: [] };
    for (const A of E) {
      const M = g[A.api];
      T[M.selected] && T[M.selected].profiles.push(A);
    }
    for (const A of Object.values(T))
      A.profiles.sort((M, C) => (M.name ?? "").localeCompare(C.name ?? ""));
    return Object.values(T).filter((A) => A.profiles.length > 0);
  }, [_, m, r, g]), x = K.useCallback(
    (E) => {
      const T = E.target.value;
      h(T);
      const A = m.find((M) => M.id === T);
      s?.(A);
    },
    [m, s]
  );
  return _ ? /* @__PURE__ */ S.jsxs(yu, { value: p, onChange: x, children: [
    /* @__PURE__ */ S.jsx("option", { value: "", children: i }),
    d.map((E) => /* @__PURE__ */ S.jsx("optgroup", { label: E.label, children: E.profiles.map((T) => /* @__PURE__ */ S.jsx("option", { value: T.id, children: T.name }, T.id)) }, E.label))
  ] }) : /* @__PURE__ */ S.jsx(yu, { disabled: !0, value: "", children: /* @__PURE__ */ S.jsx("option", { children: "Connection Manager disabled" }) });
}, LE = cu.memo(
  ({ item: t, showToggleButton: r, showDeleteButton: i, showSelectInput: s, onToggle: o, onDelete: u, onSelectChange: f }) => {
    const {
      id: p,
      label: h,
      enabled: y,
      canDelete: b = !0,
      canToggle: _ = !0,
      showSelect: m = !0,
      canSelect: g = !0,
      selectOptions: d = [],
      selectValue: x
    } = t, E = {
      display: "flex",
      alignItems: "center",
      padding: "8px 12px",
      border: "1px solid var(--SmartThemeBorderColor, #ccc)",
      color: "var(--SmartThemeBodyColor, #333)",
      marginBottom: "2px",
      opacity: r && !y ? 0.6 : 1
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
      s && m && g && /* @__PURE__ */ S.jsx(
        yu,
        {
          value: x,
          onChange: (M) => f(p, M.target.value),
          disabled: !y,
          style: { marginRight: "10px", flexShrink: 0, width: "unset" },
          children: d.length === 0 ? /* @__PURE__ */ S.jsx("option", { disabled: !0, children: "--" }) : d.map((M) => /* @__PURE__ */ S.jsx("option", { value: M.value, children: M.label }, M.value))
        }
      ),
      s && (!m || !g) && /* @__PURE__ */ S.jsx("span", { style: A }),
      r && _ && /* @__PURE__ */ S.jsx(
        pe,
        {
          overrideDefaults: !0,
          className: `toggle-button fas ${y ? "fa-toggle-on" : "fa-toggle-off"}`,
          style: {
            ...T,
            marginRight: "10px",
            fontSize: "1.2em",
            color: y ? "var(--success-color, #4CAF50)" : "var(--SmartThemeBodyColor, #555)",
            backgroundColor: "transparent",
            border: "none"
          },
          onClick: () => o(p)
        }
      ),
      r && !_ && /* @__PURE__ */ S.jsx("span", { style: A }),
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
  const f = K.useRef(null), p = K.useRef(null);
  K.useEffect(() => (f.current && (p.current = Ae.create(f.current, {
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
      const { oldIndex: m, newIndex: g } = _;
      if (m === void 0 || g === void 0 || m === g)
        return;
      const d = Array.from(t), [x] = d.splice(m, 1);
      d.splice(g, 0, x), r(d);
    }
  })), () => {
    var _;
    (_ = p.current) == null || _.destroy(), p.current = null;
  }), [t, r, u]);
  const h = (_) => {
    r(t.map((m) => m.id === _ ? { ...m, enabled: !m.enabled } : m));
  }, y = (_) => {
    r(t.filter((m) => m.id !== _));
  }, b = (_, m) => {
    r(t.map((g) => g.id === _ ? { ...g, selectValue: m } : g));
  };
  return /* @__PURE__ */ S.jsx("ul", { ref: f, className: "sortable-list", style: { listStyle: "none", padding: 0, margin: 0 }, children: t.map((_) => /* @__PURE__ */ S.jsx(
    LE,
    {
      item: _,
      showToggleButton: i,
      showDeleteButton: s,
      showSelectInput: o,
      onToggle: h,
      onDelete: y,
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
  searchPlaceholder: y = "Search...",
  searchNoResultsText: b = "No results found",
  searchFuseOptions: _,
  inputClasses: m,
  containerClasses: g
}) => {
  const [d, x] = K.useState(!1), [E, T] = K.useState(""), A = K.useRef(null);
  K.useEffect(() => {
    const k = (q) => {
      A.current && !A.current.contains(q.target) && x(!1);
    };
    return document.addEventListener("mousedown", k), () => document.removeEventListener("mousedown", k);
  }, []), K.useEffect(() => {
    d || T("");
  }, [d]);
  const M = K.useMemo(() => {
    if (!h) return null;
    const k = {
      includeScore: !1,
      threshold: 0.4,
      keys: ["label", "value"],
      ..._
    };
    return new Ii(t, k);
  }, [t, h, _]), C = K.useMemo(() => !h || !E.trim() || !M ? t : M.search(E.trim()).map((k) => k.item), [t, E, h, M]), N = async (k) => {
    let q;
    u ? q = r.includes(k) ? r.filter((V) => V !== k) : [...r, k] : q = r.includes(k) ? [] : [k], !(p && !await Promise.resolve(p(r, q))) && (i(q), o && x(!1));
  }, D = K.useMemo(() => {
    var k;
    return r.length === 0 ? s : r.length === 1 ? ((k = t.find((q) => q.value === r[0])) == null ? void 0 : k.label) ?? r[0] : `${r.length} items selected`;
  }, [r, t, s]);
  return /* @__PURE__ */ S.jsxs(
    "div",
    {
      ref: A,
      className: `fancy-dropdown-container ${g ?? ""}`,
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
                    jE,
                    {
                      type: "text",
                      placeholder: y,
                      value: E,
                      onChange: (k) => T(k.target.value),
                      autoFocus: !0,
                      className: m
                    }
                  )
                }
              ),
              /* @__PURE__ */ S.jsx("ul", { style: { listStyle: "none", margin: 0, padding: 0 }, children: C.length > 0 ? C.map((k) => /* @__PURE__ */ S.jsx(
                IE,
                {
                  item: k,
                  isSelected: r.includes(k.value),
                  onClick: N
                },
                k.value
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
}, IE = cu.memo(({ item: t, isSelected: r, onClick: i }) => {
  const [s, o] = K.useState(!1);
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
  onCreate: y,
  onRename: b,
  onDelete: _,
  buttons: m
}) => {
  const g = K.useMemo(() => r.find((A) => A.value === t), [r, t]), d = K.useCallback((A) => A ? i.includes(A) : !1, [i]), x = async () => {
    const A = await pd.Popup.show.input(
      `Create a new ${s}`,
      `Please enter a name for the new ${s}:`,
      ""
    );
    if (!A || A.trim() === "") return;
    const M = A.trim();
    if (r.some((N) => N.value === M)) {
      await Me("warning", `A ${s} with this name already exists.`);
      return;
    }
    let C = { value: M, label: M };
    if (y) {
      const N = await Promise.resolve(y(M));
      if (!N.confirmed) return;
      N.value && (typeof N.value == "string" ? C = { value: N.value, label: N.value } : C = N.value);
    }
    u([...r, C]), o(C.value, t);
  }, E = async () => {
    if (!g) {
      await Me("warning", `Please select a ${s} to rename.`);
      return;
    }
    if (d(g.value)) {
      await Me("warning", `This ${s} cannot be renamed as it is read-only.`);
      return;
    }
    const A = await pd.Popup.show.input(
      `Rename ${s}`,
      `Please enter a new name for "${g.label}":`,
      g.label
    );
    if (!A || A.trim() === "" || A.trim() === g.value) return;
    const M = A.trim();
    if (r.some((D) => D.value === M)) {
      await Me("warning", `A ${s} with this name already exists.`);
      return;
    }
    let C = { value: M, label: M };
    if (b) {
      const D = await Promise.resolve(b(g.value, M));
      if (!D.confirmed) return;
      D.value && (typeof D.value == "string" ? C = { value: D.value, label: D.value } : C = D.value);
    }
    const N = r.map((D) => D.value === g.value ? C : D);
    u(N), o(C.value, t);
  }, T = async () => {
    var A;
    if (!g) {
      await Me("warning", `Please select a ${s} to delete.`);
      return;
    }
    if (d(g.value)) {
      await Me("warning", `This ${s} cannot be deleted as it is read-only.`);
      return;
    }
    if (!await pd.Popup.show.confirm(
      `Delete ${s}`,
      `Are you sure you want to delete "${g.label}"?`
    ) || _ && !await Promise.resolve(_(g.value)))
      return;
    const M = r.findIndex((D) => D.value === g.value), C = r.filter((D) => D.value !== g.value);
    u(C);
    let N;
    if (C.length > 0) {
      const D = Math.min(M, C.length - 1);
      N = (A = C[D]) == null ? void 0 : A.value;
    }
    o(N, t);
  };
  return /* @__PURE__ */ S.jsxs("div", { className: "preset-select-container", style: { display: "flex", alignItems: "center" }, children: [
    /* @__PURE__ */ S.jsx(yu, { value: t ?? "", onChange: (A) => o(A.target.value, t), children: r.map((A) => /* @__PURE__ */ S.jsx("option", { value: A.value, children: A.label }, A.value)) }),
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
        onClick: E,
        disabled: !g,
        "data-i18n": `[title]Rename selected ${s}`
      }
    ),
    h && /* @__PURE__ */ S.jsx(
      pe,
      {
        className: "fa-solid fa-trash-can",
        title: `Delete selected ${s}`,
        onClick: T,
        disabled: !g,
        "data-i18n": `[title]Delete selected ${s}`
      }
    ),
    m?.map((A) => /* @__PURE__ */ S.jsx(
      pe,
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
}, Y0 = () => {
  const [, t] = K.useState(0);
  return K.useCallback(() => {
    t((i) => i + 1);
  }, []);
}, md = SillyTavern.getContext(), BE = () => {
  const t = Y0(), r = Pt.getSettings(), [i, s] = K.useState(Wo[0]), o = K.useCallback(
    (C) => {
      const N = Pt.getSettings();
      C(N), Pt.saveSettings(), t();
    },
    [t]
  ), u = K.useMemo(
    () => Object.keys(r.mainContextTemplatePresets).map((C) => ({ value: C, label: C })),
    [r.mainContextTemplatePresets]
  ), f = K.useMemo(
    () => Object.entries(r.prompts).map(([C, N]) => ({
      value: C,
      label: `${N.label} (${C})`
    })),
    [r.prompts]
  ), p = K.useMemo(() => {
    const C = r.mainContextTemplatePresets[r.mainContextTemplatePreset];
    return C ? C.prompts.map((N) => {
      const D = r.prompts[N.promptName], k = D ? `${D.label} (${N.promptName})` : N.promptName;
      return {
        id: N.promptName,
        label: k,
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
  }, y = (C) => {
    o((N) => {
      const D = {};
      C.forEach((k) => {
        D[k.value] = N.mainContextTemplatePresets[k.value] ?? structuredClone(
          N.mainContextTemplatePresets[N.mainContextTemplatePreset] ?? N.mainContextTemplatePresets.default
        );
      }), N.mainContextTemplatePresets = D;
    });
  }, b = (C) => {
    o((N) => {
      const D = C.map((V) => ({
        promptName: V.id,
        enabled: V.enabled,
        role: V.selectValue ?? "user"
      })), k = {
        ...N.mainContextTemplatePresets[N.mainContextTemplatePreset],
        prompts: D
      }, q = {
        ...N.mainContextTemplatePresets,
        [N.mainContextTemplatePreset]: k
      };
      N.mainContextTemplatePresets = q;
    });
  }, _ = async () => {
    await md.Popup.show.confirm("Restore default", "Are you sure?") && o((N) => {
      N.mainContextTemplatePresets = {
        ...N.mainContextTemplatePresets,
        default: structuredClone(G0.mainContextTemplatePresets.default)
      }, N.mainContextTemplatePreset === "default" ? t() : N.mainContextTemplatePreset = "default";
    });
  }, m = (C) => {
    o((N) => {
      const D = C.map((I) => I.value);
      Object.keys(N.prompts).filter((I) => !D.includes(I)).forEach((I) => {
        Object.values(N.mainContextTemplatePresets).forEach((G) => {
          G.prompts = G.prompts.filter((Y) => Y.promptName !== I);
        });
      });
      const V = {};
      C.forEach((I) => {
        V[I.value] = N.prompts[I.value] ?? { content: "", isDefault: !1, label: I.label };
      }), N.prompts = V;
    });
  }, g = (C) => {
    const N = Rd(C);
    return N ? r.prompts[N] ? (Me("error", `Prompt name already exists: ${N}`), { confirmed: !1 }) : (o((D) => {
      D.prompts = {
        ...D.prompts,
        [N]: { content: D.prompts[i]?.content ?? "", isDefault: !1, label: C }
      };
      const k = Object.fromEntries(
        Object.entries(D.mainContextTemplatePresets).map(([q, V]) => [
          q,
          {
            ...V,
            prompts: [...V.prompts, { enabled: !0, promptName: N, role: "user" }]
          }
        ])
      );
      D.mainContextTemplatePresets = k;
    }), s(N), { confirmed: !0, value: N }) : (Me("error", `Invalid prompt name: ${C}`), { confirmed: !1 });
  }, d = (C, N) => {
    const D = Rd(N);
    return D ? r.prompts[D] ? (Me("error", `Prompt name already exists: ${D}`), { confirmed: !1 }) : (o((k) => {
      const { [C]: q, ...V } = k.prompts;
      k.prompts = {
        ...V,
        [D]: { ...q, label: N }
      };
      const I = Object.fromEntries(
        Object.entries(k.mainContextTemplatePresets).map(([G, Y]) => [
          G,
          {
            ...Y,
            prompts: Y.prompts.map((oe) => oe.promptName === C ? { ...oe, promptName: D } : oe)
          }
        ])
      );
      k.mainContextTemplatePresets = I;
    }), s(D), { confirmed: !0, value: D }) : (Me("error", `Invalid prompt name: ${N}`), { confirmed: !1 });
  }, x = (C) => {
    const N = C.target.value;
    o((D) => {
      const k = D.prompts[i];
      k && (D.prompts = {
        ...D.prompts,
        [i]: {
          ...k,
          // Copy existing properties
          content: N,
          isDefault: Wo.includes(i) ? We[i] === N : !1
        }
      });
    });
  }, E = async () => {
    const C = r.prompts[i];
    if (!C) return Me("warning", "No prompt selected.");
    await md.Popup.show.confirm("Restore Default", `Restore default for "${C.label}"?`) && o((D) => {
      D.prompts = {
        ...D.prompts,
        [i]: {
          ...D.prompts[i],
          content: We[i]
        }
      };
    });
  }, T = async () => {
    await md.Popup.show.confirm("Reset Everything", "Are you sure? This cannot be undone.") && (Pt.resetSettings(), t(), Me("success", "Settings have been reset."));
  }, A = r.prompts[i], M = Wo.includes(i);
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
          onItemsChange: y,
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
        M && /* @__PURE__ */ S.jsx(
          pe,
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
          onItemsChange: m,
          onCreate: g,
          onRename: d,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0
        }
      ),
      /* @__PURE__ */ S.jsx(
        Yt,
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
  onValueChange: y,
  onPromptChange: b,
  onGenerate: _,
  onContinue: m,
  onClear: g,
  onCompare: d,
  onDelete: x,
  onOpenReviseSessions: E
}) => /* @__PURE__ */ S.jsxs("div", { className: `character-field ${p ? "draft-field" : "core-field"}`, children: [
  /* @__PURE__ */ S.jsx("label", { children: r }),
  /* @__PURE__ */ S.jsxs("div", { className: `field-container ${o ? "large-field" : ""}`, children: [
    /* @__PURE__ */ S.jsx(Yt, { value: i, onChange: (T) => y(t, T.target.value), rows: u }),
    /* @__PURE__ */ S.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
      /* @__PURE__ */ S.jsx(pe, { onClick: () => _(t), disabled: h, title: "Generate field content", children: h ? /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }) }),
      /* @__PURE__ */ S.jsx(pe, { onClick: () => m(t), disabled: h, title: "Continue from current content", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
      /* @__PURE__ */ S.jsx(pe, { onClick: () => g(t), title: "Clear field content", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-eraser" }) }),
      E && !p && // Disabling for draft fields initially for simplicity
      /* @__PURE__ */ S.jsx(pe, { onClick: () => E(t), title: "Revise with AI chat", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-comments" }) }),
      !p && d && /* @__PURE__ */ S.jsx(pe, { onClick: () => d(t), title: "Compare with loaded character", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-code-compare" }) }),
      p && x && /* @__PURE__ */ S.jsx(pe, { onClick: () => x(t), title: "Delete Draft Field", className: "danger_button", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] })
  ] }),
  f && /* @__PURE__ */ S.jsx("div", { className: "field-prompt-container", children: /* @__PURE__ */ S.jsx(
    Yt,
    {
      value: s,
      onChange: (T) => b(t, T.target.value),
      placeholder: `Enter additional prompt for ${r.toLowerCase()}...`,
      rows: 3
    }
  ) })
] }), UE = SillyTavern.getContext(), HE = ({
  greetings: t,
  onGreetingsChange: r,
  onGenerate: i,
  onContinue: s,
  onCompare: o,
  isGenerating: u
}) => {
  const [f, p] = K.useState(0);
  K.useEffect(() => {
    f >= t.length && t.length > 0 ? p(t.length - 1) : t.length === 0 && p(0);
  }, [t, f]);
  const h = () => {
    const m = [...t, { value: "", prompt: "" }];
    r(m), p(m.length - 1);
  }, y = async () => {
    if (t.length === 0) return;
    if (await UE.Popup.show.confirm("Delete Greeting", "Are you sure?")) {
      const g = t.filter((d, x) => x !== f);
      r(g);
    }
  }, b = (m, g, d) => {
    const x = [...t];
    x[m][g] = d, r(x);
  }, _ = t[f];
  return /* @__PURE__ */ S.jsxs("div", { className: "character-field alternate-greetings-field", children: [
    /* @__PURE__ */ S.jsx("label", { children: "Alternate Greetings" }),
    /* @__PURE__ */ S.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }, children: [
      /* @__PURE__ */ S.jsx(
        "div",
        {
          className: "alternate-greetings-tabs",
          style: { display: "flex", flexWrap: "wrap", gap: "5px", flexGrow: 1 },
          children: t.map((m, g) => /* @__PURE__ */ S.jsxs(
            pe,
            {
              onClick: () => p(g),
              className: `menu_button ${g === f ? "active" : ""}`,
              children: [
                "Greeting ",
                g + 1
              ]
            },
            g
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
          Yt,
          {
            value: _?.value ?? "",
            onChange: (m) => b(f, "value", m.target.value),
            rows: 8,
            placeholder: "Enter greeting content..."
          }
        ),
        /* @__PURE__ */ S.jsx("div", { className: "field-prompt-container", style: { marginTop: "5px" }, children: /* @__PURE__ */ S.jsx(
          Yt,
          {
            value: _?.prompt ?? "",
            onChange: (m) => b(f, "prompt", m.target.value),
            rows: 2,
            placeholder: "Enter specific prompt for this greeting..."
          }
        ) })
      ] }),
      /* @__PURE__ */ S.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
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
            onClick: y,
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
      }, h = i.length, y = r.length, b = 1, _ = h + y;
      s.maxEditLength != null && (_ = Math.min(_, s.maxEditLength));
      var m = (f = s.timeout) !== null && f !== void 0 ? f : 1 / 0, g = Date.now() + m, d = [{ oldPos: -1, lastComponent: void 0 }], x = this.extractCommon(d[0], i, r, 0, s);
      if (d[0].oldPos + 1 >= y && x + 1 >= h)
        return p(this.buildValues(d[0].lastComponent, i, r));
      var E = -1 / 0, T = 1 / 0, A = function() {
        for (var C = Math.max(E, -b); C <= Math.min(T, b); C += 2) {
          var N = void 0, D = d[C - 1], k = d[C + 1];
          D && (d[C - 1] = void 0);
          var q = !1;
          if (k) {
            var V = k.oldPos - C;
            q = k && 0 <= V && V < h;
          }
          var I = D && D.oldPos + 1 < y;
          if (!q && !I) {
            d[C] = void 0;
            continue;
          }
          if (!I || q && D.oldPos < k.oldPos ? N = u.addToPath(k, !0, !1, 0, s) : N = u.addToPath(D, !1, !0, 1, s), x = u.extractCommon(N, i, r, C, s), N.oldPos + 1 >= y && x + 1 >= h)
            return p(u.buildValues(N.lastComponent, i, r)) || !0;
          d[C] = N, N.oldPos + 1 >= y && (T = Math.min(T, C - 1)), x + 1 >= h && (E = Math.max(E, C + 1));
        }
        b++;
      };
      if (o)
        (function C() {
          setTimeout(function() {
            if (b > _ || Date.now() > g)
              return o(void 0);
            A() || C();
          }, 0);
        })();
      else
        for (; b <= _ && Date.now() <= g; ) {
          var M = A();
          if (M)
            return M;
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
      for (var f = i.length, p = s.length, h = r.oldPos, y = h - o, b = 0; y + 1 < f && h + 1 < p && this.equals(s[h + 1], i[y + 1], u); )
        y++, h++, b++, u.oneChangePerToken && (r.lastComponent = { count: 1, previousComponent: r.lastComponent, added: !1, removed: !1 });
      return b && !u.oneChangePerToken && (r.lastComponent = { count: b, previousComponent: r.lastComponent, added: !1, removed: !1 }), r.oldPos = h, y;
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
      for (var f = o.length, p = 0, h = 0, y = 0; p < f; p++) {
        var b = o[p];
        if (b.removed)
          b.value = this.join(s.slice(y, y + b.count)), y += b.count;
        else {
          if (!b.added && this.useLongestToken) {
            var _ = i.slice(h, h + b.count);
            _ = _.map(function(m, g) {
              var d = s[y + g];
              return d.length > m.length ? d : m;
            }), b.value = this.join(_);
          } else
            b.value = this.join(i.slice(h, h + b.count));
          h += b.count, b.added || (y += b.count);
        }
      }
      return o;
    }, t;
  })()
), qE = /* @__PURE__ */ (function() {
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
})(), FE = (
  /** @class */
  (function(t) {
    qE(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r;
  })(ra)
);
new FE();
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
  return r.slice(0, ZE(t, r));
}
function ZE(t, r) {
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
var X0 = /* @__PURE__ */ (function() {
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
})(), _u = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", GE = new RegExp("[".concat(_u, "]+|\\s+|[^").concat(_u, "]"), "ug"), VE = (
  /** @class */
  (function(t) {
    X0(r, t);
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
        o = i.match(GE) || [];
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
), YE = new VE();
function $0(t, r, i) {
  return YE.diff(t, r, i);
}
function Ny(t, r, i, s) {
  if (r && i) {
    var o = Jr(r.value), u = Vs(r.value), f = Jr(i.value), p = Vs(i.value);
    if (t) {
      var h = Cy(o, f);
      t.value = Ld(t.value, f, h), r.value = Gs(r.value, h), i.value = Gs(i.value, h);
    }
    if (s) {
      var y = wy(u, p);
      s.value = zd(s.value, p, y), r.value = eu(r.value, y), i.value = eu(i.value, y);
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
    var _ = Jr(s.value), m = Jr(r.value), g = Vs(r.value), d = Cy(_, m);
    r.value = Gs(r.value, d);
    var x = wy(Gs(_, d), g);
    r.value = eu(r.value, x), s.value = zd(s.value, _, x), t.value = Ld(t.value, _, _.slice(0, _.length - x.length));
  } else if (s) {
    var E = Jr(s.value), T = Vs(r.value), A = Ay(T, E);
    r.value = eu(r.value, A);
  } else if (t) {
    var M = Vs(t.value), C = Jr(r.value), A = Ay(M, C);
    r.value = Gs(r.value, A);
  }
}
var XE = (
  /** @class */
  (function(t) {
    X0(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      var s = new RegExp("(\\r?\\n)|[".concat(_u, "]+|[^\\S\\n\\r]+|[^").concat(_u, "]"), "ug");
      return i.match(s) || [];
    }, r;
  })(ra)
);
new XE();
var $E = /* @__PURE__ */ (function() {
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
})(), QE = (
  /** @class */
  (function(t) {
    $E(r, t);
    function r() {
      var i = t !== null && t.apply(this, arguments) || this;
      return i.tokenize = Q0, i;
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
new QE();
function Q0(t, r) {
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
var JE = /* @__PURE__ */ (function() {
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
})(), KE = (
  /** @class */
  (function(t) {
    JE(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      return i.split(new RegExp("(?<=[.!?])(\\s+|$)"));
    }, r;
  })(ra)
);
new KE();
var WE = /* @__PURE__ */ (function() {
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
})(), eC = (
  /** @class */
  (function(t) {
    WE(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      return i.split(/([{}:;,]|\s+)/);
    }, r;
  })(ra)
);
new eC();
var tC = /* @__PURE__ */ (function() {
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
})(), nC = (
  /** @class */
  (function(t) {
    tC(r, t);
    function r() {
      var i = t !== null && t.apply(this, arguments) || this;
      return i.tokenize = Q0, i;
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
      return typeof i == "string" ? i : JSON.stringify(Pd(i, null, null, f), null, "  ");
    }, r.prototype.equals = function(i, s, o) {
      return t.prototype.equals.call(this, i.replace(/,([\r\n])/g, "$1"), s.replace(/,([\r\n])/g, "$1"), o);
    }, r;
  })(ra)
);
new nC();
function Pd(t, r, i, s, o) {
  r = r || [], i = i || [], s && (t = s(o === void 0 ? "" : o, t));
  var u;
  for (u = 0; u < r.length; u += 1)
    if (r[u] === t)
      return i[u];
  var f;
  if (Object.prototype.toString.call(t) === "[object Array]") {
    for (r.push(t), f = new Array(t.length), i.push(f), u = 0; u < t.length; u += 1)
      f[u] = Pd(t[u], r, i, s, String(u));
    return r.pop(), i.pop(), f;
  }
  if (t && t.toJSON && (t = t.toJSON()), typeof t == "object" && t !== null) {
    r.push(t), f = {}, i.push(f);
    var p = [], h;
    for (h in t)
      Object.prototype.hasOwnProperty.call(t, h) && p.push(h);
    for (p.sort(), u = 0; u < p.length; u += 1)
      h = p[u], f[h] = Pd(t[h], r, i, s, h);
    r.pop(), i.pop();
  } else
    f = t;
  return f;
}
var rC = /* @__PURE__ */ (function() {
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
})(), aC = (
  /** @class */
  (function(t) {
    rC(r, t);
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
new aC();
const iC = ({ originalContent: t, newContent: r, fieldName: i }) => {
  const s = K.useMemo(() => {
    const o = $0(t, r);
    let u = "", f = "";
    return o.forEach((p) => {
      const y = `<span style="${p.added ? "color: green; background-color: #e6ffed;" : p.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${p.value}</span>`;
      p.added || (u += y), p.removed || (f += y);
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
    var y;
    Object.defineProperty(p, "_zod", {
      value: p._zod ?? {},
      enumerable: !1
    }), (y = p._zod).traits ?? (y.traits = /* @__PURE__ */ new Set()), p._zod.traits.add(t), r(p, h);
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
    const y = i?.Parent ? new u() : this;
    s(y, p), (h = y._zod).deferred ?? (h.deferred = []);
    for (const b of y._zod.deferred)
      b();
    return y;
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
class J0 extends Error {
  constructor(r) {
    super(`Encountered unidirectional transform during encode: ${r}`), this.name = "ZodEncodeError";
  }
}
const K0 = {};
function Ra(t) {
  return K0;
}
function W0(t) {
  const r = Object.values(t).filter((s) => typeof s == "number");
  return Object.entries(t).filter(([s, o]) => r.indexOf(+s) === -1).map(([s, o]) => o);
}
function Id(t, r) {
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
function sC(t, r) {
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
function rt(t, r, i) {
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
function Pa(...t) {
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
const e1 = "captureStackTrace" in Error ? Error.captureStackTrace : (...t) => {
};
function Su(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}
const lC = nh(() => {
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
function t1(t) {
  return rl(t) ? { ...t } : Array.isArray(t) ? [...t] : t;
}
const oC = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
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
function uC(t) {
  return Object.keys(t).filter((r) => t[r]._zod.optin === "optional" && t[r]._zod.optout === "optional");
}
const cC = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function fC(t, r) {
  const i = t._zod.def, s = Pa(t._zod.def, {
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
function dC(t, r) {
  const i = t._zod.def, s = Pa(t._zod.def, {
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
function hC(t, r) {
  if (!rl(r))
    throw new Error("Invalid input to extend: expected a plain object");
  const i = t._zod.def.checks;
  if (i && i.length > 0)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  const o = Pa(t._zod.def, {
    get shape() {
      const u = { ...t._zod.def.shape, ...r };
      return La(this, "shape", u), u;
    },
    checks: []
  });
  return aa(t, o);
}
function pC(t, r) {
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
function mC(t, r) {
  const i = Pa(t._zod.def, {
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
function gC(t, r, i) {
  const s = Pa(r._zod.def, {
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
function vC(t, r, i) {
  const s = Pa(r._zod.def, {
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
function n1(t, r) {
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
const r1 = (t, r) => {
  t.name = "$ZodError", Object.defineProperty(t, "_zod", {
    value: t._zod,
    enumerable: !1
  }), Object.defineProperty(t, "issues", {
    value: r,
    enumerable: !1
  }), t.message = JSON.stringify(r, Id, 2), Object.defineProperty(t, "toString", {
    value: () => t.message,
    enumerable: !1
  });
}, a1 = ee("$ZodError", r1), i1 = ee("$ZodError", r1, { Parent: Error });
function yC(t, r = (i) => i.message) {
  const i = {}, s = [];
  for (const o of t.issues)
    o.path.length > 0 ? (i[o.path[0]] = i[o.path[0]] || [], i[o.path[0]].push(r(o))) : s.push(r(o));
  return { formErrors: s, fieldErrors: i };
}
function bC(t, r = (i) => i.message) {
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
    throw e1(p, o?.callee), p;
  }
  return f.value;
}, lh = (t) => async (r, i, s, o) => {
  const u = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let f = r._zod.run({ value: i, issues: [] }, u);
  if (f instanceof Promise && (f = await f), f.issues.length) {
    const p = new (o?.Err ?? t)(f.issues.map((h) => za(h, u, Ra())));
    throw e1(p, o?.callee), p;
  }
  return f.value;
}, Nu = (t) => (r, i, s) => {
  const o = s ? { ...s, async: !1 } : { async: !1 }, u = r._zod.run({ value: i, issues: [] }, o);
  if (u instanceof Promise)
    throw new Li();
  return u.issues.length ? {
    success: !1,
    error: new (t ?? a1)(u.issues.map((f) => za(f, o, Ra())))
  } : { success: !0, data: u.value };
}, _C = /* @__PURE__ */ Nu(i1), Tu = (t) => async (r, i, s) => {
  const o = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let u = r._zod.run({ value: i, issues: [] }, o);
  return u instanceof Promise && (u = await u), u.issues.length ? {
    success: !1,
    error: new t(u.issues.map((f) => za(f, o, Ra())))
  } : { success: !0, data: u.value };
}, SC = /* @__PURE__ */ Tu(i1), xC = (t) => (r, i, s) => {
  const o = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return sh(t)(r, i, o);
}, EC = (t) => (r, i, s) => sh(t)(r, i, s), CC = (t) => async (r, i, s) => {
  const o = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return lh(t)(r, i, o);
}, wC = (t) => async (r, i, s) => lh(t)(r, i, s), AC = (t) => (r, i, s) => {
  const o = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return Nu(t)(r, i, o);
}, NC = (t) => (r, i, s) => Nu(t)(r, i, s), TC = (t) => async (r, i, s) => {
  const o = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return Tu(t)(r, i, o);
}, OC = (t) => async (r, i, s) => Tu(t)(r, i, s), MC = /^[cC][^\s-]{8,}$/, DC = /^[0-9a-z]+$/, kC = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, jC = /^[0-9a-vA-V]{20}$/, RC = /^[A-Za-z0-9]{27}$/, zC = /^[a-zA-Z0-9_-]{21}$/, LC = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, PC = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, My = (t) => t ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, IC = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, BC = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function UC() {
  return new RegExp(BC, "u");
}
const HC = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, qC = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, FC = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, ZC = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, GC = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, s1 = /^[A-Za-z0-9_-]*$/, VC = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, YC = /^\+(?:[0-9]){6,14}[0-9]$/, l1 = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", XC = /* @__PURE__ */ new RegExp(`^${l1}$`);
function o1(t) {
  const r = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof t.precision == "number" ? t.precision === -1 ? `${r}` : t.precision === 0 ? `${r}:[0-5]\\d` : `${r}:[0-5]\\d\\.\\d{${t.precision}}` : `${r}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function $C(t) {
  return new RegExp(`^${o1(t)}$`);
}
function QC(t) {
  const r = o1({ precision: t.precision }), i = ["Z"];
  t.local && i.push(""), t.offset && i.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const s = `${r}(?:${i.join("|")})`;
  return new RegExp(`^${l1}T(?:${s})$`);
}
const JC = (t) => {
  const r = t ? `[\\s\\S]{${t?.minimum ?? 0},${t?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${r}$`);
}, KC = /^-?\d+$/, WC = /^-?\d+(?:\.\d+)?/, ew = /^[^A-Z]*$/, tw = /^[^a-z]*$/, an = /* @__PURE__ */ ee("$ZodCheck", (t, r) => {
  var i;
  t._zod ?? (t._zod = {}), t._zod.def = r, (i = t._zod).onattach ?? (i.onattach = []);
}), u1 = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, c1 = /* @__PURE__ */ ee("$ZodCheckLessThan", (t, r) => {
  an.init(t, r);
  const i = u1[typeof r.value];
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
}), f1 = /* @__PURE__ */ ee("$ZodCheckGreaterThan", (t, r) => {
  an.init(t, r);
  const i = u1[typeof r.value];
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
}), nw = /* @__PURE__ */ ee("$ZodCheckMultipleOf", (t, r) => {
  an.init(t, r), t._zod.onattach.push((i) => {
    var s;
    (s = i._zod.bag).multipleOf ?? (s.multipleOf = r.value);
  }), t._zod.check = (i) => {
    if (typeof i.value != typeof r.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof i.value == "bigint" ? i.value % r.value === BigInt(0) : sC(i.value, r.value) === 0) || i.issues.push({
      origin: typeof i.value,
      code: "not_multiple_of",
      divisor: r.value,
      input: i.value,
      inst: t,
      continue: !r.abort
    });
  };
}), rw = /* @__PURE__ */ ee("$ZodCheckNumberFormat", (t, r) => {
  an.init(t, r), r.format = r.format || "float64";
  const i = r.format?.includes("int"), s = i ? "int" : "number", [o, u] = cC[r.format];
  t._zod.onattach.push((f) => {
    const p = f._zod.bag;
    p.format = r.format, p.minimum = o, p.maximum = u, i && (p.pattern = KC);
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
}), aw = /* @__PURE__ */ ee("$ZodCheckMaxLength", (t, r) => {
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
}), iw = /* @__PURE__ */ ee("$ZodCheckMinLength", (t, r) => {
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
}), sw = /* @__PURE__ */ ee("$ZodCheckLengthEquals", (t, r) => {
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
}), lw = /* @__PURE__ */ ee("$ZodCheckRegex", (t, r) => {
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
}), ow = /* @__PURE__ */ ee("$ZodCheckLowerCase", (t, r) => {
  r.pattern ?? (r.pattern = ew), Ou.init(t, r);
}), uw = /* @__PURE__ */ ee("$ZodCheckUpperCase", (t, r) => {
  r.pattern ?? (r.pattern = tw), Ou.init(t, r);
}), cw = /* @__PURE__ */ ee("$ZodCheckIncludes", (t, r) => {
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
}), fw = /* @__PURE__ */ ee("$ZodCheckStartsWith", (t, r) => {
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
}), dw = /* @__PURE__ */ ee("$ZodCheckEndsWith", (t, r) => {
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
}), hw = /* @__PURE__ */ ee("$ZodCheckOverwrite", (t, r) => {
  an.init(t, r), t._zod.check = (i) => {
    i.value = r.tx(i.value);
  };
});
class pw {
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
const mw = {
  major: 4,
  minor: 1,
  patch: 12
}, xt = /* @__PURE__ */ ee("$ZodType", (t, r) => {
  var i;
  t ?? (t = {}), t._zod.def = r, t._zod.bag = t._zod.bag || {}, t._zod.version = mw;
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
      let y = ji(f), b;
      for (const _ of p) {
        if (_._zod.def.when) {
          if (!_._zod.def.when(f))
            continue;
        } else if (y)
          continue;
        const m = f.issues.length, g = _._zod.check(f);
        if (g instanceof Promise && h?.async === !1)
          throw new Li();
        if (b || g instanceof Promise)
          b = (b ?? Promise.resolve()).then(async () => {
            await g, f.issues.length !== m && (y || (y = ji(f, m)));
          });
        else {
          if (f.issues.length === m)
            continue;
          y || (y = ji(f, m));
        }
      }
      return b ? b.then(() => f) : f;
    }, u = (f, p, h) => {
      if (ji(f))
        return f.aborted = !0, f;
      const y = o(p, s, h);
      if (y instanceof Promise) {
        if (h.async === !1)
          throw new Li();
        return y.then((b) => t._zod.parse(b, h));
      }
      return t._zod.parse(y, h);
    };
    t._zod.run = (f, p) => {
      if (p.skipChecks)
        return t._zod.parse(f, p);
      if (p.direction === "backward") {
        const y = t._zod.parse({ value: f.value, issues: [] }, { ...p, skipChecks: !0 });
        return y instanceof Promise ? y.then((b) => u(b, f, p)) : u(y, f, p);
      }
      const h = t._zod.parse(f, p);
      if (h instanceof Promise) {
        if (p.async === !1)
          throw new Li();
        return h.then((y) => o(y, s, p));
      }
      return o(h, s, p);
    };
  }
  t["~standard"] = {
    validate: (o) => {
      try {
        const u = _C(t, o);
        return u.success ? { value: u.data } : { issues: u.error?.issues };
      } catch {
        return SC(t, o).then((f) => f.success ? { value: f.data } : { issues: f.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), oh = /* @__PURE__ */ ee("$ZodString", (t, r) => {
  xt.init(t, r), t._zod.pattern = [...t?._zod.bag?.patterns ?? []].pop() ?? JC(t._zod.bag), t._zod.parse = (i, s) => {
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
}), gw = /* @__PURE__ */ ee("$ZodGUID", (t, r) => {
  r.pattern ?? (r.pattern = PC), st.init(t, r);
}), vw = /* @__PURE__ */ ee("$ZodUUID", (t, r) => {
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
    r.pattern ?? (r.pattern = My(s));
  } else
    r.pattern ?? (r.pattern = My());
  st.init(t, r);
}), yw = /* @__PURE__ */ ee("$ZodEmail", (t, r) => {
  r.pattern ?? (r.pattern = IC), st.init(t, r);
}), bw = /* @__PURE__ */ ee("$ZodURL", (t, r) => {
  st.init(t, r), t._zod.check = (i) => {
    try {
      const s = i.value.trim(), o = new URL(s);
      r.hostname && (r.hostname.lastIndex = 0, r.hostname.test(o.hostname) || i.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: VC.source,
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
}), _w = /* @__PURE__ */ ee("$ZodEmoji", (t, r) => {
  r.pattern ?? (r.pattern = UC()), st.init(t, r);
}), Sw = /* @__PURE__ */ ee("$ZodNanoID", (t, r) => {
  r.pattern ?? (r.pattern = zC), st.init(t, r);
}), xw = /* @__PURE__ */ ee("$ZodCUID", (t, r) => {
  r.pattern ?? (r.pattern = MC), st.init(t, r);
}), Ew = /* @__PURE__ */ ee("$ZodCUID2", (t, r) => {
  r.pattern ?? (r.pattern = DC), st.init(t, r);
}), Cw = /* @__PURE__ */ ee("$ZodULID", (t, r) => {
  r.pattern ?? (r.pattern = kC), st.init(t, r);
}), ww = /* @__PURE__ */ ee("$ZodXID", (t, r) => {
  r.pattern ?? (r.pattern = jC), st.init(t, r);
}), Aw = /* @__PURE__ */ ee("$ZodKSUID", (t, r) => {
  r.pattern ?? (r.pattern = RC), st.init(t, r);
}), Nw = /* @__PURE__ */ ee("$ZodISODateTime", (t, r) => {
  r.pattern ?? (r.pattern = QC(r)), st.init(t, r);
}), Tw = /* @__PURE__ */ ee("$ZodISODate", (t, r) => {
  r.pattern ?? (r.pattern = XC), st.init(t, r);
}), Ow = /* @__PURE__ */ ee("$ZodISOTime", (t, r) => {
  r.pattern ?? (r.pattern = $C(r)), st.init(t, r);
}), Mw = /* @__PURE__ */ ee("$ZodISODuration", (t, r) => {
  r.pattern ?? (r.pattern = LC), st.init(t, r);
}), Dw = /* @__PURE__ */ ee("$ZodIPv4", (t, r) => {
  r.pattern ?? (r.pattern = HC), st.init(t, r), t._zod.onattach.push((i) => {
    const s = i._zod.bag;
    s.format = "ipv4";
  });
}), kw = /* @__PURE__ */ ee("$ZodIPv6", (t, r) => {
  r.pattern ?? (r.pattern = qC), st.init(t, r), t._zod.onattach.push((i) => {
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
}), jw = /* @__PURE__ */ ee("$ZodCIDRv4", (t, r) => {
  r.pattern ?? (r.pattern = FC), st.init(t, r);
}), Rw = /* @__PURE__ */ ee("$ZodCIDRv6", (t, r) => {
  r.pattern ?? (r.pattern = ZC), st.init(t, r), t._zod.check = (i) => {
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
function d1(t) {
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
const zw = /* @__PURE__ */ ee("$ZodBase64", (t, r) => {
  r.pattern ?? (r.pattern = GC), st.init(t, r), t._zod.onattach.push((i) => {
    i._zod.bag.contentEncoding = "base64";
  }), t._zod.check = (i) => {
    d1(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64",
      input: i.value,
      inst: t,
      continue: !r.abort
    });
  };
});
function Lw(t) {
  if (!s1.test(t))
    return !1;
  const r = t.replace(/[-_]/g, (s) => s === "-" ? "+" : "/"), i = r.padEnd(Math.ceil(r.length / 4) * 4, "=");
  return d1(i);
}
const Pw = /* @__PURE__ */ ee("$ZodBase64URL", (t, r) => {
  r.pattern ?? (r.pattern = s1), st.init(t, r), t._zod.onattach.push((i) => {
    i._zod.bag.contentEncoding = "base64url";
  }), t._zod.check = (i) => {
    Lw(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: i.value,
      inst: t,
      continue: !r.abort
    });
  };
}), Iw = /* @__PURE__ */ ee("$ZodE164", (t, r) => {
  r.pattern ?? (r.pattern = YC), st.init(t, r);
});
function Bw(t, r = null) {
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
const Uw = /* @__PURE__ */ ee("$ZodJWT", (t, r) => {
  st.init(t, r), t._zod.check = (i) => {
    Bw(i.value, r.alg) || i.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: i.value,
      inst: t,
      continue: !r.abort
    });
  };
}), h1 = /* @__PURE__ */ ee("$ZodNumber", (t, r) => {
  xt.init(t, r), t._zod.pattern = t._zod.bag.pattern ?? WC, t._zod.parse = (i, s) => {
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
}), Hw = /* @__PURE__ */ ee("$ZodNumber", (t, r) => {
  rw.init(t, r), h1.init(t, r);
}), qw = /* @__PURE__ */ ee("$ZodUnknown", (t, r) => {
  xt.init(t, r), t._zod.parse = (i) => i;
}), Fw = /* @__PURE__ */ ee("$ZodNever", (t, r) => {
  xt.init(t, r), t._zod.parse = (i, s) => (i.issues.push({
    expected: "never",
    code: "invalid_type",
    input: i.value,
    inst: t
  }), i);
});
function Dy(t, r, i) {
  t.issues.length && r.issues.push(...n1(i, t.issues)), r.value[i] = t.value;
}
const Zw = /* @__PURE__ */ ee("$ZodArray", (t, r) => {
  xt.init(t, r), t._zod.parse = (i, s) => {
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
      h instanceof Promise ? u.push(h.then((y) => Dy(y, i, f))) : Dy(h, i, f);
    }
    return u.length ? Promise.all(u).then(() => i) : i;
  };
});
function xu(t, r, i, s) {
  t.issues.length && r.issues.push(...n1(i, t.issues)), t.value === void 0 ? i in s && (r.value[i] = void 0) : r.value[i] = t.value;
}
function p1(t) {
  const r = Object.keys(t.shape);
  for (const s of r)
    if (!t.shape?.[s]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${s}": expected a Zod schema`);
  const i = uC(t.shape);
  return {
    ...t,
    keys: r,
    keySet: new Set(r),
    numKeys: r.length,
    optionalKeys: new Set(i)
  };
}
function m1(t, r, i, s, o, u) {
  const f = [], p = o.keySet, h = o.catchall._zod, y = h.def.type;
  for (const b of Object.keys(r)) {
    if (p.has(b))
      continue;
    if (y === "never") {
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
const Gw = /* @__PURE__ */ ee("$ZodObject", (t, r) => {
  if (xt.init(t, r), !Object.getOwnPropertyDescriptor(r, "shape")?.get) {
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
  const s = nh(() => p1(r));
  rt(t._zod, "propValues", () => {
    const p = r.shape, h = {};
    for (const y in p) {
      const b = p[y]._zod;
      if (b.values) {
        h[y] ?? (h[y] = /* @__PURE__ */ new Set());
        for (const _ of b.values)
          h[y].add(_);
      }
    }
    return h;
  });
  const o = Su, u = r.catchall;
  let f;
  t._zod.parse = (p, h) => {
    f ?? (f = s.value);
    const y = p.value;
    if (!o(y))
      return p.issues.push({
        expected: "object",
        code: "invalid_type",
        input: y,
        inst: t
      }), p;
    p.value = {};
    const b = [], _ = f.shape;
    for (const m of f.keys) {
      const d = _[m]._zod.run({ value: y[m], issues: [] }, h);
      d instanceof Promise ? b.push(d.then((x) => xu(x, p, m, y))) : xu(d, p, m, y);
    }
    return u ? m1(b, y, p, h, s.value, t) : b.length ? Promise.all(b).then(() => p) : p;
  };
}), Vw = /* @__PURE__ */ ee("$ZodObjectJIT", (t, r) => {
  Gw.init(t, r);
  const i = t._zod.parse, s = nh(() => p1(r)), o = (m) => {
    const g = new pw(["shape", "payload", "ctx"]), d = s.value, x = (M) => {
      const C = Oy(M);
      return `shape[${C}]._zod.run({ value: input[${C}], issues: [] }, ctx)`;
    };
    g.write("const input = payload.value;");
    const E = /* @__PURE__ */ Object.create(null);
    let T = 0;
    for (const M of d.keys)
      E[M] = `key_${T++}`;
    g.write("const newResult = {};");
    for (const M of d.keys) {
      const C = E[M], N = Oy(M);
      g.write(`const ${C} = ${x(M)};`), g.write(`
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
    g.write("payload.value = newResult;"), g.write("return payload;");
    const A = g.compile();
    return (M, C) => A(m, M, C);
  };
  let u;
  const f = Su, p = !K0.jitless, y = p && lC.value, b = r.catchall;
  let _;
  t._zod.parse = (m, g) => {
    _ ?? (_ = s.value);
    const d = m.value;
    return f(d) ? p && y && g?.async === !1 && g.jitless !== !0 ? (u || (u = o(r.shape)), m = u(m, g), b ? m1([], d, m, g, _, t) : m) : i(m, g) : (m.issues.push({
      expected: "object",
      code: "invalid_type",
      input: d,
      inst: t
    }), m);
  };
});
function ky(t, r, i, s) {
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
const Yw = /* @__PURE__ */ ee("$ZodUnion", (t, r) => {
  xt.init(t, r), rt(t._zod, "optin", () => r.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0), rt(t._zod, "optout", () => r.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0), rt(t._zod, "values", () => {
    if (r.options.every((o) => o._zod.values))
      return new Set(r.options.flatMap((o) => Array.from(o._zod.values)));
  }), rt(t._zod, "pattern", () => {
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
      const y = h._zod.run({
        value: o.value,
        issues: []
      }, u);
      if (y instanceof Promise)
        p.push(y), f = !0;
      else {
        if (y.issues.length === 0)
          return y;
        p.push(y);
      }
    }
    return f ? Promise.all(p).then((h) => ky(h, o, t, u)) : ky(p, o, t, u);
  };
}), Xw = /* @__PURE__ */ ee("$ZodIntersection", (t, r) => {
  xt.init(t, r), t._zod.parse = (i, s) => {
    const o = i.value, u = r.left._zod.run({ value: o, issues: [] }, s), f = r.right._zod.run({ value: o, issues: [] }, s);
    return u instanceof Promise || f instanceof Promise ? Promise.all([u, f]).then(([h, y]) => jy(i, h, y)) : jy(i, u, f);
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
const $w = /* @__PURE__ */ ee("$ZodEnum", (t, r) => {
  xt.init(t, r);
  const i = W0(r.entries), s = new Set(i);
  t._zod.values = s, t._zod.pattern = new RegExp(`^(${i.filter((o) => oC.has(typeof o)).map((o) => typeof o == "string" ? Au(o) : o.toString()).join("|")})$`), t._zod.parse = (o, u) => {
    const f = o.value;
    return s.has(f) || o.issues.push({
      code: "invalid_value",
      values: i,
      input: f,
      inst: t
    }), o;
  };
}), Qw = /* @__PURE__ */ ee("$ZodTransform", (t, r) => {
  xt.init(t, r), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      throw new J0(t.constructor.name);
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
const Jw = /* @__PURE__ */ ee("$ZodOptional", (t, r) => {
  xt.init(t, r), t._zod.optin = "optional", t._zod.optout = "optional", rt(t._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, void 0]) : void 0), rt(t._zod, "pattern", () => {
    const i = r.innerType._zod.pattern;
    return i ? new RegExp(`^(${ah(i.source)})?$`) : void 0;
  }), t._zod.parse = (i, s) => {
    if (r.innerType._zod.optin === "optional") {
      const o = r.innerType._zod.run(i, s);
      return o instanceof Promise ? o.then((u) => Ry(u, i.value)) : Ry(o, i.value);
    }
    return i.value === void 0 ? i : r.innerType._zod.run(i, s);
  };
}), Kw = /* @__PURE__ */ ee("$ZodNullable", (t, r) => {
  xt.init(t, r), rt(t._zod, "optin", () => r.innerType._zod.optin), rt(t._zod, "optout", () => r.innerType._zod.optout), rt(t._zod, "pattern", () => {
    const i = r.innerType._zod.pattern;
    return i ? new RegExp(`^(${ah(i.source)}|null)$`) : void 0;
  }), rt(t._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, null]) : void 0), t._zod.parse = (i, s) => i.value === null ? i : r.innerType._zod.run(i, s);
}), Ww = /* @__PURE__ */ ee("$ZodDefault", (t, r) => {
  xt.init(t, r), t._zod.optin = "optional", rt(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (i, s) => {
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
const e3 = /* @__PURE__ */ ee("$ZodPrefault", (t, r) => {
  xt.init(t, r), t._zod.optin = "optional", rt(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (i, s) => (s.direction === "backward" || i.value === void 0 && (i.value = r.defaultValue), r.innerType._zod.run(i, s));
}), t3 = /* @__PURE__ */ ee("$ZodNonOptional", (t, r) => {
  xt.init(t, r), rt(t._zod, "values", () => {
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
const n3 = /* @__PURE__ */ ee("$ZodCatch", (t, r) => {
  xt.init(t, r), rt(t._zod, "optin", () => r.innerType._zod.optin), rt(t._zod, "optout", () => r.innerType._zod.optout), rt(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (i, s) => {
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
}), r3 = /* @__PURE__ */ ee("$ZodPipe", (t, r) => {
  xt.init(t, r), rt(t._zod, "values", () => r.in._zod.values), rt(t._zod, "optin", () => r.in._zod.optin), rt(t._zod, "optout", () => r.out._zod.optout), rt(t._zod, "propValues", () => r.in._zod.propValues), t._zod.parse = (i, s) => {
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
const a3 = /* @__PURE__ */ ee("$ZodReadonly", (t, r) => {
  xt.init(t, r), rt(t._zod, "propValues", () => r.innerType._zod.propValues), rt(t._zod, "values", () => r.innerType._zod.values), rt(t._zod, "optin", () => r.innerType._zod.optin), rt(t._zod, "optout", () => r.innerType._zod.optout), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(i, s);
    const o = r.innerType._zod.run(i, s);
    return o instanceof Promise ? o.then(Py) : Py(o);
  };
});
function Py(t) {
  return t.value = Object.freeze(t.value), t;
}
const i3 = /* @__PURE__ */ ee("$ZodCustom", (t, r) => {
  an.init(t, r), xt.init(t, r), t._zod.parse = (i, s) => i, t._zod.check = (i) => {
    const s = i.value, o = r.fn(s);
    if (o instanceof Promise)
      return o.then((u) => Iy(u, i, s, t));
    Iy(o, i, s, t);
  };
});
function Iy(t, r, i, s) {
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
class g1 {
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
function s3() {
  return new g1();
}
const Qs = /* @__PURE__ */ s3();
function l3(t, r) {
  return new t({
    type: "string",
    ..._e(r)
  });
}
function o3(t, r) {
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
function u3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
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
    version: "v4",
    ..._e(r)
  });
}
function f3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ..._e(r)
  });
}
function d3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ..._e(r)
  });
}
function h3(t, r) {
  return new t({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function p3(t, r) {
  return new t({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function m3(t, r) {
  return new t({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function g3(t, r) {
  return new t({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function v3(t, r) {
  return new t({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function y3(t, r) {
  return new t({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function b3(t, r) {
  return new t({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function _3(t, r) {
  return new t({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function S3(t, r) {
  return new t({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function x3(t, r) {
  return new t({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function E3(t, r) {
  return new t({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function C3(t, r) {
  return new t({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function w3(t, r) {
  return new t({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function A3(t, r) {
  return new t({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function N3(t, r) {
  return new t({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function T3(t, r) {
  return new t({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function O3(t, r) {
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
function k3(t, r) {
  return new t({
    type: "string",
    format: "duration",
    check: "string_format",
    ..._e(r)
  });
}
function j3(t, r) {
  return new t({
    type: "number",
    checks: [],
    ..._e(r)
  });
}
function R3(t, r) {
  return new t({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ..._e(r)
  });
}
function z3(t) {
  return new t({
    type: "unknown"
  });
}
function L3(t, r) {
  return new t({
    type: "never",
    ..._e(r)
  });
}
function Uy(t, r) {
  return new c1({
    check: "less_than",
    ..._e(r),
    value: t,
    inclusive: !1
  });
}
function gd(t, r) {
  return new c1({
    check: "less_than",
    ..._e(r),
    value: t,
    inclusive: !0
  });
}
function Hy(t, r) {
  return new f1({
    check: "greater_than",
    ..._e(r),
    value: t,
    inclusive: !1
  });
}
function vd(t, r) {
  return new f1({
    check: "greater_than",
    ..._e(r),
    value: t,
    inclusive: !0
  });
}
function qy(t, r) {
  return new nw({
    check: "multiple_of",
    ..._e(r),
    value: t
  });
}
function v1(t, r) {
  return new aw({
    check: "max_length",
    ..._e(r),
    maximum: t
  });
}
function Eu(t, r) {
  return new iw({
    check: "min_length",
    ..._e(r),
    minimum: t
  });
}
function y1(t, r) {
  return new sw({
    check: "length_equals",
    ..._e(r),
    length: t
  });
}
function P3(t, r) {
  return new lw({
    check: "string_format",
    format: "regex",
    ..._e(r),
    pattern: t
  });
}
function I3(t) {
  return new ow({
    check: "string_format",
    format: "lowercase",
    ..._e(t)
  });
}
function B3(t) {
  return new uw({
    check: "string_format",
    format: "uppercase",
    ..._e(t)
  });
}
function U3(t, r) {
  return new cw({
    check: "string_format",
    format: "includes",
    ..._e(r),
    includes: t
  });
}
function H3(t, r) {
  return new fw({
    check: "string_format",
    format: "starts_with",
    ..._e(r),
    prefix: t
  });
}
function q3(t, r) {
  return new dw({
    check: "string_format",
    format: "ends_with",
    ..._e(r),
    suffix: t
  });
}
function ol(t) {
  return new hw({
    check: "overwrite",
    tx: t
  });
}
function F3(t) {
  return ol((r) => r.normalize(t));
}
function Z3() {
  return ol((t) => t.trim());
}
function G3() {
  return ol((t) => t.toLowerCase());
}
function V3() {
  return ol((t) => t.toUpperCase());
}
function Y3(t, r, i) {
  return new t({
    type: "array",
    element: r,
    // get element() {
    //   return element;
    // },
    ..._e(i)
  });
}
function X3(t, r, i) {
  return new t({
    type: "custom",
    check: "custom",
    fn: r,
    ..._e(i)
  });
}
function $3(t) {
  const r = Q3((i) => (i.addIssue = (s) => {
    if (typeof s == "string")
      i.issues.push(al(s, i.value, r._zod.def));
    else {
      const o = s;
      o.fatal && (o.continue = !1), o.code ?? (o.code = "custom"), o.input ?? (o.input = i.value), o.inst ?? (o.inst = r), o.continue ?? (o.continue = !r._zod.def.abort), i.issues.push(al(o));
    }
  }, t(i.value, i)));
  return r;
}
function Q3(t, r) {
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
      }, m = r._zod.parent;
      if (m)
        p.ref = m, this.process(m, _), this.seen.get(m).isParent = !0;
      else {
        const g = p.schema;
        switch (o.type) {
          case "string": {
            const d = g;
            d.type = "string";
            const { minimum: x, maximum: E, format: T, patterns: A, contentEncoding: M } = r._zod.bag;
            if (typeof x == "number" && (d.minLength = x), typeof E == "number" && (d.maxLength = E), T && (d.format = u[T] ?? T, d.format === "" && delete d.format), M && (d.contentEncoding = M), A && A.size > 0) {
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
            const d = g, { minimum: x, maximum: E, format: T, multipleOf: A, exclusiveMaximum: M, exclusiveMinimum: C } = r._zod.bag;
            typeof T == "string" && T.includes("int") ? d.type = "integer" : d.type = "number", typeof C == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (d.minimum = C, d.exclusiveMinimum = !0) : d.exclusiveMinimum = C), typeof x == "number" && (d.minimum = x, typeof C == "number" && this.target !== "draft-4" && (C >= x ? delete d.minimum : delete d.exclusiveMinimum)), typeof M == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (d.maximum = M, d.exclusiveMaximum = !0) : d.exclusiveMaximum = M), typeof E == "number" && (d.maximum = E, typeof M == "number" && this.target !== "draft-4" && (M <= E ? delete d.maximum : delete d.exclusiveMaximum)), typeof A == "number" && (d.multipleOf = A);
            break;
          }
          case "boolean": {
            const d = g;
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
            this.target === "openapi-3.0" ? (g.type = "string", g.nullable = !0, g.enum = [null]) : g.type = "null";
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
            g.not = {};
            break;
          }
          case "date": {
            if (this.unrepresentable === "throw")
              throw new Error("Date cannot be represented in JSON Schema");
            break;
          }
          case "array": {
            const d = g, { minimum: x, maximum: E } = r._zod.bag;
            typeof x == "number" && (d.minItems = x), typeof E == "number" && (d.maxItems = E), d.type = "array", d.items = this.process(o.element, { ..._, path: [..._.path, "items"] });
            break;
          }
          case "object": {
            const d = g;
            d.type = "object", d.properties = {};
            const x = o.shape;
            for (const A in x)
              d.properties[A] = this.process(x[A], {
                ..._,
                path: [..._.path, "properties", A]
              });
            const E = new Set(Object.keys(x)), T = new Set([...E].filter((A) => {
              const M = o.shape[A]._zod;
              return this.io === "input" ? M.optin === void 0 : M.optout === void 0;
            }));
            T.size > 0 && (d.required = Array.from(T)), o.catchall?._zod.def.type === "never" ? d.additionalProperties = !1 : o.catchall ? o.catchall && (d.additionalProperties = this.process(o.catchall, {
              ..._,
              path: [..._.path, "additionalProperties"]
            })) : this.io === "output" && (d.additionalProperties = !1);
            break;
          }
          case "union": {
            const d = g, x = o.options.map((E, T) => this.process(E, {
              ..._,
              path: [..._.path, "anyOf", T]
            }));
            d.anyOf = x;
            break;
          }
          case "intersection": {
            const d = g, x = this.process(o.left, {
              ..._,
              path: [..._.path, "allOf", 0]
            }), E = this.process(o.right, {
              ..._,
              path: [..._.path, "allOf", 1]
            }), T = (M) => "allOf" in M && Object.keys(M).length === 1, A = [
              ...T(x) ? x.allOf : [x],
              ...T(E) ? E.allOf : [E]
            ];
            d.allOf = A;
            break;
          }
          case "tuple": {
            const d = g;
            d.type = "array";
            const x = this.target === "draft-2020-12" ? "prefixItems" : "items", E = this.target === "draft-2020-12" || this.target === "openapi-3.0" ? "items" : "additionalItems", T = o.items.map((N, D) => this.process(N, {
              ..._,
              path: [..._.path, x, D]
            })), A = o.rest ? this.process(o.rest, {
              ..._,
              path: [..._.path, E, ...this.target === "openapi-3.0" ? [o.items.length] : []]
            }) : null;
            this.target === "draft-2020-12" ? (d.prefixItems = T, A && (d.items = A)) : this.target === "openapi-3.0" ? (d.items = {
              anyOf: T
            }, A && d.items.anyOf.push(A), d.minItems = T.length, A || (d.maxItems = T.length)) : (d.items = T, A && (d.additionalItems = A));
            const { minimum: M, maximum: C } = r._zod.bag;
            typeof M == "number" && (d.minItems = M), typeof C == "number" && (d.maxItems = C);
            break;
          }
          case "record": {
            const d = g;
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
            const d = g, x = W0(o.entries);
            x.every((E) => typeof E == "number") && (d.type = "number"), x.every((E) => typeof E == "string") && (d.type = "string"), d.enum = x;
            break;
          }
          case "literal": {
            const d = g, x = [];
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
            const d = g, x = {
              type: "string",
              format: "binary",
              contentEncoding: "binary"
            }, { minimum: E, maximum: T, mime: A } = r._zod.bag;
            E !== void 0 && (x.minLength = E), T !== void 0 && (x.maxLength = T), A ? A.length === 1 ? (x.contentMediaType = A[0], Object.assign(d, x)) : d.anyOf = A.map((M) => ({ ...x, contentMediaType: M })) : Object.assign(d, x);
            break;
          }
          case "transform": {
            if (this.unrepresentable === "throw")
              throw new Error("Transforms cannot be represented in JSON Schema");
            break;
          }
          case "nullable": {
            const d = this.process(o.innerType, _);
            this.target === "openapi-3.0" ? (p.ref = o.innerType, g.nullable = !0) : g.anyOf = [d, { type: "null" }];
            break;
          }
          case "nonoptional": {
            this.process(o.innerType, _), p.ref = o.innerType;
            break;
          }
          case "success": {
            const d = g;
            d.type = "boolean";
            break;
          }
          case "default": {
            this.process(o.innerType, _), p.ref = o.innerType, g.default = JSON.parse(JSON.stringify(o.defaultValue));
            break;
          }
          case "prefault": {
            this.process(o.innerType, _), p.ref = o.innerType, this.io === "input" && (g._prefault = JSON.parse(JSON.stringify(o.defaultValue)));
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
            g.default = d;
            break;
          }
          case "nan": {
            if (this.unrepresentable === "throw")
              throw new Error("NaN cannot be represented in JSON Schema");
            break;
          }
          case "template_literal": {
            const d = g, x = r._zod.pattern;
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
            this.process(o.innerType, _), p.ref = o.innerType, g.readOnly = !0;
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
    const y = this.metadataRegistry.get(r);
    return y && Object.assign(p.schema, y), this.io === "input" && wt(r) && (delete p.schema.examples, delete p.schema.default), this.io === "input" && p.schema._prefault && ((s = p.schema).default ?? (s.default = p.schema._prefault)), delete p.schema._prefault, this.seen.get(r).schema;
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
      const g = `#/${_}/`, d = b[1].schema.id ?? `__schema${this.counter++}`;
      return { defId: d, ref: g + d };
    }, f = (b) => {
      if (b[1].schema.$ref)
        return;
      const _ = b[1], { ref: m, defId: g } = u(b);
      _.def = { ..._.schema }, g && (_.defId = g);
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
        const g = s.external.registry.get(b[0])?.id;
        if (r !== b[0] && g) {
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
      const m = this.seen.get(b), g = m.def ?? m.schema, d = { ...g };
      if (m.ref === null)
        return;
      const x = m.ref;
      if (m.ref = null, x) {
        p(x, _);
        const E = this.seen.get(x).schema;
        E.$ref && (_.target === "draft-7" || _.target === "draft-4" || _.target === "openapi-3.0") ? (g.allOf = g.allOf ?? [], g.allOf.push(E)) : (Object.assign(g, E), Object.assign(g, d));
      }
      m.isParent || this.override({
        zodSchema: b,
        jsonSchema: g,
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
    const y = s.external?.defs ?? {};
    for (const b of this.seen.entries()) {
      const _ = b[1];
      _.def && _.defId && (y[_.defId] = _.def);
    }
    s.external || Object.keys(y).length > 0 && (this.target === "draft-2020-12" ? h.$defs = y : h.definitions = y);
    try {
      return JSON.parse(JSON.stringify(h));
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
}
function J3(t, r) {
  if (t instanceof g1) {
    const s = new Fy(r), o = {};
    for (const p of t._idmap.entries()) {
      const [h, y] = p;
      s.process(y);
    }
    const u = {}, f = {
      registry: t,
      uri: r?.uri,
      defs: o
    };
    for (const p of t._idmap.entries()) {
      const [h, y] = p;
      u[h] = s.emit(y, {
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
function wt(t, r) {
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
      return wt(o.element, i);
    case "object": {
      for (const u in o.shape)
        if (wt(o.shape[u], i))
          return !0;
      return !1;
    }
    case "union": {
      for (const u of o.options)
        if (wt(u, i))
          return !0;
      return !1;
    }
    case "intersection":
      return wt(o.left, i) || wt(o.right, i);
    case "tuple": {
      for (const u of o.items)
        if (wt(u, i))
          return !0;
      return !!(o.rest && wt(o.rest, i));
    }
    case "record":
      return wt(o.keyType, i) || wt(o.valueType, i);
    case "map":
      return wt(o.keyType, i) || wt(o.valueType, i);
    case "set":
      return wt(o.valueType, i);
    // inner types
    case "promise":
    case "optional":
    case "nonoptional":
    case "nullable":
    case "readonly":
      return wt(o.innerType, i);
    case "lazy":
      return wt(o.getter(), i);
    case "default":
      return wt(o.innerType, i);
    case "prefault":
      return wt(o.innerType, i);
    case "custom":
      return !1;
    case "transform":
      return !0;
    case "pipe":
      return wt(o.in, i) || wt(o.out, i);
    case "success":
      return !1;
    case "catch":
      return !1;
    case "function":
      return !1;
  }
  throw new Error(`Unknown schema type: ${o.type}`);
}
const K3 = /* @__PURE__ */ ee("ZodISODateTime", (t, r) => {
  Nw.init(t, r), ut.init(t, r);
});
function W3(t) {
  return O3(K3, t);
}
const e4 = /* @__PURE__ */ ee("ZodISODate", (t, r) => {
  Tw.init(t, r), ut.init(t, r);
});
function t4(t) {
  return M3(e4, t);
}
const n4 = /* @__PURE__ */ ee("ZodISOTime", (t, r) => {
  Ow.init(t, r), ut.init(t, r);
});
function r4(t) {
  return D3(n4, t);
}
const a4 = /* @__PURE__ */ ee("ZodISODuration", (t, r) => {
  Mw.init(t, r), ut.init(t, r);
});
function i4(t) {
  return k3(a4, t);
}
const s4 = (t, r) => {
  a1.init(t, r), t.name = "ZodError", Object.defineProperties(t, {
    format: {
      value: (i) => bC(t, i)
      // enumerable: false,
    },
    flatten: {
      value: (i) => yC(t, i)
      // enumerable: false,
    },
    addIssue: {
      value: (i) => {
        t.issues.push(i), t.message = JSON.stringify(t.issues, Id, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (i) => {
        t.issues.push(...i), t.message = JSON.stringify(t.issues, Id, 2);
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
}, Rn = ee("ZodError", s4, {
  Parent: Error
}), l4 = /* @__PURE__ */ sh(Rn), o4 = /* @__PURE__ */ lh(Rn), u4 = /* @__PURE__ */ Nu(Rn), c4 = /* @__PURE__ */ Tu(Rn), f4 = /* @__PURE__ */ xC(Rn), d4 = /* @__PURE__ */ EC(Rn), h4 = /* @__PURE__ */ CC(Rn), p4 = /* @__PURE__ */ wC(Rn), m4 = /* @__PURE__ */ AC(Rn), g4 = /* @__PURE__ */ NC(Rn), v4 = /* @__PURE__ */ TC(Rn), y4 = /* @__PURE__ */ OC(Rn), At = /* @__PURE__ */ ee("ZodType", (t, r) => (xt.init(t, r), t.def = r, t.type = r.type, Object.defineProperty(t, "_def", { value: r }), t.check = (...i) => t.clone(Pa(r, {
  checks: [
    ...r.checks ?? [],
    ...i.map((s) => typeof s == "function" ? { _zod: { check: s, def: { check: "custom" }, onattach: [] } } : s)
  ]
})), t.clone = (i, s) => aa(t, i, s), t.brand = () => t, t.register = ((i, s) => (i.add(t, s), t)), t.parse = (i, s) => l4(t, i, s, { callee: t.parse }), t.safeParse = (i, s) => u4(t, i, s), t.parseAsync = async (i, s) => o4(t, i, s, { callee: t.parseAsync }), t.safeParseAsync = async (i, s) => c4(t, i, s), t.spa = t.safeParseAsync, t.encode = (i, s) => f4(t, i, s), t.decode = (i, s) => d4(t, i, s), t.encodeAsync = async (i, s) => h4(t, i, s), t.decodeAsync = async (i, s) => p4(t, i, s), t.safeEncode = (i, s) => m4(t, i, s), t.safeDecode = (i, s) => g4(t, i, s), t.safeEncodeAsync = async (i, s) => v4(t, i, s), t.safeDecodeAsync = async (i, s) => y4(t, i, s), t.refine = (i, s) => t.check(lA(i, s)), t.superRefine = (i) => t.check(oA(i)), t.overwrite = (i) => t.check(ol(i)), t.optional = () => Yy(t), t.nullable = () => Xy(t), t.nullish = () => Yy(Xy(t)), t.nonoptional = (i) => eA(t, i), t.array = () => qn(t), t.or = (i) => Z4([t, i]), t.and = (i) => V4(t, i), t.transform = (i) => $y(t, X4(i)), t.default = (i) => J4(t, i), t.prefault = (i) => W4(t, i), t.catch = (i) => nA(t, i), t.pipe = (i) => $y(t, i), t.readonly = () => iA(t), t.describe = (i) => {
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
}, t.isOptional = () => t.safeParse(void 0).success, t.isNullable = () => t.safeParse(null).success, t)), b1 = /* @__PURE__ */ ee("_ZodString", (t, r) => {
  oh.init(t, r), At.init(t, r);
  const i = t._zod.bag;
  t.format = i.format ?? null, t.minLength = i.minimum ?? null, t.maxLength = i.maximum ?? null, t.regex = (...s) => t.check(P3(...s)), t.includes = (...s) => t.check(U3(...s)), t.startsWith = (...s) => t.check(H3(...s)), t.endsWith = (...s) => t.check(q3(...s)), t.min = (...s) => t.check(Eu(...s)), t.max = (...s) => t.check(v1(...s)), t.length = (...s) => t.check(y1(...s)), t.nonempty = (...s) => t.check(Eu(1, ...s)), t.lowercase = (s) => t.check(I3(s)), t.uppercase = (s) => t.check(B3(s)), t.trim = () => t.check(Z3()), t.normalize = (...s) => t.check(F3(...s)), t.toLowerCase = () => t.check(G3()), t.toUpperCase = () => t.check(V3());
}), b4 = /* @__PURE__ */ ee("ZodString", (t, r) => {
  oh.init(t, r), b1.init(t, r), t.email = (i) => t.check(o3(_4, i)), t.url = (i) => t.check(h3(S4, i)), t.jwt = (i) => t.check(T3(L4, i)), t.emoji = (i) => t.check(p3(x4, i)), t.guid = (i) => t.check(By(Zy, i)), t.uuid = (i) => t.check(u3(ru, i)), t.uuidv4 = (i) => t.check(c3(ru, i)), t.uuidv6 = (i) => t.check(f3(ru, i)), t.uuidv7 = (i) => t.check(d3(ru, i)), t.nanoid = (i) => t.check(m3(E4, i)), t.guid = (i) => t.check(By(Zy, i)), t.cuid = (i) => t.check(g3(C4, i)), t.cuid2 = (i) => t.check(v3(w4, i)), t.ulid = (i) => t.check(y3(A4, i)), t.base64 = (i) => t.check(w3(j4, i)), t.base64url = (i) => t.check(A3(R4, i)), t.xid = (i) => t.check(b3(N4, i)), t.ksuid = (i) => t.check(_3(T4, i)), t.ipv4 = (i) => t.check(S3(O4, i)), t.ipv6 = (i) => t.check(x3(M4, i)), t.cidrv4 = (i) => t.check(E3(D4, i)), t.cidrv6 = (i) => t.check(C3(k4, i)), t.e164 = (i) => t.check(N3(z4, i)), t.datetime = (i) => t.check(W3(i)), t.date = (i) => t.check(t4(i)), t.time = (i) => t.check(r4(i)), t.duration = (i) => t.check(i4(i));
});
function jn(t) {
  return l3(b4, t);
}
const ut = /* @__PURE__ */ ee("ZodStringFormat", (t, r) => {
  st.init(t, r), b1.init(t, r);
}), _4 = /* @__PURE__ */ ee("ZodEmail", (t, r) => {
  yw.init(t, r), ut.init(t, r);
}), Zy = /* @__PURE__ */ ee("ZodGUID", (t, r) => {
  gw.init(t, r), ut.init(t, r);
}), ru = /* @__PURE__ */ ee("ZodUUID", (t, r) => {
  vw.init(t, r), ut.init(t, r);
}), S4 = /* @__PURE__ */ ee("ZodURL", (t, r) => {
  bw.init(t, r), ut.init(t, r);
}), x4 = /* @__PURE__ */ ee("ZodEmoji", (t, r) => {
  _w.init(t, r), ut.init(t, r);
}), E4 = /* @__PURE__ */ ee("ZodNanoID", (t, r) => {
  Sw.init(t, r), ut.init(t, r);
}), C4 = /* @__PURE__ */ ee("ZodCUID", (t, r) => {
  xw.init(t, r), ut.init(t, r);
}), w4 = /* @__PURE__ */ ee("ZodCUID2", (t, r) => {
  Ew.init(t, r), ut.init(t, r);
}), A4 = /* @__PURE__ */ ee("ZodULID", (t, r) => {
  Cw.init(t, r), ut.init(t, r);
}), N4 = /* @__PURE__ */ ee("ZodXID", (t, r) => {
  ww.init(t, r), ut.init(t, r);
}), T4 = /* @__PURE__ */ ee("ZodKSUID", (t, r) => {
  Aw.init(t, r), ut.init(t, r);
}), O4 = /* @__PURE__ */ ee("ZodIPv4", (t, r) => {
  Dw.init(t, r), ut.init(t, r);
}), M4 = /* @__PURE__ */ ee("ZodIPv6", (t, r) => {
  kw.init(t, r), ut.init(t, r);
}), D4 = /* @__PURE__ */ ee("ZodCIDRv4", (t, r) => {
  jw.init(t, r), ut.init(t, r);
}), k4 = /* @__PURE__ */ ee("ZodCIDRv6", (t, r) => {
  Rw.init(t, r), ut.init(t, r);
}), j4 = /* @__PURE__ */ ee("ZodBase64", (t, r) => {
  zw.init(t, r), ut.init(t, r);
}), R4 = /* @__PURE__ */ ee("ZodBase64URL", (t, r) => {
  Pw.init(t, r), ut.init(t, r);
}), z4 = /* @__PURE__ */ ee("ZodE164", (t, r) => {
  Iw.init(t, r), ut.init(t, r);
}), L4 = /* @__PURE__ */ ee("ZodJWT", (t, r) => {
  Uw.init(t, r), ut.init(t, r);
}), _1 = /* @__PURE__ */ ee("ZodNumber", (t, r) => {
  h1.init(t, r), At.init(t, r), t.gt = (s, o) => t.check(Hy(s, o)), t.gte = (s, o) => t.check(vd(s, o)), t.min = (s, o) => t.check(vd(s, o)), t.lt = (s, o) => t.check(Uy(s, o)), t.lte = (s, o) => t.check(gd(s, o)), t.max = (s, o) => t.check(gd(s, o)), t.int = (s) => t.check(Gy(s)), t.safe = (s) => t.check(Gy(s)), t.positive = (s) => t.check(Hy(0, s)), t.nonnegative = (s) => t.check(vd(0, s)), t.negative = (s) => t.check(Uy(0, s)), t.nonpositive = (s) => t.check(gd(0, s)), t.multipleOf = (s, o) => t.check(qy(s, o)), t.step = (s, o) => t.check(qy(s, o)), t.finite = () => t;
  const i = t._zod.bag;
  t.minValue = Math.max(i.minimum ?? Number.NEGATIVE_INFINITY, i.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, t.maxValue = Math.min(i.maximum ?? Number.POSITIVE_INFINITY, i.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, t.isInt = (i.format ?? "").includes("int") || Number.isSafeInteger(i.multipleOf ?? 0.5), t.isFinite = !0, t.format = i.format ?? null;
});
function Cu(t) {
  return j3(_1, t);
}
const P4 = /* @__PURE__ */ ee("ZodNumberFormat", (t, r) => {
  Hw.init(t, r), _1.init(t, r);
});
function Gy(t) {
  return R3(P4, t);
}
const I4 = /* @__PURE__ */ ee("ZodUnknown", (t, r) => {
  qw.init(t, r), At.init(t, r);
});
function Vy() {
  return z3(I4);
}
const B4 = /* @__PURE__ */ ee("ZodNever", (t, r) => {
  Fw.init(t, r), At.init(t, r);
});
function U4(t) {
  return L3(B4, t);
}
const H4 = /* @__PURE__ */ ee("ZodArray", (t, r) => {
  Zw.init(t, r), At.init(t, r), t.element = r.element, t.min = (i, s) => t.check(Eu(i, s)), t.nonempty = (i) => t.check(Eu(1, i)), t.max = (i, s) => t.check(v1(i, s)), t.length = (i, s) => t.check(y1(i, s)), t.unwrap = () => t.element;
});
function qn(t, r) {
  return Y3(H4, t, r);
}
const q4 = /* @__PURE__ */ ee("ZodObject", (t, r) => {
  Vw.init(t, r), At.init(t, r), rt(t, "shape", () => r.shape), t.keyof = () => Hd(Object.keys(t._zod.def.shape)), t.catchall = (i) => t.clone({ ...t._zod.def, catchall: i }), t.passthrough = () => t.clone({ ...t._zod.def, catchall: Vy() }), t.loose = () => t.clone({ ...t._zod.def, catchall: Vy() }), t.strict = () => t.clone({ ...t._zod.def, catchall: U4() }), t.strip = () => t.clone({ ...t._zod.def, catchall: void 0 }), t.extend = (i) => hC(t, i), t.safeExtend = (i) => pC(t, i), t.merge = (i) => mC(t, i), t.pick = (i) => fC(t, i), t.omit = (i) => dC(t, i), t.partial = (...i) => gC(S1, t, i[0]), t.required = (...i) => vC(x1, t, i[0]);
});
function ja(t, r) {
  const i = {
    type: "object",
    shape: t ?? {},
    ..._e(r)
  };
  return new q4(i);
}
const F4 = /* @__PURE__ */ ee("ZodUnion", (t, r) => {
  Yw.init(t, r), At.init(t, r), t.options = r.options;
});
function Z4(t, r) {
  return new F4({
    type: "union",
    options: t,
    ..._e(r)
  });
}
const G4 = /* @__PURE__ */ ee("ZodIntersection", (t, r) => {
  Xw.init(t, r), At.init(t, r);
});
function V4(t, r) {
  return new G4({
    type: "intersection",
    left: t,
    right: r
  });
}
const Ud = /* @__PURE__ */ ee("ZodEnum", (t, r) => {
  $w.init(t, r), At.init(t, r), t.enum = r.entries, t.options = Object.values(r.entries);
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
const Y4 = /* @__PURE__ */ ee("ZodTransform", (t, r) => {
  Qw.init(t, r), At.init(t, r), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      throw new J0(t.constructor.name);
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
function X4(t) {
  return new Y4({
    type: "transform",
    transform: t
  });
}
const S1 = /* @__PURE__ */ ee("ZodOptional", (t, r) => {
  Jw.init(t, r), At.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function Yy(t) {
  return new S1({
    type: "optional",
    innerType: t
  });
}
const $4 = /* @__PURE__ */ ee("ZodNullable", (t, r) => {
  Kw.init(t, r), At.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function Xy(t) {
  return new $4({
    type: "nullable",
    innerType: t
  });
}
const Q4 = /* @__PURE__ */ ee("ZodDefault", (t, r) => {
  Ww.init(t, r), At.init(t, r), t.unwrap = () => t._zod.def.innerType, t.removeDefault = t.unwrap;
});
function J4(t, r) {
  return new Q4({
    type: "default",
    innerType: t,
    get defaultValue() {
      return typeof r == "function" ? r() : t1(r);
    }
  });
}
const K4 = /* @__PURE__ */ ee("ZodPrefault", (t, r) => {
  e3.init(t, r), At.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function W4(t, r) {
  return new K4({
    type: "prefault",
    innerType: t,
    get defaultValue() {
      return typeof r == "function" ? r() : t1(r);
    }
  });
}
const x1 = /* @__PURE__ */ ee("ZodNonOptional", (t, r) => {
  t3.init(t, r), At.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function eA(t, r) {
  return new x1({
    type: "nonoptional",
    innerType: t,
    ..._e(r)
  });
}
const tA = /* @__PURE__ */ ee("ZodCatch", (t, r) => {
  n3.init(t, r), At.init(t, r), t.unwrap = () => t._zod.def.innerType, t.removeCatch = t.unwrap;
});
function nA(t, r) {
  return new tA({
    type: "catch",
    innerType: t,
    catchValue: typeof r == "function" ? r : () => r
  });
}
const rA = /* @__PURE__ */ ee("ZodPipe", (t, r) => {
  r3.init(t, r), At.init(t, r), t.in = r.in, t.out = r.out;
});
function $y(t, r) {
  return new rA({
    type: "pipe",
    in: t,
    out: r
    // ...util.normalizeParams(params),
  });
}
const aA = /* @__PURE__ */ ee("ZodReadonly", (t, r) => {
  a3.init(t, r), At.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function iA(t) {
  return new aA({
    type: "readonly",
    innerType: t
  });
}
const sA = /* @__PURE__ */ ee("ZodCustom", (t, r) => {
  i3.init(t, r), At.init(t, r);
});
function lA(t, r = {}) {
  return X3(sA, t, r);
}
function oA(t) {
  return $3(t);
}
const Qy = {
  FIELD: "FieldRevision",
  GLOBAL: "GlobalRevision"
}, qd = "placeholder-chatHistory", uA = ja({
  justification: jn().describe(
    "A brief, friendly, and conversational explanation of the changes made, as if you are a helpful assistant."
  ),
  response: jn().describe("The new, full content for the character field.")
}), cA = ja({
  field: jn(),
  value: jn()
}), fA = ja({
  index: Cu().int().positive(),
  value: jn()
});
ja({
  justification: jn(),
  fields_to_change: qn(cA).optional(),
  draft_fields_to_remove: qn(jn()).optional(),
  greetings_to_add: qn(jn()).optional(),
  greetings_to_remove: qn(Cu().int().positive()).optional(),
  greetings_to_change: qn(fA).optional()
});
const dA = (t, r) => {
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
function hA(t, r) {
  const i = Oa(t);
  return r === "xml" ? Fd(i).trim() : JSON.stringify(i, null, 2);
}
function pA(...t) {
  for (const r of t) if (r !== void 0) return r;
}
function mA(t) {
  return Array.isArray(t) ? t.find((r) => r !== "null") ?? t[0] : t;
}
function Oa(t) {
  if (!t || typeof t != "object") return null;
  const r = Array.isArray(t.examples) ? t.examples[0] : void 0, i = pA(t.example, r, t.default);
  if (i !== void 0) return i;
  if (t.const !== void 0) return t.const;
  if (Array.isArray(t.enum) && t.enum.length) return t.enum[0];
  const s = Array.isArray(t.anyOf) ? t.anyOf[0] : Array.isArray(t.oneOf) ? t.oneOf[0] : void 0;
  if (s) return Oa(s);
  switch (mA(t.type)) {
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
const gA = new oS();
async function Zd(t, r, i, s, o, u) {
  const f = !s.json_schema && !1;
  return new Promise((p, h) => {
    const y = new AbortController(), b = u ?? y.signal;
    u && u.addEventListener("abort", () => y.abort(), { once: !0 }), gA.generateRequest(
      {
        profileId: t,
        prompt: r,
        maxTokens: i,
        custom: { stream: f, signal: b },
        overridePayload: s
      },
      {
        abortController: y,
        onEntry: void 0,
        onFinish: (_, m, g) => b.aborted ? h(new DOMException("Request aborted by user", "AbortError")) : g ? h(g) : m === void 0 && g === void 0 ? h(new DOMException("Request aborted by user", "AbortError")) : (m || h(new Error("No data received from LLM")), g ? h(g) : p(m))
      }
    );
  });
}
async function vA(t, r, i, s) {
  const o = await Zd(t, r, i, {}, void 0, s);
  if (!o?.content)
    throw new Error("Plain request failed to return content.");
  return o.content;
}
async function yA(t, r, i, s, o, u, f) {
  const p = Pt.getSettings();
  let h, y;
  const b = J3(i);
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
    y = typeof h.content == "string" ? JSON.parse(h.content) : h.content;
  } else {
    const m = o, g = hA(b, m), d = JSON.stringify(b, null, 2), x = m === "json" ? "reviseJsonPrompt" : "reviseXmlPrompt", E = p.prompts[x]?.content;
    if (!E)
      throw new Error(`Prompt template for mode "${m}" not found.`);
    const T = {
      example_response: g,
      schema: d
    }, M = { role: "system", content: Lt.compile(E, { noEscape: !0, strict: !0 })(T) };
    if (h = await Zd(
      t,
      [...r, M],
      u,
      {},
      void 0,
      f
    ), !h?.content)
      throw new Error(`Structured request for ${s} failed to return content.`);
    y = j0(h.content, m, { schema: b });
  }
  const _ = i.safeParse(y);
  if (!_.success) {
    const m = `Model response failed schema validation for ${s}. Check console for details.`;
    throw console.error("Zod validation failed:", _.error.issues), console.error("Raw content parsed:", y), await Me("error", m), new Error(m);
  }
  return _.data;
}
const E1 = ({ originalContent: t, newContent: r }) => {
  const i = K.useMemo(() => {
    const s = $0(t, r);
    let o = "", u = "";
    return s.forEach((f) => {
      const p = f.value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/\n/g, "<br>"), y = `<span style="${f.added ? "color: green; background-color: #e6ffed;" : f.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${p}</span>`;
      f.added || (o += y), f.removed || (u += y);
    }), { originalHtml: o, newHtml: u };
  }, [t, r]);
  return /* @__PURE__ */ S.jsxs("div", { className: "compare-state-diff-grid", children: [
    /* @__PURE__ */ S.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: i.originalHtml } }),
    /* @__PURE__ */ S.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: i.newHtml } })
  ] });
}, bA = ({ before: t, after: r }) => {
  const i = K.useMemo(() => {
    const s = [];
    return (/* @__PURE__ */ new Set([...Object.keys(t.fields), ...Object.keys(r.fields)])).forEach((u) => {
      const f = t.fields[u], p = r.fields[u], h = f?.value ?? "", y = p?.value ?? "";
      h !== y && s.push({
        label: p?.label ?? f?.label ?? u,
        before: h,
        after: y
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
      /* @__PURE__ */ S.jsx(E1, { originalContent: o, newContent: u })
    ] }, s)) })
  ] });
}, _A = ({ currentState: t, initialState: r }) => {
  const [i, s] = K.useState(!1), { coreFields: o, alternateGreetings: u } = K.useMemo(() => {
    const p = [], h = [];
    return kn.forEach((y) => {
      t.fields[y] && p.push({ label: t.fields[y].label, value: t.fields[y].value });
    }), Object.entries(t.fields).filter(([y]) => y.startsWith("alternate_greetings_")).sort((y, b) => parseInt(y[0].split("_")[2]) - parseInt(b[0].split("_")[2])).forEach(([, y]) => h.push(y.value)), { coreFields: p, alternateGreetings: h };
  }, [t]), f = K.useMemo(() => {
    const p = [];
    return (/* @__PURE__ */ new Set([...Object.keys(r.fields), ...Object.keys(t.fields)])).forEach((y) => {
      const b = r.fields[y], _ = t.fields[y], m = b?.value ?? "", g = _?.value ?? "";
      m !== g && p.push({
        label: _?.label ?? b?.label ?? y,
        before: m,
        after: g
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
    /* @__PURE__ */ S.jsx("div", { className: "current-state-content", children: i ? /* @__PURE__ */ S.jsx("div", { className: "compare-state-list", children: f.length === 0 ? /* @__PURE__ */ S.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes from the original state." }) : f.map(({ label: p, before: h, after: y }) => /* @__PURE__ */ S.jsxs("div", { className: "compare-state-item", children: [
      /* @__PURE__ */ S.jsx("h4", { children: p }),
      /* @__PURE__ */ S.jsxs("div", { className: "compare-state-header", children: [
        /* @__PURE__ */ S.jsx("span", { children: "Original" }),
        /* @__PURE__ */ S.jsx("span", { children: "Current" })
      ] }),
      /* @__PURE__ */ S.jsx(E1, { originalContent: h, newContent: y })
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
}, Mi = SillyTavern.getContext(), SA = (t) => Object.entries(t.fields).filter(([r]) => r.startsWith("alternate_greetings_")).sort((r, i) => {
  const s = parseInt(r[0].split("_")[2]), o = parseInt(i[0].split("_")[2]);
  return s - o;
}).map(([, r]) => r.value), xA = (t, r, i, s) => {
  const o = structuredClone(t);
  if (i === "field" && s) {
    const u = r;
    return o.fields[s] && (o.fields[s].value = u.response), o;
  }
  if (i === "global") {
    const u = r;
    let f = SA(o), p = !1;
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
      const h = new Set(u.greetings_to_remove.map((y) => y - 1));
      f = f.filter((y, b) => !h.has(b));
    }
    u.greetings_to_add?.length && (p = !0, f.push(...u.greetings_to_add)), p && (Object.keys(o.fields).forEach((h) => {
      h.startsWith("alternate_greetings_") && delete o.fields[h];
    }), f.forEach((h, y) => {
      const b = `alternate_greetings_${y + 1}`;
      o.fields[b] = {
        value: h,
        prompt: "",
        // Prompts are not managed in revise sessions.
        label: `Alternate Greeting ${y + 1}`
      };
    }));
  }
  return o;
}, EA = ({ initialState: t, onSave: r, onClose: i }) => {
  const [s, o] = K.useState(() => structuredClone(t)), u = (_, m, g) => {
    const d = structuredClone(s), x = g ? "draftFields" : "fields";
    d[x][_] && (d[x][_].value = m), o(d);
  }, f = (_, m) => {
    const g = structuredClone(s), d = `alternate_greetings_${_ + 1}`;
    g.fields[d] && (g.fields[d].value = m), o(g);
  }, { coreFields: p, alternateGreetings: h, draftFields: y } = K.useMemo(() => {
    const _ = [], m = [], g = [];
    return kn.forEach((d) => {
      s.fields[d] && _.push({ id: d, label: s.fields[d].label, value: s.fields[d].value });
    }), Object.entries(s.fields).filter(([d]) => d.startsWith("alternate_greetings_")).sort((d, x) => parseInt(d[0].split("_")[2]) - parseInt(x[0].split("_")[2])).forEach(([, d]) => m.push(d.value)), Object.entries(s.draftFields).forEach(([d, x]) => {
      g.push({ id: d, label: x.label, value: x.value });
    }), { coreFields: _, alternateGreetings: m, draftFields: g };
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
      p.map(({ id: _, label: m, value: g }) => /* @__PURE__ */ S.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ S.jsx("label", { children: m }),
        /* @__PURE__ */ S.jsx(Yt, { value: g, onChange: (d) => u(_, d.target.value, !1), rows: 4 })
      ] }, _)),
      y.length > 0 && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
        /* @__PURE__ */ S.jsx("h4", { style: { marginTop: "20px" }, children: "Draft Fields" }),
        y.map(({ id: _, label: m, value: g }) => /* @__PURE__ */ S.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ S.jsx("label", { children: m }),
          /* @__PURE__ */ S.jsx(Yt, { value: g, onChange: (d) => u(_, d.target.value, !0), rows: 4 })
        ] }, _))
      ] }),
      h.length > 0 && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
        /* @__PURE__ */ S.jsx("h4", { style: { marginTop: "20px" }, children: "Alternate Greetings" }),
        h.map((_, m) => /* @__PURE__ */ S.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ S.jsxs("label", { children: [
            "Greeting ",
            m + 1
          ] }),
          /* @__PURE__ */ S.jsx(Yt, { value: _, onChange: (g) => f(m, g.target.value), rows: 4 })
        ] }, m))
      ] })
    ] })
  ] });
}, CA = ({
  session: t,
  onBack: r,
  onApply: i,
  onSessionUpdate: s,
  initialState: o,
  chatContextOptions: u
}) => {
  const [f, p] = K.useState(t.messages), [h, y] = K.useState(""), [b, _] = K.useState(!1), [m, g] = K.useState(null), [d, x] = K.useState(!1), [E, T] = K.useState(!1), [A, M] = K.useState(null), [C, N] = K.useState(""), D = K.useRef(null), k = K.useRef(null);
  K.useEffect(() => {
    D.current?.scrollIntoView({ behavior: "smooth" });
  }, [f]);
  const q = K.useCallback(
    (X, ye, be) => {
      if (JSON.stringify(be) === JSON.stringify(ye))
        return X;
      const tt = Pt.getSettings().prompts.existingFieldDefinitions;
      if (!tt) return X;
      const ke = { core: {}, alternate_greetings: {}, draft: {} };
      if ((/* @__PURE__ */ new Set([...Object.keys(be.fields), ...Object.keys(ye.fields)])).forEach((te) => {
        const ue = be.fields[te]?.value ?? "", Te = ye.fields[te]?.value ?? "";
        if (ue !== Te) {
          const Ee = ye.fields[te];
          Ee && (te.startsWith("alternate_greetings_") ? ke.alternate_greetings[Ee.label] = Ee.value : kn.includes(te) && (ke.core[Ee.label] = Ee.value));
        }
      }), (/* @__PURE__ */ new Set([...Object.keys(be.draftFields), ...Object.keys(ye.draftFields)])).forEach((te) => {
        const ue = be.draftFields[te]?.value ?? "", Te = ye.draftFields[te]?.value ?? "";
        if (ue !== Te && ye.draftFields[te]) {
          const Ee = ye.draftFields[te];
          ke.draft[Ee.label] = Ee.value;
        }
      }), Object.keys(ke.core).length === 0 && Object.keys(ke.alternate_greetings).length === 0 && Object.keys(ke.draft).length === 0)
        return X;
      const P = { fields: ke };
      let ne = Lt.compile(tt.content, { noEscape: !0 })(P);
      if (ne = Mi.substituteParams(ne), ne.trim()) {
        const te = {
          id: `msg-${Date.now()}-state`,
          role: "system",
          content: ne.trim(),
          isStateUpdate: !0
        };
        return [...X, te];
      }
      return X;
    },
    []
  ), V = K.useCallback(
    async (X, ye, be, Ge) => {
      const tt = Pt.getSettings();
      if (!t.profileId) {
        Me("warning", "Please select a connection profile for this session.");
        return;
      }
      k.current = new AbortController(), be(), _(!0);
      try {
        const ke = [], ht = Mi.extensionSettings.connectionManager?.profiles?.find(
          (te) => te.id === t.profileId
        ), zn = ht?.api ? Mi.CONNECT_API_MAP[ht.api].selected : void 0;
        if (!zn) {
          Me("warning", "No API selected for this session.");
          return;
        }
        for (const te of X)
          if (te.id === qd) {
            if (yn === void 0 && !xr) continue;
            const ue = await d0(zn, u);
            ue.warnings?.length && ue.warnings.forEach((Te) => Me("warning", Te)), ke.push(...ue.result);
          } else
            ke.push(te);
        const P = X.slice(0, X.length - (ye ? 0 : 1)).reverse().find((te) => te.stateSnapshot)?.stateSnapshot ?? o, ne = tt.prompts.existingFieldDefinitions;
        if (ne) {
          const te = {
            fields: {
              core: Object.fromEntries(
                Object.entries(P.fields).filter(([Te]) => !Te.startsWith("alternate_greetings_")).map(([, Te]) => [Te.label, Te.value])
              ),
              alternate_greetings: Object.fromEntries(
                Object.entries(P.fields).filter(([Te]) => Te.startsWith("alternate_greetings_")).map(([, Te]) => [Te.label, Te.value])
              ),
              draft: Object.fromEntries(Object.entries(P.draftFields).map(([, Te]) => [Te.label, Te.value]))
            }
          };
          let ue = Lt.compile(ne.content, { noEscape: !0 })(te);
          if (ue = Mi.substituteParams(ue), ue.trim()) {
            const Te = {
              id: `temp-state-${Date.now()}`,
              role: "system",
              content: ue.trim()
            }, Ee = ke.pop();
            ke.push(Te), Ee && ke.push(Ee);
          }
        }
        if (t.isReadonly) {
          ke.push({
            id: `msg-${Date.now()}-readonly`,
            role: "system",
            content: "Readonly mode enabled. You can only discuss with the user without making changes."
          });
          const te = await vA(
            t.profileId,
            ke,
            tt.maxResponseToken,
            k.current.signal
          ), ue = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: te
          }, Te = [...X, ue];
          p(Te), s({ ...t, messages: Te });
        } else {
          const te = t.type === "field" ? uA : (() => {
            const qe = [...Object.keys(P.fields), ...Object.keys(P.draftFields)], Fe = Object.keys(P.draftFields);
            return dA(qe, Fe);
          })(), Te = await yA(
            t.profileId,
            ke,
            te,
            t.type === "field" ? Qy.FIELD : Qy.GLOBAL,
            t.promptEngineeringMode,
            tt.maxResponseToken,
            k.current.signal
          ), Ee = xA(P, Te, t.type, t.targetFieldId), ce = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: Te.justification,
            stateSnapshot: Ee
          };
          let me = [...X, ce];
          me = q(me, Ee, P), p(me), s({ ...t, messages: me });
        }
      } catch (ke) {
        ke.name === "AbortError" ? Me("info", "Request was cancelled.") : (console.error("Revise request failed:", ke), Me("error", `Request failed: ${ke.message}`)), Ge();
      } finally {
        _(!1), k.current = null;
      }
    },
    [t, s, o, u, q]
  ), I = K.useCallback(async () => {
    if (!h.trim() || b) return;
    const X = { id: `msg-${Date.now()}`, role: "user", content: h.trim() }, ye = f;
    V(
      [...f, X],
      !1,
      () => {
        p([...f, X]), y("");
      },
      () => p(ye)
    );
  }, [h, b, f, V]), G = K.useCallback(async () => {
    if (b || f.length === 0) return;
    const X = f;
    let ye = [...f];
    const be = f.findLastIndex((Ge) => !Ge.isStateUpdate);
    be > -1 && f[be].role === "assistant" && (ye = f.slice(0, be)), await V(
      ye,
      !0,
      () => p(ye),
      () => p(X)
    );
  }, [b, f, V]), Y = () => {
    const X = f.slice().reverse().find((ye) => ye.stateSnapshot)?.stateSnapshot ?? o;
    i(X), r();
  }, oe = (X) => {
    const ye = f.findIndex((tt) => tt.id === X);
    if (ye === -1 || !f[ye].stateSnapshot) return;
    const be = f[ye].stateSnapshot;
    let Ge = o;
    for (let tt = ye - 1; tt >= 0; tt--)
      if (f[tt].stateSnapshot) {
        Ge = f[tt].stateSnapshot;
        break;
      }
    g({ before: Ge, after: be });
  }, fe = () => {
    x(!0);
  }, ve = (X) => {
    M(X.id), N(X.content);
  }, U = () => {
    M(null), N("");
  }, re = async () => {
    if (!A) return;
    const X = f.findIndex((ht) => ht.id === A);
    if (X === -1 || !await Mi.Popup.show.confirm(
      "Edit Message",
      "This will fork the conversation from this point, removing all subsequent messages. Continue?"
    )) return;
    const be = f, Ge = f.slice(0, X), tt = { ...f[X], content: C }, ke = [...Ge, tt];
    U(), V(
      ke,
      !1,
      () => p(ke),
      () => p(be)
    );
  }, de = async (X) => {
    const ye = f.findIndex((ht) => ht.id === X);
    if (ye === -1) return;
    const Ge = !!f[ye].isInitial;
    if (!await Mi.Popup.show.confirm(
      "Delete Message",
      Ge ? "Deleting part of the initial context will clear the entire chat history. Are you sure?" : "This will delete this message and all subsequent messages. Are you sure?"
    )) return;
    let ke;
    Ge ? ke = f.filter((ht) => ht.isInitial && ht.id !== X) : ke = f.slice(0, ye), p(ke), s({ ...t, messages: ke }), Me("info", "Message history has been updated.");
  }, Le = f.filter((X) => !X.isStateUpdate), R = Le.filter((X) => X.isInitial), Q = Le.filter((X) => !X.isInitial), ae = f.slice().reverse().find((X) => X.stateSnapshot)?.stateSnapshot ?? o, se = () => {
    T(!0);
  }, le = (X) => {
    const ye = f.slice().reverse().find((tt) => tt.stateSnapshot)?.stateSnapshot ?? o, be = {
      id: `msg-${Date.now()}-user-edit`,
      role: "user",
      content: "I made a change.",
      // Default justification for manual edits
      stateSnapshot: X
    };
    let Ge = [...f, be];
    Ge = q(Ge, X, ye), p(Ge), s({ ...t, messages: Ge }), T(!1);
  }, je = () => {
    k.current?.abort();
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
          V0,
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
        /* @__PURE__ */ S.jsx(pe, { onClick: fe, title: "View current character state", children: "View State" }),
        /* @__PURE__ */ S.jsx(pe, { onClick: se, title: "Manually edit the current state", children: "Edit State" }),
        /* @__PURE__ */ S.jsx(pe, { onClick: r, title: "Back to sessions", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-arrow-left" }) }),
        /* @__PURE__ */ S.jsxs(pe, { onClick: Y, title: "Apply Changes and Close", children: [
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
            /* @__PURE__ */ S.jsx(Yt, { value: C, onChange: (ye) => N(ye.target.value), rows: 5 }),
            /* @__PURE__ */ S.jsxs("div", { className: "editor-buttons", children: [
              /* @__PURE__ */ S.jsxs(pe, { onClick: re, children: [
                /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-check" }),
                " Save & Fork"
              ] }),
              /* @__PURE__ */ S.jsxs(pe, { onClick: U, children: [
                /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-times" }),
                " Cancel"
              ] })
            ] })
          ] }, X.id) : /* @__PURE__ */ S.jsxs("div", { className: `message-bubble-wrapper initial-context ${X.role}`, children: [
            /* @__PURE__ */ S.jsx("div", { className: `message-bubble ${X.role} initial`, children: /* @__PURE__ */ S.jsx("div", { className: "message-content", children: X.content }) }),
            !b && X.id !== qd && /* @__PURE__ */ S.jsxs("div", { className: "message-actions", children: [
              /* @__PURE__ */ S.jsxs(
                pe,
                {
                  className: "message-action-button",
                  onClick: () => ve(X),
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
                  onClick: () => de(X.id),
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
      Q.map(
        (X) => A === X.id ? /* @__PURE__ */ S.jsxs("div", { className: "message-editor", children: [
          /* @__PURE__ */ S.jsx(Yt, { value: C, onChange: (ye) => N(ye.target.value), rows: 3 }),
          /* @__PURE__ */ S.jsxs("div", { className: "editor-buttons", children: [
            /* @__PURE__ */ S.jsxs(pe, { onClick: re, children: [
              /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-check" }),
              " Save & Fork"
            ] }),
            /* @__PURE__ */ S.jsxs(pe, { onClick: U, children: [
              /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-times" }),
              " Cancel"
            ] })
          ] })
        ] }, X.id) : /* @__PURE__ */ S.jsxs("div", { className: `message-bubble-wrapper ${X.role}`, children: [
          /* @__PURE__ */ S.jsxs("div", { className: "message-actions", children: [
            X.role === "user" && !X.stateSnapshot && !b && /* @__PURE__ */ S.jsxs(
              pe,
              {
                className: "message-action-button",
                onClick: () => ve(X),
                title: "Edit and Fork",
                children: [
                  " ",
                  /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-pencil" }),
                  " "
                ]
              }
            ),
            X.stateSnapshot && !b && /* @__PURE__ */ S.jsxs(
              pe,
              {
                className: "message-action-button",
                onClick: () => oe(X.id),
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
                onClick: () => de(X.id),
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
      Q.length > 0 && !b && /* @__PURE__ */ S.jsx("div", { className: "regenerate-button-wrapper", children: /* @__PURE__ */ S.jsxs(pe, { onClick: G, title: "Regenerate response", children: [
        " ",
        /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-rotate-right" }),
        " Regenerate",
        " "
      ] }) }),
      b && /* @__PURE__ */ S.jsxs("div", { className: "message-bubble-wrapper assistant", children: [
        /* @__PURE__ */ S.jsx("div", { className: "message-bubble assistant loading", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) }),
        /* @__PURE__ */ S.jsx(pe, { onClick: je, className: "danger_button", title: "Cancel Request", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-stop" }) })
      ] }),
      /* @__PURE__ */ S.jsx("div", { ref: D })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "chat-input-area", children: [
      /* @__PURE__ */ S.jsx(
        Yt,
        {
          value: h,
          onChange: (X) => y(X.target.value),
          placeholder: "Type your revision instructions...",
          rows: 3,
          disabled: b || !!A,
          onKeyDown: (X) => {
            X.key === "Enter" && !X.shiftKey && (X.preventDefault(), I());
          }
        }
      ),
      /* @__PURE__ */ S.jsxs(pe, { onClick: I, disabled: b || !h.trim() || !!A, children: [
        " ",
        /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-paper-plane" }),
        " "
      ] })
    ] }),
    m && /* @__PURE__ */ S.jsx(
      zi,
      {
        type: vn.DISPLAY,
        content: /* @__PURE__ */ S.jsx(bA, { before: m.before, after: m.after }),
        onComplete: () => g(null),
        options: { wide: !0, large: !0 }
      }
    ),
    d && /* @__PURE__ */ S.jsx(
      zi,
      {
        type: vn.DISPLAY,
        content: /* @__PURE__ */ S.jsx(_A, { currentState: ae, initialState: o }),
        onComplete: () => x(!1),
        options: { wide: !0, large: !0 }
      }
    ),
    E && /* @__PURE__ */ S.jsx(
      zi,
      {
        type: vn.DISPLAY,
        content: /* @__PURE__ */ S.jsx(
          EA,
          {
            initialState: ae,
            onSave: le,
            onClose: () => T(!1)
          }
        ),
        onComplete: () => T(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
};
async function wA(t, r, i, s, o) {
  const u = Pt.getSettings(), f = u.mainContextTemplatePresets[i];
  if (!f)
    throw new Error(`Main context template preset "${i}" not found.`);
  const p = [], y = {
    ...{
      user: Kn.name1 || "You",
      char: t.fields.name?.value || "Character",
      persona: Kn.powerUserSettings.persona_description
    },
    fields: {
      core: Object.fromEntries(
        Object.entries(t.fields).filter(([g]) => !g.startsWith("alternate_greetings_")).map(([, g]) => [g.label, g.value])
      ),
      alternate_greetings: Object.fromEntries(
        Object.entries(t.fields).filter(([g]) => g.startsWith("alternate_greetings_")).map(([, g]) => [g.label, g.value])
      ),
      draft: Object.fromEntries(Object.entries(t.draftFields).map(([, g]) => [g.label, g.value]))
    }
  };
  if (s.charCard) {
    const g = [];
    o.selectedCharacterIndexes.forEach((d) => {
      const x = Kn.characters[parseInt(d)];
      x && g.push(x);
    }), y.characters = g;
  }
  if (s.worldInfo) {
    const g = {};
    await Promise.all(
      o.selectedWorldNames.map(async (d) => {
        const x = await Kn.loadWorldInfo(d);
        x && (g[d] = Object.values(x.entries).filter((E) => !E.disable));
      })
    ), y.lorebooks = g;
  }
  for (const g of f.prompts) {
    if (!g.enabled || g.promptName === "stDescription" && !s.stDescription || g.promptName === "charDefinitions" && !s.charCard || g.promptName === "lorebookDefinitions" && !s.worldInfo || g.promptName === "existingFieldDefinitions" && !s.existingFields || g.promptName === "personaDescription" && !s.persona || g.promptName === "chatHistory" && s.messages.type === "none" || yn === void 0 && !xr && g.promptName === "chatHistory") continue;
    if (g.promptName === "chatHistory") {
      p.push({
        id: qd,
        role: "system",
        content: "[[Chat history placeholder]]",
        isInitial: !0
      });
      continue;
    }
    if (["taskDescription", "existingFieldDefinitions"].includes(g.promptName))
      continue;
    const x = u.prompts[g.promptName];
    if (!x || x.content.includes("{{activeFormatInstructions}}"))
      continue;
    let E = "";
    E = Lt.compile(x.content, { noEscape: !0 })(y), E = Kn.substituteParams(E), E.trim() && p.push({
      id: `im-${p.length}`,
      role: g.role,
      content: E.trim(),
      isInitial: !0
    });
  }
  const b = r ? t.fields[r]?.label || t.draftFields[r]?.label : "Global", _ = u.prompts.reviseTaskDescription.content, m = Lt.compile(_, { noEscape: !0 })({
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
const au = SillyTavern.getContext(), Jy = "charCreator_reviseSessions", AA = ({
  target: t,
  onClose: r,
  onApply: i,
  initialState: s,
  contextToSend: o,
  sessionForContext: u
}) => {
  const [f, p] = K.useState([]), [h, y] = K.useState(null), [b, _] = K.useState(!0);
  K.useEffect(() => {
    const M = JSON.parse(localStorage.getItem(Jy) || "[]");
    p(M), _(!1);
  }, []);
  const m = K.useMemo(() => f.filter((M) => M.type === t.type && (M.type === "global" || M.targetFieldId === t.fieldId)).sort((M, C) => new Date(C.createdAt).getTime() - new Date(M.createdAt).getTime()), [f, t]), g = (M) => {
    localStorage.setItem(Jy, JSON.stringify(M)), p(M);
  }, d = async () => {
    const M = t.type === "field" ? s.fields[t.fieldId]?.label || s.draftFields[t.fieldId]?.label : "Global", C = await au.Popup.show.input(
      "New Session Name",
      `Session for ${M} - ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`
    );
    if (C)
      try {
        const N = Pt.getSettings();
        if (!N.profileId) {
          Me("warning", "Please select a connection profile in the main popup first.");
          return;
        }
        const D = {
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
        }, k = await wA(
          s,
          D.targetFieldId,
          D.context.mainContextTemplatePreset,
          o,
          u
        );
        D.messages = k, y(D);
      } catch (N) {
        console.error("Failed to create session:", N), Me("error", `Failed to create session: ${N.message}`);
      }
  }, x = (M) => {
    y(M);
  }, E = async (M) => {
    if (await au.Popup.show.confirm("Delete Session", "Are you sure? This cannot be undone.")) {
      const N = f.filter((D) => D.id !== M);
      g(N);
    }
  }, T = (M) => {
    const C = f.findIndex((D) => D.id === M.id), N = [...f];
    C !== -1 ? N[C] = M : N.push(M), g(N), y(M);
  };
  if (h) {
    const M = au.extensionSettings.connectionManager?.profiles?.find(
      (D) => D.id === h.profileId
    ), C = {
      targetCharacterId: yn,
      ignoreCharacterFields: !0,
      ignoreWorldInfo: !0,
      ignoreAuthorNote: !0,
      includeNames: !!xr,
      presetName: M?.preset,
      contextName: M?.context,
      instructName: M?.instruct
    }, N = o.messages;
    switch (N.type) {
      case "none":
        C.messageIndexesBetween = { start: -1, end: -1 };
        break;
      case "first":
        C.messageIndexesBetween = { start: 0, end: N.first ?? 10 };
        break;
      case "last":
        const D = au.chat?.length ?? 0, k = N.last ?? 10;
        C.messageIndexesBetween = {
          end: Math.max(0, D - 1),
          start: Math.max(0, D - k)
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
      CA,
      {
        session: h,
        onBack: () => y(null),
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
    /* @__PURE__ */ S.jsx("div", { className: "session-list", children: b ? /* @__PURE__ */ S.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "Loading sessions..." }) : m.length === 0 ? /* @__PURE__ */ S.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No sessions found. Create a new one to get started." }) : m.map((M) => /* @__PURE__ */ S.jsxs("div", { className: "session-item", children: [
      /* @__PURE__ */ S.jsxs("div", { className: "session-info", onClick: () => x(M), children: [
        /* @__PURE__ */ S.jsx("span", { className: "session-name", children: M.name }),
        /* @__PURE__ */ S.jsx("span", { className: "session-date", children: new Date(M.createdAt).toLocaleString() })
      ] }),
      /* @__PURE__ */ S.jsx(pe, { className: "danger_button", onClick: () => E(M.id), children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] }, M.id)) }),
    /* @__PURE__ */ S.jsx("div", { className: "session-actions", children: /* @__PURE__ */ S.jsxs(pe, { onClick: d, className: "menu_button", children: [
      /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-plus" }),
      " New Session"
    ] }) })
  ] });
}, NA = SillyTavern.getContext(), TA = `You are an AI assistant helping to refine a character card. The user wants to make changes to their character.

Current character state:
{{currentCharacterJson}}

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
async function OA({
  messages: t,
  session: r,
  profileId: i,
  maxResponseToken: s = 3072
  // Increased default
}) {
  try {
    const o = await Promise.resolve().then(() => F0), u = {};
    kn.forEach((E) => {
      r.fields[E]?.value && (u[E] = r.fields[E].value);
    });
    const f = [];
    Object.keys(r.fields).filter((E) => E.startsWith("alternate_greetings_")).sort((E, T) => parseInt(E.split("_")[2]) - parseInt(T.split("_")[2])).forEach((E) => {
      r.fields[E].value && f.push(r.fields[E].value);
    }), u.alternate_greetings = f;
    const p = o.compile(TA), h = t[t.length - 1].content, y = p({
      currentCharacterJson: JSON.stringify(u, null, 2),
      userMessage: h
    }), b = await NA.ConnectionManagerRequestService.sendRequest(
      i,
      [{ role: "user", content: y }],
      s
    );
    if (!b || !b.content)
      throw new Error("No response from AI");
    let _ = b.content.trim();
    const m = _.match(/```(?:json)?\s*(\{[\s\S]*?)(?:```|$)/i);
    if (m)
      _ = m[1];
    else {
      const E = _.indexOf("{"), T = _.lastIndexOf("}");
      E !== -1 && T !== -1 && T >= E && (_ = _.substring(E, T + 1));
    }
    let g;
    try {
      g = JSON.parse(_);
    } catch (E) {
      console.warn("JSON parse failed, returning raw response as fallback:", E);
      let T = b.content.trim();
      return (T.includes("{") || T.includes("```")) && (T = `⚠️ I tried to process your request but my response was too long and got cut off. Here's what I generated:

${T}

💡 **Tip**: Try increasing "Max Response Tokens" in Generation Options (currently set too low).`), { aiMessage: {
        role: "assistant",
        content: T,
        timestamp: Date.now(),
        fieldsUpdated: []
      }, updatedSession: r };
    }
    let d = { ...r };
    return g.updatedFields && Object.keys(g.updatedFields).forEach((E) => {
      E === "alternate_greetings" ? (Object.keys(d.fields).forEach((A) => {
        A.startsWith("alternate_greetings_") && delete d.fields[A];
      }), g.updatedFields[E].forEach((A, M) => {
        const C = `alternate_greetings_${M + 1}`;
        d.fields[C] = {
          value: A,
          prompt: "",
          label: `Alternate Greeting ${M + 1}`
        };
      })) : kn.includes(E) && (d.fields[E] = {
        value: g.updatedFields[E],
        prompt: "",
        label: Jn[E]
      });
    }), { aiMessage: {
      role: "assistant",
      content: g.response || "I've updated the character as requested.",
      timestamp: Date.now(),
      fieldsUpdated: g.fieldsUpdated || []
    }, updatedSession: d };
  } catch (o) {
    throw console.error("Error in chat message:", o), new Error(`Chat error: ${o.message || String(o)}`);
  }
}
const MA = ({
  session: t,
  onSessionUpdate: r,
  profileId: i,
  maxResponseToken: s
}) => {
  const [o, u] = K.useState([]), [f, p] = K.useState(""), [h, y] = K.useState(!1), b = K.useRef(null), _ = () => {
    b.current?.scrollIntoView({ behavior: "smooth" });
  };
  K.useEffect(() => {
    _();
  }, [o]);
  const m = K.useCallback(async () => {
    if (!f.trim() || h) return;
    const x = {
      role: "user",
      content: f.trim(),
      timestamp: Date.now()
    };
    u((E) => [...E, x]), p(""), y(!0);
    try {
      const { aiMessage: E, updatedSession: T } = await OA({
        messages: [...o, x],
        session: t,
        profileId: i,
        maxResponseToken: s
      });
      u((A) => [...A, E]), r(T);
    } catch (E) {
      console.error("Chat error:", E), Me("error", `Chat error: ${E.message || String(E)}`);
      const T = {
        role: "assistant",
        content: "Sorry, I encountered an error processing your request. Please try again.",
        timestamp: Date.now()
      };
      u((A) => [...A, T]);
    } finally {
      y(!1);
    }
  }, [f, o, t, i, r, h]), g = K.useCallback(
    (x) => {
      x.key === "Enter" && !x.shiftKey && (x.preventDefault(), m());
    },
    [m]
  ), d = K.useCallback(async () => {
    await SillyTavern.getContext().Popup.show.confirm(
      "Clear Chat",
      "Are you sure you want to clear the chat history?"
    ) && u([]);
  }, []);
  return /* @__PURE__ */ S.jsxs("div", { className: "chat-interface", children: [
    /* @__PURE__ */ S.jsxs("div", { className: "chat-header", children: [
      /* @__PURE__ */ S.jsx("h3", { children: "AI Assistant" }),
      /* @__PURE__ */ S.jsx(pe, { onClick: d, className: "menu_button secondary small", children: "Clear" })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "chat-messages", children: [
      o.length === 0 && /* @__PURE__ */ S.jsxs("div", { className: "chat-welcome", children: [
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
      o.map((x, E) => /* @__PURE__ */ S.jsxs("div", { className: `chat-message ${x.role}`, children: [
        /* @__PURE__ */ S.jsx("div", { className: "message-avatar", children: x.role === "user" ? "👤" : "🤖" }),
        /* @__PURE__ */ S.jsxs("div", { className: "message-content", children: [
          /* @__PURE__ */ S.jsx("div", { className: "message-text", children: x.content }),
          x.fieldsUpdated && x.fieldsUpdated.length > 0 && /* @__PURE__ */ S.jsx("div", { className: "message-updates", children: /* @__PURE__ */ S.jsxs("small", { children: [
            "✏️ Updated: ",
            x.fieldsUpdated.join(", ")
          ] }) })
        ] })
      ] }, E)),
      h && /* @__PURE__ */ S.jsxs("div", { className: "chat-message assistant", children: [
        /* @__PURE__ */ S.jsx("div", { className: "message-avatar", children: "🤖" }),
        /* @__PURE__ */ S.jsx("div", { className: "message-content", children: /* @__PURE__ */ S.jsxs("div", { className: "message-text typing", children: [
          /* @__PURE__ */ S.jsx("span", {}),
          /* @__PURE__ */ S.jsx("span", {}),
          /* @__PURE__ */ S.jsx("span", {})
        ] }) })
      ] }),
      /* @__PURE__ */ S.jsx("div", { ref: b })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "chat-input-container", children: [
      /* @__PURE__ */ S.jsx(
        Yt,
        {
          value: f,
          onChange: (x) => p(x.target.value),
          onKeyDown: g,
          placeholder: "Type your message... (Enter to send, Shift+Enter for new line)",
          rows: 3,
          disabled: h,
          className: "chat-input"
        }
      ),
      /* @__PURE__ */ S.jsx(
        pe,
        {
          onClick: m,
          disabled: !f.trim() || h,
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
}), kA = ({
  lorebook: t,
  onLorebookChange: r,
  isGenerating: i,
  onGenerateEntry: s
}) => {
  const [o, u] = K.useState(
    t.entries.length > 0 ? t.entries[0].id : null
  ), f = K.useCallback(() => {
    const m = DA();
    r({
      ...t,
      entries: [...t.entries, m]
    }), u(m.id);
  }, [t, r]), p = K.useCallback(
    async (m) => {
      const g = SillyTavern.getContext(), d = t.entries.find((E) => E.id === m);
      if (await g.Popup.show.confirm(
        "Delete Entry",
        `Delete "${d?.comment || "Untitled Entry"}"?`
      )) {
        const E = t.entries.filter((T) => T.id !== m);
        r({ ...t, entries: E }), o === m && u(E.length > 0 ? E[0].id : null);
      }
    },
    [t, r, o]
  ), h = K.useCallback(
    (m, g, d) => {
      const x = t.entries.map(
        (E) => E.id === m ? { ...E, [g]: d } : E
      );
      r({ ...t, entries: x });
    },
    [t, r]
  ), y = K.useCallback(
    (m, g, d = !1) => {
      const x = g.split(",").map((E) => E.trim()).filter((E) => E.length > 0);
      h(m, d ? "secondary_keys" : "keys", x);
    },
    [h]
  ), b = K.useCallback(
    (m, g) => {
      r({ ...t, [m]: g });
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
              onChange: (m) => b("scan_depth", parseInt(m.target.value) || 4),
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
              onChange: (m) => b("token_budget", parseInt(m.target.value) || 2048),
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
        ] }) : t.entries.map((m, g) => /* @__PURE__ */ S.jsxs(
          "div",
          {
            className: `entry-item ${o === m.id ? "active" : ""} ${m.enabled ? "" : "disabled"}`,
            onClick: () => u(m.id),
            children: [
              /* @__PURE__ */ S.jsxs("div", { className: "entry-item-header", children: [
                /* @__PURE__ */ S.jsxs("span", { className: "entry-index", children: [
                  "#",
                  g + 1
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
                onChange: (m) => y(_.id, m.target.value),
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
                onChange: (m) => y(_.id, m.target.value, !0),
                placeholder: "filter1, filter2"
              }
            )
          ] }),
          /* @__PURE__ */ S.jsxs("label", { children: [
            "Content",
            /* @__PURE__ */ S.jsx(
              Yt,
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
                    parseInt(m.target.value) || 0
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
}), jA = SillyTavern.getContext(), RA = `You are an AI assistant specialized in creating World Info / Lorebook entries for roleplay AI systems.

Current Lorebook: "{{lorebookName}}"
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
Focus ONLY on creating Lorebook entries. Do NOT modify any character data.`, zA = ({
  lorebook: t,
  onLorebookChange: r,
  profileId: i,
  maxResponseToken: s = 3072
}) => {
  const [o, u] = K.useState([]), [f, p] = K.useState(""), [h, y] = K.useState(!1), b = K.useCallback(async () => {
    if (!f.trim() || h) return;
    const m = {
      role: "user",
      content: f.trim(),
      timestamp: Date.now()
    };
    u((g) => [...g, m]), p(""), y(!0);
    try {
      const g = await Promise.resolve().then(() => F0), d = t.entries.length > 0 ? JSON.stringify(t.entries.map((D) => ({
        comment: D.comment,
        keys: D.keys,
        content: D.content.substring(0, 200) + (D.content.length > 200 ? "..." : ""),
        constant: D.constant,
        enabled: D.enabled
      })), null, 2) : "[]", E = g.compile(RA)({
        lorebookName: t.name,
        currentEntriesJson: d,
        userMessage: f.trim()
      }), T = await jA.ConnectionManagerRequestService.sendRequest(
        i,
        [{ role: "user", content: E }],
        s
      );
      if (!T || !T.content)
        throw new Error("No response from AI");
      let A = T.content.trim();
      const M = A.match(/```(?:json)?\s*(\{[\s\S]*?)(?:```|$)/i);
      if (M)
        A = M[1];
      else {
        const D = A.indexOf("{"), k = A.lastIndexOf("}");
        D !== -1 && k !== -1 && k >= D && (A = A.substring(D, k + 1));
      }
      let C;
      try {
        C = JSON.parse(A);
      } catch (D) {
        console.warn("JSON parse failed for lorebook chat:", D);
        const k = {
          role: "assistant",
          content: `⚠️ I tried to generate entries but my response was malformed. Here's the raw output:

${T.content}

💡 Try increasing "Max Response Tokens" or simplifying your request.`,
          timestamp: Date.now(),
          entriesUpdated: []
        };
        u((q) => [...q, k]), y(!1);
        return;
      }
      if (C.newEntries && Array.isArray(C.newEntries) && C.newEntries.length > 0) {
        const D = C.newEntries.map((k, q) => ({
          id: `entry_${Date.now()}_${q}_${Math.random().toString(36).substr(2, 9)}`,
          keys: Array.isArray(k.keys) ? k.keys : (k.keys || "").split(",").map((V) => V.trim()),
          secondary_keys: [],
          content: k.content || "",
          comment: k.comment || `Entry ${t.entries.length + q + 1}`,
          enabled: k.enabled ?? !0,
          constant: k.constant ?? !1,
          selective: !1,
          insertion_order: t.entries.length + q,
          position: "before_char"
        }));
        r({
          ...t,
          entries: [...t.entries, ...D]
        });
      }
      const N = {
        role: "assistant",
        content: C.response || "I've updated the lorebook as requested.",
        timestamp: Date.now(),
        entriesUpdated: C.entriesUpdated || []
      };
      u((D) => [...D, N]);
    } catch (g) {
      console.error("Lorebook chat error:", g);
      const d = {
        role: "assistant",
        content: `Sorry, I encountered an error processing your request. Please try again.

Error: ${g.message || String(g)}`,
        timestamp: Date.now()
      };
      u((x) => [...x, d]);
    } finally {
      y(!1);
    }
  }, [f, h, t, r, i, s]), _ = (m) => {
    m.key === "Enter" && !m.shiftKey && (m.preventDefault(), b());
  };
  return /* @__PURE__ */ S.jsxs("div", { className: "chat-interface", children: [
    /* @__PURE__ */ S.jsxs("div", { className: "chat-messages", children: [
      o.length === 0 && /* @__PURE__ */ S.jsxs("div", { className: "chat-welcome", children: [
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
      o.map((m, g) => /* @__PURE__ */ S.jsxs("div", { className: `chat-message ${m.role}`, children: [
        /* @__PURE__ */ S.jsx("span", { className: "message-icon", children: m.role === "user" ? "👤" : "🤖" }),
        /* @__PURE__ */ S.jsxs("div", { className: "message-content", children: [
          m.content,
          m.entriesUpdated && m.entriesUpdated.length > 0 && /* @__PURE__ */ S.jsxs("div", { className: "entries-updated", children: [
            "✏️ Entries: ",
            m.entriesUpdated.join(", ")
          ] })
        ] })
      ] }, g)),
      h && /* @__PURE__ */ S.jsxs("div", { className: "chat-message assistant loading", children: [
        /* @__PURE__ */ S.jsx("span", { className: "message-icon", children: "🤖" }),
        /* @__PURE__ */ S.jsxs("div", { className: "message-content", children: [
          /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-spinner fa-spin" }),
          " Creating entries..."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "chat-input-area", children: [
      /* @__PURE__ */ S.jsx(
        Yt,
        {
          value: f,
          onChange: (m) => p(m.target.value),
          onKeyDown: _,
          placeholder: "Describe entries to create... (Enter to send, Shift+Enter for new line)",
          rows: 2,
          disabled: h
        }
      ),
      /* @__PURE__ */ S.jsx(pe, { onClick: b, disabled: h || !f.trim(), children: h ? /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : "Send" })
    ] })
  ] });
};
function LA(t, r) {
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
    const i = LA(t, r), s = JSON.stringify(i, null, 2), o = new Blob([s], { type: "application/json" }), u = URL.createObjectURL(o), f = document.createElement("a");
    f.href = u, f.download = `${t.name.replace(/[^a-z0-9]/gi, "_").toLowerCase()}_v3.json`, document.body.appendChild(f), f.click(), document.body.removeChild(f), URL.revokeObjectURL(u), Me("success", `Character exported as JSON: ${f.download}`);
  } catch (i) {
    console.error("Error exporting character:", i), Me("error", `Failed to export character: ${i.message || String(i)}`);
  }
}
function IA(t, r) {
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
    t.entries.forEach((h, y) => {
      i.entries[String(y)] = {
        uid: y,
        key: h.keys || [],
        keysecondary: h.secondary_keys || [],
        comment: h.comment || `Entry ${y + 1}`,
        content: h.content || "",
        constant: h.constant ?? !1,
        selective: h.selective ?? !1,
        insertion_order: h.insertion_order ?? y,
        enabled: h.enabled ?? !0,
        position: h.position === "after_char" ? 1 : 0,
        extensions: h.extensions || {}
      };
    });
    const s = JSON.stringify(i, null, 2), o = new Blob([s], { type: "application/json" }), u = URL.createObjectURL(o), f = document.createElement("a");
    f.href = u;
    const p = (t.name || r).replace(/[^a-z0-9]/gi, "_").toLowerCase();
    f.download = `${p}_lorebook.json`, document.body.appendChild(f), f.click(), document.body.removeChild(f), URL.revokeObjectURL(u), Me("success", `Lorebook exported as JSON: ${f.download}`);
  } catch (i) {
    console.error("Error exporting lorebook:", i), Me("error", `Failed to export lorebook: ${i.message || String(i)}`);
  }
}
Lt.helpers.join || Lt.registerHelper("join", function(t, r) {
  return Array.isArray(t) ? t.join(typeof r == "string" ? r : ", ") : "";
});
Lt.helpers.is_not_empty || Lt.registerHelper("is_not_empty", function(t, r) {
  return t ? Array.isArray(t) ? t.length > 0 ? r.fn(this) : r.inverse(this) : typeof t == "object" && Object.keys(t).length > 0 ? r.fn(this) : typeof t != "object" && !Array.isArray(t) ? r.fn(this) : r.inverse(this) : r.inverse(this);
});
const Mn = SillyTavern.getContext(), Wy = "charCreator", bd = () => ({
  selectedCharacterIndexes: yn ? [String(yn)] : [],
  selectedWorldNames: [],
  fields: kn.reduce(
    (t, r) => (t[r] = { value: "", prompt: "", label: Jn[r] }, t),
    {}
  ),
  draftFields: {},
  lastLoadedCharacterId: ""
}), BA = {
  name: { label: Jn.name, rows: 1, large: !1, promptEnabled: !1 },
  description: { label: Jn.description, rows: 5, large: !0, promptEnabled: !0 },
  personality: { label: Jn.personality, rows: 4, large: !0, promptEnabled: !0 },
  scenario: { label: Jn.scenario, rows: 3, large: !0, promptEnabled: !0 },
  first_mes: { label: Jn.first_mes, rows: 3, large: !0, promptEnabled: !0 },
  mes_example: { label: Jn.mes_example, rows: 6, large: !0, promptEnabled: !0 }
}, UA = () => {
  const t = Y0(), r = Pt.getSettings(), [i, s] = K.useState(bd()), [o, u] = K.useState([]), [f, p] = K.useState(!0), [h, y] = K.useState("core"), [b, _] = K.useState("character"), [m, g] = K.useState(Ky()), [d, x] = K.useState([]), [E, T] = K.useState([]), [A, M] = K.useState(null), [C, N] = K.useState(null), [D, k] = K.useState(!1), [q, V] = K.useState(null);
  K.useEffect(() => {
    (async () => {
      p(!0), x(Mn.characters), T(Kg);
      const ne = JSON.parse(localStorage.getItem(Wy) ?? "{}"), te = bd();
      if (ne.fields && (te.fields = { ...te.fields, ...ne.fields }), ne.draftFields && (te.draftFields = ne.draftFields), ne.selectedCharacterIndexes && (te.selectedCharacterIndexes = ne.selectedCharacterIndexes), ne.selectedWorldNames && (te.selectedWorldNames = ne.selectedWorldNames), ne.lastLoadedCharacterId) {
        te.lastLoadedCharacterId = ne.lastLoadedCharacterId;
        const ue = Mn.characters.find((Te) => Te.avatar === ne.lastLoadedCharacterId);
        ue && M(ue);
      }
      s(te), p(!1);
    })();
  }, []), K.useEffect(() => {
    f || localStorage.setItem(Wy, JSON.stringify(i));
  }, [i, f]);
  const I = (P, ne) => {
    Pt.getSettings()[P] = ne, Pt.saveSettings(), t();
  }, G = (P, ne) => {
    Pt.getSettings().contextToSend[P] = ne, Pt.saveSettings(), t();
  }, Y = K.useCallback(
    (P, ne, te, ue) => {
      s((Te) => {
        const Ee = ue ? "draftFields" : "fields", ce = { ...Te[Ee] };
        return ce[P] || (ce[P] = { value: "", prompt: "", label: P }), ce[P][te] = ne, { ...Te, [Ee]: ce };
      });
    },
    []
  ), oe = K.useMemo(
    () => Object.keys(i.fields).filter((P) => P.startsWith("alternate_greetings_")).sort((P, ne) => parseInt(P.split("_")[2]) - parseInt(ne.split("_")[2])).map((P) => i.fields[P]),
    [i.fields]
  ), fe = K.useCallback((P) => {
    s((ne) => {
      const te = { ...ne.fields };
      return Object.keys(te).forEach((ue) => {
        ue.startsWith("alternate_greetings_") && delete te[ue];
      }), P.forEach((ue, Te) => {
        const Ee = `alternate_greetings_${Te + 1}`;
        te[Ee] = { ...ue, label: `Alternate Greeting ${Te + 1}` };
      }), { ...ne, fields: te };
    });
  }, []), ve = K.useCallback(
    (P, ne) => {
      Y(P, "", "value", ne);
    },
    [Y]
  ), U = K.useCallback(
    async (P) => {
      await Mn.Popup.show.confirm(
        "Delete Draft Field",
        `Are you sure you want to delete "${i.draftFields[P].label}"?`
      ) && s((te) => {
        const ue = { ...te.draftFields };
        return delete ue[P], { ...te, draftFields: ue };
      });
    },
    [i.draftFields]
  ), re = K.useCallback(async () => {
    const P = await Mn.Popup.show.input("Enter Draft Field Name", "");
    if (!P?.trim()) return;
    const ne = Rd(P.trim());
    if (!ne) return Me("error", "Invalid field name.");
    if (i.draftFields[ne] || kn.includes(ne))
      return Me("warning", "Field name already exists.");
    s((te) => ({
      ...te,
      draftFields: { ...te.draftFields, [ne]: { value: "", prompt: "", label: P } }
    })), y("draft");
  }, [i.draftFields]), de = (P) => {
    V({ type: "field", fieldId: P }), k(!0);
  }, Le = () => {
    V({ type: "global" }), k(!0);
  }, R = (P) => {
    s((ne) => ({
      ...ne,
      fields: { ...ne.fields, ...P.fields },
      draftFields: { ...ne.draftFields, ...P.draftFields }
    })), Me("success", "Changes from revise session applied."), k(!1);
  }, Q = K.useCallback(
    async (P, ne) => {
      if (!r.profileId) return Me("warning", "Please select a connection profile.");
      u((te) => [...te, P]);
      try {
        const te = Mn.extensionSettings.connectionManager?.profiles?.find(
          (Re) => Re.id === r.profileId
        );
        if (!te) throw new Error("Connection profile not found.");
        const ue = {
          presetName: te?.preset,
          contextName: te?.context,
          instructName: te?.instruct,
          targetCharacterId: yn,
          ignoreCharacterFields: !0,
          ignoreWorldInfo: !0,
          ignoreAuthorNote: !0,
          maxContext: r.maxContextType === "custom" ? r.maxContextValue : r.maxContextType === "profile" ? "preset" : "active",
          includeNames: !!xr
        }, Te = r.contextToSend.messages;
        switch (Te.type) {
          case "none":
            ue.messageIndexesBetween = { start: -1, end: -1 };
            break;
          case "first":
            ue.messageIndexesBetween = { start: 0, end: Te.first ?? 10 };
            break;
          case "last":
            const Re = Mn.chat?.length ?? 0, Dt = Te.last ?? 10;
            ue.messageIndexesBetween = {
              end: Math.max(0, Re - 1),
              start: Math.max(0, Re - Dt)
            };
            break;
          case "range":
            ue.messageIndexesBetween = {
              start: Te.range?.start ?? 0,
              end: Te.range?.end ?? 10
            };
            break;
          case "all":
          default:
            break;
        }
        yn === void 0 && !xr && (ue.messageIndexesBetween = { start: -1, end: -1 });
        const Ee = {};
        await Promise.all(
          Kg.filter((Re) => !Ee[Re]).map(async (Re) => {
            const Dt = await Mn.loadWorldInfo(Re);
            Dt && (Ee[Re] = Object.values(Dt.entries));
          })
        );
        const ce = structuredClone(r.prompts);
        r.contextToSend.stDescription || delete ce.stDescription, (!r.contextToSend.charCard || i.selectedCharacterIndexes.length === 0) && delete ce.charDefinitions, (!r.contextToSend.worldInfo || i.selectedWorldNames.length === 0) && delete ce.lorebookDefinitions, r.contextToSend.existingFields || delete ce.existingFieldDefinitions, r.contextToSend.persona || delete ce.personaDescription, delete ce.worldInfoCharDefinition;
        const me = await OE({
          profileId: r.profileId,
          userPrompt: r.promptPresets[r.promptPreset].content,
          buildPromptOptions: ue,
          continueFrom: ne,
          session: i,
          allCharacters: d,
          entriesGroupByWorldName: Ee,
          promptSettings: ce,
          formatDescription: { content: r.prompts[`${r.outputFormat}Format`].content },
          mainContextList: r.mainContextTemplatePresets[r.mainContextTemplatePreset].prompts.filter(
            (Re) => Re.enabled
          ),
          includeUserMacro: r.contextToSend.persona,
          maxResponseToken: r.maxResponseToken,
          targetField: P,
          outputFormat: r.outputFormat
        }), qe = P.startsWith("alternate_greetings_"), Fe = !qe && !kn.includes(P);
        if (qe) {
          const Re = parseInt(P.split("_")[2]) - 1, Dt = [...oe];
          Dt[Re] && (Dt[Re].value = me), fe(Dt);
        } else
          Y(P, me, "value", Fe);
      } catch (te) {
        console.error(te), Me("error", te.message || String(te));
      } finally {
        u((te) => te.filter((ue) => ue !== P));
      }
    },
    [i, r, d, oe, Y, fe]
  ), ae = K.useCallback(async () => {
    await Mn.Popup.show.confirm("Reset Fields", "This will clear all fields. Are you sure?") && (s(bd()), M(null));
  }, []), se = K.useCallback(
    (P) => {
      if (!A) return Me("warning", "Please load a character to compare against.");
      let ne, te, ue;
      typeof P == "number" ? (ne = oe[P]?.value ?? "", te = A.data?.alternate_greetings?.[P] ?? "", ue = `Alternate Greeting ${P + 1}`) : (ne = i.fields[P]?.value ?? "", te = A[P] ?? A.data?.[P] ?? "", ue = Jn[P]), N({ original: te, current: ne, fieldName: ue });
    },
    [A, i.fields, oe]
  ), le = K.useCallback(
    async (P) => {
      const ne = d[parseInt(P)];
      if (!ne || kn.some((Ee) => i.fields[Ee].value.trim() !== "") && !await Mn.Popup.show.confirm("Load Character", "Overwrite current fields?"))
        return;
      const ue = { ...i.fields };
      kn.forEach((Ee) => {
        ue[Ee] = { value: ne[Ee] ?? ne.data?.[Ee] ?? "", prompt: "", label: Jn[Ee] };
      });
      const Te = (ne.data?.alternate_greetings ?? []).map((Ee) => ({ value: Ee, prompt: "" }));
      M(ne), s((Ee) => ({ ...Ee, fields: ue, lastLoadedCharacterId: ne.avatar })), fe(Te);
    },
    [d, i.fields, fe]
  ), je = () => oe.map((P) => P.value).filter((P) => P.trim() !== ""), X = async () => {
    if (!i.fields.name.value) return Me("warning", "Please provide a character name.");
    if (!await Mn.Popup.show.confirm("Save as New Character", "Are you sure?")) return;
    const ne = {
      name: i.fields.name.value,
      description: i.fields.description.value,
      personality: i.fields.personality.value,
      scenario: i.fields.scenario.value,
      first_mes: i.fields.first_mes.value,
      mes_example: i.fields.mes_example.value,
      data: {
        alternate_greetings: je(),
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
      await g2(ne, !0);
    } catch (te) {
      Me("error", `Failed to create character: ${te.message}`);
    }
  }, ye = async () => {
    if (!A) return Me("warning", "Please load a character to override.");
    if (!await Mn.Popup.show.confirm(
      "Override Character",
      `Override "${A.name}"? This cannot be undone.`
    )) return;
    const ne = {
      ...A,
      name: i.fields.name.value,
      description: i.fields.description.value,
      personality: i.fields.personality.value,
      scenario: i.fields.scenario.value,
      first_mes: i.fields.first_mes.value,
      mes_example: i.fields.mes_example.value,
      data: {
        alternate_greetings: je(),
        name: i.fields.name.value,
        description: i.fields.description.value,
        first_mes: i.fields.first_mes.value,
        mes_example: i.fields.mes_example.value,
        personality: i.fields.personality.value,
        scenario: i.fields.scenario.value
      }
    };
    try {
      await v2(ne, !0), Me("success", `Character "${ne.name}" updated!`);
    } catch (te) {
      Me("error", `Failed to override character: ${te.message}`);
    }
  }, be = () => {
    const P = JSON.stringify({ draftFields: i.draftFields, version: Z0 }, null, 2), ne = new Blob([P], { type: "application/json" }), te = document.createElement("a");
    te.href = URL.createObjectURL(ne), te.download = `crec-draft-fields-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`, te.click(), URL.revokeObjectURL(te.href);
  }, Ge = () => {
    const P = document.createElement("input");
    P.type = "file", P.accept = ".json", P.onchange = async () => {
      const ne = P.files?.[0];
      if (ne)
        try {
          const te = await ne.text(), ue = JSON.parse(te);
          if (!ue.draftFields) throw new Error("Invalid file format.");
          (Object.keys(i.draftFields).length > 0 ? await Mn.Popup.show.confirm(
            "Import Drafts",
            "This will replace current draft fields. Continue?"
          ) : !0) && (s((Ee) => ({ ...Ee, draftFields: ue.draftFields })), Me("success", "Draft fields imported."));
        } catch (te) {
          Me("error", `Import failed: ${te.message}`);
        }
    }, P.click();
  }, tt = K.useMemo(
    () => d.map((P, ne) => ({ value: String(ne), label: P.name })),
    [d]
  ), ke = K.useMemo(
    () => E.map((P) => ({ value: P, label: P })),
    [E]
  ), ht = K.useMemo(
    () => Object.keys(r.promptPresets).map((P) => ({ value: P, label: P })),
    [r.promptPresets]
  ), zn = K.useMemo(
    () => Object.keys(r.mainContextTemplatePresets).map((P) => ({ value: P, label: P })),
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
            V0,
            {
              initialSelectedProfileId: r.profileId,
              onChange: (P) => I("profileId", P?.id ?? "")
            }
          )
        ] }),
        /* @__PURE__ */ S.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ S.jsx("h3", { children: "Context to Send" }),
          /* @__PURE__ */ S.jsxs("div", { className: "context-options", children: [
            /* @__PURE__ */ S.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ S.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.stDescription,
                  onChange: (P) => G("stDescription", P.target.checked)
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
                  onChange: (P) => G("persona", P.target.checked)
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
                  onChange: (P) => G("messages", {
                    ...r.contextToSend.messages,
                    type: P.target.value
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
                    onChange: (P) => G("messages", {
                      ...r.contextToSend.messages,
                      first: parseInt(P.target.value) || 10
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
                    onChange: (P) => G("messages", {
                      ...r.contextToSend.messages,
                      last: parseInt(P.target.value) || 10
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
                    onChange: (P) => G("messages", {
                      ...r.contextToSend.messages,
                      range: {
                        ...r.contextToSend.messages.range,
                        start: parseInt(P.target.value) || 0
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
                    onChange: (P) => G("messages", {
                      ...r.contextToSend.messages,
                      range: { ...r.contextToSend.messages.range, end: parseInt(P.target.value) || 10 }
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
                  onChange: (P) => G("charCard", P.target.checked)
                }
              ),
              " ",
              "Selected Characters' Data"
            ] }),
            r.contextToSend.charCard && /* @__PURE__ */ S.jsx(
              hd,
              {
                items: tt,
                value: i.selectedCharacterIndexes,
                onChange: (P) => s((ne) => ({ ...ne, selectedCharacterIndexes: P })),
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
                  onChange: (P) => G("worldInfo", P.target.checked)
                }
              ),
              " ",
              "Selected World Info"
            ] }),
            r.contextToSend.worldInfo && /* @__PURE__ */ S.jsx(
              hd,
              {
                items: ke,
                value: i.selectedWorldNames,
                onChange: (P) => s((ne) => ({ ...ne, selectedWorldNames: P })),
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
                  onChange: (P) => G("existingFields", P.target.checked)
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
                  onChange: (P) => G("dontSendOtherGreetings", P.target.checked)
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
                items: zn,
                value: r.mainContextTemplatePreset,
                onChange: (P) => I("mainContextTemplatePreset", P ?? "default")
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
                onChange: (P) => I("maxContextType", P.target.value),
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
              onChange: (P) => I("maxContextValue", parseInt(P.target.value) || 16384)
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
                onChange: (P) => I("maxResponseToken", parseInt(P.target.value) || 1024)
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
                onChange: (P) => I("outputFormat", P.target.value),
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
              items: ht,
              value: r.promptPreset,
              onChange: (P) => I("promptPreset", P ?? "default"),
              onItemsChange: (P) => I(
                "promptPresets",
                P.reduce(
                  (ne, te) => ({ ...ne, [te.value]: r.promptPresets[te.value] ?? { content: "" } }),
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
            Yt,
            {
              value: r.promptPresets[r.promptPreset]?.content ?? "",
              onChange: (P) => I("promptPresets", {
                ...r.promptPresets,
                [r.promptPreset]: { content: P.target.value }
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
                onClick: Le,
                title: "Open global revision sessions to edit multiple fields at once",
                children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-comments" })
              }
            ),
            /* @__PURE__ */ S.jsxs(pe, { onClick: ae, title: "Reset all fields", children: [
              /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-rotate-left" }),
              " Reset"
            ] }),
            /* @__PURE__ */ S.jsx("div", { style: { width: "200px" }, title: "Load Character Data", children: /* @__PURE__ */ S.jsx(
              hd,
              {
                items: tt,
                value: A ? [String(d.indexOf(A))] : [],
                onChange: (P) => le(P[0]),
                multiple: !1,
                enableSearch: !0,
                placeholder: "Load Character..."
              }
            ) }),
            /* @__PURE__ */ S.jsx(pe, { onClick: Ge, children: "Import JSON" })
          ] })
        ] }),
        /* @__PURE__ */ S.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ S.jsxs("div", { className: "tab-buttons", children: [
            /* @__PURE__ */ S.jsx(
              pe,
              {
                onClick: () => y("core"),
                className: `menu_button tab-button ${h === "core" ? "active" : ""}`,
                children: "Core Fields"
              }
            ),
            /* @__PURE__ */ S.jsx(
              pe,
              {
                onClick: () => y("draft"),
                className: `menu_button tab-button ${h === "draft" ? "active" : ""}`,
                children: "Draft Fields"
              }
            ),
            /* @__PURE__ */ S.jsx("div", { className: "right-aligned", children: h === "draft" && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
              /* @__PURE__ */ S.jsxs(pe, { onClick: re, children: [
                /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-plus" }),
                " Add"
              ] }),
              /* @__PURE__ */ S.jsx(pe, { onClick: be, children: "Export" }),
              /* @__PURE__ */ S.jsx(pe, { onClick: Ge, children: "Import" })
            ] }) })
          ] }),
          /* @__PURE__ */ S.jsxs("div", { className: "tab-content-area", children: [
            /* @__PURE__ */ S.jsxs("div", { className: `tab-content ${h === "core" ? "active" : ""}`, children: [
              kn.map((P) => {
                const ne = BA[P];
                return ne ? /* @__PURE__ */ S.jsx(
                  Ey,
                  {
                    fieldId: P,
                    label: ne.label,
                    value: i.fields[P]?.value ?? "",
                    prompt: i.fields[P]?.prompt ?? "",
                    large: ne.large,
                    rows: ne.rows,
                    promptEnabled: ne.promptEnabled,
                    isGenerating: o.includes(P),
                    onValueChange: (te, ue) => Y(te, ue, "value", !1),
                    onPromptChange: (te, ue) => Y(te, ue, "prompt", !1),
                    onGenerate: Q,
                    onContinue: (te) => Q(te, i.fields[te].value),
                    onClear: (te) => ve(te, !1),
                    onCompare: se,
                    onOpenReviseSessions: de
                  },
                  P
                ) : null;
              }),
              /* @__PURE__ */ S.jsx(
                HE,
                {
                  greetings: oe,
                  onGreetingsChange: fe,
                  isGenerating: o.some((P) => P.startsWith("alternate_greetings_")),
                  onGenerate: (P) => Q(`alternate_greetings_${P + 1}`),
                  onContinue: (P) => Q(`alternate_greetings_${P + 1}`, oe[P].value),
                  onCompare: se
                }
              )
            ] }),
            /* @__PURE__ */ S.jsx("div", { className: `tab-content ${h === "draft" ? "active" : ""}`, children: Object.entries(i.draftFields).map(([P, ne]) => /* @__PURE__ */ S.jsx(
              Ey,
              {
                fieldId: P,
                label: ne.label,
                value: ne.value,
                prompt: ne.prompt,
                isDraft: !0,
                rows: 5,
                isGenerating: o.includes(P),
                onValueChange: (te, ue) => Y(te, ue, "value", !0),
                onPromptChange: (te, ue) => Y(te, ue, "prompt", !0),
                onGenerate: Q,
                onContinue: (te) => Q(te, i.draftFields[te].value),
                onClear: (te) => ve(te, !0),
                onDelete: U
              },
              P
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
          maxResponseToken: r.maxResponseToken
        }
      ) })
    ] }),
    b === "lorebook" && /* @__PURE__ */ S.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ S.jsx("div", { className: "column-left", style: { width: "60%" }, children: /* @__PURE__ */ S.jsx(
        kA,
        {
          lorebook: m,
          onLorebookChange: g
        }
      ) }),
      /* @__PURE__ */ S.jsx("div", { className: "column-right", style: { width: "40%" }, children: /* @__PURE__ */ S.jsx(
        zA,
        {
          lorebook: m,
          onLorebookChange: g,
          profileId: r.profileId,
          maxResponseToken: r.maxResponseToken
        }
      ) })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "card export-panel", style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ S.jsx("h3", { children: "Save & Export" }),
      /* @__PURE__ */ S.jsxs("div", { className: "button-group", style: { display: "flex", gap: "10px", flexWrap: "wrap" }, children: [
        b === "character" && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
          /* @__PURE__ */ S.jsx(pe, { onClick: X, className: "menu_button confirm", children: "Create in SillyTavern" }),
          /* @__PURE__ */ S.jsx(pe, { onClick: ye, className: "menu_button warning", disabled: !A, children: "Update Loaded Character" }),
          /* @__PURE__ */ S.jsx("div", { style: { flexGrow: 1 } }),
          /* @__PURE__ */ S.jsx(
            pe,
            {
              onClick: () => {
                const P = {
                  name: i.fields.name.value,
                  description: i.fields.description.value,
                  personality: i.fields.personality.value,
                  scenario: i.fields.scenario.value,
                  first_mes: i.fields.first_mes.value,
                  mes_example: i.fields.mes_example.value,
                  alternate_greetings: oe.map((ne) => ne.value)
                };
                PA(P);
              },
              children: "Export JSON (V3)"
            }
          )
        ] }),
        b === "lorebook" && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
          /* @__PURE__ */ S.jsxs(
            pe,
            {
              onClick: () => IA(
                {
                  entries: m.entries.map((P, ne) => ({
                    keys: P.keys,
                    content: P.content,
                    extensions: {},
                    enabled: P.enabled,
                    insertion_order: P.insertion_order,
                    case_sensitive: !1,
                    name: P.comment,
                    comment: P.comment,
                    selective: P.selective,
                    secondary_keys: P.secondary_keys,
                    constant: P.constant,
                    position: P.position
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
              onClick: () => g(Ky()),
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
    C && /* @__PURE__ */ S.jsx(
      zi,
      {
        type: vn.DISPLAY,
        content: /* @__PURE__ */ S.jsx(
          iC,
          {
            originalContent: C.original,
            newContent: C.current,
            fieldName: C.fieldName
          }
        ),
        onComplete: () => N(null),
        options: { wide: !0 }
      }
    ),
    D && q && /* @__PURE__ */ S.jsx(
      zi,
      {
        type: vn.DISPLAY,
        content: /* @__PURE__ */ S.jsx(
          AA,
          {
            target: q,
            onClose: () => k(!1),
            onApply: R,
            initialState: { fields: i.fields, draftFields: i.draftFields },
            contextToSend: r.contextToSend,
            sessionForContext: {
              selectedCharacterIndexes: i.selectedCharacterIndexes,
              selectedWorldNames: i.selectedWorldNames
            }
          }
        ),
        onComplete: () => k(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
}, HA = () => {
  const [t, r] = K.useState(!1), i = () => r(!0), s = () => r(!1);
  return window.openCharacterCreatorPopup = i, t ? /* @__PURE__ */ S.jsx(
    zi,
    {
      content: /* @__PURE__ */ S.jsx(UA, {}),
      type: vn.DISPLAY,
      onComplete: s,
      options: {
        large: !0,
        wide: !0
      }
    }
  ) : null;
}, C1 = SillyTavern.getContext();
async function qA() {
  const t = await C1.renderExtensionTemplateAsync(
    `third-party/${Da}`,
    "templates/settings"
  );
  document.querySelector("#extensions_settings").insertAdjacentHTML("beforeend", t);
  const r = document.createElement("div"), i = document.querySelector(".charCreator_settings .inline-drawer-content");
  i && (i.prepend(r), dv.createRoot(r).render(
    /* @__PURE__ */ S.jsx(cu.StrictMode, { children: /* @__PURE__ */ S.jsx(BE, {}) })
  ));
  const s = '<div class="menu_button fa-solid fa-user-astronaut interactable charCreator-icon" title="Character Creator"></div>', o = [
    document.querySelector(".form_create_bottom_buttons_block"),
    document.querySelector("#GroupFavDelOkBack"),
    document.querySelector("#rm_buttons_container") ?? document.querySelector("#form_character_search_form")
  ], u = document.createElement("div");
  document.body.appendChild(u), dv.createRoot(u).render(
    /* @__PURE__ */ S.jsx(cu.StrictMode, { children: /* @__PURE__ */ S.jsx(HA, {}) })
  ), o.forEach((p) => {
    if (!p) return;
    const h = document.createElement("div");
    h.innerHTML = s.trim();
    const y = h.firstChild;
    y && (p.prepend(y), y.addEventListener("click", () => {
      window.openCharacterCreatorPopup && window.openCharacterCreatorPopup();
    }));
  });
}
function FA() {
  return !!C1.ConnectionManagerRequestService;
}
FA() ? kE().then(() => {
  qA();
}) : Me("error", `[${Da}] Make sure ST is updated.`);
export {
  qA as init
};
