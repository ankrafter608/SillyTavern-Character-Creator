import { renderStoryString as zb, persona_description_positions as Jg } from "../../../../power-user.js";
import { parseMesExamples as Lb, baseChatReplace as Pb, chat_metadata as js, getMaxContextSize as Ib, name1 as br, name2 as Qr, this_chid as vn, extension_prompt_types as Ca, depth_prompt_role_default as Bb, depth_prompt_depth_default as Ub } from "../../../../../script.js";
import { world_info_include_names as Hb, wi_anchor_position as qb, world_names as Kg } from "../../../../world-info.js";
import "../../../../slash-commands.js";
import "../../../../personas.js";
import { formatInstructModeExamples as Zb, formatInstructModeSystemPrompt as Fb } from "../../../../instruct-mode.js";
import { appendFileContent as Gb } from "../../../../chats.js";
import { setOpenAIMessages as Vb, setOpenAIMessageExamples as Yb, formatWorldInfo as Xb, getPromptPosition as $b, getPromptRole as Qb, prepareOpenAIMessages as Jb } from "../../../../openai.js";
import { metadata_keys as zs } from "../../../../authors-note.js";
import { getGroupDepthPrompts as Kb, selected_group as Sr } from "../../../../group-chats.js";
import { getRegexedString as Wb, regex_placement as Wg } from "../../../regex/engine.js";
import { removeFromArray as ev, runAfterAnimation as e2 } from "../../../../utils.js";
import "../../../../slash-commands/SlashCommandCommonEnumsProvider.js";
import "../../../../slash-commands/SlashCommandEnumValue.js";
import { Popup as Ci, fixToastrForDialogs as qf } from "../../../../popup.js";
import tv from "../../../../../lib/dialog-polyfill.esm.js";
function t2(t, r) {
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
var Zf = { exports: {} }, Ls = {};
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
function n2() {
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
function r2() {
  return rv || (rv = 1, Zf.exports = n2()), Zf.exports;
}
var w = r2(), Ff = { exports: {} }, De = {};
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
function a2() {
  if (av) return De;
  av = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), f = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), b = Symbol.iterator;
  function _(j) {
    return j === null || typeof j != "object" ? null : (j = b && j[b] || j["@@iterator"], typeof j == "function" ? j : null);
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
  }, d = Object.assign, S = {};
  function x(j, K, ae) {
    this.props = j, this.context = K, this.refs = S, this.updater = ae || v;
  }
  x.prototype.isReactComponent = {}, x.prototype.setState = function(j, K) {
    if (typeof j != "object" && typeof j != "function" && j != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, j, K, "setState");
  }, x.prototype.forceUpdate = function(j) {
    this.updater.enqueueForceUpdate(this, j, "forceUpdate");
  };
  function O() {
  }
  O.prototype = x.prototype;
  function A(j, K, ae) {
    this.props = j, this.context = K, this.refs = S, this.updater = ae || v;
  }
  var D = A.prototype = new O();
  D.constructor = A, d(D, x.prototype), D.isPureReactComponent = !0;
  var E = Array.isArray, T = { H: null, A: null, T: null, S: null, V: null }, M = Object.prototype.hasOwnProperty;
  function k(j, K, ae, se, le, ke) {
    return ae = ke.ref, {
      $$typeof: t,
      type: j,
      key: K,
      ref: ae !== void 0 ? ae : null,
      props: ke
    };
  }
  function q(j, K) {
    return k(
      j.type,
      K,
      void 0,
      void 0,
      void 0,
      j.props
    );
  }
  function G(j) {
    return typeof j == "object" && j !== null && j.$$typeof === t;
  }
  function B(j) {
    var K = { "=": "=0", ":": "=2" };
    return "$" + j.replace(/[=:]/g, function(ae) {
      return K[ae];
    });
  }
  var V = /\/+/g;
  function $(j, K) {
    return typeof j == "object" && j !== null && j.key != null ? B("" + j.key) : K.toString(36);
  }
  function oe() {
  }
  function he(j) {
    switch (j.status) {
      case "fulfilled":
        return j.value;
      case "rejected":
        throw j.reason;
      default:
        switch (typeof j.status == "string" ? j.then(oe, oe) : (j.status = "pending", j.then(
          function(K) {
            j.status === "pending" && (j.status = "fulfilled", j.value = K);
          },
          function(K) {
            j.status === "pending" && (j.status = "rejected", j.reason = K);
          }
        )), j.status) {
          case "fulfilled":
            return j.value;
          case "rejected":
            throw j.reason;
        }
    }
    throw j;
  }
  function ge(j, K, ae, se, le) {
    var ke = typeof j;
    (ke === "undefined" || ke === "boolean") && (j = null);
    var Y = !1;
    if (j === null) Y = !0;
    else
      switch (ke) {
        case "bigint":
        case "string":
        case "number":
          Y = !0;
          break;
        case "object":
          switch (j.$$typeof) {
            case t:
            case r:
              Y = !0;
              break;
            case y:
              return Y = j._init, ge(
                Y(j._payload),
                K,
                ae,
                se,
                le
              );
          }
      }
    if (Y)
      return le = le(j), Y = se === "" ? "." + $(j, 0) : se, E(le) ? (ae = "", Y != null && (ae = Y.replace(V, "$&/") + "/"), ge(le, K, ae, "", function(Ve) {
        return Ve;
      })) : le != null && (G(le) && (le = q(
        le,
        ae + (le.key == null || j && j.key === le.key ? "" : ("" + le.key).replace(
          V,
          "$&/"
        ) + "/") + Y
      )), K.push(le)), 1;
    Y = 0;
    var ve = se === "" ? "." : se + ":";
    if (E(j))
      for (var ye = 0; ye < j.length; ye++)
        se = j[ye], ke = ve + $(se, ye), Y += ge(
          se,
          K,
          ae,
          ke,
          le
        );
    else if (ye = _(j), typeof ye == "function")
      for (j = ye.call(j), ye = 0; !(se = j.next()).done; )
        se = se.value, ke = ve + $(se, ye++), Y += ge(
          se,
          K,
          ae,
          ke,
          le
        );
    else if (ke === "object") {
      if (typeof j.then == "function")
        return ge(
          he(j),
          K,
          ae,
          se,
          le
        );
      throw K = String(j), Error(
        "Objects are not valid as a React child (found: " + (K === "[object Object]" ? "object with keys {" + Object.keys(j).join(", ") + "}" : K) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Y;
  }
  function U(j, K, ae) {
    if (j == null) return j;
    var se = [], le = 0;
    return ge(j, se, "", "", function(ke) {
      return K.call(ae, ke, le++);
    }), se;
  }
  function ne(j) {
    if (j._status === -1) {
      var K = j._result;
      K = K(), K.then(
        function(ae) {
          (j._status === 0 || j._status === -1) && (j._status = 1, j._result = ae);
        },
        function(ae) {
          (j._status === 0 || j._status === -1) && (j._status = 2, j._result = ae);
        }
      ), j._status === -1 && (j._status = 0, j._result = K);
    }
    if (j._status === 1) return j._result.default;
    throw j._result;
  }
  var ce = typeof reportError == "function" ? reportError : function(j) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var K = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof j == "object" && j !== null && typeof j.message == "string" ? String(j.message) : String(j),
        error: j
      });
      if (!window.dispatchEvent(K)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", j);
      return;
    }
    console.error(j);
  };
  function Me() {
  }
  return De.Children = {
    map: U,
    forEach: function(j, K, ae) {
      U(
        j,
        function() {
          K.apply(this, arguments);
        },
        ae
      );
    },
    count: function(j) {
      var K = 0;
      return U(j, function() {
        K++;
      }), K;
    },
    toArray: function(j) {
      return U(j, function(K) {
        return K;
      }) || [];
    },
    only: function(j) {
      if (!G(j))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return j;
    }
  }, De.Component = x, De.Fragment = i, De.Profiler = o, De.PureComponent = A, De.StrictMode = s, De.Suspense = h, De.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = T, De.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(j) {
      return T.H.useMemoCache(j);
    }
  }, De.cache = function(j) {
    return function() {
      return j.apply(null, arguments);
    };
  }, De.cloneElement = function(j, K, ae) {
    if (j == null)
      throw Error(
        "The argument must be a React element, but you passed " + j + "."
      );
    var se = d({}, j.props), le = j.key, ke = void 0;
    if (K != null)
      for (Y in K.ref !== void 0 && (ke = void 0), K.key !== void 0 && (le = "" + K.key), K)
        !M.call(K, Y) || Y === "key" || Y === "__self" || Y === "__source" || Y === "ref" && K.ref === void 0 || (se[Y] = K[Y]);
    var Y = arguments.length - 2;
    if (Y === 1) se.children = ae;
    else if (1 < Y) {
      for (var ve = Array(Y), ye = 0; ye < Y; ye++)
        ve[ye] = arguments[ye + 2];
      se.children = ve;
    }
    return k(j.type, le, void 0, void 0, ke, se);
  }, De.createContext = function(j) {
    return j = {
      $$typeof: f,
      _currentValue: j,
      _currentValue2: j,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, j.Provider = j, j.Consumer = {
      $$typeof: u,
      _context: j
    }, j;
  }, De.createElement = function(j, K, ae) {
    var se, le = {}, ke = null;
    if (K != null)
      for (se in K.key !== void 0 && (ke = "" + K.key), K)
        M.call(K, se) && se !== "key" && se !== "__self" && se !== "__source" && (le[se] = K[se]);
    var Y = arguments.length - 2;
    if (Y === 1) le.children = ae;
    else if (1 < Y) {
      for (var ve = Array(Y), ye = 0; ye < Y; ye++)
        ve[ye] = arguments[ye + 2];
      le.children = ve;
    }
    if (j && j.defaultProps)
      for (se in Y = j.defaultProps, Y)
        le[se] === void 0 && (le[se] = Y[se]);
    return k(j, ke, void 0, void 0, null, le);
  }, De.createRef = function() {
    return { current: null };
  }, De.forwardRef = function(j) {
    return { $$typeof: p, render: j };
  }, De.isValidElement = G, De.lazy = function(j) {
    return {
      $$typeof: y,
      _payload: { _status: -1, _result: j },
      _init: ne
    };
  }, De.memo = function(j, K) {
    return {
      $$typeof: g,
      type: j,
      compare: K === void 0 ? null : K
    };
  }, De.startTransition = function(j) {
    var K = T.T, ae = {};
    T.T = ae;
    try {
      var se = j(), le = T.S;
      le !== null && le(ae, se), typeof se == "object" && se !== null && typeof se.then == "function" && se.then(Me, ce);
    } catch (ke) {
      ce(ke);
    } finally {
      T.T = K;
    }
  }, De.unstable_useCacheRefresh = function() {
    return T.H.useCacheRefresh();
  }, De.use = function(j) {
    return T.H.use(j);
  }, De.useActionState = function(j, K, ae) {
    return T.H.useActionState(j, K, ae);
  }, De.useCallback = function(j, K) {
    return T.H.useCallback(j, K);
  }, De.useContext = function(j) {
    return T.H.useContext(j);
  }, De.useDebugValue = function() {
  }, De.useDeferredValue = function(j, K) {
    return T.H.useDeferredValue(j, K);
  }, De.useEffect = function(j, K, ae) {
    var se = T.H;
    if (typeof ae == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return se.useEffect(j, K);
  }, De.useId = function() {
    return T.H.useId();
  }, De.useImperativeHandle = function(j, K, ae) {
    return T.H.useImperativeHandle(j, K, ae);
  }, De.useInsertionEffect = function(j, K) {
    return T.H.useInsertionEffect(j, K);
  }, De.useLayoutEffect = function(j, K) {
    return T.H.useLayoutEffect(j, K);
  }, De.useMemo = function(j, K) {
    return T.H.useMemo(j, K);
  }, De.useOptimistic = function(j, K) {
    return T.H.useOptimistic(j, K);
  }, De.useReducer = function(j, K, ae) {
    return T.H.useReducer(j, K, ae);
  }, De.useRef = function(j) {
    return T.H.useRef(j);
  }, De.useState = function(j) {
    return T.H.useState(j);
  }, De.useSyncExternalStore = function(j, K, ae) {
    return T.H.useSyncExternalStore(
      j,
      K,
      ae
    );
  }, De.useTransition = function() {
    return T.H.useTransition();
  }, De.version = "19.1.1", De;
}
var iv;
function Vd() {
  return iv || (iv = 1, Ff.exports = a2()), Ff.exports;
}
var te = Vd();
const cu = /* @__PURE__ */ Gd(te);
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
function i2() {
  return sv || (sv = 1, (function(t) {
    function r(U, ne) {
      var ce = U.length;
      U.push(ne);
      e: for (; 0 < ce; ) {
        var Me = ce - 1 >>> 1, j = U[Me];
        if (0 < o(j, ne))
          U[Me] = ne, U[ce] = j, ce = Me;
        else break e;
      }
    }
    function i(U) {
      return U.length === 0 ? null : U[0];
    }
    function s(U) {
      if (U.length === 0) return null;
      var ne = U[0], ce = U.pop();
      if (ce !== ne) {
        U[0] = ce;
        e: for (var Me = 0, j = U.length, K = j >>> 1; Me < K; ) {
          var ae = 2 * (Me + 1) - 1, se = U[ae], le = ae + 1, ke = U[le];
          if (0 > o(se, ce))
            le < j && 0 > o(ke, se) ? (U[Me] = ke, U[le] = ce, Me = le) : (U[Me] = se, U[ae] = ce, Me = ae);
          else if (le < j && 0 > o(ke, ce))
            U[Me] = ke, U[le] = ce, Me = le;
          else break e;
        }
      }
      return ne;
    }
    function o(U, ne) {
      var ce = U.sortIndex - ne.sortIndex;
      return ce !== 0 ? ce : U.id - ne.id;
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
    var h = [], g = [], y = 1, b = null, _ = 3, v = !1, d = !1, S = !1, x = !1, O = typeof setTimeout == "function" ? setTimeout : null, A = typeof clearTimeout == "function" ? clearTimeout : null, D = typeof setImmediate < "u" ? setImmediate : null;
    function E(U) {
      for (var ne = i(g); ne !== null; ) {
        if (ne.callback === null) s(g);
        else if (ne.startTime <= U)
          s(g), ne.sortIndex = ne.expirationTime, r(h, ne);
        else break;
        ne = i(g);
      }
    }
    function T(U) {
      if (S = !1, E(U), !d)
        if (i(h) !== null)
          d = !0, M || (M = !0, $());
        else {
          var ne = i(g);
          ne !== null && ge(T, ne.startTime - U);
        }
    }
    var M = !1, k = -1, q = 5, G = -1;
    function B() {
      return x ? !0 : !(t.unstable_now() - G < q);
    }
    function V() {
      if (x = !1, M) {
        var U = t.unstable_now();
        G = U;
        var ne = !0;
        try {
          e: {
            d = !1, S && (S = !1, A(k), k = -1), v = !0;
            var ce = _;
            try {
              t: {
                for (E(U), b = i(h); b !== null && !(b.expirationTime > U && B()); ) {
                  var Me = b.callback;
                  if (typeof Me == "function") {
                    b.callback = null, _ = b.priorityLevel;
                    var j = Me(
                      b.expirationTime <= U
                    );
                    if (U = t.unstable_now(), typeof j == "function") {
                      b.callback = j, E(U), ne = !0;
                      break t;
                    }
                    b === i(h) && s(h), E(U);
                  } else s(h);
                  b = i(h);
                }
                if (b !== null) ne = !0;
                else {
                  var K = i(g);
                  K !== null && ge(
                    T,
                    K.startTime - U
                  ), ne = !1;
                }
              }
              break e;
            } finally {
              b = null, _ = ce, v = !1;
            }
            ne = void 0;
          }
        } finally {
          ne ? $() : M = !1;
        }
      }
    }
    var $;
    if (typeof D == "function")
      $ = function() {
        D(V);
      };
    else if (typeof MessageChannel < "u") {
      var oe = new MessageChannel(), he = oe.port2;
      oe.port1.onmessage = V, $ = function() {
        he.postMessage(null);
      };
    } else
      $ = function() {
        O(V, 0);
      };
    function ge(U, ne) {
      k = O(function() {
        U(t.unstable_now());
      }, ne);
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(U) {
      U.callback = null;
    }, t.unstable_forceFrameRate = function(U) {
      0 > U || 125 < U ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : q = 0 < U ? Math.floor(1e3 / U) : 5;
    }, t.unstable_getCurrentPriorityLevel = function() {
      return _;
    }, t.unstable_next = function(U) {
      switch (_) {
        case 1:
        case 2:
        case 3:
          var ne = 3;
          break;
        default:
          ne = _;
      }
      var ce = _;
      _ = ne;
      try {
        return U();
      } finally {
        _ = ce;
      }
    }, t.unstable_requestPaint = function() {
      x = !0;
    }, t.unstable_runWithPriority = function(U, ne) {
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
      var ce = _;
      _ = U;
      try {
        return ne();
      } finally {
        _ = ce;
      }
    }, t.unstable_scheduleCallback = function(U, ne, ce) {
      var Me = t.unstable_now();
      switch (typeof ce == "object" && ce !== null ? (ce = ce.delay, ce = typeof ce == "number" && 0 < ce ? Me + ce : Me) : ce = Me, U) {
        case 1:
          var j = -1;
          break;
        case 2:
          j = 250;
          break;
        case 5:
          j = 1073741823;
          break;
        case 4:
          j = 1e4;
          break;
        default:
          j = 5e3;
      }
      return j = ce + j, U = {
        id: y++,
        callback: ne,
        priorityLevel: U,
        startTime: ce,
        expirationTime: j,
        sortIndex: -1
      }, ce > Me ? (U.sortIndex = ce, r(g, U), i(h) === null && U === i(g) && (S ? (A(k), k = -1) : S = !0, ge(T, ce - Me))) : (U.sortIndex = j, r(h, U), d || v || (d = !0, M || (M = !0, $()))), U;
    }, t.unstable_shouldYield = B, t.unstable_wrapCallback = function(U) {
      var ne = _;
      return function() {
        var ce = _;
        _ = ne;
        try {
          return U.apply(this, arguments);
        } finally {
          _ = ce;
        }
      };
    };
  })(Yf)), Yf;
}
var lv;
function s2() {
  return lv || (lv = 1, Vf.exports = i2()), Vf.exports;
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
function l2() {
  if (ov) return Ut;
  ov = 1;
  var t = Vd();
  function r(h) {
    var g = "https://react.dev/errors/" + h;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var y = 2; y < arguments.length; y++)
        g += "&args[]=" + encodeURIComponent(arguments[y]);
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
  function u(h, g, y) {
    var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: b == null ? null : "" + b,
      children: h,
      containerInfo: g,
      implementation: y
    };
  }
  var f = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(h, g) {
    if (h === "font") return "";
    if (typeof g == "string")
      return g === "use-credentials" ? g : "";
  }
  return Ut.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, Ut.createPortal = function(h, g) {
    var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
      throw Error(r(299));
    return u(h, g, null, y);
  }, Ut.flushSync = function(h) {
    var g = f.T, y = s.p;
    try {
      if (f.T = null, s.p = 2, h) return h();
    } finally {
      f.T = g, s.p = y, s.d.f();
    }
  }, Ut.preconnect = function(h, g) {
    typeof h == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, s.d.C(h, g));
  }, Ut.prefetchDNS = function(h) {
    typeof h == "string" && s.d.D(h);
  }, Ut.preinit = function(h, g) {
    if (typeof h == "string" && g && typeof g.as == "string") {
      var y = g.as, b = p(y, g.crossOrigin), _ = typeof g.integrity == "string" ? g.integrity : void 0, v = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      y === "style" ? s.d.S(
        h,
        typeof g.precedence == "string" ? g.precedence : void 0,
        {
          crossOrigin: b,
          integrity: _,
          fetchPriority: v
        }
      ) : y === "script" && s.d.X(h, {
        crossOrigin: b,
        integrity: _,
        fetchPriority: v,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      });
    }
  }, Ut.preinitModule = function(h, g) {
    if (typeof h == "string")
      if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var y = p(
            g.as,
            g.crossOrigin
          );
          s.d.M(h, {
            crossOrigin: y,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
            nonce: typeof g.nonce == "string" ? g.nonce : void 0
          });
        }
      } else g == null && s.d.M(h);
  }, Ut.preload = function(h, g) {
    if (typeof h == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var y = g.as, b = p(y, g.crossOrigin);
      s.d.L(h, y, {
        crossOrigin: b,
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
  }, Ut.preloadModule = function(h, g) {
    if (typeof h == "string")
      if (g) {
        var y = p(g.as, g.crossOrigin);
        s.d.m(h, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: y,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0
        });
      } else s.d.m(h);
  }, Ut.requestFormReset = function(h) {
    s.d.r(h);
  }, Ut.unstable_batchedUpdates = function(h, g) {
    return h(g);
  }, Ut.useFormState = function(h, g, y) {
    return f.H.useFormState(h, g, y);
  }, Ut.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, Ut.version = "19.1.1", Ut;
}
var uv;
function Wy() {
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
  return t(), Xf.exports = l2(), Xf.exports;
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
function o2() {
  if (cv) return Ps;
  cv = 1;
  var t = s2(), r = Vd(), i = Wy();
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
      var m = c.alternate;
      if (m === null) {
        if (l = c.return, l !== null) {
          a = l;
          continue;
        }
        break;
      }
      if (c.child === m.child) {
        for (m = c.child; m; ) {
          if (m === a) return p(c), e;
          if (m === l) return p(c), n;
          m = m.sibling;
        }
        throw Error(s(188));
      }
      if (a.return !== l.return) a = c, l = m;
      else {
        for (var C = !1, N = c.child; N; ) {
          if (N === a) {
            C = !0, a = c, l = m;
            break;
          }
          if (N === l) {
            C = !0, l = c, a = m;
            break;
          }
          N = N.sibling;
        }
        if (!C) {
          for (N = m.child; N; ) {
            if (N === a) {
              C = !0, a = m, l = c;
              break;
            }
            if (N === l) {
              C = !0, l = m, a = c;
              break;
            }
            N = N.sibling;
          }
          if (!C) throw Error(s(189));
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
  var y = Object.assign, b = Symbol.for("react.element"), _ = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), A = Symbol.for("react.consumer"), D = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), G = Symbol.for("react.activity"), B = Symbol.for("react.memo_cache_sentinel"), V = Symbol.iterator;
  function $(e) {
    return e === null || typeof e != "object" ? null : (e = V && e[V] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var oe = Symbol.for("react.client.reference");
  function he(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === oe ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case d:
        return "Fragment";
      case x:
        return "Profiler";
      case S:
        return "StrictMode";
      case T:
        return "Suspense";
      case M:
        return "SuspenseList";
      case G:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case v:
          return "Portal";
        case D:
          return (e.displayName || "Context") + ".Provider";
        case A:
          return (e._context.displayName || "Context") + ".Consumer";
        case E:
          var n = e.render;
          return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case k:
          return n = e.displayName || null, n !== null ? n : he(e.type) || "Memo";
        case q:
          n = e._payload, e = e._init;
          try {
            return he(e(n));
          } catch {
          }
      }
    return null;
  }
  var ge = Array.isArray, U = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ne = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ce = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Me = [], j = -1;
  function K(e) {
    return { current: e };
  }
  function ae(e) {
    0 > j || (e.current = Me[j], Me[j] = null, j--);
  }
  function se(e, n) {
    j++, Me[j] = e.current, e.current = n;
  }
  var le = K(null), ke = K(null), Y = K(null), ve = K(null);
  function ye(e, n) {
    switch (se(Y, n), se(ke, e), se(le, null), n.nodeType) {
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
  function Ve() {
    ae(le), ae(ke), ae(Y);
  }
  function P(e) {
    e.memoizedState !== null && se(ve, e);
    var n = le.current, a = Ag(n, e.type);
    n !== a && (se(ke, e), se(le, a));
  }
  function J(e) {
    ke.current === e && (ae(le), ae(ke)), ve.current === e && (ae(ve), Ns._currentValue = ce);
  }
  var re = Object.prototype.hasOwnProperty, xe = t.unstable_scheduleCallback, He = t.unstable_cancelCallback, Ie = t.unstable_shouldYield, Ne = t.unstable_requestPaint, Ze = t.unstable_now, qe = t.unstable_getCurrentPriorityLevel, Je = t.unstable_ImmediatePriority, ue = t.unstable_UserBlockingPriority, fe = t.unstable_NormalPriority, Ye = t.unstable_LowPriority, Fe = t.unstable_IdlePriority, it = t.log, Ar = t.unstable_setDisableYieldValue, tr = null, mt = null;
  function Zn(e) {
    if (typeof it == "function" && Ar(e), mt && typeof mt.setStrictMode == "function")
      try {
        mt.setStrictMode(tr, e);
      } catch {
      }
  }
  var qt = Math.clz32 ? Math.clz32 : sa, _n = Math.log, ia = Math.LN2;
  function sa(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (_n(e) / ia | 0) | 0;
  }
  var nr = 256, Fn = 4194304;
  function bn(e) {
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
  function Zt(e, n, a) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var c = 0, m = e.suspendedLanes, C = e.pingedLanes;
    e = e.warmLanes;
    var N = l & 134217727;
    return N !== 0 ? (l = N & ~m, l !== 0 ? c = bn(l) : (C &= N, C !== 0 ? c = bn(C) : a || (a = N & ~e, a !== 0 && (c = bn(a))))) : (N = l & ~m, N !== 0 ? c = bn(N) : C !== 0 ? c = bn(C) : a || (a = l & ~e, a !== 0 && (c = bn(a)))), c === 0 ? 0 : n !== 0 && n !== c && (n & m) === 0 && (m = c & -c, a = n & -n, m >= a || m === 32 && (a & 4194048) !== 0) ? n : c;
  }
  function Yt(e, n) {
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
    var e = nr;
    return nr <<= 1, (nr & 4194048) === 0 && (nr = 256), e;
  }
  function uh() {
    var e = Fn;
    return Fn <<= 1, (Fn & 62914560) === 0 && (Fn = 4194304), e;
  }
  function Du(e) {
    for (var n = [], a = 0; 31 > a; a++) n.push(e);
    return n;
  }
  function Bi(e, n) {
    e.pendingLanes |= n, n !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function E1(e, n, a, l, c, m) {
    var C = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var N = e.entanglements, R = e.expirationTimes, H = e.hiddenUpdates;
    for (a = C & ~a; 0 < a; ) {
      var X = 31 - qt(a), W = 1 << X;
      N[X] = 0, R[X] = -1;
      var Z = H[X];
      if (Z !== null)
        for (H[X] = null, X = 0; X < Z.length; X++) {
          var F = Z[X];
          F !== null && (F.lane &= -536870913);
        }
      a &= ~W;
    }
    l !== 0 && ch(e, l, 0), m !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= m & ~(C & ~n));
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
  function ku(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function dh() {
    var e = ne.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Gg(e.type));
  }
  function C1(e, n) {
    var a = ne.p;
    try {
      return ne.p = e, n();
    } finally {
      ne.p = a;
    }
  }
  var Tr = Math.random().toString(36).slice(2), It = "__reactFiber$" + Tr, Xt = "__reactProps$" + Tr, Ba = "__reactContainer$" + Tr, Ru = "__reactEvents$" + Tr, w1 = "__reactListeners$" + Tr, A1 = "__reactHandles$" + Tr, hh = "__reactResources$" + Tr, Ui = "__reactMarker$" + Tr;
  function ju(e) {
    delete e[It], delete e[Xt], delete e[Ru], delete e[w1], delete e[A1];
  }
  function Ua(e) {
    var n = e[It];
    if (n) return n;
    for (var a = e.parentNode; a; ) {
      if (n = a[Ba] || a[It]) {
        if (a = n.alternate, n.child !== null || a !== null && a.child !== null)
          for (e = Dg(e); e !== null; ) {
            if (a = e[It]) return a;
            e = Dg(e);
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
  function Ot(e) {
    e[Ui] = !0;
  }
  var ph = /* @__PURE__ */ new Set(), mh = {};
  function la(e, n) {
    Za(e, n), Za(e + "Capture", n);
  }
  function Za(e, n) {
    for (mh[e] = n, e = 0; e < n.length; e++)
      ph.add(n[e]);
  }
  var T1 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), gh = {}, vh = {};
  function O1(e) {
    return re.call(vh, e) ? !0 : re.call(gh, e) ? !1 : T1.test(e) ? vh[e] = !0 : (gh[e] = !0, !1);
  }
  function cl(e, n, a) {
    if (O1(n))
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
  function rr(e, n, a, l) {
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
  function Fa(e) {
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
                } catch (F) {
                  var Z = F;
                }
                Reflect.construct(e, [], W);
              } else {
                try {
                  W.call();
                } catch (F) {
                  Z = F;
                }
                e.call(W.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (F) {
                Z = F;
              }
              (W = e()) && typeof W.catch == "function" && W.catch(function() {
              });
            }
          } catch (F) {
            if (F && Z && typeof F.stack == "string")
              return [F.stack, Z.stack];
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
      var m = l.DetermineComponentFrameRoot(), C = m[0], N = m[1];
      if (C && N) {
        var R = C.split(`
`), H = N.split(`
`);
        for (c = l = 0; l < R.length && !R[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; c < H.length && !H[c].includes(
          "DetermineComponentFrameRoot"
        ); )
          c++;
        if (l === R.length || c === H.length)
          for (l = R.length - 1, c = H.length - 1; 1 <= l && 0 <= c && R[l] !== H[c]; )
            c--;
        for (; 1 <= l && 0 <= c; l--, c--)
          if (R[l] !== H[c]) {
            if (l !== 1 || c !== 1)
              do
                if (l--, c--, 0 > c || R[l] !== H[c]) {
                  var X = `
` + R[l].replace(" at new ", " at ");
                  return e.displayName && X.includes("<anonymous>") && (X = X.replace("<anonymous>", e.displayName)), X;
                }
              while (1 <= l && 0 <= c);
            break;
          }
      }
    } finally {
      Lu = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? Fa(a) : "";
  }
  function N1(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Fa(e.type);
      case 16:
        return Fa("Lazy");
      case 13:
        return Fa("Suspense");
      case 19:
        return Fa("SuspenseList");
      case 0:
      case 15:
        return Pu(e.type, !1);
      case 11:
        return Pu(e.type.render, !1);
      case 1:
        return Pu(e.type, !0);
      case 31:
        return Fa("Activity");
      default:
        return "";
    }
  }
  function _h(e) {
    try {
      var n = "";
      do
        n += N1(e), e = e.return;
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
  function bh(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function D1(e) {
    var n = bh(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      n
    ), l = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var c = a.get, m = a.set;
      return Object.defineProperty(e, n, {
        configurable: !0,
        get: function() {
          return c.call(this);
        },
        set: function(C) {
          l = "" + C, m.call(this, C);
        }
      }), Object.defineProperty(e, n, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(C) {
          l = "" + C;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[n];
        }
      };
    }
  }
  function dl(e) {
    e._valueTracker || (e._valueTracker = D1(e));
  }
  function Sh(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var a = n.getValue(), l = "";
    return e && (l = bh(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== a ? (n.setValue(e), !0) : !1;
  }
  function hl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var M1 = /[\n"\\]/g;
  function xn(e) {
    return e.replace(
      M1,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Iu(e, n, a, l, c, m, C, N) {
    e.name = "", C != null && typeof C != "function" && typeof C != "symbol" && typeof C != "boolean" ? e.type = C : e.removeAttribute("type"), n != null ? C === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + Sn(n)) : e.value !== "" + Sn(n) && (e.value = "" + Sn(n)) : C !== "submit" && C !== "reset" || e.removeAttribute("value"), n != null ? Bu(e, C, Sn(n)) : a != null ? Bu(e, C, Sn(a)) : l != null && e.removeAttribute("value"), c == null && m != null && (e.defaultChecked = !!m), c != null && (e.checked = c && typeof c != "function" && typeof c != "symbol"), N != null && typeof N != "function" && typeof N != "symbol" && typeof N != "boolean" ? e.name = "" + Sn(N) : e.removeAttribute("name");
  }
  function xh(e, n, a, l, c, m, C, N) {
    if (m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (e.type = m), n != null || a != null) {
      if (!(m !== "submit" && m !== "reset" || n != null))
        return;
      a = a != null ? "" + Sn(a) : "", n = n != null ? "" + Sn(n) : a, N || n === e.value || (e.value = n), e.defaultValue = n;
    }
    l = l ?? c, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = N ? e.checked : !!l, e.defaultChecked = !!l, C != null && typeof C != "function" && typeof C != "symbol" && typeof C != "boolean" && (e.name = C);
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
  var k1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function wh(e, n, a) {
    var l = n.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? l ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "" : l ? e.setProperty(n, a) : typeof a != "number" || a === 0 || k1.has(n) ? n === "float" ? e.cssFloat = a : e[n] = ("" + a).trim() : e[n] = a + "px";
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
      for (var m in n)
        n.hasOwnProperty(m) && wh(e, m, n[m]);
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
  var R1 = /* @__PURE__ */ new Map([
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
  ]), j1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function pl(e) {
    return j1.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var Hu = null;
  function qu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ya = null, Xa = null;
  function Th(e) {
    var n = Ha(e);
    if (n && (e = n.stateNode)) {
      var a = e[Xt] || null;
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
                var c = l[Xt] || null;
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
  var Zu = !1;
  function Oh(e, n, a) {
    if (Zu) return e(n, a);
    Zu = !0;
    try {
      var l = e(n);
      return l;
    } finally {
      if (Zu = !1, (Ya !== null || Xa !== null) && (Wl(), Ya && (n = Ya, e = Xa, Xa = Ya = null, Th(n), e)))
        for (n = 0; n < e.length; n++) Th(e[n]);
    }
  }
  function qi(e, n) {
    var a = e.stateNode;
    if (a === null) return null;
    var l = a[Xt] || null;
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
  var ar = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Fu = !1;
  if (ar)
    try {
      var Zi = {};
      Object.defineProperty(Zi, "passive", {
        get: function() {
          Fu = !0;
        }
      }), window.addEventListener("test", Zi, Zi), window.removeEventListener("test", Zi, Zi);
    } catch {
      Fu = !1;
    }
  var Or = null, Gu = null, ml = null;
  function Nh() {
    if (ml) return ml;
    var e, n = Gu, a = n.length, l, c = "value" in Or ? Or.value : Or.textContent, m = c.length;
    for (e = 0; e < a && n[e] === c[e]; e++) ;
    var C = a - e;
    for (l = 1; l <= C && n[a - l] === c[m - l]; l++) ;
    return ml = c.slice(e, 1 < l ? 1 - l : void 0);
  }
  function gl(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function vl() {
    return !0;
  }
  function Dh() {
    return !1;
  }
  function $t(e) {
    function n(a, l, c, m, C) {
      this._reactName = a, this._targetInst = c, this.type = l, this.nativeEvent = m, this.target = C, this.currentTarget = null;
      for (var N in e)
        e.hasOwnProperty(N) && (a = e[N], this[N] = a ? a(m) : m[N]);
      return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? vl : Dh, this.isPropagationStopped = Dh, this;
    }
    return y(n.prototype, {
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
  }, yl = $t(oa), Fi = y({}, oa, { view: 0, detail: 0 }), z1 = $t(Fi), Vu, Yu, Gi, _l = y({}, Fi, {
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
  }), Mh = $t(_l), L1 = y({}, _l, { dataTransfer: 0 }), P1 = $t(L1), I1 = y({}, Fi, { relatedTarget: 0 }), Xu = $t(I1), B1 = y({}, oa, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), U1 = $t(B1), H1 = y({}, oa, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), q1 = $t(H1), Z1 = y({}, oa, { data: 0 }), kh = $t(Z1), F1 = {
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
  }, G1 = {
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
  }, V1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Y1(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = V1[e]) ? !!n[e] : !1;
  }
  function $u() {
    return Y1;
  }
  var X1 = y({}, Fi, {
    key: function(e) {
      if (e.key) {
        var n = F1[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress" ? (e = gl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? G1[e.keyCode] || "Unidentified" : "";
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
  }), $1 = $t(X1), Q1 = y({}, _l, {
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
  }), Rh = $t(Q1), J1 = y({}, Fi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: $u
  }), K1 = $t(J1), W1 = y({}, oa, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), e_ = $t(W1), t_ = y({}, _l, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), n_ = $t(t_), r_ = y({}, oa, {
    newState: 0,
    oldState: 0
  }), a_ = $t(r_), i_ = [9, 13, 27, 32], Qu = ar && "CompositionEvent" in window, Vi = null;
  ar && "documentMode" in document && (Vi = document.documentMode);
  var s_ = ar && "TextEvent" in window && !Vi, jh = ar && (!Qu || Vi && 8 < Vi && 11 >= Vi), zh = " ", Lh = !1;
  function Ph(e, n) {
    switch (e) {
      case "keyup":
        return i_.indexOf(n.keyCode) !== -1;
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
  function l_(e, n) {
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
  function o_(e, n) {
    if ($a)
      return e === "compositionend" || !Qu && Ph(e, n) ? (e = Nh(), ml = Gu = Or = null, $a = !1, e) : null;
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
        return jh && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var u_ = {
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
    return n === "input" ? !!u_[e.type] : n === "textarea";
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
  function c_(e) {
    bg(e, 0);
  }
  function bl(e) {
    var n = Hi(e);
    if (Sh(n)) return e;
  }
  function Hh(e, n) {
    if (e === "change") return n;
  }
  var qh = !1;
  if (ar) {
    var Ju;
    if (ar) {
      var Ku = "oninput" in document;
      if (!Ku) {
        var Zh = document.createElement("div");
        Zh.setAttribute("oninput", "return;"), Ku = typeof Zh.oninput == "function";
      }
      Ju = Ku;
    } else Ju = !1;
    qh = Ju && (!document.documentMode || 9 < document.documentMode);
  }
  function Fh() {
    Yi && (Yi.detachEvent("onpropertychange", Gh), Xi = Yi = null);
  }
  function Gh(e) {
    if (e.propertyName === "value" && bl(Xi)) {
      var n = [];
      Uh(
        n,
        Xi,
        e,
        qu(e)
      ), Oh(c_, n);
    }
  }
  function f_(e, n, a) {
    e === "focusin" ? (Fh(), Yi = n, Xi = a, Yi.attachEvent("onpropertychange", Gh)) : e === "focusout" && Fh();
  }
  function d_(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return bl(Xi);
  }
  function h_(e, n) {
    if (e === "click") return bl(n);
  }
  function p_(e, n) {
    if (e === "input" || e === "change")
      return bl(n);
  }
  function m_(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var an = typeof Object.is == "function" ? Object.is : m_;
  function $i(e, n) {
    if (an(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null)
      return !1;
    var a = Object.keys(e), l = Object.keys(n);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var c = a[l];
      if (!re.call(n, c) || !an(e[c], n[c]))
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
  var g_ = ar && "documentMode" in document && 11 >= document.documentMode, Qa = null, ec = null, Qi = null, tc = !1;
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
  ar && (Jh = document.createElement("div").style, "AnimationEvent" in window || (delete Ja.animationend.animation, delete Ja.animationiteration.animation, delete Ja.animationstart.animation), "TransitionEvent" in window || delete Ja.transitionend.transition);
  function ca(e) {
    if (nc[e]) return nc[e];
    if (!Ja[e]) return e;
    var n = Ja[e], a;
    for (a in n)
      if (n.hasOwnProperty(a) && a in Jh)
        return nc[e] = n[a];
    return e;
  }
  var Kh = ca("animationend"), Wh = ca("animationiteration"), ep = ca("animationstart"), v_ = ca("transitionrun"), y_ = ca("transitionstart"), __ = ca("transitioncancel"), tp = ca("transitionend"), np = /* @__PURE__ */ new Map(), rc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  rc.push("scrollEnd");
  function zn(e, n) {
    np.set(e, n), la(n, [e]);
  }
  var rp = /* @__PURE__ */ new WeakMap();
  function En(e, n) {
    if (typeof e == "object" && e !== null) {
      var a = rp.get(e);
      return a !== void 0 ? a : (n = {
        value: e,
        source: n,
        stack: _h(n)
      }, rp.set(e, n), n);
    }
    return {
      value: e,
      source: n,
      stack: _h(n)
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
      var m = Cn[n];
      if (Cn[n++] = null, l !== null && c !== null) {
        var C = l.pending;
        C === null ? c.next = c : (c.next = C.next, C.next = c), l.pending = c;
      }
      m !== 0 && ap(a, c, m);
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
    for (var c = !1, m = e.return; m !== null; )
      m.childLanes |= a, l = m.alternate, l !== null && (l.childLanes |= a), m.tag === 22 && (e = m.stateNode, e === null || e._visibility & 1 || (c = !0)), e = m, m = m.return;
    return e.tag === 3 ? (m = e.stateNode, c && n !== null && (c = 31 - qt(a), e = m.hiddenUpdates, l = e[c], l === null ? e[c] = [n] : l.push(n), n.lane = a | 536870912), m) : null;
  }
  function El(e) {
    if (50 < Ss)
      throw Ss = 0, df = null, Error(s(185));
    for (var n = e.return; n !== null; )
      e = n, n = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ei = {};
  function b_(e, n, a, l) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function sn(e, n, a, l) {
    return new b_(e, n, a, l);
  }
  function sc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ir(e, n) {
    var a = e.alternate;
    return a === null ? (a = sn(
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
  function Cl(e, n, a, l, c, m) {
    var C = 0;
    if (l = e, typeof e == "function") sc(e) && (C = 1);
    else if (typeof e == "string")
      C = xb(
        e,
        a,
        le.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case G:
          return e = sn(31, a, n, c), e.elementType = G, e.lanes = m, e;
        case d:
          return fa(a.children, c, m, n);
        case S:
          C = 8, c |= 24;
          break;
        case x:
          return e = sn(12, a, n, c | 2), e.elementType = x, e.lanes = m, e;
        case T:
          return e = sn(13, a, n, c), e.elementType = T, e.lanes = m, e;
        case M:
          return e = sn(19, a, n, c), e.elementType = M, e.lanes = m, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case O:
              case D:
                C = 10;
                break e;
              case A:
                C = 9;
                break e;
              case E:
                C = 11;
                break e;
              case k:
                C = 14;
                break e;
              case q:
                C = 16, l = null;
                break e;
            }
          C = 29, a = Error(
            s(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return n = sn(C, a, n, c), n.elementType = e, n.type = l, n.lanes = m, n;
  }
  function fa(e, n, a, l) {
    return e = sn(7, e, l, n), e.lanes = a, e;
  }
  function lc(e, n, a) {
    return e = sn(6, e, null, n), e.lanes = a, e;
  }
  function oc(e, n, a) {
    return n = sn(
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
  var ti = [], ni = 0, wl = null, Al = 0, wn = [], An = 0, da = null, sr = 1, lr = "";
  function ha(e, n) {
    ti[ni++] = Al, ti[ni++] = wl, wl = e, Al = n;
  }
  function sp(e, n, a) {
    wn[An++] = sr, wn[An++] = lr, wn[An++] = da, da = e;
    var l = sr;
    e = lr;
    var c = 32 - qt(l) - 1;
    l &= ~(1 << c), a += 1;
    var m = 32 - qt(n) + c;
    if (30 < m) {
      var C = c - c % 5;
      m = (l & (1 << C) - 1).toString(32), l >>= C, c -= C, sr = 1 << 32 - qt(n) + c | a << c | l, lr = m + e;
    } else
      sr = 1 << m | a << c | l, lr = e;
  }
  function uc(e) {
    e.return !== null && (ha(e, 1), sp(e, 1, 0));
  }
  function cc(e) {
    for (; e === wl; )
      wl = ti[--ni], ti[ni] = null, Al = ti[--ni], ti[ni] = null;
    for (; e === da; )
      da = wn[--An], wn[An] = null, lr = wn[--An], wn[An] = null, sr = wn[--An], wn[An] = null;
  }
  var Ft = null, dt = null, Xe = !1, pa = null, Gn = !1, fc = Error(s(519));
  function ma(e) {
    var n = Error(s(418, ""));
    throw Wi(En(n, e)), fc;
  }
  function lp(e) {
    var n = e.stateNode, a = e.type, l = e.memoizedProps;
    switch (n[It] = e, n[Xt] = l, a) {
      case "dialog":
        Le("cancel", n), Le("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        Le("load", n);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Es.length; a++)
          Le(Es[a], n);
        break;
      case "source":
        Le("error", n);
        break;
      case "img":
      case "image":
      case "link":
        Le("error", n), Le("load", n);
        break;
      case "details":
        Le("toggle", n);
        break;
      case "input":
        Le("invalid", n), xh(
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
        Le("invalid", n);
        break;
      case "textarea":
        Le("invalid", n), Ch(n, l.value, l.defaultValue, l.children), dl(n);
    }
    a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || n.textContent === "" + a || l.suppressHydrationWarning === !0 || Cg(n.textContent, a) ? (l.popover != null && (Le("beforetoggle", n), Le("toggle", n)), l.onScroll != null && Le("scroll", n), l.onScrollEnd != null && Le("scrollend", n), l.onClick != null && (n.onclick = so), n = !0) : n = !1, n || ma(e);
  }
  function op(e) {
    for (Ft = e.return; Ft; )
      switch (Ft.tag) {
        case 5:
        case 13:
          Gn = !1;
          return;
        case 27:
        case 3:
          Gn = !0;
          return;
        default:
          Ft = Ft.return;
      }
  }
  function Ji(e) {
    if (e !== Ft) return !1;
    if (!Xe) return op(e), Xe = !0, !1;
    var n = e.tag, a;
    if ((a = n !== 3 && n !== 27) && ((a = n === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Of(e.type, e.memoizedProps)), a = !a), a && dt && ma(e), op(e), n === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8)
            if (a = e.data, a === "/$") {
              if (n === 0) {
                dt = Pn(e.nextSibling);
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
      n === 27 ? (n = dt, Fr(e.type) ? (e = kf, kf = null, dt = e) : dt = n) : dt = Ft ? Pn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ki() {
    dt = Ft = null, Xe = !1;
  }
  function up() {
    var e = pa;
    return e !== null && (Kt === null ? Kt = e : Kt.push.apply(
      Kt,
      e
    ), pa = null), e;
  }
  function Wi(e) {
    pa === null ? pa = [e] : pa.push(e);
  }
  var dc = K(null), ga = null, or = null;
  function Nr(e, n, a) {
    se(dc, n._currentValue), n._currentValue = a;
  }
  function ur(e) {
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
      var m = c.dependencies;
      if (m !== null) {
        var C = c.child;
        m = m.firstContext;
        e: for (; m !== null; ) {
          var N = m;
          m = c;
          for (var R = 0; R < n.length; R++)
            if (N.context === n[R]) {
              m.lanes |= a, N = m.alternate, N !== null && (N.lanes |= a), hc(
                m.return,
                a,
                e
              ), l || (C = null);
              break e;
            }
          m = N.next;
        }
      } else if (c.tag === 18) {
        if (C = c.return, C === null) throw Error(s(341));
        C.lanes |= a, m = C.alternate, m !== null && (m.lanes |= a), hc(C, a, e), C = null;
      } else C = c.child;
      if (C !== null) C.return = c;
      else
        for (C = c; C !== null; ) {
          if (C === e) {
            C = null;
            break;
          }
          if (c = C.sibling, c !== null) {
            c.return = C.return, C = c;
            break;
          }
          C = C.return;
        }
      c = C;
    }
  }
  function es(e, n, a, l) {
    e = null;
    for (var c = n, m = !1; c !== null; ) {
      if (!m) {
        if ((c.flags & 524288) !== 0) m = !0;
        else if ((c.flags & 262144) !== 0) break;
      }
      if (c.tag === 10) {
        var C = c.alternate;
        if (C === null) throw Error(s(387));
        if (C = C.memoizedProps, C !== null) {
          var N = c.type;
          an(c.pendingProps.value, C.value) || (e !== null ? e.push(N) : e = [N]);
        }
      } else if (c === ve.current) {
        if (C = c.alternate, C === null) throw Error(s(387));
        C.memoizedState.memoizedState !== c.memoizedState.memoizedState && (e !== null ? e.push(Ns) : e = [Ns]);
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
  function Tl(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!an(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function va(e) {
    ga = e, or = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Bt(e) {
    return cp(ga, e);
  }
  function Ol(e, n) {
    return ga === null && va(e), cp(e, n);
  }
  function cp(e, n) {
    var a = n._currentValue;
    if (n = { context: n, memoizedValue: a, next: null }, or === null) {
      if (e === null) throw Error(s(308));
      or = n, e.dependencies = { lanes: 0, firstContext: n }, e.flags |= 524288;
    } else or = or.next = n;
    return a;
  }
  var S_ = typeof AbortController < "u" ? AbortController : function() {
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
  }, x_ = t.unstable_scheduleCallback, E_ = t.unstable_NormalPriority, Ct = {
    $$typeof: D,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function mc() {
    return {
      controller: new S_(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function ts(e) {
    e.refCount--, e.refCount === 0 && x_(E_, function() {
      e.controller.abort();
    });
  }
  var ns = null, gc = 0, ri = 0, ai = null;
  function C_(e, n) {
    if (ns === null) {
      var a = ns = [];
      gc = 0, ri = _f(), ai = {
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
  function w_(e, n) {
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
    typeof n == "object" && n !== null && typeof n.then == "function" && C_(e, n), dp !== null && dp(e, n);
  };
  var ya = K(null);
  function vc() {
    var e = ya.current;
    return e !== null ? e : rt.pooledCache;
  }
  function Nl(e, n) {
    n === null ? se(ya, ya.current) : se(ya, n.pool);
  }
  function hp() {
    var e = vc();
    return e === null ? null : { parent: Ct._currentValue, pool: e };
  }
  var rs = Error(s(460)), pp = Error(s(474)), Dl = Error(s(542)), yc = { then: function() {
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
          if (e = rt, e !== null && 100 < e.shellSuspendCounter)
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
    if (e === rs || e === Dl)
      throw Error(s(483));
  }
  var Dr = !1;
  function _c(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function bc(e, n) {
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
  function kr(e, n, a) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, ($e & 2) !== 0) {
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
      var c = null, m = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var C = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          m === null ? c = m = C : m = m.next = C, a = a.next;
        } while (a !== null);
        m === null ? c = m = n : m = m.next = n;
      } else c = m = n;
      a = {
        baseState: l.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: m,
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
    var m = c.firstBaseUpdate, C = c.lastBaseUpdate, N = c.shared.pending;
    if (N !== null) {
      c.shared.pending = null;
      var R = N, H = R.next;
      R.next = null, C === null ? m = H : C.next = H, C = R;
      var X = e.alternate;
      X !== null && (X = X.updateQueue, N = X.lastBaseUpdate, N !== C && (N === null ? X.firstBaseUpdate = H : N.next = H, X.lastBaseUpdate = R));
    }
    if (m !== null) {
      var W = c.baseState;
      C = 0, X = H = R = null, N = m;
      do {
        var Z = N.lane & -536870913, F = Z !== N.lane;
        if (F ? (Ue & Z) === Z : (l & Z) === Z) {
          Z !== 0 && Z === ri && (xc = !0), X !== null && (X = X.next = {
            lane: 0,
            tag: N.tag,
            payload: N.payload,
            callback: null,
            next: null
          });
          e: {
            var Ee = e, be = N;
            Z = n;
            var et = a;
            switch (be.tag) {
              case 1:
                if (Ee = be.payload, typeof Ee == "function") {
                  W = Ee.call(et, W, Z);
                  break e;
                }
                W = Ee;
                break e;
              case 3:
                Ee.flags = Ee.flags & -65537 | 128;
              case 0:
                if (Ee = be.payload, Z = typeof Ee == "function" ? Ee.call(et, W, Z) : Ee, Z == null) break e;
                W = y({}, W, Z);
                break e;
              case 2:
                Dr = !0;
            }
          }
          Z = N.callback, Z !== null && (e.flags |= 64, F && (e.flags |= 8192), F = c.callbacks, F === null ? c.callbacks = [Z] : F.push(Z));
        } else
          F = {
            lane: Z,
            tag: N.tag,
            payload: N.payload,
            callback: N.callback,
            next: null
          }, X === null ? (H = X = F, R = W) : X = X.next = F, C |= Z;
        if (N = N.next, N === null) {
          if (N = c.shared.pending, N === null)
            break;
          F = N, N = F.next, F.next = null, c.lastBaseUpdate = F, c.shared.pending = null;
        }
      } while (!0);
      X === null && (R = W), c.baseState = R, c.firstBaseUpdate = H, c.lastBaseUpdate = X, m === null && (c.shared.lanes = 0), Ur |= C, e.lanes = C, e.memoizedState = W;
    }
  }
  function _p(e, n) {
    if (typeof e != "function")
      throw Error(s(191, e));
    e.call(n);
  }
  function bp(e, n) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        _p(a[e], n);
  }
  var ii = K(null), kl = K(0);
  function Sp(e, n) {
    e = gr, se(kl, e), se(ii, n), gr = e | n.baseLanes;
  }
  function Ec() {
    se(kl, gr), se(ii, ii.current);
  }
  function Cc() {
    gr = kl.current, ae(ii), ae(kl);
  }
  var Rr = 0, Re = null, Ke = null, _t = null, Rl = !1, si = !1, _a = !1, jl = 0, os = 0, li = null, A_ = 0;
  function gt() {
    throw Error(s(321));
  }
  function wc(e, n) {
    if (n === null) return !1;
    for (var a = 0; a < n.length && a < e.length; a++)
      if (!an(e[a], n[a])) return !1;
    return !0;
  }
  function Ac(e, n, a, l, c, m) {
    return Rr = m, Re = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, U.H = e === null || e.memoizedState === null ? am : im, _a = !1, m = a(l, c), _a = !1, si && (m = Ep(
      n,
      a,
      l,
      c
    )), xp(e), m;
  }
  function xp(e) {
    U.H = Ul;
    var n = Ke !== null && Ke.next !== null;
    if (Rr = 0, _t = Ke = Re = null, Rl = !1, os = 0, li = null, n) throw Error(s(300));
    e === null || Nt || (e = e.dependencies, e !== null && Tl(e) && (Nt = !0));
  }
  function Ep(e, n, a, l) {
    Re = e;
    var c = 0;
    do {
      if (si && (li = null), os = 0, si = !1, 25 <= c) throw Error(s(301));
      if (c += 1, _t = Ke = null, e.updateQueue != null) {
        var m = e.updateQueue;
        m.lastEffect = null, m.events = null, m.stores = null, m.memoCache != null && (m.memoCache.index = 0);
      }
      U.H = R_, m = n(a, l);
    } while (si);
    return m;
  }
  function T_() {
    var e = U.H, n = e.useState()[0];
    return n = typeof n.then == "function" ? us(n) : n, e = e.useState()[0], (Ke !== null ? Ke.memoizedState : null) !== e && (Re.flags |= 1024), n;
  }
  function Tc() {
    var e = jl !== 0;
    return jl = 0, e;
  }
  function Oc(e, n, a) {
    n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~a;
  }
  function Nc(e) {
    if (Rl) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        n !== null && (n.pending = null), e = e.next;
      }
      Rl = !1;
    }
    Rr = 0, _t = Ke = Re = null, si = !1, os = jl = 0, li = null;
  }
  function Qt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return _t === null ? Re.memoizedState = _t = e : _t = _t.next = e, _t;
  }
  function bt() {
    if (Ke === null) {
      var e = Re.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ke.next;
    var n = _t === null ? Re.memoizedState : _t.next;
    if (n !== null)
      _t = n, Ke = e;
    else {
      if (e === null)
        throw Re.alternate === null ? Error(s(467)) : Error(s(310));
      Ke = e, e = {
        memoizedState: Ke.memoizedState,
        baseState: Ke.baseState,
        baseQueue: Ke.baseQueue,
        queue: Ke.queue,
        next: null
      }, _t === null ? Re.memoizedState = _t = e : _t = _t.next = e;
    }
    return _t;
  }
  function Dc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function us(e) {
    var n = os;
    return os += 1, li === null && (li = []), e = gp(li, e, n), n = Re, (_t === null ? n.memoizedState : _t.next) === null && (n = n.alternate, U.H = n === null || n.memoizedState === null ? am : im), e;
  }
  function zl(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return us(e);
      if (e.$$typeof === D) return Bt(e);
    }
    throw Error(s(438, String(e)));
  }
  function Mc(e) {
    var n = null, a = Re.updateQueue;
    if (a !== null && (n = a.memoCache), n == null) {
      var l = Re.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (n = {
        data: l.data.map(function(c) {
          return c.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), a === null && (a = Dc(), Re.updateQueue = a), a.memoCache = n, a = n.data[n.index], a === void 0)
      for (a = n.data[n.index] = Array(e), l = 0; l < e; l++)
        a[l] = B;
    return n.index++, a;
  }
  function cr(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Ll(e) {
    var n = bt();
    return kc(n, Ke, e);
  }
  function kc(e, n, a) {
    var l = e.queue;
    if (l === null) throw Error(s(311));
    l.lastRenderedReducer = a;
    var c = e.baseQueue, m = l.pending;
    if (m !== null) {
      if (c !== null) {
        var C = c.next;
        c.next = m.next, m.next = C;
      }
      n.baseQueue = c = m, l.pending = null;
    }
    if (m = e.baseState, c === null) e.memoizedState = m;
    else {
      n = c.next;
      var N = C = null, R = null, H = n, X = !1;
      do {
        var W = H.lane & -536870913;
        if (W !== H.lane ? (Ue & W) === W : (Rr & W) === W) {
          var Z = H.revertLane;
          if (Z === 0)
            R !== null && (R = R.next = {
              lane: 0,
              revertLane: 0,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            }), W === ri && (X = !0);
          else if ((Rr & Z) === Z) {
            H = H.next, Z === ri && (X = !0);
            continue;
          } else
            W = {
              lane: 0,
              revertLane: H.revertLane,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            }, R === null ? (N = R = W, C = m) : R = R.next = W, Re.lanes |= Z, Ur |= Z;
          W = H.action, _a && a(m, W), m = H.hasEagerState ? H.eagerState : a(m, W);
        } else
          Z = {
            lane: W,
            revertLane: H.revertLane,
            action: H.action,
            hasEagerState: H.hasEagerState,
            eagerState: H.eagerState,
            next: null
          }, R === null ? (N = R = Z, C = m) : R = R.next = Z, Re.lanes |= W, Ur |= W;
        H = H.next;
      } while (H !== null && H !== n);
      if (R === null ? C = m : R.next = N, !an(m, e.memoizedState) && (Nt = !0, X && (a = ai, a !== null)))
        throw a;
      e.memoizedState = m, e.baseState = C, e.baseQueue = R, l.lastRenderedState = m;
    }
    return c === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Rc(e) {
    var n = bt(), a = n.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = e;
    var l = a.dispatch, c = a.pending, m = n.memoizedState;
    if (c !== null) {
      a.pending = null;
      var C = c = c.next;
      do
        m = e(m, C.action), C = C.next;
      while (C !== c);
      an(m, n.memoizedState) || (Nt = !0), n.memoizedState = m, n.baseQueue === null && (n.baseState = m), a.lastRenderedState = m;
    }
    return [m, l];
  }
  function Cp(e, n, a) {
    var l = Re, c = bt(), m = Xe;
    if (m) {
      if (a === void 0) throw Error(s(407));
      a = a();
    } else a = n();
    var C = !an(
      (Ke || c).memoizedState,
      a
    );
    C && (c.memoizedState = a, Nt = !0), c = c.queue;
    var N = Tp.bind(null, l, c, e);
    if (cs(2048, 8, N, [e]), c.getSnapshot !== n || C || _t !== null && _t.memoizedState.tag & 1) {
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
      ), rt === null) throw Error(s(349));
      m || (Rr & 124) !== 0 || wp(l, n, a);
    }
    return a;
  }
  function wp(e, n, a) {
    e.flags |= 16384, e = { getSnapshot: n, value: a }, n = Re.updateQueue, n === null ? (n = Dc(), Re.updateQueue = n, n.stores = [e]) : (a = n.stores, a === null ? n.stores = [e] : a.push(e));
  }
  function Ap(e, n, a, l) {
    n.value = a, n.getSnapshot = l, Op(n) && Np(e);
  }
  function Tp(e, n, a) {
    return a(function() {
      Op(n) && Np(e);
    });
  }
  function Op(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var a = n();
      return !an(e, a);
    } catch {
      return !0;
    }
  }
  function Np(e) {
    var n = Wa(e, 2);
    n !== null && fn(n, e, 2);
  }
  function jc(e) {
    var n = Qt();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), _a) {
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
      lastRenderedReducer: cr,
      lastRenderedState: e
    }, n;
  }
  function Dp(e, n, a, l) {
    return e.baseState = a, kc(
      e,
      Ke,
      typeof l == "function" ? l : cr
    );
  }
  function O_(e, n, a, l, c) {
    if (Bl(e)) throw Error(s(485));
    if (e = n.action, e !== null) {
      var m = {
        payload: c,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(C) {
          m.listeners.push(C);
        }
      };
      U.T !== null ? a(!0) : m.isTransition = !1, l(m), a = n.pending, a === null ? (m.next = n.pending = m, Mp(n, m)) : (m.next = a.next, n.pending = a.next = m);
    }
  }
  function Mp(e, n) {
    var a = n.action, l = n.payload, c = e.state;
    if (n.isTransition) {
      var m = U.T, C = {};
      U.T = C;
      try {
        var N = a(c, l), R = U.S;
        R !== null && R(C, N), kp(e, n, N);
      } catch (H) {
        zc(e, n, H);
      } finally {
        U.T = m;
      }
    } else
      try {
        m = a(c, l), kp(e, n, m);
      } catch (H) {
        zc(e, n, H);
      }
  }
  function kp(e, n, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(l) {
        Rp(e, n, l);
      },
      function(l) {
        return zc(e, n, l);
      }
    ) : Rp(e, n, a);
  }
  function Rp(e, n, a) {
    n.status = "fulfilled", n.value = a, jp(n), e.state = a, n = e.pending, n !== null && (a = n.next, a === n ? e.pending = null : (a = a.next, n.next = a, Mp(e, a)));
  }
  function zc(e, n, a) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        n.status = "rejected", n.reason = a, jp(n), n = n.next;
      while (n !== l);
    }
    e.action = null;
  }
  function jp(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++) (0, e[n])();
  }
  function zp(e, n) {
    return n;
  }
  function Lp(e, n) {
    if (Xe) {
      var a = rt.formState;
      if (a !== null) {
        e: {
          var l = Re;
          if (Xe) {
            if (dt) {
              t: {
                for (var c = dt, m = Gn; c.nodeType !== 8; ) {
                  if (!m) {
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
                m = c.data, c = m === "F!" || m === "F" ? c : null;
              }
              if (c) {
                dt = Pn(
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
    return a = Qt(), a.memoizedState = a.baseState = n, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: zp,
      lastRenderedState: n
    }, a.queue = l, a = tm.bind(
      null,
      Re,
      l
    ), l.dispatch = a, l = jc(!1), m = Uc.bind(
      null,
      Re,
      !1,
      l.queue
    ), l = Qt(), c = {
      state: n,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = c, a = O_.bind(
      null,
      Re,
      c,
      m,
      a
    ), c.dispatch = a, l.memoizedState = e, [n, a, !1];
  }
  function Pp(e) {
    var n = bt();
    return Ip(n, Ke, e);
  }
  function Ip(e, n, a) {
    if (n = kc(
      e,
      n,
      zp
    )[0], e = Ll(cr)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var l = us(n);
      } catch (C) {
        throw C === rs ? Dl : C;
      }
    else l = n;
    n = bt();
    var c = n.queue, m = c.dispatch;
    return a !== n.memoizedState && (Re.flags |= 2048, oi(
      9,
      Pl(),
      N_.bind(null, c, a),
      null
    )), [l, m, e];
  }
  function N_(e, n) {
    e.action = n;
  }
  function Bp(e) {
    var n = bt(), a = Ke;
    if (a !== null)
      return Ip(n, a, e);
    bt(), n = n.memoizedState, a = bt();
    var l = a.queue.dispatch;
    return a.memoizedState = e, [n, l, !1];
  }
  function oi(e, n, a, l) {
    return e = { tag: e, create: a, deps: l, inst: n, next: null }, n = Re.updateQueue, n === null && (n = Dc(), Re.updateQueue = n), a = n.lastEffect, a === null ? n.lastEffect = e.next = e : (l = a.next, a.next = e, e.next = l, n.lastEffect = e), e;
  }
  function Pl() {
    return { destroy: void 0, resource: void 0 };
  }
  function Up() {
    return bt().memoizedState;
  }
  function Il(e, n, a, l) {
    var c = Qt();
    l = l === void 0 ? null : l, Re.flags |= e, c.memoizedState = oi(
      1 | n,
      Pl(),
      a,
      l
    );
  }
  function cs(e, n, a, l) {
    var c = bt();
    l = l === void 0 ? null : l;
    var m = c.memoizedState.inst;
    Ke !== null && l !== null && wc(l, Ke.memoizedState.deps) ? c.memoizedState = oi(n, m, a, l) : (Re.flags |= e, c.memoizedState = oi(
      1 | n,
      m,
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
  function Zp(e, n) {
    return cs(4, 2, e, n);
  }
  function Fp(e, n) {
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
    if (l = e(), _a) {
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
    return a === void 0 || (Rr & 1073741824) !== 0 ? e.memoizedState = n : (e.memoizedState = a, e = Jm(), Re.lanes |= e, Ur |= e, a);
  }
  function $p(e, n, a, l) {
    return an(a, n) ? a : ii.current !== null ? (e = Pc(e, a, l), an(e, n) || (Nt = !0), e) : (Rr & 42) === 0 ? (Nt = !0, e.memoizedState = a) : (e = Jm(), Re.lanes |= e, Ur |= e, n);
  }
  function Qp(e, n, a, l, c) {
    var m = ne.p;
    ne.p = m !== 0 && 8 > m ? m : 8;
    var C = U.T, N = {};
    U.T = N, Uc(e, !1, n, a);
    try {
      var R = c(), H = U.S;
      if (H !== null && H(N, R), R !== null && typeof R == "object" && typeof R.then == "function") {
        var X = w_(
          R,
          l
        );
        fs(
          e,
          n,
          X,
          cn(e)
        );
      } else
        fs(
          e,
          n,
          l,
          cn(e)
        );
    } catch (W) {
      fs(
        e,
        n,
        { then: function() {
        }, status: "rejected", reason: W },
        cn()
      );
    } finally {
      ne.p = m, U.T = C;
    }
  }
  function D_() {
  }
  function Ic(e, n, a, l) {
    if (e.tag !== 5) throw Error(s(476));
    var c = Jp(e).queue;
    Qp(
      e,
      c,
      n,
      ce,
      a === null ? D_ : function() {
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
        lastRenderedReducer: cr,
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
        lastRenderedReducer: cr,
        lastRenderedState: a
      },
      next: null
    }, e.memoizedState = n, e = e.alternate, e !== null && (e.memoizedState = n), n;
  }
  function Kp(e) {
    var n = Jp(e).next.queue;
    fs(e, n, {}, cn());
  }
  function Bc() {
    return Bt(Ns);
  }
  function Wp() {
    return bt().memoizedState;
  }
  function em() {
    return bt().memoizedState;
  }
  function M_(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var a = cn();
          e = Mr(a);
          var l = kr(n, e, a);
          l !== null && (fn(l, n, a), is(l, n, a)), n = { cache: mc() }, e.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function k_(e, n, a) {
    var l = cn();
    a = {
      lane: l,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Bl(e) ? nm(n, a) : (a = ic(e, n, a, l), a !== null && (fn(a, e, l), rm(a, n, l)));
  }
  function tm(e, n, a) {
    var l = cn();
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
      var m = e.alternate;
      if (e.lanes === 0 && (m === null || m.lanes === 0) && (m = n.lastRenderedReducer, m !== null))
        try {
          var C = n.lastRenderedState, N = m(C, a);
          if (c.hasEagerState = !0, c.eagerState = N, an(N, C))
            return xl(e, n, c, 0), rt === null && Sl(), !1;
        } catch {
        } finally {
        }
      if (a = ic(e, n, c, l), a !== null)
        return fn(a, e, l), rm(a, n, l), !0;
    }
    return !1;
  }
  function Uc(e, n, a, l) {
    if (l = {
      lane: 2,
      revertLane: _f(),
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
      ), n !== null && fn(n, e, 2);
  }
  function Bl(e) {
    var n = e.alternate;
    return e === Re || n !== null && n === Re;
  }
  function nm(e, n) {
    si = Rl = !0;
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
    readContext: Bt,
    use: zl,
    useCallback: function(e, n) {
      return Qt().memoizedState = [
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
      var a = Qt();
      n = n === void 0 ? null : n;
      var l = e();
      if (_a) {
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
      var l = Qt();
      if (a !== void 0) {
        var c = a(n);
        if (_a) {
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
      }, l.queue = e, e = e.dispatch = k_.bind(
        null,
        Re,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var n = Qt();
      return e = { current: e }, n.memoizedState = e;
    },
    useState: function(e) {
      e = jc(e);
      var n = e.queue, a = tm.bind(null, Re, n);
      return n.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: Lc,
    useDeferredValue: function(e, n) {
      var a = Qt();
      return Pc(a, e, n);
    },
    useTransition: function() {
      var e = jc(!1);
      return e = Qp.bind(
        null,
        Re,
        e.queue,
        !0,
        !1
      ), Qt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, n, a) {
      var l = Re, c = Qt();
      if (Xe) {
        if (a === void 0)
          throw Error(s(407));
        a = a();
      } else {
        if (a = n(), rt === null)
          throw Error(s(349));
        (Ue & 124) !== 0 || wp(l, n, a);
      }
      c.memoizedState = a;
      var m = { value: a, getSnapshot: n };
      return c.queue = m, Hp(Tp.bind(null, l, m, e), [
        e
      ]), l.flags |= 2048, oi(
        9,
        Pl(),
        Ap.bind(
          null,
          l,
          m,
          a,
          n
        ),
        null
      ), a;
    },
    useId: function() {
      var e = Qt(), n = rt.identifierPrefix;
      if (Xe) {
        var a = lr, l = sr;
        a = (l & ~(1 << 32 - qt(l) - 1)).toString(32) + a, n = "«" + n + "R" + a, a = jl++, 0 < a && (n += "H" + a.toString(32)), n += "»";
      } else
        a = A_++, n = "«" + n + "r" + a.toString(32) + "»";
      return e.memoizedState = n;
    },
    useHostTransitionStatus: Bc,
    useFormState: Lp,
    useActionState: Lp,
    useOptimistic: function(e) {
      var n = Qt();
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
        Re,
        !0,
        a
      ), a.dispatch = n, [e, n];
    },
    useMemoCache: Mc,
    useCacheRefresh: function() {
      return Qt().memoizedState = M_.bind(
        null,
        Re
      );
    }
  }, im = {
    readContext: Bt,
    use: zl,
    useCallback: Yp,
    useContext: Bt,
    useEffect: qp,
    useImperativeHandle: Vp,
    useInsertionEffect: Zp,
    useLayoutEffect: Fp,
    useMemo: Xp,
    useReducer: Ll,
    useRef: Up,
    useState: function() {
      return Ll(cr);
    },
    useDebugValue: Lc,
    useDeferredValue: function(e, n) {
      var a = bt();
      return $p(
        a,
        Ke.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = Ll(cr)[0], n = bt().memoizedState;
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
      return Dp(a, Ke, e, n);
    },
    useMemoCache: Mc,
    useCacheRefresh: em
  }, R_ = {
    readContext: Bt,
    use: zl,
    useCallback: Yp,
    useContext: Bt,
    useEffect: qp,
    useImperativeHandle: Vp,
    useInsertionEffect: Zp,
    useLayoutEffect: Fp,
    useMemo: Xp,
    useReducer: Rc,
    useRef: Up,
    useState: function() {
      return Rc(cr);
    },
    useDebugValue: Lc,
    useDeferredValue: function(e, n) {
      var a = bt();
      return Ke === null ? Pc(a, e, n) : $p(
        a,
        Ke.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = Rc(cr)[0], n = bt().memoizedState;
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
      return Ke !== null ? Dp(a, Ke, e, n) : (a.baseState = e, [e, a.queue.dispatch]);
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
    throw n.$$typeof === b ? Error(s(525)) : (e = Object.prototype.toString.call(n), Error(
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
        var I = L.deletions;
        I === null ? (L.deletions = [z], L.flags |= 16) : I.push(z);
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
      return L = ir(L, z), L.index = 0, L.sibling = null, L;
    }
    function m(L, z, I) {
      return L.index = I, e ? (I = L.alternate, I !== null ? (I = I.index, I < z ? (L.flags |= 67108866, z) : I) : (L.flags |= 67108866, z)) : (L.flags |= 1048576, z);
    }
    function C(L) {
      return e && L.alternate === null && (L.flags |= 67108866), L;
    }
    function N(L, z, I, Q) {
      return z === null || z.tag !== 6 ? (z = lc(I, L.mode, Q), z.return = L, z) : (z = c(z, I), z.return = L, z);
    }
    function R(L, z, I, Q) {
      var de = I.type;
      return de === d ? X(
        L,
        z,
        I.props.children,
        Q,
        I.key
      ) : z !== null && (z.elementType === de || typeof de == "object" && de !== null && de.$$typeof === q && sm(de) === z.type) ? (z = c(z, I.props), hs(z, I), z.return = L, z) : (z = Cl(
        I.type,
        I.key,
        I.props,
        null,
        L.mode,
        Q
      ), hs(z, I), z.return = L, z);
    }
    function H(L, z, I, Q) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== I.containerInfo || z.stateNode.implementation !== I.implementation ? (z = oc(I, L.mode, Q), z.return = L, z) : (z = c(z, I.children || []), z.return = L, z);
    }
    function X(L, z, I, Q, de) {
      return z === null || z.tag !== 7 ? (z = fa(
        I,
        L.mode,
        Q,
        de
      ), z.return = L, z) : (z = c(z, I), z.return = L, z);
    }
    function W(L, z, I) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return z = lc(
          "" + z,
          L.mode,
          I
        ), z.return = L, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case _:
            return I = Cl(
              z.type,
              z.key,
              z.props,
              null,
              L.mode,
              I
            ), hs(I, z), I.return = L, I;
          case v:
            return z = oc(
              z,
              L.mode,
              I
            ), z.return = L, z;
          case q:
            var Q = z._init;
            return z = Q(z._payload), W(L, z, I);
        }
        if (ge(z) || $(z))
          return z = fa(
            z,
            L.mode,
            I,
            null
          ), z.return = L, z;
        if (typeof z.then == "function")
          return W(L, Hl(z), I);
        if (z.$$typeof === D)
          return W(
            L,
            Ol(L, z),
            I
          );
        ql(L, z);
      }
      return null;
    }
    function Z(L, z, I, Q) {
      var de = z !== null ? z.key : null;
      if (typeof I == "string" && I !== "" || typeof I == "number" || typeof I == "bigint")
        return de !== null ? null : N(L, z, "" + I, Q);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case _:
            return I.key === de ? R(L, z, I, Q) : null;
          case v:
            return I.key === de ? H(L, z, I, Q) : null;
          case q:
            return de = I._init, I = de(I._payload), Z(L, z, I, Q);
        }
        if (ge(I) || $(I))
          return de !== null ? null : X(L, z, I, Q, null);
        if (typeof I.then == "function")
          return Z(
            L,
            z,
            Hl(I),
            Q
          );
        if (I.$$typeof === D)
          return Z(
            L,
            z,
            Ol(L, I),
            Q
          );
        ql(L, I);
      }
      return null;
    }
    function F(L, z, I, Q, de) {
      if (typeof Q == "string" && Q !== "" || typeof Q == "number" || typeof Q == "bigint")
        return L = L.get(I) || null, N(z, L, "" + Q, de);
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case _:
            return L = L.get(
              Q.key === null ? I : Q.key
            ) || null, R(z, L, Q, de);
          case v:
            return L = L.get(
              Q.key === null ? I : Q.key
            ) || null, H(z, L, Q, de);
          case q:
            var je = Q._init;
            return Q = je(Q._payload), F(
              L,
              z,
              I,
              Q,
              de
            );
        }
        if (ge(Q) || $(Q))
          return L = L.get(I) || null, X(z, L, Q, de, null);
        if (typeof Q.then == "function")
          return F(
            L,
            z,
            I,
            Hl(Q),
            de
          );
        if (Q.$$typeof === D)
          return F(
            L,
            z,
            I,
            Ol(z, Q),
            de
          );
        ql(z, Q);
      }
      return null;
    }
    function Ee(L, z, I, Q) {
      for (var de = null, je = null, pe = z, Se = z = 0, Mt = null; pe !== null && Se < I.length; Se++) {
        pe.index > Se ? (Mt = pe, pe = null) : Mt = pe.sibling;
        var Ge = Z(
          L,
          pe,
          I[Se],
          Q
        );
        if (Ge === null) {
          pe === null && (pe = Mt);
          break;
        }
        e && pe && Ge.alternate === null && n(L, pe), z = m(Ge, z, Se), je === null ? de = Ge : je.sibling = Ge, je = Ge, pe = Mt;
      }
      if (Se === I.length)
        return a(L, pe), Xe && ha(L, Se), de;
      if (pe === null) {
        for (; Se < I.length; Se++)
          pe = W(L, I[Se], Q), pe !== null && (z = m(
            pe,
            z,
            Se
          ), je === null ? de = pe : je.sibling = pe, je = pe);
        return Xe && ha(L, Se), de;
      }
      for (pe = l(pe); Se < I.length; Se++)
        Mt = F(
          pe,
          L,
          Se,
          I[Se],
          Q
        ), Mt !== null && (e && Mt.alternate !== null && pe.delete(
          Mt.key === null ? Se : Mt.key
        ), z = m(
          Mt,
          z,
          Se
        ), je === null ? de = Mt : je.sibling = Mt, je = Mt);
      return e && pe.forEach(function($r) {
        return n(L, $r);
      }), Xe && ha(L, Se), de;
    }
    function be(L, z, I, Q) {
      if (I == null) throw Error(s(151));
      for (var de = null, je = null, pe = z, Se = z = 0, Mt = null, Ge = I.next(); pe !== null && !Ge.done; Se++, Ge = I.next()) {
        pe.index > Se ? (Mt = pe, pe = null) : Mt = pe.sibling;
        var $r = Z(L, pe, Ge.value, Q);
        if ($r === null) {
          pe === null && (pe = Mt);
          break;
        }
        e && pe && $r.alternate === null && n(L, pe), z = m($r, z, Se), je === null ? de = $r : je.sibling = $r, je = $r, pe = Mt;
      }
      if (Ge.done)
        return a(L, pe), Xe && ha(L, Se), de;
      if (pe === null) {
        for (; !Ge.done; Se++, Ge = I.next())
          Ge = W(L, Ge.value, Q), Ge !== null && (z = m(Ge, z, Se), je === null ? de = Ge : je.sibling = Ge, je = Ge);
        return Xe && ha(L, Se), de;
      }
      for (pe = l(pe); !Ge.done; Se++, Ge = I.next())
        Ge = F(pe, L, Se, Ge.value, Q), Ge !== null && (e && Ge.alternate !== null && pe.delete(Ge.key === null ? Se : Ge.key), z = m(Ge, z, Se), je === null ? de = Ge : je.sibling = Ge, je = Ge);
      return e && pe.forEach(function(jb) {
        return n(L, jb);
      }), Xe && ha(L, Se), de;
    }
    function et(L, z, I, Q) {
      if (typeof I == "object" && I !== null && I.type === d && I.key === null && (I = I.props.children), typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case _:
            e: {
              for (var de = I.key; z !== null; ) {
                if (z.key === de) {
                  if (de = I.type, de === d) {
                    if (z.tag === 7) {
                      a(
                        L,
                        z.sibling
                      ), Q = c(
                        z,
                        I.props.children
                      ), Q.return = L, L = Q;
                      break e;
                    }
                  } else if (z.elementType === de || typeof de == "object" && de !== null && de.$$typeof === q && sm(de) === z.type) {
                    a(
                      L,
                      z.sibling
                    ), Q = c(z, I.props), hs(Q, I), Q.return = L, L = Q;
                    break e;
                  }
                  a(L, z);
                  break;
                } else n(L, z);
                z = z.sibling;
              }
              I.type === d ? (Q = fa(
                I.props.children,
                L.mode,
                Q,
                I.key
              ), Q.return = L, L = Q) : (Q = Cl(
                I.type,
                I.key,
                I.props,
                null,
                L.mode,
                Q
              ), hs(Q, I), Q.return = L, L = Q);
            }
            return C(L);
          case v:
            e: {
              for (de = I.key; z !== null; ) {
                if (z.key === de)
                  if (z.tag === 4 && z.stateNode.containerInfo === I.containerInfo && z.stateNode.implementation === I.implementation) {
                    a(
                      L,
                      z.sibling
                    ), Q = c(z, I.children || []), Q.return = L, L = Q;
                    break e;
                  } else {
                    a(L, z);
                    break;
                  }
                else n(L, z);
                z = z.sibling;
              }
              Q = oc(I, L.mode, Q), Q.return = L, L = Q;
            }
            return C(L);
          case q:
            return de = I._init, I = de(I._payload), et(
              L,
              z,
              I,
              Q
            );
        }
        if (ge(I))
          return Ee(
            L,
            z,
            I,
            Q
          );
        if ($(I)) {
          if (de = $(I), typeof de != "function") throw Error(s(150));
          return I = de.call(I), be(
            L,
            z,
            I,
            Q
          );
        }
        if (typeof I.then == "function")
          return et(
            L,
            z,
            Hl(I),
            Q
          );
        if (I.$$typeof === D)
          return et(
            L,
            z,
            Ol(L, I),
            Q
          );
        ql(L, I);
      }
      return typeof I == "string" && I !== "" || typeof I == "number" || typeof I == "bigint" ? (I = "" + I, z !== null && z.tag === 6 ? (a(L, z.sibling), Q = c(z, I), Q.return = L, L = Q) : (a(L, z), Q = lc(I, L.mode, Q), Q.return = L, L = Q), C(L)) : a(L, z);
    }
    return function(L, z, I, Q) {
      try {
        ds = 0;
        var de = et(
          L,
          z,
          I,
          Q
        );
        return ui = null, de;
      } catch (pe) {
        if (pe === rs || pe === Dl) throw pe;
        var je = sn(29, pe, null, L.mode);
        return je.lanes = Q, je.return = L, je;
      } finally {
      }
    };
  }
  var ci = lm(!0), om = lm(!1), Tn = K(null), Vn = null;
  function jr(e) {
    var n = e.alternate;
    se(wt, wt.current & 1), se(Tn, e), Vn === null && (n === null || ii.current !== null || n.memoizedState !== null) && (Vn = e);
  }
  function um(e) {
    if (e.tag === 22) {
      if (se(wt, wt.current), se(Tn, e), Vn === null) {
        var n = e.alternate;
        n !== null && n.memoizedState !== null && (Vn = e);
      }
    } else zr();
  }
  function zr() {
    se(wt, wt.current), se(Tn, Tn.current);
  }
  function fr(e) {
    ae(Tn), Vn === e && (Vn = null), ae(wt);
  }
  var wt = K(0);
  function Zl(e) {
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
    n = e.memoizedState, a = a(l, n), a = a == null ? n : y({}, n, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var qc = {
    enqueueSetState: function(e, n, a) {
      e = e._reactInternals;
      var l = cn(), c = Mr(l);
      c.payload = n, a != null && (c.callback = a), n = kr(e, c, l), n !== null && (fn(n, e, l), is(n, e, l));
    },
    enqueueReplaceState: function(e, n, a) {
      e = e._reactInternals;
      var l = cn(), c = Mr(l);
      c.tag = 1, c.payload = n, a != null && (c.callback = a), n = kr(e, c, l), n !== null && (fn(n, e, l), is(n, e, l));
    },
    enqueueForceUpdate: function(e, n) {
      e = e._reactInternals;
      var a = cn(), l = Mr(a);
      l.tag = 2, n != null && (l.callback = n), n = kr(e, l, a), n !== null && (fn(n, e, a), is(n, e, a));
    }
  };
  function cm(e, n, a, l, c, m, C) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, m, C) : n.prototype && n.prototype.isPureReactComponent ? !$i(a, l) || !$i(c, m) : !0;
  }
  function fm(e, n, a, l) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(a, l), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(a, l), n.state !== e && qc.enqueueReplaceState(n, n.state, null);
  }
  function ba(e, n) {
    var a = n;
    if ("ref" in n) {
      a = {};
      for (var l in n)
        l !== "ref" && (a[l] = n[l]);
    }
    if (e = e.defaultProps) {
      a === n && (a = y({}, a));
      for (var c in e)
        a[c] === void 0 && (a[c] = e[c]);
    }
    return a;
  }
  var Fl = typeof reportError == "function" ? reportError : function(e) {
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
    Fl(e);
  }
  function hm(e) {
    console.error(e);
  }
  function pm(e) {
    Fl(e);
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
  function Zc(e, n, a) {
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
      var m = l.value;
      e.payload = function() {
        return c(m);
      }, e.callback = function() {
        mm(n, a, l);
      };
    }
    var C = a.stateNode;
    C !== null && typeof C.componentDidCatch == "function" && (e.callback = function() {
      mm(n, a, l), typeof c != "function" && (Hr === null ? Hr = /* @__PURE__ */ new Set([this]) : Hr.add(this));
      var N = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: N !== null ? N : ""
      });
    });
  }
  function j_(e, n, a, l, c) {
    if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (n = a.alternate, n !== null && es(
        n,
        a,
        c,
        !0
      ), a = Tn.current, a !== null) {
        switch (a.tag) {
          case 13:
            return Vn === null ? pf() : a.alternate === null && ht === 0 && (ht = 3), a.flags &= -257, a.flags |= 65536, a.lanes = c, l === yc ? a.flags |= 16384 : (n = a.updateQueue, n === null ? a.updateQueue = /* @__PURE__ */ new Set([l]) : n.add(l), gf(e, l, c)), !1;
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
    if (Xe)
      return n = Tn.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = c, l !== fc && (e = Error(s(422), { cause: l }), Wi(En(e, a)))) : (l !== fc && (n = Error(s(423), {
        cause: l
      }), Wi(
        En(n, a)
      )), e = e.current.alternate, e.flags |= 65536, c &= -c, e.lanes |= c, l = En(l, a), c = Zc(
        e.stateNode,
        l,
        c
      ), Sc(e, c), ht !== 4 && (ht = 2)), !1;
    var m = Error(s(520), { cause: l });
    if (m = En(m, a), bs === null ? bs = [m] : bs.push(m), ht !== 4 && (ht = 2), n === null) return !0;
    l = En(l, a), a = n;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = c & -c, a.lanes |= e, e = Zc(a.stateNode, l, e), Sc(a, e), !1;
        case 1:
          if (n = a.type, m = a.stateNode, (a.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Hr === null || !Hr.has(m))))
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
  var ym = Error(s(461)), Nt = !1;
  function kt(e, n, a, l) {
    n.child = e === null ? om(n, null, a, l) : ci(
      n,
      e.child,
      a,
      l
    );
  }
  function _m(e, n, a, l, c) {
    a = a.render;
    var m = n.ref;
    if ("ref" in l) {
      var C = {};
      for (var N in l)
        N !== "ref" && (C[N] = l[N]);
    } else C = l;
    return va(n), l = Ac(
      e,
      n,
      a,
      C,
      m,
      c
    ), N = Tc(), e !== null && !Nt ? (Oc(e, n, c), dr(e, n, c)) : (Xe && N && uc(n), n.flags |= 1, kt(e, n, l, c), n.child);
  }
  function bm(e, n, a, l, c) {
    if (e === null) {
      var m = a.type;
      return typeof m == "function" && !sc(m) && m.defaultProps === void 0 && a.compare === null ? (n.tag = 15, n.type = m, Sm(
        e,
        n,
        m,
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
    if (m = e.child, !Jc(e, c)) {
      var C = m.memoizedProps;
      if (a = a.compare, a = a !== null ? a : $i, a(C, l) && e.ref === n.ref)
        return dr(e, n, c);
    }
    return n.flags |= 1, e = ir(m, l), e.ref = n.ref, e.return = n, n.child = e;
  }
  function Sm(e, n, a, l, c) {
    if (e !== null) {
      var m = e.memoizedProps;
      if ($i(m, l) && e.ref === n.ref)
        if (Nt = !1, n.pendingProps = l = m, Jc(e, c))
          (e.flags & 131072) !== 0 && (Nt = !0);
        else
          return n.lanes = e.lanes, dr(e, n, c);
    }
    return Fc(
      e,
      n,
      a,
      l,
      c
    );
  }
  function xm(e, n, a) {
    var l = n.pendingProps, c = l.children, m = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (l = m !== null ? m.baseLanes | a : a, e !== null) {
          for (c = n.child = e.child, m = 0; c !== null; )
            m = m | c.lanes | c.childLanes, c = c.sibling;
          n.childLanes = m & ~l;
        } else n.childLanes = 0, n.child = null;
        return Em(
          e,
          n,
          l,
          a
        );
      }
      if ((a & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Nl(
          n,
          m !== null ? m.cachePool : null
        ), m !== null ? Sp(n, m) : Ec(), um(n);
      else
        return n.lanes = n.childLanes = 536870912, Em(
          e,
          n,
          m !== null ? m.baseLanes | a : a,
          a
        );
    } else
      m !== null ? (Nl(n, m.cachePool), Sp(n, m), zr(), n.memoizedState = null) : (e !== null && Nl(n, null), Ec(), zr());
    return kt(e, n, c, a), n.child;
  }
  function Em(e, n, a, l) {
    var c = vc();
    return c = c === null ? null : { parent: Ct._currentValue, pool: c }, n.memoizedState = {
      baseLanes: a,
      cachePool: c
    }, e !== null && Nl(n, null), Ec(), um(n), e !== null && es(e, n, l, !0), null;
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
  function Fc(e, n, a, l, c) {
    return va(n), a = Ac(
      e,
      n,
      a,
      l,
      void 0,
      c
    ), l = Tc(), e !== null && !Nt ? (Oc(e, n, c), dr(e, n, c)) : (Xe && l && uc(n), n.flags |= 1, kt(e, n, a, c), n.child);
  }
  function Cm(e, n, a, l, c, m) {
    return va(n), n.updateQueue = null, a = Ep(
      n,
      l,
      a,
      c
    ), xp(e), l = Tc(), e !== null && !Nt ? (Oc(e, n, m), dr(e, n, m)) : (Xe && l && uc(n), n.flags |= 1, kt(e, n, a, m), n.child);
  }
  function wm(e, n, a, l, c) {
    if (va(n), n.stateNode === null) {
      var m = ei, C = a.contextType;
      typeof C == "object" && C !== null && (m = Bt(C)), m = new a(l, m), n.memoizedState = m.state !== null && m.state !== void 0 ? m.state : null, m.updater = qc, n.stateNode = m, m._reactInternals = n, m = n.stateNode, m.props = l, m.state = n.memoizedState, m.refs = {}, _c(n), C = a.contextType, m.context = typeof C == "object" && C !== null ? Bt(C) : ei, m.state = n.memoizedState, C = a.getDerivedStateFromProps, typeof C == "function" && (Hc(
        n,
        a,
        C,
        l
      ), m.state = n.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof m.getSnapshotBeforeUpdate == "function" || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (C = m.state, typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount(), C !== m.state && qc.enqueueReplaceState(m, m.state, null), ls(n, l, m, c), ss(), m.state = n.memoizedState), typeof m.componentDidMount == "function" && (n.flags |= 4194308), l = !0;
    } else if (e === null) {
      m = n.stateNode;
      var N = n.memoizedProps, R = ba(a, N);
      m.props = R;
      var H = m.context, X = a.contextType;
      C = ei, typeof X == "object" && X !== null && (C = Bt(X));
      var W = a.getDerivedStateFromProps;
      X = typeof W == "function" || typeof m.getSnapshotBeforeUpdate == "function", N = n.pendingProps !== N, X || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (N || H !== C) && fm(
        n,
        m,
        l,
        C
      ), Dr = !1;
      var Z = n.memoizedState;
      m.state = Z, ls(n, l, m, c), ss(), H = n.memoizedState, N || Z !== H || Dr ? (typeof W == "function" && (Hc(
        n,
        a,
        W,
        l
      ), H = n.memoizedState), (R = Dr || cm(
        n,
        a,
        R,
        l,
        Z,
        H,
        C
      )) ? (X || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = l, n.memoizedState = H), m.props = l, m.state = H, m.context = C, l = R) : (typeof m.componentDidMount == "function" && (n.flags |= 4194308), l = !1);
    } else {
      m = n.stateNode, bc(e, n), C = n.memoizedProps, X = ba(a, C), m.props = X, W = n.pendingProps, Z = m.context, H = a.contextType, R = ei, typeof H == "object" && H !== null && (R = Bt(H)), N = a.getDerivedStateFromProps, (H = typeof N == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (C !== W || Z !== R) && fm(
        n,
        m,
        l,
        R
      ), Dr = !1, Z = n.memoizedState, m.state = Z, ls(n, l, m, c), ss();
      var F = n.memoizedState;
      C !== W || Z !== F || Dr || e !== null && e.dependencies !== null && Tl(e.dependencies) ? (typeof N == "function" && (Hc(
        n,
        a,
        N,
        l
      ), F = n.memoizedState), (X = Dr || cm(
        n,
        a,
        X,
        l,
        Z,
        F,
        R
      ) || e !== null && e.dependencies !== null && Tl(e.dependencies)) ? (H || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(l, F, R), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(
        l,
        F,
        R
      )), typeof m.componentDidUpdate == "function" && (n.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || C === e.memoizedProps && Z === e.memoizedState || (n.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || C === e.memoizedProps && Z === e.memoizedState || (n.flags |= 1024), n.memoizedProps = l, n.memoizedState = F), m.props = l, m.state = F, m.context = R, l = X) : (typeof m.componentDidUpdate != "function" || C === e.memoizedProps && Z === e.memoizedState || (n.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || C === e.memoizedProps && Z === e.memoizedState || (n.flags |= 1024), l = !1);
    }
    return m = l, Vl(e, n), l = (n.flags & 128) !== 0, m || l ? (m = n.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : m.render(), n.flags |= 1, e !== null && l ? (n.child = ci(
      n,
      e.child,
      null,
      c
    ), n.child = ci(
      n,
      null,
      a,
      c
    )) : kt(e, n, a, c), n.memoizedState = m.state, e = n.child) : e = dr(
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
    return e = e !== null ? e.childLanes & ~a : 0, n && (e |= On), e;
  }
  function Tm(e, n, a) {
    var l = n.pendingProps, c = !1, m = (n.flags & 128) !== 0, C;
    if ((C = m) || (C = e !== null && e.memoizedState === null ? !1 : (wt.current & 2) !== 0), C && (c = !0, n.flags &= -129), C = (n.flags & 32) !== 0, n.flags &= -33, e === null) {
      if (Xe) {
        if (c ? jr(n) : zr(), Xe) {
          var N = dt, R;
          if (R = N) {
            e: {
              for (R = N, N = Gn; R.nodeType !== 8; ) {
                if (!N) {
                  N = null;
                  break e;
                }
                if (R = Pn(
                  R.nextSibling
                ), R === null) {
                  N = null;
                  break e;
                }
              }
              N = R;
            }
            N !== null ? (n.memoizedState = {
              dehydrated: N,
              treeContext: da !== null ? { id: sr, overflow: lr } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, R = sn(
              18,
              null,
              null,
              0
            ), R.stateNode = N, R.return = n, n.child = R, Ft = n, dt = null, R = !0) : R = !1;
          }
          R || ma(n);
        }
        if (N = n.memoizedState, N !== null && (N = N.dehydrated, N !== null))
          return Mf(N) ? n.lanes = 32 : n.lanes = 536870912, null;
        fr(n);
      }
      return N = l.children, l = l.fallback, c ? (zr(), c = n.mode, N = Yl(
        { mode: "hidden", children: N },
        c
      ), l = fa(
        l,
        c,
        a,
        null
      ), N.return = n, l.return = n, N.sibling = l, n.child = N, c = n.child, c.memoizedState = Vc(a), c.childLanes = Yc(
        e,
        C,
        a
      ), n.memoizedState = Gc, l) : (jr(n), Xc(n, N));
    }
    if (R = e.memoizedState, R !== null && (N = R.dehydrated, N !== null)) {
      if (m)
        n.flags & 256 ? (jr(n), n.flags &= -257, n = $c(
          e,
          n,
          a
        )) : n.memoizedState !== null ? (zr(), n.child = e.child, n.flags |= 128, n = null) : (zr(), c = l.fallback, N = n.mode, l = Yl(
          { mode: "visible", children: l.children },
          N
        ), c = fa(
          c,
          N,
          a,
          null
        ), c.flags |= 2, l.return = n, c.return = n, l.sibling = c, n.child = l, ci(
          n,
          e.child,
          null,
          a
        ), l = n.child, l.memoizedState = Vc(a), l.childLanes = Yc(
          e,
          C,
          a
        ), n.memoizedState = Gc, n = c);
      else if (jr(n), Mf(N)) {
        if (C = N.nextSibling && N.nextSibling.dataset, C) var H = C.dgst;
        C = H, l = Error(s(419)), l.stack = "", l.digest = C, Wi({ value: l, source: null, stack: null }), n = $c(
          e,
          n,
          a
        );
      } else if (Nt || es(e, n, a, !1), C = (a & e.childLanes) !== 0, Nt || C) {
        if (C = rt, C !== null && (l = a & -a, l = (l & 42) !== 0 ? 1 : Mu(l), l = (l & (C.suspendedLanes | a)) !== 0 ? 0 : l, l !== 0 && l !== R.retryLane))
          throw R.retryLane = l, Wa(e, l), fn(C, e, l), ym;
        N.data === "$?" || pf(), n = $c(
          e,
          n,
          a
        );
      } else
        N.data === "$?" ? (n.flags |= 192, n.child = e.child, n = null) : (e = R.treeContext, dt = Pn(
          N.nextSibling
        ), Ft = n, Xe = !0, pa = null, Gn = !1, e !== null && (wn[An++] = sr, wn[An++] = lr, wn[An++] = da, sr = e.id, lr = e.overflow, da = n), n = Xc(
          n,
          l.children
        ), n.flags |= 4096);
      return n;
    }
    return c ? (zr(), c = l.fallback, N = n.mode, R = e.child, H = R.sibling, l = ir(R, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = R.subtreeFlags & 65011712, H !== null ? c = ir(H, c) : (c = fa(
      c,
      N,
      a,
      null
    ), c.flags |= 2), c.return = n, l.return = n, l.sibling = c, n.child = l, l = c, c = n.child, N = e.child.memoizedState, N === null ? N = Vc(a) : (R = N.cachePool, R !== null ? (H = Ct._currentValue, R = R.parent !== H ? { parent: H, pool: H } : R) : R = hp(), N = {
      baseLanes: N.baseLanes | a,
      cachePool: R
    }), c.memoizedState = N, c.childLanes = Yc(
      e,
      C,
      a
    ), n.memoizedState = Gc, l) : (jr(n), a = e.child, e = a.sibling, a = ir(a, {
      mode: "visible",
      children: l.children
    }), a.return = n, a.sibling = null, e !== null && (C = n.deletions, C === null ? (n.deletions = [e], n.flags |= 16) : C.push(e)), n.child = a, n.memoizedState = null, a);
  }
  function Xc(e, n) {
    return n = Yl(
      { mode: "visible", children: n },
      e.mode
    ), n.return = e, e.child = n;
  }
  function Yl(e, n) {
    return e = sn(22, e, null, n), e.lanes = 0, e.stateNode = {
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
  function Om(e, n, a) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n), hc(e.return, n, a);
  }
  function Qc(e, n, a, l, c) {
    var m = e.memoizedState;
    m === null ? e.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: a,
      tailMode: c
    } : (m.isBackwards = n, m.rendering = null, m.renderingStartTime = 0, m.last = l, m.tail = a, m.tailMode = c);
  }
  function Nm(e, n, a) {
    var l = n.pendingProps, c = l.revealOrder, m = l.tail;
    if (kt(e, n, l.children, a), l = wt.current, (l & 2) !== 0)
      l = l & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = n.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Om(e, a, n);
          else if (e.tag === 19)
            Om(e, a, n);
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
    switch (se(wt, l), c) {
      case "forwards":
        for (a = n.child, c = null; a !== null; )
          e = a.alternate, e !== null && Zl(e) === null && (c = a), a = a.sibling;
        a = c, a === null ? (c = n.child, n.child = null) : (c = a.sibling, a.sibling = null), Qc(
          n,
          !1,
          c,
          a,
          m
        );
        break;
      case "backwards":
        for (a = null, c = n.child, n.child = null; c !== null; ) {
          if (e = c.alternate, e !== null && Zl(e) === null) {
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
          m
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
  function dr(e, n, a) {
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
      for (e = n.child, a = ir(e, e.pendingProps), n.child = a, a.return = n; e.sibling !== null; )
        e = e.sibling, a = a.sibling = ir(e, e.pendingProps), a.return = n;
      a.sibling = null;
    }
    return n.child;
  }
  function Jc(e, n) {
    return (e.lanes & n) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Tl(e)));
  }
  function z_(e, n, a) {
    switch (n.tag) {
      case 3:
        ye(n, n.stateNode.containerInfo), Nr(n, Ct, e.memoizedState.cache), Ki();
        break;
      case 27:
      case 5:
        P(n);
        break;
      case 4:
        ye(n, n.stateNode.containerInfo);
        break;
      case 10:
        Nr(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 13:
        var l = n.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (jr(n), n.flags |= 128, null) : (a & n.child.childLanes) !== 0 ? Tm(e, n, a) : (jr(n), e = dr(
            e,
            n,
            a
          ), e !== null ? e.sibling : null);
        jr(n);
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
            return Nm(
              e,
              n,
              a
            );
          n.flags |= 128;
        }
        if (c = n.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), se(wt, wt.current), l) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, xm(e, n, a);
      case 24:
        Nr(n, Ct, e.memoizedState.cache);
    }
    return dr(e, n, a);
  }
  function Dm(e, n, a) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps)
        Nt = !0;
      else {
        if (!Jc(e, a) && (n.flags & 128) === 0)
          return Nt = !1, z_(
            e,
            n,
            a
          );
        Nt = (e.flags & 131072) !== 0;
      }
    else
      Nt = !1, Xe && (n.flags & 1048576) !== 0 && sp(n, Al, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          e = n.pendingProps;
          var l = n.elementType, c = l._init;
          if (l = c(l._payload), n.type = l, typeof l == "function")
            sc(l) ? (e = ba(l, e), n.tag = 1, n = wm(
              null,
              n,
              l,
              e,
              a
            )) : (n.tag = 0, n = Fc(
              null,
              n,
              l,
              e,
              a
            ));
          else {
            if (l != null) {
              if (c = l.$$typeof, c === E) {
                n.tag = 11, n = _m(
                  null,
                  n,
                  l,
                  e,
                  a
                );
                break e;
              } else if (c === k) {
                n.tag = 14, n = bm(
                  null,
                  n,
                  l,
                  e,
                  a
                );
                break e;
              }
            }
            throw n = he(l) || l, Error(s(306, n, ""));
          }
        }
        return n;
      case 0:
        return Fc(
          e,
          n,
          n.type,
          n.pendingProps,
          a
        );
      case 1:
        return l = n.type, c = ba(
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
          if (ye(
            n,
            n.stateNode.containerInfo
          ), e === null) throw Error(s(387));
          l = n.pendingProps;
          var m = n.memoizedState;
          c = m.element, bc(e, n), ls(n, l, null, a);
          var C = n.memoizedState;
          if (l = C.cache, Nr(n, Ct, l), l !== m.cache && pc(
            n,
            [Ct],
            a,
            !0
          ), ss(), l = C.element, m.isDehydrated)
            if (m = {
              element: l,
              isDehydrated: !1,
              cache: C.cache
            }, n.updateQueue.baseState = m, n.memoizedState = m, n.flags & 256) {
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
              for (dt = Pn(e.firstChild), Ft = n, Xe = !0, pa = null, Gn = !0, a = om(
                n,
                null,
                l,
                a
              ), n.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
          else {
            if (Ki(), l === c) {
              n = dr(
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
        return Vl(e, n), e === null ? (a = jg(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = a : Xe || (a = n.type, e = n.pendingProps, l = lo(
          Y.current
        ).createElement(a), l[It] = n, l[Xt] = e, jt(l, a, e), Ot(l), n.stateNode = l) : n.memoizedState = jg(
          n.type,
          e.memoizedProps,
          n.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return P(n), e === null && Xe && (l = n.stateNode = Mg(
          n.type,
          n.pendingProps,
          Y.current
        ), Ft = n, Gn = !0, c = dt, Fr(n.type) ? (kf = c, dt = Pn(
          l.firstChild
        )) : dt = c), kt(
          e,
          n,
          n.pendingProps.children,
          a
        ), Vl(e, n), e === null && (n.flags |= 4194304), n.child;
      case 5:
        return e === null && Xe && ((c = l = dt) && (l = ub(
          l,
          n.type,
          n.pendingProps,
          Gn
        ), l !== null ? (n.stateNode = l, Ft = n, dt = Pn(
          l.firstChild
        ), Gn = !1, c = !0) : c = !1), c || ma(n)), P(n), c = n.type, m = n.pendingProps, C = e !== null ? e.memoizedProps : null, l = m.children, Of(c, m) ? l = null : C !== null && Of(c, C) && (n.flags |= 32), n.memoizedState !== null && (c = Ac(
          e,
          n,
          T_,
          null,
          null,
          a
        ), Ns._currentValue = c), Vl(e, n), kt(e, n, l, a), n.child;
      case 6:
        return e === null && Xe && ((e = a = dt) && (a = cb(
          a,
          n.pendingProps,
          Gn
        ), a !== null ? (n.stateNode = a, Ft = n, dt = null, e = !0) : e = !1), e || ma(n)), null;
      case 13:
        return Tm(e, n, a);
      case 4:
        return ye(
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
        return _m(
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
        return l = n.pendingProps, Nr(n, n.type, l.value), kt(
          e,
          n,
          l.children,
          a
        ), n.child;
      case 9:
        return c = n.type._context, l = n.pendingProps.children, va(n), c = Bt(c), l = l(c), n.flags |= 1, kt(e, n, l, a), n.child;
      case 14:
        return bm(
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
        return Nm(e, n, a);
      case 31:
        return l = n.pendingProps, a = n.mode, l = {
          mode: l.mode,
          children: l.children
        }, e === null ? (a = Yl(
          l,
          a
        ), a.ref = n.ref, n.child = a, a.return = n, n = a) : (a = ir(e.child, l), a.ref = n.ref, n.child = a, a.return = n, n = a), n;
      case 22:
        return xm(e, n, a);
      case 24:
        return va(n), l = Bt(Ct), e === null ? (c = vc(), c === null && (c = rt, m = mc(), c.pooledCache = m, m.refCount++, m !== null && (c.pooledCacheLanes |= a), c = m), n.memoizedState = {
          parent: l,
          cache: c
        }, _c(n), Nr(n, Ct, c)) : ((e.lanes & a) !== 0 && (bc(e, n), ls(n, null, null, a), ss()), c = e.memoizedState, m = n.memoizedState, c.parent !== l ? (c = { parent: l, cache: l }, n.memoizedState = c, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = c), Nr(n, Ct, l)) : (l = m.cache, Nr(n, Ct, l), l !== c.cache && pc(
          n,
          [Ct],
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
  function hr(e) {
    e.flags |= 4;
  }
  function Mm(e, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Bg(n)) {
      if (n = Tn.current, n !== null && ((Ue & 4194048) === Ue ? Vn !== null : (Ue & 62914560) !== Ue && (Ue & 536870912) === 0 || n !== Vn))
        throw as = yc, pp;
      e.flags |= 8192;
    }
  }
  function Xl(e, n) {
    n !== null && (e.flags |= 4), e.flags & 16384 && (n = e.tag !== 22 ? uh() : 536870912, e.lanes |= n, pi |= n);
  }
  function ps(e, n) {
    if (!Xe)
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
  function ut(e) {
    var n = e.alternate !== null && e.alternate.child === e.child, a = 0, l = 0;
    if (n)
      for (var c = e.child; c !== null; )
        a |= c.lanes | c.childLanes, l |= c.subtreeFlags & 65011712, l |= c.flags & 65011712, c.return = e, c = c.sibling;
    else
      for (c = e.child; c !== null; )
        a |= c.lanes | c.childLanes, l |= c.subtreeFlags, l |= c.flags, c.return = e, c = c.sibling;
    return e.subtreeFlags |= l, e.childLanes = a, n;
  }
  function L_(e, n, a) {
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
        return ut(n), null;
      case 1:
        return ut(n), null;
      case 3:
        return a = n.stateNode, l = null, e !== null && (l = e.memoizedState.cache), n.memoizedState.cache !== l && (n.flags |= 2048), ur(Ct), Ve(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Ji(n) ? hr(n) : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, up())), ut(n), null;
      case 26:
        return a = n.memoizedState, e === null ? (hr(n), a !== null ? (ut(n), Mm(n, a)) : (ut(n), n.flags &= -16777217)) : a ? a !== e.memoizedState ? (hr(n), ut(n), Mm(n, a)) : (ut(n), n.flags &= -16777217) : (e.memoizedProps !== l && hr(n), ut(n), n.flags &= -16777217), null;
      case 27:
        J(n), a = Y.current;
        var c = n.type;
        if (e !== null && n.stateNode != null)
          e.memoizedProps !== l && hr(n);
        else {
          if (!l) {
            if (n.stateNode === null)
              throw Error(s(166));
            return ut(n), null;
          }
          e = le.current, Ji(n) ? lp(n) : (e = Mg(c, l, a), n.stateNode = e, hr(n));
        }
        return ut(n), null;
      case 5:
        if (J(n), a = n.type, e !== null && n.stateNode != null)
          e.memoizedProps !== l && hr(n);
        else {
          if (!l) {
            if (n.stateNode === null)
              throw Error(s(166));
            return ut(n), null;
          }
          if (e = le.current, Ji(n))
            lp(n);
          else {
            switch (c = lo(
              Y.current
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
            e[It] = n, e[Xt] = l;
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
            e && hr(n);
          }
        }
        return ut(n), n.flags &= -16777217, null;
      case 6:
        if (e && n.stateNode != null)
          e.memoizedProps !== l && hr(n);
        else {
          if (typeof l != "string" && n.stateNode === null)
            throw Error(s(166));
          if (e = Y.current, Ji(n)) {
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
        return ut(n), null;
      case 13:
        if (l = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (c = Ji(n), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!c) throw Error(s(318));
              if (c = n.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(s(317));
              c[It] = n;
            } else
              Ki(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            ut(n), c = !1;
          } else
            c = up(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = c), c = !0;
          if (!c)
            return n.flags & 256 ? (fr(n), n) : (fr(n), null);
        }
        if (fr(n), (n.flags & 128) !== 0)
          return n.lanes = a, n;
        if (a = l !== null, e = e !== null && e.memoizedState !== null, a) {
          l = n.child, c = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (c = l.alternate.memoizedState.cachePool.pool);
          var m = null;
          l.memoizedState !== null && l.memoizedState.cachePool !== null && (m = l.memoizedState.cachePool.pool), m !== c && (l.flags |= 2048);
        }
        return a !== e && a && (n.child.flags |= 8192), Xl(n, n.updateQueue), ut(n), null;
      case 4:
        return Ve(), e === null && Ef(n.stateNode.containerInfo), ut(n), null;
      case 10:
        return ur(n.type), ut(n), null;
      case 19:
        if (ae(wt), c = n.memoizedState, c === null) return ut(n), null;
        if (l = (n.flags & 128) !== 0, m = c.rendering, m === null)
          if (l) ps(c, !1);
          else {
            if (ht !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = n.child; e !== null; ) {
                if (m = Zl(e), m !== null) {
                  for (n.flags |= 128, ps(c, !1), e = m.updateQueue, n.updateQueue = e, Xl(n, e), n.subtreeFlags = 0, e = a, a = n.child; a !== null; )
                    ip(a, e), a = a.sibling;
                  return se(
                    wt,
                    wt.current & 1 | 2
                  ), n.child;
                }
                e = e.sibling;
              }
            c.tail !== null && Ze() > Jl && (n.flags |= 128, l = !0, ps(c, !1), n.lanes = 4194304);
          }
        else {
          if (!l)
            if (e = Zl(m), e !== null) {
              if (n.flags |= 128, l = !0, e = e.updateQueue, n.updateQueue = e, Xl(n, e), ps(c, !0), c.tail === null && c.tailMode === "hidden" && !m.alternate && !Xe)
                return ut(n), null;
            } else
              2 * Ze() - c.renderingStartTime > Jl && a !== 536870912 && (n.flags |= 128, l = !0, ps(c, !1), n.lanes = 4194304);
          c.isBackwards ? (m.sibling = n.child, n.child = m) : (e = c.last, e !== null ? e.sibling = m : n.child = m, c.last = m);
        }
        return c.tail !== null ? (n = c.tail, c.rendering = n, c.tail = n.sibling, c.renderingStartTime = Ze(), n.sibling = null, e = wt.current, se(wt, l ? e & 1 | 2 : e & 1), n) : (ut(n), null);
      case 22:
      case 23:
        return fr(n), Cc(), l = n.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (n.flags |= 8192) : l && (n.flags |= 8192), l ? (a & 536870912) !== 0 && (n.flags & 128) === 0 && (ut(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : ut(n), a = n.updateQueue, a !== null && Xl(n, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== a && (n.flags |= 2048), e !== null && ae(ya), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), n.memoizedState.cache !== a && (n.flags |= 2048), ur(Ct), ut(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, n.tag));
  }
  function P_(e, n) {
    switch (cc(n), n.tag) {
      case 1:
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return ur(Ct), Ve(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return J(n), null;
      case 13:
        if (fr(n), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(s(340));
          Ki();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return ae(wt), null;
      case 4:
        return Ve(), null;
      case 10:
        return ur(n.type), null;
      case 22:
      case 23:
        return fr(n), Cc(), e !== null && ae(ya), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 24:
        return ur(Ct), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function km(e, n) {
    switch (cc(n), n.tag) {
      case 3:
        ur(Ct), Ve();
        break;
      case 26:
      case 27:
      case 5:
        J(n);
        break;
      case 4:
        Ve();
        break;
      case 13:
        fr(n);
        break;
      case 19:
        ae(wt);
        break;
      case 10:
        ur(n.type);
        break;
      case 22:
      case 23:
        fr(n), Cc(), e !== null && ae(ya);
        break;
      case 24:
        ur(Ct);
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
            var m = a.create, C = a.inst;
            l = m(), C.destroy = l;
          }
          a = a.next;
        } while (a !== c);
      }
    } catch (N) {
      nt(n, n.return, N);
    }
  }
  function Lr(e, n, a) {
    try {
      var l = n.updateQueue, c = l !== null ? l.lastEffect : null;
      if (c !== null) {
        var m = c.next;
        l = m;
        do {
          if ((l.tag & e) === e) {
            var C = l.inst, N = C.destroy;
            if (N !== void 0) {
              C.destroy = void 0, c = n;
              var R = a, H = N;
              try {
                H();
              } catch (X) {
                nt(
                  c,
                  R,
                  X
                );
              }
            }
          }
          l = l.next;
        } while (l !== m);
      }
    } catch (X) {
      nt(n, n.return, X);
    }
  }
  function Rm(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var a = e.stateNode;
      try {
        bp(n, a);
      } catch (l) {
        nt(e, e.return, l);
      }
    }
  }
  function jm(e, n, a) {
    a.props = ba(
      e.type,
      e.memoizedProps
    ), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (l) {
      nt(e, n, l);
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
      nt(e, n, c);
    }
  }
  function Yn(e, n) {
    var a = e.ref, l = e.refCleanup;
    if (a !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (c) {
          nt(e, n, c);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (c) {
          nt(e, n, c);
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
      nt(e, e.return, c);
    }
  }
  function Kc(e, n, a) {
    try {
      var l = e.stateNode;
      ab(l, e.type, a, n), l[Xt] = n;
    } catch (c) {
      nt(e, e.return, c);
    }
  }
  function Lm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Fr(e.type) || e.tag === 4;
  }
  function Wc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Lm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Fr(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ef(e, n, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, n ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, n) : (n = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, n.appendChild(e), a = a._reactRootContainer, a != null || n.onclick !== null || (n.onclick = so));
    else if (l !== 4 && (l === 27 && Fr(e.type) && (a = e.stateNode, n = null), e = e.child, e !== null))
      for (ef(e, n, a), e = e.sibling; e !== null; )
        ef(e, n, a), e = e.sibling;
  }
  function $l(e, n, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, n ? a.insertBefore(e, n) : a.appendChild(e);
    else if (l !== 4 && (l === 27 && Fr(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for ($l(e, n, a), e = e.sibling; e !== null; )
        $l(e, n, a), e = e.sibling;
  }
  function Pm(e) {
    var n = e.stateNode, a = e.memoizedProps;
    try {
      for (var l = e.type, c = n.attributes; c.length; )
        n.removeAttributeNode(c[0]);
      jt(n, l, a), n[It] = e, n[Xt] = a;
    } catch (m) {
      nt(e, e.return, m);
    }
  }
  var pr = !1, vt = !1, tf = !1, Im = typeof WeakSet == "function" ? WeakSet : Set, Dt = null;
  function I_(e, n) {
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
            var c = l.anchorOffset, m = l.focusNode;
            l = l.focusOffset;
            try {
              a.nodeType, m.nodeType;
            } catch {
              a = null;
              break e;
            }
            var C = 0, N = -1, R = -1, H = 0, X = 0, W = e, Z = null;
            t: for (; ; ) {
              for (var F; W !== a || c !== 0 && W.nodeType !== 3 || (N = C + c), W !== m || l !== 0 && W.nodeType !== 3 || (R = C + l), W.nodeType === 3 && (C += W.nodeValue.length), (F = W.firstChild) !== null; )
                Z = W, W = F;
              for (; ; ) {
                if (W === e) break t;
                if (Z === a && ++H === c && (N = C), Z === m && ++X === l && (R = C), (F = W.nextSibling) !== null) break;
                W = Z, Z = W.parentNode;
              }
              W = F;
            }
            a = N === -1 || R === -1 ? null : { start: N, end: R };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Tf = { focusedElem: e, selectionRange: a }, po = !1, Dt = n; Dt !== null; )
      if (n = Dt, e = n.child, (n.subtreeFlags & 1024) !== 0 && e !== null)
        e.return = n, Dt = e;
      else
        for (; Dt !== null; ) {
          switch (n = Dt, m = n.alternate, e = n.flags, n.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && m !== null) {
                e = void 0, a = n, c = m.memoizedProps, m = m.memoizedState, l = a.stateNode;
                try {
                  var Ee = ba(
                    a.type,
                    c,
                    a.elementType === a.type
                  );
                  e = l.getSnapshotBeforeUpdate(
                    Ee,
                    m
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (be) {
                  nt(
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
                  Df(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Df(e);
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
            } catch (C) {
              nt(a, a.return, C);
            }
          else {
            var c = ba(
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
            } catch (C) {
              nt(
                a,
                a.return,
                C
              );
            }
          }
        l & 64 && Rm(a), l & 512 && gs(a, a.return);
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
            bp(e, n);
          } catch (C) {
            nt(a, a.return, C);
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
        Pr(e, a), l & 4 && qm(e, a), l & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = Y_.bind(
          null,
          a
        ), fb(e, a))));
        break;
      case 22:
        if (l = a.memoizedState !== null || pr, !l) {
          n = n !== null && n.memoizedState !== null || vt, c = pr;
          var m = vt;
          pr = l, (vt = n) && !m ? Ir(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Pr(e, a), pr = c, vt = m;
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
    n !== null && (e.alternate = null, Um(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && ju(n)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var st = null, Jt = !1;
  function mr(e, n, a) {
    for (a = a.child; a !== null; )
      Hm(e, n, a), a = a.sibling;
  }
  function Hm(e, n, a) {
    if (mt && typeof mt.onCommitFiberUnmount == "function")
      try {
        mt.onCommitFiberUnmount(tr, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        vt || Yn(a, n), mr(
          e,
          n,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        vt || Yn(a, n);
        var l = st, c = Jt;
        Fr(a.type) && (st = a.stateNode, Jt = !1), mr(
          e,
          n,
          a
        ), ws(a.stateNode), st = l, Jt = c;
        break;
      case 5:
        vt || Yn(a, n);
      case 6:
        if (l = st, c = Jt, st = null, mr(
          e,
          n,
          a
        ), st = l, Jt = c, st !== null)
          if (Jt)
            try {
              (st.nodeType === 9 ? st.body : st.nodeName === "HTML" ? st.ownerDocument.body : st).removeChild(a.stateNode);
            } catch (m) {
              nt(
                a,
                n,
                m
              );
            }
          else
            try {
              st.removeChild(a.stateNode);
            } catch (m) {
              nt(
                a,
                n,
                m
              );
            }
        break;
      case 18:
        st !== null && (Jt ? (e = st, Ng(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), Rs(e)) : Ng(st, a.stateNode));
        break;
      case 4:
        l = st, c = Jt, st = a.stateNode.containerInfo, Jt = !0, mr(
          e,
          n,
          a
        ), st = l, Jt = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        vt || Lr(2, a, n), vt || Lr(4, a, n), mr(
          e,
          n,
          a
        );
        break;
      case 1:
        vt || (Yn(a, n), l = a.stateNode, typeof l.componentWillUnmount == "function" && jm(
          a,
          n,
          l
        )), mr(
          e,
          n,
          a
        );
        break;
      case 21:
        mr(
          e,
          n,
          a
        );
        break;
      case 22:
        vt = (l = vt) || a.memoizedState !== null, mr(
          e,
          n,
          a
        ), vt = l;
        break;
      default:
        mr(
          e,
          n,
          a
        );
    }
  }
  function qm(e, n) {
    if (n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Rs(e);
      } catch (a) {
        nt(n, n.return, a);
      }
  }
  function B_(e) {
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
    var a = B_(e);
    n.forEach(function(l) {
      var c = X_.bind(null, e, l);
      a.has(l) || (a.add(l), l.then(c, c));
    });
  }
  function ln(e, n) {
    var a = n.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var c = a[l], m = e, C = n, N = C;
        e: for (; N !== null; ) {
          switch (N.tag) {
            case 27:
              if (Fr(N.type)) {
                st = N.stateNode, Jt = !1;
                break e;
              }
              break;
            case 5:
              st = N.stateNode, Jt = !1;
              break e;
            case 3:
            case 4:
              st = N.stateNode.containerInfo, Jt = !0;
              break e;
          }
          N = N.return;
        }
        if (st === null) throw Error(s(160));
        Hm(m, C, c), st = null, Jt = !1, m = c.alternate, m !== null && (m.return = null), c.return = null;
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; )
        Zm(n, e), n = n.sibling;
  }
  var Ln = null;
  function Zm(e, n) {
    var a = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ln(n, e), on(e), l & 4 && (Lr(3, e, e.return), ms(3, e), Lr(5, e, e.return));
        break;
      case 1:
        ln(n, e), on(e), l & 512 && (vt || a === null || Yn(a, a.return)), l & 64 && pr && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
        break;
      case 26:
        var c = Ln;
        if (ln(n, e), on(e), l & 512 && (vt || a === null || Yn(a, a.return)), l & 4) {
          var m = a !== null ? a.memoizedState : null;
          if (l = e.memoizedState, a === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, a = e.memoizedProps, c = c.ownerDocument || c;
                  t: switch (l) {
                    case "title":
                      m = c.getElementsByTagName("title")[0], (!m || m[Ui] || m[It] || m.namespaceURI === "http://www.w3.org/2000/svg" || m.hasAttribute("itemprop")) && (m = c.createElement(l), c.head.insertBefore(
                        m,
                        c.querySelector("head > title")
                      )), jt(m, l, a), m[It] = e, Ot(m), l = m;
                      break e;
                    case "link":
                      var C = Pg(
                        "link",
                        "href",
                        c
                      ).get(l + (a.href || ""));
                      if (C) {
                        for (var N = 0; N < C.length; N++)
                          if (m = C[N], m.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && m.getAttribute("rel") === (a.rel == null ? null : a.rel) && m.getAttribute("title") === (a.title == null ? null : a.title) && m.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            C.splice(N, 1);
                            break t;
                          }
                      }
                      m = c.createElement(l), jt(m, l, a), c.head.appendChild(m);
                      break;
                    case "meta":
                      if (C = Pg(
                        "meta",
                        "content",
                        c
                      ).get(l + (a.content || ""))) {
                        for (N = 0; N < C.length; N++)
                          if (m = C[N], m.getAttribute("content") === (a.content == null ? null : "" + a.content) && m.getAttribute("name") === (a.name == null ? null : a.name) && m.getAttribute("property") === (a.property == null ? null : a.property) && m.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && m.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            C.splice(N, 1);
                            break t;
                          }
                      }
                      m = c.createElement(l), jt(m, l, a), c.head.appendChild(m);
                      break;
                    default:
                      throw Error(s(468, l));
                  }
                  m[It] = e, Ot(m), l = m;
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
            m !== l ? (m === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : m.count--, l === null ? Ig(
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
        ln(n, e), on(e), l & 512 && (vt || a === null || Yn(a, a.return)), a !== null && l & 4 && Kc(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (ln(n, e), on(e), l & 512 && (vt || a === null || Yn(a, a.return)), e.flags & 32) {
          c = e.stateNode;
          try {
            Va(c, "");
          } catch (F) {
            nt(e, e.return, F);
          }
        }
        l & 4 && e.stateNode != null && (c = e.memoizedProps, Kc(
          e,
          c,
          a !== null ? a.memoizedProps : c
        )), l & 1024 && (tf = !0);
        break;
      case 6:
        if (ln(n, e), on(e), l & 4) {
          if (e.stateNode === null)
            throw Error(s(162));
          l = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = l;
          } catch (F) {
            nt(e, e.return, F);
          }
        }
        break;
      case 3:
        if (co = null, c = Ln, Ln = oo(n.containerInfo), ln(n, e), Ln = c, on(e), l & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            Rs(n.containerInfo);
          } catch (F) {
            nt(e, e.return, F);
          }
        tf && (tf = !1, Fm(e));
        break;
      case 4:
        l = Ln, Ln = oo(
          e.stateNode.containerInfo
        ), ln(n, e), on(e), Ln = l;
        break;
      case 12:
        ln(n, e), on(e);
        break;
      case 13:
        ln(n, e), on(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (uf = Ze()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, nf(e, l)));
        break;
      case 22:
        c = e.memoizedState !== null;
        var R = a !== null && a.memoizedState !== null, H = pr, X = vt;
        if (pr = H || c, vt = X || R, ln(n, e), vt = X, pr = H, on(e), l & 8192)
          e: for (n = e.stateNode, n._visibility = c ? n._visibility & -2 : n._visibility | 1, c && (a === null || R || pr || vt || Sa(e)), a = null, n = e; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (a === null) {
                R = a = n;
                try {
                  if (m = R.stateNode, c)
                    C = m.style, typeof C.setProperty == "function" ? C.setProperty("display", "none", "important") : C.display = "none";
                  else {
                    N = R.stateNode;
                    var W = R.memoizedProps.style, Z = W != null && W.hasOwnProperty("display") ? W.display : null;
                    N.style.display = Z == null || typeof Z == "boolean" ? "" : ("" + Z).trim();
                  }
                } catch (F) {
                  nt(R, R.return, F);
                }
              }
            } else if (n.tag === 6) {
              if (a === null) {
                R = n;
                try {
                  R.stateNode.nodeValue = c ? "" : R.memoizedProps;
                } catch (F) {
                  nt(R, R.return, F);
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
        ln(n, e), on(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, nf(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ln(n, e), on(e);
    }
  }
  function on(e) {
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
            var c = a.stateNode, m = Wc(e);
            $l(e, m, c);
            break;
          case 5:
            var C = a.stateNode;
            a.flags & 32 && (Va(C, ""), a.flags &= -33);
            var N = Wc(e);
            $l(e, N, C);
            break;
          case 3:
          case 4:
            var R = a.stateNode.containerInfo, H = Wc(e);
            ef(
              e,
              H,
              R
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch (X) {
        nt(e, e.return, X);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function Fm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var n = e;
        Fm(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), e = e.sibling;
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
          Yn(n, n.return);
          var a = n.stateNode;
          typeof a.componentWillUnmount == "function" && jm(
            n,
            n.return,
            a
          ), Sa(n);
          break;
        case 27:
          ws(n.stateNode);
        case 26:
        case 5:
          Yn(n, n.return), Sa(n);
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
      var l = n.alternate, c = e, m = n, C = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          Ir(
            c,
            m,
            a
          ), ms(4, m);
          break;
        case 1:
          if (Ir(
            c,
            m,
            a
          ), l = m, c = l.stateNode, typeof c.componentDidMount == "function")
            try {
              c.componentDidMount();
            } catch (H) {
              nt(l, l.return, H);
            }
          if (l = m, c = l.updateQueue, c !== null) {
            var N = l.stateNode;
            try {
              var R = c.shared.hiddenCallbacks;
              if (R !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < R.length; c++)
                  _p(R[c], N);
            } catch (H) {
              nt(l, l.return, H);
            }
          }
          a && C & 64 && Rm(m), gs(m, m.return);
          break;
        case 27:
          Pm(m);
        case 26:
        case 5:
          Ir(
            c,
            m,
            a
          ), a && l === null && C & 4 && zm(m), gs(m, m.return);
          break;
        case 12:
          Ir(
            c,
            m,
            a
          );
          break;
        case 13:
          Ir(
            c,
            m,
            a
          ), a && C & 4 && qm(c, m);
          break;
        case 22:
          m.memoizedState === null && Ir(
            c,
            m,
            a
          ), gs(m, m.return);
          break;
        case 30:
          break;
        default:
          Ir(
            c,
            m,
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
  function Xn(e, n, a, l) {
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
        Xn(
          e,
          n,
          a,
          l
        ), c & 2048 && ms(9, n);
        break;
      case 1:
        Xn(
          e,
          n,
          a,
          l
        );
        break;
      case 3:
        Xn(
          e,
          n,
          a,
          l
        ), c & 2048 && (e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && ts(e)));
        break;
      case 12:
        if (c & 2048) {
          Xn(
            e,
            n,
            a,
            l
          ), e = n.stateNode;
          try {
            var m = n.memoizedProps, C = m.id, N = m.onPostCommit;
            typeof N == "function" && N(
              C,
              n.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (R) {
            nt(n, n.return, R);
          }
        } else
          Xn(
            e,
            n,
            a,
            l
          );
        break;
      case 13:
        Xn(
          e,
          n,
          a,
          l
        );
        break;
      case 23:
        break;
      case 22:
        m = n.stateNode, C = n.alternate, n.memoizedState !== null ? m._visibility & 2 ? Xn(
          e,
          n,
          a,
          l
        ) : vs(e, n) : m._visibility & 2 ? Xn(
          e,
          n,
          a,
          l
        ) : (m._visibility |= 2, fi(
          e,
          n,
          a,
          l,
          (n.subtreeFlags & 10256) !== 0
        )), c & 2048 && rf(C, n);
        break;
      case 24:
        Xn(
          e,
          n,
          a,
          l
        ), c & 2048 && af(n.alternate, n);
        break;
      default:
        Xn(
          e,
          n,
          a,
          l
        );
    }
  }
  function fi(e, n, a, l, c) {
    for (c = c && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var m = e, C = n, N = a, R = l, H = C.flags;
      switch (C.tag) {
        case 0:
        case 11:
        case 15:
          fi(
            m,
            C,
            N,
            R,
            c
          ), ms(8, C);
          break;
        case 23:
          break;
        case 22:
          var X = C.stateNode;
          C.memoizedState !== null ? X._visibility & 2 ? fi(
            m,
            C,
            N,
            R,
            c
          ) : vs(
            m,
            C
          ) : (X._visibility |= 2, fi(
            m,
            C,
            N,
            R,
            c
          )), c && H & 2048 && rf(
            C.alternate,
            C
          );
          break;
        case 24:
          fi(
            m,
            C,
            N,
            R,
            c
          ), c && H & 2048 && af(C.alternate, C);
          break;
        default:
          fi(
            m,
            C,
            N,
            R,
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
        di(e), e.flags & ys && e.memoizedState !== null && Cb(
          Ln,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        di(e);
        break;
      case 3:
      case 4:
        var n = Ln;
        Ln = oo(e.stateNode.containerInfo), di(e), Ln = n;
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
  function _s(e) {
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
        _s(e), e.flags & 2048 && Lr(9, e, e.return);
        break;
      case 3:
        _s(e);
        break;
      case 12:
        _s(e);
        break;
      case 22:
        var n = e.stateNode;
        e.memoizedState !== null && n._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (n._visibility &= -3, Ql(e)) : _s(e);
        break;
      default:
        _s(e);
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
    for (; Dt !== null; ) {
      var a = Dt;
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
      if (l = a.child, l !== null) l.return = a, Dt = l;
      else
        e: for (a = e; Dt !== null; ) {
          l = Dt;
          var c = l.sibling, m = l.return;
          if (Um(l), l === a) {
            Dt = null;
            break e;
          }
          if (c !== null) {
            c.return = m, Dt = c;
            break e;
          }
          Dt = m;
        }
    }
  }
  var U_ = {
    getCacheForType: function(e) {
      var n = Bt(Ct), a = n.data.get(e);
      return a === void 0 && (a = e(), n.data.set(e, a)), a;
    }
  }, H_ = typeof WeakMap == "function" ? WeakMap : Map, $e = 0, rt = null, ze = null, Ue = 0, Qe = 0, un = null, Br = !1, hi = !1, sf = !1, gr = 0, ht = 0, Ur = 0, xa = 0, lf = 0, On = 0, pi = 0, bs = null, Kt = null, of = !1, uf = 0, Jl = 1 / 0, Kl = null, Hr = null, Rt = 0, qr = null, mi = null, gi = 0, cf = 0, ff = null, Qm = null, Ss = 0, df = null;
  function cn() {
    if (($e & 2) !== 0 && Ue !== 0)
      return Ue & -Ue;
    if (U.T !== null) {
      var e = ri;
      return e !== 0 ? e : _f();
    }
    return dh();
  }
  function Jm() {
    On === 0 && (On = (Ue & 536870912) === 0 || Xe ? Ia() : 536870912);
    var e = Tn.current;
    return e !== null && (e.flags |= 32), On;
  }
  function fn(e, n, a) {
    (e === rt && (Qe === 2 || Qe === 9) || e.cancelPendingCommit !== null) && (vi(e, 0), Zr(
      e,
      Ue,
      On,
      !1
    )), Bi(e, a), (($e & 2) === 0 || e !== rt) && (e === rt && (($e & 2) === 0 && (xa |= a), ht === 4 && Zr(
      e,
      Ue,
      On,
      !1
    )), $n(e));
  }
  function Km(e, n, a) {
    if (($e & 6) !== 0) throw Error(s(327));
    var l = !a && (n & 124) === 0 && (n & e.expiredLanes) === 0 || Yt(e, n), c = l ? F_(e, n) : mf(e, n, !0), m = l;
    do {
      if (c === 0) {
        hi && !l && Zr(e, n, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, m && !q_(a)) {
          c = mf(e, n, !1), m = !1;
          continue;
        }
        if (c === 2) {
          if (m = n, e.errorRecoveryDisabledLanes & m)
            var C = 0;
          else
            C = e.pendingLanes & -536870913, C = C !== 0 ? C : C & 536870912 ? 536870912 : 0;
          if (C !== 0) {
            n = C;
            e: {
              var N = e;
              c = bs;
              var R = N.current.memoizedState.isDehydrated;
              if (R && (vi(N, C).flags |= 256), C = mf(
                N,
                C,
                !1
              ), C !== 2) {
                if (sf && !R) {
                  N.errorRecoveryDisabledLanes |= m, xa |= m, c = 4;
                  break e;
                }
                m = Kt, Kt = c, m !== null && (Kt === null ? Kt = m : Kt.push.apply(
                  Kt,
                  m
                ));
              }
              c = C;
            }
            if (m = !1, c !== 2) continue;
          }
        }
        if (c === 1) {
          vi(e, 0), Zr(e, n, 0, !0);
          break;
        }
        e: {
          switch (l = e, m = c, m) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              Zr(
                l,
                n,
                On,
                !Br
              );
              break e;
            case 2:
              Kt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((n & 62914560) === n && (c = uf + 300 - Ze(), 10 < c)) {
            if (Zr(
              l,
              n,
              On,
              !Br
            ), Zt(l, 0, !0) !== 0) break e;
            l.timeoutHandle = Tg(
              Wm.bind(
                null,
                l,
                a,
                Kt,
                Kl,
                of,
                n,
                On,
                xa,
                pi,
                Br,
                m,
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
            Kt,
            Kl,
            of,
            n,
            On,
            xa,
            pi,
            Br,
            m,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    $n(e);
  }
  function Wm(e, n, a, l, c, m, C, N, R, H, X, W, Z, F) {
    if (e.timeoutHandle = -1, W = n.subtreeFlags, (W & 8192 || (W & 16785408) === 16785408) && (Os = { stylesheets: null, count: 0, unsuspend: Eb }, Vm(n), W = wb(), W !== null)) {
      e.cancelPendingCommit = W(
        sg.bind(
          null,
          e,
          n,
          m,
          a,
          l,
          c,
          C,
          N,
          R,
          X,
          1,
          Z,
          F
        )
      ), Zr(e, m, C, !H);
      return;
    }
    sg(
      e,
      n,
      m,
      a,
      l,
      c,
      C,
      N,
      R
    );
  }
  function q_(e) {
    for (var n = e; ; ) {
      var a = n.tag;
      if ((a === 0 || a === 11 || a === 15) && n.flags & 16384 && (a = n.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var l = 0; l < a.length; l++) {
          var c = a[l], m = c.getSnapshot;
          c = c.value;
          try {
            if (!an(m(), c)) return !1;
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
      var m = 31 - qt(c), C = 1 << m;
      l[m] = -1, c &= ~C;
    }
    a !== 0 && ch(e, a, n);
  }
  function Wl() {
    return ($e & 6) === 0 ? (xs(0), !1) : !0;
  }
  function hf() {
    if (ze !== null) {
      if (Qe === 0)
        var e = ze.return;
      else
        e = ze, or = ga = null, Nc(e), ui = null, ds = 0, e = ze;
      for (; e !== null; )
        km(e.alternate, e), e = e.return;
      ze = null;
    }
  }
  function vi(e, n) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, sb(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), hf(), rt = e, ze = a = ir(e.current, null), Ue = n, Qe = 0, un = null, Br = !1, hi = Yt(e, n), sf = !1, pi = On = lf = xa = Ur = ht = 0, Kt = bs = null, of = !1, (n & 8) !== 0 && (n |= n & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= n; 0 < l; ) {
        var c = 31 - qt(l), m = 1 << c;
        n |= e[c], l &= ~m;
      }
    return gr = n, Sl(), a;
  }
  function eg(e, n) {
    Re = null, U.H = Ul, n === rs || n === Dl ? (n = vp(), Qe = 3) : n === pp ? (n = vp(), Qe = 4) : Qe = n === ym ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, un = n, ze === null && (ht = 1, Gl(
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
    return U.A = U_, e;
  }
  function pf() {
    ht = 4, Br || (Ue & 4194048) !== Ue && Tn.current !== null || (hi = !0), (Ur & 134217727) === 0 && (xa & 134217727) === 0 || rt === null || Zr(
      rt,
      Ue,
      On,
      !1
    );
  }
  function mf(e, n, a) {
    var l = $e;
    $e |= 2;
    var c = tg(), m = ng();
    (rt !== e || Ue !== n) && (Kl = null, vi(e, n)), n = !1;
    var C = ht;
    e: do
      try {
        if (Qe !== 0 && ze !== null) {
          var N = ze, R = un;
          switch (Qe) {
            case 8:
              hf(), C = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Tn.current === null && (n = !0);
              var H = Qe;
              if (Qe = 0, un = null, yi(e, N, R, H), a && hi) {
                C = 0;
                break e;
              }
              break;
            default:
              H = Qe, Qe = 0, un = null, yi(e, N, R, H);
          }
        }
        Z_(), C = ht;
        break;
      } catch (X) {
        eg(e, X);
      }
    while (!0);
    return n && e.shellSuspendCounter++, or = ga = null, $e = l, U.H = c, U.A = m, ze === null && (rt = null, Ue = 0, Sl()), C;
  }
  function Z_() {
    for (; ze !== null; ) rg(ze);
  }
  function F_(e, n) {
    var a = $e;
    $e |= 2;
    var l = tg(), c = ng();
    rt !== e || Ue !== n ? (Kl = null, Jl = Ze() + 500, vi(e, n)) : hi = Yt(
      e,
      n
    );
    e: do
      try {
        if (Qe !== 0 && ze !== null) {
          n = ze;
          var m = un;
          t: switch (Qe) {
            case 1:
              Qe = 0, un = null, yi(e, n, m, 1);
              break;
            case 2:
            case 9:
              if (mp(m)) {
                Qe = 0, un = null, ag(n);
                break;
              }
              n = function() {
                Qe !== 2 && Qe !== 9 || rt !== e || (Qe = 7), $n(e);
              }, m.then(n, n);
              break e;
            case 3:
              Qe = 7;
              break e;
            case 4:
              Qe = 5;
              break e;
            case 7:
              mp(m) ? (Qe = 0, un = null, ag(n)) : (Qe = 0, un = null, yi(e, n, m, 7));
              break;
            case 5:
              var C = null;
              switch (ze.tag) {
                case 26:
                  C = ze.memoizedState;
                case 5:
                case 27:
                  var N = ze;
                  if (!C || Bg(C)) {
                    Qe = 0, un = null;
                    var R = N.sibling;
                    if (R !== null) ze = R;
                    else {
                      var H = N.return;
                      H !== null ? (ze = H, eo(H)) : ze = null;
                    }
                    break t;
                  }
              }
              Qe = 0, un = null, yi(e, n, m, 5);
              break;
            case 6:
              Qe = 0, un = null, yi(e, n, m, 6);
              break;
            case 8:
              hf(), ht = 6;
              break e;
            default:
              throw Error(s(462));
          }
        }
        G_();
        break;
      } catch (X) {
        eg(e, X);
      }
    while (!0);
    return or = ga = null, U.H = l, U.A = c, $e = a, ze !== null ? 0 : (rt = null, Ue = 0, Sl(), ht);
  }
  function G_() {
    for (; ze !== null && !Ie(); )
      rg(ze);
  }
  function rg(e) {
    var n = Dm(e.alternate, e, gr);
    e.memoizedProps = e.pendingProps, n === null ? eo(e) : ze = n;
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
          Ue
        );
        break;
      case 11:
        n = Cm(
          a,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          Ue
        );
        break;
      case 5:
        Nc(n);
      default:
        km(a, n), n = ze = ip(n, gr), n = Dm(a, n, gr);
    }
    e.memoizedProps = e.pendingProps, n === null ? eo(e) : ze = n;
  }
  function yi(e, n, a, l) {
    or = ga = null, Nc(n), ui = null, ds = 0;
    var c = n.return;
    try {
      if (j_(
        e,
        c,
        n,
        a,
        Ue
      )) {
        ht = 1, Gl(
          e,
          En(a, e.current)
        ), ze = null;
        return;
      }
    } catch (m) {
      if (c !== null) throw ze = c, m;
      ht = 1, Gl(
        e,
        En(a, e.current)
      ), ze = null;
      return;
    }
    n.flags & 32768 ? (Xe || l === 1 ? e = !0 : hi || (Ue & 536870912) !== 0 ? e = !1 : (Br = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Tn.current, l !== null && l.tag === 13 && (l.flags |= 16384))), ig(n, e)) : eo(n);
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
      var a = L_(
        n.alternate,
        n,
        gr
      );
      if (a !== null) {
        ze = a;
        return;
      }
      if (n = n.sibling, n !== null) {
        ze = n;
        return;
      }
      ze = n = e;
    } while (n !== null);
    ht === 0 && (ht = 5);
  }
  function ig(e, n) {
    do {
      var a = P_(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, ze = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !n && (e = e.sibling, e !== null)) {
        ze = e;
        return;
      }
      ze = e = a;
    } while (e !== null);
    ht = 6, ze = null;
  }
  function sg(e, n, a, l, c, m, C, N, R) {
    e.cancelPendingCommit = null;
    do
      to();
    while (Rt !== 0);
    if (($e & 6) !== 0) throw Error(s(327));
    if (n !== null) {
      if (n === e.current) throw Error(s(177));
      if (m = n.lanes | n.childLanes, m |= ac, E1(
        e,
        a,
        m,
        C,
        N,
        R
      ), e === rt && (ze = rt = null, Ue = 0), mi = n, qr = e, gi = a, cf = m, ff = c, Qm = l, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, $_(fe, function() {
        return fg(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || l) {
        l = U.T, U.T = null, c = ne.p, ne.p = 2, C = $e, $e |= 4;
        try {
          I_(e, n, a);
        } finally {
          $e = C, ne.p = c, U.T = l;
        }
      }
      Rt = 1, lg(), og(), ug();
    }
  }
  function lg() {
    if (Rt === 1) {
      Rt = 0;
      var e = qr, n = mi, a = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || a) {
        a = U.T, U.T = null;
        var l = ne.p;
        ne.p = 2;
        var c = $e;
        $e |= 4;
        try {
          Zm(n, e);
          var m = Tf, C = $h(e.containerInfo), N = m.focusedElem, R = m.selectionRange;
          if (C !== N && N && N.ownerDocument && Xh(
            N.ownerDocument.documentElement,
            N
          )) {
            if (R !== null && Wu(N)) {
              var H = R.start, X = R.end;
              if (X === void 0 && (X = H), "selectionStart" in N)
                N.selectionStart = H, N.selectionEnd = Math.min(
                  X,
                  N.value.length
                );
              else {
                var W = N.ownerDocument || document, Z = W && W.defaultView || window;
                if (Z.getSelection) {
                  var F = Z.getSelection(), Ee = N.textContent.length, be = Math.min(R.start, Ee), et = R.end === void 0 ? be : Math.min(R.end, Ee);
                  !F.extend && be > et && (C = et, et = be, be = C);
                  var L = Yh(
                    N,
                    be
                  ), z = Yh(
                    N,
                    et
                  );
                  if (L && z && (F.rangeCount !== 1 || F.anchorNode !== L.node || F.anchorOffset !== L.offset || F.focusNode !== z.node || F.focusOffset !== z.offset)) {
                    var I = W.createRange();
                    I.setStart(L.node, L.offset), F.removeAllRanges(), be > et ? (F.addRange(I), F.extend(z.node, z.offset)) : (I.setEnd(z.node, z.offset), F.addRange(I));
                  }
                }
              }
            }
            for (W = [], F = N; F = F.parentNode; )
              F.nodeType === 1 && W.push({
                element: F,
                left: F.scrollLeft,
                top: F.scrollTop
              });
            for (typeof N.focus == "function" && N.focus(), N = 0; N < W.length; N++) {
              var Q = W[N];
              Q.element.scrollLeft = Q.left, Q.element.scrollTop = Q.top;
            }
          }
          po = !!Af, Tf = Af = null;
        } finally {
          $e = c, ne.p = l, U.T = a;
        }
      }
      e.current = n, Rt = 2;
    }
  }
  function og() {
    if (Rt === 2) {
      Rt = 0;
      var e = qr, n = mi, a = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || a) {
        a = U.T, U.T = null;
        var l = ne.p;
        ne.p = 2;
        var c = $e;
        $e |= 4;
        try {
          Bm(e, n.alternate, n);
        } finally {
          $e = c, ne.p = l, U.T = a;
        }
      }
      Rt = 3;
    }
  }
  function ug() {
    if (Rt === 4 || Rt === 3) {
      Rt = 0, Ne();
      var e = qr, n = mi, a = gi, l = Qm;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? Rt = 5 : (Rt = 0, mi = qr = null, cg(e, e.pendingLanes));
      var c = e.pendingLanes;
      if (c === 0 && (Hr = null), ku(a), n = n.stateNode, mt && typeof mt.onCommitFiberRoot == "function")
        try {
          mt.onCommitFiberRoot(
            tr,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        n = U.T, c = ne.p, ne.p = 2, U.T = null;
        try {
          for (var m = e.onRecoverableError, C = 0; C < l.length; C++) {
            var N = l[C];
            m(N.value, {
              componentStack: N.stack
            });
          }
        } finally {
          U.T = n, ne.p = c;
        }
      }
      (gi & 3) !== 0 && to(), $n(e), c = e.pendingLanes, (a & 4194090) !== 0 && (c & 42) !== 0 ? e === df ? Ss++ : (Ss = 0, df = e) : Ss = 0, xs(0);
    }
  }
  function cg(e, n) {
    (e.pooledCacheLanes &= n) === 0 && (n = e.pooledCache, n != null && (e.pooledCache = null, ts(n)));
  }
  function to(e) {
    return lg(), og(), ug(), fg();
  }
  function fg() {
    if (Rt !== 5) return !1;
    var e = qr, n = cf;
    cf = 0;
    var a = ku(gi), l = U.T, c = ne.p;
    try {
      ne.p = 32 > a ? 32 : a, U.T = null, a = ff, ff = null;
      var m = qr, C = gi;
      if (Rt = 0, mi = qr = null, gi = 0, ($e & 6) !== 0) throw Error(s(331));
      var N = $e;
      if ($e |= 4, Xm(m.current), Gm(
        m,
        m.current,
        C,
        a
      ), $e = N, xs(0, !1), mt && typeof mt.onPostCommitFiberRoot == "function")
        try {
          mt.onPostCommitFiberRoot(tr, m);
        } catch {
        }
      return !0;
    } finally {
      ne.p = c, U.T = l, cg(e, n);
    }
  }
  function dg(e, n, a) {
    n = En(a, n), n = Zc(e.stateNode, n, 2), e = kr(e, n, 2), e !== null && (Bi(e, 2), $n(e));
  }
  function nt(e, n, a) {
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
            ), Bi(l, 2), $n(l));
            break;
          }
        }
        n = n.return;
      }
  }
  function gf(e, n, a) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new H_();
      var c = /* @__PURE__ */ new Set();
      l.set(n, c);
    } else
      c = l.get(n), c === void 0 && (c = /* @__PURE__ */ new Set(), l.set(n, c));
    c.has(a) || (sf = !0, c.add(a), e = V_.bind(null, e, n, a), n.then(e, e));
  }
  function V_(e, n, a) {
    var l = e.pingCache;
    l !== null && l.delete(n), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, rt === e && (Ue & a) === a && (ht === 4 || ht === 3 && (Ue & 62914560) === Ue && 300 > Ze() - uf ? ($e & 2) === 0 && vi(e, 0) : lf |= a, pi === Ue && (pi = 0)), $n(e);
  }
  function hg(e, n) {
    n === 0 && (n = uh()), e = Wa(e, n), e !== null && (Bi(e, n), $n(e));
  }
  function Y_(e) {
    var n = e.memoizedState, a = 0;
    n !== null && (a = n.retryLane), hg(e, a);
  }
  function X_(e, n) {
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
  function $_(e, n) {
    return xe(e, n);
  }
  var no = null, _i = null, vf = !1, ro = !1, yf = !1, Ea = 0;
  function $n(e) {
    e !== _i && e.next === null && (_i === null ? no = _i = e : _i = _i.next = e), ro = !0, vf || (vf = !0, J_());
  }
  function xs(e, n) {
    if (!yf && ro) {
      yf = !0;
      do
        for (var a = !1, l = no; l !== null; ) {
          if (e !== 0) {
            var c = l.pendingLanes;
            if (c === 0) var m = 0;
            else {
              var C = l.suspendedLanes, N = l.pingedLanes;
              m = (1 << 31 - qt(42 | e) + 1) - 1, m &= c & ~(C & ~N), m = m & 201326741 ? m & 201326741 | 1 : m ? m | 2 : 0;
            }
            m !== 0 && (a = !0, vg(l, m));
          } else
            m = Ue, m = Zt(
              l,
              l === rt ? m : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (m & 3) === 0 || Yt(l, m) || (a = !0, vg(l, m));
          l = l.next;
        }
      while (a);
      yf = !1;
    }
  }
  function Q_() {
    pg();
  }
  function pg() {
    ro = vf = !1;
    var e = 0;
    Ea !== 0 && (ib() && (e = Ea), Ea = 0);
    for (var n = Ze(), a = null, l = no; l !== null; ) {
      var c = l.next, m = mg(l, n);
      m === 0 ? (l.next = null, a === null ? no = c : a.next = c, c === null && (_i = a)) : (a = l, (e !== 0 || (m & 3) !== 0) && (ro = !0)), l = c;
    }
    xs(e);
  }
  function mg(e, n) {
    for (var a = e.suspendedLanes, l = e.pingedLanes, c = e.expirationTimes, m = e.pendingLanes & -62914561; 0 < m; ) {
      var C = 31 - qt(m), N = 1 << C, R = c[C];
      R === -1 ? ((N & a) === 0 || (N & l) !== 0) && (c[C] = ul(N, n)) : R <= n && (e.expiredLanes |= N), m &= ~N;
    }
    if (n = rt, a = Ue, a = Zt(
      e,
      e === n ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, a === 0 || e === n && (Qe === 2 || Qe === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && He(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || Yt(e, a)) {
      if (n = a & -a, n === e.callbackPriority) return n;
      switch (l !== null && He(l), ku(a)) {
        case 2:
        case 8:
          a = ue;
          break;
        case 32:
          a = fe;
          break;
        case 268435456:
          a = Fe;
          break;
        default:
          a = fe;
      }
      return l = gg.bind(null, e), a = xe(a, l), e.callbackPriority = n, e.callbackNode = a, n;
    }
    return l !== null && l !== null && He(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function gg(e, n) {
    if (Rt !== 0 && Rt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (to() && e.callbackNode !== a)
      return null;
    var l = Ue;
    return l = Zt(
      e,
      e === rt ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (Km(e, l, n), mg(e, Ze()), e.callbackNode != null && e.callbackNode === a ? gg.bind(null, e) : null);
  }
  function vg(e, n) {
    if (to()) return null;
    Km(e, n, !0);
  }
  function J_() {
    lb(function() {
      ($e & 6) !== 0 ? xe(
        Je,
        Q_
      ) : pg();
    });
  }
  function _f() {
    return Ea === 0 && (Ea = Ia()), Ea;
  }
  function yg(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : pl("" + e);
  }
  function _g(e, n) {
    var a = n.ownerDocument.createElement("input");
    return a.name = n.name, a.value = n.value, e.id && a.setAttribute("form", e.id), n.parentNode.insertBefore(a, n), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function K_(e, n, a, l, c) {
    if (n === "submit" && a && a.stateNode === c) {
      var m = yg(
        (c[Xt] || null).action
      ), C = l.submitter;
      C && (n = (n = C[Xt] || null) ? yg(n.formAction) : C.getAttribute("formAction"), n !== null && (m = n, C = null));
      var N = new yl(
        "action",
        "action",
        null,
        l,
        c
      );
      e.push({
        event: N,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (Ea !== 0) {
                  var R = C ? _g(c, C) : new FormData(c);
                  Ic(
                    a,
                    {
                      pending: !0,
                      data: R,
                      method: c.method,
                      action: m
                    },
                    null,
                    R
                  );
                }
              } else
                typeof m == "function" && (N.preventDefault(), R = C ? _g(c, C) : new FormData(c), Ic(
                  a,
                  {
                    pending: !0,
                    data: R,
                    method: c.method,
                    action: m
                  },
                  m,
                  R
                ));
            },
            currentTarget: c
          }
        ]
      });
    }
  }
  for (var bf = 0; bf < rc.length; bf++) {
    var Sf = rc[bf], W_ = Sf.toLowerCase(), eb = Sf[0].toUpperCase() + Sf.slice(1);
    zn(
      W_,
      "on" + eb
    );
  }
  zn(Kh, "onAnimationEnd"), zn(Wh, "onAnimationIteration"), zn(ep, "onAnimationStart"), zn("dblclick", "onDoubleClick"), zn("focusin", "onFocus"), zn("focusout", "onBlur"), zn(v_, "onTransitionRun"), zn(y_, "onTransitionStart"), zn(__, "onTransitionCancel"), zn(tp, "onTransitionEnd"), Za("onMouseEnter", ["mouseout", "mouseover"]), Za("onMouseLeave", ["mouseout", "mouseover"]), Za("onPointerEnter", ["pointerout", "pointerover"]), Za("onPointerLeave", ["pointerout", "pointerover"]), la(
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
  ), tb = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Es)
  );
  function bg(e, n) {
    n = (n & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var l = e[a], c = l.event;
      l = l.listeners;
      e: {
        var m = void 0;
        if (n)
          for (var C = l.length - 1; 0 <= C; C--) {
            var N = l[C], R = N.instance, H = N.currentTarget;
            if (N = N.listener, R !== m && c.isPropagationStopped())
              break e;
            m = N, c.currentTarget = H;
            try {
              m(c);
            } catch (X) {
              Fl(X);
            }
            c.currentTarget = null, m = R;
          }
        else
          for (C = 0; C < l.length; C++) {
            if (N = l[C], R = N.instance, H = N.currentTarget, N = N.listener, R !== m && c.isPropagationStopped())
              break e;
            m = N, c.currentTarget = H;
            try {
              m(c);
            } catch (X) {
              Fl(X);
            }
            c.currentTarget = null, m = R;
          }
      }
    }
  }
  function Le(e, n) {
    var a = n[Ru];
    a === void 0 && (a = n[Ru] = /* @__PURE__ */ new Set());
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
        a !== "selectionchange" && (tb.has(a) || xf(a, !1, e), xf(a, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[ao] || (n[ao] = !0, xf("selectionchange", !1, n));
    }
  }
  function Sg(e, n, a, l) {
    switch (Gg(n)) {
      case 2:
        var c = Ob;
        break;
      case 8:
        c = Nb;
        break;
      default:
        c = Pf;
    }
    a = c.bind(
      null,
      n,
      a,
      e
    ), c = void 0, !Fu || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (c = !0), l ? c !== void 0 ? e.addEventListener(n, a, {
      capture: !0,
      passive: c
    }) : e.addEventListener(n, a, !0) : c !== void 0 ? e.addEventListener(n, a, {
      passive: c
    }) : e.addEventListener(n, a, !1);
  }
  function Cf(e, n, a, l, c) {
    var m = l;
    if ((n & 1) === 0 && (n & 2) === 0 && l !== null)
      e: for (; ; ) {
        if (l === null) return;
        var C = l.tag;
        if (C === 3 || C === 4) {
          var N = l.stateNode.containerInfo;
          if (N === c) break;
          if (C === 4)
            for (C = l.return; C !== null; ) {
              var R = C.tag;
              if ((R === 3 || R === 4) && C.stateNode.containerInfo === c)
                return;
              C = C.return;
            }
          for (; N !== null; ) {
            if (C = Ua(N), C === null) return;
            if (R = C.tag, R === 5 || R === 6 || R === 26 || R === 27) {
              l = m = C;
              continue e;
            }
            N = N.parentNode;
          }
        }
        l = l.return;
      }
    Oh(function() {
      var H = m, X = qu(a), W = [];
      e: {
        var Z = np.get(e);
        if (Z !== void 0) {
          var F = yl, Ee = e;
          switch (e) {
            case "keypress":
              if (gl(a) === 0) break e;
            case "keydown":
            case "keyup":
              F = $1;
              break;
            case "focusin":
              Ee = "focus", F = Xu;
              break;
            case "focusout":
              Ee = "blur", F = Xu;
              break;
            case "beforeblur":
            case "afterblur":
              F = Xu;
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
              F = Mh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              F = P1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              F = K1;
              break;
            case Kh:
            case Wh:
            case ep:
              F = U1;
              break;
            case tp:
              F = e_;
              break;
            case "scroll":
            case "scrollend":
              F = z1;
              break;
            case "wheel":
              F = n_;
              break;
            case "copy":
            case "cut":
            case "paste":
              F = q1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              F = Rh;
              break;
            case "toggle":
            case "beforetoggle":
              F = a_;
          }
          var be = (n & 4) !== 0, et = !be && (e === "scroll" || e === "scrollend"), L = be ? Z !== null ? Z + "Capture" : null : Z;
          be = [];
          for (var z = H, I; z !== null; ) {
            var Q = z;
            if (I = Q.stateNode, Q = Q.tag, Q !== 5 && Q !== 26 && Q !== 27 || I === null || L === null || (Q = qi(z, L), Q != null && be.push(
              Cs(z, Q, I)
            )), et) break;
            z = z.return;
          }
          0 < be.length && (Z = new F(
            Z,
            Ee,
            null,
            a,
            X
          ), W.push({ event: Z, listeners: be }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (Z = e === "mouseover" || e === "pointerover", F = e === "mouseout" || e === "pointerout", Z && a !== Hu && (Ee = a.relatedTarget || a.fromElement) && (Ua(Ee) || Ee[Ba]))
            break e;
          if ((F || Z) && (Z = X.window === X ? X : (Z = X.ownerDocument) ? Z.defaultView || Z.parentWindow : window, F ? (Ee = a.relatedTarget || a.toElement, F = H, Ee = Ee ? Ua(Ee) : null, Ee !== null && (et = u(Ee), be = Ee.tag, Ee !== et || be !== 5 && be !== 27 && be !== 6) && (Ee = null)) : (F = null, Ee = H), F !== Ee)) {
            if (be = Mh, Q = "onMouseLeave", L = "onMouseEnter", z = "mouse", (e === "pointerout" || e === "pointerover") && (be = Rh, Q = "onPointerLeave", L = "onPointerEnter", z = "pointer"), et = F == null ? Z : Hi(F), I = Ee == null ? Z : Hi(Ee), Z = new be(
              Q,
              z + "leave",
              F,
              a,
              X
            ), Z.target = et, Z.relatedTarget = I, Q = null, Ua(X) === H && (be = new be(
              L,
              z + "enter",
              Ee,
              a,
              X
            ), be.target = I, be.relatedTarget = et, Q = be), et = Q, F && Ee)
              t: {
                for (be = F, L = Ee, z = 0, I = be; I; I = bi(I))
                  z++;
                for (I = 0, Q = L; Q; Q = bi(Q))
                  I++;
                for (; 0 < z - I; )
                  be = bi(be), z--;
                for (; 0 < I - z; )
                  L = bi(L), I--;
                for (; z--; ) {
                  if (be === L || L !== null && be === L.alternate)
                    break t;
                  be = bi(be), L = bi(L);
                }
                be = null;
              }
            else be = null;
            F !== null && xg(
              W,
              Z,
              F,
              be,
              !1
            ), Ee !== null && et !== null && xg(
              W,
              et,
              Ee,
              be,
              !0
            );
          }
        }
        e: {
          if (Z = H ? Hi(H) : window, F = Z.nodeName && Z.nodeName.toLowerCase(), F === "select" || F === "input" && Z.type === "file")
            var de = Hh;
          else if (Bh(Z))
            if (qh)
              de = p_;
            else {
              de = d_;
              var je = f_;
            }
          else
            F = Z.nodeName, !F || F.toLowerCase() !== "input" || Z.type !== "checkbox" && Z.type !== "radio" ? H && Uu(H.elementType) && (de = Hh) : de = h_;
          if (de && (de = de(e, H))) {
            Uh(
              W,
              de,
              a,
              X
            );
            break e;
          }
          je && je(e, Z, H), e === "focusout" && H && Z.type === "number" && H.memoizedProps.value != null && Bu(Z, "number", Z.value);
        }
        switch (je = H ? Hi(H) : window, e) {
          case "focusin":
            (Bh(je) || je.contentEditable === "true") && (Qa = je, ec = H, Qi = null);
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
            tc = !1, Qh(W, a, X);
            break;
          case "selectionchange":
            if (g_) break;
          case "keydown":
          case "keyup":
            Qh(W, a, X);
        }
        var pe;
        if (Qu)
          e: {
            switch (e) {
              case "compositionstart":
                var Se = "onCompositionStart";
                break e;
              case "compositionend":
                Se = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Se = "onCompositionUpdate";
                break e;
            }
            Se = void 0;
          }
        else
          $a ? Ph(e, a) && (Se = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (Se = "onCompositionStart");
        Se && (jh && a.locale !== "ko" && ($a || Se !== "onCompositionStart" ? Se === "onCompositionEnd" && $a && (pe = Nh()) : (Or = X, Gu = "value" in Or ? Or.value : Or.textContent, $a = !0)), je = io(H, Se), 0 < je.length && (Se = new kh(
          Se,
          e,
          null,
          a,
          X
        ), W.push({ event: Se, listeners: je }), pe ? Se.data = pe : (pe = Ih(a), pe !== null && (Se.data = pe)))), (pe = s_ ? l_(e, a) : o_(e, a)) && (Se = io(H, "onBeforeInput"), 0 < Se.length && (je = new kh(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          X
        ), W.push({
          event: je,
          listeners: Se
        }), je.data = pe)), K_(
          W,
          e,
          H,
          a,
          X
        );
      }
      bg(W, n);
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
      var c = e, m = c.stateNode;
      if (c = c.tag, c !== 5 && c !== 26 && c !== 27 || m === null || (c = qi(e, a), c != null && l.unshift(
        Cs(e, c, m)
      ), c = qi(e, n), c != null && l.push(
        Cs(e, c, m)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function bi(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function xg(e, n, a, l, c) {
    for (var m = n._reactName, C = []; a !== null && a !== l; ) {
      var N = a, R = N.alternate, H = N.stateNode;
      if (N = N.tag, R !== null && R === l) break;
      N !== 5 && N !== 26 && N !== 27 || H === null || (R = H, c ? (H = qi(a, m), H != null && C.unshift(
        Cs(a, H, R)
      )) : c || (H = qi(a, m), H != null && C.push(
        Cs(a, H, R)
      ))), a = a.return;
    }
    C.length !== 0 && e.push({ event: n, listeners: C });
  }
  var nb = /\r\n?/g, rb = /\u0000|\uFFFD/g;
  function Eg(e) {
    return (typeof e == "string" ? e : "" + e).replace(nb, `
`).replace(rb, "");
  }
  function Cg(e, n) {
    return n = Eg(n), Eg(e) === n;
  }
  function so() {
  }
  function We(e, n, a, l, c, m) {
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
        Ah(e, l, m);
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
          typeof m == "function" && (a === "formAction" ? (n !== "input" && We(e, n, "name", c.name, c, null), We(
            e,
            n,
            "formEncType",
            c.formEncType,
            c,
            null
          ), We(
            e,
            n,
            "formMethod",
            c.formMethod,
            c,
            null
          ), We(
            e,
            n,
            "formTarget",
            c.formTarget,
            c,
            null
          )) : (We(e, n, "encType", c.encType, c, null), We(e, n, "method", c.method, c, null), We(e, n, "target", c.target, c, null)));
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
        l != null && Le("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Le("scrollend", e);
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
        Le("beforetoggle", e), Le("toggle", e), cl(e, "popover", l);
        break;
      case "xlinkActuate":
        rr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        rr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        rr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        rr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        rr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        rr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        rr(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        rr(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        rr(
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
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = R1.get(a) || a, cl(e, a, l));
    }
  }
  function wf(e, n, a, l, c, m) {
    switch (a) {
      case "style":
        Ah(e, l, m);
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
        l != null && Le("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Le("scrollend", e);
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
            if (a[0] === "o" && a[1] === "n" && (c = a.endsWith("Capture"), n = a.slice(2, c ? a.length - 7 : void 0), m = e[Xt] || null, m = m != null ? m[a] : null, typeof m == "function" && e.removeEventListener(n, m, c), typeof l == "function")) {
              typeof m != "function" && m !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(n, l, c);
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
        Le("error", e), Le("load", e);
        var l = !1, c = !1, m;
        for (m in a)
          if (a.hasOwnProperty(m)) {
            var C = a[m];
            if (C != null)
              switch (m) {
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
                  We(e, n, m, C, a, null);
              }
          }
        c && We(e, n, "srcSet", a.srcSet, a, null), l && We(e, n, "src", a.src, a, null);
        return;
      case "input":
        Le("invalid", e);
        var N = m = C = c = null, R = null, H = null;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var X = a[l];
            if (X != null)
              switch (l) {
                case "name":
                  c = X;
                  break;
                case "type":
                  C = X;
                  break;
                case "checked":
                  R = X;
                  break;
                case "defaultChecked":
                  H = X;
                  break;
                case "value":
                  m = X;
                  break;
                case "defaultValue":
                  N = X;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (X != null)
                    throw Error(s(137, n));
                  break;
                default:
                  We(e, n, l, X, a, null);
              }
          }
        xh(
          e,
          m,
          N,
          R,
          H,
          C,
          c,
          !1
        ), dl(e);
        return;
      case "select":
        Le("invalid", e), l = C = m = null;
        for (c in a)
          if (a.hasOwnProperty(c) && (N = a[c], N != null))
            switch (c) {
              case "value":
                m = N;
                break;
              case "defaultValue":
                C = N;
                break;
              case "multiple":
                l = N;
              default:
                We(e, n, c, N, a, null);
            }
        n = m, a = C, e.multiple = !!l, n != null ? Ga(e, !!l, n, !1) : a != null && Ga(e, !!l, a, !0);
        return;
      case "textarea":
        Le("invalid", e), m = c = l = null;
        for (C in a)
          if (a.hasOwnProperty(C) && (N = a[C], N != null))
            switch (C) {
              case "value":
                l = N;
                break;
              case "defaultValue":
                c = N;
                break;
              case "children":
                m = N;
                break;
              case "dangerouslySetInnerHTML":
                if (N != null) throw Error(s(91));
                break;
              default:
                We(e, n, C, N, a, null);
            }
        Ch(e, l, c, m), dl(e);
        return;
      case "option":
        for (R in a)
          if (a.hasOwnProperty(R) && (l = a[R], l != null))
            switch (R) {
              case "selected":
                e.selected = l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                We(e, n, R, l, a, null);
            }
        return;
      case "dialog":
        Le("beforetoggle", e), Le("toggle", e), Le("cancel", e), Le("close", e);
        break;
      case "iframe":
      case "object":
        Le("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Es.length; l++)
          Le(Es[l], e);
        break;
      case "image":
        Le("error", e), Le("load", e);
        break;
      case "details":
        Le("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Le("error", e), Le("load", e);
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
                We(e, n, H, l, a, null);
            }
        return;
      default:
        if (Uu(n)) {
          for (X in a)
            a.hasOwnProperty(X) && (l = a[X], l !== void 0 && wf(
              e,
              n,
              X,
              l,
              a,
              void 0
            ));
          return;
        }
    }
    for (N in a)
      a.hasOwnProperty(N) && (l = a[N], l != null && We(e, n, N, l, a, null));
  }
  function ab(e, n, a, l) {
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
        var c = null, m = null, C = null, N = null, R = null, H = null, X = null;
        for (F in a) {
          var W = a[F];
          if (a.hasOwnProperty(F) && W != null)
            switch (F) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                R = W;
              default:
                l.hasOwnProperty(F) || We(e, n, F, null, l, W);
            }
        }
        for (var Z in l) {
          var F = l[Z];
          if (W = a[Z], l.hasOwnProperty(Z) && (F != null || W != null))
            switch (Z) {
              case "type":
                m = F;
                break;
              case "name":
                c = F;
                break;
              case "checked":
                H = F;
                break;
              case "defaultChecked":
                X = F;
                break;
              case "value":
                C = F;
                break;
              case "defaultValue":
                N = F;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (F != null)
                  throw Error(s(137, n));
                break;
              default:
                F !== W && We(
                  e,
                  n,
                  Z,
                  F,
                  l,
                  W
                );
            }
        }
        Iu(
          e,
          C,
          N,
          R,
          H,
          X,
          m,
          c
        );
        return;
      case "select":
        F = C = N = Z = null;
        for (m in a)
          if (R = a[m], a.hasOwnProperty(m) && R != null)
            switch (m) {
              case "value":
                break;
              case "multiple":
                F = R;
              default:
                l.hasOwnProperty(m) || We(
                  e,
                  n,
                  m,
                  null,
                  l,
                  R
                );
            }
        for (c in l)
          if (m = l[c], R = a[c], l.hasOwnProperty(c) && (m != null || R != null))
            switch (c) {
              case "value":
                Z = m;
                break;
              case "defaultValue":
                N = m;
                break;
              case "multiple":
                C = m;
              default:
                m !== R && We(
                  e,
                  n,
                  c,
                  m,
                  l,
                  R
                );
            }
        n = N, a = C, l = F, Z != null ? Ga(e, !!a, Z, !1) : !!l != !!a && (n != null ? Ga(e, !!a, n, !0) : Ga(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        F = Z = null;
        for (N in a)
          if (c = a[N], a.hasOwnProperty(N) && c != null && !l.hasOwnProperty(N))
            switch (N) {
              case "value":
                break;
              case "children":
                break;
              default:
                We(e, n, N, null, l, c);
            }
        for (C in l)
          if (c = l[C], m = a[C], l.hasOwnProperty(C) && (c != null || m != null))
            switch (C) {
              case "value":
                Z = c;
                break;
              case "defaultValue":
                F = c;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(s(91));
                break;
              default:
                c !== m && We(e, n, C, c, l, m);
            }
        Eh(e, Z, F);
        return;
      case "option":
        for (var Ee in a)
          if (Z = a[Ee], a.hasOwnProperty(Ee) && Z != null && !l.hasOwnProperty(Ee))
            switch (Ee) {
              case "selected":
                e.selected = !1;
                break;
              default:
                We(
                  e,
                  n,
                  Ee,
                  null,
                  l,
                  Z
                );
            }
        for (R in l)
          if (Z = l[R], F = a[R], l.hasOwnProperty(R) && Z !== F && (Z != null || F != null))
            switch (R) {
              case "selected":
                e.selected = Z && typeof Z != "function" && typeof Z != "symbol";
                break;
              default:
                We(
                  e,
                  n,
                  R,
                  Z,
                  l,
                  F
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
          Z = a[be], a.hasOwnProperty(be) && Z != null && !l.hasOwnProperty(be) && We(e, n, be, null, l, Z);
        for (H in l)
          if (Z = l[H], F = a[H], l.hasOwnProperty(H) && Z !== F && (Z != null || F != null))
            switch (H) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (Z != null)
                  throw Error(s(137, n));
                break;
              default:
                We(
                  e,
                  n,
                  H,
                  Z,
                  l,
                  F
                );
            }
        return;
      default:
        if (Uu(n)) {
          for (var et in a)
            Z = a[et], a.hasOwnProperty(et) && Z !== void 0 && !l.hasOwnProperty(et) && wf(
              e,
              n,
              et,
              void 0,
              l,
              Z
            );
          for (X in l)
            Z = l[X], F = a[X], !l.hasOwnProperty(X) || Z === F || Z === void 0 && F === void 0 || wf(
              e,
              n,
              X,
              Z,
              l,
              F
            );
          return;
        }
    }
    for (var L in a)
      Z = a[L], a.hasOwnProperty(L) && Z != null && !l.hasOwnProperty(L) && We(e, n, L, null, l, Z);
    for (W in l)
      Z = l[W], F = a[W], !l.hasOwnProperty(W) || Z === F || Z == null && F == null || We(e, n, W, Z, l, F);
  }
  var Af = null, Tf = null;
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
  function Of(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Nf = null;
  function ib() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Nf ? !1 : (Nf = e, !0) : (Nf = null, !1);
  }
  var Tg = typeof setTimeout == "function" ? setTimeout : void 0, sb = typeof clearTimeout == "function" ? clearTimeout : void 0, Og = typeof Promise == "function" ? Promise : void 0, lb = typeof queueMicrotask == "function" ? queueMicrotask : typeof Og < "u" ? function(e) {
    return Og.resolve(null).then(e).catch(ob);
  } : Tg;
  function ob(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Fr(e) {
    return e === "head";
  }
  function Ng(e, n) {
    var a = n, l = 0, c = 0;
    do {
      var m = a.nextSibling;
      if (e.removeChild(a), m && m.nodeType === 8)
        if (a = m.data, a === "/$") {
          if (0 < l && 8 > l) {
            a = l;
            var C = e.ownerDocument;
            if (a & 1 && ws(C.documentElement), a & 2 && ws(C.body), a & 4)
              for (a = C.head, ws(a), C = a.firstChild; C; ) {
                var N = C.nextSibling, R = C.nodeName;
                C[Ui] || R === "SCRIPT" || R === "STYLE" || R === "LINK" && C.rel.toLowerCase() === "stylesheet" || a.removeChild(C), C = N;
              }
          }
          if (c === 0) {
            e.removeChild(m), Rs(n);
            return;
          }
          c--;
        } else
          a === "$" || a === "$?" || a === "$!" ? c++ : l = a.charCodeAt(0) - 48;
      else l = 0;
      a = m;
    } while (a);
    Rs(n);
  }
  function Df(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var a = n;
      switch (n = n.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Df(a), ju(a);
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
  function ub(e, n, a, l) {
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
              if (m = e.getAttribute("rel"), m === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (m !== c.rel || e.getAttribute("href") !== (c.href == null || c.href === "" ? null : c.href) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin) || e.getAttribute("title") !== (c.title == null ? null : c.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (m = e.getAttribute("src"), (m !== (c.src == null ? null : c.src) || e.getAttribute("type") !== (c.type == null ? null : c.type) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin)) && m && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (n === "input" && e.type === "hidden") {
        var m = c.name == null ? null : "" + c.name;
        if (c.type === "hidden" && e.getAttribute("name") === m)
          return e;
      } else return e;
      if (e = Pn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function cb(e, n, a) {
    if (n === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Pn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Mf(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function fb(e, n) {
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
  var kf = null;
  function Dg(e) {
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
    ju(e);
  }
  var Nn = /* @__PURE__ */ new Map(), kg = /* @__PURE__ */ new Set();
  function oo(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var vr = ne.d;
  ne.d = {
    f: db,
    r: hb,
    D: pb,
    C: mb,
    L: gb,
    m: vb,
    X: _b,
    S: yb,
    M: bb
  };
  function db() {
    var e = vr.f(), n = Wl();
    return e || n;
  }
  function hb(e) {
    var n = Ha(e);
    n !== null && n.tag === 5 && n.type === "form" ? Kp(n) : vr.r(e);
  }
  var Si = typeof document > "u" ? null : document;
  function Rg(e, n, a) {
    var l = Si;
    if (l && typeof n == "string" && n) {
      var c = xn(n);
      c = 'link[rel="' + e + '"][href="' + c + '"]', typeof a == "string" && (c += '[crossorigin="' + a + '"]'), kg.has(c) || (kg.add(c), e = { rel: e, crossOrigin: a, href: n }, l.querySelector(c) === null && (n = l.createElement("link"), jt(n, "link", e), Ot(n), l.head.appendChild(n)));
    }
  }
  function pb(e) {
    vr.D(e), Rg("dns-prefetch", e, null);
  }
  function mb(e, n) {
    vr.C(e, n), Rg("preconnect", e, n);
  }
  function gb(e, n, a) {
    vr.L(e, n, a);
    var l = Si;
    if (l && e && n) {
      var c = 'link[rel="preload"][as="' + xn(n) + '"]';
      n === "image" && a && a.imageSrcSet ? (c += '[imagesrcset="' + xn(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (c += '[imagesizes="' + xn(
        a.imageSizes
      ) + '"]')) : c += '[href="' + xn(e) + '"]';
      var m = c;
      switch (n) {
        case "style":
          m = xi(e);
          break;
        case "script":
          m = Ei(e);
      }
      Nn.has(m) || (e = y(
        {
          rel: "preload",
          href: n === "image" && a && a.imageSrcSet ? void 0 : e,
          as: n
        },
        a
      ), Nn.set(m, e), l.querySelector(c) !== null || n === "style" && l.querySelector(As(m)) || n === "script" && l.querySelector(Ts(m)) || (n = l.createElement("link"), jt(n, "link", e), Ot(n), l.head.appendChild(n)));
    }
  }
  function vb(e, n) {
    vr.m(e, n);
    var a = Si;
    if (a && e) {
      var l = n && typeof n.as == "string" ? n.as : "script", c = 'link[rel="modulepreload"][as="' + xn(l) + '"][href="' + xn(e) + '"]', m = c;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          m = Ei(e);
      }
      if (!Nn.has(m) && (e = y({ rel: "modulepreload", href: e }, n), Nn.set(m, e), a.querySelector(c) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Ts(m)))
              return;
        }
        l = a.createElement("link"), jt(l, "link", e), Ot(l), a.head.appendChild(l);
      }
    }
  }
  function yb(e, n, a) {
    vr.S(e, n, a);
    var l = Si;
    if (l && e) {
      var c = qa(l).hoistableStyles, m = xi(e);
      n = n || "default";
      var C = c.get(m);
      if (!C) {
        var N = { loading: 0, preload: null };
        if (C = l.querySelector(
          As(m)
        ))
          N.loading = 5;
        else {
          e = y(
            { rel: "stylesheet", href: e, "data-precedence": n },
            a
          ), (a = Nn.get(m)) && Rf(e, a);
          var R = C = l.createElement("link");
          Ot(R), jt(R, "link", e), R._p = new Promise(function(H, X) {
            R.onload = H, R.onerror = X;
          }), R.addEventListener("load", function() {
            N.loading |= 1;
          }), R.addEventListener("error", function() {
            N.loading |= 2;
          }), N.loading |= 4, uo(C, n, l);
        }
        C = {
          type: "stylesheet",
          instance: C,
          count: 1,
          state: N
        }, c.set(m, C);
      }
    }
  }
  function _b(e, n) {
    vr.X(e, n);
    var a = Si;
    if (a && e) {
      var l = qa(a).hoistableScripts, c = Ei(e), m = l.get(c);
      m || (m = a.querySelector(Ts(c)), m || (e = y({ src: e, async: !0 }, n), (n = Nn.get(c)) && jf(e, n), m = a.createElement("script"), Ot(m), jt(m, "link", e), a.head.appendChild(m)), m = {
        type: "script",
        instance: m,
        count: 1,
        state: null
      }, l.set(c, m));
    }
  }
  function bb(e, n) {
    vr.M(e, n);
    var a = Si;
    if (a && e) {
      var l = qa(a).hoistableScripts, c = Ei(e), m = l.get(c);
      m || (m = a.querySelector(Ts(c)), m || (e = y({ src: e, async: !0, type: "module" }, n), (n = Nn.get(c)) && jf(e, n), m = a.createElement("script"), Ot(m), jt(m, "link", e), a.head.appendChild(m)), m = {
        type: "script",
        instance: m,
        count: 1,
        state: null
      }, l.set(c, m));
    }
  }
  function jg(e, n, a, l) {
    var c = (c = Y.current) ? oo(c) : null;
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
          var m = qa(
            c
          ).hoistableStyles, C = m.get(e);
          if (C || (c = c.ownerDocument || c, C = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, m.set(e, C), (m = c.querySelector(
            As(e)
          )) && !m._p && (C.instance = m, C.state.loading = 5), Nn.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, Nn.set(e, a), m || Sb(
            c,
            e,
            a,
            C.state
          ))), n && l === null)
            throw Error(s(528, ""));
          return C;
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
    return y({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Sb(e, n, a, l) {
    e.querySelector('link[rel="preload"][as="style"][' + n + "]") ? l.loading = 1 : (n = e.createElement("link"), l.preload = n, n.addEventListener("load", function() {
      return l.loading |= 1;
    }), n.addEventListener("error", function() {
      return l.loading |= 2;
    }), jt(n, "link", a), Ot(n), e.head.appendChild(n));
  }
  function Ei(e) {
    return '[src="' + xn(e) + '"]';
  }
  function Ts(e) {
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
            return n.instance = l, Ot(l), l;
          var c = y({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), Ot(l), jt(l, "style", c), uo(l, a.precedence, e), n.instance = l;
        case "stylesheet":
          c = xi(a.href);
          var m = e.querySelector(
            As(c)
          );
          if (m)
            return n.state.loading |= 4, n.instance = m, Ot(m), m;
          l = zg(a), (c = Nn.get(c)) && Rf(l, c), m = (e.ownerDocument || e).createElement("link"), Ot(m);
          var C = m;
          return C._p = new Promise(function(N, R) {
            C.onload = N, C.onerror = R;
          }), jt(m, "link", l), n.state.loading |= 4, uo(m, a.precedence, e), n.instance = m;
        case "script":
          return m = Ei(a.src), (c = e.querySelector(
            Ts(m)
          )) ? (n.instance = c, Ot(c), c) : (l = a, (c = Nn.get(m)) && (l = y({}, a), jf(l, c)), e = e.ownerDocument || e, c = e.createElement("script"), Ot(c), jt(c, "link", l), e.head.appendChild(c), n.instance = c);
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
    ), c = l.length ? l[l.length - 1] : null, m = c, C = 0; C < l.length; C++) {
      var N = l[C];
      if (N.dataset.precedence === n) m = N;
      else if (m !== c) break;
    }
    m ? m.parentNode.insertBefore(e, m.nextSibling) : (n = a.nodeType === 9 ? a.head : a, n.insertBefore(e, n.firstChild));
  }
  function Rf(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.title == null && (e.title = n.title);
  }
  function jf(e, n) {
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
      var m = a[c];
      if (!(m[Ui] || m[It] || e === "link" && m.getAttribute("rel") === "stylesheet") && m.namespaceURI !== "http://www.w3.org/2000/svg") {
        var C = m.getAttribute(n) || "";
        C = e + C;
        var N = l.get(C);
        N ? N.push(m) : l.set(C, [m]);
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
  function xb(e, n, a) {
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
  var Os = null;
  function Eb() {
  }
  function Cb(e, n, a) {
    if (Os === null) throw Error(s(475));
    var l = Os;
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var c = xi(a.href), m = e.querySelector(
          As(c)
        );
        if (m) {
          e = m._p, e !== null && typeof e == "object" && typeof e.then == "function" && (l.count++, l = fo.bind(l), e.then(l, l)), n.state.loading |= 4, n.instance = m, Ot(m);
          return;
        }
        m = e.ownerDocument || e, a = zg(a), (c = Nn.get(c)) && Rf(a, c), m = m.createElement("link"), Ot(m);
        var C = m;
        C._p = new Promise(function(N, R) {
          C.onload = N, C.onerror = R;
        }), jt(m, "link", a), n.instance = m;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (l.count++, n = fo.bind(l), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  function wb() {
    if (Os === null) throw Error(s(475));
    var e = Os;
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
    e.stylesheets = null, e.unsuspend !== null && (e.count++, ho = /* @__PURE__ */ new Map(), n.forEach(Ab, e), ho = null, fo.call(e));
  }
  function Ab(e, n) {
    if (!(n.state.loading & 4)) {
      var a = ho.get(e);
      if (a) var l = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), ho.set(e, a);
        for (var c = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), m = 0; m < c.length; m++) {
          var C = c[m];
          (C.nodeName === "LINK" || C.getAttribute("media") !== "not all") && (a.set(C.dataset.precedence, C), l = C);
        }
        l && a.set(null, l);
      }
      c = n.instance, C = c.getAttribute("data-precedence"), m = a.get(C) || l, m === l && a.set(null, c), a.set(C, c), this.count++, l = fo.bind(this), c.addEventListener("load", l), c.addEventListener("error", l), m ? m.parentNode.insertBefore(c, m.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(c, e.firstChild)), n.state.loading |= 4;
    }
  }
  var Ns = {
    $$typeof: D,
    Provider: null,
    Consumer: null,
    _currentValue: ce,
    _currentValue2: ce,
    _threadCount: 0
  };
  function Tb(e, n, a, l, c, m, C, N) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Du(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Du(0), this.hiddenUpdates = Du(null), this.identifierPrefix = l, this.onUncaughtError = c, this.onCaughtError = m, this.onRecoverableError = C, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = N, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Ug(e, n, a, l, c, m, C, N, R, H, X, W) {
    return e = new Tb(
      e,
      n,
      a,
      C,
      N,
      R,
      H,
      W
    ), n = 1, m === !0 && (n |= 24), m = sn(3, null, null, n), e.current = m, m.stateNode = e, n = mc(), n.refCount++, e.pooledCache = n, n.refCount++, m.memoizedState = {
      element: l,
      isDehydrated: a,
      cache: n
    }, _c(m), e;
  }
  function Hg(e) {
    return e ? (e = ei, e) : ei;
  }
  function qg(e, n, a, l, c, m) {
    c = Hg(c), l.context === null ? l.context = c : l.pendingContext = c, l = Mr(n), l.payload = { element: a }, m = m === void 0 ? null : m, m !== null && (l.callback = m), a = kr(e, l, n), a !== null && (fn(a, e, n), is(a, e, n));
  }
  function Zg(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < n ? a : n;
    }
  }
  function Lf(e, n) {
    Zg(e, n), (e = e.alternate) && Zg(e, n);
  }
  function Fg(e) {
    if (e.tag === 13) {
      var n = Wa(e, 67108864);
      n !== null && fn(n, e, 67108864), Lf(e, 67108864);
    }
  }
  var po = !0;
  function Ob(e, n, a, l) {
    var c = U.T;
    U.T = null;
    var m = ne.p;
    try {
      ne.p = 2, Pf(e, n, a, l);
    } finally {
      ne.p = m, U.T = c;
    }
  }
  function Nb(e, n, a, l) {
    var c = U.T;
    U.T = null;
    var m = ne.p;
    try {
      ne.p = 8, Pf(e, n, a, l);
    } finally {
      ne.p = m, U.T = c;
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
      else if (Mb(
        c,
        e,
        n,
        a,
        l
      ))
        l.stopPropagation();
      else if (Vg(e, l), n & 4 && -1 < Db.indexOf(e)) {
        for (; c !== null; ) {
          var m = Ha(c);
          if (m !== null)
            switch (m.tag) {
              case 3:
                if (m = m.stateNode, m.current.memoizedState.isDehydrated) {
                  var C = bn(m.pendingLanes);
                  if (C !== 0) {
                    var N = m;
                    for (N.pendingLanes |= 2, N.entangledLanes |= 2; C; ) {
                      var R = 1 << 31 - qt(C);
                      N.entanglements[1] |= R, C &= ~R;
                    }
                    $n(m), ($e & 6) === 0 && (Jl = Ze() + 500, xs(0));
                  }
                }
                break;
              case 13:
                N = Wa(m, 2), N !== null && fn(N, m, 2), Wl(), Lf(m, 2);
            }
          if (m = If(l), m === null && Cf(
            e,
            n,
            l,
            mo,
            a
          ), m === c) break;
          c = m;
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
        switch (qe()) {
          case Je:
            return 2;
          case ue:
            return 8;
          case fe:
          case Ye:
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
  var Uf = !1, Gr = null, Vr = null, Yr = null, Ds = /* @__PURE__ */ new Map(), Ms = /* @__PURE__ */ new Map(), Xr = [], Db = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
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
        Ds.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ms.delete(n.pointerId);
    }
  }
  function ks(e, n, a, l, c, m) {
    return e === null || e.nativeEvent !== m ? (e = {
      blockedOn: n,
      domEventName: a,
      eventSystemFlags: l,
      nativeEvent: m,
      targetContainers: [c]
    }, n !== null && (n = Ha(n), n !== null && Fg(n)), e) : (e.eventSystemFlags |= l, n = e.targetContainers, c !== null && n.indexOf(c) === -1 && n.push(c), e);
  }
  function Mb(e, n, a, l, c) {
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
        var m = c.pointerId;
        return Ds.set(
          m,
          ks(
            Ds.get(m) || null,
            e,
            n,
            a,
            l,
            c
          )
        ), !0;
      case "gotpointercapture":
        return m = c.pointerId, Ms.set(
          m,
          ks(
            Ms.get(m) || null,
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
            e.blockedOn = n, C1(e.priority, function() {
              if (a.tag === 13) {
                var l = cn();
                l = Mu(l);
                var c = Wa(a, l);
                c !== null && fn(c, a, l), Lf(a, l);
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
        return n = Ha(a), n !== null && Fg(n), e.blockedOn = a, !1;
      n.shift();
    }
    return !0;
  }
  function Xg(e, n, a) {
    go(e) && a.delete(n);
  }
  function kb() {
    Uf = !1, Gr !== null && go(Gr) && (Gr = null), Vr !== null && go(Vr) && (Vr = null), Yr !== null && go(Yr) && (Yr = null), Ds.forEach(Xg), Ms.forEach(Xg);
  }
  function vo(e, n) {
    e.blockedOn === n && (e.blockedOn = null, Uf || (Uf = !0, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      kb
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
          var m = Ha(a);
          m !== null && (e.splice(n, 3), n -= 3, Ic(
            m,
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
  function Rs(e) {
    function n(R) {
      return vo(R, e);
    }
    Gr !== null && vo(Gr, e), Vr !== null && vo(Vr, e), Yr !== null && vo(Yr, e), Ds.forEach(n), Ms.forEach(n);
    for (var a = 0; a < Xr.length; a++) {
      var l = Xr[a];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Xr.length && (a = Xr[0], a.blockedOn === null); )
      Yg(a), a.blockedOn === null && Xr.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (l = 0; l < a.length; l += 3) {
        var c = a[l], m = a[l + 1], C = c[Xt] || null;
        if (typeof m == "function")
          C || $g(a);
        else if (C) {
          var N = null;
          if (m && m.hasAttribute("formAction")) {
            if (c = m, C = m[Xt] || null)
              N = C.formAction;
            else if (Bf(c) !== null) continue;
          } else N = C.action;
          typeof N == "function" ? a[l + 1] = N : (a.splice(l, 3), l -= 3), $g(a);
        }
      }
  }
  function Hf(e) {
    this._internalRoot = e;
  }
  _o.prototype.render = Hf.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(s(409));
    var a = n.current, l = cn();
    qg(a, l, e, n, null, null);
  }, _o.prototype.unmount = Hf.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      qg(e.current, 2, null, e, null, null), Wl(), n[Ba] = null;
    }
  };
  function _o(e) {
    this._internalRoot = e;
  }
  _o.prototype.unstable_scheduleHydration = function(e) {
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
  ne.findDOMNode = function(e) {
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = h(n), e = e !== null ? g(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Rb = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: U,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var bo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!bo.isDisabled && bo.supportsFiber)
      try {
        tr = bo.inject(
          Rb
        ), mt = bo;
      } catch {
      }
  }
  return Ps.createRoot = function(e, n) {
    if (!o(e)) throw Error(s(299));
    var a = !1, l = "", c = dm, m = hm, C = pm, N = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onUncaughtError !== void 0 && (c = n.onUncaughtError), n.onCaughtError !== void 0 && (m = n.onCaughtError), n.onRecoverableError !== void 0 && (C = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (N = n.unstable_transitionCallbacks)), n = Ug(
      e,
      1,
      !1,
      null,
      null,
      a,
      l,
      c,
      m,
      C,
      N,
      null
    ), e[Ba] = n.current, Ef(e), new Hf(n);
  }, Ps.hydrateRoot = function(e, n, a) {
    if (!o(e)) throw Error(s(299));
    var l = !1, c = "", m = dm, C = hm, N = pm, R = null, H = null;
    return a != null && (a.unstable_strictMode === !0 && (l = !0), a.identifierPrefix !== void 0 && (c = a.identifierPrefix), a.onUncaughtError !== void 0 && (m = a.onUncaughtError), a.onCaughtError !== void 0 && (C = a.onCaughtError), a.onRecoverableError !== void 0 && (N = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (R = a.unstable_transitionCallbacks), a.formState !== void 0 && (H = a.formState)), n = Ug(
      e,
      1,
      !0,
      n,
      a ?? null,
      l,
      c,
      m,
      C,
      N,
      R,
      H
    ), n.context = Hg(null), a = n.current, l = cn(), l = Mu(l), c = Mr(l), c.callback = null, kr(a, c, l), a = l, n.current.lanes = a, Bi(n, a), $n(n), e[Ba] = n.current, Ef(e), new _o(n);
  }, Ps.version = "19.1.1", Ps;
}
var fv;
function u2() {
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
  return t(), Gf.exports = o2(), Gf.exports;
}
var c2 = u2();
const dv = /* @__PURE__ */ Gd(c2);
var f2 = Object.defineProperty, d2 = (t, r, i) => r in t ? f2(t, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[r] = i, h2 = (t, r, i) => d2(t, r + "", i);
class e0 extends Error {
  constructor(r, i) {
    super(r), h2(this, "data"), this.data = i;
  }
  toString() {
    return this.message;
  }
}
async function p2(t, r) {
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
    throw new e0(u.statusText, u);
  await i.getCharacters();
}
async function m2(t, r) {
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
    throw new e0(f.message || `Request failed with status ${u.status}`, u);
  }
  await s.getCharacters();
}
var g2 = Object.defineProperty, v2 = (t, r, i) => r in t ? g2(t, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[r] = i, hv = (t, r, i) => v2(t, typeof r != "symbol" ? r + "" : r, i);
class t0 {
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
      let h = function(g, y) {
        let b = !1;
        for (const _ of Object.keys(y))
          g[_] === void 0 ? (g[_] = y[_], b = !0) : typeof y[_] == "object" && y[_] !== null && (g[_] = g[_] || {}, h(g[_], y[_]) && (b = !0));
        return b;
      };
      s && u.version !== s && (p.version.changed = !0, p.version.new = s, u.version = s), o && o !== "*" && u.formatVersion !== o && (p.formatVersion.changed = !0, p.formatVersion.new = o, u.formatVersion = o), (h(u, this.defaultSettings) || p.version.changed || p.formatVersion.changed) && this.saveSettings();
    } else if (Array.isArray(i)) {
      s && !u.version && (u.version = s, p.version.changed = !0, p.version.new = s), o && !u.formatVersion && (u.formatVersion = o, p.formatVersion.changed = !0, p.formatVersion.new = o);
      let h = structuredClone(u), g = u.formatVersion;
      try {
        let y;
        do {
          y = !1;
          let b = i.find((_) => _.from === g);
          if (b && b.to > g)
            h = await b.action(h), g = b.to, h.formatVersion = b.to, y = !0;
          else
            for (const _ of i)
              if (_.from === "*" && _.to > g && g !== _.to) {
                h = await _.action(h), g = _.to, h.formatVersion = _.to, y = !0;
                break;
              }
        } while (y);
        if (g !== u.formatVersion) {
          p.formatVersion.changed = !0, p.formatVersion.new = g;
          const b = this.defaultSettings.version;
          b && (h.version = b);
        }
        if (p.formatVersion.changed) {
          for (const b of Object.keys(u))
            delete u[b];
          Object.assign(u, h), this.saveSettings();
        }
      } catch (y) {
        throw console.error("Failed to apply version changes:", y), new Error(`Version migration failed: ${y instanceof Error ? y.message : y}`, {
          cause: y
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
function Er(t) {
  return Array.isArray ? Array.isArray(t) : a0(t) === "[object Array]";
}
function y2(t) {
  if (typeof t == "string")
    return t;
  let r = t + "";
  return r == "0" && 1 / t == -1 / 0 ? "-0" : r;
}
function _2(t) {
  return t == null ? "" : y2(t);
}
function Kn(t) {
  return typeof t == "string";
}
function n0(t) {
  return typeof t == "number";
}
function b2(t) {
  return t === !0 || t === !1 || S2(t) && a0(t) == "[object Boolean]";
}
function r0(t) {
  return typeof t == "object";
}
function S2(t) {
  return r0(t) && t !== null;
}
function mn(t) {
  return t != null;
}
function $f(t) {
  return !t.trim().length;
}
function a0(t) {
  return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
}
const x2 = "Incorrect 'index' type", E2 = (t) => `Invalid value for key ${t}`, C2 = (t) => `Pattern length exceeds max of ${t}.`, w2 = (t) => `Missing ${t} property in key`, A2 = (t) => `Property 'weight' in key '${t}' must be a positive integer`, pv = Object.prototype.hasOwnProperty;
class T2 {
  constructor(r) {
    this._keys = [], this._keyMap = {};
    let i = 0;
    r.forEach((s) => {
      let o = i0(s);
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
function i0(t) {
  let r = null, i = null, s = null, o = 1, u = null;
  if (Kn(t) || Er(t))
    s = t, r = mv(t), i = bd(t);
  else {
    if (!pv.call(t, "name"))
      throw new Error(w2("name"));
    const f = t.name;
    if (s = f, pv.call(t, "weight") && (o = t.weight, o <= 0))
      throw new Error(A2(f));
    r = mv(f), i = bd(f), u = t.getFn;
  }
  return { path: r, id: i, weight: o, src: s, getFn: u };
}
function mv(t) {
  return Er(t) ? t : t.split(".");
}
function bd(t) {
  return Er(t) ? t.join(".") : t;
}
function O2(t, r) {
  let i = [], s = !1;
  const o = (u, f, p) => {
    if (mn(u))
      if (!f[p])
        i.push(u);
      else {
        let h = f[p];
        const g = u[h];
        if (!mn(g))
          return;
        if (p === f.length - 1 && (Kn(g) || n0(g) || b2(g)))
          i.push(_2(g));
        else if (Er(g)) {
          s = !0;
          for (let y = 0, b = g.length; y < b; y += 1)
            o(g[y], f, p + 1);
        } else f.length && o(g, f, p + 1);
      }
  };
  return o(t, Kn(r) ? r.split(".") : r, 0), s ? i : i[0];
}
const N2 = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: !1,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: !1,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
}, D2 = {
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
}, M2 = {
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
}, k2 = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: !1,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: O2,
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
  ...D2,
  ...N2,
  ...M2,
  ...k2
};
const R2 = /[^ ]+/g;
function j2(t = 1, r = 3) {
  const i = /* @__PURE__ */ new Map(), s = Math.pow(10, r);
  return {
    get(o) {
      const u = o.match(R2).length;
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
    this.norm = j2(i, 3), this.getFn = r, this.isCreated = !1, this.setIndexRecords();
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
    this.isCreated || !this.docs.length || (this.isCreated = !0, Kn(this.docs[0]) ? this.docs.forEach((r, i) => {
      this._addString(r, i);
    }) : this.docs.forEach((r, i) => {
      this._addObject(r, i);
    }), this.norm.clear());
  }
  // Adds a doc to the end of the index
  add(r) {
    const i = this.size();
    Kn(r) ? this._addString(r, i) : this._addObject(r, i);
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
    if (!mn(r) || $f(r))
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
      if (mn(f)) {
        if (Er(f)) {
          let p = [];
          const h = [{ nestedArrIndex: -1, value: f }];
          for (; h.length; ) {
            const { nestedArrIndex: g, value: y } = h.pop();
            if (mn(y))
              if (Kn(y) && !$f(y)) {
                let b = {
                  v: y,
                  i: g,
                  n: this.norm.get(y)
                };
                p.push(b);
              } else Er(y) && y.forEach((b, _) => {
                h.push({
                  nestedArrIndex: _,
                  value: b
                });
              });
          }
          s.$[u] = p;
        } else if (Kn(f) && !$f(f)) {
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
function s0(t, r, { getFn: i = Ae.getFn, fieldNormWeight: s = Ae.fieldNormWeight } = {}) {
  const o = new Yd({ getFn: i, fieldNormWeight: s });
  return o.setKeys(t.map(i0)), o.setSources(r), o.create(), o;
}
function z2(t, { getFn: r = Ae.getFn, fieldNormWeight: i = Ae.fieldNormWeight } = {}) {
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
function L2(t = [], r = Ae.minMatchCharLength) {
  let i = [], s = -1, o = -1, u = 0;
  for (let f = t.length; u < f; u += 1) {
    let p = t[u];
    p && s === -1 ? s = u : !p && s !== -1 && (o = u - 1, o - s + 1 >= r && i.push([s, o]), s = -1);
  }
  return t[u - 1] && u - s >= r && i.push([s, u - 1]), i;
}
const Da = 32;
function P2(t, r, i, {
  location: s = Ae.location,
  distance: o = Ae.distance,
  threshold: u = Ae.threshold,
  findAllMatches: f = Ae.findAllMatches,
  minMatchCharLength: p = Ae.minMatchCharLength,
  includeMatches: h = Ae.includeMatches,
  ignoreLocation: g = Ae.ignoreLocation
} = {}) {
  if (r.length > Da)
    throw new Error(C2(Da));
  const y = r.length, b = t.length, _ = Math.max(0, Math.min(s, b));
  let v = u, d = _;
  const S = p > 1 || h, x = S ? Array(b) : [];
  let O;
  for (; (O = t.indexOf(r, d)) > -1; ) {
    let k = So(r, {
      currentLocation: O,
      expectedLocation: _,
      distance: o,
      ignoreLocation: g
    });
    if (v = Math.min(k, v), d = O + y, S) {
      let q = 0;
      for (; q < y; )
        x[O + q] = 1, q += 1;
    }
  }
  d = -1;
  let A = [], D = 1, E = y + b;
  const T = 1 << y - 1;
  for (let k = 0; k < y; k += 1) {
    let q = 0, G = E;
    for (; q < G; )
      So(r, {
        errors: k,
        currentLocation: _ + G,
        expectedLocation: _,
        distance: o,
        ignoreLocation: g
      }) <= v ? q = G : E = G, G = Math.floor((E - q) / 2 + q);
    E = G;
    let B = Math.max(1, _ - G + 1), V = f ? b : Math.min(_ + G, b) + y, $ = Array(V + 2);
    $[V + 1] = (1 << k) - 1;
    for (let he = V; he >= B; he -= 1) {
      let ge = he - 1, U = i[t.charAt(ge)];
      if (S && (x[ge] = +!!U), $[he] = ($[he + 1] << 1 | 1) & U, k && ($[he] |= (A[he + 1] | A[he]) << 1 | 1 | A[he + 1]), $[he] & T && (D = So(r, {
        errors: k,
        currentLocation: ge,
        expectedLocation: _,
        distance: o,
        ignoreLocation: g
      }), D <= v)) {
        if (v = D, d = ge, d <= _)
          break;
        B = Math.max(1, 2 * _ - d);
      }
    }
    if (So(r, {
      errors: k + 1,
      currentLocation: _,
      expectedLocation: _,
      distance: o,
      ignoreLocation: g
    }) > v)
      break;
    A = $;
  }
  const M = {
    isMatch: d >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, D)
  };
  if (S) {
    const k = L2(x, p);
    k.length ? h && (M.indices = k) : M.isMatch = !1;
  }
  return M;
}
function I2(t) {
  let r = {};
  for (let i = 0, s = t.length; i < s; i += 1) {
    const o = t.charAt(i);
    r[o] = (r[o] || 0) | 1 << s - i - 1;
  }
  return r;
}
const fu = String.prototype.normalize ? ((t) => t.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((t) => t);
class l0 {
  constructor(r, {
    location: i = Ae.location,
    threshold: s = Ae.threshold,
    distance: o = Ae.distance,
    includeMatches: u = Ae.includeMatches,
    findAllMatches: f = Ae.findAllMatches,
    minMatchCharLength: p = Ae.minMatchCharLength,
    isCaseSensitive: h = Ae.isCaseSensitive,
    ignoreDiacritics: g = Ae.ignoreDiacritics,
    ignoreLocation: y = Ae.ignoreLocation
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
      ignoreLocation: y
    }, r = h ? r : r.toLowerCase(), r = g ? fu(r) : r, this.pattern = r, this.chunks = [], !this.pattern.length)
      return;
    const b = (v, d) => {
      this.chunks.push({
        pattern: v,
        alphabet: I2(v),
        startIndex: d
      });
    }, _ = this.pattern.length;
    if (_ > Da) {
      let v = 0;
      const d = _ % Da, S = _ - d;
      for (; v < S; )
        b(this.pattern.substr(v, Da), v), v += Da;
      if (d) {
        const x = _ - Da;
        b(this.pattern.substr(x), x);
      }
    } else
      b(this.pattern, 0);
  }
  searchIn(r) {
    const { isCaseSensitive: i, ignoreDiacritics: s, includeMatches: o } = this.options;
    if (r = i ? r : r.toLowerCase(), r = s ? fu(r) : r, this.pattern === r) {
      let S = {
        isMatch: !0,
        score: 0
      };
      return o && (S.indices = [[0, r.length - 1]]), S;
    }
    const {
      location: u,
      distance: f,
      threshold: p,
      findAllMatches: h,
      minMatchCharLength: g,
      ignoreLocation: y
    } = this.options;
    let b = [], _ = 0, v = !1;
    this.chunks.forEach(({ pattern: S, alphabet: x, startIndex: O }) => {
      const { isMatch: A, score: D, indices: E } = P2(r, S, x, {
        location: u + O,
        distance: f,
        threshold: p,
        findAllMatches: h,
        minMatchCharLength: g,
        includeMatches: o,
        ignoreLocation: y
      });
      A && (v = !0), _ += D, A && E && (b = [...b, ...E]);
    });
    let d = {
      isMatch: v,
      score: v ? _ / this.chunks.length : 1
    };
    return v && o && (d.indices = b), d;
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
class B2 extends na {
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
class U2 extends na {
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
class H2 extends na {
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
class q2 extends na {
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
class Z2 extends na {
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
class F2 extends na {
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
class o0 extends na {
  constructor(r, {
    location: i = Ae.location,
    threshold: s = Ae.threshold,
    distance: o = Ae.distance,
    includeMatches: u = Ae.includeMatches,
    findAllMatches: f = Ae.findAllMatches,
    minMatchCharLength: p = Ae.minMatchCharLength,
    isCaseSensitive: h = Ae.isCaseSensitive,
    ignoreDiacritics: g = Ae.ignoreDiacritics,
    ignoreLocation: y = Ae.ignoreLocation
  } = {}) {
    super(r), this._bitapSearch = new l0(r, {
      location: i,
      threshold: s,
      distance: o,
      includeMatches: u,
      findAllMatches: f,
      minMatchCharLength: p,
      isCaseSensitive: h,
      ignoreDiacritics: g,
      ignoreLocation: y
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
class u0 extends na {
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
  B2,
  u0,
  H2,
  q2,
  F2,
  Z2,
  U2,
  o0
], vv = Sd.length, G2 = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, V2 = "|";
function Y2(t, r = {}) {
  return t.split(V2).map((i) => {
    let s = i.trim().split(G2).filter((u) => u && !!u.trim()), o = [];
    for (let u = 0, f = s.length; u < f; u += 1) {
      const p = s[u];
      let h = !1, g = -1;
      for (; !h && ++g < vv; ) {
        const y = Sd[g];
        let b = y.isMultiMatch(p);
        b && (o.push(new y(b, r)), h = !0);
      }
      if (!h)
        for (g = -1; ++g < vv; ) {
          const y = Sd[g];
          let b = y.isSingleMatch(p);
          if (b) {
            o.push(new y(b, r));
            break;
          }
        }
    }
    return o;
  });
}
const X2 = /* @__PURE__ */ new Set([o0.type, u0.type]);
class $2 {
  constructor(r, {
    isCaseSensitive: i = Ae.isCaseSensitive,
    ignoreDiacritics: s = Ae.ignoreDiacritics,
    includeMatches: o = Ae.includeMatches,
    minMatchCharLength: u = Ae.minMatchCharLength,
    ignoreLocation: f = Ae.ignoreLocation,
    findAllMatches: p = Ae.findAllMatches,
    location: h = Ae.location,
    threshold: g = Ae.threshold,
    distance: y = Ae.distance
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
      distance: y
    }, r = i ? r : r.toLowerCase(), r = s ? fu(r) : r, this.pattern = r, this.query = Y2(this.pattern, this.options);
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
    for (let g = 0, y = i.length; g < y; g += 1) {
      const b = i[g];
      p.length = 0, f = 0;
      for (let _ = 0, v = b.length; _ < v; _ += 1) {
        const d = b[_], { isMatch: S, indices: x, score: O } = d.search(r);
        if (S) {
          if (f += 1, h += O, s) {
            const A = d.constructor.type;
            X2.has(A) ? p = [...p, ...x] : p.push(x);
          }
        } else {
          h = 0, f = 0, p.length = 0;
          break;
        }
      }
      if (f) {
        let _ = {
          isMatch: !0,
          score: h / f
        };
        return s && (_.indices = p), _;
      }
    }
    return {
      isMatch: !1,
      score: 1
    };
  }
}
const xd = [];
function Q2(...t) {
  xd.push(...t);
}
function Ed(t, r) {
  for (let i = 0, s = xd.length; i < s; i += 1) {
    let o = xd[i];
    if (o.condition(t, r))
      return new o(t, r);
  }
  return new l0(t, r);
}
const du = {
  AND: "$and",
  OR: "$or"
}, Cd = {
  PATH: "$path",
  PATTERN: "$val"
}, wd = (t) => !!(t[du.AND] || t[du.OR]), J2 = (t) => !!t[Cd.PATH], K2 = (t) => !Er(t) && r0(t) && !wd(t), yv = (t) => ({
  [du.AND]: Object.keys(t).map((r) => ({
    [r]: t[r]
  }))
});
function c0(t, r, { auto: i = !0 } = {}) {
  const s = (o) => {
    let u = Object.keys(o);
    const f = J2(o);
    if (!f && u.length > 1 && !wd(o))
      return s(yv(o));
    if (K2(o)) {
      const h = f ? o[Cd.PATH] : u[0], g = f ? o[Cd.PATTERN] : o[h];
      if (!Kn(g))
        throw new Error(E2(h));
      const y = {
        keyId: bd(h),
        pattern: g
      };
      return i && (y.searcher = Ed(g, r)), y;
    }
    let p = {
      children: [],
      operator: u[0]
    };
    return u.forEach((h) => {
      const g = o[h];
      Er(g) && g.forEach((y) => {
        p.children.push(s(y));
      });
    }), p;
  };
  return wd(t) || (t = yv(t)), s(t);
}
function W2(t, { ignoreFieldNorm: r = Ae.ignoreFieldNorm }) {
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
function eS(t, r) {
  const i = t.matches;
  r.matches = [], mn(i) && i.forEach((s) => {
    if (!mn(s.indices) || !s.indices.length)
      return;
    const { indices: o, value: u } = s;
    let f = {
      indices: o,
      value: u
    };
    s.key && (f.key = s.key.src), s.idx > -1 && (f.refIndex = s.idx), r.matches.push(f);
  });
}
function tS(t, r) {
  r.score = t.score;
}
function nS(t, r, {
  includeMatches: i = Ae.includeMatches,
  includeScore: s = Ae.includeScore
} = {}) {
  const o = [];
  return i && o.push(eS), s && o.push(tS), t.map((u) => {
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
    this.options = { ...Ae, ...i }, this.options.useExtendedSearch, this._keyStore = new T2(this.options.keys), this.setCollection(r, s);
  }
  setCollection(r, i) {
    if (this._docs = r, i && !(i instanceof Yd))
      throw new Error(x2);
    this._myIndex = i || s0(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(r) {
    mn(r) && (this._docs.push(r), this._myIndex.add(r));
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
    let h = Kn(r) ? Kn(this._docs[0]) ? this._searchStringList(r) : this._searchObjectList(r) : this._searchLogical(r);
    return W2(h, { ignoreFieldNorm: p }), u && h.sort(f), n0(i) && i > -1 && (h = h.slice(0, i)), nS(h, this._docs, {
      includeMatches: s,
      includeScore: o
    });
  }
  _searchStringList(r) {
    const i = Ed(r, this.options), { records: s } = this._myIndex, o = [];
    return s.forEach(({ v: u, i: f, n: p }) => {
      if (!mn(u))
        return;
      const { isMatch: h, score: g, indices: y } = i.searchIn(u);
      h && o.push({
        item: u,
        idx: f,
        matches: [{ score: g, value: u, norm: p, indices: y }]
      });
    }), o;
  }
  _searchLogical(r) {
    const i = c0(r, this.options), s = (p, h, g) => {
      if (!p.children) {
        const { keyId: b, searcher: _ } = p, v = this._findMatches({
          key: this._keyStore.get(b),
          value: this._myIndex.getValueForItemAtKeyId(h, b),
          searcher: _
        });
        return v && v.length ? [
          {
            idx: g,
            item: h,
            matches: v
          }
        ] : [];
      }
      const y = [];
      for (let b = 0, _ = p.children.length; b < _; b += 1) {
        const v = p.children[b], d = s(v, h, g);
        if (d.length)
          y.push(...d);
        else if (p.operator === du.AND)
          return [];
      }
      return y;
    }, o = this._myIndex.records, u = {}, f = [];
    return o.forEach(({ $: p, i: h }) => {
      if (mn(p)) {
        let g = s(i, p, h);
        g.length && (u[h] || (u[h] = { idx: h, item: p, matches: [] }, f.push(u[h])), g.forEach(({ matches: y }) => {
          u[h].matches.push(...y);
        }));
      }
    }), f;
  }
  _searchObjectList(r) {
    const i = Ed(r, this.options), { keys: s, records: o } = this._myIndex, u = [];
    return o.forEach(({ $: f, i: p }) => {
      if (!mn(f))
        return;
      let h = [];
      s.forEach((g, y) => {
        h.push(
          ...this._findMatches({
            key: g,
            value: f[y],
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
    if (!mn(i))
      return [];
    let o = [];
    if (Er(i))
      i.forEach(({ v: u, i: f, n: p }) => {
        if (!mn(u))
          return;
        const { isMatch: h, score: g, indices: y } = s.searchIn(u);
        h && o.push({
          score: g,
          key: r,
          value: u,
          idx: f,
          norm: p,
          indices: y
        });
      });
    else {
      const { v: u, n: f } = i, { isMatch: p, score: h, indices: g } = s.searchIn(u);
      p && o.push({ score: h, key: r, value: u, norm: f, indices: g });
    }
    return o;
  }
}
Ii.version = "7.1.0";
Ii.createIndex = s0;
Ii.parseIndex = z2;
Ii.config = Ae;
Ii.parseQuery = c0;
Q2($2);
var rS = Object.defineProperty, aS = (t, r, i) => r in t ? rS(t, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[r] = i, iS = (t, r, i) => aS(t, r + "", i);
let sS = class {
  constructor() {
    iS(this, "requestMap"), this.requestMap = /* @__PURE__ */ new Map();
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
async function lS(t, ...r) {
  await SillyTavern.getContext().SlashCommandParser.commands[t].callback(...r);
}
async function Oe(t, r, { escapeHtml: i = !0 } = {}) {
  await lS("echo", { severity: t, escapeHtml: (!!i).toString() }, r);
}
function Qf(t) {
  return Ib(t);
}
function _v(t, r) {
  return Lb(t, r);
}
function xo(t, r, i) {
  return Pb(t, r, i);
}
function oS(t, r, i) {
  return Zb(t, r, i);
}
function uS(t, r) {
  return Fb(t, r);
}
function cS(t, {
  customStoryString: r,
  customInstructSettings: i
} = {}) {
  return zb(t, { customStoryString: r, customInstructSettings: i });
}
function wa(t) {
  return Qb(t);
}
function fS() {
  return {
    prompt: js[zs.prompt],
    interval: js[zs.interval],
    position: js[zs.position],
    depth: js[zs.depth],
    role: js[zs.role]
  };
}
function dS(t, r) {
  return Kb(t, r);
}
function hS({
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
  extensionPrompts: y,
  cyclePrompt: b,
  systemPromptOverride: _,
  jailbreakPromptOverride: v,
  personaDescription: d,
  messages: S,
  messageExamples: x
}, O) {
  return Jb(
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
      cyclePrompt: b,
      systemPromptOverride: _,
      jailbreakPromptOverride: v,
      personaDescription: d,
      extensionPrompts: y,
      messages: S,
      messageExamples: x
    },
    O
  );
}
function pS(t) {
  return Vb(t);
}
function mS(t) {
  return Yb(t);
}
function gS(t, r, {
  characterOverride: i,
  isMarkdown: s,
  isPrompt: o,
  isEdit: u,
  depth: f
}) {
  return Wb(t, r, { characterOverride: i, isMarkdown: s, isPrompt: o, isEdit: u, depth: f });
}
async function vS(t, r) {
  return await Gb(t, r);
}
function bv(t, {
  wiFormat: r
} = {}) {
  return Xb(t, { wiFormat: r });
}
function Is(t) {
  return $b(t);
}
class yS {
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
var _S = Object.defineProperty, bS = (t, r, i) => r in t ? _S(t, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[r] = i, Eo = (t, r, i) => bS(t, typeof r != "symbol" ? r + "" : r, i);
class SS {
  constructor(r) {
    Eo(this, "messages", []), Eo(this, "tokenizer"), Eo(this, "maxContext"), Eo(this, "currentTokenCount", 0), this.tokenizer = new yS(), this.maxContext = r;
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
async function f0(t, {
  targetCharacterId: r,
  presetName: i,
  instructName: s,
  contextName: o,
  syspromptName: u,
  maxContext: f,
  includeNames: p,
  ignoreCharacterFields: h,
  ignoreAuthorNote: g,
  ignoreWorldInfo: y,
  messageIndexesBetween: b
} = {}) {
  var _, v, d, S, x, O, A, D, E, T, M, k, q, G;
  if (!["textgenerationwebui", "openai"].includes(t))
    throw new Error("Unsupported API");
  const B = SillyTavern.getContext();
  let { description: V, personality: $, persona: oe, scenario: he, mesExamples: ge, system: U, jailbreak: ne } = h ? {
    description: "",
    personality: "",
    persona: "",
    scenario: "",
    mesExamples: "",
    system: "",
    jailbreak: ""
  } : B.getCharacterCardFields({
    chid: r
  });
  const ce = t === "textgenerationwebui" ? (_ = B.getPresetManager("instruct")) == null ? void 0 : _.getCompletionPresetByName(s) : void 0, Me = !!(ce != null && ce.enabled);
  let j = _v(ge, Me);
  function K() {
    var ue, fe;
    if (typeof f == "number")
      return f;
    if (!f || f === "active" || !i)
      return Qf();
    if (typeof f == "number")
      return f;
    let Ye;
    if (t === "textgenerationwebui") {
      const Fe = (ue = B.getPresetManager("textgenerationwebui")) == null ? void 0 : ue.getCompletionPresetByName(i);
      Ye = Fe?.max_length;
    } else {
      const Fe = (fe = B.getPresetManager("openai")) == null ? void 0 : fe.getCompletionPresetByName(i);
      Ye = Fe?.openai_max_context;
    }
    return typeof Ye == "number" ? Ye : Qf();
  }
  let ae = [];
  const se = K();
  if (se <= 0)
    return { result: [], warnings: ae };
  const le = new SS(se), ke = B.ToolManager.isToolCallingSupported(), Y = b?.start ?? 0, ve = b != null && b.end ? b.end + 1 : void 0;
  let ye = Y === -1 && ve === 0 ? [] : B.chat.slice(Y, ve).filter((ue) => {
    var fe;
    return !ue.is_system || ke && Array.isArray((fe = ue.extra) == null ? void 0 : fe.tool_invocations);
  });
  ye = await Promise.all(
    ye.map(async (ue, fe) => {
      var Ye, Fe;
      let it = ue.mes, Ar = ue.is_user ? Wg.USER_INPUT : Wg.AI_OUTPUT, tr = { isPrompt: !0, depth: ye.length - fe - 1 }, mt = gS(it, Ar, tr);
      return mt = await vS(ue, mt), (Ye = ue?.extra) != null && Ye.append_title && (Fe = ue?.extra) != null && Fe.title && (mt = `${mt}

${ue.extra.title}`), {
        ...ue,
        mes: mt,
        index: fe
      };
    })
  );
  const Ve = ye.map((ue) => Hb ? `${ue.name}: ${ue.mes}` : ue.mes).reverse(), { worldInfoString: P, worldInfoBefore: J, worldInfoAfter: re, worldInfoExamples: xe, worldInfoDepth: He, anBefore: Ie, anAfter: Ne } = y ? {
    worldInfoString: "",
    worldInfoBefore: "",
    worldInfoAfter: "",
    worldInfoExamples: [],
    worldInfoDepth: [],
    anBefore: [],
    anAfter: []
  } : await B.getWorldInfoPrompt(Ve, se, !1);
  for (const ue of xe) {
    const fe = ue.content;
    if (fe.length === 0)
      continue;
    const Ye = xo(fe, br, Qr), Fe = _v(Ye, Me);
    ue.position === qb.before ? j.unshift(...Fe) : j.push(...Fe);
  }
  function Ze() {
    const ue = [];
    for (let fe = ye.length - 1; fe >= 0; fe--) {
      const Ye = ye[fe], Fe = Ye.name === "System" && !Ye.is_user ? "system" : Ye.is_user ? "user" : "assistant";
      ue.unshift({
        role: Fe,
        content: p && Fe != "system" ? `${Ye.name}: ${Ye.mes}` : Ye.mes,
        source: Ye
      });
    }
    le.addMany(ue);
  }
  if (t === "textgenerationwebui") {
    const ue = [...j];
    j && (j = oS(j, br, Qr));
    const fe = (v = B.getPresetManager("sysprompt")) == null ? void 0 : v.getCompletionPresetByName(u);
    fe && (U = B.powerUserSettings.prefer_character_prompt && U ? U : xo(fe.content, br, Qr), U = Me ? uS(
      B.substituteParams(U, br, Qr, fe.content),
      ce
    ) : U);
    const Ye = {
      description: V,
      personality: $,
      persona: B.powerUserSettings.persona_description_position == Jg.IN_PROMPT ? oe : "",
      scenario: he,
      system: U,
      char: Qr,
      user: br,
      wiBefore: J,
      wiAfter: re,
      loreBefore: J,
      loreAfter: re,
      mesExamples: j.join(""),
      mesExamplesRaw: ue.join("")
    }, Fe = (d = B.getPresetManager("context")) == null ? void 0 : d.getCompletionPresetByName(o);
    let it = cS(Ye, {
      customInstructSettings: ce,
      customStoryString: Fe?.story_string
    });
    it && le.add({ role: "system", content: it, ignoreInstruct: !0 }), Ze();
  } else {
    let ue = function(Zt) {
      const Yt = _n.find((Ia) => Ia.identifier === Zt);
      if (Yt)
        return Yt;
      const ul = it.prompts.find((Ia) => Ia.identifier === Zt);
      if (ul)
        return ul;
    }, fe = pS(ye), Ye = mS(j);
    async function Fe() {
      let [Zt, Yt] = await hS(
        {
          name2: Qr,
          charDescription: V,
          charPersonality: $,
          Scenario: he,
          worldInfoBefore: J,
          worldInfoAfter: re,
          extensionPrompts: B.extensionPrompts,
          bias: "",
          type: "normal",
          quietPrompt: void 0,
          quietImage: void 0,
          cyclePrompt: "",
          systemPromptOverride: U,
          jailbreakPromptOverride: ne,
          personaDescription: oe,
          messages: fe,
          messageExamples: Ye
        },
        !1
      );
      le.addMany(Zt);
    }
    if (!i)
      return ae.push("No preset name provided. Using default preset."), await Fe(), { result: le.getMessages(), warnings: ae };
    const it = (S = B.getPresetManager("openai")) == null ? void 0 : S.getCompletionPresetByName(i);
    if (!it)
      return console.warn(`Preset not found: ${i}. Using current preset.`), ae.push(`Preset not found: ${i}. Using current preset.`), Fe(), { result: le.getMessages(), warnings: ae };
    let Ar = (x = it.prompt_order) == null ? void 0 : x.find((Zt) => Zt.character_id === vn);
    if (!Ar && it.prompt_order && it.prompt_order.length > 0 && (Ar = it.prompt_order[0]), !Ar)
      return console.warn(`No prompt order found for preset: ${i}. Using current preset.`), ae.push(`No prompt order found for preset: ${i}. Using current preset.`), Fe(), { result: le.getMessages(), warnings: ae };
    const tr = he && it.scenario_format ? B.substituteParams(it.scenario_format) : "", mt = $ && it.personality_format ? B.substituteParams(it.personality_format) : "", Zn = B.substituteParams(it.group_nudge_prompt), qt = it.impersonation_prompt ? B.substituteParams(it.impersonation_prompt) : "", _n = [];
    y || _n.push(
      {
        role: "system",
        content: bv(J, { wiFormat: it.wi_format }),
        identifier: "worldInfoBefore"
      },
      {
        role: "system",
        content: bv(re, { wiFormat: it.wi_format }),
        identifier: "worldInfoAfter"
      }
    ), h || _n.push(
      { role: "system", content: V, identifier: "charDescription" },
      { role: "system", content: mt, identifier: "charPersonality" },
      { role: "system", content: tr, identifier: "scenario" }
    ), _n.push(
      { role: "system", content: qt, identifier: "impersonate" },
      { role: "system", content: Zn, identifier: "groupNudge" }
    );
    const ia = B.extensionPrompts["1_memory"];
    ia && ia.value && _n.push({
      role: wa(ia.role),
      content: ia.value,
      identifier: "summary",
      position: Is(ia.position)
    });
    const sa = B.extensionPrompts["2_floating_prompt"];
    !g && sa && sa.value && _n.push({
      role: wa(sa.role),
      content: sa.value,
      identifier: "authorsNote",
      position: Is(sa.position)
    });
    const nr = B.extensionPrompts["3_vectors"];
    nr && nr.value && _n.push({
      role: "system",
      content: nr.value,
      identifier: "vectorsMemory",
      position: Is(nr.position)
    });
    const Fn = B.extensionPrompts["4_vectors_data_bank"];
    Fn && Fn.value && _n.push({
      role: wa(Fn.role),
      content: Fn.value,
      identifier: "vectorsDataBank",
      position: Is(Fn.position)
    });
    const bn = B.extensionPrompts.chromadb;
    bn && bn.value && _n.push({
      role: "system",
      content: bn.value,
      identifier: "smartContext",
      position: Is(bn.position)
    }), !h && B.powerUserSettings.persona_description && B.powerUserSettings.persona_description_position === Jg.IN_PROMPT && _n.push({
      role: "system",
      content: B.powerUserSettings.persona_description,
      identifier: "personaDescription"
    }), Ar.order.forEach((Zt) => {
      if (!Zt.enabled)
        return;
      const Yt = ue(Zt.identifier);
      if (Yt && Yt.content) {
        le.add({
          role: Yt.role ?? "system",
          content: B.substituteParams(Yt.content)
        });
        return;
      }
      Zt.identifier === "chatHistory" && Ze();
    });
  }
  const qe = [
    "1_memory",
    "2_floating_prompt",
    "3_vectors",
    "4_vectors_data_bank",
    "chromadb",
    "PERSONA_DESCRIPTION",
    "QUIET_PROMPT",
    "DEPTH_PROMPT"
  ];
  for (const ue in B.extensionPrompts)
    if (Object.hasOwn(B.extensionPrompts, ue)) {
      const fe = B.extensionPrompts[ue];
      if (qe.includes(ue) || !B.extensionPrompts[ue].value || ![Ca.BEFORE_PROMPT, Ca.IN_PROMPT].includes(fe.position) || typeof fe.filter == "function" && !await fe.filter()) continue;
      const Ye = {
        role: wa(fe.role) ?? "system",
        content: fe.value
      };
      if (fe.position === Ca.BEFORE_PROMPT)
        le.insert(fe.depth, Ye);
      else if (fe.position === Ca.IN_PROMPT) {
        const Fe = le.getMessages();
        le.insert(Fe.length - fe.depth, Ye);
      }
    }
  for (const ue of He) {
    const fe = le.getMessages();
    le.insert(fe.length - ue.depth, {
      role: wa(ue.role),
      content: ue.entries.join(`
`)
    });
  }
  if (!h) {
    const ue = dS(Sr, Number(vn));
    if (Sr && Array.isArray(ue) && ue.length > 0)
      ue.filter((fe) => fe.text).forEach((fe, Ye) => {
        const Fe = le.getMessages();
        le.insert(Fe.length - fe.depth, { role: fe.role, content: fe.text });
      });
    else {
      const fe = xo(
        (T = (E = (D = (A = (O = B.characters[vn]) == null ? void 0 : O.data) == null ? void 0 : A.extensions) == null ? void 0 : D.depth_prompt) == null ? void 0 : E.prompt) == null ? void 0 : T.trim(),
        br,
        Qr
      ) || "";
      if (fe) {
        const Ye = Ub, Fe = ((G = (q = (k = (M = B.characters[vn]) == null ? void 0 : M.data) == null ? void 0 : k.extensions) == null ? void 0 : q.depth_prompt) == null ? void 0 : G.role) ?? Bb, it = le.getMessages();
        le.insert(it.length - Ye, {
          role: wa(Fe),
          content: fe
        });
      }
    }
  }
  let Je = -1;
  if (!g) {
    const ue = fS();
    if (ue.prompt) {
      ue.prompt = xo(ue.prompt, br, Qr);
      const fe = { role: wa(ue.role), content: ue.prompt };
      switch (ue.position) {
        case Ca.IN_PROMPT:
          le.insert(1, fe), Je = 1;
          break;
        case Ca.IN_CHAT:
          Je = le.getMessages().length - ue.depth, le.insert(Je, fe);
          break;
        case Ca.BEFORE_PROMPT:
          le.addFront(fe), Je = 0;
          break;
      }
    }
  }
  return Je >= 0 && (Ie.length > 0 && (le.insert(Je, { role: "system", content: Ie.join(`
`) }), Je++), Ne.length > 0 && le.insert(Je + 1, { role: "system", content: Ne.join(`
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
function er(t) {
  for (var r = 1; r < arguments.length; r++) {
    var i = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Sv(Object(i), !0).forEach(function(s) {
      xS(t, s, i[s]);
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
function xS(t, r, i) {
  return r in t ? Object.defineProperty(t, r, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[r] = i, t;
}
function Cr() {
  return Cr = Object.assign || function(t) {
    for (var r = 1; r < arguments.length; r++) {
      var i = arguments[r];
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
    }
    return t;
  }, Cr.apply(this, arguments);
}
function ES(t, r) {
  if (t == null) return {};
  var i = {}, s = Object.keys(t), o, u;
  for (u = 0; u < s.length; u++)
    o = s[u], !(r.indexOf(o) >= 0) && (i[o] = t[o]);
  return i;
}
function CS(t, r) {
  if (t == null) return {};
  var i = ES(t, r), s, o;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);
    for (o = 0; o < u.length; o++)
      s = u[o], !(r.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(t, s) && (i[s] = t[s]);
  }
  return i;
}
var wS = "1.15.6";
function xr(t) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(t);
}
var wr = xr(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), il = xr(/Edge/i), xv = xr(/firefox/i), Js = xr(/safari/i) && !xr(/chrome/i) && !xr(/android/i), Xd = xr(/iP(ad|od|hone)/i), d0 = xr(/chrome/i) && xr(/android/i), h0 = {
  capture: !1,
  passive: !1
};
function Be(t, r, i) {
  t.addEventListener(r, i, !wr && h0);
}
function Pe(t, r, i) {
  t.removeEventListener(r, i, !wr && h0);
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
function p0(t) {
  return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
}
function Un(t, r, i, s) {
  if (t) {
    i = i || document;
    do {
      if (r != null && (r[0] === ">" ? t.parentNode === i && hu(t, r) : hu(t, r)) || s && t === i)
        return t;
      if (t === i) break;
    } while (t = p0(t));
  }
  return null;
}
var Ev = /\s+/g;
function hn(t, r, i) {
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
function ji(t, r) {
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
function m0(t, r, i) {
  if (t) {
    var s = t.getElementsByTagName(r), o = 0, u = s.length;
    if (i)
      for (; o < u; o++)
        i(s[o], o);
    return s;
  }
  return [];
}
function Wn() {
  var t = document.scrollingElement;
  return t || document.documentElement;
}
function xt(t, r, i, s, o) {
  if (!(!t.getBoundingClientRect && t !== window)) {
    var u, f, p, h, g, y, b;
    if (t !== window && t.parentNode && t !== Wn() ? (u = t.getBoundingClientRect(), f = u.top, p = u.left, h = u.bottom, g = u.right, y = u.height, b = u.width) : (f = 0, p = 0, h = window.innerHeight, g = window.innerWidth, y = window.innerHeight, b = window.innerWidth), (r || i) && t !== window && (o = o || t.parentNode, !wr))
      do
        if (o && o.getBoundingClientRect && (Ce(o, "transform") !== "none" || i && Ce(o, "position") !== "static")) {
          var _ = o.getBoundingClientRect();
          f -= _.top + parseInt(Ce(o, "border-top-width")), p -= _.left + parseInt(Ce(o, "border-left-width")), h = f + u.height, g = p + u.width;
          break;
        }
      while (o = o.parentNode);
    if (s && t !== window) {
      var v = ji(o || t), d = v && v.a, S = v && v.d;
      v && (f /= S, p /= d, b /= d, y /= S, h = f + y, g = p + b);
    }
    return {
      top: f,
      left: p,
      bottom: h,
      right: g,
      width: b,
      height: y
    };
  }
}
function Cv(t, r, i) {
  for (var s = ta(t, !0), o = xt(t)[r]; s; ) {
    var u = xt(s)[i], f = void 0;
    if (f = o >= u, !f) return s;
    if (s === Wn()) break;
    s = ta(s, !1);
  }
  return !1;
}
function Pi(t, r, i, s) {
  for (var o = 0, u = 0, f = t.children; u < f.length; ) {
    if (f[u].style.display !== "none" && f[u] !== we.ghost && (s || f[u] !== we.dragged) && Un(f[u], i.draggable, t, !1)) {
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
  var r = 0, i = 0, s = Wn();
  if (t)
    do {
      var o = ji(t), u = o.a, f = o.d;
      r += t.scrollLeft * u, i += t.scrollTop * f;
    } while (t !== s && (t = t.parentNode));
  return [r, i];
}
function AS(t, r) {
  for (var i in t)
    if (t.hasOwnProperty(i)) {
      for (var s in r)
        if (r.hasOwnProperty(s) && r[s] === t[i][s]) return Number(i);
    }
  return -1;
}
function ta(t, r) {
  if (!t || !t.getBoundingClientRect) return Wn();
  var i = t, s = !1;
  do
    if (i.clientWidth < i.scrollWidth || i.clientHeight < i.scrollHeight) {
      var o = Ce(i);
      if (i.clientWidth < i.scrollWidth && (o.overflowX == "auto" || o.overflowX == "scroll") || i.clientHeight < i.scrollHeight && (o.overflowY == "auto" || o.overflowY == "scroll")) {
        if (!i.getBoundingClientRect || i === document.body) return Wn();
        if (s || r) return i;
        s = !0;
      }
    }
  while (i = i.parentNode);
  return Wn();
}
function TS(t, r) {
  if (t && r)
    for (var i in r)
      r.hasOwnProperty(i) && (t[i] = r[i]);
  return t;
}
function Jf(t, r) {
  return Math.round(t.top) === Math.round(r.top) && Math.round(t.left) === Math.round(r.left) && Math.round(t.height) === Math.round(r.height) && Math.round(t.width) === Math.round(r.width);
}
var Ks;
function g0(t, r) {
  return function() {
    if (!Ks) {
      var i = arguments, s = this;
      i.length === 1 ? t.call(s, i[0]) : t.apply(s, i), Ks = setTimeout(function() {
        Ks = void 0;
      }, r);
    }
  };
}
function OS() {
  clearTimeout(Ks), Ks = void 0;
}
function v0(t, r, i) {
  t.scrollLeft += r, t.scrollTop += i;
}
function y0(t) {
  var r = window.Polymer, i = window.jQuery || window.Zepto;
  return r && r.dom ? r.dom(t).cloneNode(!0) : i ? i(t).clone(!0)[0] : t.cloneNode(!0);
}
function _0(t, r, i) {
  var s = {};
  return Array.from(t.children).forEach(function(o) {
    var u, f, p, h;
    if (!(!Un(o, r.draggable, t, !1) || o.animated || o === i)) {
      var g = xt(o);
      s.left = Math.min((u = s.left) !== null && u !== void 0 ? u : 1 / 0, g.left), s.top = Math.min((f = s.top) !== null && f !== void 0 ? f : 1 / 0, g.top), s.right = Math.max((p = s.right) !== null && p !== void 0 ? p : -1 / 0, g.right), s.bottom = Math.max((h = s.bottom) !== null && h !== void 0 ? h : -1 / 0, g.bottom);
    }
  }), s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
var tn = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function NS() {
  var t = [], r;
  return {
    captureAnimationState: function() {
      if (t = [], !!this.options.animation) {
        var s = [].slice.call(this.el.children);
        s.forEach(function(o) {
          if (!(Ce(o, "display") === "none" || o === we.ghost)) {
            t.push({
              target: o,
              rect: xt(o)
            });
            var u = er({}, t[t.length - 1].rect);
            if (o.thisAnimationDuration) {
              var f = ji(o, !0);
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
      t.splice(AS(t, {
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
        var h = 0, g = p.target, y = g.fromRect, b = xt(g), _ = g.prevFromRect, v = g.prevToRect, d = p.rect, S = ji(g, !0);
        S && (b.top -= S.f, b.left -= S.e), g.toRect = b, g.thisAnimationDuration && Jf(_, b) && !Jf(y, b) && // Make sure animatingRect is on line between toRect & fromRect
        (d.top - b.top) / (d.left - b.left) === (y.top - b.top) / (y.left - b.left) && (h = MS(d, _, v, o.options)), Jf(b, y) || (g.prevFromRect = y, g.prevToRect = b, h || (h = o.options.animation), o.animate(g, d, b, h)), h && (u = !0, f = Math.max(f, h), clearTimeout(g.animationResetTimer), g.animationResetTimer = setTimeout(function() {
          g.animationTime = 0, g.prevFromRect = null, g.fromRect = null, g.prevToRect = null, g.thisAnimationDuration = null;
        }, h), g.thisAnimationDuration = h);
      }), clearTimeout(r), u ? r = setTimeout(function() {
        typeof s == "function" && s();
      }, f) : typeof s == "function" && s(), t = [];
    },
    animate: function(s, o, u, f) {
      if (f) {
        Ce(s, "transition", ""), Ce(s, "transform", "");
        var p = ji(this.el), h = p && p.a, g = p && p.d, y = (o.left - u.left) / (h || 1), b = (o.top - u.top) / (g || 1);
        s.animatingX = !!y, s.animatingY = !!b, Ce(s, "transform", "translate3d(" + y + "px," + b + "px,0)"), this.forRepaintDummy = DS(s), Ce(s, "transition", "transform " + f + "ms" + (this.options.easing ? " " + this.options.easing : "")), Ce(s, "transform", "translate3d(0,0,0)"), typeof s.animated == "number" && clearTimeout(s.animated), s.animated = setTimeout(function() {
          Ce(s, "transition", ""), Ce(s, "transform", ""), s.animated = !1, s.animatingX = !1, s.animatingY = !1;
        }, f);
      }
    }
  };
}
function DS(t) {
  return t.offsetWidth;
}
function MS(t, r, i, s) {
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
      i[f.pluginName] && (i[f.pluginName][u] && i[f.pluginName][u](er({
        sortable: i
      }, s)), i.options[f.pluginName] && i[f.pluginName][r] && i[f.pluginName][r](er({
        sortable: i
      }, s)));
    });
  },
  initializePlugins: function(r, i, s, o) {
    wi.forEach(function(p) {
      var h = p.pluginName;
      if (!(!r.options[h] && !p.initializeByDefault)) {
        var g = new p(r, i, r.options);
        g.sortable = r, g.options = r.options, r[h] = g, Cr(s, g.defaults);
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
      typeof o.eventProperties == "function" && Cr(s, o.eventProperties.call(i[o.pluginName], r));
    }), s;
  },
  modifyOption: function(r, i, s) {
    var o;
    return wi.forEach(function(u) {
      r[u.pluginName] && u.optionListeners && typeof u.optionListeners[i] == "function" && (o = u.optionListeners[i].call(r[u.pluginName], s));
    }), o;
  }
};
function kS(t) {
  var r = t.sortable, i = t.rootEl, s = t.name, o = t.targetEl, u = t.cloneEl, f = t.toEl, p = t.fromEl, h = t.oldIndex, g = t.newIndex, y = t.oldDraggableIndex, b = t.newDraggableIndex, _ = t.originalEvent, v = t.putSortable, d = t.extraEventProperties;
  if (r = r || i && i[tn], !!r) {
    var S, x = r.options, O = "on" + s.charAt(0).toUpperCase() + s.substr(1);
    window.CustomEvent && !wr && !il ? S = new CustomEvent(s, {
      bubbles: !0,
      cancelable: !0
    }) : (S = document.createEvent("Event"), S.initEvent(s, !0, !0)), S.to = f || i, S.from = p || i, S.item = o || i, S.clone = u, S.oldIndex = h, S.newIndex = g, S.oldDraggableIndex = y, S.newDraggableIndex = b, S.originalEvent = _, S.pullMode = v ? v.lastPutMode : void 0;
    var A = er(er({}, d), sl.getEventProperties(s, r));
    for (var D in A)
      S[D] = A[D];
    i && i.dispatchEvent(S), x[O] && x[O].call(r, S);
  }
}
var RS = ["evt"], Wt = function(r, i) {
  var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = s.evt, u = CS(s, RS);
  sl.pluginEvent.bind(we)(r, i, er({
    dragEl: ie,
    parentEl: pt,
    ghostEl: Te,
    rootEl: lt,
    nextEl: Oa,
    lastDownEl: su,
    cloneEl: ct,
    cloneHidden: ea,
    dragStarted: Ys,
    putSortable: zt,
    activeSortable: we.active,
    originalEvent: o,
    oldIndex: ki,
    oldDraggableIndex: Ws,
    newIndex: pn,
    newDraggableIndex: Wr,
    hideGhostForTarget: E0,
    unhideGhostForTarget: C0,
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
  kS(er({
    putSortable: zt,
    cloneEl: ct,
    targetEl: ie,
    rootEl: lt,
    oldIndex: ki,
    oldDraggableIndex: Ws,
    newIndex: pn,
    newDraggableIndex: Wr
  }, t));
}
var ie, pt, Te, lt, Oa, su, ct, ea, ki, pn, Ws, Wr, Co, zt, Mi = !1, pu = !1, mu = [], Aa, In, Wf, ed, Av, Tv, Ys, Ai, el, tl = !1, wo = !1, lu, Ht, td = [], Ad = !1, gu = [], wu = typeof document < "u", Ao = Xd, Ov = il || wr ? "cssFloat" : "float", jS = wu && !d0 && !Xd && "draggable" in document.createElement("div"), b0 = (function() {
  if (wu) {
    if (wr)
      return !1;
    var t = document.createElement("x");
    return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto";
  }
})(), S0 = function(r, i) {
  var s = Ce(r), o = parseInt(s.width) - parseInt(s.paddingLeft) - parseInt(s.paddingRight) - parseInt(s.borderLeftWidth) - parseInt(s.borderRightWidth), u = Pi(r, 0, i), f = Pi(r, 1, i), p = u && Ce(u), h = f && Ce(f), g = p && parseInt(p.marginLeft) + parseInt(p.marginRight) + xt(u).width, y = h && parseInt(h.marginLeft) + parseInt(h.marginRight) + xt(f).width;
  if (s.display === "flex")
    return s.flexDirection === "column" || s.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (s.display === "grid")
    return s.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (u && p.float && p.float !== "none") {
    var b = p.float === "left" ? "left" : "right";
    return f && (h.clear === "both" || h.clear === b) ? "vertical" : "horizontal";
  }
  return u && (p.display === "block" || p.display === "flex" || p.display === "table" || p.display === "grid" || g >= o && s[Ov] === "none" || f && s[Ov] === "none" && g + y > o) ? "vertical" : "horizontal";
}, zS = function(r, i, s) {
  var o = s ? r.left : r.top, u = s ? r.right : r.bottom, f = s ? r.width : r.height, p = s ? i.left : i.top, h = s ? i.right : i.bottom, g = s ? i.width : i.height;
  return o === p || u === h || o + f / 2 === p + g / 2;
}, LS = function(r, i) {
  var s;
  return mu.some(function(o) {
    var u = o[tn].options.emptyInsertThreshold;
    if (!(!u || $d(o))) {
      var f = xt(o), p = r >= f.left - u && r <= f.right + u, h = i >= f.top - u && i <= f.bottom + u;
      if (p && h)
        return s = o;
    }
  }), s;
}, x0 = function(r) {
  function i(u, f) {
    return function(p, h, g, y) {
      var b = p.options.group.name && h.options.group.name && p.options.group.name === h.options.group.name;
      if (u == null && (f || b))
        return !0;
      if (u == null || u === !1)
        return !1;
      if (f && u === "clone")
        return u;
      if (typeof u == "function")
        return i(u(p, h, g, y), f)(p, h, g, y);
      var _ = (f ? p : h).options.group.name;
      return u === !0 || typeof u == "string" && u === _ || u.join && u.indexOf(_) > -1;
    };
  }
  var s = {}, o = r.group;
  (!o || iu(o) != "object") && (o = {
    name: o
  }), s.name = o.name, s.checkPull = i(o.pull, !0), s.checkPut = i(o.put), s.revertClone = o.revertClone, r.group = s;
}, E0 = function() {
  !b0 && Te && Ce(Te, "display", "none");
}, C0 = function() {
  !b0 && Te && Ce(Te, "display", "");
};
wu && !d0 && document.addEventListener("click", function(t) {
  if (pu)
    return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), pu = !1, !1;
}, !0);
var Ta = function(r) {
  if (ie) {
    r = r.touches ? r.touches[0] : r;
    var i = LS(r.clientX, r.clientY);
    if (i) {
      var s = {};
      for (var o in r)
        r.hasOwnProperty(o) && (s[o] = r[o]);
      s.target = s.rootEl = i, s.preventDefault = void 0, s.stopPropagation = void 0, i[tn]._onDragOver(s);
    }
  }
}, PS = function(r) {
  ie && ie.parentNode[tn]._isOutsideThisEl(r.target);
};
function we(t, r) {
  if (!(t && t.nodeType && t.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
  this.el = t, this.options = r = Cr({}, r), t[tn] = this;
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
      return S0(t, this.options);
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
  x0(r);
  for (var o in this)
    o.charAt(0) === "_" && typeof this[o] == "function" && (this[o] = this[o].bind(this));
  this.nativeDraggable = r.forceFallback ? !1 : jS, this.nativeDraggable && (this.options.touchStartThreshold = 1), r.supportPointer ? Be(t, "pointerdown", this._onTapStart) : (Be(t, "mousedown", this._onTapStart), Be(t, "touchstart", this._onTapStart)), this.nativeDraggable && (Be(t, "dragover", this), Be(t, "dragenter", this)), mu.push(this.el), r.store && r.store.get && this.sort(r.store.get(this) || []), Cr(this, NS());
}
we.prototype = /** @lends Sortable.prototype */
{
  constructor: we,
  _isOutsideThisEl: function(r) {
    !this.el.contains(r) && r !== this.el && (Ai = null);
  },
  _getDirection: function(r, i) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, r, i, ie) : this.options.direction;
  },
  _onTapStart: function(r) {
    if (r.cancelable) {
      var i = this, s = this.el, o = this.options, u = o.preventOnFilter, f = r.type, p = r.touches && r.touches[0] || r.pointerType && r.pointerType === "touch" && r, h = (p || r).target, g = r.target.shadowRoot && (r.path && r.path[0] || r.composedPath && r.composedPath()[0]) || h, y = o.filter;
      if (GS(s), !ie && !(/mousedown|pointerdown/.test(f) && r.button !== 0 || o.disabled) && !g.isContentEditable && !(!this.nativeDraggable && Js && h && h.tagName.toUpperCase() === "SELECT") && (h = Un(h, o.draggable, s, !1), !(h && h.animated) && su !== h)) {
        if (ki = Mn(h), Ws = Mn(h, o.draggable), typeof y == "function") {
          if (y.call(this, r, h, this)) {
            Gt({
              sortable: i,
              rootEl: g,
              name: "filter",
              targetEl: h,
              toEl: s,
              fromEl: s
            }), Wt("filter", i, {
              evt: r
            }), u && r.preventDefault();
            return;
          }
        } else if (y && (y = y.split(",").some(function(b) {
          if (b = Un(g, b.trim(), s, !1), b)
            return Gt({
              sortable: i,
              rootEl: b,
              name: "filter",
              targetEl: h,
              fromEl: s,
              toEl: s
            }), Wt("filter", i, {
              evt: r
            }), !0;
        }), y)) {
          u && r.preventDefault();
          return;
        }
        o.handle && !Un(g, o.handle, s, !1) || this._prepareDragStart(r, p, h);
      }
    }
  },
  _prepareDragStart: function(r, i, s) {
    var o = this, u = o.el, f = o.options, p = u.ownerDocument, h;
    if (s && !ie && s.parentNode === u) {
      var g = xt(s);
      if (lt = u, ie = s, pt = ie.parentNode, Oa = ie.nextSibling, su = s, Co = f.group, we.dragged = ie, Aa = {
        target: ie,
        clientX: (i || r).clientX,
        clientY: (i || r).clientY
      }, Av = Aa.clientX - g.left, Tv = Aa.clientY - g.top, this._lastX = (i || r).clientX, this._lastY = (i || r).clientY, ie.style["will-change"] = "all", h = function() {
        if (Wt("delayEnded", o, {
          evt: r
        }), we.eventCanceled) {
          o._onDrop();
          return;
        }
        o._disableDelayedDragEvents(), !xv && o.nativeDraggable && (ie.draggable = !0), o._triggerDragStart(r, i), Gt({
          sortable: o,
          name: "choose",
          originalEvent: r
        }), hn(ie, f.chosenClass, !0);
      }, f.ignore.split(",").forEach(function(y) {
        m0(ie, y.trim(), nd);
      }), Be(p, "dragover", Ta), Be(p, "mousemove", Ta), Be(p, "touchmove", Ta), f.supportPointer ? (Be(p, "pointerup", o._onDrop), !this.nativeDraggable && Be(p, "pointercancel", o._onDrop)) : (Be(p, "mouseup", o._onDrop), Be(p, "touchend", o._onDrop), Be(p, "touchcancel", o._onDrop)), xv && this.nativeDraggable && (this.options.touchStartThreshold = 4, ie.draggable = !0), Wt("delayStart", this, {
        evt: r
      }), f.delay && (!f.delayOnTouchOnly || i) && (!this.nativeDraggable || !(il || wr))) {
        if (we.eventCanceled) {
          this._onDrop();
          return;
        }
        f.supportPointer ? (Be(p, "pointerup", o._disableDelayedDrag), Be(p, "pointercancel", o._disableDelayedDrag)) : (Be(p, "mouseup", o._disableDelayedDrag), Be(p, "touchend", o._disableDelayedDrag), Be(p, "touchcancel", o._disableDelayedDrag)), Be(p, "mousemove", o._delayedDragTouchMoveHandler), Be(p, "touchmove", o._delayedDragTouchMoveHandler), f.supportPointer && Be(p, "pointermove", o._delayedDragTouchMoveHandler), o._dragStartTimer = setTimeout(h, f.delay);
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
    Pe(r, "mouseup", this._disableDelayedDrag), Pe(r, "touchend", this._disableDelayedDrag), Pe(r, "touchcancel", this._disableDelayedDrag), Pe(r, "pointerup", this._disableDelayedDrag), Pe(r, "pointercancel", this._disableDelayedDrag), Pe(r, "mousemove", this._delayedDragTouchMoveHandler), Pe(r, "touchmove", this._delayedDragTouchMoveHandler), Pe(r, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(r, i) {
    i = i || r.pointerType == "touch" && r, !this.nativeDraggable || i ? this.options.supportPointer ? Be(document, "pointermove", this._onTouchMove) : i ? Be(document, "touchmove", this._onTouchMove) : Be(document, "mousemove", this._onTouchMove) : (Be(ie, "dragend", this), Be(lt, "dragstart", this._onDragStart));
    try {
      document.selection ? ou(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(r, i) {
    if (Mi = !1, lt && ie) {
      Wt("dragStarted", this, {
        evt: i
      }), this.nativeDraggable && Be(document, "dragover", PS);
      var s = this.options;
      !r && hn(ie, s.dragClass, !1), hn(ie, s.ghostClass, !0), we.active = this, r && this._appendGhost(), Gt({
        sortable: this,
        name: "start",
        originalEvent: i
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (In) {
      this._lastX = In.clientX, this._lastY = In.clientY, E0();
      for (var r = document.elementFromPoint(In.clientX, In.clientY), i = r; r && r.shadowRoot && (r = r.shadowRoot.elementFromPoint(In.clientX, In.clientY), r !== i); )
        i = r;
      if (ie.parentNode[tn]._isOutsideThisEl(r), i)
        do {
          if (i[tn]) {
            var s = void 0;
            if (s = i[tn]._onDragOver({
              clientX: In.clientX,
              clientY: In.clientY,
              target: r,
              rootEl: i
            }), s && !this.options.dragoverBubble)
              break;
          }
          r = i;
        } while (i = p0(i));
      C0();
    }
  },
  _onTouchMove: function(r) {
    if (Aa) {
      var i = this.options, s = i.fallbackTolerance, o = i.fallbackOffset, u = r.touches ? r.touches[0] : r, f = Te && ji(Te, !0), p = Te && f && f.a, h = Te && f && f.d, g = Ao && Ht && wv(Ht), y = (u.clientX - Aa.clientX + o.x) / (p || 1) + (g ? g[0] - td[0] : 0) / (p || 1), b = (u.clientY - Aa.clientY + o.y) / (h || 1) + (g ? g[1] - td[1] : 0) / (h || 1);
      if (!we.active && !Mi) {
        if (s && Math.max(Math.abs(u.clientX - this._lastX), Math.abs(u.clientY - this._lastY)) < s)
          return;
        this._onDragStart(r, !0);
      }
      if (Te) {
        f ? (f.e += y - (Wf || 0), f.f += b - (ed || 0)) : f = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: y,
          f: b
        };
        var _ = "matrix(".concat(f.a, ",").concat(f.b, ",").concat(f.c, ",").concat(f.d, ",").concat(f.e, ",").concat(f.f, ")");
        Ce(Te, "webkitTransform", _), Ce(Te, "mozTransform", _), Ce(Te, "msTransform", _), Ce(Te, "transform", _), Wf = y, ed = b, In = u;
      }
      r.cancelable && r.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!Te) {
      var r = this.options.fallbackOnBody ? document.body : lt, i = xt(ie, !0, Ao, !0, r), s = this.options;
      if (Ao) {
        for (Ht = r; Ce(Ht, "position") === "static" && Ce(Ht, "transform") === "none" && Ht !== document; )
          Ht = Ht.parentNode;
        Ht !== document.body && Ht !== document.documentElement ? (Ht === document && (Ht = Wn()), i.top += Ht.scrollTop, i.left += Ht.scrollLeft) : Ht = Wn(), td = wv(Ht);
      }
      Te = ie.cloneNode(!0), hn(Te, s.ghostClass, !1), hn(Te, s.fallbackClass, !0), hn(Te, s.dragClass, !0), Ce(Te, "transition", ""), Ce(Te, "transform", ""), Ce(Te, "box-sizing", "border-box"), Ce(Te, "margin", 0), Ce(Te, "top", i.top), Ce(Te, "left", i.left), Ce(Te, "width", i.width), Ce(Te, "height", i.height), Ce(Te, "opacity", "0.8"), Ce(Te, "position", Ao ? "absolute" : "fixed"), Ce(Te, "zIndex", "100000"), Ce(Te, "pointerEvents", "none"), we.ghost = Te, r.appendChild(Te), Ce(Te, "transform-origin", Av / parseInt(Te.style.width) * 100 + "% " + Tv / parseInt(Te.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(r, i) {
    var s = this, o = r.dataTransfer, u = s.options;
    if (Wt("dragStart", this, {
      evt: r
    }), we.eventCanceled) {
      this._onDrop();
      return;
    }
    Wt("setupClone", this), we.eventCanceled || (ct = y0(ie), ct.removeAttribute("id"), ct.draggable = !1, ct.style["will-change"] = "", this._hideClone(), hn(ct, this.options.chosenClass, !1), we.clone = ct), s.cloneId = ou(function() {
      Wt("clone", s), !we.eventCanceled && (s.options.removeCloneOnHide || lt.insertBefore(ct, ie), s._hideClone(), Gt({
        sortable: s,
        name: "clone"
      }));
    }), !i && hn(ie, u.dragClass, !0), i ? (pu = !0, s._loopId = setInterval(s._emulateDragOver, 50)) : (Pe(document, "mouseup", s._onDrop), Pe(document, "touchend", s._onDrop), Pe(document, "touchcancel", s._onDrop), o && (o.effectAllowed = "move", u.setData && u.setData.call(s, o, ie)), Be(document, "drop", s), Ce(ie, "transform", "translateZ(0)")), Mi = !0, s._dragStartId = ou(s._dragStarted.bind(s, i, r)), Be(document, "selectstart", s), Ys = !0, window.getSelection().removeAllRanges(), Js && Ce(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(r) {
    var i = this.el, s = r.target, o, u, f, p = this.options, h = p.group, g = we.active, y = Co === h, b = p.sort, _ = zt || g, v, d = this, S = !1;
    if (Ad) return;
    function x(ce, Me) {
      Wt(ce, d, er({
        evt: r,
        isOwner: y,
        axis: v ? "vertical" : "horizontal",
        revert: f,
        dragRect: o,
        targetRect: u,
        canSort: b,
        fromSortable: _,
        target: s,
        completed: A,
        onMove: function(K, ae) {
          return To(lt, i, ie, o, K, xt(K), r, ae);
        },
        changed: D
      }, Me));
    }
    function O() {
      x("dragOverAnimationCapture"), d.captureAnimationState(), d !== _ && _.captureAnimationState();
    }
    function A(ce) {
      return x("dragOverCompleted", {
        insertion: ce
      }), ce && (y ? g._hideClone() : g._showClone(d), d !== _ && (hn(ie, zt ? zt.options.ghostClass : g.options.ghostClass, !1), hn(ie, p.ghostClass, !0)), zt !== d && d !== we.active ? zt = d : d === we.active && zt && (zt = null), _ === d && (d._ignoreWhileAnimating = s), d.animateAll(function() {
        x("dragOverAnimationComplete"), d._ignoreWhileAnimating = null;
      }), d !== _ && (_.animateAll(), _._ignoreWhileAnimating = null)), (s === ie && !ie.animated || s === i && !s.animated) && (Ai = null), !p.dragoverBubble && !r.rootEl && s !== document && (ie.parentNode[tn]._isOutsideThisEl(r.target), !ce && Ta(r)), !p.dragoverBubble && r.stopPropagation && r.stopPropagation(), S = !0;
    }
    function D() {
      pn = Mn(ie), Wr = Mn(ie, p.draggable), Gt({
        sortable: d,
        name: "change",
        toEl: i,
        newIndex: pn,
        newDraggableIndex: Wr,
        originalEvent: r
      });
    }
    if (r.preventDefault !== void 0 && r.cancelable && r.preventDefault(), s = Un(s, p.draggable, i, !0), x("dragOver"), we.eventCanceled) return S;
    if (ie.contains(r.target) || s.animated && s.animatingX && s.animatingY || d._ignoreWhileAnimating === s)
      return A(!1);
    if (pu = !1, g && !p.disabled && (y ? b || (f = pt !== lt) : zt === this || (this.lastPutMode = Co.checkPull(this, g, ie, r)) && h.checkPut(this, g, ie, r))) {
      if (v = this._getDirection(r, s) === "vertical", o = xt(ie), x("dragOverValid"), we.eventCanceled) return S;
      if (f)
        return pt = lt, O(), this._hideClone(), x("revert"), we.eventCanceled || (Oa ? lt.insertBefore(ie, Oa) : lt.appendChild(ie)), A(!0);
      var E = $d(i, p.draggable);
      if (!E || HS(r, v, this) && !E.animated) {
        if (E === ie)
          return A(!1);
        if (E && i === r.target && (s = E), s && (u = xt(s)), To(lt, i, ie, o, s, u, r, !!s) !== !1)
          return O(), E && E.nextSibling ? i.insertBefore(ie, E.nextSibling) : i.appendChild(ie), pt = i, D(), A(!0);
      } else if (E && US(r, v, this)) {
        var T = Pi(i, 0, p, !0);
        if (T === ie)
          return A(!1);
        if (s = T, u = xt(s), To(lt, i, ie, o, s, u, r, !1) !== !1)
          return O(), i.insertBefore(ie, T), pt = i, D(), A(!0);
      } else if (s.parentNode === i) {
        u = xt(s);
        var M = 0, k, q = ie.parentNode !== i, G = !zS(ie.animated && ie.toRect || o, s.animated && s.toRect || u, v), B = v ? "top" : "left", V = Cv(s, "top", "top") || Cv(ie, "top", "top"), $ = V ? V.scrollTop : void 0;
        Ai !== s && (k = u[B], tl = !1, wo = !G && p.invertSwap || q), M = qS(r, s, u, v, G ? 1 : p.swapThreshold, p.invertedSwapThreshold == null ? p.swapThreshold : p.invertedSwapThreshold, wo, Ai === s);
        var oe;
        if (M !== 0) {
          var he = Mn(ie);
          do
            he -= M, oe = pt.children[he];
          while (oe && (Ce(oe, "display") === "none" || oe === Te));
        }
        if (M === 0 || oe === s)
          return A(!1);
        Ai = s, el = M;
        var ge = s.nextElementSibling, U = !1;
        U = M === 1;
        var ne = To(lt, i, ie, o, s, u, r, U);
        if (ne !== !1)
          return (ne === 1 || ne === -1) && (U = ne === 1), Ad = !0, setTimeout(BS, 30), O(), U && !ge ? i.appendChild(ie) : s.parentNode.insertBefore(ie, U ? ge : s), V && v0(V, 0, $ - V.scrollTop), pt = ie.parentNode, k !== void 0 && !wo && (lu = Math.abs(k - xt(s)[B])), D(), A(!0);
      }
      if (i.contains(ie))
        return A(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    Pe(document, "mousemove", this._onTouchMove), Pe(document, "touchmove", this._onTouchMove), Pe(document, "pointermove", this._onTouchMove), Pe(document, "dragover", Ta), Pe(document, "mousemove", Ta), Pe(document, "touchmove", Ta);
  },
  _offUpEvents: function() {
    var r = this.el.ownerDocument;
    Pe(r, "mouseup", this._onDrop), Pe(r, "touchend", this._onDrop), Pe(r, "pointerup", this._onDrop), Pe(r, "pointercancel", this._onDrop), Pe(r, "touchcancel", this._onDrop), Pe(document, "selectstart", this);
  },
  _onDrop: function(r) {
    var i = this.el, s = this.options;
    if (pn = Mn(ie), Wr = Mn(ie, s.draggable), Wt("drop", this, {
      evt: r
    }), pt = ie && ie.parentNode, pn = Mn(ie), Wr = Mn(ie, s.draggable), we.eventCanceled) {
      this._nulling();
      return;
    }
    Mi = !1, wo = !1, tl = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Td(this.cloneId), Td(this._dragStartId), this.nativeDraggable && (Pe(document, "drop", this), Pe(i, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Js && Ce(document.body, "user-select", ""), Ce(ie, "transform", ""), r && (Ys && (r.cancelable && r.preventDefault(), !s.dropBubble && r.stopPropagation()), Te && Te.parentNode && Te.parentNode.removeChild(Te), (lt === pt || zt && zt.lastPutMode !== "clone") && ct && ct.parentNode && ct.parentNode.removeChild(ct), ie && (this.nativeDraggable && Pe(ie, "dragend", this), nd(ie), ie.style["will-change"] = "", Ys && !Mi && hn(ie, zt ? zt.options.ghostClass : this.options.ghostClass, !1), hn(ie, this.options.chosenClass, !1), Gt({
      sortable: this,
      name: "unchoose",
      toEl: pt,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: r
    }), lt !== pt ? (pn >= 0 && (Gt({
      rootEl: pt,
      name: "add",
      toEl: pt,
      fromEl: lt,
      originalEvent: r
    }), Gt({
      sortable: this,
      name: "remove",
      toEl: pt,
      originalEvent: r
    }), Gt({
      rootEl: pt,
      name: "sort",
      toEl: pt,
      fromEl: lt,
      originalEvent: r
    }), Gt({
      sortable: this,
      name: "sort",
      toEl: pt,
      originalEvent: r
    })), zt && zt.save()) : pn !== ki && pn >= 0 && (Gt({
      sortable: this,
      name: "update",
      toEl: pt,
      originalEvent: r
    }), Gt({
      sortable: this,
      name: "sort",
      toEl: pt,
      originalEvent: r
    })), we.active && ((pn == null || pn === -1) && (pn = ki, Wr = Ws), Gt({
      sortable: this,
      name: "end",
      toEl: pt,
      originalEvent: r
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    Wt("nulling", this), lt = ie = pt = Te = Oa = ct = su = ea = Aa = In = Ys = pn = Wr = ki = Ws = Ai = el = zt = Co = we.dragged = we.ghost = we.clone = we.active = null, gu.forEach(function(r) {
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
        ie && (this._onDragOver(r), IS(r));
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
      i = s[o], Un(i, f.draggable, this.el, !1) && r.push(i.getAttribute(f.dataIdAttr) || FS(i));
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
      Un(p, this.options.draggable, o, !1) && (s[u] = p);
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
    return Un(r, i || this.options.draggable, this.el, !1);
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
    typeof o < "u" ? s[r] = o : s[r] = i, r === "group" && x0(s);
  },
  /**
   * Destroy
   */
  destroy: function() {
    Wt("destroy", this);
    var r = this.el;
    r[tn] = null, Pe(r, "mousedown", this._onTapStart), Pe(r, "touchstart", this._onTapStart), Pe(r, "pointerdown", this._onTapStart), this.nativeDraggable && (Pe(r, "dragover", this), Pe(r, "dragenter", this)), Array.prototype.forEach.call(r.querySelectorAll("[draggable]"), function(i) {
      i.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), mu.splice(mu.indexOf(this.el), 1), this.el = r = null;
  },
  _hideClone: function() {
    if (!ea) {
      if (Wt("hideClone", this), we.eventCanceled) return;
      Ce(ct, "display", "none"), this.options.removeCloneOnHide && ct.parentNode && ct.parentNode.removeChild(ct), ea = !0;
    }
  },
  _showClone: function(r) {
    if (r.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (ea) {
      if (Wt("showClone", this), we.eventCanceled) return;
      ie.parentNode == lt && !this.options.group.revertClone ? lt.insertBefore(ct, ie) : Oa ? lt.insertBefore(ct, Oa) : lt.appendChild(ct), this.options.group.revertClone && this.animate(ie, ct), Ce(ct, "display", ""), ea = !1;
    }
  }
};
function IS(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
}
function To(t, r, i, s, o, u, f, p) {
  var h, g = t[tn], y = g.options.onMove, b;
  return window.CustomEvent && !wr && !il ? h = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (h = document.createEvent("Event"), h.initEvent("move", !0, !0)), h.to = r, h.from = t, h.dragged = i, h.draggedRect = s, h.related = o || r, h.relatedRect = u || xt(r), h.willInsertAfter = p, h.originalEvent = f, t.dispatchEvent(h), y && (b = y.call(g, h, f)), b;
}
function nd(t) {
  t.draggable = !1;
}
function BS() {
  Ad = !1;
}
function US(t, r, i) {
  var s = xt(Pi(i.el, 0, i.options, !0)), o = _0(i.el, i.options, Te), u = 10;
  return r ? t.clientX < o.left - u || t.clientY < s.top && t.clientX < s.right : t.clientY < o.top - u || t.clientY < s.bottom && t.clientX < s.left;
}
function HS(t, r, i) {
  var s = xt($d(i.el, i.options.draggable)), o = _0(i.el, i.options, Te), u = 10;
  return r ? t.clientX > o.right + u || t.clientY > s.bottom && t.clientX > s.left : t.clientY > o.bottom + u || t.clientX > s.right && t.clientY > s.top;
}
function qS(t, r, i, s, o, u, f, p) {
  var h = s ? t.clientY : t.clientX, g = s ? i.height : i.width, y = s ? i.top : i.left, b = s ? i.bottom : i.right, _ = !1;
  if (!f) {
    if (p && lu < g * o) {
      if (!tl && (el === 1 ? h > y + g * u / 2 : h < b - g * u / 2) && (tl = !0), tl)
        _ = !0;
      else if (el === 1 ? h < y + lu : h > b - lu)
        return -el;
    } else if (h > y + g * (1 - o) / 2 && h < b - g * (1 - o) / 2)
      return ZS(r);
  }
  return _ = _ || f, _ && (h < y + g * u / 2 || h > b - g * u / 2) ? h > y + g / 2 ? 1 : -1 : 0;
}
function ZS(t) {
  return Mn(ie) < Mn(t) ? 1 : -1;
}
function FS(t) {
  for (var r = t.tagName + t.className + t.src + t.href + t.textContent, i = r.length, s = 0; i--; )
    s += r.charCodeAt(i);
  return s.toString(36);
}
function GS(t) {
  gu.length = 0;
  for (var r = t.getElementsByTagName("input"), i = r.length; i--; ) {
    var s = r[i];
    s.checked && gu.push(s);
  }
}
function ou(t) {
  return setTimeout(t, 0);
}
function Td(t) {
  return clearTimeout(t);
}
wu && Be(document, "touchmove", function(t) {
  (we.active || Mi) && t.cancelable && t.preventDefault();
});
we.utils = {
  on: Be,
  off: Pe,
  css: Ce,
  find: m0,
  is: function(r, i) {
    return !!Un(r, i, r, !1);
  },
  extend: TS,
  throttle: g0,
  closest: Un,
  toggleClass: hn,
  clone: y0,
  index: Mn,
  nextTick: ou,
  cancelNextTick: Td,
  detectDirection: S0,
  getChild: Pi,
  expando: tn
};
we.get = function(t) {
  return t[tn];
};
we.mount = function() {
  for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
    r[i] = arguments[i];
  r[0].constructor === Array && (r = r[0]), r.forEach(function(s) {
    if (!s.prototype || !s.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(s));
    s.utils && (we.utils = er(er({}, we.utils), s.utils)), sl.mount(s);
  });
};
we.create = function(t, r) {
  return new we(t, r);
};
we.version = wS;
var St = [], Xs, Od, Nd = !1, rd, ad, vu, $s;
function VS() {
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
      this.sortable.nativeDraggable ? Be(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? Be(document, "pointermove", this._handleFallbackAutoScroll) : s.touches ? Be(document, "touchmove", this._handleFallbackAutoScroll) : Be(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(i) {
      var s = i.originalEvent;
      !this.options.dragOverBubble && !s.rootEl && this._handleAutoScroll(s);
    },
    drop: function() {
      this.sortable.nativeDraggable ? Pe(document, "dragover", this._handleAutoScroll) : (Pe(document, "pointermove", this._handleFallbackAutoScroll), Pe(document, "touchmove", this._handleFallbackAutoScroll), Pe(document, "mousemove", this._handleFallbackAutoScroll)), Nv(), uu(), OS();
    },
    nulling: function() {
      vu = Od = Xs = Nd = $s = rd = ad = null, St.length = 0;
    },
    _handleFallbackAutoScroll: function(i) {
      this._handleAutoScroll(i, !0);
    },
    _handleAutoScroll: function(i, s) {
      var o = this, u = (i.touches ? i.touches[0] : i).clientX, f = (i.touches ? i.touches[0] : i).clientY, p = document.elementFromPoint(u, f);
      if (vu = i, s || this.options.forceAutoScrollFallback || il || wr || Js) {
        id(i, this.options, p, s);
        var h = ta(p, !0);
        Nd && (!$s || u !== rd || f !== ad) && ($s && Nv(), $s = setInterval(function() {
          var g = ta(document.elementFromPoint(u, f), !0);
          g !== h && (h = g, uu()), id(i, o.options, g, s);
        }, 10), rd = u, ad = f);
      } else {
        if (!this.options.bubbleScroll || ta(p, !0) === Wn()) {
          uu();
          return;
        }
        id(i, this.options, ta(p, !1), !1);
      }
    }
  }, Cr(t, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function uu() {
  St.forEach(function(t) {
    clearInterval(t.pid);
  }), St = [];
}
function Nv() {
  clearInterval($s);
}
var id = g0(function(t, r, i, s) {
  if (r.scroll) {
    var o = (t.touches ? t.touches[0] : t).clientX, u = (t.touches ? t.touches[0] : t).clientY, f = r.scrollSensitivity, p = r.scrollSpeed, h = Wn(), g = !1, y;
    Od !== i && (Od = i, uu(), Xs = r.scroll, y = r.scrollFn, Xs === !0 && (Xs = ta(i, !0)));
    var b = 0, _ = Xs;
    do {
      var v = _, d = xt(v), S = d.top, x = d.bottom, O = d.left, A = d.right, D = d.width, E = d.height, T = void 0, M = void 0, k = v.scrollWidth, q = v.scrollHeight, G = Ce(v), B = v.scrollLeft, V = v.scrollTop;
      v === h ? (T = D < k && (G.overflowX === "auto" || G.overflowX === "scroll" || G.overflowX === "visible"), M = E < q && (G.overflowY === "auto" || G.overflowY === "scroll" || G.overflowY === "visible")) : (T = D < k && (G.overflowX === "auto" || G.overflowX === "scroll"), M = E < q && (G.overflowY === "auto" || G.overflowY === "scroll"));
      var $ = T && (Math.abs(A - o) <= f && B + D < k) - (Math.abs(O - o) <= f && !!B), oe = M && (Math.abs(x - u) <= f && V + E < q) - (Math.abs(S - u) <= f && !!V);
      if (!St[b])
        for (var he = 0; he <= b; he++)
          St[he] || (St[he] = {});
      (St[b].vx != $ || St[b].vy != oe || St[b].el !== v) && (St[b].el = v, St[b].vx = $, St[b].vy = oe, clearInterval(St[b].pid), ($ != 0 || oe != 0) && (g = !0, St[b].pid = setInterval((function() {
        s && this.layer === 0 && we.active._onTouchMove(vu);
        var ge = St[this.layer].vy ? St[this.layer].vy * p : 0, U = St[this.layer].vx ? St[this.layer].vx * p : 0;
        typeof y == "function" && y.call(we.dragged.parentNode[tn], U, ge, t, vu, St[this.layer].el) !== "continue" || v0(St[this.layer].el, U, ge);
      }).bind({
        layer: b
      }), 24))), b++;
    } while (r.bubbleScroll && _ !== h && (_ = ta(_, !1)));
    Nd = g;
  }
}, 30), w0 = function(r) {
  var i = r.originalEvent, s = r.putSortable, o = r.dragEl, u = r.activeSortable, f = r.dispatchSortableEvent, p = r.hideGhostForTarget, h = r.unhideGhostForTarget;
  if (i) {
    var g = s || u;
    p();
    var y = i.changedTouches && i.changedTouches.length ? i.changedTouches[0] : i, b = document.elementFromPoint(y.clientX, y.clientY);
    h(), g && !g.el.contains(b) && (f("spill"), this.onSpill({
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
  drop: w0
};
Cr(Qd, {
  pluginName: "revertOnSpill"
});
function Jd() {
}
Jd.prototype = {
  onSpill: function(r) {
    var i = r.dragEl, s = r.putSortable, o = s || this.sortable;
    o.captureAnimationState(), i.parentNode && i.parentNode.removeChild(i), o.animateAll();
  },
  drop: w0
};
Cr(Jd, {
  pluginName: "removeOnSpill"
});
we.mount(new VS());
we.mount(Jd, Qd);
const Dd = `=======

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

=======`, A0 = `{{#if characters}}
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
{{/if}}`, YS = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide your response wrapped ONLY in a single <response> XML tag.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
<response>Generated content for the field goes here.</response>
\`\`\``, XS = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide your response as a JSON object with a single key "response" containing the generated content as a string.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
{
  "response": "Generated content for the field goes here."
}
\`\`\``, $S = `=== RESPONSE FORMAT INSTRUCTIONS ===
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
{{/is_not_empty}}`, QS = `### {{character.name}}
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
{{/is_not_empty}}`, JS = `## User's Persona Description
name: {{user}}
{{persona}}`, Wd = `Your task is to generate the content for the "{{targetField}}" field of a character card. Base your response on the preceding context (chat history, persona, system prompts, character/lore definitions, existing fields, etc.).
{{#if userInstructions}}

Follow these user instructions: {{userInstructions}}
{{/if}}
{{#if fieldSpecificInstructions}}

Field-specific instructions: {{fieldSpecificInstructions}}
{{/if}}`, KS = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid JSON object that strictly adheres to the provided JSON schema.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire JSON object in a markdown code block (```json\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The JSON object inside the code block MUST be valid and conform to the schema.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```json\n{{example_response}}\n```", WS = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid XML structure that strictly adheres to the provided example.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire XML object in a markdown code block (```xml\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The XML object inside the code block MUST be valid.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```json\n{{example_response}}\n```", ex = `You are an expert character writer assisting a user. Your task is to respond with the modified character data in the required structured format.
Your justification should be friendly and conversational. Be direct and focus on the changes you've made. Vary your responses and do not start every message the same way. Do not repeat the user's request back to them.

For this session, we are focusing on: {{#if isFieldSession}}the "{{targetLabel}}" field.{{else}}the entire character card.{{/if}}

Initial character state is provided in the context. Read the user's request, and provide a response that incorporates their changes.`, O0 = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", tx = O0 + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", nx = "[" + O0 + "][" + tx + "]*", rx = new RegExp("^" + nx + "$");
function N0(t, r) {
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
  const r = rx.exec(t);
  return !(r === null || typeof r > "u");
};
function ax(t) {
  return typeof t < "u";
}
const ix = {
  allowBooleanAttributes: !1,
  //A tag can have attributes without any value
  unpairedTags: []
};
function D0(t, r) {
  r = Object.assign({}, ix, r);
  const i = [];
  let s = !1, o = !1;
  t[0] === "\uFEFF" && (t = t.substr(1));
  for (let u = 0; u < t.length; u++)
    if (t[u] === "<" && t[u + 1] === "?") {
      if (u += 2, u = Mv(t, u), u.err) return u;
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
        if (h = h.trim(), h[h.length - 1] === "/" && (h = h.substring(0, h.length - 1), u--), !hx(h)) {
          let b;
          return h.trim().length === 0 ? b = "Invalid space after '<'." : b = "Tag '" + h + "' is an invalid name.", yt("InvalidTag", b, Vt(t, u));
        }
        const g = ox(t, u);
        if (g === !1)
          return yt("InvalidAttr", "Attributes for '" + h + "' have open quote.", Vt(t, u));
        let y = g.value;
        if (u = g.index, y[y.length - 1] === "/") {
          const b = u - y.length;
          y = y.substring(0, y.length - 1);
          const _ = Rv(y, r);
          if (_ === !0)
            s = !0;
          else
            return yt(_.err.code, _.err.msg, Vt(t, b + _.err.line));
        } else if (p)
          if (g.tagClosed) {
            if (y.trim().length > 0)
              return yt("InvalidTag", "Closing tag '" + h + "' can't have attributes or invalid starting.", Vt(t, f));
            if (i.length === 0)
              return yt("InvalidTag", "Closing tag '" + h + "' has not been opened.", Vt(t, f));
            {
              const b = i.pop();
              if (h !== b.tagName) {
                let _ = Vt(t, b.tagStartPos);
                return yt(
                  "InvalidTag",
                  "Expected closing tag '" + b.tagName + "' (opened in line " + _.line + ", col " + _.col + ") instead of closing tag '" + h + "'.",
                  Vt(t, f)
                );
              }
              i.length == 0 && (o = !0);
            }
          } else return yt("InvalidTag", "Closing tag '" + h + "' doesn't have proper closing.", Vt(t, u));
        else {
          const b = Rv(y, r);
          if (b !== !0)
            return yt(b.err.code, b.err.msg, Vt(t, u - y.length + b.err.line));
          if (o === !0)
            return yt("InvalidXml", "Multiple possible root nodes found.", Vt(t, u));
          r.unpairedTags.indexOf(h) !== -1 || i.push({ tagName: h, tagStartPos: f }), s = !0;
        }
        for (u++; u < t.length; u++)
          if (t[u] === "<")
            if (t[u + 1] === "!") {
              u++, u = kv(t, u);
              continue;
            } else if (t[u + 1] === "?") {
              if (u = Mv(t, ++u), u.err) return u;
            } else
              break;
          else if (t[u] === "&") {
            const b = fx(t, u);
            if (b == -1)
              return yt("InvalidChar", "char '&' is not expected.", Vt(t, u));
            u = b;
          } else if (o === !0 && !Dv(t[u]))
            return yt("InvalidXml", "Extra text at the end", Vt(t, u));
        t[u] === "<" && u--;
      }
    } else {
      if (Dv(t[u]))
        continue;
      return yt("InvalidChar", "char '" + t[u] + "' is not expected.", Vt(t, u));
    }
  if (s) {
    if (i.length == 1)
      return yt("InvalidTag", "Unclosed tag '" + i[0].tagName + "'.", Vt(t, i[0].tagStartPos));
    if (i.length > 0)
      return yt("InvalidXml", "Invalid '" + JSON.stringify(i.map((u) => u.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
  } else return yt("InvalidXml", "Start tag expected.", 1);
  return !0;
}
function Dv(t) {
  return t === " " || t === "	" || t === `
` || t === "\r";
}
function Mv(t, r) {
  const i = r;
  for (; r < t.length; r++)
    if (t[r] == "?" || t[r] == " ") {
      const s = t.substr(i, r - i);
      if (r > 5 && s === "xml")
        return yt("InvalidXml", "XML declaration allowed only at the start of the document.", Vt(t, r));
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
const sx = '"', lx = "'";
function ox(t, r) {
  let i = "", s = "", o = !1;
  for (; r < t.length; r++) {
    if (t[r] === sx || t[r] === lx)
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
const ux = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function Rv(t, r) {
  const i = N0(t, ux), s = {};
  for (let o = 0; o < i.length; o++) {
    if (i[o][1].length === 0)
      return yt("InvalidAttr", "Attribute '" + i[o][2] + "' has no space in starting.", Bs(i[o]));
    if (i[o][3] !== void 0 && i[o][4] === void 0)
      return yt("InvalidAttr", "Attribute '" + i[o][2] + "' is without value.", Bs(i[o]));
    if (i[o][3] === void 0 && !r.allowBooleanAttributes)
      return yt("InvalidAttr", "boolean attribute '" + i[o][2] + "' is not allowed.", Bs(i[o]));
    const u = i[o][2];
    if (!dx(u))
      return yt("InvalidAttr", "Attribute '" + u + "' is an invalid name.", Bs(i[o]));
    if (!s.hasOwnProperty(u))
      s[u] = 1;
    else
      return yt("InvalidAttr", "Attribute '" + u + "' is repeated.", Bs(i[o]));
  }
  return !0;
}
function cx(t, r) {
  let i = /\d/;
  for (t[r] === "x" && (r++, i = /[\da-fA-F]/); r < t.length; r++) {
    if (t[r] === ";")
      return r;
    if (!t[r].match(i))
      break;
  }
  return -1;
}
function fx(t, r) {
  if (r++, t[r] === ";")
    return -1;
  if (t[r] === "#")
    return r++, cx(t, r);
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
function dx(t) {
  return eh(t);
}
function hx(t) {
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
const px = {
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
}, mx = function(t) {
  return Object.assign({}, px, t);
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
function gx(t, r) {
  const i = {};
  if (t[r + 3] === "O" && t[r + 4] === "C" && t[r + 5] === "T" && t[r + 6] === "Y" && t[r + 7] === "P" && t[r + 8] === "E") {
    r = r + 9;
    let s = 1, o = !1, u = !1, f = "";
    for (; r < t.length; r++)
      if (t[r] === "<" && !u) {
        if (o && _x(t, r)) {
          r += 7;
          let p, h;
          [p, h, r] = vx(t, r + 1), h.indexOf("&") === -1 && (i[Ex(p)] = {
            regx: RegExp(`&${p};`, "g"),
            val: h
          });
        } else if (o && bx(t, r)) r += 8;
        else if (o && Sx(t, r)) r += 8;
        else if (o && xx(t, r)) r += 9;
        else if (yx) u = !0;
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
function vx(t, r) {
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
function yx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "-" && t[r + 3] === "-";
}
function _x(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "E" && t[r + 3] === "N" && t[r + 4] === "T" && t[r + 5] === "I" && t[r + 6] === "T" && t[r + 7] === "Y";
}
function bx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "E" && t[r + 3] === "L" && t[r + 4] === "E" && t[r + 5] === "M" && t[r + 6] === "E" && t[r + 7] === "N" && t[r + 8] === "T";
}
function Sx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "A" && t[r + 3] === "T" && t[r + 4] === "T" && t[r + 5] === "L" && t[r + 6] === "I" && t[r + 7] === "S" && t[r + 8] === "T";
}
function xx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "N" && t[r + 3] === "O" && t[r + 4] === "T" && t[r + 5] === "A" && t[r + 6] === "T" && t[r + 7] === "I" && t[r + 8] === "O" && t[r + 9] === "N";
}
function Ex(t) {
  if (eh(t))
    return t;
  throw new Error(`Invalid entity name ${t}`);
}
const Cx = /^[-+]?0x[a-fA-F0-9]+$/, wx = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, Ax = {
  hex: !0,
  // oct: false,
  leadingZeros: !0,
  decimalPoint: ".",
  eNotation: !0
  //skipLike: /regex/
};
function Tx(t, r = {}) {
  if (r = Object.assign({}, Ax, r), !t || typeof t != "string") return t;
  let i = t.trim();
  if (r.skipLike !== void 0 && r.skipLike.test(i)) return t;
  if (t === "0") return 0;
  if (r.hex && Cx.test(i))
    return Nx(i, 16);
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
    const s = wx.exec(i);
    if (s) {
      const o = s[1], u = s[2];
      let f = Ox(s[3]);
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
function Ox(t) {
  return t && t.indexOf(".") !== -1 && (t = t.replace(/0+$/, ""), t === "." ? t = "0" : t[0] === "." ? t = "0" + t : t[t.length - 1] === "." && (t = t.substr(0, t.length - 1))), t;
}
function Nx(t, r) {
  if (parseInt) return parseInt(t, r);
  if (Number.parseInt) return Number.parseInt(t, r);
  if (window && window.parseInt) return window.parseInt(t, r);
  throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
}
function Dx(t) {
  return typeof t == "function" ? t : Array.isArray(t) ? (r) => {
    for (const i of t)
      if (typeof i == "string" && r === i || i instanceof RegExp && i.test(r))
        return !0;
  } : () => !1;
}
class Mx {
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
    }, this.addExternalEntities = kx, this.parseXml = Px, this.parseTextData = Rx, this.resolveNameSpace = jx, this.buildAttributesMap = Lx, this.isItStopNode = Hx, this.replaceEntitiesValue = Bx, this.readStopNodeData = Zx, this.saveTextToParentTag = Ux, this.addChild = Ix, this.ignoreAttributesFn = Dx(this.options.ignoreAttributes);
  }
}
function kx(t) {
  const r = Object.keys(t);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    this.lastEntities[s] = {
      regex: new RegExp("&" + s + ";", "g"),
      val: t[s]
    };
  }
}
function Rx(t, r, i, s, o, u, f) {
  if (t !== void 0 && (this.options.trimValues && !s && (t = t.trim()), t.length > 0)) {
    f || (t = this.replaceEntitiesValue(t));
    const p = this.options.tagValueProcessor(r, t, i, o, u);
    return p == null ? t : typeof p != typeof t || p !== t ? p : this.options.trimValues ? kd(t, this.options.parseTagValue, this.options.numberParseOptions) : t.trim() === t ? kd(t, this.options.parseTagValue, this.options.numberParseOptions) : t;
  }
}
function jx(t) {
  if (this.options.removeNSPrefix) {
    const r = t.split(":"), i = t.charAt(0) === "/" ? "/" : "";
    if (r[0] === "xmlns")
      return "";
    r.length === 2 && (t = i + r[1]);
  }
  return t;
}
const zx = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function Lx(t, r, i) {
  if (this.options.ignoreAttributes !== !0 && typeof t == "string") {
    const s = N0(t, zx), o = s.length, u = {};
    for (let f = 0; f < o; f++) {
      const p = this.resolveNameSpace(s[f][1]);
      if (this.ignoreAttributesFn(p, r))
        continue;
      let h = s[f][4], g = this.options.attributeNamePrefix + p;
      if (p.length)
        if (this.options.transformAttributeName && (g = this.options.transformAttributeName(g)), g === "__proto__" && (g = "#__proto__"), h !== void 0) {
          this.options.trimValues && (h = h.trim()), h = this.replaceEntitiesValue(h);
          const y = this.options.attributeValueProcessor(p, h, r);
          y == null ? u[g] = h : typeof y != typeof h || y !== h ? u[g] = y : u[g] = kd(
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
const Px = function(t) {
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
          const b = h.indexOf(":");
          b !== -1 && (h = h.substr(b + 1));
        }
        this.options.transformTagName && (h = this.options.transformTagName(h)), i && (s = this.saveTextToParentTag(s, i, o));
        const g = o.substring(o.lastIndexOf(".") + 1);
        if (h && this.options.unpairedTags.indexOf(h) !== -1)
          throw new Error(`Unpaired tag can not be used as closing tag: </${h}>`);
        let y = 0;
        g && this.options.unpairedTags.indexOf(g) !== -1 ? (y = o.lastIndexOf(".", o.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : y = o.lastIndexOf("."), o = o.substring(0, y), i = this.tagsNodeStack.pop(), s = "", u = p;
      } else if (t[u + 1] === "?") {
        let p = Md(t, u, !1, "?>");
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
        const p = gx(t, u);
        this.docTypeEntities = p.entities, u = p.i;
      } else if (t.substr(u + 1, 2) === "![") {
        const p = ka(t, "]]>", u, "CDATA is not closed.") - 2, h = t.substring(u + 9, p);
        s = this.saveTextToParentTag(s, i, o);
        let g = this.parseTextData(h, i.tagname, o, !0, !1, !0, !0);
        g == null && (g = ""), this.options.cdataPropName ? i.add(this.options.cdataPropName, [{ [this.options.textNodeName]: h }]) : i.add(this.options.textNodeName, g), u = p + 2;
      } else {
        let p = Md(t, u, this.options.removeNSPrefix), h = p.tagName;
        const g = p.rawTagName;
        let y = p.tagExp, b = p.attrExpPresent, _ = p.closeIndex;
        this.options.transformTagName && (h = this.options.transformTagName(h)), i && s && i.tagname !== "!xml" && (s = this.saveTextToParentTag(s, i, o, !1));
        const v = i;
        if (v && this.options.unpairedTags.indexOf(v.tagname) !== -1 && (i = this.tagsNodeStack.pop(), o = o.substring(0, o.lastIndexOf("."))), h !== r.tagname && (o += o ? "." + h : h), this.isItStopNode(this.options.stopNodes, o, h)) {
          let d = "";
          if (y.length > 0 && y.lastIndexOf("/") === y.length - 1)
            h[h.length - 1] === "/" ? (h = h.substr(0, h.length - 1), o = o.substr(0, o.length - 1), y = h) : y = y.substr(0, y.length - 1), u = p.closeIndex;
          else if (this.options.unpairedTags.indexOf(h) !== -1)
            u = p.closeIndex;
          else {
            const x = this.readStopNodeData(t, g, _ + 1);
            if (!x) throw new Error(`Unexpected end of ${g}`);
            u = x.i, d = x.tagContent;
          }
          const S = new Us(h);
          h !== y && b && (S[":@"] = this.buildAttributesMap(y, o, h)), d && (d = this.parseTextData(d, h, o, !0, b, !0, !0)), o = o.substr(0, o.lastIndexOf(".")), S.add(this.options.textNodeName, d), this.addChild(i, S, o);
        } else {
          if (y.length > 0 && y.lastIndexOf("/") === y.length - 1) {
            h[h.length - 1] === "/" ? (h = h.substr(0, h.length - 1), o = o.substr(0, o.length - 1), y = h) : y = y.substr(0, y.length - 1), this.options.transformTagName && (h = this.options.transformTagName(h));
            const d = new Us(h);
            h !== y && b && (d[":@"] = this.buildAttributesMap(y, o, h)), this.addChild(i, d, o), o = o.substr(0, o.lastIndexOf("."));
          } else {
            const d = new Us(h);
            this.tagsNodeStack.push(i), h !== y && b && (d[":@"] = this.buildAttributesMap(y, o, h)), this.addChild(i, d, o), i = d;
          }
          s = "", u = _;
        }
      }
    else
      s += t[u];
  return r.child;
};
function Ix(t, r, i) {
  const s = this.options.updateTag(r.tagname, i, r[":@"]);
  s === !1 || (typeof s == "string" && (r.tagname = s), t.addChild(r));
}
const Bx = function(t) {
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
function Ux(t, r, i, s) {
  return t && (s === void 0 && (s = r.child.length === 0), t = this.parseTextData(
    t,
    r.tagname,
    i,
    !1,
    r[":@"] ? Object.keys(r[":@"]).length !== 0 : !1,
    s
  ), t !== void 0 && t !== "" && r.add(this.options.textNodeName, t), t = ""), t;
}
function Hx(t, r, i) {
  const s = "*." + i;
  for (const o in t) {
    const u = t[o];
    if (s === u || r === u) return !0;
  }
  return !1;
}
function qx(t, r, i = ">") {
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
function Md(t, r, i, s = ">") {
  const o = qx(t, r + 1, s);
  if (!o) return;
  let u = o.data;
  const f = o.index, p = u.search(/\s/);
  let h = u, g = !0;
  p !== -1 && (h = u.substring(0, p), u = u.substring(p + 1).trimStart());
  const y = h;
  if (i) {
    const b = h.indexOf(":");
    b !== -1 && (h = h.substr(b + 1), g = h !== o.data.substr(b + 1));
  }
  return {
    tagName: h,
    tagExp: u,
    closeIndex: f,
    attrExpPresent: g,
    rawTagName: y
  };
}
function Zx(t, r, i) {
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
        const u = Md(t, i, ">");
        u && ((u && u.tagName) === r && u.tagExp[u.tagExp.length - 1] !== "/" && o++, i = u.closeIndex);
      }
}
function kd(t, r, i) {
  if (r && typeof t == "string") {
    const s = t.trim();
    return s === "true" ? !0 : s === "false" ? !1 : Tx(t, i);
  } else
    return ax(t) ? t : "";
}
function Fx(t, r) {
  return M0(t, r);
}
function M0(t, r, i) {
  let s;
  const o = {};
  for (let u = 0; u < t.length; u++) {
    const f = t[u], p = Gx(f);
    let h = "";
    if (i === void 0 ? h = p : h = i + "." + p, p === r.textNodeName)
      s === void 0 ? s = f[p] : s += "" + f[p];
    else {
      if (p === void 0)
        continue;
      if (f[p]) {
        let g = M0(f[p], r, h);
        const y = Yx(g, r);
        f[":@"] ? Vx(g, f[":@"], h, r) : Object.keys(g).length === 1 && g[r.textNodeName] !== void 0 && !r.alwaysCreateTextNode ? g = g[r.textNodeName] : Object.keys(g).length === 0 && (r.alwaysCreateTextNode ? g[r.textNodeName] = "" : g = ""), o[p] !== void 0 && o.hasOwnProperty(p) ? (Array.isArray(o[p]) || (o[p] = [o[p]]), o[p].push(g)) : r.isArray(p, h, y) ? o[p] = [g] : o[p] = g;
      }
    }
  }
  return typeof s == "string" ? s.length > 0 && (o[r.textNodeName] = s) : s !== void 0 && (o[r.textNodeName] = s), o;
}
function Gx(t) {
  const r = Object.keys(t);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (s !== ":@") return s;
  }
}
function Vx(t, r, i, s) {
  if (r) {
    const o = Object.keys(r), u = o.length;
    for (let f = 0; f < u; f++) {
      const p = o[f];
      s.isArray(p, i + "." + p, !0, !0) ? t[p] = [r[p]] : t[p] = r[p];
    }
  }
}
function Yx(t, r) {
  const { textNodeName: i } = r, s = Object.keys(t).length;
  return !!(s === 0 || s === 1 && (t[i] || typeof t[i] == "boolean" || t[i] === 0));
}
class Xx {
  constructor(r) {
    this.externalEntities = {}, this.options = mx(r);
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
    const s = new Mx(this.options);
    s.addExternalEntities(this.externalEntities);
    const o = s.parseXml(r);
    return this.options.preserveOrder || o === void 0 ? o : Fx(o, this.options);
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
const $x = {
  validate: D0
}, Qx = new Xx({
  ignoreAttributes: !0,
  textNodeName: "#text",
  trimValues: !0,
  allowBooleanAttributes: !0
});
function Rd(t, r) {
  if (!(!r || !t || !r.properties))
    for (const i in r.properties) {
      if (!t.hasOwnProperty(i)) continue;
      const s = r.properties[i];
      let o = t[i];
      s.type === "array" && !Array.isArray(o) && (o = [o], t[i] = o), s.type === "object" && typeof o == "object" && o !== null ? Rd(o, s) : s.type === "array" && s.items?.type === "object" && Array.isArray(o) && o.forEach((u) => Rd(u, s.items)), s.type === "string" && typeof o != "string" ? t[i] = String(o) : s.type === "array" && s.items?.type === "string" && Array.isArray(o) && (t[i] = o.map(String));
    }
}
function k0(t, r, i = {}) {
  const s = /```(?:\w+\n|\n)?([\s\S]*?)```/, o = t.match(s);
  let u = o ? o[1].trim() : t.trim();
  try {
    switch (r) {
      case "xml":
        if (i.schema) {
          const h = $x.validate(u);
          if (h !== !0)
            throw new Error(`Model response is not valid XML: ${h.err.msg}`);
        }
        let f = Qx.parse(u);
        if (f.root)
          f = f.root;
        else if (f.response)
          return f.response;
        return i.schema && Rd(f, i.schema), f;
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
function jv(t, r) {
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
var Oo = { exports: {} }, No = { exports: {} }, Bn = {}, en = {}, zv;
function nn() {
  if (zv) return en;
  zv = 1, en.__esModule = !0, en.extend = o, en.indexOf = h, en.escapeExpression = g, en.isEmpty = y, en.createFrame = b, en.blockParams = _, en.appendContextPath = v;
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
    for (var S = 1; S < arguments.length; S++)
      for (var x in arguments[S])
        Object.prototype.hasOwnProperty.call(arguments[S], x) && (d[x] = arguments[S][x]);
    return d;
  }
  var u = Object.prototype.toString;
  en.toString = u;
  var f = function(S) {
    return typeof S == "function";
  };
  f(/x/) && (en.isFunction = f = function(d) {
    return typeof d == "function" && u.call(d) === "[object Function]";
  }), en.isFunction = f;
  var p = Array.isArray || function(d) {
    return d && typeof d == "object" ? u.call(d) === "[object Array]" : !1;
  };
  en.isArray = p;
  function h(d, S) {
    for (var x = 0, O = d.length; x < O; x++)
      if (d[x] === S)
        return x;
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
  function y(d) {
    return !d && d !== 0 ? !0 : !!(p(d) && d.length === 0);
  }
  function b(d) {
    var S = o({}, d);
    return S._parent = d, S;
  }
  function _(d, S) {
    return d.path = S, d;
  }
  function v(d, S) {
    return (d ? d + "." : "") + S;
  }
  return en;
}
var Do = { exports: {} }, Lv;
function qn() {
  return Lv || (Lv = 1, (function(t, r) {
    r.__esModule = !0;
    var i = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
    function s(o, u) {
      var f = u && u.loc, p = void 0, h = void 0, g = void 0, y = void 0;
      f && (p = f.start.line, h = f.end.line, g = f.start.column, y = f.end.column, o += " - " + p + ":" + g);
      for (var b = Error.prototype.constructor.call(this, o), _ = 0; _ < i.length; _++)
        this[i[_]] = b[i[_]];
      Error.captureStackTrace && Error.captureStackTrace(this, s);
      try {
        f && (this.lineNumber = p, this.endLineNumber = h, Object.defineProperty ? (Object.defineProperty(this, "column", {
          value: g,
          enumerable: !0
        }), Object.defineProperty(this, "endColumn", {
          value: y,
          enumerable: !0
        })) : (this.column = g, this.endColumn = y));
      } catch {
      }
    }
    s.prototype = new Error(), r.default = s, t.exports = r.default;
  })(Do, Do.exports)), Do.exports;
}
var Hs = {}, Mo = { exports: {} }, Pv;
function Jx() {
  return Pv || (Pv = 1, (function(t, r) {
    r.__esModule = !0;
    var i = nn();
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
var ko = { exports: {} }, Iv;
function Kx() {
  return Iv || (Iv = 1, (function(t, r) {
    r.__esModule = !0;
    function i(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var s = nn(), o = qn(), u = i(o);
    r.default = function(f) {
      f.registerHelper("each", function(p, h) {
        if (!h)
          throw new u.default("Must pass iterator to #each");
        var g = h.fn, y = h.inverse, b = 0, _ = "", v = void 0, d = void 0;
        h.data && h.ids && (d = s.appendContextPath(h.data.contextPath, h.ids[0]) + "."), s.isFunction(p) && (p = p.call(this)), h.data && (v = s.createFrame(h.data));
        function S(E, T, M) {
          v && (v.key = E, v.index = T, v.first = T === 0, v.last = !!M, d && (v.contextPath = d + E)), _ = _ + g(p[E], {
            data: v,
            blockParams: s.blockParams([p[E], E], [d + E, null])
          });
        }
        if (p && typeof p == "object")
          if (s.isArray(p))
            for (var x = p.length; b < x; b++)
              b in p && S(b, b, b === p.length - 1);
          else if (typeof Symbol == "function" && p[Symbol.iterator]) {
            for (var O = [], A = p[Symbol.iterator](), D = A.next(); !D.done; D = A.next())
              O.push(D.value);
            p = O;
            for (var x = p.length; b < x; b++)
              S(b, b, b === p.length - 1);
          } else
            (function() {
              var E = void 0;
              Object.keys(p).forEach(function(T) {
                E !== void 0 && S(E, b - 1), E = T, b++;
              }), E !== void 0 && S(E, b - 1, !0);
            })();
        return b === 0 && (_ = y(this)), _;
      });
    }, t.exports = r.default;
  })(ko, ko.exports)), ko.exports;
}
var Ro = { exports: {} }, Bv;
function Wx() {
  return Bv || (Bv = 1, (function(t, r) {
    r.__esModule = !0;
    function i(u) {
      return u && u.__esModule ? u : { default: u };
    }
    var s = qn(), o = i(s);
    r.default = function(u) {
      u.registerHelper("helperMissing", function() {
        if (arguments.length !== 1)
          throw new o.default('Missing helper: "' + arguments[arguments.length - 1].name + '"');
      });
    }, t.exports = r.default;
  })(Ro, Ro.exports)), Ro.exports;
}
var jo = { exports: {} }, Uv;
function eE() {
  return Uv || (Uv = 1, (function(t, r) {
    r.__esModule = !0;
    function i(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var s = nn(), o = qn(), u = i(o);
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
  })(jo, jo.exports)), jo.exports;
}
var zo = { exports: {} }, Hv;
function tE() {
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
function nE() {
  return qv || (qv = 1, (function(t, r) {
    r.__esModule = !0, r.default = function(i) {
      i.registerHelper("lookup", function(s, o, u) {
        return s && u.lookupProperty(s, o);
      });
    }, t.exports = r.default;
  })(Lo, Lo.exports)), Lo.exports;
}
var Po = { exports: {} }, Zv;
function rE() {
  return Zv || (Zv = 1, (function(t, r) {
    r.__esModule = !0;
    function i(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var s = nn(), o = qn(), u = i(o);
    r.default = function(f) {
      f.registerHelper("with", function(p, h) {
        if (arguments.length != 2)
          throw new u.default("#with requires exactly one argument");
        s.isFunction(p) && (p = p.call(this));
        var g = h.fn;
        if (s.isEmpty(p))
          return h.inverse(this);
        var y = h.data;
        return h.data && h.ids && (y = s.createFrame(h.data), y.contextPath = s.appendContextPath(h.data.contextPath, h.ids[0])), g(p, {
          data: y,
          blockParams: s.blockParams([p], [y && y.contextPath])
        });
      });
    }, t.exports = r.default;
  })(Po, Po.exports)), Po.exports;
}
var Fv;
function R0() {
  if (Fv) return Hs;
  Fv = 1, Hs.__esModule = !0, Hs.registerDefaultHelpers = S, Hs.moveHelperToHooks = x;
  function t(O) {
    return O && O.__esModule ? O : { default: O };
  }
  var r = Jx(), i = t(r), s = Kx(), o = t(s), u = Wx(), f = t(u), p = eE(), h = t(p), g = tE(), y = t(g), b = nE(), _ = t(b), v = rE(), d = t(v);
  function S(O) {
    i.default(O), o.default(O), f.default(O), h.default(O), y.default(O), _.default(O), d.default(O);
  }
  function x(O, A, D) {
    O.helpers[A] && (O.hooks[A] = O.helpers[A], D || delete O.helpers[A]);
  }
  return Hs;
}
var Io = {}, Bo = { exports: {} }, Gv;
function aE() {
  return Gv || (Gv = 1, (function(t, r) {
    r.__esModule = !0;
    var i = nn();
    r.default = function(s) {
      s.registerDecorator("inline", function(o, u, f, p) {
        var h = o;
        return u.partials || (u.partials = {}, h = function(g, y) {
          var b = f.partials;
          f.partials = i.extend({}, b, u.partials);
          var _ = o(g, y);
          return f.partials = b, _;
        }), u.partials[p.args[0]] = p.fn, h;
      });
    }, t.exports = r.default;
  })(Bo, Bo.exports)), Bo.exports;
}
var Vv;
function iE() {
  if (Vv) return Io;
  Vv = 1, Io.__esModule = !0, Io.registerDefaultDecorators = s;
  function t(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var r = aE(), i = t(r);
  function s(o) {
    i.default(o);
  }
  return Io;
}
var Uo = { exports: {} }, Yv;
function j0() {
  return Yv || (Yv = 1, (function(t, r) {
    r.__esModule = !0;
    var i = nn(), s = {
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
var Ti = {}, Ho = {}, Xv;
function sE() {
  if (Xv) return Ho;
  Xv = 1, Ho.__esModule = !0, Ho.createNewLookupObject = r;
  var t = nn();
  function r() {
    for (var i = arguments.length, s = Array(i), o = 0; o < i; o++)
      s[o] = arguments[o];
    return t.extend.apply(void 0, [/* @__PURE__ */ Object.create(null)].concat(s));
  }
  return Ho;
}
var $v;
function z0() {
  if ($v) return Ti;
  $v = 1, Ti.__esModule = !0, Ti.createProtoAccessControl = u, Ti.resultIsAllowed = f, Ti.resetLoggedProperties = g;
  function t(y) {
    return y && y.__esModule ? y : { default: y };
  }
  var r = sE(), i = j0(), s = t(i), o = /* @__PURE__ */ Object.create(null);
  function u(y) {
    var b = /* @__PURE__ */ Object.create(null);
    b.constructor = !1, b.__defineGetter__ = !1, b.__defineSetter__ = !1, b.__lookupGetter__ = !1;
    var _ = /* @__PURE__ */ Object.create(null);
    return _.__proto__ = !1, {
      properties: {
        whitelist: r.createNewLookupObject(_, y.allowedProtoProperties),
        defaultValue: y.allowProtoPropertiesByDefault
      },
      methods: {
        whitelist: r.createNewLookupObject(b, y.allowedProtoMethods),
        defaultValue: y.allowProtoMethodsByDefault
      }
    };
  }
  function f(y, b, _) {
    return p(typeof y == "function" ? b.methods : b.properties, _);
  }
  function p(y, b) {
    return y.whitelist[b] !== void 0 ? y.whitelist[b] === !0 : y.defaultValue !== void 0 ? y.defaultValue : (h(b), !1);
  }
  function h(y) {
    o[y] !== !0 && (o[y] = !0, s.default.log("error", 'Handlebars: Access has been denied to resolve the property "' + y + `" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`));
  }
  function g() {
    Object.keys(o).forEach(function(y) {
      delete o[y];
    });
  }
  return Ti;
}
var Qv;
function th() {
  if (Qv) return Bn;
  Qv = 1, Bn.__esModule = !0, Bn.HandlebarsEnvironment = d;
  function t(x) {
    return x && x.__esModule ? x : { default: x };
  }
  var r = nn(), i = qn(), s = t(i), o = R0(), u = iE(), f = j0(), p = t(f), h = z0(), g = "4.7.8";
  Bn.VERSION = g;
  var y = 8;
  Bn.COMPILER_REVISION = y;
  var b = 7;
  Bn.LAST_COMPATIBLE_COMPILER_REVISION = b;
  var _ = {
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
  Bn.REVISION_CHANGES = _;
  var v = "[object Object]";
  function d(x, O, A) {
    this.helpers = x || {}, this.partials = O || {}, this.decorators = A || {}, o.registerDefaultHelpers(this), u.registerDefaultDecorators(this);
  }
  d.prototype = {
    constructor: d,
    logger: p.default,
    log: p.default.log,
    registerHelper: function(O, A) {
      if (r.toString.call(O) === v) {
        if (A)
          throw new s.default("Arg not supported with multiple helpers");
        r.extend(this.helpers, O);
      } else
        this.helpers[O] = A;
    },
    unregisterHelper: function(O) {
      delete this.helpers[O];
    },
    registerPartial: function(O, A) {
      if (r.toString.call(O) === v)
        r.extend(this.partials, O);
      else {
        if (typeof A > "u")
          throw new s.default('Attempting to register a partial called "' + O + '" as undefined');
        this.partials[O] = A;
      }
    },
    unregisterPartial: function(O) {
      delete this.partials[O];
    },
    registerDecorator: function(O, A) {
      if (r.toString.call(O) === v) {
        if (A)
          throw new s.default("Arg not supported with multiple decorators");
        r.extend(this.decorators, O);
      } else
        this.decorators[O] = A;
    },
    unregisterDecorator: function(O) {
      delete this.decorators[O];
    },
    /**
     * Reset the memory of illegal property accesses that have already been logged.
     * @deprecated should only be used in handlebars test-cases
     */
    resetLoggedPropertyAccesses: function() {
      h.resetLoggedProperties();
    }
  };
  var S = p.default.log;
  return Bn.log = S, Bn.createFrame = r.createFrame, Bn.logger = p.default, Bn;
}
var qo = { exports: {} }, Jv;
function lE() {
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
var yr = {}, Zo = {}, Kv;
function oE() {
  if (Kv) return Zo;
  Kv = 1, Zo.__esModule = !0, Zo.wrapHelper = t;
  function t(r, i) {
    if (typeof r != "function")
      return r;
    var s = function() {
      var u = arguments[arguments.length - 1];
      return arguments[arguments.length - 1] = i(u), r.apply(this, arguments);
    };
    return s;
  }
  return Zo;
}
var Wv;
function uE() {
  if (Wv) return yr;
  Wv = 1, yr.__esModule = !0, yr.checkRevision = y, yr.template = b, yr.wrapProgram = _, yr.resolvePartial = v, yr.invokePartial = d, yr.noop = S;
  function t(E) {
    return E && E.__esModule ? E : { default: E };
  }
  function r(E) {
    if (E && E.__esModule)
      return E;
    var T = {};
    if (E != null)
      for (var M in E)
        Object.prototype.hasOwnProperty.call(E, M) && (T[M] = E[M]);
    return T.default = E, T;
  }
  var i = nn(), s = r(i), o = qn(), u = t(o), f = th(), p = R0(), h = oE(), g = z0();
  function y(E) {
    var T = E && E[0] || 1, M = f.COMPILER_REVISION;
    if (!(T >= f.LAST_COMPATIBLE_COMPILER_REVISION && T <= f.COMPILER_REVISION))
      if (T < f.LAST_COMPATIBLE_COMPILER_REVISION) {
        var k = f.REVISION_CHANGES[M], q = f.REVISION_CHANGES[T];
        throw new u.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + k + ") or downgrade your runtime to an older version (" + q + ").");
      } else
        throw new u.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + E[1] + ").");
  }
  function b(E, T) {
    if (!T)
      throw new u.default("No environment passed to template");
    if (!E || !E.main)
      throw new u.default("Unknown template object: " + typeof E);
    E.main.decorator = E.main_d, T.VM.checkRevision(E.compiler);
    var M = E.compiler && E.compiler[0] === 7;
    function k(B, V, $) {
      $.hash && (V = s.extend({}, V, $.hash), $.ids && ($.ids[0] = !0)), B = T.VM.resolvePartial.call(this, B, V, $);
      var oe = s.extend({}, $, {
        hooks: this.hooks,
        protoAccessControl: this.protoAccessControl
      }), he = T.VM.invokePartial.call(this, B, V, oe);
      if (he == null && T.compile && ($.partials[$.name] = T.compile(B, E.compilerOptions, T), he = $.partials[$.name](V, oe)), he != null) {
        if ($.indent) {
          for (var ge = he.split(`
`), U = 0, ne = ge.length; U < ne && !(!ge[U] && U + 1 === ne); U++)
            ge[U] = $.indent + ge[U];
          he = ge.join(`
`);
        }
        return he;
      } else
        throw new u.default("The partial " + $.name + " could not be compiled when running in runtime-only mode");
    }
    var q = {
      strict: function(V, $, oe) {
        if (!V || !($ in V))
          throw new u.default('"' + $ + '" not defined in ' + V, {
            loc: oe
          });
        return q.lookupProperty(V, $);
      },
      lookupProperty: function(V, $) {
        var oe = V[$];
        if (oe == null || Object.prototype.hasOwnProperty.call(V, $) || g.resultIsAllowed(oe, q.protoAccessControl, $))
          return oe;
      },
      lookup: function(V, $) {
        for (var oe = V.length, he = 0; he < oe; he++) {
          var ge = V[he] && q.lookupProperty(V[he], $);
          if (ge != null)
            return V[he][$];
        }
      },
      lambda: function(V, $) {
        return typeof V == "function" ? V.call($) : V;
      },
      escapeExpression: s.escapeExpression,
      invokePartial: k,
      fn: function(V) {
        var $ = E[V];
        return $.decorator = E[V + "_d"], $;
      },
      programs: [],
      program: function(V, $, oe, he, ge) {
        var U = this.programs[V], ne = this.fn(V);
        return $ || ge || he || oe ? U = _(this, V, ne, $, oe, he, ge) : U || (U = this.programs[V] = _(this, V, ne)), U;
      },
      data: function(V, $) {
        for (; V && $--; )
          V = V._parent;
        return V;
      },
      mergeIfNeeded: function(V, $) {
        var oe = V || $;
        return V && $ && V !== $ && (oe = s.extend({}, $, V)), oe;
      },
      // An empty object to use as replacement for null-contexts
      nullContext: Object.seal({}),
      noop: T.VM.noop,
      compilerInfo: E.compiler
    };
    function G(B) {
      var V = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], $ = V.data;
      G._setup(V), !V.partial && E.useData && ($ = x(B, $));
      var oe = void 0, he = E.useBlockParams ? [] : void 0;
      E.useDepths && (V.depths ? oe = B != V.depths[0] ? [B].concat(V.depths) : V.depths : oe = [B]);
      function ge(U) {
        return "" + E.main(q, U, q.helpers, q.partials, $, he, oe);
      }
      return ge = O(E.main, ge, q, V.depths || [], $, he), ge(B, V);
    }
    return G.isTop = !0, G._setup = function(B) {
      if (B.partial)
        q.protoAccessControl = B.protoAccessControl, q.helpers = B.helpers, q.partials = B.partials, q.decorators = B.decorators, q.hooks = B.hooks;
      else {
        var V = s.extend({}, T.helpers, B.helpers);
        A(V, q), q.helpers = V, E.usePartial && (q.partials = q.mergeIfNeeded(B.partials, T.partials)), (E.usePartial || E.useDecorators) && (q.decorators = s.extend({}, T.decorators, B.decorators)), q.hooks = {}, q.protoAccessControl = g.createProtoAccessControl(B);
        var $ = B.allowCallsToHelperMissing || M;
        p.moveHelperToHooks(q, "helperMissing", $), p.moveHelperToHooks(q, "blockHelperMissing", $);
      }
    }, G._child = function(B, V, $, oe) {
      if (E.useBlockParams && !$)
        throw new u.default("must pass block params");
      if (E.useDepths && !oe)
        throw new u.default("must pass parent depths");
      return _(q, B, E[B], V, 0, $, oe);
    }, G;
  }
  function _(E, T, M, k, q, G, B) {
    function V($) {
      var oe = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], he = B;
      return B && $ != B[0] && !($ === E.nullContext && B[0] === null) && (he = [$].concat(B)), M(E, $, E.helpers, E.partials, oe.data || k, G && [oe.blockParams].concat(G), he);
    }
    return V = O(M, V, E, B, k, G), V.program = T, V.depth = B ? B.length : 0, V.blockParams = q || 0, V;
  }
  function v(E, T, M) {
    return E ? !E.call && !M.name && (M.name = E, E = M.partials[E]) : M.name === "@partial-block" ? E = M.data["partial-block"] : E = M.partials[M.name], E;
  }
  function d(E, T, M) {
    var k = M.data && M.data["partial-block"];
    M.partial = !0, M.ids && (M.data.contextPath = M.ids[0] || M.data.contextPath);
    var q = void 0;
    if (M.fn && M.fn !== S && (function() {
      M.data = f.createFrame(M.data);
      var G = M.fn;
      q = M.data["partial-block"] = function(V) {
        var $ = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
        return $.data = f.createFrame($.data), $.data["partial-block"] = k, G(V, $);
      }, G.partials && (M.partials = s.extend({}, M.partials, G.partials));
    })(), E === void 0 && q && (E = q), E === void 0)
      throw new u.default("The partial " + M.name + " could not be found");
    if (E instanceof Function)
      return E(T, M);
  }
  function S() {
    return "";
  }
  function x(E, T) {
    return (!T || !("root" in T)) && (T = T ? f.createFrame(T) : {}, T.root = E), T;
  }
  function O(E, T, M, k, q, G) {
    if (E.decorator) {
      var B = {};
      T = E.decorator(T, B, M, k && k[0], q, G, k), s.extend(T, B);
    }
    return T;
  }
  function A(E, T) {
    Object.keys(E).forEach(function(M) {
      var k = E[M];
      E[M] = D(k, T);
    });
  }
  function D(E, T) {
    var M = T.lookupProperty;
    return h.wrapHelper(E, function(k) {
      return s.extend({ lookupProperty: M }, k);
    });
  }
  return yr;
}
var Fo = { exports: {} }, ey;
function L0() {
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
  })(Fo, Fo.exports)), Fo.exports;
}
var ty;
function cE() {
  return ty || (ty = 1, (function(t, r) {
    r.__esModule = !0;
    function i(A) {
      return A && A.__esModule ? A : { default: A };
    }
    function s(A) {
      if (A && A.__esModule)
        return A;
      var D = {};
      if (A != null)
        for (var E in A)
          Object.prototype.hasOwnProperty.call(A, E) && (D[E] = A[E]);
      return D.default = A, D;
    }
    var o = th(), u = s(o), f = lE(), p = i(f), h = qn(), g = i(h), y = nn(), b = s(y), _ = uE(), v = s(_), d = L0(), S = i(d);
    function x() {
      var A = new u.HandlebarsEnvironment();
      return b.extend(A, u), A.SafeString = p.default, A.Exception = g.default, A.Utils = b, A.escapeExpression = b.escapeExpression, A.VM = v, A.template = function(D) {
        return v.template(D, A);
      }, A;
    }
    var O = x();
    O.create = x, S.default(O), O.default = O, r.default = O, t.exports = r.default;
  })(No, No.exports)), No.exports;
}
var Go = { exports: {} }, ny;
function P0() {
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
var Oi = {}, Vo = { exports: {} }, ry;
function fE() {
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
        performAction: function(p, h, g, y, b, _, v) {
          var d = _.length - 1;
          switch (b) {
            case 1:
              return _[d - 1];
            case 2:
              this.$ = y.prepareProgram(_[d]);
              break;
            case 3:
              this.$ = _[d];
              break;
            case 4:
              this.$ = _[d];
              break;
            case 5:
              this.$ = _[d];
              break;
            case 6:
              this.$ = _[d];
              break;
            case 7:
              this.$ = _[d];
              break;
            case 8:
              this.$ = _[d];
              break;
            case 9:
              this.$ = {
                type: "CommentStatement",
                value: y.stripComment(_[d]),
                strip: y.stripFlags(_[d], _[d]),
                loc: y.locInfo(this._$)
              };
              break;
            case 10:
              this.$ = {
                type: "ContentStatement",
                original: _[d],
                value: _[d],
                loc: y.locInfo(this._$)
              };
              break;
            case 11:
              this.$ = y.prepareRawBlock(_[d - 2], _[d - 1], _[d], this._$);
              break;
            case 12:
              this.$ = { path: _[d - 3], params: _[d - 2], hash: _[d - 1] };
              break;
            case 13:
              this.$ = y.prepareBlock(_[d - 3], _[d - 2], _[d - 1], _[d], !1, this._$);
              break;
            case 14:
              this.$ = y.prepareBlock(_[d - 3], _[d - 2], _[d - 1], _[d], !0, this._$);
              break;
            case 15:
              this.$ = { open: _[d - 5], path: _[d - 4], params: _[d - 3], hash: _[d - 2], blockParams: _[d - 1], strip: y.stripFlags(_[d - 5], _[d]) };
              break;
            case 16:
              this.$ = { path: _[d - 4], params: _[d - 3], hash: _[d - 2], blockParams: _[d - 1], strip: y.stripFlags(_[d - 5], _[d]) };
              break;
            case 17:
              this.$ = { path: _[d - 4], params: _[d - 3], hash: _[d - 2], blockParams: _[d - 1], strip: y.stripFlags(_[d - 5], _[d]) };
              break;
            case 18:
              this.$ = { strip: y.stripFlags(_[d - 1], _[d - 1]), program: _[d] };
              break;
            case 19:
              var S = y.prepareBlock(_[d - 2], _[d - 1], _[d], _[d], !1, this._$), x = y.prepareProgram([S], _[d - 1].loc);
              x.chained = !0, this.$ = { strip: _[d - 2].strip, program: x, chain: !0 };
              break;
            case 20:
              this.$ = _[d];
              break;
            case 21:
              this.$ = { path: _[d - 1], strip: y.stripFlags(_[d - 2], _[d]) };
              break;
            case 22:
              this.$ = y.prepareMustache(_[d - 3], _[d - 2], _[d - 1], _[d - 4], y.stripFlags(_[d - 4], _[d]), this._$);
              break;
            case 23:
              this.$ = y.prepareMustache(_[d - 3], _[d - 2], _[d - 1], _[d - 4], y.stripFlags(_[d - 4], _[d]), this._$);
              break;
            case 24:
              this.$ = {
                type: "PartialStatement",
                name: _[d - 3],
                params: _[d - 2],
                hash: _[d - 1],
                indent: "",
                strip: y.stripFlags(_[d - 4], _[d]),
                loc: y.locInfo(this._$)
              };
              break;
            case 25:
              this.$ = y.preparePartialBlock(_[d - 2], _[d - 1], _[d], this._$);
              break;
            case 26:
              this.$ = { path: _[d - 3], params: _[d - 2], hash: _[d - 1], strip: y.stripFlags(_[d - 4], _[d]) };
              break;
            case 27:
              this.$ = _[d];
              break;
            case 28:
              this.$ = _[d];
              break;
            case 29:
              this.$ = {
                type: "SubExpression",
                path: _[d - 3],
                params: _[d - 2],
                hash: _[d - 1],
                loc: y.locInfo(this._$)
              };
              break;
            case 30:
              this.$ = { type: "Hash", pairs: _[d], loc: y.locInfo(this._$) };
              break;
            case 31:
              this.$ = { type: "HashPair", key: y.id(_[d - 2]), value: _[d], loc: y.locInfo(this._$) };
              break;
            case 32:
              this.$ = y.id(_[d - 1]);
              break;
            case 33:
              this.$ = _[d];
              break;
            case 34:
              this.$ = _[d];
              break;
            case 35:
              this.$ = { type: "StringLiteral", value: _[d], original: _[d], loc: y.locInfo(this._$) };
              break;
            case 36:
              this.$ = { type: "NumberLiteral", value: Number(_[d]), original: Number(_[d]), loc: y.locInfo(this._$) };
              break;
            case 37:
              this.$ = { type: "BooleanLiteral", value: _[d] === "true", original: _[d] === "true", loc: y.locInfo(this._$) };
              break;
            case 38:
              this.$ = { type: "UndefinedLiteral", original: void 0, value: void 0, loc: y.locInfo(this._$) };
              break;
            case 39:
              this.$ = { type: "NullLiteral", original: null, value: null, loc: y.locInfo(this._$) };
              break;
            case 40:
              this.$ = _[d];
              break;
            case 41:
              this.$ = _[d];
              break;
            case 42:
              this.$ = y.preparePath(!0, _[d], this._$);
              break;
            case 43:
              this.$ = y.preparePath(!1, _[d], this._$);
              break;
            case 44:
              _[d - 2].push({ part: y.id(_[d]), original: _[d], separator: _[d - 1] }), this.$ = _[d - 2];
              break;
            case 45:
              this.$ = [{ part: y.id(_[d]), original: _[d] }];
              break;
            case 46:
              this.$ = [];
              break;
            case 47:
              _[d - 1].push(_[d]);
              break;
            case 48:
              this.$ = [];
              break;
            case 49:
              _[d - 1].push(_[d]);
              break;
            case 50:
              this.$ = [];
              break;
            case 51:
              _[d - 1].push(_[d]);
              break;
            case 58:
              this.$ = [];
              break;
            case 59:
              _[d - 1].push(_[d]);
              break;
            case 64:
              this.$ = [];
              break;
            case 65:
              _[d - 1].push(_[d]);
              break;
            case 70:
              this.$ = [];
              break;
            case 71:
              _[d - 1].push(_[d]);
              break;
            case 78:
              this.$ = [];
              break;
            case 79:
              _[d - 1].push(_[d]);
              break;
            case 82:
              this.$ = [];
              break;
            case 83:
              _[d - 1].push(_[d]);
              break;
            case 86:
              this.$ = [];
              break;
            case 87:
              _[d - 1].push(_[d]);
              break;
            case 90:
              this.$ = [];
              break;
            case 91:
              _[d - 1].push(_[d]);
              break;
            case 94:
              this.$ = [];
              break;
            case 95:
              _[d - 1].push(_[d]);
              break;
            case 98:
              this.$ = [_[d]];
              break;
            case 99:
              _[d - 1].push(_[d]);
              break;
            case 100:
              this.$ = [_[d]];
              break;
            case 101:
              _[d - 1].push(_[d]);
              break;
          }
        },
        table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 15: [2, 48], 17: 39, 18: [2, 48] }, { 20: 41, 56: 40, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 44, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 45, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 41, 56: 48, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 49, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 50] }, { 72: [1, 35], 86: 51 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 52, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 53, 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 54, 47: [2, 54] }, { 28: 59, 43: 60, 44: [1, 58], 47: [2, 56] }, { 13: 62, 15: [1, 20], 18: [1, 61] }, { 33: [2, 86], 57: 63, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 64, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 65, 47: [1, 66] }, { 30: 67, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 68, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 69, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 70, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 74, 33: [2, 80], 50: 71, 63: 72, 64: 75, 65: [1, 43], 69: 73, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 79] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 50] }, { 20: 74, 53: 80, 54: [2, 84], 63: 81, 64: 75, 65: [1, 43], 69: 82, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 83, 47: [1, 66] }, { 47: [2, 55] }, { 4: 84, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 85, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 86, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 87, 47: [1, 66] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 74, 33: [2, 88], 58: 88, 63: 89, 64: 75, 65: [1, 43], 69: 90, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 91, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 92, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 31: 93, 33: [2, 60], 63: 94, 64: 75, 65: [1, 43], 69: 95, 70: 76, 71: 77, 72: [1, 78], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 66], 36: 96, 63: 97, 64: 75, 65: [1, 43], 69: 98, 70: 76, 71: 77, 72: [1, 78], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 22: 99, 23: [2, 52], 63: 100, 64: 75, 65: [1, 43], 69: 101, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 92], 62: 102, 63: 103, 64: 75, 65: [1, 43], 69: 104, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 105] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 106, 72: [1, 107], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 108], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 109] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 111, 46: 110, 47: [2, 76] }, { 33: [2, 70], 40: 112, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 113] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 74, 63: 115, 64: 75, 65: [1, 43], 67: 114, 68: [2, 96], 69: 116, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 117] }, { 32: 118, 33: [2, 62], 74: 119, 75: [1, 120] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 121, 74: 122, 75: [1, 120] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 123] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 124] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 108] }, { 20: 74, 63: 125, 64: 75, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 74, 33: [2, 72], 41: 126, 63: 127, 64: 75, 65: [1, 43], 69: 128, 70: 76, 71: 77, 72: [1, 78], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 129] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 130] }, { 33: [2, 63] }, { 72: [1, 132], 76: 131 }, { 33: [1, 133] }, { 33: [2, 69] }, { 15: [2, 12], 18: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 134, 74: 135, 75: [1, 120] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 137], 77: [1, 136] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 138] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
        defaultActions: { 4: [2, 1], 54: [2, 55], 56: [2, 20], 60: [2, 57], 73: [2, 81], 82: [2, 85], 86: [2, 18], 90: [2, 89], 101: [2, 53], 104: [2, 93], 110: [2, 19], 111: [2, 77], 116: [2, 97], 119: [2, 63], 122: [2, 69], 135: [2, 75], 136: [2, 32] },
        parseError: function(p, h) {
          throw new Error(p);
        },
        parse: function(p) {
          var h = this, g = [0], y = [null], b = [], _ = this.table, v = "", d = 0, S = 0;
          this.lexer.setInput(p), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc > "u" && (this.lexer.yylloc = {});
          var x = this.lexer.yylloc;
          b.push(x);
          var O = this.lexer.options && this.lexer.options.ranges;
          typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
          function A() {
            var oe;
            return oe = h.lexer.lex() || 1, typeof oe != "number" && (oe = h.symbols_[oe] || oe), oe;
          }
          for (var D, E, T, M, k = {}, q, G, B, V; ; ) {
            if (E = g[g.length - 1], this.defaultActions[E] ? T = this.defaultActions[E] : ((D === null || typeof D > "u") && (D = A()), T = _[E] && _[E][D]), typeof T > "u" || !T.length || !T[0]) {
              var $ = "";
              {
                V = [];
                for (q in _[E]) this.terminals_[q] && q > 2 && V.push("'" + this.terminals_[q] + "'");
                this.lexer.showPosition ? $ = "Parse error on line " + (d + 1) + `:
` + this.lexer.showPosition() + `
Expecting ` + V.join(", ") + ", got '" + (this.terminals_[D] || D) + "'" : $ = "Parse error on line " + (d + 1) + ": Unexpected " + (D == 1 ? "end of input" : "'" + (this.terminals_[D] || D) + "'"), this.parseError($, { text: this.lexer.match, token: this.terminals_[D] || D, line: this.lexer.yylineno, loc: x, expected: V });
              }
            }
            if (T[0] instanceof Array && T.length > 1)
              throw new Error("Parse Error: multiple actions possible at state: " + E + ", token: " + D);
            switch (T[0]) {
              case 1:
                g.push(D), y.push(this.lexer.yytext), b.push(this.lexer.yylloc), g.push(T[1]), D = null, S = this.lexer.yyleng, v = this.lexer.yytext, d = this.lexer.yylineno, x = this.lexer.yylloc;
                break;
              case 2:
                if (G = this.productions_[T[1]][1], k.$ = y[y.length - G], k._$ = { first_line: b[b.length - (G || 1)].first_line, last_line: b[b.length - 1].last_line, first_column: b[b.length - (G || 1)].first_column, last_column: b[b.length - 1].last_column }, O && (k._$.range = [b[b.length - (G || 1)].range[0], b[b.length - 1].range[1]]), M = this.performAction.call(k, v, S, d, this.yy, T[1], y, b), typeof M < "u")
                  return M;
                G && (g = g.slice(0, -1 * G * 2), y = y.slice(0, -1 * G), b = b.slice(0, -1 * G)), g.push(this.productions_[T[1]][0]), y.push(k.$), b.push(k._$), B = _[g[g.length - 2]][g[g.length - 1]], g.push(B);
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
            var g = h.length, y = h.split(/(?:\r\n?|\n)/g);
            this._input = h + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - g - 1), this.offset -= g;
            var b = this.match.split(/(?:\r\n?|\n)/g);
            this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), y.length - 1 && (this.yylineno -= y.length - 1);
            var _ = this.yylloc.range;
            return this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: y ? (y.length === b.length ? this.yylloc.first_column : 0) + b[b.length - y.length].length - y[0].length : this.yylloc.first_column - g
            }, this.options.ranges && (this.yylloc.range = [_[0], _[0] + this.yyleng - g]), this;
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
            var h, g, y, b, _;
            this._more || (this.yytext = "", this.match = "");
            for (var v = this._currentRules(), d = 0; d < v.length && (y = this._input.match(this.rules[v[d]]), !(y && (!g || y[0].length > g[0].length) && (g = y, b = d, !this.options.flex))); d++)
              ;
            return g ? (_ = g[0].match(/(?:\r\n?|\n).*/g), _ && (this.yylineno += _.length), this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: _ ? _[_.length - 1].length - _[_.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + g[0].length
            }, this.yytext += g[0], this.match += g[0], this.matches = g, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(g[0].length), this.matched += g[0], h = this.performAction.call(this, this.yy, this, v[b], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), h || void 0) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
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
        return f.options = {}, f.performAction = function(h, g, y, b) {
          function _(v, d) {
            return g.yytext = g.yytext.substring(v, g.yyleng - d + v);
          }
          switch (y) {
            case 0:
              if (g.yytext.slice(-2) === "\\\\" ? (_(0, 1), this.begin("mu")) : g.yytext.slice(-1) === "\\" ? (_(0, 1), this.begin("emu")) : this.begin("mu"), g.yytext) return 15;
              break;
            case 1:
              return 15;
            case 2:
              return this.popState(), 15;
            case 3:
              return this.begin("raw"), 15;
            case 4:
              return this.popState(), this.conditionStack[this.conditionStack.length - 1] === "raw" ? 15 : (_(5, 9), "END_RAW_BLOCK");
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
              return g.yytext = _(1, 2).replace(/\\"/g, '"'), 80;
            case 32:
              return g.yytext = _(1, 2).replace(/\\'/g, "'"), 80;
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
function I0() {
  return ay || (ay = 1, (function(t, r) {
    r.__esModule = !0;
    function i(g) {
      return g && g.__esModule ? g : { default: g };
    }
    var s = qn(), o = i(s);
    function u() {
      this.parents = [];
    }
    u.prototype = {
      constructor: u,
      mutating: !1,
      // Visits a given value. If mutating, will replace the value if necessary.
      acceptKey: function(y, b) {
        var _ = this.accept(y[b]);
        if (this.mutating) {
          if (_ && !u.prototype[_.type])
            throw new o.default('Unexpected node type "' + _.type + '" found when accepting ' + b + " on " + y.type);
          y[b] = _;
        }
      },
      // Performs an accept operation with added sanity check to ensure
      // required keys are not removed.
      acceptRequired: function(y, b) {
        if (this.acceptKey(y, b), !y[b])
          throw new o.default(y.type + " requires " + b);
      },
      // Traverses a given array. If mutating, empty respnses will be removed
      // for child elements.
      acceptArray: function(y) {
        for (var b = 0, _ = y.length; b < _; b++)
          this.acceptKey(y, b), y[b] || (y.splice(b, 1), b--, _--);
      },
      accept: function(y) {
        if (y) {
          if (!this[y.type])
            throw new o.default("Unknown type: " + y.type, y);
          this.current && this.parents.unshift(this.current), this.current = y;
          var b = this[y.type](y);
          if (this.current = this.parents.shift(), !this.mutating || b)
            return b;
          if (b !== !1)
            return y;
        }
      },
      Program: function(y) {
        this.acceptArray(y.body);
      },
      MustacheStatement: f,
      Decorator: f,
      BlockStatement: p,
      DecoratorBlock: p,
      PartialStatement: h,
      PartialBlockStatement: function(y) {
        h.call(this, y), this.acceptKey(y, "program");
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
      Hash: function(y) {
        this.acceptArray(y.pairs);
      },
      HashPair: function(y) {
        this.acceptRequired(y, "value");
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
function dE() {
  return iy || (iy = 1, (function(t, r) {
    r.__esModule = !0;
    function i(y) {
      return y && y.__esModule ? y : { default: y };
    }
    var s = I0(), o = i(s);
    function u() {
      var y = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
      this.options = y;
    }
    u.prototype = new o.default(), u.prototype.Program = function(y) {
      var b = !this.options.ignoreStandalone, _ = !this.isRootSeen;
      this.isRootSeen = !0;
      for (var v = y.body, d = 0, S = v.length; d < S; d++) {
        var x = v[d], O = this.accept(x);
        if (O) {
          var A = f(v, d, _), D = p(v, d, _), E = O.openStandalone && A, T = O.closeStandalone && D, M = O.inlineStandalone && A && D;
          O.close && h(v, d, !0), O.open && g(v, d, !0), b && M && (h(v, d), g(v, d) && x.type === "PartialStatement" && (x.indent = /([ \t]+$)/.exec(v[d - 1].original)[1])), b && E && (h((x.program || x.inverse).body), g(v, d)), b && T && (h(v, d), g((x.inverse || x.program).body));
        }
      }
      return y;
    }, u.prototype.BlockStatement = u.prototype.DecoratorBlock = u.prototype.PartialBlockStatement = function(y) {
      this.accept(y.program), this.accept(y.inverse);
      var b = y.program || y.inverse, _ = y.program && y.inverse, v = _, d = _;
      if (_ && _.chained)
        for (v = _.body[0].program; d.chained; )
          d = d.body[d.body.length - 1].program;
      var S = {
        open: y.openStrip.open,
        close: y.closeStrip.close,
        // Determine the standalone candiacy. Basically flag our content as being possibly standalone
        // so our parent can determine if we actually are standalone
        openStandalone: p(b.body),
        closeStandalone: f((v || b).body)
      };
      if (y.openStrip.close && h(b.body, null, !0), _) {
        var x = y.inverseStrip;
        x.open && g(b.body, null, !0), x.close && h(v.body, null, !0), y.closeStrip.open && g(d.body, null, !0), !this.options.ignoreStandalone && f(b.body) && p(v.body) && (g(b.body), h(v.body));
      } else y.closeStrip.open && g(b.body, null, !0);
      return S;
    }, u.prototype.Decorator = u.prototype.MustacheStatement = function(y) {
      return y.strip;
    }, u.prototype.PartialStatement = u.prototype.CommentStatement = function(y) {
      var b = y.strip || {};
      return {
        inlineStandalone: !0,
        open: b.open,
        close: b.close
      };
    };
    function f(y, b, _) {
      b === void 0 && (b = y.length);
      var v = y[b - 1], d = y[b - 2];
      if (!v)
        return _;
      if (v.type === "ContentStatement")
        return (d || !_ ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(v.original);
    }
    function p(y, b, _) {
      b === void 0 && (b = -1);
      var v = y[b + 1], d = y[b + 2];
      if (!v)
        return _;
      if (v.type === "ContentStatement")
        return (d || !_ ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(v.original);
    }
    function h(y, b, _) {
      var v = y[b == null ? 0 : b + 1];
      if (!(!v || v.type !== "ContentStatement" || !_ && v.rightStripped)) {
        var d = v.value;
        v.value = v.value.replace(_ ? /^\s+/ : /^[ \t]*\r?\n?/, ""), v.rightStripped = v.value !== d;
      }
    }
    function g(y, b, _) {
      var v = y[b == null ? y.length - 1 : b - 1];
      if (!(!v || v.type !== "ContentStatement" || !_ && v.leftStripped)) {
        var d = v.value;
        return v.value = v.value.replace(_ ? /\s+$/ : /[ \t]+$/, ""), v.leftStripped = v.value !== d, v.leftStripped;
      }
    }
    r.default = u, t.exports = r.default;
  })(Yo, Yo.exports)), Yo.exports;
}
var dn = {}, sy;
function hE() {
  if (sy) return dn;
  sy = 1, dn.__esModule = !0, dn.SourceLocation = o, dn.id = u, dn.stripFlags = f, dn.stripComment = p, dn.preparePath = h, dn.prepareMustache = g, dn.prepareRawBlock = y, dn.prepareBlock = b, dn.prepareProgram = _, dn.preparePartialBlock = v;
  function t(d) {
    return d && d.__esModule ? d : { default: d };
  }
  var r = qn(), i = t(r);
  function s(d, S) {
    if (S = S.path ? S.path.original : S, d.path.original !== S) {
      var x = { loc: d.path.loc };
      throw new i.default(d.path.original + " doesn't match " + S, x);
    }
  }
  function o(d, S) {
    this.source = d, this.start = {
      line: S.first_line,
      column: S.first_column
    }, this.end = {
      line: S.last_line,
      column: S.last_column
    };
  }
  function u(d) {
    return /^\[.*\]$/.test(d) ? d.substring(1, d.length - 1) : d;
  }
  function f(d, S) {
    return {
      open: d.charAt(2) === "~",
      close: S.charAt(S.length - 3) === "~"
    };
  }
  function p(d) {
    return d.replace(/^\{\{~?!-?-?/, "").replace(/-?-?~?\}\}$/, "");
  }
  function h(d, S, x) {
    x = this.locInfo(x);
    for (var O = d ? "@" : "", A = [], D = 0, E = 0, T = S.length; E < T; E++) {
      var M = S[E].part, k = S[E].original !== M;
      if (O += (S[E].separator || "") + M, !k && (M === ".." || M === "." || M === "this")) {
        if (A.length > 0)
          throw new i.default("Invalid path: " + O, { loc: x });
        M === ".." && D++;
      } else
        A.push(M);
    }
    return {
      type: "PathExpression",
      data: d,
      depth: D,
      parts: A,
      original: O,
      loc: x
    };
  }
  function g(d, S, x, O, A, D) {
    var E = O.charAt(3) || O.charAt(2), T = E !== "{" && E !== "&", M = /\*/.test(O);
    return {
      type: M ? "Decorator" : "MustacheStatement",
      path: d,
      params: S,
      hash: x,
      escaped: T,
      strip: A,
      loc: this.locInfo(D)
    };
  }
  function y(d, S, x, O) {
    s(d, x), O = this.locInfo(O);
    var A = {
      type: "Program",
      body: S,
      strip: {},
      loc: O
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
      loc: O
    };
  }
  function b(d, S, x, O, A, D) {
    O && O.path && s(d, O);
    var E = /\*/.test(d.open);
    S.blockParams = d.blockParams;
    var T = void 0, M = void 0;
    if (x) {
      if (E)
        throw new i.default("Unexpected inverse block on decorator", x);
      x.chain && (x.program.body[0].closeStrip = O.strip), M = x.strip, T = x.program;
    }
    return A && (A = T, T = S, S = A), {
      type: E ? "DecoratorBlock" : "BlockStatement",
      path: d.path,
      params: d.params,
      hash: d.hash,
      program: S,
      inverse: T,
      openStrip: d.strip,
      inverseStrip: M,
      closeStrip: O && O.strip,
      loc: this.locInfo(D)
    };
  }
  function _(d, S) {
    if (!S && d.length) {
      var x = d[0].loc, O = d[d.length - 1].loc;
      x && O && (S = {
        source: x.source,
        start: {
          line: x.start.line,
          column: x.start.column
        },
        end: {
          line: O.end.line,
          column: O.end.column
        }
      });
    }
    return {
      type: "Program",
      body: d,
      strip: {},
      loc: S
    };
  }
  function v(d, S, x, O) {
    return s(d, x), {
      type: "PartialBlockStatement",
      name: d.path,
      params: d.params,
      hash: d.hash,
      program: S,
      openStrip: d.strip,
      closeStrip: x && x.strip,
      loc: this.locInfo(O)
    };
  }
  return dn;
}
var ly;
function pE() {
  if (ly) return Oi;
  ly = 1, Oi.__esModule = !0, Oi.parseWithoutProcessing = y, Oi.parse = b;
  function t(_) {
    if (_ && _.__esModule)
      return _;
    var v = {};
    if (_ != null)
      for (var d in _)
        Object.prototype.hasOwnProperty.call(_, d) && (v[d] = _[d]);
    return v.default = _, v;
  }
  function r(_) {
    return _ && _.__esModule ? _ : { default: _ };
  }
  var i = fE(), s = r(i), o = dE(), u = r(o), f = hE(), p = t(f), h = nn();
  Oi.parser = s.default;
  var g = {};
  h.extend(g, p);
  function y(_, v) {
    if (_.type === "Program")
      return _;
    s.default.yy = g, g.locInfo = function(S) {
      return new g.SourceLocation(v && v.srcName, S);
    };
    var d = s.default.parse(_);
    return d;
  }
  function b(_, v) {
    var d = y(_, v), S = new u.default(v);
    return S.accept(d);
  }
  return Oi;
}
var Ni = {}, oy;
function mE() {
  if (oy) return Ni;
  oy = 1, Ni.__esModule = !0, Ni.Compiler = p, Ni.precompile = h, Ni.compile = g;
  function t(_) {
    return _ && _.__esModule ? _ : { default: _ };
  }
  var r = qn(), i = t(r), s = nn(), o = P0(), u = t(o), f = [].slice;
  function p() {
  }
  p.prototype = {
    compiler: p,
    equals: function(v) {
      var d = this.opcodes.length;
      if (v.opcodes.length !== d)
        return !1;
      for (var S = 0; S < d; S++) {
        var x = this.opcodes[S], O = v.opcodes[S];
        if (x.opcode !== O.opcode || !y(x.args, O.args))
          return !1;
      }
      d = this.children.length;
      for (var S = 0; S < d; S++)
        if (!this.children[S].equals(v.children[S]))
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
      var d = new this.compiler(), S = d.compile(v, this.options), x = this.guid++;
      return this.usePartial = this.usePartial || S.usePartial, this.children[x] = S, this.useDepths = this.useDepths || S.useDepths, x;
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
      for (var d = v.body, S = d.length, x = 0; x < S; x++)
        this.accept(d[x]);
      return this.options.blockParams.shift(), this.isSimple = S === 1, this.blockParams = v.blockParams ? v.blockParams.length : 0, this;
    },
    BlockStatement: function(v) {
      b(v);
      var d = v.program, S = v.inverse;
      d = d && this.compileProgram(d), S = S && this.compileProgram(S);
      var x = this.classifySexpr(v);
      x === "helper" ? this.helperSexpr(v, d, S) : x === "simple" ? (this.simpleSexpr(v), this.opcode("pushProgram", d), this.opcode("pushProgram", S), this.opcode("emptyHash"), this.opcode("blockValue", v.path.original)) : (this.ambiguousSexpr(v, d, S), this.opcode("pushProgram", d), this.opcode("pushProgram", S), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append");
    },
    DecoratorBlock: function(v) {
      var d = v.program && this.compileProgram(v.program), S = this.setupFullMustacheParams(v, d, void 0), x = v.path;
      this.useDecorators = !0, this.opcode("registerDecorator", S.length, x.original);
    },
    PartialStatement: function(v) {
      this.usePartial = !0;
      var d = v.program;
      d && (d = this.compileProgram(v.program));
      var S = v.params;
      if (S.length > 1)
        throw new i.default("Unsupported number of partial arguments: " + S.length, v);
      S.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : S.push({ type: "PathExpression", parts: [], depth: 0 }));
      var x = v.name.original, O = v.name.type === "SubExpression";
      O && this.accept(v.name), this.setupFullMustacheParams(v, d, void 0, !0);
      var A = v.indent || "";
      this.options.preventIndent && A && (this.opcode("appendContent", A), A = ""), this.opcode("invokePartial", O, x, A), this.opcode("append");
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
      b(v);
      var d = this.classifySexpr(v);
      d === "simple" ? this.simpleSexpr(v) : d === "helper" ? this.helperSexpr(v) : this.ambiguousSexpr(v);
    },
    ambiguousSexpr: function(v, d, S) {
      var x = v.path, O = x.parts[0], A = d != null || S != null;
      this.opcode("getContext", x.depth), this.opcode("pushProgram", d), this.opcode("pushProgram", S), x.strict = !0, this.accept(x), this.opcode("invokeAmbiguous", O, A);
    },
    simpleSexpr: function(v) {
      var d = v.path;
      d.strict = !0, this.accept(d), this.opcode("resolvePossibleLambda");
    },
    helperSexpr: function(v, d, S) {
      var x = this.setupFullMustacheParams(v, d, S), O = v.path, A = O.parts[0];
      if (this.options.knownHelpers[A])
        this.opcode("invokeKnownHelper", x.length, A);
      else {
        if (this.options.knownHelpersOnly)
          throw new i.default("You specified knownHelpersOnly, but used the unknown helper " + A, v);
        O.strict = !0, O.falsy = !0, this.accept(O), this.opcode("invokeHelper", x.length, O.original, u.default.helpers.simpleId(O));
      }
    },
    PathExpression: function(v) {
      this.addDepth(v.depth), this.opcode("getContext", v.depth);
      var d = v.parts[0], S = u.default.helpers.scopedId(v), x = !v.depth && !S && this.blockParamIndex(d);
      x ? this.opcode("lookupBlockParam", x, v.parts) : d ? v.data ? (this.options.data = !0, this.opcode("lookupData", v.depth, v.parts, v.strict)) : this.opcode("lookupOnContext", v.parts, v.falsy, v.strict, S) : this.opcode("pushContext");
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
      var d = v.pairs, S = 0, x = d.length;
      for (this.opcode("pushHash"); S < x; S++)
        this.pushParam(d[S].value);
      for (; S--; )
        this.opcode("assignToHash", d[S].key);
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
      var d = u.default.helpers.simpleId(v.path), S = d && !!this.blockParamIndex(v.path.parts[0]), x = !S && u.default.helpers.helperExpression(v), O = !S && (x || d);
      if (O && !x) {
        var A = v.path.parts[0], D = this.options;
        D.knownHelpers[A] ? x = !0 : D.knownHelpersOnly && (O = !1);
      }
      return x ? "helper" : O ? "ambiguous" : "simple";
    },
    pushParams: function(v) {
      for (var d = 0, S = v.length; d < S; d++)
        this.pushParam(v[d]);
    },
    pushParam: function(v) {
      var d = v.value != null ? v.value : v.original || "";
      if (this.stringParams)
        d.replace && (d = d.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), v.depth && this.addDepth(v.depth), this.opcode("getContext", v.depth || 0), this.opcode("pushStringParam", d, v.type), v.type === "SubExpression" && this.accept(v);
      else {
        if (this.trackIds) {
          var S = void 0;
          if (v.parts && !u.default.helpers.scopedId(v) && !v.depth && (S = this.blockParamIndex(v.parts[0])), S) {
            var x = v.parts.slice(1).join(".");
            this.opcode("pushId", "BlockParam", S, x);
          } else
            d = v.original || d, d.replace && (d = d.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")), this.opcode("pushId", v.type, d);
        }
        this.accept(v);
      }
    },
    setupFullMustacheParams: function(v, d, S, x) {
      var O = v.params;
      return this.pushParams(O), this.opcode("pushProgram", d), this.opcode("pushProgram", S), v.hash ? this.accept(v.hash) : this.opcode("emptyHash", x), O;
    },
    blockParamIndex: function(v) {
      for (var d = 0, S = this.options.blockParams.length; d < S; d++) {
        var x = this.options.blockParams[d], O = x && s.indexOf(x, v);
        if (x && O >= 0)
          return [d, O];
      }
    }
  };
  function h(_, v, d) {
    if (_ == null || typeof _ != "string" && _.type !== "Program")
      throw new i.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + _);
    v = v || {}, "data" in v || (v.data = !0), v.compat && (v.useDepths = !0);
    var S = d.parse(_, v), x = new d.Compiler().compile(S, v);
    return new d.JavaScriptCompiler().compile(x, v);
  }
  function g(_, v, d) {
    if (v === void 0 && (v = {}), _ == null || typeof _ != "string" && _.type !== "Program")
      throw new i.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + _);
    v = s.extend({}, v), "data" in v || (v.data = !0), v.compat && (v.useDepths = !0);
    var S = void 0;
    function x() {
      var A = d.parse(_, v), D = new d.Compiler().compile(A, v), E = new d.JavaScriptCompiler().compile(D, v, void 0, !0);
      return d.template(E);
    }
    function O(A, D) {
      return S || (S = x()), S.call(this, A, D);
    }
    return O._setup = function(A) {
      return S || (S = x()), S._setup(A);
    }, O._child = function(A, D, E, T) {
      return S || (S = x()), S._child(A, D, E, T);
    }, O;
  }
  function y(_, v) {
    if (_ === v)
      return !0;
    if (s.isArray(_) && s.isArray(v) && _.length === v.length) {
      for (var d = 0; d < _.length; d++)
        if (!y(_[d], v[d]))
          return !1;
      return !0;
    }
  }
  function b(_) {
    if (!_.path.parts) {
      var v = _.path;
      _.path = {
        type: "PathExpression",
        data: !1,
        depth: 0,
        parts: [v.original + ""],
        original: v.original + "",
        loc: v.loc
      };
    }
  }
  return Ni;
}
var $o = { exports: {} }, Qo = { exports: {} }, qs = {}, sd = {}, Jo = {}, Ko = {}, uy;
function gE() {
  if (uy) return Ko;
  uy = 1;
  var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return Ko.encode = function(r) {
    if (0 <= r && r < t.length)
      return t[r];
    throw new TypeError("Must be between 0 and 63: " + r);
  }, Ko.decode = function(r) {
    var i = 65, s = 90, o = 97, u = 122, f = 48, p = 57, h = 43, g = 47, y = 26, b = 52;
    return i <= r && r <= s ? r - i : o <= r && r <= u ? r - o + y : f <= r && r <= p ? r - f + b : r == h ? 62 : r == g ? 63 : -1;
  }, Ko;
}
var cy;
function B0() {
  if (cy) return Jo;
  cy = 1;
  var t = gE(), r = 5, i = 1 << r, s = i - 1, o = i;
  function u(p) {
    return p < 0 ? (-p << 1) + 1 : (p << 1) + 0;
  }
  function f(p) {
    var h = (p & 1) === 1, g = p >> 1;
    return h ? -g : g;
  }
  return Jo.encode = function(h) {
    var g = "", y, b = u(h);
    do
      y = b & s, b >>>= r, b > 0 && (y |= o), g += t.encode(y);
    while (b > 0);
    return g;
  }, Jo.decode = function(h, g, y) {
    var b = h.length, _ = 0, v = 0, d, S;
    do {
      if (g >= b)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (S = t.decode(h.charCodeAt(g++)), S === -1)
        throw new Error("Invalid base64 digit: " + h.charAt(g - 1));
      d = !!(S & o), S &= s, _ = _ + (S << v), v += r;
    } while (d);
    y.value = f(_), y.rest = g;
  }, Jo;
}
var ld = {}, fy;
function ll() {
  return fy || (fy = 1, (function(t) {
    function r(E, T, M) {
      if (T in E)
        return E[T];
      if (arguments.length === 3)
        return M;
      throw new Error('"' + T + '" is a required argument.');
    }
    t.getArg = r;
    var i = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, s = /^data:.+\,.+$/;
    function o(E) {
      var T = E.match(i);
      return T ? {
        scheme: T[1],
        auth: T[2],
        host: T[3],
        port: T[4],
        path: T[5]
      } : null;
    }
    t.urlParse = o;
    function u(E) {
      var T = "";
      return E.scheme && (T += E.scheme + ":"), T += "//", E.auth && (T += E.auth + "@"), E.host && (T += E.host), E.port && (T += ":" + E.port), E.path && (T += E.path), T;
    }
    t.urlGenerate = u;
    function f(E) {
      var T = E, M = o(E);
      if (M) {
        if (!M.path)
          return E;
        T = M.path;
      }
      for (var k = t.isAbsolute(T), q = T.split(/\/+/), G, B = 0, V = q.length - 1; V >= 0; V--)
        G = q[V], G === "." ? q.splice(V, 1) : G === ".." ? B++ : B > 0 && (G === "" ? (q.splice(V + 1, B), B = 0) : (q.splice(V, 2), B--));
      return T = q.join("/"), T === "" && (T = k ? "/" : "."), M ? (M.path = T, u(M)) : T;
    }
    t.normalize = f;
    function p(E, T) {
      E === "" && (E = "."), T === "" && (T = ".");
      var M = o(T), k = o(E);
      if (k && (E = k.path || "/"), M && !M.scheme)
        return k && (M.scheme = k.scheme), u(M);
      if (M || T.match(s))
        return T;
      if (k && !k.host && !k.path)
        return k.host = T, u(k);
      var q = T.charAt(0) === "/" ? T : f(E.replace(/\/+$/, "") + "/" + T);
      return k ? (k.path = q, u(k)) : q;
    }
    t.join = p, t.isAbsolute = function(E) {
      return E.charAt(0) === "/" || i.test(E);
    };
    function h(E, T) {
      E === "" && (E = "."), E = E.replace(/\/$/, "");
      for (var M = 0; T.indexOf(E + "/") !== 0; ) {
        var k = E.lastIndexOf("/");
        if (k < 0 || (E = E.slice(0, k), E.match(/^([^\/]+:\/)?\/*$/)))
          return T;
        ++M;
      }
      return Array(M + 1).join("../") + T.substr(E.length + 1);
    }
    t.relative = h;
    var g = (function() {
      var E = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in E);
    })();
    function y(E) {
      return E;
    }
    function b(E) {
      return v(E) ? "$" + E : E;
    }
    t.toSetString = g ? y : b;
    function _(E) {
      return v(E) ? E.slice(1) : E;
    }
    t.fromSetString = g ? y : _;
    function v(E) {
      if (!E)
        return !1;
      var T = E.length;
      if (T < 9 || E.charCodeAt(T - 1) !== 95 || E.charCodeAt(T - 2) !== 95 || E.charCodeAt(T - 3) !== 111 || E.charCodeAt(T - 4) !== 116 || E.charCodeAt(T - 5) !== 111 || E.charCodeAt(T - 6) !== 114 || E.charCodeAt(T - 7) !== 112 || E.charCodeAt(T - 8) !== 95 || E.charCodeAt(T - 9) !== 95)
        return !1;
      for (var M = T - 10; M >= 0; M--)
        if (E.charCodeAt(M) !== 36)
          return !1;
      return !0;
    }
    function d(E, T, M) {
      var k = x(E.source, T.source);
      return k !== 0 || (k = E.originalLine - T.originalLine, k !== 0) || (k = E.originalColumn - T.originalColumn, k !== 0 || M) || (k = E.generatedColumn - T.generatedColumn, k !== 0) || (k = E.generatedLine - T.generatedLine, k !== 0) ? k : x(E.name, T.name);
    }
    t.compareByOriginalPositions = d;
    function S(E, T, M) {
      var k = E.generatedLine - T.generatedLine;
      return k !== 0 || (k = E.generatedColumn - T.generatedColumn, k !== 0 || M) || (k = x(E.source, T.source), k !== 0) || (k = E.originalLine - T.originalLine, k !== 0) || (k = E.originalColumn - T.originalColumn, k !== 0) ? k : x(E.name, T.name);
    }
    t.compareByGeneratedPositionsDeflated = S;
    function x(E, T) {
      return E === T ? 0 : E === null ? 1 : T === null ? -1 : E > T ? 1 : -1;
    }
    function O(E, T) {
      var M = E.generatedLine - T.generatedLine;
      return M !== 0 || (M = E.generatedColumn - T.generatedColumn, M !== 0) || (M = x(E.source, T.source), M !== 0) || (M = E.originalLine - T.originalLine, M !== 0) || (M = E.originalColumn - T.originalColumn, M !== 0) ? M : x(E.name, T.name);
    }
    t.compareByGeneratedPositionsInflated = O;
    function A(E) {
      return JSON.parse(E.replace(/^\)]}'[^\n]*\n/, ""));
    }
    t.parseSourceMapInput = A;
    function D(E, T, M) {
      if (T = T || "", E && (E[E.length - 1] !== "/" && T[0] !== "/" && (E += "/"), T = E + T), M) {
        var k = o(M);
        if (!k)
          throw new Error("sourceMapURL could not be parsed");
        if (k.path) {
          var q = k.path.lastIndexOf("/");
          q >= 0 && (k.path = k.path.substring(0, q + 1));
        }
        T = p(u(k), T);
      }
      return f(T);
    }
    t.computeSourceURL = D;
  })(ld)), ld;
}
var od = {}, dy;
function U0() {
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
function vE() {
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
function H0() {
  if (py) return sd;
  py = 1;
  var t = B0(), r = ll(), i = U0().ArraySet, s = vE().MappingList;
  function o(u) {
    u || (u = {}), this._file = r.getArg(u, "file", null), this._sourceRoot = r.getArg(u, "sourceRoot", null), this._skipValidation = r.getArg(u, "skipValidation", !1), this._sources = new i(), this._names = new i(), this._mappings = new s(), this._sourcesContents = null;
  }
  return o.prototype._version = 3, o.fromSourceMap = function(f) {
    var p = f.sourceRoot, h = new o({
      file: f.file,
      sourceRoot: p
    });
    return f.eachMapping(function(g) {
      var y = {
        generated: {
          line: g.generatedLine,
          column: g.generatedColumn
        }
      };
      g.source != null && (y.source = g.source, p != null && (y.source = r.relative(p, y.source)), y.original = {
        line: g.originalLine,
        column: g.originalColumn
      }, g.name != null && (y.name = g.name)), h.addMapping(y);
    }), f.sources.forEach(function(g) {
      var y = g;
      p !== null && (y = r.relative(p, g)), h._sources.has(y) || h._sources.add(y);
      var b = f.sourceContentFor(g);
      b != null && h.setSourceContent(g, b);
    }), h;
  }, o.prototype.addMapping = function(f) {
    var p = r.getArg(f, "generated"), h = r.getArg(f, "original", null), g = r.getArg(f, "source", null), y = r.getArg(f, "name", null);
    this._skipValidation || this._validateMapping(p, h, g, y), g != null && (g = String(g), this._sources.has(g) || this._sources.add(g)), y != null && (y = String(y), this._names.has(y) || this._names.add(y)), this._mappings.add({
      generatedLine: p.line,
      generatedColumn: p.column,
      originalLine: h != null && h.line,
      originalColumn: h != null && h.column,
      source: g,
      name: y
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
    var y = this._sourceRoot;
    y != null && (g = r.relative(y, g));
    var b = new i(), _ = new i();
    this._mappings.unsortedForEach(function(v) {
      if (v.source === g && v.originalLine != null) {
        var d = f.originalPositionFor({
          line: v.originalLine,
          column: v.originalColumn
        });
        d.source != null && (v.source = d.source, h != null && (v.source = r.join(h, v.source)), y != null && (v.source = r.relative(y, v.source)), v.originalLine = d.line, v.originalColumn = d.column, d.name != null && (v.name = d.name));
      }
      var S = v.source;
      S != null && !b.has(S) && b.add(S);
      var x = v.name;
      x != null && !_.has(x) && _.add(x);
    }, this), this._sources = b, this._names = _, f.sources.forEach(function(v) {
      var d = f.sourceContentFor(v);
      d != null && (h != null && (v = r.join(h, v)), y != null && (v = r.relative(y, v)), this.setSourceContent(v, d));
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
    for (var f = 0, p = 1, h = 0, g = 0, y = 0, b = 0, _ = "", v, d, S, x, O = this._mappings.toArray(), A = 0, D = O.length; A < D; A++) {
      if (d = O[A], v = "", d.generatedLine !== p)
        for (f = 0; d.generatedLine !== p; )
          v += ";", p++;
      else if (A > 0) {
        if (!r.compareByGeneratedPositionsInflated(d, O[A - 1]))
          continue;
        v += ",";
      }
      v += t.encode(d.generatedColumn - f), f = d.generatedColumn, d.source != null && (x = this._sources.indexOf(d.source), v += t.encode(x - b), b = x, v += t.encode(d.originalLine - 1 - g), g = d.originalLine - 1, v += t.encode(d.originalColumn - h), h = d.originalColumn, d.name != null && (S = this._names.indexOf(d.name), v += t.encode(S - y), y = S)), _ += v;
    }
    return _;
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
var Zs = {}, cd = {}, my;
function yE() {
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
function _E() {
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
      for (var g = s[f], y = u; y < f; y++)
        o(s[y], g) <= 0 && (h += 1, t(s, h, y));
      t(s, h + 1, y);
      var b = h + 1;
      i(s, o, u, b - 1), i(s, o, b + 1, f);
    }
  }
  return fd.quickSort = function(s, o) {
    i(s, o, 0, s.length - 1);
  }, fd;
}
var vy;
function bE() {
  if (vy) return Zs;
  vy = 1;
  var t = ll(), r = yE(), i = U0().ArraySet, s = B0(), o = _E().quickSort;
  function u(g, y) {
    var b = g;
    return typeof g == "string" && (b = t.parseSourceMapInput(g)), b.sections != null ? new h(b, y) : new f(b, y);
  }
  u.fromSourceMap = function(g, y) {
    return f.fromSourceMap(g, y);
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
  }), u.prototype._charIsMappingSeparator = function(y, b) {
    var _ = y.charAt(b);
    return _ === ";" || _ === ",";
  }, u.prototype._parseMappings = function(y, b) {
    throw new Error("Subclasses must implement _parseMappings");
  }, u.GENERATED_ORDER = 1, u.ORIGINAL_ORDER = 2, u.GREATEST_LOWER_BOUND = 1, u.LEAST_UPPER_BOUND = 2, u.prototype.eachMapping = function(y, b, _) {
    var v = b || null, d = _ || u.GENERATED_ORDER, S;
    switch (d) {
      case u.GENERATED_ORDER:
        S = this._generatedMappings;
        break;
      case u.ORIGINAL_ORDER:
        S = this._originalMappings;
        break;
      default:
        throw new Error("Unknown order of iteration.");
    }
    var x = this.sourceRoot;
    S.map(function(O) {
      var A = O.source === null ? null : this._sources.at(O.source);
      return A = t.computeSourceURL(x, A, this._sourceMapURL), {
        source: A,
        generatedLine: O.generatedLine,
        generatedColumn: O.generatedColumn,
        originalLine: O.originalLine,
        originalColumn: O.originalColumn,
        name: O.name === null ? null : this._names.at(O.name)
      };
    }, this).forEach(y, v);
  }, u.prototype.allGeneratedPositionsFor = function(y) {
    var b = t.getArg(y, "line"), _ = {
      source: t.getArg(y, "source"),
      originalLine: b,
      originalColumn: t.getArg(y, "column", 0)
    };
    if (_.source = this._findSourceIndex(_.source), _.source < 0)
      return [];
    var v = [], d = this._findMapping(
      _,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      t.compareByOriginalPositions,
      r.LEAST_UPPER_BOUND
    );
    if (d >= 0) {
      var S = this._originalMappings[d];
      if (y.column === void 0)
        for (var x = S.originalLine; S && S.originalLine === x; )
          v.push({
            line: t.getArg(S, "generatedLine", null),
            column: t.getArg(S, "generatedColumn", null),
            lastColumn: t.getArg(S, "lastGeneratedColumn", null)
          }), S = this._originalMappings[++d];
      else
        for (var O = S.originalColumn; S && S.originalLine === b && S.originalColumn == O; )
          v.push({
            line: t.getArg(S, "generatedLine", null),
            column: t.getArg(S, "generatedColumn", null),
            lastColumn: t.getArg(S, "lastGeneratedColumn", null)
          }), S = this._originalMappings[++d];
    }
    return v;
  }, Zs.SourceMapConsumer = u;
  function f(g, y) {
    var b = g;
    typeof g == "string" && (b = t.parseSourceMapInput(g));
    var _ = t.getArg(b, "version"), v = t.getArg(b, "sources"), d = t.getArg(b, "names", []), S = t.getArg(b, "sourceRoot", null), x = t.getArg(b, "sourcesContent", null), O = t.getArg(b, "mappings"), A = t.getArg(b, "file", null);
    if (_ != this._version)
      throw new Error("Unsupported version: " + _);
    S && (S = t.normalize(S)), v = v.map(String).map(t.normalize).map(function(D) {
      return S && t.isAbsolute(S) && t.isAbsolute(D) ? t.relative(S, D) : D;
    }), this._names = i.fromArray(d.map(String), !0), this._sources = i.fromArray(v, !0), this._absoluteSources = this._sources.toArray().map(function(D) {
      return t.computeSourceURL(S, D, y);
    }), this.sourceRoot = S, this.sourcesContent = x, this._mappings = O, this._sourceMapURL = y, this.file = A;
  }
  f.prototype = Object.create(u.prototype), f.prototype.consumer = u, f.prototype._findSourceIndex = function(g) {
    var y = g;
    if (this.sourceRoot != null && (y = t.relative(this.sourceRoot, y)), this._sources.has(y))
      return this._sources.indexOf(y);
    var b;
    for (b = 0; b < this._absoluteSources.length; ++b)
      if (this._absoluteSources[b] == g)
        return b;
    return -1;
  }, f.fromSourceMap = function(y, b) {
    var _ = Object.create(f.prototype), v = _._names = i.fromArray(y._names.toArray(), !0), d = _._sources = i.fromArray(y._sources.toArray(), !0);
    _.sourceRoot = y._sourceRoot, _.sourcesContent = y._generateSourcesContent(
      _._sources.toArray(),
      _.sourceRoot
    ), _.file = y._file, _._sourceMapURL = b, _._absoluteSources = _._sources.toArray().map(function(M) {
      return t.computeSourceURL(_.sourceRoot, M, b);
    });
    for (var S = y._mappings.toArray().slice(), x = _.__generatedMappings = [], O = _.__originalMappings = [], A = 0, D = S.length; A < D; A++) {
      var E = S[A], T = new p();
      T.generatedLine = E.generatedLine, T.generatedColumn = E.generatedColumn, E.source && (T.source = d.indexOf(E.source), T.originalLine = E.originalLine, T.originalColumn = E.originalColumn, E.name && (T.name = v.indexOf(E.name)), O.push(T)), x.push(T);
    }
    return o(_.__originalMappings, t.compareByOriginalPositions), _;
  }, f.prototype._version = 3, Object.defineProperty(f.prototype, "sources", {
    get: function() {
      return this._absoluteSources.slice();
    }
  });
  function p() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
  }
  f.prototype._parseMappings = function(y, b) {
    for (var _ = 1, v = 0, d = 0, S = 0, x = 0, O = 0, A = y.length, D = 0, E = {}, T = {}, M = [], k = [], q, G, B, V, $; D < A; )
      if (y.charAt(D) === ";")
        _++, D++, v = 0;
      else if (y.charAt(D) === ",")
        D++;
      else {
        for (q = new p(), q.generatedLine = _, V = D; V < A && !this._charIsMappingSeparator(y, V); V++)
          ;
        if (G = y.slice(D, V), B = E[G], B)
          D += G.length;
        else {
          for (B = []; D < V; )
            s.decode(y, D, T), $ = T.value, D = T.rest, B.push($);
          if (B.length === 2)
            throw new Error("Found a source, but no line and column");
          if (B.length === 3)
            throw new Error("Found a source and line, but no column");
          E[G] = B;
        }
        q.generatedColumn = v + B[0], v = q.generatedColumn, B.length > 1 && (q.source = x + B[1], x += B[1], q.originalLine = d + B[2], d = q.originalLine, q.originalLine += 1, q.originalColumn = S + B[3], S = q.originalColumn, B.length > 4 && (q.name = O + B[4], O += B[4])), k.push(q), typeof q.originalLine == "number" && M.push(q);
      }
    o(k, t.compareByGeneratedPositionsDeflated), this.__generatedMappings = k, o(M, t.compareByOriginalPositions), this.__originalMappings = M;
  }, f.prototype._findMapping = function(y, b, _, v, d, S) {
    if (y[_] <= 0)
      throw new TypeError("Line must be greater than or equal to 1, got " + y[_]);
    if (y[v] < 0)
      throw new TypeError("Column must be greater than or equal to 0, got " + y[v]);
    return r.search(y, b, d, S);
  }, f.prototype.computeColumnSpans = function() {
    for (var y = 0; y < this._generatedMappings.length; ++y) {
      var b = this._generatedMappings[y];
      if (y + 1 < this._generatedMappings.length) {
        var _ = this._generatedMappings[y + 1];
        if (b.generatedLine === _.generatedLine) {
          b.lastGeneratedColumn = _.generatedColumn - 1;
          continue;
        }
      }
      b.lastGeneratedColumn = 1 / 0;
    }
  }, f.prototype.originalPositionFor = function(y) {
    var b = {
      generatedLine: t.getArg(y, "line"),
      generatedColumn: t.getArg(y, "column")
    }, _ = this._findMapping(
      b,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      t.compareByGeneratedPositionsDeflated,
      t.getArg(y, "bias", u.GREATEST_LOWER_BOUND)
    );
    if (_ >= 0) {
      var v = this._generatedMappings[_];
      if (v.generatedLine === b.generatedLine) {
        var d = t.getArg(v, "source", null);
        d !== null && (d = this._sources.at(d), d = t.computeSourceURL(this.sourceRoot, d, this._sourceMapURL));
        var S = t.getArg(v, "name", null);
        return S !== null && (S = this._names.at(S)), {
          source: d,
          line: t.getArg(v, "originalLine", null),
          column: t.getArg(v, "originalColumn", null),
          name: S
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
    return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(y) {
      return y == null;
    }) : !1;
  }, f.prototype.sourceContentFor = function(y, b) {
    if (!this.sourcesContent)
      return null;
    var _ = this._findSourceIndex(y);
    if (_ >= 0)
      return this.sourcesContent[_];
    var v = y;
    this.sourceRoot != null && (v = t.relative(this.sourceRoot, v));
    var d;
    if (this.sourceRoot != null && (d = t.urlParse(this.sourceRoot))) {
      var S = v.replace(/^file:\/\//, "");
      if (d.scheme == "file" && this._sources.has(S))
        return this.sourcesContent[this._sources.indexOf(S)];
      if ((!d.path || d.path == "/") && this._sources.has("/" + v))
        return this.sourcesContent[this._sources.indexOf("/" + v)];
    }
    if (b)
      return null;
    throw new Error('"' + v + '" is not in the SourceMap.');
  }, f.prototype.generatedPositionFor = function(y) {
    var b = t.getArg(y, "source");
    if (b = this._findSourceIndex(b), b < 0)
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    var _ = {
      source: b,
      originalLine: t.getArg(y, "line"),
      originalColumn: t.getArg(y, "column")
    }, v = this._findMapping(
      _,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      t.compareByOriginalPositions,
      t.getArg(y, "bias", u.GREATEST_LOWER_BOUND)
    );
    if (v >= 0) {
      var d = this._originalMappings[v];
      if (d.source === _.source)
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
  }, Zs.BasicSourceMapConsumer = f;
  function h(g, y) {
    var b = g;
    typeof g == "string" && (b = t.parseSourceMapInput(g));
    var _ = t.getArg(b, "version"), v = t.getArg(b, "sections");
    if (_ != this._version)
      throw new Error("Unsupported version: " + _);
    this._sources = new i(), this._names = new i();
    var d = {
      line: -1,
      column: 0
    };
    this._sections = v.map(function(S) {
      if (S.url)
        throw new Error("Support for url field in sections not implemented.");
      var x = t.getArg(S, "offset"), O = t.getArg(x, "line"), A = t.getArg(x, "column");
      if (O < d.line || O === d.line && A < d.column)
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return d = x, {
        generatedOffset: {
          // The offset fields are 0-based, but we use 1-based indices when
          // encoding/decoding from VLQ.
          generatedLine: O + 1,
          generatedColumn: A + 1
        },
        consumer: new u(t.getArg(S, "map"), y)
      };
    });
  }
  return h.prototype = Object.create(u.prototype), h.prototype.constructor = u, h.prototype._version = 3, Object.defineProperty(h.prototype, "sources", {
    get: function() {
      for (var g = [], y = 0; y < this._sections.length; y++)
        for (var b = 0; b < this._sections[y].consumer.sources.length; b++)
          g.push(this._sections[y].consumer.sources[b]);
      return g;
    }
  }), h.prototype.originalPositionFor = function(y) {
    var b = {
      generatedLine: t.getArg(y, "line"),
      generatedColumn: t.getArg(y, "column")
    }, _ = r.search(
      b,
      this._sections,
      function(d, S) {
        var x = d.generatedLine - S.generatedOffset.generatedLine;
        return x || d.generatedColumn - S.generatedOffset.generatedColumn;
      }
    ), v = this._sections[_];
    return v ? v.consumer.originalPositionFor({
      line: b.generatedLine - (v.generatedOffset.generatedLine - 1),
      column: b.generatedColumn - (v.generatedOffset.generatedLine === b.generatedLine ? v.generatedOffset.generatedColumn - 1 : 0),
      bias: y.bias
    }) : {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, h.prototype.hasContentsOfAllSources = function() {
    return this._sections.every(function(y) {
      return y.consumer.hasContentsOfAllSources();
    });
  }, h.prototype.sourceContentFor = function(y, b) {
    for (var _ = 0; _ < this._sections.length; _++) {
      var v = this._sections[_], d = v.consumer.sourceContentFor(y, !0);
      if (d)
        return d;
    }
    if (b)
      return null;
    throw new Error('"' + y + '" is not in the SourceMap.');
  }, h.prototype.generatedPositionFor = function(y) {
    for (var b = 0; b < this._sections.length; b++) {
      var _ = this._sections[b];
      if (_.consumer._findSourceIndex(t.getArg(y, "source")) !== -1) {
        var v = _.consumer.generatedPositionFor(y);
        if (v) {
          var d = {
            line: v.line + (_.generatedOffset.generatedLine - 1),
            column: v.column + (_.generatedOffset.generatedLine === v.line ? _.generatedOffset.generatedColumn - 1 : 0)
          };
          return d;
        }
      }
    }
    return {
      line: null,
      column: null
    };
  }, h.prototype._parseMappings = function(y, b) {
    this.__generatedMappings = [], this.__originalMappings = [];
    for (var _ = 0; _ < this._sections.length; _++)
      for (var v = this._sections[_], d = v.consumer._generatedMappings, S = 0; S < d.length; S++) {
        var x = d[S], O = v.consumer._sources.at(x.source);
        O = t.computeSourceURL(v.consumer.sourceRoot, O, this._sourceMapURL), this._sources.add(O), O = this._sources.indexOf(O);
        var A = null;
        x.name && (A = v.consumer._names.at(x.name), this._names.add(A), A = this._names.indexOf(A));
        var D = {
          source: O,
          generatedLine: x.generatedLine + (v.generatedOffset.generatedLine - 1),
          generatedColumn: x.generatedColumn + (v.generatedOffset.generatedLine === x.generatedLine ? v.generatedOffset.generatedColumn - 1 : 0),
          originalLine: x.originalLine,
          originalColumn: x.originalColumn,
          name: A
        };
        this.__generatedMappings.push(D), typeof D.originalLine == "number" && this.__originalMappings.push(D);
      }
    o(this.__generatedMappings, t.compareByGeneratedPositionsDeflated), o(this.__originalMappings, t.compareByOriginalPositions);
  }, Zs.IndexedSourceMapConsumer = h, Zs;
}
var dd = {}, yy;
function SE() {
  if (yy) return dd;
  yy = 1;
  var t = H0().SourceMapGenerator, r = ll(), i = /(\r?\n)/, s = 10, o = "$$$isSourceNode$$$";
  function u(f, p, h, g, y) {
    this.children = [], this.sourceContents = {}, this.line = f ?? null, this.column = p ?? null, this.source = h ?? null, this.name = y ?? null, this[o] = !0, g != null && this.add(g);
  }
  return u.fromStringWithSourceMap = function(p, h, g) {
    var y = new u(), b = p.split(i), _ = 0, v = function() {
      var A = E(), D = E() || "";
      return A + D;
      function E() {
        return _ < b.length ? b[_++] : void 0;
      }
    }, d = 1, S = 0, x = null;
    return h.eachMapping(function(A) {
      if (x !== null)
        if (d < A.generatedLine)
          O(x, v()), d++, S = 0;
        else {
          var D = b[_] || "", E = D.substr(0, A.generatedColumn - S);
          b[_] = D.substr(A.generatedColumn - S), S = A.generatedColumn, O(x, E), x = A;
          return;
        }
      for (; d < A.generatedLine; )
        y.add(v()), d++;
      if (S < A.generatedColumn) {
        var D = b[_] || "";
        y.add(D.substr(0, A.generatedColumn)), b[_] = D.substr(A.generatedColumn), S = A.generatedColumn;
      }
      x = A;
    }, this), _ < b.length && (x && O(x, v()), y.add(b.splice(_).join(""))), h.sources.forEach(function(A) {
      var D = h.sourceContentFor(A);
      D != null && (g != null && (A = r.join(g, A)), y.setSourceContent(A, D));
    }), y;
    function O(A, D) {
      if (A === null || A.source === void 0)
        y.add(D);
      else {
        var E = g ? r.join(g, A.source) : A.source;
        y.add(new u(
          A.originalLine,
          A.originalColumn,
          E,
          D,
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
    for (var h, g = 0, y = this.children.length; g < y; g++)
      h = this.children[g], h[o] ? h.walk(p) : h !== "" && p(h, {
        source: this.source,
        line: this.line,
        column: this.column,
        name: this.name
      });
  }, u.prototype.join = function(p) {
    var h, g, y = this.children.length;
    if (y > 0) {
      for (h = [], g = 0; g < y - 1; g++)
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
    for (var y = Object.keys(this.sourceContents), h = 0, g = y.length; h < g; h++)
      p(r.fromSetString(y[h]), this.sourceContents[y[h]]);
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
    }, g = new t(p), y = !1, b = null, _ = null, v = null, d = null;
    return this.walk(function(S, x) {
      h.code += S, x.source !== null && x.line !== null && x.column !== null ? ((b !== x.source || _ !== x.line || v !== x.column || d !== x.name) && g.addMapping({
        source: x.source,
        original: {
          line: x.line,
          column: x.column
        },
        generated: {
          line: h.line,
          column: h.column
        },
        name: x.name
      }), b = x.source, _ = x.line, v = x.column, d = x.name, y = !0) : y && (g.addMapping({
        generated: {
          line: h.line,
          column: h.column
        }
      }), b = null, y = !1);
      for (var O = 0, A = S.length; O < A; O++)
        S.charCodeAt(O) === s ? (h.line++, h.column = 0, O + 1 === A ? (b = null, y = !1) : y && g.addMapping({
          source: x.source,
          original: {
            line: x.line,
            column: x.column
          },
          generated: {
            line: h.line,
            column: h.column
          },
          name: x.name
        })) : h.column++;
    }), this.walkSourceContents(function(S, x) {
      g.setSourceContent(S, x);
    }), { code: h.code, map: g };
  }, dd.SourceNode = u, dd;
}
var _y;
function xE() {
  return _y || (_y = 1, qs.SourceMapGenerator = H0().SourceMapGenerator, qs.SourceMapConsumer = bE().SourceMapConsumer, qs.SourceNode = SE().SourceNode), qs;
}
var by;
function EE() {
  return by || (by = 1, (function(t, r) {
    r.__esModule = !0;
    var i = nn(), s = void 0;
    try {
      var o = xE();
      s = o.SourceNode;
    } catch {
    }
    s || (s = function(p, h, g, y) {
      this.src = "", y && this.add(y);
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
        for (var y = [], b = 0, _ = p.length; b < _; b++)
          y.push(h.wrap(p[b], g));
        return y;
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
        for (var g = 0, y = this.source.length; g < y; g++)
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
      functionCall: function(h, g, y) {
        return y = this.generateList(y), this.wrap([h, g ? "." + g + "(" : "(", y, ")"]);
      },
      quotedString: function(h) {
        return '"' + (h + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
      },
      objectLiteral: function(h) {
        var g = this, y = [];
        Object.keys(h).forEach(function(_) {
          var v = u(h[_], g);
          v !== "undefined" && y.push([g.quotedString(_), ":", v]);
        });
        var b = this.generateList(y);
        return b.prepend("{"), b.add("}"), b;
      },
      generateList: function(h) {
        for (var g = this.empty(), y = 0, b = h.length; y < b; y++)
          y && g.add(","), g.add(u(h[y], this));
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
function CE() {
  return Sy || (Sy = 1, (function(t, r) {
    r.__esModule = !0;
    function i(_) {
      return _ && _.__esModule ? _ : { default: _ };
    }
    var s = th(), o = qn(), u = i(o), f = nn(), p = EE(), h = i(p);
    function g(_) {
      this.value = _;
    }
    function y() {
    }
    y.prototype = {
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
      appendToBuffer: function(v, d, S) {
        return f.isArray(v) || (v = [v]), v = this.source.wrap(v, d), this.environment.isSimple ? ["return ", v, ";"] : S ? ["buffer += ", v, ";"] : (v.appendToBuffer = !0, v);
      },
      initializeBuffer: function() {
        return this.quotedString("");
      },
      // END PUBLIC API
      internalNameLookup: function(v, d) {
        return this.lookupPropertyFunctionIsUsed = !0, ["lookupProperty(", v, ",", JSON.stringify(d), ")"];
      },
      lookupPropertyFunctionIsUsed: !1,
      compile: function(v, d, S, x) {
        this.environment = v, this.options = d, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !x, this.name = this.environment.name, this.isChild = !!S, this.context = S || {
          decorators: [],
          programs: [],
          environments: []
        }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = { list: [] }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(v, d), this.useDepths = this.useDepths || v.useDepths || v.useDecorators || this.options.compat, this.useBlockParams = this.useBlockParams || v.useBlockParams;
        var O = v.opcodes, A = void 0, D = void 0, E = void 0, T = void 0;
        for (E = 0, T = O.length; E < T; E++)
          A = O[E], this.source.currentLocation = A.loc, D = D || A.loc, this[A.opcode].apply(this, A.args);
        if (this.source.currentLocation = D, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length)
          throw new u.default("Compile completed with content left on stack");
        this.decorators.isEmpty() ? this.decorators = void 0 : (this.useDecorators = !0, this.decorators.prepend(["var decorators = container.decorators, ", this.lookupPropertyFunctionVarDeclaration(), `;
`]), this.decorators.push("return fn;"), x ? this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]) : (this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`), this.decorators.push(`}
`), this.decorators = this.decorators.merge()));
        var M = this.createFunctionContext(x);
        if (this.isChild)
          return M;
        var k = {
          compiler: this.compilerInfo(),
          main: M
        };
        this.decorators && (k.main_d = this.decorators, k.useDecorators = !0);
        var q = this.context, G = q.programs, B = q.decorators;
        for (E = 0, T = G.length; E < T; E++)
          G[E] && (k[E] = G[E], B[E] && (k[E + "_d"] = B[E], k.useDecorators = !0));
        return this.environment.usePartial && (k.usePartial = !0), this.options.data && (k.useData = !0), this.useDepths && (k.useDepths = !0), this.useBlockParams && (k.useBlockParams = !0), this.options.compat && (k.compat = !0), x ? k.compilerOptions = this.options : (k.compiler = JSON.stringify(k.compiler), this.source.currentLocation = { start: { line: 1, column: 0 } }, k = this.objectLiteral(k), d.srcName ? (k = k.toStringWithSourceMap({ file: d.destName }), k.map = k.map && k.map.toString()) : k = k.toString()), k;
      },
      preamble: function() {
        this.lastContext = 0, this.source = new h.default(this.options.srcName), this.decorators = new h.default(this.options.srcName);
      },
      createFunctionContext: function(v) {
        var d = this, S = "", x = this.stackVars.concat(this.registers.list);
        x.length > 0 && (S += ", " + x.join(", "));
        var O = 0;
        Object.keys(this.aliases).forEach(function(E) {
          var T = d.aliases[E];
          T.children && T.referenceCount > 1 && (S += ", alias" + ++O + "=" + E, T.children[0] = "alias" + O);
        }), this.lookupPropertyFunctionIsUsed && (S += ", " + this.lookupPropertyFunctionVarDeclaration());
        var A = ["container", "depth0", "helpers", "partials", "data"];
        (this.useBlockParams || this.useDepths) && A.push("blockParams"), this.useDepths && A.push("depths");
        var D = this.mergeSource(S);
        return v ? (A.push(D), Function.apply(this, A)) : this.source.wrap(["function(", A.join(","), `) {
  `, D, "}"]);
      },
      mergeSource: function(v) {
        var d = this.environment.isSimple, S = !this.forceBuffer, x = void 0, O = void 0, A = void 0, D = void 0;
        return this.source.each(function(E) {
          E.appendToBuffer ? (A ? E.prepend("  + ") : A = E, D = E) : (A && (O ? A.prepend("buffer += ") : x = !0, D.add(";"), A = D = void 0), O = !0, d || (S = !1));
        }), S ? A ? (A.prepend("return "), D.add(";")) : O || this.source.push('return "";') : (v += ", buffer = " + (x ? "" : this.initializeBuffer()), A ? (A.prepend("return buffer + "), D.add(";")) : this.source.push("return buffer;")), v && this.source.prepend("var " + v.substring(2) + (x ? "" : `;
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
        var d = this.aliasable("container.hooks.blockHelperMissing"), S = [this.contextName(0)];
        this.setupHelperArgs(v, 0, S);
        var x = this.popStack();
        S.splice(1, 0, x), this.push(this.source.functionCall(d, "call", S));
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
        var S = this.topStack();
        d.splice(1, 0, S), this.pushSource(["if (!", this.lastHelper, ") { ", S, " = ", this.source.functionCall(v, "call", d), "}"]);
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
      lookupOnContext: function(v, d, S, x) {
        var O = 0;
        !x && this.options.compat && !this.lastContext ? this.push(this.depthedLookup(v[O++])) : this.pushContext(), this.resolvePath("context", v, O, d, S);
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
      lookupData: function(v, d, S) {
        v ? this.pushStackLiteral("container.data(data, " + v + ")") : this.pushStackLiteral("data"), this.resolvePath("data", d, 0, !0, S);
      },
      resolvePath: function(v, d, S, x, O) {
        var A = this;
        if (this.options.strict || this.options.assumeObjects) {
          this.push(b(this.options.strict && O, this, d, S, v));
          return;
        }
        for (var D = d.length; S < D; S++)
          this.replaceStack(function(E) {
            var T = A.nameLookup(E, d[S], v);
            return x ? [" && ", T] : [" != null ? ", T, " : ", E];
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
        var S = this.nameLookup("decorators", d, "decorator"), x = this.setupHelperArgs(d, v);
        this.decorators.push(["fn = ", this.decorators.functionCall(S, "", ["fn", "props", "container", x]), " || fn;"]);
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
      invokeHelper: function(v, d, S) {
        var x = this.popStack(), O = this.setupHelper(v, d), A = [];
        S && A.push(O.name), A.push(x), this.options.strict || A.push(this.aliasable("container.hooks.helperMissing"));
        var D = ["(", this.itemsSeparatedBy(A, "||"), ")"], E = this.source.functionCall(D, "call", O.callParams);
        this.push(E);
      },
      itemsSeparatedBy: function(v, d) {
        var S = [];
        S.push(v[0]);
        for (var x = 1; x < v.length; x++)
          S.push(d, v[x]);
        return S;
      },
      // [invokeKnownHelper]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of helper invocation
      //
      // This operation is used when the helper is known to exist,
      // so a `helperMissing` fallback is not required.
      invokeKnownHelper: function(v, d) {
        var S = this.setupHelper(v, d);
        this.push(this.source.functionCall(S.name, "call", S.callParams));
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
        var S = this.popStack();
        this.emptyHash();
        var x = this.setupHelper(0, v, d), O = this.lastHelper = this.nameLookup("helpers", v, "helper"), A = ["(", "(helper = ", O, " || ", S, ")"];
        this.options.strict || (A[0] = "(helper = ", A.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"))), this.push(["(", A, x.paramsInit ? ["),(", x.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", x.callParams), " : helper))"]);
      },
      // [invokePartial]
      //
      // On stack, before: context, ...
      // On stack after: result of partial invocation
      //
      // This operation pops off a context, invokes a partial with that context,
      // and pushes the result of the invocation back.
      invokePartial: function(v, d, S) {
        var x = [], O = this.setupParams(d, 1, x);
        v && (d = this.popStack(), delete O.name), S && (O.indent = JSON.stringify(S)), O.helpers = "helpers", O.partials = "partials", O.decorators = "container.decorators", v ? x.unshift(d) : x.unshift(this.nameLookup("partials", d, "partial")), this.options.compat && (O.depths = "depths"), O = this.objectLiteral(O), x.push(O), this.push(this.source.functionCall("container.invokePartial", "", x));
      },
      // [assignToHash]
      //
      // On stack, before: value, ..., hash, ...
      // On stack, after: ..., hash, ...
      //
      // Pops a value off the stack and assigns it to the current hash
      assignToHash: function(v) {
        var d = this.popStack(), S = void 0, x = void 0, O = void 0;
        this.trackIds && (O = this.popStack()), this.stringParams && (x = this.popStack(), S = this.popStack());
        var A = this.hash;
        S && (A.contexts[v] = S), x && (A.types[v] = x), O && (A.ids[v] = O), A.values[v] = d;
      },
      pushId: function(v, d, S) {
        v === "BlockParam" ? this.pushStackLiteral("blockParams[" + d[0] + "].path[" + d[1] + "]" + (S ? " + " + JSON.stringify("." + S) : "")) : v === "PathExpression" ? this.pushString(d) : v === "SubExpression" ? this.pushStackLiteral("true") : this.pushStackLiteral("null");
      },
      // HELPERS
      compiler: y,
      compileChildren: function(v, d) {
        for (var S = v.children, x = void 0, O = void 0, A = 0, D = S.length; A < D; A++) {
          x = S[A], O = new this.compiler();
          var E = this.matchExistingProgram(x);
          if (E == null) {
            this.context.programs.push("");
            var T = this.context.programs.length;
            x.index = T, x.name = "program" + T, this.context.programs[T] = O.compile(x, d, this.context, !this.precompile), this.context.decorators[T] = O.decorators, this.context.environments[T] = x, this.useDepths = this.useDepths || O.useDepths, this.useBlockParams = this.useBlockParams || O.useBlockParams, x.useDepths = this.useDepths, x.useBlockParams = this.useBlockParams;
          } else
            x.index = E.index, x.name = "program" + E.index, this.useDepths = this.useDepths || E.useDepths, this.useBlockParams = this.useBlockParams || E.useBlockParams;
        }
      },
      matchExistingProgram: function(v) {
        for (var d = 0, S = this.context.environments.length; d < S; d++) {
          var x = this.context.environments[d];
          if (x && x.equals(v))
            return x;
        }
      },
      programExpression: function(v) {
        var d = this.environment.children[v], S = [d.index, "data", d.blockParams];
        return (this.useBlockParams || this.useDepths) && S.push("blockParams"), this.useDepths && S.push("depths"), "container.program(" + S.join(", ") + ")";
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
        var d = ["("], S = void 0, x = void 0, O = void 0;
        if (!this.isInline())
          throw new u.default("replaceStack on non-inline");
        var A = this.popStack(!0);
        if (A instanceof g)
          S = [A.value], d = ["(", S], O = !0;
        else {
          x = !0;
          var D = this.incrStack();
          d = ["((", this.push(D), " = ", A, ")"], S = this.topStack();
        }
        var E = v.call(this, S);
        O || this.popStack(), x && this.stackSlot--, this.push(d.concat(E, ")"));
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
        for (var d = 0, S = v.length; d < S; d++) {
          var x = v[d];
          if (x instanceof g)
            this.compileStack.push(x);
          else {
            var O = this.incrStack();
            this.pushSource([O, " = ", x, ";"]), this.compileStack.push(O);
          }
        }
      },
      isInline: function() {
        return this.inlineStack.length;
      },
      popStack: function(v) {
        var d = this.isInline(), S = (d ? this.inlineStack : this.compileStack).pop();
        if (!v && S instanceof g)
          return S.value;
        if (!d) {
          if (!this.stackSlot)
            throw new u.default("Invalid stack pop");
          this.stackSlot--;
        }
        return S;
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
      setupHelper: function(v, d, S) {
        var x = [], O = this.setupHelperArgs(d, v, x, S), A = this.nameLookup("helpers", d, "helper"), D = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
        return {
          params: x,
          paramsInit: O,
          name: A,
          callParams: [D].concat(x)
        };
      },
      setupParams: function(v, d, S) {
        var x = {}, O = [], A = [], D = [], E = !S, T = void 0;
        E && (S = []), x.name = this.quotedString(v), x.hash = this.popStack(), this.trackIds && (x.hashIds = this.popStack()), this.stringParams && (x.hashTypes = this.popStack(), x.hashContexts = this.popStack());
        var M = this.popStack(), k = this.popStack();
        (k || M) && (x.fn = k || "container.noop", x.inverse = M || "container.noop");
        for (var q = d; q--; )
          T = this.popStack(), S[q] = T, this.trackIds && (D[q] = this.popStack()), this.stringParams && (A[q] = this.popStack(), O[q] = this.popStack());
        return E && (x.args = this.source.generateArray(S)), this.trackIds && (x.ids = this.source.generateArray(D)), this.stringParams && (x.types = this.source.generateArray(A), x.contexts = this.source.generateArray(O)), this.options.data && (x.data = "data"), this.useBlockParams && (x.blockParams = "blockParams"), x;
      },
      setupHelperArgs: function(v, d, S, x) {
        var O = this.setupParams(v, d, S);
        return O.loc = JSON.stringify(this.source.currentLocation), O = this.objectLiteral(O), x ? (this.useRegister("options"), S.push("options"), ["options=", O]) : S ? (S.push(O), "") : O;
      }
    }, (function() {
      for (var _ = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), v = y.RESERVED_WORDS = {}, d = 0, S = _.length; d < S; d++)
        v[_[d]] = !0;
    })(), y.isValidJavaScriptVariableName = function(_) {
      return !y.RESERVED_WORDS[_] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(_);
    };
    function b(_, v, d, S, x) {
      var O = v.popStack(), A = d.length;
      for (_ && A--; S < A; S++)
        O = v.nameLookup(O, d[S], x);
      return _ ? [v.aliasable("container.strict"), "(", O, ", ", v.quotedString(d[S]), ", ", JSON.stringify(v.source.currentLocation), " )"] : O;
    }
    r.default = y, t.exports = r.default;
  })($o, $o.exports)), $o.exports;
}
var xy;
function wE() {
  return xy || (xy = 1, (function(t, r) {
    r.__esModule = !0;
    function i(A) {
      return A && A.__esModule ? A : { default: A };
    }
    var s = cE(), o = i(s), u = P0(), f = i(u), p = pE(), h = mE(), g = CE(), y = i(g), b = I0(), _ = i(b), v = L0(), d = i(v), S = o.default.create;
    function x() {
      var A = S();
      return A.compile = function(D, E) {
        return h.compile(D, E, A);
      }, A.precompile = function(D, E) {
        return h.precompile(D, E, A);
      }, A.AST = f.default, A.Compiler = h.Compiler, A.JavaScriptCompiler = y.default, A.Parser = p.parser, A.parse = p.parse, A.parseWithoutProcessing = p.parseWithoutProcessing, A;
    }
    var O = x();
    O.create = x, d.default(O), O.Visitor = _.default, O.default = O, r.default = O, t.exports = r.default;
  })(Oo, Oo.exports)), Oo.exports;
}
var Lt = wE();
const AE = /* @__PURE__ */ Gd(Lt), TE = /* @__PURE__ */ t2({
  __proto__: null,
  default: AE
}, [Lt]), Jn = SillyTavern.getContext(), kn = [
  "name",
  "description",
  "personality",
  "scenario",
  "first_mes",
  "mes_example"
], Qn = {
  name: "Name",
  description: "Description",
  personality: "Personality",
  scenario: "Scenario",
  first_mes: "First Message",
  mes_example: "Example Dialogue"
};
new t0("dumb", {}).getSettings();
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
  mainContextList: g,
  includeUserMacro: y,
  maxResponseToken: b,
  targetField: _,
  outputFormat: v
}) {
  if (!t)
    throw new Error("No connection profile selected.");
  const d = Jn.extensionSettings.connectionManager?.profiles?.find((M) => M.id === t);
  if (!d)
    throw new Error(`Connection profile with ID "${t}" not found.`);
  const S = d.api ? Jn.CONNECT_API_MAP[d.api].selected : void 0;
  if (!S)
    throw new Error(`Could not determine API for profile "${d.name}".`);
  const x = {};
  x.char = o.fields.name.value ?? "{{char}}", x.user = y && br ? br : "{{user}}", x.persona = "{{persona}}", x.targetField = _, x.userInstructions = Lt.compile(r.trim(), { noEscape: !0 })(x), x.fieldSpecificInstructions = Lt.compile(
    o.draftFields[_]?.prompt ?? o.fields[_]?.prompt,
    { noEscape: !0 }
  )({
    ...x,
    char: _ === "mes_example" ? "{{char}}" : x.char,
    user: _ === "mes_example" ? "{{user}}" : x.user
  }), x.activeFormatInstructions = Lt.compile(h.content, { noEscape: !0 })(
    x
  );
  {
    const M = [];
    o.selectedCharacterIndexes.forEach((k) => {
      const q = parseInt(k), G = u[q];
      G && M.push(G);
    }), x.characters = M;
  }
  {
    const M = {};
    Object.entries(f).filter(
      ([k, q]) => q.length > 0 && o.selectedWorldNames.includes(k) && q.some((G) => !G.disable)
    ).forEach(([k, q]) => {
      M[k] = q.filter((G) => !G.disable);
    }), x.lorebooks = M;
  }
  {
    const M = {}, k = {}, q = {}, G = _.startsWith("alternate_greetings_"), B = Pt.getSettings().contextToSend.dontSendOtherGreetings;
    Object.entries(o.fields).forEach(([$, oe]) => {
      let he = !1;
      if (B) {
        const ge = $.startsWith("alternate_greetings_");
        G ? he = ge && $ !== _ || $ === "first_mes" : he = ge;
      }
      if (!he) {
        const ge = Lt.compile(oe.value, { noEscape: !0 })({
          ...x,
          char: $ === "mes_example" ? "{{char}}" : x.char,
          user: $ === "mes_example" ? "{{user}}" : x.user
        });
        kn.includes($) ? M[oe.label] = ge : $.startsWith("alternate_greetings_") && (k[$] = ge);
      }
    }), Object.entries(o.draftFields || {}).forEach(([$, oe]) => {
      q[oe.label] = Lt.compile(oe.value, { noEscape: !0 })(x);
    });
    const V = {};
    Object.keys(M).length > 0 && (V.core = M), Object.keys(k).length > 0 && (V.alternate_greetings = k), Object.keys(q).length > 0 && (V.draft = q), x.fields = V;
  }
  const O = [];
  {
    for (const M of g) {
      if (M.promptName === "chatHistory") {
        const B = await f0(S, i);
        if (B.warnings && B.warnings.length > 0)
          for (const V of B.warnings)
            Oe("warning", V);
        O.push(...B.result);
        continue;
      }
      let k = structuredClone(x);
      M.promptName === "stDescription" && (k.char = "{{char}}", k.user = "{{user}}");
      const q = p[M.promptName];
      if (!q)
        continue;
      const G = {
        role: M.role,
        content: Lt.compile(q.content, { noEscape: !0 })(k)
      };
      G.content = G.content.replaceAll("{{user}}", "[[[crec_veryUniqueUserPlaceHolder]]]"), G.content = G.content.replaceAll("{{char}}", "[[[crec_veryUniqueCharPlaceHolder]]]"), G.content = Jn.substituteParams(G.content), G.content = G.content.replaceAll("[[[crec_veryUniqueUserPlaceHolder]]]", "{{user}}"), G.content = G.content.replaceAll("[[[crec_veryUniqueCharPlaceHolder]]]", "{{char}}"), G.content && O.push(G);
    }
    s && O.push({
      role: "assistant",
      content: jv(s, v)
    });
  }
  const A = await Jn.ConnectionManagerRequestService.sendRequest(
    t,
    O,
    b
  ), D = s ? jv(s, v) + A.content : A.content, E = k0(D, v);
  let T;
  if (typeof E == "string")
    T = E;
  else if (typeof E == "object" && E !== null)
    if ("response" in E && typeof E.response == "string")
      T = E.response;
    else {
      const M = Object.values(E)[0];
      T = M ? String(M) : "";
    }
  else
    T = "";
  return T;
}
const Ma = "SillyTavern-Character-Creator", q0 = "0.3.0", NE = "F_1.9", DE = {
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
], tt = {
  stDescription: Dd,
  charDefinitions: A0,
  lorebookDefinitions: T0,
  xmlFormat: YS,
  jsonFormat: XS,
  noneFormat: $S,
  worldInfoCharDefinition: QS,
  existingFieldDefinitions: nl,
  taskDescription: Wd,
  outputFormatInstructions: Kd,
  personaDescription: JS,
  reviseJsonPrompt: KS,
  reviseXmlPrompt: WS,
  reviseTaskDescription: ex
}, Z0 = {
  version: q0,
  formatVersion: NE,
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
      content: tt.stDescription,
      isDefault: !0,
      label: "ST/Char Card Description"
    },
    charDefinitions: {
      content: tt.charDefinitions,
      isDefault: !0,
      label: "Character Definition Template"
    },
    lorebookDefinitions: {
      content: tt.lorebookDefinitions,
      isDefault: !0,
      label: "Lorebook Definition Template"
    },
    xmlFormat: {
      content: tt.xmlFormat,
      isDefault: !0,
      label: "XML Format Description"
    },
    jsonFormat: {
      content: tt.jsonFormat,
      isDefault: !0,
      label: "JSON Format Description"
    },
    noneFormat: {
      content: tt.noneFormat,
      isDefault: !0,
      label: "Plain Text Format Description"
    },
    worldInfoCharDefinition: {
      content: tt.worldInfoCharDefinition,
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
      content: tt.personaDescription,
      isDefault: !0,
      label: "User Persona Description Template"
    },
    reviseJsonPrompt: {
      content: tt.reviseJsonPrompt,
      isDefault: !0,
      label: "Revise Session (JSON Mode)"
    },
    reviseXmlPrompt: {
      content: tt.reviseXmlPrompt,
      isDefault: !0,
      label: "Revise Session (XML Mode)"
    },
    reviseTaskDescription: {
      content: tt.reviseTaskDescription,
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
function jd(t) {
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
const Pt = new t0(DE.EXTENSION, Z0);
async function ME() {
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
                  content: tt.stDescription,
                  isDefault: !0,
                  label: "ST/Char Card Description"
                },
                charDefinitions: {
                  content: tt.charDefinitions,
                  isDefault: !0,
                  label: "Character Definition Template"
                },
                lorebookDefinitions: {
                  content: tt.lorebookDefinitions,
                  isDefault: !0,
                  label: "Lorebook Definition Template"
                },
                xmlFormat: {
                  content: tt.xmlFormat,
                  isDefault: !0,
                  label: "XML Format Description"
                },
                jsonFormat: {
                  content: tt.jsonFormat,
                  isDefault: !0,
                  label: "JSON Format Description"
                },
                noneFormat: {
                  content: tt.noneFormat,
                  isDefault: !0,
                  label: "Plain Text Format Description"
                },
                worldInfoCharDefinition: {
                  content: tt.worldInfoCharDefinition,
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
                  content: tt.personaDescription,
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
                  content: tt.personaDescription,
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
                  content: tt.stDescription,
                  isDefault: !0,
                  label: "ST/Char Card Description"
                },
                charDefinitions: {
                  content: tt.charDefinitions,
                  isDefault: !0,
                  label: "Character Definition Template"
                },
                worldInfoCharDefinition: {
                  content: tt.worldInfoCharDefinition,
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
            return i.prompts.stDescription.isDefault && (s.prompts.stDescription.content = Dd), s;
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
              content: tt.reviseJsonPrompt,
              isDefault: !0,
              label: "Revise Session (JSON Mode)"
            }, s.prompts.reviseXmlPrompt = {
              content: tt.reviseXmlPrompt,
              isDefault: !0,
              label: "Revise Session (XML Mode)"
            }, s.prompts.reviseTaskDescription = {
              content: tt.reviseTaskDescription,
              isDefault: !0,
              label: "Revise Session Task Description"
            }, i.prompts.charDefinitions.isDefault && (s.prompts.charDefinitions.content = A0), i.prompts.lorebookDefinitions.isDefault && (s.prompts.lorebookDefinitions.content = T0), i.prompts.existingFieldDefinitions.isDefault && (s.prompts.existingFieldDefinitions.content = nl), s;
          }
        },
        {
          from: "F_1.8",
          to: "F_1.9",
          action(i) {
            const s = {
              ...i
            };
            return i.prompts.stDescription.isDefault && (s.prompts.stDescription.content = Dd), s;
          }
        }
      ]
    }).then((i) => {
      t();
    }).catch((i) => {
      console.error(`[${Ma}] Error initializing settings:`, i), Oe("error", `[${Ma}] Failed to initialize settings: ${i.message}`), Jn.Popup.show.confirm(
        `[${Ma}] Failed to load settings. This might be due to an update. Reset settings to default?`,
        "Extension Error"
      ).then((s) => {
        s && (Pt.resetSettings(), Oe("success", `[${Ma}] Settings reset. Reloading may be required.`), t());
      });
    });
  });
}
const me = ({ children: t, className: r, overrideDefaults: i = !1, ...s }) => {
  const o = te.useMemo(() => {
    const u = [];
    return i || u.push("menu_button", "interactable"), u.push(r), u.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ w.jsx("button", { className: o, ...s, children: t });
}, kE = ({ label: t, className: r, overrideDefaults: i = !1, type: s = "text", ...o }) => {
  const u = te.useMemo(() => {
    const f = [];
    return i || (s === "text" || s === "number" || s === "password" || s === "email" || s === "search") && f.push("text_pole"), f.push(r), f.filter(Boolean).join(" ");
  }, [i, r, s]);
  if (s === "checkbox") {
    const f = i ? r : `checkbox_label ${r ?? ""}`.trim();
    return /* @__PURE__ */ w.jsxs("label", { className: f, children: [
      /* @__PURE__ */ w.jsx("input", { type: "checkbox", ...o }),
      t && /* @__PURE__ */ w.jsx("span", { children: t })
    ] });
  }
  return /* @__PURE__ */ w.jsx("input", { type: s, className: u, ...o });
}, yu = ({ children: t, className: r, overrideDefaults: i = !1, ...s }) => {
  const o = te.useMemo(() => {
    const u = [];
    return i || u.push("text_pole"), u.push(r), u.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ w.jsx("select", { className: o, ...s, children: t });
}, yn = ({ children: t, className: r, overrideDefaults: i = !1, ...s }) => {
  const o = te.useMemo(() => {
    const u = [];
    return i || u.push("text_pole", "textarea_compact"), u.push(r), u.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ w.jsx("textarea", { className: o, ...s, children: t });
};
var RE = Wy(), gn = /* @__PURE__ */ ((t) => (t[t.TEXT = 1] = "TEXT", t[t.CONFIRM = 2] = "CONFIRM", t[t.INPUT = 3] = "INPUT", t[t.DISPLAY = 4] = "DISPLAY", t))(gn || {}), Kr = /* @__PURE__ */ ((t) => (t[t.AFFIRMATIVE = 1] = "AFFIRMATIVE", t[t.NEGATIVE = 0] = "NEGATIVE", t[t.CANCELLED = null] = "CANCELLED", t))(Kr || {});
const jE = SillyTavern.getContext(), zi = ({
  content: t,
  type: r,
  inputValue: i = "",
  options: s = {},
  preventEscape: o = !1,
  onComplete: u
}) => {
  var f;
  const p = te.useRef(null), h = te.useRef(null), [g, y] = te.useState(!1), [b, _] = te.useState(null), v = te.useRef(jE.uuidv4()), d = te.useRef({
    id: v.current,
    type: r,
    dlg: null,
    mainInput: null,
    lastFocus: null,
    value: void 0,
    result: void 0,
    inputResults: void 0
  });
  te.useEffect(() => {
    const A = p.current;
    if (!A) return;
    const D = (E) => {
      E.preventDefault(), o || S(Kr.CANCELLED);
    };
    return A.addEventListener("cancel", D), d.current.dlg = A, d.current.mainInput = h.current, Ci.util.popups.push(d.current), A.showModal || (A.classList.add("poly_dialog"), tv.registerDialog(A), new ResizeObserver((E) => {
      for (const T of E)
        tv.reposition(T.target);
    }).observe(A)), A.showModal(), qf(), () => {
      ev(Ci.util.popups, d.current), qf(), A.removeEventListener("cancel", D);
    };
  }, []);
  const S = async (A) => {
    var D, E;
    let T = A;
    if (r === gn.INPUT && (A >= Kr.AFFIRMATIVE ? T = (D = h.current) == null ? void 0 : D.value : A === Kr.NEGATIVE ? T = !1 : A === Kr.CANCELLED ? T = null : T = !1), (E = s.customInputs) != null && E.length) {
      const k = new Map(
        s.customInputs.map((q) => {
          var G;
          const B = (G = p.current) == null ? void 0 : G.querySelector(`#${q.id}`);
          return [B.id, B.checked];
        })
      );
      d.current.inputResults = k;
    }
    if (d.current.result = A, d.current.value = T, s.onClosing && !await s.onClosing(d.current)) {
      y(!0), d.current.value = void 0, d.current.result = void 0, d.current.inputResults = void 0;
      return;
    }
    y(!1), Ci.util.lastResult = {
      value: T,
      result: A,
      inputResults: d.current.inputResults
    };
    const M = p.current;
    M && (M.setAttribute("closing", ""), qf(), e2(M, async () => {
      var k;
      if (M.close(), s.onClose && await s.onClose(d.current), ev(Ci.util.popups, d.current), Ci.util.popups.length > 0) {
        const q = (k = document.activeElement) == null ? void 0 : k.closest(".popup"), G = q?.getAttribute("data-id"), B = Ci.util.popups.find((V) => V.id === G);
        B && B.lastFocus && B.lastFocus.focus();
      }
      u(T);
    }));
  }, x = (A) => {
    A.target instanceof HTMLElement && A.target !== p.current && (_(A.target), d.current.lastFocus = A.target);
  }, O = async (A) => {
  };
  return RE.createPortal(
    /* @__PURE__ */ w.jsx(
      "dialog",
      {
        ref: p,
        className: (() => {
          const A = ["popup"];
          return s.wide && A.push("wide_dialogue_popup"), s.wider && A.push("wider_dialogue_popup"), s.large && A.push("large_dialogue_popup"), s.transparent && A.push("transparent_dialogue_popup"), s.allowHorizontalScrolling && A.push("horizontal_scrolling_dialogue_popup"), s.allowVerticalScrolling && A.push("vertical_scrolling_dialogue_popup"), s.animation && A.push(`popup--animation-${s.animation}`), A.join(" ");
        })(),
        "data-id": v.current,
        onKeyDown: O,
        onFocus: x,
        children: /* @__PURE__ */ w.jsxs("div", { className: "popup-body", children: [
          /* @__PURE__ */ w.jsx("div", { className: "popup-content", children: t }),
          r === gn.INPUT && /* @__PURE__ */ w.jsx(
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
          s.customInputs && /* @__PURE__ */ w.jsx("div", { className: "popup-inputs", children: s.customInputs.map((A) => /* @__PURE__ */ w.jsxs("label", { className: "checkbox_label justifyCenter", htmlFor: A.id, children: [
            /* @__PURE__ */ w.jsx("input", { type: "checkbox", id: A.id, defaultChecked: A.defaultState }),
            /* @__PURE__ */ w.jsx("span", { "data-i18n": A.label, children: A.label }),
            A.tooltip && /* @__PURE__ */ w.jsx(
              "div",
              {
                className: "fa-solid fa-circle-info opacity50p",
                title: A.tooltip,
                "data-i18n": `[title]${A.tooltip}`
              }
            )
          ] }, A.id)) }),
          r !== gn.DISPLAY && /* @__PURE__ */ w.jsxs("div", { className: "popup-controls", children: [
            (f = s.customButtons) == null ? void 0 : f.map((A, D) => {
              const E = typeof A == "string" ? { text: A, result: D + 2 } : A;
              return /* @__PURE__ */ w.jsx(
                "div",
                {
                  className: `menu_button popup-button-custom result-control ${E.classes ?? ""}`,
                  "data-result": E.result,
                  onClick: () => {
                    var T;
                    (T = E.action) == null || T.call(E), S(E.result ?? D + 2);
                  },
                  "data-i18n": E.text,
                  children: E.text
                },
                D
              );
            }),
            r !== gn.DISPLAY && s.okButton !== !1 && /* @__PURE__ */ w.jsx(
              "div",
              {
                className: "popup-button-ok menu_button result-control",
                onClick: () => S(Kr.AFFIRMATIVE),
                "data-result": "1",
                children: typeof s.okButton == "string" ? s.okButton : "OK"
              }
            ),
            r !== gn.DISPLAY && s.cancelButton !== !1 && /* @__PURE__ */ w.jsx(
              "div",
              {
                className: "popup-button-cancel menu_button result-control",
                onClick: () => S(Kr.NEGATIVE),
                "data-result": "0",
                children: typeof s.cancelButton == "string" ? s.cancelButton : "Cancel"
              }
            )
          ] }),
          r === gn.DISPLAY && /* @__PURE__ */ w.jsx(
            "div",
            {
              className: "popup-button-close right_menu_button fa-solid fa-circle-xmark",
              onClick: () => S(Kr.CANCELLED),
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
}, Fs = (t, r, i) => {
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
}, _r = SillyTavern.getContext(), F0 = ({
  initialSelectedProfileId: t,
  allowedTypes: r = { openai: "Chat Completion", textgenerationwebui: "Text Completion" },
  placeholder: i = "Select a Connection Profile",
  onChange: s,
  onCreate: o,
  onUpdate: u,
  onDelete: f
}) => {
  const [p, h] = te.useState(t ?? ""), [g, y] = te.useState(Date.now()), { isEnabled: b, profiles: _, connectApiMap: v } = te.useMemo(() => {
    var x, O;
    return (x = _r.extensionSettings.disabledExtensions) != null && x.includes("connection-manager") ? (console.error("Connection Manager extension is disabled."), { isEnabled: !1, profiles: [], connectApiMap: {} }) : {
      isEnabled: !0,
      profiles: ((O = _r.extensionSettings.connectionManager) == null ? void 0 : O.profiles) ?? [],
      connectApiMap: _r.CONNECT_API_MAP
    };
  }, [g]);
  te.useEffect(() => {
    if (!b) return;
    const x = (D) => {
      Fs(D, r, v) && (y(Date.now()), o?.(D));
    }, O = (D, E) => {
      const T = Fs(D, r, v), M = Fs(E, r, v);
      (T || M) && y(Date.now()), u?.(D, E), p === D.id && !M && (h(""), s?.(void 0));
    }, A = (D) => {
      Fs(D, r, v) && (y(Date.now()), f?.(D), p === D.id && (h(""), s?.(void 0)));
    };
    return _r.eventSource.on("CONNECTION_PROFILE_CREATED", x), _r.eventSource.on("CONNECTION_PROFILE_UPDATED", O), _r.eventSource.on("CONNECTION_PROFILE_DELETED", A), () => {
      _r.eventSource.removeListener("CONNECTION_PROFILE_CREATED", x), _r.eventSource.removeListener("CONNECTION_PROFILE_UPDATED", O), _r.eventSource.removeListener("CONNECTION_PROFILE_DELETED", A);
    };
  }, [b, p, r, v, s, o, u, f]);
  const d = te.useMemo(() => {
    if (!b) return [];
    const x = _.filter((A) => Fs(A, r, v)), O = {};
    for (const [A, D] of Object.entries(r))
      O[A] = { label: D, profiles: [] };
    for (const A of x) {
      const D = v[A.api];
      O[D.selected] && O[D.selected].profiles.push(A);
    }
    for (const A of Object.values(O))
      A.profiles.sort((D, E) => (D.name ?? "").localeCompare(E.name ?? ""));
    return Object.values(O).filter((A) => A.profiles.length > 0);
  }, [b, _, r, v]), S = te.useCallback(
    (x) => {
      const O = x.target.value;
      h(O);
      const A = _.find((D) => D.id === O);
      s?.(A);
    },
    [_, s]
  );
  return b ? /* @__PURE__ */ w.jsxs(yu, { value: p, onChange: S, children: [
    /* @__PURE__ */ w.jsx("option", { value: "", children: i }),
    d.map((x) => /* @__PURE__ */ w.jsx("optgroup", { label: x.label, children: x.profiles.map((O) => /* @__PURE__ */ w.jsx("option", { value: O.id, children: O.name }, O.id)) }, x.label))
  ] }) : /* @__PURE__ */ w.jsx(yu, { disabled: !0, value: "", children: /* @__PURE__ */ w.jsx("option", { children: "Connection Manager disabled" }) });
}, zE = cu.memo(
  ({ item: t, showToggleButton: r, showDeleteButton: i, showSelectInput: s, onToggle: o, onDelete: u, onSelectChange: f }) => {
    const {
      id: p,
      label: h,
      enabled: g,
      canDelete: y = !0,
      canToggle: b = !0,
      showSelect: _ = !0,
      canSelect: v = !0,
      selectOptions: d = [],
      selectValue: S
    } = t, x = {
      display: "flex",
      alignItems: "center",
      padding: "8px 12px",
      border: "1px solid var(--SmartThemeBorderColor, #ccc)",
      color: "var(--SmartThemeBodyColor, #333)",
      marginBottom: "2px",
      opacity: r && !g ? 0.6 : 1
    }, O = { cursor: "pointer", flexShrink: 0 }, A = { display: "inline-block", flexShrink: 0, marginRight: "10px" };
    return /* @__PURE__ */ w.jsxs("li", { className: "sortable-list-item", style: x, "data-id": p, children: [
      /* @__PURE__ */ w.jsx(
        "span",
        {
          className: "drag-handle fas fa-bars",
          style: { cursor: "grab", marginRight: "10px", color: "var(--SmartThemeBodyColor, #555)", flexShrink: 0 }
        }
      ),
      /* @__PURE__ */ w.jsx(
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
      s && _ && v && /* @__PURE__ */ w.jsx(
        yu,
        {
          value: S,
          onChange: (D) => f(p, D.target.value),
          disabled: !g,
          style: { marginRight: "10px", flexShrink: 0, width: "unset" },
          children: d.length === 0 ? /* @__PURE__ */ w.jsx("option", { disabled: !0, children: "--" }) : d.map((D) => /* @__PURE__ */ w.jsx("option", { value: D.value, children: D.label }, D.value))
        }
      ),
      s && (!_ || !v) && /* @__PURE__ */ w.jsx("span", { style: A }),
      r && b && /* @__PURE__ */ w.jsx(
        me,
        {
          overrideDefaults: !0,
          className: `toggle-button fas ${g ? "fa-toggle-on" : "fa-toggle-off"}`,
          style: {
            ...O,
            marginRight: "10px",
            fontSize: "1.2em",
            color: g ? "var(--success-color, #4CAF50)" : "var(--SmartThemeBodyColor, #555)",
            backgroundColor: "transparent",
            border: "none"
          },
          onClick: () => o(p)
        }
      ),
      r && !b && /* @__PURE__ */ w.jsx("span", { style: A }),
      i && y && /* @__PURE__ */ w.jsx(
        me,
        {
          overrideDefaults: !0,
          className: "delete-button fas fa-trash-can",
          style: {
            ...O,
            color: "var(--error-color, #f44336)",
            backgroundColor: "transparent",
            border: "none"
          },
          onClick: () => u(p)
        }
      ),
      i && !y && /* @__PURE__ */ w.jsx("span", { style: { ...A, marginRight: 0 } })
    ] });
  }
), LE = ({
  items: t,
  onItemsChange: r,
  showToggleButton: i = !1,
  showDeleteButton: s = !1,
  showSelectInput: o = !1,
  sortableJsOptions: u = {}
}) => {
  const f = te.useRef(null), p = te.useRef(null);
  te.useEffect(() => (f.current && (p.current = we.create(f.current, {
    handle: ".drag-handle",
    animation: 150,
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    filter: "select, button, .toggle-button, .delete-button",
    // Prevent drag on controls
    preventOnFilter: !1,
    ...u,
    onEnd: (b) => {
      const { oldIndex: _, newIndex: v } = b;
      if (_ === void 0 || v === void 0 || _ === v)
        return;
      const d = Array.from(t), [S] = d.splice(_, 1);
      d.splice(v, 0, S), r(d);
    }
  })), () => {
    var b;
    (b = p.current) == null || b.destroy(), p.current = null;
  }), [t, r, u]);
  const h = (b) => {
    r(t.map((_) => _.id === b ? { ..._, enabled: !_.enabled } : _));
  }, g = (b) => {
    r(t.filter((_) => _.id !== b));
  }, y = (b, _) => {
    r(t.map((v) => v.id === b ? { ...v, selectValue: _ } : v));
  };
  return /* @__PURE__ */ w.jsx("ul", { ref: f, className: "sortable-list", style: { listStyle: "none", padding: 0, margin: 0 }, children: t.map((b) => /* @__PURE__ */ w.jsx(
    zE,
    {
      item: b,
      showToggleButton: i,
      showDeleteButton: s,
      showSelectInput: o,
      onToggle: h,
      onDelete: g,
      onSelectChange: y
    },
    b.id
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
  searchNoResultsText: y = "No results found",
  searchFuseOptions: b,
  inputClasses: _,
  containerClasses: v
}) => {
  const [d, S] = te.useState(!1), [x, O] = te.useState(""), A = te.useRef(null);
  te.useEffect(() => {
    const k = (q) => {
      A.current && !A.current.contains(q.target) && S(!1);
    };
    return document.addEventListener("mousedown", k), () => document.removeEventListener("mousedown", k);
  }, []), te.useEffect(() => {
    d || O("");
  }, [d]);
  const D = te.useMemo(() => {
    if (!h) return null;
    const k = {
      includeScore: !1,
      threshold: 0.4,
      keys: ["label", "value"],
      ...b
    };
    return new Ii(t, k);
  }, [t, h, b]), E = te.useMemo(() => !h || !x.trim() || !D ? t : D.search(x.trim()).map((k) => k.item), [t, x, h, D]), T = async (k) => {
    let q;
    u ? q = r.includes(k) ? r.filter((G) => G !== k) : [...r, k] : q = r.includes(k) ? [] : [k], !(p && !await Promise.resolve(p(r, q))) && (i(q), o && S(!1));
  }, M = te.useMemo(() => {
    var k;
    return r.length === 0 ? s : r.length === 1 ? ((k = t.find((q) => q.value === r[0])) == null ? void 0 : k.label) ?? r[0] : `${r.length} items selected`;
  }, [r, t, s]);
  return /* @__PURE__ */ w.jsxs(
    "div",
    {
      ref: A,
      className: `fancy-dropdown-container ${v ?? ""}`,
      style: {
        position: "relative",
        userSelect: "none",
        opacity: f ? 0.6 : 1,
        pointerEvents: f ? "none" : "auto"
      },
      children: [
        /* @__PURE__ */ w.jsxs(
          "div",
          {
            className: "fancy-dropdown-trigger",
            onClick: () => !f && S(!d),
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
              /* @__PURE__ */ w.jsx("span", { className: "fancy-dropdown-trigger-text", children: M }),
              /* @__PURE__ */ w.jsx("i", { className: `fas ${d ? "fa-chevron-up" : "fa-chevron-down"}`, style: { marginLeft: "8px" } })
            ]
          }
        ),
        d && /* @__PURE__ */ w.jsxs(
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
              h && /* @__PURE__ */ w.jsx(
                "div",
                {
                  style: {
                    padding: "8px",
                    borderBottom: "1px solid var(--border-color)",
                    position: "sticky",
                    top: 0,
                    backgroundColor: "inherit"
                  },
                  children: /* @__PURE__ */ w.jsx(
                    kE,
                    {
                      type: "text",
                      placeholder: g,
                      value: x,
                      onChange: (k) => O(k.target.value),
                      autoFocus: !0,
                      className: _
                    }
                  )
                }
              ),
              /* @__PURE__ */ w.jsx("ul", { style: { listStyle: "none", margin: 0, padding: 0 }, children: E.length > 0 ? E.map((k) => /* @__PURE__ */ w.jsx(
                PE,
                {
                  item: k,
                  isSelected: r.includes(k.value),
                  onClick: T
                },
                k.value
              )) : /* @__PURE__ */ w.jsx(
                "div",
                {
                  style: {
                    padding: "8px 12px",
                    textAlign: "center",
                    color: "var(--text-color-secondary, var(--grey50))"
                  },
                  children: y
                }
              ) })
            ]
          }
        )
      ]
    }
  );
}, PE = cu.memo(({ item: t, isSelected: r, onClick: i }) => {
  const [s, o] = te.useState(!1);
  return /* @__PURE__ */ w.jsxs(
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
        /* @__PURE__ */ w.jsx("span", { children: t.label }),
        r && /* @__PURE__ */ w.jsx("i", { className: "checkmark fa-solid fa-check", style: { marginLeft: "8px" } })
      ]
    }
  );
}), pd = SillyTavern.getContext(), _u = ({
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
  onRename: y,
  onDelete: b,
  buttons: _
}) => {
  const v = te.useMemo(() => r.find((A) => A.value === t), [r, t]), d = te.useCallback((A) => A ? i.includes(A) : !1, [i]), S = async () => {
    const A = await pd.Popup.show.input(
      `Create a new ${s}`,
      `Please enter a name for the new ${s}:`,
      ""
    );
    if (!A || A.trim() === "") return;
    const D = A.trim();
    if (r.some((T) => T.value === D)) {
      await Oe("warning", `A ${s} with this name already exists.`);
      return;
    }
    let E = { value: D, label: D };
    if (g) {
      const T = await Promise.resolve(g(D));
      if (!T.confirmed) return;
      T.value && (typeof T.value == "string" ? E = { value: T.value, label: T.value } : E = T.value);
    }
    u([...r, E]), o(E.value, t);
  }, x = async () => {
    if (!v) {
      await Oe("warning", `Please select a ${s} to rename.`);
      return;
    }
    if (d(v.value)) {
      await Oe("warning", `This ${s} cannot be renamed as it is read-only.`);
      return;
    }
    const A = await pd.Popup.show.input(
      `Rename ${s}`,
      `Please enter a new name for "${v.label}":`,
      v.label
    );
    if (!A || A.trim() === "" || A.trim() === v.value) return;
    const D = A.trim();
    if (r.some((M) => M.value === D)) {
      await Oe("warning", `A ${s} with this name already exists.`);
      return;
    }
    let E = { value: D, label: D };
    if (y) {
      const M = await Promise.resolve(y(v.value, D));
      if (!M.confirmed) return;
      M.value && (typeof M.value == "string" ? E = { value: M.value, label: M.value } : E = M.value);
    }
    const T = r.map((M) => M.value === v.value ? E : M);
    u(T), o(E.value, t);
  }, O = async () => {
    var A;
    if (!v) {
      await Oe("warning", `Please select a ${s} to delete.`);
      return;
    }
    if (d(v.value)) {
      await Oe("warning", `This ${s} cannot be deleted as it is read-only.`);
      return;
    }
    if (!await pd.Popup.show.confirm(
      `Delete ${s}`,
      `Are you sure you want to delete "${v.label}"?`
    ) || b && !await Promise.resolve(b(v.value)))
      return;
    const D = r.findIndex((M) => M.value === v.value), E = r.filter((M) => M.value !== v.value);
    u(E);
    let T;
    if (E.length > 0) {
      const M = Math.min(D, E.length - 1);
      T = (A = E[M]) == null ? void 0 : A.value;
    }
    o(T, t);
  };
  return /* @__PURE__ */ w.jsxs("div", { className: "preset-select-container", style: { display: "flex", alignItems: "center" }, children: [
    /* @__PURE__ */ w.jsx(yu, { value: t ?? "", onChange: (A) => o(A.target.value, t), children: r.map((A) => /* @__PURE__ */ w.jsx("option", { value: A.value, children: A.label }, A.value)) }),
    f && /* @__PURE__ */ w.jsx(
      me,
      {
        className: "fa-solid fa-file-circle-plus",
        title: `Create a new ${s}`,
        onClick: S,
        "data-i18n": `[title]Create a new ${s}`
      }
    ),
    p && /* @__PURE__ */ w.jsx(
      me,
      {
        className: "fa-solid fa-pencil",
        title: `Rename selected ${s}`,
        onClick: x,
        disabled: !v,
        "data-i18n": `[title]Rename selected ${s}`
      }
    ),
    h && /* @__PURE__ */ w.jsx(
      me,
      {
        className: "fa-solid fa-trash-can",
        title: `Delete selected ${s}`,
        onClick: O,
        disabled: !v,
        "data-i18n": `[title]Delete selected ${s}`
      }
    ),
    _?.map((A) => /* @__PURE__ */ w.jsx(
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
}, G0 = () => {
  const [, t] = te.useState(0);
  return te.useCallback(() => {
    t((i) => i + 1);
  }, []);
}, md = SillyTavern.getContext(), IE = () => {
  const t = G0(), r = Pt.getSettings(), [i, s] = te.useState(Wo[0]), o = te.useCallback(
    (E) => {
      const T = Pt.getSettings();
      E(T), Pt.saveSettings(), t();
    },
    [t]
  ), u = te.useMemo(
    () => Object.keys(r.mainContextTemplatePresets).map((E) => ({ value: E, label: E })),
    [r.mainContextTemplatePresets]
  ), f = te.useMemo(
    () => Object.entries(r.prompts).map(([E, T]) => ({
      value: E,
      label: `${T.label} (${E})`
    })),
    [r.prompts]
  ), p = te.useMemo(() => {
    const E = r.mainContextTemplatePresets[r.mainContextTemplatePreset];
    return E ? E.prompts.map((T) => {
      const M = r.prompts[T.promptName], k = M ? `${M.label} (${T.promptName})` : T.promptName;
      return {
        id: T.promptName,
        label: k,
        enabled: T.enabled,
        selectValue: T.role,
        selectOptions: [
          { value: "user", label: "User" },
          { value: "assistant", label: "Assistant" },
          { value: "system", label: "System" }
        ]
      };
    }) : [];
  }, [r.mainContextTemplatePreset, r.mainContextTemplatePresets, r.prompts]), h = (E) => {
    o((T) => {
      T.mainContextTemplatePreset = E ?? "default";
    });
  }, g = (E) => {
    o((T) => {
      const M = {};
      E.forEach((k) => {
        M[k.value] = T.mainContextTemplatePresets[k.value] ?? structuredClone(
          T.mainContextTemplatePresets[T.mainContextTemplatePreset] ?? T.mainContextTemplatePresets.default
        );
      }), T.mainContextTemplatePresets = M;
    });
  }, y = (E) => {
    o((T) => {
      const M = E.map((G) => ({
        promptName: G.id,
        enabled: G.enabled,
        role: G.selectValue ?? "user"
      })), k = {
        ...T.mainContextTemplatePresets[T.mainContextTemplatePreset],
        prompts: M
      }, q = {
        ...T.mainContextTemplatePresets,
        [T.mainContextTemplatePreset]: k
      };
      T.mainContextTemplatePresets = q;
    });
  }, b = async () => {
    await md.Popup.show.confirm("Restore default", "Are you sure?") && o((T) => {
      T.mainContextTemplatePresets = {
        ...T.mainContextTemplatePresets,
        default: structuredClone(Z0.mainContextTemplatePresets.default)
      }, T.mainContextTemplatePreset === "default" ? t() : T.mainContextTemplatePreset = "default";
    });
  }, _ = (E) => {
    o((T) => {
      const M = E.map((B) => B.value);
      Object.keys(T.prompts).filter((B) => !M.includes(B)).forEach((B) => {
        Object.values(T.mainContextTemplatePresets).forEach((V) => {
          V.prompts = V.prompts.filter(($) => $.promptName !== B);
        });
      });
      const G = {};
      E.forEach((B) => {
        G[B.value] = T.prompts[B.value] ?? { content: "", isDefault: !1, label: B.label };
      }), T.prompts = G;
    });
  }, v = (E) => {
    const T = jd(E);
    return T ? r.prompts[T] ? (Oe("error", `Prompt name already exists: ${T}`), { confirmed: !1 }) : (o((M) => {
      M.prompts = {
        ...M.prompts,
        [T]: { content: M.prompts[i]?.content ?? "", isDefault: !1, label: E }
      };
      const k = Object.fromEntries(
        Object.entries(M.mainContextTemplatePresets).map(([q, G]) => [
          q,
          {
            ...G,
            prompts: [...G.prompts, { enabled: !0, promptName: T, role: "user" }]
          }
        ])
      );
      M.mainContextTemplatePresets = k;
    }), s(T), { confirmed: !0, value: T }) : (Oe("error", `Invalid prompt name: ${E}`), { confirmed: !1 });
  }, d = (E, T) => {
    const M = jd(T);
    return M ? r.prompts[M] ? (Oe("error", `Prompt name already exists: ${M}`), { confirmed: !1 }) : (o((k) => {
      const { [E]: q, ...G } = k.prompts;
      k.prompts = {
        ...G,
        [M]: { ...q, label: T }
      };
      const B = Object.fromEntries(
        Object.entries(k.mainContextTemplatePresets).map(([V, $]) => [
          V,
          {
            ...$,
            prompts: $.prompts.map((oe) => oe.promptName === E ? { ...oe, promptName: M } : oe)
          }
        ])
      );
      k.mainContextTemplatePresets = B;
    }), s(M), { confirmed: !0, value: M }) : (Oe("error", `Invalid prompt name: ${T}`), { confirmed: !1 });
  }, S = (E) => {
    const T = E.target.value;
    o((M) => {
      const k = M.prompts[i];
      k && (M.prompts = {
        ...M.prompts,
        [i]: {
          ...k,
          // Copy existing properties
          content: T,
          isDefault: Wo.includes(i) ? tt[i] === T : !1
        }
      });
    });
  }, x = async () => {
    const E = r.prompts[i];
    if (!E) return Oe("warning", "No prompt selected.");
    await md.Popup.show.confirm("Restore Default", `Restore default for "${E.label}"?`) && o((M) => {
      M.prompts = {
        ...M.prompts,
        [i]: {
          ...M.prompts[i],
          content: tt[i]
        }
      };
    });
  }, O = async () => {
    await md.Popup.show.confirm("Reset Everything", "Are you sure? This cannot be undone.") && (Pt.resetSettings(), t(), Oe("success", "Settings have been reset."));
  }, A = r.prompts[i], D = Wo.includes(i);
  return /* @__PURE__ */ w.jsxs("div", { className: "charCreator_settings", children: [
    /* @__PURE__ */ w.jsxs("div", { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ w.jsxs("div", { className: "title_restorable", children: [
        /* @__PURE__ */ w.jsx("span", { children: "Main Context Template" }),
        /* @__PURE__ */ w.jsx(
          me,
          {
            className: "fa-solid fa-undo",
            title: "Restore main context template to default",
            onClick: b
          }
        )
      ] }),
      /* @__PURE__ */ w.jsx(
        _u,
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
      /* @__PURE__ */ w.jsx("div", { style: { marginTop: "5px" }, children: /* @__PURE__ */ w.jsx(
        LE,
        {
          items: p,
          onItemsChange: y,
          showSelectInput: !0,
          showToggleButton: !0
        }
      ) })
    ] }),
    /* @__PURE__ */ w.jsx("hr", { style: { margin: "10px 0" } }),
    /* @__PURE__ */ w.jsxs("div", { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ w.jsxs("div", { className: "title_restorable", children: [
        /* @__PURE__ */ w.jsx("span", { children: "Prompt Templates" }),
        D && /* @__PURE__ */ w.jsx(
          me,
          {
            className: "fa-solid fa-undo",
            title: "Restore selected prompt to default",
            onClick: x
          }
        )
      ] }),
      /* @__PURE__ */ w.jsx(
        _u,
        {
          label: "Prompt",
          items: f,
          value: i,
          readOnlyValues: Wo,
          onChange: (E) => s(E ?? ""),
          onItemsChange: _,
          onCreate: v,
          onRename: d,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0
        }
      ),
      /* @__PURE__ */ w.jsx(
        yn,
        {
          value: A?.content ?? "",
          onChange: S,
          placeholder: "Edit the selected prompt template here...",
          rows: 6,
          style: { marginTop: "5px", width: "100%" }
        }
      )
    ] }),
    /* @__PURE__ */ w.jsx("hr", { style: { margin: "15px 0" } }),
    /* @__PURE__ */ w.jsxs("label", { className: "checkbox_label", style: { marginTop: "15px" }, children: [
      /* @__PURE__ */ w.jsx(
        "input",
        {
          type: "checkbox",
          checked: r.showSaveAsWorldInfoEntry.show,
          onChange: (E) => o((T) => {
            T.showSaveAsWorldInfoEntry.show = E.target.checked;
          })
        }
      ),
      'Show "Save as World Info Entry" option in popup'
    ] }),
    /* @__PURE__ */ w.jsx("hr", { style: { margin: "15px 0" } }),
    /* @__PURE__ */ w.jsx("div", { style: { textAlign: "center", marginTop: "15px" }, children: /* @__PURE__ */ w.jsxs(me, { className: "danger_button", style: { width: "auto" }, onClick: O, children: [
      /* @__PURE__ */ w.jsx("i", { style: { marginRight: "10px" }, className: "fa-solid fa-triangle-exclamation" }),
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
  onPromptChange: y,
  onGenerate: b,
  onContinue: _,
  onClear: v,
  onCompare: d,
  onDelete: S,
  onOpenReviseSessions: x
}) => /* @__PURE__ */ w.jsxs("div", { className: `character-field ${p ? "draft-field" : "core-field"}`, children: [
  /* @__PURE__ */ w.jsx("label", { children: r }),
  /* @__PURE__ */ w.jsxs("div", { className: `field-container ${o ? "large-field" : ""}`, children: [
    /* @__PURE__ */ w.jsx(yn, { value: i, onChange: (O) => g(t, O.target.value), rows: u }),
    /* @__PURE__ */ w.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
      /* @__PURE__ */ w.jsx(me, { onClick: () => b(t), disabled: h, title: "Generate field content", children: h ? /* @__PURE__ */ w.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ w.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }) }),
      /* @__PURE__ */ w.jsx(me, { onClick: () => _(t), disabled: h, title: "Continue from current content", children: /* @__PURE__ */ w.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
      /* @__PURE__ */ w.jsx(me, { onClick: () => v(t), title: "Clear field content", children: /* @__PURE__ */ w.jsx("i", { className: "fa-solid fa-eraser" }) }),
      x && !p && // Disabling for draft fields initially for simplicity
      /* @__PURE__ */ w.jsx(me, { onClick: () => x(t), title: "Revise with AI chat", children: /* @__PURE__ */ w.jsx("i", { className: "fa-solid fa-comments" }) }),
      !p && d && /* @__PURE__ */ w.jsx(me, { onClick: () => d(t), title: "Compare with loaded character", children: /* @__PURE__ */ w.jsx("i", { className: "fa-solid fa-code-compare" }) }),
      p && S && /* @__PURE__ */ w.jsx(me, { onClick: () => S(t), title: "Delete Draft Field", className: "danger_button", children: /* @__PURE__ */ w.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] })
  ] }),
  f && /* @__PURE__ */ w.jsx("div", { className: "field-prompt-container", children: /* @__PURE__ */ w.jsx(
    yn,
    {
      value: s,
      onChange: (O) => y(t, O.target.value),
      placeholder: `Enter additional prompt for ${r.toLowerCase()}...`,
      rows: 3
    }
  ) })
] }), BE = SillyTavern.getContext(), UE = ({
  greetings: t,
  onGreetingsChange: r,
  onGenerate: i,
  onContinue: s,
  onCompare: o,
  isGenerating: u
}) => {
  const [f, p] = te.useState(0);
  te.useEffect(() => {
    f >= t.length && t.length > 0 ? p(t.length - 1) : t.length === 0 && p(0);
  }, [t, f]);
  const h = () => {
    const _ = [...t, { value: "", prompt: "" }];
    r(_), p(_.length - 1);
  }, g = async () => {
    if (t.length === 0) return;
    if (await BE.Popup.show.confirm("Delete Greeting", "Are you sure?")) {
      const v = t.filter((d, S) => S !== f);
      r(v);
    }
  }, y = (_, v, d) => {
    const S = [...t];
    S[_][v] = d, r(S);
  }, b = t[f];
  return /* @__PURE__ */ w.jsxs("div", { className: "character-field alternate-greetings-field", children: [
    /* @__PURE__ */ w.jsx("label", { children: "Alternate Greetings" }),
    /* @__PURE__ */ w.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }, children: [
      /* @__PURE__ */ w.jsx(
        "div",
        {
          className: "alternate-greetings-tabs",
          style: { display: "flex", flexWrap: "wrap", gap: "5px", flexGrow: 1 },
          children: t.map((_, v) => /* @__PURE__ */ w.jsxs(
            me,
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
      /* @__PURE__ */ w.jsxs(me, { onClick: h, title: "Add a new alternate greeting", children: [
        /* @__PURE__ */ w.jsx("i", { className: "fa-solid fa-plus" }),
        " Add"
      ] })
    ] }),
    t.length === 0 ? /* @__PURE__ */ w.jsx("p", { className: "subtle", children: 'No alternate greetings defined. Click "Add" to create one.' }) : /* @__PURE__ */ w.jsxs("div", { className: "field-container", children: [
      /* @__PURE__ */ w.jsxs("div", { style: { flexGrow: 1 }, children: [
        /* @__PURE__ */ w.jsx(
          yn,
          {
            value: b?.value ?? "",
            onChange: (_) => y(f, "value", _.target.value),
            rows: 8,
            placeholder: "Enter greeting content..."
          }
        ),
        /* @__PURE__ */ w.jsx("div", { className: "field-prompt-container", style: { marginTop: "5px" }, children: /* @__PURE__ */ w.jsx(
          yn,
          {
            value: b?.prompt ?? "",
            onChange: (_) => y(f, "prompt", _.target.value),
            rows: 2,
            placeholder: "Enter specific prompt for this greeting..."
          }
        ) })
      ] }),
      /* @__PURE__ */ w.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
        /* @__PURE__ */ w.jsx(me, { onClick: () => i(f), disabled: u, title: "Generate greeting", children: u ? /* @__PURE__ */ w.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ w.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }) }),
        /* @__PURE__ */ w.jsx(me, { onClick: () => s(f), disabled: u, title: "Continue greeting", children: /* @__PURE__ */ w.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
        /* @__PURE__ */ w.jsx(
          me,
          {
            onClick: () => y(f, "value", ""),
            disabled: u,
            title: "Clear greeting",
            children: /* @__PURE__ */ w.jsx("i", { className: "fa-solid fa-eraser" })
          }
        ),
        /* @__PURE__ */ w.jsx(me, { onClick: () => o(f), disabled: u, title: "Compare greeting", children: /* @__PURE__ */ w.jsx("i", { className: "fa-solid fa-code-compare" }) }),
        /* @__PURE__ */ w.jsx(
          me,
          {
            onClick: g,
            disabled: u,
            title: "Delete greeting",
            className: "danger_button",
            children: /* @__PURE__ */ w.jsx("i", { className: "fa-solid fa-trash-can" })
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
      var u = this, f, p = function(E) {
        if (E = u.postProcess(E, s), o) {
          setTimeout(function() {
            o(E);
          }, 0);
          return;
        } else
          return E;
      }, h = i.length, g = r.length, y = 1, b = h + g;
      s.maxEditLength != null && (b = Math.min(b, s.maxEditLength));
      var _ = (f = s.timeout) !== null && f !== void 0 ? f : 1 / 0, v = Date.now() + _, d = [{ oldPos: -1, lastComponent: void 0 }], S = this.extractCommon(d[0], i, r, 0, s);
      if (d[0].oldPos + 1 >= g && S + 1 >= h)
        return p(this.buildValues(d[0].lastComponent, i, r));
      var x = -1 / 0, O = 1 / 0, A = function() {
        for (var E = Math.max(x, -y); E <= Math.min(O, y); E += 2) {
          var T = void 0, M = d[E - 1], k = d[E + 1];
          M && (d[E - 1] = void 0);
          var q = !1;
          if (k) {
            var G = k.oldPos - E;
            q = k && 0 <= G && G < h;
          }
          var B = M && M.oldPos + 1 < g;
          if (!q && !B) {
            d[E] = void 0;
            continue;
          }
          if (!B || q && M.oldPos < k.oldPos ? T = u.addToPath(k, !0, !1, 0, s) : T = u.addToPath(M, !1, !0, 1, s), S = u.extractCommon(T, i, r, E, s), T.oldPos + 1 >= g && S + 1 >= h)
            return p(u.buildValues(T.lastComponent, i, r)) || !0;
          d[E] = T, T.oldPos + 1 >= g && (O = Math.min(O, E - 1)), S + 1 >= h && (x = Math.max(x, E + 1));
        }
        y++;
      };
      if (o)
        (function E() {
          setTimeout(function() {
            if (y > b || Date.now() > v)
              return o(void 0);
            A() || E();
          }, 0);
        })();
      else
        for (; y <= b && Date.now() <= v; ) {
          var D = A();
          if (D)
            return D;
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
      for (var f = i.length, p = s.length, h = r.oldPos, g = h - o, y = 0; g + 1 < f && h + 1 < p && this.equals(s[h + 1], i[g + 1], u); )
        g++, h++, y++, u.oneChangePerToken && (r.lastComponent = { count: 1, previousComponent: r.lastComponent, added: !1, removed: !1 });
      return y && !u.oneChangePerToken && (r.lastComponent = { count: y, previousComponent: r.lastComponent, added: !1, removed: !1 }), r.oldPos = h, g;
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
        var y = o[p];
        if (y.removed)
          y.value = this.join(s.slice(g, g + y.count)), g += y.count;
        else {
          if (!y.added && this.useLongestToken) {
            var b = i.slice(h, h + y.count);
            b = b.map(function(_, v) {
              var d = s[g + v];
              return d.length > _.length ? d : _;
            }), y.value = this.join(b);
          } else
            y.value = this.join(i.slice(h, h + y.count));
          h += y.count, y.added || (g += y.count);
        }
      }
      return o;
    }, t;
  })()
), HE = /* @__PURE__ */ (function() {
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
})(), qE = (
  /** @class */
  (function(t) {
    HE(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r;
  })(ra)
);
new qE();
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
var V0 = /* @__PURE__ */ (function() {
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
})(), bu = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", FE = new RegExp("[".concat(bu, "]+|\\s+|[^").concat(bu, "]"), "ug"), GE = (
  /** @class */
  (function(t) {
    V0(r, t);
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
        o = i.match(FE) || [];
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
        p.added ? u = p : p.removed ? f = p : ((u || f) && Ty(o, f, u, p), o = p, u = null, f = null);
      }), (u || f) && Ty(o, f, u, null), i;
    }, r;
  })(ra)
), VE = new GE();
function Y0(t, r, i) {
  return VE.diff(t, r, i);
}
function Ty(t, r, i, s) {
  if (r && i) {
    var o = Jr(r.value), u = Vs(r.value), f = Jr(i.value), p = Vs(i.value);
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
      var y = Jr(i.value);
      i.value = i.value.substring(y.length);
    }
    if (s) {
      var y = Jr(s.value);
      s.value = s.value.substring(y.length);
    }
  } else if (t && s) {
    var b = Jr(s.value), _ = Jr(r.value), v = Vs(r.value), d = Cy(b, _);
    r.value = Gs(r.value, d);
    var S = wy(Gs(b, d), v);
    r.value = eu(r.value, S), s.value = zd(s.value, b, S), t.value = Ld(t.value, b, b.slice(0, b.length - S.length));
  } else if (s) {
    var x = Jr(s.value), O = Vs(r.value), A = Ay(O, x);
    r.value = eu(r.value, A);
  } else if (t) {
    var D = Vs(t.value), E = Jr(r.value), A = Ay(D, E);
    r.value = Gs(r.value, A);
  }
}
var YE = (
  /** @class */
  (function(t) {
    V0(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      var s = new RegExp("(\\r?\\n)|[".concat(bu, "]+|[^\\S\\n\\r]+|[^").concat(bu, "]"), "ug");
      return i.match(s) || [];
    }, r;
  })(ra)
);
new YE();
var XE = /* @__PURE__ */ (function() {
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
})(), $E = (
  /** @class */
  (function(t) {
    XE(r, t);
    function r() {
      var i = t !== null && t.apply(this, arguments) || this;
      return i.tokenize = X0, i;
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
new $E();
function X0(t, r) {
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
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      return i.split(new RegExp("(?<=[.!?])(\\s+|$)"));
    }, r;
  })(ra)
);
new JE();
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
      return i.split(/([{}:;,]|\s+)/);
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
      var i = t !== null && t.apply(this, arguments) || this;
      return i.tokenize = X0, i;
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
new tC();
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
new rC();
const aC = ({ originalContent: t, newContent: r, fieldName: i }) => {
  const s = te.useMemo(() => {
    const o = Y0(t, r);
    let u = "", f = "";
    return o.forEach((p) => {
      const g = `<span style="${p.added ? "color: green; background-color: #e6ffed;" : p.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${p.value}</span>`;
      p.added || (u += g), p.removed || (f += g);
    }), { originalHtml: u, newHtml: f };
  }, [t, r]);
  return /* @__PURE__ */ w.jsxs("div", { className: "compare-popup", style: { padding: "10px" }, children: [
    /* @__PURE__ */ w.jsxs("h3", { children: [
      "Compare Changes for: ",
      i
    ] }),
    /* @__PURE__ */ w.jsxs("div", { style: { display: "flex", gap: "1rem", marginTop: "1rem" }, children: [
      /* @__PURE__ */ w.jsxs("div", { style: { flex: "1" }, children: [
        /* @__PURE__ */ w.jsx("h4", { children: "Loaded Character Content" }),
        /* @__PURE__ */ w.jsx(
          "div",
          {
            className: "content",
            style: { maxHeight: "400px", overflowY: "auto" },
            dangerouslySetInnerHTML: { __html: s.originalHtml }
          }
        )
      ] }),
      /* @__PURE__ */ w.jsxs("div", { style: { flex: "1" }, children: [
        /* @__PURE__ */ w.jsx("h4", { children: "Current Content" }),
        /* @__PURE__ */ w.jsx(
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
    var g;
    Object.defineProperty(p, "_zod", {
      value: p._zod ?? {},
      enumerable: !1
    }), (g = p._zod).traits ?? (g.traits = /* @__PURE__ */ new Set()), p._zod.traits.add(t), r(p, h);
    for (const y in f.prototype)
      y in p || Object.defineProperty(p, y, { value: f.prototype[y].bind(p) });
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
    for (const y of g._zod.deferred)
      y();
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
class $0 extends Error {
  constructor(r) {
    super(`Encountered unidirectional transform during encode: ${r}`), this.name = "ZodEncodeError";
  }
}
const Q0 = {};
function ja(t) {
  return Q0;
}
function J0(t) {
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
function iC(t, r) {
  const i = (t.toString().split(".")[1] || "").length, s = r.toString();
  let o = (s.split(".")[1] || "").length;
  if (o === 0 && /\d?e-\d?/.test(s)) {
    const h = s.match(/\d?e-(\d?)/);
    h?.[1] && (o = Number.parseInt(h[1]));
  }
  const u = i > o ? i : o, f = Number.parseInt(t.toFixed(u).replace(".", "")), p = Number.parseInt(r.toFixed(u).replace(".", ""));
  return f % p / 10 ** u;
}
const Oy = Symbol("evaluating");
function at(t, r, i) {
  let s;
  Object.defineProperty(t, r, {
    get() {
      if (s !== Oy)
        return s === void 0 && (s = Oy, s = i()), s;
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
function Ny(t) {
  return JSON.stringify(t);
}
const K0 = "captureStackTrace" in Error ? Error.captureStackTrace : (...t) => {
};
function Su(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}
const sC = nh(() => {
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
function W0(t) {
  return rl(t) ? { ...t } : Array.isArray(t) ? [...t] : t;
}
const lC = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
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
function oC(t) {
  return Object.keys(t).filter((r) => t[r]._zod.optin === "optional" && t[r]._zod.optout === "optional");
}
const uC = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function cC(t, r) {
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
function fC(t, r) {
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
function dC(t, r) {
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
function hC(t, r) {
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
function pC(t, r) {
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
function mC(t, r, i) {
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
function gC(t, r, i) {
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
function Ri(t, r = 0) {
  if (t.aborted === !0)
    return !0;
  for (let i = r; i < t.issues.length; i++)
    if (t.issues[i]?.continue !== !0)
      return !0;
  return !1;
}
function e1(t, r) {
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
const t1 = (t, r) => {
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
}, n1 = ee("$ZodError", t1), r1 = ee("$ZodError", t1, { Parent: Error });
function vC(t, r = (i) => i.message) {
  const i = {}, s = [];
  for (const o of t.issues)
    o.path.length > 0 ? (i[o.path[0]] = i[o.path[0]] || [], i[o.path[0]].push(r(o))) : s.push(r(o));
  return { formErrors: s, fieldErrors: i };
}
function yC(t, r = (i) => i.message) {
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
    const p = new (o?.Err ?? t)(f.issues.map((h) => za(h, u, ja())));
    throw K0(p, o?.callee), p;
  }
  return f.value;
}, lh = (t) => async (r, i, s, o) => {
  const u = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let f = r._zod.run({ value: i, issues: [] }, u);
  if (f instanceof Promise && (f = await f), f.issues.length) {
    const p = new (o?.Err ?? t)(f.issues.map((h) => za(h, u, ja())));
    throw K0(p, o?.callee), p;
  }
  return f.value;
}, Tu = (t) => (r, i, s) => {
  const o = s ? { ...s, async: !1 } : { async: !1 }, u = r._zod.run({ value: i, issues: [] }, o);
  if (u instanceof Promise)
    throw new Li();
  return u.issues.length ? {
    success: !1,
    error: new (t ?? n1)(u.issues.map((f) => za(f, o, ja())))
  } : { success: !0, data: u.value };
}, _C = /* @__PURE__ */ Tu(r1), Ou = (t) => async (r, i, s) => {
  const o = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let u = r._zod.run({ value: i, issues: [] }, o);
  return u instanceof Promise && (u = await u), u.issues.length ? {
    success: !1,
    error: new t(u.issues.map((f) => za(f, o, ja())))
  } : { success: !0, data: u.value };
}, bC = /* @__PURE__ */ Ou(r1), SC = (t) => (r, i, s) => {
  const o = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return sh(t)(r, i, o);
}, xC = (t) => (r, i, s) => sh(t)(r, i, s), EC = (t) => async (r, i, s) => {
  const o = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return lh(t)(r, i, o);
}, CC = (t) => async (r, i, s) => lh(t)(r, i, s), wC = (t) => (r, i, s) => {
  const o = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return Tu(t)(r, i, o);
}, AC = (t) => (r, i, s) => Tu(t)(r, i, s), TC = (t) => async (r, i, s) => {
  const o = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return Ou(t)(r, i, o);
}, OC = (t) => async (r, i, s) => Ou(t)(r, i, s), NC = /^[cC][^\s-]{8,}$/, DC = /^[0-9a-z]+$/, MC = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, kC = /^[0-9a-vA-V]{20}$/, RC = /^[A-Za-z0-9]{27}$/, jC = /^[a-zA-Z0-9_-]{21}$/, zC = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, LC = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Dy = (t) => t ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, PC = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, IC = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function BC() {
  return new RegExp(IC, "u");
}
const UC = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, HC = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, qC = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, ZC = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, FC = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, a1 = /^[A-Za-z0-9_-]*$/, GC = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, VC = /^\+(?:[0-9]){6,14}[0-9]$/, i1 = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", YC = /* @__PURE__ */ new RegExp(`^${i1}$`);
function s1(t) {
  const r = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof t.precision == "number" ? t.precision === -1 ? `${r}` : t.precision === 0 ? `${r}:[0-5]\\d` : `${r}:[0-5]\\d\\.\\d{${t.precision}}` : `${r}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function XC(t) {
  return new RegExp(`^${s1(t)}$`);
}
function $C(t) {
  const r = s1({ precision: t.precision }), i = ["Z"];
  t.local && i.push(""), t.offset && i.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const s = `${r}(?:${i.join("|")})`;
  return new RegExp(`^${i1}T(?:${s})$`);
}
const QC = (t) => {
  const r = t ? `[\\s\\S]{${t?.minimum ?? 0},${t?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${r}$`);
}, JC = /^-?\d+$/, KC = /^-?\d+(?:\.\d+)?/, WC = /^[^A-Z]*$/, ew = /^[^a-z]*$/, rn = /* @__PURE__ */ ee("$ZodCheck", (t, r) => {
  var i;
  t._zod ?? (t._zod = {}), t._zod.def = r, (i = t._zod).onattach ?? (i.onattach = []);
}), l1 = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, o1 = /* @__PURE__ */ ee("$ZodCheckLessThan", (t, r) => {
  rn.init(t, r);
  const i = l1[typeof r.value];
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
}), u1 = /* @__PURE__ */ ee("$ZodCheckGreaterThan", (t, r) => {
  rn.init(t, r);
  const i = l1[typeof r.value];
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
}), tw = /* @__PURE__ */ ee("$ZodCheckMultipleOf", (t, r) => {
  rn.init(t, r), t._zod.onattach.push((i) => {
    var s;
    (s = i._zod.bag).multipleOf ?? (s.multipleOf = r.value);
  }), t._zod.check = (i) => {
    if (typeof i.value != typeof r.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof i.value == "bigint" ? i.value % r.value === BigInt(0) : iC(i.value, r.value) === 0) || i.issues.push({
      origin: typeof i.value,
      code: "not_multiple_of",
      divisor: r.value,
      input: i.value,
      inst: t,
      continue: !r.abort
    });
  };
}), nw = /* @__PURE__ */ ee("$ZodCheckNumberFormat", (t, r) => {
  rn.init(t, r), r.format = r.format || "float64";
  const i = r.format?.includes("int"), s = i ? "int" : "number", [o, u] = uC[r.format];
  t._zod.onattach.push((f) => {
    const p = f._zod.bag;
    p.format = r.format, p.minimum = o, p.maximum = u, i && (p.pattern = JC);
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
}), rw = /* @__PURE__ */ ee("$ZodCheckMaxLength", (t, r) => {
  var i;
  rn.init(t, r), (i = t._zod.def).when ?? (i.when = (s) => {
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
}), aw = /* @__PURE__ */ ee("$ZodCheckMinLength", (t, r) => {
  var i;
  rn.init(t, r), (i = t._zod.def).when ?? (i.when = (s) => {
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
}), iw = /* @__PURE__ */ ee("$ZodCheckLengthEquals", (t, r) => {
  var i;
  rn.init(t, r), (i = t._zod.def).when ?? (i.when = (s) => {
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
}), Nu = /* @__PURE__ */ ee("$ZodCheckStringFormat", (t, r) => {
  var i, s;
  rn.init(t, r), t._zod.onattach.push((o) => {
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
}), sw = /* @__PURE__ */ ee("$ZodCheckRegex", (t, r) => {
  Nu.init(t, r), t._zod.check = (i) => {
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
}), lw = /* @__PURE__ */ ee("$ZodCheckLowerCase", (t, r) => {
  r.pattern ?? (r.pattern = WC), Nu.init(t, r);
}), ow = /* @__PURE__ */ ee("$ZodCheckUpperCase", (t, r) => {
  r.pattern ?? (r.pattern = ew), Nu.init(t, r);
}), uw = /* @__PURE__ */ ee("$ZodCheckIncludes", (t, r) => {
  rn.init(t, r);
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
}), cw = /* @__PURE__ */ ee("$ZodCheckStartsWith", (t, r) => {
  rn.init(t, r);
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
}), fw = /* @__PURE__ */ ee("$ZodCheckEndsWith", (t, r) => {
  rn.init(t, r);
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
}), dw = /* @__PURE__ */ ee("$ZodCheckOverwrite", (t, r) => {
  rn.init(t, r), t._zod.check = (i) => {
    i.value = r.tx(i.value);
  };
});
class hw {
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
const pw = {
  major: 4,
  minor: 1,
  patch: 12
}, Et = /* @__PURE__ */ ee("$ZodType", (t, r) => {
  var i;
  t ?? (t = {}), t._zod.def = r, t._zod.bag = t._zod.bag || {}, t._zod.version = pw;
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
      let g = Ri(f), y;
      for (const b of p) {
        if (b._zod.def.when) {
          if (!b._zod.def.when(f))
            continue;
        } else if (g)
          continue;
        const _ = f.issues.length, v = b._zod.check(f);
        if (v instanceof Promise && h?.async === !1)
          throw new Li();
        if (y || v instanceof Promise)
          y = (y ?? Promise.resolve()).then(async () => {
            await v, f.issues.length !== _ && (g || (g = Ri(f, _)));
          });
        else {
          if (f.issues.length === _)
            continue;
          g || (g = Ri(f, _));
        }
      }
      return y ? y.then(() => f) : f;
    }, u = (f, p, h) => {
      if (Ri(f))
        return f.aborted = !0, f;
      const g = o(p, s, h);
      if (g instanceof Promise) {
        if (h.async === !1)
          throw new Li();
        return g.then((y) => t._zod.parse(y, h));
      }
      return t._zod.parse(g, h);
    };
    t._zod.run = (f, p) => {
      if (p.skipChecks)
        return t._zod.parse(f, p);
      if (p.direction === "backward") {
        const g = t._zod.parse({ value: f.value, issues: [] }, { ...p, skipChecks: !0 });
        return g instanceof Promise ? g.then((y) => u(y, f, p)) : u(g, f, p);
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
        const u = _C(t, o);
        return u.success ? { value: u.data } : { issues: u.error?.issues };
      } catch {
        return bC(t, o).then((f) => f.success ? { value: f.data } : { issues: f.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), oh = /* @__PURE__ */ ee("$ZodString", (t, r) => {
  Et.init(t, r), t._zod.pattern = [...t?._zod.bag?.patterns ?? []].pop() ?? QC(t._zod.bag), t._zod.parse = (i, s) => {
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
}), ot = /* @__PURE__ */ ee("$ZodStringFormat", (t, r) => {
  Nu.init(t, r), oh.init(t, r);
}), mw = /* @__PURE__ */ ee("$ZodGUID", (t, r) => {
  r.pattern ?? (r.pattern = LC), ot.init(t, r);
}), gw = /* @__PURE__ */ ee("$ZodUUID", (t, r) => {
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
    r.pattern ?? (r.pattern = Dy(s));
  } else
    r.pattern ?? (r.pattern = Dy());
  ot.init(t, r);
}), vw = /* @__PURE__ */ ee("$ZodEmail", (t, r) => {
  r.pattern ?? (r.pattern = PC), ot.init(t, r);
}), yw = /* @__PURE__ */ ee("$ZodURL", (t, r) => {
  ot.init(t, r), t._zod.check = (i) => {
    try {
      const s = i.value.trim(), o = new URL(s);
      r.hostname && (r.hostname.lastIndex = 0, r.hostname.test(o.hostname) || i.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: GC.source,
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
  r.pattern ?? (r.pattern = BC()), ot.init(t, r);
}), bw = /* @__PURE__ */ ee("$ZodNanoID", (t, r) => {
  r.pattern ?? (r.pattern = jC), ot.init(t, r);
}), Sw = /* @__PURE__ */ ee("$ZodCUID", (t, r) => {
  r.pattern ?? (r.pattern = NC), ot.init(t, r);
}), xw = /* @__PURE__ */ ee("$ZodCUID2", (t, r) => {
  r.pattern ?? (r.pattern = DC), ot.init(t, r);
}), Ew = /* @__PURE__ */ ee("$ZodULID", (t, r) => {
  r.pattern ?? (r.pattern = MC), ot.init(t, r);
}), Cw = /* @__PURE__ */ ee("$ZodXID", (t, r) => {
  r.pattern ?? (r.pattern = kC), ot.init(t, r);
}), ww = /* @__PURE__ */ ee("$ZodKSUID", (t, r) => {
  r.pattern ?? (r.pattern = RC), ot.init(t, r);
}), Aw = /* @__PURE__ */ ee("$ZodISODateTime", (t, r) => {
  r.pattern ?? (r.pattern = $C(r)), ot.init(t, r);
}), Tw = /* @__PURE__ */ ee("$ZodISODate", (t, r) => {
  r.pattern ?? (r.pattern = YC), ot.init(t, r);
}), Ow = /* @__PURE__ */ ee("$ZodISOTime", (t, r) => {
  r.pattern ?? (r.pattern = XC(r)), ot.init(t, r);
}), Nw = /* @__PURE__ */ ee("$ZodISODuration", (t, r) => {
  r.pattern ?? (r.pattern = zC), ot.init(t, r);
}), Dw = /* @__PURE__ */ ee("$ZodIPv4", (t, r) => {
  r.pattern ?? (r.pattern = UC), ot.init(t, r), t._zod.onattach.push((i) => {
    const s = i._zod.bag;
    s.format = "ipv4";
  });
}), Mw = /* @__PURE__ */ ee("$ZodIPv6", (t, r) => {
  r.pattern ?? (r.pattern = HC), ot.init(t, r), t._zod.onattach.push((i) => {
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
}), kw = /* @__PURE__ */ ee("$ZodCIDRv4", (t, r) => {
  r.pattern ?? (r.pattern = qC), ot.init(t, r);
}), Rw = /* @__PURE__ */ ee("$ZodCIDRv6", (t, r) => {
  r.pattern ?? (r.pattern = ZC), ot.init(t, r), t._zod.check = (i) => {
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
function c1(t) {
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
const jw = /* @__PURE__ */ ee("$ZodBase64", (t, r) => {
  r.pattern ?? (r.pattern = FC), ot.init(t, r), t._zod.onattach.push((i) => {
    i._zod.bag.contentEncoding = "base64";
  }), t._zod.check = (i) => {
    c1(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64",
      input: i.value,
      inst: t,
      continue: !r.abort
    });
  };
});
function zw(t) {
  if (!a1.test(t))
    return !1;
  const r = t.replace(/[-_]/g, (s) => s === "-" ? "+" : "/"), i = r.padEnd(Math.ceil(r.length / 4) * 4, "=");
  return c1(i);
}
const Lw = /* @__PURE__ */ ee("$ZodBase64URL", (t, r) => {
  r.pattern ?? (r.pattern = a1), ot.init(t, r), t._zod.onattach.push((i) => {
    i._zod.bag.contentEncoding = "base64url";
  }), t._zod.check = (i) => {
    zw(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: i.value,
      inst: t,
      continue: !r.abort
    });
  };
}), Pw = /* @__PURE__ */ ee("$ZodE164", (t, r) => {
  r.pattern ?? (r.pattern = VC), ot.init(t, r);
});
function Iw(t, r = null) {
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
const Bw = /* @__PURE__ */ ee("$ZodJWT", (t, r) => {
  ot.init(t, r), t._zod.check = (i) => {
    Iw(i.value, r.alg) || i.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: i.value,
      inst: t,
      continue: !r.abort
    });
  };
}), f1 = /* @__PURE__ */ ee("$ZodNumber", (t, r) => {
  Et.init(t, r), t._zod.pattern = t._zod.bag.pattern ?? KC, t._zod.parse = (i, s) => {
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
}), Uw = /* @__PURE__ */ ee("$ZodNumber", (t, r) => {
  nw.init(t, r), f1.init(t, r);
}), Hw = /* @__PURE__ */ ee("$ZodUnknown", (t, r) => {
  Et.init(t, r), t._zod.parse = (i) => i;
}), qw = /* @__PURE__ */ ee("$ZodNever", (t, r) => {
  Et.init(t, r), t._zod.parse = (i, s) => (i.issues.push({
    expected: "never",
    code: "invalid_type",
    input: i.value,
    inst: t
  }), i);
});
function My(t, r, i) {
  t.issues.length && r.issues.push(...e1(i, t.issues)), r.value[i] = t.value;
}
const Zw = /* @__PURE__ */ ee("$ZodArray", (t, r) => {
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
      h instanceof Promise ? u.push(h.then((g) => My(g, i, f))) : My(h, i, f);
    }
    return u.length ? Promise.all(u).then(() => i) : i;
  };
});
function xu(t, r, i, s) {
  t.issues.length && r.issues.push(...e1(i, t.issues)), t.value === void 0 ? i in s && (r.value[i] = void 0) : r.value[i] = t.value;
}
function d1(t) {
  const r = Object.keys(t.shape);
  for (const s of r)
    if (!t.shape?.[s]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${s}": expected a Zod schema`);
  const i = oC(t.shape);
  return {
    ...t,
    keys: r,
    keySet: new Set(r),
    numKeys: r.length,
    optionalKeys: new Set(i)
  };
}
function h1(t, r, i, s, o, u) {
  const f = [], p = o.keySet, h = o.catchall._zod, g = h.def.type;
  for (const y of Object.keys(r)) {
    if (p.has(y))
      continue;
    if (g === "never") {
      f.push(y);
      continue;
    }
    const b = h.run({ value: r[y], issues: [] }, s);
    b instanceof Promise ? t.push(b.then((_) => xu(_, i, y, r))) : xu(b, i, y, r);
  }
  return f.length && i.issues.push({
    code: "unrecognized_keys",
    keys: f,
    input: r,
    inst: u
  }), t.length ? Promise.all(t).then(() => i) : i;
}
const Fw = /* @__PURE__ */ ee("$ZodObject", (t, r) => {
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
  const s = nh(() => d1(r));
  at(t._zod, "propValues", () => {
    const p = r.shape, h = {};
    for (const g in p) {
      const y = p[g]._zod;
      if (y.values) {
        h[g] ?? (h[g] = /* @__PURE__ */ new Set());
        for (const b of y.values)
          h[g].add(b);
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
    const y = [], b = f.shape;
    for (const _ of f.keys) {
      const d = b[_]._zod.run({ value: g[_], issues: [] }, h);
      d instanceof Promise ? y.push(d.then((S) => xu(S, p, _, g))) : xu(d, p, _, g);
    }
    return u ? h1(y, g, p, h, s.value, t) : y.length ? Promise.all(y).then(() => p) : p;
  };
}), Gw = /* @__PURE__ */ ee("$ZodObjectJIT", (t, r) => {
  Fw.init(t, r);
  const i = t._zod.parse, s = nh(() => d1(r)), o = (_) => {
    const v = new hw(["shape", "payload", "ctx"]), d = s.value, S = (D) => {
      const E = Ny(D);
      return `shape[${E}]._zod.run({ value: input[${E}], issues: [] }, ctx)`;
    };
    v.write("const input = payload.value;");
    const x = /* @__PURE__ */ Object.create(null);
    let O = 0;
    for (const D of d.keys)
      x[D] = `key_${O++}`;
    v.write("const newResult = {};");
    for (const D of d.keys) {
      const E = x[D], T = Ny(D);
      v.write(`const ${E} = ${S(D)};`), v.write(`
        if (${E}.issues.length) {
          payload.issues = payload.issues.concat(${E}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${T}, ...iss.path] : [${T}]
          })));
        }
        
        
        if (${E}.value === undefined) {
          if (${T} in input) {
            newResult[${T}] = undefined;
          }
        } else {
          newResult[${T}] = ${E}.value;
        }
        
      `);
    }
    v.write("payload.value = newResult;"), v.write("return payload;");
    const A = v.compile();
    return (D, E) => A(_, D, E);
  };
  let u;
  const f = Su, p = !Q0.jitless, g = p && sC.value, y = r.catchall;
  let b;
  t._zod.parse = (_, v) => {
    b ?? (b = s.value);
    const d = _.value;
    return f(d) ? p && g && v?.async === !1 && v.jitless !== !0 ? (u || (u = o(r.shape)), _ = u(_, v), y ? h1([], d, _, v, b, t) : _) : i(_, v) : (_.issues.push({
      expected: "object",
      code: "invalid_type",
      input: d,
      inst: t
    }), _);
  };
});
function ky(t, r, i, s) {
  for (const u of t)
    if (u.issues.length === 0)
      return r.value = u.value, r;
  const o = t.filter((u) => !Ri(u));
  return o.length === 1 ? (r.value = o[0].value, o[0]) : (r.issues.push({
    code: "invalid_union",
    input: r.value,
    inst: i,
    errors: t.map((u) => u.issues.map((f) => za(f, s, ja())))
  }), r);
}
const Vw = /* @__PURE__ */ ee("$ZodUnion", (t, r) => {
  Et.init(t, r), at(t._zod, "optin", () => r.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0), at(t._zod, "optout", () => r.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0), at(t._zod, "values", () => {
    if (r.options.every((o) => o._zod.values))
      return new Set(r.options.flatMap((o) => Array.from(o._zod.values)));
  }), at(t._zod, "pattern", () => {
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
    return f ? Promise.all(p).then((h) => ky(h, o, t, u)) : ky(p, o, t, u);
  };
}), Yw = /* @__PURE__ */ ee("$ZodIntersection", (t, r) => {
  Et.init(t, r), t._zod.parse = (i, s) => {
    const o = i.value, u = r.left._zod.run({ value: o, issues: [] }, s), f = r.right._zod.run({ value: o, issues: [] }, s);
    return u instanceof Promise || f instanceof Promise ? Promise.all([u, f]).then(([h, g]) => Ry(i, h, g)) : Ry(i, u, f);
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
function Ry(t, r, i) {
  if (r.issues.length && t.issues.push(...r.issues), i.issues.length && t.issues.push(...i.issues), Ri(t))
    return t;
  const s = Bd(r.value, i.value);
  if (!s.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`);
  return t.value = s.data, t;
}
const Xw = /* @__PURE__ */ ee("$ZodEnum", (t, r) => {
  Et.init(t, r);
  const i = J0(r.entries), s = new Set(i);
  t._zod.values = s, t._zod.pattern = new RegExp(`^(${i.filter((o) => lC.has(typeof o)).map((o) => typeof o == "string" ? Au(o) : o.toString()).join("|")})$`), t._zod.parse = (o, u) => {
    const f = o.value;
    return s.has(f) || o.issues.push({
      code: "invalid_value",
      values: i,
      input: f,
      inst: t
    }), o;
  };
}), $w = /* @__PURE__ */ ee("$ZodTransform", (t, r) => {
  Et.init(t, r), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      throw new $0(t.constructor.name);
    const o = r.transform(i.value, i);
    if (s.async)
      return (o instanceof Promise ? o : Promise.resolve(o)).then((f) => (i.value = f, i));
    if (o instanceof Promise)
      throw new Li();
    return i.value = o, i;
  };
});
function jy(t, r) {
  return t.issues.length && r === void 0 ? { issues: [], value: void 0 } : t;
}
const Qw = /* @__PURE__ */ ee("$ZodOptional", (t, r) => {
  Et.init(t, r), t._zod.optin = "optional", t._zod.optout = "optional", at(t._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, void 0]) : void 0), at(t._zod, "pattern", () => {
    const i = r.innerType._zod.pattern;
    return i ? new RegExp(`^(${ah(i.source)})?$`) : void 0;
  }), t._zod.parse = (i, s) => {
    if (r.innerType._zod.optin === "optional") {
      const o = r.innerType._zod.run(i, s);
      return o instanceof Promise ? o.then((u) => jy(u, i.value)) : jy(o, i.value);
    }
    return i.value === void 0 ? i : r.innerType._zod.run(i, s);
  };
}), Jw = /* @__PURE__ */ ee("$ZodNullable", (t, r) => {
  Et.init(t, r), at(t._zod, "optin", () => r.innerType._zod.optin), at(t._zod, "optout", () => r.innerType._zod.optout), at(t._zod, "pattern", () => {
    const i = r.innerType._zod.pattern;
    return i ? new RegExp(`^(${ah(i.source)}|null)$`) : void 0;
  }), at(t._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, null]) : void 0), t._zod.parse = (i, s) => i.value === null ? i : r.innerType._zod.run(i, s);
}), Kw = /* @__PURE__ */ ee("$ZodDefault", (t, r) => {
  Et.init(t, r), t._zod.optin = "optional", at(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (i, s) => {
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
const Ww = /* @__PURE__ */ ee("$ZodPrefault", (t, r) => {
  Et.init(t, r), t._zod.optin = "optional", at(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (i, s) => (s.direction === "backward" || i.value === void 0 && (i.value = r.defaultValue), r.innerType._zod.run(i, s));
}), e3 = /* @__PURE__ */ ee("$ZodNonOptional", (t, r) => {
  Et.init(t, r), at(t._zod, "values", () => {
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
const t3 = /* @__PURE__ */ ee("$ZodCatch", (t, r) => {
  Et.init(t, r), at(t._zod, "optin", () => r.innerType._zod.optin), at(t._zod, "optout", () => r.innerType._zod.optout), at(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(i, s);
    const o = r.innerType._zod.run(i, s);
    return o instanceof Promise ? o.then((u) => (i.value = u.value, u.issues.length && (i.value = r.catchValue({
      ...i,
      error: {
        issues: u.issues.map((f) => za(f, s, ja()))
      },
      input: i.value
    }), i.issues = []), i)) : (i.value = o.value, o.issues.length && (i.value = r.catchValue({
      ...i,
      error: {
        issues: o.issues.map((u) => za(u, s, ja()))
      },
      input: i.value
    }), i.issues = []), i);
  };
}), n3 = /* @__PURE__ */ ee("$ZodPipe", (t, r) => {
  Et.init(t, r), at(t._zod, "values", () => r.in._zod.values), at(t._zod, "optin", () => r.in._zod.optin), at(t._zod, "optout", () => r.out._zod.optout), at(t._zod, "propValues", () => r.in._zod.propValues), t._zod.parse = (i, s) => {
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
const r3 = /* @__PURE__ */ ee("$ZodReadonly", (t, r) => {
  Et.init(t, r), at(t._zod, "propValues", () => r.innerType._zod.propValues), at(t._zod, "values", () => r.innerType._zod.values), at(t._zod, "optin", () => r.innerType._zod.optin), at(t._zod, "optout", () => r.innerType._zod.optout), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(i, s);
    const o = r.innerType._zod.run(i, s);
    return o instanceof Promise ? o.then(Py) : Py(o);
  };
});
function Py(t) {
  return t.value = Object.freeze(t.value), t;
}
const a3 = /* @__PURE__ */ ee("$ZodCustom", (t, r) => {
  rn.init(t, r), Et.init(t, r), t._zod.parse = (i, s) => i, t._zod.check = (i) => {
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
class p1 {
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
function i3() {
  return new p1();
}
const Qs = /* @__PURE__ */ i3();
function s3(t, r) {
  return new t({
    type: "string",
    ..._e(r)
  });
}
function l3(t, r) {
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
function o3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
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
    version: "v4",
    ..._e(r)
  });
}
function c3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ..._e(r)
  });
}
function f3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ..._e(r)
  });
}
function d3(t, r) {
  return new t({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function h3(t, r) {
  return new t({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function p3(t, r) {
  return new t({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function m3(t, r) {
  return new t({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function g3(t, r) {
  return new t({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function v3(t, r) {
  return new t({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function y3(t, r) {
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
function b3(t, r) {
  return new t({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function S3(t, r) {
  return new t({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function x3(t, r) {
  return new t({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function E3(t, r) {
  return new t({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function C3(t, r) {
  return new t({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function w3(t, r) {
  return new t({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function A3(t, r) {
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
function N3(t, r) {
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
function M3(t, r) {
  return new t({
    type: "string",
    format: "duration",
    check: "string_format",
    ..._e(r)
  });
}
function k3(t, r) {
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
function j3(t) {
  return new t({
    type: "unknown"
  });
}
function z3(t, r) {
  return new t({
    type: "never",
    ..._e(r)
  });
}
function Uy(t, r) {
  return new o1({
    check: "less_than",
    ..._e(r),
    value: t,
    inclusive: !1
  });
}
function gd(t, r) {
  return new o1({
    check: "less_than",
    ..._e(r),
    value: t,
    inclusive: !0
  });
}
function Hy(t, r) {
  return new u1({
    check: "greater_than",
    ..._e(r),
    value: t,
    inclusive: !1
  });
}
function vd(t, r) {
  return new u1({
    check: "greater_than",
    ..._e(r),
    value: t,
    inclusive: !0
  });
}
function qy(t, r) {
  return new tw({
    check: "multiple_of",
    ..._e(r),
    value: t
  });
}
function m1(t, r) {
  return new rw({
    check: "max_length",
    ..._e(r),
    maximum: t
  });
}
function Eu(t, r) {
  return new aw({
    check: "min_length",
    ..._e(r),
    minimum: t
  });
}
function g1(t, r) {
  return new iw({
    check: "length_equals",
    ..._e(r),
    length: t
  });
}
function L3(t, r) {
  return new sw({
    check: "string_format",
    format: "regex",
    ..._e(r),
    pattern: t
  });
}
function P3(t) {
  return new lw({
    check: "string_format",
    format: "lowercase",
    ..._e(t)
  });
}
function I3(t) {
  return new ow({
    check: "string_format",
    format: "uppercase",
    ..._e(t)
  });
}
function B3(t, r) {
  return new uw({
    check: "string_format",
    format: "includes",
    ..._e(r),
    includes: t
  });
}
function U3(t, r) {
  return new cw({
    check: "string_format",
    format: "starts_with",
    ..._e(r),
    prefix: t
  });
}
function H3(t, r) {
  return new fw({
    check: "string_format",
    format: "ends_with",
    ..._e(r),
    suffix: t
  });
}
function ol(t) {
  return new dw({
    check: "overwrite",
    tx: t
  });
}
function q3(t) {
  return ol((r) => r.normalize(t));
}
function Z3() {
  return ol((t) => t.trim());
}
function F3() {
  return ol((t) => t.toLowerCase());
}
function G3() {
  return ol((t) => t.toUpperCase());
}
function V3(t, r, i) {
  return new t({
    type: "array",
    element: r,
    // get element() {
    //   return element;
    // },
    ..._e(i)
  });
}
function Y3(t, r, i) {
  return new t({
    type: "custom",
    check: "custom",
    fn: r,
    ..._e(i)
  });
}
function X3(t) {
  const r = $3((i) => (i.addIssue = (s) => {
    if (typeof s == "string")
      i.issues.push(al(s, i.value, r._zod.def));
    else {
      const o = s;
      o.fatal && (o.continue = !1), o.code ?? (o.code = "custom"), o.input ?? (o.input = i.value), o.inst ?? (o.inst = r), o.continue ?? (o.continue = !r._zod.def.abort), i.issues.push(al(o));
    }
  }, t(i.value, i)));
  return r;
}
function $3(t, r) {
  const i = new rn({
    check: "custom",
    ..._e(r)
  });
  return i._zod.check = t, i;
}
class Zy {
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
      const b = {
        ...i,
        schemaPath: [...i.schemaPath, r],
        path: i.path
      }, _ = r._zod.parent;
      if (_)
        p.ref = _, this.process(_, b), this.seen.get(_).isParent = !0;
      else {
        const v = p.schema;
        switch (o.type) {
          case "string": {
            const d = v;
            d.type = "string";
            const { minimum: S, maximum: x, format: O, patterns: A, contentEncoding: D } = r._zod.bag;
            if (typeof S == "number" && (d.minLength = S), typeof x == "number" && (d.maxLength = x), O && (d.format = u[O] ?? O, d.format === "" && delete d.format), D && (d.contentEncoding = D), A && A.size > 0) {
              const E = [...A];
              E.length === 1 ? d.pattern = E[0].source : E.length > 1 && (p.schema.allOf = [
                ...E.map((T) => ({
                  ...this.target === "draft-7" || this.target === "draft-4" || this.target === "openapi-3.0" ? { type: "string" } : {},
                  pattern: T.source
                }))
              ]);
            }
            break;
          }
          case "number": {
            const d = v, { minimum: S, maximum: x, format: O, multipleOf: A, exclusiveMaximum: D, exclusiveMinimum: E } = r._zod.bag;
            typeof O == "string" && O.includes("int") ? d.type = "integer" : d.type = "number", typeof E == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (d.minimum = E, d.exclusiveMinimum = !0) : d.exclusiveMinimum = E), typeof S == "number" && (d.minimum = S, typeof E == "number" && this.target !== "draft-4" && (E >= S ? delete d.minimum : delete d.exclusiveMinimum)), typeof D == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (d.maximum = D, d.exclusiveMaximum = !0) : d.exclusiveMaximum = D), typeof x == "number" && (d.maximum = x, typeof D == "number" && this.target !== "draft-4" && (D <= x ? delete d.maximum : delete d.exclusiveMaximum)), typeof A == "number" && (d.multipleOf = A);
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
            const d = v, { minimum: S, maximum: x } = r._zod.bag;
            typeof S == "number" && (d.minItems = S), typeof x == "number" && (d.maxItems = x), d.type = "array", d.items = this.process(o.element, { ...b, path: [...b.path, "items"] });
            break;
          }
          case "object": {
            const d = v;
            d.type = "object", d.properties = {};
            const S = o.shape;
            for (const A in S)
              d.properties[A] = this.process(S[A], {
                ...b,
                path: [...b.path, "properties", A]
              });
            const x = new Set(Object.keys(S)), O = new Set([...x].filter((A) => {
              const D = o.shape[A]._zod;
              return this.io === "input" ? D.optin === void 0 : D.optout === void 0;
            }));
            O.size > 0 && (d.required = Array.from(O)), o.catchall?._zod.def.type === "never" ? d.additionalProperties = !1 : o.catchall ? o.catchall && (d.additionalProperties = this.process(o.catchall, {
              ...b,
              path: [...b.path, "additionalProperties"]
            })) : this.io === "output" && (d.additionalProperties = !1);
            break;
          }
          case "union": {
            const d = v, S = o.options.map((x, O) => this.process(x, {
              ...b,
              path: [...b.path, "anyOf", O]
            }));
            d.anyOf = S;
            break;
          }
          case "intersection": {
            const d = v, S = this.process(o.left, {
              ...b,
              path: [...b.path, "allOf", 0]
            }), x = this.process(o.right, {
              ...b,
              path: [...b.path, "allOf", 1]
            }), O = (D) => "allOf" in D && Object.keys(D).length === 1, A = [
              ...O(S) ? S.allOf : [S],
              ...O(x) ? x.allOf : [x]
            ];
            d.allOf = A;
            break;
          }
          case "tuple": {
            const d = v;
            d.type = "array";
            const S = this.target === "draft-2020-12" ? "prefixItems" : "items", x = this.target === "draft-2020-12" || this.target === "openapi-3.0" ? "items" : "additionalItems", O = o.items.map((T, M) => this.process(T, {
              ...b,
              path: [...b.path, S, M]
            })), A = o.rest ? this.process(o.rest, {
              ...b,
              path: [...b.path, x, ...this.target === "openapi-3.0" ? [o.items.length] : []]
            }) : null;
            this.target === "draft-2020-12" ? (d.prefixItems = O, A && (d.items = A)) : this.target === "openapi-3.0" ? (d.items = {
              anyOf: O
            }, A && d.items.anyOf.push(A), d.minItems = O.length, A || (d.maxItems = O.length)) : (d.items = O, A && (d.additionalItems = A));
            const { minimum: D, maximum: E } = r._zod.bag;
            typeof D == "number" && (d.minItems = D), typeof E == "number" && (d.maxItems = E);
            break;
          }
          case "record": {
            const d = v;
            d.type = "object", (this.target === "draft-7" || this.target === "draft-2020-12") && (d.propertyNames = this.process(o.keyType, {
              ...b,
              path: [...b.path, "propertyNames"]
            })), d.additionalProperties = this.process(o.valueType, {
              ...b,
              path: [...b.path, "additionalProperties"]
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
            const d = v, S = J0(o.entries);
            S.every((x) => typeof x == "number") && (d.type = "number"), S.every((x) => typeof x == "string") && (d.type = "string"), d.enum = S;
            break;
          }
          case "literal": {
            const d = v, S = [];
            for (const x of o.values)
              if (x === void 0) {
                if (this.unrepresentable === "throw")
                  throw new Error("Literal `undefined` cannot be represented in JSON Schema");
              } else if (typeof x == "bigint") {
                if (this.unrepresentable === "throw")
                  throw new Error("BigInt literals cannot be represented in JSON Schema");
                S.push(Number(x));
              } else
                S.push(x);
            if (S.length !== 0) if (S.length === 1) {
              const x = S[0];
              d.type = x === null ? "null" : typeof x, this.target === "draft-4" || this.target === "openapi-3.0" ? d.enum = [x] : d.const = x;
            } else
              S.every((x) => typeof x == "number") && (d.type = "number"), S.every((x) => typeof x == "string") && (d.type = "string"), S.every((x) => typeof x == "boolean") && (d.type = "string"), S.every((x) => x === null) && (d.type = "null"), d.enum = S;
            break;
          }
          case "file": {
            const d = v, S = {
              type: "string",
              format: "binary",
              contentEncoding: "binary"
            }, { minimum: x, maximum: O, mime: A } = r._zod.bag;
            x !== void 0 && (S.minLength = x), O !== void 0 && (S.maxLength = O), A ? A.length === 1 ? (S.contentMediaType = A[0], Object.assign(d, S)) : d.anyOf = A.map((D) => ({ ...S, contentMediaType: D })) : Object.assign(d, S);
            break;
          }
          case "transform": {
            if (this.unrepresentable === "throw")
              throw new Error("Transforms cannot be represented in JSON Schema");
            break;
          }
          case "nullable": {
            const d = this.process(o.innerType, b);
            this.target === "openapi-3.0" ? (p.ref = o.innerType, v.nullable = !0) : v.anyOf = [d, { type: "null" }];
            break;
          }
          case "nonoptional": {
            this.process(o.innerType, b), p.ref = o.innerType;
            break;
          }
          case "success": {
            const d = v;
            d.type = "boolean";
            break;
          }
          case "default": {
            this.process(o.innerType, b), p.ref = o.innerType, v.default = JSON.parse(JSON.stringify(o.defaultValue));
            break;
          }
          case "prefault": {
            this.process(o.innerType, b), p.ref = o.innerType, this.io === "input" && (v._prefault = JSON.parse(JSON.stringify(o.defaultValue)));
            break;
          }
          case "catch": {
            this.process(o.innerType, b), p.ref = o.innerType;
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
            const d = v, S = r._zod.pattern;
            if (!S)
              throw new Error("Pattern not found in template literal");
            d.type = "string", d.pattern = S.source;
            break;
          }
          case "pipe": {
            const d = this.io === "input" ? o.in._zod.def.type === "transform" ? o.out : o.in : o.out;
            this.process(d, b), p.ref = d;
            break;
          }
          case "readonly": {
            this.process(o.innerType, b), p.ref = o.innerType, v.readOnly = !0;
            break;
          }
          // passthrough types
          case "promise": {
            this.process(o.innerType, b), p.ref = o.innerType;
            break;
          }
          case "optional": {
            this.process(o.innerType, b), p.ref = o.innerType;
            break;
          }
          case "lazy": {
            const d = r._zod.innerType;
            this.process(d, b), p.ref = d;
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
    const u = (y) => {
      const b = this.target === "draft-2020-12" ? "$defs" : "definitions";
      if (s.external) {
        const S = s.external.registry.get(y[0])?.id, x = s.external.uri ?? ((A) => A);
        if (S)
          return { ref: x(S) };
        const O = y[1].defId ?? y[1].schema.id ?? `schema${this.counter++}`;
        return y[1].defId = O, { defId: O, ref: `${x("__shared")}#/${b}/${O}` };
      }
      if (y[1] === o)
        return { ref: "#" };
      const v = `#/${b}/`, d = y[1].schema.id ?? `__schema${this.counter++}`;
      return { defId: d, ref: v + d };
    }, f = (y) => {
      if (y[1].schema.$ref)
        return;
      const b = y[1], { ref: _, defId: v } = u(y);
      b.def = { ...b.schema }, v && (b.defId = v);
      const d = b.schema;
      for (const S in d)
        delete d[S];
      d.$ref = _;
    };
    if (s.cycles === "throw")
      for (const y of this.seen.entries()) {
        const b = y[1];
        if (b.cycle)
          throw new Error(`Cycle detected: #/${b.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
      }
    for (const y of this.seen.entries()) {
      const b = y[1];
      if (r === y[0]) {
        f(y);
        continue;
      }
      if (s.external) {
        const v = s.external.registry.get(y[0])?.id;
        if (r !== y[0] && v) {
          f(y);
          continue;
        }
      }
      if (this.metadataRegistry.get(y[0])?.id) {
        f(y);
        continue;
      }
      if (b.cycle) {
        f(y);
        continue;
      }
      if (b.count > 1 && s.reused === "ref") {
        f(y);
        continue;
      }
    }
    const p = (y, b) => {
      const _ = this.seen.get(y), v = _.def ?? _.schema, d = { ...v };
      if (_.ref === null)
        return;
      const S = _.ref;
      if (_.ref = null, S) {
        p(S, b);
        const x = this.seen.get(S).schema;
        x.$ref && (b.target === "draft-7" || b.target === "draft-4" || b.target === "openapi-3.0") ? (v.allOf = v.allOf ?? [], v.allOf.push(x)) : (Object.assign(v, x), Object.assign(v, d));
      }
      _.isParent || this.override({
        zodSchema: y,
        jsonSchema: v,
        path: _.path ?? []
      });
    };
    for (const y of [...this.seen.entries()].reverse())
      p(y[0], { target: this.target });
    const h = {};
    if (this.target === "draft-2020-12" ? h.$schema = "https://json-schema.org/draft/2020-12/schema" : this.target === "draft-7" ? h.$schema = "http://json-schema.org/draft-07/schema#" : this.target === "draft-4" ? h.$schema = "http://json-schema.org/draft-04/schema#" : this.target === "openapi-3.0" || console.warn(`Invalid target: ${this.target}`), s.external?.uri) {
      const y = s.external.registry.get(r)?.id;
      if (!y)
        throw new Error("Schema is missing an `id` property");
      h.$id = s.external.uri(y);
    }
    Object.assign(h, o.def);
    const g = s.external?.defs ?? {};
    for (const y of this.seen.entries()) {
      const b = y[1];
      b.def && b.defId && (g[b.defId] = b.def);
    }
    s.external || Object.keys(g).length > 0 && (this.target === "draft-2020-12" ? h.$defs = g : h.definitions = g);
    try {
      return JSON.parse(JSON.stringify(h));
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
}
function Q3(t, r) {
  if (t instanceof p1) {
    const s = new Zy(r), o = {};
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
  const i = new Zy(r);
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
const J3 = /* @__PURE__ */ ee("ZodISODateTime", (t, r) => {
  Aw.init(t, r), ft.init(t, r);
});
function K3(t) {
  return O3(J3, t);
}
const W3 = /* @__PURE__ */ ee("ZodISODate", (t, r) => {
  Tw.init(t, r), ft.init(t, r);
});
function e4(t) {
  return N3(W3, t);
}
const t4 = /* @__PURE__ */ ee("ZodISOTime", (t, r) => {
  Ow.init(t, r), ft.init(t, r);
});
function n4(t) {
  return D3(t4, t);
}
const r4 = /* @__PURE__ */ ee("ZodISODuration", (t, r) => {
  Nw.init(t, r), ft.init(t, r);
});
function a4(t) {
  return M3(r4, t);
}
const i4 = (t, r) => {
  n1.init(t, r), t.name = "ZodError", Object.defineProperties(t, {
    format: {
      value: (i) => yC(t, i)
      // enumerable: false,
    },
    flatten: {
      value: (i) => vC(t, i)
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
}, jn = ee("ZodError", i4, {
  Parent: Error
}), s4 = /* @__PURE__ */ sh(jn), l4 = /* @__PURE__ */ lh(jn), o4 = /* @__PURE__ */ Tu(jn), u4 = /* @__PURE__ */ Ou(jn), c4 = /* @__PURE__ */ SC(jn), f4 = /* @__PURE__ */ xC(jn), d4 = /* @__PURE__ */ EC(jn), h4 = /* @__PURE__ */ CC(jn), p4 = /* @__PURE__ */ wC(jn), m4 = /* @__PURE__ */ AC(jn), g4 = /* @__PURE__ */ TC(jn), v4 = /* @__PURE__ */ OC(jn), Tt = /* @__PURE__ */ ee("ZodType", (t, r) => (Et.init(t, r), t.def = r, t.type = r.type, Object.defineProperty(t, "_def", { value: r }), t.check = (...i) => t.clone(Pa(r, {
  checks: [
    ...r.checks ?? [],
    ...i.map((s) => typeof s == "function" ? { _zod: { check: s, def: { check: "custom" }, onattach: [] } } : s)
  ]
})), t.clone = (i, s) => aa(t, i, s), t.brand = () => t, t.register = ((i, s) => (i.add(t, s), t)), t.parse = (i, s) => s4(t, i, s, { callee: t.parse }), t.safeParse = (i, s) => o4(t, i, s), t.parseAsync = async (i, s) => l4(t, i, s, { callee: t.parseAsync }), t.safeParseAsync = async (i, s) => u4(t, i, s), t.spa = t.safeParseAsync, t.encode = (i, s) => c4(t, i, s), t.decode = (i, s) => f4(t, i, s), t.encodeAsync = async (i, s) => d4(t, i, s), t.decodeAsync = async (i, s) => h4(t, i, s), t.safeEncode = (i, s) => p4(t, i, s), t.safeDecode = (i, s) => m4(t, i, s), t.safeEncodeAsync = async (i, s) => g4(t, i, s), t.safeDecodeAsync = async (i, s) => v4(t, i, s), t.refine = (i, s) => t.check(sA(i, s)), t.superRefine = (i) => t.check(lA(i)), t.overwrite = (i) => t.check(ol(i)), t.optional = () => Yy(t), t.nullable = () => Xy(t), t.nullish = () => Yy(Xy(t)), t.nonoptional = (i) => W4(t, i), t.array = () => Hn(t), t.or = (i) => Z4([t, i]), t.and = (i) => G4(t, i), t.transform = (i) => $y(t, Y4(i)), t.default = (i) => Q4(t, i), t.prefault = (i) => K4(t, i), t.catch = (i) => tA(t, i), t.pipe = (i) => $y(t, i), t.readonly = () => aA(t), t.describe = (i) => {
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
}, t.isOptional = () => t.safeParse(void 0).success, t.isNullable = () => t.safeParse(null).success, t)), v1 = /* @__PURE__ */ ee("_ZodString", (t, r) => {
  oh.init(t, r), Tt.init(t, r);
  const i = t._zod.bag;
  t.format = i.format ?? null, t.minLength = i.minimum ?? null, t.maxLength = i.maximum ?? null, t.regex = (...s) => t.check(L3(...s)), t.includes = (...s) => t.check(B3(...s)), t.startsWith = (...s) => t.check(U3(...s)), t.endsWith = (...s) => t.check(H3(...s)), t.min = (...s) => t.check(Eu(...s)), t.max = (...s) => t.check(m1(...s)), t.length = (...s) => t.check(g1(...s)), t.nonempty = (...s) => t.check(Eu(1, ...s)), t.lowercase = (s) => t.check(P3(s)), t.uppercase = (s) => t.check(I3(s)), t.trim = () => t.check(Z3()), t.normalize = (...s) => t.check(q3(...s)), t.toLowerCase = () => t.check(F3()), t.toUpperCase = () => t.check(G3());
}), y4 = /* @__PURE__ */ ee("ZodString", (t, r) => {
  oh.init(t, r), v1.init(t, r), t.email = (i) => t.check(l3(_4, i)), t.url = (i) => t.check(d3(b4, i)), t.jwt = (i) => t.check(T3(z4, i)), t.emoji = (i) => t.check(h3(S4, i)), t.guid = (i) => t.check(By(Fy, i)), t.uuid = (i) => t.check(o3(ru, i)), t.uuidv4 = (i) => t.check(u3(ru, i)), t.uuidv6 = (i) => t.check(c3(ru, i)), t.uuidv7 = (i) => t.check(f3(ru, i)), t.nanoid = (i) => t.check(p3(x4, i)), t.guid = (i) => t.check(By(Fy, i)), t.cuid = (i) => t.check(m3(E4, i)), t.cuid2 = (i) => t.check(g3(C4, i)), t.ulid = (i) => t.check(v3(w4, i)), t.base64 = (i) => t.check(C3(k4, i)), t.base64url = (i) => t.check(w3(R4, i)), t.xid = (i) => t.check(y3(A4, i)), t.ksuid = (i) => t.check(_3(T4, i)), t.ipv4 = (i) => t.check(b3(O4, i)), t.ipv6 = (i) => t.check(S3(N4, i)), t.cidrv4 = (i) => t.check(x3(D4, i)), t.cidrv6 = (i) => t.check(E3(M4, i)), t.e164 = (i) => t.check(A3(j4, i)), t.datetime = (i) => t.check(K3(i)), t.date = (i) => t.check(e4(i)), t.time = (i) => t.check(n4(i)), t.duration = (i) => t.check(a4(i));
});
function Rn(t) {
  return s3(y4, t);
}
const ft = /* @__PURE__ */ ee("ZodStringFormat", (t, r) => {
  ot.init(t, r), v1.init(t, r);
}), _4 = /* @__PURE__ */ ee("ZodEmail", (t, r) => {
  vw.init(t, r), ft.init(t, r);
}), Fy = /* @__PURE__ */ ee("ZodGUID", (t, r) => {
  mw.init(t, r), ft.init(t, r);
}), ru = /* @__PURE__ */ ee("ZodUUID", (t, r) => {
  gw.init(t, r), ft.init(t, r);
}), b4 = /* @__PURE__ */ ee("ZodURL", (t, r) => {
  yw.init(t, r), ft.init(t, r);
}), S4 = /* @__PURE__ */ ee("ZodEmoji", (t, r) => {
  _w.init(t, r), ft.init(t, r);
}), x4 = /* @__PURE__ */ ee("ZodNanoID", (t, r) => {
  bw.init(t, r), ft.init(t, r);
}), E4 = /* @__PURE__ */ ee("ZodCUID", (t, r) => {
  Sw.init(t, r), ft.init(t, r);
}), C4 = /* @__PURE__ */ ee("ZodCUID2", (t, r) => {
  xw.init(t, r), ft.init(t, r);
}), w4 = /* @__PURE__ */ ee("ZodULID", (t, r) => {
  Ew.init(t, r), ft.init(t, r);
}), A4 = /* @__PURE__ */ ee("ZodXID", (t, r) => {
  Cw.init(t, r), ft.init(t, r);
}), T4 = /* @__PURE__ */ ee("ZodKSUID", (t, r) => {
  ww.init(t, r), ft.init(t, r);
}), O4 = /* @__PURE__ */ ee("ZodIPv4", (t, r) => {
  Dw.init(t, r), ft.init(t, r);
}), N4 = /* @__PURE__ */ ee("ZodIPv6", (t, r) => {
  Mw.init(t, r), ft.init(t, r);
}), D4 = /* @__PURE__ */ ee("ZodCIDRv4", (t, r) => {
  kw.init(t, r), ft.init(t, r);
}), M4 = /* @__PURE__ */ ee("ZodCIDRv6", (t, r) => {
  Rw.init(t, r), ft.init(t, r);
}), k4 = /* @__PURE__ */ ee("ZodBase64", (t, r) => {
  jw.init(t, r), ft.init(t, r);
}), R4 = /* @__PURE__ */ ee("ZodBase64URL", (t, r) => {
  Lw.init(t, r), ft.init(t, r);
}), j4 = /* @__PURE__ */ ee("ZodE164", (t, r) => {
  Pw.init(t, r), ft.init(t, r);
}), z4 = /* @__PURE__ */ ee("ZodJWT", (t, r) => {
  Bw.init(t, r), ft.init(t, r);
}), y1 = /* @__PURE__ */ ee("ZodNumber", (t, r) => {
  f1.init(t, r), Tt.init(t, r), t.gt = (s, o) => t.check(Hy(s, o)), t.gte = (s, o) => t.check(vd(s, o)), t.min = (s, o) => t.check(vd(s, o)), t.lt = (s, o) => t.check(Uy(s, o)), t.lte = (s, o) => t.check(gd(s, o)), t.max = (s, o) => t.check(gd(s, o)), t.int = (s) => t.check(Gy(s)), t.safe = (s) => t.check(Gy(s)), t.positive = (s) => t.check(Hy(0, s)), t.nonnegative = (s) => t.check(vd(0, s)), t.negative = (s) => t.check(Uy(0, s)), t.nonpositive = (s) => t.check(gd(0, s)), t.multipleOf = (s, o) => t.check(qy(s, o)), t.step = (s, o) => t.check(qy(s, o)), t.finite = () => t;
  const i = t._zod.bag;
  t.minValue = Math.max(i.minimum ?? Number.NEGATIVE_INFINITY, i.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, t.maxValue = Math.min(i.maximum ?? Number.POSITIVE_INFINITY, i.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, t.isInt = (i.format ?? "").includes("int") || Number.isSafeInteger(i.multipleOf ?? 0.5), t.isFinite = !0, t.format = i.format ?? null;
});
function Cu(t) {
  return k3(y1, t);
}
const L4 = /* @__PURE__ */ ee("ZodNumberFormat", (t, r) => {
  Uw.init(t, r), y1.init(t, r);
});
function Gy(t) {
  return R3(L4, t);
}
const P4 = /* @__PURE__ */ ee("ZodUnknown", (t, r) => {
  Hw.init(t, r), Tt.init(t, r);
});
function Vy() {
  return j3(P4);
}
const I4 = /* @__PURE__ */ ee("ZodNever", (t, r) => {
  qw.init(t, r), Tt.init(t, r);
});
function B4(t) {
  return z3(I4, t);
}
const U4 = /* @__PURE__ */ ee("ZodArray", (t, r) => {
  Zw.init(t, r), Tt.init(t, r), t.element = r.element, t.min = (i, s) => t.check(Eu(i, s)), t.nonempty = (i) => t.check(Eu(1, i)), t.max = (i, s) => t.check(m1(i, s)), t.length = (i, s) => t.check(g1(i, s)), t.unwrap = () => t.element;
});
function Hn(t, r) {
  return V3(U4, t, r);
}
const H4 = /* @__PURE__ */ ee("ZodObject", (t, r) => {
  Gw.init(t, r), Tt.init(t, r), at(t, "shape", () => r.shape), t.keyof = () => Hd(Object.keys(t._zod.def.shape)), t.catchall = (i) => t.clone({ ...t._zod.def, catchall: i }), t.passthrough = () => t.clone({ ...t._zod.def, catchall: Vy() }), t.loose = () => t.clone({ ...t._zod.def, catchall: Vy() }), t.strict = () => t.clone({ ...t._zod.def, catchall: B4() }), t.strip = () => t.clone({ ...t._zod.def, catchall: void 0 }), t.extend = (i) => dC(t, i), t.safeExtend = (i) => hC(t, i), t.merge = (i) => pC(t, i), t.pick = (i) => cC(t, i), t.omit = (i) => fC(t, i), t.partial = (...i) => mC(_1, t, i[0]), t.required = (...i) => gC(b1, t, i[0]);
});
function Ra(t, r) {
  const i = {
    type: "object",
    shape: t ?? {},
    ..._e(r)
  };
  return new H4(i);
}
const q4 = /* @__PURE__ */ ee("ZodUnion", (t, r) => {
  Vw.init(t, r), Tt.init(t, r), t.options = r.options;
});
function Z4(t, r) {
  return new q4({
    type: "union",
    options: t,
    ..._e(r)
  });
}
const F4 = /* @__PURE__ */ ee("ZodIntersection", (t, r) => {
  Yw.init(t, r), Tt.init(t, r);
});
function G4(t, r) {
  return new F4({
    type: "intersection",
    left: t,
    right: r
  });
}
const Ud = /* @__PURE__ */ ee("ZodEnum", (t, r) => {
  Xw.init(t, r), Tt.init(t, r), t.enum = r.entries, t.options = Object.values(r.entries);
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
const V4 = /* @__PURE__ */ ee("ZodTransform", (t, r) => {
  $w.init(t, r), Tt.init(t, r), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      throw new $0(t.constructor.name);
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
function Y4(t) {
  return new V4({
    type: "transform",
    transform: t
  });
}
const _1 = /* @__PURE__ */ ee("ZodOptional", (t, r) => {
  Qw.init(t, r), Tt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function Yy(t) {
  return new _1({
    type: "optional",
    innerType: t
  });
}
const X4 = /* @__PURE__ */ ee("ZodNullable", (t, r) => {
  Jw.init(t, r), Tt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function Xy(t) {
  return new X4({
    type: "nullable",
    innerType: t
  });
}
const $4 = /* @__PURE__ */ ee("ZodDefault", (t, r) => {
  Kw.init(t, r), Tt.init(t, r), t.unwrap = () => t._zod.def.innerType, t.removeDefault = t.unwrap;
});
function Q4(t, r) {
  return new $4({
    type: "default",
    innerType: t,
    get defaultValue() {
      return typeof r == "function" ? r() : W0(r);
    }
  });
}
const J4 = /* @__PURE__ */ ee("ZodPrefault", (t, r) => {
  Ww.init(t, r), Tt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function K4(t, r) {
  return new J4({
    type: "prefault",
    innerType: t,
    get defaultValue() {
      return typeof r == "function" ? r() : W0(r);
    }
  });
}
const b1 = /* @__PURE__ */ ee("ZodNonOptional", (t, r) => {
  e3.init(t, r), Tt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function W4(t, r) {
  return new b1({
    type: "nonoptional",
    innerType: t,
    ..._e(r)
  });
}
const eA = /* @__PURE__ */ ee("ZodCatch", (t, r) => {
  t3.init(t, r), Tt.init(t, r), t.unwrap = () => t._zod.def.innerType, t.removeCatch = t.unwrap;
});
function tA(t, r) {
  return new eA({
    type: "catch",
    innerType: t,
    catchValue: typeof r == "function" ? r : () => r
  });
}
const nA = /* @__PURE__ */ ee("ZodPipe", (t, r) => {
  n3.init(t, r), Tt.init(t, r), t.in = r.in, t.out = r.out;
});
function $y(t, r) {
  return new nA({
    type: "pipe",
    in: t,
    out: r
    // ...util.normalizeParams(params),
  });
}
const rA = /* @__PURE__ */ ee("ZodReadonly", (t, r) => {
  r3.init(t, r), Tt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function aA(t) {
  return new rA({
    type: "readonly",
    innerType: t
  });
}
const iA = /* @__PURE__ */ ee("ZodCustom", (t, r) => {
  a3.init(t, r), Tt.init(t, r);
});
function sA(t, r = {}) {
  return Y3(iA, t, r);
}
function lA(t) {
  return X3(t);
}
const Qy = {
  FIELD: "FieldRevision",
  GLOBAL: "GlobalRevision"
}, qd = "placeholder-chatHistory", oA = Ra({
  justification: Rn().describe(
    "A brief, friendly, and conversational explanation of the changes made, as if you are a helpful assistant."
  ),
  response: Rn().describe("The new, full content for the character field.")
}), uA = Ra({
  field: Rn(),
  value: Rn()
}), cA = Ra({
  index: Cu().int().positive(),
  value: Rn()
});
Ra({
  justification: Rn(),
  fields_to_change: Hn(uA).optional(),
  draft_fields_to_remove: Hn(Rn()).optional(),
  greetings_to_add: Hn(Rn()).optional(),
  greetings_to_remove: Hn(Cu().int().positive()).optional(),
  greetings_to_change: Hn(cA).optional()
});
const fA = (t, r) => {
  const i = Ra({
    index: Cu().int().positive().describe("The 1-based index of the alternate greeting to change."),
    value: Rn().describe("The new content for the alternate greeting.")
  }), s = {
    justification: Rn().describe(
      "A brief, friendly, and conversational explanation of the operations performed, as if you are a helpful assistant."
    ),
    greetings_to_add: Hn(Rn()).optional().describe("A list of new alternate greetings to add to the end."),
    greetings_to_remove: Hn(Cu().int().positive()).optional().describe("A list of 1-based indices of alternate greetings to remove."),
    greetings_to_change: Hn(i).optional().describe("A list of alternate greetings to update with new content.")
  };
  if (t.length > 0) {
    const o = Ra({
      field: Hd(t).describe("The unique ID of the field to change (core or draft)."),
      value: Rn().describe("The new content for the field.")
    });
    s.fields_to_change = Hn(o).optional().describe("A list of character fields to update with new content.");
  }
  return r.length > 0 && (s.draft_fields_to_remove = Hn(Hd(r).describe("The unique ID of the draft field to remove.")).optional().describe("A list of draft field IDs to remove.")), Ra(s);
};
function yd(t) {
  return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function Zd(t, r = 0) {
  const i = "  ".repeat(r);
  if (Array.isArray(t))
    return t.map((s) => s !== null && typeof s == "object" ? `${i}<item>
${Zd(s, r + 1)}${i}</item>
` : `${i}<item>${yd(s)}</item>
`).join("");
  if (t !== null && typeof t == "object") {
    let s = "";
    for (const o of Object.keys(t)) {
      const u = t[o];
      u !== null && typeof u == "object" ? s += `${i}<${o}>
${Zd(u, r + 1)}${i}</${o}>
` : s += `${i}<${o}>${yd(u)}</${o}>
`;
    }
    return s;
  }
  return `${i}<value>${yd(t)}</value>
`;
}
function dA(t, r) {
  const i = Na(t);
  return r === "xml" ? Zd(i).trim() : JSON.stringify(i, null, 2);
}
function hA(...t) {
  for (const r of t) if (r !== void 0) return r;
}
function pA(t) {
  return Array.isArray(t) ? t.find((r) => r !== "null") ?? t[0] : t;
}
function Na(t) {
  if (!t || typeof t != "object") return null;
  const r = Array.isArray(t.examples) ? t.examples[0] : void 0, i = hA(t.example, r, t.default);
  if (i !== void 0) return i;
  if (t.const !== void 0) return t.const;
  if (Array.isArray(t.enum) && t.enum.length) return t.enum[0];
  const s = Array.isArray(t.anyOf) ? t.anyOf[0] : Array.isArray(t.oneOf) ? t.oneOf[0] : void 0;
  if (s) return Na(s);
  switch (pA(t.type)) {
    case "object": {
      const u = {}, f = t.properties || {};
      for (const p of Object.keys(f))
        u[p] = Na(f[p]);
      return t.additionalProperties && typeof t.additionalProperties == "object" && (u.additionalProperty = Na(t.additionalProperties)), u;
    }
    case "array": {
      const u = t.items ?? {};
      return [Na(u)];
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
      return t.properties || t.additionalProperties ? Na({ ...t, type: "object" }) : t.items ? Na({ ...t, type: "array" }) : null;
  }
}
const mA = new sS();
async function Fd(t, r, i, s, o, u) {
  const f = !s.json_schema && !1;
  return new Promise((p, h) => {
    const g = new AbortController(), y = u ?? g.signal;
    u && u.addEventListener("abort", () => g.abort(), { once: !0 }), mA.generateRequest(
      {
        profileId: t,
        prompt: r,
        maxTokens: i,
        custom: { stream: f, signal: y },
        overridePayload: s
      },
      {
        abortController: g,
        onEntry: void 0,
        onFinish: (b, _, v) => y.aborted ? h(new DOMException("Request aborted by user", "AbortError")) : v ? h(v) : _ === void 0 && v === void 0 ? h(new DOMException("Request aborted by user", "AbortError")) : (_ || h(new Error("No data received from LLM")), v ? h(v) : p(_))
      }
    );
  });
}
async function gA(t, r, i, s) {
  const o = await Fd(t, r, i, {}, void 0, s);
  if (!o?.content)
    throw new Error("Plain request failed to return content.");
  return o.content;
}
async function vA(t, r, i, s, o, u, f) {
  const p = Pt.getSettings();
  let h, g;
  const y = Q3(i);
  if (o === "native") {
    if (h = await Fd(
      t,
      r,
      u,
      {
        json_schema: { name: s, strict: !0, value: y }
      },
      void 0,
      f
    ), !h?.content)
      throw new Error(`Structured request for ${s} failed to return content.`);
    g = typeof h.content == "string" ? JSON.parse(h.content) : h.content;
  } else {
    const _ = o, v = dA(y, _), d = JSON.stringify(y, null, 2), S = _ === "json" ? "reviseJsonPrompt" : "reviseXmlPrompt", x = p.prompts[S]?.content;
    if (!x)
      throw new Error(`Prompt template for mode "${_}" not found.`);
    const O = {
      example_response: v,
      schema: d
    }, D = { role: "system", content: Lt.compile(x, { noEscape: !0, strict: !0 })(O) };
    if (h = await Fd(
      t,
      [...r, D],
      u,
      {},
      void 0,
      f
    ), !h?.content)
      throw new Error(`Structured request for ${s} failed to return content.`);
    g = k0(h.content, _, { schema: y });
  }
  const b = i.safeParse(g);
  if (!b.success) {
    const _ = `Model response failed schema validation for ${s}. Check console for details.`;
    throw console.error("Zod validation failed:", b.error.issues), console.error("Raw content parsed:", g), await Oe("error", _), new Error(_);
  }
  return b.data;
}
const S1 = ({ originalContent: t, newContent: r }) => {
  const i = te.useMemo(() => {
    const s = Y0(t, r);
    let o = "", u = "";
    return s.forEach((f) => {
      const p = f.value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/\n/g, "<br>"), g = `<span style="${f.added ? "color: green; background-color: #e6ffed;" : f.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${p}</span>`;
      f.added || (o += g), f.removed || (u += g);
    }), { originalHtml: o, newHtml: u };
  }, [t, r]);
  return /* @__PURE__ */ w.jsxs("div", { className: "compare-state-diff-grid", children: [
    /* @__PURE__ */ w.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: i.originalHtml } }),
    /* @__PURE__ */ w.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: i.newHtml } })
  ] });
}, yA = ({ before: t, after: r }) => {
  const i = te.useMemo(() => {
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
  return /* @__PURE__ */ w.jsxs("div", { className: "compare-state-popup", children: [
    /* @__PURE__ */ w.jsx("h3", { children: "Changes in this step" }),
    i.length === 0 ? /* @__PURE__ */ w.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes were detected in the character state for this step." }) : /* @__PURE__ */ w.jsx("div", { className: "compare-state-list", children: i.map(({ label: s, before: o, after: u }) => /* @__PURE__ */ w.jsxs("div", { className: "compare-state-item", children: [
      /* @__PURE__ */ w.jsx("h4", { children: s }),
      /* @__PURE__ */ w.jsxs("div", { className: "compare-state-header", children: [
        /* @__PURE__ */ w.jsx("span", { children: "Before" }),
        /* @__PURE__ */ w.jsx("span", { children: "After" })
      ] }),
      /* @__PURE__ */ w.jsx(S1, { originalContent: o, newContent: u })
    ] }, s)) })
  ] });
}, _A = ({ currentState: t, initialState: r }) => {
  const [i, s] = te.useState(!1), { coreFields: o, alternateGreetings: u } = te.useMemo(() => {
    const p = [], h = [];
    return kn.forEach((g) => {
      t.fields[g] && p.push({ label: t.fields[g].label, value: t.fields[g].value });
    }), Object.entries(t.fields).filter(([g]) => g.startsWith("alternate_greetings_")).sort((g, y) => parseInt(g[0].split("_")[2]) - parseInt(y[0].split("_")[2])).forEach(([, g]) => h.push(g.value)), { coreFields: p, alternateGreetings: h };
  }, [t]), f = te.useMemo(() => {
    const p = [];
    return (/* @__PURE__ */ new Set([...Object.keys(r.fields), ...Object.keys(t.fields)])).forEach((g) => {
      const y = r.fields[g], b = t.fields[g], _ = y?.value ?? "", v = b?.value ?? "";
      _ !== v && p.push({
        label: b?.label ?? y?.label ?? g,
        before: _,
        after: v
      });
    }), p;
  }, [r, t]);
  return /* @__PURE__ */ w.jsxs("div", { className: "current-state-popup", children: [
    /* @__PURE__ */ w.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ w.jsx("h3", { children: i ? "Comparing with Original State" : "Current Character State" }),
      /* @__PURE__ */ w.jsx("div", { className: "popup_header_buttons", children: /* @__PURE__ */ w.jsxs("label", { className: "checkbox_label", children: [
        /* @__PURE__ */ w.jsx("input", { type: "checkbox", checked: i, onChange: (p) => s(p.target.checked) }),
        "Compare with Original"
      ] }) })
    ] }),
    /* @__PURE__ */ w.jsx("div", { className: "current-state-content", children: i ? /* @__PURE__ */ w.jsx("div", { className: "compare-state-list", children: f.length === 0 ? /* @__PURE__ */ w.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes from the original state." }) : f.map(({ label: p, before: h, after: g }) => /* @__PURE__ */ w.jsxs("div", { className: "compare-state-item", children: [
      /* @__PURE__ */ w.jsx("h4", { children: p }),
      /* @__PURE__ */ w.jsxs("div", { className: "compare-state-header", children: [
        /* @__PURE__ */ w.jsx("span", { children: "Original" }),
        /* @__PURE__ */ w.jsx("span", { children: "Current" })
      ] }),
      /* @__PURE__ */ w.jsx(S1, { originalContent: h, newContent: g })
    ] }, p)) }) : /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
      /* @__PURE__ */ w.jsx("h4", { children: "Core Fields" }),
      o.map(({ label: p, value: h }) => /* @__PURE__ */ w.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ w.jsx("label", { children: p }),
        /* @__PURE__ */ w.jsx("div", { className: "state-value", children: h || /* @__PURE__ */ w.jsx("span", { className: "subtle-text", children: "empty" }) })
      ] }, p)),
      u.length > 0 && /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
        /* @__PURE__ */ w.jsx("h4", { style: { marginTop: "20px" }, children: "Alternate Greetings" }),
        u.map((p, h) => /* @__PURE__ */ w.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ w.jsxs("label", { children: [
            "Greeting ",
            h + 1
          ] }),
          /* @__PURE__ */ w.jsx("div", { className: "state-value", children: p || /* @__PURE__ */ w.jsx("span", { className: "subtle-text", children: "empty" }) })
        ] }, h))
      ] })
    ] }) })
  ] });
}, Di = SillyTavern.getContext(), bA = (t) => Object.entries(t.fields).filter(([r]) => r.startsWith("alternate_greetings_")).sort((r, i) => {
  const s = parseInt(r[0].split("_")[2]), o = parseInt(i[0].split("_")[2]);
  return s - o;
}).map(([, r]) => r.value), SA = (t, r, i, s) => {
  const o = structuredClone(t);
  if (i === "field" && s) {
    const u = r;
    return o.fields[s] && (o.fields[s].value = u.response), o;
  }
  if (i === "global") {
    const u = r;
    let f = bA(o), p = !1;
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
      f = f.filter((g, y) => !h.has(y));
    }
    u.greetings_to_add?.length && (p = !0, f.push(...u.greetings_to_add)), p && (Object.keys(o.fields).forEach((h) => {
      h.startsWith("alternate_greetings_") && delete o.fields[h];
    }), f.forEach((h, g) => {
      const y = `alternate_greetings_${g + 1}`;
      o.fields[y] = {
        value: h,
        prompt: "",
        // Prompts are not managed in revise sessions.
        label: `Alternate Greeting ${g + 1}`
      };
    }));
  }
  return o;
}, xA = ({ initialState: t, onSave: r, onClose: i }) => {
  const [s, o] = te.useState(() => structuredClone(t)), u = (b, _, v) => {
    const d = structuredClone(s), S = v ? "draftFields" : "fields";
    d[S][b] && (d[S][b].value = _), o(d);
  }, f = (b, _) => {
    const v = structuredClone(s), d = `alternate_greetings_${b + 1}`;
    v.fields[d] && (v.fields[d].value = _), o(v);
  }, { coreFields: p, alternateGreetings: h, draftFields: g } = te.useMemo(() => {
    const b = [], _ = [], v = [];
    return kn.forEach((d) => {
      s.fields[d] && b.push({ id: d, label: s.fields[d].label, value: s.fields[d].value });
    }), Object.entries(s.fields).filter(([d]) => d.startsWith("alternate_greetings_")).sort((d, S) => parseInt(d[0].split("_")[2]) - parseInt(S[0].split("_")[2])).forEach(([, d]) => _.push(d.value)), Object.entries(s.draftFields).forEach(([d, S]) => {
      v.push({ id: d, label: S.label, value: S.value });
    }), { coreFields: b, alternateGreetings: _, draftFields: v };
  }, [s]), y = () => {
    JSON.stringify(t) !== JSON.stringify(s) && r(s), i();
  };
  return /* @__PURE__ */ w.jsxs("div", { className: "current-state-popup", children: [
    /* @__PURE__ */ w.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ w.jsx("h3", { children: "Editing Character State" }),
      /* @__PURE__ */ w.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ w.jsxs(me, { onClick: y, children: [
          /* @__PURE__ */ w.jsx("i", { className: "fa-solid fa-check" }),
          " Save Changes"
        ] }),
        /* @__PURE__ */ w.jsxs(me, { onClick: i, className: "danger_button", children: [
          /* @__PURE__ */ w.jsx("i", { className: "fa-solid fa-times" }),
          " Cancel"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ w.jsxs("div", { className: "current-state-content", children: [
      /* @__PURE__ */ w.jsx("h4", { children: "Core Fields" }),
      p.map(({ id: b, label: _, value: v }) => /* @__PURE__ */ w.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ w.jsx("label", { children: _ }),
        /* @__PURE__ */ w.jsx(yn, { value: v, onChange: (d) => u(b, d.target.value, !1), rows: 4 })
      ] }, b)),
      g.length > 0 && /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
        /* @__PURE__ */ w.jsx("h4", { style: { marginTop: "20px" }, children: "Draft Fields" }),
        g.map(({ id: b, label: _, value: v }) => /* @__PURE__ */ w.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ w.jsx("label", { children: _ }),
          /* @__PURE__ */ w.jsx(yn, { value: v, onChange: (d) => u(b, d.target.value, !0), rows: 4 })
        ] }, b))
      ] }),
      h.length > 0 && /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
        /* @__PURE__ */ w.jsx("h4", { style: { marginTop: "20px" }, children: "Alternate Greetings" }),
        h.map((b, _) => /* @__PURE__ */ w.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ w.jsxs("label", { children: [
            "Greeting ",
            _ + 1
          ] }),
          /* @__PURE__ */ w.jsx(yn, { value: b, onChange: (v) => f(_, v.target.value), rows: 4 })
        ] }, _))
      ] })
    ] })
  ] });
}, EA = ({
  session: t,
  onBack: r,
  onApply: i,
  onSessionUpdate: s,
  initialState: o,
  chatContextOptions: u
}) => {
  const [f, p] = te.useState(t.messages), [h, g] = te.useState(""), [y, b] = te.useState(!1), [_, v] = te.useState(null), [d, S] = te.useState(!1), [x, O] = te.useState(!1), [A, D] = te.useState(null), [E, T] = te.useState(""), M = te.useRef(null), k = te.useRef(null);
  te.useEffect(() => {
    M.current?.scrollIntoView({ behavior: "smooth" });
  }, [f]);
  const q = te.useCallback(
    (Y, ve, ye) => {
      if (JSON.stringify(ye) === JSON.stringify(ve))
        return Y;
      const P = Pt.getSettings().prompts.existingFieldDefinitions;
      if (!P) return Y;
      const J = { core: {}, alternate_greetings: {}, draft: {} };
      if ((/* @__PURE__ */ new Set([...Object.keys(ye.fields), ...Object.keys(ve.fields)])).forEach((Ne) => {
        const Ze = ye.fields[Ne]?.value ?? "", qe = ve.fields[Ne]?.value ?? "";
        if (Ze !== qe) {
          const Je = ve.fields[Ne];
          Je && (Ne.startsWith("alternate_greetings_") ? J.alternate_greetings[Je.label] = Je.value : kn.includes(Ne) && (J.core[Je.label] = Je.value));
        }
      }), (/* @__PURE__ */ new Set([...Object.keys(ye.draftFields), ...Object.keys(ve.draftFields)])).forEach((Ne) => {
        const Ze = ye.draftFields[Ne]?.value ?? "", qe = ve.draftFields[Ne]?.value ?? "";
        if (Ze !== qe && ve.draftFields[Ne]) {
          const Je = ve.draftFields[Ne];
          J.draft[Je.label] = Je.value;
        }
      }), Object.keys(J.core).length === 0 && Object.keys(J.alternate_greetings).length === 0 && Object.keys(J.draft).length === 0)
        return Y;
      const He = { fields: J };
      let Ie = Lt.compile(P.content, { noEscape: !0 })(He);
      if (Ie = Di.substituteParams(Ie), Ie.trim()) {
        const Ne = {
          id: `msg-${Date.now()}-state`,
          role: "system",
          content: Ie.trim(),
          isStateUpdate: !0
        };
        return [...Y, Ne];
      }
      return Y;
    },
    []
  ), G = te.useCallback(
    async (Y, ve, ye, Ve) => {
      const P = Pt.getSettings();
      if (!t.profileId) {
        Oe("warning", "Please select a connection profile for this session.");
        return;
      }
      k.current = new AbortController(), ye(), b(!0);
      try {
        const J = [], re = Di.extensionSettings.connectionManager?.profiles?.find(
          (Ne) => Ne.id === t.profileId
        ), xe = re?.api ? Di.CONNECT_API_MAP[re.api].selected : void 0;
        if (!xe) {
          Oe("warning", "No API selected for this session.");
          return;
        }
        for (const Ne of Y)
          if (Ne.id === qd) {
            if (vn === void 0 && !Sr) continue;
            const Ze = await f0(xe, u);
            Ze.warnings?.length && Ze.warnings.forEach((qe) => Oe("warning", qe)), J.push(...Ze.result);
          } else
            J.push(Ne);
        const He = Y.slice(0, Y.length - (ve ? 0 : 1)).reverse().find((Ne) => Ne.stateSnapshot)?.stateSnapshot ?? o, Ie = P.prompts.existingFieldDefinitions;
        if (Ie) {
          const Ne = {
            fields: {
              core: Object.fromEntries(
                Object.entries(He.fields).filter(([qe]) => !qe.startsWith("alternate_greetings_")).map(([, qe]) => [qe.label, qe.value])
              ),
              alternate_greetings: Object.fromEntries(
                Object.entries(He.fields).filter(([qe]) => qe.startsWith("alternate_greetings_")).map(([, qe]) => [qe.label, qe.value])
              ),
              draft: Object.fromEntries(Object.entries(He.draftFields).map(([, qe]) => [qe.label, qe.value]))
            }
          };
          let Ze = Lt.compile(Ie.content, { noEscape: !0 })(Ne);
          if (Ze = Di.substituteParams(Ze), Ze.trim()) {
            const qe = {
              id: `temp-state-${Date.now()}`,
              role: "system",
              content: Ze.trim()
            }, Je = J.pop();
            J.push(qe), Je && J.push(Je);
          }
        }
        if (t.isReadonly) {
          J.push({
            id: `msg-${Date.now()}-readonly`,
            role: "system",
            content: "Readonly mode enabled. You can only discuss with the user without making changes."
          });
          const Ne = await gA(
            t.profileId,
            J,
            P.maxResponseToken,
            k.current.signal
          ), Ze = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: Ne
          }, qe = [...Y, Ze];
          p(qe), s({ ...t, messages: qe });
        } else {
          const Ne = t.type === "field" ? oA : (() => {
            const Ye = [...Object.keys(He.fields), ...Object.keys(He.draftFields)], Fe = Object.keys(He.draftFields);
            return fA(Ye, Fe);
          })(), qe = await vA(
            t.profileId,
            J,
            Ne,
            t.type === "field" ? Qy.FIELD : Qy.GLOBAL,
            t.promptEngineeringMode,
            P.maxResponseToken,
            k.current.signal
          ), Je = SA(He, qe, t.type, t.targetFieldId), ue = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: qe.justification,
            stateSnapshot: Je
          };
          let fe = [...Y, ue];
          fe = q(fe, Je, He), p(fe), s({ ...t, messages: fe });
        }
      } catch (J) {
        J.name === "AbortError" ? Oe("info", "Request was cancelled.") : (console.error("Revise request failed:", J), Oe("error", `Request failed: ${J.message}`)), Ve();
      } finally {
        b(!1), k.current = null;
      }
    },
    [t, s, o, u, q]
  ), B = te.useCallback(async () => {
    if (!h.trim() || y) return;
    const Y = { id: `msg-${Date.now()}`, role: "user", content: h.trim() }, ve = f;
    G(
      [...f, Y],
      !1,
      () => {
        p([...f, Y]), g("");
      },
      () => p(ve)
    );
  }, [h, y, f, G]), V = te.useCallback(async () => {
    if (y || f.length === 0) return;
    const Y = f;
    let ve = [...f];
    const ye = f.findLastIndex((Ve) => !Ve.isStateUpdate);
    ye > -1 && f[ye].role === "assistant" && (ve = f.slice(0, ye)), await G(
      ve,
      !0,
      () => p(ve),
      () => p(Y)
    );
  }, [y, f, G]), $ = () => {
    const Y = f.slice().reverse().find((ve) => ve.stateSnapshot)?.stateSnapshot ?? o;
    i(Y), r();
  }, oe = (Y) => {
    const ve = f.findIndex((P) => P.id === Y);
    if (ve === -1 || !f[ve].stateSnapshot) return;
    const ye = f[ve].stateSnapshot;
    let Ve = o;
    for (let P = ve - 1; P >= 0; P--)
      if (f[P].stateSnapshot) {
        Ve = f[P].stateSnapshot;
        break;
      }
    v({ before: Ve, after: ye });
  }, he = () => {
    S(!0);
  }, ge = (Y) => {
    D(Y.id), T(Y.content);
  }, U = () => {
    D(null), T("");
  }, ne = async () => {
    if (!A) return;
    const Y = f.findIndex((re) => re.id === A);
    if (Y === -1 || !await Di.Popup.show.confirm(
      "Edit Message",
      "This will fork the conversation from this point, removing all subsequent messages. Continue?"
    )) return;
    const ye = f, Ve = f.slice(0, Y), P = { ...f[Y], content: E }, J = [...Ve, P];
    U(), G(
      J,
      !1,
      () => p(J),
      () => p(ye)
    );
  }, ce = async (Y) => {
    const ve = f.findIndex((re) => re.id === Y);
    if (ve === -1) return;
    const Ve = !!f[ve].isInitial;
    if (!await Di.Popup.show.confirm(
      "Delete Message",
      Ve ? "Deleting part of the initial context will clear the entire chat history. Are you sure?" : "This will delete this message and all subsequent messages. Are you sure?"
    )) return;
    let J;
    Ve ? J = f.filter((re) => re.isInitial && re.id !== Y) : J = f.slice(0, ve), p(J), s({ ...t, messages: J }), Oe("info", "Message history has been updated.");
  }, Me = f.filter((Y) => !Y.isStateUpdate), j = Me.filter((Y) => Y.isInitial), K = Me.filter((Y) => !Y.isInitial), ae = f.slice().reverse().find((Y) => Y.stateSnapshot)?.stateSnapshot ?? o, se = () => {
    O(!0);
  }, le = (Y) => {
    const ve = f.slice().reverse().find((P) => P.stateSnapshot)?.stateSnapshot ?? o, ye = {
      id: `msg-${Date.now()}-user-edit`,
      role: "user",
      content: "I made a change.",
      // Default justification for manual edits
      stateSnapshot: Y
    };
    let Ve = [...f, ye];
    Ve = q(Ve, Y, ve), p(Ve), s({ ...t, messages: Ve }), O(!1);
  }, ke = () => {
    k.current?.abort();
  };
  return /* @__PURE__ */ w.jsxs("div", { className: "revise-session-chat", children: [
    /* @__PURE__ */ w.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ w.jsx("h2", { children: t.name }),
      /* @__PURE__ */ w.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ w.jsxs("label", { className: "checkbox_label", children: [
          /* @__PURE__ */ w.jsx(
            "input",
            {
              type: "checkbox",
              checked: t.isReadonly ?? !1,
              onChange: (Y) => s({ ...t, isReadonly: Y.target.checked })
            }
          ),
          "Readonly Mode"
        ] }),
        /* @__PURE__ */ w.jsx("div", { style: { maxWidth: "200px" }, children: /* @__PURE__ */ w.jsx(
          F0,
          {
            initialSelectedProfileId: t.profileId,
            onChange: (Y) => s({ ...t, profileId: Y?.id ?? "" })
          }
        ) }),
        /* @__PURE__ */ w.jsxs(
          "select",
          {
            className: "text_pole",
            value: t.promptEngineeringMode,
            onChange: (Y) => s({ ...t, promptEngineeringMode: Y.target.value }),
            title: "Prompt Engineering Mode",
            disabled: t.isReadonly,
            style: { minWidth: "fit-content", width: "unset" },
            children: [
              /* @__PURE__ */ w.jsx("option", { value: "native", children: "Native" }),
              /* @__PURE__ */ w.jsx("option", { value: "json", children: "JSON" }),
              /* @__PURE__ */ w.jsx("option", { value: "xml", children: "XML" })
            ]
          }
        ),
        /* @__PURE__ */ w.jsx(me, { onClick: he, title: "View current character state", children: "View State" }),
        /* @__PURE__ */ w.jsx(me, { onClick: se, title: "Manually edit the current state", children: "Edit State" }),
        /* @__PURE__ */ w.jsx(me, { onClick: r, title: "Back to sessions", children: /* @__PURE__ */ w.jsx("i", { className: "fa-solid fa-arrow-left" }) }),
        /* @__PURE__ */ w.jsxs(me, { onClick: $, title: "Apply Changes and Close", children: [
          /* @__PURE__ */ w.jsx("i", { className: "fa-solid fa-check" }),
          " Apply"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ w.jsxs("div", { className: "chat-messages", children: [
      j.length > 0 && /* @__PURE__ */ w.jsxs("details", { className: "initial-messages-container", children: [
        /* @__PURE__ */ w.jsx("summary", { children: "View Initial Context" }),
        /* @__PURE__ */ w.jsx("div", { className: "initial-messages-content", children: j.map(
          (Y) => A === Y.id ? /* @__PURE__ */ w.jsxs("div", { className: "message-editor", children: [
            /* @__PURE__ */ w.jsx(yn, { value: E, onChange: (ve) => T(ve.target.value), rows: 5 }),
            /* @__PURE__ */ w.jsxs("div", { className: "editor-buttons", children: [
              /* @__PURE__ */ w.jsxs(me, { onClick: ne, children: [
                /* @__PURE__ */ w.jsx("i", { className: "fa-solid fa-check" }),
                " Save & Fork"
              ] }),
              /* @__PURE__ */ w.jsxs(me, { onClick: U, children: [
                /* @__PURE__ */ w.jsx("i", { className: "fa-solid fa-times" }),
                " Cancel"
              ] })
            ] })
          ] }, Y.id) : /* @__PURE__ */ w.jsxs("div", { className: `message-bubble-wrapper initial-context ${Y.role}`, children: [
            /* @__PURE__ */ w.jsx("div", { className: `message-bubble ${Y.role} initial`, children: /* @__PURE__ */ w.jsx("div", { className: "message-content", children: Y.content }) }),
            !y && Y.id !== qd && /* @__PURE__ */ w.jsxs("div", { className: "message-actions", children: [
              /* @__PURE__ */ w.jsxs(
                me,
                {
                  className: "message-action-button",
                  onClick: () => ge(Y),
                  title: "Edit Context",
                  children: [
                    " ",
                    /* @__PURE__ */ w.jsx("i", { className: "fa-solid fa-pencil" }),
                    " "
                  ]
                }
              ),
              /* @__PURE__ */ w.jsxs(
                me,
                {
                  className: "message-action-button danger_button",
                  onClick: () => ce(Y.id),
                  title: "Delete Context",
                  children: [
                    " ",
                    /* @__PURE__ */ w.jsx("i", { className: "fa-solid fa-trash-can" }),
                    " "
                  ]
                }
              )
            ] })
          ] }, Y.id)
        ) })
      ] }),
      K.map(
        (Y) => A === Y.id ? /* @__PURE__ */ w.jsxs("div", { className: "message-editor", children: [
          /* @__PURE__ */ w.jsx(yn, { value: E, onChange: (ve) => T(ve.target.value), rows: 3 }),
          /* @__PURE__ */ w.jsxs("div", { className: "editor-buttons", children: [
            /* @__PURE__ */ w.jsxs(me, { onClick: ne, children: [
              /* @__PURE__ */ w.jsx("i", { className: "fa-solid fa-check" }),
              " Save & Fork"
            ] }),
            /* @__PURE__ */ w.jsxs(me, { onClick: U, children: [
              /* @__PURE__ */ w.jsx("i", { className: "fa-solid fa-times" }),
              " Cancel"
            ] })
          ] })
        ] }, Y.id) : /* @__PURE__ */ w.jsxs("div", { className: `message-bubble-wrapper ${Y.role}`, children: [
          /* @__PURE__ */ w.jsxs("div", { className: "message-actions", children: [
            Y.role === "user" && !Y.stateSnapshot && !y && /* @__PURE__ */ w.jsxs(
              me,
              {
                className: "message-action-button",
                onClick: () => ge(Y),
                title: "Edit and Fork",
                children: [
                  " ",
                  /* @__PURE__ */ w.jsx("i", { className: "fa-solid fa-pencil" }),
                  " "
                ]
              }
            ),
            Y.stateSnapshot && !y && /* @__PURE__ */ w.jsxs(
              me,
              {
                className: "message-action-button",
                onClick: () => oe(Y.id),
                title: "Compare changes",
                children: [
                  " ",
                  /* @__PURE__ */ w.jsx("i", { className: "fa-solid fa-code-compare" }),
                  " "
                ]
              }
            ),
            !y && /* @__PURE__ */ w.jsxs(
              me,
              {
                className: "message-action-button danger_button",
                onClick: () => ce(Y.id),
                title: "Delete Message",
                children: [
                  " ",
                  /* @__PURE__ */ w.jsx("i", { className: "fa-solid fa-trash-can" }),
                  " "
                ]
              }
            )
          ] }),
          /* @__PURE__ */ w.jsx("div", { className: `message-bubble ${Y.role}`, children: /* @__PURE__ */ w.jsx("div", { className: "message-content", children: Y.content }) })
        ] }, Y.id)
      ),
      K.length > 0 && !y && /* @__PURE__ */ w.jsx("div", { className: "regenerate-button-wrapper", children: /* @__PURE__ */ w.jsxs(me, { onClick: V, title: "Regenerate response", children: [
        " ",
        /* @__PURE__ */ w.jsx("i", { className: "fa-solid fa-rotate-right" }),
        " Regenerate",
        " "
      ] }) }),
      y && /* @__PURE__ */ w.jsxs("div", { className: "message-bubble-wrapper assistant", children: [
        /* @__PURE__ */ w.jsx("div", { className: "message-bubble assistant loading", children: /* @__PURE__ */ w.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) }),
        /* @__PURE__ */ w.jsx(me, { onClick: ke, className: "danger_button", title: "Cancel Request", children: /* @__PURE__ */ w.jsx("i", { className: "fa-solid fa-stop" }) })
      ] }),
      /* @__PURE__ */ w.jsx("div", { ref: M })
    ] }),
    /* @__PURE__ */ w.jsxs("div", { className: "chat-input-area", children: [
      /* @__PURE__ */ w.jsx(
        yn,
        {
          value: h,
          onChange: (Y) => g(Y.target.value),
          placeholder: "Type your revision instructions...",
          rows: 3,
          disabled: y || !!A,
          onKeyDown: (Y) => {
            Y.key === "Enter" && !Y.shiftKey && (Y.preventDefault(), B());
          }
        }
      ),
      /* @__PURE__ */ w.jsxs(me, { onClick: B, disabled: y || !h.trim() || !!A, children: [
        " ",
        /* @__PURE__ */ w.jsx("i", { className: "fa-solid fa-paper-plane" }),
        " "
      ] })
    ] }),
    _ && /* @__PURE__ */ w.jsx(
      zi,
      {
        type: gn.DISPLAY,
        content: /* @__PURE__ */ w.jsx(yA, { before: _.before, after: _.after }),
        onComplete: () => v(null),
        options: { wide: !0, large: !0 }
      }
    ),
    d && /* @__PURE__ */ w.jsx(
      zi,
      {
        type: gn.DISPLAY,
        content: /* @__PURE__ */ w.jsx(_A, { currentState: ae, initialState: o }),
        onComplete: () => S(!1),
        options: { wide: !0, large: !0 }
      }
    ),
    x && /* @__PURE__ */ w.jsx(
      zi,
      {
        type: gn.DISPLAY,
        content: /* @__PURE__ */ w.jsx(
          xA,
          {
            initialState: ae,
            onSave: le,
            onClose: () => O(!1)
          }
        ),
        onComplete: () => O(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
};
async function CA(t, r, i, s, o) {
  const u = Pt.getSettings(), f = u.mainContextTemplatePresets[i];
  if (!f)
    throw new Error(`Main context template preset "${i}" not found.`);
  const p = [], g = {
    ...{
      user: Jn.name1 || "You",
      char: t.fields.name?.value || "Character",
      persona: Jn.powerUserSettings.persona_description
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
      const S = Jn.characters[parseInt(d)];
      S && v.push(S);
    }), g.characters = v;
  }
  if (s.worldInfo) {
    const v = {};
    await Promise.all(
      o.selectedWorldNames.map(async (d) => {
        const S = await Jn.loadWorldInfo(d);
        S && (v[d] = Object.values(S.entries).filter((x) => !x.disable));
      })
    ), g.lorebooks = v;
  }
  for (const v of f.prompts) {
    if (!v.enabled || v.promptName === "stDescription" && !s.stDescription || v.promptName === "charDefinitions" && !s.charCard || v.promptName === "lorebookDefinitions" && !s.worldInfo || v.promptName === "existingFieldDefinitions" && !s.existingFields || v.promptName === "personaDescription" && !s.persona || v.promptName === "chatHistory" && s.messages.type === "none" || vn === void 0 && !Sr && v.promptName === "chatHistory") continue;
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
    const S = u.prompts[v.promptName];
    if (!S || S.content.includes("{{activeFormatInstructions}}"))
      continue;
    let x = "";
    x = Lt.compile(S.content, { noEscape: !0 })(g), x = Jn.substituteParams(x), x.trim() && p.push({
      id: `im-${p.length}`,
      role: v.role,
      content: x.trim(),
      isInitial: !0
    });
  }
  const y = r ? t.fields[r]?.label || t.draftFields[r]?.label : "Global", b = u.prompts.reviseTaskDescription.content, _ = Lt.compile(b, { noEscape: !0 })({
    isFieldSession: !!r,
    targetLabel: y
  });
  return p.push({
    id: `im-${p.length}`,
    role: "system",
    content: _,
    isInitial: !0
  }), p;
}
const au = SillyTavern.getContext(), Jy = "charCreator_reviseSessions", wA = ({
  target: t,
  onClose: r,
  onApply: i,
  initialState: s,
  contextToSend: o,
  sessionForContext: u
}) => {
  const [f, p] = te.useState([]), [h, g] = te.useState(null), [y, b] = te.useState(!0);
  te.useEffect(() => {
    const D = JSON.parse(localStorage.getItem(Jy) || "[]");
    p(D), b(!1);
  }, []);
  const _ = te.useMemo(() => f.filter((D) => D.type === t.type && (D.type === "global" || D.targetFieldId === t.fieldId)).sort((D, E) => new Date(E.createdAt).getTime() - new Date(D.createdAt).getTime()), [f, t]), v = (D) => {
    localStorage.setItem(Jy, JSON.stringify(D)), p(D);
  }, d = async () => {
    const D = t.type === "field" ? s.fields[t.fieldId]?.label || s.draftFields[t.fieldId]?.label : "Global", E = await au.Popup.show.input(
      "New Session Name",
      `Session for ${D} - ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`
    );
    if (E)
      try {
        const T = Pt.getSettings();
        if (!T.profileId) {
          Oe("warning", "Please select a connection profile in the main popup first.");
          return;
        }
        const M = {
          id: `rs-${Date.now()}`,
          name: E,
          type: t.type,
          targetFieldId: t.fieldId,
          createdAt: (/* @__PURE__ */ new Date()).toISOString(),
          messages: [],
          // Will be populated next
          context: {
            mainContextTemplatePreset: T.mainContextTemplatePreset
          },
          profileId: T.profileId,
          promptEngineeringMode: T.defaultPromptEngineeringMode,
          isReadonly: !1
        }, k = await CA(
          s,
          M.targetFieldId,
          M.context.mainContextTemplatePreset,
          o,
          u
        );
        M.messages = k, g(M);
      } catch (T) {
        console.error("Failed to create session:", T), Oe("error", `Failed to create session: ${T.message}`);
      }
  }, S = (D) => {
    g(D);
  }, x = async (D) => {
    if (await au.Popup.show.confirm("Delete Session", "Are you sure? This cannot be undone.")) {
      const T = f.filter((M) => M.id !== D);
      v(T);
    }
  }, O = (D) => {
    const E = f.findIndex((M) => M.id === D.id), T = [...f];
    E !== -1 ? T[E] = D : T.push(D), v(T), g(D);
  };
  if (h) {
    const D = au.extensionSettings.connectionManager?.profiles?.find(
      (M) => M.id === h.profileId
    ), E = {
      targetCharacterId: vn,
      ignoreCharacterFields: !0,
      ignoreWorldInfo: !0,
      ignoreAuthorNote: !0,
      includeNames: !!Sr,
      presetName: D?.preset,
      contextName: D?.context,
      instructName: D?.instruct
    }, T = o.messages;
    switch (T.type) {
      case "none":
        E.messageIndexesBetween = { start: -1, end: -1 };
        break;
      case "first":
        E.messageIndexesBetween = { start: 0, end: T.first ?? 10 };
        break;
      case "last":
        const M = au.chat?.length ?? 0, k = T.last ?? 10;
        E.messageIndexesBetween = {
          end: Math.max(0, M - 1),
          start: Math.max(0, M - k)
        };
        break;
      case "range":
        E.messageIndexesBetween = {
          start: T.range?.start ?? 0,
          end: T.range?.end ?? 10
        };
        break;
    }
    return vn === void 0 && !Sr && (E.messageIndexesBetween = { start: -1, end: -1 }), /* @__PURE__ */ w.jsx(
      EA,
      {
        session: h,
        onBack: () => g(null),
        onApply: i,
        onSessionUpdate: O,
        initialState: s,
        chatContextOptions: E
      }
    );
  }
  const A = t.type === "field" ? s.fields[t.fieldId]?.label || s.draftFields[t.fieldId]?.label : "Global";
  return /* @__PURE__ */ w.jsxs("div", { className: "revise-session-manager", children: [
    /* @__PURE__ */ w.jsx("div", { className: "popup_header", children: /* @__PURE__ */ w.jsxs("h2", { children: [
      'Revise Sessions for "',
      A,
      '"'
    ] }) }),
    /* @__PURE__ */ w.jsx("div", { className: "session-list", children: y ? /* @__PURE__ */ w.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "Loading sessions..." }) : _.length === 0 ? /* @__PURE__ */ w.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No sessions found. Create a new one to get started." }) : _.map((D) => /* @__PURE__ */ w.jsxs("div", { className: "session-item", children: [
      /* @__PURE__ */ w.jsxs("div", { className: "session-info", onClick: () => S(D), children: [
        /* @__PURE__ */ w.jsx("span", { className: "session-name", children: D.name }),
        /* @__PURE__ */ w.jsx("span", { className: "session-date", children: new Date(D.createdAt).toLocaleString() })
      ] }),
      /* @__PURE__ */ w.jsx(me, { className: "danger_button", onClick: () => x(D.id), children: /* @__PURE__ */ w.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] }, D.id)) }),
    /* @__PURE__ */ w.jsx("div", { className: "session-actions", children: /* @__PURE__ */ w.jsxs(me, { onClick: d, className: "menu_button", children: [
      /* @__PURE__ */ w.jsx("i", { className: "fa-solid fa-plus" }),
      " New Session"
    ] }) })
  ] });
}, AA = SillyTavern.getContext(), TA = `You are an AI assistant helping to refine a character card. The user wants to make changes to their character.

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
    const o = await Promise.resolve().then(() => TE), u = {};
    kn.forEach((x) => {
      r.fields[x]?.value && (u[x] = r.fields[x].value);
    });
    const f = [];
    Object.keys(r.fields).filter((x) => x.startsWith("alternate_greetings_")).sort((x, O) => parseInt(x.split("_")[2]) - parseInt(O.split("_")[2])).forEach((x) => {
      r.fields[x].value && f.push(r.fields[x].value);
    }), u.alternate_greetings = f;
    const p = o.compile(TA), h = t[t.length - 1].content, g = p({
      currentCharacterJson: JSON.stringify(u, null, 2),
      userMessage: h
    }), y = await AA.ConnectionManagerRequestService.sendRequest(
      i,
      [{ role: "user", content: g }],
      s
    );
    if (!y || !y.content)
      throw new Error("No response from AI");
    let b = y.content.trim();
    const _ = b.match(/```(?:json)?\s*(\{[\s\S]*?)(?:```|$)/i);
    if (_)
      b = _[1];
    else {
      const x = b.indexOf("{"), O = b.lastIndexOf("}");
      x !== -1 && O !== -1 && O >= x && (b = b.substring(x, O + 1));
    }
    let v;
    try {
      v = JSON.parse(b);
    } catch (x) {
      console.warn("JSON parse failed, returning raw response as fallback:", x);
      let O = y.content.trim();
      return (O.includes("{") || O.includes("```")) && (O = `⚠️ I tried to process your request but my response was too long and got cut off. Here's what I generated:

${O}

💡 **Tip**: Try increasing "Max Response Tokens" in Generation Options (currently set too low).`), { aiMessage: {
        role: "assistant",
        content: O,
        timestamp: Date.now(),
        fieldsUpdated: []
      }, updatedSession: r };
    }
    let d = { ...r };
    return v.updatedFields && Object.keys(v.updatedFields).forEach((x) => {
      x === "alternate_greetings" ? (Object.keys(d.fields).forEach((A) => {
        A.startsWith("alternate_greetings_") && delete d.fields[A];
      }), v.updatedFields[x].forEach((A, D) => {
        const E = `alternate_greetings_${D + 1}`;
        d.fields[E] = {
          value: A,
          prompt: "",
          label: `Alternate Greeting ${D + 1}`
        };
      })) : kn.includes(x) && (d.fields[x] = {
        value: v.updatedFields[x],
        prompt: "",
        label: Qn[x]
      });
    }), { aiMessage: {
      role: "assistant",
      content: v.response || "I've updated the character as requested.",
      timestamp: Date.now(),
      fieldsUpdated: v.fieldsUpdated || []
    }, updatedSession: d };
  } catch (o) {
    throw console.error("Error in chat message:", o), new Error(`Chat error: ${o.message || String(o)}`);
  }
}
const NA = ({
  session: t,
  onSessionUpdate: r,
  profileId: i,
  maxResponseToken: s
}) => {
  const [o, u] = te.useState([]), [f, p] = te.useState(""), [h, g] = te.useState(!1), y = te.useRef(null), b = () => {
    y.current?.scrollIntoView({ behavior: "smooth" });
  };
  te.useEffect(() => {
    b();
  }, [o]);
  const _ = te.useCallback(async () => {
    if (!f.trim() || h) return;
    const S = {
      role: "user",
      content: f.trim(),
      timestamp: Date.now()
    };
    u((x) => [...x, S]), p(""), g(!0);
    try {
      const { aiMessage: x, updatedSession: O } = await OA({
        messages: [...o, S],
        session: t,
        profileId: i,
        maxResponseToken: s
      });
      u((A) => [...A, x]), r(O);
    } catch (x) {
      console.error("Chat error:", x), Oe("error", `Chat error: ${x.message || String(x)}`);
      const O = {
        role: "assistant",
        content: "Sorry, I encountered an error processing your request. Please try again.",
        timestamp: Date.now()
      };
      u((A) => [...A, O]);
    } finally {
      g(!1);
    }
  }, [f, o, t, i, r, h]), v = te.useCallback(
    (S) => {
      S.key === "Enter" && !S.shiftKey && (S.preventDefault(), _());
    },
    [_]
  ), d = te.useCallback(async () => {
    await SillyTavern.getContext().Popup.show.confirm(
      "Clear Chat",
      "Are you sure you want to clear the chat history?"
    ) && u([]);
  }, []);
  return /* @__PURE__ */ w.jsxs("div", { className: "chat-interface", children: [
    /* @__PURE__ */ w.jsxs("div", { className: "chat-header", children: [
      /* @__PURE__ */ w.jsx("h3", { children: "AI Assistant" }),
      /* @__PURE__ */ w.jsx(me, { onClick: d, className: "menu_button secondary small", children: "Clear" })
    ] }),
    /* @__PURE__ */ w.jsxs("div", { className: "chat-messages", children: [
      o.length === 0 && /* @__PURE__ */ w.jsxs("div", { className: "chat-welcome", children: [
        /* @__PURE__ */ w.jsx("p", { children: "👋 Hi! I'm your AI assistant for character creation." }),
        /* @__PURE__ */ w.jsx("p", { children: "I can help you refine your character by answering questions or making adjustments. Just tell me what you'd like to change!" }),
        /* @__PURE__ */ w.jsxs("div", { className: "chat-examples", children: [
          /* @__PURE__ */ w.jsx("p", { children: /* @__PURE__ */ w.jsx("strong", { children: "Examples:" }) }),
          /* @__PURE__ */ w.jsxs("ul", { children: [
            /* @__PURE__ */ w.jsx("li", { children: '"Make her more mysterious"' }),
            /* @__PURE__ */ w.jsx("li", { children: '"Add a tragic backstory"' }),
            /* @__PURE__ */ w.jsx("li", { children: '"Change the setting to a cyberpunk city"' }),
            /* @__PURE__ */ w.jsx("li", { children: '"Make the dialogue more formal"' })
          ] })
        ] })
      ] }),
      o.map((S, x) => /* @__PURE__ */ w.jsxs("div", { className: `chat-message ${S.role}`, children: [
        /* @__PURE__ */ w.jsx("div", { className: "message-avatar", children: S.role === "user" ? "👤" : "🤖" }),
        /* @__PURE__ */ w.jsxs("div", { className: "message-content", children: [
          /* @__PURE__ */ w.jsx("div", { className: "message-text", children: S.content }),
          S.fieldsUpdated && S.fieldsUpdated.length > 0 && /* @__PURE__ */ w.jsx("div", { className: "message-updates", children: /* @__PURE__ */ w.jsxs("small", { children: [
            "✏️ Updated: ",
            S.fieldsUpdated.join(", ")
          ] }) })
        ] })
      ] }, x)),
      h && /* @__PURE__ */ w.jsxs("div", { className: "chat-message assistant", children: [
        /* @__PURE__ */ w.jsx("div", { className: "message-avatar", children: "🤖" }),
        /* @__PURE__ */ w.jsx("div", { className: "message-content", children: /* @__PURE__ */ w.jsxs("div", { className: "message-text typing", children: [
          /* @__PURE__ */ w.jsx("span", {}),
          /* @__PURE__ */ w.jsx("span", {}),
          /* @__PURE__ */ w.jsx("span", {})
        ] }) })
      ] }),
      /* @__PURE__ */ w.jsx("div", { ref: y })
    ] }),
    /* @__PURE__ */ w.jsxs("div", { className: "chat-input-container", children: [
      /* @__PURE__ */ w.jsx(
        yn,
        {
          value: f,
          onChange: (S) => p(S.target.value),
          onKeyDown: v,
          placeholder: "Type your message... (Enter to send, Shift+Enter for new line)",
          rows: 3,
          disabled: h,
          className: "chat-input"
        }
      ),
      /* @__PURE__ */ w.jsx(
        me,
        {
          onClick: _,
          disabled: !f.trim() || h,
          className: "menu_button send-button",
          children: "Send"
        }
      )
    ] })
  ] });
};
function DA(t, r) {
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
function MA(t, r) {
  try {
    const i = DA(t, r), s = JSON.stringify(i, null, 2), o = new Blob([s], { type: "application/json" }), u = URL.createObjectURL(o), f = document.createElement("a");
    f.href = u, f.download = `${t.name.replace(/[^a-z0-9]/gi, "_").toLowerCase()}_v3.json`, document.body.appendChild(f), f.click(), document.body.removeChild(f), URL.revokeObjectURL(u), Oe("success", `Character exported as JSON: ${f.download}`);
  } catch (i) {
    console.error("Error exporting character:", i), Oe("error", `Failed to export character: ${i.message || String(i)}`);
  }
}
function kA(t, r) {
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
    f.download = `${p}_lorebook.json`, document.body.appendChild(f), f.click(), document.body.removeChild(f), URL.revokeObjectURL(u), Oe("success", `Lorebook exported as JSON: ${f.download}`);
  } catch (i) {
    console.error("Error exporting lorebook:", i), Oe("error", `Failed to export lorebook: ${i.message || String(i)}`);
  }
}
Lt.helpers.join || Lt.registerHelper("join", function(t, r) {
  return Array.isArray(t) ? t.join(typeof r == "string" ? r : ", ") : "";
});
Lt.helpers.is_not_empty || Lt.registerHelper("is_not_empty", function(t, r) {
  return t ? Array.isArray(t) ? t.length > 0 ? r.fn(this) : r.inverse(this) : typeof t == "object" && Object.keys(t).length > 0 ? r.fn(this) : typeof t != "object" && !Array.isArray(t) ? r.fn(this) : r.inverse(this) : r.inverse(this);
});
const Dn = SillyTavern.getContext(), Ky = "charCreator", _d = () => ({
  selectedCharacterIndexes: vn ? [String(vn)] : [],
  selectedWorldNames: [],
  fields: kn.reduce(
    (t, r) => (t[r] = { value: "", prompt: "", label: Qn[r] }, t),
    {}
  ),
  draftFields: {},
  lastLoadedCharacterId: ""
}), RA = {
  name: { label: Qn.name, rows: 1, large: !1, promptEnabled: !1 },
  description: { label: Qn.description, rows: 5, large: !0, promptEnabled: !0 },
  personality: { label: Qn.personality, rows: 4, large: !0, promptEnabled: !0 },
  scenario: { label: Qn.scenario, rows: 3, large: !0, promptEnabled: !0 },
  first_mes: { label: Qn.first_mes, rows: 3, large: !0, promptEnabled: !0 },
  mes_example: { label: Qn.mes_example, rows: 6, large: !0, promptEnabled: !0 }
}, jA = () => {
  const t = G0(), r = Pt.getSettings(), [i, s] = te.useState(_d()), [o, u] = te.useState([]), [f, p] = te.useState(!0), [h, g] = te.useState("core"), [y, b] = te.useState([]), [_, v] = te.useState([]), [d, S] = te.useState(null), [x, O] = te.useState(null), [A, D] = te.useState(!1), [E, T] = te.useState(null);
  te.useEffect(() => {
    (async () => {
      p(!0), b(Dn.characters), v(Kg);
      const J = JSON.parse(localStorage.getItem(Ky) ?? "{}"), re = _d();
      if (J.fields && (re.fields = { ...re.fields, ...J.fields }), J.draftFields && (re.draftFields = J.draftFields), J.selectedCharacterIndexes && (re.selectedCharacterIndexes = J.selectedCharacterIndexes), J.selectedWorldNames && (re.selectedWorldNames = J.selectedWorldNames), J.lastLoadedCharacterId) {
        re.lastLoadedCharacterId = J.lastLoadedCharacterId;
        const xe = Dn.characters.find((He) => He.avatar === J.lastLoadedCharacterId);
        xe && S(xe);
      }
      s(re), p(!1);
    })();
  }, []), te.useEffect(() => {
    f || localStorage.setItem(Ky, JSON.stringify(i));
  }, [i, f]);
  const M = (P, J) => {
    Pt.getSettings()[P] = J, Pt.saveSettings(), t();
  }, k = (P, J) => {
    Pt.getSettings().contextToSend[P] = J, Pt.saveSettings(), t();
  }, q = te.useCallback(
    (P, J, re, xe) => {
      s((He) => {
        const Ie = xe ? "draftFields" : "fields", Ne = { ...He[Ie] };
        return Ne[P] || (Ne[P] = { value: "", prompt: "", label: P }), Ne[P][re] = J, { ...He, [Ie]: Ne };
      });
    },
    []
  ), G = te.useMemo(
    () => Object.keys(i.fields).filter((P) => P.startsWith("alternate_greetings_")).sort((P, J) => parseInt(P.split("_")[2]) - parseInt(J.split("_")[2])).map((P) => i.fields[P]),
    [i.fields]
  ), B = te.useCallback((P) => {
    s((J) => {
      const re = { ...J.fields };
      return Object.keys(re).forEach((xe) => {
        xe.startsWith("alternate_greetings_") && delete re[xe];
      }), P.forEach((xe, He) => {
        const Ie = `alternate_greetings_${He + 1}`;
        re[Ie] = { ...xe, label: `Alternate Greeting ${He + 1}` };
      }), { ...J, fields: re };
    });
  }, []), V = te.useCallback(
    (P, J) => {
      q(P, "", "value", J);
    },
    [q]
  ), $ = te.useCallback(
    async (P) => {
      await Dn.Popup.show.confirm(
        "Delete Draft Field",
        `Are you sure you want to delete "${i.draftFields[P].label}"?`
      ) && s((re) => {
        const xe = { ...re.draftFields };
        return delete xe[P], { ...re, draftFields: xe };
      });
    },
    [i.draftFields]
  ), oe = te.useCallback(async () => {
    const P = await Dn.Popup.show.input("Enter Draft Field Name", "");
    if (!P?.trim()) return;
    const J = jd(P.trim());
    if (!J) return Oe("error", "Invalid field name.");
    if (i.draftFields[J] || kn.includes(J))
      return Oe("warning", "Field name already exists.");
    s((re) => ({
      ...re,
      draftFields: { ...re.draftFields, [J]: { value: "", prompt: "", label: P } }
    })), g("draft");
  }, [i.draftFields]), he = (P) => {
    T({ type: "field", fieldId: P }), D(!0);
  }, ge = () => {
    T({ type: "global" }), D(!0);
  }, U = (P) => {
    s((J) => ({
      ...J,
      fields: { ...J.fields, ...P.fields },
      draftFields: { ...J.draftFields, ...P.draftFields }
    })), Oe("success", "Changes from revise session applied."), D(!1);
  }, ne = te.useCallback(
    async (P, J) => {
      if (!r.profileId) return Oe("warning", "Please select a connection profile.");
      u((re) => [...re, P]);
      try {
        const re = Dn.extensionSettings.connectionManager?.profiles?.find(
          (ue) => ue.id === r.profileId
        );
        if (!re) throw new Error("Connection profile not found.");
        const xe = {
          presetName: re?.preset,
          contextName: re?.context,
          instructName: re?.instruct,
          targetCharacterId: vn,
          ignoreCharacterFields: !0,
          ignoreWorldInfo: !0,
          ignoreAuthorNote: !0,
          maxContext: r.maxContextType === "custom" ? r.maxContextValue : r.maxContextType === "profile" ? "preset" : "active",
          includeNames: !!Sr
        }, He = r.contextToSend.messages;
        switch (He.type) {
          case "none":
            xe.messageIndexesBetween = { start: -1, end: -1 };
            break;
          case "first":
            xe.messageIndexesBetween = { start: 0, end: He.first ?? 10 };
            break;
          case "last":
            const ue = Dn.chat?.length ?? 0, fe = He.last ?? 10;
            xe.messageIndexesBetween = {
              end: Math.max(0, ue - 1),
              start: Math.max(0, ue - fe)
            };
            break;
          case "range":
            xe.messageIndexesBetween = {
              start: He.range?.start ?? 0,
              end: He.range?.end ?? 10
            };
            break;
          case "all":
          default:
            break;
        }
        vn === void 0 && !Sr && (xe.messageIndexesBetween = { start: -1, end: -1 });
        const Ie = {};
        await Promise.all(
          Kg.filter((ue) => !Ie[ue]).map(async (ue) => {
            const fe = await Dn.loadWorldInfo(ue);
            fe && (Ie[ue] = Object.values(fe.entries));
          })
        );
        const Ne = structuredClone(r.prompts);
        r.contextToSend.stDescription || delete Ne.stDescription, (!r.contextToSend.charCard || i.selectedCharacterIndexes.length === 0) && delete Ne.charDefinitions, (!r.contextToSend.worldInfo || i.selectedWorldNames.length === 0) && delete Ne.lorebookDefinitions, r.contextToSend.existingFields || delete Ne.existingFieldDefinitions, r.contextToSend.persona || delete Ne.personaDescription, delete Ne.worldInfoCharDefinition;
        const Ze = await OE({
          profileId: r.profileId,
          userPrompt: r.promptPresets[r.promptPreset].content,
          buildPromptOptions: xe,
          continueFrom: J,
          session: i,
          allCharacters: y,
          entriesGroupByWorldName: Ie,
          promptSettings: Ne,
          formatDescription: { content: r.prompts[`${r.outputFormat}Format`].content },
          mainContextList: r.mainContextTemplatePresets[r.mainContextTemplatePreset].prompts.filter(
            (ue) => ue.enabled
          ),
          includeUserMacro: r.contextToSend.persona,
          maxResponseToken: r.maxResponseToken,
          targetField: P,
          outputFormat: r.outputFormat
        }), qe = P.startsWith("alternate_greetings_"), Je = !qe && !kn.includes(P);
        if (qe) {
          const ue = parseInt(P.split("_")[2]) - 1, fe = [...G];
          fe[ue] && (fe[ue].value = Ze), B(fe);
        } else
          q(P, Ze, "value", Je);
      } catch (re) {
        console.error(re), Oe("error", re.message || String(re));
      } finally {
        u((re) => re.filter((xe) => xe !== P));
      }
    },
    [i, r, y, G, q, B]
  ), ce = te.useCallback(async () => {
    await Dn.Popup.show.confirm("Reset Fields", "This will clear all fields. Are you sure?") && (s(_d()), S(null));
  }, []), Me = te.useCallback(
    (P) => {
      if (!d) return Oe("warning", "Please load a character to compare against.");
      let J, re, xe;
      typeof P == "number" ? (J = G[P]?.value ?? "", re = d.data?.alternate_greetings?.[P] ?? "", xe = `Alternate Greeting ${P + 1}`) : (J = i.fields[P]?.value ?? "", re = d[P] ?? d.data?.[P] ?? "", xe = Qn[P]), O({ original: re, current: J, fieldName: xe });
    },
    [d, i.fields, G]
  ), j = te.useCallback(
    async (P) => {
      const J = y[parseInt(P)];
      if (!J || kn.some((Ie) => i.fields[Ie].value.trim() !== "") && !await Dn.Popup.show.confirm("Load Character", "Overwrite current fields?"))
        return;
      const xe = { ...i.fields };
      kn.forEach((Ie) => {
        xe[Ie] = { value: J[Ie] ?? J.data?.[Ie] ?? "", prompt: "", label: Qn[Ie] };
      });
      const He = (J.data?.alternate_greetings ?? []).map((Ie) => ({ value: Ie, prompt: "" }));
      S(J), s((Ie) => ({ ...Ie, fields: xe, lastLoadedCharacterId: J.avatar })), B(He);
    },
    [y, i.fields, B]
  ), K = () => G.map((P) => P.value).filter((P) => P.trim() !== ""), ae = async () => {
    if (!i.fields.name.value) return Oe("warning", "Please provide a character name.");
    if (!await Dn.Popup.show.confirm("Save as New Character", "Are you sure?")) return;
    const J = {
      name: i.fields.name.value,
      description: i.fields.description.value,
      personality: i.fields.personality.value,
      scenario: i.fields.scenario.value,
      first_mes: i.fields.first_mes.value,
      mes_example: i.fields.mes_example.value,
      data: {
        alternate_greetings: K(),
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
      await p2(J, !0);
    } catch (re) {
      Oe("error", `Failed to create character: ${re.message}`);
    }
  }, se = async () => {
    if (!d) return Oe("warning", "Please load a character to override.");
    if (!await Dn.Popup.show.confirm(
      "Override Character",
      `Override "${d.name}"? This cannot be undone.`
    )) return;
    const J = {
      ...d,
      name: i.fields.name.value,
      description: i.fields.description.value,
      personality: i.fields.personality.value,
      scenario: i.fields.scenario.value,
      first_mes: i.fields.first_mes.value,
      mes_example: i.fields.mes_example.value,
      data: {
        alternate_greetings: K(),
        name: i.fields.name.value,
        description: i.fields.description.value,
        first_mes: i.fields.first_mes.value,
        mes_example: i.fields.mes_example.value,
        personality: i.fields.personality.value,
        scenario: i.fields.scenario.value
      }
    };
    try {
      await m2(J, !0), Oe("success", `Character "${J.name}" updated!`);
    } catch (re) {
      Oe("error", `Failed to override character: ${re.message}`);
    }
  }, le = () => {
    const P = JSON.stringify({ draftFields: i.draftFields, version: q0 }, null, 2), J = new Blob([P], { type: "application/json" }), re = document.createElement("a");
    re.href = URL.createObjectURL(J), re.download = `crec-draft-fields-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`, re.click(), URL.revokeObjectURL(re.href);
  }, ke = () => {
    const P = document.createElement("input");
    P.type = "file", P.accept = ".json", P.onchange = async () => {
      const J = P.files?.[0];
      if (J)
        try {
          const re = await J.text(), xe = JSON.parse(re);
          if (!xe.draftFields) throw new Error("Invalid file format.");
          (Object.keys(i.draftFields).length > 0 ? await Dn.Popup.show.confirm(
            "Import Drafts",
            "This will replace current draft fields. Continue?"
          ) : !0) && (s((Ie) => ({ ...Ie, draftFields: xe.draftFields })), Oe("success", "Draft fields imported."));
        } catch (re) {
          Oe("error", `Import failed: ${re.message}`);
        }
    }, P.click();
  }, Y = te.useMemo(
    () => y.map((P, J) => ({ value: String(J), label: P.name })),
    [y]
  ), ve = te.useMemo(
    () => _.map((P) => ({ value: P, label: P })),
    [_]
  ), ye = te.useMemo(
    () => Object.keys(r.promptPresets).map((P) => ({ value: P, label: P })),
    [r.promptPresets]
  ), Ve = te.useMemo(
    () => Object.keys(r.mainContextTemplatePresets).map((P) => ({ value: P, label: P })),
    [r.mainContextTemplatePresets]
  );
  return f ? /* @__PURE__ */ w.jsx("div", { children: "Loading..." }) : /* @__PURE__ */ w.jsxs("div", { id: "charCreatorPopup", children: [
    /* @__PURE__ */ w.jsx("h2", { children: "Character Creator" }),
    /* @__PURE__ */ w.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ w.jsxs("div", { className: "column-left", children: [
        /* @__PURE__ */ w.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ w.jsx("h3", { children: "Connection Profile" }),
          /* @__PURE__ */ w.jsx(
            F0,
            {
              initialSelectedProfileId: r.profileId,
              onChange: (P) => M("profileId", P?.id ?? "")
            }
          )
        ] }),
        /* @__PURE__ */ w.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ w.jsx("h3", { children: "Context to Send" }),
          /* @__PURE__ */ w.jsxs("div", { className: "context-options", children: [
            /* @__PURE__ */ w.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ w.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.stDescription,
                  onChange: (P) => k("stDescription", P.target.checked)
                }
              ),
              " ",
              "Description of SillyTavern & Char Card"
            ] }),
            /* @__PURE__ */ w.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ w.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.persona,
                  onChange: (P) => k("persona", P.target.checked)
                }
              ),
              " ",
              "User's Persona"
            ] }),
            (vn !== void 0 || Sr) && /* @__PURE__ */ w.jsxs("div", { className: "message-options", children: [
              /* @__PURE__ */ w.jsx("h4", { children: "Messages to Include" }),
              /* @__PURE__ */ w.jsxs(
                "select",
                {
                  className: "text_pole",
                  value: r.contextToSend.messages.type,
                  onChange: (P) => k("messages", {
                    ...r.contextToSend.messages,
                    type: P.target.value
                  }),
                  children: [
                    /* @__PURE__ */ w.jsx("option", { value: "none", children: "None" }),
                    /* @__PURE__ */ w.jsx("option", { value: "all", children: "All Messages" }),
                    /* @__PURE__ */ w.jsx("option", { value: "first", children: "First X Messages" }),
                    /* @__PURE__ */ w.jsx("option", { value: "last", children: "Last X Messages" }),
                    /* @__PURE__ */ w.jsx("option", { value: "range", children: "Range" })
                  ]
                }
              ),
              r.contextToSend.messages.type === "first" && /* @__PURE__ */ w.jsx("div", { style: { marginTop: "10px" }, children: /* @__PURE__ */ w.jsxs("label", { children: [
                "First",
                " ",
                /* @__PURE__ */ w.jsx(
                  "input",
                  {
                    type: "number",
                    className: "text_pole small message-input",
                    min: "1",
                    value: r.contextToSend.messages.first ?? 10,
                    onChange: (P) => k("messages", {
                      ...r.contextToSend.messages,
                      first: parseInt(P.target.value) || 10
                    })
                  }
                ),
                " ",
                "Messages"
              ] }) }),
              r.contextToSend.messages.type === "last" && /* @__PURE__ */ w.jsx("div", { style: { marginTop: "10px" }, children: /* @__PURE__ */ w.jsxs("label", { children: [
                "Last",
                " ",
                /* @__PURE__ */ w.jsx(
                  "input",
                  {
                    type: "number",
                    className: "text_pole small message-input",
                    min: "1",
                    value: r.contextToSend.messages.last ?? 10,
                    onChange: (P) => k("messages", {
                      ...r.contextToSend.messages,
                      last: parseInt(P.target.value) || 10
                    })
                  }
                ),
                " ",
                "Messages"
              ] }) }),
              r.contextToSend.messages.type === "range" && /* @__PURE__ */ w.jsx("div", { style: { marginTop: "10px" }, children: /* @__PURE__ */ w.jsxs("label", { children: [
                "Range:",
                " ",
                /* @__PURE__ */ w.jsx(
                  "input",
                  {
                    type: "number",
                    className: "text_pole small message-input",
                    min: "0",
                    placeholder: "Start",
                    value: r.contextToSend.messages.range?.start ?? 0,
                    onChange: (P) => k("messages", {
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
                /* @__PURE__ */ w.jsx(
                  "input",
                  {
                    type: "number",
                    className: "text_pole small message-input",
                    min: "1",
                    placeholder: "End",
                    value: r.contextToSend.messages.range?.end ?? 10,
                    onChange: (P) => k("messages", {
                      ...r.contextToSend.messages,
                      range: { ...r.contextToSend.messages.range, end: parseInt(P.target.value) || 10 }
                    })
                  }
                )
              ] }) })
            ] }),
            /* @__PURE__ */ w.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ w.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.charCard,
                  onChange: (P) => k("charCard", P.target.checked)
                }
              ),
              " ",
              "Selected Characters' Data"
            ] }),
            r.contextToSend.charCard && /* @__PURE__ */ w.jsx(
              hd,
              {
                items: Y,
                value: i.selectedCharacterIndexes,
                onChange: (P) => s((J) => ({ ...J, selectedCharacterIndexes: P })),
                multiple: !0,
                enableSearch: !0
              }
            ),
            /* @__PURE__ */ w.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ w.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.worldInfo,
                  onChange: (P) => k("worldInfo", P.target.checked)
                }
              ),
              " ",
              "Selected World Info"
            ] }),
            r.contextToSend.worldInfo && /* @__PURE__ */ w.jsx(
              hd,
              {
                items: ve,
                value: i.selectedWorldNames,
                onChange: (P) => s((J) => ({ ...J, selectedWorldNames: P })),
                multiple: !0,
                enableSearch: !0
              }
            ),
            /* @__PURE__ */ w.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ w.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.existingFields,
                  onChange: (P) => k("existingFields", P.target.checked)
                }
              ),
              " ",
              "Existing Field Content"
            ] }),
            /* @__PURE__ */ w.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ w.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.dontSendOtherGreetings,
                  onChange: (P) => k("dontSendOtherGreetings", P.target.checked)
                }
              ),
              " ",
              "Don't send other alternate greetings"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ w.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ w.jsx("h3", { children: "Generation Options" }),
          /* @__PURE__ */ w.jsxs("label", { title: "You can edit in extension settings", children: [
            "Main Context Template",
            /* @__PURE__ */ w.jsx(
              _u,
              {
                onItemsChange: () => {
                },
                label: "Main Context Template",
                items: Ve,
                value: r.mainContextTemplatePreset,
                onChange: (P) => M("mainContextTemplatePreset", P ?? "default")
              }
            )
          ] }),
          /* @__PURE__ */ w.jsxs("label", { children: [
            "Max Context Tokens",
            /* @__PURE__ */ w.jsxs(
              "select",
              {
                className: "text_pole",
                value: r.maxContextType,
                onChange: (P) => M("maxContextType", P.target.value),
                children: [
                  /* @__PURE__ */ w.jsx("option", { value: "profile", children: "Use profile preset" }),
                  /* @__PURE__ */ w.jsx("option", { value: "sampler", children: "Use active preset" }),
                  /* @__PURE__ */ w.jsx("option", { value: "custom", children: "Custom" })
                ]
              }
            )
          ] }),
          r.maxContextType === "custom" && /* @__PURE__ */ w.jsx(
            "input",
            {
              type: "number",
              className: "text_pole",
              value: r.maxContextValue,
              onChange: (P) => M("maxContextValue", parseInt(P.target.value) || 16384)
            }
          ),
          /* @__PURE__ */ w.jsxs("label", { children: [
            "Max Response Tokens",
            /* @__PURE__ */ w.jsx(
              "input",
              {
                type: "number",
                className: "text_pole",
                value: r.maxResponseToken,
                onChange: (P) => M("maxResponseToken", parseInt(P.target.value) || 1024)
              }
            )
          ] }),
          /* @__PURE__ */ w.jsxs("label", { children: [
            "Output Format",
            /* @__PURE__ */ w.jsxs(
              "select",
              {
                className: "text_pole",
                value: r.outputFormat,
                onChange: (P) => M("outputFormat", P.target.value),
                children: [
                  /* @__PURE__ */ w.jsx("option", { value: "none", children: "Plain Text" }),
                  /* @__PURE__ */ w.jsx("option", { value: "xml", children: "XML" }),
                  /* @__PURE__ */ w.jsx("option", { value: "json", children: "JSON" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ w.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ w.jsx("h3", { children: "Additional Instructions" }),
          /* @__PURE__ */ w.jsx(
            _u,
            {
              label: "Prompt Preset",
              items: ye,
              value: r.promptPreset,
              onChange: (P) => M("promptPreset", P ?? "default"),
              onItemsChange: (P) => M(
                "promptPresets",
                P.reduce(
                  (J, re) => ({ ...J, [re.value]: r.promptPresets[re.value] ?? { content: "" } }),
                  {}
                )
              ),
              enableCreate: !0,
              enableDelete: !0,
              enableRename: !0,
              readOnlyValues: ["default"]
            }
          ),
          /* @__PURE__ */ w.jsx(
            yn,
            {
              value: r.promptPresets[r.promptPreset]?.content ?? "",
              onChange: (P) => M("promptPresets", {
                ...r.promptPresets,
                [r.promptPreset]: { content: P.target.value }
              }),
              rows: 4
            }
          )
        ] }),
        /* @__PURE__ */ w.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ w.jsx("h3", { children: "Actions" }),
          /* @__PURE__ */ w.jsxs("div", { className: "character-field-actions", children: [
            /* @__PURE__ */ w.jsx(
              me,
              {
                onClick: ge,
                title: "Open global revision sessions to edit multiple fields at once",
                children: /* @__PURE__ */ w.jsx("i", { className: "fa-solid fa-comments" })
              }
            ),
            /* @__PURE__ */ w.jsxs(me, { onClick: ce, title: "Reset all fields", children: [
              /* @__PURE__ */ w.jsx("i", { className: "fa-solid fa-rotate-left" }),
              " Reset"
            ] }),
            /* @__PURE__ */ w.jsx("div", { style: { width: "200px" }, title: "Load Character Data", children: /* @__PURE__ */ w.jsx(
              hd,
              {
                items: Y,
                value: d ? [String(y.indexOf(d))] : [],
                onChange: (P) => j(P[0]),
                multiple: !1,
                enableSearch: !0,
                placeholder: "Load Character..."
              }
            ) }),
            /* @__PURE__ */ w.jsx(me, { onClick: ke, children: "Import JSON" })
          ] })
        ] }),
        /* @__PURE__ */ w.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ w.jsxs("div", { className: "tab-buttons", children: [
            /* @__PURE__ */ w.jsx(
              me,
              {
                onClick: () => g("core"),
                className: `menu_button tab-button ${h === "core" ? "active" : ""}`,
                children: "Core Fields"
              }
            ),
            /* @__PURE__ */ w.jsx(
              me,
              {
                onClick: () => g("draft"),
                className: `menu_button tab-button ${h === "draft" ? "active" : ""}`,
                children: "Draft Fields"
              }
            ),
            /* @__PURE__ */ w.jsx("div", { className: "right-aligned", children: h === "draft" && /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
              /* @__PURE__ */ w.jsxs(me, { onClick: oe, children: [
                /* @__PURE__ */ w.jsx("i", { className: "fa-solid fa-plus" }),
                " Add"
              ] }),
              /* @__PURE__ */ w.jsx(me, { onClick: le, children: "Export" }),
              /* @__PURE__ */ w.jsx(me, { onClick: ke, children: "Import" })
            ] }) })
          ] }),
          /* @__PURE__ */ w.jsxs("div", { className: "tab-content-area", children: [
            /* @__PURE__ */ w.jsxs("div", { className: `tab-content ${h === "core" ? "active" : ""}`, children: [
              kn.map((P) => {
                const J = RA[P];
                return J ? /* @__PURE__ */ w.jsx(
                  Ey,
                  {
                    fieldId: P,
                    label: J.label,
                    value: i.fields[P]?.value ?? "",
                    prompt: i.fields[P]?.prompt ?? "",
                    large: J.large,
                    rows: J.rows,
                    promptEnabled: J.promptEnabled,
                    isGenerating: o.includes(P),
                    onValueChange: (re, xe) => q(re, xe, "value", !1),
                    onPromptChange: (re, xe) => q(re, xe, "prompt", !1),
                    onGenerate: ne,
                    onContinue: (re) => ne(re, i.fields[re].value),
                    onClear: (re) => V(re, !1),
                    onCompare: Me,
                    onOpenReviseSessions: he
                  },
                  P
                ) : null;
              }),
              /* @__PURE__ */ w.jsx(
                UE,
                {
                  greetings: G,
                  onGreetingsChange: B,
                  isGenerating: o.some((P) => P.startsWith("alternate_greetings_")),
                  onGenerate: (P) => ne(`alternate_greetings_${P + 1}`),
                  onContinue: (P) => ne(`alternate_greetings_${P + 1}`, G[P].value),
                  onCompare: Me
                }
              )
            ] }),
            /* @__PURE__ */ w.jsx("div", { className: `tab-content ${h === "draft" ? "active" : ""}`, children: Object.entries(i.draftFields).map(([P, J]) => /* @__PURE__ */ w.jsx(
              Ey,
              {
                fieldId: P,
                label: J.label,
                value: J.value,
                prompt: J.prompt,
                isDraft: !0,
                rows: 5,
                isGenerating: o.includes(P),
                onValueChange: (re, xe) => q(re, xe, "value", !0),
                onPromptChange: (re, xe) => q(re, xe, "prompt", !0),
                onGenerate: ne,
                onContinue: (re) => ne(re, i.draftFields[re].value),
                onClear: (re) => V(re, !0),
                onDelete: $
              },
              P
            )) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ w.jsx("div", { className: "column-right", children: /* @__PURE__ */ w.jsx(
        NA,
        {
          session: i,
          onSessionUpdate: s,
          profileId: r.profileId,
          maxResponseToken: r.maxResponseToken
        }
      ) })
    ] }),
    /* @__PURE__ */ w.jsxs("div", { className: "card export-panel", style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ w.jsx("h3", { children: "Save & Export" }),
      /* @__PURE__ */ w.jsxs("div", { className: "button-group", style: { display: "flex", gap: "10px", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ w.jsx(me, { onClick: ae, className: "menu_button confirm", children: "Create in SillyTavern" }),
        /* @__PURE__ */ w.jsx(me, { onClick: se, className: "menu_button warning", disabled: !d, children: "Update Loaded Character" }),
        /* @__PURE__ */ w.jsx("div", { style: { flexGrow: 1 } }),
        /* @__PURE__ */ w.jsx(
          me,
          {
            onClick: () => {
              const P = {
                name: i.fields.name.value,
                description: i.fields.description.value,
                personality: i.fields.personality.value,
                scenario: i.fields.scenario.value,
                first_mes: i.fields.first_mes.value,
                mes_example: i.fields.mes_example.value,
                alternate_greetings: G.map((J) => J.value)
              };
              MA(P);
            },
            children: "Export JSON (V3)"
          }
        ),
        /* @__PURE__ */ w.jsx(me, { onClick: () => kA(
          {
            entries: [],
            name: `${i.fields.name.value} Lorebook`,
            extensions: {},
            scan_depth: 2,
            token_budget: 2048,
            recursive_scanning: !1
          },
          i.fields.name.value
        ), children: "Export Lorebook JSON (Empty)" })
      ] })
    ] }),
    x && /* @__PURE__ */ w.jsx(
      zi,
      {
        type: gn.DISPLAY,
        content: /* @__PURE__ */ w.jsx(
          aC,
          {
            originalContent: x.original,
            newContent: x.current,
            fieldName: x.fieldName
          }
        ),
        onComplete: () => O(null),
        options: { wide: !0 }
      }
    ),
    A && E && /* @__PURE__ */ w.jsx(
      zi,
      {
        type: gn.DISPLAY,
        content: /* @__PURE__ */ w.jsx(
          wA,
          {
            target: E,
            onClose: () => D(!1),
            onApply: U,
            initialState: { fields: i.fields, draftFields: i.draftFields },
            contextToSend: r.contextToSend,
            sessionForContext: {
              selectedCharacterIndexes: i.selectedCharacterIndexes,
              selectedWorldNames: i.selectedWorldNames
            }
          }
        ),
        onComplete: () => D(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
}, zA = () => {
  const [t, r] = te.useState(!1), i = () => r(!0), s = () => r(!1);
  return window.openCharacterCreatorPopup = i, t ? /* @__PURE__ */ w.jsx(
    zi,
    {
      content: /* @__PURE__ */ w.jsx(jA, {}),
      type: gn.DISPLAY,
      onComplete: s,
      options: {
        large: !0,
        wide: !0
      }
    }
  ) : null;
}, x1 = SillyTavern.getContext();
async function LA() {
  const t = await x1.renderExtensionTemplateAsync(
    `third-party/${Ma}`,
    "templates/settings"
  );
  document.querySelector("#extensions_settings").insertAdjacentHTML("beforeend", t);
  const r = document.createElement("div"), i = document.querySelector(".charCreator_settings .inline-drawer-content");
  i && (i.prepend(r), dv.createRoot(r).render(
    /* @__PURE__ */ w.jsx(cu.StrictMode, { children: /* @__PURE__ */ w.jsx(IE, {}) })
  ));
  const s = '<div class="menu_button fa-solid fa-user-astronaut interactable charCreator-icon" title="Character Creator"></div>', o = [
    document.querySelector(".form_create_bottom_buttons_block"),
    document.querySelector("#GroupFavDelOkBack"),
    document.querySelector("#rm_buttons_container") ?? document.querySelector("#form_character_search_form")
  ], u = document.createElement("div");
  document.body.appendChild(u), dv.createRoot(u).render(
    /* @__PURE__ */ w.jsx(cu.StrictMode, { children: /* @__PURE__ */ w.jsx(zA, {}) })
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
function PA() {
  return !!x1.ConnectionManagerRequestService;
}
PA() ? ME().then(() => {
  LA();
}) : Oe("error", `[${Ma}] Make sure ST is updated.`);
export {
  LA as init
};
