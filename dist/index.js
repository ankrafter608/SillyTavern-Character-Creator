import { renderStoryString as q_, persona_description_positions as Wg } from "../../../../power-user.js";
import { parseMesExamples as F_, baseChatReplace as Z_, chat_metadata as zs, getMaxContextSize as G_, name1 as wr, name2 as Wr, this_chid as Tn, extension_prompt_types as Ca, depth_prompt_role_default as V_, depth_prompt_depth_default as Y_ } from "../../../../../script.js";
import { world_info_include_names as X_, wi_anchor_position as $_, world_names as ev } from "../../../../world-info.js";
import "../../../../slash-commands.js";
import "../../../../personas.js";
import { formatInstructModeExamples as J_, formatInstructModeSystemPrompt as Q_ } from "../../../../instruct-mode.js";
import { appendFileContent as K_ } from "../../../../chats.js";
import { setOpenAIMessages as W_, setOpenAIMessageExamples as e2, formatWorldInfo as t2, getPromptPosition as n2, getPromptRole as r2, prepareOpenAIMessages as a2 } from "../../../../openai.js";
import { metadata_keys as Ls } from "../../../../authors-note.js";
import { getGroupDepthPrompts as i2, selected_group as Cr } from "../../../../group-chats.js";
import { getRegexedString as s2, regex_placement as tv } from "../../../regex/engine.js";
import { removeFromArray as nv, runAfterAnimation as o2 } from "../../../../utils.js";
import "../../../../slash-commands/SlashCommandCommonEnumsProvider.js";
import "../../../../slash-commands/SlashCommandEnumValue.js";
import { Popup as Ci, fixToastrForDialogs as Ff } from "../../../../popup.js";
import rv from "../../../../../lib/dialog-polyfill.esm.js";
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
function Vd(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Zf = { exports: {} }, Is = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var av;
function u2() {
  if (av) return Is;
  av = 1;
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
var iv;
function c2() {
  return iv || (iv = 1, Zf.exports = u2()), Zf.exports;
}
var S = c2(), Gf = { exports: {} }, Oe = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sv;
function f2() {
  if (sv) return Oe;
  sv = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), f = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), v = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), _ = Symbol.iterator;
  function m(R) {
    return R === null || typeof R != "object" ? null : (R = _ && R[_] || R["@@iterator"], typeof R == "function" ? R : null);
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
  }, h = Object.assign, x = {};
  function C(R, J, re) {
    this.props = R, this.context = J, this.refs = x, this.updater = re || y;
  }
  C.prototype.isReactComponent = {}, C.prototype.setState = function(R, J) {
    if (typeof R != "object" && typeof R != "function" && R != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, R, J, "setState");
  }, C.prototype.forceUpdate = function(R) {
    this.updater.enqueueForceUpdate(this, R, "forceUpdate");
  };
  function T() {
  }
  T.prototype = C.prototype;
  function w(R, J, re) {
    this.props = R, this.context = J, this.refs = x, this.updater = re || y;
  }
  var k = w.prototype = new T();
  k.constructor = w, h(k, C.prototype), k.isPureReactComponent = !0;
  var E = Array.isArray, N = { H: null, A: null, T: null, S: null, V: null }, M = Object.prototype.hasOwnProperty;
  function j(R, J, re, ie, se, De) {
    return re = De.ref, {
      $$typeof: t,
      type: R,
      key: J,
      ref: re !== void 0 ? re : null,
      props: De
    };
  }
  function U(R, J) {
    return j(
      R.type,
      J,
      void 0,
      void 0,
      void 0,
      R.props
    );
  }
  function G(R) {
    return typeof R == "object" && R !== null && R.$$typeof === t;
  }
  function P(R) {
    var J = { "=": "=0", ":": "=2" };
    return "$" + R.replace(/[=:]/g, function(re) {
      return J[re];
    });
  }
  var Y = /\/+/g;
  function V(R, J) {
    return typeof R == "object" && R !== null && R.key != null ? P("" + R.key) : J.toString(36);
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
          function(J) {
            R.status === "pending" && (R.status = "fulfilled", R.value = J);
          },
          function(J) {
            R.status === "pending" && (R.status = "rejected", R.reason = J);
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
  function ue(R, J, re, ie, se) {
    var De = typeof R;
    (De === "undefined" || De === "boolean") && (R = null);
    var $ = !1;
    if (R === null) $ = !0;
    else
      switch (De) {
        case "bigint":
        case "string":
        case "number":
          $ = !0;
          break;
        case "object":
          switch (R.$$typeof) {
            case t:
            case r:
              $ = !0;
              break;
            case g:
              return $ = R._init, ue(
                $(R._payload),
                J,
                re,
                ie,
                se
              );
          }
      }
    if ($)
      return se = se(R), $ = ie === "" ? "." + V(R, 0) : ie, E(se) ? (re = "", $ != null && (re = $.replace(Y, "$&/") + "/"), ue(se, J, re, "", function(Xe) {
        return Xe;
      })) : se != null && (G(se) && (se = U(
        se,
        re + (se.key == null || R && R.key === se.key ? "" : ("" + se.key).replace(
          Y,
          "$&/"
        ) + "/") + $
      )), J.push(se)), 1;
    $ = 0;
    var ve = ie === "" ? "." : ie + ":";
    if (E(R))
      for (var ye = 0; ye < R.length; ye++)
        ie = R[ye], De = ve + V(ie, ye), $ += ue(
          ie,
          J,
          re,
          De,
          se
        );
    else if (ye = m(R), typeof ye == "function")
      for (R = ye.call(R), ye = 0; !(ie = R.next()).done; )
        ie = ie.value, De = ve + V(ie, ye++), $ += ue(
          ie,
          J,
          re,
          De,
          se
        );
    else if (De === "object") {
      if (typeof R.then == "function")
        return ue(
          fe(R),
          J,
          re,
          ie,
          se
        );
      throw J = String(R), Error(
        "Objects are not valid as a React child (found: " + (J === "[object Object]" ? "object with keys {" + Object.keys(R).join(", ") + "}" : J) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return $;
  }
  function I(R, J, re) {
    if (R == null) return R;
    var ie = [], se = 0;
    return ue(R, ie, "", "", function(De) {
      return J.call(re, De, se++);
    }), ie;
  }
  function ne(R) {
    if (R._status === -1) {
      var J = R._result;
      J = J(), J.then(
        function(re) {
          (R._status === 0 || R._status === -1) && (R._status = 1, R._result = re);
        },
        function(re) {
          (R._status === 0 || R._status === -1) && (R._status = 2, R._result = re);
        }
      ), R._status === -1 && (R._status = 0, R._result = J);
    }
    if (R._status === 1) return R._result.default;
    throw R._result;
  }
  var ce = typeof reportError == "function" ? reportError : function(R) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var J = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof R == "object" && R !== null && typeof R.message == "string" ? String(R.message) : String(R),
        error: R
      });
      if (!window.dispatchEvent(J)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", R);
      return;
    }
    console.error(R);
  };
  function Me() {
  }
  return Oe.Children = {
    map: I,
    forEach: function(R, J, re) {
      I(
        R,
        function() {
          J.apply(this, arguments);
        },
        re
      );
    },
    count: function(R) {
      var J = 0;
      return I(R, function() {
        J++;
      }), J;
    },
    toArray: function(R) {
      return I(R, function(J) {
        return J;
      }) || [];
    },
    only: function(R) {
      if (!G(R))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return R;
    }
  }, Oe.Component = C, Oe.Fragment = i, Oe.Profiler = l, Oe.PureComponent = w, Oe.StrictMode = s, Oe.Suspense = d, Oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = N, Oe.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(R) {
      return N.H.useMemoCache(R);
    }
  }, Oe.cache = function(R) {
    return function() {
      return R.apply(null, arguments);
    };
  }, Oe.cloneElement = function(R, J, re) {
    if (R == null)
      throw Error(
        "The argument must be a React element, but you passed " + R + "."
      );
    var ie = h({}, R.props), se = R.key, De = void 0;
    if (J != null)
      for ($ in J.ref !== void 0 && (De = void 0), J.key !== void 0 && (se = "" + J.key), J)
        !M.call(J, $) || $ === "key" || $ === "__self" || $ === "__source" || $ === "ref" && J.ref === void 0 || (ie[$] = J[$]);
    var $ = arguments.length - 2;
    if ($ === 1) ie.children = re;
    else if (1 < $) {
      for (var ve = Array($), ye = 0; ye < $; ye++)
        ve[ye] = arguments[ye + 2];
      ie.children = ve;
    }
    return j(R.type, se, void 0, void 0, De, ie);
  }, Oe.createContext = function(R) {
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
  }, Oe.createElement = function(R, J, re) {
    var ie, se = {}, De = null;
    if (J != null)
      for (ie in J.key !== void 0 && (De = "" + J.key), J)
        M.call(J, ie) && ie !== "key" && ie !== "__self" && ie !== "__source" && (se[ie] = J[ie]);
    var $ = arguments.length - 2;
    if ($ === 1) se.children = re;
    else if (1 < $) {
      for (var ve = Array($), ye = 0; ye < $; ye++)
        ve[ye] = arguments[ye + 2];
      se.children = ve;
    }
    if (R && R.defaultProps)
      for (ie in $ = R.defaultProps, $)
        se[ie] === void 0 && (se[ie] = $[ie]);
    return j(R, De, void 0, void 0, null, se);
  }, Oe.createRef = function() {
    return { current: null };
  }, Oe.forwardRef = function(R) {
    return { $$typeof: p, render: R };
  }, Oe.isValidElement = G, Oe.lazy = function(R) {
    return {
      $$typeof: g,
      _payload: { _status: -1, _result: R },
      _init: ne
    };
  }, Oe.memo = function(R, J) {
    return {
      $$typeof: v,
      type: R,
      compare: J === void 0 ? null : J
    };
  }, Oe.startTransition = function(R) {
    var J = N.T, re = {};
    N.T = re;
    try {
      var ie = R(), se = N.S;
      se !== null && se(re, ie), typeof ie == "object" && ie !== null && typeof ie.then == "function" && ie.then(Me, ce);
    } catch (De) {
      ce(De);
    } finally {
      N.T = J;
    }
  }, Oe.unstable_useCacheRefresh = function() {
    return N.H.useCacheRefresh();
  }, Oe.use = function(R) {
    return N.H.use(R);
  }, Oe.useActionState = function(R, J, re) {
    return N.H.useActionState(R, J, re);
  }, Oe.useCallback = function(R, J) {
    return N.H.useCallback(R, J);
  }, Oe.useContext = function(R) {
    return N.H.useContext(R);
  }, Oe.useDebugValue = function() {
  }, Oe.useDeferredValue = function(R, J) {
    return N.H.useDeferredValue(R, J);
  }, Oe.useEffect = function(R, J, re) {
    var ie = N.H;
    if (typeof re == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return ie.useEffect(R, J);
  }, Oe.useId = function() {
    return N.H.useId();
  }, Oe.useImperativeHandle = function(R, J, re) {
    return N.H.useImperativeHandle(R, J, re);
  }, Oe.useInsertionEffect = function(R, J) {
    return N.H.useInsertionEffect(R, J);
  }, Oe.useLayoutEffect = function(R, J) {
    return N.H.useLayoutEffect(R, J);
  }, Oe.useMemo = function(R, J) {
    return N.H.useMemo(R, J);
  }, Oe.useOptimistic = function(R, J) {
    return N.H.useOptimistic(R, J);
  }, Oe.useReducer = function(R, J, re) {
    return N.H.useReducer(R, J, re);
  }, Oe.useRef = function(R) {
    return N.H.useRef(R);
  }, Oe.useState = function(R) {
    return N.H.useState(R);
  }, Oe.useSyncExternalStore = function(R, J, re) {
    return N.H.useSyncExternalStore(
      R,
      J,
      re
    );
  }, Oe.useTransition = function() {
    return N.H.useTransition();
  }, Oe.version = "19.1.1", Oe;
}
var ov;
function Yd() {
  return ov || (ov = 1, Gf.exports = f2()), Gf.exports;
}
var X = Yd();
const fu = /* @__PURE__ */ Vd(X);
var Vf = { exports: {} }, Ps = {}, Yf = { exports: {} }, Xf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lv;
function d2() {
  return lv || (lv = 1, (function(t) {
    function r(I, ne) {
      var ce = I.length;
      I.push(ne);
      e: for (; 0 < ce; ) {
        var Me = ce - 1 >>> 1, R = I[Me];
        if (0 < l(R, ne))
          I[Me] = ne, I[ce] = R, ce = Me;
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
        e: for (var Me = 0, R = I.length, J = R >>> 1; Me < J; ) {
          var re = 2 * (Me + 1) - 1, ie = I[re], se = re + 1, De = I[se];
          if (0 > l(ie, ce))
            se < R && 0 > l(De, ie) ? (I[Me] = De, I[se] = ce, Me = se) : (I[Me] = ie, I[re] = ce, Me = re);
          else if (se < R && 0 > l(De, ce))
            I[Me] = De, I[se] = ce, Me = se;
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
    var d = [], v = [], g = 1, _ = null, m = 3, y = !1, h = !1, x = !1, C = !1, T = typeof setTimeout == "function" ? setTimeout : null, w = typeof clearTimeout == "function" ? clearTimeout : null, k = typeof setImmediate < "u" ? setImmediate : null;
    function E(I) {
      for (var ne = i(v); ne !== null; ) {
        if (ne.callback === null) s(v);
        else if (ne.startTime <= I)
          s(v), ne.sortIndex = ne.expirationTime, r(d, ne);
        else break;
        ne = i(v);
      }
    }
    function N(I) {
      if (x = !1, E(I), !h)
        if (i(d) !== null)
          h = !0, M || (M = !0, V());
        else {
          var ne = i(v);
          ne !== null && ue(N, ne.startTime - I);
        }
    }
    var M = !1, j = -1, U = 5, G = -1;
    function P() {
      return C ? !0 : !(t.unstable_now() - G < U);
    }
    function Y() {
      if (C = !1, M) {
        var I = t.unstable_now();
        G = I;
        var ne = !0;
        try {
          e: {
            h = !1, x && (x = !1, w(j), j = -1), y = !0;
            var ce = m;
            try {
              t: {
                for (E(I), _ = i(d); _ !== null && !(_.expirationTime > I && P()); ) {
                  var Me = _.callback;
                  if (typeof Me == "function") {
                    _.callback = null, m = _.priorityLevel;
                    var R = Me(
                      _.expirationTime <= I
                    );
                    if (I = t.unstable_now(), typeof R == "function") {
                      _.callback = R, E(I), ne = !0;
                      break t;
                    }
                    _ === i(d) && s(d), E(I);
                  } else s(d);
                  _ = i(d);
                }
                if (_ !== null) ne = !0;
                else {
                  var J = i(v);
                  J !== null && ue(
                    N,
                    J.startTime - I
                  ), ne = !1;
                }
              }
              break e;
            } finally {
              _ = null, m = ce, y = !1;
            }
            ne = void 0;
          }
        } finally {
          ne ? V() : M = !1;
        }
      }
    }
    var V;
    if (typeof k == "function")
      V = function() {
        k(Y);
      };
    else if (typeof MessageChannel < "u") {
      var le = new MessageChannel(), fe = le.port2;
      le.port1.onmessage = Y, V = function() {
        fe.postMessage(null);
      };
    } else
      V = function() {
        T(Y, 0);
      };
    function ue(I, ne) {
      j = T(function() {
        I(t.unstable_now());
      }, ne);
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(I) {
      I.callback = null;
    }, t.unstable_forceFrameRate = function(I) {
      0 > I || 125 < I ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : U = 0 < I ? Math.floor(1e3 / I) : 5;
    }, t.unstable_getCurrentPriorityLevel = function() {
      return m;
    }, t.unstable_next = function(I) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var ne = 3;
          break;
        default:
          ne = m;
      }
      var ce = m;
      m = ne;
      try {
        return I();
      } finally {
        m = ce;
      }
    }, t.unstable_requestPaint = function() {
      C = !0;
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
      var ce = m;
      m = I;
      try {
        return ne();
      } finally {
        m = ce;
      }
    }, t.unstable_scheduleCallback = function(I, ne, ce) {
      var Me = t.unstable_now();
      switch (typeof ce == "object" && ce !== null ? (ce = ce.delay, ce = typeof ce == "number" && 0 < ce ? Me + ce : Me) : ce = Me, I) {
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
      return R = ce + R, I = {
        id: g++,
        callback: ne,
        priorityLevel: I,
        startTime: ce,
        expirationTime: R,
        sortIndex: -1
      }, ce > Me ? (I.sortIndex = ce, r(v, I), i(d) === null && I === i(v) && (x ? (w(j), j = -1) : x = !0, ue(N, ce - Me))) : (I.sortIndex = R, r(d, I), h || y || (h = !0, M || (M = !0, V()))), I;
    }, t.unstable_shouldYield = P, t.unstable_wrapCallback = function(I) {
      var ne = m;
      return function() {
        var ce = m;
        m = ne;
        try {
          return I.apply(this, arguments);
        } finally {
          m = ce;
        }
      };
    };
  })(Xf)), Xf;
}
var uv;
function h2() {
  return uv || (uv = 1, Yf.exports = d2()), Yf.exports;
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
var cv;
function p2() {
  if (cv) return Vt;
  cv = 1;
  var t = Yd();
  function r(d) {
    var v = "https://react.dev/errors/" + d;
    if (1 < arguments.length) {
      v += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        v += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return "Minified React error #" + d + "; visit " + v + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  function u(d, v, g) {
    var _ = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: l,
      key: _ == null ? null : "" + _,
      children: d,
      containerInfo: v,
      implementation: g
    };
  }
  var f = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(d, v) {
    if (d === "font") return "";
    if (typeof v == "string")
      return v === "use-credentials" ? v : "";
  }
  return Vt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, Vt.createPortal = function(d, v) {
    var g = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11)
      throw Error(r(299));
    return u(d, v, null, g);
  }, Vt.flushSync = function(d) {
    var v = f.T, g = s.p;
    try {
      if (f.T = null, s.p = 2, d) return d();
    } finally {
      f.T = v, s.p = g, s.d.f();
    }
  }, Vt.preconnect = function(d, v) {
    typeof d == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, s.d.C(d, v));
  }, Vt.prefetchDNS = function(d) {
    typeof d == "string" && s.d.D(d);
  }, Vt.preinit = function(d, v) {
    if (typeof d == "string" && v && typeof v.as == "string") {
      var g = v.as, _ = p(g, v.crossOrigin), m = typeof v.integrity == "string" ? v.integrity : void 0, y = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
      g === "style" ? s.d.S(
        d,
        typeof v.precedence == "string" ? v.precedence : void 0,
        {
          crossOrigin: _,
          integrity: m,
          fetchPriority: y
        }
      ) : g === "script" && s.d.X(d, {
        crossOrigin: _,
        integrity: m,
        fetchPriority: y,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0
      });
    }
  }, Vt.preinitModule = function(d, v) {
    if (typeof d == "string")
      if (typeof v == "object" && v !== null) {
        if (v.as == null || v.as === "script") {
          var g = p(
            v.as,
            v.crossOrigin
          );
          s.d.M(d, {
            crossOrigin: g,
            integrity: typeof v.integrity == "string" ? v.integrity : void 0,
            nonce: typeof v.nonce == "string" ? v.nonce : void 0
          });
        }
      } else v == null && s.d.M(d);
  }, Vt.preload = function(d, v) {
    if (typeof d == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
      var g = v.as, _ = p(g, v.crossOrigin);
      s.d.L(d, g, {
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
  }, Vt.preloadModule = function(d, v) {
    if (typeof d == "string")
      if (v) {
        var g = p(v.as, v.crossOrigin);
        s.d.m(d, {
          as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
          crossOrigin: g,
          integrity: typeof v.integrity == "string" ? v.integrity : void 0
        });
      } else s.d.m(d);
  }, Vt.requestFormReset = function(d) {
    s.d.r(d);
  }, Vt.unstable_batchedUpdates = function(d, v) {
    return d(v);
  }, Vt.useFormState = function(d, v, g) {
    return f.H.useFormState(d, v, g);
  }, Vt.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, Vt.version = "19.1.1", Vt;
}
var fv;
function r0() {
  if (fv) return $f.exports;
  fv = 1;
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
var dv;
function m2() {
  if (dv) return Ps;
  dv = 1;
  var t = h2(), r = Yd(), i = r0();
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
        for (var A = !1, O = c.child; O; ) {
          if (O === a) {
            A = !0, a = c, o = b;
            break;
          }
          if (O === o) {
            A = !0, o = c, a = b;
            break;
          }
          O = O.sibling;
        }
        if (!A) {
          for (O = b.child; O; ) {
            if (O === a) {
              A = !0, a = b, o = c;
              break;
            }
            if (O === o) {
              A = !0, o = b, a = c;
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
  function v(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e;
    for (e = e.child; e !== null; ) {
      if (n = v(e), n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var g = Object.assign, _ = Symbol.for("react.element"), m = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), w = Symbol.for("react.consumer"), k = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), U = Symbol.for("react.lazy"), G = Symbol.for("react.activity"), P = Symbol.for("react.memo_cache_sentinel"), Y = Symbol.iterator;
  function V(e) {
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
      case C:
        return "Profiler";
      case x:
        return "StrictMode";
      case N:
        return "Suspense";
      case M:
        return "SuspenseList";
      case G:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case y:
          return "Portal";
        case k:
          return (e.displayName || "Context") + ".Provider";
        case w:
          return (e._context.displayName || "Context") + ".Consumer";
        case E:
          var n = e.render;
          return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case j:
          return n = e.displayName || null, n !== null ? n : fe(e.type) || "Memo";
        case U:
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
  }, Me = [], R = -1;
  function J(e) {
    return { current: e };
  }
  function re(e) {
    0 > R || (e.current = Me[R], Me[R] = null, R--);
  }
  function ie(e, n) {
    R++, Me[R] = e.current, e.current = n;
  }
  var se = J(null), De = J(null), $ = J(null), ve = J(null);
  function ye(e, n) {
    switch (ie($, n), ie(De, e), ie(se, null), n.nodeType) {
      case 9:
      case 11:
        e = (e = n.documentElement) && (e = e.namespaceURI) ? Ng(e) : 0;
        break;
      default:
        if (e = n.tagName, n = n.namespaceURI)
          n = Ng(n), e = Tg(n, e);
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
    var n = se.current, a = Tg(n, e.type);
    n !== a && (ie(De, e), ie(se, a));
  }
  function ke(e) {
    De.current === e && (re(se), re(De)), ve.current === e && (re(ve), ks._currentValue = ce);
  }
  var it = Object.prototype.hasOwnProperty, qn = t.unstable_scheduleCallback, kt = t.unstable_cancelCallback, tn = t.unstable_shouldYield, Ze = t.unstable_requestPaint, $e = t.unstable_now, Ve = t.unstable_getCurrentPriorityLevel, We = t.unstable_ImmediatePriority, me = t.unstable_UserBlockingPriority, pe = t.unstable_NormalPriority, Ge = t.unstable_LowPriority, He = t.unstable_IdlePriority, st = t.log, B = t.unstable_setDisableYieldValue, ae = null, te = null;
  function be(e) {
    if (typeof st == "function" && B(e), te && typeof te.setStrictMode == "function")
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
  function ot(e, n, a) {
    var o = e.pendingLanes;
    if (o === 0) return 0;
    var c = 0, b = e.suspendedLanes, A = e.pingedLanes;
    e = e.warmLanes;
    var O = o & 134217727;
    return O !== 0 ? (o = O & ~b, o !== 0 ? c = qe(o) : (A &= O, A !== 0 ? c = qe(A) : a || (a = O & ~e, a !== 0 && (c = qe(a))))) : (O = o & ~b, O !== 0 ? c = qe(O) : A !== 0 ? c = qe(A) : a || (a = o & ~e, a !== 0 && (c = qe(a)))), c === 0 ? 0 : n !== 0 && n !== c && (n & b) === 0 && (b = c & -c, a = n & -n, b >= a || b === 32 && (a & 4194048) !== 0) ? n : c;
  }
  function nn(e, n) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
  }
  function co(e, n) {
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
  function fh() {
    var e = Jt;
    return Jt <<= 1, (Jt & 62914560) === 0 && (Jt = 4194304), e;
  }
  function Mu(e) {
    for (var n = [], a = 0; 31 > a; a++) n.push(e);
    return n;
  }
  function Ui(e, n) {
    e.pendingLanes |= n, n !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function k1(e, n, a, o, c, b) {
    var A = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var O = e.entanglements, D = e.expirationTimes, q = e.hiddenUpdates;
    for (a = A & ~a; 0 < a; ) {
      var Q = 31 - Be(a), W = 1 << Q;
      O[Q] = 0, D[Q] = -1;
      var F = q[Q];
      if (F !== null)
        for (q[Q] = null, Q = 0; Q < F.length; Q++) {
          var Z = F[Q];
          Z !== null && (Z.lane &= -536870913);
        }
      a &= ~W;
    }
    o !== 0 && dh(e, o, 0), b !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= b & ~(A & ~n));
  }
  function dh(e, n, a) {
    e.pendingLanes |= n, e.suspendedLanes &= ~n;
    var o = 31 - Be(n);
    e.entangledLanes |= n, e.entanglements[o] = e.entanglements[o] | 1073741824 | a & 4194090;
  }
  function hh(e, n) {
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
  function Du(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function ph() {
    var e = ne.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Yg(e.type));
  }
  function M1(e, n) {
    var a = ne.p;
    try {
      return ne.p = e, n();
    } finally {
      ne.p = a;
    }
  }
  var kr = Math.random().toString(36).slice(2), Zt = "__reactFiber$" + kr, rn = "__reactProps$" + kr, Ua = "__reactContainer$" + kr, Ru = "__reactEvents$" + kr, j1 = "__reactListeners$" + kr, D1 = "__reactHandles$" + kr, mh = "__reactResources$" + kr, Hi = "__reactMarker$" + kr;
  function zu(e) {
    delete e[Zt], delete e[rn], delete e[Ru], delete e[j1], delete e[D1];
  }
  function Ha(e) {
    var n = e[Zt];
    if (n) return n;
    for (var a = e.parentNode; a; ) {
      if (n = a[Ua] || a[Zt]) {
        if (a = n.alternate, n.child !== null || a !== null && a.child !== null)
          for (e = jg(e); e !== null; ) {
            if (a = e[Zt]) return a;
            e = jg(e);
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
    var n = e[mh];
    return n || (n = e[mh] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function zt(e) {
    e[Hi] = !0;
  }
  var gh = /* @__PURE__ */ new Set(), vh = {};
  function la(e, n) {
    Za(e, n), Za(e + "Capture", n);
  }
  function Za(e, n) {
    for (vh[e] = n, e = 0; e < n.length; e++)
      gh.add(n[e]);
  }
  var R1 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), yh = {}, bh = {};
  function z1(e) {
    return it.call(bh, e) ? !0 : it.call(yh, e) ? !1 : R1.test(e) ? bh[e] = !0 : (yh[e] = !0, !1);
  }
  function fo(e, n, a) {
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
  function ho(e, n, a) {
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
  var Lu, _h;
  function Ga(e) {
    if (Lu === void 0)
      try {
        throw Error();
      } catch (a) {
        var n = a.stack.trim().match(/\n( *(at )?)/);
        Lu = n && n[1] || "", _h = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Lu + e + _h;
  }
  var Iu = !1;
  function Pu(e, n) {
    if (!e || Iu) return "";
    Iu = !0;
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
      var b = o.DetermineComponentFrameRoot(), A = b[0], O = b[1];
      if (A && O) {
        var D = A.split(`
`), q = O.split(`
`);
        for (c = o = 0; o < D.length && !D[o].includes("DetermineComponentFrameRoot"); )
          o++;
        for (; c < q.length && !q[c].includes(
          "DetermineComponentFrameRoot"
        ); )
          c++;
        if (o === D.length || c === q.length)
          for (o = D.length - 1, c = q.length - 1; 1 <= o && 0 <= c && D[o] !== q[c]; )
            c--;
        for (; 1 <= o && 0 <= c; o--, c--)
          if (D[o] !== q[c]) {
            if (o !== 1 || c !== 1)
              do
                if (o--, c--, 0 > c || D[o] !== q[c]) {
                  var Q = `
` + D[o].replace(" at new ", " at ");
                  return e.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", e.displayName)), Q;
                }
              while (1 <= o && 0 <= c);
            break;
          }
      }
    } finally {
      Iu = !1, Error.prepareStackTrace = a;
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
        return Pu(e.type, !1);
      case 11:
        return Pu(e.type.render, !1);
      case 1:
        return Pu(e.type, !0);
      case 31:
        return Ga("Activity");
      default:
        return "";
    }
  }
  function Sh(e) {
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
  function xh(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function I1(e) {
    var n = xh(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
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
        set: function(A) {
          o = "" + A, b.call(this, A);
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
  function po(e) {
    e._valueTracker || (e._valueTracker = I1(e));
  }
  function Eh(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var a = n.getValue(), o = "";
    return e && (o = xh(e) ? e.checked ? "true" : "false" : e.value), e = o, e !== a ? (n.setValue(e), !0) : !1;
  }
  function mo(e) {
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
  function Bu(e, n, a, o, c, b, A, O) {
    e.name = "", A != null && typeof A != "function" && typeof A != "symbol" && typeof A != "boolean" ? e.type = A : e.removeAttribute("type"), n != null ? A === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + On(n)) : e.value !== "" + On(n) && (e.value = "" + On(n)) : A !== "submit" && A !== "reset" || e.removeAttribute("value"), n != null ? Uu(e, A, On(n)) : a != null ? Uu(e, A, On(a)) : o != null && e.removeAttribute("value"), c == null && b != null && (e.defaultChecked = !!b), c != null && (e.checked = c && typeof c != "function" && typeof c != "symbol"), O != null && typeof O != "function" && typeof O != "symbol" && typeof O != "boolean" ? e.name = "" + On(O) : e.removeAttribute("name");
  }
  function wh(e, n, a, o, c, b, A, O) {
    if (b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" && (e.type = b), n != null || a != null) {
      if (!(b !== "submit" && b !== "reset" || n != null))
        return;
      a = a != null ? "" + On(a) : "", n = n != null ? "" + On(n) : a, O || n === e.value || (e.value = n), e.defaultValue = n;
    }
    o = o ?? c, o = typeof o != "function" && typeof o != "symbol" && !!o, e.checked = O ? e.checked : !!o, e.defaultChecked = !!o, A != null && typeof A != "function" && typeof A != "symbol" && typeof A != "boolean" && (e.name = A);
  }
  function Uu(e, n, a) {
    n === "number" && mo(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
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
  function Ch(e, n, a) {
    if (n != null && (n = "" + On(n), n !== e.value && (e.value = n), a == null)) {
      e.defaultValue !== n && (e.defaultValue = n);
      return;
    }
    e.defaultValue = a != null ? "" + On(a) : "";
  }
  function Ah(e, n, a, o) {
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
  var B1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Nh(e, n, a) {
    var o = n.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? o ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "" : o ? e.setProperty(n, a) : typeof a != "number" || a === 0 || B1.has(n) ? n === "float" ? e.cssFloat = a : e[n] = ("" + a).trim() : e[n] = a + "px";
  }
  function Th(e, n, a) {
    if (n != null && typeof n != "object")
      throw Error(s(62));
    if (e = e.style, a != null) {
      for (var o in a)
        !a.hasOwnProperty(o) || n != null && n.hasOwnProperty(o) || (o.indexOf("--") === 0 ? e.setProperty(o, "") : o === "float" ? e.cssFloat = "" : e[o] = "");
      for (var c in n)
        o = n[c], n.hasOwnProperty(c) && a[c] !== o && Nh(e, c, o);
    } else
      for (var b in n)
        n.hasOwnProperty(b) && Nh(e, b, n[b]);
  }
  function Hu(e) {
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
  function go(e) {
    return H1.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var qu = null;
  function Fu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Xa = null, $a = null;
  function Oh(e) {
    var n = qa(e);
    if (n && (e = n.stateNode)) {
      var a = e[rn] || null;
      e: switch (e = n.stateNode, n.type) {
        case "input":
          if (Bu(
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
                Bu(
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
              o = a[n], o.form === e.form && Eh(o);
          }
          break e;
        case "textarea":
          Ch(e, a.value, a.defaultValue);
          break e;
        case "select":
          n = a.value, n != null && Va(e, !!a.multiple, n, !1);
      }
    }
  }
  var Zu = !1;
  function kh(e, n, a) {
    if (Zu) return e(n, a);
    Zu = !0;
    try {
      var o = e(n);
      return o;
    } finally {
      if (Zu = !1, (Xa !== null || $a !== null) && (tl(), Xa && (n = Xa, e = $a, $a = Xa = null, Oh(n), e)))
        for (n = 0; n < e.length; n++) Oh(e[n]);
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
  var lr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Gu = !1;
  if (lr)
    try {
      var Zi = {};
      Object.defineProperty(Zi, "passive", {
        get: function() {
          Gu = !0;
        }
      }), window.addEventListener("test", Zi, Zi), window.removeEventListener("test", Zi, Zi);
    } catch {
      Gu = !1;
    }
  var Mr = null, Vu = null, vo = null;
  function Mh() {
    if (vo) return vo;
    var e, n = Vu, a = n.length, o, c = "value" in Mr ? Mr.value : Mr.textContent, b = c.length;
    for (e = 0; e < a && n[e] === c[e]; e++) ;
    var A = a - e;
    for (o = 1; o <= A && n[a - o] === c[b - o]; o++) ;
    return vo = c.slice(e, 1 < o ? 1 - o : void 0);
  }
  function yo(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function bo() {
    return !0;
  }
  function jh() {
    return !1;
  }
  function an(e) {
    function n(a, o, c, b, A) {
      this._reactName = a, this._targetInst = c, this.type = o, this.nativeEvent = b, this.target = A, this.currentTarget = null;
      for (var O in e)
        e.hasOwnProperty(O) && (a = e[O], this[O] = a ? a(b) : b[O]);
      return this.isDefaultPrevented = (b.defaultPrevented != null ? b.defaultPrevented : b.returnValue === !1) ? bo : jh, this.isPropagationStopped = jh, this;
    }
    return g(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = bo);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = bo);
      },
      persist: function() {
      },
      isPersistent: bo
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
  }, _o = an(ua), Gi = g({}, ua, { view: 0, detail: 0 }), q1 = an(Gi), Yu, Xu, Vi, So = g({}, Gi, {
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
    getModifierState: Ju,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Vi && (Vi && e.type === "mousemove" ? (Yu = e.screenX - Vi.screenX, Xu = e.screenY - Vi.screenY) : Xu = Yu = 0, Vi = e), Yu);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Xu;
    }
  }), Dh = an(So), F1 = g({}, So, { dataTransfer: 0 }), Z1 = an(F1), G1 = g({}, Gi, { relatedTarget: 0 }), $u = an(G1), V1 = g({}, ua, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Y1 = an(V1), X1 = g({}, ua, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), $1 = an(X1), J1 = g({}, ua, { data: 0 }), Rh = an(J1), Q1 = {
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
  function Ju() {
    return eb;
  }
  var tb = g({}, Gi, {
    key: function(e) {
      if (e.key) {
        var n = Q1[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress" ? (e = yo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? K1[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ju,
    charCode: function(e) {
      return e.type === "keypress" ? yo(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? yo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), nb = an(tb), rb = g({}, So, {
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
  }), zh = an(rb), ab = g({}, Gi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ju
  }), ib = an(ab), sb = g({}, ua, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ob = an(sb), lb = g({}, So, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ub = an(lb), cb = g({}, ua, {
    newState: 0,
    oldState: 0
  }), fb = an(cb), db = [9, 13, 27, 32], Qu = lr && "CompositionEvent" in window, Yi = null;
  lr && "documentMode" in document && (Yi = document.documentMode);
  var hb = lr && "TextEvent" in window && !Yi, Lh = lr && (!Qu || Yi && 8 < Yi && 11 >= Yi), Ih = " ", Ph = !1;
  function Bh(e, n) {
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
  function Uh(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ja = !1;
  function pb(e, n) {
    switch (e) {
      case "compositionend":
        return Uh(n);
      case "keypress":
        return n.which !== 32 ? null : (Ph = !0, Ih);
      case "textInput":
        return e = n.data, e === Ih && Ph ? null : e;
      default:
        return null;
    }
  }
  function mb(e, n) {
    if (Ja)
      return e === "compositionend" || !Qu && Bh(e, n) ? (e = Mh(), vo = Vu = Mr = null, Ja = !1, e) : null;
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
        return Lh && n.locale !== "ko" ? null : n.data;
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
  function Hh(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!gb[e.type] : n === "textarea";
  }
  function qh(e, n, a, o) {
    Xa ? $a ? $a.push(o) : $a = [o] : Xa = o, n = ol(n, "onChange"), 0 < n.length && (a = new _o(
      "onChange",
      "change",
      null,
      a,
      o
    ), e.push({ event: a, listeners: n }));
  }
  var Xi = null, $i = null;
  function vb(e) {
    xg(e, 0);
  }
  function xo(e) {
    var n = qi(e);
    if (Eh(n)) return e;
  }
  function Fh(e, n) {
    if (e === "change") return n;
  }
  var Zh = !1;
  if (lr) {
    var Ku;
    if (lr) {
      var Wu = "oninput" in document;
      if (!Wu) {
        var Gh = document.createElement("div");
        Gh.setAttribute("oninput", "return;"), Wu = typeof Gh.oninput == "function";
      }
      Ku = Wu;
    } else Ku = !1;
    Zh = Ku && (!document.documentMode || 9 < document.documentMode);
  }
  function Vh() {
    Xi && (Xi.detachEvent("onpropertychange", Yh), $i = Xi = null);
  }
  function Yh(e) {
    if (e.propertyName === "value" && xo($i)) {
      var n = [];
      qh(
        n,
        $i,
        e,
        Fu(e)
      ), kh(vb, n);
    }
  }
  function yb(e, n, a) {
    e === "focusin" ? (Vh(), Xi = n, $i = a, Xi.attachEvent("onpropertychange", Yh)) : e === "focusout" && Vh();
  }
  function bb(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return xo($i);
  }
  function _b(e, n) {
    if (e === "click") return xo(n);
  }
  function Sb(e, n) {
    if (e === "input" || e === "change")
      return xo(n);
  }
  function xb(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var gn = typeof Object.is == "function" ? Object.is : xb;
  function Ji(e, n) {
    if (gn(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null)
      return !1;
    var a = Object.keys(e), o = Object.keys(n);
    if (a.length !== o.length) return !1;
    for (o = 0; o < a.length; o++) {
      var c = a[o];
      if (!it.call(n, c) || !gn(e[c], n[c]))
        return !1;
    }
    return !0;
  }
  function Xh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function $h(e, n) {
    var a = Xh(e);
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
      a = Xh(a);
    }
  }
  function Jh(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Jh(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Qh(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var n = mo(e.document); n instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof n.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = n.contentWindow;
      else break;
      n = mo(e.document);
    }
    return n;
  }
  function ec(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  var Eb = lr && "documentMode" in document && 11 >= document.documentMode, Qa = null, tc = null, Qi = null, nc = !1;
  function Kh(e, n, a) {
    var o = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    nc || Qa == null || Qa !== mo(o) || (o = Qa, "selectionStart" in o && ec(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = {
      anchorNode: o.anchorNode,
      anchorOffset: o.anchorOffset,
      focusNode: o.focusNode,
      focusOffset: o.focusOffset
    }), Qi && Ji(Qi, o) || (Qi = o, o = ol(tc, "onSelect"), 0 < o.length && (n = new _o(
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
  }, rc = {}, Wh = {};
  lr && (Wh = document.createElement("div").style, "AnimationEvent" in window || (delete Ka.animationend.animation, delete Ka.animationiteration.animation, delete Ka.animationstart.animation), "TransitionEvent" in window || delete Ka.transitionend.transition);
  function fa(e) {
    if (rc[e]) return rc[e];
    if (!Ka[e]) return e;
    var n = Ka[e], a;
    for (a in n)
      if (n.hasOwnProperty(a) && a in Wh)
        return rc[e] = n[a];
    return e;
  }
  var ep = fa("animationend"), tp = fa("animationiteration"), np = fa("animationstart"), wb = fa("transitionrun"), Cb = fa("transitionstart"), Ab = fa("transitioncancel"), rp = fa("transitionend"), ap = /* @__PURE__ */ new Map(), ac = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  ac.push("scrollEnd");
  function Fn(e, n) {
    ap.set(e, n), la(n, [e]);
  }
  var ip = /* @__PURE__ */ new WeakMap();
  function Mn(e, n) {
    if (typeof e == "object" && e !== null) {
      var a = ip.get(e);
      return a !== void 0 ? a : (n = {
        value: e,
        source: n,
        stack: Sh(n)
      }, ip.set(e, n), n);
    }
    return {
      value: e,
      source: n,
      stack: Sh(n)
    };
  }
  var jn = [], Wa = 0, ic = 0;
  function Eo() {
    for (var e = Wa, n = ic = Wa = 0; n < e; ) {
      var a = jn[n];
      jn[n++] = null;
      var o = jn[n];
      jn[n++] = null;
      var c = jn[n];
      jn[n++] = null;
      var b = jn[n];
      if (jn[n++] = null, o !== null && c !== null) {
        var A = o.pending;
        A === null ? c.next = c : (c.next = A.next, A.next = c), o.pending = c;
      }
      b !== 0 && sp(a, c, b);
    }
  }
  function wo(e, n, a, o) {
    jn[Wa++] = e, jn[Wa++] = n, jn[Wa++] = a, jn[Wa++] = o, ic |= o, e.lanes |= o, e = e.alternate, e !== null && (e.lanes |= o);
  }
  function sc(e, n, a, o) {
    return wo(e, n, a, o), Co(e);
  }
  function ei(e, n) {
    return wo(e, null, null, n), Co(e);
  }
  function sp(e, n, a) {
    e.lanes |= a;
    var o = e.alternate;
    o !== null && (o.lanes |= a);
    for (var c = !1, b = e.return; b !== null; )
      b.childLanes |= a, o = b.alternate, o !== null && (o.childLanes |= a), b.tag === 22 && (e = b.stateNode, e === null || e._visibility & 1 || (c = !0)), e = b, b = b.return;
    return e.tag === 3 ? (b = e.stateNode, c && n !== null && (c = 31 - Be(a), e = b.hiddenUpdates, o = e[c], o === null ? e[c] = [n] : o.push(n), n.lane = a | 536870912), b) : null;
  }
  function Co(e) {
    if (50 < xs)
      throw xs = 0, hf = null, Error(s(185));
    for (var n = e.return; n !== null; )
      e = n, n = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ti = {};
  function Nb(e, n, a, o) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function vn(e, n, a, o) {
    return new Nb(e, n, a, o);
  }
  function oc(e) {
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
  function op(e, n) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = n, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, n = a.dependencies, e.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), e;
  }
  function Ao(e, n, a, o, c, b) {
    var A = 0;
    if (o = e, typeof e == "function") oc(e) && (A = 1);
    else if (typeof e == "string")
      A = O_(
        e,
        a,
        se.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case G:
          return e = vn(31, a, n, c), e.elementType = G, e.lanes = b, e;
        case h:
          return da(a.children, c, b, n);
        case x:
          A = 8, c |= 24;
          break;
        case C:
          return e = vn(12, a, n, c | 2), e.elementType = C, e.lanes = b, e;
        case N:
          return e = vn(13, a, n, c), e.elementType = N, e.lanes = b, e;
        case M:
          return e = vn(19, a, n, c), e.elementType = M, e.lanes = b, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case T:
              case k:
                A = 10;
                break e;
              case w:
                A = 9;
                break e;
              case E:
                A = 11;
                break e;
              case j:
                A = 14;
                break e;
              case U:
                A = 16, o = null;
                break e;
            }
          A = 29, a = Error(
            s(130, e === null ? "null" : typeof e, "")
          ), o = null;
      }
    return n = vn(A, a, n, c), n.elementType = e, n.type = o, n.lanes = b, n;
  }
  function da(e, n, a, o) {
    return e = vn(7, e, o, n), e.lanes = a, e;
  }
  function lc(e, n, a) {
    return e = vn(6, e, null, n), e.lanes = a, e;
  }
  function uc(e, n, a) {
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
  var ni = [], ri = 0, No = null, To = 0, Dn = [], Rn = 0, ha = null, cr = 1, fr = "";
  function pa(e, n) {
    ni[ri++] = To, ni[ri++] = No, No = e, To = n;
  }
  function lp(e, n, a) {
    Dn[Rn++] = cr, Dn[Rn++] = fr, Dn[Rn++] = ha, ha = e;
    var o = cr;
    e = fr;
    var c = 32 - Be(o) - 1;
    o &= ~(1 << c), a += 1;
    var b = 32 - Be(n) + c;
    if (30 < b) {
      var A = c - c % 5;
      b = (o & (1 << A) - 1).toString(32), o >>= A, c -= A, cr = 1 << 32 - Be(n) + c | a << c | o, fr = b + e;
    } else
      cr = 1 << b | a << c | o, fr = e;
  }
  function cc(e) {
    e.return !== null && (pa(e, 1), lp(e, 1, 0));
  }
  function fc(e) {
    for (; e === No; )
      No = ni[--ri], ni[ri] = null, To = ni[--ri], ni[ri] = null;
    for (; e === ha; )
      ha = Dn[--Rn], Dn[Rn] = null, fr = Dn[--Rn], Dn[Rn] = null, cr = Dn[--Rn], Dn[Rn] = null;
  }
  var Qt = null, yt = null, Je = !1, ma = null, Kn = !1, dc = Error(s(519));
  function ga(e) {
    var n = Error(s(418, ""));
    throw es(Mn(n, e)), dc;
  }
  function up(e) {
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
        Ie("invalid", n), wh(
          n,
          o.value,
          o.defaultValue,
          o.checked,
          o.defaultChecked,
          o.type,
          o.name,
          !0
        ), po(n);
        break;
      case "select":
        Ie("invalid", n);
        break;
      case "textarea":
        Ie("invalid", n), Ah(n, o.value, o.defaultValue, o.children), po(n);
    }
    a = o.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || n.textContent === "" + a || o.suppressHydrationWarning === !0 || Ag(n.textContent, a) ? (o.popover != null && (Ie("beforetoggle", n), Ie("toggle", n)), o.onScroll != null && Ie("scroll", n), o.onScrollEnd != null && Ie("scrollend", n), o.onClick != null && (n.onclick = ll), n = !0) : n = !1, n || ga(e);
  }
  function cp(e) {
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
    if (!Je) return cp(e), Je = !0, !1;
    var n = e.tag, a;
    if ((a = n !== 3 && n !== 27) && ((a = n === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Of(e.type, e.memoizedProps)), a = !a), a && yt && ga(e), cp(e), n === 13) {
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
      n === 27 ? (n = yt, Yr(e.type) ? (e = Df, Df = null, yt = e) : yt = n) : yt = Qt ? Gn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Wi() {
    yt = Qt = null, Je = !1;
  }
  function fp() {
    var e = ma;
    return e !== null && (ln === null ? ln = e : ln.push.apply(
      ln,
      e
    ), ma = null), e;
  }
  function es(e) {
    ma === null ? ma = [e] : ma.push(e);
  }
  var hc = J(null), va = null, dr = null;
  function jr(e, n, a) {
    ie(hc, n._currentValue), n._currentValue = a;
  }
  function hr(e) {
    e._currentValue = hc.current, re(hc);
  }
  function pc(e, n, a) {
    for (; e !== null; ) {
      var o = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, o !== null && (o.childLanes |= n)) : o !== null && (o.childLanes & n) !== n && (o.childLanes |= n), e === a) break;
      e = e.return;
    }
  }
  function mc(e, n, a, o) {
    var c = e.child;
    for (c !== null && (c.return = e); c !== null; ) {
      var b = c.dependencies;
      if (b !== null) {
        var A = c.child;
        b = b.firstContext;
        e: for (; b !== null; ) {
          var O = b;
          b = c;
          for (var D = 0; D < n.length; D++)
            if (O.context === n[D]) {
              b.lanes |= a, O = b.alternate, O !== null && (O.lanes |= a), pc(
                b.return,
                a,
                e
              ), o || (A = null);
              break e;
            }
          b = O.next;
        }
      } else if (c.tag === 18) {
        if (A = c.return, A === null) throw Error(s(341));
        A.lanes |= a, b = A.alternate, b !== null && (b.lanes |= a), pc(A, a, e), A = null;
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
    for (var c = n, b = !1; c !== null; ) {
      if (!b) {
        if ((c.flags & 524288) !== 0) b = !0;
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
    e !== null && mc(
      n,
      e,
      a,
      o
    ), n.flags |= 262144;
  }
  function Oo(e) {
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
    return dp(va, e);
  }
  function ko(e, n) {
    return va === null && ya(e), dp(e, n);
  }
  function dp(e, n) {
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
  }, Ob = t.unstable_scheduleCallback, kb = t.unstable_NormalPriority, Mt = {
    $$typeof: k,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function gc() {
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
  var rs = null, vc = 0, ai = 0, ii = null;
  function Mb(e, n) {
    if (rs === null) {
      var a = rs = [];
      vc = 0, ai = _f(), ii = {
        status: "pending",
        value: void 0,
        then: function(o) {
          a.push(o);
        }
      };
    }
    return vc++, n.then(hp, hp), n;
  }
  function hp() {
    if (--vc === 0 && rs !== null) {
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
  var pp = I.S;
  I.S = function(e, n) {
    typeof n == "object" && n !== null && typeof n.then == "function" && Mb(e, n), pp !== null && pp(e, n);
  };
  var ba = J(null);
  function yc() {
    var e = ba.current;
    return e !== null ? e : lt.pooledCache;
  }
  function Mo(e, n) {
    n === null ? ie(ba, ba.current) : ie(ba, n.pool);
  }
  function mp() {
    var e = yc();
    return e === null ? null : { parent: Mt._currentValue, pool: e };
  }
  var as = Error(s(460)), gp = Error(s(474)), jo = Error(s(542)), bc = { then: function() {
  } };
  function vp(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Do() {
  }
  function yp(e, n, a) {
    switch (a = e[a], a === void 0 ? e.push(n) : a !== n && (n.then(Do, Do), n = a), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw e = n.reason, _p(e), e;
      default:
        if (typeof n.status == "string") n.then(Do, Do);
        else {
          if (e = lt, e !== null && 100 < e.shellSuspendCounter)
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
            throw e = n.reason, _p(e), e;
        }
        throw is = n, as;
    }
  }
  var is = null;
  function bp() {
    if (is === null) throw Error(s(459));
    var e = is;
    return is = null, e;
  }
  function _p(e) {
    if (e === as || e === jo)
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
  function Sc(e, n) {
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
      return c === null ? n.next = n : (n.next = c.next, c.next = n), o.pending = n, n = Co(e), sp(e, null, a), n;
    }
    return wo(e, o, n, a), Co(e);
  }
  function ss(e, n, a) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (a & 4194048) !== 0)) {
      var o = n.lanes;
      o &= e.pendingLanes, a |= o, n.lanes = a, hh(e, a);
    }
  }
  function xc(e, n) {
    var a = e.updateQueue, o = e.alternate;
    if (o !== null && (o = o.updateQueue, a === o)) {
      var c = null, b = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var A = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          b === null ? c = b = A : b = b.next = A, a = a.next;
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
  var Ec = !1;
  function os() {
    if (Ec) {
      var e = ii;
      if (e !== null) throw e;
    }
  }
  function ls(e, n, a, o) {
    Ec = !1;
    var c = e.updateQueue;
    Dr = !1;
    var b = c.firstBaseUpdate, A = c.lastBaseUpdate, O = c.shared.pending;
    if (O !== null) {
      c.shared.pending = null;
      var D = O, q = D.next;
      D.next = null, A === null ? b = q : A.next = q, A = D;
      var Q = e.alternate;
      Q !== null && (Q = Q.updateQueue, O = Q.lastBaseUpdate, O !== A && (O === null ? Q.firstBaseUpdate = q : O.next = q, Q.lastBaseUpdate = D));
    }
    if (b !== null) {
      var W = c.baseState;
      A = 0, Q = q = D = null, O = b;
      do {
        var F = O.lane & -536870913, Z = F !== O.lane;
        if (Z ? (Fe & F) === F : (o & F) === F) {
          F !== 0 && F === ai && (Ec = !0), Q !== null && (Q = Q.next = {
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
                W = g({}, W, F);
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
          }, Q === null ? (q = Q = Z, D = W) : Q = Q.next = Z, A |= F;
        if (O = O.next, O === null) {
          if (O = c.shared.pending, O === null)
            break;
          Z = O, O = Z.next, Z.next = null, c.lastBaseUpdate = Z, c.shared.pending = null;
        }
      } while (!0);
      Q === null && (D = W), c.baseState = D, c.firstBaseUpdate = q, c.lastBaseUpdate = Q, b === null && (c.shared.lanes = 0), Fr |= A, e.lanes = A, e.memoizedState = W;
    }
  }
  function Sp(e, n) {
    if (typeof e != "function")
      throw Error(s(191, e));
    e.call(n);
  }
  function xp(e, n) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        Sp(a[e], n);
  }
  var si = J(null), Ro = J(0);
  function Ep(e, n) {
    e = _r, ie(Ro, e), ie(si, n), _r = e | n.baseLanes;
  }
  function wc() {
    ie(Ro, _r), ie(si, si.current);
  }
  function Cc() {
    _r = Ro.current, re(si), re(Ro);
  }
  var Lr = 0, je = null, et = null, Ct = null, zo = !1, oi = !1, _a = !1, Lo = 0, us = 0, li = null, Db = 0;
  function St() {
    throw Error(s(321));
  }
  function Ac(e, n) {
    if (n === null) return !1;
    for (var a = 0; a < n.length && a < e.length; a++)
      if (!gn(e[a], n[a])) return !1;
    return !0;
  }
  function Nc(e, n, a, o, c, b) {
    return Lr = b, je = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, I.H = e === null || e.memoizedState === null ? sm : om, _a = !1, b = a(o, c), _a = !1, oi && (b = Cp(
      n,
      a,
      o,
      c
    )), wp(e), b;
  }
  function wp(e) {
    I.H = qo;
    var n = et !== null && et.next !== null;
    if (Lr = 0, Ct = et = je = null, zo = !1, us = 0, li = null, n) throw Error(s(300));
    e === null || Lt || (e = e.dependencies, e !== null && Oo(e) && (Lt = !0));
  }
  function Cp(e, n, a, o) {
    je = e;
    var c = 0;
    do {
      if (oi && (li = null), us = 0, oi = !1, 25 <= c) throw Error(s(301));
      if (c += 1, Ct = et = null, e.updateQueue != null) {
        var b = e.updateQueue;
        b.lastEffect = null, b.events = null, b.stores = null, b.memoCache != null && (b.memoCache.index = 0);
      }
      I.H = Ub, b = n(a, o);
    } while (oi);
    return b;
  }
  function Rb() {
    var e = I.H, n = e.useState()[0];
    return n = typeof n.then == "function" ? cs(n) : n, e = e.useState()[0], (et !== null ? et.memoizedState : null) !== e && (je.flags |= 1024), n;
  }
  function Tc() {
    var e = Lo !== 0;
    return Lo = 0, e;
  }
  function Oc(e, n, a) {
    n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~a;
  }
  function kc(e) {
    if (zo) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        n !== null && (n.pending = null), e = e.next;
      }
      zo = !1;
    }
    Lr = 0, Ct = et = je = null, oi = !1, us = Lo = 0, li = null;
  }
  function sn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ct === null ? je.memoizedState = Ct = e : Ct = Ct.next = e, Ct;
  }
  function At() {
    if (et === null) {
      var e = je.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = et.next;
    var n = Ct === null ? je.memoizedState : Ct.next;
    if (n !== null)
      Ct = n, et = e;
    else {
      if (e === null)
        throw je.alternate === null ? Error(s(467)) : Error(s(310));
      et = e, e = {
        memoizedState: et.memoizedState,
        baseState: et.baseState,
        baseQueue: et.baseQueue,
        queue: et.queue,
        next: null
      }, Ct === null ? je.memoizedState = Ct = e : Ct = Ct.next = e;
    }
    return Ct;
  }
  function Mc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function cs(e) {
    var n = us;
    return us += 1, li === null && (li = []), e = yp(li, e, n), n = je, (Ct === null ? n.memoizedState : Ct.next) === null && (n = n.alternate, I.H = n === null || n.memoizedState === null ? sm : om), e;
  }
  function Io(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return cs(e);
      if (e.$$typeof === k) return Gt(e);
    }
    throw Error(s(438, String(e)));
  }
  function jc(e) {
    var n = null, a = je.updateQueue;
    if (a !== null && (n = a.memoCache), n == null) {
      var o = je.alternate;
      o !== null && (o = o.updateQueue, o !== null && (o = o.memoCache, o != null && (n = {
        data: o.data.map(function(c) {
          return c.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), a === null && (a = Mc(), je.updateQueue = a), a.memoCache = n, a = n.data[n.index], a === void 0)
      for (a = n.data[n.index] = Array(e), o = 0; o < e; o++)
        a[o] = P;
    return n.index++, a;
  }
  function pr(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Po(e) {
    var n = At();
    return Dc(n, et, e);
  }
  function Dc(e, n, a) {
    var o = e.queue;
    if (o === null) throw Error(s(311));
    o.lastRenderedReducer = a;
    var c = e.baseQueue, b = o.pending;
    if (b !== null) {
      if (c !== null) {
        var A = c.next;
        c.next = b.next, b.next = A;
      }
      n.baseQueue = c = b, o.pending = null;
    }
    if (b = e.baseState, c === null) e.memoizedState = b;
    else {
      n = c.next;
      var O = A = null, D = null, q = n, Q = !1;
      do {
        var W = q.lane & -536870913;
        if (W !== q.lane ? (Fe & W) === W : (Lr & W) === W) {
          var F = q.revertLane;
          if (F === 0)
            D !== null && (D = D.next = {
              lane: 0,
              revertLane: 0,
              action: q.action,
              hasEagerState: q.hasEagerState,
              eagerState: q.eagerState,
              next: null
            }), W === ai && (Q = !0);
          else if ((Lr & F) === F) {
            q = q.next, F === ai && (Q = !0);
            continue;
          } else
            W = {
              lane: 0,
              revertLane: q.revertLane,
              action: q.action,
              hasEagerState: q.hasEagerState,
              eagerState: q.eagerState,
              next: null
            }, D === null ? (O = D = W, A = b) : D = D.next = W, je.lanes |= F, Fr |= F;
          W = q.action, _a && a(b, W), b = q.hasEagerState ? q.eagerState : a(b, W);
        } else
          F = {
            lane: W,
            revertLane: q.revertLane,
            action: q.action,
            hasEagerState: q.hasEagerState,
            eagerState: q.eagerState,
            next: null
          }, D === null ? (O = D = F, A = b) : D = D.next = F, je.lanes |= W, Fr |= W;
        q = q.next;
      } while (q !== null && q !== n);
      if (D === null ? A = b : D.next = O, !gn(b, e.memoizedState) && (Lt = !0, Q && (a = ii, a !== null)))
        throw a;
      e.memoizedState = b, e.baseState = A, e.baseQueue = D, o.lastRenderedState = b;
    }
    return c === null && (o.lanes = 0), [e.memoizedState, o.dispatch];
  }
  function Rc(e) {
    var n = At(), a = n.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = e;
    var o = a.dispatch, c = a.pending, b = n.memoizedState;
    if (c !== null) {
      a.pending = null;
      var A = c = c.next;
      do
        b = e(b, A.action), A = A.next;
      while (A !== c);
      gn(b, n.memoizedState) || (Lt = !0), n.memoizedState = b, n.baseQueue === null && (n.baseState = b), a.lastRenderedState = b;
    }
    return [b, o];
  }
  function Ap(e, n, a) {
    var o = je, c = At(), b = Je;
    if (b) {
      if (a === void 0) throw Error(s(407));
      a = a();
    } else a = n();
    var A = !gn(
      (et || c).memoizedState,
      a
    );
    A && (c.memoizedState = a, Lt = !0), c = c.queue;
    var O = Op.bind(null, o, c, e);
    if (fs(2048, 8, O, [e]), c.getSnapshot !== n || A || Ct !== null && Ct.memoizedState.tag & 1) {
      if (o.flags |= 2048, ui(
        9,
        Bo(),
        Tp.bind(
          null,
          o,
          c,
          a,
          n
        ),
        null
      ), lt === null) throw Error(s(349));
      b || (Lr & 124) !== 0 || Np(o, n, a);
    }
    return a;
  }
  function Np(e, n, a) {
    e.flags |= 16384, e = { getSnapshot: n, value: a }, n = je.updateQueue, n === null ? (n = Mc(), je.updateQueue = n, n.stores = [e]) : (a = n.stores, a === null ? n.stores = [e] : a.push(e));
  }
  function Tp(e, n, a, o) {
    n.value = a, n.getSnapshot = o, kp(n) && Mp(e);
  }
  function Op(e, n, a) {
    return a(function() {
      kp(n) && Mp(e);
    });
  }
  function kp(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var a = n();
      return !gn(e, a);
    } catch {
      return !0;
    }
  }
  function Mp(e) {
    var n = ei(e, 2);
    n !== null && xn(n, e, 2);
  }
  function zc(e) {
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
  function jp(e, n, a, o) {
    return e.baseState = a, Dc(
      e,
      et,
      typeof o == "function" ? o : pr
    );
  }
  function zb(e, n, a, o, c) {
    if (Ho(e)) throw Error(s(485));
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
        then: function(A) {
          b.listeners.push(A);
        }
      };
      I.T !== null ? a(!0) : b.isTransition = !1, o(b), a = n.pending, a === null ? (b.next = n.pending = b, Dp(n, b)) : (b.next = a.next, n.pending = a.next = b);
    }
  }
  function Dp(e, n) {
    var a = n.action, o = n.payload, c = e.state;
    if (n.isTransition) {
      var b = I.T, A = {};
      I.T = A;
      try {
        var O = a(c, o), D = I.S;
        D !== null && D(A, O), Rp(e, n, O);
      } catch (q) {
        Lc(e, n, q);
      } finally {
        I.T = b;
      }
    } else
      try {
        b = a(c, o), Rp(e, n, b);
      } catch (q) {
        Lc(e, n, q);
      }
  }
  function Rp(e, n, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(o) {
        zp(e, n, o);
      },
      function(o) {
        return Lc(e, n, o);
      }
    ) : zp(e, n, a);
  }
  function zp(e, n, a) {
    n.status = "fulfilled", n.value = a, Lp(n), e.state = a, n = e.pending, n !== null && (a = n.next, a === n ? e.pending = null : (a = a.next, n.next = a, Dp(e, a)));
  }
  function Lc(e, n, a) {
    var o = e.pending;
    if (e.pending = null, o !== null) {
      o = o.next;
      do
        n.status = "rejected", n.reason = a, Lp(n), n = n.next;
      while (n !== o);
    }
    e.action = null;
  }
  function Lp(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++) (0, e[n])();
  }
  function Ip(e, n) {
    return n;
  }
  function Pp(e, n) {
    if (Je) {
      var a = lt.formState;
      if (a !== null) {
        e: {
          var o = je;
          if (Je) {
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
      lastRenderedReducer: Ip,
      lastRenderedState: n
    }, a.queue = o, a = rm.bind(
      null,
      je,
      o
    ), o.dispatch = a, o = zc(!1), b = Hc.bind(
      null,
      je,
      !1,
      o.queue
    ), o = sn(), c = {
      state: n,
      dispatch: null,
      action: e,
      pending: null
    }, o.queue = c, a = zb.bind(
      null,
      je,
      c,
      b,
      a
    ), c.dispatch = a, o.memoizedState = e, [n, a, !1];
  }
  function Bp(e) {
    var n = At();
    return Up(n, et, e);
  }
  function Up(e, n, a) {
    if (n = Dc(
      e,
      n,
      Ip
    )[0], e = Po(pr)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var o = cs(n);
      } catch (A) {
        throw A === as ? jo : A;
      }
    else o = n;
    n = At();
    var c = n.queue, b = c.dispatch;
    return a !== n.memoizedState && (je.flags |= 2048, ui(
      9,
      Bo(),
      Lb.bind(null, c, a),
      null
    )), [o, b, e];
  }
  function Lb(e, n) {
    e.action = n;
  }
  function Hp(e) {
    var n = At(), a = et;
    if (a !== null)
      return Up(n, a, e);
    At(), n = n.memoizedState, a = At();
    var o = a.queue.dispatch;
    return a.memoizedState = e, [n, o, !1];
  }
  function ui(e, n, a, o) {
    return e = { tag: e, create: a, deps: o, inst: n, next: null }, n = je.updateQueue, n === null && (n = Mc(), je.updateQueue = n), a = n.lastEffect, a === null ? n.lastEffect = e.next = e : (o = a.next, a.next = e, e.next = o, n.lastEffect = e), e;
  }
  function Bo() {
    return { destroy: void 0, resource: void 0 };
  }
  function qp() {
    return At().memoizedState;
  }
  function Uo(e, n, a, o) {
    var c = sn();
    o = o === void 0 ? null : o, je.flags |= e, c.memoizedState = ui(
      1 | n,
      Bo(),
      a,
      o
    );
  }
  function fs(e, n, a, o) {
    var c = At();
    o = o === void 0 ? null : o;
    var b = c.memoizedState.inst;
    et !== null && o !== null && Ac(o, et.memoizedState.deps) ? c.memoizedState = ui(n, b, a, o) : (je.flags |= e, c.memoizedState = ui(
      1 | n,
      b,
      a,
      o
    ));
  }
  function Fp(e, n) {
    Uo(8390656, 8, e, n);
  }
  function Zp(e, n) {
    fs(2048, 8, e, n);
  }
  function Gp(e, n) {
    return fs(4, 2, e, n);
  }
  function Vp(e, n) {
    return fs(4, 4, e, n);
  }
  function Yp(e, n) {
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
  function Xp(e, n, a) {
    a = a != null ? a.concat([e]) : null, fs(4, 4, Yp.bind(null, n, e), a);
  }
  function Ic() {
  }
  function $p(e, n) {
    var a = At();
    n = n === void 0 ? null : n;
    var o = a.memoizedState;
    return n !== null && Ac(n, o[1]) ? o[0] : (a.memoizedState = [e, n], e);
  }
  function Jp(e, n) {
    var a = At();
    n = n === void 0 ? null : n;
    var o = a.memoizedState;
    if (n !== null && Ac(n, o[1]))
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
  function Pc(e, n, a) {
    return a === void 0 || (Lr & 1073741824) !== 0 ? e.memoizedState = n : (e.memoizedState = a, e = Wm(), je.lanes |= e, Fr |= e, a);
  }
  function Qp(e, n, a, o) {
    return gn(a, n) ? a : si.current !== null ? (e = Pc(e, a, o), gn(e, n) || (Lt = !0), e) : (Lr & 42) === 0 ? (Lt = !0, e.memoizedState = a) : (e = Wm(), je.lanes |= e, Fr |= e, n);
  }
  function Kp(e, n, a, o, c) {
    var b = ne.p;
    ne.p = b !== 0 && 8 > b ? b : 8;
    var A = I.T, O = {};
    I.T = O, Hc(e, !1, n, a);
    try {
      var D = c(), q = I.S;
      if (q !== null && q(O, D), D !== null && typeof D == "object" && typeof D.then == "function") {
        var Q = jb(
          D,
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
      ne.p = b, I.T = A;
    }
  }
  function Ib() {
  }
  function Bc(e, n, a, o) {
    if (e.tag !== 5) throw Error(s(476));
    var c = Wp(e).queue;
    Kp(
      e,
      c,
      n,
      ce,
      a === null ? Ib : function() {
        return em(e), a(o);
      }
    );
  }
  function Wp(e) {
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
  function em(e) {
    var n = Wp(e).next.queue;
    ds(e, n, {}, Sn());
  }
  function Uc() {
    return Gt(ks);
  }
  function tm() {
    return At().memoizedState;
  }
  function nm() {
    return At().memoizedState;
  }
  function Pb(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var a = Sn();
          e = Rr(a);
          var o = zr(n, e, a);
          o !== null && (xn(o, n, a), ss(o, n, a)), n = { cache: gc() }, e.payload = n;
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
    }, Ho(e) ? am(n, a) : (a = sc(e, n, a, o), a !== null && (xn(a, e, o), im(a, n, o)));
  }
  function rm(e, n, a) {
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
    if (Ho(e)) am(n, c);
    else {
      var b = e.alternate;
      if (e.lanes === 0 && (b === null || b.lanes === 0) && (b = n.lastRenderedReducer, b !== null))
        try {
          var A = n.lastRenderedState, O = b(A, a);
          if (c.hasEagerState = !0, c.eagerState = O, gn(O, A))
            return wo(e, n, c, 0), lt === null && Eo(), !1;
        } catch {
        } finally {
        }
      if (a = sc(e, n, c, o), a !== null)
        return xn(a, e, o), im(a, n, o), !0;
    }
    return !1;
  }
  function Hc(e, n, a, o) {
    if (o = {
      lane: 2,
      revertLane: _f(),
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ho(e)) {
      if (n) throw Error(s(479));
    } else
      n = sc(
        e,
        a,
        o,
        2
      ), n !== null && xn(n, e, 2);
  }
  function Ho(e) {
    var n = e.alternate;
    return e === je || n !== null && n === je;
  }
  function am(e, n) {
    oi = zo = !0;
    var a = e.pending;
    a === null ? n.next = n : (n.next = a.next, a.next = n), e.pending = n;
  }
  function im(e, n, a) {
    if ((a & 4194048) !== 0) {
      var o = n.lanes;
      o &= e.pendingLanes, a |= o, n.lanes = a, hh(e, a);
    }
  }
  var qo = {
    readContext: Gt,
    use: Io,
    useCallback: St,
    useContext: St,
    useEffect: St,
    useImperativeHandle: St,
    useLayoutEffect: St,
    useInsertionEffect: St,
    useMemo: St,
    useReducer: St,
    useRef: St,
    useState: St,
    useDebugValue: St,
    useDeferredValue: St,
    useTransition: St,
    useSyncExternalStore: St,
    useId: St,
    useHostTransitionStatus: St,
    useFormState: St,
    useActionState: St,
    useOptimistic: St,
    useMemoCache: St,
    useCacheRefresh: St
  }, sm = {
    readContext: Gt,
    use: Io,
    useCallback: function(e, n) {
      return sn().memoizedState = [
        e,
        n === void 0 ? null : n
      ], e;
    },
    useContext: Gt,
    useEffect: Fp,
    useImperativeHandle: function(e, n, a) {
      a = a != null ? a.concat([e]) : null, Uo(
        4194308,
        4,
        Yp.bind(null, n, e),
        a
      );
    },
    useLayoutEffect: function(e, n) {
      return Uo(4194308, 4, e, n);
    },
    useInsertionEffect: function(e, n) {
      Uo(4, 2, e, n);
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
        je,
        e
      ), [o.memoizedState, e];
    },
    useRef: function(e) {
      var n = sn();
      return e = { current: e }, n.memoizedState = e;
    },
    useState: function(e) {
      e = zc(e);
      var n = e.queue, a = rm.bind(null, je, n);
      return n.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: Ic,
    useDeferredValue: function(e, n) {
      var a = sn();
      return Pc(a, e, n);
    },
    useTransition: function() {
      var e = zc(!1);
      return e = Kp.bind(
        null,
        je,
        e.queue,
        !0,
        !1
      ), sn().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, n, a) {
      var o = je, c = sn();
      if (Je) {
        if (a === void 0)
          throw Error(s(407));
        a = a();
      } else {
        if (a = n(), lt === null)
          throw Error(s(349));
        (Fe & 124) !== 0 || Np(o, n, a);
      }
      c.memoizedState = a;
      var b = { value: a, getSnapshot: n };
      return c.queue = b, Fp(Op.bind(null, o, b, e), [
        e
      ]), o.flags |= 2048, ui(
        9,
        Bo(),
        Tp.bind(
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
      var e = sn(), n = lt.identifierPrefix;
      if (Je) {
        var a = fr, o = cr;
        a = (o & ~(1 << 32 - Be(o) - 1)).toString(32) + a, n = "«" + n + "R" + a, a = Lo++, 0 < a && (n += "H" + a.toString(32)), n += "»";
      } else
        a = Db++, n = "«" + n + "r" + a.toString(32) + "»";
      return e.memoizedState = n;
    },
    useHostTransitionStatus: Uc,
    useFormState: Pp,
    useActionState: Pp,
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
      return n.queue = a, n = Hc.bind(
        null,
        je,
        !0,
        a
      ), a.dispatch = n, [e, n];
    },
    useMemoCache: jc,
    useCacheRefresh: function() {
      return sn().memoizedState = Pb.bind(
        null,
        je
      );
    }
  }, om = {
    readContext: Gt,
    use: Io,
    useCallback: $p,
    useContext: Gt,
    useEffect: Zp,
    useImperativeHandle: Xp,
    useInsertionEffect: Gp,
    useLayoutEffect: Vp,
    useMemo: Jp,
    useReducer: Po,
    useRef: qp,
    useState: function() {
      return Po(pr);
    },
    useDebugValue: Ic,
    useDeferredValue: function(e, n) {
      var a = At();
      return Qp(
        a,
        et.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = Po(pr)[0], n = At().memoizedState;
      return [
        typeof e == "boolean" ? e : cs(e),
        n
      ];
    },
    useSyncExternalStore: Ap,
    useId: tm,
    useHostTransitionStatus: Uc,
    useFormState: Bp,
    useActionState: Bp,
    useOptimistic: function(e, n) {
      var a = At();
      return jp(a, et, e, n);
    },
    useMemoCache: jc,
    useCacheRefresh: nm
  }, Ub = {
    readContext: Gt,
    use: Io,
    useCallback: $p,
    useContext: Gt,
    useEffect: Zp,
    useImperativeHandle: Xp,
    useInsertionEffect: Gp,
    useLayoutEffect: Vp,
    useMemo: Jp,
    useReducer: Rc,
    useRef: qp,
    useState: function() {
      return Rc(pr);
    },
    useDebugValue: Ic,
    useDeferredValue: function(e, n) {
      var a = At();
      return et === null ? Pc(a, e, n) : Qp(
        a,
        et.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = Rc(pr)[0], n = At().memoizedState;
      return [
        typeof e == "boolean" ? e : cs(e),
        n
      ];
    },
    useSyncExternalStore: Ap,
    useId: tm,
    useHostTransitionStatus: Uc,
    useFormState: Hp,
    useActionState: Hp,
    useOptimistic: function(e, n) {
      var a = At();
      return et !== null ? jp(a, et, e, n) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: jc,
    useCacheRefresh: nm
  }, ci = null, hs = 0;
  function Fo(e) {
    var n = hs;
    return hs += 1, ci === null && (ci = []), yp(ci, e, n);
  }
  function ps(e, n) {
    n = n.props.ref, e.ref = n !== void 0 ? n : null;
  }
  function Zo(e, n) {
    throw n.$$typeof === _ ? Error(s(525)) : (e = Object.prototype.toString.call(n), Error(
      s(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e
      )
    ));
  }
  function lm(e) {
    var n = e._init;
    return n(e._payload);
  }
  function um(e) {
    function n(L, z) {
      if (e) {
        var H = L.deletions;
        H === null ? (L.deletions = [z], L.flags |= 16) : H.push(z);
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
    function b(L, z, H) {
      return L.index = H, e ? (H = L.alternate, H !== null ? (H = H.index, H < z ? (L.flags |= 67108866, z) : H) : (L.flags |= 67108866, z)) : (L.flags |= 1048576, z);
    }
    function A(L) {
      return e && L.alternate === null && (L.flags |= 67108866), L;
    }
    function O(L, z, H, K) {
      return z === null || z.tag !== 6 ? (z = lc(H, L.mode, K), z.return = L, z) : (z = c(z, H), z.return = L, z);
    }
    function D(L, z, H, K) {
      var de = H.type;
      return de === h ? Q(
        L,
        z,
        H.props.children,
        K,
        H.key
      ) : z !== null && (z.elementType === de || typeof de == "object" && de !== null && de.$$typeof === U && lm(de) === z.type) ? (z = c(z, H.props), ps(z, H), z.return = L, z) : (z = Ao(
        H.type,
        H.key,
        H.props,
        null,
        L.mode,
        K
      ), ps(z, H), z.return = L, z);
    }
    function q(L, z, H, K) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== H.containerInfo || z.stateNode.implementation !== H.implementation ? (z = uc(H, L.mode, K), z.return = L, z) : (z = c(z, H.children || []), z.return = L, z);
    }
    function Q(L, z, H, K, de) {
      return z === null || z.tag !== 7 ? (z = da(
        H,
        L.mode,
        K,
        de
      ), z.return = L, z) : (z = c(z, H), z.return = L, z);
    }
    function W(L, z, H) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return z = lc(
          "" + z,
          L.mode,
          H
        ), z.return = L, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case m:
            return H = Ao(
              z.type,
              z.key,
              z.props,
              null,
              L.mode,
              H
            ), ps(H, z), H.return = L, H;
          case y:
            return z = uc(
              z,
              L.mode,
              H
            ), z.return = L, z;
          case U:
            var K = z._init;
            return z = K(z._payload), W(L, z, H);
        }
        if (ue(z) || V(z))
          return z = da(
            z,
            L.mode,
            H,
            null
          ), z.return = L, z;
        if (typeof z.then == "function")
          return W(L, Fo(z), H);
        if (z.$$typeof === k)
          return W(
            L,
            ko(L, z),
            H
          );
        Zo(L, z);
      }
      return null;
    }
    function F(L, z, H, K) {
      var de = z !== null ? z.key : null;
      if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint")
        return de !== null ? null : O(L, z, "" + H, K);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case m:
            return H.key === de ? D(L, z, H, K) : null;
          case y:
            return H.key === de ? q(L, z, H, K) : null;
          case U:
            return de = H._init, H = de(H._payload), F(L, z, H, K);
        }
        if (ue(H) || V(H))
          return de !== null ? null : Q(L, z, H, K, null);
        if (typeof H.then == "function")
          return F(
            L,
            z,
            Fo(H),
            K
          );
        if (H.$$typeof === k)
          return F(
            L,
            z,
            ko(L, H),
            K
          );
        Zo(L, H);
      }
      return null;
    }
    function Z(L, z, H, K, de) {
      if (typeof K == "string" && K !== "" || typeof K == "number" || typeof K == "bigint")
        return L = L.get(H) || null, O(z, L, "" + K, de);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case m:
            return L = L.get(
              K.key === null ? H : K.key
            ) || null, D(z, L, K, de);
          case y:
            return L = L.get(
              K.key === null ? H : K.key
            ) || null, q(z, L, K, de);
          case U:
            var ze = K._init;
            return K = ze(K._payload), Z(
              L,
              z,
              H,
              K,
              de
            );
        }
        if (ue(K) || V(K))
          return L = L.get(H) || null, Q(z, L, K, de, null);
        if (typeof K.then == "function")
          return Z(
            L,
            z,
            H,
            Fo(K),
            de
          );
        if (K.$$typeof === k)
          return Z(
            L,
            z,
            H,
            ko(z, K),
            de
          );
        Zo(z, K);
      }
      return null;
    }
    function Ee(L, z, H, K) {
      for (var de = null, ze = null, ge = z, xe = z = 0, Pt = null; ge !== null && xe < H.length; xe++) {
        ge.index > xe ? (Pt = ge, ge = null) : Pt = ge.sibling;
        var Ye = F(
          L,
          ge,
          H[xe],
          K
        );
        if (Ye === null) {
          ge === null && (ge = Pt);
          break;
        }
        e && ge && Ye.alternate === null && n(L, ge), z = b(Ye, z, xe), ze === null ? de = Ye : ze.sibling = Ye, ze = Ye, ge = Pt;
      }
      if (xe === H.length)
        return a(L, ge), Je && pa(L, xe), de;
      if (ge === null) {
        for (; xe < H.length; xe++)
          ge = W(L, H[xe], K), ge !== null && (z = b(
            ge,
            z,
            xe
          ), ze === null ? de = ge : ze.sibling = ge, ze = ge);
        return Je && pa(L, xe), de;
      }
      for (ge = o(ge); xe < H.length; xe++)
        Pt = Z(
          ge,
          L,
          xe,
          H[xe],
          K
        ), Pt !== null && (e && Pt.alternate !== null && ge.delete(
          Pt.key === null ? xe : Pt.key
        ), z = b(
          Pt,
          z,
          xe
        ), ze === null ? de = Pt : ze.sibling = Pt, ze = Pt);
      return e && ge.forEach(function(Kr) {
        return n(L, Kr);
      }), Je && pa(L, xe), de;
    }
    function Se(L, z, H, K) {
      if (H == null) throw Error(s(151));
      for (var de = null, ze = null, ge = z, xe = z = 0, Pt = null, Ye = H.next(); ge !== null && !Ye.done; xe++, Ye = H.next()) {
        ge.index > xe ? (Pt = ge, ge = null) : Pt = ge.sibling;
        var Kr = F(L, ge, Ye.value, K);
        if (Kr === null) {
          ge === null && (ge = Pt);
          break;
        }
        e && ge && Kr.alternate === null && n(L, ge), z = b(Kr, z, xe), ze === null ? de = Kr : ze.sibling = Kr, ze = Kr, ge = Pt;
      }
      if (Ye.done)
        return a(L, ge), Je && pa(L, xe), de;
      if (ge === null) {
        for (; !Ye.done; xe++, Ye = H.next())
          Ye = W(L, Ye.value, K), Ye !== null && (z = b(Ye, z, xe), ze === null ? de = Ye : ze.sibling = Ye, ze = Ye);
        return Je && pa(L, xe), de;
      }
      for (ge = o(ge); !Ye.done; xe++, Ye = H.next())
        Ye = Z(ge, L, xe, Ye.value, K), Ye !== null && (e && Ye.alternate !== null && ge.delete(Ye.key === null ? xe : Ye.key), z = b(Ye, z, xe), ze === null ? de = Ye : ze.sibling = Ye, ze = Ye);
      return e && ge.forEach(function(H_) {
        return n(L, H_);
      }), Je && pa(L, xe), de;
    }
    function nt(L, z, H, K) {
      if (typeof H == "object" && H !== null && H.type === h && H.key === null && (H = H.props.children), typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case m:
            e: {
              for (var de = H.key; z !== null; ) {
                if (z.key === de) {
                  if (de = H.type, de === h) {
                    if (z.tag === 7) {
                      a(
                        L,
                        z.sibling
                      ), K = c(
                        z,
                        H.props.children
                      ), K.return = L, L = K;
                      break e;
                    }
                  } else if (z.elementType === de || typeof de == "object" && de !== null && de.$$typeof === U && lm(de) === z.type) {
                    a(
                      L,
                      z.sibling
                    ), K = c(z, H.props), ps(K, H), K.return = L, L = K;
                    break e;
                  }
                  a(L, z);
                  break;
                } else n(L, z);
                z = z.sibling;
              }
              H.type === h ? (K = da(
                H.props.children,
                L.mode,
                K,
                H.key
              ), K.return = L, L = K) : (K = Ao(
                H.type,
                H.key,
                H.props,
                null,
                L.mode,
                K
              ), ps(K, H), K.return = L, L = K);
            }
            return A(L);
          case y:
            e: {
              for (de = H.key; z !== null; ) {
                if (z.key === de)
                  if (z.tag === 4 && z.stateNode.containerInfo === H.containerInfo && z.stateNode.implementation === H.implementation) {
                    a(
                      L,
                      z.sibling
                    ), K = c(z, H.children || []), K.return = L, L = K;
                    break e;
                  } else {
                    a(L, z);
                    break;
                  }
                else n(L, z);
                z = z.sibling;
              }
              K = uc(H, L.mode, K), K.return = L, L = K;
            }
            return A(L);
          case U:
            return de = H._init, H = de(H._payload), nt(
              L,
              z,
              H,
              K
            );
        }
        if (ue(H))
          return Ee(
            L,
            z,
            H,
            K
          );
        if (V(H)) {
          if (de = V(H), typeof de != "function") throw Error(s(150));
          return H = de.call(H), Se(
            L,
            z,
            H,
            K
          );
        }
        if (typeof H.then == "function")
          return nt(
            L,
            z,
            Fo(H),
            K
          );
        if (H.$$typeof === k)
          return nt(
            L,
            z,
            ko(L, H),
            K
          );
        Zo(L, H);
      }
      return typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint" ? (H = "" + H, z !== null && z.tag === 6 ? (a(L, z.sibling), K = c(z, H), K.return = L, L = K) : (a(L, z), K = lc(H, L.mode, K), K.return = L, L = K), A(L)) : a(L, z);
    }
    return function(L, z, H, K) {
      try {
        hs = 0;
        var de = nt(
          L,
          z,
          H,
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
  var fi = um(!0), cm = um(!1), zn = J(null), Wn = null;
  function Ir(e) {
    var n = e.alternate;
    ie(jt, jt.current & 1), ie(zn, e), Wn === null && (n === null || si.current !== null || n.memoizedState !== null) && (Wn = e);
  }
  function fm(e) {
    if (e.tag === 22) {
      if (ie(jt, jt.current), ie(zn, e), Wn === null) {
        var n = e.alternate;
        n !== null && n.memoizedState !== null && (Wn = e);
      }
    } else Pr();
  }
  function Pr() {
    ie(jt, jt.current), ie(zn, zn.current);
  }
  function mr(e) {
    re(zn), Wn === e && (Wn = null), re(jt);
  }
  var jt = J(0);
  function Go(e) {
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
  function qc(e, n, a, o) {
    n = e.memoizedState, a = a(o, n), a = a == null ? n : g({}, n, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var Fc = {
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
  function dm(e, n, a, o, c, b, A) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, b, A) : n.prototype && n.prototype.isPureReactComponent ? !Ji(a, o) || !Ji(c, b) : !0;
  }
  function hm(e, n, a, o) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(a, o), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(a, o), n.state !== e && Fc.enqueueReplaceState(n, n.state, null);
  }
  function Sa(e, n) {
    var a = n;
    if ("ref" in n) {
      a = {};
      for (var o in n)
        o !== "ref" && (a[o] = n[o]);
    }
    if (e = e.defaultProps) {
      a === n && (a = g({}, a));
      for (var c in e)
        a[c] === void 0 && (a[c] = e[c]);
    }
    return a;
  }
  var Vo = typeof reportError == "function" ? reportError : function(e) {
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
  function pm(e) {
    Vo(e);
  }
  function mm(e) {
    console.error(e);
  }
  function gm(e) {
    Vo(e);
  }
  function Yo(e, n) {
    try {
      var a = e.onUncaughtError;
      a(n.value, { componentStack: n.stack });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function vm(e, n, a) {
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
  function Zc(e, n, a) {
    return a = Rr(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      Yo(e, n);
    }, a;
  }
  function ym(e) {
    return e = Rr(e), e.tag = 3, e;
  }
  function bm(e, n, a, o) {
    var c = a.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var b = o.value;
      e.payload = function() {
        return c(b);
      }, e.callback = function() {
        vm(n, a, o);
      };
    }
    var A = a.stateNode;
    A !== null && typeof A.componentDidCatch == "function" && (e.callback = function() {
      vm(n, a, o), typeof c != "function" && (Zr === null ? Zr = /* @__PURE__ */ new Set([this]) : Zr.add(this));
      var O = o.stack;
      this.componentDidCatch(o.value, {
        componentStack: O !== null ? O : ""
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
            return Wn === null ? mf() : a.alternate === null && bt === 0 && (bt = 3), a.flags &= -257, a.flags |= 65536, a.lanes = c, o === bc ? a.flags |= 16384 : (n = a.updateQueue, n === null ? a.updateQueue = /* @__PURE__ */ new Set([o]) : n.add(o), vf(e, o, c)), !1;
          case 22:
            return a.flags |= 65536, o === bc ? a.flags |= 16384 : (n = a.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([o])
            }, a.updateQueue = n) : (a = n.retryQueue, a === null ? n.retryQueue = /* @__PURE__ */ new Set([o]) : a.add(o)), vf(e, o, c)), !1;
        }
        throw Error(s(435, a.tag));
      }
      return vf(e, o, c), mf(), !1;
    }
    if (Je)
      return n = zn.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = c, o !== dc && (e = Error(s(422), { cause: o }), es(Mn(e, a)))) : (o !== dc && (n = Error(s(423), {
        cause: o
      }), es(
        Mn(n, a)
      )), e = e.current.alternate, e.flags |= 65536, c &= -c, e.lanes |= c, o = Mn(o, a), c = Zc(
        e.stateNode,
        o,
        c
      ), xc(e, c), bt !== 4 && (bt = 2)), !1;
    var b = Error(s(520), { cause: o });
    if (b = Mn(b, a), Ss === null ? Ss = [b] : Ss.push(b), bt !== 4 && (bt = 2), n === null) return !0;
    o = Mn(o, a), a = n;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = c & -c, a.lanes |= e, e = Zc(a.stateNode, o, e), xc(a, e), !1;
        case 1:
          if (n = a.type, b = a.stateNode, (a.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (Zr === null || !Zr.has(b))))
            return a.flags |= 65536, c &= -c, a.lanes |= c, c = ym(c), bm(
              c,
              e,
              a,
              o
            ), xc(a, c), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var _m = Error(s(461)), Lt = !1;
  function Bt(e, n, a, o) {
    n.child = e === null ? cm(n, null, a, o) : fi(
      n,
      e.child,
      a,
      o
    );
  }
  function Sm(e, n, a, o, c) {
    a = a.render;
    var b = n.ref;
    if ("ref" in o) {
      var A = {};
      for (var O in o)
        O !== "ref" && (A[O] = o[O]);
    } else A = o;
    return ya(n), o = Nc(
      e,
      n,
      a,
      A,
      b,
      c
    ), O = Tc(), e !== null && !Lt ? (Oc(e, n, c), gr(e, n, c)) : (Je && O && cc(n), n.flags |= 1, Bt(e, n, o, c), n.child);
  }
  function xm(e, n, a, o, c) {
    if (e === null) {
      var b = a.type;
      return typeof b == "function" && !oc(b) && b.defaultProps === void 0 && a.compare === null ? (n.tag = 15, n.type = b, Em(
        e,
        n,
        b,
        o,
        c
      )) : (e = Ao(
        a.type,
        null,
        o,
        n,
        n.mode,
        c
      ), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (b = e.child, !Kc(e, c)) {
      var A = b.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Ji, a(A, o) && e.ref === n.ref)
        return gr(e, n, c);
    }
    return n.flags |= 1, e = ur(b, o), e.ref = n.ref, e.return = n, n.child = e;
  }
  function Em(e, n, a, o, c) {
    if (e !== null) {
      var b = e.memoizedProps;
      if (Ji(b, o) && e.ref === n.ref)
        if (Lt = !1, n.pendingProps = o = b, Kc(e, c))
          (e.flags & 131072) !== 0 && (Lt = !0);
        else
          return n.lanes = e.lanes, gr(e, n, c);
    }
    return Gc(
      e,
      n,
      a,
      o,
      c
    );
  }
  function wm(e, n, a) {
    var o = n.pendingProps, c = o.children, b = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (o = b !== null ? b.baseLanes | a : a, e !== null) {
          for (c = n.child = e.child, b = 0; c !== null; )
            b = b | c.lanes | c.childLanes, c = c.sibling;
          n.childLanes = b & ~o;
        } else n.childLanes = 0, n.child = null;
        return Cm(
          e,
          n,
          o,
          a
        );
      }
      if ((a & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Mo(
          n,
          b !== null ? b.cachePool : null
        ), b !== null ? Ep(n, b) : wc(), fm(n);
      else
        return n.lanes = n.childLanes = 536870912, Cm(
          e,
          n,
          b !== null ? b.baseLanes | a : a,
          a
        );
    } else
      b !== null ? (Mo(n, b.cachePool), Ep(n, b), Pr(), n.memoizedState = null) : (e !== null && Mo(n, null), wc(), Pr());
    return Bt(e, n, c, a), n.child;
  }
  function Cm(e, n, a, o) {
    var c = yc();
    return c = c === null ? null : { parent: Mt._currentValue, pool: c }, n.memoizedState = {
      baseLanes: a,
      cachePool: c
    }, e !== null && Mo(n, null), wc(), fm(n), e !== null && ts(e, n, o, !0), null;
  }
  function Xo(e, n) {
    var a = n.ref;
    if (a === null)
      e !== null && e.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(s(284));
      (e === null || e.ref !== a) && (n.flags |= 4194816);
    }
  }
  function Gc(e, n, a, o, c) {
    return ya(n), a = Nc(
      e,
      n,
      a,
      o,
      void 0,
      c
    ), o = Tc(), e !== null && !Lt ? (Oc(e, n, c), gr(e, n, c)) : (Je && o && cc(n), n.flags |= 1, Bt(e, n, a, c), n.child);
  }
  function Am(e, n, a, o, c, b) {
    return ya(n), n.updateQueue = null, a = Cp(
      n,
      o,
      a,
      c
    ), wp(e), o = Tc(), e !== null && !Lt ? (Oc(e, n, b), gr(e, n, b)) : (Je && o && cc(n), n.flags |= 1, Bt(e, n, a, b), n.child);
  }
  function Nm(e, n, a, o, c) {
    if (ya(n), n.stateNode === null) {
      var b = ti, A = a.contextType;
      typeof A == "object" && A !== null && (b = Gt(A)), b = new a(o, b), n.memoizedState = b.state !== null && b.state !== void 0 ? b.state : null, b.updater = Fc, n.stateNode = b, b._reactInternals = n, b = n.stateNode, b.props = o, b.state = n.memoizedState, b.refs = {}, _c(n), A = a.contextType, b.context = typeof A == "object" && A !== null ? Gt(A) : ti, b.state = n.memoizedState, A = a.getDerivedStateFromProps, typeof A == "function" && (qc(
        n,
        a,
        A,
        o
      ), b.state = n.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof b.getSnapshotBeforeUpdate == "function" || typeof b.UNSAFE_componentWillMount != "function" && typeof b.componentWillMount != "function" || (A = b.state, typeof b.componentWillMount == "function" && b.componentWillMount(), typeof b.UNSAFE_componentWillMount == "function" && b.UNSAFE_componentWillMount(), A !== b.state && Fc.enqueueReplaceState(b, b.state, null), ls(n, o, b, c), os(), b.state = n.memoizedState), typeof b.componentDidMount == "function" && (n.flags |= 4194308), o = !0;
    } else if (e === null) {
      b = n.stateNode;
      var O = n.memoizedProps, D = Sa(a, O);
      b.props = D;
      var q = b.context, Q = a.contextType;
      A = ti, typeof Q == "object" && Q !== null && (A = Gt(Q));
      var W = a.getDerivedStateFromProps;
      Q = typeof W == "function" || typeof b.getSnapshotBeforeUpdate == "function", O = n.pendingProps !== O, Q || typeof b.UNSAFE_componentWillReceiveProps != "function" && typeof b.componentWillReceiveProps != "function" || (O || q !== A) && hm(
        n,
        b,
        o,
        A
      ), Dr = !1;
      var F = n.memoizedState;
      b.state = F, ls(n, o, b, c), os(), q = n.memoizedState, O || F !== q || Dr ? (typeof W == "function" && (qc(
        n,
        a,
        W,
        o
      ), q = n.memoizedState), (D = Dr || dm(
        n,
        a,
        D,
        o,
        F,
        q,
        A
      )) ? (Q || typeof b.UNSAFE_componentWillMount != "function" && typeof b.componentWillMount != "function" || (typeof b.componentWillMount == "function" && b.componentWillMount(), typeof b.UNSAFE_componentWillMount == "function" && b.UNSAFE_componentWillMount()), typeof b.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof b.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = o, n.memoizedState = q), b.props = o, b.state = q, b.context = A, o = D) : (typeof b.componentDidMount == "function" && (n.flags |= 4194308), o = !1);
    } else {
      b = n.stateNode, Sc(e, n), A = n.memoizedProps, Q = Sa(a, A), b.props = Q, W = n.pendingProps, F = b.context, q = a.contextType, D = ti, typeof q == "object" && q !== null && (D = Gt(q)), O = a.getDerivedStateFromProps, (q = typeof O == "function" || typeof b.getSnapshotBeforeUpdate == "function") || typeof b.UNSAFE_componentWillReceiveProps != "function" && typeof b.componentWillReceiveProps != "function" || (A !== W || F !== D) && hm(
        n,
        b,
        o,
        D
      ), Dr = !1, F = n.memoizedState, b.state = F, ls(n, o, b, c), os();
      var Z = n.memoizedState;
      A !== W || F !== Z || Dr || e !== null && e.dependencies !== null && Oo(e.dependencies) ? (typeof O == "function" && (qc(
        n,
        a,
        O,
        o
      ), Z = n.memoizedState), (Q = Dr || dm(
        n,
        a,
        Q,
        o,
        F,
        Z,
        D
      ) || e !== null && e.dependencies !== null && Oo(e.dependencies)) ? (q || typeof b.UNSAFE_componentWillUpdate != "function" && typeof b.componentWillUpdate != "function" || (typeof b.componentWillUpdate == "function" && b.componentWillUpdate(o, Z, D), typeof b.UNSAFE_componentWillUpdate == "function" && b.UNSAFE_componentWillUpdate(
        o,
        Z,
        D
      )), typeof b.componentDidUpdate == "function" && (n.flags |= 4), typeof b.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof b.componentDidUpdate != "function" || A === e.memoizedProps && F === e.memoizedState || (n.flags |= 4), typeof b.getSnapshotBeforeUpdate != "function" || A === e.memoizedProps && F === e.memoizedState || (n.flags |= 1024), n.memoizedProps = o, n.memoizedState = Z), b.props = o, b.state = Z, b.context = D, o = Q) : (typeof b.componentDidUpdate != "function" || A === e.memoizedProps && F === e.memoizedState || (n.flags |= 4), typeof b.getSnapshotBeforeUpdate != "function" || A === e.memoizedProps && F === e.memoizedState || (n.flags |= 1024), o = !1);
    }
    return b = o, Xo(e, n), o = (n.flags & 128) !== 0, b || o ? (b = n.stateNode, a = o && typeof a.getDerivedStateFromError != "function" ? null : b.render(), n.flags |= 1, e !== null && o ? (n.child = fi(
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
  function Tm(e, n, a, o) {
    return Wi(), n.flags |= 256, Bt(e, n, a, o), n.child;
  }
  var Vc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Yc(e) {
    return { baseLanes: e, cachePool: mp() };
  }
  function Xc(e, n, a) {
    return e = e !== null ? e.childLanes & ~a : 0, n && (e |= Ln), e;
  }
  function Om(e, n, a) {
    var o = n.pendingProps, c = !1, b = (n.flags & 128) !== 0, A;
    if ((A = b) || (A = e !== null && e.memoizedState === null ? !1 : (jt.current & 2) !== 0), A && (c = !0, n.flags &= -129), A = (n.flags & 32) !== 0, n.flags &= -33, e === null) {
      if (Je) {
        if (c ? Ir(n) : Pr(), Je) {
          var O = yt, D;
          if (D = O) {
            e: {
              for (D = O, O = Kn; D.nodeType !== 8; ) {
                if (!O) {
                  O = null;
                  break e;
                }
                if (D = Gn(
                  D.nextSibling
                ), D === null) {
                  O = null;
                  break e;
                }
              }
              O = D;
            }
            O !== null ? (n.memoizedState = {
              dehydrated: O,
              treeContext: ha !== null ? { id: cr, overflow: fr } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, D = vn(
              18,
              null,
              null,
              0
            ), D.stateNode = O, D.return = n, n.child = D, Qt = n, yt = null, D = !0) : D = !1;
          }
          D || ga(n);
        }
        if (O = n.memoizedState, O !== null && (O = O.dehydrated, O !== null))
          return jf(O) ? n.lanes = 32 : n.lanes = 536870912, null;
        mr(n);
      }
      return O = o.children, o = o.fallback, c ? (Pr(), c = n.mode, O = $o(
        { mode: "hidden", children: O },
        c
      ), o = da(
        o,
        c,
        a,
        null
      ), O.return = n, o.return = n, O.sibling = o, n.child = O, c = n.child, c.memoizedState = Yc(a), c.childLanes = Xc(
        e,
        A,
        a
      ), n.memoizedState = Vc, o) : (Ir(n), $c(n, O));
    }
    if (D = e.memoizedState, D !== null && (O = D.dehydrated, O !== null)) {
      if (b)
        n.flags & 256 ? (Ir(n), n.flags &= -257, n = Jc(
          e,
          n,
          a
        )) : n.memoizedState !== null ? (Pr(), n.child = e.child, n.flags |= 128, n = null) : (Pr(), c = o.fallback, O = n.mode, o = $o(
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
        ), o = n.child, o.memoizedState = Yc(a), o.childLanes = Xc(
          e,
          A,
          a
        ), n.memoizedState = Vc, n = c);
      else if (Ir(n), jf(O)) {
        if (A = O.nextSibling && O.nextSibling.dataset, A) var q = A.dgst;
        A = q, o = Error(s(419)), o.stack = "", o.digest = A, es({ value: o, source: null, stack: null }), n = Jc(
          e,
          n,
          a
        );
      } else if (Lt || ts(e, n, a, !1), A = (a & e.childLanes) !== 0, Lt || A) {
        if (A = lt, A !== null && (o = a & -a, o = (o & 42) !== 0 ? 1 : ju(o), o = (o & (A.suspendedLanes | a)) !== 0 ? 0 : o, o !== 0 && o !== D.retryLane))
          throw D.retryLane = o, ei(e, o), xn(A, e, o), _m;
        O.data === "$?" || mf(), n = Jc(
          e,
          n,
          a
        );
      } else
        O.data === "$?" ? (n.flags |= 192, n.child = e.child, n = null) : (e = D.treeContext, yt = Gn(
          O.nextSibling
        ), Qt = n, Je = !0, ma = null, Kn = !1, e !== null && (Dn[Rn++] = cr, Dn[Rn++] = fr, Dn[Rn++] = ha, cr = e.id, fr = e.overflow, ha = n), n = $c(
          n,
          o.children
        ), n.flags |= 4096);
      return n;
    }
    return c ? (Pr(), c = o.fallback, O = n.mode, D = e.child, q = D.sibling, o = ur(D, {
      mode: "hidden",
      children: o.children
    }), o.subtreeFlags = D.subtreeFlags & 65011712, q !== null ? c = ur(q, c) : (c = da(
      c,
      O,
      a,
      null
    ), c.flags |= 2), c.return = n, o.return = n, o.sibling = c, n.child = o, o = c, c = n.child, O = e.child.memoizedState, O === null ? O = Yc(a) : (D = O.cachePool, D !== null ? (q = Mt._currentValue, D = D.parent !== q ? { parent: q, pool: q } : D) : D = mp(), O = {
      baseLanes: O.baseLanes | a,
      cachePool: D
    }), c.memoizedState = O, c.childLanes = Xc(
      e,
      A,
      a
    ), n.memoizedState = Vc, o) : (Ir(n), a = e.child, e = a.sibling, a = ur(a, {
      mode: "visible",
      children: o.children
    }), a.return = n, a.sibling = null, e !== null && (A = n.deletions, A === null ? (n.deletions = [e], n.flags |= 16) : A.push(e)), n.child = a, n.memoizedState = null, a);
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
  function Jc(e, n, a) {
    return fi(n, e.child, null, a), e = $c(
      n,
      n.pendingProps.children
    ), e.flags |= 2, n.memoizedState = null, e;
  }
  function km(e, n, a) {
    e.lanes |= n;
    var o = e.alternate;
    o !== null && (o.lanes |= n), pc(e.return, n, a);
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
  function Mm(e, n, a) {
    var o = n.pendingProps, c = o.revealOrder, b = o.tail;
    if (Bt(e, n, o.children, a), o = jt.current, (o & 2) !== 0)
      o = o & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = n.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && km(e, a, n);
          else if (e.tag === 19)
            km(e, a, n);
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
    switch (ie(jt, o), c) {
      case "forwards":
        for (a = n.child, c = null; a !== null; )
          e = a.alternate, e !== null && Go(e) === null && (c = a), a = a.sibling;
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
          if (e = c.alternate, e !== null && Go(e) === null) {
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
  function Kc(e, n) {
    return (e.lanes & n) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Oo(e)));
  }
  function qb(e, n, a) {
    switch (n.tag) {
      case 3:
        ye(n, n.stateNode.containerInfo), jr(n, Mt, e.memoizedState.cache), Wi();
        break;
      case 27:
      case 5:
        ct(n);
        break;
      case 4:
        ye(n, n.stateNode.containerInfo);
        break;
      case 10:
        jr(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 13:
        var o = n.memoizedState;
        if (o !== null)
          return o.dehydrated !== null ? (Ir(n), n.flags |= 128, null) : (a & n.child.childLanes) !== 0 ? Om(e, n, a) : (Ir(n), e = gr(
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
            return Mm(
              e,
              n,
              a
            );
          n.flags |= 128;
        }
        if (c = n.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), ie(jt, jt.current), o) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, wm(e, n, a);
      case 24:
        jr(n, Mt, e.memoizedState.cache);
    }
    return gr(e, n, a);
  }
  function jm(e, n, a) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps)
        Lt = !0;
      else {
        if (!Kc(e, a) && (n.flags & 128) === 0)
          return Lt = !1, qb(
            e,
            n,
            a
          );
        Lt = (e.flags & 131072) !== 0;
      }
    else
      Lt = !1, Je && (n.flags & 1048576) !== 0 && lp(n, To, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          e = n.pendingProps;
          var o = n.elementType, c = o._init;
          if (o = c(o._payload), n.type = o, typeof o == "function")
            oc(o) ? (e = Sa(o, e), n.tag = 1, n = Nm(
              null,
              n,
              o,
              e,
              a
            )) : (n.tag = 0, n = Gc(
              null,
              n,
              o,
              e,
              a
            ));
          else {
            if (o != null) {
              if (c = o.$$typeof, c === E) {
                n.tag = 11, n = Sm(
                  null,
                  n,
                  o,
                  e,
                  a
                );
                break e;
              } else if (c === j) {
                n.tag = 14, n = xm(
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
        return Gc(
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
        ), Nm(
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
          c = b.element, Sc(e, n), ls(n, o, null, a);
          var A = n.memoizedState;
          if (o = A.cache, jr(n, Mt, o), o !== b.cache && mc(
            n,
            [Mt],
            a,
            !0
          ), os(), o = A.element, b.isDehydrated)
            if (b = {
              element: o,
              isDehydrated: !1,
              cache: A.cache
            }, n.updateQueue.baseState = b, n.memoizedState = b, n.flags & 256) {
              n = Tm(
                e,
                n,
                o,
                a
              );
              break e;
            } else if (o !== c) {
              c = Mn(
                Error(s(424)),
                n
              ), es(c), n = Tm(
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
              for (yt = Gn(e.firstChild), Qt = n, Je = !0, ma = null, Kn = !0, a = cm(
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
        return Xo(e, n), e === null ? (a = Lg(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = a : Je || (a = n.type, e = n.pendingProps, o = ul(
          $.current
        ).createElement(a), o[Zt] = n, o[rn] = e, Ht(o, a, e), zt(o), n.stateNode = o) : n.memoizedState = Lg(
          n.type,
          e.memoizedProps,
          n.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return ct(n), e === null && Je && (o = n.stateNode = Dg(
          n.type,
          n.pendingProps,
          $.current
        ), Qt = n, Kn = !0, c = yt, Yr(n.type) ? (Df = c, yt = Gn(
          o.firstChild
        )) : yt = c), Bt(
          e,
          n,
          n.pendingProps.children,
          a
        ), Xo(e, n), e === null && (n.flags |= 4194304), n.child;
      case 5:
        return e === null && Je && ((c = o = yt) && (o = g_(
          o,
          n.type,
          n.pendingProps,
          Kn
        ), o !== null ? (n.stateNode = o, Qt = n, yt = Gn(
          o.firstChild
        ), Kn = !1, c = !0) : c = !1), c || ga(n)), ct(n), c = n.type, b = n.pendingProps, A = e !== null ? e.memoizedProps : null, o = b.children, Of(c, b) ? o = null : A !== null && Of(c, A) && (n.flags |= 32), n.memoizedState !== null && (c = Nc(
          e,
          n,
          Rb,
          null,
          null,
          a
        ), ks._currentValue = c), Xo(e, n), Bt(e, n, o, a), n.child;
      case 6:
        return e === null && Je && ((e = a = yt) && (a = v_(
          a,
          n.pendingProps,
          Kn
        ), a !== null ? (n.stateNode = a, Qt = n, yt = null, e = !0) : e = !1), e || ga(n)), null;
      case 13:
        return Om(e, n, a);
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
        return Sm(
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
        return o = n.pendingProps, jr(n, n.type, o.value), Bt(
          e,
          n,
          o.children,
          a
        ), n.child;
      case 9:
        return c = n.type._context, o = n.pendingProps.children, ya(n), c = Gt(c), o = o(c), n.flags |= 1, Bt(e, n, o, a), n.child;
      case 14:
        return xm(
          e,
          n,
          n.type,
          n.pendingProps,
          a
        );
      case 15:
        return Em(
          e,
          n,
          n.type,
          n.pendingProps,
          a
        );
      case 19:
        return Mm(e, n, a);
      case 31:
        return o = n.pendingProps, a = n.mode, o = {
          mode: o.mode,
          children: o.children
        }, e === null ? (a = $o(
          o,
          a
        ), a.ref = n.ref, n.child = a, a.return = n, n = a) : (a = ur(e.child, o), a.ref = n.ref, n.child = a, a.return = n, n = a), n;
      case 22:
        return wm(e, n, a);
      case 24:
        return ya(n), o = Gt(Mt), e === null ? (c = yc(), c === null && (c = lt, b = gc(), c.pooledCache = b, b.refCount++, b !== null && (c.pooledCacheLanes |= a), c = b), n.memoizedState = {
          parent: o,
          cache: c
        }, _c(n), jr(n, Mt, c)) : ((e.lanes & a) !== 0 && (Sc(e, n), ls(n, null, null, a), os()), c = e.memoizedState, b = n.memoizedState, c.parent !== o ? (c = { parent: o, cache: o }, n.memoizedState = c, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = c), jr(n, Mt, o)) : (o = b.cache, jr(n, Mt, o), o !== c.cache && mc(
          n,
          [Mt],
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
  function Dm(e, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Hg(n)) {
      if (n = zn.current, n !== null && ((Fe & 4194048) === Fe ? Wn !== null : (Fe & 62914560) !== Fe && (Fe & 536870912) === 0 || n !== Wn))
        throw is = bc, gp;
      e.flags |= 8192;
    }
  }
  function Jo(e, n) {
    n !== null && (e.flags |= 4), e.flags & 16384 && (n = e.tag !== 22 ? fh() : 536870912, e.lanes |= n, mi |= n);
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
  function Fb(e, n, a) {
    var o = n.pendingProps;
    switch (fc(n), n.tag) {
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
        return a = n.stateNode, o = null, e !== null && (o = e.memoizedState.cache), n.memoizedState.cache !== o && (n.flags |= 2048), hr(Mt), Xe(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Ki(n) ? vr(n) : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, fp())), mt(n), null;
      case 26:
        return a = n.memoizedState, e === null ? (vr(n), a !== null ? (mt(n), Dm(n, a)) : (mt(n), n.flags &= -16777217)) : a ? a !== e.memoizedState ? (vr(n), mt(n), Dm(n, a)) : (mt(n), n.flags &= -16777217) : (e.memoizedProps !== o && vr(n), mt(n), n.flags &= -16777217), null;
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
          e = se.current, Ki(n) ? up(n) : (e = Dg(c, o, a), n.stateNode = e, vr(n));
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
            up(n);
          else {
            switch (c = ul(
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
          if (e = $.current, Ki(n)) {
            if (e = n.stateNode, a = n.memoizedProps, o = null, c = Qt, c !== null)
              switch (c.tag) {
                case 27:
                case 5:
                  o = c.memoizedProps;
              }
            e[Zt] = n, e = !!(e.nodeValue === a || o !== null && o.suppressHydrationWarning === !0 || Ag(e.nodeValue, a)), e || ga(n);
          } else
            e = ul(e).createTextNode(
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
            c = fp(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = c), c = !0;
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
        return a !== e && a && (n.child.flags |= 8192), Jo(n, n.updateQueue), mt(n), null;
      case 4:
        return Xe(), e === null && wf(n.stateNode.containerInfo), mt(n), null;
      case 10:
        return hr(n.type), mt(n), null;
      case 19:
        if (re(jt), c = n.memoizedState, c === null) return mt(n), null;
        if (o = (n.flags & 128) !== 0, b = c.rendering, b === null)
          if (o) ms(c, !1);
          else {
            if (bt !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = n.child; e !== null; ) {
                if (b = Go(e), b !== null) {
                  for (n.flags |= 128, ms(c, !1), e = b.updateQueue, n.updateQueue = e, Jo(n, e), n.subtreeFlags = 0, e = a, a = n.child; a !== null; )
                    op(a, e), a = a.sibling;
                  return ie(
                    jt,
                    jt.current & 1 | 2
                  ), n.child;
                }
                e = e.sibling;
              }
            c.tail !== null && $e() > Wo && (n.flags |= 128, o = !0, ms(c, !1), n.lanes = 4194304);
          }
        else {
          if (!o)
            if (e = Go(b), e !== null) {
              if (n.flags |= 128, o = !0, e = e.updateQueue, n.updateQueue = e, Jo(n, e), ms(c, !0), c.tail === null && c.tailMode === "hidden" && !b.alternate && !Je)
                return mt(n), null;
            } else
              2 * $e() - c.renderingStartTime > Wo && a !== 536870912 && (n.flags |= 128, o = !0, ms(c, !1), n.lanes = 4194304);
          c.isBackwards ? (b.sibling = n.child, n.child = b) : (e = c.last, e !== null ? e.sibling = b : n.child = b, c.last = b);
        }
        return c.tail !== null ? (n = c.tail, c.rendering = n, c.tail = n.sibling, c.renderingStartTime = $e(), n.sibling = null, e = jt.current, ie(jt, o ? e & 1 | 2 : e & 1), n) : (mt(n), null);
      case 22:
      case 23:
        return mr(n), Cc(), o = n.memoizedState !== null, e !== null ? e.memoizedState !== null !== o && (n.flags |= 8192) : o && (n.flags |= 8192), o ? (a & 536870912) !== 0 && (n.flags & 128) === 0 && (mt(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : mt(n), a = n.updateQueue, a !== null && Jo(n, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), o = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (o = n.memoizedState.cachePool.pool), o !== a && (n.flags |= 2048), e !== null && re(ba), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), n.memoizedState.cache !== a && (n.flags |= 2048), hr(Mt), mt(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, n.tag));
  }
  function Zb(e, n) {
    switch (fc(n), n.tag) {
      case 1:
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return hr(Mt), Xe(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
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
        return re(jt), null;
      case 4:
        return Xe(), null;
      case 10:
        return hr(n.type), null;
      case 22:
      case 23:
        return mr(n), Cc(), e !== null && re(ba), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 24:
        return hr(Mt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Rm(e, n) {
    switch (fc(n), n.tag) {
      case 3:
        hr(Mt), Xe();
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
        re(jt);
        break;
      case 10:
        hr(n.type);
        break;
      case 22:
      case 23:
        mr(n), Cc(), e !== null && re(ba);
        break;
      case 24:
        hr(Mt);
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
            var b = a.create, A = a.inst;
            o = b(), A.destroy = o;
          }
          a = a.next;
        } while (a !== c);
      }
    } catch (O) {
      at(n, n.return, O);
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
            var A = o.inst, O = A.destroy;
            if (O !== void 0) {
              A.destroy = void 0, c = n;
              var D = a, q = O;
              try {
                q();
              } catch (Q) {
                at(
                  c,
                  D,
                  Q
                );
              }
            }
          }
          o = o.next;
        } while (o !== b);
      }
    } catch (Q) {
      at(n, n.return, Q);
    }
  }
  function zm(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var a = e.stateNode;
      try {
        xp(n, a);
      } catch (o) {
        at(e, e.return, o);
      }
    }
  }
  function Lm(e, n, a) {
    a.props = Sa(
      e.type,
      e.memoizedProps
    ), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (o) {
      at(e, n, o);
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
      at(e, n, c);
    }
  }
  function er(e, n) {
    var a = e.ref, o = e.refCleanup;
    if (a !== null)
      if (typeof o == "function")
        try {
          o();
        } catch (c) {
          at(e, n, c);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (c) {
          at(e, n, c);
        }
      else a.current = null;
  }
  function Im(e) {
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
      at(e, e.return, c);
    }
  }
  function Wc(e, n, a) {
    try {
      var o = e.stateNode;
      f_(o, e.type, a, n), o[rn] = n;
    } catch (c) {
      at(e, e.return, c);
    }
  }
  function Pm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Yr(e.type) || e.tag === 4;
  }
  function ef(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Pm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Yr(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function tf(e, n, a) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, n ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, n) : (n = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, n.appendChild(e), a = a._reactRootContainer, a != null || n.onclick !== null || (n.onclick = ll));
    else if (o !== 4 && (o === 27 && Yr(e.type) && (a = e.stateNode, n = null), e = e.child, e !== null))
      for (tf(e, n, a), e = e.sibling; e !== null; )
        tf(e, n, a), e = e.sibling;
  }
  function Qo(e, n, a) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, n ? a.insertBefore(e, n) : a.appendChild(e);
    else if (o !== 4 && (o === 27 && Yr(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for (Qo(e, n, a), e = e.sibling; e !== null; )
        Qo(e, n, a), e = e.sibling;
  }
  function Bm(e) {
    var n = e.stateNode, a = e.memoizedProps;
    try {
      for (var o = e.type, c = n.attributes; c.length; )
        n.removeAttributeNode(c[0]);
      Ht(n, o, a), n[Zt] = e, n[rn] = a;
    } catch (b) {
      at(e, e.return, b);
    }
  }
  var yr = !1, xt = !1, nf = !1, Um = typeof WeakSet == "function" ? WeakSet : Set, It = null;
  function Gb(e, n) {
    if (e = e.containerInfo, Nf = ml, e = Qh(e), ec(e)) {
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
            var A = 0, O = -1, D = -1, q = 0, Q = 0, W = e, F = null;
            t: for (; ; ) {
              for (var Z; W !== a || c !== 0 && W.nodeType !== 3 || (O = A + c), W !== b || o !== 0 && W.nodeType !== 3 || (D = A + o), W.nodeType === 3 && (A += W.nodeValue.length), (Z = W.firstChild) !== null; )
                F = W, W = Z;
              for (; ; ) {
                if (W === e) break t;
                if (F === a && ++q === c && (O = A), F === b && ++Q === o && (D = A), (Z = W.nextSibling) !== null) break;
                W = F, F = W.parentNode;
              }
              W = Z;
            }
            a = O === -1 || D === -1 ? null : { start: O, end: D };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Tf = { focusedElem: e, selectionRange: a }, ml = !1, It = n; It !== null; )
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
                  var Ee = Sa(
                    a.type,
                    c,
                    a.elementType === a.type
                  );
                  e = o.getSnapshotBeforeUpdate(
                    Ee,
                    b
                  ), o.__reactInternalSnapshotBeforeUpdate = e;
                } catch (Se) {
                  at(
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
            e.return = n.return, It = e;
            break;
          }
          It = n.return;
        }
  }
  function Hm(e, n, a) {
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
              at(a, a.return, A);
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
              at(
                a,
                a.return,
                A
              );
            }
          }
        o & 64 && zm(a), o & 512 && vs(a, a.return);
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
            xp(e, n);
          } catch (A) {
            at(a, a.return, A);
          }
        }
        break;
      case 27:
        n === null && o & 4 && Bm(a);
      case 26:
      case 5:
        Ur(e, a), n === null && o & 4 && Im(a), o & 512 && vs(a, a.return);
        break;
      case 12:
        Ur(e, a);
        break;
      case 13:
        Ur(e, a), o & 4 && Zm(e, a), o & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = e_.bind(
          null,
          a
        ), y_(e, a))));
        break;
      case 22:
        if (o = a.memoizedState !== null || yr, !o) {
          n = n !== null && n.memoizedState !== null || xt, c = yr;
          var b = xt;
          yr = o, (xt = n) && !b ? Hr(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Ur(e, a), yr = c, xt = b;
        }
        break;
      case 30:
        break;
      default:
        Ur(e, a);
    }
  }
  function qm(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, qm(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && zu(n)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var ft = null, on = !1;
  function br(e, n, a) {
    for (a = a.child; a !== null; )
      Fm(e, n, a), a = a.sibling;
  }
  function Fm(e, n, a) {
    if (te && typeof te.onCommitFiberUnmount == "function")
      try {
        te.onCommitFiberUnmount(ae, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        xt || er(a, n), br(
          e,
          n,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        xt || er(a, n);
        var o = ft, c = on;
        Yr(a.type) && (ft = a.stateNode, on = !1), br(
          e,
          n,
          a
        ), As(a.stateNode), ft = o, on = c;
        break;
      case 5:
        xt || er(a, n);
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
              at(
                a,
                n,
                b
              );
            }
          else
            try {
              ft.removeChild(a.stateNode);
            } catch (b) {
              at(
                a,
                n,
                b
              );
            }
        break;
      case 18:
        ft !== null && (on ? (e = ft, Mg(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), Rs(e)) : Mg(ft, a.stateNode));
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
        xt || Br(2, a, n), xt || Br(4, a, n), br(
          e,
          n,
          a
        );
        break;
      case 1:
        xt || (er(a, n), o = a.stateNode, typeof o.componentWillUnmount == "function" && Lm(
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
        xt = (o = xt) || a.memoizedState !== null, br(
          e,
          n,
          a
        ), xt = o;
        break;
      default:
        br(
          e,
          n,
          a
        );
    }
  }
  function Zm(e, n) {
    if (n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Rs(e);
      } catch (a) {
        at(n, n.return, a);
      }
  }
  function Vb(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var n = e.stateNode;
        return n === null && (n = e.stateNode = new Um()), n;
      case 22:
        return e = e.stateNode, n = e._retryCache, n === null && (n = e._retryCache = new Um()), n;
      default:
        throw Error(s(435, e.tag));
    }
  }
  function rf(e, n) {
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
        var c = a[o], b = e, A = n, O = A;
        e: for (; O !== null; ) {
          switch (O.tag) {
            case 27:
              if (Yr(O.type)) {
                ft = O.stateNode, on = !1;
                break e;
              }
              break;
            case 5:
              ft = O.stateNode, on = !1;
              break e;
            case 3:
            case 4:
              ft = O.stateNode.containerInfo, on = !0;
              break e;
          }
          O = O.return;
        }
        if (ft === null) throw Error(s(160));
        Fm(b, A, c), ft = null, on = !1, b = c.alternate, b !== null && (b.return = null), c.return = null;
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; )
        Gm(n, e), n = n.sibling;
  }
  var Zn = null;
  function Gm(e, n) {
    var a = e.alternate, o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        yn(n, e), bn(e), o & 4 && (Br(3, e, e.return), gs(3, e), Br(5, e, e.return));
        break;
      case 1:
        yn(n, e), bn(e), o & 512 && (xt || a === null || er(a, a.return)), o & 64 && yr && (e = e.updateQueue, e !== null && (o = e.callbacks, o !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? o : a.concat(o))));
        break;
      case 26:
        var c = Zn;
        if (yn(n, e), bn(e), o & 512 && (xt || a === null || er(a, a.return)), o & 4) {
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
                      var A = Bg(
                        "link",
                        "href",
                        c
                      ).get(o + (a.href || ""));
                      if (A) {
                        for (var O = 0; O < A.length; O++)
                          if (b = A[O], b.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && b.getAttribute("rel") === (a.rel == null ? null : a.rel) && b.getAttribute("title") === (a.title == null ? null : a.title) && b.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            A.splice(O, 1);
                            break t;
                          }
                      }
                      b = c.createElement(o), Ht(b, o, a), c.head.appendChild(b);
                      break;
                    case "meta":
                      if (A = Bg(
                        "meta",
                        "content",
                        c
                      ).get(o + (a.content || ""))) {
                        for (O = 0; O < A.length; O++)
                          if (b = A[O], b.getAttribute("content") === (a.content == null ? null : "" + a.content) && b.getAttribute("name") === (a.name == null ? null : a.name) && b.getAttribute("property") === (a.property == null ? null : a.property) && b.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && b.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            A.splice(O, 1);
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
                Ug(
                  c,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Pg(
                c,
                o,
                e.memoizedProps
              );
          else
            b !== o ? (b === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : b.count--, o === null ? Ug(
              c,
              e.type,
              e.stateNode
            ) : Pg(
              c,
              o,
              e.memoizedProps
            )) : o === null && e.stateNode !== null && Wc(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        yn(n, e), bn(e), o & 512 && (xt || a === null || er(a, a.return)), a !== null && o & 4 && Wc(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (yn(n, e), bn(e), o & 512 && (xt || a === null || er(a, a.return)), e.flags & 32) {
          c = e.stateNode;
          try {
            Ya(c, "");
          } catch (Z) {
            at(e, e.return, Z);
          }
        }
        o & 4 && e.stateNode != null && (c = e.memoizedProps, Wc(
          e,
          c,
          a !== null ? a.memoizedProps : c
        )), o & 1024 && (nf = !0);
        break;
      case 6:
        if (yn(n, e), bn(e), o & 4) {
          if (e.stateNode === null)
            throw Error(s(162));
          o = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = o;
          } catch (Z) {
            at(e, e.return, Z);
          }
        }
        break;
      case 3:
        if (dl = null, c = Zn, Zn = cl(n.containerInfo), yn(n, e), Zn = c, bn(e), o & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            Rs(n.containerInfo);
          } catch (Z) {
            at(e, e.return, Z);
          }
        nf && (nf = !1, Vm(e));
        break;
      case 4:
        o = Zn, Zn = cl(
          e.stateNode.containerInfo
        ), yn(n, e), bn(e), Zn = o;
        break;
      case 12:
        yn(n, e), bn(e);
        break;
      case 13:
        yn(n, e), bn(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (cf = $e()), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, rf(e, o)));
        break;
      case 22:
        c = e.memoizedState !== null;
        var D = a !== null && a.memoizedState !== null, q = yr, Q = xt;
        if (yr = q || c, xt = Q || D, yn(n, e), xt = Q, yr = q, bn(e), o & 8192)
          e: for (n = e.stateNode, n._visibility = c ? n._visibility & -2 : n._visibility | 1, c && (a === null || D || yr || xt || xa(e)), a = null, n = e; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (a === null) {
                D = a = n;
                try {
                  if (b = D.stateNode, c)
                    A = b.style, typeof A.setProperty == "function" ? A.setProperty("display", "none", "important") : A.display = "none";
                  else {
                    O = D.stateNode;
                    var W = D.memoizedProps.style, F = W != null && W.hasOwnProperty("display") ? W.display : null;
                    O.style.display = F == null || typeof F == "boolean" ? "" : ("" + F).trim();
                  }
                } catch (Z) {
                  at(D, D.return, Z);
                }
              }
            } else if (n.tag === 6) {
              if (a === null) {
                D = n;
                try {
                  D.stateNode.nodeValue = c ? "" : D.memoizedProps;
                } catch (Z) {
                  at(D, D.return, Z);
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
        o & 4 && (o = e.updateQueue, o !== null && (a = o.retryQueue, a !== null && (o.retryQueue = null, rf(e, a))));
        break;
      case 19:
        yn(n, e), bn(e), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, rf(e, o)));
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
          if (Pm(o)) {
            a = o;
            break;
          }
          o = o.return;
        }
        if (a == null) throw Error(s(160));
        switch (a.tag) {
          case 27:
            var c = a.stateNode, b = ef(e);
            Qo(e, b, c);
            break;
          case 5:
            var A = a.stateNode;
            a.flags & 32 && (Ya(A, ""), a.flags &= -33);
            var O = ef(e);
            Qo(e, O, A);
            break;
          case 3:
          case 4:
            var D = a.stateNode.containerInfo, q = ef(e);
            tf(
              e,
              q,
              D
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch (Q) {
        at(e, e.return, Q);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function Vm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var n = e;
        Vm(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), e = e.sibling;
      }
  }
  function Ur(e, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        Hm(e, n.alternate, n), n = n.sibling;
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
          typeof a.componentWillUnmount == "function" && Lm(
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
      var o = n.alternate, c = e, b = n, A = b.flags;
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
              at(o, o.return, q);
            }
          if (o = b, c = o.updateQueue, c !== null) {
            var O = o.stateNode;
            try {
              var D = c.shared.hiddenCallbacks;
              if (D !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < D.length; c++)
                  Sp(D[c], O);
            } catch (q) {
              at(o, o.return, q);
            }
          }
          a && A & 64 && zm(b), vs(b, b.return);
          break;
        case 27:
          Bm(b);
        case 26:
        case 5:
          Hr(
            c,
            b,
            a
          ), a && o === null && A & 4 && Im(b), vs(b, b.return);
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
          ), a && A & 4 && Zm(c, b);
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
  function af(e, n) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (e = n.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && ns(a));
  }
  function sf(e, n) {
    e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && ns(e));
  }
  function tr(e, n, a, o) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        Ym(
          e,
          n,
          a,
          o
        ), n = n.sibling;
  }
  function Ym(e, n, a, o) {
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
            var b = n.memoizedProps, A = b.id, O = b.onPostCommit;
            typeof O == "function" && O(
              A,
              n.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (D) {
            at(n, n.return, D);
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
        b = n.stateNode, A = n.alternate, n.memoizedState !== null ? b._visibility & 2 ? tr(
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
        )), c & 2048 && af(A, n);
        break;
      case 24:
        tr(
          e,
          n,
          a,
          o
        ), c & 2048 && sf(n.alternate, n);
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
      var b = e, A = n, O = a, D = o, q = A.flags;
      switch (A.tag) {
        case 0:
        case 11:
        case 15:
          di(
            b,
            A,
            O,
            D,
            c
          ), gs(8, A);
          break;
        case 23:
          break;
        case 22:
          var Q = A.stateNode;
          A.memoizedState !== null ? Q._visibility & 2 ? di(
            b,
            A,
            O,
            D,
            c
          ) : ys(
            b,
            A
          ) : (Q._visibility |= 2, di(
            b,
            A,
            O,
            D,
            c
          )), c && q & 2048 && af(
            A.alternate,
            A
          );
          break;
        case 24:
          di(
            b,
            A,
            O,
            D,
            c
          ), c && q & 2048 && sf(A.alternate, A);
          break;
        default:
          di(
            b,
            A,
            O,
            D,
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
            ys(a, o), c & 2048 && af(
              o.alternate,
              o
            );
            break;
          case 24:
            ys(a, o), c & 2048 && sf(o.alternate, o);
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
        Xm(e), e = e.sibling;
  }
  function Xm(e) {
    switch (e.tag) {
      case 26:
        hi(e), e.flags & bs && e.memoizedState !== null && M_(
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
        Zn = cl(e.stateNode.containerInfo), hi(e), Zn = n;
        break;
      case 22:
        e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = bs, bs = 16777216, hi(e), bs = n) : hi(e));
        break;
      default:
        hi(e);
    }
  }
  function $m(e) {
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
          It = o, Qm(
            o,
            e
          );
        }
      $m(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Jm(e), e = e.sibling;
  }
  function Jm(e) {
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
        e.memoizedState !== null && n._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (n._visibility &= -3, Ko(e)) : _s(e);
        break;
      default:
        _s(e);
    }
  }
  function Ko(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var a = 0; a < n.length; a++) {
          var o = n[a];
          It = o, Qm(
            o,
            e
          );
        }
      $m(e);
    }
    for (e = e.child; e !== null; ) {
      switch (n = e, n.tag) {
        case 0:
        case 11:
        case 15:
          Br(8, n, n.return), Ko(n);
          break;
        case 22:
          a = n.stateNode, a._visibility & 2 && (a._visibility &= -3, Ko(n));
          break;
        default:
          Ko(n);
      }
      e = e.sibling;
    }
  }
  function Qm(e, n) {
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
          if (qm(o), o === a) {
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
      var n = Gt(Mt), a = n.data.get(e);
      return a === void 0 && (a = e(), n.data.set(e, a)), a;
    }
  }, Xb = typeof WeakMap == "function" ? WeakMap : Map, Qe = 0, lt = null, Le = null, Fe = 0, Ke = 0, _n = null, qr = !1, pi = !1, of = !1, _r = 0, bt = 0, Fr = 0, Ea = 0, lf = 0, Ln = 0, mi = 0, Ss = null, ln = null, uf = !1, cf = 0, Wo = 1 / 0, el = null, Zr = null, Ut = 0, Gr = null, gi = null, vi = 0, ff = 0, df = null, Km = null, xs = 0, hf = null;
  function Sn() {
    if ((Qe & 2) !== 0 && Fe !== 0)
      return Fe & -Fe;
    if (I.T !== null) {
      var e = ai;
      return e !== 0 ? e : _f();
    }
    return ph();
  }
  function Wm() {
    Ln === 0 && (Ln = (Fe & 536870912) === 0 || Je ? Ba() : 536870912);
    var e = zn.current;
    return e !== null && (e.flags |= 32), Ln;
  }
  function xn(e, n, a) {
    (e === lt && (Ke === 2 || Ke === 9) || e.cancelPendingCommit !== null) && (yi(e, 0), Vr(
      e,
      Fe,
      Ln,
      !1
    )), Ui(e, a), ((Qe & 2) === 0 || e !== lt) && (e === lt && ((Qe & 2) === 0 && (Ea |= a), bt === 4 && Vr(
      e,
      Fe,
      Ln,
      !1
    )), nr(e));
  }
  function eg(e, n, a) {
    if ((Qe & 6) !== 0) throw Error(s(327));
    var o = !a && (n & 124) === 0 && (n & e.expiredLanes) === 0 || nn(e, n), c = o ? Qb(e, n) : gf(e, n, !0), b = o;
    do {
      if (c === 0) {
        pi && !o && Vr(e, n, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, b && !$b(a)) {
          c = gf(e, n, !1), b = !1;
          continue;
        }
        if (c === 2) {
          if (b = n, e.errorRecoveryDisabledLanes & b)
            var A = 0;
          else
            A = e.pendingLanes & -536870913, A = A !== 0 ? A : A & 536870912 ? 536870912 : 0;
          if (A !== 0) {
            n = A;
            e: {
              var O = e;
              c = Ss;
              var D = O.current.memoizedState.isDehydrated;
              if (D && (yi(O, A).flags |= 256), A = gf(
                O,
                A,
                !1
              ), A !== 2) {
                if (of && !D) {
                  O.errorRecoveryDisabledLanes |= b, Ea |= b, c = 4;
                  break e;
                }
                b = ln, ln = c, b !== null && (ln === null ? ln = b : ln.push.apply(
                  ln,
                  b
                ));
              }
              c = A;
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
          if ((n & 62914560) === n && (c = cf + 300 - $e(), 10 < c)) {
            if (Vr(
              o,
              n,
              Ln,
              !qr
            ), ot(o, 0, !0) !== 0) break e;
            o.timeoutHandle = Og(
              tg.bind(
                null,
                o,
                a,
                ln,
                el,
                uf,
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
          tg(
            o,
            a,
            ln,
            el,
            uf,
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
  function tg(e, n, a, o, c, b, A, O, D, q, Q, W, F, Z) {
    if (e.timeoutHandle = -1, W = n.subtreeFlags, (W & 8192 || (W & 16785408) === 16785408) && (Os = { stylesheets: null, count: 0, unsuspend: k_ }, Xm(n), W = j_(), W !== null)) {
      e.cancelPendingCommit = W(
        lg.bind(
          null,
          e,
          n,
          b,
          a,
          o,
          c,
          A,
          O,
          D,
          Q,
          1,
          F,
          Z
        )
      ), Vr(e, b, A, !q);
      return;
    }
    lg(
      e,
      n,
      b,
      a,
      o,
      c,
      A,
      O,
      D
    );
  }
  function $b(e) {
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
    n &= ~lf, n &= ~Ea, e.suspendedLanes |= n, e.pingedLanes &= ~n, o && (e.warmLanes |= n), o = e.expirationTimes;
    for (var c = n; 0 < c; ) {
      var b = 31 - Be(c), A = 1 << b;
      o[b] = -1, c &= ~A;
    }
    a !== 0 && dh(e, a, n);
  }
  function tl() {
    return (Qe & 6) === 0 ? (Es(0), !1) : !0;
  }
  function pf() {
    if (Le !== null) {
      if (Ke === 0)
        var e = Le.return;
      else
        e = Le, dr = va = null, kc(e), ci = null, hs = 0, e = Le;
      for (; e !== null; )
        Rm(e.alternate, e), e = e.return;
      Le = null;
    }
  }
  function yi(e, n) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, h_(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), pf(), lt = e, Le = a = ur(e.current, null), Fe = n, Ke = 0, _n = null, qr = !1, pi = nn(e, n), of = !1, mi = Ln = lf = Ea = Fr = bt = 0, ln = Ss = null, uf = !1, (n & 8) !== 0 && (n |= n & 32);
    var o = e.entangledLanes;
    if (o !== 0)
      for (e = e.entanglements, o &= n; 0 < o; ) {
        var c = 31 - Be(o), b = 1 << c;
        n |= e[c], o &= ~b;
      }
    return _r = n, Eo(), a;
  }
  function ng(e, n) {
    je = null, I.H = qo, n === as || n === jo ? (n = bp(), Ke = 3) : n === gp ? (n = bp(), Ke = 4) : Ke = n === _m ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, _n = n, Le === null && (bt = 1, Yo(
      e,
      Mn(n, e.current)
    ));
  }
  function rg() {
    var e = I.H;
    return I.H = qo, e === null ? qo : e;
  }
  function ag() {
    var e = I.A;
    return I.A = Yb, e;
  }
  function mf() {
    bt = 4, qr || (Fe & 4194048) !== Fe && zn.current !== null || (pi = !0), (Fr & 134217727) === 0 && (Ea & 134217727) === 0 || lt === null || Vr(
      lt,
      Fe,
      Ln,
      !1
    );
  }
  function gf(e, n, a) {
    var o = Qe;
    Qe |= 2;
    var c = rg(), b = ag();
    (lt !== e || Fe !== n) && (el = null, yi(e, n)), n = !1;
    var A = bt;
    e: do
      try {
        if (Ke !== 0 && Le !== null) {
          var O = Le, D = _n;
          switch (Ke) {
            case 8:
              pf(), A = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              zn.current === null && (n = !0);
              var q = Ke;
              if (Ke = 0, _n = null, bi(e, O, D, q), a && pi) {
                A = 0;
                break e;
              }
              break;
            default:
              q = Ke, Ke = 0, _n = null, bi(e, O, D, q);
          }
        }
        Jb(), A = bt;
        break;
      } catch (Q) {
        ng(e, Q);
      }
    while (!0);
    return n && e.shellSuspendCounter++, dr = va = null, Qe = o, I.H = c, I.A = b, Le === null && (lt = null, Fe = 0, Eo()), A;
  }
  function Jb() {
    for (; Le !== null; ) ig(Le);
  }
  function Qb(e, n) {
    var a = Qe;
    Qe |= 2;
    var o = rg(), c = ag();
    lt !== e || Fe !== n ? (el = null, Wo = $e() + 500, yi(e, n)) : pi = nn(
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
              if (vp(b)) {
                Ke = 0, _n = null, sg(n);
                break;
              }
              n = function() {
                Ke !== 2 && Ke !== 9 || lt !== e || (Ke = 7), nr(e);
              }, b.then(n, n);
              break e;
            case 3:
              Ke = 7;
              break e;
            case 4:
              Ke = 5;
              break e;
            case 7:
              vp(b) ? (Ke = 0, _n = null, sg(n)) : (Ke = 0, _n = null, bi(e, n, b, 7));
              break;
            case 5:
              var A = null;
              switch (Le.tag) {
                case 26:
                  A = Le.memoizedState;
                case 5:
                case 27:
                  var O = Le;
                  if (!A || Hg(A)) {
                    Ke = 0, _n = null;
                    var D = O.sibling;
                    if (D !== null) Le = D;
                    else {
                      var q = O.return;
                      q !== null ? (Le = q, nl(q)) : Le = null;
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
              pf(), bt = 6;
              break e;
            default:
              throw Error(s(462));
          }
        }
        Kb();
        break;
      } catch (Q) {
        ng(e, Q);
      }
    while (!0);
    return dr = va = null, I.H = o, I.A = c, Qe = a, Le !== null ? 0 : (lt = null, Fe = 0, Eo(), bt);
  }
  function Kb() {
    for (; Le !== null && !tn(); )
      ig(Le);
  }
  function ig(e) {
    var n = jm(e.alternate, e, _r);
    e.memoizedProps = e.pendingProps, n === null ? nl(e) : Le = n;
  }
  function sg(e) {
    var n = e, a = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Am(
          a,
          n,
          n.pendingProps,
          n.type,
          void 0,
          Fe
        );
        break;
      case 11:
        n = Am(
          a,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          Fe
        );
        break;
      case 5:
        kc(n);
      default:
        Rm(a, n), n = Le = op(n, _r), n = jm(a, n, _r);
    }
    e.memoizedProps = e.pendingProps, n === null ? nl(e) : Le = n;
  }
  function bi(e, n, a, o) {
    dr = va = null, kc(n), ci = null, hs = 0;
    var c = n.return;
    try {
      if (Hb(
        e,
        c,
        n,
        a,
        Fe
      )) {
        bt = 1, Yo(
          e,
          Mn(a, e.current)
        ), Le = null;
        return;
      }
    } catch (b) {
      if (c !== null) throw Le = c, b;
      bt = 1, Yo(
        e,
        Mn(a, e.current)
      ), Le = null;
      return;
    }
    n.flags & 32768 ? (Je || o === 1 ? e = !0 : pi || (Fe & 536870912) !== 0 ? e = !1 : (qr = e = !0, (o === 2 || o === 9 || o === 3 || o === 6) && (o = zn.current, o !== null && o.tag === 13 && (o.flags |= 16384))), og(n, e)) : nl(n);
  }
  function nl(e) {
    var n = e;
    do {
      if ((n.flags & 32768) !== 0) {
        og(
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
  function og(e, n) {
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
  function lg(e, n, a, o, c, b, A, O, D) {
    e.cancelPendingCommit = null;
    do
      rl();
    while (Ut !== 0);
    if ((Qe & 6) !== 0) throw Error(s(327));
    if (n !== null) {
      if (n === e.current) throw Error(s(177));
      if (b = n.lanes | n.childLanes, b |= ic, k1(
        e,
        a,
        b,
        A,
        O,
        D
      ), e === lt && (Le = lt = null, Fe = 0), gi = n, Gr = e, vi = a, ff = b, df = c, Km = o, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, n_(pe, function() {
        return hg(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), o = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || o) {
        o = I.T, I.T = null, c = ne.p, ne.p = 2, A = Qe, Qe |= 4;
        try {
          Gb(e, n, a);
        } finally {
          Qe = A, ne.p = c, I.T = o;
        }
      }
      Ut = 1, ug(), cg(), fg();
    }
  }
  function ug() {
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
          Gm(n, e);
          var b = Tf, A = Qh(e.containerInfo), O = b.focusedElem, D = b.selectionRange;
          if (A !== O && O && O.ownerDocument && Jh(
            O.ownerDocument.documentElement,
            O
          )) {
            if (D !== null && ec(O)) {
              var q = D.start, Q = D.end;
              if (Q === void 0 && (Q = q), "selectionStart" in O)
                O.selectionStart = q, O.selectionEnd = Math.min(
                  Q,
                  O.value.length
                );
              else {
                var W = O.ownerDocument || document, F = W && W.defaultView || window;
                if (F.getSelection) {
                  var Z = F.getSelection(), Ee = O.textContent.length, Se = Math.min(D.start, Ee), nt = D.end === void 0 ? Se : Math.min(D.end, Ee);
                  !Z.extend && Se > nt && (A = nt, nt = Se, Se = A);
                  var L = $h(
                    O,
                    Se
                  ), z = $h(
                    O,
                    nt
                  );
                  if (L && z && (Z.rangeCount !== 1 || Z.anchorNode !== L.node || Z.anchorOffset !== L.offset || Z.focusNode !== z.node || Z.focusOffset !== z.offset)) {
                    var H = W.createRange();
                    H.setStart(L.node, L.offset), Z.removeAllRanges(), Se > nt ? (Z.addRange(H), Z.extend(z.node, z.offset)) : (H.setEnd(z.node, z.offset), Z.addRange(H));
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
          ml = !!Nf, Tf = Nf = null;
        } finally {
          Qe = c, ne.p = o, I.T = a;
        }
      }
      e.current = n, Ut = 2;
    }
  }
  function cg() {
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
          Hm(e, n.alternate, n);
        } finally {
          Qe = c, ne.p = o, I.T = a;
        }
      }
      Ut = 3;
    }
  }
  function fg() {
    if (Ut === 4 || Ut === 3) {
      Ut = 0, Ze();
      var e = Gr, n = gi, a = vi, o = Km;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? Ut = 5 : (Ut = 0, gi = Gr = null, dg(e, e.pendingLanes));
      var c = e.pendingLanes;
      if (c === 0 && (Zr = null), Du(a), n = n.stateNode, te && typeof te.onCommitFiberRoot == "function")
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
          for (var b = e.onRecoverableError, A = 0; A < o.length; A++) {
            var O = o[A];
            b(O.value, {
              componentStack: O.stack
            });
          }
        } finally {
          I.T = n, ne.p = c;
        }
      }
      (vi & 3) !== 0 && rl(), nr(e), c = e.pendingLanes, (a & 4194090) !== 0 && (c & 42) !== 0 ? e === hf ? xs++ : (xs = 0, hf = e) : xs = 0, Es(0);
    }
  }
  function dg(e, n) {
    (e.pooledCacheLanes &= n) === 0 && (n = e.pooledCache, n != null && (e.pooledCache = null, ns(n)));
  }
  function rl(e) {
    return ug(), cg(), fg(), hg();
  }
  function hg() {
    if (Ut !== 5) return !1;
    var e = Gr, n = ff;
    ff = 0;
    var a = Du(vi), o = I.T, c = ne.p;
    try {
      ne.p = 32 > a ? 32 : a, I.T = null, a = df, df = null;
      var b = Gr, A = vi;
      if (Ut = 0, gi = Gr = null, vi = 0, (Qe & 6) !== 0) throw Error(s(331));
      var O = Qe;
      if (Qe |= 4, Jm(b.current), Ym(
        b,
        b.current,
        A,
        a
      ), Qe = O, Es(0, !1), te && typeof te.onPostCommitFiberRoot == "function")
        try {
          te.onPostCommitFiberRoot(ae, b);
        } catch {
        }
      return !0;
    } finally {
      ne.p = c, I.T = o, dg(e, n);
    }
  }
  function pg(e, n, a) {
    n = Mn(a, n), n = Zc(e.stateNode, n, 2), e = zr(e, n, 2), e !== null && (Ui(e, 2), nr(e));
  }
  function at(e, n, a) {
    if (e.tag === 3)
      pg(e, e, a);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          pg(
            n,
            e,
            a
          );
          break;
        } else if (n.tag === 1) {
          var o = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Zr === null || !Zr.has(o))) {
            e = Mn(a, e), a = ym(2), o = zr(n, a, 2), o !== null && (bm(
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
  function vf(e, n, a) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new Xb();
      var c = /* @__PURE__ */ new Set();
      o.set(n, c);
    } else
      c = o.get(n), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(n, c));
    c.has(a) || (of = !0, c.add(a), e = Wb.bind(null, e, n, a), n.then(e, e));
  }
  function Wb(e, n, a) {
    var o = e.pingCache;
    o !== null && o.delete(n), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, lt === e && (Fe & a) === a && (bt === 4 || bt === 3 && (Fe & 62914560) === Fe && 300 > $e() - cf ? (Qe & 2) === 0 && yi(e, 0) : lf |= a, mi === Fe && (mi = 0)), nr(e);
  }
  function mg(e, n) {
    n === 0 && (n = fh()), e = ei(e, n), e !== null && (Ui(e, n), nr(e));
  }
  function e_(e) {
    var n = e.memoizedState, a = 0;
    n !== null && (a = n.retryLane), mg(e, a);
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
    o !== null && o.delete(n), mg(e, a);
  }
  function n_(e, n) {
    return qn(e, n);
  }
  var al = null, _i = null, yf = !1, il = !1, bf = !1, wa = 0;
  function nr(e) {
    e !== _i && e.next === null && (_i === null ? al = _i = e : _i = _i.next = e), il = !0, yf || (yf = !0, a_());
  }
  function Es(e, n) {
    if (!bf && il) {
      bf = !0;
      do
        for (var a = !1, o = al; o !== null; ) {
          if (e !== 0) {
            var c = o.pendingLanes;
            if (c === 0) var b = 0;
            else {
              var A = o.suspendedLanes, O = o.pingedLanes;
              b = (1 << 31 - Be(42 | e) + 1) - 1, b &= c & ~(A & ~O), b = b & 201326741 ? b & 201326741 | 1 : b ? b | 2 : 0;
            }
            b !== 0 && (a = !0, bg(o, b));
          } else
            b = Fe, b = ot(
              o,
              o === lt ? b : 0,
              o.cancelPendingCommit !== null || o.timeoutHandle !== -1
            ), (b & 3) === 0 || nn(o, b) || (a = !0, bg(o, b));
          o = o.next;
        }
      while (a);
      bf = !1;
    }
  }
  function r_() {
    gg();
  }
  function gg() {
    il = yf = !1;
    var e = 0;
    wa !== 0 && (d_() && (e = wa), wa = 0);
    for (var n = $e(), a = null, o = al; o !== null; ) {
      var c = o.next, b = vg(o, n);
      b === 0 ? (o.next = null, a === null ? al = c : a.next = c, c === null && (_i = a)) : (a = o, (e !== 0 || (b & 3) !== 0) && (il = !0)), o = c;
    }
    Es(e);
  }
  function vg(e, n) {
    for (var a = e.suspendedLanes, o = e.pingedLanes, c = e.expirationTimes, b = e.pendingLanes & -62914561; 0 < b; ) {
      var A = 31 - Be(b), O = 1 << A, D = c[A];
      D === -1 ? ((O & a) === 0 || (O & o) !== 0) && (c[A] = co(O, n)) : D <= n && (e.expiredLanes |= O), b &= ~O;
    }
    if (n = lt, a = Fe, a = ot(
      e,
      e === n ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o = e.callbackNode, a === 0 || e === n && (Ke === 2 || Ke === 9) || e.cancelPendingCommit !== null)
      return o !== null && o !== null && kt(o), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || nn(e, a)) {
      if (n = a & -a, n === e.callbackPriority) return n;
      switch (o !== null && kt(o), Du(a)) {
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
      return o = yg.bind(null, e), a = qn(a, o), e.callbackPriority = n, e.callbackNode = a, n;
    }
    return o !== null && o !== null && kt(o), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function yg(e, n) {
    if (Ut !== 0 && Ut !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (rl() && e.callbackNode !== a)
      return null;
    var o = Fe;
    return o = ot(
      e,
      e === lt ? o : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o === 0 ? null : (eg(e, o, n), vg(e, $e()), e.callbackNode != null && e.callbackNode === a ? yg.bind(null, e) : null);
  }
  function bg(e, n) {
    if (rl()) return null;
    eg(e, n, !0);
  }
  function a_() {
    p_(function() {
      (Qe & 6) !== 0 ? qn(
        We,
        r_
      ) : gg();
    });
  }
  function _f() {
    return wa === 0 && (wa = Ba()), wa;
  }
  function _g(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : go("" + e);
  }
  function Sg(e, n) {
    var a = n.ownerDocument.createElement("input");
    return a.name = n.name, a.value = n.value, e.id && a.setAttribute("form", e.id), n.parentNode.insertBefore(a, n), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function i_(e, n, a, o, c) {
    if (n === "submit" && a && a.stateNode === c) {
      var b = _g(
        (c[rn] || null).action
      ), A = o.submitter;
      A && (n = (n = A[rn] || null) ? _g(n.formAction) : A.getAttribute("formAction"), n !== null && (b = n, A = null));
      var O = new _o(
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
                  var D = A ? Sg(c, A) : new FormData(c);
                  Bc(
                    a,
                    {
                      pending: !0,
                      data: D,
                      method: c.method,
                      action: b
                    },
                    null,
                    D
                  );
                }
              } else
                typeof b == "function" && (O.preventDefault(), D = A ? Sg(c, A) : new FormData(c), Bc(
                  a,
                  {
                    pending: !0,
                    data: D,
                    method: c.method,
                    action: b
                  },
                  b,
                  D
                ));
            },
            currentTarget: c
          }
        ]
      });
    }
  }
  for (var Sf = 0; Sf < ac.length; Sf++) {
    var xf = ac[Sf], s_ = xf.toLowerCase(), o_ = xf[0].toUpperCase() + xf.slice(1);
    Fn(
      s_,
      "on" + o_
    );
  }
  Fn(ep, "onAnimationEnd"), Fn(tp, "onAnimationIteration"), Fn(np, "onAnimationStart"), Fn("dblclick", "onDoubleClick"), Fn("focusin", "onFocus"), Fn("focusout", "onBlur"), Fn(wb, "onTransitionRun"), Fn(Cb, "onTransitionStart"), Fn(Ab, "onTransitionCancel"), Fn(rp, "onTransitionEnd"), Za("onMouseEnter", ["mouseout", "mouseover"]), Za("onMouseLeave", ["mouseout", "mouseover"]), Za("onPointerEnter", ["pointerout", "pointerover"]), Za("onPointerLeave", ["pointerout", "pointerover"]), la(
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
  function xg(e, n) {
    n = (n & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var o = e[a], c = o.event;
      o = o.listeners;
      e: {
        var b = void 0;
        if (n)
          for (var A = o.length - 1; 0 <= A; A--) {
            var O = o[A], D = O.instance, q = O.currentTarget;
            if (O = O.listener, D !== b && c.isPropagationStopped())
              break e;
            b = O, c.currentTarget = q;
            try {
              b(c);
            } catch (Q) {
              Vo(Q);
            }
            c.currentTarget = null, b = D;
          }
        else
          for (A = 0; A < o.length; A++) {
            if (O = o[A], D = O.instance, q = O.currentTarget, O = O.listener, D !== b && c.isPropagationStopped())
              break e;
            b = O, c.currentTarget = q;
            try {
              b(c);
            } catch (Q) {
              Vo(Q);
            }
            c.currentTarget = null, b = D;
          }
      }
    }
  }
  function Ie(e, n) {
    var a = n[Ru];
    a === void 0 && (a = n[Ru] = /* @__PURE__ */ new Set());
    var o = e + "__bubble";
    a.has(o) || (Eg(n, e, 2, !1), a.add(o));
  }
  function Ef(e, n, a) {
    var o = 0;
    n && (o |= 4), Eg(
      a,
      e,
      o,
      n
    );
  }
  var sl = "_reactListening" + Math.random().toString(36).slice(2);
  function wf(e) {
    if (!e[sl]) {
      e[sl] = !0, gh.forEach(function(a) {
        a !== "selectionchange" && (l_.has(a) || Ef(a, !1, e), Ef(a, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[sl] || (n[sl] = !0, Ef("selectionchange", !1, n));
    }
  }
  function Eg(e, n, a, o) {
    switch (Yg(n)) {
      case 2:
        var c = z_;
        break;
      case 8:
        c = L_;
        break;
      default:
        c = Pf;
    }
    a = c.bind(
      null,
      n,
      a,
      e
    ), c = void 0, !Gu || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (c = !0), o ? c !== void 0 ? e.addEventListener(n, a, {
      capture: !0,
      passive: c
    }) : e.addEventListener(n, a, !0) : c !== void 0 ? e.addEventListener(n, a, {
      passive: c
    }) : e.addEventListener(n, a, !1);
  }
  function Cf(e, n, a, o, c) {
    var b = o;
    if ((n & 1) === 0 && (n & 2) === 0 && o !== null)
      e: for (; ; ) {
        if (o === null) return;
        var A = o.tag;
        if (A === 3 || A === 4) {
          var O = o.stateNode.containerInfo;
          if (O === c) break;
          if (A === 4)
            for (A = o.return; A !== null; ) {
              var D = A.tag;
              if ((D === 3 || D === 4) && A.stateNode.containerInfo === c)
                return;
              A = A.return;
            }
          for (; O !== null; ) {
            if (A = Ha(O), A === null) return;
            if (D = A.tag, D === 5 || D === 6 || D === 26 || D === 27) {
              o = b = A;
              continue e;
            }
            O = O.parentNode;
          }
        }
        o = o.return;
      }
    kh(function() {
      var q = b, Q = Fu(a), W = [];
      e: {
        var F = ap.get(e);
        if (F !== void 0) {
          var Z = _o, Ee = e;
          switch (e) {
            case "keypress":
              if (yo(a) === 0) break e;
            case "keydown":
            case "keyup":
              Z = nb;
              break;
            case "focusin":
              Ee = "focus", Z = $u;
              break;
            case "focusout":
              Ee = "blur", Z = $u;
              break;
            case "beforeblur":
            case "afterblur":
              Z = $u;
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
              Z = Z1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Z = ib;
              break;
            case ep:
            case tp:
            case np:
              Z = Y1;
              break;
            case rp:
              Z = ob;
              break;
            case "scroll":
            case "scrollend":
              Z = q1;
              break;
            case "wheel":
              Z = ub;
              break;
            case "copy":
            case "cut":
            case "paste":
              Z = $1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Z = zh;
              break;
            case "toggle":
            case "beforetoggle":
              Z = fb;
          }
          var Se = (n & 4) !== 0, nt = !Se && (e === "scroll" || e === "scrollend"), L = Se ? F !== null ? F + "Capture" : null : F;
          Se = [];
          for (var z = q, H; z !== null; ) {
            var K = z;
            if (H = K.stateNode, K = K.tag, K !== 5 && K !== 26 && K !== 27 || H === null || L === null || (K = Fi(z, L), K != null && Se.push(
              Cs(z, K, H)
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
          if (F = e === "mouseover" || e === "pointerover", Z = e === "mouseout" || e === "pointerout", F && a !== qu && (Ee = a.relatedTarget || a.fromElement) && (Ha(Ee) || Ee[Ua]))
            break e;
          if ((Z || F) && (F = Q.window === Q ? Q : (F = Q.ownerDocument) ? F.defaultView || F.parentWindow : window, Z ? (Ee = a.relatedTarget || a.toElement, Z = q, Ee = Ee ? Ha(Ee) : null, Ee !== null && (nt = u(Ee), Se = Ee.tag, Ee !== nt || Se !== 5 && Se !== 27 && Se !== 6) && (Ee = null)) : (Z = null, Ee = q), Z !== Ee)) {
            if (Se = Dh, K = "onMouseLeave", L = "onMouseEnter", z = "mouse", (e === "pointerout" || e === "pointerover") && (Se = zh, K = "onPointerLeave", L = "onPointerEnter", z = "pointer"), nt = Z == null ? F : qi(Z), H = Ee == null ? F : qi(Ee), F = new Se(
              K,
              z + "leave",
              Z,
              a,
              Q
            ), F.target = nt, F.relatedTarget = H, K = null, Ha(Q) === q && (Se = new Se(
              L,
              z + "enter",
              Ee,
              a,
              Q
            ), Se.target = H, Se.relatedTarget = nt, K = Se), nt = K, Z && Ee)
              t: {
                for (Se = Z, L = Ee, z = 0, H = Se; H; H = Si(H))
                  z++;
                for (H = 0, K = L; K; K = Si(K))
                  H++;
                for (; 0 < z - H; )
                  Se = Si(Se), z--;
                for (; 0 < H - z; )
                  L = Si(L), H--;
                for (; z--; ) {
                  if (Se === L || L !== null && Se === L.alternate)
                    break t;
                  Se = Si(Se), L = Si(L);
                }
                Se = null;
              }
            else Se = null;
            Z !== null && wg(
              W,
              F,
              Z,
              Se,
              !1
            ), Ee !== null && nt !== null && wg(
              W,
              nt,
              Ee,
              Se,
              !0
            );
          }
        }
        e: {
          if (F = q ? qi(q) : window, Z = F.nodeName && F.nodeName.toLowerCase(), Z === "select" || Z === "input" && F.type === "file")
            var de = Fh;
          else if (Hh(F))
            if (Zh)
              de = Sb;
            else {
              de = bb;
              var ze = yb;
            }
          else
            Z = F.nodeName, !Z || Z.toLowerCase() !== "input" || F.type !== "checkbox" && F.type !== "radio" ? q && Hu(q.elementType) && (de = Fh) : de = _b;
          if (de && (de = de(e, q))) {
            qh(
              W,
              de,
              a,
              Q
            );
            break e;
          }
          ze && ze(e, F, q), e === "focusout" && q && F.type === "number" && q.memoizedProps.value != null && Uu(F, "number", F.value);
        }
        switch (ze = q ? qi(q) : window, e) {
          case "focusin":
            (Hh(ze) || ze.contentEditable === "true") && (Qa = ze, tc = q, Qi = null);
            break;
          case "focusout":
            Qi = tc = Qa = null;
            break;
          case "mousedown":
            nc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            nc = !1, Kh(W, a, Q);
            break;
          case "selectionchange":
            if (Eb) break;
          case "keydown":
          case "keyup":
            Kh(W, a, Q);
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
          Ja ? Bh(e, a) && (xe = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (xe = "onCompositionStart");
        xe && (Lh && a.locale !== "ko" && (Ja || xe !== "onCompositionStart" ? xe === "onCompositionEnd" && Ja && (ge = Mh()) : (Mr = Q, Vu = "value" in Mr ? Mr.value : Mr.textContent, Ja = !0)), ze = ol(q, xe), 0 < ze.length && (xe = new Rh(
          xe,
          e,
          null,
          a,
          Q
        ), W.push({ event: xe, listeners: ze }), ge ? xe.data = ge : (ge = Uh(a), ge !== null && (xe.data = ge)))), (ge = hb ? pb(e, a) : mb(e, a)) && (xe = ol(q, "onBeforeInput"), 0 < xe.length && (ze = new Rh(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          Q
        ), W.push({
          event: ze,
          listeners: xe
        }), ze.data = ge)), i_(
          W,
          e,
          q,
          a,
          Q
        );
      }
      xg(W, n);
    });
  }
  function Cs(e, n, a) {
    return {
      instance: e,
      listener: n,
      currentTarget: a
    };
  }
  function ol(e, n) {
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
  function wg(e, n, a, o, c) {
    for (var b = n._reactName, A = []; a !== null && a !== o; ) {
      var O = a, D = O.alternate, q = O.stateNode;
      if (O = O.tag, D !== null && D === o) break;
      O !== 5 && O !== 26 && O !== 27 || q === null || (D = q, c ? (q = Fi(a, b), q != null && A.unshift(
        Cs(a, q, D)
      )) : c || (q = Fi(a, b), q != null && A.push(
        Cs(a, q, D)
      ))), a = a.return;
    }
    A.length !== 0 && e.push({ event: n, listeners: A });
  }
  var u_ = /\r\n?/g, c_ = /\u0000|\uFFFD/g;
  function Cg(e) {
    return (typeof e == "string" ? e : "" + e).replace(u_, `
`).replace(c_, "");
  }
  function Ag(e, n) {
    return n = Cg(n), Cg(e) === n;
  }
  function ll() {
  }
  function tt(e, n, a, o, c, b) {
    switch (a) {
      case "children":
        typeof o == "string" ? n === "body" || n === "textarea" && o === "" || Ya(e, o) : (typeof o == "number" || typeof o == "bigint") && n !== "body" && Ya(e, "" + o);
        break;
      case "className":
        ho(e, "class", o);
        break;
      case "tabIndex":
        ho(e, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ho(e, a, o);
        break;
      case "style":
        Th(e, o, b);
        break;
      case "data":
        if (n !== "object") {
          ho(e, "data", o);
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
        o = go("" + o), e.setAttribute(a, o);
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
        o = go("" + o), e.setAttribute(a, o);
        break;
      case "onClick":
        o != null && (e.onclick = ll);
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
        a = go("" + o), e.setAttributeNS(
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
        Ie("beforetoggle", e), Ie("toggle", e), fo(e, "popover", o);
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
        fo(e, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = U1.get(a) || a, fo(e, a, o));
    }
  }
  function Af(e, n, a, o, c, b) {
    switch (a) {
      case "style":
        Th(e, o, b);
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
        o != null && (e.onclick = ll);
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
        if (!vh.hasOwnProperty(a))
          e: {
            if (a[0] === "o" && a[1] === "n" && (c = a.endsWith("Capture"), n = a.slice(2, c ? a.length - 7 : void 0), b = e[rn] || null, b = b != null ? b[a] : null, typeof b == "function" && e.removeEventListener(n, b, c), typeof o == "function")) {
              typeof b != "function" && b !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(n, o, c);
              break e;
            }
            a in e ? e[a] = o : o === !0 ? e.setAttribute(a, "") : fo(e, a, o);
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
            var A = a[b];
            if (A != null)
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
                  tt(e, n, b, A, a, null);
              }
          }
        c && tt(e, n, "srcSet", a.srcSet, a, null), o && tt(e, n, "src", a.src, a, null);
        return;
      case "input":
        Ie("invalid", e);
        var O = b = A = c = null, D = null, q = null;
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
                  D = Q;
                  break;
                case "defaultChecked":
                  q = Q;
                  break;
                case "value":
                  b = Q;
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
        wh(
          e,
          b,
          O,
          D,
          q,
          A,
          c,
          !1
        ), po(e);
        return;
      case "select":
        Ie("invalid", e), o = A = b = null;
        for (c in a)
          if (a.hasOwnProperty(c) && (O = a[c], O != null))
            switch (c) {
              case "value":
                b = O;
                break;
              case "defaultValue":
                A = O;
                break;
              case "multiple":
                o = O;
              default:
                tt(e, n, c, O, a, null);
            }
        n = b, a = A, e.multiple = !!o, n != null ? Va(e, !!o, n, !1) : a != null && Va(e, !!o, a, !0);
        return;
      case "textarea":
        Ie("invalid", e), b = c = o = null;
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
                b = O;
                break;
              case "dangerouslySetInnerHTML":
                if (O != null) throw Error(s(91));
                break;
              default:
                tt(e, n, A, O, a, null);
            }
        Ah(e, o, c, b), po(e);
        return;
      case "option":
        for (D in a)
          if (a.hasOwnProperty(D) && (o = a[D], o != null))
            switch (D) {
              case "selected":
                e.selected = o && typeof o != "function" && typeof o != "symbol";
                break;
              default:
                tt(e, n, D, o, a, null);
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
        if (Hu(n)) {
          for (Q in a)
            a.hasOwnProperty(Q) && (o = a[Q], o !== void 0 && Af(
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
        var c = null, b = null, A = null, O = null, D = null, q = null, Q = null;
        for (Z in a) {
          var W = a[Z];
          if (a.hasOwnProperty(Z) && W != null)
            switch (Z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                D = W;
              default:
                o.hasOwnProperty(Z) || tt(e, n, Z, null, o, W);
            }
        }
        for (var F in o) {
          var Z = o[F];
          if (W = a[F], o.hasOwnProperty(F) && (Z != null || W != null))
            switch (F) {
              case "type":
                b = Z;
                break;
              case "name":
                c = Z;
                break;
              case "checked":
                q = Z;
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
        Bu(
          e,
          A,
          O,
          D,
          q,
          Q,
          b,
          c
        );
        return;
      case "select":
        Z = A = O = F = null;
        for (b in a)
          if (D = a[b], a.hasOwnProperty(b) && D != null)
            switch (b) {
              case "value":
                break;
              case "multiple":
                Z = D;
              default:
                o.hasOwnProperty(b) || tt(
                  e,
                  n,
                  b,
                  null,
                  o,
                  D
                );
            }
        for (c in o)
          if (b = o[c], D = a[c], o.hasOwnProperty(c) && (b != null || D != null))
            switch (c) {
              case "value":
                F = b;
                break;
              case "defaultValue":
                O = b;
                break;
              case "multiple":
                A = b;
              default:
                b !== D && tt(
                  e,
                  n,
                  c,
                  b,
                  o,
                  D
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
          if (c = o[A], b = a[A], o.hasOwnProperty(A) && (c != null || b != null))
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
                c !== b && tt(e, n, A, c, o, b);
            }
        Ch(e, F, Z);
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
        for (D in o)
          if (F = o[D], Z = a[D], o.hasOwnProperty(D) && F !== Z && (F != null || Z != null))
            switch (D) {
              case "selected":
                e.selected = F && typeof F != "function" && typeof F != "symbol";
                break;
              default:
                tt(
                  e,
                  n,
                  D,
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
        for (q in o)
          if (F = o[q], Z = a[q], o.hasOwnProperty(q) && F !== Z && (F != null || Z != null))
            switch (q) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (F != null)
                  throw Error(s(137, n));
                break;
              default:
                tt(
                  e,
                  n,
                  q,
                  F,
                  o,
                  Z
                );
            }
        return;
      default:
        if (Hu(n)) {
          for (var nt in a)
            F = a[nt], a.hasOwnProperty(nt) && F !== void 0 && !o.hasOwnProperty(nt) && Af(
              e,
              n,
              nt,
              void 0,
              o,
              F
            );
          for (Q in o)
            F = o[Q], Z = a[Q], !o.hasOwnProperty(Q) || F === Z || F === void 0 && Z === void 0 || Af(
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
  var Nf = null, Tf = null;
  function ul(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Ng(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Tg(e, n) {
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
  var kf = null;
  function d_() {
    var e = window.event;
    return e && e.type === "popstate" ? e === kf ? !1 : (kf = e, !0) : (kf = null, !1);
  }
  var Og = typeof setTimeout == "function" ? setTimeout : void 0, h_ = typeof clearTimeout == "function" ? clearTimeout : void 0, kg = typeof Promise == "function" ? Promise : void 0, p_ = typeof queueMicrotask == "function" ? queueMicrotask : typeof kg < "u" ? function(e) {
    return kg.resolve(null).then(e).catch(m_);
  } : Og;
  function m_(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Yr(e) {
    return e === "head";
  }
  function Mg(e, n) {
    var a = n, o = 0, c = 0;
    do {
      var b = a.nextSibling;
      if (e.removeChild(a), b && b.nodeType === 8)
        if (a = b.data, a === "/$") {
          if (0 < o && 8 > o) {
            a = o;
            var A = e.ownerDocument;
            if (a & 1 && As(A.documentElement), a & 2 && As(A.body), a & 4)
              for (a = A.head, As(a), A = a.firstChild; A; ) {
                var O = A.nextSibling, D = A.nodeName;
                A[Hi] || D === "SCRIPT" || D === "STYLE" || D === "LINK" && A.rel.toLowerCase() === "stylesheet" || a.removeChild(A), A = O;
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
  function Mf(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var a = n;
      switch (n = n.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Mf(a), zu(a);
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
  var Df = null;
  function jg(e) {
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
    switch (n = ul(a), e) {
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
    zu(e);
  }
  var In = /* @__PURE__ */ new Map(), Rg = /* @__PURE__ */ new Set();
  function cl(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Sr = ne.d;
  ne.d = {
    f: b_,
    r: __,
    D: S_,
    C: x_,
    L: E_,
    m: w_,
    X: A_,
    S: C_,
    M: N_
  };
  function b_() {
    var e = Sr.f(), n = tl();
    return e || n;
  }
  function __(e) {
    var n = qa(e);
    n !== null && n.tag === 5 && n.type === "form" ? em(n) : Sr.r(e);
  }
  var xi = typeof document > "u" ? null : document;
  function zg(e, n, a) {
    var o = xi;
    if (o && typeof n == "string" && n) {
      var c = kn(n);
      c = 'link[rel="' + e + '"][href="' + c + '"]', typeof a == "string" && (c += '[crossorigin="' + a + '"]'), Rg.has(c) || (Rg.add(c), e = { rel: e, crossOrigin: a, href: n }, o.querySelector(c) === null && (n = o.createElement("link"), Ht(n, "link", e), zt(n), o.head.appendChild(n)));
    }
  }
  function S_(e) {
    Sr.D(e), zg("dns-prefetch", e, null);
  }
  function x_(e, n) {
    Sr.C(e, n), zg("preconnect", e, n);
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
      In.has(b) || (e = g(
        {
          rel: "preload",
          href: n === "image" && a && a.imageSrcSet ? void 0 : e,
          as: n
        },
        a
      ), In.set(b, e), o.querySelector(c) !== null || n === "style" && o.querySelector(Ns(b)) || n === "script" && o.querySelector(Ts(b)) || (n = o.createElement("link"), Ht(n, "link", e), zt(n), o.head.appendChild(n)));
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
      if (!In.has(b) && (e = g({ rel: "modulepreload", href: e }, n), In.set(b, e), a.querySelector(c) === null)) {
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
      var A = c.get(b);
      if (!A) {
        var O = { loading: 0, preload: null };
        if (A = o.querySelector(
          Ns(b)
        ))
          O.loading = 5;
        else {
          e = g(
            { rel: "stylesheet", href: e, "data-precedence": n },
            a
          ), (a = In.get(b)) && Rf(e, a);
          var D = A = o.createElement("link");
          zt(D), Ht(D, "link", e), D._p = new Promise(function(q, Q) {
            D.onload = q, D.onerror = Q;
          }), D.addEventListener("load", function() {
            O.loading |= 1;
          }), D.addEventListener("error", function() {
            O.loading |= 2;
          }), O.loading |= 4, fl(A, n, o);
        }
        A = {
          type: "stylesheet",
          instance: A,
          count: 1,
          state: O
        }, c.set(b, A);
      }
    }
  }
  function A_(e, n) {
    Sr.X(e, n);
    var a = xi;
    if (a && e) {
      var o = Fa(a).hoistableScripts, c = wi(e), b = o.get(c);
      b || (b = a.querySelector(Ts(c)), b || (e = g({ src: e, async: !0 }, n), (n = In.get(c)) && zf(e, n), b = a.createElement("script"), zt(b), Ht(b, "link", e), a.head.appendChild(b)), b = {
        type: "script",
        instance: b,
        count: 1,
        state: null
      }, o.set(c, b));
    }
  }
  function N_(e, n) {
    Sr.M(e, n);
    var a = xi;
    if (a && e) {
      var o = Fa(a).hoistableScripts, c = wi(e), b = o.get(c);
      b || (b = a.querySelector(Ts(c)), b || (e = g({ src: e, async: !0, type: "module" }, n), (n = In.get(c)) && zf(e, n), b = a.createElement("script"), zt(b), Ht(b, "link", e), a.head.appendChild(b)), b = {
        type: "script",
        instance: b,
        count: 1,
        state: null
      }, o.set(c, b));
    }
  }
  function Lg(e, n, a, o) {
    var c = (c = $.current) ? cl(c) : null;
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
          ).hoistableStyles, A = b.get(e);
          if (A || (c = c.ownerDocument || c, A = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, b.set(e, A), (b = c.querySelector(
            Ns(e)
          )) && !b._p && (A.instance = b, A.state.loading = 5), In.has(e) || (a = {
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
  function Ig(e) {
    return g({}, e, {
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
  function Pg(e, n, a) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var o = e.querySelector(
            'style[data-href~="' + kn(a.href) + '"]'
          );
          if (o)
            return n.instance = o, zt(o), o;
          var c = g({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return o = (e.ownerDocument || e).createElement(
            "style"
          ), zt(o), Ht(o, "style", c), fl(o, a.precedence, e), n.instance = o;
        case "stylesheet":
          c = Ei(a.href);
          var b = e.querySelector(
            Ns(c)
          );
          if (b)
            return n.state.loading |= 4, n.instance = b, zt(b), b;
          o = Ig(a), (c = In.get(c)) && Rf(o, c), b = (e.ownerDocument || e).createElement("link"), zt(b);
          var A = b;
          return A._p = new Promise(function(O, D) {
            A.onload = O, A.onerror = D;
          }), Ht(b, "link", o), n.state.loading |= 4, fl(b, a.precedence, e), n.instance = b;
        case "script":
          return b = wi(a.src), (c = e.querySelector(
            Ts(b)
          )) ? (n.instance = c, zt(c), c) : (o = a, (c = In.get(b)) && (o = g({}, a), zf(o, c)), e = e.ownerDocument || e, c = e.createElement("script"), zt(c), Ht(c, "link", o), e.head.appendChild(c), n.instance = c);
        case "void":
          return null;
        default:
          throw Error(s(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (o = n.instance, n.state.loading |= 4, fl(o, a.precedence, e));
    return n.instance;
  }
  function fl(e, n, a) {
    for (var o = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), c = o.length ? o[o.length - 1] : null, b = c, A = 0; A < o.length; A++) {
      var O = o[A];
      if (O.dataset.precedence === n) b = O;
      else if (b !== c) break;
    }
    b ? b.parentNode.insertBefore(e, b.nextSibling) : (n = a.nodeType === 9 ? a.head : a, n.insertBefore(e, n.firstChild));
  }
  function Rf(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.title == null && (e.title = n.title);
  }
  function zf(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.integrity == null && (e.integrity = n.integrity);
  }
  var dl = null;
  function Bg(e, n, a) {
    if (dl === null) {
      var o = /* @__PURE__ */ new Map(), c = dl = /* @__PURE__ */ new Map();
      c.set(a, o);
    } else
      c = dl, o = c.get(a), o || (o = /* @__PURE__ */ new Map(), c.set(a, o));
    if (o.has(e)) return o;
    for (o.set(e, null), a = a.getElementsByTagName(e), c = 0; c < a.length; c++) {
      var b = a[c];
      if (!(b[Hi] || b[Zt] || e === "link" && b.getAttribute("rel") === "stylesheet") && b.namespaceURI !== "http://www.w3.org/2000/svg") {
        var A = b.getAttribute(n) || "";
        A = e + A;
        var O = o.get(A);
        O ? O.push(b) : o.set(A, [b]);
      }
    }
    return o;
  }
  function Ug(e, n, a) {
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
  function Hg(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Os = null;
  function k_() {
  }
  function M_(e, n, a) {
    if (Os === null) throw Error(s(475));
    var o = Os;
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var c = Ei(a.href), b = e.querySelector(
          Ns(c)
        );
        if (b) {
          e = b._p, e !== null && typeof e == "object" && typeof e.then == "function" && (o.count++, o = hl.bind(o), e.then(o, o)), n.state.loading |= 4, n.instance = b, zt(b);
          return;
        }
        b = e.ownerDocument || e, a = Ig(a), (c = In.get(c)) && Rf(a, c), b = b.createElement("link"), zt(b);
        var A = b;
        A._p = new Promise(function(O, D) {
          A.onload = O, A.onerror = D;
        }), Ht(b, "link", a), n.instance = b;
      }
      o.stylesheets === null && (o.stylesheets = /* @__PURE__ */ new Map()), o.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (o.count++, n = hl.bind(o), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  function j_() {
    if (Os === null) throw Error(s(475));
    var e = Os;
    return e.stylesheets && e.count === 0 && Lf(e, e.stylesheets), 0 < e.count ? function(n) {
      var a = setTimeout(function() {
        if (e.stylesheets && Lf(e, e.stylesheets), e.unsuspend) {
          var o = e.unsuspend;
          e.unsuspend = null, o();
        }
      }, 6e4);
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(a);
      };
    } : null;
  }
  function hl() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Lf(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var pl = null;
  function Lf(e, n) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, pl = /* @__PURE__ */ new Map(), n.forEach(D_, e), pl = null, hl.call(e));
  }
  function D_(e, n) {
    if (!(n.state.loading & 4)) {
      var a = pl.get(e);
      if (a) var o = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), pl.set(e, a);
        for (var c = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), b = 0; b < c.length; b++) {
          var A = c[b];
          (A.nodeName === "LINK" || A.getAttribute("media") !== "not all") && (a.set(A.dataset.precedence, A), o = A);
        }
        o && a.set(null, o);
      }
      c = n.instance, A = c.getAttribute("data-precedence"), b = a.get(A) || o, b === o && a.set(null, c), a.set(A, c), this.count++, o = hl.bind(this), c.addEventListener("load", o), c.addEventListener("error", o), b ? b.parentNode.insertBefore(c, b.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(c, e.firstChild)), n.state.loading |= 4;
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
  function R_(e, n, a, o, c, b, A, O) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Mu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Mu(0), this.hiddenUpdates = Mu(null), this.identifierPrefix = o, this.onUncaughtError = c, this.onCaughtError = b, this.onRecoverableError = A, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = O, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function qg(e, n, a, o, c, b, A, O, D, q, Q, W) {
    return e = new R_(
      e,
      n,
      a,
      A,
      O,
      D,
      q,
      W
    ), n = 1, b === !0 && (n |= 24), b = vn(3, null, null, n), e.current = b, b.stateNode = e, n = gc(), n.refCount++, e.pooledCache = n, n.refCount++, b.memoizedState = {
      element: o,
      isDehydrated: a,
      cache: n
    }, _c(b), e;
  }
  function Fg(e) {
    return e ? (e = ti, e) : ti;
  }
  function Zg(e, n, a, o, c, b) {
    c = Fg(c), o.context === null ? o.context = c : o.pendingContext = c, o = Rr(n), o.payload = { element: a }, b = b === void 0 ? null : b, b !== null && (o.callback = b), a = zr(e, o, n), a !== null && (xn(a, e, n), ss(a, e, n));
  }
  function Gg(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < n ? a : n;
    }
  }
  function If(e, n) {
    Gg(e, n), (e = e.alternate) && Gg(e, n);
  }
  function Vg(e) {
    if (e.tag === 13) {
      var n = ei(e, 67108864);
      n !== null && xn(n, e, 67108864), If(e, 67108864);
    }
  }
  var ml = !0;
  function z_(e, n, a, o) {
    var c = I.T;
    I.T = null;
    var b = ne.p;
    try {
      ne.p = 2, Pf(e, n, a, o);
    } finally {
      ne.p = b, I.T = c;
    }
  }
  function L_(e, n, a, o) {
    var c = I.T;
    I.T = null;
    var b = ne.p;
    try {
      ne.p = 8, Pf(e, n, a, o);
    } finally {
      ne.p = b, I.T = c;
    }
  }
  function Pf(e, n, a, o) {
    if (ml) {
      var c = Bf(o);
      if (c === null)
        Cf(
          e,
          n,
          o,
          gl,
          a
        ), Xg(e, o);
      else if (P_(
        c,
        e,
        n,
        a,
        o
      ))
        o.stopPropagation();
      else if (Xg(e, o), n & 4 && -1 < I_.indexOf(e)) {
        for (; c !== null; ) {
          var b = qa(c);
          if (b !== null)
            switch (b.tag) {
              case 3:
                if (b = b.stateNode, b.current.memoizedState.isDehydrated) {
                  var A = qe(b.pendingLanes);
                  if (A !== 0) {
                    var O = b;
                    for (O.pendingLanes |= 2, O.entangledLanes |= 2; A; ) {
                      var D = 1 << 31 - Be(A);
                      O.entanglements[1] |= D, A &= ~D;
                    }
                    nr(b), (Qe & 6) === 0 && (Wo = $e() + 500, Es(0));
                  }
                }
                break;
              case 13:
                O = ei(b, 2), O !== null && xn(O, b, 2), tl(), If(b, 2);
            }
          if (b = Bf(o), b === null && Cf(
            e,
            n,
            o,
            gl,
            a
          ), b === c) break;
          c = b;
        }
        c !== null && o.stopPropagation();
      } else
        Cf(
          e,
          n,
          o,
          null,
          a
        );
    }
  }
  function Bf(e) {
    return e = Fu(e), Uf(e);
  }
  var gl = null;
  function Uf(e) {
    if (gl = null, e = Ha(e), e !== null) {
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
    return gl = e, null;
  }
  function Yg(e) {
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
  var Hf = !1, Xr = null, $r = null, Jr = null, Ms = /* @__PURE__ */ new Map(), js = /* @__PURE__ */ new Map(), Qr = [], I_ = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Xg(e, n) {
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
        Ms.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        js.delete(n.pointerId);
    }
  }
  function Ds(e, n, a, o, c, b) {
    return e === null || e.nativeEvent !== b ? (e = {
      blockedOn: n,
      domEventName: a,
      eventSystemFlags: o,
      nativeEvent: b,
      targetContainers: [c]
    }, n !== null && (n = qa(n), n !== null && Vg(n)), e) : (e.eventSystemFlags |= o, n = e.targetContainers, c !== null && n.indexOf(c) === -1 && n.push(c), e);
  }
  function P_(e, n, a, o, c) {
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
        var b = c.pointerId;
        return Ms.set(
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
      case "gotpointercapture":
        return b = c.pointerId, js.set(
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
    }
    return !1;
  }
  function $g(e) {
    var n = Ha(e.target);
    if (n !== null) {
      var a = u(n);
      if (a !== null) {
        if (n = a.tag, n === 13) {
          if (n = f(a), n !== null) {
            e.blockedOn = n, M1(e.priority, function() {
              if (a.tag === 13) {
                var o = Sn();
                o = ju(o);
                var c = ei(a, o);
                c !== null && xn(c, a, o), If(a, o);
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
  function vl(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var a = Bf(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var o = new a.constructor(
          a.type,
          a
        );
        qu = o, a.target.dispatchEvent(o), qu = null;
      } else
        return n = qa(a), n !== null && Vg(n), e.blockedOn = a, !1;
      n.shift();
    }
    return !0;
  }
  function Jg(e, n, a) {
    vl(e) && a.delete(n);
  }
  function B_() {
    Hf = !1, Xr !== null && vl(Xr) && (Xr = null), $r !== null && vl($r) && ($r = null), Jr !== null && vl(Jr) && (Jr = null), Ms.forEach(Jg), js.forEach(Jg);
  }
  function yl(e, n) {
    e.blockedOn === n && (e.blockedOn = null, Hf || (Hf = !0, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      B_
    )));
  }
  var bl = null;
  function Qg(e) {
    bl !== e && (bl = e, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      function() {
        bl === e && (bl = null);
        for (var n = 0; n < e.length; n += 3) {
          var a = e[n], o = e[n + 1], c = e[n + 2];
          if (typeof o != "function") {
            if (Uf(o || a) === null)
              continue;
            break;
          }
          var b = qa(a);
          b !== null && (e.splice(n, 3), n -= 3, Bc(
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
    function n(D) {
      return yl(D, e);
    }
    Xr !== null && yl(Xr, e), $r !== null && yl($r, e), Jr !== null && yl(Jr, e), Ms.forEach(n), js.forEach(n);
    for (var a = 0; a < Qr.length; a++) {
      var o = Qr[a];
      o.blockedOn === e && (o.blockedOn = null);
    }
    for (; 0 < Qr.length && (a = Qr[0], a.blockedOn === null); )
      $g(a), a.blockedOn === null && Qr.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (o = 0; o < a.length; o += 3) {
        var c = a[o], b = a[o + 1], A = c[rn] || null;
        if (typeof b == "function")
          A || Qg(a);
        else if (A) {
          var O = null;
          if (b && b.hasAttribute("formAction")) {
            if (c = b, A = b[rn] || null)
              O = A.formAction;
            else if (Uf(c) !== null) continue;
          } else O = A.action;
          typeof O == "function" ? a[o + 1] = O : (a.splice(o, 3), o -= 3), Qg(a);
        }
      }
  }
  function qf(e) {
    this._internalRoot = e;
  }
  _l.prototype.render = qf.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(s(409));
    var a = n.current, o = Sn();
    Zg(a, o, e, n, null, null);
  }, _l.prototype.unmount = qf.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      Zg(e.current, 2, null, e, null, null), tl(), n[Ua] = null;
    }
  };
  function _l(e) {
    this._internalRoot = e;
  }
  _l.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = ph();
      e = { blockedOn: null, target: e, priority: n };
      for (var a = 0; a < Qr.length && n !== 0 && n < Qr[a].priority; a++) ;
      Qr.splice(a, 0, e), a === 0 && $g(e);
    }
  };
  var Kg = r.version;
  if (Kg !== "19.1.1")
    throw Error(
      s(
        527,
        Kg,
        "19.1.1"
      )
    );
  ne.findDOMNode = function(e) {
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = d(n), e = e !== null ? v(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var U_ = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: I,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Sl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Sl.isDisabled && Sl.supportsFiber)
      try {
        ae = Sl.inject(
          U_
        ), te = Sl;
      } catch {
      }
  }
  return Ps.createRoot = function(e, n) {
    if (!l(e)) throw Error(s(299));
    var a = !1, o = "", c = pm, b = mm, A = gm, O = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onUncaughtError !== void 0 && (c = n.onUncaughtError), n.onCaughtError !== void 0 && (b = n.onCaughtError), n.onRecoverableError !== void 0 && (A = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (O = n.unstable_transitionCallbacks)), n = qg(
      e,
      1,
      !1,
      null,
      null,
      a,
      o,
      c,
      b,
      A,
      O,
      null
    ), e[Ua] = n.current, wf(e), new qf(n);
  }, Ps.hydrateRoot = function(e, n, a) {
    if (!l(e)) throw Error(s(299));
    var o = !1, c = "", b = pm, A = mm, O = gm, D = null, q = null;
    return a != null && (a.unstable_strictMode === !0 && (o = !0), a.identifierPrefix !== void 0 && (c = a.identifierPrefix), a.onUncaughtError !== void 0 && (b = a.onUncaughtError), a.onCaughtError !== void 0 && (A = a.onCaughtError), a.onRecoverableError !== void 0 && (O = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (D = a.unstable_transitionCallbacks), a.formState !== void 0 && (q = a.formState)), n = qg(
      e,
      1,
      !0,
      n,
      a ?? null,
      o,
      c,
      b,
      A,
      O,
      D,
      q
    ), n.context = Fg(null), a = n.current, o = Sn(), o = ju(o), c = Rr(o), c.callback = null, zr(a, c, o), a = o, n.current.lanes = a, Ui(n, a), nr(n), e[Ua] = n.current, wf(e), new _l(n);
  }, Ps.version = "19.1.1", Ps;
}
var hv;
function g2() {
  if (hv) return Vf.exports;
  hv = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return t(), Vf.exports = m2(), Vf.exports;
}
var v2 = g2();
const pv = /* @__PURE__ */ Vd(v2);
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
var E2 = Object.defineProperty, w2 = (t, r, i) => r in t ? E2(t, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[r] = i, mv = (t, r, i) => w2(t, typeof r != "symbol" ? r + "" : r, i);
class i0 {
  constructor(r, i) {
    mv(this, "settingsKey"), mv(this, "defaultSettings"), this.settingsKey = r, this.defaultSettings = i;
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
      let d = function(v, g) {
        let _ = !1;
        for (const m of Object.keys(g))
          v[m] === void 0 ? (v[m] = g[m], _ = !0) : typeof g[m] == "object" && g[m] !== null && (v[m] = v[m] || {}, d(v[m], g[m]) && (_ = !0));
        return _;
      };
      s && u.version !== s && (p.version.changed = !0, p.version.new = s, u.version = s), l && l !== "*" && u.formatVersion !== l && (p.formatVersion.changed = !0, p.formatVersion.new = l, u.formatVersion = l), (d(u, this.defaultSettings) || p.version.changed || p.formatVersion.changed) && this.saveSettings();
    } else if (Array.isArray(i)) {
      s && !u.version && (u.version = s, p.version.changed = !0, p.version.new = s), l && !u.formatVersion && (u.formatVersion = l, p.formatVersion.changed = !0, p.formatVersion.new = l);
      let d = structuredClone(u), v = u.formatVersion;
      try {
        let g;
        do {
          g = !1;
          let _ = i.find((m) => m.from === v);
          if (_ && _.to > v)
            d = await _.action(d), v = _.to, d.formatVersion = _.to, g = !0;
          else
            for (const m of i)
              if (m.from === "*" && m.to > v && v !== m.to) {
                d = await m.action(d), v = m.to, d.formatVersion = m.to, g = !0;
                break;
              }
        } while (g);
        if (v !== u.formatVersion) {
          p.formatVersion.changed = !0, p.formatVersion.new = v;
          const _ = this.defaultSettings.version;
          _ && (d.version = _);
        }
        if (p.formatVersion.changed) {
          for (const _ of Object.keys(u))
            delete u[_];
          Object.assign(u, d), this.saveSettings();
        }
      } catch (g) {
        throw console.error("Failed to apply version changes:", g), new Error(`Version migration failed: ${g instanceof Error ? g.message : g}`, {
          cause: g
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
  return Array.isArray ? Array.isArray(t) : l0(t) === "[object Array]";
}
function C2(t) {
  if (typeof t == "string")
    return t;
  let r = t + "";
  return r == "0" && 1 / t == -1 / 0 ? "-0" : r;
}
function A2(t) {
  return t == null ? "" : C2(t);
}
function ar(t) {
  return typeof t == "string";
}
function s0(t) {
  return typeof t == "number";
}
function N2(t) {
  return t === !0 || t === !1 || T2(t) && l0(t) == "[object Boolean]";
}
function o0(t) {
  return typeof t == "object";
}
function T2(t) {
  return o0(t) && t !== null;
}
function An(t) {
  return t != null;
}
function Jf(t) {
  return !t.trim().length;
}
function l0(t) {
  return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
}
const O2 = "Incorrect 'index' type", k2 = (t) => `Invalid value for key ${t}`, M2 = (t) => `Pattern length exceeds max of ${t}.`, j2 = (t) => `Missing ${t} property in key`, D2 = (t) => `Property 'weight' in key '${t}' must be a positive integer`, gv = Object.prototype.hasOwnProperty;
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
  if (ar(t) || Nr(t))
    s = t, r = vv(t), i = Sd(t);
  else {
    if (!gv.call(t, "name"))
      throw new Error(j2("name"));
    const f = t.name;
    if (s = f, gv.call(t, "weight") && (l = t.weight, l <= 0))
      throw new Error(D2(f));
    r = vv(f), i = Sd(f), u = t.getFn;
  }
  return { path: r, id: i, weight: l, src: s, getFn: u };
}
function vv(t) {
  return Nr(t) ? t : t.split(".");
}
function Sd(t) {
  return Nr(t) ? t.join(".") : t;
}
function z2(t, r) {
  let i = [], s = !1;
  const l = (u, f, p) => {
    if (An(u))
      if (!f[p])
        i.push(u);
      else {
        let d = f[p];
        const v = u[d];
        if (!An(v))
          return;
        if (p === f.length - 1 && (ar(v) || s0(v) || N2(v)))
          i.push(A2(v));
        else if (Nr(v)) {
          s = !0;
          for (let g = 0, _ = v.length; g < _; g += 1)
            l(v[g], f, p + 1);
        } else f.length && l(v, f, p + 1);
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
var Ae = {
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
class Xd {
  constructor({
    getFn: r = Ae.getFn,
    fieldNormWeight: i = Ae.fieldNormWeight
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
    if (!An(r) || Jf(r))
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
            const { nestedArrIndex: v, value: g } = d.pop();
            if (An(g))
              if (ar(g) && !Jf(g)) {
                let _ = {
                  v: g,
                  i: v,
                  n: this.norm.get(g)
                };
                p.push(_);
              } else Nr(g) && g.forEach((_, m) => {
                d.push({
                  nestedArrIndex: m,
                  value: _
                });
              });
          }
          s.$[u] = p;
        } else if (ar(f) && !Jf(f)) {
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
function c0(t, r, { getFn: i = Ae.getFn, fieldNormWeight: s = Ae.fieldNormWeight } = {}) {
  const l = new Xd({ getFn: i, fieldNormWeight: s });
  return l.setKeys(t.map(u0)), l.setSources(r), l.create(), l;
}
function q2(t, { getFn: r = Ae.getFn, fieldNormWeight: i = Ae.fieldNormWeight } = {}) {
  const { keys: s, records: l } = t, u = new Xd({ getFn: r, fieldNormWeight: i });
  return u.setKeys(s), u.setIndexRecords(l), u;
}
function xl(t, {
  errors: r = 0,
  currentLocation: i = 0,
  expectedLocation: s = 0,
  distance: l = Ae.distance,
  ignoreLocation: u = Ae.ignoreLocation
} = {}) {
  const f = r / t.length;
  if (u)
    return f;
  const p = Math.abs(s - i);
  return l ? f + p / l : p ? 1 : f;
}
function F2(t = [], r = Ae.minMatchCharLength) {
  let i = [], s = -1, l = -1, u = 0;
  for (let f = t.length; u < f; u += 1) {
    let p = t[u];
    p && s === -1 ? s = u : !p && s !== -1 && (l = u - 1, l - s + 1 >= r && i.push([s, l]), s = -1);
  }
  return t[u - 1] && u - s >= r && i.push([s, u - 1]), i;
}
const Ma = 32;
function Z2(t, r, i, {
  location: s = Ae.location,
  distance: l = Ae.distance,
  threshold: u = Ae.threshold,
  findAllMatches: f = Ae.findAllMatches,
  minMatchCharLength: p = Ae.minMatchCharLength,
  includeMatches: d = Ae.includeMatches,
  ignoreLocation: v = Ae.ignoreLocation
} = {}) {
  if (r.length > Ma)
    throw new Error(M2(Ma));
  const g = r.length, _ = t.length, m = Math.max(0, Math.min(s, _));
  let y = u, h = m;
  const x = p > 1 || d, C = x ? Array(_) : [];
  let T;
  for (; (T = t.indexOf(r, h)) > -1; ) {
    let j = xl(r, {
      currentLocation: T,
      expectedLocation: m,
      distance: l,
      ignoreLocation: v
    });
    if (y = Math.min(j, y), h = T + g, x) {
      let U = 0;
      for (; U < g; )
        C[T + U] = 1, U += 1;
    }
  }
  h = -1;
  let w = [], k = 1, E = g + _;
  const N = 1 << g - 1;
  for (let j = 0; j < g; j += 1) {
    let U = 0, G = E;
    for (; U < G; )
      xl(r, {
        errors: j,
        currentLocation: m + G,
        expectedLocation: m,
        distance: l,
        ignoreLocation: v
      }) <= y ? U = G : E = G, G = Math.floor((E - U) / 2 + U);
    E = G;
    let P = Math.max(1, m - G + 1), Y = f ? _ : Math.min(m + G, _) + g, V = Array(Y + 2);
    V[Y + 1] = (1 << j) - 1;
    for (let fe = Y; fe >= P; fe -= 1) {
      let ue = fe - 1, I = i[t.charAt(ue)];
      if (x && (C[ue] = +!!I), V[fe] = (V[fe + 1] << 1 | 1) & I, j && (V[fe] |= (w[fe + 1] | w[fe]) << 1 | 1 | w[fe + 1]), V[fe] & N && (k = xl(r, {
        errors: j,
        currentLocation: ue,
        expectedLocation: m,
        distance: l,
        ignoreLocation: v
      }), k <= y)) {
        if (y = k, h = ue, h <= m)
          break;
        P = Math.max(1, 2 * m - h);
      }
    }
    if (xl(r, {
      errors: j + 1,
      currentLocation: m,
      expectedLocation: m,
      distance: l,
      ignoreLocation: v
    }) > y)
      break;
    w = V;
  }
  const M = {
    isMatch: h >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, k)
  };
  if (x) {
    const j = F2(C, p);
    j.length ? d && (M.indices = j) : M.isMatch = !1;
  }
  return M;
}
function G2(t) {
  let r = {};
  for (let i = 0, s = t.length; i < s; i += 1) {
    const l = t.charAt(i);
    r[l] = (r[l] || 0) | 1 << s - i - 1;
  }
  return r;
}
const du = String.prototype.normalize ? ((t) => t.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((t) => t);
class f0 {
  constructor(r, {
    location: i = Ae.location,
    threshold: s = Ae.threshold,
    distance: l = Ae.distance,
    includeMatches: u = Ae.includeMatches,
    findAllMatches: f = Ae.findAllMatches,
    minMatchCharLength: p = Ae.minMatchCharLength,
    isCaseSensitive: d = Ae.isCaseSensitive,
    ignoreDiacritics: v = Ae.ignoreDiacritics,
    ignoreLocation: g = Ae.ignoreLocation
  } = {}) {
    if (this.options = {
      location: i,
      threshold: s,
      distance: l,
      includeMatches: u,
      findAllMatches: f,
      minMatchCharLength: p,
      isCaseSensitive: d,
      ignoreDiacritics: v,
      ignoreLocation: g
    }, r = d ? r : r.toLowerCase(), r = v ? du(r) : r, this.pattern = r, this.chunks = [], !this.pattern.length)
      return;
    const _ = (y, h) => {
      this.chunks.push({
        pattern: y,
        alphabet: G2(y),
        startIndex: h
      });
    }, m = this.pattern.length;
    if (m > Ma) {
      let y = 0;
      const h = m % Ma, x = m - h;
      for (; y < x; )
        _(this.pattern.substr(y, Ma), y), y += Ma;
      if (h) {
        const C = m - Ma;
        _(this.pattern.substr(C), C);
      }
    } else
      _(this.pattern, 0);
  }
  searchIn(r) {
    const { isCaseSensitive: i, ignoreDiacritics: s, includeMatches: l } = this.options;
    if (r = i ? r : r.toLowerCase(), r = s ? du(r) : r, this.pattern === r) {
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
      minMatchCharLength: v,
      ignoreLocation: g
    } = this.options;
    let _ = [], m = 0, y = !1;
    this.chunks.forEach(({ pattern: x, alphabet: C, startIndex: T }) => {
      const { isMatch: w, score: k, indices: E } = Z2(r, x, C, {
        location: u + T,
        distance: f,
        threshold: p,
        findAllMatches: d,
        minMatchCharLength: v,
        includeMatches: l,
        ignoreLocation: g
      });
      w && (y = !0), m += k, w && E && (_ = [..._, ...E]);
    });
    let h = {
      isMatch: y,
      score: y ? m / this.chunks.length : 1
    };
    return y && l && (h.indices = _), h;
  }
}
class ia {
  constructor(r) {
    this.pattern = r;
  }
  static isMultiMatch(r) {
    return yv(r, this.multiRegex);
  }
  static isSingleMatch(r) {
    return yv(r, this.singleRegex);
  }
  search() {
  }
}
function yv(t, r) {
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
class X2 extends ia {
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
class $2 extends ia {
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
class J2 extends ia {
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
class Q2 extends ia {
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
    location: i = Ae.location,
    threshold: s = Ae.threshold,
    distance: l = Ae.distance,
    includeMatches: u = Ae.includeMatches,
    findAllMatches: f = Ae.findAllMatches,
    minMatchCharLength: p = Ae.minMatchCharLength,
    isCaseSensitive: d = Ae.isCaseSensitive,
    ignoreDiacritics: v = Ae.ignoreDiacritics,
    ignoreLocation: g = Ae.ignoreLocation
  } = {}) {
    super(r), this._bitapSearch = new f0(r, {
      location: i,
      threshold: s,
      distance: l,
      includeMatches: u,
      findAllMatches: f,
      minMatchCharLength: p,
      isCaseSensitive: d,
      ignoreDiacritics: v,
      ignoreLocation: g
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
const xd = [
  V2,
  h0,
  X2,
  $2,
  Q2,
  J2,
  Y2,
  d0
], bv = xd.length, K2 = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, W2 = "|";
function eS(t, r = {}) {
  return t.split(W2).map((i) => {
    let s = i.trim().split(K2).filter((u) => u && !!u.trim()), l = [];
    for (let u = 0, f = s.length; u < f; u += 1) {
      const p = s[u];
      let d = !1, v = -1;
      for (; !d && ++v < bv; ) {
        const g = xd[v];
        let _ = g.isMultiMatch(p);
        _ && (l.push(new g(_, r)), d = !0);
      }
      if (!d)
        for (v = -1; ++v < bv; ) {
          const g = xd[v];
          let _ = g.isSingleMatch(p);
          if (_) {
            l.push(new g(_, r));
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
    isCaseSensitive: i = Ae.isCaseSensitive,
    ignoreDiacritics: s = Ae.ignoreDiacritics,
    includeMatches: l = Ae.includeMatches,
    minMatchCharLength: u = Ae.minMatchCharLength,
    ignoreLocation: f = Ae.ignoreLocation,
    findAllMatches: p = Ae.findAllMatches,
    location: d = Ae.location,
    threshold: v = Ae.threshold,
    distance: g = Ae.distance
  } = {}) {
    this.query = null, this.options = {
      isCaseSensitive: i,
      ignoreDiacritics: s,
      includeMatches: l,
      minMatchCharLength: u,
      findAllMatches: p,
      ignoreLocation: f,
      location: d,
      threshold: v,
      distance: g
    }, r = i ? r : r.toLowerCase(), r = s ? du(r) : r, this.pattern = r, this.query = eS(this.pattern, this.options);
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
    r = l ? r : r.toLowerCase(), r = u ? du(r) : r;
    let f = 0, p = [], d = 0;
    for (let v = 0, g = i.length; v < g; v += 1) {
      const _ = i[v];
      p.length = 0, f = 0;
      for (let m = 0, y = _.length; m < y; m += 1) {
        const h = _[m], { isMatch: x, indices: C, score: T } = h.search(r);
        if (x) {
          if (f += 1, d += T, s) {
            const w = h.constructor.type;
            tS.has(w) ? p = [...p, ...C] : p.push(C);
          }
        } else {
          d = 0, f = 0, p.length = 0;
          break;
        }
      }
      if (f) {
        let m = {
          isMatch: !0,
          score: d / f
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
const Ed = [];
function rS(...t) {
  Ed.push(...t);
}
function wd(t, r) {
  for (let i = 0, s = Ed.length; i < s; i += 1) {
    let l = Ed[i];
    if (l.condition(t, r))
      return new l(t, r);
  }
  return new f0(t, r);
}
const hu = {
  AND: "$and",
  OR: "$or"
}, Cd = {
  PATH: "$path",
  PATTERN: "$val"
}, Ad = (t) => !!(t[hu.AND] || t[hu.OR]), aS = (t) => !!t[Cd.PATH], iS = (t) => !Nr(t) && o0(t) && !Ad(t), _v = (t) => ({
  [hu.AND]: Object.keys(t).map((r) => ({
    [r]: t[r]
  }))
});
function p0(t, r, { auto: i = !0 } = {}) {
  const s = (l) => {
    let u = Object.keys(l);
    const f = aS(l);
    if (!f && u.length > 1 && !Ad(l))
      return s(_v(l));
    if (iS(l)) {
      const d = f ? l[Cd.PATH] : u[0], v = f ? l[Cd.PATTERN] : l[d];
      if (!ar(v))
        throw new Error(k2(d));
      const g = {
        keyId: Sd(d),
        pattern: v
      };
      return i && (g.searcher = wd(v, r)), g;
    }
    let p = {
      children: [],
      operator: u[0]
    };
    return u.forEach((d) => {
      const v = l[d];
      Nr(v) && v.forEach((g) => {
        p.children.push(s(g));
      });
    }), p;
  };
  return Ad(t) || (t = _v(t)), s(t);
}
function sS(t, { ignoreFieldNorm: r = Ae.ignoreFieldNorm }) {
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
function lS(t, r) {
  r.score = t.score;
}
function uS(t, r, {
  includeMatches: i = Ae.includeMatches,
  includeScore: s = Ae.includeScore
} = {}) {
  const l = [];
  return i && l.push(oS), s && l.push(lS), t.map((u) => {
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
    this.options = { ...Ae, ...i }, this.options.useExtendedSearch, this._keyStore = new R2(this.options.keys), this.setCollection(r, s);
  }
  setCollection(r, i) {
    if (this._docs = r, i && !(i instanceof Xd))
      throw new Error(O2);
    this._myIndex = i || c0(this.options.keys, this._docs, {
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
    return sS(d, { ignoreFieldNorm: p }), u && d.sort(f), s0(i) && i > -1 && (d = d.slice(0, i)), uS(d, this._docs, {
      includeMatches: s,
      includeScore: l
    });
  }
  _searchStringList(r) {
    const i = wd(r, this.options), { records: s } = this._myIndex, l = [];
    return s.forEach(({ v: u, i: f, n: p }) => {
      if (!An(u))
        return;
      const { isMatch: d, score: v, indices: g } = i.searchIn(u);
      d && l.push({
        item: u,
        idx: f,
        matches: [{ score: v, value: u, norm: p, indices: g }]
      });
    }), l;
  }
  _searchLogical(r) {
    const i = p0(r, this.options), s = (p, d, v) => {
      if (!p.children) {
        const { keyId: _, searcher: m } = p, y = this._findMatches({
          key: this._keyStore.get(_),
          value: this._myIndex.getValueForItemAtKeyId(d, _),
          searcher: m
        });
        return y && y.length ? [
          {
            idx: v,
            item: d,
            matches: y
          }
        ] : [];
      }
      const g = [];
      for (let _ = 0, m = p.children.length; _ < m; _ += 1) {
        const y = p.children[_], h = s(y, d, v);
        if (h.length)
          g.push(...h);
        else if (p.operator === hu.AND)
          return [];
      }
      return g;
    }, l = this._myIndex.records, u = {}, f = [];
    return l.forEach(({ $: p, i: d }) => {
      if (An(p)) {
        let v = s(i, p, d);
        v.length && (u[d] || (u[d] = { idx: d, item: p, matches: [] }, f.push(u[d])), v.forEach(({ matches: g }) => {
          u[d].matches.push(...g);
        }));
      }
    }), f;
  }
  _searchObjectList(r) {
    const i = wd(r, this.options), { keys: s, records: l } = this._myIndex, u = [];
    return l.forEach(({ $: f, i: p }) => {
      if (!An(f))
        return;
      let d = [];
      s.forEach((v, g) => {
        d.push(
          ...this._findMatches({
            key: v,
            value: f[g],
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
        const { isMatch: d, score: v, indices: g } = s.searchIn(u);
        d && l.push({
          score: v,
          key: r,
          value: u,
          idx: f,
          norm: p,
          indices: g
        });
      });
    else {
      const { v: u, n: f } = i, { isMatch: p, score: d, indices: v } = s.searchIn(u);
      p && l.push({ score: d, key: r, value: u, norm: f, indices: v });
    }
    return l;
  }
}
Bi.version = "7.1.0";
Bi.createIndex = c0;
Bi.parseIndex = q2;
Bi.config = Ae;
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
        let d;
        for await (const v of p())
          d = v, i != null && i.onEntry && await i.onEntry(u, v);
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
async function pS(t, ...r) {
  await SillyTavern.getContext().SlashCommandParser.commands[t].callback(...r);
}
async function Ne(t, r, { escapeHtml: i = !0 } = {}) {
  await pS("echo", { severity: t, escapeHtml: (!!i).toString() }, r);
}
function Qf(t) {
  return G_(t);
}
function Sv(t, r) {
  return F_(t, r);
}
function El(t, r, i) {
  return Z_(t, r, i);
}
function mS(t, r, i) {
  return J_(t, r, i);
}
function gS(t, r) {
  return Q_(t, r);
}
function vS(t, {
  customStoryString: r,
  customInstructSettings: i
} = {}) {
  return q_(t, { customStoryString: r, customInstructSettings: i });
}
function Aa(t) {
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
  quietPrompt: d,
  quietImage: v,
  extensionPrompts: g,
  cyclePrompt: _,
  systemPromptOverride: m,
  jailbreakPromptOverride: y,
  personaDescription: h,
  messages: x,
  messageExamples: C
}, T) {
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
      quietPrompt: d,
      quietImage: v,
      cyclePrompt: _,
      systemPromptOverride: m,
      jailbreakPromptOverride: y,
      personaDescription: h,
      extensionPrompts: g,
      messages: x,
      messageExamples: C
    },
    T
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
function xv(t, {
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
var AS = Object.defineProperty, NS = (t, r, i) => r in t ? AS(t, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[r] = i, wl = (t, r, i) => NS(t, typeof r != "symbol" ? r + "" : r, i);
class TS {
  constructor(r) {
    wl(this, "messages", []), wl(this, "tokenizer"), wl(this, "maxContext"), wl(this, "currentTokenCount", 0), this.tokenizer = new CS(), this.maxContext = r;
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
      const d = i[p], v = s[p];
      if (this.currentTokenCount + u + v <= this.maxContext)
        f.unshift(d), u += v;
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
  ignoreCharacterFields: d,
  ignoreAuthorNote: v,
  ignoreWorldInfo: g,
  messageIndexesBetween: _
} = {}) {
  var m, y, h, x, C, T, w, k, E, N, M, j, U, G;
  if (!["textgenerationwebui", "openai"].includes(t))
    throw new Error("Unsupported API");
  const P = SillyTavern.getContext();
  let { description: Y, personality: V, persona: le, scenario: fe, mesExamples: ue, system: I, jailbreak: ne } = d ? {
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
  const ce = t === "textgenerationwebui" ? (m = P.getPresetManager("instruct")) == null ? void 0 : m.getCompletionPresetByName(s) : void 0, Me = !!(ce != null && ce.enabled);
  let R = Sv(ue, Me);
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
      const He = (me = P.getPresetManager("textgenerationwebui")) == null ? void 0 : me.getCompletionPresetByName(i);
      Ge = He?.max_length;
    } else {
      const He = (pe = P.getPresetManager("openai")) == null ? void 0 : pe.getCompletionPresetByName(i);
      Ge = He?.openai_max_context;
    }
    return typeof Ge == "number" ? Ge : Qf();
  }
  let re = [];
  const ie = J();
  if (ie <= 0)
    return { result: [], warnings: re };
  const se = new TS(ie), De = P.ToolManager.isToolCallingSupported(), $ = _?.start ?? 0, ve = _ != null && _.end ? _.end + 1 : void 0;
  let ye = $ === -1 && ve === 0 ? [] : P.chat.slice($, ve).filter((me) => {
    var pe;
    return !me.is_system || De && Array.isArray((pe = me.extra) == null ? void 0 : pe.tool_invocations);
  });
  ye = await Promise.all(
    ye.map(async (me, pe) => {
      var Ge, He;
      let st = me.mes, B = me.is_user ? tv.USER_INPUT : tv.AI_OUTPUT, ae = { isPrompt: !0, depth: ye.length - pe - 1 }, te = ES(st, B, ae);
      return te = await wS(me, te), (Ge = me?.extra) != null && Ge.append_title && (He = me?.extra) != null && He.title && (te = `${te}

${me.extra.title}`), {
        ...me,
        mes: te,
        index: pe
      };
    })
  );
  const Xe = ye.map((me) => X_ ? `${me.name}: ${me.mes}` : me.mes).reverse(), { worldInfoString: ct, worldInfoBefore: ke, worldInfoAfter: it, worldInfoExamples: qn, worldInfoDepth: kt, anBefore: tn, anAfter: Ze } = g ? {
    worldInfoString: "",
    worldInfoBefore: "",
    worldInfoAfter: "",
    worldInfoExamples: [],
    worldInfoDepth: [],
    anBefore: [],
    anAfter: []
  } : await P.getWorldInfoPrompt(Xe, ie, !1);
  for (const me of qn) {
    const pe = me.content;
    if (pe.length === 0)
      continue;
    const Ge = El(pe, wr, Wr), He = Sv(Ge, Me);
    me.position === $_.before ? R.unshift(...He) : R.push(...He);
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
    const me = [...R];
    R && (R = mS(R, wr, Wr));
    const pe = (y = P.getPresetManager("sysprompt")) == null ? void 0 : y.getCompletionPresetByName(u);
    pe && (I = P.powerUserSettings.prefer_character_prompt && I ? I : El(pe.content, wr, Wr), I = Me ? gS(
      P.substituteParams(I, wr, Wr, pe.content),
      ce
    ) : I);
    const Ge = {
      description: Y,
      personality: V,
      persona: P.powerUserSettings.persona_description_position == Wg.IN_PROMPT ? le : "",
      scenario: fe,
      system: I,
      char: Wr,
      user: wr,
      wiBefore: ke,
      wiAfter: it,
      loreBefore: ke,
      loreAfter: it,
      mesExamples: R.join(""),
      mesExamplesRaw: me.join("")
    }, He = (h = P.getPresetManager("context")) == null ? void 0 : h.getCompletionPresetByName(l);
    let st = vS(Ge, {
      customInstructSettings: ce,
      customStoryString: He?.story_string
    });
    st && se.add({ role: "system", content: st, ignoreInstruct: !0 }), $e();
  } else {
    let me = function(ot) {
      const nn = Re.find((Ba) => Ba.identifier === ot);
      if (nn)
        return nn;
      const co = st.prompts.find((Ba) => Ba.identifier === ot);
      if (co)
        return co;
    }, pe = SS(ye), Ge = xS(R);
    async function He() {
      let [ot, nn] = await _S(
        {
          name2: Wr,
          charDescription: Y,
          charPersonality: V,
          Scenario: fe,
          worldInfoBefore: ke,
          worldInfoAfter: it,
          extensionPrompts: P.extensionPrompts,
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
      se.addMany(ot);
    }
    if (!i)
      return re.push("No preset name provided. Using default preset."), await He(), { result: se.getMessages(), warnings: re };
    const st = (x = P.getPresetManager("openai")) == null ? void 0 : x.getCompletionPresetByName(i);
    if (!st)
      return console.warn(`Preset not found: ${i}. Using current preset.`), re.push(`Preset not found: ${i}. Using current preset.`), He(), { result: se.getMessages(), warnings: re };
    let B = (C = st.prompt_order) == null ? void 0 : C.find((ot) => ot.character_id === Tn);
    if (!B && st.prompt_order && st.prompt_order.length > 0 && (B = st.prompt_order[0]), !B)
      return console.warn(`No prompt order found for preset: ${i}. Using current preset.`), re.push(`No prompt order found for preset: ${i}. Using current preset.`), He(), { result: se.getMessages(), warnings: re };
    const ae = fe && st.scenario_format ? P.substituteParams(st.scenario_format) : "", te = V && st.personality_format ? P.substituteParams(st.personality_format) : "", be = P.substituteParams(st.group_nudge_prompt), Be = st.impersonation_prompt ? P.substituteParams(st.impersonation_prompt) : "", Re = [];
    g || Re.push(
      {
        role: "system",
        content: xv(ke, { wiFormat: st.wi_format }),
        identifier: "worldInfoBefore"
      },
      {
        role: "system",
        content: xv(it, { wiFormat: st.wi_format }),
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
    const pt = P.extensionPrompts["1_memory"];
    pt && pt.value && Re.push({
      role: Aa(pt.role),
      content: pt.value,
      identifier: "summary",
      position: Bs(pt.position)
    });
    const mn = P.extensionPrompts["2_floating_prompt"];
    !v && mn && mn.value && Re.push({
      role: Aa(mn.role),
      content: mn.value,
      identifier: "authorsNote",
      position: Bs(mn.position)
    });
    const $t = P.extensionPrompts["3_vectors"];
    $t && $t.value && Re.push({
      role: "system",
      content: $t.value,
      identifier: "vectorsMemory",
      position: Bs($t.position)
    });
    const Jt = P.extensionPrompts["4_vectors_data_bank"];
    Jt && Jt.value && Re.push({
      role: Aa(Jt.role),
      content: Jt.value,
      identifier: "vectorsDataBank",
      position: Bs(Jt.position)
    });
    const qe = P.extensionPrompts.chromadb;
    qe && qe.value && Re.push({
      role: "system",
      content: qe.value,
      identifier: "smartContext",
      position: Bs(qe.position)
    }), !d && P.powerUserSettings.persona_description && P.powerUserSettings.persona_description_position === Wg.IN_PROMPT && Re.push({
      role: "system",
      content: P.powerUserSettings.persona_description,
      identifier: "personaDescription"
    }), B.order.forEach((ot) => {
      if (!ot.enabled)
        return;
      const nn = me(ot.identifier);
      if (nn && nn.content) {
        se.add({
          role: nn.role ?? "system",
          content: P.substituteParams(nn.content)
        });
        return;
      }
      ot.identifier === "chatHistory" && $e();
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
  for (const me in P.extensionPrompts)
    if (Object.hasOwn(P.extensionPrompts, me)) {
      const pe = P.extensionPrompts[me];
      if (Ve.includes(me) || !P.extensionPrompts[me].value || ![Ca.BEFORE_PROMPT, Ca.IN_PROMPT].includes(pe.position) || typeof pe.filter == "function" && !await pe.filter()) continue;
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
    const me = bS(Cr, Number(Tn));
    if (Cr && Array.isArray(me) && me.length > 0)
      me.filter((pe) => pe.text).forEach((pe, Ge) => {
        const He = se.getMessages();
        se.insert(He.length - pe.depth, { role: pe.role, content: pe.text });
      });
    else {
      const pe = El(
        (N = (E = (k = (w = (T = P.characters[Tn]) == null ? void 0 : T.data) == null ? void 0 : w.extensions) == null ? void 0 : k.depth_prompt) == null ? void 0 : E.prompt) == null ? void 0 : N.trim(),
        wr,
        Wr
      ) || "";
      if (pe) {
        const Ge = Y_, He = ((G = (U = (j = (M = P.characters[Tn]) == null ? void 0 : M.data) == null ? void 0 : j.extensions) == null ? void 0 : U.depth_prompt) == null ? void 0 : G.role) ?? V_, st = se.getMessages();
        se.insert(st.length - Ge, {
          role: Aa(He),
          content: pe
        });
      }
    }
  }
  let We = -1;
  if (!v) {
    const me = yS();
    if (me.prompt) {
      me.prompt = El(me.prompt, wr, Wr);
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
  return We >= 0 && (tn.length > 0 && (se.insert(We, { role: "system", content: tn.join(`
`) }), We++), Ze.length > 0 && se.insert(We + 1, { role: "system", content: Ze.join(`
`) })), { result: se.getMessages(), warnings: re };
}
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Ev(t, r) {
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
    r % 2 ? Ev(Object(i), !0).forEach(function(s) {
      OS(t, s, i[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Ev(Object(i)).forEach(function(s) {
      Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(i, s));
    });
  }
  return t;
}
function su(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? su = function(r) {
    return typeof r;
  } : su = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, su(t);
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
function MS(t, r) {
  if (t == null) return {};
  var i = kS(t, r), s, l;
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
var Or = Ar(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), so = Ar(/Edge/i), wv = Ar(/firefox/i), Ks = Ar(/safari/i) && !Ar(/chrome/i) && !Ar(/android/i), $d = Ar(/iP(ad|od|hone)/i), g0 = Ar(/chrome/i) && Ar(/android/i), v0 = {
  capture: !1,
  passive: !1
};
function Ue(t, r, i) {
  t.addEventListener(r, i, !Or && v0);
}
function Pe(t, r, i) {
  t.removeEventListener(r, i, !Or && v0);
}
function pu(t, r) {
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
function Xn(t, r, i, s) {
  if (t) {
    i = i || document;
    do {
      if (r != null && (r[0] === ">" ? t.parentNode === i && pu(t, r) : pu(t, r)) || s && t === i)
        return t;
      if (t === i) break;
    } while (t = y0(t));
  }
  return null;
}
var Cv = /\s+/g;
function wn(t, r, i) {
  if (t && r)
    if (t.classList)
      t.classList[i ? "add" : "remove"](r);
    else {
      var s = (" " + t.className + " ").replace(Cv, " ").replace(" " + r + " ", " ");
      t.className = (s + (i ? " " + r : "")).replace(Cv, " ");
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
    var u, f, p, d, v, g, _;
    if (t !== window && t.parentNode && t !== ir() ? (u = t.getBoundingClientRect(), f = u.top, p = u.left, d = u.bottom, v = u.right, g = u.height, _ = u.width) : (f = 0, p = 0, d = window.innerHeight, v = window.innerWidth, g = window.innerHeight, _ = window.innerWidth), (r || i) && t !== window && (l = l || t.parentNode, !Or))
      do
        if (l && l.getBoundingClientRect && (we(l, "transform") !== "none" || i && we(l, "position") !== "static")) {
          var m = l.getBoundingClientRect();
          f -= m.top + parseInt(we(l, "border-top-width")), p -= m.left + parseInt(we(l, "border-left-width")), d = f + u.height, v = p + u.width;
          break;
        }
      while (l = l.parentNode);
    if (s && t !== window) {
      var y = zi(l || t), h = y && y.a, x = y && y.d;
      y && (f /= x, p /= h, _ /= h, g /= x, d = f + g, v = p + _);
    }
    return {
      top: f,
      left: p,
      bottom: d,
      right: v,
      width: _,
      height: g
    };
  }
}
function Av(t, r, i) {
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
    if (f[u].style.display !== "none" && f[u] !== Ce.ghost && (s || f[u] !== Ce.dragged) && Xn(f[u], i.draggable, t, !1)) {
      if (l === r)
        return f[u];
      l++;
    }
    u++;
  }
  return null;
}
function Jd(t, r) {
  for (var i = t.lastElementChild; i && (i === Ce.ghost || we(i, "display") === "none" || r && !pu(i, r)); )
    i = i.previousElementSibling;
  return i || null;
}
function Bn(t, r) {
  var i = 0;
  if (!t || !t.parentNode)
    return -1;
  for (; t = t.previousElementSibling; )
    t.nodeName.toUpperCase() !== "TEMPLATE" && t !== Ce.clone && (!r || pu(t, r)) && i++;
  return i;
}
function Nv(t) {
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
function RS(t, r) {
  if (t && r)
    for (var i in r)
      r.hasOwnProperty(i) && (t[i] = r[i]);
  return t;
}
function Kf(t, r) {
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
    var u, f, p, d;
    if (!(!Xn(l, r.draggable, t, !1) || l.animated || l === i)) {
      var v = Tt(l);
      s.left = Math.min((u = s.left) !== null && u !== void 0 ? u : 1 / 0, v.left), s.top = Math.min((f = s.top) !== null && f !== void 0 ? f : 1 / 0, v.top), s.right = Math.max((p = s.right) !== null && p !== void 0 ? p : -1 / 0, v.right), s.bottom = Math.max((d = s.bottom) !== null && d !== void 0 ? d : -1 / 0, v.bottom);
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
          if (!(we(l, "display") === "none" || l === Ce.ghost)) {
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
        var d = 0, v = p.target, g = v.fromRect, _ = Tt(v), m = v.prevFromRect, y = v.prevToRect, h = p.rect, x = zi(v, !0);
        x && (_.top -= x.f, _.left -= x.e), v.toRect = _, v.thisAnimationDuration && Kf(m, _) && !Kf(g, _) && // Make sure animatingRect is on line between toRect & fromRect
        (h.top - _.top) / (h.left - _.left) === (g.top - _.top) / (g.left - _.left) && (d = PS(h, m, y, l.options)), Kf(_, g) || (v.prevFromRect = g, v.prevToRect = _, d || (d = l.options.animation), l.animate(v, h, _, d)), d && (u = !0, f = Math.max(f, d), clearTimeout(v.animationResetTimer), v.animationResetTimer = setTimeout(function() {
          v.animationTime = 0, v.prevFromRect = null, v.fromRect = null, v.prevToRect = null, v.thisAnimationDuration = null;
        }, d), v.thisAnimationDuration = d);
      }), clearTimeout(r), u ? r = setTimeout(function() {
        typeof s == "function" && s();
      }, f) : typeof s == "function" && s(), t = [];
    },
    animate: function(s, l, u, f) {
      if (f) {
        we(s, "transition", ""), we(s, "transform", "");
        var p = zi(this.el), d = p && p.a, v = p && p.d, g = (l.left - u.left) / (d || 1), _ = (l.top - u.top) / (v || 1);
        s.animatingX = !!g, s.animatingY = !!_, we(s, "transform", "translate3d(" + g + "px," + _ + "px,0)"), this.forRepaintDummy = IS(s), we(s, "transition", "transform " + f + "ms" + (this.options.easing ? " " + this.options.easing : "")), we(s, "transform", "translate3d(0,0,0)"), typeof s.animated == "number" && clearTimeout(s.animated), s.animated = setTimeout(function() {
          we(s, "transition", ""), we(s, "transform", ""), s.animated = !1, s.animatingX = !1, s.animatingY = !1;
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
var Ai = [], Wf = {
  initializeByDefault: !0
}, oo = {
  mount: function(r) {
    for (var i in Wf)
      Wf.hasOwnProperty(i) && !(i in r) && (r[i] = Wf[i]);
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
        var v = new p(r, i, r.options);
        v.sortable = r, v.options = r.options, r[d] = v, Tr(s, v.defaults);
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
function BS(t) {
  var r = t.sortable, i = t.rootEl, s = t.name, l = t.targetEl, u = t.cloneEl, f = t.toEl, p = t.fromEl, d = t.oldIndex, v = t.newIndex, g = t.oldDraggableIndex, _ = t.newDraggableIndex, m = t.originalEvent, y = t.putSortable, h = t.extraEventProperties;
  if (r = r || i && i[fn], !!r) {
    var x, C = r.options, T = "on" + s.charAt(0).toUpperCase() + s.substr(1);
    window.CustomEvent && !Or && !so ? x = new CustomEvent(s, {
      bubbles: !0,
      cancelable: !0
    }) : (x = document.createEvent("Event"), x.initEvent(s, !0, !0)), x.to = f || i, x.from = p || i, x.item = l || i, x.clone = u, x.oldIndex = d, x.newIndex = v, x.oldDraggableIndex = g, x.newDraggableIndex = _, x.originalEvent = m, x.pullMode = y ? y.lastPutMode : void 0;
    var w = sr(sr({}, h), oo.getEventProperties(s, r));
    for (var k in w)
      x[k] = w[k];
    i && i.dispatchEvent(x), C[T] && C[T].call(r, x);
  }
}
var US = ["evt"], un = function(r, i) {
  var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l = s.evt, u = MS(s, US);
  oo.pluginEvent.bind(Ce)(r, i, sr({
    dragEl: oe,
    parentEl: _t,
    ghostEl: Te,
    rootEl: dt,
    nextEl: Oa,
    lastDownEl: ou,
    cloneEl: gt,
    cloneHidden: ra,
    dragStarted: Xs,
    putSortable: qt,
    activeSortable: Ce.active,
    originalEvent: l,
    oldIndex: Di,
    oldDraggableIndex: eo,
    newIndex: Cn,
    newDraggableIndex: na,
    hideGhostForTarget: N0,
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
    targetEl: oe,
    rootEl: dt,
    oldIndex: Di,
    oldDraggableIndex: eo,
    newIndex: Cn,
    newDraggableIndex: na
  }, t));
}
var oe, _t, Te, dt, Oa, ou, gt, ra, Di, Cn, eo, na, Cl, qt, ji = !1, mu = !1, gu = [], Na, Vn, ed, td, Tv, Ov, Xs, Ni, to, no = !1, Al = !1, lu, Yt, nd = [], Nd = !1, vu = [], Au = typeof document < "u", Nl = $d, kv = so || Or ? "cssFloat" : "float", HS = Au && !g0 && !$d && "draggable" in document.createElement("div"), w0 = (function() {
  if (Au) {
    if (Or)
      return !1;
    var t = document.createElement("x");
    return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto";
  }
})(), C0 = function(r, i) {
  var s = we(r), l = parseInt(s.width) - parseInt(s.paddingLeft) - parseInt(s.paddingRight) - parseInt(s.borderLeftWidth) - parseInt(s.borderRightWidth), u = Pi(r, 0, i), f = Pi(r, 1, i), p = u && we(u), d = f && we(f), v = p && parseInt(p.marginLeft) + parseInt(p.marginRight) + Tt(u).width, g = d && parseInt(d.marginLeft) + parseInt(d.marginRight) + Tt(f).width;
  if (s.display === "flex")
    return s.flexDirection === "column" || s.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (s.display === "grid")
    return s.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (u && p.float && p.float !== "none") {
    var _ = p.float === "left" ? "left" : "right";
    return f && (d.clear === "both" || d.clear === _) ? "vertical" : "horizontal";
  }
  return u && (p.display === "block" || p.display === "flex" || p.display === "table" || p.display === "grid" || v >= l && s[kv] === "none" || f && s[kv] === "none" && v + g > l) ? "vertical" : "horizontal";
}, qS = function(r, i, s) {
  var l = s ? r.left : r.top, u = s ? r.right : r.bottom, f = s ? r.width : r.height, p = s ? i.left : i.top, d = s ? i.right : i.bottom, v = s ? i.width : i.height;
  return l === p || u === d || l + f / 2 === p + v / 2;
}, FS = function(r, i) {
  var s;
  return gu.some(function(l) {
    var u = l[fn].options.emptyInsertThreshold;
    if (!(!u || Jd(l))) {
      var f = Tt(l), p = r >= f.left - u && r <= f.right + u, d = i >= f.top - u && i <= f.bottom + u;
      if (p && d)
        return s = l;
    }
  }), s;
}, A0 = function(r) {
  function i(u, f) {
    return function(p, d, v, g) {
      var _ = p.options.group.name && d.options.group.name && p.options.group.name === d.options.group.name;
      if (u == null && (f || _))
        return !0;
      if (u == null || u === !1)
        return !1;
      if (f && u === "clone")
        return u;
      if (typeof u == "function")
        return i(u(p, d, v, g), f)(p, d, v, g);
      var m = (f ? p : d).options.group.name;
      return u === !0 || typeof u == "string" && u === m || u.join && u.indexOf(m) > -1;
    };
  }
  var s = {}, l = r.group;
  (!l || su(l) != "object") && (l = {
    name: l
  }), s.name = l.name, s.checkPull = i(l.pull, !0), s.checkPut = i(l.put), s.revertClone = l.revertClone, r.group = s;
}, N0 = function() {
  !w0 && Te && we(Te, "display", "none");
}, T0 = function() {
  !w0 && Te && we(Te, "display", "");
};
Au && !g0 && document.addEventListener("click", function(t) {
  if (mu)
    return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), mu = !1, !1;
}, !0);
var Ta = function(r) {
  if (oe) {
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
  oe && oe.parentNode[fn]._isOutsideThisEl(r.target);
};
function Ce(t, r) {
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
    supportPointer: Ce.supportPointer !== !1 && "PointerEvent" in window && (!Ks || $d),
    emptyInsertThreshold: 5
  };
  oo.initializePlugins(this, t, i);
  for (var s in i)
    !(s in r) && (r[s] = i[s]);
  A0(r);
  for (var l in this)
    l.charAt(0) === "_" && typeof this[l] == "function" && (this[l] = this[l].bind(this));
  this.nativeDraggable = r.forceFallback ? !1 : HS, this.nativeDraggable && (this.options.touchStartThreshold = 1), r.supportPointer ? Ue(t, "pointerdown", this._onTapStart) : (Ue(t, "mousedown", this._onTapStart), Ue(t, "touchstart", this._onTapStart)), this.nativeDraggable && (Ue(t, "dragover", this), Ue(t, "dragenter", this)), gu.push(this.el), r.store && r.store.get && this.sort(r.store.get(this) || []), Tr(this, LS());
}
Ce.prototype = /** @lends Sortable.prototype */
{
  constructor: Ce,
  _isOutsideThisEl: function(r) {
    !this.el.contains(r) && r !== this.el && (Ni = null);
  },
  _getDirection: function(r, i) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, r, i, oe) : this.options.direction;
  },
  _onTapStart: function(r) {
    if (r.cancelable) {
      var i = this, s = this.el, l = this.options, u = l.preventOnFilter, f = r.type, p = r.touches && r.touches[0] || r.pointerType && r.pointerType === "touch" && r, d = (p || r).target, v = r.target.shadowRoot && (r.path && r.path[0] || r.composedPath && r.composedPath()[0]) || d, g = l.filter;
      if (KS(s), !oe && !(/mousedown|pointerdown/.test(f) && r.button !== 0 || l.disabled) && !v.isContentEditable && !(!this.nativeDraggable && Ks && d && d.tagName.toUpperCase() === "SELECT") && (d = Xn(d, l.draggable, s, !1), !(d && d.animated) && ou !== d)) {
        if (Di = Bn(d), eo = Bn(d, l.draggable), typeof g == "function") {
          if (g.call(this, r, d, this)) {
            Kt({
              sortable: i,
              rootEl: v,
              name: "filter",
              targetEl: d,
              toEl: s,
              fromEl: s
            }), un("filter", i, {
              evt: r
            }), u && r.preventDefault();
            return;
          }
        } else if (g && (g = g.split(",").some(function(_) {
          if (_ = Xn(v, _.trim(), s, !1), _)
            return Kt({
              sortable: i,
              rootEl: _,
              name: "filter",
              targetEl: d,
              fromEl: s,
              toEl: s
            }), un("filter", i, {
              evt: r
            }), !0;
        }), g)) {
          u && r.preventDefault();
          return;
        }
        l.handle && !Xn(v, l.handle, s, !1) || this._prepareDragStart(r, p, d);
      }
    }
  },
  _prepareDragStart: function(r, i, s) {
    var l = this, u = l.el, f = l.options, p = u.ownerDocument, d;
    if (s && !oe && s.parentNode === u) {
      var v = Tt(s);
      if (dt = u, oe = s, _t = oe.parentNode, Oa = oe.nextSibling, ou = s, Cl = f.group, Ce.dragged = oe, Na = {
        target: oe,
        clientX: (i || r).clientX,
        clientY: (i || r).clientY
      }, Tv = Na.clientX - v.left, Ov = Na.clientY - v.top, this._lastX = (i || r).clientX, this._lastY = (i || r).clientY, oe.style["will-change"] = "all", d = function() {
        if (un("delayEnded", l, {
          evt: r
        }), Ce.eventCanceled) {
          l._onDrop();
          return;
        }
        l._disableDelayedDragEvents(), !wv && l.nativeDraggable && (oe.draggable = !0), l._triggerDragStart(r, i), Kt({
          sortable: l,
          name: "choose",
          originalEvent: r
        }), wn(oe, f.chosenClass, !0);
      }, f.ignore.split(",").forEach(function(g) {
        b0(oe, g.trim(), rd);
      }), Ue(p, "dragover", Ta), Ue(p, "mousemove", Ta), Ue(p, "touchmove", Ta), f.supportPointer ? (Ue(p, "pointerup", l._onDrop), !this.nativeDraggable && Ue(p, "pointercancel", l._onDrop)) : (Ue(p, "mouseup", l._onDrop), Ue(p, "touchend", l._onDrop), Ue(p, "touchcancel", l._onDrop)), wv && this.nativeDraggable && (this.options.touchStartThreshold = 4, oe.draggable = !0), un("delayStart", this, {
        evt: r
      }), f.delay && (!f.delayOnTouchOnly || i) && (!this.nativeDraggable || !(so || Or))) {
        if (Ce.eventCanceled) {
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
    oe && rd(oe), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var r = this.el.ownerDocument;
    Pe(r, "mouseup", this._disableDelayedDrag), Pe(r, "touchend", this._disableDelayedDrag), Pe(r, "touchcancel", this._disableDelayedDrag), Pe(r, "pointerup", this._disableDelayedDrag), Pe(r, "pointercancel", this._disableDelayedDrag), Pe(r, "mousemove", this._delayedDragTouchMoveHandler), Pe(r, "touchmove", this._delayedDragTouchMoveHandler), Pe(r, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(r, i) {
    i = i || r.pointerType == "touch" && r, !this.nativeDraggable || i ? this.options.supportPointer ? Ue(document, "pointermove", this._onTouchMove) : i ? Ue(document, "touchmove", this._onTouchMove) : Ue(document, "mousemove", this._onTouchMove) : (Ue(oe, "dragend", this), Ue(dt, "dragstart", this._onDragStart));
    try {
      document.selection ? uu(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(r, i) {
    if (ji = !1, dt && oe) {
      un("dragStarted", this, {
        evt: i
      }), this.nativeDraggable && Ue(document, "dragover", ZS);
      var s = this.options;
      !r && wn(oe, s.dragClass, !1), wn(oe, s.ghostClass, !0), Ce.active = this, r && this._appendGhost(), Kt({
        sortable: this,
        name: "start",
        originalEvent: i
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Vn) {
      this._lastX = Vn.clientX, this._lastY = Vn.clientY, N0();
      for (var r = document.elementFromPoint(Vn.clientX, Vn.clientY), i = r; r && r.shadowRoot && (r = r.shadowRoot.elementFromPoint(Vn.clientX, Vn.clientY), r !== i); )
        i = r;
      if (oe.parentNode[fn]._isOutsideThisEl(r), i)
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
    if (Na) {
      var i = this.options, s = i.fallbackTolerance, l = i.fallbackOffset, u = r.touches ? r.touches[0] : r, f = Te && zi(Te, !0), p = Te && f && f.a, d = Te && f && f.d, v = Nl && Yt && Nv(Yt), g = (u.clientX - Na.clientX + l.x) / (p || 1) + (v ? v[0] - nd[0] : 0) / (p || 1), _ = (u.clientY - Na.clientY + l.y) / (d || 1) + (v ? v[1] - nd[1] : 0) / (d || 1);
      if (!Ce.active && !ji) {
        if (s && Math.max(Math.abs(u.clientX - this._lastX), Math.abs(u.clientY - this._lastY)) < s)
          return;
        this._onDragStart(r, !0);
      }
      if (Te) {
        f ? (f.e += g - (ed || 0), f.f += _ - (td || 0)) : f = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: g,
          f: _
        };
        var m = "matrix(".concat(f.a, ",").concat(f.b, ",").concat(f.c, ",").concat(f.d, ",").concat(f.e, ",").concat(f.f, ")");
        we(Te, "webkitTransform", m), we(Te, "mozTransform", m), we(Te, "msTransform", m), we(Te, "transform", m), ed = g, td = _, Vn = u;
      }
      r.cancelable && r.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!Te) {
      var r = this.options.fallbackOnBody ? document.body : dt, i = Tt(oe, !0, Nl, !0, r), s = this.options;
      if (Nl) {
        for (Yt = r; we(Yt, "position") === "static" && we(Yt, "transform") === "none" && Yt !== document; )
          Yt = Yt.parentNode;
        Yt !== document.body && Yt !== document.documentElement ? (Yt === document && (Yt = ir()), i.top += Yt.scrollTop, i.left += Yt.scrollLeft) : Yt = ir(), nd = Nv(Yt);
      }
      Te = oe.cloneNode(!0), wn(Te, s.ghostClass, !1), wn(Te, s.fallbackClass, !0), wn(Te, s.dragClass, !0), we(Te, "transition", ""), we(Te, "transform", ""), we(Te, "box-sizing", "border-box"), we(Te, "margin", 0), we(Te, "top", i.top), we(Te, "left", i.left), we(Te, "width", i.width), we(Te, "height", i.height), we(Te, "opacity", "0.8"), we(Te, "position", Nl ? "absolute" : "fixed"), we(Te, "zIndex", "100000"), we(Te, "pointerEvents", "none"), Ce.ghost = Te, r.appendChild(Te), we(Te, "transform-origin", Tv / parseInt(Te.style.width) * 100 + "% " + Ov / parseInt(Te.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(r, i) {
    var s = this, l = r.dataTransfer, u = s.options;
    if (un("dragStart", this, {
      evt: r
    }), Ce.eventCanceled) {
      this._onDrop();
      return;
    }
    un("setupClone", this), Ce.eventCanceled || (gt = x0(oe), gt.removeAttribute("id"), gt.draggable = !1, gt.style["will-change"] = "", this._hideClone(), wn(gt, this.options.chosenClass, !1), Ce.clone = gt), s.cloneId = uu(function() {
      un("clone", s), !Ce.eventCanceled && (s.options.removeCloneOnHide || dt.insertBefore(gt, oe), s._hideClone(), Kt({
        sortable: s,
        name: "clone"
      }));
    }), !i && wn(oe, u.dragClass, !0), i ? (mu = !0, s._loopId = setInterval(s._emulateDragOver, 50)) : (Pe(document, "mouseup", s._onDrop), Pe(document, "touchend", s._onDrop), Pe(document, "touchcancel", s._onDrop), l && (l.effectAllowed = "move", u.setData && u.setData.call(s, l, oe)), Ue(document, "drop", s), we(oe, "transform", "translateZ(0)")), ji = !0, s._dragStartId = uu(s._dragStarted.bind(s, i, r)), Ue(document, "selectstart", s), Xs = !0, window.getSelection().removeAllRanges(), Ks && we(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(r) {
    var i = this.el, s = r.target, l, u, f, p = this.options, d = p.group, v = Ce.active, g = Cl === d, _ = p.sort, m = qt || v, y, h = this, x = !1;
    if (Nd) return;
    function C(ce, Me) {
      un(ce, h, sr({
        evt: r,
        isOwner: g,
        axis: y ? "vertical" : "horizontal",
        revert: f,
        dragRect: l,
        targetRect: u,
        canSort: _,
        fromSortable: m,
        target: s,
        completed: w,
        onMove: function(J, re) {
          return Tl(dt, i, oe, l, J, Tt(J), r, re);
        },
        changed: k
      }, Me));
    }
    function T() {
      C("dragOverAnimationCapture"), h.captureAnimationState(), h !== m && m.captureAnimationState();
    }
    function w(ce) {
      return C("dragOverCompleted", {
        insertion: ce
      }), ce && (g ? v._hideClone() : v._showClone(h), h !== m && (wn(oe, qt ? qt.options.ghostClass : v.options.ghostClass, !1), wn(oe, p.ghostClass, !0)), qt !== h && h !== Ce.active ? qt = h : h === Ce.active && qt && (qt = null), m === h && (h._ignoreWhileAnimating = s), h.animateAll(function() {
        C("dragOverAnimationComplete"), h._ignoreWhileAnimating = null;
      }), h !== m && (m.animateAll(), m._ignoreWhileAnimating = null)), (s === oe && !oe.animated || s === i && !s.animated) && (Ni = null), !p.dragoverBubble && !r.rootEl && s !== document && (oe.parentNode[fn]._isOutsideThisEl(r.target), !ce && Ta(r)), !p.dragoverBubble && r.stopPropagation && r.stopPropagation(), x = !0;
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
    if (r.preventDefault !== void 0 && r.cancelable && r.preventDefault(), s = Xn(s, p.draggable, i, !0), C("dragOver"), Ce.eventCanceled) return x;
    if (oe.contains(r.target) || s.animated && s.animatingX && s.animatingY || h._ignoreWhileAnimating === s)
      return w(!1);
    if (mu = !1, v && !p.disabled && (g ? _ || (f = _t !== dt) : qt === this || (this.lastPutMode = Cl.checkPull(this, v, oe, r)) && d.checkPut(this, v, oe, r))) {
      if (y = this._getDirection(r, s) === "vertical", l = Tt(oe), C("dragOverValid"), Ce.eventCanceled) return x;
      if (f)
        return _t = dt, T(), this._hideClone(), C("revert"), Ce.eventCanceled || (Oa ? dt.insertBefore(oe, Oa) : dt.appendChild(oe)), w(!0);
      var E = Jd(i, p.draggable);
      if (!E || XS(r, y, this) && !E.animated) {
        if (E === oe)
          return w(!1);
        if (E && i === r.target && (s = E), s && (u = Tt(s)), Tl(dt, i, oe, l, s, u, r, !!s) !== !1)
          return T(), E && E.nextSibling ? i.insertBefore(oe, E.nextSibling) : i.appendChild(oe), _t = i, k(), w(!0);
      } else if (E && YS(r, y, this)) {
        var N = Pi(i, 0, p, !0);
        if (N === oe)
          return w(!1);
        if (s = N, u = Tt(s), Tl(dt, i, oe, l, s, u, r, !1) !== !1)
          return T(), i.insertBefore(oe, N), _t = i, k(), w(!0);
      } else if (s.parentNode === i) {
        u = Tt(s);
        var M = 0, j, U = oe.parentNode !== i, G = !qS(oe.animated && oe.toRect || l, s.animated && s.toRect || u, y), P = y ? "top" : "left", Y = Av(s, "top", "top") || Av(oe, "top", "top"), V = Y ? Y.scrollTop : void 0;
        Ni !== s && (j = u[P], no = !1, Al = !G && p.invertSwap || U), M = $S(r, s, u, y, G ? 1 : p.swapThreshold, p.invertedSwapThreshold == null ? p.swapThreshold : p.invertedSwapThreshold, Al, Ni === s);
        var le;
        if (M !== 0) {
          var fe = Bn(oe);
          do
            fe -= M, le = _t.children[fe];
          while (le && (we(le, "display") === "none" || le === Te));
        }
        if (M === 0 || le === s)
          return w(!1);
        Ni = s, to = M;
        var ue = s.nextElementSibling, I = !1;
        I = M === 1;
        var ne = Tl(dt, i, oe, l, s, u, r, I);
        if (ne !== !1)
          return (ne === 1 || ne === -1) && (I = ne === 1), Nd = !0, setTimeout(VS, 30), T(), I && !ue ? i.appendChild(oe) : s.parentNode.insertBefore(oe, I ? ue : s), Y && S0(Y, 0, V - Y.scrollTop), _t = oe.parentNode, j !== void 0 && !Al && (lu = Math.abs(j - Tt(s)[P])), k(), w(!0);
      }
      if (i.contains(oe))
        return w(!1);
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
    if (Cn = Bn(oe), na = Bn(oe, s.draggable), un("drop", this, {
      evt: r
    }), _t = oe && oe.parentNode, Cn = Bn(oe), na = Bn(oe, s.draggable), Ce.eventCanceled) {
      this._nulling();
      return;
    }
    ji = !1, Al = !1, no = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Td(this.cloneId), Td(this._dragStartId), this.nativeDraggable && (Pe(document, "drop", this), Pe(i, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Ks && we(document.body, "user-select", ""), we(oe, "transform", ""), r && (Xs && (r.cancelable && r.preventDefault(), !s.dropBubble && r.stopPropagation()), Te && Te.parentNode && Te.parentNode.removeChild(Te), (dt === _t || qt && qt.lastPutMode !== "clone") && gt && gt.parentNode && gt.parentNode.removeChild(gt), oe && (this.nativeDraggable && Pe(oe, "dragend", this), rd(oe), oe.style["will-change"] = "", Xs && !ji && wn(oe, qt ? qt.options.ghostClass : this.options.ghostClass, !1), wn(oe, this.options.chosenClass, !1), Kt({
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
    })), Ce.active && ((Cn == null || Cn === -1) && (Cn = Di, na = eo), Kt({
      sortable: this,
      name: "end",
      toEl: _t,
      originalEvent: r
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    un("nulling", this), dt = oe = _t = Te = Oa = gt = ou = ra = Na = Vn = Xs = Cn = na = Di = eo = Ni = to = qt = Cl = Ce.dragged = Ce.ghost = Ce.clone = Ce.active = null, vu.forEach(function(r) {
      r.checked = !0;
    }), vu.length = ed = td = 0;
  },
  handleEvent: function(r) {
    switch (r.type) {
      case "drop":
      case "dragend":
        this._onDrop(r);
        break;
      case "dragenter":
      case "dragover":
        oe && (this._onDragOver(r), GS(r));
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
      i = s[l], Xn(i, f.draggable, this.el, !1) && r.push(i.getAttribute(f.dataIdAttr) || QS(i));
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
    var l = oo.modifyOption(this, r, i);
    typeof l < "u" ? s[r] = l : s[r] = i, r === "group" && A0(s);
  },
  /**
   * Destroy
   */
  destroy: function() {
    un("destroy", this);
    var r = this.el;
    r[fn] = null, Pe(r, "mousedown", this._onTapStart), Pe(r, "touchstart", this._onTapStart), Pe(r, "pointerdown", this._onTapStart), this.nativeDraggable && (Pe(r, "dragover", this), Pe(r, "dragenter", this)), Array.prototype.forEach.call(r.querySelectorAll("[draggable]"), function(i) {
      i.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), gu.splice(gu.indexOf(this.el), 1), this.el = r = null;
  },
  _hideClone: function() {
    if (!ra) {
      if (un("hideClone", this), Ce.eventCanceled) return;
      we(gt, "display", "none"), this.options.removeCloneOnHide && gt.parentNode && gt.parentNode.removeChild(gt), ra = !0;
    }
  },
  _showClone: function(r) {
    if (r.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (ra) {
      if (un("showClone", this), Ce.eventCanceled) return;
      oe.parentNode == dt && !this.options.group.revertClone ? dt.insertBefore(gt, oe) : Oa ? dt.insertBefore(gt, Oa) : dt.appendChild(gt), this.options.group.revertClone && this.animate(oe, gt), we(gt, "display", ""), ra = !1;
    }
  }
};
function GS(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
}
function Tl(t, r, i, s, l, u, f, p) {
  var d, v = t[fn], g = v.options.onMove, _;
  return window.CustomEvent && !Or && !so ? d = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (d = document.createEvent("Event"), d.initEvent("move", !0, !0)), d.to = r, d.from = t, d.dragged = i, d.draggedRect = s, d.related = l || r, d.relatedRect = u || Tt(r), d.willInsertAfter = p, d.originalEvent = f, t.dispatchEvent(d), g && (_ = g.call(v, d, f)), _;
}
function rd(t) {
  t.draggable = !1;
}
function VS() {
  Nd = !1;
}
function YS(t, r, i) {
  var s = Tt(Pi(i.el, 0, i.options, !0)), l = E0(i.el, i.options, Te), u = 10;
  return r ? t.clientX < l.left - u || t.clientY < s.top && t.clientX < s.right : t.clientY < l.top - u || t.clientY < s.bottom && t.clientX < s.left;
}
function XS(t, r, i) {
  var s = Tt(Jd(i.el, i.options.draggable)), l = E0(i.el, i.options, Te), u = 10;
  return r ? t.clientX > l.right + u || t.clientY > s.bottom && t.clientX > s.left : t.clientY > l.bottom + u || t.clientX > s.right && t.clientY > s.top;
}
function $S(t, r, i, s, l, u, f, p) {
  var d = s ? t.clientY : t.clientX, v = s ? i.height : i.width, g = s ? i.top : i.left, _ = s ? i.bottom : i.right, m = !1;
  if (!f) {
    if (p && lu < v * l) {
      if (!no && (to === 1 ? d > g + v * u / 2 : d < _ - v * u / 2) && (no = !0), no)
        m = !0;
      else if (to === 1 ? d < g + lu : d > _ - lu)
        return -to;
    } else if (d > g + v * (1 - l) / 2 && d < _ - v * (1 - l) / 2)
      return JS(r);
  }
  return m = m || f, m && (d < g + v * u / 2 || d > _ - v * u / 2) ? d > g + v / 2 ? 1 : -1 : 0;
}
function JS(t) {
  return Bn(oe) < Bn(t) ? 1 : -1;
}
function QS(t) {
  for (var r = t.tagName + t.className + t.src + t.href + t.textContent, i = r.length, s = 0; i--; )
    s += r.charCodeAt(i);
  return s.toString(36);
}
function KS(t) {
  vu.length = 0;
  for (var r = t.getElementsByTagName("input"), i = r.length; i--; ) {
    var s = r[i];
    s.checked && vu.push(s);
  }
}
function uu(t) {
  return setTimeout(t, 0);
}
function Td(t) {
  return clearTimeout(t);
}
Au && Ue(document, "touchmove", function(t) {
  (Ce.active || ji) && t.cancelable && t.preventDefault();
});
Ce.utils = {
  on: Ue,
  off: Pe,
  css: we,
  find: b0,
  is: function(r, i) {
    return !!Xn(r, i, r, !1);
  },
  extend: RS,
  throttle: _0,
  closest: Xn,
  toggleClass: wn,
  clone: x0,
  index: Bn,
  nextTick: uu,
  cancelNextTick: Td,
  detectDirection: C0,
  getChild: Pi,
  expando: fn
};
Ce.get = function(t) {
  return t[fn];
};
Ce.mount = function() {
  for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
    r[i] = arguments[i];
  r[0].constructor === Array && (r = r[0]), r.forEach(function(s) {
    if (!s.prototype || !s.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(s));
    s.utils && (Ce.utils = sr(sr({}, Ce.utils), s.utils)), oo.mount(s);
  });
};
Ce.create = function(t, r) {
  return new Ce(t, r);
};
Ce.version = jS;
var Nt = [], $s, Od, kd = !1, ad, id, yu, Js;
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
      this.sortable.nativeDraggable ? Pe(document, "dragover", this._handleAutoScroll) : (Pe(document, "pointermove", this._handleFallbackAutoScroll), Pe(document, "touchmove", this._handleFallbackAutoScroll), Pe(document, "mousemove", this._handleFallbackAutoScroll)), Mv(), cu(), zS();
    },
    nulling: function() {
      yu = Od = $s = kd = Js = ad = id = null, Nt.length = 0;
    },
    _handleFallbackAutoScroll: function(i) {
      this._handleAutoScroll(i, !0);
    },
    _handleAutoScroll: function(i, s) {
      var l = this, u = (i.touches ? i.touches[0] : i).clientX, f = (i.touches ? i.touches[0] : i).clientY, p = document.elementFromPoint(u, f);
      if (yu = i, s || this.options.forceAutoScrollFallback || so || Or || Ks) {
        sd(i, this.options, p, s);
        var d = aa(p, !0);
        kd && (!Js || u !== ad || f !== id) && (Js && Mv(), Js = setInterval(function() {
          var v = aa(document.elementFromPoint(u, f), !0);
          v !== d && (d = v, cu()), sd(i, l.options, v, s);
        }, 10), ad = u, id = f);
      } else {
        if (!this.options.bubbleScroll || aa(p, !0) === ir()) {
          cu();
          return;
        }
        sd(i, this.options, aa(p, !1), !1);
      }
    }
  }, Tr(t, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function cu() {
  Nt.forEach(function(t) {
    clearInterval(t.pid);
  }), Nt = [];
}
function Mv() {
  clearInterval(Js);
}
var sd = _0(function(t, r, i, s) {
  if (r.scroll) {
    var l = (t.touches ? t.touches[0] : t).clientX, u = (t.touches ? t.touches[0] : t).clientY, f = r.scrollSensitivity, p = r.scrollSpeed, d = ir(), v = !1, g;
    Od !== i && (Od = i, cu(), $s = r.scroll, g = r.scrollFn, $s === !0 && ($s = aa(i, !0)));
    var _ = 0, m = $s;
    do {
      var y = m, h = Tt(y), x = h.top, C = h.bottom, T = h.left, w = h.right, k = h.width, E = h.height, N = void 0, M = void 0, j = y.scrollWidth, U = y.scrollHeight, G = we(y), P = y.scrollLeft, Y = y.scrollTop;
      y === d ? (N = k < j && (G.overflowX === "auto" || G.overflowX === "scroll" || G.overflowX === "visible"), M = E < U && (G.overflowY === "auto" || G.overflowY === "scroll" || G.overflowY === "visible")) : (N = k < j && (G.overflowX === "auto" || G.overflowX === "scroll"), M = E < U && (G.overflowY === "auto" || G.overflowY === "scroll"));
      var V = N && (Math.abs(w - l) <= f && P + k < j) - (Math.abs(T - l) <= f && !!P), le = M && (Math.abs(C - u) <= f && Y + E < U) - (Math.abs(x - u) <= f && !!Y);
      if (!Nt[_])
        for (var fe = 0; fe <= _; fe++)
          Nt[fe] || (Nt[fe] = {});
      (Nt[_].vx != V || Nt[_].vy != le || Nt[_].el !== y) && (Nt[_].el = y, Nt[_].vx = V, Nt[_].vy = le, clearInterval(Nt[_].pid), (V != 0 || le != 0) && (v = !0, Nt[_].pid = setInterval((function() {
        s && this.layer === 0 && Ce.active._onTouchMove(yu);
        var ue = Nt[this.layer].vy ? Nt[this.layer].vy * p : 0, I = Nt[this.layer].vx ? Nt[this.layer].vx * p : 0;
        typeof g == "function" && g.call(Ce.dragged.parentNode[fn], I, ue, t, yu, Nt[this.layer].el) !== "continue" || S0(Nt[this.layer].el, I, ue);
      }).bind({
        layer: _
      }), 24))), _++;
    } while (r.bubbleScroll && m !== d && (m = aa(m, !1)));
    kd = v;
  }
}, 30), O0 = function(r) {
  var i = r.originalEvent, s = r.putSortable, l = r.dragEl, u = r.activeSortable, f = r.dispatchSortableEvent, p = r.hideGhostForTarget, d = r.unhideGhostForTarget;
  if (i) {
    var v = s || u;
    p();
    var g = i.changedTouches && i.changedTouches.length ? i.changedTouches[0] : i, _ = document.elementFromPoint(g.clientX, g.clientY);
    d(), v && !v.el.contains(_) && (f("spill"), this.onSpill({
      dragEl: l,
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
    var l = Pi(this.sortable.el, this.startIndex, this.options);
    l ? this.sortable.el.insertBefore(i, l) : this.sortable.el.appendChild(i), this.sortable.animateAll(), s && s.animateAll();
  },
  drop: O0
};
Tr(Qd, {
  pluginName: "revertOnSpill"
});
function Kd() {
}
Kd.prototype = {
  onSpill: function(r) {
    var i = r.dragEl, s = r.putSortable, l = s || this.sortable;
    l.captureAnimationState(), i.parentNode && i.parentNode.removeChild(i), l.animateAll();
  },
  drop: O0
};
Tr(Kd, {
  pluginName: "removeOnSpill"
});
Ce.mount(new WS());
Ce.mount(Kd, Qd);
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
\`\`\``, Wd = "{{activeFormatInstructions}}", M0 = `{{#is_not_empty lorebooks}}
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
  {{else}}*Not provided*{{/if}}`, ro = `{{#is_not_empty fields}}
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
{{persona}}`, eh = `Your task is to generate the content for the "{{targetField}}" field of a character card. Base your response on the preceding context (chat history, persona, system prompts, character/lore definitions, existing fields, etc.).
{{#if userInstructions}}

Follow these user instructions: {{userInstructions}}
{{/if}}
{{#if fieldSpecificInstructions}}

Field-specific instructions: {{fieldSpecificInstructions}}
{{/if}}`, ix = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid JSON object that strictly adheres to the provided JSON schema.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire JSON object in a markdown code block (```json\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The JSON object inside the code block MUST be valid and conform to the schema.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```json\n{{example_response}}\n```", sx = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid XML structure that strictly adheres to the provided example.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire XML object in a markdown code block (```xml\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The XML object inside the code block MUST be valid.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```json\n{{example_response}}\n```", ox = `You are an expert character writer assisting a user. Your task is to respond with the modified character data in the required structured format.
Your justification should be friendly and conversational. Be direct and focus on the changes you've made. Vary your responses and do not start every message the same way. Do not repeat the user's request back to them.

For this session, we are focusing on: {{#if isFieldSession}}the "{{targetLabel}}" field.{{else}}the entire character card.{{/if}}

Initial character state is provided in the context. Read the user's request, and provide a response that incorporates their changes.`, j0 = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", lx = j0 + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ux = "[" + j0 + "][" + lx + "]*", cx = new RegExp("^" + ux + "$");
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
const th = function(t) {
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
function R0(t, r) {
  r = Object.assign({}, dx, r);
  const i = [];
  let s = !1, l = !1;
  t[0] === "\uFEFF" && (t = t.substr(1));
  for (let u = 0; u < t.length; u++)
    if (t[u] === "<" && t[u + 1] === "?") {
      if (u += 2, u = Dv(t, u), u.err) return u;
    } else if (t[u] === "<") {
      let f = u;
      if (u++, t[u] === "!") {
        u = Rv(t, u);
        continue;
      } else {
        let p = !1;
        t[u] === "/" && (p = !0, u++);
        let d = "";
        for (; u < t.length && t[u] !== ">" && t[u] !== " " && t[u] !== "	" && t[u] !== `
` && t[u] !== "\r"; u++)
          d += t[u];
        if (d = d.trim(), d[d.length - 1] === "/" && (d = d.substring(0, d.length - 1), u--), !_x(d)) {
          let _;
          return d.trim().length === 0 ? _ = "Invalid space after '<'." : _ = "Tag '" + d + "' is an invalid name.", Et("InvalidTag", _, Wt(t, u));
        }
        const v = mx(t, u);
        if (v === !1)
          return Et("InvalidAttr", "Attributes for '" + d + "' have open quote.", Wt(t, u));
        let g = v.value;
        if (u = v.index, g[g.length - 1] === "/") {
          const _ = u - g.length;
          g = g.substring(0, g.length - 1);
          const m = zv(g, r);
          if (m === !0)
            s = !0;
          else
            return Et(m.err.code, m.err.msg, Wt(t, _ + m.err.line));
        } else if (p)
          if (v.tagClosed) {
            if (g.trim().length > 0)
              return Et("InvalidTag", "Closing tag '" + d + "' can't have attributes or invalid starting.", Wt(t, f));
            if (i.length === 0)
              return Et("InvalidTag", "Closing tag '" + d + "' has not been opened.", Wt(t, f));
            {
              const _ = i.pop();
              if (d !== _.tagName) {
                let m = Wt(t, _.tagStartPos);
                return Et(
                  "InvalidTag",
                  "Expected closing tag '" + _.tagName + "' (opened in line " + m.line + ", col " + m.col + ") instead of closing tag '" + d + "'.",
                  Wt(t, f)
                );
              }
              i.length == 0 && (l = !0);
            }
          } else return Et("InvalidTag", "Closing tag '" + d + "' doesn't have proper closing.", Wt(t, u));
        else {
          const _ = zv(g, r);
          if (_ !== !0)
            return Et(_.err.code, _.err.msg, Wt(t, u - g.length + _.err.line));
          if (l === !0)
            return Et("InvalidXml", "Multiple possible root nodes found.", Wt(t, u));
          r.unpairedTags.indexOf(d) !== -1 || i.push({ tagName: d, tagStartPos: f }), s = !0;
        }
        for (u++; u < t.length; u++)
          if (t[u] === "<")
            if (t[u + 1] === "!") {
              u++, u = Rv(t, u);
              continue;
            } else if (t[u + 1] === "?") {
              if (u = Dv(t, ++u), u.err) return u;
            } else
              break;
          else if (t[u] === "&") {
            const _ = yx(t, u);
            if (_ == -1)
              return Et("InvalidChar", "char '&' is not expected.", Wt(t, u));
            u = _;
          } else if (l === !0 && !jv(t[u]))
            return Et("InvalidXml", "Extra text at the end", Wt(t, u));
        t[u] === "<" && u--;
      }
    } else {
      if (jv(t[u]))
        continue;
      return Et("InvalidChar", "char '" + t[u] + "' is not expected.", Wt(t, u));
    }
  if (s) {
    if (i.length == 1)
      return Et("InvalidTag", "Unclosed tag '" + i[0].tagName + "'.", Wt(t, i[0].tagStartPos));
    if (i.length > 0)
      return Et("InvalidXml", "Invalid '" + JSON.stringify(i.map((u) => u.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
  } else return Et("InvalidXml", "Start tag expected.", 1);
  return !0;
}
function jv(t) {
  return t === " " || t === "	" || t === `
` || t === "\r";
}
function Dv(t, r) {
  const i = r;
  for (; r < t.length; r++)
    if (t[r] == "?" || t[r] == " ") {
      const s = t.substr(i, r - i);
      if (r > 5 && s === "xml")
        return Et("InvalidXml", "XML declaration allowed only at the start of the document.", Wt(t, r));
      if (t[r] == "?" && t[r + 1] == ">") {
        r++;
        break;
      } else
        continue;
    }
  return r;
}
function Rv(t, r) {
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
function zv(t, r) {
  const i = D0(t, gx), s = {};
  for (let l = 0; l < i.length; l++) {
    if (i[l][1].length === 0)
      return Et("InvalidAttr", "Attribute '" + i[l][2] + "' has no space in starting.", Us(i[l]));
    if (i[l][3] !== void 0 && i[l][4] === void 0)
      return Et("InvalidAttr", "Attribute '" + i[l][2] + "' is without value.", Us(i[l]));
    if (i[l][3] === void 0 && !r.allowBooleanAttributes)
      return Et("InvalidAttr", "boolean attribute '" + i[l][2] + "' is not allowed.", Us(i[l]));
    const u = i[l][2];
    if (!bx(u))
      return Et("InvalidAttr", "Attribute '" + u + "' is an invalid name.", Us(i[l]));
    if (!s.hasOwnProperty(u))
      s[u] = 1;
    else
      return Et("InvalidAttr", "Attribute '" + u + "' is repeated.", Us(i[l]));
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
function Et(t, r, i) {
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
  return th(t);
}
function _x(t) {
  return th(t);
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
        if (l && Ax(t, r)) {
          r += 7;
          let p, d;
          [p, d, r] = wx(t, r + 1), d.indexOf("&") === -1 && (i[kx(p)] = {
            regx: RegExp(`&${p};`, "g"),
            val: d
          });
        } else if (l && Nx(t, r)) r += 8;
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
function Ax(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "E" && t[r + 3] === "N" && t[r + 4] === "T" && t[r + 5] === "I" && t[r + 6] === "T" && t[r + 7] === "Y";
}
function Nx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "E" && t[r + 3] === "L" && t[r + 4] === "E" && t[r + 5] === "M" && t[r + 6] === "E" && t[r + 7] === "N" && t[r + 8] === "T";
}
function Tx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "A" && t[r + 3] === "T" && t[r + 4] === "T" && t[r + 5] === "L" && t[r + 6] === "I" && t[r + 7] === "S" && t[r + 8] === "T";
}
function Ox(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "N" && t[r + 3] === "O" && t[r + 4] === "T" && t[r + 5] === "A" && t[r + 6] === "T" && t[r + 7] === "I" && t[r + 8] === "O" && t[r + 9] === "N";
}
function kx(t) {
  if (th(t))
    return t;
  throw new Error(`Invalid entity name ${t}`);
}
const Mx = /^[-+]?0x[a-fA-F0-9]+$/, jx = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, Dx = {
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
  if (r.hex && Mx.test(i))
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
    const s = jx.exec(i);
    if (s) {
      const l = s[1], u = s[2];
      let f = zx(s[3]);
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
    }, this.addExternalEntities = Bx, this.parseXml = Zx, this.parseTextData = Ux, this.resolveNameSpace = Hx, this.buildAttributesMap = Fx, this.isItStopNode = Xx, this.replaceEntitiesValue = Vx, this.readStopNodeData = Jx, this.saveTextToParentTag = Yx, this.addChild = Gx, this.ignoreAttributesFn = Ix(this.options.ignoreAttributes);
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
    return p == null ? t : typeof p != typeof t || p !== t ? p : this.options.trimValues ? Dd(t, this.options.parseTagValue, this.options.numberParseOptions) : t.trim() === t ? Dd(t, this.options.parseTagValue, this.options.numberParseOptions) : t;
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
    const s = D0(t, qx), l = s.length, u = {};
    for (let f = 0; f < l; f++) {
      const p = this.resolveNameSpace(s[f][1]);
      if (this.ignoreAttributesFn(p, r))
        continue;
      let d = s[f][4], v = this.options.attributeNamePrefix + p;
      if (p.length)
        if (this.options.transformAttributeName && (v = this.options.transformAttributeName(v)), v === "__proto__" && (v = "#__proto__"), d !== void 0) {
          this.options.trimValues && (d = d.trim()), d = this.replaceEntitiesValue(d);
          const g = this.options.attributeValueProcessor(p, d, r);
          g == null ? u[v] = d : typeof g != typeof d || g !== d ? u[v] = g : u[v] = Dd(
            d,
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
const Zx = function(t) {
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
          const _ = d.indexOf(":");
          _ !== -1 && (d = d.substr(_ + 1));
        }
        this.options.transformTagName && (d = this.options.transformTagName(d)), i && (s = this.saveTextToParentTag(s, i, l));
        const v = l.substring(l.lastIndexOf(".") + 1);
        if (d && this.options.unpairedTags.indexOf(d) !== -1)
          throw new Error(`Unpaired tag can not be used as closing tag: </${d}>`);
        let g = 0;
        v && this.options.unpairedTags.indexOf(v) !== -1 ? (g = l.lastIndexOf(".", l.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : g = l.lastIndexOf("."), l = l.substring(0, g), i = this.tagsNodeStack.pop(), s = "", u = p;
      } else if (t[u + 1] === "?") {
        let p = jd(t, u, !1, "?>");
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
        const p = Ex(t, u);
        this.docTypeEntities = p.entities, u = p.i;
      } else if (t.substr(u + 1, 2) === "![") {
        const p = Da(t, "]]>", u, "CDATA is not closed.") - 2, d = t.substring(u + 9, p);
        s = this.saveTextToParentTag(s, i, l);
        let v = this.parseTextData(d, i.tagname, l, !0, !1, !0, !0);
        v == null && (v = ""), this.options.cdataPropName ? i.add(this.options.cdataPropName, [{ [this.options.textNodeName]: d }]) : i.add(this.options.textNodeName, v), u = p + 2;
      } else {
        let p = jd(t, u, this.options.removeNSPrefix), d = p.tagName;
        const v = p.rawTagName;
        let g = p.tagExp, _ = p.attrExpPresent, m = p.closeIndex;
        this.options.transformTagName && (d = this.options.transformTagName(d)), i && s && i.tagname !== "!xml" && (s = this.saveTextToParentTag(s, i, l, !1));
        const y = i;
        if (y && this.options.unpairedTags.indexOf(y.tagname) !== -1 && (i = this.tagsNodeStack.pop(), l = l.substring(0, l.lastIndexOf("."))), d !== r.tagname && (l += l ? "." + d : d), this.isItStopNode(this.options.stopNodes, l, d)) {
          let h = "";
          if (g.length > 0 && g.lastIndexOf("/") === g.length - 1)
            d[d.length - 1] === "/" ? (d = d.substr(0, d.length - 1), l = l.substr(0, l.length - 1), g = d) : g = g.substr(0, g.length - 1), u = p.closeIndex;
          else if (this.options.unpairedTags.indexOf(d) !== -1)
            u = p.closeIndex;
          else {
            const C = this.readStopNodeData(t, v, m + 1);
            if (!C) throw new Error(`Unexpected end of ${v}`);
            u = C.i, h = C.tagContent;
          }
          const x = new Hs(d);
          d !== g && _ && (x[":@"] = this.buildAttributesMap(g, l, d)), h && (h = this.parseTextData(h, d, l, !0, _, !0, !0)), l = l.substr(0, l.lastIndexOf(".")), x.add(this.options.textNodeName, h), this.addChild(i, x, l);
        } else {
          if (g.length > 0 && g.lastIndexOf("/") === g.length - 1) {
            d[d.length - 1] === "/" ? (d = d.substr(0, d.length - 1), l = l.substr(0, l.length - 1), g = d) : g = g.substr(0, g.length - 1), this.options.transformTagName && (d = this.options.transformTagName(d));
            const h = new Hs(d);
            d !== g && _ && (h[":@"] = this.buildAttributesMap(g, l, d)), this.addChild(i, h, l), l = l.substr(0, l.lastIndexOf("."));
          } else {
            const h = new Hs(d);
            this.tagsNodeStack.push(i), d !== g && _ && (h[":@"] = this.buildAttributesMap(g, l, d)), this.addChild(i, h, l), i = h;
          }
          s = "", u = m;
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
function Xx(t, r, i) {
  const s = "*." + i;
  for (const l in t) {
    const u = t[l];
    if (s === u || r === u) return !0;
  }
  return !1;
}
function $x(t, r, i = ">") {
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
function jd(t, r, i, s = ">") {
  const l = $x(t, r + 1, s);
  if (!l) return;
  let u = l.data;
  const f = l.index, p = u.search(/\s/);
  let d = u, v = !0;
  p !== -1 && (d = u.substring(0, p), u = u.substring(p + 1).trimStart());
  const g = d;
  if (i) {
    const _ = d.indexOf(":");
    _ !== -1 && (d = d.substr(_ + 1), v = d !== l.data.substr(_ + 1));
  }
  return {
    tagName: d,
    tagExp: u,
    closeIndex: f,
    attrExpPresent: v,
    rawTagName: g
  };
}
function Jx(t, r, i) {
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
        const u = jd(t, i, ">");
        u && ((u && u.tagName) === r && u.tagExp[u.tagExp.length - 1] !== "/" && l++, i = u.closeIndex);
      }
}
function Dd(t, r, i) {
  if (r && typeof t == "string") {
    const s = t.trim();
    return s === "true" ? !0 : s === "false" ? !1 : Rx(t, i);
  } else
    return fx(t) ? t : "";
}
function Qx(t, r) {
  return z0(t, r);
}
function z0(t, r, i) {
  let s;
  const l = {};
  for (let u = 0; u < t.length; u++) {
    const f = t[u], p = Kx(f);
    let d = "";
    if (i === void 0 ? d = p : d = i + "." + p, p === r.textNodeName)
      s === void 0 ? s = f[p] : s += "" + f[p];
    else {
      if (p === void 0)
        continue;
      if (f[p]) {
        let v = z0(f[p], r, d);
        const g = eE(v, r);
        f[":@"] ? Wx(v, f[":@"], d, r) : Object.keys(v).length === 1 && v[r.textNodeName] !== void 0 && !r.alwaysCreateTextNode ? v = v[r.textNodeName] : Object.keys(v).length === 0 && (r.alwaysCreateTextNode ? v[r.textNodeName] = "" : v = ""), l[p] !== void 0 && l.hasOwnProperty(p) ? (Array.isArray(l[p]) || (l[p] = [l[p]]), l[p].push(v)) : r.isArray(p, d, g) ? l[p] = [v] : l[p] = v;
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
      const u = R0(r, i);
      if (u !== !0)
        throw Error(`${u.err.msg}:${u.err.line}:${u.err.col}`);
    }
    const s = new Px(this.options);
    s.addExternalEntities(this.externalEntities);
    const l = s.parseXml(r);
    return this.options.preserveOrder || l === void 0 ? l : Qx(l, this.options);
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
  validate: R0
}, rE = new tE({
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
      let l = t[i];
      s.type === "array" && !Array.isArray(l) && (l = [l], t[i] = l), s.type === "object" && typeof l == "object" && l !== null ? Rd(l, s) : s.type === "array" && s.items?.type === "object" && Array.isArray(l) && l.forEach((u) => Rd(u, s.items)), s.type === "string" && typeof l != "string" ? t[i] = String(l) : s.type === "array" && s.items?.type === "string" && Array.isArray(l) && (t[i] = l.map(String));
    }
}
function L0(t, r, i = {}) {
  const s = /```(?:\w+\n|\n)?([\s\S]*?)```/, l = t.match(s);
  let u = l ? l[1].trim() : t.trim();
  try {
    switch (r) {
      case "xml":
        if (i.schema) {
          const d = nE.validate(u);
          if (d !== !0)
            throw new Error(`Model response is not valid XML: ${d.err.msg}`);
        }
        let f = rE.parse(u);
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
      const d = u.match(/"response":\s*"([\s\S]*)/);
      return d ? d[1].replace(/"\s*}\s*$/, "") : u;
    }
    throw console.error(`Error parsing response in format '${r}':`, f), console.error("Raw content received:", t), r === "xml" ? f.message.startsWith("Model response is not valid XML:") ? f : new Error(`Model response is not valid XML: ${f.message}`) : r === "json" ? new Error("Model response is not valid JSON.") : new Error(`Failed to parse response as ${r}: ${f.message}`);
  }
}
function Lv(t, r) {
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
var Ol = { exports: {} }, kl = { exports: {} }, Yn = {}, cn = {}, Iv;
function hn() {
  if (Iv) return cn;
  Iv = 1, cn.__esModule = !0, cn.extend = l, cn.indexOf = d, cn.escapeExpression = v, cn.isEmpty = g, cn.createFrame = _, cn.blockParams = m, cn.appendContextPath = y;
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
      for (var C in arguments[x])
        Object.prototype.hasOwnProperty.call(arguments[x], C) && (h[C] = arguments[x][C]);
    return h;
  }
  var u = Object.prototype.toString;
  cn.toString = u;
  var f = function(x) {
    return typeof x == "function";
  };
  f(/x/) && (cn.isFunction = f = function(h) {
    return typeof h == "function" && u.call(h) === "[object Function]";
  }), cn.isFunction = f;
  var p = Array.isArray || function(h) {
    return h && typeof h == "object" ? u.call(h) === "[object Array]" : !1;
  };
  cn.isArray = p;
  function d(h, x) {
    for (var C = 0, T = h.length; C < T; C++)
      if (h[C] === x)
        return C;
    return -1;
  }
  function v(h) {
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
  function g(h) {
    return !h && h !== 0 ? !0 : !!(p(h) && h.length === 0);
  }
  function _(h) {
    var x = l({}, h);
    return x._parent = h, x;
  }
  function m(h, x) {
    return h.path = x, h;
  }
  function y(h, x) {
    return (h ? h + "." : "") + x;
  }
  return cn;
}
var Ml = { exports: {} }, Pv;
function Qn() {
  return Pv || (Pv = 1, (function(t, r) {
    r.__esModule = !0;
    var i = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
    function s(l, u) {
      var f = u && u.loc, p = void 0, d = void 0, v = void 0, g = void 0;
      f && (p = f.start.line, d = f.end.line, v = f.start.column, g = f.end.column, l += " - " + p + ":" + v);
      for (var _ = Error.prototype.constructor.call(this, l), m = 0; m < i.length; m++)
        this[i[m]] = _[i[m]];
      Error.captureStackTrace && Error.captureStackTrace(this, s);
      try {
        f && (this.lineNumber = p, this.endLineNumber = d, Object.defineProperty ? (Object.defineProperty(this, "column", {
          value: v,
          enumerable: !0
        }), Object.defineProperty(this, "endColumn", {
          value: g,
          enumerable: !0
        })) : (this.column = v, this.endColumn = g));
      } catch {
      }
    }
    s.prototype = new Error(), r.default = s, t.exports = r.default;
  })(Ml, Ml.exports)), Ml.exports;
}
var qs = {}, jl = { exports: {} }, Bv;
function aE() {
  return Bv || (Bv = 1, (function(t, r) {
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
var Dl = { exports: {} }, Uv;
function iE() {
  return Uv || (Uv = 1, (function(t, r) {
    r.__esModule = !0;
    function i(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var s = hn(), l = Qn(), u = i(l);
    r.default = function(f) {
      f.registerHelper("each", function(p, d) {
        if (!d)
          throw new u.default("Must pass iterator to #each");
        var v = d.fn, g = d.inverse, _ = 0, m = "", y = void 0, h = void 0;
        d.data && d.ids && (h = s.appendContextPath(d.data.contextPath, d.ids[0]) + "."), s.isFunction(p) && (p = p.call(this)), d.data && (y = s.createFrame(d.data));
        function x(E, N, M) {
          y && (y.key = E, y.index = N, y.first = N === 0, y.last = !!M, h && (y.contextPath = h + E)), m = m + v(p[E], {
            data: y,
            blockParams: s.blockParams([p[E], E], [h + E, null])
          });
        }
        if (p && typeof p == "object")
          if (s.isArray(p))
            for (var C = p.length; _ < C; _++)
              _ in p && x(_, _, _ === p.length - 1);
          else if (typeof Symbol == "function" && p[Symbol.iterator]) {
            for (var T = [], w = p[Symbol.iterator](), k = w.next(); !k.done; k = w.next())
              T.push(k.value);
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
        return _ === 0 && (m = g(this)), m;
      });
    }, t.exports = r.default;
  })(Dl, Dl.exports)), Dl.exports;
}
var Rl = { exports: {} }, Hv;
function sE() {
  return Hv || (Hv = 1, (function(t, r) {
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
  })(Rl, Rl.exports)), Rl.exports;
}
var zl = { exports: {} }, qv;
function oE() {
  return qv || (qv = 1, (function(t, r) {
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
  })(zl, zl.exports)), zl.exports;
}
var Ll = { exports: {} }, Fv;
function lE() {
  return Fv || (Fv = 1, (function(t, r) {
    r.__esModule = !0, r.default = function(i) {
      i.registerHelper("log", function() {
        for (var s = [void 0], l = arguments[arguments.length - 1], u = 0; u < arguments.length - 1; u++)
          s.push(arguments[u]);
        var f = 1;
        l.hash.level != null ? f = l.hash.level : l.data && l.data.level != null && (f = l.data.level), s[0] = f, i.log.apply(i, s);
      });
    }, t.exports = r.default;
  })(Ll, Ll.exports)), Ll.exports;
}
var Il = { exports: {} }, Zv;
function uE() {
  return Zv || (Zv = 1, (function(t, r) {
    r.__esModule = !0, r.default = function(i) {
      i.registerHelper("lookup", function(s, l, u) {
        return s && u.lookupProperty(s, l);
      });
    }, t.exports = r.default;
  })(Il, Il.exports)), Il.exports;
}
var Pl = { exports: {} }, Gv;
function cE() {
  return Gv || (Gv = 1, (function(t, r) {
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
        var v = d.fn;
        if (s.isEmpty(p))
          return d.inverse(this);
        var g = d.data;
        return d.data && d.ids && (g = s.createFrame(d.data), g.contextPath = s.appendContextPath(d.data.contextPath, d.ids[0])), v(p, {
          data: g,
          blockParams: s.blockParams([p], [g && g.contextPath])
        });
      });
    }, t.exports = r.default;
  })(Pl, Pl.exports)), Pl.exports;
}
var Vv;
function I0() {
  if (Vv) return qs;
  Vv = 1, qs.__esModule = !0, qs.registerDefaultHelpers = x, qs.moveHelperToHooks = C;
  function t(T) {
    return T && T.__esModule ? T : { default: T };
  }
  var r = aE(), i = t(r), s = iE(), l = t(s), u = sE(), f = t(u), p = oE(), d = t(p), v = lE(), g = t(v), _ = uE(), m = t(_), y = cE(), h = t(y);
  function x(T) {
    i.default(T), l.default(T), f.default(T), d.default(T), g.default(T), m.default(T), h.default(T);
  }
  function C(T, w, k) {
    T.helpers[w] && (T.hooks[w] = T.helpers[w], k || delete T.helpers[w]);
  }
  return qs;
}
var Bl = {}, Ul = { exports: {} }, Yv;
function fE() {
  return Yv || (Yv = 1, (function(t, r) {
    r.__esModule = !0;
    var i = hn();
    r.default = function(s) {
      s.registerDecorator("inline", function(l, u, f, p) {
        var d = l;
        return u.partials || (u.partials = {}, d = function(v, g) {
          var _ = f.partials;
          f.partials = i.extend({}, _, u.partials);
          var m = l(v, g);
          return f.partials = _, m;
        }), u.partials[p.args[0]] = p.fn, d;
      });
    }, t.exports = r.default;
  })(Ul, Ul.exports)), Ul.exports;
}
var Xv;
function dE() {
  if (Xv) return Bl;
  Xv = 1, Bl.__esModule = !0, Bl.registerDefaultDecorators = s;
  function t(l) {
    return l && l.__esModule ? l : { default: l };
  }
  var r = fE(), i = t(r);
  function s(l) {
    i.default(l);
  }
  return Bl;
}
var Hl = { exports: {} }, $v;
function P0() {
  return $v || ($v = 1, (function(t, r) {
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
          for (var p = arguments.length, d = Array(p > 1 ? p - 1 : 0), v = 1; v < p; v++)
            d[v - 1] = arguments[v];
          console[f].apply(console, d);
        }
      }
    };
    r.default = s, t.exports = r.default;
  })(Hl, Hl.exports)), Hl.exports;
}
var Ti = {}, ql = {}, Jv;
function hE() {
  if (Jv) return ql;
  Jv = 1, ql.__esModule = !0, ql.createNewLookupObject = r;
  var t = hn();
  function r() {
    for (var i = arguments.length, s = Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return t.extend.apply(void 0, [/* @__PURE__ */ Object.create(null)].concat(s));
  }
  return ql;
}
var Qv;
function B0() {
  if (Qv) return Ti;
  Qv = 1, Ti.__esModule = !0, Ti.createProtoAccessControl = u, Ti.resultIsAllowed = f, Ti.resetLoggedProperties = v;
  function t(g) {
    return g && g.__esModule ? g : { default: g };
  }
  var r = hE(), i = P0(), s = t(i), l = /* @__PURE__ */ Object.create(null);
  function u(g) {
    var _ = /* @__PURE__ */ Object.create(null);
    _.constructor = !1, _.__defineGetter__ = !1, _.__defineSetter__ = !1, _.__lookupGetter__ = !1;
    var m = /* @__PURE__ */ Object.create(null);
    return m.__proto__ = !1, {
      properties: {
        whitelist: r.createNewLookupObject(m, g.allowedProtoProperties),
        defaultValue: g.allowProtoPropertiesByDefault
      },
      methods: {
        whitelist: r.createNewLookupObject(_, g.allowedProtoMethods),
        defaultValue: g.allowProtoMethodsByDefault
      }
    };
  }
  function f(g, _, m) {
    return p(typeof g == "function" ? _.methods : _.properties, m);
  }
  function p(g, _) {
    return g.whitelist[_] !== void 0 ? g.whitelist[_] === !0 : g.defaultValue !== void 0 ? g.defaultValue : (d(_), !1);
  }
  function d(g) {
    l[g] !== !0 && (l[g] = !0, s.default.log("error", 'Handlebars: Access has been denied to resolve the property "' + g + `" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`));
  }
  function v() {
    Object.keys(l).forEach(function(g) {
      delete l[g];
    });
  }
  return Ti;
}
var Kv;
function nh() {
  if (Kv) return Yn;
  Kv = 1, Yn.__esModule = !0, Yn.HandlebarsEnvironment = h;
  function t(C) {
    return C && C.__esModule ? C : { default: C };
  }
  var r = hn(), i = Qn(), s = t(i), l = I0(), u = dE(), f = P0(), p = t(f), d = B0(), v = "4.7.8";
  Yn.VERSION = v;
  var g = 8;
  Yn.COMPILER_REVISION = g;
  var _ = 7;
  Yn.LAST_COMPATIBLE_COMPILER_REVISION = _;
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
  Yn.REVISION_CHANGES = m;
  var y = "[object Object]";
  function h(C, T, w) {
    this.helpers = C || {}, this.partials = T || {}, this.decorators = w || {}, l.registerDefaultHelpers(this), u.registerDefaultDecorators(this);
  }
  h.prototype = {
    constructor: h,
    logger: p.default,
    log: p.default.log,
    registerHelper: function(T, w) {
      if (r.toString.call(T) === y) {
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
      if (r.toString.call(T) === y)
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
      if (r.toString.call(T) === y) {
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
      d.resetLoggedProperties();
    }
  };
  var x = p.default.log;
  return Yn.log = x, Yn.createFrame = r.createFrame, Yn.logger = p.default, Yn;
}
var Fl = { exports: {} }, Wv;
function pE() {
  return Wv || (Wv = 1, (function(t, r) {
    r.__esModule = !0;
    function i(s) {
      this.string = s;
    }
    i.prototype.toString = i.prototype.toHTML = function() {
      return "" + this.string;
    }, r.default = i, t.exports = r.default;
  })(Fl, Fl.exports)), Fl.exports;
}
var xr = {}, Zl = {}, ey;
function mE() {
  if (ey) return Zl;
  ey = 1, Zl.__esModule = !0, Zl.wrapHelper = t;
  function t(r, i) {
    if (typeof r != "function")
      return r;
    var s = function() {
      var u = arguments[arguments.length - 1];
      return arguments[arguments.length - 1] = i(u), r.apply(this, arguments);
    };
    return s;
  }
  return Zl;
}
var ty;
function gE() {
  if (ty) return xr;
  ty = 1, xr.__esModule = !0, xr.checkRevision = g, xr.template = _, xr.wrapProgram = m, xr.resolvePartial = y, xr.invokePartial = h, xr.noop = x;
  function t(E) {
    return E && E.__esModule ? E : { default: E };
  }
  function r(E) {
    if (E && E.__esModule)
      return E;
    var N = {};
    if (E != null)
      for (var M in E)
        Object.prototype.hasOwnProperty.call(E, M) && (N[M] = E[M]);
    return N.default = E, N;
  }
  var i = hn(), s = r(i), l = Qn(), u = t(l), f = nh(), p = I0(), d = mE(), v = B0();
  function g(E) {
    var N = E && E[0] || 1, M = f.COMPILER_REVISION;
    if (!(N >= f.LAST_COMPATIBLE_COMPILER_REVISION && N <= f.COMPILER_REVISION))
      if (N < f.LAST_COMPATIBLE_COMPILER_REVISION) {
        var j = f.REVISION_CHANGES[M], U = f.REVISION_CHANGES[N];
        throw new u.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + j + ") or downgrade your runtime to an older version (" + U + ").");
      } else
        throw new u.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + E[1] + ").");
  }
  function _(E, N) {
    if (!N)
      throw new u.default("No environment passed to template");
    if (!E || !E.main)
      throw new u.default("Unknown template object: " + typeof E);
    E.main.decorator = E.main_d, N.VM.checkRevision(E.compiler);
    var M = E.compiler && E.compiler[0] === 7;
    function j(P, Y, V) {
      V.hash && (Y = s.extend({}, Y, V.hash), V.ids && (V.ids[0] = !0)), P = N.VM.resolvePartial.call(this, P, Y, V);
      var le = s.extend({}, V, {
        hooks: this.hooks,
        protoAccessControl: this.protoAccessControl
      }), fe = N.VM.invokePartial.call(this, P, Y, le);
      if (fe == null && N.compile && (V.partials[V.name] = N.compile(P, E.compilerOptions, N), fe = V.partials[V.name](Y, le)), fe != null) {
        if (V.indent) {
          for (var ue = fe.split(`
`), I = 0, ne = ue.length; I < ne && !(!ue[I] && I + 1 === ne); I++)
            ue[I] = V.indent + ue[I];
          fe = ue.join(`
`);
        }
        return fe;
      } else
        throw new u.default("The partial " + V.name + " could not be compiled when running in runtime-only mode");
    }
    var U = {
      strict: function(Y, V, le) {
        if (!Y || !(V in Y))
          throw new u.default('"' + V + '" not defined in ' + Y, {
            loc: le
          });
        return U.lookupProperty(Y, V);
      },
      lookupProperty: function(Y, V) {
        var le = Y[V];
        if (le == null || Object.prototype.hasOwnProperty.call(Y, V) || v.resultIsAllowed(le, U.protoAccessControl, V))
          return le;
      },
      lookup: function(Y, V) {
        for (var le = Y.length, fe = 0; fe < le; fe++) {
          var ue = Y[fe] && U.lookupProperty(Y[fe], V);
          if (ue != null)
            return Y[fe][V];
        }
      },
      lambda: function(Y, V) {
        return typeof Y == "function" ? Y.call(V) : Y;
      },
      escapeExpression: s.escapeExpression,
      invokePartial: j,
      fn: function(Y) {
        var V = E[Y];
        return V.decorator = E[Y + "_d"], V;
      },
      programs: [],
      program: function(Y, V, le, fe, ue) {
        var I = this.programs[Y], ne = this.fn(Y);
        return V || ue || fe || le ? I = m(this, Y, ne, V, le, fe, ue) : I || (I = this.programs[Y] = m(this, Y, ne)), I;
      },
      data: function(Y, V) {
        for (; Y && V--; )
          Y = Y._parent;
        return Y;
      },
      mergeIfNeeded: function(Y, V) {
        var le = Y || V;
        return Y && V && Y !== V && (le = s.extend({}, V, Y)), le;
      },
      // An empty object to use as replacement for null-contexts
      nullContext: Object.seal({}),
      noop: N.VM.noop,
      compilerInfo: E.compiler
    };
    function G(P) {
      var Y = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], V = Y.data;
      G._setup(Y), !Y.partial && E.useData && (V = C(P, V));
      var le = void 0, fe = E.useBlockParams ? [] : void 0;
      E.useDepths && (Y.depths ? le = P != Y.depths[0] ? [P].concat(Y.depths) : Y.depths : le = [P]);
      function ue(I) {
        return "" + E.main(U, I, U.helpers, U.partials, V, fe, le);
      }
      return ue = T(E.main, ue, U, Y.depths || [], V, fe), ue(P, Y);
    }
    return G.isTop = !0, G._setup = function(P) {
      if (P.partial)
        U.protoAccessControl = P.protoAccessControl, U.helpers = P.helpers, U.partials = P.partials, U.decorators = P.decorators, U.hooks = P.hooks;
      else {
        var Y = s.extend({}, N.helpers, P.helpers);
        w(Y, U), U.helpers = Y, E.usePartial && (U.partials = U.mergeIfNeeded(P.partials, N.partials)), (E.usePartial || E.useDecorators) && (U.decorators = s.extend({}, N.decorators, P.decorators)), U.hooks = {}, U.protoAccessControl = v.createProtoAccessControl(P);
        var V = P.allowCallsToHelperMissing || M;
        p.moveHelperToHooks(U, "helperMissing", V), p.moveHelperToHooks(U, "blockHelperMissing", V);
      }
    }, G._child = function(P, Y, V, le) {
      if (E.useBlockParams && !V)
        throw new u.default("must pass block params");
      if (E.useDepths && !le)
        throw new u.default("must pass parent depths");
      return m(U, P, E[P], Y, 0, V, le);
    }, G;
  }
  function m(E, N, M, j, U, G, P) {
    function Y(V) {
      var le = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], fe = P;
      return P && V != P[0] && !(V === E.nullContext && P[0] === null) && (fe = [V].concat(P)), M(E, V, E.helpers, E.partials, le.data || j, G && [le.blockParams].concat(G), fe);
    }
    return Y = T(M, Y, E, P, j, G), Y.program = N, Y.depth = P ? P.length : 0, Y.blockParams = U || 0, Y;
  }
  function y(E, N, M) {
    return E ? !E.call && !M.name && (M.name = E, E = M.partials[E]) : M.name === "@partial-block" ? E = M.data["partial-block"] : E = M.partials[M.name], E;
  }
  function h(E, N, M) {
    var j = M.data && M.data["partial-block"];
    M.partial = !0, M.ids && (M.data.contextPath = M.ids[0] || M.data.contextPath);
    var U = void 0;
    if (M.fn && M.fn !== x && (function() {
      M.data = f.createFrame(M.data);
      var G = M.fn;
      U = M.data["partial-block"] = function(Y) {
        var V = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
        return V.data = f.createFrame(V.data), V.data["partial-block"] = j, G(Y, V);
      }, G.partials && (M.partials = s.extend({}, M.partials, G.partials));
    })(), E === void 0 && U && (E = U), E === void 0)
      throw new u.default("The partial " + M.name + " could not be found");
    if (E instanceof Function)
      return E(N, M);
  }
  function x() {
    return "";
  }
  function C(E, N) {
    return (!N || !("root" in N)) && (N = N ? f.createFrame(N) : {}, N.root = E), N;
  }
  function T(E, N, M, j, U, G) {
    if (E.decorator) {
      var P = {};
      N = E.decorator(N, P, M, j && j[0], U, G, j), s.extend(N, P);
    }
    return N;
  }
  function w(E, N) {
    Object.keys(E).forEach(function(M) {
      var j = E[M];
      E[M] = k(j, N);
    });
  }
  function k(E, N) {
    var M = N.lookupProperty;
    return d.wrapHelper(E, function(j) {
      return s.extend({ lookupProperty: M }, j);
    });
  }
  return xr;
}
var Gl = { exports: {} }, ny;
function U0() {
  return ny || (ny = 1, (function(t, r) {
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
  })(Gl, Gl.exports)), Gl.exports;
}
var ry;
function vE() {
  return ry || (ry = 1, (function(t, r) {
    r.__esModule = !0;
    function i(w) {
      return w && w.__esModule ? w : { default: w };
    }
    function s(w) {
      if (w && w.__esModule)
        return w;
      var k = {};
      if (w != null)
        for (var E in w)
          Object.prototype.hasOwnProperty.call(w, E) && (k[E] = w[E]);
      return k.default = w, k;
    }
    var l = nh(), u = s(l), f = pE(), p = i(f), d = Qn(), v = i(d), g = hn(), _ = s(g), m = gE(), y = s(m), h = U0(), x = i(h);
    function C() {
      var w = new u.HandlebarsEnvironment();
      return _.extend(w, u), w.SafeString = p.default, w.Exception = v.default, w.Utils = _, w.escapeExpression = _.escapeExpression, w.VM = y, w.template = function(k) {
        return y.template(k, w);
      }, w;
    }
    var T = C();
    T.create = C, x.default(T), T.default = T, r.default = T, t.exports = r.default;
  })(kl, kl.exports)), kl.exports;
}
var Vl = { exports: {} }, ay;
function H0() {
  return ay || (ay = 1, (function(t, r) {
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
  })(Vl, Vl.exports)), Vl.exports;
}
var Oi = {}, Yl = { exports: {} }, iy;
function yE() {
  return iy || (iy = 1, (function(t, r) {
    r.__esModule = !0;
    var i = (function() {
      var s = {
        trace: function() {
        },
        yy: {},
        symbols_: { error: 2, root: 3, program: 4, EOF: 5, program_repetition0: 6, statement: 7, mustache: 8, block: 9, rawBlock: 10, partial: 11, partialBlock: 12, content: 13, COMMENT: 14, CONTENT: 15, openRawBlock: 16, rawBlock_repetition0: 17, END_RAW_BLOCK: 18, OPEN_RAW_BLOCK: 19, helperName: 20, openRawBlock_repetition0: 21, openRawBlock_option0: 22, CLOSE_RAW_BLOCK: 23, openBlock: 24, block_option0: 25, closeBlock: 26, openInverse: 27, block_option1: 28, OPEN_BLOCK: 29, openBlock_repetition0: 30, openBlock_option0: 31, openBlock_option1: 32, CLOSE: 33, OPEN_INVERSE: 34, openInverse_repetition0: 35, openInverse_option0: 36, openInverse_option1: 37, openInverseChain: 38, OPEN_INVERSE_CHAIN: 39, openInverseChain_repetition0: 40, openInverseChain_option0: 41, openInverseChain_option1: 42, inverseAndProgram: 43, INVERSE: 44, inverseChain: 45, inverseChain_option0: 46, OPEN_ENDBLOCK: 47, OPEN: 48, mustache_repetition0: 49, mustache_option0: 50, OPEN_UNESCAPED: 51, mustache_repetition1: 52, mustache_option1: 53, CLOSE_UNESCAPED: 54, OPEN_PARTIAL: 55, partialName: 56, partial_repetition0: 57, partial_option0: 58, openPartialBlock: 59, OPEN_PARTIAL_BLOCK: 60, openPartialBlock_repetition0: 61, openPartialBlock_option0: 62, param: 63, sexpr: 64, OPEN_SEXPR: 65, sexpr_repetition0: 66, sexpr_option0: 67, CLOSE_SEXPR: 68, hash: 69, hash_repetition_plus0: 70, hashSegment: 71, ID: 72, EQUALS: 73, blockParams: 74, OPEN_BLOCK_PARAMS: 75, blockParams_repetition_plus0: 76, CLOSE_BLOCK_PARAMS: 77, path: 78, dataName: 79, STRING: 80, NUMBER: 81, BOOLEAN: 82, UNDEFINED: 83, NULL: 84, DATA: 85, pathSegments: 86, SEP: 87, $accept: 0, $end: 1 },
        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 0], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
        performAction: function(p, d, v, g, _, m, y) {
          var h = m.length - 1;
          switch (_) {
            case 1:
              return m[h - 1];
            case 2:
              this.$ = g.prepareProgram(m[h]);
              break;
            case 3:
              this.$ = m[h];
              break;
            case 4:
              this.$ = m[h];
              break;
            case 5:
              this.$ = m[h];
              break;
            case 6:
              this.$ = m[h];
              break;
            case 7:
              this.$ = m[h];
              break;
            case 8:
              this.$ = m[h];
              break;
            case 9:
              this.$ = {
                type: "CommentStatement",
                value: g.stripComment(m[h]),
                strip: g.stripFlags(m[h], m[h]),
                loc: g.locInfo(this._$)
              };
              break;
            case 10:
              this.$ = {
                type: "ContentStatement",
                original: m[h],
                value: m[h],
                loc: g.locInfo(this._$)
              };
              break;
            case 11:
              this.$ = g.prepareRawBlock(m[h - 2], m[h - 1], m[h], this._$);
              break;
            case 12:
              this.$ = { path: m[h - 3], params: m[h - 2], hash: m[h - 1] };
              break;
            case 13:
              this.$ = g.prepareBlock(m[h - 3], m[h - 2], m[h - 1], m[h], !1, this._$);
              break;
            case 14:
              this.$ = g.prepareBlock(m[h - 3], m[h - 2], m[h - 1], m[h], !0, this._$);
              break;
            case 15:
              this.$ = { open: m[h - 5], path: m[h - 4], params: m[h - 3], hash: m[h - 2], blockParams: m[h - 1], strip: g.stripFlags(m[h - 5], m[h]) };
              break;
            case 16:
              this.$ = { path: m[h - 4], params: m[h - 3], hash: m[h - 2], blockParams: m[h - 1], strip: g.stripFlags(m[h - 5], m[h]) };
              break;
            case 17:
              this.$ = { path: m[h - 4], params: m[h - 3], hash: m[h - 2], blockParams: m[h - 1], strip: g.stripFlags(m[h - 5], m[h]) };
              break;
            case 18:
              this.$ = { strip: g.stripFlags(m[h - 1], m[h - 1]), program: m[h] };
              break;
            case 19:
              var x = g.prepareBlock(m[h - 2], m[h - 1], m[h], m[h], !1, this._$), C = g.prepareProgram([x], m[h - 1].loc);
              C.chained = !0, this.$ = { strip: m[h - 2].strip, program: C, chain: !0 };
              break;
            case 20:
              this.$ = m[h];
              break;
            case 21:
              this.$ = { path: m[h - 1], strip: g.stripFlags(m[h - 2], m[h]) };
              break;
            case 22:
              this.$ = g.prepareMustache(m[h - 3], m[h - 2], m[h - 1], m[h - 4], g.stripFlags(m[h - 4], m[h]), this._$);
              break;
            case 23:
              this.$ = g.prepareMustache(m[h - 3], m[h - 2], m[h - 1], m[h - 4], g.stripFlags(m[h - 4], m[h]), this._$);
              break;
            case 24:
              this.$ = {
                type: "PartialStatement",
                name: m[h - 3],
                params: m[h - 2],
                hash: m[h - 1],
                indent: "",
                strip: g.stripFlags(m[h - 4], m[h]),
                loc: g.locInfo(this._$)
              };
              break;
            case 25:
              this.$ = g.preparePartialBlock(m[h - 2], m[h - 1], m[h], this._$);
              break;
            case 26:
              this.$ = { path: m[h - 3], params: m[h - 2], hash: m[h - 1], strip: g.stripFlags(m[h - 4], m[h]) };
              break;
            case 27:
              this.$ = m[h];
              break;
            case 28:
              this.$ = m[h];
              break;
            case 29:
              this.$ = {
                type: "SubExpression",
                path: m[h - 3],
                params: m[h - 2],
                hash: m[h - 1],
                loc: g.locInfo(this._$)
              };
              break;
            case 30:
              this.$ = { type: "Hash", pairs: m[h], loc: g.locInfo(this._$) };
              break;
            case 31:
              this.$ = { type: "HashPair", key: g.id(m[h - 2]), value: m[h], loc: g.locInfo(this._$) };
              break;
            case 32:
              this.$ = g.id(m[h - 1]);
              break;
            case 33:
              this.$ = m[h];
              break;
            case 34:
              this.$ = m[h];
              break;
            case 35:
              this.$ = { type: "StringLiteral", value: m[h], original: m[h], loc: g.locInfo(this._$) };
              break;
            case 36:
              this.$ = { type: "NumberLiteral", value: Number(m[h]), original: Number(m[h]), loc: g.locInfo(this._$) };
              break;
            case 37:
              this.$ = { type: "BooleanLiteral", value: m[h] === "true", original: m[h] === "true", loc: g.locInfo(this._$) };
              break;
            case 38:
              this.$ = { type: "UndefinedLiteral", original: void 0, value: void 0, loc: g.locInfo(this._$) };
              break;
            case 39:
              this.$ = { type: "NullLiteral", original: null, value: null, loc: g.locInfo(this._$) };
              break;
            case 40:
              this.$ = m[h];
              break;
            case 41:
              this.$ = m[h];
              break;
            case 42:
              this.$ = g.preparePath(!0, m[h], this._$);
              break;
            case 43:
              this.$ = g.preparePath(!1, m[h], this._$);
              break;
            case 44:
              m[h - 2].push({ part: g.id(m[h]), original: m[h], separator: m[h - 1] }), this.$ = m[h - 2];
              break;
            case 45:
              this.$ = [{ part: g.id(m[h]), original: m[h] }];
              break;
            case 46:
              this.$ = [];
              break;
            case 47:
              m[h - 1].push(m[h]);
              break;
            case 48:
              this.$ = [];
              break;
            case 49:
              m[h - 1].push(m[h]);
              break;
            case 50:
              this.$ = [];
              break;
            case 51:
              m[h - 1].push(m[h]);
              break;
            case 58:
              this.$ = [];
              break;
            case 59:
              m[h - 1].push(m[h]);
              break;
            case 64:
              this.$ = [];
              break;
            case 65:
              m[h - 1].push(m[h]);
              break;
            case 70:
              this.$ = [];
              break;
            case 71:
              m[h - 1].push(m[h]);
              break;
            case 78:
              this.$ = [];
              break;
            case 79:
              m[h - 1].push(m[h]);
              break;
            case 82:
              this.$ = [];
              break;
            case 83:
              m[h - 1].push(m[h]);
              break;
            case 86:
              this.$ = [];
              break;
            case 87:
              m[h - 1].push(m[h]);
              break;
            case 90:
              this.$ = [];
              break;
            case 91:
              m[h - 1].push(m[h]);
              break;
            case 94:
              this.$ = [];
              break;
            case 95:
              m[h - 1].push(m[h]);
              break;
            case 98:
              this.$ = [m[h]];
              break;
            case 99:
              m[h - 1].push(m[h]);
              break;
            case 100:
              this.$ = [m[h]];
              break;
            case 101:
              m[h - 1].push(m[h]);
              break;
          }
        },
        table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 15: [2, 48], 17: 39, 18: [2, 48] }, { 20: 41, 56: 40, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 44, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 45, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 41, 56: 48, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 49, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 50] }, { 72: [1, 35], 86: 51 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 52, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 53, 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 54, 47: [2, 54] }, { 28: 59, 43: 60, 44: [1, 58], 47: [2, 56] }, { 13: 62, 15: [1, 20], 18: [1, 61] }, { 33: [2, 86], 57: 63, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 64, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 65, 47: [1, 66] }, { 30: 67, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 68, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 69, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 70, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 74, 33: [2, 80], 50: 71, 63: 72, 64: 75, 65: [1, 43], 69: 73, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 79] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 50] }, { 20: 74, 53: 80, 54: [2, 84], 63: 81, 64: 75, 65: [1, 43], 69: 82, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 83, 47: [1, 66] }, { 47: [2, 55] }, { 4: 84, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 85, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 86, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 87, 47: [1, 66] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 74, 33: [2, 88], 58: 88, 63: 89, 64: 75, 65: [1, 43], 69: 90, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 91, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 92, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 31: 93, 33: [2, 60], 63: 94, 64: 75, 65: [1, 43], 69: 95, 70: 76, 71: 77, 72: [1, 78], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 66], 36: 96, 63: 97, 64: 75, 65: [1, 43], 69: 98, 70: 76, 71: 77, 72: [1, 78], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 22: 99, 23: [2, 52], 63: 100, 64: 75, 65: [1, 43], 69: 101, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 92], 62: 102, 63: 103, 64: 75, 65: [1, 43], 69: 104, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 105] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 106, 72: [1, 107], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 108], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 109] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 111, 46: 110, 47: [2, 76] }, { 33: [2, 70], 40: 112, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 113] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 74, 63: 115, 64: 75, 65: [1, 43], 67: 114, 68: [2, 96], 69: 116, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 117] }, { 32: 118, 33: [2, 62], 74: 119, 75: [1, 120] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 121, 74: 122, 75: [1, 120] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 123] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 124] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 108] }, { 20: 74, 63: 125, 64: 75, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 74, 33: [2, 72], 41: 126, 63: 127, 64: 75, 65: [1, 43], 69: 128, 70: 76, 71: 77, 72: [1, 78], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 129] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 130] }, { 33: [2, 63] }, { 72: [1, 132], 76: 131 }, { 33: [1, 133] }, { 33: [2, 69] }, { 15: [2, 12], 18: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 134, 74: 135, 75: [1, 120] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 137], 77: [1, 136] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 138] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
        defaultActions: { 4: [2, 1], 54: [2, 55], 56: [2, 20], 60: [2, 57], 73: [2, 81], 82: [2, 85], 86: [2, 18], 90: [2, 89], 101: [2, 53], 104: [2, 93], 110: [2, 19], 111: [2, 77], 116: [2, 97], 119: [2, 63], 122: [2, 69], 135: [2, 75], 136: [2, 32] },
        parseError: function(p, d) {
          throw new Error(p);
        },
        parse: function(p) {
          var d = this, v = [0], g = [null], _ = [], m = this.table, y = "", h = 0, x = 0;
          this.lexer.setInput(p), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc > "u" && (this.lexer.yylloc = {});
          var C = this.lexer.yylloc;
          _.push(C);
          var T = this.lexer.options && this.lexer.options.ranges;
          typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
          function w() {
            var le;
            return le = d.lexer.lex() || 1, typeof le != "number" && (le = d.symbols_[le] || le), le;
          }
          for (var k, E, N, M, j = {}, U, G, P, Y; ; ) {
            if (E = v[v.length - 1], this.defaultActions[E] ? N = this.defaultActions[E] : ((k === null || typeof k > "u") && (k = w()), N = m[E] && m[E][k]), typeof N > "u" || !N.length || !N[0]) {
              var V = "";
              {
                Y = [];
                for (U in m[E]) this.terminals_[U] && U > 2 && Y.push("'" + this.terminals_[U] + "'");
                this.lexer.showPosition ? V = "Parse error on line " + (h + 1) + `:
` + this.lexer.showPosition() + `
Expecting ` + Y.join(", ") + ", got '" + (this.terminals_[k] || k) + "'" : V = "Parse error on line " + (h + 1) + ": Unexpected " + (k == 1 ? "end of input" : "'" + (this.terminals_[k] || k) + "'"), this.parseError(V, { text: this.lexer.match, token: this.terminals_[k] || k, line: this.lexer.yylineno, loc: C, expected: Y });
              }
            }
            if (N[0] instanceof Array && N.length > 1)
              throw new Error("Parse Error: multiple actions possible at state: " + E + ", token: " + k);
            switch (N[0]) {
              case 1:
                v.push(k), g.push(this.lexer.yytext), _.push(this.lexer.yylloc), v.push(N[1]), k = null, x = this.lexer.yyleng, y = this.lexer.yytext, h = this.lexer.yylineno, C = this.lexer.yylloc;
                break;
              case 2:
                if (G = this.productions_[N[1]][1], j.$ = g[g.length - G], j._$ = { first_line: _[_.length - (G || 1)].first_line, last_line: _[_.length - 1].last_line, first_column: _[_.length - (G || 1)].first_column, last_column: _[_.length - 1].last_column }, T && (j._$.range = [_[_.length - (G || 1)].range[0], _[_.length - 1].range[1]]), M = this.performAction.call(j, y, x, h, this.yy, N[1], g, _), typeof M < "u")
                  return M;
                G && (v = v.slice(0, -1 * G * 2), g = g.slice(0, -1 * G), _ = _.slice(0, -1 * G)), v.push(this.productions_[N[1]][0]), g.push(j.$), _.push(j._$), P = m[v[v.length - 2]][v[v.length - 1]], v.push(P);
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
          parseError: function(d, v) {
            if (this.yy.parser)
              this.yy.parser.parseError(d, v);
            else
              throw new Error(d);
          },
          setInput: function(d) {
            return this._input = d, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
          },
          input: function() {
            var d = this._input[0];
            this.yytext += d, this.yyleng++, this.offset++, this.match += d, this.matched += d;
            var v = d.match(/(?:\r\n?|\n).*/g);
            return v ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), d;
          },
          unput: function(d) {
            var v = d.length, g = d.split(/(?:\r\n?|\n)/g);
            this._input = d + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - v - 1), this.offset -= v;
            var _ = this.match.split(/(?:\r\n?|\n)/g);
            this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), g.length - 1 && (this.yylineno -= g.length - 1);
            var m = this.yylloc.range;
            return this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: g ? (g.length === _.length ? this.yylloc.first_column : 0) + _[_.length - g.length].length - g[0].length : this.yylloc.first_column - v
            }, this.options.ranges && (this.yylloc.range = [m[0], m[0] + this.yyleng - v]), this;
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
            var d = this.pastInput(), v = new Array(d.length + 1).join("-");
            return d + this.upcomingInput() + `
` + v + "^";
          },
          next: function() {
            if (this.done)
              return this.EOF;
            this._input || (this.done = !0);
            var d, v, g, _, m;
            this._more || (this.yytext = "", this.match = "");
            for (var y = this._currentRules(), h = 0; h < y.length && (g = this._input.match(this.rules[y[h]]), !(g && (!v || g[0].length > v[0].length) && (v = g, _ = h, !this.options.flex))); h++)
              ;
            return v ? (m = v[0].match(/(?:\r\n?|\n).*/g), m && (this.yylineno += m.length), this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: m ? m[m.length - 1].length - m[m.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + v[0].length
            }, this.yytext += v[0], this.match += v[0], this.matches = v, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(v[0].length), this.matched += v[0], d = this.performAction.call(this, this.yy, this, y[_], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), d || void 0) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
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
        return f.options = {}, f.performAction = function(d, v, g, _) {
          function m(y, h) {
            return v.yytext = v.yytext.substring(y, v.yyleng - h + y);
          }
          switch (g) {
            case 0:
              if (v.yytext.slice(-2) === "\\\\" ? (m(0, 1), this.begin("mu")) : v.yytext.slice(-1) === "\\" ? (m(0, 1), this.begin("emu")) : this.begin("mu"), v.yytext) return 15;
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
              return v.yytext = m(1, 2).replace(/\\"/g, '"'), 80;
            case 32:
              return v.yytext = m(1, 2).replace(/\\'/g, "'"), 80;
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
      s.lexer = l;
      function u() {
        this.yy = {};
      }
      return u.prototype = s, s.Parser = u, new u();
    })();
    r.default = i, t.exports = r.default;
  })(Yl, Yl.exports)), Yl.exports;
}
var Xl = { exports: {} }, $l = { exports: {} }, sy;
function q0() {
  return sy || (sy = 1, (function(t, r) {
    r.__esModule = !0;
    function i(v) {
      return v && v.__esModule ? v : { default: v };
    }
    var s = Qn(), l = i(s);
    function u() {
      this.parents = [];
    }
    u.prototype = {
      constructor: u,
      mutating: !1,
      // Visits a given value. If mutating, will replace the value if necessary.
      acceptKey: function(g, _) {
        var m = this.accept(g[_]);
        if (this.mutating) {
          if (m && !u.prototype[m.type])
            throw new l.default('Unexpected node type "' + m.type + '" found when accepting ' + _ + " on " + g.type);
          g[_] = m;
        }
      },
      // Performs an accept operation with added sanity check to ensure
      // required keys are not removed.
      acceptRequired: function(g, _) {
        if (this.acceptKey(g, _), !g[_])
          throw new l.default(g.type + " requires " + _);
      },
      // Traverses a given array. If mutating, empty respnses will be removed
      // for child elements.
      acceptArray: function(g) {
        for (var _ = 0, m = g.length; _ < m; _++)
          this.acceptKey(g, _), g[_] || (g.splice(_, 1), _--, m--);
      },
      accept: function(g) {
        if (g) {
          if (!this[g.type])
            throw new l.default("Unknown type: " + g.type, g);
          this.current && this.parents.unshift(this.current), this.current = g;
          var _ = this[g.type](g);
          if (this.current = this.parents.shift(), !this.mutating || _)
            return _;
          if (_ !== !1)
            return g;
        }
      },
      Program: function(g) {
        this.acceptArray(g.body);
      },
      MustacheStatement: f,
      Decorator: f,
      BlockStatement: p,
      DecoratorBlock: p,
      PartialStatement: d,
      PartialBlockStatement: function(g) {
        d.call(this, g), this.acceptKey(g, "program");
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
      Hash: function(g) {
        this.acceptArray(g.pairs);
      },
      HashPair: function(g) {
        this.acceptRequired(g, "value");
      }
    };
    function f(v) {
      this.acceptRequired(v, "path"), this.acceptArray(v.params), this.acceptKey(v, "hash");
    }
    function p(v) {
      f.call(this, v), this.acceptKey(v, "program"), this.acceptKey(v, "inverse");
    }
    function d(v) {
      this.acceptRequired(v, "name"), this.acceptArray(v.params), this.acceptKey(v, "hash");
    }
    r.default = u, t.exports = r.default;
  })($l, $l.exports)), $l.exports;
}
var oy;
function bE() {
  return oy || (oy = 1, (function(t, r) {
    r.__esModule = !0;
    function i(g) {
      return g && g.__esModule ? g : { default: g };
    }
    var s = q0(), l = i(s);
    function u() {
      var g = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
      this.options = g;
    }
    u.prototype = new l.default(), u.prototype.Program = function(g) {
      var _ = !this.options.ignoreStandalone, m = !this.isRootSeen;
      this.isRootSeen = !0;
      for (var y = g.body, h = 0, x = y.length; h < x; h++) {
        var C = y[h], T = this.accept(C);
        if (T) {
          var w = f(y, h, m), k = p(y, h, m), E = T.openStandalone && w, N = T.closeStandalone && k, M = T.inlineStandalone && w && k;
          T.close && d(y, h, !0), T.open && v(y, h, !0), _ && M && (d(y, h), v(y, h) && C.type === "PartialStatement" && (C.indent = /([ \t]+$)/.exec(y[h - 1].original)[1])), _ && E && (d((C.program || C.inverse).body), v(y, h)), _ && N && (d(y, h), v((C.inverse || C.program).body));
        }
      }
      return g;
    }, u.prototype.BlockStatement = u.prototype.DecoratorBlock = u.prototype.PartialBlockStatement = function(g) {
      this.accept(g.program), this.accept(g.inverse);
      var _ = g.program || g.inverse, m = g.program && g.inverse, y = m, h = m;
      if (m && m.chained)
        for (y = m.body[0].program; h.chained; )
          h = h.body[h.body.length - 1].program;
      var x = {
        open: g.openStrip.open,
        close: g.closeStrip.close,
        // Determine the standalone candiacy. Basically flag our content as being possibly standalone
        // so our parent can determine if we actually are standalone
        openStandalone: p(_.body),
        closeStandalone: f((y || _).body)
      };
      if (g.openStrip.close && d(_.body, null, !0), m) {
        var C = g.inverseStrip;
        C.open && v(_.body, null, !0), C.close && d(y.body, null, !0), g.closeStrip.open && v(h.body, null, !0), !this.options.ignoreStandalone && f(_.body) && p(y.body) && (v(_.body), d(y.body));
      } else g.closeStrip.open && v(_.body, null, !0);
      return x;
    }, u.prototype.Decorator = u.prototype.MustacheStatement = function(g) {
      return g.strip;
    }, u.prototype.PartialStatement = u.prototype.CommentStatement = function(g) {
      var _ = g.strip || {};
      return {
        inlineStandalone: !0,
        open: _.open,
        close: _.close
      };
    };
    function f(g, _, m) {
      _ === void 0 && (_ = g.length);
      var y = g[_ - 1], h = g[_ - 2];
      if (!y)
        return m;
      if (y.type === "ContentStatement")
        return (h || !m ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(y.original);
    }
    function p(g, _, m) {
      _ === void 0 && (_ = -1);
      var y = g[_ + 1], h = g[_ + 2];
      if (!y)
        return m;
      if (y.type === "ContentStatement")
        return (h || !m ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(y.original);
    }
    function d(g, _, m) {
      var y = g[_ == null ? 0 : _ + 1];
      if (!(!y || y.type !== "ContentStatement" || !m && y.rightStripped)) {
        var h = y.value;
        y.value = y.value.replace(m ? /^\s+/ : /^[ \t]*\r?\n?/, ""), y.rightStripped = y.value !== h;
      }
    }
    function v(g, _, m) {
      var y = g[_ == null ? g.length - 1 : _ - 1];
      if (!(!y || y.type !== "ContentStatement" || !m && y.leftStripped)) {
        var h = y.value;
        return y.value = y.value.replace(m ? /\s+$/ : /[ \t]+$/, ""), y.leftStripped = y.value !== h, y.leftStripped;
      }
    }
    r.default = u, t.exports = r.default;
  })(Xl, Xl.exports)), Xl.exports;
}
var En = {}, ly;
function _E() {
  if (ly) return En;
  ly = 1, En.__esModule = !0, En.SourceLocation = l, En.id = u, En.stripFlags = f, En.stripComment = p, En.preparePath = d, En.prepareMustache = v, En.prepareRawBlock = g, En.prepareBlock = _, En.prepareProgram = m, En.preparePartialBlock = y;
  function t(h) {
    return h && h.__esModule ? h : { default: h };
  }
  var r = Qn(), i = t(r);
  function s(h, x) {
    if (x = x.path ? x.path.original : x, h.path.original !== x) {
      var C = { loc: h.path.loc };
      throw new i.default(h.path.original + " doesn't match " + x, C);
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
  function d(h, x, C) {
    C = this.locInfo(C);
    for (var T = h ? "@" : "", w = [], k = 0, E = 0, N = x.length; E < N; E++) {
      var M = x[E].part, j = x[E].original !== M;
      if (T += (x[E].separator || "") + M, !j && (M === ".." || M === "." || M === "this")) {
        if (w.length > 0)
          throw new i.default("Invalid path: " + T, { loc: C });
        M === ".." && k++;
      } else
        w.push(M);
    }
    return {
      type: "PathExpression",
      data: h,
      depth: k,
      parts: w,
      original: T,
      loc: C
    };
  }
  function v(h, x, C, T, w, k) {
    var E = T.charAt(3) || T.charAt(2), N = E !== "{" && E !== "&", M = /\*/.test(T);
    return {
      type: M ? "Decorator" : "MustacheStatement",
      path: h,
      params: x,
      hash: C,
      escaped: N,
      strip: w,
      loc: this.locInfo(k)
    };
  }
  function g(h, x, C, T) {
    s(h, C), T = this.locInfo(T);
    var w = {
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
      program: w,
      openStrip: {},
      inverseStrip: {},
      closeStrip: {},
      loc: T
    };
  }
  function _(h, x, C, T, w, k) {
    T && T.path && s(h, T);
    var E = /\*/.test(h.open);
    x.blockParams = h.blockParams;
    var N = void 0, M = void 0;
    if (C) {
      if (E)
        throw new i.default("Unexpected inverse block on decorator", C);
      C.chain && (C.program.body[0].closeStrip = T.strip), M = C.strip, N = C.program;
    }
    return w && (w = N, N = x, x = w), {
      type: E ? "DecoratorBlock" : "BlockStatement",
      path: h.path,
      params: h.params,
      hash: h.hash,
      program: x,
      inverse: N,
      openStrip: h.strip,
      inverseStrip: M,
      closeStrip: T && T.strip,
      loc: this.locInfo(k)
    };
  }
  function m(h, x) {
    if (!x && h.length) {
      var C = h[0].loc, T = h[h.length - 1].loc;
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
      body: h,
      strip: {},
      loc: x
    };
  }
  function y(h, x, C, T) {
    return s(h, C), {
      type: "PartialBlockStatement",
      name: h.path,
      params: h.params,
      hash: h.hash,
      program: x,
      openStrip: h.strip,
      closeStrip: C && C.strip,
      loc: this.locInfo(T)
    };
  }
  return En;
}
var uy;
function SE() {
  if (uy) return Oi;
  uy = 1, Oi.__esModule = !0, Oi.parseWithoutProcessing = g, Oi.parse = _;
  function t(m) {
    if (m && m.__esModule)
      return m;
    var y = {};
    if (m != null)
      for (var h in m)
        Object.prototype.hasOwnProperty.call(m, h) && (y[h] = m[h]);
    return y.default = m, y;
  }
  function r(m) {
    return m && m.__esModule ? m : { default: m };
  }
  var i = yE(), s = r(i), l = bE(), u = r(l), f = _E(), p = t(f), d = hn();
  Oi.parser = s.default;
  var v = {};
  d.extend(v, p);
  function g(m, y) {
    if (m.type === "Program")
      return m;
    s.default.yy = v, v.locInfo = function(x) {
      return new v.SourceLocation(y && y.srcName, x);
    };
    var h = s.default.parse(m);
    return h;
  }
  function _(m, y) {
    var h = g(m, y), x = new u.default(y);
    return x.accept(h);
  }
  return Oi;
}
var ki = {}, cy;
function xE() {
  if (cy) return ki;
  cy = 1, ki.__esModule = !0, ki.Compiler = p, ki.precompile = d, ki.compile = v;
  function t(m) {
    return m && m.__esModule ? m : { default: m };
  }
  var r = Qn(), i = t(r), s = hn(), l = H0(), u = t(l), f = [].slice;
  function p() {
  }
  p.prototype = {
    compiler: p,
    equals: function(y) {
      var h = this.opcodes.length;
      if (y.opcodes.length !== h)
        return !1;
      for (var x = 0; x < h; x++) {
        var C = this.opcodes[x], T = y.opcodes[x];
        if (C.opcode !== T.opcode || !g(C.args, T.args))
          return !1;
      }
      h = this.children.length;
      for (var x = 0; x < h; x++)
        if (!this.children[x].equals(y.children[x]))
          return !1;
      return !0;
    },
    guid: 0,
    compile: function(y, h) {
      return this.sourceNode = [], this.opcodes = [], this.children = [], this.options = h, this.stringParams = h.stringParams, this.trackIds = h.trackIds, h.blockParams = h.blockParams || [], h.knownHelpers = s.extend(/* @__PURE__ */ Object.create(null), {
        helperMissing: !0,
        blockHelperMissing: !0,
        each: !0,
        if: !0,
        unless: !0,
        with: !0,
        log: !0,
        lookup: !0
      }, h.knownHelpers), this.accept(y);
    },
    compileProgram: function(y) {
      var h = new this.compiler(), x = h.compile(y, this.options), C = this.guid++;
      return this.usePartial = this.usePartial || x.usePartial, this.children[C] = x, this.useDepths = this.useDepths || x.useDepths, C;
    },
    accept: function(y) {
      if (!this[y.type])
        throw new i.default("Unknown type: " + y.type, y);
      this.sourceNode.unshift(y);
      var h = this[y.type](y);
      return this.sourceNode.shift(), h;
    },
    Program: function(y) {
      this.options.blockParams.unshift(y.blockParams);
      for (var h = y.body, x = h.length, C = 0; C < x; C++)
        this.accept(h[C]);
      return this.options.blockParams.shift(), this.isSimple = x === 1, this.blockParams = y.blockParams ? y.blockParams.length : 0, this;
    },
    BlockStatement: function(y) {
      _(y);
      var h = y.program, x = y.inverse;
      h = h && this.compileProgram(h), x = x && this.compileProgram(x);
      var C = this.classifySexpr(y);
      C === "helper" ? this.helperSexpr(y, h, x) : C === "simple" ? (this.simpleSexpr(y), this.opcode("pushProgram", h), this.opcode("pushProgram", x), this.opcode("emptyHash"), this.opcode("blockValue", y.path.original)) : (this.ambiguousSexpr(y, h, x), this.opcode("pushProgram", h), this.opcode("pushProgram", x), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append");
    },
    DecoratorBlock: function(y) {
      var h = y.program && this.compileProgram(y.program), x = this.setupFullMustacheParams(y, h, void 0), C = y.path;
      this.useDecorators = !0, this.opcode("registerDecorator", x.length, C.original);
    },
    PartialStatement: function(y) {
      this.usePartial = !0;
      var h = y.program;
      h && (h = this.compileProgram(y.program));
      var x = y.params;
      if (x.length > 1)
        throw new i.default("Unsupported number of partial arguments: " + x.length, y);
      x.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : x.push({ type: "PathExpression", parts: [], depth: 0 }));
      var C = y.name.original, T = y.name.type === "SubExpression";
      T && this.accept(y.name), this.setupFullMustacheParams(y, h, void 0, !0);
      var w = y.indent || "";
      this.options.preventIndent && w && (this.opcode("appendContent", w), w = ""), this.opcode("invokePartial", T, C, w), this.opcode("append");
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
      _(y);
      var h = this.classifySexpr(y);
      h === "simple" ? this.simpleSexpr(y) : h === "helper" ? this.helperSexpr(y) : this.ambiguousSexpr(y);
    },
    ambiguousSexpr: function(y, h, x) {
      var C = y.path, T = C.parts[0], w = h != null || x != null;
      this.opcode("getContext", C.depth), this.opcode("pushProgram", h), this.opcode("pushProgram", x), C.strict = !0, this.accept(C), this.opcode("invokeAmbiguous", T, w);
    },
    simpleSexpr: function(y) {
      var h = y.path;
      h.strict = !0, this.accept(h), this.opcode("resolvePossibleLambda");
    },
    helperSexpr: function(y, h, x) {
      var C = this.setupFullMustacheParams(y, h, x), T = y.path, w = T.parts[0];
      if (this.options.knownHelpers[w])
        this.opcode("invokeKnownHelper", C.length, w);
      else {
        if (this.options.knownHelpersOnly)
          throw new i.default("You specified knownHelpersOnly, but used the unknown helper " + w, y);
        T.strict = !0, T.falsy = !0, this.accept(T), this.opcode("invokeHelper", C.length, T.original, u.default.helpers.simpleId(T));
      }
    },
    PathExpression: function(y) {
      this.addDepth(y.depth), this.opcode("getContext", y.depth);
      var h = y.parts[0], x = u.default.helpers.scopedId(y), C = !y.depth && !x && this.blockParamIndex(h);
      C ? this.opcode("lookupBlockParam", C, y.parts) : h ? y.data ? (this.options.data = !0, this.opcode("lookupData", y.depth, y.parts, y.strict)) : this.opcode("lookupOnContext", y.parts, y.falsy, y.strict, x) : this.opcode("pushContext");
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
      var h = y.pairs, x = 0, C = h.length;
      for (this.opcode("pushHash"); x < C; x++)
        this.pushParam(h[x].value);
      for (; x--; )
        this.opcode("assignToHash", h[x].key);
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
      var h = u.default.helpers.simpleId(y.path), x = h && !!this.blockParamIndex(y.path.parts[0]), C = !x && u.default.helpers.helperExpression(y), T = !x && (C || h);
      if (T && !C) {
        var w = y.path.parts[0], k = this.options;
        k.knownHelpers[w] ? C = !0 : k.knownHelpersOnly && (T = !1);
      }
      return C ? "helper" : T ? "ambiguous" : "simple";
    },
    pushParams: function(y) {
      for (var h = 0, x = y.length; h < x; h++)
        this.pushParam(y[h]);
    },
    pushParam: function(y) {
      var h = y.value != null ? y.value : y.original || "";
      if (this.stringParams)
        h.replace && (h = h.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), y.depth && this.addDepth(y.depth), this.opcode("getContext", y.depth || 0), this.opcode("pushStringParam", h, y.type), y.type === "SubExpression" && this.accept(y);
      else {
        if (this.trackIds) {
          var x = void 0;
          if (y.parts && !u.default.helpers.scopedId(y) && !y.depth && (x = this.blockParamIndex(y.parts[0])), x) {
            var C = y.parts.slice(1).join(".");
            this.opcode("pushId", "BlockParam", x, C);
          } else
            h = y.original || h, h.replace && (h = h.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")), this.opcode("pushId", y.type, h);
        }
        this.accept(y);
      }
    },
    setupFullMustacheParams: function(y, h, x, C) {
      var T = y.params;
      return this.pushParams(T), this.opcode("pushProgram", h), this.opcode("pushProgram", x), y.hash ? this.accept(y.hash) : this.opcode("emptyHash", C), T;
    },
    blockParamIndex: function(y) {
      for (var h = 0, x = this.options.blockParams.length; h < x; h++) {
        var C = this.options.blockParams[h], T = C && s.indexOf(C, y);
        if (C && T >= 0)
          return [h, T];
      }
    }
  };
  function d(m, y, h) {
    if (m == null || typeof m != "string" && m.type !== "Program")
      throw new i.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + m);
    y = y || {}, "data" in y || (y.data = !0), y.compat && (y.useDepths = !0);
    var x = h.parse(m, y), C = new h.Compiler().compile(x, y);
    return new h.JavaScriptCompiler().compile(C, y);
  }
  function v(m, y, h) {
    if (y === void 0 && (y = {}), m == null || typeof m != "string" && m.type !== "Program")
      throw new i.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + m);
    y = s.extend({}, y), "data" in y || (y.data = !0), y.compat && (y.useDepths = !0);
    var x = void 0;
    function C() {
      var w = h.parse(m, y), k = new h.Compiler().compile(w, y), E = new h.JavaScriptCompiler().compile(k, y, void 0, !0);
      return h.template(E);
    }
    function T(w, k) {
      return x || (x = C()), x.call(this, w, k);
    }
    return T._setup = function(w) {
      return x || (x = C()), x._setup(w);
    }, T._child = function(w, k, E, N) {
      return x || (x = C()), x._child(w, k, E, N);
    }, T;
  }
  function g(m, y) {
    if (m === y)
      return !0;
    if (s.isArray(m) && s.isArray(y) && m.length === y.length) {
      for (var h = 0; h < m.length; h++)
        if (!g(m[h], y[h]))
          return !1;
      return !0;
    }
  }
  function _(m) {
    if (!m.path.parts) {
      var y = m.path;
      m.path = {
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
var Jl = { exports: {} }, Ql = { exports: {} }, Fs = {}, od = {}, Kl = {}, Wl = {}, fy;
function EE() {
  if (fy) return Wl;
  fy = 1;
  var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return Wl.encode = function(r) {
    if (0 <= r && r < t.length)
      return t[r];
    throw new TypeError("Must be between 0 and 63: " + r);
  }, Wl.decode = function(r) {
    var i = 65, s = 90, l = 97, u = 122, f = 48, p = 57, d = 43, v = 47, g = 26, _ = 52;
    return i <= r && r <= s ? r - i : l <= r && r <= u ? r - l + g : f <= r && r <= p ? r - f + _ : r == d ? 62 : r == v ? 63 : -1;
  }, Wl;
}
var dy;
function F0() {
  if (dy) return Kl;
  dy = 1;
  var t = EE(), r = 5, i = 1 << r, s = i - 1, l = i;
  function u(p) {
    return p < 0 ? (-p << 1) + 1 : (p << 1) + 0;
  }
  function f(p) {
    var d = (p & 1) === 1, v = p >> 1;
    return d ? -v : v;
  }
  return Kl.encode = function(d) {
    var v = "", g, _ = u(d);
    do
      g = _ & s, _ >>>= r, _ > 0 && (g |= l), v += t.encode(g);
    while (_ > 0);
    return v;
  }, Kl.decode = function(d, v, g) {
    var _ = d.length, m = 0, y = 0, h, x;
    do {
      if (v >= _)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (x = t.decode(d.charCodeAt(v++)), x === -1)
        throw new Error("Invalid base64 digit: " + d.charAt(v - 1));
      h = !!(x & l), x &= s, m = m + (x << y), y += r;
    } while (h);
    g.value = f(m), g.rest = v;
  }, Kl;
}
var ld = {}, hy;
function lo() {
  return hy || (hy = 1, (function(t) {
    function r(E, N, M) {
      if (N in E)
        return E[N];
      if (arguments.length === 3)
        return M;
      throw new Error('"' + N + '" is a required argument.');
    }
    t.getArg = r;
    var i = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, s = /^data:.+\,.+$/;
    function l(E) {
      var N = E.match(i);
      return N ? {
        scheme: N[1],
        auth: N[2],
        host: N[3],
        port: N[4],
        path: N[5]
      } : null;
    }
    t.urlParse = l;
    function u(E) {
      var N = "";
      return E.scheme && (N += E.scheme + ":"), N += "//", E.auth && (N += E.auth + "@"), E.host && (N += E.host), E.port && (N += ":" + E.port), E.path && (N += E.path), N;
    }
    t.urlGenerate = u;
    function f(E) {
      var N = E, M = l(E);
      if (M) {
        if (!M.path)
          return E;
        N = M.path;
      }
      for (var j = t.isAbsolute(N), U = N.split(/\/+/), G, P = 0, Y = U.length - 1; Y >= 0; Y--)
        G = U[Y], G === "." ? U.splice(Y, 1) : G === ".." ? P++ : P > 0 && (G === "" ? (U.splice(Y + 1, P), P = 0) : (U.splice(Y, 2), P--));
      return N = U.join("/"), N === "" && (N = j ? "/" : "."), M ? (M.path = N, u(M)) : N;
    }
    t.normalize = f;
    function p(E, N) {
      E === "" && (E = "."), N === "" && (N = ".");
      var M = l(N), j = l(E);
      if (j && (E = j.path || "/"), M && !M.scheme)
        return j && (M.scheme = j.scheme), u(M);
      if (M || N.match(s))
        return N;
      if (j && !j.host && !j.path)
        return j.host = N, u(j);
      var U = N.charAt(0) === "/" ? N : f(E.replace(/\/+$/, "") + "/" + N);
      return j ? (j.path = U, u(j)) : U;
    }
    t.join = p, t.isAbsolute = function(E) {
      return E.charAt(0) === "/" || i.test(E);
    };
    function d(E, N) {
      E === "" && (E = "."), E = E.replace(/\/$/, "");
      for (var M = 0; N.indexOf(E + "/") !== 0; ) {
        var j = E.lastIndexOf("/");
        if (j < 0 || (E = E.slice(0, j), E.match(/^([^\/]+:\/)?\/*$/)))
          return N;
        ++M;
      }
      return Array(M + 1).join("../") + N.substr(E.length + 1);
    }
    t.relative = d;
    var v = (function() {
      var E = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in E);
    })();
    function g(E) {
      return E;
    }
    function _(E) {
      return y(E) ? "$" + E : E;
    }
    t.toSetString = v ? g : _;
    function m(E) {
      return y(E) ? E.slice(1) : E;
    }
    t.fromSetString = v ? g : m;
    function y(E) {
      if (!E)
        return !1;
      var N = E.length;
      if (N < 9 || E.charCodeAt(N - 1) !== 95 || E.charCodeAt(N - 2) !== 95 || E.charCodeAt(N - 3) !== 111 || E.charCodeAt(N - 4) !== 116 || E.charCodeAt(N - 5) !== 111 || E.charCodeAt(N - 6) !== 114 || E.charCodeAt(N - 7) !== 112 || E.charCodeAt(N - 8) !== 95 || E.charCodeAt(N - 9) !== 95)
        return !1;
      for (var M = N - 10; M >= 0; M--)
        if (E.charCodeAt(M) !== 36)
          return !1;
      return !0;
    }
    function h(E, N, M) {
      var j = C(E.source, N.source);
      return j !== 0 || (j = E.originalLine - N.originalLine, j !== 0) || (j = E.originalColumn - N.originalColumn, j !== 0 || M) || (j = E.generatedColumn - N.generatedColumn, j !== 0) || (j = E.generatedLine - N.generatedLine, j !== 0) ? j : C(E.name, N.name);
    }
    t.compareByOriginalPositions = h;
    function x(E, N, M) {
      var j = E.generatedLine - N.generatedLine;
      return j !== 0 || (j = E.generatedColumn - N.generatedColumn, j !== 0 || M) || (j = C(E.source, N.source), j !== 0) || (j = E.originalLine - N.originalLine, j !== 0) || (j = E.originalColumn - N.originalColumn, j !== 0) ? j : C(E.name, N.name);
    }
    t.compareByGeneratedPositionsDeflated = x;
    function C(E, N) {
      return E === N ? 0 : E === null ? 1 : N === null ? -1 : E > N ? 1 : -1;
    }
    function T(E, N) {
      var M = E.generatedLine - N.generatedLine;
      return M !== 0 || (M = E.generatedColumn - N.generatedColumn, M !== 0) || (M = C(E.source, N.source), M !== 0) || (M = E.originalLine - N.originalLine, M !== 0) || (M = E.originalColumn - N.originalColumn, M !== 0) ? M : C(E.name, N.name);
    }
    t.compareByGeneratedPositionsInflated = T;
    function w(E) {
      return JSON.parse(E.replace(/^\)]}'[^\n]*\n/, ""));
    }
    t.parseSourceMapInput = w;
    function k(E, N, M) {
      if (N = N || "", E && (E[E.length - 1] !== "/" && N[0] !== "/" && (E += "/"), N = E + N), M) {
        var j = l(M);
        if (!j)
          throw new Error("sourceMapURL could not be parsed");
        if (j.path) {
          var U = j.path.lastIndexOf("/");
          U >= 0 && (j.path = j.path.substring(0, U + 1));
        }
        N = p(u(j), N);
      }
      return f(N);
    }
    t.computeSourceURL = k;
  })(ld)), ld;
}
var ud = {}, py;
function Z0() {
  if (py) return ud;
  py = 1;
  var t = lo(), r = Object.prototype.hasOwnProperty, i = typeof Map < "u";
  function s() {
    this._array = [], this._set = i ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  return s.fromArray = function(u, f) {
    for (var p = new s(), d = 0, v = u.length; d < v; d++)
      p.add(u[d], f);
    return p;
  }, s.prototype.size = function() {
    return i ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  }, s.prototype.add = function(u, f) {
    var p = i ? u : t.toSetString(u), d = i ? this.has(u) : r.call(this._set, p), v = this._array.length;
    (!d || f) && this._array.push(u), d || (i ? this._set.set(u, v) : this._set[p] = v);
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
  }, ud.ArraySet = s, ud;
}
var cd = {}, my;
function wE() {
  if (my) return cd;
  my = 1;
  var t = lo();
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
  }, cd.MappingList = i, cd;
}
var gy;
function G0() {
  if (gy) return od;
  gy = 1;
  var t = F0(), r = lo(), i = Z0().ArraySet, s = wE().MappingList;
  function l(u) {
    u || (u = {}), this._file = r.getArg(u, "file", null), this._sourceRoot = r.getArg(u, "sourceRoot", null), this._skipValidation = r.getArg(u, "skipValidation", !1), this._sources = new i(), this._names = new i(), this._mappings = new s(), this._sourcesContents = null;
  }
  return l.prototype._version = 3, l.fromSourceMap = function(f) {
    var p = f.sourceRoot, d = new l({
      file: f.file,
      sourceRoot: p
    });
    return f.eachMapping(function(v) {
      var g = {
        generated: {
          line: v.generatedLine,
          column: v.generatedColumn
        }
      };
      v.source != null && (g.source = v.source, p != null && (g.source = r.relative(p, g.source)), g.original = {
        line: v.originalLine,
        column: v.originalColumn
      }, v.name != null && (g.name = v.name)), d.addMapping(g);
    }), f.sources.forEach(function(v) {
      var g = v;
      p !== null && (g = r.relative(p, v)), d._sources.has(g) || d._sources.add(g);
      var _ = f.sourceContentFor(v);
      _ != null && d.setSourceContent(v, _);
    }), d;
  }, l.prototype.addMapping = function(f) {
    var p = r.getArg(f, "generated"), d = r.getArg(f, "original", null), v = r.getArg(f, "source", null), g = r.getArg(f, "name", null);
    this._skipValidation || this._validateMapping(p, d, v, g), v != null && (v = String(v), this._sources.has(v) || this._sources.add(v)), g != null && (g = String(g), this._names.has(g) || this._names.add(g)), this._mappings.add({
      generatedLine: p.line,
      generatedColumn: p.column,
      originalLine: d != null && d.line,
      originalColumn: d != null && d.column,
      source: v,
      name: g
    });
  }, l.prototype.setSourceContent = function(f, p) {
    var d = f;
    this._sourceRoot != null && (d = r.relative(this._sourceRoot, d)), p != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[r.toSetString(d)] = p) : this._sourcesContents && (delete this._sourcesContents[r.toSetString(d)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  }, l.prototype.applySourceMap = function(f, p, d) {
    var v = p;
    if (p == null) {
      if (f.file == null)
        throw new Error(
          `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
        );
      v = f.file;
    }
    var g = this._sourceRoot;
    g != null && (v = r.relative(g, v));
    var _ = new i(), m = new i();
    this._mappings.unsortedForEach(function(y) {
      if (y.source === v && y.originalLine != null) {
        var h = f.originalPositionFor({
          line: y.originalLine,
          column: y.originalColumn
        });
        h.source != null && (y.source = h.source, d != null && (y.source = r.join(d, y.source)), g != null && (y.source = r.relative(g, y.source)), y.originalLine = h.line, y.originalColumn = h.column, h.name != null && (y.name = h.name));
      }
      var x = y.source;
      x != null && !_.has(x) && _.add(x);
      var C = y.name;
      C != null && !m.has(C) && m.add(C);
    }, this), this._sources = _, this._names = m, f.sources.forEach(function(y) {
      var h = f.sourceContentFor(y);
      h != null && (d != null && (y = r.join(d, y)), g != null && (y = r.relative(g, y)), this.setSourceContent(y, h));
    }, this);
  }, l.prototype._validateMapping = function(f, p, d, v) {
    if (p && typeof p.line != "number" && typeof p.column != "number")
      throw new Error(
        "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
      );
    if (!(f && "line" in f && "column" in f && f.line > 0 && f.column >= 0 && !p && !d && !v)) {
      if (f && "line" in f && "column" in f && p && "line" in p && "column" in p && f.line > 0 && f.column >= 0 && p.line > 0 && p.column >= 0 && d)
        return;
      throw new Error("Invalid mapping: " + JSON.stringify({
        generated: f,
        source: d,
        original: p,
        name: v
      }));
    }
  }, l.prototype._serializeMappings = function() {
    for (var f = 0, p = 1, d = 0, v = 0, g = 0, _ = 0, m = "", y, h, x, C, T = this._mappings.toArray(), w = 0, k = T.length; w < k; w++) {
      if (h = T[w], y = "", h.generatedLine !== p)
        for (f = 0; h.generatedLine !== p; )
          y += ";", p++;
      else if (w > 0) {
        if (!r.compareByGeneratedPositionsInflated(h, T[w - 1]))
          continue;
        y += ",";
      }
      y += t.encode(h.generatedColumn - f), f = h.generatedColumn, h.source != null && (C = this._sources.indexOf(h.source), y += t.encode(C - _), _ = C, y += t.encode(h.originalLine - 1 - v), v = h.originalLine - 1, y += t.encode(h.originalColumn - d), d = h.originalColumn, h.name != null && (x = this._names.indexOf(h.name), y += t.encode(x - g), g = x)), m += y;
    }
    return m;
  }, l.prototype._generateSourcesContent = function(f, p) {
    return f.map(function(d) {
      if (!this._sourcesContents)
        return null;
      p != null && (d = r.relative(p, d));
      var v = r.toSetString(d);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, v) ? this._sourcesContents[v] : null;
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
  }, od.SourceMapGenerator = l, od;
}
var Zs = {}, fd = {}, vy;
function CE() {
  return vy || (vy = 1, (function(t) {
    t.GREATEST_LOWER_BOUND = 1, t.LEAST_UPPER_BOUND = 2;
    function r(i, s, l, u, f, p) {
      var d = Math.floor((s - i) / 2) + i, v = f(l, u[d], !0);
      return v === 0 ? d : v > 0 ? s - d > 1 ? r(d, s, l, u, f, p) : p == t.LEAST_UPPER_BOUND ? s < u.length ? s : -1 : d : d - i > 1 ? r(i, d, l, u, f, p) : p == t.LEAST_UPPER_BOUND ? d : i < 0 ? -1 : i;
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
  })(fd)), fd;
}
var dd = {}, yy;
function AE() {
  if (yy) return dd;
  yy = 1;
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
      for (var v = s[f], g = u; g < f; g++)
        l(s[g], v) <= 0 && (d += 1, t(s, d, g));
      t(s, d + 1, g);
      var _ = d + 1;
      i(s, l, u, _ - 1), i(s, l, _ + 1, f);
    }
  }
  return dd.quickSort = function(s, l) {
    i(s, l, 0, s.length - 1);
  }, dd;
}
var by;
function NE() {
  if (by) return Zs;
  by = 1;
  var t = lo(), r = CE(), i = Z0().ArraySet, s = F0(), l = AE().quickSort;
  function u(v, g) {
    var _ = v;
    return typeof v == "string" && (_ = t.parseSourceMapInput(v)), _.sections != null ? new d(_, g) : new f(_, g);
  }
  u.fromSourceMap = function(v, g) {
    return f.fromSourceMap(v, g);
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
  }), u.prototype._charIsMappingSeparator = function(g, _) {
    var m = g.charAt(_);
    return m === ";" || m === ",";
  }, u.prototype._parseMappings = function(g, _) {
    throw new Error("Subclasses must implement _parseMappings");
  }, u.GENERATED_ORDER = 1, u.ORIGINAL_ORDER = 2, u.GREATEST_LOWER_BOUND = 1, u.LEAST_UPPER_BOUND = 2, u.prototype.eachMapping = function(g, _, m) {
    var y = _ || null, h = m || u.GENERATED_ORDER, x;
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
    }, this).forEach(g, y);
  }, u.prototype.allGeneratedPositionsFor = function(g) {
    var _ = t.getArg(g, "line"), m = {
      source: t.getArg(g, "source"),
      originalLine: _,
      originalColumn: t.getArg(g, "column", 0)
    };
    if (m.source = this._findSourceIndex(m.source), m.source < 0)
      return [];
    var y = [], h = this._findMapping(
      m,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      t.compareByOriginalPositions,
      r.LEAST_UPPER_BOUND
    );
    if (h >= 0) {
      var x = this._originalMappings[h];
      if (g.column === void 0)
        for (var C = x.originalLine; x && x.originalLine === C; )
          y.push({
            line: t.getArg(x, "generatedLine", null),
            column: t.getArg(x, "generatedColumn", null),
            lastColumn: t.getArg(x, "lastGeneratedColumn", null)
          }), x = this._originalMappings[++h];
      else
        for (var T = x.originalColumn; x && x.originalLine === _ && x.originalColumn == T; )
          y.push({
            line: t.getArg(x, "generatedLine", null),
            column: t.getArg(x, "generatedColumn", null),
            lastColumn: t.getArg(x, "lastGeneratedColumn", null)
          }), x = this._originalMappings[++h];
    }
    return y;
  }, Zs.SourceMapConsumer = u;
  function f(v, g) {
    var _ = v;
    typeof v == "string" && (_ = t.parseSourceMapInput(v));
    var m = t.getArg(_, "version"), y = t.getArg(_, "sources"), h = t.getArg(_, "names", []), x = t.getArg(_, "sourceRoot", null), C = t.getArg(_, "sourcesContent", null), T = t.getArg(_, "mappings"), w = t.getArg(_, "file", null);
    if (m != this._version)
      throw new Error("Unsupported version: " + m);
    x && (x = t.normalize(x)), y = y.map(String).map(t.normalize).map(function(k) {
      return x && t.isAbsolute(x) && t.isAbsolute(k) ? t.relative(x, k) : k;
    }), this._names = i.fromArray(h.map(String), !0), this._sources = i.fromArray(y, !0), this._absoluteSources = this._sources.toArray().map(function(k) {
      return t.computeSourceURL(x, k, g);
    }), this.sourceRoot = x, this.sourcesContent = C, this._mappings = T, this._sourceMapURL = g, this.file = w;
  }
  f.prototype = Object.create(u.prototype), f.prototype.consumer = u, f.prototype._findSourceIndex = function(v) {
    var g = v;
    if (this.sourceRoot != null && (g = t.relative(this.sourceRoot, g)), this._sources.has(g))
      return this._sources.indexOf(g);
    var _;
    for (_ = 0; _ < this._absoluteSources.length; ++_)
      if (this._absoluteSources[_] == v)
        return _;
    return -1;
  }, f.fromSourceMap = function(g, _) {
    var m = Object.create(f.prototype), y = m._names = i.fromArray(g._names.toArray(), !0), h = m._sources = i.fromArray(g._sources.toArray(), !0);
    m.sourceRoot = g._sourceRoot, m.sourcesContent = g._generateSourcesContent(
      m._sources.toArray(),
      m.sourceRoot
    ), m.file = g._file, m._sourceMapURL = _, m._absoluteSources = m._sources.toArray().map(function(M) {
      return t.computeSourceURL(m.sourceRoot, M, _);
    });
    for (var x = g._mappings.toArray().slice(), C = m.__generatedMappings = [], T = m.__originalMappings = [], w = 0, k = x.length; w < k; w++) {
      var E = x[w], N = new p();
      N.generatedLine = E.generatedLine, N.generatedColumn = E.generatedColumn, E.source && (N.source = h.indexOf(E.source), N.originalLine = E.originalLine, N.originalColumn = E.originalColumn, E.name && (N.name = y.indexOf(E.name)), T.push(N)), C.push(N);
    }
    return l(m.__originalMappings, t.compareByOriginalPositions), m;
  }, f.prototype._version = 3, Object.defineProperty(f.prototype, "sources", {
    get: function() {
      return this._absoluteSources.slice();
    }
  });
  function p() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
  }
  f.prototype._parseMappings = function(g, _) {
    for (var m = 1, y = 0, h = 0, x = 0, C = 0, T = 0, w = g.length, k = 0, E = {}, N = {}, M = [], j = [], U, G, P, Y, V; k < w; )
      if (g.charAt(k) === ";")
        m++, k++, y = 0;
      else if (g.charAt(k) === ",")
        k++;
      else {
        for (U = new p(), U.generatedLine = m, Y = k; Y < w && !this._charIsMappingSeparator(g, Y); Y++)
          ;
        if (G = g.slice(k, Y), P = E[G], P)
          k += G.length;
        else {
          for (P = []; k < Y; )
            s.decode(g, k, N), V = N.value, k = N.rest, P.push(V);
          if (P.length === 2)
            throw new Error("Found a source, but no line and column");
          if (P.length === 3)
            throw new Error("Found a source and line, but no column");
          E[G] = P;
        }
        U.generatedColumn = y + P[0], y = U.generatedColumn, P.length > 1 && (U.source = C + P[1], C += P[1], U.originalLine = h + P[2], h = U.originalLine, U.originalLine += 1, U.originalColumn = x + P[3], x = U.originalColumn, P.length > 4 && (U.name = T + P[4], T += P[4])), j.push(U), typeof U.originalLine == "number" && M.push(U);
      }
    l(j, t.compareByGeneratedPositionsDeflated), this.__generatedMappings = j, l(M, t.compareByOriginalPositions), this.__originalMappings = M;
  }, f.prototype._findMapping = function(g, _, m, y, h, x) {
    if (g[m] <= 0)
      throw new TypeError("Line must be greater than or equal to 1, got " + g[m]);
    if (g[y] < 0)
      throw new TypeError("Column must be greater than or equal to 0, got " + g[y]);
    return r.search(g, _, h, x);
  }, f.prototype.computeColumnSpans = function() {
    for (var g = 0; g < this._generatedMappings.length; ++g) {
      var _ = this._generatedMappings[g];
      if (g + 1 < this._generatedMappings.length) {
        var m = this._generatedMappings[g + 1];
        if (_.generatedLine === m.generatedLine) {
          _.lastGeneratedColumn = m.generatedColumn - 1;
          continue;
        }
      }
      _.lastGeneratedColumn = 1 / 0;
    }
  }, f.prototype.originalPositionFor = function(g) {
    var _ = {
      generatedLine: t.getArg(g, "line"),
      generatedColumn: t.getArg(g, "column")
    }, m = this._findMapping(
      _,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      t.compareByGeneratedPositionsDeflated,
      t.getArg(g, "bias", u.GREATEST_LOWER_BOUND)
    );
    if (m >= 0) {
      var y = this._generatedMappings[m];
      if (y.generatedLine === _.generatedLine) {
        var h = t.getArg(y, "source", null);
        h !== null && (h = this._sources.at(h), h = t.computeSourceURL(this.sourceRoot, h, this._sourceMapURL));
        var x = t.getArg(y, "name", null);
        return x !== null && (x = this._names.at(x)), {
          source: h,
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
    return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(g) {
      return g == null;
    }) : !1;
  }, f.prototype.sourceContentFor = function(g, _) {
    if (!this.sourcesContent)
      return null;
    var m = this._findSourceIndex(g);
    if (m >= 0)
      return this.sourcesContent[m];
    var y = g;
    this.sourceRoot != null && (y = t.relative(this.sourceRoot, y));
    var h;
    if (this.sourceRoot != null && (h = t.urlParse(this.sourceRoot))) {
      var x = y.replace(/^file:\/\//, "");
      if (h.scheme == "file" && this._sources.has(x))
        return this.sourcesContent[this._sources.indexOf(x)];
      if ((!h.path || h.path == "/") && this._sources.has("/" + y))
        return this.sourcesContent[this._sources.indexOf("/" + y)];
    }
    if (_)
      return null;
    throw new Error('"' + y + '" is not in the SourceMap.');
  }, f.prototype.generatedPositionFor = function(g) {
    var _ = t.getArg(g, "source");
    if (_ = this._findSourceIndex(_), _ < 0)
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    var m = {
      source: _,
      originalLine: t.getArg(g, "line"),
      originalColumn: t.getArg(g, "column")
    }, y = this._findMapping(
      m,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      t.compareByOriginalPositions,
      t.getArg(g, "bias", u.GREATEST_LOWER_BOUND)
    );
    if (y >= 0) {
      var h = this._originalMappings[y];
      if (h.source === m.source)
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
  function d(v, g) {
    var _ = v;
    typeof v == "string" && (_ = t.parseSourceMapInput(v));
    var m = t.getArg(_, "version"), y = t.getArg(_, "sections");
    if (m != this._version)
      throw new Error("Unsupported version: " + m);
    this._sources = new i(), this._names = new i();
    var h = {
      line: -1,
      column: 0
    };
    this._sections = y.map(function(x) {
      if (x.url)
        throw new Error("Support for url field in sections not implemented.");
      var C = t.getArg(x, "offset"), T = t.getArg(C, "line"), w = t.getArg(C, "column");
      if (T < h.line || T === h.line && w < h.column)
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return h = C, {
        generatedOffset: {
          // The offset fields are 0-based, but we use 1-based indices when
          // encoding/decoding from VLQ.
          generatedLine: T + 1,
          generatedColumn: w + 1
        },
        consumer: new u(t.getArg(x, "map"), g)
      };
    });
  }
  return d.prototype = Object.create(u.prototype), d.prototype.constructor = u, d.prototype._version = 3, Object.defineProperty(d.prototype, "sources", {
    get: function() {
      for (var v = [], g = 0; g < this._sections.length; g++)
        for (var _ = 0; _ < this._sections[g].consumer.sources.length; _++)
          v.push(this._sections[g].consumer.sources[_]);
      return v;
    }
  }), d.prototype.originalPositionFor = function(g) {
    var _ = {
      generatedLine: t.getArg(g, "line"),
      generatedColumn: t.getArg(g, "column")
    }, m = r.search(
      _,
      this._sections,
      function(h, x) {
        var C = h.generatedLine - x.generatedOffset.generatedLine;
        return C || h.generatedColumn - x.generatedOffset.generatedColumn;
      }
    ), y = this._sections[m];
    return y ? y.consumer.originalPositionFor({
      line: _.generatedLine - (y.generatedOffset.generatedLine - 1),
      column: _.generatedColumn - (y.generatedOffset.generatedLine === _.generatedLine ? y.generatedOffset.generatedColumn - 1 : 0),
      bias: g.bias
    }) : {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, d.prototype.hasContentsOfAllSources = function() {
    return this._sections.every(function(g) {
      return g.consumer.hasContentsOfAllSources();
    });
  }, d.prototype.sourceContentFor = function(g, _) {
    for (var m = 0; m < this._sections.length; m++) {
      var y = this._sections[m], h = y.consumer.sourceContentFor(g, !0);
      if (h)
        return h;
    }
    if (_)
      return null;
    throw new Error('"' + g + '" is not in the SourceMap.');
  }, d.prototype.generatedPositionFor = function(g) {
    for (var _ = 0; _ < this._sections.length; _++) {
      var m = this._sections[_];
      if (m.consumer._findSourceIndex(t.getArg(g, "source")) !== -1) {
        var y = m.consumer.generatedPositionFor(g);
        if (y) {
          var h = {
            line: y.line + (m.generatedOffset.generatedLine - 1),
            column: y.column + (m.generatedOffset.generatedLine === y.line ? m.generatedOffset.generatedColumn - 1 : 0)
          };
          return h;
        }
      }
    }
    return {
      line: null,
      column: null
    };
  }, d.prototype._parseMappings = function(g, _) {
    this.__generatedMappings = [], this.__originalMappings = [];
    for (var m = 0; m < this._sections.length; m++)
      for (var y = this._sections[m], h = y.consumer._generatedMappings, x = 0; x < h.length; x++) {
        var C = h[x], T = y.consumer._sources.at(C.source);
        T = t.computeSourceURL(y.consumer.sourceRoot, T, this._sourceMapURL), this._sources.add(T), T = this._sources.indexOf(T);
        var w = null;
        C.name && (w = y.consumer._names.at(C.name), this._names.add(w), w = this._names.indexOf(w));
        var k = {
          source: T,
          generatedLine: C.generatedLine + (y.generatedOffset.generatedLine - 1),
          generatedColumn: C.generatedColumn + (y.generatedOffset.generatedLine === C.generatedLine ? y.generatedOffset.generatedColumn - 1 : 0),
          originalLine: C.originalLine,
          originalColumn: C.originalColumn,
          name: w
        };
        this.__generatedMappings.push(k), typeof k.originalLine == "number" && this.__originalMappings.push(k);
      }
    l(this.__generatedMappings, t.compareByGeneratedPositionsDeflated), l(this.__originalMappings, t.compareByOriginalPositions);
  }, Zs.IndexedSourceMapConsumer = d, Zs;
}
var hd = {}, _y;
function TE() {
  if (_y) return hd;
  _y = 1;
  var t = G0().SourceMapGenerator, r = lo(), i = /(\r?\n)/, s = 10, l = "$$$isSourceNode$$$";
  function u(f, p, d, v, g) {
    this.children = [], this.sourceContents = {}, this.line = f ?? null, this.column = p ?? null, this.source = d ?? null, this.name = g ?? null, this[l] = !0, v != null && this.add(v);
  }
  return u.fromStringWithSourceMap = function(p, d, v) {
    var g = new u(), _ = p.split(i), m = 0, y = function() {
      var w = E(), k = E() || "";
      return w + k;
      function E() {
        return m < _.length ? _[m++] : void 0;
      }
    }, h = 1, x = 0, C = null;
    return d.eachMapping(function(w) {
      if (C !== null)
        if (h < w.generatedLine)
          T(C, y()), h++, x = 0;
        else {
          var k = _[m] || "", E = k.substr(0, w.generatedColumn - x);
          _[m] = k.substr(w.generatedColumn - x), x = w.generatedColumn, T(C, E), C = w;
          return;
        }
      for (; h < w.generatedLine; )
        g.add(y()), h++;
      if (x < w.generatedColumn) {
        var k = _[m] || "";
        g.add(k.substr(0, w.generatedColumn)), _[m] = k.substr(w.generatedColumn), x = w.generatedColumn;
      }
      C = w;
    }, this), m < _.length && (C && T(C, y()), g.add(_.splice(m).join(""))), d.sources.forEach(function(w) {
      var k = d.sourceContentFor(w);
      k != null && (v != null && (w = r.join(v, w)), g.setSourceContent(w, k));
    }), g;
    function T(w, k) {
      if (w === null || w.source === void 0)
        g.add(k);
      else {
        var E = v ? r.join(v, w.source) : w.source;
        g.add(new u(
          w.originalLine,
          w.originalColumn,
          E,
          k,
          w.name
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
    for (var d, v = 0, g = this.children.length; v < g; v++)
      d = this.children[v], d[l] ? d.walk(p) : d !== "" && p(d, {
        source: this.source,
        line: this.line,
        column: this.column,
        name: this.name
      });
  }, u.prototype.join = function(p) {
    var d, v, g = this.children.length;
    if (g > 0) {
      for (d = [], v = 0; v < g - 1; v++)
        d.push(this.children[v]), d.push(p);
      d.push(this.children[v]), this.children = d;
    }
    return this;
  }, u.prototype.replaceRight = function(p, d) {
    var v = this.children[this.children.length - 1];
    return v[l] ? v.replaceRight(p, d) : typeof v == "string" ? this.children[this.children.length - 1] = v.replace(p, d) : this.children.push("".replace(p, d)), this;
  }, u.prototype.setSourceContent = function(p, d) {
    this.sourceContents[r.toSetString(p)] = d;
  }, u.prototype.walkSourceContents = function(p) {
    for (var d = 0, v = this.children.length; d < v; d++)
      this.children[d][l] && this.children[d].walkSourceContents(p);
    for (var g = Object.keys(this.sourceContents), d = 0, v = g.length; d < v; d++)
      p(r.fromSetString(g[d]), this.sourceContents[g[d]]);
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
    }, v = new t(p), g = !1, _ = null, m = null, y = null, h = null;
    return this.walk(function(x, C) {
      d.code += x, C.source !== null && C.line !== null && C.column !== null ? ((_ !== C.source || m !== C.line || y !== C.column || h !== C.name) && v.addMapping({
        source: C.source,
        original: {
          line: C.line,
          column: C.column
        },
        generated: {
          line: d.line,
          column: d.column
        },
        name: C.name
      }), _ = C.source, m = C.line, y = C.column, h = C.name, g = !0) : g && (v.addMapping({
        generated: {
          line: d.line,
          column: d.column
        }
      }), _ = null, g = !1);
      for (var T = 0, w = x.length; T < w; T++)
        x.charCodeAt(T) === s ? (d.line++, d.column = 0, T + 1 === w ? (_ = null, g = !1) : g && v.addMapping({
          source: C.source,
          original: {
            line: C.line,
            column: C.column
          },
          generated: {
            line: d.line,
            column: d.column
          },
          name: C.name
        })) : d.column++;
    }), this.walkSourceContents(function(x, C) {
      v.setSourceContent(x, C);
    }), { code: d.code, map: v };
  }, hd.SourceNode = u, hd;
}
var Sy;
function OE() {
  return Sy || (Sy = 1, Fs.SourceMapGenerator = G0().SourceMapGenerator, Fs.SourceMapConsumer = NE().SourceMapConsumer, Fs.SourceNode = TE().SourceNode), Fs;
}
var xy;
function kE() {
  return xy || (xy = 1, (function(t, r) {
    r.__esModule = !0;
    var i = hn(), s = void 0;
    try {
      var l = OE();
      s = l.SourceNode;
    } catch {
    }
    s || (s = function(p, d, v, g) {
      this.src = "", g && this.add(g);
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
    function u(p, d, v) {
      if (i.isArray(p)) {
        for (var g = [], _ = 0, m = p.length; _ < m; _++)
          g.push(d.wrap(p[_], v));
        return g;
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
      prepend: function(d, v) {
        this.source.unshift(this.wrap(d, v));
      },
      push: function(d, v) {
        this.source.push(this.wrap(d, v));
      },
      merge: function() {
        var d = this.empty();
        return this.each(function(v) {
          d.add(["  ", v, `
`]);
        }), d;
      },
      each: function(d) {
        for (var v = 0, g = this.source.length; v < g; v++)
          d(this.source[v]);
      },
      empty: function() {
        var d = this.currentLocation || { start: {} };
        return new s(d.start.line, d.start.column, this.srcFile);
      },
      wrap: function(d) {
        var v = arguments.length <= 1 || arguments[1] === void 0 ? this.currentLocation || { start: {} } : arguments[1];
        return d instanceof s ? d : (d = u(d, this, v), new s(v.start.line, v.start.column, this.srcFile, d));
      },
      functionCall: function(d, v, g) {
        return g = this.generateList(g), this.wrap([d, v ? "." + v + "(" : "(", g, ")"]);
      },
      quotedString: function(d) {
        return '"' + (d + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
      },
      objectLiteral: function(d) {
        var v = this, g = [];
        Object.keys(d).forEach(function(m) {
          var y = u(d[m], v);
          y !== "undefined" && g.push([v.quotedString(m), ":", y]);
        });
        var _ = this.generateList(g);
        return _.prepend("{"), _.add("}"), _;
      },
      generateList: function(d) {
        for (var v = this.empty(), g = 0, _ = d.length; g < _; g++)
          g && v.add(","), v.add(u(d[g], this));
        return v;
      },
      generateArray: function(d) {
        var v = this.generateList(d);
        return v.prepend("["), v.add("]"), v;
      }
    }, r.default = f, t.exports = r.default;
  })(Ql, Ql.exports)), Ql.exports;
}
var Ey;
function ME() {
  return Ey || (Ey = 1, (function(t, r) {
    r.__esModule = !0;
    function i(m) {
      return m && m.__esModule ? m : { default: m };
    }
    var s = nh(), l = Qn(), u = i(l), f = hn(), p = kE(), d = i(p);
    function v(m) {
      this.value = m;
    }
    function g() {
    }
    g.prototype = {
      // PUBLIC API: You can override these methods in a subclass to provide
      // alternative compiled forms for name lookup and buffering semantics
      nameLookup: function(y, h) {
        return this.internalNameLookup(y, h);
      },
      depthedLookup: function(y) {
        return [this.aliasable("container.lookup"), "(depths, ", JSON.stringify(y), ")"];
      },
      compilerInfo: function() {
        var y = s.COMPILER_REVISION, h = s.REVISION_CHANGES[y];
        return [y, h];
      },
      appendToBuffer: function(y, h, x) {
        return f.isArray(y) || (y = [y]), y = this.source.wrap(y, h), this.environment.isSimple ? ["return ", y, ";"] : x ? ["buffer += ", y, ";"] : (y.appendToBuffer = !0, y);
      },
      initializeBuffer: function() {
        return this.quotedString("");
      },
      // END PUBLIC API
      internalNameLookup: function(y, h) {
        return this.lookupPropertyFunctionIsUsed = !0, ["lookupProperty(", y, ",", JSON.stringify(h), ")"];
      },
      lookupPropertyFunctionIsUsed: !1,
      compile: function(y, h, x, C) {
        this.environment = y, this.options = h, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !C, this.name = this.environment.name, this.isChild = !!x, this.context = x || {
          decorators: [],
          programs: [],
          environments: []
        }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = { list: [] }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(y, h), this.useDepths = this.useDepths || y.useDepths || y.useDecorators || this.options.compat, this.useBlockParams = this.useBlockParams || y.useBlockParams;
        var T = y.opcodes, w = void 0, k = void 0, E = void 0, N = void 0;
        for (E = 0, N = T.length; E < N; E++)
          w = T[E], this.source.currentLocation = w.loc, k = k || w.loc, this[w.opcode].apply(this, w.args);
        if (this.source.currentLocation = k, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length)
          throw new u.default("Compile completed with content left on stack");
        this.decorators.isEmpty() ? this.decorators = void 0 : (this.useDecorators = !0, this.decorators.prepend(["var decorators = container.decorators, ", this.lookupPropertyFunctionVarDeclaration(), `;
`]), this.decorators.push("return fn;"), C ? this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]) : (this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`), this.decorators.push(`}
`), this.decorators = this.decorators.merge()));
        var M = this.createFunctionContext(C);
        if (this.isChild)
          return M;
        var j = {
          compiler: this.compilerInfo(),
          main: M
        };
        this.decorators && (j.main_d = this.decorators, j.useDecorators = !0);
        var U = this.context, G = U.programs, P = U.decorators;
        for (E = 0, N = G.length; E < N; E++)
          G[E] && (j[E] = G[E], P[E] && (j[E + "_d"] = P[E], j.useDecorators = !0));
        return this.environment.usePartial && (j.usePartial = !0), this.options.data && (j.useData = !0), this.useDepths && (j.useDepths = !0), this.useBlockParams && (j.useBlockParams = !0), this.options.compat && (j.compat = !0), C ? j.compilerOptions = this.options : (j.compiler = JSON.stringify(j.compiler), this.source.currentLocation = { start: { line: 1, column: 0 } }, j = this.objectLiteral(j), h.srcName ? (j = j.toStringWithSourceMap({ file: h.destName }), j.map = j.map && j.map.toString()) : j = j.toString()), j;
      },
      preamble: function() {
        this.lastContext = 0, this.source = new d.default(this.options.srcName), this.decorators = new d.default(this.options.srcName);
      },
      createFunctionContext: function(y) {
        var h = this, x = "", C = this.stackVars.concat(this.registers.list);
        C.length > 0 && (x += ", " + C.join(", "));
        var T = 0;
        Object.keys(this.aliases).forEach(function(E) {
          var N = h.aliases[E];
          N.children && N.referenceCount > 1 && (x += ", alias" + ++T + "=" + E, N.children[0] = "alias" + T);
        }), this.lookupPropertyFunctionIsUsed && (x += ", " + this.lookupPropertyFunctionVarDeclaration());
        var w = ["container", "depth0", "helpers", "partials", "data"];
        (this.useBlockParams || this.useDepths) && w.push("blockParams"), this.useDepths && w.push("depths");
        var k = this.mergeSource(x);
        return y ? (w.push(k), Function.apply(this, w)) : this.source.wrap(["function(", w.join(","), `) {
  `, k, "}"]);
      },
      mergeSource: function(y) {
        var h = this.environment.isSimple, x = !this.forceBuffer, C = void 0, T = void 0, w = void 0, k = void 0;
        return this.source.each(function(E) {
          E.appendToBuffer ? (w ? E.prepend("  + ") : w = E, k = E) : (w && (T ? w.prepend("buffer += ") : C = !0, k.add(";"), w = k = void 0), T = !0, h || (x = !1));
        }), x ? w ? (w.prepend("return "), k.add(";")) : T || this.source.push('return "";') : (y += ", buffer = " + (C ? "" : this.initializeBuffer()), w ? (w.prepend("return buffer + "), k.add(";")) : this.source.push("return buffer;")), y && this.source.prepend("var " + y.substring(2) + (C ? "" : `;
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
        var h = this.aliasable("container.hooks.blockHelperMissing"), x = [this.contextName(0)];
        this.setupHelperArgs(y, 0, x);
        var C = this.popStack();
        x.splice(1, 0, C), this.push(this.source.functionCall(h, "call", x));
      },
      // [ambiguousBlockValue]
      //
      // On stack, before: hash, inverse, program, value
      // Compiler value, before: lastHelper=value of last found helper, if any
      // On stack, after, if no lastHelper: same as [blockValue]
      // On stack, after, if lastHelper: value
      ambiguousBlockValue: function() {
        var y = this.aliasable("container.hooks.blockHelperMissing"), h = [this.contextName(0)];
        this.setupHelperArgs("", 0, h, !0), this.flushInline();
        var x = this.topStack();
        h.splice(1, 0, x), this.pushSource(["if (!", this.lastHelper, ") { ", x, " = ", this.source.functionCall(y, "call", h), "}"]);
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
          this.replaceStack(function(h) {
            return [" != null ? ", h, ' : ""'];
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
      lookupOnContext: function(y, h, x, C) {
        var T = 0;
        !C && this.options.compat && !this.lastContext ? this.push(this.depthedLookup(y[T++])) : this.pushContext(), this.resolvePath("context", y, T, h, x);
      },
      // [lookupBlockParam]
      //
      // On stack, before: ...
      // On stack, after: blockParam[name], ...
      //
      // Looks up the value of `parts` on the given block param and pushes
      // it onto the stack.
      lookupBlockParam: function(y, h) {
        this.useBlockParams = !0, this.push(["blockParams[", y[0], "][", y[1], "]"]), this.resolvePath("context", h, 1);
      },
      // [lookupData]
      //
      // On stack, before: ...
      // On stack, after: data, ...
      //
      // Push the data lookup operator
      lookupData: function(y, h, x) {
        y ? this.pushStackLiteral("container.data(data, " + y + ")") : this.pushStackLiteral("data"), this.resolvePath("data", h, 0, !0, x);
      },
      resolvePath: function(y, h, x, C, T) {
        var w = this;
        if (this.options.strict || this.options.assumeObjects) {
          this.push(_(this.options.strict && T, this, h, x, y));
          return;
        }
        for (var k = h.length; x < k; x++)
          this.replaceStack(function(E) {
            var N = w.nameLookup(E, h[x], y);
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
      pushStringParam: function(y, h) {
        this.pushContext(), this.pushString(h), h !== "SubExpression" && (typeof y == "string" ? this.pushString(y) : this.pushStackLiteral(y));
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
      registerDecorator: function(y, h) {
        var x = this.nameLookup("decorators", h, "decorator"), C = this.setupHelperArgs(h, y);
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
      invokeHelper: function(y, h, x) {
        var C = this.popStack(), T = this.setupHelper(y, h), w = [];
        x && w.push(T.name), w.push(C), this.options.strict || w.push(this.aliasable("container.hooks.helperMissing"));
        var k = ["(", this.itemsSeparatedBy(w, "||"), ")"], E = this.source.functionCall(k, "call", T.callParams);
        this.push(E);
      },
      itemsSeparatedBy: function(y, h) {
        var x = [];
        x.push(y[0]);
        for (var C = 1; C < y.length; C++)
          x.push(h, y[C]);
        return x;
      },
      // [invokeKnownHelper]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of helper invocation
      //
      // This operation is used when the helper is known to exist,
      // so a `helperMissing` fallback is not required.
      invokeKnownHelper: function(y, h) {
        var x = this.setupHelper(y, h);
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
      invokeAmbiguous: function(y, h) {
        this.useRegister("helper");
        var x = this.popStack();
        this.emptyHash();
        var C = this.setupHelper(0, y, h), T = this.lastHelper = this.nameLookup("helpers", y, "helper"), w = ["(", "(helper = ", T, " || ", x, ")"];
        this.options.strict || (w[0] = "(helper = ", w.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"))), this.push(["(", w, C.paramsInit ? ["),(", C.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", C.callParams), " : helper))"]);
      },
      // [invokePartial]
      //
      // On stack, before: context, ...
      // On stack after: result of partial invocation
      //
      // This operation pops off a context, invokes a partial with that context,
      // and pushes the result of the invocation back.
      invokePartial: function(y, h, x) {
        var C = [], T = this.setupParams(h, 1, C);
        y && (h = this.popStack(), delete T.name), x && (T.indent = JSON.stringify(x)), T.helpers = "helpers", T.partials = "partials", T.decorators = "container.decorators", y ? C.unshift(h) : C.unshift(this.nameLookup("partials", h, "partial")), this.options.compat && (T.depths = "depths"), T = this.objectLiteral(T), C.push(T), this.push(this.source.functionCall("container.invokePartial", "", C));
      },
      // [assignToHash]
      //
      // On stack, before: value, ..., hash, ...
      // On stack, after: ..., hash, ...
      //
      // Pops a value off the stack and assigns it to the current hash
      assignToHash: function(y) {
        var h = this.popStack(), x = void 0, C = void 0, T = void 0;
        this.trackIds && (T = this.popStack()), this.stringParams && (C = this.popStack(), x = this.popStack());
        var w = this.hash;
        x && (w.contexts[y] = x), C && (w.types[y] = C), T && (w.ids[y] = T), w.values[y] = h;
      },
      pushId: function(y, h, x) {
        y === "BlockParam" ? this.pushStackLiteral("blockParams[" + h[0] + "].path[" + h[1] + "]" + (x ? " + " + JSON.stringify("." + x) : "")) : y === "PathExpression" ? this.pushString(h) : y === "SubExpression" ? this.pushStackLiteral("true") : this.pushStackLiteral("null");
      },
      // HELPERS
      compiler: g,
      compileChildren: function(y, h) {
        for (var x = y.children, C = void 0, T = void 0, w = 0, k = x.length; w < k; w++) {
          C = x[w], T = new this.compiler();
          var E = this.matchExistingProgram(C);
          if (E == null) {
            this.context.programs.push("");
            var N = this.context.programs.length;
            C.index = N, C.name = "program" + N, this.context.programs[N] = T.compile(C, h, this.context, !this.precompile), this.context.decorators[N] = T.decorators, this.context.environments[N] = C, this.useDepths = this.useDepths || T.useDepths, this.useBlockParams = this.useBlockParams || T.useBlockParams, C.useDepths = this.useDepths, C.useBlockParams = this.useBlockParams;
          } else
            C.index = E.index, C.name = "program" + E.index, this.useDepths = this.useDepths || E.useDepths, this.useBlockParams = this.useBlockParams || E.useBlockParams;
        }
      },
      matchExistingProgram: function(y) {
        for (var h = 0, x = this.context.environments.length; h < x; h++) {
          var C = this.context.environments[h];
          if (C && C.equals(y))
            return C;
        }
      },
      programExpression: function(y) {
        var h = this.environment.children[y], x = [h.index, "data", h.blockParams];
        return (this.useBlockParams || this.useDepths) && x.push("blockParams"), this.useDepths && x.push("depths"), "container.program(" + x.join(", ") + ")";
      },
      useRegister: function(y) {
        this.registers[y] || (this.registers[y] = !0, this.registers.list.push(y));
      },
      push: function(y) {
        return y instanceof v || (y = this.source.wrap(y)), this.inlineStack.push(y), y;
      },
      pushStackLiteral: function(y) {
        this.push(new v(y));
      },
      pushSource: function(y) {
        this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), this.pendingContent = void 0), y && this.source.push(y);
      },
      replaceStack: function(y) {
        var h = ["("], x = void 0, C = void 0, T = void 0;
        if (!this.isInline())
          throw new u.default("replaceStack on non-inline");
        var w = this.popStack(!0);
        if (w instanceof v)
          x = [w.value], h = ["(", x], T = !0;
        else {
          C = !0;
          var k = this.incrStack();
          h = ["((", this.push(k), " = ", w, ")"], x = this.topStack();
        }
        var E = y.call(this, x);
        T || this.popStack(), C && this.stackSlot--, this.push(h.concat(E, ")"));
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
        for (var h = 0, x = y.length; h < x; h++) {
          var C = y[h];
          if (C instanceof v)
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
      popStack: function(y) {
        var h = this.isInline(), x = (h ? this.inlineStack : this.compileStack).pop();
        if (!y && x instanceof v)
          return x.value;
        if (!h) {
          if (!this.stackSlot)
            throw new u.default("Invalid stack pop");
          this.stackSlot--;
        }
        return x;
      },
      topStack: function() {
        var y = this.isInline() ? this.inlineStack : this.compileStack, h = y[y.length - 1];
        return h instanceof v ? h.value : h;
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
        var h = this.aliases[y];
        return h ? (h.referenceCount++, h) : (h = this.aliases[y] = this.source.wrap(y), h.aliasable = !0, h.referenceCount = 1, h);
      },
      setupHelper: function(y, h, x) {
        var C = [], T = this.setupHelperArgs(h, y, C, x), w = this.nameLookup("helpers", h, "helper"), k = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
        return {
          params: C,
          paramsInit: T,
          name: w,
          callParams: [k].concat(C)
        };
      },
      setupParams: function(y, h, x) {
        var C = {}, T = [], w = [], k = [], E = !x, N = void 0;
        E && (x = []), C.name = this.quotedString(y), C.hash = this.popStack(), this.trackIds && (C.hashIds = this.popStack()), this.stringParams && (C.hashTypes = this.popStack(), C.hashContexts = this.popStack());
        var M = this.popStack(), j = this.popStack();
        (j || M) && (C.fn = j || "container.noop", C.inverse = M || "container.noop");
        for (var U = h; U--; )
          N = this.popStack(), x[U] = N, this.trackIds && (k[U] = this.popStack()), this.stringParams && (w[U] = this.popStack(), T[U] = this.popStack());
        return E && (C.args = this.source.generateArray(x)), this.trackIds && (C.ids = this.source.generateArray(k)), this.stringParams && (C.types = this.source.generateArray(w), C.contexts = this.source.generateArray(T)), this.options.data && (C.data = "data"), this.useBlockParams && (C.blockParams = "blockParams"), C;
      },
      setupHelperArgs: function(y, h, x, C) {
        var T = this.setupParams(y, h, x);
        return T.loc = JSON.stringify(this.source.currentLocation), T = this.objectLiteral(T), C ? (this.useRegister("options"), x.push("options"), ["options=", T]) : x ? (x.push(T), "") : T;
      }
    }, (function() {
      for (var m = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), y = g.RESERVED_WORDS = {}, h = 0, x = m.length; h < x; h++)
        y[m[h]] = !0;
    })(), g.isValidJavaScriptVariableName = function(m) {
      return !g.RESERVED_WORDS[m] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(m);
    };
    function _(m, y, h, x, C) {
      var T = y.popStack(), w = h.length;
      for (m && w--; x < w; x++)
        T = y.nameLookup(T, h[x], C);
      return m ? [y.aliasable("container.strict"), "(", T, ", ", y.quotedString(h[x]), ", ", JSON.stringify(y.source.currentLocation), " )"] : T;
    }
    r.default = g, t.exports = r.default;
  })(Jl, Jl.exports)), Jl.exports;
}
var wy;
function jE() {
  return wy || (wy = 1, (function(t, r) {
    r.__esModule = !0;
    function i(w) {
      return w && w.__esModule ? w : { default: w };
    }
    var s = vE(), l = i(s), u = H0(), f = i(u), p = SE(), d = xE(), v = ME(), g = i(v), _ = q0(), m = i(_), y = U0(), h = i(y), x = l.default.create;
    function C() {
      var w = x();
      return w.compile = function(k, E) {
        return d.compile(k, E, w);
      }, w.precompile = function(k, E) {
        return d.precompile(k, E, w);
      }, w.AST = f.default, w.Compiler = d.Compiler, w.JavaScriptCompiler = g.default, w.Parser = p.parser, w.parse = p.parse, w.parseWithoutProcessing = p.parseWithoutProcessing, w;
    }
    var T = C();
    T.create = C, h.default(T), T.Visitor = m.default, T.default = T, r.default = T, t.exports = r.default;
  })(Ol, Ol.exports)), Ol.exports;
}
var Ft = jE();
const DE = /* @__PURE__ */ Vd(Ft), rh = /* @__PURE__ */ l2({
  __proto__: null,
  default: DE
}, [Ft]), rr = SillyTavern.getContext(), dn = [
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
  formatDescription: d,
  mainContextList: v,
  includeUserMacro: g,
  maxResponseToken: _,
  targetField: m,
  outputFormat: y
}) {
  if (!t)
    throw new Error("No connection profile selected.");
  const h = rr.extensionSettings.connectionManager?.profiles?.find((M) => M.id === t);
  if (!h)
    throw new Error(`Connection profile with ID "${t}" not found.`);
  const x = h.api ? rr.CONNECT_API_MAP[h.api].selected : void 0;
  if (!x)
    throw new Error(`Could not determine API for profile "${h.name}".`);
  const C = {};
  C.char = l.fields.name.value ?? "{{char}}", C.user = g && wr ? wr : "{{user}}", C.persona = "{{persona}}", C.targetField = m, C.userInstructions = Ft.compile(r.trim(), { noEscape: !0 })(C), C.fieldSpecificInstructions = Ft.compile(
    l.draftFields[m]?.prompt ?? l.fields[m]?.prompt,
    { noEscape: !0 }
  )({
    ...C,
    char: m === "mes_example" ? "{{char}}" : C.char,
    user: m === "mes_example" ? "{{user}}" : C.user
  }), C.activeFormatInstructions = Ft.compile(d.content, { noEscape: !0 })(
    C
  );
  {
    const M = [];
    l.selectedCharacterIndexes.forEach((j) => {
      const U = parseInt(j), G = u[U];
      G && M.push(G);
    }), C.characters = M;
  }
  {
    const M = {};
    Object.entries(f).filter(
      ([j, U]) => U.length > 0 && l.selectedWorldNames.includes(j) && U.some((G) => !G.disable)
    ).forEach(([j, U]) => {
      M[j] = U.filter((G) => !G.disable);
    }), C.lorebooks = M;
  }
  {
    const M = {}, j = {}, U = {}, G = m.startsWith("alternate_greetings_"), P = wt.getSettings().contextToSend.dontSendOtherGreetings;
    Object.entries(l.fields).forEach(([V, le]) => {
      let fe = !1;
      if (P) {
        const ue = V.startsWith("alternate_greetings_");
        G ? fe = ue && V !== m || V === "first_mes" : fe = ue;
      }
      if (!fe) {
        const ue = Ft.compile(le.value, { noEscape: !0 })({
          ...C,
          char: V === "mes_example" ? "{{char}}" : C.char,
          user: V === "mes_example" ? "{{user}}" : C.user
        });
        dn.includes(V) ? M[le.label] = ue : V.startsWith("alternate_greetings_") && (j[V] = ue);
      }
    }), Object.entries(l.draftFields || {}).forEach(([V, le]) => {
      U[le.label] = Ft.compile(le.value, { noEscape: !0 })(C);
    });
    const Y = {};
    Object.keys(M).length > 0 && (Y.core = M), Object.keys(j).length > 0 && (Y.alternate_greetings = j), Object.keys(U).length > 0 && (Y.draft = U), C.fields = Y;
  }
  const T = [];
  {
    for (const M of v) {
      if (M.promptName === "chatHistory") {
        const P = await m0(x, i);
        if (P.warnings && P.warnings.length > 0)
          for (const Y of P.warnings)
            Ne("warning", Y);
        T.push(...P.result);
        continue;
      }
      let j = structuredClone(C);
      M.promptName === "stDescription" && (j.char = "{{char}}", j.user = "{{user}}");
      const U = p[M.promptName];
      if (!U)
        continue;
      const G = {
        role: M.role,
        content: Ft.compile(U.content, { noEscape: !0 })(j)
      };
      G.content = G.content.replaceAll("{{user}}", "[[[crec_veryUniqueUserPlaceHolder]]]"), G.content = G.content.replaceAll("{{char}}", "[[[crec_veryUniqueCharPlaceHolder]]]"), G.content = rr.substituteParams(G.content), G.content = G.content.replaceAll("[[[crec_veryUniqueUserPlaceHolder]]]", "{{user}}"), G.content = G.content.replaceAll("[[[crec_veryUniqueCharPlaceHolder]]]", "{{char}}"), G.content && T.push(G);
    }
    s && T.push({
      role: "assistant",
      content: Lv(s, y)
    });
  }
  const w = await rr.ConnectionManagerRequestService.sendRequest(
    t,
    T,
    _
  ), k = s ? Lv(s, y) + w.content : w.content, E = L0(k, y);
  let N;
  if (typeof E == "string")
    N = E;
  else if (typeof E == "object" && E !== null)
    if ("response" in E && typeof E.response == "string")
      N = E.response;
    else {
      const M = Object.values(E)[0];
      N = M ? String(M) : "";
    }
  else
    N = "";
  return N;
}
const ja = "SillyTavern-Character-Creator", V0 = "0.3.0", zE = "F_1.10", LE = {
  EXTENSION: "charCreator"
}, eu = [
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
], rt = {
  stDescription: Md,
  charDefinitions: k0,
  lorebookDefinitions: M0,
  xmlFormat: ex,
  jsonFormat: tx,
  noneFormat: nx,
  worldInfoCharDefinition: rx,
  existingFieldDefinitions: ro,
  taskDescription: eh,
  outputFormatInstructions: Wd,
  personaDescription: ax,
  reviseJsonPrompt: ix,
  reviseXmlPrompt: sx,
  reviseTaskDescription: ox
}, Y0 = {
  version: V0,
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
      content: rt.stDescription,
      isDefault: !0,
      label: "ST/Char Card Description"
    },
    charDefinitions: {
      content: rt.charDefinitions,
      isDefault: !0,
      label: "Character Definition Template"
    },
    lorebookDefinitions: {
      content: rt.lorebookDefinitions,
      isDefault: !0,
      label: "Lorebook Definition Template"
    },
    xmlFormat: {
      content: rt.xmlFormat,
      isDefault: !0,
      label: "XML Format Description"
    },
    jsonFormat: {
      content: rt.jsonFormat,
      isDefault: !0,
      label: "JSON Format Description"
    },
    noneFormat: {
      content: rt.noneFormat,
      isDefault: !0,
      label: "Plain Text Format Description"
    },
    worldInfoCharDefinition: {
      content: rt.worldInfoCharDefinition,
      isDefault: !0,
      label: "World Info Character Definition Template"
    },
    existingFieldDefinitions: {
      content: ro,
      isDefault: !0,
      label: "Existing Fields Definition Template"
    },
    taskDescription: {
      content: eh,
      isDefault: !0,
      label: "Task Description Template"
    },
    outputFormatInstructions: {
      content: Wd,
      isDefault: !0,
      label: "Output Format Instructions"
    },
    personaDescription: {
      content: rt.personaDescription,
      isDefault: !0,
      label: "User Persona Description Template"
    },
    reviseJsonPrompt: {
      content: rt.reviseJsonPrompt,
      isDefault: !0,
      label: "Revise Session (JSON Mode)"
    },
    reviseXmlPrompt: {
      content: rt.reviseXmlPrompt,
      isDefault: !0,
      label: "Revise Session (XML Mode)"
    },
    reviseTaskDescription: {
      content: rt.reviseTaskDescription,
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
  preferredTokenizer: 13
  // Default to Gemma
};
function zd(t) {
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
const wt = new i0(LE.EXTENSION, Y0);
async function IE() {
  return new Promise((t, r) => {
    wt.initializeSettings({
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
                  content: rt.stDescription,
                  isDefault: !0,
                  label: "ST/Char Card Description"
                },
                charDefinitions: {
                  content: rt.charDefinitions,
                  isDefault: !0,
                  label: "Character Definition Template"
                },
                lorebookDefinitions: {
                  content: rt.lorebookDefinitions,
                  isDefault: !0,
                  label: "Lorebook Definition Template"
                },
                xmlFormat: {
                  content: rt.xmlFormat,
                  isDefault: !0,
                  label: "XML Format Description"
                },
                jsonFormat: {
                  content: rt.jsonFormat,
                  isDefault: !0,
                  label: "JSON Format Description"
                },
                noneFormat: {
                  content: rt.noneFormat,
                  isDefault: !0,
                  label: "Plain Text Format Description"
                },
                worldInfoCharDefinition: {
                  content: rt.worldInfoCharDefinition,
                  isDefault: !0,
                  label: "World Info Character Definition Template"
                },
                existingFieldDefinitions: {
                  content: ro,
                  isDefault: !0,
                  label: "Existing Fields Definition Template"
                },
                taskDescription: {
                  content: eh,
                  isDefault: !0,
                  label: "Task Description Template"
                },
                outputFormatInstructions: {
                  content: Wd,
                  isDefault: !0,
                  label: "Output Format Instructions"
                },
                personaDescription: {
                  content: rt.personaDescription,
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
                  content: rt.personaDescription,
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
            return await Ne("info", `[${ja}] Added Alternate Greetings.`), {
              ...i,
              prompts: {
                ...i?.prompts,
                stDescription: {
                  content: rt.stDescription,
                  isDefault: !0,
                  label: "ST/Char Card Description"
                },
                charDefinitions: {
                  content: rt.charDefinitions,
                  isDefault: !0,
                  label: "Character Definition Template"
                },
                worldInfoCharDefinition: {
                  content: rt.worldInfoCharDefinition,
                  isDefault: !0,
                  label: "World Info Character Definition Template"
                },
                existingFieldDefinitions: {
                  content: ro,
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
              content: rt.reviseJsonPrompt,
              isDefault: !0,
              label: "Revise Session (JSON Mode)"
            }, s.prompts.reviseXmlPrompt = {
              content: rt.reviseXmlPrompt,
              isDefault: !0,
              label: "Revise Session (XML Mode)"
            }, s.prompts.reviseTaskDescription = {
              content: rt.reviseTaskDescription,
              isDefault: !0,
              label: "Revise Session Task Description"
            }, i.prompts.charDefinitions.isDefault && (s.prompts.charDefinitions.content = k0), i.prompts.lorebookDefinitions.isDefault && (s.prompts.lorebookDefinitions.content = M0), i.prompts.existingFieldDefinitions.isDefault && (s.prompts.existingFieldDefinitions.content = ro), s;
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
      console.error(`[${ja}] Error initializing settings:`, i), Ne("error", `[${ja}] Failed to initialize settings: ${i.message}`), rr.Popup.show.confirm(
        `[${ja}] Failed to load settings. This might be due to an update. Reset settings to default?`,
        "Extension Error"
      ).then((s) => {
        s && (wt.resetSettings(), Ne("success", `[${ja}] Settings reset. Reloading may be required.`), t());
      });
    });
  });
}
const he = ({ children: t, className: r, overrideDefaults: i = !1, ...s }) => {
  const l = X.useMemo(() => {
    const u = [];
    return i || u.push("menu_button", "interactable"), u.push(r), u.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ S.jsx("button", { className: l, ...s, children: t });
}, PE = ({ label: t, className: r, overrideDefaults: i = !1, type: s = "text", ...l }) => {
  const u = X.useMemo(() => {
    const f = [];
    return i || (s === "text" || s === "number" || s === "password" || s === "email" || s === "search") && f.push("text_pole"), f.push(r), f.filter(Boolean).join(" ");
  }, [i, r, s]);
  if (s === "checkbox") {
    const f = i ? r : `checkbox_label ${r ?? ""}`.trim();
    return /* @__PURE__ */ S.jsxs("label", { className: f, children: [
      /* @__PURE__ */ S.jsx("input", { type: "checkbox", ...l }),
      t && /* @__PURE__ */ S.jsx("span", { children: t })
    ] });
  }
  return /* @__PURE__ */ S.jsx("input", { type: s, className: u, ...l });
}, bu = ({ children: t, className: r, overrideDefaults: i = !1, ...s }) => {
  const l = X.useMemo(() => {
    const u = [];
    return i || u.push("text_pole"), u.push(r), u.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ S.jsx("select", { className: l, ...s, children: t });
}, en = ({ children: t, className: r, overrideDefaults: i = !1, ...s }) => {
  const l = X.useMemo(() => {
    const u = [];
    return i || u.push("text_pole", "textarea_compact"), u.push(r), u.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ S.jsx("textarea", { className: l, ...s, children: t });
};
var BE = r0(), Nn = /* @__PURE__ */ ((t) => (t[t.TEXT = 1] = "TEXT", t[t.CONFIRM = 2] = "CONFIRM", t[t.INPUT = 3] = "INPUT", t[t.DISPLAY = 4] = "DISPLAY", t))(Nn || {}), ta = /* @__PURE__ */ ((t) => (t[t.AFFIRMATIVE = 1] = "AFFIRMATIVE", t[t.NEGATIVE = 0] = "NEGATIVE", t[t.CANCELLED = null] = "CANCELLED", t))(ta || {});
const UE = SillyTavern.getContext(), Li = ({
  content: t,
  type: r,
  inputValue: i = "",
  options: s = {},
  preventEscape: l = !1,
  onComplete: u
}) => {
  var f;
  const p = X.useRef(null), d = X.useRef(null), [v, g] = X.useState(!1), [_, m] = X.useState(null), y = X.useRef(UE.uuidv4()), h = X.useRef({
    id: y.current,
    type: r,
    dlg: null,
    mainInput: null,
    lastFocus: null,
    value: void 0,
    result: void 0,
    inputResults: void 0
  });
  X.useEffect(() => {
    const w = p.current;
    if (!w) return;
    const k = (E) => {
      E.preventDefault(), l || x(ta.CANCELLED);
    };
    return w.addEventListener("cancel", k), h.current.dlg = w, h.current.mainInput = d.current, Ci.util.popups.push(h.current), w.showModal || (w.classList.add("poly_dialog"), rv.registerDialog(w), new ResizeObserver((E) => {
      for (const N of E)
        rv.reposition(N.target);
    }).observe(w)), w.showModal(), Ff(), () => {
      nv(Ci.util.popups, h.current), Ff(), w.removeEventListener("cancel", k);
    };
  }, []);
  const x = async (w) => {
    var k, E;
    let N = w;
    if (r === Nn.INPUT && (w >= ta.AFFIRMATIVE ? N = (k = d.current) == null ? void 0 : k.value : w === ta.NEGATIVE ? N = !1 : w === ta.CANCELLED ? N = null : N = !1), (E = s.customInputs) != null && E.length) {
      const j = new Map(
        s.customInputs.map((U) => {
          var G;
          const P = (G = p.current) == null ? void 0 : G.querySelector(`#${U.id}`);
          return [P.id, P.checked];
        })
      );
      h.current.inputResults = j;
    }
    if (h.current.result = w, h.current.value = N, s.onClosing && !await s.onClosing(h.current)) {
      g(!0), h.current.value = void 0, h.current.result = void 0, h.current.inputResults = void 0;
      return;
    }
    g(!1), Ci.util.lastResult = {
      value: N,
      result: w,
      inputResults: h.current.inputResults
    };
    const M = p.current;
    M && (M.setAttribute("closing", ""), Ff(), o2(M, async () => {
      var j;
      if (M.close(), s.onClose && await s.onClose(h.current), nv(Ci.util.popups, h.current), Ci.util.popups.length > 0) {
        const U = (j = document.activeElement) == null ? void 0 : j.closest(".popup"), G = U?.getAttribute("data-id"), P = Ci.util.popups.find((Y) => Y.id === G);
        P && P.lastFocus && P.lastFocus.focus();
      }
      u(N);
    }));
  }, C = (w) => {
    w.target instanceof HTMLElement && w.target !== p.current && (m(w.target), h.current.lastFocus = w.target);
  }, T = async (w) => {
  };
  return BE.createPortal(
    /* @__PURE__ */ S.jsx(
      "dialog",
      {
        ref: p,
        className: (() => {
          const w = ["popup"];
          return s.wide && w.push("wide_dialogue_popup"), s.wider && w.push("wider_dialogue_popup"), s.large && w.push("large_dialogue_popup"), s.transparent && w.push("transparent_dialogue_popup"), s.allowHorizontalScrolling && w.push("horizontal_scrolling_dialogue_popup"), s.allowVerticalScrolling && w.push("vertical_scrolling_dialogue_popup"), s.animation && w.push(`popup--animation-${s.animation}`), w.join(" ");
        })(),
        "data-id": y.current,
        onKeyDown: T,
        onFocus: C,
        children: /* @__PURE__ */ S.jsxs("div", { className: "popup-body", children: [
          /* @__PURE__ */ S.jsx("div", { className: "popup-content", children: t }),
          r === Nn.INPUT && /* @__PURE__ */ S.jsx(
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
          r !== Nn.DISPLAY && /* @__PURE__ */ S.jsxs("div", { className: "popup-controls", children: [
            (f = s.customButtons) == null ? void 0 : f.map((w, k) => {
              const E = typeof w == "string" ? { text: w, result: k + 2 } : w;
              return /* @__PURE__ */ S.jsx(
                "div",
                {
                  className: `menu_button popup-button-custom result-control ${E.classes ?? ""}`,
                  "data-result": E.result,
                  onClick: () => {
                    var N;
                    (N = E.action) == null || N.call(E), x(E.result ?? k + 2);
                  },
                  "data-i18n": E.text,
                  children: E.text
                },
                k
              );
            }),
            r !== Nn.DISPLAY && s.okButton !== !1 && /* @__PURE__ */ S.jsx(
              "div",
              {
                className: "popup-button-ok menu_button result-control",
                onClick: () => x(ta.AFFIRMATIVE),
                "data-result": "1",
                children: typeof s.okButton == "string" ? s.okButton : "OK"
              }
            ),
            r !== Nn.DISPLAY && s.cancelButton !== !1 && /* @__PURE__ */ S.jsx(
              "div",
              {
                className: "popup-button-cancel menu_button result-control",
                onClick: () => x(ta.NEGATIVE),
                "data-result": "0",
                children: typeof s.cancelButton == "string" ? s.cancelButton : "Cancel"
              }
            )
          ] }),
          r === Nn.DISPLAY && /* @__PURE__ */ S.jsx(
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
  const [p, d] = X.useState(t ?? ""), [v, g] = X.useState(Date.now()), { isEnabled: _, profiles: m, connectApiMap: y } = X.useMemo(() => {
    var C, T;
    return (C = Er.extensionSettings.disabledExtensions) != null && C.includes("connection-manager") ? (console.error("Connection Manager extension is disabled."), { isEnabled: !1, profiles: [], connectApiMap: {} }) : {
      isEnabled: !0,
      profiles: ((T = Er.extensionSettings.connectionManager) == null ? void 0 : T.profiles) ?? [],
      connectApiMap: Er.CONNECT_API_MAP
    };
  }, [v]);
  X.useEffect(() => {
    if (!_) return;
    const C = (k) => {
      Gs(k, r, y) && (g(Date.now()), l?.(k));
    }, T = (k, E) => {
      const N = Gs(k, r, y), M = Gs(E, r, y);
      (N || M) && g(Date.now()), u?.(k, E), p === k.id && !M && (d(""), s?.(void 0));
    }, w = (k) => {
      Gs(k, r, y) && (g(Date.now()), f?.(k), p === k.id && (d(""), s?.(void 0)));
    };
    return Er.eventSource.on("CONNECTION_PROFILE_CREATED", C), Er.eventSource.on("CONNECTION_PROFILE_UPDATED", T), Er.eventSource.on("CONNECTION_PROFILE_DELETED", w), () => {
      Er.eventSource.removeListener("CONNECTION_PROFILE_CREATED", C), Er.eventSource.removeListener("CONNECTION_PROFILE_UPDATED", T), Er.eventSource.removeListener("CONNECTION_PROFILE_DELETED", w);
    };
  }, [_, p, r, y, s, l, u, f]);
  const h = X.useMemo(() => {
    if (!_) return [];
    const C = m.filter((w) => Gs(w, r, y)), T = {};
    for (const [w, k] of Object.entries(r))
      T[w] = { label: k, profiles: [] };
    for (const w of C) {
      const k = y[w.api];
      T[k.selected] && T[k.selected].profiles.push(w);
    }
    for (const w of Object.values(T))
      w.profiles.sort((k, E) => (k.name ?? "").localeCompare(E.name ?? ""));
    return Object.values(T).filter((w) => w.profiles.length > 0);
  }, [_, m, r, y]), x = X.useCallback(
    (C) => {
      const T = C.target.value;
      d(T);
      const w = m.find((k) => k.id === T);
      s?.(w);
    },
    [m, s]
  );
  return _ ? /* @__PURE__ */ S.jsxs(bu, { value: p, onChange: x, children: [
    /* @__PURE__ */ S.jsx("option", { value: "", children: i }),
    h.map((C) => /* @__PURE__ */ S.jsx("optgroup", { label: C.label, children: C.profiles.map((T) => /* @__PURE__ */ S.jsx("option", { value: T.id, children: T.name }, T.id)) }, C.label))
  ] }) : /* @__PURE__ */ S.jsx(bu, { disabled: !0, value: "", children: /* @__PURE__ */ S.jsx("option", { children: "Connection Manager disabled" }) });
}, HE = fu.memo(
  ({ item: t, showToggleButton: r, showDeleteButton: i, showSelectInput: s, onToggle: l, onDelete: u, onSelectChange: f }) => {
    const {
      id: p,
      label: d,
      enabled: v,
      canDelete: g = !0,
      canToggle: _ = !0,
      showSelect: m = !0,
      canSelect: y = !0,
      selectOptions: h = [],
      selectValue: x
    } = t, C = {
      display: "flex",
      alignItems: "center",
      padding: "8px 12px",
      border: "1px solid var(--SmartThemeBorderColor, #ccc)",
      color: "var(--SmartThemeBodyColor, #333)",
      marginBottom: "2px",
      opacity: r && !v ? 0.6 : 1
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
          children: d
        }
      ),
      s && m && y && /* @__PURE__ */ S.jsx(
        bu,
        {
          value: x,
          onChange: (k) => f(p, k.target.value),
          disabled: !v,
          style: { marginRight: "10px", flexShrink: 0, width: "unset" },
          children: h.length === 0 ? /* @__PURE__ */ S.jsx("option", { disabled: !0, children: "--" }) : h.map((k) => /* @__PURE__ */ S.jsx("option", { value: k.value, children: k.label }, k.value))
        }
      ),
      s && (!m || !y) && /* @__PURE__ */ S.jsx("span", { style: w }),
      r && _ && /* @__PURE__ */ S.jsx(
        he,
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
          onClick: () => l(p)
        }
      ),
      r && !_ && /* @__PURE__ */ S.jsx("span", { style: w }),
      i && g && /* @__PURE__ */ S.jsx(
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
      i && !g && /* @__PURE__ */ S.jsx("span", { style: { ...w, marginRight: 0 } })
    ] });
  }
), qE = ({
  items: t,
  onItemsChange: r,
  showToggleButton: i = !1,
  showDeleteButton: s = !1,
  showSelectInput: l = !1,
  sortableJsOptions: u = {}
}) => {
  const f = X.useRef(null), p = X.useRef(null);
  X.useEffect(() => (f.current && (p.current = Ce.create(f.current, {
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
      const { oldIndex: m, newIndex: y } = _;
      if (m === void 0 || y === void 0 || m === y)
        return;
      const h = Array.from(t), [x] = h.splice(m, 1);
      h.splice(y, 0, x), r(h);
    }
  })), () => {
    var _;
    (_ = p.current) == null || _.destroy(), p.current = null;
  }), [t, r, u]);
  const d = (_) => {
    r(t.map((m) => m.id === _ ? { ...m, enabled: !m.enabled } : m));
  }, v = (_) => {
    r(t.filter((m) => m.id !== _));
  }, g = (_, m) => {
    r(t.map((y) => y.id === _ ? { ...y, selectValue: m } : y));
  };
  return /* @__PURE__ */ S.jsx("ul", { ref: f, className: "sortable-list", style: { listStyle: "none", padding: 0, margin: 0 }, children: t.map((_) => /* @__PURE__ */ S.jsx(
    HE,
    {
      item: _,
      showToggleButton: i,
      showDeleteButton: s,
      showSelectInput: l,
      onToggle: d,
      onDelete: v,
      onSelectChange: g
    },
    _.id
  )) });
}, pd = ({
  items: t,
  value: r,
  onChange: i,
  placeholder: s = "Select items...",
  closeOnSelect: l = !1,
  multiple: u = !0,
  disabled: f = !1,
  onBeforeSelection: p,
  enableSearch: d = !1,
  searchPlaceholder: v = "Search...",
  searchNoResultsText: g = "No results found",
  searchFuseOptions: _,
  inputClasses: m,
  containerClasses: y
}) => {
  const [h, x] = X.useState(!1), [C, T] = X.useState(""), w = X.useRef(null);
  X.useEffect(() => {
    const j = (U) => {
      w.current && !w.current.contains(U.target) && x(!1);
    };
    return document.addEventListener("mousedown", j), () => document.removeEventListener("mousedown", j);
  }, []), X.useEffect(() => {
    h || T("");
  }, [h]);
  const k = X.useMemo(() => {
    if (!d) return null;
    const j = {
      includeScore: !1,
      threshold: 0.4,
      keys: ["label", "value"],
      ..._
    };
    return new Bi(t, j);
  }, [t, d, _]), E = X.useMemo(() => !d || !C.trim() || !k ? t : k.search(C.trim()).map((j) => j.item), [t, C, d, k]), N = async (j) => {
    let U;
    u ? U = r.includes(j) ? r.filter((G) => G !== j) : [...r, j] : U = r.includes(j) ? [] : [j], !(p && !await Promise.resolve(p(r, U))) && (i(U), l && x(!1));
  }, M = X.useMemo(() => {
    var j;
    return r.length === 0 ? s : r.length === 1 ? ((j = t.find((U) => U.value === r[0])) == null ? void 0 : j.label) ?? r[0] : `${r.length} items selected`;
  }, [r, t, s]);
  return /* @__PURE__ */ S.jsxs(
    "div",
    {
      ref: w,
      className: `fancy-dropdown-container ${y ?? ""}`,
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
              /* @__PURE__ */ S.jsx("span", { className: "fancy-dropdown-trigger-text", children: M }),
              /* @__PURE__ */ S.jsx("i", { className: `fas ${h ? "fa-chevron-up" : "fa-chevron-down"}`, style: { marginLeft: "8px" } })
            ]
          }
        ),
        h && /* @__PURE__ */ S.jsxs(
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
              d && /* @__PURE__ */ S.jsx(
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
                    PE,
                    {
                      type: "text",
                      placeholder: v,
                      value: C,
                      onChange: (j) => T(j.target.value),
                      autoFocus: !0,
                      className: m
                    }
                  )
                }
              ),
              /* @__PURE__ */ S.jsx("ul", { style: { listStyle: "none", margin: 0, padding: 0 }, children: E.length > 0 ? E.map((j) => /* @__PURE__ */ S.jsx(
                FE,
                {
                  item: j,
                  isSelected: r.includes(j.value),
                  onClick: N
                },
                j.value
              )) : /* @__PURE__ */ S.jsx(
                "div",
                {
                  style: {
                    padding: "8px 12px",
                    textAlign: "center",
                    color: "var(--text-color-secondary, var(--grey50))"
                  },
                  children: g
                }
              ) })
            ]
          }
        )
      ]
    }
  );
}, FE = fu.memo(({ item: t, isSelected: r, onClick: i }) => {
  const [s, l] = X.useState(!1);
  return /* @__PURE__ */ S.jsxs(
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
        /* @__PURE__ */ S.jsx("span", { children: t.label }),
        r && /* @__PURE__ */ S.jsx("i", { className: "checkmark fa-solid fa-check", style: { marginLeft: "8px" } })
      ]
    }
  );
}), md = SillyTavern.getContext(), _u = ({
  value: t,
  items: r,
  readOnlyValues: i = [],
  label: s,
  onChange: l,
  onItemsChange: u,
  enableCreate: f = !1,
  enableRename: p = !1,
  enableDelete: d = !1,
  onCreate: v,
  onRename: g,
  onDelete: _,
  buttons: m
}) => {
  const y = X.useMemo(() => r.find((w) => w.value === t), [r, t]), h = X.useCallback((w) => w ? i.includes(w) : !1, [i]), x = async () => {
    const w = await md.Popup.show.input(
      `Create a new ${s}`,
      `Please enter a name for the new ${s}:`,
      ""
    );
    if (!w || w.trim() === "") return;
    const k = w.trim();
    if (r.some((N) => N.value === k)) {
      await Ne("warning", `A ${s} with this name already exists.`);
      return;
    }
    let E = { value: k, label: k };
    if (v) {
      const N = await Promise.resolve(v(k));
      if (!N.confirmed) return;
      N.value && (typeof N.value == "string" ? E = { value: N.value, label: N.value } : E = N.value);
    }
    u([...r, E]), l(E.value, t);
  }, C = async () => {
    if (!y) {
      await Ne("warning", `Please select a ${s} to rename.`);
      return;
    }
    if (h(y.value)) {
      await Ne("warning", `This ${s} cannot be renamed as it is read-only.`);
      return;
    }
    const w = await md.Popup.show.input(
      `Rename ${s}`,
      `Please enter a new name for "${y.label}":`,
      y.label
    );
    if (!w || w.trim() === "" || w.trim() === y.value) return;
    const k = w.trim();
    if (r.some((M) => M.value === k)) {
      await Ne("warning", `A ${s} with this name already exists.`);
      return;
    }
    let E = { value: k, label: k };
    if (g) {
      const M = await Promise.resolve(g(y.value, k));
      if (!M.confirmed) return;
      M.value && (typeof M.value == "string" ? E = { value: M.value, label: M.value } : E = M.value);
    }
    const N = r.map((M) => M.value === y.value ? E : M);
    u(N), l(E.value, t);
  }, T = async () => {
    var w;
    if (!y) {
      await Ne("warning", `Please select a ${s} to delete.`);
      return;
    }
    if (h(y.value)) {
      await Ne("warning", `This ${s} cannot be deleted as it is read-only.`);
      return;
    }
    if (!await md.Popup.show.confirm(
      `Delete ${s}`,
      `Are you sure you want to delete "${y.label}"?`
    ) || _ && !await Promise.resolve(_(y.value)))
      return;
    const k = r.findIndex((M) => M.value === y.value), E = r.filter((M) => M.value !== y.value);
    u(E);
    let N;
    if (E.length > 0) {
      const M = Math.min(k, E.length - 1);
      N = (w = E[M]) == null ? void 0 : w.value;
    }
    l(N, t);
  };
  return /* @__PURE__ */ S.jsxs("div", { className: "preset-select-container", style: { display: "flex", alignItems: "center" }, children: [
    /* @__PURE__ */ S.jsx(bu, { value: t ?? "", onChange: (w) => l(w.target.value, t), children: r.map((w) => /* @__PURE__ */ S.jsx("option", { value: w.value, children: w.label }, w.value)) }),
    f && /* @__PURE__ */ S.jsx(
      he,
      {
        className: "fa-solid fa-file-circle-plus",
        title: `Create a new ${s}`,
        onClick: x,
        "data-i18n": `[title]Create a new ${s}`
      }
    ),
    p && /* @__PURE__ */ S.jsx(
      he,
      {
        className: "fa-solid fa-pencil",
        title: `Rename selected ${s}`,
        onClick: C,
        disabled: !y,
        "data-i18n": `[title]Rename selected ${s}`
      }
    ),
    d && /* @__PURE__ */ S.jsx(
      he,
      {
        className: "fa-solid fa-trash-can",
        title: `Delete selected ${s}`,
        onClick: T,
        disabled: !y,
        "data-i18n": `[title]Delete selected ${s}`
      }
    ),
    m?.map((w) => /* @__PURE__ */ S.jsx(
      he,
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
}, $0 = () => {
  const [, t] = X.useState(0);
  return X.useCallback(() => {
    t((i) => i + 1);
  }, []);
}, gd = SillyTavern.getContext(), ZE = () => {
  const t = $0(), r = wt.getSettings(), [i, s] = X.useState(eu[0]), l = X.useCallback(
    (E) => {
      const N = wt.getSettings();
      E(N), wt.saveSettings(), t();
    },
    [t]
  ), u = X.useMemo(
    () => Object.keys(r.mainContextTemplatePresets).map((E) => ({ value: E, label: E })),
    [r.mainContextTemplatePresets]
  ), f = X.useMemo(
    () => Object.entries(r.prompts).map(([E, N]) => ({
      value: E,
      label: `${N.label} (${E})`
    })),
    [r.prompts]
  ), p = X.useMemo(() => {
    const E = r.mainContextTemplatePresets[r.mainContextTemplatePreset];
    return E ? E.prompts.map((N) => {
      const M = r.prompts[N.promptName], j = M ? `${M.label} (${N.promptName})` : N.promptName;
      return {
        id: N.promptName,
        label: j,
        enabled: N.enabled,
        selectValue: N.role,
        selectOptions: [
          { value: "user", label: "User" },
          { value: "assistant", label: "Assistant" },
          { value: "system", label: "System" }
        ]
      };
    }) : [];
  }, [r.mainContextTemplatePreset, r.mainContextTemplatePresets, r.prompts]), d = (E) => {
    l((N) => {
      N.mainContextTemplatePreset = E ?? "default";
    });
  }, v = (E) => {
    l((N) => {
      const M = {};
      E.forEach((j) => {
        M[j.value] = N.mainContextTemplatePresets[j.value] ?? structuredClone(
          N.mainContextTemplatePresets[N.mainContextTemplatePreset] ?? N.mainContextTemplatePresets.default
        );
      }), N.mainContextTemplatePresets = M;
    });
  }, g = (E) => {
    l((N) => {
      const M = E.map((G) => ({
        promptName: G.id,
        enabled: G.enabled,
        role: G.selectValue ?? "user"
      })), j = {
        ...N.mainContextTemplatePresets[N.mainContextTemplatePreset],
        prompts: M
      }, U = {
        ...N.mainContextTemplatePresets,
        [N.mainContextTemplatePreset]: j
      };
      N.mainContextTemplatePresets = U;
    });
  }, _ = async () => {
    await gd.Popup.show.confirm("Restore default", "Are you sure?") && l((N) => {
      N.mainContextTemplatePresets = {
        ...N.mainContextTemplatePresets,
        default: structuredClone(Y0.mainContextTemplatePresets.default)
      }, N.mainContextTemplatePreset === "default" ? t() : N.mainContextTemplatePreset = "default";
    });
  }, m = (E) => {
    l((N) => {
      const M = E.map((P) => P.value);
      Object.keys(N.prompts).filter((P) => !M.includes(P)).forEach((P) => {
        Object.values(N.mainContextTemplatePresets).forEach((Y) => {
          Y.prompts = Y.prompts.filter((V) => V.promptName !== P);
        });
      });
      const G = {};
      E.forEach((P) => {
        G[P.value] = N.prompts[P.value] ?? { content: "", isDefault: !1, label: P.label };
      }), N.prompts = G;
    });
  }, y = (E) => {
    const N = zd(E);
    return N ? r.prompts[N] ? (Ne("error", `Prompt name already exists: ${N}`), { confirmed: !1 }) : (l((M) => {
      M.prompts = {
        ...M.prompts,
        [N]: { content: M.prompts[i]?.content ?? "", isDefault: !1, label: E }
      };
      const j = Object.fromEntries(
        Object.entries(M.mainContextTemplatePresets).map(([U, G]) => [
          U,
          {
            ...G,
            prompts: [...G.prompts, { enabled: !0, promptName: N, role: "user" }]
          }
        ])
      );
      M.mainContextTemplatePresets = j;
    }), s(N), { confirmed: !0, value: N }) : (Ne("error", `Invalid prompt name: ${E}`), { confirmed: !1 });
  }, h = (E, N) => {
    const M = zd(N);
    return M ? r.prompts[M] ? (Ne("error", `Prompt name already exists: ${M}`), { confirmed: !1 }) : (l((j) => {
      const { [E]: U, ...G } = j.prompts;
      j.prompts = {
        ...G,
        [M]: { ...U, label: N }
      };
      const P = Object.fromEntries(
        Object.entries(j.mainContextTemplatePresets).map(([Y, V]) => [
          Y,
          {
            ...V,
            prompts: V.prompts.map((le) => le.promptName === E ? { ...le, promptName: M } : le)
          }
        ])
      );
      j.mainContextTemplatePresets = P;
    }), s(M), { confirmed: !0, value: M }) : (Ne("error", `Invalid prompt name: ${N}`), { confirmed: !1 });
  }, x = (E) => {
    const N = E.target.value;
    l((M) => {
      const j = M.prompts[i];
      j && (M.prompts = {
        ...M.prompts,
        [i]: {
          ...j,
          // Copy existing properties
          content: N,
          isDefault: eu.includes(i) ? rt[i] === N : !1
        }
      });
    });
  }, C = async () => {
    const E = r.prompts[i];
    if (!E) return Ne("warning", "No prompt selected.");
    await gd.Popup.show.confirm("Restore Default", `Restore default for "${E.label}"?`) && l((M) => {
      M.prompts = {
        ...M.prompts,
        [i]: {
          ...M.prompts[i],
          content: rt[i]
        }
      };
    });
  }, T = async () => {
    await gd.Popup.show.confirm("Reset Everything", "Are you sure? This cannot be undone.") && (wt.resetSettings(), t(), Ne("success", "Settings have been reset."));
  }, w = r.prompts[i], k = eu.includes(i);
  return /* @__PURE__ */ S.jsxs("div", { className: "charCreator_settings", children: [
    /* @__PURE__ */ S.jsxs("div", { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ S.jsxs("div", { className: "title_restorable", children: [
        /* @__PURE__ */ S.jsx("span", { children: "Main Context Template" }),
        /* @__PURE__ */ S.jsx(
          he,
          {
            className: "fa-solid fa-undo",
            title: "Restore main context template to default",
            onClick: _
          }
        )
      ] }),
      /* @__PURE__ */ S.jsx(
        _u,
        {
          label: "Template",
          items: u,
          value: r.mainContextTemplatePreset,
          readOnlyValues: ["default"],
          onChange: d,
          onItemsChange: v,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0
        }
      ),
      /* @__PURE__ */ S.jsx("div", { style: { marginTop: "5px" }, children: /* @__PURE__ */ S.jsx(
        qE,
        {
          items: p,
          onItemsChange: g,
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
          he,
          {
            className: "fa-solid fa-undo",
            title: "Restore selected prompt to default",
            onClick: C
          }
        )
      ] }),
      /* @__PURE__ */ S.jsx(
        _u,
        {
          label: "Prompt",
          items: f,
          value: i,
          readOnlyValues: eu,
          onChange: (E) => s(E ?? ""),
          onItemsChange: m,
          onCreate: y,
          onRename: h,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0
        }
      ),
      /* @__PURE__ */ S.jsx(
        en,
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
          onChange: (E) => l((N) => {
            N.showSaveAsWorldInfoEntry.show = E.target.checked;
          })
        }
      ),
      'Show "Save as World Info Entry" option in popup'
    ] }),
    /* @__PURE__ */ S.jsx("hr", { style: { margin: "15px 0" } }),
    /* @__PURE__ */ S.jsx("div", { style: { textAlign: "center", marginTop: "15px" }, children: /* @__PURE__ */ S.jsxs(he, { className: "danger_button", style: { width: "auto" }, onClick: T, children: [
      /* @__PURE__ */ S.jsx("i", { style: { marginRight: "10px" }, className: "fa-solid fa-triangle-exclamation" }),
      "I messed up, reset everything"
    ] }) })
  ] });
}, Cy = {
  13: "/api/tokenizers/gemma/encode",
  12: "/api/tokenizers/llama3/encode",
  3: "/api/tokenizers/llama/encode",
  7: "/api/tokenizers/mistral/encode",
  2: "/api/tokenizers/openai/encode",
  11: "/api/tokenizers/claude/encode"
};
function J0(t) {
  const [r, i] = X.useState(null), [s, l] = X.useState(!1), u = X.useRef(null), f = X.useRef("");
  return X.useEffect(() => {
    if (!t) {
      i(0);
      return;
    }
    return u.current && clearTimeout(u.current), u.current = window.setTimeout(async () => {
      if (t === f.current) return;
      l(!0);
      const p = wt.getSettings().preferredTokenizer || 13, d = Cy[p] || Cy[13];
      try {
        f.current = t;
        const v = await fetch(d, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: t })
        });
        if (!v.ok) throw new Error("API error");
        const g = await v.json();
        let _ = 0;
        g && g.ids && Array.isArray(g.ids) ? _ = g.ids.length : Array.isArray(g) ? _ = g.length : typeof g.token_count == "number" ? _ = g.token_count : _ = Math.ceil(t.length / 3.35), i(_);
      } catch (v) {
        console.warn("Token calculation failed, using guesstimate", v), i(Math.ceil(t.length / 3.35));
      } finally {
        l(!1);
      }
    }, 1e3), () => {
      u.current && clearTimeout(u.current);
    };
  }, [t]), { tokens: r, isCalculating: s };
}
const Ay = ({
  fieldId: t,
  label: r,
  value: i,
  prompt: s,
  large: l = !1,
  rows: u = 3,
  promptEnabled: f = !0,
  isDraft: p = !1,
  isGenerating: d = !1,
  onValueChange: v,
  onPromptChange: g,
  onGenerate: _,
  onContinue: m,
  onClear: y,
  onCompare: h,
  onDelete: x,
  onOpenReviseSessions: C
}) => {
  const { tokens: T, isCalculating: w } = J0(i);
  return /* @__PURE__ */ S.jsxs("div", { className: `character-field ${p ? "draft-field" : "core-field"}`, children: [
    /* @__PURE__ */ S.jsx("label", { children: r }),
    /* @__PURE__ */ S.jsxs("div", { className: `field-container ${l ? "large-field" : ""}`, children: [
      /* @__PURE__ */ S.jsx(en, { value: i, onChange: (k) => v(t, k.target.value), rows: u }),
      /* @__PURE__ */ S.jsxs("div", { className: "field-actions", children: [
        /* @__PURE__ */ S.jsx(he, { onClick: () => _(t), disabled: d, title: "Generate field content", children: d ? /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }) }),
        /* @__PURE__ */ S.jsx(he, { onClick: () => m(t), disabled: d, title: "Continue from current content", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
        /* @__PURE__ */ S.jsx(he, { onClick: () => y(t), title: "Clear field content", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-eraser" }) }),
        C && !p && /* @__PURE__ */ S.jsx(he, { onClick: () => C(t), title: "Revise with AI chat", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-comments" }) }),
        !p && h && /* @__PURE__ */ S.jsx(he, { onClick: () => h(t), title: "Compare with loaded character", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-code-compare" }) }),
        p && x && /* @__PURE__ */ S.jsx(he, { onClick: () => x(t), title: "Delete Draft Field", className: "danger_button", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash-can" }) }),
        /* @__PURE__ */ S.jsx("div", { className: "token-counter", style: {
          fontSize: "0.8em",
          opacity: 0.5,
          marginLeft: "auto",
          alignSelf: "center",
          fontFamily: "monospace"
        }, children: w ? /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ S.jsx(S.Fragment, { children: T !== null ? `${T} tokens` : "" }) })
      ] })
    ] }),
    f && /* @__PURE__ */ S.jsx("div", { className: "field-prompt-container", children: /* @__PURE__ */ S.jsx(
      en,
      {
        value: s,
        onChange: (k) => g(t, k.target.value),
        placeholder: `Enter additional prompt for ${r.toLowerCase()}...`,
        rows: 3
      }
    ) })
  ] });
}, GE = SillyTavern.getContext(), VE = ({
  greetings: t,
  onGreetingsChange: r,
  onGenerate: i,
  onContinue: s,
  onCompare: l,
  isGenerating: u
}) => {
  const [f, p] = X.useState(0), d = t[f], { tokens: v, isCalculating: g } = J0(d?.value ?? "");
  X.useEffect(() => {
    f >= t.length && t.length > 0 ? p(t.length - 1) : t.length === 0 && p(0);
  }, [t, f]);
  const _ = () => {
    const h = [...t, { value: "", prompt: "" }];
    r(h), p(h.length - 1);
  }, m = async () => {
    if (t.length === 0) return;
    if (await GE.Popup.show.confirm("Delete Greeting", "Are you sure?")) {
      const x = t.filter((C, T) => T !== f);
      r(x);
    }
  }, y = (h, x, C) => {
    const T = [...t];
    T[h][x] = C, r(T);
  };
  return /* @__PURE__ */ S.jsxs("div", { className: "character-field alternate-greetings-field", children: [
    /* @__PURE__ */ S.jsx("label", { children: "Alternate Greetings" }),
    /* @__PURE__ */ S.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }, children: [
      /* @__PURE__ */ S.jsx(
        "div",
        {
          className: "alternate-greetings-tabs",
          style: { display: "flex", flexWrap: "wrap", gap: "5px", flexGrow: 1 },
          children: t.map((h, x) => /* @__PURE__ */ S.jsxs(
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
      /* @__PURE__ */ S.jsxs(he, { onClick: _, title: "Add a new alternate greeting", children: [
        /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-plus" }),
        " Add"
      ] })
    ] }),
    t.length === 0 ? /* @__PURE__ */ S.jsx("p", { className: "subtle", children: 'No alternate greetings defined. Click "Add" to create one.' }) : /* @__PURE__ */ S.jsxs("div", { className: "field-container", children: [
      /* @__PURE__ */ S.jsxs("div", { style: { flexGrow: 1 }, children: [
        /* @__PURE__ */ S.jsx(
          en,
          {
            value: d?.value ?? "",
            onChange: (h) => y(f, "value", h.target.value),
            rows: 8,
            placeholder: "Enter greeting content..."
          }
        ),
        /* @__PURE__ */ S.jsx("div", { className: "field-prompt-container", style: { marginTop: "5px" }, children: /* @__PURE__ */ S.jsx(
          en,
          {
            value: d?.prompt ?? "",
            onChange: (h) => y(f, "prompt", h.target.value),
            rows: 2,
            placeholder: "Enter specific prompt for this greeting..."
          }
        ) })
      ] }),
      /* @__PURE__ */ S.jsxs("div", { className: "field-actions", children: [
        /* @__PURE__ */ S.jsx(he, { onClick: () => i(f), disabled: u, title: "Generate greeting", children: u ? /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }) }),
        /* @__PURE__ */ S.jsx(he, { onClick: () => s(f), disabled: u, title: "Continue greeting", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
        /* @__PURE__ */ S.jsx(
          he,
          {
            onClick: () => y(f, "value", ""),
            disabled: u,
            title: "Clear greeting",
            children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-eraser" })
          }
        ),
        /* @__PURE__ */ S.jsx(he, { onClick: () => l(f), disabled: u, title: "Compare greeting", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-code-compare" }) }),
        /* @__PURE__ */ S.jsx(
          he,
          {
            onClick: m,
            disabled: u,
            title: "Delete greeting",
            className: "danger_button",
            children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash-can" })
          }
        ),
        /* @__PURE__ */ S.jsx("div", { className: "token-counter", style: {
          fontSize: "0.8em",
          opacity: 0.5,
          marginLeft: "auto",
          alignSelf: "center",
          fontFamily: "monospace"
        }, children: g ? /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ S.jsx(S.Fragment, { children: v !== null ? `${v} tokens` : "" }) })
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
      var u = this, f, p = function(E) {
        if (E = u.postProcess(E, s), l) {
          setTimeout(function() {
            l(E);
          }, 0);
          return;
        } else
          return E;
      }, d = i.length, v = r.length, g = 1, _ = d + v;
      s.maxEditLength != null && (_ = Math.min(_, s.maxEditLength));
      var m = (f = s.timeout) !== null && f !== void 0 ? f : 1 / 0, y = Date.now() + m, h = [{ oldPos: -1, lastComponent: void 0 }], x = this.extractCommon(h[0], i, r, 0, s);
      if (h[0].oldPos + 1 >= v && x + 1 >= d)
        return p(this.buildValues(h[0].lastComponent, i, r));
      var C = -1 / 0, T = 1 / 0, w = function() {
        for (var E = Math.max(C, -g); E <= Math.min(T, g); E += 2) {
          var N = void 0, M = h[E - 1], j = h[E + 1];
          M && (h[E - 1] = void 0);
          var U = !1;
          if (j) {
            var G = j.oldPos - E;
            U = j && 0 <= G && G < d;
          }
          var P = M && M.oldPos + 1 < v;
          if (!U && !P) {
            h[E] = void 0;
            continue;
          }
          if (!P || U && M.oldPos < j.oldPos ? N = u.addToPath(j, !0, !1, 0, s) : N = u.addToPath(M, !1, !0, 1, s), x = u.extractCommon(N, i, r, E, s), N.oldPos + 1 >= v && x + 1 >= d)
            return p(u.buildValues(N.lastComponent, i, r)) || !0;
          h[E] = N, N.oldPos + 1 >= v && (T = Math.min(T, E - 1)), x + 1 >= d && (C = Math.max(C, E + 1));
        }
        g++;
      };
      if (l)
        (function E() {
          setTimeout(function() {
            if (g > _ || Date.now() > y)
              return l(void 0);
            w() || E();
          }, 0);
        })();
      else
        for (; g <= _ && Date.now() <= y; ) {
          var k = w();
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
      for (var f = i.length, p = s.length, d = r.oldPos, v = d - l, g = 0; v + 1 < f && d + 1 < p && this.equals(s[d + 1], i[v + 1], u); )
        v++, d++, g++, u.oneChangePerToken && (r.lastComponent = { count: 1, previousComponent: r.lastComponent, added: !1, removed: !1 });
      return g && !u.oneChangePerToken && (r.lastComponent = { count: g, previousComponent: r.lastComponent, added: !1, removed: !1 }), r.oldPos = d, v;
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
      for (var f = l.length, p = 0, d = 0, v = 0; p < f; p++) {
        var g = l[p];
        if (g.removed)
          g.value = this.join(s.slice(v, v + g.count)), v += g.count;
        else {
          if (!g.added && this.useLongestToken) {
            var _ = i.slice(d, d + g.count);
            _ = _.map(function(m, y) {
              var h = s[v + y];
              return h.length > m.length ? h : m;
            }), g.value = this.join(_);
          } else
            g.value = this.join(i.slice(d, d + g.count));
          d += g.count, g.added || (v += g.count);
        }
      }
      return l;
    }, t;
  })()
), YE = /* @__PURE__ */ (function() {
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
})(), XE = (
  /** @class */
  (function(t) {
    YE(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r;
  })(sa)
);
new XE();
function Ny(t, r) {
  var i;
  for (i = 0; i < t.length && i < r.length; i++)
    if (t[i] != r[i])
      return t.slice(0, i);
  return t.slice(0, i);
}
function Ty(t, r) {
  var i;
  if (!t || !r || t[t.length - 1] != r[r.length - 1])
    return "";
  for (i = 0; i < t.length && i < r.length; i++)
    if (t[t.length - (i + 1)] != r[r.length - (i + 1)])
      return t.slice(-i);
  return t.slice(-i);
}
function Ld(t, r, i) {
  if (t.slice(0, r.length) != r)
    throw Error("string ".concat(JSON.stringify(t), " doesn't start with prefix ").concat(JSON.stringify(r), "; this is a bug"));
  return i + t.slice(r.length);
}
function Id(t, r, i) {
  if (!r)
    return t + i;
  if (t.slice(-r.length) != r)
    throw Error("string ".concat(JSON.stringify(t), " doesn't end with suffix ").concat(JSON.stringify(r), "; this is a bug"));
  return t.slice(0, -r.length) + i;
}
function Vs(t, r) {
  return Ld(t, r, "");
}
function tu(t, r) {
  return Id(t, r, "");
}
function Oy(t, r) {
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
var Q0 = /* @__PURE__ */ (function() {
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
})(), Su = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", JE = new RegExp("[".concat(Su, "]+|\\s+|[^").concat(Su, "]"), "ug"), QE = (
  /** @class */
  (function(t) {
    Q0(r, t);
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
        l = i.match(JE) || [];
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
        p.added ? u = p : p.removed ? f = p : ((u || f) && ky(l, f, u, p), l = p, u = null, f = null);
      }), (u || f) && ky(l, f, u, null), i;
    }, r;
  })(sa)
), KE = new QE();
function K0(t, r, i) {
  return KE.diff(t, r, i);
}
function ky(t, r, i, s) {
  if (r && i) {
    var l = ea(r.value), u = Ys(r.value), f = ea(i.value), p = Ys(i.value);
    if (t) {
      var d = Ny(l, f);
      t.value = Id(t.value, f, d), r.value = Vs(r.value, d), i.value = Vs(i.value, d);
    }
    if (s) {
      var v = Ty(u, p);
      s.value = Ld(s.value, p, v), r.value = tu(r.value, v), i.value = tu(i.value, v);
    }
  } else if (i) {
    if (t) {
      var g = ea(i.value);
      i.value = i.value.substring(g.length);
    }
    if (s) {
      var g = ea(s.value);
      s.value = s.value.substring(g.length);
    }
  } else if (t && s) {
    var _ = ea(s.value), m = ea(r.value), y = Ys(r.value), h = Ny(_, m);
    r.value = Vs(r.value, h);
    var x = Ty(Vs(_, h), y);
    r.value = tu(r.value, x), s.value = Ld(s.value, _, x), t.value = Id(t.value, _, _.slice(0, _.length - x.length));
  } else if (s) {
    var C = ea(s.value), T = Ys(r.value), w = Oy(T, C);
    r.value = tu(r.value, w);
  } else if (t) {
    var k = Ys(t.value), E = ea(r.value), w = Oy(k, E);
    r.value = Vs(r.value, w);
  }
}
var WE = (
  /** @class */
  (function(t) {
    Q0(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      var s = new RegExp("(\\r?\\n)|[".concat(Su, "]+|[^\\S\\n\\r]+|[^").concat(Su, "]"), "ug");
      return i.match(s) || [];
    }, r;
  })(sa)
);
new WE();
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
      var i = t !== null && t.apply(this, arguments) || this;
      return i.tokenize = W0, i;
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
new tw();
function W0(t, r) {
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
      return i.split(new RegExp("(?<=[.!?])(\\s+|$)"));
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
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      return i.split(/([{}:;,]|\s+)/);
    }, r;
  })(sa)
);
new iw();
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
      var i = t !== null && t.apply(this, arguments) || this;
      return i.tokenize = W0, i;
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
      return typeof i == "string" ? i : JSON.stringify(Pd(i, null, null, f), null, "  ");
    }, r.prototype.equals = function(i, s, l) {
      return t.prototype.equals.call(this, i.replace(/,([\r\n])/g, "$1"), s.replace(/,([\r\n])/g, "$1"), l);
    }, r;
  })(sa)
);
new ow();
function Pd(t, r, i, s, l) {
  r = r || [], i = i || [], s && (t = s(l === void 0 ? "" : l, t));
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
    var p = [], d;
    for (d in t)
      Object.prototype.hasOwnProperty.call(t, d) && p.push(d);
    for (p.sort(), u = 0; u < p.length; u += 1)
      d = p[u], f[d] = Pd(t[d], r, i, s, d);
    r.pop(), i.pop();
  } else
    f = t;
  return f;
}
var lw = /* @__PURE__ */ (function() {
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
})(), uw = (
  /** @class */
  (function(t) {
    lw(r, t);
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
new uw();
const cw = ({ originalContent: t, newContent: r, fieldName: i }) => {
  const s = X.useMemo(() => {
    const l = K0(t, r);
    let u = "", f = "";
    return l.forEach((p) => {
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
  function s(p, d) {
    var v;
    Object.defineProperty(p, "_zod", {
      value: p._zod ?? {},
      enumerable: !1
    }), (v = p._zod).traits ?? (v.traits = /* @__PURE__ */ new Set()), p._zod.traits.add(t), r(p, d);
    for (const g in f.prototype)
      g in p || Object.defineProperty(p, g, { value: f.prototype[g].bind(p) });
    p._zod.constr = f, p._zod.def = d;
  }
  const l = i?.Parent ?? Object;
  class u extends l {
  }
  Object.defineProperty(u, "name", { value: t });
  function f(p) {
    var d;
    const v = i?.Parent ? new u() : this;
    s(v, p), (d = v._zod).deferred ?? (d.deferred = []);
    for (const g of v._zod.deferred)
      g();
    return v;
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
class e1 extends Error {
  constructor(r) {
    super(`Encountered unidirectional transform during encode: ${r}`), this.name = "ZodEncodeError";
  }
}
const t1 = {};
function za(t) {
  return t1;
}
function n1(t) {
  const r = Object.values(t).filter((s) => typeof s == "number");
  return Object.entries(t).filter(([s, l]) => r.indexOf(+s) === -1).map(([s, l]) => l);
}
function Bd(t, r) {
  return typeof r == "bigint" ? r.toString() : r;
}
function ah(t) {
  return {
    get value() {
      {
        const r = t();
        return Object.defineProperty(this, "value", { value: r }), r;
      }
    }
  };
}
function ih(t) {
  return t == null;
}
function sh(t) {
  const r = t.startsWith("^") ? 1 : 0, i = t.endsWith("$") ? t.length - 1 : t.length;
  return t.slice(r, i);
}
function fw(t, r) {
  const i = (t.toString().split(".")[1] || "").length, s = r.toString();
  let l = (s.split(".")[1] || "").length;
  if (l === 0 && /\d?e-\d?/.test(s)) {
    const d = s.match(/\d?e-(\d?)/);
    d?.[1] && (l = Number.parseInt(d[1]));
  }
  const u = i > l ? i : l, f = Number.parseInt(t.toFixed(u).replace(".", "")), p = Number.parseInt(r.toFixed(u).replace(".", ""));
  return f % p / 10 ** u;
}
const My = Symbol("evaluating");
function ut(t, r, i) {
  let s;
  Object.defineProperty(t, r, {
    get() {
      if (s !== My)
        return s === void 0 && (s = My, s = i()), s;
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
function jy(t) {
  return JSON.stringify(t);
}
const r1 = "captureStackTrace" in Error ? Error.captureStackTrace : (...t) => {
};
function xu(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}
const dw = ah(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const t = Function;
    return new t(""), !0;
  } catch {
    return !1;
  }
});
function ao(t) {
  if (xu(t) === !1)
    return !1;
  const r = t.constructor;
  if (r === void 0)
    return !0;
  const i = r.prototype;
  return !(xu(i) === !1 || Object.prototype.hasOwnProperty.call(i, "isPrototypeOf") === !1);
}
function a1(t) {
  return ao(t) ? { ...t } : Array.isArray(t) ? [...t] : t;
}
const hw = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
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
function pw(t) {
  return Object.keys(t).filter((r) => t[r]._zod.optin === "optional" && t[r]._zod.optout === "optional");
}
const mw = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function gw(t, r) {
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
function vw(t, r) {
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
function yw(t, r) {
  if (!ao(r))
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
function bw(t, r) {
  if (!ao(r))
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
function _w(t, r) {
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
function Sw(t, r, i) {
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
function xw(t, r, i) {
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
function i1(t, r) {
  return r.map((i) => {
    var s;
    return (s = i).path ?? (s.path = []), i.path.unshift(t), i;
  });
}
function nu(t) {
  return typeof t == "string" ? t : t?.message;
}
function La(t, r, i) {
  const s = { ...t, path: t.path ?? [] };
  if (!t.message) {
    const l = nu(t.inst?._zod.def?.error?.(t)) ?? nu(r?.error?.(t)) ?? nu(i.customError?.(t)) ?? nu(i.localeError?.(t)) ?? "Invalid input";
    s.message = l;
  }
  return delete s.inst, delete s.continue, r?.reportInput || delete s.input, s;
}
function oh(t) {
  return Array.isArray(t) ? "array" : typeof t == "string" ? "string" : "unknown";
}
function io(...t) {
  const [r, i, s] = t;
  return typeof r == "string" ? {
    message: r,
    code: "custom",
    input: i,
    inst: s
  } : { ...r };
}
const s1 = (t, r) => {
  t.name = "$ZodError", Object.defineProperty(t, "_zod", {
    value: t._zod,
    enumerable: !1
  }), Object.defineProperty(t, "issues", {
    value: r,
    enumerable: !1
  }), t.message = JSON.stringify(r, Bd, 2), Object.defineProperty(t, "toString", {
    value: () => t.message,
    enumerable: !1
  });
}, o1 = ee("$ZodError", s1), l1 = ee("$ZodError", s1, { Parent: Error });
function Ew(t, r = (i) => i.message) {
  const i = {}, s = [];
  for (const l of t.issues)
    l.path.length > 0 ? (i[l.path[0]] = i[l.path[0]] || [], i[l.path[0]].push(r(l))) : s.push(r(l));
  return { formErrors: s, fieldErrors: i };
}
function ww(t, r = (i) => i.message) {
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
const lh = (t) => (r, i, s, l) => {
  const u = s ? Object.assign(s, { async: !1 }) : { async: !1 }, f = r._zod.run({ value: i, issues: [] }, u);
  if (f instanceof Promise)
    throw new Ii();
  if (f.issues.length) {
    const p = new (l?.Err ?? t)(f.issues.map((d) => La(d, u, za())));
    throw r1(p, l?.callee), p;
  }
  return f.value;
}, uh = (t) => async (r, i, s, l) => {
  const u = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let f = r._zod.run({ value: i, issues: [] }, u);
  if (f instanceof Promise && (f = await f), f.issues.length) {
    const p = new (l?.Err ?? t)(f.issues.map((d) => La(d, u, za())));
    throw r1(p, l?.callee), p;
  }
  return f.value;
}, Tu = (t) => (r, i, s) => {
  const l = s ? { ...s, async: !1 } : { async: !1 }, u = r._zod.run({ value: i, issues: [] }, l);
  if (u instanceof Promise)
    throw new Ii();
  return u.issues.length ? {
    success: !1,
    error: new (t ?? o1)(u.issues.map((f) => La(f, l, za())))
  } : { success: !0, data: u.value };
}, Cw = /* @__PURE__ */ Tu(l1), Ou = (t) => async (r, i, s) => {
  const l = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let u = r._zod.run({ value: i, issues: [] }, l);
  return u instanceof Promise && (u = await u), u.issues.length ? {
    success: !1,
    error: new t(u.issues.map((f) => La(f, l, za())))
  } : { success: !0, data: u.value };
}, Aw = /* @__PURE__ */ Ou(l1), Nw = (t) => (r, i, s) => {
  const l = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return lh(t)(r, i, l);
}, Tw = (t) => (r, i, s) => lh(t)(r, i, s), Ow = (t) => async (r, i, s) => {
  const l = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return uh(t)(r, i, l);
}, kw = (t) => async (r, i, s) => uh(t)(r, i, s), Mw = (t) => (r, i, s) => {
  const l = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return Tu(t)(r, i, l);
}, jw = (t) => (r, i, s) => Tu(t)(r, i, s), Dw = (t) => async (r, i, s) => {
  const l = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return Ou(t)(r, i, l);
}, Rw = (t) => async (r, i, s) => Ou(t)(r, i, s), zw = /^[cC][^\s-]{8,}$/, Lw = /^[0-9a-z]+$/, Iw = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Pw = /^[0-9a-vA-V]{20}$/, Bw = /^[A-Za-z0-9]{27}$/, Uw = /^[a-zA-Z0-9_-]{21}$/, Hw = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, qw = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Dy = (t) => t ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Fw = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Zw = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Gw() {
  return new RegExp(Zw, "u");
}
const Vw = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Yw = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Xw = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, $w = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Jw = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, u1 = /^[A-Za-z0-9_-]*$/, Qw = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, Kw = /^\+(?:[0-9]){6,14}[0-9]$/, c1 = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Ww = /* @__PURE__ */ new RegExp(`^${c1}$`);
function f1(t) {
  const r = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof t.precision == "number" ? t.precision === -1 ? `${r}` : t.precision === 0 ? `${r}:[0-5]\\d` : `${r}:[0-5]\\d\\.\\d{${t.precision}}` : `${r}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function eC(t) {
  return new RegExp(`^${f1(t)}$`);
}
function tC(t) {
  const r = f1({ precision: t.precision }), i = ["Z"];
  t.local && i.push(""), t.offset && i.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const s = `${r}(?:${i.join("|")})`;
  return new RegExp(`^${c1}T(?:${s})$`);
}
const nC = (t) => {
  const r = t ? `[\\s\\S]{${t?.minimum ?? 0},${t?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${r}$`);
}, rC = /^-?\d+$/, aC = /^-?\d+(?:\.\d+)?/, iC = /^[^A-Z]*$/, sC = /^[^a-z]*$/, pn = /* @__PURE__ */ ee("$ZodCheck", (t, r) => {
  var i;
  t._zod ?? (t._zod = {}), t._zod.def = r, (i = t._zod).onattach ?? (i.onattach = []);
}), d1 = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, h1 = /* @__PURE__ */ ee("$ZodCheckLessThan", (t, r) => {
  pn.init(t, r);
  const i = d1[typeof r.value];
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
}), p1 = /* @__PURE__ */ ee("$ZodCheckGreaterThan", (t, r) => {
  pn.init(t, r);
  const i = d1[typeof r.value];
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
}), oC = /* @__PURE__ */ ee("$ZodCheckMultipleOf", (t, r) => {
  pn.init(t, r), t._zod.onattach.push((i) => {
    var s;
    (s = i._zod.bag).multipleOf ?? (s.multipleOf = r.value);
  }), t._zod.check = (i) => {
    if (typeof i.value != typeof r.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof i.value == "bigint" ? i.value % r.value === BigInt(0) : fw(i.value, r.value) === 0) || i.issues.push({
      origin: typeof i.value,
      code: "not_multiple_of",
      divisor: r.value,
      input: i.value,
      inst: t,
      continue: !r.abort
    });
  };
}), lC = /* @__PURE__ */ ee("$ZodCheckNumberFormat", (t, r) => {
  pn.init(t, r), r.format = r.format || "float64";
  const i = r.format?.includes("int"), s = i ? "int" : "number", [l, u] = mw[r.format];
  t._zod.onattach.push((f) => {
    const p = f._zod.bag;
    p.format = r.format, p.minimum = l, p.maximum = u, i && (p.pattern = rC);
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
}), uC = /* @__PURE__ */ ee("$ZodCheckMaxLength", (t, r) => {
  var i;
  pn.init(t, r), (i = t._zod.def).when ?? (i.when = (s) => {
    const l = s.value;
    return !ih(l) && l.length !== void 0;
  }), t._zod.onattach.push((s) => {
    const l = s._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    r.maximum < l && (s._zod.bag.maximum = r.maximum);
  }), t._zod.check = (s) => {
    const l = s.value;
    if (l.length <= r.maximum)
      return;
    const f = oh(l);
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
}), cC = /* @__PURE__ */ ee("$ZodCheckMinLength", (t, r) => {
  var i;
  pn.init(t, r), (i = t._zod.def).when ?? (i.when = (s) => {
    const l = s.value;
    return !ih(l) && l.length !== void 0;
  }), t._zod.onattach.push((s) => {
    const l = s._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    r.minimum > l && (s._zod.bag.minimum = r.minimum);
  }), t._zod.check = (s) => {
    const l = s.value;
    if (l.length >= r.minimum)
      return;
    const f = oh(l);
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
}), fC = /* @__PURE__ */ ee("$ZodCheckLengthEquals", (t, r) => {
  var i;
  pn.init(t, r), (i = t._zod.def).when ?? (i.when = (s) => {
    const l = s.value;
    return !ih(l) && l.length !== void 0;
  }), t._zod.onattach.push((s) => {
    const l = s._zod.bag;
    l.minimum = r.length, l.maximum = r.length, l.length = r.length;
  }), t._zod.check = (s) => {
    const l = s.value, u = l.length;
    if (u === r.length)
      return;
    const f = oh(l), p = u > r.length;
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
}), ku = /* @__PURE__ */ ee("$ZodCheckStringFormat", (t, r) => {
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
}), dC = /* @__PURE__ */ ee("$ZodCheckRegex", (t, r) => {
  ku.init(t, r), t._zod.check = (i) => {
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
}), hC = /* @__PURE__ */ ee("$ZodCheckLowerCase", (t, r) => {
  r.pattern ?? (r.pattern = iC), ku.init(t, r);
}), pC = /* @__PURE__ */ ee("$ZodCheckUpperCase", (t, r) => {
  r.pattern ?? (r.pattern = sC), ku.init(t, r);
}), mC = /* @__PURE__ */ ee("$ZodCheckIncludes", (t, r) => {
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
}), gC = /* @__PURE__ */ ee("$ZodCheckStartsWith", (t, r) => {
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
}), vC = /* @__PURE__ */ ee("$ZodCheckEndsWith", (t, r) => {
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
}), yC = /* @__PURE__ */ ee("$ZodCheckOverwrite", (t, r) => {
  pn.init(t, r), t._zod.check = (i) => {
    i.value = r.tx(i.value);
  };
});
class bC {
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
const _C = {
  major: 4,
  minor: 1,
  patch: 12
}, Ot = /* @__PURE__ */ ee("$ZodType", (t, r) => {
  var i;
  t ?? (t = {}), t._zod.def = r, t._zod.bag = t._zod.bag || {}, t._zod.version = _C;
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
      let v = Ri(f), g;
      for (const _ of p) {
        if (_._zod.def.when) {
          if (!_._zod.def.when(f))
            continue;
        } else if (v)
          continue;
        const m = f.issues.length, y = _._zod.check(f);
        if (y instanceof Promise && d?.async === !1)
          throw new Ii();
        if (g || y instanceof Promise)
          g = (g ?? Promise.resolve()).then(async () => {
            await y, f.issues.length !== m && (v || (v = Ri(f, m)));
          });
        else {
          if (f.issues.length === m)
            continue;
          v || (v = Ri(f, m));
        }
      }
      return g ? g.then(() => f) : f;
    }, u = (f, p, d) => {
      if (Ri(f))
        return f.aborted = !0, f;
      const v = l(p, s, d);
      if (v instanceof Promise) {
        if (d.async === !1)
          throw new Ii();
        return v.then((g) => t._zod.parse(g, d));
      }
      return t._zod.parse(v, d);
    };
    t._zod.run = (f, p) => {
      if (p.skipChecks)
        return t._zod.parse(f, p);
      if (p.direction === "backward") {
        const v = t._zod.parse({ value: f.value, issues: [] }, { ...p, skipChecks: !0 });
        return v instanceof Promise ? v.then((g) => u(g, f, p)) : u(v, f, p);
      }
      const d = t._zod.parse(f, p);
      if (d instanceof Promise) {
        if (p.async === !1)
          throw new Ii();
        return d.then((v) => l(v, s, p));
      }
      return l(d, s, p);
    };
  }
  t["~standard"] = {
    validate: (l) => {
      try {
        const u = Cw(t, l);
        return u.success ? { value: u.data } : { issues: u.error?.issues };
      } catch {
        return Aw(t, l).then((f) => f.success ? { value: f.data } : { issues: f.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), ch = /* @__PURE__ */ ee("$ZodString", (t, r) => {
  Ot.init(t, r), t._zod.pattern = [...t?._zod.bag?.patterns ?? []].pop() ?? nC(t._zod.bag), t._zod.parse = (i, s) => {
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
  ku.init(t, r), ch.init(t, r);
}), SC = /* @__PURE__ */ ee("$ZodGUID", (t, r) => {
  r.pattern ?? (r.pattern = qw), ht.init(t, r);
}), xC = /* @__PURE__ */ ee("$ZodUUID", (t, r) => {
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
  ht.init(t, r);
}), EC = /* @__PURE__ */ ee("$ZodEmail", (t, r) => {
  r.pattern ?? (r.pattern = Fw), ht.init(t, r);
}), wC = /* @__PURE__ */ ee("$ZodURL", (t, r) => {
  ht.init(t, r), t._zod.check = (i) => {
    try {
      const s = i.value.trim(), l = new URL(s);
      r.hostname && (r.hostname.lastIndex = 0, r.hostname.test(l.hostname) || i.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: Qw.source,
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
}), CC = /* @__PURE__ */ ee("$ZodEmoji", (t, r) => {
  r.pattern ?? (r.pattern = Gw()), ht.init(t, r);
}), AC = /* @__PURE__ */ ee("$ZodNanoID", (t, r) => {
  r.pattern ?? (r.pattern = Uw), ht.init(t, r);
}), NC = /* @__PURE__ */ ee("$ZodCUID", (t, r) => {
  r.pattern ?? (r.pattern = zw), ht.init(t, r);
}), TC = /* @__PURE__ */ ee("$ZodCUID2", (t, r) => {
  r.pattern ?? (r.pattern = Lw), ht.init(t, r);
}), OC = /* @__PURE__ */ ee("$ZodULID", (t, r) => {
  r.pattern ?? (r.pattern = Iw), ht.init(t, r);
}), kC = /* @__PURE__ */ ee("$ZodXID", (t, r) => {
  r.pattern ?? (r.pattern = Pw), ht.init(t, r);
}), MC = /* @__PURE__ */ ee("$ZodKSUID", (t, r) => {
  r.pattern ?? (r.pattern = Bw), ht.init(t, r);
}), jC = /* @__PURE__ */ ee("$ZodISODateTime", (t, r) => {
  r.pattern ?? (r.pattern = tC(r)), ht.init(t, r);
}), DC = /* @__PURE__ */ ee("$ZodISODate", (t, r) => {
  r.pattern ?? (r.pattern = Ww), ht.init(t, r);
}), RC = /* @__PURE__ */ ee("$ZodISOTime", (t, r) => {
  r.pattern ?? (r.pattern = eC(r)), ht.init(t, r);
}), zC = /* @__PURE__ */ ee("$ZodISODuration", (t, r) => {
  r.pattern ?? (r.pattern = Hw), ht.init(t, r);
}), LC = /* @__PURE__ */ ee("$ZodIPv4", (t, r) => {
  r.pattern ?? (r.pattern = Vw), ht.init(t, r), t._zod.onattach.push((i) => {
    const s = i._zod.bag;
    s.format = "ipv4";
  });
}), IC = /* @__PURE__ */ ee("$ZodIPv6", (t, r) => {
  r.pattern ?? (r.pattern = Yw), ht.init(t, r), t._zod.onattach.push((i) => {
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
}), PC = /* @__PURE__ */ ee("$ZodCIDRv4", (t, r) => {
  r.pattern ?? (r.pattern = Xw), ht.init(t, r);
}), BC = /* @__PURE__ */ ee("$ZodCIDRv6", (t, r) => {
  r.pattern ?? (r.pattern = $w), ht.init(t, r), t._zod.check = (i) => {
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
function m1(t) {
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
const UC = /* @__PURE__ */ ee("$ZodBase64", (t, r) => {
  r.pattern ?? (r.pattern = Jw), ht.init(t, r), t._zod.onattach.push((i) => {
    i._zod.bag.contentEncoding = "base64";
  }), t._zod.check = (i) => {
    m1(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64",
      input: i.value,
      inst: t,
      continue: !r.abort
    });
  };
});
function HC(t) {
  if (!u1.test(t))
    return !1;
  const r = t.replace(/[-_]/g, (s) => s === "-" ? "+" : "/"), i = r.padEnd(Math.ceil(r.length / 4) * 4, "=");
  return m1(i);
}
const qC = /* @__PURE__ */ ee("$ZodBase64URL", (t, r) => {
  r.pattern ?? (r.pattern = u1), ht.init(t, r), t._zod.onattach.push((i) => {
    i._zod.bag.contentEncoding = "base64url";
  }), t._zod.check = (i) => {
    HC(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: i.value,
      inst: t,
      continue: !r.abort
    });
  };
}), FC = /* @__PURE__ */ ee("$ZodE164", (t, r) => {
  r.pattern ?? (r.pattern = Kw), ht.init(t, r);
});
function ZC(t, r = null) {
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
const GC = /* @__PURE__ */ ee("$ZodJWT", (t, r) => {
  ht.init(t, r), t._zod.check = (i) => {
    ZC(i.value, r.alg) || i.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: i.value,
      inst: t,
      continue: !r.abort
    });
  };
}), g1 = /* @__PURE__ */ ee("$ZodNumber", (t, r) => {
  Ot.init(t, r), t._zod.pattern = t._zod.bag.pattern ?? aC, t._zod.parse = (i, s) => {
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
}), VC = /* @__PURE__ */ ee("$ZodNumber", (t, r) => {
  lC.init(t, r), g1.init(t, r);
}), YC = /* @__PURE__ */ ee("$ZodUnknown", (t, r) => {
  Ot.init(t, r), t._zod.parse = (i) => i;
}), XC = /* @__PURE__ */ ee("$ZodNever", (t, r) => {
  Ot.init(t, r), t._zod.parse = (i, s) => (i.issues.push({
    expected: "never",
    code: "invalid_type",
    input: i.value,
    inst: t
  }), i);
});
function Ry(t, r, i) {
  t.issues.length && r.issues.push(...i1(i, t.issues)), r.value[i] = t.value;
}
const $C = /* @__PURE__ */ ee("$ZodArray", (t, r) => {
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
      d instanceof Promise ? u.push(d.then((v) => Ry(v, i, f))) : Ry(d, i, f);
    }
    return u.length ? Promise.all(u).then(() => i) : i;
  };
});
function Eu(t, r, i, s) {
  t.issues.length && r.issues.push(...i1(i, t.issues)), t.value === void 0 ? i in s && (r.value[i] = void 0) : r.value[i] = t.value;
}
function v1(t) {
  const r = Object.keys(t.shape);
  for (const s of r)
    if (!t.shape?.[s]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${s}": expected a Zod schema`);
  const i = pw(t.shape);
  return {
    ...t,
    keys: r,
    keySet: new Set(r),
    numKeys: r.length,
    optionalKeys: new Set(i)
  };
}
function y1(t, r, i, s, l, u) {
  const f = [], p = l.keySet, d = l.catchall._zod, v = d.def.type;
  for (const g of Object.keys(r)) {
    if (p.has(g))
      continue;
    if (v === "never") {
      f.push(g);
      continue;
    }
    const _ = d.run({ value: r[g], issues: [] }, s);
    _ instanceof Promise ? t.push(_.then((m) => Eu(m, i, g, r))) : Eu(_, i, g, r);
  }
  return f.length && i.issues.push({
    code: "unrecognized_keys",
    keys: f,
    input: r,
    inst: u
  }), t.length ? Promise.all(t).then(() => i) : i;
}
const JC = /* @__PURE__ */ ee("$ZodObject", (t, r) => {
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
  const s = ah(() => v1(r));
  ut(t._zod, "propValues", () => {
    const p = r.shape, d = {};
    for (const v in p) {
      const g = p[v]._zod;
      if (g.values) {
        d[v] ?? (d[v] = /* @__PURE__ */ new Set());
        for (const _ of g.values)
          d[v].add(_);
      }
    }
    return d;
  });
  const l = xu, u = r.catchall;
  let f;
  t._zod.parse = (p, d) => {
    f ?? (f = s.value);
    const v = p.value;
    if (!l(v))
      return p.issues.push({
        expected: "object",
        code: "invalid_type",
        input: v,
        inst: t
      }), p;
    p.value = {};
    const g = [], _ = f.shape;
    for (const m of f.keys) {
      const h = _[m]._zod.run({ value: v[m], issues: [] }, d);
      h instanceof Promise ? g.push(h.then((x) => Eu(x, p, m, v))) : Eu(h, p, m, v);
    }
    return u ? y1(g, v, p, d, s.value, t) : g.length ? Promise.all(g).then(() => p) : p;
  };
}), QC = /* @__PURE__ */ ee("$ZodObjectJIT", (t, r) => {
  JC.init(t, r);
  const i = t._zod.parse, s = ah(() => v1(r)), l = (m) => {
    const y = new bC(["shape", "payload", "ctx"]), h = s.value, x = (k) => {
      const E = jy(k);
      return `shape[${E}]._zod.run({ value: input[${E}], issues: [] }, ctx)`;
    };
    y.write("const input = payload.value;");
    const C = /* @__PURE__ */ Object.create(null);
    let T = 0;
    for (const k of h.keys)
      C[k] = `key_${T++}`;
    y.write("const newResult = {};");
    for (const k of h.keys) {
      const E = C[k], N = jy(k);
      y.write(`const ${E} = ${x(k)};`), y.write(`
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
    y.write("payload.value = newResult;"), y.write("return payload;");
    const w = y.compile();
    return (k, E) => w(m, k, E);
  };
  let u;
  const f = xu, p = !t1.jitless, v = p && dw.value, g = r.catchall;
  let _;
  t._zod.parse = (m, y) => {
    _ ?? (_ = s.value);
    const h = m.value;
    return f(h) ? p && v && y?.async === !1 && y.jitless !== !0 ? (u || (u = l(r.shape)), m = u(m, y), g ? y1([], h, m, y, _, t) : m) : i(m, y) : (m.issues.push({
      expected: "object",
      code: "invalid_type",
      input: h,
      inst: t
    }), m);
  };
});
function zy(t, r, i, s) {
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
const KC = /* @__PURE__ */ ee("$ZodUnion", (t, r) => {
  Ot.init(t, r), ut(t._zod, "optin", () => r.options.some((l) => l._zod.optin === "optional") ? "optional" : void 0), ut(t._zod, "optout", () => r.options.some((l) => l._zod.optout === "optional") ? "optional" : void 0), ut(t._zod, "values", () => {
    if (r.options.every((l) => l._zod.values))
      return new Set(r.options.flatMap((l) => Array.from(l._zod.values)));
  }), ut(t._zod, "pattern", () => {
    if (r.options.every((l) => l._zod.pattern)) {
      const l = r.options.map((u) => u._zod.pattern);
      return new RegExp(`^(${l.map((u) => sh(u.source)).join("|")})$`);
    }
  });
  const i = r.options.length === 1, s = r.options[0]._zod.run;
  t._zod.parse = (l, u) => {
    if (i)
      return s(l, u);
    let f = !1;
    const p = [];
    for (const d of r.options) {
      const v = d._zod.run({
        value: l.value,
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
    return f ? Promise.all(p).then((d) => zy(d, l, t, u)) : zy(p, l, t, u);
  };
}), WC = /* @__PURE__ */ ee("$ZodIntersection", (t, r) => {
  Ot.init(t, r), t._zod.parse = (i, s) => {
    const l = i.value, u = r.left._zod.run({ value: l, issues: [] }, s), f = r.right._zod.run({ value: l, issues: [] }, s);
    return u instanceof Promise || f instanceof Promise ? Promise.all([u, f]).then(([d, v]) => Ly(i, d, v)) : Ly(i, u, f);
  };
});
function Ud(t, r) {
  if (t === r)
    return { valid: !0, data: t };
  if (t instanceof Date && r instanceof Date && +t == +r)
    return { valid: !0, data: t };
  if (ao(t) && ao(r)) {
    const i = Object.keys(r), s = Object.keys(t).filter((u) => i.indexOf(u) !== -1), l = { ...t, ...r };
    for (const u of s) {
      const f = Ud(t[u], r[u]);
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
      const l = t[s], u = r[s], f = Ud(l, u);
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
function Ly(t, r, i) {
  if (r.issues.length && t.issues.push(...r.issues), i.issues.length && t.issues.push(...i.issues), Ri(t))
    return t;
  const s = Ud(r.value, i.value);
  if (!s.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`);
  return t.value = s.data, t;
}
const e3 = /* @__PURE__ */ ee("$ZodEnum", (t, r) => {
  Ot.init(t, r);
  const i = n1(r.entries), s = new Set(i);
  t._zod.values = s, t._zod.pattern = new RegExp(`^(${i.filter((l) => hw.has(typeof l)).map((l) => typeof l == "string" ? Nu(l) : l.toString()).join("|")})$`), t._zod.parse = (l, u) => {
    const f = l.value;
    return s.has(f) || l.issues.push({
      code: "invalid_value",
      values: i,
      input: f,
      inst: t
    }), l;
  };
}), t3 = /* @__PURE__ */ ee("$ZodTransform", (t, r) => {
  Ot.init(t, r), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      throw new e1(t.constructor.name);
    const l = r.transform(i.value, i);
    if (s.async)
      return (l instanceof Promise ? l : Promise.resolve(l)).then((f) => (i.value = f, i));
    if (l instanceof Promise)
      throw new Ii();
    return i.value = l, i;
  };
});
function Iy(t, r) {
  return t.issues.length && r === void 0 ? { issues: [], value: void 0 } : t;
}
const n3 = /* @__PURE__ */ ee("$ZodOptional", (t, r) => {
  Ot.init(t, r), t._zod.optin = "optional", t._zod.optout = "optional", ut(t._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, void 0]) : void 0), ut(t._zod, "pattern", () => {
    const i = r.innerType._zod.pattern;
    return i ? new RegExp(`^(${sh(i.source)})?$`) : void 0;
  }), t._zod.parse = (i, s) => {
    if (r.innerType._zod.optin === "optional") {
      const l = r.innerType._zod.run(i, s);
      return l instanceof Promise ? l.then((u) => Iy(u, i.value)) : Iy(l, i.value);
    }
    return i.value === void 0 ? i : r.innerType._zod.run(i, s);
  };
}), r3 = /* @__PURE__ */ ee("$ZodNullable", (t, r) => {
  Ot.init(t, r), ut(t._zod, "optin", () => r.innerType._zod.optin), ut(t._zod, "optout", () => r.innerType._zod.optout), ut(t._zod, "pattern", () => {
    const i = r.innerType._zod.pattern;
    return i ? new RegExp(`^(${sh(i.source)}|null)$`) : void 0;
  }), ut(t._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, null]) : void 0), t._zod.parse = (i, s) => i.value === null ? i : r.innerType._zod.run(i, s);
}), a3 = /* @__PURE__ */ ee("$ZodDefault", (t, r) => {
  Ot.init(t, r), t._zod.optin = "optional", ut(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(i, s);
    if (i.value === void 0)
      return i.value = r.defaultValue, i;
    const l = r.innerType._zod.run(i, s);
    return l instanceof Promise ? l.then((u) => Py(u, r)) : Py(l, r);
  };
});
function Py(t, r) {
  return t.value === void 0 && (t.value = r.defaultValue), t;
}
const i3 = /* @__PURE__ */ ee("$ZodPrefault", (t, r) => {
  Ot.init(t, r), t._zod.optin = "optional", ut(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (i, s) => (s.direction === "backward" || i.value === void 0 && (i.value = r.defaultValue), r.innerType._zod.run(i, s));
}), s3 = /* @__PURE__ */ ee("$ZodNonOptional", (t, r) => {
  Ot.init(t, r), ut(t._zod, "values", () => {
    const i = r.innerType._zod.values;
    return i ? new Set([...i].filter((s) => s !== void 0)) : void 0;
  }), t._zod.parse = (i, s) => {
    const l = r.innerType._zod.run(i, s);
    return l instanceof Promise ? l.then((u) => By(u, t)) : By(l, t);
  };
});
function By(t, r) {
  return !t.issues.length && t.value === void 0 && t.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: t.value,
    inst: r
  }), t;
}
const o3 = /* @__PURE__ */ ee("$ZodCatch", (t, r) => {
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
}), l3 = /* @__PURE__ */ ee("$ZodPipe", (t, r) => {
  Ot.init(t, r), ut(t._zod, "values", () => r.in._zod.values), ut(t._zod, "optin", () => r.in._zod.optin), ut(t._zod, "optout", () => r.out._zod.optout), ut(t._zod, "propValues", () => r.in._zod.propValues), t._zod.parse = (i, s) => {
    if (s.direction === "backward") {
      const u = r.out._zod.run(i, s);
      return u instanceof Promise ? u.then((f) => ru(f, r.in, s)) : ru(u, r.in, s);
    }
    const l = r.in._zod.run(i, s);
    return l instanceof Promise ? l.then((u) => ru(u, r.out, s)) : ru(l, r.out, s);
  };
});
function ru(t, r, i) {
  return t.issues.length ? (t.aborted = !0, t) : r._zod.run({ value: t.value, issues: t.issues }, i);
}
const u3 = /* @__PURE__ */ ee("$ZodReadonly", (t, r) => {
  Ot.init(t, r), ut(t._zod, "propValues", () => r.innerType._zod.propValues), ut(t._zod, "values", () => r.innerType._zod.values), ut(t._zod, "optin", () => r.innerType._zod.optin), ut(t._zod, "optout", () => r.innerType._zod.optout), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(i, s);
    const l = r.innerType._zod.run(i, s);
    return l instanceof Promise ? l.then(Uy) : Uy(l);
  };
});
function Uy(t) {
  return t.value = Object.freeze(t.value), t;
}
const c3 = /* @__PURE__ */ ee("$ZodCustom", (t, r) => {
  pn.init(t, r), Ot.init(t, r), t._zod.parse = (i, s) => i, t._zod.check = (i) => {
    const s = i.value, l = r.fn(s);
    if (l instanceof Promise)
      return l.then((u) => Hy(u, i, s, t));
    Hy(l, i, s, t);
  };
});
function Hy(t, r, i, s) {
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
    s._zod.def.params && (l.params = s._zod.def.params), r.issues.push(io(l));
  }
}
class b1 {
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
function f3() {
  return new b1();
}
const Qs = /* @__PURE__ */ f3();
function d3(t, r) {
  return new t({
    type: "string",
    ..._e(r)
  });
}
function h3(t, r) {
  return new t({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function qy(t, r) {
  return new t({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function p3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function m3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ..._e(r)
  });
}
function g3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ..._e(r)
  });
}
function v3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ..._e(r)
  });
}
function y3(t, r) {
  return new t({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function b3(t, r) {
  return new t({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function _3(t, r) {
  return new t({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function S3(t, r) {
  return new t({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function x3(t, r) {
  return new t({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function E3(t, r) {
  return new t({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function w3(t, r) {
  return new t({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function C3(t, r) {
  return new t({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function A3(t, r) {
  return new t({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function N3(t, r) {
  return new t({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function T3(t, r) {
  return new t({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function O3(t, r) {
  return new t({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function k3(t, r) {
  return new t({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function M3(t, r) {
  return new t({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function j3(t, r) {
  return new t({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function D3(t, r) {
  return new t({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function R3(t, r) {
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
function z3(t, r) {
  return new t({
    type: "string",
    format: "date",
    check: "string_format",
    ..._e(r)
  });
}
function L3(t, r) {
  return new t({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ..._e(r)
  });
}
function I3(t, r) {
  return new t({
    type: "string",
    format: "duration",
    check: "string_format",
    ..._e(r)
  });
}
function P3(t, r) {
  return new t({
    type: "number",
    checks: [],
    ..._e(r)
  });
}
function B3(t, r) {
  return new t({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ..._e(r)
  });
}
function U3(t) {
  return new t({
    type: "unknown"
  });
}
function H3(t, r) {
  return new t({
    type: "never",
    ..._e(r)
  });
}
function Fy(t, r) {
  return new h1({
    check: "less_than",
    ..._e(r),
    value: t,
    inclusive: !1
  });
}
function vd(t, r) {
  return new h1({
    check: "less_than",
    ..._e(r),
    value: t,
    inclusive: !0
  });
}
function Zy(t, r) {
  return new p1({
    check: "greater_than",
    ..._e(r),
    value: t,
    inclusive: !1
  });
}
function yd(t, r) {
  return new p1({
    check: "greater_than",
    ..._e(r),
    value: t,
    inclusive: !0
  });
}
function Gy(t, r) {
  return new oC({
    check: "multiple_of",
    ..._e(r),
    value: t
  });
}
function _1(t, r) {
  return new uC({
    check: "max_length",
    ..._e(r),
    maximum: t
  });
}
function wu(t, r) {
  return new cC({
    check: "min_length",
    ..._e(r),
    minimum: t
  });
}
function S1(t, r) {
  return new fC({
    check: "length_equals",
    ..._e(r),
    length: t
  });
}
function q3(t, r) {
  return new dC({
    check: "string_format",
    format: "regex",
    ..._e(r),
    pattern: t
  });
}
function F3(t) {
  return new hC({
    check: "string_format",
    format: "lowercase",
    ..._e(t)
  });
}
function Z3(t) {
  return new pC({
    check: "string_format",
    format: "uppercase",
    ..._e(t)
  });
}
function G3(t, r) {
  return new mC({
    check: "string_format",
    format: "includes",
    ..._e(r),
    includes: t
  });
}
function V3(t, r) {
  return new gC({
    check: "string_format",
    format: "starts_with",
    ..._e(r),
    prefix: t
  });
}
function Y3(t, r) {
  return new vC({
    check: "string_format",
    format: "ends_with",
    ..._e(r),
    suffix: t
  });
}
function uo(t) {
  return new yC({
    check: "overwrite",
    tx: t
  });
}
function X3(t) {
  return uo((r) => r.normalize(t));
}
function $3() {
  return uo((t) => t.trim());
}
function J3() {
  return uo((t) => t.toLowerCase());
}
function Q3() {
  return uo((t) => t.toUpperCase());
}
function K3(t, r, i) {
  return new t({
    type: "array",
    element: r,
    // get element() {
    //   return element;
    // },
    ..._e(i)
  });
}
function W3(t, r, i) {
  return new t({
    type: "custom",
    check: "custom",
    fn: r,
    ..._e(i)
  });
}
function eA(t) {
  const r = tA((i) => (i.addIssue = (s) => {
    if (typeof s == "string")
      i.issues.push(io(s, i.value, r._zod.def));
    else {
      const l = s;
      l.fatal && (l.continue = !1), l.code ?? (l.code = "custom"), l.input ?? (l.input = i.value), l.inst ?? (l.inst = r), l.continue ?? (l.continue = !r._zod.def.abort), i.issues.push(io(l));
    }
  }, t(i.value, i)));
  return r;
}
function tA(t, r) {
  const i = new pn({
    check: "custom",
    ..._e(r)
  });
  return i._zod.check = t, i;
}
class Vy {
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
      const _ = {
        ...i,
        schemaPath: [...i.schemaPath, r],
        path: i.path
      }, m = r._zod.parent;
      if (m)
        p.ref = m, this.process(m, _), this.seen.get(m).isParent = !0;
      else {
        const y = p.schema;
        switch (l.type) {
          case "string": {
            const h = y;
            h.type = "string";
            const { minimum: x, maximum: C, format: T, patterns: w, contentEncoding: k } = r._zod.bag;
            if (typeof x == "number" && (h.minLength = x), typeof C == "number" && (h.maxLength = C), T && (h.format = u[T] ?? T, h.format === "" && delete h.format), k && (h.contentEncoding = k), w && w.size > 0) {
              const E = [...w];
              E.length === 1 ? h.pattern = E[0].source : E.length > 1 && (p.schema.allOf = [
                ...E.map((N) => ({
                  ...this.target === "draft-7" || this.target === "draft-4" || this.target === "openapi-3.0" ? { type: "string" } : {},
                  pattern: N.source
                }))
              ]);
            }
            break;
          }
          case "number": {
            const h = y, { minimum: x, maximum: C, format: T, multipleOf: w, exclusiveMaximum: k, exclusiveMinimum: E } = r._zod.bag;
            typeof T == "string" && T.includes("int") ? h.type = "integer" : h.type = "number", typeof E == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (h.minimum = E, h.exclusiveMinimum = !0) : h.exclusiveMinimum = E), typeof x == "number" && (h.minimum = x, typeof E == "number" && this.target !== "draft-4" && (E >= x ? delete h.minimum : delete h.exclusiveMinimum)), typeof k == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (h.maximum = k, h.exclusiveMaximum = !0) : h.exclusiveMaximum = k), typeof C == "number" && (h.maximum = C, typeof k == "number" && this.target !== "draft-4" && (k <= C ? delete h.maximum : delete h.exclusiveMaximum)), typeof w == "number" && (h.multipleOf = w);
            break;
          }
          case "boolean": {
            const h = y;
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
            const h = y, { minimum: x, maximum: C } = r._zod.bag;
            typeof x == "number" && (h.minItems = x), typeof C == "number" && (h.maxItems = C), h.type = "array", h.items = this.process(l.element, { ..._, path: [..._.path, "items"] });
            break;
          }
          case "object": {
            const h = y;
            h.type = "object", h.properties = {};
            const x = l.shape;
            for (const w in x)
              h.properties[w] = this.process(x[w], {
                ..._,
                path: [..._.path, "properties", w]
              });
            const C = new Set(Object.keys(x)), T = new Set([...C].filter((w) => {
              const k = l.shape[w]._zod;
              return this.io === "input" ? k.optin === void 0 : k.optout === void 0;
            }));
            T.size > 0 && (h.required = Array.from(T)), l.catchall?._zod.def.type === "never" ? h.additionalProperties = !1 : l.catchall ? l.catchall && (h.additionalProperties = this.process(l.catchall, {
              ..._,
              path: [..._.path, "additionalProperties"]
            })) : this.io === "output" && (h.additionalProperties = !1);
            break;
          }
          case "union": {
            const h = y, x = l.options.map((C, T) => this.process(C, {
              ..._,
              path: [..._.path, "anyOf", T]
            }));
            h.anyOf = x;
            break;
          }
          case "intersection": {
            const h = y, x = this.process(l.left, {
              ..._,
              path: [..._.path, "allOf", 0]
            }), C = this.process(l.right, {
              ..._,
              path: [..._.path, "allOf", 1]
            }), T = (k) => "allOf" in k && Object.keys(k).length === 1, w = [
              ...T(x) ? x.allOf : [x],
              ...T(C) ? C.allOf : [C]
            ];
            h.allOf = w;
            break;
          }
          case "tuple": {
            const h = y;
            h.type = "array";
            const x = this.target === "draft-2020-12" ? "prefixItems" : "items", C = this.target === "draft-2020-12" || this.target === "openapi-3.0" ? "items" : "additionalItems", T = l.items.map((N, M) => this.process(N, {
              ..._,
              path: [..._.path, x, M]
            })), w = l.rest ? this.process(l.rest, {
              ..._,
              path: [..._.path, C, ...this.target === "openapi-3.0" ? [l.items.length] : []]
            }) : null;
            this.target === "draft-2020-12" ? (h.prefixItems = T, w && (h.items = w)) : this.target === "openapi-3.0" ? (h.items = {
              anyOf: T
            }, w && h.items.anyOf.push(w), h.minItems = T.length, w || (h.maxItems = T.length)) : (h.items = T, w && (h.additionalItems = w));
            const { minimum: k, maximum: E } = r._zod.bag;
            typeof k == "number" && (h.minItems = k), typeof E == "number" && (h.maxItems = E);
            break;
          }
          case "record": {
            const h = y;
            h.type = "object", (this.target === "draft-7" || this.target === "draft-2020-12") && (h.propertyNames = this.process(l.keyType, {
              ..._,
              path: [..._.path, "propertyNames"]
            })), h.additionalProperties = this.process(l.valueType, {
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
            const h = y, x = n1(l.entries);
            x.every((C) => typeof C == "number") && (h.type = "number"), x.every((C) => typeof C == "string") && (h.type = "string"), h.enum = x;
            break;
          }
          case "literal": {
            const h = y, x = [];
            for (const C of l.values)
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
              h.type = C === null ? "null" : typeof C, this.target === "draft-4" || this.target === "openapi-3.0" ? h.enum = [C] : h.const = C;
            } else
              x.every((C) => typeof C == "number") && (h.type = "number"), x.every((C) => typeof C == "string") && (h.type = "string"), x.every((C) => typeof C == "boolean") && (h.type = "string"), x.every((C) => C === null) && (h.type = "null"), h.enum = x;
            break;
          }
          case "file": {
            const h = y, x = {
              type: "string",
              format: "binary",
              contentEncoding: "binary"
            }, { minimum: C, maximum: T, mime: w } = r._zod.bag;
            C !== void 0 && (x.minLength = C), T !== void 0 && (x.maxLength = T), w ? w.length === 1 ? (x.contentMediaType = w[0], Object.assign(h, x)) : h.anyOf = w.map((k) => ({ ...x, contentMediaType: k })) : Object.assign(h, x);
            break;
          }
          case "transform": {
            if (this.unrepresentable === "throw")
              throw new Error("Transforms cannot be represented in JSON Schema");
            break;
          }
          case "nullable": {
            const h = this.process(l.innerType, _);
            this.target === "openapi-3.0" ? (p.ref = l.innerType, y.nullable = !0) : y.anyOf = [h, { type: "null" }];
            break;
          }
          case "nonoptional": {
            this.process(l.innerType, _), p.ref = l.innerType;
            break;
          }
          case "success": {
            const h = y;
            h.type = "boolean";
            break;
          }
          case "default": {
            this.process(l.innerType, _), p.ref = l.innerType, y.default = JSON.parse(JSON.stringify(l.defaultValue));
            break;
          }
          case "prefault": {
            this.process(l.innerType, _), p.ref = l.innerType, this.io === "input" && (y._prefault = JSON.parse(JSON.stringify(l.defaultValue)));
            break;
          }
          case "catch": {
            this.process(l.innerType, _), p.ref = l.innerType;
            let h;
            try {
              h = l.catchValue(void 0);
            } catch {
              throw new Error("Dynamic catch values are not supported in JSON Schema");
            }
            y.default = h;
            break;
          }
          case "nan": {
            if (this.unrepresentable === "throw")
              throw new Error("NaN cannot be represented in JSON Schema");
            break;
          }
          case "template_literal": {
            const h = y, x = r._zod.pattern;
            if (!x)
              throw new Error("Pattern not found in template literal");
            h.type = "string", h.pattern = x.source;
            break;
          }
          case "pipe": {
            const h = this.io === "input" ? l.in._zod.def.type === "transform" ? l.out : l.in : l.out;
            this.process(h, _), p.ref = h;
            break;
          }
          case "readonly": {
            this.process(l.innerType, _), p.ref = l.innerType, y.readOnly = !0;
            break;
          }
          // passthrough types
          case "promise": {
            this.process(l.innerType, _), p.ref = l.innerType;
            break;
          }
          case "optional": {
            this.process(l.innerType, _), p.ref = l.innerType;
            break;
          }
          case "lazy": {
            const h = r._zod.innerType;
            this.process(h, _), p.ref = h;
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
    return v && Object.assign(p.schema, v), this.io === "input" && Dt(r) && (delete p.schema.examples, delete p.schema.default), this.io === "input" && p.schema._prefault && ((s = p.schema).default ?? (s.default = p.schema._prefault)), delete p.schema._prefault, this.seen.get(r).schema;
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
    const u = (g) => {
      const _ = this.target === "draft-2020-12" ? "$defs" : "definitions";
      if (s.external) {
        const x = s.external.registry.get(g[0])?.id, C = s.external.uri ?? ((w) => w);
        if (x)
          return { ref: C(x) };
        const T = g[1].defId ?? g[1].schema.id ?? `schema${this.counter++}`;
        return g[1].defId = T, { defId: T, ref: `${C("__shared")}#/${_}/${T}` };
      }
      if (g[1] === l)
        return { ref: "#" };
      const y = `#/${_}/`, h = g[1].schema.id ?? `__schema${this.counter++}`;
      return { defId: h, ref: y + h };
    }, f = (g) => {
      if (g[1].schema.$ref)
        return;
      const _ = g[1], { ref: m, defId: y } = u(g);
      _.def = { ..._.schema }, y && (_.defId = y);
      const h = _.schema;
      for (const x in h)
        delete h[x];
      h.$ref = m;
    };
    if (s.cycles === "throw")
      for (const g of this.seen.entries()) {
        const _ = g[1];
        if (_.cycle)
          throw new Error(`Cycle detected: #/${_.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
      }
    for (const g of this.seen.entries()) {
      const _ = g[1];
      if (r === g[0]) {
        f(g);
        continue;
      }
      if (s.external) {
        const y = s.external.registry.get(g[0])?.id;
        if (r !== g[0] && y) {
          f(g);
          continue;
        }
      }
      if (this.metadataRegistry.get(g[0])?.id) {
        f(g);
        continue;
      }
      if (_.cycle) {
        f(g);
        continue;
      }
      if (_.count > 1 && s.reused === "ref") {
        f(g);
        continue;
      }
    }
    const p = (g, _) => {
      const m = this.seen.get(g), y = m.def ?? m.schema, h = { ...y };
      if (m.ref === null)
        return;
      const x = m.ref;
      if (m.ref = null, x) {
        p(x, _);
        const C = this.seen.get(x).schema;
        C.$ref && (_.target === "draft-7" || _.target === "draft-4" || _.target === "openapi-3.0") ? (y.allOf = y.allOf ?? [], y.allOf.push(C)) : (Object.assign(y, C), Object.assign(y, h));
      }
      m.isParent || this.override({
        zodSchema: g,
        jsonSchema: y,
        path: m.path ?? []
      });
    };
    for (const g of [...this.seen.entries()].reverse())
      p(g[0], { target: this.target });
    const d = {};
    if (this.target === "draft-2020-12" ? d.$schema = "https://json-schema.org/draft/2020-12/schema" : this.target === "draft-7" ? d.$schema = "http://json-schema.org/draft-07/schema#" : this.target === "draft-4" ? d.$schema = "http://json-schema.org/draft-04/schema#" : this.target === "openapi-3.0" || console.warn(`Invalid target: ${this.target}`), s.external?.uri) {
      const g = s.external.registry.get(r)?.id;
      if (!g)
        throw new Error("Schema is missing an `id` property");
      d.$id = s.external.uri(g);
    }
    Object.assign(d, l.def);
    const v = s.external?.defs ?? {};
    for (const g of this.seen.entries()) {
      const _ = g[1];
      _.def && _.defId && (v[_.defId] = _.def);
    }
    s.external || Object.keys(v).length > 0 && (this.target === "draft-2020-12" ? d.$defs = v : d.definitions = v);
    try {
      return JSON.parse(JSON.stringify(d));
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
}
function nA(t, r) {
  if (t instanceof b1) {
    const s = new Vy(r), l = {};
    for (const p of t._idmap.entries()) {
      const [d, v] = p;
      s.process(v);
    }
    const u = {}, f = {
      registry: t,
      uri: r?.uri,
      defs: l
    };
    for (const p of t._idmap.entries()) {
      const [d, v] = p;
      u[d] = s.emit(v, {
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
  const i = new Vy(r);
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
const rA = /* @__PURE__ */ ee("ZodISODateTime", (t, r) => {
  jC.init(t, r), vt.init(t, r);
});
function aA(t) {
  return R3(rA, t);
}
const iA = /* @__PURE__ */ ee("ZodISODate", (t, r) => {
  DC.init(t, r), vt.init(t, r);
});
function sA(t) {
  return z3(iA, t);
}
const oA = /* @__PURE__ */ ee("ZodISOTime", (t, r) => {
  RC.init(t, r), vt.init(t, r);
});
function lA(t) {
  return L3(oA, t);
}
const uA = /* @__PURE__ */ ee("ZodISODuration", (t, r) => {
  zC.init(t, r), vt.init(t, r);
});
function cA(t) {
  return I3(uA, t);
}
const fA = (t, r) => {
  o1.init(t, r), t.name = "ZodError", Object.defineProperties(t, {
    format: {
      value: (i) => ww(t, i)
      // enumerable: false,
    },
    flatten: {
      value: (i) => Ew(t, i)
      // enumerable: false,
    },
    addIssue: {
      value: (i) => {
        t.issues.push(i), t.message = JSON.stringify(t.issues, Bd, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (i) => {
        t.issues.push(...i), t.message = JSON.stringify(t.issues, Bd, 2);
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
}, Hn = ee("ZodError", fA, {
  Parent: Error
}), dA = /* @__PURE__ */ lh(Hn), hA = /* @__PURE__ */ uh(Hn), pA = /* @__PURE__ */ Tu(Hn), mA = /* @__PURE__ */ Ou(Hn), gA = /* @__PURE__ */ Nw(Hn), vA = /* @__PURE__ */ Tw(Hn), yA = /* @__PURE__ */ Ow(Hn), bA = /* @__PURE__ */ kw(Hn), _A = /* @__PURE__ */ Mw(Hn), SA = /* @__PURE__ */ jw(Hn), xA = /* @__PURE__ */ Dw(Hn), EA = /* @__PURE__ */ Rw(Hn), Rt = /* @__PURE__ */ ee("ZodType", (t, r) => (Ot.init(t, r), t.def = r, t.type = r.type, Object.defineProperty(t, "_def", { value: r }), t.check = (...i) => t.clone(Pa(r, {
  checks: [
    ...r.checks ?? [],
    ...i.map((s) => typeof s == "function" ? { _zod: { check: s, def: { check: "custom" }, onattach: [] } } : s)
  ]
})), t.clone = (i, s) => oa(t, i, s), t.brand = () => t, t.register = ((i, s) => (i.add(t, s), t)), t.parse = (i, s) => dA(t, i, s, { callee: t.parse }), t.safeParse = (i, s) => pA(t, i, s), t.parseAsync = async (i, s) => hA(t, i, s, { callee: t.parseAsync }), t.safeParseAsync = async (i, s) => mA(t, i, s), t.spa = t.safeParseAsync, t.encode = (i, s) => gA(t, i, s), t.decode = (i, s) => vA(t, i, s), t.encodeAsync = async (i, s) => yA(t, i, s), t.decodeAsync = async (i, s) => bA(t, i, s), t.safeEncode = (i, s) => _A(t, i, s), t.safeDecode = (i, s) => SA(t, i, s), t.safeEncodeAsync = async (i, s) => xA(t, i, s), t.safeDecodeAsync = async (i, s) => EA(t, i, s), t.refine = (i, s) => t.check(d4(i, s)), t.superRefine = (i) => t.check(h4(i)), t.overwrite = (i) => t.check(uo(i)), t.optional = () => Jy(t), t.nullable = () => Qy(t), t.nullish = () => Jy(Qy(t)), t.nonoptional = (i) => i4(t, i), t.array = () => Jn(t), t.or = (i) => $A([t, i]), t.and = (i) => QA(t, i), t.transform = (i) => Ky(t, WA(i)), t.default = (i) => n4(t, i), t.prefault = (i) => a4(t, i), t.catch = (i) => o4(t, i), t.pipe = (i) => Ky(t, i), t.readonly = () => c4(t), t.describe = (i) => {
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
}, t.isOptional = () => t.safeParse(void 0).success, t.isNullable = () => t.safeParse(null).success, t)), x1 = /* @__PURE__ */ ee("_ZodString", (t, r) => {
  ch.init(t, r), Rt.init(t, r);
  const i = t._zod.bag;
  t.format = i.format ?? null, t.minLength = i.minimum ?? null, t.maxLength = i.maximum ?? null, t.regex = (...s) => t.check(q3(...s)), t.includes = (...s) => t.check(G3(...s)), t.startsWith = (...s) => t.check(V3(...s)), t.endsWith = (...s) => t.check(Y3(...s)), t.min = (...s) => t.check(wu(...s)), t.max = (...s) => t.check(_1(...s)), t.length = (...s) => t.check(S1(...s)), t.nonempty = (...s) => t.check(wu(1, ...s)), t.lowercase = (s) => t.check(F3(s)), t.uppercase = (s) => t.check(Z3(s)), t.trim = () => t.check($3()), t.normalize = (...s) => t.check(X3(...s)), t.toLowerCase = () => t.check(J3()), t.toUpperCase = () => t.check(Q3());
}), wA = /* @__PURE__ */ ee("ZodString", (t, r) => {
  ch.init(t, r), x1.init(t, r), t.email = (i) => t.check(h3(CA, i)), t.url = (i) => t.check(y3(AA, i)), t.jwt = (i) => t.check(D3(HA, i)), t.emoji = (i) => t.check(b3(NA, i)), t.guid = (i) => t.check(qy(Yy, i)), t.uuid = (i) => t.check(p3(au, i)), t.uuidv4 = (i) => t.check(m3(au, i)), t.uuidv6 = (i) => t.check(g3(au, i)), t.uuidv7 = (i) => t.check(v3(au, i)), t.nanoid = (i) => t.check(_3(TA, i)), t.guid = (i) => t.check(qy(Yy, i)), t.cuid = (i) => t.check(S3(OA, i)), t.cuid2 = (i) => t.check(x3(kA, i)), t.ulid = (i) => t.check(E3(MA, i)), t.base64 = (i) => t.check(k3(PA, i)), t.base64url = (i) => t.check(M3(BA, i)), t.xid = (i) => t.check(w3(jA, i)), t.ksuid = (i) => t.check(C3(DA, i)), t.ipv4 = (i) => t.check(A3(RA, i)), t.ipv6 = (i) => t.check(N3(zA, i)), t.cidrv4 = (i) => t.check(T3(LA, i)), t.cidrv6 = (i) => t.check(O3(IA, i)), t.e164 = (i) => t.check(j3(UA, i)), t.datetime = (i) => t.check(aA(i)), t.date = (i) => t.check(sA(i)), t.time = (i) => t.check(lA(i)), t.duration = (i) => t.check(cA(i));
});
function Un(t) {
  return d3(wA, t);
}
const vt = /* @__PURE__ */ ee("ZodStringFormat", (t, r) => {
  ht.init(t, r), x1.init(t, r);
}), CA = /* @__PURE__ */ ee("ZodEmail", (t, r) => {
  EC.init(t, r), vt.init(t, r);
}), Yy = /* @__PURE__ */ ee("ZodGUID", (t, r) => {
  SC.init(t, r), vt.init(t, r);
}), au = /* @__PURE__ */ ee("ZodUUID", (t, r) => {
  xC.init(t, r), vt.init(t, r);
}), AA = /* @__PURE__ */ ee("ZodURL", (t, r) => {
  wC.init(t, r), vt.init(t, r);
}), NA = /* @__PURE__ */ ee("ZodEmoji", (t, r) => {
  CC.init(t, r), vt.init(t, r);
}), TA = /* @__PURE__ */ ee("ZodNanoID", (t, r) => {
  AC.init(t, r), vt.init(t, r);
}), OA = /* @__PURE__ */ ee("ZodCUID", (t, r) => {
  NC.init(t, r), vt.init(t, r);
}), kA = /* @__PURE__ */ ee("ZodCUID2", (t, r) => {
  TC.init(t, r), vt.init(t, r);
}), MA = /* @__PURE__ */ ee("ZodULID", (t, r) => {
  OC.init(t, r), vt.init(t, r);
}), jA = /* @__PURE__ */ ee("ZodXID", (t, r) => {
  kC.init(t, r), vt.init(t, r);
}), DA = /* @__PURE__ */ ee("ZodKSUID", (t, r) => {
  MC.init(t, r), vt.init(t, r);
}), RA = /* @__PURE__ */ ee("ZodIPv4", (t, r) => {
  LC.init(t, r), vt.init(t, r);
}), zA = /* @__PURE__ */ ee("ZodIPv6", (t, r) => {
  IC.init(t, r), vt.init(t, r);
}), LA = /* @__PURE__ */ ee("ZodCIDRv4", (t, r) => {
  PC.init(t, r), vt.init(t, r);
}), IA = /* @__PURE__ */ ee("ZodCIDRv6", (t, r) => {
  BC.init(t, r), vt.init(t, r);
}), PA = /* @__PURE__ */ ee("ZodBase64", (t, r) => {
  UC.init(t, r), vt.init(t, r);
}), BA = /* @__PURE__ */ ee("ZodBase64URL", (t, r) => {
  qC.init(t, r), vt.init(t, r);
}), UA = /* @__PURE__ */ ee("ZodE164", (t, r) => {
  FC.init(t, r), vt.init(t, r);
}), HA = /* @__PURE__ */ ee("ZodJWT", (t, r) => {
  GC.init(t, r), vt.init(t, r);
}), E1 = /* @__PURE__ */ ee("ZodNumber", (t, r) => {
  g1.init(t, r), Rt.init(t, r), t.gt = (s, l) => t.check(Zy(s, l)), t.gte = (s, l) => t.check(yd(s, l)), t.min = (s, l) => t.check(yd(s, l)), t.lt = (s, l) => t.check(Fy(s, l)), t.lte = (s, l) => t.check(vd(s, l)), t.max = (s, l) => t.check(vd(s, l)), t.int = (s) => t.check(Xy(s)), t.safe = (s) => t.check(Xy(s)), t.positive = (s) => t.check(Zy(0, s)), t.nonnegative = (s) => t.check(yd(0, s)), t.negative = (s) => t.check(Fy(0, s)), t.nonpositive = (s) => t.check(vd(0, s)), t.multipleOf = (s, l) => t.check(Gy(s, l)), t.step = (s, l) => t.check(Gy(s, l)), t.finite = () => t;
  const i = t._zod.bag;
  t.minValue = Math.max(i.minimum ?? Number.NEGATIVE_INFINITY, i.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, t.maxValue = Math.min(i.maximum ?? Number.POSITIVE_INFINITY, i.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, t.isInt = (i.format ?? "").includes("int") || Number.isSafeInteger(i.multipleOf ?? 0.5), t.isFinite = !0, t.format = i.format ?? null;
});
function Cu(t) {
  return P3(E1, t);
}
const qA = /* @__PURE__ */ ee("ZodNumberFormat", (t, r) => {
  VC.init(t, r), E1.init(t, r);
});
function Xy(t) {
  return B3(qA, t);
}
const FA = /* @__PURE__ */ ee("ZodUnknown", (t, r) => {
  YC.init(t, r), Rt.init(t, r);
});
function $y() {
  return U3(FA);
}
const ZA = /* @__PURE__ */ ee("ZodNever", (t, r) => {
  XC.init(t, r), Rt.init(t, r);
});
function GA(t) {
  return H3(ZA, t);
}
const VA = /* @__PURE__ */ ee("ZodArray", (t, r) => {
  $C.init(t, r), Rt.init(t, r), t.element = r.element, t.min = (i, s) => t.check(wu(i, s)), t.nonempty = (i) => t.check(wu(1, i)), t.max = (i, s) => t.check(_1(i, s)), t.length = (i, s) => t.check(S1(i, s)), t.unwrap = () => t.element;
});
function Jn(t, r) {
  return K3(VA, t, r);
}
const YA = /* @__PURE__ */ ee("ZodObject", (t, r) => {
  QC.init(t, r), Rt.init(t, r), ut(t, "shape", () => r.shape), t.keyof = () => qd(Object.keys(t._zod.def.shape)), t.catchall = (i) => t.clone({ ...t._zod.def, catchall: i }), t.passthrough = () => t.clone({ ...t._zod.def, catchall: $y() }), t.loose = () => t.clone({ ...t._zod.def, catchall: $y() }), t.strict = () => t.clone({ ...t._zod.def, catchall: GA() }), t.strip = () => t.clone({ ...t._zod.def, catchall: void 0 }), t.extend = (i) => yw(t, i), t.safeExtend = (i) => bw(t, i), t.merge = (i) => _w(t, i), t.pick = (i) => gw(t, i), t.omit = (i) => vw(t, i), t.partial = (...i) => Sw(w1, t, i[0]), t.required = (...i) => xw(C1, t, i[0]);
});
function Ra(t, r) {
  const i = {
    type: "object",
    shape: t ?? {},
    ..._e(r)
  };
  return new YA(i);
}
const XA = /* @__PURE__ */ ee("ZodUnion", (t, r) => {
  KC.init(t, r), Rt.init(t, r), t.options = r.options;
});
function $A(t, r) {
  return new XA({
    type: "union",
    options: t,
    ..._e(r)
  });
}
const JA = /* @__PURE__ */ ee("ZodIntersection", (t, r) => {
  WC.init(t, r), Rt.init(t, r);
});
function QA(t, r) {
  return new JA({
    type: "intersection",
    left: t,
    right: r
  });
}
const Hd = /* @__PURE__ */ ee("ZodEnum", (t, r) => {
  e3.init(t, r), Rt.init(t, r), t.enum = r.entries, t.options = Object.values(r.entries);
  const i = new Set(Object.keys(r.entries));
  t.extract = (s, l) => {
    const u = {};
    for (const f of s)
      if (i.has(f))
        u[f] = r.entries[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new Hd({
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
    return new Hd({
      ...r,
      checks: [],
      ..._e(l),
      entries: u
    });
  };
});
function qd(t, r) {
  const i = Array.isArray(t) ? Object.fromEntries(t.map((s) => [s, s])) : t;
  return new Hd({
    type: "enum",
    entries: i,
    ..._e(r)
  });
}
const KA = /* @__PURE__ */ ee("ZodTransform", (t, r) => {
  t3.init(t, r), Rt.init(t, r), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      throw new e1(t.constructor.name);
    i.addIssue = (u) => {
      if (typeof u == "string")
        i.issues.push(io(u, i.value, r));
      else {
        const f = u;
        f.fatal && (f.continue = !1), f.code ?? (f.code = "custom"), f.input ?? (f.input = i.value), f.inst ?? (f.inst = t), i.issues.push(io(f));
      }
    };
    const l = r.transform(i.value, i);
    return l instanceof Promise ? l.then((u) => (i.value = u, i)) : (i.value = l, i);
  };
});
function WA(t) {
  return new KA({
    type: "transform",
    transform: t
  });
}
const w1 = /* @__PURE__ */ ee("ZodOptional", (t, r) => {
  n3.init(t, r), Rt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function Jy(t) {
  return new w1({
    type: "optional",
    innerType: t
  });
}
const e4 = /* @__PURE__ */ ee("ZodNullable", (t, r) => {
  r3.init(t, r), Rt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function Qy(t) {
  return new e4({
    type: "nullable",
    innerType: t
  });
}
const t4 = /* @__PURE__ */ ee("ZodDefault", (t, r) => {
  a3.init(t, r), Rt.init(t, r), t.unwrap = () => t._zod.def.innerType, t.removeDefault = t.unwrap;
});
function n4(t, r) {
  return new t4({
    type: "default",
    innerType: t,
    get defaultValue() {
      return typeof r == "function" ? r() : a1(r);
    }
  });
}
const r4 = /* @__PURE__ */ ee("ZodPrefault", (t, r) => {
  i3.init(t, r), Rt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function a4(t, r) {
  return new r4({
    type: "prefault",
    innerType: t,
    get defaultValue() {
      return typeof r == "function" ? r() : a1(r);
    }
  });
}
const C1 = /* @__PURE__ */ ee("ZodNonOptional", (t, r) => {
  s3.init(t, r), Rt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function i4(t, r) {
  return new C1({
    type: "nonoptional",
    innerType: t,
    ..._e(r)
  });
}
const s4 = /* @__PURE__ */ ee("ZodCatch", (t, r) => {
  o3.init(t, r), Rt.init(t, r), t.unwrap = () => t._zod.def.innerType, t.removeCatch = t.unwrap;
});
function o4(t, r) {
  return new s4({
    type: "catch",
    innerType: t,
    catchValue: typeof r == "function" ? r : () => r
  });
}
const l4 = /* @__PURE__ */ ee("ZodPipe", (t, r) => {
  l3.init(t, r), Rt.init(t, r), t.in = r.in, t.out = r.out;
});
function Ky(t, r) {
  return new l4({
    type: "pipe",
    in: t,
    out: r
    // ...util.normalizeParams(params),
  });
}
const u4 = /* @__PURE__ */ ee("ZodReadonly", (t, r) => {
  u3.init(t, r), Rt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function c4(t) {
  return new u4({
    type: "readonly",
    innerType: t
  });
}
const f4 = /* @__PURE__ */ ee("ZodCustom", (t, r) => {
  c3.init(t, r), Rt.init(t, r);
});
function d4(t, r = {}) {
  return W3(f4, t, r);
}
function h4(t) {
  return eA(t);
}
const Wy = {
  FIELD: "FieldRevision",
  GLOBAL: "GlobalRevision"
}, Fd = "placeholder-chatHistory", p4 = Ra({
  justification: Un().describe(
    "A brief, friendly, and conversational explanation of the changes made, as if you are a helpful assistant."
  ),
  response: Un().describe("The new, full content for the character field.")
}), m4 = Ra({
  field: Un(),
  value: Un()
}), g4 = Ra({
  index: Cu().int().positive(),
  value: Un()
});
Ra({
  justification: Un(),
  fields_to_change: Jn(m4).optional(),
  draft_fields_to_remove: Jn(Un()).optional(),
  greetings_to_add: Jn(Un()).optional(),
  greetings_to_remove: Jn(Cu().int().positive()).optional(),
  greetings_to_change: Jn(g4).optional()
});
const v4 = (t, r) => {
  const i = Ra({
    index: Cu().int().positive().describe("The 1-based index of the alternate greeting to change."),
    value: Un().describe("The new content for the alternate greeting.")
  }), s = {
    justification: Un().describe(
      "A brief, friendly, and conversational explanation of the operations performed, as if you are a helpful assistant."
    ),
    greetings_to_add: Jn(Un()).optional().describe("A list of new alternate greetings to add to the end."),
    greetings_to_remove: Jn(Cu().int().positive()).optional().describe("A list of 1-based indices of alternate greetings to remove."),
    greetings_to_change: Jn(i).optional().describe("A list of alternate greetings to update with new content.")
  };
  if (t.length > 0) {
    const l = Ra({
      field: qd(t).describe("The unique ID of the field to change (core or draft)."),
      value: Un().describe("The new content for the field.")
    });
    s.fields_to_change = Jn(l).optional().describe("A list of character fields to update with new content.");
  }
  return r.length > 0 && (s.draft_fields_to_remove = Jn(qd(r).describe("The unique ID of the draft field to remove.")).optional().describe("A list of draft field IDs to remove.")), Ra(s);
};
function bd(t) {
  return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function Zd(t, r = 0) {
  const i = "  ".repeat(r);
  if (Array.isArray(t))
    return t.map((s) => s !== null && typeof s == "object" ? `${i}<item>
${Zd(s, r + 1)}${i}</item>
` : `${i}<item>${bd(s)}</item>
`).join("");
  if (t !== null && typeof t == "object") {
    let s = "";
    for (const l of Object.keys(t)) {
      const u = t[l];
      u !== null && typeof u == "object" ? s += `${i}<${l}>
${Zd(u, r + 1)}${i}</${l}>
` : s += `${i}<${l}>${bd(u)}</${l}>
`;
    }
    return s;
  }
  return `${i}<value>${bd(t)}</value>
`;
}
function y4(t, r) {
  const i = ka(t);
  return r === "xml" ? Zd(i).trim() : JSON.stringify(i, null, 2);
}
function b4(...t) {
  for (const r of t) if (r !== void 0) return r;
}
function _4(t) {
  return Array.isArray(t) ? t.find((r) => r !== "null") ?? t[0] : t;
}
function ka(t) {
  if (!t || typeof t != "object") return null;
  const r = Array.isArray(t.examples) ? t.examples[0] : void 0, i = b4(t.example, r, t.default);
  if (i !== void 0) return i;
  if (t.const !== void 0) return t.const;
  if (Array.isArray(t.enum) && t.enum.length) return t.enum[0];
  const s = Array.isArray(t.anyOf) ? t.anyOf[0] : Array.isArray(t.oneOf) ? t.oneOf[0] : void 0;
  if (s) return ka(s);
  switch (_4(t.type)) {
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
const S4 = new hS();
async function Gd(t, r, i, s, l, u) {
  const f = !s.json_schema && !1;
  return new Promise((p, d) => {
    const v = new AbortController(), g = u ?? v.signal;
    u && u.addEventListener("abort", () => v.abort(), { once: !0 }), S4.generateRequest(
      {
        profileId: t,
        prompt: r,
        maxTokens: i,
        custom: { stream: f, signal: g },
        overridePayload: s
      },
      {
        abortController: v,
        onEntry: void 0,
        onFinish: (_, m, y) => g.aborted ? d(new DOMException("Request aborted by user", "AbortError")) : y ? d(y) : m === void 0 && y === void 0 ? d(new DOMException("Request aborted by user", "AbortError")) : (m || d(new Error("No data received from LLM")), y ? d(y) : p(m))
      }
    );
  });
}
async function x4(t, r, i, s) {
  const l = await Gd(t, r, i, {}, void 0, s);
  if (!l?.content)
    throw new Error("Plain request failed to return content.");
  return l.content;
}
async function E4(t, r, i, s, l, u, f) {
  const p = wt.getSettings();
  let d, v;
  const g = nA(i);
  if (l === "native") {
    if (d = await Gd(
      t,
      r,
      u,
      {
        json_schema: { name: s, strict: !0, value: g }
      },
      void 0,
      f
    ), !d?.content)
      throw new Error(`Structured request for ${s} failed to return content.`);
    v = typeof d.content == "string" ? JSON.parse(d.content) : d.content;
  } else {
    const m = l, y = y4(g, m), h = JSON.stringify(g, null, 2), x = m === "json" ? "reviseJsonPrompt" : "reviseXmlPrompt", C = p.prompts[x]?.content;
    if (!C)
      throw new Error(`Prompt template for mode "${m}" not found.`);
    const T = {
      example_response: y,
      schema: h
    }, k = { role: "system", content: Ft.compile(C, { noEscape: !0, strict: !0 })(T) };
    if (d = await Gd(
      t,
      [...r, k],
      u,
      {},
      void 0,
      f
    ), !d?.content)
      throw new Error(`Structured request for ${s} failed to return content.`);
    v = L0(d.content, m, { schema: g });
  }
  const _ = i.safeParse(v);
  if (!_.success) {
    const m = `Model response failed schema validation for ${s}. Check console for details.`;
    throw console.error("Zod validation failed:", _.error.issues), console.error("Raw content parsed:", v), await Ne("error", m), new Error(m);
  }
  return _.data;
}
const A1 = ({ originalContent: t, newContent: r }) => {
  const i = X.useMemo(() => {
    const s = K0(t, r);
    let l = "", u = "";
    return s.forEach((f) => {
      const p = f.value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/\n/g, "<br>"), v = `<span style="${f.added ? "color: green; background-color: #e6ffed;" : f.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${p}</span>`;
      f.added || (l += v), f.removed || (u += v);
    }), { originalHtml: l, newHtml: u };
  }, [t, r]);
  return /* @__PURE__ */ S.jsxs("div", { className: "compare-state-diff-grid", children: [
    /* @__PURE__ */ S.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: i.originalHtml } }),
    /* @__PURE__ */ S.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: i.newHtml } })
  ] });
}, w4 = ({ before: t, after: r }) => {
  const i = X.useMemo(() => {
    const s = [];
    return (/* @__PURE__ */ new Set([...Object.keys(t.fields), ...Object.keys(r.fields)])).forEach((u) => {
      const f = t.fields[u], p = r.fields[u], d = f?.value ?? "", v = p?.value ?? "";
      d !== v && s.push({
        label: p?.label ?? f?.label ?? u,
        before: d,
        after: v
      });
    }), s;
  }, [t, r]);
  return /* @__PURE__ */ S.jsxs("div", { className: "compare-state-popup", children: [
    /* @__PURE__ */ S.jsx("h3", { children: "Changes in this step" }),
    i.length === 0 ? /* @__PURE__ */ S.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes were detected in the character state for this step." }) : /* @__PURE__ */ S.jsx("div", { className: "compare-state-list", children: i.map(({ label: s, before: l, after: u }) => /* @__PURE__ */ S.jsxs("div", { className: "compare-state-item", children: [
      /* @__PURE__ */ S.jsx("h4", { children: s }),
      /* @__PURE__ */ S.jsxs("div", { className: "compare-state-header", children: [
        /* @__PURE__ */ S.jsx("span", { children: "Before" }),
        /* @__PURE__ */ S.jsx("span", { children: "After" })
      ] }),
      /* @__PURE__ */ S.jsx(A1, { originalContent: l, newContent: u })
    ] }, s)) })
  ] });
}, C4 = ({ currentState: t, initialState: r }) => {
  const [i, s] = X.useState(!1), { coreFields: l, alternateGreetings: u } = X.useMemo(() => {
    const p = [], d = [];
    return dn.forEach((v) => {
      t.fields[v] && p.push({ label: t.fields[v].label, value: t.fields[v].value });
    }), Object.entries(t.fields).filter(([v]) => v.startsWith("alternate_greetings_")).sort((v, g) => parseInt(v[0].split("_")[2]) - parseInt(g[0].split("_")[2])).forEach(([, v]) => d.push(v.value)), { coreFields: p, alternateGreetings: d };
  }, [t]), f = X.useMemo(() => {
    const p = [];
    return (/* @__PURE__ */ new Set([...Object.keys(r.fields), ...Object.keys(t.fields)])).forEach((v) => {
      const g = r.fields[v], _ = t.fields[v], m = g?.value ?? "", y = _?.value ?? "";
      m !== y && p.push({
        label: _?.label ?? g?.label ?? v,
        before: m,
        after: y
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
    /* @__PURE__ */ S.jsx("div", { className: "current-state-content", children: i ? /* @__PURE__ */ S.jsx("div", { className: "compare-state-list", children: f.length === 0 ? /* @__PURE__ */ S.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes from the original state." }) : f.map(({ label: p, before: d, after: v }) => /* @__PURE__ */ S.jsxs("div", { className: "compare-state-item", children: [
      /* @__PURE__ */ S.jsx("h4", { children: p }),
      /* @__PURE__ */ S.jsxs("div", { className: "compare-state-header", children: [
        /* @__PURE__ */ S.jsx("span", { children: "Original" }),
        /* @__PURE__ */ S.jsx("span", { children: "Current" })
      ] }),
      /* @__PURE__ */ S.jsx(A1, { originalContent: d, newContent: v })
    ] }, p)) }) : /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
      /* @__PURE__ */ S.jsx("h4", { children: "Core Fields" }),
      l.map(({ label: p, value: d }) => /* @__PURE__ */ S.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ S.jsx("label", { children: p }),
        /* @__PURE__ */ S.jsx("div", { className: "state-value", children: d || /* @__PURE__ */ S.jsx("span", { className: "subtle-text", children: "empty" }) })
      ] }, p)),
      u.length > 0 && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
        /* @__PURE__ */ S.jsx("h4", { style: { marginTop: "20px" }, children: "Alternate Greetings" }),
        u.map((p, d) => /* @__PURE__ */ S.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ S.jsxs("label", { children: [
            "Greeting ",
            d + 1
          ] }),
          /* @__PURE__ */ S.jsx("div", { className: "state-value", children: p || /* @__PURE__ */ S.jsx("span", { className: "subtle-text", children: "empty" }) })
        ] }, d))
      ] })
    ] }) })
  ] });
}, Mi = SillyTavern.getContext(), A4 = (t) => Object.entries(t.fields).filter(([r]) => r.startsWith("alternate_greetings_")).sort((r, i) => {
  const s = parseInt(r[0].split("_")[2]), l = parseInt(i[0].split("_")[2]);
  return s - l;
}).map(([, r]) => r.value), N4 = (t, r, i, s) => {
  const l = structuredClone(t);
  if (i === "field" && s) {
    const u = r;
    return l.fields[s] && (l.fields[s].value = u.response), l;
  }
  if (i === "global") {
    const u = r;
    let f = A4(l), p = !1;
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
      const d = new Set(u.greetings_to_remove.map((v) => v - 1));
      f = f.filter((v, g) => !d.has(g));
    }
    u.greetings_to_add?.length && (p = !0, f.push(...u.greetings_to_add)), p && (Object.keys(l.fields).forEach((d) => {
      d.startsWith("alternate_greetings_") && delete l.fields[d];
    }), f.forEach((d, v) => {
      const g = `alternate_greetings_${v + 1}`;
      l.fields[g] = {
        value: d,
        prompt: "",
        // Prompts are not managed in revise sessions.
        label: `Alternate Greeting ${v + 1}`
      };
    }));
  }
  return l;
}, T4 = ({ initialState: t, onSave: r, onClose: i }) => {
  const [s, l] = X.useState(() => structuredClone(t)), u = (_, m, y) => {
    const h = structuredClone(s), x = y ? "draftFields" : "fields";
    h[x][_] && (h[x][_].value = m), l(h);
  }, f = (_, m) => {
    const y = structuredClone(s), h = `alternate_greetings_${_ + 1}`;
    y.fields[h] && (y.fields[h].value = m), l(y);
  }, { coreFields: p, alternateGreetings: d, draftFields: v } = X.useMemo(() => {
    const _ = [], m = [], y = [];
    return dn.forEach((h) => {
      s.fields[h] && _.push({ id: h, label: s.fields[h].label, value: s.fields[h].value });
    }), Object.entries(s.fields).filter(([h]) => h.startsWith("alternate_greetings_")).sort((h, x) => parseInt(h[0].split("_")[2]) - parseInt(x[0].split("_")[2])).forEach(([, h]) => m.push(h.value)), Object.entries(s.draftFields).forEach(([h, x]) => {
      y.push({ id: h, label: x.label, value: x.value });
    }), { coreFields: _, alternateGreetings: m, draftFields: y };
  }, [s]), g = () => {
    JSON.stringify(t) !== JSON.stringify(s) && r(s), i();
  };
  return /* @__PURE__ */ S.jsxs("div", { className: "current-state-popup", children: [
    /* @__PURE__ */ S.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ S.jsx("h3", { children: "Editing Character State" }),
      /* @__PURE__ */ S.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ S.jsxs(he, { onClick: g, children: [
          /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-check" }),
          " Save Changes"
        ] }),
        /* @__PURE__ */ S.jsxs(he, { onClick: i, className: "danger_button", children: [
          /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-times" }),
          " Cancel"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "current-state-content", children: [
      /* @__PURE__ */ S.jsx("h4", { children: "Core Fields" }),
      p.map(({ id: _, label: m, value: y }) => /* @__PURE__ */ S.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ S.jsx("label", { children: m }),
        /* @__PURE__ */ S.jsx(en, { value: y, onChange: (h) => u(_, h.target.value, !1), rows: 4 })
      ] }, _)),
      v.length > 0 && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
        /* @__PURE__ */ S.jsx("h4", { style: { marginTop: "20px" }, children: "Draft Fields" }),
        v.map(({ id: _, label: m, value: y }) => /* @__PURE__ */ S.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ S.jsx("label", { children: m }),
          /* @__PURE__ */ S.jsx(en, { value: y, onChange: (h) => u(_, h.target.value, !0), rows: 4 })
        ] }, _))
      ] }),
      d.length > 0 && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
        /* @__PURE__ */ S.jsx("h4", { style: { marginTop: "20px" }, children: "Alternate Greetings" }),
        d.map((_, m) => /* @__PURE__ */ S.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ S.jsxs("label", { children: [
            "Greeting ",
            m + 1
          ] }),
          /* @__PURE__ */ S.jsx(en, { value: _, onChange: (y) => f(m, y.target.value), rows: 4 })
        ] }, m))
      ] })
    ] })
  ] });
}, O4 = ({
  session: t,
  onBack: r,
  onApply: i,
  onSessionUpdate: s,
  initialState: l,
  chatContextOptions: u
}) => {
  const [f, p] = X.useState(t.messages), [d, v] = X.useState(""), [g, _] = X.useState(!1), [m, y] = X.useState(null), [h, x] = X.useState(!1), [C, T] = X.useState(!1), [w, k] = X.useState(null), [E, N] = X.useState(""), M = X.useRef(null), j = X.useRef(null);
  X.useEffect(() => {
    M.current?.scrollIntoView({ behavior: "smooth" });
  }, [f]);
  const U = X.useCallback(
    ($, ve, ye) => {
      if (JSON.stringify(ye) === JSON.stringify(ve))
        return $;
      const ct = wt.getSettings().prompts.existingFieldDefinitions;
      if (!ct) return $;
      const ke = { core: {}, alternate_greetings: {}, draft: {} };
      if ((/* @__PURE__ */ new Set([...Object.keys(ye.fields), ...Object.keys(ve.fields)])).forEach((Ze) => {
        const $e = ye.fields[Ze]?.value ?? "", Ve = ve.fields[Ze]?.value ?? "";
        if ($e !== Ve) {
          const We = ve.fields[Ze];
          We && (Ze.startsWith("alternate_greetings_") ? ke.alternate_greetings[We.label] = We.value : dn.includes(Ze) && (ke.core[We.label] = We.value));
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
      let tn = Ft.compile(ct.content, { noEscape: !0 })(kt);
      if (tn = Mi.substituteParams(tn), tn.trim()) {
        const Ze = {
          id: `msg-${Date.now()}-state`,
          role: "system",
          content: tn.trim(),
          isStateUpdate: !0
        };
        return [...$, Ze];
      }
      return $;
    },
    []
  ), G = X.useCallback(
    async ($, ve, ye, Xe) => {
      const ct = wt.getSettings();
      if (!t.profileId) {
        Ne("warning", "Please select a connection profile for this session.");
        return;
      }
      j.current = new AbortController(), ye(), _(!0);
      try {
        const ke = [], it = Mi.extensionSettings.connectionManager?.profiles?.find(
          (Ze) => Ze.id === t.profileId
        ), qn = it?.api ? Mi.CONNECT_API_MAP[it.api].selected : void 0;
        if (!qn) {
          Ne("warning", "No API selected for this session.");
          return;
        }
        for (const Ze of $)
          if (Ze.id === Fd) {
            if (Tn === void 0 && !Cr) continue;
            const $e = await m0(qn, u);
            $e.warnings?.length && $e.warnings.forEach((Ve) => Ne("warning", Ve)), ke.push(...$e.result);
          } else
            ke.push(Ze);
        const kt = $.slice(0, $.length - (ve ? 0 : 1)).reverse().find((Ze) => Ze.stateSnapshot)?.stateSnapshot ?? l, tn = ct.prompts.existingFieldDefinitions;
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
          let $e = Ft.compile(tn.content, { noEscape: !0 })(Ze);
          if ($e = Mi.substituteParams($e), $e.trim()) {
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
          const Ze = await x4(
            t.profileId,
            ke,
            ct.maxResponseToken,
            j.current.signal
          ), $e = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: Ze
          }, Ve = [...$, $e];
          p(Ve), s({ ...t, messages: Ve });
        } else {
          const Ze = t.type === "field" ? p4 : (() => {
            const Ge = [...Object.keys(kt.fields), ...Object.keys(kt.draftFields)], He = Object.keys(kt.draftFields);
            return v4(Ge, He);
          })(), Ve = await E4(
            t.profileId,
            ke,
            Ze,
            t.type === "field" ? Wy.FIELD : Wy.GLOBAL,
            t.promptEngineeringMode,
            ct.maxResponseToken,
            j.current.signal
          ), We = N4(kt, Ve, t.type, t.targetFieldId), me = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: Ve.justification,
            stateSnapshot: We
          };
          let pe = [...$, me];
          pe = U(pe, We, kt), p(pe), s({ ...t, messages: pe });
        }
      } catch (ke) {
        ke.name === "AbortError" ? Ne("info", "Request was cancelled.") : (console.error("Revise request failed:", ke), Ne("error", `Request failed: ${ke.message}`)), Xe();
      } finally {
        _(!1), j.current = null;
      }
    },
    [t, s, l, u, U]
  ), P = X.useCallback(async () => {
    if (!d.trim() || g) return;
    const $ = { id: `msg-${Date.now()}`, role: "user", content: d.trim() }, ve = f;
    G(
      [...f, $],
      !1,
      () => {
        p([...f, $]), v("");
      },
      () => p(ve)
    );
  }, [d, g, f, G]), Y = X.useCallback(async () => {
    if (g || f.length === 0) return;
    const $ = f;
    let ve = [...f];
    const ye = f.findLastIndex((Xe) => !Xe.isStateUpdate);
    ye > -1 && f[ye].role === "assistant" && (ve = f.slice(0, ye)), await G(
      ve,
      !0,
      () => p(ve),
      () => p($)
    );
  }, [g, f, G]), V = () => {
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
    y({ before: Xe, after: ye });
  }, fe = () => {
    x(!0);
  }, ue = ($) => {
    k($.id), N($.content);
  }, I = () => {
    k(null), N("");
  }, ne = async () => {
    if (!w) return;
    const $ = f.findIndex((it) => it.id === w);
    if ($ === -1 || !await Mi.Popup.show.confirm(
      "Edit Message",
      "This will fork the conversation from this point, removing all subsequent messages. Continue?"
    )) return;
    const ye = f, Xe = f.slice(0, $), ct = { ...f[$], content: E }, ke = [...Xe, ct];
    I(), G(
      ke,
      !1,
      () => p(ke),
      () => p(ye)
    );
  }, ce = async ($) => {
    const ve = f.findIndex((it) => it.id === $);
    if (ve === -1) return;
    const Xe = !!f[ve].isInitial;
    if (!await Mi.Popup.show.confirm(
      "Delete Message",
      Xe ? "Deleting part of the initial context will clear the entire chat history. Are you sure?" : "This will delete this message and all subsequent messages. Are you sure?"
    )) return;
    let ke;
    Xe ? ke = f.filter((it) => it.isInitial && it.id !== $) : ke = f.slice(0, ve), p(ke), s({ ...t, messages: ke }), Ne("info", "Message history has been updated.");
  }, Me = f.filter(($) => !$.isStateUpdate), R = Me.filter(($) => $.isInitial), J = Me.filter(($) => !$.isInitial), re = f.slice().reverse().find(($) => $.stateSnapshot)?.stateSnapshot ?? l, ie = () => {
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
    Xe = U(Xe, $, ve), p(Xe), s({ ...t, messages: Xe }), T(!1);
  }, De = () => {
    j.current?.abort();
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
              onChange: ($) => s({ ...t, isReadonly: $.target.checked })
            }
          ),
          "Readonly Mode"
        ] }),
        /* @__PURE__ */ S.jsx("div", { style: { maxWidth: "200px" }, children: /* @__PURE__ */ S.jsx(
          X0,
          {
            initialSelectedProfileId: t.profileId,
            onChange: ($) => s({ ...t, profileId: $?.id ?? "" })
          }
        ) }),
        /* @__PURE__ */ S.jsxs(
          "select",
          {
            className: "text_pole",
            value: t.promptEngineeringMode,
            onChange: ($) => s({ ...t, promptEngineeringMode: $.target.value }),
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
        /* @__PURE__ */ S.jsx(he, { onClick: fe, title: "View current character state", children: "View State" }),
        /* @__PURE__ */ S.jsx(he, { onClick: ie, title: "Manually edit the current state", children: "Edit State" }),
        /* @__PURE__ */ S.jsx(he, { onClick: r, title: "Back to sessions", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-arrow-left" }) }),
        /* @__PURE__ */ S.jsxs(he, { onClick: V, title: "Apply Changes and Close", children: [
          /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-check" }),
          " Apply"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "chat-messages", children: [
      R.length > 0 && /* @__PURE__ */ S.jsxs("details", { className: "initial-messages-container", children: [
        /* @__PURE__ */ S.jsx("summary", { children: "View Initial Context" }),
        /* @__PURE__ */ S.jsx("div", { className: "initial-messages-content", children: R.map(
          ($) => w === $.id ? /* @__PURE__ */ S.jsxs("div", { className: "message-editor", children: [
            /* @__PURE__ */ S.jsx(en, { value: E, onChange: (ve) => N(ve.target.value), rows: 5 }),
            /* @__PURE__ */ S.jsxs("div", { className: "editor-buttons", children: [
              /* @__PURE__ */ S.jsxs(he, { onClick: ne, children: [
                /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-check" }),
                " Save & Fork"
              ] }),
              /* @__PURE__ */ S.jsxs(he, { onClick: I, children: [
                /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-times" }),
                " Cancel"
              ] })
            ] })
          ] }, $.id) : /* @__PURE__ */ S.jsxs("div", { className: `message-bubble-wrapper initial-context ${$.role}`, children: [
            /* @__PURE__ */ S.jsx("div", { className: `message-bubble ${$.role} initial`, children: /* @__PURE__ */ S.jsx("div", { className: "message-content", children: $.content }) }),
            !g && $.id !== Fd && /* @__PURE__ */ S.jsxs("div", { className: "message-actions", children: [
              /* @__PURE__ */ S.jsxs(
                he,
                {
                  className: "message-action-button",
                  onClick: () => ue($),
                  title: "Edit Context",
                  children: [
                    " ",
                    /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-pencil" }),
                    " "
                  ]
                }
              ),
              /* @__PURE__ */ S.jsxs(
                he,
                {
                  className: "message-action-button danger_button",
                  onClick: () => ce($.id),
                  title: "Delete Context",
                  children: [
                    " ",
                    /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash-can" }),
                    " "
                  ]
                }
              )
            ] })
          ] }, $.id)
        ) })
      ] }),
      J.map(
        ($) => w === $.id ? /* @__PURE__ */ S.jsxs("div", { className: "message-editor", children: [
          /* @__PURE__ */ S.jsx(en, { value: E, onChange: (ve) => N(ve.target.value), rows: 3 }),
          /* @__PURE__ */ S.jsxs("div", { className: "editor-buttons", children: [
            /* @__PURE__ */ S.jsxs(he, { onClick: ne, children: [
              /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-check" }),
              " Save & Fork"
            ] }),
            /* @__PURE__ */ S.jsxs(he, { onClick: I, children: [
              /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-times" }),
              " Cancel"
            ] })
          ] })
        ] }, $.id) : /* @__PURE__ */ S.jsxs("div", { className: `message-bubble-wrapper ${$.role}`, children: [
          /* @__PURE__ */ S.jsxs("div", { className: "message-actions", children: [
            $.role === "user" && !$.stateSnapshot && !g && /* @__PURE__ */ S.jsxs(
              he,
              {
                className: "message-action-button",
                onClick: () => ue($),
                title: "Edit and Fork",
                children: [
                  " ",
                  /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-pencil" }),
                  " "
                ]
              }
            ),
            $.stateSnapshot && !g && /* @__PURE__ */ S.jsxs(
              he,
              {
                className: "message-action-button",
                onClick: () => le($.id),
                title: "Compare changes",
                children: [
                  " ",
                  /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-code-compare" }),
                  " "
                ]
              }
            ),
            !g && /* @__PURE__ */ S.jsxs(
              he,
              {
                className: "message-action-button danger_button",
                onClick: () => ce($.id),
                title: "Delete Message",
                children: [
                  " ",
                  /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash-can" }),
                  " "
                ]
              }
            )
          ] }),
          /* @__PURE__ */ S.jsx("div", { className: `message-bubble ${$.role}`, children: /* @__PURE__ */ S.jsx("div", { className: "message-content", children: $.content }) })
        ] }, $.id)
      ),
      J.length > 0 && !g && /* @__PURE__ */ S.jsx("div", { className: "regenerate-button-wrapper", children: /* @__PURE__ */ S.jsxs(he, { onClick: Y, title: "Regenerate response", children: [
        " ",
        /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-rotate-right" }),
        " Regenerate",
        " "
      ] }) }),
      g && /* @__PURE__ */ S.jsxs("div", { className: "message-bubble-wrapper assistant", children: [
        /* @__PURE__ */ S.jsx("div", { className: "message-bubble assistant loading", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) }),
        /* @__PURE__ */ S.jsx(he, { onClick: De, className: "danger_button", title: "Cancel Request", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-stop" }) })
      ] }),
      /* @__PURE__ */ S.jsx("div", { ref: M })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "chat-input-area", children: [
      /* @__PURE__ */ S.jsx(
        en,
        {
          value: d,
          onChange: ($) => v($.target.value),
          placeholder: "Type your revision instructions...",
          rows: 3,
          disabled: g || !!w,
          onKeyDown: ($) => {
            $.key === "Enter" && !$.shiftKey && ($.preventDefault(), P());
          }
        }
      ),
      /* @__PURE__ */ S.jsxs(he, { onClick: P, disabled: g || !d.trim() || !!w, children: [
        " ",
        /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-paper-plane" }),
        " "
      ] })
    ] }),
    m && /* @__PURE__ */ S.jsx(
      Li,
      {
        type: Nn.DISPLAY,
        content: /* @__PURE__ */ S.jsx(w4, { before: m.before, after: m.after }),
        onComplete: () => y(null),
        options: { wide: !0, large: !0 }
      }
    ),
    h && /* @__PURE__ */ S.jsx(
      Li,
      {
        type: Nn.DISPLAY,
        content: /* @__PURE__ */ S.jsx(C4, { currentState: re, initialState: l }),
        onComplete: () => x(!1),
        options: { wide: !0, large: !0 }
      }
    ),
    C && /* @__PURE__ */ S.jsx(
      Li,
      {
        type: Nn.DISPLAY,
        content: /* @__PURE__ */ S.jsx(
          T4,
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
async function k4(t, r, i, s, l) {
  const u = wt.getSettings(), f = u.mainContextTemplatePresets[i];
  if (!f)
    throw new Error(`Main context template preset "${i}" not found.`);
  const p = [], v = {
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
    l.selectedCharacterIndexes.forEach((h) => {
      const x = rr.characters[parseInt(h)];
      x && y.push(x);
    }), v.characters = y;
  }
  if (s.worldInfo) {
    const y = {};
    await Promise.all(
      l.selectedWorldNames.map(async (h) => {
        const x = await rr.loadWorldInfo(h);
        x && (y[h] = Object.values(x.entries).filter((C) => !C.disable));
      })
    ), v.lorebooks = y;
  }
  for (const y of f.prompts) {
    if (!y.enabled || y.promptName === "stDescription" && !s.stDescription || y.promptName === "charDefinitions" && !s.charCard || y.promptName === "lorebookDefinitions" && !s.worldInfo || y.promptName === "existingFieldDefinitions" && !s.existingFields || y.promptName === "personaDescription" && !s.persona || y.promptName === "chatHistory" && s.messages.type === "none" || Tn === void 0 && !Cr && y.promptName === "chatHistory") continue;
    if (y.promptName === "chatHistory") {
      p.push({
        id: Fd,
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
    let C = "";
    C = Ft.compile(x.content, { noEscape: !0 })(v), C = rr.substituteParams(C), C.trim() && p.push({
      id: `im-${p.length}`,
      role: y.role,
      content: C.trim(),
      isInitial: !0
    });
  }
  const g = r ? t.fields[r]?.label || t.draftFields[r]?.label : "Global", _ = u.prompts.reviseTaskDescription.content, m = Ft.compile(_, { noEscape: !0 })({
    isFieldSession: !!r,
    targetLabel: g
  });
  return p.push({
    id: `im-${p.length}`,
    role: "system",
    content: m,
    isInitial: !0
  }), p;
}
const iu = SillyTavern.getContext(), e0 = "charCreator_reviseSessions", M4 = ({
  target: t,
  onClose: r,
  onApply: i,
  initialState: s,
  contextToSend: l,
  sessionForContext: u
}) => {
  const [f, p] = X.useState([]), [d, v] = X.useState(null), [g, _] = X.useState(!0);
  X.useEffect(() => {
    const k = JSON.parse(localStorage.getItem(e0) || "[]");
    p(k), _(!1);
  }, []);
  const m = X.useMemo(() => f.filter((k) => k.type === t.type && (k.type === "global" || k.targetFieldId === t.fieldId)).sort((k, E) => new Date(E.createdAt).getTime() - new Date(k.createdAt).getTime()), [f, t]), y = (k) => {
    localStorage.setItem(e0, JSON.stringify(k)), p(k);
  }, h = async () => {
    const k = t.type === "field" ? s.fields[t.fieldId]?.label || s.draftFields[t.fieldId]?.label : "Global", E = await iu.Popup.show.input(
      "New Session Name",
      `Session for ${k} - ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`
    );
    if (E)
      try {
        const N = wt.getSettings();
        if (!N.profileId) {
          Ne("warning", "Please select a connection profile in the main popup first.");
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
            mainContextTemplatePreset: N.mainContextTemplatePreset
          },
          profileId: N.profileId,
          promptEngineeringMode: N.defaultPromptEngineeringMode,
          isReadonly: !1
        }, j = await k4(
          s,
          M.targetFieldId,
          M.context.mainContextTemplatePreset,
          l,
          u
        );
        M.messages = j, v(M);
      } catch (N) {
        console.error("Failed to create session:", N), Ne("error", `Failed to create session: ${N.message}`);
      }
  }, x = (k) => {
    v(k);
  }, C = async (k) => {
    if (await iu.Popup.show.confirm("Delete Session", "Are you sure? This cannot be undone.")) {
      const N = f.filter((M) => M.id !== k);
      y(N);
    }
  }, T = (k) => {
    const E = f.findIndex((M) => M.id === k.id), N = [...f];
    E !== -1 ? N[E] = k : N.push(k), y(N), v(k);
  };
  if (d) {
    const k = iu.extensionSettings.connectionManager?.profiles?.find(
      (M) => M.id === d.profileId
    ), E = {
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
        E.messageIndexesBetween = { start: -1, end: -1 };
        break;
      case "first":
        E.messageIndexesBetween = { start: 0, end: N.first ?? 10 };
        break;
      case "last":
        const M = iu.chat?.length ?? 0, j = N.last ?? 10;
        E.messageIndexesBetween = {
          end: Math.max(0, M - 1),
          start: Math.max(0, M - j)
        };
        break;
      case "range":
        E.messageIndexesBetween = {
          start: N.range?.start ?? 0,
          end: N.range?.end ?? 10
        };
        break;
    }
    return Tn === void 0 && !Cr && (E.messageIndexesBetween = { start: -1, end: -1 }), /* @__PURE__ */ S.jsx(
      O4,
      {
        session: d,
        onBack: () => v(null),
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
    /* @__PURE__ */ S.jsx("div", { className: "session-list", children: g ? /* @__PURE__ */ S.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "Loading sessions..." }) : m.length === 0 ? /* @__PURE__ */ S.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No sessions found. Create a new one to get started." }) : m.map((k) => /* @__PURE__ */ S.jsxs("div", { className: "session-item", children: [
      /* @__PURE__ */ S.jsxs("div", { className: "session-info", onClick: () => x(k), children: [
        /* @__PURE__ */ S.jsx("span", { className: "session-name", children: k.name }),
        /* @__PURE__ */ S.jsx("span", { className: "session-date", children: new Date(k.createdAt).toLocaleString() })
      ] }),
      /* @__PURE__ */ S.jsx(he, { className: "danger_button", onClick: () => C(k.id), children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] }, k.id)) }),
    /* @__PURE__ */ S.jsx("div", { className: "session-actions", children: /* @__PURE__ */ S.jsxs(he, { onClick: h, className: "menu_button", children: [
      /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-plus" }),
      " New Session"
    ] }) })
  ] });
}, N1 = SillyTavern.getContext(), j4 = `You are an expert character creator for roleplay AI. Based on the user's description, create a complete, detailed character card.

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
\`\`\``, D4 = `You are an AI assistant helping to refine a character card. The user wants to make changes to their character.

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
async function R4(t, r, i, s) {
  try {
    const f = (await Promise.resolve().then(() => rh)).compile(j4)({ userPrompt: t, includeLorebook: r, additionalInstructions: s }), p = await N1.ConnectionManagerRequestService.sendRequest(
      i,
      [{ role: "user", content: f }],
      4096
    );
    if (!p || !p.content)
      throw new Error("No response from AI");
    let d = p.content.trim();
    const v = d.match(/```(?:json)?\s*(\{[\s\S]*\})\s*```/);
    v && (d = v[1]);
    const g = JSON.parse(d), _ = ["name", "description", "personality", "scenario", "first_mes", "mes_example"];
    for (const h of _)
      if (!g[h])
        throw new Error(`Missing required field: ${h}`);
    const m = {
      name: g.name,
      description: g.description,
      personality: g.personality,
      scenario: g.scenario,
      first_mes: g.first_mes,
      mes_example: g.mes_example,
      alternate_greetings: g.alternate_greetings || []
    };
    let y;
    return r && g.lorebook && (y = {
      name: g.lorebook.name || `${m.name} Lorebook`,
      description: g.lorebook.description || "",
      scan_depth: g.lorebook.scan_depth || 4,
      token_budget: g.lorebook.token_budget || 2048,
      recursive_scanning: g.lorebook.recursive_scanning ?? !1,
      extensions: g.lorebook.extensions || {},
      entries: g.lorebook.entries || []
    }), { character: m, lorebook: y };
  } catch (l) {
    throw console.error("Error generating character:", l), new Error(`Failed to generate character: ${l.message || String(l)}`);
  }
}
function z4(t, r) {
  const i = {
    ...r,
    fields: { ...r.fields },
    draftFields: { ...r.draftFields }
  };
  dn.forEach((l) => {
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
async function L4({
  messages: t,
  session: r,
  profileId: i,
  maxResponseToken: s = 3072,
  // Increased default
  kbFiles: l = [],
  additionalInstructions: u
}) {
  try {
    const f = await Promise.resolve().then(() => rh), p = l.filter((E) => E.enabled);
    let d = "";
    p.length > 0 && (d = p.map((E) => `--- FILE: ${E.name} ---
${E.content}
--- END FILE ---`).join(`

`));
    const v = {};
    dn.forEach((E) => {
      r.fields[E]?.value && (v[E] = r.fields[E].value);
    });
    const g = [];
    Object.keys(r.fields).filter((E) => E.startsWith("alternate_greetings_")).sort((E, N) => parseInt(E.split("_")[2]) - parseInt(N.split("_")[2])).forEach((E) => {
      r.fields[E].value && g.push(r.fields[E].value);
    }), v.alternate_greetings = g;
    const _ = f.compile(D4), m = t[t.length - 1].content, y = _({
      currentCharacterJson: JSON.stringify(v, null, 2),
      userMessage: m,
      kbContent: d,
      additionalInstructions: u
    }), h = await N1.ConnectionManagerRequestService.sendRequest(
      i,
      [{ role: "user", content: y }],
      s
    );
    if (!h || !h.content)
      throw new Error("No response from AI");
    let x = h.content.trim();
    const C = x.match(/```(?:json)?\s*(\{[\s\S]*?)(?:```|$)/i);
    if (C)
      x = C[1];
    else {
      const E = x.indexOf("{"), N = x.lastIndexOf("}");
      E !== -1 && N !== -1 && N >= E && (x = x.substring(E, N + 1));
    }
    let T;
    try {
      T = JSON.parse(x);
    } catch (E) {
      console.warn("JSON parse failed, returning raw response as fallback:", E);
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
    let w = {
      ...r,
      fields: { ...r.fields },
      draftFields: { ...r.draftFields }
    };
    return T.updatedFields && Object.keys(T.updatedFields).forEach((E) => {
      if (E === "alternate_greetings") {
        Object.keys(w.fields).forEach((M) => {
          M.startsWith("alternate_greetings_") && delete w.fields[M];
        });
        const N = T.updatedFields[E];
        Array.isArray(N) && N.forEach((M, j) => {
          const U = `alternate_greetings_${j + 1}`;
          w.fields[U] = {
            value: String(M),
            prompt: "",
            label: `Alternate Greeting ${j + 1}`
          };
        });
      } else (dn.includes(E) || w.draftFields[E]) && (dn.includes(E) ? w.fields[E] = {
        value: String(T.updatedFields[E]),
        prompt: "",
        label: $n[E]
      } : w.draftFields[E] && (w.draftFields[E] = {
        ...w.draftFields[E],
        value: String(T.updatedFields[E])
      }));
    }), { aiMessage: {
      role: "assistant",
      content: T.response || "I've updated the character as requested.",
      timestamp: Date.now(),
      fieldsUpdated: T.fieldsUpdated || []
    }, updatedSession: w };
  } catch (f) {
    throw console.error("Error in chat message:", f), new Error(`Chat error: ${f.message || String(f)}`);
  }
}
const T1 = ({
  session: t,
  onSessionUpdate: r,
  profileId: i,
  maxResponseToken: s,
  kbFiles: l,
  messages: u,
  onMessagesChange: f,
  additionalInstructions: p
}) => {
  const [d, v] = X.useState(""), [g, _] = X.useState(!1), m = X.useRef(null), y = () => {
    m.current?.scrollIntoView({ behavior: "smooth" });
  };
  X.useEffect(() => {
    y();
  }, [u.length]);
  const h = X.useCallback(async () => {
    if (!d.trim() || g) return;
    const w = {
      role: "user",
      content: d.trim(),
      timestamp: Date.now()
    }, k = [...u, w];
    f(k), v(""), _(!0);
    try {
      const { aiMessage: E, updatedSession: N } = await L4({
        messages: k,
        session: t,
        profileId: i,
        maxResponseToken: s,
        kbFiles: l,
        additionalInstructions: p
      });
      f([...k, E]), r(N);
    } catch (E) {
      console.error("Chat error:", E), Ne("error", `Chat error: ${E.message || String(E)}`);
      const N = {
        role: "assistant",
        content: `Error occurred: ${E.message || String(E)}`,
        timestamp: Date.now(),
        isError: !0
      };
      f([...k, N]);
    } finally {
      _(!1);
    }
  }, [d, u, t, i, r, g, f, s, l]), x = X.useCallback((w) => {
    const k = u.filter((E, N) => N !== w);
    f(k);
  }, [u, f]), C = X.useCallback(
    (w) => {
      w.key === "Enter" && !w.shiftKey && (w.preventDefault(), h());
    },
    [h]
  ), T = X.useCallback(async () => {
    await SillyTavern.getContext().Popup.show.confirm(
      "Clear Chat",
      "Are you sure you want to clear the chat history?"
    ) && f([]);
  }, [f]);
  return /* @__PURE__ */ S.jsxs("div", { className: "chat-interface", children: [
    /* @__PURE__ */ S.jsxs("div", { className: "chat-header", style: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 15px", borderBottom: "1px solid rgba(255,255,255,0.05)" }, children: [
      /* @__PURE__ */ S.jsx("h3", { children: "AI Assistant" }),
      /* @__PURE__ */ S.jsx(he, { onClick: T, className: "menu_button secondary small", children: "Clear" })
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
      u.map((w, k) => /* @__PURE__ */ S.jsxs("div", { className: `chat-message ${w.role} ${w.isError ? "error-message" : ""}`, children: [
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
            onClick: () => x(k),
            title: "Delete message",
            children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash-can" })
          }
        ),
        /* @__PURE__ */ S.jsxs("div", { className: "message-content", children: [
          /* @__PURE__ */ S.jsx("div", { className: "message-text", style: { whiteSpace: "pre-wrap" }, children: w.content }),
          w.fieldsUpdated && w.fieldsUpdated.length > 0 && /* @__PURE__ */ S.jsx("div", { className: "message-updates", children: /* @__PURE__ */ S.jsxs("small", { children: [
            "✏️ Updated: ",
            w.fieldsUpdated.join(", ")
          ] }) })
        ] }),
        /* @__PURE__ */ S.jsx("div", { className: "message-avatar", children: w.role === "user" ? "👤" : "🤖" })
      ] }, k)),
      g && /* @__PURE__ */ S.jsxs("div", { className: "chat-message assistant", children: [
        /* @__PURE__ */ S.jsx("div", { className: "message-content", children: /* @__PURE__ */ S.jsxs("div", { className: "message-text typing", children: [
          /* @__PURE__ */ S.jsx("span", { children: "." }),
          /* @__PURE__ */ S.jsx("span", { children: "." }),
          /* @__PURE__ */ S.jsx("span", { children: "." })
        ] }) }),
        /* @__PURE__ */ S.jsx("div", { className: "message-avatar", children: "🤖" })
      ] }),
      /* @__PURE__ */ S.jsx("div", { ref: m })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "chat-input-area", children: [
      /* @__PURE__ */ S.jsx(
        en,
        {
          value: d,
          onChange: (w) => v(w.target.value),
          onKeyDown: C,
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
          onClick: h,
          disabled: !d.trim() || g,
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
            cursor: !d.trim() || g ? "not-allowed" : "pointer",
            opacity: !d.trim() || g ? 0.7 : 1
          },
          children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-paper-plane", style: { color: "white" } })
        }
      )
    ] })
  ] });
}, I4 = () => ({
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
}), P4 = ({
  lorebook: t,
  onLorebookChange: r,
  isGenerating: i,
  onGenerateEntry: s
}) => {
  const [l, u] = X.useState(null);
  X.useEffect(() => {
    t.entries.length > 0 ? (!l || !t.entries.find((m) => m.id === l)) && u(t.entries[0].id) : u(null);
  }, [t.entries, l]);
  const f = X.useCallback(() => {
    const m = I4();
    r({
      ...t,
      entries: [...t.entries, m]
    }), u(m.id);
  }, [t, r]), p = X.useCallback(
    async (m) => {
      const y = SillyTavern.getContext(), h = t.entries.find((C) => C.id === m);
      if (await y.Popup.show.confirm(
        "Delete Entry",
        `Delete "${h?.comment || "Untitled Entry"}"?`
      )) {
        const C = t.entries.filter((T) => T.id !== m);
        r({ ...t, entries: C }), l === m && u(C.length > 0 ? C[0].id : null);
      }
    },
    [t, r, l]
  ), d = X.useCallback(
    (m, y, h) => {
      const x = t.entries.map(
        (C) => C.id === m ? { ...C, [y]: h } : C
      );
      r({ ...t, entries: x });
    },
    [t, r]
  ), v = X.useCallback(
    (m, y, h = !1) => {
      const x = y.split(",").map((C) => C.trim()).filter((C) => C.length > 0);
      d(m, h ? "secondary_keys" : "keys", x);
    },
    [d]
  ), g = X.useCallback(
    (m, y) => {
      r({ ...t, [m]: y });
    },
    [t, r]
  ), _ = t.entries.find((m) => m.id === l);
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
              onChange: (m) => g("name", m.target.value),
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
              onChange: (m) => g("scan_depth", m.target.value === "" ? 0 : parseInt(m.target.value)),
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
              onChange: (m) => g("token_budget", m.target.value === "" ? 0 : parseInt(m.target.value)),
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
              onChange: (m) => g("recursive_scanning", m.target.checked)
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
          /* @__PURE__ */ S.jsx(he, { onClick: f, className: "menu_button small", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-plus" }) })
        ] }),
        /* @__PURE__ */ S.jsx("div", { className: "entries-list", children: t.entries.length === 0 ? /* @__PURE__ */ S.jsxs("div", { className: "empty-state", children: [
          /* @__PURE__ */ S.jsx("p", { children: "No entries yet" }),
          /* @__PURE__ */ S.jsxs(he, { onClick: f, children: [
            /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-plus" }),
            " Add Entry"
          ] })
        ] }) : t.entries.map((m, y) => /* @__PURE__ */ S.jsxs(
          "div",
          {
            className: `entry-item ${l === m.id ? "active" : ""} ${m.enabled ? "" : "disabled"}`,
            onClick: () => u(m.id),
            children: [
              /* @__PURE__ */ S.jsxs("div", { className: "entry-item-header", children: [
                /* @__PURE__ */ S.jsxs("span", { className: "entry-index", children: [
                  "#",
                  y + 1
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
              he,
              {
                onClick: () => s(_.id),
                disabled: i === _.id,
                className: "menu_button small",
                title: "Generate with AI",
                children: i === _.id ? /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" })
              }
            ),
            /* @__PURE__ */ S.jsx(
              he,
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
                onChange: (m) => d(_.id, "comment", m.target.value),
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
                onChange: (m) => v(_.id, m.target.value),
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
                onChange: (m) => v(_.id, m.target.value, !0),
                placeholder: "filter1, filter2"
              }
            )
          ] }),
          /* @__PURE__ */ S.jsxs("label", { children: [
            "Content",
            /* @__PURE__ */ S.jsx(
              en,
              {
                value: _.content,
                onChange: (m) => d(_.id, "content", m.target.value),
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
                  onChange: (m) => d(_.id, "enabled", m.target.checked)
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
                  onChange: (m) => d(_.id, "constant", m.target.checked)
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
                  onChange: (m) => d(_.id, "selective", m.target.checked)
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
                  onChange: (m) => d(
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
                  onChange: (m) => d(
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
        /* @__PURE__ */ S.jsxs(he, { onClick: f, children: [
          /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-plus" }),
          " Create Entry"
        ] })
      ] }) })
    ] })
  ] });
}, t0 = () => ({
  name: "New Lorebook",
  description: "",
  scan_depth: 4,
  token_budget: 2048,
  recursive_scanning: !1,
  entries: []
}), B4 = SillyTavern.getContext(), U4 = `You are an AI assistant specialized in creating World Info / Lorebook entries for roleplay AI systems.

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
Focus ONLY on creating Lorebook entries. Do NOT modify any character data.`, H4 = ({
  lorebook: t,
  onLorebookChange: r,
  profileId: i,
  maxResponseToken: s = 3072,
  kbFiles: l = [],
  messages: u,
  onMessagesChange: f,
  additionalInstructions: p
}) => {
  const [d, v] = X.useState(""), [g, _] = X.useState(!1), m = X.useRef(null), y = () => {
    m.current?.scrollIntoView({ behavior: "smooth" });
  };
  X.useEffect(() => {
    y();
  }, [u.length]);
  const h = X.useCallback(async () => {
    if (!d.trim() || g) return;
    const w = {
      role: "user",
      content: d.trim(),
      timestamp: Date.now()
    }, k = [...u, w];
    f(k), v(""), _(!0);
    try {
      const E = await Promise.resolve().then(() => rh), N = l.filter((ue) => ue.enabled);
      let M = "";
      N.length > 0 && (M = N.map((ue) => `--- FILE: ${ue.name} ---
${ue.content}
--- END FILE ---`).join(`

`));
      const j = t.entries.length > 0 ? JSON.stringify(t.entries.map((ue) => ({
        comment: ue.comment,
        keys: ue.keys,
        content: ue.content.substring(0, 200) + (ue.content.length > 200 ? "..." : ""),
        constant: ue.constant,
        enabled: ue.enabled
      })), null, 2) : "[]", G = E.compile(U4)({
        lorebookName: t.name,
        currentEntriesJson: j,
        userMessage: d.trim(),
        kbContent: M,
        additionalInstructions: p
      }), P = await B4.ConnectionManagerRequestService.sendRequest(
        i,
        [{ role: "user", content: G }],
        s
      );
      if (!P || !P.content)
        throw new Error("No response from AI");
      let Y = P.content.trim();
      const V = Y.match(/```(?:json)?\s*(\{[\s\S]*?)(?:```|$)/i);
      if (V)
        Y = V[1];
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

${P.content}

💡 Try increasing "Max Response Tokens" or simplifying your request.`,
          timestamp: Date.now(),
          entriesUpdated: [],
          isError: !0
        };
        f([...k, I]), _(!1);
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
      f([...k, fe]);
    } catch (E) {
      console.error("Lorebook chat error:", E);
      const N = {
        role: "assistant",
        content: `Error occurred: ${E.message || String(E)}`,
        timestamp: Date.now(),
        isError: !0
      };
      f([...k, N]);
    } finally {
      _(!1);
    }
  }, [d, g, t, r, i, s, l, u, f]), x = X.useCallback((w) => {
    const k = u.filter((E, N) => N !== w);
    f(k);
  }, [u, f]), C = X.useCallback(async () => {
    await SillyTavern.getContext().Popup.show.confirm(
      "Clear Chat",
      "Are you sure you want to clear the chat history?"
    ) && f([]);
  }, [f]), T = (w) => {
    w.key === "Enter" && !w.shiftKey && (w.preventDefault(), h());
  };
  return /* @__PURE__ */ S.jsxs("div", { className: "chat-interface", children: [
    /* @__PURE__ */ S.jsxs("div", { className: "chat-header", style: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 15px", borderBottom: "1px solid rgba(255,255,255,0.05)" }, children: [
      /* @__PURE__ */ S.jsx("h3", { children: "Lorebook Assistant" }),
      /* @__PURE__ */ S.jsx(he, { onClick: C, className: "menu_button secondary small", children: "Clear" })
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
      u.map((w, k) => /* @__PURE__ */ S.jsxs("div", { className: `chat-message ${w.role} ${w.isError ? "error-message" : ""}`, children: [
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
            onClick: () => x(k),
            title: "Delete message",
            children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash-can" })
          }
        ),
        /* @__PURE__ */ S.jsxs("div", { className: "message-content", children: [
          /* @__PURE__ */ S.jsx("div", { className: "message-text", style: { whiteSpace: "pre-wrap" }, children: w.content }),
          w.entriesUpdated && w.entriesUpdated.length > 0 && /* @__PURE__ */ S.jsxs("div", { className: "entries-updated", children: [
            "✏️ Entries: ",
            w.entriesUpdated.join(", ")
          ] })
        ] }),
        /* @__PURE__ */ S.jsx("span", { className: "message-icon", children: w.role === "user" ? "👤" : "🤖" })
      ] }, k)),
      g && /* @__PURE__ */ S.jsxs("div", { className: "chat-message assistant loading", children: [
        /* @__PURE__ */ S.jsxs("div", { className: "message-content", children: [
          /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-spinner fa-spin" }),
          " Creating entries..."
        ] }),
        /* @__PURE__ */ S.jsx("span", { className: "message-icon", children: "🤖" })
      ] }),
      /* @__PURE__ */ S.jsx("div", { ref: m })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "chat-input-area", children: [
      /* @__PURE__ */ S.jsx(
        en,
        {
          value: d,
          onChange: (w) => v(w.target.value),
          onKeyDown: T,
          placeholder: "Describe entries to create... (Enter to send, Shift+Enter for new line)",
          rows: 2,
          disabled: g,
          style: { flex: 1 }
        }
      ),
      /* @__PURE__ */ S.jsx(
        "button",
        {
          onClick: h,
          disabled: g || !d.trim(),
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
            cursor: g || !d.trim() ? "not-allowed" : "pointer",
            opacity: g || !d.trim() ? 0.7 : 1
          },
          children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-paper-plane", style: { color: "white" } })
        }
      )
    ] })
  ] });
}, q4 = SillyTavern.getContext(), F4 = [
  { id: 13, name: "Gemma" },
  { id: 12, name: "Llama 3" },
  { id: 3, name: "Llama 2" },
  { id: 7, name: "Mistral" },
  { id: 2, name: "OpenAI (GPT-4)" },
  { id: 11, name: "Claude" }
], n0 = ({ files: t, onFilesChange: r }) => {
  const i = X.useRef(null), [s, l] = X.useState(wt.getSettings().preferredTokenizer || 13), [u, f] = X.useState(!1), [p, d] = X.useState(""), v = (w) => {
    const k = Array.from(w.target.files || []);
    if (k.length === 0) return;
    const E = [];
    let N = 0;
    k.forEach((M) => {
      const j = new FileReader();
      j.onload = (U) => {
        const G = U.target?.result;
        G.indexOf("\0") !== -1 ? console.warn(`File ${M.name} appears to be binary, skipping.`) : E.push({
          id: `kb_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          name: M.name,
          content: G,
          enabled: !0,
          size: M.size
        }), N++, N === k.length && (r([...t, ...E]), i.current && (i.current.value = ""));
      }, j.readAsText(M);
    });
  }, g = (w) => {
    r(t.map((k) => k.id === w ? { ...k, enabled: !k.enabled } : k));
  }, _ = (w) => {
    r(t.filter((k) => k.id !== w));
  }, m = async () => {
    await q4.Popup.show.confirm(
      "Clear Knowledge Base",
      `Are you sure you want to remove all ${t.length} files from the knowledge base?`
    ) && r([]);
  }, y = async (w) => {
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
        }[s], N = [...t], M = 15;
        for (let j = 0; j < N.length; j += M) {
          const U = [];
          for (let G = j; G < Math.min(j + M, N.length); G++)
            N[G].tokens === void 0 && U.push(G);
          U.length !== 0 && await Promise.all(U.map(async (G) => {
            try {
              const P = N[G], V = await (await fetch(E, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text: P.content })
              })).json();
              V && V.ids && Array.isArray(V.ids) ? N[G] = { ...P, tokens: V.ids.length } : Array.isArray(V) ? N[G] = { ...P, tokens: V.length } : typeof V.token_count == "number" ? N[G] = { ...P, tokens: V.token_count } : N[G] = { ...P, tokens: Math.ceil(P.content.length / 3.35) };
            } catch (P) {
              console.error("Token count failed:", P), N[G] = { ...N[G], tokens: Math.ceil(N[G].content.length / 3.35) };
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
    const w = t.filter((k) => k.tokens === void 0);
    w.length > 0 && !u && y(w);
  }, [t, s]);
  const h = (w) => {
    const k = Number(w.target.value);
    l(k);
    const E = wt.getSettings();
    E.preferredTokenizer = k, wt.saveSettings(), r(t.map((N) => ({ ...N, tokens: void 0 })));
  }, x = t.filter(
    (w) => w.name.toLowerCase().includes(p.toLowerCase())
  ), C = t.filter((w) => w.enabled).reduce((w, k) => w + (k.tokens || 0), 0), T = t.reduce((w, k) => w + (k.tokens || 0), 0);
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
            onChange: h,
            className: "text_pole",
            style: { padding: "4px 8px", fontSize: "0.8em", width: "auto" },
            title: "Select tokenizer for counting",
            children: F4.map((w) => /* @__PURE__ */ S.jsx("option", { value: w.id, children: w.name }, w.id))
          }
        ),
        /* @__PURE__ */ S.jsx(
          "input",
          {
            type: "file",
            multiple: !0,
            ref: i,
            style: { display: "none" },
            onChange: v,
            accept: ".txt,.md,.json,.csv,.xml,.yml,.yaml"
          }
        ),
        t.length > 0 && /* @__PURE__ */ S.jsxs(he, { onClick: m, className: "menu_button small danger_button", children: [
          /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash-can" }),
          " Clear"
        ] }),
        /* @__PURE__ */ S.jsxs(he, { onClick: () => i.current?.click(), className: "menu_button small", children: [
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
          onChange: (w) => d(w.target.value),
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
            onChange: () => g(w.id),
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
}, Z4 = ({
  session: t,
  onSessionUpdate: r,
  profileId: i,
  additionalInstructions: s,
  messages: l,
  onMessagesChange: u
}) => /* @__PURE__ */ S.jsx("div", { className: "autonomous-mode chat-only", children: /* @__PURE__ */ S.jsx("div", { className: "autonomous-content", children: /* @__PURE__ */ S.jsx("div", { className: "autonomous-chat-full", children: /* @__PURE__ */ S.jsx(
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
function G4(t, r) {
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
function V4(t, r) {
  try {
    const i = G4(t, r), s = JSON.stringify(i, null, 2), l = new Blob([s], { type: "application/json" }), u = URL.createObjectURL(l), f = document.createElement("a");
    f.href = u, f.download = `${t.name.replace(/[^a-z0-9]/gi, "_").toLowerCase()}_v3.json`, document.body.appendChild(f), f.click(), document.body.removeChild(f), URL.revokeObjectURL(u), Ne("success", `Character exported as JSON: ${f.download}`);
  } catch (i) {
    console.error("Error exporting character:", i), Ne("error", `Failed to export character: ${i.message || String(i)}`);
  }
}
function Y4(t, r) {
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
    t.entries.forEach((d, v) => {
      i.entries[String(v)] = {
        uid: v,
        key: d.keys || [],
        keysecondary: d.secondary_keys || [],
        comment: d.comment || `Entry ${v + 1}`,
        content: d.content || "",
        constant: d.constant ?? !1,
        selective: d.selective ?? !1,
        insertion_order: d.insertion_order ?? v,
        enabled: d.enabled ?? !0,
        position: d.position === "after_char" ? 1 : 0,
        extensions: d.extensions || {}
      };
    });
    const s = JSON.stringify(i, null, 2), l = new Blob([s], { type: "application/json" }), u = URL.createObjectURL(l), f = document.createElement("a");
    f.href = u;
    const p = (t.name || r).replace(/[^a-z0-9]/gi, "_").toLowerCase();
    f.download = `${p}_lorebook.json`, document.body.appendChild(f), f.click(), document.body.removeChild(f), URL.revokeObjectURL(u), Ne("success", `Lorebook exported as JSON: ${f.download}`);
  } catch (i) {
    console.error("Error exporting lorebook:", i), Ne("error", `Failed to export lorebook: ${i.message || String(i)}`);
  }
}
Ft.helpers.join || Ft.registerHelper("join", function(t, r) {
  return Array.isArray(t) ? t.join(typeof r == "string" ? r : ", ") : "";
});
Ft.helpers.is_not_empty || Ft.registerHelper("is_not_empty", function(t, r) {
  return t ? Array.isArray(t) ? t.length > 0 ? r.fn(this) : r.inverse(this) : typeof t == "object" && Object.keys(t).length > 0 ? r.fn(this) : typeof t != "object" && !Array.isArray(t) ? r.fn(this) : r.inverse(this) : r.inverse(this);
});
const Pn = SillyTavern.getContext(), Xt = "charCreator", _d = () => ({
  selectedCharacterIndexes: Tn ? [String(Tn)] : [],
  selectedWorldNames: [],
  fields: dn.reduce(
    (t, r) => (t[r] = { value: "", prompt: "", label: $n[r] }, t),
    {}
  ),
  draftFields: {},
  lastLoadedCharacterId: ""
}), X4 = {
  name: { label: $n.name, rows: 1, large: !1, promptEnabled: !1 },
  description: { label: $n.description, rows: 5, large: !0, promptEnabled: !0 },
  personality: { label: $n.personality, rows: 4, large: !0, promptEnabled: !0 },
  scenario: { label: $n.scenario, rows: 3, large: !0, promptEnabled: !0 },
  first_mes: { label: $n.first_mes, rows: 3, large: !0, promptEnabled: !0 },
  mes_example: { label: $n.mes_example, rows: 6, large: !0, promptEnabled: !0 }
}, $4 = () => {
  const t = $0(), r = wt.getSettings(), [i, s] = X.useState(_d()), [l, u] = X.useState([]), [f, p] = X.useState(!0), [d, v] = X.useState("core"), [g, _] = X.useState("character"), [m, y] = X.useState(t0()), [h, x] = X.useState([]), [C, T] = X.useState(!1), [w, k] = X.useState([]), [E, N] = X.useState([]), [M, j] = X.useState([]), [U, G] = X.useState([]), [P, Y] = X.useState([]), [V, le] = X.useState(null), [fe, ue] = X.useState(null), [I, ne] = X.useState(!1), [ce, Me] = X.useState(null);
  X.useEffect(() => {
    (async () => {
      p(!0), G(Pn.characters), Y(ev);
      const ae = JSON.parse(localStorage.getItem(Xt) ?? "{}"), te = _d();
      if (ae.fields && (te.fields = { ...te.fields, ...ae.fields }), ae.draftFields && (te.draftFields = ae.draftFields), ae.selectedCharacterIndexes && (te.selectedCharacterIndexes = ae.selectedCharacterIndexes), ae.selectedWorldNames && (te.selectedWorldNames = ae.selectedWorldNames), ae.lastLoadedCharacterId) {
        te.lastLoadedCharacterId = ae.lastLoadedCharacterId;
        const qe = Pn.characters.find((ot) => ot.avatar === ae.lastLoadedCharacterId);
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
          y(JSON.parse(Be));
        } catch (qe) {
          console.error("Failed to load lorebook", qe);
        }
      const Re = localStorage.getItem(`${Xt}_char_msg`);
      Re && k(JSON.parse(Re));
      const pt = localStorage.getItem(`${Xt}_lore_msg`);
      pt && N(JSON.parse(pt));
      const mn = localStorage.getItem(`${Xt}_auto_msg`);
      mn && j(JSON.parse(mn));
      const $t = localStorage.getItem(`${Xt}_active_tab`);
      $t && v($t);
      const Jt = localStorage.getItem(`${Xt}_creator_mode`);
      Jt && _(Jt), p(!1);
    })();
  }, []), X.useEffect(() => {
    f || (localStorage.setItem(Xt, JSON.stringify(i)), localStorage.setItem(`${Xt}_kb`, JSON.stringify(h)), localStorage.setItem(`${Xt}_lorebook`, JSON.stringify(m)), localStorage.setItem(`${Xt}_char_msg`, JSON.stringify(w)), localStorage.setItem(`${Xt}_lore_msg`, JSON.stringify(E)), localStorage.setItem(`${Xt}_auto_msg`, JSON.stringify(M)), localStorage.setItem(`${Xt}_active_tab`, d), localStorage.setItem(`${Xt}_creator_mode`, g));
  }, [i, h, m, w, E, M, d, g, f]);
  const R = (B, ae) => {
    wt.getSettings()[B] = ae, wt.saveSettings(), t();
  }, J = (B, ae) => {
    wt.getSettings().contextToSend[B] = ae, wt.saveSettings(), t();
  }, re = X.useCallback(
    (B, ae, te, be) => {
      s((Be) => {
        const Re = be ? "draftFields" : "fields", pt = { ...Be[Re] };
        return pt[B] || (pt[B] = { value: "", prompt: "", label: B }), pt[B][te] = ae, { ...Be, [Re]: pt };
      });
    },
    []
  ), ie = X.useMemo(
    () => Object.keys(i.fields).filter((B) => B.startsWith("alternate_greetings_")).sort((B, ae) => parseInt(B.split("_")[2]) - parseInt(ae.split("_")[2])).map((B) => i.fields[B]),
    [i.fields]
  ), se = X.useCallback((B) => {
    s((ae) => {
      const te = { ...ae.fields };
      return Object.keys(te).forEach((be) => {
        be.startsWith("alternate_greetings_") && delete te[be];
      }), B.forEach((be, Be) => {
        const Re = `alternate_greetings_${Be + 1}`;
        te[Re] = { ...be, label: `Alternate Greeting ${Be + 1}` };
      }), { ...ae, fields: te };
    });
  }, []), De = async (B, ae) => {
    if (!r.profileId) return Ne("warning", "Please select a connection profile.");
    T(!0);
    try {
      const { character: te, lorebook: be } = await R4(
        B,
        ae,
        r.profileId,
        r.promptPresets[r.promptPreset]?.content
      ), Be = z4(te, i);
      s(Be), be && y(be), Ne("success", "Character generated successfully!");
    } catch (te) {
      console.error(te), Ne("error", te.message || String(te));
    } finally {
      T(!1);
    }
  }, $ = X.useCallback(
    (B, ae) => {
      re(B, "", "value", ae);
    },
    [re]
  ), ve = X.useCallback(
    async (B) => {
      await Pn.Popup.show.confirm(
        "Delete Draft Field",
        `Are you sure you want to delete "${i.draftFields[B].label}"?`
      ) && s((te) => {
        const be = { ...te.draftFields };
        return delete be[B], { ...te, draftFields: be };
      });
    },
    [i.draftFields]
  ), ye = X.useCallback(async () => {
    const B = await Pn.Popup.show.input("Enter Draft Field Name", "");
    if (!B?.trim()) return;
    const ae = zd(B.trim());
    if (!ae) return Ne("error", "Invalid field name.");
    if (i.draftFields[ae] || dn.includes(ae))
      return Ne("warning", "Field name already exists.");
    s((te) => ({
      ...te,
      draftFields: { ...te.draftFields, [ae]: { value: "", prompt: "", label: B } }
    })), v("draft");
  }, [i.draftFields]), Xe = (B) => {
    Me({ type: "field", fieldId: B }), ne(!0);
  }, ct = () => {
    Me({ type: "global" }), ne(!0);
  }, ke = (B) => {
    s((ae) => ({
      ...ae,
      fields: { ...ae.fields, ...B.fields },
      draftFields: { ...ae.draftFields, ...B.draftFields }
    })), Ne("success", "Changes from revise session applied."), ne(!1);
  }, it = X.useCallback(
    async (B, ae) => {
      if (!r.profileId) return Ne("warning", "Please select a connection profile.");
      u((te) => [...te, B]);
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
            const qe = Pn.chat?.length ?? 0, ot = Be.last ?? 10;
            be.messageIndexesBetween = {
              end: Math.max(0, qe - 1),
              start: Math.max(0, qe - ot)
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
          ev.filter((qe) => !Re[qe]).map(async (qe) => {
            const ot = await Pn.loadWorldInfo(qe);
            ot && (Re[qe] = Object.values(ot.entries));
          })
        );
        const pt = structuredClone(r.prompts);
        r.contextToSend.stDescription || delete pt.stDescription, (!r.contextToSend.charCard || i.selectedCharacterIndexes.length === 0) && delete pt.charDefinitions, (!r.contextToSend.worldInfo || i.selectedWorldNames.length === 0) && delete pt.lorebookDefinitions, r.contextToSend.existingFields || delete pt.existingFieldDefinitions, r.contextToSend.persona || delete pt.personaDescription, delete pt.worldInfoCharDefinition;
        const mn = await RE({
          profileId: r.profileId,
          userPrompt: r.promptPresets[r.promptPreset].content,
          buildPromptOptions: be,
          continueFrom: ae,
          session: i,
          allCharacters: U,
          entriesGroupByWorldName: Re,
          promptSettings: pt,
          formatDescription: { content: r.prompts[`${r.outputFormat}Format`].content },
          mainContextList: r.mainContextTemplatePresets[r.mainContextTemplatePreset].prompts.filter(
            (qe) => qe.enabled
          ),
          includeUserMacro: r.contextToSend.persona,
          maxResponseToken: r.maxResponseToken,
          targetField: B,
          outputFormat: r.outputFormat
        }), $t = B.startsWith("alternate_greetings_"), Jt = !$t && !dn.includes(B);
        if ($t) {
          const qe = parseInt(B.split("_")[2]) - 1, ot = [...ie];
          ot[qe] && (ot[qe].value = mn), se(ot);
        } else
          re(B, mn, "value", Jt);
      } catch (te) {
        console.error(te), Ne("error", te.message || String(te));
      } finally {
        u((te) => te.filter((be) => be !== B));
      }
    },
    [i, r, U, ie, re, se]
  ), qn = X.useCallback(async () => {
    await Pn.Popup.show.confirm("Reset Fields", "This will clear all fields. Are you sure?") && (s(_d()), le(null));
  }, []), kt = X.useCallback(
    (B) => {
      if (!V) return Ne("warning", "Please load a character to compare against.");
      let ae, te, be;
      typeof B == "number" ? (ae = ie[B]?.value ?? "", te = V.data?.alternate_greetings?.[B] ?? "", be = `Alternate Greeting ${B + 1}`) : (ae = i.fields[B]?.value ?? "", te = V[B] ?? V.data?.[B] ?? "", be = $n[B]), ue({ original: te, current: ae, fieldName: be });
    },
    [V, i.fields, ie]
  ), tn = X.useCallback(
    async (B) => {
      const ae = U[parseInt(B)];
      if (!ae || dn.some((Re) => i.fields[Re].value.trim() !== "") && !await Pn.Popup.show.confirm("Load Character", "Overwrite current fields?"))
        return;
      const be = { ...i.fields };
      dn.forEach((Re) => {
        be[Re] = { value: ae[Re] ?? ae.data?.[Re] ?? "", prompt: "", label: $n[Re] };
      });
      const Be = (ae.data?.alternate_greetings ?? []).map((Re) => ({ value: Re, prompt: "" }));
      le(ae), s((Re) => ({ ...Re, fields: be, lastLoadedCharacterId: ae.avatar })), se(Be);
    },
    [U, i.fields, se]
  ), Ze = () => ie.map((B) => B.value).filter((B) => B.trim() !== ""), $e = async () => {
    if (!i.fields.name.value) return Ne("warning", "Please provide a character name.");
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
      await S2(ae, !0);
    } catch (te) {
      Ne("error", `Failed to create character: ${te.message}`);
    }
  }, Ve = async () => {
    if (!V) return Ne("warning", "Please load a character to override.");
    if (!await Pn.Popup.show.confirm(
      "Override Character",
      `Override "${V.name}"? This cannot be undone.`
    )) return;
    const ae = {
      ...V,
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
      await x2(ae, !0), Ne("success", `Character "${ae.name}" updated!`);
    } catch (te) {
      Ne("error", `Failed to override character: ${te.message}`);
    }
  }, We = () => {
    const B = JSON.stringify({ draftFields: i.draftFields, version: V0 }, null, 2), ae = new Blob([B], { type: "application/json" }), te = document.createElement("a");
    te.href = URL.createObjectURL(ae), te.download = `crec-draft-fields-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`, te.click(), URL.revokeObjectURL(te.href);
  }, me = () => {
    const B = document.createElement("input");
    B.type = "file", B.accept = ".json", B.onchange = async () => {
      const ae = B.files?.[0];
      if (ae)
        try {
          const te = await ae.text(), be = JSON.parse(te);
          if (!be.draftFields) throw new Error("Invalid file format.");
          (Object.keys(i.draftFields).length > 0 ? await Pn.Popup.show.confirm(
            "Import Drafts",
            "This will replace current draft fields. Continue?"
          ) : !0) && (s((Re) => ({ ...Re, draftFields: be.draftFields })), Ne("success", "Draft fields imported."));
        } catch (te) {
          Ne("error", `Import failed: ${te.message}`);
        }
    }, B.click();
  }, pe = X.useMemo(
    () => U.map((B, ae) => ({ value: String(ae), label: B.name })),
    [U]
  ), Ge = X.useMemo(
    () => P.map((B) => ({ value: B, label: B })),
    [P]
  ), He = X.useMemo(
    () => Object.keys(r.promptPresets).map((B) => ({ value: B, label: B })),
    [r.promptPresets]
  ), st = X.useMemo(
    () => Object.keys(r.mainContextTemplatePresets).map((B) => ({ value: B, label: B })),
    [r.mainContextTemplatePresets]
  );
  return f ? /* @__PURE__ */ S.jsx("div", { children: "Loading..." }) : /* @__PURE__ */ S.jsxs("div", { id: "charCreatorPopup", children: [
    /* @__PURE__ */ S.jsx("h2", { children: "Character Creator" }),
    /* @__PURE__ */ S.jsxs("div", { className: "mode-tabs", children: [
      /* @__PURE__ */ S.jsxs(
        "button",
        {
          className: `mode-tab ${g === "character" ? "active" : ""}`,
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
          className: `mode-tab ${g === "autonomous" ? "active" : ""}`,
          onClick: () => _("autonomous"),
          children: [
            /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-robot" }),
            " Autonomous"
          ]
        }
      ),
      /* @__PURE__ */ S.jsxs(
        "button",
        {
          className: `mode-tab ${g === "lorebook" ? "active" : ""}`,
          onClick: () => _("lorebook"),
          children: [
            /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-book" }),
            " Lorebook"
          ]
        }
      )
    ] }),
    g === "character" && /* @__PURE__ */ S.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ S.jsxs("div", { className: "column-left", children: [
        /* @__PURE__ */ S.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ S.jsx("h3", { children: "Connection Profile" }),
          /* @__PURE__ */ S.jsx(
            X0,
            {
              initialSelectedProfileId: r.profileId,
              onChange: (B) => R("profileId", B?.id ?? "")
            }
          )
        ] }),
        /* @__PURE__ */ S.jsx(n0, { files: h, onFilesChange: x }),
        /* @__PURE__ */ S.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ S.jsx("h3", { children: "Context to Send" }),
          /* @__PURE__ */ S.jsxs("div", { className: "context-options", children: [
            /* @__PURE__ */ S.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ S.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.stDescription,
                  onChange: (B) => J("stDescription", B.target.checked)
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
                  onChange: (B) => J("persona", B.target.checked)
                }
              ),
              " ",
              "User's Persona"
            ] }),
            (Tn !== void 0 || Cr) && /* @__PURE__ */ S.jsxs("div", { className: "message-options", children: [
              /* @__PURE__ */ S.jsx("h4", { children: "Messages to Include" }),
              /* @__PURE__ */ S.jsxs(
                "select",
                {
                  className: "text_pole",
                  value: r.contextToSend.messages.type,
                  onChange: (B) => J("messages", {
                    ...r.contextToSend.messages,
                    type: B.target.value
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
                    onChange: (B) => J("messages", {
                      ...r.contextToSend.messages,
                      first: B.target.value === "" ? 0 : parseInt(B.target.value)
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
                    onChange: (B) => J("messages", {
                      ...r.contextToSend.messages,
                      last: B.target.value === "" ? 0 : parseInt(B.target.value)
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
                    onChange: (B) => J("messages", {
                      ...r.contextToSend.messages,
                      range: {
                        ...r.contextToSend.messages.range,
                        start: B.target.value === "" ? 0 : parseInt(B.target.value)
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
                    onChange: (B) => J("messages", {
                      ...r.contextToSend.messages,
                      range: { ...r.contextToSend.messages.range, end: B.target.value === "" ? 0 : parseInt(B.target.value) }
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
                  onChange: (B) => J("charCard", B.target.checked)
                }
              ),
              " ",
              "Selected Characters' Data"
            ] }),
            r.contextToSend.charCard && /* @__PURE__ */ S.jsx(
              pd,
              {
                items: pe,
                value: i.selectedCharacterIndexes,
                onChange: (B) => s((ae) => ({ ...ae, selectedCharacterIndexes: B })),
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
                  onChange: (B) => J("worldInfo", B.target.checked)
                }
              ),
              " ",
              "Selected World Info"
            ] }),
            r.contextToSend.worldInfo && /* @__PURE__ */ S.jsx(
              pd,
              {
                items: Ge,
                value: i.selectedWorldNames,
                onChange: (B) => s((ae) => ({ ...ae, selectedWorldNames: B })),
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
                  onChange: (B) => J("existingFields", B.target.checked)
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
                  onChange: (B) => J("dontSendOtherGreetings", B.target.checked)
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
              _u,
              {
                onItemsChange: () => {
                },
                label: "Main Context Template",
                items: st,
                value: r.mainContextTemplatePreset,
                onChange: (B) => R("mainContextTemplatePreset", B ?? "default")
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
                onChange: (B) => R("maxContextType", B.target.value),
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
              onChange: (B) => R("maxContextValue", B.target.value === "" ? 0 : parseInt(B.target.value))
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
                onChange: (B) => R("maxResponseToken", B.target.value === "" ? 0 : parseInt(B.target.value))
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
                onChange: (B) => R("outputFormat", B.target.value),
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
            _u,
            {
              label: "Prompt Preset",
              items: He,
              value: r.promptPreset,
              onChange: (B) => R("promptPreset", B ?? "default"),
              onItemsChange: (B) => R(
                "promptPresets",
                B.reduce(
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
          /* @__PURE__ */ S.jsx(
            en,
            {
              value: r.promptPresets[r.promptPreset]?.content ?? "",
              onChange: (B) => R("promptPresets", {
                ...r.promptPresets,
                [r.promptPreset]: { content: B.target.value }
              }),
              rows: 4
            }
          )
        ] }),
        /* @__PURE__ */ S.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ S.jsx("h3", { children: "Actions" }),
          /* @__PURE__ */ S.jsxs("div", { className: "character-field-actions", children: [
            /* @__PURE__ */ S.jsx(
              he,
              {
                onClick: ct,
                title: "Open global revision sessions to edit multiple fields at once",
                children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-comments" })
              }
            ),
            /* @__PURE__ */ S.jsxs(he, { onClick: qn, title: "Reset all fields", children: [
              /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-rotate-left" }),
              " Reset"
            ] }),
            /* @__PURE__ */ S.jsx("div", { style: { width: "200px" }, title: "Load Character Data", children: /* @__PURE__ */ S.jsx(
              pd,
              {
                items: pe,
                value: V ? [String(U.indexOf(V))] : [],
                onChange: (B) => tn(B[0]),
                multiple: !1,
                enableSearch: !0,
                placeholder: "Load Character..."
              }
            ) }),
            /* @__PURE__ */ S.jsx(he, { onClick: me, children: "Import JSON" })
          ] })
        ] }),
        /* @__PURE__ */ S.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ S.jsxs("div", { className: "tab-buttons", children: [
            /* @__PURE__ */ S.jsx(
              he,
              {
                onClick: () => v("core"),
                className: `menu_button tab-button ${d === "core" ? "active" : ""}`,
                children: "Core Fields"
              }
            ),
            /* @__PURE__ */ S.jsx(
              he,
              {
                onClick: () => v("draft"),
                className: `menu_button tab-button ${d === "draft" ? "active" : ""}`,
                children: "Draft Fields"
              }
            ),
            /* @__PURE__ */ S.jsx("div", { className: "right-aligned", children: d === "draft" && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
              /* @__PURE__ */ S.jsxs(he, { onClick: ye, children: [
                /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-plus" }),
                " Add"
              ] }),
              /* @__PURE__ */ S.jsx(he, { onClick: We, children: "Export" }),
              /* @__PURE__ */ S.jsx(he, { onClick: me, children: "Import" })
            ] }) })
          ] }),
          /* @__PURE__ */ S.jsxs("div", { className: "tab-content-area", children: [
            /* @__PURE__ */ S.jsxs("div", { className: `tab-content ${d === "core" ? "active" : ""}`, children: [
              dn.map((B) => {
                const ae = X4[B];
                return ae ? /* @__PURE__ */ S.jsx(
                  Ay,
                  {
                    fieldId: B,
                    label: ae.label,
                    value: i.fields[B]?.value ?? "",
                    prompt: i.fields[B]?.prompt ?? "",
                    large: ae.large,
                    rows: ae.rows,
                    promptEnabled: ae.promptEnabled,
                    isGenerating: l.includes(B),
                    onValueChange: (te, be) => re(te, be, "value", !1),
                    onPromptChange: (te, be) => re(te, be, "prompt", !1),
                    onGenerate: it,
                    onContinue: (te) => it(te, i.fields[te].value),
                    onClear: (te) => $(te, !1),
                    onCompare: kt,
                    onOpenReviseSessions: Xe
                  },
                  B
                ) : null;
              }),
              /* @__PURE__ */ S.jsx(
                VE,
                {
                  greetings: ie,
                  onGreetingsChange: se,
                  isGenerating: l.some((B) => B.startsWith("alternate_greetings_")),
                  onGenerate: (B) => it(`alternate_greetings_${B + 1}`),
                  onContinue: (B) => it(`alternate_greetings_${B + 1}`, ie[B].value),
                  onCompare: kt
                }
              )
            ] }),
            /* @__PURE__ */ S.jsx("div", { className: `tab-content ${d === "draft" ? "active" : ""}`, children: Object.entries(i.draftFields).map(([B, ae]) => /* @__PURE__ */ S.jsx(
              Ay,
              {
                fieldId: B,
                label: ae.label,
                value: ae.value,
                prompt: ae.prompt,
                isDraft: !0,
                rows: 5,
                isGenerating: l.includes(B),
                onValueChange: (te, be) => re(te, be, "value", !0),
                onPromptChange: (te, be) => re(te, be, "prompt", !0),
                onGenerate: it,
                onContinue: (te) => it(te, i.draftFields[te].value),
                onClear: (te) => $(te, !0),
                onDelete: ve
              },
              B
            )) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ S.jsx("div", { className: "column-right", children: /* @__PURE__ */ S.jsx(
        T1,
        {
          session: i,
          onSessionUpdate: s,
          profileId: r.profileId,
          maxResponseToken: r.maxResponseToken,
          kbFiles: h,
          messages: w,
          onMessagesChange: k,
          additionalInstructions: r.promptPresets[r.promptPreset]?.content
        }
      ) })
    ] }),
    g === "lorebook" && /* @__PURE__ */ S.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ S.jsxs("div", { className: "column-left", style: { width: "60%", display: "flex", flexDirection: "column", gap: "15px" }, children: [
        /* @__PURE__ */ S.jsx(n0, { files: h, onFilesChange: x }),
        /* @__PURE__ */ S.jsx(
          P4,
          {
            lorebook: m,
            onLorebookChange: y
          }
        )
      ] }),
      /* @__PURE__ */ S.jsx("div", { className: "column-right", style: { width: "40%" }, children: /* @__PURE__ */ S.jsx(
        H4,
        {
          lorebook: m,
          onLorebookChange: y,
          profileId: r.profileId,
          maxResponseToken: r.maxResponseToken,
          kbFiles: h,
          messages: E,
          onMessagesChange: N,
          additionalInstructions: r.promptPresets[r.promptPreset]?.content
        }
      ) })
    ] }),
    g === "autonomous" && /* @__PURE__ */ S.jsx(
      Z4,
      {
        session: i,
        onSessionUpdate: s,
        profileId: r.profileId,
        isGenerating: C,
        onGenerateFullCharacter: De,
        additionalInstructions: r.promptPresets[r.promptPreset]?.content,
        messages: M,
        onMessagesChange: j
      }
    ),
    /* @__PURE__ */ S.jsxs("div", { className: "card export-panel", style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ S.jsx("h3", { children: "Save & Export" }),
      /* @__PURE__ */ S.jsxs("div", { className: "button-group", style: { display: "flex", gap: "10px", flexWrap: "wrap" }, children: [
        g === "character" && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
          /* @__PURE__ */ S.jsx(he, { onClick: $e, className: "menu_button confirm", children: "Create in SillyTavern" }),
          /* @__PURE__ */ S.jsx(he, { onClick: Ve, className: "menu_button warning", disabled: !V, children: "Update Loaded Character" }),
          /* @__PURE__ */ S.jsx("div", { style: { flexGrow: 1 } }),
          /* @__PURE__ */ S.jsx(
            he,
            {
              onClick: () => {
                const B = {
                  name: i.fields.name.value,
                  description: i.fields.description.value,
                  personality: i.fields.personality.value,
                  scenario: i.fields.scenario.value,
                  first_mes: i.fields.first_mes.value,
                  mes_example: i.fields.mes_example.value,
                  alternate_greetings: ie.map((ae) => ae.value)
                };
                V4(B);
              },
              children: "Export JSON (V3)"
            }
          )
        ] }),
        g === "lorebook" && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
          /* @__PURE__ */ S.jsxs(
            he,
            {
              onClick: () => Y4(
                {
                  entries: m.entries.map((B, ae) => ({
                    keys: B.keys,
                    content: B.content,
                    extensions: {},
                    enabled: B.enabled,
                    insertion_order: B.insertion_order,
                    case_sensitive: !1,
                    name: B.comment,
                    comment: B.comment,
                    selective: B.selective,
                    secondary_keys: B.secondary_keys,
                    constant: B.constant,
                    position: B.position
                  })),
                  name: m.name,
                  description: m.description,
                  scan_depth: m.scan_depth,
                  token_budget: m.token_budget,
                  recursive_scanning: m.recursive_scanning,
                  extensions: {}
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
            he,
            {
              onClick: () => y(t0()),
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
    fe && /* @__PURE__ */ S.jsx(
      Li,
      {
        type: Nn.DISPLAY,
        content: /* @__PURE__ */ S.jsx(
          cw,
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
    I && ce && /* @__PURE__ */ S.jsx(
      Li,
      {
        type: Nn.DISPLAY,
        content: /* @__PURE__ */ S.jsx(
          M4,
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
}, J4 = () => {
  const [t, r] = X.useState(!1), i = () => r(!0), s = () => r(!1);
  return window.openCharacterCreatorPopup = i, t ? /* @__PURE__ */ S.jsx(
    Li,
    {
      content: /* @__PURE__ */ S.jsx($4, {}),
      type: Nn.DISPLAY,
      onComplete: s,
      options: {
        large: !0,
        wide: !0
      }
    }
  ) : null;
}, O1 = SillyTavern.getContext();
async function Q4() {
  const t = await O1.renderExtensionTemplateAsync(
    `third-party/${ja}`,
    "templates/settings"
  );
  document.querySelector("#extensions_settings").insertAdjacentHTML("beforeend", t);
  const r = document.createElement("div"), i = document.querySelector(".charCreator_settings .inline-drawer-content");
  i && (i.prepend(r), pv.createRoot(r).render(
    /* @__PURE__ */ S.jsx(fu.StrictMode, { children: /* @__PURE__ */ S.jsx(ZE, {}) })
  ));
  const s = '<div class="menu_button fa-solid fa-user-astronaut interactable charCreator-icon" title="Character Creator"></div>', l = [
    document.querySelector(".form_create_bottom_buttons_block"),
    document.querySelector("#GroupFavDelOkBack"),
    document.querySelector("#rm_buttons_container") ?? document.querySelector("#form_character_search_form")
  ], u = document.createElement("div");
  document.body.appendChild(u), pv.createRoot(u).render(
    /* @__PURE__ */ S.jsx(fu.StrictMode, { children: /* @__PURE__ */ S.jsx(J4, {}) })
  ), l.forEach((p) => {
    if (!p) return;
    const d = document.createElement("div");
    d.innerHTML = s.trim();
    const v = d.firstChild;
    v && (p.prepend(v), v.addEventListener("click", () => {
      window.openCharacterCreatorPopup && window.openCharacterCreatorPopup();
    }));
  });
}
function K4() {
  return !!O1.ConnectionManagerRequestService;
}
K4() ? IE().then(() => {
  Q4();
}) : Ne("error", `[${ja}] Make sure ST is updated.`);
export {
  Q4 as init
};
