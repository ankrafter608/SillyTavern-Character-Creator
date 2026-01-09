import { renderStoryString as H_, persona_description_positions as Xg } from "../../../../power-user.js";
import { parseMesExamples as q_, baseChatReplace as F_, chat_metadata as zs, getMaxContextSize as Z_, name1 as wr, name2 as Wr, this_chid as Tn, extension_prompt_types as Ca, depth_prompt_role_default as G_, depth_prompt_depth_default as V_ } from "../../../../../script.js";
import { world_info_include_names as Y_, wi_anchor_position as X_, world_names as $g } from "../../../../world-info.js";
import "../../../../slash-commands.js";
import "../../../../personas.js";
import { formatInstructModeExamples as $_, formatInstructModeSystemPrompt as J_ } from "../../../../instruct-mode.js";
import { appendFileContent as Q_ } from "../../../../chats.js";
import { setOpenAIMessages as K_, setOpenAIMessageExamples as W_, formatWorldInfo as e2, getPromptPosition as t2, getPromptRole as n2, prepareOpenAIMessages as r2 } from "../../../../openai.js";
import { metadata_keys as Ls } from "../../../../authors-note.js";
import { getGroupDepthPrompts as a2, selected_group as Cr } from "../../../../group-chats.js";
import { getRegexedString as i2, regex_placement as Jg } from "../../../regex/engine.js";
import { removeFromArray as Qg, runAfterAnimation as s2 } from "../../../../utils.js";
import "../../../../slash-commands/SlashCommandCommonEnumsProvider.js";
import "../../../../slash-commands/SlashCommandEnumValue.js";
import { Popup as Ci, fixToastrForDialogs as Hf } from "../../../../popup.js";
import Kg from "../../../../../lib/dialog-polyfill.esm.js";
function o2(t, r) {
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
function qd(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var qf = { exports: {} }, Is = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wg;
function l2() {
  if (Wg) return Is;
  Wg = 1;
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
var ev;
function u2() {
  return ev || (ev = 1, qf.exports = l2()), qf.exports;
}
var _ = u2(), Ff = { exports: {} }, Te = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tv;
function c2() {
  if (tv) return Te;
  tv = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), f = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), S = Symbol.iterator;
  function y(D) {
    return D === null || typeof D != "object" ? null : (D = S && D[S] || D["@@iterator"], typeof D == "function" ? D : null);
  }
  var b = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, h = Object.assign, x = {};
  function w(D, J, re) {
    this.props = D, this.context = J, this.refs = x, this.updater = re || b;
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
  function T() {
  }
  T.prototype = w.prototype;
  function E(D, J, re) {
    this.props = D, this.context = J, this.refs = x, this.updater = re || b;
  }
  var k = E.prototype = new T();
  k.constructor = E, h(k, w.prototype), k.isPureReactComponent = !0;
  var C = Array.isArray, N = { H: null, A: null, T: null, S: null, V: null }, j = Object.prototype.hasOwnProperty;
  function R(D, J, re, ie, se, De) {
    return re = De.ref, {
      $$typeof: t,
      type: D,
      key: J,
      ref: re !== void 0 ? re : null,
      props: De
    };
  }
  function q(D, J) {
    return R(
      D.type,
      J,
      void 0,
      void 0,
      void 0,
      D.props
    );
  }
  function V(D) {
    return typeof D == "object" && D !== null && D.$$typeof === t;
  }
  function U(D) {
    var J = { "=": "=0", ":": "=2" };
    return "$" + D.replace(/[=:]/g, function(re) {
      return J[re];
    });
  }
  var Y = /\/+/g;
  function G(D, J) {
    return typeof D == "object" && D !== null && D.key != null ? U("" + D.key) : J.toString(36);
  }
  function le() {
  }
  function fe(D) {
    switch (D.status) {
      case "fulfilled":
        return D.value;
      case "rejected":
        throw D.reason;
      default:
        switch (typeof D.status == "string" ? D.then(le, le) : (D.status = "pending", D.then(
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
  function ue(D, J, re, ie, se) {
    var De = typeof D;
    (De === "undefined" || De === "boolean") && (D = null);
    var $ = !1;
    if (D === null) $ = !0;
    else
      switch (De) {
        case "bigint":
        case "string":
        case "number":
          $ = !0;
          break;
        case "object":
          switch (D.$$typeof) {
            case t:
            case r:
              $ = !0;
              break;
            case m:
              return $ = D._init, ue(
                $(D._payload),
                J,
                re,
                ie,
                se
              );
          }
      }
    if ($)
      return se = se(D), $ = ie === "" ? "." + G(D, 0) : ie, C(se) ? (re = "", $ != null && (re = $.replace(Y, "$&/") + "/"), ue(se, J, re, "", function(Xe) {
        return Xe;
      })) : se != null && (V(se) && (se = q(
        se,
        re + (se.key == null || D && D.key === se.key ? "" : ("" + se.key).replace(
          Y,
          "$&/"
        ) + "/") + $
      )), J.push(se)), 1;
    $ = 0;
    var ve = ie === "" ? "." : ie + ":";
    if (C(D))
      for (var ye = 0; ye < D.length; ye++)
        ie = D[ye], De = ve + G(ie, ye), $ += ue(
          ie,
          J,
          re,
          De,
          se
        );
    else if (ye = y(D), typeof ye == "function")
      for (D = ye.call(D), ye = 0; !(ie = D.next()).done; )
        ie = ie.value, De = ve + G(ie, ye++), $ += ue(
          ie,
          J,
          re,
          De,
          se
        );
    else if (De === "object") {
      if (typeof D.then == "function")
        return ue(
          fe(D),
          J,
          re,
          ie,
          se
        );
      throw J = String(D), Error(
        "Objects are not valid as a React child (found: " + (J === "[object Object]" ? "object with keys {" + Object.keys(D).join(", ") + "}" : J) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return $;
  }
  function I(D, J, re) {
    if (D == null) return D;
    var ie = [], se = 0;
    return ue(D, ie, "", "", function(De) {
      return J.call(re, De, se++);
    }), ie;
  }
  function ne(D) {
    if (D._status === -1) {
      var J = D._result;
      J = J(), J.then(
        function(re) {
          (D._status === 0 || D._status === -1) && (D._status = 1, D._result = re);
        },
        function(re) {
          (D._status === 0 || D._status === -1) && (D._status = 2, D._result = re);
        }
      ), D._status === -1 && (D._status = 0, D._result = J);
    }
    if (D._status === 1) return D._result.default;
    throw D._result;
  }
  var ce = typeof reportError == "function" ? reportError : function(D) {
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
  function je() {
  }
  return Te.Children = {
    map: I,
    forEach: function(D, J, re) {
      I(
        D,
        function() {
          J.apply(this, arguments);
        },
        re
      );
    },
    count: function(D) {
      var J = 0;
      return I(D, function() {
        J++;
      }), J;
    },
    toArray: function(D) {
      return I(D, function(J) {
        return J;
      }) || [];
    },
    only: function(D) {
      if (!V(D))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return D;
    }
  }, Te.Component = w, Te.Fragment = i, Te.Profiler = l, Te.PureComponent = E, Te.StrictMode = s, Te.Suspense = d, Te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = N, Te.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(D) {
      return N.H.useMemoCache(D);
    }
  }, Te.cache = function(D) {
    return function() {
      return D.apply(null, arguments);
    };
  }, Te.cloneElement = function(D, J, re) {
    if (D == null)
      throw Error(
        "The argument must be a React element, but you passed " + D + "."
      );
    var ie = h({}, D.props), se = D.key, De = void 0;
    if (J != null)
      for ($ in J.ref !== void 0 && (De = void 0), J.key !== void 0 && (se = "" + J.key), J)
        !j.call(J, $) || $ === "key" || $ === "__self" || $ === "__source" || $ === "ref" && J.ref === void 0 || (ie[$] = J[$]);
    var $ = arguments.length - 2;
    if ($ === 1) ie.children = re;
    else if (1 < $) {
      for (var ve = Array($), ye = 0; ye < $; ye++)
        ve[ye] = arguments[ye + 2];
      ie.children = ve;
    }
    return R(D.type, se, void 0, void 0, De, ie);
  }, Te.createContext = function(D) {
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
  }, Te.createElement = function(D, J, re) {
    var ie, se = {}, De = null;
    if (J != null)
      for (ie in J.key !== void 0 && (De = "" + J.key), J)
        j.call(J, ie) && ie !== "key" && ie !== "__self" && ie !== "__source" && (se[ie] = J[ie]);
    var $ = arguments.length - 2;
    if ($ === 1) se.children = re;
    else if (1 < $) {
      for (var ve = Array($), ye = 0; ye < $; ye++)
        ve[ye] = arguments[ye + 2];
      se.children = ve;
    }
    if (D && D.defaultProps)
      for (ie in $ = D.defaultProps, $)
        se[ie] === void 0 && (se[ie] = $[ie]);
    return R(D, De, void 0, void 0, null, se);
  }, Te.createRef = function() {
    return { current: null };
  }, Te.forwardRef = function(D) {
    return { $$typeof: p, render: D };
  }, Te.isValidElement = V, Te.lazy = function(D) {
    return {
      $$typeof: m,
      _payload: { _status: -1, _result: D },
      _init: ne
    };
  }, Te.memo = function(D, J) {
    return {
      $$typeof: g,
      type: D,
      compare: J === void 0 ? null : J
    };
  }, Te.startTransition = function(D) {
    var J = N.T, re = {};
    N.T = re;
    try {
      var ie = D(), se = N.S;
      se !== null && se(re, ie), typeof ie == "object" && ie !== null && typeof ie.then == "function" && ie.then(je, ce);
    } catch (De) {
      ce(De);
    } finally {
      N.T = J;
    }
  }, Te.unstable_useCacheRefresh = function() {
    return N.H.useCacheRefresh();
  }, Te.use = function(D) {
    return N.H.use(D);
  }, Te.useActionState = function(D, J, re) {
    return N.H.useActionState(D, J, re);
  }, Te.useCallback = function(D, J) {
    return N.H.useCallback(D, J);
  }, Te.useContext = function(D) {
    return N.H.useContext(D);
  }, Te.useDebugValue = function() {
  }, Te.useDeferredValue = function(D, J) {
    return N.H.useDeferredValue(D, J);
  }, Te.useEffect = function(D, J, re) {
    var ie = N.H;
    if (typeof re == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return ie.useEffect(D, J);
  }, Te.useId = function() {
    return N.H.useId();
  }, Te.useImperativeHandle = function(D, J, re) {
    return N.H.useImperativeHandle(D, J, re);
  }, Te.useInsertionEffect = function(D, J) {
    return N.H.useInsertionEffect(D, J);
  }, Te.useLayoutEffect = function(D, J) {
    return N.H.useLayoutEffect(D, J);
  }, Te.useMemo = function(D, J) {
    return N.H.useMemo(D, J);
  }, Te.useOptimistic = function(D, J) {
    return N.H.useOptimistic(D, J);
  }, Te.useReducer = function(D, J, re) {
    return N.H.useReducer(D, J, re);
  }, Te.useRef = function(D) {
    return N.H.useRef(D);
  }, Te.useState = function(D) {
    return N.H.useState(D);
  }, Te.useSyncExternalStore = function(D, J, re) {
    return N.H.useSyncExternalStore(
      D,
      J,
      re
    );
  }, Te.useTransition = function() {
    return N.H.useTransition();
  }, Te.version = "19.1.1", Te;
}
var nv;
function Fd() {
  return nv || (nv = 1, Ff.exports = c2()), Ff.exports;
}
var X = Fd();
const cu = /* @__PURE__ */ qd(X);
var Zf = { exports: {} }, Ps = {}, Gf = { exports: {} }, Vf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rv;
function f2() {
  return rv || (rv = 1, (function(t) {
    function r(I, ne) {
      var ce = I.length;
      I.push(ne);
      e: for (; 0 < ce; ) {
        var je = ce - 1 >>> 1, D = I[je];
        if (0 < l(D, ne))
          I[je] = ne, I[ce] = D, ce = je;
        else break e;
      }
    }
    function i(I) {
      return I.length === 0 ? null : I[0];
    }
    function s(I) {
      if (I.length === 0) return null;
      var ne = I[0], ce = I.pop();
      if (ce !== ne) {
        I[0] = ce;
        e: for (var je = 0, D = I.length, J = D >>> 1; je < J; ) {
          var re = 2 * (je + 1) - 1, ie = I[re], se = re + 1, De = I[se];
          if (0 > l(ie, ce))
            se < D && 0 > l(De, ie) ? (I[je] = De, I[se] = ce, je = se) : (I[je] = ie, I[re] = ce, je = re);
          else if (se < D && 0 > l(De, ce))
            I[je] = De, I[se] = ce, je = se;
          else break e;
        }
      }
      return ne;
    }
    function l(I, ne) {
      var ce = I.sortIndex - ne.sortIndex;
      return ce !== 0 ? ce : I.id - ne.id;
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
    var d = [], g = [], m = 1, S = null, y = 3, b = !1, h = !1, x = !1, w = !1, T = typeof setTimeout == "function" ? setTimeout : null, E = typeof clearTimeout == "function" ? clearTimeout : null, k = typeof setImmediate < "u" ? setImmediate : null;
    function C(I) {
      for (var ne = i(g); ne !== null; ) {
        if (ne.callback === null) s(g);
        else if (ne.startTime <= I)
          s(g), ne.sortIndex = ne.expirationTime, r(d, ne);
        else break;
        ne = i(g);
      }
    }
    function N(I) {
      if (x = !1, C(I), !h)
        if (i(d) !== null)
          h = !0, j || (j = !0, G());
        else {
          var ne = i(g);
          ne !== null && ue(N, ne.startTime - I);
        }
    }
    var j = !1, R = -1, q = 5, V = -1;
    function U() {
      return w ? !0 : !(t.unstable_now() - V < q);
    }
    function Y() {
      if (w = !1, j) {
        var I = t.unstable_now();
        V = I;
        var ne = !0;
        try {
          e: {
            h = !1, x && (x = !1, E(R), R = -1), b = !0;
            var ce = y;
            try {
              t: {
                for (C(I), S = i(d); S !== null && !(S.expirationTime > I && U()); ) {
                  var je = S.callback;
                  if (typeof je == "function") {
                    S.callback = null, y = S.priorityLevel;
                    var D = je(
                      S.expirationTime <= I
                    );
                    if (I = t.unstable_now(), typeof D == "function") {
                      S.callback = D, C(I), ne = !0;
                      break t;
                    }
                    S === i(d) && s(d), C(I);
                  } else s(d);
                  S = i(d);
                }
                if (S !== null) ne = !0;
                else {
                  var J = i(g);
                  J !== null && ue(
                    N,
                    J.startTime - I
                  ), ne = !1;
                }
              }
              break e;
            } finally {
              S = null, y = ce, b = !1;
            }
            ne = void 0;
          }
        } finally {
          ne ? G() : j = !1;
        }
      }
    }
    var G;
    if (typeof k == "function")
      G = function() {
        k(Y);
      };
    else if (typeof MessageChannel < "u") {
      var le = new MessageChannel(), fe = le.port2;
      le.port1.onmessage = Y, G = function() {
        fe.postMessage(null);
      };
    } else
      G = function() {
        T(Y, 0);
      };
    function ue(I, ne) {
      R = T(function() {
        I(t.unstable_now());
      }, ne);
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(I) {
      I.callback = null;
    }, t.unstable_forceFrameRate = function(I) {
      0 > I || 125 < I ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : q = 0 < I ? Math.floor(1e3 / I) : 5;
    }, t.unstable_getCurrentPriorityLevel = function() {
      return y;
    }, t.unstable_next = function(I) {
      switch (y) {
        case 1:
        case 2:
        case 3:
          var ne = 3;
          break;
        default:
          ne = y;
      }
      var ce = y;
      y = ne;
      try {
        return I();
      } finally {
        y = ce;
      }
    }, t.unstable_requestPaint = function() {
      w = !0;
    }, t.unstable_runWithPriority = function(I, ne) {
      switch (I) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          I = 3;
      }
      var ce = y;
      y = I;
      try {
        return ne();
      } finally {
        y = ce;
      }
    }, t.unstable_scheduleCallback = function(I, ne, ce) {
      var je = t.unstable_now();
      switch (typeof ce == "object" && ce !== null ? (ce = ce.delay, ce = typeof ce == "number" && 0 < ce ? je + ce : je) : ce = je, I) {
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
      return D = ce + D, I = {
        id: m++,
        callback: ne,
        priorityLevel: I,
        startTime: ce,
        expirationTime: D,
        sortIndex: -1
      }, ce > je ? (I.sortIndex = ce, r(g, I), i(d) === null && I === i(g) && (x ? (E(R), R = -1) : x = !0, ue(N, ce - je))) : (I.sortIndex = D, r(d, I), h || b || (h = !0, j || (j = !0, G()))), I;
    }, t.unstable_shouldYield = U, t.unstable_wrapCallback = function(I) {
      var ne = y;
      return function() {
        var ce = y;
        y = ne;
        try {
          return I.apply(this, arguments);
        } finally {
          y = ce;
        }
      };
    };
  })(Vf)), Vf;
}
var av;
function d2() {
  return av || (av = 1, Gf.exports = f2()), Gf.exports;
}
var Yf = { exports: {} }, Vt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var iv;
function h2() {
  if (iv) return Vt;
  iv = 1;
  var t = Fd();
  function r(d) {
    var g = "https://react.dev/errors/" + d;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var m = 2; m < arguments.length; m++)
        g += "&args[]=" + encodeURIComponent(arguments[m]);
    }
    return "Minified React error #" + d + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  function u(d, g, m) {
    var S = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: l,
      key: S == null ? null : "" + S,
      children: d,
      containerInfo: g,
      implementation: m
    };
  }
  var f = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(d, g) {
    if (d === "font") return "";
    if (typeof g == "string")
      return g === "use-credentials" ? g : "";
  }
  return Vt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, Vt.createPortal = function(d, g) {
    var m = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
      throw Error(r(299));
    return u(d, g, null, m);
  }, Vt.flushSync = function(d) {
    var g = f.T, m = s.p;
    try {
      if (f.T = null, s.p = 2, d) return d();
    } finally {
      f.T = g, s.p = m, s.d.f();
    }
  }, Vt.preconnect = function(d, g) {
    typeof d == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, s.d.C(d, g));
  }, Vt.prefetchDNS = function(d) {
    typeof d == "string" && s.d.D(d);
  }, Vt.preinit = function(d, g) {
    if (typeof d == "string" && g && typeof g.as == "string") {
      var m = g.as, S = p(m, g.crossOrigin), y = typeof g.integrity == "string" ? g.integrity : void 0, b = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      m === "style" ? s.d.S(
        d,
        typeof g.precedence == "string" ? g.precedence : void 0,
        {
          crossOrigin: S,
          integrity: y,
          fetchPriority: b
        }
      ) : m === "script" && s.d.X(d, {
        crossOrigin: S,
        integrity: y,
        fetchPriority: b,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      });
    }
  }, Vt.preinitModule = function(d, g) {
    if (typeof d == "string")
      if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var m = p(
            g.as,
            g.crossOrigin
          );
          s.d.M(d, {
            crossOrigin: m,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
            nonce: typeof g.nonce == "string" ? g.nonce : void 0
          });
        }
      } else g == null && s.d.M(d);
  }, Vt.preload = function(d, g) {
    if (typeof d == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var m = g.as, S = p(m, g.crossOrigin);
      s.d.L(d, m, {
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
  }, Vt.preloadModule = function(d, g) {
    if (typeof d == "string")
      if (g) {
        var m = p(g.as, g.crossOrigin);
        s.d.m(d, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: m,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0
        });
      } else s.d.m(d);
  }, Vt.requestFormReset = function(d) {
    s.d.r(d);
  }, Vt.unstable_batchedUpdates = function(d, g) {
    return d(g);
  }, Vt.useFormState = function(d, g, m) {
    return f.H.useFormState(d, g, m);
  }, Vt.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, Vt.version = "19.1.1", Vt;
}
var sv;
function t0() {
  if (sv) return Yf.exports;
  sv = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return t(), Yf.exports = h2(), Yf.exports;
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
var ov;
function p2() {
  if (ov) return Ps;
  ov = 1;
  var t = d2(), r = Fd(), i = t0();
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
  function d(e) {
    var n = e.alternate;
    if (!n) {
      if (n = u(e), n === null) throw Error(s(188));
      return n !== e ? null : e;
    }
    for (var a = e, o = n; ; ) {
      var c = a.return;
      if (c === null) break;
      var v = c.alternate;
      if (v === null) {
        if (o = c.return, o !== null) {
          a = o;
          continue;
        }
        break;
      }
      if (c.child === v.child) {
        for (v = c.child; v; ) {
          if (v === a) return p(c), e;
          if (v === o) return p(c), n;
          v = v.sibling;
        }
        throw Error(s(188));
      }
      if (a.return !== o.return) a = c, o = v;
      else {
        for (var A = !1, O = c.child; O; ) {
          if (O === a) {
            A = !0, a = c, o = v;
            break;
          }
          if (O === o) {
            A = !0, o = c, a = v;
            break;
          }
          O = O.sibling;
        }
        if (!A) {
          for (O = v.child; O; ) {
            if (O === a) {
              A = !0, a = v, o = c;
              break;
            }
            if (O === o) {
              A = !0, o = v, a = c;
              break;
            }
            O = O.sibling;
          }
          if (!A) throw Error(s(189));
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
  var m = Object.assign, S = Symbol.for("react.element"), y = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), E = Symbol.for("react.consumer"), k = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), V = Symbol.for("react.activity"), U = Symbol.for("react.memo_cache_sentinel"), Y = Symbol.iterator;
  function G(e) {
    return e === null || typeof e != "object" ? null : (e = Y && e[Y] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var le = Symbol.for("react.client.reference");
  function fe(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === le ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case h:
        return "Fragment";
      case w:
        return "Profiler";
      case x:
        return "StrictMode";
      case N:
        return "Suspense";
      case j:
        return "SuspenseList";
      case V:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case b:
          return "Portal";
        case k:
          return (e.displayName || "Context") + ".Provider";
        case E:
          return (e._context.displayName || "Context") + ".Consumer";
        case C:
          var n = e.render;
          return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case R:
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
  var ue = Array.isArray, I = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ne = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ce = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, je = [], D = -1;
  function J(e) {
    return { current: e };
  }
  function re(e) {
    0 > D || (e.current = je[D], je[D] = null, D--);
  }
  function ie(e, n) {
    D++, je[D] = e.current, e.current = n;
  }
  var se = J(null), De = J(null), $ = J(null), ve = J(null);
  function ye(e, n) {
    switch (ie($, n), ie(De, e), ie(se, null), n.nodeType) {
      case 9:
      case 11:
        e = (e = n.documentElement) && (e = e.namespaceURI) ? xg(e) : 0;
        break;
      default:
        if (e = n.tagName, n = n.namespaceURI)
          n = xg(n), e = Eg(n, e);
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
    re(se), ie(se, e);
  }
  function Xe() {
    re(se), re(De), re($);
  }
  function ct(e) {
    e.memoizedState !== null && ie(ve, e);
    var n = se.current, a = Eg(n, e.type);
    n !== a && (ie(De, e), ie(se, a));
  }
  function ke(e) {
    De.current === e && (re(se), re(De)), ve.current === e && (re(ve), ks._currentValue = ce);
  }
  var at = Object.prototype.hasOwnProperty, qn = t.unstable_scheduleCallback, kt = t.unstable_cancelCallback, en = t.unstable_shouldYield, Ze = t.unstable_requestPaint, $e = t.unstable_now, Ve = t.unstable_getCurrentPriorityLevel, We = t.unstable_ImmediatePriority, me = t.unstable_UserBlockingPriority, pe = t.unstable_NormalPriority, Ge = t.unstable_LowPriority, He = t.unstable_IdlePriority, it = t.log, P = t.unstable_setDisableYieldValue, ae = null, te = null;
  function be(e) {
    if (typeof it == "function" && P(e), te && typeof te.setStrictMode == "function")
      try {
        te.setStrictMode(ae, e);
      } catch {
      }
  }
  var Be = Math.clz32 ? Math.clz32 : mn, Re = Math.log, pt = Math.LN2;
  function mn(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Re(e) / pt | 0) | 0;
  }
  var $t = 256, Jt = 4194304;
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
    var c = 0, v = e.suspendedLanes, A = e.pingedLanes;
    e = e.warmLanes;
    var O = o & 134217727;
    return O !== 0 ? (o = O & ~v, o !== 0 ? c = qe(o) : (A &= O, A !== 0 ? c = qe(A) : a || (a = O & ~e, a !== 0 && (c = qe(a))))) : (O = o & ~v, O !== 0 ? c = qe(O) : A !== 0 ? c = qe(A) : a || (a = o & ~e, a !== 0 && (c = qe(a)))), c === 0 ? 0 : n !== 0 && n !== c && (n & v) === 0 && (v = c & -c, a = n & -n, v >= a || v === 32 && (a & 4194048) !== 0) ? n : c;
  }
  function tn(e, n) {
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
    var e = $t;
    return $t <<= 1, ($t & 4194048) === 0 && ($t = 256), e;
  }
  function sh() {
    var e = Jt;
    return Jt <<= 1, (Jt & 62914560) === 0 && (Jt = 4194304), e;
  }
  function Ou(e) {
    for (var n = [], a = 0; 31 > a; a++) n.push(e);
    return n;
  }
  function Ui(e, n) {
    e.pendingLanes |= n, n !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function O1(e, n, a, o, c, v) {
    var A = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var O = e.entanglements, M = e.expirationTimes, H = e.hiddenUpdates;
    for (a = A & ~a; 0 < a; ) {
      var Q = 31 - Be(a), W = 1 << Q;
      O[Q] = 0, M[Q] = -1;
      var F = H[Q];
      if (F !== null)
        for (H[Q] = null, Q = 0; Q < F.length; Q++) {
          var Z = F[Q];
          Z !== null && (Z.lane &= -536870913);
        }
      a &= ~W;
    }
    o !== 0 && oh(e, o, 0), v !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= v & ~(A & ~n));
  }
  function oh(e, n, a) {
    e.pendingLanes |= n, e.suspendedLanes &= ~n;
    var o = 31 - Be(n);
    e.entangledLanes |= n, e.entanglements[o] = e.entanglements[o] | 1073741824 | a & 4194090;
  }
  function lh(e, n) {
    var a = e.entangledLanes |= n;
    for (e = e.entanglements; a; ) {
      var o = 31 - Be(a), c = 1 << o;
      c & n | e[o] & n && (e[o] |= n), a &= ~c;
    }
  }
  function ku(e) {
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
  function ju(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function uh() {
    var e = ne.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : qg(e.type));
  }
  function k1(e, n) {
    var a = ne.p;
    try {
      return ne.p = e, n();
    } finally {
      ne.p = a;
    }
  }
  var kr = Math.random().toString(36).slice(2), Zt = "__reactFiber$" + kr, nn = "__reactProps$" + kr, Ua = "__reactContainer$" + kr, Mu = "__reactEvents$" + kr, j1 = "__reactListeners$" + kr, M1 = "__reactHandles$" + kr, ch = "__reactResources$" + kr, Hi = "__reactMarker$" + kr;
  function Du(e) {
    delete e[Zt], delete e[nn], delete e[Mu], delete e[j1], delete e[M1];
  }
  function Ha(e) {
    var n = e[Zt];
    if (n) return n;
    for (var a = e.parentNode; a; ) {
      if (n = a[Ua] || a[Zt]) {
        if (a = n.alternate, n.child !== null || a !== null && a.child !== null)
          for (e = Ng(e); e !== null; ) {
            if (a = e[Zt]) return a;
            e = Ng(e);
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
    var n = e[ch];
    return n || (n = e[ch] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function zt(e) {
    e[Hi] = !0;
  }
  var fh = /* @__PURE__ */ new Set(), dh = {};
  function la(e, n) {
    Za(e, n), Za(e + "Capture", n);
  }
  function Za(e, n) {
    for (dh[e] = n, e = 0; e < n.length; e++)
      fh.add(n[e]);
  }
  var D1 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), hh = {}, ph = {};
  function R1(e) {
    return at.call(ph, e) ? !0 : at.call(hh, e) ? !1 : D1.test(e) ? ph[e] = !0 : (hh[e] = !0, !1);
  }
  function co(e, n, a) {
    if (R1(n))
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
  var Ru, mh;
  function Ga(e) {
    if (Ru === void 0)
      try {
        throw Error();
      } catch (a) {
        var n = a.stack.trim().match(/\n( *(at )?)/);
        Ru = n && n[1] || "", mh = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Ru + e + mh;
  }
  var zu = !1;
  function Lu(e, n) {
    if (!e || zu) return "";
    zu = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = {
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
      var v = o.DetermineComponentFrameRoot(), A = v[0], O = v[1];
      if (A && O) {
        var M = A.split(`
`), H = O.split(`
`);
        for (c = o = 0; o < M.length && !M[o].includes("DetermineComponentFrameRoot"); )
          o++;
        for (; c < H.length && !H[c].includes(
          "DetermineComponentFrameRoot"
        ); )
          c++;
        if (o === M.length || c === H.length)
          for (o = M.length - 1, c = H.length - 1; 1 <= o && 0 <= c && M[o] !== H[c]; )
            c--;
        for (; 1 <= o && 0 <= c; o--, c--)
          if (M[o] !== H[c]) {
            if (o !== 1 || c !== 1)
              do
                if (o--, c--, 0 > c || M[o] !== H[c]) {
                  var Q = `
` + M[o].replace(" at new ", " at ");
                  return e.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", e.displayName)), Q;
                }
              while (1 <= o && 0 <= c);
            break;
          }
      }
    } finally {
      zu = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? Ga(a) : "";
  }
  function z1(e) {
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
        return Lu(e.type, !1);
      case 11:
        return Lu(e.type.render, !1);
      case 1:
        return Lu(e.type, !0);
      case 31:
        return Ga("Activity");
      default:
        return "";
    }
  }
  function gh(e) {
    try {
      var n = "";
      do
        n += z1(e), e = e.return;
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
  function vh(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function L1(e) {
    var n = vh(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      n
    ), o = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var c = a.get, v = a.set;
      return Object.defineProperty(e, n, {
        configurable: !0,
        get: function() {
          return c.call(this);
        },
        set: function(A) {
          o = "" + A, v.call(this, A);
        }
      }), Object.defineProperty(e, n, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return o;
        },
        setValue: function(A) {
          o = "" + A;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[n];
        }
      };
    }
  }
  function ho(e) {
    e._valueTracker || (e._valueTracker = L1(e));
  }
  function yh(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var a = n.getValue(), o = "";
    return e && (o = vh(e) ? e.checked ? "true" : "false" : e.value), e = o, e !== a ? (n.setValue(e), !0) : !1;
  }
  function po(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var I1 = /[\n"\\]/g;
  function kn(e) {
    return e.replace(
      I1,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Iu(e, n, a, o, c, v, A, O) {
    e.name = "", A != null && typeof A != "function" && typeof A != "symbol" && typeof A != "boolean" ? e.type = A : e.removeAttribute("type"), n != null ? A === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + On(n)) : e.value !== "" + On(n) && (e.value = "" + On(n)) : A !== "submit" && A !== "reset" || e.removeAttribute("value"), n != null ? Pu(e, A, On(n)) : a != null ? Pu(e, A, On(a)) : o != null && e.removeAttribute("value"), c == null && v != null && (e.defaultChecked = !!v), c != null && (e.checked = c && typeof c != "function" && typeof c != "symbol"), O != null && typeof O != "function" && typeof O != "symbol" && typeof O != "boolean" ? e.name = "" + On(O) : e.removeAttribute("name");
  }
  function bh(e, n, a, o, c, v, A, O) {
    if (v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" && (e.type = v), n != null || a != null) {
      if (!(v !== "submit" && v !== "reset" || n != null))
        return;
      a = a != null ? "" + On(a) : "", n = n != null ? "" + On(n) : a, O || n === e.value || (e.value = n), e.defaultValue = n;
    }
    o = o ?? c, o = typeof o != "function" && typeof o != "symbol" && !!o, e.checked = O ? e.checked : !!o, e.defaultChecked = !!o, A != null && typeof A != "function" && typeof A != "symbol" && typeof A != "boolean" && (e.name = A);
  }
  function Pu(e, n, a) {
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
  function _h(e, n, a) {
    if (n != null && (n = "" + On(n), n !== e.value && (e.value = n), a == null)) {
      e.defaultValue !== n && (e.defaultValue = n);
      return;
    }
    e.defaultValue = a != null ? "" + On(a) : "";
  }
  function Sh(e, n, a, o) {
    if (n == null) {
      if (o != null) {
        if (a != null) throw Error(s(92));
        if (ue(o)) {
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
  var P1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function xh(e, n, a) {
    var o = n.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? o ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "" : o ? e.setProperty(n, a) : typeof a != "number" || a === 0 || P1.has(n) ? n === "float" ? e.cssFloat = a : e[n] = ("" + a).trim() : e[n] = a + "px";
  }
  function Eh(e, n, a) {
    if (n != null && typeof n != "object")
      throw Error(s(62));
    if (e = e.style, a != null) {
      for (var o in a)
        !a.hasOwnProperty(o) || n != null && n.hasOwnProperty(o) || (o.indexOf("--") === 0 ? e.setProperty(o, "") : o === "float" ? e.cssFloat = "" : e[o] = "");
      for (var c in n)
        o = n[c], n.hasOwnProperty(c) && a[c] !== o && xh(e, c, o);
    } else
      for (var v in n)
        n.hasOwnProperty(v) && xh(e, v, n[v]);
  }
  function Bu(e) {
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
  var B1 = /* @__PURE__ */ new Map([
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
  ]), U1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function mo(e) {
    return U1.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var Uu = null;
  function Hu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Xa = null, $a = null;
  function wh(e) {
    var n = qa(e);
    if (n && (e = n.stateNode)) {
      var a = e[nn] || null;
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
              'input[name="' + kn(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < a.length; n++) {
              var o = a[n];
              if (o !== e && o.form === e.form) {
                var c = o[nn] || null;
                if (!c) throw Error(s(90));
                Iu(
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
              o = a[n], o.form === e.form && yh(o);
          }
          break e;
        case "textarea":
          _h(e, a.value, a.defaultValue);
          break e;
        case "select":
          n = a.value, n != null && Va(e, !!a.multiple, n, !1);
      }
    }
  }
  var qu = !1;
  function Ch(e, n, a) {
    if (qu) return e(n, a);
    qu = !0;
    try {
      var o = e(n);
      return o;
    } finally {
      if (qu = !1, (Xa !== null || $a !== null) && (el(), Xa && (n = Xa, e = $a, $a = Xa = null, wh(n), e)))
        for (n = 0; n < e.length; n++) wh(e[n]);
    }
  }
  function Fi(e, n) {
    var a = e.stateNode;
    if (a === null) return null;
    var o = a[nn] || null;
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
  var lr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Fu = !1;
  if (lr)
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
  var jr = null, Zu = null, go = null;
  function Ah() {
    if (go) return go;
    var e, n = Zu, a = n.length, o, c = "value" in jr ? jr.value : jr.textContent, v = c.length;
    for (e = 0; e < a && n[e] === c[e]; e++) ;
    var A = a - e;
    for (o = 1; o <= A && n[a - o] === c[v - o]; o++) ;
    return go = c.slice(e, 1 < o ? 1 - o : void 0);
  }
  function vo(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function yo() {
    return !0;
  }
  function Nh() {
    return !1;
  }
  function rn(e) {
    function n(a, o, c, v, A) {
      this._reactName = a, this._targetInst = c, this.type = o, this.nativeEvent = v, this.target = A, this.currentTarget = null;
      for (var O in e)
        e.hasOwnProperty(O) && (a = e[O], this[O] = a ? a(v) : v[O]);
      return this.isDefaultPrevented = (v.defaultPrevented != null ? v.defaultPrevented : v.returnValue === !1) ? yo : Nh, this.isPropagationStopped = Nh, this;
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
  }, bo = rn(ua), Gi = m({}, ua, { view: 0, detail: 0 }), H1 = rn(Gi), Gu, Vu, Vi, _o = m({}, Gi, {
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
      return "movementX" in e ? e.movementX : (e !== Vi && (Vi && e.type === "mousemove" ? (Gu = e.screenX - Vi.screenX, Vu = e.screenY - Vi.screenY) : Vu = Gu = 0, Vi = e), Gu);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Vu;
    }
  }), Th = rn(_o), q1 = m({}, _o, { dataTransfer: 0 }), F1 = rn(q1), Z1 = m({}, Gi, { relatedTarget: 0 }), Yu = rn(Z1), G1 = m({}, ua, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), V1 = rn(G1), Y1 = m({}, ua, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), X1 = rn(Y1), $1 = m({}, ua, { data: 0 }), Oh = rn($1), J1 = {
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
  }, Q1 = {
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
  }, K1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function W1(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = K1[e]) ? !!n[e] : !1;
  }
  function Xu() {
    return W1;
  }
  var eb = m({}, Gi, {
    key: function(e) {
      if (e.key) {
        var n = J1[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress" ? (e = vo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Q1[e.keyCode] || "Unidentified" : "";
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
  }), tb = rn(eb), nb = m({}, _o, {
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
  }), kh = rn(nb), rb = m({}, Gi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Xu
  }), ab = rn(rb), ib = m({}, ua, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), sb = rn(ib), ob = m({}, _o, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), lb = rn(ob), ub = m({}, ua, {
    newState: 0,
    oldState: 0
  }), cb = rn(ub), fb = [9, 13, 27, 32], $u = lr && "CompositionEvent" in window, Yi = null;
  lr && "documentMode" in document && (Yi = document.documentMode);
  var db = lr && "TextEvent" in window && !Yi, jh = lr && (!$u || Yi && 8 < Yi && 11 >= Yi), Mh = " ", Dh = !1;
  function Rh(e, n) {
    switch (e) {
      case "keyup":
        return fb.indexOf(n.keyCode) !== -1;
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
  function zh(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ja = !1;
  function hb(e, n) {
    switch (e) {
      case "compositionend":
        return zh(n);
      case "keypress":
        return n.which !== 32 ? null : (Dh = !0, Mh);
      case "textInput":
        return e = n.data, e === Mh && Dh ? null : e;
      default:
        return null;
    }
  }
  function pb(e, n) {
    if (Ja)
      return e === "compositionend" || !$u && Rh(e, n) ? (e = Ah(), go = Zu = jr = null, Ja = !1, e) : null;
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
  var mb = {
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
  function Lh(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!mb[e.type] : n === "textarea";
  }
  function Ih(e, n, a, o) {
    Xa ? $a ? $a.push(o) : $a = [o] : Xa = o, n = sl(n, "onChange"), 0 < n.length && (a = new bo(
      "onChange",
      "change",
      null,
      a,
      o
    ), e.push({ event: a, listeners: n }));
  }
  var Xi = null, $i = null;
  function gb(e) {
    vg(e, 0);
  }
  function So(e) {
    var n = qi(e);
    if (yh(n)) return e;
  }
  function Ph(e, n) {
    if (e === "change") return n;
  }
  var Bh = !1;
  if (lr) {
    var Ju;
    if (lr) {
      var Qu = "oninput" in document;
      if (!Qu) {
        var Uh = document.createElement("div");
        Uh.setAttribute("oninput", "return;"), Qu = typeof Uh.oninput == "function";
      }
      Ju = Qu;
    } else Ju = !1;
    Bh = Ju && (!document.documentMode || 9 < document.documentMode);
  }
  function Hh() {
    Xi && (Xi.detachEvent("onpropertychange", qh), $i = Xi = null);
  }
  function qh(e) {
    if (e.propertyName === "value" && So($i)) {
      var n = [];
      Ih(
        n,
        $i,
        e,
        Hu(e)
      ), Ch(gb, n);
    }
  }
  function vb(e, n, a) {
    e === "focusin" ? (Hh(), Xi = n, $i = a, Xi.attachEvent("onpropertychange", qh)) : e === "focusout" && Hh();
  }
  function yb(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return So($i);
  }
  function bb(e, n) {
    if (e === "click") return So(n);
  }
  function _b(e, n) {
    if (e === "input" || e === "change")
      return So(n);
  }
  function Sb(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var gn = typeof Object.is == "function" ? Object.is : Sb;
  function Ji(e, n) {
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
  function Fh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Zh(e, n) {
    var a = Fh(e);
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
      a = Fh(a);
    }
  }
  function Gh(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Gh(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Vh(e) {
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
  function Ku(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  var xb = lr && "documentMode" in document && 11 >= document.documentMode, Qa = null, Wu = null, Qi = null, ec = !1;
  function Yh(e, n, a) {
    var o = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    ec || Qa == null || Qa !== po(o) || (o = Qa, "selectionStart" in o && Ku(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = {
      anchorNode: o.anchorNode,
      anchorOffset: o.anchorOffset,
      focusNode: o.focusNode,
      focusOffset: o.focusOffset
    }), Qi && Ji(Qi, o) || (Qi = o, o = sl(Wu, "onSelect"), 0 < o.length && (n = new bo(
      "onSelect",
      "select",
      null,
      n,
      a
    ), e.push({ event: n, listeners: o }), n.target = Qa)));
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
  }, tc = {}, Xh = {};
  lr && (Xh = document.createElement("div").style, "AnimationEvent" in window || (delete Ka.animationend.animation, delete Ka.animationiteration.animation, delete Ka.animationstart.animation), "TransitionEvent" in window || delete Ka.transitionend.transition);
  function fa(e) {
    if (tc[e]) return tc[e];
    if (!Ka[e]) return e;
    var n = Ka[e], a;
    for (a in n)
      if (n.hasOwnProperty(a) && a in Xh)
        return tc[e] = n[a];
    return e;
  }
  var $h = fa("animationend"), Jh = fa("animationiteration"), Qh = fa("animationstart"), Eb = fa("transitionrun"), wb = fa("transitionstart"), Cb = fa("transitioncancel"), Kh = fa("transitionend"), Wh = /* @__PURE__ */ new Map(), nc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  nc.push("scrollEnd");
  function Fn(e, n) {
    Wh.set(e, n), la(n, [e]);
  }
  var ep = /* @__PURE__ */ new WeakMap();
  function jn(e, n) {
    if (typeof e == "object" && e !== null) {
      var a = ep.get(e);
      return a !== void 0 ? a : (n = {
        value: e,
        source: n,
        stack: gh(n)
      }, ep.set(e, n), n);
    }
    return {
      value: e,
      source: n,
      stack: gh(n)
    };
  }
  var Mn = [], Wa = 0, rc = 0;
  function xo() {
    for (var e = Wa, n = rc = Wa = 0; n < e; ) {
      var a = Mn[n];
      Mn[n++] = null;
      var o = Mn[n];
      Mn[n++] = null;
      var c = Mn[n];
      Mn[n++] = null;
      var v = Mn[n];
      if (Mn[n++] = null, o !== null && c !== null) {
        var A = o.pending;
        A === null ? c.next = c : (c.next = A.next, A.next = c), o.pending = c;
      }
      v !== 0 && tp(a, c, v);
    }
  }
  function Eo(e, n, a, o) {
    Mn[Wa++] = e, Mn[Wa++] = n, Mn[Wa++] = a, Mn[Wa++] = o, rc |= o, e.lanes |= o, e = e.alternate, e !== null && (e.lanes |= o);
  }
  function ac(e, n, a, o) {
    return Eo(e, n, a, o), wo(e);
  }
  function ei(e, n) {
    return Eo(e, null, null, n), wo(e);
  }
  function tp(e, n, a) {
    e.lanes |= a;
    var o = e.alternate;
    o !== null && (o.lanes |= a);
    for (var c = !1, v = e.return; v !== null; )
      v.childLanes |= a, o = v.alternate, o !== null && (o.childLanes |= a), v.tag === 22 && (e = v.stateNode, e === null || e._visibility & 1 || (c = !0)), e = v, v = v.return;
    return e.tag === 3 ? (v = e.stateNode, c && n !== null && (c = 31 - Be(a), e = v.hiddenUpdates, o = e[c], o === null ? e[c] = [n] : o.push(n), n.lane = a | 536870912), v) : null;
  }
  function wo(e) {
    if (50 < xs)
      throw xs = 0, ff = null, Error(s(185));
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
  function ic(e) {
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
  function np(e, n) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = n, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, n = a.dependencies, e.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), e;
  }
  function Co(e, n, a, o, c, v) {
    var A = 0;
    if (o = e, typeof e == "function") ic(e) && (A = 1);
    else if (typeof e == "string")
      A = T_(
        e,
        a,
        se.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case V:
          return e = vn(31, a, n, c), e.elementType = V, e.lanes = v, e;
        case h:
          return da(a.children, c, v, n);
        case x:
          A = 8, c |= 24;
          break;
        case w:
          return e = vn(12, a, n, c | 2), e.elementType = w, e.lanes = v, e;
        case N:
          return e = vn(13, a, n, c), e.elementType = N, e.lanes = v, e;
        case j:
          return e = vn(19, a, n, c), e.elementType = j, e.lanes = v, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case T:
              case k:
                A = 10;
                break e;
              case E:
                A = 9;
                break e;
              case C:
                A = 11;
                break e;
              case R:
                A = 14;
                break e;
              case q:
                A = 16, o = null;
                break e;
            }
          A = 29, a = Error(
            s(130, e === null ? "null" : typeof e, "")
          ), o = null;
      }
    return n = vn(A, a, n, c), n.elementType = e, n.type = o, n.lanes = v, n;
  }
  function da(e, n, a, o) {
    return e = vn(7, e, o, n), e.lanes = a, e;
  }
  function sc(e, n, a) {
    return e = vn(6, e, null, n), e.lanes = a, e;
  }
  function oc(e, n, a) {
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
  var ni = [], ri = 0, Ao = null, No = 0, Dn = [], Rn = 0, ha = null, cr = 1, fr = "";
  function pa(e, n) {
    ni[ri++] = No, ni[ri++] = Ao, Ao = e, No = n;
  }
  function rp(e, n, a) {
    Dn[Rn++] = cr, Dn[Rn++] = fr, Dn[Rn++] = ha, ha = e;
    var o = cr;
    e = fr;
    var c = 32 - Be(o) - 1;
    o &= ~(1 << c), a += 1;
    var v = 32 - Be(n) + c;
    if (30 < v) {
      var A = c - c % 5;
      v = (o & (1 << A) - 1).toString(32), o >>= A, c -= A, cr = 1 << 32 - Be(n) + c | a << c | o, fr = v + e;
    } else
      cr = 1 << v | a << c | o, fr = e;
  }
  function lc(e) {
    e.return !== null && (pa(e, 1), rp(e, 1, 0));
  }
  function uc(e) {
    for (; e === Ao; )
      Ao = ni[--ri], ni[ri] = null, No = ni[--ri], ni[ri] = null;
    for (; e === ha; )
      ha = Dn[--Rn], Dn[Rn] = null, fr = Dn[--Rn], Dn[Rn] = null, cr = Dn[--Rn], Dn[Rn] = null;
  }
  var Qt = null, yt = null, Je = !1, ma = null, Kn = !1, cc = Error(s(519));
  function ga(e) {
    var n = Error(s(418, ""));
    throw es(jn(n, e)), cc;
  }
  function ap(e) {
    var n = e.stateNode, a = e.type, o = e.memoizedProps;
    switch (n[Zt] = e, n[nn] = o, a) {
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
        Ie("invalid", n), bh(
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
        Ie("invalid", n), Sh(n, o.value, o.defaultValue, o.children), ho(n);
    }
    a = o.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || n.textContent === "" + a || o.suppressHydrationWarning === !0 || Sg(n.textContent, a) ? (o.popover != null && (Ie("beforetoggle", n), Ie("toggle", n)), o.onScroll != null && Ie("scroll", n), o.onScrollEnd != null && Ie("scrollend", n), o.onClick != null && (n.onclick = ol), n = !0) : n = !1, n || ga(e);
  }
  function ip(e) {
    for (Qt = e.return; Qt; )
      switch (Qt.tag) {
        case 5:
        case 13:
          Kn = !1;
          return;
        case 27:
        case 3:
          Kn = !0;
          return;
        default:
          Qt = Qt.return;
      }
  }
  function Ki(e) {
    if (e !== Qt) return !1;
    if (!Je) return ip(e), Je = !0, !1;
    var n = e.tag, a;
    if ((a = n !== 3 && n !== 27) && ((a = n === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Nf(e.type, e.memoizedProps)), a = !a), a && yt && ga(e), ip(e), n === 13) {
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
      n === 27 ? (n = yt, Yr(e.type) ? (e = jf, jf = null, yt = e) : yt = n) : yt = Qt ? Gn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Wi() {
    yt = Qt = null, Je = !1;
  }
  function sp() {
    var e = ma;
    return e !== null && (on === null ? on = e : on.push.apply(
      on,
      e
    ), ma = null), e;
  }
  function es(e) {
    ma === null ? ma = [e] : ma.push(e);
  }
  var fc = J(null), va = null, dr = null;
  function Mr(e, n, a) {
    ie(fc, n._currentValue), n._currentValue = a;
  }
  function hr(e) {
    e._currentValue = fc.current, re(fc);
  }
  function dc(e, n, a) {
    for (; e !== null; ) {
      var o = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, o !== null && (o.childLanes |= n)) : o !== null && (o.childLanes & n) !== n && (o.childLanes |= n), e === a) break;
      e = e.return;
    }
  }
  function hc(e, n, a, o) {
    var c = e.child;
    for (c !== null && (c.return = e); c !== null; ) {
      var v = c.dependencies;
      if (v !== null) {
        var A = c.child;
        v = v.firstContext;
        e: for (; v !== null; ) {
          var O = v;
          v = c;
          for (var M = 0; M < n.length; M++)
            if (O.context === n[M]) {
              v.lanes |= a, O = v.alternate, O !== null && (O.lanes |= a), dc(
                v.return,
                a,
                e
              ), o || (A = null);
              break e;
            }
          v = O.next;
        }
      } else if (c.tag === 18) {
        if (A = c.return, A === null) throw Error(s(341));
        A.lanes |= a, v = A.alternate, v !== null && (v.lanes |= a), dc(A, a, e), A = null;
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
  function ts(e, n, a, o) {
    e = null;
    for (var c = n, v = !1; c !== null; ) {
      if (!v) {
        if ((c.flags & 524288) !== 0) v = !0;
        else if ((c.flags & 262144) !== 0) break;
      }
      if (c.tag === 10) {
        var A = c.alternate;
        if (A === null) throw Error(s(387));
        if (A = A.memoizedProps, A !== null) {
          var O = c.type;
          gn(c.pendingProps.value, A.value) || (e !== null ? e.push(O) : e = [O]);
        }
      } else if (c === ve.current) {
        if (A = c.alternate, A === null) throw Error(s(387));
        A.memoizedState.memoizedState !== c.memoizedState.memoizedState && (e !== null ? e.push(ks) : e = [ks]);
      }
      c = c.return;
    }
    e !== null && hc(
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
    return op(va, e);
  }
  function Oo(e, n) {
    return va === null && ya(e), op(e, n);
  }
  function op(e, n) {
    var a = n._currentValue;
    if (n = { context: n, memoizedValue: a, next: null }, dr === null) {
      if (e === null) throw Error(s(308));
      dr = n, e.dependencies = { lanes: 0, firstContext: n }, e.flags |= 524288;
    } else dr = dr.next = n;
    return a;
  }
  var Nb = typeof AbortController < "u" ? AbortController : function() {
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
  }, Tb = t.unstable_scheduleCallback, Ob = t.unstable_NormalPriority, jt = {
    $$typeof: k,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function pc() {
    return {
      controller: new Nb(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function ns(e) {
    e.refCount--, e.refCount === 0 && Tb(Ob, function() {
      e.controller.abort();
    });
  }
  var rs = null, mc = 0, ai = 0, ii = null;
  function kb(e, n) {
    if (rs === null) {
      var a = rs = [];
      mc = 0, ai = yf(), ii = {
        status: "pending",
        value: void 0,
        then: function(o) {
          a.push(o);
        }
      };
    }
    return mc++, n.then(lp, lp), n;
  }
  function lp() {
    if (--mc === 0 && rs !== null) {
      ii !== null && (ii.status = "fulfilled");
      var e = rs;
      rs = null, ai = 0, ii = null;
      for (var n = 0; n < e.length; n++) (0, e[n])();
    }
  }
  function jb(e, n) {
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
  var up = I.S;
  I.S = function(e, n) {
    typeof n == "object" && n !== null && typeof n.then == "function" && kb(e, n), up !== null && up(e, n);
  };
  var ba = J(null);
  function gc() {
    var e = ba.current;
    return e !== null ? e : ot.pooledCache;
  }
  function ko(e, n) {
    n === null ? ie(ba, ba.current) : ie(ba, n.pool);
  }
  function cp() {
    var e = gc();
    return e === null ? null : { parent: jt._currentValue, pool: e };
  }
  var as = Error(s(460)), fp = Error(s(474)), jo = Error(s(542)), vc = { then: function() {
  } };
  function dp(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Mo() {
  }
  function hp(e, n, a) {
    switch (a = e[a], a === void 0 ? e.push(n) : a !== n && (n.then(Mo, Mo), n = a), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw e = n.reason, mp(e), e;
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
            throw e = n.reason, mp(e), e;
        }
        throw is = n, as;
    }
  }
  var is = null;
  function pp() {
    if (is === null) throw Error(s(459));
    var e = is;
    return is = null, e;
  }
  function mp(e) {
    if (e === as || e === jo)
      throw Error(s(483));
  }
  var Dr = !1;
  function yc(e) {
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
  function Rr(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function zr(e, n, a) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (o = o.shared, (Qe & 2) !== 0) {
      var c = o.pending;
      return c === null ? n.next = n : (n.next = c.next, c.next = n), o.pending = n, n = wo(e), tp(e, null, a), n;
    }
    return Eo(e, o, n, a), wo(e);
  }
  function ss(e, n, a) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (a & 4194048) !== 0)) {
      var o = n.lanes;
      o &= e.pendingLanes, a |= o, n.lanes = a, lh(e, a);
    }
  }
  function _c(e, n) {
    var a = e.updateQueue, o = e.alternate;
    if (o !== null && (o = o.updateQueue, a === o)) {
      var c = null, v = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var A = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          v === null ? c = v = A : v = v.next = A, a = a.next;
        } while (a !== null);
        v === null ? c = v = n : v = v.next = n;
      } else c = v = n;
      a = {
        baseState: o.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: v,
        shared: o.shared,
        callbacks: o.callbacks
      }, e.updateQueue = a;
      return;
    }
    e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = n : e.next = n, a.lastBaseUpdate = n;
  }
  var Sc = !1;
  function os() {
    if (Sc) {
      var e = ii;
      if (e !== null) throw e;
    }
  }
  function ls(e, n, a, o) {
    Sc = !1;
    var c = e.updateQueue;
    Dr = !1;
    var v = c.firstBaseUpdate, A = c.lastBaseUpdate, O = c.shared.pending;
    if (O !== null) {
      c.shared.pending = null;
      var M = O, H = M.next;
      M.next = null, A === null ? v = H : A.next = H, A = M;
      var Q = e.alternate;
      Q !== null && (Q = Q.updateQueue, O = Q.lastBaseUpdate, O !== A && (O === null ? Q.firstBaseUpdate = H : O.next = H, Q.lastBaseUpdate = M));
    }
    if (v !== null) {
      var W = c.baseState;
      A = 0, Q = H = M = null, O = v;
      do {
        var F = O.lane & -536870913, Z = F !== O.lane;
        if (Z ? (Fe & F) === F : (o & F) === F) {
          F !== 0 && F === ai && (Sc = !0), Q !== null && (Q = Q.next = {
            lane: 0,
            tag: O.tag,
            payload: O.payload,
            callback: null,
            next: null
          });
          e: {
            var Ee = e, Se = O;
            F = n;
            var nt = a;
            switch (Se.tag) {
              case 1:
                if (Ee = Se.payload, typeof Ee == "function") {
                  W = Ee.call(nt, W, F);
                  break e;
                }
                W = Ee;
                break e;
              case 3:
                Ee.flags = Ee.flags & -65537 | 128;
              case 0:
                if (Ee = Se.payload, F = typeof Ee == "function" ? Ee.call(nt, W, F) : Ee, F == null) break e;
                W = m({}, W, F);
                break e;
              case 2:
                Dr = !0;
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
          }, Q === null ? (H = Q = Z, M = W) : Q = Q.next = Z, A |= F;
        if (O = O.next, O === null) {
          if (O = c.shared.pending, O === null)
            break;
          Z = O, O = Z.next, Z.next = null, c.lastBaseUpdate = Z, c.shared.pending = null;
        }
      } while (!0);
      Q === null && (M = W), c.baseState = M, c.firstBaseUpdate = H, c.lastBaseUpdate = Q, v === null && (c.shared.lanes = 0), Fr |= A, e.lanes = A, e.memoizedState = W;
    }
  }
  function gp(e, n) {
    if (typeof e != "function")
      throw Error(s(191, e));
    e.call(n);
  }
  function vp(e, n) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        gp(a[e], n);
  }
  var si = J(null), Do = J(0);
  function yp(e, n) {
    e = _r, ie(Do, e), ie(si, n), _r = e | n.baseLanes;
  }
  function xc() {
    ie(Do, _r), ie(si, si.current);
  }
  function Ec() {
    _r = Do.current, re(si), re(Do);
  }
  var Lr = 0, Me = null, et = null, Ct = null, Ro = !1, oi = !1, _a = !1, zo = 0, us = 0, li = null, Mb = 0;
  function xt() {
    throw Error(s(321));
  }
  function wc(e, n) {
    if (n === null) return !1;
    for (var a = 0; a < n.length && a < e.length; a++)
      if (!gn(e[a], n[a])) return !1;
    return !0;
  }
  function Cc(e, n, a, o, c, v) {
    return Lr = v, Me = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, I.H = e === null || e.memoizedState === null ? tm : nm, _a = !1, v = a(o, c), _a = !1, oi && (v = _p(
      n,
      a,
      o,
      c
    )), bp(e), v;
  }
  function bp(e) {
    I.H = Ho;
    var n = et !== null && et.next !== null;
    if (Lr = 0, Ct = et = Me = null, Ro = !1, us = 0, li = null, n) throw Error(s(300));
    e === null || Lt || (e = e.dependencies, e !== null && To(e) && (Lt = !0));
  }
  function _p(e, n, a, o) {
    Me = e;
    var c = 0;
    do {
      if (oi && (li = null), us = 0, oi = !1, 25 <= c) throw Error(s(301));
      if (c += 1, Ct = et = null, e.updateQueue != null) {
        var v = e.updateQueue;
        v.lastEffect = null, v.events = null, v.stores = null, v.memoCache != null && (v.memoCache.index = 0);
      }
      I.H = Bb, v = n(a, o);
    } while (oi);
    return v;
  }
  function Db() {
    var e = I.H, n = e.useState()[0];
    return n = typeof n.then == "function" ? cs(n) : n, e = e.useState()[0], (et !== null ? et.memoizedState : null) !== e && (Me.flags |= 1024), n;
  }
  function Ac() {
    var e = zo !== 0;
    return zo = 0, e;
  }
  function Nc(e, n, a) {
    n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~a;
  }
  function Tc(e) {
    if (Ro) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        n !== null && (n.pending = null), e = e.next;
      }
      Ro = !1;
    }
    Lr = 0, Ct = et = Me = null, oi = !1, us = zo = 0, li = null;
  }
  function an() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ct === null ? Me.memoizedState = Ct = e : Ct = Ct.next = e, Ct;
  }
  function At() {
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
  function Oc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function cs(e) {
    var n = us;
    return us += 1, li === null && (li = []), e = hp(li, e, n), n = Me, (Ct === null ? n.memoizedState : Ct.next) === null && (n = n.alternate, I.H = n === null || n.memoizedState === null ? tm : nm), e;
  }
  function Lo(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return cs(e);
      if (e.$$typeof === k) return Gt(e);
    }
    throw Error(s(438, String(e)));
  }
  function kc(e) {
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
    if (n == null && (n = { data: [], index: 0 }), a === null && (a = Oc(), Me.updateQueue = a), a.memoCache = n, a = n.data[n.index], a === void 0)
      for (a = n.data[n.index] = Array(e), o = 0; o < e; o++)
        a[o] = U;
    return n.index++, a;
  }
  function pr(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Io(e) {
    var n = At();
    return jc(n, et, e);
  }
  function jc(e, n, a) {
    var o = e.queue;
    if (o === null) throw Error(s(311));
    o.lastRenderedReducer = a;
    var c = e.baseQueue, v = o.pending;
    if (v !== null) {
      if (c !== null) {
        var A = c.next;
        c.next = v.next, v.next = A;
      }
      n.baseQueue = c = v, o.pending = null;
    }
    if (v = e.baseState, c === null) e.memoizedState = v;
    else {
      n = c.next;
      var O = A = null, M = null, H = n, Q = !1;
      do {
        var W = H.lane & -536870913;
        if (W !== H.lane ? (Fe & W) === W : (Lr & W) === W) {
          var F = H.revertLane;
          if (F === 0)
            M !== null && (M = M.next = {
              lane: 0,
              revertLane: 0,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            }), W === ai && (Q = !0);
          else if ((Lr & F) === F) {
            H = H.next, F === ai && (Q = !0);
            continue;
          } else
            W = {
              lane: 0,
              revertLane: H.revertLane,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            }, M === null ? (O = M = W, A = v) : M = M.next = W, Me.lanes |= F, Fr |= F;
          W = H.action, _a && a(v, W), v = H.hasEagerState ? H.eagerState : a(v, W);
        } else
          F = {
            lane: W,
            revertLane: H.revertLane,
            action: H.action,
            hasEagerState: H.hasEagerState,
            eagerState: H.eagerState,
            next: null
          }, M === null ? (O = M = F, A = v) : M = M.next = F, Me.lanes |= W, Fr |= W;
        H = H.next;
      } while (H !== null && H !== n);
      if (M === null ? A = v : M.next = O, !gn(v, e.memoizedState) && (Lt = !0, Q && (a = ii, a !== null)))
        throw a;
      e.memoizedState = v, e.baseState = A, e.baseQueue = M, o.lastRenderedState = v;
    }
    return c === null && (o.lanes = 0), [e.memoizedState, o.dispatch];
  }
  function Mc(e) {
    var n = At(), a = n.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = e;
    var o = a.dispatch, c = a.pending, v = n.memoizedState;
    if (c !== null) {
      a.pending = null;
      var A = c = c.next;
      do
        v = e(v, A.action), A = A.next;
      while (A !== c);
      gn(v, n.memoizedState) || (Lt = !0), n.memoizedState = v, n.baseQueue === null && (n.baseState = v), a.lastRenderedState = v;
    }
    return [v, o];
  }
  function Sp(e, n, a) {
    var o = Me, c = At(), v = Je;
    if (v) {
      if (a === void 0) throw Error(s(407));
      a = a();
    } else a = n();
    var A = !gn(
      (et || c).memoizedState,
      a
    );
    A && (c.memoizedState = a, Lt = !0), c = c.queue;
    var O = wp.bind(null, o, c, e);
    if (fs(2048, 8, O, [e]), c.getSnapshot !== n || A || Ct !== null && Ct.memoizedState.tag & 1) {
      if (o.flags |= 2048, ui(
        9,
        Po(),
        Ep.bind(
          null,
          o,
          c,
          a,
          n
        ),
        null
      ), ot === null) throw Error(s(349));
      v || (Lr & 124) !== 0 || xp(o, n, a);
    }
    return a;
  }
  function xp(e, n, a) {
    e.flags |= 16384, e = { getSnapshot: n, value: a }, n = Me.updateQueue, n === null ? (n = Oc(), Me.updateQueue = n, n.stores = [e]) : (a = n.stores, a === null ? n.stores = [e] : a.push(e));
  }
  function Ep(e, n, a, o) {
    n.value = a, n.getSnapshot = o, Cp(n) && Ap(e);
  }
  function wp(e, n, a) {
    return a(function() {
      Cp(n) && Ap(e);
    });
  }
  function Cp(e) {
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
  function Dc(e) {
    var n = an();
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
  function Np(e, n, a, o) {
    return e.baseState = a, jc(
      e,
      et,
      typeof o == "function" ? o : pr
    );
  }
  function Rb(e, n, a, o, c) {
    if (Uo(e)) throw Error(s(485));
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
        then: function(A) {
          v.listeners.push(A);
        }
      };
      I.T !== null ? a(!0) : v.isTransition = !1, o(v), a = n.pending, a === null ? (v.next = n.pending = v, Tp(n, v)) : (v.next = a.next, n.pending = a.next = v);
    }
  }
  function Tp(e, n) {
    var a = n.action, o = n.payload, c = e.state;
    if (n.isTransition) {
      var v = I.T, A = {};
      I.T = A;
      try {
        var O = a(c, o), M = I.S;
        M !== null && M(A, O), Op(e, n, O);
      } catch (H) {
        Rc(e, n, H);
      } finally {
        I.T = v;
      }
    } else
      try {
        v = a(c, o), Op(e, n, v);
      } catch (H) {
        Rc(e, n, H);
      }
  }
  function Op(e, n, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(o) {
        kp(e, n, o);
      },
      function(o) {
        return Rc(e, n, o);
      }
    ) : kp(e, n, a);
  }
  function kp(e, n, a) {
    n.status = "fulfilled", n.value = a, jp(n), e.state = a, n = e.pending, n !== null && (a = n.next, a === n ? e.pending = null : (a = a.next, n.next = a, Tp(e, a)));
  }
  function Rc(e, n, a) {
    var o = e.pending;
    if (e.pending = null, o !== null) {
      o = o.next;
      do
        n.status = "rejected", n.reason = a, jp(n), n = n.next;
      while (n !== o);
    }
    e.action = null;
  }
  function jp(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++) (0, e[n])();
  }
  function Mp(e, n) {
    return n;
  }
  function Dp(e, n) {
    if (Je) {
      var a = ot.formState;
      if (a !== null) {
        e: {
          var o = Me;
          if (Je) {
            if (yt) {
              t: {
                for (var c = yt, v = Kn; c.nodeType !== 8; ) {
                  if (!v) {
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
                v = c.data, c = v === "F!" || v === "F" ? c : null;
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
    return a = an(), a.memoizedState = a.baseState = n, o = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Mp,
      lastRenderedState: n
    }, a.queue = o, a = Kp.bind(
      null,
      Me,
      o
    ), o.dispatch = a, o = Dc(!1), v = Bc.bind(
      null,
      Me,
      !1,
      o.queue
    ), o = an(), c = {
      state: n,
      dispatch: null,
      action: e,
      pending: null
    }, o.queue = c, a = Rb.bind(
      null,
      Me,
      c,
      v,
      a
    ), c.dispatch = a, o.memoizedState = e, [n, a, !1];
  }
  function Rp(e) {
    var n = At();
    return zp(n, et, e);
  }
  function zp(e, n, a) {
    if (n = jc(
      e,
      n,
      Mp
    )[0], e = Io(pr)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var o = cs(n);
      } catch (A) {
        throw A === as ? jo : A;
      }
    else o = n;
    n = At();
    var c = n.queue, v = c.dispatch;
    return a !== n.memoizedState && (Me.flags |= 2048, ui(
      9,
      Po(),
      zb.bind(null, c, a),
      null
    )), [o, v, e];
  }
  function zb(e, n) {
    e.action = n;
  }
  function Lp(e) {
    var n = At(), a = et;
    if (a !== null)
      return zp(n, a, e);
    At(), n = n.memoizedState, a = At();
    var o = a.queue.dispatch;
    return a.memoizedState = e, [n, o, !1];
  }
  function ui(e, n, a, o) {
    return e = { tag: e, create: a, deps: o, inst: n, next: null }, n = Me.updateQueue, n === null && (n = Oc(), Me.updateQueue = n), a = n.lastEffect, a === null ? n.lastEffect = e.next = e : (o = a.next, a.next = e, e.next = o, n.lastEffect = e), e;
  }
  function Po() {
    return { destroy: void 0, resource: void 0 };
  }
  function Ip() {
    return At().memoizedState;
  }
  function Bo(e, n, a, o) {
    var c = an();
    o = o === void 0 ? null : o, Me.flags |= e, c.memoizedState = ui(
      1 | n,
      Po(),
      a,
      o
    );
  }
  function fs(e, n, a, o) {
    var c = At();
    o = o === void 0 ? null : o;
    var v = c.memoizedState.inst;
    et !== null && o !== null && wc(o, et.memoizedState.deps) ? c.memoizedState = ui(n, v, a, o) : (Me.flags |= e, c.memoizedState = ui(
      1 | n,
      v,
      a,
      o
    ));
  }
  function Pp(e, n) {
    Bo(8390656, 8, e, n);
  }
  function Bp(e, n) {
    fs(2048, 8, e, n);
  }
  function Up(e, n) {
    return fs(4, 2, e, n);
  }
  function Hp(e, n) {
    return fs(4, 4, e, n);
  }
  function qp(e, n) {
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
  function Fp(e, n, a) {
    a = a != null ? a.concat([e]) : null, fs(4, 4, qp.bind(null, n, e), a);
  }
  function zc() {
  }
  function Zp(e, n) {
    var a = At();
    n = n === void 0 ? null : n;
    var o = a.memoizedState;
    return n !== null && wc(n, o[1]) ? o[0] : (a.memoizedState = [e, n], e);
  }
  function Gp(e, n) {
    var a = At();
    n = n === void 0 ? null : n;
    var o = a.memoizedState;
    if (n !== null && wc(n, o[1]))
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
  function Lc(e, n, a) {
    return a === void 0 || (Lr & 1073741824) !== 0 ? e.memoizedState = n : (e.memoizedState = a, e = Xm(), Me.lanes |= e, Fr |= e, a);
  }
  function Vp(e, n, a, o) {
    return gn(a, n) ? a : si.current !== null ? (e = Lc(e, a, o), gn(e, n) || (Lt = !0), e) : (Lr & 42) === 0 ? (Lt = !0, e.memoizedState = a) : (e = Xm(), Me.lanes |= e, Fr |= e, n);
  }
  function Yp(e, n, a, o, c) {
    var v = ne.p;
    ne.p = v !== 0 && 8 > v ? v : 8;
    var A = I.T, O = {};
    I.T = O, Bc(e, !1, n, a);
    try {
      var M = c(), H = I.S;
      if (H !== null && H(O, M), M !== null && typeof M == "object" && typeof M.then == "function") {
        var Q = jb(
          M,
          o
        );
        ds(
          e,
          n,
          Q,
          Sn(e)
        );
      } else
        ds(
          e,
          n,
          o,
          Sn(e)
        );
    } catch (W) {
      ds(
        e,
        n,
        { then: function() {
        }, status: "rejected", reason: W },
        Sn()
      );
    } finally {
      ne.p = v, I.T = A;
    }
  }
  function Lb() {
  }
  function Ic(e, n, a, o) {
    if (e.tag !== 5) throw Error(s(476));
    var c = Xp(e).queue;
    Yp(
      e,
      c,
      n,
      ce,
      a === null ? Lb : function() {
        return $p(e), a(o);
      }
    );
  }
  function Xp(e) {
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
        lastRenderedReducer: pr,
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
        lastRenderedReducer: pr,
        lastRenderedState: a
      },
      next: null
    }, e.memoizedState = n, e = e.alternate, e !== null && (e.memoizedState = n), n;
  }
  function $p(e) {
    var n = Xp(e).next.queue;
    ds(e, n, {}, Sn());
  }
  function Pc() {
    return Gt(ks);
  }
  function Jp() {
    return At().memoizedState;
  }
  function Qp() {
    return At().memoizedState;
  }
  function Ib(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var a = Sn();
          e = Rr(a);
          var o = zr(n, e, a);
          o !== null && (xn(o, n, a), ss(o, n, a)), n = { cache: pc() }, e.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function Pb(e, n, a) {
    var o = Sn();
    a = {
      lane: o,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Uo(e) ? Wp(n, a) : (a = ac(e, n, a, o), a !== null && (xn(a, e, o), em(a, n, o)));
  }
  function Kp(e, n, a) {
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
    if (Uo(e)) Wp(n, c);
    else {
      var v = e.alternate;
      if (e.lanes === 0 && (v === null || v.lanes === 0) && (v = n.lastRenderedReducer, v !== null))
        try {
          var A = n.lastRenderedState, O = v(A, a);
          if (c.hasEagerState = !0, c.eagerState = O, gn(O, A))
            return Eo(e, n, c, 0), ot === null && xo(), !1;
        } catch {
        } finally {
        }
      if (a = ac(e, n, c, o), a !== null)
        return xn(a, e, o), em(a, n, o), !0;
    }
    return !1;
  }
  function Bc(e, n, a, o) {
    if (o = {
      lane: 2,
      revertLane: yf(),
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Uo(e)) {
      if (n) throw Error(s(479));
    } else
      n = ac(
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
  function Wp(e, n) {
    oi = Ro = !0;
    var a = e.pending;
    a === null ? n.next = n : (n.next = a.next, a.next = n), e.pending = n;
  }
  function em(e, n, a) {
    if ((a & 4194048) !== 0) {
      var o = n.lanes;
      o &= e.pendingLanes, a |= o, n.lanes = a, lh(e, a);
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
  }, tm = {
    readContext: Gt,
    use: Lo,
    useCallback: function(e, n) {
      return an().memoizedState = [
        e,
        n === void 0 ? null : n
      ], e;
    },
    useContext: Gt,
    useEffect: Pp,
    useImperativeHandle: function(e, n, a) {
      a = a != null ? a.concat([e]) : null, Bo(
        4194308,
        4,
        qp.bind(null, n, e),
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
      var a = an();
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
      var o = an();
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
      }, o.queue = e, e = e.dispatch = Pb.bind(
        null,
        Me,
        e
      ), [o.memoizedState, e];
    },
    useRef: function(e) {
      var n = an();
      return e = { current: e }, n.memoizedState = e;
    },
    useState: function(e) {
      e = Dc(e);
      var n = e.queue, a = Kp.bind(null, Me, n);
      return n.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: zc,
    useDeferredValue: function(e, n) {
      var a = an();
      return Lc(a, e, n);
    },
    useTransition: function() {
      var e = Dc(!1);
      return e = Yp.bind(
        null,
        Me,
        e.queue,
        !0,
        !1
      ), an().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, n, a) {
      var o = Me, c = an();
      if (Je) {
        if (a === void 0)
          throw Error(s(407));
        a = a();
      } else {
        if (a = n(), ot === null)
          throw Error(s(349));
        (Fe & 124) !== 0 || xp(o, n, a);
      }
      c.memoizedState = a;
      var v = { value: a, getSnapshot: n };
      return c.queue = v, Pp(wp.bind(null, o, v, e), [
        e
      ]), o.flags |= 2048, ui(
        9,
        Po(),
        Ep.bind(
          null,
          o,
          v,
          a,
          n
        ),
        null
      ), a;
    },
    useId: function() {
      var e = an(), n = ot.identifierPrefix;
      if (Je) {
        var a = fr, o = cr;
        a = (o & ~(1 << 32 - Be(o) - 1)).toString(32) + a, n = "«" + n + "R" + a, a = zo++, 0 < a && (n += "H" + a.toString(32)), n += "»";
      } else
        a = Mb++, n = "«" + n + "r" + a.toString(32) + "»";
      return e.memoizedState = n;
    },
    useHostTransitionStatus: Pc,
    useFormState: Dp,
    useActionState: Dp,
    useOptimistic: function(e) {
      var n = an();
      n.memoizedState = n.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = a, n = Bc.bind(
        null,
        Me,
        !0,
        a
      ), a.dispatch = n, [e, n];
    },
    useMemoCache: kc,
    useCacheRefresh: function() {
      return an().memoizedState = Ib.bind(
        null,
        Me
      );
    }
  }, nm = {
    readContext: Gt,
    use: Lo,
    useCallback: Zp,
    useContext: Gt,
    useEffect: Bp,
    useImperativeHandle: Fp,
    useInsertionEffect: Up,
    useLayoutEffect: Hp,
    useMemo: Gp,
    useReducer: Io,
    useRef: Ip,
    useState: function() {
      return Io(pr);
    },
    useDebugValue: zc,
    useDeferredValue: function(e, n) {
      var a = At();
      return Vp(
        a,
        et.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = Io(pr)[0], n = At().memoizedState;
      return [
        typeof e == "boolean" ? e : cs(e),
        n
      ];
    },
    useSyncExternalStore: Sp,
    useId: Jp,
    useHostTransitionStatus: Pc,
    useFormState: Rp,
    useActionState: Rp,
    useOptimistic: function(e, n) {
      var a = At();
      return Np(a, et, e, n);
    },
    useMemoCache: kc,
    useCacheRefresh: Qp
  }, Bb = {
    readContext: Gt,
    use: Lo,
    useCallback: Zp,
    useContext: Gt,
    useEffect: Bp,
    useImperativeHandle: Fp,
    useInsertionEffect: Up,
    useLayoutEffect: Hp,
    useMemo: Gp,
    useReducer: Mc,
    useRef: Ip,
    useState: function() {
      return Mc(pr);
    },
    useDebugValue: zc,
    useDeferredValue: function(e, n) {
      var a = At();
      return et === null ? Lc(a, e, n) : Vp(
        a,
        et.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = Mc(pr)[0], n = At().memoizedState;
      return [
        typeof e == "boolean" ? e : cs(e),
        n
      ];
    },
    useSyncExternalStore: Sp,
    useId: Jp,
    useHostTransitionStatus: Pc,
    useFormState: Lp,
    useActionState: Lp,
    useOptimistic: function(e, n) {
      var a = At();
      return et !== null ? Np(a, et, e, n) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: kc,
    useCacheRefresh: Qp
  }, ci = null, hs = 0;
  function qo(e) {
    var n = hs;
    return hs += 1, ci === null && (ci = []), hp(ci, e, n);
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
  function rm(e) {
    var n = e._init;
    return n(e._payload);
  }
  function am(e) {
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
    function o(L) {
      for (var z = /* @__PURE__ */ new Map(); L !== null; )
        L.key !== null ? z.set(L.key, L) : z.set(L.index, L), L = L.sibling;
      return z;
    }
    function c(L, z) {
      return L = ur(L, z), L.index = 0, L.sibling = null, L;
    }
    function v(L, z, B) {
      return L.index = B, e ? (B = L.alternate, B !== null ? (B = B.index, B < z ? (L.flags |= 67108866, z) : B) : (L.flags |= 67108866, z)) : (L.flags |= 1048576, z);
    }
    function A(L) {
      return e && L.alternate === null && (L.flags |= 67108866), L;
    }
    function O(L, z, B, K) {
      return z === null || z.tag !== 6 ? (z = sc(B, L.mode, K), z.return = L, z) : (z = c(z, B), z.return = L, z);
    }
    function M(L, z, B, K) {
      var de = B.type;
      return de === h ? Q(
        L,
        z,
        B.props.children,
        K,
        B.key
      ) : z !== null && (z.elementType === de || typeof de == "object" && de !== null && de.$$typeof === q && rm(de) === z.type) ? (z = c(z, B.props), ps(z, B), z.return = L, z) : (z = Co(
        B.type,
        B.key,
        B.props,
        null,
        L.mode,
        K
      ), ps(z, B), z.return = L, z);
    }
    function H(L, z, B, K) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== B.containerInfo || z.stateNode.implementation !== B.implementation ? (z = oc(B, L.mode, K), z.return = L, z) : (z = c(z, B.children || []), z.return = L, z);
    }
    function Q(L, z, B, K, de) {
      return z === null || z.tag !== 7 ? (z = da(
        B,
        L.mode,
        K,
        de
      ), z.return = L, z) : (z = c(z, B), z.return = L, z);
    }
    function W(L, z, B) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return z = sc(
          "" + z,
          L.mode,
          B
        ), z.return = L, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case y:
            return B = Co(
              z.type,
              z.key,
              z.props,
              null,
              L.mode,
              B
            ), ps(B, z), B.return = L, B;
          case b:
            return z = oc(
              z,
              L.mode,
              B
            ), z.return = L, z;
          case q:
            var K = z._init;
            return z = K(z._payload), W(L, z, B);
        }
        if (ue(z) || G(z))
          return z = da(
            z,
            L.mode,
            B,
            null
          ), z.return = L, z;
        if (typeof z.then == "function")
          return W(L, qo(z), B);
        if (z.$$typeof === k)
          return W(
            L,
            Oo(L, z),
            B
          );
        Fo(L, z);
      }
      return null;
    }
    function F(L, z, B, K) {
      var de = z !== null ? z.key : null;
      if (typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint")
        return de !== null ? null : O(L, z, "" + B, K);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case y:
            return B.key === de ? M(L, z, B, K) : null;
          case b:
            return B.key === de ? H(L, z, B, K) : null;
          case q:
            return de = B._init, B = de(B._payload), F(L, z, B, K);
        }
        if (ue(B) || G(B))
          return de !== null ? null : Q(L, z, B, K, null);
        if (typeof B.then == "function")
          return F(
            L,
            z,
            qo(B),
            K
          );
        if (B.$$typeof === k)
          return F(
            L,
            z,
            Oo(L, B),
            K
          );
        Fo(L, B);
      }
      return null;
    }
    function Z(L, z, B, K, de) {
      if (typeof K == "string" && K !== "" || typeof K == "number" || typeof K == "bigint")
        return L = L.get(B) || null, O(z, L, "" + K, de);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case y:
            return L = L.get(
              K.key === null ? B : K.key
            ) || null, M(z, L, K, de);
          case b:
            return L = L.get(
              K.key === null ? B : K.key
            ) || null, H(z, L, K, de);
          case q:
            var ze = K._init;
            return K = ze(K._payload), Z(
              L,
              z,
              B,
              K,
              de
            );
        }
        if (ue(K) || G(K))
          return L = L.get(B) || null, Q(z, L, K, de, null);
        if (typeof K.then == "function")
          return Z(
            L,
            z,
            B,
            qo(K),
            de
          );
        if (K.$$typeof === k)
          return Z(
            L,
            z,
            B,
            Oo(z, K),
            de
          );
        Fo(z, K);
      }
      return null;
    }
    function Ee(L, z, B, K) {
      for (var de = null, ze = null, ge = z, xe = z = 0, Pt = null; ge !== null && xe < B.length; xe++) {
        ge.index > xe ? (Pt = ge, ge = null) : Pt = ge.sibling;
        var Ye = F(
          L,
          ge,
          B[xe],
          K
        );
        if (Ye === null) {
          ge === null && (ge = Pt);
          break;
        }
        e && ge && Ye.alternate === null && n(L, ge), z = v(Ye, z, xe), ze === null ? de = Ye : ze.sibling = Ye, ze = Ye, ge = Pt;
      }
      if (xe === B.length)
        return a(L, ge), Je && pa(L, xe), de;
      if (ge === null) {
        for (; xe < B.length; xe++)
          ge = W(L, B[xe], K), ge !== null && (z = v(
            ge,
            z,
            xe
          ), ze === null ? de = ge : ze.sibling = ge, ze = ge);
        return Je && pa(L, xe), de;
      }
      for (ge = o(ge); xe < B.length; xe++)
        Pt = Z(
          ge,
          L,
          xe,
          B[xe],
          K
        ), Pt !== null && (e && Pt.alternate !== null && ge.delete(
          Pt.key === null ? xe : Pt.key
        ), z = v(
          Pt,
          z,
          xe
        ), ze === null ? de = Pt : ze.sibling = Pt, ze = Pt);
      return e && ge.forEach(function(Kr) {
        return n(L, Kr);
      }), Je && pa(L, xe), de;
    }
    function Se(L, z, B, K) {
      if (B == null) throw Error(s(151));
      for (var de = null, ze = null, ge = z, xe = z = 0, Pt = null, Ye = B.next(); ge !== null && !Ye.done; xe++, Ye = B.next()) {
        ge.index > xe ? (Pt = ge, ge = null) : Pt = ge.sibling;
        var Kr = F(L, ge, Ye.value, K);
        if (Kr === null) {
          ge === null && (ge = Pt);
          break;
        }
        e && ge && Kr.alternate === null && n(L, ge), z = v(Kr, z, xe), ze === null ? de = Kr : ze.sibling = Kr, ze = Kr, ge = Pt;
      }
      if (Ye.done)
        return a(L, ge), Je && pa(L, xe), de;
      if (ge === null) {
        for (; !Ye.done; xe++, Ye = B.next())
          Ye = W(L, Ye.value, K), Ye !== null && (z = v(Ye, z, xe), ze === null ? de = Ye : ze.sibling = Ye, ze = Ye);
        return Je && pa(L, xe), de;
      }
      for (ge = o(ge); !Ye.done; xe++, Ye = B.next())
        Ye = Z(ge, L, xe, Ye.value, K), Ye !== null && (e && Ye.alternate !== null && ge.delete(Ye.key === null ? xe : Ye.key), z = v(Ye, z, xe), ze === null ? de = Ye : ze.sibling = Ye, ze = Ye);
      return e && ge.forEach(function(U_) {
        return n(L, U_);
      }), Je && pa(L, xe), de;
    }
    function nt(L, z, B, K) {
      if (typeof B == "object" && B !== null && B.type === h && B.key === null && (B = B.props.children), typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case y:
            e: {
              for (var de = B.key; z !== null; ) {
                if (z.key === de) {
                  if (de = B.type, de === h) {
                    if (z.tag === 7) {
                      a(
                        L,
                        z.sibling
                      ), K = c(
                        z,
                        B.props.children
                      ), K.return = L, L = K;
                      break e;
                    }
                  } else if (z.elementType === de || typeof de == "object" && de !== null && de.$$typeof === q && rm(de) === z.type) {
                    a(
                      L,
                      z.sibling
                    ), K = c(z, B.props), ps(K, B), K.return = L, L = K;
                    break e;
                  }
                  a(L, z);
                  break;
                } else n(L, z);
                z = z.sibling;
              }
              B.type === h ? (K = da(
                B.props.children,
                L.mode,
                K,
                B.key
              ), K.return = L, L = K) : (K = Co(
                B.type,
                B.key,
                B.props,
                null,
                L.mode,
                K
              ), ps(K, B), K.return = L, L = K);
            }
            return A(L);
          case b:
            e: {
              for (de = B.key; z !== null; ) {
                if (z.key === de)
                  if (z.tag === 4 && z.stateNode.containerInfo === B.containerInfo && z.stateNode.implementation === B.implementation) {
                    a(
                      L,
                      z.sibling
                    ), K = c(z, B.children || []), K.return = L, L = K;
                    break e;
                  } else {
                    a(L, z);
                    break;
                  }
                else n(L, z);
                z = z.sibling;
              }
              K = oc(B, L.mode, K), K.return = L, L = K;
            }
            return A(L);
          case q:
            return de = B._init, B = de(B._payload), nt(
              L,
              z,
              B,
              K
            );
        }
        if (ue(B))
          return Ee(
            L,
            z,
            B,
            K
          );
        if (G(B)) {
          if (de = G(B), typeof de != "function") throw Error(s(150));
          return B = de.call(B), Se(
            L,
            z,
            B,
            K
          );
        }
        if (typeof B.then == "function")
          return nt(
            L,
            z,
            qo(B),
            K
          );
        if (B.$$typeof === k)
          return nt(
            L,
            z,
            Oo(L, B),
            K
          );
        Fo(L, B);
      }
      return typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint" ? (B = "" + B, z !== null && z.tag === 6 ? (a(L, z.sibling), K = c(z, B), K.return = L, L = K) : (a(L, z), K = sc(B, L.mode, K), K.return = L, L = K), A(L)) : a(L, z);
    }
    return function(L, z, B, K) {
      try {
        hs = 0;
        var de = nt(
          L,
          z,
          B,
          K
        );
        return ci = null, de;
      } catch (ge) {
        if (ge === as || ge === jo) throw ge;
        var ze = vn(29, ge, null, L.mode);
        return ze.lanes = K, ze.return = L, ze;
      } finally {
      }
    };
  }
  var fi = am(!0), im = am(!1), zn = J(null), Wn = null;
  function Ir(e) {
    var n = e.alternate;
    ie(Mt, Mt.current & 1), ie(zn, e), Wn === null && (n === null || si.current !== null || n.memoizedState !== null) && (Wn = e);
  }
  function sm(e) {
    if (e.tag === 22) {
      if (ie(Mt, Mt.current), ie(zn, e), Wn === null) {
        var n = e.alternate;
        n !== null && n.memoizedState !== null && (Wn = e);
      }
    } else Pr();
  }
  function Pr() {
    ie(Mt, Mt.current), ie(zn, zn.current);
  }
  function mr(e) {
    re(zn), Wn === e && (Wn = null), re(Mt);
  }
  var Mt = J(0);
  function Zo(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var a = n.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || kf(a)))
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
  function Uc(e, n, a, o) {
    n = e.memoizedState, a = a(o, n), a = a == null ? n : m({}, n, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var Hc = {
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
  function om(e, n, a, o, c, v, A) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, v, A) : n.prototype && n.prototype.isPureReactComponent ? !Ji(a, o) || !Ji(c, v) : !0;
  }
  function lm(e, n, a, o) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(a, o), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(a, o), n.state !== e && Hc.enqueueReplaceState(n, n.state, null);
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
  function um(e) {
    Go(e);
  }
  function cm(e) {
    console.error(e);
  }
  function fm(e) {
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
  function dm(e, n, a) {
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
  function qc(e, n, a) {
    return a = Rr(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      Vo(e, n);
    }, a;
  }
  function hm(e) {
    return e = Rr(e), e.tag = 3, e;
  }
  function pm(e, n, a, o) {
    var c = a.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var v = o.value;
      e.payload = function() {
        return c(v);
      }, e.callback = function() {
        dm(n, a, o);
      };
    }
    var A = a.stateNode;
    A !== null && typeof A.componentDidCatch == "function" && (e.callback = function() {
      dm(n, a, o), typeof c != "function" && (Zr === null ? Zr = /* @__PURE__ */ new Set([this]) : Zr.add(this));
      var O = o.stack;
      this.componentDidCatch(o.value, {
        componentStack: O !== null ? O : ""
      });
    });
  }
  function Ub(e, n, a, o, c) {
    if (a.flags |= 32768, o !== null && typeof o == "object" && typeof o.then == "function") {
      if (n = a.alternate, n !== null && ts(
        n,
        a,
        c,
        !0
      ), a = zn.current, a !== null) {
        switch (a.tag) {
          case 13:
            return Wn === null ? hf() : a.alternate === null && bt === 0 && (bt = 3), a.flags &= -257, a.flags |= 65536, a.lanes = c, o === vc ? a.flags |= 16384 : (n = a.updateQueue, n === null ? a.updateQueue = /* @__PURE__ */ new Set([o]) : n.add(o), mf(e, o, c)), !1;
          case 22:
            return a.flags |= 65536, o === vc ? a.flags |= 16384 : (n = a.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([o])
            }, a.updateQueue = n) : (a = n.retryQueue, a === null ? n.retryQueue = /* @__PURE__ */ new Set([o]) : a.add(o)), mf(e, o, c)), !1;
        }
        throw Error(s(435, a.tag));
      }
      return mf(e, o, c), hf(), !1;
    }
    if (Je)
      return n = zn.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = c, o !== cc && (e = Error(s(422), { cause: o }), es(jn(e, a)))) : (o !== cc && (n = Error(s(423), {
        cause: o
      }), es(
        jn(n, a)
      )), e = e.current.alternate, e.flags |= 65536, c &= -c, e.lanes |= c, o = jn(o, a), c = qc(
        e.stateNode,
        o,
        c
      ), _c(e, c), bt !== 4 && (bt = 2)), !1;
    var v = Error(s(520), { cause: o });
    if (v = jn(v, a), Ss === null ? Ss = [v] : Ss.push(v), bt !== 4 && (bt = 2), n === null) return !0;
    o = jn(o, a), a = n;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = c & -c, a.lanes |= e, e = qc(a.stateNode, o, e), _c(a, e), !1;
        case 1:
          if (n = a.type, v = a.stateNode, (a.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (Zr === null || !Zr.has(v))))
            return a.flags |= 65536, c &= -c, a.lanes |= c, c = hm(c), pm(
              c,
              e,
              a,
              o
            ), _c(a, c), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var mm = Error(s(461)), Lt = !1;
  function Bt(e, n, a, o) {
    n.child = e === null ? im(n, null, a, o) : fi(
      n,
      e.child,
      a,
      o
    );
  }
  function gm(e, n, a, o, c) {
    a = a.render;
    var v = n.ref;
    if ("ref" in o) {
      var A = {};
      for (var O in o)
        O !== "ref" && (A[O] = o[O]);
    } else A = o;
    return ya(n), o = Cc(
      e,
      n,
      a,
      A,
      v,
      c
    ), O = Ac(), e !== null && !Lt ? (Nc(e, n, c), gr(e, n, c)) : (Je && O && lc(n), n.flags |= 1, Bt(e, n, o, c), n.child);
  }
  function vm(e, n, a, o, c) {
    if (e === null) {
      var v = a.type;
      return typeof v == "function" && !ic(v) && v.defaultProps === void 0 && a.compare === null ? (n.tag = 15, n.type = v, ym(
        e,
        n,
        v,
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
    if (v = e.child, !Jc(e, c)) {
      var A = v.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Ji, a(A, o) && e.ref === n.ref)
        return gr(e, n, c);
    }
    return n.flags |= 1, e = ur(v, o), e.ref = n.ref, e.return = n, n.child = e;
  }
  function ym(e, n, a, o, c) {
    if (e !== null) {
      var v = e.memoizedProps;
      if (Ji(v, o) && e.ref === n.ref)
        if (Lt = !1, n.pendingProps = o = v, Jc(e, c))
          (e.flags & 131072) !== 0 && (Lt = !0);
        else
          return n.lanes = e.lanes, gr(e, n, c);
    }
    return Fc(
      e,
      n,
      a,
      o,
      c
    );
  }
  function bm(e, n, a) {
    var o = n.pendingProps, c = o.children, v = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (o = v !== null ? v.baseLanes | a : a, e !== null) {
          for (c = n.child = e.child, v = 0; c !== null; )
            v = v | c.lanes | c.childLanes, c = c.sibling;
          n.childLanes = v & ~o;
        } else n.childLanes = 0, n.child = null;
        return _m(
          e,
          n,
          o,
          a
        );
      }
      if ((a & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && ko(
          n,
          v !== null ? v.cachePool : null
        ), v !== null ? yp(n, v) : xc(), sm(n);
      else
        return n.lanes = n.childLanes = 536870912, _m(
          e,
          n,
          v !== null ? v.baseLanes | a : a,
          a
        );
    } else
      v !== null ? (ko(n, v.cachePool), yp(n, v), Pr(), n.memoizedState = null) : (e !== null && ko(n, null), xc(), Pr());
    return Bt(e, n, c, a), n.child;
  }
  function _m(e, n, a, o) {
    var c = gc();
    return c = c === null ? null : { parent: jt._currentValue, pool: c }, n.memoizedState = {
      baseLanes: a,
      cachePool: c
    }, e !== null && ko(n, null), xc(), sm(n), e !== null && ts(e, n, o, !0), null;
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
  function Fc(e, n, a, o, c) {
    return ya(n), a = Cc(
      e,
      n,
      a,
      o,
      void 0,
      c
    ), o = Ac(), e !== null && !Lt ? (Nc(e, n, c), gr(e, n, c)) : (Je && o && lc(n), n.flags |= 1, Bt(e, n, a, c), n.child);
  }
  function Sm(e, n, a, o, c, v) {
    return ya(n), n.updateQueue = null, a = _p(
      n,
      o,
      a,
      c
    ), bp(e), o = Ac(), e !== null && !Lt ? (Nc(e, n, v), gr(e, n, v)) : (Je && o && lc(n), n.flags |= 1, Bt(e, n, a, v), n.child);
  }
  function xm(e, n, a, o, c) {
    if (ya(n), n.stateNode === null) {
      var v = ti, A = a.contextType;
      typeof A == "object" && A !== null && (v = Gt(A)), v = new a(o, v), n.memoizedState = v.state !== null && v.state !== void 0 ? v.state : null, v.updater = Hc, n.stateNode = v, v._reactInternals = n, v = n.stateNode, v.props = o, v.state = n.memoizedState, v.refs = {}, yc(n), A = a.contextType, v.context = typeof A == "object" && A !== null ? Gt(A) : ti, v.state = n.memoizedState, A = a.getDerivedStateFromProps, typeof A == "function" && (Uc(
        n,
        a,
        A,
        o
      ), v.state = n.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof v.getSnapshotBeforeUpdate == "function" || typeof v.UNSAFE_componentWillMount != "function" && typeof v.componentWillMount != "function" || (A = v.state, typeof v.componentWillMount == "function" && v.componentWillMount(), typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount(), A !== v.state && Hc.enqueueReplaceState(v, v.state, null), ls(n, o, v, c), os(), v.state = n.memoizedState), typeof v.componentDidMount == "function" && (n.flags |= 4194308), o = !0;
    } else if (e === null) {
      v = n.stateNode;
      var O = n.memoizedProps, M = Sa(a, O);
      v.props = M;
      var H = v.context, Q = a.contextType;
      A = ti, typeof Q == "object" && Q !== null && (A = Gt(Q));
      var W = a.getDerivedStateFromProps;
      Q = typeof W == "function" || typeof v.getSnapshotBeforeUpdate == "function", O = n.pendingProps !== O, Q || typeof v.UNSAFE_componentWillReceiveProps != "function" && typeof v.componentWillReceiveProps != "function" || (O || H !== A) && lm(
        n,
        v,
        o,
        A
      ), Dr = !1;
      var F = n.memoizedState;
      v.state = F, ls(n, o, v, c), os(), H = n.memoizedState, O || F !== H || Dr ? (typeof W == "function" && (Uc(
        n,
        a,
        W,
        o
      ), H = n.memoizedState), (M = Dr || om(
        n,
        a,
        M,
        o,
        F,
        H,
        A
      )) ? (Q || typeof v.UNSAFE_componentWillMount != "function" && typeof v.componentWillMount != "function" || (typeof v.componentWillMount == "function" && v.componentWillMount(), typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount()), typeof v.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof v.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = o, n.memoizedState = H), v.props = o, v.state = H, v.context = A, o = M) : (typeof v.componentDidMount == "function" && (n.flags |= 4194308), o = !1);
    } else {
      v = n.stateNode, bc(e, n), A = n.memoizedProps, Q = Sa(a, A), v.props = Q, W = n.pendingProps, F = v.context, H = a.contextType, M = ti, typeof H == "object" && H !== null && (M = Gt(H)), O = a.getDerivedStateFromProps, (H = typeof O == "function" || typeof v.getSnapshotBeforeUpdate == "function") || typeof v.UNSAFE_componentWillReceiveProps != "function" && typeof v.componentWillReceiveProps != "function" || (A !== W || F !== M) && lm(
        n,
        v,
        o,
        M
      ), Dr = !1, F = n.memoizedState, v.state = F, ls(n, o, v, c), os();
      var Z = n.memoizedState;
      A !== W || F !== Z || Dr || e !== null && e.dependencies !== null && To(e.dependencies) ? (typeof O == "function" && (Uc(
        n,
        a,
        O,
        o
      ), Z = n.memoizedState), (Q = Dr || om(
        n,
        a,
        Q,
        o,
        F,
        Z,
        M
      ) || e !== null && e.dependencies !== null && To(e.dependencies)) ? (H || typeof v.UNSAFE_componentWillUpdate != "function" && typeof v.componentWillUpdate != "function" || (typeof v.componentWillUpdate == "function" && v.componentWillUpdate(o, Z, M), typeof v.UNSAFE_componentWillUpdate == "function" && v.UNSAFE_componentWillUpdate(
        o,
        Z,
        M
      )), typeof v.componentDidUpdate == "function" && (n.flags |= 4), typeof v.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof v.componentDidUpdate != "function" || A === e.memoizedProps && F === e.memoizedState || (n.flags |= 4), typeof v.getSnapshotBeforeUpdate != "function" || A === e.memoizedProps && F === e.memoizedState || (n.flags |= 1024), n.memoizedProps = o, n.memoizedState = Z), v.props = o, v.state = Z, v.context = M, o = Q) : (typeof v.componentDidUpdate != "function" || A === e.memoizedProps && F === e.memoizedState || (n.flags |= 4), typeof v.getSnapshotBeforeUpdate != "function" || A === e.memoizedProps && F === e.memoizedState || (n.flags |= 1024), o = !1);
    }
    return v = o, Yo(e, n), o = (n.flags & 128) !== 0, v || o ? (v = n.stateNode, a = o && typeof a.getDerivedStateFromError != "function" ? null : v.render(), n.flags |= 1, e !== null && o ? (n.child = fi(
      n,
      e.child,
      null,
      c
    ), n.child = fi(
      n,
      null,
      a,
      c
    )) : Bt(e, n, a, c), n.memoizedState = v.state, e = n.child) : e = gr(
      e,
      n,
      c
    ), e;
  }
  function Em(e, n, a, o) {
    return Wi(), n.flags |= 256, Bt(e, n, a, o), n.child;
  }
  var Zc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Gc(e) {
    return { baseLanes: e, cachePool: cp() };
  }
  function Vc(e, n, a) {
    return e = e !== null ? e.childLanes & ~a : 0, n && (e |= Ln), e;
  }
  function wm(e, n, a) {
    var o = n.pendingProps, c = !1, v = (n.flags & 128) !== 0, A;
    if ((A = v) || (A = e !== null && e.memoizedState === null ? !1 : (Mt.current & 2) !== 0), A && (c = !0, n.flags &= -129), A = (n.flags & 32) !== 0, n.flags &= -33, e === null) {
      if (Je) {
        if (c ? Ir(n) : Pr(), Je) {
          var O = yt, M;
          if (M = O) {
            e: {
              for (M = O, O = Kn; M.nodeType !== 8; ) {
                if (!O) {
                  O = null;
                  break e;
                }
                if (M = Gn(
                  M.nextSibling
                ), M === null) {
                  O = null;
                  break e;
                }
              }
              O = M;
            }
            O !== null ? (n.memoizedState = {
              dehydrated: O,
              treeContext: ha !== null ? { id: cr, overflow: fr } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, M = vn(
              18,
              null,
              null,
              0
            ), M.stateNode = O, M.return = n, n.child = M, Qt = n, yt = null, M = !0) : M = !1;
          }
          M || ga(n);
        }
        if (O = n.memoizedState, O !== null && (O = O.dehydrated, O !== null))
          return kf(O) ? n.lanes = 32 : n.lanes = 536870912, null;
        mr(n);
      }
      return O = o.children, o = o.fallback, c ? (Pr(), c = n.mode, O = Xo(
        { mode: "hidden", children: O },
        c
      ), o = da(
        o,
        c,
        a,
        null
      ), O.return = n, o.return = n, O.sibling = o, n.child = O, c = n.child, c.memoizedState = Gc(a), c.childLanes = Vc(
        e,
        A,
        a
      ), n.memoizedState = Zc, o) : (Ir(n), Yc(n, O));
    }
    if (M = e.memoizedState, M !== null && (O = M.dehydrated, O !== null)) {
      if (v)
        n.flags & 256 ? (Ir(n), n.flags &= -257, n = Xc(
          e,
          n,
          a
        )) : n.memoizedState !== null ? (Pr(), n.child = e.child, n.flags |= 128, n = null) : (Pr(), c = o.fallback, O = n.mode, o = Xo(
          { mode: "visible", children: o.children },
          O
        ), c = da(
          c,
          O,
          a,
          null
        ), c.flags |= 2, o.return = n, c.return = n, o.sibling = c, n.child = o, fi(
          n,
          e.child,
          null,
          a
        ), o = n.child, o.memoizedState = Gc(a), o.childLanes = Vc(
          e,
          A,
          a
        ), n.memoizedState = Zc, n = c);
      else if (Ir(n), kf(O)) {
        if (A = O.nextSibling && O.nextSibling.dataset, A) var H = A.dgst;
        A = H, o = Error(s(419)), o.stack = "", o.digest = A, es({ value: o, source: null, stack: null }), n = Xc(
          e,
          n,
          a
        );
      } else if (Lt || ts(e, n, a, !1), A = (a & e.childLanes) !== 0, Lt || A) {
        if (A = ot, A !== null && (o = a & -a, o = (o & 42) !== 0 ? 1 : ku(o), o = (o & (A.suspendedLanes | a)) !== 0 ? 0 : o, o !== 0 && o !== M.retryLane))
          throw M.retryLane = o, ei(e, o), xn(A, e, o), mm;
        O.data === "$?" || hf(), n = Xc(
          e,
          n,
          a
        );
      } else
        O.data === "$?" ? (n.flags |= 192, n.child = e.child, n = null) : (e = M.treeContext, yt = Gn(
          O.nextSibling
        ), Qt = n, Je = !0, ma = null, Kn = !1, e !== null && (Dn[Rn++] = cr, Dn[Rn++] = fr, Dn[Rn++] = ha, cr = e.id, fr = e.overflow, ha = n), n = Yc(
          n,
          o.children
        ), n.flags |= 4096);
      return n;
    }
    return c ? (Pr(), c = o.fallback, O = n.mode, M = e.child, H = M.sibling, o = ur(M, {
      mode: "hidden",
      children: o.children
    }), o.subtreeFlags = M.subtreeFlags & 65011712, H !== null ? c = ur(H, c) : (c = da(
      c,
      O,
      a,
      null
    ), c.flags |= 2), c.return = n, o.return = n, o.sibling = c, n.child = o, o = c, c = n.child, O = e.child.memoizedState, O === null ? O = Gc(a) : (M = O.cachePool, M !== null ? (H = jt._currentValue, M = M.parent !== H ? { parent: H, pool: H } : M) : M = cp(), O = {
      baseLanes: O.baseLanes | a,
      cachePool: M
    }), c.memoizedState = O, c.childLanes = Vc(
      e,
      A,
      a
    ), n.memoizedState = Zc, o) : (Ir(n), a = e.child, e = a.sibling, a = ur(a, {
      mode: "visible",
      children: o.children
    }), a.return = n, a.sibling = null, e !== null && (A = n.deletions, A === null ? (n.deletions = [e], n.flags |= 16) : A.push(e)), n.child = a, n.memoizedState = null, a);
  }
  function Yc(e, n) {
    return n = Xo(
      { mode: "visible", children: n },
      e.mode
    ), n.return = e, e.child = n;
  }
  function Xo(e, n) {
    return e = vn(22, e, null, n), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function Xc(e, n, a) {
    return fi(n, e.child, null, a), e = Yc(
      n,
      n.pendingProps.children
    ), e.flags |= 2, n.memoizedState = null, e;
  }
  function Cm(e, n, a) {
    e.lanes |= n;
    var o = e.alternate;
    o !== null && (o.lanes |= n), dc(e.return, n, a);
  }
  function $c(e, n, a, o, c) {
    var v = e.memoizedState;
    v === null ? e.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: o,
      tail: a,
      tailMode: c
    } : (v.isBackwards = n, v.rendering = null, v.renderingStartTime = 0, v.last = o, v.tail = a, v.tailMode = c);
  }
  function Am(e, n, a) {
    var o = n.pendingProps, c = o.revealOrder, v = o.tail;
    if (Bt(e, n, o.children, a), o = Mt.current, (o & 2) !== 0)
      o = o & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = n.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Cm(e, a, n);
          else if (e.tag === 19)
            Cm(e, a, n);
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
    switch (ie(Mt, o), c) {
      case "forwards":
        for (a = n.child, c = null; a !== null; )
          e = a.alternate, e !== null && Zo(e) === null && (c = a), a = a.sibling;
        a = c, a === null ? (c = n.child, n.child = null) : (c = a.sibling, a.sibling = null), $c(
          n,
          !1,
          c,
          a,
          v
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
        $c(
          n,
          !0,
          a,
          null,
          v
        );
        break;
      case "together":
        $c(n, !1, null, null, void 0);
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
  function Hb(e, n, a) {
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
          return o.dehydrated !== null ? (Ir(n), n.flags |= 128, null) : (a & n.child.childLanes) !== 0 ? wm(e, n, a) : (Ir(n), e = gr(
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
        if (c = n.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), ie(Mt, Mt.current), o) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, bm(e, n, a);
      case 24:
        Mr(n, jt, e.memoizedState.cache);
    }
    return gr(e, n, a);
  }
  function Nm(e, n, a) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps)
        Lt = !0;
      else {
        if (!Jc(e, a) && (n.flags & 128) === 0)
          return Lt = !1, Hb(
            e,
            n,
            a
          );
        Lt = (e.flags & 131072) !== 0;
      }
    else
      Lt = !1, Je && (n.flags & 1048576) !== 0 && rp(n, No, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          e = n.pendingProps;
          var o = n.elementType, c = o._init;
          if (o = c(o._payload), n.type = o, typeof o == "function")
            ic(o) ? (e = Sa(o, e), n.tag = 1, n = xm(
              null,
              n,
              o,
              e,
              a
            )) : (n.tag = 0, n = Fc(
              null,
              n,
              o,
              e,
              a
            ));
          else {
            if (o != null) {
              if (c = o.$$typeof, c === C) {
                n.tag = 11, n = gm(
                  null,
                  n,
                  o,
                  e,
                  a
                );
                break e;
              } else if (c === R) {
                n.tag = 14, n = vm(
                  null,
                  n,
                  o,
                  e,
                  a
                );
                break e;
              }
            }
            throw n = fe(o) || o, Error(s(306, n, ""));
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
        return o = n.type, c = Sa(
          o,
          n.pendingProps
        ), xm(
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
          var v = n.memoizedState;
          c = v.element, bc(e, n), ls(n, o, null, a);
          var A = n.memoizedState;
          if (o = A.cache, Mr(n, jt, o), o !== v.cache && hc(
            n,
            [jt],
            a,
            !0
          ), os(), o = A.element, v.isDehydrated)
            if (v = {
              element: o,
              isDehydrated: !1,
              cache: A.cache
            }, n.updateQueue.baseState = v, n.memoizedState = v, n.flags & 256) {
              n = Em(
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
              ), es(c), n = Em(
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
              for (yt = Gn(e.firstChild), Qt = n, Je = !0, ma = null, Kn = !0, a = im(
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
        return Yo(e, n), e === null ? (a = jg(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = a : Je || (a = n.type, e = n.pendingProps, o = ll(
          $.current
        ).createElement(a), o[Zt] = n, o[nn] = e, Ht(o, a, e), zt(o), n.stateNode = o) : n.memoizedState = jg(
          n.type,
          e.memoizedProps,
          n.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return ct(n), e === null && Je && (o = n.stateNode = Tg(
          n.type,
          n.pendingProps,
          $.current
        ), Qt = n, Kn = !0, c = yt, Yr(n.type) ? (jf = c, yt = Gn(
          o.firstChild
        )) : yt = c), Bt(
          e,
          n,
          n.pendingProps.children,
          a
        ), Yo(e, n), e === null && (n.flags |= 4194304), n.child;
      case 5:
        return e === null && Je && ((c = o = yt) && (o = m_(
          o,
          n.type,
          n.pendingProps,
          Kn
        ), o !== null ? (n.stateNode = o, Qt = n, yt = Gn(
          o.firstChild
        ), Kn = !1, c = !0) : c = !1), c || ga(n)), ct(n), c = n.type, v = n.pendingProps, A = e !== null ? e.memoizedProps : null, o = v.children, Nf(c, v) ? o = null : A !== null && Nf(c, A) && (n.flags |= 32), n.memoizedState !== null && (c = Cc(
          e,
          n,
          Db,
          null,
          null,
          a
        ), ks._currentValue = c), Yo(e, n), Bt(e, n, o, a), n.child;
      case 6:
        return e === null && Je && ((e = a = yt) && (a = g_(
          a,
          n.pendingProps,
          Kn
        ), a !== null ? (n.stateNode = a, Qt = n, yt = null, e = !0) : e = !1), e || ga(n)), null;
      case 13:
        return wm(e, n, a);
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
        return gm(
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
        return vm(
          e,
          n,
          n.type,
          n.pendingProps,
          a
        );
      case 15:
        return ym(
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
        }, e === null ? (a = Xo(
          o,
          a
        ), a.ref = n.ref, n.child = a, a.return = n, n = a) : (a = ur(e.child, o), a.ref = n.ref, n.child = a, a.return = n, n = a), n;
      case 22:
        return bm(e, n, a);
      case 24:
        return ya(n), o = Gt(jt), e === null ? (c = gc(), c === null && (c = ot, v = pc(), c.pooledCache = v, v.refCount++, v !== null && (c.pooledCacheLanes |= a), c = v), n.memoizedState = {
          parent: o,
          cache: c
        }, yc(n), Mr(n, jt, c)) : ((e.lanes & a) !== 0 && (bc(e, n), ls(n, null, null, a), os()), c = e.memoizedState, v = n.memoizedState, c.parent !== o ? (c = { parent: o, cache: o }, n.memoizedState = c, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = c), Mr(n, jt, o)) : (o = v.cache, Mr(n, jt, o), o !== c.cache && hc(
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
  function Tm(e, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Lg(n)) {
      if (n = zn.current, n !== null && ((Fe & 4194048) === Fe ? Wn !== null : (Fe & 62914560) !== Fe && (Fe & 536870912) === 0 || n !== Wn))
        throw is = vc, fp;
      e.flags |= 8192;
    }
  }
  function $o(e, n) {
    n !== null && (e.flags |= 4), e.flags & 16384 && (n = e.tag !== 22 ? sh() : 536870912, e.lanes |= n, mi |= n);
  }
  function ms(e, n) {
    if (!Je)
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
  function qb(e, n, a) {
    var o = n.pendingProps;
    switch (uc(n), n.tag) {
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
        return a = n.stateNode, o = null, e !== null && (o = e.memoizedState.cache), n.memoizedState.cache !== o && (n.flags |= 2048), hr(jt), Xe(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Ki(n) ? vr(n) : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, sp())), mt(n), null;
      case 26:
        return a = n.memoizedState, e === null ? (vr(n), a !== null ? (mt(n), Tm(n, a)) : (mt(n), n.flags &= -16777217)) : a ? a !== e.memoizedState ? (vr(n), mt(n), Tm(n, a)) : (mt(n), n.flags &= -16777217) : (e.memoizedProps !== o && vr(n), mt(n), n.flags &= -16777217), null;
      case 27:
        ke(n), a = $.current;
        var c = n.type;
        if (e !== null && n.stateNode != null)
          e.memoizedProps !== o && vr(n);
        else {
          if (!o) {
            if (n.stateNode === null)
              throw Error(s(166));
            return mt(n), null;
          }
          e = se.current, Ki(n) ? ap(n) : (e = Tg(c, o, a), n.stateNode = e, vr(n));
        }
        return mt(n), null;
      case 5:
        if (ke(n), a = n.type, e !== null && n.stateNode != null)
          e.memoizedProps !== o && vr(n);
        else {
          if (!o) {
            if (n.stateNode === null)
              throw Error(s(166));
            return mt(n), null;
          }
          if (e = se.current, Ki(n))
            ap(n);
          else {
            switch (c = ll(
              $.current
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
            e[Zt] = n, e[nn] = o;
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
          if (e = $.current, Ki(n)) {
            if (e = n.stateNode, a = n.memoizedProps, o = null, c = Qt, c !== null)
              switch (c.tag) {
                case 27:
                case 5:
                  o = c.memoizedProps;
              }
            e[Zt] = n, e = !!(e.nodeValue === a || o !== null && o.suppressHydrationWarning === !0 || Sg(e.nodeValue, a)), e || ga(n);
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
            c = sp(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = c), c = !0;
          if (!c)
            return n.flags & 256 ? (mr(n), n) : (mr(n), null);
        }
        if (mr(n), (n.flags & 128) !== 0)
          return n.lanes = a, n;
        if (a = o !== null, e = e !== null && e.memoizedState !== null, a) {
          o = n.child, c = null, o.alternate !== null && o.alternate.memoizedState !== null && o.alternate.memoizedState.cachePool !== null && (c = o.alternate.memoizedState.cachePool.pool);
          var v = null;
          o.memoizedState !== null && o.memoizedState.cachePool !== null && (v = o.memoizedState.cachePool.pool), v !== c && (o.flags |= 2048);
        }
        return a !== e && a && (n.child.flags |= 8192), $o(n, n.updateQueue), mt(n), null;
      case 4:
        return Xe(), e === null && xf(n.stateNode.containerInfo), mt(n), null;
      case 10:
        return hr(n.type), mt(n), null;
      case 19:
        if (re(Mt), c = n.memoizedState, c === null) return mt(n), null;
        if (o = (n.flags & 128) !== 0, v = c.rendering, v === null)
          if (o) ms(c, !1);
          else {
            if (bt !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = n.child; e !== null; ) {
                if (v = Zo(e), v !== null) {
                  for (n.flags |= 128, ms(c, !1), e = v.updateQueue, n.updateQueue = e, $o(n, e), n.subtreeFlags = 0, e = a, a = n.child; a !== null; )
                    np(a, e), a = a.sibling;
                  return ie(
                    Mt,
                    Mt.current & 1 | 2
                  ), n.child;
                }
                e = e.sibling;
              }
            c.tail !== null && $e() > Ko && (n.flags |= 128, o = !0, ms(c, !1), n.lanes = 4194304);
          }
        else {
          if (!o)
            if (e = Zo(v), e !== null) {
              if (n.flags |= 128, o = !0, e = e.updateQueue, n.updateQueue = e, $o(n, e), ms(c, !0), c.tail === null && c.tailMode === "hidden" && !v.alternate && !Je)
                return mt(n), null;
            } else
              2 * $e() - c.renderingStartTime > Ko && a !== 536870912 && (n.flags |= 128, o = !0, ms(c, !1), n.lanes = 4194304);
          c.isBackwards ? (v.sibling = n.child, n.child = v) : (e = c.last, e !== null ? e.sibling = v : n.child = v, c.last = v);
        }
        return c.tail !== null ? (n = c.tail, c.rendering = n, c.tail = n.sibling, c.renderingStartTime = $e(), n.sibling = null, e = Mt.current, ie(Mt, o ? e & 1 | 2 : e & 1), n) : (mt(n), null);
      case 22:
      case 23:
        return mr(n), Ec(), o = n.memoizedState !== null, e !== null ? e.memoizedState !== null !== o && (n.flags |= 8192) : o && (n.flags |= 8192), o ? (a & 536870912) !== 0 && (n.flags & 128) === 0 && (mt(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : mt(n), a = n.updateQueue, a !== null && $o(n, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), o = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (o = n.memoizedState.cachePool.pool), o !== a && (n.flags |= 2048), e !== null && re(ba), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), n.memoizedState.cache !== a && (n.flags |= 2048), hr(jt), mt(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, n.tag));
  }
  function Fb(e, n) {
    switch (uc(n), n.tag) {
      case 1:
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return hr(jt), Xe(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return ke(n), null;
      case 13:
        if (mr(n), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(s(340));
          Wi();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return re(Mt), null;
      case 4:
        return Xe(), null;
      case 10:
        return hr(n.type), null;
      case 22:
      case 23:
        return mr(n), Ec(), e !== null && re(ba), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 24:
        return hr(jt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Om(e, n) {
    switch (uc(n), n.tag) {
      case 3:
        hr(jt), Xe();
        break;
      case 26:
      case 27:
      case 5:
        ke(n);
        break;
      case 4:
        Xe();
        break;
      case 13:
        mr(n);
        break;
      case 19:
        re(Mt);
        break;
      case 10:
        hr(n.type);
        break;
      case 22:
      case 23:
        mr(n), Ec(), e !== null && re(ba);
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
            var v = a.create, A = a.inst;
            o = v(), A.destroy = o;
          }
          a = a.next;
        } while (a !== c);
      }
    } catch (O) {
      rt(n, n.return, O);
    }
  }
  function Br(e, n, a) {
    try {
      var o = n.updateQueue, c = o !== null ? o.lastEffect : null;
      if (c !== null) {
        var v = c.next;
        o = v;
        do {
          if ((o.tag & e) === e) {
            var A = o.inst, O = A.destroy;
            if (O !== void 0) {
              A.destroy = void 0, c = n;
              var M = a, H = O;
              try {
                H();
              } catch (Q) {
                rt(
                  c,
                  M,
                  Q
                );
              }
            }
          }
          o = o.next;
        } while (o !== v);
      }
    } catch (Q) {
      rt(n, n.return, Q);
    }
  }
  function km(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var a = e.stateNode;
      try {
        vp(n, a);
      } catch (o) {
        rt(e, e.return, o);
      }
    }
  }
  function jm(e, n, a) {
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
  function Mm(e) {
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
  function Qc(e, n, a) {
    try {
      var o = e.stateNode;
      c_(o, e.type, a, n), o[nn] = n;
    } catch (c) {
      rt(e, e.return, c);
    }
  }
  function Dm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Yr(e.type) || e.tag === 4;
  }
  function Kc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Dm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Yr(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Wc(e, n, a) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, n ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, n) : (n = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, n.appendChild(e), a = a._reactRootContainer, a != null || n.onclick !== null || (n.onclick = ol));
    else if (o !== 4 && (o === 27 && Yr(e.type) && (a = e.stateNode, n = null), e = e.child, e !== null))
      for (Wc(e, n, a), e = e.sibling; e !== null; )
        Wc(e, n, a), e = e.sibling;
  }
  function Jo(e, n, a) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, n ? a.insertBefore(e, n) : a.appendChild(e);
    else if (o !== 4 && (o === 27 && Yr(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for (Jo(e, n, a), e = e.sibling; e !== null; )
        Jo(e, n, a), e = e.sibling;
  }
  function Rm(e) {
    var n = e.stateNode, a = e.memoizedProps;
    try {
      for (var o = e.type, c = n.attributes; c.length; )
        n.removeAttributeNode(c[0]);
      Ht(n, o, a), n[Zt] = e, n[nn] = a;
    } catch (v) {
      rt(e, e.return, v);
    }
  }
  var yr = !1, Et = !1, ef = !1, zm = typeof WeakSet == "function" ? WeakSet : Set, It = null;
  function Zb(e, n) {
    if (e = e.containerInfo, Cf = pl, e = Vh(e), Ku(e)) {
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
            var c = o.anchorOffset, v = o.focusNode;
            o = o.focusOffset;
            try {
              a.nodeType, v.nodeType;
            } catch {
              a = null;
              break e;
            }
            var A = 0, O = -1, M = -1, H = 0, Q = 0, W = e, F = null;
            t: for (; ; ) {
              for (var Z; W !== a || c !== 0 && W.nodeType !== 3 || (O = A + c), W !== v || o !== 0 && W.nodeType !== 3 || (M = A + o), W.nodeType === 3 && (A += W.nodeValue.length), (Z = W.firstChild) !== null; )
                F = W, W = Z;
              for (; ; ) {
                if (W === e) break t;
                if (F === a && ++H === c && (O = A), F === v && ++Q === o && (M = A), (Z = W.nextSibling) !== null) break;
                W = F, F = W.parentNode;
              }
              W = Z;
            }
            a = O === -1 || M === -1 ? null : { start: O, end: M };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Af = { focusedElem: e, selectionRange: a }, pl = !1, It = n; It !== null; )
      if (n = It, e = n.child, (n.subtreeFlags & 1024) !== 0 && e !== null)
        e.return = n, It = e;
      else
        for (; It !== null; ) {
          switch (n = It, v = n.alternate, e = n.flags, n.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && v !== null) {
                e = void 0, a = n, c = v.memoizedProps, v = v.memoizedState, o = a.stateNode;
                try {
                  var Ee = Sa(
                    a.type,
                    c,
                    a.elementType === a.type
                  );
                  e = o.getSnapshotBeforeUpdate(
                    Ee,
                    v
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
                  Of(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Of(e);
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
  function Lm(e, n, a) {
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
            } catch (A) {
              rt(a, a.return, A);
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
            } catch (A) {
              rt(
                a,
                a.return,
                A
              );
            }
          }
        o & 64 && km(a), o & 512 && vs(a, a.return);
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
            vp(e, n);
          } catch (A) {
            rt(a, a.return, A);
          }
        }
        break;
      case 27:
        n === null && o & 4 && Rm(a);
      case 26:
      case 5:
        Ur(e, a), n === null && o & 4 && Mm(a), o & 512 && vs(a, a.return);
        break;
      case 12:
        Ur(e, a);
        break;
      case 13:
        Ur(e, a), o & 4 && Bm(e, a), o & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = Wb.bind(
          null,
          a
        ), v_(e, a))));
        break;
      case 22:
        if (o = a.memoizedState !== null || yr, !o) {
          n = n !== null && n.memoizedState !== null || Et, c = yr;
          var v = Et;
          yr = o, (Et = n) && !v ? Hr(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Ur(e, a), yr = c, Et = v;
        }
        break;
      case 30:
        break;
      default:
        Ur(e, a);
    }
  }
  function Im(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, Im(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && Du(n)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var ft = null, sn = !1;
  function br(e, n, a) {
    for (a = a.child; a !== null; )
      Pm(e, n, a), a = a.sibling;
  }
  function Pm(e, n, a) {
    if (te && typeof te.onCommitFiberUnmount == "function")
      try {
        te.onCommitFiberUnmount(ae, a);
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
        var o = ft, c = sn;
        Yr(a.type) && (ft = a.stateNode, sn = !1), br(
          e,
          n,
          a
        ), As(a.stateNode), ft = o, sn = c;
        break;
      case 5:
        Et || er(a, n);
      case 6:
        if (o = ft, c = sn, ft = null, br(
          e,
          n,
          a
        ), ft = o, sn = c, ft !== null)
          if (sn)
            try {
              (ft.nodeType === 9 ? ft.body : ft.nodeName === "HTML" ? ft.ownerDocument.body : ft).removeChild(a.stateNode);
            } catch (v) {
              rt(
                a,
                n,
                v
              );
            }
          else
            try {
              ft.removeChild(a.stateNode);
            } catch (v) {
              rt(
                a,
                n,
                v
              );
            }
        break;
      case 18:
        ft !== null && (sn ? (e = ft, Ag(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), Rs(e)) : Ag(ft, a.stateNode));
        break;
      case 4:
        o = ft, c = sn, ft = a.stateNode.containerInfo, sn = !0, br(
          e,
          n,
          a
        ), ft = o, sn = c;
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
        Et || (er(a, n), o = a.stateNode, typeof o.componentWillUnmount == "function" && jm(
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
  function Bm(e, n) {
    if (n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Rs(e);
      } catch (a) {
        rt(n, n.return, a);
      }
  }
  function Gb(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var n = e.stateNode;
        return n === null && (n = e.stateNode = new zm()), n;
      case 22:
        return e = e.stateNode, n = e._retryCache, n === null && (n = e._retryCache = new zm()), n;
      default:
        throw Error(s(435, e.tag));
    }
  }
  function tf(e, n) {
    var a = Gb(e);
    n.forEach(function(o) {
      var c = e_.bind(null, e, o);
      a.has(o) || (a.add(o), o.then(c, c));
    });
  }
  function yn(e, n) {
    var a = n.deletions;
    if (a !== null)
      for (var o = 0; o < a.length; o++) {
        var c = a[o], v = e, A = n, O = A;
        e: for (; O !== null; ) {
          switch (O.tag) {
            case 27:
              if (Yr(O.type)) {
                ft = O.stateNode, sn = !1;
                break e;
              }
              break;
            case 5:
              ft = O.stateNode, sn = !1;
              break e;
            case 3:
            case 4:
              ft = O.stateNode.containerInfo, sn = !0;
              break e;
          }
          O = O.return;
        }
        if (ft === null) throw Error(s(160));
        Pm(v, A, c), ft = null, sn = !1, v = c.alternate, v !== null && (v.return = null), c.return = null;
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; )
        Um(n, e), n = n.sibling;
  }
  var Zn = null;
  function Um(e, n) {
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
          var v = a !== null ? a.memoizedState : null;
          if (o = e.memoizedState, a === null)
            if (o === null)
              if (e.stateNode === null) {
                e: {
                  o = e.type, a = e.memoizedProps, c = c.ownerDocument || c;
                  t: switch (o) {
                    case "title":
                      v = c.getElementsByTagName("title")[0], (!v || v[Hi] || v[Zt] || v.namespaceURI === "http://www.w3.org/2000/svg" || v.hasAttribute("itemprop")) && (v = c.createElement(o), c.head.insertBefore(
                        v,
                        c.querySelector("head > title")
                      )), Ht(v, o, a), v[Zt] = e, zt(v), o = v;
                      break e;
                    case "link":
                      var A = Rg(
                        "link",
                        "href",
                        c
                      ).get(o + (a.href || ""));
                      if (A) {
                        for (var O = 0; O < A.length; O++)
                          if (v = A[O], v.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && v.getAttribute("rel") === (a.rel == null ? null : a.rel) && v.getAttribute("title") === (a.title == null ? null : a.title) && v.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            A.splice(O, 1);
                            break t;
                          }
                      }
                      v = c.createElement(o), Ht(v, o, a), c.head.appendChild(v);
                      break;
                    case "meta":
                      if (A = Rg(
                        "meta",
                        "content",
                        c
                      ).get(o + (a.content || ""))) {
                        for (O = 0; O < A.length; O++)
                          if (v = A[O], v.getAttribute("content") === (a.content == null ? null : "" + a.content) && v.getAttribute("name") === (a.name == null ? null : a.name) && v.getAttribute("property") === (a.property == null ? null : a.property) && v.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && v.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            A.splice(O, 1);
                            break t;
                          }
                      }
                      v = c.createElement(o), Ht(v, o, a), c.head.appendChild(v);
                      break;
                    default:
                      throw Error(s(468, o));
                  }
                  v[Zt] = e, zt(v), o = v;
                }
                e.stateNode = o;
              } else
                zg(
                  c,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Dg(
                c,
                o,
                e.memoizedProps
              );
          else
            v !== o ? (v === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : v.count--, o === null ? zg(
              c,
              e.type,
              e.stateNode
            ) : Dg(
              c,
              o,
              e.memoizedProps
            )) : o === null && e.stateNode !== null && Qc(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        yn(n, e), bn(e), o & 512 && (Et || a === null || er(a, a.return)), a !== null && o & 4 && Qc(
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
          } catch (Z) {
            rt(e, e.return, Z);
          }
        }
        o & 4 && e.stateNode != null && (c = e.memoizedProps, Qc(
          e,
          c,
          a !== null ? a.memoizedProps : c
        )), o & 1024 && (ef = !0);
        break;
      case 6:
        if (yn(n, e), bn(e), o & 4) {
          if (e.stateNode === null)
            throw Error(s(162));
          o = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = o;
          } catch (Z) {
            rt(e, e.return, Z);
          }
        }
        break;
      case 3:
        if (fl = null, c = Zn, Zn = ul(n.containerInfo), yn(n, e), Zn = c, bn(e), o & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            Rs(n.containerInfo);
          } catch (Z) {
            rt(e, e.return, Z);
          }
        ef && (ef = !1, Hm(e));
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
        yn(n, e), bn(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (lf = $e()), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, tf(e, o)));
        break;
      case 22:
        c = e.memoizedState !== null;
        var M = a !== null && a.memoizedState !== null, H = yr, Q = Et;
        if (yr = H || c, Et = Q || M, yn(n, e), Et = Q, yr = H, bn(e), o & 8192)
          e: for (n = e.stateNode, n._visibility = c ? n._visibility & -2 : n._visibility | 1, c && (a === null || M || yr || Et || xa(e)), a = null, n = e; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (a === null) {
                M = a = n;
                try {
                  if (v = M.stateNode, c)
                    A = v.style, typeof A.setProperty == "function" ? A.setProperty("display", "none", "important") : A.display = "none";
                  else {
                    O = M.stateNode;
                    var W = M.memoizedProps.style, F = W != null && W.hasOwnProperty("display") ? W.display : null;
                    O.style.display = F == null || typeof F == "boolean" ? "" : ("" + F).trim();
                  }
                } catch (Z) {
                  rt(M, M.return, Z);
                }
              }
            } else if (n.tag === 6) {
              if (a === null) {
                M = n;
                try {
                  M.stateNode.nodeValue = c ? "" : M.memoizedProps;
                } catch (Z) {
                  rt(M, M.return, Z);
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
        o & 4 && (o = e.updateQueue, o !== null && (a = o.retryQueue, a !== null && (o.retryQueue = null, tf(e, a))));
        break;
      case 19:
        yn(n, e), bn(e), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, tf(e, o)));
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
          if (Dm(o)) {
            a = o;
            break;
          }
          o = o.return;
        }
        if (a == null) throw Error(s(160));
        switch (a.tag) {
          case 27:
            var c = a.stateNode, v = Kc(e);
            Jo(e, v, c);
            break;
          case 5:
            var A = a.stateNode;
            a.flags & 32 && (Ya(A, ""), a.flags &= -33);
            var O = Kc(e);
            Jo(e, O, A);
            break;
          case 3:
          case 4:
            var M = a.stateNode.containerInfo, H = Kc(e);
            Wc(
              e,
              H,
              M
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch (Q) {
        rt(e, e.return, Q);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function Hm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var n = e;
        Hm(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), e = e.sibling;
      }
  }
  function Ur(e, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        Lm(e, n.alternate, n), n = n.sibling;
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
          typeof a.componentWillUnmount == "function" && jm(
            n,
            n.return,
            a
          ), xa(n);
          break;
        case 27:
          As(n.stateNode);
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
      var o = n.alternate, c = e, v = n, A = v.flags;
      switch (v.tag) {
        case 0:
        case 11:
        case 15:
          Hr(
            c,
            v,
            a
          ), gs(4, v);
          break;
        case 1:
          if (Hr(
            c,
            v,
            a
          ), o = v, c = o.stateNode, typeof c.componentDidMount == "function")
            try {
              c.componentDidMount();
            } catch (H) {
              rt(o, o.return, H);
            }
          if (o = v, c = o.updateQueue, c !== null) {
            var O = o.stateNode;
            try {
              var M = c.shared.hiddenCallbacks;
              if (M !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < M.length; c++)
                  gp(M[c], O);
            } catch (H) {
              rt(o, o.return, H);
            }
          }
          a && A & 64 && km(v), vs(v, v.return);
          break;
        case 27:
          Rm(v);
        case 26:
        case 5:
          Hr(
            c,
            v,
            a
          ), a && o === null && A & 4 && Mm(v), vs(v, v.return);
          break;
        case 12:
          Hr(
            c,
            v,
            a
          );
          break;
        case 13:
          Hr(
            c,
            v,
            a
          ), a && A & 4 && Bm(c, v);
          break;
        case 22:
          v.memoizedState === null && Hr(
            c,
            v,
            a
          ), vs(v, v.return);
          break;
        case 30:
          break;
        default:
          Hr(
            c,
            v,
            a
          );
      }
      n = n.sibling;
    }
  }
  function nf(e, n) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (e = n.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && ns(a));
  }
  function rf(e, n) {
    e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && ns(e));
  }
  function tr(e, n, a, o) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        qm(
          e,
          n,
          a,
          o
        ), n = n.sibling;
  }
  function qm(e, n, a, o) {
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
            var v = n.memoizedProps, A = v.id, O = v.onPostCommit;
            typeof O == "function" && O(
              A,
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
        v = n.stateNode, A = n.alternate, n.memoizedState !== null ? v._visibility & 2 ? tr(
          e,
          n,
          a,
          o
        ) : ys(e, n) : v._visibility & 2 ? tr(
          e,
          n,
          a,
          o
        ) : (v._visibility |= 2, di(
          e,
          n,
          a,
          o,
          (n.subtreeFlags & 10256) !== 0
        )), c & 2048 && nf(A, n);
        break;
      case 24:
        tr(
          e,
          n,
          a,
          o
        ), c & 2048 && rf(n.alternate, n);
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
      var v = e, A = n, O = a, M = o, H = A.flags;
      switch (A.tag) {
        case 0:
        case 11:
        case 15:
          di(
            v,
            A,
            O,
            M,
            c
          ), gs(8, A);
          break;
        case 23:
          break;
        case 22:
          var Q = A.stateNode;
          A.memoizedState !== null ? Q._visibility & 2 ? di(
            v,
            A,
            O,
            M,
            c
          ) : ys(
            v,
            A
          ) : (Q._visibility |= 2, di(
            v,
            A,
            O,
            M,
            c
          )), c && H & 2048 && nf(
            A.alternate,
            A
          );
          break;
        case 24:
          di(
            v,
            A,
            O,
            M,
            c
          ), c && H & 2048 && rf(A.alternate, A);
          break;
        default:
          di(
            v,
            A,
            O,
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
            ys(a, o), c & 2048 && nf(
              o.alternate,
              o
            );
            break;
          case 24:
            ys(a, o), c & 2048 && rf(o.alternate, o);
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
        Fm(e), e = e.sibling;
  }
  function Fm(e) {
    switch (e.tag) {
      case 26:
        hi(e), e.flags & bs && e.memoizedState !== null && k_(
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
  function Zm(e) {
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
          It = o, Vm(
            o,
            e
          );
        }
      Zm(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Gm(e), e = e.sibling;
  }
  function Gm(e) {
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
        e.memoizedState !== null && n._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (n._visibility &= -3, Qo(e)) : _s(e);
        break;
      default:
        _s(e);
    }
  }
  function Qo(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var a = 0; a < n.length; a++) {
          var o = n[a];
          It = o, Vm(
            o,
            e
          );
        }
      Zm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (n = e, n.tag) {
        case 0:
        case 11:
        case 15:
          Br(8, n, n.return), Qo(n);
          break;
        case 22:
          a = n.stateNode, a._visibility & 2 && (a._visibility &= -3, Qo(n));
          break;
        default:
          Qo(n);
      }
      e = e.sibling;
    }
  }
  function Vm(e, n) {
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
          var c = o.sibling, v = o.return;
          if (Im(o), o === a) {
            It = null;
            break e;
          }
          if (c !== null) {
            c.return = v, It = c;
            break e;
          }
          It = v;
        }
    }
  }
  var Vb = {
    getCacheForType: function(e) {
      var n = Gt(jt), a = n.data.get(e);
      return a === void 0 && (a = e(), n.data.set(e, a)), a;
    }
  }, Yb = typeof WeakMap == "function" ? WeakMap : Map, Qe = 0, ot = null, Le = null, Fe = 0, Ke = 0, _n = null, qr = !1, pi = !1, af = !1, _r = 0, bt = 0, Fr = 0, Ea = 0, sf = 0, Ln = 0, mi = 0, Ss = null, on = null, of = !1, lf = 0, Ko = 1 / 0, Wo = null, Zr = null, Ut = 0, Gr = null, gi = null, vi = 0, uf = 0, cf = null, Ym = null, xs = 0, ff = null;
  function Sn() {
    if ((Qe & 2) !== 0 && Fe !== 0)
      return Fe & -Fe;
    if (I.T !== null) {
      var e = ai;
      return e !== 0 ? e : yf();
    }
    return uh();
  }
  function Xm() {
    Ln === 0 && (Ln = (Fe & 536870912) === 0 || Je ? Ba() : 536870912);
    var e = zn.current;
    return e !== null && (e.flags |= 32), Ln;
  }
  function xn(e, n, a) {
    (e === ot && (Ke === 2 || Ke === 9) || e.cancelPendingCommit !== null) && (yi(e, 0), Vr(
      e,
      Fe,
      Ln,
      !1
    )), Ui(e, a), ((Qe & 2) === 0 || e !== ot) && (e === ot && ((Qe & 2) === 0 && (Ea |= a), bt === 4 && Vr(
      e,
      Fe,
      Ln,
      !1
    )), nr(e));
  }
  function $m(e, n, a) {
    if ((Qe & 6) !== 0) throw Error(s(327));
    var o = !a && (n & 124) === 0 && (n & e.expiredLanes) === 0 || tn(e, n), c = o ? Jb(e, n) : pf(e, n, !0), v = o;
    do {
      if (c === 0) {
        pi && !o && Vr(e, n, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, v && !Xb(a)) {
          c = pf(e, n, !1), v = !1;
          continue;
        }
        if (c === 2) {
          if (v = n, e.errorRecoveryDisabledLanes & v)
            var A = 0;
          else
            A = e.pendingLanes & -536870913, A = A !== 0 ? A : A & 536870912 ? 536870912 : 0;
          if (A !== 0) {
            n = A;
            e: {
              var O = e;
              c = Ss;
              var M = O.current.memoizedState.isDehydrated;
              if (M && (yi(O, A).flags |= 256), A = pf(
                O,
                A,
                !1
              ), A !== 2) {
                if (af && !M) {
                  O.errorRecoveryDisabledLanes |= v, Ea |= v, c = 4;
                  break e;
                }
                v = on, on = c, v !== null && (on === null ? on = v : on.push.apply(
                  on,
                  v
                ));
              }
              c = A;
            }
            if (v = !1, c !== 2) continue;
          }
        }
        if (c === 1) {
          yi(e, 0), Vr(e, n, 0, !0);
          break;
        }
        e: {
          switch (o = e, v = c, v) {
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
              on = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((n & 62914560) === n && (c = lf + 300 - $e(), 10 < c)) {
            if (Vr(
              o,
              n,
              Ln,
              !qr
            ), st(o, 0, !0) !== 0) break e;
            o.timeoutHandle = wg(
              Jm.bind(
                null,
                o,
                a,
                on,
                Wo,
                of,
                n,
                Ln,
                Ea,
                mi,
                qr,
                v,
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
            on,
            Wo,
            of,
            n,
            Ln,
            Ea,
            mi,
            qr,
            v,
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
  function Jm(e, n, a, o, c, v, A, O, M, H, Q, W, F, Z) {
    if (e.timeoutHandle = -1, W = n.subtreeFlags, (W & 8192 || (W & 16785408) === 16785408) && (Os = { stylesheets: null, count: 0, unsuspend: O_ }, Fm(n), W = j_(), W !== null)) {
      e.cancelPendingCommit = W(
        rg.bind(
          null,
          e,
          n,
          v,
          a,
          o,
          c,
          A,
          O,
          M,
          Q,
          1,
          F,
          Z
        )
      ), Vr(e, v, A, !H);
      return;
    }
    rg(
      e,
      n,
      v,
      a,
      o,
      c,
      A,
      O,
      M
    );
  }
  function Xb(e) {
    for (var n = e; ; ) {
      var a = n.tag;
      if ((a === 0 || a === 11 || a === 15) && n.flags & 16384 && (a = n.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var o = 0; o < a.length; o++) {
          var c = a[o], v = c.getSnapshot;
          c = c.value;
          try {
            if (!gn(v(), c)) return !1;
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
    n &= ~sf, n &= ~Ea, e.suspendedLanes |= n, e.pingedLanes &= ~n, o && (e.warmLanes |= n), o = e.expirationTimes;
    for (var c = n; 0 < c; ) {
      var v = 31 - Be(c), A = 1 << v;
      o[v] = -1, c &= ~A;
    }
    a !== 0 && oh(e, a, n);
  }
  function el() {
    return (Qe & 6) === 0 ? (Es(0), !1) : !0;
  }
  function df() {
    if (Le !== null) {
      if (Ke === 0)
        var e = Le.return;
      else
        e = Le, dr = va = null, Tc(e), ci = null, hs = 0, e = Le;
      for (; e !== null; )
        Om(e.alternate, e), e = e.return;
      Le = null;
    }
  }
  function yi(e, n) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, d_(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), df(), ot = e, Le = a = ur(e.current, null), Fe = n, Ke = 0, _n = null, qr = !1, pi = tn(e, n), af = !1, mi = Ln = sf = Ea = Fr = bt = 0, on = Ss = null, of = !1, (n & 8) !== 0 && (n |= n & 32);
    var o = e.entangledLanes;
    if (o !== 0)
      for (e = e.entanglements, o &= n; 0 < o; ) {
        var c = 31 - Be(o), v = 1 << c;
        n |= e[c], o &= ~v;
      }
    return _r = n, xo(), a;
  }
  function Qm(e, n) {
    Me = null, I.H = Ho, n === as || n === jo ? (n = pp(), Ke = 3) : n === fp ? (n = pp(), Ke = 4) : Ke = n === mm ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, _n = n, Le === null && (bt = 1, Vo(
      e,
      jn(n, e.current)
    ));
  }
  function Km() {
    var e = I.H;
    return I.H = Ho, e === null ? Ho : e;
  }
  function Wm() {
    var e = I.A;
    return I.A = Vb, e;
  }
  function hf() {
    bt = 4, qr || (Fe & 4194048) !== Fe && zn.current !== null || (pi = !0), (Fr & 134217727) === 0 && (Ea & 134217727) === 0 || ot === null || Vr(
      ot,
      Fe,
      Ln,
      !1
    );
  }
  function pf(e, n, a) {
    var o = Qe;
    Qe |= 2;
    var c = Km(), v = Wm();
    (ot !== e || Fe !== n) && (Wo = null, yi(e, n)), n = !1;
    var A = bt;
    e: do
      try {
        if (Ke !== 0 && Le !== null) {
          var O = Le, M = _n;
          switch (Ke) {
            case 8:
              df(), A = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              zn.current === null && (n = !0);
              var H = Ke;
              if (Ke = 0, _n = null, bi(e, O, M, H), a && pi) {
                A = 0;
                break e;
              }
              break;
            default:
              H = Ke, Ke = 0, _n = null, bi(e, O, M, H);
          }
        }
        $b(), A = bt;
        break;
      } catch (Q) {
        Qm(e, Q);
      }
    while (!0);
    return n && e.shellSuspendCounter++, dr = va = null, Qe = o, I.H = c, I.A = v, Le === null && (ot = null, Fe = 0, xo()), A;
  }
  function $b() {
    for (; Le !== null; ) eg(Le);
  }
  function Jb(e, n) {
    var a = Qe;
    Qe |= 2;
    var o = Km(), c = Wm();
    ot !== e || Fe !== n ? (Wo = null, Ko = $e() + 500, yi(e, n)) : pi = tn(
      e,
      n
    );
    e: do
      try {
        if (Ke !== 0 && Le !== null) {
          n = Le;
          var v = _n;
          t: switch (Ke) {
            case 1:
              Ke = 0, _n = null, bi(e, n, v, 1);
              break;
            case 2:
            case 9:
              if (dp(v)) {
                Ke = 0, _n = null, tg(n);
                break;
              }
              n = function() {
                Ke !== 2 && Ke !== 9 || ot !== e || (Ke = 7), nr(e);
              }, v.then(n, n);
              break e;
            case 3:
              Ke = 7;
              break e;
            case 4:
              Ke = 5;
              break e;
            case 7:
              dp(v) ? (Ke = 0, _n = null, tg(n)) : (Ke = 0, _n = null, bi(e, n, v, 7));
              break;
            case 5:
              var A = null;
              switch (Le.tag) {
                case 26:
                  A = Le.memoizedState;
                case 5:
                case 27:
                  var O = Le;
                  if (!A || Lg(A)) {
                    Ke = 0, _n = null;
                    var M = O.sibling;
                    if (M !== null) Le = M;
                    else {
                      var H = O.return;
                      H !== null ? (Le = H, tl(H)) : Le = null;
                    }
                    break t;
                  }
              }
              Ke = 0, _n = null, bi(e, n, v, 5);
              break;
            case 6:
              Ke = 0, _n = null, bi(e, n, v, 6);
              break;
            case 8:
              df(), bt = 6;
              break e;
            default:
              throw Error(s(462));
          }
        }
        Qb();
        break;
      } catch (Q) {
        Qm(e, Q);
      }
    while (!0);
    return dr = va = null, I.H = o, I.A = c, Qe = a, Le !== null ? 0 : (ot = null, Fe = 0, xo(), bt);
  }
  function Qb() {
    for (; Le !== null && !en(); )
      eg(Le);
  }
  function eg(e) {
    var n = Nm(e.alternate, e, _r);
    e.memoizedProps = e.pendingProps, n === null ? tl(e) : Le = n;
  }
  function tg(e) {
    var n = e, a = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Sm(
          a,
          n,
          n.pendingProps,
          n.type,
          void 0,
          Fe
        );
        break;
      case 11:
        n = Sm(
          a,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          Fe
        );
        break;
      case 5:
        Tc(n);
      default:
        Om(a, n), n = Le = np(n, _r), n = Nm(a, n, _r);
    }
    e.memoizedProps = e.pendingProps, n === null ? tl(e) : Le = n;
  }
  function bi(e, n, a, o) {
    dr = va = null, Tc(n), ci = null, hs = 0;
    var c = n.return;
    try {
      if (Ub(
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
    } catch (v) {
      if (c !== null) throw Le = c, v;
      bt = 1, Vo(
        e,
        jn(a, e.current)
      ), Le = null;
      return;
    }
    n.flags & 32768 ? (Je || o === 1 ? e = !0 : pi || (Fe & 536870912) !== 0 ? e = !1 : (qr = e = !0, (o === 2 || o === 9 || o === 3 || o === 6) && (o = zn.current, o !== null && o.tag === 13 && (o.flags |= 16384))), ng(n, e)) : tl(n);
  }
  function tl(e) {
    var n = e;
    do {
      if ((n.flags & 32768) !== 0) {
        ng(
          n,
          qr
        );
        return;
      }
      e = n.return;
      var a = qb(
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
  function ng(e, n) {
    do {
      var a = Fb(e.alternate, e);
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
  function rg(e, n, a, o, c, v, A, O, M) {
    e.cancelPendingCommit = null;
    do
      nl();
    while (Ut !== 0);
    if ((Qe & 6) !== 0) throw Error(s(327));
    if (n !== null) {
      if (n === e.current) throw Error(s(177));
      if (v = n.lanes | n.childLanes, v |= rc, O1(
        e,
        a,
        v,
        A,
        O,
        M
      ), e === ot && (Le = ot = null, Fe = 0), gi = n, Gr = e, vi = a, uf = v, cf = c, Ym = o, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, t_(pe, function() {
        return lg(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), o = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || o) {
        o = I.T, I.T = null, c = ne.p, ne.p = 2, A = Qe, Qe |= 4;
        try {
          Zb(e, n, a);
        } finally {
          Qe = A, ne.p = c, I.T = o;
        }
      }
      Ut = 1, ag(), ig(), sg();
    }
  }
  function ag() {
    if (Ut === 1) {
      Ut = 0;
      var e = Gr, n = gi, a = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || a) {
        a = I.T, I.T = null;
        var o = ne.p;
        ne.p = 2;
        var c = Qe;
        Qe |= 4;
        try {
          Um(n, e);
          var v = Af, A = Vh(e.containerInfo), O = v.focusedElem, M = v.selectionRange;
          if (A !== O && O && O.ownerDocument && Gh(
            O.ownerDocument.documentElement,
            O
          )) {
            if (M !== null && Ku(O)) {
              var H = M.start, Q = M.end;
              if (Q === void 0 && (Q = H), "selectionStart" in O)
                O.selectionStart = H, O.selectionEnd = Math.min(
                  Q,
                  O.value.length
                );
              else {
                var W = O.ownerDocument || document, F = W && W.defaultView || window;
                if (F.getSelection) {
                  var Z = F.getSelection(), Ee = O.textContent.length, Se = Math.min(M.start, Ee), nt = M.end === void 0 ? Se : Math.min(M.end, Ee);
                  !Z.extend && Se > nt && (A = nt, nt = Se, Se = A);
                  var L = Zh(
                    O,
                    Se
                  ), z = Zh(
                    O,
                    nt
                  );
                  if (L && z && (Z.rangeCount !== 1 || Z.anchorNode !== L.node || Z.anchorOffset !== L.offset || Z.focusNode !== z.node || Z.focusOffset !== z.offset)) {
                    var B = W.createRange();
                    B.setStart(L.node, L.offset), Z.removeAllRanges(), Se > nt ? (Z.addRange(B), Z.extend(z.node, z.offset)) : (B.setEnd(z.node, z.offset), Z.addRange(B));
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
              var K = W[O];
              K.element.scrollLeft = K.left, K.element.scrollTop = K.top;
            }
          }
          pl = !!Cf, Af = Cf = null;
        } finally {
          Qe = c, ne.p = o, I.T = a;
        }
      }
      e.current = n, Ut = 2;
    }
  }
  function ig() {
    if (Ut === 2) {
      Ut = 0;
      var e = Gr, n = gi, a = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || a) {
        a = I.T, I.T = null;
        var o = ne.p;
        ne.p = 2;
        var c = Qe;
        Qe |= 4;
        try {
          Lm(e, n.alternate, n);
        } finally {
          Qe = c, ne.p = o, I.T = a;
        }
      }
      Ut = 3;
    }
  }
  function sg() {
    if (Ut === 4 || Ut === 3) {
      Ut = 0, Ze();
      var e = Gr, n = gi, a = vi, o = Ym;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? Ut = 5 : (Ut = 0, gi = Gr = null, og(e, e.pendingLanes));
      var c = e.pendingLanes;
      if (c === 0 && (Zr = null), ju(a), n = n.stateNode, te && typeof te.onCommitFiberRoot == "function")
        try {
          te.onCommitFiberRoot(
            ae,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (o !== null) {
        n = I.T, c = ne.p, ne.p = 2, I.T = null;
        try {
          for (var v = e.onRecoverableError, A = 0; A < o.length; A++) {
            var O = o[A];
            v(O.value, {
              componentStack: O.stack
            });
          }
        } finally {
          I.T = n, ne.p = c;
        }
      }
      (vi & 3) !== 0 && nl(), nr(e), c = e.pendingLanes, (a & 4194090) !== 0 && (c & 42) !== 0 ? e === ff ? xs++ : (xs = 0, ff = e) : xs = 0, Es(0);
    }
  }
  function og(e, n) {
    (e.pooledCacheLanes &= n) === 0 && (n = e.pooledCache, n != null && (e.pooledCache = null, ns(n)));
  }
  function nl(e) {
    return ag(), ig(), sg(), lg();
  }
  function lg() {
    if (Ut !== 5) return !1;
    var e = Gr, n = uf;
    uf = 0;
    var a = ju(vi), o = I.T, c = ne.p;
    try {
      ne.p = 32 > a ? 32 : a, I.T = null, a = cf, cf = null;
      var v = Gr, A = vi;
      if (Ut = 0, gi = Gr = null, vi = 0, (Qe & 6) !== 0) throw Error(s(331));
      var O = Qe;
      if (Qe |= 4, Gm(v.current), qm(
        v,
        v.current,
        A,
        a
      ), Qe = O, Es(0, !1), te && typeof te.onPostCommitFiberRoot == "function")
        try {
          te.onPostCommitFiberRoot(ae, v);
        } catch {
        }
      return !0;
    } finally {
      ne.p = c, I.T = o, og(e, n);
    }
  }
  function ug(e, n, a) {
    n = jn(a, n), n = qc(e.stateNode, n, 2), e = zr(e, n, 2), e !== null && (Ui(e, 2), nr(e));
  }
  function rt(e, n, a) {
    if (e.tag === 3)
      ug(e, e, a);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          ug(
            n,
            e,
            a
          );
          break;
        } else if (n.tag === 1) {
          var o = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Zr === null || !Zr.has(o))) {
            e = jn(a, e), a = hm(2), o = zr(n, a, 2), o !== null && (pm(
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
  function mf(e, n, a) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new Yb();
      var c = /* @__PURE__ */ new Set();
      o.set(n, c);
    } else
      c = o.get(n), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(n, c));
    c.has(a) || (af = !0, c.add(a), e = Kb.bind(null, e, n, a), n.then(e, e));
  }
  function Kb(e, n, a) {
    var o = e.pingCache;
    o !== null && o.delete(n), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, ot === e && (Fe & a) === a && (bt === 4 || bt === 3 && (Fe & 62914560) === Fe && 300 > $e() - lf ? (Qe & 2) === 0 && yi(e, 0) : sf |= a, mi === Fe && (mi = 0)), nr(e);
  }
  function cg(e, n) {
    n === 0 && (n = sh()), e = ei(e, n), e !== null && (Ui(e, n), nr(e));
  }
  function Wb(e) {
    var n = e.memoizedState, a = 0;
    n !== null && (a = n.retryLane), cg(e, a);
  }
  function e_(e, n) {
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
    o !== null && o.delete(n), cg(e, a);
  }
  function t_(e, n) {
    return qn(e, n);
  }
  var rl = null, _i = null, gf = !1, al = !1, vf = !1, wa = 0;
  function nr(e) {
    e !== _i && e.next === null && (_i === null ? rl = _i = e : _i = _i.next = e), al = !0, gf || (gf = !0, r_());
  }
  function Es(e, n) {
    if (!vf && al) {
      vf = !0;
      do
        for (var a = !1, o = rl; o !== null; ) {
          if (e !== 0) {
            var c = o.pendingLanes;
            if (c === 0) var v = 0;
            else {
              var A = o.suspendedLanes, O = o.pingedLanes;
              v = (1 << 31 - Be(42 | e) + 1) - 1, v &= c & ~(A & ~O), v = v & 201326741 ? v & 201326741 | 1 : v ? v | 2 : 0;
            }
            v !== 0 && (a = !0, pg(o, v));
          } else
            v = Fe, v = st(
              o,
              o === ot ? v : 0,
              o.cancelPendingCommit !== null || o.timeoutHandle !== -1
            ), (v & 3) === 0 || tn(o, v) || (a = !0, pg(o, v));
          o = o.next;
        }
      while (a);
      vf = !1;
    }
  }
  function n_() {
    fg();
  }
  function fg() {
    al = gf = !1;
    var e = 0;
    wa !== 0 && (f_() && (e = wa), wa = 0);
    for (var n = $e(), a = null, o = rl; o !== null; ) {
      var c = o.next, v = dg(o, n);
      v === 0 ? (o.next = null, a === null ? rl = c : a.next = c, c === null && (_i = a)) : (a = o, (e !== 0 || (v & 3) !== 0) && (al = !0)), o = c;
    }
    Es(e);
  }
  function dg(e, n) {
    for (var a = e.suspendedLanes, o = e.pingedLanes, c = e.expirationTimes, v = e.pendingLanes & -62914561; 0 < v; ) {
      var A = 31 - Be(v), O = 1 << A, M = c[A];
      M === -1 ? ((O & a) === 0 || (O & o) !== 0) && (c[A] = uo(O, n)) : M <= n && (e.expiredLanes |= O), v &= ~O;
    }
    if (n = ot, a = Fe, a = st(
      e,
      e === n ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o = e.callbackNode, a === 0 || e === n && (Ke === 2 || Ke === 9) || e.cancelPendingCommit !== null)
      return o !== null && o !== null && kt(o), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || tn(e, a)) {
      if (n = a & -a, n === e.callbackPriority) return n;
      switch (o !== null && kt(o), ju(a)) {
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
      return o = hg.bind(null, e), a = qn(a, o), e.callbackPriority = n, e.callbackNode = a, n;
    }
    return o !== null && o !== null && kt(o), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function hg(e, n) {
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
    ), o === 0 ? null : ($m(e, o, n), dg(e, $e()), e.callbackNode != null && e.callbackNode === a ? hg.bind(null, e) : null);
  }
  function pg(e, n) {
    if (nl()) return null;
    $m(e, n, !0);
  }
  function r_() {
    h_(function() {
      (Qe & 6) !== 0 ? qn(
        We,
        n_
      ) : fg();
    });
  }
  function yf() {
    return wa === 0 && (wa = Ba()), wa;
  }
  function mg(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : mo("" + e);
  }
  function gg(e, n) {
    var a = n.ownerDocument.createElement("input");
    return a.name = n.name, a.value = n.value, e.id && a.setAttribute("form", e.id), n.parentNode.insertBefore(a, n), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function a_(e, n, a, o, c) {
    if (n === "submit" && a && a.stateNode === c) {
      var v = mg(
        (c[nn] || null).action
      ), A = o.submitter;
      A && (n = (n = A[nn] || null) ? mg(n.formAction) : A.getAttribute("formAction"), n !== null && (v = n, A = null));
      var O = new bo(
        "action",
        "action",
        null,
        o,
        c
      );
      e.push({
        event: O,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (o.defaultPrevented) {
                if (wa !== 0) {
                  var M = A ? gg(c, A) : new FormData(c);
                  Ic(
                    a,
                    {
                      pending: !0,
                      data: M,
                      method: c.method,
                      action: v
                    },
                    null,
                    M
                  );
                }
              } else
                typeof v == "function" && (O.preventDefault(), M = A ? gg(c, A) : new FormData(c), Ic(
                  a,
                  {
                    pending: !0,
                    data: M,
                    method: c.method,
                    action: v
                  },
                  v,
                  M
                ));
            },
            currentTarget: c
          }
        ]
      });
    }
  }
  for (var bf = 0; bf < nc.length; bf++) {
    var _f = nc[bf], i_ = _f.toLowerCase(), s_ = _f[0].toUpperCase() + _f.slice(1);
    Fn(
      i_,
      "on" + s_
    );
  }
  Fn($h, "onAnimationEnd"), Fn(Jh, "onAnimationIteration"), Fn(Qh, "onAnimationStart"), Fn("dblclick", "onDoubleClick"), Fn("focusin", "onFocus"), Fn("focusout", "onBlur"), Fn(Eb, "onTransitionRun"), Fn(wb, "onTransitionStart"), Fn(Cb, "onTransitionCancel"), Fn(Kh, "onTransitionEnd"), Za("onMouseEnter", ["mouseout", "mouseover"]), Za("onMouseLeave", ["mouseout", "mouseover"]), Za("onPointerEnter", ["pointerout", "pointerover"]), Za("onPointerLeave", ["pointerout", "pointerover"]), la(
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
  ), o_ = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ws)
  );
  function vg(e, n) {
    n = (n & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var o = e[a], c = o.event;
      o = o.listeners;
      e: {
        var v = void 0;
        if (n)
          for (var A = o.length - 1; 0 <= A; A--) {
            var O = o[A], M = O.instance, H = O.currentTarget;
            if (O = O.listener, M !== v && c.isPropagationStopped())
              break e;
            v = O, c.currentTarget = H;
            try {
              v(c);
            } catch (Q) {
              Go(Q);
            }
            c.currentTarget = null, v = M;
          }
        else
          for (A = 0; A < o.length; A++) {
            if (O = o[A], M = O.instance, H = O.currentTarget, O = O.listener, M !== v && c.isPropagationStopped())
              break e;
            v = O, c.currentTarget = H;
            try {
              v(c);
            } catch (Q) {
              Go(Q);
            }
            c.currentTarget = null, v = M;
          }
      }
    }
  }
  function Ie(e, n) {
    var a = n[Mu];
    a === void 0 && (a = n[Mu] = /* @__PURE__ */ new Set());
    var o = e + "__bubble";
    a.has(o) || (yg(n, e, 2, !1), a.add(o));
  }
  function Sf(e, n, a) {
    var o = 0;
    n && (o |= 4), yg(
      a,
      e,
      o,
      n
    );
  }
  var il = "_reactListening" + Math.random().toString(36).slice(2);
  function xf(e) {
    if (!e[il]) {
      e[il] = !0, fh.forEach(function(a) {
        a !== "selectionchange" && (o_.has(a) || Sf(a, !1, e), Sf(a, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[il] || (n[il] = !0, Sf("selectionchange", !1, n));
    }
  }
  function yg(e, n, a, o) {
    switch (qg(n)) {
      case 2:
        var c = R_;
        break;
      case 8:
        c = z_;
        break;
      default:
        c = Lf;
    }
    a = c.bind(
      null,
      n,
      a,
      e
    ), c = void 0, !Fu || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (c = !0), o ? c !== void 0 ? e.addEventListener(n, a, {
      capture: !0,
      passive: c
    }) : e.addEventListener(n, a, !0) : c !== void 0 ? e.addEventListener(n, a, {
      passive: c
    }) : e.addEventListener(n, a, !1);
  }
  function Ef(e, n, a, o, c) {
    var v = o;
    if ((n & 1) === 0 && (n & 2) === 0 && o !== null)
      e: for (; ; ) {
        if (o === null) return;
        var A = o.tag;
        if (A === 3 || A === 4) {
          var O = o.stateNode.containerInfo;
          if (O === c) break;
          if (A === 4)
            for (A = o.return; A !== null; ) {
              var M = A.tag;
              if ((M === 3 || M === 4) && A.stateNode.containerInfo === c)
                return;
              A = A.return;
            }
          for (; O !== null; ) {
            if (A = Ha(O), A === null) return;
            if (M = A.tag, M === 5 || M === 6 || M === 26 || M === 27) {
              o = v = A;
              continue e;
            }
            O = O.parentNode;
          }
        }
        o = o.return;
      }
    Ch(function() {
      var H = v, Q = Hu(a), W = [];
      e: {
        var F = Wh.get(e);
        if (F !== void 0) {
          var Z = bo, Ee = e;
          switch (e) {
            case "keypress":
              if (vo(a) === 0) break e;
            case "keydown":
            case "keyup":
              Z = tb;
              break;
            case "focusin":
              Ee = "focus", Z = Yu;
              break;
            case "focusout":
              Ee = "blur", Z = Yu;
              break;
            case "beforeblur":
            case "afterblur":
              Z = Yu;
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
              Z = Th;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Z = F1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Z = ab;
              break;
            case $h:
            case Jh:
            case Qh:
              Z = V1;
              break;
            case Kh:
              Z = sb;
              break;
            case "scroll":
            case "scrollend":
              Z = H1;
              break;
            case "wheel":
              Z = lb;
              break;
            case "copy":
            case "cut":
            case "paste":
              Z = X1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Z = kh;
              break;
            case "toggle":
            case "beforetoggle":
              Z = cb;
          }
          var Se = (n & 4) !== 0, nt = !Se && (e === "scroll" || e === "scrollend"), L = Se ? F !== null ? F + "Capture" : null : F;
          Se = [];
          for (var z = H, B; z !== null; ) {
            var K = z;
            if (B = K.stateNode, K = K.tag, K !== 5 && K !== 26 && K !== 27 || B === null || L === null || (K = Fi(z, L), K != null && Se.push(
              Cs(z, K, B)
            )), nt) break;
            z = z.return;
          }
          0 < Se.length && (F = new Z(
            F,
            Ee,
            null,
            a,
            Q
          ), W.push({ event: F, listeners: Se }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (F = e === "mouseover" || e === "pointerover", Z = e === "mouseout" || e === "pointerout", F && a !== Uu && (Ee = a.relatedTarget || a.fromElement) && (Ha(Ee) || Ee[Ua]))
            break e;
          if ((Z || F) && (F = Q.window === Q ? Q : (F = Q.ownerDocument) ? F.defaultView || F.parentWindow : window, Z ? (Ee = a.relatedTarget || a.toElement, Z = H, Ee = Ee ? Ha(Ee) : null, Ee !== null && (nt = u(Ee), Se = Ee.tag, Ee !== nt || Se !== 5 && Se !== 27 && Se !== 6) && (Ee = null)) : (Z = null, Ee = H), Z !== Ee)) {
            if (Se = Th, K = "onMouseLeave", L = "onMouseEnter", z = "mouse", (e === "pointerout" || e === "pointerover") && (Se = kh, K = "onPointerLeave", L = "onPointerEnter", z = "pointer"), nt = Z == null ? F : qi(Z), B = Ee == null ? F : qi(Ee), F = new Se(
              K,
              z + "leave",
              Z,
              a,
              Q
            ), F.target = nt, F.relatedTarget = B, K = null, Ha(Q) === H && (Se = new Se(
              L,
              z + "enter",
              Ee,
              a,
              Q
            ), Se.target = B, Se.relatedTarget = nt, K = Se), nt = K, Z && Ee)
              t: {
                for (Se = Z, L = Ee, z = 0, B = Se; B; B = Si(B))
                  z++;
                for (B = 0, K = L; K; K = Si(K))
                  B++;
                for (; 0 < z - B; )
                  Se = Si(Se), z--;
                for (; 0 < B - z; )
                  L = Si(L), B--;
                for (; z--; ) {
                  if (Se === L || L !== null && Se === L.alternate)
                    break t;
                  Se = Si(Se), L = Si(L);
                }
                Se = null;
              }
            else Se = null;
            Z !== null && bg(
              W,
              F,
              Z,
              Se,
              !1
            ), Ee !== null && nt !== null && bg(
              W,
              nt,
              Ee,
              Se,
              !0
            );
          }
        }
        e: {
          if (F = H ? qi(H) : window, Z = F.nodeName && F.nodeName.toLowerCase(), Z === "select" || Z === "input" && F.type === "file")
            var de = Ph;
          else if (Lh(F))
            if (Bh)
              de = _b;
            else {
              de = yb;
              var ze = vb;
            }
          else
            Z = F.nodeName, !Z || Z.toLowerCase() !== "input" || F.type !== "checkbox" && F.type !== "radio" ? H && Bu(H.elementType) && (de = Ph) : de = bb;
          if (de && (de = de(e, H))) {
            Ih(
              W,
              de,
              a,
              Q
            );
            break e;
          }
          ze && ze(e, F, H), e === "focusout" && H && F.type === "number" && H.memoizedProps.value != null && Pu(F, "number", F.value);
        }
        switch (ze = H ? qi(H) : window, e) {
          case "focusin":
            (Lh(ze) || ze.contentEditable === "true") && (Qa = ze, Wu = H, Qi = null);
            break;
          case "focusout":
            Qi = Wu = Qa = null;
            break;
          case "mousedown":
            ec = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ec = !1, Yh(W, a, Q);
            break;
          case "selectionchange":
            if (xb) break;
          case "keydown":
          case "keyup":
            Yh(W, a, Q);
        }
        var ge;
        if ($u)
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
          Ja ? Rh(e, a) && (xe = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (xe = "onCompositionStart");
        xe && (jh && a.locale !== "ko" && (Ja || xe !== "onCompositionStart" ? xe === "onCompositionEnd" && Ja && (ge = Ah()) : (jr = Q, Zu = "value" in jr ? jr.value : jr.textContent, Ja = !0)), ze = sl(H, xe), 0 < ze.length && (xe = new Oh(
          xe,
          e,
          null,
          a,
          Q
        ), W.push({ event: xe, listeners: ze }), ge ? xe.data = ge : (ge = zh(a), ge !== null && (xe.data = ge)))), (ge = db ? hb(e, a) : pb(e, a)) && (xe = sl(H, "onBeforeInput"), 0 < xe.length && (ze = new Oh(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          Q
        ), W.push({
          event: ze,
          listeners: xe
        }), ze.data = ge)), a_(
          W,
          e,
          H,
          a,
          Q
        );
      }
      vg(W, n);
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
      var c = e, v = c.stateNode;
      if (c = c.tag, c !== 5 && c !== 26 && c !== 27 || v === null || (c = Fi(e, a), c != null && o.unshift(
        Cs(e, c, v)
      ), c = Fi(e, n), c != null && o.push(
        Cs(e, c, v)
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
  function bg(e, n, a, o, c) {
    for (var v = n._reactName, A = []; a !== null && a !== o; ) {
      var O = a, M = O.alternate, H = O.stateNode;
      if (O = O.tag, M !== null && M === o) break;
      O !== 5 && O !== 26 && O !== 27 || H === null || (M = H, c ? (H = Fi(a, v), H != null && A.unshift(
        Cs(a, H, M)
      )) : c || (H = Fi(a, v), H != null && A.push(
        Cs(a, H, M)
      ))), a = a.return;
    }
    A.length !== 0 && e.push({ event: n, listeners: A });
  }
  var l_ = /\r\n?/g, u_ = /\u0000|\uFFFD/g;
  function _g(e) {
    return (typeof e == "string" ? e : "" + e).replace(l_, `
`).replace(u_, "");
  }
  function Sg(e, n) {
    return n = _g(n), _g(e) === n;
  }
  function ol() {
  }
  function tt(e, n, a, o, c, v) {
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
        Eh(e, o, v);
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
          typeof v == "function" && (a === "formAction" ? (n !== "input" && tt(e, n, "name", c.name, c, null), tt(
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
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = B1.get(a) || a, co(e, a, o));
    }
  }
  function wf(e, n, a, o, c, v) {
    switch (a) {
      case "style":
        Eh(e, o, v);
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
        if (!dh.hasOwnProperty(a))
          e: {
            if (a[0] === "o" && a[1] === "n" && (c = a.endsWith("Capture"), n = a.slice(2, c ? a.length - 7 : void 0), v = e[nn] || null, v = v != null ? v[a] : null, typeof v == "function" && e.removeEventListener(n, v, c), typeof o == "function")) {
              typeof v != "function" && v !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(n, o, c);
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
        var o = !1, c = !1, v;
        for (v in a)
          if (a.hasOwnProperty(v)) {
            var A = a[v];
            if (A != null)
              switch (v) {
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
                  tt(e, n, v, A, a, null);
              }
          }
        c && tt(e, n, "srcSet", a.srcSet, a, null), o && tt(e, n, "src", a.src, a, null);
        return;
      case "input":
        Ie("invalid", e);
        var O = v = A = c = null, M = null, H = null;
        for (o in a)
          if (a.hasOwnProperty(o)) {
            var Q = a[o];
            if (Q != null)
              switch (o) {
                case "name":
                  c = Q;
                  break;
                case "type":
                  A = Q;
                  break;
                case "checked":
                  M = Q;
                  break;
                case "defaultChecked":
                  H = Q;
                  break;
                case "value":
                  v = Q;
                  break;
                case "defaultValue":
                  O = Q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Q != null)
                    throw Error(s(137, n));
                  break;
                default:
                  tt(e, n, o, Q, a, null);
              }
          }
        bh(
          e,
          v,
          O,
          M,
          H,
          A,
          c,
          !1
        ), ho(e);
        return;
      case "select":
        Ie("invalid", e), o = A = v = null;
        for (c in a)
          if (a.hasOwnProperty(c) && (O = a[c], O != null))
            switch (c) {
              case "value":
                v = O;
                break;
              case "defaultValue":
                A = O;
                break;
              case "multiple":
                o = O;
              default:
                tt(e, n, c, O, a, null);
            }
        n = v, a = A, e.multiple = !!o, n != null ? Va(e, !!o, n, !1) : a != null && Va(e, !!o, a, !0);
        return;
      case "textarea":
        Ie("invalid", e), v = c = o = null;
        for (A in a)
          if (a.hasOwnProperty(A) && (O = a[A], O != null))
            switch (A) {
              case "value":
                o = O;
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
                tt(e, n, A, O, a, null);
            }
        Sh(e, o, c, v), ho(e);
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
        for (H in a)
          if (a.hasOwnProperty(H) && (o = a[H], o != null))
            switch (H) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, n));
              default:
                tt(e, n, H, o, a, null);
            }
        return;
      default:
        if (Bu(n)) {
          for (Q in a)
            a.hasOwnProperty(Q) && (o = a[Q], o !== void 0 && wf(
              e,
              n,
              Q,
              o,
              a,
              void 0
            ));
          return;
        }
    }
    for (O in a)
      a.hasOwnProperty(O) && (o = a[O], o != null && tt(e, n, O, o, a, null));
  }
  function c_(e, n, a, o) {
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
        var c = null, v = null, A = null, O = null, M = null, H = null, Q = null;
        for (Z in a) {
          var W = a[Z];
          if (a.hasOwnProperty(Z) && W != null)
            switch (Z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                M = W;
              default:
                o.hasOwnProperty(Z) || tt(e, n, Z, null, o, W);
            }
        }
        for (var F in o) {
          var Z = o[F];
          if (W = a[F], o.hasOwnProperty(F) && (Z != null || W != null))
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
                Q = Z;
                break;
              case "value":
                A = Z;
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
                Z !== W && tt(
                  e,
                  n,
                  F,
                  Z,
                  o,
                  W
                );
            }
        }
        Iu(
          e,
          A,
          O,
          M,
          H,
          Q,
          v,
          c
        );
        return;
      case "select":
        Z = A = O = F = null;
        for (v in a)
          if (M = a[v], a.hasOwnProperty(v) && M != null)
            switch (v) {
              case "value":
                break;
              case "multiple":
                Z = M;
              default:
                o.hasOwnProperty(v) || tt(
                  e,
                  n,
                  v,
                  null,
                  o,
                  M
                );
            }
        for (c in o)
          if (v = o[c], M = a[c], o.hasOwnProperty(c) && (v != null || M != null))
            switch (c) {
              case "value":
                F = v;
                break;
              case "defaultValue":
                O = v;
                break;
              case "multiple":
                A = v;
              default:
                v !== M && tt(
                  e,
                  n,
                  c,
                  v,
                  o,
                  M
                );
            }
        n = O, a = A, o = Z, F != null ? Va(e, !!a, F, !1) : !!o != !!a && (n != null ? Va(e, !!a, n, !0) : Va(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        Z = F = null;
        for (O in a)
          if (c = a[O], a.hasOwnProperty(O) && c != null && !o.hasOwnProperty(O))
            switch (O) {
              case "value":
                break;
              case "children":
                break;
              default:
                tt(e, n, O, null, o, c);
            }
        for (A in o)
          if (c = o[A], v = a[A], o.hasOwnProperty(A) && (c != null || v != null))
            switch (A) {
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
                c !== v && tt(e, n, A, c, o, v);
            }
        _h(e, F, Z);
        return;
      case "option":
        for (var Ee in a)
          if (F = a[Ee], a.hasOwnProperty(Ee) && F != null && !o.hasOwnProperty(Ee))
            switch (Ee) {
              case "selected":
                e.selected = !1;
                break;
              default:
                tt(
                  e,
                  n,
                  Ee,
                  null,
                  o,
                  F
                );
            }
        for (M in o)
          if (F = o[M], Z = a[M], o.hasOwnProperty(M) && F !== Z && (F != null || Z != null))
            switch (M) {
              case "selected":
                e.selected = F && typeof F != "function" && typeof F != "symbol";
                break;
              default:
                tt(
                  e,
                  n,
                  M,
                  F,
                  o,
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
          F = a[Se], a.hasOwnProperty(Se) && F != null && !o.hasOwnProperty(Se) && tt(e, n, Se, null, o, F);
        for (H in o)
          if (F = o[H], Z = a[H], o.hasOwnProperty(H) && F !== Z && (F != null || Z != null))
            switch (H) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (F != null)
                  throw Error(s(137, n));
                break;
              default:
                tt(
                  e,
                  n,
                  H,
                  F,
                  o,
                  Z
                );
            }
        return;
      default:
        if (Bu(n)) {
          for (var nt in a)
            F = a[nt], a.hasOwnProperty(nt) && F !== void 0 && !o.hasOwnProperty(nt) && wf(
              e,
              n,
              nt,
              void 0,
              o,
              F
            );
          for (Q in o)
            F = o[Q], Z = a[Q], !o.hasOwnProperty(Q) || F === Z || F === void 0 && Z === void 0 || wf(
              e,
              n,
              Q,
              F,
              o,
              Z
            );
          return;
        }
    }
    for (var L in a)
      F = a[L], a.hasOwnProperty(L) && F != null && !o.hasOwnProperty(L) && tt(e, n, L, null, o, F);
    for (W in o)
      F = o[W], Z = a[W], !o.hasOwnProperty(W) || F === Z || F == null && Z == null || tt(e, n, W, F, o, Z);
  }
  var Cf = null, Af = null;
  function ll(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function xg(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Eg(e, n) {
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
  function Nf(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Tf = null;
  function f_() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Tf ? !1 : (Tf = e, !0) : (Tf = null, !1);
  }
  var wg = typeof setTimeout == "function" ? setTimeout : void 0, d_ = typeof clearTimeout == "function" ? clearTimeout : void 0, Cg = typeof Promise == "function" ? Promise : void 0, h_ = typeof queueMicrotask == "function" ? queueMicrotask : typeof Cg < "u" ? function(e) {
    return Cg.resolve(null).then(e).catch(p_);
  } : wg;
  function p_(e) {
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
      var v = a.nextSibling;
      if (e.removeChild(a), v && v.nodeType === 8)
        if (a = v.data, a === "/$") {
          if (0 < o && 8 > o) {
            a = o;
            var A = e.ownerDocument;
            if (a & 1 && As(A.documentElement), a & 2 && As(A.body), a & 4)
              for (a = A.head, As(a), A = a.firstChild; A; ) {
                var O = A.nextSibling, M = A.nodeName;
                A[Hi] || M === "SCRIPT" || M === "STYLE" || M === "LINK" && A.rel.toLowerCase() === "stylesheet" || a.removeChild(A), A = O;
              }
          }
          if (c === 0) {
            e.removeChild(v), Rs(n);
            return;
          }
          c--;
        } else
          a === "$" || a === "$?" || a === "$!" ? c++ : o = a.charCodeAt(0) - 48;
      else o = 0;
      a = v;
    } while (a);
    Rs(n);
  }
  function Of(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var a = n;
      switch (n = n.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Of(a), Du(a);
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
  function m_(e, n, a, o) {
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
      if (e = Gn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function g_(e, n, a) {
    if (n === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Gn(e.nextSibling), e === null)) return null;
    return e;
  }
  function kf(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function v_(e, n) {
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
  var jf = null;
  function Ng(e) {
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
  function Tg(e, n, a) {
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
  function As(e) {
    for (var n = e.attributes; n.length; )
      e.removeAttributeNode(n[0]);
    Du(e);
  }
  var In = /* @__PURE__ */ new Map(), Og = /* @__PURE__ */ new Set();
  function ul(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Sr = ne.d;
  ne.d = {
    f: y_,
    r: b_,
    D: __,
    C: S_,
    L: x_,
    m: E_,
    X: C_,
    S: w_,
    M: A_
  };
  function y_() {
    var e = Sr.f(), n = el();
    return e || n;
  }
  function b_(e) {
    var n = qa(e);
    n !== null && n.tag === 5 && n.type === "form" ? $p(n) : Sr.r(e);
  }
  var xi = typeof document > "u" ? null : document;
  function kg(e, n, a) {
    var o = xi;
    if (o && typeof n == "string" && n) {
      var c = kn(n);
      c = 'link[rel="' + e + '"][href="' + c + '"]', typeof a == "string" && (c += '[crossorigin="' + a + '"]'), Og.has(c) || (Og.add(c), e = { rel: e, crossOrigin: a, href: n }, o.querySelector(c) === null && (n = o.createElement("link"), Ht(n, "link", e), zt(n), o.head.appendChild(n)));
    }
  }
  function __(e) {
    Sr.D(e), kg("dns-prefetch", e, null);
  }
  function S_(e, n) {
    Sr.C(e, n), kg("preconnect", e, n);
  }
  function x_(e, n, a) {
    Sr.L(e, n, a);
    var o = xi;
    if (o && e && n) {
      var c = 'link[rel="preload"][as="' + kn(n) + '"]';
      n === "image" && a && a.imageSrcSet ? (c += '[imagesrcset="' + kn(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (c += '[imagesizes="' + kn(
        a.imageSizes
      ) + '"]')) : c += '[href="' + kn(e) + '"]';
      var v = c;
      switch (n) {
        case "style":
          v = Ei(e);
          break;
        case "script":
          v = wi(e);
      }
      In.has(v) || (e = m(
        {
          rel: "preload",
          href: n === "image" && a && a.imageSrcSet ? void 0 : e,
          as: n
        },
        a
      ), In.set(v, e), o.querySelector(c) !== null || n === "style" && o.querySelector(Ns(v)) || n === "script" && o.querySelector(Ts(v)) || (n = o.createElement("link"), Ht(n, "link", e), zt(n), o.head.appendChild(n)));
    }
  }
  function E_(e, n) {
    Sr.m(e, n);
    var a = xi;
    if (a && e) {
      var o = n && typeof n.as == "string" ? n.as : "script", c = 'link[rel="modulepreload"][as="' + kn(o) + '"][href="' + kn(e) + '"]', v = c;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          v = wi(e);
      }
      if (!In.has(v) && (e = m({ rel: "modulepreload", href: e }, n), In.set(v, e), a.querySelector(c) === null)) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Ts(v)))
              return;
        }
        o = a.createElement("link"), Ht(o, "link", e), zt(o), a.head.appendChild(o);
      }
    }
  }
  function w_(e, n, a) {
    Sr.S(e, n, a);
    var o = xi;
    if (o && e) {
      var c = Fa(o).hoistableStyles, v = Ei(e);
      n = n || "default";
      var A = c.get(v);
      if (!A) {
        var O = { loading: 0, preload: null };
        if (A = o.querySelector(
          Ns(v)
        ))
          O.loading = 5;
        else {
          e = m(
            { rel: "stylesheet", href: e, "data-precedence": n },
            a
          ), (a = In.get(v)) && Mf(e, a);
          var M = A = o.createElement("link");
          zt(M), Ht(M, "link", e), M._p = new Promise(function(H, Q) {
            M.onload = H, M.onerror = Q;
          }), M.addEventListener("load", function() {
            O.loading |= 1;
          }), M.addEventListener("error", function() {
            O.loading |= 2;
          }), O.loading |= 4, cl(A, n, o);
        }
        A = {
          type: "stylesheet",
          instance: A,
          count: 1,
          state: O
        }, c.set(v, A);
      }
    }
  }
  function C_(e, n) {
    Sr.X(e, n);
    var a = xi;
    if (a && e) {
      var o = Fa(a).hoistableScripts, c = wi(e), v = o.get(c);
      v || (v = a.querySelector(Ts(c)), v || (e = m({ src: e, async: !0 }, n), (n = In.get(c)) && Df(e, n), v = a.createElement("script"), zt(v), Ht(v, "link", e), a.head.appendChild(v)), v = {
        type: "script",
        instance: v,
        count: 1,
        state: null
      }, o.set(c, v));
    }
  }
  function A_(e, n) {
    Sr.M(e, n);
    var a = xi;
    if (a && e) {
      var o = Fa(a).hoistableScripts, c = wi(e), v = o.get(c);
      v || (v = a.querySelector(Ts(c)), v || (e = m({ src: e, async: !0, type: "module" }, n), (n = In.get(c)) && Df(e, n), v = a.createElement("script"), zt(v), Ht(v, "link", e), a.head.appendChild(v)), v = {
        type: "script",
        instance: v,
        count: 1,
        state: null
      }, o.set(c, v));
    }
  }
  function jg(e, n, a, o) {
    var c = (c = $.current) ? ul(c) : null;
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
          var v = Fa(
            c
          ).hoistableStyles, A = v.get(e);
          if (A || (c = c.ownerDocument || c, A = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, v.set(e, A), (v = c.querySelector(
            Ns(e)
          )) && !v._p && (A.instance = v, A.state.loading = 5), In.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, In.set(e, a), v || N_(
            c,
            e,
            a,
            A.state
          ))), n && o === null)
            throw Error(s(528, ""));
          return A;
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
  function Ns(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Mg(e) {
    return m({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function N_(e, n, a, o) {
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
  function Dg(e, n, a) {
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
          var v = e.querySelector(
            Ns(c)
          );
          if (v)
            return n.state.loading |= 4, n.instance = v, zt(v), v;
          o = Mg(a), (c = In.get(c)) && Mf(o, c), v = (e.ownerDocument || e).createElement("link"), zt(v);
          var A = v;
          return A._p = new Promise(function(O, M) {
            A.onload = O, A.onerror = M;
          }), Ht(v, "link", o), n.state.loading |= 4, cl(v, a.precedence, e), n.instance = v;
        case "script":
          return v = wi(a.src), (c = e.querySelector(
            Ts(v)
          )) ? (n.instance = c, zt(c), c) : (o = a, (c = In.get(v)) && (o = m({}, a), Df(o, c)), e = e.ownerDocument || e, c = e.createElement("script"), zt(c), Ht(c, "link", o), e.head.appendChild(c), n.instance = c);
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
    ), c = o.length ? o[o.length - 1] : null, v = c, A = 0; A < o.length; A++) {
      var O = o[A];
      if (O.dataset.precedence === n) v = O;
      else if (v !== c) break;
    }
    v ? v.parentNode.insertBefore(e, v.nextSibling) : (n = a.nodeType === 9 ? a.head : a, n.insertBefore(e, n.firstChild));
  }
  function Mf(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.title == null && (e.title = n.title);
  }
  function Df(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.integrity == null && (e.integrity = n.integrity);
  }
  var fl = null;
  function Rg(e, n, a) {
    if (fl === null) {
      var o = /* @__PURE__ */ new Map(), c = fl = /* @__PURE__ */ new Map();
      c.set(a, o);
    } else
      c = fl, o = c.get(a), o || (o = /* @__PURE__ */ new Map(), c.set(a, o));
    if (o.has(e)) return o;
    for (o.set(e, null), a = a.getElementsByTagName(e), c = 0; c < a.length; c++) {
      var v = a[c];
      if (!(v[Hi] || v[Zt] || e === "link" && v.getAttribute("rel") === "stylesheet") && v.namespaceURI !== "http://www.w3.org/2000/svg") {
        var A = v.getAttribute(n) || "";
        A = e + A;
        var O = o.get(A);
        O ? O.push(v) : o.set(A, [v]);
      }
    }
    return o;
  }
  function zg(e, n, a) {
    e = e.ownerDocument || e, e.head.insertBefore(
      a,
      n === "title" ? e.querySelector("head > title") : null
    );
  }
  function T_(e, n, a) {
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
  function Lg(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Os = null;
  function O_() {
  }
  function k_(e, n, a) {
    if (Os === null) throw Error(s(475));
    var o = Os;
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var c = Ei(a.href), v = e.querySelector(
          Ns(c)
        );
        if (v) {
          e = v._p, e !== null && typeof e == "object" && typeof e.then == "function" && (o.count++, o = dl.bind(o), e.then(o, o)), n.state.loading |= 4, n.instance = v, zt(v);
          return;
        }
        v = e.ownerDocument || e, a = Mg(a), (c = In.get(c)) && Mf(a, c), v = v.createElement("link"), zt(v);
        var A = v;
        A._p = new Promise(function(O, M) {
          A.onload = O, A.onerror = M;
        }), Ht(v, "link", a), n.instance = v;
      }
      o.stylesheets === null && (o.stylesheets = /* @__PURE__ */ new Map()), o.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (o.count++, n = dl.bind(o), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  function j_() {
    if (Os === null) throw Error(s(475));
    var e = Os;
    return e.stylesheets && e.count === 0 && Rf(e, e.stylesheets), 0 < e.count ? function(n) {
      var a = setTimeout(function() {
        if (e.stylesheets && Rf(e, e.stylesheets), e.unsuspend) {
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
      if (this.stylesheets) Rf(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var hl = null;
  function Rf(e, n) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, hl = /* @__PURE__ */ new Map(), n.forEach(M_, e), hl = null, dl.call(e));
  }
  function M_(e, n) {
    if (!(n.state.loading & 4)) {
      var a = hl.get(e);
      if (a) var o = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), hl.set(e, a);
        for (var c = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), v = 0; v < c.length; v++) {
          var A = c[v];
          (A.nodeName === "LINK" || A.getAttribute("media") !== "not all") && (a.set(A.dataset.precedence, A), o = A);
        }
        o && a.set(null, o);
      }
      c = n.instance, A = c.getAttribute("data-precedence"), v = a.get(A) || o, v === o && a.set(null, c), a.set(A, c), this.count++, o = dl.bind(this), c.addEventListener("load", o), c.addEventListener("error", o), v ? v.parentNode.insertBefore(c, v.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(c, e.firstChild)), n.state.loading |= 4;
    }
  }
  var ks = {
    $$typeof: k,
    Provider: null,
    Consumer: null,
    _currentValue: ce,
    _currentValue2: ce,
    _threadCount: 0
  };
  function D_(e, n, a, o, c, v, A, O) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ou(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ou(0), this.hiddenUpdates = Ou(null), this.identifierPrefix = o, this.onUncaughtError = c, this.onCaughtError = v, this.onRecoverableError = A, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = O, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Ig(e, n, a, o, c, v, A, O, M, H, Q, W) {
    return e = new D_(
      e,
      n,
      a,
      A,
      O,
      M,
      H,
      W
    ), n = 1, v === !0 && (n |= 24), v = vn(3, null, null, n), e.current = v, v.stateNode = e, n = pc(), n.refCount++, e.pooledCache = n, n.refCount++, v.memoizedState = {
      element: o,
      isDehydrated: a,
      cache: n
    }, yc(v), e;
  }
  function Pg(e) {
    return e ? (e = ti, e) : ti;
  }
  function Bg(e, n, a, o, c, v) {
    c = Pg(c), o.context === null ? o.context = c : o.pendingContext = c, o = Rr(n), o.payload = { element: a }, v = v === void 0 ? null : v, v !== null && (o.callback = v), a = zr(e, o, n), a !== null && (xn(a, e, n), ss(a, e, n));
  }
  function Ug(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < n ? a : n;
    }
  }
  function zf(e, n) {
    Ug(e, n), (e = e.alternate) && Ug(e, n);
  }
  function Hg(e) {
    if (e.tag === 13) {
      var n = ei(e, 67108864);
      n !== null && xn(n, e, 67108864), zf(e, 67108864);
    }
  }
  var pl = !0;
  function R_(e, n, a, o) {
    var c = I.T;
    I.T = null;
    var v = ne.p;
    try {
      ne.p = 2, Lf(e, n, a, o);
    } finally {
      ne.p = v, I.T = c;
    }
  }
  function z_(e, n, a, o) {
    var c = I.T;
    I.T = null;
    var v = ne.p;
    try {
      ne.p = 8, Lf(e, n, a, o);
    } finally {
      ne.p = v, I.T = c;
    }
  }
  function Lf(e, n, a, o) {
    if (pl) {
      var c = If(o);
      if (c === null)
        Ef(
          e,
          n,
          o,
          ml,
          a
        ), Fg(e, o);
      else if (I_(
        c,
        e,
        n,
        a,
        o
      ))
        o.stopPropagation();
      else if (Fg(e, o), n & 4 && -1 < L_.indexOf(e)) {
        for (; c !== null; ) {
          var v = qa(c);
          if (v !== null)
            switch (v.tag) {
              case 3:
                if (v = v.stateNode, v.current.memoizedState.isDehydrated) {
                  var A = qe(v.pendingLanes);
                  if (A !== 0) {
                    var O = v;
                    for (O.pendingLanes |= 2, O.entangledLanes |= 2; A; ) {
                      var M = 1 << 31 - Be(A);
                      O.entanglements[1] |= M, A &= ~M;
                    }
                    nr(v), (Qe & 6) === 0 && (Ko = $e() + 500, Es(0));
                  }
                }
                break;
              case 13:
                O = ei(v, 2), O !== null && xn(O, v, 2), el(), zf(v, 2);
            }
          if (v = If(o), v === null && Ef(
            e,
            n,
            o,
            ml,
            a
          ), v === c) break;
          c = v;
        }
        c !== null && o.stopPropagation();
      } else
        Ef(
          e,
          n,
          o,
          null,
          a
        );
    }
  }
  function If(e) {
    return e = Hu(e), Pf(e);
  }
  var ml = null;
  function Pf(e) {
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
  function qg(e) {
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
  var Bf = !1, Xr = null, $r = null, Jr = null, js = /* @__PURE__ */ new Map(), Ms = /* @__PURE__ */ new Map(), Qr = [], L_ = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Fg(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        Xr = null;
        break;
      case "dragenter":
      case "dragleave":
        $r = null;
        break;
      case "mouseover":
      case "mouseout":
        Jr = null;
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
  function Ds(e, n, a, o, c, v) {
    return e === null || e.nativeEvent !== v ? (e = {
      blockedOn: n,
      domEventName: a,
      eventSystemFlags: o,
      nativeEvent: v,
      targetContainers: [c]
    }, n !== null && (n = qa(n), n !== null && Hg(n)), e) : (e.eventSystemFlags |= o, n = e.targetContainers, c !== null && n.indexOf(c) === -1 && n.push(c), e);
  }
  function I_(e, n, a, o, c) {
    switch (n) {
      case "focusin":
        return Xr = Ds(
          Xr,
          e,
          n,
          a,
          o,
          c
        ), !0;
      case "dragenter":
        return $r = Ds(
          $r,
          e,
          n,
          a,
          o,
          c
        ), !0;
      case "mouseover":
        return Jr = Ds(
          Jr,
          e,
          n,
          a,
          o,
          c
        ), !0;
      case "pointerover":
        var v = c.pointerId;
        return js.set(
          v,
          Ds(
            js.get(v) || null,
            e,
            n,
            a,
            o,
            c
          )
        ), !0;
      case "gotpointercapture":
        return v = c.pointerId, Ms.set(
          v,
          Ds(
            Ms.get(v) || null,
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
  function Zg(e) {
    var n = Ha(e.target);
    if (n !== null) {
      var a = u(n);
      if (a !== null) {
        if (n = a.tag, n === 13) {
          if (n = f(a), n !== null) {
            e.blockedOn = n, k1(e.priority, function() {
              if (a.tag === 13) {
                var o = Sn();
                o = ku(o);
                var c = ei(a, o);
                c !== null && xn(c, a, o), zf(a, o);
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
      var a = If(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var o = new a.constructor(
          a.type,
          a
        );
        Uu = o, a.target.dispatchEvent(o), Uu = null;
      } else
        return n = qa(a), n !== null && Hg(n), e.blockedOn = a, !1;
      n.shift();
    }
    return !0;
  }
  function Gg(e, n, a) {
    gl(e) && a.delete(n);
  }
  function P_() {
    Bf = !1, Xr !== null && gl(Xr) && (Xr = null), $r !== null && gl($r) && ($r = null), Jr !== null && gl(Jr) && (Jr = null), js.forEach(Gg), Ms.forEach(Gg);
  }
  function vl(e, n) {
    e.blockedOn === n && (e.blockedOn = null, Bf || (Bf = !0, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      P_
    )));
  }
  var yl = null;
  function Vg(e) {
    yl !== e && (yl = e, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      function() {
        yl === e && (yl = null);
        for (var n = 0; n < e.length; n += 3) {
          var a = e[n], o = e[n + 1], c = e[n + 2];
          if (typeof o != "function") {
            if (Pf(o || a) === null)
              continue;
            break;
          }
          var v = qa(a);
          v !== null && (e.splice(n, 3), n -= 3, Ic(
            v,
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
    Xr !== null && vl(Xr, e), $r !== null && vl($r, e), Jr !== null && vl(Jr, e), js.forEach(n), Ms.forEach(n);
    for (var a = 0; a < Qr.length; a++) {
      var o = Qr[a];
      o.blockedOn === e && (o.blockedOn = null);
    }
    for (; 0 < Qr.length && (a = Qr[0], a.blockedOn === null); )
      Zg(a), a.blockedOn === null && Qr.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (o = 0; o < a.length; o += 3) {
        var c = a[o], v = a[o + 1], A = c[nn] || null;
        if (typeof v == "function")
          A || Vg(a);
        else if (A) {
          var O = null;
          if (v && v.hasAttribute("formAction")) {
            if (c = v, A = v[nn] || null)
              O = A.formAction;
            else if (Pf(c) !== null) continue;
          } else O = A.action;
          typeof O == "function" ? a[o + 1] = O : (a.splice(o, 3), o -= 3), Vg(a);
        }
      }
  }
  function Uf(e) {
    this._internalRoot = e;
  }
  bl.prototype.render = Uf.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(s(409));
    var a = n.current, o = Sn();
    Bg(a, o, e, n, null, null);
  }, bl.prototype.unmount = Uf.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      Bg(e.current, 2, null, e, null, null), el(), n[Ua] = null;
    }
  };
  function bl(e) {
    this._internalRoot = e;
  }
  bl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = uh();
      e = { blockedOn: null, target: e, priority: n };
      for (var a = 0; a < Qr.length && n !== 0 && n < Qr[a].priority; a++) ;
      Qr.splice(a, 0, e), a === 0 && Zg(e);
    }
  };
  var Yg = r.version;
  if (Yg !== "19.1.1")
    throw Error(
      s(
        527,
        Yg,
        "19.1.1"
      )
    );
  ne.findDOMNode = function(e) {
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = d(n), e = e !== null ? g(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var B_ = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: I,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var _l = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!_l.isDisabled && _l.supportsFiber)
      try {
        ae = _l.inject(
          B_
        ), te = _l;
      } catch {
      }
  }
  return Ps.createRoot = function(e, n) {
    if (!l(e)) throw Error(s(299));
    var a = !1, o = "", c = um, v = cm, A = fm, O = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onUncaughtError !== void 0 && (c = n.onUncaughtError), n.onCaughtError !== void 0 && (v = n.onCaughtError), n.onRecoverableError !== void 0 && (A = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (O = n.unstable_transitionCallbacks)), n = Ig(
      e,
      1,
      !1,
      null,
      null,
      a,
      o,
      c,
      v,
      A,
      O,
      null
    ), e[Ua] = n.current, xf(e), new Uf(n);
  }, Ps.hydrateRoot = function(e, n, a) {
    if (!l(e)) throw Error(s(299));
    var o = !1, c = "", v = um, A = cm, O = fm, M = null, H = null;
    return a != null && (a.unstable_strictMode === !0 && (o = !0), a.identifierPrefix !== void 0 && (c = a.identifierPrefix), a.onUncaughtError !== void 0 && (v = a.onUncaughtError), a.onCaughtError !== void 0 && (A = a.onCaughtError), a.onRecoverableError !== void 0 && (O = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (M = a.unstable_transitionCallbacks), a.formState !== void 0 && (H = a.formState)), n = Ig(
      e,
      1,
      !0,
      n,
      a ?? null,
      o,
      c,
      v,
      A,
      O,
      M,
      H
    ), n.context = Pg(null), a = n.current, o = Sn(), o = ku(o), c = Rr(o), c.callback = null, zr(a, c, o), a = o, n.current.lanes = a, Ui(n, a), nr(n), e[Ua] = n.current, xf(e), new bl(n);
  }, Ps.version = "19.1.1", Ps;
}
var lv;
function m2() {
  if (lv) return Zf.exports;
  lv = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return t(), Zf.exports = p2(), Zf.exports;
}
var g2 = m2();
const uv = /* @__PURE__ */ qd(g2);
var v2 = Object.defineProperty, y2 = (t, r, i) => r in t ? v2(t, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[r] = i, b2 = (t, r, i) => y2(t, r + "", i);
class n0 extends Error {
  constructor(r, i) {
    super(r), b2(this, "data"), this.data = i;
  }
  toString() {
    return this.message;
  }
}
async function _2(t, r) {
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
    throw new n0(u.statusText, u);
  await i.getCharacters();
}
async function S2(t, r) {
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
    throw new n0(f.message || `Request failed with status ${u.status}`, u);
  }
  await s.getCharacters();
}
var x2 = Object.defineProperty, E2 = (t, r, i) => r in t ? x2(t, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[r] = i, cv = (t, r, i) => E2(t, typeof r != "symbol" ? r + "" : r, i);
class r0 {
  constructor(r, i) {
    cv(this, "settingsKey"), cv(this, "defaultSettings"), this.settingsKey = r, this.defaultSettings = i;
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
      let d = function(g, m) {
        let S = !1;
        for (const y of Object.keys(m))
          g[y] === void 0 ? (g[y] = m[y], S = !0) : typeof m[y] == "object" && m[y] !== null && (g[y] = g[y] || {}, d(g[y], m[y]) && (S = !0));
        return S;
      };
      s && u.version !== s && (p.version.changed = !0, p.version.new = s, u.version = s), l && l !== "*" && u.formatVersion !== l && (p.formatVersion.changed = !0, p.formatVersion.new = l, u.formatVersion = l), (d(u, this.defaultSettings) || p.version.changed || p.formatVersion.changed) && this.saveSettings();
    } else if (Array.isArray(i)) {
      s && !u.version && (u.version = s, p.version.changed = !0, p.version.new = s), l && !u.formatVersion && (u.formatVersion = l, p.formatVersion.changed = !0, p.formatVersion.new = l);
      let d = structuredClone(u), g = u.formatVersion;
      try {
        let m;
        do {
          m = !1;
          let S = i.find((y) => y.from === g);
          if (S && S.to > g)
            d = await S.action(d), g = S.to, d.formatVersion = S.to, m = !0;
          else
            for (const y of i)
              if (y.from === "*" && y.to > g && g !== y.to) {
                d = await y.action(d), g = y.to, d.formatVersion = y.to, m = !0;
                break;
              }
        } while (m);
        if (g !== u.formatVersion) {
          p.formatVersion.changed = !0, p.formatVersion.new = g;
          const S = this.defaultSettings.version;
          S && (d.version = S);
        }
        if (p.formatVersion.changed) {
          for (const S of Object.keys(u))
            delete u[S];
          Object.assign(u, d), this.saveSettings();
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
function Nr(t) {
  return Array.isArray ? Array.isArray(t) : s0(t) === "[object Array]";
}
function w2(t) {
  if (typeof t == "string")
    return t;
  let r = t + "";
  return r == "0" && 1 / t == -1 / 0 ? "-0" : r;
}
function C2(t) {
  return t == null ? "" : w2(t);
}
function ar(t) {
  return typeof t == "string";
}
function a0(t) {
  return typeof t == "number";
}
function A2(t) {
  return t === !0 || t === !1 || N2(t) && s0(t) == "[object Boolean]";
}
function i0(t) {
  return typeof t == "object";
}
function N2(t) {
  return i0(t) && t !== null;
}
function An(t) {
  return t != null;
}
function Xf(t) {
  return !t.trim().length;
}
function s0(t) {
  return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
}
const T2 = "Incorrect 'index' type", O2 = (t) => `Invalid value for key ${t}`, k2 = (t) => `Pattern length exceeds max of ${t}.`, j2 = (t) => `Missing ${t} property in key`, M2 = (t) => `Property 'weight' in key '${t}' must be a positive integer`, fv = Object.prototype.hasOwnProperty;
class D2 {
  constructor(r) {
    this._keys = [], this._keyMap = {};
    let i = 0;
    r.forEach((s) => {
      let l = o0(s);
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
function o0(t) {
  let r = null, i = null, s = null, l = 1, u = null;
  if (ar(t) || Nr(t))
    s = t, r = dv(t), i = yd(t);
  else {
    if (!fv.call(t, "name"))
      throw new Error(j2("name"));
    const f = t.name;
    if (s = f, fv.call(t, "weight") && (l = t.weight, l <= 0))
      throw new Error(M2(f));
    r = dv(f), i = yd(f), u = t.getFn;
  }
  return { path: r, id: i, weight: l, src: s, getFn: u };
}
function dv(t) {
  return Nr(t) ? t : t.split(".");
}
function yd(t) {
  return Nr(t) ? t.join(".") : t;
}
function R2(t, r) {
  let i = [], s = !1;
  const l = (u, f, p) => {
    if (An(u))
      if (!f[p])
        i.push(u);
      else {
        let d = f[p];
        const g = u[d];
        if (!An(g))
          return;
        if (p === f.length - 1 && (ar(g) || a0(g) || A2(g)))
          i.push(C2(g));
        else if (Nr(g)) {
          s = !0;
          for (let m = 0, S = g.length; m < S; m += 1)
            l(g[m], f, p + 1);
        } else f.length && l(g, f, p + 1);
      }
  };
  return l(t, ar(r) ? r.split(".") : r, 0), s ? i : i[0];
}
const z2 = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: !1,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: !1,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
}, L2 = {
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
}, I2 = {
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
}, P2 = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: !1,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: R2,
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
  ...L2,
  ...z2,
  ...I2,
  ...P2
};
const B2 = /[^ ]+/g;
function U2(t = 1, r = 3) {
  const i = /* @__PURE__ */ new Map(), s = Math.pow(10, r);
  return {
    get(l) {
      const u = l.match(B2).length;
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
class Zd {
  constructor({
    getFn: r = Ce.getFn,
    fieldNormWeight: i = Ce.fieldNormWeight
  } = {}) {
    this.norm = U2(i, 3), this.getFn = r, this.isCreated = !1, this.setIndexRecords();
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
    if (!An(r) || Xf(r))
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
      if (An(f)) {
        if (Nr(f)) {
          let p = [];
          const d = [{ nestedArrIndex: -1, value: f }];
          for (; d.length; ) {
            const { nestedArrIndex: g, value: m } = d.pop();
            if (An(m))
              if (ar(m) && !Xf(m)) {
                let S = {
                  v: m,
                  i: g,
                  n: this.norm.get(m)
                };
                p.push(S);
              } else Nr(m) && m.forEach((S, y) => {
                d.push({
                  nestedArrIndex: y,
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
function l0(t, r, { getFn: i = Ce.getFn, fieldNormWeight: s = Ce.fieldNormWeight } = {}) {
  const l = new Zd({ getFn: i, fieldNormWeight: s });
  return l.setKeys(t.map(o0)), l.setSources(r), l.create(), l;
}
function H2(t, { getFn: r = Ce.getFn, fieldNormWeight: i = Ce.fieldNormWeight } = {}) {
  const { keys: s, records: l } = t, u = new Zd({ getFn: r, fieldNormWeight: i });
  return u.setKeys(s), u.setIndexRecords(l), u;
}
function Sl(t, {
  errors: r = 0,
  currentLocation: i = 0,
  expectedLocation: s = 0,
  distance: l = Ce.distance,
  ignoreLocation: u = Ce.ignoreLocation
} = {}) {
  const f = r / t.length;
  if (u)
    return f;
  const p = Math.abs(s - i);
  return l ? f + p / l : p ? 1 : f;
}
function q2(t = [], r = Ce.minMatchCharLength) {
  let i = [], s = -1, l = -1, u = 0;
  for (let f = t.length; u < f; u += 1) {
    let p = t[u];
    p && s === -1 ? s = u : !p && s !== -1 && (l = u - 1, l - s + 1 >= r && i.push([s, l]), s = -1);
  }
  return t[u - 1] && u - s >= r && i.push([s, u - 1]), i;
}
const ja = 32;
function F2(t, r, i, {
  location: s = Ce.location,
  distance: l = Ce.distance,
  threshold: u = Ce.threshold,
  findAllMatches: f = Ce.findAllMatches,
  minMatchCharLength: p = Ce.minMatchCharLength,
  includeMatches: d = Ce.includeMatches,
  ignoreLocation: g = Ce.ignoreLocation
} = {}) {
  if (r.length > ja)
    throw new Error(k2(ja));
  const m = r.length, S = t.length, y = Math.max(0, Math.min(s, S));
  let b = u, h = y;
  const x = p > 1 || d, w = x ? Array(S) : [];
  let T;
  for (; (T = t.indexOf(r, h)) > -1; ) {
    let R = Sl(r, {
      currentLocation: T,
      expectedLocation: y,
      distance: l,
      ignoreLocation: g
    });
    if (b = Math.min(R, b), h = T + m, x) {
      let q = 0;
      for (; q < m; )
        w[T + q] = 1, q += 1;
    }
  }
  h = -1;
  let E = [], k = 1, C = m + S;
  const N = 1 << m - 1;
  for (let R = 0; R < m; R += 1) {
    let q = 0, V = C;
    for (; q < V; )
      Sl(r, {
        errors: R,
        currentLocation: y + V,
        expectedLocation: y,
        distance: l,
        ignoreLocation: g
      }) <= b ? q = V : C = V, V = Math.floor((C - q) / 2 + q);
    C = V;
    let U = Math.max(1, y - V + 1), Y = f ? S : Math.min(y + V, S) + m, G = Array(Y + 2);
    G[Y + 1] = (1 << R) - 1;
    for (let fe = Y; fe >= U; fe -= 1) {
      let ue = fe - 1, I = i[t.charAt(ue)];
      if (x && (w[ue] = +!!I), G[fe] = (G[fe + 1] << 1 | 1) & I, R && (G[fe] |= (E[fe + 1] | E[fe]) << 1 | 1 | E[fe + 1]), G[fe] & N && (k = Sl(r, {
        errors: R,
        currentLocation: ue,
        expectedLocation: y,
        distance: l,
        ignoreLocation: g
      }), k <= b)) {
        if (b = k, h = ue, h <= y)
          break;
        U = Math.max(1, 2 * y - h);
      }
    }
    if (Sl(r, {
      errors: R + 1,
      currentLocation: y,
      expectedLocation: y,
      distance: l,
      ignoreLocation: g
    }) > b)
      break;
    E = G;
  }
  const j = {
    isMatch: h >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, k)
  };
  if (x) {
    const R = q2(w, p);
    R.length ? d && (j.indices = R) : j.isMatch = !1;
  }
  return j;
}
function Z2(t) {
  let r = {};
  for (let i = 0, s = t.length; i < s; i += 1) {
    const l = t.charAt(i);
    r[l] = (r[l] || 0) | 1 << s - i - 1;
  }
  return r;
}
const fu = String.prototype.normalize ? ((t) => t.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((t) => t);
class u0 {
  constructor(r, {
    location: i = Ce.location,
    threshold: s = Ce.threshold,
    distance: l = Ce.distance,
    includeMatches: u = Ce.includeMatches,
    findAllMatches: f = Ce.findAllMatches,
    minMatchCharLength: p = Ce.minMatchCharLength,
    isCaseSensitive: d = Ce.isCaseSensitive,
    ignoreDiacritics: g = Ce.ignoreDiacritics,
    ignoreLocation: m = Ce.ignoreLocation
  } = {}) {
    if (this.options = {
      location: i,
      threshold: s,
      distance: l,
      includeMatches: u,
      findAllMatches: f,
      minMatchCharLength: p,
      isCaseSensitive: d,
      ignoreDiacritics: g,
      ignoreLocation: m
    }, r = d ? r : r.toLowerCase(), r = g ? fu(r) : r, this.pattern = r, this.chunks = [], !this.pattern.length)
      return;
    const S = (b, h) => {
      this.chunks.push({
        pattern: b,
        alphabet: Z2(b),
        startIndex: h
      });
    }, y = this.pattern.length;
    if (y > ja) {
      let b = 0;
      const h = y % ja, x = y - h;
      for (; b < x; )
        S(this.pattern.substr(b, ja), b), b += ja;
      if (h) {
        const w = y - ja;
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
      findAllMatches: d,
      minMatchCharLength: g,
      ignoreLocation: m
    } = this.options;
    let S = [], y = 0, b = !1;
    this.chunks.forEach(({ pattern: x, alphabet: w, startIndex: T }) => {
      const { isMatch: E, score: k, indices: C } = F2(r, x, w, {
        location: u + T,
        distance: f,
        threshold: p,
        findAllMatches: d,
        minMatchCharLength: g,
        includeMatches: l,
        ignoreLocation: m
      });
      E && (b = !0), y += k, E && C && (S = [...S, ...C]);
    });
    let h = {
      isMatch: b,
      score: b ? y / this.chunks.length : 1
    };
    return b && l && (h.indices = S), h;
  }
}
class ia {
  constructor(r) {
    this.pattern = r;
  }
  static isMultiMatch(r) {
    return hv(r, this.multiRegex);
  }
  static isSingleMatch(r) {
    return hv(r, this.singleRegex);
  }
  search() {
  }
}
function hv(t, r) {
  const i = t.match(r);
  return i ? i[1] : null;
}
class G2 extends ia {
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
class V2 extends ia {
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
class Y2 extends ia {
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
class $2 extends ia {
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
class c0 extends ia {
  constructor(r, {
    location: i = Ce.location,
    threshold: s = Ce.threshold,
    distance: l = Ce.distance,
    includeMatches: u = Ce.includeMatches,
    findAllMatches: f = Ce.findAllMatches,
    minMatchCharLength: p = Ce.minMatchCharLength,
    isCaseSensitive: d = Ce.isCaseSensitive,
    ignoreDiacritics: g = Ce.ignoreDiacritics,
    ignoreLocation: m = Ce.ignoreLocation
  } = {}) {
    super(r), this._bitapSearch = new u0(r, {
      location: i,
      threshold: s,
      distance: l,
      includeMatches: u,
      findAllMatches: f,
      minMatchCharLength: p,
      isCaseSensitive: d,
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
class f0 extends ia {
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
const bd = [
  G2,
  f0,
  Y2,
  X2,
  J2,
  $2,
  V2,
  c0
], pv = bd.length, Q2 = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, K2 = "|";
function W2(t, r = {}) {
  return t.split(K2).map((i) => {
    let s = i.trim().split(Q2).filter((u) => u && !!u.trim()), l = [];
    for (let u = 0, f = s.length; u < f; u += 1) {
      const p = s[u];
      let d = !1, g = -1;
      for (; !d && ++g < pv; ) {
        const m = bd[g];
        let S = m.isMultiMatch(p);
        S && (l.push(new m(S, r)), d = !0);
      }
      if (!d)
        for (g = -1; ++g < pv; ) {
          const m = bd[g];
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
const eS = /* @__PURE__ */ new Set([c0.type, f0.type]);
class tS {
  constructor(r, {
    isCaseSensitive: i = Ce.isCaseSensitive,
    ignoreDiacritics: s = Ce.ignoreDiacritics,
    includeMatches: l = Ce.includeMatches,
    minMatchCharLength: u = Ce.minMatchCharLength,
    ignoreLocation: f = Ce.ignoreLocation,
    findAllMatches: p = Ce.findAllMatches,
    location: d = Ce.location,
    threshold: g = Ce.threshold,
    distance: m = Ce.distance
  } = {}) {
    this.query = null, this.options = {
      isCaseSensitive: i,
      ignoreDiacritics: s,
      includeMatches: l,
      minMatchCharLength: u,
      findAllMatches: p,
      ignoreLocation: f,
      location: d,
      threshold: g,
      distance: m
    }, r = i ? r : r.toLowerCase(), r = s ? fu(r) : r, this.pattern = r, this.query = W2(this.pattern, this.options);
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
    let f = 0, p = [], d = 0;
    for (let g = 0, m = i.length; g < m; g += 1) {
      const S = i[g];
      p.length = 0, f = 0;
      for (let y = 0, b = S.length; y < b; y += 1) {
        const h = S[y], { isMatch: x, indices: w, score: T } = h.search(r);
        if (x) {
          if (f += 1, d += T, s) {
            const E = h.constructor.type;
            eS.has(E) ? p = [...p, ...w] : p.push(w);
          }
        } else {
          d = 0, f = 0, p.length = 0;
          break;
        }
      }
      if (f) {
        let y = {
          isMatch: !0,
          score: d / f
        };
        return s && (y.indices = p), y;
      }
    }
    return {
      isMatch: !1,
      score: 1
    };
  }
}
const _d = [];
function nS(...t) {
  _d.push(...t);
}
function Sd(t, r) {
  for (let i = 0, s = _d.length; i < s; i += 1) {
    let l = _d[i];
    if (l.condition(t, r))
      return new l(t, r);
  }
  return new u0(t, r);
}
const du = {
  AND: "$and",
  OR: "$or"
}, xd = {
  PATH: "$path",
  PATTERN: "$val"
}, Ed = (t) => !!(t[du.AND] || t[du.OR]), rS = (t) => !!t[xd.PATH], aS = (t) => !Nr(t) && i0(t) && !Ed(t), mv = (t) => ({
  [du.AND]: Object.keys(t).map((r) => ({
    [r]: t[r]
  }))
});
function d0(t, r, { auto: i = !0 } = {}) {
  const s = (l) => {
    let u = Object.keys(l);
    const f = rS(l);
    if (!f && u.length > 1 && !Ed(l))
      return s(mv(l));
    if (aS(l)) {
      const d = f ? l[xd.PATH] : u[0], g = f ? l[xd.PATTERN] : l[d];
      if (!ar(g))
        throw new Error(O2(d));
      const m = {
        keyId: yd(d),
        pattern: g
      };
      return i && (m.searcher = Sd(g, r)), m;
    }
    let p = {
      children: [],
      operator: u[0]
    };
    return u.forEach((d) => {
      const g = l[d];
      Nr(g) && g.forEach((m) => {
        p.children.push(s(m));
      });
    }), p;
  };
  return Ed(t) || (t = mv(t)), s(t);
}
function iS(t, { ignoreFieldNorm: r = Ce.ignoreFieldNorm }) {
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
function sS(t, r) {
  const i = t.matches;
  r.matches = [], An(i) && i.forEach((s) => {
    if (!An(s.indices) || !s.indices.length)
      return;
    const { indices: l, value: u } = s;
    let f = {
      indices: l,
      value: u
    };
    s.key && (f.key = s.key.src), s.idx > -1 && (f.refIndex = s.idx), r.matches.push(f);
  });
}
function oS(t, r) {
  r.score = t.score;
}
function lS(t, r, {
  includeMatches: i = Ce.includeMatches,
  includeScore: s = Ce.includeScore
} = {}) {
  const l = [];
  return i && l.push(sS), s && l.push(oS), t.map((u) => {
    const { idx: f } = u, p = {
      item: r[f],
      refIndex: f
    };
    return l.length && l.forEach((d) => {
      d(u, p);
    }), p;
  });
}
class Bi {
  constructor(r, i = {}, s) {
    this.options = { ...Ce, ...i }, this.options.useExtendedSearch, this._keyStore = new D2(this.options.keys), this.setCollection(r, s);
  }
  setCollection(r, i) {
    if (this._docs = r, i && !(i instanceof Zd))
      throw new Error(T2);
    this._myIndex = i || l0(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(r) {
    An(r) && (this._docs.push(r), this._myIndex.add(r));
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
    let d = ar(r) ? ar(this._docs[0]) ? this._searchStringList(r) : this._searchObjectList(r) : this._searchLogical(r);
    return iS(d, { ignoreFieldNorm: p }), u && d.sort(f), a0(i) && i > -1 && (d = d.slice(0, i)), lS(d, this._docs, {
      includeMatches: s,
      includeScore: l
    });
  }
  _searchStringList(r) {
    const i = Sd(r, this.options), { records: s } = this._myIndex, l = [];
    return s.forEach(({ v: u, i: f, n: p }) => {
      if (!An(u))
        return;
      const { isMatch: d, score: g, indices: m } = i.searchIn(u);
      d && l.push({
        item: u,
        idx: f,
        matches: [{ score: g, value: u, norm: p, indices: m }]
      });
    }), l;
  }
  _searchLogical(r) {
    const i = d0(r, this.options), s = (p, d, g) => {
      if (!p.children) {
        const { keyId: S, searcher: y } = p, b = this._findMatches({
          key: this._keyStore.get(S),
          value: this._myIndex.getValueForItemAtKeyId(d, S),
          searcher: y
        });
        return b && b.length ? [
          {
            idx: g,
            item: d,
            matches: b
          }
        ] : [];
      }
      const m = [];
      for (let S = 0, y = p.children.length; S < y; S += 1) {
        const b = p.children[S], h = s(b, d, g);
        if (h.length)
          m.push(...h);
        else if (p.operator === du.AND)
          return [];
      }
      return m;
    }, l = this._myIndex.records, u = {}, f = [];
    return l.forEach(({ $: p, i: d }) => {
      if (An(p)) {
        let g = s(i, p, d);
        g.length && (u[d] || (u[d] = { idx: d, item: p, matches: [] }, f.push(u[d])), g.forEach(({ matches: m }) => {
          u[d].matches.push(...m);
        }));
      }
    }), f;
  }
  _searchObjectList(r) {
    const i = Sd(r, this.options), { keys: s, records: l } = this._myIndex, u = [];
    return l.forEach(({ $: f, i: p }) => {
      if (!An(f))
        return;
      let d = [];
      s.forEach((g, m) => {
        d.push(
          ...this._findMatches({
            key: g,
            value: f[m],
            searcher: i
          })
        );
      }), d.length && u.push({
        idx: p,
        item: f,
        matches: d
      });
    }), u;
  }
  _findMatches({ key: r, value: i, searcher: s }) {
    if (!An(i))
      return [];
    let l = [];
    if (Nr(i))
      i.forEach(({ v: u, i: f, n: p }) => {
        if (!An(u))
          return;
        const { isMatch: d, score: g, indices: m } = s.searchIn(u);
        d && l.push({
          score: g,
          key: r,
          value: u,
          idx: f,
          norm: p,
          indices: m
        });
      });
    else {
      const { v: u, n: f } = i, { isMatch: p, score: d, indices: g } = s.searchIn(u);
      p && l.push({ score: d, key: r, value: u, norm: f, indices: g });
    }
    return l;
  }
}
Bi.version = "7.1.0";
Bi.createIndex = l0;
Bi.parseIndex = H2;
Bi.config = Ce;
Bi.parseQuery = d0;
nS(tS);
var uS = Object.defineProperty, cS = (t, r, i) => r in t ? uS(t, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[r] = i, fS = (t, r, i) => cS(t, r + "", i);
let dS = class {
  constructor() {
    fS(this, "requestMap"), this.requestMap = /* @__PURE__ */ new Map();
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
        let d;
        for await (const g of p())
          d = g, i != null && i.onEntry && await i.onEntry(u, g);
        i != null && i.onFinish && await i.onFinish(u, d);
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
async function hS(t, ...r) {
  await SillyTavern.getContext().SlashCommandParser.commands[t].callback(...r);
}
async function Oe(t, r, { escapeHtml: i = !0 } = {}) {
  await hS("echo", { severity: t, escapeHtml: (!!i).toString() }, r);
}
function $f(t) {
  return Z_(t);
}
function gv(t, r) {
  return q_(t, r);
}
function xl(t, r, i) {
  return F_(t, r, i);
}
function pS(t, r, i) {
  return $_(t, r, i);
}
function mS(t, r) {
  return J_(t, r);
}
function gS(t, {
  customStoryString: r,
  customInstructSettings: i
} = {}) {
  return H_(t, { customStoryString: r, customInstructSettings: i });
}
function Aa(t) {
  return n2(t);
}
function vS() {
  return {
    prompt: zs[Ls.prompt],
    interval: zs[Ls.interval],
    position: zs[Ls.position],
    depth: zs[Ls.depth],
    role: zs[Ls.role]
  };
}
function yS(t, r) {
  return a2(t, r);
}
function bS({
  name2: t,
  charDescription: r,
  charPersonality: i,
  Scenario: s,
  worldInfoBefore: l,
  worldInfoAfter: u,
  bias: f,
  type: p,
  quietPrompt: d,
  quietImage: g,
  extensionPrompts: m,
  cyclePrompt: S,
  systemPromptOverride: y,
  jailbreakPromptOverride: b,
  personaDescription: h,
  messages: x,
  messageExamples: w
}, T) {
  return r2(
    {
      name2: t,
      charDescription: r,
      charPersonality: i,
      Scenario: s,
      worldInfoBefore: l,
      worldInfoAfter: u,
      bias: f,
      type: p,
      quietPrompt: d,
      quietImage: g,
      cyclePrompt: S,
      systemPromptOverride: y,
      jailbreakPromptOverride: b,
      personaDescription: h,
      extensionPrompts: m,
      messages: x,
      messageExamples: w
    },
    T
  );
}
function _S(t) {
  return K_(t);
}
function SS(t) {
  return W_(t);
}
function xS(t, r, {
  characterOverride: i,
  isMarkdown: s,
  isPrompt: l,
  isEdit: u,
  depth: f
}) {
  return i2(t, r, { characterOverride: i, isMarkdown: s, isPrompt: l, isEdit: u, depth: f });
}
async function ES(t, r) {
  return await Q_(t, r);
}
function vv(t, {
  wiFormat: r
} = {}) {
  return e2(t, { wiFormat: r });
}
function Bs(t) {
  return t2(t);
}
class wS {
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
var CS = Object.defineProperty, AS = (t, r, i) => r in t ? CS(t, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[r] = i, El = (t, r, i) => AS(t, typeof r != "symbol" ? r + "" : r, i);
class NS {
  constructor(r) {
    El(this, "messages", []), El(this, "tokenizer"), El(this, "maxContext"), El(this, "currentTokenCount", 0), this.tokenizer = new wS(), this.maxContext = r;
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
    const i = r.filter((p) => p.content), s = i.map((p) => this.getTokenCount(p)), l = s.reduce((p, d) => p + d, 0);
    if (this.currentTokenCount + l <= this.maxContext)
      return this.messages.push(...i), this.currentTokenCount += l, !0;
    let u = 0;
    const f = [];
    for (let p = i.length - 1; p >= 0; p--) {
      const d = i[p], g = s[p];
      if (this.currentTokenCount + u + g <= this.maxContext)
        f.unshift(d), u += g;
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
  contextName: l,
  syspromptName: u,
  maxContext: f,
  includeNames: p,
  ignoreCharacterFields: d,
  ignoreAuthorNote: g,
  ignoreWorldInfo: m,
  messageIndexesBetween: S
} = {}) {
  var y, b, h, x, w, T, E, k, C, N, j, R, q, V;
  if (!["textgenerationwebui", "openai"].includes(t))
    throw new Error("Unsupported API");
  const U = SillyTavern.getContext();
  let { description: Y, personality: G, persona: le, scenario: fe, mesExamples: ue, system: I, jailbreak: ne } = d ? {
    description: "",
    personality: "",
    persona: "",
    scenario: "",
    mesExamples: "",
    system: "",
    jailbreak: ""
  } : U.getCharacterCardFields({
    chid: r
  });
  const ce = t === "textgenerationwebui" ? (y = U.getPresetManager("instruct")) == null ? void 0 : y.getCompletionPresetByName(s) : void 0, je = !!(ce != null && ce.enabled);
  let D = gv(ue, je);
  function J() {
    var me, pe;
    if (typeof f == "number")
      return f;
    if (!f || f === "active" || !i)
      return $f();
    if (typeof f == "number")
      return f;
    let Ge;
    if (t === "textgenerationwebui") {
      const He = (me = U.getPresetManager("textgenerationwebui")) == null ? void 0 : me.getCompletionPresetByName(i);
      Ge = He?.max_length;
    } else {
      const He = (pe = U.getPresetManager("openai")) == null ? void 0 : pe.getCompletionPresetByName(i);
      Ge = He?.openai_max_context;
    }
    return typeof Ge == "number" ? Ge : $f();
  }
  let re = [];
  const ie = J();
  if (ie <= 0)
    return { result: [], warnings: re };
  const se = new NS(ie), De = U.ToolManager.isToolCallingSupported(), $ = S?.start ?? 0, ve = S != null && S.end ? S.end + 1 : void 0;
  let ye = $ === -1 && ve === 0 ? [] : U.chat.slice($, ve).filter((me) => {
    var pe;
    return !me.is_system || De && Array.isArray((pe = me.extra) == null ? void 0 : pe.tool_invocations);
  });
  ye = await Promise.all(
    ye.map(async (me, pe) => {
      var Ge, He;
      let it = me.mes, P = me.is_user ? Jg.USER_INPUT : Jg.AI_OUTPUT, ae = { isPrompt: !0, depth: ye.length - pe - 1 }, te = xS(it, P, ae);
      return te = await ES(me, te), (Ge = me?.extra) != null && Ge.append_title && (He = me?.extra) != null && He.title && (te = `${te}

${me.extra.title}`), {
        ...me,
        mes: te,
        index: pe
      };
    })
  );
  const Xe = ye.map((me) => Y_ ? `${me.name}: ${me.mes}` : me.mes).reverse(), { worldInfoString: ct, worldInfoBefore: ke, worldInfoAfter: at, worldInfoExamples: qn, worldInfoDepth: kt, anBefore: en, anAfter: Ze } = m ? {
    worldInfoString: "",
    worldInfoBefore: "",
    worldInfoAfter: "",
    worldInfoExamples: [],
    worldInfoDepth: [],
    anBefore: [],
    anAfter: []
  } : await U.getWorldInfoPrompt(Xe, ie, !1);
  for (const me of qn) {
    const pe = me.content;
    if (pe.length === 0)
      continue;
    const Ge = xl(pe, wr, Wr), He = gv(Ge, je);
    me.position === X_.before ? D.unshift(...He) : D.push(...He);
  }
  function $e() {
    const me = [];
    for (let pe = ye.length - 1; pe >= 0; pe--) {
      const Ge = ye[pe], He = Ge.name === "System" && !Ge.is_user ? "system" : Ge.is_user ? "user" : "assistant";
      me.unshift({
        role: He,
        content: p && He != "system" ? `${Ge.name}: ${Ge.mes}` : Ge.mes,
        source: Ge
      });
    }
    se.addMany(me);
  }
  if (t === "textgenerationwebui") {
    const me = [...D];
    D && (D = pS(D, wr, Wr));
    const pe = (b = U.getPresetManager("sysprompt")) == null ? void 0 : b.getCompletionPresetByName(u);
    pe && (I = U.powerUserSettings.prefer_character_prompt && I ? I : xl(pe.content, wr, Wr), I = je ? mS(
      U.substituteParams(I, wr, Wr, pe.content),
      ce
    ) : I);
    const Ge = {
      description: Y,
      personality: G,
      persona: U.powerUserSettings.persona_description_position == Xg.IN_PROMPT ? le : "",
      scenario: fe,
      system: I,
      char: Wr,
      user: wr,
      wiBefore: ke,
      wiAfter: at,
      loreBefore: ke,
      loreAfter: at,
      mesExamples: D.join(""),
      mesExamplesRaw: me.join("")
    }, He = (h = U.getPresetManager("context")) == null ? void 0 : h.getCompletionPresetByName(l);
    let it = gS(Ge, {
      customInstructSettings: ce,
      customStoryString: He?.story_string
    });
    it && se.add({ role: "system", content: it, ignoreInstruct: !0 }), $e();
  } else {
    let me = function(st) {
      const tn = Re.find((Ba) => Ba.identifier === st);
      if (tn)
        return tn;
      const uo = it.prompts.find((Ba) => Ba.identifier === st);
      if (uo)
        return uo;
    }, pe = _S(ye), Ge = SS(D);
    async function He() {
      let [st, tn] = await bS(
        {
          name2: Wr,
          charDescription: Y,
          charPersonality: G,
          Scenario: fe,
          worldInfoBefore: ke,
          worldInfoAfter: at,
          extensionPrompts: U.extensionPrompts,
          bias: "",
          type: "normal",
          quietPrompt: void 0,
          quietImage: void 0,
          cyclePrompt: "",
          systemPromptOverride: I,
          jailbreakPromptOverride: ne,
          personaDescription: le,
          messages: pe,
          messageExamples: Ge
        },
        !1
      );
      se.addMany(st);
    }
    if (!i)
      return re.push("No preset name provided. Using default preset."), await He(), { result: se.getMessages(), warnings: re };
    const it = (x = U.getPresetManager("openai")) == null ? void 0 : x.getCompletionPresetByName(i);
    if (!it)
      return console.warn(`Preset not found: ${i}. Using current preset.`), re.push(`Preset not found: ${i}. Using current preset.`), He(), { result: se.getMessages(), warnings: re };
    let P = (w = it.prompt_order) == null ? void 0 : w.find((st) => st.character_id === Tn);
    if (!P && it.prompt_order && it.prompt_order.length > 0 && (P = it.prompt_order[0]), !P)
      return console.warn(`No prompt order found for preset: ${i}. Using current preset.`), re.push(`No prompt order found for preset: ${i}. Using current preset.`), He(), { result: se.getMessages(), warnings: re };
    const ae = fe && it.scenario_format ? U.substituteParams(it.scenario_format) : "", te = G && it.personality_format ? U.substituteParams(it.personality_format) : "", be = U.substituteParams(it.group_nudge_prompt), Be = it.impersonation_prompt ? U.substituteParams(it.impersonation_prompt) : "", Re = [];
    m || Re.push(
      {
        role: "system",
        content: vv(ke, { wiFormat: it.wi_format }),
        identifier: "worldInfoBefore"
      },
      {
        role: "system",
        content: vv(at, { wiFormat: it.wi_format }),
        identifier: "worldInfoAfter"
      }
    ), d || Re.push(
      { role: "system", content: Y, identifier: "charDescription" },
      { role: "system", content: te, identifier: "charPersonality" },
      { role: "system", content: ae, identifier: "scenario" }
    ), Re.push(
      { role: "system", content: Be, identifier: "impersonate" },
      { role: "system", content: be, identifier: "groupNudge" }
    );
    const pt = U.extensionPrompts["1_memory"];
    pt && pt.value && Re.push({
      role: Aa(pt.role),
      content: pt.value,
      identifier: "summary",
      position: Bs(pt.position)
    });
    const mn = U.extensionPrompts["2_floating_prompt"];
    !g && mn && mn.value && Re.push({
      role: Aa(mn.role),
      content: mn.value,
      identifier: "authorsNote",
      position: Bs(mn.position)
    });
    const $t = U.extensionPrompts["3_vectors"];
    $t && $t.value && Re.push({
      role: "system",
      content: $t.value,
      identifier: "vectorsMemory",
      position: Bs($t.position)
    });
    const Jt = U.extensionPrompts["4_vectors_data_bank"];
    Jt && Jt.value && Re.push({
      role: Aa(Jt.role),
      content: Jt.value,
      identifier: "vectorsDataBank",
      position: Bs(Jt.position)
    });
    const qe = U.extensionPrompts.chromadb;
    qe && qe.value && Re.push({
      role: "system",
      content: qe.value,
      identifier: "smartContext",
      position: Bs(qe.position)
    }), !d && U.powerUserSettings.persona_description && U.powerUserSettings.persona_description_position === Xg.IN_PROMPT && Re.push({
      role: "system",
      content: U.powerUserSettings.persona_description,
      identifier: "personaDescription"
    }), P.order.forEach((st) => {
      if (!st.enabled)
        return;
      const tn = me(st.identifier);
      if (tn && tn.content) {
        se.add({
          role: tn.role ?? "system",
          content: U.substituteParams(tn.content)
        });
        return;
      }
      st.identifier === "chatHistory" && $e();
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
  for (const me in U.extensionPrompts)
    if (Object.hasOwn(U.extensionPrompts, me)) {
      const pe = U.extensionPrompts[me];
      if (Ve.includes(me) || !U.extensionPrompts[me].value || ![Ca.BEFORE_PROMPT, Ca.IN_PROMPT].includes(pe.position) || typeof pe.filter == "function" && !await pe.filter()) continue;
      const Ge = {
        role: Aa(pe.role) ?? "system",
        content: pe.value
      };
      if (pe.position === Ca.BEFORE_PROMPT)
        se.insert(pe.depth, Ge);
      else if (pe.position === Ca.IN_PROMPT) {
        const He = se.getMessages();
        se.insert(He.length - pe.depth, Ge);
      }
    }
  for (const me of kt) {
    const pe = se.getMessages();
    se.insert(pe.length - me.depth, {
      role: Aa(me.role),
      content: me.entries.join(`
`)
    });
  }
  if (!d) {
    const me = yS(Cr, Number(Tn));
    if (Cr && Array.isArray(me) && me.length > 0)
      me.filter((pe) => pe.text).forEach((pe, Ge) => {
        const He = se.getMessages();
        se.insert(He.length - pe.depth, { role: pe.role, content: pe.text });
      });
    else {
      const pe = xl(
        (N = (C = (k = (E = (T = U.characters[Tn]) == null ? void 0 : T.data) == null ? void 0 : E.extensions) == null ? void 0 : k.depth_prompt) == null ? void 0 : C.prompt) == null ? void 0 : N.trim(),
        wr,
        Wr
      ) || "";
      if (pe) {
        const Ge = V_, He = ((V = (q = (R = (j = U.characters[Tn]) == null ? void 0 : j.data) == null ? void 0 : R.extensions) == null ? void 0 : q.depth_prompt) == null ? void 0 : V.role) ?? G_, it = se.getMessages();
        se.insert(it.length - Ge, {
          role: Aa(He),
          content: pe
        });
      }
    }
  }
  let We = -1;
  if (!g) {
    const me = vS();
    if (me.prompt) {
      me.prompt = xl(me.prompt, wr, Wr);
      const pe = { role: Aa(me.role), content: me.prompt };
      switch (me.position) {
        case Ca.IN_PROMPT:
          se.insert(1, pe), We = 1;
          break;
        case Ca.IN_CHAT:
          We = se.getMessages().length - me.depth, se.insert(We, pe);
          break;
        case Ca.BEFORE_PROMPT:
          se.addFront(pe), We = 0;
          break;
      }
    }
  }
  return We >= 0 && (en.length > 0 && (se.insert(We, { role: "system", content: en.join(`
`) }), We++), Ze.length > 0 && se.insert(We + 1, { role: "system", content: Ze.join(`
`) })), { result: se.getMessages(), warnings: re };
}
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function yv(t, r) {
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
    r % 2 ? yv(Object(i), !0).forEach(function(s) {
      TS(t, s, i[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : yv(Object(i)).forEach(function(s) {
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
function TS(t, r, i) {
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
function OS(t, r) {
  if (t == null) return {};
  var i = {}, s = Object.keys(t), l, u;
  for (u = 0; u < s.length; u++)
    l = s[u], !(r.indexOf(l) >= 0) && (i[l] = t[l]);
  return i;
}
function kS(t, r) {
  if (t == null) return {};
  var i = OS(t, r), s, l;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);
    for (l = 0; l < u.length; l++)
      s = u[l], !(r.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(t, s) && (i[s] = t[s]);
  }
  return i;
}
var jS = "1.15.6";
function Ar(t) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(t);
}
var Or = Ar(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), io = Ar(/Edge/i), bv = Ar(/firefox/i), Ks = Ar(/safari/i) && !Ar(/chrome/i) && !Ar(/android/i), Gd = Ar(/iP(ad|od|hone)/i), p0 = Ar(/chrome/i) && Ar(/android/i), m0 = {
  capture: !1,
  passive: !1
};
function Ue(t, r, i) {
  t.addEventListener(r, i, !Or && m0);
}
function Pe(t, r, i) {
  t.removeEventListener(r, i, !Or && m0);
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
function Xn(t, r, i, s) {
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
var _v = /\s+/g;
function wn(t, r, i) {
  if (t && r)
    if (t.classList)
      t.classList[i ? "add" : "remove"](r);
    else {
      var s = (" " + t.className + " ").replace(_v, " ").replace(" " + r + " ", " ");
      t.className = (s + (i ? " " + r : "")).replace(_v, " ");
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
function zi(t, r) {
  var i = "";
  if (typeof t == "string")
    i = t;
  else
    do {
      var s = we(t, "transform");
      s && s !== "none" && (i = s + " " + i);
    } while (!r && (t = t.parentNode));
  var l = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return l && new l(i);
}
function v0(t, r, i) {
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
    var u, f, p, d, g, m, S;
    if (t !== window && t.parentNode && t !== ir() ? (u = t.getBoundingClientRect(), f = u.top, p = u.left, d = u.bottom, g = u.right, m = u.height, S = u.width) : (f = 0, p = 0, d = window.innerHeight, g = window.innerWidth, m = window.innerHeight, S = window.innerWidth), (r || i) && t !== window && (l = l || t.parentNode, !Or))
      do
        if (l && l.getBoundingClientRect && (we(l, "transform") !== "none" || i && we(l, "position") !== "static")) {
          var y = l.getBoundingClientRect();
          f -= y.top + parseInt(we(l, "border-top-width")), p -= y.left + parseInt(we(l, "border-left-width")), d = f + u.height, g = p + u.width;
          break;
        }
      while (l = l.parentNode);
    if (s && t !== window) {
      var b = zi(l || t), h = b && b.a, x = b && b.d;
      b && (f /= x, p /= h, S /= h, m /= x, d = f + m, g = p + S);
    }
    return {
      top: f,
      left: p,
      bottom: d,
      right: g,
      width: S,
      height: m
    };
  }
}
function Sv(t, r, i) {
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
    if (f[u].style.display !== "none" && f[u] !== Ae.ghost && (s || f[u] !== Ae.dragged) && Xn(f[u], i.draggable, t, !1)) {
      if (l === r)
        return f[u];
      l++;
    }
    u++;
  }
  return null;
}
function Vd(t, r) {
  for (var i = t.lastElementChild; i && (i === Ae.ghost || we(i, "display") === "none" || r && !hu(i, r)); )
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
function xv(t) {
  var r = 0, i = 0, s = ir();
  if (t)
    do {
      var l = zi(t), u = l.a, f = l.d;
      r += t.scrollLeft * u, i += t.scrollTop * f;
    } while (t !== s && (t = t.parentNode));
  return [r, i];
}
function MS(t, r) {
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
      var l = we(i);
      if (i.clientWidth < i.scrollWidth && (l.overflowX == "auto" || l.overflowX == "scroll") || i.clientHeight < i.scrollHeight && (l.overflowY == "auto" || l.overflowY == "scroll")) {
        if (!i.getBoundingClientRect || i === document.body) return ir();
        if (s || r) return i;
        s = !0;
      }
    }
  while (i = i.parentNode);
  return ir();
}
function DS(t, r) {
  if (t && r)
    for (var i in r)
      r.hasOwnProperty(i) && (t[i] = r[i]);
  return t;
}
function Jf(t, r) {
  return Math.round(t.top) === Math.round(r.top) && Math.round(t.left) === Math.round(r.left) && Math.round(t.height) === Math.round(r.height) && Math.round(t.width) === Math.round(r.width);
}
var Ws;
function y0(t, r) {
  return function() {
    if (!Ws) {
      var i = arguments, s = this;
      i.length === 1 ? t.call(s, i[0]) : t.apply(s, i), Ws = setTimeout(function() {
        Ws = void 0;
      }, r);
    }
  };
}
function RS() {
  clearTimeout(Ws), Ws = void 0;
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
  return Array.from(t.children).forEach(function(l) {
    var u, f, p, d;
    if (!(!Xn(l, r.draggable, t, !1) || l.animated || l === i)) {
      var g = Tt(l);
      s.left = Math.min((u = s.left) !== null && u !== void 0 ? u : 1 / 0, g.left), s.top = Math.min((f = s.top) !== null && f !== void 0 ? f : 1 / 0, g.top), s.right = Math.max((p = s.right) !== null && p !== void 0 ? p : -1 / 0, g.right), s.bottom = Math.max((d = s.bottom) !== null && d !== void 0 ? d : -1 / 0, g.bottom);
    }
  }), s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
var cn = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function zS() {
  var t = [], r;
  return {
    captureAnimationState: function() {
      if (t = [], !!this.options.animation) {
        var s = [].slice.call(this.el.children);
        s.forEach(function(l) {
          if (!(we(l, "display") === "none" || l === Ae.ghost)) {
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
      t.splice(MS(t, {
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
        var d = 0, g = p.target, m = g.fromRect, S = Tt(g), y = g.prevFromRect, b = g.prevToRect, h = p.rect, x = zi(g, !0);
        x && (S.top -= x.f, S.left -= x.e), g.toRect = S, g.thisAnimationDuration && Jf(y, S) && !Jf(m, S) && // Make sure animatingRect is on line between toRect & fromRect
        (h.top - S.top) / (h.left - S.left) === (m.top - S.top) / (m.left - S.left) && (d = IS(h, y, b, l.options)), Jf(S, m) || (g.prevFromRect = m, g.prevToRect = S, d || (d = l.options.animation), l.animate(g, h, S, d)), d && (u = !0, f = Math.max(f, d), clearTimeout(g.animationResetTimer), g.animationResetTimer = setTimeout(function() {
          g.animationTime = 0, g.prevFromRect = null, g.fromRect = null, g.prevToRect = null, g.thisAnimationDuration = null;
        }, d), g.thisAnimationDuration = d);
      }), clearTimeout(r), u ? r = setTimeout(function() {
        typeof s == "function" && s();
      }, f) : typeof s == "function" && s(), t = [];
    },
    animate: function(s, l, u, f) {
      if (f) {
        we(s, "transition", ""), we(s, "transform", "");
        var p = zi(this.el), d = p && p.a, g = p && p.d, m = (l.left - u.left) / (d || 1), S = (l.top - u.top) / (g || 1);
        s.animatingX = !!m, s.animatingY = !!S, we(s, "transform", "translate3d(" + m + "px," + S + "px,0)"), this.forRepaintDummy = LS(s), we(s, "transition", "transform " + f + "ms" + (this.options.easing ? " " + this.options.easing : "")), we(s, "transform", "translate3d(0,0,0)"), typeof s.animated == "number" && clearTimeout(s.animated), s.animated = setTimeout(function() {
          we(s, "transition", ""), we(s, "transform", ""), s.animated = !1, s.animatingX = !1, s.animatingY = !1;
        }, f);
      }
    }
  };
}
function LS(t) {
  return t.offsetWidth;
}
function IS(t, r, i, s) {
  return Math.sqrt(Math.pow(r.top - t.top, 2) + Math.pow(r.left - t.left, 2)) / Math.sqrt(Math.pow(r.top - i.top, 2) + Math.pow(r.left - i.left, 2)) * s.animation;
}
var Ai = [], Qf = {
  initializeByDefault: !0
}, so = {
  mount: function(r) {
    for (var i in Qf)
      Qf.hasOwnProperty(i) && !(i in r) && (r[i] = Qf[i]);
    Ai.forEach(function(s) {
      if (s.pluginName === r.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(r.pluginName, " more than once");
    }), Ai.push(r);
  },
  pluginEvent: function(r, i, s) {
    var l = this;
    this.eventCanceled = !1, s.cancel = function() {
      l.eventCanceled = !0;
    };
    var u = r + "Global";
    Ai.forEach(function(f) {
      i[f.pluginName] && (i[f.pluginName][u] && i[f.pluginName][u](sr({
        sortable: i
      }, s)), i.options[f.pluginName] && i[f.pluginName][r] && i[f.pluginName][r](sr({
        sortable: i
      }, s)));
    });
  },
  initializePlugins: function(r, i, s, l) {
    Ai.forEach(function(p) {
      var d = p.pluginName;
      if (!(!r.options[d] && !p.initializeByDefault)) {
        var g = new p(r, i, r.options);
        g.sortable = r, g.options = r.options, r[d] = g, Tr(s, g.defaults);
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
    return Ai.forEach(function(l) {
      typeof l.eventProperties == "function" && Tr(s, l.eventProperties.call(i[l.pluginName], r));
    }), s;
  },
  modifyOption: function(r, i, s) {
    var l;
    return Ai.forEach(function(u) {
      r[u.pluginName] && u.optionListeners && typeof u.optionListeners[i] == "function" && (l = u.optionListeners[i].call(r[u.pluginName], s));
    }), l;
  }
};
function PS(t) {
  var r = t.sortable, i = t.rootEl, s = t.name, l = t.targetEl, u = t.cloneEl, f = t.toEl, p = t.fromEl, d = t.oldIndex, g = t.newIndex, m = t.oldDraggableIndex, S = t.newDraggableIndex, y = t.originalEvent, b = t.putSortable, h = t.extraEventProperties;
  if (r = r || i && i[cn], !!r) {
    var x, w = r.options, T = "on" + s.charAt(0).toUpperCase() + s.substr(1);
    window.CustomEvent && !Or && !io ? x = new CustomEvent(s, {
      bubbles: !0,
      cancelable: !0
    }) : (x = document.createEvent("Event"), x.initEvent(s, !0, !0)), x.to = f || i, x.from = p || i, x.item = l || i, x.clone = u, x.oldIndex = d, x.newIndex = g, x.oldDraggableIndex = m, x.newDraggableIndex = S, x.originalEvent = y, x.pullMode = b ? b.lastPutMode : void 0;
    var E = sr(sr({}, h), so.getEventProperties(s, r));
    for (var k in E)
      x[k] = E[k];
    i && i.dispatchEvent(x), w[T] && w[T].call(r, x);
  }
}
var BS = ["evt"], ln = function(r, i) {
  var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l = s.evt, u = kS(s, BS);
  so.pluginEvent.bind(Ae)(r, i, sr({
    dragEl: oe,
    parentEl: _t,
    ghostEl: Ne,
    rootEl: dt,
    nextEl: Oa,
    lastDownEl: iu,
    cloneEl: gt,
    cloneHidden: ra,
    dragStarted: Xs,
    putSortable: qt,
    activeSortable: Ae.active,
    originalEvent: l,
    oldIndex: Di,
    oldDraggableIndex: eo,
    newIndex: Cn,
    newDraggableIndex: na,
    hideGhostForTarget: C0,
    unhideGhostForTarget: A0,
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
  PS(sr({
    putSortable: qt,
    cloneEl: gt,
    targetEl: oe,
    rootEl: dt,
    oldIndex: Di,
    oldDraggableIndex: eo,
    newIndex: Cn,
    newDraggableIndex: na
  }, t));
}
var oe, _t, Ne, dt, Oa, iu, gt, ra, Di, Cn, eo, na, wl, qt, Mi = !1, pu = !1, mu = [], Na, Vn, Kf, Wf, Ev, wv, Xs, Ni, to, no = !1, Cl = !1, su, Yt, ed = [], wd = !1, gu = [], wu = typeof document < "u", Al = Gd, Cv = io || Or ? "cssFloat" : "float", US = wu && !p0 && !Gd && "draggable" in document.createElement("div"), x0 = (function() {
  if (wu) {
    if (Or)
      return !1;
    var t = document.createElement("x");
    return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto";
  }
})(), E0 = function(r, i) {
  var s = we(r), l = parseInt(s.width) - parseInt(s.paddingLeft) - parseInt(s.paddingRight) - parseInt(s.borderLeftWidth) - parseInt(s.borderRightWidth), u = Pi(r, 0, i), f = Pi(r, 1, i), p = u && we(u), d = f && we(f), g = p && parseInt(p.marginLeft) + parseInt(p.marginRight) + Tt(u).width, m = d && parseInt(d.marginLeft) + parseInt(d.marginRight) + Tt(f).width;
  if (s.display === "flex")
    return s.flexDirection === "column" || s.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (s.display === "grid")
    return s.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (u && p.float && p.float !== "none") {
    var S = p.float === "left" ? "left" : "right";
    return f && (d.clear === "both" || d.clear === S) ? "vertical" : "horizontal";
  }
  return u && (p.display === "block" || p.display === "flex" || p.display === "table" || p.display === "grid" || g >= l && s[Cv] === "none" || f && s[Cv] === "none" && g + m > l) ? "vertical" : "horizontal";
}, HS = function(r, i, s) {
  var l = s ? r.left : r.top, u = s ? r.right : r.bottom, f = s ? r.width : r.height, p = s ? i.left : i.top, d = s ? i.right : i.bottom, g = s ? i.width : i.height;
  return l === p || u === d || l + f / 2 === p + g / 2;
}, qS = function(r, i) {
  var s;
  return mu.some(function(l) {
    var u = l[cn].options.emptyInsertThreshold;
    if (!(!u || Vd(l))) {
      var f = Tt(l), p = r >= f.left - u && r <= f.right + u, d = i >= f.top - u && i <= f.bottom + u;
      if (p && d)
        return s = l;
    }
  }), s;
}, w0 = function(r) {
  function i(u, f) {
    return function(p, d, g, m) {
      var S = p.options.group.name && d.options.group.name && p.options.group.name === d.options.group.name;
      if (u == null && (f || S))
        return !0;
      if (u == null || u === !1)
        return !1;
      if (f && u === "clone")
        return u;
      if (typeof u == "function")
        return i(u(p, d, g, m), f)(p, d, g, m);
      var y = (f ? p : d).options.group.name;
      return u === !0 || typeof u == "string" && u === y || u.join && u.indexOf(y) > -1;
    };
  }
  var s = {}, l = r.group;
  (!l || au(l) != "object") && (l = {
    name: l
  }), s.name = l.name, s.checkPull = i(l.pull, !0), s.checkPut = i(l.put), s.revertClone = l.revertClone, r.group = s;
}, C0 = function() {
  !x0 && Ne && we(Ne, "display", "none");
}, A0 = function() {
  !x0 && Ne && we(Ne, "display", "");
};
wu && !p0 && document.addEventListener("click", function(t) {
  if (pu)
    return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), pu = !1, !1;
}, !0);
var Ta = function(r) {
  if (oe) {
    r = r.touches ? r.touches[0] : r;
    var i = qS(r.clientX, r.clientY);
    if (i) {
      var s = {};
      for (var l in r)
        r.hasOwnProperty(l) && (s[l] = r[l]);
      s.target = s.rootEl = i, s.preventDefault = void 0, s.stopPropagation = void 0, i[cn]._onDragOver(s);
    }
  }
}, FS = function(r) {
  oe && oe.parentNode[cn]._isOutsideThisEl(r.target);
};
function Ae(t, r) {
  if (!(t && t.nodeType && t.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
  this.el = t, this.options = r = Tr({}, r), t[cn] = this;
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
    supportPointer: Ae.supportPointer !== !1 && "PointerEvent" in window && (!Ks || Gd),
    emptyInsertThreshold: 5
  };
  so.initializePlugins(this, t, i);
  for (var s in i)
    !(s in r) && (r[s] = i[s]);
  w0(r);
  for (var l in this)
    l.charAt(0) === "_" && typeof this[l] == "function" && (this[l] = this[l].bind(this));
  this.nativeDraggable = r.forceFallback ? !1 : US, this.nativeDraggable && (this.options.touchStartThreshold = 1), r.supportPointer ? Ue(t, "pointerdown", this._onTapStart) : (Ue(t, "mousedown", this._onTapStart), Ue(t, "touchstart", this._onTapStart)), this.nativeDraggable && (Ue(t, "dragover", this), Ue(t, "dragenter", this)), mu.push(this.el), r.store && r.store.get && this.sort(r.store.get(this) || []), Tr(this, zS());
}
Ae.prototype = /** @lends Sortable.prototype */
{
  constructor: Ae,
  _isOutsideThisEl: function(r) {
    !this.el.contains(r) && r !== this.el && (Ni = null);
  },
  _getDirection: function(r, i) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, r, i, oe) : this.options.direction;
  },
  _onTapStart: function(r) {
    if (r.cancelable) {
      var i = this, s = this.el, l = this.options, u = l.preventOnFilter, f = r.type, p = r.touches && r.touches[0] || r.pointerType && r.pointerType === "touch" && r, d = (p || r).target, g = r.target.shadowRoot && (r.path && r.path[0] || r.composedPath && r.composedPath()[0]) || d, m = l.filter;
      if (QS(s), !oe && !(/mousedown|pointerdown/.test(f) && r.button !== 0 || l.disabled) && !g.isContentEditable && !(!this.nativeDraggable && Ks && d && d.tagName.toUpperCase() === "SELECT") && (d = Xn(d, l.draggable, s, !1), !(d && d.animated) && iu !== d)) {
        if (Di = Bn(d), eo = Bn(d, l.draggable), typeof m == "function") {
          if (m.call(this, r, d, this)) {
            Kt({
              sortable: i,
              rootEl: g,
              name: "filter",
              targetEl: d,
              toEl: s,
              fromEl: s
            }), ln("filter", i, {
              evt: r
            }), u && r.preventDefault();
            return;
          }
        } else if (m && (m = m.split(",").some(function(S) {
          if (S = Xn(g, S.trim(), s, !1), S)
            return Kt({
              sortable: i,
              rootEl: S,
              name: "filter",
              targetEl: d,
              fromEl: s,
              toEl: s
            }), ln("filter", i, {
              evt: r
            }), !0;
        }), m)) {
          u && r.preventDefault();
          return;
        }
        l.handle && !Xn(g, l.handle, s, !1) || this._prepareDragStart(r, p, d);
      }
    }
  },
  _prepareDragStart: function(r, i, s) {
    var l = this, u = l.el, f = l.options, p = u.ownerDocument, d;
    if (s && !oe && s.parentNode === u) {
      var g = Tt(s);
      if (dt = u, oe = s, _t = oe.parentNode, Oa = oe.nextSibling, iu = s, wl = f.group, Ae.dragged = oe, Na = {
        target: oe,
        clientX: (i || r).clientX,
        clientY: (i || r).clientY
      }, Ev = Na.clientX - g.left, wv = Na.clientY - g.top, this._lastX = (i || r).clientX, this._lastY = (i || r).clientY, oe.style["will-change"] = "all", d = function() {
        if (ln("delayEnded", l, {
          evt: r
        }), Ae.eventCanceled) {
          l._onDrop();
          return;
        }
        l._disableDelayedDragEvents(), !bv && l.nativeDraggable && (oe.draggable = !0), l._triggerDragStart(r, i), Kt({
          sortable: l,
          name: "choose",
          originalEvent: r
        }), wn(oe, f.chosenClass, !0);
      }, f.ignore.split(",").forEach(function(m) {
        v0(oe, m.trim(), td);
      }), Ue(p, "dragover", Ta), Ue(p, "mousemove", Ta), Ue(p, "touchmove", Ta), f.supportPointer ? (Ue(p, "pointerup", l._onDrop), !this.nativeDraggable && Ue(p, "pointercancel", l._onDrop)) : (Ue(p, "mouseup", l._onDrop), Ue(p, "touchend", l._onDrop), Ue(p, "touchcancel", l._onDrop)), bv && this.nativeDraggable && (this.options.touchStartThreshold = 4, oe.draggable = !0), ln("delayStart", this, {
        evt: r
      }), f.delay && (!f.delayOnTouchOnly || i) && (!this.nativeDraggable || !(io || Or))) {
        if (Ae.eventCanceled) {
          this._onDrop();
          return;
        }
        f.supportPointer ? (Ue(p, "pointerup", l._disableDelayedDrag), Ue(p, "pointercancel", l._disableDelayedDrag)) : (Ue(p, "mouseup", l._disableDelayedDrag), Ue(p, "touchend", l._disableDelayedDrag), Ue(p, "touchcancel", l._disableDelayedDrag)), Ue(p, "mousemove", l._delayedDragTouchMoveHandler), Ue(p, "touchmove", l._delayedDragTouchMoveHandler), f.supportPointer && Ue(p, "pointermove", l._delayedDragTouchMoveHandler), l._dragStartTimer = setTimeout(d, f.delay);
      } else
        d();
    }
  },
  _delayedDragTouchMoveHandler: function(r) {
    var i = r.touches ? r.touches[0] : r;
    Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    oe && td(oe), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var r = this.el.ownerDocument;
    Pe(r, "mouseup", this._disableDelayedDrag), Pe(r, "touchend", this._disableDelayedDrag), Pe(r, "touchcancel", this._disableDelayedDrag), Pe(r, "pointerup", this._disableDelayedDrag), Pe(r, "pointercancel", this._disableDelayedDrag), Pe(r, "mousemove", this._delayedDragTouchMoveHandler), Pe(r, "touchmove", this._delayedDragTouchMoveHandler), Pe(r, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(r, i) {
    i = i || r.pointerType == "touch" && r, !this.nativeDraggable || i ? this.options.supportPointer ? Ue(document, "pointermove", this._onTouchMove) : i ? Ue(document, "touchmove", this._onTouchMove) : Ue(document, "mousemove", this._onTouchMove) : (Ue(oe, "dragend", this), Ue(dt, "dragstart", this._onDragStart));
    try {
      document.selection ? ou(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(r, i) {
    if (Mi = !1, dt && oe) {
      ln("dragStarted", this, {
        evt: i
      }), this.nativeDraggable && Ue(document, "dragover", FS);
      var s = this.options;
      !r && wn(oe, s.dragClass, !1), wn(oe, s.ghostClass, !0), Ae.active = this, r && this._appendGhost(), Kt({
        sortable: this,
        name: "start",
        originalEvent: i
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Vn) {
      this._lastX = Vn.clientX, this._lastY = Vn.clientY, C0();
      for (var r = document.elementFromPoint(Vn.clientX, Vn.clientY), i = r; r && r.shadowRoot && (r = r.shadowRoot.elementFromPoint(Vn.clientX, Vn.clientY), r !== i); )
        i = r;
      if (oe.parentNode[cn]._isOutsideThisEl(r), i)
        do {
          if (i[cn]) {
            var s = void 0;
            if (s = i[cn]._onDragOver({
              clientX: Vn.clientX,
              clientY: Vn.clientY,
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
    if (Na) {
      var i = this.options, s = i.fallbackTolerance, l = i.fallbackOffset, u = r.touches ? r.touches[0] : r, f = Ne && zi(Ne, !0), p = Ne && f && f.a, d = Ne && f && f.d, g = Al && Yt && xv(Yt), m = (u.clientX - Na.clientX + l.x) / (p || 1) + (g ? g[0] - ed[0] : 0) / (p || 1), S = (u.clientY - Na.clientY + l.y) / (d || 1) + (g ? g[1] - ed[1] : 0) / (d || 1);
      if (!Ae.active && !Mi) {
        if (s && Math.max(Math.abs(u.clientX - this._lastX), Math.abs(u.clientY - this._lastY)) < s)
          return;
        this._onDragStart(r, !0);
      }
      if (Ne) {
        f ? (f.e += m - (Kf || 0), f.f += S - (Wf || 0)) : f = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: m,
          f: S
        };
        var y = "matrix(".concat(f.a, ",").concat(f.b, ",").concat(f.c, ",").concat(f.d, ",").concat(f.e, ",").concat(f.f, ")");
        we(Ne, "webkitTransform", y), we(Ne, "mozTransform", y), we(Ne, "msTransform", y), we(Ne, "transform", y), Kf = m, Wf = S, Vn = u;
      }
      r.cancelable && r.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!Ne) {
      var r = this.options.fallbackOnBody ? document.body : dt, i = Tt(oe, !0, Al, !0, r), s = this.options;
      if (Al) {
        for (Yt = r; we(Yt, "position") === "static" && we(Yt, "transform") === "none" && Yt !== document; )
          Yt = Yt.parentNode;
        Yt !== document.body && Yt !== document.documentElement ? (Yt === document && (Yt = ir()), i.top += Yt.scrollTop, i.left += Yt.scrollLeft) : Yt = ir(), ed = xv(Yt);
      }
      Ne = oe.cloneNode(!0), wn(Ne, s.ghostClass, !1), wn(Ne, s.fallbackClass, !0), wn(Ne, s.dragClass, !0), we(Ne, "transition", ""), we(Ne, "transform", ""), we(Ne, "box-sizing", "border-box"), we(Ne, "margin", 0), we(Ne, "top", i.top), we(Ne, "left", i.left), we(Ne, "width", i.width), we(Ne, "height", i.height), we(Ne, "opacity", "0.8"), we(Ne, "position", Al ? "absolute" : "fixed"), we(Ne, "zIndex", "100000"), we(Ne, "pointerEvents", "none"), Ae.ghost = Ne, r.appendChild(Ne), we(Ne, "transform-origin", Ev / parseInt(Ne.style.width) * 100 + "% " + wv / parseInt(Ne.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(r, i) {
    var s = this, l = r.dataTransfer, u = s.options;
    if (ln("dragStart", this, {
      evt: r
    }), Ae.eventCanceled) {
      this._onDrop();
      return;
    }
    ln("setupClone", this), Ae.eventCanceled || (gt = _0(oe), gt.removeAttribute("id"), gt.draggable = !1, gt.style["will-change"] = "", this._hideClone(), wn(gt, this.options.chosenClass, !1), Ae.clone = gt), s.cloneId = ou(function() {
      ln("clone", s), !Ae.eventCanceled && (s.options.removeCloneOnHide || dt.insertBefore(gt, oe), s._hideClone(), Kt({
        sortable: s,
        name: "clone"
      }));
    }), !i && wn(oe, u.dragClass, !0), i ? (pu = !0, s._loopId = setInterval(s._emulateDragOver, 50)) : (Pe(document, "mouseup", s._onDrop), Pe(document, "touchend", s._onDrop), Pe(document, "touchcancel", s._onDrop), l && (l.effectAllowed = "move", u.setData && u.setData.call(s, l, oe)), Ue(document, "drop", s), we(oe, "transform", "translateZ(0)")), Mi = !0, s._dragStartId = ou(s._dragStarted.bind(s, i, r)), Ue(document, "selectstart", s), Xs = !0, window.getSelection().removeAllRanges(), Ks && we(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(r) {
    var i = this.el, s = r.target, l, u, f, p = this.options, d = p.group, g = Ae.active, m = wl === d, S = p.sort, y = qt || g, b, h = this, x = !1;
    if (wd) return;
    function w(ce, je) {
      ln(ce, h, sr({
        evt: r,
        isOwner: m,
        axis: b ? "vertical" : "horizontal",
        revert: f,
        dragRect: l,
        targetRect: u,
        canSort: S,
        fromSortable: y,
        target: s,
        completed: E,
        onMove: function(J, re) {
          return Nl(dt, i, oe, l, J, Tt(J), r, re);
        },
        changed: k
      }, je));
    }
    function T() {
      w("dragOverAnimationCapture"), h.captureAnimationState(), h !== y && y.captureAnimationState();
    }
    function E(ce) {
      return w("dragOverCompleted", {
        insertion: ce
      }), ce && (m ? g._hideClone() : g._showClone(h), h !== y && (wn(oe, qt ? qt.options.ghostClass : g.options.ghostClass, !1), wn(oe, p.ghostClass, !0)), qt !== h && h !== Ae.active ? qt = h : h === Ae.active && qt && (qt = null), y === h && (h._ignoreWhileAnimating = s), h.animateAll(function() {
        w("dragOverAnimationComplete"), h._ignoreWhileAnimating = null;
      }), h !== y && (y.animateAll(), y._ignoreWhileAnimating = null)), (s === oe && !oe.animated || s === i && !s.animated) && (Ni = null), !p.dragoverBubble && !r.rootEl && s !== document && (oe.parentNode[cn]._isOutsideThisEl(r.target), !ce && Ta(r)), !p.dragoverBubble && r.stopPropagation && r.stopPropagation(), x = !0;
    }
    function k() {
      Cn = Bn(oe), na = Bn(oe, p.draggable), Kt({
        sortable: h,
        name: "change",
        toEl: i,
        newIndex: Cn,
        newDraggableIndex: na,
        originalEvent: r
      });
    }
    if (r.preventDefault !== void 0 && r.cancelable && r.preventDefault(), s = Xn(s, p.draggable, i, !0), w("dragOver"), Ae.eventCanceled) return x;
    if (oe.contains(r.target) || s.animated && s.animatingX && s.animatingY || h._ignoreWhileAnimating === s)
      return E(!1);
    if (pu = !1, g && !p.disabled && (m ? S || (f = _t !== dt) : qt === this || (this.lastPutMode = wl.checkPull(this, g, oe, r)) && d.checkPut(this, g, oe, r))) {
      if (b = this._getDirection(r, s) === "vertical", l = Tt(oe), w("dragOverValid"), Ae.eventCanceled) return x;
      if (f)
        return _t = dt, T(), this._hideClone(), w("revert"), Ae.eventCanceled || (Oa ? dt.insertBefore(oe, Oa) : dt.appendChild(oe)), E(!0);
      var C = Vd(i, p.draggable);
      if (!C || YS(r, b, this) && !C.animated) {
        if (C === oe)
          return E(!1);
        if (C && i === r.target && (s = C), s && (u = Tt(s)), Nl(dt, i, oe, l, s, u, r, !!s) !== !1)
          return T(), C && C.nextSibling ? i.insertBefore(oe, C.nextSibling) : i.appendChild(oe), _t = i, k(), E(!0);
      } else if (C && VS(r, b, this)) {
        var N = Pi(i, 0, p, !0);
        if (N === oe)
          return E(!1);
        if (s = N, u = Tt(s), Nl(dt, i, oe, l, s, u, r, !1) !== !1)
          return T(), i.insertBefore(oe, N), _t = i, k(), E(!0);
      } else if (s.parentNode === i) {
        u = Tt(s);
        var j = 0, R, q = oe.parentNode !== i, V = !HS(oe.animated && oe.toRect || l, s.animated && s.toRect || u, b), U = b ? "top" : "left", Y = Sv(s, "top", "top") || Sv(oe, "top", "top"), G = Y ? Y.scrollTop : void 0;
        Ni !== s && (R = u[U], no = !1, Cl = !V && p.invertSwap || q), j = XS(r, s, u, b, V ? 1 : p.swapThreshold, p.invertedSwapThreshold == null ? p.swapThreshold : p.invertedSwapThreshold, Cl, Ni === s);
        var le;
        if (j !== 0) {
          var fe = Bn(oe);
          do
            fe -= j, le = _t.children[fe];
          while (le && (we(le, "display") === "none" || le === Ne));
        }
        if (j === 0 || le === s)
          return E(!1);
        Ni = s, to = j;
        var ue = s.nextElementSibling, I = !1;
        I = j === 1;
        var ne = Nl(dt, i, oe, l, s, u, r, I);
        if (ne !== !1)
          return (ne === 1 || ne === -1) && (I = ne === 1), wd = !0, setTimeout(GS, 30), T(), I && !ue ? i.appendChild(oe) : s.parentNode.insertBefore(oe, I ? ue : s), Y && b0(Y, 0, G - Y.scrollTop), _t = oe.parentNode, R !== void 0 && !Cl && (su = Math.abs(R - Tt(s)[U])), k(), E(!0);
      }
      if (i.contains(oe))
        return E(!1);
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
    if (Cn = Bn(oe), na = Bn(oe, s.draggable), ln("drop", this, {
      evt: r
    }), _t = oe && oe.parentNode, Cn = Bn(oe), na = Bn(oe, s.draggable), Ae.eventCanceled) {
      this._nulling();
      return;
    }
    Mi = !1, Cl = !1, no = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Cd(this.cloneId), Cd(this._dragStartId), this.nativeDraggable && (Pe(document, "drop", this), Pe(i, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Ks && we(document.body, "user-select", ""), we(oe, "transform", ""), r && (Xs && (r.cancelable && r.preventDefault(), !s.dropBubble && r.stopPropagation()), Ne && Ne.parentNode && Ne.parentNode.removeChild(Ne), (dt === _t || qt && qt.lastPutMode !== "clone") && gt && gt.parentNode && gt.parentNode.removeChild(gt), oe && (this.nativeDraggable && Pe(oe, "dragend", this), td(oe), oe.style["will-change"] = "", Xs && !Mi && wn(oe, qt ? qt.options.ghostClass : this.options.ghostClass, !1), wn(oe, this.options.chosenClass, !1), Kt({
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
    ln("nulling", this), dt = oe = _t = Ne = Oa = gt = iu = ra = Na = Vn = Xs = Cn = na = Di = eo = Ni = to = qt = wl = Ae.dragged = Ae.ghost = Ae.clone = Ae.active = null, gu.forEach(function(r) {
      r.checked = !0;
    }), gu.length = Kf = Wf = 0;
  },
  handleEvent: function(r) {
    switch (r.type) {
      case "drop":
      case "dragend":
        this._onDrop(r);
        break;
      case "dragenter":
      case "dragover":
        oe && (this._onDragOver(r), ZS(r));
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
      i = s[l], Xn(i, f.draggable, this.el, !1) && r.push(i.getAttribute(f.dataIdAttr) || JS(i));
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
      Xn(p, this.options.draggable, l, !1) && (s[u] = p);
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
    return Xn(r, i || this.options.draggable, this.el, !1);
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
    typeof l < "u" ? s[r] = l : s[r] = i, r === "group" && w0(s);
  },
  /**
   * Destroy
   */
  destroy: function() {
    ln("destroy", this);
    var r = this.el;
    r[cn] = null, Pe(r, "mousedown", this._onTapStart), Pe(r, "touchstart", this._onTapStart), Pe(r, "pointerdown", this._onTapStart), this.nativeDraggable && (Pe(r, "dragover", this), Pe(r, "dragenter", this)), Array.prototype.forEach.call(r.querySelectorAll("[draggable]"), function(i) {
      i.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), mu.splice(mu.indexOf(this.el), 1), this.el = r = null;
  },
  _hideClone: function() {
    if (!ra) {
      if (ln("hideClone", this), Ae.eventCanceled) return;
      we(gt, "display", "none"), this.options.removeCloneOnHide && gt.parentNode && gt.parentNode.removeChild(gt), ra = !0;
    }
  },
  _showClone: function(r) {
    if (r.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (ra) {
      if (ln("showClone", this), Ae.eventCanceled) return;
      oe.parentNode == dt && !this.options.group.revertClone ? dt.insertBefore(gt, oe) : Oa ? dt.insertBefore(gt, Oa) : dt.appendChild(gt), this.options.group.revertClone && this.animate(oe, gt), we(gt, "display", ""), ra = !1;
    }
  }
};
function ZS(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
}
function Nl(t, r, i, s, l, u, f, p) {
  var d, g = t[cn], m = g.options.onMove, S;
  return window.CustomEvent && !Or && !io ? d = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (d = document.createEvent("Event"), d.initEvent("move", !0, !0)), d.to = r, d.from = t, d.dragged = i, d.draggedRect = s, d.related = l || r, d.relatedRect = u || Tt(r), d.willInsertAfter = p, d.originalEvent = f, t.dispatchEvent(d), m && (S = m.call(g, d, f)), S;
}
function td(t) {
  t.draggable = !1;
}
function GS() {
  wd = !1;
}
function VS(t, r, i) {
  var s = Tt(Pi(i.el, 0, i.options, !0)), l = S0(i.el, i.options, Ne), u = 10;
  return r ? t.clientX < l.left - u || t.clientY < s.top && t.clientX < s.right : t.clientY < l.top - u || t.clientY < s.bottom && t.clientX < s.left;
}
function YS(t, r, i) {
  var s = Tt(Vd(i.el, i.options.draggable)), l = S0(i.el, i.options, Ne), u = 10;
  return r ? t.clientX > l.right + u || t.clientY > s.bottom && t.clientX > s.left : t.clientY > l.bottom + u || t.clientX > s.right && t.clientY > s.top;
}
function XS(t, r, i, s, l, u, f, p) {
  var d = s ? t.clientY : t.clientX, g = s ? i.height : i.width, m = s ? i.top : i.left, S = s ? i.bottom : i.right, y = !1;
  if (!f) {
    if (p && su < g * l) {
      if (!no && (to === 1 ? d > m + g * u / 2 : d < S - g * u / 2) && (no = !0), no)
        y = !0;
      else if (to === 1 ? d < m + su : d > S - su)
        return -to;
    } else if (d > m + g * (1 - l) / 2 && d < S - g * (1 - l) / 2)
      return $S(r);
  }
  return y = y || f, y && (d < m + g * u / 2 || d > S - g * u / 2) ? d > m + g / 2 ? 1 : -1 : 0;
}
function $S(t) {
  return Bn(oe) < Bn(t) ? 1 : -1;
}
function JS(t) {
  for (var r = t.tagName + t.className + t.src + t.href + t.textContent, i = r.length, s = 0; i--; )
    s += r.charCodeAt(i);
  return s.toString(36);
}
function QS(t) {
  gu.length = 0;
  for (var r = t.getElementsByTagName("input"), i = r.length; i--; ) {
    var s = r[i];
    s.checked && gu.push(s);
  }
}
function ou(t) {
  return setTimeout(t, 0);
}
function Cd(t) {
  return clearTimeout(t);
}
wu && Ue(document, "touchmove", function(t) {
  (Ae.active || Mi) && t.cancelable && t.preventDefault();
});
Ae.utils = {
  on: Ue,
  off: Pe,
  css: we,
  find: v0,
  is: function(r, i) {
    return !!Xn(r, i, r, !1);
  },
  extend: DS,
  throttle: y0,
  closest: Xn,
  toggleClass: wn,
  clone: _0,
  index: Bn,
  nextTick: ou,
  cancelNextTick: Cd,
  detectDirection: E0,
  getChild: Pi,
  expando: cn
};
Ae.get = function(t) {
  return t[cn];
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
Ae.version = jS;
var Nt = [], $s, Ad, Nd = !1, nd, rd, vu, Js;
function KS() {
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
      this.sortable.nativeDraggable ? Pe(document, "dragover", this._handleAutoScroll) : (Pe(document, "pointermove", this._handleFallbackAutoScroll), Pe(document, "touchmove", this._handleFallbackAutoScroll), Pe(document, "mousemove", this._handleFallbackAutoScroll)), Av(), lu(), RS();
    },
    nulling: function() {
      vu = Ad = $s = Nd = Js = nd = rd = null, Nt.length = 0;
    },
    _handleFallbackAutoScroll: function(i) {
      this._handleAutoScroll(i, !0);
    },
    _handleAutoScroll: function(i, s) {
      var l = this, u = (i.touches ? i.touches[0] : i).clientX, f = (i.touches ? i.touches[0] : i).clientY, p = document.elementFromPoint(u, f);
      if (vu = i, s || this.options.forceAutoScrollFallback || io || Or || Ks) {
        ad(i, this.options, p, s);
        var d = aa(p, !0);
        Nd && (!Js || u !== nd || f !== rd) && (Js && Av(), Js = setInterval(function() {
          var g = aa(document.elementFromPoint(u, f), !0);
          g !== d && (d = g, lu()), ad(i, l.options, g, s);
        }, 10), nd = u, rd = f);
      } else {
        if (!this.options.bubbleScroll || aa(p, !0) === ir()) {
          lu();
          return;
        }
        ad(i, this.options, aa(p, !1), !1);
      }
    }
  }, Tr(t, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function lu() {
  Nt.forEach(function(t) {
    clearInterval(t.pid);
  }), Nt = [];
}
function Av() {
  clearInterval(Js);
}
var ad = y0(function(t, r, i, s) {
  if (r.scroll) {
    var l = (t.touches ? t.touches[0] : t).clientX, u = (t.touches ? t.touches[0] : t).clientY, f = r.scrollSensitivity, p = r.scrollSpeed, d = ir(), g = !1, m;
    Ad !== i && (Ad = i, lu(), $s = r.scroll, m = r.scrollFn, $s === !0 && ($s = aa(i, !0)));
    var S = 0, y = $s;
    do {
      var b = y, h = Tt(b), x = h.top, w = h.bottom, T = h.left, E = h.right, k = h.width, C = h.height, N = void 0, j = void 0, R = b.scrollWidth, q = b.scrollHeight, V = we(b), U = b.scrollLeft, Y = b.scrollTop;
      b === d ? (N = k < R && (V.overflowX === "auto" || V.overflowX === "scroll" || V.overflowX === "visible"), j = C < q && (V.overflowY === "auto" || V.overflowY === "scroll" || V.overflowY === "visible")) : (N = k < R && (V.overflowX === "auto" || V.overflowX === "scroll"), j = C < q && (V.overflowY === "auto" || V.overflowY === "scroll"));
      var G = N && (Math.abs(E - l) <= f && U + k < R) - (Math.abs(T - l) <= f && !!U), le = j && (Math.abs(w - u) <= f && Y + C < q) - (Math.abs(x - u) <= f && !!Y);
      if (!Nt[S])
        for (var fe = 0; fe <= S; fe++)
          Nt[fe] || (Nt[fe] = {});
      (Nt[S].vx != G || Nt[S].vy != le || Nt[S].el !== b) && (Nt[S].el = b, Nt[S].vx = G, Nt[S].vy = le, clearInterval(Nt[S].pid), (G != 0 || le != 0) && (g = !0, Nt[S].pid = setInterval((function() {
        s && this.layer === 0 && Ae.active._onTouchMove(vu);
        var ue = Nt[this.layer].vy ? Nt[this.layer].vy * p : 0, I = Nt[this.layer].vx ? Nt[this.layer].vx * p : 0;
        typeof m == "function" && m.call(Ae.dragged.parentNode[cn], I, ue, t, vu, Nt[this.layer].el) !== "continue" || b0(Nt[this.layer].el, I, ue);
      }).bind({
        layer: S
      }), 24))), S++;
    } while (r.bubbleScroll && y !== d && (y = aa(y, !1)));
    Nd = g;
  }
}, 30), N0 = function(r) {
  var i = r.originalEvent, s = r.putSortable, l = r.dragEl, u = r.activeSortable, f = r.dispatchSortableEvent, p = r.hideGhostForTarget, d = r.unhideGhostForTarget;
  if (i) {
    var g = s || u;
    p();
    var m = i.changedTouches && i.changedTouches.length ? i.changedTouches[0] : i, S = document.elementFromPoint(m.clientX, m.clientY);
    d(), g && !g.el.contains(S) && (f("spill"), this.onSpill({
      dragEl: l,
      putSortable: s
    }));
  }
};
function Yd() {
}
Yd.prototype = {
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
  drop: N0
};
Tr(Yd, {
  pluginName: "revertOnSpill"
});
function Xd() {
}
Xd.prototype = {
  onSpill: function(r) {
    var i = r.dragEl, s = r.putSortable, l = s || this.sortable;
    l.captureAnimationState(), i.parentNode && i.parentNode.removeChild(i), l.animateAll();
  },
  drop: N0
};
Tr(Xd, {
  pluginName: "removeOnSpill"
});
Ae.mount(new KS());
Ae.mount(Xd, Yd);
const Td = `=======

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
{{/if}}`, WS = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide your response wrapped ONLY in a single <response> XML tag.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
<response>Generated content for the field goes here.</response>
\`\`\``, ex = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide your response as a JSON object with a single key "response" containing the generated content as a string.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
{
  "response": "Generated content for the field goes here."
}
\`\`\``, tx = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide ONLY the raw text content for the field, without any formatting, XML tags, JSON structure, or explanatory text. Just the content itself.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
Generated content for the field goes here.
\`\`\``, O0 = "{{activeFormatInstructions}}", k0 = `{{#is_not_empty lorebooks}}
## Selected Lorebooks for Context
{{#each lorebooks}}
### {{@key}}
  {{#each this as |entry|}}
#### {{#if entry.comment}}{{entry.comment}}{{else}}*No title*{{/if}}
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}

  {{/each}}


{{/each}}
{{/is_not_empty}}`, nx = `### {{character.name}}
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
{{/is_not_empty}}`, rx = `## User's Persona Description
name: {{user}}
{{persona}}`, j0 = `Your task is to generate the content for the "{{targetField}}" field of a character card. Base your response on the preceding context (chat history, persona, system prompts, character/lore definitions, existing fields, etc.).
{{#if userInstructions}}

Follow these user instructions: {{userInstructions}}
{{/if}}
{{#if fieldSpecificInstructions}}

Field-specific instructions: {{fieldSpecificInstructions}}
{{/if}}`, ax = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid JSON object that strictly adheres to the provided JSON schema.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire JSON object in a markdown code block (```json\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The JSON object inside the code block MUST be valid and conform to the schema.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```json\n{{example_response}}\n```", ix = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid XML structure that strictly adheres to the provided example.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire XML object in a markdown code block (```xml\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The XML object inside the code block MUST be valid.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```json\n{{example_response}}\n```", sx = `You are an expert character writer assisting a user. Your task is to respond with the modified character data in the required structured format.
Your justification should be friendly and conversational. Be direct and focus on the changes you've made. Vary your responses and do not start every message the same way. Do not repeat the user's request back to them.

For this session, we are focusing on: {{#if isFieldSession}}the "{{targetLabel}}" field.{{else}}the entire character card.{{/if}}

Initial character state is provided in the context. Read the user's request, and provide a response that incorporates their changes.`, M0 = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ox = M0 + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", lx = "[" + M0 + "][" + ox + "]*", ux = new RegExp("^" + lx + "$");
function D0(t, r) {
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
const $d = function(t) {
  const r = ux.exec(t);
  return !(r === null || typeof r > "u");
};
function cx(t) {
  return typeof t < "u";
}
const fx = {
  allowBooleanAttributes: !1,
  //A tag can have attributes without any value
  unpairedTags: []
};
function R0(t, r) {
  r = Object.assign({}, fx, r);
  const i = [];
  let s = !1, l = !1;
  t[0] === "\uFEFF" && (t = t.substr(1));
  for (let u = 0; u < t.length; u++)
    if (t[u] === "<" && t[u + 1] === "?") {
      if (u += 2, u = Tv(t, u), u.err) return u;
    } else if (t[u] === "<") {
      let f = u;
      if (u++, t[u] === "!") {
        u = Ov(t, u);
        continue;
      } else {
        let p = !1;
        t[u] === "/" && (p = !0, u++);
        let d = "";
        for (; u < t.length && t[u] !== ">" && t[u] !== " " && t[u] !== "	" && t[u] !== `
` && t[u] !== "\r"; u++)
          d += t[u];
        if (d = d.trim(), d[d.length - 1] === "/" && (d = d.substring(0, d.length - 1), u--), !bx(d)) {
          let S;
          return d.trim().length === 0 ? S = "Invalid space after '<'." : S = "Tag '" + d + "' is an invalid name.", wt("InvalidTag", S, Wt(t, u));
        }
        const g = px(t, u);
        if (g === !1)
          return wt("InvalidAttr", "Attributes for '" + d + "' have open quote.", Wt(t, u));
        let m = g.value;
        if (u = g.index, m[m.length - 1] === "/") {
          const S = u - m.length;
          m = m.substring(0, m.length - 1);
          const y = kv(m, r);
          if (y === !0)
            s = !0;
          else
            return wt(y.err.code, y.err.msg, Wt(t, S + y.err.line));
        } else if (p)
          if (g.tagClosed) {
            if (m.trim().length > 0)
              return wt("InvalidTag", "Closing tag '" + d + "' can't have attributes or invalid starting.", Wt(t, f));
            if (i.length === 0)
              return wt("InvalidTag", "Closing tag '" + d + "' has not been opened.", Wt(t, f));
            {
              const S = i.pop();
              if (d !== S.tagName) {
                let y = Wt(t, S.tagStartPos);
                return wt(
                  "InvalidTag",
                  "Expected closing tag '" + S.tagName + "' (opened in line " + y.line + ", col " + y.col + ") instead of closing tag '" + d + "'.",
                  Wt(t, f)
                );
              }
              i.length == 0 && (l = !0);
            }
          } else return wt("InvalidTag", "Closing tag '" + d + "' doesn't have proper closing.", Wt(t, u));
        else {
          const S = kv(m, r);
          if (S !== !0)
            return wt(S.err.code, S.err.msg, Wt(t, u - m.length + S.err.line));
          if (l === !0)
            return wt("InvalidXml", "Multiple possible root nodes found.", Wt(t, u));
          r.unpairedTags.indexOf(d) !== -1 || i.push({ tagName: d, tagStartPos: f }), s = !0;
        }
        for (u++; u < t.length; u++)
          if (t[u] === "<")
            if (t[u + 1] === "!") {
              u++, u = Ov(t, u);
              continue;
            } else if (t[u + 1] === "?") {
              if (u = Tv(t, ++u), u.err) return u;
            } else
              break;
          else if (t[u] === "&") {
            const S = vx(t, u);
            if (S == -1)
              return wt("InvalidChar", "char '&' is not expected.", Wt(t, u));
            u = S;
          } else if (l === !0 && !Nv(t[u]))
            return wt("InvalidXml", "Extra text at the end", Wt(t, u));
        t[u] === "<" && u--;
      }
    } else {
      if (Nv(t[u]))
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
function Nv(t) {
  return t === " " || t === "	" || t === `
` || t === "\r";
}
function Tv(t, r) {
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
function Ov(t, r) {
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
const dx = '"', hx = "'";
function px(t, r) {
  let i = "", s = "", l = !1;
  for (; r < t.length; r++) {
    if (t[r] === dx || t[r] === hx)
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
const mx = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function kv(t, r) {
  const i = D0(t, mx), s = {};
  for (let l = 0; l < i.length; l++) {
    if (i[l][1].length === 0)
      return wt("InvalidAttr", "Attribute '" + i[l][2] + "' has no space in starting.", Us(i[l]));
    if (i[l][3] !== void 0 && i[l][4] === void 0)
      return wt("InvalidAttr", "Attribute '" + i[l][2] + "' is without value.", Us(i[l]));
    if (i[l][3] === void 0 && !r.allowBooleanAttributes)
      return wt("InvalidAttr", "boolean attribute '" + i[l][2] + "' is not allowed.", Us(i[l]));
    const u = i[l][2];
    if (!yx(u))
      return wt("InvalidAttr", "Attribute '" + u + "' is an invalid name.", Us(i[l]));
    if (!s.hasOwnProperty(u))
      s[u] = 1;
    else
      return wt("InvalidAttr", "Attribute '" + u + "' is repeated.", Us(i[l]));
  }
  return !0;
}
function gx(t, r) {
  let i = /\d/;
  for (t[r] === "x" && (r++, i = /[\da-fA-F]/); r < t.length; r++) {
    if (t[r] === ";")
      return r;
    if (!t[r].match(i))
      break;
  }
  return -1;
}
function vx(t, r) {
  if (r++, t[r] === ";")
    return -1;
  if (t[r] === "#")
    return r++, gx(t, r);
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
function yx(t) {
  return $d(t);
}
function bx(t) {
  return $d(t);
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
const _x = {
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
}, Sx = function(t) {
  return Object.assign({}, _x, t);
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
function xx(t, r) {
  const i = {};
  if (t[r + 3] === "O" && t[r + 4] === "C" && t[r + 5] === "T" && t[r + 6] === "Y" && t[r + 7] === "P" && t[r + 8] === "E") {
    r = r + 9;
    let s = 1, l = !1, u = !1, f = "";
    for (; r < t.length; r++)
      if (t[r] === "<" && !u) {
        if (l && Cx(t, r)) {
          r += 7;
          let p, d;
          [p, d, r] = Ex(t, r + 1), d.indexOf("&") === -1 && (i[Ox(p)] = {
            regx: RegExp(`&${p};`, "g"),
            val: d
          });
        } else if (l && Ax(t, r)) r += 8;
        else if (l && Nx(t, r)) r += 8;
        else if (l && Tx(t, r)) r += 9;
        else if (wx) u = !0;
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
function Ex(t, r) {
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
function wx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "-" && t[r + 3] === "-";
}
function Cx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "E" && t[r + 3] === "N" && t[r + 4] === "T" && t[r + 5] === "I" && t[r + 6] === "T" && t[r + 7] === "Y";
}
function Ax(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "E" && t[r + 3] === "L" && t[r + 4] === "E" && t[r + 5] === "M" && t[r + 6] === "E" && t[r + 7] === "N" && t[r + 8] === "T";
}
function Nx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "A" && t[r + 3] === "T" && t[r + 4] === "T" && t[r + 5] === "L" && t[r + 6] === "I" && t[r + 7] === "S" && t[r + 8] === "T";
}
function Tx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "N" && t[r + 3] === "O" && t[r + 4] === "T" && t[r + 5] === "A" && t[r + 6] === "T" && t[r + 7] === "I" && t[r + 8] === "O" && t[r + 9] === "N";
}
function Ox(t) {
  if ($d(t))
    return t;
  throw new Error(`Invalid entity name ${t}`);
}
const kx = /^[-+]?0x[a-fA-F0-9]+$/, jx = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, Mx = {
  hex: !0,
  // oct: false,
  leadingZeros: !0,
  decimalPoint: ".",
  eNotation: !0
  //skipLike: /regex/
};
function Dx(t, r = {}) {
  if (r = Object.assign({}, Mx, r), !t || typeof t != "string") return t;
  let i = t.trim();
  if (r.skipLike !== void 0 && r.skipLike.test(i)) return t;
  if (t === "0") return 0;
  if (r.hex && kx.test(i))
    return zx(i, 16);
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
    const s = jx.exec(i);
    if (s) {
      const l = s[1], u = s[2];
      let f = Rx(s[3]);
      if (!r.leadingZeros && u.length > 0 && l && i[2] !== ".") return t;
      if (!r.leadingZeros && u.length > 0 && !l && i[1] !== ".") return t;
      if (r.leadingZeros && u === t) return 0;
      {
        const p = Number(i), d = "" + p;
        return d.search(/[eE]/) !== -1 ? r.eNotation ? p : t : i.indexOf(".") !== -1 ? d === "0" && f === "" || d === f || l && d === "-" + f ? p : t : u ? f === d || l + f === d ? p : t : i === d || i === l + d ? p : t;
      }
    } else
      return t;
  }
}
function Rx(t) {
  return t && t.indexOf(".") !== -1 && (t = t.replace(/0+$/, ""), t === "." ? t = "0" : t[0] === "." ? t = "0" + t : t[t.length - 1] === "." && (t = t.substr(0, t.length - 1))), t;
}
function zx(t, r) {
  if (parseInt) return parseInt(t, r);
  if (Number.parseInt) return Number.parseInt(t, r);
  if (window && window.parseInt) return window.parseInt(t, r);
  throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
}
function Lx(t) {
  return typeof t == "function" ? t : Array.isArray(t) ? (r) => {
    for (const i of t)
      if (typeof i == "string" && r === i || i instanceof RegExp && i.test(r))
        return !0;
  } : () => !1;
}
class Ix {
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
    }, this.addExternalEntities = Px, this.parseXml = Fx, this.parseTextData = Bx, this.resolveNameSpace = Ux, this.buildAttributesMap = qx, this.isItStopNode = Yx, this.replaceEntitiesValue = Gx, this.readStopNodeData = $x, this.saveTextToParentTag = Vx, this.addChild = Zx, this.ignoreAttributesFn = Lx(this.options.ignoreAttributes);
  }
}
function Px(t) {
  const r = Object.keys(t);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    this.lastEntities[s] = {
      regex: new RegExp("&" + s + ";", "g"),
      val: t[s]
    };
  }
}
function Bx(t, r, i, s, l, u, f) {
  if (t !== void 0 && (this.options.trimValues && !s && (t = t.trim()), t.length > 0)) {
    f || (t = this.replaceEntitiesValue(t));
    const p = this.options.tagValueProcessor(r, t, i, l, u);
    return p == null ? t : typeof p != typeof t || p !== t ? p : this.options.trimValues ? kd(t, this.options.parseTagValue, this.options.numberParseOptions) : t.trim() === t ? kd(t, this.options.parseTagValue, this.options.numberParseOptions) : t;
  }
}
function Ux(t) {
  if (this.options.removeNSPrefix) {
    const r = t.split(":"), i = t.charAt(0) === "/" ? "/" : "";
    if (r[0] === "xmlns")
      return "";
    r.length === 2 && (t = i + r[1]);
  }
  return t;
}
const Hx = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function qx(t, r, i) {
  if (this.options.ignoreAttributes !== !0 && typeof t == "string") {
    const s = D0(t, Hx), l = s.length, u = {};
    for (let f = 0; f < l; f++) {
      const p = this.resolveNameSpace(s[f][1]);
      if (this.ignoreAttributesFn(p, r))
        continue;
      let d = s[f][4], g = this.options.attributeNamePrefix + p;
      if (p.length)
        if (this.options.transformAttributeName && (g = this.options.transformAttributeName(g)), g === "__proto__" && (g = "#__proto__"), d !== void 0) {
          this.options.trimValues && (d = d.trim()), d = this.replaceEntitiesValue(d);
          const m = this.options.attributeValueProcessor(p, d, r);
          m == null ? u[g] = d : typeof m != typeof d || m !== d ? u[g] = m : u[g] = kd(
            d,
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
const Fx = function(t) {
  t = t.replace(/\r\n?/g, `
`);
  const r = new Hs("!xml");
  let i = r, s = "", l = "";
  for (let u = 0; u < t.length; u++)
    if (t[u] === "<")
      if (t[u + 1] === "/") {
        const p = Da(t, ">", u, "Closing Tag is not closed.");
        let d = t.substring(u + 2, p).trim();
        if (this.options.removeNSPrefix) {
          const S = d.indexOf(":");
          S !== -1 && (d = d.substr(S + 1));
        }
        this.options.transformTagName && (d = this.options.transformTagName(d)), i && (s = this.saveTextToParentTag(s, i, l));
        const g = l.substring(l.lastIndexOf(".") + 1);
        if (d && this.options.unpairedTags.indexOf(d) !== -1)
          throw new Error(`Unpaired tag can not be used as closing tag: </${d}>`);
        let m = 0;
        g && this.options.unpairedTags.indexOf(g) !== -1 ? (m = l.lastIndexOf(".", l.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : m = l.lastIndexOf("."), l = l.substring(0, m), i = this.tagsNodeStack.pop(), s = "", u = p;
      } else if (t[u + 1] === "?") {
        let p = Od(t, u, !1, "?>");
        if (!p) throw new Error("Pi Tag is not closed.");
        if (s = this.saveTextToParentTag(s, i, l), !(this.options.ignoreDeclaration && p.tagName === "?xml" || this.options.ignorePiTags)) {
          const d = new Hs(p.tagName);
          d.add(this.options.textNodeName, ""), p.tagName !== p.tagExp && p.attrExpPresent && (d[":@"] = this.buildAttributesMap(p.tagExp, l, p.tagName)), this.addChild(i, d, l);
        }
        u = p.closeIndex + 1;
      } else if (t.substr(u + 1, 3) === "!--") {
        const p = Da(t, "-->", u + 4, "Comment is not closed.");
        if (this.options.commentPropName) {
          const d = t.substring(u + 4, p - 2);
          s = this.saveTextToParentTag(s, i, l), i.add(this.options.commentPropName, [{ [this.options.textNodeName]: d }]);
        }
        u = p;
      } else if (t.substr(u + 1, 2) === "!D") {
        const p = xx(t, u);
        this.docTypeEntities = p.entities, u = p.i;
      } else if (t.substr(u + 1, 2) === "![") {
        const p = Da(t, "]]>", u, "CDATA is not closed.") - 2, d = t.substring(u + 9, p);
        s = this.saveTextToParentTag(s, i, l);
        let g = this.parseTextData(d, i.tagname, l, !0, !1, !0, !0);
        g == null && (g = ""), this.options.cdataPropName ? i.add(this.options.cdataPropName, [{ [this.options.textNodeName]: d }]) : i.add(this.options.textNodeName, g), u = p + 2;
      } else {
        let p = Od(t, u, this.options.removeNSPrefix), d = p.tagName;
        const g = p.rawTagName;
        let m = p.tagExp, S = p.attrExpPresent, y = p.closeIndex;
        this.options.transformTagName && (d = this.options.transformTagName(d)), i && s && i.tagname !== "!xml" && (s = this.saveTextToParentTag(s, i, l, !1));
        const b = i;
        if (b && this.options.unpairedTags.indexOf(b.tagname) !== -1 && (i = this.tagsNodeStack.pop(), l = l.substring(0, l.lastIndexOf("."))), d !== r.tagname && (l += l ? "." + d : d), this.isItStopNode(this.options.stopNodes, l, d)) {
          let h = "";
          if (m.length > 0 && m.lastIndexOf("/") === m.length - 1)
            d[d.length - 1] === "/" ? (d = d.substr(0, d.length - 1), l = l.substr(0, l.length - 1), m = d) : m = m.substr(0, m.length - 1), u = p.closeIndex;
          else if (this.options.unpairedTags.indexOf(d) !== -1)
            u = p.closeIndex;
          else {
            const w = this.readStopNodeData(t, g, y + 1);
            if (!w) throw new Error(`Unexpected end of ${g}`);
            u = w.i, h = w.tagContent;
          }
          const x = new Hs(d);
          d !== m && S && (x[":@"] = this.buildAttributesMap(m, l, d)), h && (h = this.parseTextData(h, d, l, !0, S, !0, !0)), l = l.substr(0, l.lastIndexOf(".")), x.add(this.options.textNodeName, h), this.addChild(i, x, l);
        } else {
          if (m.length > 0 && m.lastIndexOf("/") === m.length - 1) {
            d[d.length - 1] === "/" ? (d = d.substr(0, d.length - 1), l = l.substr(0, l.length - 1), m = d) : m = m.substr(0, m.length - 1), this.options.transformTagName && (d = this.options.transformTagName(d));
            const h = new Hs(d);
            d !== m && S && (h[":@"] = this.buildAttributesMap(m, l, d)), this.addChild(i, h, l), l = l.substr(0, l.lastIndexOf("."));
          } else {
            const h = new Hs(d);
            this.tagsNodeStack.push(i), d !== m && S && (h[":@"] = this.buildAttributesMap(m, l, d)), this.addChild(i, h, l), i = h;
          }
          s = "", u = y;
        }
      }
    else
      s += t[u];
  return r.child;
};
function Zx(t, r, i) {
  const s = this.options.updateTag(r.tagname, i, r[":@"]);
  s === !1 || (typeof s == "string" && (r.tagname = s), t.addChild(r));
}
const Gx = function(t) {
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
function Vx(t, r, i, s) {
  return t && (s === void 0 && (s = r.child.length === 0), t = this.parseTextData(
    t,
    r.tagname,
    i,
    !1,
    r[":@"] ? Object.keys(r[":@"]).length !== 0 : !1,
    s
  ), t !== void 0 && t !== "" && r.add(this.options.textNodeName, t), t = ""), t;
}
function Yx(t, r, i) {
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
function Od(t, r, i, s = ">") {
  const l = Xx(t, r + 1, s);
  if (!l) return;
  let u = l.data;
  const f = l.index, p = u.search(/\s/);
  let d = u, g = !0;
  p !== -1 && (d = u.substring(0, p), u = u.substring(p + 1).trimStart());
  const m = d;
  if (i) {
    const S = d.indexOf(":");
    S !== -1 && (d = d.substr(S + 1), g = d !== l.data.substr(S + 1));
  }
  return {
    tagName: d,
    tagExp: u,
    closeIndex: f,
    attrExpPresent: g,
    rawTagName: m
  };
}
function $x(t, r, i) {
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
        const u = Od(t, i, ">");
        u && ((u && u.tagName) === r && u.tagExp[u.tagExp.length - 1] !== "/" && l++, i = u.closeIndex);
      }
}
function kd(t, r, i) {
  if (r && typeof t == "string") {
    const s = t.trim();
    return s === "true" ? !0 : s === "false" ? !1 : Dx(t, i);
  } else
    return cx(t) ? t : "";
}
function Jx(t, r) {
  return z0(t, r);
}
function z0(t, r, i) {
  let s;
  const l = {};
  for (let u = 0; u < t.length; u++) {
    const f = t[u], p = Qx(f);
    let d = "";
    if (i === void 0 ? d = p : d = i + "." + p, p === r.textNodeName)
      s === void 0 ? s = f[p] : s += "" + f[p];
    else {
      if (p === void 0)
        continue;
      if (f[p]) {
        let g = z0(f[p], r, d);
        const m = Wx(g, r);
        f[":@"] ? Kx(g, f[":@"], d, r) : Object.keys(g).length === 1 && g[r.textNodeName] !== void 0 && !r.alwaysCreateTextNode ? g = g[r.textNodeName] : Object.keys(g).length === 0 && (r.alwaysCreateTextNode ? g[r.textNodeName] = "" : g = ""), l[p] !== void 0 && l.hasOwnProperty(p) ? (Array.isArray(l[p]) || (l[p] = [l[p]]), l[p].push(g)) : r.isArray(p, d, m) ? l[p] = [g] : l[p] = g;
      }
    }
  }
  return typeof s == "string" ? s.length > 0 && (l[r.textNodeName] = s) : s !== void 0 && (l[r.textNodeName] = s), l;
}
function Qx(t) {
  const r = Object.keys(t);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (s !== ":@") return s;
  }
}
function Kx(t, r, i, s) {
  if (r) {
    const l = Object.keys(r), u = l.length;
    for (let f = 0; f < u; f++) {
      const p = l[f];
      s.isArray(p, i + "." + p, !0, !0) ? t[p] = [r[p]] : t[p] = r[p];
    }
  }
}
function Wx(t, r) {
  const { textNodeName: i } = r, s = Object.keys(t).length;
  return !!(s === 0 || s === 1 && (t[i] || typeof t[i] == "boolean" || t[i] === 0));
}
class eE {
  constructor(r) {
    this.externalEntities = {}, this.options = Sx(r);
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
      const u = R0(r, i);
      if (u !== !0)
        throw Error(`${u.err.msg}:${u.err.line}:${u.err.col}`);
    }
    const s = new Ix(this.options);
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
const tE = {
  validate: R0
}, nE = new eE({
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
      let l = t[i];
      s.type === "array" && !Array.isArray(l) && (l = [l], t[i] = l), s.type === "object" && typeof l == "object" && l !== null ? jd(l, s) : s.type === "array" && s.items?.type === "object" && Array.isArray(l) && l.forEach((u) => jd(u, s.items)), s.type === "string" && typeof l != "string" ? t[i] = String(l) : s.type === "array" && s.items?.type === "string" && Array.isArray(l) && (t[i] = l.map(String));
    }
}
function L0(t, r, i = {}) {
  const s = /```(?:\w+\n|\n)?([\s\S]*?)```/, l = t.match(s);
  let u = l ? l[1].trim() : t.trim();
  try {
    switch (r) {
      case "xml":
        if (i.schema) {
          const d = tE.validate(u);
          if (d !== !0)
            throw new Error(`Model response is not valid XML: ${d.err.msg}`);
        }
        let f = nE.parse(u);
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
      const d = u.match(/"response":\s*"([\s\S]*)/);
      return d ? d[1].replace(/"\s*}\s*$/, "") : u;
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
var Tl = { exports: {} }, Ol = { exports: {} }, Yn = {}, un = {}, Mv;
function hn() {
  if (Mv) return un;
  Mv = 1, un.__esModule = !0, un.extend = l, un.indexOf = d, un.escapeExpression = g, un.isEmpty = m, un.createFrame = S, un.blockParams = y, un.appendContextPath = b;
  var t = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;",
    "=": "&#x3D;"
  }, r = /[&<>"'`=]/g, i = /[&<>"'`=]/;
  function s(h) {
    return t[h];
  }
  function l(h) {
    for (var x = 1; x < arguments.length; x++)
      for (var w in arguments[x])
        Object.prototype.hasOwnProperty.call(arguments[x], w) && (h[w] = arguments[x][w]);
    return h;
  }
  var u = Object.prototype.toString;
  un.toString = u;
  var f = function(x) {
    return typeof x == "function";
  };
  f(/x/) && (un.isFunction = f = function(h) {
    return typeof h == "function" && u.call(h) === "[object Function]";
  }), un.isFunction = f;
  var p = Array.isArray || function(h) {
    return h && typeof h == "object" ? u.call(h) === "[object Array]" : !1;
  };
  un.isArray = p;
  function d(h, x) {
    for (var w = 0, T = h.length; w < T; w++)
      if (h[w] === x)
        return w;
    return -1;
  }
  function g(h) {
    if (typeof h != "string") {
      if (h && h.toHTML)
        return h.toHTML();
      if (h == null)
        return "";
      if (!h)
        return h + "";
      h = "" + h;
    }
    return i.test(h) ? h.replace(r, s) : h;
  }
  function m(h) {
    return !h && h !== 0 ? !0 : !!(p(h) && h.length === 0);
  }
  function S(h) {
    var x = l({}, h);
    return x._parent = h, x;
  }
  function y(h, x) {
    return h.path = x, h;
  }
  function b(h, x) {
    return (h ? h + "." : "") + x;
  }
  return un;
}
var kl = { exports: {} }, Dv;
function Qn() {
  return Dv || (Dv = 1, (function(t, r) {
    r.__esModule = !0;
    var i = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
    function s(l, u) {
      var f = u && u.loc, p = void 0, d = void 0, g = void 0, m = void 0;
      f && (p = f.start.line, d = f.end.line, g = f.start.column, m = f.end.column, l += " - " + p + ":" + g);
      for (var S = Error.prototype.constructor.call(this, l), y = 0; y < i.length; y++)
        this[i[y]] = S[i[y]];
      Error.captureStackTrace && Error.captureStackTrace(this, s);
      try {
        f && (this.lineNumber = p, this.endLineNumber = d, Object.defineProperty ? (Object.defineProperty(this, "column", {
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
var qs = {}, jl = { exports: {} }, Rv;
function rE() {
  return Rv || (Rv = 1, (function(t, r) {
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
          var d = i.createFrame(u.data);
          d.contextPath = i.appendContextPath(u.data.contextPath, u.name), u = { data: d };
        }
        return p(l, u);
      });
    }, t.exports = r.default;
  })(jl, jl.exports)), jl.exports;
}
var Ml = { exports: {} }, zv;
function aE() {
  return zv || (zv = 1, (function(t, r) {
    r.__esModule = !0;
    function i(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var s = hn(), l = Qn(), u = i(l);
    r.default = function(f) {
      f.registerHelper("each", function(p, d) {
        if (!d)
          throw new u.default("Must pass iterator to #each");
        var g = d.fn, m = d.inverse, S = 0, y = "", b = void 0, h = void 0;
        d.data && d.ids && (h = s.appendContextPath(d.data.contextPath, d.ids[0]) + "."), s.isFunction(p) && (p = p.call(this)), d.data && (b = s.createFrame(d.data));
        function x(C, N, j) {
          b && (b.key = C, b.index = N, b.first = N === 0, b.last = !!j, h && (b.contextPath = h + C)), y = y + g(p[C], {
            data: b,
            blockParams: s.blockParams([p[C], C], [h + C, null])
          });
        }
        if (p && typeof p == "object")
          if (s.isArray(p))
            for (var w = p.length; S < w; S++)
              S in p && x(S, S, S === p.length - 1);
          else if (typeof Symbol == "function" && p[Symbol.iterator]) {
            for (var T = [], E = p[Symbol.iterator](), k = E.next(); !k.done; k = E.next())
              T.push(k.value);
            p = T;
            for (var w = p.length; S < w; S++)
              x(S, S, S === p.length - 1);
          } else
            (function() {
              var C = void 0;
              Object.keys(p).forEach(function(N) {
                C !== void 0 && x(C, S - 1), C = N, S++;
              }), C !== void 0 && x(C, S - 1, !0);
            })();
        return S === 0 && (y = m(this)), y;
      });
    }, t.exports = r.default;
  })(Ml, Ml.exports)), Ml.exports;
}
var Dl = { exports: {} }, Lv;
function iE() {
  return Lv || (Lv = 1, (function(t, r) {
    r.__esModule = !0;
    function i(u) {
      return u && u.__esModule ? u : { default: u };
    }
    var s = Qn(), l = i(s);
    r.default = function(u) {
      u.registerHelper("helperMissing", function() {
        if (arguments.length !== 1)
          throw new l.default('Missing helper: "' + arguments[arguments.length - 1].name + '"');
      });
    }, t.exports = r.default;
  })(Dl, Dl.exports)), Dl.exports;
}
var Rl = { exports: {} }, Iv;
function sE() {
  return Iv || (Iv = 1, (function(t, r) {
    r.__esModule = !0;
    function i(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var s = hn(), l = Qn(), u = i(l);
    r.default = function(f) {
      f.registerHelper("if", function(p, d) {
        if (arguments.length != 2)
          throw new u.default("#if requires exactly one argument");
        return s.isFunction(p) && (p = p.call(this)), !d.hash.includeZero && !p || s.isEmpty(p) ? d.inverse(this) : d.fn(this);
      }), f.registerHelper("unless", function(p, d) {
        if (arguments.length != 2)
          throw new u.default("#unless requires exactly one argument");
        return f.helpers.if.call(this, p, {
          fn: d.inverse,
          inverse: d.fn,
          hash: d.hash
        });
      });
    }, t.exports = r.default;
  })(Rl, Rl.exports)), Rl.exports;
}
var zl = { exports: {} }, Pv;
function oE() {
  return Pv || (Pv = 1, (function(t, r) {
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
var Ll = { exports: {} }, Bv;
function lE() {
  return Bv || (Bv = 1, (function(t, r) {
    r.__esModule = !0, r.default = function(i) {
      i.registerHelper("lookup", function(s, l, u) {
        return s && u.lookupProperty(s, l);
      });
    }, t.exports = r.default;
  })(Ll, Ll.exports)), Ll.exports;
}
var Il = { exports: {} }, Uv;
function uE() {
  return Uv || (Uv = 1, (function(t, r) {
    r.__esModule = !0;
    function i(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var s = hn(), l = Qn(), u = i(l);
    r.default = function(f) {
      f.registerHelper("with", function(p, d) {
        if (arguments.length != 2)
          throw new u.default("#with requires exactly one argument");
        s.isFunction(p) && (p = p.call(this));
        var g = d.fn;
        if (s.isEmpty(p))
          return d.inverse(this);
        var m = d.data;
        return d.data && d.ids && (m = s.createFrame(d.data), m.contextPath = s.appendContextPath(d.data.contextPath, d.ids[0])), g(p, {
          data: m,
          blockParams: s.blockParams([p], [m && m.contextPath])
        });
      });
    }, t.exports = r.default;
  })(Il, Il.exports)), Il.exports;
}
var Hv;
function I0() {
  if (Hv) return qs;
  Hv = 1, qs.__esModule = !0, qs.registerDefaultHelpers = x, qs.moveHelperToHooks = w;
  function t(T) {
    return T && T.__esModule ? T : { default: T };
  }
  var r = rE(), i = t(r), s = aE(), l = t(s), u = iE(), f = t(u), p = sE(), d = t(p), g = oE(), m = t(g), S = lE(), y = t(S), b = uE(), h = t(b);
  function x(T) {
    i.default(T), l.default(T), f.default(T), d.default(T), m.default(T), y.default(T), h.default(T);
  }
  function w(T, E, k) {
    T.helpers[E] && (T.hooks[E] = T.helpers[E], k || delete T.helpers[E]);
  }
  return qs;
}
var Pl = {}, Bl = { exports: {} }, qv;
function cE() {
  return qv || (qv = 1, (function(t, r) {
    r.__esModule = !0;
    var i = hn();
    r.default = function(s) {
      s.registerDecorator("inline", function(l, u, f, p) {
        var d = l;
        return u.partials || (u.partials = {}, d = function(g, m) {
          var S = f.partials;
          f.partials = i.extend({}, S, u.partials);
          var y = l(g, m);
          return f.partials = S, y;
        }), u.partials[p.args[0]] = p.fn, d;
      });
    }, t.exports = r.default;
  })(Bl, Bl.exports)), Bl.exports;
}
var Fv;
function fE() {
  if (Fv) return Pl;
  Fv = 1, Pl.__esModule = !0, Pl.registerDefaultDecorators = s;
  function t(l) {
    return l && l.__esModule ? l : { default: l };
  }
  var r = cE(), i = t(r);
  function s(l) {
    i.default(l);
  }
  return Pl;
}
var Ul = { exports: {} }, Zv;
function P0() {
  return Zv || (Zv = 1, (function(t, r) {
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
          for (var p = arguments.length, d = Array(p > 1 ? p - 1 : 0), g = 1; g < p; g++)
            d[g - 1] = arguments[g];
          console[f].apply(console, d);
        }
      }
    };
    r.default = s, t.exports = r.default;
  })(Ul, Ul.exports)), Ul.exports;
}
var Ti = {}, Hl = {}, Gv;
function dE() {
  if (Gv) return Hl;
  Gv = 1, Hl.__esModule = !0, Hl.createNewLookupObject = r;
  var t = hn();
  function r() {
    for (var i = arguments.length, s = Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return t.extend.apply(void 0, [/* @__PURE__ */ Object.create(null)].concat(s));
  }
  return Hl;
}
var Vv;
function B0() {
  if (Vv) return Ti;
  Vv = 1, Ti.__esModule = !0, Ti.createProtoAccessControl = u, Ti.resultIsAllowed = f, Ti.resetLoggedProperties = g;
  function t(m) {
    return m && m.__esModule ? m : { default: m };
  }
  var r = dE(), i = P0(), s = t(i), l = /* @__PURE__ */ Object.create(null);
  function u(m) {
    var S = /* @__PURE__ */ Object.create(null);
    S.constructor = !1, S.__defineGetter__ = !1, S.__defineSetter__ = !1, S.__lookupGetter__ = !1;
    var y = /* @__PURE__ */ Object.create(null);
    return y.__proto__ = !1, {
      properties: {
        whitelist: r.createNewLookupObject(y, m.allowedProtoProperties),
        defaultValue: m.allowProtoPropertiesByDefault
      },
      methods: {
        whitelist: r.createNewLookupObject(S, m.allowedProtoMethods),
        defaultValue: m.allowProtoMethodsByDefault
      }
    };
  }
  function f(m, S, y) {
    return p(typeof m == "function" ? S.methods : S.properties, y);
  }
  function p(m, S) {
    return m.whitelist[S] !== void 0 ? m.whitelist[S] === !0 : m.defaultValue !== void 0 ? m.defaultValue : (d(S), !1);
  }
  function d(m) {
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
var Yv;
function Jd() {
  if (Yv) return Yn;
  Yv = 1, Yn.__esModule = !0, Yn.HandlebarsEnvironment = h;
  function t(w) {
    return w && w.__esModule ? w : { default: w };
  }
  var r = hn(), i = Qn(), s = t(i), l = I0(), u = fE(), f = P0(), p = t(f), d = B0(), g = "4.7.8";
  Yn.VERSION = g;
  var m = 8;
  Yn.COMPILER_REVISION = m;
  var S = 7;
  Yn.LAST_COMPATIBLE_COMPILER_REVISION = S;
  var y = {
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
  Yn.REVISION_CHANGES = y;
  var b = "[object Object]";
  function h(w, T, E) {
    this.helpers = w || {}, this.partials = T || {}, this.decorators = E || {}, l.registerDefaultHelpers(this), u.registerDefaultDecorators(this);
  }
  h.prototype = {
    constructor: h,
    logger: p.default,
    log: p.default.log,
    registerHelper: function(T, E) {
      if (r.toString.call(T) === b) {
        if (E)
          throw new s.default("Arg not supported with multiple helpers");
        r.extend(this.helpers, T);
      } else
        this.helpers[T] = E;
    },
    unregisterHelper: function(T) {
      delete this.helpers[T];
    },
    registerPartial: function(T, E) {
      if (r.toString.call(T) === b)
        r.extend(this.partials, T);
      else {
        if (typeof E > "u")
          throw new s.default('Attempting to register a partial called "' + T + '" as undefined');
        this.partials[T] = E;
      }
    },
    unregisterPartial: function(T) {
      delete this.partials[T];
    },
    registerDecorator: function(T, E) {
      if (r.toString.call(T) === b) {
        if (E)
          throw new s.default("Arg not supported with multiple decorators");
        r.extend(this.decorators, T);
      } else
        this.decorators[T] = E;
    },
    unregisterDecorator: function(T) {
      delete this.decorators[T];
    },
    /**
     * Reset the memory of illegal property accesses that have already been logged.
     * @deprecated should only be used in handlebars test-cases
     */
    resetLoggedPropertyAccesses: function() {
      d.resetLoggedProperties();
    }
  };
  var x = p.default.log;
  return Yn.log = x, Yn.createFrame = r.createFrame, Yn.logger = p.default, Yn;
}
var ql = { exports: {} }, Xv;
function hE() {
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
var xr = {}, Fl = {}, $v;
function pE() {
  if ($v) return Fl;
  $v = 1, Fl.__esModule = !0, Fl.wrapHelper = t;
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
function mE() {
  if (Jv) return xr;
  Jv = 1, xr.__esModule = !0, xr.checkRevision = m, xr.template = S, xr.wrapProgram = y, xr.resolvePartial = b, xr.invokePartial = h, xr.noop = x;
  function t(C) {
    return C && C.__esModule ? C : { default: C };
  }
  function r(C) {
    if (C && C.__esModule)
      return C;
    var N = {};
    if (C != null)
      for (var j in C)
        Object.prototype.hasOwnProperty.call(C, j) && (N[j] = C[j]);
    return N.default = C, N;
  }
  var i = hn(), s = r(i), l = Qn(), u = t(l), f = Jd(), p = I0(), d = pE(), g = B0();
  function m(C) {
    var N = C && C[0] || 1, j = f.COMPILER_REVISION;
    if (!(N >= f.LAST_COMPATIBLE_COMPILER_REVISION && N <= f.COMPILER_REVISION))
      if (N < f.LAST_COMPATIBLE_COMPILER_REVISION) {
        var R = f.REVISION_CHANGES[j], q = f.REVISION_CHANGES[N];
        throw new u.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + R + ") or downgrade your runtime to an older version (" + q + ").");
      } else
        throw new u.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + C[1] + ").");
  }
  function S(C, N) {
    if (!N)
      throw new u.default("No environment passed to template");
    if (!C || !C.main)
      throw new u.default("Unknown template object: " + typeof C);
    C.main.decorator = C.main_d, N.VM.checkRevision(C.compiler);
    var j = C.compiler && C.compiler[0] === 7;
    function R(U, Y, G) {
      G.hash && (Y = s.extend({}, Y, G.hash), G.ids && (G.ids[0] = !0)), U = N.VM.resolvePartial.call(this, U, Y, G);
      var le = s.extend({}, G, {
        hooks: this.hooks,
        protoAccessControl: this.protoAccessControl
      }), fe = N.VM.invokePartial.call(this, U, Y, le);
      if (fe == null && N.compile && (G.partials[G.name] = N.compile(U, C.compilerOptions, N), fe = G.partials[G.name](Y, le)), fe != null) {
        if (G.indent) {
          for (var ue = fe.split(`
`), I = 0, ne = ue.length; I < ne && !(!ue[I] && I + 1 === ne); I++)
            ue[I] = G.indent + ue[I];
          fe = ue.join(`
`);
        }
        return fe;
      } else
        throw new u.default("The partial " + G.name + " could not be compiled when running in runtime-only mode");
    }
    var q = {
      strict: function(Y, G, le) {
        if (!Y || !(G in Y))
          throw new u.default('"' + G + '" not defined in ' + Y, {
            loc: le
          });
        return q.lookupProperty(Y, G);
      },
      lookupProperty: function(Y, G) {
        var le = Y[G];
        if (le == null || Object.prototype.hasOwnProperty.call(Y, G) || g.resultIsAllowed(le, q.protoAccessControl, G))
          return le;
      },
      lookup: function(Y, G) {
        for (var le = Y.length, fe = 0; fe < le; fe++) {
          var ue = Y[fe] && q.lookupProperty(Y[fe], G);
          if (ue != null)
            return Y[fe][G];
        }
      },
      lambda: function(Y, G) {
        return typeof Y == "function" ? Y.call(G) : Y;
      },
      escapeExpression: s.escapeExpression,
      invokePartial: R,
      fn: function(Y) {
        var G = C[Y];
        return G.decorator = C[Y + "_d"], G;
      },
      programs: [],
      program: function(Y, G, le, fe, ue) {
        var I = this.programs[Y], ne = this.fn(Y);
        return G || ue || fe || le ? I = y(this, Y, ne, G, le, fe, ue) : I || (I = this.programs[Y] = y(this, Y, ne)), I;
      },
      data: function(Y, G) {
        for (; Y && G--; )
          Y = Y._parent;
        return Y;
      },
      mergeIfNeeded: function(Y, G) {
        var le = Y || G;
        return Y && G && Y !== G && (le = s.extend({}, G, Y)), le;
      },
      // An empty object to use as replacement for null-contexts
      nullContext: Object.seal({}),
      noop: N.VM.noop,
      compilerInfo: C.compiler
    };
    function V(U) {
      var Y = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], G = Y.data;
      V._setup(Y), !Y.partial && C.useData && (G = w(U, G));
      var le = void 0, fe = C.useBlockParams ? [] : void 0;
      C.useDepths && (Y.depths ? le = U != Y.depths[0] ? [U].concat(Y.depths) : Y.depths : le = [U]);
      function ue(I) {
        return "" + C.main(q, I, q.helpers, q.partials, G, fe, le);
      }
      return ue = T(C.main, ue, q, Y.depths || [], G, fe), ue(U, Y);
    }
    return V.isTop = !0, V._setup = function(U) {
      if (U.partial)
        q.protoAccessControl = U.protoAccessControl, q.helpers = U.helpers, q.partials = U.partials, q.decorators = U.decorators, q.hooks = U.hooks;
      else {
        var Y = s.extend({}, N.helpers, U.helpers);
        E(Y, q), q.helpers = Y, C.usePartial && (q.partials = q.mergeIfNeeded(U.partials, N.partials)), (C.usePartial || C.useDecorators) && (q.decorators = s.extend({}, N.decorators, U.decorators)), q.hooks = {}, q.protoAccessControl = g.createProtoAccessControl(U);
        var G = U.allowCallsToHelperMissing || j;
        p.moveHelperToHooks(q, "helperMissing", G), p.moveHelperToHooks(q, "blockHelperMissing", G);
      }
    }, V._child = function(U, Y, G, le) {
      if (C.useBlockParams && !G)
        throw new u.default("must pass block params");
      if (C.useDepths && !le)
        throw new u.default("must pass parent depths");
      return y(q, U, C[U], Y, 0, G, le);
    }, V;
  }
  function y(C, N, j, R, q, V, U) {
    function Y(G) {
      var le = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], fe = U;
      return U && G != U[0] && !(G === C.nullContext && U[0] === null) && (fe = [G].concat(U)), j(C, G, C.helpers, C.partials, le.data || R, V && [le.blockParams].concat(V), fe);
    }
    return Y = T(j, Y, C, U, R, V), Y.program = N, Y.depth = U ? U.length : 0, Y.blockParams = q || 0, Y;
  }
  function b(C, N, j) {
    return C ? !C.call && !j.name && (j.name = C, C = j.partials[C]) : j.name === "@partial-block" ? C = j.data["partial-block"] : C = j.partials[j.name], C;
  }
  function h(C, N, j) {
    var R = j.data && j.data["partial-block"];
    j.partial = !0, j.ids && (j.data.contextPath = j.ids[0] || j.data.contextPath);
    var q = void 0;
    if (j.fn && j.fn !== x && (function() {
      j.data = f.createFrame(j.data);
      var V = j.fn;
      q = j.data["partial-block"] = function(Y) {
        var G = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
        return G.data = f.createFrame(G.data), G.data["partial-block"] = R, V(Y, G);
      }, V.partials && (j.partials = s.extend({}, j.partials, V.partials));
    })(), C === void 0 && q && (C = q), C === void 0)
      throw new u.default("The partial " + j.name + " could not be found");
    if (C instanceof Function)
      return C(N, j);
  }
  function x() {
    return "";
  }
  function w(C, N) {
    return (!N || !("root" in N)) && (N = N ? f.createFrame(N) : {}, N.root = C), N;
  }
  function T(C, N, j, R, q, V) {
    if (C.decorator) {
      var U = {};
      N = C.decorator(N, U, j, R && R[0], q, V, R), s.extend(N, U);
    }
    return N;
  }
  function E(C, N) {
    Object.keys(C).forEach(function(j) {
      var R = C[j];
      C[j] = k(R, N);
    });
  }
  function k(C, N) {
    var j = N.lookupProperty;
    return d.wrapHelper(C, function(R) {
      return s.extend({ lookupProperty: j }, R);
    });
  }
  return xr;
}
var Zl = { exports: {} }, Qv;
function U0() {
  return Qv || (Qv = 1, (function(t, r) {
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
var Kv;
function gE() {
  return Kv || (Kv = 1, (function(t, r) {
    r.__esModule = !0;
    function i(E) {
      return E && E.__esModule ? E : { default: E };
    }
    function s(E) {
      if (E && E.__esModule)
        return E;
      var k = {};
      if (E != null)
        for (var C in E)
          Object.prototype.hasOwnProperty.call(E, C) && (k[C] = E[C]);
      return k.default = E, k;
    }
    var l = Jd(), u = s(l), f = hE(), p = i(f), d = Qn(), g = i(d), m = hn(), S = s(m), y = mE(), b = s(y), h = U0(), x = i(h);
    function w() {
      var E = new u.HandlebarsEnvironment();
      return S.extend(E, u), E.SafeString = p.default, E.Exception = g.default, E.Utils = S, E.escapeExpression = S.escapeExpression, E.VM = b, E.template = function(k) {
        return b.template(k, E);
      }, E;
    }
    var T = w();
    T.create = w, x.default(T), T.default = T, r.default = T, t.exports = r.default;
  })(Ol, Ol.exports)), Ol.exports;
}
var Gl = { exports: {} }, Wv;
function H0() {
  return Wv || (Wv = 1, (function(t, r) {
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
var Oi = {}, Vl = { exports: {} }, ey;
function vE() {
  return ey || (ey = 1, (function(t, r) {
    r.__esModule = !0;
    var i = (function() {
      var s = {
        trace: function() {
        },
        yy: {},
        symbols_: { error: 2, root: 3, program: 4, EOF: 5, program_repetition0: 6, statement: 7, mustache: 8, block: 9, rawBlock: 10, partial: 11, partialBlock: 12, content: 13, COMMENT: 14, CONTENT: 15, openRawBlock: 16, rawBlock_repetition0: 17, END_RAW_BLOCK: 18, OPEN_RAW_BLOCK: 19, helperName: 20, openRawBlock_repetition0: 21, openRawBlock_option0: 22, CLOSE_RAW_BLOCK: 23, openBlock: 24, block_option0: 25, closeBlock: 26, openInverse: 27, block_option1: 28, OPEN_BLOCK: 29, openBlock_repetition0: 30, openBlock_option0: 31, openBlock_option1: 32, CLOSE: 33, OPEN_INVERSE: 34, openInverse_repetition0: 35, openInverse_option0: 36, openInverse_option1: 37, openInverseChain: 38, OPEN_INVERSE_CHAIN: 39, openInverseChain_repetition0: 40, openInverseChain_option0: 41, openInverseChain_option1: 42, inverseAndProgram: 43, INVERSE: 44, inverseChain: 45, inverseChain_option0: 46, OPEN_ENDBLOCK: 47, OPEN: 48, mustache_repetition0: 49, mustache_option0: 50, OPEN_UNESCAPED: 51, mustache_repetition1: 52, mustache_option1: 53, CLOSE_UNESCAPED: 54, OPEN_PARTIAL: 55, partialName: 56, partial_repetition0: 57, partial_option0: 58, openPartialBlock: 59, OPEN_PARTIAL_BLOCK: 60, openPartialBlock_repetition0: 61, openPartialBlock_option0: 62, param: 63, sexpr: 64, OPEN_SEXPR: 65, sexpr_repetition0: 66, sexpr_option0: 67, CLOSE_SEXPR: 68, hash: 69, hash_repetition_plus0: 70, hashSegment: 71, ID: 72, EQUALS: 73, blockParams: 74, OPEN_BLOCK_PARAMS: 75, blockParams_repetition_plus0: 76, CLOSE_BLOCK_PARAMS: 77, path: 78, dataName: 79, STRING: 80, NUMBER: 81, BOOLEAN: 82, UNDEFINED: 83, NULL: 84, DATA: 85, pathSegments: 86, SEP: 87, $accept: 0, $end: 1 },
        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 0], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
        performAction: function(p, d, g, m, S, y, b) {
          var h = y.length - 1;
          switch (S) {
            case 1:
              return y[h - 1];
            case 2:
              this.$ = m.prepareProgram(y[h]);
              break;
            case 3:
              this.$ = y[h];
              break;
            case 4:
              this.$ = y[h];
              break;
            case 5:
              this.$ = y[h];
              break;
            case 6:
              this.$ = y[h];
              break;
            case 7:
              this.$ = y[h];
              break;
            case 8:
              this.$ = y[h];
              break;
            case 9:
              this.$ = {
                type: "CommentStatement",
                value: m.stripComment(y[h]),
                strip: m.stripFlags(y[h], y[h]),
                loc: m.locInfo(this._$)
              };
              break;
            case 10:
              this.$ = {
                type: "ContentStatement",
                original: y[h],
                value: y[h],
                loc: m.locInfo(this._$)
              };
              break;
            case 11:
              this.$ = m.prepareRawBlock(y[h - 2], y[h - 1], y[h], this._$);
              break;
            case 12:
              this.$ = { path: y[h - 3], params: y[h - 2], hash: y[h - 1] };
              break;
            case 13:
              this.$ = m.prepareBlock(y[h - 3], y[h - 2], y[h - 1], y[h], !1, this._$);
              break;
            case 14:
              this.$ = m.prepareBlock(y[h - 3], y[h - 2], y[h - 1], y[h], !0, this._$);
              break;
            case 15:
              this.$ = { open: y[h - 5], path: y[h - 4], params: y[h - 3], hash: y[h - 2], blockParams: y[h - 1], strip: m.stripFlags(y[h - 5], y[h]) };
              break;
            case 16:
              this.$ = { path: y[h - 4], params: y[h - 3], hash: y[h - 2], blockParams: y[h - 1], strip: m.stripFlags(y[h - 5], y[h]) };
              break;
            case 17:
              this.$ = { path: y[h - 4], params: y[h - 3], hash: y[h - 2], blockParams: y[h - 1], strip: m.stripFlags(y[h - 5], y[h]) };
              break;
            case 18:
              this.$ = { strip: m.stripFlags(y[h - 1], y[h - 1]), program: y[h] };
              break;
            case 19:
              var x = m.prepareBlock(y[h - 2], y[h - 1], y[h], y[h], !1, this._$), w = m.prepareProgram([x], y[h - 1].loc);
              w.chained = !0, this.$ = { strip: y[h - 2].strip, program: w, chain: !0 };
              break;
            case 20:
              this.$ = y[h];
              break;
            case 21:
              this.$ = { path: y[h - 1], strip: m.stripFlags(y[h - 2], y[h]) };
              break;
            case 22:
              this.$ = m.prepareMustache(y[h - 3], y[h - 2], y[h - 1], y[h - 4], m.stripFlags(y[h - 4], y[h]), this._$);
              break;
            case 23:
              this.$ = m.prepareMustache(y[h - 3], y[h - 2], y[h - 1], y[h - 4], m.stripFlags(y[h - 4], y[h]), this._$);
              break;
            case 24:
              this.$ = {
                type: "PartialStatement",
                name: y[h - 3],
                params: y[h - 2],
                hash: y[h - 1],
                indent: "",
                strip: m.stripFlags(y[h - 4], y[h]),
                loc: m.locInfo(this._$)
              };
              break;
            case 25:
              this.$ = m.preparePartialBlock(y[h - 2], y[h - 1], y[h], this._$);
              break;
            case 26:
              this.$ = { path: y[h - 3], params: y[h - 2], hash: y[h - 1], strip: m.stripFlags(y[h - 4], y[h]) };
              break;
            case 27:
              this.$ = y[h];
              break;
            case 28:
              this.$ = y[h];
              break;
            case 29:
              this.$ = {
                type: "SubExpression",
                path: y[h - 3],
                params: y[h - 2],
                hash: y[h - 1],
                loc: m.locInfo(this._$)
              };
              break;
            case 30:
              this.$ = { type: "Hash", pairs: y[h], loc: m.locInfo(this._$) };
              break;
            case 31:
              this.$ = { type: "HashPair", key: m.id(y[h - 2]), value: y[h], loc: m.locInfo(this._$) };
              break;
            case 32:
              this.$ = m.id(y[h - 1]);
              break;
            case 33:
              this.$ = y[h];
              break;
            case 34:
              this.$ = y[h];
              break;
            case 35:
              this.$ = { type: "StringLiteral", value: y[h], original: y[h], loc: m.locInfo(this._$) };
              break;
            case 36:
              this.$ = { type: "NumberLiteral", value: Number(y[h]), original: Number(y[h]), loc: m.locInfo(this._$) };
              break;
            case 37:
              this.$ = { type: "BooleanLiteral", value: y[h] === "true", original: y[h] === "true", loc: m.locInfo(this._$) };
              break;
            case 38:
              this.$ = { type: "UndefinedLiteral", original: void 0, value: void 0, loc: m.locInfo(this._$) };
              break;
            case 39:
              this.$ = { type: "NullLiteral", original: null, value: null, loc: m.locInfo(this._$) };
              break;
            case 40:
              this.$ = y[h];
              break;
            case 41:
              this.$ = y[h];
              break;
            case 42:
              this.$ = m.preparePath(!0, y[h], this._$);
              break;
            case 43:
              this.$ = m.preparePath(!1, y[h], this._$);
              break;
            case 44:
              y[h - 2].push({ part: m.id(y[h]), original: y[h], separator: y[h - 1] }), this.$ = y[h - 2];
              break;
            case 45:
              this.$ = [{ part: m.id(y[h]), original: y[h] }];
              break;
            case 46:
              this.$ = [];
              break;
            case 47:
              y[h - 1].push(y[h]);
              break;
            case 48:
              this.$ = [];
              break;
            case 49:
              y[h - 1].push(y[h]);
              break;
            case 50:
              this.$ = [];
              break;
            case 51:
              y[h - 1].push(y[h]);
              break;
            case 58:
              this.$ = [];
              break;
            case 59:
              y[h - 1].push(y[h]);
              break;
            case 64:
              this.$ = [];
              break;
            case 65:
              y[h - 1].push(y[h]);
              break;
            case 70:
              this.$ = [];
              break;
            case 71:
              y[h - 1].push(y[h]);
              break;
            case 78:
              this.$ = [];
              break;
            case 79:
              y[h - 1].push(y[h]);
              break;
            case 82:
              this.$ = [];
              break;
            case 83:
              y[h - 1].push(y[h]);
              break;
            case 86:
              this.$ = [];
              break;
            case 87:
              y[h - 1].push(y[h]);
              break;
            case 90:
              this.$ = [];
              break;
            case 91:
              y[h - 1].push(y[h]);
              break;
            case 94:
              this.$ = [];
              break;
            case 95:
              y[h - 1].push(y[h]);
              break;
            case 98:
              this.$ = [y[h]];
              break;
            case 99:
              y[h - 1].push(y[h]);
              break;
            case 100:
              this.$ = [y[h]];
              break;
            case 101:
              y[h - 1].push(y[h]);
              break;
          }
        },
        table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 15: [2, 48], 17: 39, 18: [2, 48] }, { 20: 41, 56: 40, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 44, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 45, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 41, 56: 48, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 49, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 50] }, { 72: [1, 35], 86: 51 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 52, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 53, 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 54, 47: [2, 54] }, { 28: 59, 43: 60, 44: [1, 58], 47: [2, 56] }, { 13: 62, 15: [1, 20], 18: [1, 61] }, { 33: [2, 86], 57: 63, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 64, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 65, 47: [1, 66] }, { 30: 67, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 68, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 69, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 70, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 74, 33: [2, 80], 50: 71, 63: 72, 64: 75, 65: [1, 43], 69: 73, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 79] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 50] }, { 20: 74, 53: 80, 54: [2, 84], 63: 81, 64: 75, 65: [1, 43], 69: 82, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 83, 47: [1, 66] }, { 47: [2, 55] }, { 4: 84, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 85, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 86, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 87, 47: [1, 66] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 74, 33: [2, 88], 58: 88, 63: 89, 64: 75, 65: [1, 43], 69: 90, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 91, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 92, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 31: 93, 33: [2, 60], 63: 94, 64: 75, 65: [1, 43], 69: 95, 70: 76, 71: 77, 72: [1, 78], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 66], 36: 96, 63: 97, 64: 75, 65: [1, 43], 69: 98, 70: 76, 71: 77, 72: [1, 78], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 22: 99, 23: [2, 52], 63: 100, 64: 75, 65: [1, 43], 69: 101, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 92], 62: 102, 63: 103, 64: 75, 65: [1, 43], 69: 104, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 105] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 106, 72: [1, 107], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 108], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 109] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 111, 46: 110, 47: [2, 76] }, { 33: [2, 70], 40: 112, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 113] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 74, 63: 115, 64: 75, 65: [1, 43], 67: 114, 68: [2, 96], 69: 116, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 117] }, { 32: 118, 33: [2, 62], 74: 119, 75: [1, 120] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 121, 74: 122, 75: [1, 120] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 123] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 124] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 108] }, { 20: 74, 63: 125, 64: 75, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 74, 33: [2, 72], 41: 126, 63: 127, 64: 75, 65: [1, 43], 69: 128, 70: 76, 71: 77, 72: [1, 78], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 129] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 130] }, { 33: [2, 63] }, { 72: [1, 132], 76: 131 }, { 33: [1, 133] }, { 33: [2, 69] }, { 15: [2, 12], 18: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 134, 74: 135, 75: [1, 120] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 137], 77: [1, 136] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 138] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
        defaultActions: { 4: [2, 1], 54: [2, 55], 56: [2, 20], 60: [2, 57], 73: [2, 81], 82: [2, 85], 86: [2, 18], 90: [2, 89], 101: [2, 53], 104: [2, 93], 110: [2, 19], 111: [2, 77], 116: [2, 97], 119: [2, 63], 122: [2, 69], 135: [2, 75], 136: [2, 32] },
        parseError: function(p, d) {
          throw new Error(p);
        },
        parse: function(p) {
          var d = this, g = [0], m = [null], S = [], y = this.table, b = "", h = 0, x = 0;
          this.lexer.setInput(p), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc > "u" && (this.lexer.yylloc = {});
          var w = this.lexer.yylloc;
          S.push(w);
          var T = this.lexer.options && this.lexer.options.ranges;
          typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
          function E() {
            var le;
            return le = d.lexer.lex() || 1, typeof le != "number" && (le = d.symbols_[le] || le), le;
          }
          for (var k, C, N, j, R = {}, q, V, U, Y; ; ) {
            if (C = g[g.length - 1], this.defaultActions[C] ? N = this.defaultActions[C] : ((k === null || typeof k > "u") && (k = E()), N = y[C] && y[C][k]), typeof N > "u" || !N.length || !N[0]) {
              var G = "";
              {
                Y = [];
                for (q in y[C]) this.terminals_[q] && q > 2 && Y.push("'" + this.terminals_[q] + "'");
                this.lexer.showPosition ? G = "Parse error on line " + (h + 1) + `:
` + this.lexer.showPosition() + `
Expecting ` + Y.join(", ") + ", got '" + (this.terminals_[k] || k) + "'" : G = "Parse error on line " + (h + 1) + ": Unexpected " + (k == 1 ? "end of input" : "'" + (this.terminals_[k] || k) + "'"), this.parseError(G, { text: this.lexer.match, token: this.terminals_[k] || k, line: this.lexer.yylineno, loc: w, expected: Y });
              }
            }
            if (N[0] instanceof Array && N.length > 1)
              throw new Error("Parse Error: multiple actions possible at state: " + C + ", token: " + k);
            switch (N[0]) {
              case 1:
                g.push(k), m.push(this.lexer.yytext), S.push(this.lexer.yylloc), g.push(N[1]), k = null, x = this.lexer.yyleng, b = this.lexer.yytext, h = this.lexer.yylineno, w = this.lexer.yylloc;
                break;
              case 2:
                if (V = this.productions_[N[1]][1], R.$ = m[m.length - V], R._$ = { first_line: S[S.length - (V || 1)].first_line, last_line: S[S.length - 1].last_line, first_column: S[S.length - (V || 1)].first_column, last_column: S[S.length - 1].last_column }, T && (R._$.range = [S[S.length - (V || 1)].range[0], S[S.length - 1].range[1]]), j = this.performAction.call(R, b, x, h, this.yy, N[1], m, S), typeof j < "u")
                  return j;
                V && (g = g.slice(0, -1 * V * 2), m = m.slice(0, -1 * V), S = S.slice(0, -1 * V)), g.push(this.productions_[N[1]][0]), m.push(R.$), S.push(R._$), U = y[g[g.length - 2]][g[g.length - 1]], g.push(U);
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
          parseError: function(d, g) {
            if (this.yy.parser)
              this.yy.parser.parseError(d, g);
            else
              throw new Error(d);
          },
          setInput: function(d) {
            return this._input = d, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
          },
          input: function() {
            var d = this._input[0];
            this.yytext += d, this.yyleng++, this.offset++, this.match += d, this.matched += d;
            var g = d.match(/(?:\r\n?|\n).*/g);
            return g ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), d;
          },
          unput: function(d) {
            var g = d.length, m = d.split(/(?:\r\n?|\n)/g);
            this._input = d + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - g - 1), this.offset -= g;
            var S = this.match.split(/(?:\r\n?|\n)/g);
            this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), m.length - 1 && (this.yylineno -= m.length - 1);
            var y = this.yylloc.range;
            return this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: m ? (m.length === S.length ? this.yylloc.first_column : 0) + S[S.length - m.length].length - m[0].length : this.yylloc.first_column - g
            }, this.options.ranges && (this.yylloc.range = [y[0], y[0] + this.yyleng - g]), this;
          },
          more: function() {
            return this._more = !0, this;
          },
          less: function(d) {
            this.unput(this.match.slice(d));
          },
          pastInput: function() {
            var d = this.matched.substr(0, this.matched.length - this.match.length);
            return (d.length > 20 ? "..." : "") + d.substr(-20).replace(/\n/g, "");
          },
          upcomingInput: function() {
            var d = this.match;
            return d.length < 20 && (d += this._input.substr(0, 20 - d.length)), (d.substr(0, 20) + (d.length > 20 ? "..." : "")).replace(/\n/g, "");
          },
          showPosition: function() {
            var d = this.pastInput(), g = new Array(d.length + 1).join("-");
            return d + this.upcomingInput() + `
` + g + "^";
          },
          next: function() {
            if (this.done)
              return this.EOF;
            this._input || (this.done = !0);
            var d, g, m, S, y;
            this._more || (this.yytext = "", this.match = "");
            for (var b = this._currentRules(), h = 0; h < b.length && (m = this._input.match(this.rules[b[h]]), !(m && (!g || m[0].length > g[0].length) && (g = m, S = h, !this.options.flex))); h++)
              ;
            return g ? (y = g[0].match(/(?:\r\n?|\n).*/g), y && (this.yylineno += y.length), this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: y ? y[y.length - 1].length - y[y.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + g[0].length
            }, this.yytext += g[0], this.match += g[0], this.matches = g, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(g[0].length), this.matched += g[0], d = this.performAction.call(this, this.yy, this, b[S], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), d || void 0) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), { text: "", token: null, line: this.yylineno });
          },
          lex: function() {
            var d = this.next();
            return typeof d < "u" ? d : this.lex();
          },
          begin: function(d) {
            this.conditionStack.push(d);
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
          pushState: function(d) {
            this.begin(d);
          }
        };
        return f.options = {}, f.performAction = function(d, g, m, S) {
          function y(b, h) {
            return g.yytext = g.yytext.substring(b, g.yyleng - h + b);
          }
          switch (m) {
            case 0:
              if (g.yytext.slice(-2) === "\\\\" ? (y(0, 1), this.begin("mu")) : g.yytext.slice(-1) === "\\" ? (y(0, 1), this.begin("emu")) : this.begin("mu"), g.yytext) return 15;
              break;
            case 1:
              return 15;
            case 2:
              return this.popState(), 15;
            case 3:
              return this.begin("raw"), 15;
            case 4:
              return this.popState(), this.conditionStack[this.conditionStack.length - 1] === "raw" ? 15 : (y(5, 9), "END_RAW_BLOCK");
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
              return g.yytext = y(1, 2).replace(/\\"/g, '"'), 80;
            case 32:
              return g.yytext = y(1, 2).replace(/\\'/g, "'"), 80;
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
var Yl = { exports: {} }, Xl = { exports: {} }, ty;
function q0() {
  return ty || (ty = 1, (function(t, r) {
    r.__esModule = !0;
    function i(g) {
      return g && g.__esModule ? g : { default: g };
    }
    var s = Qn(), l = i(s);
    function u() {
      this.parents = [];
    }
    u.prototype = {
      constructor: u,
      mutating: !1,
      // Visits a given value. If mutating, will replace the value if necessary.
      acceptKey: function(m, S) {
        var y = this.accept(m[S]);
        if (this.mutating) {
          if (y && !u.prototype[y.type])
            throw new l.default('Unexpected node type "' + y.type + '" found when accepting ' + S + " on " + m.type);
          m[S] = y;
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
        for (var S = 0, y = m.length; S < y; S++)
          this.acceptKey(m, S), m[S] || (m.splice(S, 1), S--, y--);
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
      PartialStatement: d,
      PartialBlockStatement: function(m) {
        d.call(this, m), this.acceptKey(m, "program");
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
    function d(g) {
      this.acceptRequired(g, "name"), this.acceptArray(g.params), this.acceptKey(g, "hash");
    }
    r.default = u, t.exports = r.default;
  })(Xl, Xl.exports)), Xl.exports;
}
var ny;
function yE() {
  return ny || (ny = 1, (function(t, r) {
    r.__esModule = !0;
    function i(m) {
      return m && m.__esModule ? m : { default: m };
    }
    var s = q0(), l = i(s);
    function u() {
      var m = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
      this.options = m;
    }
    u.prototype = new l.default(), u.prototype.Program = function(m) {
      var S = !this.options.ignoreStandalone, y = !this.isRootSeen;
      this.isRootSeen = !0;
      for (var b = m.body, h = 0, x = b.length; h < x; h++) {
        var w = b[h], T = this.accept(w);
        if (T) {
          var E = f(b, h, y), k = p(b, h, y), C = T.openStandalone && E, N = T.closeStandalone && k, j = T.inlineStandalone && E && k;
          T.close && d(b, h, !0), T.open && g(b, h, !0), S && j && (d(b, h), g(b, h) && w.type === "PartialStatement" && (w.indent = /([ \t]+$)/.exec(b[h - 1].original)[1])), S && C && (d((w.program || w.inverse).body), g(b, h)), S && N && (d(b, h), g((w.inverse || w.program).body));
        }
      }
      return m;
    }, u.prototype.BlockStatement = u.prototype.DecoratorBlock = u.prototype.PartialBlockStatement = function(m) {
      this.accept(m.program), this.accept(m.inverse);
      var S = m.program || m.inverse, y = m.program && m.inverse, b = y, h = y;
      if (y && y.chained)
        for (b = y.body[0].program; h.chained; )
          h = h.body[h.body.length - 1].program;
      var x = {
        open: m.openStrip.open,
        close: m.closeStrip.close,
        // Determine the standalone candiacy. Basically flag our content as being possibly standalone
        // so our parent can determine if we actually are standalone
        openStandalone: p(S.body),
        closeStandalone: f((b || S).body)
      };
      if (m.openStrip.close && d(S.body, null, !0), y) {
        var w = m.inverseStrip;
        w.open && g(S.body, null, !0), w.close && d(b.body, null, !0), m.closeStrip.open && g(h.body, null, !0), !this.options.ignoreStandalone && f(S.body) && p(b.body) && (g(S.body), d(b.body));
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
    function f(m, S, y) {
      S === void 0 && (S = m.length);
      var b = m[S - 1], h = m[S - 2];
      if (!b)
        return y;
      if (b.type === "ContentStatement")
        return (h || !y ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(b.original);
    }
    function p(m, S, y) {
      S === void 0 && (S = -1);
      var b = m[S + 1], h = m[S + 2];
      if (!b)
        return y;
      if (b.type === "ContentStatement")
        return (h || !y ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(b.original);
    }
    function d(m, S, y) {
      var b = m[S == null ? 0 : S + 1];
      if (!(!b || b.type !== "ContentStatement" || !y && b.rightStripped)) {
        var h = b.value;
        b.value = b.value.replace(y ? /^\s+/ : /^[ \t]*\r?\n?/, ""), b.rightStripped = b.value !== h;
      }
    }
    function g(m, S, y) {
      var b = m[S == null ? m.length - 1 : S - 1];
      if (!(!b || b.type !== "ContentStatement" || !y && b.leftStripped)) {
        var h = b.value;
        return b.value = b.value.replace(y ? /\s+$/ : /[ \t]+$/, ""), b.leftStripped = b.value !== h, b.leftStripped;
      }
    }
    r.default = u, t.exports = r.default;
  })(Yl, Yl.exports)), Yl.exports;
}
var En = {}, ry;
function bE() {
  if (ry) return En;
  ry = 1, En.__esModule = !0, En.SourceLocation = l, En.id = u, En.stripFlags = f, En.stripComment = p, En.preparePath = d, En.prepareMustache = g, En.prepareRawBlock = m, En.prepareBlock = S, En.prepareProgram = y, En.preparePartialBlock = b;
  function t(h) {
    return h && h.__esModule ? h : { default: h };
  }
  var r = Qn(), i = t(r);
  function s(h, x) {
    if (x = x.path ? x.path.original : x, h.path.original !== x) {
      var w = { loc: h.path.loc };
      throw new i.default(h.path.original + " doesn't match " + x, w);
    }
  }
  function l(h, x) {
    this.source = h, this.start = {
      line: x.first_line,
      column: x.first_column
    }, this.end = {
      line: x.last_line,
      column: x.last_column
    };
  }
  function u(h) {
    return /^\[.*\]$/.test(h) ? h.substring(1, h.length - 1) : h;
  }
  function f(h, x) {
    return {
      open: h.charAt(2) === "~",
      close: x.charAt(x.length - 3) === "~"
    };
  }
  function p(h) {
    return h.replace(/^\{\{~?!-?-?/, "").replace(/-?-?~?\}\}$/, "");
  }
  function d(h, x, w) {
    w = this.locInfo(w);
    for (var T = h ? "@" : "", E = [], k = 0, C = 0, N = x.length; C < N; C++) {
      var j = x[C].part, R = x[C].original !== j;
      if (T += (x[C].separator || "") + j, !R && (j === ".." || j === "." || j === "this")) {
        if (E.length > 0)
          throw new i.default("Invalid path: " + T, { loc: w });
        j === ".." && k++;
      } else
        E.push(j);
    }
    return {
      type: "PathExpression",
      data: h,
      depth: k,
      parts: E,
      original: T,
      loc: w
    };
  }
  function g(h, x, w, T, E, k) {
    var C = T.charAt(3) || T.charAt(2), N = C !== "{" && C !== "&", j = /\*/.test(T);
    return {
      type: j ? "Decorator" : "MustacheStatement",
      path: h,
      params: x,
      hash: w,
      escaped: N,
      strip: E,
      loc: this.locInfo(k)
    };
  }
  function m(h, x, w, T) {
    s(h, w), T = this.locInfo(T);
    var E = {
      type: "Program",
      body: x,
      strip: {},
      loc: T
    };
    return {
      type: "BlockStatement",
      path: h.path,
      params: h.params,
      hash: h.hash,
      program: E,
      openStrip: {},
      inverseStrip: {},
      closeStrip: {},
      loc: T
    };
  }
  function S(h, x, w, T, E, k) {
    T && T.path && s(h, T);
    var C = /\*/.test(h.open);
    x.blockParams = h.blockParams;
    var N = void 0, j = void 0;
    if (w) {
      if (C)
        throw new i.default("Unexpected inverse block on decorator", w);
      w.chain && (w.program.body[0].closeStrip = T.strip), j = w.strip, N = w.program;
    }
    return E && (E = N, N = x, x = E), {
      type: C ? "DecoratorBlock" : "BlockStatement",
      path: h.path,
      params: h.params,
      hash: h.hash,
      program: x,
      inverse: N,
      openStrip: h.strip,
      inverseStrip: j,
      closeStrip: T && T.strip,
      loc: this.locInfo(k)
    };
  }
  function y(h, x) {
    if (!x && h.length) {
      var w = h[0].loc, T = h[h.length - 1].loc;
      w && T && (x = {
        source: w.source,
        start: {
          line: w.start.line,
          column: w.start.column
        },
        end: {
          line: T.end.line,
          column: T.end.column
        }
      });
    }
    return {
      type: "Program",
      body: h,
      strip: {},
      loc: x
    };
  }
  function b(h, x, w, T) {
    return s(h, w), {
      type: "PartialBlockStatement",
      name: h.path,
      params: h.params,
      hash: h.hash,
      program: x,
      openStrip: h.strip,
      closeStrip: w && w.strip,
      loc: this.locInfo(T)
    };
  }
  return En;
}
var ay;
function _E() {
  if (ay) return Oi;
  ay = 1, Oi.__esModule = !0, Oi.parseWithoutProcessing = m, Oi.parse = S;
  function t(y) {
    if (y && y.__esModule)
      return y;
    var b = {};
    if (y != null)
      for (var h in y)
        Object.prototype.hasOwnProperty.call(y, h) && (b[h] = y[h]);
    return b.default = y, b;
  }
  function r(y) {
    return y && y.__esModule ? y : { default: y };
  }
  var i = vE(), s = r(i), l = yE(), u = r(l), f = bE(), p = t(f), d = hn();
  Oi.parser = s.default;
  var g = {};
  d.extend(g, p);
  function m(y, b) {
    if (y.type === "Program")
      return y;
    s.default.yy = g, g.locInfo = function(x) {
      return new g.SourceLocation(b && b.srcName, x);
    };
    var h = s.default.parse(y);
    return h;
  }
  function S(y, b) {
    var h = m(y, b), x = new u.default(b);
    return x.accept(h);
  }
  return Oi;
}
var ki = {}, iy;
function SE() {
  if (iy) return ki;
  iy = 1, ki.__esModule = !0, ki.Compiler = p, ki.precompile = d, ki.compile = g;
  function t(y) {
    return y && y.__esModule ? y : { default: y };
  }
  var r = Qn(), i = t(r), s = hn(), l = H0(), u = t(l), f = [].slice;
  function p() {
  }
  p.prototype = {
    compiler: p,
    equals: function(b) {
      var h = this.opcodes.length;
      if (b.opcodes.length !== h)
        return !1;
      for (var x = 0; x < h; x++) {
        var w = this.opcodes[x], T = b.opcodes[x];
        if (w.opcode !== T.opcode || !m(w.args, T.args))
          return !1;
      }
      h = this.children.length;
      for (var x = 0; x < h; x++)
        if (!this.children[x].equals(b.children[x]))
          return !1;
      return !0;
    },
    guid: 0,
    compile: function(b, h) {
      return this.sourceNode = [], this.opcodes = [], this.children = [], this.options = h, this.stringParams = h.stringParams, this.trackIds = h.trackIds, h.blockParams = h.blockParams || [], h.knownHelpers = s.extend(/* @__PURE__ */ Object.create(null), {
        helperMissing: !0,
        blockHelperMissing: !0,
        each: !0,
        if: !0,
        unless: !0,
        with: !0,
        log: !0,
        lookup: !0
      }, h.knownHelpers), this.accept(b);
    },
    compileProgram: function(b) {
      var h = new this.compiler(), x = h.compile(b, this.options), w = this.guid++;
      return this.usePartial = this.usePartial || x.usePartial, this.children[w] = x, this.useDepths = this.useDepths || x.useDepths, w;
    },
    accept: function(b) {
      if (!this[b.type])
        throw new i.default("Unknown type: " + b.type, b);
      this.sourceNode.unshift(b);
      var h = this[b.type](b);
      return this.sourceNode.shift(), h;
    },
    Program: function(b) {
      this.options.blockParams.unshift(b.blockParams);
      for (var h = b.body, x = h.length, w = 0; w < x; w++)
        this.accept(h[w]);
      return this.options.blockParams.shift(), this.isSimple = x === 1, this.blockParams = b.blockParams ? b.blockParams.length : 0, this;
    },
    BlockStatement: function(b) {
      S(b);
      var h = b.program, x = b.inverse;
      h = h && this.compileProgram(h), x = x && this.compileProgram(x);
      var w = this.classifySexpr(b);
      w === "helper" ? this.helperSexpr(b, h, x) : w === "simple" ? (this.simpleSexpr(b), this.opcode("pushProgram", h), this.opcode("pushProgram", x), this.opcode("emptyHash"), this.opcode("blockValue", b.path.original)) : (this.ambiguousSexpr(b, h, x), this.opcode("pushProgram", h), this.opcode("pushProgram", x), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append");
    },
    DecoratorBlock: function(b) {
      var h = b.program && this.compileProgram(b.program), x = this.setupFullMustacheParams(b, h, void 0), w = b.path;
      this.useDecorators = !0, this.opcode("registerDecorator", x.length, w.original);
    },
    PartialStatement: function(b) {
      this.usePartial = !0;
      var h = b.program;
      h && (h = this.compileProgram(b.program));
      var x = b.params;
      if (x.length > 1)
        throw new i.default("Unsupported number of partial arguments: " + x.length, b);
      x.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : x.push({ type: "PathExpression", parts: [], depth: 0 }));
      var w = b.name.original, T = b.name.type === "SubExpression";
      T && this.accept(b.name), this.setupFullMustacheParams(b, h, void 0, !0);
      var E = b.indent || "";
      this.options.preventIndent && E && (this.opcode("appendContent", E), E = ""), this.opcode("invokePartial", T, w, E), this.opcode("append");
    },
    PartialBlockStatement: function(b) {
      this.PartialStatement(b);
    },
    MustacheStatement: function(b) {
      this.SubExpression(b), b.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append");
    },
    Decorator: function(b) {
      this.DecoratorBlock(b);
    },
    ContentStatement: function(b) {
      b.value && this.opcode("appendContent", b.value);
    },
    CommentStatement: function() {
    },
    SubExpression: function(b) {
      S(b);
      var h = this.classifySexpr(b);
      h === "simple" ? this.simpleSexpr(b) : h === "helper" ? this.helperSexpr(b) : this.ambiguousSexpr(b);
    },
    ambiguousSexpr: function(b, h, x) {
      var w = b.path, T = w.parts[0], E = h != null || x != null;
      this.opcode("getContext", w.depth), this.opcode("pushProgram", h), this.opcode("pushProgram", x), w.strict = !0, this.accept(w), this.opcode("invokeAmbiguous", T, E);
    },
    simpleSexpr: function(b) {
      var h = b.path;
      h.strict = !0, this.accept(h), this.opcode("resolvePossibleLambda");
    },
    helperSexpr: function(b, h, x) {
      var w = this.setupFullMustacheParams(b, h, x), T = b.path, E = T.parts[0];
      if (this.options.knownHelpers[E])
        this.opcode("invokeKnownHelper", w.length, E);
      else {
        if (this.options.knownHelpersOnly)
          throw new i.default("You specified knownHelpersOnly, but used the unknown helper " + E, b);
        T.strict = !0, T.falsy = !0, this.accept(T), this.opcode("invokeHelper", w.length, T.original, u.default.helpers.simpleId(T));
      }
    },
    PathExpression: function(b) {
      this.addDepth(b.depth), this.opcode("getContext", b.depth);
      var h = b.parts[0], x = u.default.helpers.scopedId(b), w = !b.depth && !x && this.blockParamIndex(h);
      w ? this.opcode("lookupBlockParam", w, b.parts) : h ? b.data ? (this.options.data = !0, this.opcode("lookupData", b.depth, b.parts, b.strict)) : this.opcode("lookupOnContext", b.parts, b.falsy, b.strict, x) : this.opcode("pushContext");
    },
    StringLiteral: function(b) {
      this.opcode("pushString", b.value);
    },
    NumberLiteral: function(b) {
      this.opcode("pushLiteral", b.value);
    },
    BooleanLiteral: function(b) {
      this.opcode("pushLiteral", b.value);
    },
    UndefinedLiteral: function() {
      this.opcode("pushLiteral", "undefined");
    },
    NullLiteral: function() {
      this.opcode("pushLiteral", "null");
    },
    Hash: function(b) {
      var h = b.pairs, x = 0, w = h.length;
      for (this.opcode("pushHash"); x < w; x++)
        this.pushParam(h[x].value);
      for (; x--; )
        this.opcode("assignToHash", h[x].key);
      this.opcode("popHash");
    },
    // HELPERS
    opcode: function(b) {
      this.opcodes.push({
        opcode: b,
        args: f.call(arguments, 1),
        loc: this.sourceNode[0].loc
      });
    },
    addDepth: function(b) {
      b && (this.useDepths = !0);
    },
    classifySexpr: function(b) {
      var h = u.default.helpers.simpleId(b.path), x = h && !!this.blockParamIndex(b.path.parts[0]), w = !x && u.default.helpers.helperExpression(b), T = !x && (w || h);
      if (T && !w) {
        var E = b.path.parts[0], k = this.options;
        k.knownHelpers[E] ? w = !0 : k.knownHelpersOnly && (T = !1);
      }
      return w ? "helper" : T ? "ambiguous" : "simple";
    },
    pushParams: function(b) {
      for (var h = 0, x = b.length; h < x; h++)
        this.pushParam(b[h]);
    },
    pushParam: function(b) {
      var h = b.value != null ? b.value : b.original || "";
      if (this.stringParams)
        h.replace && (h = h.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), b.depth && this.addDepth(b.depth), this.opcode("getContext", b.depth || 0), this.opcode("pushStringParam", h, b.type), b.type === "SubExpression" && this.accept(b);
      else {
        if (this.trackIds) {
          var x = void 0;
          if (b.parts && !u.default.helpers.scopedId(b) && !b.depth && (x = this.blockParamIndex(b.parts[0])), x) {
            var w = b.parts.slice(1).join(".");
            this.opcode("pushId", "BlockParam", x, w);
          } else
            h = b.original || h, h.replace && (h = h.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")), this.opcode("pushId", b.type, h);
        }
        this.accept(b);
      }
    },
    setupFullMustacheParams: function(b, h, x, w) {
      var T = b.params;
      return this.pushParams(T), this.opcode("pushProgram", h), this.opcode("pushProgram", x), b.hash ? this.accept(b.hash) : this.opcode("emptyHash", w), T;
    },
    blockParamIndex: function(b) {
      for (var h = 0, x = this.options.blockParams.length; h < x; h++) {
        var w = this.options.blockParams[h], T = w && s.indexOf(w, b);
        if (w && T >= 0)
          return [h, T];
      }
    }
  };
  function d(y, b, h) {
    if (y == null || typeof y != "string" && y.type !== "Program")
      throw new i.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + y);
    b = b || {}, "data" in b || (b.data = !0), b.compat && (b.useDepths = !0);
    var x = h.parse(y, b), w = new h.Compiler().compile(x, b);
    return new h.JavaScriptCompiler().compile(w, b);
  }
  function g(y, b, h) {
    if (b === void 0 && (b = {}), y == null || typeof y != "string" && y.type !== "Program")
      throw new i.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + y);
    b = s.extend({}, b), "data" in b || (b.data = !0), b.compat && (b.useDepths = !0);
    var x = void 0;
    function w() {
      var E = h.parse(y, b), k = new h.Compiler().compile(E, b), C = new h.JavaScriptCompiler().compile(k, b, void 0, !0);
      return h.template(C);
    }
    function T(E, k) {
      return x || (x = w()), x.call(this, E, k);
    }
    return T._setup = function(E) {
      return x || (x = w()), x._setup(E);
    }, T._child = function(E, k, C, N) {
      return x || (x = w()), x._child(E, k, C, N);
    }, T;
  }
  function m(y, b) {
    if (y === b)
      return !0;
    if (s.isArray(y) && s.isArray(b) && y.length === b.length) {
      for (var h = 0; h < y.length; h++)
        if (!m(y[h], b[h]))
          return !1;
      return !0;
    }
  }
  function S(y) {
    if (!y.path.parts) {
      var b = y.path;
      y.path = {
        type: "PathExpression",
        data: !1,
        depth: 0,
        parts: [b.original + ""],
        original: b.original + "",
        loc: b.loc
      };
    }
  }
  return ki;
}
var $l = { exports: {} }, Jl = { exports: {} }, Fs = {}, id = {}, Ql = {}, Kl = {}, sy;
function xE() {
  if (sy) return Kl;
  sy = 1;
  var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return Kl.encode = function(r) {
    if (0 <= r && r < t.length)
      return t[r];
    throw new TypeError("Must be between 0 and 63: " + r);
  }, Kl.decode = function(r) {
    var i = 65, s = 90, l = 97, u = 122, f = 48, p = 57, d = 43, g = 47, m = 26, S = 52;
    return i <= r && r <= s ? r - i : l <= r && r <= u ? r - l + m : f <= r && r <= p ? r - f + S : r == d ? 62 : r == g ? 63 : -1;
  }, Kl;
}
var oy;
function F0() {
  if (oy) return Ql;
  oy = 1;
  var t = xE(), r = 5, i = 1 << r, s = i - 1, l = i;
  function u(p) {
    return p < 0 ? (-p << 1) + 1 : (p << 1) + 0;
  }
  function f(p) {
    var d = (p & 1) === 1, g = p >> 1;
    return d ? -g : g;
  }
  return Ql.encode = function(d) {
    var g = "", m, S = u(d);
    do
      m = S & s, S >>>= r, S > 0 && (m |= l), g += t.encode(m);
    while (S > 0);
    return g;
  }, Ql.decode = function(d, g, m) {
    var S = d.length, y = 0, b = 0, h, x;
    do {
      if (g >= S)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (x = t.decode(d.charCodeAt(g++)), x === -1)
        throw new Error("Invalid base64 digit: " + d.charAt(g - 1));
      h = !!(x & l), x &= s, y = y + (x << b), b += r;
    } while (h);
    m.value = f(y), m.rest = g;
  }, Ql;
}
var sd = {}, ly;
function oo() {
  return ly || (ly = 1, (function(t) {
    function r(C, N, j) {
      if (N in C)
        return C[N];
      if (arguments.length === 3)
        return j;
      throw new Error('"' + N + '" is a required argument.');
    }
    t.getArg = r;
    var i = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, s = /^data:.+\,.+$/;
    function l(C) {
      var N = C.match(i);
      return N ? {
        scheme: N[1],
        auth: N[2],
        host: N[3],
        port: N[4],
        path: N[5]
      } : null;
    }
    t.urlParse = l;
    function u(C) {
      var N = "";
      return C.scheme && (N += C.scheme + ":"), N += "//", C.auth && (N += C.auth + "@"), C.host && (N += C.host), C.port && (N += ":" + C.port), C.path && (N += C.path), N;
    }
    t.urlGenerate = u;
    function f(C) {
      var N = C, j = l(C);
      if (j) {
        if (!j.path)
          return C;
        N = j.path;
      }
      for (var R = t.isAbsolute(N), q = N.split(/\/+/), V, U = 0, Y = q.length - 1; Y >= 0; Y--)
        V = q[Y], V === "." ? q.splice(Y, 1) : V === ".." ? U++ : U > 0 && (V === "" ? (q.splice(Y + 1, U), U = 0) : (q.splice(Y, 2), U--));
      return N = q.join("/"), N === "" && (N = R ? "/" : "."), j ? (j.path = N, u(j)) : N;
    }
    t.normalize = f;
    function p(C, N) {
      C === "" && (C = "."), N === "" && (N = ".");
      var j = l(N), R = l(C);
      if (R && (C = R.path || "/"), j && !j.scheme)
        return R && (j.scheme = R.scheme), u(j);
      if (j || N.match(s))
        return N;
      if (R && !R.host && !R.path)
        return R.host = N, u(R);
      var q = N.charAt(0) === "/" ? N : f(C.replace(/\/+$/, "") + "/" + N);
      return R ? (R.path = q, u(R)) : q;
    }
    t.join = p, t.isAbsolute = function(C) {
      return C.charAt(0) === "/" || i.test(C);
    };
    function d(C, N) {
      C === "" && (C = "."), C = C.replace(/\/$/, "");
      for (var j = 0; N.indexOf(C + "/") !== 0; ) {
        var R = C.lastIndexOf("/");
        if (R < 0 || (C = C.slice(0, R), C.match(/^([^\/]+:\/)?\/*$/)))
          return N;
        ++j;
      }
      return Array(j + 1).join("../") + N.substr(C.length + 1);
    }
    t.relative = d;
    var g = (function() {
      var C = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in C);
    })();
    function m(C) {
      return C;
    }
    function S(C) {
      return b(C) ? "$" + C : C;
    }
    t.toSetString = g ? m : S;
    function y(C) {
      return b(C) ? C.slice(1) : C;
    }
    t.fromSetString = g ? m : y;
    function b(C) {
      if (!C)
        return !1;
      var N = C.length;
      if (N < 9 || C.charCodeAt(N - 1) !== 95 || C.charCodeAt(N - 2) !== 95 || C.charCodeAt(N - 3) !== 111 || C.charCodeAt(N - 4) !== 116 || C.charCodeAt(N - 5) !== 111 || C.charCodeAt(N - 6) !== 114 || C.charCodeAt(N - 7) !== 112 || C.charCodeAt(N - 8) !== 95 || C.charCodeAt(N - 9) !== 95)
        return !1;
      for (var j = N - 10; j >= 0; j--)
        if (C.charCodeAt(j) !== 36)
          return !1;
      return !0;
    }
    function h(C, N, j) {
      var R = w(C.source, N.source);
      return R !== 0 || (R = C.originalLine - N.originalLine, R !== 0) || (R = C.originalColumn - N.originalColumn, R !== 0 || j) || (R = C.generatedColumn - N.generatedColumn, R !== 0) || (R = C.generatedLine - N.generatedLine, R !== 0) ? R : w(C.name, N.name);
    }
    t.compareByOriginalPositions = h;
    function x(C, N, j) {
      var R = C.generatedLine - N.generatedLine;
      return R !== 0 || (R = C.generatedColumn - N.generatedColumn, R !== 0 || j) || (R = w(C.source, N.source), R !== 0) || (R = C.originalLine - N.originalLine, R !== 0) || (R = C.originalColumn - N.originalColumn, R !== 0) ? R : w(C.name, N.name);
    }
    t.compareByGeneratedPositionsDeflated = x;
    function w(C, N) {
      return C === N ? 0 : C === null ? 1 : N === null ? -1 : C > N ? 1 : -1;
    }
    function T(C, N) {
      var j = C.generatedLine - N.generatedLine;
      return j !== 0 || (j = C.generatedColumn - N.generatedColumn, j !== 0) || (j = w(C.source, N.source), j !== 0) || (j = C.originalLine - N.originalLine, j !== 0) || (j = C.originalColumn - N.originalColumn, j !== 0) ? j : w(C.name, N.name);
    }
    t.compareByGeneratedPositionsInflated = T;
    function E(C) {
      return JSON.parse(C.replace(/^\)]}'[^\n]*\n/, ""));
    }
    t.parseSourceMapInput = E;
    function k(C, N, j) {
      if (N = N || "", C && (C[C.length - 1] !== "/" && N[0] !== "/" && (C += "/"), N = C + N), j) {
        var R = l(j);
        if (!R)
          throw new Error("sourceMapURL could not be parsed");
        if (R.path) {
          var q = R.path.lastIndexOf("/");
          q >= 0 && (R.path = R.path.substring(0, q + 1));
        }
        N = p(u(R), N);
      }
      return f(N);
    }
    t.computeSourceURL = k;
  })(sd)), sd;
}
var od = {}, uy;
function Z0() {
  if (uy) return od;
  uy = 1;
  var t = oo(), r = Object.prototype.hasOwnProperty, i = typeof Map < "u";
  function s() {
    this._array = [], this._set = i ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  return s.fromArray = function(u, f) {
    for (var p = new s(), d = 0, g = u.length; d < g; d++)
      p.add(u[d], f);
    return p;
  }, s.prototype.size = function() {
    return i ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  }, s.prototype.add = function(u, f) {
    var p = i ? u : t.toSetString(u), d = i ? this.has(u) : r.call(this._set, p), g = this._array.length;
    (!d || f) && this._array.push(u), d || (i ? this._set.set(u, g) : this._set[p] = g);
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
var ld = {}, cy;
function EE() {
  if (cy) return ld;
  cy = 1;
  var t = oo();
  function r(s, l) {
    var u = s.generatedLine, f = l.generatedLine, p = s.generatedColumn, d = l.generatedColumn;
    return f > u || f == u && d >= p || t.compareByGeneratedPositionsInflated(s, l) <= 0;
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
  }, ld.MappingList = i, ld;
}
var fy;
function G0() {
  if (fy) return id;
  fy = 1;
  var t = F0(), r = oo(), i = Z0().ArraySet, s = EE().MappingList;
  function l(u) {
    u || (u = {}), this._file = r.getArg(u, "file", null), this._sourceRoot = r.getArg(u, "sourceRoot", null), this._skipValidation = r.getArg(u, "skipValidation", !1), this._sources = new i(), this._names = new i(), this._mappings = new s(), this._sourcesContents = null;
  }
  return l.prototype._version = 3, l.fromSourceMap = function(f) {
    var p = f.sourceRoot, d = new l({
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
      }, g.name != null && (m.name = g.name)), d.addMapping(m);
    }), f.sources.forEach(function(g) {
      var m = g;
      p !== null && (m = r.relative(p, g)), d._sources.has(m) || d._sources.add(m);
      var S = f.sourceContentFor(g);
      S != null && d.setSourceContent(g, S);
    }), d;
  }, l.prototype.addMapping = function(f) {
    var p = r.getArg(f, "generated"), d = r.getArg(f, "original", null), g = r.getArg(f, "source", null), m = r.getArg(f, "name", null);
    this._skipValidation || this._validateMapping(p, d, g, m), g != null && (g = String(g), this._sources.has(g) || this._sources.add(g)), m != null && (m = String(m), this._names.has(m) || this._names.add(m)), this._mappings.add({
      generatedLine: p.line,
      generatedColumn: p.column,
      originalLine: d != null && d.line,
      originalColumn: d != null && d.column,
      source: g,
      name: m
    });
  }, l.prototype.setSourceContent = function(f, p) {
    var d = f;
    this._sourceRoot != null && (d = r.relative(this._sourceRoot, d)), p != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[r.toSetString(d)] = p) : this._sourcesContents && (delete this._sourcesContents[r.toSetString(d)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  }, l.prototype.applySourceMap = function(f, p, d) {
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
    var S = new i(), y = new i();
    this._mappings.unsortedForEach(function(b) {
      if (b.source === g && b.originalLine != null) {
        var h = f.originalPositionFor({
          line: b.originalLine,
          column: b.originalColumn
        });
        h.source != null && (b.source = h.source, d != null && (b.source = r.join(d, b.source)), m != null && (b.source = r.relative(m, b.source)), b.originalLine = h.line, b.originalColumn = h.column, h.name != null && (b.name = h.name));
      }
      var x = b.source;
      x != null && !S.has(x) && S.add(x);
      var w = b.name;
      w != null && !y.has(w) && y.add(w);
    }, this), this._sources = S, this._names = y, f.sources.forEach(function(b) {
      var h = f.sourceContentFor(b);
      h != null && (d != null && (b = r.join(d, b)), m != null && (b = r.relative(m, b)), this.setSourceContent(b, h));
    }, this);
  }, l.prototype._validateMapping = function(f, p, d, g) {
    if (p && typeof p.line != "number" && typeof p.column != "number")
      throw new Error(
        "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
      );
    if (!(f && "line" in f && "column" in f && f.line > 0 && f.column >= 0 && !p && !d && !g)) {
      if (f && "line" in f && "column" in f && p && "line" in p && "column" in p && f.line > 0 && f.column >= 0 && p.line > 0 && p.column >= 0 && d)
        return;
      throw new Error("Invalid mapping: " + JSON.stringify({
        generated: f,
        source: d,
        original: p,
        name: g
      }));
    }
  }, l.prototype._serializeMappings = function() {
    for (var f = 0, p = 1, d = 0, g = 0, m = 0, S = 0, y = "", b, h, x, w, T = this._mappings.toArray(), E = 0, k = T.length; E < k; E++) {
      if (h = T[E], b = "", h.generatedLine !== p)
        for (f = 0; h.generatedLine !== p; )
          b += ";", p++;
      else if (E > 0) {
        if (!r.compareByGeneratedPositionsInflated(h, T[E - 1]))
          continue;
        b += ",";
      }
      b += t.encode(h.generatedColumn - f), f = h.generatedColumn, h.source != null && (w = this._sources.indexOf(h.source), b += t.encode(w - S), S = w, b += t.encode(h.originalLine - 1 - g), g = h.originalLine - 1, b += t.encode(h.originalColumn - d), d = h.originalColumn, h.name != null && (x = this._names.indexOf(h.name), b += t.encode(x - m), m = x)), y += b;
    }
    return y;
  }, l.prototype._generateSourcesContent = function(f, p) {
    return f.map(function(d) {
      if (!this._sourcesContents)
        return null;
      p != null && (d = r.relative(p, d));
      var g = r.toSetString(d);
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
  }, id.SourceMapGenerator = l, id;
}
var Zs = {}, ud = {}, dy;
function wE() {
  return dy || (dy = 1, (function(t) {
    t.GREATEST_LOWER_BOUND = 1, t.LEAST_UPPER_BOUND = 2;
    function r(i, s, l, u, f, p) {
      var d = Math.floor((s - i) / 2) + i, g = f(l, u[d], !0);
      return g === 0 ? d : g > 0 ? s - d > 1 ? r(d, s, l, u, f, p) : p == t.LEAST_UPPER_BOUND ? s < u.length ? s : -1 : d : d - i > 1 ? r(i, d, l, u, f, p) : p == t.LEAST_UPPER_BOUND ? d : i < 0 ? -1 : i;
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
  })(ud)), ud;
}
var cd = {}, hy;
function CE() {
  if (hy) return cd;
  hy = 1;
  function t(s, l, u) {
    var f = s[l];
    s[l] = s[u], s[u] = f;
  }
  function r(s, l) {
    return Math.round(s + Math.random() * (l - s));
  }
  function i(s, l, u, f) {
    if (u < f) {
      var p = r(u, f), d = u - 1;
      t(s, p, f);
      for (var g = s[f], m = u; m < f; m++)
        l(s[m], g) <= 0 && (d += 1, t(s, d, m));
      t(s, d + 1, m);
      var S = d + 1;
      i(s, l, u, S - 1), i(s, l, S + 1, f);
    }
  }
  return cd.quickSort = function(s, l) {
    i(s, l, 0, s.length - 1);
  }, cd;
}
var py;
function AE() {
  if (py) return Zs;
  py = 1;
  var t = oo(), r = wE(), i = Z0().ArraySet, s = F0(), l = CE().quickSort;
  function u(g, m) {
    var S = g;
    return typeof g == "string" && (S = t.parseSourceMapInput(g)), S.sections != null ? new d(S, m) : new f(S, m);
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
    var y = m.charAt(S);
    return y === ";" || y === ",";
  }, u.prototype._parseMappings = function(m, S) {
    throw new Error("Subclasses must implement _parseMappings");
  }, u.GENERATED_ORDER = 1, u.ORIGINAL_ORDER = 2, u.GREATEST_LOWER_BOUND = 1, u.LEAST_UPPER_BOUND = 2, u.prototype.eachMapping = function(m, S, y) {
    var b = S || null, h = y || u.GENERATED_ORDER, x;
    switch (h) {
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
    x.map(function(T) {
      var E = T.source === null ? null : this._sources.at(T.source);
      return E = t.computeSourceURL(w, E, this._sourceMapURL), {
        source: E,
        generatedLine: T.generatedLine,
        generatedColumn: T.generatedColumn,
        originalLine: T.originalLine,
        originalColumn: T.originalColumn,
        name: T.name === null ? null : this._names.at(T.name)
      };
    }, this).forEach(m, b);
  }, u.prototype.allGeneratedPositionsFor = function(m) {
    var S = t.getArg(m, "line"), y = {
      source: t.getArg(m, "source"),
      originalLine: S,
      originalColumn: t.getArg(m, "column", 0)
    };
    if (y.source = this._findSourceIndex(y.source), y.source < 0)
      return [];
    var b = [], h = this._findMapping(
      y,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      t.compareByOriginalPositions,
      r.LEAST_UPPER_BOUND
    );
    if (h >= 0) {
      var x = this._originalMappings[h];
      if (m.column === void 0)
        for (var w = x.originalLine; x && x.originalLine === w; )
          b.push({
            line: t.getArg(x, "generatedLine", null),
            column: t.getArg(x, "generatedColumn", null),
            lastColumn: t.getArg(x, "lastGeneratedColumn", null)
          }), x = this._originalMappings[++h];
      else
        for (var T = x.originalColumn; x && x.originalLine === S && x.originalColumn == T; )
          b.push({
            line: t.getArg(x, "generatedLine", null),
            column: t.getArg(x, "generatedColumn", null),
            lastColumn: t.getArg(x, "lastGeneratedColumn", null)
          }), x = this._originalMappings[++h];
    }
    return b;
  }, Zs.SourceMapConsumer = u;
  function f(g, m) {
    var S = g;
    typeof g == "string" && (S = t.parseSourceMapInput(g));
    var y = t.getArg(S, "version"), b = t.getArg(S, "sources"), h = t.getArg(S, "names", []), x = t.getArg(S, "sourceRoot", null), w = t.getArg(S, "sourcesContent", null), T = t.getArg(S, "mappings"), E = t.getArg(S, "file", null);
    if (y != this._version)
      throw new Error("Unsupported version: " + y);
    x && (x = t.normalize(x)), b = b.map(String).map(t.normalize).map(function(k) {
      return x && t.isAbsolute(x) && t.isAbsolute(k) ? t.relative(x, k) : k;
    }), this._names = i.fromArray(h.map(String), !0), this._sources = i.fromArray(b, !0), this._absoluteSources = this._sources.toArray().map(function(k) {
      return t.computeSourceURL(x, k, m);
    }), this.sourceRoot = x, this.sourcesContent = w, this._mappings = T, this._sourceMapURL = m, this.file = E;
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
    var y = Object.create(f.prototype), b = y._names = i.fromArray(m._names.toArray(), !0), h = y._sources = i.fromArray(m._sources.toArray(), !0);
    y.sourceRoot = m._sourceRoot, y.sourcesContent = m._generateSourcesContent(
      y._sources.toArray(),
      y.sourceRoot
    ), y.file = m._file, y._sourceMapURL = S, y._absoluteSources = y._sources.toArray().map(function(j) {
      return t.computeSourceURL(y.sourceRoot, j, S);
    });
    for (var x = m._mappings.toArray().slice(), w = y.__generatedMappings = [], T = y.__originalMappings = [], E = 0, k = x.length; E < k; E++) {
      var C = x[E], N = new p();
      N.generatedLine = C.generatedLine, N.generatedColumn = C.generatedColumn, C.source && (N.source = h.indexOf(C.source), N.originalLine = C.originalLine, N.originalColumn = C.originalColumn, C.name && (N.name = b.indexOf(C.name)), T.push(N)), w.push(N);
    }
    return l(y.__originalMappings, t.compareByOriginalPositions), y;
  }, f.prototype._version = 3, Object.defineProperty(f.prototype, "sources", {
    get: function() {
      return this._absoluteSources.slice();
    }
  });
  function p() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
  }
  f.prototype._parseMappings = function(m, S) {
    for (var y = 1, b = 0, h = 0, x = 0, w = 0, T = 0, E = m.length, k = 0, C = {}, N = {}, j = [], R = [], q, V, U, Y, G; k < E; )
      if (m.charAt(k) === ";")
        y++, k++, b = 0;
      else if (m.charAt(k) === ",")
        k++;
      else {
        for (q = new p(), q.generatedLine = y, Y = k; Y < E && !this._charIsMappingSeparator(m, Y); Y++)
          ;
        if (V = m.slice(k, Y), U = C[V], U)
          k += V.length;
        else {
          for (U = []; k < Y; )
            s.decode(m, k, N), G = N.value, k = N.rest, U.push(G);
          if (U.length === 2)
            throw new Error("Found a source, but no line and column");
          if (U.length === 3)
            throw new Error("Found a source and line, but no column");
          C[V] = U;
        }
        q.generatedColumn = b + U[0], b = q.generatedColumn, U.length > 1 && (q.source = w + U[1], w += U[1], q.originalLine = h + U[2], h = q.originalLine, q.originalLine += 1, q.originalColumn = x + U[3], x = q.originalColumn, U.length > 4 && (q.name = T + U[4], T += U[4])), R.push(q), typeof q.originalLine == "number" && j.push(q);
      }
    l(R, t.compareByGeneratedPositionsDeflated), this.__generatedMappings = R, l(j, t.compareByOriginalPositions), this.__originalMappings = j;
  }, f.prototype._findMapping = function(m, S, y, b, h, x) {
    if (m[y] <= 0)
      throw new TypeError("Line must be greater than or equal to 1, got " + m[y]);
    if (m[b] < 0)
      throw new TypeError("Column must be greater than or equal to 0, got " + m[b]);
    return r.search(m, S, h, x);
  }, f.prototype.computeColumnSpans = function() {
    for (var m = 0; m < this._generatedMappings.length; ++m) {
      var S = this._generatedMappings[m];
      if (m + 1 < this._generatedMappings.length) {
        var y = this._generatedMappings[m + 1];
        if (S.generatedLine === y.generatedLine) {
          S.lastGeneratedColumn = y.generatedColumn - 1;
          continue;
        }
      }
      S.lastGeneratedColumn = 1 / 0;
    }
  }, f.prototype.originalPositionFor = function(m) {
    var S = {
      generatedLine: t.getArg(m, "line"),
      generatedColumn: t.getArg(m, "column")
    }, y = this._findMapping(
      S,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      t.compareByGeneratedPositionsDeflated,
      t.getArg(m, "bias", u.GREATEST_LOWER_BOUND)
    );
    if (y >= 0) {
      var b = this._generatedMappings[y];
      if (b.generatedLine === S.generatedLine) {
        var h = t.getArg(b, "source", null);
        h !== null && (h = this._sources.at(h), h = t.computeSourceURL(this.sourceRoot, h, this._sourceMapURL));
        var x = t.getArg(b, "name", null);
        return x !== null && (x = this._names.at(x)), {
          source: h,
          line: t.getArg(b, "originalLine", null),
          column: t.getArg(b, "originalColumn", null),
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
    var y = this._findSourceIndex(m);
    if (y >= 0)
      return this.sourcesContent[y];
    var b = m;
    this.sourceRoot != null && (b = t.relative(this.sourceRoot, b));
    var h;
    if (this.sourceRoot != null && (h = t.urlParse(this.sourceRoot))) {
      var x = b.replace(/^file:\/\//, "");
      if (h.scheme == "file" && this._sources.has(x))
        return this.sourcesContent[this._sources.indexOf(x)];
      if ((!h.path || h.path == "/") && this._sources.has("/" + b))
        return this.sourcesContent[this._sources.indexOf("/" + b)];
    }
    if (S)
      return null;
    throw new Error('"' + b + '" is not in the SourceMap.');
  }, f.prototype.generatedPositionFor = function(m) {
    var S = t.getArg(m, "source");
    if (S = this._findSourceIndex(S), S < 0)
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    var y = {
      source: S,
      originalLine: t.getArg(m, "line"),
      originalColumn: t.getArg(m, "column")
    }, b = this._findMapping(
      y,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      t.compareByOriginalPositions,
      t.getArg(m, "bias", u.GREATEST_LOWER_BOUND)
    );
    if (b >= 0) {
      var h = this._originalMappings[b];
      if (h.source === y.source)
        return {
          line: t.getArg(h, "generatedLine", null),
          column: t.getArg(h, "generatedColumn", null),
          lastColumn: t.getArg(h, "lastGeneratedColumn", null)
        };
    }
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  }, Zs.BasicSourceMapConsumer = f;
  function d(g, m) {
    var S = g;
    typeof g == "string" && (S = t.parseSourceMapInput(g));
    var y = t.getArg(S, "version"), b = t.getArg(S, "sections");
    if (y != this._version)
      throw new Error("Unsupported version: " + y);
    this._sources = new i(), this._names = new i();
    var h = {
      line: -1,
      column: 0
    };
    this._sections = b.map(function(x) {
      if (x.url)
        throw new Error("Support for url field in sections not implemented.");
      var w = t.getArg(x, "offset"), T = t.getArg(w, "line"), E = t.getArg(w, "column");
      if (T < h.line || T === h.line && E < h.column)
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return h = w, {
        generatedOffset: {
          // The offset fields are 0-based, but we use 1-based indices when
          // encoding/decoding from VLQ.
          generatedLine: T + 1,
          generatedColumn: E + 1
        },
        consumer: new u(t.getArg(x, "map"), m)
      };
    });
  }
  return d.prototype = Object.create(u.prototype), d.prototype.constructor = u, d.prototype._version = 3, Object.defineProperty(d.prototype, "sources", {
    get: function() {
      for (var g = [], m = 0; m < this._sections.length; m++)
        for (var S = 0; S < this._sections[m].consumer.sources.length; S++)
          g.push(this._sections[m].consumer.sources[S]);
      return g;
    }
  }), d.prototype.originalPositionFor = function(m) {
    var S = {
      generatedLine: t.getArg(m, "line"),
      generatedColumn: t.getArg(m, "column")
    }, y = r.search(
      S,
      this._sections,
      function(h, x) {
        var w = h.generatedLine - x.generatedOffset.generatedLine;
        return w || h.generatedColumn - x.generatedOffset.generatedColumn;
      }
    ), b = this._sections[y];
    return b ? b.consumer.originalPositionFor({
      line: S.generatedLine - (b.generatedOffset.generatedLine - 1),
      column: S.generatedColumn - (b.generatedOffset.generatedLine === S.generatedLine ? b.generatedOffset.generatedColumn - 1 : 0),
      bias: m.bias
    }) : {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, d.prototype.hasContentsOfAllSources = function() {
    return this._sections.every(function(m) {
      return m.consumer.hasContentsOfAllSources();
    });
  }, d.prototype.sourceContentFor = function(m, S) {
    for (var y = 0; y < this._sections.length; y++) {
      var b = this._sections[y], h = b.consumer.sourceContentFor(m, !0);
      if (h)
        return h;
    }
    if (S)
      return null;
    throw new Error('"' + m + '" is not in the SourceMap.');
  }, d.prototype.generatedPositionFor = function(m) {
    for (var S = 0; S < this._sections.length; S++) {
      var y = this._sections[S];
      if (y.consumer._findSourceIndex(t.getArg(m, "source")) !== -1) {
        var b = y.consumer.generatedPositionFor(m);
        if (b) {
          var h = {
            line: b.line + (y.generatedOffset.generatedLine - 1),
            column: b.column + (y.generatedOffset.generatedLine === b.line ? y.generatedOffset.generatedColumn - 1 : 0)
          };
          return h;
        }
      }
    }
    return {
      line: null,
      column: null
    };
  }, d.prototype._parseMappings = function(m, S) {
    this.__generatedMappings = [], this.__originalMappings = [];
    for (var y = 0; y < this._sections.length; y++)
      for (var b = this._sections[y], h = b.consumer._generatedMappings, x = 0; x < h.length; x++) {
        var w = h[x], T = b.consumer._sources.at(w.source);
        T = t.computeSourceURL(b.consumer.sourceRoot, T, this._sourceMapURL), this._sources.add(T), T = this._sources.indexOf(T);
        var E = null;
        w.name && (E = b.consumer._names.at(w.name), this._names.add(E), E = this._names.indexOf(E));
        var k = {
          source: T,
          generatedLine: w.generatedLine + (b.generatedOffset.generatedLine - 1),
          generatedColumn: w.generatedColumn + (b.generatedOffset.generatedLine === w.generatedLine ? b.generatedOffset.generatedColumn - 1 : 0),
          originalLine: w.originalLine,
          originalColumn: w.originalColumn,
          name: E
        };
        this.__generatedMappings.push(k), typeof k.originalLine == "number" && this.__originalMappings.push(k);
      }
    l(this.__generatedMappings, t.compareByGeneratedPositionsDeflated), l(this.__originalMappings, t.compareByOriginalPositions);
  }, Zs.IndexedSourceMapConsumer = d, Zs;
}
var fd = {}, my;
function NE() {
  if (my) return fd;
  my = 1;
  var t = G0().SourceMapGenerator, r = oo(), i = /(\r?\n)/, s = 10, l = "$$$isSourceNode$$$";
  function u(f, p, d, g, m) {
    this.children = [], this.sourceContents = {}, this.line = f ?? null, this.column = p ?? null, this.source = d ?? null, this.name = m ?? null, this[l] = !0, g != null && this.add(g);
  }
  return u.fromStringWithSourceMap = function(p, d, g) {
    var m = new u(), S = p.split(i), y = 0, b = function() {
      var E = C(), k = C() || "";
      return E + k;
      function C() {
        return y < S.length ? S[y++] : void 0;
      }
    }, h = 1, x = 0, w = null;
    return d.eachMapping(function(E) {
      if (w !== null)
        if (h < E.generatedLine)
          T(w, b()), h++, x = 0;
        else {
          var k = S[y] || "", C = k.substr(0, E.generatedColumn - x);
          S[y] = k.substr(E.generatedColumn - x), x = E.generatedColumn, T(w, C), w = E;
          return;
        }
      for (; h < E.generatedLine; )
        m.add(b()), h++;
      if (x < E.generatedColumn) {
        var k = S[y] || "";
        m.add(k.substr(0, E.generatedColumn)), S[y] = k.substr(E.generatedColumn), x = E.generatedColumn;
      }
      w = E;
    }, this), y < S.length && (w && T(w, b()), m.add(S.splice(y).join(""))), d.sources.forEach(function(E) {
      var k = d.sourceContentFor(E);
      k != null && (g != null && (E = r.join(g, E)), m.setSourceContent(E, k));
    }), m;
    function T(E, k) {
      if (E === null || E.source === void 0)
        m.add(k);
      else {
        var C = g ? r.join(g, E.source) : E.source;
        m.add(new u(
          E.originalLine,
          E.originalColumn,
          C,
          k,
          E.name
        ));
      }
    }
  }, u.prototype.add = function(p) {
    if (Array.isArray(p))
      p.forEach(function(d) {
        this.add(d);
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
      for (var d = p.length - 1; d >= 0; d--)
        this.prepend(p[d]);
    else if (p[l] || typeof p == "string")
      this.children.unshift(p);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + p
      );
    return this;
  }, u.prototype.walk = function(p) {
    for (var d, g = 0, m = this.children.length; g < m; g++)
      d = this.children[g], d[l] ? d.walk(p) : d !== "" && p(d, {
        source: this.source,
        line: this.line,
        column: this.column,
        name: this.name
      });
  }, u.prototype.join = function(p) {
    var d, g, m = this.children.length;
    if (m > 0) {
      for (d = [], g = 0; g < m - 1; g++)
        d.push(this.children[g]), d.push(p);
      d.push(this.children[g]), this.children = d;
    }
    return this;
  }, u.prototype.replaceRight = function(p, d) {
    var g = this.children[this.children.length - 1];
    return g[l] ? g.replaceRight(p, d) : typeof g == "string" ? this.children[this.children.length - 1] = g.replace(p, d) : this.children.push("".replace(p, d)), this;
  }, u.prototype.setSourceContent = function(p, d) {
    this.sourceContents[r.toSetString(p)] = d;
  }, u.prototype.walkSourceContents = function(p) {
    for (var d = 0, g = this.children.length; d < g; d++)
      this.children[d][l] && this.children[d].walkSourceContents(p);
    for (var m = Object.keys(this.sourceContents), d = 0, g = m.length; d < g; d++)
      p(r.fromSetString(m[d]), this.sourceContents[m[d]]);
  }, u.prototype.toString = function() {
    var p = "";
    return this.walk(function(d) {
      p += d;
    }), p;
  }, u.prototype.toStringWithSourceMap = function(p) {
    var d = {
      code: "",
      line: 1,
      column: 0
    }, g = new t(p), m = !1, S = null, y = null, b = null, h = null;
    return this.walk(function(x, w) {
      d.code += x, w.source !== null && w.line !== null && w.column !== null ? ((S !== w.source || y !== w.line || b !== w.column || h !== w.name) && g.addMapping({
        source: w.source,
        original: {
          line: w.line,
          column: w.column
        },
        generated: {
          line: d.line,
          column: d.column
        },
        name: w.name
      }), S = w.source, y = w.line, b = w.column, h = w.name, m = !0) : m && (g.addMapping({
        generated: {
          line: d.line,
          column: d.column
        }
      }), S = null, m = !1);
      for (var T = 0, E = x.length; T < E; T++)
        x.charCodeAt(T) === s ? (d.line++, d.column = 0, T + 1 === E ? (S = null, m = !1) : m && g.addMapping({
          source: w.source,
          original: {
            line: w.line,
            column: w.column
          },
          generated: {
            line: d.line,
            column: d.column
          },
          name: w.name
        })) : d.column++;
    }), this.walkSourceContents(function(x, w) {
      g.setSourceContent(x, w);
    }), { code: d.code, map: g };
  }, fd.SourceNode = u, fd;
}
var gy;
function TE() {
  return gy || (gy = 1, Fs.SourceMapGenerator = G0().SourceMapGenerator, Fs.SourceMapConsumer = AE().SourceMapConsumer, Fs.SourceNode = NE().SourceNode), Fs;
}
var vy;
function OE() {
  return vy || (vy = 1, (function(t, r) {
    r.__esModule = !0;
    var i = hn(), s = void 0;
    try {
      var l = TE();
      s = l.SourceNode;
    } catch {
    }
    s || (s = function(p, d, g, m) {
      this.src = "", m && this.add(m);
    }, s.prototype = {
      add: function(d) {
        i.isArray(d) && (d = d.join("")), this.src += d;
      },
      prepend: function(d) {
        i.isArray(d) && (d = d.join("")), this.src = d + this.src;
      },
      toStringWithSourceMap: function() {
        return { code: this.toString() };
      },
      toString: function() {
        return this.src;
      }
    });
    function u(p, d, g) {
      if (i.isArray(p)) {
        for (var m = [], S = 0, y = p.length; S < y; S++)
          m.push(d.wrap(p[S], g));
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
      prepend: function(d, g) {
        this.source.unshift(this.wrap(d, g));
      },
      push: function(d, g) {
        this.source.push(this.wrap(d, g));
      },
      merge: function() {
        var d = this.empty();
        return this.each(function(g) {
          d.add(["  ", g, `
`]);
        }), d;
      },
      each: function(d) {
        for (var g = 0, m = this.source.length; g < m; g++)
          d(this.source[g]);
      },
      empty: function() {
        var d = this.currentLocation || { start: {} };
        return new s(d.start.line, d.start.column, this.srcFile);
      },
      wrap: function(d) {
        var g = arguments.length <= 1 || arguments[1] === void 0 ? this.currentLocation || { start: {} } : arguments[1];
        return d instanceof s ? d : (d = u(d, this, g), new s(g.start.line, g.start.column, this.srcFile, d));
      },
      functionCall: function(d, g, m) {
        return m = this.generateList(m), this.wrap([d, g ? "." + g + "(" : "(", m, ")"]);
      },
      quotedString: function(d) {
        return '"' + (d + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
      },
      objectLiteral: function(d) {
        var g = this, m = [];
        Object.keys(d).forEach(function(y) {
          var b = u(d[y], g);
          b !== "undefined" && m.push([g.quotedString(y), ":", b]);
        });
        var S = this.generateList(m);
        return S.prepend("{"), S.add("}"), S;
      },
      generateList: function(d) {
        for (var g = this.empty(), m = 0, S = d.length; m < S; m++)
          m && g.add(","), g.add(u(d[m], this));
        return g;
      },
      generateArray: function(d) {
        var g = this.generateList(d);
        return g.prepend("["), g.add("]"), g;
      }
    }, r.default = f, t.exports = r.default;
  })(Jl, Jl.exports)), Jl.exports;
}
var yy;
function kE() {
  return yy || (yy = 1, (function(t, r) {
    r.__esModule = !0;
    function i(y) {
      return y && y.__esModule ? y : { default: y };
    }
    var s = Jd(), l = Qn(), u = i(l), f = hn(), p = OE(), d = i(p);
    function g(y) {
      this.value = y;
    }
    function m() {
    }
    m.prototype = {
      // PUBLIC API: You can override these methods in a subclass to provide
      // alternative compiled forms for name lookup and buffering semantics
      nameLookup: function(b, h) {
        return this.internalNameLookup(b, h);
      },
      depthedLookup: function(b) {
        return [this.aliasable("container.lookup"), "(depths, ", JSON.stringify(b), ")"];
      },
      compilerInfo: function() {
        var b = s.COMPILER_REVISION, h = s.REVISION_CHANGES[b];
        return [b, h];
      },
      appendToBuffer: function(b, h, x) {
        return f.isArray(b) || (b = [b]), b = this.source.wrap(b, h), this.environment.isSimple ? ["return ", b, ";"] : x ? ["buffer += ", b, ";"] : (b.appendToBuffer = !0, b);
      },
      initializeBuffer: function() {
        return this.quotedString("");
      },
      // END PUBLIC API
      internalNameLookup: function(b, h) {
        return this.lookupPropertyFunctionIsUsed = !0, ["lookupProperty(", b, ",", JSON.stringify(h), ")"];
      },
      lookupPropertyFunctionIsUsed: !1,
      compile: function(b, h, x, w) {
        this.environment = b, this.options = h, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !w, this.name = this.environment.name, this.isChild = !!x, this.context = x || {
          decorators: [],
          programs: [],
          environments: []
        }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = { list: [] }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(b, h), this.useDepths = this.useDepths || b.useDepths || b.useDecorators || this.options.compat, this.useBlockParams = this.useBlockParams || b.useBlockParams;
        var T = b.opcodes, E = void 0, k = void 0, C = void 0, N = void 0;
        for (C = 0, N = T.length; C < N; C++)
          E = T[C], this.source.currentLocation = E.loc, k = k || E.loc, this[E.opcode].apply(this, E.args);
        if (this.source.currentLocation = k, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length)
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
        var q = this.context, V = q.programs, U = q.decorators;
        for (C = 0, N = V.length; C < N; C++)
          V[C] && (R[C] = V[C], U[C] && (R[C + "_d"] = U[C], R.useDecorators = !0));
        return this.environment.usePartial && (R.usePartial = !0), this.options.data && (R.useData = !0), this.useDepths && (R.useDepths = !0), this.useBlockParams && (R.useBlockParams = !0), this.options.compat && (R.compat = !0), w ? R.compilerOptions = this.options : (R.compiler = JSON.stringify(R.compiler), this.source.currentLocation = { start: { line: 1, column: 0 } }, R = this.objectLiteral(R), h.srcName ? (R = R.toStringWithSourceMap({ file: h.destName }), R.map = R.map && R.map.toString()) : R = R.toString()), R;
      },
      preamble: function() {
        this.lastContext = 0, this.source = new d.default(this.options.srcName), this.decorators = new d.default(this.options.srcName);
      },
      createFunctionContext: function(b) {
        var h = this, x = "", w = this.stackVars.concat(this.registers.list);
        w.length > 0 && (x += ", " + w.join(", "));
        var T = 0;
        Object.keys(this.aliases).forEach(function(C) {
          var N = h.aliases[C];
          N.children && N.referenceCount > 1 && (x += ", alias" + ++T + "=" + C, N.children[0] = "alias" + T);
        }), this.lookupPropertyFunctionIsUsed && (x += ", " + this.lookupPropertyFunctionVarDeclaration());
        var E = ["container", "depth0", "helpers", "partials", "data"];
        (this.useBlockParams || this.useDepths) && E.push("blockParams"), this.useDepths && E.push("depths");
        var k = this.mergeSource(x);
        return b ? (E.push(k), Function.apply(this, E)) : this.source.wrap(["function(", E.join(","), `) {
  `, k, "}"]);
      },
      mergeSource: function(b) {
        var h = this.environment.isSimple, x = !this.forceBuffer, w = void 0, T = void 0, E = void 0, k = void 0;
        return this.source.each(function(C) {
          C.appendToBuffer ? (E ? C.prepend("  + ") : E = C, k = C) : (E && (T ? E.prepend("buffer += ") : w = !0, k.add(";"), E = k = void 0), T = !0, h || (x = !1));
        }), x ? E ? (E.prepend("return "), k.add(";")) : T || this.source.push('return "";') : (b += ", buffer = " + (w ? "" : this.initializeBuffer()), E ? (E.prepend("return buffer + "), k.add(";")) : this.source.push("return buffer;")), b && this.source.prepend("var " + b.substring(2) + (w ? "" : `;
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
      blockValue: function(b) {
        var h = this.aliasable("container.hooks.blockHelperMissing"), x = [this.contextName(0)];
        this.setupHelperArgs(b, 0, x);
        var w = this.popStack();
        x.splice(1, 0, w), this.push(this.source.functionCall(h, "call", x));
      },
      // [ambiguousBlockValue]
      //
      // On stack, before: hash, inverse, program, value
      // Compiler value, before: lastHelper=value of last found helper, if any
      // On stack, after, if no lastHelper: same as [blockValue]
      // On stack, after, if lastHelper: value
      ambiguousBlockValue: function() {
        var b = this.aliasable("container.hooks.blockHelperMissing"), h = [this.contextName(0)];
        this.setupHelperArgs("", 0, h, !0), this.flushInline();
        var x = this.topStack();
        h.splice(1, 0, x), this.pushSource(["if (!", this.lastHelper, ") { ", x, " = ", this.source.functionCall(b, "call", h), "}"]);
      },
      // [appendContent]
      //
      // On stack, before: ...
      // On stack, after: ...
      //
      // Appends the string value of `content` to the current buffer
      appendContent: function(b) {
        this.pendingContent ? b = this.pendingContent + b : this.pendingLocation = this.source.currentLocation, this.pendingContent = b;
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
          this.replaceStack(function(h) {
            return [" != null ? ", h, ' : ""'];
          }), this.pushSource(this.appendToBuffer(this.popStack()));
        else {
          var b = this.popStack();
          this.pushSource(["if (", b, " != null) { ", this.appendToBuffer(b, void 0, !0), " }"]), this.environment.isSimple && this.pushSource(["else { ", this.appendToBuffer("''", void 0, !0), " }"]);
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
      getContext: function(b) {
        this.lastContext = b;
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
      lookupOnContext: function(b, h, x, w) {
        var T = 0;
        !w && this.options.compat && !this.lastContext ? this.push(this.depthedLookup(b[T++])) : this.pushContext(), this.resolvePath("context", b, T, h, x);
      },
      // [lookupBlockParam]
      //
      // On stack, before: ...
      // On stack, after: blockParam[name], ...
      //
      // Looks up the value of `parts` on the given block param and pushes
      // it onto the stack.
      lookupBlockParam: function(b, h) {
        this.useBlockParams = !0, this.push(["blockParams[", b[0], "][", b[1], "]"]), this.resolvePath("context", h, 1);
      },
      // [lookupData]
      //
      // On stack, before: ...
      // On stack, after: data, ...
      //
      // Push the data lookup operator
      lookupData: function(b, h, x) {
        b ? this.pushStackLiteral("container.data(data, " + b + ")") : this.pushStackLiteral("data"), this.resolvePath("data", h, 0, !0, x);
      },
      resolvePath: function(b, h, x, w, T) {
        var E = this;
        if (this.options.strict || this.options.assumeObjects) {
          this.push(S(this.options.strict && T, this, h, x, b));
          return;
        }
        for (var k = h.length; x < k; x++)
          this.replaceStack(function(C) {
            var N = E.nameLookup(C, h[x], b);
            return w ? [" && ", N] : [" != null ? ", N, " : ", C];
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
      pushStringParam: function(b, h) {
        this.pushContext(), this.pushString(h), h !== "SubExpression" && (typeof b == "string" ? this.pushString(b) : this.pushStackLiteral(b));
      },
      emptyHash: function(b) {
        this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}")), this.pushStackLiteral(b ? "undefined" : "{}");
      },
      pushHash: function() {
        this.hash && this.hashes.push(this.hash), this.hash = { values: {}, types: [], contexts: [], ids: [] };
      },
      popHash: function() {
        var b = this.hash;
        this.hash = this.hashes.pop(), this.trackIds && this.push(this.objectLiteral(b.ids)), this.stringParams && (this.push(this.objectLiteral(b.contexts)), this.push(this.objectLiteral(b.types))), this.push(this.objectLiteral(b.values));
      },
      // [pushString]
      //
      // On stack, before: ...
      // On stack, after: quotedString(string), ...
      //
      // Push a quoted version of `string` onto the stack
      pushString: function(b) {
        this.pushStackLiteral(this.quotedString(b));
      },
      // [pushLiteral]
      //
      // On stack, before: ...
      // On stack, after: value, ...
      //
      // Pushes a value onto the stack. This operation prevents
      // the compiler from creating a temporary variable to hold
      // it.
      pushLiteral: function(b) {
        this.pushStackLiteral(b);
      },
      // [pushProgram]
      //
      // On stack, before: ...
      // On stack, after: program(guid), ...
      //
      // Push a program expression onto the stack. This takes
      // a compile-time guid and converts it into a runtime-accessible
      // expression.
      pushProgram: function(b) {
        b != null ? this.pushStackLiteral(this.programExpression(b)) : this.pushStackLiteral(null);
      },
      // [registerDecorator]
      //
      // On stack, before: hash, program, params..., ...
      // On stack, after: ...
      //
      // Pops off the decorator's parameters, invokes the decorator,
      // and inserts the decorator into the decorators list.
      registerDecorator: function(b, h) {
        var x = this.nameLookup("decorators", h, "decorator"), w = this.setupHelperArgs(h, b);
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
      invokeHelper: function(b, h, x) {
        var w = this.popStack(), T = this.setupHelper(b, h), E = [];
        x && E.push(T.name), E.push(w), this.options.strict || E.push(this.aliasable("container.hooks.helperMissing"));
        var k = ["(", this.itemsSeparatedBy(E, "||"), ")"], C = this.source.functionCall(k, "call", T.callParams);
        this.push(C);
      },
      itemsSeparatedBy: function(b, h) {
        var x = [];
        x.push(b[0]);
        for (var w = 1; w < b.length; w++)
          x.push(h, b[w]);
        return x;
      },
      // [invokeKnownHelper]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of helper invocation
      //
      // This operation is used when the helper is known to exist,
      // so a `helperMissing` fallback is not required.
      invokeKnownHelper: function(b, h) {
        var x = this.setupHelper(b, h);
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
      invokeAmbiguous: function(b, h) {
        this.useRegister("helper");
        var x = this.popStack();
        this.emptyHash();
        var w = this.setupHelper(0, b, h), T = this.lastHelper = this.nameLookup("helpers", b, "helper"), E = ["(", "(helper = ", T, " || ", x, ")"];
        this.options.strict || (E[0] = "(helper = ", E.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"))), this.push(["(", E, w.paramsInit ? ["),(", w.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", w.callParams), " : helper))"]);
      },
      // [invokePartial]
      //
      // On stack, before: context, ...
      // On stack after: result of partial invocation
      //
      // This operation pops off a context, invokes a partial with that context,
      // and pushes the result of the invocation back.
      invokePartial: function(b, h, x) {
        var w = [], T = this.setupParams(h, 1, w);
        b && (h = this.popStack(), delete T.name), x && (T.indent = JSON.stringify(x)), T.helpers = "helpers", T.partials = "partials", T.decorators = "container.decorators", b ? w.unshift(h) : w.unshift(this.nameLookup("partials", h, "partial")), this.options.compat && (T.depths = "depths"), T = this.objectLiteral(T), w.push(T), this.push(this.source.functionCall("container.invokePartial", "", w));
      },
      // [assignToHash]
      //
      // On stack, before: value, ..., hash, ...
      // On stack, after: ..., hash, ...
      //
      // Pops a value off the stack and assigns it to the current hash
      assignToHash: function(b) {
        var h = this.popStack(), x = void 0, w = void 0, T = void 0;
        this.trackIds && (T = this.popStack()), this.stringParams && (w = this.popStack(), x = this.popStack());
        var E = this.hash;
        x && (E.contexts[b] = x), w && (E.types[b] = w), T && (E.ids[b] = T), E.values[b] = h;
      },
      pushId: function(b, h, x) {
        b === "BlockParam" ? this.pushStackLiteral("blockParams[" + h[0] + "].path[" + h[1] + "]" + (x ? " + " + JSON.stringify("." + x) : "")) : b === "PathExpression" ? this.pushString(h) : b === "SubExpression" ? this.pushStackLiteral("true") : this.pushStackLiteral("null");
      },
      // HELPERS
      compiler: m,
      compileChildren: function(b, h) {
        for (var x = b.children, w = void 0, T = void 0, E = 0, k = x.length; E < k; E++) {
          w = x[E], T = new this.compiler();
          var C = this.matchExistingProgram(w);
          if (C == null) {
            this.context.programs.push("");
            var N = this.context.programs.length;
            w.index = N, w.name = "program" + N, this.context.programs[N] = T.compile(w, h, this.context, !this.precompile), this.context.decorators[N] = T.decorators, this.context.environments[N] = w, this.useDepths = this.useDepths || T.useDepths, this.useBlockParams = this.useBlockParams || T.useBlockParams, w.useDepths = this.useDepths, w.useBlockParams = this.useBlockParams;
          } else
            w.index = C.index, w.name = "program" + C.index, this.useDepths = this.useDepths || C.useDepths, this.useBlockParams = this.useBlockParams || C.useBlockParams;
        }
      },
      matchExistingProgram: function(b) {
        for (var h = 0, x = this.context.environments.length; h < x; h++) {
          var w = this.context.environments[h];
          if (w && w.equals(b))
            return w;
        }
      },
      programExpression: function(b) {
        var h = this.environment.children[b], x = [h.index, "data", h.blockParams];
        return (this.useBlockParams || this.useDepths) && x.push("blockParams"), this.useDepths && x.push("depths"), "container.program(" + x.join(", ") + ")";
      },
      useRegister: function(b) {
        this.registers[b] || (this.registers[b] = !0, this.registers.list.push(b));
      },
      push: function(b) {
        return b instanceof g || (b = this.source.wrap(b)), this.inlineStack.push(b), b;
      },
      pushStackLiteral: function(b) {
        this.push(new g(b));
      },
      pushSource: function(b) {
        this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), this.pendingContent = void 0), b && this.source.push(b);
      },
      replaceStack: function(b) {
        var h = ["("], x = void 0, w = void 0, T = void 0;
        if (!this.isInline())
          throw new u.default("replaceStack on non-inline");
        var E = this.popStack(!0);
        if (E instanceof g)
          x = [E.value], h = ["(", x], T = !0;
        else {
          w = !0;
          var k = this.incrStack();
          h = ["((", this.push(k), " = ", E, ")"], x = this.topStack();
        }
        var C = b.call(this, x);
        T || this.popStack(), w && this.stackSlot--, this.push(h.concat(C, ")"));
      },
      incrStack: function() {
        return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName();
      },
      topStackName: function() {
        return "stack" + this.stackSlot;
      },
      flushInline: function() {
        var b = this.inlineStack;
        this.inlineStack = [];
        for (var h = 0, x = b.length; h < x; h++) {
          var w = b[h];
          if (w instanceof g)
            this.compileStack.push(w);
          else {
            var T = this.incrStack();
            this.pushSource([T, " = ", w, ";"]), this.compileStack.push(T);
          }
        }
      },
      isInline: function() {
        return this.inlineStack.length;
      },
      popStack: function(b) {
        var h = this.isInline(), x = (h ? this.inlineStack : this.compileStack).pop();
        if (!b && x instanceof g)
          return x.value;
        if (!h) {
          if (!this.stackSlot)
            throw new u.default("Invalid stack pop");
          this.stackSlot--;
        }
        return x;
      },
      topStack: function() {
        var b = this.isInline() ? this.inlineStack : this.compileStack, h = b[b.length - 1];
        return h instanceof g ? h.value : h;
      },
      contextName: function(b) {
        return this.useDepths && b ? "depths[" + b + "]" : "depth" + b;
      },
      quotedString: function(b) {
        return this.source.quotedString(b);
      },
      objectLiteral: function(b) {
        return this.source.objectLiteral(b);
      },
      aliasable: function(b) {
        var h = this.aliases[b];
        return h ? (h.referenceCount++, h) : (h = this.aliases[b] = this.source.wrap(b), h.aliasable = !0, h.referenceCount = 1, h);
      },
      setupHelper: function(b, h, x) {
        var w = [], T = this.setupHelperArgs(h, b, w, x), E = this.nameLookup("helpers", h, "helper"), k = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
        return {
          params: w,
          paramsInit: T,
          name: E,
          callParams: [k].concat(w)
        };
      },
      setupParams: function(b, h, x) {
        var w = {}, T = [], E = [], k = [], C = !x, N = void 0;
        C && (x = []), w.name = this.quotedString(b), w.hash = this.popStack(), this.trackIds && (w.hashIds = this.popStack()), this.stringParams && (w.hashTypes = this.popStack(), w.hashContexts = this.popStack());
        var j = this.popStack(), R = this.popStack();
        (R || j) && (w.fn = R || "container.noop", w.inverse = j || "container.noop");
        for (var q = h; q--; )
          N = this.popStack(), x[q] = N, this.trackIds && (k[q] = this.popStack()), this.stringParams && (E[q] = this.popStack(), T[q] = this.popStack());
        return C && (w.args = this.source.generateArray(x)), this.trackIds && (w.ids = this.source.generateArray(k)), this.stringParams && (w.types = this.source.generateArray(E), w.contexts = this.source.generateArray(T)), this.options.data && (w.data = "data"), this.useBlockParams && (w.blockParams = "blockParams"), w;
      },
      setupHelperArgs: function(b, h, x, w) {
        var T = this.setupParams(b, h, x);
        return T.loc = JSON.stringify(this.source.currentLocation), T = this.objectLiteral(T), w ? (this.useRegister("options"), x.push("options"), ["options=", T]) : x ? (x.push(T), "") : T;
      }
    }, (function() {
      for (var y = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), b = m.RESERVED_WORDS = {}, h = 0, x = y.length; h < x; h++)
        b[y[h]] = !0;
    })(), m.isValidJavaScriptVariableName = function(y) {
      return !m.RESERVED_WORDS[y] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(y);
    };
    function S(y, b, h, x, w) {
      var T = b.popStack(), E = h.length;
      for (y && E--; x < E; x++)
        T = b.nameLookup(T, h[x], w);
      return y ? [b.aliasable("container.strict"), "(", T, ", ", b.quotedString(h[x]), ", ", JSON.stringify(b.source.currentLocation), " )"] : T;
    }
    r.default = m, t.exports = r.default;
  })($l, $l.exports)), $l.exports;
}
var by;
function jE() {
  return by || (by = 1, (function(t, r) {
    r.__esModule = !0;
    function i(E) {
      return E && E.__esModule ? E : { default: E };
    }
    var s = gE(), l = i(s), u = H0(), f = i(u), p = _E(), d = SE(), g = kE(), m = i(g), S = q0(), y = i(S), b = U0(), h = i(b), x = l.default.create;
    function w() {
      var E = x();
      return E.compile = function(k, C) {
        return d.compile(k, C, E);
      }, E.precompile = function(k, C) {
        return d.precompile(k, C, E);
      }, E.AST = f.default, E.Compiler = d.Compiler, E.JavaScriptCompiler = m.default, E.Parser = p.parser, E.parse = p.parse, E.parseWithoutProcessing = p.parseWithoutProcessing, E;
    }
    var T = w();
    T.create = w, h.default(T), T.Visitor = y.default, T.default = T, r.default = T, t.exports = r.default;
  })(Tl, Tl.exports)), Tl.exports;
}
var Ft = jE();
const ME = /* @__PURE__ */ qd(Ft), Qd = /* @__PURE__ */ o2({
  __proto__: null,
  default: ME
}, [Ft]), rr = SillyTavern.getContext(), fn = [
  "name",
  "description",
  "personality",
  "scenario",
  "first_mes",
  "mes_example"
], $n = {
  name: "Name",
  description: "Description",
  personality: "Personality",
  scenario: "Scenario",
  first_mes: "First Message",
  mes_example: "Example Dialogue"
};
new r0("dumb", {}).getSettings();
async function DE({
  profileId: t,
  userPrompt: r,
  buildPromptOptions: i,
  continueFrom: s,
  session: l,
  allCharacters: u,
  entriesGroupByWorldName: f,
  promptSettings: p,
  formatDescription: d,
  mainContextList: g,
  includeUserMacro: m,
  maxResponseToken: S,
  targetField: y,
  outputFormat: b
}) {
  if (!t)
    throw new Error("No connection profile selected.");
  const h = rr.extensionSettings.connectionManager?.profiles?.find((j) => j.id === t);
  if (!h)
    throw new Error(`Connection profile with ID "${t}" not found.`);
  const x = h.api ? rr.CONNECT_API_MAP[h.api].selected : void 0;
  if (!x)
    throw new Error(`Could not determine API for profile "${h.name}".`);
  const w = {};
  w.char = l.fields.name.value ?? "{{char}}", w.user = m && wr ? wr : "{{user}}", w.persona = "{{persona}}", w.targetField = y, w.userInstructions = Ft.compile(r.trim(), { noEscape: !0 })(w), w.fieldSpecificInstructions = Ft.compile(
    l.draftFields[y]?.prompt ?? l.fields[y]?.prompt,
    { noEscape: !0 }
  )({
    ...w,
    char: y === "mes_example" ? "{{char}}" : w.char,
    user: y === "mes_example" ? "{{user}}" : w.user
  }), w.activeFormatInstructions = Ft.compile(d.content, { noEscape: !0 })(
    w
  );
  {
    const j = [];
    l.selectedCharacterIndexes.forEach((R) => {
      const q = parseInt(R), V = u[q];
      V && j.push(V);
    }), w.characters = j;
  }
  {
    const j = {};
    Object.entries(f).filter(
      ([R, q]) => q.length > 0 && l.selectedWorldNames.includes(R) && q.some((V) => !V.disable)
    ).forEach(([R, q]) => {
      j[R] = q.filter((V) => !V.disable);
    }), w.lorebooks = j;
  }
  {
    const j = {}, R = {}, q = {}, V = y.startsWith("alternate_greetings_"), U = St.getSettings().contextToSend.dontSendOtherGreetings;
    Object.entries(l.fields).forEach(([G, le]) => {
      let fe = !1;
      if (U) {
        const ue = G.startsWith("alternate_greetings_");
        V ? fe = ue && G !== y || G === "first_mes" : fe = ue;
      }
      if (!fe) {
        const ue = Ft.compile(le.value, { noEscape: !0 })({
          ...w,
          char: G === "mes_example" ? "{{char}}" : w.char,
          user: G === "mes_example" ? "{{user}}" : w.user
        });
        fn.includes(G) ? j[le.label] = ue : G.startsWith("alternate_greetings_") && (R[G] = ue);
      }
    }), Object.entries(l.draftFields || {}).forEach(([G, le]) => {
      q[le.label] = Ft.compile(le.value, { noEscape: !0 })(w);
    });
    const Y = {};
    Object.keys(j).length > 0 && (Y.core = j), Object.keys(R).length > 0 && (Y.alternate_greetings = R), Object.keys(q).length > 0 && (Y.draft = q), w.fields = Y;
  }
  const T = [];
  {
    for (const j of g) {
      if (j.promptName === "chatHistory") {
        const U = await h0(x, i);
        if (U.warnings && U.warnings.length > 0)
          for (const Y of U.warnings)
            Oe("warning", Y);
        T.push(...U.result);
        continue;
      }
      let R = structuredClone(w);
      j.promptName === "stDescription" && (R.char = "{{char}}", R.user = "{{user}}");
      const q = p[j.promptName];
      if (!q)
        continue;
      const V = {
        role: j.role,
        content: Ft.compile(q.content, { noEscape: !0 })(R)
      };
      V.content = V.content.replaceAll("{{user}}", "[[[crec_veryUniqueUserPlaceHolder]]]"), V.content = V.content.replaceAll("{{char}}", "[[[crec_veryUniqueCharPlaceHolder]]]"), V.content = rr.substituteParams(V.content), V.content = V.content.replaceAll("[[[crec_veryUniqueUserPlaceHolder]]]", "{{user}}"), V.content = V.content.replaceAll("[[[crec_veryUniqueCharPlaceHolder]]]", "{{char}}"), V.content && T.push(V);
    }
    s && T.push({
      role: "assistant",
      content: jv(s, b)
    });
  }
  const E = await rr.ConnectionManagerRequestService.sendRequest(
    t,
    T,
    S
  ), k = s ? jv(s, b) + E.content : E.content, C = L0(k, b);
  let N;
  if (typeof C == "string")
    N = C;
  else if (typeof C == "object" && C !== null)
    if ("response" in C && typeof C.response == "string")
      N = C.response;
    else {
      const j = Object.values(C)[0];
      N = j ? String(j) : "";
    }
  else
    N = "";
  return N;
}
const Ma = "SillyTavern-Character-Creator", V0 = "0.3.0", RE = "F_1.10", zE = {
  EXTENSION: "charCreator"
}, lt = {
  stDescription: Td,
  charDefinitions: T0,
  lorebookDefinitions: k0,
  xmlFormat: WS,
  jsonFormat: ex,
  noneFormat: tx,
  worldInfoCharDefinition: nx,
  personaDescription: rx,
  reviseJsonPrompt: ax,
  reviseXmlPrompt: ix,
  reviseTaskDescription: sx
}, LE = {
  version: V0,
  formatVersion: RE,
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
      content: j0,
      isDefault: !0,
      label: "Task Description Template"
    },
    outputFormatInstructions: {
      content: O0,
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
function IE(t) {
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
const St = new r0(zE.EXTENSION, LE);
async function PE() {
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
                  content: j0,
                  isDefault: !0,
                  label: "Task Description Template"
                },
                outputFormatInstructions: {
                  content: O0,
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
            return await Oe("info", `[${Ma}] Added Alternate Greetings.`), {
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
            return i.prompts.stDescription.isDefault && (s.prompts.stDescription.content = Td), s;
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
            }, i.prompts.charDefinitions.isDefault && (s.prompts.charDefinitions.content = T0), i.prompts.lorebookDefinitions.isDefault && (s.prompts.lorebookDefinitions.content = k0), i.prompts.existingFieldDefinitions.isDefault && (s.prompts.existingFieldDefinitions.content = uu), s;
          }
        },
        {
          from: "F_1.8",
          to: "F_1.9",
          action(i) {
            const s = {
              ...i
            };
            return i.prompts.stDescription.isDefault && (s.prompts.stDescription.content = Td), s;
          }
        }
      ]
    }).then((i) => {
      t();
    }).catch((i) => {
      console.error(`[${Ma}] Error initializing settings:`, i), Oe("error", `[${Ma}] Failed to initialize settings: ${i.message}`), rr.Popup.show.confirm(
        `[${Ma}] Failed to load settings. This might be due to an update. Reset settings to default?`,
        "Extension Error"
      ).then((s) => {
        s && (St.resetSettings(), Oe("success", `[${Ma}] Settings reset. Reloading may be required.`), t());
      });
    });
  });
}
const he = ({ children: t, className: r, overrideDefaults: i = !1, ...s }) => {
  const l = X.useMemo(() => {
    const u = [];
    return i || u.push("menu_button", "interactable"), u.push(r), u.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ _.jsx("button", { className: l, ...s, children: t });
}, BE = ({ label: t, className: r, overrideDefaults: i = !1, type: s = "text", ...l }) => {
  const u = X.useMemo(() => {
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
  const l = X.useMemo(() => {
    const u = [];
    return i || u.push("text_pole"), u.push(r), u.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ _.jsx("select", { className: l, ...s, children: t });
}, dn = ({ children: t, className: r, overrideDefaults: i = !1, ...s }) => {
  const l = X.useMemo(() => {
    const u = [];
    return i || u.push("text_pole", "textarea_compact"), u.push(r), u.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ _.jsx("textarea", { className: l, ...s, children: t });
};
var UE = t0(), Nn = /* @__PURE__ */ ((t) => (t[t.TEXT = 1] = "TEXT", t[t.CONFIRM = 2] = "CONFIRM", t[t.INPUT = 3] = "INPUT", t[t.DISPLAY = 4] = "DISPLAY", t))(Nn || {}), ta = /* @__PURE__ */ ((t) => (t[t.AFFIRMATIVE = 1] = "AFFIRMATIVE", t[t.NEGATIVE = 0] = "NEGATIVE", t[t.CANCELLED = null] = "CANCELLED", t))(ta || {});
const HE = SillyTavern.getContext(), Li = ({
  content: t,
  type: r,
  inputValue: i = "",
  options: s = {},
  preventEscape: l = !1,
  onComplete: u
}) => {
  var f;
  const p = X.useRef(null), d = X.useRef(null), [g, m] = X.useState(!1), [S, y] = X.useState(null), b = X.useRef(HE.uuidv4()), h = X.useRef({
    id: b.current,
    type: r,
    dlg: null,
    mainInput: null,
    lastFocus: null,
    value: void 0,
    result: void 0,
    inputResults: void 0
  });
  X.useEffect(() => {
    const E = p.current;
    if (!E) return;
    const k = (C) => {
      C.preventDefault(), l || x(ta.CANCELLED);
    };
    return E.addEventListener("cancel", k), h.current.dlg = E, h.current.mainInput = d.current, Ci.util.popups.push(h.current), E.showModal || (E.classList.add("poly_dialog"), Kg.registerDialog(E), new ResizeObserver((C) => {
      for (const N of C)
        Kg.reposition(N.target);
    }).observe(E)), E.showModal(), Hf(), () => {
      Qg(Ci.util.popups, h.current), Hf(), E.removeEventListener("cancel", k);
    };
  }, []);
  const x = async (E) => {
    var k, C;
    let N = E;
    if (r === Nn.INPUT && (E >= ta.AFFIRMATIVE ? N = (k = d.current) == null ? void 0 : k.value : E === ta.NEGATIVE ? N = !1 : E === ta.CANCELLED ? N = null : N = !1), (C = s.customInputs) != null && C.length) {
      const R = new Map(
        s.customInputs.map((q) => {
          var V;
          const U = (V = p.current) == null ? void 0 : V.querySelector(`#${q.id}`);
          return [U.id, U.checked];
        })
      );
      h.current.inputResults = R;
    }
    if (h.current.result = E, h.current.value = N, s.onClosing && !await s.onClosing(h.current)) {
      m(!0), h.current.value = void 0, h.current.result = void 0, h.current.inputResults = void 0;
      return;
    }
    m(!1), Ci.util.lastResult = {
      value: N,
      result: E,
      inputResults: h.current.inputResults
    };
    const j = p.current;
    j && (j.setAttribute("closing", ""), Hf(), s2(j, async () => {
      var R;
      if (j.close(), s.onClose && await s.onClose(h.current), Qg(Ci.util.popups, h.current), Ci.util.popups.length > 0) {
        const q = (R = document.activeElement) == null ? void 0 : R.closest(".popup"), V = q?.getAttribute("data-id"), U = Ci.util.popups.find((Y) => Y.id === V);
        U && U.lastFocus && U.lastFocus.focus();
      }
      u(N);
    }));
  }, w = (E) => {
    E.target instanceof HTMLElement && E.target !== p.current && (y(E.target), h.current.lastFocus = E.target);
  }, T = async (E) => {
  };
  return UE.createPortal(
    /* @__PURE__ */ _.jsx(
      "dialog",
      {
        ref: p,
        className: (() => {
          const E = ["popup"];
          return s.wide && E.push("wide_dialogue_popup"), s.wider && E.push("wider_dialogue_popup"), s.large && E.push("large_dialogue_popup"), s.transparent && E.push("transparent_dialogue_popup"), s.allowHorizontalScrolling && E.push("horizontal_scrolling_dialogue_popup"), s.allowVerticalScrolling && E.push("vertical_scrolling_dialogue_popup"), s.animation && E.push(`popup--animation-${s.animation}`), E.join(" ");
        })(),
        "data-id": b.current,
        onKeyDown: T,
        onFocus: w,
        children: /* @__PURE__ */ _.jsxs("div", { className: "popup-body", children: [
          /* @__PURE__ */ _.jsx("div", { className: "popup-content", children: t }),
          r === Nn.INPUT && /* @__PURE__ */ _.jsx(
            "textarea",
            {
              ref: d,
              className: "popup-input text_pole result-control auto-select",
              rows: s.rows ?? 1,
              defaultValue: i,
              "data-result": "1",
              "data-result-event": "submit"
            }
          ),
          s.customInputs && /* @__PURE__ */ _.jsx("div", { className: "popup-inputs", children: s.customInputs.map((E) => /* @__PURE__ */ _.jsxs("label", { className: "checkbox_label justifyCenter", htmlFor: E.id, children: [
            /* @__PURE__ */ _.jsx("input", { type: "checkbox", id: E.id, defaultChecked: E.defaultState }),
            /* @__PURE__ */ _.jsx("span", { "data-i18n": E.label, children: E.label }),
            E.tooltip && /* @__PURE__ */ _.jsx(
              "div",
              {
                className: "fa-solid fa-circle-info opacity50p",
                title: E.tooltip,
                "data-i18n": `[title]${E.tooltip}`
              }
            )
          ] }, E.id)) }),
          r !== Nn.DISPLAY && /* @__PURE__ */ _.jsxs("div", { className: "popup-controls", children: [
            (f = s.customButtons) == null ? void 0 : f.map((E, k) => {
              const C = typeof E == "string" ? { text: E, result: k + 2 } : E;
              return /* @__PURE__ */ _.jsx(
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
            r !== Nn.DISPLAY && s.okButton !== !1 && /* @__PURE__ */ _.jsx(
              "div",
              {
                className: "popup-button-ok menu_button result-control",
                onClick: () => x(ta.AFFIRMATIVE),
                "data-result": "1",
                children: typeof s.okButton == "string" ? s.okButton : "OK"
              }
            ),
            r !== Nn.DISPLAY && s.cancelButton !== !1 && /* @__PURE__ */ _.jsx(
              "div",
              {
                className: "popup-button-cancel menu_button result-control",
                onClick: () => x(ta.NEGATIVE),
                "data-result": "0",
                children: typeof s.cancelButton == "string" ? s.cancelButton : "Cancel"
              }
            )
          ] }),
          r === Nn.DISPLAY && /* @__PURE__ */ _.jsx(
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
}, Er = SillyTavern.getContext(), Y0 = ({
  initialSelectedProfileId: t,
  allowedTypes: r = { openai: "Chat Completion", textgenerationwebui: "Text Completion" },
  placeholder: i = "Select a Connection Profile",
  onChange: s,
  onCreate: l,
  onUpdate: u,
  onDelete: f
}) => {
  const [p, d] = X.useState(t ?? ""), [g, m] = X.useState(Date.now()), { isEnabled: S, profiles: y, connectApiMap: b } = X.useMemo(() => {
    var w, T;
    return (w = Er.extensionSettings.disabledExtensions) != null && w.includes("connection-manager") ? (console.error("Connection Manager extension is disabled."), { isEnabled: !1, profiles: [], connectApiMap: {} }) : {
      isEnabled: !0,
      profiles: ((T = Er.extensionSettings.connectionManager) == null ? void 0 : T.profiles) ?? [],
      connectApiMap: Er.CONNECT_API_MAP
    };
  }, [g]);
  X.useEffect(() => {
    if (!S) return;
    const w = (k) => {
      Gs(k, r, b) && (m(Date.now()), l?.(k));
    }, T = (k, C) => {
      const N = Gs(k, r, b), j = Gs(C, r, b);
      (N || j) && m(Date.now()), u?.(k, C), p === k.id && !j && (d(""), s?.(void 0));
    }, E = (k) => {
      Gs(k, r, b) && (m(Date.now()), f?.(k), p === k.id && (d(""), s?.(void 0)));
    };
    return Er.eventSource.on("CONNECTION_PROFILE_CREATED", w), Er.eventSource.on("CONNECTION_PROFILE_UPDATED", T), Er.eventSource.on("CONNECTION_PROFILE_DELETED", E), () => {
      Er.eventSource.removeListener("CONNECTION_PROFILE_CREATED", w), Er.eventSource.removeListener("CONNECTION_PROFILE_UPDATED", T), Er.eventSource.removeListener("CONNECTION_PROFILE_DELETED", E);
    };
  }, [S, p, r, b, s, l, u, f]);
  const h = X.useMemo(() => {
    if (!S) return [];
    const w = y.filter((E) => Gs(E, r, b)), T = {};
    for (const [E, k] of Object.entries(r))
      T[E] = { label: k, profiles: [] };
    for (const E of w) {
      const k = b[E.api];
      T[k.selected] && T[k.selected].profiles.push(E);
    }
    for (const E of Object.values(T))
      E.profiles.sort((k, C) => (k.name ?? "").localeCompare(C.name ?? ""));
    return Object.values(T).filter((E) => E.profiles.length > 0);
  }, [S, y, r, b]), x = X.useCallback(
    (w) => {
      const T = w.target.value;
      d(T);
      const E = y.find((k) => k.id === T);
      s?.(E);
    },
    [y, s]
  );
  return S ? /* @__PURE__ */ _.jsxs(yu, { value: p, onChange: x, children: [
    /* @__PURE__ */ _.jsx("option", { value: "", children: i }),
    h.map((w) => /* @__PURE__ */ _.jsx("optgroup", { label: w.label, children: w.profiles.map((T) => /* @__PURE__ */ _.jsx("option", { value: T.id, children: T.name }, T.id)) }, w.label))
  ] }) : /* @__PURE__ */ _.jsx(yu, { disabled: !0, value: "", children: /* @__PURE__ */ _.jsx("option", { children: "Connection Manager disabled" }) });
};
cu.memo(
  ({ item: t, showToggleButton: r, showDeleteButton: i, showSelectInput: s, onToggle: l, onDelete: u, onSelectChange: f }) => {
    const {
      id: p,
      label: d,
      enabled: g,
      canDelete: m = !0,
      canToggle: S = !0,
      showSelect: y = !0,
      canSelect: b = !0,
      selectOptions: h = [],
      selectValue: x
    } = t, w = {
      display: "flex",
      alignItems: "center",
      padding: "8px 12px",
      border: "1px solid var(--SmartThemeBorderColor, #ccc)",
      color: "var(--SmartThemeBodyColor, #333)",
      marginBottom: "2px",
      opacity: r && !g ? 0.6 : 1
    }, T = { cursor: "pointer", flexShrink: 0 }, E = { display: "inline-block", flexShrink: 0, marginRight: "10px" };
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
          children: d
        }
      ),
      s && y && b && /* @__PURE__ */ _.jsx(
        yu,
        {
          value: x,
          onChange: (k) => f(p, k.target.value),
          disabled: !g,
          style: { marginRight: "10px", flexShrink: 0, width: "unset" },
          children: h.length === 0 ? /* @__PURE__ */ _.jsx("option", { disabled: !0, children: "--" }) : h.map((k) => /* @__PURE__ */ _.jsx("option", { value: k.value, children: k.label }, k.value))
        }
      ),
      s && (!y || !b) && /* @__PURE__ */ _.jsx("span", { style: E }),
      r && S && /* @__PURE__ */ _.jsx(
        he,
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
          onClick: () => l(p)
        }
      ),
      r && !S && /* @__PURE__ */ _.jsx("span", { style: E }),
      i && m && /* @__PURE__ */ _.jsx(
        he,
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
      i && !m && /* @__PURE__ */ _.jsx("span", { style: { ...E, marginRight: 0 } })
    ] });
  }
);
const dd = ({
  items: t,
  value: r,
  onChange: i,
  placeholder: s = "Select items...",
  closeOnSelect: l = !1,
  multiple: u = !0,
  disabled: f = !1,
  onBeforeSelection: p,
  enableSearch: d = !1,
  searchPlaceholder: g = "Search...",
  searchNoResultsText: m = "No results found",
  searchFuseOptions: S,
  inputClasses: y,
  containerClasses: b
}) => {
  const [h, x] = X.useState(!1), [w, T] = X.useState(""), E = X.useRef(null);
  X.useEffect(() => {
    const R = (q) => {
      E.current && !E.current.contains(q.target) && x(!1);
    };
    return document.addEventListener("mousedown", R), () => document.removeEventListener("mousedown", R);
  }, []), X.useEffect(() => {
    h || T("");
  }, [h]);
  const k = X.useMemo(() => {
    if (!d) return null;
    const R = {
      includeScore: !1,
      threshold: 0.4,
      keys: ["label", "value"],
      ...S
    };
    return new Bi(t, R);
  }, [t, d, S]), C = X.useMemo(() => !d || !w.trim() || !k ? t : k.search(w.trim()).map((R) => R.item), [t, w, d, k]), N = async (R) => {
    let q;
    u ? q = r.includes(R) ? r.filter((V) => V !== R) : [...r, R] : q = r.includes(R) ? [] : [R], !(p && !await Promise.resolve(p(r, q))) && (i(q), l && x(!1));
  }, j = X.useMemo(() => {
    var R;
    return r.length === 0 ? s : r.length === 1 ? ((R = t.find((q) => q.value === r[0])) == null ? void 0 : R.label) ?? r[0] : `${r.length} items selected`;
  }, [r, t, s]);
  return /* @__PURE__ */ _.jsxs(
    "div",
    {
      ref: E,
      className: `fancy-dropdown-container ${b ?? ""}`,
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
            onClick: () => !f && x(!h),
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
              /* @__PURE__ */ _.jsx("i", { className: `fas ${h ? "fa-chevron-up" : "fa-chevron-down"}`, style: { marginLeft: "8px" } })
            ]
          }
        ),
        h && /* @__PURE__ */ _.jsxs(
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
              d && /* @__PURE__ */ _.jsx(
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
                    BE,
                    {
                      type: "text",
                      placeholder: g,
                      value: w,
                      onChange: (R) => T(R.target.value),
                      autoFocus: !0,
                      className: y
                    }
                  )
                }
              ),
              /* @__PURE__ */ _.jsx("ul", { style: { listStyle: "none", margin: 0, padding: 0 }, children: C.length > 0 ? C.map((R) => /* @__PURE__ */ _.jsx(
                qE,
                {
                  item: R,
                  isSelected: r.includes(R.value),
                  onClick: N
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
}, qE = cu.memo(({ item: t, isSelected: r, onClick: i }) => {
  const [s, l] = X.useState(!1);
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
}), hd = SillyTavern.getContext(), _y = ({
  value: t,
  items: r,
  readOnlyValues: i = [],
  label: s,
  onChange: l,
  onItemsChange: u,
  enableCreate: f = !1,
  enableRename: p = !1,
  enableDelete: d = !1,
  onCreate: g,
  onRename: m,
  onDelete: S,
  buttons: y
}) => {
  const b = X.useMemo(() => r.find((E) => E.value === t), [r, t]), h = X.useCallback((E) => E ? i.includes(E) : !1, [i]), x = async () => {
    const E = await hd.Popup.show.input(
      `Create a new ${s}`,
      `Please enter a name for the new ${s}:`,
      ""
    );
    if (!E || E.trim() === "") return;
    const k = E.trim();
    if (r.some((N) => N.value === k)) {
      await Oe("warning", `A ${s} with this name already exists.`);
      return;
    }
    let C = { value: k, label: k };
    if (g) {
      const N = await Promise.resolve(g(k));
      if (!N.confirmed) return;
      N.value && (typeof N.value == "string" ? C = { value: N.value, label: N.value } : C = N.value);
    }
    u([...r, C]), l(C.value, t);
  }, w = async () => {
    if (!b) {
      await Oe("warning", `Please select a ${s} to rename.`);
      return;
    }
    if (h(b.value)) {
      await Oe("warning", `This ${s} cannot be renamed as it is read-only.`);
      return;
    }
    const E = await hd.Popup.show.input(
      `Rename ${s}`,
      `Please enter a new name for "${b.label}":`,
      b.label
    );
    if (!E || E.trim() === "" || E.trim() === b.value) return;
    const k = E.trim();
    if (r.some((j) => j.value === k)) {
      await Oe("warning", `A ${s} with this name already exists.`);
      return;
    }
    let C = { value: k, label: k };
    if (m) {
      const j = await Promise.resolve(m(b.value, k));
      if (!j.confirmed) return;
      j.value && (typeof j.value == "string" ? C = { value: j.value, label: j.value } : C = j.value);
    }
    const N = r.map((j) => j.value === b.value ? C : j);
    u(N), l(C.value, t);
  }, T = async () => {
    var E;
    if (!b) {
      await Oe("warning", `Please select a ${s} to delete.`);
      return;
    }
    if (h(b.value)) {
      await Oe("warning", `This ${s} cannot be deleted as it is read-only.`);
      return;
    }
    if (!await hd.Popup.show.confirm(
      `Delete ${s}`,
      `Are you sure you want to delete "${b.label}"?`
    ) || S && !await Promise.resolve(S(b.value)))
      return;
    const k = r.findIndex((j) => j.value === b.value), C = r.filter((j) => j.value !== b.value);
    u(C);
    let N;
    if (C.length > 0) {
      const j = Math.min(k, C.length - 1);
      N = (E = C[j]) == null ? void 0 : E.value;
    }
    l(N, t);
  };
  return /* @__PURE__ */ _.jsxs("div", { className: "preset-select-container", style: { display: "flex", alignItems: "center" }, children: [
    /* @__PURE__ */ _.jsx(yu, { value: t ?? "", onChange: (E) => l(E.target.value, t), children: r.map((E) => /* @__PURE__ */ _.jsx("option", { value: E.value, children: E.label }, E.value)) }),
    f && /* @__PURE__ */ _.jsx(
      he,
      {
        className: "fa-solid fa-file-circle-plus",
        title: `Create a new ${s}`,
        onClick: x,
        "data-i18n": `[title]Create a new ${s}`
      }
    ),
    p && /* @__PURE__ */ _.jsx(
      he,
      {
        className: "fa-solid fa-pencil",
        title: `Rename selected ${s}`,
        onClick: w,
        disabled: !b,
        "data-i18n": `[title]Rename selected ${s}`
      }
    ),
    d && /* @__PURE__ */ _.jsx(
      he,
      {
        className: "fa-solid fa-trash-can",
        title: `Delete selected ${s}`,
        onClick: T,
        disabled: !b,
        "data-i18n": `[title]Delete selected ${s}`
      }
    ),
    y?.map((E) => /* @__PURE__ */ _.jsx(
      he,
      {
        className: E.icon,
        title: E.title,
        onClick: E.onClick,
        disabled: E.disabled,
        "data-i18n": E.i18n ? `[title]${E.i18n}` : void 0
      },
      E.key
    ))
  ] });
}, X0 = () => {
  const [, t] = X.useState(0);
  return X.useCallback(() => {
    t((i) => i + 1);
  }, []);
}, $0 = () => {
  const t = X0(), r = St.getSettings(), i = () => {
    r.soundNotifications || (r.soundNotifications = { enabled: !0, volume: 0.5 }), r.soundNotifications.enabled = !r.soundNotifications.enabled, St.saveSettings(), t();
  }, s = (u) => {
    r.soundNotifications || (r.soundNotifications = { enabled: !0, volume: 0.5 }), r.soundNotifications.volume = parseFloat(u.target.value), St.saveSettings(), t();
  }, l = (u) => {
    const f = r.soundNotifications?.volume ?? 0.5, p = new Audio(`scripts/extensions/third-party/SillyTavern-Character-Creator/templates/${u}.wav`);
    p.volume = f, p.play().catch((d) => console.error("Failed to play test sound:", d));
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
          he,
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
        /* @__PURE__ */ _.jsxs(he, { onClick: () => l("success"), className: "small", children: [
          /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-play" }),
          " Test Success"
        ] }),
        /* @__PURE__ */ _.jsxs(he, { onClick: () => l("error"), className: "small", children: [
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
}, Sy = {
  13: "/api/tokenizers/gemma/encode",
  12: "/api/tokenizers/llama3/encode",
  3: "/api/tokenizers/llama/encode",
  7: "/api/tokenizers/mistral/encode",
  2: "/api/tokenizers/openai/encode",
  11: "/api/tokenizers/claude/encode"
};
function Kd(t) {
  const [r, i] = X.useState(null), [s, l] = X.useState(!1), u = X.useRef(null), f = X.useRef("");
  return X.useEffect(() => {
    if (!t) {
      i(0);
      return;
    }
    return u.current && clearTimeout(u.current), u.current = window.setTimeout(async () => {
      if (t === f.current) return;
      l(!0);
      const p = St.getSettings().preferredTokenizer || 13, d = Sy[p] || Sy[13];
      try {
        f.current = t;
        const g = await fetch(d, {
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
const xy = ({
  fieldId: t,
  label: r,
  value: i,
  prompt: s,
  large: l = !1,
  rows: u = 3,
  promptEnabled: f = !0,
  isDraft: p = !1,
  isGenerating: d = !1,
  onValueChange: g,
  onPromptChange: m,
  onGenerate: S,
  onContinue: y,
  onClear: b,
  onCompare: h,
  onDelete: x,
  onOpenReviseSessions: w
}) => {
  const { tokens: T, isCalculating: E } = Kd(i);
  return /* @__PURE__ */ _.jsxs("div", { className: `character-field ${p ? "draft-field" : "core-field"}`, children: [
    /* @__PURE__ */ _.jsx("label", { children: r }),
    /* @__PURE__ */ _.jsxs("div", { className: `field-container ${l ? "large-field" : ""}`, children: [
      /* @__PURE__ */ _.jsx(dn, { value: i, onChange: (k) => g(t, k.target.value), rows: u }),
      /* @__PURE__ */ _.jsxs("div", { className: "field-actions", children: [
        /* @__PURE__ */ _.jsx(he, { onClick: () => S(t), disabled: d, title: "Generate field content", children: d ? /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }) }),
        /* @__PURE__ */ _.jsx(he, { onClick: () => y(t), disabled: d, title: "Continue from current content", children: /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
        /* @__PURE__ */ _.jsx(he, { onClick: () => b(t), title: "Clear field content", children: /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-eraser" }) }),
        w && !p && /* @__PURE__ */ _.jsx(he, { onClick: () => w(t), title: "Revise with AI chat", children: /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-comments" }) }),
        !p && h && /* @__PURE__ */ _.jsx(he, { onClick: () => h(t), title: "Compare with loaded character", children: /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-code-compare" }) }),
        p && x && /* @__PURE__ */ _.jsx(he, { onClick: () => x(t), title: "Delete Draft Field", className: "danger_button", children: /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-trash-can" }) }),
        /* @__PURE__ */ _.jsx("div", { className: "token-counter", style: {
          fontSize: "0.8em",
          opacity: 0.5,
          marginLeft: "auto",
          alignSelf: "center",
          fontFamily: "monospace"
        }, children: E ? /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ _.jsx(_.Fragment, { children: T !== null ? `${T} tokens` : "" }) })
      ] })
    ] }),
    f && /* @__PURE__ */ _.jsx("div", { className: "field-prompt-container", children: /* @__PURE__ */ _.jsx(
      dn,
      {
        value: s,
        onChange: (k) => m(t, k.target.value),
        placeholder: `Enter additional prompt for ${r.toLowerCase()}...`,
        rows: 3
      }
    ) })
  ] });
}, FE = SillyTavern.getContext(), ZE = ({
  greetings: t,
  onGreetingsChange: r,
  onGenerate: i,
  onContinue: s,
  onCompare: l,
  isGenerating: u
}) => {
  const [f, p] = X.useState(0), d = t[f], { tokens: g, isCalculating: m } = Kd(d?.value ?? "");
  X.useEffect(() => {
    f >= t.length && t.length > 0 ? p(t.length - 1) : t.length === 0 && p(0);
  }, [t, f]);
  const S = () => {
    const h = [...t, { value: "", prompt: "" }];
    r(h), p(h.length - 1);
  }, y = async () => {
    if (t.length === 0) return;
    if (await FE.Popup.show.confirm("Delete Greeting", "Are you sure?")) {
      const x = t.filter((w, T) => T !== f);
      r(x);
    }
  }, b = (h, x, w) => {
    const T = [...t];
    T[h][x] = w, r(T);
  };
  return /* @__PURE__ */ _.jsxs("div", { className: "character-field alternate-greetings-field", children: [
    /* @__PURE__ */ _.jsx("label", { children: "Alternate Greetings" }),
    /* @__PURE__ */ _.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }, children: [
      /* @__PURE__ */ _.jsx(
        "div",
        {
          className: "alternate-greetings-tabs",
          style: { display: "flex", flexWrap: "wrap", gap: "5px", flexGrow: 1 },
          children: t.map((h, x) => /* @__PURE__ */ _.jsxs(
            he,
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
      /* @__PURE__ */ _.jsxs(he, { onClick: S, title: "Add a new alternate greeting", children: [
        /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-plus" }),
        " Add"
      ] })
    ] }),
    t.length === 0 ? /* @__PURE__ */ _.jsx("p", { className: "subtle", children: 'No alternate greetings defined. Click "Add" to create one.' }) : /* @__PURE__ */ _.jsxs("div", { className: "field-container", children: [
      /* @__PURE__ */ _.jsxs("div", { style: { flexGrow: 1 }, children: [
        /* @__PURE__ */ _.jsx(
          dn,
          {
            value: d?.value ?? "",
            onChange: (h) => b(f, "value", h.target.value),
            rows: 8,
            placeholder: "Enter greeting content..."
          }
        ),
        /* @__PURE__ */ _.jsx("div", { className: "field-prompt-container", style: { marginTop: "5px" }, children: /* @__PURE__ */ _.jsx(
          dn,
          {
            value: d?.prompt ?? "",
            onChange: (h) => b(f, "prompt", h.target.value),
            rows: 2,
            placeholder: "Enter specific prompt for this greeting..."
          }
        ) })
      ] }),
      /* @__PURE__ */ _.jsxs("div", { className: "field-actions", children: [
        /* @__PURE__ */ _.jsx(he, { onClick: () => i(f), disabled: u, title: "Generate greeting", children: u ? /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }) }),
        /* @__PURE__ */ _.jsx(he, { onClick: () => s(f), disabled: u, title: "Continue greeting", children: /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
        /* @__PURE__ */ _.jsx(
          he,
          {
            onClick: () => b(f, "value", ""),
            disabled: u,
            title: "Clear greeting",
            children: /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-eraser" })
          }
        ),
        /* @__PURE__ */ _.jsx(he, { onClick: () => l(f), disabled: u, title: "Compare greeting", children: /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-code-compare" }) }),
        /* @__PURE__ */ _.jsx(
          he,
          {
            onClick: y,
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
      var u = this.castInput(r, s), f = this.castInput(i, s), p = this.removeEmpty(this.tokenize(u, s)), d = this.removeEmpty(this.tokenize(f, s));
      return this.diffWithOptionsObj(p, d, s, l);
    }, t.prototype.diffWithOptionsObj = function(r, i, s, l) {
      var u = this, f, p = function(C) {
        if (C = u.postProcess(C, s), l) {
          setTimeout(function() {
            l(C);
          }, 0);
          return;
        } else
          return C;
      }, d = i.length, g = r.length, m = 1, S = d + g;
      s.maxEditLength != null && (S = Math.min(S, s.maxEditLength));
      var y = (f = s.timeout) !== null && f !== void 0 ? f : 1 / 0, b = Date.now() + y, h = [{ oldPos: -1, lastComponent: void 0 }], x = this.extractCommon(h[0], i, r, 0, s);
      if (h[0].oldPos + 1 >= g && x + 1 >= d)
        return p(this.buildValues(h[0].lastComponent, i, r));
      var w = -1 / 0, T = 1 / 0, E = function() {
        for (var C = Math.max(w, -m); C <= Math.min(T, m); C += 2) {
          var N = void 0, j = h[C - 1], R = h[C + 1];
          j && (h[C - 1] = void 0);
          var q = !1;
          if (R) {
            var V = R.oldPos - C;
            q = R && 0 <= V && V < d;
          }
          var U = j && j.oldPos + 1 < g;
          if (!q && !U) {
            h[C] = void 0;
            continue;
          }
          if (!U || q && j.oldPos < R.oldPos ? N = u.addToPath(R, !0, !1, 0, s) : N = u.addToPath(j, !1, !0, 1, s), x = u.extractCommon(N, i, r, C, s), N.oldPos + 1 >= g && x + 1 >= d)
            return p(u.buildValues(N.lastComponent, i, r)) || !0;
          h[C] = N, N.oldPos + 1 >= g && (T = Math.min(T, C - 1)), x + 1 >= d && (w = Math.max(w, C + 1));
        }
        m++;
      };
      if (l)
        (function C() {
          setTimeout(function() {
            if (m > S || Date.now() > b)
              return l(void 0);
            E() || C();
          }, 0);
        })();
      else
        for (; m <= S && Date.now() <= b; ) {
          var k = E();
          if (k)
            return k;
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
      for (var f = i.length, p = s.length, d = r.oldPos, g = d - l, m = 0; g + 1 < f && d + 1 < p && this.equals(s[d + 1], i[g + 1], u); )
        g++, d++, m++, u.oneChangePerToken && (r.lastComponent = { count: 1, previousComponent: r.lastComponent, added: !1, removed: !1 });
      return m && !u.oneChangePerToken && (r.lastComponent = { count: m, previousComponent: r.lastComponent, added: !1, removed: !1 }), r.oldPos = d, g;
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
      for (var f = l.length, p = 0, d = 0, g = 0; p < f; p++) {
        var m = l[p];
        if (m.removed)
          m.value = this.join(s.slice(g, g + m.count)), g += m.count;
        else {
          if (!m.added && this.useLongestToken) {
            var S = i.slice(d, d + m.count);
            S = S.map(function(y, b) {
              var h = s[g + b];
              return h.length > y.length ? h : y;
            }), m.value = this.join(S);
          } else
            m.value = this.join(i.slice(d, d + m.count));
          d += m.count, m.added || (g += m.count);
        }
      }
      return l;
    }, t;
  })()
), GE = /* @__PURE__ */ (function() {
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
})(), VE = (
  /** @class */
  (function(t) {
    GE(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r;
  })(sa)
);
new VE();
function Ey(t, r) {
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
function Md(t, r, i) {
  if (t.slice(0, r.length) != r)
    throw Error("string ".concat(JSON.stringify(t), " doesn't start with prefix ").concat(JSON.stringify(r), "; this is a bug"));
  return i + t.slice(r.length);
}
function Dd(t, r, i) {
  if (!r)
    return t + i;
  if (t.slice(-r.length) != r)
    throw Error("string ".concat(JSON.stringify(t), " doesn't end with suffix ").concat(JSON.stringify(r), "; this is a bug"));
  return t.slice(0, -r.length) + i;
}
function Vs(t, r) {
  return Md(t, r, "");
}
function Wl(t, r) {
  return Dd(t, r, "");
}
function Cy(t, r) {
  return r.slice(0, YE(t, r));
}
function YE(t, r) {
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
var J0 = /* @__PURE__ */ (function() {
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
})(), bu = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", XE = new RegExp("[".concat(bu, "]+|\\s+|[^").concat(bu, "]"), "ug"), $E = (
  /** @class */
  (function(t) {
    J0(r, t);
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
        l = Array.from(u.segment(i), function(d) {
          return d.segment;
        });
      } else
        l = i.match(XE) || [];
      var f = [], p = null;
      return l.forEach(function(d) {
        /\s/.test(d) ? p == null ? f.push(d) : f.push(f.pop() + d) : p != null && /\s/.test(p) ? f[f.length - 1] == p ? f.push(f.pop() + d) : f.push(p + d) : f.push(d), p = d;
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
), JE = new $E();
function Q0(t, r, i) {
  return JE.diff(t, r, i);
}
function Ay(t, r, i, s) {
  if (r && i) {
    var l = ea(r.value), u = Ys(r.value), f = ea(i.value), p = Ys(i.value);
    if (t) {
      var d = Ey(l, f);
      t.value = Dd(t.value, f, d), r.value = Vs(r.value, d), i.value = Vs(i.value, d);
    }
    if (s) {
      var g = wy(u, p);
      s.value = Md(s.value, p, g), r.value = Wl(r.value, g), i.value = Wl(i.value, g);
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
    var S = ea(s.value), y = ea(r.value), b = Ys(r.value), h = Ey(S, y);
    r.value = Vs(r.value, h);
    var x = wy(Vs(S, h), b);
    r.value = Wl(r.value, x), s.value = Md(s.value, S, x), t.value = Dd(t.value, S, S.slice(0, S.length - x.length));
  } else if (s) {
    var w = ea(s.value), T = Ys(r.value), E = Cy(T, w);
    r.value = Wl(r.value, E);
  } else if (t) {
    var k = Ys(t.value), C = ea(r.value), E = Cy(k, C);
    r.value = Vs(r.value, E);
  }
}
var QE = (
  /** @class */
  (function(t) {
    J0(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      var s = new RegExp("(\\r?\\n)|[".concat(bu, "]+|[^\\S\\n\\r]+|[^").concat(bu, "]"), "ug");
      return i.match(s) || [];
    }, r;
  })(sa)
);
new QE();
var KE = /* @__PURE__ */ (function() {
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
})(), WE = (
  /** @class */
  (function(t) {
    KE(r, t);
    function r() {
      var i = t !== null && t.apply(this, arguments) || this;
      return i.tokenize = K0, i;
    }
    return r.prototype.equals = function(i, s, l) {
      return l.ignoreWhitespace ? ((!l.newlineIsToken || !i.includes(`
`)) && (i = i.trim()), (!l.newlineIsToken || !s.includes(`
`)) && (s = s.trim())) : l.ignoreNewlineAtEof && !l.newlineIsToken && (i.endsWith(`
`) && (i = i.slice(0, -1)), s.endsWith(`
`) && (s = s.slice(0, -1))), t.prototype.equals.call(this, i, s, l);
    }, r;
  })(sa)
);
new WE();
function K0(t, r) {
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
var ew = /* @__PURE__ */ (function() {
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
})(), tw = (
  /** @class */
  (function(t) {
    ew(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      return i.split(new RegExp("(?<=[.!?])(\\s+|$)"));
    }, r;
  })(sa)
);
new tw();
var nw = /* @__PURE__ */ (function() {
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
})(), rw = (
  /** @class */
  (function(t) {
    nw(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      return i.split(/([{}:;,]|\s+)/);
    }, r;
  })(sa)
);
new rw();
var aw = /* @__PURE__ */ (function() {
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
})(), iw = (
  /** @class */
  (function(t) {
    aw(r, t);
    function r() {
      var i = t !== null && t.apply(this, arguments) || this;
      return i.tokenize = K0, i;
    }
    return Object.defineProperty(r.prototype, "useLongestToken", {
      get: function() {
        return !0;
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.castInput = function(i, s) {
      var l = s.undefinedReplacement, u = s.stringifyReplacer, f = u === void 0 ? function(p, d) {
        return typeof d > "u" ? l : d;
      } : u;
      return typeof i == "string" ? i : JSON.stringify(Rd(i, null, null, f), null, "  ");
    }, r.prototype.equals = function(i, s, l) {
      return t.prototype.equals.call(this, i.replace(/,([\r\n])/g, "$1"), s.replace(/,([\r\n])/g, "$1"), l);
    }, r;
  })(sa)
);
new iw();
function Rd(t, r, i, s, l) {
  r = r || [], i = i || [], s && (t = s(l === void 0 ? "" : l, t));
  var u;
  for (u = 0; u < r.length; u += 1)
    if (r[u] === t)
      return i[u];
  var f;
  if (Object.prototype.toString.call(t) === "[object Array]") {
    for (r.push(t), f = new Array(t.length), i.push(f), u = 0; u < t.length; u += 1)
      f[u] = Rd(t[u], r, i, s, String(u));
    return r.pop(), i.pop(), f;
  }
  if (t && t.toJSON && (t = t.toJSON()), typeof t == "object" && t !== null) {
    r.push(t), f = {}, i.push(f);
    var p = [], d;
    for (d in t)
      Object.prototype.hasOwnProperty.call(t, d) && p.push(d);
    for (p.sort(), u = 0; u < p.length; u += 1)
      d = p[u], f[d] = Rd(t[d], r, i, s, d);
    r.pop(), i.pop();
  } else
    f = t;
  return f;
}
var sw = /* @__PURE__ */ (function() {
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
})(), ow = (
  /** @class */
  (function(t) {
    sw(r, t);
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
new ow();
const lw = ({ originalContent: t, newContent: r, fieldName: i }) => {
  const s = X.useMemo(() => {
    const l = Q0(t, r);
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
function ee(t, r, i) {
  function s(p, d) {
    var g;
    Object.defineProperty(p, "_zod", {
      value: p._zod ?? {},
      enumerable: !1
    }), (g = p._zod).traits ?? (g.traits = /* @__PURE__ */ new Set()), p._zod.traits.add(t), r(p, d);
    for (const m in f.prototype)
      m in p || Object.defineProperty(p, m, { value: f.prototype[m].bind(p) });
    p._zod.constr = f, p._zod.def = d;
  }
  const l = i?.Parent ?? Object;
  class u extends l {
  }
  Object.defineProperty(u, "name", { value: t });
  function f(p) {
    var d;
    const g = i?.Parent ? new u() : this;
    s(g, p), (d = g._zod).deferred ?? (d.deferred = []);
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
class W0 extends Error {
  constructor(r) {
    super(`Encountered unidirectional transform during encode: ${r}`), this.name = "ZodEncodeError";
  }
}
const e1 = {};
function za(t) {
  return e1;
}
function t1(t) {
  const r = Object.values(t).filter((s) => typeof s == "number");
  return Object.entries(t).filter(([s, l]) => r.indexOf(+s) === -1).map(([s, l]) => l);
}
function zd(t, r) {
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
function uw(t, r) {
  const i = (t.toString().split(".")[1] || "").length, s = r.toString();
  let l = (s.split(".")[1] || "").length;
  if (l === 0 && /\d?e-\d?/.test(s)) {
    const d = s.match(/\d?e-(\d?)/);
    d?.[1] && (l = Number.parseInt(d[1]));
  }
  const u = i > l ? i : l, f = Number.parseInt(t.toFixed(u).replace(".", "")), p = Number.parseInt(r.toFixed(u).replace(".", ""));
  return f % p / 10 ** u;
}
const Ny = Symbol("evaluating");
function ut(t, r, i) {
  let s;
  Object.defineProperty(t, r, {
    get() {
      if (s !== Ny)
        return s === void 0 && (s = Ny, s = i()), s;
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
function Ty(t) {
  return JSON.stringify(t);
}
const n1 = "captureStackTrace" in Error ? Error.captureStackTrace : (...t) => {
};
function _u(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}
const cw = Wd(() => {
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
function r1(t) {
  return ro(t) ? { ...t } : Array.isArray(t) ? [...t] : t;
}
const fw = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function Cu(t) {
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
function dw(t) {
  return Object.keys(t).filter((r) => t[r]._zod.optin === "optional" && t[r]._zod.optout === "optional");
}
const hw = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function pw(t, r) {
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
function mw(t, r) {
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
function gw(t, r) {
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
function vw(t, r) {
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
function yw(t, r) {
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
function bw(t, r, i) {
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
function _w(t, r, i) {
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
function a1(t, r) {
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
const i1 = (t, r) => {
  t.name = "$ZodError", Object.defineProperty(t, "_zod", {
    value: t._zod,
    enumerable: !1
  }), Object.defineProperty(t, "issues", {
    value: r,
    enumerable: !1
  }), t.message = JSON.stringify(r, zd, 2), Object.defineProperty(t, "toString", {
    value: () => t.message,
    enumerable: !1
  });
}, s1 = ee("$ZodError", i1), o1 = ee("$ZodError", i1, { Parent: Error });
function Sw(t, r = (i) => i.message) {
  const i = {}, s = [];
  for (const l of t.issues)
    l.path.length > 0 ? (i[l.path[0]] = i[l.path[0]] || [], i[l.path[0]].push(r(l))) : s.push(r(l));
  return { formErrors: s, fieldErrors: i };
}
function xw(t, r = (i) => i.message) {
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
          const d = u.path[p];
          p === u.path.length - 1 ? (f[d] = f[d] || { _errors: [] }, f[d]._errors.push(r(u))) : f[d] = f[d] || { _errors: [] }, f = f[d], p++;
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
    const p = new (l?.Err ?? t)(f.issues.map((d) => La(d, u, za())));
    throw n1(p, l?.callee), p;
  }
  return f.value;
}, ah = (t) => async (r, i, s, l) => {
  const u = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let f = r._zod.run({ value: i, issues: [] }, u);
  if (f instanceof Promise && (f = await f), f.issues.length) {
    const p = new (l?.Err ?? t)(f.issues.map((d) => La(d, u, za())));
    throw n1(p, l?.callee), p;
  }
  return f.value;
}, Au = (t) => (r, i, s) => {
  const l = s ? { ...s, async: !1 } : { async: !1 }, u = r._zod.run({ value: i, issues: [] }, l);
  if (u instanceof Promise)
    throw new Ii();
  return u.issues.length ? {
    success: !1,
    error: new (t ?? s1)(u.issues.map((f) => La(f, l, za())))
  } : { success: !0, data: u.value };
}, Ew = /* @__PURE__ */ Au(o1), Nu = (t) => async (r, i, s) => {
  const l = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let u = r._zod.run({ value: i, issues: [] }, l);
  return u instanceof Promise && (u = await u), u.issues.length ? {
    success: !1,
    error: new t(u.issues.map((f) => La(f, l, za())))
  } : { success: !0, data: u.value };
}, ww = /* @__PURE__ */ Nu(o1), Cw = (t) => (r, i, s) => {
  const l = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return rh(t)(r, i, l);
}, Aw = (t) => (r, i, s) => rh(t)(r, i, s), Nw = (t) => async (r, i, s) => {
  const l = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return ah(t)(r, i, l);
}, Tw = (t) => async (r, i, s) => ah(t)(r, i, s), Ow = (t) => (r, i, s) => {
  const l = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return Au(t)(r, i, l);
}, kw = (t) => (r, i, s) => Au(t)(r, i, s), jw = (t) => async (r, i, s) => {
  const l = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return Nu(t)(r, i, l);
}, Mw = (t) => async (r, i, s) => Nu(t)(r, i, s), Dw = /^[cC][^\s-]{8,}$/, Rw = /^[0-9a-z]+$/, zw = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Lw = /^[0-9a-vA-V]{20}$/, Iw = /^[A-Za-z0-9]{27}$/, Pw = /^[a-zA-Z0-9_-]{21}$/, Bw = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Uw = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Oy = (t) => t ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Hw = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, qw = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Fw() {
  return new RegExp(qw, "u");
}
const Zw = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Gw = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Vw = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Yw = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Xw = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, l1 = /^[A-Za-z0-9_-]*$/, $w = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, Jw = /^\+(?:[0-9]){6,14}[0-9]$/, u1 = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Qw = /* @__PURE__ */ new RegExp(`^${u1}$`);
function c1(t) {
  const r = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof t.precision == "number" ? t.precision === -1 ? `${r}` : t.precision === 0 ? `${r}:[0-5]\\d` : `${r}:[0-5]\\d\\.\\d{${t.precision}}` : `${r}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Kw(t) {
  return new RegExp(`^${c1(t)}$`);
}
function Ww(t) {
  const r = c1({ precision: t.precision }), i = ["Z"];
  t.local && i.push(""), t.offset && i.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const s = `${r}(?:${i.join("|")})`;
  return new RegExp(`^${u1}T(?:${s})$`);
}
const eC = (t) => {
  const r = t ? `[\\s\\S]{${t?.minimum ?? 0},${t?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${r}$`);
}, tC = /^-?\d+$/, nC = /^-?\d+(?:\.\d+)?/, rC = /^[^A-Z]*$/, aC = /^[^a-z]*$/, pn = /* @__PURE__ */ ee("$ZodCheck", (t, r) => {
  var i;
  t._zod ?? (t._zod = {}), t._zod.def = r, (i = t._zod).onattach ?? (i.onattach = []);
}), f1 = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, d1 = /* @__PURE__ */ ee("$ZodCheckLessThan", (t, r) => {
  pn.init(t, r);
  const i = f1[typeof r.value];
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
}), h1 = /* @__PURE__ */ ee("$ZodCheckGreaterThan", (t, r) => {
  pn.init(t, r);
  const i = f1[typeof r.value];
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
}), iC = /* @__PURE__ */ ee("$ZodCheckMultipleOf", (t, r) => {
  pn.init(t, r), t._zod.onattach.push((i) => {
    var s;
    (s = i._zod.bag).multipleOf ?? (s.multipleOf = r.value);
  }), t._zod.check = (i) => {
    if (typeof i.value != typeof r.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof i.value == "bigint" ? i.value % r.value === BigInt(0) : uw(i.value, r.value) === 0) || i.issues.push({
      origin: typeof i.value,
      code: "not_multiple_of",
      divisor: r.value,
      input: i.value,
      inst: t,
      continue: !r.abort
    });
  };
}), sC = /* @__PURE__ */ ee("$ZodCheckNumberFormat", (t, r) => {
  pn.init(t, r), r.format = r.format || "float64";
  const i = r.format?.includes("int"), s = i ? "int" : "number", [l, u] = hw[r.format];
  t._zod.onattach.push((f) => {
    const p = f._zod.bag;
    p.format = r.format, p.minimum = l, p.maximum = u, i && (p.pattern = tC);
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
}), oC = /* @__PURE__ */ ee("$ZodCheckMaxLength", (t, r) => {
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
}), lC = /* @__PURE__ */ ee("$ZodCheckMinLength", (t, r) => {
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
}), uC = /* @__PURE__ */ ee("$ZodCheckLengthEquals", (t, r) => {
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
}), Tu = /* @__PURE__ */ ee("$ZodCheckStringFormat", (t, r) => {
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
}), cC = /* @__PURE__ */ ee("$ZodCheckRegex", (t, r) => {
  Tu.init(t, r), t._zod.check = (i) => {
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
}), fC = /* @__PURE__ */ ee("$ZodCheckLowerCase", (t, r) => {
  r.pattern ?? (r.pattern = rC), Tu.init(t, r);
}), dC = /* @__PURE__ */ ee("$ZodCheckUpperCase", (t, r) => {
  r.pattern ?? (r.pattern = aC), Tu.init(t, r);
}), hC = /* @__PURE__ */ ee("$ZodCheckIncludes", (t, r) => {
  pn.init(t, r);
  const i = Cu(r.includes), s = new RegExp(typeof r.position == "number" ? `^.{${r.position}}${i}` : i);
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
}), pC = /* @__PURE__ */ ee("$ZodCheckStartsWith", (t, r) => {
  pn.init(t, r);
  const i = new RegExp(`^${Cu(r.prefix)}.*`);
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
}), mC = /* @__PURE__ */ ee("$ZodCheckEndsWith", (t, r) => {
  pn.init(t, r);
  const i = new RegExp(`.*${Cu(r.suffix)}$`);
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
}), gC = /* @__PURE__ */ ee("$ZodCheckOverwrite", (t, r) => {
  pn.init(t, r), t._zod.check = (i) => {
    i.value = r.tx(i.value);
  };
});
class vC {
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
const yC = {
  major: 4,
  minor: 1,
  patch: 12
}, Ot = /* @__PURE__ */ ee("$ZodType", (t, r) => {
  var i;
  t ?? (t = {}), t._zod.def = r, t._zod.bag = t._zod.bag || {}, t._zod.version = yC;
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
    const l = (f, p, d) => {
      let g = Ri(f), m;
      for (const S of p) {
        if (S._zod.def.when) {
          if (!S._zod.def.when(f))
            continue;
        } else if (g)
          continue;
        const y = f.issues.length, b = S._zod.check(f);
        if (b instanceof Promise && d?.async === !1)
          throw new Ii();
        if (m || b instanceof Promise)
          m = (m ?? Promise.resolve()).then(async () => {
            await b, f.issues.length !== y && (g || (g = Ri(f, y)));
          });
        else {
          if (f.issues.length === y)
            continue;
          g || (g = Ri(f, y));
        }
      }
      return m ? m.then(() => f) : f;
    }, u = (f, p, d) => {
      if (Ri(f))
        return f.aborted = !0, f;
      const g = l(p, s, d);
      if (g instanceof Promise) {
        if (d.async === !1)
          throw new Ii();
        return g.then((m) => t._zod.parse(m, d));
      }
      return t._zod.parse(g, d);
    };
    t._zod.run = (f, p) => {
      if (p.skipChecks)
        return t._zod.parse(f, p);
      if (p.direction === "backward") {
        const g = t._zod.parse({ value: f.value, issues: [] }, { ...p, skipChecks: !0 });
        return g instanceof Promise ? g.then((m) => u(m, f, p)) : u(g, f, p);
      }
      const d = t._zod.parse(f, p);
      if (d instanceof Promise) {
        if (p.async === !1)
          throw new Ii();
        return d.then((g) => l(g, s, p));
      }
      return l(d, s, p);
    };
  }
  t["~standard"] = {
    validate: (l) => {
      try {
        const u = Ew(t, l);
        return u.success ? { value: u.data } : { issues: u.error?.issues };
      } catch {
        return ww(t, l).then((f) => f.success ? { value: f.data } : { issues: f.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), ih = /* @__PURE__ */ ee("$ZodString", (t, r) => {
  Ot.init(t, r), t._zod.pattern = [...t?._zod.bag?.patterns ?? []].pop() ?? eC(t._zod.bag), t._zod.parse = (i, s) => {
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
}), ht = /* @__PURE__ */ ee("$ZodStringFormat", (t, r) => {
  Tu.init(t, r), ih.init(t, r);
}), bC = /* @__PURE__ */ ee("$ZodGUID", (t, r) => {
  r.pattern ?? (r.pattern = Uw), ht.init(t, r);
}), _C = /* @__PURE__ */ ee("$ZodUUID", (t, r) => {
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
    r.pattern ?? (r.pattern = Oy(s));
  } else
    r.pattern ?? (r.pattern = Oy());
  ht.init(t, r);
}), SC = /* @__PURE__ */ ee("$ZodEmail", (t, r) => {
  r.pattern ?? (r.pattern = Hw), ht.init(t, r);
}), xC = /* @__PURE__ */ ee("$ZodURL", (t, r) => {
  ht.init(t, r), t._zod.check = (i) => {
    try {
      const s = i.value.trim(), l = new URL(s);
      r.hostname && (r.hostname.lastIndex = 0, r.hostname.test(l.hostname) || i.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: $w.source,
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
}), EC = /* @__PURE__ */ ee("$ZodEmoji", (t, r) => {
  r.pattern ?? (r.pattern = Fw()), ht.init(t, r);
}), wC = /* @__PURE__ */ ee("$ZodNanoID", (t, r) => {
  r.pattern ?? (r.pattern = Pw), ht.init(t, r);
}), CC = /* @__PURE__ */ ee("$ZodCUID", (t, r) => {
  r.pattern ?? (r.pattern = Dw), ht.init(t, r);
}), AC = /* @__PURE__ */ ee("$ZodCUID2", (t, r) => {
  r.pattern ?? (r.pattern = Rw), ht.init(t, r);
}), NC = /* @__PURE__ */ ee("$ZodULID", (t, r) => {
  r.pattern ?? (r.pattern = zw), ht.init(t, r);
}), TC = /* @__PURE__ */ ee("$ZodXID", (t, r) => {
  r.pattern ?? (r.pattern = Lw), ht.init(t, r);
}), OC = /* @__PURE__ */ ee("$ZodKSUID", (t, r) => {
  r.pattern ?? (r.pattern = Iw), ht.init(t, r);
}), kC = /* @__PURE__ */ ee("$ZodISODateTime", (t, r) => {
  r.pattern ?? (r.pattern = Ww(r)), ht.init(t, r);
}), jC = /* @__PURE__ */ ee("$ZodISODate", (t, r) => {
  r.pattern ?? (r.pattern = Qw), ht.init(t, r);
}), MC = /* @__PURE__ */ ee("$ZodISOTime", (t, r) => {
  r.pattern ?? (r.pattern = Kw(r)), ht.init(t, r);
}), DC = /* @__PURE__ */ ee("$ZodISODuration", (t, r) => {
  r.pattern ?? (r.pattern = Bw), ht.init(t, r);
}), RC = /* @__PURE__ */ ee("$ZodIPv4", (t, r) => {
  r.pattern ?? (r.pattern = Zw), ht.init(t, r), t._zod.onattach.push((i) => {
    const s = i._zod.bag;
    s.format = "ipv4";
  });
}), zC = /* @__PURE__ */ ee("$ZodIPv6", (t, r) => {
  r.pattern ?? (r.pattern = Gw), ht.init(t, r), t._zod.onattach.push((i) => {
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
}), LC = /* @__PURE__ */ ee("$ZodCIDRv4", (t, r) => {
  r.pattern ?? (r.pattern = Vw), ht.init(t, r);
}), IC = /* @__PURE__ */ ee("$ZodCIDRv6", (t, r) => {
  r.pattern ?? (r.pattern = Yw), ht.init(t, r), t._zod.check = (i) => {
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
function p1(t) {
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
const PC = /* @__PURE__ */ ee("$ZodBase64", (t, r) => {
  r.pattern ?? (r.pattern = Xw), ht.init(t, r), t._zod.onattach.push((i) => {
    i._zod.bag.contentEncoding = "base64";
  }), t._zod.check = (i) => {
    p1(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64",
      input: i.value,
      inst: t,
      continue: !r.abort
    });
  };
});
function BC(t) {
  if (!l1.test(t))
    return !1;
  const r = t.replace(/[-_]/g, (s) => s === "-" ? "+" : "/"), i = r.padEnd(Math.ceil(r.length / 4) * 4, "=");
  return p1(i);
}
const UC = /* @__PURE__ */ ee("$ZodBase64URL", (t, r) => {
  r.pattern ?? (r.pattern = l1), ht.init(t, r), t._zod.onattach.push((i) => {
    i._zod.bag.contentEncoding = "base64url";
  }), t._zod.check = (i) => {
    BC(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: i.value,
      inst: t,
      continue: !r.abort
    });
  };
}), HC = /* @__PURE__ */ ee("$ZodE164", (t, r) => {
  r.pattern ?? (r.pattern = Jw), ht.init(t, r);
});
function qC(t, r = null) {
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
const FC = /* @__PURE__ */ ee("$ZodJWT", (t, r) => {
  ht.init(t, r), t._zod.check = (i) => {
    qC(i.value, r.alg) || i.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: i.value,
      inst: t,
      continue: !r.abort
    });
  };
}), m1 = /* @__PURE__ */ ee("$ZodNumber", (t, r) => {
  Ot.init(t, r), t._zod.pattern = t._zod.bag.pattern ?? nC, t._zod.parse = (i, s) => {
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
}), ZC = /* @__PURE__ */ ee("$ZodNumber", (t, r) => {
  sC.init(t, r), m1.init(t, r);
}), GC = /* @__PURE__ */ ee("$ZodUnknown", (t, r) => {
  Ot.init(t, r), t._zod.parse = (i) => i;
}), VC = /* @__PURE__ */ ee("$ZodNever", (t, r) => {
  Ot.init(t, r), t._zod.parse = (i, s) => (i.issues.push({
    expected: "never",
    code: "invalid_type",
    input: i.value,
    inst: t
  }), i);
});
function ky(t, r, i) {
  t.issues.length && r.issues.push(...a1(i, t.issues)), r.value[i] = t.value;
}
const YC = /* @__PURE__ */ ee("$ZodArray", (t, r) => {
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
      const p = l[f], d = r.element._zod.run({
        value: p,
        issues: []
      }, s);
      d instanceof Promise ? u.push(d.then((g) => ky(g, i, f))) : ky(d, i, f);
    }
    return u.length ? Promise.all(u).then(() => i) : i;
  };
});
function Su(t, r, i, s) {
  t.issues.length && r.issues.push(...a1(i, t.issues)), t.value === void 0 ? i in s && (r.value[i] = void 0) : r.value[i] = t.value;
}
function g1(t) {
  const r = Object.keys(t.shape);
  for (const s of r)
    if (!t.shape?.[s]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${s}": expected a Zod schema`);
  const i = dw(t.shape);
  return {
    ...t,
    keys: r,
    keySet: new Set(r),
    numKeys: r.length,
    optionalKeys: new Set(i)
  };
}
function v1(t, r, i, s, l, u) {
  const f = [], p = l.keySet, d = l.catchall._zod, g = d.def.type;
  for (const m of Object.keys(r)) {
    if (p.has(m))
      continue;
    if (g === "never") {
      f.push(m);
      continue;
    }
    const S = d.run({ value: r[m], issues: [] }, s);
    S instanceof Promise ? t.push(S.then((y) => Su(y, i, m, r))) : Su(S, i, m, r);
  }
  return f.length && i.issues.push({
    code: "unrecognized_keys",
    keys: f,
    input: r,
    inst: u
  }), t.length ? Promise.all(t).then(() => i) : i;
}
const XC = /* @__PURE__ */ ee("$ZodObject", (t, r) => {
  if (Ot.init(t, r), !Object.getOwnPropertyDescriptor(r, "shape")?.get) {
    const p = r.shape;
    Object.defineProperty(r, "shape", {
      get: () => {
        const d = { ...p };
        return Object.defineProperty(r, "shape", {
          value: d
        }), d;
      }
    });
  }
  const s = Wd(() => g1(r));
  ut(t._zod, "propValues", () => {
    const p = r.shape, d = {};
    for (const g in p) {
      const m = p[g]._zod;
      if (m.values) {
        d[g] ?? (d[g] = /* @__PURE__ */ new Set());
        for (const S of m.values)
          d[g].add(S);
      }
    }
    return d;
  });
  const l = _u, u = r.catchall;
  let f;
  t._zod.parse = (p, d) => {
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
    for (const y of f.keys) {
      const h = S[y]._zod.run({ value: g[y], issues: [] }, d);
      h instanceof Promise ? m.push(h.then((x) => Su(x, p, y, g))) : Su(h, p, y, g);
    }
    return u ? v1(m, g, p, d, s.value, t) : m.length ? Promise.all(m).then(() => p) : p;
  };
}), $C = /* @__PURE__ */ ee("$ZodObjectJIT", (t, r) => {
  XC.init(t, r);
  const i = t._zod.parse, s = Wd(() => g1(r)), l = (y) => {
    const b = new vC(["shape", "payload", "ctx"]), h = s.value, x = (k) => {
      const C = Ty(k);
      return `shape[${C}]._zod.run({ value: input[${C}], issues: [] }, ctx)`;
    };
    b.write("const input = payload.value;");
    const w = /* @__PURE__ */ Object.create(null);
    let T = 0;
    for (const k of h.keys)
      w[k] = `key_${T++}`;
    b.write("const newResult = {};");
    for (const k of h.keys) {
      const C = w[k], N = Ty(k);
      b.write(`const ${C} = ${x(k)};`), b.write(`
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
    b.write("payload.value = newResult;"), b.write("return payload;");
    const E = b.compile();
    return (k, C) => E(y, k, C);
  };
  let u;
  const f = _u, p = !e1.jitless, g = p && cw.value, m = r.catchall;
  let S;
  t._zod.parse = (y, b) => {
    S ?? (S = s.value);
    const h = y.value;
    return f(h) ? p && g && b?.async === !1 && b.jitless !== !0 ? (u || (u = l(r.shape)), y = u(y, b), m ? v1([], h, y, b, S, t) : y) : i(y, b) : (y.issues.push({
      expected: "object",
      code: "invalid_type",
      input: h,
      inst: t
    }), y);
  };
});
function jy(t, r, i, s) {
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
const JC = /* @__PURE__ */ ee("$ZodUnion", (t, r) => {
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
    for (const d of r.options) {
      const g = d._zod.run({
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
    return f ? Promise.all(p).then((d) => jy(d, l, t, u)) : jy(p, l, t, u);
  };
}), QC = /* @__PURE__ */ ee("$ZodIntersection", (t, r) => {
  Ot.init(t, r), t._zod.parse = (i, s) => {
    const l = i.value, u = r.left._zod.run({ value: l, issues: [] }, s), f = r.right._zod.run({ value: l, issues: [] }, s);
    return u instanceof Promise || f instanceof Promise ? Promise.all([u, f]).then(([d, g]) => My(i, d, g)) : My(i, u, f);
  };
});
function Ld(t, r) {
  if (t === r)
    return { valid: !0, data: t };
  if (t instanceof Date && r instanceof Date && +t == +r)
    return { valid: !0, data: t };
  if (ro(t) && ro(r)) {
    const i = Object.keys(r), s = Object.keys(t).filter((u) => i.indexOf(u) !== -1), l = { ...t, ...r };
    for (const u of s) {
      const f = Ld(t[u], r[u]);
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
      const l = t[s], u = r[s], f = Ld(l, u);
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
function My(t, r, i) {
  if (r.issues.length && t.issues.push(...r.issues), i.issues.length && t.issues.push(...i.issues), Ri(t))
    return t;
  const s = Ld(r.value, i.value);
  if (!s.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`);
  return t.value = s.data, t;
}
const KC = /* @__PURE__ */ ee("$ZodEnum", (t, r) => {
  Ot.init(t, r);
  const i = t1(r.entries), s = new Set(i);
  t._zod.values = s, t._zod.pattern = new RegExp(`^(${i.filter((l) => fw.has(typeof l)).map((l) => typeof l == "string" ? Cu(l) : l.toString()).join("|")})$`), t._zod.parse = (l, u) => {
    const f = l.value;
    return s.has(f) || l.issues.push({
      code: "invalid_value",
      values: i,
      input: f,
      inst: t
    }), l;
  };
}), WC = /* @__PURE__ */ ee("$ZodTransform", (t, r) => {
  Ot.init(t, r), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      throw new W0(t.constructor.name);
    const l = r.transform(i.value, i);
    if (s.async)
      return (l instanceof Promise ? l : Promise.resolve(l)).then((f) => (i.value = f, i));
    if (l instanceof Promise)
      throw new Ii();
    return i.value = l, i;
  };
});
function Dy(t, r) {
  return t.issues.length && r === void 0 ? { issues: [], value: void 0 } : t;
}
const e3 = /* @__PURE__ */ ee("$ZodOptional", (t, r) => {
  Ot.init(t, r), t._zod.optin = "optional", t._zod.optout = "optional", ut(t._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, void 0]) : void 0), ut(t._zod, "pattern", () => {
    const i = r.innerType._zod.pattern;
    return i ? new RegExp(`^(${th(i.source)})?$`) : void 0;
  }), t._zod.parse = (i, s) => {
    if (r.innerType._zod.optin === "optional") {
      const l = r.innerType._zod.run(i, s);
      return l instanceof Promise ? l.then((u) => Dy(u, i.value)) : Dy(l, i.value);
    }
    return i.value === void 0 ? i : r.innerType._zod.run(i, s);
  };
}), t3 = /* @__PURE__ */ ee("$ZodNullable", (t, r) => {
  Ot.init(t, r), ut(t._zod, "optin", () => r.innerType._zod.optin), ut(t._zod, "optout", () => r.innerType._zod.optout), ut(t._zod, "pattern", () => {
    const i = r.innerType._zod.pattern;
    return i ? new RegExp(`^(${th(i.source)}|null)$`) : void 0;
  }), ut(t._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, null]) : void 0), t._zod.parse = (i, s) => i.value === null ? i : r.innerType._zod.run(i, s);
}), n3 = /* @__PURE__ */ ee("$ZodDefault", (t, r) => {
  Ot.init(t, r), t._zod.optin = "optional", ut(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(i, s);
    if (i.value === void 0)
      return i.value = r.defaultValue, i;
    const l = r.innerType._zod.run(i, s);
    return l instanceof Promise ? l.then((u) => Ry(u, r)) : Ry(l, r);
  };
});
function Ry(t, r) {
  return t.value === void 0 && (t.value = r.defaultValue), t;
}
const r3 = /* @__PURE__ */ ee("$ZodPrefault", (t, r) => {
  Ot.init(t, r), t._zod.optin = "optional", ut(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (i, s) => (s.direction === "backward" || i.value === void 0 && (i.value = r.defaultValue), r.innerType._zod.run(i, s));
}), a3 = /* @__PURE__ */ ee("$ZodNonOptional", (t, r) => {
  Ot.init(t, r), ut(t._zod, "values", () => {
    const i = r.innerType._zod.values;
    return i ? new Set([...i].filter((s) => s !== void 0)) : void 0;
  }), t._zod.parse = (i, s) => {
    const l = r.innerType._zod.run(i, s);
    return l instanceof Promise ? l.then((u) => zy(u, t)) : zy(l, t);
  };
});
function zy(t, r) {
  return !t.issues.length && t.value === void 0 && t.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: t.value,
    inst: r
  }), t;
}
const i3 = /* @__PURE__ */ ee("$ZodCatch", (t, r) => {
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
}), s3 = /* @__PURE__ */ ee("$ZodPipe", (t, r) => {
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
const o3 = /* @__PURE__ */ ee("$ZodReadonly", (t, r) => {
  Ot.init(t, r), ut(t._zod, "propValues", () => r.innerType._zod.propValues), ut(t._zod, "values", () => r.innerType._zod.values), ut(t._zod, "optin", () => r.innerType._zod.optin), ut(t._zod, "optout", () => r.innerType._zod.optout), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(i, s);
    const l = r.innerType._zod.run(i, s);
    return l instanceof Promise ? l.then(Ly) : Ly(l);
  };
});
function Ly(t) {
  return t.value = Object.freeze(t.value), t;
}
const l3 = /* @__PURE__ */ ee("$ZodCustom", (t, r) => {
  pn.init(t, r), Ot.init(t, r), t._zod.parse = (i, s) => i, t._zod.check = (i) => {
    const s = i.value, l = r.fn(s);
    if (l instanceof Promise)
      return l.then((u) => Iy(u, i, s, t));
    Iy(l, i, s, t);
  };
});
function Iy(t, r, i, s) {
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
class y1 {
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
function u3() {
  return new y1();
}
const Qs = /* @__PURE__ */ u3();
function c3(t, r) {
  return new t({
    type: "string",
    ..._e(r)
  });
}
function f3(t, r) {
  return new t({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function Py(t, r) {
  return new t({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function d3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function h3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ..._e(r)
  });
}
function p3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ..._e(r)
  });
}
function m3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ..._e(r)
  });
}
function g3(t, r) {
  return new t({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function v3(t, r) {
  return new t({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function y3(t, r) {
  return new t({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function b3(t, r) {
  return new t({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function _3(t, r) {
  return new t({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function S3(t, r) {
  return new t({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function x3(t, r) {
  return new t({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function E3(t, r) {
  return new t({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function w3(t, r) {
  return new t({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function C3(t, r) {
  return new t({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function A3(t, r) {
  return new t({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function N3(t, r) {
  return new t({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function T3(t, r) {
  return new t({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function O3(t, r) {
  return new t({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function k3(t, r) {
  return new t({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function j3(t, r) {
  return new t({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function M3(t, r) {
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
function D3(t, r) {
  return new t({
    type: "string",
    format: "date",
    check: "string_format",
    ..._e(r)
  });
}
function R3(t, r) {
  return new t({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ..._e(r)
  });
}
function z3(t, r) {
  return new t({
    type: "string",
    format: "duration",
    check: "string_format",
    ..._e(r)
  });
}
function L3(t, r) {
  return new t({
    type: "number",
    checks: [],
    ..._e(r)
  });
}
function I3(t, r) {
  return new t({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ..._e(r)
  });
}
function P3(t) {
  return new t({
    type: "unknown"
  });
}
function B3(t, r) {
  return new t({
    type: "never",
    ..._e(r)
  });
}
function By(t, r) {
  return new d1({
    check: "less_than",
    ..._e(r),
    value: t,
    inclusive: !1
  });
}
function pd(t, r) {
  return new d1({
    check: "less_than",
    ..._e(r),
    value: t,
    inclusive: !0
  });
}
function Uy(t, r) {
  return new h1({
    check: "greater_than",
    ..._e(r),
    value: t,
    inclusive: !1
  });
}
function md(t, r) {
  return new h1({
    check: "greater_than",
    ..._e(r),
    value: t,
    inclusive: !0
  });
}
function Hy(t, r) {
  return new iC({
    check: "multiple_of",
    ..._e(r),
    value: t
  });
}
function b1(t, r) {
  return new oC({
    check: "max_length",
    ..._e(r),
    maximum: t
  });
}
function xu(t, r) {
  return new lC({
    check: "min_length",
    ..._e(r),
    minimum: t
  });
}
function _1(t, r) {
  return new uC({
    check: "length_equals",
    ..._e(r),
    length: t
  });
}
function U3(t, r) {
  return new cC({
    check: "string_format",
    format: "regex",
    ..._e(r),
    pattern: t
  });
}
function H3(t) {
  return new fC({
    check: "string_format",
    format: "lowercase",
    ..._e(t)
  });
}
function q3(t) {
  return new dC({
    check: "string_format",
    format: "uppercase",
    ..._e(t)
  });
}
function F3(t, r) {
  return new hC({
    check: "string_format",
    format: "includes",
    ..._e(r),
    includes: t
  });
}
function Z3(t, r) {
  return new pC({
    check: "string_format",
    format: "starts_with",
    ..._e(r),
    prefix: t
  });
}
function G3(t, r) {
  return new mC({
    check: "string_format",
    format: "ends_with",
    ..._e(r),
    suffix: t
  });
}
function lo(t) {
  return new gC({
    check: "overwrite",
    tx: t
  });
}
function V3(t) {
  return lo((r) => r.normalize(t));
}
function Y3() {
  return lo((t) => t.trim());
}
function X3() {
  return lo((t) => t.toLowerCase());
}
function $3() {
  return lo((t) => t.toUpperCase());
}
function J3(t, r, i) {
  return new t({
    type: "array",
    element: r,
    // get element() {
    //   return element;
    // },
    ..._e(i)
  });
}
function Q3(t, r, i) {
  return new t({
    type: "custom",
    check: "custom",
    fn: r,
    ..._e(i)
  });
}
function K3(t) {
  const r = W3((i) => (i.addIssue = (s) => {
    if (typeof s == "string")
      i.issues.push(ao(s, i.value, r._zod.def));
    else {
      const l = s;
      l.fatal && (l.continue = !1), l.code ?? (l.code = "custom"), l.input ?? (l.input = i.value), l.inst ?? (l.inst = r), l.continue ?? (l.continue = !r._zod.def.abort), i.issues.push(ao(l));
    }
  }, t(i.value, i)));
  return r;
}
function W3(t, r) {
  const i = new pn({
    check: "custom",
    ..._e(r)
  });
  return i._zod.check = t, i;
}
class qy {
  constructor(r) {
    this.counter = 0, this.metadataRegistry = r?.metadata ?? Qs, this.target = r?.target ?? "draft-2020-12", this.unrepresentable = r?.unrepresentable ?? "throw", this.override = r?.override ?? (() => {
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
    const d = r._zod.toJSONSchema?.();
    if (d)
      p.schema = d;
    else {
      const S = {
        ...i,
        schemaPath: [...i.schemaPath, r],
        path: i.path
      }, y = r._zod.parent;
      if (y)
        p.ref = y, this.process(y, S), this.seen.get(y).isParent = !0;
      else {
        const b = p.schema;
        switch (l.type) {
          case "string": {
            const h = b;
            h.type = "string";
            const { minimum: x, maximum: w, format: T, patterns: E, contentEncoding: k } = r._zod.bag;
            if (typeof x == "number" && (h.minLength = x), typeof w == "number" && (h.maxLength = w), T && (h.format = u[T] ?? T, h.format === "" && delete h.format), k && (h.contentEncoding = k), E && E.size > 0) {
              const C = [...E];
              C.length === 1 ? h.pattern = C[0].source : C.length > 1 && (p.schema.allOf = [
                ...C.map((N) => ({
                  ...this.target === "draft-7" || this.target === "draft-4" || this.target === "openapi-3.0" ? { type: "string" } : {},
                  pattern: N.source
                }))
              ]);
            }
            break;
          }
          case "number": {
            const h = b, { minimum: x, maximum: w, format: T, multipleOf: E, exclusiveMaximum: k, exclusiveMinimum: C } = r._zod.bag;
            typeof T == "string" && T.includes("int") ? h.type = "integer" : h.type = "number", typeof C == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (h.minimum = C, h.exclusiveMinimum = !0) : h.exclusiveMinimum = C), typeof x == "number" && (h.minimum = x, typeof C == "number" && this.target !== "draft-4" && (C >= x ? delete h.minimum : delete h.exclusiveMinimum)), typeof k == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (h.maximum = k, h.exclusiveMaximum = !0) : h.exclusiveMaximum = k), typeof w == "number" && (h.maximum = w, typeof k == "number" && this.target !== "draft-4" && (k <= w ? delete h.maximum : delete h.exclusiveMaximum)), typeof E == "number" && (h.multipleOf = E);
            break;
          }
          case "boolean": {
            const h = b;
            h.type = "boolean";
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
            this.target === "openapi-3.0" ? (b.type = "string", b.nullable = !0, b.enum = [null]) : b.type = "null";
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
            b.not = {};
            break;
          }
          case "date": {
            if (this.unrepresentable === "throw")
              throw new Error("Date cannot be represented in JSON Schema");
            break;
          }
          case "array": {
            const h = b, { minimum: x, maximum: w } = r._zod.bag;
            typeof x == "number" && (h.minItems = x), typeof w == "number" && (h.maxItems = w), h.type = "array", h.items = this.process(l.element, { ...S, path: [...S.path, "items"] });
            break;
          }
          case "object": {
            const h = b;
            h.type = "object", h.properties = {};
            const x = l.shape;
            for (const E in x)
              h.properties[E] = this.process(x[E], {
                ...S,
                path: [...S.path, "properties", E]
              });
            const w = new Set(Object.keys(x)), T = new Set([...w].filter((E) => {
              const k = l.shape[E]._zod;
              return this.io === "input" ? k.optin === void 0 : k.optout === void 0;
            }));
            T.size > 0 && (h.required = Array.from(T)), l.catchall?._zod.def.type === "never" ? h.additionalProperties = !1 : l.catchall ? l.catchall && (h.additionalProperties = this.process(l.catchall, {
              ...S,
              path: [...S.path, "additionalProperties"]
            })) : this.io === "output" && (h.additionalProperties = !1);
            break;
          }
          case "union": {
            const h = b, x = l.options.map((w, T) => this.process(w, {
              ...S,
              path: [...S.path, "anyOf", T]
            }));
            h.anyOf = x;
            break;
          }
          case "intersection": {
            const h = b, x = this.process(l.left, {
              ...S,
              path: [...S.path, "allOf", 0]
            }), w = this.process(l.right, {
              ...S,
              path: [...S.path, "allOf", 1]
            }), T = (k) => "allOf" in k && Object.keys(k).length === 1, E = [
              ...T(x) ? x.allOf : [x],
              ...T(w) ? w.allOf : [w]
            ];
            h.allOf = E;
            break;
          }
          case "tuple": {
            const h = b;
            h.type = "array";
            const x = this.target === "draft-2020-12" ? "prefixItems" : "items", w = this.target === "draft-2020-12" || this.target === "openapi-3.0" ? "items" : "additionalItems", T = l.items.map((N, j) => this.process(N, {
              ...S,
              path: [...S.path, x, j]
            })), E = l.rest ? this.process(l.rest, {
              ...S,
              path: [...S.path, w, ...this.target === "openapi-3.0" ? [l.items.length] : []]
            }) : null;
            this.target === "draft-2020-12" ? (h.prefixItems = T, E && (h.items = E)) : this.target === "openapi-3.0" ? (h.items = {
              anyOf: T
            }, E && h.items.anyOf.push(E), h.minItems = T.length, E || (h.maxItems = T.length)) : (h.items = T, E && (h.additionalItems = E));
            const { minimum: k, maximum: C } = r._zod.bag;
            typeof k == "number" && (h.minItems = k), typeof C == "number" && (h.maxItems = C);
            break;
          }
          case "record": {
            const h = b;
            h.type = "object", (this.target === "draft-7" || this.target === "draft-2020-12") && (h.propertyNames = this.process(l.keyType, {
              ...S,
              path: [...S.path, "propertyNames"]
            })), h.additionalProperties = this.process(l.valueType, {
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
            const h = b, x = t1(l.entries);
            x.every((w) => typeof w == "number") && (h.type = "number"), x.every((w) => typeof w == "string") && (h.type = "string"), h.enum = x;
            break;
          }
          case "literal": {
            const h = b, x = [];
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
              h.type = w === null ? "null" : typeof w, this.target === "draft-4" || this.target === "openapi-3.0" ? h.enum = [w] : h.const = w;
            } else
              x.every((w) => typeof w == "number") && (h.type = "number"), x.every((w) => typeof w == "string") && (h.type = "string"), x.every((w) => typeof w == "boolean") && (h.type = "string"), x.every((w) => w === null) && (h.type = "null"), h.enum = x;
            break;
          }
          case "file": {
            const h = b, x = {
              type: "string",
              format: "binary",
              contentEncoding: "binary"
            }, { minimum: w, maximum: T, mime: E } = r._zod.bag;
            w !== void 0 && (x.minLength = w), T !== void 0 && (x.maxLength = T), E ? E.length === 1 ? (x.contentMediaType = E[0], Object.assign(h, x)) : h.anyOf = E.map((k) => ({ ...x, contentMediaType: k })) : Object.assign(h, x);
            break;
          }
          case "transform": {
            if (this.unrepresentable === "throw")
              throw new Error("Transforms cannot be represented in JSON Schema");
            break;
          }
          case "nullable": {
            const h = this.process(l.innerType, S);
            this.target === "openapi-3.0" ? (p.ref = l.innerType, b.nullable = !0) : b.anyOf = [h, { type: "null" }];
            break;
          }
          case "nonoptional": {
            this.process(l.innerType, S), p.ref = l.innerType;
            break;
          }
          case "success": {
            const h = b;
            h.type = "boolean";
            break;
          }
          case "default": {
            this.process(l.innerType, S), p.ref = l.innerType, b.default = JSON.parse(JSON.stringify(l.defaultValue));
            break;
          }
          case "prefault": {
            this.process(l.innerType, S), p.ref = l.innerType, this.io === "input" && (b._prefault = JSON.parse(JSON.stringify(l.defaultValue)));
            break;
          }
          case "catch": {
            this.process(l.innerType, S), p.ref = l.innerType;
            let h;
            try {
              h = l.catchValue(void 0);
            } catch {
              throw new Error("Dynamic catch values are not supported in JSON Schema");
            }
            b.default = h;
            break;
          }
          case "nan": {
            if (this.unrepresentable === "throw")
              throw new Error("NaN cannot be represented in JSON Schema");
            break;
          }
          case "template_literal": {
            const h = b, x = r._zod.pattern;
            if (!x)
              throw new Error("Pattern not found in template literal");
            h.type = "string", h.pattern = x.source;
            break;
          }
          case "pipe": {
            const h = this.io === "input" ? l.in._zod.def.type === "transform" ? l.out : l.in : l.out;
            this.process(h, S), p.ref = h;
            break;
          }
          case "readonly": {
            this.process(l.innerType, S), p.ref = l.innerType, b.readOnly = !0;
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
            const h = r._zod.innerType;
            this.process(h, S), p.ref = h;
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
        const x = s.external.registry.get(m[0])?.id, w = s.external.uri ?? ((E) => E);
        if (x)
          return { ref: w(x) };
        const T = m[1].defId ?? m[1].schema.id ?? `schema${this.counter++}`;
        return m[1].defId = T, { defId: T, ref: `${w("__shared")}#/${S}/${T}` };
      }
      if (m[1] === l)
        return { ref: "#" };
      const b = `#/${S}/`, h = m[1].schema.id ?? `__schema${this.counter++}`;
      return { defId: h, ref: b + h };
    }, f = (m) => {
      if (m[1].schema.$ref)
        return;
      const S = m[1], { ref: y, defId: b } = u(m);
      S.def = { ...S.schema }, b && (S.defId = b);
      const h = S.schema;
      for (const x in h)
        delete h[x];
      h.$ref = y;
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
        const b = s.external.registry.get(m[0])?.id;
        if (r !== m[0] && b) {
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
      const y = this.seen.get(m), b = y.def ?? y.schema, h = { ...b };
      if (y.ref === null)
        return;
      const x = y.ref;
      if (y.ref = null, x) {
        p(x, S);
        const w = this.seen.get(x).schema;
        w.$ref && (S.target === "draft-7" || S.target === "draft-4" || S.target === "openapi-3.0") ? (b.allOf = b.allOf ?? [], b.allOf.push(w)) : (Object.assign(b, w), Object.assign(b, h));
      }
      y.isParent || this.override({
        zodSchema: m,
        jsonSchema: b,
        path: y.path ?? []
      });
    };
    for (const m of [...this.seen.entries()].reverse())
      p(m[0], { target: this.target });
    const d = {};
    if (this.target === "draft-2020-12" ? d.$schema = "https://json-schema.org/draft/2020-12/schema" : this.target === "draft-7" ? d.$schema = "http://json-schema.org/draft-07/schema#" : this.target === "draft-4" ? d.$schema = "http://json-schema.org/draft-04/schema#" : this.target === "openapi-3.0" || console.warn(`Invalid target: ${this.target}`), s.external?.uri) {
      const m = s.external.registry.get(r)?.id;
      if (!m)
        throw new Error("Schema is missing an `id` property");
      d.$id = s.external.uri(m);
    }
    Object.assign(d, l.def);
    const g = s.external?.defs ?? {};
    for (const m of this.seen.entries()) {
      const S = m[1];
      S.def && S.defId && (g[S.defId] = S.def);
    }
    s.external || Object.keys(g).length > 0 && (this.target === "draft-2020-12" ? d.$defs = g : d.definitions = g);
    try {
      return JSON.parse(JSON.stringify(d));
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
}
function eA(t, r) {
  if (t instanceof y1) {
    const s = new qy(r), l = {};
    for (const p of t._idmap.entries()) {
      const [d, g] = p;
      s.process(g);
    }
    const u = {}, f = {
      registry: t,
      uri: r?.uri,
      defs: l
    };
    for (const p of t._idmap.entries()) {
      const [d, g] = p;
      u[d] = s.emit(g, {
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
  const i = new qy(r);
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
const tA = /* @__PURE__ */ ee("ZodISODateTime", (t, r) => {
  kC.init(t, r), vt.init(t, r);
});
function nA(t) {
  return M3(tA, t);
}
const rA = /* @__PURE__ */ ee("ZodISODate", (t, r) => {
  jC.init(t, r), vt.init(t, r);
});
function aA(t) {
  return D3(rA, t);
}
const iA = /* @__PURE__ */ ee("ZodISOTime", (t, r) => {
  MC.init(t, r), vt.init(t, r);
});
function sA(t) {
  return R3(iA, t);
}
const oA = /* @__PURE__ */ ee("ZodISODuration", (t, r) => {
  DC.init(t, r), vt.init(t, r);
});
function lA(t) {
  return z3(oA, t);
}
const uA = (t, r) => {
  s1.init(t, r), t.name = "ZodError", Object.defineProperties(t, {
    format: {
      value: (i) => xw(t, i)
      // enumerable: false,
    },
    flatten: {
      value: (i) => Sw(t, i)
      // enumerable: false,
    },
    addIssue: {
      value: (i) => {
        t.issues.push(i), t.message = JSON.stringify(t.issues, zd, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (i) => {
        t.issues.push(...i), t.message = JSON.stringify(t.issues, zd, 2);
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
}, Hn = ee("ZodError", uA, {
  Parent: Error
}), cA = /* @__PURE__ */ rh(Hn), fA = /* @__PURE__ */ ah(Hn), dA = /* @__PURE__ */ Au(Hn), hA = /* @__PURE__ */ Nu(Hn), pA = /* @__PURE__ */ Cw(Hn), mA = /* @__PURE__ */ Aw(Hn), gA = /* @__PURE__ */ Nw(Hn), vA = /* @__PURE__ */ Tw(Hn), yA = /* @__PURE__ */ Ow(Hn), bA = /* @__PURE__ */ kw(Hn), _A = /* @__PURE__ */ jw(Hn), SA = /* @__PURE__ */ Mw(Hn), Rt = /* @__PURE__ */ ee("ZodType", (t, r) => (Ot.init(t, r), t.def = r, t.type = r.type, Object.defineProperty(t, "_def", { value: r }), t.check = (...i) => t.clone(Pa(r, {
  checks: [
    ...r.checks ?? [],
    ...i.map((s) => typeof s == "function" ? { _zod: { check: s, def: { check: "custom" }, onattach: [] } } : s)
  ]
})), t.clone = (i, s) => oa(t, i, s), t.brand = () => t, t.register = ((i, s) => (i.add(t, s), t)), t.parse = (i, s) => cA(t, i, s, { callee: t.parse }), t.safeParse = (i, s) => dA(t, i, s), t.parseAsync = async (i, s) => fA(t, i, s, { callee: t.parseAsync }), t.safeParseAsync = async (i, s) => hA(t, i, s), t.spa = t.safeParseAsync, t.encode = (i, s) => pA(t, i, s), t.decode = (i, s) => mA(t, i, s), t.encodeAsync = async (i, s) => gA(t, i, s), t.decodeAsync = async (i, s) => vA(t, i, s), t.safeEncode = (i, s) => yA(t, i, s), t.safeDecode = (i, s) => bA(t, i, s), t.safeEncodeAsync = async (i, s) => _A(t, i, s), t.safeDecodeAsync = async (i, s) => SA(t, i, s), t.refine = (i, s) => t.check(cN(i, s)), t.superRefine = (i) => t.check(fN(i)), t.overwrite = (i) => t.check(lo(i)), t.optional = () => Vy(t), t.nullable = () => Yy(t), t.nullish = () => Vy(Yy(t)), t.nonoptional = (i) => rN(t, i), t.array = () => Jn(t), t.or = (i) => YA([t, i]), t.and = (i) => $A(t, i), t.transform = (i) => Xy(t, QA(i)), t.default = (i) => eN(t, i), t.prefault = (i) => nN(t, i), t.catch = (i) => iN(t, i), t.pipe = (i) => Xy(t, i), t.readonly = () => lN(t), t.describe = (i) => {
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
}, t.isOptional = () => t.safeParse(void 0).success, t.isNullable = () => t.safeParse(null).success, t)), S1 = /* @__PURE__ */ ee("_ZodString", (t, r) => {
  ih.init(t, r), Rt.init(t, r);
  const i = t._zod.bag;
  t.format = i.format ?? null, t.minLength = i.minimum ?? null, t.maxLength = i.maximum ?? null, t.regex = (...s) => t.check(U3(...s)), t.includes = (...s) => t.check(F3(...s)), t.startsWith = (...s) => t.check(Z3(...s)), t.endsWith = (...s) => t.check(G3(...s)), t.min = (...s) => t.check(xu(...s)), t.max = (...s) => t.check(b1(...s)), t.length = (...s) => t.check(_1(...s)), t.nonempty = (...s) => t.check(xu(1, ...s)), t.lowercase = (s) => t.check(H3(s)), t.uppercase = (s) => t.check(q3(s)), t.trim = () => t.check(Y3()), t.normalize = (...s) => t.check(V3(...s)), t.toLowerCase = () => t.check(X3()), t.toUpperCase = () => t.check($3());
}), xA = /* @__PURE__ */ ee("ZodString", (t, r) => {
  ih.init(t, r), S1.init(t, r), t.email = (i) => t.check(f3(EA, i)), t.url = (i) => t.check(g3(wA, i)), t.jwt = (i) => t.check(j3(BA, i)), t.emoji = (i) => t.check(v3(CA, i)), t.guid = (i) => t.check(Py(Fy, i)), t.uuid = (i) => t.check(d3(nu, i)), t.uuidv4 = (i) => t.check(h3(nu, i)), t.uuidv6 = (i) => t.check(p3(nu, i)), t.uuidv7 = (i) => t.check(m3(nu, i)), t.nanoid = (i) => t.check(y3(AA, i)), t.guid = (i) => t.check(Py(Fy, i)), t.cuid = (i) => t.check(b3(NA, i)), t.cuid2 = (i) => t.check(_3(TA, i)), t.ulid = (i) => t.check(S3(OA, i)), t.base64 = (i) => t.check(T3(LA, i)), t.base64url = (i) => t.check(O3(IA, i)), t.xid = (i) => t.check(x3(kA, i)), t.ksuid = (i) => t.check(E3(jA, i)), t.ipv4 = (i) => t.check(w3(MA, i)), t.ipv6 = (i) => t.check(C3(DA, i)), t.cidrv4 = (i) => t.check(A3(RA, i)), t.cidrv6 = (i) => t.check(N3(zA, i)), t.e164 = (i) => t.check(k3(PA, i)), t.datetime = (i) => t.check(nA(i)), t.date = (i) => t.check(aA(i)), t.time = (i) => t.check(sA(i)), t.duration = (i) => t.check(lA(i));
});
function Un(t) {
  return c3(xA, t);
}
const vt = /* @__PURE__ */ ee("ZodStringFormat", (t, r) => {
  ht.init(t, r), S1.init(t, r);
}), EA = /* @__PURE__ */ ee("ZodEmail", (t, r) => {
  SC.init(t, r), vt.init(t, r);
}), Fy = /* @__PURE__ */ ee("ZodGUID", (t, r) => {
  bC.init(t, r), vt.init(t, r);
}), nu = /* @__PURE__ */ ee("ZodUUID", (t, r) => {
  _C.init(t, r), vt.init(t, r);
}), wA = /* @__PURE__ */ ee("ZodURL", (t, r) => {
  xC.init(t, r), vt.init(t, r);
}), CA = /* @__PURE__ */ ee("ZodEmoji", (t, r) => {
  EC.init(t, r), vt.init(t, r);
}), AA = /* @__PURE__ */ ee("ZodNanoID", (t, r) => {
  wC.init(t, r), vt.init(t, r);
}), NA = /* @__PURE__ */ ee("ZodCUID", (t, r) => {
  CC.init(t, r), vt.init(t, r);
}), TA = /* @__PURE__ */ ee("ZodCUID2", (t, r) => {
  AC.init(t, r), vt.init(t, r);
}), OA = /* @__PURE__ */ ee("ZodULID", (t, r) => {
  NC.init(t, r), vt.init(t, r);
}), kA = /* @__PURE__ */ ee("ZodXID", (t, r) => {
  TC.init(t, r), vt.init(t, r);
}), jA = /* @__PURE__ */ ee("ZodKSUID", (t, r) => {
  OC.init(t, r), vt.init(t, r);
}), MA = /* @__PURE__ */ ee("ZodIPv4", (t, r) => {
  RC.init(t, r), vt.init(t, r);
}), DA = /* @__PURE__ */ ee("ZodIPv6", (t, r) => {
  zC.init(t, r), vt.init(t, r);
}), RA = /* @__PURE__ */ ee("ZodCIDRv4", (t, r) => {
  LC.init(t, r), vt.init(t, r);
}), zA = /* @__PURE__ */ ee("ZodCIDRv6", (t, r) => {
  IC.init(t, r), vt.init(t, r);
}), LA = /* @__PURE__ */ ee("ZodBase64", (t, r) => {
  PC.init(t, r), vt.init(t, r);
}), IA = /* @__PURE__ */ ee("ZodBase64URL", (t, r) => {
  UC.init(t, r), vt.init(t, r);
}), PA = /* @__PURE__ */ ee("ZodE164", (t, r) => {
  HC.init(t, r), vt.init(t, r);
}), BA = /* @__PURE__ */ ee("ZodJWT", (t, r) => {
  FC.init(t, r), vt.init(t, r);
}), x1 = /* @__PURE__ */ ee("ZodNumber", (t, r) => {
  m1.init(t, r), Rt.init(t, r), t.gt = (s, l) => t.check(Uy(s, l)), t.gte = (s, l) => t.check(md(s, l)), t.min = (s, l) => t.check(md(s, l)), t.lt = (s, l) => t.check(By(s, l)), t.lte = (s, l) => t.check(pd(s, l)), t.max = (s, l) => t.check(pd(s, l)), t.int = (s) => t.check(Zy(s)), t.safe = (s) => t.check(Zy(s)), t.positive = (s) => t.check(Uy(0, s)), t.nonnegative = (s) => t.check(md(0, s)), t.negative = (s) => t.check(By(0, s)), t.nonpositive = (s) => t.check(pd(0, s)), t.multipleOf = (s, l) => t.check(Hy(s, l)), t.step = (s, l) => t.check(Hy(s, l)), t.finite = () => t;
  const i = t._zod.bag;
  t.minValue = Math.max(i.minimum ?? Number.NEGATIVE_INFINITY, i.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, t.maxValue = Math.min(i.maximum ?? Number.POSITIVE_INFINITY, i.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, t.isInt = (i.format ?? "").includes("int") || Number.isSafeInteger(i.multipleOf ?? 0.5), t.isFinite = !0, t.format = i.format ?? null;
});
function Eu(t) {
  return L3(x1, t);
}
const UA = /* @__PURE__ */ ee("ZodNumberFormat", (t, r) => {
  ZC.init(t, r), x1.init(t, r);
});
function Zy(t) {
  return I3(UA, t);
}
const HA = /* @__PURE__ */ ee("ZodUnknown", (t, r) => {
  GC.init(t, r), Rt.init(t, r);
});
function Gy() {
  return P3(HA);
}
const qA = /* @__PURE__ */ ee("ZodNever", (t, r) => {
  VC.init(t, r), Rt.init(t, r);
});
function FA(t) {
  return B3(qA, t);
}
const ZA = /* @__PURE__ */ ee("ZodArray", (t, r) => {
  YC.init(t, r), Rt.init(t, r), t.element = r.element, t.min = (i, s) => t.check(xu(i, s)), t.nonempty = (i) => t.check(xu(1, i)), t.max = (i, s) => t.check(b1(i, s)), t.length = (i, s) => t.check(_1(i, s)), t.unwrap = () => t.element;
});
function Jn(t, r) {
  return J3(ZA, t, r);
}
const GA = /* @__PURE__ */ ee("ZodObject", (t, r) => {
  $C.init(t, r), Rt.init(t, r), ut(t, "shape", () => r.shape), t.keyof = () => Pd(Object.keys(t._zod.def.shape)), t.catchall = (i) => t.clone({ ...t._zod.def, catchall: i }), t.passthrough = () => t.clone({ ...t._zod.def, catchall: Gy() }), t.loose = () => t.clone({ ...t._zod.def, catchall: Gy() }), t.strict = () => t.clone({ ...t._zod.def, catchall: FA() }), t.strip = () => t.clone({ ...t._zod.def, catchall: void 0 }), t.extend = (i) => gw(t, i), t.safeExtend = (i) => vw(t, i), t.merge = (i) => yw(t, i), t.pick = (i) => pw(t, i), t.omit = (i) => mw(t, i), t.partial = (...i) => bw(E1, t, i[0]), t.required = (...i) => _w(w1, t, i[0]);
});
function Ra(t, r) {
  const i = {
    type: "object",
    shape: t ?? {},
    ..._e(r)
  };
  return new GA(i);
}
const VA = /* @__PURE__ */ ee("ZodUnion", (t, r) => {
  JC.init(t, r), Rt.init(t, r), t.options = r.options;
});
function YA(t, r) {
  return new VA({
    type: "union",
    options: t,
    ..._e(r)
  });
}
const XA = /* @__PURE__ */ ee("ZodIntersection", (t, r) => {
  QC.init(t, r), Rt.init(t, r);
});
function $A(t, r) {
  return new XA({
    type: "intersection",
    left: t,
    right: r
  });
}
const Id = /* @__PURE__ */ ee("ZodEnum", (t, r) => {
  KC.init(t, r), Rt.init(t, r), t.enum = r.entries, t.options = Object.values(r.entries);
  const i = new Set(Object.keys(r.entries));
  t.extract = (s, l) => {
    const u = {};
    for (const f of s)
      if (i.has(f))
        u[f] = r.entries[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new Id({
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
    return new Id({
      ...r,
      checks: [],
      ..._e(l),
      entries: u
    });
  };
});
function Pd(t, r) {
  const i = Array.isArray(t) ? Object.fromEntries(t.map((s) => [s, s])) : t;
  return new Id({
    type: "enum",
    entries: i,
    ..._e(r)
  });
}
const JA = /* @__PURE__ */ ee("ZodTransform", (t, r) => {
  WC.init(t, r), Rt.init(t, r), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      throw new W0(t.constructor.name);
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
function QA(t) {
  return new JA({
    type: "transform",
    transform: t
  });
}
const E1 = /* @__PURE__ */ ee("ZodOptional", (t, r) => {
  e3.init(t, r), Rt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function Vy(t) {
  return new E1({
    type: "optional",
    innerType: t
  });
}
const KA = /* @__PURE__ */ ee("ZodNullable", (t, r) => {
  t3.init(t, r), Rt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function Yy(t) {
  return new KA({
    type: "nullable",
    innerType: t
  });
}
const WA = /* @__PURE__ */ ee("ZodDefault", (t, r) => {
  n3.init(t, r), Rt.init(t, r), t.unwrap = () => t._zod.def.innerType, t.removeDefault = t.unwrap;
});
function eN(t, r) {
  return new WA({
    type: "default",
    innerType: t,
    get defaultValue() {
      return typeof r == "function" ? r() : r1(r);
    }
  });
}
const tN = /* @__PURE__ */ ee("ZodPrefault", (t, r) => {
  r3.init(t, r), Rt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function nN(t, r) {
  return new tN({
    type: "prefault",
    innerType: t,
    get defaultValue() {
      return typeof r == "function" ? r() : r1(r);
    }
  });
}
const w1 = /* @__PURE__ */ ee("ZodNonOptional", (t, r) => {
  a3.init(t, r), Rt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function rN(t, r) {
  return new w1({
    type: "nonoptional",
    innerType: t,
    ..._e(r)
  });
}
const aN = /* @__PURE__ */ ee("ZodCatch", (t, r) => {
  i3.init(t, r), Rt.init(t, r), t.unwrap = () => t._zod.def.innerType, t.removeCatch = t.unwrap;
});
function iN(t, r) {
  return new aN({
    type: "catch",
    innerType: t,
    catchValue: typeof r == "function" ? r : () => r
  });
}
const sN = /* @__PURE__ */ ee("ZodPipe", (t, r) => {
  s3.init(t, r), Rt.init(t, r), t.in = r.in, t.out = r.out;
});
function Xy(t, r) {
  return new sN({
    type: "pipe",
    in: t,
    out: r
    // ...util.normalizeParams(params),
  });
}
const oN = /* @__PURE__ */ ee("ZodReadonly", (t, r) => {
  o3.init(t, r), Rt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function lN(t) {
  return new oN({
    type: "readonly",
    innerType: t
  });
}
const uN = /* @__PURE__ */ ee("ZodCustom", (t, r) => {
  l3.init(t, r), Rt.init(t, r);
});
function cN(t, r = {}) {
  return Q3(uN, t, r);
}
function fN(t) {
  return K3(t);
}
const $y = {
  FIELD: "FieldRevision",
  GLOBAL: "GlobalRevision"
}, Bd = "placeholder-chatHistory", dN = Ra({
  justification: Un().describe(
    "A brief, friendly, and conversational explanation of the changes made, as if you are a helpful assistant."
  ),
  response: Un().describe("The new, full content for the character field.")
}), hN = Ra({
  field: Un(),
  value: Un()
}), pN = Ra({
  index: Eu().int().positive(),
  value: Un()
});
Ra({
  justification: Un(),
  fields_to_change: Jn(hN).optional(),
  draft_fields_to_remove: Jn(Un()).optional(),
  greetings_to_add: Jn(Un()).optional(),
  greetings_to_remove: Jn(Eu().int().positive()).optional(),
  greetings_to_change: Jn(pN).optional()
});
const mN = (t, r) => {
  const i = Ra({
    index: Eu().int().positive().describe("The 1-based index of the alternate greeting to change."),
    value: Un().describe("The new content for the alternate greeting.")
  }), s = {
    justification: Un().describe(
      "A brief, friendly, and conversational explanation of the operations performed, as if you are a helpful assistant."
    ),
    greetings_to_add: Jn(Un()).optional().describe("A list of new alternate greetings to add to the end."),
    greetings_to_remove: Jn(Eu().int().positive()).optional().describe("A list of 1-based indices of alternate greetings to remove."),
    greetings_to_change: Jn(i).optional().describe("A list of alternate greetings to update with new content.")
  };
  if (t.length > 0) {
    const l = Ra({
      field: Pd(t).describe("The unique ID of the field to change (core or draft)."),
      value: Un().describe("The new content for the field.")
    });
    s.fields_to_change = Jn(l).optional().describe("A list of character fields to update with new content.");
  }
  return r.length > 0 && (s.draft_fields_to_remove = Jn(Pd(r).describe("The unique ID of the draft field to remove.")).optional().describe("A list of draft field IDs to remove.")), Ra(s);
};
function gd(t) {
  return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function Ud(t, r = 0) {
  const i = "  ".repeat(r);
  if (Array.isArray(t))
    return t.map((s) => s !== null && typeof s == "object" ? `${i}<item>
${Ud(s, r + 1)}${i}</item>
` : `${i}<item>${gd(s)}</item>
`).join("");
  if (t !== null && typeof t == "object") {
    let s = "";
    for (const l of Object.keys(t)) {
      const u = t[l];
      u !== null && typeof u == "object" ? s += `${i}<${l}>
${Ud(u, r + 1)}${i}</${l}>
` : s += `${i}<${l}>${gd(u)}</${l}>
`;
    }
    return s;
  }
  return `${i}<value>${gd(t)}</value>
`;
}
function gN(t, r) {
  const i = ka(t);
  return r === "xml" ? Ud(i).trim() : JSON.stringify(i, null, 2);
}
function vN(...t) {
  for (const r of t) if (r !== void 0) return r;
}
function yN(t) {
  return Array.isArray(t) ? t.find((r) => r !== "null") ?? t[0] : t;
}
function ka(t) {
  if (!t || typeof t != "object") return null;
  const r = Array.isArray(t.examples) ? t.examples[0] : void 0, i = vN(t.example, r, t.default);
  if (i !== void 0) return i;
  if (t.const !== void 0) return t.const;
  if (Array.isArray(t.enum) && t.enum.length) return t.enum[0];
  const s = Array.isArray(t.anyOf) ? t.anyOf[0] : Array.isArray(t.oneOf) ? t.oneOf[0] : void 0;
  if (s) return ka(s);
  switch (yN(t.type)) {
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
const bN = new dS();
async function Hd(t, r, i, s, l, u) {
  const f = !s.json_schema && !1;
  return new Promise((p, d) => {
    const g = new AbortController(), m = u ?? g.signal;
    u && u.addEventListener("abort", () => g.abort(), { once: !0 }), bN.generateRequest(
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
        onFinish: (S, y, b) => m.aborted ? d(new DOMException("Request aborted by user", "AbortError")) : b ? d(b) : y === void 0 && b === void 0 ? d(new DOMException("Request aborted by user", "AbortError")) : (y || d(new Error("No data received from LLM")), b ? d(b) : p(y))
      }
    );
  });
}
async function _N(t, r, i, s) {
  const l = await Hd(t, r, i, {}, void 0, s);
  if (!l?.content)
    throw new Error("Plain request failed to return content.");
  return l.content;
}
async function SN(t, r, i, s, l, u, f) {
  const p = St.getSettings();
  let d, g;
  const m = eA(i);
  if (l === "native") {
    if (d = await Hd(
      t,
      r,
      u,
      {
        json_schema: { name: s, strict: !0, value: m }
      },
      void 0,
      f
    ), !d?.content)
      throw new Error(`Structured request for ${s} failed to return content.`);
    g = typeof d.content == "string" ? JSON.parse(d.content) : d.content;
  } else {
    const y = l, b = gN(m, y), h = JSON.stringify(m, null, 2), x = y === "json" ? "reviseJsonPrompt" : "reviseXmlPrompt", w = p.prompts[x]?.content;
    if (!w)
      throw new Error(`Prompt template for mode "${y}" not found.`);
    const T = {
      example_response: b,
      schema: h
    }, k = { role: "system", content: Ft.compile(w, { noEscape: !0, strict: !0 })(T) };
    if (d = await Hd(
      t,
      [...r, k],
      u,
      {},
      void 0,
      f
    ), !d?.content)
      throw new Error(`Structured request for ${s} failed to return content.`);
    g = L0(d.content, y, { schema: m });
  }
  const S = i.safeParse(g);
  if (!S.success) {
    const y = `Model response failed schema validation for ${s}. Check console for details.`;
    throw console.error("Zod validation failed:", S.error.issues), console.error("Raw content parsed:", g), await Oe("error", y), new Error(y);
  }
  return S.data;
}
const C1 = ({ originalContent: t, newContent: r }) => {
  const i = X.useMemo(() => {
    const s = Q0(t, r);
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
}, xN = ({ before: t, after: r }) => {
  const i = X.useMemo(() => {
    const s = [];
    return (/* @__PURE__ */ new Set([...Object.keys(t.fields), ...Object.keys(r.fields)])).forEach((u) => {
      const f = t.fields[u], p = r.fields[u], d = f?.value ?? "", g = p?.value ?? "";
      d !== g && s.push({
        label: p?.label ?? f?.label ?? u,
        before: d,
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
      /* @__PURE__ */ _.jsx(C1, { originalContent: l, newContent: u })
    ] }, s)) })
  ] });
}, EN = ({ currentState: t, initialState: r }) => {
  const [i, s] = X.useState(!1), { coreFields: l, alternateGreetings: u } = X.useMemo(() => {
    const p = [], d = [];
    return fn.forEach((g) => {
      t.fields[g] && p.push({ label: t.fields[g].label, value: t.fields[g].value });
    }), Object.entries(t.fields).filter(([g]) => g.startsWith("alternate_greetings_")).sort((g, m) => parseInt(g[0].split("_")[2]) - parseInt(m[0].split("_")[2])).forEach(([, g]) => d.push(g.value)), { coreFields: p, alternateGreetings: d };
  }, [t]), f = X.useMemo(() => {
    const p = [];
    return (/* @__PURE__ */ new Set([...Object.keys(r.fields), ...Object.keys(t.fields)])).forEach((g) => {
      const m = r.fields[g], S = t.fields[g], y = m?.value ?? "", b = S?.value ?? "";
      y !== b && p.push({
        label: S?.label ?? m?.label ?? g,
        before: y,
        after: b
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
    /* @__PURE__ */ _.jsx("div", { className: "current-state-content", children: i ? /* @__PURE__ */ _.jsx("div", { className: "compare-state-list", children: f.length === 0 ? /* @__PURE__ */ _.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes from the original state." }) : f.map(({ label: p, before: d, after: g }) => /* @__PURE__ */ _.jsxs("div", { className: "compare-state-item", children: [
      /* @__PURE__ */ _.jsx("h4", { children: p }),
      /* @__PURE__ */ _.jsxs("div", { className: "compare-state-header", children: [
        /* @__PURE__ */ _.jsx("span", { children: "Original" }),
        /* @__PURE__ */ _.jsx("span", { children: "Current" })
      ] }),
      /* @__PURE__ */ _.jsx(C1, { originalContent: d, newContent: g })
    ] }, p)) }) : /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
      /* @__PURE__ */ _.jsx("h4", { children: "Core Fields" }),
      l.map(({ label: p, value: d }) => /* @__PURE__ */ _.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ _.jsx("label", { children: p }),
        /* @__PURE__ */ _.jsx("div", { className: "state-value", children: d || /* @__PURE__ */ _.jsx("span", { className: "subtle-text", children: "empty" }) })
      ] }, p)),
      u.length > 0 && /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
        /* @__PURE__ */ _.jsx("h4", { style: { marginTop: "20px" }, children: "Alternate Greetings" }),
        u.map((p, d) => /* @__PURE__ */ _.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ _.jsxs("label", { children: [
            "Greeting ",
            d + 1
          ] }),
          /* @__PURE__ */ _.jsx("div", { className: "state-value", children: p || /* @__PURE__ */ _.jsx("span", { className: "subtle-text", children: "empty" }) })
        ] }, d))
      ] })
    ] }) })
  ] });
}, ji = SillyTavern.getContext(), wN = (t) => Object.entries(t.fields).filter(([r]) => r.startsWith("alternate_greetings_")).sort((r, i) => {
  const s = parseInt(r[0].split("_")[2]), l = parseInt(i[0].split("_")[2]);
  return s - l;
}).map(([, r]) => r.value), CN = (t, r, i, s) => {
  const l = structuredClone(t);
  if (i === "field" && s) {
    const u = r;
    return l.fields[s] && (l.fields[s].value = u.response), l;
  }
  if (i === "global") {
    const u = r;
    let f = wN(l), p = !1;
    if (u.fields_to_change?.length)
      for (const d of u.fields_to_change)
        l.fields[d.field] ? l.fields[d.field].value = d.value : l.draftFields[d.field] && (l.draftFields[d.field].value = d.value);
    if (u.draft_fields_to_remove?.length)
      for (const d of u.draft_fields_to_remove)
        l.draftFields[d] && delete l.draftFields[d];
    if (u.greetings_to_change?.length) {
      p = !0;
      for (const d of u.greetings_to_change)
        d.index > 0 && d.index <= f.length && (f[d.index - 1] = d.value);
    }
    if (u.greetings_to_remove?.length) {
      p = !0;
      const d = new Set(u.greetings_to_remove.map((g) => g - 1));
      f = f.filter((g, m) => !d.has(m));
    }
    u.greetings_to_add?.length && (p = !0, f.push(...u.greetings_to_add)), p && (Object.keys(l.fields).forEach((d) => {
      d.startsWith("alternate_greetings_") && delete l.fields[d];
    }), f.forEach((d, g) => {
      const m = `alternate_greetings_${g + 1}`;
      l.fields[m] = {
        value: d,
        prompt: "",
        // Prompts are not managed in revise sessions.
        label: `Alternate Greeting ${g + 1}`
      };
    }));
  }
  return l;
}, AN = ({ initialState: t, onSave: r, onClose: i }) => {
  const [s, l] = X.useState(() => structuredClone(t)), u = (S, y, b) => {
    const h = structuredClone(s), x = b ? "draftFields" : "fields";
    h[x][S] && (h[x][S].value = y), l(h);
  }, f = (S, y) => {
    const b = structuredClone(s), h = `alternate_greetings_${S + 1}`;
    b.fields[h] && (b.fields[h].value = y), l(b);
  }, { coreFields: p, alternateGreetings: d, draftFields: g } = X.useMemo(() => {
    const S = [], y = [], b = [];
    return fn.forEach((h) => {
      s.fields[h] && S.push({ id: h, label: s.fields[h].label, value: s.fields[h].value });
    }), Object.entries(s.fields).filter(([h]) => h.startsWith("alternate_greetings_")).sort((h, x) => parseInt(h[0].split("_")[2]) - parseInt(x[0].split("_")[2])).forEach(([, h]) => y.push(h.value)), Object.entries(s.draftFields).forEach(([h, x]) => {
      b.push({ id: h, label: x.label, value: x.value });
    }), { coreFields: S, alternateGreetings: y, draftFields: b };
  }, [s]), m = () => {
    JSON.stringify(t) !== JSON.stringify(s) && r(s), i();
  };
  return /* @__PURE__ */ _.jsxs("div", { className: "current-state-popup", children: [
    /* @__PURE__ */ _.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ _.jsx("h3", { children: "Editing Character State" }),
      /* @__PURE__ */ _.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ _.jsxs(he, { onClick: m, children: [
          /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-check" }),
          " Save Changes"
        ] }),
        /* @__PURE__ */ _.jsxs(he, { onClick: i, className: "danger_button", children: [
          /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-times" }),
          " Cancel"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ _.jsxs("div", { className: "current-state-content", children: [
      /* @__PURE__ */ _.jsx("h4", { children: "Core Fields" }),
      p.map(({ id: S, label: y, value: b }) => /* @__PURE__ */ _.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ _.jsx("label", { children: y }),
        /* @__PURE__ */ _.jsx(dn, { value: b, onChange: (h) => u(S, h.target.value, !1), rows: 4 })
      ] }, S)),
      g.length > 0 && /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
        /* @__PURE__ */ _.jsx("h4", { style: { marginTop: "20px" }, children: "Draft Fields" }),
        g.map(({ id: S, label: y, value: b }) => /* @__PURE__ */ _.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ _.jsx("label", { children: y }),
          /* @__PURE__ */ _.jsx(dn, { value: b, onChange: (h) => u(S, h.target.value, !0), rows: 4 })
        ] }, S))
      ] }),
      d.length > 0 && /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
        /* @__PURE__ */ _.jsx("h4", { style: { marginTop: "20px" }, children: "Alternate Greetings" }),
        d.map((S, y) => /* @__PURE__ */ _.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ _.jsxs("label", { children: [
            "Greeting ",
            y + 1
          ] }),
          /* @__PURE__ */ _.jsx(dn, { value: S, onChange: (b) => f(y, b.target.value), rows: 4 })
        ] }, y))
      ] })
    ] })
  ] });
}, NN = ({
  session: t,
  onBack: r,
  onApply: i,
  onSessionUpdate: s,
  initialState: l,
  chatContextOptions: u
}) => {
  const [f, p] = X.useState(t.messages), [d, g] = X.useState(""), [m, S] = X.useState(!1), [y, b] = X.useState(null), [h, x] = X.useState(!1), [w, T] = X.useState(!1), [E, k] = X.useState(null), [C, N] = X.useState(""), j = X.useRef(null), R = X.useRef(null);
  X.useEffect(() => {
    j.current?.scrollIntoView({ behavior: "smooth" });
  }, [f]);
  const q = X.useCallback(
    ($, ve, ye) => {
      if (JSON.stringify(ye) === JSON.stringify(ve))
        return $;
      const ct = St.getSettings().prompts.existingFieldDefinitions;
      if (!ct) return $;
      const ke = { core: {}, alternate_greetings: {}, draft: {} };
      if ((/* @__PURE__ */ new Set([...Object.keys(ye.fields), ...Object.keys(ve.fields)])).forEach((Ze) => {
        const $e = ye.fields[Ze]?.value ?? "", Ve = ve.fields[Ze]?.value ?? "";
        if ($e !== Ve) {
          const We = ve.fields[Ze];
          We && (Ze.startsWith("alternate_greetings_") ? ke.alternate_greetings[We.label] = We.value : fn.includes(Ze) && (ke.core[We.label] = We.value));
        }
      }), (/* @__PURE__ */ new Set([...Object.keys(ye.draftFields), ...Object.keys(ve.draftFields)])).forEach((Ze) => {
        const $e = ye.draftFields[Ze]?.value ?? "", Ve = ve.draftFields[Ze]?.value ?? "";
        if ($e !== Ve && ve.draftFields[Ze]) {
          const We = ve.draftFields[Ze];
          ke.draft[We.label] = We.value;
        }
      }), Object.keys(ke.core).length === 0 && Object.keys(ke.alternate_greetings).length === 0 && Object.keys(ke.draft).length === 0)
        return $;
      const kt = { fields: ke };
      let en = Ft.compile(ct.content, { noEscape: !0 })(kt);
      if (en = ji.substituteParams(en), en.trim()) {
        const Ze = {
          id: `msg-${Date.now()}-state`,
          role: "system",
          content: en.trim(),
          isStateUpdate: !0
        };
        return [...$, Ze];
      }
      return $;
    },
    []
  ), V = X.useCallback(
    async ($, ve, ye, Xe) => {
      const ct = St.getSettings();
      if (!t.profileId) {
        Oe("warning", "Please select a connection profile for this session.");
        return;
      }
      R.current = new AbortController(), ye(), S(!0);
      try {
        const ke = [], at = ji.extensionSettings.connectionManager?.profiles?.find(
          (Ze) => Ze.id === t.profileId
        ), qn = at?.api ? ji.CONNECT_API_MAP[at.api].selected : void 0;
        if (!qn) {
          Oe("warning", "No API selected for this session.");
          return;
        }
        for (const Ze of $)
          if (Ze.id === Bd) {
            if (Tn === void 0 && !Cr) continue;
            const $e = await h0(qn, u);
            $e.warnings?.length && $e.warnings.forEach((Ve) => Oe("warning", Ve)), ke.push(...$e.result);
          } else
            ke.push(Ze);
        const kt = $.slice(0, $.length - (ve ? 0 : 1)).reverse().find((Ze) => Ze.stateSnapshot)?.stateSnapshot ?? l, en = ct.prompts.existingFieldDefinitions;
        if (en) {
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
          let $e = Ft.compile(en.content, { noEscape: !0 })(Ze);
          if ($e = ji.substituteParams($e), $e.trim()) {
            const Ve = {
              id: `temp-state-${Date.now()}`,
              role: "system",
              content: $e.trim()
            }, We = ke.pop();
            ke.push(Ve), We && ke.push(We);
          }
        }
        if (t.isReadonly) {
          ke.push({
            id: `msg-${Date.now()}-readonly`,
            role: "system",
            content: "Readonly mode enabled. You can only discuss with the user without making changes."
          });
          const Ze = await _N(
            t.profileId,
            ke,
            ct.maxResponseToken,
            R.current.signal
          ), $e = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: Ze
          }, Ve = [...$, $e];
          p(Ve), s({ ...t, messages: Ve });
        } else {
          const Ze = t.type === "field" ? dN : (() => {
            const Ge = [...Object.keys(kt.fields), ...Object.keys(kt.draftFields)], He = Object.keys(kt.draftFields);
            return mN(Ge, He);
          })(), Ve = await SN(
            t.profileId,
            ke,
            Ze,
            t.type === "field" ? $y.FIELD : $y.GLOBAL,
            t.promptEngineeringMode,
            ct.maxResponseToken,
            R.current.signal
          ), We = CN(kt, Ve, t.type, t.targetFieldId), me = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: Ve.justification,
            stateSnapshot: We
          };
          let pe = [...$, me];
          pe = q(pe, We, kt), p(pe), s({ ...t, messages: pe });
        }
      } catch (ke) {
        ke.name === "AbortError" ? Oe("info", "Request was cancelled.") : (console.error("Revise request failed:", ke), Oe("error", `Request failed: ${ke.message}`)), Xe();
      } finally {
        S(!1), R.current = null;
      }
    },
    [t, s, l, u, q]
  ), U = X.useCallback(async () => {
    if (!d.trim() || m) return;
    const $ = { id: `msg-${Date.now()}`, role: "user", content: d.trim() }, ve = f;
    V(
      [...f, $],
      !1,
      () => {
        p([...f, $]), g("");
      },
      () => p(ve)
    );
  }, [d, m, f, V]), Y = X.useCallback(async () => {
    if (m || f.length === 0) return;
    const $ = f;
    let ve = [...f];
    const ye = f.findLastIndex((Xe) => !Xe.isStateUpdate);
    ye > -1 && f[ye].role === "assistant" && (ve = f.slice(0, ye)), await V(
      ve,
      !0,
      () => p(ve),
      () => p($)
    );
  }, [m, f, V]), G = () => {
    const $ = f.slice().reverse().find((ve) => ve.stateSnapshot)?.stateSnapshot ?? l;
    i($), r();
  }, le = ($) => {
    const ve = f.findIndex((ct) => ct.id === $);
    if (ve === -1 || !f[ve].stateSnapshot) return;
    const ye = f[ve].stateSnapshot;
    let Xe = l;
    for (let ct = ve - 1; ct >= 0; ct--)
      if (f[ct].stateSnapshot) {
        Xe = f[ct].stateSnapshot;
        break;
      }
    b({ before: Xe, after: ye });
  }, fe = () => {
    x(!0);
  }, ue = ($) => {
    k($.id), N($.content);
  }, I = () => {
    k(null), N("");
  }, ne = async () => {
    if (!E) return;
    const $ = f.findIndex((at) => at.id === E);
    if ($ === -1 || !await ji.Popup.show.confirm(
      "Edit Message",
      "This will fork the conversation from this point, removing all subsequent messages. Continue?"
    )) return;
    const ye = f, Xe = f.slice(0, $), ct = { ...f[$], content: C }, ke = [...Xe, ct];
    I(), V(
      ke,
      !1,
      () => p(ke),
      () => p(ye)
    );
  }, ce = async ($) => {
    const ve = f.findIndex((at) => at.id === $);
    if (ve === -1) return;
    const Xe = !!f[ve].isInitial;
    if (!await ji.Popup.show.confirm(
      "Delete Message",
      Xe ? "Deleting part of the initial context will clear the entire chat history. Are you sure?" : "This will delete this message and all subsequent messages. Are you sure?"
    )) return;
    let ke;
    Xe ? ke = f.filter((at) => at.isInitial && at.id !== $) : ke = f.slice(0, ve), p(ke), s({ ...t, messages: ke }), Oe("info", "Message history has been updated.");
  }, je = f.filter(($) => !$.isStateUpdate), D = je.filter(($) => $.isInitial), J = je.filter(($) => !$.isInitial), re = f.slice().reverse().find(($) => $.stateSnapshot)?.stateSnapshot ?? l, ie = () => {
    T(!0);
  }, se = ($) => {
    const ve = f.slice().reverse().find((ct) => ct.stateSnapshot)?.stateSnapshot ?? l, ye = {
      id: `msg-${Date.now()}-user-edit`,
      role: "user",
      content: "I made a change.",
      // Default justification for manual edits
      stateSnapshot: $
    };
    let Xe = [...f, ye];
    Xe = q(Xe, $, ve), p(Xe), s({ ...t, messages: Xe }), T(!1);
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
              onChange: ($) => s({ ...t, isReadonly: $.target.checked })
            }
          ),
          "Readonly Mode"
        ] }),
        /* @__PURE__ */ _.jsx("div", { style: { maxWidth: "200px" }, children: /* @__PURE__ */ _.jsx(
          Y0,
          {
            initialSelectedProfileId: t.profileId,
            onChange: ($) => s({ ...t, profileId: $?.id ?? "" })
          }
        ) }),
        /* @__PURE__ */ _.jsxs(
          "select",
          {
            className: "text_pole",
            value: t.promptEngineeringMode,
            onChange: ($) => s({ ...t, promptEngineeringMode: $.target.value }),
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
        /* @__PURE__ */ _.jsx(he, { onClick: fe, title: "View current character state", children: "View State" }),
        /* @__PURE__ */ _.jsx(he, { onClick: ie, title: "Manually edit the current state", children: "Edit State" }),
        /* @__PURE__ */ _.jsx(he, { onClick: r, title: "Back to sessions", children: /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-arrow-left" }) }),
        /* @__PURE__ */ _.jsxs(he, { onClick: G, title: "Apply Changes and Close", children: [
          /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-check" }),
          " Apply"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ _.jsxs("div", { className: "chat-messages", children: [
      D.length > 0 && /* @__PURE__ */ _.jsxs("details", { className: "initial-messages-container", children: [
        /* @__PURE__ */ _.jsx("summary", { children: "View Initial Context" }),
        /* @__PURE__ */ _.jsx("div", { className: "initial-messages-content", children: D.map(
          ($) => E === $.id ? /* @__PURE__ */ _.jsxs("div", { className: "message-editor", children: [
            /* @__PURE__ */ _.jsx(dn, { value: C, onChange: (ve) => N(ve.target.value), rows: 5 }),
            /* @__PURE__ */ _.jsxs("div", { className: "editor-buttons", children: [
              /* @__PURE__ */ _.jsxs(he, { onClick: ne, children: [
                /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-check" }),
                " Save & Fork"
              ] }),
              /* @__PURE__ */ _.jsxs(he, { onClick: I, children: [
                /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-times" }),
                " Cancel"
              ] })
            ] })
          ] }, $.id) : /* @__PURE__ */ _.jsxs("div", { className: `message-bubble-wrapper initial-context ${$.role}`, children: [
            /* @__PURE__ */ _.jsx("div", { className: `message-bubble ${$.role} initial`, children: /* @__PURE__ */ _.jsx("div", { className: "message-content", children: $.content }) }),
            !m && $.id !== Bd && /* @__PURE__ */ _.jsxs("div", { className: "message-actions", children: [
              /* @__PURE__ */ _.jsxs(
                he,
                {
                  className: "message-action-button",
                  onClick: () => ue($),
                  title: "Edit Context",
                  children: [
                    " ",
                    /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-pencil" }),
                    " "
                  ]
                }
              ),
              /* @__PURE__ */ _.jsxs(
                he,
                {
                  className: "message-action-button danger_button",
                  onClick: () => ce($.id),
                  title: "Delete Context",
                  children: [
                    " ",
                    /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-trash-can" }),
                    " "
                  ]
                }
              )
            ] })
          ] }, $.id)
        ) })
      ] }),
      J.map(
        ($) => E === $.id ? /* @__PURE__ */ _.jsxs("div", { className: "message-editor", children: [
          /* @__PURE__ */ _.jsx(dn, { value: C, onChange: (ve) => N(ve.target.value), rows: 3 }),
          /* @__PURE__ */ _.jsxs("div", { className: "editor-buttons", children: [
            /* @__PURE__ */ _.jsxs(he, { onClick: ne, children: [
              /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-check" }),
              " Save & Fork"
            ] }),
            /* @__PURE__ */ _.jsxs(he, { onClick: I, children: [
              /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-times" }),
              " Cancel"
            ] })
          ] })
        ] }, $.id) : /* @__PURE__ */ _.jsxs("div", { className: `message-bubble-wrapper ${$.role}`, children: [
          /* @__PURE__ */ _.jsxs("div", { className: "message-actions", children: [
            $.role === "user" && !$.stateSnapshot && !m && /* @__PURE__ */ _.jsxs(
              he,
              {
                className: "message-action-button",
                onClick: () => ue($),
                title: "Edit and Fork",
                children: [
                  " ",
                  /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-pencil" }),
                  " "
                ]
              }
            ),
            $.stateSnapshot && !m && /* @__PURE__ */ _.jsxs(
              he,
              {
                className: "message-action-button",
                onClick: () => le($.id),
                title: "Compare changes",
                children: [
                  " ",
                  /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-code-compare" }),
                  " "
                ]
              }
            ),
            !m && /* @__PURE__ */ _.jsxs(
              he,
              {
                className: "message-action-button danger_button",
                onClick: () => ce($.id),
                title: "Delete Message",
                children: [
                  " ",
                  /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-trash-can" }),
                  " "
                ]
              }
            )
          ] }),
          /* @__PURE__ */ _.jsx("div", { className: `message-bubble ${$.role}`, children: /* @__PURE__ */ _.jsx("div", { className: "message-content", children: $.content }) })
        ] }, $.id)
      ),
      J.length > 0 && !m && /* @__PURE__ */ _.jsx("div", { className: "regenerate-button-wrapper", children: /* @__PURE__ */ _.jsxs(he, { onClick: Y, title: "Regenerate response", children: [
        " ",
        /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-rotate-right" }),
        " Regenerate",
        " "
      ] }) }),
      m && /* @__PURE__ */ _.jsxs("div", { className: "message-bubble-wrapper assistant", children: [
        /* @__PURE__ */ _.jsx("div", { className: "message-bubble assistant loading", children: /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) }),
        /* @__PURE__ */ _.jsx(he, { onClick: De, className: "danger_button", title: "Cancel Request", children: /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-stop" }) })
      ] }),
      /* @__PURE__ */ _.jsx("div", { ref: j })
    ] }),
    /* @__PURE__ */ _.jsxs("div", { className: "chat-input-area", children: [
      /* @__PURE__ */ _.jsx(
        dn,
        {
          value: d,
          onChange: ($) => g($.target.value),
          placeholder: "Type your revision instructions...",
          rows: 3,
          disabled: m || !!E,
          onKeyDown: ($) => {
            $.key === "Enter" && !$.shiftKey && ($.preventDefault(), U());
          }
        }
      ),
      /* @__PURE__ */ _.jsxs(he, { onClick: U, disabled: m || !d.trim() || !!E, children: [
        " ",
        /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-paper-plane" }),
        " "
      ] })
    ] }),
    y && /* @__PURE__ */ _.jsx(
      Li,
      {
        type: Nn.DISPLAY,
        content: /* @__PURE__ */ _.jsx(xN, { before: y.before, after: y.after }),
        onComplete: () => b(null),
        options: { wide: !0, large: !0 }
      }
    ),
    h && /* @__PURE__ */ _.jsx(
      Li,
      {
        type: Nn.DISPLAY,
        content: /* @__PURE__ */ _.jsx(EN, { currentState: re, initialState: l }),
        onComplete: () => x(!1),
        options: { wide: !0, large: !0 }
      }
    ),
    w && /* @__PURE__ */ _.jsx(
      Li,
      {
        type: Nn.DISPLAY,
        content: /* @__PURE__ */ _.jsx(
          AN,
          {
            initialState: re,
            onSave: se,
            onClose: () => T(!1)
          }
        ),
        onComplete: () => T(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
};
async function TN(t, r, i, s, l) {
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
        Object.entries(t.fields).filter(([b]) => !b.startsWith("alternate_greetings_")).map(([, b]) => [b.label, b.value])
      ),
      alternate_greetings: Object.fromEntries(
        Object.entries(t.fields).filter(([b]) => b.startsWith("alternate_greetings_")).map(([, b]) => [b.label, b.value])
      ),
      draft: Object.fromEntries(Object.entries(t.draftFields).map(([, b]) => [b.label, b.value]))
    }
  };
  if (s.charCard) {
    const b = [];
    l.selectedCharacterIndexes.forEach((h) => {
      const x = rr.characters[parseInt(h)];
      x && b.push(x);
    }), g.characters = b;
  }
  if (s.worldInfo) {
    const b = {};
    await Promise.all(
      l.selectedWorldNames.map(async (h) => {
        const x = await rr.loadWorldInfo(h);
        x && (b[h] = Object.values(x.entries).filter((w) => !w.disable));
      })
    ), g.lorebooks = b;
  }
  for (const b of f.prompts) {
    if (!b.enabled || b.promptName === "stDescription" && !s.stDescription || b.promptName === "charDefinitions" && !s.charCard || b.promptName === "lorebookDefinitions" && !s.worldInfo || b.promptName === "existingFieldDefinitions" && !s.existingFields || b.promptName === "personaDescription" && !s.persona || b.promptName === "chatHistory" && s.messages.type === "none" || Tn === void 0 && !Cr && b.promptName === "chatHistory") continue;
    if (b.promptName === "chatHistory") {
      p.push({
        id: Bd,
        role: "system",
        content: "[[Chat history placeholder]]",
        isInitial: !0
      });
      continue;
    }
    if (["taskDescription", "existingFieldDefinitions"].includes(b.promptName))
      continue;
    const x = u.prompts[b.promptName];
    if (!x || x.content.includes("{{activeFormatInstructions}}"))
      continue;
    let w = "";
    w = Ft.compile(x.content, { noEscape: !0 })(g), w = rr.substituteParams(w), w.trim() && p.push({
      id: `im-${p.length}`,
      role: b.role,
      content: w.trim(),
      isInitial: !0
    });
  }
  const m = r ? t.fields[r]?.label || t.draftFields[r]?.label : "Global", S = u.prompts.reviseTaskDescription.content, y = Ft.compile(S, { noEscape: !0 })({
    isFieldSession: !!r,
    targetLabel: m
  });
  return p.push({
    id: `im-${p.length}`,
    role: "system",
    content: y,
    isInitial: !0
  }), p;
}
const ru = SillyTavern.getContext(), Jy = "charCreator_reviseSessions", ON = ({
  target: t,
  onClose: r,
  onApply: i,
  initialState: s,
  contextToSend: l,
  sessionForContext: u
}) => {
  const [f, p] = X.useState([]), [d, g] = X.useState(null), [m, S] = X.useState(!0);
  X.useEffect(() => {
    const k = JSON.parse(localStorage.getItem(Jy) || "[]");
    p(k), S(!1);
  }, []);
  const y = X.useMemo(() => f.filter((k) => k.type === t.type && (k.type === "global" || k.targetFieldId === t.fieldId)).sort((k, C) => new Date(C.createdAt).getTime() - new Date(k.createdAt).getTime()), [f, t]), b = (k) => {
    localStorage.setItem(Jy, JSON.stringify(k)), p(k);
  }, h = async () => {
    const k = t.type === "field" ? s.fields[t.fieldId]?.label || s.draftFields[t.fieldId]?.label : "Global", C = await ru.Popup.show.input(
      "New Session Name",
      `Session for ${k} - ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`
    );
    if (C)
      try {
        const N = St.getSettings();
        if (!N.profileId) {
          Oe("warning", "Please select a connection profile in the main popup first.");
          return;
        }
        const j = {
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
        }, R = await TN(
          s,
          j.targetFieldId,
          j.context.mainContextTemplatePreset,
          l,
          u
        );
        j.messages = R, g(j);
      } catch (N) {
        console.error("Failed to create session:", N), Oe("error", `Failed to create session: ${N.message}`);
      }
  }, x = (k) => {
    g(k);
  }, w = async (k) => {
    if (await ru.Popup.show.confirm("Delete Session", "Are you sure? This cannot be undone.")) {
      const N = f.filter((j) => j.id !== k);
      b(N);
    }
  }, T = (k) => {
    const C = f.findIndex((j) => j.id === k.id), N = [...f];
    C !== -1 ? N[C] = k : N.push(k), b(N), g(k);
  };
  if (d) {
    const k = ru.extensionSettings.connectionManager?.profiles?.find(
      (j) => j.id === d.profileId
    ), C = {
      targetCharacterId: Tn,
      ignoreCharacterFields: !0,
      ignoreWorldInfo: !0,
      ignoreAuthorNote: !0,
      includeNames: !!Cr,
      presetName: k?.preset,
      contextName: k?.context,
      instructName: k?.instruct
    }, N = l.messages;
    switch (N.type) {
      case "none":
        C.messageIndexesBetween = { start: -1, end: -1 };
        break;
      case "first":
        C.messageIndexesBetween = { start: 0, end: N.first ?? 10 };
        break;
      case "last":
        const j = ru.chat?.length ?? 0, R = N.last ?? 10;
        C.messageIndexesBetween = {
          end: Math.max(0, j - 1),
          start: Math.max(0, j - R)
        };
        break;
      case "range":
        C.messageIndexesBetween = {
          start: N.range?.start ?? 0,
          end: N.range?.end ?? 10
        };
        break;
    }
    return Tn === void 0 && !Cr && (C.messageIndexesBetween = { start: -1, end: -1 }), /* @__PURE__ */ _.jsx(
      NN,
      {
        session: d,
        onBack: () => g(null),
        onApply: i,
        onSessionUpdate: T,
        initialState: s,
        chatContextOptions: C
      }
    );
  }
  const E = t.type === "field" ? s.fields[t.fieldId]?.label || s.draftFields[t.fieldId]?.label : "Global";
  return /* @__PURE__ */ _.jsxs("div", { className: "revise-session-manager", children: [
    /* @__PURE__ */ _.jsx("div", { className: "popup_header", children: /* @__PURE__ */ _.jsxs("h2", { children: [
      'Revise Sessions for "',
      E,
      '"'
    ] }) }),
    /* @__PURE__ */ _.jsx("div", { className: "session-list", children: m ? /* @__PURE__ */ _.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "Loading sessions..." }) : y.length === 0 ? /* @__PURE__ */ _.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No sessions found. Create a new one to get started." }) : y.map((k) => /* @__PURE__ */ _.jsxs("div", { className: "session-item", children: [
      /* @__PURE__ */ _.jsxs("div", { className: "session-info", onClick: () => x(k), children: [
        /* @__PURE__ */ _.jsx("span", { className: "session-name", children: k.name }),
        /* @__PURE__ */ _.jsx("span", { className: "session-date", children: new Date(k.createdAt).toLocaleString() })
      ] }),
      /* @__PURE__ */ _.jsx(he, { className: "danger_button", onClick: () => w(k.id), children: /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] }, k.id)) }),
    /* @__PURE__ */ _.jsx("div", { className: "session-actions", children: /* @__PURE__ */ _.jsxs(he, { onClick: h, className: "menu_button", children: [
      /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-plus" }),
      " New Session"
    ] }) })
  ] });
}, A1 = SillyTavern.getContext(), kN = `You are an expert character creator for roleplay AI. Based on the user's description, create a complete, detailed character card.

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
\`\`\``, jN = `You are an AI assistant helping to refine a character card. The user wants to make changes to their character.

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

CRITICAL: Return ONLY valid JSON. No markdown code blocks, no explanations outside the JSON.`;
async function MN(t, r, i, s) {
  try {
    const f = (await Promise.resolve().then(() => Qd)).compile(kN)({ userPrompt: t, includeLorebook: r, additionalInstructions: s }), p = await A1.ConnectionManagerRequestService.sendRequest(
      i,
      [{ role: "user", content: f }],
      4096
    );
    if (!p || !p.content)
      throw new Error("No response from AI");
    let d = p.content.trim();
    const g = d.match(/```(?:json)?\s*(\{[\s\S]*\})\s*```/);
    g && (d = g[1]);
    const m = JSON.parse(d), S = ["name", "description", "personality", "scenario", "first_mes", "mes_example"];
    for (const h of S)
      if (!m[h])
        throw new Error(`Missing required field: ${h}`);
    const y = {
      name: m.name,
      description: m.description,
      personality: m.personality,
      scenario: m.scenario,
      first_mes: m.first_mes,
      mes_example: m.mes_example,
      alternate_greetings: m.alternate_greetings || []
    };
    let b;
    return r && m.lorebook && (b = {
      name: m.lorebook.name || `${y.name} Lorebook`,
      description: m.lorebook.description || "",
      scan_depth: m.lorebook.scan_depth || 4,
      token_budget: m.lorebook.token_budget || 2048,
      recursive_scanning: m.lorebook.recursive_scanning ?? !1,
      extensions: m.lorebook.extensions || {},
      entries: m.lorebook.entries || []
    }), { character: y, lorebook: b };
  } catch (l) {
    throw console.error("Error generating character:", l), new Error(`Failed to generate character: ${l.message || String(l)}`);
  }
}
function DN(t, r) {
  const i = {
    ...r,
    fields: { ...r.fields },
    draftFields: { ...r.draftFields }
  };
  fn.forEach((l) => {
    t[l] && (i.fields[l] = {
      value: String(t[l]),
      prompt: "",
      label: $n[l]
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
async function RN({
  messages: t,
  session: r,
  profileId: i,
  maxResponseToken: s = 3072,
  // Increased default
  kbFiles: l = [],
  additionalInstructions: u
}) {
  try {
    const f = await Promise.resolve().then(() => Qd), p = l.filter((C) => C.enabled);
    let d = "";
    p.length > 0 && (d = p.map((C) => `--- FILE: ${C.name} ---
${C.content}
--- END FILE ---`).join(`

`));
    const g = {};
    fn.forEach((C) => {
      r.fields[C]?.value && (g[C] = r.fields[C].value);
    });
    const m = [];
    Object.keys(r.fields).filter((C) => C.startsWith("alternate_greetings_")).sort((C, N) => parseInt(C.split("_")[2]) - parseInt(N.split("_")[2])).forEach((C) => {
      r.fields[C].value && m.push(r.fields[C].value);
    }), g.alternate_greetings = m;
    const S = f.compile(jN), y = t[t.length - 1].content, b = S({
      currentCharacterJson: JSON.stringify(g, null, 2),
      userMessage: y,
      kbContent: d,
      additionalInstructions: u
    }), h = await A1.ConnectionManagerRequestService.sendRequest(
      i,
      [{ role: "user", content: b }],
      s
    );
    if (!h || !h.content)
      throw new Error("No response from AI");
    let x = h.content.trim();
    const w = x.match(/```(?:json)?\s*(\{[\s\S]*?)(?:```|$)/i);
    if (w)
      x = w[1];
    else {
      const C = x.indexOf("{"), N = x.lastIndexOf("}");
      C !== -1 && N !== -1 && N >= C && (x = x.substring(C, N + 1));
    }
    let T;
    try {
      T = JSON.parse(x);
    } catch (C) {
      console.warn("JSON parse failed, returning raw response as fallback:", C);
      let N = h.content.trim();
      return (N.includes("{") || N.includes("```")) && (N = `⚠️ I tried to process your request but my response was too long and got cut off. Here's what I generated:

${N}

💡 **Tip**: Try increasing "Max Response Tokens" in Generation Options (currently set too low).`), { aiMessage: {
        role: "assistant",
        content: N,
        timestamp: Date.now(),
        fieldsUpdated: []
      }, updatedSession: r };
    }
    let E = {
      ...r,
      fields: { ...r.fields },
      draftFields: { ...r.draftFields }
    };
    return T.updatedFields && Object.keys(T.updatedFields).forEach((C) => {
      if (C === "alternate_greetings") {
        Object.keys(E.fields).forEach((j) => {
          j.startsWith("alternate_greetings_") && delete E.fields[j];
        });
        const N = T.updatedFields[C];
        Array.isArray(N) && N.forEach((j, R) => {
          const q = `alternate_greetings_${R + 1}`;
          E.fields[q] = {
            value: String(j),
            prompt: "",
            label: `Alternate Greeting ${R + 1}`
          };
        });
      } else (fn.includes(C) || E.draftFields[C]) && (fn.includes(C) ? E.fields[C] = {
        value: String(T.updatedFields[C]),
        prompt: "",
        label: $n[C]
      } : E.draftFields[C] && (E.draftFields[C] = {
        ...E.draftFields[C],
        value: String(T.updatedFields[C])
      }));
    }), { aiMessage: {
      role: "assistant",
      content: T.response || "I've updated the character as requested.",
      timestamp: Date.now(),
      fieldsUpdated: T.fieldsUpdated || []
    }, updatedSession: E };
  } catch (f) {
    throw console.error("Error in chat message:", f), new Error(`Chat error: ${f.message || String(f)}`);
  }
}
const Qy = (t) => {
  const r = St.getSettings().soundNotifications;
  if (!r?.enabled) return;
  const i = new Audio(`scripts/extensions/third-party/SillyTavern-Character-Creator/templates/${t}.wav`);
  i.volume = r.volume ?? 0.5, i.play().catch((s) => console.error("Failed to play sound:", s));
}, N1 = ({
  session: t,
  onSessionUpdate: r,
  profileId: i,
  maxResponseToken: s,
  kbFiles: l,
  messages: u,
  onMessagesChange: f,
  additionalInstructions: p
}) => {
  const [d, g] = X.useState(""), [m, S] = X.useState(!1), y = X.useRef(null), b = () => {
    y.current?.scrollIntoView({ behavior: "smooth" });
  };
  X.useEffect(() => {
    b();
  }, [u.length]);
  const h = X.useCallback(async () => {
    if (!d.trim() || m) return;
    const E = {
      role: "user",
      content: d.trim(),
      timestamp: Date.now()
    }, k = [...u, E];
    f(k), g(""), S(!0);
    try {
      const { aiMessage: C, updatedSession: N } = await RN({
        messages: k,
        session: t,
        profileId: i,
        maxResponseToken: s,
        kbFiles: l,
        additionalInstructions: p
      });
      f([...k, C]), r(N), Qy("success");
    } catch (C) {
      console.error("Chat error:", C), Oe("error", `Chat error: ${C.message || String(C)}`);
      const N = {
        role: "assistant",
        content: `Error occurred: ${C.message || String(C)}`,
        timestamp: Date.now(),
        isError: !0
      };
      f([...k, N]), Qy("error");
    } finally {
      S(!1);
    }
  }, [d, u, t, i, r, m, f, s, l]), x = X.useCallback((E) => {
    const k = u.filter((C, N) => N !== E);
    f(k);
  }, [u, f]), w = X.useCallback(
    (E) => {
      E.key === "Enter" && !E.shiftKey && (E.preventDefault(), h());
    },
    [h]
  ), T = X.useCallback(async () => {
    await SillyTavern.getContext().Popup.show.confirm(
      "Clear Chat",
      "Are you sure you want to clear the chat history?"
    ) && f([]);
  }, [f]);
  return /* @__PURE__ */ _.jsxs("div", { className: "chat-interface", children: [
    /* @__PURE__ */ _.jsxs("div", { className: "chat-header", style: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 15px", borderBottom: "1px solid rgba(255,255,255,0.05)" }, children: [
      /* @__PURE__ */ _.jsx("h3", { children: "AI Assistant" }),
      /* @__PURE__ */ _.jsx(he, { onClick: T, className: "menu_button secondary small", children: "Clear" })
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
      u.map((E, k) => /* @__PURE__ */ _.jsxs("div", { className: `chat-message ${E.role} ${E.isError ? "error-message" : ""}`, children: [
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
            onClick: () => x(k),
            title: "Delete message",
            children: /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-trash-can" })
          }
        ),
        /* @__PURE__ */ _.jsxs("div", { className: "message-content", children: [
          /* @__PURE__ */ _.jsx("div", { className: "message-text", style: { whiteSpace: "pre-wrap" }, children: E.content }),
          E.fieldsUpdated && E.fieldsUpdated.length > 0 && /* @__PURE__ */ _.jsx("div", { className: "message-updates", children: /* @__PURE__ */ _.jsxs("small", { children: [
            "✏️ Updated: ",
            E.fieldsUpdated.join(", ")
          ] }) })
        ] }),
        /* @__PURE__ */ _.jsx("div", { className: "message-avatar", children: E.role === "user" ? "👤" : "🤖" })
      ] }, k)),
      m && /* @__PURE__ */ _.jsxs("div", { className: "chat-message assistant", children: [
        /* @__PURE__ */ _.jsx("div", { className: "message-content", children: /* @__PURE__ */ _.jsxs("div", { className: "message-text typing", children: [
          /* @__PURE__ */ _.jsx("span", { children: "." }),
          /* @__PURE__ */ _.jsx("span", { children: "." }),
          /* @__PURE__ */ _.jsx("span", { children: "." })
        ] }) }),
        /* @__PURE__ */ _.jsx("div", { className: "message-avatar", children: "🤖" })
      ] }),
      /* @__PURE__ */ _.jsx("div", { ref: y })
    ] }),
    /* @__PURE__ */ _.jsxs("div", { className: "chat-input-area", children: [
      /* @__PURE__ */ _.jsx(
        dn,
        {
          value: d,
          onChange: (E) => g(E.target.value),
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
          onClick: h,
          disabled: !d.trim() || m,
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
            cursor: !d.trim() || m ? "not-allowed" : "pointer",
            opacity: !d.trim() || m ? 0.7 : 1
          },
          children: /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-paper-plane", style: { color: "white" } })
        }
      )
    ] })
  ] });
}, zN = () => ({
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
}), LN = ({
  lorebook: t,
  onLorebookChange: r,
  isGenerating: i,
  onGenerateEntry: s
}) => {
  const [l, u] = X.useState(null);
  X.useEffect(() => {
    t.entries.length > 0 ? (!l || !t.entries.find((y) => y.id === l)) && u(t.entries[0].id) : u(null);
  }, [t.entries, l]);
  const f = X.useCallback(() => {
    const y = zN();
    r({
      ...t,
      entries: [...t.entries, y]
    }), u(y.id);
  }, [t, r]), p = X.useCallback(
    async (y) => {
      const b = SillyTavern.getContext(), h = t.entries.find((w) => w.id === y);
      if (await b.Popup.show.confirm(
        "Delete Entry",
        `Delete "${h?.comment || "Untitled Entry"}"?`
      )) {
        const w = t.entries.filter((T) => T.id !== y);
        r({ ...t, entries: w }), l === y && u(w.length > 0 ? w[0].id : null);
      }
    },
    [t, r, l]
  ), d = X.useCallback(
    (y, b, h) => {
      const x = t.entries.map(
        (w) => w.id === y ? { ...w, [b]: h } : w
      );
      r({ ...t, entries: x });
    },
    [t, r]
  ), g = X.useCallback(
    (y, b, h = !1) => {
      const x = b.split(",").map((w) => w.trim()).filter((w) => w.length > 0);
      d(y, h ? "secondary_keys" : "keys", x);
    },
    [d]
  ), m = X.useCallback(
    (y, b) => {
      r({ ...t, [y]: b });
    },
    [t, r]
  ), S = t.entries.find((y) => y.id === l);
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
              onChange: (y) => m("name", y.target.value),
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
              onChange: (y) => m("scan_depth", y.target.value === "" ? 0 : parseInt(y.target.value)),
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
              onChange: (y) => m("token_budget", y.target.value === "" ? 0 : parseInt(y.target.value)),
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
              onChange: (y) => m("recursive_scanning", y.target.checked)
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
          /* @__PURE__ */ _.jsx(he, { onClick: f, className: "menu_button small", children: /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-plus" }) })
        ] }),
        /* @__PURE__ */ _.jsx("div", { className: "entries-list", children: t.entries.length === 0 ? /* @__PURE__ */ _.jsxs("div", { className: "empty-state", children: [
          /* @__PURE__ */ _.jsx("p", { children: "No entries yet" }),
          /* @__PURE__ */ _.jsxs(he, { onClick: f, children: [
            /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-plus" }),
            " Add Entry"
          ] })
        ] }) : t.entries.map((y, b) => /* @__PURE__ */ _.jsxs(
          "div",
          {
            className: `entry-item ${l === y.id ? "active" : ""} ${y.enabled ? "" : "disabled"}`,
            onClick: () => u(y.id),
            children: [
              /* @__PURE__ */ _.jsxs("div", { className: "entry-item-header", children: [
                /* @__PURE__ */ _.jsxs("span", { className: "entry-index", children: [
                  "#",
                  b + 1
                ] }),
                /* @__PURE__ */ _.jsx("span", { className: "entry-title", children: y.comment || y.keys.join(", ") || "Untitled" }),
                y.constant && /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-thumbtack", title: "Always Active" })
              ] }),
              /* @__PURE__ */ _.jsxs("div", { className: "entry-keys-preview", children: [
                y.keys.slice(0, 3).join(", "),
                y.keys.length > 3 && ` +${y.keys.length - 3}`
              ] })
            ]
          },
          y.id
        )) })
      ] }),
      /* @__PURE__ */ _.jsx("div", { className: "entry-editor", children: S ? /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
        /* @__PURE__ */ _.jsxs("div", { className: "entry-editor-header", children: [
          /* @__PURE__ */ _.jsx("h4", { children: S.comment || "Edit Entry" }),
          /* @__PURE__ */ _.jsxs("div", { className: "entry-actions", children: [
            s && /* @__PURE__ */ _.jsx(
              he,
              {
                onClick: () => s(S.id),
                disabled: i === S.id,
                className: "menu_button small",
                title: "Generate with AI",
                children: i === S.id ? /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" })
              }
            ),
            /* @__PURE__ */ _.jsx(
              he,
              {
                onClick: () => p(S.id),
                className: "menu_button small danger",
                title: "Delete Entry",
                children: /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-trash" })
              }
            ),
            /* @__PURE__ */ _.jsx("div", { style: { marginLeft: "10px", minWidth: "80px" }, children: /* @__PURE__ */ _.jsx(IN, { content: S.content }) })
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
                onChange: (y) => d(S.id, "comment", y.target.value),
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
                onChange: (y) => g(S.id, y.target.value),
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
                onChange: (y) => g(S.id, y.target.value, !0),
                placeholder: "filter1, filter2"
              }
            )
          ] }),
          /* @__PURE__ */ _.jsxs("label", { children: [
            "Content",
            /* @__PURE__ */ _.jsx(
              dn,
              {
                value: S.content,
                onChange: (y) => d(S.id, "content", y.target.value),
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
                  onChange: (y) => d(S.id, "enabled", y.target.checked)
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
                  onChange: (y) => d(S.id, "constant", y.target.checked)
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
                  onChange: (y) => d(S.id, "selective", y.target.checked)
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
                  onChange: (y) => d(
                    S.id,
                    "insertion_order",
                    y.target.value === "" ? 0 : parseInt(y.target.value)
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
                  onChange: (y) => d(
                    S.id,
                    "position",
                    y.target.value
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
        /* @__PURE__ */ _.jsxs(he, { onClick: f, children: [
          /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-plus" }),
          " Create Entry"
        ] })
      ] }) })
    ] })
  ] });
}, IN = ({ content: t }) => {
  const { tokens: r, isCalculating: i } = Kd(t);
  return /* @__PURE__ */ _.jsx("div", { className: "token-counter", style: {
    fontSize: "var(--font-size-small, 0.8em)",
    opacity: 0.5,
    fontFamily: "var(--font-family-mono, monospace)",
    whiteSpace: "nowrap"
  }, children: i ? /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ _.jsx(_.Fragment, { children: r !== null ? `${r} tokens` : "" }) });
}, Ky = () => ({
  name: "New Lorebook",
  description: "",
  scan_depth: 4,
  token_budget: 2048,
  recursive_scanning: !1,
  entries: []
}), PN = SillyTavern.getContext(), Wy = (t) => {
  const r = St.getSettings().soundNotifications;
  if (!r?.enabled) return;
  const i = new Audio(`scripts/extensions/third-party/SillyTavern-Character-Creator/templates/${t}.wav`);
  i.volume = r.volume ?? 0.5, i.play().catch((s) => console.error("Failed to play sound:", s));
}, BN = `You are an AI assistant specialized in creating World Info / Lorebook entries for roleplay AI systems.

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
Focus ONLY on creating Lorebook entries. Do NOT modify any character data.`, UN = ({
  lorebook: t,
  onLorebookChange: r,
  profileId: i,
  maxResponseToken: s = 3072,
  kbFiles: l = [],
  messages: u,
  onMessagesChange: f,
  additionalInstructions: p
}) => {
  const [d, g] = X.useState(""), [m, S] = X.useState(!1), y = X.useRef(null), b = () => {
    y.current?.scrollIntoView({ behavior: "smooth" });
  };
  X.useEffect(() => {
    b();
  }, [u.length]);
  const h = X.useCallback(async () => {
    if (!d.trim() || m) return;
    const E = {
      role: "user",
      content: d.trim(),
      timestamp: Date.now()
    }, k = [...u, E];
    f(k), g(""), S(!0);
    try {
      const C = await Promise.resolve().then(() => Qd), N = l.filter((ue) => ue.enabled);
      let j = "";
      N.length > 0 && (j = N.map((ue) => `--- FILE: ${ue.name} ---
${ue.content}
--- END FILE ---`).join(`

`));
      const R = t.entries.length > 0 ? JSON.stringify(t.entries.map((ue) => ({
        comment: ue.comment,
        keys: ue.keys,
        content: ue.content.substring(0, 200) + (ue.content.length > 200 ? "..." : ""),
        constant: ue.constant,
        enabled: ue.enabled
      })), null, 2) : "[]", V = C.compile(BN)({
        lorebookName: t.name,
        currentEntriesJson: R,
        userMessage: d.trim(),
        kbContent: j,
        additionalInstructions: p
      }), U = await PN.ConnectionManagerRequestService.sendRequest(
        i,
        [{ role: "user", content: V }],
        s
      );
      if (!U || !U.content)
        throw new Error("No response from AI");
      let Y = U.content.trim();
      const G = Y.match(/```(?:json)?\s*(\{[\s\S]*?)(?:```|$)/i);
      if (G)
        Y = G[1];
      else {
        const ue = Y.indexOf("{"), I = Y.lastIndexOf("}");
        ue !== -1 && I !== -1 && I >= ue && (Y = Y.substring(ue, I + 1));
      }
      let le;
      try {
        le = JSON.parse(Y);
      } catch (ue) {
        console.warn("JSON parse failed for lorebook chat:", ue);
        const I = {
          role: "assistant",
          content: `⚠️ I tried to generate entries but my response was malformed. Here's the raw output:

${U.content}

💡 Try increasing "Max Response Tokens" or simplifying your request.`,
          timestamp: Date.now(),
          entriesUpdated: [],
          isError: !0
        };
        f([...k, I]), S(!1);
        return;
      }
      if (le.newEntries && Array.isArray(le.newEntries) && le.newEntries.length > 0) {
        const ue = le.newEntries.map((I, ne) => ({
          id: `entry_${Date.now()}_${ne}_${Math.random().toString(36).substr(2, 9)}`,
          keys: Array.isArray(I.keys) ? I.keys : (I.keys || "").split(",").map((ce) => ce.trim()),
          secondary_keys: [],
          content: I.content || "",
          comment: I.comment || `Entry ${t.entries.length + ne + 1}`,
          enabled: I.enabled ?? !0,
          constant: I.constant ?? !1,
          selective: !1,
          insertion_order: t.entries.length + ne,
          position: "before_char"
        }));
        r({
          ...t,
          entries: [...t.entries, ...ue]
        });
      }
      const fe = {
        role: "assistant",
        content: le.response || "I've updated the lorebook as requested.",
        timestamp: Date.now(),
        entriesUpdated: le.entriesUpdated || []
      };
      f([...k, fe]), Wy("success");
    } catch (C) {
      console.error("Lorebook chat error:", C);
      const N = {
        role: "assistant",
        content: `Error occurred: ${C.message || String(C)}`,
        timestamp: Date.now(),
        isError: !0
      };
      f([...k, N]), Wy("error");
    } finally {
      S(!1);
    }
  }, [d, m, t, r, i, s, l, u, f]), x = X.useCallback((E) => {
    const k = u.filter((C, N) => N !== E);
    f(k);
  }, [u, f]), w = X.useCallback(async () => {
    await SillyTavern.getContext().Popup.show.confirm(
      "Clear Chat",
      "Are you sure you want to clear the chat history?"
    ) && f([]);
  }, [f]), T = (E) => {
    E.key === "Enter" && !E.shiftKey && (E.preventDefault(), h());
  };
  return /* @__PURE__ */ _.jsxs("div", { className: "chat-interface", children: [
    /* @__PURE__ */ _.jsxs("div", { className: "chat-header", style: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 15px", borderBottom: "1px solid rgba(255,255,255,0.05)" }, children: [
      /* @__PURE__ */ _.jsx("h3", { children: "Lorebook Assistant" }),
      /* @__PURE__ */ _.jsx(he, { onClick: w, className: "menu_button secondary small", children: "Clear" })
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
      u.map((E, k) => /* @__PURE__ */ _.jsxs("div", { className: `chat-message ${E.role} ${E.isError ? "error-message" : ""}`, children: [
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
            onClick: () => x(k),
            title: "Delete message",
            children: /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-trash-can" })
          }
        ),
        /* @__PURE__ */ _.jsxs("div", { className: "message-content", children: [
          /* @__PURE__ */ _.jsx("div", { className: "message-text", style: { whiteSpace: "pre-wrap" }, children: E.content }),
          E.entriesUpdated && E.entriesUpdated.length > 0 && /* @__PURE__ */ _.jsxs("div", { className: "entries-updated", children: [
            "✏️ Entries: ",
            E.entriesUpdated.join(", ")
          ] })
        ] }),
        /* @__PURE__ */ _.jsx("span", { className: "message-icon", children: E.role === "user" ? "👤" : "🤖" })
      ] }, k)),
      m && /* @__PURE__ */ _.jsxs("div", { className: "chat-message assistant loading", children: [
        /* @__PURE__ */ _.jsxs("div", { className: "message-content", children: [
          /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-spinner fa-spin" }),
          " Creating entries..."
        ] }),
        /* @__PURE__ */ _.jsx("span", { className: "message-icon", children: "🤖" })
      ] }),
      /* @__PURE__ */ _.jsx("div", { ref: y })
    ] }),
    /* @__PURE__ */ _.jsxs("div", { className: "chat-input-area", children: [
      /* @__PURE__ */ _.jsx(
        dn,
        {
          value: d,
          onChange: (E) => g(E.target.value),
          onKeyDown: T,
          placeholder: "Describe entries to create... (Enter to send, Shift+Enter for new line)",
          rows: 2,
          disabled: m,
          style: { flex: 1 }
        }
      ),
      /* @__PURE__ */ _.jsx(
        "button",
        {
          onClick: h,
          disabled: m || !d.trim(),
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
            cursor: m || !d.trim() ? "not-allowed" : "pointer",
            opacity: m || !d.trim() ? 0.7 : 1
          },
          children: /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-paper-plane", style: { color: "white" } })
        }
      )
    ] })
  ] });
}, HN = SillyTavern.getContext(), qN = [
  { id: 13, name: "Gemma" },
  { id: 12, name: "Llama 3" },
  { id: 3, name: "Llama 2" },
  { id: 7, name: "Mistral" },
  { id: 2, name: "OpenAI (GPT-4)" },
  { id: 11, name: "Claude" }
], e0 = ({ files: t, onFilesChange: r }) => {
  const i = X.useRef(null), [s, l] = X.useState(St.getSettings().preferredTokenizer || 13), [u, f] = X.useState(!1), [p, d] = X.useState(""), g = (E) => {
    const k = Array.from(E.target.files || []);
    if (k.length === 0) return;
    const C = [];
    let N = 0;
    k.forEach((j) => {
      const R = new FileReader();
      R.onload = (q) => {
        const V = q.target?.result;
        V.indexOf("\0") !== -1 ? console.warn(`File ${j.name} appears to be binary, skipping.`) : C.push({
          id: `kb_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          name: j.name,
          content: V,
          enabled: !0,
          size: j.size
        }), N++, N === k.length && (r([...t, ...C]), i.current && (i.current.value = ""));
      }, R.readAsText(j);
    });
  }, m = (E) => {
    r(t.map((k) => k.id === E ? { ...k, enabled: !k.enabled } : k));
  }, S = (E) => {
    r(t.filter((k) => k.id !== E));
  }, y = async () => {
    await HN.Popup.show.confirm(
      "Clear Knowledge Base",
      `Are you sure you want to remove all ${t.length} files from the knowledge base?`
    ) && r([]);
  }, b = async (E) => {
    if (!(u || E.length === 0)) {
      f(!0);
      try {
        const C = {
          13: "/api/tokenizers/gemma/encode",
          12: "/api/tokenizers/llama3/encode",
          3: "/api/tokenizers/llama/encode",
          7: "/api/tokenizers/mistral/encode",
          2: "/api/tokenizers/openai/encode",
          11: "/api/tokenizers/claude/encode"
        }[s], N = [...t], j = 15;
        for (let R = 0; R < N.length; R += j) {
          const q = [];
          for (let V = R; V < Math.min(R + j, N.length); V++)
            N[V].tokens === void 0 && q.push(V);
          q.length !== 0 && await Promise.all(q.map(async (V) => {
            try {
              const U = N[V], G = await (await fetch(C, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text: U.content })
              })).json();
              G && G.ids && Array.isArray(G.ids) ? N[V] = { ...U, tokens: G.ids.length } : Array.isArray(G) ? N[V] = { ...U, tokens: G.length } : typeof G.token_count == "number" ? N[V] = { ...U, tokens: G.token_count } : N[V] = { ...U, tokens: Math.ceil(U.content.length / 3.35) };
            } catch (U) {
              console.error("Token count failed:", U), N[V] = { ...N[V], tokens: Math.ceil(N[V].content.length / 3.35) };
            }
          }));
        }
        r(N);
      } finally {
        f(!1);
      }
    }
  };
  X.useEffect(() => {
    const E = t.filter((k) => k.tokens === void 0);
    E.length > 0 && !u && b(E);
  }, [t, s]);
  const h = (E) => {
    const k = Number(E.target.value);
    l(k);
    const C = St.getSettings();
    C.preferredTokenizer = k, St.saveSettings(), r(t.map((N) => ({ ...N, tokens: void 0 })));
  }, x = t.filter(
    (E) => E.name.toLowerCase().includes(p.toLowerCase())
  ), w = t.filter((E) => E.enabled).reduce((E, k) => E + (k.tokens || 0), 0), T = t.reduce((E, k) => E + (k.tokens || 0), 0);
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
            onChange: h,
            className: "text_pole",
            style: { padding: "4px 8px", fontSize: "0.8em", width: "auto" },
            title: "Select tokenizer for counting",
            children: qN.map((E) => /* @__PURE__ */ _.jsx("option", { value: E.id, children: E.name }, E.id))
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
        t.length > 0 && /* @__PURE__ */ _.jsxs(he, { onClick: y, className: "menu_button small danger_button", children: [
          /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-trash-can" }),
          " Clear"
        ] }),
        /* @__PURE__ */ _.jsxs(he, { onClick: () => i.current?.click(), className: "menu_button small", children: [
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
          onChange: (E) => d(E.target.value),
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
    /* @__PURE__ */ _.jsx("div", { className: "kb-files-list", style: { maxHeight: "200px", overflowY: "auto", paddingRight: "4px" }, children: t.length === 0 ? /* @__PURE__ */ _.jsx("div", { style: { opacity: 0.6, fontSize: "0.9em", textAlign: "center", padding: "10px" }, children: "No files attached. Upload context files here." }) : x.length === 0 ? /* @__PURE__ */ _.jsxs("div", { style: { opacity: 0.4, fontSize: "0.9em", textAlign: "center", padding: "20px" }, children: [
      'No files matching "',
      p,
      '"'
    ] }) : x.map((E) => /* @__PURE__ */ _.jsxs("div", { className: "kb-file-item", style: {
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
            checked: E.enabled,
            onChange: () => m(E.id),
            style: { margin: 0 }
          }
        ),
        /* @__PURE__ */ _.jsx("span", { title: E.name, style: {
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          fontSize: "0.9em",
          fontWeight: 500
        }, children: E.name }),
        /* @__PURE__ */ _.jsxs("div", { style: { display: "flex", gap: "4px", fontSize: "0.75em", opacity: 0.6, whiteSpace: "nowrap" }, children: [
          /* @__PURE__ */ _.jsxs("span", { children: [
            "(",
            Math.round(E.size / 1024),
            "KB)"
          ] }),
          E.tokens !== void 0 ? /* @__PURE__ */ _.jsxs("span", { style: { color: "#818cf8" }, children: [
            "• ",
            E.tokens,
            " tokens"
          ] }) : /* @__PURE__ */ _.jsx("span", { style: { opacity: 0.4 }, children: "• ..." })
        ] })
      ] }),
      /* @__PURE__ */ _.jsx(
        "div",
        {
          onClick: () => S(E.id),
          style: { cursor: "pointer", opacity: 0.6, padding: "2px 6px" },
          title: "Remove file",
          children: /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-times" })
        }
      )
    ] }, E.id)) }),
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
          /* @__PURE__ */ _.jsx("strong", { children: x.length }),
          " / ",
          t.length
        ] }) : /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
          "Active: ",
          /* @__PURE__ */ _.jsx("strong", { children: t.filter((E) => E.enabled).length }),
          " / ",
          t.length,
          " files"
        ] }) }),
        T > 0 && /* @__PURE__ */ _.jsxs("div", { style: { fontSize: "0.8em", opacity: 0.5 }, children: [
          "Total Base: ",
          T.toLocaleString(),
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
        /* @__PURE__ */ _.jsx("span", { style: { fontSize: "1.4em", fontWeight: "800", fontFamily: "monospace" }, children: w.toLocaleString() })
      ] })
    ] })
  ] });
}, FN = ({
  session: t,
  onSessionUpdate: r,
  profileId: i,
  additionalInstructions: s,
  messages: l,
  onMessagesChange: u
}) => /* @__PURE__ */ _.jsx("div", { className: "autonomous-mode chat-only", children: /* @__PURE__ */ _.jsx("div", { className: "autonomous-content", children: /* @__PURE__ */ _.jsx("div", { className: "autonomous-chat-full", children: /* @__PURE__ */ _.jsx(
  N1,
  {
    session: t,
    onSessionUpdate: r,
    profileId: i,
    messages: l,
    onMessagesChange: u,
    additionalInstructions: s
  }
) }) }) });
function ZN(t, r) {
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
function GN(t, r) {
  try {
    const i = ZN(t, r), s = JSON.stringify(i, null, 2), l = new Blob([s], { type: "application/json" }), u = URL.createObjectURL(l), f = document.createElement("a");
    f.href = u, f.download = `${t.name.replace(/[^a-z0-9]/gi, "_").toLowerCase()}_v3.json`, document.body.appendChild(f), f.click(), document.body.removeChild(f), URL.revokeObjectURL(u), Oe("success", `Character exported as JSON: ${f.download}`);
  } catch (i) {
    console.error("Error exporting character:", i), Oe("error", `Failed to export character: ${i.message || String(i)}`);
  }
}
function VN(t, r) {
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
    t.entries.forEach((d, g) => {
      i.entries[String(g)] = {
        uid: g,
        key: d.keys || [],
        keysecondary: d.secondary_keys || [],
        comment: d.comment || `Entry ${g + 1}`,
        content: d.content || "",
        constant: d.constant ?? !1,
        selective: d.selective ?? !1,
        insertion_order: d.insertion_order ?? g,
        enabled: d.enabled ?? !0,
        position: d.position === "after_char" ? 1 : 0,
        extensions: d.extensions || {}
      };
    });
    const s = JSON.stringify(i, null, 2), l = new Blob([s], { type: "application/json" }), u = URL.createObjectURL(l), f = document.createElement("a");
    f.href = u;
    const p = (t.name || r).replace(/[^a-z0-9]/gi, "_").toLowerCase();
    f.download = `${p}_lorebook.json`, document.body.appendChild(f), f.click(), document.body.removeChild(f), URL.revokeObjectURL(u), Oe("success", `Lorebook exported as JSON: ${f.download}`);
  } catch (i) {
    console.error("Error exporting lorebook:", i), Oe("error", `Failed to export lorebook: ${i.message || String(i)}`);
  }
}
Ft.helpers.join || Ft.registerHelper("join", function(t, r) {
  return Array.isArray(t) ? t.join(typeof r == "string" ? r : ", ") : "";
});
Ft.helpers.is_not_empty || Ft.registerHelper("is_not_empty", function(t, r) {
  return t ? Array.isArray(t) ? t.length > 0 ? r.fn(this) : r.inverse(this) : typeof t == "object" && Object.keys(t).length > 0 ? r.fn(this) : typeof t != "object" && !Array.isArray(t) ? r.fn(this) : r.inverse(this) : r.inverse(this);
});
const Pn = SillyTavern.getContext(), Xt = "charCreator", vd = () => ({
  selectedCharacterIndexes: Tn ? [String(Tn)] : [],
  selectedWorldNames: [],
  fields: fn.reduce(
    (t, r) => (t[r] = { value: "", prompt: "", label: $n[r] }, t),
    {}
  ),
  draftFields: {},
  lastLoadedCharacterId: ""
}), YN = {
  name: { label: $n.name, rows: 1, large: !1, promptEnabled: !1 },
  description: { label: $n.description, rows: 5, large: !0, promptEnabled: !0 },
  personality: { label: $n.personality, rows: 4, large: !0, promptEnabled: !0 },
  scenario: { label: $n.scenario, rows: 3, large: !0, promptEnabled: !0 },
  first_mes: { label: $n.first_mes, rows: 3, large: !0, promptEnabled: !0 },
  mes_example: { label: $n.mes_example, rows: 6, large: !0, promptEnabled: !0 }
}, XN = () => {
  const t = X0(), r = St.getSettings(), [i, s] = X.useState(vd()), [l, u] = X.useState([]), [f, p] = X.useState(!0), [d, g] = X.useState("core"), [m, S] = X.useState("character"), [y, b] = X.useState(Ky()), [h, x] = X.useState([]), [w, T] = X.useState(!1), [E, k] = X.useState([]), [C, N] = X.useState([]), [j, R] = X.useState([]), [q, V] = X.useState([]), [U, Y] = X.useState([]), [G, le] = X.useState(null), [fe, ue] = X.useState(null);
  X.useEffect(() => {
    const P = document.getElementById("charCreatorPopup");
    P && P.parentElement && P.parentElement.scrollTo({ top: 0, behavior: "auto" });
  }, [m]);
  const [I, ne] = X.useState(!1), [ce, je] = X.useState(null);
  X.useEffect(() => {
    (async () => {
      p(!0), V(Pn.characters), Y($g);
      const ae = JSON.parse(localStorage.getItem(Xt) ?? "{}"), te = vd();
      if (ae.fields && (te.fields = { ...te.fields, ...ae.fields }), ae.draftFields && (te.draftFields = ae.draftFields), ae.selectedCharacterIndexes && (te.selectedCharacterIndexes = ae.selectedCharacterIndexes), ae.selectedWorldNames && (te.selectedWorldNames = ae.selectedWorldNames), ae.lastLoadedCharacterId) {
        te.lastLoadedCharacterId = ae.lastLoadedCharacterId;
        const qe = Pn.characters.find((st) => st.avatar === ae.lastLoadedCharacterId);
        qe && le(qe);
      }
      s(te);
      const be = localStorage.getItem(`${Xt}_kb`);
      if (be)
        try {
          x(JSON.parse(be));
        } catch (qe) {
          console.error("Failed to load KB files", qe);
        }
      const Be = localStorage.getItem(`${Xt}_lorebook`);
      if (Be)
        try {
          b(JSON.parse(Be));
        } catch (qe) {
          console.error("Failed to load lorebook", qe);
        }
      const Re = localStorage.getItem(`${Xt}_char_msg`);
      Re && k(JSON.parse(Re));
      const pt = localStorage.getItem(`${Xt}_lore_msg`);
      pt && N(JSON.parse(pt));
      const mn = localStorage.getItem(`${Xt}_auto_msg`);
      mn && R(JSON.parse(mn));
      const $t = localStorage.getItem(`${Xt}_active_tab`);
      $t && g($t);
      const Jt = localStorage.getItem(`${Xt}_creator_mode`);
      Jt && S(Jt), p(!1);
    })();
  }, []), X.useEffect(() => {
    f || (localStorage.setItem(Xt, JSON.stringify(i)), localStorage.setItem(`${Xt}_kb`, JSON.stringify(h)), localStorage.setItem(`${Xt}_lorebook`, JSON.stringify(y)), localStorage.setItem(`${Xt}_char_msg`, JSON.stringify(E)), localStorage.setItem(`${Xt}_lore_msg`, JSON.stringify(C)), localStorage.setItem(`${Xt}_auto_msg`, JSON.stringify(j)), localStorage.setItem(`${Xt}_active_tab`, d), localStorage.setItem(`${Xt}_creator_mode`, m));
  }, [i, h, y, E, C, j, d, m, f]);
  const D = (P, ae) => {
    St.getSettings()[P] = ae, St.saveSettings(), t();
  }, J = (P, ae) => {
    St.getSettings().contextToSend[P] = ae, St.saveSettings(), t();
  }, re = X.useCallback(
    (P, ae, te, be) => {
      s((Be) => {
        const Re = be ? "draftFields" : "fields", pt = { ...Be[Re] };
        return pt[P] || (pt[P] = { value: "", prompt: "", label: P }), pt[P][te] = ae, { ...Be, [Re]: pt };
      });
    },
    []
  ), ie = X.useMemo(
    () => Object.keys(i.fields).filter((P) => P.startsWith("alternate_greetings_")).sort((P, ae) => parseInt(P.split("_")[2]) - parseInt(ae.split("_")[2])).map((P) => i.fields[P]),
    [i.fields]
  ), se = X.useCallback((P) => {
    s((ae) => {
      const te = { ...ae.fields };
      return Object.keys(te).forEach((be) => {
        be.startsWith("alternate_greetings_") && delete te[be];
      }), P.forEach((be, Be) => {
        const Re = `alternate_greetings_${Be + 1}`;
        te[Re] = { ...be, label: `Alternate Greeting ${Be + 1}` };
      }), { ...ae, fields: te };
    });
  }, []), De = async (P, ae) => {
    if (!r.profileId) return Oe("warning", "Please select a connection profile.");
    T(!0);
    try {
      const { character: te, lorebook: be } = await MN(
        P,
        ae,
        r.profileId,
        r.promptPresets[r.promptPreset]?.content
      ), Be = DN(te, i);
      s(Be), be && b(be), Oe("success", "Character generated successfully!");
    } catch (te) {
      console.error(te), Oe("error", te.message || String(te));
    } finally {
      T(!1);
    }
  }, $ = X.useCallback(
    (P, ae) => {
      re(P, "", "value", ae);
    },
    [re]
  ), ve = X.useCallback(
    async (P) => {
      await Pn.Popup.show.confirm(
        "Delete Draft Field",
        `Are you sure you want to delete "${i.draftFields[P].label}"?`
      ) && s((te) => {
        const be = { ...te.draftFields };
        return delete be[P], { ...te, draftFields: be };
      });
    },
    [i.draftFields]
  ), ye = X.useCallback(async () => {
    const P = await Pn.Popup.show.input("Enter Draft Field Name", "");
    if (!P?.trim()) return;
    const ae = IE(P.trim());
    if (!ae) return Oe("error", "Invalid field name.");
    if (i.draftFields[ae] || fn.includes(ae))
      return Oe("warning", "Field name already exists.");
    s((te) => ({
      ...te,
      draftFields: { ...te.draftFields, [ae]: { value: "", prompt: "", label: P } }
    })), g("draft");
  }, [i.draftFields]), Xe = (P) => {
    je({ type: "field", fieldId: P }), ne(!0);
  }, ct = () => {
    je({ type: "global" }), ne(!0);
  }, ke = (P) => {
    s((ae) => ({
      ...ae,
      fields: { ...ae.fields, ...P.fields },
      draftFields: { ...ae.draftFields, ...P.draftFields }
    })), Oe("success", "Changes from revise session applied."), ne(!1);
  }, at = X.useCallback(
    async (P, ae) => {
      if (!r.profileId) return Oe("warning", "Please select a connection profile.");
      u((te) => [...te, P]);
      try {
        const te = Pn.extensionSettings.connectionManager?.profiles?.find(
          (qe) => qe.id === r.profileId
        );
        if (!te) throw new Error("Connection profile not found.");
        const be = {
          presetName: te?.preset,
          contextName: te?.context,
          instructName: te?.instruct,
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
          $g.filter((qe) => !Re[qe]).map(async (qe) => {
            const st = await Pn.loadWorldInfo(qe);
            st && (Re[qe] = Object.values(st.entries));
          })
        );
        const pt = structuredClone(r.prompts);
        r.contextToSend.stDescription || delete pt.stDescription, (!r.contextToSend.charCard || i.selectedCharacterIndexes.length === 0) && delete pt.charDefinitions, (!r.contextToSend.worldInfo || i.selectedWorldNames.length === 0) && delete pt.lorebookDefinitions, r.contextToSend.existingFields || delete pt.existingFieldDefinitions, r.contextToSend.persona || delete pt.personaDescription, delete pt.worldInfoCharDefinition;
        const mn = await DE({
          profileId: r.profileId,
          userPrompt: r.promptPresets[r.promptPreset].content,
          buildPromptOptions: be,
          continueFrom: ae,
          session: i,
          allCharacters: q,
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
        }), $t = P.startsWith("alternate_greetings_"), Jt = !$t && !fn.includes(P);
        if ($t) {
          const qe = parseInt(P.split("_")[2]) - 1, st = [...ie];
          st[qe] && (st[qe].value = mn), se(st);
        } else
          re(P, mn, "value", Jt);
      } catch (te) {
        console.error(te), Oe("error", te.message || String(te));
      } finally {
        u((te) => te.filter((be) => be !== P));
      }
    },
    [i, r, q, ie, re, se]
  ), qn = X.useCallback(async () => {
    await Pn.Popup.show.confirm("Reset Fields", "This will clear all fields. Are you sure?") && (s(vd()), le(null));
  }, []), kt = X.useCallback(
    (P) => {
      if (!G) return Oe("warning", "Please load a character to compare against.");
      let ae, te, be;
      typeof P == "number" ? (ae = ie[P]?.value ?? "", te = G.data?.alternate_greetings?.[P] ?? "", be = `Alternate Greeting ${P + 1}`) : (ae = i.fields[P]?.value ?? "", te = G[P] ?? G.data?.[P] ?? "", be = $n[P]), ue({ original: te, current: ae, fieldName: be });
    },
    [G, i.fields, ie]
  ), en = X.useCallback(
    async (P) => {
      const ae = q[parseInt(P)];
      if (!ae || fn.some((Re) => i.fields[Re].value.trim() !== "") && !await Pn.Popup.show.confirm("Load Character", "Overwrite current fields?"))
        return;
      const be = { ...i.fields };
      fn.forEach((Re) => {
        be[Re] = { value: ae[Re] ?? ae.data?.[Re] ?? "", prompt: "", label: $n[Re] };
      });
      const Be = (ae.data?.alternate_greetings ?? []).map((Re) => ({ value: Re, prompt: "" }));
      le(ae), s((Re) => ({ ...Re, fields: be, lastLoadedCharacterId: ae.avatar })), se(Be);
    },
    [q, i.fields, se]
  ), Ze = () => ie.map((P) => P.value).filter((P) => P.trim() !== ""), $e = async () => {
    if (!i.fields.name.value) return Oe("warning", "Please provide a character name.");
    if (!await Pn.Popup.show.confirm("Save as New Character", "Are you sure?")) return;
    const ae = {
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
      await _2(ae, !0);
    } catch (te) {
      Oe("error", `Failed to create character: ${te.message}`);
    }
  }, Ve = async () => {
    if (!G) return Oe("warning", "Please load a character to override.");
    if (!await Pn.Popup.show.confirm(
      "Override Character",
      `Override "${G.name}"? This cannot be undone.`
    )) return;
    const ae = {
      ...G,
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
      await S2(ae, !0), Oe("success", `Character "${ae.name}" updated!`);
    } catch (te) {
      Oe("error", `Failed to override character: ${te.message}`);
    }
  }, We = () => {
    const P = JSON.stringify({ draftFields: i.draftFields, version: V0 }, null, 2), ae = new Blob([P], { type: "application/json" }), te = document.createElement("a");
    te.href = URL.createObjectURL(ae), te.download = `crec-draft-fields-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`, te.click(), URL.revokeObjectURL(te.href);
  }, me = () => {
    const P = document.createElement("input");
    P.type = "file", P.accept = ".json", P.onchange = async () => {
      const ae = P.files?.[0];
      if (ae)
        try {
          const te = await ae.text(), be = JSON.parse(te);
          if (!be.draftFields) throw new Error("Invalid file format.");
          (Object.keys(i.draftFields).length > 0 ? await Pn.Popup.show.confirm(
            "Import Drafts",
            "This will replace current draft fields. Continue?"
          ) : !0) && (s((Re) => ({ ...Re, draftFields: be.draftFields })), Oe("success", "Draft fields imported."));
        } catch (te) {
          Oe("error", `Import failed: ${te.message}`);
        }
    }, P.click();
  }, pe = X.useMemo(
    () => q.map((P, ae) => ({ value: String(ae), label: P.name })),
    [q]
  ), Ge = X.useMemo(
    () => U.map((P) => ({ value: P, label: P })),
    [U]
  ), He = X.useMemo(
    () => Object.keys(r.promptPresets).map((P) => ({ value: P, label: P })),
    [r.promptPresets]
  ), it = X.useMemo(
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
            Y0,
            {
              initialSelectedProfileId: r.profileId,
              onChange: (P) => D("profileId", P?.id ?? "")
            }
          )
        ] }),
        /* @__PURE__ */ _.jsx(e0, { files: h, onFilesChange: x }),
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
              dd,
              {
                items: pe,
                value: i.selectedCharacterIndexes,
                onChange: (P) => s((ae) => ({ ...ae, selectedCharacterIndexes: P })),
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
              dd,
              {
                items: Ge,
                value: i.selectedWorldNames,
                onChange: (P) => s((ae) => ({ ...ae, selectedWorldNames: P })),
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
              _y,
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
            _y,
            {
              label: "Prompt Preset",
              items: He,
              value: r.promptPreset,
              onChange: (P) => D("promptPreset", P ?? "default"),
              onItemsChange: (P) => D(
                "promptPresets",
                P.reduce(
                  (ae, te) => ({ ...ae, [te.value]: r.promptPresets[te.value] ?? { content: "" } }),
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
            dn,
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
              he,
              {
                onClick: ct,
                title: "Open global revision sessions to edit multiple fields at once",
                children: /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-comments" })
              }
            ),
            /* @__PURE__ */ _.jsxs(he, { onClick: qn, title: "Reset all fields", children: [
              /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-rotate-left" }),
              " Reset"
            ] }),
            /* @__PURE__ */ _.jsx("div", { style: { width: "200px" }, title: "Load Character Data", children: /* @__PURE__ */ _.jsx(
              dd,
              {
                items: pe,
                value: G ? [String(q.indexOf(G))] : [],
                onChange: (P) => en(P[0]),
                multiple: !1,
                enableSearch: !0,
                placeholder: "Load Character..."
              }
            ) }),
            /* @__PURE__ */ _.jsx(he, { onClick: me, children: "Import JSON" })
          ] })
        ] }),
        /* @__PURE__ */ _.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ _.jsxs("div", { className: "tab-buttons", children: [
            /* @__PURE__ */ _.jsx(
              he,
              {
                onClick: () => g("core"),
                className: `menu_button tab-button ${d === "core" ? "active" : ""}`,
                children: "Core Fields"
              }
            ),
            /* @__PURE__ */ _.jsx(
              he,
              {
                onClick: () => g("draft"),
                className: `menu_button tab-button ${d === "draft" ? "active" : ""}`,
                children: "Draft Fields"
              }
            ),
            /* @__PURE__ */ _.jsx("div", { className: "right-aligned", children: d === "draft" && /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
              /* @__PURE__ */ _.jsxs(he, { onClick: ye, children: [
                /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-plus" }),
                " Add"
              ] }),
              /* @__PURE__ */ _.jsx(he, { onClick: We, children: "Export" }),
              /* @__PURE__ */ _.jsx(he, { onClick: me, children: "Import" })
            ] }) })
          ] }),
          /* @__PURE__ */ _.jsxs("div", { className: "tab-content-area", children: [
            /* @__PURE__ */ _.jsxs("div", { className: `tab-content ${d === "core" ? "active" : ""}`, children: [
              fn.map((P) => {
                const ae = YN[P];
                return ae ? /* @__PURE__ */ _.jsx(
                  xy,
                  {
                    fieldId: P,
                    label: ae.label,
                    value: i.fields[P]?.value ?? "",
                    prompt: i.fields[P]?.prompt ?? "",
                    large: ae.large,
                    rows: ae.rows,
                    promptEnabled: ae.promptEnabled,
                    isGenerating: l.includes(P),
                    onValueChange: (te, be) => re(te, be, "value", !1),
                    onPromptChange: (te, be) => re(te, be, "prompt", !1),
                    onGenerate: at,
                    onContinue: (te) => at(te, i.fields[te].value),
                    onClear: (te) => $(te, !1),
                    onCompare: kt,
                    onOpenReviseSessions: Xe
                  },
                  P
                ) : null;
              }),
              /* @__PURE__ */ _.jsx(
                ZE,
                {
                  greetings: ie,
                  onGreetingsChange: se,
                  isGenerating: l.some((P) => P.startsWith("alternate_greetings_")),
                  onGenerate: (P) => at(`alternate_greetings_${P + 1}`),
                  onContinue: (P) => at(`alternate_greetings_${P + 1}`, ie[P].value),
                  onCompare: kt
                }
              )
            ] }),
            /* @__PURE__ */ _.jsx("div", { className: `tab-content ${d === "draft" ? "active" : ""}`, children: Object.entries(i.draftFields).map(([P, ae]) => /* @__PURE__ */ _.jsx(
              xy,
              {
                fieldId: P,
                label: ae.label,
                value: ae.value,
                prompt: ae.prompt,
                isDraft: !0,
                rows: 5,
                isGenerating: l.includes(P),
                onValueChange: (te, be) => re(te, be, "value", !0),
                onPromptChange: (te, be) => re(te, be, "prompt", !0),
                onGenerate: at,
                onContinue: (te) => at(te, i.draftFields[te].value),
                onClear: (te) => $(te, !0),
                onDelete: ve
              },
              P
            )) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ _.jsx("div", { className: "column-right", children: /* @__PURE__ */ _.jsx(
        N1,
        {
          session: i,
          onSessionUpdate: s,
          profileId: r.profileId,
          maxResponseToken: r.maxResponseToken,
          kbFiles: h,
          messages: E,
          onMessagesChange: k,
          additionalInstructions: r.promptPresets[r.promptPreset]?.content
        }
      ) })
    ] }),
    m === "lorebook" && /* @__PURE__ */ _.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ _.jsxs("div", { className: "column-left", style: { width: "60%", display: "flex", flexDirection: "column", gap: "15px" }, children: [
        /* @__PURE__ */ _.jsx(e0, { files: h, onFilesChange: x }),
        /* @__PURE__ */ _.jsx(
          LN,
          {
            lorebook: y,
            onLorebookChange: b
          }
        )
      ] }),
      /* @__PURE__ */ _.jsx("div", { className: "column-right", style: { width: "40%" }, children: /* @__PURE__ */ _.jsx(
        UN,
        {
          lorebook: y,
          onLorebookChange: b,
          profileId: r.profileId,
          maxResponseToken: r.maxResponseToken,
          kbFiles: h,
          messages: C,
          onMessagesChange: N,
          additionalInstructions: r.promptPresets[r.promptPreset]?.content
        }
      ) })
    ] }),
    m === "autonomous" && /* @__PURE__ */ _.jsx(
      FN,
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
    m === "settings" && /* @__PURE__ */ _.jsx("div", { className: "container", children: /* @__PURE__ */ _.jsx("div", { className: "card", style: { width: "100%", padding: "20px" }, children: /* @__PURE__ */ _.jsx($0, {}) }) }),
    /* @__PURE__ */ _.jsxs("div", { className: "card export-panel", style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ _.jsx("h3", { children: "Save & Export" }),
      /* @__PURE__ */ _.jsxs("div", { className: "button-group", style: { display: "flex", gap: "10px", flexWrap: "wrap" }, children: [
        m === "character" && /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
          /* @__PURE__ */ _.jsx(he, { onClick: $e, className: "menu_button confirm", children: "Create in SillyTavern" }),
          /* @__PURE__ */ _.jsx(he, { onClick: Ve, className: "menu_button warning", disabled: !G, children: "Update Loaded Character" }),
          /* @__PURE__ */ _.jsx("div", { style: { flexGrow: 1 } }),
          /* @__PURE__ */ _.jsx(
            he,
            {
              onClick: () => {
                const P = {
                  name: i.fields.name.value,
                  description: i.fields.description.value,
                  personality: i.fields.personality.value,
                  scenario: i.fields.scenario.value,
                  first_mes: i.fields.first_mes.value,
                  mes_example: i.fields.mes_example.value,
                  alternate_greetings: ie.map((ae) => ae.value)
                };
                GN(P);
              },
              children: "Export JSON (V3)"
            }
          )
        ] }),
        m === "lorebook" && /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
          /* @__PURE__ */ _.jsxs(
            he,
            {
              onClick: () => VN(
                {
                  entries: y.entries.map((P, ae) => ({
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
                  name: y.name,
                  description: y.description,
                  scan_depth: y.scan_depth,
                  token_budget: y.token_budget,
                  recursive_scanning: y.recursive_scanning,
                  extensions: {}
                },
                y.name
              ),
              className: "menu_button confirm",
              children: [
                /* @__PURE__ */ _.jsx("i", { className: "fa-solid fa-download" }),
                " Export Lorebook JSON"
              ]
            }
          ),
          /* @__PURE__ */ _.jsxs(
            he,
            {
              onClick: () => b(Ky()),
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
    fe && /* @__PURE__ */ _.jsx(
      Li,
      {
        type: Nn.DISPLAY,
        content: /* @__PURE__ */ _.jsx(
          lw,
          {
            originalContent: fe.original,
            newContent: fe.current,
            fieldName: fe.fieldName
          }
        ),
        onComplete: () => ue(null),
        options: { wide: !0 }
      }
    ),
    I && ce && /* @__PURE__ */ _.jsx(
      Li,
      {
        type: Nn.DISPLAY,
        content: /* @__PURE__ */ _.jsx(
          ON,
          {
            target: ce,
            onClose: () => ne(!1),
            onApply: ke,
            initialState: { fields: i.fields, draftFields: i.draftFields },
            contextToSend: r.contextToSend,
            sessionForContext: {
              selectedCharacterIndexes: i.selectedCharacterIndexes,
              selectedWorldNames: i.selectedWorldNames
            }
          }
        ),
        onComplete: () => ne(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
}, $N = () => {
  const [t, r] = X.useState(!1), i = () => r(!0), s = () => r(!1);
  return window.openCharacterCreatorPopup = i, t ? /* @__PURE__ */ _.jsx(
    Li,
    {
      content: /* @__PURE__ */ _.jsx(XN, {}),
      type: Nn.DISPLAY,
      onComplete: s,
      options: {
        large: !0,
        wide: !0
      }
    }
  ) : null;
}, T1 = SillyTavern.getContext();
async function JN() {
  const t = await T1.renderExtensionTemplateAsync(
    `third-party/${Ma}`,
    "templates/settings"
  );
  document.querySelector("#extensions_settings").insertAdjacentHTML("beforeend", t);
  const r = document.createElement("div"), i = document.querySelector(".charCreator_settings .inline-drawer-content");
  i && (i.prepend(r), uv.createRoot(r).render(
    /* @__PURE__ */ _.jsx(cu.StrictMode, { children: /* @__PURE__ */ _.jsx($0, {}) })
  ));
  const s = '<div class="menu_button fa-solid fa-user-astronaut interactable charCreator-icon" title="Character Creator"></div>', l = [
    document.querySelector(".form_create_bottom_buttons_block"),
    document.querySelector("#GroupFavDelOkBack"),
    document.querySelector("#rm_buttons_container") ?? document.querySelector("#form_character_search_form")
  ], u = document.createElement("div");
  document.body.appendChild(u), uv.createRoot(u).render(
    /* @__PURE__ */ _.jsx(cu.StrictMode, { children: /* @__PURE__ */ _.jsx($N, {}) })
  ), l.forEach((p) => {
    if (!p) return;
    const d = document.createElement("div");
    d.innerHTML = s.trim();
    const g = d.firstChild;
    g && (p.prepend(g), g.addEventListener("click", () => {
      window.openCharacterCreatorPopup && window.openCharacterCreatorPopup();
    }));
  });
}
function QN() {
  return !!T1.ConnectionManagerRequestService;
}
QN() ? PE().then(() => {
  JN();
}) : Oe("error", `[${Ma}] Make sure ST is updated.`);
export {
  JN as init
};
