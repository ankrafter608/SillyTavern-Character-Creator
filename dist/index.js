import { renderStoryString as q_, persona_description_positions as Xg } from "../../../../power-user.js";
import { parseMesExamples as F_, baseChatReplace as Z_, chat_metadata as zs, getMaxContextSize as G_, name1 as wr, name2 as Wr, this_chid as Tn, extension_prompt_types as Ca, depth_prompt_role_default as V_, depth_prompt_depth_default as Y_ } from "../../../../../script.js";
import { world_info_include_names as $_, wi_anchor_position as X_, world_names as Qg } from "../../../../world-info.js";
import "../../../../slash-commands.js";
import "../../../../personas.js";
import { formatInstructModeExamples as Q_, formatInstructModeSystemPrompt as J_ } from "../../../../instruct-mode.js";
import { appendFileContent as K_ } from "../../../../chats.js";
import { setOpenAIMessages as W_, setOpenAIMessageExamples as e2, formatWorldInfo as t2, getPromptPosition as n2, getPromptRole as r2, prepareOpenAIMessages as a2 } from "../../../../openai.js";
import { metadata_keys as Ls } from "../../../../authors-note.js";
import { getGroupDepthPrompts as i2, selected_group as Cr } from "../../../../group-chats.js";
import { getRegexedString as s2, regex_placement as Jg } from "../../../regex/engine.js";
import { removeFromArray as Kg, runAfterAnimation as o2 } from "../../../../utils.js";
import "../../../../slash-commands/SlashCommandCommonEnumsProvider.js";
import "../../../../slash-commands/SlashCommandEnumValue.js";
import { Popup as Ci, fixToastrForDialogs as qf } from "../../../../popup.js";
import Wg from "../../../../../lib/dialog-polyfill.esm.js";
function l2(t, r) {
  for (var i = 0; i < r.length; i++) {
    const s = r[i];
    if (typeof s != "string" && !Array.isArray(s)) {
      for (const l in s)
        if (l !== "default" && !(l in t)) {
          const u = Object.getOwnPropertyDescriptor(s, l);
          u && Object.defineProperty(t, l, u.get ? u : {
            enumerable: !0,
            get: () => s[l]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
function Fd(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ff = { exports: {} }, Is = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ev;
function u2() {
  if (ev) return Is;
  ev = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function i(s, l, u) {
    var f = null;
    if (u !== void 0 && (f = "" + u), l.key !== void 0 && (f = "" + l.key), "key" in l) {
      u = {};
      for (var p in l)
        p !== "key" && (u[p] = l[p]);
    } else u = l;
    return l = u.ref, {
      $$typeof: t,
      type: s,
      key: f,
      ref: l !== void 0 ? l : null,
      props: u
    };
  }
  return Is.Fragment = r, Is.jsx = i, Is.jsxs = i, Is;
}
var tv;
function c2() {
  return tv || (tv = 1, Ff.exports = u2()), Ff.exports;
}
var _ = c2(), Zf = { exports: {} }, ke = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nv;
function f2() {
  if (nv) return ke;
  nv = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), f = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), S = Symbol.iterator;
  function v(D) {
    return D === null || typeof D != "object" ? null : (D = S && D[S] || D["@@iterator"], typeof D == "function" ? D : null);
  }
  var y = {
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
  function w(D, J, se) {
    this.props = D, this.context = J, this.refs = x, this.updater = se || y;
  }
  w.prototype.isReactComponent = {}, w.prototype.setState = function(D, J) {
    if (typeof D != "object" && typeof D != "function" && D != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, D, J, "setState");
  }, w.prototype.forceUpdate = function(D) {
    this.updater.enqueueForceUpdate(this, D, "forceUpdate");
  };
  function A() {
  }
  A.prototype = w.prototype;
  function C(D, J, se) {
    this.props = D, this.context = J, this.refs = x, this.updater = se || y;
  }
  var T = C.prototype = new A();
  T.constructor = C, d(T, w.prototype), T.isPureReactComponent = !0;
  var E = Array.isArray, O = { H: null, A: null, T: null, S: null, V: null }, j = Object.prototype.hasOwnProperty;
  function R(D, J, se, le, ue, De) {
    return se = De.ref, {
      $$typeof: t,
      type: D,
      key: J,
      ref: se !== void 0 ? se : null,
      props: De
    };
  }
  function H(D, J) {
    return R(
      D.type,
      J,
      void 0,
      void 0,
      void 0,
      D.props
    );
  }
  function Q(D) {
    return typeof D == "object" && D !== null && D.$$typeof === t;
  }
  function B(D) {
    var J = { "=": "=0", ":": "=2" };
    return "$" + D.replace(/[=:]/g, function(se) {
      return J[se];
    });
  }
  var V = /\/+/g;
  function $(D, J) {
    return typeof D == "object" && D !== null && D.key != null ? B("" + D.key) : J.toString(36);
  }
  function F() {
  }
  function te(D) {
    switch (D.status) {
      case "fulfilled":
        return D.value;
      case "rejected":
        throw D.reason;
      default:
        switch (typeof D.status == "string" ? D.then(F, F) : (D.status = "pending", D.then(
          function(J) {
            D.status === "pending" && (D.status = "fulfilled", D.value = J);
          },
          function(J) {
            D.status === "pending" && (D.status = "rejected", D.reason = J);
          }
        )), D.status) {
          case "fulfilled":
            return D.value;
          case "rejected":
            throw D.reason;
        }
    }
    throw D;
  }
  function W(D, J, se, le, ue) {
    var De = typeof D;
    (De === "undefined" || De === "boolean") && (D = null);
    var X = !1;
    if (D === null) X = !0;
    else
      switch (De) {
        case "bigint":
        case "string":
        case "number":
          X = !0;
          break;
        case "object":
          switch (D.$$typeof) {
            case t:
            case r:
              X = !0;
              break;
            case m:
              return X = D._init, W(
                X(D._payload),
                J,
                se,
                le,
                ue
              );
          }
      }
    if (X)
      return ue = ue(D), X = le === "" ? "." + $(D, 0) : le, E(ue) ? (se = "", X != null && (se = X.replace(V, "$&/") + "/"), W(ue, J, se, "", function($e) {
        return $e;
      })) : ue != null && (Q(ue) && (ue = H(
        ue,
        se + (ue.key == null || D && D.key === ue.key ? "" : ("" + ue.key).replace(
          V,
          "$&/"
        ) + "/") + X
      )), J.push(ue)), 1;
    X = 0;
    var ve = le === "" ? "." : le + ":";
    if (E(D))
      for (var ye = 0; ye < D.length; ye++)
        le = D[ye], De = ve + $(le, ye), X += W(
          le,
          J,
          se,
          De,
          ue
        );
    else if (ye = v(D), typeof ye == "function")
      for (D = ye.call(D), ye = 0; !(le = D.next()).done; )
        le = le.value, De = ve + $(le, ye++), X += W(
          le,
          J,
          se,
          De,
          ue
        );
    else if (De === "object") {
      if (typeof D.then == "function")
        return W(
          te(D),
          J,
          se,
          le,
          ue
        );
      throw J = String(D), Error(
        "Objects are not valid as a React child (found: " + (J === "[object Object]" ? "object with keys {" + Object.keys(D).join(", ") + "}" : J) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return X;
  }
  function L(D, J, se) {
    if (D == null) return D;
    var le = [], ue = 0;
    return W(D, le, "", "", function(De) {
      return J.call(se, De, ue++);
    }), le;
  }
  function ae(D) {
    if (D._status === -1) {
      var J = D._result;
      J = J(), J.then(
        function(se) {
          (D._status === 0 || D._status === -1) && (D._status = 1, D._result = se);
        },
        function(se) {
          (D._status === 0 || D._status === -1) && (D._status = 2, D._result = se);
        }
      ), D._status === -1 && (D._status = 0, D._result = J);
    }
    if (D._status === 1) return D._result.default;
    throw D._result;
  }
  var de = typeof reportError == "function" ? reportError : function(D) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var J = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof D == "object" && D !== null && typeof D.message == "string" ? String(D.message) : String(D),
        error: D
      });
      if (!window.dispatchEvent(J)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", D);
      return;
    }
    console.error(D);
  };
  function Oe() {
  }
  return ke.Children = {
    map: L,
    forEach: function(D, J, se) {
      L(
        D,
        function() {
          J.apply(this, arguments);
        },
        se
      );
    },
    count: function(D) {
      var J = 0;
      return L(D, function() {
        J++;
      }), J;
    },
    toArray: function(D) {
      return L(D, function(J) {
        return J;
      }) || [];
    },
    only: function(D) {
      if (!Q(D))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return D;
    }
  }, ke.Component = w, ke.Fragment = i, ke.Profiler = l, ke.PureComponent = C, ke.StrictMode = s, ke.Suspense = h, ke.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = O, ke.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(D) {
      return O.H.useMemoCache(D);
    }
  }, ke.cache = function(D) {
    return function() {
      return D.apply(null, arguments);
    };
  }, ke.cloneElement = function(D, J, se) {
    if (D == null)
      throw Error(
        "The argument must be a React element, but you passed " + D + "."
      );
    var le = d({}, D.props), ue = D.key, De = void 0;
    if (J != null)
      for (X in J.ref !== void 0 && (De = void 0), J.key !== void 0 && (ue = "" + J.key), J)
        !j.call(J, X) || X === "key" || X === "__self" || X === "__source" || X === "ref" && J.ref === void 0 || (le[X] = J[X]);
    var X = arguments.length - 2;
    if (X === 1) le.children = se;
    else if (1 < X) {
      for (var ve = Array(X), ye = 0; ye < X; ye++)
        ve[ye] = arguments[ye + 2];
      le.children = ve;
    }
    return R(D.type, ue, void 0, void 0, De, le);
  }, ke.createContext = function(D) {
    return D = {
      $$typeof: f,
      _currentValue: D,
      _currentValue2: D,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, D.Provider = D, D.Consumer = {
      $$typeof: u,
      _context: D
    }, D;
  }, ke.createElement = function(D, J, se) {
    var le, ue = {}, De = null;
    if (J != null)
      for (le in J.key !== void 0 && (De = "" + J.key), J)
        j.call(J, le) && le !== "key" && le !== "__self" && le !== "__source" && (ue[le] = J[le]);
    var X = arguments.length - 2;
    if (X === 1) ue.children = se;
    else if (1 < X) {
      for (var ve = Array(X), ye = 0; ye < X; ye++)
        ve[ye] = arguments[ye + 2];
      ue.children = ve;
    }
    if (D && D.defaultProps)
      for (le in X = D.defaultProps, X)
        ue[le] === void 0 && (ue[le] = X[le]);
    return R(D, De, void 0, void 0, null, ue);
  }, ke.createRef = function() {
    return { current: null };
  }, ke.forwardRef = function(D) {
    return { $$typeof: p, render: D };
  }, ke.isValidElement = Q, ke.lazy = function(D) {
    return {
      $$typeof: m,
      _payload: { _status: -1, _result: D },
      _init: ae
    };
  }, ke.memo = function(D, J) {
    return {
      $$typeof: g,
      type: D,
      compare: J === void 0 ? null : J
    };
  }, ke.startTransition = function(D) {
    var J = O.T, se = {};
    O.T = se;
    try {
      var le = D(), ue = O.S;
      ue !== null && ue(se, le), typeof le == "object" && le !== null && typeof le.then == "function" && le.then(Oe, de);
    } catch (De) {
      de(De);
    } finally {
      O.T = J;
    }
  }, ke.unstable_useCacheRefresh = function() {
    return O.H.useCacheRefresh();
  }, ke.use = function(D) {
    return O.H.use(D);
  }, ke.useActionState = function(D, J, se) {
    return O.H.useActionState(D, J, se);
  }, ke.useCallback = function(D, J) {
    return O.H.useCallback(D, J);
  }, ke.useContext = function(D) {
    return O.H.useContext(D);
  }, ke.useDebugValue = function() {
  }, ke.useDeferredValue = function(D, J) {
    return O.H.useDeferredValue(D, J);
  }, ke.useEffect = function(D, J, se) {
    var le = O.H;
    if (typeof se == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return le.useEffect(D, J);
  }, ke.useId = function() {
    return O.H.useId();
  }, ke.useImperativeHandle = function(D, J, se) {
    return O.H.useImperativeHandle(D, J, se);
  }, ke.useInsertionEffect = function(D, J) {
    return O.H.useInsertionEffect(D, J);
  }, ke.useLayoutEffect = function(D, J) {
    return O.H.useLayoutEffect(D, J);
  }, ke.useMemo = function(D, J) {
    return O.H.useMemo(D, J);
  }, ke.useOptimistic = function(D, J) {
    return O.H.useOptimistic(D, J);
  }, ke.useReducer = function(D, J, se) {
    return O.H.useReducer(D, J, se);
  }, ke.useRef = function(D) {
    return O.H.useRef(D);
  }, ke.useState = function(D) {
    return O.H.useState(D);
  }, ke.useSyncExternalStore = function(D, J, se) {
    return O.H.useSyncExternalStore(
      D,
      J,
      se
    );
  }, ke.useTransition = function() {
    return O.H.useTransition();
  }, ke.version = "19.1.1", ke;
}
var rv;
function Zd() {
  return rv || (rv = 1, Zf.exports = f2()), Zf.exports;
}
var Y = Zd();
const cu = /* @__PURE__ */ Fd(Y);
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
var av;
function d2() {
  return av || (av = 1, (function(t) {
    function r(L, ae) {
      var de = L.length;
      L.push(ae);
      e: for (; 0 < de; ) {
        var Oe = de - 1 >>> 1, D = L[Oe];
        if (0 < l(D, ae))
          L[Oe] = ae, L[de] = D, de = Oe;
        else break e;
      }
    }
    function i(L) {
      return L.length === 0 ? null : L[0];
    }
    function s(L) {
      if (L.length === 0) return null;
      var ae = L[0], de = L.pop();
      if (de !== ae) {
        L[0] = de;
        e: for (var Oe = 0, D = L.length, J = D >>> 1; Oe < J; ) {
          var se = 2 * (Oe + 1) - 1, le = L[se], ue = se + 1, De = L[ue];
          if (0 > l(le, de))
            ue < D && 0 > l(De, le) ? (L[Oe] = De, L[ue] = de, Oe = ue) : (L[Oe] = le, L[se] = de, Oe = se);
          else if (ue < D && 0 > l(De, de))
            L[Oe] = De, L[ue] = de, Oe = ue;
          else break e;
        }
      }
      return ae;
    }
    function l(L, ae) {
      var de = L.sortIndex - ae.sortIndex;
      return de !== 0 ? de : L.id - ae.id;
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
    var h = [], g = [], m = 1, S = null, v = 3, y = !1, d = !1, x = !1, w = !1, A = typeof setTimeout == "function" ? setTimeout : null, C = typeof clearTimeout == "function" ? clearTimeout : null, T = typeof setImmediate < "u" ? setImmediate : null;
    function E(L) {
      for (var ae = i(g); ae !== null; ) {
        if (ae.callback === null) s(g);
        else if (ae.startTime <= L)
          s(g), ae.sortIndex = ae.expirationTime, r(h, ae);
        else break;
        ae = i(g);
      }
    }
    function O(L) {
      if (x = !1, E(L), !d)
        if (i(h) !== null)
          d = !0, j || (j = !0, $());
        else {
          var ae = i(g);
          ae !== null && W(O, ae.startTime - L);
        }
    }
    var j = !1, R = -1, H = 5, Q = -1;
    function B() {
      return w ? !0 : !(t.unstable_now() - Q < H);
    }
    function V() {
      if (w = !1, j) {
        var L = t.unstable_now();
        Q = L;
        var ae = !0;
        try {
          e: {
            d = !1, x && (x = !1, C(R), R = -1), y = !0;
            var de = v;
            try {
              t: {
                for (E(L), S = i(h); S !== null && !(S.expirationTime > L && B()); ) {
                  var Oe = S.callback;
                  if (typeof Oe == "function") {
                    S.callback = null, v = S.priorityLevel;
                    var D = Oe(
                      S.expirationTime <= L
                    );
                    if (L = t.unstable_now(), typeof D == "function") {
                      S.callback = D, E(L), ae = !0;
                      break t;
                    }
                    S === i(h) && s(h), E(L);
                  } else s(h);
                  S = i(h);
                }
                if (S !== null) ae = !0;
                else {
                  var J = i(g);
                  J !== null && W(
                    O,
                    J.startTime - L
                  ), ae = !1;
                }
              }
              break e;
            } finally {
              S = null, v = de, y = !1;
            }
            ae = void 0;
          }
        } finally {
          ae ? $() : j = !1;
        }
      }
    }
    var $;
    if (typeof T == "function")
      $ = function() {
        T(V);
      };
    else if (typeof MessageChannel < "u") {
      var F = new MessageChannel(), te = F.port2;
      F.port1.onmessage = V, $ = function() {
        te.postMessage(null);
      };
    } else
      $ = function() {
        A(V, 0);
      };
    function W(L, ae) {
      R = A(function() {
        L(t.unstable_now());
      }, ae);
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(L) {
      L.callback = null;
    }, t.unstable_forceFrameRate = function(L) {
      0 > L || 125 < L ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : H = 0 < L ? Math.floor(1e3 / L) : 5;
    }, t.unstable_getCurrentPriorityLevel = function() {
      return v;
    }, t.unstable_next = function(L) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var ae = 3;
          break;
        default:
          ae = v;
      }
      var de = v;
      v = ae;
      try {
        return L();
      } finally {
        v = de;
      }
    }, t.unstable_requestPaint = function() {
      w = !0;
    }, t.unstable_runWithPriority = function(L, ae) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var de = v;
      v = L;
      try {
        return ae();
      } finally {
        v = de;
      }
    }, t.unstable_scheduleCallback = function(L, ae, de) {
      var Oe = t.unstable_now();
      switch (typeof de == "object" && de !== null ? (de = de.delay, de = typeof de == "number" && 0 < de ? Oe + de : Oe) : de = Oe, L) {
        case 1:
          var D = -1;
          break;
        case 2:
          D = 250;
          break;
        case 5:
          D = 1073741823;
          break;
        case 4:
          D = 1e4;
          break;
        default:
          D = 5e3;
      }
      return D = de + D, L = {
        id: m++,
        callback: ae,
        priorityLevel: L,
        startTime: de,
        expirationTime: D,
        sortIndex: -1
      }, de > Oe ? (L.sortIndex = de, r(g, L), i(h) === null && L === i(g) && (x ? (C(R), R = -1) : x = !0, W(O, de - Oe))) : (L.sortIndex = D, r(h, L), d || y || (d = !0, j || (j = !0, $()))), L;
    }, t.unstable_shouldYield = B, t.unstable_wrapCallback = function(L) {
      var ae = v;
      return function() {
        var de = v;
        v = ae;
        try {
          return L.apply(this, arguments);
        } finally {
          v = de;
        }
      };
    };
  })(Yf)), Yf;
}
var iv;
function h2() {
  return iv || (iv = 1, Vf.exports = d2()), Vf.exports;
}
var $f = { exports: {} }, Vt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sv;
function p2() {
  if (sv) return Vt;
  sv = 1;
  var t = Zd();
  function r(h) {
    var g = "https://react.dev/errors/" + h;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var m = 2; m < arguments.length; m++)
        g += "&args[]=" + encodeURIComponent(arguments[m]);
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
  }, l = Symbol.for("react.portal");
  function u(h, g, m) {
    var S = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: l,
      key: S == null ? null : "" + S,
      children: h,
      containerInfo: g,
      implementation: m
    };
  }
  var f = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(h, g) {
    if (h === "font") return "";
    if (typeof g == "string")
      return g === "use-credentials" ? g : "";
  }
  return Vt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, Vt.createPortal = function(h, g) {
    var m = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
      throw Error(r(299));
    return u(h, g, null, m);
  }, Vt.flushSync = function(h) {
    var g = f.T, m = s.p;
    try {
      if (f.T = null, s.p = 2, h) return h();
    } finally {
      f.T = g, s.p = m, s.d.f();
    }
  }, Vt.preconnect = function(h, g) {
    typeof h == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, s.d.C(h, g));
  }, Vt.prefetchDNS = function(h) {
    typeof h == "string" && s.d.D(h);
  }, Vt.preinit = function(h, g) {
    if (typeof h == "string" && g && typeof g.as == "string") {
      var m = g.as, S = p(m, g.crossOrigin), v = typeof g.integrity == "string" ? g.integrity : void 0, y = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      m === "style" ? s.d.S(
        h,
        typeof g.precedence == "string" ? g.precedence : void 0,
        {
          crossOrigin: S,
          integrity: v,
          fetchPriority: y
        }
      ) : m === "script" && s.d.X(h, {
        crossOrigin: S,
        integrity: v,
        fetchPriority: y,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      });
    }
  }, Vt.preinitModule = function(h, g) {
    if (typeof h == "string")
      if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var m = p(
            g.as,
            g.crossOrigin
          );
          s.d.M(h, {
            crossOrigin: m,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
            nonce: typeof g.nonce == "string" ? g.nonce : void 0
          });
        }
      } else g == null && s.d.M(h);
  }, Vt.preload = function(h, g) {
    if (typeof h == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var m = g.as, S = p(m, g.crossOrigin);
      s.d.L(h, m, {
        crossOrigin: S,
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
  }, Vt.preloadModule = function(h, g) {
    if (typeof h == "string")
      if (g) {
        var m = p(g.as, g.crossOrigin);
        s.d.m(h, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: m,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0
        });
      } else s.d.m(h);
  }, Vt.requestFormReset = function(h) {
    s.d.r(h);
  }, Vt.unstable_batchedUpdates = function(h, g) {
    return h(g);
  }, Vt.useFormState = function(h, g, m) {
    return f.H.useFormState(h, g, m);
  }, Vt.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, Vt.version = "19.1.1", Vt;
}
var ov;
function r0() {
  if (ov) return $f.exports;
  ov = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return t(), $f.exports = p2(), $f.exports;
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
var lv;
function m2() {
  if (lv) return Ps;
  lv = 1;
  var t = h2(), r = Zd(), i = r0();
  function s(e) {
    var n = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        n += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function l(e) {
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
    for (var a = e, o = n; ; ) {
      var c = a.return;
      if (c === null) break;
      var b = c.alternate;
      if (b === null) {
        if (o = c.return, o !== null) {
          a = o;
          continue;
        }
        break;
      }
      if (c.child === b.child) {
        for (b = c.child; b; ) {
          if (b === a) return p(c), e;
          if (b === o) return p(c), n;
          b = b.sibling;
        }
        throw Error(s(188));
      }
      if (a.return !== o.return) a = c, o = b;
      else {
        for (var N = !1, k = c.child; k; ) {
          if (k === a) {
            N = !0, a = c, o = b;
            break;
          }
          if (k === o) {
            N = !0, o = c, a = b;
            break;
          }
          k = k.sibling;
        }
        if (!N) {
          for (k = b.child; k; ) {
            if (k === a) {
              N = !0, a = b, o = c;
              break;
            }
            if (k === o) {
              N = !0, o = b, a = c;
              break;
            }
            k = k.sibling;
          }
          if (!N) throw Error(s(189));
        }
      }
      if (a.alternate !== o) throw Error(s(190));
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
  var m = Object.assign, S = Symbol.for("react.element"), v = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), A = Symbol.for("react.provider"), C = Symbol.for("react.consumer"), T = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), Q = Symbol.for("react.activity"), B = Symbol.for("react.memo_cache_sentinel"), V = Symbol.iterator;
  function $(e) {
    return e === null || typeof e != "object" ? null : (e = V && e[V] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var F = Symbol.for("react.client.reference");
  function te(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === F ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case d:
        return "Fragment";
      case w:
        return "Profiler";
      case x:
        return "StrictMode";
      case O:
        return "Suspense";
      case j:
        return "SuspenseList";
      case Q:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case y:
          return "Portal";
        case T:
          return (e.displayName || "Context") + ".Provider";
        case C:
          return (e._context.displayName || "Context") + ".Consumer";
        case E:
          var n = e.render;
          return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case R:
          return n = e.displayName || null, n !== null ? n : te(e.type) || "Memo";
        case H:
          n = e._payload, e = e._init;
          try {
            return te(e(n));
          } catch {
          }
      }
    return null;
  }
  var W = Array.isArray, L = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ae = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, de = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Oe = [], D = -1;
  function J(e) {
    return { current: e };
  }
  function se(e) {
    0 > D || (e.current = Oe[D], Oe[D] = null, D--);
  }
  function le(e, n) {
    D++, Oe[D] = e.current, e.current = n;
  }
  var ue = J(null), De = J(null), X = J(null), ve = J(null);
  function ye(e, n) {
    switch (le(X, n), le(De, e), le(ue, null), n.nodeType) {
      case 9:
      case 11:
        e = (e = n.documentElement) && (e = e.namespaceURI) ? Eg(e) : 0;
        break;
      default:
        if (e = n.tagName, n = n.namespaceURI)
          n = Eg(n), e = wg(n, e);
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
    se(ue), le(ue, e);
  }
  function $e() {
    se(ue), se(De), se(X);
  }
  function ct(e) {
    e.memoizedState !== null && le(ve, e);
    var n = ue.current, a = wg(n, e.type);
    n !== a && (le(De, e), le(ue, a));
  }
  function je(e) {
    De.current === e && (se(ue), se(De)), ve.current === e && (se(ve), ks._currentValue = de);
  }
  var at = Object.prototype.hasOwnProperty, qn = t.unstable_scheduleCallback, kt = t.unstable_cancelCallback, tn = t.unstable_shouldYield, Ze = t.unstable_requestPaint, Xe = t.unstable_now, Ve = t.unstable_getCurrentPriorityLevel, We = t.unstable_ImmediatePriority, me = t.unstable_UserBlockingPriority, pe = t.unstable_NormalPriority, Ge = t.unstable_LowPriority, He = t.unstable_IdlePriority, it = t.log, P = t.unstable_setDisableYieldValue, oe = null, ie = null;
  function be(e) {
    if (typeof it == "function" && P(e), ie && typeof ie.setStrictMode == "function")
      try {
        ie.setStrictMode(oe, e);
      } catch {
      }
  }
  var Be = Math.clz32 ? Math.clz32 : mn, Re = Math.log, pt = Math.LN2;
  function mn(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Re(e) / pt | 0) | 0;
  }
  var Xt = 256, Qt = 4194304;
  function qe(e) {
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
  function st(e, n, a) {
    var o = e.pendingLanes;
    if (o === 0) return 0;
    var c = 0, b = e.suspendedLanes, N = e.pingedLanes;
    e = e.warmLanes;
    var k = o & 134217727;
    return k !== 0 ? (o = k & ~b, o !== 0 ? c = qe(o) : (N &= k, N !== 0 ? c = qe(N) : a || (a = k & ~e, a !== 0 && (c = qe(a))))) : (k = o & ~b, k !== 0 ? c = qe(k) : N !== 0 ? c = qe(N) : a || (a = o & ~e, a !== 0 && (c = qe(a)))), c === 0 ? 0 : n !== 0 && n !== c && (n & b) === 0 && (b = c & -c, a = n & -n, b >= a || b === 32 && (a & 4194048) !== 0) ? n : c;
  }
  function nn(e, n) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
  }
  function uo(e, n) {
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
  function Ba() {
    var e = Xt;
    return Xt <<= 1, (Xt & 4194048) === 0 && (Xt = 256), e;
  }
  function oh() {
    var e = Qt;
    return Qt <<= 1, (Qt & 62914560) === 0 && (Qt = 4194304), e;
  }
  function ku(e) {
    for (var n = [], a = 0; 31 > a; a++) n.push(e);
    return n;
  }
  function Ui(e, n) {
    e.pendingLanes |= n, n !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function k1(e, n, a, o, c, b) {
    var N = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var k = e.entanglements, M = e.expirationTimes, q = e.hiddenUpdates;
    for (a = N & ~a; 0 < a; ) {
      var K = 31 - Be(a), ne = 1 << K;
      k[K] = 0, M[K] = -1;
      var Z = q[K];
      if (Z !== null)
        for (q[K] = null, K = 0; K < Z.length; K++) {
          var G = Z[K];
          G !== null && (G.lane &= -536870913);
        }
      a &= ~ne;
    }
    o !== 0 && lh(e, o, 0), b !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= b & ~(N & ~n));
  }
  function lh(e, n, a) {
    e.pendingLanes |= n, e.suspendedLanes &= ~n;
    var o = 31 - Be(n);
    e.entangledLanes |= n, e.entanglements[o] = e.entanglements[o] | 1073741824 | a & 4194090;
  }
  function uh(e, n) {
    var a = e.entangledLanes |= n;
    for (e = e.entanglements; a; ) {
      var o = 31 - Be(a), c = 1 << o;
      c & n | e[o] & n && (e[o] |= n), a &= ~c;
    }
  }
  function ju(e) {
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
  function ch() {
    var e = ae.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Fg(e.type));
  }
  function j1(e, n) {
    var a = ae.p;
    try {
      return ae.p = e, n();
    } finally {
      ae.p = a;
    }
  }
  var kr = Math.random().toString(36).slice(2), Zt = "__reactFiber$" + kr, rn = "__reactProps$" + kr, Ua = "__reactContainer$" + kr, Du = "__reactEvents$" + kr, M1 = "__reactListeners$" + kr, D1 = "__reactHandles$" + kr, fh = "__reactResources$" + kr, Hi = "__reactMarker$" + kr;
  function Ru(e) {
    delete e[Zt], delete e[rn], delete e[Du], delete e[M1], delete e[D1];
  }
  function Ha(e) {
    var n = e[Zt];
    if (n) return n;
    for (var a = e.parentNode; a; ) {
      if (n = a[Ua] || a[Zt]) {
        if (a = n.alternate, n.child !== null || a !== null && a.child !== null)
          for (e = Tg(e); e !== null; ) {
            if (a = e[Zt]) return a;
            e = Tg(e);
          }
        return n;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function qa(e) {
    if (e = e[Zt] || e[Ua]) {
      var n = e.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return e;
    }
    return null;
  }
  function qi(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Fa(e) {
    var n = e[fh];
    return n || (n = e[fh] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function zt(e) {
    e[Hi] = !0;
  }
  var dh = /* @__PURE__ */ new Set(), hh = {};
  function la(e, n) {
    Za(e, n), Za(e + "Capture", n);
  }
  function Za(e, n) {
    for (hh[e] = n, e = 0; e < n.length; e++)
      dh.add(n[e]);
  }
  var R1 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), ph = {}, mh = {};
  function z1(e) {
    return at.call(mh, e) ? !0 : at.call(ph, e) ? !1 : R1.test(e) ? mh[e] = !0 : (ph[e] = !0, !1);
  }
  function co(e, n, a) {
    if (z1(n))
      if (a === null) e.removeAttribute(n);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(n);
            return;
          case "boolean":
            var o = n.toLowerCase().slice(0, 5);
            if (o !== "data-" && o !== "aria-") {
              e.removeAttribute(n);
              return;
            }
        }
        e.setAttribute(n, "" + a);
      }
  }
  function fo(e, n, a) {
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
  function or(e, n, a, o) {
    if (o === null) e.removeAttribute(a);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(n, a, "" + o);
    }
  }
  var zu, gh;
  function Ga(e) {
    if (zu === void 0)
      try {
        throw Error();
      } catch (a) {
        var n = a.stack.trim().match(/\n( *(at )?)/);
        zu = n && n[1] || "", gh = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + zu + e + gh;
  }
  var Lu = !1;
  function Iu(e, n) {
    if (!e || Lu) return "";
    Lu = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var ne = function() {
                throw Error();
              };
              if (Object.defineProperty(ne.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(ne, []);
                } catch (G) {
                  var Z = G;
                }
                Reflect.construct(e, [], ne);
              } else {
                try {
                  ne.call();
                } catch (G) {
                  Z = G;
                }
                e.call(ne.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (G) {
                Z = G;
              }
              (ne = e()) && typeof ne.catch == "function" && ne.catch(function() {
              });
            }
          } catch (G) {
            if (G && Z && typeof G.stack == "string")
              return [G.stack, Z.stack];
          }
          return [null, null];
        }
      };
      o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var c = Object.getOwnPropertyDescriptor(
        o.DetermineComponentFrameRoot,
        "name"
      );
      c && c.configurable && Object.defineProperty(
        o.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var b = o.DetermineComponentFrameRoot(), N = b[0], k = b[1];
      if (N && k) {
        var M = N.split(`
`), q = k.split(`
`);
        for (c = o = 0; o < M.length && !M[o].includes("DetermineComponentFrameRoot"); )
          o++;
        for (; c < q.length && !q[c].includes(
          "DetermineComponentFrameRoot"
        ); )
          c++;
        if (o === M.length || c === q.length)
          for (o = M.length - 1, c = q.length - 1; 1 <= o && 0 <= c && M[o] !== q[c]; )
            c--;
        for (; 1 <= o && 0 <= c; o--, c--)
          if (M[o] !== q[c]) {
            if (o !== 1 || c !== 1)
              do
                if (o--, c--, 0 > c || M[o] !== q[c]) {
                  var K = `
` + M[o].replace(" at new ", " at ");
                  return e.displayName && K.includes("<anonymous>") && (K = K.replace("<anonymous>", e.displayName)), K;
                }
              while (1 <= o && 0 <= c);
            break;
          }
      }
    } finally {
      Lu = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? Ga(a) : "";
  }
  function L1(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Ga(e.type);
      case 16:
        return Ga("Lazy");
      case 13:
        return Ga("Suspense");
      case 19:
        return Ga("SuspenseList");
      case 0:
      case 15:
        return Iu(e.type, !1);
      case 11:
        return Iu(e.type.render, !1);
      case 1:
        return Iu(e.type, !0);
      case 31:
        return Ga("Activity");
      default:
        return "";
    }
  }
  function vh(e) {
    try {
      var n = "";
      do
        n += L1(e), e = e.return;
      while (e);
      return n;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  function On(e) {
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
  function yh(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function I1(e) {
    var n = yh(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      n
    ), o = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var c = a.get, b = a.set;
      return Object.defineProperty(e, n, {
        configurable: !0,
        get: function() {
          return c.call(this);
        },
        set: function(N) {
          o = "" + N, b.call(this, N);
        }
      }), Object.defineProperty(e, n, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return o;
        },
        setValue: function(N) {
          o = "" + N;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[n];
        }
      };
    }
  }
  function ho(e) {
    e._valueTracker || (e._valueTracker = I1(e));
  }
  function bh(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var a = n.getValue(), o = "";
    return e && (o = yh(e) ? e.checked ? "true" : "false" : e.value), e = o, e !== a ? (n.setValue(e), !0) : !1;
  }
  function po(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var P1 = /[\n"\\]/g;
  function kn(e) {
    return e.replace(
      P1,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Pu(e, n, a, o, c, b, N, k) {
    e.name = "", N != null && typeof N != "function" && typeof N != "symbol" && typeof N != "boolean" ? e.type = N : e.removeAttribute("type"), n != null ? N === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + On(n)) : e.value !== "" + On(n) && (e.value = "" + On(n)) : N !== "submit" && N !== "reset" || e.removeAttribute("value"), n != null ? Bu(e, N, On(n)) : a != null ? Bu(e, N, On(a)) : o != null && e.removeAttribute("value"), c == null && b != null && (e.defaultChecked = !!b), c != null && (e.checked = c && typeof c != "function" && typeof c != "symbol"), k != null && typeof k != "function" && typeof k != "symbol" && typeof k != "boolean" ? e.name = "" + On(k) : e.removeAttribute("name");
  }
  function _h(e, n, a, o, c, b, N, k) {
    if (b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" && (e.type = b), n != null || a != null) {
      if (!(b !== "submit" && b !== "reset" || n != null))
        return;
      a = a != null ? "" + On(a) : "", n = n != null ? "" + On(n) : a, k || n === e.value || (e.value = n), e.defaultValue = n;
    }
    o = o ?? c, o = typeof o != "function" && typeof o != "symbol" && !!o, e.checked = k ? e.checked : !!o, e.defaultChecked = !!o, N != null && typeof N != "function" && typeof N != "symbol" && typeof N != "boolean" && (e.name = N);
  }
  function Bu(e, n, a) {
    n === "number" && po(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function Va(e, n, a, o) {
    if (e = e.options, n) {
      n = {};
      for (var c = 0; c < a.length; c++)
        n["$" + a[c]] = !0;
      for (a = 0; a < e.length; a++)
        c = n.hasOwnProperty("$" + e[a].value), e[a].selected !== c && (e[a].selected = c), c && o && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + On(a), n = null, c = 0; c < e.length; c++) {
        if (e[c].value === a) {
          e[c].selected = !0, o && (e[c].defaultSelected = !0);
          return;
        }
        n !== null || e[c].disabled || (n = e[c]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Sh(e, n, a) {
    if (n != null && (n = "" + On(n), n !== e.value && (e.value = n), a == null)) {
      e.defaultValue !== n && (e.defaultValue = n);
      return;
    }
    e.defaultValue = a != null ? "" + On(a) : "";
  }
  function xh(e, n, a, o) {
    if (n == null) {
      if (o != null) {
        if (a != null) throw Error(s(92));
        if (W(o)) {
          if (1 < o.length) throw Error(s(93));
          o = o[0];
        }
        a = o;
      }
      a == null && (a = ""), n = a;
    }
    a = On(n), e.defaultValue = a, o = e.textContent, o === a && o !== "" && o !== null && (e.value = o);
  }
  function Ya(e, n) {
    if (n) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var B1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Eh(e, n, a) {
    var o = n.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? o ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "" : o ? e.setProperty(n, a) : typeof a != "number" || a === 0 || B1.has(n) ? n === "float" ? e.cssFloat = a : e[n] = ("" + a).trim() : e[n] = a + "px";
  }
  function wh(e, n, a) {
    if (n != null && typeof n != "object")
      throw Error(s(62));
    if (e = e.style, a != null) {
      for (var o in a)
        !a.hasOwnProperty(o) || n != null && n.hasOwnProperty(o) || (o.indexOf("--") === 0 ? e.setProperty(o, "") : o === "float" ? e.cssFloat = "" : e[o] = "");
      for (var c in n)
        o = n[c], n.hasOwnProperty(c) && a[c] !== o && Eh(e, c, o);
    } else
      for (var b in n)
        n.hasOwnProperty(b) && Eh(e, b, n[b]);
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
  var U1 = /* @__PURE__ */ new Map([
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
  ]), H1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function mo(e) {
    return H1.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var Hu = null;
  function qu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var $a = null, Xa = null;
  function Ch(e) {
    var n = qa(e);
    if (n && (e = n.stateNode)) {
      var a = e[rn] || null;
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
              'input[name="' + kn(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < a.length; n++) {
              var o = a[n];
              if (o !== e && o.form === e.form) {
                var c = o[rn] || null;
                if (!c) throw Error(s(90));
                Pu(
                  o,
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
              o = a[n], o.form === e.form && bh(o);
          }
          break e;
        case "textarea":
          Sh(e, a.value, a.defaultValue);
          break e;
        case "select":
          n = a.value, n != null && Va(e, !!a.multiple, n, !1);
      }
    }
  }
  var Fu = !1;
  function Nh(e, n, a) {
    if (Fu) return e(n, a);
    Fu = !0;
    try {
      var o = e(n);
      return o;
    } finally {
      if (Fu = !1, ($a !== null || Xa !== null) && (el(), $a && (n = $a, e = Xa, Xa = $a = null, Ch(n), e)))
        for (n = 0; n < e.length; n++) Ch(e[n]);
    }
  }
  function Fi(e, n) {
    var a = e.stateNode;
    if (a === null) return null;
    var o = a[rn] || null;
    if (o === null) return null;
    a = o[n];
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
        (o = !o.disabled) || (e = e.type, o = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !o;
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
  var lr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Zu = !1;
  if (lr)
    try {
      var Zi = {};
      Object.defineProperty(Zi, "passive", {
        get: function() {
          Zu = !0;
        }
      }), window.addEventListener("test", Zi, Zi), window.removeEventListener("test", Zi, Zi);
    } catch {
      Zu = !1;
    }
  var jr = null, Gu = null, go = null;
  function Ah() {
    if (go) return go;
    var e, n = Gu, a = n.length, o, c = "value" in jr ? jr.value : jr.textContent, b = c.length;
    for (e = 0; e < a && n[e] === c[e]; e++) ;
    var N = a - e;
    for (o = 1; o <= N && n[a - o] === c[b - o]; o++) ;
    return go = c.slice(e, 1 < o ? 1 - o : void 0);
  }
  function vo(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function yo() {
    return !0;
  }
  function Th() {
    return !1;
  }
  function an(e) {
    function n(a, o, c, b, N) {
      this._reactName = a, this._targetInst = c, this.type = o, this.nativeEvent = b, this.target = N, this.currentTarget = null;
      for (var k in e)
        e.hasOwnProperty(k) && (a = e[k], this[k] = a ? a(b) : b[k]);
      return this.isDefaultPrevented = (b.defaultPrevented != null ? b.defaultPrevented : b.returnValue === !1) ? yo : Th, this.isPropagationStopped = Th, this;
    }
    return m(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = yo);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = yo);
      },
      persist: function() {
      },
      isPersistent: yo
    }), n;
  }
  var ua = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, bo = an(ua), Gi = m({}, ua, { view: 0, detail: 0 }), q1 = an(Gi), Vu, Yu, Vi, _o = m({}, Gi, {
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
    getModifierState: Xu,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Vi && (Vi && e.type === "mousemove" ? (Vu = e.screenX - Vi.screenX, Yu = e.screenY - Vi.screenY) : Yu = Vu = 0, Vi = e), Vu);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Yu;
    }
  }), Oh = an(_o), F1 = m({}, _o, { dataTransfer: 0 }), Z1 = an(F1), G1 = m({}, Gi, { relatedTarget: 0 }), $u = an(G1), V1 = m({}, ua, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Y1 = an(V1), $1 = m({}, ua, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), X1 = an($1), Q1 = m({}, ua, { data: 0 }), kh = an(Q1), J1 = {
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
  }, K1 = {
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
  }, W1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function eb(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = W1[e]) ? !!n[e] : !1;
  }
  function Xu() {
    return eb;
  }
  var tb = m({}, Gi, {
    key: function(e) {
      if (e.key) {
        var n = J1[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress" ? (e = vo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? K1[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Xu,
    charCode: function(e) {
      return e.type === "keypress" ? vo(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? vo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), nb = an(tb), rb = m({}, _o, {
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
  }), jh = an(rb), ab = m({}, Gi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Xu
  }), ib = an(ab), sb = m({}, ua, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ob = an(sb), lb = m({}, _o, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ub = an(lb), cb = m({}, ua, {
    newState: 0,
    oldState: 0
  }), fb = an(cb), db = [9, 13, 27, 32], Qu = lr && "CompositionEvent" in window, Yi = null;
  lr && "documentMode" in document && (Yi = document.documentMode);
  var hb = lr && "TextEvent" in window && !Yi, Mh = lr && (!Qu || Yi && 8 < Yi && 11 >= Yi), Dh = " ", Rh = !1;
  function zh(e, n) {
    switch (e) {
      case "keyup":
        return db.indexOf(n.keyCode) !== -1;
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
  function Lh(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Qa = !1;
  function pb(e, n) {
    switch (e) {
      case "compositionend":
        return Lh(n);
      case "keypress":
        return n.which !== 32 ? null : (Rh = !0, Dh);
      case "textInput":
        return e = n.data, e === Dh && Rh ? null : e;
      default:
        return null;
    }
  }
  function mb(e, n) {
    if (Qa)
      return e === "compositionend" || !Qu && zh(e, n) ? (e = Ah(), go = Gu = jr = null, Qa = !1, e) : null;
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
        return Mh && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var gb = {
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
  function Ih(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!gb[e.type] : n === "textarea";
  }
  function Ph(e, n, a, o) {
    $a ? Xa ? Xa.push(o) : Xa = [o] : $a = o, n = sl(n, "onChange"), 0 < n.length && (a = new bo(
      "onChange",
      "change",
      null,
      a,
      o
    ), e.push({ event: a, listeners: n }));
  }
  var $i = null, Xi = null;
  function vb(e) {
    yg(e, 0);
  }
  function So(e) {
    var n = qi(e);
    if (bh(n)) return e;
  }
  function Bh(e, n) {
    if (e === "change") return n;
  }
  var Uh = !1;
  if (lr) {
    var Ju;
    if (lr) {
      var Ku = "oninput" in document;
      if (!Ku) {
        var Hh = document.createElement("div");
        Hh.setAttribute("oninput", "return;"), Ku = typeof Hh.oninput == "function";
      }
      Ju = Ku;
    } else Ju = !1;
    Uh = Ju && (!document.documentMode || 9 < document.documentMode);
  }
  function qh() {
    $i && ($i.detachEvent("onpropertychange", Fh), Xi = $i = null);
  }
  function Fh(e) {
    if (e.propertyName === "value" && So(Xi)) {
      var n = [];
      Ph(
        n,
        Xi,
        e,
        qu(e)
      ), Nh(vb, n);
    }
  }
  function yb(e, n, a) {
    e === "focusin" ? (qh(), $i = n, Xi = a, $i.attachEvent("onpropertychange", Fh)) : e === "focusout" && qh();
  }
  function bb(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return So(Xi);
  }
  function _b(e, n) {
    if (e === "click") return So(n);
  }
  function Sb(e, n) {
    if (e === "input" || e === "change")
      return So(n);
  }
  function xb(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var gn = typeof Object.is == "function" ? Object.is : xb;
  function Qi(e, n) {
    if (gn(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null)
      return !1;
    var a = Object.keys(e), o = Object.keys(n);
    if (a.length !== o.length) return !1;
    for (o = 0; o < a.length; o++) {
      var c = a[o];
      if (!at.call(n, c) || !gn(e[c], n[c]))
        return !1;
    }
    return !0;
  }
  function Zh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Gh(e, n) {
    var a = Zh(e);
    e = 0;
    for (var o; a; ) {
      if (a.nodeType === 3) {
        if (o = e + a.textContent.length, e <= n && o >= n)
          return { node: a, offset: n - e };
        e = o;
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
      a = Zh(a);
    }
  }
  function Vh(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Vh(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Yh(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var n = po(e.document); n instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof n.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = n.contentWindow;
      else break;
      n = po(e.document);
    }
    return n;
  }
  function Wu(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  var Eb = lr && "documentMode" in document && 11 >= document.documentMode, Ja = null, ec = null, Ji = null, tc = !1;
  function $h(e, n, a) {
    var o = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    tc || Ja == null || Ja !== po(o) || (o = Ja, "selectionStart" in o && Wu(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = {
      anchorNode: o.anchorNode,
      anchorOffset: o.anchorOffset,
      focusNode: o.focusNode,
      focusOffset: o.focusOffset
    }), Ji && Qi(Ji, o) || (Ji = o, o = sl(ec, "onSelect"), 0 < o.length && (n = new bo(
      "onSelect",
      "select",
      null,
      n,
      a
    ), e.push({ event: n, listeners: o }), n.target = Ja)));
  }
  function ca(e, n) {
    var a = {};
    return a[e.toLowerCase()] = n.toLowerCase(), a["Webkit" + e] = "webkit" + n, a["Moz" + e] = "moz" + n, a;
  }
  var Ka = {
    animationend: ca("Animation", "AnimationEnd"),
    animationiteration: ca("Animation", "AnimationIteration"),
    animationstart: ca("Animation", "AnimationStart"),
    transitionrun: ca("Transition", "TransitionRun"),
    transitionstart: ca("Transition", "TransitionStart"),
    transitioncancel: ca("Transition", "TransitionCancel"),
    transitionend: ca("Transition", "TransitionEnd")
  }, nc = {}, Xh = {};
  lr && (Xh = document.createElement("div").style, "AnimationEvent" in window || (delete Ka.animationend.animation, delete Ka.animationiteration.animation, delete Ka.animationstart.animation), "TransitionEvent" in window || delete Ka.transitionend.transition);
  function fa(e) {
    if (nc[e]) return nc[e];
    if (!Ka[e]) return e;
    var n = Ka[e], a;
    for (a in n)
      if (n.hasOwnProperty(a) && a in Xh)
        return nc[e] = n[a];
    return e;
  }
  var Qh = fa("animationend"), Jh = fa("animationiteration"), Kh = fa("animationstart"), wb = fa("transitionrun"), Cb = fa("transitionstart"), Nb = fa("transitioncancel"), Wh = fa("transitionend"), ep = /* @__PURE__ */ new Map(), rc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  rc.push("scrollEnd");
  function Fn(e, n) {
    ep.set(e, n), la(n, [e]);
  }
  var tp = /* @__PURE__ */ new WeakMap();
  function jn(e, n) {
    if (typeof e == "object" && e !== null) {
      var a = tp.get(e);
      return a !== void 0 ? a : (n = {
        value: e,
        source: n,
        stack: vh(n)
      }, tp.set(e, n), n);
    }
    return {
      value: e,
      source: n,
      stack: vh(n)
    };
  }
  var Mn = [], Wa = 0, ac = 0;
  function xo() {
    for (var e = Wa, n = ac = Wa = 0; n < e; ) {
      var a = Mn[n];
      Mn[n++] = null;
      var o = Mn[n];
      Mn[n++] = null;
      var c = Mn[n];
      Mn[n++] = null;
      var b = Mn[n];
      if (Mn[n++] = null, o !== null && c !== null) {
        var N = o.pending;
        N === null ? c.next = c : (c.next = N.next, N.next = c), o.pending = c;
      }
      b !== 0 && np(a, c, b);
    }
  }
  function Eo(e, n, a, o) {
    Mn[Wa++] = e, Mn[Wa++] = n, Mn[Wa++] = a, Mn[Wa++] = o, ac |= o, e.lanes |= o, e = e.alternate, e !== null && (e.lanes |= o);
  }
  function ic(e, n, a, o) {
    return Eo(e, n, a, o), wo(e);
  }
  function ei(e, n) {
    return Eo(e, null, null, n), wo(e);
  }
  function np(e, n, a) {
    e.lanes |= a;
    var o = e.alternate;
    o !== null && (o.lanes |= a);
    for (var c = !1, b = e.return; b !== null; )
      b.childLanes |= a, o = b.alternate, o !== null && (o.childLanes |= a), b.tag === 22 && (e = b.stateNode, e === null || e._visibility & 1 || (c = !0)), e = b, b = b.return;
    return e.tag === 3 ? (b = e.stateNode, c && n !== null && (c = 31 - Be(a), e = b.hiddenUpdates, o = e[c], o === null ? e[c] = [n] : o.push(n), n.lane = a | 536870912), b) : null;
  }
  function wo(e) {
    if (50 < xs)
      throw xs = 0, df = null, Error(s(185));
    for (var n = e.return; n !== null; )
      e = n, n = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ti = {};
  function Ab(e, n, a, o) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function vn(e, n, a, o) {
    return new Ab(e, n, a, o);
  }
  function sc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ur(e, n) {
    var a = e.alternate;
    return a === null ? (a = vn(
      e.tag,
      n,
      e.key,
      e.mode
    ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = n, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, n = e.dependencies, a.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
  }
  function rp(e, n) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = n, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, n = a.dependencies, e.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), e;
  }
  function Co(e, n, a, o, c, b) {
    var N = 0;
    if (o = e, typeof e == "function") sc(e) && (N = 1);
    else if (typeof e == "string")
      N = O_(
        e,
        a,
        ue.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case Q:
          return e = vn(31, a, n, c), e.elementType = Q, e.lanes = b, e;
        case d:
          return da(a.children, c, b, n);
        case x:
          N = 8, c |= 24;
          break;
        case w:
          return e = vn(12, a, n, c | 2), e.elementType = w, e.lanes = b, e;
        case O:
          return e = vn(13, a, n, c), e.elementType = O, e.lanes = b, e;
        case j:
          return e = vn(19, a, n, c), e.elementType = j, e.lanes = b, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case A:
              case T:
                N = 10;
                break e;
              case C:
                N = 9;
                break e;
              case E:
                N = 11;
                break e;
              case R:
                N = 14;
                break e;
              case H:
                N = 16, o = null;
                break e;
            }
          N = 29, a = Error(
            s(130, e === null ? "null" : typeof e, "")
          ), o = null;
      }
    return n = vn(N, a, n, c), n.elementType = e, n.type = o, n.lanes = b, n;
  }
  function da(e, n, a, o) {
    return e = vn(7, e, o, n), e.lanes = a, e;
  }
  function oc(e, n, a) {
    return e = vn(6, e, null, n), e.lanes = a, e;
  }
  function lc(e, n, a) {
    return n = vn(
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
  var ni = [], ri = 0, No = null, Ao = 0, Dn = [], Rn = 0, ha = null, cr = 1, fr = "";
  function pa(e, n) {
    ni[ri++] = Ao, ni[ri++] = No, No = e, Ao = n;
  }
  function ap(e, n, a) {
    Dn[Rn++] = cr, Dn[Rn++] = fr, Dn[Rn++] = ha, ha = e;
    var o = cr;
    e = fr;
    var c = 32 - Be(o) - 1;
    o &= ~(1 << c), a += 1;
    var b = 32 - Be(n) + c;
    if (30 < b) {
      var N = c - c % 5;
      b = (o & (1 << N) - 1).toString(32), o >>= N, c -= N, cr = 1 << 32 - Be(n) + c | a << c | o, fr = b + e;
    } else
      cr = 1 << b | a << c | o, fr = e;
  }
  function uc(e) {
    e.return !== null && (pa(e, 1), ap(e, 1, 0));
  }
  function cc(e) {
    for (; e === No; )
      No = ni[--ri], ni[ri] = null, Ao = ni[--ri], ni[ri] = null;
    for (; e === ha; )
      ha = Dn[--Rn], Dn[Rn] = null, fr = Dn[--Rn], Dn[Rn] = null, cr = Dn[--Rn], Dn[Rn] = null;
  }
  var Jt = null, yt = null, Qe = !1, ma = null, Kn = !1, fc = Error(s(519));
  function ga(e) {
    var n = Error(s(418, ""));
    throw es(jn(n, e)), fc;
  }
  function ip(e) {
    var n = e.stateNode, a = e.type, o = e.memoizedProps;
    switch (n[Zt] = e, n[rn] = o, a) {
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
        for (a = 0; a < ws.length; a++)
          Ie(ws[a], n);
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
        Ie("invalid", n), _h(
          n,
          o.value,
          o.defaultValue,
          o.checked,
          o.defaultChecked,
          o.type,
          o.name,
          !0
        ), ho(n);
        break;
      case "select":
        Ie("invalid", n);
        break;
      case "textarea":
        Ie("invalid", n), xh(n, o.value, o.defaultValue, o.children), ho(n);
    }
    a = o.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || n.textContent === "" + a || o.suppressHydrationWarning === !0 || xg(n.textContent, a) ? (o.popover != null && (Ie("beforetoggle", n), Ie("toggle", n)), o.onScroll != null && Ie("scroll", n), o.onScrollEnd != null && Ie("scrollend", n), o.onClick != null && (n.onclick = ol), n = !0) : n = !1, n || ga(e);
  }
  function sp(e) {
    for (Jt = e.return; Jt; )
      switch (Jt.tag) {
        case 5:
        case 13:
          Kn = !1;
          return;
        case 27:
        case 3:
          Kn = !0;
          return;
        default:
          Jt = Jt.return;
      }
  }
  function Ki(e) {
    if (e !== Jt) return !1;
    if (!Qe) return sp(e), Qe = !0, !1;
    var n = e.tag, a;
    if ((a = n !== 3 && n !== 27) && ((a = n === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Tf(e.type, e.memoizedProps)), a = !a), a && yt && ga(e), sp(e), n === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8)
            if (a = e.data, a === "/$") {
              if (n === 0) {
                yt = Gn(e.nextSibling);
                break e;
              }
              n--;
            } else
              a !== "$" && a !== "$!" && a !== "$?" || n++;
          e = e.nextSibling;
        }
        yt = null;
      }
    } else
      n === 27 ? (n = yt, Yr(e.type) ? (e = Mf, Mf = null, yt = e) : yt = n) : yt = Jt ? Gn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Wi() {
    yt = Jt = null, Qe = !1;
  }
  function op() {
    var e = ma;
    return e !== null && (ln === null ? ln = e : ln.push.apply(
      ln,
      e
    ), ma = null), e;
  }
  function es(e) {
    ma === null ? ma = [e] : ma.push(e);
  }
  var dc = J(null), va = null, dr = null;
  function Mr(e, n, a) {
    le(dc, n._currentValue), n._currentValue = a;
  }
  function hr(e) {
    e._currentValue = dc.current, se(dc);
  }
  function hc(e, n, a) {
    for (; e !== null; ) {
      var o = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, o !== null && (o.childLanes |= n)) : o !== null && (o.childLanes & n) !== n && (o.childLanes |= n), e === a) break;
      e = e.return;
    }
  }
  function pc(e, n, a, o) {
    var c = e.child;
    for (c !== null && (c.return = e); c !== null; ) {
      var b = c.dependencies;
      if (b !== null) {
        var N = c.child;
        b = b.firstContext;
        e: for (; b !== null; ) {
          var k = b;
          b = c;
          for (var M = 0; M < n.length; M++)
            if (k.context === n[M]) {
              b.lanes |= a, k = b.alternate, k !== null && (k.lanes |= a), hc(
                b.return,
                a,
                e
              ), o || (N = null);
              break e;
            }
          b = k.next;
        }
      } else if (c.tag === 18) {
        if (N = c.return, N === null) throw Error(s(341));
        N.lanes |= a, b = N.alternate, b !== null && (b.lanes |= a), hc(N, a, e), N = null;
      } else N = c.child;
      if (N !== null) N.return = c;
      else
        for (N = c; N !== null; ) {
          if (N === e) {
            N = null;
            break;
          }
          if (c = N.sibling, c !== null) {
            c.return = N.return, N = c;
            break;
          }
          N = N.return;
        }
      c = N;
    }
  }
  function ts(e, n, a, o) {
    e = null;
    for (var c = n, b = !1; c !== null; ) {
      if (!b) {
        if ((c.flags & 524288) !== 0) b = !0;
        else if ((c.flags & 262144) !== 0) break;
      }
      if (c.tag === 10) {
        var N = c.alternate;
        if (N === null) throw Error(s(387));
        if (N = N.memoizedProps, N !== null) {
          var k = c.type;
          gn(c.pendingProps.value, N.value) || (e !== null ? e.push(k) : e = [k]);
        }
      } else if (c === ve.current) {
        if (N = c.alternate, N === null) throw Error(s(387));
        N.memoizedState.memoizedState !== c.memoizedState.memoizedState && (e !== null ? e.push(ks) : e = [ks]);
      }
      c = c.return;
    }
    e !== null && pc(
      n,
      e,
      a,
      o
    ), n.flags |= 262144;
  }
  function To(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!gn(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function ya(e) {
    va = e, dr = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Gt(e) {
    return lp(va, e);
  }
  function Oo(e, n) {
    return va === null && ya(e), lp(e, n);
  }
  function lp(e, n) {
    var a = n._currentValue;
    if (n = { context: n, memoizedValue: a, next: null }, dr === null) {
      if (e === null) throw Error(s(308));
      dr = n, e.dependencies = { lanes: 0, firstContext: n }, e.flags |= 524288;
    } else dr = dr.next = n;
    return a;
  }
  var Tb = typeof AbortController < "u" ? AbortController : function() {
    var e = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(a, o) {
        e.push(o);
      }
    };
    this.abort = function() {
      n.aborted = !0, e.forEach(function(a) {
        return a();
      });
    };
  }, Ob = t.unstable_scheduleCallback, kb = t.unstable_NormalPriority, jt = {
    $$typeof: T,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function mc() {
    return {
      controller: new Tb(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function ns(e) {
    e.refCount--, e.refCount === 0 && Ob(kb, function() {
      e.controller.abort();
    });
  }
  var rs = null, gc = 0, ai = 0, ii = null;
  function jb(e, n) {
    if (rs === null) {
      var a = rs = [];
      gc = 0, ai = bf(), ii = {
        status: "pending",
        value: void 0,
        then: function(o) {
          a.push(o);
        }
      };
    }
    return gc++, n.then(up, up), n;
  }
  function up() {
    if (--gc === 0 && rs !== null) {
      ii !== null && (ii.status = "fulfilled");
      var e = rs;
      rs = null, ai = 0, ii = null;
      for (var n = 0; n < e.length; n++) (0, e[n])();
    }
  }
  function Mb(e, n) {
    var a = [], o = {
      status: "pending",
      value: null,
      reason: null,
      then: function(c) {
        a.push(c);
      }
    };
    return e.then(
      function() {
        o.status = "fulfilled", o.value = n;
        for (var c = 0; c < a.length; c++) (0, a[c])(n);
      },
      function(c) {
        for (o.status = "rejected", o.reason = c, c = 0; c < a.length; c++)
          (0, a[c])(void 0);
      }
    ), o;
  }
  var cp = L.S;
  L.S = function(e, n) {
    typeof n == "object" && n !== null && typeof n.then == "function" && jb(e, n), cp !== null && cp(e, n);
  };
  var ba = J(null);
  function vc() {
    var e = ba.current;
    return e !== null ? e : ot.pooledCache;
  }
  function ko(e, n) {
    n === null ? le(ba, ba.current) : le(ba, n.pool);
  }
  function fp() {
    var e = vc();
    return e === null ? null : { parent: jt._currentValue, pool: e };
  }
  var as = Error(s(460)), dp = Error(s(474)), jo = Error(s(542)), yc = { then: function() {
  } };
  function hp(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Mo() {
  }
  function pp(e, n, a) {
    switch (a = e[a], a === void 0 ? e.push(n) : a !== n && (n.then(Mo, Mo), n = a), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw e = n.reason, gp(e), e;
      default:
        if (typeof n.status == "string") n.then(Mo, Mo);
        else {
          if (e = ot, e !== null && 100 < e.shellSuspendCounter)
            throw Error(s(482));
          e = n, e.status = "pending", e.then(
            function(o) {
              if (n.status === "pending") {
                var c = n;
                c.status = "fulfilled", c.value = o;
              }
            },
            function(o) {
              if (n.status === "pending") {
                var c = n;
                c.status = "rejected", c.reason = o;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw e = n.reason, gp(e), e;
        }
        throw is = n, as;
    }
  }
  var is = null;
  function mp() {
    if (is === null) throw Error(s(459));
    var e = is;
    return is = null, e;
  }
  function gp(e) {
    if (e === as || e === jo)
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
  function Rr(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function zr(e, n, a) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (o = o.shared, (Je & 2) !== 0) {
      var c = o.pending;
      return c === null ? n.next = n : (n.next = c.next, c.next = n), o.pending = n, n = wo(e), np(e, null, a), n;
    }
    return Eo(e, o, n, a), wo(e);
  }
  function ss(e, n, a) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (a & 4194048) !== 0)) {
      var o = n.lanes;
      o &= e.pendingLanes, a |= o, n.lanes = a, uh(e, a);
    }
  }
  function Sc(e, n) {
    var a = e.updateQueue, o = e.alternate;
    if (o !== null && (o = o.updateQueue, a === o)) {
      var c = null, b = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var N = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          b === null ? c = b = N : b = b.next = N, a = a.next;
        } while (a !== null);
        b === null ? c = b = n : b = b.next = n;
      } else c = b = n;
      a = {
        baseState: o.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: b,
        shared: o.shared,
        callbacks: o.callbacks
      }, e.updateQueue = a;
      return;
    }
    e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = n : e.next = n, a.lastBaseUpdate = n;
  }
  var xc = !1;
  function os() {
    if (xc) {
      var e = ii;
      if (e !== null) throw e;
    }
  }
  function ls(e, n, a, o) {
    xc = !1;
    var c = e.updateQueue;
    Dr = !1;
    var b = c.firstBaseUpdate, N = c.lastBaseUpdate, k = c.shared.pending;
    if (k !== null) {
      c.shared.pending = null;
      var M = k, q = M.next;
      M.next = null, N === null ? b = q : N.next = q, N = M;
      var K = e.alternate;
      K !== null && (K = K.updateQueue, k = K.lastBaseUpdate, k !== N && (k === null ? K.firstBaseUpdate = q : k.next = q, K.lastBaseUpdate = M));
    }
    if (b !== null) {
      var ne = c.baseState;
      N = 0, K = q = M = null, k = b;
      do {
        var Z = k.lane & -536870913, G = Z !== k.lane;
        if (G ? (Fe & Z) === Z : (o & Z) === Z) {
          Z !== 0 && Z === ai && (xc = !0), K !== null && (K = K.next = {
            lane: 0,
            tag: k.tag,
            payload: k.payload,
            callback: null,
            next: null
          });
          e: {
            var we = e, Se = k;
            Z = n;
            var nt = a;
            switch (Se.tag) {
              case 1:
                if (we = Se.payload, typeof we == "function") {
                  ne = we.call(nt, ne, Z);
                  break e;
                }
                ne = we;
                break e;
              case 3:
                we.flags = we.flags & -65537 | 128;
              case 0:
                if (we = Se.payload, Z = typeof we == "function" ? we.call(nt, ne, Z) : we, Z == null) break e;
                ne = m({}, ne, Z);
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
          }, K === null ? (q = K = G, M = ne) : K = K.next = G, N |= Z;
        if (k = k.next, k === null) {
          if (k = c.shared.pending, k === null)
            break;
          G = k, k = G.next, G.next = null, c.lastBaseUpdate = G, c.shared.pending = null;
        }
      } while (!0);
      K === null && (M = ne), c.baseState = M, c.firstBaseUpdate = q, c.lastBaseUpdate = K, b === null && (c.shared.lanes = 0), Fr |= N, e.lanes = N, e.memoizedState = ne;
    }
  }
  function vp(e, n) {
    if (typeof e != "function")
      throw Error(s(191, e));
    e.call(n);
  }
  function yp(e, n) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        vp(a[e], n);
  }
  var si = J(null), Do = J(0);
  function bp(e, n) {
    e = _r, le(Do, e), le(si, n), _r = e | n.baseLanes;
  }
  function Ec() {
    le(Do, _r), le(si, si.current);
  }
  function wc() {
    _r = Do.current, se(si), se(Do);
  }
  var Lr = 0, Me = null, et = null, Ct = null, Ro = !1, oi = !1, _a = !1, zo = 0, us = 0, li = null, Db = 0;
  function xt() {
    throw Error(s(321));
  }
  function Cc(e, n) {
    if (n === null) return !1;
    for (var a = 0; a < n.length && a < e.length; a++)
      if (!gn(e[a], n[a])) return !1;
    return !0;
  }
  function Nc(e, n, a, o, c, b) {
    return Lr = b, Me = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, L.H = e === null || e.memoizedState === null ? nm : rm, _a = !1, b = a(o, c), _a = !1, oi && (b = Sp(
      n,
      a,
      o,
      c
    )), _p(e), b;
  }
  function _p(e) {
    L.H = Ho;
    var n = et !== null && et.next !== null;
    if (Lr = 0, Ct = et = Me = null, Ro = !1, us = 0, li = null, n) throw Error(s(300));
    e === null || Lt || (e = e.dependencies, e !== null && To(e) && (Lt = !0));
  }
  function Sp(e, n, a, o) {
    Me = e;
    var c = 0;
    do {
      if (oi && (li = null), us = 0, oi = !1, 25 <= c) throw Error(s(301));
      if (c += 1, Ct = et = null, e.updateQueue != null) {
        var b = e.updateQueue;
        b.lastEffect = null, b.events = null, b.stores = null, b.memoCache != null && (b.memoCache.index = 0);
      }
      L.H = Ub, b = n(a, o);
    } while (oi);
    return b;
  }
  function Rb() {
    var e = L.H, n = e.useState()[0];
    return n = typeof n.then == "function" ? cs(n) : n, e = e.useState()[0], (et !== null ? et.memoizedState : null) !== e && (Me.flags |= 1024), n;
  }
  function Ac() {
    var e = zo !== 0;
    return zo = 0, e;
  }
  function Tc(e, n, a) {
    n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~a;
  }
  function Oc(e) {
    if (Ro) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        n !== null && (n.pending = null), e = e.next;
      }
      Ro = !1;
    }
    Lr = 0, Ct = et = Me = null, oi = !1, us = zo = 0, li = null;
  }
  function sn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ct === null ? Me.memoizedState = Ct = e : Ct = Ct.next = e, Ct;
  }
  function Nt() {
    if (et === null) {
      var e = Me.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = et.next;
    var n = Ct === null ? Me.memoizedState : Ct.next;
    if (n !== null)
      Ct = n, et = e;
    else {
      if (e === null)
        throw Me.alternate === null ? Error(s(467)) : Error(s(310));
      et = e, e = {
        memoizedState: et.memoizedState,
        baseState: et.baseState,
        baseQueue: et.baseQueue,
        queue: et.queue,
        next: null
      }, Ct === null ? Me.memoizedState = Ct = e : Ct = Ct.next = e;
    }
    return Ct;
  }
  function kc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function cs(e) {
    var n = us;
    return us += 1, li === null && (li = []), e = pp(li, e, n), n = Me, (Ct === null ? n.memoizedState : Ct.next) === null && (n = n.alternate, L.H = n === null || n.memoizedState === null ? nm : rm), e;
  }
  function Lo(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return cs(e);
      if (e.$$typeof === T) return Gt(e);
    }
    throw Error(s(438, String(e)));
  }
  function jc(e) {
    var n = null, a = Me.updateQueue;
    if (a !== null && (n = a.memoCache), n == null) {
      var o = Me.alternate;
      o !== null && (o = o.updateQueue, o !== null && (o = o.memoCache, o != null && (n = {
        data: o.data.map(function(c) {
          return c.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), a === null && (a = kc(), Me.updateQueue = a), a.memoCache = n, a = n.data[n.index], a === void 0)
      for (a = n.data[n.index] = Array(e), o = 0; o < e; o++)
        a[o] = B;
    return n.index++, a;
  }
  function pr(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Io(e) {
    var n = Nt();
    return Mc(n, et, e);
  }
  function Mc(e, n, a) {
    var o = e.queue;
    if (o === null) throw Error(s(311));
    o.lastRenderedReducer = a;
    var c = e.baseQueue, b = o.pending;
    if (b !== null) {
      if (c !== null) {
        var N = c.next;
        c.next = b.next, b.next = N;
      }
      n.baseQueue = c = b, o.pending = null;
    }
    if (b = e.baseState, c === null) e.memoizedState = b;
    else {
      n = c.next;
      var k = N = null, M = null, q = n, K = !1;
      do {
        var ne = q.lane & -536870913;
        if (ne !== q.lane ? (Fe & ne) === ne : (Lr & ne) === ne) {
          var Z = q.revertLane;
          if (Z === 0)
            M !== null && (M = M.next = {
              lane: 0,
              revertLane: 0,
              action: q.action,
              hasEagerState: q.hasEagerState,
              eagerState: q.eagerState,
              next: null
            }), ne === ai && (K = !0);
          else if ((Lr & Z) === Z) {
            q = q.next, Z === ai && (K = !0);
            continue;
          } else
            ne = {
              lane: 0,
              revertLane: q.revertLane,
              action: q.action,
              hasEagerState: q.hasEagerState,
              eagerState: q.eagerState,
              next: null
            }, M === null ? (k = M = ne, N = b) : M = M.next = ne, Me.lanes |= Z, Fr |= Z;
          ne = q.action, _a && a(b, ne), b = q.hasEagerState ? q.eagerState : a(b, ne);
        } else
          Z = {
            lane: ne,
            revertLane: q.revertLane,
            action: q.action,
            hasEagerState: q.hasEagerState,
            eagerState: q.eagerState,
            next: null
          }, M === null ? (k = M = Z, N = b) : M = M.next = Z, Me.lanes |= ne, Fr |= ne;
        q = q.next;
      } while (q !== null && q !== n);
      if (M === null ? N = b : M.next = k, !gn(b, e.memoizedState) && (Lt = !0, K && (a = ii, a !== null)))
        throw a;
      e.memoizedState = b, e.baseState = N, e.baseQueue = M, o.lastRenderedState = b;
    }
    return c === null && (o.lanes = 0), [e.memoizedState, o.dispatch];
  }
  function Dc(e) {
    var n = Nt(), a = n.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = e;
    var o = a.dispatch, c = a.pending, b = n.memoizedState;
    if (c !== null) {
      a.pending = null;
      var N = c = c.next;
      do
        b = e(b, N.action), N = N.next;
      while (N !== c);
      gn(b, n.memoizedState) || (Lt = !0), n.memoizedState = b, n.baseQueue === null && (n.baseState = b), a.lastRenderedState = b;
    }
    return [b, o];
  }
  function xp(e, n, a) {
    var o = Me, c = Nt(), b = Qe;
    if (b) {
      if (a === void 0) throw Error(s(407));
      a = a();
    } else a = n();
    var N = !gn(
      (et || c).memoizedState,
      a
    );
    N && (c.memoizedState = a, Lt = !0), c = c.queue;
    var k = Cp.bind(null, o, c, e);
    if (fs(2048, 8, k, [e]), c.getSnapshot !== n || N || Ct !== null && Ct.memoizedState.tag & 1) {
      if (o.flags |= 2048, ui(
        9,
        Po(),
        wp.bind(
          null,
          o,
          c,
          a,
          n
        ),
        null
      ), ot === null) throw Error(s(349));
      b || (Lr & 124) !== 0 || Ep(o, n, a);
    }
    return a;
  }
  function Ep(e, n, a) {
    e.flags |= 16384, e = { getSnapshot: n, value: a }, n = Me.updateQueue, n === null ? (n = kc(), Me.updateQueue = n, n.stores = [e]) : (a = n.stores, a === null ? n.stores = [e] : a.push(e));
  }
  function wp(e, n, a, o) {
    n.value = a, n.getSnapshot = o, Np(n) && Ap(e);
  }
  function Cp(e, n, a) {
    return a(function() {
      Np(n) && Ap(e);
    });
  }
  function Np(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var a = n();
      return !gn(e, a);
    } catch {
      return !0;
    }
  }
  function Ap(e) {
    var n = ei(e, 2);
    n !== null && xn(n, e, 2);
  }
  function Rc(e) {
    var n = sn();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), _a) {
        be(!0);
        try {
          a();
        } finally {
          be(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = e, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: pr,
      lastRenderedState: e
    }, n;
  }
  function Tp(e, n, a, o) {
    return e.baseState = a, Mc(
      e,
      et,
      typeof o == "function" ? o : pr
    );
  }
  function zb(e, n, a, o, c) {
    if (Uo(e)) throw Error(s(485));
    if (e = n.action, e !== null) {
      var b = {
        payload: c,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(N) {
          b.listeners.push(N);
        }
      };
      L.T !== null ? a(!0) : b.isTransition = !1, o(b), a = n.pending, a === null ? (b.next = n.pending = b, Op(n, b)) : (b.next = a.next, n.pending = a.next = b);
    }
  }
  function Op(e, n) {
    var a = n.action, o = n.payload, c = e.state;
    if (n.isTransition) {
      var b = L.T, N = {};
      L.T = N;
      try {
        var k = a(c, o), M = L.S;
        M !== null && M(N, k), kp(e, n, k);
      } catch (q) {
        zc(e, n, q);
      } finally {
        L.T = b;
      }
    } else
      try {
        b = a(c, o), kp(e, n, b);
      } catch (q) {
        zc(e, n, q);
      }
  }
  function kp(e, n, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(o) {
        jp(e, n, o);
      },
      function(o) {
        return zc(e, n, o);
      }
    ) : jp(e, n, a);
  }
  function jp(e, n, a) {
    n.status = "fulfilled", n.value = a, Mp(n), e.state = a, n = e.pending, n !== null && (a = n.next, a === n ? e.pending = null : (a = a.next, n.next = a, Op(e, a)));
  }
  function zc(e, n, a) {
    var o = e.pending;
    if (e.pending = null, o !== null) {
      o = o.next;
      do
        n.status = "rejected", n.reason = a, Mp(n), n = n.next;
      while (n !== o);
    }
    e.action = null;
  }
  function Mp(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++) (0, e[n])();
  }
  function Dp(e, n) {
    return n;
  }
  function Rp(e, n) {
    if (Qe) {
      var a = ot.formState;
      if (a !== null) {
        e: {
          var o = Me;
          if (Qe) {
            if (yt) {
              t: {
                for (var c = yt, b = Kn; c.nodeType !== 8; ) {
                  if (!b) {
                    c = null;
                    break t;
                  }
                  if (c = Gn(
                    c.nextSibling
                  ), c === null) {
                    c = null;
                    break t;
                  }
                }
                b = c.data, c = b === "F!" || b === "F" ? c : null;
              }
              if (c) {
                yt = Gn(
                  c.nextSibling
                ), o = c.data === "F!";
                break e;
              }
            }
            ga(o);
          }
          o = !1;
        }
        o && (n = a[0]);
      }
    }
    return a = sn(), a.memoizedState = a.baseState = n, o = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Dp,
      lastRenderedState: n
    }, a.queue = o, a = Wp.bind(
      null,
      Me,
      o
    ), o.dispatch = a, o = Rc(!1), b = Uc.bind(
      null,
      Me,
      !1,
      o.queue
    ), o = sn(), c = {
      state: n,
      dispatch: null,
      action: e,
      pending: null
    }, o.queue = c, a = zb.bind(
      null,
      Me,
      c,
      b,
      a
    ), c.dispatch = a, o.memoizedState = e, [n, a, !1];
  }
  function zp(e) {
    var n = Nt();
    return Lp(n, et, e);
  }
  function Lp(e, n, a) {
    if (n = Mc(
      e,
      n,
      Dp
    )[0], e = Io(pr)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var o = cs(n);
      } catch (N) {
        throw N === as ? jo : N;
      }
    else o = n;
    n = Nt();
    var c = n.queue, b = c.dispatch;
    return a !== n.memoizedState && (Me.flags |= 2048, ui(
      9,
      Po(),
      Lb.bind(null, c, a),
      null
    )), [o, b, e];
  }
  function Lb(e, n) {
    e.action = n;
  }
  function Ip(e) {
    var n = Nt(), a = et;
    if (a !== null)
      return Lp(n, a, e);
    Nt(), n = n.memoizedState, a = Nt();
    var o = a.queue.dispatch;
    return a.memoizedState = e, [n, o, !1];
  }
  function ui(e, n, a, o) {
    return e = { tag: e, create: a, deps: o, inst: n, next: null }, n = Me.updateQueue, n === null && (n = kc(), Me.updateQueue = n), a = n.lastEffect, a === null ? n.lastEffect = e.next = e : (o = a.next, a.next = e, e.next = o, n.lastEffect = e), e;
  }
  function Po() {
    return { destroy: void 0, resource: void 0 };
  }
  function Pp() {
    return Nt().memoizedState;
  }
  function Bo(e, n, a, o) {
    var c = sn();
    o = o === void 0 ? null : o, Me.flags |= e, c.memoizedState = ui(
      1 | n,
      Po(),
      a,
      o
    );
  }
  function fs(e, n, a, o) {
    var c = Nt();
    o = o === void 0 ? null : o;
    var b = c.memoizedState.inst;
    et !== null && o !== null && Cc(o, et.memoizedState.deps) ? c.memoizedState = ui(n, b, a, o) : (Me.flags |= e, c.memoizedState = ui(
      1 | n,
      b,
      a,
      o
    ));
  }
  function Bp(e, n) {
    Bo(8390656, 8, e, n);
  }
  function Up(e, n) {
    fs(2048, 8, e, n);
  }
  function Hp(e, n) {
    return fs(4, 2, e, n);
  }
  function qp(e, n) {
    return fs(4, 4, e, n);
  }
  function Fp(e, n) {
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
  function Zp(e, n, a) {
    a = a != null ? a.concat([e]) : null, fs(4, 4, Fp.bind(null, n, e), a);
  }
  function Lc() {
  }
  function Gp(e, n) {
    var a = Nt();
    n = n === void 0 ? null : n;
    var o = a.memoizedState;
    return n !== null && Cc(n, o[1]) ? o[0] : (a.memoizedState = [e, n], e);
  }
  function Vp(e, n) {
    var a = Nt();
    n = n === void 0 ? null : n;
    var o = a.memoizedState;
    if (n !== null && Cc(n, o[1]))
      return o[0];
    if (o = e(), _a) {
      be(!0);
      try {
        e();
      } finally {
        be(!1);
      }
    }
    return a.memoizedState = [o, n], o;
  }
  function Ic(e, n, a) {
    return a === void 0 || (Lr & 1073741824) !== 0 ? e.memoizedState = n : (e.memoizedState = a, e = Xm(), Me.lanes |= e, Fr |= e, a);
  }
  function Yp(e, n, a, o) {
    return gn(a, n) ? a : si.current !== null ? (e = Ic(e, a, o), gn(e, n) || (Lt = !0), e) : (Lr & 42) === 0 ? (Lt = !0, e.memoizedState = a) : (e = Xm(), Me.lanes |= e, Fr |= e, n);
  }
  function $p(e, n, a, o, c) {
    var b = ae.p;
    ae.p = b !== 0 && 8 > b ? b : 8;
    var N = L.T, k = {};
    L.T = k, Uc(e, !1, n, a);
    try {
      var M = c(), q = L.S;
      if (q !== null && q(k, M), M !== null && typeof M == "object" && typeof M.then == "function") {
        var K = Mb(
          M,
          o
        );
        ds(
          e,
          n,
          K,
          Sn(e)
        );
      } else
        ds(
          e,
          n,
          o,
          Sn(e)
        );
    } catch (ne) {
      ds(
        e,
        n,
        { then: function() {
        }, status: "rejected", reason: ne },
        Sn()
      );
    } finally {
      ae.p = b, L.T = N;
    }
  }
  function Ib() {
  }
  function Pc(e, n, a, o) {
    if (e.tag !== 5) throw Error(s(476));
    var c = Xp(e).queue;
    $p(
      e,
      c,
      n,
      de,
      a === null ? Ib : function() {
        return Qp(e), a(o);
      }
    );
  }
  function Xp(e) {
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
        lastRenderedReducer: pr,
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
        lastRenderedReducer: pr,
        lastRenderedState: a
      },
      next: null
    }, e.memoizedState = n, e = e.alternate, e !== null && (e.memoizedState = n), n;
  }
  function Qp(e) {
    var n = Xp(e).next.queue;
    ds(e, n, {}, Sn());
  }
  function Bc() {
    return Gt(ks);
  }
  function Jp() {
    return Nt().memoizedState;
  }
  function Kp() {
    return Nt().memoizedState;
  }
  function Pb(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var a = Sn();
          e = Rr(a);
          var o = zr(n, e, a);
          o !== null && (xn(o, n, a), ss(o, n, a)), n = { cache: mc() }, e.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function Bb(e, n, a) {
    var o = Sn();
    a = {
      lane: o,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Uo(e) ? em(n, a) : (a = ic(e, n, a, o), a !== null && (xn(a, e, o), tm(a, n, o)));
  }
  function Wp(e, n, a) {
    var o = Sn();
    ds(e, n, a, o);
  }
  function ds(e, n, a, o) {
    var c = {
      lane: o,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Uo(e)) em(n, c);
    else {
      var b = e.alternate;
      if (e.lanes === 0 && (b === null || b.lanes === 0) && (b = n.lastRenderedReducer, b !== null))
        try {
          var N = n.lastRenderedState, k = b(N, a);
          if (c.hasEagerState = !0, c.eagerState = k, gn(k, N))
            return Eo(e, n, c, 0), ot === null && xo(), !1;
        } catch {
        } finally {
        }
      if (a = ic(e, n, c, o), a !== null)
        return xn(a, e, o), tm(a, n, o), !0;
    }
    return !1;
  }
  function Uc(e, n, a, o) {
    if (o = {
      lane: 2,
      revertLane: bf(),
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Uo(e)) {
      if (n) throw Error(s(479));
    } else
      n = ic(
        e,
        a,
        o,
        2
      ), n !== null && xn(n, e, 2);
  }
  function Uo(e) {
    var n = e.alternate;
    return e === Me || n !== null && n === Me;
  }
  function em(e, n) {
    oi = Ro = !0;
    var a = e.pending;
    a === null ? n.next = n : (n.next = a.next, a.next = n), e.pending = n;
  }
  function tm(e, n, a) {
    if ((a & 4194048) !== 0) {
      var o = n.lanes;
      o &= e.pendingLanes, a |= o, n.lanes = a, uh(e, a);
    }
  }
  var Ho = {
    readContext: Gt,
    use: Lo,
    useCallback: xt,
    useContext: xt,
    useEffect: xt,
    useImperativeHandle: xt,
    useLayoutEffect: xt,
    useInsertionEffect: xt,
    useMemo: xt,
    useReducer: xt,
    useRef: xt,
    useState: xt,
    useDebugValue: xt,
    useDeferredValue: xt,
    useTransition: xt,
    useSyncExternalStore: xt,
    useId: xt,
    useHostTransitionStatus: xt,
    useFormState: xt,
    useActionState: xt,
    useOptimistic: xt,
    useMemoCache: xt,
    useCacheRefresh: xt
  }, nm = {
    readContext: Gt,
    use: Lo,
    useCallback: function(e, n) {
      return sn().memoizedState = [
        e,
        n === void 0 ? null : n
      ], e;
    },
    useContext: Gt,
    useEffect: Bp,
    useImperativeHandle: function(e, n, a) {
      a = a != null ? a.concat([e]) : null, Bo(
        4194308,
        4,
        Fp.bind(null, n, e),
        a
      );
    },
    useLayoutEffect: function(e, n) {
      return Bo(4194308, 4, e, n);
    },
    useInsertionEffect: function(e, n) {
      Bo(4, 2, e, n);
    },
    useMemo: function(e, n) {
      var a = sn();
      n = n === void 0 ? null : n;
      var o = e();
      if (_a) {
        be(!0);
        try {
          e();
        } finally {
          be(!1);
        }
      }
      return a.memoizedState = [o, n], o;
    },
    useReducer: function(e, n, a) {
      var o = sn();
      if (a !== void 0) {
        var c = a(n);
        if (_a) {
          be(!0);
          try {
            a(n);
          } finally {
            be(!1);
          }
        }
      } else c = n;
      return o.memoizedState = o.baseState = c, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: c
      }, o.queue = e, e = e.dispatch = Bb.bind(
        null,
        Me,
        e
      ), [o.memoizedState, e];
    },
    useRef: function(e) {
      var n = sn();
      return e = { current: e }, n.memoizedState = e;
    },
    useState: function(e) {
      e = Rc(e);
      var n = e.queue, a = Wp.bind(null, Me, n);
      return n.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: Lc,
    useDeferredValue: function(e, n) {
      var a = sn();
      return Ic(a, e, n);
    },
    useTransition: function() {
      var e = Rc(!1);
      return e = $p.bind(
        null,
        Me,
        e.queue,
        !0,
        !1
      ), sn().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, n, a) {
      var o = Me, c = sn();
      if (Qe) {
        if (a === void 0)
          throw Error(s(407));
        a = a();
      } else {
        if (a = n(), ot === null)
          throw Error(s(349));
        (Fe & 124) !== 0 || Ep(o, n, a);
      }
      c.memoizedState = a;
      var b = { value: a, getSnapshot: n };
      return c.queue = b, Bp(Cp.bind(null, o, b, e), [
        e
      ]), o.flags |= 2048, ui(
        9,
        Po(),
        wp.bind(
          null,
          o,
          b,
          a,
          n
        ),
        null
      ), a;
    },
    useId: function() {
      var e = sn(), n = ot.identifierPrefix;
      if (Qe) {
        var a = fr, o = cr;
        a = (o & ~(1 << 32 - Be(o) - 1)).toString(32) + a, n = "«" + n + "R" + a, a = zo++, 0 < a && (n += "H" + a.toString(32)), n += "»";
      } else
        a = Db++, n = "«" + n + "r" + a.toString(32) + "»";
      return e.memoizedState = n;
    },
    useHostTransitionStatus: Bc,
    useFormState: Rp,
    useActionState: Rp,
    useOptimistic: function(e) {
      var n = sn();
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
        Me,
        !0,
        a
      ), a.dispatch = n, [e, n];
    },
    useMemoCache: jc,
    useCacheRefresh: function() {
      return sn().memoizedState = Pb.bind(
        null,
        Me
      );
    }
  }, rm = {
    readContext: Gt,
    use: Lo,
    useCallback: Gp,
    useContext: Gt,
    useEffect: Up,
    useImperativeHandle: Zp,
    useInsertionEffect: Hp,
    useLayoutEffect: qp,
    useMemo: Vp,
    useReducer: Io,
    useRef: Pp,
    useState: function() {
      return Io(pr);
    },
    useDebugValue: Lc,
    useDeferredValue: function(e, n) {
      var a = Nt();
      return Yp(
        a,
        et.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = Io(pr)[0], n = Nt().memoizedState;
      return [
        typeof e == "boolean" ? e : cs(e),
        n
      ];
    },
    useSyncExternalStore: xp,
    useId: Jp,
    useHostTransitionStatus: Bc,
    useFormState: zp,
    useActionState: zp,
    useOptimistic: function(e, n) {
      var a = Nt();
      return Tp(a, et, e, n);
    },
    useMemoCache: jc,
    useCacheRefresh: Kp
  }, Ub = {
    readContext: Gt,
    use: Lo,
    useCallback: Gp,
    useContext: Gt,
    useEffect: Up,
    useImperativeHandle: Zp,
    useInsertionEffect: Hp,
    useLayoutEffect: qp,
    useMemo: Vp,
    useReducer: Dc,
    useRef: Pp,
    useState: function() {
      return Dc(pr);
    },
    useDebugValue: Lc,
    useDeferredValue: function(e, n) {
      var a = Nt();
      return et === null ? Ic(a, e, n) : Yp(
        a,
        et.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = Dc(pr)[0], n = Nt().memoizedState;
      return [
        typeof e == "boolean" ? e : cs(e),
        n
      ];
    },
    useSyncExternalStore: xp,
    useId: Jp,
    useHostTransitionStatus: Bc,
    useFormState: Ip,
    useActionState: Ip,
    useOptimistic: function(e, n) {
      var a = Nt();
      return et !== null ? Tp(a, et, e, n) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: jc,
    useCacheRefresh: Kp
  }, ci = null, hs = 0;
  function qo(e) {
    var n = hs;
    return hs += 1, ci === null && (ci = []), pp(ci, e, n);
  }
  function ps(e, n) {
    n = n.props.ref, e.ref = n !== void 0 ? n : null;
  }
  function Fo(e, n) {
    throw n.$$typeof === S ? Error(s(525)) : (e = Object.prototype.toString.call(n), Error(
      s(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e
      )
    ));
  }
  function am(e) {
    var n = e._init;
    return n(e._payload);
  }
  function im(e) {
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
    function o(I) {
      for (var z = /* @__PURE__ */ new Map(); I !== null; )
        I.key !== null ? z.set(I.key, I) : z.set(I.index, I), I = I.sibling;
      return z;
    }
    function c(I, z) {
      return I = ur(I, z), I.index = 0, I.sibling = null, I;
    }
    function b(I, z, U) {
      return I.index = U, e ? (U = I.alternate, U !== null ? (U = U.index, U < z ? (I.flags |= 67108866, z) : U) : (I.flags |= 67108866, z)) : (I.flags |= 1048576, z);
    }
    function N(I) {
      return e && I.alternate === null && (I.flags |= 67108866), I;
    }
    function k(I, z, U, ee) {
      return z === null || z.tag !== 6 ? (z = oc(U, I.mode, ee), z.return = I, z) : (z = c(z, U), z.return = I, z);
    }
    function M(I, z, U, ee) {
      var he = U.type;
      return he === d ? K(
        I,
        z,
        U.props.children,
        ee,
        U.key
      ) : z !== null && (z.elementType === he || typeof he == "object" && he !== null && he.$$typeof === H && am(he) === z.type) ? (z = c(z, U.props), ps(z, U), z.return = I, z) : (z = Co(
        U.type,
        U.key,
        U.props,
        null,
        I.mode,
        ee
      ), ps(z, U), z.return = I, z);
    }
    function q(I, z, U, ee) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== U.containerInfo || z.stateNode.implementation !== U.implementation ? (z = lc(U, I.mode, ee), z.return = I, z) : (z = c(z, U.children || []), z.return = I, z);
    }
    function K(I, z, U, ee, he) {
      return z === null || z.tag !== 7 ? (z = da(
        U,
        I.mode,
        ee,
        he
      ), z.return = I, z) : (z = c(z, U), z.return = I, z);
    }
    function ne(I, z, U) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return z = oc(
          "" + z,
          I.mode,
          U
        ), z.return = I, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case v:
            return U = Co(
              z.type,
              z.key,
              z.props,
              null,
              I.mode,
              U
            ), ps(U, z), U.return = I, U;
          case y:
            return z = lc(
              z,
              I.mode,
              U
            ), z.return = I, z;
          case H:
            var ee = z._init;
            return z = ee(z._payload), ne(I, z, U);
        }
        if (W(z) || $(z))
          return z = da(
            z,
            I.mode,
            U,
            null
          ), z.return = I, z;
        if (typeof z.then == "function")
          return ne(I, qo(z), U);
        if (z.$$typeof === T)
          return ne(
            I,
            Oo(I, z),
            U
          );
        Fo(I, z);
      }
      return null;
    }
    function Z(I, z, U, ee) {
      var he = z !== null ? z.key : null;
      if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
        return he !== null ? null : k(I, z, "" + U, ee);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case v:
            return U.key === he ? M(I, z, U, ee) : null;
          case y:
            return U.key === he ? q(I, z, U, ee) : null;
          case H:
            return he = U._init, U = he(U._payload), Z(I, z, U, ee);
        }
        if (W(U) || $(U))
          return he !== null ? null : K(I, z, U, ee, null);
        if (typeof U.then == "function")
          return Z(
            I,
            z,
            qo(U),
            ee
          );
        if (U.$$typeof === T)
          return Z(
            I,
            z,
            Oo(I, U),
            ee
          );
        Fo(I, U);
      }
      return null;
    }
    function G(I, z, U, ee, he) {
      if (typeof ee == "string" && ee !== "" || typeof ee == "number" || typeof ee == "bigint")
        return I = I.get(U) || null, k(z, I, "" + ee, he);
      if (typeof ee == "object" && ee !== null) {
        switch (ee.$$typeof) {
          case v:
            return I = I.get(
              ee.key === null ? U : ee.key
            ) || null, M(z, I, ee, he);
          case y:
            return I = I.get(
              ee.key === null ? U : ee.key
            ) || null, q(z, I, ee, he);
          case H:
            var ze = ee._init;
            return ee = ze(ee._payload), G(
              I,
              z,
              U,
              ee,
              he
            );
        }
        if (W(ee) || $(ee))
          return I = I.get(U) || null, K(z, I, ee, he, null);
        if (typeof ee.then == "function")
          return G(
            I,
            z,
            U,
            qo(ee),
            he
          );
        if (ee.$$typeof === T)
          return G(
            I,
            z,
            U,
            Oo(z, ee),
            he
          );
        Fo(z, ee);
      }
      return null;
    }
    function we(I, z, U, ee) {
      for (var he = null, ze = null, ge = z, Ee = z = 0, Pt = null; ge !== null && Ee < U.length; Ee++) {
        ge.index > Ee ? (Pt = ge, ge = null) : Pt = ge.sibling;
        var Ye = Z(
          I,
          ge,
          U[Ee],
          ee
        );
        if (Ye === null) {
          ge === null && (ge = Pt);
          break;
        }
        e && ge && Ye.alternate === null && n(I, ge), z = b(Ye, z, Ee), ze === null ? he = Ye : ze.sibling = Ye, ze = Ye, ge = Pt;
      }
      if (Ee === U.length)
        return a(I, ge), Qe && pa(I, Ee), he;
      if (ge === null) {
        for (; Ee < U.length; Ee++)
          ge = ne(I, U[Ee], ee), ge !== null && (z = b(
            ge,
            z,
            Ee
          ), ze === null ? he = ge : ze.sibling = ge, ze = ge);
        return Qe && pa(I, Ee), he;
      }
      for (ge = o(ge); Ee < U.length; Ee++)
        Pt = G(
          ge,
          I,
          Ee,
          U[Ee],
          ee
        ), Pt !== null && (e && Pt.alternate !== null && ge.delete(
          Pt.key === null ? Ee : Pt.key
        ), z = b(
          Pt,
          z,
          Ee
        ), ze === null ? he = Pt : ze.sibling = Pt, ze = Pt);
      return e && ge.forEach(function(Kr) {
        return n(I, Kr);
      }), Qe && pa(I, Ee), he;
    }
    function Se(I, z, U, ee) {
      if (U == null) throw Error(s(151));
      for (var he = null, ze = null, ge = z, Ee = z = 0, Pt = null, Ye = U.next(); ge !== null && !Ye.done; Ee++, Ye = U.next()) {
        ge.index > Ee ? (Pt = ge, ge = null) : Pt = ge.sibling;
        var Kr = Z(I, ge, Ye.value, ee);
        if (Kr === null) {
          ge === null && (ge = Pt);
          break;
        }
        e && ge && Kr.alternate === null && n(I, ge), z = b(Kr, z, Ee), ze === null ? he = Kr : ze.sibling = Kr, ze = Kr, ge = Pt;
      }
      if (Ye.done)
        return a(I, ge), Qe && pa(I, Ee), he;
      if (ge === null) {
        for (; !Ye.done; Ee++, Ye = U.next())
          Ye = ne(I, Ye.value, ee), Ye !== null && (z = b(Ye, z, Ee), ze === null ? he = Ye : ze.sibling = Ye, ze = Ye);
        return Qe && pa(I, Ee), he;
      }
      for (ge = o(ge); !Ye.done; Ee++, Ye = U.next())
        Ye = G(ge, I, Ee, Ye.value, ee), Ye !== null && (e && Ye.alternate !== null && ge.delete(Ye.key === null ? Ee : Ye.key), z = b(Ye, z, Ee), ze === null ? he = Ye : ze.sibling = Ye, ze = Ye);
      return e && ge.forEach(function(H_) {
        return n(I, H_);
      }), Qe && pa(I, Ee), he;
    }
    function nt(I, z, U, ee) {
      if (typeof U == "object" && U !== null && U.type === d && U.key === null && (U = U.props.children), typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case v:
            e: {
              for (var he = U.key; z !== null; ) {
                if (z.key === he) {
                  if (he = U.type, he === d) {
                    if (z.tag === 7) {
                      a(
                        I,
                        z.sibling
                      ), ee = c(
                        z,
                        U.props.children
                      ), ee.return = I, I = ee;
                      break e;
                    }
                  } else if (z.elementType === he || typeof he == "object" && he !== null && he.$$typeof === H && am(he) === z.type) {
                    a(
                      I,
                      z.sibling
                    ), ee = c(z, U.props), ps(ee, U), ee.return = I, I = ee;
                    break e;
                  }
                  a(I, z);
                  break;
                } else n(I, z);
                z = z.sibling;
              }
              U.type === d ? (ee = da(
                U.props.children,
                I.mode,
                ee,
                U.key
              ), ee.return = I, I = ee) : (ee = Co(
                U.type,
                U.key,
                U.props,
                null,
                I.mode,
                ee
              ), ps(ee, U), ee.return = I, I = ee);
            }
            return N(I);
          case y:
            e: {
              for (he = U.key; z !== null; ) {
                if (z.key === he)
                  if (z.tag === 4 && z.stateNode.containerInfo === U.containerInfo && z.stateNode.implementation === U.implementation) {
                    a(
                      I,
                      z.sibling
                    ), ee = c(z, U.children || []), ee.return = I, I = ee;
                    break e;
                  } else {
                    a(I, z);
                    break;
                  }
                else n(I, z);
                z = z.sibling;
              }
              ee = lc(U, I.mode, ee), ee.return = I, I = ee;
            }
            return N(I);
          case H:
            return he = U._init, U = he(U._payload), nt(
              I,
              z,
              U,
              ee
            );
        }
        if (W(U))
          return we(
            I,
            z,
            U,
            ee
          );
        if ($(U)) {
          if (he = $(U), typeof he != "function") throw Error(s(150));
          return U = he.call(U), Se(
            I,
            z,
            U,
            ee
          );
        }
        if (typeof U.then == "function")
          return nt(
            I,
            z,
            qo(U),
            ee
          );
        if (U.$$typeof === T)
          return nt(
            I,
            z,
            Oo(I, U),
            ee
          );
        Fo(I, U);
      }
      return typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint" ? (U = "" + U, z !== null && z.tag === 6 ? (a(I, z.sibling), ee = c(z, U), ee.return = I, I = ee) : (a(I, z), ee = oc(U, I.mode, ee), ee.return = I, I = ee), N(I)) : a(I, z);
    }
    return function(I, z, U, ee) {
      try {
        hs = 0;
        var he = nt(
          I,
          z,
          U,
          ee
        );
        return ci = null, he;
      } catch (ge) {
        if (ge === as || ge === jo) throw ge;
        var ze = vn(29, ge, null, I.mode);
        return ze.lanes = ee, ze.return = I, ze;
      } finally {
      }
    };
  }
  var fi = im(!0), sm = im(!1), zn = J(null), Wn = null;
  function Ir(e) {
    var n = e.alternate;
    le(Mt, Mt.current & 1), le(zn, e), Wn === null && (n === null || si.current !== null || n.memoizedState !== null) && (Wn = e);
  }
  function om(e) {
    if (e.tag === 22) {
      if (le(Mt, Mt.current), le(zn, e), Wn === null) {
        var n = e.alternate;
        n !== null && n.memoizedState !== null && (Wn = e);
      }
    } else Pr();
  }
  function Pr() {
    le(Mt, Mt.current), le(zn, zn.current);
  }
  function mr(e) {
    se(zn), Wn === e && (Wn = null), se(Mt);
  }
  var Mt = J(0);
  function Zo(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var a = n.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || jf(a)))
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
  function Hc(e, n, a, o) {
    n = e.memoizedState, a = a(o, n), a = a == null ? n : m({}, n, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var qc = {
    enqueueSetState: function(e, n, a) {
      e = e._reactInternals;
      var o = Sn(), c = Rr(o);
      c.payload = n, a != null && (c.callback = a), n = zr(e, c, o), n !== null && (xn(n, e, o), ss(n, e, o));
    },
    enqueueReplaceState: function(e, n, a) {
      e = e._reactInternals;
      var o = Sn(), c = Rr(o);
      c.tag = 1, c.payload = n, a != null && (c.callback = a), n = zr(e, c, o), n !== null && (xn(n, e, o), ss(n, e, o));
    },
    enqueueForceUpdate: function(e, n) {
      e = e._reactInternals;
      var a = Sn(), o = Rr(a);
      o.tag = 2, n != null && (o.callback = n), n = zr(e, o, a), n !== null && (xn(n, e, a), ss(n, e, a));
    }
  };
  function lm(e, n, a, o, c, b, N) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, b, N) : n.prototype && n.prototype.isPureReactComponent ? !Qi(a, o) || !Qi(c, b) : !0;
  }
  function um(e, n, a, o) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(a, o), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(a, o), n.state !== e && qc.enqueueReplaceState(n, n.state, null);
  }
  function Sa(e, n) {
    var a = n;
    if ("ref" in n) {
      a = {};
      for (var o in n)
        o !== "ref" && (a[o] = n[o]);
    }
    if (e = e.defaultProps) {
      a === n && (a = m({}, a));
      for (var c in e)
        a[c] === void 0 && (a[c] = e[c]);
    }
    return a;
  }
  var Go = typeof reportError == "function" ? reportError : function(e) {
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
  function cm(e) {
    Go(e);
  }
  function fm(e) {
    console.error(e);
  }
  function dm(e) {
    Go(e);
  }
  function Vo(e, n) {
    try {
      var a = e.onUncaughtError;
      a(n.value, { componentStack: n.stack });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function hm(e, n, a) {
    try {
      var o = e.onCaughtError;
      o(a.value, {
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
    return a = Rr(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      Vo(e, n);
    }, a;
  }
  function pm(e) {
    return e = Rr(e), e.tag = 3, e;
  }
  function mm(e, n, a, o) {
    var c = a.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var b = o.value;
      e.payload = function() {
        return c(b);
      }, e.callback = function() {
        hm(n, a, o);
      };
    }
    var N = a.stateNode;
    N !== null && typeof N.componentDidCatch == "function" && (e.callback = function() {
      hm(n, a, o), typeof c != "function" && (Zr === null ? Zr = /* @__PURE__ */ new Set([this]) : Zr.add(this));
      var k = o.stack;
      this.componentDidCatch(o.value, {
        componentStack: k !== null ? k : ""
      });
    });
  }
  function Hb(e, n, a, o, c) {
    if (a.flags |= 32768, o !== null && typeof o == "object" && typeof o.then == "function") {
      if (n = a.alternate, n !== null && ts(
        n,
        a,
        c,
        !0
      ), a = zn.current, a !== null) {
        switch (a.tag) {
          case 13:
            return Wn === null ? pf() : a.alternate === null && bt === 0 && (bt = 3), a.flags &= -257, a.flags |= 65536, a.lanes = c, o === yc ? a.flags |= 16384 : (n = a.updateQueue, n === null ? a.updateQueue = /* @__PURE__ */ new Set([o]) : n.add(o), gf(e, o, c)), !1;
          case 22:
            return a.flags |= 65536, o === yc ? a.flags |= 16384 : (n = a.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([o])
            }, a.updateQueue = n) : (a = n.retryQueue, a === null ? n.retryQueue = /* @__PURE__ */ new Set([o]) : a.add(o)), gf(e, o, c)), !1;
        }
        throw Error(s(435, a.tag));
      }
      return gf(e, o, c), pf(), !1;
    }
    if (Qe)
      return n = zn.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = c, o !== fc && (e = Error(s(422), { cause: o }), es(jn(e, a)))) : (o !== fc && (n = Error(s(423), {
        cause: o
      }), es(
        jn(n, a)
      )), e = e.current.alternate, e.flags |= 65536, c &= -c, e.lanes |= c, o = jn(o, a), c = Fc(
        e.stateNode,
        o,
        c
      ), Sc(e, c), bt !== 4 && (bt = 2)), !1;
    var b = Error(s(520), { cause: o });
    if (b = jn(b, a), Ss === null ? Ss = [b] : Ss.push(b), bt !== 4 && (bt = 2), n === null) return !0;
    o = jn(o, a), a = n;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = c & -c, a.lanes |= e, e = Fc(a.stateNode, o, e), Sc(a, e), !1;
        case 1:
          if (n = a.type, b = a.stateNode, (a.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (Zr === null || !Zr.has(b))))
            return a.flags |= 65536, c &= -c, a.lanes |= c, c = pm(c), mm(
              c,
              e,
              a,
              o
            ), Sc(a, c), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var gm = Error(s(461)), Lt = !1;
  function Bt(e, n, a, o) {
    n.child = e === null ? sm(n, null, a, o) : fi(
      n,
      e.child,
      a,
      o
    );
  }
  function vm(e, n, a, o, c) {
    a = a.render;
    var b = n.ref;
    if ("ref" in o) {
      var N = {};
      for (var k in o)
        k !== "ref" && (N[k] = o[k]);
    } else N = o;
    return ya(n), o = Nc(
      e,
      n,
      a,
      N,
      b,
      c
    ), k = Ac(), e !== null && !Lt ? (Tc(e, n, c), gr(e, n, c)) : (Qe && k && uc(n), n.flags |= 1, Bt(e, n, o, c), n.child);
  }
  function ym(e, n, a, o, c) {
    if (e === null) {
      var b = a.type;
      return typeof b == "function" && !sc(b) && b.defaultProps === void 0 && a.compare === null ? (n.tag = 15, n.type = b, bm(
        e,
        n,
        b,
        o,
        c
      )) : (e = Co(
        a.type,
        null,
        o,
        n,
        n.mode,
        c
      ), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (b = e.child, !Jc(e, c)) {
      var N = b.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Qi, a(N, o) && e.ref === n.ref)
        return gr(e, n, c);
    }
    return n.flags |= 1, e = ur(b, o), e.ref = n.ref, e.return = n, n.child = e;
  }
  function bm(e, n, a, o, c) {
    if (e !== null) {
      var b = e.memoizedProps;
      if (Qi(b, o) && e.ref === n.ref)
        if (Lt = !1, n.pendingProps = o = b, Jc(e, c))
          (e.flags & 131072) !== 0 && (Lt = !0);
        else
          return n.lanes = e.lanes, gr(e, n, c);
    }
    return Zc(
      e,
      n,
      a,
      o,
      c
    );
  }
  function _m(e, n, a) {
    var o = n.pendingProps, c = o.children, b = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (o = b !== null ? b.baseLanes | a : a, e !== null) {
          for (c = n.child = e.child, b = 0; c !== null; )
            b = b | c.lanes | c.childLanes, c = c.sibling;
          n.childLanes = b & ~o;
        } else n.childLanes = 0, n.child = null;
        return Sm(
          e,
          n,
          o,
          a
        );
      }
      if ((a & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && ko(
          n,
          b !== null ? b.cachePool : null
        ), b !== null ? bp(n, b) : Ec(), om(n);
      else
        return n.lanes = n.childLanes = 536870912, Sm(
          e,
          n,
          b !== null ? b.baseLanes | a : a,
          a
        );
    } else
      b !== null ? (ko(n, b.cachePool), bp(n, b), Pr(), n.memoizedState = null) : (e !== null && ko(n, null), Ec(), Pr());
    return Bt(e, n, c, a), n.child;
  }
  function Sm(e, n, a, o) {
    var c = vc();
    return c = c === null ? null : { parent: jt._currentValue, pool: c }, n.memoizedState = {
      baseLanes: a,
      cachePool: c
    }, e !== null && ko(n, null), Ec(), om(n), e !== null && ts(e, n, o, !0), null;
  }
  function Yo(e, n) {
    var a = n.ref;
    if (a === null)
      e !== null && e.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(s(284));
      (e === null || e.ref !== a) && (n.flags |= 4194816);
    }
  }
  function Zc(e, n, a, o, c) {
    return ya(n), a = Nc(
      e,
      n,
      a,
      o,
      void 0,
      c
    ), o = Ac(), e !== null && !Lt ? (Tc(e, n, c), gr(e, n, c)) : (Qe && o && uc(n), n.flags |= 1, Bt(e, n, a, c), n.child);
  }
  function xm(e, n, a, o, c, b) {
    return ya(n), n.updateQueue = null, a = Sp(
      n,
      o,
      a,
      c
    ), _p(e), o = Ac(), e !== null && !Lt ? (Tc(e, n, b), gr(e, n, b)) : (Qe && o && uc(n), n.flags |= 1, Bt(e, n, a, b), n.child);
  }
  function Em(e, n, a, o, c) {
    if (ya(n), n.stateNode === null) {
      var b = ti, N = a.contextType;
      typeof N == "object" && N !== null && (b = Gt(N)), b = new a(o, b), n.memoizedState = b.state !== null && b.state !== void 0 ? b.state : null, b.updater = qc, n.stateNode = b, b._reactInternals = n, b = n.stateNode, b.props = o, b.state = n.memoizedState, b.refs = {}, bc(n), N = a.contextType, b.context = typeof N == "object" && N !== null ? Gt(N) : ti, b.state = n.memoizedState, N = a.getDerivedStateFromProps, typeof N == "function" && (Hc(
        n,
        a,
        N,
        o
      ), b.state = n.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof b.getSnapshotBeforeUpdate == "function" || typeof b.UNSAFE_componentWillMount != "function" && typeof b.componentWillMount != "function" || (N = b.state, typeof b.componentWillMount == "function" && b.componentWillMount(), typeof b.UNSAFE_componentWillMount == "function" && b.UNSAFE_componentWillMount(), N !== b.state && qc.enqueueReplaceState(b, b.state, null), ls(n, o, b, c), os(), b.state = n.memoizedState), typeof b.componentDidMount == "function" && (n.flags |= 4194308), o = !0;
    } else if (e === null) {
      b = n.stateNode;
      var k = n.memoizedProps, M = Sa(a, k);
      b.props = M;
      var q = b.context, K = a.contextType;
      N = ti, typeof K == "object" && K !== null && (N = Gt(K));
      var ne = a.getDerivedStateFromProps;
      K = typeof ne == "function" || typeof b.getSnapshotBeforeUpdate == "function", k = n.pendingProps !== k, K || typeof b.UNSAFE_componentWillReceiveProps != "function" && typeof b.componentWillReceiveProps != "function" || (k || q !== N) && um(
        n,
        b,
        o,
        N
      ), Dr = !1;
      var Z = n.memoizedState;
      b.state = Z, ls(n, o, b, c), os(), q = n.memoizedState, k || Z !== q || Dr ? (typeof ne == "function" && (Hc(
        n,
        a,
        ne,
        o
      ), q = n.memoizedState), (M = Dr || lm(
        n,
        a,
        M,
        o,
        Z,
        q,
        N
      )) ? (K || typeof b.UNSAFE_componentWillMount != "function" && typeof b.componentWillMount != "function" || (typeof b.componentWillMount == "function" && b.componentWillMount(), typeof b.UNSAFE_componentWillMount == "function" && b.UNSAFE_componentWillMount()), typeof b.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof b.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = o, n.memoizedState = q), b.props = o, b.state = q, b.context = N, o = M) : (typeof b.componentDidMount == "function" && (n.flags |= 4194308), o = !1);
    } else {
      b = n.stateNode, _c(e, n), N = n.memoizedProps, K = Sa(a, N), b.props = K, ne = n.pendingProps, Z = b.context, q = a.contextType, M = ti, typeof q == "object" && q !== null && (M = Gt(q)), k = a.getDerivedStateFromProps, (q = typeof k == "function" || typeof b.getSnapshotBeforeUpdate == "function") || typeof b.UNSAFE_componentWillReceiveProps != "function" && typeof b.componentWillReceiveProps != "function" || (N !== ne || Z !== M) && um(
        n,
        b,
        o,
        M
      ), Dr = !1, Z = n.memoizedState, b.state = Z, ls(n, o, b, c), os();
      var G = n.memoizedState;
      N !== ne || Z !== G || Dr || e !== null && e.dependencies !== null && To(e.dependencies) ? (typeof k == "function" && (Hc(
        n,
        a,
        k,
        o
      ), G = n.memoizedState), (K = Dr || lm(
        n,
        a,
        K,
        o,
        Z,
        G,
        M
      ) || e !== null && e.dependencies !== null && To(e.dependencies)) ? (q || typeof b.UNSAFE_componentWillUpdate != "function" && typeof b.componentWillUpdate != "function" || (typeof b.componentWillUpdate == "function" && b.componentWillUpdate(o, G, M), typeof b.UNSAFE_componentWillUpdate == "function" && b.UNSAFE_componentWillUpdate(
        o,
        G,
        M
      )), typeof b.componentDidUpdate == "function" && (n.flags |= 4), typeof b.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof b.componentDidUpdate != "function" || N === e.memoizedProps && Z === e.memoizedState || (n.flags |= 4), typeof b.getSnapshotBeforeUpdate != "function" || N === e.memoizedProps && Z === e.memoizedState || (n.flags |= 1024), n.memoizedProps = o, n.memoizedState = G), b.props = o, b.state = G, b.context = M, o = K) : (typeof b.componentDidUpdate != "function" || N === e.memoizedProps && Z === e.memoizedState || (n.flags |= 4), typeof b.getSnapshotBeforeUpdate != "function" || N === e.memoizedProps && Z === e.memoizedState || (n.flags |= 1024), o = !1);
    }
    return b = o, Yo(e, n), o = (n.flags & 128) !== 0, b || o ? (b = n.stateNode, a = o && typeof a.getDerivedStateFromError != "function" ? null : b.render(), n.flags |= 1, e !== null && o ? (n.child = fi(
      n,
      e.child,
      null,
      c
    ), n.child = fi(
      n,
      null,
      a,
      c
    )) : Bt(e, n, a, c), n.memoizedState = b.state, e = n.child) : e = gr(
      e,
      n,
      c
    ), e;
  }
  function wm(e, n, a, o) {
    return Wi(), n.flags |= 256, Bt(e, n, a, o), n.child;
  }
  var Gc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Vc(e) {
    return { baseLanes: e, cachePool: fp() };
  }
  function Yc(e, n, a) {
    return e = e !== null ? e.childLanes & ~a : 0, n && (e |= Ln), e;
  }
  function Cm(e, n, a) {
    var o = n.pendingProps, c = !1, b = (n.flags & 128) !== 0, N;
    if ((N = b) || (N = e !== null && e.memoizedState === null ? !1 : (Mt.current & 2) !== 0), N && (c = !0, n.flags &= -129), N = (n.flags & 32) !== 0, n.flags &= -33, e === null) {
      if (Qe) {
        if (c ? Ir(n) : Pr(), Qe) {
          var k = yt, M;
          if (M = k) {
            e: {
              for (M = k, k = Kn; M.nodeType !== 8; ) {
                if (!k) {
                  k = null;
                  break e;
                }
                if (M = Gn(
                  M.nextSibling
                ), M === null) {
                  k = null;
                  break e;
                }
              }
              k = M;
            }
            k !== null ? (n.memoizedState = {
              dehydrated: k,
              treeContext: ha !== null ? { id: cr, overflow: fr } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, M = vn(
              18,
              null,
              null,
              0
            ), M.stateNode = k, M.return = n, n.child = M, Jt = n, yt = null, M = !0) : M = !1;
          }
          M || ga(n);
        }
        if (k = n.memoizedState, k !== null && (k = k.dehydrated, k !== null))
          return jf(k) ? n.lanes = 32 : n.lanes = 536870912, null;
        mr(n);
      }
      return k = o.children, o = o.fallback, c ? (Pr(), c = n.mode, k = $o(
        { mode: "hidden", children: k },
        c
      ), o = da(
        o,
        c,
        a,
        null
      ), k.return = n, o.return = n, k.sibling = o, n.child = k, c = n.child, c.memoizedState = Vc(a), c.childLanes = Yc(
        e,
        N,
        a
      ), n.memoizedState = Gc, o) : (Ir(n), $c(n, k));
    }
    if (M = e.memoizedState, M !== null && (k = M.dehydrated, k !== null)) {
      if (b)
        n.flags & 256 ? (Ir(n), n.flags &= -257, n = Xc(
          e,
          n,
          a
        )) : n.memoizedState !== null ? (Pr(), n.child = e.child, n.flags |= 128, n = null) : (Pr(), c = o.fallback, k = n.mode, o = $o(
          { mode: "visible", children: o.children },
          k
        ), c = da(
          c,
          k,
          a,
          null
        ), c.flags |= 2, o.return = n, c.return = n, o.sibling = c, n.child = o, fi(
          n,
          e.child,
          null,
          a
        ), o = n.child, o.memoizedState = Vc(a), o.childLanes = Yc(
          e,
          N,
          a
        ), n.memoizedState = Gc, n = c);
      else if (Ir(n), jf(k)) {
        if (N = k.nextSibling && k.nextSibling.dataset, N) var q = N.dgst;
        N = q, o = Error(s(419)), o.stack = "", o.digest = N, es({ value: o, source: null, stack: null }), n = Xc(
          e,
          n,
          a
        );
      } else if (Lt || ts(e, n, a, !1), N = (a & e.childLanes) !== 0, Lt || N) {
        if (N = ot, N !== null && (o = a & -a, o = (o & 42) !== 0 ? 1 : ju(o), o = (o & (N.suspendedLanes | a)) !== 0 ? 0 : o, o !== 0 && o !== M.retryLane))
          throw M.retryLane = o, ei(e, o), xn(N, e, o), gm;
        k.data === "$?" || pf(), n = Xc(
          e,
          n,
          a
        );
      } else
        k.data === "$?" ? (n.flags |= 192, n.child = e.child, n = null) : (e = M.treeContext, yt = Gn(
          k.nextSibling
        ), Jt = n, Qe = !0, ma = null, Kn = !1, e !== null && (Dn[Rn++] = cr, Dn[Rn++] = fr, Dn[Rn++] = ha, cr = e.id, fr = e.overflow, ha = n), n = $c(
          n,
          o.children
        ), n.flags |= 4096);
      return n;
    }
    return c ? (Pr(), c = o.fallback, k = n.mode, M = e.child, q = M.sibling, o = ur(M, {
      mode: "hidden",
      children: o.children
    }), o.subtreeFlags = M.subtreeFlags & 65011712, q !== null ? c = ur(q, c) : (c = da(
      c,
      k,
      a,
      null
    ), c.flags |= 2), c.return = n, o.return = n, o.sibling = c, n.child = o, o = c, c = n.child, k = e.child.memoizedState, k === null ? k = Vc(a) : (M = k.cachePool, M !== null ? (q = jt._currentValue, M = M.parent !== q ? { parent: q, pool: q } : M) : M = fp(), k = {
      baseLanes: k.baseLanes | a,
      cachePool: M
    }), c.memoizedState = k, c.childLanes = Yc(
      e,
      N,
      a
    ), n.memoizedState = Gc, o) : (Ir(n), a = e.child, e = a.sibling, a = ur(a, {
      mode: "visible",
      children: o.children
    }), a.return = n, a.sibling = null, e !== null && (N = n.deletions, N === null ? (n.deletions = [e], n.flags |= 16) : N.push(e)), n.child = a, n.memoizedState = null, a);
  }
  function $c(e, n) {
    return n = $o(
      { mode: "visible", children: n },
      e.mode
    ), n.return = e, e.child = n;
  }
  function $o(e, n) {
    return e = vn(22, e, null, n), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function Xc(e, n, a) {
    return fi(n, e.child, null, a), e = $c(
      n,
      n.pendingProps.children
    ), e.flags |= 2, n.memoizedState = null, e;
  }
  function Nm(e, n, a) {
    e.lanes |= n;
    var o = e.alternate;
    o !== null && (o.lanes |= n), hc(e.return, n, a);
  }
  function Qc(e, n, a, o, c) {
    var b = e.memoizedState;
    b === null ? e.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: o,
      tail: a,
      tailMode: c
    } : (b.isBackwards = n, b.rendering = null, b.renderingStartTime = 0, b.last = o, b.tail = a, b.tailMode = c);
  }
  function Am(e, n, a) {
    var o = n.pendingProps, c = o.revealOrder, b = o.tail;
    if (Bt(e, n, o.children, a), o = Mt.current, (o & 2) !== 0)
      o = o & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = n.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Nm(e, a, n);
          else if (e.tag === 19)
            Nm(e, a, n);
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
      o &= 1;
    }
    switch (le(Mt, o), c) {
      case "forwards":
        for (a = n.child, c = null; a !== null; )
          e = a.alternate, e !== null && Zo(e) === null && (c = a), a = a.sibling;
        a = c, a === null ? (c = n.child, n.child = null) : (c = a.sibling, a.sibling = null), Qc(
          n,
          !1,
          c,
          a,
          b
        );
        break;
      case "backwards":
        for (a = null, c = n.child, n.child = null; c !== null; ) {
          if (e = c.alternate, e !== null && Zo(e) === null) {
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
          b
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
  function gr(e, n, a) {
    if (e !== null && (n.dependencies = e.dependencies), Fr |= n.lanes, (a & n.childLanes) === 0)
      if (e !== null) {
        if (ts(
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
      for (e = n.child, a = ur(e, e.pendingProps), n.child = a, a.return = n; e.sibling !== null; )
        e = e.sibling, a = a.sibling = ur(e, e.pendingProps), a.return = n;
      a.sibling = null;
    }
    return n.child;
  }
  function Jc(e, n) {
    return (e.lanes & n) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && To(e)));
  }
  function qb(e, n, a) {
    switch (n.tag) {
      case 3:
        ye(n, n.stateNode.containerInfo), Mr(n, jt, e.memoizedState.cache), Wi();
        break;
      case 27:
      case 5:
        ct(n);
        break;
      case 4:
        ye(n, n.stateNode.containerInfo);
        break;
      case 10:
        Mr(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 13:
        var o = n.memoizedState;
        if (o !== null)
          return o.dehydrated !== null ? (Ir(n), n.flags |= 128, null) : (a & n.child.childLanes) !== 0 ? Cm(e, n, a) : (Ir(n), e = gr(
            e,
            n,
            a
          ), e !== null ? e.sibling : null);
        Ir(n);
        break;
      case 19:
        var c = (e.flags & 128) !== 0;
        if (o = (a & n.childLanes) !== 0, o || (ts(
          e,
          n,
          a,
          !1
        ), o = (a & n.childLanes) !== 0), c) {
          if (o)
            return Am(
              e,
              n,
              a
            );
          n.flags |= 128;
        }
        if (c = n.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), le(Mt, Mt.current), o) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, _m(e, n, a);
      case 24:
        Mr(n, jt, e.memoizedState.cache);
    }
    return gr(e, n, a);
  }
  function Tm(e, n, a) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps)
        Lt = !0;
      else {
        if (!Jc(e, a) && (n.flags & 128) === 0)
          return Lt = !1, qb(
            e,
            n,
            a
          );
        Lt = (e.flags & 131072) !== 0;
      }
    else
      Lt = !1, Qe && (n.flags & 1048576) !== 0 && ap(n, Ao, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          e = n.pendingProps;
          var o = n.elementType, c = o._init;
          if (o = c(o._payload), n.type = o, typeof o == "function")
            sc(o) ? (e = Sa(o, e), n.tag = 1, n = Em(
              null,
              n,
              o,
              e,
              a
            )) : (n.tag = 0, n = Zc(
              null,
              n,
              o,
              e,
              a
            ));
          else {
            if (o != null) {
              if (c = o.$$typeof, c === E) {
                n.tag = 11, n = vm(
                  null,
                  n,
                  o,
                  e,
                  a
                );
                break e;
              } else if (c === R) {
                n.tag = 14, n = ym(
                  null,
                  n,
                  o,
                  e,
                  a
                );
                break e;
              }
            }
            throw n = te(o) || o, Error(s(306, n, ""));
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
        return o = n.type, c = Sa(
          o,
          n.pendingProps
        ), Em(
          e,
          n,
          o,
          c,
          a
        );
      case 3:
        e: {
          if (ye(
            n,
            n.stateNode.containerInfo
          ), e === null) throw Error(s(387));
          o = n.pendingProps;
          var b = n.memoizedState;
          c = b.element, _c(e, n), ls(n, o, null, a);
          var N = n.memoizedState;
          if (o = N.cache, Mr(n, jt, o), o !== b.cache && pc(
            n,
            [jt],
            a,
            !0
          ), os(), o = N.element, b.isDehydrated)
            if (b = {
              element: o,
              isDehydrated: !1,
              cache: N.cache
            }, n.updateQueue.baseState = b, n.memoizedState = b, n.flags & 256) {
              n = wm(
                e,
                n,
                o,
                a
              );
              break e;
            } else if (o !== c) {
              c = jn(
                Error(s(424)),
                n
              ), es(c), n = wm(
                e,
                n,
                o,
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
              for (yt = Gn(e.firstChild), Jt = n, Qe = !0, ma = null, Kn = !0, a = sm(
                n,
                null,
                o,
                a
              ), n.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
          else {
            if (Wi(), o === c) {
              n = gr(
                e,
                n,
                a
              );
              break e;
            }
            Bt(
              e,
              n,
              o,
              a
            );
          }
          n = n.child;
        }
        return n;
      case 26:
        return Yo(e, n), e === null ? (a = Mg(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = a : Qe || (a = n.type, e = n.pendingProps, o = ll(
          X.current
        ).createElement(a), o[Zt] = n, o[rn] = e, Ht(o, a, e), zt(o), n.stateNode = o) : n.memoizedState = Mg(
          n.type,
          e.memoizedProps,
          n.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return ct(n), e === null && Qe && (o = n.stateNode = Og(
          n.type,
          n.pendingProps,
          X.current
        ), Jt = n, Kn = !0, c = yt, Yr(n.type) ? (Mf = c, yt = Gn(
          o.firstChild
        )) : yt = c), Bt(
          e,
          n,
          n.pendingProps.children,
          a
        ), Yo(e, n), e === null && (n.flags |= 4194304), n.child;
      case 5:
        return e === null && Qe && ((c = o = yt) && (o = g_(
          o,
          n.type,
          n.pendingProps,
          Kn
        ), o !== null ? (n.stateNode = o, Jt = n, yt = Gn(
          o.firstChild
        ), Kn = !1, c = !0) : c = !1), c || ga(n)), ct(n), c = n.type, b = n.pendingProps, N = e !== null ? e.memoizedProps : null, o = b.children, Tf(c, b) ? o = null : N !== null && Tf(c, N) && (n.flags |= 32), n.memoizedState !== null && (c = Nc(
          e,
          n,
          Rb,
          null,
          null,
          a
        ), ks._currentValue = c), Yo(e, n), Bt(e, n, o, a), n.child;
      case 6:
        return e === null && Qe && ((e = a = yt) && (a = v_(
          a,
          n.pendingProps,
          Kn
        ), a !== null ? (n.stateNode = a, Jt = n, yt = null, e = !0) : e = !1), e || ga(n)), null;
      case 13:
        return Cm(e, n, a);
      case 4:
        return ye(
          n,
          n.stateNode.containerInfo
        ), o = n.pendingProps, e === null ? n.child = fi(
          n,
          null,
          o,
          a
        ) : Bt(
          e,
          n,
          o,
          a
        ), n.child;
      case 11:
        return vm(
          e,
          n,
          n.type,
          n.pendingProps,
          a
        );
      case 7:
        return Bt(
          e,
          n,
          n.pendingProps,
          a
        ), n.child;
      case 8:
        return Bt(
          e,
          n,
          n.pendingProps.children,
          a
        ), n.child;
      case 12:
        return Bt(
          e,
          n,
          n.pendingProps.children,
          a
        ), n.child;
      case 10:
        return o = n.pendingProps, Mr(n, n.type, o.value), Bt(
          e,
          n,
          o.children,
          a
        ), n.child;
      case 9:
        return c = n.type._context, o = n.pendingProps.children, ya(n), c = Gt(c), o = o(c), n.flags |= 1, Bt(e, n, o, a), n.child;
      case 14:
        return ym(
          e,
          n,
          n.type,
          n.pendingProps,
          a
        );
      case 15:
        return bm(
          e,
          n,
          n.type,
          n.pendingProps,
          a
        );
      case 19:
        return Am(e, n, a);
      case 31:
        return o = n.pendingProps, a = n.mode, o = {
          mode: o.mode,
          children: o.children
        }, e === null ? (a = $o(
          o,
          a
        ), a.ref = n.ref, n.child = a, a.return = n, n = a) : (a = ur(e.child, o), a.ref = n.ref, n.child = a, a.return = n, n = a), n;
      case 22:
        return _m(e, n, a);
      case 24:
        return ya(n), o = Gt(jt), e === null ? (c = vc(), c === null && (c = ot, b = mc(), c.pooledCache = b, b.refCount++, b !== null && (c.pooledCacheLanes |= a), c = b), n.memoizedState = {
          parent: o,
          cache: c
        }, bc(n), Mr(n, jt, c)) : ((e.lanes & a) !== 0 && (_c(e, n), ls(n, null, null, a), os()), c = e.memoizedState, b = n.memoizedState, c.parent !== o ? (c = { parent: o, cache: o }, n.memoizedState = c, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = c), Mr(n, jt, o)) : (o = b.cache, Mr(n, jt, o), o !== c.cache && pc(
          n,
          [jt],
          a,
          !0
        ))), Bt(
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
  function vr(e) {
    e.flags |= 4;
  }
  function Om(e, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Ig(n)) {
      if (n = zn.current, n !== null && ((Fe & 4194048) === Fe ? Wn !== null : (Fe & 62914560) !== Fe && (Fe & 536870912) === 0 || n !== Wn))
        throw is = yc, dp;
      e.flags |= 8192;
    }
  }
  function Xo(e, n) {
    n !== null && (e.flags |= 4), e.flags & 16384 && (n = e.tag !== 22 ? oh() : 536870912, e.lanes |= n, mi |= n);
  }
  function ms(e, n) {
    if (!Qe)
      switch (e.tailMode) {
        case "hidden":
          n = e.tail;
          for (var a = null; n !== null; )
            n.alternate !== null && (a = n), n = n.sibling;
          a === null ? e.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = e.tail;
          for (var o = null; a !== null; )
            a.alternate !== null && (o = a), a = a.sibling;
          o === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : o.sibling = null;
      }
  }
  function mt(e) {
    var n = e.alternate !== null && e.alternate.child === e.child, a = 0, o = 0;
    if (n)
      for (var c = e.child; c !== null; )
        a |= c.lanes | c.childLanes, o |= c.subtreeFlags & 65011712, o |= c.flags & 65011712, c.return = e, c = c.sibling;
    else
      for (c = e.child; c !== null; )
        a |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = e, c = c.sibling;
    return e.subtreeFlags |= o, e.childLanes = a, n;
  }
  function Fb(e, n, a) {
    var o = n.pendingProps;
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
        return mt(n), null;
      case 1:
        return mt(n), null;
      case 3:
        return a = n.stateNode, o = null, e !== null && (o = e.memoizedState.cache), n.memoizedState.cache !== o && (n.flags |= 2048), hr(jt), $e(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Ki(n) ? vr(n) : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, op())), mt(n), null;
      case 26:
        return a = n.memoizedState, e === null ? (vr(n), a !== null ? (mt(n), Om(n, a)) : (mt(n), n.flags &= -16777217)) : a ? a !== e.memoizedState ? (vr(n), mt(n), Om(n, a)) : (mt(n), n.flags &= -16777217) : (e.memoizedProps !== o && vr(n), mt(n), n.flags &= -16777217), null;
      case 27:
        je(n), a = X.current;
        var c = n.type;
        if (e !== null && n.stateNode != null)
          e.memoizedProps !== o && vr(n);
        else {
          if (!o) {
            if (n.stateNode === null)
              throw Error(s(166));
            return mt(n), null;
          }
          e = ue.current, Ki(n) ? ip(n) : (e = Og(c, o, a), n.stateNode = e, vr(n));
        }
        return mt(n), null;
      case 5:
        if (je(n), a = n.type, e !== null && n.stateNode != null)
          e.memoizedProps !== o && vr(n);
        else {
          if (!o) {
            if (n.stateNode === null)
              throw Error(s(166));
            return mt(n), null;
          }
          if (e = ue.current, Ki(n))
            ip(n);
          else {
            switch (c = ll(
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
                    e = typeof o.is == "string" ? c.createElement("select", { is: o.is }) : c.createElement("select"), o.multiple ? e.multiple = !0 : o.size && (e.size = o.size);
                    break;
                  default:
                    e = typeof o.is == "string" ? c.createElement(a, { is: o.is }) : c.createElement(a);
                }
            }
            e[Zt] = n, e[rn] = o;
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
            e: switch (Ht(e, a, o), a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!o.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && vr(n);
          }
        }
        return mt(n), n.flags &= -16777217, null;
      case 6:
        if (e && n.stateNode != null)
          e.memoizedProps !== o && vr(n);
        else {
          if (typeof o != "string" && n.stateNode === null)
            throw Error(s(166));
          if (e = X.current, Ki(n)) {
            if (e = n.stateNode, a = n.memoizedProps, o = null, c = Jt, c !== null)
              switch (c.tag) {
                case 27:
                case 5:
                  o = c.memoizedProps;
              }
            e[Zt] = n, e = !!(e.nodeValue === a || o !== null && o.suppressHydrationWarning === !0 || xg(e.nodeValue, a)), e || ga(n);
          } else
            e = ll(e).createTextNode(
              o
            ), e[Zt] = n, n.stateNode = e;
        }
        return mt(n), null;
      case 13:
        if (o = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (c = Ki(n), o !== null && o.dehydrated !== null) {
            if (e === null) {
              if (!c) throw Error(s(318));
              if (c = n.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(s(317));
              c[Zt] = n;
            } else
              Wi(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            mt(n), c = !1;
          } else
            c = op(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = c), c = !0;
          if (!c)
            return n.flags & 256 ? (mr(n), n) : (mr(n), null);
        }
        if (mr(n), (n.flags & 128) !== 0)
          return n.lanes = a, n;
        if (a = o !== null, e = e !== null && e.memoizedState !== null, a) {
          o = n.child, c = null, o.alternate !== null && o.alternate.memoizedState !== null && o.alternate.memoizedState.cachePool !== null && (c = o.alternate.memoizedState.cachePool.pool);
          var b = null;
          o.memoizedState !== null && o.memoizedState.cachePool !== null && (b = o.memoizedState.cachePool.pool), b !== c && (o.flags |= 2048);
        }
        return a !== e && a && (n.child.flags |= 8192), Xo(n, n.updateQueue), mt(n), null;
      case 4:
        return $e(), e === null && Ef(n.stateNode.containerInfo), mt(n), null;
      case 10:
        return hr(n.type), mt(n), null;
      case 19:
        if (se(Mt), c = n.memoizedState, c === null) return mt(n), null;
        if (o = (n.flags & 128) !== 0, b = c.rendering, b === null)
          if (o) ms(c, !1);
          else {
            if (bt !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = n.child; e !== null; ) {
                if (b = Zo(e), b !== null) {
                  for (n.flags |= 128, ms(c, !1), e = b.updateQueue, n.updateQueue = e, Xo(n, e), n.subtreeFlags = 0, e = a, a = n.child; a !== null; )
                    rp(a, e), a = a.sibling;
                  return le(
                    Mt,
                    Mt.current & 1 | 2
                  ), n.child;
                }
                e = e.sibling;
              }
            c.tail !== null && Xe() > Ko && (n.flags |= 128, o = !0, ms(c, !1), n.lanes = 4194304);
          }
        else {
          if (!o)
            if (e = Zo(b), e !== null) {
              if (n.flags |= 128, o = !0, e = e.updateQueue, n.updateQueue = e, Xo(n, e), ms(c, !0), c.tail === null && c.tailMode === "hidden" && !b.alternate && !Qe)
                return mt(n), null;
            } else
              2 * Xe() - c.renderingStartTime > Ko && a !== 536870912 && (n.flags |= 128, o = !0, ms(c, !1), n.lanes = 4194304);
          c.isBackwards ? (b.sibling = n.child, n.child = b) : (e = c.last, e !== null ? e.sibling = b : n.child = b, c.last = b);
        }
        return c.tail !== null ? (n = c.tail, c.rendering = n, c.tail = n.sibling, c.renderingStartTime = Xe(), n.sibling = null, e = Mt.current, le(Mt, o ? e & 1 | 2 : e & 1), n) : (mt(n), null);
      case 22:
      case 23:
        return mr(n), wc(), o = n.memoizedState !== null, e !== null ? e.memoizedState !== null !== o && (n.flags |= 8192) : o && (n.flags |= 8192), o ? (a & 536870912) !== 0 && (n.flags & 128) === 0 && (mt(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : mt(n), a = n.updateQueue, a !== null && Xo(n, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), o = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (o = n.memoizedState.cachePool.pool), o !== a && (n.flags |= 2048), e !== null && se(ba), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), n.memoizedState.cache !== a && (n.flags |= 2048), hr(jt), mt(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, n.tag));
  }
  function Zb(e, n) {
    switch (cc(n), n.tag) {
      case 1:
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return hr(jt), $e(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return je(n), null;
      case 13:
        if (mr(n), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(s(340));
          Wi();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return se(Mt), null;
      case 4:
        return $e(), null;
      case 10:
        return hr(n.type), null;
      case 22:
      case 23:
        return mr(n), wc(), e !== null && se(ba), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 24:
        return hr(jt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function km(e, n) {
    switch (cc(n), n.tag) {
      case 3:
        hr(jt), $e();
        break;
      case 26:
      case 27:
      case 5:
        je(n);
        break;
      case 4:
        $e();
        break;
      case 13:
        mr(n);
        break;
      case 19:
        se(Mt);
        break;
      case 10:
        hr(n.type);
        break;
      case 22:
      case 23:
        mr(n), wc(), e !== null && se(ba);
        break;
      case 24:
        hr(jt);
    }
  }
  function gs(e, n) {
    try {
      var a = n.updateQueue, o = a !== null ? a.lastEffect : null;
      if (o !== null) {
        var c = o.next;
        a = c;
        do {
          if ((a.tag & e) === e) {
            o = void 0;
            var b = a.create, N = a.inst;
            o = b(), N.destroy = o;
          }
          a = a.next;
        } while (a !== c);
      }
    } catch (k) {
      rt(n, n.return, k);
    }
  }
  function Br(e, n, a) {
    try {
      var o = n.updateQueue, c = o !== null ? o.lastEffect : null;
      if (c !== null) {
        var b = c.next;
        o = b;
        do {
          if ((o.tag & e) === e) {
            var N = o.inst, k = N.destroy;
            if (k !== void 0) {
              N.destroy = void 0, c = n;
              var M = a, q = k;
              try {
                q();
              } catch (K) {
                rt(
                  c,
                  M,
                  K
                );
              }
            }
          }
          o = o.next;
        } while (o !== b);
      }
    } catch (K) {
      rt(n, n.return, K);
    }
  }
  function jm(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var a = e.stateNode;
      try {
        yp(n, a);
      } catch (o) {
        rt(e, e.return, o);
      }
    }
  }
  function Mm(e, n, a) {
    a.props = Sa(
      e.type,
      e.memoizedProps
    ), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (o) {
      rt(e, n, o);
    }
  }
  function vs(e, n) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var o = e.stateNode;
            break;
          case 30:
            o = e.stateNode;
            break;
          default:
            o = e.stateNode;
        }
        typeof a == "function" ? e.refCleanup = a(o) : a.current = o;
      }
    } catch (c) {
      rt(e, n, c);
    }
  }
  function er(e, n) {
    var a = e.ref, o = e.refCleanup;
    if (a !== null)
      if (typeof o == "function")
        try {
          o();
        } catch (c) {
          rt(e, n, c);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (c) {
          rt(e, n, c);
        }
      else a.current = null;
  }
  function Dm(e) {
    var n = e.type, a = e.memoizedProps, o = e.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && o.focus();
          break e;
        case "img":
          a.src ? o.src = a.src : a.srcSet && (o.srcset = a.srcSet);
      }
    } catch (c) {
      rt(e, e.return, c);
    }
  }
  function Kc(e, n, a) {
    try {
      var o = e.stateNode;
      f_(o, e.type, a, n), o[rn] = n;
    } catch (c) {
      rt(e, e.return, c);
    }
  }
  function Rm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Yr(e.type) || e.tag === 4;
  }
  function Wc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Rm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Yr(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ef(e, n, a) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, n ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, n) : (n = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, n.appendChild(e), a = a._reactRootContainer, a != null || n.onclick !== null || (n.onclick = ol));
    else if (o !== 4 && (o === 27 && Yr(e.type) && (a = e.stateNode, n = null), e = e.child, e !== null))
      for (ef(e, n, a), e = e.sibling; e !== null; )
        ef(e, n, a), e = e.sibling;
  }
  function Qo(e, n, a) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, n ? a.insertBefore(e, n) : a.appendChild(e);
    else if (o !== 4 && (o === 27 && Yr(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for (Qo(e, n, a), e = e.sibling; e !== null; )
        Qo(e, n, a), e = e.sibling;
  }
  function zm(e) {
    var n = e.stateNode, a = e.memoizedProps;
    try {
      for (var o = e.type, c = n.attributes; c.length; )
        n.removeAttributeNode(c[0]);
      Ht(n, o, a), n[Zt] = e, n[rn] = a;
    } catch (b) {
      rt(e, e.return, b);
    }
  }
  var yr = !1, Et = !1, tf = !1, Lm = typeof WeakSet == "function" ? WeakSet : Set, It = null;
  function Gb(e, n) {
    if (e = e.containerInfo, Nf = pl, e = Yh(e), Wu(e)) {
      if ("selectionStart" in e)
        var a = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          a = (a = e.ownerDocument) && a.defaultView || window;
          var o = a.getSelection && a.getSelection();
          if (o && o.rangeCount !== 0) {
            a = o.anchorNode;
            var c = o.anchorOffset, b = o.focusNode;
            o = o.focusOffset;
            try {
              a.nodeType, b.nodeType;
            } catch {
              a = null;
              break e;
            }
            var N = 0, k = -1, M = -1, q = 0, K = 0, ne = e, Z = null;
            t: for (; ; ) {
              for (var G; ne !== a || c !== 0 && ne.nodeType !== 3 || (k = N + c), ne !== b || o !== 0 && ne.nodeType !== 3 || (M = N + o), ne.nodeType === 3 && (N += ne.nodeValue.length), (G = ne.firstChild) !== null; )
                Z = ne, ne = G;
              for (; ; ) {
                if (ne === e) break t;
                if (Z === a && ++q === c && (k = N), Z === b && ++K === o && (M = N), (G = ne.nextSibling) !== null) break;
                ne = Z, Z = ne.parentNode;
              }
              ne = G;
            }
            a = k === -1 || M === -1 ? null : { start: k, end: M };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Af = { focusedElem: e, selectionRange: a }, pl = !1, It = n; It !== null; )
      if (n = It, e = n.child, (n.subtreeFlags & 1024) !== 0 && e !== null)
        e.return = n, It = e;
      else
        for (; It !== null; ) {
          switch (n = It, b = n.alternate, e = n.flags, n.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && b !== null) {
                e = void 0, a = n, c = b.memoizedProps, b = b.memoizedState, o = a.stateNode;
                try {
                  var we = Sa(
                    a.type,
                    c,
                    a.elementType === a.type
                  );
                  e = o.getSnapshotBeforeUpdate(
                    we,
                    b
                  ), o.__reactInternalSnapshotBeforeUpdate = e;
                } catch (Se) {
                  rt(
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
            e.return = n.return, It = e;
            break;
          }
          It = n.return;
        }
  }
  function Im(e, n, a) {
    var o = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Ur(e, a), o & 4 && gs(5, a);
        break;
      case 1:
        if (Ur(e, a), o & 4)
          if (e = a.stateNode, n === null)
            try {
              e.componentDidMount();
            } catch (N) {
              rt(a, a.return, N);
            }
          else {
            var c = Sa(
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
            } catch (N) {
              rt(
                a,
                a.return,
                N
              );
            }
          }
        o & 64 && jm(a), o & 512 && vs(a, a.return);
        break;
      case 3:
        if (Ur(e, a), o & 64 && (e = a.updateQueue, e !== null)) {
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
            yp(e, n);
          } catch (N) {
            rt(a, a.return, N);
          }
        }
        break;
      case 27:
        n === null && o & 4 && zm(a);
      case 26:
      case 5:
        Ur(e, a), n === null && o & 4 && Dm(a), o & 512 && vs(a, a.return);
        break;
      case 12:
        Ur(e, a);
        break;
      case 13:
        Ur(e, a), o & 4 && Um(e, a), o & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = e_.bind(
          null,
          a
        ), y_(e, a))));
        break;
      case 22:
        if (o = a.memoizedState !== null || yr, !o) {
          n = n !== null && n.memoizedState !== null || Et, c = yr;
          var b = Et;
          yr = o, (Et = n) && !b ? Hr(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Ur(e, a), yr = c, Et = b;
        }
        break;
      case 30:
        break;
      default:
        Ur(e, a);
    }
  }
  function Pm(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, Pm(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && Ru(n)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var ft = null, on = !1;
  function br(e, n, a) {
    for (a = a.child; a !== null; )
      Bm(e, n, a), a = a.sibling;
  }
  function Bm(e, n, a) {
    if (ie && typeof ie.onCommitFiberUnmount == "function")
      try {
        ie.onCommitFiberUnmount(oe, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        Et || er(a, n), br(
          e,
          n,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        Et || er(a, n);
        var o = ft, c = on;
        Yr(a.type) && (ft = a.stateNode, on = !1), br(
          e,
          n,
          a
        ), Ns(a.stateNode), ft = o, on = c;
        break;
      case 5:
        Et || er(a, n);
      case 6:
        if (o = ft, c = on, ft = null, br(
          e,
          n,
          a
        ), ft = o, on = c, ft !== null)
          if (on)
            try {
              (ft.nodeType === 9 ? ft.body : ft.nodeName === "HTML" ? ft.ownerDocument.body : ft).removeChild(a.stateNode);
            } catch (b) {
              rt(
                a,
                n,
                b
              );
            }
          else
            try {
              ft.removeChild(a.stateNode);
            } catch (b) {
              rt(
                a,
                n,
                b
              );
            }
        break;
      case 18:
        ft !== null && (on ? (e = ft, Ag(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), Rs(e)) : Ag(ft, a.stateNode));
        break;
      case 4:
        o = ft, c = on, ft = a.stateNode.containerInfo, on = !0, br(
          e,
          n,
          a
        ), ft = o, on = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Et || Br(2, a, n), Et || Br(4, a, n), br(
          e,
          n,
          a
        );
        break;
      case 1:
        Et || (er(a, n), o = a.stateNode, typeof o.componentWillUnmount == "function" && Mm(
          a,
          n,
          o
        )), br(
          e,
          n,
          a
        );
        break;
      case 21:
        br(
          e,
          n,
          a
        );
        break;
      case 22:
        Et = (o = Et) || a.memoizedState !== null, br(
          e,
          n,
          a
        ), Et = o;
        break;
      default:
        br(
          e,
          n,
          a
        );
    }
  }
  function Um(e, n) {
    if (n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Rs(e);
      } catch (a) {
        rt(n, n.return, a);
      }
  }
  function Vb(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var n = e.stateNode;
        return n === null && (n = e.stateNode = new Lm()), n;
      case 22:
        return e = e.stateNode, n = e._retryCache, n === null && (n = e._retryCache = new Lm()), n;
      default:
        throw Error(s(435, e.tag));
    }
  }
  function nf(e, n) {
    var a = Vb(e);
    n.forEach(function(o) {
      var c = t_.bind(null, e, o);
      a.has(o) || (a.add(o), o.then(c, c));
    });
  }
  function yn(e, n) {
    var a = n.deletions;
    if (a !== null)
      for (var o = 0; o < a.length; o++) {
        var c = a[o], b = e, N = n, k = N;
        e: for (; k !== null; ) {
          switch (k.tag) {
            case 27:
              if (Yr(k.type)) {
                ft = k.stateNode, on = !1;
                break e;
              }
              break;
            case 5:
              ft = k.stateNode, on = !1;
              break e;
            case 3:
            case 4:
              ft = k.stateNode.containerInfo, on = !0;
              break e;
          }
          k = k.return;
        }
        if (ft === null) throw Error(s(160));
        Bm(b, N, c), ft = null, on = !1, b = c.alternate, b !== null && (b.return = null), c.return = null;
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; )
        Hm(n, e), n = n.sibling;
  }
  var Zn = null;
  function Hm(e, n) {
    var a = e.alternate, o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        yn(n, e), bn(e), o & 4 && (Br(3, e, e.return), gs(3, e), Br(5, e, e.return));
        break;
      case 1:
        yn(n, e), bn(e), o & 512 && (Et || a === null || er(a, a.return)), o & 64 && yr && (e = e.updateQueue, e !== null && (o = e.callbacks, o !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? o : a.concat(o))));
        break;
      case 26:
        var c = Zn;
        if (yn(n, e), bn(e), o & 512 && (Et || a === null || er(a, a.return)), o & 4) {
          var b = a !== null ? a.memoizedState : null;
          if (o = e.memoizedState, a === null)
            if (o === null)
              if (e.stateNode === null) {
                e: {
                  o = e.type, a = e.memoizedProps, c = c.ownerDocument || c;
                  t: switch (o) {
                    case "title":
                      b = c.getElementsByTagName("title")[0], (!b || b[Hi] || b[Zt] || b.namespaceURI === "http://www.w3.org/2000/svg" || b.hasAttribute("itemprop")) && (b = c.createElement(o), c.head.insertBefore(
                        b,
                        c.querySelector("head > title")
                      )), Ht(b, o, a), b[Zt] = e, zt(b), o = b;
                      break e;
                    case "link":
                      var N = zg(
                        "link",
                        "href",
                        c
                      ).get(o + (a.href || ""));
                      if (N) {
                        for (var k = 0; k < N.length; k++)
                          if (b = N[k], b.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && b.getAttribute("rel") === (a.rel == null ? null : a.rel) && b.getAttribute("title") === (a.title == null ? null : a.title) && b.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            N.splice(k, 1);
                            break t;
                          }
                      }
                      b = c.createElement(o), Ht(b, o, a), c.head.appendChild(b);
                      break;
                    case "meta":
                      if (N = zg(
                        "meta",
                        "content",
                        c
                      ).get(o + (a.content || ""))) {
                        for (k = 0; k < N.length; k++)
                          if (b = N[k], b.getAttribute("content") === (a.content == null ? null : "" + a.content) && b.getAttribute("name") === (a.name == null ? null : a.name) && b.getAttribute("property") === (a.property == null ? null : a.property) && b.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && b.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            N.splice(k, 1);
                            break t;
                          }
                      }
                      b = c.createElement(o), Ht(b, o, a), c.head.appendChild(b);
                      break;
                    default:
                      throw Error(s(468, o));
                  }
                  b[Zt] = e, zt(b), o = b;
                }
                e.stateNode = o;
              } else
                Lg(
                  c,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Rg(
                c,
                o,
                e.memoizedProps
              );
          else
            b !== o ? (b === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : b.count--, o === null ? Lg(
              c,
              e.type,
              e.stateNode
            ) : Rg(
              c,
              o,
              e.memoizedProps
            )) : o === null && e.stateNode !== null && Kc(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        yn(n, e), bn(e), o & 512 && (Et || a === null || er(a, a.return)), a !== null && o & 4 && Kc(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (yn(n, e), bn(e), o & 512 && (Et || a === null || er(a, a.return)), e.flags & 32) {
          c = e.stateNode;
          try {
            Ya(c, "");
          } catch (G) {
            rt(e, e.return, G);
          }
        }
        o & 4 && e.stateNode != null && (c = e.memoizedProps, Kc(
          e,
          c,
          a !== null ? a.memoizedProps : c
        )), o & 1024 && (tf = !0);
        break;
      case 6:
        if (yn(n, e), bn(e), o & 4) {
          if (e.stateNode === null)
            throw Error(s(162));
          o = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = o;
          } catch (G) {
            rt(e, e.return, G);
          }
        }
        break;
      case 3:
        if (fl = null, c = Zn, Zn = ul(n.containerInfo), yn(n, e), Zn = c, bn(e), o & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            Rs(n.containerInfo);
          } catch (G) {
            rt(e, e.return, G);
          }
        tf && (tf = !1, qm(e));
        break;
      case 4:
        o = Zn, Zn = ul(
          e.stateNode.containerInfo
        ), yn(n, e), bn(e), Zn = o;
        break;
      case 12:
        yn(n, e), bn(e);
        break;
      case 13:
        yn(n, e), bn(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (uf = Xe()), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, nf(e, o)));
        break;
      case 22:
        c = e.memoizedState !== null;
        var M = a !== null && a.memoizedState !== null, q = yr, K = Et;
        if (yr = q || c, Et = K || M, yn(n, e), Et = K, yr = q, bn(e), o & 8192)
          e: for (n = e.stateNode, n._visibility = c ? n._visibility & -2 : n._visibility | 1, c && (a === null || M || yr || Et || xa(e)), a = null, n = e; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (a === null) {
                M = a = n;
                try {
                  if (b = M.stateNode, c)
                    N = b.style, typeof N.setProperty == "function" ? N.setProperty("display", "none", "important") : N.display = "none";
                  else {
                    k = M.stateNode;
                    var ne = M.memoizedProps.style, Z = ne != null && ne.hasOwnProperty("display") ? ne.display : null;
                    k.style.display = Z == null || typeof Z == "boolean" ? "" : ("" + Z).trim();
                  }
                } catch (G) {
                  rt(M, M.return, G);
                }
              }
            } else if (n.tag === 6) {
              if (a === null) {
                M = n;
                try {
                  M.stateNode.nodeValue = c ? "" : M.memoizedProps;
                } catch (G) {
                  rt(M, M.return, G);
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
        o & 4 && (o = e.updateQueue, o !== null && (a = o.retryQueue, a !== null && (o.retryQueue = null, nf(e, a))));
        break;
      case 19:
        yn(n, e), bn(e), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, nf(e, o)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        yn(n, e), bn(e);
    }
  }
  function bn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        for (var a, o = e.return; o !== null; ) {
          if (Rm(o)) {
            a = o;
            break;
          }
          o = o.return;
        }
        if (a == null) throw Error(s(160));
        switch (a.tag) {
          case 27:
            var c = a.stateNode, b = Wc(e);
            Qo(e, b, c);
            break;
          case 5:
            var N = a.stateNode;
            a.flags & 32 && (Ya(N, ""), a.flags &= -33);
            var k = Wc(e);
            Qo(e, k, N);
            break;
          case 3:
          case 4:
            var M = a.stateNode.containerInfo, q = Wc(e);
            ef(
              e,
              q,
              M
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch (K) {
        rt(e, e.return, K);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function qm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var n = e;
        qm(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), e = e.sibling;
      }
  }
  function Ur(e, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        Im(e, n.alternate, n), n = n.sibling;
  }
  function xa(e) {
    for (e = e.child; e !== null; ) {
      var n = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Br(4, n, n.return), xa(n);
          break;
        case 1:
          er(n, n.return);
          var a = n.stateNode;
          typeof a.componentWillUnmount == "function" && Mm(
            n,
            n.return,
            a
          ), xa(n);
          break;
        case 27:
          Ns(n.stateNode);
        case 26:
        case 5:
          er(n, n.return), xa(n);
          break;
        case 22:
          n.memoizedState === null && xa(n);
          break;
        case 30:
          xa(n);
          break;
        default:
          xa(n);
      }
      e = e.sibling;
    }
  }
  function Hr(e, n, a) {
    for (a = a && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var o = n.alternate, c = e, b = n, N = b.flags;
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
          Hr(
            c,
            b,
            a
          ), gs(4, b);
          break;
        case 1:
          if (Hr(
            c,
            b,
            a
          ), o = b, c = o.stateNode, typeof c.componentDidMount == "function")
            try {
              c.componentDidMount();
            } catch (q) {
              rt(o, o.return, q);
            }
          if (o = b, c = o.updateQueue, c !== null) {
            var k = o.stateNode;
            try {
              var M = c.shared.hiddenCallbacks;
              if (M !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < M.length; c++)
                  vp(M[c], k);
            } catch (q) {
              rt(o, o.return, q);
            }
          }
          a && N & 64 && jm(b), vs(b, b.return);
          break;
        case 27:
          zm(b);
        case 26:
        case 5:
          Hr(
            c,
            b,
            a
          ), a && o === null && N & 4 && Dm(b), vs(b, b.return);
          break;
        case 12:
          Hr(
            c,
            b,
            a
          );
          break;
        case 13:
          Hr(
            c,
            b,
            a
          ), a && N & 4 && Um(c, b);
          break;
        case 22:
          b.memoizedState === null && Hr(
            c,
            b,
            a
          ), vs(b, b.return);
          break;
        case 30:
          break;
        default:
          Hr(
            c,
            b,
            a
          );
      }
      n = n.sibling;
    }
  }
  function rf(e, n) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (e = n.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && ns(a));
  }
  function af(e, n) {
    e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && ns(e));
  }
  function tr(e, n, a, o) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        Fm(
          e,
          n,
          a,
          o
        ), n = n.sibling;
  }
  function Fm(e, n, a, o) {
    var c = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        tr(
          e,
          n,
          a,
          o
        ), c & 2048 && gs(9, n);
        break;
      case 1:
        tr(
          e,
          n,
          a,
          o
        );
        break;
      case 3:
        tr(
          e,
          n,
          a,
          o
        ), c & 2048 && (e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && ns(e)));
        break;
      case 12:
        if (c & 2048) {
          tr(
            e,
            n,
            a,
            o
          ), e = n.stateNode;
          try {
            var b = n.memoizedProps, N = b.id, k = b.onPostCommit;
            typeof k == "function" && k(
              N,
              n.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (M) {
            rt(n, n.return, M);
          }
        } else
          tr(
            e,
            n,
            a,
            o
          );
        break;
      case 13:
        tr(
          e,
          n,
          a,
          o
        );
        break;
      case 23:
        break;
      case 22:
        b = n.stateNode, N = n.alternate, n.memoizedState !== null ? b._visibility & 2 ? tr(
          e,
          n,
          a,
          o
        ) : ys(e, n) : b._visibility & 2 ? tr(
          e,
          n,
          a,
          o
        ) : (b._visibility |= 2, di(
          e,
          n,
          a,
          o,
          (n.subtreeFlags & 10256) !== 0
        )), c & 2048 && rf(N, n);
        break;
      case 24:
        tr(
          e,
          n,
          a,
          o
        ), c & 2048 && af(n.alternate, n);
        break;
      default:
        tr(
          e,
          n,
          a,
          o
        );
    }
  }
  function di(e, n, a, o, c) {
    for (c = c && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var b = e, N = n, k = a, M = o, q = N.flags;
      switch (N.tag) {
        case 0:
        case 11:
        case 15:
          di(
            b,
            N,
            k,
            M,
            c
          ), gs(8, N);
          break;
        case 23:
          break;
        case 22:
          var K = N.stateNode;
          N.memoizedState !== null ? K._visibility & 2 ? di(
            b,
            N,
            k,
            M,
            c
          ) : ys(
            b,
            N
          ) : (K._visibility |= 2, di(
            b,
            N,
            k,
            M,
            c
          )), c && q & 2048 && rf(
            N.alternate,
            N
          );
          break;
        case 24:
          di(
            b,
            N,
            k,
            M,
            c
          ), c && q & 2048 && af(N.alternate, N);
          break;
        default:
          di(
            b,
            N,
            k,
            M,
            c
          );
      }
      n = n.sibling;
    }
  }
  function ys(e, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var a = e, o = n, c = o.flags;
        switch (o.tag) {
          case 22:
            ys(a, o), c & 2048 && rf(
              o.alternate,
              o
            );
            break;
          case 24:
            ys(a, o), c & 2048 && af(o.alternate, o);
            break;
          default:
            ys(a, o);
        }
        n = n.sibling;
      }
  }
  var bs = 8192;
  function hi(e) {
    if (e.subtreeFlags & bs)
      for (e = e.child; e !== null; )
        Zm(e), e = e.sibling;
  }
  function Zm(e) {
    switch (e.tag) {
      case 26:
        hi(e), e.flags & bs && e.memoizedState !== null && j_(
          Zn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        hi(e);
        break;
      case 3:
      case 4:
        var n = Zn;
        Zn = ul(e.stateNode.containerInfo), hi(e), Zn = n;
        break;
      case 22:
        e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = bs, bs = 16777216, hi(e), bs = n) : hi(e));
        break;
      default:
        hi(e);
    }
  }
  function Gm(e) {
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
          var o = n[a];
          It = o, Ym(
            o,
            e
          );
        }
      Gm(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Vm(e), e = e.sibling;
  }
  function Vm(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        _s(e), e.flags & 2048 && Br(9, e, e.return);
        break;
      case 3:
        _s(e);
        break;
      case 12:
        _s(e);
        break;
      case 22:
        var n = e.stateNode;
        e.memoizedState !== null && n._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (n._visibility &= -3, Jo(e)) : _s(e);
        break;
      default:
        _s(e);
    }
  }
  function Jo(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var a = 0; a < n.length; a++) {
          var o = n[a];
          It = o, Ym(
            o,
            e
          );
        }
      Gm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (n = e, n.tag) {
        case 0:
        case 11:
        case 15:
          Br(8, n, n.return), Jo(n);
          break;
        case 22:
          a = n.stateNode, a._visibility & 2 && (a._visibility &= -3, Jo(n));
          break;
        default:
          Jo(n);
      }
      e = e.sibling;
    }
  }
  function Ym(e, n) {
    for (; It !== null; ) {
      var a = It;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Br(8, a, n);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var o = a.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          ns(a.memoizedState.cache);
      }
      if (o = a.child, o !== null) o.return = a, It = o;
      else
        e: for (a = e; It !== null; ) {
          o = It;
          var c = o.sibling, b = o.return;
          if (Pm(o), o === a) {
            It = null;
            break e;
          }
          if (c !== null) {
            c.return = b, It = c;
            break e;
          }
          It = b;
        }
    }
  }
  var Yb = {
    getCacheForType: function(e) {
      var n = Gt(jt), a = n.data.get(e);
      return a === void 0 && (a = e(), n.data.set(e, a)), a;
    }
  }, $b = typeof WeakMap == "function" ? WeakMap : Map, Je = 0, ot = null, Le = null, Fe = 0, Ke = 0, _n = null, qr = !1, pi = !1, sf = !1, _r = 0, bt = 0, Fr = 0, Ea = 0, of = 0, Ln = 0, mi = 0, Ss = null, ln = null, lf = !1, uf = 0, Ko = 1 / 0, Wo = null, Zr = null, Ut = 0, Gr = null, gi = null, vi = 0, cf = 0, ff = null, $m = null, xs = 0, df = null;
  function Sn() {
    if ((Je & 2) !== 0 && Fe !== 0)
      return Fe & -Fe;
    if (L.T !== null) {
      var e = ai;
      return e !== 0 ? e : bf();
    }
    return ch();
  }
  function Xm() {
    Ln === 0 && (Ln = (Fe & 536870912) === 0 || Qe ? Ba() : 536870912);
    var e = zn.current;
    return e !== null && (e.flags |= 32), Ln;
  }
  function xn(e, n, a) {
    (e === ot && (Ke === 2 || Ke === 9) || e.cancelPendingCommit !== null) && (yi(e, 0), Vr(
      e,
      Fe,
      Ln,
      !1
    )), Ui(e, a), ((Je & 2) === 0 || e !== ot) && (e === ot && ((Je & 2) === 0 && (Ea |= a), bt === 4 && Vr(
      e,
      Fe,
      Ln,
      !1
    )), nr(e));
  }
  function Qm(e, n, a) {
    if ((Je & 6) !== 0) throw Error(s(327));
    var o = !a && (n & 124) === 0 && (n & e.expiredLanes) === 0 || nn(e, n), c = o ? Jb(e, n) : mf(e, n, !0), b = o;
    do {
      if (c === 0) {
        pi && !o && Vr(e, n, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, b && !Xb(a)) {
          c = mf(e, n, !1), b = !1;
          continue;
        }
        if (c === 2) {
          if (b = n, e.errorRecoveryDisabledLanes & b)
            var N = 0;
          else
            N = e.pendingLanes & -536870913, N = N !== 0 ? N : N & 536870912 ? 536870912 : 0;
          if (N !== 0) {
            n = N;
            e: {
              var k = e;
              c = Ss;
              var M = k.current.memoizedState.isDehydrated;
              if (M && (yi(k, N).flags |= 256), N = mf(
                k,
                N,
                !1
              ), N !== 2) {
                if (sf && !M) {
                  k.errorRecoveryDisabledLanes |= b, Ea |= b, c = 4;
                  break e;
                }
                b = ln, ln = c, b !== null && (ln === null ? ln = b : ln.push.apply(
                  ln,
                  b
                ));
              }
              c = N;
            }
            if (b = !1, c !== 2) continue;
          }
        }
        if (c === 1) {
          yi(e, 0), Vr(e, n, 0, !0);
          break;
        }
        e: {
          switch (o = e, b = c, b) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              Vr(
                o,
                n,
                Ln,
                !qr
              );
              break e;
            case 2:
              ln = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((n & 62914560) === n && (c = uf + 300 - Xe(), 10 < c)) {
            if (Vr(
              o,
              n,
              Ln,
              !qr
            ), st(o, 0, !0) !== 0) break e;
            o.timeoutHandle = Cg(
              Jm.bind(
                null,
                o,
                a,
                ln,
                Wo,
                lf,
                n,
                Ln,
                Ea,
                mi,
                qr,
                b,
                2,
                -0,
                0
              ),
              c
            );
            break e;
          }
          Jm(
            o,
            a,
            ln,
            Wo,
            lf,
            n,
            Ln,
            Ea,
            mi,
            qr,
            b,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    nr(e);
  }
  function Jm(e, n, a, o, c, b, N, k, M, q, K, ne, Z, G) {
    if (e.timeoutHandle = -1, ne = n.subtreeFlags, (ne & 8192 || (ne & 16785408) === 16785408) && (Os = { stylesheets: null, count: 0, unsuspend: k_ }, Zm(n), ne = M_(), ne !== null)) {
      e.cancelPendingCommit = ne(
        ag.bind(
          null,
          e,
          n,
          b,
          a,
          o,
          c,
          N,
          k,
          M,
          K,
          1,
          Z,
          G
        )
      ), Vr(e, b, N, !q);
      return;
    }
    ag(
      e,
      n,
      b,
      a,
      o,
      c,
      N,
      k,
      M
    );
  }
  function Xb(e) {
    for (var n = e; ; ) {
      var a = n.tag;
      if ((a === 0 || a === 11 || a === 15) && n.flags & 16384 && (a = n.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var o = 0; o < a.length; o++) {
          var c = a[o], b = c.getSnapshot;
          c = c.value;
          try {
            if (!gn(b(), c)) return !1;
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
  function Vr(e, n, a, o) {
    n &= ~of, n &= ~Ea, e.suspendedLanes |= n, e.pingedLanes &= ~n, o && (e.warmLanes |= n), o = e.expirationTimes;
    for (var c = n; 0 < c; ) {
      var b = 31 - Be(c), N = 1 << b;
      o[b] = -1, c &= ~N;
    }
    a !== 0 && lh(e, a, n);
  }
  function el() {
    return (Je & 6) === 0 ? (Es(0), !1) : !0;
  }
  function hf() {
    if (Le !== null) {
      if (Ke === 0)
        var e = Le.return;
      else
        e = Le, dr = va = null, Oc(e), ci = null, hs = 0, e = Le;
      for (; e !== null; )
        km(e.alternate, e), e = e.return;
      Le = null;
    }
  }
  function yi(e, n) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, h_(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), hf(), ot = e, Le = a = ur(e.current, null), Fe = n, Ke = 0, _n = null, qr = !1, pi = nn(e, n), sf = !1, mi = Ln = of = Ea = Fr = bt = 0, ln = Ss = null, lf = !1, (n & 8) !== 0 && (n |= n & 32);
    var o = e.entangledLanes;
    if (o !== 0)
      for (e = e.entanglements, o &= n; 0 < o; ) {
        var c = 31 - Be(o), b = 1 << c;
        n |= e[c], o &= ~b;
      }
    return _r = n, xo(), a;
  }
  function Km(e, n) {
    Me = null, L.H = Ho, n === as || n === jo ? (n = mp(), Ke = 3) : n === dp ? (n = mp(), Ke = 4) : Ke = n === gm ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, _n = n, Le === null && (bt = 1, Vo(
      e,
      jn(n, e.current)
    ));
  }
  function Wm() {
    var e = L.H;
    return L.H = Ho, e === null ? Ho : e;
  }
  function eg() {
    var e = L.A;
    return L.A = Yb, e;
  }
  function pf() {
    bt = 4, qr || (Fe & 4194048) !== Fe && zn.current !== null || (pi = !0), (Fr & 134217727) === 0 && (Ea & 134217727) === 0 || ot === null || Vr(
      ot,
      Fe,
      Ln,
      !1
    );
  }
  function mf(e, n, a) {
    var o = Je;
    Je |= 2;
    var c = Wm(), b = eg();
    (ot !== e || Fe !== n) && (Wo = null, yi(e, n)), n = !1;
    var N = bt;
    e: do
      try {
        if (Ke !== 0 && Le !== null) {
          var k = Le, M = _n;
          switch (Ke) {
            case 8:
              hf(), N = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              zn.current === null && (n = !0);
              var q = Ke;
              if (Ke = 0, _n = null, bi(e, k, M, q), a && pi) {
                N = 0;
                break e;
              }
              break;
            default:
              q = Ke, Ke = 0, _n = null, bi(e, k, M, q);
          }
        }
        Qb(), N = bt;
        break;
      } catch (K) {
        Km(e, K);
      }
    while (!0);
    return n && e.shellSuspendCounter++, dr = va = null, Je = o, L.H = c, L.A = b, Le === null && (ot = null, Fe = 0, xo()), N;
  }
  function Qb() {
    for (; Le !== null; ) tg(Le);
  }
  function Jb(e, n) {
    var a = Je;
    Je |= 2;
    var o = Wm(), c = eg();
    ot !== e || Fe !== n ? (Wo = null, Ko = Xe() + 500, yi(e, n)) : pi = nn(
      e,
      n
    );
    e: do
      try {
        if (Ke !== 0 && Le !== null) {
          n = Le;
          var b = _n;
          t: switch (Ke) {
            case 1:
              Ke = 0, _n = null, bi(e, n, b, 1);
              break;
            case 2:
            case 9:
              if (hp(b)) {
                Ke = 0, _n = null, ng(n);
                break;
              }
              n = function() {
                Ke !== 2 && Ke !== 9 || ot !== e || (Ke = 7), nr(e);
              }, b.then(n, n);
              break e;
            case 3:
              Ke = 7;
              break e;
            case 4:
              Ke = 5;
              break e;
            case 7:
              hp(b) ? (Ke = 0, _n = null, ng(n)) : (Ke = 0, _n = null, bi(e, n, b, 7));
              break;
            case 5:
              var N = null;
              switch (Le.tag) {
                case 26:
                  N = Le.memoizedState;
                case 5:
                case 27:
                  var k = Le;
                  if (!N || Ig(N)) {
                    Ke = 0, _n = null;
                    var M = k.sibling;
                    if (M !== null) Le = M;
                    else {
                      var q = k.return;
                      q !== null ? (Le = q, tl(q)) : Le = null;
                    }
                    break t;
                  }
              }
              Ke = 0, _n = null, bi(e, n, b, 5);
              break;
            case 6:
              Ke = 0, _n = null, bi(e, n, b, 6);
              break;
            case 8:
              hf(), bt = 6;
              break e;
            default:
              throw Error(s(462));
          }
        }
        Kb();
        break;
      } catch (K) {
        Km(e, K);
      }
    while (!0);
    return dr = va = null, L.H = o, L.A = c, Je = a, Le !== null ? 0 : (ot = null, Fe = 0, xo(), bt);
  }
  function Kb() {
    for (; Le !== null && !tn(); )
      tg(Le);
  }
  function tg(e) {
    var n = Tm(e.alternate, e, _r);
    e.memoizedProps = e.pendingProps, n === null ? tl(e) : Le = n;
  }
  function ng(e) {
    var n = e, a = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = xm(
          a,
          n,
          n.pendingProps,
          n.type,
          void 0,
          Fe
        );
        break;
      case 11:
        n = xm(
          a,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          Fe
        );
        break;
      case 5:
        Oc(n);
      default:
        km(a, n), n = Le = rp(n, _r), n = Tm(a, n, _r);
    }
    e.memoizedProps = e.pendingProps, n === null ? tl(e) : Le = n;
  }
  function bi(e, n, a, o) {
    dr = va = null, Oc(n), ci = null, hs = 0;
    var c = n.return;
    try {
      if (Hb(
        e,
        c,
        n,
        a,
        Fe
      )) {
        bt = 1, Vo(
          e,
          jn(a, e.current)
        ), Le = null;
        return;
      }
    } catch (b) {
      if (c !== null) throw Le = c, b;
      bt = 1, Vo(
        e,
        jn(a, e.current)
      ), Le = null;
      return;
    }
    n.flags & 32768 ? (Qe || o === 1 ? e = !0 : pi || (Fe & 536870912) !== 0 ? e = !1 : (qr = e = !0, (o === 2 || o === 9 || o === 3 || o === 6) && (o = zn.current, o !== null && o.tag === 13 && (o.flags |= 16384))), rg(n, e)) : tl(n);
  }
  function tl(e) {
    var n = e;
    do {
      if ((n.flags & 32768) !== 0) {
        rg(
          n,
          qr
        );
        return;
      }
      e = n.return;
      var a = Fb(
        n.alternate,
        n,
        _r
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
    bt === 0 && (bt = 5);
  }
  function rg(e, n) {
    do {
      var a = Zb(e.alternate, e);
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
    bt = 6, Le = null;
  }
  function ag(e, n, a, o, c, b, N, k, M) {
    e.cancelPendingCommit = null;
    do
      nl();
    while (Ut !== 0);
    if ((Je & 6) !== 0) throw Error(s(327));
    if (n !== null) {
      if (n === e.current) throw Error(s(177));
      if (b = n.lanes | n.childLanes, b |= ac, k1(
        e,
        a,
        b,
        N,
        k,
        M
      ), e === ot && (Le = ot = null, Fe = 0), gi = n, Gr = e, vi = a, cf = b, ff = c, $m = o, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, n_(pe, function() {
        return ug(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), o = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || o) {
        o = L.T, L.T = null, c = ae.p, ae.p = 2, N = Je, Je |= 4;
        try {
          Gb(e, n, a);
        } finally {
          Je = N, ae.p = c, L.T = o;
        }
      }
      Ut = 1, ig(), sg(), og();
    }
  }
  function ig() {
    if (Ut === 1) {
      Ut = 0;
      var e = Gr, n = gi, a = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || a) {
        a = L.T, L.T = null;
        var o = ae.p;
        ae.p = 2;
        var c = Je;
        Je |= 4;
        try {
          Hm(n, e);
          var b = Af, N = Yh(e.containerInfo), k = b.focusedElem, M = b.selectionRange;
          if (N !== k && k && k.ownerDocument && Vh(
            k.ownerDocument.documentElement,
            k
          )) {
            if (M !== null && Wu(k)) {
              var q = M.start, K = M.end;
              if (K === void 0 && (K = q), "selectionStart" in k)
                k.selectionStart = q, k.selectionEnd = Math.min(
                  K,
                  k.value.length
                );
              else {
                var ne = k.ownerDocument || document, Z = ne && ne.defaultView || window;
                if (Z.getSelection) {
                  var G = Z.getSelection(), we = k.textContent.length, Se = Math.min(M.start, we), nt = M.end === void 0 ? Se : Math.min(M.end, we);
                  !G.extend && Se > nt && (N = nt, nt = Se, Se = N);
                  var I = Gh(
                    k,
                    Se
                  ), z = Gh(
                    k,
                    nt
                  );
                  if (I && z && (G.rangeCount !== 1 || G.anchorNode !== I.node || G.anchorOffset !== I.offset || G.focusNode !== z.node || G.focusOffset !== z.offset)) {
                    var U = ne.createRange();
                    U.setStart(I.node, I.offset), G.removeAllRanges(), Se > nt ? (G.addRange(U), G.extend(z.node, z.offset)) : (U.setEnd(z.node, z.offset), G.addRange(U));
                  }
                }
              }
            }
            for (ne = [], G = k; G = G.parentNode; )
              G.nodeType === 1 && ne.push({
                element: G,
                left: G.scrollLeft,
                top: G.scrollTop
              });
            for (typeof k.focus == "function" && k.focus(), k = 0; k < ne.length; k++) {
              var ee = ne[k];
              ee.element.scrollLeft = ee.left, ee.element.scrollTop = ee.top;
            }
          }
          pl = !!Nf, Af = Nf = null;
        } finally {
          Je = c, ae.p = o, L.T = a;
        }
      }
      e.current = n, Ut = 2;
    }
  }
  function sg() {
    if (Ut === 2) {
      Ut = 0;
      var e = Gr, n = gi, a = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || a) {
        a = L.T, L.T = null;
        var o = ae.p;
        ae.p = 2;
        var c = Je;
        Je |= 4;
        try {
          Im(e, n.alternate, n);
        } finally {
          Je = c, ae.p = o, L.T = a;
        }
      }
      Ut = 3;
    }
  }
  function og() {
    if (Ut === 4 || Ut === 3) {
      Ut = 0, Ze();
      var e = Gr, n = gi, a = vi, o = $m;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? Ut = 5 : (Ut = 0, gi = Gr = null, lg(e, e.pendingLanes));
      var c = e.pendingLanes;
      if (c === 0 && (Zr = null), Mu(a), n = n.stateNode, ie && typeof ie.onCommitFiberRoot == "function")
        try {
          ie.onCommitFiberRoot(
            oe,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (o !== null) {
        n = L.T, c = ae.p, ae.p = 2, L.T = null;
        try {
          for (var b = e.onRecoverableError, N = 0; N < o.length; N++) {
            var k = o[N];
            b(k.value, {
              componentStack: k.stack
            });
          }
        } finally {
          L.T = n, ae.p = c;
        }
      }
      (vi & 3) !== 0 && nl(), nr(e), c = e.pendingLanes, (a & 4194090) !== 0 && (c & 42) !== 0 ? e === df ? xs++ : (xs = 0, df = e) : xs = 0, Es(0);
    }
  }
  function lg(e, n) {
    (e.pooledCacheLanes &= n) === 0 && (n = e.pooledCache, n != null && (e.pooledCache = null, ns(n)));
  }
  function nl(e) {
    return ig(), sg(), og(), ug();
  }
  function ug() {
    if (Ut !== 5) return !1;
    var e = Gr, n = cf;
    cf = 0;
    var a = Mu(vi), o = L.T, c = ae.p;
    try {
      ae.p = 32 > a ? 32 : a, L.T = null, a = ff, ff = null;
      var b = Gr, N = vi;
      if (Ut = 0, gi = Gr = null, vi = 0, (Je & 6) !== 0) throw Error(s(331));
      var k = Je;
      if (Je |= 4, Vm(b.current), Fm(
        b,
        b.current,
        N,
        a
      ), Je = k, Es(0, !1), ie && typeof ie.onPostCommitFiberRoot == "function")
        try {
          ie.onPostCommitFiberRoot(oe, b);
        } catch {
        }
      return !0;
    } finally {
      ae.p = c, L.T = o, lg(e, n);
    }
  }
  function cg(e, n, a) {
    n = jn(a, n), n = Fc(e.stateNode, n, 2), e = zr(e, n, 2), e !== null && (Ui(e, 2), nr(e));
  }
  function rt(e, n, a) {
    if (e.tag === 3)
      cg(e, e, a);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          cg(
            n,
            e,
            a
          );
          break;
        } else if (n.tag === 1) {
          var o = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Zr === null || !Zr.has(o))) {
            e = jn(a, e), a = pm(2), o = zr(n, a, 2), o !== null && (mm(
              a,
              o,
              n,
              e
            ), Ui(o, 2), nr(o));
            break;
          }
        }
        n = n.return;
      }
  }
  function gf(e, n, a) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new $b();
      var c = /* @__PURE__ */ new Set();
      o.set(n, c);
    } else
      c = o.get(n), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(n, c));
    c.has(a) || (sf = !0, c.add(a), e = Wb.bind(null, e, n, a), n.then(e, e));
  }
  function Wb(e, n, a) {
    var o = e.pingCache;
    o !== null && o.delete(n), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, ot === e && (Fe & a) === a && (bt === 4 || bt === 3 && (Fe & 62914560) === Fe && 300 > Xe() - uf ? (Je & 2) === 0 && yi(e, 0) : of |= a, mi === Fe && (mi = 0)), nr(e);
  }
  function fg(e, n) {
    n === 0 && (n = oh()), e = ei(e, n), e !== null && (Ui(e, n), nr(e));
  }
  function e_(e) {
    var n = e.memoizedState, a = 0;
    n !== null && (a = n.retryLane), fg(e, a);
  }
  function t_(e, n) {
    var a = 0;
    switch (e.tag) {
      case 13:
        var o = e.stateNode, c = e.memoizedState;
        c !== null && (a = c.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      case 22:
        o = e.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    o !== null && o.delete(n), fg(e, a);
  }
  function n_(e, n) {
    return qn(e, n);
  }
  var rl = null, _i = null, vf = !1, al = !1, yf = !1, wa = 0;
  function nr(e) {
    e !== _i && e.next === null && (_i === null ? rl = _i = e : _i = _i.next = e), al = !0, vf || (vf = !0, a_());
  }
  function Es(e, n) {
    if (!yf && al) {
      yf = !0;
      do
        for (var a = !1, o = rl; o !== null; ) {
          if (e !== 0) {
            var c = o.pendingLanes;
            if (c === 0) var b = 0;
            else {
              var N = o.suspendedLanes, k = o.pingedLanes;
              b = (1 << 31 - Be(42 | e) + 1) - 1, b &= c & ~(N & ~k), b = b & 201326741 ? b & 201326741 | 1 : b ? b | 2 : 0;
            }
            b !== 0 && (a = !0, mg(o, b));
          } else
            b = Fe, b = st(
              o,
              o === ot ? b : 0,
              o.cancelPendingCommit !== null || o.timeoutHandle !== -1
            ), (b & 3) === 0 || nn(o, b) || (a = !0, mg(o, b));
          o = o.next;
        }
      while (a);
      yf = !1;
    }
  }
  function r_() {
    dg();
  }
  function dg() {
    al = vf = !1;
    var e = 0;
    wa !== 0 && (d_() && (e = wa), wa = 0);
    for (var n = Xe(), a = null, o = rl; o !== null; ) {
      var c = o.next, b = hg(o, n);
      b === 0 ? (o.next = null, a === null ? rl = c : a.next = c, c === null && (_i = a)) : (a = o, (e !== 0 || (b & 3) !== 0) && (al = !0)), o = c;
    }
    Es(e);
  }
  function hg(e, n) {
    for (var a = e.suspendedLanes, o = e.pingedLanes, c = e.expirationTimes, b = e.pendingLanes & -62914561; 0 < b; ) {
      var N = 31 - Be(b), k = 1 << N, M = c[N];
      M === -1 ? ((k & a) === 0 || (k & o) !== 0) && (c[N] = uo(k, n)) : M <= n && (e.expiredLanes |= k), b &= ~k;
    }
    if (n = ot, a = Fe, a = st(
      e,
      e === n ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o = e.callbackNode, a === 0 || e === n && (Ke === 2 || Ke === 9) || e.cancelPendingCommit !== null)
      return o !== null && o !== null && kt(o), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || nn(e, a)) {
      if (n = a & -a, n === e.callbackPriority) return n;
      switch (o !== null && kt(o), Mu(a)) {
        case 2:
        case 8:
          a = me;
          break;
        case 32:
          a = pe;
          break;
        case 268435456:
          a = He;
          break;
        default:
          a = pe;
      }
      return o = pg.bind(null, e), a = qn(a, o), e.callbackPriority = n, e.callbackNode = a, n;
    }
    return o !== null && o !== null && kt(o), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function pg(e, n) {
    if (Ut !== 0 && Ut !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (nl() && e.callbackNode !== a)
      return null;
    var o = Fe;
    return o = st(
      e,
      e === ot ? o : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o === 0 ? null : (Qm(e, o, n), hg(e, Xe()), e.callbackNode != null && e.callbackNode === a ? pg.bind(null, e) : null);
  }
  function mg(e, n) {
    if (nl()) return null;
    Qm(e, n, !0);
  }
  function a_() {
    p_(function() {
      (Je & 6) !== 0 ? qn(
        We,
        r_
      ) : dg();
    });
  }
  function bf() {
    return wa === 0 && (wa = Ba()), wa;
  }
  function gg(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : mo("" + e);
  }
  function vg(e, n) {
    var a = n.ownerDocument.createElement("input");
    return a.name = n.name, a.value = n.value, e.id && a.setAttribute("form", e.id), n.parentNode.insertBefore(a, n), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function i_(e, n, a, o, c) {
    if (n === "submit" && a && a.stateNode === c) {
      var b = gg(
        (c[rn] || null).action
      ), N = o.submitter;
      N && (n = (n = N[rn] || null) ? gg(n.formAction) : N.getAttribute("formAction"), n !== null && (b = n, N = null));
      var k = new bo(
        "action",
        "action",
        null,
        o,
        c
      );
      e.push({
        event: k,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (o.defaultPrevented) {
                if (wa !== 0) {
                  var M = N ? vg(c, N) : new FormData(c);
                  Pc(
                    a,
                    {
                      pending: !0,
                      data: M,
                      method: c.method,
                      action: b
                    },
                    null,
                    M
                  );
                }
              } else
                typeof b == "function" && (k.preventDefault(), M = N ? vg(c, N) : new FormData(c), Pc(
                  a,
                  {
                    pending: !0,
                    data: M,
                    method: c.method,
                    action: b
                  },
                  b,
                  M
                ));
            },
            currentTarget: c
          }
        ]
      });
    }
  }
  for (var _f = 0; _f < rc.length; _f++) {
    var Sf = rc[_f], s_ = Sf.toLowerCase(), o_ = Sf[0].toUpperCase() + Sf.slice(1);
    Fn(
      s_,
      "on" + o_
    );
  }
  Fn(Qh, "onAnimationEnd"), Fn(Jh, "onAnimationIteration"), Fn(Kh, "onAnimationStart"), Fn("dblclick", "onDoubleClick"), Fn("focusin", "onFocus"), Fn("focusout", "onBlur"), Fn(wb, "onTransitionRun"), Fn(Cb, "onTransitionStart"), Fn(Nb, "onTransitionCancel"), Fn(Wh, "onTransitionEnd"), Za("onMouseEnter", ["mouseout", "mouseover"]), Za("onMouseLeave", ["mouseout", "mouseover"]), Za("onPointerEnter", ["pointerout", "pointerover"]), Za("onPointerLeave", ["pointerout", "pointerover"]), la(
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
  var ws = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), l_ = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ws)
  );
  function yg(e, n) {
    n = (n & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var o = e[a], c = o.event;
      o = o.listeners;
      e: {
        var b = void 0;
        if (n)
          for (var N = o.length - 1; 0 <= N; N--) {
            var k = o[N], M = k.instance, q = k.currentTarget;
            if (k = k.listener, M !== b && c.isPropagationStopped())
              break e;
            b = k, c.currentTarget = q;
            try {
              b(c);
            } catch (K) {
              Go(K);
            }
            c.currentTarget = null, b = M;
          }
        else
          for (N = 0; N < o.length; N++) {
            if (k = o[N], M = k.instance, q = k.currentTarget, k = k.listener, M !== b && c.isPropagationStopped())
              break e;
            b = k, c.currentTarget = q;
            try {
              b(c);
            } catch (K) {
              Go(K);
            }
            c.currentTarget = null, b = M;
          }
      }
    }
  }
  function Ie(e, n) {
    var a = n[Du];
    a === void 0 && (a = n[Du] = /* @__PURE__ */ new Set());
    var o = e + "__bubble";
    a.has(o) || (bg(n, e, 2, !1), a.add(o));
  }
  function xf(e, n, a) {
    var o = 0;
    n && (o |= 4), bg(
      a,
      e,
      o,
      n
    );
  }
  var il = "_reactListening" + Math.random().toString(36).slice(2);
  function Ef(e) {
    if (!e[il]) {
      e[il] = !0, dh.forEach(function(a) {
        a !== "selectionchange" && (l_.has(a) || xf(a, !1, e), xf(a, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[il] || (n[il] = !0, xf("selectionchange", !1, n));
    }
  }
  function bg(e, n, a, o) {
    switch (Fg(n)) {
      case 2:
        var c = z_;
        break;
      case 8:
        c = L_;
        break;
      default:
        c = If;
    }
    a = c.bind(
      null,
      n,
      a,
      e
    ), c = void 0, !Zu || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (c = !0), o ? c !== void 0 ? e.addEventListener(n, a, {
      capture: !0,
      passive: c
    }) : e.addEventListener(n, a, !0) : c !== void 0 ? e.addEventListener(n, a, {
      passive: c
    }) : e.addEventListener(n, a, !1);
  }
  function wf(e, n, a, o, c) {
    var b = o;
    if ((n & 1) === 0 && (n & 2) === 0 && o !== null)
      e: for (; ; ) {
        if (o === null) return;
        var N = o.tag;
        if (N === 3 || N === 4) {
          var k = o.stateNode.containerInfo;
          if (k === c) break;
          if (N === 4)
            for (N = o.return; N !== null; ) {
              var M = N.tag;
              if ((M === 3 || M === 4) && N.stateNode.containerInfo === c)
                return;
              N = N.return;
            }
          for (; k !== null; ) {
            if (N = Ha(k), N === null) return;
            if (M = N.tag, M === 5 || M === 6 || M === 26 || M === 27) {
              o = b = N;
              continue e;
            }
            k = k.parentNode;
          }
        }
        o = o.return;
      }
    Nh(function() {
      var q = b, K = qu(a), ne = [];
      e: {
        var Z = ep.get(e);
        if (Z !== void 0) {
          var G = bo, we = e;
          switch (e) {
            case "keypress":
              if (vo(a) === 0) break e;
            case "keydown":
            case "keyup":
              G = nb;
              break;
            case "focusin":
              we = "focus", G = $u;
              break;
            case "focusout":
              we = "blur", G = $u;
              break;
            case "beforeblur":
            case "afterblur":
              G = $u;
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
              G = Oh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              G = Z1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              G = ib;
              break;
            case Qh:
            case Jh:
            case Kh:
              G = Y1;
              break;
            case Wh:
              G = ob;
              break;
            case "scroll":
            case "scrollend":
              G = q1;
              break;
            case "wheel":
              G = ub;
              break;
            case "copy":
            case "cut":
            case "paste":
              G = X1;
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
              G = fb;
          }
          var Se = (n & 4) !== 0, nt = !Se && (e === "scroll" || e === "scrollend"), I = Se ? Z !== null ? Z + "Capture" : null : Z;
          Se = [];
          for (var z = q, U; z !== null; ) {
            var ee = z;
            if (U = ee.stateNode, ee = ee.tag, ee !== 5 && ee !== 26 && ee !== 27 || U === null || I === null || (ee = Fi(z, I), ee != null && Se.push(
              Cs(z, ee, U)
            )), nt) break;
            z = z.return;
          }
          0 < Se.length && (Z = new G(
            Z,
            we,
            null,
            a,
            K
          ), ne.push({ event: Z, listeners: Se }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (Z = e === "mouseover" || e === "pointerover", G = e === "mouseout" || e === "pointerout", Z && a !== Hu && (we = a.relatedTarget || a.fromElement) && (Ha(we) || we[Ua]))
            break e;
          if ((G || Z) && (Z = K.window === K ? K : (Z = K.ownerDocument) ? Z.defaultView || Z.parentWindow : window, G ? (we = a.relatedTarget || a.toElement, G = q, we = we ? Ha(we) : null, we !== null && (nt = u(we), Se = we.tag, we !== nt || Se !== 5 && Se !== 27 && Se !== 6) && (we = null)) : (G = null, we = q), G !== we)) {
            if (Se = Oh, ee = "onMouseLeave", I = "onMouseEnter", z = "mouse", (e === "pointerout" || e === "pointerover") && (Se = jh, ee = "onPointerLeave", I = "onPointerEnter", z = "pointer"), nt = G == null ? Z : qi(G), U = we == null ? Z : qi(we), Z = new Se(
              ee,
              z + "leave",
              G,
              a,
              K
            ), Z.target = nt, Z.relatedTarget = U, ee = null, Ha(K) === q && (Se = new Se(
              I,
              z + "enter",
              we,
              a,
              K
            ), Se.target = U, Se.relatedTarget = nt, ee = Se), nt = ee, G && we)
              t: {
                for (Se = G, I = we, z = 0, U = Se; U; U = Si(U))
                  z++;
                for (U = 0, ee = I; ee; ee = Si(ee))
                  U++;
                for (; 0 < z - U; )
                  Se = Si(Se), z--;
                for (; 0 < U - z; )
                  I = Si(I), U--;
                for (; z--; ) {
                  if (Se === I || I !== null && Se === I.alternate)
                    break t;
                  Se = Si(Se), I = Si(I);
                }
                Se = null;
              }
            else Se = null;
            G !== null && _g(
              ne,
              Z,
              G,
              Se,
              !1
            ), we !== null && nt !== null && _g(
              ne,
              nt,
              we,
              Se,
              !0
            );
          }
        }
        e: {
          if (Z = q ? qi(q) : window, G = Z.nodeName && Z.nodeName.toLowerCase(), G === "select" || G === "input" && Z.type === "file")
            var he = Bh;
          else if (Ih(Z))
            if (Uh)
              he = Sb;
            else {
              he = bb;
              var ze = yb;
            }
          else
            G = Z.nodeName, !G || G.toLowerCase() !== "input" || Z.type !== "checkbox" && Z.type !== "radio" ? q && Uu(q.elementType) && (he = Bh) : he = _b;
          if (he && (he = he(e, q))) {
            Ph(
              ne,
              he,
              a,
              K
            );
            break e;
          }
          ze && ze(e, Z, q), e === "focusout" && q && Z.type === "number" && q.memoizedProps.value != null && Bu(Z, "number", Z.value);
        }
        switch (ze = q ? qi(q) : window, e) {
          case "focusin":
            (Ih(ze) || ze.contentEditable === "true") && (Ja = ze, ec = q, Ji = null);
            break;
          case "focusout":
            Ji = ec = Ja = null;
            break;
          case "mousedown":
            tc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            tc = !1, $h(ne, a, K);
            break;
          case "selectionchange":
            if (Eb) break;
          case "keydown":
          case "keyup":
            $h(ne, a, K);
        }
        var ge;
        if (Qu)
          e: {
            switch (e) {
              case "compositionstart":
                var Ee = "onCompositionStart";
                break e;
              case "compositionend":
                Ee = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ee = "onCompositionUpdate";
                break e;
            }
            Ee = void 0;
          }
        else
          Qa ? zh(e, a) && (Ee = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (Ee = "onCompositionStart");
        Ee && (Mh && a.locale !== "ko" && (Qa || Ee !== "onCompositionStart" ? Ee === "onCompositionEnd" && Qa && (ge = Ah()) : (jr = K, Gu = "value" in jr ? jr.value : jr.textContent, Qa = !0)), ze = sl(q, Ee), 0 < ze.length && (Ee = new kh(
          Ee,
          e,
          null,
          a,
          K
        ), ne.push({ event: Ee, listeners: ze }), ge ? Ee.data = ge : (ge = Lh(a), ge !== null && (Ee.data = ge)))), (ge = hb ? pb(e, a) : mb(e, a)) && (Ee = sl(q, "onBeforeInput"), 0 < Ee.length && (ze = new kh(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          K
        ), ne.push({
          event: ze,
          listeners: Ee
        }), ze.data = ge)), i_(
          ne,
          e,
          q,
          a,
          K
        );
      }
      yg(ne, n);
    });
  }
  function Cs(e, n, a) {
    return {
      instance: e,
      listener: n,
      currentTarget: a
    };
  }
  function sl(e, n) {
    for (var a = n + "Capture", o = []; e !== null; ) {
      var c = e, b = c.stateNode;
      if (c = c.tag, c !== 5 && c !== 26 && c !== 27 || b === null || (c = Fi(e, a), c != null && o.unshift(
        Cs(e, c, b)
      ), c = Fi(e, n), c != null && o.push(
        Cs(e, c, b)
      )), e.tag === 3) return o;
      e = e.return;
    }
    return [];
  }
  function Si(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function _g(e, n, a, o, c) {
    for (var b = n._reactName, N = []; a !== null && a !== o; ) {
      var k = a, M = k.alternate, q = k.stateNode;
      if (k = k.tag, M !== null && M === o) break;
      k !== 5 && k !== 26 && k !== 27 || q === null || (M = q, c ? (q = Fi(a, b), q != null && N.unshift(
        Cs(a, q, M)
      )) : c || (q = Fi(a, b), q != null && N.push(
        Cs(a, q, M)
      ))), a = a.return;
    }
    N.length !== 0 && e.push({ event: n, listeners: N });
  }
  var u_ = /\r\n?/g, c_ = /\u0000|\uFFFD/g;
  function Sg(e) {
    return (typeof e == "string" ? e : "" + e).replace(u_, `
`).replace(c_, "");
  }
  function xg(e, n) {
    return n = Sg(n), Sg(e) === n;
  }
  function ol() {
  }
  function tt(e, n, a, o, c, b) {
    switch (a) {
      case "children":
        typeof o == "string" ? n === "body" || n === "textarea" && o === "" || Ya(e, o) : (typeof o == "number" || typeof o == "bigint") && n !== "body" && Ya(e, "" + o);
        break;
      case "className":
        fo(e, "class", o);
        break;
      case "tabIndex":
        fo(e, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        fo(e, a, o);
        break;
      case "style":
        wh(e, o, b);
        break;
      case "data":
        if (n !== "object") {
          fo(e, "data", o);
          break;
        }
      case "src":
      case "href":
        if (o === "" && (n !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (o == null || typeof o == "function" || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(a);
          break;
        }
        o = mo("" + o), e.setAttribute(a, o);
        break;
      case "action":
      case "formAction":
        if (typeof o == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof b == "function" && (a === "formAction" ? (n !== "input" && tt(e, n, "name", c.name, c, null), tt(
            e,
            n,
            "formEncType",
            c.formEncType,
            c,
            null
          ), tt(
            e,
            n,
            "formMethod",
            c.formMethod,
            c,
            null
          ), tt(
            e,
            n,
            "formTarget",
            c.formTarget,
            c,
            null
          )) : (tt(e, n, "encType", c.encType, c, null), tt(e, n, "method", c.method, c, null), tt(e, n, "target", c.target, c, null)));
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(a);
          break;
        }
        o = mo("" + o), e.setAttribute(a, o);
        break;
      case "onClick":
        o != null && (e.onclick = ol);
        break;
      case "onScroll":
        o != null && Ie("scroll", e);
        break;
      case "onScrollEnd":
        o != null && Ie("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o))
            throw Error(s(61));
          if (a = o.__html, a != null) {
            if (c.children != null) throw Error(s(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "muted":
        e.muted = o && typeof o != "function" && typeof o != "symbol";
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
        if (o == null || typeof o == "function" || typeof o == "boolean" || typeof o == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        a = mo("" + o), e.setAttributeNS(
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
        o != null && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(a, "" + o) : e.removeAttribute(a);
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
        o && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        o === !0 ? e.setAttribute(a, "") : o !== !1 && o != null && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(a, o) : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        o != null && typeof o != "function" && typeof o != "symbol" && !isNaN(o) && 1 <= o ? e.setAttribute(a, o) : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o) ? e.removeAttribute(a) : e.setAttribute(a, o);
        break;
      case "popover":
        Ie("beforetoggle", e), Ie("toggle", e), co(e, "popover", o);
        break;
      case "xlinkActuate":
        or(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          o
        );
        break;
      case "xlinkArcrole":
        or(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          o
        );
        break;
      case "xlinkRole":
        or(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          o
        );
        break;
      case "xlinkShow":
        or(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          o
        );
        break;
      case "xlinkTitle":
        or(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          o
        );
        break;
      case "xlinkType":
        or(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          o
        );
        break;
      case "xmlBase":
        or(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          o
        );
        break;
      case "xmlLang":
        or(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          o
        );
        break;
      case "xmlSpace":
        or(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          o
        );
        break;
      case "is":
        co(e, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = U1.get(a) || a, co(e, a, o));
    }
  }
  function Cf(e, n, a, o, c, b) {
    switch (a) {
      case "style":
        wh(e, o, b);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o))
            throw Error(s(61));
          if (a = o.__html, a != null) {
            if (c.children != null) throw Error(s(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof o == "string" ? Ya(e, o) : (typeof o == "number" || typeof o == "bigint") && Ya(e, "" + o);
        break;
      case "onScroll":
        o != null && Ie("scroll", e);
        break;
      case "onScrollEnd":
        o != null && Ie("scrollend", e);
        break;
      case "onClick":
        o != null && (e.onclick = ol);
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
        if (!hh.hasOwnProperty(a))
          e: {
            if (a[0] === "o" && a[1] === "n" && (c = a.endsWith("Capture"), n = a.slice(2, c ? a.length - 7 : void 0), b = e[rn] || null, b = b != null ? b[a] : null, typeof b == "function" && e.removeEventListener(n, b, c), typeof o == "function")) {
              typeof b != "function" && b !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(n, o, c);
              break e;
            }
            a in e ? e[a] = o : o === !0 ? e.setAttribute(a, "") : co(e, a, o);
          }
    }
  }
  function Ht(e, n, a) {
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
        var o = !1, c = !1, b;
        for (b in a)
          if (a.hasOwnProperty(b)) {
            var N = a[b];
            if (N != null)
              switch (b) {
                case "src":
                  o = !0;
                  break;
                case "srcSet":
                  c = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, n));
                default:
                  tt(e, n, b, N, a, null);
              }
          }
        c && tt(e, n, "srcSet", a.srcSet, a, null), o && tt(e, n, "src", a.src, a, null);
        return;
      case "input":
        Ie("invalid", e);
        var k = b = N = c = null, M = null, q = null;
        for (o in a)
          if (a.hasOwnProperty(o)) {
            var K = a[o];
            if (K != null)
              switch (o) {
                case "name":
                  c = K;
                  break;
                case "type":
                  N = K;
                  break;
                case "checked":
                  M = K;
                  break;
                case "defaultChecked":
                  q = K;
                  break;
                case "value":
                  b = K;
                  break;
                case "defaultValue":
                  k = K;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (K != null)
                    throw Error(s(137, n));
                  break;
                default:
                  tt(e, n, o, K, a, null);
              }
          }
        _h(
          e,
          b,
          k,
          M,
          q,
          N,
          c,
          !1
        ), ho(e);
        return;
      case "select":
        Ie("invalid", e), o = N = b = null;
        for (c in a)
          if (a.hasOwnProperty(c) && (k = a[c], k != null))
            switch (c) {
              case "value":
                b = k;
                break;
              case "defaultValue":
                N = k;
                break;
              case "multiple":
                o = k;
              default:
                tt(e, n, c, k, a, null);
            }
        n = b, a = N, e.multiple = !!o, n != null ? Va(e, !!o, n, !1) : a != null && Va(e, !!o, a, !0);
        return;
      case "textarea":
        Ie("invalid", e), b = c = o = null;
        for (N in a)
          if (a.hasOwnProperty(N) && (k = a[N], k != null))
            switch (N) {
              case "value":
                o = k;
                break;
              case "defaultValue":
                c = k;
                break;
              case "children":
                b = k;
                break;
              case "dangerouslySetInnerHTML":
                if (k != null) throw Error(s(91));
                break;
              default:
                tt(e, n, N, k, a, null);
            }
        xh(e, o, c, b), ho(e);
        return;
      case "option":
        for (M in a)
          if (a.hasOwnProperty(M) && (o = a[M], o != null))
            switch (M) {
              case "selected":
                e.selected = o && typeof o != "function" && typeof o != "symbol";
                break;
              default:
                tt(e, n, M, o, a, null);
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
        for (o = 0; o < ws.length; o++)
          Ie(ws[o], e);
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
        for (q in a)
          if (a.hasOwnProperty(q) && (o = a[q], o != null))
            switch (q) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, n));
              default:
                tt(e, n, q, o, a, null);
            }
        return;
      default:
        if (Uu(n)) {
          for (K in a)
            a.hasOwnProperty(K) && (o = a[K], o !== void 0 && Cf(
              e,
              n,
              K,
              o,
              a,
              void 0
            ));
          return;
        }
    }
    for (k in a)
      a.hasOwnProperty(k) && (o = a[k], o != null && tt(e, n, k, o, a, null));
  }
  function f_(e, n, a, o) {
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
        var c = null, b = null, N = null, k = null, M = null, q = null, K = null;
        for (G in a) {
          var ne = a[G];
          if (a.hasOwnProperty(G) && ne != null)
            switch (G) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                M = ne;
              default:
                o.hasOwnProperty(G) || tt(e, n, G, null, o, ne);
            }
        }
        for (var Z in o) {
          var G = o[Z];
          if (ne = a[Z], o.hasOwnProperty(Z) && (G != null || ne != null))
            switch (Z) {
              case "type":
                b = G;
                break;
              case "name":
                c = G;
                break;
              case "checked":
                q = G;
                break;
              case "defaultChecked":
                K = G;
                break;
              case "value":
                N = G;
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
                G !== ne && tt(
                  e,
                  n,
                  Z,
                  G,
                  o,
                  ne
                );
            }
        }
        Pu(
          e,
          N,
          k,
          M,
          q,
          K,
          b,
          c
        );
        return;
      case "select":
        G = N = k = Z = null;
        for (b in a)
          if (M = a[b], a.hasOwnProperty(b) && M != null)
            switch (b) {
              case "value":
                break;
              case "multiple":
                G = M;
              default:
                o.hasOwnProperty(b) || tt(
                  e,
                  n,
                  b,
                  null,
                  o,
                  M
                );
            }
        for (c in o)
          if (b = o[c], M = a[c], o.hasOwnProperty(c) && (b != null || M != null))
            switch (c) {
              case "value":
                Z = b;
                break;
              case "defaultValue":
                k = b;
                break;
              case "multiple":
                N = b;
              default:
                b !== M && tt(
                  e,
                  n,
                  c,
                  b,
                  o,
                  M
                );
            }
        n = k, a = N, o = G, Z != null ? Va(e, !!a, Z, !1) : !!o != !!a && (n != null ? Va(e, !!a, n, !0) : Va(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        G = Z = null;
        for (k in a)
          if (c = a[k], a.hasOwnProperty(k) && c != null && !o.hasOwnProperty(k))
            switch (k) {
              case "value":
                break;
              case "children":
                break;
              default:
                tt(e, n, k, null, o, c);
            }
        for (N in o)
          if (c = o[N], b = a[N], o.hasOwnProperty(N) && (c != null || b != null))
            switch (N) {
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
                c !== b && tt(e, n, N, c, o, b);
            }
        Sh(e, Z, G);
        return;
      case "option":
        for (var we in a)
          if (Z = a[we], a.hasOwnProperty(we) && Z != null && !o.hasOwnProperty(we))
            switch (we) {
              case "selected":
                e.selected = !1;
                break;
              default:
                tt(
                  e,
                  n,
                  we,
                  null,
                  o,
                  Z
                );
            }
        for (M in o)
          if (Z = o[M], G = a[M], o.hasOwnProperty(M) && Z !== G && (Z != null || G != null))
            switch (M) {
              case "selected":
                e.selected = Z && typeof Z != "function" && typeof Z != "symbol";
                break;
              default:
                tt(
                  e,
                  n,
                  M,
                  Z,
                  o,
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
          Z = a[Se], a.hasOwnProperty(Se) && Z != null && !o.hasOwnProperty(Se) && tt(e, n, Se, null, o, Z);
        for (q in o)
          if (Z = o[q], G = a[q], o.hasOwnProperty(q) && Z !== G && (Z != null || G != null))
            switch (q) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (Z != null)
                  throw Error(s(137, n));
                break;
              default:
                tt(
                  e,
                  n,
                  q,
                  Z,
                  o,
                  G
                );
            }
        return;
      default:
        if (Uu(n)) {
          for (var nt in a)
            Z = a[nt], a.hasOwnProperty(nt) && Z !== void 0 && !o.hasOwnProperty(nt) && Cf(
              e,
              n,
              nt,
              void 0,
              o,
              Z
            );
          for (K in o)
            Z = o[K], G = a[K], !o.hasOwnProperty(K) || Z === G || Z === void 0 && G === void 0 || Cf(
              e,
              n,
              K,
              Z,
              o,
              G
            );
          return;
        }
    }
    for (var I in a)
      Z = a[I], a.hasOwnProperty(I) && Z != null && !o.hasOwnProperty(I) && tt(e, n, I, null, o, Z);
    for (ne in o)
      Z = o[ne], G = a[ne], !o.hasOwnProperty(ne) || Z === G || Z == null && G == null || tt(e, n, ne, Z, o, G);
  }
  var Nf = null, Af = null;
  function ll(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Eg(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function wg(e, n) {
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
  function d_() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Of ? !1 : (Of = e, !0) : (Of = null, !1);
  }
  var Cg = typeof setTimeout == "function" ? setTimeout : void 0, h_ = typeof clearTimeout == "function" ? clearTimeout : void 0, Ng = typeof Promise == "function" ? Promise : void 0, p_ = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ng < "u" ? function(e) {
    return Ng.resolve(null).then(e).catch(m_);
  } : Cg;
  function m_(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Yr(e) {
    return e === "head";
  }
  function Ag(e, n) {
    var a = n, o = 0, c = 0;
    do {
      var b = a.nextSibling;
      if (e.removeChild(a), b && b.nodeType === 8)
        if (a = b.data, a === "/$") {
          if (0 < o && 8 > o) {
            a = o;
            var N = e.ownerDocument;
            if (a & 1 && Ns(N.documentElement), a & 2 && Ns(N.body), a & 4)
              for (a = N.head, Ns(a), N = a.firstChild; N; ) {
                var k = N.nextSibling, M = N.nodeName;
                N[Hi] || M === "SCRIPT" || M === "STYLE" || M === "LINK" && N.rel.toLowerCase() === "stylesheet" || a.removeChild(N), N = k;
              }
          }
          if (c === 0) {
            e.removeChild(b), Rs(n);
            return;
          }
          c--;
        } else
          a === "$" || a === "$?" || a === "$!" ? c++ : o = a.charCodeAt(0) - 48;
      else o = 0;
      a = b;
    } while (a);
    Rs(n);
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
  function g_(e, n, a, o) {
    for (; e.nodeType === 1; ) {
      var c = a;
      if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!o && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (o) {
        if (!e[Hi])
          switch (n) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (b = e.getAttribute("rel"), b === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (b !== c.rel || e.getAttribute("href") !== (c.href == null || c.href === "" ? null : c.href) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin) || e.getAttribute("title") !== (c.title == null ? null : c.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (b = e.getAttribute("src"), (b !== (c.src == null ? null : c.src) || e.getAttribute("type") !== (c.type == null ? null : c.type) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin)) && b && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (n === "input" && e.type === "hidden") {
        var b = c.name == null ? null : "" + c.name;
        if (c.type === "hidden" && e.getAttribute("name") === b)
          return e;
      } else return e;
      if (e = Gn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function v_(e, n, a) {
    if (n === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Gn(e.nextSibling), e === null)) return null;
    return e;
  }
  function jf(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function y_(e, n) {
    var a = e.ownerDocument;
    if (e.data !== "$?" || a.readyState === "complete")
      n();
    else {
      var o = function() {
        n(), a.removeEventListener("DOMContentLoaded", o);
      };
      a.addEventListener("DOMContentLoaded", o), e._reactRetry = o;
    }
  }
  function Gn(e) {
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
  function Tg(e) {
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
  function Og(e, n, a) {
    switch (n = ll(a), e) {
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
  function Ns(e) {
    for (var n = e.attributes; n.length; )
      e.removeAttributeNode(n[0]);
    Ru(e);
  }
  var In = /* @__PURE__ */ new Map(), kg = /* @__PURE__ */ new Set();
  function ul(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Sr = ae.d;
  ae.d = {
    f: b_,
    r: __,
    D: S_,
    C: x_,
    L: E_,
    m: w_,
    X: N_,
    S: C_,
    M: A_
  };
  function b_() {
    var e = Sr.f(), n = el();
    return e || n;
  }
  function __(e) {
    var n = qa(e);
    n !== null && n.tag === 5 && n.type === "form" ? Qp(n) : Sr.r(e);
  }
  var xi = typeof document > "u" ? null : document;
  function jg(e, n, a) {
    var o = xi;
    if (o && typeof n == "string" && n) {
      var c = kn(n);
      c = 'link[rel="' + e + '"][href="' + c + '"]', typeof a == "string" && (c += '[crossorigin="' + a + '"]'), kg.has(c) || (kg.add(c), e = { rel: e, crossOrigin: a, href: n }, o.querySelector(c) === null && (n = o.createElement("link"), Ht(n, "link", e), zt(n), o.head.appendChild(n)));
    }
  }
  function S_(e) {
    Sr.D(e), jg("dns-prefetch", e, null);
  }
  function x_(e, n) {
    Sr.C(e, n), jg("preconnect", e, n);
  }
  function E_(e, n, a) {
    Sr.L(e, n, a);
    var o = xi;
    if (o && e && n) {
      var c = 'link[rel="preload"][as="' + kn(n) + '"]';
      n === "image" && a && a.imageSrcSet ? (c += '[imagesrcset="' + kn(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (c += '[imagesizes="' + kn(
        a.imageSizes
      ) + '"]')) : c += '[href="' + kn(e) + '"]';
      var b = c;
      switch (n) {
        case "style":
          b = Ei(e);
          break;
        case "script":
          b = wi(e);
      }
      In.has(b) || (e = m(
        {
          rel: "preload",
          href: n === "image" && a && a.imageSrcSet ? void 0 : e,
          as: n
        },
        a
      ), In.set(b, e), o.querySelector(c) !== null || n === "style" && o.querySelector(As(b)) || n === "script" && o.querySelector(Ts(b)) || (n = o.createElement("link"), Ht(n, "link", e), zt(n), o.head.appendChild(n)));
    }
  }
  function w_(e, n) {
    Sr.m(e, n);
    var a = xi;
    if (a && e) {
      var o = n && typeof n.as == "string" ? n.as : "script", c = 'link[rel="modulepreload"][as="' + kn(o) + '"][href="' + kn(e) + '"]', b = c;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          b = wi(e);
      }
      if (!In.has(b) && (e = m({ rel: "modulepreload", href: e }, n), In.set(b, e), a.querySelector(c) === null)) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Ts(b)))
              return;
        }
        o = a.createElement("link"), Ht(o, "link", e), zt(o), a.head.appendChild(o);
      }
    }
  }
  function C_(e, n, a) {
    Sr.S(e, n, a);
    var o = xi;
    if (o && e) {
      var c = Fa(o).hoistableStyles, b = Ei(e);
      n = n || "default";
      var N = c.get(b);
      if (!N) {
        var k = { loading: 0, preload: null };
        if (N = o.querySelector(
          As(b)
        ))
          k.loading = 5;
        else {
          e = m(
            { rel: "stylesheet", href: e, "data-precedence": n },
            a
          ), (a = In.get(b)) && Df(e, a);
          var M = N = o.createElement("link");
          zt(M), Ht(M, "link", e), M._p = new Promise(function(q, K) {
            M.onload = q, M.onerror = K;
          }), M.addEventListener("load", function() {
            k.loading |= 1;
          }), M.addEventListener("error", function() {
            k.loading |= 2;
          }), k.loading |= 4, cl(N, n, o);
        }
        N = {
          type: "stylesheet",
          instance: N,
          count: 1,
          state: k
        }, c.set(b, N);
      }
    }
  }
  function N_(e, n) {
    Sr.X(e, n);
    var a = xi;
    if (a && e) {
      var o = Fa(a).hoistableScripts, c = wi(e), b = o.get(c);
      b || (b = a.querySelector(Ts(c)), b || (e = m({ src: e, async: !0 }, n), (n = In.get(c)) && Rf(e, n), b = a.createElement("script"), zt(b), Ht(b, "link", e), a.head.appendChild(b)), b = {
        type: "script",
        instance: b,
        count: 1,
        state: null
      }, o.set(c, b));
    }
  }
  function A_(e, n) {
    Sr.M(e, n);
    var a = xi;
    if (a && e) {
      var o = Fa(a).hoistableScripts, c = wi(e), b = o.get(c);
      b || (b = a.querySelector(Ts(c)), b || (e = m({ src: e, async: !0, type: "module" }, n), (n = In.get(c)) && Rf(e, n), b = a.createElement("script"), zt(b), Ht(b, "link", e), a.head.appendChild(b)), b = {
        type: "script",
        instance: b,
        count: 1,
        state: null
      }, o.set(c, b));
    }
  }
  function Mg(e, n, a, o) {
    var c = (c = X.current) ? ul(c) : null;
    if (!c) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (n = Ei(a.href), a = Fa(
          c
        ).hoistableStyles, o = a.get(n), o || (o = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(n, o)), o) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = Ei(a.href);
          var b = Fa(
            c
          ).hoistableStyles, N = b.get(e);
          if (N || (c = c.ownerDocument || c, N = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, b.set(e, N), (b = c.querySelector(
            As(e)
          )) && !b._p && (N.instance = b, N.state.loading = 5), In.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, In.set(e, a), b || T_(
            c,
            e,
            a,
            N.state
          ))), n && o === null)
            throw Error(s(528, ""));
          return N;
        }
        if (n && o !== null)
          throw Error(s(529, ""));
        return null;
      case "script":
        return n = a.async, a = a.src, typeof a == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = wi(a), a = Fa(
          c
        ).hoistableScripts, o = a.get(n), o || (o = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(n, o)), o) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(s(444, e));
    }
  }
  function Ei(e) {
    return 'href="' + kn(e) + '"';
  }
  function As(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Dg(e) {
    return m({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function T_(e, n, a, o) {
    e.querySelector('link[rel="preload"][as="style"][' + n + "]") ? o.loading = 1 : (n = e.createElement("link"), o.preload = n, n.addEventListener("load", function() {
      return o.loading |= 1;
    }), n.addEventListener("error", function() {
      return o.loading |= 2;
    }), Ht(n, "link", a), zt(n), e.head.appendChild(n));
  }
  function wi(e) {
    return '[src="' + kn(e) + '"]';
  }
  function Ts(e) {
    return "script[async]" + e;
  }
  function Rg(e, n, a) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var o = e.querySelector(
            'style[data-href~="' + kn(a.href) + '"]'
          );
          if (o)
            return n.instance = o, zt(o), o;
          var c = m({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return o = (e.ownerDocument || e).createElement(
            "style"
          ), zt(o), Ht(o, "style", c), cl(o, a.precedence, e), n.instance = o;
        case "stylesheet":
          c = Ei(a.href);
          var b = e.querySelector(
            As(c)
          );
          if (b)
            return n.state.loading |= 4, n.instance = b, zt(b), b;
          o = Dg(a), (c = In.get(c)) && Df(o, c), b = (e.ownerDocument || e).createElement("link"), zt(b);
          var N = b;
          return N._p = new Promise(function(k, M) {
            N.onload = k, N.onerror = M;
          }), Ht(b, "link", o), n.state.loading |= 4, cl(b, a.precedence, e), n.instance = b;
        case "script":
          return b = wi(a.src), (c = e.querySelector(
            Ts(b)
          )) ? (n.instance = c, zt(c), c) : (o = a, (c = In.get(b)) && (o = m({}, a), Rf(o, c)), e = e.ownerDocument || e, c = e.createElement("script"), zt(c), Ht(c, "link", o), e.head.appendChild(c), n.instance = c);
        case "void":
          return null;
        default:
          throw Error(s(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (o = n.instance, n.state.loading |= 4, cl(o, a.precedence, e));
    return n.instance;
  }
  function cl(e, n, a) {
    for (var o = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), c = o.length ? o[o.length - 1] : null, b = c, N = 0; N < o.length; N++) {
      var k = o[N];
      if (k.dataset.precedence === n) b = k;
      else if (b !== c) break;
    }
    b ? b.parentNode.insertBefore(e, b.nextSibling) : (n = a.nodeType === 9 ? a.head : a, n.insertBefore(e, n.firstChild));
  }
  function Df(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.title == null && (e.title = n.title);
  }
  function Rf(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.integrity == null && (e.integrity = n.integrity);
  }
  var fl = null;
  function zg(e, n, a) {
    if (fl === null) {
      var o = /* @__PURE__ */ new Map(), c = fl = /* @__PURE__ */ new Map();
      c.set(a, o);
    } else
      c = fl, o = c.get(a), o || (o = /* @__PURE__ */ new Map(), c.set(a, o));
    if (o.has(e)) return o;
    for (o.set(e, null), a = a.getElementsByTagName(e), c = 0; c < a.length; c++) {
      var b = a[c];
      if (!(b[Hi] || b[Zt] || e === "link" && b.getAttribute("rel") === "stylesheet") && b.namespaceURI !== "http://www.w3.org/2000/svg") {
        var N = b.getAttribute(n) || "";
        N = e + N;
        var k = o.get(N);
        k ? k.push(b) : o.set(N, [b]);
      }
    }
    return o;
  }
  function Lg(e, n, a) {
    e = e.ownerDocument || e, e.head.insertBefore(
      a,
      n === "title" ? e.querySelector("head > title") : null
    );
  }
  function O_(e, n, a) {
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
  function Ig(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Os = null;
  function k_() {
  }
  function j_(e, n, a) {
    if (Os === null) throw Error(s(475));
    var o = Os;
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var c = Ei(a.href), b = e.querySelector(
          As(c)
        );
        if (b) {
          e = b._p, e !== null && typeof e == "object" && typeof e.then == "function" && (o.count++, o = dl.bind(o), e.then(o, o)), n.state.loading |= 4, n.instance = b, zt(b);
          return;
        }
        b = e.ownerDocument || e, a = Dg(a), (c = In.get(c)) && Df(a, c), b = b.createElement("link"), zt(b);
        var N = b;
        N._p = new Promise(function(k, M) {
          N.onload = k, N.onerror = M;
        }), Ht(b, "link", a), n.instance = b;
      }
      o.stylesheets === null && (o.stylesheets = /* @__PURE__ */ new Map()), o.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (o.count++, n = dl.bind(o), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  function M_() {
    if (Os === null) throw Error(s(475));
    var e = Os;
    return e.stylesheets && e.count === 0 && zf(e, e.stylesheets), 0 < e.count ? function(n) {
      var a = setTimeout(function() {
        if (e.stylesheets && zf(e, e.stylesheets), e.unsuspend) {
          var o = e.unsuspend;
          e.unsuspend = null, o();
        }
      }, 6e4);
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(a);
      };
    } : null;
  }
  function dl() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) zf(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var hl = null;
  function zf(e, n) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, hl = /* @__PURE__ */ new Map(), n.forEach(D_, e), hl = null, dl.call(e));
  }
  function D_(e, n) {
    if (!(n.state.loading & 4)) {
      var a = hl.get(e);
      if (a) var o = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), hl.set(e, a);
        for (var c = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), b = 0; b < c.length; b++) {
          var N = c[b];
          (N.nodeName === "LINK" || N.getAttribute("media") !== "not all") && (a.set(N.dataset.precedence, N), o = N);
        }
        o && a.set(null, o);
      }
      c = n.instance, N = c.getAttribute("data-precedence"), b = a.get(N) || o, b === o && a.set(null, c), a.set(N, c), this.count++, o = dl.bind(this), c.addEventListener("load", o), c.addEventListener("error", o), b ? b.parentNode.insertBefore(c, b.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(c, e.firstChild)), n.state.loading |= 4;
    }
  }
  var ks = {
    $$typeof: T,
    Provider: null,
    Consumer: null,
    _currentValue: de,
    _currentValue2: de,
    _threadCount: 0
  };
  function R_(e, n, a, o, c, b, N, k) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ku(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ku(0), this.hiddenUpdates = ku(null), this.identifierPrefix = o, this.onUncaughtError = c, this.onCaughtError = b, this.onRecoverableError = N, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = k, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Pg(e, n, a, o, c, b, N, k, M, q, K, ne) {
    return e = new R_(
      e,
      n,
      a,
      N,
      k,
      M,
      q,
      ne
    ), n = 1, b === !0 && (n |= 24), b = vn(3, null, null, n), e.current = b, b.stateNode = e, n = mc(), n.refCount++, e.pooledCache = n, n.refCount++, b.memoizedState = {
      element: o,
      isDehydrated: a,
      cache: n
    }, bc(b), e;
  }
  function Bg(e) {
    return e ? (e = ti, e) : ti;
  }
  function Ug(e, n, a, o, c, b) {
    c = Bg(c), o.context === null ? o.context = c : o.pendingContext = c, o = Rr(n), o.payload = { element: a }, b = b === void 0 ? null : b, b !== null && (o.callback = b), a = zr(e, o, n), a !== null && (xn(a, e, n), ss(a, e, n));
  }
  function Hg(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < n ? a : n;
    }
  }
  function Lf(e, n) {
    Hg(e, n), (e = e.alternate) && Hg(e, n);
  }
  function qg(e) {
    if (e.tag === 13) {
      var n = ei(e, 67108864);
      n !== null && xn(n, e, 67108864), Lf(e, 67108864);
    }
  }
  var pl = !0;
  function z_(e, n, a, o) {
    var c = L.T;
    L.T = null;
    var b = ae.p;
    try {
      ae.p = 2, If(e, n, a, o);
    } finally {
      ae.p = b, L.T = c;
    }
  }
  function L_(e, n, a, o) {
    var c = L.T;
    L.T = null;
    var b = ae.p;
    try {
      ae.p = 8, If(e, n, a, o);
    } finally {
      ae.p = b, L.T = c;
    }
  }
  function If(e, n, a, o) {
    if (pl) {
      var c = Pf(o);
      if (c === null)
        wf(
          e,
          n,
          o,
          ml,
          a
        ), Zg(e, o);
      else if (P_(
        c,
        e,
        n,
        a,
        o
      ))
        o.stopPropagation();
      else if (Zg(e, o), n & 4 && -1 < I_.indexOf(e)) {
        for (; c !== null; ) {
          var b = qa(c);
          if (b !== null)
            switch (b.tag) {
              case 3:
                if (b = b.stateNode, b.current.memoizedState.isDehydrated) {
                  var N = qe(b.pendingLanes);
                  if (N !== 0) {
                    var k = b;
                    for (k.pendingLanes |= 2, k.entangledLanes |= 2; N; ) {
                      var M = 1 << 31 - Be(N);
                      k.entanglements[1] |= M, N &= ~M;
                    }
                    nr(b), (Je & 6) === 0 && (Ko = Xe() + 500, Es(0));
                  }
                }
                break;
              case 13:
                k = ei(b, 2), k !== null && xn(k, b, 2), el(), Lf(b, 2);
            }
          if (b = Pf(o), b === null && wf(
            e,
            n,
            o,
            ml,
            a
          ), b === c) break;
          c = b;
        }
        c !== null && o.stopPropagation();
      } else
        wf(
          e,
          n,
          o,
          null,
          a
        );
    }
  }
  function Pf(e) {
    return e = qu(e), Bf(e);
  }
  var ml = null;
  function Bf(e) {
    if (ml = null, e = Ha(e), e !== null) {
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
    return ml = e, null;
  }
  function Fg(e) {
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
        switch (Ve()) {
          case We:
            return 2;
          case me:
            return 8;
          case pe:
          case Ge:
            return 32;
          case He:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Uf = !1, $r = null, Xr = null, Qr = null, js = /* @__PURE__ */ new Map(), Ms = /* @__PURE__ */ new Map(), Jr = [], I_ = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Zg(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        $r = null;
        break;
      case "dragenter":
      case "dragleave":
        Xr = null;
        break;
      case "mouseover":
      case "mouseout":
        Qr = null;
        break;
      case "pointerover":
      case "pointerout":
        js.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ms.delete(n.pointerId);
    }
  }
  function Ds(e, n, a, o, c, b) {
    return e === null || e.nativeEvent !== b ? (e = {
      blockedOn: n,
      domEventName: a,
      eventSystemFlags: o,
      nativeEvent: b,
      targetContainers: [c]
    }, n !== null && (n = qa(n), n !== null && qg(n)), e) : (e.eventSystemFlags |= o, n = e.targetContainers, c !== null && n.indexOf(c) === -1 && n.push(c), e);
  }
  function P_(e, n, a, o, c) {
    switch (n) {
      case "focusin":
        return $r = Ds(
          $r,
          e,
          n,
          a,
          o,
          c
        ), !0;
      case "dragenter":
        return Xr = Ds(
          Xr,
          e,
          n,
          a,
          o,
          c
        ), !0;
      case "mouseover":
        return Qr = Ds(
          Qr,
          e,
          n,
          a,
          o,
          c
        ), !0;
      case "pointerover":
        var b = c.pointerId;
        return js.set(
          b,
          Ds(
            js.get(b) || null,
            e,
            n,
            a,
            o,
            c
          )
        ), !0;
      case "gotpointercapture":
        return b = c.pointerId, Ms.set(
          b,
          Ds(
            Ms.get(b) || null,
            e,
            n,
            a,
            o,
            c
          )
        ), !0;
    }
    return !1;
  }
  function Gg(e) {
    var n = Ha(e.target);
    if (n !== null) {
      var a = u(n);
      if (a !== null) {
        if (n = a.tag, n === 13) {
          if (n = f(a), n !== null) {
            e.blockedOn = n, j1(e.priority, function() {
              if (a.tag === 13) {
                var o = Sn();
                o = ju(o);
                var c = ei(a, o);
                c !== null && xn(c, a, o), Lf(a, o);
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
  function gl(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var a = Pf(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var o = new a.constructor(
          a.type,
          a
        );
        Hu = o, a.target.dispatchEvent(o), Hu = null;
      } else
        return n = qa(a), n !== null && qg(n), e.blockedOn = a, !1;
      n.shift();
    }
    return !0;
  }
  function Vg(e, n, a) {
    gl(e) && a.delete(n);
  }
  function B_() {
    Uf = !1, $r !== null && gl($r) && ($r = null), Xr !== null && gl(Xr) && (Xr = null), Qr !== null && gl(Qr) && (Qr = null), js.forEach(Vg), Ms.forEach(Vg);
  }
  function vl(e, n) {
    e.blockedOn === n && (e.blockedOn = null, Uf || (Uf = !0, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      B_
    )));
  }
  var yl = null;
  function Yg(e) {
    yl !== e && (yl = e, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      function() {
        yl === e && (yl = null);
        for (var n = 0; n < e.length; n += 3) {
          var a = e[n], o = e[n + 1], c = e[n + 2];
          if (typeof o != "function") {
            if (Bf(o || a) === null)
              continue;
            break;
          }
          var b = qa(a);
          b !== null && (e.splice(n, 3), n -= 3, Pc(
            b,
            {
              pending: !0,
              data: c,
              method: a.method,
              action: o
            },
            o,
            c
          ));
        }
      }
    ));
  }
  function Rs(e) {
    function n(M) {
      return vl(M, e);
    }
    $r !== null && vl($r, e), Xr !== null && vl(Xr, e), Qr !== null && vl(Qr, e), js.forEach(n), Ms.forEach(n);
    for (var a = 0; a < Jr.length; a++) {
      var o = Jr[a];
      o.blockedOn === e && (o.blockedOn = null);
    }
    for (; 0 < Jr.length && (a = Jr[0], a.blockedOn === null); )
      Gg(a), a.blockedOn === null && Jr.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (o = 0; o < a.length; o += 3) {
        var c = a[o], b = a[o + 1], N = c[rn] || null;
        if (typeof b == "function")
          N || Yg(a);
        else if (N) {
          var k = null;
          if (b && b.hasAttribute("formAction")) {
            if (c = b, N = b[rn] || null)
              k = N.formAction;
            else if (Bf(c) !== null) continue;
          } else k = N.action;
          typeof k == "function" ? a[o + 1] = k : (a.splice(o, 3), o -= 3), Yg(a);
        }
      }
  }
  function Hf(e) {
    this._internalRoot = e;
  }
  bl.prototype.render = Hf.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(s(409));
    var a = n.current, o = Sn();
    Ug(a, o, e, n, null, null);
  }, bl.prototype.unmount = Hf.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      Ug(e.current, 2, null, e, null, null), el(), n[Ua] = null;
    }
  };
  function bl(e) {
    this._internalRoot = e;
  }
  bl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = ch();
      e = { blockedOn: null, target: e, priority: n };
      for (var a = 0; a < Jr.length && n !== 0 && n < Jr[a].priority; a++) ;
      Jr.splice(a, 0, e), a === 0 && Gg(e);
    }
  };
  var $g = r.version;
  if ($g !== "19.1.1")
    throw Error(
      s(
        527,
        $g,
        "19.1.1"
      )
    );
  ae.findDOMNode = function(e) {
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = h(n), e = e !== null ? g(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var U_ = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: L,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var _l = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!_l.isDisabled && _l.supportsFiber)
      try {
        oe = _l.inject(
          U_
        ), ie = _l;
      } catch {
      }
  }
  return Ps.createRoot = function(e, n) {
    if (!l(e)) throw Error(s(299));
    var a = !1, o = "", c = cm, b = fm, N = dm, k = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onUncaughtError !== void 0 && (c = n.onUncaughtError), n.onCaughtError !== void 0 && (b = n.onCaughtError), n.onRecoverableError !== void 0 && (N = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (k = n.unstable_transitionCallbacks)), n = Pg(
      e,
      1,
      !1,
      null,
      null,
      a,
      o,
      c,
      b,
      N,
      k,
      null
    ), e[Ua] = n.current, Ef(e), new Hf(n);
  }, Ps.hydrateRoot = function(e, n, a) {
    if (!l(e)) throw Error(s(299));
    var o = !1, c = "", b = cm, N = fm, k = dm, M = null, q = null;
    return a != null && (a.unstable_strictMode === !0 && (o = !0), a.identifierPrefix !== void 0 && (c = a.identifierPrefix), a.onUncaughtError !== void 0 && (b = a.onUncaughtError), a.onCaughtError !== void 0 && (N = a.onCaughtError), a.onRecoverableError !== void 0 && (k = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (M = a.unstable_transitionCallbacks), a.formState !== void 0 && (q = a.formState)), n = Pg(
      e,
      1,
      !0,
      n,
      a ?? null,
      o,
      c,
      b,
      N,
      k,
      M,
      q
    ), n.context = Bg(null), a = n.current, o = Sn(), o = ju(o), c = Rr(o), c.callback = null, zr(a, c, o), a = o, n.current.lanes = a, Ui(n, a), nr(n), e[Ua] = n.current, Ef(e), new bl(n);
  }, Ps.version = "19.1.1", Ps;
}
var uv;
function g2() {
  if (uv) return Gf.exports;
  uv = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return t(), Gf.exports = m2(), Gf.exports;
}
var v2 = g2();
const cv = /* @__PURE__ */ Fd(v2);
var y2 = Object.defineProperty, b2 = (t, r, i) => r in t ? y2(t, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[r] = i, _2 = (t, r, i) => b2(t, r + "", i);
class a0 extends Error {
  constructor(r, i) {
    super(r), _2(this, "data"), this.data = i;
  }
  toString() {
    return this.message;
  }
}
async function S2(t, r) {
  const i = SillyTavern.getContext(), s = new FormData();
  s.append("avatar", new Blob([JSON.stringify(t)], { type: "application/json" }), "character.json"), s.append("file_type", "json");
  const l = i.getRequestHeaders();
  delete l["Content-Type"];
  const u = await fetch("/api/characters/import", {
    method: "POST",
    headers: l,
    body: s,
    cache: "no-cache"
  });
  if (!u.ok)
    throw new a0(u.statusText, u);
  await i.getCharacters();
}
async function x2(t, r) {
  var i;
  const s = SillyTavern.getContext();
  if (!t.avatar)
    throw new Error("`data.avatar` (character filename) is required to save character attributes.");
  t == null || delete t.json_data, (i = t?.data) == null || delete i.json_data;
  const l = s.getRequestHeaders(), u = await fetch("/api/characters/merge-attributes", {
    method: "POST",
    headers: l,
    body: JSON.stringify(t),
    cache: "no-cache"
  });
  if (!u.ok) {
    const f = await u.json().catch(() => ({ message: u.statusText }));
    throw new a0(f.message || `Request failed with status ${u.status}`, u);
  }
  await s.getCharacters();
}
var E2 = Object.defineProperty, w2 = (t, r, i) => r in t ? E2(t, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[r] = i, fv = (t, r, i) => w2(t, typeof r != "symbol" ? r + "" : r, i);
class i0 {
  constructor(r, i) {
    fv(this, "settingsKey"), fv(this, "defaultSettings"), this.settingsKey = r, this.defaultSettings = i;
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
    const { strategy: i = "recursive" } = r, s = this.defaultSettings.version, l = this.defaultSettings.formatVersion, u = SillyTavern.getContext().extensionSettings[this.settingsKey], f = {
      version: {
        changed: !1,
        new: s ?? ""
      },
      formatVersion: {
        changed: !1,
        new: l ?? ""
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
      let h = function(g, m) {
        let S = !1;
        for (const v of Object.keys(m))
          g[v] === void 0 ? (g[v] = m[v], S = !0) : typeof m[v] == "object" && m[v] !== null && (g[v] = g[v] || {}, h(g[v], m[v]) && (S = !0));
        return S;
      };
      s && u.version !== s && (p.version.changed = !0, p.version.new = s, u.version = s), l && l !== "*" && u.formatVersion !== l && (p.formatVersion.changed = !0, p.formatVersion.new = l, u.formatVersion = l), (h(u, this.defaultSettings) || p.version.changed || p.formatVersion.changed) && this.saveSettings();
    } else if (Array.isArray(i)) {
      s && !u.version && (u.version = s, p.version.changed = !0, p.version.new = s), l && !u.formatVersion && (u.formatVersion = l, p.formatVersion.changed = !0, p.formatVersion.new = l);
      let h = structuredClone(u), g = u.formatVersion;
      try {
        let m;
        do {
          m = !1;
          let S = i.find((v) => v.from === g);
          if (S && S.to > g)
            h = await S.action(h), g = S.to, h.formatVersion = S.to, m = !0;
          else
            for (const v of i)
              if (v.from === "*" && v.to > g && g !== v.to) {
                h = await v.action(h), g = v.to, h.formatVersion = v.to, m = !0;
                break;
              }
        } while (m);
        if (g !== u.formatVersion) {
          p.formatVersion.changed = !0, p.formatVersion.new = g;
          const S = this.defaultSettings.version;
          S && (h.version = S);
        }
        if (p.formatVersion.changed) {
          for (const S of Object.keys(u))
            delete u[S];
          Object.assign(u, h), this.saveSettings();
        }
      } catch (m) {
        throw console.error("Failed to apply version changes:", m), new Error(`Version migration failed: ${m instanceof Error ? m.message : m}`, {
          cause: m
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
function Ar(t) {
  return Array.isArray ? Array.isArray(t) : l0(t) === "[object Array]";
}
function C2(t) {
  if (typeof t == "string")
    return t;
  let r = t + "";
  return r == "0" && 1 / t == -1 / 0 ? "-0" : r;
}
function N2(t) {
  return t == null ? "" : C2(t);
}
function ar(t) {
  return typeof t == "string";
}
function s0(t) {
  return typeof t == "number";
}
function A2(t) {
  return t === !0 || t === !1 || T2(t) && l0(t) == "[object Boolean]";
}
function o0(t) {
  return typeof t == "object";
}
function T2(t) {
  return o0(t) && t !== null;
}
function Nn(t) {
  return t != null;
}
function Xf(t) {
  return !t.trim().length;
}
function l0(t) {
  return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
}
const O2 = "Incorrect 'index' type", k2 = (t) => `Invalid value for key ${t}`, j2 = (t) => `Pattern length exceeds max of ${t}.`, M2 = (t) => `Missing ${t} property in key`, D2 = (t) => `Property 'weight' in key '${t}' must be a positive integer`, dv = Object.prototype.hasOwnProperty;
class R2 {
  constructor(r) {
    this._keys = [], this._keyMap = {};
    let i = 0;
    r.forEach((s) => {
      let l = u0(s);
      this._keys.push(l), this._keyMap[l.id] = l, i += l.weight;
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
function u0(t) {
  let r = null, i = null, s = null, l = 1, u = null;
  if (ar(t) || Ar(t))
    s = t, r = hv(t), i = bd(t);
  else {
    if (!dv.call(t, "name"))
      throw new Error(M2("name"));
    const f = t.name;
    if (s = f, dv.call(t, "weight") && (l = t.weight, l <= 0))
      throw new Error(D2(f));
    r = hv(f), i = bd(f), u = t.getFn;
  }
  return { path: r, id: i, weight: l, src: s, getFn: u };
}
function hv(t) {
  return Ar(t) ? t : t.split(".");
}
function bd(t) {
  return Ar(t) ? t.join(".") : t;
}
function z2(t, r) {
  let i = [], s = !1;
  const l = (u, f, p) => {
    if (Nn(u))
      if (!f[p])
        i.push(u);
      else {
        let h = f[p];
        const g = u[h];
        if (!Nn(g))
          return;
        if (p === f.length - 1 && (ar(g) || s0(g) || A2(g)))
          i.push(N2(g));
        else if (Ar(g)) {
          s = !0;
          for (let m = 0, S = g.length; m < S; m += 1)
            l(g[m], f, p + 1);
        } else f.length && l(g, f, p + 1);
      }
  };
  return l(t, ar(r) ? r.split(".") : r, 0), s ? i : i[0];
}
const L2 = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: !1,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: !1,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
}, I2 = {
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
}, P2 = {
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
}, B2 = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: !1,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: z2,
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
  ...I2,
  ...L2,
  ...P2,
  ...B2
};
const U2 = /[^ ]+/g;
function H2(t = 1, r = 3) {
  const i = /* @__PURE__ */ new Map(), s = Math.pow(10, r);
  return {
    get(l) {
      const u = l.match(U2).length;
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
class Gd {
  constructor({
    getFn: r = Ne.getFn,
    fieldNormWeight: i = Ne.fieldNormWeight
  } = {}) {
    this.norm = H2(i, 3), this.getFn = r, this.isCreated = !1, this.setIndexRecords();
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
    this.isCreated || !this.docs.length || (this.isCreated = !0, ar(this.docs[0]) ? this.docs.forEach((r, i) => {
      this._addString(r, i);
    }) : this.docs.forEach((r, i) => {
      this._addObject(r, i);
    }), this.norm.clear());
  }
  // Adds a doc to the end of the index
  add(r) {
    const i = this.size();
    ar(r) ? this._addString(r, i) : this._addObject(r, i);
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
    if (!Nn(r) || Xf(r))
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
    this.keys.forEach((l, u) => {
      let f = l.getFn ? l.getFn(r) : this.getFn(r, l.path);
      if (Nn(f)) {
        if (Ar(f)) {
          let p = [];
          const h = [{ nestedArrIndex: -1, value: f }];
          for (; h.length; ) {
            const { nestedArrIndex: g, value: m } = h.pop();
            if (Nn(m))
              if (ar(m) && !Xf(m)) {
                let S = {
                  v: m,
                  i: g,
                  n: this.norm.get(m)
                };
                p.push(S);
              } else Ar(m) && m.forEach((S, v) => {
                h.push({
                  nestedArrIndex: v,
                  value: S
                });
              });
          }
          s.$[u] = p;
        } else if (ar(f) && !Xf(f)) {
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
function c0(t, r, { getFn: i = Ne.getFn, fieldNormWeight: s = Ne.fieldNormWeight } = {}) {
  const l = new Gd({ getFn: i, fieldNormWeight: s });
  return l.setKeys(t.map(u0)), l.setSources(r), l.create(), l;
}
function q2(t, { getFn: r = Ne.getFn, fieldNormWeight: i = Ne.fieldNormWeight } = {}) {
  const { keys: s, records: l } = t, u = new Gd({ getFn: r, fieldNormWeight: i });
  return u.setKeys(s), u.setIndexRecords(l), u;
}
function Sl(t, {
  errors: r = 0,
  currentLocation: i = 0,
  expectedLocation: s = 0,
  distance: l = Ne.distance,
  ignoreLocation: u = Ne.ignoreLocation
} = {}) {
  const f = r / t.length;
  if (u)
    return f;
  const p = Math.abs(s - i);
  return l ? f + p / l : p ? 1 : f;
}
function F2(t = [], r = Ne.minMatchCharLength) {
  let i = [], s = -1, l = -1, u = 0;
  for (let f = t.length; u < f; u += 1) {
    let p = t[u];
    p && s === -1 ? s = u : !p && s !== -1 && (l = u - 1, l - s + 1 >= r && i.push([s, l]), s = -1);
  }
  return t[u - 1] && u - s >= r && i.push([s, u - 1]), i;
}
const ja = 32;
function Z2(t, r, i, {
  location: s = Ne.location,
  distance: l = Ne.distance,
  threshold: u = Ne.threshold,
  findAllMatches: f = Ne.findAllMatches,
  minMatchCharLength: p = Ne.minMatchCharLength,
  includeMatches: h = Ne.includeMatches,
  ignoreLocation: g = Ne.ignoreLocation
} = {}) {
  if (r.length > ja)
    throw new Error(j2(ja));
  const m = r.length, S = t.length, v = Math.max(0, Math.min(s, S));
  let y = u, d = v;
  const x = p > 1 || h, w = x ? Array(S) : [];
  let A;
  for (; (A = t.indexOf(r, d)) > -1; ) {
    let R = Sl(r, {
      currentLocation: A,
      expectedLocation: v,
      distance: l,
      ignoreLocation: g
    });
    if (y = Math.min(R, y), d = A + m, x) {
      let H = 0;
      for (; H < m; )
        w[A + H] = 1, H += 1;
    }
  }
  d = -1;
  let C = [], T = 1, E = m + S;
  const O = 1 << m - 1;
  for (let R = 0; R < m; R += 1) {
    let H = 0, Q = E;
    for (; H < Q; )
      Sl(r, {
        errors: R,
        currentLocation: v + Q,
        expectedLocation: v,
        distance: l,
        ignoreLocation: g
      }) <= y ? H = Q : E = Q, Q = Math.floor((E - H) / 2 + H);
    E = Q;
    let B = Math.max(1, v - Q + 1), V = f ? S : Math.min(v + Q, S) + m, $ = Array(V + 2);
    $[V + 1] = (1 << R) - 1;
    for (let te = V; te >= B; te -= 1) {
      let W = te - 1, L = i[t.charAt(W)];
      if (x && (w[W] = +!!L), $[te] = ($[te + 1] << 1 | 1) & L, R && ($[te] |= (C[te + 1] | C[te]) << 1 | 1 | C[te + 1]), $[te] & O && (T = Sl(r, {
        errors: R,
        currentLocation: W,
        expectedLocation: v,
        distance: l,
        ignoreLocation: g
      }), T <= y)) {
        if (y = T, d = W, d <= v)
          break;
        B = Math.max(1, 2 * v - d);
      }
    }
    if (Sl(r, {
      errors: R + 1,
      currentLocation: v,
      expectedLocation: v,
      distance: l,
      ignoreLocation: g
    }) > y)
      break;
    C = $;
  }
  const j = {
    isMatch: d >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, T)
  };
  if (x) {
    const R = F2(w, p);
    R.length ? h && (j.indices = R) : j.isMatch = !1;
  }
  return j;
}
function G2(t) {
  let r = {};
  for (let i = 0, s = t.length; i < s; i += 1) {
    const l = t.charAt(i);
    r[l] = (r[l] || 0) | 1 << s - i - 1;
  }
  return r;
}
const fu = String.prototype.normalize ? ((t) => t.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((t) => t);
class f0 {
  constructor(r, {
    location: i = Ne.location,
    threshold: s = Ne.threshold,
    distance: l = Ne.distance,
    includeMatches: u = Ne.includeMatches,
    findAllMatches: f = Ne.findAllMatches,
    minMatchCharLength: p = Ne.minMatchCharLength,
    isCaseSensitive: h = Ne.isCaseSensitive,
    ignoreDiacritics: g = Ne.ignoreDiacritics,
    ignoreLocation: m = Ne.ignoreLocation
  } = {}) {
    if (this.options = {
      location: i,
      threshold: s,
      distance: l,
      includeMatches: u,
      findAllMatches: f,
      minMatchCharLength: p,
      isCaseSensitive: h,
      ignoreDiacritics: g,
      ignoreLocation: m
    }, r = h ? r : r.toLowerCase(), r = g ? fu(r) : r, this.pattern = r, this.chunks = [], !this.pattern.length)
      return;
    const S = (y, d) => {
      this.chunks.push({
        pattern: y,
        alphabet: G2(y),
        startIndex: d
      });
    }, v = this.pattern.length;
    if (v > ja) {
      let y = 0;
      const d = v % ja, x = v - d;
      for (; y < x; )
        S(this.pattern.substr(y, ja), y), y += ja;
      if (d) {
        const w = v - ja;
        S(this.pattern.substr(w), w);
      }
    } else
      S(this.pattern, 0);
  }
  searchIn(r) {
    const { isCaseSensitive: i, ignoreDiacritics: s, includeMatches: l } = this.options;
    if (r = i ? r : r.toLowerCase(), r = s ? fu(r) : r, this.pattern === r) {
      let x = {
        isMatch: !0,
        score: 0
      };
      return l && (x.indices = [[0, r.length - 1]]), x;
    }
    const {
      location: u,
      distance: f,
      threshold: p,
      findAllMatches: h,
      minMatchCharLength: g,
      ignoreLocation: m
    } = this.options;
    let S = [], v = 0, y = !1;
    this.chunks.forEach(({ pattern: x, alphabet: w, startIndex: A }) => {
      const { isMatch: C, score: T, indices: E } = Z2(r, x, w, {
        location: u + A,
        distance: f,
        threshold: p,
        findAllMatches: h,
        minMatchCharLength: g,
        includeMatches: l,
        ignoreLocation: m
      });
      C && (y = !0), v += T, C && E && (S = [...S, ...E]);
    });
    let d = {
      isMatch: y,
      score: y ? v / this.chunks.length : 1
    };
    return y && l && (d.indices = S), d;
  }
}
class ia {
  constructor(r) {
    this.pattern = r;
  }
  static isMultiMatch(r) {
    return pv(r, this.multiRegex);
  }
  static isSingleMatch(r) {
    return pv(r, this.singleRegex);
  }
  search() {
  }
}
function pv(t, r) {
  const i = t.match(r);
  return i ? i[1] : null;
}
class V2 extends ia {
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
class Y2 extends ia {
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
class $2 extends ia {
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
class X2 extends ia {
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
class Q2 extends ia {
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
class J2 extends ia {
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
class d0 extends ia {
  constructor(r, {
    location: i = Ne.location,
    threshold: s = Ne.threshold,
    distance: l = Ne.distance,
    includeMatches: u = Ne.includeMatches,
    findAllMatches: f = Ne.findAllMatches,
    minMatchCharLength: p = Ne.minMatchCharLength,
    isCaseSensitive: h = Ne.isCaseSensitive,
    ignoreDiacritics: g = Ne.ignoreDiacritics,
    ignoreLocation: m = Ne.ignoreLocation
  } = {}) {
    super(r), this._bitapSearch = new f0(r, {
      location: i,
      threshold: s,
      distance: l,
      includeMatches: u,
      findAllMatches: f,
      minMatchCharLength: p,
      isCaseSensitive: h,
      ignoreDiacritics: g,
      ignoreLocation: m
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
class h0 extends ia {
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
    const l = [], u = this.pattern.length;
    for (; (s = r.indexOf(this.pattern, i)) > -1; )
      i = s + u, l.push([s, i - 1]);
    const f = !!l.length;
    return {
      isMatch: f,
      score: f ? 0 : 1,
      indices: l
    };
  }
}
const _d = [
  V2,
  h0,
  $2,
  X2,
  J2,
  Q2,
  Y2,
  d0
], mv = _d.length, K2 = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, W2 = "|";
function eS(t, r = {}) {
  return t.split(W2).map((i) => {
    let s = i.trim().split(K2).filter((u) => u && !!u.trim()), l = [];
    for (let u = 0, f = s.length; u < f; u += 1) {
      const p = s[u];
      let h = !1, g = -1;
      for (; !h && ++g < mv; ) {
        const m = _d[g];
        let S = m.isMultiMatch(p);
        S && (l.push(new m(S, r)), h = !0);
      }
      if (!h)
        for (g = -1; ++g < mv; ) {
          const m = _d[g];
          let S = m.isSingleMatch(p);
          if (S) {
            l.push(new m(S, r));
            break;
          }
        }
    }
    return l;
  });
}
const tS = /* @__PURE__ */ new Set([d0.type, h0.type]);
class nS {
  constructor(r, {
    isCaseSensitive: i = Ne.isCaseSensitive,
    ignoreDiacritics: s = Ne.ignoreDiacritics,
    includeMatches: l = Ne.includeMatches,
    minMatchCharLength: u = Ne.minMatchCharLength,
    ignoreLocation: f = Ne.ignoreLocation,
    findAllMatches: p = Ne.findAllMatches,
    location: h = Ne.location,
    threshold: g = Ne.threshold,
    distance: m = Ne.distance
  } = {}) {
    this.query = null, this.options = {
      isCaseSensitive: i,
      ignoreDiacritics: s,
      includeMatches: l,
      minMatchCharLength: u,
      findAllMatches: p,
      ignoreLocation: f,
      location: h,
      threshold: g,
      distance: m
    }, r = i ? r : r.toLowerCase(), r = s ? fu(r) : r, this.pattern = r, this.query = eS(this.pattern, this.options);
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
    const { includeMatches: s, isCaseSensitive: l, ignoreDiacritics: u } = this.options;
    r = l ? r : r.toLowerCase(), r = u ? fu(r) : r;
    let f = 0, p = [], h = 0;
    for (let g = 0, m = i.length; g < m; g += 1) {
      const S = i[g];
      p.length = 0, f = 0;
      for (let v = 0, y = S.length; v < y; v += 1) {
        const d = S[v], { isMatch: x, indices: w, score: A } = d.search(r);
        if (x) {
          if (f += 1, h += A, s) {
            const C = d.constructor.type;
            tS.has(C) ? p = [...p, ...w] : p.push(w);
          }
        } else {
          h = 0, f = 0, p.length = 0;
          break;
        }
      }
      if (f) {
        let v = {
          isMatch: !0,
          score: h / f
        };
        return s && (v.indices = p), v;
      }
    }
    return {
      isMatch: !1,
      score: 1
    };
  }
}
const Sd = [];
function rS(...t) {
  Sd.push(...t);
}
function xd(t, r) {
  for (let i = 0, s = Sd.length; i < s; i += 1) {
    let l = Sd[i];
    if (l.condition(t, r))
      return new l(t, r);
  }
  return new f0(t, r);
}
const du = {
  AND: "$and",
  OR: "$or"
}, Ed = {
  PATH: "$path",
  PATTERN: "$val"
}, wd = (t) => !!(t[du.AND] || t[du.OR]), aS = (t) => !!t[Ed.PATH], iS = (t) => !Ar(t) && o0(t) && !wd(t), gv = (t) => ({
  [du.AND]: Object.keys(t).map((r) => ({
    [r]: t[r]
  }))
});
function p0(t, r, { auto: i = !0 } = {}) {
  const s = (l) => {
    let u = Object.keys(l);
    const f = aS(l);
    if (!f && u.length > 1 && !wd(l))
      return s(gv(l));
    if (iS(l)) {
      const h = f ? l[Ed.PATH] : u[0], g = f ? l[Ed.PATTERN] : l[h];
      if (!ar(g))
        throw new Error(k2(h));
      const m = {
        keyId: bd(h),
        pattern: g
      };
      return i && (m.searcher = xd(g, r)), m;
    }
    let p = {
      children: [],
      operator: u[0]
    };
    return u.forEach((h) => {
      const g = l[h];
      Ar(g) && g.forEach((m) => {
        p.children.push(s(m));
      });
    }), p;
  };
  return wd(t) || (t = gv(t)), s(t);
}
function sS(t, { ignoreFieldNorm: r = Ne.ignoreFieldNorm }) {
  t.forEach((i) => {
    let s = 1;
    i.matches.forEach(({ key: l, norm: u, score: f }) => {
      const p = l ? l.weight : null;
      s *= Math.pow(
        f === 0 && p ? Number.EPSILON : f,
        (p || 1) * (r ? 1 : u)
      );
    }), i.score = s;
  });
}
function oS(t, r) {
  const i = t.matches;
  r.matches = [], Nn(i) && i.forEach((s) => {
    if (!Nn(s.indices) || !s.indices.length)
      return;
    const { indices: l, value: u } = s;
    let f = {
      indices: l,
      value: u
    };
    s.key && (f.key = s.key.src), s.idx > -1 && (f.refIndex = s.idx), r.matches.push(f);
  });
}
function lS(t, r) {
  r.score = t.score;
}
function uS(t, r, {
  includeMatches: i = Ne.includeMatches,
  includeScore: s = Ne.includeScore
} = {}) {
  const l = [];
  return i && l.push(oS), s && l.push(lS), t.map((u) => {
    const { idx: f } = u, p = {
      item: r[f],
      refIndex: f
    };
    return l.length && l.forEach((h) => {
      h(u, p);
    }), p;
  });
}
class Bi {
  constructor(r, i = {}, s) {
    this.options = { ...Ne, ...i }, this.options.useExtendedSearch, this._keyStore = new R2(this.options.keys), this.setCollection(r, s);
  }
  setCollection(r, i) {
    if (this._docs = r, i && !(i instanceof Gd))
      throw new Error(O2);
    this._myIndex = i || c0(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(r) {
    Nn(r) && (this._docs.push(r), this._myIndex.add(r));
  }
  remove(r = () => !1) {
    const i = [];
    for (let s = 0, l = this._docs.length; s < l; s += 1) {
      const u = this._docs[s];
      r(u, s) && (this.removeAt(s), s -= 1, l -= 1, i.push(u));
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
      includeScore: l,
      shouldSort: u,
      sortFn: f,
      ignoreFieldNorm: p
    } = this.options;
    let h = ar(r) ? ar(this._docs[0]) ? this._searchStringList(r) : this._searchObjectList(r) : this._searchLogical(r);
    return sS(h, { ignoreFieldNorm: p }), u && h.sort(f), s0(i) && i > -1 && (h = h.slice(0, i)), uS(h, this._docs, {
      includeMatches: s,
      includeScore: l
    });
  }
  _searchStringList(r) {
    const i = xd(r, this.options), { records: s } = this._myIndex, l = [];
    return s.forEach(({ v: u, i: f, n: p }) => {
      if (!Nn(u))
        return;
      const { isMatch: h, score: g, indices: m } = i.searchIn(u);
      h && l.push({
        item: u,
        idx: f,
        matches: [{ score: g, value: u, norm: p, indices: m }]
      });
    }), l;
  }
  _searchLogical(r) {
    const i = p0(r, this.options), s = (p, h, g) => {
      if (!p.children) {
        const { keyId: S, searcher: v } = p, y = this._findMatches({
          key: this._keyStore.get(S),
          value: this._myIndex.getValueForItemAtKeyId(h, S),
          searcher: v
        });
        return y && y.length ? [
          {
            idx: g,
            item: h,
            matches: y
          }
        ] : [];
      }
      const m = [];
      for (let S = 0, v = p.children.length; S < v; S += 1) {
        const y = p.children[S], d = s(y, h, g);
        if (d.length)
          m.push(...d);
        else if (p.operator === du.AND)
          return [];
      }
      return m;
    }, l = this._myIndex.records, u = {}, f = [];
    return l.forEach(({ $: p, i: h }) => {
      if (Nn(p)) {
        let g = s(i, p, h);
        g.length && (u[h] || (u[h] = { idx: h, item: p, matches: [] }, f.push(u[h])), g.forEach(({ matches: m }) => {
          u[h].matches.push(...m);
        }));
      }
    }), f;
  }
  _searchObjectList(r) {
    const i = xd(r, this.options), { keys: s, records: l } = this._myIndex, u = [];
    return l.forEach(({ $: f, i: p }) => {
      if (!Nn(f))
        return;
      let h = [];
      s.forEach((g, m) => {
        h.push(
          ...this._findMatches({
            key: g,
            value: f[m],
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
    if (!Nn(i))
      return [];
    let l = [];
    if (Ar(i))
      i.forEach(({ v: u, i: f, n: p }) => {
        if (!Nn(u))
          return;
        const { isMatch: h, score: g, indices: m } = s.searchIn(u);
        h && l.push({
          score: g,
          key: r,
          value: u,
          idx: f,
          norm: p,
          indices: m
        });
      });
    else {
      const { v: u, n: f } = i, { isMatch: p, score: h, indices: g } = s.searchIn(u);
      p && l.push({ score: h, key: r, value: u, norm: f, indices: g });
    }
    return l;
  }
}
Bi.version = "7.1.0";
Bi.createIndex = c0;
Bi.parseIndex = q2;
Bi.config = Ne;
Bi.parseQuery = p0;
rS(nS);
var cS = Object.defineProperty, fS = (t, r, i) => r in t ? cS(t, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[r] = i, dS = (t, r, i) => fS(t, r + "", i);
let hS = class {
  constructor() {
    dS(this, "requestMap"), this.requestMap = /* @__PURE__ */ new Map();
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
    const l = SillyTavern.getContext(), u = l.uuidv4(), f = ((s = r?.custom) == null ? void 0 : s.stream) ?? !1;
    if (this.requestMap.set(u, {
      abortController: i?.abortController,
      isStream: f,
      options: i
    }), f)
      try {
        const p = await l.ConnectionManagerRequestService.sendRequest(
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
        const p = await l.ConnectionManagerRequestService.sendRequest(
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
async function pS(t, ...r) {
  await SillyTavern.getContext().SlashCommandParser.commands[t].callback(...r);
}
async function xe(t, r, { escapeHtml: i = !0 } = {}) {
  await pS("echo", { severity: t, escapeHtml: (!!i).toString() }, r);
}
function Qf(t) {
  return G_(t);
}
function vv(t, r) {
  return F_(t, r);
}
function xl(t, r, i) {
  return Z_(t, r, i);
}
function mS(t, r, i) {
  return Q_(t, r, i);
}
function gS(t, r) {
  return J_(t, r);
}
function vS(t, {
  customStoryString: r,
  customInstructSettings: i
} = {}) {
  return q_(t, { customStoryString: r, customInstructSettings: i });
}
function Na(t) {
  return r2(t);
}
function yS() {
  return {
    prompt: zs[Ls.prompt],
    interval: zs[Ls.interval],
    position: zs[Ls.position],
    depth: zs[Ls.depth],
    role: zs[Ls.role]
  };
}
function bS(t, r) {
  return i2(t, r);
}
function _S({
  name2: t,
  charDescription: r,
  charPersonality: i,
  Scenario: s,
  worldInfoBefore: l,
  worldInfoAfter: u,
  bias: f,
  type: p,
  quietPrompt: h,
  quietImage: g,
  extensionPrompts: m,
  cyclePrompt: S,
  systemPromptOverride: v,
  jailbreakPromptOverride: y,
  personaDescription: d,
  messages: x,
  messageExamples: w
}, A) {
  return a2(
    {
      name2: t,
      charDescription: r,
      charPersonality: i,
      Scenario: s,
      worldInfoBefore: l,
      worldInfoAfter: u,
      bias: f,
      type: p,
      quietPrompt: h,
      quietImage: g,
      cyclePrompt: S,
      systemPromptOverride: v,
      jailbreakPromptOverride: y,
      personaDescription: d,
      extensionPrompts: m,
      messages: x,
      messageExamples: w
    },
    A
  );
}
function SS(t) {
  return W_(t);
}
function xS(t) {
  return e2(t);
}
function ES(t, r, {
  characterOverride: i,
  isMarkdown: s,
  isPrompt: l,
  isEdit: u,
  depth: f
}) {
  return s2(t, r, { characterOverride: i, isMarkdown: s, isPrompt: l, isEdit: u, depth: f });
}
async function wS(t, r) {
  return await K_(t, r);
}
function yv(t, {
  wiFormat: r
} = {}) {
  return t2(t, { wiFormat: r });
}
function Bs(t) {
  return n2(t);
}
class CS {
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
var NS = Object.defineProperty, AS = (t, r, i) => r in t ? NS(t, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[r] = i, El = (t, r, i) => AS(t, typeof r != "symbol" ? r + "" : r, i);
class TS {
  constructor(r) {
    El(this, "messages", []), El(this, "tokenizer"), El(this, "maxContext"), El(this, "currentTokenCount", 0), this.tokenizer = new CS(), this.maxContext = r;
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
    const i = r.filter((p) => p.content), s = i.map((p) => this.getTokenCount(p)), l = s.reduce((p, h) => p + h, 0);
    if (this.currentTokenCount + l <= this.maxContext)
      return this.messages.push(...i), this.currentTokenCount += l, !0;
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
async function m0(t, {
  targetCharacterId: r,
  presetName: i,
  instructName: s,
  contextName: l,
  syspromptName: u,
  maxContext: f,
  includeNames: p,
  ignoreCharacterFields: h,
  ignoreAuthorNote: g,
  ignoreWorldInfo: m,
  messageIndexesBetween: S
} = {}) {
  var v, y, d, x, w, A, C, T, E, O, j, R, H, Q;
  if (!["textgenerationwebui", "openai"].includes(t))
    throw new Error("Unsupported API");
  const B = SillyTavern.getContext();
  let { description: V, personality: $, persona: F, scenario: te, mesExamples: W, system: L, jailbreak: ae } = h ? {
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
  const de = t === "textgenerationwebui" ? (v = B.getPresetManager("instruct")) == null ? void 0 : v.getCompletionPresetByName(s) : void 0, Oe = !!(de != null && de.enabled);
  let D = vv(W, Oe);
  function J() {
    var me, pe;
    if (typeof f == "number")
      return f;
    if (!f || f === "active" || !i)
      return Qf();
    if (typeof f == "number")
      return f;
    let Ge;
    if (t === "textgenerationwebui") {
      const He = (me = B.getPresetManager("textgenerationwebui")) == null ? void 0 : me.getCompletionPresetByName(i);
      Ge = He?.max_length;
    } else {
      const He = (pe = B.getPresetManager("openai")) == null ? void 0 : pe.getCompletionPresetByName(i);
      Ge = He?.openai_max_context;
    }
    return typeof Ge == "number" ? Ge : Qf();
  }
  let se = [];
  const le = J();
  if (le <= 0)
    return { result: [], warnings: se };
  const ue = new TS(le), De = B.ToolManager.isToolCallingSupported(), X = S?.start ?? 0, ve = S != null && S.end ? S.end + 1 : void 0;
  let ye = X === -1 && ve === 0 ? [] : B.chat.slice(X, ve).filter((me) => {
    var pe;
    return !me.is_system || De && Array.isArray((pe = me.extra) == null ? void 0 : pe.tool_invocations);
  });
  ye = await Promise.all(
    ye.map(async (me, pe) => {
      var Ge, He;
      let it = me.mes, P = me.is_user ? Jg.USER_INPUT : Jg.AI_OUTPUT, oe = { isPrompt: !0, depth: ye.length - pe - 1 }, ie = ES(it, P, oe);
      return ie = await wS(me, ie), (Ge = me?.extra) != null && Ge.append_title && (He = me?.extra) != null && He.title && (ie = `${ie}

${me.extra.title}`), {
        ...me,
        mes: ie,
        index: pe
      };
    })
  );
  const $e = ye.map((me) => $_ ? `${me.name}: ${me.mes}` : me.mes).reverse(), { worldInfoString: ct, worldInfoBefore: je, worldInfoAfter: at, worldInfoExamples: qn, worldInfoDepth: kt, anBefore: tn, anAfter: Ze } = m ? {
    worldInfoString: "",
    worldInfoBefore: "",
    worldInfoAfter: "",
    worldInfoExamples: [],
    worldInfoDepth: [],
    anBefore: [],
    anAfter: []
  } : await B.getWorldInfoPrompt($e, le, !1);
  for (const me of qn) {
    const pe = me.content;
    if (pe.length === 0)
      continue;
    const Ge = xl(pe, wr, Wr), He = vv(Ge, Oe);
    me.position === X_.before ? D.unshift(...He) : D.push(...He);
  }
  function Xe() {
    const me = [];
    for (let pe = ye.length - 1; pe >= 0; pe--) {
      const Ge = ye[pe], He = Ge.name === "System" && !Ge.is_user ? "system" : Ge.is_user ? "user" : "assistant";
      me.unshift({
        role: He,
        content: p && He != "system" ? `${Ge.name}: ${Ge.mes}` : Ge.mes,
        source: Ge
      });
    }
    ue.addMany(me);
  }
  if (t === "textgenerationwebui") {
    const me = [...D];
    D && (D = mS(D, wr, Wr));
    const pe = (y = B.getPresetManager("sysprompt")) == null ? void 0 : y.getCompletionPresetByName(u);
    pe && (L = B.powerUserSettings.prefer_character_prompt && L ? L : xl(pe.content, wr, Wr), L = Oe ? gS(
      B.substituteParams(L, wr, Wr, pe.content),
      de
    ) : L);
    const Ge = {
      description: V,
      personality: $,
      persona: B.powerUserSettings.persona_description_position == Xg.IN_PROMPT ? F : "",
      scenario: te,
      system: L,
      char: Wr,
      user: wr,
      wiBefore: je,
      wiAfter: at,
      loreBefore: je,
      loreAfter: at,
      mesExamples: D.join(""),
      mesExamplesRaw: me.join("")
    }, He = (d = B.getPresetManager("context")) == null ? void 0 : d.getCompletionPresetByName(l);
    let it = vS(Ge, {
      customInstructSettings: de,
      customStoryString: He?.story_string
    });
    it && ue.add({ role: "system", content: it, ignoreInstruct: !0 }), Xe();
  } else {
    let me = function(st) {
      const nn = Re.find((Ba) => Ba.identifier === st);
      if (nn)
        return nn;
      const uo = it.prompts.find((Ba) => Ba.identifier === st);
      if (uo)
        return uo;
    }, pe = SS(ye), Ge = xS(D);
    async function He() {
      let [st, nn] = await _S(
        {
          name2: Wr,
          charDescription: V,
          charPersonality: $,
          Scenario: te,
          worldInfoBefore: je,
          worldInfoAfter: at,
          extensionPrompts: B.extensionPrompts,
          bias: "",
          type: "normal",
          quietPrompt: void 0,
          quietImage: void 0,
          cyclePrompt: "",
          systemPromptOverride: L,
          jailbreakPromptOverride: ae,
          personaDescription: F,
          messages: pe,
          messageExamples: Ge
        },
        !1
      );
      ue.addMany(st);
    }
    if (!i)
      return se.push("No preset name provided. Using default preset."), await He(), { result: ue.getMessages(), warnings: se };
    const it = (x = B.getPresetManager("openai")) == null ? void 0 : x.getCompletionPresetByName(i);
    if (!it)
      return console.warn(`Preset not found: ${i}. Using current preset.`), se.push(`Preset not found: ${i}. Using current preset.`), He(), { result: ue.getMessages(), warnings: se };
    let P = (w = it.prompt_order) == null ? void 0 : w.find((st) => st.character_id === Tn);
    if (!P && it.prompt_order && it.prompt_order.length > 0 && (P = it.prompt_order[0]), !P)
      return console.warn(`No prompt order found for preset: ${i}. Using current preset.`), se.push(`No prompt order found for preset: ${i}. Using current preset.`), He(), { result: ue.getMessages(), warnings: se };
    const oe = te && it.scenario_format ? B.substituteParams(it.scenario_format) : "", ie = $ && it.personality_format ? B.substituteParams(it.personality_format) : "", be = B.substituteParams(it.group_nudge_prompt), Be = it.impersonation_prompt ? B.substituteParams(it.impersonation_prompt) : "", Re = [];
    m || Re.push(
      {
        role: "system",
        content: yv(je, { wiFormat: it.wi_format }),
        identifier: "worldInfoBefore"
      },
      {
        role: "system",
        content: yv(at, { wiFormat: it.wi_format }),
        identifier: "worldInfoAfter"
      }
    ), h || Re.push(
      { role: "system", content: V, identifier: "charDescription" },
      { role: "system", content: ie, identifier: "charPersonality" },
      { role: "system", content: oe, identifier: "scenario" }
    ), Re.push(
      { role: "system", content: Be, identifier: "impersonate" },
      { role: "system", content: be, identifier: "groupNudge" }
    );
    const pt = B.extensionPrompts["1_memory"];
    pt && pt.value && Re.push({
      role: Na(pt.role),
      content: pt.value,
      identifier: "summary",
      position: Bs(pt.position)
    });
    const mn = B.extensionPrompts["2_floating_prompt"];
    !g && mn && mn.value && Re.push({
      role: Na(mn.role),
      content: mn.value,
      identifier: "authorsNote",
      position: Bs(mn.position)
    });
    const Xt = B.extensionPrompts["3_vectors"];
    Xt && Xt.value && Re.push({
      role: "system",
      content: Xt.value,
      identifier: "vectorsMemory",
      position: Bs(Xt.position)
    });
    const Qt = B.extensionPrompts["4_vectors_data_bank"];
    Qt && Qt.value && Re.push({
      role: Na(Qt.role),
      content: Qt.value,
      identifier: "vectorsDataBank",
      position: Bs(Qt.position)
    });
    const qe = B.extensionPrompts.chromadb;
    qe && qe.value && Re.push({
      role: "system",
      content: qe.value,
      identifier: "smartContext",
      position: Bs(qe.position)
    }), !h && B.powerUserSettings.persona_description && B.powerUserSettings.persona_description_position === Xg.IN_PROMPT && Re.push({
      role: "system",
      content: B.powerUserSettings.persona_description,
      identifier: "personaDescription"
    }), P.order.forEach((st) => {
      if (!st.enabled)
        return;
      const nn = me(st.identifier);
      if (nn && nn.content) {
        ue.add({
          role: nn.role ?? "system",
          content: B.substituteParams(nn.content)
        });
        return;
      }
      st.identifier === "chatHistory" && Xe();
    });
  }
  const Ve = [
    "1_memory",
    "2_floating_prompt",
    "3_vectors",
    "4_vectors_data_bank",
    "chromadb",
    "PERSONA_DESCRIPTION",
    "QUIET_PROMPT",
    "DEPTH_PROMPT"
  ];
  for (const me in B.extensionPrompts)
    if (Object.hasOwn(B.extensionPrompts, me)) {
      const pe = B.extensionPrompts[me];
      if (Ve.includes(me) || !B.extensionPrompts[me].value || ![Ca.BEFORE_PROMPT, Ca.IN_PROMPT].includes(pe.position) || typeof pe.filter == "function" && !await pe.filter()) continue;
      const Ge = {
        role: Na(pe.role) ?? "system",
        content: pe.value
      };
      if (pe.position === Ca.BEFORE_PROMPT)
        ue.insert(pe.depth, Ge);
      else if (pe.position === Ca.IN_PROMPT) {
        const He = ue.getMessages();
        ue.insert(He.length - pe.depth, Ge);
      }
    }
  for (const me of kt) {
    const pe = ue.getMessages();
    ue.insert(pe.length - me.depth, {
      role: Na(me.role),
      content: me.entries.join(`
`)
    });
  }
  if (!h) {
    const me = bS(Cr, Number(Tn));
    if (Cr && Array.isArray(me) && me.length > 0)
      me.filter((pe) => pe.text).forEach((pe, Ge) => {
        const He = ue.getMessages();
        ue.insert(He.length - pe.depth, { role: pe.role, content: pe.text });
      });
    else {
      const pe = xl(
        (O = (E = (T = (C = (A = B.characters[Tn]) == null ? void 0 : A.data) == null ? void 0 : C.extensions) == null ? void 0 : T.depth_prompt) == null ? void 0 : E.prompt) == null ? void 0 : O.trim(),
        wr,
        Wr
      ) || "";
      if (pe) {
        const Ge = Y_, He = ((Q = (H = (R = (j = B.characters[Tn]) == null ? void 0 : j.data) == null ? void 0 : R.extensions) == null ? void 0 : H.depth_prompt) == null ? void 0 : Q.role) ?? V_, it = ue.getMessages();
        ue.insert(it.length - Ge, {
          role: Na(He),
          content: pe
        });
      }
    }
  }
  let We = -1;
  if (!g) {
    const me = yS();
    if (me.prompt) {
      me.prompt = xl(me.prompt, wr, Wr);
      const pe = { role: Na(me.role), content: me.prompt };
      switch (me.position) {
        case Ca.IN_PROMPT:
          ue.insert(1, pe), We = 1;
          break;
        case Ca.IN_CHAT:
          We = ue.getMessages().length - me.depth, ue.insert(We, pe);
          break;
        case Ca.BEFORE_PROMPT:
          ue.addFront(pe), We = 0;
          break;
      }
    }
  }
  return We >= 0 && (tn.length > 0 && (ue.insert(We, { role: "system", content: tn.join(`
`) }), We++), Ze.length > 0 && ue.insert(We + 1, { role: "system", content: Ze.join(`
`) })), { result: ue.getMessages(), warnings: se };
}
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function bv(t, r) {
  var i = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    r && (s = s.filter(function(l) {
      return Object.getOwnPropertyDescriptor(t, l).enumerable;
    })), i.push.apply(i, s);
  }
  return i;
}
function sr(t) {
  for (var r = 1; r < arguments.length; r++) {
    var i = arguments[r] != null ? arguments[r] : {};
    r % 2 ? bv(Object(i), !0).forEach(function(s) {
      OS(t, s, i[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : bv(Object(i)).forEach(function(s) {
      Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(i, s));
    });
  }
  return t;
}
function au(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? au = function(r) {
    return typeof r;
  } : au = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, au(t);
}
function OS(t, r, i) {
  return r in t ? Object.defineProperty(t, r, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[r] = i, t;
}
function Tr() {
  return Tr = Object.assign || function(t) {
    for (var r = 1; r < arguments.length; r++) {
      var i = arguments[r];
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
    }
    return t;
  }, Tr.apply(this, arguments);
}
function kS(t, r) {
  if (t == null) return {};
  var i = {}, s = Object.keys(t), l, u;
  for (u = 0; u < s.length; u++)
    l = s[u], !(r.indexOf(l) >= 0) && (i[l] = t[l]);
  return i;
}
function jS(t, r) {
  if (t == null) return {};
  var i = kS(t, r), s, l;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);
    for (l = 0; l < u.length; l++)
      s = u[l], !(r.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(t, s) && (i[s] = t[s]);
  }
  return i;
}
var MS = "1.15.6";
function Nr(t) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(t);
}
var Or = Nr(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), io = Nr(/Edge/i), _v = Nr(/firefox/i), Ks = Nr(/safari/i) && !Nr(/chrome/i) && !Nr(/android/i), Vd = Nr(/iP(ad|od|hone)/i), g0 = Nr(/chrome/i) && Nr(/android/i), v0 = {
  capture: !1,
  passive: !1
};
function Ue(t, r, i) {
  t.addEventListener(r, i, !Or && v0);
}
function Pe(t, r, i) {
  t.removeEventListener(r, i, !Or && v0);
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
function y0(t) {
  return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
}
function $n(t, r, i, s) {
  if (t) {
    i = i || document;
    do {
      if (r != null && (r[0] === ">" ? t.parentNode === i && hu(t, r) : hu(t, r)) || s && t === i)
        return t;
      if (t === i) break;
    } while (t = y0(t));
  }
  return null;
}
var Sv = /\s+/g;
function wn(t, r, i) {
  if (t && r)
    if (t.classList)
      t.classList[i ? "add" : "remove"](r);
    else {
      var s = (" " + t.className + " ").replace(Sv, " ").replace(" " + r + " ", " ");
      t.className = (s + (i ? " " + r : "")).replace(Sv, " ");
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
function zi(t, r) {
  var i = "";
  if (typeof t == "string")
    i = t;
  else
    do {
      var s = Ce(t, "transform");
      s && s !== "none" && (i = s + " " + i);
    } while (!r && (t = t.parentNode));
  var l = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return l && new l(i);
}
function b0(t, r, i) {
  if (t) {
    var s = t.getElementsByTagName(r), l = 0, u = s.length;
    if (i)
      for (; l < u; l++)
        i(s[l], l);
    return s;
  }
  return [];
}
function ir() {
  var t = document.scrollingElement;
  return t || document.documentElement;
}
function Tt(t, r, i, s, l) {
  if (!(!t.getBoundingClientRect && t !== window)) {
    var u, f, p, h, g, m, S;
    if (t !== window && t.parentNode && t !== ir() ? (u = t.getBoundingClientRect(), f = u.top, p = u.left, h = u.bottom, g = u.right, m = u.height, S = u.width) : (f = 0, p = 0, h = window.innerHeight, g = window.innerWidth, m = window.innerHeight, S = window.innerWidth), (r || i) && t !== window && (l = l || t.parentNode, !Or))
      do
        if (l && l.getBoundingClientRect && (Ce(l, "transform") !== "none" || i && Ce(l, "position") !== "static")) {
          var v = l.getBoundingClientRect();
          f -= v.top + parseInt(Ce(l, "border-top-width")), p -= v.left + parseInt(Ce(l, "border-left-width")), h = f + u.height, g = p + u.width;
          break;
        }
      while (l = l.parentNode);
    if (s && t !== window) {
      var y = zi(l || t), d = y && y.a, x = y && y.d;
      y && (f /= x, p /= d, S /= d, m /= x, h = f + m, g = p + S);
    }
    return {
      top: f,
      left: p,
      bottom: h,
      right: g,
      width: S,
      height: m
    };
  }
}
function xv(t, r, i) {
  for (var s = aa(t, !0), l = Tt(t)[r]; s; ) {
    var u = Tt(s)[i], f = void 0;
    if (f = l >= u, !f) return s;
    if (s === ir()) break;
    s = aa(s, !1);
  }
  return !1;
}
function Pi(t, r, i, s) {
  for (var l = 0, u = 0, f = t.children; u < f.length; ) {
    if (f[u].style.display !== "none" && f[u] !== Ae.ghost && (s || f[u] !== Ae.dragged) && $n(f[u], i.draggable, t, !1)) {
      if (l === r)
        return f[u];
      l++;
    }
    u++;
  }
  return null;
}
function Yd(t, r) {
  for (var i = t.lastElementChild; i && (i === Ae.ghost || Ce(i, "display") === "none" || r && !hu(i, r)); )
    i = i.previousElementSibling;
  return i || null;
}
function Bn(t, r) {
  var i = 0;
  if (!t || !t.parentNode)
    return -1;
  for (; t = t.previousElementSibling; )
    t.nodeName.toUpperCase() !== "TEMPLATE" && t !== Ae.clone && (!r || hu(t, r)) && i++;
  return i;
}
function Ev(t) {
  var r = 0, i = 0, s = ir();
  if (t)
    do {
      var l = zi(t), u = l.a, f = l.d;
      r += t.scrollLeft * u, i += t.scrollTop * f;
    } while (t !== s && (t = t.parentNode));
  return [r, i];
}
function DS(t, r) {
  for (var i in t)
    if (t.hasOwnProperty(i)) {
      for (var s in r)
        if (r.hasOwnProperty(s) && r[s] === t[i][s]) return Number(i);
    }
  return -1;
}
function aa(t, r) {
  if (!t || !t.getBoundingClientRect) return ir();
  var i = t, s = !1;
  do
    if (i.clientWidth < i.scrollWidth || i.clientHeight < i.scrollHeight) {
      var l = Ce(i);
      if (i.clientWidth < i.scrollWidth && (l.overflowX == "auto" || l.overflowX == "scroll") || i.clientHeight < i.scrollHeight && (l.overflowY == "auto" || l.overflowY == "scroll")) {
        if (!i.getBoundingClientRect || i === document.body) return ir();
        if (s || r) return i;
        s = !0;
      }
    }
  while (i = i.parentNode);
  return ir();
}
function RS(t, r) {
  if (t && r)
    for (var i in r)
      r.hasOwnProperty(i) && (t[i] = r[i]);
  return t;
}
function Jf(t, r) {
  return Math.round(t.top) === Math.round(r.top) && Math.round(t.left) === Math.round(r.left) && Math.round(t.height) === Math.round(r.height) && Math.round(t.width) === Math.round(r.width);
}
var Ws;
function _0(t, r) {
  return function() {
    if (!Ws) {
      var i = arguments, s = this;
      i.length === 1 ? t.call(s, i[0]) : t.apply(s, i), Ws = setTimeout(function() {
        Ws = void 0;
      }, r);
    }
  };
}
function zS() {
  clearTimeout(Ws), Ws = void 0;
}
function S0(t, r, i) {
  t.scrollLeft += r, t.scrollTop += i;
}
function x0(t) {
  var r = window.Polymer, i = window.jQuery || window.Zepto;
  return r && r.dom ? r.dom(t).cloneNode(!0) : i ? i(t).clone(!0)[0] : t.cloneNode(!0);
}
function E0(t, r, i) {
  var s = {};
  return Array.from(t.children).forEach(function(l) {
    var u, f, p, h;
    if (!(!$n(l, r.draggable, t, !1) || l.animated || l === i)) {
      var g = Tt(l);
      s.left = Math.min((u = s.left) !== null && u !== void 0 ? u : 1 / 0, g.left), s.top = Math.min((f = s.top) !== null && f !== void 0 ? f : 1 / 0, g.top), s.right = Math.max((p = s.right) !== null && p !== void 0 ? p : -1 / 0, g.right), s.bottom = Math.max((h = s.bottom) !== null && h !== void 0 ? h : -1 / 0, g.bottom);
    }
  }), s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
var fn = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function LS() {
  var t = [], r;
  return {
    captureAnimationState: function() {
      if (t = [], !!this.options.animation) {
        var s = [].slice.call(this.el.children);
        s.forEach(function(l) {
          if (!(Ce(l, "display") === "none" || l === Ae.ghost)) {
            t.push({
              target: l,
              rect: Tt(l)
            });
            var u = sr({}, t[t.length - 1].rect);
            if (l.thisAnimationDuration) {
              var f = zi(l, !0);
              f && (u.top -= f.f, u.left -= f.e);
            }
            l.fromRect = u;
          }
        });
      }
    },
    addAnimationState: function(s) {
      t.push(s);
    },
    removeAnimationState: function(s) {
      t.splice(DS(t, {
        target: s
      }), 1);
    },
    animateAll: function(s) {
      var l = this;
      if (!this.options.animation) {
        clearTimeout(r), typeof s == "function" && s();
        return;
      }
      var u = !1, f = 0;
      t.forEach(function(p) {
        var h = 0, g = p.target, m = g.fromRect, S = Tt(g), v = g.prevFromRect, y = g.prevToRect, d = p.rect, x = zi(g, !0);
        x && (S.top -= x.f, S.left -= x.e), g.toRect = S, g.thisAnimationDuration && Jf(v, S) && !Jf(m, S) && // Make sure animatingRect is on line between toRect & fromRect
        (d.top - S.top) / (d.left - S.left) === (m.top - S.top) / (m.left - S.left) && (h = PS(d, v, y, l.options)), Jf(S, m) || (g.prevFromRect = m, g.prevToRect = S, h || (h = l.options.animation), l.animate(g, d, S, h)), h && (u = !0, f = Math.max(f, h), clearTimeout(g.animationResetTimer), g.animationResetTimer = setTimeout(function() {
          g.animationTime = 0, g.prevFromRect = null, g.fromRect = null, g.prevToRect = null, g.thisAnimationDuration = null;
        }, h), g.thisAnimationDuration = h);
      }), clearTimeout(r), u ? r = setTimeout(function() {
        typeof s == "function" && s();
      }, f) : typeof s == "function" && s(), t = [];
    },
    animate: function(s, l, u, f) {
      if (f) {
        Ce(s, "transition", ""), Ce(s, "transform", "");
        var p = zi(this.el), h = p && p.a, g = p && p.d, m = (l.left - u.left) / (h || 1), S = (l.top - u.top) / (g || 1);
        s.animatingX = !!m, s.animatingY = !!S, Ce(s, "transform", "translate3d(" + m + "px," + S + "px,0)"), this.forRepaintDummy = IS(s), Ce(s, "transition", "transform " + f + "ms" + (this.options.easing ? " " + this.options.easing : "")), Ce(s, "transform", "translate3d(0,0,0)"), typeof s.animated == "number" && clearTimeout(s.animated), s.animated = setTimeout(function() {
          Ce(s, "transition", ""), Ce(s, "transform", ""), s.animated = !1, s.animatingX = !1, s.animatingY = !1;
        }, f);
      }
    }
  };
}
function IS(t) {
  return t.offsetWidth;
}
function PS(t, r, i, s) {
  return Math.sqrt(Math.pow(r.top - t.top, 2) + Math.pow(r.left - t.left, 2)) / Math.sqrt(Math.pow(r.top - i.top, 2) + Math.pow(r.left - i.left, 2)) * s.animation;
}
var Ni = [], Kf = {
  initializeByDefault: !0
}, so = {
  mount: function(r) {
    for (var i in Kf)
      Kf.hasOwnProperty(i) && !(i in r) && (r[i] = Kf[i]);
    Ni.forEach(function(s) {
      if (s.pluginName === r.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(r.pluginName, " more than once");
    }), Ni.push(r);
  },
  pluginEvent: function(r, i, s) {
    var l = this;
    this.eventCanceled = !1, s.cancel = function() {
      l.eventCanceled = !0;
    };
    var u = r + "Global";
    Ni.forEach(function(f) {
      i[f.pluginName] && (i[f.pluginName][u] && i[f.pluginName][u](sr({
        sortable: i
      }, s)), i.options[f.pluginName] && i[f.pluginName][r] && i[f.pluginName][r](sr({
        sortable: i
      }, s)));
    });
  },
  initializePlugins: function(r, i, s, l) {
    Ni.forEach(function(p) {
      var h = p.pluginName;
      if (!(!r.options[h] && !p.initializeByDefault)) {
        var g = new p(r, i, r.options);
        g.sortable = r, g.options = r.options, r[h] = g, Tr(s, g.defaults);
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
    return Ni.forEach(function(l) {
      typeof l.eventProperties == "function" && Tr(s, l.eventProperties.call(i[l.pluginName], r));
    }), s;
  },
  modifyOption: function(r, i, s) {
    var l;
    return Ni.forEach(function(u) {
      r[u.pluginName] && u.optionListeners && typeof u.optionListeners[i] == "function" && (l = u.optionListeners[i].call(r[u.pluginName], s));
    }), l;
  }
};
function BS(t) {
  var r = t.sortable, i = t.rootEl, s = t.name, l = t.targetEl, u = t.cloneEl, f = t.toEl, p = t.fromEl, h = t.oldIndex, g = t.newIndex, m = t.oldDraggableIndex, S = t.newDraggableIndex, v = t.originalEvent, y = t.putSortable, d = t.extraEventProperties;
  if (r = r || i && i[fn], !!r) {
    var x, w = r.options, A = "on" + s.charAt(0).toUpperCase() + s.substr(1);
    window.CustomEvent && !Or && !io ? x = new CustomEvent(s, {
      bubbles: !0,
      cancelable: !0
    }) : (x = document.createEvent("Event"), x.initEvent(s, !0, !0)), x.to = f || i, x.from = p || i, x.item = l || i, x.clone = u, x.oldIndex = h, x.newIndex = g, x.oldDraggableIndex = m, x.newDraggableIndex = S, x.originalEvent = v, x.pullMode = y ? y.lastPutMode : void 0;
    var C = sr(sr({}, d), so.getEventProperties(s, r));
    for (var T in C)
      x[T] = C[T];
    i && i.dispatchEvent(x), w[A] && w[A].call(r, x);
  }
}
var US = ["evt"], un = function(r, i) {
  var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l = s.evt, u = jS(s, US);
  so.pluginEvent.bind(Ae)(r, i, sr({
    dragEl: ce,
    parentEl: _t,
    ghostEl: Te,
    rootEl: dt,
    nextEl: Oa,
    lastDownEl: iu,
    cloneEl: gt,
    cloneHidden: ra,
    dragStarted: $s,
    putSortable: qt,
    activeSortable: Ae.active,
    originalEvent: l,
    oldIndex: Di,
    oldDraggableIndex: eo,
    newIndex: Cn,
    newDraggableIndex: na,
    hideGhostForTarget: A0,
    unhideGhostForTarget: T0,
    cloneNowHidden: function() {
      ra = !0;
    },
    cloneNowShown: function() {
      ra = !1;
    },
    dispatchSortableEvent: function(p) {
      Kt({
        sortable: i,
        name: p,
        originalEvent: l
      });
    }
  }, u));
};
function Kt(t) {
  BS(sr({
    putSortable: qt,
    cloneEl: gt,
    targetEl: ce,
    rootEl: dt,
    oldIndex: Di,
    oldDraggableIndex: eo,
    newIndex: Cn,
    newDraggableIndex: na
  }, t));
}
var ce, _t, Te, dt, Oa, iu, gt, ra, Di, Cn, eo, na, wl, qt, Mi = !1, pu = !1, mu = [], Aa, Vn, Wf, ed, wv, Cv, $s, Ai, to, no = !1, Cl = !1, su, Yt, td = [], Cd = !1, gu = [], wu = typeof document < "u", Nl = Vd, Nv = io || Or ? "cssFloat" : "float", HS = wu && !g0 && !Vd && "draggable" in document.createElement("div"), w0 = (function() {
  if (wu) {
    if (Or)
      return !1;
    var t = document.createElement("x");
    return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto";
  }
})(), C0 = function(r, i) {
  var s = Ce(r), l = parseInt(s.width) - parseInt(s.paddingLeft) - parseInt(s.paddingRight) - parseInt(s.borderLeftWidth) - parseInt(s.borderRightWidth), u = Pi(r, 0, i), f = Pi(r, 1, i), p = u && Ce(u), h = f && Ce(f), g = p && parseInt(p.marginLeft) + parseInt(p.marginRight) + Tt(u).width, m = h && parseInt(h.marginLeft) + parseInt(h.marginRight) + Tt(f).width;
  if (s.display === "flex")
    return s.flexDirection === "column" || s.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (s.display === "grid")
    return s.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (u && p.float && p.float !== "none") {
    var S = p.float === "left" ? "left" : "right";
    return f && (h.clear === "both" || h.clear === S) ? "vertical" : "horizontal";
  }
  return u && (p.display === "block" || p.display === "flex" || p.display === "table" || p.display === "grid" || g >= l && s[Nv] === "none" || f && s[Nv] === "none" && g + m > l) ? "vertical" : "horizontal";
}, qS = function(r, i, s) {
  var l = s ? r.left : r.top, u = s ? r.right : r.bottom, f = s ? r.width : r.height, p = s ? i.left : i.top, h = s ? i.right : i.bottom, g = s ? i.width : i.height;
  return l === p || u === h || l + f / 2 === p + g / 2;
}, FS = function(r, i) {
  var s;
  return mu.some(function(l) {
    var u = l[fn].options.emptyInsertThreshold;
    if (!(!u || Yd(l))) {
      var f = Tt(l), p = r >= f.left - u && r <= f.right + u, h = i >= f.top - u && i <= f.bottom + u;
      if (p && h)
        return s = l;
    }
  }), s;
}, N0 = function(r) {
  function i(u, f) {
    return function(p, h, g, m) {
      var S = p.options.group.name && h.options.group.name && p.options.group.name === h.options.group.name;
      if (u == null && (f || S))
        return !0;
      if (u == null || u === !1)
        return !1;
      if (f && u === "clone")
        return u;
      if (typeof u == "function")
        return i(u(p, h, g, m), f)(p, h, g, m);
      var v = (f ? p : h).options.group.name;
      return u === !0 || typeof u == "string" && u === v || u.join && u.indexOf(v) > -1;
    };
  }
  var s = {}, l = r.group;
  (!l || au(l) != "object") && (l = {
    name: l
  }), s.name = l.name, s.checkPull = i(l.pull, !0), s.checkPut = i(l.put), s.revertClone = l.revertClone, r.group = s;
}, A0 = function() {
  !w0 && Te && Ce(Te, "display", "none");
}, T0 = function() {
  !w0 && Te && Ce(Te, "display", "");
};
wu && !g0 && document.addEventListener("click", function(t) {
  if (pu)
    return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), pu = !1, !1;
}, !0);
var Ta = function(r) {
  if (ce) {
    r = r.touches ? r.touches[0] : r;
    var i = FS(r.clientX, r.clientY);
    if (i) {
      var s = {};
      for (var l in r)
        r.hasOwnProperty(l) && (s[l] = r[l]);
      s.target = s.rootEl = i, s.preventDefault = void 0, s.stopPropagation = void 0, i[fn]._onDragOver(s);
    }
  }
}, ZS = function(r) {
  ce && ce.parentNode[fn]._isOutsideThisEl(r.target);
};
function Ae(t, r) {
  if (!(t && t.nodeType && t.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
  this.el = t, this.options = r = Tr({}, r), t[fn] = this;
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
      return C0(t, this.options);
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
    supportPointer: Ae.supportPointer !== !1 && "PointerEvent" in window && (!Ks || Vd),
    emptyInsertThreshold: 5
  };
  so.initializePlugins(this, t, i);
  for (var s in i)
    !(s in r) && (r[s] = i[s]);
  N0(r);
  for (var l in this)
    l.charAt(0) === "_" && typeof this[l] == "function" && (this[l] = this[l].bind(this));
  this.nativeDraggable = r.forceFallback ? !1 : HS, this.nativeDraggable && (this.options.touchStartThreshold = 1), r.supportPointer ? Ue(t, "pointerdown", this._onTapStart) : (Ue(t, "mousedown", this._onTapStart), Ue(t, "touchstart", this._onTapStart)), this.nativeDraggable && (Ue(t, "dragover", this), Ue(t, "dragenter", this)), mu.push(this.el), r.store && r.store.get && this.sort(r.store.get(this) || []), Tr(this, LS());
}
Ae.prototype = /** @lends Sortable.prototype */
{
  constructor: Ae,
  _isOutsideThisEl: function(r) {
    !this.el.contains(r) && r !== this.el && (Ai = null);
  },
  _getDirection: function(r, i) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, r, i, ce) : this.options.direction;
  },
  _onTapStart: function(r) {
    if (r.cancelable) {
      var i = this, s = this.el, l = this.options, u = l.preventOnFilter, f = r.type, p = r.touches && r.touches[0] || r.pointerType && r.pointerType === "touch" && r, h = (p || r).target, g = r.target.shadowRoot && (r.path && r.path[0] || r.composedPath && r.composedPath()[0]) || h, m = l.filter;
      if (KS(s), !ce && !(/mousedown|pointerdown/.test(f) && r.button !== 0 || l.disabled) && !g.isContentEditable && !(!this.nativeDraggable && Ks && h && h.tagName.toUpperCase() === "SELECT") && (h = $n(h, l.draggable, s, !1), !(h && h.animated) && iu !== h)) {
        if (Di = Bn(h), eo = Bn(h, l.draggable), typeof m == "function") {
          if (m.call(this, r, h, this)) {
            Kt({
              sortable: i,
              rootEl: g,
              name: "filter",
              targetEl: h,
              toEl: s,
              fromEl: s
            }), un("filter", i, {
              evt: r
            }), u && r.preventDefault();
            return;
          }
        } else if (m && (m = m.split(",").some(function(S) {
          if (S = $n(g, S.trim(), s, !1), S)
            return Kt({
              sortable: i,
              rootEl: S,
              name: "filter",
              targetEl: h,
              fromEl: s,
              toEl: s
            }), un("filter", i, {
              evt: r
            }), !0;
        }), m)) {
          u && r.preventDefault();
          return;
        }
        l.handle && !$n(g, l.handle, s, !1) || this._prepareDragStart(r, p, h);
      }
    }
  },
  _prepareDragStart: function(r, i, s) {
    var l = this, u = l.el, f = l.options, p = u.ownerDocument, h;
    if (s && !ce && s.parentNode === u) {
      var g = Tt(s);
      if (dt = u, ce = s, _t = ce.parentNode, Oa = ce.nextSibling, iu = s, wl = f.group, Ae.dragged = ce, Aa = {
        target: ce,
        clientX: (i || r).clientX,
        clientY: (i || r).clientY
      }, wv = Aa.clientX - g.left, Cv = Aa.clientY - g.top, this._lastX = (i || r).clientX, this._lastY = (i || r).clientY, ce.style["will-change"] = "all", h = function() {
        if (un("delayEnded", l, {
          evt: r
        }), Ae.eventCanceled) {
          l._onDrop();
          return;
        }
        l._disableDelayedDragEvents(), !_v && l.nativeDraggable && (ce.draggable = !0), l._triggerDragStart(r, i), Kt({
          sortable: l,
          name: "choose",
          originalEvent: r
        }), wn(ce, f.chosenClass, !0);
      }, f.ignore.split(",").forEach(function(m) {
        b0(ce, m.trim(), nd);
      }), Ue(p, "dragover", Ta), Ue(p, "mousemove", Ta), Ue(p, "touchmove", Ta), f.supportPointer ? (Ue(p, "pointerup", l._onDrop), !this.nativeDraggable && Ue(p, "pointercancel", l._onDrop)) : (Ue(p, "mouseup", l._onDrop), Ue(p, "touchend", l._onDrop), Ue(p, "touchcancel", l._onDrop)), _v && this.nativeDraggable && (this.options.touchStartThreshold = 4, ce.draggable = !0), un("delayStart", this, {
        evt: r
      }), f.delay && (!f.delayOnTouchOnly || i) && (!this.nativeDraggable || !(io || Or))) {
        if (Ae.eventCanceled) {
          this._onDrop();
          return;
        }
        f.supportPointer ? (Ue(p, "pointerup", l._disableDelayedDrag), Ue(p, "pointercancel", l._disableDelayedDrag)) : (Ue(p, "mouseup", l._disableDelayedDrag), Ue(p, "touchend", l._disableDelayedDrag), Ue(p, "touchcancel", l._disableDelayedDrag)), Ue(p, "mousemove", l._delayedDragTouchMoveHandler), Ue(p, "touchmove", l._delayedDragTouchMoveHandler), f.supportPointer && Ue(p, "pointermove", l._delayedDragTouchMoveHandler), l._dragStartTimer = setTimeout(h, f.delay);
      } else
        h();
    }
  },
  _delayedDragTouchMoveHandler: function(r) {
    var i = r.touches ? r.touches[0] : r;
    Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    ce && nd(ce), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var r = this.el.ownerDocument;
    Pe(r, "mouseup", this._disableDelayedDrag), Pe(r, "touchend", this._disableDelayedDrag), Pe(r, "touchcancel", this._disableDelayedDrag), Pe(r, "pointerup", this._disableDelayedDrag), Pe(r, "pointercancel", this._disableDelayedDrag), Pe(r, "mousemove", this._delayedDragTouchMoveHandler), Pe(r, "touchmove", this._delayedDragTouchMoveHandler), Pe(r, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(r, i) {
    i = i || r.pointerType == "touch" && r, !this.nativeDraggable || i ? this.options.supportPointer ? Ue(document, "pointermove", this._onTouchMove) : i ? Ue(document, "touchmove", this._onTouchMove) : Ue(document, "mousemove", this._onTouchMove) : (Ue(ce, "dragend", this), Ue(dt, "dragstart", this._onDragStart));
    try {
      document.selection ? ou(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(r, i) {
    if (Mi = !1, dt && ce) {
      un("dragStarted", this, {
        evt: i
      }), this.nativeDraggable && Ue(document, "dragover", ZS);
      var s = this.options;
      !r && wn(ce, s.dragClass, !1), wn(ce, s.ghostClass, !0), Ae.active = this, r && this._appendGhost(), Kt({
        sortable: this,
        name: "start",
        originalEvent: i
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Vn) {
      this._lastX = Vn.clientX, this._lastY = Vn.clientY, A0();
      for (var r = document.elementFromPoint(Vn.clientX, Vn.clientY), i = r; r && r.shadowRoot && (r = r.shadowRoot.elementFromPoint(Vn.clientX, Vn.clientY), r !== i); )
        i = r;
      if (ce.parentNode[fn]._isOutsideThisEl(r), i)
        do {
          if (i[fn]) {
            var s = void 0;
            if (s = i[fn]._onDragOver({
              clientX: Vn.clientX,
              clientY: Vn.clientY,
              target: r,
              rootEl: i
            }), s && !this.options.dragoverBubble)
              break;
          }
          r = i;
        } while (i = y0(i));
      T0();
    }
  },
  _onTouchMove: function(r) {
    if (Aa) {
      var i = this.options, s = i.fallbackTolerance, l = i.fallbackOffset, u = r.touches ? r.touches[0] : r, f = Te && zi(Te, !0), p = Te && f && f.a, h = Te && f && f.d, g = Nl && Yt && Ev(Yt), m = (u.clientX - Aa.clientX + l.x) / (p || 1) + (g ? g[0] - td[0] : 0) / (p || 1), S = (u.clientY - Aa.clientY + l.y) / (h || 1) + (g ? g[1] - td[1] : 0) / (h || 1);
      if (!Ae.active && !Mi) {
        if (s && Math.max(Math.abs(u.clientX - this._lastX), Math.abs(u.clientY - this._lastY)) < s)
          return;
        this._onDragStart(r, !0);
      }
      if (Te) {
        f ? (f.e += m - (Wf || 0), f.f += S - (ed || 0)) : f = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: m,
          f: S
        };
        var v = "matrix(".concat(f.a, ",").concat(f.b, ",").concat(f.c, ",").concat(f.d, ",").concat(f.e, ",").concat(f.f, ")");
        Ce(Te, "webkitTransform", v), Ce(Te, "mozTransform", v), Ce(Te, "msTransform", v), Ce(Te, "transform", v), Wf = m, ed = S, Vn = u;
      }
      r.cancelable && r.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!Te) {
      var r = this.options.fallbackOnBody ? document.body : dt, i = Tt(ce, !0, Nl, !0, r), s = this.options;
      if (Nl) {
        for (Yt = r; Ce(Yt, "position") === "static" && Ce(Yt, "transform") === "none" && Yt !== document; )
          Yt = Yt.parentNode;
        Yt !== document.body && Yt !== document.documentElement ? (Yt === document && (Yt = ir()), i.top += Yt.scrollTop, i.left += Yt.scrollLeft) : Yt = ir(), td = Ev(Yt);
      }
      Te = ce.cloneNode(!0), wn(Te, s.ghostClass, !1), wn(Te, s.fallbackClass, !0), wn(Te, s.dragClass, !0), Ce(Te, "transition", ""), Ce(Te, "transform", ""), Ce(Te, "box-sizing", "border-box"), Ce(Te, "margin", 0), Ce(Te, "top", i.top), Ce(Te, "left", i.left), Ce(Te, "width", i.width), Ce(Te, "height", i.height), Ce(Te, "opacity", "0.8"), Ce(Te, "position", Nl ? "absolute" : "fixed"), Ce(Te, "zIndex", "100000"), Ce(Te, "pointerEvents", "none"), Ae.ghost = Te, r.appendChild(Te), Ce(Te, "transform-origin", wv / parseInt(Te.style.width) * 100 + "% " + Cv / parseInt(Te.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(r, i) {
    var s = this, l = r.dataTransfer, u = s.options;
    if (un("dragStart", this, {
      evt: r
    }), Ae.eventCanceled) {
      this._onDrop();
      return;
    }
    un("setupClone", this), Ae.eventCanceled || (gt = x0(ce), gt.removeAttribute("id"), gt.draggable = !1, gt.style["will-change"] = "", this._hideClone(), wn(gt, this.options.chosenClass, !1), Ae.clone = gt), s.cloneId = ou(function() {
      un("clone", s), !Ae.eventCanceled && (s.options.removeCloneOnHide || dt.insertBefore(gt, ce), s._hideClone(), Kt({
        sortable: s,
        name: "clone"
      }));
    }), !i && wn(ce, u.dragClass, !0), i ? (pu = !0, s._loopId = setInterval(s._emulateDragOver, 50)) : (Pe(document, "mouseup", s._onDrop), Pe(document, "touchend", s._onDrop), Pe(document, "touchcancel", s._onDrop), l && (l.effectAllowed = "move", u.setData && u.setData.call(s, l, ce)), Ue(document, "drop", s), Ce(ce, "transform", "translateZ(0)")), Mi = !0, s._dragStartId = ou(s._dragStarted.bind(s, i, r)), Ue(document, "selectstart", s), $s = !0, window.getSelection().removeAllRanges(), Ks && Ce(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(r) {
    var i = this.el, s = r.target, l, u, f, p = this.options, h = p.group, g = Ae.active, m = wl === h, S = p.sort, v = qt || g, y, d = this, x = !1;
    if (Cd) return;
    function w(de, Oe) {
      un(de, d, sr({
        evt: r,
        isOwner: m,
        axis: y ? "vertical" : "horizontal",
        revert: f,
        dragRect: l,
        targetRect: u,
        canSort: S,
        fromSortable: v,
        target: s,
        completed: C,
        onMove: function(J, se) {
          return Al(dt, i, ce, l, J, Tt(J), r, se);
        },
        changed: T
      }, Oe));
    }
    function A() {
      w("dragOverAnimationCapture"), d.captureAnimationState(), d !== v && v.captureAnimationState();
    }
    function C(de) {
      return w("dragOverCompleted", {
        insertion: de
      }), de && (m ? g._hideClone() : g._showClone(d), d !== v && (wn(ce, qt ? qt.options.ghostClass : g.options.ghostClass, !1), wn(ce, p.ghostClass, !0)), qt !== d && d !== Ae.active ? qt = d : d === Ae.active && qt && (qt = null), v === d && (d._ignoreWhileAnimating = s), d.animateAll(function() {
        w("dragOverAnimationComplete"), d._ignoreWhileAnimating = null;
      }), d !== v && (v.animateAll(), v._ignoreWhileAnimating = null)), (s === ce && !ce.animated || s === i && !s.animated) && (Ai = null), !p.dragoverBubble && !r.rootEl && s !== document && (ce.parentNode[fn]._isOutsideThisEl(r.target), !de && Ta(r)), !p.dragoverBubble && r.stopPropagation && r.stopPropagation(), x = !0;
    }
    function T() {
      Cn = Bn(ce), na = Bn(ce, p.draggable), Kt({
        sortable: d,
        name: "change",
        toEl: i,
        newIndex: Cn,
        newDraggableIndex: na,
        originalEvent: r
      });
    }
    if (r.preventDefault !== void 0 && r.cancelable && r.preventDefault(), s = $n(s, p.draggable, i, !0), w("dragOver"), Ae.eventCanceled) return x;
    if (ce.contains(r.target) || s.animated && s.animatingX && s.animatingY || d._ignoreWhileAnimating === s)
      return C(!1);
    if (pu = !1, g && !p.disabled && (m ? S || (f = _t !== dt) : qt === this || (this.lastPutMode = wl.checkPull(this, g, ce, r)) && h.checkPut(this, g, ce, r))) {
      if (y = this._getDirection(r, s) === "vertical", l = Tt(ce), w("dragOverValid"), Ae.eventCanceled) return x;
      if (f)
        return _t = dt, A(), this._hideClone(), w("revert"), Ae.eventCanceled || (Oa ? dt.insertBefore(ce, Oa) : dt.appendChild(ce)), C(!0);
      var E = Yd(i, p.draggable);
      if (!E || $S(r, y, this) && !E.animated) {
        if (E === ce)
          return C(!1);
        if (E && i === r.target && (s = E), s && (u = Tt(s)), Al(dt, i, ce, l, s, u, r, !!s) !== !1)
          return A(), E && E.nextSibling ? i.insertBefore(ce, E.nextSibling) : i.appendChild(ce), _t = i, T(), C(!0);
      } else if (E && YS(r, y, this)) {
        var O = Pi(i, 0, p, !0);
        if (O === ce)
          return C(!1);
        if (s = O, u = Tt(s), Al(dt, i, ce, l, s, u, r, !1) !== !1)
          return A(), i.insertBefore(ce, O), _t = i, T(), C(!0);
      } else if (s.parentNode === i) {
        u = Tt(s);
        var j = 0, R, H = ce.parentNode !== i, Q = !qS(ce.animated && ce.toRect || l, s.animated && s.toRect || u, y), B = y ? "top" : "left", V = xv(s, "top", "top") || xv(ce, "top", "top"), $ = V ? V.scrollTop : void 0;
        Ai !== s && (R = u[B], no = !1, Cl = !Q && p.invertSwap || H), j = XS(r, s, u, y, Q ? 1 : p.swapThreshold, p.invertedSwapThreshold == null ? p.swapThreshold : p.invertedSwapThreshold, Cl, Ai === s);
        var F;
        if (j !== 0) {
          var te = Bn(ce);
          do
            te -= j, F = _t.children[te];
          while (F && (Ce(F, "display") === "none" || F === Te));
        }
        if (j === 0 || F === s)
          return C(!1);
        Ai = s, to = j;
        var W = s.nextElementSibling, L = !1;
        L = j === 1;
        var ae = Al(dt, i, ce, l, s, u, r, L);
        if (ae !== !1)
          return (ae === 1 || ae === -1) && (L = ae === 1), Cd = !0, setTimeout(VS, 30), A(), L && !W ? i.appendChild(ce) : s.parentNode.insertBefore(ce, L ? W : s), V && S0(V, 0, $ - V.scrollTop), _t = ce.parentNode, R !== void 0 && !Cl && (su = Math.abs(R - Tt(s)[B])), T(), C(!0);
      }
      if (i.contains(ce))
        return C(!1);
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
    if (Cn = Bn(ce), na = Bn(ce, s.draggable), un("drop", this, {
      evt: r
    }), _t = ce && ce.parentNode, Cn = Bn(ce), na = Bn(ce, s.draggable), Ae.eventCanceled) {
      this._nulling();
      return;
    }
    Mi = !1, Cl = !1, no = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Nd(this.cloneId), Nd(this._dragStartId), this.nativeDraggable && (Pe(document, "drop", this), Pe(i, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Ks && Ce(document.body, "user-select", ""), Ce(ce, "transform", ""), r && ($s && (r.cancelable && r.preventDefault(), !s.dropBubble && r.stopPropagation()), Te && Te.parentNode && Te.parentNode.removeChild(Te), (dt === _t || qt && qt.lastPutMode !== "clone") && gt && gt.parentNode && gt.parentNode.removeChild(gt), ce && (this.nativeDraggable && Pe(ce, "dragend", this), nd(ce), ce.style["will-change"] = "", $s && !Mi && wn(ce, qt ? qt.options.ghostClass : this.options.ghostClass, !1), wn(ce, this.options.chosenClass, !1), Kt({
      sortable: this,
      name: "unchoose",
      toEl: _t,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: r
    }), dt !== _t ? (Cn >= 0 && (Kt({
      rootEl: _t,
      name: "add",
      toEl: _t,
      fromEl: dt,
      originalEvent: r
    }), Kt({
      sortable: this,
      name: "remove",
      toEl: _t,
      originalEvent: r
    }), Kt({
      rootEl: _t,
      name: "sort",
      toEl: _t,
      fromEl: dt,
      originalEvent: r
    }), Kt({
      sortable: this,
      name: "sort",
      toEl: _t,
      originalEvent: r
    })), qt && qt.save()) : Cn !== Di && Cn >= 0 && (Kt({
      sortable: this,
      name: "update",
      toEl: _t,
      originalEvent: r
    }), Kt({
      sortable: this,
      name: "sort",
      toEl: _t,
      originalEvent: r
    })), Ae.active && ((Cn == null || Cn === -1) && (Cn = Di, na = eo), Kt({
      sortable: this,
      name: "end",
      toEl: _t,
      originalEvent: r
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    un("nulling", this), dt = ce = _t = Te = Oa = gt = iu = ra = Aa = Vn = $s = Cn = na = Di = eo = Ai = to = qt = wl = Ae.dragged = Ae.ghost = Ae.clone = Ae.active = null, gu.forEach(function(r) {
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
        ce && (this._onDragOver(r), GS(r));
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
    for (var r = [], i, s = this.el.children, l = 0, u = s.length, f = this.options; l < u; l++)
      i = s[l], $n(i, f.draggable, this.el, !1) && r.push(i.getAttribute(f.dataIdAttr) || JS(i));
    return r;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(r, i) {
    var s = {}, l = this.el;
    this.toArray().forEach(function(u, f) {
      var p = l.children[f];
      $n(p, this.options.draggable, l, !1) && (s[u] = p);
    }, this), i && this.captureAnimationState(), r.forEach(function(u) {
      s[u] && (l.removeChild(s[u]), l.appendChild(s[u]));
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
    return $n(r, i || this.options.draggable, this.el, !1);
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
    var l = so.modifyOption(this, r, i);
    typeof l < "u" ? s[r] = l : s[r] = i, r === "group" && N0(s);
  },
  /**
   * Destroy
   */
  destroy: function() {
    un("destroy", this);
    var r = this.el;
    r[fn] = null, Pe(r, "mousedown", this._onTapStart), Pe(r, "touchstart", this._onTapStart), Pe(r, "pointerdown", this._onTapStart), this.nativeDraggable && (Pe(r, "dragover", this), Pe(r, "dragenter", this)), Array.prototype.forEach.call(r.querySelectorAll("[draggable]"), function(i) {
      i.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), mu.splice(mu.indexOf(this.el), 1), this.el = r = null;
  },
  _hideClone: function() {
    if (!ra) {
      if (un("hideClone", this), Ae.eventCanceled) return;
      Ce(gt, "display", "none"), this.options.removeCloneOnHide && gt.parentNode && gt.parentNode.removeChild(gt), ra = !0;
    }
  },
  _showClone: function(r) {
    if (r.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (ra) {
      if (un("showClone", this), Ae.eventCanceled) return;
      ce.parentNode == dt && !this.options.group.revertClone ? dt.insertBefore(gt, ce) : Oa ? dt.insertBefore(gt, Oa) : dt.appendChild(gt), this.options.group.revertClone && this.animate(ce, gt), Ce(gt, "display", ""), ra = !1;
    }
  }
};
function GS(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
}
function Al(t, r, i, s, l, u, f, p) {
  var h, g = t[fn], m = g.options.onMove, S;
  return window.CustomEvent && !Or && !io ? h = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (h = document.createEvent("Event"), h.initEvent("move", !0, !0)), h.to = r, h.from = t, h.dragged = i, h.draggedRect = s, h.related = l || r, h.relatedRect = u || Tt(r), h.willInsertAfter = p, h.originalEvent = f, t.dispatchEvent(h), m && (S = m.call(g, h, f)), S;
}
function nd(t) {
  t.draggable = !1;
}
function VS() {
  Cd = !1;
}
function YS(t, r, i) {
  var s = Tt(Pi(i.el, 0, i.options, !0)), l = E0(i.el, i.options, Te), u = 10;
  return r ? t.clientX < l.left - u || t.clientY < s.top && t.clientX < s.right : t.clientY < l.top - u || t.clientY < s.bottom && t.clientX < s.left;
}
function $S(t, r, i) {
  var s = Tt(Yd(i.el, i.options.draggable)), l = E0(i.el, i.options, Te), u = 10;
  return r ? t.clientX > l.right + u || t.clientY > s.bottom && t.clientX > s.left : t.clientY > l.bottom + u || t.clientX > s.right && t.clientY > s.top;
}
function XS(t, r, i, s, l, u, f, p) {
  var h = s ? t.clientY : t.clientX, g = s ? i.height : i.width, m = s ? i.top : i.left, S = s ? i.bottom : i.right, v = !1;
  if (!f) {
    if (p && su < g * l) {
      if (!no && (to === 1 ? h > m + g * u / 2 : h < S - g * u / 2) && (no = !0), no)
        v = !0;
      else if (to === 1 ? h < m + su : h > S - su)
        return -to;
    } else if (h > m + g * (1 - l) / 2 && h < S - g * (1 - l) / 2)
      return QS(r);
  }
  return v = v || f, v && (h < m + g * u / 2 || h > S - g * u / 2) ? h > m + g / 2 ? 1 : -1 : 0;
}
function QS(t) {
  return Bn(ce) < Bn(t) ? 1 : -1;
}
function JS(t) {
  for (var r = t.tagName + t.className + t.src + t.href + t.textContent, i = r.length, s = 0; i--; )
    s += r.charCodeAt(i);
  return s.toString(36);
}
function KS(t) {
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
  (Ae.active || Mi) && t.cancelable && t.preventDefault();
});
Ae.utils = {
  on: Ue,
  off: Pe,
  css: Ce,
  find: b0,
  is: function(r, i) {
    return !!$n(r, i, r, !1);
  },
  extend: RS,
  throttle: _0,
  closest: $n,
  toggleClass: wn,
  clone: x0,
  index: Bn,
  nextTick: ou,
  cancelNextTick: Nd,
  detectDirection: C0,
  getChild: Pi,
  expando: fn
};
Ae.get = function(t) {
  return t[fn];
};
Ae.mount = function() {
  for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
    r[i] = arguments[i];
  r[0].constructor === Array && (r = r[0]), r.forEach(function(s) {
    if (!s.prototype || !s.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(s));
    s.utils && (Ae.utils = sr(sr({}, Ae.utils), s.utils)), so.mount(s);
  });
};
Ae.create = function(t, r) {
  return new Ae(t, r);
};
Ae.version = MS;
var At = [], Xs, Ad, Td = !1, rd, ad, vu, Qs;
function WS() {
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
      this.sortable.nativeDraggable ? Pe(document, "dragover", this._handleAutoScroll) : (Pe(document, "pointermove", this._handleFallbackAutoScroll), Pe(document, "touchmove", this._handleFallbackAutoScroll), Pe(document, "mousemove", this._handleFallbackAutoScroll)), Av(), lu(), zS();
    },
    nulling: function() {
      vu = Ad = Xs = Td = Qs = rd = ad = null, At.length = 0;
    },
    _handleFallbackAutoScroll: function(i) {
      this._handleAutoScroll(i, !0);
    },
    _handleAutoScroll: function(i, s) {
      var l = this, u = (i.touches ? i.touches[0] : i).clientX, f = (i.touches ? i.touches[0] : i).clientY, p = document.elementFromPoint(u, f);
      if (vu = i, s || this.options.forceAutoScrollFallback || io || Or || Ks) {
        id(i, this.options, p, s);
        var h = aa(p, !0);
        Td && (!Qs || u !== rd || f !== ad) && (Qs && Av(), Qs = setInterval(function() {
          var g = aa(document.elementFromPoint(u, f), !0);
          g !== h && (h = g, lu()), id(i, l.options, g, s);
        }, 10), rd = u, ad = f);
      } else {
        if (!this.options.bubbleScroll || aa(p, !0) === ir()) {
          lu();
          return;
        }
        id(i, this.options, aa(p, !1), !1);
      }
    }
  }, Tr(t, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function lu() {
  At.forEach(function(t) {
    clearInterval(t.pid);
  }), At = [];
}
function Av() {
  clearInterval(Qs);
}
var id = _0(function(t, r, i, s) {
  if (r.scroll) {
    var l = (t.touches ? t.touches[0] : t).clientX, u = (t.touches ? t.touches[0] : t).clientY, f = r.scrollSensitivity, p = r.scrollSpeed, h = ir(), g = !1, m;
    Ad !== i && (Ad = i, lu(), Xs = r.scroll, m = r.scrollFn, Xs === !0 && (Xs = aa(i, !0)));
    var S = 0, v = Xs;
    do {
      var y = v, d = Tt(y), x = d.top, w = d.bottom, A = d.left, C = d.right, T = d.width, E = d.height, O = void 0, j = void 0, R = y.scrollWidth, H = y.scrollHeight, Q = Ce(y), B = y.scrollLeft, V = y.scrollTop;
      y === h ? (O = T < R && (Q.overflowX === "auto" || Q.overflowX === "scroll" || Q.overflowX === "visible"), j = E < H && (Q.overflowY === "auto" || Q.overflowY === "scroll" || Q.overflowY === "visible")) : (O = T < R && (Q.overflowX === "auto" || Q.overflowX === "scroll"), j = E < H && (Q.overflowY === "auto" || Q.overflowY === "scroll"));
      var $ = O && (Math.abs(C - l) <= f && B + T < R) - (Math.abs(A - l) <= f && !!B), F = j && (Math.abs(w - u) <= f && V + E < H) - (Math.abs(x - u) <= f && !!V);
      if (!At[S])
        for (var te = 0; te <= S; te++)
          At[te] || (At[te] = {});
      (At[S].vx != $ || At[S].vy != F || At[S].el !== y) && (At[S].el = y, At[S].vx = $, At[S].vy = F, clearInterval(At[S].pid), ($ != 0 || F != 0) && (g = !0, At[S].pid = setInterval((function() {
        s && this.layer === 0 && Ae.active._onTouchMove(vu);
        var W = At[this.layer].vy ? At[this.layer].vy * p : 0, L = At[this.layer].vx ? At[this.layer].vx * p : 0;
        typeof m == "function" && m.call(Ae.dragged.parentNode[fn], L, W, t, vu, At[this.layer].el) !== "continue" || S0(At[this.layer].el, L, W);
      }).bind({
        layer: S
      }), 24))), S++;
    } while (r.bubbleScroll && v !== h && (v = aa(v, !1)));
    Td = g;
  }
}, 30), O0 = function(r) {
  var i = r.originalEvent, s = r.putSortable, l = r.dragEl, u = r.activeSortable, f = r.dispatchSortableEvent, p = r.hideGhostForTarget, h = r.unhideGhostForTarget;
  if (i) {
    var g = s || u;
    p();
    var m = i.changedTouches && i.changedTouches.length ? i.changedTouches[0] : i, S = document.elementFromPoint(m.clientX, m.clientY);
    h(), g && !g.el.contains(S) && (f("spill"), this.onSpill({
      dragEl: l,
      putSortable: s
    }));
  }
};
function $d() {
}
$d.prototype = {
  startIndex: null,
  dragStart: function(r) {
    var i = r.oldDraggableIndex;
    this.startIndex = i;
  },
  onSpill: function(r) {
    var i = r.dragEl, s = r.putSortable;
    this.sortable.captureAnimationState(), s && s.captureAnimationState();
    var l = Pi(this.sortable.el, this.startIndex, this.options);
    l ? this.sortable.el.insertBefore(i, l) : this.sortable.el.appendChild(i), this.sortable.animateAll(), s && s.animateAll();
  },
  drop: O0
};
Tr($d, {
  pluginName: "revertOnSpill"
});
function Xd() {
}
Xd.prototype = {
  onSpill: function(r) {
    var i = r.dragEl, s = r.putSortable, l = s || this.sortable;
    l.captureAnimationState(), i.parentNode && i.parentNode.removeChild(i), l.animateAll();
  },
  drop: O0
};
Tr(Xd, {
  pluginName: "removeOnSpill"
});
Ae.mount(new WS());
Ae.mount(Xd, $d);
const Od = `=======

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

=======`, k0 = `{{#if characters}}
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
{{/if}}`, ex = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide your response wrapped ONLY in a single <response> XML tag.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
<response>Generated content for the field goes here.</response>
\`\`\``, tx = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide your response as a JSON object with a single key "response" containing the generated content as a string.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
{
  "response": "Generated content for the field goes here."
}
\`\`\``, nx = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide ONLY the raw text content for the field, without any formatting, XML tags, JSON structure, or explanatory text. Just the content itself.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
Generated content for the field goes here.
\`\`\``, j0 = "{{activeFormatInstructions}}", M0 = `{{#is_not_empty lorebooks}}
## Selected Lorebooks for Context
{{#each lorebooks}}
### {{@key}}
  {{#each this as |entry|}}
#### {{#if entry.comment}}{{entry.comment}}{{else}}*No title*{{/if}}
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}

  {{/each}}


{{/each}}
{{/is_not_empty}}`, rx = `### {{character.name}}
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
  {{else}}*Not provided*{{/if}}`, uu = `{{#is_not_empty fields}}
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
{{/is_not_empty}}`, ax = `## User's Persona Description
name: {{user}}
{{persona}}`, D0 = `Your task is to generate the content for the "{{targetField}}" field of a character card. Base your response on the preceding context (chat history, persona, system prompts, character/lore definitions, existing fields, etc.).
{{#if userInstructions}}

Follow these user instructions: {{userInstructions}}
{{/if}}
{{#if fieldSpecificInstructions}}

Field-specific instructions: {{fieldSpecificInstructions}}
{{/if}}`, ix = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid JSON object that strictly adheres to the provided JSON schema.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire JSON object in a markdown code block (```json\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The JSON object inside the code block MUST be valid and conform to the schema.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```json\n{{example_response}}\n```", sx = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid XML structure that strictly adheres to the provided example.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire XML object in a markdown code block (```xml\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The XML object inside the code block MUST be valid.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```json\n{{example_response}}\n```", ox = `You are an expert character writer assisting a user. Your task is to respond with the modified character data in the required structured format.
Your justification should be friendly and conversational. Be direct and focus on the changes you've made. Vary your responses and do not start every message the same way. Do not repeat the user's request back to them.

For this session, we are focusing on: {{#if isFieldSession}}the "{{targetLabel}}" field.{{else}}the entire character card.{{/if}}

Initial character state is provided in the context. Read the user's request, and provide a response that incorporates their changes.`, R0 = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", lx = R0 + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ux = "[" + R0 + "][" + lx + "]*", cx = new RegExp("^" + ux + "$");
function z0(t, r) {
  const i = [];
  let s = r.exec(t);
  for (; s; ) {
    const l = [];
    l.startIndex = r.lastIndex - s[0].length;
    const u = s.length;
    for (let f = 0; f < u; f++)
      l.push(s[f]);
    i.push(l), s = r.exec(t);
  }
  return i;
}
const Qd = function(t) {
  const r = cx.exec(t);
  return !(r === null || typeof r > "u");
};
function fx(t) {
  return typeof t < "u";
}
const dx = {
  allowBooleanAttributes: !1,
  //A tag can have attributes without any value
  unpairedTags: []
};
function L0(t, r) {
  r = Object.assign({}, dx, r);
  const i = [];
  let s = !1, l = !1;
  t[0] === "\uFEFF" && (t = t.substr(1));
  for (let u = 0; u < t.length; u++)
    if (t[u] === "<" && t[u + 1] === "?") {
      if (u += 2, u = Ov(t, u), u.err) return u;
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
        if (h = h.trim(), h[h.length - 1] === "/" && (h = h.substring(0, h.length - 1), u--), !_x(h)) {
          let S;
          return h.trim().length === 0 ? S = "Invalid space after '<'." : S = "Tag '" + h + "' is an invalid name.", wt("InvalidTag", S, Wt(t, u));
        }
        const g = mx(t, u);
        if (g === !1)
          return wt("InvalidAttr", "Attributes for '" + h + "' have open quote.", Wt(t, u));
        let m = g.value;
        if (u = g.index, m[m.length - 1] === "/") {
          const S = u - m.length;
          m = m.substring(0, m.length - 1);
          const v = jv(m, r);
          if (v === !0)
            s = !0;
          else
            return wt(v.err.code, v.err.msg, Wt(t, S + v.err.line));
        } else if (p)
          if (g.tagClosed) {
            if (m.trim().length > 0)
              return wt("InvalidTag", "Closing tag '" + h + "' can't have attributes or invalid starting.", Wt(t, f));
            if (i.length === 0)
              return wt("InvalidTag", "Closing tag '" + h + "' has not been opened.", Wt(t, f));
            {
              const S = i.pop();
              if (h !== S.tagName) {
                let v = Wt(t, S.tagStartPos);
                return wt(
                  "InvalidTag",
                  "Expected closing tag '" + S.tagName + "' (opened in line " + v.line + ", col " + v.col + ") instead of closing tag '" + h + "'.",
                  Wt(t, f)
                );
              }
              i.length == 0 && (l = !0);
            }
          } else return wt("InvalidTag", "Closing tag '" + h + "' doesn't have proper closing.", Wt(t, u));
        else {
          const S = jv(m, r);
          if (S !== !0)
            return wt(S.err.code, S.err.msg, Wt(t, u - m.length + S.err.line));
          if (l === !0)
            return wt("InvalidXml", "Multiple possible root nodes found.", Wt(t, u));
          r.unpairedTags.indexOf(h) !== -1 || i.push({ tagName: h, tagStartPos: f }), s = !0;
        }
        for (u++; u < t.length; u++)
          if (t[u] === "<")
            if (t[u + 1] === "!") {
              u++, u = kv(t, u);
              continue;
            } else if (t[u + 1] === "?") {
              if (u = Ov(t, ++u), u.err) return u;
            } else
              break;
          else if (t[u] === "&") {
            const S = yx(t, u);
            if (S == -1)
              return wt("InvalidChar", "char '&' is not expected.", Wt(t, u));
            u = S;
          } else if (l === !0 && !Tv(t[u]))
            return wt("InvalidXml", "Extra text at the end", Wt(t, u));
        t[u] === "<" && u--;
      }
    } else {
      if (Tv(t[u]))
        continue;
      return wt("InvalidChar", "char '" + t[u] + "' is not expected.", Wt(t, u));
    }
  if (s) {
    if (i.length == 1)
      return wt("InvalidTag", "Unclosed tag '" + i[0].tagName + "'.", Wt(t, i[0].tagStartPos));
    if (i.length > 0)
      return wt("InvalidXml", "Invalid '" + JSON.stringify(i.map((u) => u.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
  } else return wt("InvalidXml", "Start tag expected.", 1);
  return !0;
}
function Tv(t) {
  return t === " " || t === "	" || t === `
` || t === "\r";
}
function Ov(t, r) {
  const i = r;
  for (; r < t.length; r++)
    if (t[r] == "?" || t[r] == " ") {
      const s = t.substr(i, r - i);
      if (r > 5 && s === "xml")
        return wt("InvalidXml", "XML declaration allowed only at the start of the document.", Wt(t, r));
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
const hx = '"', px = "'";
function mx(t, r) {
  let i = "", s = "", l = !1;
  for (; r < t.length; r++) {
    if (t[r] === hx || t[r] === px)
      s === "" ? s = t[r] : s !== t[r] || (s = "");
    else if (t[r] === ">" && s === "") {
      l = !0;
      break;
    }
    i += t[r];
  }
  return s !== "" ? !1 : {
    value: i,
    index: r,
    tagClosed: l
  };
}
const gx = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function jv(t, r) {
  const i = z0(t, gx), s = {};
  for (let l = 0; l < i.length; l++) {
    if (i[l][1].length === 0)
      return wt("InvalidAttr", "Attribute '" + i[l][2] + "' has no space in starting.", Us(i[l]));
    if (i[l][3] !== void 0 && i[l][4] === void 0)
      return wt("InvalidAttr", "Attribute '" + i[l][2] + "' is without value.", Us(i[l]));
    if (i[l][3] === void 0 && !r.allowBooleanAttributes)
      return wt("InvalidAttr", "boolean attribute '" + i[l][2] + "' is not allowed.", Us(i[l]));
    const u = i[l][2];
    if (!bx(u))
      return wt("InvalidAttr", "Attribute '" + u + "' is an invalid name.", Us(i[l]));
    if (!s.hasOwnProperty(u))
      s[u] = 1;
    else
      return wt("InvalidAttr", "Attribute '" + u + "' is repeated.", Us(i[l]));
  }
  return !0;
}
function vx(t, r) {
  let i = /\d/;
  for (t[r] === "x" && (r++, i = /[\da-fA-F]/); r < t.length; r++) {
    if (t[r] === ";")
      return r;
    if (!t[r].match(i))
      break;
  }
  return -1;
}
function yx(t, r) {
  if (r++, t[r] === ";")
    return -1;
  if (t[r] === "#")
    return r++, vx(t, r);
  let i = 0;
  for (; r < t.length; r++, i++)
    if (!(t[r].match(/\w/) && i < 20)) {
      if (t[r] === ";")
        break;
      return -1;
    }
  return r;
}
function wt(t, r, i) {
  return {
    err: {
      code: t,
      msg: r,
      line: i.line || i,
      col: i.col
    }
  };
}
function bx(t) {
  return Qd(t);
}
function _x(t) {
  return Qd(t);
}
function Wt(t, r) {
  const i = t.substring(0, r).split(/\r?\n/);
  return {
    line: i.length,
    // column number is last line's length + 1, because column numbering starts at 1:
    col: i[i.length - 1].length + 1
  };
}
function Us(t) {
  return t.startIndex + t[1].length;
}
const Sx = {
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
}, xx = function(t) {
  return Object.assign({}, Sx, t);
};
class Hs {
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
function Ex(t, r) {
  const i = {};
  if (t[r + 3] === "O" && t[r + 4] === "C" && t[r + 5] === "T" && t[r + 6] === "Y" && t[r + 7] === "P" && t[r + 8] === "E") {
    r = r + 9;
    let s = 1, l = !1, u = !1, f = "";
    for (; r < t.length; r++)
      if (t[r] === "<" && !u) {
        if (l && Nx(t, r)) {
          r += 7;
          let p, h;
          [p, h, r] = wx(t, r + 1), h.indexOf("&") === -1 && (i[kx(p)] = {
            regx: RegExp(`&${p};`, "g"),
            val: h
          });
        } else if (l && Ax(t, r)) r += 8;
        else if (l && Tx(t, r)) r += 8;
        else if (l && Ox(t, r)) r += 9;
        else if (Cx) u = !0;
        else throw new Error("Invalid DOCTYPE");
        s++, f = "";
      } else if (t[r] === ">") {
        if (u ? t[r - 1] === "-" && t[r - 2] === "-" && (u = !1, s--) : s--, s === 0)
          break;
      } else t[r] === "[" ? l = !0 : f += t[r];
    if (s !== 0)
      throw new Error("Unclosed DOCTYPE");
  } else
    throw new Error("Invalid Tag instead of DOCTYPE");
  return { entities: i, i: r };
}
function wx(t, r) {
  let i = "";
  for (; r < t.length && t[r] !== "'" && t[r] !== '"'; r++)
    i += t[r];
  if (i = i.trim(), i.indexOf(" ") !== -1) throw new Error("External entites are not supported");
  const s = t[r++];
  let l = "";
  for (; r < t.length && t[r] !== s; r++)
    l += t[r];
  return [i, l, r];
}
function Cx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "-" && t[r + 3] === "-";
}
function Nx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "E" && t[r + 3] === "N" && t[r + 4] === "T" && t[r + 5] === "I" && t[r + 6] === "T" && t[r + 7] === "Y";
}
function Ax(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "E" && t[r + 3] === "L" && t[r + 4] === "E" && t[r + 5] === "M" && t[r + 6] === "E" && t[r + 7] === "N" && t[r + 8] === "T";
}
function Tx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "A" && t[r + 3] === "T" && t[r + 4] === "T" && t[r + 5] === "L" && t[r + 6] === "I" && t[r + 7] === "S" && t[r + 8] === "T";
}
function Ox(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "N" && t[r + 3] === "O" && t[r + 4] === "T" && t[r + 5] === "A" && t[r + 6] === "T" && t[r + 7] === "I" && t[r + 8] === "O" && t[r + 9] === "N";
}
function kx(t) {
  if (Qd(t))
    return t;
  throw new Error(`Invalid entity name ${t}`);
}
const jx = /^[-+]?0x[a-fA-F0-9]+$/, Mx = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, Dx = {
  hex: !0,
  // oct: false,
  leadingZeros: !0,
  decimalPoint: ".",
  eNotation: !0
  //skipLike: /regex/
};
function Rx(t, r = {}) {
  if (r = Object.assign({}, Dx, r), !t || typeof t != "string") return t;
  let i = t.trim();
  if (r.skipLike !== void 0 && r.skipLike.test(i)) return t;
  if (t === "0") return 0;
  if (r.hex && jx.test(i))
    return Lx(i, 16);
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
    const s = Mx.exec(i);
    if (s) {
      const l = s[1], u = s[2];
      let f = zx(s[3]);
      if (!r.leadingZeros && u.length > 0 && l && i[2] !== ".") return t;
      if (!r.leadingZeros && u.length > 0 && !l && i[1] !== ".") return t;
      if (r.leadingZeros && u === t) return 0;
      {
        const p = Number(i), h = "" + p;
        return h.search(/[eE]/) !== -1 ? r.eNotation ? p : t : i.indexOf(".") !== -1 ? h === "0" && f === "" || h === f || l && h === "-" + f ? p : t : u ? f === h || l + f === h ? p : t : i === h || i === l + h ? p : t;
      }
    } else
      return t;
  }
}
function zx(t) {
  return t && t.indexOf(".") !== -1 && (t = t.replace(/0+$/, ""), t === "." ? t = "0" : t[0] === "." ? t = "0" + t : t[t.length - 1] === "." && (t = t.substr(0, t.length - 1))), t;
}
function Lx(t, r) {
  if (parseInt) return parseInt(t, r);
  if (Number.parseInt) return Number.parseInt(t, r);
  if (window && window.parseInt) return window.parseInt(t, r);
  throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
}
function Ix(t) {
  return typeof t == "function" ? t : Array.isArray(t) ? (r) => {
    for (const i of t)
      if (typeof i == "string" && r === i || i instanceof RegExp && i.test(r))
        return !0;
  } : () => !1;
}
class Px {
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
    }, this.addExternalEntities = Bx, this.parseXml = Zx, this.parseTextData = Ux, this.resolveNameSpace = Hx, this.buildAttributesMap = Fx, this.isItStopNode = $x, this.replaceEntitiesValue = Vx, this.readStopNodeData = Qx, this.saveTextToParentTag = Yx, this.addChild = Gx, this.ignoreAttributesFn = Ix(this.options.ignoreAttributes);
  }
}
function Bx(t) {
  const r = Object.keys(t);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    this.lastEntities[s] = {
      regex: new RegExp("&" + s + ";", "g"),
      val: t[s]
    };
  }
}
function Ux(t, r, i, s, l, u, f) {
  if (t !== void 0 && (this.options.trimValues && !s && (t = t.trim()), t.length > 0)) {
    f || (t = this.replaceEntitiesValue(t));
    const p = this.options.tagValueProcessor(r, t, i, l, u);
    return p == null ? t : typeof p != typeof t || p !== t ? p : this.options.trimValues ? jd(t, this.options.parseTagValue, this.options.numberParseOptions) : t.trim() === t ? jd(t, this.options.parseTagValue, this.options.numberParseOptions) : t;
  }
}
function Hx(t) {
  if (this.options.removeNSPrefix) {
    const r = t.split(":"), i = t.charAt(0) === "/" ? "/" : "";
    if (r[0] === "xmlns")
      return "";
    r.length === 2 && (t = i + r[1]);
  }
  return t;
}
const qx = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function Fx(t, r, i) {
  if (this.options.ignoreAttributes !== !0 && typeof t == "string") {
    const s = z0(t, qx), l = s.length, u = {};
    for (let f = 0; f < l; f++) {
      const p = this.resolveNameSpace(s[f][1]);
      if (this.ignoreAttributesFn(p, r))
        continue;
      let h = s[f][4], g = this.options.attributeNamePrefix + p;
      if (p.length)
        if (this.options.transformAttributeName && (g = this.options.transformAttributeName(g)), g === "__proto__" && (g = "#__proto__"), h !== void 0) {
          this.options.trimValues && (h = h.trim()), h = this.replaceEntitiesValue(h);
          const m = this.options.attributeValueProcessor(p, h, r);
          m == null ? u[g] = h : typeof m != typeof h || m !== h ? u[g] = m : u[g] = jd(
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
const Zx = function(t) {
  t = t.replace(/\r\n?/g, `
`);
  const r = new Hs("!xml");
  let i = r, s = "", l = "";
  for (let u = 0; u < t.length; u++)
    if (t[u] === "<")
      if (t[u + 1] === "/") {
        const p = Da(t, ">", u, "Closing Tag is not closed.");
        let h = t.substring(u + 2, p).trim();
        if (this.options.removeNSPrefix) {
          const S = h.indexOf(":");
          S !== -1 && (h = h.substr(S + 1));
        }
        this.options.transformTagName && (h = this.options.transformTagName(h)), i && (s = this.saveTextToParentTag(s, i, l));
        const g = l.substring(l.lastIndexOf(".") + 1);
        if (h && this.options.unpairedTags.indexOf(h) !== -1)
          throw new Error(`Unpaired tag can not be used as closing tag: </${h}>`);
        let m = 0;
        g && this.options.unpairedTags.indexOf(g) !== -1 ? (m = l.lastIndexOf(".", l.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : m = l.lastIndexOf("."), l = l.substring(0, m), i = this.tagsNodeStack.pop(), s = "", u = p;
      } else if (t[u + 1] === "?") {
        let p = kd(t, u, !1, "?>");
        if (!p) throw new Error("Pi Tag is not closed.");
        if (s = this.saveTextToParentTag(s, i, l), !(this.options.ignoreDeclaration && p.tagName === "?xml" || this.options.ignorePiTags)) {
          const h = new Hs(p.tagName);
          h.add(this.options.textNodeName, ""), p.tagName !== p.tagExp && p.attrExpPresent && (h[":@"] = this.buildAttributesMap(p.tagExp, l, p.tagName)), this.addChild(i, h, l);
        }
        u = p.closeIndex + 1;
      } else if (t.substr(u + 1, 3) === "!--") {
        const p = Da(t, "-->", u + 4, "Comment is not closed.");
        if (this.options.commentPropName) {
          const h = t.substring(u + 4, p - 2);
          s = this.saveTextToParentTag(s, i, l), i.add(this.options.commentPropName, [{ [this.options.textNodeName]: h }]);
        }
        u = p;
      } else if (t.substr(u + 1, 2) === "!D") {
        const p = Ex(t, u);
        this.docTypeEntities = p.entities, u = p.i;
      } else if (t.substr(u + 1, 2) === "![") {
        const p = Da(t, "]]>", u, "CDATA is not closed.") - 2, h = t.substring(u + 9, p);
        s = this.saveTextToParentTag(s, i, l);
        let g = this.parseTextData(h, i.tagname, l, !0, !1, !0, !0);
        g == null && (g = ""), this.options.cdataPropName ? i.add(this.options.cdataPropName, [{ [this.options.textNodeName]: h }]) : i.add(this.options.textNodeName, g), u = p + 2;
      } else {
        let p = kd(t, u, this.options.removeNSPrefix), h = p.tagName;
        const g = p.rawTagName;
        let m = p.tagExp, S = p.attrExpPresent, v = p.closeIndex;
        this.options.transformTagName && (h = this.options.transformTagName(h)), i && s && i.tagname !== "!xml" && (s = this.saveTextToParentTag(s, i, l, !1));
        const y = i;
        if (y && this.options.unpairedTags.indexOf(y.tagname) !== -1 && (i = this.tagsNodeStack.pop(), l = l.substring(0, l.lastIndexOf("."))), h !== r.tagname && (l += l ? "." + h : h), this.isItStopNode(this.options.stopNodes, l, h)) {
          let d = "";
          if (m.length > 0 && m.lastIndexOf("/") === m.length - 1)
            h[h.length - 1] === "/" ? (h = h.substr(0, h.length - 1), l = l.substr(0, l.length - 1), m = h) : m = m.substr(0, m.length - 1), u = p.closeIndex;
          else if (this.options.unpairedTags.indexOf(h) !== -1)
            u = p.closeIndex;
          else {
            const w = this.readStopNodeData(t, g, v + 1);
            if (!w) throw new Error(`Unexpected end of ${g}`);
            u = w.i, d = w.tagContent;
          }
          const x = new Hs(h);
          h !== m && S && (x[":@"] = this.buildAttributesMap(m, l, h)), d && (d = this.parseTextData(d, h, l, !0, S, !0, !0)), l = l.substr(0, l.lastIndexOf(".")), x.add(this.options.textNodeName, d), this.addChild(i, x, l);
        } else {
          if (m.length > 0 && m.lastIndexOf("/") === m.length - 1) {
            h[h.length - 1] === "/" ? (h = h.substr(0, h.length - 1), l = l.substr(0, l.length - 1), m = h) : m = m.substr(0, m.length - 1), this.options.transformTagName && (h = this.options.transformTagName(h));
            const d = new Hs(h);
            h !== m && S && (d[":@"] = this.buildAttributesMap(m, l, h)), this.addChild(i, d, l), l = l.substr(0, l.lastIndexOf("."));
          } else {
            const d = new Hs(h);
            this.tagsNodeStack.push(i), h !== m && S && (d[":@"] = this.buildAttributesMap(m, l, h)), this.addChild(i, d, l), i = d;
          }
          s = "", u = v;
        }
      }
    else
      s += t[u];
  return r.child;
};
function Gx(t, r, i) {
  const s = this.options.updateTag(r.tagname, i, r[":@"]);
  s === !1 || (typeof s == "string" && (r.tagname = s), t.addChild(r));
}
const Vx = function(t) {
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
function Yx(t, r, i, s) {
  return t && (s === void 0 && (s = r.child.length === 0), t = this.parseTextData(
    t,
    r.tagname,
    i,
    !1,
    r[":@"] ? Object.keys(r[":@"]).length !== 0 : !1,
    s
  ), t !== void 0 && t !== "" && r.add(this.options.textNodeName, t), t = ""), t;
}
function $x(t, r, i) {
  const s = "*." + i;
  for (const l in t) {
    const u = t[l];
    if (s === u || r === u) return !0;
  }
  return !1;
}
function Xx(t, r, i = ">") {
  let s, l = "";
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
            data: l,
            index: u
          };
      } else
        return {
          data: l,
          index: u
        };
    else f === "	" && (f = " ");
    l += f;
  }
}
function Da(t, r, i, s) {
  const l = t.indexOf(r, i);
  if (l === -1)
    throw new Error(s);
  return l + r.length - 1;
}
function kd(t, r, i, s = ">") {
  const l = Xx(t, r + 1, s);
  if (!l) return;
  let u = l.data;
  const f = l.index, p = u.search(/\s/);
  let h = u, g = !0;
  p !== -1 && (h = u.substring(0, p), u = u.substring(p + 1).trimStart());
  const m = h;
  if (i) {
    const S = h.indexOf(":");
    S !== -1 && (h = h.substr(S + 1), g = h !== l.data.substr(S + 1));
  }
  return {
    tagName: h,
    tagExp: u,
    closeIndex: f,
    attrExpPresent: g,
    rawTagName: m
  };
}
function Qx(t, r, i) {
  const s = i;
  let l = 1;
  for (; i < t.length; i++)
    if (t[i] === "<")
      if (t[i + 1] === "/") {
        const u = Da(t, ">", i, `${r} is not closed`);
        if (t.substring(i + 2, u).trim() === r && (l--, l === 0))
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
        const u = kd(t, i, ">");
        u && ((u && u.tagName) === r && u.tagExp[u.tagExp.length - 1] !== "/" && l++, i = u.closeIndex);
      }
}
function jd(t, r, i) {
  if (r && typeof t == "string") {
    const s = t.trim();
    return s === "true" ? !0 : s === "false" ? !1 : Rx(t, i);
  } else
    return fx(t) ? t : "";
}
function Jx(t, r) {
  return I0(t, r);
}
function I0(t, r, i) {
  let s;
  const l = {};
  for (let u = 0; u < t.length; u++) {
    const f = t[u], p = Kx(f);
    let h = "";
    if (i === void 0 ? h = p : h = i + "." + p, p === r.textNodeName)
      s === void 0 ? s = f[p] : s += "" + f[p];
    else {
      if (p === void 0)
        continue;
      if (f[p]) {
        let g = I0(f[p], r, h);
        const m = eE(g, r);
        f[":@"] ? Wx(g, f[":@"], h, r) : Object.keys(g).length === 1 && g[r.textNodeName] !== void 0 && !r.alwaysCreateTextNode ? g = g[r.textNodeName] : Object.keys(g).length === 0 && (r.alwaysCreateTextNode ? g[r.textNodeName] = "" : g = ""), l[p] !== void 0 && l.hasOwnProperty(p) ? (Array.isArray(l[p]) || (l[p] = [l[p]]), l[p].push(g)) : r.isArray(p, h, m) ? l[p] = [g] : l[p] = g;
      }
    }
  }
  return typeof s == "string" ? s.length > 0 && (l[r.textNodeName] = s) : s !== void 0 && (l[r.textNodeName] = s), l;
}
function Kx(t) {
  const r = Object.keys(t);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (s !== ":@") return s;
  }
}
function Wx(t, r, i, s) {
  if (r) {
    const l = Object.keys(r), u = l.length;
    for (let f = 0; f < u; f++) {
      const p = l[f];
      s.isArray(p, i + "." + p, !0, !0) ? t[p] = [r[p]] : t[p] = r[p];
    }
  }
}
function eE(t, r) {
  const { textNodeName: i } = r, s = Object.keys(t).length;
  return !!(s === 0 || s === 1 && (t[i] || typeof t[i] == "boolean" || t[i] === 0));
}
class tE {
  constructor(r) {
    this.externalEntities = {}, this.options = xx(r);
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
      const u = L0(r, i);
      if (u !== !0)
        throw Error(`${u.err.msg}:${u.err.line}:${u.err.col}`);
    }
    const s = new Px(this.options);
    s.addExternalEntities(this.externalEntities);
    const l = s.parseXml(r);
    return this.options.preserveOrder || l === void 0 ? l : Jx(l, this.options);
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
const nE = {
  validate: L0
}, rE = new tE({
  ignoreAttributes: !0,
  textNodeName: "#text",
  trimValues: !0,
  allowBooleanAttributes: !0
});
function Md(t, r) {
  if (!(!r || !t || !r.properties))
    for (const i in r.properties) {
      if (!t.hasOwnProperty(i)) continue;
      const s = r.properties[i];
      let l = t[i];
      s.type === "array" && !Array.isArray(l) && (l = [l], t[i] = l), s.type === "object" && typeof l == "object" && l !== null ? Md(l, s) : s.type === "array" && s.items?.type === "object" && Array.isArray(l) && l.forEach((u) => Md(u, s.items)), s.type === "string" && typeof l != "string" ? t[i] = String(l) : s.type === "array" && s.items?.type === "string" && Array.isArray(l) && (t[i] = l.map(String));
    }
}
function P0(t, r, i = {}) {
  const s = /```(?:\w+\n|\n)?([\s\S]*?)```/, l = t.match(s);
  let u = l ? l[1].trim() : t.trim();
  try {
    switch (r) {
      case "xml":
        if (i.schema) {
          const h = nE.validate(u);
          if (h !== !0)
            throw new Error(`Model response is not valid XML: ${h.err.msg}`);
        }
        let f = rE.parse(u);
        if (f.root)
          f = f.root;
        else if (f.response)
          return f.response;
        return i.schema && Md(f, i.schema), f;
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
function Mv(t, r) {
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
var Tl = { exports: {} }, Ol = { exports: {} }, Yn = {}, cn = {}, Dv;
function hn() {
  if (Dv) return cn;
  Dv = 1, cn.__esModule = !0, cn.extend = l, cn.indexOf = h, cn.escapeExpression = g, cn.isEmpty = m, cn.createFrame = S, cn.blockParams = v, cn.appendContextPath = y;
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
  function l(d) {
    for (var x = 1; x < arguments.length; x++)
      for (var w in arguments[x])
        Object.prototype.hasOwnProperty.call(arguments[x], w) && (d[w] = arguments[x][w]);
    return d;
  }
  var u = Object.prototype.toString;
  cn.toString = u;
  var f = function(x) {
    return typeof x == "function";
  };
  f(/x/) && (cn.isFunction = f = function(d) {
    return typeof d == "function" && u.call(d) === "[object Function]";
  }), cn.isFunction = f;
  var p = Array.isArray || function(d) {
    return d && typeof d == "object" ? u.call(d) === "[object Array]" : !1;
  };
  cn.isArray = p;
  function h(d, x) {
    for (var w = 0, A = d.length; w < A; w++)
      if (d[w] === x)
        return w;
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
  function m(d) {
    return !d && d !== 0 ? !0 : !!(p(d) && d.length === 0);
  }
  function S(d) {
    var x = l({}, d);
    return x._parent = d, x;
  }
  function v(d, x) {
    return d.path = x, d;
  }
  function y(d, x) {
    return (d ? d + "." : "") + x;
  }
  return cn;
}
var kl = { exports: {} }, Rv;
function Jn() {
  return Rv || (Rv = 1, (function(t, r) {
    r.__esModule = !0;
    var i = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
    function s(l, u) {
      var f = u && u.loc, p = void 0, h = void 0, g = void 0, m = void 0;
      f && (p = f.start.line, h = f.end.line, g = f.start.column, m = f.end.column, l += " - " + p + ":" + g);
      for (var S = Error.prototype.constructor.call(this, l), v = 0; v < i.length; v++)
        this[i[v]] = S[i[v]];
      Error.captureStackTrace && Error.captureStackTrace(this, s);
      try {
        f && (this.lineNumber = p, this.endLineNumber = h, Object.defineProperty ? (Object.defineProperty(this, "column", {
          value: g,
          enumerable: !0
        }), Object.defineProperty(this, "endColumn", {
          value: m,
          enumerable: !0
        })) : (this.column = g, this.endColumn = m));
      } catch {
      }
    }
    s.prototype = new Error(), r.default = s, t.exports = r.default;
  })(kl, kl.exports)), kl.exports;
}
var qs = {}, jl = { exports: {} }, zv;
function aE() {
  return zv || (zv = 1, (function(t, r) {
    r.__esModule = !0;
    var i = hn();
    r.default = function(s) {
      s.registerHelper("blockHelperMissing", function(l, u) {
        var f = u.inverse, p = u.fn;
        if (l === !0)
          return p(this);
        if (l === !1 || l == null)
          return f(this);
        if (i.isArray(l))
          return l.length > 0 ? (u.ids && (u.ids = [u.name]), s.helpers.each(l, u)) : f(this);
        if (u.data && u.ids) {
          var h = i.createFrame(u.data);
          h.contextPath = i.appendContextPath(u.data.contextPath, u.name), u = { data: h };
        }
        return p(l, u);
      });
    }, t.exports = r.default;
  })(jl, jl.exports)), jl.exports;
}
var Ml = { exports: {} }, Lv;
function iE() {
  return Lv || (Lv = 1, (function(t, r) {
    r.__esModule = !0;
    function i(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var s = hn(), l = Jn(), u = i(l);
    r.default = function(f) {
      f.registerHelper("each", function(p, h) {
        if (!h)
          throw new u.default("Must pass iterator to #each");
        var g = h.fn, m = h.inverse, S = 0, v = "", y = void 0, d = void 0;
        h.data && h.ids && (d = s.appendContextPath(h.data.contextPath, h.ids[0]) + "."), s.isFunction(p) && (p = p.call(this)), h.data && (y = s.createFrame(h.data));
        function x(E, O, j) {
          y && (y.key = E, y.index = O, y.first = O === 0, y.last = !!j, d && (y.contextPath = d + E)), v = v + g(p[E], {
            data: y,
            blockParams: s.blockParams([p[E], E], [d + E, null])
          });
        }
        if (p && typeof p == "object")
          if (s.isArray(p))
            for (var w = p.length; S < w; S++)
              S in p && x(S, S, S === p.length - 1);
          else if (typeof Symbol == "function" && p[Symbol.iterator]) {
            for (var A = [], C = p[Symbol.iterator](), T = C.next(); !T.done; T = C.next())
              A.push(T.value);
            p = A;
            for (var w = p.length; S < w; S++)
              x(S, S, S === p.length - 1);
          } else
            (function() {
              var E = void 0;
              Object.keys(p).forEach(function(O) {
                E !== void 0 && x(E, S - 1), E = O, S++;
              }), E !== void 0 && x(E, S - 1, !0);
            })();
        return S === 0 && (v = m(this)), v;
      });
    }, t.exports = r.default;
  })(Ml, Ml.exports)), Ml.exports;
}
var Dl = { exports: {} }, Iv;
function sE() {
  return Iv || (Iv = 1, (function(t, r) {
    r.__esModule = !0;
    function i(u) {
      return u && u.__esModule ? u : { default: u };
    }
    var s = Jn(), l = i(s);
    r.default = function(u) {
      u.registerHelper("helperMissing", function() {
        if (arguments.length !== 1)
          throw new l.default('Missing helper: "' + arguments[arguments.length - 1].name + '"');
      });
    }, t.exports = r.default;
  })(Dl, Dl.exports)), Dl.exports;
}
var Rl = { exports: {} }, Pv;
function oE() {
  return Pv || (Pv = 1, (function(t, r) {
    r.__esModule = !0;
    function i(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var s = hn(), l = Jn(), u = i(l);
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
  })(Rl, Rl.exports)), Rl.exports;
}
var zl = { exports: {} }, Bv;
function lE() {
  return Bv || (Bv = 1, (function(t, r) {
    r.__esModule = !0, r.default = function(i) {
      i.registerHelper("log", function() {
        for (var s = [void 0], l = arguments[arguments.length - 1], u = 0; u < arguments.length - 1; u++)
          s.push(arguments[u]);
        var f = 1;
        l.hash.level != null ? f = l.hash.level : l.data && l.data.level != null && (f = l.data.level), s[0] = f, i.log.apply(i, s);
      });
    }, t.exports = r.default;
  })(zl, zl.exports)), zl.exports;
}
var Ll = { exports: {} }, Uv;
function uE() {
  return Uv || (Uv = 1, (function(t, r) {
    r.__esModule = !0, r.default = function(i) {
      i.registerHelper("lookup", function(s, l, u) {
        return s && u.lookupProperty(s, l);
      });
    }, t.exports = r.default;
  })(Ll, Ll.exports)), Ll.exports;
}
var Il = { exports: {} }, Hv;
function cE() {
  return Hv || (Hv = 1, (function(t, r) {
    r.__esModule = !0;
    function i(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var s = hn(), l = Jn(), u = i(l);
    r.default = function(f) {
      f.registerHelper("with", function(p, h) {
        if (arguments.length != 2)
          throw new u.default("#with requires exactly one argument");
        s.isFunction(p) && (p = p.call(this));
        var g = h.fn;
        if (s.isEmpty(p))
          return h.inverse(this);
        var m = h.data;
        return h.data && h.ids && (m = s.createFrame(h.data), m.contextPath = s.appendContextPath(h.data.contextPath, h.ids[0])), g(p, {
          data: m,
          blockParams: s.blockParams([p], [m && m.contextPath])
        });
      });
    }, t.exports = r.default;
  })(Il, Il.exports)), Il.exports;
}
var qv;
function B0() {
  if (qv) return qs;
  qv = 1, qs.__esModule = !0, qs.registerDefaultHelpers = x, qs.moveHelperToHooks = w;
  function t(A) {
    return A && A.__esModule ? A : { default: A };
  }
  var r = aE(), i = t(r), s = iE(), l = t(s), u = sE(), f = t(u), p = oE(), h = t(p), g = lE(), m = t(g), S = uE(), v = t(S), y = cE(), d = t(y);
  function x(A) {
    i.default(A), l.default(A), f.default(A), h.default(A), m.default(A), v.default(A), d.default(A);
  }
  function w(A, C, T) {
    A.helpers[C] && (A.hooks[C] = A.helpers[C], T || delete A.helpers[C]);
  }
  return qs;
}
var Pl = {}, Bl = { exports: {} }, Fv;
function fE() {
  return Fv || (Fv = 1, (function(t, r) {
    r.__esModule = !0;
    var i = hn();
    r.default = function(s) {
      s.registerDecorator("inline", function(l, u, f, p) {
        var h = l;
        return u.partials || (u.partials = {}, h = function(g, m) {
          var S = f.partials;
          f.partials = i.extend({}, S, u.partials);
          var v = l(g, m);
          return f.partials = S, v;
        }), u.partials[p.args[0]] = p.fn, h;
      });
    }, t.exports = r.default;
  })(Bl, Bl.exports)), Bl.exports;
}
var Zv;
function dE() {
  if (Zv) return Pl;
  Zv = 1, Pl.__esModule = !0, Pl.registerDefaultDecorators = s;
  function t(l) {
    return l && l.__esModule ? l : { default: l };
  }
  var r = fE(), i = t(r);
  function s(l) {
    i.default(l);
  }
  return Pl;
}
var Ul = { exports: {} }, Gv;
function U0() {
  return Gv || (Gv = 1, (function(t, r) {
    r.__esModule = !0;
    var i = hn(), s = {
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
  })(Ul, Ul.exports)), Ul.exports;
}
var Ti = {}, Hl = {}, Vv;
function hE() {
  if (Vv) return Hl;
  Vv = 1, Hl.__esModule = !0, Hl.createNewLookupObject = r;
  var t = hn();
  function r() {
    for (var i = arguments.length, s = Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return t.extend.apply(void 0, [/* @__PURE__ */ Object.create(null)].concat(s));
  }
  return Hl;
}
var Yv;
function H0() {
  if (Yv) return Ti;
  Yv = 1, Ti.__esModule = !0, Ti.createProtoAccessControl = u, Ti.resultIsAllowed = f, Ti.resetLoggedProperties = g;
  function t(m) {
    return m && m.__esModule ? m : { default: m };
  }
  var r = hE(), i = U0(), s = t(i), l = /* @__PURE__ */ Object.create(null);
  function u(m) {
    var S = /* @__PURE__ */ Object.create(null);
    S.constructor = !1, S.__defineGetter__ = !1, S.__defineSetter__ = !1, S.__lookupGetter__ = !1;
    var v = /* @__PURE__ */ Object.create(null);
    return v.__proto__ = !1, {
      properties: {
        whitelist: r.createNewLookupObject(v, m.allowedProtoProperties),
        defaultValue: m.allowProtoPropertiesByDefault
      },
      methods: {
        whitelist: r.createNewLookupObject(S, m.allowedProtoMethods),
        defaultValue: m.allowProtoMethodsByDefault
      }
    };
  }
  function f(m, S, v) {
    return p(typeof m == "function" ? S.methods : S.properties, v);
  }
  function p(m, S) {
    return m.whitelist[S] !== void 0 ? m.whitelist[S] === !0 : m.defaultValue !== void 0 ? m.defaultValue : (h(S), !1);
  }
  function h(m) {
    l[m] !== !0 && (l[m] = !0, s.default.log("error", 'Handlebars: Access has been denied to resolve the property "' + m + `" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`));
  }
  function g() {
    Object.keys(l).forEach(function(m) {
      delete l[m];
    });
  }
  return Ti;
}
var $v;
function Jd() {
  if ($v) return Yn;
  $v = 1, Yn.__esModule = !0, Yn.HandlebarsEnvironment = d;
  function t(w) {
    return w && w.__esModule ? w : { default: w };
  }
  var r = hn(), i = Jn(), s = t(i), l = B0(), u = dE(), f = U0(), p = t(f), h = H0(), g = "4.7.8";
  Yn.VERSION = g;
  var m = 8;
  Yn.COMPILER_REVISION = m;
  var S = 7;
  Yn.LAST_COMPATIBLE_COMPILER_REVISION = S;
  var v = {
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
  Yn.REVISION_CHANGES = v;
  var y = "[object Object]";
  function d(w, A, C) {
    this.helpers = w || {}, this.partials = A || {}, this.decorators = C || {}, l.registerDefaultHelpers(this), u.registerDefaultDecorators(this);
  }
  d.prototype = {
    constructor: d,
    logger: p.default,
    log: p.default.log,
    registerHelper: function(A, C) {
      if (r.toString.call(A) === y) {
        if (C)
          throw new s.default("Arg not supported with multiple helpers");
        r.extend(this.helpers, A);
      } else
        this.helpers[A] = C;
    },
    unregisterHelper: function(A) {
      delete this.helpers[A];
    },
    registerPartial: function(A, C) {
      if (r.toString.call(A) === y)
        r.extend(this.partials, A);
      else {
        if (typeof C > "u")
          throw new s.default('Attempting to register a partial called "' + A + '" as undefined');
        this.partials[A] = C;
      }
    },
    unregisterPartial: function(A) {
      delete this.partials[A];
    },
    registerDecorator: function(A, C) {
      if (r.toString.call(A) === y) {
        if (C)
          throw new s.default("Arg not supported with multiple decorators");
        r.extend(this.decorators, A);
      } else
        this.decorators[A] = C;
    },
    unregisterDecorator: function(A) {
      delete this.decorators[A];
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
  return Yn.log = x, Yn.createFrame = r.createFrame, Yn.logger = p.default, Yn;
}
var ql = { exports: {} }, Xv;
function pE() {
  return Xv || (Xv = 1, (function(t, r) {
    r.__esModule = !0;
    function i(s) {
      this.string = s;
    }
    i.prototype.toString = i.prototype.toHTML = function() {
      return "" + this.string;
    }, r.default = i, t.exports = r.default;
  })(ql, ql.exports)), ql.exports;
}
var xr = {}, Fl = {}, Qv;
function mE() {
  if (Qv) return Fl;
  Qv = 1, Fl.__esModule = !0, Fl.wrapHelper = t;
  function t(r, i) {
    if (typeof r != "function")
      return r;
    var s = function() {
      var u = arguments[arguments.length - 1];
      return arguments[arguments.length - 1] = i(u), r.apply(this, arguments);
    };
    return s;
  }
  return Fl;
}
var Jv;
function gE() {
  if (Jv) return xr;
  Jv = 1, xr.__esModule = !0, xr.checkRevision = m, xr.template = S, xr.wrapProgram = v, xr.resolvePartial = y, xr.invokePartial = d, xr.noop = x;
  function t(E) {
    return E && E.__esModule ? E : { default: E };
  }
  function r(E) {
    if (E && E.__esModule)
      return E;
    var O = {};
    if (E != null)
      for (var j in E)
        Object.prototype.hasOwnProperty.call(E, j) && (O[j] = E[j]);
    return O.default = E, O;
  }
  var i = hn(), s = r(i), l = Jn(), u = t(l), f = Jd(), p = B0(), h = mE(), g = H0();
  function m(E) {
    var O = E && E[0] || 1, j = f.COMPILER_REVISION;
    if (!(O >= f.LAST_COMPATIBLE_COMPILER_REVISION && O <= f.COMPILER_REVISION))
      if (O < f.LAST_COMPATIBLE_COMPILER_REVISION) {
        var R = f.REVISION_CHANGES[j], H = f.REVISION_CHANGES[O];
        throw new u.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + R + ") or downgrade your runtime to an older version (" + H + ").");
      } else
        throw new u.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + E[1] + ").");
  }
  function S(E, O) {
    if (!O)
      throw new u.default("No environment passed to template");
    if (!E || !E.main)
      throw new u.default("Unknown template object: " + typeof E);
    E.main.decorator = E.main_d, O.VM.checkRevision(E.compiler);
    var j = E.compiler && E.compiler[0] === 7;
    function R(B, V, $) {
      $.hash && (V = s.extend({}, V, $.hash), $.ids && ($.ids[0] = !0)), B = O.VM.resolvePartial.call(this, B, V, $);
      var F = s.extend({}, $, {
        hooks: this.hooks,
        protoAccessControl: this.protoAccessControl
      }), te = O.VM.invokePartial.call(this, B, V, F);
      if (te == null && O.compile && ($.partials[$.name] = O.compile(B, E.compilerOptions, O), te = $.partials[$.name](V, F)), te != null) {
        if ($.indent) {
          for (var W = te.split(`
`), L = 0, ae = W.length; L < ae && !(!W[L] && L + 1 === ae); L++)
            W[L] = $.indent + W[L];
          te = W.join(`
`);
        }
        return te;
      } else
        throw new u.default("The partial " + $.name + " could not be compiled when running in runtime-only mode");
    }
    var H = {
      strict: function(V, $, F) {
        if (!V || !($ in V))
          throw new u.default('"' + $ + '" not defined in ' + V, {
            loc: F
          });
        return H.lookupProperty(V, $);
      },
      lookupProperty: function(V, $) {
        var F = V[$];
        if (F == null || Object.prototype.hasOwnProperty.call(V, $) || g.resultIsAllowed(F, H.protoAccessControl, $))
          return F;
      },
      lookup: function(V, $) {
        for (var F = V.length, te = 0; te < F; te++) {
          var W = V[te] && H.lookupProperty(V[te], $);
          if (W != null)
            return V[te][$];
        }
      },
      lambda: function(V, $) {
        return typeof V == "function" ? V.call($) : V;
      },
      escapeExpression: s.escapeExpression,
      invokePartial: R,
      fn: function(V) {
        var $ = E[V];
        return $.decorator = E[V + "_d"], $;
      },
      programs: [],
      program: function(V, $, F, te, W) {
        var L = this.programs[V], ae = this.fn(V);
        return $ || W || te || F ? L = v(this, V, ae, $, F, te, W) : L || (L = this.programs[V] = v(this, V, ae)), L;
      },
      data: function(V, $) {
        for (; V && $--; )
          V = V._parent;
        return V;
      },
      mergeIfNeeded: function(V, $) {
        var F = V || $;
        return V && $ && V !== $ && (F = s.extend({}, $, V)), F;
      },
      // An empty object to use as replacement for null-contexts
      nullContext: Object.seal({}),
      noop: O.VM.noop,
      compilerInfo: E.compiler
    };
    function Q(B) {
      var V = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], $ = V.data;
      Q._setup(V), !V.partial && E.useData && ($ = w(B, $));
      var F = void 0, te = E.useBlockParams ? [] : void 0;
      E.useDepths && (V.depths ? F = B != V.depths[0] ? [B].concat(V.depths) : V.depths : F = [B]);
      function W(L) {
        return "" + E.main(H, L, H.helpers, H.partials, $, te, F);
      }
      return W = A(E.main, W, H, V.depths || [], $, te), W(B, V);
    }
    return Q.isTop = !0, Q._setup = function(B) {
      if (B.partial)
        H.protoAccessControl = B.protoAccessControl, H.helpers = B.helpers, H.partials = B.partials, H.decorators = B.decorators, H.hooks = B.hooks;
      else {
        var V = s.extend({}, O.helpers, B.helpers);
        C(V, H), H.helpers = V, E.usePartial && (H.partials = H.mergeIfNeeded(B.partials, O.partials)), (E.usePartial || E.useDecorators) && (H.decorators = s.extend({}, O.decorators, B.decorators)), H.hooks = {}, H.protoAccessControl = g.createProtoAccessControl(B);
        var $ = B.allowCallsToHelperMissing || j;
        p.moveHelperToHooks(H, "helperMissing", $), p.moveHelperToHooks(H, "blockHelperMissing", $);
      }
    }, Q._child = function(B, V, $, F) {
      if (E.useBlockParams && !$)
        throw new u.default("must pass block params");
      if (E.useDepths && !F)
        throw new u.default("must pass parent depths");
      return v(H, B, E[B], V, 0, $, F);
    }, Q;
  }
  function v(E, O, j, R, H, Q, B) {
    function V($) {
      var F = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], te = B;
      return B && $ != B[0] && !($ === E.nullContext && B[0] === null) && (te = [$].concat(B)), j(E, $, E.helpers, E.partials, F.data || R, Q && [F.blockParams].concat(Q), te);
    }
    return V = A(j, V, E, B, R, Q), V.program = O, V.depth = B ? B.length : 0, V.blockParams = H || 0, V;
  }
  function y(E, O, j) {
    return E ? !E.call && !j.name && (j.name = E, E = j.partials[E]) : j.name === "@partial-block" ? E = j.data["partial-block"] : E = j.partials[j.name], E;
  }
  function d(E, O, j) {
    var R = j.data && j.data["partial-block"];
    j.partial = !0, j.ids && (j.data.contextPath = j.ids[0] || j.data.contextPath);
    var H = void 0;
    if (j.fn && j.fn !== x && (function() {
      j.data = f.createFrame(j.data);
      var Q = j.fn;
      H = j.data["partial-block"] = function(V) {
        var $ = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
        return $.data = f.createFrame($.data), $.data["partial-block"] = R, Q(V, $);
      }, Q.partials && (j.partials = s.extend({}, j.partials, Q.partials));
    })(), E === void 0 && H && (E = H), E === void 0)
      throw new u.default("The partial " + j.name + " could not be found");
    if (E instanceof Function)
      return E(O, j);
  }
  function x() {
    return "";
  }
  function w(E, O) {
    return (!O || !("root" in O)) && (O = O ? f.createFrame(O) : {}, O.root = E), O;
  }
  function A(E, O, j, R, H, Q) {
    if (E.decorator) {
      var B = {};
      O = E.decorator(O, B, j, R && R[0], H, Q, R), s.extend(O, B);
    }
    return O;
  }
  function C(E, O) {
    Object.keys(E).forEach(function(j) {
      var R = E[j];
      E[j] = T(R, O);
    });
  }
  function T(E, O) {
    var j = O.lookupProperty;
    return h.wrapHelper(E, function(R) {
      return s.extend({ lookupProperty: j }, R);
    });
  }
  return xr;
}
var Zl = { exports: {} }, Kv;
function q0() {
  return Kv || (Kv = 1, (function(t, r) {
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
  })(Zl, Zl.exports)), Zl.exports;
}
var Wv;
function vE() {
  return Wv || (Wv = 1, (function(t, r) {
    r.__esModule = !0;
    function i(C) {
      return C && C.__esModule ? C : { default: C };
    }
    function s(C) {
      if (C && C.__esModule)
        return C;
      var T = {};
      if (C != null)
        for (var E in C)
          Object.prototype.hasOwnProperty.call(C, E) && (T[E] = C[E]);
      return T.default = C, T;
    }
    var l = Jd(), u = s(l), f = pE(), p = i(f), h = Jn(), g = i(h), m = hn(), S = s(m), v = gE(), y = s(v), d = q0(), x = i(d);
    function w() {
      var C = new u.HandlebarsEnvironment();
      return S.extend(C, u), C.SafeString = p.default, C.Exception = g.default, C.Utils = S, C.escapeExpression = S.escapeExpression, C.VM = y, C.template = function(T) {
        return y.template(T, C);
      }, C;
    }
    var A = w();
    A.create = w, x.default(A), A.default = A, r.default = A, t.exports = r.default;
  })(Ol, Ol.exports)), Ol.exports;
}
var Gl = { exports: {} }, ey;
function F0() {
  return ey || (ey = 1, (function(t, r) {
    r.__esModule = !0;
    var i = {
      // Public API used to evaluate derived attributes regarding AST nodes
      helpers: {
        // a mustache is definitely a helper if:
        // * it is an eligible helper, and
        // * it has at least one parameter or hash segment
        helperExpression: function(l) {
          return l.type === "SubExpression" || (l.type === "MustacheStatement" || l.type === "BlockStatement") && !!(l.params && l.params.length || l.hash);
        },
        scopedId: function(l) {
          return /^\.|this\b/.test(l.original);
        },
        // an ID is simple if it only has one part, and that part is not
        // `..` or `this`.
        simpleId: function(l) {
          return l.parts.length === 1 && !i.helpers.scopedId(l) && !l.depth;
        }
      }
    };
    r.default = i, t.exports = r.default;
  })(Gl, Gl.exports)), Gl.exports;
}
var Oi = {}, Vl = { exports: {} }, ty;
function yE() {
  return ty || (ty = 1, (function(t, r) {
    r.__esModule = !0;
    var i = (function() {
      var s = {
        trace: function() {
        },
        yy: {},
        symbols_: { error: 2, root: 3, program: 4, EOF: 5, program_repetition0: 6, statement: 7, mustache: 8, block: 9, rawBlock: 10, partial: 11, partialBlock: 12, content: 13, COMMENT: 14, CONTENT: 15, openRawBlock: 16, rawBlock_repetition0: 17, END_RAW_BLOCK: 18, OPEN_RAW_BLOCK: 19, helperName: 20, openRawBlock_repetition0: 21, openRawBlock_option0: 22, CLOSE_RAW_BLOCK: 23, openBlock: 24, block_option0: 25, closeBlock: 26, openInverse: 27, block_option1: 28, OPEN_BLOCK: 29, openBlock_repetition0: 30, openBlock_option0: 31, openBlock_option1: 32, CLOSE: 33, OPEN_INVERSE: 34, openInverse_repetition0: 35, openInverse_option0: 36, openInverse_option1: 37, openInverseChain: 38, OPEN_INVERSE_CHAIN: 39, openInverseChain_repetition0: 40, openInverseChain_option0: 41, openInverseChain_option1: 42, inverseAndProgram: 43, INVERSE: 44, inverseChain: 45, inverseChain_option0: 46, OPEN_ENDBLOCK: 47, OPEN: 48, mustache_repetition0: 49, mustache_option0: 50, OPEN_UNESCAPED: 51, mustache_repetition1: 52, mustache_option1: 53, CLOSE_UNESCAPED: 54, OPEN_PARTIAL: 55, partialName: 56, partial_repetition0: 57, partial_option0: 58, openPartialBlock: 59, OPEN_PARTIAL_BLOCK: 60, openPartialBlock_repetition0: 61, openPartialBlock_option0: 62, param: 63, sexpr: 64, OPEN_SEXPR: 65, sexpr_repetition0: 66, sexpr_option0: 67, CLOSE_SEXPR: 68, hash: 69, hash_repetition_plus0: 70, hashSegment: 71, ID: 72, EQUALS: 73, blockParams: 74, OPEN_BLOCK_PARAMS: 75, blockParams_repetition_plus0: 76, CLOSE_BLOCK_PARAMS: 77, path: 78, dataName: 79, STRING: 80, NUMBER: 81, BOOLEAN: 82, UNDEFINED: 83, NULL: 84, DATA: 85, pathSegments: 86, SEP: 87, $accept: 0, $end: 1 },
        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 0], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
        performAction: function(p, h, g, m, S, v, y) {
          var d = v.length - 1;
          switch (S) {
            case 1:
              return v[d - 1];
            case 2:
              this.$ = m.prepareProgram(v[d]);
              break;
            case 3:
              this.$ = v[d];
              break;
            case 4:
              this.$ = v[d];
              break;
            case 5:
              this.$ = v[d];
              break;
            case 6:
              this.$ = v[d];
              break;
            case 7:
              this.$ = v[d];
              break;
            case 8:
              this.$ = v[d];
              break;
            case 9:
              this.$ = {
                type: "CommentStatement",
                value: m.stripComment(v[d]),
                strip: m.stripFlags(v[d], v[d]),
                loc: m.locInfo(this._$)
              };
              break;
            case 10:
              this.$ = {
                type: "ContentStatement",
                original: v[d],
                value: v[d],
                loc: m.locInfo(this._$)
              };
              break;
            case 11:
              this.$ = m.prepareRawBlock(v[d - 2], v[d - 1], v[d], this._$);
              break;
            case 12:
              this.$ = { path: v[d - 3], params: v[d - 2], hash: v[d - 1] };
              break;
            case 13:
              this.$ = m.prepareBlock(v[d - 3], v[d - 2], v[d - 1], v[d], !1, this._$);
              break;
            case 14:
              this.$ = m.prepareBlock(v[d - 3], v[d - 2], v[d - 1], v[d], !0, this._$);
              break;
            case 15:
              this.$ = { open: v[d - 5], path: v[d - 4], params: v[d - 3], hash: v[d - 2], blockParams: v[d - 1], strip: m.stripFlags(v[d - 5], v[d]) };
              break;
            case 16:
              this.$ = { path: v[d - 4], params: v[d - 3], hash: v[d - 2], blockParams: v[d - 1], strip: m.stripFlags(v[d - 5], v[d]) };
              break;
            case 17:
              this.$ = { path: v[d - 4], params: v[d - 3], hash: v[d - 2], blockParams: v[d - 1], strip: m.stripFlags(v[d - 5], v[d]) };
              break;
            case 18:
              this.$ = { strip: m.stripFlags(v[d - 1], v[d - 1]), program: v[d] };
              break;
            case 19:
              var x = m.prepareBlock(v[d - 2], v[d - 1], v[d], v[d], !1, this._$), w = m.prepareProgram([x], v[d - 1].loc);
              w.chained = !0, this.$ = { strip: v[d - 2].strip, program: w, chain: !0 };
              break;
            case 20:
              this.$ = v[d];
              break;
            case 21:
              this.$ = { path: v[d - 1], strip: m.stripFlags(v[d - 2], v[d]) };
              break;
            case 22:
              this.$ = m.prepareMustache(v[d - 3], v[d - 2], v[d - 1], v[d - 4], m.stripFlags(v[d - 4], v[d]), this._$);
              break;
            case 23:
              this.$ = m.prepareMustache(v[d - 3], v[d - 2], v[d - 1], v[d - 4], m.stripFlags(v[d - 4], v[d]), this._$);
              break;
            case 24:
              this.$ = {
                type: "PartialStatement",
                name: v[d - 3],
                params: v[d - 2],
                hash: v[d - 1],
                indent: "",
                strip: m.stripFlags(v[d - 4], v[d]),
                loc: m.locInfo(this._$)
              };
              break;
            case 25:
              this.$ = m.preparePartialBlock(v[d - 2], v[d - 1], v[d], this._$);
              break;
            case 26:
              this.$ = { path: v[d - 3], params: v[d - 2], hash: v[d - 1], strip: m.stripFlags(v[d - 4], v[d]) };
              break;
            case 27:
              this.$ = v[d];
              break;
            case 28:
              this.$ = v[d];
              break;
            case 29:
              this.$ = {
                type: "SubExpression",
                path: v[d - 3],
                params: v[d - 2],
                hash: v[d - 1],
                loc: m.locInfo(this._$)
              };
              break;
            case 30:
              this.$ = { type: "Hash", pairs: v[d], loc: m.locInfo(this._$) };
              break;
            case 31:
              this.$ = { type: "HashPair", key: m.id(v[d - 2]), value: v[d], loc: m.locInfo(this._$) };
              break;
            case 32:
              this.$ = m.id(v[d - 1]);
              break;
            case 33:
              this.$ = v[d];
              break;
            case 34:
              this.$ = v[d];
              break;
            case 35:
              this.$ = { type: "StringLiteral", value: v[d], original: v[d], loc: m.locInfo(this._$) };
              break;
            case 36:
              this.$ = { type: "NumberLiteral", value: Number(v[d]), original: Number(v[d]), loc: m.locInfo(this._$) };
              break;
            case 37:
              this.$ = { type: "BooleanLiteral", value: v[d] === "true", original: v[d] === "true", loc: m.locInfo(this._$) };
              break;
            case 38:
              this.$ = { type: "UndefinedLiteral", original: void 0, value: void 0, loc: m.locInfo(this._$) };
              break;
            case 39:
              this.$ = { type: "NullLiteral", original: null, value: null, loc: m.locInfo(this._$) };
              break;
            case 40:
              this.$ = v[d];
              break;
            case 41:
              this.$ = v[d];
              break;
            case 42:
              this.$ = m.preparePath(!0, v[d], this._$);
              break;
            case 43:
              this.$ = m.preparePath(!1, v[d], this._$);
              break;
            case 44:
              v[d - 2].push({ part: m.id(v[d]), original: v[d], separator: v[d - 1] }), this.$ = v[d - 2];
              break;
            case 45:
              this.$ = [{ part: m.id(v[d]), original: v[d] }];
              break;
            case 46:
              this.$ = [];
              break;
            case 47:
              v[d - 1].push(v[d]);
              break;
            case 48:
              this.$ = [];
              break;
            case 49:
              v[d - 1].push(v[d]);
              break;
            case 50:
              this.$ = [];
              break;
            case 51:
              v[d - 1].push(v[d]);
              break;
            case 58:
              this.$ = [];
              break;
            case 59:
              v[d - 1].push(v[d]);
              break;
            case 64:
              this.$ = [];
              break;
            case 65:
              v[d - 1].push(v[d]);
              break;
            case 70:
              this.$ = [];
              break;
            case 71:
              v[d - 1].push(v[d]);
              break;
            case 78:
              this.$ = [];
              break;
            case 79:
              v[d - 1].push(v[d]);
              break;
            case 82:
              this.$ = [];
              break;
            case 83:
              v[d - 1].push(v[d]);
              break;
            case 86:
              this.$ = [];
              break;
            case 87:
              v[d - 1].push(v[d]);
              break;
            case 90:
              this.$ = [];
              break;
            case 91:
              v[d - 1].push(v[d]);
              break;
            case 94:
              this.$ = [];
              break;
            case 95:
              v[d - 1].push(v[d]);
              break;
            case 98:
              this.$ = [v[d]];
              break;
            case 99:
              v[d - 1].push(v[d]);
              break;
            case 100:
              this.$ = [v[d]];
              break;
            case 101:
              v[d - 1].push(v[d]);
              break;
          }
        },
        table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 15: [2, 48], 17: 39, 18: [2, 48] }, { 20: 41, 56: 40, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 44, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 45, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 41, 56: 48, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 49, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 50] }, { 72: [1, 35], 86: 51 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 52, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 53, 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 54, 47: [2, 54] }, { 28: 59, 43: 60, 44: [1, 58], 47: [2, 56] }, { 13: 62, 15: [1, 20], 18: [1, 61] }, { 33: [2, 86], 57: 63, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 64, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 65, 47: [1, 66] }, { 30: 67, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 68, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 69, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 70, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 74, 33: [2, 80], 50: 71, 63: 72, 64: 75, 65: [1, 43], 69: 73, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 79] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 50] }, { 20: 74, 53: 80, 54: [2, 84], 63: 81, 64: 75, 65: [1, 43], 69: 82, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 83, 47: [1, 66] }, { 47: [2, 55] }, { 4: 84, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 85, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 86, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 87, 47: [1, 66] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 74, 33: [2, 88], 58: 88, 63: 89, 64: 75, 65: [1, 43], 69: 90, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 91, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 92, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 31: 93, 33: [2, 60], 63: 94, 64: 75, 65: [1, 43], 69: 95, 70: 76, 71: 77, 72: [1, 78], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 66], 36: 96, 63: 97, 64: 75, 65: [1, 43], 69: 98, 70: 76, 71: 77, 72: [1, 78], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 22: 99, 23: [2, 52], 63: 100, 64: 75, 65: [1, 43], 69: 101, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 92], 62: 102, 63: 103, 64: 75, 65: [1, 43], 69: 104, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 105] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 106, 72: [1, 107], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 108], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 109] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 111, 46: 110, 47: [2, 76] }, { 33: [2, 70], 40: 112, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 113] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 74, 63: 115, 64: 75, 65: [1, 43], 67: 114, 68: [2, 96], 69: 116, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 117] }, { 32: 118, 33: [2, 62], 74: 119, 75: [1, 120] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 121, 74: 122, 75: [1, 120] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 123] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 124] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 108] }, { 20: 74, 63: 125, 64: 75, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 74, 33: [2, 72], 41: 126, 63: 127, 64: 75, 65: [1, 43], 69: 128, 70: 76, 71: 77, 72: [1, 78], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 129] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 130] }, { 33: [2, 63] }, { 72: [1, 132], 76: 131 }, { 33: [1, 133] }, { 33: [2, 69] }, { 15: [2, 12], 18: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 134, 74: 135, 75: [1, 120] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 137], 77: [1, 136] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 138] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
        defaultActions: { 4: [2, 1], 54: [2, 55], 56: [2, 20], 60: [2, 57], 73: [2, 81], 82: [2, 85], 86: [2, 18], 90: [2, 89], 101: [2, 53], 104: [2, 93], 110: [2, 19], 111: [2, 77], 116: [2, 97], 119: [2, 63], 122: [2, 69], 135: [2, 75], 136: [2, 32] },
        parseError: function(p, h) {
          throw new Error(p);
        },
        parse: function(p) {
          var h = this, g = [0], m = [null], S = [], v = this.table, y = "", d = 0, x = 0;
          this.lexer.setInput(p), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc > "u" && (this.lexer.yylloc = {});
          var w = this.lexer.yylloc;
          S.push(w);
          var A = this.lexer.options && this.lexer.options.ranges;
          typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
          function C() {
            var F;
            return F = h.lexer.lex() || 1, typeof F != "number" && (F = h.symbols_[F] || F), F;
          }
          for (var T, E, O, j, R = {}, H, Q, B, V; ; ) {
            if (E = g[g.length - 1], this.defaultActions[E] ? O = this.defaultActions[E] : ((T === null || typeof T > "u") && (T = C()), O = v[E] && v[E][T]), typeof O > "u" || !O.length || !O[0]) {
              var $ = "";
              {
                V = [];
                for (H in v[E]) this.terminals_[H] && H > 2 && V.push("'" + this.terminals_[H] + "'");
                this.lexer.showPosition ? $ = "Parse error on line " + (d + 1) + `:
` + this.lexer.showPosition() + `
Expecting ` + V.join(", ") + ", got '" + (this.terminals_[T] || T) + "'" : $ = "Parse error on line " + (d + 1) + ": Unexpected " + (T == 1 ? "end of input" : "'" + (this.terminals_[T] || T) + "'"), this.parseError($, { text: this.lexer.match, token: this.terminals_[T] || T, line: this.lexer.yylineno, loc: w, expected: V });
              }
            }
            if (O[0] instanceof Array && O.length > 1)
              throw new Error("Parse Error: multiple actions possible at state: " + E + ", token: " + T);
            switch (O[0]) {
              case 1:
                g.push(T), m.push(this.lexer.yytext), S.push(this.lexer.yylloc), g.push(O[1]), T = null, x = this.lexer.yyleng, y = this.lexer.yytext, d = this.lexer.yylineno, w = this.lexer.yylloc;
                break;
              case 2:
                if (Q = this.productions_[O[1]][1], R.$ = m[m.length - Q], R._$ = { first_line: S[S.length - (Q || 1)].first_line, last_line: S[S.length - 1].last_line, first_column: S[S.length - (Q || 1)].first_column, last_column: S[S.length - 1].last_column }, A && (R._$.range = [S[S.length - (Q || 1)].range[0], S[S.length - 1].range[1]]), j = this.performAction.call(R, y, x, d, this.yy, O[1], m, S), typeof j < "u")
                  return j;
                Q && (g = g.slice(0, -1 * Q * 2), m = m.slice(0, -1 * Q), S = S.slice(0, -1 * Q)), g.push(this.productions_[O[1]][0]), m.push(R.$), S.push(R._$), B = v[g[g.length - 2]][g[g.length - 1]], g.push(B);
                break;
              case 3:
                return !0;
            }
          }
          return !0;
        }
      }, l = (function() {
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
            var g = h.length, m = h.split(/(?:\r\n?|\n)/g);
            this._input = h + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - g - 1), this.offset -= g;
            var S = this.match.split(/(?:\r\n?|\n)/g);
            this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), m.length - 1 && (this.yylineno -= m.length - 1);
            var v = this.yylloc.range;
            return this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: m ? (m.length === S.length ? this.yylloc.first_column : 0) + S[S.length - m.length].length - m[0].length : this.yylloc.first_column - g
            }, this.options.ranges && (this.yylloc.range = [v[0], v[0] + this.yyleng - g]), this;
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
            var h, g, m, S, v;
            this._more || (this.yytext = "", this.match = "");
            for (var y = this._currentRules(), d = 0; d < y.length && (m = this._input.match(this.rules[y[d]]), !(m && (!g || m[0].length > g[0].length) && (g = m, S = d, !this.options.flex))); d++)
              ;
            return g ? (v = g[0].match(/(?:\r\n?|\n).*/g), v && (this.yylineno += v.length), this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: v ? v[v.length - 1].length - v[v.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + g[0].length
            }, this.yytext += g[0], this.match += g[0], this.matches = g, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(g[0].length), this.matched += g[0], h = this.performAction.call(this, this.yy, this, y[S], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), h || void 0) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
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
        return f.options = {}, f.performAction = function(h, g, m, S) {
          function v(y, d) {
            return g.yytext = g.yytext.substring(y, g.yyleng - d + y);
          }
          switch (m) {
            case 0:
              if (g.yytext.slice(-2) === "\\\\" ? (v(0, 1), this.begin("mu")) : g.yytext.slice(-1) === "\\" ? (v(0, 1), this.begin("emu")) : this.begin("mu"), g.yytext) return 15;
              break;
            case 1:
              return 15;
            case 2:
              return this.popState(), 15;
            case 3:
              return this.begin("raw"), 15;
            case 4:
              return this.popState(), this.conditionStack[this.conditionStack.length - 1] === "raw" ? 15 : (v(5, 9), "END_RAW_BLOCK");
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
              return g.yytext = v(1, 2).replace(/\\"/g, '"'), 80;
            case 32:
              return g.yytext = v(1, 2).replace(/\\'/g, "'"), 80;
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
      s.lexer = l;
      function u() {
        this.yy = {};
      }
      return u.prototype = s, s.Parser = u, new u();
    })();
    r.default = i, t.exports = r.default;
  })(Vl, Vl.exports)), Vl.exports;
}
var Yl = { exports: {} }, $l = { exports: {} }, ny;
function Z0() {
  return ny || (ny = 1, (function(t, r) {
    r.__esModule = !0;
    function i(g) {
      return g && g.__esModule ? g : { default: g };
    }
    var s = Jn(), l = i(s);
    function u() {
      this.parents = [];
    }
    u.prototype = {
      constructor: u,
      mutating: !1,
      // Visits a given value. If mutating, will replace the value if necessary.
      acceptKey: function(m, S) {
        var v = this.accept(m[S]);
        if (this.mutating) {
          if (v && !u.prototype[v.type])
            throw new l.default('Unexpected node type "' + v.type + '" found when accepting ' + S + " on " + m.type);
          m[S] = v;
        }
      },
      // Performs an accept operation with added sanity check to ensure
      // required keys are not removed.
      acceptRequired: function(m, S) {
        if (this.acceptKey(m, S), !m[S])
          throw new l.default(m.type + " requires " + S);
      },
      // Traverses a given array. If mutating, empty respnses will be removed
      // for child elements.
      acceptArray: function(m) {
        for (var S = 0, v = m.length; S < v; S++)
          this.acceptKey(m, S), m[S] || (m.splice(S, 1), S--, v--);
      },
      accept: function(m) {
        if (m) {
          if (!this[m.type])
            throw new l.default("Unknown type: " + m.type, m);
          this.current && this.parents.unshift(this.current), this.current = m;
          var S = this[m.type](m);
          if (this.current = this.parents.shift(), !this.mutating || S)
            return S;
          if (S !== !1)
            return m;
        }
      },
      Program: function(m) {
        this.acceptArray(m.body);
      },
      MustacheStatement: f,
      Decorator: f,
      BlockStatement: p,
      DecoratorBlock: p,
      PartialStatement: h,
      PartialBlockStatement: function(m) {
        h.call(this, m), this.acceptKey(m, "program");
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
      Hash: function(m) {
        this.acceptArray(m.pairs);
      },
      HashPair: function(m) {
        this.acceptRequired(m, "value");
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
  })($l, $l.exports)), $l.exports;
}
var ry;
function bE() {
  return ry || (ry = 1, (function(t, r) {
    r.__esModule = !0;
    function i(m) {
      return m && m.__esModule ? m : { default: m };
    }
    var s = Z0(), l = i(s);
    function u() {
      var m = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
      this.options = m;
    }
    u.prototype = new l.default(), u.prototype.Program = function(m) {
      var S = !this.options.ignoreStandalone, v = !this.isRootSeen;
      this.isRootSeen = !0;
      for (var y = m.body, d = 0, x = y.length; d < x; d++) {
        var w = y[d], A = this.accept(w);
        if (A) {
          var C = f(y, d, v), T = p(y, d, v), E = A.openStandalone && C, O = A.closeStandalone && T, j = A.inlineStandalone && C && T;
          A.close && h(y, d, !0), A.open && g(y, d, !0), S && j && (h(y, d), g(y, d) && w.type === "PartialStatement" && (w.indent = /([ \t]+$)/.exec(y[d - 1].original)[1])), S && E && (h((w.program || w.inverse).body), g(y, d)), S && O && (h(y, d), g((w.inverse || w.program).body));
        }
      }
      return m;
    }, u.prototype.BlockStatement = u.prototype.DecoratorBlock = u.prototype.PartialBlockStatement = function(m) {
      this.accept(m.program), this.accept(m.inverse);
      var S = m.program || m.inverse, v = m.program && m.inverse, y = v, d = v;
      if (v && v.chained)
        for (y = v.body[0].program; d.chained; )
          d = d.body[d.body.length - 1].program;
      var x = {
        open: m.openStrip.open,
        close: m.closeStrip.close,
        // Determine the standalone candiacy. Basically flag our content as being possibly standalone
        // so our parent can determine if we actually are standalone
        openStandalone: p(S.body),
        closeStandalone: f((y || S).body)
      };
      if (m.openStrip.close && h(S.body, null, !0), v) {
        var w = m.inverseStrip;
        w.open && g(S.body, null, !0), w.close && h(y.body, null, !0), m.closeStrip.open && g(d.body, null, !0), !this.options.ignoreStandalone && f(S.body) && p(y.body) && (g(S.body), h(y.body));
      } else m.closeStrip.open && g(S.body, null, !0);
      return x;
    }, u.prototype.Decorator = u.prototype.MustacheStatement = function(m) {
      return m.strip;
    }, u.prototype.PartialStatement = u.prototype.CommentStatement = function(m) {
      var S = m.strip || {};
      return {
        inlineStandalone: !0,
        open: S.open,
        close: S.close
      };
    };
    function f(m, S, v) {
      S === void 0 && (S = m.length);
      var y = m[S - 1], d = m[S - 2];
      if (!y)
        return v;
      if (y.type === "ContentStatement")
        return (d || !v ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(y.original);
    }
    function p(m, S, v) {
      S === void 0 && (S = -1);
      var y = m[S + 1], d = m[S + 2];
      if (!y)
        return v;
      if (y.type === "ContentStatement")
        return (d || !v ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(y.original);
    }
    function h(m, S, v) {
      var y = m[S == null ? 0 : S + 1];
      if (!(!y || y.type !== "ContentStatement" || !v && y.rightStripped)) {
        var d = y.value;
        y.value = y.value.replace(v ? /^\s+/ : /^[ \t]*\r?\n?/, ""), y.rightStripped = y.value !== d;
      }
    }
    function g(m, S, v) {
      var y = m[S == null ? m.length - 1 : S - 1];
      if (!(!y || y.type !== "ContentStatement" || !v && y.leftStripped)) {
        var d = y.value;
        return y.value = y.value.replace(v ? /\s+$/ : /[ \t]+$/, ""), y.leftStripped = y.value !== d, y.leftStripped;
      }
    }
    r.default = u, t.exports = r.default;
  })(Yl, Yl.exports)), Yl.exports;
}
var En = {}, ay;
function _E() {
  if (ay) return En;
  ay = 1, En.__esModule = !0, En.SourceLocation = l, En.id = u, En.stripFlags = f, En.stripComment = p, En.preparePath = h, En.prepareMustache = g, En.prepareRawBlock = m, En.prepareBlock = S, En.prepareProgram = v, En.preparePartialBlock = y;
  function t(d) {
    return d && d.__esModule ? d : { default: d };
  }
  var r = Jn(), i = t(r);
  function s(d, x) {
    if (x = x.path ? x.path.original : x, d.path.original !== x) {
      var w = { loc: d.path.loc };
      throw new i.default(d.path.original + " doesn't match " + x, w);
    }
  }
  function l(d, x) {
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
  function h(d, x, w) {
    w = this.locInfo(w);
    for (var A = d ? "@" : "", C = [], T = 0, E = 0, O = x.length; E < O; E++) {
      var j = x[E].part, R = x[E].original !== j;
      if (A += (x[E].separator || "") + j, !R && (j === ".." || j === "." || j === "this")) {
        if (C.length > 0)
          throw new i.default("Invalid path: " + A, { loc: w });
        j === ".." && T++;
      } else
        C.push(j);
    }
    return {
      type: "PathExpression",
      data: d,
      depth: T,
      parts: C,
      original: A,
      loc: w
    };
  }
  function g(d, x, w, A, C, T) {
    var E = A.charAt(3) || A.charAt(2), O = E !== "{" && E !== "&", j = /\*/.test(A);
    return {
      type: j ? "Decorator" : "MustacheStatement",
      path: d,
      params: x,
      hash: w,
      escaped: O,
      strip: C,
      loc: this.locInfo(T)
    };
  }
  function m(d, x, w, A) {
    s(d, w), A = this.locInfo(A);
    var C = {
      type: "Program",
      body: x,
      strip: {},
      loc: A
    };
    return {
      type: "BlockStatement",
      path: d.path,
      params: d.params,
      hash: d.hash,
      program: C,
      openStrip: {},
      inverseStrip: {},
      closeStrip: {},
      loc: A
    };
  }
  function S(d, x, w, A, C, T) {
    A && A.path && s(d, A);
    var E = /\*/.test(d.open);
    x.blockParams = d.blockParams;
    var O = void 0, j = void 0;
    if (w) {
      if (E)
        throw new i.default("Unexpected inverse block on decorator", w);
      w.chain && (w.program.body[0].closeStrip = A.strip), j = w.strip, O = w.program;
    }
    return C && (C = O, O = x, x = C), {
      type: E ? "DecoratorBlock" : "BlockStatement",
      path: d.path,
      params: d.params,
      hash: d.hash,
      program: x,
      inverse: O,
      openStrip: d.strip,
      inverseStrip: j,
      closeStrip: A && A.strip,
      loc: this.locInfo(T)
    };
  }
  function v(d, x) {
    if (!x && d.length) {
      var w = d[0].loc, A = d[d.length - 1].loc;
      w && A && (x = {
        source: w.source,
        start: {
          line: w.start.line,
          column: w.start.column
        },
        end: {
          line: A.end.line,
          column: A.end.column
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
  function y(d, x, w, A) {
    return s(d, w), {
      type: "PartialBlockStatement",
      name: d.path,
      params: d.params,
      hash: d.hash,
      program: x,
      openStrip: d.strip,
      closeStrip: w && w.strip,
      loc: this.locInfo(A)
    };
  }
  return En;
}
var iy;
function SE() {
  if (iy) return Oi;
  iy = 1, Oi.__esModule = !0, Oi.parseWithoutProcessing = m, Oi.parse = S;
  function t(v) {
    if (v && v.__esModule)
      return v;
    var y = {};
    if (v != null)
      for (var d in v)
        Object.prototype.hasOwnProperty.call(v, d) && (y[d] = v[d]);
    return y.default = v, y;
  }
  function r(v) {
    return v && v.__esModule ? v : { default: v };
  }
  var i = yE(), s = r(i), l = bE(), u = r(l), f = _E(), p = t(f), h = hn();
  Oi.parser = s.default;
  var g = {};
  h.extend(g, p);
  function m(v, y) {
    if (v.type === "Program")
      return v;
    s.default.yy = g, g.locInfo = function(x) {
      return new g.SourceLocation(y && y.srcName, x);
    };
    var d = s.default.parse(v);
    return d;
  }
  function S(v, y) {
    var d = m(v, y), x = new u.default(y);
    return x.accept(d);
  }
  return Oi;
}
var ki = {}, sy;
function xE() {
  if (sy) return ki;
  sy = 1, ki.__esModule = !0, ki.Compiler = p, ki.precompile = h, ki.compile = g;
  function t(v) {
    return v && v.__esModule ? v : { default: v };
  }
  var r = Jn(), i = t(r), s = hn(), l = F0(), u = t(l), f = [].slice;
  function p() {
  }
  p.prototype = {
    compiler: p,
    equals: function(y) {
      var d = this.opcodes.length;
      if (y.opcodes.length !== d)
        return !1;
      for (var x = 0; x < d; x++) {
        var w = this.opcodes[x], A = y.opcodes[x];
        if (w.opcode !== A.opcode || !m(w.args, A.args))
          return !1;
      }
      d = this.children.length;
      for (var x = 0; x < d; x++)
        if (!this.children[x].equals(y.children[x]))
          return !1;
      return !0;
    },
    guid: 0,
    compile: function(y, d) {
      return this.sourceNode = [], this.opcodes = [], this.children = [], this.options = d, this.stringParams = d.stringParams, this.trackIds = d.trackIds, d.blockParams = d.blockParams || [], d.knownHelpers = s.extend(/* @__PURE__ */ Object.create(null), {
        helperMissing: !0,
        blockHelperMissing: !0,
        each: !0,
        if: !0,
        unless: !0,
        with: !0,
        log: !0,
        lookup: !0
      }, d.knownHelpers), this.accept(y);
    },
    compileProgram: function(y) {
      var d = new this.compiler(), x = d.compile(y, this.options), w = this.guid++;
      return this.usePartial = this.usePartial || x.usePartial, this.children[w] = x, this.useDepths = this.useDepths || x.useDepths, w;
    },
    accept: function(y) {
      if (!this[y.type])
        throw new i.default("Unknown type: " + y.type, y);
      this.sourceNode.unshift(y);
      var d = this[y.type](y);
      return this.sourceNode.shift(), d;
    },
    Program: function(y) {
      this.options.blockParams.unshift(y.blockParams);
      for (var d = y.body, x = d.length, w = 0; w < x; w++)
        this.accept(d[w]);
      return this.options.blockParams.shift(), this.isSimple = x === 1, this.blockParams = y.blockParams ? y.blockParams.length : 0, this;
    },
    BlockStatement: function(y) {
      S(y);
      var d = y.program, x = y.inverse;
      d = d && this.compileProgram(d), x = x && this.compileProgram(x);
      var w = this.classifySexpr(y);
      w === "helper" ? this.helperSexpr(y, d, x) : w === "simple" ? (this.simpleSexpr(y), this.opcode("pushProgram", d), this.opcode("pushProgram", x), this.opcode("emptyHash"), this.opcode("blockValue", y.path.original)) : (this.ambiguousSexpr(y, d, x), this.opcode("pushProgram", d), this.opcode("pushProgram", x), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append");
    },
    DecoratorBlock: function(y) {
      var d = y.program && this.compileProgram(y.program), x = this.setupFullMustacheParams(y, d, void 0), w = y.path;
      this.useDecorators = !0, this.opcode("registerDecorator", x.length, w.original);
    },
    PartialStatement: function(y) {
      this.usePartial = !0;
      var d = y.program;
      d && (d = this.compileProgram(y.program));
      var x = y.params;
      if (x.length > 1)
        throw new i.default("Unsupported number of partial arguments: " + x.length, y);
      x.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : x.push({ type: "PathExpression", parts: [], depth: 0 }));
      var w = y.name.original, A = y.name.type === "SubExpression";
      A && this.accept(y.name), this.setupFullMustacheParams(y, d, void 0, !0);
      var C = y.indent || "";
      this.options.preventIndent && C && (this.opcode("appendContent", C), C = ""), this.opcode("invokePartial", A, w, C), this.opcode("append");
    },
    PartialBlockStatement: function(y) {
      this.PartialStatement(y);
    },
    MustacheStatement: function(y) {
      this.SubExpression(y), y.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append");
    },
    Decorator: function(y) {
      this.DecoratorBlock(y);
    },
    ContentStatement: function(y) {
      y.value && this.opcode("appendContent", y.value);
    },
    CommentStatement: function() {
    },
    SubExpression: function(y) {
      S(y);
      var d = this.classifySexpr(y);
      d === "simple" ? this.simpleSexpr(y) : d === "helper" ? this.helperSexpr(y) : this.ambiguousSexpr(y);
    },
    ambiguousSexpr: function(y, d, x) {
      var w = y.path, A = w.parts[0], C = d != null || x != null;
      this.opcode("getContext", w.depth), this.opcode("pushProgram", d), this.opcode("pushProgram", x), w.strict = !0, this.accept(w), this.opcode("invokeAmbiguous", A, C);
    },
    simpleSexpr: function(y) {
      var d = y.path;
      d.strict = !0, this.accept(d), this.opcode("resolvePossibleLambda");
    },
    helperSexpr: function(y, d, x) {
      var w = this.setupFullMustacheParams(y, d, x), A = y.path, C = A.parts[0];
      if (this.options.knownHelpers[C])
        this.opcode("invokeKnownHelper", w.length, C);
      else {
        if (this.options.knownHelpersOnly)
          throw new i.default("You specified knownHelpersOnly, but used the unknown helper " + C, y);
        A.strict = !0, A.falsy = !0, this.accept(A), this.opcode("invokeHelper", w.length, A.original, u.default.helpers.simpleId(A));
      }
    },
    PathExpression: function(y) {
      this.addDepth(y.depth), this.opcode("getContext", y.depth);
      var d = y.parts[0], x = u.default.helpers.scopedId(y), w = !y.depth && !x && this.blockParamIndex(d);
      w ? this.opcode("lookupBlockParam", w, y.parts) : d ? y.data ? (this.options.data = !0, this.opcode("lookupData", y.depth, y.parts, y.strict)) : this.opcode("lookupOnContext", y.parts, y.falsy, y.strict, x) : this.opcode("pushContext");
    },
    StringLiteral: function(y) {
      this.opcode("pushString", y.value);
    },
    NumberLiteral: function(y) {
      this.opcode("pushLiteral", y.value);
    },
    BooleanLiteral: function(y) {
      this.opcode("pushLiteral", y.value);
    },
    UndefinedLiteral: function() {
      this.opcode("pushLiteral", "undefined");
    },
    NullLiteral: function() {
      this.opcode("pushLiteral", "null");
    },
    Hash: function(y) {
      var d = y.pairs, x = 0, w = d.length;
      for (this.opcode("pushHash"); x < w; x++)
        this.pushParam(d[x].value);
      for (; x--; )
        this.opcode("assignToHash", d[x].key);
      this.opcode("popHash");
    },
    // HELPERS
    opcode: function(y) {
      this.opcodes.push({
        opcode: y,
        args: f.call(arguments, 1),
        loc: this.sourceNode[0].loc
      });
    },
    addDepth: function(y) {
      y && (this.useDepths = !0);
    },
    classifySexpr: function(y) {
      var d = u.default.helpers.simpleId(y.path), x = d && !!this.blockParamIndex(y.path.parts[0]), w = !x && u.default.helpers.helperExpression(y), A = !x && (w || d);
      if (A && !w) {
        var C = y.path.parts[0], T = this.options;
        T.knownHelpers[C] ? w = !0 : T.knownHelpersOnly && (A = !1);
      }
      return w ? "helper" : A ? "ambiguous" : "simple";
    },
    pushParams: function(y) {
      for (var d = 0, x = y.length; d < x; d++)
        this.pushParam(y[d]);
    },
    pushParam: function(y) {
      var d = y.value != null ? y.value : y.original || "";
      if (this.stringParams)
        d.replace && (d = d.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), y.depth && this.addDepth(y.depth), this.opcode("getContext", y.depth || 0), this.opcode("pushStringParam", d, y.type), y.type === "SubExpression" && this.accept(y);
      else {
        if (this.trackIds) {
          var x = void 0;
          if (y.parts && !u.default.helpers.scopedId(y) && !y.depth && (x = this.blockParamIndex(y.parts[0])), x) {
            var w = y.parts.slice(1).join(".");
            this.opcode("pushId", "BlockParam", x, w);
          } else
            d = y.original || d, d.replace && (d = d.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")), this.opcode("pushId", y.type, d);
        }
        this.accept(y);
      }
    },
    setupFullMustacheParams: function(y, d, x, w) {
      var A = y.params;
      return this.pushParams(A), this.opcode("pushProgram", d), this.opcode("pushProgram", x), y.hash ? this.accept(y.hash) : this.opcode("emptyHash", w), A;
    },
    blockParamIndex: function(y) {
      for (var d = 0, x = this.options.blockParams.length; d < x; d++) {
        var w = this.options.blockParams[d], A = w && s.indexOf(w, y);
        if (w && A >= 0)
          return [d, A];
      }
    }
  };
  function h(v, y, d) {
    if (v == null || typeof v != "string" && v.type !== "Program")
      throw new i.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + v);
    y = y || {}, "data" in y || (y.data = !0), y.compat && (y.useDepths = !0);
    var x = d.parse(v, y), w = new d.Compiler().compile(x, y);
    return new d.JavaScriptCompiler().compile(w, y);
  }
  function g(v, y, d) {
    if (y === void 0 && (y = {}), v == null || typeof v != "string" && v.type !== "Program")
      throw new i.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + v);
    y = s.extend({}, y), "data" in y || (y.data = !0), y.compat && (y.useDepths = !0);
    var x = void 0;
    function w() {
      var C = d.parse(v, y), T = new d.Compiler().compile(C, y), E = new d.JavaScriptCompiler().compile(T, y, void 0, !0);
      return d.template(E);
    }
    function A(C, T) {
      return x || (x = w()), x.call(this, C, T);
    }
    return A._setup = function(C) {
      return x || (x = w()), x._setup(C);
    }, A._child = function(C, T, E, O) {
      return x || (x = w()), x._child(C, T, E, O);
    }, A;
  }
  function m(v, y) {
    if (v === y)
      return !0;
    if (s.isArray(v) && s.isArray(y) && v.length === y.length) {
      for (var d = 0; d < v.length; d++)
        if (!m(v[d], y[d]))
          return !1;
      return !0;
    }
  }
  function S(v) {
    if (!v.path.parts) {
      var y = v.path;
      v.path = {
        type: "PathExpression",
        data: !1,
        depth: 0,
        parts: [y.original + ""],
        original: y.original + "",
        loc: y.loc
      };
    }
  }
  return ki;
}
var Xl = { exports: {} }, Ql = { exports: {} }, Fs = {}, sd = {}, Jl = {}, Kl = {}, oy;
function EE() {
  if (oy) return Kl;
  oy = 1;
  var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return Kl.encode = function(r) {
    if (0 <= r && r < t.length)
      return t[r];
    throw new TypeError("Must be between 0 and 63: " + r);
  }, Kl.decode = function(r) {
    var i = 65, s = 90, l = 97, u = 122, f = 48, p = 57, h = 43, g = 47, m = 26, S = 52;
    return i <= r && r <= s ? r - i : l <= r && r <= u ? r - l + m : f <= r && r <= p ? r - f + S : r == h ? 62 : r == g ? 63 : -1;
  }, Kl;
}
var ly;
function G0() {
  if (ly) return Jl;
  ly = 1;
  var t = EE(), r = 5, i = 1 << r, s = i - 1, l = i;
  function u(p) {
    return p < 0 ? (-p << 1) + 1 : (p << 1) + 0;
  }
  function f(p) {
    var h = (p & 1) === 1, g = p >> 1;
    return h ? -g : g;
  }
  return Jl.encode = function(h) {
    var g = "", m, S = u(h);
    do
      m = S & s, S >>>= r, S > 0 && (m |= l), g += t.encode(m);
    while (S > 0);
    return g;
  }, Jl.decode = function(h, g, m) {
    var S = h.length, v = 0, y = 0, d, x;
    do {
      if (g >= S)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (x = t.decode(h.charCodeAt(g++)), x === -1)
        throw new Error("Invalid base64 digit: " + h.charAt(g - 1));
      d = !!(x & l), x &= s, v = v + (x << y), y += r;
    } while (d);
    m.value = f(v), m.rest = g;
  }, Jl;
}
var od = {}, uy;
function oo() {
  return uy || (uy = 1, (function(t) {
    function r(E, O, j) {
      if (O in E)
        return E[O];
      if (arguments.length === 3)
        return j;
      throw new Error('"' + O + '" is a required argument.');
    }
    t.getArg = r;
    var i = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, s = /^data:.+\,.+$/;
    function l(E) {
      var O = E.match(i);
      return O ? {
        scheme: O[1],
        auth: O[2],
        host: O[3],
        port: O[4],
        path: O[5]
      } : null;
    }
    t.urlParse = l;
    function u(E) {
      var O = "";
      return E.scheme && (O += E.scheme + ":"), O += "//", E.auth && (O += E.auth + "@"), E.host && (O += E.host), E.port && (O += ":" + E.port), E.path && (O += E.path), O;
    }
    t.urlGenerate = u;
    function f(E) {
      var O = E, j = l(E);
      if (j) {
        if (!j.path)
          return E;
        O = j.path;
      }
      for (var R = t.isAbsolute(O), H = O.split(/\/+/), Q, B = 0, V = H.length - 1; V >= 0; V--)
        Q = H[V], Q === "." ? H.splice(V, 1) : Q === ".." ? B++ : B > 0 && (Q === "" ? (H.splice(V + 1, B), B = 0) : (H.splice(V, 2), B--));
      return O = H.join("/"), O === "" && (O = R ? "/" : "."), j ? (j.path = O, u(j)) : O;
    }
    t.normalize = f;
    function p(E, O) {
      E === "" && (E = "."), O === "" && (O = ".");
      var j = l(O), R = l(E);
      if (R && (E = R.path || "/"), j && !j.scheme)
        return R && (j.scheme = R.scheme), u(j);
      if (j || O.match(s))
        return O;
      if (R && !R.host && !R.path)
        return R.host = O, u(R);
      var H = O.charAt(0) === "/" ? O : f(E.replace(/\/+$/, "") + "/" + O);
      return R ? (R.path = H, u(R)) : H;
    }
    t.join = p, t.isAbsolute = function(E) {
      return E.charAt(0) === "/" || i.test(E);
    };
    function h(E, O) {
      E === "" && (E = "."), E = E.replace(/\/$/, "");
      for (var j = 0; O.indexOf(E + "/") !== 0; ) {
        var R = E.lastIndexOf("/");
        if (R < 0 || (E = E.slice(0, R), E.match(/^([^\/]+:\/)?\/*$/)))
          return O;
        ++j;
      }
      return Array(j + 1).join("../") + O.substr(E.length + 1);
    }
    t.relative = h;
    var g = (function() {
      var E = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in E);
    })();
    function m(E) {
      return E;
    }
    function S(E) {
      return y(E) ? "$" + E : E;
    }
    t.toSetString = g ? m : S;
    function v(E) {
      return y(E) ? E.slice(1) : E;
    }
    t.fromSetString = g ? m : v;
    function y(E) {
      if (!E)
        return !1;
      var O = E.length;
      if (O < 9 || E.charCodeAt(O - 1) !== 95 || E.charCodeAt(O - 2) !== 95 || E.charCodeAt(O - 3) !== 111 || E.charCodeAt(O - 4) !== 116 || E.charCodeAt(O - 5) !== 111 || E.charCodeAt(O - 6) !== 114 || E.charCodeAt(O - 7) !== 112 || E.charCodeAt(O - 8) !== 95 || E.charCodeAt(O - 9) !== 95)
        return !1;
      for (var j = O - 10; j >= 0; j--)
        if (E.charCodeAt(j) !== 36)
          return !1;
      return !0;
    }
    function d(E, O, j) {
      var R = w(E.source, O.source);
      return R !== 0 || (R = E.originalLine - O.originalLine, R !== 0) || (R = E.originalColumn - O.originalColumn, R !== 0 || j) || (R = E.generatedColumn - O.generatedColumn, R !== 0) || (R = E.generatedLine - O.generatedLine, R !== 0) ? R : w(E.name, O.name);
    }
    t.compareByOriginalPositions = d;
    function x(E, O, j) {
      var R = E.generatedLine - O.generatedLine;
      return R !== 0 || (R = E.generatedColumn - O.generatedColumn, R !== 0 || j) || (R = w(E.source, O.source), R !== 0) || (R = E.originalLine - O.originalLine, R !== 0) || (R = E.originalColumn - O.originalColumn, R !== 0) ? R : w(E.name, O.name);
    }
    t.compareByGeneratedPositionsDeflated = x;
    function w(E, O) {
      return E === O ? 0 : E === null ? 1 : O === null ? -1 : E > O ? 1 : -1;
    }
    function A(E, O) {
      var j = E.generatedLine - O.generatedLine;
      return j !== 0 || (j = E.generatedColumn - O.generatedColumn, j !== 0) || (j = w(E.source, O.source), j !== 0) || (j = E.originalLine - O.originalLine, j !== 0) || (j = E.originalColumn - O.originalColumn, j !== 0) ? j : w(E.name, O.name);
    }
    t.compareByGeneratedPositionsInflated = A;
    function C(E) {
      return JSON.parse(E.replace(/^\)]}'[^\n]*\n/, ""));
    }
    t.parseSourceMapInput = C;
    function T(E, O, j) {
      if (O = O || "", E && (E[E.length - 1] !== "/" && O[0] !== "/" && (E += "/"), O = E + O), j) {
        var R = l(j);
        if (!R)
          throw new Error("sourceMapURL could not be parsed");
        if (R.path) {
          var H = R.path.lastIndexOf("/");
          H >= 0 && (R.path = R.path.substring(0, H + 1));
        }
        O = p(u(R), O);
      }
      return f(O);
    }
    t.computeSourceURL = T;
  })(od)), od;
}
var ld = {}, cy;
function V0() {
  if (cy) return ld;
  cy = 1;
  var t = oo(), r = Object.prototype.hasOwnProperty, i = typeof Map < "u";
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
  }, ld.ArraySet = s, ld;
}
var ud = {}, fy;
function wE() {
  if (fy) return ud;
  fy = 1;
  var t = oo();
  function r(s, l) {
    var u = s.generatedLine, f = l.generatedLine, p = s.generatedColumn, h = l.generatedColumn;
    return f > u || f == u && h >= p || t.compareByGeneratedPositionsInflated(s, l) <= 0;
  }
  function i() {
    this._array = [], this._sorted = !0, this._last = { generatedLine: -1, generatedColumn: 0 };
  }
  return i.prototype.unsortedForEach = function(l, u) {
    this._array.forEach(l, u);
  }, i.prototype.add = function(l) {
    r(this._last, l) ? (this._last = l, this._array.push(l)) : (this._sorted = !1, this._array.push(l));
  }, i.prototype.toArray = function() {
    return this._sorted || (this._array.sort(t.compareByGeneratedPositionsInflated), this._sorted = !0), this._array;
  }, ud.MappingList = i, ud;
}
var dy;
function Y0() {
  if (dy) return sd;
  dy = 1;
  var t = G0(), r = oo(), i = V0().ArraySet, s = wE().MappingList;
  function l(u) {
    u || (u = {}), this._file = r.getArg(u, "file", null), this._sourceRoot = r.getArg(u, "sourceRoot", null), this._skipValidation = r.getArg(u, "skipValidation", !1), this._sources = new i(), this._names = new i(), this._mappings = new s(), this._sourcesContents = null;
  }
  return l.prototype._version = 3, l.fromSourceMap = function(f) {
    var p = f.sourceRoot, h = new l({
      file: f.file,
      sourceRoot: p
    });
    return f.eachMapping(function(g) {
      var m = {
        generated: {
          line: g.generatedLine,
          column: g.generatedColumn
        }
      };
      g.source != null && (m.source = g.source, p != null && (m.source = r.relative(p, m.source)), m.original = {
        line: g.originalLine,
        column: g.originalColumn
      }, g.name != null && (m.name = g.name)), h.addMapping(m);
    }), f.sources.forEach(function(g) {
      var m = g;
      p !== null && (m = r.relative(p, g)), h._sources.has(m) || h._sources.add(m);
      var S = f.sourceContentFor(g);
      S != null && h.setSourceContent(g, S);
    }), h;
  }, l.prototype.addMapping = function(f) {
    var p = r.getArg(f, "generated"), h = r.getArg(f, "original", null), g = r.getArg(f, "source", null), m = r.getArg(f, "name", null);
    this._skipValidation || this._validateMapping(p, h, g, m), g != null && (g = String(g), this._sources.has(g) || this._sources.add(g)), m != null && (m = String(m), this._names.has(m) || this._names.add(m)), this._mappings.add({
      generatedLine: p.line,
      generatedColumn: p.column,
      originalLine: h != null && h.line,
      originalColumn: h != null && h.column,
      source: g,
      name: m
    });
  }, l.prototype.setSourceContent = function(f, p) {
    var h = f;
    this._sourceRoot != null && (h = r.relative(this._sourceRoot, h)), p != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[r.toSetString(h)] = p) : this._sourcesContents && (delete this._sourcesContents[r.toSetString(h)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  }, l.prototype.applySourceMap = function(f, p, h) {
    var g = p;
    if (p == null) {
      if (f.file == null)
        throw new Error(
          `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
        );
      g = f.file;
    }
    var m = this._sourceRoot;
    m != null && (g = r.relative(m, g));
    var S = new i(), v = new i();
    this._mappings.unsortedForEach(function(y) {
      if (y.source === g && y.originalLine != null) {
        var d = f.originalPositionFor({
          line: y.originalLine,
          column: y.originalColumn
        });
        d.source != null && (y.source = d.source, h != null && (y.source = r.join(h, y.source)), m != null && (y.source = r.relative(m, y.source)), y.originalLine = d.line, y.originalColumn = d.column, d.name != null && (y.name = d.name));
      }
      var x = y.source;
      x != null && !S.has(x) && S.add(x);
      var w = y.name;
      w != null && !v.has(w) && v.add(w);
    }, this), this._sources = S, this._names = v, f.sources.forEach(function(y) {
      var d = f.sourceContentFor(y);
      d != null && (h != null && (y = r.join(h, y)), m != null && (y = r.relative(m, y)), this.setSourceContent(y, d));
    }, this);
  }, l.prototype._validateMapping = function(f, p, h, g) {
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
  }, l.prototype._serializeMappings = function() {
    for (var f = 0, p = 1, h = 0, g = 0, m = 0, S = 0, v = "", y, d, x, w, A = this._mappings.toArray(), C = 0, T = A.length; C < T; C++) {
      if (d = A[C], y = "", d.generatedLine !== p)
        for (f = 0; d.generatedLine !== p; )
          y += ";", p++;
      else if (C > 0) {
        if (!r.compareByGeneratedPositionsInflated(d, A[C - 1]))
          continue;
        y += ",";
      }
      y += t.encode(d.generatedColumn - f), f = d.generatedColumn, d.source != null && (w = this._sources.indexOf(d.source), y += t.encode(w - S), S = w, y += t.encode(d.originalLine - 1 - g), g = d.originalLine - 1, y += t.encode(d.originalColumn - h), h = d.originalColumn, d.name != null && (x = this._names.indexOf(d.name), y += t.encode(x - m), m = x)), v += y;
    }
    return v;
  }, l.prototype._generateSourcesContent = function(f, p) {
    return f.map(function(h) {
      if (!this._sourcesContents)
        return null;
      p != null && (h = r.relative(p, h));
      var g = r.toSetString(h);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, g) ? this._sourcesContents[g] : null;
    }, this);
  }, l.prototype.toJSON = function() {
    var f = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    return this._file != null && (f.file = this._file), this._sourceRoot != null && (f.sourceRoot = this._sourceRoot), this._sourcesContents && (f.sourcesContent = this._generateSourcesContent(f.sources, f.sourceRoot)), f;
  }, l.prototype.toString = function() {
    return JSON.stringify(this.toJSON());
  }, sd.SourceMapGenerator = l, sd;
}
var Zs = {}, cd = {}, hy;
function CE() {
  return hy || (hy = 1, (function(t) {
    t.GREATEST_LOWER_BOUND = 1, t.LEAST_UPPER_BOUND = 2;
    function r(i, s, l, u, f, p) {
      var h = Math.floor((s - i) / 2) + i, g = f(l, u[h], !0);
      return g === 0 ? h : g > 0 ? s - h > 1 ? r(h, s, l, u, f, p) : p == t.LEAST_UPPER_BOUND ? s < u.length ? s : -1 : h : h - i > 1 ? r(i, h, l, u, f, p) : p == t.LEAST_UPPER_BOUND ? h : i < 0 ? -1 : i;
    }
    t.search = function(s, l, u, f) {
      if (l.length === 0)
        return -1;
      var p = r(
        -1,
        l.length,
        s,
        l,
        u,
        f || t.GREATEST_LOWER_BOUND
      );
      if (p < 0)
        return -1;
      for (; p - 1 >= 0 && u(l[p], l[p - 1], !0) === 0; )
        --p;
      return p;
    };
  })(cd)), cd;
}
var fd = {}, py;
function NE() {
  if (py) return fd;
  py = 1;
  function t(s, l, u) {
    var f = s[l];
    s[l] = s[u], s[u] = f;
  }
  function r(s, l) {
    return Math.round(s + Math.random() * (l - s));
  }
  function i(s, l, u, f) {
    if (u < f) {
      var p = r(u, f), h = u - 1;
      t(s, p, f);
      for (var g = s[f], m = u; m < f; m++)
        l(s[m], g) <= 0 && (h += 1, t(s, h, m));
      t(s, h + 1, m);
      var S = h + 1;
      i(s, l, u, S - 1), i(s, l, S + 1, f);
    }
  }
  return fd.quickSort = function(s, l) {
    i(s, l, 0, s.length - 1);
  }, fd;
}
var my;
function AE() {
  if (my) return Zs;
  my = 1;
  var t = oo(), r = CE(), i = V0().ArraySet, s = G0(), l = NE().quickSort;
  function u(g, m) {
    var S = g;
    return typeof g == "string" && (S = t.parseSourceMapInput(g)), S.sections != null ? new h(S, m) : new f(S, m);
  }
  u.fromSourceMap = function(g, m) {
    return f.fromSourceMap(g, m);
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
  }), u.prototype._charIsMappingSeparator = function(m, S) {
    var v = m.charAt(S);
    return v === ";" || v === ",";
  }, u.prototype._parseMappings = function(m, S) {
    throw new Error("Subclasses must implement _parseMappings");
  }, u.GENERATED_ORDER = 1, u.ORIGINAL_ORDER = 2, u.GREATEST_LOWER_BOUND = 1, u.LEAST_UPPER_BOUND = 2, u.prototype.eachMapping = function(m, S, v) {
    var y = S || null, d = v || u.GENERATED_ORDER, x;
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
    var w = this.sourceRoot;
    x.map(function(A) {
      var C = A.source === null ? null : this._sources.at(A.source);
      return C = t.computeSourceURL(w, C, this._sourceMapURL), {
        source: C,
        generatedLine: A.generatedLine,
        generatedColumn: A.generatedColumn,
        originalLine: A.originalLine,
        originalColumn: A.originalColumn,
        name: A.name === null ? null : this._names.at(A.name)
      };
    }, this).forEach(m, y);
  }, u.prototype.allGeneratedPositionsFor = function(m) {
    var S = t.getArg(m, "line"), v = {
      source: t.getArg(m, "source"),
      originalLine: S,
      originalColumn: t.getArg(m, "column", 0)
    };
    if (v.source = this._findSourceIndex(v.source), v.source < 0)
      return [];
    var y = [], d = this._findMapping(
      v,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      t.compareByOriginalPositions,
      r.LEAST_UPPER_BOUND
    );
    if (d >= 0) {
      var x = this._originalMappings[d];
      if (m.column === void 0)
        for (var w = x.originalLine; x && x.originalLine === w; )
          y.push({
            line: t.getArg(x, "generatedLine", null),
            column: t.getArg(x, "generatedColumn", null),
            lastColumn: t.getArg(x, "lastGeneratedColumn", null)
          }), x = this._originalMappings[++d];
      else
        for (var A = x.originalColumn; x && x.originalLine === S && x.originalColumn == A; )
          y.push({
            line: t.getArg(x, "generatedLine", null),
            column: t.getArg(x, "generatedColumn", null),
            lastColumn: t.getArg(x, "lastGeneratedColumn", null)
          }), x = this._originalMappings[++d];
    }
    return y;
  }, Zs.SourceMapConsumer = u;
  function f(g, m) {
    var S = g;
    typeof g == "string" && (S = t.parseSourceMapInput(g));
    var v = t.getArg(S, "version"), y = t.getArg(S, "sources"), d = t.getArg(S, "names", []), x = t.getArg(S, "sourceRoot", null), w = t.getArg(S, "sourcesContent", null), A = t.getArg(S, "mappings"), C = t.getArg(S, "file", null);
    if (v != this._version)
      throw new Error("Unsupported version: " + v);
    x && (x = t.normalize(x)), y = y.map(String).map(t.normalize).map(function(T) {
      return x && t.isAbsolute(x) && t.isAbsolute(T) ? t.relative(x, T) : T;
    }), this._names = i.fromArray(d.map(String), !0), this._sources = i.fromArray(y, !0), this._absoluteSources = this._sources.toArray().map(function(T) {
      return t.computeSourceURL(x, T, m);
    }), this.sourceRoot = x, this.sourcesContent = w, this._mappings = A, this._sourceMapURL = m, this.file = C;
  }
  f.prototype = Object.create(u.prototype), f.prototype.consumer = u, f.prototype._findSourceIndex = function(g) {
    var m = g;
    if (this.sourceRoot != null && (m = t.relative(this.sourceRoot, m)), this._sources.has(m))
      return this._sources.indexOf(m);
    var S;
    for (S = 0; S < this._absoluteSources.length; ++S)
      if (this._absoluteSources[S] == g)
        return S;
    return -1;
  }, f.fromSourceMap = function(m, S) {
    var v = Object.create(f.prototype), y = v._names = i.fromArray(m._names.toArray(), !0), d = v._sources = i.fromArray(m._sources.toArray(), !0);
    v.sourceRoot = m._sourceRoot, v.sourcesContent = m._generateSourcesContent(
      v._sources.toArray(),
      v.sourceRoot
    ), v.file = m._file, v._sourceMapURL = S, v._absoluteSources = v._sources.toArray().map(function(j) {
      return t.computeSourceURL(v.sourceRoot, j, S);
    });
    for (var x = m._mappings.toArray().slice(), w = v.__generatedMappings = [], A = v.__originalMappings = [], C = 0, T = x.length; C < T; C++) {
      var E = x[C], O = new p();
      O.generatedLine = E.generatedLine, O.generatedColumn = E.generatedColumn, E.source && (O.source = d.indexOf(E.source), O.originalLine = E.originalLine, O.originalColumn = E.originalColumn, E.name && (O.name = y.indexOf(E.name)), A.push(O)), w.push(O);
    }
    return l(v.__originalMappings, t.compareByOriginalPositions), v;
  }, f.prototype._version = 3, Object.defineProperty(f.prototype, "sources", {
    get: function() {
      return this._absoluteSources.slice();
    }
  });
  function p() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
  }
  f.prototype._parseMappings = function(m, S) {
    for (var v = 1, y = 0, d = 0, x = 0, w = 0, A = 0, C = m.length, T = 0, E = {}, O = {}, j = [], R = [], H, Q, B, V, $; T < C; )
      if (m.charAt(T) === ";")
        v++, T++, y = 0;
      else if (m.charAt(T) === ",")
        T++;
      else {
        for (H = new p(), H.generatedLine = v, V = T; V < C && !this._charIsMappingSeparator(m, V); V++)
          ;
        if (Q = m.slice(T, V), B = E[Q], B)
          T += Q.length;
        else {
          for (B = []; T < V; )
            s.decode(m, T, O), $ = O.value, T = O.rest, B.push($);
          if (B.length === 2)
            throw new Error("Found a source, but no line and column");
          if (B.length === 3)
            throw new Error("Found a source and line, but no column");
          E[Q] = B;
        }
        H.generatedColumn = y + B[0], y = H.generatedColumn, B.length > 1 && (H.source = w + B[1], w += B[1], H.originalLine = d + B[2], d = H.originalLine, H.originalLine += 1, H.originalColumn = x + B[3], x = H.originalColumn, B.length > 4 && (H.name = A + B[4], A += B[4])), R.push(H), typeof H.originalLine == "number" && j.push(H);
      }
    l(R, t.compareByGeneratedPositionsDeflated), this.__generatedMappings = R, l(j, t.compareByOriginalPositions), this.__originalMappings = j;
  }, f.prototype._findMapping = function(m, S, v, y, d, x) {
    if (m[v] <= 0)
      throw new TypeError("Line must be greater than or equal to 1, got " + m[v]);
    if (m[y] < 0)
      throw new TypeError("Column must be greater than or equal to 0, got " + m[y]);
    return r.search(m, S, d, x);
  }, f.prototype.computeColumnSpans = function() {
    for (var m = 0; m < this._generatedMappings.length; ++m) {
      var S = this._generatedMappings[m];
      if (m + 1 < this._generatedMappings.length) {
        var v = this._generatedMappings[m + 1];
        if (S.generatedLine === v.generatedLine) {
          S.lastGeneratedColumn = v.generatedColumn - 1;
          continue;
        }
      }
      S.lastGeneratedColumn = 1 / 0;
    }
  }, f.prototype.originalPositionFor = function(m) {
    var S = {
      generatedLine: t.getArg(m, "line"),
      generatedColumn: t.getArg(m, "column")
    }, v = this._findMapping(
      S,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      t.compareByGeneratedPositionsDeflated,
      t.getArg(m, "bias", u.GREATEST_LOWER_BOUND)
    );
    if (v >= 0) {
      var y = this._generatedMappings[v];
      if (y.generatedLine === S.generatedLine) {
        var d = t.getArg(y, "source", null);
        d !== null && (d = this._sources.at(d), d = t.computeSourceURL(this.sourceRoot, d, this._sourceMapURL));
        var x = t.getArg(y, "name", null);
        return x !== null && (x = this._names.at(x)), {
          source: d,
          line: t.getArg(y, "originalLine", null),
          column: t.getArg(y, "originalColumn", null),
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
    return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(m) {
      return m == null;
    }) : !1;
  }, f.prototype.sourceContentFor = function(m, S) {
    if (!this.sourcesContent)
      return null;
    var v = this._findSourceIndex(m);
    if (v >= 0)
      return this.sourcesContent[v];
    var y = m;
    this.sourceRoot != null && (y = t.relative(this.sourceRoot, y));
    var d;
    if (this.sourceRoot != null && (d = t.urlParse(this.sourceRoot))) {
      var x = y.replace(/^file:\/\//, "");
      if (d.scheme == "file" && this._sources.has(x))
        return this.sourcesContent[this._sources.indexOf(x)];
      if ((!d.path || d.path == "/") && this._sources.has("/" + y))
        return this.sourcesContent[this._sources.indexOf("/" + y)];
    }
    if (S)
      return null;
    throw new Error('"' + y + '" is not in the SourceMap.');
  }, f.prototype.generatedPositionFor = function(m) {
    var S = t.getArg(m, "source");
    if (S = this._findSourceIndex(S), S < 0)
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    var v = {
      source: S,
      originalLine: t.getArg(m, "line"),
      originalColumn: t.getArg(m, "column")
    }, y = this._findMapping(
      v,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      t.compareByOriginalPositions,
      t.getArg(m, "bias", u.GREATEST_LOWER_BOUND)
    );
    if (y >= 0) {
      var d = this._originalMappings[y];
      if (d.source === v.source)
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
  function h(g, m) {
    var S = g;
    typeof g == "string" && (S = t.parseSourceMapInput(g));
    var v = t.getArg(S, "version"), y = t.getArg(S, "sections");
    if (v != this._version)
      throw new Error("Unsupported version: " + v);
    this._sources = new i(), this._names = new i();
    var d = {
      line: -1,
      column: 0
    };
    this._sections = y.map(function(x) {
      if (x.url)
        throw new Error("Support for url field in sections not implemented.");
      var w = t.getArg(x, "offset"), A = t.getArg(w, "line"), C = t.getArg(w, "column");
      if (A < d.line || A === d.line && C < d.column)
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return d = w, {
        generatedOffset: {
          // The offset fields are 0-based, but we use 1-based indices when
          // encoding/decoding from VLQ.
          generatedLine: A + 1,
          generatedColumn: C + 1
        },
        consumer: new u(t.getArg(x, "map"), m)
      };
    });
  }
  return h.prototype = Object.create(u.prototype), h.prototype.constructor = u, h.prototype._version = 3, Object.defineProperty(h.prototype, "sources", {
    get: function() {
      for (var g = [], m = 0; m < this._sections.length; m++)
        for (var S = 0; S < this._sections[m].consumer.sources.length; S++)
          g.push(this._sections[m].consumer.sources[S]);
      return g;
    }
  }), h.prototype.originalPositionFor = function(m) {
    var S = {
      generatedLine: t.getArg(m, "line"),
      generatedColumn: t.getArg(m, "column")
    }, v = r.search(
      S,
      this._sections,
      function(d, x) {
        var w = d.generatedLine - x.generatedOffset.generatedLine;
        return w || d.generatedColumn - x.generatedOffset.generatedColumn;
      }
    ), y = this._sections[v];
    return y ? y.consumer.originalPositionFor({
      line: S.generatedLine - (y.generatedOffset.generatedLine - 1),
      column: S.generatedColumn - (y.generatedOffset.generatedLine === S.generatedLine ? y.generatedOffset.generatedColumn - 1 : 0),
      bias: m.bias
    }) : {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, h.prototype.hasContentsOfAllSources = function() {
    return this._sections.every(function(m) {
      return m.consumer.hasContentsOfAllSources();
    });
  }, h.prototype.sourceContentFor = function(m, S) {
    for (var v = 0; v < this._sections.length; v++) {
      var y = this._sections[v], d = y.consumer.sourceContentFor(m, !0);
      if (d)
        return d;
    }
    if (S)
      return null;
    throw new Error('"' + m + '" is not in the SourceMap.');
  }, h.prototype.generatedPositionFor = function(m) {
    for (var S = 0; S < this._sections.length; S++) {
      var v = this._sections[S];
      if (v.consumer._findSourceIndex(t.getArg(m, "source")) !== -1) {
        var y = v.consumer.generatedPositionFor(m);
        if (y) {
          var d = {
            line: y.line + (v.generatedOffset.generatedLine - 1),
            column: y.column + (v.generatedOffset.generatedLine === y.line ? v.generatedOffset.generatedColumn - 1 : 0)
          };
          return d;
        }
      }
    }
    return {
      line: null,
      column: null
    };
  }, h.prototype._parseMappings = function(m, S) {
    this.__generatedMappings = [], this.__originalMappings = [];
    for (var v = 0; v < this._sections.length; v++)
      for (var y = this._sections[v], d = y.consumer._generatedMappings, x = 0; x < d.length; x++) {
        var w = d[x], A = y.consumer._sources.at(w.source);
        A = t.computeSourceURL(y.consumer.sourceRoot, A, this._sourceMapURL), this._sources.add(A), A = this._sources.indexOf(A);
        var C = null;
        w.name && (C = y.consumer._names.at(w.name), this._names.add(C), C = this._names.indexOf(C));
        var T = {
          source: A,
          generatedLine: w.generatedLine + (y.generatedOffset.generatedLine - 1),
          generatedColumn: w.generatedColumn + (y.generatedOffset.generatedLine === w.generatedLine ? y.generatedOffset.generatedColumn - 1 : 0),
          originalLine: w.originalLine,
          originalColumn: w.originalColumn,
          name: C
        };
        this.__generatedMappings.push(T), typeof T.originalLine == "number" && this.__originalMappings.push(T);
      }
    l(this.__generatedMappings, t.compareByGeneratedPositionsDeflated), l(this.__originalMappings, t.compareByOriginalPositions);
  }, Zs.IndexedSourceMapConsumer = h, Zs;
}
var dd = {}, gy;
function TE() {
  if (gy) return dd;
  gy = 1;
  var t = Y0().SourceMapGenerator, r = oo(), i = /(\r?\n)/, s = 10, l = "$$$isSourceNode$$$";
  function u(f, p, h, g, m) {
    this.children = [], this.sourceContents = {}, this.line = f ?? null, this.column = p ?? null, this.source = h ?? null, this.name = m ?? null, this[l] = !0, g != null && this.add(g);
  }
  return u.fromStringWithSourceMap = function(p, h, g) {
    var m = new u(), S = p.split(i), v = 0, y = function() {
      var C = E(), T = E() || "";
      return C + T;
      function E() {
        return v < S.length ? S[v++] : void 0;
      }
    }, d = 1, x = 0, w = null;
    return h.eachMapping(function(C) {
      if (w !== null)
        if (d < C.generatedLine)
          A(w, y()), d++, x = 0;
        else {
          var T = S[v] || "", E = T.substr(0, C.generatedColumn - x);
          S[v] = T.substr(C.generatedColumn - x), x = C.generatedColumn, A(w, E), w = C;
          return;
        }
      for (; d < C.generatedLine; )
        m.add(y()), d++;
      if (x < C.generatedColumn) {
        var T = S[v] || "";
        m.add(T.substr(0, C.generatedColumn)), S[v] = T.substr(C.generatedColumn), x = C.generatedColumn;
      }
      w = C;
    }, this), v < S.length && (w && A(w, y()), m.add(S.splice(v).join(""))), h.sources.forEach(function(C) {
      var T = h.sourceContentFor(C);
      T != null && (g != null && (C = r.join(g, C)), m.setSourceContent(C, T));
    }), m;
    function A(C, T) {
      if (C === null || C.source === void 0)
        m.add(T);
      else {
        var E = g ? r.join(g, C.source) : C.source;
        m.add(new u(
          C.originalLine,
          C.originalColumn,
          E,
          T,
          C.name
        ));
      }
    }
  }, u.prototype.add = function(p) {
    if (Array.isArray(p))
      p.forEach(function(h) {
        this.add(h);
      }, this);
    else if (p[l] || typeof p == "string")
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
    else if (p[l] || typeof p == "string")
      this.children.unshift(p);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + p
      );
    return this;
  }, u.prototype.walk = function(p) {
    for (var h, g = 0, m = this.children.length; g < m; g++)
      h = this.children[g], h[l] ? h.walk(p) : h !== "" && p(h, {
        source: this.source,
        line: this.line,
        column: this.column,
        name: this.name
      });
  }, u.prototype.join = function(p) {
    var h, g, m = this.children.length;
    if (m > 0) {
      for (h = [], g = 0; g < m - 1; g++)
        h.push(this.children[g]), h.push(p);
      h.push(this.children[g]), this.children = h;
    }
    return this;
  }, u.prototype.replaceRight = function(p, h) {
    var g = this.children[this.children.length - 1];
    return g[l] ? g.replaceRight(p, h) : typeof g == "string" ? this.children[this.children.length - 1] = g.replace(p, h) : this.children.push("".replace(p, h)), this;
  }, u.prototype.setSourceContent = function(p, h) {
    this.sourceContents[r.toSetString(p)] = h;
  }, u.prototype.walkSourceContents = function(p) {
    for (var h = 0, g = this.children.length; h < g; h++)
      this.children[h][l] && this.children[h].walkSourceContents(p);
    for (var m = Object.keys(this.sourceContents), h = 0, g = m.length; h < g; h++)
      p(r.fromSetString(m[h]), this.sourceContents[m[h]]);
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
    }, g = new t(p), m = !1, S = null, v = null, y = null, d = null;
    return this.walk(function(x, w) {
      h.code += x, w.source !== null && w.line !== null && w.column !== null ? ((S !== w.source || v !== w.line || y !== w.column || d !== w.name) && g.addMapping({
        source: w.source,
        original: {
          line: w.line,
          column: w.column
        },
        generated: {
          line: h.line,
          column: h.column
        },
        name: w.name
      }), S = w.source, v = w.line, y = w.column, d = w.name, m = !0) : m && (g.addMapping({
        generated: {
          line: h.line,
          column: h.column
        }
      }), S = null, m = !1);
      for (var A = 0, C = x.length; A < C; A++)
        x.charCodeAt(A) === s ? (h.line++, h.column = 0, A + 1 === C ? (S = null, m = !1) : m && g.addMapping({
          source: w.source,
          original: {
            line: w.line,
            column: w.column
          },
          generated: {
            line: h.line,
            column: h.column
          },
          name: w.name
        })) : h.column++;
    }), this.walkSourceContents(function(x, w) {
      g.setSourceContent(x, w);
    }), { code: h.code, map: g };
  }, dd.SourceNode = u, dd;
}
var vy;
function OE() {
  return vy || (vy = 1, Fs.SourceMapGenerator = Y0().SourceMapGenerator, Fs.SourceMapConsumer = AE().SourceMapConsumer, Fs.SourceNode = TE().SourceNode), Fs;
}
var yy;
function kE() {
  return yy || (yy = 1, (function(t, r) {
    r.__esModule = !0;
    var i = hn(), s = void 0;
    try {
      var l = OE();
      s = l.SourceNode;
    } catch {
    }
    s || (s = function(p, h, g, m) {
      this.src = "", m && this.add(m);
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
        for (var m = [], S = 0, v = p.length; S < v; S++)
          m.push(h.wrap(p[S], g));
        return m;
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
        for (var g = 0, m = this.source.length; g < m; g++)
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
      functionCall: function(h, g, m) {
        return m = this.generateList(m), this.wrap([h, g ? "." + g + "(" : "(", m, ")"]);
      },
      quotedString: function(h) {
        return '"' + (h + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
      },
      objectLiteral: function(h) {
        var g = this, m = [];
        Object.keys(h).forEach(function(v) {
          var y = u(h[v], g);
          y !== "undefined" && m.push([g.quotedString(v), ":", y]);
        });
        var S = this.generateList(m);
        return S.prepend("{"), S.add("}"), S;
      },
      generateList: function(h) {
        for (var g = this.empty(), m = 0, S = h.length; m < S; m++)
          m && g.add(","), g.add(u(h[m], this));
        return g;
      },
      generateArray: function(h) {
        var g = this.generateList(h);
        return g.prepend("["), g.add("]"), g;
      }
    }, r.default = f, t.exports = r.default;
  })(Ql, Ql.exports)), Ql.exports;
}
var by;
function jE() {
  return by || (by = 1, (function(t, r) {
    r.__esModule = !0;
    function i(v) {
      return v && v.__esModule ? v : { default: v };
    }
    var s = Jd(), l = Jn(), u = i(l), f = hn(), p = kE(), h = i(p);
    function g(v) {
      this.value = v;
    }
    function m() {
    }
    m.prototype = {
      // PUBLIC API: You can override these methods in a subclass to provide
      // alternative compiled forms for name lookup and buffering semantics
      nameLookup: function(y, d) {
        return this.internalNameLookup(y, d);
      },
      depthedLookup: function(y) {
        return [this.aliasable("container.lookup"), "(depths, ", JSON.stringify(y), ")"];
      },
      compilerInfo: function() {
        var y = s.COMPILER_REVISION, d = s.REVISION_CHANGES[y];
        return [y, d];
      },
      appendToBuffer: function(y, d, x) {
        return f.isArray(y) || (y = [y]), y = this.source.wrap(y, d), this.environment.isSimple ? ["return ", y, ";"] : x ? ["buffer += ", y, ";"] : (y.appendToBuffer = !0, y);
      },
      initializeBuffer: function() {
        return this.quotedString("");
      },
      // END PUBLIC API
      internalNameLookup: function(y, d) {
        return this.lookupPropertyFunctionIsUsed = !0, ["lookupProperty(", y, ",", JSON.stringify(d), ")"];
      },
      lookupPropertyFunctionIsUsed: !1,
      compile: function(y, d, x, w) {
        this.environment = y, this.options = d, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !w, this.name = this.environment.name, this.isChild = !!x, this.context = x || {
          decorators: [],
          programs: [],
          environments: []
        }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = { list: [] }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(y, d), this.useDepths = this.useDepths || y.useDepths || y.useDecorators || this.options.compat, this.useBlockParams = this.useBlockParams || y.useBlockParams;
        var A = y.opcodes, C = void 0, T = void 0, E = void 0, O = void 0;
        for (E = 0, O = A.length; E < O; E++)
          C = A[E], this.source.currentLocation = C.loc, T = T || C.loc, this[C.opcode].apply(this, C.args);
        if (this.source.currentLocation = T, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length)
          throw new u.default("Compile completed with content left on stack");
        this.decorators.isEmpty() ? this.decorators = void 0 : (this.useDecorators = !0, this.decorators.prepend(["var decorators = container.decorators, ", this.lookupPropertyFunctionVarDeclaration(), `;
`]), this.decorators.push("return fn;"), w ? this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]) : (this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`), this.decorators.push(`}
`), this.decorators = this.decorators.merge()));
        var j = this.createFunctionContext(w);
        if (this.isChild)
          return j;
        var R = {
          compiler: this.compilerInfo(),
          main: j
        };
        this.decorators && (R.main_d = this.decorators, R.useDecorators = !0);
        var H = this.context, Q = H.programs, B = H.decorators;
        for (E = 0, O = Q.length; E < O; E++)
          Q[E] && (R[E] = Q[E], B[E] && (R[E + "_d"] = B[E], R.useDecorators = !0));
        return this.environment.usePartial && (R.usePartial = !0), this.options.data && (R.useData = !0), this.useDepths && (R.useDepths = !0), this.useBlockParams && (R.useBlockParams = !0), this.options.compat && (R.compat = !0), w ? R.compilerOptions = this.options : (R.compiler = JSON.stringify(R.compiler), this.source.currentLocation = { start: { line: 1, column: 0 } }, R = this.objectLiteral(R), d.srcName ? (R = R.toStringWithSourceMap({ file: d.destName }), R.map = R.map && R.map.toString()) : R = R.toString()), R;
      },
      preamble: function() {
        this.lastContext = 0, this.source = new h.default(this.options.srcName), this.decorators = new h.default(this.options.srcName);
      },
      createFunctionContext: function(y) {
        var d = this, x = "", w = this.stackVars.concat(this.registers.list);
        w.length > 0 && (x += ", " + w.join(", "));
        var A = 0;
        Object.keys(this.aliases).forEach(function(E) {
          var O = d.aliases[E];
          O.children && O.referenceCount > 1 && (x += ", alias" + ++A + "=" + E, O.children[0] = "alias" + A);
        }), this.lookupPropertyFunctionIsUsed && (x += ", " + this.lookupPropertyFunctionVarDeclaration());
        var C = ["container", "depth0", "helpers", "partials", "data"];
        (this.useBlockParams || this.useDepths) && C.push("blockParams"), this.useDepths && C.push("depths");
        var T = this.mergeSource(x);
        return y ? (C.push(T), Function.apply(this, C)) : this.source.wrap(["function(", C.join(","), `) {
  `, T, "}"]);
      },
      mergeSource: function(y) {
        var d = this.environment.isSimple, x = !this.forceBuffer, w = void 0, A = void 0, C = void 0, T = void 0;
        return this.source.each(function(E) {
          E.appendToBuffer ? (C ? E.prepend("  + ") : C = E, T = E) : (C && (A ? C.prepend("buffer += ") : w = !0, T.add(";"), C = T = void 0), A = !0, d || (x = !1));
        }), x ? C ? (C.prepend("return "), T.add(";")) : A || this.source.push('return "";') : (y += ", buffer = " + (w ? "" : this.initializeBuffer()), C ? (C.prepend("return buffer + "), T.add(";")) : this.source.push("return buffer;")), y && this.source.prepend("var " + y.substring(2) + (w ? "" : `;
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
      blockValue: function(y) {
        var d = this.aliasable("container.hooks.blockHelperMissing"), x = [this.contextName(0)];
        this.setupHelperArgs(y, 0, x);
        var w = this.popStack();
        x.splice(1, 0, w), this.push(this.source.functionCall(d, "call", x));
      },
      // [ambiguousBlockValue]
      //
      // On stack, before: hash, inverse, program, value
      // Compiler value, before: lastHelper=value of last found helper, if any
      // On stack, after, if no lastHelper: same as [blockValue]
      // On stack, after, if lastHelper: value
      ambiguousBlockValue: function() {
        var y = this.aliasable("container.hooks.blockHelperMissing"), d = [this.contextName(0)];
        this.setupHelperArgs("", 0, d, !0), this.flushInline();
        var x = this.topStack();
        d.splice(1, 0, x), this.pushSource(["if (!", this.lastHelper, ") { ", x, " = ", this.source.functionCall(y, "call", d), "}"]);
      },
      // [appendContent]
      //
      // On stack, before: ...
      // On stack, after: ...
      //
      // Appends the string value of `content` to the current buffer
      appendContent: function(y) {
        this.pendingContent ? y = this.pendingContent + y : this.pendingLocation = this.source.currentLocation, this.pendingContent = y;
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
          var y = this.popStack();
          this.pushSource(["if (", y, " != null) { ", this.appendToBuffer(y, void 0, !0), " }"]), this.environment.isSimple && this.pushSource(["else { ", this.appendToBuffer("''", void 0, !0), " }"]);
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
      getContext: function(y) {
        this.lastContext = y;
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
      lookupOnContext: function(y, d, x, w) {
        var A = 0;
        !w && this.options.compat && !this.lastContext ? this.push(this.depthedLookup(y[A++])) : this.pushContext(), this.resolvePath("context", y, A, d, x);
      },
      // [lookupBlockParam]
      //
      // On stack, before: ...
      // On stack, after: blockParam[name], ...
      //
      // Looks up the value of `parts` on the given block param and pushes
      // it onto the stack.
      lookupBlockParam: function(y, d) {
        this.useBlockParams = !0, this.push(["blockParams[", y[0], "][", y[1], "]"]), this.resolvePath("context", d, 1);
      },
      // [lookupData]
      //
      // On stack, before: ...
      // On stack, after: data, ...
      //
      // Push the data lookup operator
      lookupData: function(y, d, x) {
        y ? this.pushStackLiteral("container.data(data, " + y + ")") : this.pushStackLiteral("data"), this.resolvePath("data", d, 0, !0, x);
      },
      resolvePath: function(y, d, x, w, A) {
        var C = this;
        if (this.options.strict || this.options.assumeObjects) {
          this.push(S(this.options.strict && A, this, d, x, y));
          return;
        }
        for (var T = d.length; x < T; x++)
          this.replaceStack(function(E) {
            var O = C.nameLookup(E, d[x], y);
            return w ? [" && ", O] : [" != null ? ", O, " : ", E];
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
      pushStringParam: function(y, d) {
        this.pushContext(), this.pushString(d), d !== "SubExpression" && (typeof y == "string" ? this.pushString(y) : this.pushStackLiteral(y));
      },
      emptyHash: function(y) {
        this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}")), this.pushStackLiteral(y ? "undefined" : "{}");
      },
      pushHash: function() {
        this.hash && this.hashes.push(this.hash), this.hash = { values: {}, types: [], contexts: [], ids: [] };
      },
      popHash: function() {
        var y = this.hash;
        this.hash = this.hashes.pop(), this.trackIds && this.push(this.objectLiteral(y.ids)), this.stringParams && (this.push(this.objectLiteral(y.contexts)), this.push(this.objectLiteral(y.types))), this.push(this.objectLiteral(y.values));
      },
      // [pushString]
      //
      // On stack, before: ...
      // On stack, after: quotedString(string), ...
      //
      // Push a quoted version of `string` onto the stack
      pushString: function(y) {
        this.pushStackLiteral(this.quotedString(y));
      },
      // [pushLiteral]
      //
      // On stack, before: ...
      // On stack, after: value, ...
      //
      // Pushes a value onto the stack. This operation prevents
      // the compiler from creating a temporary variable to hold
      // it.
      pushLiteral: function(y) {
        this.pushStackLiteral(y);
      },
      // [pushProgram]
      //
      // On stack, before: ...
      // On stack, after: program(guid), ...
      //
      // Push a program expression onto the stack. This takes
      // a compile-time guid and converts it into a runtime-accessible
      // expression.
      pushProgram: function(y) {
        y != null ? this.pushStackLiteral(this.programExpression(y)) : this.pushStackLiteral(null);
      },
      // [registerDecorator]
      //
      // On stack, before: hash, program, params..., ...
      // On stack, after: ...
      //
      // Pops off the decorator's parameters, invokes the decorator,
      // and inserts the decorator into the decorators list.
      registerDecorator: function(y, d) {
        var x = this.nameLookup("decorators", d, "decorator"), w = this.setupHelperArgs(d, y);
        this.decorators.push(["fn = ", this.decorators.functionCall(x, "", ["fn", "props", "container", w]), " || fn;"]);
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
      invokeHelper: function(y, d, x) {
        var w = this.popStack(), A = this.setupHelper(y, d), C = [];
        x && C.push(A.name), C.push(w), this.options.strict || C.push(this.aliasable("container.hooks.helperMissing"));
        var T = ["(", this.itemsSeparatedBy(C, "||"), ")"], E = this.source.functionCall(T, "call", A.callParams);
        this.push(E);
      },
      itemsSeparatedBy: function(y, d) {
        var x = [];
        x.push(y[0]);
        for (var w = 1; w < y.length; w++)
          x.push(d, y[w]);
        return x;
      },
      // [invokeKnownHelper]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of helper invocation
      //
      // This operation is used when the helper is known to exist,
      // so a `helperMissing` fallback is not required.
      invokeKnownHelper: function(y, d) {
        var x = this.setupHelper(y, d);
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
      invokeAmbiguous: function(y, d) {
        this.useRegister("helper");
        var x = this.popStack();
        this.emptyHash();
        var w = this.setupHelper(0, y, d), A = this.lastHelper = this.nameLookup("helpers", y, "helper"), C = ["(", "(helper = ", A, " || ", x, ")"];
        this.options.strict || (C[0] = "(helper = ", C.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"))), this.push(["(", C, w.paramsInit ? ["),(", w.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", w.callParams), " : helper))"]);
      },
      // [invokePartial]
      //
      // On stack, before: context, ...
      // On stack after: result of partial invocation
      //
      // This operation pops off a context, invokes a partial with that context,
      // and pushes the result of the invocation back.
      invokePartial: function(y, d, x) {
        var w = [], A = this.setupParams(d, 1, w);
        y && (d = this.popStack(), delete A.name), x && (A.indent = JSON.stringify(x)), A.helpers = "helpers", A.partials = "partials", A.decorators = "container.decorators", y ? w.unshift(d) : w.unshift(this.nameLookup("partials", d, "partial")), this.options.compat && (A.depths = "depths"), A = this.objectLiteral(A), w.push(A), this.push(this.source.functionCall("container.invokePartial", "", w));
      },
      // [assignToHash]
      //
      // On stack, before: value, ..., hash, ...
      // On stack, after: ..., hash, ...
      //
      // Pops a value off the stack and assigns it to the current hash
      assignToHash: function(y) {
        var d = this.popStack(), x = void 0, w = void 0, A = void 0;
        this.trackIds && (A = this.popStack()), this.stringParams && (w = this.popStack(), x = this.popStack());
        var C = this.hash;
        x && (C.contexts[y] = x), w && (C.types[y] = w), A && (C.ids[y] = A), C.values[y] = d;
      },
      pushId: function(y, d, x) {
        y === "BlockParam" ? this.pushStackLiteral("blockParams[" + d[0] + "].path[" + d[1] + "]" + (x ? " + " + JSON.stringify("." + x) : "")) : y === "PathExpression" ? this.pushString(d) : y === "SubExpression" ? this.pushStackLiteral("true") : this.pushStackLiteral("null");
      },
      // HELPERS
      compiler: m,
      compileChildren: function(y, d) {
        for (var x = y.children, w = void 0, A = void 0, C = 0, T = x.length; C < T; C++) {
          w = x[C], A = new this.compiler();
          var E = this.matchExistingProgram(w);
          if (E == null) {
            this.context.programs.push("");
            var O = this.context.programs.length;
            w.index = O, w.name = "program" + O, this.context.programs[O] = A.compile(w, d, this.context, !this.precompile), this.context.decorators[O] = A.decorators, this.context.environments[O] = w, this.useDepths = this.useDepths || A.useDepths, this.useBlockParams = this.useBlockParams || A.useBlockParams, w.useDepths = this.useDepths, w.useBlockParams = this.useBlockParams;
          } else
            w.index = E.index, w.name = "program" + E.index, this.useDepths = this.useDepths || E.useDepths, this.useBlockParams = this.useBlockParams || E.useBlockParams;
        }
      },
      matchExistingProgram: function(y) {
        for (var d = 0, x = this.context.environments.length; d < x; d++) {
          var w = this.context.environments[d];
          if (w && w.equals(y))
            return w;
        }
      },
      programExpression: function(y) {
        var d = this.environment.children[y], x = [d.index, "data", d.blockParams];
        return (this.useBlockParams || this.useDepths) && x.push("blockParams"), this.useDepths && x.push("depths"), "container.program(" + x.join(", ") + ")";
      },
      useRegister: function(y) {
        this.registers[y] || (this.registers[y] = !0, this.registers.list.push(y));
      },
      push: function(y) {
        return y instanceof g || (y = this.source.wrap(y)), this.inlineStack.push(y), y;
      },
      pushStackLiteral: function(y) {
        this.push(new g(y));
      },
      pushSource: function(y) {
        this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), this.pendingContent = void 0), y && this.source.push(y);
      },
      replaceStack: function(y) {
        var d = ["("], x = void 0, w = void 0, A = void 0;
        if (!this.isInline())
          throw new u.default("replaceStack on non-inline");
        var C = this.popStack(!0);
        if (C instanceof g)
          x = [C.value], d = ["(", x], A = !0;
        else {
          w = !0;
          var T = this.incrStack();
          d = ["((", this.push(T), " = ", C, ")"], x = this.topStack();
        }
        var E = y.call(this, x);
        A || this.popStack(), w && this.stackSlot--, this.push(d.concat(E, ")"));
      },
      incrStack: function() {
        return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName();
      },
      topStackName: function() {
        return "stack" + this.stackSlot;
      },
      flushInline: function() {
        var y = this.inlineStack;
        this.inlineStack = [];
        for (var d = 0, x = y.length; d < x; d++) {
          var w = y[d];
          if (w instanceof g)
            this.compileStack.push(w);
          else {
            var A = this.incrStack();
            this.pushSource([A, " = ", w, ";"]), this.compileStack.push(A);
          }
        }
      },
      isInline: function() {
        return this.inlineStack.length;
      },
      popStack: function(y) {
        var d = this.isInline(), x = (d ? this.inlineStack : this.compileStack).pop();
        if (!y && x instanceof g)
          return x.value;
        if (!d) {
          if (!this.stackSlot)
            throw new u.default("Invalid stack pop");
          this.stackSlot--;
        }
        return x;
      },
      topStack: function() {
        var y = this.isInline() ? this.inlineStack : this.compileStack, d = y[y.length - 1];
        return d instanceof g ? d.value : d;
      },
      contextName: function(y) {
        return this.useDepths && y ? "depths[" + y + "]" : "depth" + y;
      },
      quotedString: function(y) {
        return this.source.quotedString(y);
      },
      objectLiteral: function(y) {
        return this.source.objectLiteral(y);
      },
      aliasable: function(y) {
        var d = this.aliases[y];
        return d ? (d.referenceCount++, d) : (d = this.aliases[y] = this.source.wrap(y), d.aliasable = !0, d.referenceCount = 1, d);
      },
      setupHelper: function(y, d, x) {
        var w = [], A = this.setupHelperArgs(d, y, w, x), C = this.nameLookup("helpers", d, "helper"), T = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
        return {
          params: w,
          paramsInit: A,
          name: C,
          callParams: [T].concat(w)
        };
      },
      setupParams: function(y, d, x) {
        var w = {}, A = [], C = [], T = [], E = !x, O = void 0;
        E && (x = []), w.name = this.quotedString(y), w.hash = this.popStack(), this.trackIds && (w.hashIds = this.popStack()), this.stringParams && (w.hashTypes = this.popStack(), w.hashContexts = this.popStack());
        var j = this.popStack(), R = this.popStack();
        (R || j) && (w.fn = R || "container.noop", w.inverse = j || "container.noop");
        for (var H = d; H--; )
          O = this.popStack(), x[H] = O, this.trackIds && (T[H] = this.popStack()), this.stringParams && (C[H] = this.popStack(), A[H] = this.popStack());
        return E && (w.args = this.source.generateArray(x)), this.trackIds && (w.ids = this.source.generateArray(T)), this.stringParams && (w.types = this.source.generateArray(C), w.contexts = this.source.generateArray(A)), this.options.data && (w.data = "data"), this.useBlockParams && (w.blockParams = "blockParams"), w;
      },
      setupHelperArgs: function(y, d, x, w) {
        var A = this.setupParams(y, d, x);
        return A.loc = JSON.stringify(this.source.currentLocation), A = this.objectLiteral(A), w ? (this.useRegister("options"), x.push("options"), ["options=", A]) : x ? (x.push(A), "") : A;
      }
    }, (function() {
      for (var v = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), y = m.RESERVED_WORDS = {}, d = 0, x = v.length; d < x; d++)
        y[v[d]] = !0;
    })(), m.isValidJavaScriptVariableName = function(v) {
      return !m.RESERVED_WORDS[v] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(v);
    };
    function S(v, y, d, x, w) {
      var A = y.popStack(), C = d.length;
      for (v && C--; x < C; x++)
        A = y.nameLookup(A, d[x], w);
      return v ? [y.aliasable("container.strict"), "(", A, ", ", y.quotedString(d[x]), ", ", JSON.stringify(y.source.currentLocation), " )"] : A;
    }
    r.default = m, t.exports = r.default;
  })(Xl, Xl.exports)), Xl.exports;
}
var _y;
function ME() {
  return _y || (_y = 1, (function(t, r) {
    r.__esModule = !0;
    function i(C) {
      return C && C.__esModule ? C : { default: C };
    }
    var s = vE(), l = i(s), u = F0(), f = i(u), p = SE(), h = xE(), g = jE(), m = i(g), S = Z0(), v = i(S), y = q0(), d = i(y), x = l.default.create;
    function w() {
      var C = x();
      return C.compile = function(T, E) {
        return h.compile(T, E, C);
      }, C.precompile = function(T, E) {
        return h.precompile(T, E, C);
      }, C.AST = f.default, C.Compiler = h.Compiler, C.JavaScriptCompiler = m.default, C.Parser = p.parser, C.parse = p.parse, C.parseWithoutProcessing = p.parseWithoutProcessing, C;
    }
    var A = w();
    A.create = w, d.default(A), A.Visitor = v.default, A.default = A, r.default = A, t.exports = r.default;
  })(Tl, Tl.exports)), Tl.exports;
}
var Ft = ME();
const DE = /* @__PURE__ */ Fd(Ft), Cu = /* @__PURE__ */ l2({
  __proto__: null,
  default: DE
}, [Ft]), rr = SillyTavern.getContext(), dn = [
  "name",
  "description",
  "personality",
  "scenario",
  "first_mes",
  "mes_example"
], Xn = {
  name: "Name",
  description: "Description",
  personality: "Personality",
  scenario: "Scenario",
  first_mes: "First Message",
  mes_example: "Example Dialogue"
};
new i0("dumb", {}).getSettings();
async function RE({
  profileId: t,
  userPrompt: r,
  buildPromptOptions: i,
  continueFrom: s,
  session: l,
  allCharacters: u,
  entriesGroupByWorldName: f,
  promptSettings: p,
  formatDescription: h,
  mainContextList: g,
  includeUserMacro: m,
  maxResponseToken: S,
  targetField: v,
  outputFormat: y
}) {
  if (!t)
    throw new Error("No connection profile selected.");
  const d = rr.extensionSettings.connectionManager?.profiles?.find((j) => j.id === t);
  if (!d)
    throw new Error(`Connection profile with ID "${t}" not found.`);
  const x = d.api ? rr.CONNECT_API_MAP[d.api].selected : void 0;
  if (!x)
    throw new Error(`Could not determine API for profile "${d.name}".`);
  const w = {};
  w.char = l.fields.name.value ?? "{{char}}", w.user = m && wr ? wr : "{{user}}", w.persona = "{{persona}}", w.targetField = v, w.userInstructions = Ft.compile(r.trim(), { noEscape: !0 })(w), w.fieldSpecificInstructions = Ft.compile(
    l.draftFields[v]?.prompt ?? l.fields[v]?.prompt,
    { noEscape: !0 }
  )({
    ...w,
    char: v === "mes_example" ? "{{char}}" : w.char,
    user: v === "mes_example" ? "{{user}}" : w.user
  }), w.activeFormatInstructions = Ft.compile(h.content, { noEscape: !0 })(
    w
  );
  {
    const j = [];
    l.selectedCharacterIndexes.forEach((R) => {
      const H = parseInt(R), Q = u[H];
      Q && j.push(Q);
    }), w.characters = j;
  }
  {
    const j = {};
    Object.entries(f).filter(
      ([R, H]) => H.length > 0 && l.selectedWorldNames.includes(R) && H.some((Q) => !Q.disable)
    ).forEach(([R, H]) => {
      j[R] = H.filter((Q) => !Q.disable);
    }), w.lorebooks = j;
  }
  {
    const j = {}, R = {}, H = {}, Q = v.startsWith("alternate_greetings_"), B = St.getSettings().contextToSend.dontSendOtherGreetings;
    Object.entries(l.fields).forEach(([$, F]) => {
      let te = !1;
      if (B) {
        const W = $.startsWith("alternate_greetings_");
        Q ? te = W && $ !== v || $ === "first_mes" : te = W;
      }
      if (!te) {
        const W = Ft.compile(F.value, { noEscape: !0 })({
          ...w,
          char: $ === "mes_example" ? "{{char}}" : w.char,
          user: $ === "mes_example" ? "{{user}}" : w.user
        });
        dn.includes($) ? j[F.label] = W : $.startsWith("alternate_greetings_") && (R[$] = W);
      }
    }), Object.entries(l.draftFields || {}).forEach(([$, F]) => {
      H[F.label] = Ft.compile(F.value, { noEscape: !0 })(w);
    });
    const V = {};
    Object.keys(j).length > 0 && (V.core = j), Object.keys(R).length > 0 && (V.alternate_greetings = R), Object.keys(H).length > 0 && (V.draft = H), w.fields = V;
  }
  const A = [];
  {
    for (const j of g) {
      if (j.promptName === "chatHistory") {
        const B = await m0(x, i);
        if (B.warnings && B.warnings.length > 0)
          for (const V of B.warnings)
            xe("warning", V);
        A.push(...B.result);
        continue;
      }
      let R = structuredClone(w);
      j.promptName === "stDescription" && (R.char = "{{char}}", R.user = "{{user}}");
      const H = p[j.promptName];
      if (!H)
        continue;
      const Q = {
        role: j.role,
        content: Ft.compile(H.content, { noEscape: !0 })(R)
      };
      Q.content = Q.content.replaceAll("{{user}}", "[[[crec_veryUniqueUserPlaceHolder]]]"), Q.content = Q.content.replaceAll("{{char}}", "[[[crec_veryUniqueCharPlaceHolder]]]"), Q.content = rr.substituteParams(Q.content), Q.content = Q.content.replaceAll("[[[crec_veryUniqueUserPlaceHolder]]]", "{{user}}"), Q.content = Q.content.replaceAll("[[[crec_veryUniqueCharPlaceHolder]]]", "{{char}}"), Q.content && A.push(Q);
    }
    s && A.push({
      role: "assistant",
      content: Mv(s, y)
    });
  }
  const C = await rr.ConnectionManagerRequestService.sendRequest(
    t,
    A,
    S
  ), T = s ? Mv(s, y) + C.content : C.content, E = P0(T, y);
  let O;
  if (typeof E == "string")
    O = E;
  else if (typeof E == "object" && E !== null)
    if ("response" in E && typeof E.response == "string")
      O = E.response;
    else {
      const j = Object.values(E)[0];
      O = j ? String(j) : "";
    }
  else
    O = "";
  return O;
}
const Ma = "SillyTavern-Character-Creator", $0 = "0.3.0", zE = "F_1.10", LE = {
  EXTENSION: "charCreator"
}, lt = {
  stDescription: Od,
  charDefinitions: k0,
  lorebookDefinitions: M0,
  xmlFormat: ex,
  jsonFormat: tx,
  noneFormat: nx,
  worldInfoCharDefinition: rx,
  personaDescription: ax,
  reviseJsonPrompt: ix,
  reviseXmlPrompt: sx,
  reviseTaskDescription: ox
}, IE = {
  version: $0,
  formatVersion: zE,
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
      content: lt.stDescription,
      isDefault: !0,
      label: "ST/Char Card Description"
    },
    charDefinitions: {
      content: lt.charDefinitions,
      isDefault: !0,
      label: "Character Definition Template"
    },
    lorebookDefinitions: {
      content: lt.lorebookDefinitions,
      isDefault: !0,
      label: "Lorebook Definition Template"
    },
    xmlFormat: {
      content: lt.xmlFormat,
      isDefault: !0,
      label: "XML Format Description"
    },
    jsonFormat: {
      content: lt.jsonFormat,
      isDefault: !0,
      label: "JSON Format Description"
    },
    noneFormat: {
      content: lt.noneFormat,
      isDefault: !0,
      label: "Plain Text Format Description"
    },
    worldInfoCharDefinition: {
      content: lt.worldInfoCharDefinition,
      isDefault: !0,
      label: "World Info Character Definition Template"
    },
    existingFieldDefinitions: {
      content: uu,
      isDefault: !0,
      label: "Existing Fields Definition Template"
    },
    taskDescription: {
      content: D0,
      isDefault: !0,
      label: "Task Description Template"
    },
    outputFormatInstructions: {
      content: j0,
      isDefault: !0,
      label: "Output Format Instructions"
    },
    personaDescription: {
      content: lt.personaDescription,
      isDefault: !0,
      label: "User Persona Description Template"
    },
    reviseJsonPrompt: {
      content: lt.reviseJsonPrompt,
      isDefault: !0,
      label: "Revise Session (JSON Mode)"
    },
    reviseXmlPrompt: {
      content: lt.reviseXmlPrompt,
      isDefault: !0,
      label: "Revise Session (XML Mode)"
    },
    reviseTaskDescription: {
      content: lt.reviseTaskDescription,
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
  },
  preferredTokenizer: 13,
  // Default to Gemma
  soundNotifications: {
    enabled: !0,
    volume: 0.5
  }
};
function PE(t) {
  const i = t.replace(/[^\w\s]/g, "").split(/\s+/).filter(Boolean);
  let s = !1;
  return i.map((l, u) => {
    const f = l.replace(/^\d+/, "");
    if (f) {
      const p = s ? `${f[0].toUpperCase()}${f.slice(1).toLowerCase()}` : f.toLowerCase();
      return s || (s = !0), p;
    }
    return "";
  }).join("");
}
const St = new i0(LE.EXTENSION, IE);
async function BE() {
  return new Promise((t, r) => {
    St.initializeSettings({
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
                  content: lt.stDescription,
                  isDefault: !0,
                  label: "ST/Char Card Description"
                },
                charDefinitions: {
                  content: lt.charDefinitions,
                  isDefault: !0,
                  label: "Character Definition Template"
                },
                lorebookDefinitions: {
                  content: lt.lorebookDefinitions,
                  isDefault: !0,
                  label: "Lorebook Definition Template"
                },
                xmlFormat: {
                  content: lt.xmlFormat,
                  isDefault: !0,
                  label: "XML Format Description"
                },
                jsonFormat: {
                  content: lt.jsonFormat,
                  isDefault: !0,
                  label: "JSON Format Description"
                },
                noneFormat: {
                  content: lt.noneFormat,
                  isDefault: !0,
                  label: "Plain Text Format Description"
                },
                worldInfoCharDefinition: {
                  content: lt.worldInfoCharDefinition,
                  isDefault: !0,
                  label: "World Info Character Definition Template"
                },
                existingFieldDefinitions: {
                  content: uu,
                  isDefault: !0,
                  label: "Existing Fields Definition Template"
                },
                taskDescription: {
                  content: D0,
                  isDefault: !0,
                  label: "Task Description Template"
                },
                outputFormatInstructions: {
                  content: j0,
                  isDefault: !0,
                  label: "Output Format Instructions"
                },
                personaDescription: {
                  content: lt.personaDescription,
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
                  content: lt.personaDescription,
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
            return await xe("info", `[${Ma}] Added Alternate Greetings.`), {
              ...i,
              prompts: {
                ...i?.prompts,
                stDescription: {
                  content: lt.stDescription,
                  isDefault: !0,
                  label: "ST/Char Card Description"
                },
                charDefinitions: {
                  content: lt.charDefinitions,
                  isDefault: !0,
                  label: "Character Definition Template"
                },
                worldInfoCharDefinition: {
                  content: lt.worldInfoCharDefinition,
                  isDefault: !0,
                  label: "World Info Character Definition Template"
                },
                existingFieldDefinitions: {
                  content: uu,
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
            return i.prompts.stDescription.isDefault && (s.prompts.stDescription.content = Od), s;
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
              content: lt.reviseJsonPrompt,
              isDefault: !0,
              label: "Revise Session (JSON Mode)"
            }, s.prompts.reviseXmlPrompt = {
              content: lt.reviseXmlPrompt,
              isDefault: !0,
              label: "Revise Session (XML Mode)"
            }, s.prompts.reviseTaskDescription = {
              content: lt.reviseTaskDescription,
              isDefault: !0,
              label: "Revise Session Task Description"
            }, i.prompts.charDefinitions.isDefault && (s.prompts.charDefinitions.content = k0), i.prompts.lorebookDefinitions.isDefault && (s.prompts.lorebookDefinitions.content = M0), i.prompts.existingFieldDefinitions.isDefault && (s.prompts.existingFieldDefinitions.content = uu), s;
          }
        },
        {
          from: "F_1.8",
          to: "F_1.9",
          action(i) {
            const s = {
              ...i
            };
            return i.prompts.stDescription.isDefault && (s.prompts.stDescription.content = Od), s;
          }
        }
      ]
    }).then((i) => {
      t();
    }).catch((i) => {
      console.error(`[${Ma}] Error initializing settings:`, i), xe("error", `[${Ma}] Failed to initialize settings: ${i.message}`), rr.Popup.show.confirm(
        `[${Ma}] Failed to load settings. This might be due to an update. Reset settings to default?`,
        "Extension Error"
      ).then((s) => {
        s && (St.resetSettings(), xe("success", `[${Ma}] Settings reset. Reloading may be required.`), t());
      });
    });
  });
}
const fe = ({ children: t, className: r, overrideDefaults: i = !1, ...s }) => {
  const l = Y.useMemo(() => {
    const u = [];
    return i || u.push("menu_button", "interactable"), u.push(r), u.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ _.jsx("button", { className: l, ...s, children: t });
}, UE = ({ label: t, className: r, overrideDefaults: i = !1, type: s = "text", ...l }) => {
  const u = Y.useMemo(() => {
    const f = [];
    return i || (s === "text" || s === "number" || s === "password" || s === "email" || s === "search") && f.push("text_pole"), f.push(r), f.filter(Boolean).join(" ");
  }, [i, r, s]);
  if (s === "checkbox") {
    const f = i ? r : `checkbox_label ${r ?? ""}`.trim();
    return /* @__PURE__ */ _.jsxs("label", { className: f, children: [
      /* @__PURE__ */ _.jsx("input", { type: "checkbox", ...l }),
      t && /* @__PURE__ */ _.jsx("span", { children: t })
    ] });
  }
  return /* @__PURE__ */ _.jsx("input", { type: s, className: u, ...l });
}, yu = ({ children: t, className: r, overrideDefaults: i = !1, ...s }) => {
  const l = Y.useMemo(() => {
    const u = [];
    return i || u.push("text_pole"), u.push(r), u.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ _.jsx("select", { className: l, ...s, children: t });
}, en = ({ children: t, className: r, overrideDefaults: i = !1, ...s }) => {
  const l = Y.useMemo(() => {
    const u = [];
    return i || u.push("text_pole", "textarea_compact"), u.push(r), u.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ _.jsx("textarea", { className: l, ...s, children: t });
};
var HE = r0(), An = /* @__PURE__ */ ((t) => (t[t.TEXT = 1] = "TEXT", t[t.CONFIRM = 2] = "CONFIRM", t[t.INPUT = 3] = "INPUT", t[t.DISPLAY = 4] = "DISPLAY", t))(An || {}), ta = /* @__PURE__ */ ((t) => (t[t.AFFIRMATIVE = 1] = "AFFIRMATIVE", t[t.NEGATIVE = 0] = "NEGATIVE", t[t.CANCELLED = null] = "CANCELLED", t))(ta || {});
const qE = SillyTavern.getContext(), Li = ({
  content: t,
  type: r,
  inputValue: i = "",
  options: s = {},
  preventEscape: l = !1,
  onComplete: u
}) => {
  var f;
  const p = Y.useRef(null), h = Y.useRef(null), [g, m] = Y.useState(!1), [S, v] = Y.useState(null), y = Y.useRef(qE.uuidv4()), d = Y.useRef({
    id: y.current,
    type: r,
    dlg: null,
    mainInput: null,
    lastFocus: null,
    value: void 0,
    result: void 0,
    inputResults: void 0
  });
  Y.useEffect(() => {
    const C = p.current;
    if (!C) return;
    const T = (E) => {
      E.preventDefault(), l || x(ta.CANCELLED);
    };
    return C.addEventListener("cancel", T), d.current.dlg = C, d.current.mainInput = h.current, Ci.util.popups.push(d.current), C.showModal || (C.classList.add("poly_dialog"), Wg.registerDialog(C), new ResizeObserver((E) => {
      for (const O of E)
        Wg.reposition(O.target);
    }).observe(C)), C.showModal(), qf(), () => {
      Kg(Ci.util.popups, d.current), qf(), C.removeEventListener("cancel", T);
    };
  }, []);
  const x = async (C) => {
    var T, E;
    let O = C;
    if (r === An.INPUT && (C >= ta.AFFIRMATIVE ? O = (T = h.current) == null ? void 0 : T.value : C === ta.NEGATIVE ? O = !1 : C === ta.CANCELLED ? O = null : O = !1), (E = s.customInputs) != null && E.length) {
      const R = new Map(
        s.customInputs.map((H) => {
          var Q;
          const B = (Q = p.current) == null ? void 0 : Q.querySelector(`#${H.id}`);
          return [B.id, B.checked];
        })
      );
      d.current.inputResults = R;
    }
    if (d.current.result = C, d.current.value = O, s.onClosing && !await s.onClosing(d.current)) {
      m(!0), d.current.value = void 0, d.current.result = void 0, d.current.inputResults = void 0;
      return;
    }
    m(!1), Ci.util.lastResult = {
      value: O,
      result: C,
      inputResults: d.current.inputResults
    };
    const j = p.current;
    j && (j.setAttribute("closing", ""), qf(), o2(j, async () => {
      var R;
      if (j.close(), s.onClose && await s.onClose(d.current), Kg(Ci.util.popups, d.current), Ci.util.popups.length > 0) {
        const H = (R = document.activeElement) == null ? void 0 : R.closest(".popup"), Q = H?.getAttribute("data-id"), B = Ci.util.popups.find((V) => V.id === Q);
        B && B.lastFocus && B.lastFocus.focus();
      }
      u(O);
    }));
  }, w = (C) => {
    C.target instanceof HTMLElement && C.target !== p.current && (v(C.target), d.current.lastFocus = C.target);
  }, A = async (C) => {
  };
  return HE.createPortal(
    /* @__PURE__ */ _.jsx(
      "dialog",
      {
        ref: p,
        className: (() => {
          const C = ["popup"];
          return s.wide && C.push("wide_dialogue_popup"), s.wider && C.push("wider_dialogue_popup"), s.large && C.push("large_dialogue_popup"), s.transparent && C.push("transparent_dialogue_popup"), s.allowHorizontalScrolling && C.push("horizontal_scrolling_dialogue_popup"), s.allowVerticalScrolling && C.push("vertical_scrolling_dialogue_popup"), s.animation && C.push(`popup--animation-${s.animation}`), C.join(" ");
        })(),
        "data-id": y.current,
        onKeyDown: A,
        onFocus: w,
        children: /* @__PURE__ */ _.jsxs("div", { className: "popup-body", children: [
          /* @__PURE__ */ _.jsx("div", { className: "popup-content", children: t }),
          r === An.INPUT && /* @__PURE__ */ _.jsx(
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
          s.customInputs && /* @__PURE__ */ _.jsx("div", { className: "popup-inputs", children: s.customInputs.map((C) => /* @__PURE__ */ _.jsxs("label", { className: "checkbox_label justifyCenter", htmlFor: C.id, children: [
            /* @__PURE__ */ _.jsx("input", { type: "checkbox", id: C.id, defaultChecked: C.defaultState }),
            /* @__PURE__ */ _.jsx("span", { "data-i18n": C.label, children: C.label }),
            C.tooltip && /* @__PURE__ */ _.jsx(
              "div",
              {
                className: "fa-solid fa-circle-info opacity50p",
                title: C.tooltip,
                "data-i18n": `[title]${C.tooltip}`
              }
            )
          ] }, C.id)) }),
          r !== An.DISPLAY && /* @__PURE__ */ _.jsxs("div", { className: "popup-controls", children: [
            (f = s.customButtons) == null ? void 0 : f.map((C, T) => {
              const E = typeof C == "string" ? { text: C, result: T + 2 } : C;
              return /* @__PURE__ */ _.jsx(
                "div",
                {
                  className: `menu_button popup-button-custom result-control ${E.classes ?? ""}`,
                  "data-result": E.result,
                  onClick: () => {
                    var O;
                    (O = E.action) == null || O.call(E), x(E.result ?? T + 2);
                  },
                  "data-i18n": E.text,
                  children: E.text
                },
                T
              );
            }),
            r !== An.DISPLAY && s.okButton !== !1 && /* @__PURE__ */ _.jsx(
              "div",
              {
                className: "popup-button-ok menu_button result-control",
                onClick: () => x(ta.AFFIRMATIVE),
                "data-result": "1",
                children: typeof s.okButton == "string" ? s.okButton : "OK"
              }
            ),
            r !== An.DISPLAY && s.cancelButton !== !1 && /* @__PURE__ */ _.jsx(
              "div",
              {
                className: "popup-button-cancel menu_button result-control",
                onClick: () => x(ta.NEGATIVE),
                "data-result": "0",
                children: typeof s.cancelButton == "string" ? s.cancelButton : "Cancel"
              }
            )
          ] }),
          r === An.DISPLAY && /* @__PURE__ */ _.jsx(
            "div",
            {
              className: "popup-button-close right_menu_button fa-solid fa-circle-xmark",
              onClick: () => x(ta.CANCELLED),
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
}, Gs = (t, r, i) => {
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
}, Er = SillyTavern.getContext(), X0 = ({
  initialSelectedProfileId: t,
  allowedTypes: r = { openai: "Chat Completion", textgenerationwebui: "Text Completion" },
  placeholder: i = "Select a Connection Profile",
  onChange: s,
  onCreate: l,
  onUpdate: u,
  onDelete: f
}) => {
  const [p, h] = Y.useState(t ?? ""), [g, m] = Y.useState(Date.now()), { isEnabled: S, profiles: v, connectApiMap: y } = Y.useMemo(() => {
    var w, A;
    return (w = Er.extensionSettings.disabledExtensions) != null && w.includes("connection-manager") ? (console.error("Connection Manager extension is disabled."), { isEnabled: !1, profiles: [], connectApiMap: {} }) : {
      isEnabled: !0,
      profiles: ((A = Er.extensionSettings.connectionManager) == null ? void 0 : A.profiles) ?? [],
      connectApiMap: Er.CONNECT_API_MAP
    };
  }, [g]);
  Y.useEffect(() => {
    if (!S) return;
    const w = (T) => {
      Gs(T, r, y) && (m(Date.now()), l?.(T));
    }, A = (T, E) => {
      const O = Gs(T, r, y), j = Gs(E, r, y);
      (O || j) && m(Date.now()), u?.(T, E), p === T.id && !j && (h(""), s?.(void 0));
    }, C = (T) => {
      Gs(T, r, y) && (m(Date.now()), f?.(T), p === T.id && (h(""), s?.(void 0)));
    };
    return Er.eventSource.on("CONNECTION_PROFILE_CREATED", w), Er.eventSource.on("CONNECTION_PROFILE_UPDATED", A), Er.eventSource.on("CONNECTION_PROFILE_DELETED", C), () => {
      Er.eventSource.removeListener("CONNECTION_PROFILE_CREATED", w), Er.eventSource.removeListener("CONNECTION_PROFILE_UPDATED", A), Er.eventSource.removeListener("CONNECTION_PROFILE_DELETED", C);
    };
  }, [S, p, r, y, s, l, u, f]);
  const d = Y.useMemo(() => {
    if (!S) return [];
    const w = v.filter((C) => Gs(C, r, y)), A = {};
    for (const [C, T] of Object.entries(r))
      A[C] = { label: T, profiles: [] };
    for (const C of w) {
      const T = y[C.api];
      A[T.selected] && A[T.selected].profiles.push(C);
    }
    for (const C of Object.values(A))
      C.profiles.sort((T, E) => (T.name ?? "").localeCompare(E.name ?? ""));
    return Object.values(A).filter((C) => C.profiles.length > 0);
  }, [S, v, r, y]), x = Y.useCallback(
    (w) => {
      const A = w.target.value;
      h(A);
      const C = v.find((T) => T.id === A);
      s?.(C);
    },
    [v, s]
  );
  return S ? /* @__PURE__ */ _.jsxs(yu, { value: p, onChange: x, children: [
    /* @__PURE__ */ _.jsx("option", { value: "", children: i }),
    d.map((w) => /* @__PURE__ */ _.jsx("optgroup", { label: w.label, children: w.profiles.map((A) => /* @__PURE__ */ _.jsx("option", { value: A.id, children: A.name }, A.id)) }, w.label))
  ] }) : /* @__PURE__ */ _.jsx(yu, { disabled: !0, value: "", children: /* @__PURE__ */ _.jsx("option", { children: "Connection Manager disabled" }) });
};
cu.memo(
  ({ item: t, showToggleButton: r, showDeleteButton: i, showSelectInput: s, onToggle: l, onDelete: u, onSelectChange: f }) => {
    const {
      id: p,
      label: h,
      enabled: g,
      canDelete: m = !0,
      canToggle: S = !0,
      showSelect: v = !0,
      canSelect: y = !0,
      selectOptions: d = [],
      selectValue: x
    } = t, w = {
      display: "flex",
      alignItems: "center",
      padding: "8px 12px",
      border: "1px solid var(--SmartThemeBorderColor, #ccc)",
      color: "var(--SmartThemeBodyColor, #333)",
      marginBottom: "2px",
      opacity: r && !g ? 0.6 : 1
    }, A = { cursor: "pointer", flexShrink: 0 }, C = { display: "inline-block", flexShrink: 0, marginRight: "10px" };
    return /* @__PURE__ */ _.jsxs("li", { className: "sortable-list-item", style: w, "data-id": p, children: [
      /* @__PURE__ */ _.jsx(
        "span",
        {
          className: "drag-handle fas fa-bars",
          style: { cursor: "grab", marginRight: "10px", color: "var(--SmartThemeBodyColor, #555)", flexShrink: 0 }
        }
      ),
      /* @__PURE__ */ _.jsx(
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
      s && v && y && /* @__PURE__ */ _.jsx(
        yu,
        {
          value: x,
          onChange: (T) => f(p, T.target.value),
          disabled: !g,
          style: { marginRight: "10px", flexShrink: 0, width: "unset" },
          children: d.length === 0 ? /* @__PURE__ */ _.jsx("option", { disabled: !0, children: "--" }) : d.map((T) => /* @__PURE__ */ _.jsx("option", { value: T.value, children: T.label }, T.value))
        }
      ),
      s && (!v || !y) && /* @__PURE__ */ _.jsx("span", { style: C }),
      r && S && /* @__PURE__ */ _.jsx(
        fe,
        {
          overrideDefaults: !0,
          className: `toggle-button fas ${g ? "fa-toggle-on" : "fa-toggle-off"}`,
          style: {
            ...A,
            marginRight: "10px",
            fontSize: "1.2em",
            color: g ? "var(--success-color, #4CAF50)" : "var(--SmartThemeBodyColor, #555)",
            backgroundColor: "transparent",
            border: "none"
          },
          onClick: () => l(p)
        }
      ),
      r && !S && /* @__PURE__ */ _.jsx("span", { style: C }),
      i && m && /* @__PURE__ */ _.jsx(
        fe,
        {
          overrideDefaults: !0,
          className: "delete-button fas fa-trash-can",
          style: {
            ...A,
            color: "var(--error-color, #f44336)",
            backgroundColor: "transparent",
            border: "none"
          },
          onClick: () => u(p)
        }
      ),
      i && !m && /* @__PURE__ */ _.jsx("span", { style: { ...C, marginRight: 0 } })
    ] });
  }
);
const hd = ({
  items: t,
  value: r,
  onChange: i,
  placeholder: s = "Select items...",
  closeOnSelect: l = !1,
  multiple: u = !0,
  disabled: f = !1,
  onBeforeSelection: p,
  enableSearch: h = !1,
  searchPlaceholder: g = "Search...",
  searchNoResultsText: m = "No results found",
  searchFuseOptions: S,
  inputClasses: v,
  containerClasses: y
}) => {
  const [d, x] = Y.useState(!1), [w, A] = Y.useState(""), C = Y.useRef(null);
  Y.useEffect(() => {
    const R = (H) => {
      C.current && !C.current.contains(H.target) && x(!1);
    };
    return document.addEventListener("mousedown", R), () => document.removeEventListener("mousedown", R);
  }, []), Y.useEffect(() => {
    d || A("");
  }, [d]);
  const T = Y.useMemo(() => {
    if (!h) return null;
    const R = {
      includeScore: !1,
      threshold: 0.4,
      keys: ["label", "value"],
      ...S
    };
    return new Bi(t, R);
  }, [t, h, S]), E = Y.useMemo(() => !h || !w.trim() || !T ? t : T.search(w.trim()).map((R) => R.item), [t, w, h, T]), O = async (R) => {
    let H;
    u ? H = r.includes(R) ? r.filter((Q) => Q !== R) : [...r, R] : H = r.includes(R) ? [] : [R], !(p && !await Promise.resolve(p(r, H))) && (i(H), l && x(!1));
  }, j = Y.useMemo(() => {
    var R;
    return r.length === 0 ? s : r.length === 1 ? ((R = t.find((H) => H.value === r[0])) == null ? void 0 : R.label) ?? r[0] : `${r.length} items selected`;
  }, [r, t, s]);
  return /* @__PURE__ */ _.jsxs(
    "div",
    {
      ref: C,
      className: `fancy-dropdown-container ${y ?? ""}`,
      style: {
        position: "relative",
        userSelect: "none",
        opacity: f ? 0.6 : 1,
        pointerEvents: f ? "none" : "auto"
      },
      children: [
        /* @__PURE__ */ _.jsxs(
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
              /* @__PURE__ */ _.jsx("span", { className: "fancy-dropdown-trigger-text", children: j }),
              /* @__PURE__ */ _.jsx("i", { className: `fas ${d ? "fa-chevron-up" : "fa-chevron-down"}`, style: { marginLeft: "8px" } })
            ]
          }
        ),
        d && /* @__PURE__ */ _.jsxs(
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
              h && /* @__PURE__ */ _.jsx(
                "div",
                {
                  style: {
                    padding: "8px",
                    borderBottom: "1px solid var(--border-color)",
                    position: "sticky",
                    top: 0,
                    backgroundColor: "inherit"
                  },
                  children: /* @__PURE__ */ _.jsx(
                    UE,
                    {
                      type: "text",
                      placeholder: g,
                      value: w,
                      onChange: (R) => A(R.target.value),
                      autoFocus: !0,
                      className: v
                    }
                  )
                }
              ),
              /* @__PURE__ */ _.jsx("ul", { style: { listStyle: "none", margin: 0, padding: 0 }, children: E.length > 0 ? E.map((R) => /* @__PURE__ */ _.jsx(
                FE,
                {
                  item: R,
                  isSelected: r.includes(R.value),
                  onClick: O
                },
                R.value
              )) : /* @__PURE__ */ _.jsx(
                "div",
                {
                  style: {
                    padding: "8px 12px",
                    textAlign: "center",
                    color: "var(--text-color-secondary, var(--grey50))"
                  },
                  children: m
                }
              ) })
            ]
          }
        )
      ]
    }
  );
}, FE = cu.memo(({ item: t, isSelected: r, onClick: i }) => {
  const [s, l] = Y.useState(!1);
  return /* @__PURE__ */ _.jsxs(
    "li",
    {
      onClick: () => i(t.value),
      onMouseEnter: () => l(!0),
      onMouseLeave: () => l(!1),
      style: {
        padding: "8px 12px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: r ? "var(--accent-color-bg, var(--link-color))" : s ? "var(--hover-color, var(--white20a))" : "transparent"
      },
      children: [
        /* @__PURE__ */ _.jsx("span", { children: t.label }),
        r && /* @__PURE__ */ _.jsx("i", { className: "checkmark fa-solid fa-check", style: { marginLeft: "8px" } })
      ]
    }
  );
}), pd = SillyTavern.getContext(), Sy = ({
  value: t,
  items: r,
  readOnlyValues: i = [],
  label: s,
  onChange: l,
  onItemsChange: u,
  enableCreate: f = !1,
  enableRename: p = !1,
  enableDelete: h = !1,
  onCreate: g,
  onRename: m,
  onDelete: S,
  buttons: v
}) => {
  const y = Y.useMemo(() => r.find((C) => C.value === t), [r, t]), d = Y.useCallback((C) => C ? i.includes(C) : !1, [i]), x = async () => {
    const C = await pd.Popup.show.input(
      `Create a new ${s}`,
      `Please enter a name for the new ${s}:`,
      ""
    );
    if (!C || C.trim() === "") return;
    const T = C.trim();
    if (r.some((O) => O.value === T)) {
      await xe("warning", `A ${s} with this name already exists.`);
      return;
    }
    let E = { value: T, label: T };
    if (g) {
      const O = await Promise.resolve(g(T));
      if (!O.confirmed) return;
      O.value && (typeof O.value == "string" ? E = { value: O.value, label: O.value } : E = O.value);
    }
    u([...r, E]), l(E.value, t);
  }, w = async () => {
    if (!y) {
      await xe("warning", `Please select a ${s} to rename.`);
      return;
    }
    if (d(y.value)) {
      await xe("warning", `This ${s} cannot be renamed as it is read-only.`);
      return;
    }
    const C = await pd.Popup.show.input(
      `Rename ${s}`,
      `Please enter a new name for "${y.label}":`,
      y.label
    );
    if (!C || C.trim() === "" || C.trim() === y.value) return;
    const T = C.trim();
    if (r.some((j) => j.value === T)) {
      await xe("warning", `A ${s} with this name already exists.`);
      return;
    }
    let E = { value: T, label: T };
    if (m) {
      const j = await Promise.resolve(m(y.value, T));
      if (!j.confirmed) return;
      j.value && (typeof j.value == "string" ? E = { value: j.value, label: j.value } : E = j.value);
    }
    const O = r.map((j) => j.value === y.value ? E : j);
    u(O), l(E.value, t);
  }, A = async () => {
    var C;
    if (!y) {
      await xe("warning", `Please select a ${s} to delete.`);
      return;
    }
    if (d(y.value)) {
      await xe("warning", `This ${s} cannot be deleted as it is read-only.`);
      return;
    }
    if (!await pd.Popup.show.confirm(
      `Delete ${s}`,
      `Are you sure you want to delete "${y.label}"?`
    ) || S && !await Promise.resolve(S(y.value)))
      return;
    const T = r.findIndex((j) => j.value === y.value), E = r.filter((j) => j.value !== y.value);
    u(E);
    let O;
    if (E.length > 0) {
      const j = Math.min(T, E.length - 1);
      O = (C = E[j]) == null ? void 0 : C.value;
    }
    l(O, t);
  };
  return /* @__PURE__ */ _.jsxs("div", { className: "preset-select-container", style: { display: "flex", alignItems: "center" }, children: [
    /* @__PURE__ */ _.jsx(yu, { value: t ?? "", onChange: (C) => l(C.target.value, t), children: r.map((C) => /* @__PURE__ */ _.jsx("option", { value: C.value, children: C.label }, C.value)) }),
    f && /* @__PURE__ */ _.jsx(
      fe,
      {
        className: "fa-solid fa-file-circle-plus",
        title: `Create a new ${s}`,
        onClick: x,
        "data-i18n": `[title]Create a new ${s}`
      }
    ),
    p && /* @__PURE__ */ _.jsx(
      fe,
      {
        className: "fa-solid fa-pencil",
        title: `Rename selected ${s}`,
        onClick: w,
        disabled: !y,
        "data-i18n": `[title]Rename selected ${s}`
      }
    ),
    h && /* @__PURE__ */ _.jsx(
      fe,
      {
        className: "fa-solid fa-trash-can",
        title: `Delete selected ${s}`,
        onClick: A,
        disabled: !y,
        "data-i18n": `[title]Delete selected ${s}`
      }
    ),
    v?.map((C) => /* @__PURE__ */ _.jsx(
      fe,
      {
        className: C.icon,
        title: C.title,
        onClick: C.onClick,
        disabled: C.disabled,
        "data-i18n": C.i18n ? `[title]${C.i18n}` : void 0
      },
      C.key
    ))
  ] });
}, Q0 = () => {
  const [, t] = Y.useState(0);
  return Y.useCallback(() => {
    t((i) => i + 1);
  }, []);
}, J0 = () => {
  const t = Q0(), r = St.getSettings(), i = () => {
    r.soundNotifications || (r.soundNotifications = { enabled: !0, volume: 0.5 }), r.soundNotifications.enabled = !r.soundNotifications.enabled, St.saveSettings(), t();
  }, s = (u) => {
    r.soundNotifications || (r.soundNotifications = { enabled: !0, volume: 0.5 }), r.soundNotifications.volume = parseFloat(u.target.value), St.saveSettings(), t();
  }, l = (u) => {
    const f = r.soundNotifications?.volume ?? 0.5, p = new Audio(`scripts/extensions/third-party/SillyTavern-Character-Creator/templates/${u}.wav`);
    p.volume = f, p.play().catch((h) => console.error("Failed to play test sound:", h));
  };
  return /* @__PURE__ */ _.jsxs("div", { className: "settings-container", children: [
    /* @__PURE__ */ _.jsx("h3", { children: "Extension Settings" }),
    /* @__PURE__ */ _.jsxs("div", { className: "settings-section card", children: [
      /* @__PURE__ */ _.jsxs("h4", { children: [
        /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-volume-high" }),
        " Sound Notifications"
      ] }),
      /* @__PURE__ */ _.jsxs("div", { className: "settings-row", style: { display: "flex", alignItems: "center", gap: "20px", margin: "15px 0" }, children: [
        /* @__PURE__ */ _.jsx("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: /* @__PURE__ */ _.jsxs(
          fe,
          {
            onClick: i,
            className: r.soundNotifications?.enabled ? "confirm" : "secondary",
            children: [
              /* @__PURE__ */ _.jsx("i", { className: `fa-solid ${r.soundNotifications?.enabled ? "fa-bell" : "fa-bell-slash"}` }),
              r.soundNotifications?.enabled ? " Enabled" : " Disabled"
            ]
          }
        ) }),
        /* @__PURE__ */ _.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px", flexGrow: 1 }, children: [
          /* @__PURE__ */ _.jsx("label", { children: "Volume:" }),
          /* @__PURE__ */ _.jsx(
            "input",
            {
              type: "range",
              min: "0",
              max: "1",
              step: "0.05",
              value: r.soundNotifications?.volume ?? 0.5,
              onChange: s,
              style: { flexGrow: 1 }
            }
          ),
          /* @__PURE__ */ _.jsxs("span", { style: { minWidth: "40px", textAlign: "right", fontFamily: "monospace" }, children: [
            Math.round((r.soundNotifications?.volume ?? 0.5) * 100),
            "%"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ _.jsxs("div", { className: "settings-row test-buttons", style: { display: "flex", gap: "10px" }, children: [
        /* @__PURE__ */ _.jsxs(fe, { onClick: () => l("success"), className: "small", children: [
          /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-play" }),
          " Test Success"
        ] }),
        /* @__PURE__ */ _.jsxs(fe, { onClick: () => l("error"), className: "small", children: [
          /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-play" }),
          " Test Error"
        ] })
      ] }),
      /* @__PURE__ */ _.jsx("p", { className: "help-text", style: { marginTop: "10px", opacity: 0.6, fontSize: "0.9em" }, children: "Sounds will play when AI finishes generating a response or when an error occurs." })
    ] }),
    /* @__PURE__ */ _.jsxs("div", { className: "settings-section card", style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ _.jsxs("h4", { children: [
        /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-info-circle" }),
        " About"
      ] }),
      /* @__PURE__ */ _.jsx("p", { children: "Character Creator Extension v0.3.0" }),
      /* @__PURE__ */ _.jsx("p", { style: { opacity: 0.7 }, children: "A powerful tool for generating and refining SillyTavern characters with AI assistance." })
    ] })
  ] });
}, xy = {
  13: "/api/tokenizers/gemma/encode",
  12: "/api/tokenizers/llama3/encode",
  3: "/api/tokenizers/llama/encode",
  7: "/api/tokenizers/mistral/encode",
  2: "/api/tokenizers/openai/encode",
  11: "/api/tokenizers/claude/encode"
};
function Kd(t) {
  const [r, i] = Y.useState(null), [s, l] = Y.useState(!1), u = Y.useRef(null), f = Y.useRef("");
  return Y.useEffect(() => {
    if (!t) {
      i(0);
      return;
    }
    return u.current && clearTimeout(u.current), u.current = window.setTimeout(async () => {
      if (t === f.current) return;
      l(!0);
      const p = St.getSettings().preferredTokenizer || 13, h = xy[p] || xy[13];
      try {
        f.current = t;
        const g = await fetch(h, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: t })
        });
        if (!g.ok) throw new Error("API error");
        const m = await g.json();
        let S = 0;
        m && m.ids && Array.isArray(m.ids) ? S = m.ids.length : Array.isArray(m) ? S = m.length : typeof m.token_count == "number" ? S = m.token_count : S = Math.ceil(t.length / 3.35), i(S);
      } catch (g) {
        console.warn("Token calculation failed, using guesstimate", g), i(Math.ceil(t.length / 3.35));
      } finally {
        l(!1);
      }
    }, 1e3), () => {
      u.current && clearTimeout(u.current);
    };
  }, [t]), { tokens: r, isCalculating: s };
}
const Ey = ({
  fieldId: t,
  label: r,
  value: i,
  prompt: s,
  large: l = !1,
  rows: u = 3,
  promptEnabled: f = !0,
  isDraft: p = !1,
  isGenerating: h = !1,
  onValueChange: g,
  onPromptChange: m,
  onGenerate: S,
  onContinue: v,
  onClear: y,
  onCompare: d,
  onDelete: x,
  onOpenReviseSessions: w
}) => {
  const { tokens: A, isCalculating: C } = Kd(i);
  return /* @__PURE__ */ _.jsxs("div", { className: `character-field ${p ? "draft-field" : "core-field"}`, children: [
    /* @__PURE__ */ _.jsx("label", { children: r }),
    /* @__PURE__ */ _.jsxs("div", { className: `field-container ${l ? "large-field" : ""}`, children: [
      /* @__PURE__ */ _.jsx(en, { value: i, onChange: (T) => g(t, T.target.value), rows: u }),
      /* @__PURE__ */ _.jsxs("div", { className: "field-actions", children: [
        /* @__PURE__ */ _.jsx(fe, { onClick: () => S(t), disabled: h, title: "Generate field content", children: h ? /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }) }),
        /* @__PURE__ */ _.jsx(fe, { onClick: () => v(t), disabled: h, title: "Continue from current content", children: /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
        /* @__PURE__ */ _.jsx(fe, { onClick: () => y(t), title: "Clear field content", children: /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-eraser" }) }),
        w && !p && /* @__PURE__ */ _.jsx(fe, { onClick: () => w(t), title: "Revise with AI chat", children: /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-comments" }) }),
        !p && d && /* @__PURE__ */ _.jsx(fe, { onClick: () => d(t), title: "Compare with loaded character", children: /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-code-compare" }) }),
        p && x && /* @__PURE__ */ _.jsx(fe, { onClick: () => x(t), title: "Delete Draft Field", className: "danger_button", children: /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-trash-can" }) }),
        /* @__PURE__ */ _.jsx("div", { className: "token-counter", style: {
          fontSize: "0.8em",
          opacity: 0.5,
          marginLeft: "auto",
          alignSelf: "center",
          fontFamily: "monospace"
        }, children: C ? /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ _.jsx(_.Fragment, { children: A !== null ? `${A} tokens` : "" }) })
      ] })
    ] }),
    f && /* @__PURE__ */ _.jsx("div", { className: "field-prompt-container", children: /* @__PURE__ */ _.jsx(
      en,
      {
        value: s,
        onChange: (T) => m(t, T.target.value),
        placeholder: `Enter additional prompt for ${r.toLowerCase()}...`,
        rows: 3
      }
    ) })
  ] });
}, ZE = SillyTavern.getContext(), GE = ({
  greetings: t,
  onGreetingsChange: r,
  onGenerate: i,
  onContinue: s,
  onCompare: l,
  isGenerating: u
}) => {
  const [f, p] = Y.useState(0), h = t[f], { tokens: g, isCalculating: m } = Kd(h?.value ?? "");
  Y.useEffect(() => {
    f >= t.length && t.length > 0 ? p(t.length - 1) : t.length === 0 && p(0);
  }, [t, f]);
  const S = () => {
    const d = [...t, { value: "", prompt: "" }];
    r(d), p(d.length - 1);
  }, v = async () => {
    if (t.length === 0) return;
    if (await ZE.Popup.show.confirm("Delete Greeting", "Are you sure?")) {
      const x = t.filter((w, A) => A !== f);
      r(x);
    }
  }, y = (d, x, w) => {
    const A = [...t];
    A[d][x] = w, r(A);
  };
  return /* @__PURE__ */ _.jsxs("div", { className: "character-field alternate-greetings-field", children: [
    /* @__PURE__ */ _.jsx("label", { children: "Alternate Greetings" }),
    /* @__PURE__ */ _.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }, children: [
      /* @__PURE__ */ _.jsx(
        "div",
        {
          className: "alternate-greetings-tabs",
          style: { display: "flex", flexWrap: "wrap", gap: "5px", flexGrow: 1 },
          children: t.map((d, x) => /* @__PURE__ */ _.jsxs(
            fe,
            {
              onClick: () => p(x),
              className: `menu_button ${x === f ? "active" : ""}`,
              children: [
                "Greeting ",
                x + 1
              ]
            },
            x
          ))
        }
      ),
      /* @__PURE__ */ _.jsxs(fe, { onClick: S, title: "Add a new alternate greeting", children: [
        /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-plus" }),
        " Add"
      ] })
    ] }),
    t.length === 0 ? /* @__PURE__ */ _.jsx("p", { className: "subtle", children: 'No alternate greetings defined. Click "Add" to create one.' }) : /* @__PURE__ */ _.jsxs("div", { className: "field-container", children: [
      /* @__PURE__ */ _.jsxs("div", { style: { flexGrow: 1 }, children: [
        /* @__PURE__ */ _.jsx(
          en,
          {
            value: h?.value ?? "",
            onChange: (d) => y(f, "value", d.target.value),
            rows: 8,
            placeholder: "Enter greeting content..."
          }
        ),
        /* @__PURE__ */ _.jsx("div", { className: "field-prompt-container", style: { marginTop: "5px" }, children: /* @__PURE__ */ _.jsx(
          en,
          {
            value: h?.prompt ?? "",
            onChange: (d) => y(f, "prompt", d.target.value),
            rows: 2,
            placeholder: "Enter specific prompt for this greeting..."
          }
        ) })
      ] }),
      /* @__PURE__ */ _.jsxs("div", { className: "field-actions", children: [
        /* @__PURE__ */ _.jsx(fe, { onClick: () => i(f), disabled: u, title: "Generate greeting", children: u ? /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }) }),
        /* @__PURE__ */ _.jsx(fe, { onClick: () => s(f), disabled: u, title: "Continue greeting", children: /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
        /* @__PURE__ */ _.jsx(
          fe,
          {
            onClick: () => y(f, "value", ""),
            disabled: u,
            title: "Clear greeting",
            children: /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-eraser" })
          }
        ),
        /* @__PURE__ */ _.jsx(fe, { onClick: () => l(f), disabled: u, title: "Compare greeting", children: /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-code-compare" }) }),
        /* @__PURE__ */ _.jsx(
          fe,
          {
            onClick: v,
            disabled: u,
            title: "Delete greeting",
            className: "danger_button",
            children: /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-trash-can" })
          }
        ),
        /* @__PURE__ */ _.jsx("div", { className: "token-counter", style: {
          fontSize: "0.8em",
          opacity: 0.5,
          marginLeft: "auto",
          alignSelf: "center",
          fontFamily: "monospace"
        }, children: m ? /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ _.jsx(_.Fragment, { children: g !== null ? `${g} tokens` : "" }) })
      ] })
    ] })
  ] });
};
var sa = (
  /** @class */
  (function() {
    function t() {
    }
    return t.prototype.diff = function(r, i, s) {
      s === void 0 && (s = {});
      var l;
      typeof s == "function" ? (l = s, s = {}) : "callback" in s && (l = s.callback);
      var u = this.castInput(r, s), f = this.castInput(i, s), p = this.removeEmpty(this.tokenize(u, s)), h = this.removeEmpty(this.tokenize(f, s));
      return this.diffWithOptionsObj(p, h, s, l);
    }, t.prototype.diffWithOptionsObj = function(r, i, s, l) {
      var u = this, f, p = function(E) {
        if (E = u.postProcess(E, s), l) {
          setTimeout(function() {
            l(E);
          }, 0);
          return;
        } else
          return E;
      }, h = i.length, g = r.length, m = 1, S = h + g;
      s.maxEditLength != null && (S = Math.min(S, s.maxEditLength));
      var v = (f = s.timeout) !== null && f !== void 0 ? f : 1 / 0, y = Date.now() + v, d = [{ oldPos: -1, lastComponent: void 0 }], x = this.extractCommon(d[0], i, r, 0, s);
      if (d[0].oldPos + 1 >= g && x + 1 >= h)
        return p(this.buildValues(d[0].lastComponent, i, r));
      var w = -1 / 0, A = 1 / 0, C = function() {
        for (var E = Math.max(w, -m); E <= Math.min(A, m); E += 2) {
          var O = void 0, j = d[E - 1], R = d[E + 1];
          j && (d[E - 1] = void 0);
          var H = !1;
          if (R) {
            var Q = R.oldPos - E;
            H = R && 0 <= Q && Q < h;
          }
          var B = j && j.oldPos + 1 < g;
          if (!H && !B) {
            d[E] = void 0;
            continue;
          }
          if (!B || H && j.oldPos < R.oldPos ? O = u.addToPath(R, !0, !1, 0, s) : O = u.addToPath(j, !1, !0, 1, s), x = u.extractCommon(O, i, r, E, s), O.oldPos + 1 >= g && x + 1 >= h)
            return p(u.buildValues(O.lastComponent, i, r)) || !0;
          d[E] = O, O.oldPos + 1 >= g && (A = Math.min(A, E - 1)), x + 1 >= h && (w = Math.max(w, E + 1));
        }
        m++;
      };
      if (l)
        (function E() {
          setTimeout(function() {
            if (m > S || Date.now() > y)
              return l(void 0);
            C() || E();
          }, 0);
        })();
      else
        for (; m <= S && Date.now() <= y; ) {
          var T = C();
          if (T)
            return T;
        }
    }, t.prototype.addToPath = function(r, i, s, l, u) {
      var f = r.lastComponent;
      return f && !u.oneChangePerToken && f.added === i && f.removed === s ? {
        oldPos: r.oldPos + l,
        lastComponent: { count: f.count + 1, added: i, removed: s, previousComponent: f.previousComponent }
      } : {
        oldPos: r.oldPos + l,
        lastComponent: { count: 1, added: i, removed: s, previousComponent: f }
      };
    }, t.prototype.extractCommon = function(r, i, s, l, u) {
      for (var f = i.length, p = s.length, h = r.oldPos, g = h - l, m = 0; g + 1 < f && h + 1 < p && this.equals(s[h + 1], i[g + 1], u); )
        g++, h++, m++, u.oneChangePerToken && (r.lastComponent = { count: 1, previousComponent: r.lastComponent, added: !1, removed: !1 });
      return m && !u.oneChangePerToken && (r.lastComponent = { count: m, previousComponent: r.lastComponent, added: !1, removed: !1 }), r.oldPos = h, g;
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
      for (var l = [], u; r; )
        l.push(r), u = r.previousComponent, delete r.previousComponent, r = u;
      l.reverse();
      for (var f = l.length, p = 0, h = 0, g = 0; p < f; p++) {
        var m = l[p];
        if (m.removed)
          m.value = this.join(s.slice(g, g + m.count)), g += m.count;
        else {
          if (!m.added && this.useLongestToken) {
            var S = i.slice(h, h + m.count);
            S = S.map(function(v, y) {
              var d = s[g + y];
              return d.length > v.length ? d : v;
            }), m.value = this.join(S);
          } else
            m.value = this.join(i.slice(h, h + m.count));
          h += m.count, m.added || (g += m.count);
        }
      }
      return l;
    }, t;
  })()
), VE = /* @__PURE__ */ (function() {
  var t = function(r, i) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, l) {
      s.__proto__ = l;
    } || function(s, l) {
      for (var u in l) Object.prototype.hasOwnProperty.call(l, u) && (s[u] = l[u]);
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
})(), YE = (
  /** @class */
  (function(t) {
    VE(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r;
  })(sa)
);
new YE();
function wy(t, r) {
  var i;
  for (i = 0; i < t.length && i < r.length; i++)
    if (t[i] != r[i])
      return t.slice(0, i);
  return t.slice(0, i);
}
function Cy(t, r) {
  var i;
  if (!t || !r || t[t.length - 1] != r[r.length - 1])
    return "";
  for (i = 0; i < t.length && i < r.length; i++)
    if (t[t.length - (i + 1)] != r[r.length - (i + 1)])
      return t.slice(-i);
  return t.slice(-i);
}
function Dd(t, r, i) {
  if (t.slice(0, r.length) != r)
    throw Error("string ".concat(JSON.stringify(t), " doesn't start with prefix ").concat(JSON.stringify(r), "; this is a bug"));
  return i + t.slice(r.length);
}
function Rd(t, r, i) {
  if (!r)
    return t + i;
  if (t.slice(-r.length) != r)
    throw Error("string ".concat(JSON.stringify(t), " doesn't end with suffix ").concat(JSON.stringify(r), "; this is a bug"));
  return t.slice(0, -r.length) + i;
}
function Vs(t, r) {
  return Dd(t, r, "");
}
function Wl(t, r) {
  return Rd(t, r, "");
}
function Ny(t, r) {
  return r.slice(0, $E(t, r));
}
function $E(t, r) {
  var i = 0;
  t.length > r.length && (i = t.length - r.length);
  var s = r.length;
  t.length < r.length && (s = t.length);
  var l = Array(s), u = 0;
  l[0] = 0;
  for (var f = 1; f < s; f++) {
    for (r[f] == r[u] ? l[f] = l[u] : l[f] = u; u > 0 && r[f] != r[u]; )
      u = l[u];
    r[f] == r[u] && u++;
  }
  u = 0;
  for (var p = i; p < t.length; p++) {
    for (; u > 0 && t[p] != r[u]; )
      u = l[u];
    t[p] == r[u] && u++;
  }
  return u;
}
function Ys(t) {
  var r;
  for (r = t.length - 1; r >= 0 && t[r].match(/\s/); r--)
    ;
  return t.substring(r + 1);
}
function ea(t) {
  var r = t.match(/^\s*/);
  return r ? r[0] : "";
}
var K0 = /* @__PURE__ */ (function() {
  var t = function(r, i) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, l) {
      s.__proto__ = l;
    } || function(s, l) {
      for (var u in l) Object.prototype.hasOwnProperty.call(l, u) && (s[u] = l[u]);
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
})(), bu = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", XE = new RegExp("[".concat(bu, "]+|\\s+|[^").concat(bu, "]"), "ug"), QE = (
  /** @class */
  (function(t) {
    K0(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.equals = function(i, s, l) {
      return l.ignoreCase && (i = i.toLowerCase(), s = s.toLowerCase()), i.trim() === s.trim();
    }, r.prototype.tokenize = function(i, s) {
      s === void 0 && (s = {});
      var l;
      if (s.intlSegmenter) {
        var u = s.intlSegmenter;
        if (u.resolvedOptions().granularity != "word")
          throw new Error('The segmenter passed must have a granularity of "word"');
        l = Array.from(u.segment(i), function(h) {
          return h.segment;
        });
      } else
        l = i.match(XE) || [];
      var f = [], p = null;
      return l.forEach(function(h) {
        /\s/.test(h) ? p == null ? f.push(h) : f.push(f.pop() + h) : p != null && /\s/.test(p) ? f[f.length - 1] == p ? f.push(f.pop() + h) : f.push(p + h) : f.push(h), p = h;
      }), f;
    }, r.prototype.join = function(i) {
      return i.map(function(s, l) {
        return l == 0 ? s : s.replace(/^\s+/, "");
      }).join("");
    }, r.prototype.postProcess = function(i, s) {
      if (!i || s.oneChangePerToken)
        return i;
      var l = null, u = null, f = null;
      return i.forEach(function(p) {
        p.added ? u = p : p.removed ? f = p : ((u || f) && Ay(l, f, u, p), l = p, u = null, f = null);
      }), (u || f) && Ay(l, f, u, null), i;
    }, r;
  })(sa)
), JE = new QE();
function W0(t, r, i) {
  return JE.diff(t, r, i);
}
function Ay(t, r, i, s) {
  if (r && i) {
    var l = ea(r.value), u = Ys(r.value), f = ea(i.value), p = Ys(i.value);
    if (t) {
      var h = wy(l, f);
      t.value = Rd(t.value, f, h), r.value = Vs(r.value, h), i.value = Vs(i.value, h);
    }
    if (s) {
      var g = Cy(u, p);
      s.value = Dd(s.value, p, g), r.value = Wl(r.value, g), i.value = Wl(i.value, g);
    }
  } else if (i) {
    if (t) {
      var m = ea(i.value);
      i.value = i.value.substring(m.length);
    }
    if (s) {
      var m = ea(s.value);
      s.value = s.value.substring(m.length);
    }
  } else if (t && s) {
    var S = ea(s.value), v = ea(r.value), y = Ys(r.value), d = wy(S, v);
    r.value = Vs(r.value, d);
    var x = Cy(Vs(S, d), y);
    r.value = Wl(r.value, x), s.value = Dd(s.value, S, x), t.value = Rd(t.value, S, S.slice(0, S.length - x.length));
  } else if (s) {
    var w = ea(s.value), A = Ys(r.value), C = Ny(A, w);
    r.value = Wl(r.value, C);
  } else if (t) {
    var T = Ys(t.value), E = ea(r.value), C = Ny(T, E);
    r.value = Vs(r.value, C);
  }
}
var KE = (
  /** @class */
  (function(t) {
    K0(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      var s = new RegExp("(\\r?\\n)|[".concat(bu, "]+|[^\\S\\n\\r]+|[^").concat(bu, "]"), "ug");
      return i.match(s) || [];
    }, r;
  })(sa)
);
new KE();
var WE = /* @__PURE__ */ (function() {
  var t = function(r, i) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, l) {
      s.__proto__ = l;
    } || function(s, l) {
      for (var u in l) Object.prototype.hasOwnProperty.call(l, u) && (s[u] = l[u]);
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
})(), ew = (
  /** @class */
  (function(t) {
    WE(r, t);
    function r() {
      var i = t !== null && t.apply(this, arguments) || this;
      return i.tokenize = e1, i;
    }
    return r.prototype.equals = function(i, s, l) {
      return l.ignoreWhitespace ? ((!l.newlineIsToken || !i.includes(`
`)) && (i = i.trim()), (!l.newlineIsToken || !s.includes(`
`)) && (s = s.trim())) : l.ignoreNewlineAtEof && !l.newlineIsToken && (i.endsWith(`
`) && (i = i.slice(0, -1)), s.endsWith(`
`) && (s = s.slice(0, -1))), t.prototype.equals.call(this, i, s, l);
    }, r;
  })(sa)
), tw = new ew();
function nw(t, r, i) {
  return tw.diff(t, r, i);
}
function e1(t, r) {
  r.stripTrailingCr && (t = t.replace(/\r\n/g, `
`));
  var i = [], s = t.split(/(\n|\r\n)/);
  s[s.length - 1] || s.pop();
  for (var l = 0; l < s.length; l++) {
    var u = s[l];
    l % 2 && !r.newlineIsToken ? i[i.length - 1] += u : i.push(u);
  }
  return i;
}
var rw = /* @__PURE__ */ (function() {
  var t = function(r, i) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, l) {
      s.__proto__ = l;
    } || function(s, l) {
      for (var u in l) Object.prototype.hasOwnProperty.call(l, u) && (s[u] = l[u]);
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
})(), aw = (
  /** @class */
  (function(t) {
    rw(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      return i.split(new RegExp("(?<=[.!?])(\\s+|$)"));
    }, r;
  })(sa)
);
new aw();
var iw = /* @__PURE__ */ (function() {
  var t = function(r, i) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, l) {
      s.__proto__ = l;
    } || function(s, l) {
      for (var u in l) Object.prototype.hasOwnProperty.call(l, u) && (s[u] = l[u]);
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
})(), sw = (
  /** @class */
  (function(t) {
    iw(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      return i.split(/([{}:;,]|\s+)/);
    }, r;
  })(sa)
);
new sw();
var ow = /* @__PURE__ */ (function() {
  var t = function(r, i) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, l) {
      s.__proto__ = l;
    } || function(s, l) {
      for (var u in l) Object.prototype.hasOwnProperty.call(l, u) && (s[u] = l[u]);
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
})(), lw = (
  /** @class */
  (function(t) {
    ow(r, t);
    function r() {
      var i = t !== null && t.apply(this, arguments) || this;
      return i.tokenize = e1, i;
    }
    return Object.defineProperty(r.prototype, "useLongestToken", {
      get: function() {
        return !0;
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.castInput = function(i, s) {
      var l = s.undefinedReplacement, u = s.stringifyReplacer, f = u === void 0 ? function(p, h) {
        return typeof h > "u" ? l : h;
      } : u;
      return typeof i == "string" ? i : JSON.stringify(zd(i, null, null, f), null, "  ");
    }, r.prototype.equals = function(i, s, l) {
      return t.prototype.equals.call(this, i.replace(/,([\r\n])/g, "$1"), s.replace(/,([\r\n])/g, "$1"), l);
    }, r;
  })(sa)
);
new lw();
function zd(t, r, i, s, l) {
  r = r || [], i = i || [], s && (t = s(l === void 0 ? "" : l, t));
  var u;
  for (u = 0; u < r.length; u += 1)
    if (r[u] === t)
      return i[u];
  var f;
  if (Object.prototype.toString.call(t) === "[object Array]") {
    for (r.push(t), f = new Array(t.length), i.push(f), u = 0; u < t.length; u += 1)
      f[u] = zd(t[u], r, i, s, String(u));
    return r.pop(), i.pop(), f;
  }
  if (t && t.toJSON && (t = t.toJSON()), typeof t == "object" && t !== null) {
    r.push(t), f = {}, i.push(f);
    var p = [], h;
    for (h in t)
      Object.prototype.hasOwnProperty.call(t, h) && p.push(h);
    for (p.sort(), u = 0; u < p.length; u += 1)
      h = p[u], f[h] = zd(t[h], r, i, s, h);
    r.pop(), i.pop();
  } else
    f = t;
  return f;
}
var uw = /* @__PURE__ */ (function() {
  var t = function(r, i) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, l) {
      s.__proto__ = l;
    } || function(s, l) {
      for (var u in l) Object.prototype.hasOwnProperty.call(l, u) && (s[u] = l[u]);
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
})(), cw = (
  /** @class */
  (function(t) {
    uw(r, t);
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
  })(sa)
);
new cw();
const fw = ({ originalContent: t, newContent: r, fieldName: i }) => {
  const s = Y.useMemo(() => {
    const l = W0(t, r);
    let u = "", f = "";
    return l.forEach((p) => {
      const g = `<span style="${p.added ? "color: green; background-color: #e6ffed;" : p.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${p.value}</span>`;
      p.added || (u += g), p.removed || (f += g);
    }), { originalHtml: u, newHtml: f };
  }, [t, r]);
  return /* @__PURE__ */ _.jsxs("div", { className: "compare-popup", style: { padding: "10px" }, children: [
    /* @__PURE__ */ _.jsxs("h3", { children: [
      "Compare Changes for: ",
      i
    ] }),
    /* @__PURE__ */ _.jsxs("div", { style: { display: "flex", gap: "1rem", marginTop: "1rem" }, children: [
      /* @__PURE__ */ _.jsxs("div", { style: { flex: "1" }, children: [
        /* @__PURE__ */ _.jsx("h4", { children: "Loaded Character Content" }),
        /* @__PURE__ */ _.jsx(
          "div",
          {
            className: "content",
            style: { maxHeight: "400px", overflowY: "auto" },
            dangerouslySetInnerHTML: { __html: s.originalHtml }
          }
        )
      ] }),
      /* @__PURE__ */ _.jsxs("div", { style: { flex: "1" }, children: [
        /* @__PURE__ */ _.jsx("h4", { children: "Current Content" }),
        /* @__PURE__ */ _.jsx(
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
function re(t, r, i) {
  function s(p, h) {
    var g;
    Object.defineProperty(p, "_zod", {
      value: p._zod ?? {},
      enumerable: !1
    }), (g = p._zod).traits ?? (g.traits = /* @__PURE__ */ new Set()), p._zod.traits.add(t), r(p, h);
    for (const m in f.prototype)
      m in p || Object.defineProperty(p, m, { value: f.prototype[m].bind(p) });
    p._zod.constr = f, p._zod.def = h;
  }
  const l = i?.Parent ?? Object;
  class u extends l {
  }
  Object.defineProperty(u, "name", { value: t });
  function f(p) {
    var h;
    const g = i?.Parent ? new u() : this;
    s(g, p), (h = g._zod).deferred ?? (h.deferred = []);
    for (const m of g._zod.deferred)
      m();
    return g;
  }
  return Object.defineProperty(f, "init", { value: s }), Object.defineProperty(f, Symbol.hasInstance, {
    value: (p) => i?.Parent && p instanceof i.Parent ? !0 : p?._zod?.traits?.has(t)
  }), Object.defineProperty(f, "name", { value: t }), f;
}
class Ii extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class t1 extends Error {
  constructor(r) {
    super(`Encountered unidirectional transform during encode: ${r}`), this.name = "ZodEncodeError";
  }
}
const n1 = {};
function za(t) {
  return n1;
}
function r1(t) {
  const r = Object.values(t).filter((s) => typeof s == "number");
  return Object.entries(t).filter(([s, l]) => r.indexOf(+s) === -1).map(([s, l]) => l);
}
function Ld(t, r) {
  return typeof r == "bigint" ? r.toString() : r;
}
function Wd(t) {
  return {
    get value() {
      {
        const r = t();
        return Object.defineProperty(this, "value", { value: r }), r;
      }
    }
  };
}
function eh(t) {
  return t == null;
}
function th(t) {
  const r = t.startsWith("^") ? 1 : 0, i = t.endsWith("$") ? t.length - 1 : t.length;
  return t.slice(r, i);
}
function dw(t, r) {
  const i = (t.toString().split(".")[1] || "").length, s = r.toString();
  let l = (s.split(".")[1] || "").length;
  if (l === 0 && /\d?e-\d?/.test(s)) {
    const h = s.match(/\d?e-(\d?)/);
    h?.[1] && (l = Number.parseInt(h[1]));
  }
  const u = i > l ? i : l, f = Number.parseInt(t.toFixed(u).replace(".", "")), p = Number.parseInt(r.toFixed(u).replace(".", ""));
  return f % p / 10 ** u;
}
const Ty = Symbol("evaluating");
function ut(t, r, i) {
  let s;
  Object.defineProperty(t, r, {
    get() {
      if (s !== Ty)
        return s === void 0 && (s = Ty, s = i()), s;
    },
    set(l) {
      Object.defineProperty(t, r, {
        value: l
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function Ia(t, r, i) {
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
const a1 = "captureStackTrace" in Error ? Error.captureStackTrace : (...t) => {
};
function _u(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}
const hw = Wd(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const t = Function;
    return new t(""), !0;
  } catch {
    return !1;
  }
});
function ro(t) {
  if (_u(t) === !1)
    return !1;
  const r = t.constructor;
  if (r === void 0)
    return !0;
  const i = r.prototype;
  return !(_u(i) === !1 || Object.prototype.hasOwnProperty.call(i, "isPrototypeOf") === !1);
}
function i1(t) {
  return ro(t) ? { ...t } : Array.isArray(t) ? [...t] : t;
}
const pw = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function Nu(t) {
  return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function oa(t, r, i) {
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
function mw(t) {
  return Object.keys(t).filter((r) => t[r]._zod.optin === "optional" && t[r]._zod.optout === "optional");
}
const gw = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function vw(t, r) {
  const i = t._zod.def, s = Pa(t._zod.def, {
    get shape() {
      const l = {};
      for (const u in r) {
        if (!(u in i.shape))
          throw new Error(`Unrecognized key: "${u}"`);
        r[u] && (l[u] = i.shape[u]);
      }
      return Ia(this, "shape", l), l;
    },
    checks: []
  });
  return oa(t, s);
}
function yw(t, r) {
  const i = t._zod.def, s = Pa(t._zod.def, {
    get shape() {
      const l = { ...t._zod.def.shape };
      for (const u in r) {
        if (!(u in i.shape))
          throw new Error(`Unrecognized key: "${u}"`);
        r[u] && delete l[u];
      }
      return Ia(this, "shape", l), l;
    },
    checks: []
  });
  return oa(t, s);
}
function bw(t, r) {
  if (!ro(r))
    throw new Error("Invalid input to extend: expected a plain object");
  const i = t._zod.def.checks;
  if (i && i.length > 0)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  const l = Pa(t._zod.def, {
    get shape() {
      const u = { ...t._zod.def.shape, ...r };
      return Ia(this, "shape", u), u;
    },
    checks: []
  });
  return oa(t, l);
}
function _w(t, r) {
  if (!ro(r))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const i = {
    ...t._zod.def,
    get shape() {
      const s = { ...t._zod.def.shape, ...r };
      return Ia(this, "shape", s), s;
    },
    checks: t._zod.def.checks
  };
  return oa(t, i);
}
function Sw(t, r) {
  const i = Pa(t._zod.def, {
    get shape() {
      const s = { ...t._zod.def.shape, ...r._zod.def.shape };
      return Ia(this, "shape", s), s;
    },
    get catchall() {
      return r._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return oa(t, i);
}
function xw(t, r, i) {
  const s = Pa(r._zod.def, {
    get shape() {
      const l = r._zod.def.shape, u = { ...l };
      if (i)
        for (const f in i) {
          if (!(f in l))
            throw new Error(`Unrecognized key: "${f}"`);
          i[f] && (u[f] = t ? new t({
            type: "optional",
            innerType: l[f]
          }) : l[f]);
        }
      else
        for (const f in l)
          u[f] = t ? new t({
            type: "optional",
            innerType: l[f]
          }) : l[f];
      return Ia(this, "shape", u), u;
    },
    checks: []
  });
  return oa(r, s);
}
function Ew(t, r, i) {
  const s = Pa(r._zod.def, {
    get shape() {
      const l = r._zod.def.shape, u = { ...l };
      if (i)
        for (const f in i) {
          if (!(f in u))
            throw new Error(`Unrecognized key: "${f}"`);
          i[f] && (u[f] = new t({
            type: "nonoptional",
            innerType: l[f]
          }));
        }
      else
        for (const f in l)
          u[f] = new t({
            type: "nonoptional",
            innerType: l[f]
          });
      return Ia(this, "shape", u), u;
    },
    checks: []
  });
  return oa(r, s);
}
function Ri(t, r = 0) {
  if (t.aborted === !0)
    return !0;
  for (let i = r; i < t.issues.length; i++)
    if (t.issues[i]?.continue !== !0)
      return !0;
  return !1;
}
function s1(t, r) {
  return r.map((i) => {
    var s;
    return (s = i).path ?? (s.path = []), i.path.unshift(t), i;
  });
}
function eu(t) {
  return typeof t == "string" ? t : t?.message;
}
function La(t, r, i) {
  const s = { ...t, path: t.path ?? [] };
  if (!t.message) {
    const l = eu(t.inst?._zod.def?.error?.(t)) ?? eu(r?.error?.(t)) ?? eu(i.customError?.(t)) ?? eu(i.localeError?.(t)) ?? "Invalid input";
    s.message = l;
  }
  return delete s.inst, delete s.continue, r?.reportInput || delete s.input, s;
}
function nh(t) {
  return Array.isArray(t) ? "array" : typeof t == "string" ? "string" : "unknown";
}
function ao(...t) {
  const [r, i, s] = t;
  return typeof r == "string" ? {
    message: r,
    code: "custom",
    input: i,
    inst: s
  } : { ...r };
}
const o1 = (t, r) => {
  t.name = "$ZodError", Object.defineProperty(t, "_zod", {
    value: t._zod,
    enumerable: !1
  }), Object.defineProperty(t, "issues", {
    value: r,
    enumerable: !1
  }), t.message = JSON.stringify(r, Ld, 2), Object.defineProperty(t, "toString", {
    value: () => t.message,
    enumerable: !1
  });
}, l1 = re("$ZodError", o1), u1 = re("$ZodError", o1, { Parent: Error });
function ww(t, r = (i) => i.message) {
  const i = {}, s = [];
  for (const l of t.issues)
    l.path.length > 0 ? (i[l.path[0]] = i[l.path[0]] || [], i[l.path[0]].push(r(l))) : s.push(r(l));
  return { formErrors: s, fieldErrors: i };
}
function Cw(t, r = (i) => i.message) {
  const i = { _errors: [] }, s = (l) => {
    for (const u of l.issues)
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
const rh = (t) => (r, i, s, l) => {
  const u = s ? Object.assign(s, { async: !1 }) : { async: !1 }, f = r._zod.run({ value: i, issues: [] }, u);
  if (f instanceof Promise)
    throw new Ii();
  if (f.issues.length) {
    const p = new (l?.Err ?? t)(f.issues.map((h) => La(h, u, za())));
    throw a1(p, l?.callee), p;
  }
  return f.value;
}, ah = (t) => async (r, i, s, l) => {
  const u = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let f = r._zod.run({ value: i, issues: [] }, u);
  if (f instanceof Promise && (f = await f), f.issues.length) {
    const p = new (l?.Err ?? t)(f.issues.map((h) => La(h, u, za())));
    throw a1(p, l?.callee), p;
  }
  return f.value;
}, Au = (t) => (r, i, s) => {
  const l = s ? { ...s, async: !1 } : { async: !1 }, u = r._zod.run({ value: i, issues: [] }, l);
  if (u instanceof Promise)
    throw new Ii();
  return u.issues.length ? {
    success: !1,
    error: new (t ?? l1)(u.issues.map((f) => La(f, l, za())))
  } : { success: !0, data: u.value };
}, Nw = /* @__PURE__ */ Au(u1), Tu = (t) => async (r, i, s) => {
  const l = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let u = r._zod.run({ value: i, issues: [] }, l);
  return u instanceof Promise && (u = await u), u.issues.length ? {
    success: !1,
    error: new t(u.issues.map((f) => La(f, l, za())))
  } : { success: !0, data: u.value };
}, Aw = /* @__PURE__ */ Tu(u1), Tw = (t) => (r, i, s) => {
  const l = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return rh(t)(r, i, l);
}, Ow = (t) => (r, i, s) => rh(t)(r, i, s), kw = (t) => async (r, i, s) => {
  const l = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return ah(t)(r, i, l);
}, jw = (t) => async (r, i, s) => ah(t)(r, i, s), Mw = (t) => (r, i, s) => {
  const l = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return Au(t)(r, i, l);
}, Dw = (t) => (r, i, s) => Au(t)(r, i, s), Rw = (t) => async (r, i, s) => {
  const l = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return Tu(t)(r, i, l);
}, zw = (t) => async (r, i, s) => Tu(t)(r, i, s), Lw = /^[cC][^\s-]{8,}$/, Iw = /^[0-9a-z]+$/, Pw = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Bw = /^[0-9a-vA-V]{20}$/, Uw = /^[A-Za-z0-9]{27}$/, Hw = /^[a-zA-Z0-9_-]{21}$/, qw = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Fw = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, ky = (t) => t ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Zw = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Gw = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Vw() {
  return new RegExp(Gw, "u");
}
const Yw = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, $w = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Xw = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Qw = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Jw = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, c1 = /^[A-Za-z0-9_-]*$/, Kw = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, Ww = /^\+(?:[0-9]){6,14}[0-9]$/, f1 = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", eC = /* @__PURE__ */ new RegExp(`^${f1}$`);
function d1(t) {
  const r = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof t.precision == "number" ? t.precision === -1 ? `${r}` : t.precision === 0 ? `${r}:[0-5]\\d` : `${r}:[0-5]\\d\\.\\d{${t.precision}}` : `${r}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function tC(t) {
  return new RegExp(`^${d1(t)}$`);
}
function nC(t) {
  const r = d1({ precision: t.precision }), i = ["Z"];
  t.local && i.push(""), t.offset && i.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const s = `${r}(?:${i.join("|")})`;
  return new RegExp(`^${f1}T(?:${s})$`);
}
const rC = (t) => {
  const r = t ? `[\\s\\S]{${t?.minimum ?? 0},${t?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${r}$`);
}, aC = /^-?\d+$/, iC = /^-?\d+(?:\.\d+)?/, sC = /^[^A-Z]*$/, oC = /^[^a-z]*$/, pn = /* @__PURE__ */ re("$ZodCheck", (t, r) => {
  var i;
  t._zod ?? (t._zod = {}), t._zod.def = r, (i = t._zod).onattach ?? (i.onattach = []);
}), h1 = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, p1 = /* @__PURE__ */ re("$ZodCheckLessThan", (t, r) => {
  pn.init(t, r);
  const i = h1[typeof r.value];
  t._zod.onattach.push((s) => {
    const l = s._zod.bag, u = (r.inclusive ? l.maximum : l.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    r.value < u && (r.inclusive ? l.maximum = r.value : l.exclusiveMaximum = r.value);
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
}), m1 = /* @__PURE__ */ re("$ZodCheckGreaterThan", (t, r) => {
  pn.init(t, r);
  const i = h1[typeof r.value];
  t._zod.onattach.push((s) => {
    const l = s._zod.bag, u = (r.inclusive ? l.minimum : l.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    r.value > u && (r.inclusive ? l.minimum = r.value : l.exclusiveMinimum = r.value);
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
}), lC = /* @__PURE__ */ re("$ZodCheckMultipleOf", (t, r) => {
  pn.init(t, r), t._zod.onattach.push((i) => {
    var s;
    (s = i._zod.bag).multipleOf ?? (s.multipleOf = r.value);
  }), t._zod.check = (i) => {
    if (typeof i.value != typeof r.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof i.value == "bigint" ? i.value % r.value === BigInt(0) : dw(i.value, r.value) === 0) || i.issues.push({
      origin: typeof i.value,
      code: "not_multiple_of",
      divisor: r.value,
      input: i.value,
      inst: t,
      continue: !r.abort
    });
  };
}), uC = /* @__PURE__ */ re("$ZodCheckNumberFormat", (t, r) => {
  pn.init(t, r), r.format = r.format || "float64";
  const i = r.format?.includes("int"), s = i ? "int" : "number", [l, u] = gw[r.format];
  t._zod.onattach.push((f) => {
    const p = f._zod.bag;
    p.format = r.format, p.minimum = l, p.maximum = u, i && (p.pattern = aC);
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
    p < l && f.issues.push({
      origin: "number",
      input: p,
      code: "too_small",
      minimum: l,
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
}), cC = /* @__PURE__ */ re("$ZodCheckMaxLength", (t, r) => {
  var i;
  pn.init(t, r), (i = t._zod.def).when ?? (i.when = (s) => {
    const l = s.value;
    return !eh(l) && l.length !== void 0;
  }), t._zod.onattach.push((s) => {
    const l = s._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    r.maximum < l && (s._zod.bag.maximum = r.maximum);
  }), t._zod.check = (s) => {
    const l = s.value;
    if (l.length <= r.maximum)
      return;
    const f = nh(l);
    s.issues.push({
      origin: f,
      code: "too_big",
      maximum: r.maximum,
      inclusive: !0,
      input: l,
      inst: t,
      continue: !r.abort
    });
  };
}), fC = /* @__PURE__ */ re("$ZodCheckMinLength", (t, r) => {
  var i;
  pn.init(t, r), (i = t._zod.def).when ?? (i.when = (s) => {
    const l = s.value;
    return !eh(l) && l.length !== void 0;
  }), t._zod.onattach.push((s) => {
    const l = s._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    r.minimum > l && (s._zod.bag.minimum = r.minimum);
  }), t._zod.check = (s) => {
    const l = s.value;
    if (l.length >= r.minimum)
      return;
    const f = nh(l);
    s.issues.push({
      origin: f,
      code: "too_small",
      minimum: r.minimum,
      inclusive: !0,
      input: l,
      inst: t,
      continue: !r.abort
    });
  };
}), dC = /* @__PURE__ */ re("$ZodCheckLengthEquals", (t, r) => {
  var i;
  pn.init(t, r), (i = t._zod.def).when ?? (i.when = (s) => {
    const l = s.value;
    return !eh(l) && l.length !== void 0;
  }), t._zod.onattach.push((s) => {
    const l = s._zod.bag;
    l.minimum = r.length, l.maximum = r.length, l.length = r.length;
  }), t._zod.check = (s) => {
    const l = s.value, u = l.length;
    if (u === r.length)
      return;
    const f = nh(l), p = u > r.length;
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
}), Ou = /* @__PURE__ */ re("$ZodCheckStringFormat", (t, r) => {
  var i, s;
  pn.init(t, r), t._zod.onattach.push((l) => {
    const u = l._zod.bag;
    u.format = r.format, r.pattern && (u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(r.pattern));
  }), r.pattern ? (i = t._zod).check ?? (i.check = (l) => {
    r.pattern.lastIndex = 0, !r.pattern.test(l.value) && l.issues.push({
      origin: "string",
      code: "invalid_format",
      format: r.format,
      input: l.value,
      ...r.pattern ? { pattern: r.pattern.toString() } : {},
      inst: t,
      continue: !r.abort
    });
  }) : (s = t._zod).check ?? (s.check = () => {
  });
}), hC = /* @__PURE__ */ re("$ZodCheckRegex", (t, r) => {
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
}), pC = /* @__PURE__ */ re("$ZodCheckLowerCase", (t, r) => {
  r.pattern ?? (r.pattern = sC), Ou.init(t, r);
}), mC = /* @__PURE__ */ re("$ZodCheckUpperCase", (t, r) => {
  r.pattern ?? (r.pattern = oC), Ou.init(t, r);
}), gC = /* @__PURE__ */ re("$ZodCheckIncludes", (t, r) => {
  pn.init(t, r);
  const i = Nu(r.includes), s = new RegExp(typeof r.position == "number" ? `^.{${r.position}}${i}` : i);
  r.pattern = s, t._zod.onattach.push((l) => {
    const u = l._zod.bag;
    u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(s);
  }), t._zod.check = (l) => {
    l.value.includes(r.includes, r.position) || l.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: r.includes,
      input: l.value,
      inst: t,
      continue: !r.abort
    });
  };
}), vC = /* @__PURE__ */ re("$ZodCheckStartsWith", (t, r) => {
  pn.init(t, r);
  const i = new RegExp(`^${Nu(r.prefix)}.*`);
  r.pattern ?? (r.pattern = i), t._zod.onattach.push((s) => {
    const l = s._zod.bag;
    l.patterns ?? (l.patterns = /* @__PURE__ */ new Set()), l.patterns.add(i);
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
}), yC = /* @__PURE__ */ re("$ZodCheckEndsWith", (t, r) => {
  pn.init(t, r);
  const i = new RegExp(`.*${Nu(r.suffix)}$`);
  r.pattern ?? (r.pattern = i), t._zod.onattach.push((s) => {
    const l = s._zod.bag;
    l.patterns ?? (l.patterns = /* @__PURE__ */ new Set()), l.patterns.add(i);
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
}), bC = /* @__PURE__ */ re("$ZodCheckOverwrite", (t, r) => {
  pn.init(t, r), t._zod.check = (i) => {
    i.value = r.tx(i.value);
  };
});
class _C {
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
`).filter((f) => f), l = Math.min(...s.map((f) => f.length - f.trimStart().length)), u = s.map((f) => f.slice(l)).map((f) => " ".repeat(this.indent * 2) + f);
    for (const f of u)
      this.content.push(f);
  }
  compile() {
    const r = Function, i = this?.args, l = [...(this?.content ?? [""]).map((u) => `  ${u}`)];
    return new r(...i, l.join(`
`));
  }
}
const SC = {
  major: 4,
  minor: 1,
  patch: 12
}, Ot = /* @__PURE__ */ re("$ZodType", (t, r) => {
  var i;
  t ?? (t = {}), t._zod.def = r, t._zod.bag = t._zod.bag || {}, t._zod.version = SC;
  const s = [...t._zod.def.checks ?? []];
  t._zod.traits.has("$ZodCheck") && s.unshift(t);
  for (const l of s)
    for (const u of l._zod.onattach)
      u(t);
  if (s.length === 0)
    (i = t._zod).deferred ?? (i.deferred = []), t._zod.deferred?.push(() => {
      t._zod.run = t._zod.parse;
    });
  else {
    const l = (f, p, h) => {
      let g = Ri(f), m;
      for (const S of p) {
        if (S._zod.def.when) {
          if (!S._zod.def.when(f))
            continue;
        } else if (g)
          continue;
        const v = f.issues.length, y = S._zod.check(f);
        if (y instanceof Promise && h?.async === !1)
          throw new Ii();
        if (m || y instanceof Promise)
          m = (m ?? Promise.resolve()).then(async () => {
            await y, f.issues.length !== v && (g || (g = Ri(f, v)));
          });
        else {
          if (f.issues.length === v)
            continue;
          g || (g = Ri(f, v));
        }
      }
      return m ? m.then(() => f) : f;
    }, u = (f, p, h) => {
      if (Ri(f))
        return f.aborted = !0, f;
      const g = l(p, s, h);
      if (g instanceof Promise) {
        if (h.async === !1)
          throw new Ii();
        return g.then((m) => t._zod.parse(m, h));
      }
      return t._zod.parse(g, h);
    };
    t._zod.run = (f, p) => {
      if (p.skipChecks)
        return t._zod.parse(f, p);
      if (p.direction === "backward") {
        const g = t._zod.parse({ value: f.value, issues: [] }, { ...p, skipChecks: !0 });
        return g instanceof Promise ? g.then((m) => u(m, f, p)) : u(g, f, p);
      }
      const h = t._zod.parse(f, p);
      if (h instanceof Promise) {
        if (p.async === !1)
          throw new Ii();
        return h.then((g) => l(g, s, p));
      }
      return l(h, s, p);
    };
  }
  t["~standard"] = {
    validate: (l) => {
      try {
        const u = Nw(t, l);
        return u.success ? { value: u.data } : { issues: u.error?.issues };
      } catch {
        return Aw(t, l).then((f) => f.success ? { value: f.data } : { issues: f.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), ih = /* @__PURE__ */ re("$ZodString", (t, r) => {
  Ot.init(t, r), t._zod.pattern = [...t?._zod.bag?.patterns ?? []].pop() ?? rC(t._zod.bag), t._zod.parse = (i, s) => {
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
}), ht = /* @__PURE__ */ re("$ZodStringFormat", (t, r) => {
  Ou.init(t, r), ih.init(t, r);
}), xC = /* @__PURE__ */ re("$ZodGUID", (t, r) => {
  r.pattern ?? (r.pattern = Fw), ht.init(t, r);
}), EC = /* @__PURE__ */ re("$ZodUUID", (t, r) => {
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
  ht.init(t, r);
}), wC = /* @__PURE__ */ re("$ZodEmail", (t, r) => {
  r.pattern ?? (r.pattern = Zw), ht.init(t, r);
}), CC = /* @__PURE__ */ re("$ZodURL", (t, r) => {
  ht.init(t, r), t._zod.check = (i) => {
    try {
      const s = i.value.trim(), l = new URL(s);
      r.hostname && (r.hostname.lastIndex = 0, r.hostname.test(l.hostname) || i.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: Kw.source,
        input: i.value,
        inst: t,
        continue: !r.abort
      })), r.protocol && (r.protocol.lastIndex = 0, r.protocol.test(l.protocol.endsWith(":") ? l.protocol.slice(0, -1) : l.protocol) || i.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: r.protocol.source,
        input: i.value,
        inst: t,
        continue: !r.abort
      })), r.normalize ? i.value = l.href : i.value = s;
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
}), NC = /* @__PURE__ */ re("$ZodEmoji", (t, r) => {
  r.pattern ?? (r.pattern = Vw()), ht.init(t, r);
}), AC = /* @__PURE__ */ re("$ZodNanoID", (t, r) => {
  r.pattern ?? (r.pattern = Hw), ht.init(t, r);
}), TC = /* @__PURE__ */ re("$ZodCUID", (t, r) => {
  r.pattern ?? (r.pattern = Lw), ht.init(t, r);
}), OC = /* @__PURE__ */ re("$ZodCUID2", (t, r) => {
  r.pattern ?? (r.pattern = Iw), ht.init(t, r);
}), kC = /* @__PURE__ */ re("$ZodULID", (t, r) => {
  r.pattern ?? (r.pattern = Pw), ht.init(t, r);
}), jC = /* @__PURE__ */ re("$ZodXID", (t, r) => {
  r.pattern ?? (r.pattern = Bw), ht.init(t, r);
}), MC = /* @__PURE__ */ re("$ZodKSUID", (t, r) => {
  r.pattern ?? (r.pattern = Uw), ht.init(t, r);
}), DC = /* @__PURE__ */ re("$ZodISODateTime", (t, r) => {
  r.pattern ?? (r.pattern = nC(r)), ht.init(t, r);
}), RC = /* @__PURE__ */ re("$ZodISODate", (t, r) => {
  r.pattern ?? (r.pattern = eC), ht.init(t, r);
}), zC = /* @__PURE__ */ re("$ZodISOTime", (t, r) => {
  r.pattern ?? (r.pattern = tC(r)), ht.init(t, r);
}), LC = /* @__PURE__ */ re("$ZodISODuration", (t, r) => {
  r.pattern ?? (r.pattern = qw), ht.init(t, r);
}), IC = /* @__PURE__ */ re("$ZodIPv4", (t, r) => {
  r.pattern ?? (r.pattern = Yw), ht.init(t, r), t._zod.onattach.push((i) => {
    const s = i._zod.bag;
    s.format = "ipv4";
  });
}), PC = /* @__PURE__ */ re("$ZodIPv6", (t, r) => {
  r.pattern ?? (r.pattern = $w), ht.init(t, r), t._zod.onattach.push((i) => {
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
}), BC = /* @__PURE__ */ re("$ZodCIDRv4", (t, r) => {
  r.pattern ?? (r.pattern = Xw), ht.init(t, r);
}), UC = /* @__PURE__ */ re("$ZodCIDRv6", (t, r) => {
  r.pattern ?? (r.pattern = Qw), ht.init(t, r), t._zod.check = (i) => {
    const s = i.value.split("/");
    try {
      if (s.length !== 2)
        throw new Error();
      const [l, u] = s;
      if (!u)
        throw new Error();
      const f = Number(u);
      if (`${f}` !== u)
        throw new Error();
      if (f < 0 || f > 128)
        throw new Error();
      new URL(`http://[${l}]`);
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
function g1(t) {
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
const HC = /* @__PURE__ */ re("$ZodBase64", (t, r) => {
  r.pattern ?? (r.pattern = Jw), ht.init(t, r), t._zod.onattach.push((i) => {
    i._zod.bag.contentEncoding = "base64";
  }), t._zod.check = (i) => {
    g1(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64",
      input: i.value,
      inst: t,
      continue: !r.abort
    });
  };
});
function qC(t) {
  if (!c1.test(t))
    return !1;
  const r = t.replace(/[-_]/g, (s) => s === "-" ? "+" : "/"), i = r.padEnd(Math.ceil(r.length / 4) * 4, "=");
  return g1(i);
}
const FC = /* @__PURE__ */ re("$ZodBase64URL", (t, r) => {
  r.pattern ?? (r.pattern = c1), ht.init(t, r), t._zod.onattach.push((i) => {
    i._zod.bag.contentEncoding = "base64url";
  }), t._zod.check = (i) => {
    qC(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: i.value,
      inst: t,
      continue: !r.abort
    });
  };
}), ZC = /* @__PURE__ */ re("$ZodE164", (t, r) => {
  r.pattern ?? (r.pattern = Ww), ht.init(t, r);
});
function GC(t, r = null) {
  try {
    const i = t.split(".");
    if (i.length !== 3)
      return !1;
    const [s] = i;
    if (!s)
      return !1;
    const l = JSON.parse(atob(s));
    return !("typ" in l && l?.typ !== "JWT" || !l.alg || r && (!("alg" in l) || l.alg !== r));
  } catch {
    return !1;
  }
}
const VC = /* @__PURE__ */ re("$ZodJWT", (t, r) => {
  ht.init(t, r), t._zod.check = (i) => {
    GC(i.value, r.alg) || i.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: i.value,
      inst: t,
      continue: !r.abort
    });
  };
}), v1 = /* @__PURE__ */ re("$ZodNumber", (t, r) => {
  Ot.init(t, r), t._zod.pattern = t._zod.bag.pattern ?? iC, t._zod.parse = (i, s) => {
    if (r.coerce)
      try {
        i.value = Number(i.value);
      } catch {
      }
    const l = i.value;
    if (typeof l == "number" && !Number.isNaN(l) && Number.isFinite(l))
      return i;
    const u = typeof l == "number" ? Number.isNaN(l) ? "NaN" : Number.isFinite(l) ? void 0 : "Infinity" : void 0;
    return i.issues.push({
      expected: "number",
      code: "invalid_type",
      input: l,
      inst: t,
      ...u ? { received: u } : {}
    }), i;
  };
}), YC = /* @__PURE__ */ re("$ZodNumber", (t, r) => {
  uC.init(t, r), v1.init(t, r);
}), $C = /* @__PURE__ */ re("$ZodUnknown", (t, r) => {
  Ot.init(t, r), t._zod.parse = (i) => i;
}), XC = /* @__PURE__ */ re("$ZodNever", (t, r) => {
  Ot.init(t, r), t._zod.parse = (i, s) => (i.issues.push({
    expected: "never",
    code: "invalid_type",
    input: i.value,
    inst: t
  }), i);
});
function jy(t, r, i) {
  t.issues.length && r.issues.push(...s1(i, t.issues)), r.value[i] = t.value;
}
const QC = /* @__PURE__ */ re("$ZodArray", (t, r) => {
  Ot.init(t, r), t._zod.parse = (i, s) => {
    const l = i.value;
    if (!Array.isArray(l))
      return i.issues.push({
        expected: "array",
        code: "invalid_type",
        input: l,
        inst: t
      }), i;
    i.value = Array(l.length);
    const u = [];
    for (let f = 0; f < l.length; f++) {
      const p = l[f], h = r.element._zod.run({
        value: p,
        issues: []
      }, s);
      h instanceof Promise ? u.push(h.then((g) => jy(g, i, f))) : jy(h, i, f);
    }
    return u.length ? Promise.all(u).then(() => i) : i;
  };
});
function Su(t, r, i, s) {
  t.issues.length && r.issues.push(...s1(i, t.issues)), t.value === void 0 ? i in s && (r.value[i] = void 0) : r.value[i] = t.value;
}
function y1(t) {
  const r = Object.keys(t.shape);
  for (const s of r)
    if (!t.shape?.[s]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${s}": expected a Zod schema`);
  const i = mw(t.shape);
  return {
    ...t,
    keys: r,
    keySet: new Set(r),
    numKeys: r.length,
    optionalKeys: new Set(i)
  };
}
function b1(t, r, i, s, l, u) {
  const f = [], p = l.keySet, h = l.catchall._zod, g = h.def.type;
  for (const m of Object.keys(r)) {
    if (p.has(m))
      continue;
    if (g === "never") {
      f.push(m);
      continue;
    }
    const S = h.run({ value: r[m], issues: [] }, s);
    S instanceof Promise ? t.push(S.then((v) => Su(v, i, m, r))) : Su(S, i, m, r);
  }
  return f.length && i.issues.push({
    code: "unrecognized_keys",
    keys: f,
    input: r,
    inst: u
  }), t.length ? Promise.all(t).then(() => i) : i;
}
const JC = /* @__PURE__ */ re("$ZodObject", (t, r) => {
  if (Ot.init(t, r), !Object.getOwnPropertyDescriptor(r, "shape")?.get) {
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
  const s = Wd(() => y1(r));
  ut(t._zod, "propValues", () => {
    const p = r.shape, h = {};
    for (const g in p) {
      const m = p[g]._zod;
      if (m.values) {
        h[g] ?? (h[g] = /* @__PURE__ */ new Set());
        for (const S of m.values)
          h[g].add(S);
      }
    }
    return h;
  });
  const l = _u, u = r.catchall;
  let f;
  t._zod.parse = (p, h) => {
    f ?? (f = s.value);
    const g = p.value;
    if (!l(g))
      return p.issues.push({
        expected: "object",
        code: "invalid_type",
        input: g,
        inst: t
      }), p;
    p.value = {};
    const m = [], S = f.shape;
    for (const v of f.keys) {
      const d = S[v]._zod.run({ value: g[v], issues: [] }, h);
      d instanceof Promise ? m.push(d.then((x) => Su(x, p, v, g))) : Su(d, p, v, g);
    }
    return u ? b1(m, g, p, h, s.value, t) : m.length ? Promise.all(m).then(() => p) : p;
  };
}), KC = /* @__PURE__ */ re("$ZodObjectJIT", (t, r) => {
  JC.init(t, r);
  const i = t._zod.parse, s = Wd(() => y1(r)), l = (v) => {
    const y = new _C(["shape", "payload", "ctx"]), d = s.value, x = (T) => {
      const E = Oy(T);
      return `shape[${E}]._zod.run({ value: input[${E}], issues: [] }, ctx)`;
    };
    y.write("const input = payload.value;");
    const w = /* @__PURE__ */ Object.create(null);
    let A = 0;
    for (const T of d.keys)
      w[T] = `key_${A++}`;
    y.write("const newResult = {};");
    for (const T of d.keys) {
      const E = w[T], O = Oy(T);
      y.write(`const ${E} = ${x(T)};`), y.write(`
        if (${E}.issues.length) {
          payload.issues = payload.issues.concat(${E}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${O}, ...iss.path] : [${O}]
          })));
        }
        
        
        if (${E}.value === undefined) {
          if (${O} in input) {
            newResult[${O}] = undefined;
          }
        } else {
          newResult[${O}] = ${E}.value;
        }
        
      `);
    }
    y.write("payload.value = newResult;"), y.write("return payload;");
    const C = y.compile();
    return (T, E) => C(v, T, E);
  };
  let u;
  const f = _u, p = !n1.jitless, g = p && hw.value, m = r.catchall;
  let S;
  t._zod.parse = (v, y) => {
    S ?? (S = s.value);
    const d = v.value;
    return f(d) ? p && g && y?.async === !1 && y.jitless !== !0 ? (u || (u = l(r.shape)), v = u(v, y), m ? b1([], d, v, y, S, t) : v) : i(v, y) : (v.issues.push({
      expected: "object",
      code: "invalid_type",
      input: d,
      inst: t
    }), v);
  };
});
function My(t, r, i, s) {
  for (const u of t)
    if (u.issues.length === 0)
      return r.value = u.value, r;
  const l = t.filter((u) => !Ri(u));
  return l.length === 1 ? (r.value = l[0].value, l[0]) : (r.issues.push({
    code: "invalid_union",
    input: r.value,
    inst: i,
    errors: t.map((u) => u.issues.map((f) => La(f, s, za())))
  }), r);
}
const WC = /* @__PURE__ */ re("$ZodUnion", (t, r) => {
  Ot.init(t, r), ut(t._zod, "optin", () => r.options.some((l) => l._zod.optin === "optional") ? "optional" : void 0), ut(t._zod, "optout", () => r.options.some((l) => l._zod.optout === "optional") ? "optional" : void 0), ut(t._zod, "values", () => {
    if (r.options.every((l) => l._zod.values))
      return new Set(r.options.flatMap((l) => Array.from(l._zod.values)));
  }), ut(t._zod, "pattern", () => {
    if (r.options.every((l) => l._zod.pattern)) {
      const l = r.options.map((u) => u._zod.pattern);
      return new RegExp(`^(${l.map((u) => th(u.source)).join("|")})$`);
    }
  });
  const i = r.options.length === 1, s = r.options[0]._zod.run;
  t._zod.parse = (l, u) => {
    if (i)
      return s(l, u);
    let f = !1;
    const p = [];
    for (const h of r.options) {
      const g = h._zod.run({
        value: l.value,
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
    return f ? Promise.all(p).then((h) => My(h, l, t, u)) : My(p, l, t, u);
  };
}), eN = /* @__PURE__ */ re("$ZodIntersection", (t, r) => {
  Ot.init(t, r), t._zod.parse = (i, s) => {
    const l = i.value, u = r.left._zod.run({ value: l, issues: [] }, s), f = r.right._zod.run({ value: l, issues: [] }, s);
    return u instanceof Promise || f instanceof Promise ? Promise.all([u, f]).then(([h, g]) => Dy(i, h, g)) : Dy(i, u, f);
  };
});
function Id(t, r) {
  if (t === r)
    return { valid: !0, data: t };
  if (t instanceof Date && r instanceof Date && +t == +r)
    return { valid: !0, data: t };
  if (ro(t) && ro(r)) {
    const i = Object.keys(r), s = Object.keys(t).filter((u) => i.indexOf(u) !== -1), l = { ...t, ...r };
    for (const u of s) {
      const f = Id(t[u], r[u]);
      if (!f.valid)
        return {
          valid: !1,
          mergeErrorPath: [u, ...f.mergeErrorPath]
        };
      l[u] = f.data;
    }
    return { valid: !0, data: l };
  }
  if (Array.isArray(t) && Array.isArray(r)) {
    if (t.length !== r.length)
      return { valid: !1, mergeErrorPath: [] };
    const i = [];
    for (let s = 0; s < t.length; s++) {
      const l = t[s], u = r[s], f = Id(l, u);
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
function Dy(t, r, i) {
  if (r.issues.length && t.issues.push(...r.issues), i.issues.length && t.issues.push(...i.issues), Ri(t))
    return t;
  const s = Id(r.value, i.value);
  if (!s.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`);
  return t.value = s.data, t;
}
const tN = /* @__PURE__ */ re("$ZodEnum", (t, r) => {
  Ot.init(t, r);
  const i = r1(r.entries), s = new Set(i);
  t._zod.values = s, t._zod.pattern = new RegExp(`^(${i.filter((l) => pw.has(typeof l)).map((l) => typeof l == "string" ? Nu(l) : l.toString()).join("|")})$`), t._zod.parse = (l, u) => {
    const f = l.value;
    return s.has(f) || l.issues.push({
      code: "invalid_value",
      values: i,
      input: f,
      inst: t
    }), l;
  };
}), nN = /* @__PURE__ */ re("$ZodTransform", (t, r) => {
  Ot.init(t, r), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      throw new t1(t.constructor.name);
    const l = r.transform(i.value, i);
    if (s.async)
      return (l instanceof Promise ? l : Promise.resolve(l)).then((f) => (i.value = f, i));
    if (l instanceof Promise)
      throw new Ii();
    return i.value = l, i;
  };
});
function Ry(t, r) {
  return t.issues.length && r === void 0 ? { issues: [], value: void 0 } : t;
}
const rN = /* @__PURE__ */ re("$ZodOptional", (t, r) => {
  Ot.init(t, r), t._zod.optin = "optional", t._zod.optout = "optional", ut(t._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, void 0]) : void 0), ut(t._zod, "pattern", () => {
    const i = r.innerType._zod.pattern;
    return i ? new RegExp(`^(${th(i.source)})?$`) : void 0;
  }), t._zod.parse = (i, s) => {
    if (r.innerType._zod.optin === "optional") {
      const l = r.innerType._zod.run(i, s);
      return l instanceof Promise ? l.then((u) => Ry(u, i.value)) : Ry(l, i.value);
    }
    return i.value === void 0 ? i : r.innerType._zod.run(i, s);
  };
}), aN = /* @__PURE__ */ re("$ZodNullable", (t, r) => {
  Ot.init(t, r), ut(t._zod, "optin", () => r.innerType._zod.optin), ut(t._zod, "optout", () => r.innerType._zod.optout), ut(t._zod, "pattern", () => {
    const i = r.innerType._zod.pattern;
    return i ? new RegExp(`^(${th(i.source)}|null)$`) : void 0;
  }), ut(t._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, null]) : void 0), t._zod.parse = (i, s) => i.value === null ? i : r.innerType._zod.run(i, s);
}), iN = /* @__PURE__ */ re("$ZodDefault", (t, r) => {
  Ot.init(t, r), t._zod.optin = "optional", ut(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(i, s);
    if (i.value === void 0)
      return i.value = r.defaultValue, i;
    const l = r.innerType._zod.run(i, s);
    return l instanceof Promise ? l.then((u) => zy(u, r)) : zy(l, r);
  };
});
function zy(t, r) {
  return t.value === void 0 && (t.value = r.defaultValue), t;
}
const sN = /* @__PURE__ */ re("$ZodPrefault", (t, r) => {
  Ot.init(t, r), t._zod.optin = "optional", ut(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (i, s) => (s.direction === "backward" || i.value === void 0 && (i.value = r.defaultValue), r.innerType._zod.run(i, s));
}), oN = /* @__PURE__ */ re("$ZodNonOptional", (t, r) => {
  Ot.init(t, r), ut(t._zod, "values", () => {
    const i = r.innerType._zod.values;
    return i ? new Set([...i].filter((s) => s !== void 0)) : void 0;
  }), t._zod.parse = (i, s) => {
    const l = r.innerType._zod.run(i, s);
    return l instanceof Promise ? l.then((u) => Ly(u, t)) : Ly(l, t);
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
const lN = /* @__PURE__ */ re("$ZodCatch", (t, r) => {
  Ot.init(t, r), ut(t._zod, "optin", () => r.innerType._zod.optin), ut(t._zod, "optout", () => r.innerType._zod.optout), ut(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(i, s);
    const l = r.innerType._zod.run(i, s);
    return l instanceof Promise ? l.then((u) => (i.value = u.value, u.issues.length && (i.value = r.catchValue({
      ...i,
      error: {
        issues: u.issues.map((f) => La(f, s, za()))
      },
      input: i.value
    }), i.issues = []), i)) : (i.value = l.value, l.issues.length && (i.value = r.catchValue({
      ...i,
      error: {
        issues: l.issues.map((u) => La(u, s, za()))
      },
      input: i.value
    }), i.issues = []), i);
  };
}), uN = /* @__PURE__ */ re("$ZodPipe", (t, r) => {
  Ot.init(t, r), ut(t._zod, "values", () => r.in._zod.values), ut(t._zod, "optin", () => r.in._zod.optin), ut(t._zod, "optout", () => r.out._zod.optout), ut(t._zod, "propValues", () => r.in._zod.propValues), t._zod.parse = (i, s) => {
    if (s.direction === "backward") {
      const u = r.out._zod.run(i, s);
      return u instanceof Promise ? u.then((f) => tu(f, r.in, s)) : tu(u, r.in, s);
    }
    const l = r.in._zod.run(i, s);
    return l instanceof Promise ? l.then((u) => tu(u, r.out, s)) : tu(l, r.out, s);
  };
});
function tu(t, r, i) {
  return t.issues.length ? (t.aborted = !0, t) : r._zod.run({ value: t.value, issues: t.issues }, i);
}
const cN = /* @__PURE__ */ re("$ZodReadonly", (t, r) => {
  Ot.init(t, r), ut(t._zod, "propValues", () => r.innerType._zod.propValues), ut(t._zod, "values", () => r.innerType._zod.values), ut(t._zod, "optin", () => r.innerType._zod.optin), ut(t._zod, "optout", () => r.innerType._zod.optout), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(i, s);
    const l = r.innerType._zod.run(i, s);
    return l instanceof Promise ? l.then(Iy) : Iy(l);
  };
});
function Iy(t) {
  return t.value = Object.freeze(t.value), t;
}
const fN = /* @__PURE__ */ re("$ZodCustom", (t, r) => {
  pn.init(t, r), Ot.init(t, r), t._zod.parse = (i, s) => i, t._zod.check = (i) => {
    const s = i.value, l = r.fn(s);
    if (l instanceof Promise)
      return l.then((u) => Py(u, i, s, t));
    Py(l, i, s, t);
  };
});
function Py(t, r, i, s) {
  if (!t) {
    const l = {
      code: "custom",
      input: i,
      inst: s,
      // incorporates params.error into issue reporting
      path: [...s._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !s._zod.def.abort
      // params: inst._zod.def.params,
    };
    s._zod.def.params && (l.params = s._zod.def.params), r.issues.push(ao(l));
  }
}
class _1 {
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
      const l = { ...s, ...this._map.get(r) };
      return Object.keys(l).length ? l : void 0;
    }
    return this._map.get(r);
  }
  has(r) {
    return this._map.has(r);
  }
}
function dN() {
  return new _1();
}
const Js = /* @__PURE__ */ dN();
function hN(t, r) {
  return new t({
    type: "string",
    ..._e(r)
  });
}
function pN(t, r) {
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
function mN(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function gN(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ..._e(r)
  });
}
function vN(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ..._e(r)
  });
}
function yN(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ..._e(r)
  });
}
function bN(t, r) {
  return new t({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function _N(t, r) {
  return new t({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function SN(t, r) {
  return new t({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function xN(t, r) {
  return new t({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function EN(t, r) {
  return new t({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function wN(t, r) {
  return new t({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function CN(t, r) {
  return new t({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function NN(t, r) {
  return new t({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function AN(t, r) {
  return new t({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function TN(t, r) {
  return new t({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function ON(t, r) {
  return new t({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function kN(t, r) {
  return new t({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function jN(t, r) {
  return new t({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function MN(t, r) {
  return new t({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function DN(t, r) {
  return new t({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function RN(t, r) {
  return new t({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function zN(t, r) {
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
function LN(t, r) {
  return new t({
    type: "string",
    format: "date",
    check: "string_format",
    ..._e(r)
  });
}
function IN(t, r) {
  return new t({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ..._e(r)
  });
}
function PN(t, r) {
  return new t({
    type: "string",
    format: "duration",
    check: "string_format",
    ..._e(r)
  });
}
function BN(t, r) {
  return new t({
    type: "number",
    checks: [],
    ..._e(r)
  });
}
function UN(t, r) {
  return new t({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ..._e(r)
  });
}
function HN(t) {
  return new t({
    type: "unknown"
  });
}
function qN(t, r) {
  return new t({
    type: "never",
    ..._e(r)
  });
}
function Uy(t, r) {
  return new p1({
    check: "less_than",
    ..._e(r),
    value: t,
    inclusive: !1
  });
}
function md(t, r) {
  return new p1({
    check: "less_than",
    ..._e(r),
    value: t,
    inclusive: !0
  });
}
function Hy(t, r) {
  return new m1({
    check: "greater_than",
    ..._e(r),
    value: t,
    inclusive: !1
  });
}
function gd(t, r) {
  return new m1({
    check: "greater_than",
    ..._e(r),
    value: t,
    inclusive: !0
  });
}
function qy(t, r) {
  return new lC({
    check: "multiple_of",
    ..._e(r),
    value: t
  });
}
function S1(t, r) {
  return new cC({
    check: "max_length",
    ..._e(r),
    maximum: t
  });
}
function xu(t, r) {
  return new fC({
    check: "min_length",
    ..._e(r),
    minimum: t
  });
}
function x1(t, r) {
  return new dC({
    check: "length_equals",
    ..._e(r),
    length: t
  });
}
function FN(t, r) {
  return new hC({
    check: "string_format",
    format: "regex",
    ..._e(r),
    pattern: t
  });
}
function ZN(t) {
  return new pC({
    check: "string_format",
    format: "lowercase",
    ..._e(t)
  });
}
function GN(t) {
  return new mC({
    check: "string_format",
    format: "uppercase",
    ..._e(t)
  });
}
function VN(t, r) {
  return new gC({
    check: "string_format",
    format: "includes",
    ..._e(r),
    includes: t
  });
}
function YN(t, r) {
  return new vC({
    check: "string_format",
    format: "starts_with",
    ..._e(r),
    prefix: t
  });
}
function $N(t, r) {
  return new yC({
    check: "string_format",
    format: "ends_with",
    ..._e(r),
    suffix: t
  });
}
function lo(t) {
  return new bC({
    check: "overwrite",
    tx: t
  });
}
function XN(t) {
  return lo((r) => r.normalize(t));
}
function QN() {
  return lo((t) => t.trim());
}
function JN() {
  return lo((t) => t.toLowerCase());
}
function KN() {
  return lo((t) => t.toUpperCase());
}
function WN(t, r, i) {
  return new t({
    type: "array",
    element: r,
    // get element() {
    //   return element;
    // },
    ..._e(i)
  });
}
function e3(t, r, i) {
  return new t({
    type: "custom",
    check: "custom",
    fn: r,
    ..._e(i)
  });
}
function t3(t) {
  const r = n3((i) => (i.addIssue = (s) => {
    if (typeof s == "string")
      i.issues.push(ao(s, i.value, r._zod.def));
    else {
      const l = s;
      l.fatal && (l.continue = !1), l.code ?? (l.code = "custom"), l.input ?? (l.input = i.value), l.inst ?? (l.inst = r), l.continue ?? (l.continue = !r._zod.def.abort), i.issues.push(ao(l));
    }
  }, t(i.value, i)));
  return r;
}
function n3(t, r) {
  const i = new pn({
    check: "custom",
    ..._e(r)
  });
  return i._zod.check = t, i;
}
class Fy {
  constructor(r) {
    this.counter = 0, this.metadataRegistry = r?.metadata ?? Js, this.target = r?.target ?? "draft-2020-12", this.unrepresentable = r?.unrepresentable ?? "throw", this.override = r?.override ?? (() => {
    }), this.io = r?.io ?? "output", this.seen = /* @__PURE__ */ new Map();
  }
  process(r, i = { path: [], schemaPath: [] }) {
    var s;
    const l = r._zod.def, u = {
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
      const S = {
        ...i,
        schemaPath: [...i.schemaPath, r],
        path: i.path
      }, v = r._zod.parent;
      if (v)
        p.ref = v, this.process(v, S), this.seen.get(v).isParent = !0;
      else {
        const y = p.schema;
        switch (l.type) {
          case "string": {
            const d = y;
            d.type = "string";
            const { minimum: x, maximum: w, format: A, patterns: C, contentEncoding: T } = r._zod.bag;
            if (typeof x == "number" && (d.minLength = x), typeof w == "number" && (d.maxLength = w), A && (d.format = u[A] ?? A, d.format === "" && delete d.format), T && (d.contentEncoding = T), C && C.size > 0) {
              const E = [...C];
              E.length === 1 ? d.pattern = E[0].source : E.length > 1 && (p.schema.allOf = [
                ...E.map((O) => ({
                  ...this.target === "draft-7" || this.target === "draft-4" || this.target === "openapi-3.0" ? { type: "string" } : {},
                  pattern: O.source
                }))
              ]);
            }
            break;
          }
          case "number": {
            const d = y, { minimum: x, maximum: w, format: A, multipleOf: C, exclusiveMaximum: T, exclusiveMinimum: E } = r._zod.bag;
            typeof A == "string" && A.includes("int") ? d.type = "integer" : d.type = "number", typeof E == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (d.minimum = E, d.exclusiveMinimum = !0) : d.exclusiveMinimum = E), typeof x == "number" && (d.minimum = x, typeof E == "number" && this.target !== "draft-4" && (E >= x ? delete d.minimum : delete d.exclusiveMinimum)), typeof T == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (d.maximum = T, d.exclusiveMaximum = !0) : d.exclusiveMaximum = T), typeof w == "number" && (d.maximum = w, typeof T == "number" && this.target !== "draft-4" && (T <= w ? delete d.maximum : delete d.exclusiveMaximum)), typeof C == "number" && (d.multipleOf = C);
            break;
          }
          case "boolean": {
            const d = y;
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
            this.target === "openapi-3.0" ? (y.type = "string", y.nullable = !0, y.enum = [null]) : y.type = "null";
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
            y.not = {};
            break;
          }
          case "date": {
            if (this.unrepresentable === "throw")
              throw new Error("Date cannot be represented in JSON Schema");
            break;
          }
          case "array": {
            const d = y, { minimum: x, maximum: w } = r._zod.bag;
            typeof x == "number" && (d.minItems = x), typeof w == "number" && (d.maxItems = w), d.type = "array", d.items = this.process(l.element, { ...S, path: [...S.path, "items"] });
            break;
          }
          case "object": {
            const d = y;
            d.type = "object", d.properties = {};
            const x = l.shape;
            for (const C in x)
              d.properties[C] = this.process(x[C], {
                ...S,
                path: [...S.path, "properties", C]
              });
            const w = new Set(Object.keys(x)), A = new Set([...w].filter((C) => {
              const T = l.shape[C]._zod;
              return this.io === "input" ? T.optin === void 0 : T.optout === void 0;
            }));
            A.size > 0 && (d.required = Array.from(A)), l.catchall?._zod.def.type === "never" ? d.additionalProperties = !1 : l.catchall ? l.catchall && (d.additionalProperties = this.process(l.catchall, {
              ...S,
              path: [...S.path, "additionalProperties"]
            })) : this.io === "output" && (d.additionalProperties = !1);
            break;
          }
          case "union": {
            const d = y, x = l.options.map((w, A) => this.process(w, {
              ...S,
              path: [...S.path, "anyOf", A]
            }));
            d.anyOf = x;
            break;
          }
          case "intersection": {
            const d = y, x = this.process(l.left, {
              ...S,
              path: [...S.path, "allOf", 0]
            }), w = this.process(l.right, {
              ...S,
              path: [...S.path, "allOf", 1]
            }), A = (T) => "allOf" in T && Object.keys(T).length === 1, C = [
              ...A(x) ? x.allOf : [x],
              ...A(w) ? w.allOf : [w]
            ];
            d.allOf = C;
            break;
          }
          case "tuple": {
            const d = y;
            d.type = "array";
            const x = this.target === "draft-2020-12" ? "prefixItems" : "items", w = this.target === "draft-2020-12" || this.target === "openapi-3.0" ? "items" : "additionalItems", A = l.items.map((O, j) => this.process(O, {
              ...S,
              path: [...S.path, x, j]
            })), C = l.rest ? this.process(l.rest, {
              ...S,
              path: [...S.path, w, ...this.target === "openapi-3.0" ? [l.items.length] : []]
            }) : null;
            this.target === "draft-2020-12" ? (d.prefixItems = A, C && (d.items = C)) : this.target === "openapi-3.0" ? (d.items = {
              anyOf: A
            }, C && d.items.anyOf.push(C), d.minItems = A.length, C || (d.maxItems = A.length)) : (d.items = A, C && (d.additionalItems = C));
            const { minimum: T, maximum: E } = r._zod.bag;
            typeof T == "number" && (d.minItems = T), typeof E == "number" && (d.maxItems = E);
            break;
          }
          case "record": {
            const d = y;
            d.type = "object", (this.target === "draft-7" || this.target === "draft-2020-12") && (d.propertyNames = this.process(l.keyType, {
              ...S,
              path: [...S.path, "propertyNames"]
            })), d.additionalProperties = this.process(l.valueType, {
              ...S,
              path: [...S.path, "additionalProperties"]
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
            const d = y, x = r1(l.entries);
            x.every((w) => typeof w == "number") && (d.type = "number"), x.every((w) => typeof w == "string") && (d.type = "string"), d.enum = x;
            break;
          }
          case "literal": {
            const d = y, x = [];
            for (const w of l.values)
              if (w === void 0) {
                if (this.unrepresentable === "throw")
                  throw new Error("Literal `undefined` cannot be represented in JSON Schema");
              } else if (typeof w == "bigint") {
                if (this.unrepresentable === "throw")
                  throw new Error("BigInt literals cannot be represented in JSON Schema");
                x.push(Number(w));
              } else
                x.push(w);
            if (x.length !== 0) if (x.length === 1) {
              const w = x[0];
              d.type = w === null ? "null" : typeof w, this.target === "draft-4" || this.target === "openapi-3.0" ? d.enum = [w] : d.const = w;
            } else
              x.every((w) => typeof w == "number") && (d.type = "number"), x.every((w) => typeof w == "string") && (d.type = "string"), x.every((w) => typeof w == "boolean") && (d.type = "string"), x.every((w) => w === null) && (d.type = "null"), d.enum = x;
            break;
          }
          case "file": {
            const d = y, x = {
              type: "string",
              format: "binary",
              contentEncoding: "binary"
            }, { minimum: w, maximum: A, mime: C } = r._zod.bag;
            w !== void 0 && (x.minLength = w), A !== void 0 && (x.maxLength = A), C ? C.length === 1 ? (x.contentMediaType = C[0], Object.assign(d, x)) : d.anyOf = C.map((T) => ({ ...x, contentMediaType: T })) : Object.assign(d, x);
            break;
          }
          case "transform": {
            if (this.unrepresentable === "throw")
              throw new Error("Transforms cannot be represented in JSON Schema");
            break;
          }
          case "nullable": {
            const d = this.process(l.innerType, S);
            this.target === "openapi-3.0" ? (p.ref = l.innerType, y.nullable = !0) : y.anyOf = [d, { type: "null" }];
            break;
          }
          case "nonoptional": {
            this.process(l.innerType, S), p.ref = l.innerType;
            break;
          }
          case "success": {
            const d = y;
            d.type = "boolean";
            break;
          }
          case "default": {
            this.process(l.innerType, S), p.ref = l.innerType, y.default = JSON.parse(JSON.stringify(l.defaultValue));
            break;
          }
          case "prefault": {
            this.process(l.innerType, S), p.ref = l.innerType, this.io === "input" && (y._prefault = JSON.parse(JSON.stringify(l.defaultValue)));
            break;
          }
          case "catch": {
            this.process(l.innerType, S), p.ref = l.innerType;
            let d;
            try {
              d = l.catchValue(void 0);
            } catch {
              throw new Error("Dynamic catch values are not supported in JSON Schema");
            }
            y.default = d;
            break;
          }
          case "nan": {
            if (this.unrepresentable === "throw")
              throw new Error("NaN cannot be represented in JSON Schema");
            break;
          }
          case "template_literal": {
            const d = y, x = r._zod.pattern;
            if (!x)
              throw new Error("Pattern not found in template literal");
            d.type = "string", d.pattern = x.source;
            break;
          }
          case "pipe": {
            const d = this.io === "input" ? l.in._zod.def.type === "transform" ? l.out : l.in : l.out;
            this.process(d, S), p.ref = d;
            break;
          }
          case "readonly": {
            this.process(l.innerType, S), p.ref = l.innerType, y.readOnly = !0;
            break;
          }
          // passthrough types
          case "promise": {
            this.process(l.innerType, S), p.ref = l.innerType;
            break;
          }
          case "optional": {
            this.process(l.innerType, S), p.ref = l.innerType;
            break;
          }
          case "lazy": {
            const d = r._zod.innerType;
            this.process(d, S), p.ref = d;
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
    return g && Object.assign(p.schema, g), this.io === "input" && Dt(r) && (delete p.schema.examples, delete p.schema.default), this.io === "input" && p.schema._prefault && ((s = p.schema).default ?? (s.default = p.schema._prefault)), delete p.schema._prefault, this.seen.get(r).schema;
  }
  emit(r, i) {
    const s = {
      cycles: i?.cycles ?? "ref",
      reused: i?.reused ?? "inline",
      // unrepresentable: _params?.unrepresentable ?? "throw",
      // uri: _params?.uri ?? ((id) => `${id}`),
      external: i?.external ?? void 0
    }, l = this.seen.get(r);
    if (!l)
      throw new Error("Unprocessed schema. This is a bug in Zod.");
    const u = (m) => {
      const S = this.target === "draft-2020-12" ? "$defs" : "definitions";
      if (s.external) {
        const x = s.external.registry.get(m[0])?.id, w = s.external.uri ?? ((C) => C);
        if (x)
          return { ref: w(x) };
        const A = m[1].defId ?? m[1].schema.id ?? `schema${this.counter++}`;
        return m[1].defId = A, { defId: A, ref: `${w("__shared")}#/${S}/${A}` };
      }
      if (m[1] === l)
        return { ref: "#" };
      const y = `#/${S}/`, d = m[1].schema.id ?? `__schema${this.counter++}`;
      return { defId: d, ref: y + d };
    }, f = (m) => {
      if (m[1].schema.$ref)
        return;
      const S = m[1], { ref: v, defId: y } = u(m);
      S.def = { ...S.schema }, y && (S.defId = y);
      const d = S.schema;
      for (const x in d)
        delete d[x];
      d.$ref = v;
    };
    if (s.cycles === "throw")
      for (const m of this.seen.entries()) {
        const S = m[1];
        if (S.cycle)
          throw new Error(`Cycle detected: #/${S.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
      }
    for (const m of this.seen.entries()) {
      const S = m[1];
      if (r === m[0]) {
        f(m);
        continue;
      }
      if (s.external) {
        const y = s.external.registry.get(m[0])?.id;
        if (r !== m[0] && y) {
          f(m);
          continue;
        }
      }
      if (this.metadataRegistry.get(m[0])?.id) {
        f(m);
        continue;
      }
      if (S.cycle) {
        f(m);
        continue;
      }
      if (S.count > 1 && s.reused === "ref") {
        f(m);
        continue;
      }
    }
    const p = (m, S) => {
      const v = this.seen.get(m), y = v.def ?? v.schema, d = { ...y };
      if (v.ref === null)
        return;
      const x = v.ref;
      if (v.ref = null, x) {
        p(x, S);
        const w = this.seen.get(x).schema;
        w.$ref && (S.target === "draft-7" || S.target === "draft-4" || S.target === "openapi-3.0") ? (y.allOf = y.allOf ?? [], y.allOf.push(w)) : (Object.assign(y, w), Object.assign(y, d));
      }
      v.isParent || this.override({
        zodSchema: m,
        jsonSchema: y,
        path: v.path ?? []
      });
    };
    for (const m of [...this.seen.entries()].reverse())
      p(m[0], { target: this.target });
    const h = {};
    if (this.target === "draft-2020-12" ? h.$schema = "https://json-schema.org/draft/2020-12/schema" : this.target === "draft-7" ? h.$schema = "http://json-schema.org/draft-07/schema#" : this.target === "draft-4" ? h.$schema = "http://json-schema.org/draft-04/schema#" : this.target === "openapi-3.0" || console.warn(`Invalid target: ${this.target}`), s.external?.uri) {
      const m = s.external.registry.get(r)?.id;
      if (!m)
        throw new Error("Schema is missing an `id` property");
      h.$id = s.external.uri(m);
    }
    Object.assign(h, l.def);
    const g = s.external?.defs ?? {};
    for (const m of this.seen.entries()) {
      const S = m[1];
      S.def && S.defId && (g[S.defId] = S.def);
    }
    s.external || Object.keys(g).length > 0 && (this.target === "draft-2020-12" ? h.$defs = g : h.definitions = g);
    try {
      return JSON.parse(JSON.stringify(h));
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
}
function r3(t, r) {
  if (t instanceof _1) {
    const s = new Fy(r), l = {};
    for (const p of t._idmap.entries()) {
      const [h, g] = p;
      s.process(g);
    }
    const u = {}, f = {
      registry: t,
      uri: r?.uri,
      defs: l
    };
    for (const p of t._idmap.entries()) {
      const [h, g] = p;
      u[h] = s.emit(g, {
        ...r,
        external: f
      });
    }
    if (Object.keys(l).length > 0) {
      const p = s.target === "draft-2020-12" ? "$defs" : "definitions";
      u.__shared = {
        [p]: l
      };
    }
    return { schemas: u };
  }
  const i = new Fy(r);
  return i.process(t), i.emit(t, r);
}
function Dt(t, r) {
  const i = r ?? { seen: /* @__PURE__ */ new Set() };
  if (i.seen.has(t))
    return !1;
  i.seen.add(t);
  const l = t._zod.def;
  switch (l.type) {
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
      return Dt(l.element, i);
    case "object": {
      for (const u in l.shape)
        if (Dt(l.shape[u], i))
          return !0;
      return !1;
    }
    case "union": {
      for (const u of l.options)
        if (Dt(u, i))
          return !0;
      return !1;
    }
    case "intersection":
      return Dt(l.left, i) || Dt(l.right, i);
    case "tuple": {
      for (const u of l.items)
        if (Dt(u, i))
          return !0;
      return !!(l.rest && Dt(l.rest, i));
    }
    case "record":
      return Dt(l.keyType, i) || Dt(l.valueType, i);
    case "map":
      return Dt(l.keyType, i) || Dt(l.valueType, i);
    case "set":
      return Dt(l.valueType, i);
    // inner types
    case "promise":
    case "optional":
    case "nonoptional":
    case "nullable":
    case "readonly":
      return Dt(l.innerType, i);
    case "lazy":
      return Dt(l.getter(), i);
    case "default":
      return Dt(l.innerType, i);
    case "prefault":
      return Dt(l.innerType, i);
    case "custom":
      return !1;
    case "transform":
      return !0;
    case "pipe":
      return Dt(l.in, i) || Dt(l.out, i);
    case "success":
      return !1;
    case "catch":
      return !1;
    case "function":
      return !1;
  }
  throw new Error(`Unknown schema type: ${l.type}`);
}
const a3 = /* @__PURE__ */ re("ZodISODateTime", (t, r) => {
  DC.init(t, r), vt.init(t, r);
});
function i3(t) {
  return zN(a3, t);
}
const s3 = /* @__PURE__ */ re("ZodISODate", (t, r) => {
  RC.init(t, r), vt.init(t, r);
});
function o3(t) {
  return LN(s3, t);
}
const l3 = /* @__PURE__ */ re("ZodISOTime", (t, r) => {
  zC.init(t, r), vt.init(t, r);
});
function u3(t) {
  return IN(l3, t);
}
const c3 = /* @__PURE__ */ re("ZodISODuration", (t, r) => {
  LC.init(t, r), vt.init(t, r);
});
function f3(t) {
  return PN(c3, t);
}
const d3 = (t, r) => {
  l1.init(t, r), t.name = "ZodError", Object.defineProperties(t, {
    format: {
      value: (i) => Cw(t, i)
      // enumerable: false,
    },
    flatten: {
      value: (i) => ww(t, i)
      // enumerable: false,
    },
    addIssue: {
      value: (i) => {
        t.issues.push(i), t.message = JSON.stringify(t.issues, Ld, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (i) => {
        t.issues.push(...i), t.message = JSON.stringify(t.issues, Ld, 2);
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
}, Hn = re("ZodError", d3, {
  Parent: Error
}), h3 = /* @__PURE__ */ rh(Hn), p3 = /* @__PURE__ */ ah(Hn), m3 = /* @__PURE__ */ Au(Hn), g3 = /* @__PURE__ */ Tu(Hn), v3 = /* @__PURE__ */ Tw(Hn), y3 = /* @__PURE__ */ Ow(Hn), b3 = /* @__PURE__ */ kw(Hn), _3 = /* @__PURE__ */ jw(Hn), S3 = /* @__PURE__ */ Mw(Hn), x3 = /* @__PURE__ */ Dw(Hn), E3 = /* @__PURE__ */ Rw(Hn), w3 = /* @__PURE__ */ zw(Hn), Rt = /* @__PURE__ */ re("ZodType", (t, r) => (Ot.init(t, r), t.def = r, t.type = r.type, Object.defineProperty(t, "_def", { value: r }), t.check = (...i) => t.clone(Pa(r, {
  checks: [
    ...r.checks ?? [],
    ...i.map((s) => typeof s == "function" ? { _zod: { check: s, def: { check: "custom" }, onattach: [] } } : s)
  ]
})), t.clone = (i, s) => oa(t, i, s), t.brand = () => t, t.register = ((i, s) => (i.add(t, s), t)), t.parse = (i, s) => h3(t, i, s, { callee: t.parse }), t.safeParse = (i, s) => m3(t, i, s), t.parseAsync = async (i, s) => p3(t, i, s, { callee: t.parseAsync }), t.safeParseAsync = async (i, s) => g3(t, i, s), t.spa = t.safeParseAsync, t.encode = (i, s) => v3(t, i, s), t.decode = (i, s) => y3(t, i, s), t.encodeAsync = async (i, s) => b3(t, i, s), t.decodeAsync = async (i, s) => _3(t, i, s), t.safeEncode = (i, s) => S3(t, i, s), t.safeDecode = (i, s) => x3(t, i, s), t.safeEncodeAsync = async (i, s) => E3(t, i, s), t.safeDecodeAsync = async (i, s) => w3(t, i, s), t.refine = (i, s) => t.check(hA(i, s)), t.superRefine = (i) => t.check(pA(i)), t.overwrite = (i) => t.check(lo(i)), t.optional = () => Yy(t), t.nullable = () => $y(t), t.nullish = () => Yy($y(t)), t.nonoptional = (i) => sA(t, i), t.array = () => Qn(t), t.or = (i) => Q3([t, i]), t.and = (i) => K3(t, i), t.transform = (i) => Xy(t, eA(i)), t.default = (i) => rA(t, i), t.prefault = (i) => iA(t, i), t.catch = (i) => lA(t, i), t.pipe = (i) => Xy(t, i), t.readonly = () => fA(t), t.describe = (i) => {
  const s = t.clone();
  return Js.add(s, { description: i }), s;
}, Object.defineProperty(t, "description", {
  get() {
    return Js.get(t)?.description;
  },
  configurable: !0
}), t.meta = (...i) => {
  if (i.length === 0)
    return Js.get(t);
  const s = t.clone();
  return Js.add(s, i[0]), s;
}, t.isOptional = () => t.safeParse(void 0).success, t.isNullable = () => t.safeParse(null).success, t)), E1 = /* @__PURE__ */ re("_ZodString", (t, r) => {
  ih.init(t, r), Rt.init(t, r);
  const i = t._zod.bag;
  t.format = i.format ?? null, t.minLength = i.minimum ?? null, t.maxLength = i.maximum ?? null, t.regex = (...s) => t.check(FN(...s)), t.includes = (...s) => t.check(VN(...s)), t.startsWith = (...s) => t.check(YN(...s)), t.endsWith = (...s) => t.check($N(...s)), t.min = (...s) => t.check(xu(...s)), t.max = (...s) => t.check(S1(...s)), t.length = (...s) => t.check(x1(...s)), t.nonempty = (...s) => t.check(xu(1, ...s)), t.lowercase = (s) => t.check(ZN(s)), t.uppercase = (s) => t.check(GN(s)), t.trim = () => t.check(QN()), t.normalize = (...s) => t.check(XN(...s)), t.toLowerCase = () => t.check(JN()), t.toUpperCase = () => t.check(KN());
}), C3 = /* @__PURE__ */ re("ZodString", (t, r) => {
  ih.init(t, r), E1.init(t, r), t.email = (i) => t.check(pN(N3, i)), t.url = (i) => t.check(bN(A3, i)), t.jwt = (i) => t.check(RN(q3, i)), t.emoji = (i) => t.check(_N(T3, i)), t.guid = (i) => t.check(By(Zy, i)), t.uuid = (i) => t.check(mN(nu, i)), t.uuidv4 = (i) => t.check(gN(nu, i)), t.uuidv6 = (i) => t.check(vN(nu, i)), t.uuidv7 = (i) => t.check(yN(nu, i)), t.nanoid = (i) => t.check(SN(O3, i)), t.guid = (i) => t.check(By(Zy, i)), t.cuid = (i) => t.check(xN(k3, i)), t.cuid2 = (i) => t.check(EN(j3, i)), t.ulid = (i) => t.check(wN(M3, i)), t.base64 = (i) => t.check(jN(B3, i)), t.base64url = (i) => t.check(MN(U3, i)), t.xid = (i) => t.check(CN(D3, i)), t.ksuid = (i) => t.check(NN(R3, i)), t.ipv4 = (i) => t.check(AN(z3, i)), t.ipv6 = (i) => t.check(TN(L3, i)), t.cidrv4 = (i) => t.check(ON(I3, i)), t.cidrv6 = (i) => t.check(kN(P3, i)), t.e164 = (i) => t.check(DN(H3, i)), t.datetime = (i) => t.check(i3(i)), t.date = (i) => t.check(o3(i)), t.time = (i) => t.check(u3(i)), t.duration = (i) => t.check(f3(i));
});
function Un(t) {
  return hN(C3, t);
}
const vt = /* @__PURE__ */ re("ZodStringFormat", (t, r) => {
  ht.init(t, r), E1.init(t, r);
}), N3 = /* @__PURE__ */ re("ZodEmail", (t, r) => {
  wC.init(t, r), vt.init(t, r);
}), Zy = /* @__PURE__ */ re("ZodGUID", (t, r) => {
  xC.init(t, r), vt.init(t, r);
}), nu = /* @__PURE__ */ re("ZodUUID", (t, r) => {
  EC.init(t, r), vt.init(t, r);
}), A3 = /* @__PURE__ */ re("ZodURL", (t, r) => {
  CC.init(t, r), vt.init(t, r);
}), T3 = /* @__PURE__ */ re("ZodEmoji", (t, r) => {
  NC.init(t, r), vt.init(t, r);
}), O3 = /* @__PURE__ */ re("ZodNanoID", (t, r) => {
  AC.init(t, r), vt.init(t, r);
}), k3 = /* @__PURE__ */ re("ZodCUID", (t, r) => {
  TC.init(t, r), vt.init(t, r);
}), j3 = /* @__PURE__ */ re("ZodCUID2", (t, r) => {
  OC.init(t, r), vt.init(t, r);
}), M3 = /* @__PURE__ */ re("ZodULID", (t, r) => {
  kC.init(t, r), vt.init(t, r);
}), D3 = /* @__PURE__ */ re("ZodXID", (t, r) => {
  jC.init(t, r), vt.init(t, r);
}), R3 = /* @__PURE__ */ re("ZodKSUID", (t, r) => {
  MC.init(t, r), vt.init(t, r);
}), z3 = /* @__PURE__ */ re("ZodIPv4", (t, r) => {
  IC.init(t, r), vt.init(t, r);
}), L3 = /* @__PURE__ */ re("ZodIPv6", (t, r) => {
  PC.init(t, r), vt.init(t, r);
}), I3 = /* @__PURE__ */ re("ZodCIDRv4", (t, r) => {
  BC.init(t, r), vt.init(t, r);
}), P3 = /* @__PURE__ */ re("ZodCIDRv6", (t, r) => {
  UC.init(t, r), vt.init(t, r);
}), B3 = /* @__PURE__ */ re("ZodBase64", (t, r) => {
  HC.init(t, r), vt.init(t, r);
}), U3 = /* @__PURE__ */ re("ZodBase64URL", (t, r) => {
  FC.init(t, r), vt.init(t, r);
}), H3 = /* @__PURE__ */ re("ZodE164", (t, r) => {
  ZC.init(t, r), vt.init(t, r);
}), q3 = /* @__PURE__ */ re("ZodJWT", (t, r) => {
  VC.init(t, r), vt.init(t, r);
}), w1 = /* @__PURE__ */ re("ZodNumber", (t, r) => {
  v1.init(t, r), Rt.init(t, r), t.gt = (s, l) => t.check(Hy(s, l)), t.gte = (s, l) => t.check(gd(s, l)), t.min = (s, l) => t.check(gd(s, l)), t.lt = (s, l) => t.check(Uy(s, l)), t.lte = (s, l) => t.check(md(s, l)), t.max = (s, l) => t.check(md(s, l)), t.int = (s) => t.check(Gy(s)), t.safe = (s) => t.check(Gy(s)), t.positive = (s) => t.check(Hy(0, s)), t.nonnegative = (s) => t.check(gd(0, s)), t.negative = (s) => t.check(Uy(0, s)), t.nonpositive = (s) => t.check(md(0, s)), t.multipleOf = (s, l) => t.check(qy(s, l)), t.step = (s, l) => t.check(qy(s, l)), t.finite = () => t;
  const i = t._zod.bag;
  t.minValue = Math.max(i.minimum ?? Number.NEGATIVE_INFINITY, i.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, t.maxValue = Math.min(i.maximum ?? Number.POSITIVE_INFINITY, i.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, t.isInt = (i.format ?? "").includes("int") || Number.isSafeInteger(i.multipleOf ?? 0.5), t.isFinite = !0, t.format = i.format ?? null;
});
function Eu(t) {
  return BN(w1, t);
}
const F3 = /* @__PURE__ */ re("ZodNumberFormat", (t, r) => {
  YC.init(t, r), w1.init(t, r);
});
function Gy(t) {
  return UN(F3, t);
}
const Z3 = /* @__PURE__ */ re("ZodUnknown", (t, r) => {
  $C.init(t, r), Rt.init(t, r);
});
function Vy() {
  return HN(Z3);
}
const G3 = /* @__PURE__ */ re("ZodNever", (t, r) => {
  XC.init(t, r), Rt.init(t, r);
});
function V3(t) {
  return qN(G3, t);
}
const Y3 = /* @__PURE__ */ re("ZodArray", (t, r) => {
  QC.init(t, r), Rt.init(t, r), t.element = r.element, t.min = (i, s) => t.check(xu(i, s)), t.nonempty = (i) => t.check(xu(1, i)), t.max = (i, s) => t.check(S1(i, s)), t.length = (i, s) => t.check(x1(i, s)), t.unwrap = () => t.element;
});
function Qn(t, r) {
  return WN(Y3, t, r);
}
const $3 = /* @__PURE__ */ re("ZodObject", (t, r) => {
  KC.init(t, r), Rt.init(t, r), ut(t, "shape", () => r.shape), t.keyof = () => Bd(Object.keys(t._zod.def.shape)), t.catchall = (i) => t.clone({ ...t._zod.def, catchall: i }), t.passthrough = () => t.clone({ ...t._zod.def, catchall: Vy() }), t.loose = () => t.clone({ ...t._zod.def, catchall: Vy() }), t.strict = () => t.clone({ ...t._zod.def, catchall: V3() }), t.strip = () => t.clone({ ...t._zod.def, catchall: void 0 }), t.extend = (i) => bw(t, i), t.safeExtend = (i) => _w(t, i), t.merge = (i) => Sw(t, i), t.pick = (i) => vw(t, i), t.omit = (i) => yw(t, i), t.partial = (...i) => xw(C1, t, i[0]), t.required = (...i) => Ew(N1, t, i[0]);
});
function Ra(t, r) {
  const i = {
    type: "object",
    shape: t ?? {},
    ..._e(r)
  };
  return new $3(i);
}
const X3 = /* @__PURE__ */ re("ZodUnion", (t, r) => {
  WC.init(t, r), Rt.init(t, r), t.options = r.options;
});
function Q3(t, r) {
  return new X3({
    type: "union",
    options: t,
    ..._e(r)
  });
}
const J3 = /* @__PURE__ */ re("ZodIntersection", (t, r) => {
  eN.init(t, r), Rt.init(t, r);
});
function K3(t, r) {
  return new J3({
    type: "intersection",
    left: t,
    right: r
  });
}
const Pd = /* @__PURE__ */ re("ZodEnum", (t, r) => {
  tN.init(t, r), Rt.init(t, r), t.enum = r.entries, t.options = Object.values(r.entries);
  const i = new Set(Object.keys(r.entries));
  t.extract = (s, l) => {
    const u = {};
    for (const f of s)
      if (i.has(f))
        u[f] = r.entries[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new Pd({
      ...r,
      checks: [],
      ..._e(l),
      entries: u
    });
  }, t.exclude = (s, l) => {
    const u = { ...r.entries };
    for (const f of s)
      if (i.has(f))
        delete u[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new Pd({
      ...r,
      checks: [],
      ..._e(l),
      entries: u
    });
  };
});
function Bd(t, r) {
  const i = Array.isArray(t) ? Object.fromEntries(t.map((s) => [s, s])) : t;
  return new Pd({
    type: "enum",
    entries: i,
    ..._e(r)
  });
}
const W3 = /* @__PURE__ */ re("ZodTransform", (t, r) => {
  nN.init(t, r), Rt.init(t, r), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      throw new t1(t.constructor.name);
    i.addIssue = (u) => {
      if (typeof u == "string")
        i.issues.push(ao(u, i.value, r));
      else {
        const f = u;
        f.fatal && (f.continue = !1), f.code ?? (f.code = "custom"), f.input ?? (f.input = i.value), f.inst ?? (f.inst = t), i.issues.push(ao(f));
      }
    };
    const l = r.transform(i.value, i);
    return l instanceof Promise ? l.then((u) => (i.value = u, i)) : (i.value = l, i);
  };
});
function eA(t) {
  return new W3({
    type: "transform",
    transform: t
  });
}
const C1 = /* @__PURE__ */ re("ZodOptional", (t, r) => {
  rN.init(t, r), Rt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function Yy(t) {
  return new C1({
    type: "optional",
    innerType: t
  });
}
const tA = /* @__PURE__ */ re("ZodNullable", (t, r) => {
  aN.init(t, r), Rt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function $y(t) {
  return new tA({
    type: "nullable",
    innerType: t
  });
}
const nA = /* @__PURE__ */ re("ZodDefault", (t, r) => {
  iN.init(t, r), Rt.init(t, r), t.unwrap = () => t._zod.def.innerType, t.removeDefault = t.unwrap;
});
function rA(t, r) {
  return new nA({
    type: "default",
    innerType: t,
    get defaultValue() {
      return typeof r == "function" ? r() : i1(r);
    }
  });
}
const aA = /* @__PURE__ */ re("ZodPrefault", (t, r) => {
  sN.init(t, r), Rt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function iA(t, r) {
  return new aA({
    type: "prefault",
    innerType: t,
    get defaultValue() {
      return typeof r == "function" ? r() : i1(r);
    }
  });
}
const N1 = /* @__PURE__ */ re("ZodNonOptional", (t, r) => {
  oN.init(t, r), Rt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function sA(t, r) {
  return new N1({
    type: "nonoptional",
    innerType: t,
    ..._e(r)
  });
}
const oA = /* @__PURE__ */ re("ZodCatch", (t, r) => {
  lN.init(t, r), Rt.init(t, r), t.unwrap = () => t._zod.def.innerType, t.removeCatch = t.unwrap;
});
function lA(t, r) {
  return new oA({
    type: "catch",
    innerType: t,
    catchValue: typeof r == "function" ? r : () => r
  });
}
const uA = /* @__PURE__ */ re("ZodPipe", (t, r) => {
  uN.init(t, r), Rt.init(t, r), t.in = r.in, t.out = r.out;
});
function Xy(t, r) {
  return new uA({
    type: "pipe",
    in: t,
    out: r
    // ...util.normalizeParams(params),
  });
}
const cA = /* @__PURE__ */ re("ZodReadonly", (t, r) => {
  cN.init(t, r), Rt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function fA(t) {
  return new cA({
    type: "readonly",
    innerType: t
  });
}
const dA = /* @__PURE__ */ re("ZodCustom", (t, r) => {
  fN.init(t, r), Rt.init(t, r);
});
function hA(t, r = {}) {
  return e3(dA, t, r);
}
function pA(t) {
  return t3(t);
}
const Qy = {
  FIELD: "FieldRevision",
  GLOBAL: "GlobalRevision"
}, Ud = "placeholder-chatHistory", mA = Ra({
  justification: Un().describe(
    "A brief, friendly, and conversational explanation of the changes made, as if you are a helpful assistant."
  ),
  response: Un().describe("The new, full content for the character field.")
}), gA = Ra({
  field: Un(),
  value: Un()
}), vA = Ra({
  index: Eu().int().positive(),
  value: Un()
});
Ra({
  justification: Un(),
  fields_to_change: Qn(gA).optional(),
  draft_fields_to_remove: Qn(Un()).optional(),
  greetings_to_add: Qn(Un()).optional(),
  greetings_to_remove: Qn(Eu().int().positive()).optional(),
  greetings_to_change: Qn(vA).optional()
});
const yA = (t, r) => {
  const i = Ra({
    index: Eu().int().positive().describe("The 1-based index of the alternate greeting to change."),
    value: Un().describe("The new content for the alternate greeting.")
  }), s = {
    justification: Un().describe(
      "A brief, friendly, and conversational explanation of the operations performed, as if you are a helpful assistant."
    ),
    greetings_to_add: Qn(Un()).optional().describe("A list of new alternate greetings to add to the end."),
    greetings_to_remove: Qn(Eu().int().positive()).optional().describe("A list of 1-based indices of alternate greetings to remove."),
    greetings_to_change: Qn(i).optional().describe("A list of alternate greetings to update with new content.")
  };
  if (t.length > 0) {
    const l = Ra({
      field: Bd(t).describe("The unique ID of the field to change (core or draft)."),
      value: Un().describe("The new content for the field.")
    });
    s.fields_to_change = Qn(l).optional().describe("A list of character fields to update with new content.");
  }
  return r.length > 0 && (s.draft_fields_to_remove = Qn(Bd(r).describe("The unique ID of the draft field to remove.")).optional().describe("A list of draft field IDs to remove.")), Ra(s);
};
function vd(t) {
  return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function Hd(t, r = 0) {
  const i = "  ".repeat(r);
  if (Array.isArray(t))
    return t.map((s) => s !== null && typeof s == "object" ? `${i}<item>
${Hd(s, r + 1)}${i}</item>
` : `${i}<item>${vd(s)}</item>
`).join("");
  if (t !== null && typeof t == "object") {
    let s = "";
    for (const l of Object.keys(t)) {
      const u = t[l];
      u !== null && typeof u == "object" ? s += `${i}<${l}>
${Hd(u, r + 1)}${i}</${l}>
` : s += `${i}<${l}>${vd(u)}</${l}>
`;
    }
    return s;
  }
  return `${i}<value>${vd(t)}</value>
`;
}
function bA(t, r) {
  const i = ka(t);
  return r === "xml" ? Hd(i).trim() : JSON.stringify(i, null, 2);
}
function _A(...t) {
  for (const r of t) if (r !== void 0) return r;
}
function SA(t) {
  return Array.isArray(t) ? t.find((r) => r !== "null") ?? t[0] : t;
}
function ka(t) {
  if (!t || typeof t != "object") return null;
  const r = Array.isArray(t.examples) ? t.examples[0] : void 0, i = _A(t.example, r, t.default);
  if (i !== void 0) return i;
  if (t.const !== void 0) return t.const;
  if (Array.isArray(t.enum) && t.enum.length) return t.enum[0];
  const s = Array.isArray(t.anyOf) ? t.anyOf[0] : Array.isArray(t.oneOf) ? t.oneOf[0] : void 0;
  if (s) return ka(s);
  switch (SA(t.type)) {
    case "object": {
      const u = {}, f = t.properties || {};
      for (const p of Object.keys(f))
        u[p] = ka(f[p]);
      return t.additionalProperties && typeof t.additionalProperties == "object" && (u.additionalProperty = ka(t.additionalProperties)), u;
    }
    case "array": {
      const u = t.items ?? {};
      return [ka(u)];
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
      return t.properties || t.additionalProperties ? ka({ ...t, type: "object" }) : t.items ? ka({ ...t, type: "array" }) : null;
  }
}
const xA = new hS();
async function qd(t, r, i, s, l, u) {
  const f = !s.json_schema && !1;
  return new Promise((p, h) => {
    const g = new AbortController(), m = u ?? g.signal;
    u && u.addEventListener("abort", () => g.abort(), { once: !0 }), xA.generateRequest(
      {
        profileId: t,
        prompt: r,
        maxTokens: i,
        custom: { stream: f, signal: m },
        overridePayload: s
      },
      {
        abortController: g,
        onEntry: void 0,
        onFinish: (S, v, y) => m.aborted ? h(new DOMException("Request aborted by user", "AbortError")) : y ? h(y) : v === void 0 && y === void 0 ? h(new DOMException("Request aborted by user", "AbortError")) : (v || h(new Error("No data received from LLM")), y ? h(y) : p(v))
      }
    );
  });
}
async function EA(t, r, i, s) {
  const l = await qd(t, r, i, {}, void 0, s);
  if (!l?.content)
    throw new Error("Plain request failed to return content.");
  return l.content;
}
async function wA(t, r, i, s, l, u, f) {
  const p = St.getSettings();
  let h, g;
  const m = r3(i);
  if (l === "native") {
    if (h = await qd(
      t,
      r,
      u,
      {
        json_schema: { name: s, strict: !0, value: m }
      },
      void 0,
      f
    ), !h?.content)
      throw new Error(`Structured request for ${s} failed to return content.`);
    g = typeof h.content == "string" ? JSON.parse(h.content) : h.content;
  } else {
    const v = l, y = bA(m, v), d = JSON.stringify(m, null, 2), x = v === "json" ? "reviseJsonPrompt" : "reviseXmlPrompt", w = p.prompts[x]?.content;
    if (!w)
      throw new Error(`Prompt template for mode "${v}" not found.`);
    const A = {
      example_response: y,
      schema: d
    }, T = { role: "system", content: Ft.compile(w, { noEscape: !0, strict: !0 })(A) };
    if (h = await qd(
      t,
      [...r, T],
      u,
      {},
      void 0,
      f
    ), !h?.content)
      throw new Error(`Structured request for ${s} failed to return content.`);
    g = P0(h.content, v, { schema: m });
  }
  const S = i.safeParse(g);
  if (!S.success) {
    const v = `Model response failed schema validation for ${s}. Check console for details.`;
    throw console.error("Zod validation failed:", S.error.issues), console.error("Raw content parsed:", g), await xe("error", v), new Error(v);
  }
  return S.data;
}
const A1 = ({ originalContent: t, newContent: r }) => {
  const i = Y.useMemo(() => {
    const s = W0(t, r);
    let l = "", u = "";
    return s.forEach((f) => {
      const p = f.value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/\n/g, "<br>"), g = `<span style="${f.added ? "color: green; background-color: #e6ffed;" : f.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${p}</span>`;
      f.added || (l += g), f.removed || (u += g);
    }), { originalHtml: l, newHtml: u };
  }, [t, r]);
  return /* @__PURE__ */ _.jsxs("div", { className: "compare-state-diff-grid", children: [
    /* @__PURE__ */ _.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: i.originalHtml } }),
    /* @__PURE__ */ _.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: i.newHtml } })
  ] });
}, CA = ({ before: t, after: r }) => {
  const i = Y.useMemo(() => {
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
  return /* @__PURE__ */ _.jsxs("div", { className: "compare-state-popup", children: [
    /* @__PURE__ */ _.jsx("h3", { children: "Changes in this step" }),
    i.length === 0 ? /* @__PURE__ */ _.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes were detected in the character state for this step." }) : /* @__PURE__ */ _.jsx("div", { className: "compare-state-list", children: i.map(({ label: s, before: l, after: u }) => /* @__PURE__ */ _.jsxs("div", { className: "compare-state-item", children: [
      /* @__PURE__ */ _.jsx("h4", { children: s }),
      /* @__PURE__ */ _.jsxs("div", { className: "compare-state-header", children: [
        /* @__PURE__ */ _.jsx("span", { children: "Before" }),
        /* @__PURE__ */ _.jsx("span", { children: "After" })
      ] }),
      /* @__PURE__ */ _.jsx(A1, { originalContent: l, newContent: u })
    ] }, s)) })
  ] });
}, NA = ({ currentState: t, initialState: r }) => {
  const [i, s] = Y.useState(!1), { coreFields: l, alternateGreetings: u } = Y.useMemo(() => {
    const p = [], h = [];
    return dn.forEach((g) => {
      t.fields[g] && p.push({ label: t.fields[g].label, value: t.fields[g].value });
    }), Object.entries(t.fields).filter(([g]) => g.startsWith("alternate_greetings_")).sort((g, m) => parseInt(g[0].split("_")[2]) - parseInt(m[0].split("_")[2])).forEach(([, g]) => h.push(g.value)), { coreFields: p, alternateGreetings: h };
  }, [t]), f = Y.useMemo(() => {
    const p = [];
    return (/* @__PURE__ */ new Set([...Object.keys(r.fields), ...Object.keys(t.fields)])).forEach((g) => {
      const m = r.fields[g], S = t.fields[g], v = m?.value ?? "", y = S?.value ?? "";
      v !== y && p.push({
        label: S?.label ?? m?.label ?? g,
        before: v,
        after: y
      });
    }), p;
  }, [r, t]);
  return /* @__PURE__ */ _.jsxs("div", { className: "current-state-popup", children: [
    /* @__PURE__ */ _.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ _.jsx("h3", { children: i ? "Comparing with Original State" : "Current Character State" }),
      /* @__PURE__ */ _.jsx("div", { className: "popup_header_buttons", children: /* @__PURE__ */ _.jsxs("label", { className: "checkbox_label", children: [
        /* @__PURE__ */ _.jsx("input", { type: "checkbox", checked: i, onChange: (p) => s(p.target.checked) }),
        "Compare with Original"
      ] }) })
    ] }),
    /* @__PURE__ */ _.jsx("div", { className: "current-state-content", children: i ? /* @__PURE__ */ _.jsx("div", { className: "compare-state-list", children: f.length === 0 ? /* @__PURE__ */ _.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes from the original state." }) : f.map(({ label: p, before: h, after: g }) => /* @__PURE__ */ _.jsxs("div", { className: "compare-state-item", children: [
      /* @__PURE__ */ _.jsx("h4", { children: p }),
      /* @__PURE__ */ _.jsxs("div", { className: "compare-state-header", children: [
        /* @__PURE__ */ _.jsx("span", { children: "Original" }),
        /* @__PURE__ */ _.jsx("span", { children: "Current" })
      ] }),
      /* @__PURE__ */ _.jsx(A1, { originalContent: h, newContent: g })
    ] }, p)) }) : /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
      /* @__PURE__ */ _.jsx("h4", { children: "Core Fields" }),
      l.map(({ label: p, value: h }) => /* @__PURE__ */ _.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ _.jsx("label", { children: p }),
        /* @__PURE__ */ _.jsx("div", { className: "state-value", children: h || /* @__PURE__ */ _.jsx("span", { className: "subtle-text", children: "empty" }) })
      ] }, p)),
      u.length > 0 && /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
        /* @__PURE__ */ _.jsx("h4", { style: { marginTop: "20px" }, children: "Alternate Greetings" }),
        u.map((p, h) => /* @__PURE__ */ _.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ _.jsxs("label", { children: [
            "Greeting ",
            h + 1
          ] }),
          /* @__PURE__ */ _.jsx("div", { className: "state-value", children: p || /* @__PURE__ */ _.jsx("span", { className: "subtle-text", children: "empty" }) })
        ] }, h))
      ] })
    ] }) })
  ] });
}, ji = SillyTavern.getContext(), AA = (t) => Object.entries(t.fields).filter(([r]) => r.startsWith("alternate_greetings_")).sort((r, i) => {
  const s = parseInt(r[0].split("_")[2]), l = parseInt(i[0].split("_")[2]);
  return s - l;
}).map(([, r]) => r.value), TA = (t, r, i, s) => {
  const l = structuredClone(t);
  if (i === "field" && s) {
    const u = r;
    return l.fields[s] && (l.fields[s].value = u.response), l;
  }
  if (i === "global") {
    const u = r;
    let f = AA(l), p = !1;
    if (u.fields_to_change?.length)
      for (const h of u.fields_to_change)
        l.fields[h.field] ? l.fields[h.field].value = h.value : l.draftFields[h.field] && (l.draftFields[h.field].value = h.value);
    if (u.draft_fields_to_remove?.length)
      for (const h of u.draft_fields_to_remove)
        l.draftFields[h] && delete l.draftFields[h];
    if (u.greetings_to_change?.length) {
      p = !0;
      for (const h of u.greetings_to_change)
        h.index > 0 && h.index <= f.length && (f[h.index - 1] = h.value);
    }
    if (u.greetings_to_remove?.length) {
      p = !0;
      const h = new Set(u.greetings_to_remove.map((g) => g - 1));
      f = f.filter((g, m) => !h.has(m));
    }
    u.greetings_to_add?.length && (p = !0, f.push(...u.greetings_to_add)), p && (Object.keys(l.fields).forEach((h) => {
      h.startsWith("alternate_greetings_") && delete l.fields[h];
    }), f.forEach((h, g) => {
      const m = `alternate_greetings_${g + 1}`;
      l.fields[m] = {
        value: h,
        prompt: "",
        // Prompts are not managed in revise sessions.
        label: `Alternate Greeting ${g + 1}`
      };
    }));
  }
  return l;
}, OA = ({ initialState: t, onSave: r, onClose: i }) => {
  const [s, l] = Y.useState(() => structuredClone(t)), u = (S, v, y) => {
    const d = structuredClone(s), x = y ? "draftFields" : "fields";
    d[x][S] && (d[x][S].value = v), l(d);
  }, f = (S, v) => {
    const y = structuredClone(s), d = `alternate_greetings_${S + 1}`;
    y.fields[d] && (y.fields[d].value = v), l(y);
  }, { coreFields: p, alternateGreetings: h, draftFields: g } = Y.useMemo(() => {
    const S = [], v = [], y = [];
    return dn.forEach((d) => {
      s.fields[d] && S.push({ id: d, label: s.fields[d].label, value: s.fields[d].value });
    }), Object.entries(s.fields).filter(([d]) => d.startsWith("alternate_greetings_")).sort((d, x) => parseInt(d[0].split("_")[2]) - parseInt(x[0].split("_")[2])).forEach(([, d]) => v.push(d.value)), Object.entries(s.draftFields).forEach(([d, x]) => {
      y.push({ id: d, label: x.label, value: x.value });
    }), { coreFields: S, alternateGreetings: v, draftFields: y };
  }, [s]), m = () => {
    JSON.stringify(t) !== JSON.stringify(s) && r(s), i();
  };
  return /* @__PURE__ */ _.jsxs("div", { className: "current-state-popup", children: [
    /* @__PURE__ */ _.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ _.jsx("h3", { children: "Editing Character State" }),
      /* @__PURE__ */ _.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ _.jsxs(fe, { onClick: m, children: [
          /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-check" }),
          " Save Changes"
        ] }),
        /* @__PURE__ */ _.jsxs(fe, { onClick: i, className: "danger_button", children: [
          /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-times" }),
          " Cancel"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ _.jsxs("div", { className: "current-state-content", children: [
      /* @__PURE__ */ _.jsx("h4", { children: "Core Fields" }),
      p.map(({ id: S, label: v, value: y }) => /* @__PURE__ */ _.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ _.jsx("label", { children: v }),
        /* @__PURE__ */ _.jsx(en, { value: y, onChange: (d) => u(S, d.target.value, !1), rows: 4 })
      ] }, S)),
      g.length > 0 && /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
        /* @__PURE__ */ _.jsx("h4", { style: { marginTop: "20px" }, children: "Draft Fields" }),
        g.map(({ id: S, label: v, value: y }) => /* @__PURE__ */ _.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ _.jsx("label", { children: v }),
          /* @__PURE__ */ _.jsx(en, { value: y, onChange: (d) => u(S, d.target.value, !0), rows: 4 })
        ] }, S))
      ] }),
      h.length > 0 && /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
        /* @__PURE__ */ _.jsx("h4", { style: { marginTop: "20px" }, children: "Alternate Greetings" }),
        h.map((S, v) => /* @__PURE__ */ _.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ _.jsxs("label", { children: [
            "Greeting ",
            v + 1
          ] }),
          /* @__PURE__ */ _.jsx(en, { value: S, onChange: (y) => f(v, y.target.value), rows: 4 })
        ] }, v))
      ] })
    ] })
  ] });
}, kA = ({
  session: t,
  onBack: r,
  onApply: i,
  onSessionUpdate: s,
  initialState: l,
  chatContextOptions: u
}) => {
  const [f, p] = Y.useState(t.messages), [h, g] = Y.useState(""), [m, S] = Y.useState(!1), [v, y] = Y.useState(null), [d, x] = Y.useState(!1), [w, A] = Y.useState(!1), [C, T] = Y.useState(null), [E, O] = Y.useState(""), j = Y.useRef(null), R = Y.useRef(null);
  Y.useEffect(() => {
    j.current?.scrollIntoView({ behavior: "smooth" });
  }, [f]);
  const H = Y.useCallback(
    (X, ve, ye) => {
      if (JSON.stringify(ye) === JSON.stringify(ve))
        return X;
      const ct = St.getSettings().prompts.existingFieldDefinitions;
      if (!ct) return X;
      const je = { core: {}, alternate_greetings: {}, draft: {} };
      if ((/* @__PURE__ */ new Set([...Object.keys(ye.fields), ...Object.keys(ve.fields)])).forEach((Ze) => {
        const Xe = ye.fields[Ze]?.value ?? "", Ve = ve.fields[Ze]?.value ?? "";
        if (Xe !== Ve) {
          const We = ve.fields[Ze];
          We && (Ze.startsWith("alternate_greetings_") ? je.alternate_greetings[We.label] = We.value : dn.includes(Ze) && (je.core[We.label] = We.value));
        }
      }), (/* @__PURE__ */ new Set([...Object.keys(ye.draftFields), ...Object.keys(ve.draftFields)])).forEach((Ze) => {
        const Xe = ye.draftFields[Ze]?.value ?? "", Ve = ve.draftFields[Ze]?.value ?? "";
        if (Xe !== Ve && ve.draftFields[Ze]) {
          const We = ve.draftFields[Ze];
          je.draft[We.label] = We.value;
        }
      }), Object.keys(je.core).length === 0 && Object.keys(je.alternate_greetings).length === 0 && Object.keys(je.draft).length === 0)
        return X;
      const kt = { fields: je };
      let tn = Ft.compile(ct.content, { noEscape: !0 })(kt);
      if (tn = ji.substituteParams(tn), tn.trim()) {
        const Ze = {
          id: `msg-${Date.now()}-state`,
          role: "system",
          content: tn.trim(),
          isStateUpdate: !0
        };
        return [...X, Ze];
      }
      return X;
    },
    []
  ), Q = Y.useCallback(
    async (X, ve, ye, $e) => {
      const ct = St.getSettings();
      if (!t.profileId) {
        xe("warning", "Please select a connection profile for this session.");
        return;
      }
      R.current = new AbortController(), ye(), S(!0);
      try {
        const je = [], at = ji.extensionSettings.connectionManager?.profiles?.find(
          (Ze) => Ze.id === t.profileId
        ), qn = at?.api ? ji.CONNECT_API_MAP[at.api].selected : void 0;
        if (!qn) {
          xe("warning", "No API selected for this session.");
          return;
        }
        for (const Ze of X)
          if (Ze.id === Ud) {
            if (Tn === void 0 && !Cr) continue;
            const Xe = await m0(qn, u);
            Xe.warnings?.length && Xe.warnings.forEach((Ve) => xe("warning", Ve)), je.push(...Xe.result);
          } else
            je.push(Ze);
        const kt = X.slice(0, X.length - (ve ? 0 : 1)).reverse().find((Ze) => Ze.stateSnapshot)?.stateSnapshot ?? l, tn = ct.prompts.existingFieldDefinitions;
        if (tn) {
          const Ze = {
            fields: {
              core: Object.fromEntries(
                Object.entries(kt.fields).filter(([Ve]) => !Ve.startsWith("alternate_greetings_")).map(([, Ve]) => [Ve.label, Ve.value])
              ),
              alternate_greetings: Object.fromEntries(
                Object.entries(kt.fields).filter(([Ve]) => Ve.startsWith("alternate_greetings_")).map(([, Ve]) => [Ve.label, Ve.value])
              ),
              draft: Object.fromEntries(Object.entries(kt.draftFields).map(([, Ve]) => [Ve.label, Ve.value]))
            }
          };
          let Xe = Ft.compile(tn.content, { noEscape: !0 })(Ze);
          if (Xe = ji.substituteParams(Xe), Xe.trim()) {
            const Ve = {
              id: `temp-state-${Date.now()}`,
              role: "system",
              content: Xe.trim()
            }, We = je.pop();
            je.push(Ve), We && je.push(We);
          }
        }
        if (t.isReadonly) {
          je.push({
            id: `msg-${Date.now()}-readonly`,
            role: "system",
            content: "Readonly mode enabled. You can only discuss with the user without making changes."
          });
          const Ze = await EA(
            t.profileId,
            je,
            ct.maxResponseToken,
            R.current.signal
          ), Xe = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: Ze
          }, Ve = [...X, Xe];
          p(Ve), s({ ...t, messages: Ve });
        } else {
          const Ze = t.type === "field" ? mA : (() => {
            const Ge = [...Object.keys(kt.fields), ...Object.keys(kt.draftFields)], He = Object.keys(kt.draftFields);
            return yA(Ge, He);
          })(), Ve = await wA(
            t.profileId,
            je,
            Ze,
            t.type === "field" ? Qy.FIELD : Qy.GLOBAL,
            t.promptEngineeringMode,
            ct.maxResponseToken,
            R.current.signal
          ), We = TA(kt, Ve, t.type, t.targetFieldId), me = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: Ve.justification,
            stateSnapshot: We
          };
          let pe = [...X, me];
          pe = H(pe, We, kt), p(pe), s({ ...t, messages: pe });
        }
      } catch (je) {
        je.name === "AbortError" ? xe("info", "Request was cancelled.") : (console.error("Revise request failed:", je), xe("error", `Request failed: ${je.message}`)), $e();
      } finally {
        S(!1), R.current = null;
      }
    },
    [t, s, l, u, H]
  ), B = Y.useCallback(async () => {
    if (!h.trim() || m) return;
    const X = { id: `msg-${Date.now()}`, role: "user", content: h.trim() }, ve = f;
    Q(
      [...f, X],
      !1,
      () => {
        p([...f, X]), g("");
      },
      () => p(ve)
    );
  }, [h, m, f, Q]), V = Y.useCallback(async () => {
    if (m || f.length === 0) return;
    const X = f;
    let ve = [...f];
    const ye = f.findLastIndex(($e) => !$e.isStateUpdate);
    ye > -1 && f[ye].role === "assistant" && (ve = f.slice(0, ye)), await Q(
      ve,
      !0,
      () => p(ve),
      () => p(X)
    );
  }, [m, f, Q]), $ = () => {
    const X = f.slice().reverse().find((ve) => ve.stateSnapshot)?.stateSnapshot ?? l;
    i(X), r();
  }, F = (X) => {
    const ve = f.findIndex((ct) => ct.id === X);
    if (ve === -1 || !f[ve].stateSnapshot) return;
    const ye = f[ve].stateSnapshot;
    let $e = l;
    for (let ct = ve - 1; ct >= 0; ct--)
      if (f[ct].stateSnapshot) {
        $e = f[ct].stateSnapshot;
        break;
      }
    y({ before: $e, after: ye });
  }, te = () => {
    x(!0);
  }, W = (X) => {
    T(X.id), O(X.content);
  }, L = () => {
    T(null), O("");
  }, ae = async () => {
    if (!C) return;
    const X = f.findIndex((at) => at.id === C);
    if (X === -1 || !await ji.Popup.show.confirm(
      "Edit Message",
      "This will fork the conversation from this point, removing all subsequent messages. Continue?"
    )) return;
    const ye = f, $e = f.slice(0, X), ct = { ...f[X], content: E }, je = [...$e, ct];
    L(), Q(
      je,
      !1,
      () => p(je),
      () => p(ye)
    );
  }, de = async (X) => {
    const ve = f.findIndex((at) => at.id === X);
    if (ve === -1) return;
    const $e = !!f[ve].isInitial;
    if (!await ji.Popup.show.confirm(
      "Delete Message",
      $e ? "Deleting part of the initial context will clear the entire chat history. Are you sure?" : "This will delete this message and all subsequent messages. Are you sure?"
    )) return;
    let je;
    $e ? je = f.filter((at) => at.isInitial && at.id !== X) : je = f.slice(0, ve), p(je), s({ ...t, messages: je }), xe("info", "Message history has been updated.");
  }, Oe = f.filter((X) => !X.isStateUpdate), D = Oe.filter((X) => X.isInitial), J = Oe.filter((X) => !X.isInitial), se = f.slice().reverse().find((X) => X.stateSnapshot)?.stateSnapshot ?? l, le = () => {
    A(!0);
  }, ue = (X) => {
    const ve = f.slice().reverse().find((ct) => ct.stateSnapshot)?.stateSnapshot ?? l, ye = {
      id: `msg-${Date.now()}-user-edit`,
      role: "user",
      content: "I made a change.",
      // Default justification for manual edits
      stateSnapshot: X
    };
    let $e = [...f, ye];
    $e = H($e, X, ve), p($e), s({ ...t, messages: $e }), A(!1);
  }, De = () => {
    R.current?.abort();
  };
  return /* @__PURE__ */ _.jsxs("div", { className: "revise-session-chat", children: [
    /* @__PURE__ */ _.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ _.jsx("h2", { children: t.name }),
      /* @__PURE__ */ _.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ _.jsxs("label", { className: "checkbox_label", children: [
          /* @__PURE__ */ _.jsx(
            "input",
            {
              type: "checkbox",
              checked: t.isReadonly ?? !1,
              onChange: (X) => s({ ...t, isReadonly: X.target.checked })
            }
          ),
          "Readonly Mode"
        ] }),
        /* @__PURE__ */ _.jsx("div", { style: { maxWidth: "200px" }, children: /* @__PURE__ */ _.jsx(
          X0,
          {
            initialSelectedProfileId: t.profileId,
            onChange: (X) => s({ ...t, profileId: X?.id ?? "" })
          }
        ) }),
        /* @__PURE__ */ _.jsxs(
          "select",
          {
            className: "text_pole",
            value: t.promptEngineeringMode,
            onChange: (X) => s({ ...t, promptEngineeringMode: X.target.value }),
            title: "Prompt Engineering Mode",
            disabled: t.isReadonly,
            style: { minWidth: "fit-content", width: "unset" },
            children: [
              /* @__PURE__ */ _.jsx("option", { value: "native", children: "Native" }),
              /* @__PURE__ */ _.jsx("option", { value: "json", children: "JSON" }),
              /* @__PURE__ */ _.jsx("option", { value: "xml", children: "XML" })
            ]
          }
        ),
        /* @__PURE__ */ _.jsx(fe, { onClick: te, title: "View current character state", children: "View State" }),
        /* @__PURE__ */ _.jsx(fe, { onClick: le, title: "Manually edit the current state", children: "Edit State" }),
        /* @__PURE__ */ _.jsx(fe, { onClick: r, title: "Back to sessions", children: /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-arrow-left" }) }),
        /* @__PURE__ */ _.jsxs(fe, { onClick: $, title: "Apply Changes and Close", children: [
          /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-check" }),
          " Apply"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ _.jsxs("div", { className: "chat-messages", children: [
      D.length > 0 && /* @__PURE__ */ _.jsxs("details", { className: "initial-messages-container", children: [
        /* @__PURE__ */ _.jsx("summary", { children: "View Initial Context" }),
        /* @__PURE__ */ _.jsx("div", { className: "initial-messages-content", children: D.map(
          (X) => C === X.id ? /* @__PURE__ */ _.jsxs("div", { className: "message-editor", children: [
            /* @__PURE__ */ _.jsx(en, { value: E, onChange: (ve) => O(ve.target.value), rows: 5 }),
            /* @__PURE__ */ _.jsxs("div", { className: "editor-buttons", children: [
              /* @__PURE__ */ _.jsxs(fe, { onClick: ae, children: [
                /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-check" }),
                " Save & Fork"
              ] }),
              /* @__PURE__ */ _.jsxs(fe, { onClick: L, children: [
                /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-times" }),
                " Cancel"
              ] })
            ] })
          ] }, X.id) : /* @__PURE__ */ _.jsxs("div", { className: `message-bubble-wrapper initial-context ${X.role}`, children: [
            /* @__PURE__ */ _.jsx("div", { className: `message-bubble ${X.role} initial`, children: /* @__PURE__ */ _.jsx("div", { className: "message-content", children: X.content }) }),
            !m && X.id !== Ud && /* @__PURE__ */ _.jsxs("div", { className: "message-actions", children: [
              /* @__PURE__ */ _.jsxs(
                fe,
                {
                  className: "message-action-button",
                  onClick: () => W(X),
                  title: "Edit Context",
                  children: [
                    " ",
                    /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-pencil" }),
                    " "
                  ]
                }
              ),
              /* @__PURE__ */ _.jsxs(
                fe,
                {
                  className: "message-action-button danger_button",
                  onClick: () => de(X.id),
                  title: "Delete Context",
                  children: [
                    " ",
                    /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-trash-can" }),
                    " "
                  ]
                }
              )
            ] })
          ] }, X.id)
        ) })
      ] }),
      J.map(
        (X) => C === X.id ? /* @__PURE__ */ _.jsxs("div", { className: "message-editor", children: [
          /* @__PURE__ */ _.jsx(en, { value: E, onChange: (ve) => O(ve.target.value), rows: 3 }),
          /* @__PURE__ */ _.jsxs("div", { className: "editor-buttons", children: [
            /* @__PURE__ */ _.jsxs(fe, { onClick: ae, children: [
              /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-check" }),
              " Save & Fork"
            ] }),
            /* @__PURE__ */ _.jsxs(fe, { onClick: L, children: [
              /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-times" }),
              " Cancel"
            ] })
          ] })
        ] }, X.id) : /* @__PURE__ */ _.jsxs("div", { className: `message-bubble-wrapper ${X.role}`, children: [
          /* @__PURE__ */ _.jsxs("div", { className: "message-actions", children: [
            X.role === "user" && !X.stateSnapshot && !m && /* @__PURE__ */ _.jsxs(
              fe,
              {
                className: "message-action-button",
                onClick: () => W(X),
                title: "Edit and Fork",
                children: [
                  " ",
                  /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-pencil" }),
                  " "
                ]
              }
            ),
            X.stateSnapshot && !m && /* @__PURE__ */ _.jsxs(
              fe,
              {
                className: "message-action-button",
                onClick: () => F(X.id),
                title: "Compare changes",
                children: [
                  " ",
                  /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-code-compare" }),
                  " "
                ]
              }
            ),
            !m && /* @__PURE__ */ _.jsxs(
              fe,
              {
                className: "message-action-button danger_button",
                onClick: () => de(X.id),
                title: "Delete Message",
                children: [
                  " ",
                  /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-trash-can" }),
                  " "
                ]
              }
            )
          ] }),
          /* @__PURE__ */ _.jsx("div", { className: `message-bubble ${X.role}`, children: /* @__PURE__ */ _.jsx("div", { className: "message-content", children: X.content }) })
        ] }, X.id)
      ),
      J.length > 0 && !m && /* @__PURE__ */ _.jsx("div", { className: "regenerate-button-wrapper", children: /* @__PURE__ */ _.jsxs(fe, { onClick: V, title: "Regenerate response", children: [
        " ",
        /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-rotate-right" }),
        " Regenerate",
        " "
      ] }) }),
      m && /* @__PURE__ */ _.jsxs("div", { className: "message-bubble-wrapper assistant", children: [
        /* @__PURE__ */ _.jsx("div", { className: "message-bubble assistant loading", children: /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) }),
        /* @__PURE__ */ _.jsx(fe, { onClick: De, className: "danger_button", title: "Cancel Request", children: /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-stop" }) })
      ] }),
      /* @__PURE__ */ _.jsx("div", { ref: j })
    ] }),
    /* @__PURE__ */ _.jsxs("div", { className: "chat-input-area", children: [
      /* @__PURE__ */ _.jsx(
        en,
        {
          value: h,
          onChange: (X) => g(X.target.value),
          placeholder: "Type your revision instructions...",
          rows: 3,
          disabled: m || !!C,
          onKeyDown: (X) => {
            X.key === "Enter" && !X.shiftKey && (X.preventDefault(), B());
          }
        }
      ),
      /* @__PURE__ */ _.jsxs(fe, { onClick: B, disabled: m || !h.trim() || !!C, children: [
        " ",
        /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-paper-plane" }),
        " "
      ] })
    ] }),
    v && /* @__PURE__ */ _.jsx(
      Li,
      {
        type: An.DISPLAY,
        content: /* @__PURE__ */ _.jsx(CA, { before: v.before, after: v.after }),
        onComplete: () => y(null),
        options: { wide: !0, large: !0 }
      }
    ),
    d && /* @__PURE__ */ _.jsx(
      Li,
      {
        type: An.DISPLAY,
        content: /* @__PURE__ */ _.jsx(NA, { currentState: se, initialState: l }),
        onComplete: () => x(!1),
        options: { wide: !0, large: !0 }
      }
    ),
    w && /* @__PURE__ */ _.jsx(
      Li,
      {
        type: An.DISPLAY,
        content: /* @__PURE__ */ _.jsx(
          OA,
          {
            initialState: se,
            onSave: ue,
            onClose: () => A(!1)
          }
        ),
        onComplete: () => A(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
};
async function jA(t, r, i, s, l) {
  const u = St.getSettings(), f = u.mainContextTemplatePresets[i];
  if (!f)
    throw new Error(`Main context template preset "${i}" not found.`);
  const p = [], g = {
    ...{
      user: rr.name1 || "You",
      char: t.fields.name?.value || "Character",
      persona: rr.powerUserSettings.persona_description
    },
    fields: {
      core: Object.fromEntries(
        Object.entries(t.fields).filter(([y]) => !y.startsWith("alternate_greetings_")).map(([, y]) => [y.label, y.value])
      ),
      alternate_greetings: Object.fromEntries(
        Object.entries(t.fields).filter(([y]) => y.startsWith("alternate_greetings_")).map(([, y]) => [y.label, y.value])
      ),
      draft: Object.fromEntries(Object.entries(t.draftFields).map(([, y]) => [y.label, y.value]))
    }
  };
  if (s.charCard) {
    const y = [];
    l.selectedCharacterIndexes.forEach((d) => {
      const x = rr.characters[parseInt(d)];
      x && y.push(x);
    }), g.characters = y;
  }
  if (s.worldInfo) {
    const y = {};
    await Promise.all(
      l.selectedWorldNames.map(async (d) => {
        const x = await rr.loadWorldInfo(d);
        x && (y[d] = Object.values(x.entries).filter((w) => !w.disable));
      })
    ), g.lorebooks = y;
  }
  for (const y of f.prompts) {
    if (!y.enabled || y.promptName === "stDescription" && !s.stDescription || y.promptName === "charDefinitions" && !s.charCard || y.promptName === "lorebookDefinitions" && !s.worldInfo || y.promptName === "existingFieldDefinitions" && !s.existingFields || y.promptName === "personaDescription" && !s.persona || y.promptName === "chatHistory" && s.messages.type === "none" || Tn === void 0 && !Cr && y.promptName === "chatHistory") continue;
    if (y.promptName === "chatHistory") {
      p.push({
        id: Ud,
        role: "system",
        content: "[[Chat history placeholder]]",
        isInitial: !0
      });
      continue;
    }
    if (["taskDescription", "existingFieldDefinitions"].includes(y.promptName))
      continue;
    const x = u.prompts[y.promptName];
    if (!x || x.content.includes("{{activeFormatInstructions}}"))
      continue;
    let w = "";
    w = Ft.compile(x.content, { noEscape: !0 })(g), w = rr.substituteParams(w), w.trim() && p.push({
      id: `im-${p.length}`,
      role: y.role,
      content: w.trim(),
      isInitial: !0
    });
  }
  const m = r ? t.fields[r]?.label || t.draftFields[r]?.label : "Global", S = u.prompts.reviseTaskDescription.content, v = Ft.compile(S, { noEscape: !0 })({
    isFieldSession: !!r,
    targetLabel: m
  });
  return p.push({
    id: `im-${p.length}`,
    role: "system",
    content: v,
    isInitial: !0
  }), p;
}
const ru = SillyTavern.getContext(), Jy = "charCreator_reviseSessions", MA = ({
  target: t,
  onClose: r,
  onApply: i,
  initialState: s,
  contextToSend: l,
  sessionForContext: u
}) => {
  const [f, p] = Y.useState([]), [h, g] = Y.useState(null), [m, S] = Y.useState(!0);
  Y.useEffect(() => {
    const T = JSON.parse(localStorage.getItem(Jy) || "[]");
    p(T), S(!1);
  }, []);
  const v = Y.useMemo(() => f.filter((T) => T.type === t.type && (T.type === "global" || T.targetFieldId === t.fieldId)).sort((T, E) => new Date(E.createdAt).getTime() - new Date(T.createdAt).getTime()), [f, t]), y = (T) => {
    localStorage.setItem(Jy, JSON.stringify(T)), p(T);
  }, d = async () => {
    const T = t.type === "field" ? s.fields[t.fieldId]?.label || s.draftFields[t.fieldId]?.label : "Global", E = await ru.Popup.show.input(
      "New Session Name",
      `Session for ${T} - ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`
    );
    if (E)
      try {
        const O = St.getSettings();
        if (!O.profileId) {
          xe("warning", "Please select a connection profile in the main popup first.");
          return;
        }
        const j = {
          id: `rs-${Date.now()}`,
          name: E,
          type: t.type,
          targetFieldId: t.fieldId,
          createdAt: (/* @__PURE__ */ new Date()).toISOString(),
          messages: [],
          // Will be populated next
          context: {
            mainContextTemplatePreset: O.mainContextTemplatePreset
          },
          profileId: O.profileId,
          promptEngineeringMode: O.defaultPromptEngineeringMode,
          isReadonly: !1
        }, R = await jA(
          s,
          j.targetFieldId,
          j.context.mainContextTemplatePreset,
          l,
          u
        );
        j.messages = R, g(j);
      } catch (O) {
        console.error("Failed to create session:", O), xe("error", `Failed to create session: ${O.message}`);
      }
  }, x = (T) => {
    g(T);
  }, w = async (T) => {
    if (await ru.Popup.show.confirm("Delete Session", "Are you sure? This cannot be undone.")) {
      const O = f.filter((j) => j.id !== T);
      y(O);
    }
  }, A = (T) => {
    const E = f.findIndex((j) => j.id === T.id), O = [...f];
    E !== -1 ? O[E] = T : O.push(T), y(O), g(T);
  };
  if (h) {
    const T = ru.extensionSettings.connectionManager?.profiles?.find(
      (j) => j.id === h.profileId
    ), E = {
      targetCharacterId: Tn,
      ignoreCharacterFields: !0,
      ignoreWorldInfo: !0,
      ignoreAuthorNote: !0,
      includeNames: !!Cr,
      presetName: T?.preset,
      contextName: T?.context,
      instructName: T?.instruct
    }, O = l.messages;
    switch (O.type) {
      case "none":
        E.messageIndexesBetween = { start: -1, end: -1 };
        break;
      case "first":
        E.messageIndexesBetween = { start: 0, end: O.first ?? 10 };
        break;
      case "last":
        const j = ru.chat?.length ?? 0, R = O.last ?? 10;
        E.messageIndexesBetween = {
          end: Math.max(0, j - 1),
          start: Math.max(0, j - R)
        };
        break;
      case "range":
        E.messageIndexesBetween = {
          start: O.range?.start ?? 0,
          end: O.range?.end ?? 10
        };
        break;
    }
    return Tn === void 0 && !Cr && (E.messageIndexesBetween = { start: -1, end: -1 }), /* @__PURE__ */ _.jsx(
      kA,
      {
        session: h,
        onBack: () => g(null),
        onApply: i,
        onSessionUpdate: A,
        initialState: s,
        chatContextOptions: E
      }
    );
  }
  const C = t.type === "field" ? s.fields[t.fieldId]?.label || s.draftFields[t.fieldId]?.label : "Global";
  return /* @__PURE__ */ _.jsxs("div", { className: "revise-session-manager", children: [
    /* @__PURE__ */ _.jsx("div", { className: "popup_header", children: /* @__PURE__ */ _.jsxs("h2", { children: [
      'Revise Sessions for "',
      C,
      '"'
    ] }) }),
    /* @__PURE__ */ _.jsx("div", { className: "session-list", children: m ? /* @__PURE__ */ _.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "Loading sessions..." }) : v.length === 0 ? /* @__PURE__ */ _.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No sessions found. Create a new one to get started." }) : v.map((T) => /* @__PURE__ */ _.jsxs("div", { className: "session-item", children: [
      /* @__PURE__ */ _.jsxs("div", { className: "session-info", onClick: () => x(T), children: [
        /* @__PURE__ */ _.jsx("span", { className: "session-name", children: T.name }),
        /* @__PURE__ */ _.jsx("span", { className: "session-date", children: new Date(T.createdAt).toLocaleString() })
      ] }),
      /* @__PURE__ */ _.jsx(fe, { className: "danger_button", onClick: () => w(T.id), children: /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] }, T.id)) }),
    /* @__PURE__ */ _.jsx("div", { className: "session-actions", children: /* @__PURE__ */ _.jsxs(fe, { onClick: d, className: "menu_button", children: [
      /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-plus" }),
      " New Session"
    ] }) })
  ] });
}, sh = SillyTavern.getContext(), DA = `You are an expert character creator for roleplay AI. Based on the user's description, create a complete, detailed character card.

{{#if additionalInstructions}}
IMPORTANT RULES & STYLE GUIDELINES (Follow these strictly):
{{additionalInstructions}}
{{/if}}

User's request: {{userPrompt}}

{{#if includeLorebook}}
Also create a lorebook with 5-10 entries covering important aspects of the character's world, including locations, NPCs, historical events, world mechanics, and cultural details.
{{/if}}

Generate a complete character with ALL of the following fields filled in detail:

1. **name** - Character's name (creative and fitting)
2. **description** - Physical appearance and overview (2-3 detailed paragraphs describing their looks, age, build, distinctive features, clothing style, etc.)
3. **personality** - Detailed personality traits, motivations, fears, values, quirks (2-3 paragraphs covering their core traits, how they think, what drives them, their flaws and strengths)
4. **scenario** - The setting and context for interaction (1-2 paragraphs describing where and when the interaction takes place, the relationship with {{user}}, and the current situation)
5. **first_mes** - Opening message from the character (2-4 sentences with action and dialogue that sets the scene and shows personality)
6. **mes_example** - 3-4 example dialogue exchanges showing character's voice and style (use {{user}}: and {{char}}: format, include actions in asterisks)
7. **alternate_greetings** - Array of 3-5 alternative opening messages (each should be a completely different scenario, mood, or context than the first_mes. MUST be a simple array of strings).

IMPORTANT: Do NOT include the primary greeting (first_mes) in the alternate_greetings array. They are separate fields.
  
Example:
"first_mes": "Hello!",
"alternate_greetings": ["Hey there.", "Greetings, traveler.", "What do you want?"]

{{#if includeLorebook}}
8. **lorebook** - Object with entries array, each entry having:
   - keys: array of trigger words (2-5 words)
   - content: detailed information (1-2 paragraphs)
   - comment: entry title/name
   - enabled: true
   - insertion_order: number (0-9)
{{/if}}

CRITICAL: Return ONLY a valid JSON object with these exact field names. No markdown, no explanations, just the JSON.

Example format:
\`\`\`json
{
  "name": "Character Name",
  "description": "Detailed physical description...",
  "personality": "Detailed personality...",
  "scenario": "Setting and context...",
  "first_mes": "Opening message with *actions* and dialogue.",
  "mes_example": "{{user}}: Question?\\n{{char}}: *action* Response.\\n\\n{{user}}: Another question?\\n{{char}}: *action* Another response.",
  "alternate_greetings": [
    "Alternative greeting 1",
    "Alternative greeting 2"
  ]{{#if includeLorebook}},
  "lorebook": {
    "entries": [
      {
        "keys": ["trigger1", "trigger2"],
        "content": "Detailed information...",
        "comment": "Entry Title",
        "enabled": true,
        "insertion_order": 0
      }
    ]
  }{{/if}}
}
\`\`\``, RA = `You are an AI assistant helping to refine a character card. The user wants to make changes to their character.

Current character state:
{{currentCharacterJson}}

{{#if kbContent}}
REFERENCE MATERIALS (Use this information for accuracy):
{{kbContent}}
{{/if}}

{{#if additionalInstructions}}
SPECIAL INSTRUCTIONS & GUIDELINES (Priority: HIGH):
{{additionalInstructions}}
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
- "updatedFields": Object with only the fields that changed. 
- "fieldsUpdated": Array of field names that were modified (for UI display)

IMPORTANT: \`alternate_greetings\` is a SEPARATE array. Do NOT put alternative greetings into the \`first_mes\` field. \`first_mes\` is only for the primary greeting. If the user asks for multiple greetings, put the first one in \`first_mes\` and the rest in \`alternate_greetings\`.

Example with alternate greetings:
\`\`\`json
{
  "response": "I've set the primary greeting and added two more unique alternatives in the Alternate Greetings section.",
  "updatedFields": {
    "first_mes": "*Primary greeting content*",
    "alternate_greetings": [
      "*Alternative greeting 1*",
      "*Alternative greeting 2*"
    ]
  },
  "fieldsUpdated": ["first_mes", "alternate_greetings"]
}
\`\`\`

CRITICAL: Return ONLY valid JSON. No markdown code blocks, no explanations outside the JSON.`, zA = `You are an expert data cleaner. Your task is to process files scraped from the web and remove all technical noise (navigation, ads, social links, excessive HTML/JSON/Markdown structural overhead).

CLEANING MODE: {{mode}}

{{#if (eq mode "strip")}}
MODE INSTRUCTIONS: 
1. PRESERVE ALL core lore, story, facts, or descriptions.
2. DO NOT summarize or shorten the content. Keep every detail, dialogue, and fact intact.
3. Remove ONLY technical clutter and formatting noise.
{{/if}}

{{#if (eq mode "summary")}}
MODE INSTRUCTIONS: 
1. Extract the core lore and facts.
2. Perform a LIGHT summary: maintain key details and dialogue, but remove repetitive or less important filler text.
3. Ensure the result is readable and concise while still capturing the essence of the lore.
{{/if}}

{{#if (eq mode "heavy_summary")}}
MODE INSTRUCTIONS: 
1. Perform a HEAVY summary. Extract ONLY the most critical facts, lore, and character traits.
2. Be extremely concise. Condense long paragraphs into a few bullet points or short sentences.
3. Remove everything except the absolute essentials needed for world-building or character context.
{{/if}}

GENERAL RULES:
1. Convert everything to clean PLAIN TEXT.
2. Separate each cleaned file with a clear header: [START_FILE: filename] and [END_FILE: filename].

{{#if additionalInstructions}}
SPECIAL USER GUIDELINES (Priority: High):
{{additionalInstructions}}
{{/if}}

Files to process:
{{filesToClean}}

CRITICAL: Return ONLY the cleaned files using the [START_FILE: filename] and [END_FILE: filename] tags. No explanations.`;
async function Ky({
  files: t,
  profileId: r,
  mode: i = "strip",
  additionalInstructions: s
}) {
  try {
    const l = await Promise.resolve().then(() => Cu);
    l.helpers.eq || l.registerHelper("eq", (y, d) => y === d);
    const u = l.compile(zA), f = t.map((y) => `--- ORIGINAL FILE: ${y.name} ---
${y.content}
--- END ORIGINAL ---`).join(`

`), p = u({ filesToClean: f, additionalInstructions: s, mode: i }), h = await sh.ConnectionManagerRequestService.sendRequest(
      r,
      [{ role: "user", content: p }],
      4096
      // High token limit for multiple files
    );
    if (!h || !h.content)
      throw new Error("No response from AI");
    const g = h.content.trim(), m = [], S = /\[START_FILE:\s*(.+?)\]([\s\S]*?)\[END_FILE:\s*\1\]/g;
    let v;
    for (; (v = S.exec(g)) !== null; )
      m.push({
        name: v[1].trim(),
        content: v[2].trim()
      });
    if (m.length === 0) {
      if (t.length === 1)
        return [{ name: t[0].name, content: g }];
      throw new Error("AI failed to return files in the requested format (missing tags).");
    }
    return m;
  } catch (l) {
    throw console.error("Cleaning error:", l), new Error(`Failed to clean files: ${l.message || String(l)}`);
  }
}
async function LA(t, r, i, s) {
  try {
    const f = (await Promise.resolve().then(() => Cu)).compile(DA)({ userPrompt: t, includeLorebook: r, additionalInstructions: s }), p = await sh.ConnectionManagerRequestService.sendRequest(
      i,
      [{ role: "user", content: f }],
      4096
    );
    if (!p || !p.content)
      throw new Error("No response from AI");
    let h = p.content.trim();
    const g = h.match(/```(?:json)?\s*(\{[\s\S]*\})\s*```/);
    g && (h = g[1]);
    const m = JSON.parse(h), S = ["name", "description", "personality", "scenario", "first_mes", "mes_example"];
    for (const d of S)
      if (!m[d])
        throw new Error(`Missing required field: ${d}`);
    const v = {
      name: m.name,
      description: m.description,
      personality: m.personality,
      scenario: m.scenario,
      first_mes: m.first_mes,
      mes_example: m.mes_example,
      alternate_greetings: m.alternate_greetings || []
    };
    let y;
    return r && m.lorebook && (y = {
      name: m.lorebook.name || `${v.name} Lorebook`,
      description: m.lorebook.description || "",
      scan_depth: m.lorebook.scan_depth || 4,
      token_budget: m.lorebook.token_budget || 2048,
      recursive_scanning: m.lorebook.recursive_scanning ?? !1,
      extensions: m.lorebook.extensions || {},
      entries: m.lorebook.entries || []
    }), { character: v, lorebook: y };
  } catch (l) {
    throw console.error("Error generating character:", l), new Error(`Failed to generate character: ${l.message || String(l)}`);
  }
}
function IA(t, r) {
  const i = {
    ...r,
    fields: { ...r.fields },
    draftFields: { ...r.draftFields }
  };
  dn.forEach((l) => {
    t[l] && (i.fields[l] = {
      value: String(t[l]),
      prompt: "",
      label: Xn[l]
    });
  });
  const s = t.alternate_greetings || [];
  return Object.keys(i.fields).forEach((l) => {
    l.startsWith("alternate_greetings_") && delete i.fields[l];
  }), s.forEach((l, u) => {
    const f = `alternate_greetings_${u + 1}`;
    i.fields[f] = {
      value: l,
      prompt: "",
      label: `Alternate Greeting ${u + 1}`
    };
  }), i;
}
async function PA({
  messages: t,
  session: r,
  profileId: i,
  maxResponseToken: s = 3072,
  // Increased default
  kbFiles: l = [],
  additionalInstructions: u
}) {
  try {
    const f = await Promise.resolve().then(() => Cu), p = l.filter((E) => E.enabled);
    let h = "";
    p.length > 0 && (h = p.map((E) => `--- FILE: ${E.name} ---
${E.content}
--- END FILE ---`).join(`

`));
    const g = {};
    dn.forEach((E) => {
      r.fields[E]?.value && (g[E] = r.fields[E].value);
    });
    const m = [];
    Object.keys(r.fields).filter((E) => E.startsWith("alternate_greetings_")).sort((E, O) => parseInt(E.split("_")[2]) - parseInt(O.split("_")[2])).forEach((E) => {
      r.fields[E].value && m.push(r.fields[E].value);
    }), g.alternate_greetings = m;
    const S = f.compile(RA), v = t[t.length - 1].content, y = S({
      currentCharacterJson: JSON.stringify(g, null, 2),
      userMessage: v,
      kbContent: h,
      additionalInstructions: u
    }), d = await sh.ConnectionManagerRequestService.sendRequest(
      i,
      [{ role: "user", content: y }],
      s
    );
    if (!d || !d.content)
      throw new Error("No response from AI");
    let x = d.content.trim();
    const w = x.match(/```(?:json)?\s*(\{[\s\S]*?)(?:```|$)/i);
    if (w)
      x = w[1];
    else {
      const E = x.indexOf("{"), O = x.lastIndexOf("}");
      E !== -1 && O !== -1 && O >= E && (x = x.substring(E, O + 1));
    }
    let A;
    try {
      A = JSON.parse(x);
    } catch (E) {
      console.warn("JSON parse failed, returning raw response as fallback:", E);
      let O = d.content.trim();
      return (O.includes("{") || O.includes("```")) && (O = `⚠️ I tried to process your request but my response was too long and got cut off. Here's what I generated:

${O}

💡 **Tip**: Try increasing "Max Response Tokens" in Generation Options (currently set too low).`), { aiMessage: {
        role: "assistant",
        content: O,
        timestamp: Date.now(),
        fieldsUpdated: []
      }, updatedSession: r };
    }
    let C = {
      ...r,
      fields: { ...r.fields },
      draftFields: { ...r.draftFields }
    };
    return A.updatedFields && Object.keys(A.updatedFields).forEach((E) => {
      if (E === "alternate_greetings") {
        Object.keys(C.fields).forEach((j) => {
          j.startsWith("alternate_greetings_") && delete C.fields[j];
        });
        const O = A.updatedFields[E];
        Array.isArray(O) && O.forEach((j, R) => {
          const H = `alternate_greetings_${R + 1}`;
          C.fields[H] = {
            value: String(j),
            prompt: "",
            label: `Alternate Greeting ${R + 1}`
          };
        });
      } else (dn.includes(E) || C.draftFields[E]) && (dn.includes(E) ? C.fields[E] = {
        value: String(A.updatedFields[E]),
        prompt: "",
        label: Xn[E]
      } : C.draftFields[E] && (C.draftFields[E] = {
        ...C.draftFields[E],
        value: String(A.updatedFields[E])
      }));
    }), { aiMessage: {
      role: "assistant",
      content: A.response || "I've updated the character as requested.",
      timestamp: Date.now(),
      fieldsUpdated: A.fieldsUpdated || []
    }, updatedSession: C };
  } catch (f) {
    throw console.error("Error in chat message:", f), new Error(`Chat error: ${f.message || String(f)}`);
  }
}
const Wy = (t) => {
  const r = St.getSettings().soundNotifications;
  if (!r?.enabled) return;
  const i = new Audio(`scripts/extensions/third-party/SillyTavern-Character-Creator/templates/${t}.wav`);
  i.volume = r.volume ?? 0.5, i.play().catch((s) => console.error("Failed to play sound:", s));
}, T1 = ({
  session: t,
  onSessionUpdate: r,
  profileId: i,
  maxResponseToken: s,
  kbFiles: l,
  messages: u,
  onMessagesChange: f,
  additionalInstructions: p
}) => {
  const [h, g] = Y.useState(""), [m, S] = Y.useState(!1), v = Y.useRef(null), y = () => {
    v.current?.scrollIntoView({ behavior: "smooth" });
  };
  Y.useEffect(() => {
    y();
  }, [u.length]);
  const d = Y.useCallback(async () => {
    if (!h.trim() || m) return;
    const C = {
      role: "user",
      content: h.trim(),
      timestamp: Date.now()
    }, T = [...u, C];
    f(T), g(""), S(!0);
    try {
      const { aiMessage: E, updatedSession: O } = await PA({
        messages: T,
        session: t,
        profileId: i,
        maxResponseToken: s,
        kbFiles: l,
        additionalInstructions: p
      });
      f([...T, E]), r(O), Wy("success");
    } catch (E) {
      console.error("Chat error:", E), xe("error", `Chat error: ${E.message || String(E)}`);
      const O = {
        role: "assistant",
        content: `Error occurred: ${E.message || String(E)}`,
        timestamp: Date.now(),
        isError: !0
      };
      f([...T, O]), Wy("error");
    } finally {
      S(!1);
    }
  }, [h, u, t, i, r, m, f, s, l]), x = Y.useCallback((C) => {
    const T = u.filter((E, O) => O !== C);
    f(T);
  }, [u, f]), w = Y.useCallback(
    (C) => {
      C.key === "Enter" && !C.shiftKey && (C.preventDefault(), d());
    },
    [d]
  ), A = Y.useCallback(async () => {
    await SillyTavern.getContext().Popup.show.confirm(
      "Clear Chat",
      "Are you sure you want to clear the chat history?"
    ) && f([]);
  }, [f]);
  return /* @__PURE__ */ _.jsxs("div", { className: "chat-interface", children: [
    /* @__PURE__ */ _.jsxs("div", { className: "chat-header", style: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 15px", borderBottom: "1px solid rgba(255,255,255,0.05)" }, children: [
      /* @__PURE__ */ _.jsx("h3", { children: "AI Assistant" }),
      /* @__PURE__ */ _.jsx(fe, { onClick: A, className: "menu_button secondary small", children: "Clear" })
    ] }),
    /* @__PURE__ */ _.jsxs("div", { className: "chat-messages", children: [
      u.length === 0 && /* @__PURE__ */ _.jsxs("div", { className: "chat-welcome", children: [
        /* @__PURE__ */ _.jsx("p", { children: "👋 Hi! I'm your AI assistant for character creation." }),
        /* @__PURE__ */ _.jsx("p", { children: "I can help you refine your character by answering questions or making adjustments. Just tell me what you'd like to change!" }),
        /* @__PURE__ */ _.jsxs("div", { className: "chat-examples", children: [
          /* @__PURE__ */ _.jsx("p", { children: /* @__PURE__ */ _.jsx("strong", { children: "Examples:" }) }),
          /* @__PURE__ */ _.jsxs("ul", { children: [
            /* @__PURE__ */ _.jsx("li", { children: '"Make her more mysterious"' }),
            /* @__PURE__ */ _.jsx("li", { children: '"Add a tragic backstory"' }),
            /* @__PURE__ */ _.jsx("li", { children: '"Change the setting to a cyberpunk city"' }),
            /* @__PURE__ */ _.jsx("li", { children: '"Make the dialogue more formal"' })
          ] })
        ] })
      ] }),
      u.map((C, T) => /* @__PURE__ */ _.jsxs("div", { className: `chat-message ${C.role} ${C.isError ? "error-message" : ""}`, children: [
        /* @__PURE__ */ _.jsx(
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
            onClick: () => x(T),
            title: "Delete message",
            children: /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-trash-can" })
          }
        ),
        /* @__PURE__ */ _.jsxs("div", { className: "message-content", children: [
          /* @__PURE__ */ _.jsx("div", { className: "message-text", style: { whiteSpace: "pre-wrap" }, children: C.content }),
          C.fieldsUpdated && C.fieldsUpdated.length > 0 && /* @__PURE__ */ _.jsx("div", { className: "message-updates", children: /* @__PURE__ */ _.jsxs("small", { children: [
            "✏️ Updated: ",
            C.fieldsUpdated.join(", ")
          ] }) })
        ] }),
        /* @__PURE__ */ _.jsx("div", { className: "message-avatar", children: C.role === "user" ? "👤" : "🤖" })
      ] }, T)),
      m && /* @__PURE__ */ _.jsxs("div", { className: "chat-message assistant", children: [
        /* @__PURE__ */ _.jsx("div", { className: "message-content", children: /* @__PURE__ */ _.jsxs("div", { className: "message-text typing", children: [
          /* @__PURE__ */ _.jsx("span", { children: "." }),
          /* @__PURE__ */ _.jsx("span", { children: "." }),
          /* @__PURE__ */ _.jsx("span", { children: "." })
        ] }) }),
        /* @__PURE__ */ _.jsx("div", { className: "message-avatar", children: "🤖" })
      ] }),
      /* @__PURE__ */ _.jsx("div", { ref: v })
    ] }),
    /* @__PURE__ */ _.jsxs("div", { className: "chat-input-area", children: [
      /* @__PURE__ */ _.jsx(
        en,
        {
          value: h,
          onChange: (C) => g(C.target.value),
          onKeyDown: w,
          placeholder: "Type your message... (Enter to send, Shift+Enter for new line)",
          rows: 3,
          disabled: m,
          className: "chat-input",
          style: { flex: 1 }
        }
      ),
      /* @__PURE__ */ _.jsx(
        "button",
        {
          onClick: d,
          disabled: !h.trim() || m,
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
            cursor: !h.trim() || m ? "not-allowed" : "pointer",
            opacity: !h.trim() || m ? 0.7 : 1
          },
          children: /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-paper-plane", style: { color: "white" } })
        }
      )
    ] })
  ] });
}, BA = () => ({
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
}), UA = ({
  lorebook: t,
  onLorebookChange: r,
  isGenerating: i,
  onGenerateEntry: s
}) => {
  const [l, u] = Y.useState(null);
  Y.useEffect(() => {
    t.entries.length > 0 ? (!l || !t.entries.find((v) => v.id === l)) && u(t.entries[0].id) : u(null);
  }, [t.entries, l]);
  const f = Y.useCallback(() => {
    const v = BA();
    r({
      ...t,
      entries: [...t.entries, v]
    }), u(v.id);
  }, [t, r]), p = Y.useCallback(
    async (v) => {
      const y = SillyTavern.getContext(), d = t.entries.find((w) => w.id === v);
      if (await y.Popup.show.confirm(
        "Delete Entry",
        `Delete "${d?.comment || "Untitled Entry"}"?`
      )) {
        const w = t.entries.filter((A) => A.id !== v);
        r({ ...t, entries: w }), l === v && u(w.length > 0 ? w[0].id : null);
      }
    },
    [t, r, l]
  ), h = Y.useCallback(
    (v, y, d) => {
      const x = t.entries.map(
        (w) => w.id === v ? { ...w, [y]: d } : w
      );
      r({ ...t, entries: x });
    },
    [t, r]
  ), g = Y.useCallback(
    (v, y, d = !1) => {
      const x = y.split(",").map((w) => w.trim()).filter((w) => w.length > 0);
      h(v, d ? "secondary_keys" : "keys", x);
    },
    [h]
  ), m = Y.useCallback(
    (v, y) => {
      r({ ...t, [v]: y });
    },
    [t, r]
  ), S = t.entries.find((v) => v.id === l);
  return /* @__PURE__ */ _.jsxs("div", { className: "lorebook-editor", children: [
    /* @__PURE__ */ _.jsxs("div", { className: "card lorebook-settings", children: [
      /* @__PURE__ */ _.jsx("h3", { children: "📚 Lorebook Settings" }),
      /* @__PURE__ */ _.jsxs("div", { className: "settings-grid", children: [
        /* @__PURE__ */ _.jsxs("label", { children: [
          "Name",
          /* @__PURE__ */ _.jsx(
            "input",
            {
              type: "text",
              className: "text_pole",
              value: t.name,
              onChange: (v) => m("name", v.target.value),
              placeholder: "My Lorebook"
            }
          )
        ] }),
        /* @__PURE__ */ _.jsxs("label", { children: [
          "Scan Depth",
          /* @__PURE__ */ _.jsx(
            "input",
            {
              type: "number",
              className: "text_pole",
              value: t.scan_depth,
              onChange: (v) => m("scan_depth", v.target.value === "" ? 0 : parseInt(v.target.value)),
              min: 0,
              max: 100
            }
          )
        ] }),
        /* @__PURE__ */ _.jsxs("label", { children: [
          "Token Budget",
          /* @__PURE__ */ _.jsx(
            "input",
            {
              type: "number",
              className: "text_pole",
              value: t.token_budget,
              onChange: (v) => m("token_budget", v.target.value === "" ? 0 : parseInt(v.target.value)),
              min: 0
            }
          )
        ] }),
        /* @__PURE__ */ _.jsxs("label", { className: "checkbox_label", children: [
          /* @__PURE__ */ _.jsx(
            "input",
            {
              type: "checkbox",
              checked: t.recursive_scanning,
              onChange: (v) => m("recursive_scanning", v.target.checked)
            }
          ),
          "Recursive Scanning"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ _.jsxs("div", { className: "lorebook-content", children: [
      /* @__PURE__ */ _.jsxs("div", { className: "entries-sidebar", children: [
        /* @__PURE__ */ _.jsxs("div", { className: "entries-header", children: [
          /* @__PURE__ */ _.jsxs("h4", { children: [
            "Entries (",
            t.entries.length,
            ")"
          ] }),
          /* @__PURE__ */ _.jsx(fe, { onClick: f, className: "menu_button small", children: /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-plus" }) })
        ] }),
        /* @__PURE__ */ _.jsx("div", { className: "entries-list", children: t.entries.length === 0 ? /* @__PURE__ */ _.jsxs("div", { className: "empty-state", children: [
          /* @__PURE__ */ _.jsx("p", { children: "No entries yet" }),
          /* @__PURE__ */ _.jsxs(fe, { onClick: f, children: [
            /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-plus" }),
            " Add Entry"
          ] })
        ] }) : t.entries.map((v, y) => /* @__PURE__ */ _.jsxs(
          "div",
          {
            className: `entry-item ${l === v.id ? "active" : ""} ${v.enabled ? "" : "disabled"}`,
            onClick: () => u(v.id),
            children: [
              /* @__PURE__ */ _.jsxs("div", { className: "entry-item-header", children: [
                /* @__PURE__ */ _.jsxs("span", { className: "entry-index", children: [
                  "#",
                  y + 1
                ] }),
                /* @__PURE__ */ _.jsx("span", { className: "entry-title", children: v.comment || v.keys.join(", ") || "Untitled" }),
                v.constant && /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-thumbtack", title: "Always Active" })
              ] }),
              /* @__PURE__ */ _.jsxs("div", { className: "entry-keys-preview", children: [
                v.keys.slice(0, 3).join(", "),
                v.keys.length > 3 && ` +${v.keys.length - 3}`
              ] })
            ]
          },
          v.id
        )) })
      ] }),
      /* @__PURE__ */ _.jsx("div", { className: "entry-editor", children: S ? /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
        /* @__PURE__ */ _.jsxs("div", { className: "entry-editor-header", children: [
          /* @__PURE__ */ _.jsx("h4", { children: S.comment || "Edit Entry" }),
          /* @__PURE__ */ _.jsxs("div", { className: "entry-actions", children: [
            s && /* @__PURE__ */ _.jsx(
              fe,
              {
                onClick: () => s(S.id),
                disabled: i === S.id,
                className: "menu_button small",
                title: "Generate with AI",
                children: i === S.id ? /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" })
              }
            ),
            /* @__PURE__ */ _.jsx(
              fe,
              {
                onClick: () => p(S.id),
                className: "menu_button small danger",
                title: "Delete Entry",
                children: /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-trash" })
              }
            ),
            /* @__PURE__ */ _.jsx("div", { style: { marginLeft: "10px", minWidth: "80px" }, children: /* @__PURE__ */ _.jsx(HA, { content: S.content }) })
          ] })
        ] }),
        /* @__PURE__ */ _.jsxs("div", { className: "entry-form", children: [
          /* @__PURE__ */ _.jsxs("label", { children: [
            "Title / Comment",
            /* @__PURE__ */ _.jsx(
              "input",
              {
                type: "text",
                className: "text_pole",
                value: S.comment,
                onChange: (v) => h(S.id, "comment", v.target.value),
                placeholder: "Entry title or description"
              }
            )
          ] }),
          /* @__PURE__ */ _.jsxs("label", { children: [
            "Keys (comma separated)",
            /* @__PURE__ */ _.jsx(
              "input",
              {
                type: "text",
                className: "text_pole",
                value: S.keys.join(", "),
                onChange: (v) => g(S.id, v.target.value),
                placeholder: "keyword1, keyword2, keyword3"
              }
            )
          ] }),
          /* @__PURE__ */ _.jsxs("label", { children: [
            "Secondary Keys (optional, comma separated)",
            /* @__PURE__ */ _.jsx(
              "input",
              {
                type: "text",
                className: "text_pole",
                value: S.secondary_keys.join(", "),
                onChange: (v) => g(S.id, v.target.value, !0),
                placeholder: "filter1, filter2"
              }
            )
          ] }),
          /* @__PURE__ */ _.jsxs("label", { children: [
            "Content",
            /* @__PURE__ */ _.jsx(
              en,
              {
                value: S.content,
                onChange: (v) => h(S.id, "content", v.target.value),
                rows: 8,
                placeholder: "The lore content that will be injected when keys are triggered..."
              }
            )
          ] }),
          /* @__PURE__ */ _.jsxs("div", { className: "entry-options", children: [
            /* @__PURE__ */ _.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ _.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: S.enabled,
                  onChange: (v) => h(S.id, "enabled", v.target.checked)
                }
              ),
              "Enabled"
            ] }),
            /* @__PURE__ */ _.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ _.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: S.constant,
                  onChange: (v) => h(S.id, "constant", v.target.checked)
                }
              ),
              "Always Active"
            ] }),
            /* @__PURE__ */ _.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ _.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: S.selective,
                  onChange: (v) => h(S.id, "selective", v.target.checked)
                }
              ),
              "Selective"
            ] })
          ] }),
          /* @__PURE__ */ _.jsxs("div", { className: "entry-advanced", children: [
            /* @__PURE__ */ _.jsxs("label", { children: [
              "Insertion Order",
              /* @__PURE__ */ _.jsx(
                "input",
                {
                  type: "number",
                  className: "text_pole small",
                  value: S.insertion_order,
                  onChange: (v) => h(
                    S.id,
                    "insertion_order",
                    v.target.value === "" ? 0 : parseInt(v.target.value)
                  )
                }
              )
            ] }),
            /* @__PURE__ */ _.jsxs("label", { children: [
              "Position",
              /* @__PURE__ */ _.jsxs(
                "select",
                {
                  className: "text_pole",
                  value: S.position,
                  onChange: (v) => h(
                    S.id,
                    "position",
                    v.target.value
                  ),
                  children: [
                    /* @__PURE__ */ _.jsx("option", { value: "before_char", children: "Before Character" }),
                    /* @__PURE__ */ _.jsx("option", { value: "after_char", children: "After Character" })
                  ]
                }
              )
            ] })
          ] })
        ] })
      ] }) : /* @__PURE__ */ _.jsxs("div", { className: "empty-editor", children: [
        /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-book-open" }),
        /* @__PURE__ */ _.jsx("p", { children: "Select an entry or create a new one" }),
        /* @__PURE__ */ _.jsxs(fe, { onClick: f, children: [
          /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-plus" }),
          " Create Entry"
        ] })
      ] }) })
    ] })
  ] });
}, HA = ({ content: t }) => {
  const { tokens: r, isCalculating: i } = Kd(t);
  return /* @__PURE__ */ _.jsx("div", { className: "token-counter", style: {
    fontSize: "var(--font-size-small, 0.8em)",
    opacity: 0.5,
    fontFamily: "var(--font-family-mono, monospace)",
    whiteSpace: "nowrap"
  }, children: i ? /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ _.jsx(_.Fragment, { children: r !== null ? `${r} tokens` : "" }) });
}, e0 = () => ({
  name: "New Lorebook",
  description: "",
  scan_depth: 4,
  token_budget: 2048,
  recursive_scanning: !1,
  entries: []
}), qA = SillyTavern.getContext(), t0 = (t) => {
  const r = St.getSettings().soundNotifications;
  if (!r?.enabled) return;
  const i = new Audio(`scripts/extensions/third-party/SillyTavern-Character-Creator/templates/${t}.wav`);
  i.volume = r.volume ?? 0.5, i.play().catch((s) => console.error("Failed to play sound:", s));
}, FA = `You are an AI assistant specialized in creating World Info / Lorebook entries for roleplay AI systems.

Current Lorebook: "{{lorebookName}}"

{{#if kbContent}}
REFERENCE MATERIALS (Use this information for accuracy):
{{kbContent}}
{{/if}}

{{#if additionalInstructions}}
IMPORTANT GUIDELINES & CONSTRAINTS (Priority: HIGH):
{{additionalInstructions}}
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
Focus ONLY on creating Lorebook entries. Do NOT modify any character data.`, ZA = ({
  lorebook: t,
  onLorebookChange: r,
  profileId: i,
  maxResponseToken: s = 3072,
  kbFiles: l = [],
  messages: u,
  onMessagesChange: f,
  additionalInstructions: p
}) => {
  const [h, g] = Y.useState(""), [m, S] = Y.useState(!1), v = Y.useRef(null), y = () => {
    v.current?.scrollIntoView({ behavior: "smooth" });
  };
  Y.useEffect(() => {
    y();
  }, [u.length]);
  const d = Y.useCallback(async () => {
    if (!h.trim() || m) return;
    const C = {
      role: "user",
      content: h.trim(),
      timestamp: Date.now()
    }, T = [...u, C];
    f(T), g(""), S(!0);
    try {
      const E = await Promise.resolve().then(() => Cu), O = l.filter((W) => W.enabled);
      let j = "";
      O.length > 0 && (j = O.map((W) => `--- FILE: ${W.name} ---
${W.content}
--- END FILE ---`).join(`

`));
      const R = t.entries.length > 0 ? JSON.stringify(t.entries.map((W) => ({
        comment: W.comment,
        keys: W.keys,
        content: W.content.substring(0, 200) + (W.content.length > 200 ? "..." : ""),
        constant: W.constant,
        enabled: W.enabled
      })), null, 2) : "[]", Q = E.compile(FA)({
        lorebookName: t.name,
        currentEntriesJson: R,
        userMessage: h.trim(),
        kbContent: j,
        additionalInstructions: p
      }), B = await qA.ConnectionManagerRequestService.sendRequest(
        i,
        [{ role: "user", content: Q }],
        s
      );
      if (!B || !B.content)
        throw new Error("No response from AI");
      let V = B.content.trim();
      const $ = V.match(/```(?:json)?\s*(\{[\s\S]*?)(?:```|$)/i);
      if ($)
        V = $[1];
      else {
        const W = V.indexOf("{"), L = V.lastIndexOf("}");
        W !== -1 && L !== -1 && L >= W && (V = V.substring(W, L + 1));
      }
      let F;
      try {
        F = JSON.parse(V);
      } catch (W) {
        console.warn("JSON parse failed for lorebook chat:", W);
        const L = {
          role: "assistant",
          content: `⚠️ I tried to generate entries but my response was malformed. Here's the raw output:

${B.content}

💡 Try increasing "Max Response Tokens" or simplifying your request.`,
          timestamp: Date.now(),
          entriesUpdated: [],
          isError: !0
        };
        f([...T, L]), S(!1);
        return;
      }
      if (F.newEntries && Array.isArray(F.newEntries) && F.newEntries.length > 0) {
        const W = F.newEntries.map((L, ae) => ({
          id: `entry_${Date.now()}_${ae}_${Math.random().toString(36).substr(2, 9)}`,
          keys: Array.isArray(L.keys) ? L.keys : (L.keys || "").split(",").map((de) => de.trim()),
          secondary_keys: [],
          content: L.content || "",
          comment: L.comment || `Entry ${t.entries.length + ae + 1}`,
          enabled: L.enabled ?? !0,
          constant: L.constant ?? !1,
          selective: !1,
          insertion_order: t.entries.length + ae,
          position: "before_char"
        }));
        r({
          ...t,
          entries: [...t.entries, ...W]
        });
      }
      const te = {
        role: "assistant",
        content: F.response || "I've updated the lorebook as requested.",
        timestamp: Date.now(),
        entriesUpdated: F.entriesUpdated || []
      };
      f([...T, te]), t0("success");
    } catch (E) {
      console.error("Lorebook chat error:", E);
      const O = {
        role: "assistant",
        content: `Error occurred: ${E.message || String(E)}`,
        timestamp: Date.now(),
        isError: !0
      };
      f([...T, O]), t0("error");
    } finally {
      S(!1);
    }
  }, [h, m, t, r, i, s, l, u, f]), x = Y.useCallback((C) => {
    const T = u.filter((E, O) => O !== C);
    f(T);
  }, [u, f]), w = Y.useCallback(async () => {
    await SillyTavern.getContext().Popup.show.confirm(
      "Clear Chat",
      "Are you sure you want to clear the chat history?"
    ) && f([]);
  }, [f]), A = (C) => {
    C.key === "Enter" && !C.shiftKey && (C.preventDefault(), d());
  };
  return /* @__PURE__ */ _.jsxs("div", { className: "chat-interface", children: [
    /* @__PURE__ */ _.jsxs("div", { className: "chat-header", style: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 15px", borderBottom: "1px solid rgba(255,255,255,0.05)" }, children: [
      /* @__PURE__ */ _.jsx("h3", { children: "Lorebook Assistant" }),
      /* @__PURE__ */ _.jsx(fe, { onClick: w, className: "menu_button secondary small", children: "Clear" })
    ] }),
    /* @__PURE__ */ _.jsxs("div", { className: "chat-messages", children: [
      u.length === 0 && /* @__PURE__ */ _.jsxs("div", { className: "chat-welcome", children: [
        /* @__PURE__ */ _.jsx("span", { className: "welcome-emoji", children: "📚" }),
        " Hi! I'm your AI assistant for Lorebook creation.",
        /* @__PURE__ */ _.jsx("p", { children: "I can help you create World Info entries for your setting. Just tell me what you need!" }),
        /* @__PURE__ */ _.jsxs("div", { className: "chat-examples", children: [
          /* @__PURE__ */ _.jsx("p", { children: /* @__PURE__ */ _.jsx("strong", { children: "Examples:" }) }),
          /* @__PURE__ */ _.jsxs("ul", { children: [
            /* @__PURE__ */ _.jsx("li", { children: '"Create 3 entries about the Steins;Gate universe"' }),
            /* @__PURE__ */ _.jsx("li", { children: '"Add entries for the main characters of Evangelion"' }),
            /* @__PURE__ */ _.jsx("li", { children: '"Generate lore for a cyberpunk megacity"' }),
            /* @__PURE__ */ _.jsx("li", { children: '"Create entries about magic systems in my fantasy world"' })
          ] })
        ] })
      ] }),
      u.map((C, T) => /* @__PURE__ */ _.jsxs("div", { className: `chat-message ${C.role} ${C.isError ? "error-message" : ""}`, children: [
        /* @__PURE__ */ _.jsx(
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
            onClick: () => x(T),
            title: "Delete message",
            children: /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-trash-can" })
          }
        ),
        /* @__PURE__ */ _.jsxs("div", { className: "message-content", children: [
          /* @__PURE__ */ _.jsx("div", { className: "message-text", style: { whiteSpace: "pre-wrap" }, children: C.content }),
          C.entriesUpdated && C.entriesUpdated.length > 0 && /* @__PURE__ */ _.jsxs("div", { className: "entries-updated", children: [
            "✏️ Entries: ",
            C.entriesUpdated.join(", ")
          ] })
        ] }),
        /* @__PURE__ */ _.jsx("span", { className: "message-icon", children: C.role === "user" ? "👤" : "🤖" })
      ] }, T)),
      m && /* @__PURE__ */ _.jsxs("div", { className: "chat-message assistant loading", children: [
        /* @__PURE__ */ _.jsxs("div", { className: "message-content", children: [
          /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-spinner fa-spin" }),
          " Creating entries..."
        ] }),
        /* @__PURE__ */ _.jsx("span", { className: "message-icon", children: "🤖" })
      ] }),
      /* @__PURE__ */ _.jsx("div", { ref: v })
    ] }),
    /* @__PURE__ */ _.jsxs("div", { className: "chat-input-area", children: [
      /* @__PURE__ */ _.jsx(
        en,
        {
          value: h,
          onChange: (C) => g(C.target.value),
          onKeyDown: A,
          placeholder: "Describe entries to create... (Enter to send, Shift+Enter for new line)",
          rows: 2,
          disabled: m,
          style: { flex: 1 }
        }
      ),
      /* @__PURE__ */ _.jsx(
        "button",
        {
          onClick: d,
          disabled: m || !h.trim(),
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
            cursor: m || !h.trim() ? "not-allowed" : "pointer",
            opacity: m || !h.trim() ? 0.7 : 1
          },
          children: /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-paper-plane", style: { color: "white" } })
        }
      )
    ] })
  ] });
}, GA = SillyTavern.getContext(), VA = [
  { id: 13, name: "Gemma" },
  { id: 12, name: "Llama 3" },
  { id: 3, name: "Llama 2" },
  { id: 7, name: "Mistral" },
  { id: 2, name: "OpenAI (GPT-4)" },
  { id: 11, name: "Claude" }
], n0 = ({ files: t, onFilesChange: r }) => {
  const i = Y.useRef(null), [s, l] = Y.useState(St.getSettings().preferredTokenizer || 13), [u, f] = Y.useState(!1), [p, h] = Y.useState(""), g = (T) => {
    const E = Array.from(T.target.files || []);
    if (E.length === 0) return;
    const O = [];
    let j = 0;
    E.forEach((R) => {
      const H = new FileReader();
      H.onload = (Q) => {
        const B = Q.target?.result;
        B.indexOf("\0") !== -1 ? console.warn(`File ${R.name} appears to be binary, skipping.`) : O.push({
          id: `kb_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          name: R.name,
          content: B,
          originalContent: B,
          // Save original state
          enabled: !0,
          size: R.size
        }), j++, j === E.length && (r([...t, ...O]), i.current && (i.current.value = ""));
      }, H.readAsText(R);
    });
  }, m = (T) => {
    r(t.map((E) => E.id === T ? { ...E, enabled: !E.enabled } : E));
  }, S = (T) => {
    r(t.filter((E) => E.id !== T));
  }, v = (T) => {
    r(t.map((E) => E.id === T && E.originalContent ? { ...E, content: E.originalContent, cleanMode: void 0 } : E));
  }, y = async () => {
    await GA.Popup.show.confirm(
      "Clear Knowledge Base",
      `Are you sure you want to remove all ${t.length} files from the knowledge base?`
    ) && r([]);
  }, d = async (T) => {
    if (!(u || T.length === 0)) {
      f(!0);
      try {
        const O = {
          13: "/api/tokenizers/gemma/encode",
          12: "/api/tokenizers/llama3/encode",
          3: "/api/tokenizers/llama/encode",
          7: "/api/tokenizers/mistral/encode",
          2: "/api/tokenizers/openai/encode",
          11: "/api/tokenizers/claude/encode"
        }[s], j = [...t], R = 15;
        for (let H = 0; H < j.length; H += R) {
          const Q = [];
          for (let B = H; B < Math.min(H + R, j.length); B++)
            j[B].tokens === void 0 && Q.push(B);
          Q.length !== 0 && await Promise.all(Q.map(async (B) => {
            try {
              const V = j[B], F = await (await fetch(O, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text: V.content })
              })).json();
              F && F.ids && Array.isArray(F.ids) ? j[B] = { ...V, tokens: F.ids.length } : Array.isArray(F) ? j[B] = { ...V, tokens: F.length } : typeof F.token_count == "number" ? j[B] = { ...V, tokens: F.token_count } : j[B] = { ...V, tokens: Math.ceil(V.content.length / 3.35) };
            } catch (V) {
              console.error("Token count failed:", V), j[B] = { ...j[B], tokens: Math.ceil(j[B].content.length / 3.35) };
            }
          }));
        }
        r(j);
      } finally {
        f(!1);
      }
    }
  };
  Y.useEffect(() => {
    const T = t.filter((E) => E.tokens === void 0);
    T.length > 0 && !u && d(T);
  }, [t, s]);
  const x = (T) => {
    const E = Number(T.target.value);
    l(E);
    const O = St.getSettings();
    O.preferredTokenizer = E, St.saveSettings(), r(t.map((j) => ({ ...j, tokens: void 0 })));
  }, w = t.filter(
    (T) => T.name.toLowerCase().includes(p.toLowerCase())
  ), A = t.filter((T) => T.enabled).reduce((T, E) => T + (E.tokens || 0), 0), C = t.reduce((T, E) => T + (E.tokens || 0), 0);
  return /* @__PURE__ */ _.jsxs("div", { className: "card knowledge-base", children: [
    /* @__PURE__ */ _.jsxs("div", { className: "card-header", style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }, children: [
      /* @__PURE__ */ _.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ _.jsx("h3", { style: { margin: 0 }, children: "🧠 Knowledge Base" }),
        u && /* @__PURE__ */ _.jsxs("div", { style: { fontSize: "0.8em", opacity: 0.6 }, children: [
          /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-spinner fa-spin" }),
          " Counting..."
        ] })
      ] }),
      /* @__PURE__ */ _.jsxs("div", { style: { display: "flex", gap: "8px", alignItems: "center" }, children: [
        /* @__PURE__ */ _.jsx(
          "select",
          {
            value: s,
            onChange: x,
            className: "text_pole",
            style: { padding: "4px 8px", fontSize: "0.8em", width: "auto" },
            title: "Select tokenizer for counting",
            children: VA.map((T) => /* @__PURE__ */ _.jsx("option", { value: T.id, children: T.name }, T.id))
          }
        ),
        /* @__PURE__ */ _.jsx(
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
        t.length > 0 && /* @__PURE__ */ _.jsxs(fe, { onClick: y, className: "menu_button small danger_button", children: [
          /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-trash-can" }),
          " Clear"
        ] }),
        /* @__PURE__ */ _.jsxs(fe, { onClick: () => i.current?.click(), className: "menu_button small", children: [
          /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-upload" }),
          " Attach"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ _.jsxs("div", { className: "kb-search-row", style: { marginBottom: "12px", position: "relative" }, children: [
      /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-magnifying-glass", style: {
        position: "absolute",
        left: "12px",
        top: "50%",
        transform: "translateY(-50%)",
        opacity: 0.4,
        pointerEvents: "none"
      } }),
      /* @__PURE__ */ _.jsx(
        "input",
        {
          type: "text",
          className: "text_pole",
          placeholder: "Search files by name...",
          value: p,
          onChange: (T) => h(T.target.value),
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
    /* @__PURE__ */ _.jsx("div", { className: "kb-files-list", style: { maxHeight: "200px", overflowY: "auto", paddingRight: "4px" }, children: t.length === 0 ? /* @__PURE__ */ _.jsx("div", { style: { opacity: 0.6, fontSize: "0.9em", textAlign: "center", padding: "10px" }, children: "No files attached. Upload context files here." }) : w.length === 0 ? /* @__PURE__ */ _.jsxs("div", { style: { opacity: 0.4, fontSize: "0.9em", textAlign: "center", padding: "20px" }, children: [
      'No files matching "',
      p,
      '"'
    ] }) : w.map((T) => /* @__PURE__ */ _.jsxs("div", { className: "kb-file-item", style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "6px 8px",
      background: "rgba(255, 255, 255, 0.05)",
      marginBottom: "4px",
      borderRadius: "4px",
      border: "1px solid rgba(255, 255, 255, 0.1)"
    }, children: [
      /* @__PURE__ */ _.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px", overflow: "hidden", flex: 1 }, children: [
        /* @__PURE__ */ _.jsx(
          "input",
          {
            type: "checkbox",
            checked: T.enabled,
            onChange: () => m(T.id),
            style: { margin: 0 }
          }
        ),
        /* @__PURE__ */ _.jsx("span", { title: T.name, style: {
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          fontSize: "0.9em",
          fontWeight: 500
        }, children: T.name }),
        T.cleanMode && /* @__PURE__ */ _.jsxs("span", { title: `Cleaned: ${T.cleanMode}`, style: { fontSize: "0.8em", opacity: 0.8 }, children: [
          T.cleanMode === "strip" && " 🧹",
          T.cleanMode === "summary" && " 🗜️",
          T.cleanMode === "heavy_summary" && " 📦",
          T.cleanMode === "rejected" && " ❌"
        ] }),
        /* @__PURE__ */ _.jsxs("div", { style: { display: "flex", gap: "4px", fontSize: "0.75em", opacity: 0.6, whiteSpace: "nowrap" }, children: [
          /* @__PURE__ */ _.jsxs("span", { children: [
            "(",
            Math.round(T.size / 1024),
            "KB)"
          ] }),
          T.tokens !== void 0 ? /* @__PURE__ */ _.jsxs("span", { style: { color: "#818cf8" }, children: [
            "• ",
            T.tokens,
            " tokens"
          ] }) : /* @__PURE__ */ _.jsx("span", { style: { opacity: 0.4 }, children: "• ..." })
        ] })
      ] }),
      /* @__PURE__ */ _.jsxs("div", { style: { display: "flex", gap: "10px", alignItems: "center" }, children: [
        T.cleanMode && /* @__PURE__ */ _.jsx(
          "div",
          {
            onClick: () => v(T.id),
            style: { cursor: "pointer", opacity: 0.6, fontSize: "0.8em" },
            title: "Revert to original",
            children: /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-undo" })
          }
        ),
        /* @__PURE__ */ _.jsx(
          "div",
          {
            onClick: () => S(T.id),
            style: { cursor: "pointer", opacity: 0.6, padding: "2px 6px" },
            title: "Remove file",
            children: /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-times" })
          }
        )
      ] })
    ] }, T.id)) }),
    /* @__PURE__ */ _.jsxs("div", { className: "kb-footer", style: {
      marginTop: "12px",
      paddingTop: "12px",
      borderTop: "2px solid rgba(255, 255, 255, 0.1)",
      display: "flex",
      flexDirection: "column",
      gap: "4px"
    }, children: [
      /* @__PURE__ */ _.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "baseline" }, children: [
        /* @__PURE__ */ _.jsx("div", { style: { fontSize: "0.9em", opacity: 0.7 }, children: p ? /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
          "Found: ",
          /* @__PURE__ */ _.jsx("strong", { children: w.length }),
          " / ",
          t.length
        ] }) : /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
          "Active: ",
          /* @__PURE__ */ _.jsx("strong", { children: t.filter((T) => T.enabled).length }),
          " / ",
          t.length,
          " files"
        ] }) }),
        C > 0 && /* @__PURE__ */ _.jsxs("div", { style: { fontSize: "0.8em", opacity: 0.5 }, children: [
          "Total Base: ",
          C.toLocaleString(),
          " tokens"
        ] })
      ] }),
      /* @__PURE__ */ _.jsxs("div", { style: {
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
        /* @__PURE__ */ _.jsx("span", { style: { fontWeight: "bold", fontSize: "1em", textTransform: "uppercase", letterSpacing: "0.5px" }, children: "Total Tokens (Active)" }),
        /* @__PURE__ */ _.jsx("span", { style: { fontSize: "1.4em", fontWeight: "800", fontFamily: "monospace" }, children: A.toLocaleString() })
      ] })
    ] })
  ] });
}, YA = ({
  session: t,
  onSessionUpdate: r,
  profileId: i,
  additionalInstructions: s,
  messages: l,
  onMessagesChange: u
}) => /* @__PURE__ */ _.jsx("div", { className: "autonomous-mode chat-only", children: /* @__PURE__ */ _.jsx("div", { className: "autonomous-content", children: /* @__PURE__ */ _.jsx("div", { className: "autonomous-chat-full", children: /* @__PURE__ */ _.jsx(
  T1,
  {
    session: t,
    onSessionUpdate: r,
    profileId: i,
    messages: l,
    onMessagesChange: u,
    additionalInstructions: s
  }
) }) }) });
function $A(t, r) {
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
function XA(t, r) {
  try {
    const i = $A(t, r), s = JSON.stringify(i, null, 2), l = new Blob([s], { type: "application/json" }), u = URL.createObjectURL(l), f = document.createElement("a");
    f.href = u, f.download = `${t.name.replace(/[^a-z0-9]/gi, "_").toLowerCase()}_v3.json`, document.body.appendChild(f), f.click(), document.body.removeChild(f), URL.revokeObjectURL(u), xe("success", `Character exported as JSON: ${f.download}`);
  } catch (i) {
    console.error("Error exporting character:", i), xe("error", `Failed to export character: ${i.message || String(i)}`);
  }
}
function QA(t, r) {
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
    const s = JSON.stringify(i, null, 2), l = new Blob([s], { type: "application/json" }), u = URL.createObjectURL(l), f = document.createElement("a");
    f.href = u;
    const p = (t.name || r).replace(/[^a-z0-9]/gi, "_").toLowerCase();
    f.download = `${p}_lorebook.json`, document.body.appendChild(f), f.click(), document.body.removeChild(f), URL.revokeObjectURL(u), xe("success", `Lorebook exported as JSON: ${f.download}`);
  } catch (i) {
    console.error("Error exporting lorebook:", i), xe("error", `Failed to export lorebook: ${i.message || String(i)}`);
  }
}
const JA = ({
  fileName: t,
  originalContent: r,
  newContent: i,
  onConfirm: s,
  onCancel: l,
  onAcceptAll: u,
  onRetry: f,
  queueCount: p
}) => {
  const [h, g] = Y.useState(""), [m, S] = Y.useState(!1), v = Y.useMemo(() => {
    const d = nw(r, i), x = [], w = [];
    return d.forEach((A) => {
      const C = A.value.split(`
`);
      C[C.length - 1] === "" && C.pop(), C.forEach((T) => {
        A.added ? w.push({ value: T, type: "added" }) : A.removed ? x.push({ value: T, type: "removed" }) : (x.push({ value: T, type: "normal" }), w.push({ value: T, type: "normal" }));
      });
    }), { leftLines: x, rightLines: w };
  }, [r, i]), y = () => {
    !h.trim() || !f || (S(!0), f(h));
  };
  return /* @__PURE__ */ _.jsx("div", { className: "diff-popup-overlay", style: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.92)",
    zIndex: 1e4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backdropFilter: "blur(10px)",
    padding: "20px"
  }, children: /* @__PURE__ */ _.jsxs("div", { className: "diff-popup card", style: {
    width: "100%",
    maxWidth: "1400px",
    height: "95vh",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    boxShadow: "0 0 50px rgba(0,0,0,1)",
    border: "1px solid rgba(255,255,255,0.1)",
    background: "#111"
  }, children: [
    /* @__PURE__ */ _.jsxs("div", { className: "diff-header", style: {
      padding: "15px 25px",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: "rgba(255,255,255,0.03)"
    }, children: [
      /* @__PURE__ */ _.jsxs("div", { children: [
        /* @__PURE__ */ _.jsxs("h3", { style: { margin: 0, fontSize: "1.2em" }, children: [
          "Reviewing: ",
          /* @__PURE__ */ _.jsx("span", { style: { opacity: 0.6 }, children: t })
        ] }),
        /* @__PURE__ */ _.jsxs("p", { style: { margin: "3px 0 0 0", fontSize: "0.8em", opacity: 0.4 }, children: [
          "Red: Original | Green: AI Cleaned | Queue: ",
          p,
          " files"
        ] })
      ] }),
      /* @__PURE__ */ _.jsxs("div", { style: { display: "flex", gap: "10px" }, children: [
        p > 1 && /* @__PURE__ */ _.jsxs(fe, { onClick: u, className: "small primary", style: { background: "#3f51b5" }, children: [
          /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-check-double" }),
          " Accept All (",
          p,
          ")"
        ] }),
        /* @__PURE__ */ _.jsx(fe, { onClick: l, className: "secondary small", children: "Reject" }),
        /* @__PURE__ */ _.jsx(fe, { onClick: s, className: "confirm small", children: "Accept" })
      ] })
    ] }),
    /* @__PURE__ */ _.jsxs("div", { className: "diff-viewer", style: {
      flexGrow: 1,
      display: "flex",
      overflow: "hidden",
      backgroundColor: "#111"
    }, children: [
      /* @__PURE__ */ _.jsx("div", { className: "diff-panel left", style: {
        flex: 1,
        overflowY: "auto",
        overflowX: "hidden",
        borderRight: "1px solid rgba(255,255,255,0.05)",
        background: "rgba(244, 67, 54, 0.03)"
      }, children: /* @__PURE__ */ _.jsx("div", { style: { paddingBottom: "20px" }, children: v.leftLines.map((d, x) => /* @__PURE__ */ _.jsxs("div", { style: {
        backgroundColor: d.type === "removed" ? "rgba(244, 67, 54, 0.2)" : "transparent",
        color: d.type === "removed" ? "#ff8a80" : "rgba(255,255,255,0.3)",
        padding: "1px 15px",
        fontFamily: "var(--font-family-mono, monospace)",
        fontSize: "12px",
        minHeight: "1.4em",
        wordBreak: "break-all",
        whiteSpace: "pre-wrap",
        borderLeft: `2px solid ${d.type === "removed" ? "#f44336" : "transparent"}`
      }, children: [
        d.type === "removed" && /* @__PURE__ */ _.jsx("span", { style: { marginRight: "8px", opacity: 0.5 }, children: "-" }),
        d.value || " "
      ] }, x)) }) }),
      /* @__PURE__ */ _.jsx("div", { className: "diff-panel right", style: {
        flex: 1,
        overflowY: "auto",
        overflowX: "hidden",
        background: "rgba(76, 175, 80, 0.03)"
      }, children: /* @__PURE__ */ _.jsx("div", { style: { paddingBottom: "20px" }, children: v.rightLines.map((d, x) => /* @__PURE__ */ _.jsxs("div", { style: {
        backgroundColor: d.type === "added" ? "rgba(76, 175, 80, 0.2)" : "transparent",
        color: d.type === "added" ? "#b9f6ca" : "rgba(255,255,255,0.8)",
        padding: "1px 15px",
        fontFamily: "var(--font-family-mono, monospace)",
        fontSize: "12px",
        minHeight: "1.4em",
        wordBreak: "break-all",
        whiteSpace: "pre-wrap",
        borderLeft: `2px solid ${d.type === "added" ? "#4caf50" : "transparent"}`
      }, children: [
        d.type === "added" && /* @__PURE__ */ _.jsx("span", { style: { marginRight: "8px", opacity: 0.5 }, children: "+" }),
        d.value || " "
      ] }, x)) }) })
    ] }),
    /* @__PURE__ */ _.jsxs("div", { className: "diff-retry-panel", style: {
      padding: "15px 25px",
      background: "rgba(0,0,0,0.3)",
      borderTop: "1px solid rgba(255,255,255,0.1)",
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    }, children: [
      /* @__PURE__ */ _.jsxs("div", { style: { fontSize: "0.85em", opacity: 0.6, display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-comment-dots" }),
        "Feedback for AI (if cleaning is bad):"
      ] }),
      /* @__PURE__ */ _.jsxs("div", { style: { display: "flex", gap: "10px" }, children: [
        /* @__PURE__ */ _.jsx(
          en,
          {
            value: h,
            onChange: (d) => g(d.target.value),
            placeholder: 'e.g. "Too aggressive, kept original content", "Make it more concise"...',
            style: { flexGrow: 1, minHeight: "60px" }
          }
        ),
        /* @__PURE__ */ _.jsx(
          fe,
          {
            disabled: !h.trim() || m,
            onClick: y,
            className: "secondary",
            style: { alignSelf: "flex-end", height: "60px" },
            children: m ? /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
              /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-arrows-rotate" }),
              " Retry"
            ] })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ _.jsxs("div", { className: "diff-footer", style: {
      padding: "15px 25px",
      borderTop: "1px solid rgba(255,255,255,0.1)",
      display: "flex",
      justifyContent: "flex-end",
      gap: "15px",
      background: "rgba(255,255,255,0.02)"
    }, children: [
      p > 1 && /* @__PURE__ */ _.jsxs(fe, { onClick: u, className: "confirm", style: { marginRight: "auto", background: "#3f51b5" }, children: [
        /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-check-double" }),
        " Accept All Remaining (",
        p,
        ")"
      ] }),
      /* @__PURE__ */ _.jsx(fe, { onClick: l, className: "secondary", children: "Keep Original" }),
      /* @__PURE__ */ _.jsx(fe, { onClick: s, className: "confirm", children: "Apply Cleaning" })
    ] })
  ] }) });
}, KA = (t, r) => {
  const i = new Blob([r], { type: "text/markdown" }), s = URL.createObjectURL(i), l = document.createElement("a");
  l.href = s, l.download = t, document.body.appendChild(l), l.click(), document.body.removeChild(l), URL.revokeObjectURL(s);
}, WA = ({
  kbFiles: t,
  onFilesUpdate: r,
  profileId: i,
  additionalInstructions: s
}) => {
  const [l, u] = Y.useState([]), [f, p] = Y.useState(!1), [h, g] = Y.useState(""), [m, S] = Y.useState([]), [v, y] = Y.useState([]), [d, x] = Y.useState("strip"), w = Y.useMemo(() => t.filter(
    (F) => F.name.toLowerCase().includes(h.toLowerCase())
  ), [t, h]), A = (F) => {
    u(
      (te) => te.includes(F) ? te.filter((W) => W !== F) : [...te, F]
    );
  }, C = () => {
    u(w.map((F) => F.id));
  }, T = () => {
    const F = w.filter((te) => !te.cleanMode || te.cleanMode === "rejected").map((te) => te.id);
    u(F);
  }, E = () => {
    u([]);
  }, O = () => {
    if (l.length === 0) return;
    const F = t.map(
      (te) => l.includes(te.id) && te.originalContent ? { ...te, content: te.originalContent, cleanMode: void 0 } : te
    );
    r(F), xe("success", `Reverted ${l.length} selected files to original.`);
  }, j = () => {
    const F = t.filter((te) => l.includes(te.id) && te.cleanMode && te.cleanMode !== "rejected");
    if (F.length === 0) {
      xe("error", "No cleaned files among selection to export.");
      return;
    }
    xe("info", `Downloading ${F.length} selected cleaned files...`), F.forEach((te) => {
      const W = te.name.includes(".") ? `cleaned_${te.name}` : `cleaned_${te.name}.md`;
      KA(W, te.content);
    });
  }, R = async () => {
    if (l.length !== 0) {
      p(!0);
      try {
        const te = t.filter((ae) => l.includes(ae.id)).slice(0, 10);
        xe("info", `AI is processing ${te.length} files...`);
        const W = await Ky({
          files: te.map((ae) => ({ name: ae.name, content: ae.content })),
          profileId: i,
          mode: d,
          additionalInstructions: s
        }), L = [];
        W.forEach((ae) => {
          const de = te.find((Oe) => Oe.name === ae.name);
          de && L.push({
            id: de.id,
            originalName: de.name,
            originalContent: de.content,
            cleanedContent: ae.content
          });
        }), L.length > 0 ? S(L) : xe("error", "AI returned no format-valid results."), u((ae) => ae.filter((de) => !te.find((Oe) => Oe.id === de)));
      } catch (F) {
        console.error("Cleaning failed:", F), xe("error", `Generation failed: ${F.message}`);
      } finally {
        p(!1);
      }
    }
  }, H = (F) => {
    const te = t.map((W) => W.id === F.id ? { ...W, content: F.cleanedContent, cleanMode: d } : W);
    r(te), S((W) => W.slice(1)), y((W) => [{ name: F.originalName, status: "accepted", mode: d, timestamp: Date.now() }, ...W]), xe("success", `Updated ${F.originalName}`);
  }, Q = () => {
    if (m.length === 0) return;
    const F = new Map(t.map((W) => [W.id, W])), te = [];
    m.forEach((W) => {
      const L = F.get(W.id);
      L && (F.set(W.id, {
        ...L,
        content: W.cleanedContent,
        cleanMode: d
      }), te.push({
        name: W.originalName,
        status: "accepted",
        mode: d,
        timestamp: Date.now()
      }));
    }), r(Array.from(F.values())), y((W) => [...te.reverse(), ...W]), S([]), xe("success", `Bulk applied ${m.length} cleaning results.`);
  }, B = () => {
    if (m.length > 0) {
      const F = m[0], te = t.map((W) => W.id === F.id ? { ...W, cleanMode: "rejected" } : W);
      r(te), y((W) => [{ name: F.originalName, status: "rejected", mode: "rejected", timestamp: Date.now() }, ...W]);
    }
    S((F) => F.slice(1));
  }, V = async (F) => {
    if (m.length === 0) return;
    const te = m[0];
    try {
      const W = await Ky({
        files: [{ name: te.originalName, content: te.originalContent }],
        profileId: i,
        mode: d,
        additionalInstructions: `USER FEEDBACK ON PREVIOUS VERSION: "${F}"

${s || ""}`
      });
      if (W && W.length > 0) {
        const L = [...m];
        L[0] = {
          ...te,
          cleanedContent: W[0].content
        }, S(L), xe("success", `AI re-cleaned ${te.originalName} based on your feedback.`);
      }
    } catch (W) {
      xe("error", `Retry failed: ${W.message}`);
    }
  }, $ = (F) => {
    switch (F) {
      case "strip":
        return { icon: "fa-broom", color: "#4caf50", title: "Cleaned: Strip" };
      case "summary":
        return { icon: "fa-compress", color: "#81c784", title: "Cleaned: Summary" };
      case "heavy_summary":
        return { icon: "fa-box-archive", color: "#a5d6a7", title: "Cleaned: Heavy Summary" };
      case "rejected":
        return { icon: "fa-circle-xmark", color: "#f44336", title: "Cleaning Rejected" };
      default:
        return null;
    }
  };
  return /* @__PURE__ */ _.jsxs("div", { className: "cleaner-container container", style: { flexDirection: "column", gap: "20px" }, children: [
    /* @__PURE__ */ _.jsxs("div", { className: "card", style: { width: "100%", padding: "25px", display: "flex", flexDirection: "column", gap: "20px" }, children: [
      /* @__PURE__ */ _.jsxs("div", { className: "cleaner-header", style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "15px" }, children: [
        /* @__PURE__ */ _.jsxs("div", { style: { flex: "1 1 300px" }, children: [
          /* @__PURE__ */ _.jsxs("h2", { style: { margin: 0, display: "flex", alignItems: "center", gap: "12px" }, children: [
            /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-broom", style: { color: "var(--SmartThemeBodyColor)" } }),
            "Lore Cleaner"
          ] }),
          /* @__PURE__ */ _.jsxs("div", { className: "mode-selector", style: { display: "flex", gap: "8px", marginTop: "15px", flexWrap: "wrap" }, children: [
            /* @__PURE__ */ _.jsxs(
              fe,
              {
                onClick: () => x("strip"),
                className: `small ${d === "strip" ? "confirm" : "secondary"}`,
                title: "Remove technical noise but keep ALL text intact",
                children: [
                  /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-broom" }),
                  " Strip"
                ]
              }
            ),
            /* @__PURE__ */ _.jsxs(
              fe,
              {
                onClick: () => x("summary"),
                className: `small ${d === "summary" ? "confirm" : "secondary"}`,
                title: "Remove noise and perform light summarization",
                children: [
                  /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-compress" }),
                  " Normal"
                ]
              }
            ),
            /* @__PURE__ */ _.jsxs(
              fe,
              {
                onClick: () => x("heavy_summary"),
                className: `small ${d === "heavy_summary" ? "confirm" : "secondary"}`,
                title: "Extract only critical facts, heavy compression",
                children: [
                  /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-box-archive" }),
                  " Heavy"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ _.jsxs("div", { className: "cleaner-actions", style: { display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-end", flex: "1 1 400px" }, children: [
          /* @__PURE__ */ _.jsxs("div", { style: { display: "flex", gap: "5px", flexWrap: "wrap", justifyContent: "flex-end" }, children: [
            /* @__PURE__ */ _.jsx(fe, { onClick: T, className: "small secondary", title: "Select files that haven't been cleaned yet", children: "New/Rejected" }),
            /* @__PURE__ */ _.jsx(fe, { onClick: C, className: "small secondary", children: "All" }),
            /* @__PURE__ */ _.jsx(fe, { onClick: E, className: "small secondary", children: "None" }),
            /* @__PURE__ */ _.jsx("div", { style: { width: "10px" } }),
            /* @__PURE__ */ _.jsxs(
              fe,
              {
                onClick: O,
                className: "small secondary danger_button",
                disabled: l.length === 0,
                title: "Undo cleaning for SELECTED files",
                children: [
                  /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-undo" }),
                  " Revert"
                ]
              }
            ),
            /* @__PURE__ */ _.jsxs(
              fe,
              {
                onClick: j,
                className: "small",
                disabled: l.length === 0,
                title: "Download selected cleaned files",
                children: [
                  /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-download" }),
                  " Save"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ _.jsx(
            fe,
            {
              onClick: R,
              disabled: f || l.length === 0,
              className: "confirm",
              style: { minWidth: "200px", height: "40px" },
              children: f ? /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
                /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-spinner fa-spin" }),
                " Processing..."
              ] }) : /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
                /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }),
                " Clean Selected (",
                l.length,
                ")"
              ] })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ _.jsx("div", { className: "cleaner-toolbar", children: /* @__PURE__ */ _.jsx(
        "input",
        {
          type: "text",
          placeholder: "Search your library...",
          className: "text_pole",
          value: h,
          onChange: (F) => g(F.target.value),
          style: { width: "100%", padding: "12px" }
        }
      ) }),
      /* @__PURE__ */ _.jsxs("div", { className: "file-grid", style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "15px",
        maxHeight: "450px",
        overflowY: "auto",
        padding: "5px"
      }, children: [
        w.map((F) => {
          const te = $(F.cleanMode);
          return /* @__PURE__ */ _.jsxs(
            "div",
            {
              className: `file-card card ${l.includes(F.id) ? "active" : ""}`,
              onClick: () => A(F.id),
              style: {
                cursor: "pointer",
                border: l.includes(F.id) ? "2px solid var(--SmartThemeBodyColor)" : "1px solid rgba(255,255,255,0.08)",
                transition: "all 0.1s ease-in-out",
                position: "relative",
                background: l.includes(F.id) ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.2)"
              },
              children: [
                /* @__PURE__ */ _.jsxs("div", { className: "file-info", style: { padding: "15px" }, children: [
                  /* @__PURE__ */ _.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "12px" }, children: [
                    /* @__PURE__ */ _.jsx("i", { className: `fa-solid ${F.name.endsWith(".json") ? "fa-file-code" : "fa-file-lines"}`, style: { opacity: 0.4, fontSize: "1.2em" } }),
                    /* @__PURE__ */ _.jsx("span", { style: { fontWeight: 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", flexGrow: 1 }, children: F.name }),
                    te && /* @__PURE__ */ _.jsxs("span", { title: te.title, style: { fontSize: "1.2em" }, children: [
                      F.cleanMode === "strip" && " 🧹",
                      F.cleanMode === "summary" && " 🗜️",
                      F.cleanMode === "heavy_summary" && " 📦",
                      F.cleanMode === "rejected" && " ❌"
                    ] })
                  ] }),
                  /* @__PURE__ */ _.jsxs("div", { style: { marginTop: "10px", fontSize: "0.8em", opacity: 0.5, display: "flex", justifyContent: "space-between" }, children: [
                    /* @__PURE__ */ _.jsxs("span", { children: [
                      Math.round(F.content.length / 1024),
                      " KB"
                    ] }),
                    /* @__PURE__ */ _.jsx("span", { children: F.enabled ? "Active" : "Muted" })
                  ] })
                ] }),
                l.includes(F.id) && /* @__PURE__ */ _.jsx("div", { style: { position: "absolute", top: "10px", right: "12px", color: "var(--SmartThemeBodyColor)" }, children: /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-check-circle" }) })
              ]
            },
            F.id
          );
        }),
        w.length === 0 && /* @__PURE__ */ _.jsxs("div", { style: { gridColumn: "1/-1", textAlign: "center", padding: "60px", opacity: 0.3 }, children: [
          /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-magnifying-glass", style: { fontSize: "3em", marginBottom: "15px", display: "block" } }),
          "No files match your search."
        ] })
      ] }),
      /* @__PURE__ */ _.jsxs("div", { className: "history-section", style: { borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "20px" }, children: [
        /* @__PURE__ */ _.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }, children: [
          /* @__PURE__ */ _.jsxs("h4", { style: { margin: 0, opacity: 0.7 }, children: [
            /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-clock-rotate-left" }),
            " Recent Activity"
          ] }),
          v.length > 0 && /* @__PURE__ */ _.jsx(fe, { onClick: () => y([]), className: "small secondary", children: "Clear" })
        ] }),
        /* @__PURE__ */ _.jsx("div", { className: "history-list", style: {
          maxHeight: "200px",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "8px"
        }, children: v.length > 0 ? v.map((F, te) => {
          const W = $(F.mode);
          return /* @__PURE__ */ _.jsxs("div", { style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "8px 15px",
            background: "rgba(255,255,255,0.02)",
            borderRadius: "6px",
            fontSize: "0.9em",
            borderLeft: `3px solid ${W?.color || "transparent"}`
          }, children: [
            /* @__PURE__ */ _.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
              /* @__PURE__ */ _.jsx(
                "i",
                {
                  className: `fa-solid ${W?.icon || (F.status === "accepted" ? "fa-circle-check" : "fa-circle-xmark")}`,
                  style: { color: W?.color || (F.status === "accepted" ? "#4caf50" : "#f44336") }
                }
              ),
              /* @__PURE__ */ _.jsx("span", { style: { opacity: 0.9 }, children: F.name })
            ] }),
            /* @__PURE__ */ _.jsxs("div", { style: { display: "flex", gap: "15px", alignItems: "center" }, children: [
              /* @__PURE__ */ _.jsxs("span", { style: {
                fontSize: "0.75em",
                fontWeight: 600,
                color: W?.color || (F.status === "accepted" ? "#81c784" : "#e57373"),
                letterSpacing: "0.05em"
              }, children: [
                F.status.toUpperCase(),
                " ",
                F.mode && F.mode !== "rejected" ? `(${F.mode.replace("_", " ")})` : ""
              ] }),
              /* @__PURE__ */ _.jsx("span", { style: { fontSize: "0.8em", opacity: 0.3 }, children: new Date(F.timestamp).toLocaleTimeString() })
            ] })
          ] }, te);
        }) : /* @__PURE__ */ _.jsx("div", { style: { textAlign: "center", padding: "20px", opacity: 0.2, fontSize: "0.9em", fontStyle: "italic" }, children: "No recent activity. Files you clean will appear here." }) })
      ] })
    ] }),
    m.length > 0 && /* @__PURE__ */ _.jsx(
      JA,
      {
        fileName: m[0].originalName,
        originalContent: m[0].originalContent,
        newContent: m[0].cleanedContent,
        onConfirm: () => H(m[0]),
        onCancel: B,
        onAcceptAll: Q,
        onRetry: V,
        queueCount: m.length
      }
    )
  ] });
};
Ft.helpers.join || Ft.registerHelper("join", function(t, r) {
  return Array.isArray(t) ? t.join(typeof r == "string" ? r : ", ") : "";
});
Ft.helpers.is_not_empty || Ft.registerHelper("is_not_empty", function(t, r) {
  return t ? Array.isArray(t) ? t.length > 0 ? r.fn(this) : r.inverse(this) : typeof t == "object" && Object.keys(t).length > 0 ? r.fn(this) : typeof t != "object" && !Array.isArray(t) ? r.fn(this) : r.inverse(this) : r.inverse(this);
});
const Pn = SillyTavern.getContext(), $t = "charCreator", yd = () => ({
  selectedCharacterIndexes: Tn ? [String(Tn)] : [],
  selectedWorldNames: [],
  fields: dn.reduce(
    (t, r) => (t[r] = { value: "", prompt: "", label: Xn[r] }, t),
    {}
  ),
  draftFields: {},
  lastLoadedCharacterId: ""
}), e4 = {
  name: { label: Xn.name, rows: 1, large: !1, promptEnabled: !1 },
  description: { label: Xn.description, rows: 5, large: !0, promptEnabled: !0 },
  personality: { label: Xn.personality, rows: 4, large: !0, promptEnabled: !0 },
  scenario: { label: Xn.scenario, rows: 3, large: !0, promptEnabled: !0 },
  first_mes: { label: Xn.first_mes, rows: 3, large: !0, promptEnabled: !0 },
  mes_example: { label: Xn.mes_example, rows: 6, large: !0, promptEnabled: !0 }
}, t4 = () => {
  const t = Q0(), r = St.getSettings(), [i, s] = Y.useState(yd()), [l, u] = Y.useState([]), [f, p] = Y.useState(!0), [h, g] = Y.useState("core"), [m, S] = Y.useState("character"), [v, y] = Y.useState(e0()), [d, x] = Y.useState([]), [w, A] = Y.useState(!1), [C, T] = Y.useState([]), [E, O] = Y.useState([]), [j, R] = Y.useState([]), [H, Q] = Y.useState([]), [B, V] = Y.useState([]), [$, F] = Y.useState(null), [te, W] = Y.useState(null);
  Y.useEffect(() => {
    const P = document.getElementById("charCreatorPopup");
    P && P.parentElement && P.parentElement.scrollTo({ top: 0, behavior: "auto" });
  }, [m]);
  const [L, ae] = Y.useState(!1), [de, Oe] = Y.useState(null);
  Y.useEffect(() => {
    (async () => {
      p(!0), Q(Pn.characters), V(Qg);
      const oe = JSON.parse(localStorage.getItem($t) ?? "{}"), ie = yd();
      if (oe.fields && (ie.fields = { ...ie.fields, ...oe.fields }), oe.draftFields && (ie.draftFields = oe.draftFields), oe.selectedCharacterIndexes && (ie.selectedCharacterIndexes = oe.selectedCharacterIndexes), oe.selectedWorldNames && (ie.selectedWorldNames = oe.selectedWorldNames), oe.lastLoadedCharacterId) {
        ie.lastLoadedCharacterId = oe.lastLoadedCharacterId;
        const qe = Pn.characters.find((st) => st.avatar === oe.lastLoadedCharacterId);
        qe && F(qe);
      }
      s(ie);
      const be = localStorage.getItem(`${$t}_kb`);
      if (be)
        try {
          x(JSON.parse(be));
        } catch (qe) {
          console.error("Failed to load KB files", qe);
        }
      const Be = localStorage.getItem(`${$t}_lorebook`);
      if (Be)
        try {
          y(JSON.parse(Be));
        } catch (qe) {
          console.error("Failed to load lorebook", qe);
        }
      const Re = localStorage.getItem(`${$t}_char_msg`);
      Re && T(JSON.parse(Re));
      const pt = localStorage.getItem(`${$t}_lore_msg`);
      pt && O(JSON.parse(pt));
      const mn = localStorage.getItem(`${$t}_auto_msg`);
      mn && R(JSON.parse(mn));
      const Xt = localStorage.getItem(`${$t}_active_tab`);
      Xt && g(Xt);
      const Qt = localStorage.getItem(`${$t}_creator_mode`);
      Qt && S(Qt), p(!1);
    })();
  }, []), Y.useEffect(() => {
    f || (localStorage.setItem($t, JSON.stringify(i)), localStorage.setItem(`${$t}_kb`, JSON.stringify(d)), localStorage.setItem(`${$t}_lorebook`, JSON.stringify(v)), localStorage.setItem(`${$t}_char_msg`, JSON.stringify(C)), localStorage.setItem(`${$t}_lore_msg`, JSON.stringify(E)), localStorage.setItem(`${$t}_auto_msg`, JSON.stringify(j)), localStorage.setItem(`${$t}_active_tab`, h), localStorage.setItem(`${$t}_creator_mode`, m));
  }, [i, d, v, C, E, j, h, m, f]);
  const D = (P, oe) => {
    St.getSettings()[P] = oe, St.saveSettings(), t();
  }, J = (P, oe) => {
    St.getSettings().contextToSend[P] = oe, St.saveSettings(), t();
  }, se = Y.useCallback(
    (P, oe, ie, be) => {
      s((Be) => {
        const Re = be ? "draftFields" : "fields", pt = { ...Be[Re] };
        return pt[P] || (pt[P] = { value: "", prompt: "", label: P }), pt[P][ie] = oe, { ...Be, [Re]: pt };
      });
    },
    []
  ), le = Y.useMemo(
    () => Object.keys(i.fields).filter((P) => P.startsWith("alternate_greetings_")).sort((P, oe) => parseInt(P.split("_")[2]) - parseInt(oe.split("_")[2])).map((P) => i.fields[P]),
    [i.fields]
  ), ue = Y.useCallback((P) => {
    s((oe) => {
      const ie = { ...oe.fields };
      return Object.keys(ie).forEach((be) => {
        be.startsWith("alternate_greetings_") && delete ie[be];
      }), P.forEach((be, Be) => {
        const Re = `alternate_greetings_${Be + 1}`;
        ie[Re] = { ...be, label: `Alternate Greeting ${Be + 1}` };
      }), { ...oe, fields: ie };
    });
  }, []), De = async (P, oe) => {
    if (!r.profileId) return xe("warning", "Please select a connection profile.");
    A(!0);
    try {
      const { character: ie, lorebook: be } = await LA(
        P,
        oe,
        r.profileId,
        r.promptPresets[r.promptPreset]?.content
      ), Be = IA(ie, i);
      s(Be), be && y(be), xe("success", "Character generated successfully!");
    } catch (ie) {
      console.error(ie), xe("error", ie.message || String(ie));
    } finally {
      A(!1);
    }
  }, X = Y.useCallback(
    (P, oe) => {
      se(P, "", "value", oe);
    },
    [se]
  ), ve = Y.useCallback(
    async (P) => {
      await Pn.Popup.show.confirm(
        "Delete Draft Field",
        `Are you sure you want to delete "${i.draftFields[P].label}"?`
      ) && s((ie) => {
        const be = { ...ie.draftFields };
        return delete be[P], { ...ie, draftFields: be };
      });
    },
    [i.draftFields]
  ), ye = Y.useCallback(async () => {
    const P = await Pn.Popup.show.input("Enter Draft Field Name", "");
    if (!P?.trim()) return;
    const oe = PE(P.trim());
    if (!oe) return xe("error", "Invalid field name.");
    if (i.draftFields[oe] || dn.includes(oe))
      return xe("warning", "Field name already exists.");
    s((ie) => ({
      ...ie,
      draftFields: { ...ie.draftFields, [oe]: { value: "", prompt: "", label: P } }
    })), g("draft");
  }, [i.draftFields]), $e = (P) => {
    Oe({ type: "field", fieldId: P }), ae(!0);
  }, ct = () => {
    Oe({ type: "global" }), ae(!0);
  }, je = (P) => {
    s((oe) => ({
      ...oe,
      fields: { ...oe.fields, ...P.fields },
      draftFields: { ...oe.draftFields, ...P.draftFields }
    })), xe("success", "Changes from revise session applied."), ae(!1);
  }, at = Y.useCallback(
    async (P, oe) => {
      if (!r.profileId) return xe("warning", "Please select a connection profile.");
      u((ie) => [...ie, P]);
      try {
        const ie = Pn.extensionSettings.connectionManager?.profiles?.find(
          (qe) => qe.id === r.profileId
        );
        if (!ie) throw new Error("Connection profile not found.");
        const be = {
          presetName: ie?.preset,
          contextName: ie?.context,
          instructName: ie?.instruct,
          targetCharacterId: Tn,
          ignoreCharacterFields: !0,
          ignoreWorldInfo: !0,
          ignoreAuthorNote: !0,
          maxContext: r.maxContextType === "custom" ? r.maxContextValue : r.maxContextType === "profile" ? "preset" : "active",
          includeNames: !!Cr
        }, Be = r.contextToSend.messages;
        switch (Be.type) {
          case "none":
            be.messageIndexesBetween = { start: -1, end: -1 };
            break;
          case "first":
            be.messageIndexesBetween = { start: 0, end: Be.first ?? 10 };
            break;
          case "last":
            const qe = Pn.chat?.length ?? 0, st = Be.last ?? 10;
            be.messageIndexesBetween = {
              end: Math.max(0, qe - 1),
              start: Math.max(0, qe - st)
            };
            break;
          case "range":
            be.messageIndexesBetween = {
              start: Be.range?.start ?? 0,
              end: Be.range?.end ?? 10
            };
            break;
          case "all":
          default:
            break;
        }
        Tn === void 0 && !Cr && (be.messageIndexesBetween = { start: -1, end: -1 });
        const Re = {};
        await Promise.all(
          Qg.filter((qe) => !Re[qe]).map(async (qe) => {
            const st = await Pn.loadWorldInfo(qe);
            st && (Re[qe] = Object.values(st.entries));
          })
        );
        const pt = structuredClone(r.prompts);
        r.contextToSend.stDescription || delete pt.stDescription, (!r.contextToSend.charCard || i.selectedCharacterIndexes.length === 0) && delete pt.charDefinitions, (!r.contextToSend.worldInfo || i.selectedWorldNames.length === 0) && delete pt.lorebookDefinitions, r.contextToSend.existingFields || delete pt.existingFieldDefinitions, r.contextToSend.persona || delete pt.personaDescription, delete pt.worldInfoCharDefinition;
        const mn = await RE({
          profileId: r.profileId,
          userPrompt: r.promptPresets[r.promptPreset].content,
          buildPromptOptions: be,
          continueFrom: oe,
          session: i,
          allCharacters: H,
          entriesGroupByWorldName: Re,
          promptSettings: pt,
          formatDescription: { content: r.prompts[`${r.outputFormat}Format`].content },
          mainContextList: r.mainContextTemplatePresets[r.mainContextTemplatePreset].prompts.filter(
            (qe) => qe.enabled
          ),
          includeUserMacro: r.contextToSend.persona,
          maxResponseToken: r.maxResponseToken,
          targetField: P,
          outputFormat: r.outputFormat
        }), Xt = P.startsWith("alternate_greetings_"), Qt = !Xt && !dn.includes(P);
        if (Xt) {
          const qe = parseInt(P.split("_")[2]) - 1, st = [...le];
          st[qe] && (st[qe].value = mn), ue(st);
        } else
          se(P, mn, "value", Qt);
      } catch (ie) {
        console.error(ie), xe("error", ie.message || String(ie));
      } finally {
        u((ie) => ie.filter((be) => be !== P));
      }
    },
    [i, r, H, le, se, ue]
  ), qn = Y.useCallback(async () => {
    await Pn.Popup.show.confirm("Reset Fields", "This will clear all fields. Are you sure?") && (s(yd()), F(null));
  }, []), kt = Y.useCallback(
    (P) => {
      if (!$) return xe("warning", "Please load a character to compare against.");
      let oe, ie, be;
      typeof P == "number" ? (oe = le[P]?.value ?? "", ie = $.data?.alternate_greetings?.[P] ?? "", be = `Alternate Greeting ${P + 1}`) : (oe = i.fields[P]?.value ?? "", ie = $[P] ?? $.data?.[P] ?? "", be = Xn[P]), W({ original: ie, current: oe, fieldName: be });
    },
    [$, i.fields, le]
  ), tn = Y.useCallback(
    async (P) => {
      const oe = H[parseInt(P)];
      if (!oe || dn.some((Re) => i.fields[Re].value.trim() !== "") && !await Pn.Popup.show.confirm("Load Character", "Overwrite current fields?"))
        return;
      const be = { ...i.fields };
      dn.forEach((Re) => {
        be[Re] = { value: oe[Re] ?? oe.data?.[Re] ?? "", prompt: "", label: Xn[Re] };
      });
      const Be = (oe.data?.alternate_greetings ?? []).map((Re) => ({ value: Re, prompt: "" }));
      F(oe), s((Re) => ({ ...Re, fields: be, lastLoadedCharacterId: oe.avatar })), ue(Be);
    },
    [H, i.fields, ue]
  ), Ze = () => le.map((P) => P.value).filter((P) => P.trim() !== ""), Xe = async () => {
    if (!i.fields.name.value) return xe("warning", "Please provide a character name.");
    if (!await Pn.Popup.show.confirm("Save as New Character", "Are you sure?")) return;
    const oe = {
      name: i.fields.name.value,
      description: i.fields.description.value,
      personality: i.fields.personality.value,
      scenario: i.fields.scenario.value,
      first_mes: i.fields.first_mes.value,
      mes_example: i.fields.mes_example.value,
      data: {
        alternate_greetings: Ze(),
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
      await S2(oe, !0);
    } catch (ie) {
      xe("error", `Failed to create character: ${ie.message}`);
    }
  }, Ve = async () => {
    if (!$) return xe("warning", "Please load a character to override.");
    if (!await Pn.Popup.show.confirm(
      "Override Character",
      `Override "${$.name}"? This cannot be undone.`
    )) return;
    const oe = {
      ...$,
      name: i.fields.name.value,
      description: i.fields.description.value,
      personality: i.fields.personality.value,
      scenario: i.fields.scenario.value,
      first_mes: i.fields.first_mes.value,
      mes_example: i.fields.mes_example.value,
      data: {
        alternate_greetings: Ze(),
        name: i.fields.name.value,
        description: i.fields.description.value,
        first_mes: i.fields.first_mes.value,
        mes_example: i.fields.mes_example.value,
        personality: i.fields.personality.value,
        scenario: i.fields.scenario.value
      }
    };
    try {
      await x2(oe, !0), xe("success", `Character "${oe.name}" updated!`);
    } catch (ie) {
      xe("error", `Failed to override character: ${ie.message}`);
    }
  }, We = () => {
    const P = JSON.stringify({ draftFields: i.draftFields, version: $0 }, null, 2), oe = new Blob([P], { type: "application/json" }), ie = document.createElement("a");
    ie.href = URL.createObjectURL(oe), ie.download = `crec-draft-fields-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`, ie.click(), URL.revokeObjectURL(ie.href);
  }, me = () => {
    const P = document.createElement("input");
    P.type = "file", P.accept = ".json", P.onchange = async () => {
      const oe = P.files?.[0];
      if (oe)
        try {
          const ie = await oe.text(), be = JSON.parse(ie);
          if (!be.draftFields) throw new Error("Invalid file format.");
          (Object.keys(i.draftFields).length > 0 ? await Pn.Popup.show.confirm(
            "Import Drafts",
            "This will replace current draft fields. Continue?"
          ) : !0) && (s((Re) => ({ ...Re, draftFields: be.draftFields })), xe("success", "Draft fields imported."));
        } catch (ie) {
          xe("error", `Import failed: ${ie.message}`);
        }
    }, P.click();
  }, pe = Y.useMemo(
    () => H.map((P, oe) => ({ value: String(oe), label: P.name })),
    [H]
  ), Ge = Y.useMemo(
    () => B.map((P) => ({ value: P, label: P })),
    [B]
  ), He = Y.useMemo(
    () => Object.keys(r.promptPresets).map((P) => ({ value: P, label: P })),
    [r.promptPresets]
  ), it = Y.useMemo(
    () => Object.keys(r.mainContextTemplatePresets).map((P) => ({ value: P, label: P })),
    [r.mainContextTemplatePresets]
  );
  return f ? /* @__PURE__ */ _.jsx("div", { children: "Loading..." }) : /* @__PURE__ */ _.jsxs("div", { id: "charCreatorPopup", children: [
    /* @__PURE__ */ _.jsx("h2", { children: "Character Creator" }),
    /* @__PURE__ */ _.jsxs("div", { className: "mode-tabs", children: [
      /* @__PURE__ */ _.jsxs(
        "button",
        {
          className: `mode-tab ${m === "character" ? "active" : ""}`,
          onClick: () => S("character"),
          children: [
            /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-user" }),
            " Character"
          ]
        }
      ),
      /* @__PURE__ */ _.jsxs(
        "button",
        {
          className: `mode-tab ${m === "autonomous" ? "active" : ""}`,
          onClick: () => S("autonomous"),
          children: [
            /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-robot" }),
            " Autonomous"
          ]
        }
      ),
      /* @__PURE__ */ _.jsxs(
        "button",
        {
          className: `mode-tab ${m === "lorebook" ? "active" : ""}`,
          onClick: () => S("lorebook"),
          children: [
            /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-book" }),
            " Lorebook"
          ]
        }
      ),
      /* @__PURE__ */ _.jsxs(
        "button",
        {
          className: `mode-tab ${m === "cleaner" ? "active" : ""}`,
          onClick: () => S("cleaner"),
          children: [
            /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-broom" }),
            " Cleaner"
          ]
        }
      ),
      /* @__PURE__ */ _.jsxs(
        "button",
        {
          className: `mode-tab ${m === "settings" ? "active" : ""}`,
          onClick: () => S("settings"),
          children: [
            /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-gear" }),
            " Settings"
          ]
        }
      )
    ] }),
    m === "character" && /* @__PURE__ */ _.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ _.jsxs("div", { className: "column-left", children: [
        /* @__PURE__ */ _.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ _.jsx("h3", { children: "Connection Profile" }),
          /* @__PURE__ */ _.jsx(
            X0,
            {
              initialSelectedProfileId: r.profileId,
              onChange: (P) => D("profileId", P?.id ?? "")
            }
          )
        ] }),
        /* @__PURE__ */ _.jsx(n0, { files: d, onFilesChange: x }),
        /* @__PURE__ */ _.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ _.jsx("h3", { children: "Context to Send" }),
          /* @__PURE__ */ _.jsxs("div", { className: "context-options", children: [
            /* @__PURE__ */ _.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ _.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.stDescription,
                  onChange: (P) => J("stDescription", P.target.checked)
                }
              ),
              " ",
              "Description of SillyTavern & Char Card"
            ] }),
            /* @__PURE__ */ _.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ _.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.persona,
                  onChange: (P) => J("persona", P.target.checked)
                }
              ),
              " ",
              "User's Persona"
            ] }),
            (Tn !== void 0 || Cr) && /* @__PURE__ */ _.jsxs("div", { className: "message-options", children: [
              /* @__PURE__ */ _.jsx("h4", { children: "Messages to Include" }),
              /* @__PURE__ */ _.jsxs(
                "select",
                {
                  className: "text_pole",
                  value: r.contextToSend.messages.type,
                  onChange: (P) => J("messages", {
                    ...r.contextToSend.messages,
                    type: P.target.value
                  }),
                  children: [
                    /* @__PURE__ */ _.jsx("option", { value: "none", children: "None" }),
                    /* @__PURE__ */ _.jsx("option", { value: "all", children: "All Messages" }),
                    /* @__PURE__ */ _.jsx("option", { value: "first", children: "First X Messages" }),
                    /* @__PURE__ */ _.jsx("option", { value: "last", children: "Last X Messages" }),
                    /* @__PURE__ */ _.jsx("option", { value: "range", children: "Range" })
                  ]
                }
              ),
              r.contextToSend.messages.type === "first" && /* @__PURE__ */ _.jsx("div", { style: { marginTop: "10px" }, children: /* @__PURE__ */ _.jsxs("label", { children: [
                "First",
                " ",
                /* @__PURE__ */ _.jsx(
                  "input",
                  {
                    type: "number",
                    className: "text_pole small message-input",
                    min: "1",
                    value: r.contextToSend.messages.first ?? 10,
                    onChange: (P) => J("messages", {
                      ...r.contextToSend.messages,
                      first: P.target.value === "" ? 0 : parseInt(P.target.value)
                    })
                  }
                ),
                " ",
                "Messages"
              ] }) }),
              r.contextToSend.messages.type === "last" && /* @__PURE__ */ _.jsx("div", { style: { marginTop: "10px" }, children: /* @__PURE__ */ _.jsxs("label", { children: [
                "Last",
                " ",
                /* @__PURE__ */ _.jsx(
                  "input",
                  {
                    type: "number",
                    className: "text_pole small message-input",
                    min: "1",
                    value: r.contextToSend.messages.last ?? 10,
                    onChange: (P) => J("messages", {
                      ...r.contextToSend.messages,
                      last: P.target.value === "" ? 0 : parseInt(P.target.value)
                    })
                  }
                ),
                " ",
                "Messages"
              ] }) }),
              r.contextToSend.messages.type === "range" && /* @__PURE__ */ _.jsx("div", { style: { marginTop: "10px" }, children: /* @__PURE__ */ _.jsxs("label", { children: [
                "Range:",
                " ",
                /* @__PURE__ */ _.jsx(
                  "input",
                  {
                    type: "number",
                    className: "text_pole small message-input",
                    min: "0",
                    placeholder: "Start",
                    value: r.contextToSend.messages.range?.start ?? 0,
                    onChange: (P) => J("messages", {
                      ...r.contextToSend.messages,
                      range: {
                        ...r.contextToSend.messages.range,
                        start: P.target.value === "" ? 0 : parseInt(P.target.value)
                      }
                    })
                  }
                ),
                " ",
                "to",
                " ",
                /* @__PURE__ */ _.jsx(
                  "input",
                  {
                    type: "number",
                    className: "text_pole small message-input",
                    min: "1",
                    placeholder: "End",
                    value: r.contextToSend.messages.range?.end ?? 10,
                    onChange: (P) => J("messages", {
                      ...r.contextToSend.messages,
                      range: { ...r.contextToSend.messages.range, end: P.target.value === "" ? 0 : parseInt(P.target.value) }
                    })
                  }
                )
              ] }) })
            ] }),
            /* @__PURE__ */ _.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ _.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.charCard,
                  onChange: (P) => J("charCard", P.target.checked)
                }
              ),
              " ",
              "Selected Characters' Data"
            ] }),
            r.contextToSend.charCard && /* @__PURE__ */ _.jsx(
              hd,
              {
                items: pe,
                value: i.selectedCharacterIndexes,
                onChange: (P) => s((oe) => ({ ...oe, selectedCharacterIndexes: P })),
                multiple: !0,
                enableSearch: !0
              }
            ),
            /* @__PURE__ */ _.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ _.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.worldInfo,
                  onChange: (P) => J("worldInfo", P.target.checked)
                }
              ),
              " ",
              "Selected World Info"
            ] }),
            r.contextToSend.worldInfo && /* @__PURE__ */ _.jsx(
              hd,
              {
                items: Ge,
                value: i.selectedWorldNames,
                onChange: (P) => s((oe) => ({ ...oe, selectedWorldNames: P })),
                multiple: !0,
                enableSearch: !0
              }
            ),
            /* @__PURE__ */ _.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ _.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.existingFields,
                  onChange: (P) => J("existingFields", P.target.checked)
                }
              ),
              " ",
              "Existing Field Content"
            ] }),
            /* @__PURE__ */ _.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ _.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.dontSendOtherGreetings,
                  onChange: (P) => J("dontSendOtherGreetings", P.target.checked)
                }
              ),
              " ",
              "Don't send other alternate greetings"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ _.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ _.jsx("h3", { children: "Generation Options" }),
          /* @__PURE__ */ _.jsxs("label", { title: "You can edit in extension settings", children: [
            "Main Context Template",
            /* @__PURE__ */ _.jsx(
              Sy,
              {
                onItemsChange: () => {
                },
                label: "Main Context Template",
                items: it,
                value: r.mainContextTemplatePreset,
                onChange: (P) => D("mainContextTemplatePreset", P ?? "default")
              }
            )
          ] }),
          /* @__PURE__ */ _.jsxs("label", { children: [
            "Max Context Tokens",
            /* @__PURE__ */ _.jsxs(
              "select",
              {
                className: "text_pole",
                value: r.maxContextType,
                onChange: (P) => D("maxContextType", P.target.value),
                children: [
                  /* @__PURE__ */ _.jsx("option", { value: "profile", children: "Use profile preset" }),
                  /* @__PURE__ */ _.jsx("option", { value: "sampler", children: "Use active preset" }),
                  /* @__PURE__ */ _.jsx("option", { value: "custom", children: "Custom" })
                ]
              }
            )
          ] }),
          r.maxContextType === "custom" && /* @__PURE__ */ _.jsx(
            "input",
            {
              type: "number",
              className: "text_pole",
              value: r.maxContextValue,
              onChange: (P) => D("maxContextValue", P.target.value === "" ? 0 : parseInt(P.target.value))
            }
          ),
          /* @__PURE__ */ _.jsxs("label", { children: [
            "Max Response Tokens",
            /* @__PURE__ */ _.jsx(
              "input",
              {
                type: "number",
                className: "text_pole",
                value: r.maxResponseToken,
                onChange: (P) => D("maxResponseToken", P.target.value === "" ? 0 : parseInt(P.target.value))
              }
            )
          ] }),
          /* @__PURE__ */ _.jsxs("label", { children: [
            "Output Format",
            /* @__PURE__ */ _.jsxs(
              "select",
              {
                className: "text_pole",
                value: r.outputFormat,
                onChange: (P) => D("outputFormat", P.target.value),
                children: [
                  /* @__PURE__ */ _.jsx("option", { value: "none", children: "Plain Text" }),
                  /* @__PURE__ */ _.jsx("option", { value: "xml", children: "XML" }),
                  /* @__PURE__ */ _.jsx("option", { value: "json", children: "JSON" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ _.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ _.jsx("h3", { children: "Additional Instructions" }),
          /* @__PURE__ */ _.jsx(
            Sy,
            {
              label: "Prompt Preset",
              items: He,
              value: r.promptPreset,
              onChange: (P) => D("promptPreset", P ?? "default"),
              onItemsChange: (P) => D(
                "promptPresets",
                P.reduce(
                  (oe, ie) => ({ ...oe, [ie.value]: r.promptPresets[ie.value] ?? { content: "" } }),
                  {}
                )
              ),
              enableCreate: !0,
              enableDelete: !0,
              enableRename: !0,
              readOnlyValues: ["default"]
            }
          ),
          /* @__PURE__ */ _.jsx(
            en,
            {
              value: r.promptPresets[r.promptPreset]?.content ?? "",
              onChange: (P) => D("promptPresets", {
                ...r.promptPresets,
                [r.promptPreset]: { content: P.target.value }
              }),
              rows: 4
            }
          )
        ] }),
        /* @__PURE__ */ _.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ _.jsx("h3", { children: "Actions" }),
          /* @__PURE__ */ _.jsxs("div", { className: "character-field-actions", children: [
            /* @__PURE__ */ _.jsx(
              fe,
              {
                onClick: ct,
                title: "Open global revision sessions to edit multiple fields at once",
                children: /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-comments" })
              }
            ),
            /* @__PURE__ */ _.jsxs(fe, { onClick: qn, title: "Reset all fields", children: [
              /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-rotate-left" }),
              " Reset"
            ] }),
            /* @__PURE__ */ _.jsx("div", { style: { width: "200px" }, title: "Load Character Data", children: /* @__PURE__ */ _.jsx(
              hd,
              {
                items: pe,
                value: $ ? [String(H.indexOf($))] : [],
                onChange: (P) => tn(P[0]),
                multiple: !1,
                enableSearch: !0,
                placeholder: "Load Character..."
              }
            ) }),
            /* @__PURE__ */ _.jsx(fe, { onClick: me, children: "Import JSON" })
          ] })
        ] }),
        /* @__PURE__ */ _.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ _.jsxs("div", { className: "tab-buttons", children: [
            /* @__PURE__ */ _.jsx(
              fe,
              {
                onClick: () => g("core"),
                className: `menu_button tab-button ${h === "core" ? "active" : ""}`,
                children: "Core Fields"
              }
            ),
            /* @__PURE__ */ _.jsx(
              fe,
              {
                onClick: () => g("draft"),
                className: `menu_button tab-button ${h === "draft" ? "active" : ""}`,
                children: "Draft Fields"
              }
            ),
            /* @__PURE__ */ _.jsx("div", { className: "right-aligned", children: h === "draft" && /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
              /* @__PURE__ */ _.jsxs(fe, { onClick: ye, children: [
                /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-plus" }),
                " Add"
              ] }),
              /* @__PURE__ */ _.jsx(fe, { onClick: We, children: "Export" }),
              /* @__PURE__ */ _.jsx(fe, { onClick: me, children: "Import" })
            ] }) })
          ] }),
          /* @__PURE__ */ _.jsxs("div", { className: "tab-content-area", children: [
            /* @__PURE__ */ _.jsxs("div", { className: `tab-content ${h === "core" ? "active" : ""}`, children: [
              dn.map((P) => {
                const oe = e4[P];
                return oe ? /* @__PURE__ */ _.jsx(
                  Ey,
                  {
                    fieldId: P,
                    label: oe.label,
                    value: i.fields[P]?.value ?? "",
                    prompt: i.fields[P]?.prompt ?? "",
                    large: oe.large,
                    rows: oe.rows,
                    promptEnabled: oe.promptEnabled,
                    isGenerating: l.includes(P),
                    onValueChange: (ie, be) => se(ie, be, "value", !1),
                    onPromptChange: (ie, be) => se(ie, be, "prompt", !1),
                    onGenerate: at,
                    onContinue: (ie) => at(ie, i.fields[ie].value),
                    onClear: (ie) => X(ie, !1),
                    onCompare: kt,
                    onOpenReviseSessions: $e
                  },
                  P
                ) : null;
              }),
              /* @__PURE__ */ _.jsx(
                GE,
                {
                  greetings: le,
                  onGreetingsChange: ue,
                  isGenerating: l.some((P) => P.startsWith("alternate_greetings_")),
                  onGenerate: (P) => at(`alternate_greetings_${P + 1}`),
                  onContinue: (P) => at(`alternate_greetings_${P + 1}`, le[P].value),
                  onCompare: kt
                }
              )
            ] }),
            /* @__PURE__ */ _.jsx("div", { className: `tab-content ${h === "draft" ? "active" : ""}`, children: Object.entries(i.draftFields).map(([P, oe]) => /* @__PURE__ */ _.jsx(
              Ey,
              {
                fieldId: P,
                label: oe.label,
                value: oe.value,
                prompt: oe.prompt,
                isDraft: !0,
                rows: 5,
                isGenerating: l.includes(P),
                onValueChange: (ie, be) => se(ie, be, "value", !0),
                onPromptChange: (ie, be) => se(ie, be, "prompt", !0),
                onGenerate: at,
                onContinue: (ie) => at(ie, i.draftFields[ie].value),
                onClear: (ie) => X(ie, !0),
                onDelete: ve
              },
              P
            )) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ _.jsx("div", { className: "column-right", children: /* @__PURE__ */ _.jsx(
        T1,
        {
          session: i,
          onSessionUpdate: s,
          profileId: r.profileId,
          maxResponseToken: r.maxResponseToken,
          kbFiles: d,
          messages: C,
          onMessagesChange: T,
          additionalInstructions: r.promptPresets[r.promptPreset]?.content
        }
      ) })
    ] }),
    m === "lorebook" && /* @__PURE__ */ _.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ _.jsxs("div", { className: "column-left", style: { width: "60%", display: "flex", flexDirection: "column", gap: "15px" }, children: [
        /* @__PURE__ */ _.jsx(n0, { files: d, onFilesChange: x }),
        /* @__PURE__ */ _.jsx(
          UA,
          {
            lorebook: v,
            onLorebookChange: y
          }
        )
      ] }),
      /* @__PURE__ */ _.jsx("div", { className: "column-right", style: { width: "40%" }, children: /* @__PURE__ */ _.jsx(
        ZA,
        {
          lorebook: v,
          onLorebookChange: y,
          profileId: r.profileId,
          maxResponseToken: r.maxResponseToken,
          kbFiles: d,
          messages: E,
          onMessagesChange: O,
          additionalInstructions: r.promptPresets[r.promptPreset]?.content
        }
      ) })
    ] }),
    m === "autonomous" && /* @__PURE__ */ _.jsx(
      YA,
      {
        session: i,
        onSessionUpdate: s,
        profileId: r.profileId,
        isGenerating: w,
        onGenerateFullCharacter: De,
        additionalInstructions: r.promptPresets[r.promptPreset]?.content,
        messages: j,
        onMessagesChange: R
      }
    ),
    m === "cleaner" && /* @__PURE__ */ _.jsx(
      WA,
      {
        kbFiles: d,
        onFilesUpdate: x,
        profileId: r.profileId,
        additionalInstructions: r.promptPresets[r.promptPreset]?.content
      }
    ),
    m === "settings" && /* @__PURE__ */ _.jsx("div", { className: "container", children: /* @__PURE__ */ _.jsx("div", { className: "card", style: { width: "100%", padding: "20px" }, children: /* @__PURE__ */ _.jsx(J0, {}) }) }),
    /* @__PURE__ */ _.jsxs("div", { className: "card export-panel", style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ _.jsx("h3", { children: "Save & Export" }),
      /* @__PURE__ */ _.jsxs("div", { className: "button-group", style: { display: "flex", gap: "10px", flexWrap: "wrap" }, children: [
        m === "character" && /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
          /* @__PURE__ */ _.jsx(fe, { onClick: Xe, className: "menu_button confirm", children: "Create in SillyTavern" }),
          /* @__PURE__ */ _.jsx(fe, { onClick: Ve, className: "menu_button warning", disabled: !$, children: "Update Loaded Character" }),
          /* @__PURE__ */ _.jsx("div", { style: { flexGrow: 1 } }),
          /* @__PURE__ */ _.jsx(
            fe,
            {
              onClick: () => {
                const P = {
                  name: i.fields.name.value,
                  description: i.fields.description.value,
                  personality: i.fields.personality.value,
                  scenario: i.fields.scenario.value,
                  first_mes: i.fields.first_mes.value,
                  mes_example: i.fields.mes_example.value,
                  alternate_greetings: le.map((oe) => oe.value)
                };
                XA(P);
              },
              children: "Export JSON (V3)"
            }
          )
        ] }),
        m === "lorebook" && /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
          /* @__PURE__ */ _.jsxs(
            fe,
            {
              onClick: () => QA(
                {
                  entries: v.entries.map((P, oe) => ({
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
                  name: v.name,
                  description: v.description,
                  scan_depth: v.scan_depth,
                  token_budget: v.token_budget,
                  recursive_scanning: v.recursive_scanning,
                  extensions: {}
                },
                v.name
              ),
              className: "menu_button confirm",
              children: [
                /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-download" }),
                " Export Lorebook JSON"
              ]
            }
          ),
          /* @__PURE__ */ _.jsxs(
            fe,
            {
              onClick: () => y(e0()),
              className: "menu_button warning",
              children: [
                /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-trash" }),
                " Clear Lorebook"
              ]
            }
          )
        ] })
      ] })
    ] }),
    te && /* @__PURE__ */ _.jsx(
      Li,
      {
        type: An.DISPLAY,
        content: /* @__PURE__ */ _.jsx(
          fw,
          {
            originalContent: te.original,
            newContent: te.current,
            fieldName: te.fieldName
          }
        ),
        onComplete: () => W(null),
        options: { wide: !0 }
      }
    ),
    L && de && /* @__PURE__ */ _.jsx(
      Li,
      {
        type: An.DISPLAY,
        content: /* @__PURE__ */ _.jsx(
          MA,
          {
            target: de,
            onClose: () => ae(!1),
            onApply: je,
            initialState: { fields: i.fields, draftFields: i.draftFields },
            contextToSend: r.contextToSend,
            sessionForContext: {
              selectedCharacterIndexes: i.selectedCharacterIndexes,
              selectedWorldNames: i.selectedWorldNames
            }
          }
        ),
        onComplete: () => ae(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
}, n4 = () => {
  const [t, r] = Y.useState(!1), i = () => r(!0), s = () => r(!1);
  return window.openCharacterCreatorPopup = i, t ? /* @__PURE__ */ _.jsx(
    Li,
    {
      content: /* @__PURE__ */ _.jsx(t4, {}),
      type: An.DISPLAY,
      onComplete: s,
      options: {
        large: !0,
        wide: !0
      }
    }
  ) : null;
}, O1 = SillyTavern.getContext();
async function r4() {
  const t = await O1.renderExtensionTemplateAsync(
    `third-party/${Ma}`,
    "templates/settings"
  );
  document.querySelector("#extensions_settings").insertAdjacentHTML("beforeend", t);
  const r = document.createElement("div"), i = document.querySelector(".charCreator_settings .inline-drawer-content");
  i && (i.prepend(r), cv.createRoot(r).render(
    /* @__PURE__ */ _.jsx(cu.StrictMode, { children: /* @__PURE__ */ _.jsx(J0, {}) })
  ));
  const s = '<div class="menu_button fa-solid fa-user-astronaut interactable charCreator-icon" title="Character Creator"></div>', l = [
    document.querySelector(".form_create_bottom_buttons_block"),
    document.querySelector("#GroupFavDelOkBack"),
    document.querySelector("#rm_buttons_container") ?? document.querySelector("#form_character_search_form")
  ], u = document.createElement("div");
  document.body.appendChild(u), cv.createRoot(u).render(
    /* @__PURE__ */ _.jsx(cu.StrictMode, { children: /* @__PURE__ */ _.jsx(n4, {}) })
  ), l.forEach((p) => {
    if (!p) return;
    const h = document.createElement("div");
    h.innerHTML = s.trim();
    const g = h.firstChild;
    g && (p.prepend(g), g.addEventListener("click", () => {
      window.openCharacterCreatorPopup && window.openCharacterCreatorPopup();
    }));
  });
}
function a4() {
  return !!O1.ConnectionManagerRequestService;
}
a4() ? BE().then(() => {
  r4();
}) : xe("error", `[${Ma}] Make sure ST is updated.`);
export {
  r4 as init
};
