(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".preview-file{width:100%;height:100%;object-fit:contain}.loader-container{display:flex;justify-content:center;align-items:center;width:100%;height:100%}.loader{width:50px;height:50px;border:5px solid #e0e0e0;border-top:5px solid #606060;border-radius:50%;animation:spin 1s linear infinite}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.hidden{visibility:hidden;width:0;height:0}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import require$$0, { useState, useEffect } from "react";
function getAugmentedNamespace(X) {
  if (Object.prototype.hasOwnProperty.call(X, "__esModule")) return X;
  var n = X.default;
  if (typeof n == "function") {
    var _ = function t() {
      return this instanceof t ? Reflect.construct(n, arguments, this.constructor) : n.apply(this, arguments);
    };
    _.prototype = n.prototype;
  } else _ = {};
  return Object.defineProperty(_, "__esModule", { value: !0 }), Object.keys(X).forEach(function(t) {
    var g = Object.getOwnPropertyDescriptor(X, t);
    Object.defineProperty(_, t, g.get ? g : {
      enumerable: !0,
      get: function() {
        return X[t];
      }
    });
  }), _;
}
var jsxRuntime = { exports: {} }, reactJsxRuntime_production_min = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_production_min;
function requireReactJsxRuntime_production_min() {
  if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
  hasRequiredReactJsxRuntime_production_min = 1;
  var X = require$$0, n = Symbol.for("react.element"), _ = Symbol.for("react.fragment"), t = Object.prototype.hasOwnProperty, g = X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, x = { key: !0, ref: !0, __self: !0, __source: !0 };
  function F(w, m, d) {
    var f, P = {}, N = null, v = null;
    d !== void 0 && (N = "" + d), m.key !== void 0 && (N = "" + m.key), m.ref !== void 0 && (v = m.ref);
    for (f in m) t.call(m, f) && !x.hasOwnProperty(f) && (P[f] = m[f]);
    if (w && w.defaultProps) for (f in m = w.defaultProps, m) P[f] === void 0 && (P[f] = m[f]);
    return { $$typeof: n, type: w, key: N, ref: v, props: P, _owner: g.current };
  }
  return reactJsxRuntime_production_min.Fragment = _, reactJsxRuntime_production_min.jsx = F, reactJsxRuntime_production_min.jsxs = F, reactJsxRuntime_production_min;
}
var reactJsxRuntime_development = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_development;
function requireReactJsxRuntime_development() {
  return hasRequiredReactJsxRuntime_development || (hasRequiredReactJsxRuntime_development = 1, process.env.NODE_ENV !== "production" && function() {
    var X = require$$0, n = Symbol.for("react.element"), _ = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), F = Symbol.for("react.provider"), w = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), W = Symbol.iterator, c = "@@iterator";
    function y(E) {
      if (E === null || typeof E != "object")
        return null;
      var K = W && E[W] || E[c];
      return typeof K == "function" ? K : null;
    }
    var I = X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(E) {
      {
        for (var K = arguments.length, Z = new Array(K > 1 ? K - 1 : 0), re = 1; re < K; re++)
          Z[re - 1] = arguments[re];
        b("error", E, Z);
      }
    }
    function b(E, K, Z) {
      {
        var re = I.ReactDebugCurrentFrame, pe = re.getStackAddendum();
        pe !== "" && (K += "%s", Z = Z.concat([pe]));
        var _e = Z.map(function(he) {
          return String(he);
        });
        _e.unshift("Warning: " + K), Function.prototype.apply.call(console[E], console, _e);
      }
    }
    var r = !1, s = !1, u = !1, S = !1, p = !1, M;
    M = Symbol.for("react.module.reference");
    function R(E) {
      return !!(typeof E == "string" || typeof E == "function" || E === t || E === x || p || E === g || E === d || E === f || S || E === v || r || s || u || typeof E == "object" && E !== null && (E.$$typeof === N || E.$$typeof === P || E.$$typeof === F || E.$$typeof === w || E.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      E.$$typeof === M || E.getModuleId !== void 0));
    }
    function V(E, K, Z) {
      var re = E.displayName;
      if (re)
        return re;
      var pe = K.displayName || K.name || "";
      return pe !== "" ? Z + "(" + pe + ")" : Z;
    }
    function D(E) {
      return E.displayName || "Context";
    }
    function C(E) {
      if (E == null)
        return null;
      if (typeof E.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof E == "function")
        return E.displayName || E.name || null;
      if (typeof E == "string")
        return E;
      switch (E) {
        case t:
          return "Fragment";
        case _:
          return "Portal";
        case x:
          return "Profiler";
        case g:
          return "StrictMode";
        case d:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case w:
            var K = E;
            return D(K) + ".Consumer";
          case F:
            var Z = E;
            return D(Z._context) + ".Provider";
          case m:
            return V(E, E.render, "ForwardRef");
          case P:
            var re = E.displayName || null;
            return re !== null ? re : C(E.type) || "Memo";
          case N: {
            var pe = E, _e = pe._payload, he = pe._init;
            try {
              return C(he(_e));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, j = 0, $, O, o, e, i, a, h;
    function l() {
    }
    l.__reactDisabledLog = !0;
    function A() {
      {
        if (j === 0) {
          $ = console.log, O = console.info, o = console.warn, e = console.error, i = console.group, a = console.groupCollapsed, h = console.groupEnd;
          var E = {
            configurable: !0,
            enumerable: !0,
            value: l,
            writable: !0
          };
          Object.defineProperties(console, {
            info: E,
            log: E,
            warn: E,
            error: E,
            group: E,
            groupCollapsed: E,
            groupEnd: E
          });
        }
        j++;
      }
    }
    function k() {
      {
        if (j--, j === 0) {
          var E = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, E, {
              value: $
            }),
            info: L({}, E, {
              value: O
            }),
            warn: L({}, E, {
              value: o
            }),
            error: L({}, E, {
              value: e
            }),
            group: L({}, E, {
              value: i
            }),
            groupCollapsed: L({}, E, {
              value: a
            }),
            groupEnd: L({}, E, {
              value: h
            })
          });
        }
        j < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = I.ReactCurrentDispatcher, G;
    function B(E, K, Z) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (pe) {
            var re = pe.stack.trim().match(/\n( *(at )?)/);
            G = re && re[1] || "";
          }
        return `
` + G + E;
      }
    }
    var Y = !1, J;
    {
      var Q = typeof WeakMap == "function" ? WeakMap : Map;
      J = new Q();
    }
    function te(E, K) {
      if (!E || Y)
        return "";
      {
        var Z = J.get(E);
        if (Z !== void 0)
          return Z;
      }
      var re;
      Y = !0;
      var pe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _e;
      _e = U.current, U.current = null, A();
      try {
        if (K) {
          var he = function() {
            throw Error();
          };
          if (Object.defineProperty(he.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(he, []);
            } catch (Te) {
              re = Te;
            }
            Reflect.construct(E, [], he);
          } else {
            try {
              he.call();
            } catch (Te) {
              re = Te;
            }
            E.call(he.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Te) {
            re = Te;
          }
          E();
        }
      } catch (Te) {
        if (Te && re && typeof Te.stack == "string") {
          for (var le = Te.stack.split(`
`), Pe = re.stack.split(`
`), ve = le.length - 1, Ce = Pe.length - 1; ve >= 1 && Ce >= 0 && le[ve] !== Pe[Ce]; )
            Ce--;
          for (; ve >= 1 && Ce >= 0; ve--, Ce--)
            if (le[ve] !== Pe[Ce]) {
              if (ve !== 1 || Ce !== 1)
                do
                  if (ve--, Ce--, Ce < 0 || le[ve] !== Pe[Ce]) {
                    var Fe = `
` + le[ve].replace(" at new ", " at ");
                    return E.displayName && Fe.includes("<anonymous>") && (Fe = Fe.replace("<anonymous>", E.displayName)), typeof E == "function" && J.set(E, Fe), Fe;
                  }
                while (ve >= 1 && Ce >= 0);
              break;
            }
        }
      } finally {
        Y = !1, U.current = _e, k(), Error.prepareStackTrace = pe;
      }
      var Ne = E ? E.displayName || E.name : "", Ie = Ne ? B(Ne) : "";
      return typeof E == "function" && J.set(E, Ie), Ie;
    }
    function oe(E, K, Z) {
      return te(E, !1);
    }
    function ie(E) {
      var K = E.prototype;
      return !!(K && K.isReactComponent);
    }
    function de(E, K, Z) {
      if (E == null)
        return "";
      if (typeof E == "function")
        return te(E, ie(E));
      if (typeof E == "string")
        return B(E);
      switch (E) {
        case d:
          return B("Suspense");
        case f:
          return B("SuspenseList");
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case m:
            return oe(E.render);
          case P:
            return de(E.type, K, Z);
          case N: {
            var re = E, pe = re._payload, _e = re._init;
            try {
              return de(_e(pe), K, Z);
            } catch {
            }
          }
        }
      return "";
    }
    var ae = Object.prototype.hasOwnProperty, ue = {}, ye = I.ReactDebugCurrentFrame;
    function ne(E) {
      if (E) {
        var K = E._owner, Z = de(E.type, E._source, K ? K.type : null);
        ye.setExtraStackFrame(Z);
      } else
        ye.setExtraStackFrame(null);
    }
    function be(E, K, Z, re, pe) {
      {
        var _e = Function.call.bind(ae);
        for (var he in E)
          if (_e(E, he)) {
            var le = void 0;
            try {
              if (typeof E[he] != "function") {
                var Pe = Error((re || "React class") + ": " + Z + " type `" + he + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[he] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Pe.name = "Invariant Violation", Pe;
              }
              le = E[he](K, he, re, Z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ve) {
              le = ve;
            }
            le && !(le instanceof Error) && (ne(pe), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", re || "React class", Z, he, typeof le), ne(null)), le instanceof Error && !(le.message in ue) && (ue[le.message] = !0, ne(pe), T("Failed %s type: %s", Z, le.message), ne(null));
          }
      }
    }
    var me = Array.isArray;
    function Se(E) {
      return me(E);
    }
    function Ae(E) {
      {
        var K = typeof Symbol == "function" && Symbol.toStringTag, Z = K && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return Z;
      }
    }
    function we(E) {
      try {
        return xe(E), !1;
      } catch {
        return !0;
      }
    }
    function xe(E) {
      return "" + E;
    }
    function Re(E) {
      if (we(E))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ae(E)), xe(E);
    }
    var Ee = I.ReactCurrentOwner, ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ge, Oe;
    function je(E) {
      if (ae.call(E, "ref")) {
        var K = Object.getOwnPropertyDescriptor(E, "ref").get;
        if (K && K.isReactWarning)
          return !1;
      }
      return E.ref !== void 0;
    }
    function Ge(E) {
      if (ae.call(E, "key")) {
        var K = Object.getOwnPropertyDescriptor(E, "key").get;
        if (K && K.isReactWarning)
          return !1;
      }
      return E.key !== void 0;
    }
    function He(E, K) {
      typeof E.ref == "string" && Ee.current;
    }
    function $e(E, K) {
      {
        var Z = function() {
          ge || (ge = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", K));
        };
        Z.isReactWarning = !0, Object.defineProperty(E, "key", {
          get: Z,
          configurable: !0
        });
      }
    }
    function Ve(E, K) {
      {
        var Z = function() {
          Oe || (Oe = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", K));
        };
        Z.isReactWarning = !0, Object.defineProperty(E, "ref", {
          get: Z,
          configurable: !0
        });
      }
    }
    var Xe = function(E, K, Z, re, pe, _e, he) {
      var le = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: E,
        key: K,
        ref: Z,
        props: he,
        // Record the component responsible for creating this element.
        _owner: _e
      };
      return le._store = {}, Object.defineProperty(le._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(le, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: re
      }), Object.defineProperty(le, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: pe
      }), Object.freeze && (Object.freeze(le.props), Object.freeze(le)), le;
    };
    function ze(E, K, Z, re, pe) {
      {
        var _e, he = {}, le = null, Pe = null;
        Z !== void 0 && (Re(Z), le = "" + Z), Ge(K) && (Re(K.key), le = "" + K.key), je(K) && (Pe = K.ref, He(K, pe));
        for (_e in K)
          ae.call(K, _e) && !ke.hasOwnProperty(_e) && (he[_e] = K[_e]);
        if (E && E.defaultProps) {
          var ve = E.defaultProps;
          for (_e in ve)
            he[_e] === void 0 && (he[_e] = ve[_e]);
        }
        if (le || Pe) {
          var Ce = typeof E == "function" ? E.displayName || E.name || "Unknown" : E;
          le && $e(he, Ce), Pe && Ve(he, Ce);
        }
        return Xe(E, le, Pe, pe, re, Ee.current, he);
      }
    }
    var Ue = I.ReactCurrentOwner, z = I.ReactDebugCurrentFrame;
    function q(E) {
      if (E) {
        var K = E._owner, Z = de(E.type, E._source, K ? K.type : null);
        z.setExtraStackFrame(Z);
      } else
        z.setExtraStackFrame(null);
    }
    var H;
    H = !1;
    function ee(E) {
      return typeof E == "object" && E !== null && E.$$typeof === n;
    }
    function se() {
      {
        if (Ue.current) {
          var E = C(Ue.current.type);
          if (E)
            return `

Check the render method of \`` + E + "`.";
        }
        return "";
      }
    }
    function ce(E) {
      return "";
    }
    var fe = {};
    function Me(E) {
      {
        var K = se();
        if (!K) {
          var Z = typeof E == "string" ? E : E.displayName || E.name;
          Z && (K = `

Check the top-level render call using <` + Z + ">.");
        }
        return K;
      }
    }
    function Le(E, K) {
      {
        if (!E._store || E._store.validated || E.key != null)
          return;
        E._store.validated = !0;
        var Z = Me(K);
        if (fe[Z])
          return;
        fe[Z] = !0;
        var re = "";
        E && E._owner && E._owner !== Ue.current && (re = " It was passed a child from " + C(E._owner.type) + "."), q(E), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Z, re), q(null);
      }
    }
    function De(E, K) {
      {
        if (typeof E != "object")
          return;
        if (Se(E))
          for (var Z = 0; Z < E.length; Z++) {
            var re = E[Z];
            ee(re) && Le(re, K);
          }
        else if (ee(E))
          E._store && (E._store.validated = !0);
        else if (E) {
          var pe = y(E);
          if (typeof pe == "function" && pe !== E.entries)
            for (var _e = pe.call(E), he; !(he = _e.next()).done; )
              ee(he.value) && Le(he.value, K);
        }
      }
    }
    function qe(E) {
      {
        var K = E.type;
        if (K == null || typeof K == "string")
          return;
        var Z;
        if (typeof K == "function")
          Z = K.propTypes;
        else if (typeof K == "object" && (K.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        K.$$typeof === P))
          Z = K.propTypes;
        else
          return;
        if (Z) {
          var re = C(K);
          be(Z, E.props, "prop", re, E);
        } else if (K.PropTypes !== void 0 && !H) {
          H = !0;
          var pe = C(K);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", pe || "Unknown");
        }
        typeof K.getDefaultProps == "function" && !K.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ye(E) {
      {
        for (var K = Object.keys(E.props), Z = 0; Z < K.length; Z++) {
          var re = K[Z];
          if (re !== "children" && re !== "key") {
            q(E), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", re), q(null);
            break;
          }
        }
        E.ref !== null && (q(E), T("Invalid attribute `ref` supplied to `React.Fragment`."), q(null));
      }
    }
    var We = {};
    function Be(E, K, Z, re, pe, _e) {
      {
        var he = R(E);
        if (!he) {
          var le = "";
          (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (le += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Pe = ce();
          Pe ? le += Pe : le += se();
          var ve;
          E === null ? ve = "null" : Se(E) ? ve = "array" : E !== void 0 && E.$$typeof === n ? (ve = "<" + (C(E.type) || "Unknown") + " />", le = " Did you accidentally export a JSX literal instead of a component?") : ve = typeof E, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ve, le);
        }
        var Ce = ze(E, K, Z, pe, _e);
        if (Ce == null)
          return Ce;
        if (he) {
          var Fe = K.children;
          if (Fe !== void 0)
            if (re)
              if (Se(Fe)) {
                for (var Ne = 0; Ne < Fe.length; Ne++)
                  De(Fe[Ne], E);
                Object.freeze && Object.freeze(Fe);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              De(Fe, E);
        }
        if (ae.call(K, "key")) {
          var Ie = C(E), Te = Object.keys(K).filter(function(nt) {
            return nt !== "key";
          }), Je = Te.length > 0 ? "{key: someKey, " + Te.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!We[Ie + Je]) {
            var tt = Te.length > 0 ? "{" + Te.join(": ..., ") + ": ...}" : "{}";
            T(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Je, Ie, tt, Ie), We[Ie + Je] = !0;
          }
        }
        return E === t ? Ye(Ce) : qe(Ce), Ce;
      }
    }
    function Ke(E, K, Z) {
      return Be(E, K, Z, !0);
    }
    function Qe(E, K, Z) {
      return Be(E, K, Z, !1);
    }
    var Ze = Qe, et = Ke;
    reactJsxRuntime_development.Fragment = t, reactJsxRuntime_development.jsx = Ze, reactJsxRuntime_development.jsxs = et;
  }()), reactJsxRuntime_development;
}
var hasRequiredJsxRuntime;
function requireJsxRuntime() {
  return hasRequiredJsxRuntime || (hasRequiredJsxRuntime = 1, process.env.NODE_ENV === "production" ? jsxRuntime.exports = requireReactJsxRuntime_production_min() : jsxRuntime.exports = requireReactJsxRuntime_development()), jsxRuntime.exports;
}
var jsxRuntimeExports = requireJsxRuntime();
function commonjsRequire(X) {
  throw new Error('Could not dynamically require "' + X + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var pdf$1 = { exports: {} };
const __viteBrowserExternal = {}, __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" })), require$$5 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
var pdf = pdf$1.exports, hasRequiredPdf;
function requirePdf() {
  return hasRequiredPdf || (hasRequiredPdf = 1, function(module, exports) {
    (function(n, _) {
      module.exports = _();
    })(pdf, function() {
      return (
        /******/
        (() => {
          var __webpack_modules__ = [
            ,
            /* 1 */
            /***/
            (X, n, _) => {
              Object.defineProperty(n, "__esModule", {
                value: !0
              }), n.addLinkAttributes = c, n.deprecated = S, n.getFilenameFromUrl = T, n.getPdfFilenameFromUrl = b, n.getXfaPageViewport = R, n.isDataScheme = y, n.isPdfFile = I, n.isValidFetchUrl = s, n.loadScript = u, n.StatTimer = n.RenderingCancelledException = n.PDFDateString = n.PageViewport = n.LinkTarget = n.DOMSVGFactory = n.DOMStandardFontDataFactory = n.DOMCMapReaderFactory = n.DOMCanvasFactory = n.DEFAULT_LINK_REL = void 0;
              var t = _(2), g = _(5);
              const x = "noopener noreferrer nofollow";
              n.DEFAULT_LINK_REL = x;
              const F = "http://www.w3.org/2000/svg";
              class w extends g.BaseCanvasFactory {
                constructor({
                  ownerDocument: D = globalThis.document
                } = {}) {
                  super(), this._document = D;
                }
                _createCanvas(D, C) {
                  const L = this._document.createElement("canvas");
                  return L.width = D, L.height = C, L;
                }
              }
              n.DOMCanvasFactory = w;
              async function m(V, D = !1) {
                if (s(V, document.baseURI)) {
                  const C = await fetch(V);
                  if (!C.ok)
                    throw new Error(C.statusText);
                  return D ? new Uint8Array(await C.arrayBuffer()) : (0, t.stringToBytes)(await C.text());
                }
                return new Promise((C, L) => {
                  const j = new XMLHttpRequest();
                  j.open("GET", V, !0), D && (j.responseType = "arraybuffer"), j.onreadystatechange = () => {
                    if (j.readyState === XMLHttpRequest.DONE) {
                      if (j.status === 200 || j.status === 0) {
                        let $;
                        if (D && j.response ? $ = new Uint8Array(j.response) : !D && j.responseText && ($ = (0, t.stringToBytes)(j.responseText)), $) {
                          C($);
                          return;
                        }
                      }
                      L(new Error(j.statusText));
                    }
                  }, j.send(null);
                });
              }
              class d extends g.BaseCMapReaderFactory {
                _fetchData(D, C) {
                  return m(D, this.isCompressed).then((L) => ({
                    cMapData: L,
                    compressionType: C
                  }));
                }
              }
              n.DOMCMapReaderFactory = d;
              class f extends g.BaseStandardFontDataFactory {
                _fetchData(D) {
                  return m(D, !0);
                }
              }
              n.DOMStandardFontDataFactory = f;
              class P extends g.BaseSVGFactory {
                _createSVG(D) {
                  return document.createElementNS(F, D);
                }
              }
              n.DOMSVGFactory = P;
              class N {
                constructor({
                  viewBox: D,
                  scale: C,
                  rotation: L,
                  offsetX: j = 0,
                  offsetY: $ = 0,
                  dontFlip: O = !1
                }) {
                  this.viewBox = D, this.scale = C, this.rotation = L, this.offsetX = j, this.offsetY = $;
                  const o = (D[2] + D[0]) / 2, e = (D[3] + D[1]) / 2;
                  let i, a, h, l;
                  switch (L %= 360, L < 0 && (L += 360), L) {
                    case 180:
                      i = -1, a = 0, h = 0, l = 1;
                      break;
                    case 90:
                      i = 0, a = 1, h = 1, l = 0;
                      break;
                    case 270:
                      i = 0, a = -1, h = -1, l = 0;
                      break;
                    case 0:
                      i = 1, a = 0, h = 0, l = -1;
                      break;
                    default:
                      throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
                  }
                  O && (h = -h, l = -l);
                  let A, k, U, G;
                  i === 0 ? (A = Math.abs(e - D[1]) * C + j, k = Math.abs(o - D[0]) * C + $, U = Math.abs(D[3] - D[1]) * C, G = Math.abs(D[2] - D[0]) * C) : (A = Math.abs(o - D[0]) * C + j, k = Math.abs(e - D[1]) * C + $, U = Math.abs(D[2] - D[0]) * C, G = Math.abs(D[3] - D[1]) * C), this.transform = [i * C, a * C, h * C, l * C, A - i * C * o - h * C * e, k - a * C * o - l * C * e], this.width = U, this.height = G;
                }
                clone({
                  scale: D = this.scale,
                  rotation: C = this.rotation,
                  offsetX: L = this.offsetX,
                  offsetY: j = this.offsetY,
                  dontFlip: $ = !1
                } = {}) {
                  return new N({
                    viewBox: this.viewBox.slice(),
                    scale: D,
                    rotation: C,
                    offsetX: L,
                    offsetY: j,
                    dontFlip: $
                  });
                }
                convertToViewportPoint(D, C) {
                  return t.Util.applyTransform([D, C], this.transform);
                }
                convertToViewportRectangle(D) {
                  const C = t.Util.applyTransform([D[0], D[1]], this.transform), L = t.Util.applyTransform([D[2], D[3]], this.transform);
                  return [C[0], C[1], L[0], L[1]];
                }
                convertToPdfPoint(D, C) {
                  return t.Util.applyInverseTransform([D, C], this.transform);
                }
              }
              n.PageViewport = N;
              class v extends t.BaseException {
                constructor(D, C) {
                  super(D), this.type = C;
                }
              }
              n.RenderingCancelledException = v;
              const W = {
                NONE: 0,
                SELF: 1,
                BLANK: 2,
                PARENT: 3,
                TOP: 4
              };
              n.LinkTarget = W;
              function c(V, {
                url: D,
                target: C,
                rel: L,
                enabled: j = !0
              } = {}) {
                (0, t.assert)(D && typeof D == "string", 'addLinkAttributes: A valid "url" parameter must provided.');
                const $ = (0, t.removeNullCharacters)(D);
                j ? V.href = V.title = $ : (V.href = "", V.title = `Disabled: ${$}`, V.onclick = () => !1);
                let O = "";
                switch (C) {
                  case W.NONE:
                    break;
                  case W.SELF:
                    O = "_self";
                    break;
                  case W.BLANK:
                    O = "_blank";
                    break;
                  case W.PARENT:
                    O = "_parent";
                    break;
                  case W.TOP:
                    O = "_top";
                    break;
                }
                V.target = O, V.rel = typeof L == "string" ? L : x;
              }
              function y(V) {
                const D = V.length;
                let C = 0;
                for (; C < D && V[C].trim() === ""; )
                  C++;
                return V.substring(C, C + 5).toLowerCase() === "data:";
              }
              function I(V) {
                return typeof V == "string" && /\.pdf$/i.test(V);
              }
              function T(V) {
                const D = V.indexOf("#"), C = V.indexOf("?"), L = Math.min(D > 0 ? D : V.length, C > 0 ? C : V.length);
                return V.substring(V.lastIndexOf("/", L) + 1, L);
              }
              function b(V, D = "document.pdf") {
                if (typeof V != "string")
                  return D;
                if (y(V))
                  return (0, t.warn)('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), D;
                const C = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/, L = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i, j = C.exec(V);
                let $ = L.exec(j[1]) || L.exec(j[2]) || L.exec(j[3]);
                if ($ && ($ = $[0], $.includes("%")))
                  try {
                    $ = L.exec(decodeURIComponent($))[0];
                  } catch {
                  }
                return $ || D;
              }
              class r {
                constructor() {
                  this.started = /* @__PURE__ */ Object.create(null), this.times = [];
                }
                time(D) {
                  D in this.started && (0, t.warn)(`Timer is already running for ${D}`), this.started[D] = Date.now();
                }
                timeEnd(D) {
                  D in this.started || (0, t.warn)(`Timer has not been started for ${D}`), this.times.push({
                    name: D,
                    start: this.started[D],
                    end: Date.now()
                  }), delete this.started[D];
                }
                toString() {
                  const D = [];
                  let C = 0;
                  for (const L of this.times) {
                    const j = L.name;
                    j.length > C && (C = j.length);
                  }
                  for (const L of this.times) {
                    const j = L.end - L.start;
                    D.push(`${L.name.padEnd(C)} ${j}ms
`);
                  }
                  return D.join("");
                }
              }
              n.StatTimer = r;
              function s(V, D) {
                try {
                  const {
                    protocol: C
                  } = D ? new URL(V, D) : new URL(V);
                  return C === "http:" || C === "https:";
                } catch {
                  return !1;
                }
              }
              function u(V, D = !1) {
                return new Promise((C, L) => {
                  const j = document.createElement("script");
                  j.src = V, j.onload = function($) {
                    D && j.remove(), C($);
                  }, j.onerror = function() {
                    L(new Error(`Cannot load script at: ${j.src}`));
                  }, (document.head || document.documentElement).appendChild(j);
                });
              }
              function S(V) {
                console.log("Deprecated API usage: " + V);
              }
              let p;
              class M {
                static toDateObject(D) {
                  if (!D || !(0, t.isString)(D))
                    return null;
                  p || (p = new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
                  const C = p.exec(D);
                  if (!C)
                    return null;
                  const L = parseInt(C[1], 10);
                  let j = parseInt(C[2], 10);
                  j = j >= 1 && j <= 12 ? j - 1 : 0;
                  let $ = parseInt(C[3], 10);
                  $ = $ >= 1 && $ <= 31 ? $ : 1;
                  let O = parseInt(C[4], 10);
                  O = O >= 0 && O <= 23 ? O : 0;
                  let o = parseInt(C[5], 10);
                  o = o >= 0 && o <= 59 ? o : 0;
                  let e = parseInt(C[6], 10);
                  e = e >= 0 && e <= 59 ? e : 0;
                  const i = C[7] || "Z";
                  let a = parseInt(C[8], 10);
                  a = a >= 0 && a <= 23 ? a : 0;
                  let h = parseInt(C[9], 10) || 0;
                  return h = h >= 0 && h <= 59 ? h : 0, i === "-" ? (O += a, o += h) : i === "+" && (O -= a, o -= h), new Date(Date.UTC(L, j, $, O, o, e));
                }
              }
              n.PDFDateString = M;
              function R(V, {
                scale: D = 1,
                rotation: C = 0
              }) {
                const {
                  width: L,
                  height: j
                } = V.attributes.style, $ = [0, 0, parseInt(L), parseInt(j)];
                return new N({
                  viewBox: $,
                  scale: D,
                  rotation: C
                });
              }
            },
            /* 2 */
            /***/
            (X, n, _) => {
              Object.defineProperty(n, "__esModule", {
                value: !0
              }), n.arrayByteLength = oe, n.arraysToBytes = ie, n.assert = $, n.bytesToString = Q, n.createObjectURL = Ue, n.createPromiseCapability = ze, n.createValidAbsoluteUrl = e, n.escapeString = Re, n.getModificationDate = Xe, n.getVerbosityLevel = D, n.info = C, n.isArrayBuffer = $e, n.isArrayEqual = Ve, n.isAscii = Ee, n.isBool = je, n.isNum = Ge, n.isSameOrigin = O, n.isString = He, n.objectFromMap = ue, n.objectSize = ae, n.removeNullCharacters = J, n.setVerbosityLevel = V, n.shadow = i, n.string32 = de, n.stringToBytes = te, n.stringToPDFString = xe, n.stringToUTF16BEString = ke, n.stringToUTF8String = ge, n.unreachable = j, n.utf8StringToString = Oe, n.warn = L, n.VerbosityLevel = n.Util = n.UNSUPPORTED_FEATURES = n.UnknownErrorException = n.UnexpectedResponseException = n.TextRenderingMode = n.StreamType = n.PermissionFlag = n.PasswordResponses = n.PasswordException = n.PageActionEventType = n.OPS = n.MissingPDFException = n.IsLittleEndianCached = n.IsEvalSupportedCached = n.InvalidPDFException = n.ImageKind = n.IDENTITY_MATRIX = n.FormatError = n.FontType = n.FONT_IDENTITY_MATRIX = n.DocumentActionEventType = n.CMapCompressionType = n.BaseException = n.AnnotationType = n.AnnotationStateModelType = n.AnnotationReviewState = n.AnnotationReplyType = n.AnnotationMarkedState = n.AnnotationFlag = n.AnnotationFieldFlag = n.AnnotationBorderStyleType = n.AnnotationActionEventType = n.AbortException = void 0, _(3);
              const t = [1, 0, 0, 1, 0, 0];
              n.IDENTITY_MATRIX = t;
              const g = [1e-3, 0, 0, 1e-3, 0, 0];
              n.FONT_IDENTITY_MATRIX = g;
              const x = {
                PRINT: 4,
                MODIFY_CONTENTS: 8,
                COPY: 16,
                MODIFY_ANNOTATIONS: 32,
                FILL_INTERACTIVE_FORMS: 256,
                COPY_FOR_ACCESSIBILITY: 512,
                ASSEMBLE: 1024,
                PRINT_HIGH_QUALITY: 2048
              };
              n.PermissionFlag = x;
              const F = {
                FILL: 0,
                STROKE: 1,
                FILL_STROKE: 2,
                INVISIBLE: 3,
                FILL_ADD_TO_PATH: 4,
                STROKE_ADD_TO_PATH: 5,
                FILL_STROKE_ADD_TO_PATH: 6,
                ADD_TO_PATH: 7,
                FILL_STROKE_MASK: 3,
                ADD_TO_PATH_FLAG: 4
              };
              n.TextRenderingMode = F;
              const w = {
                GRAYSCALE_1BPP: 1,
                RGB_24BPP: 2,
                RGBA_32BPP: 3
              };
              n.ImageKind = w;
              const m = {
                TEXT: 1,
                LINK: 2,
                FREETEXT: 3,
                LINE: 4,
                SQUARE: 5,
                CIRCLE: 6,
                POLYGON: 7,
                POLYLINE: 8,
                HIGHLIGHT: 9,
                UNDERLINE: 10,
                SQUIGGLY: 11,
                STRIKEOUT: 12,
                STAMP: 13,
                CARET: 14,
                INK: 15,
                POPUP: 16,
                FILEATTACHMENT: 17,
                SOUND: 18,
                MOVIE: 19,
                WIDGET: 20,
                SCREEN: 21,
                PRINTERMARK: 22,
                TRAPNET: 23,
                WATERMARK: 24,
                THREED: 25,
                REDACT: 26
              };
              n.AnnotationType = m;
              const d = {
                MARKED: "Marked",
                REVIEW: "Review"
              };
              n.AnnotationStateModelType = d;
              const f = {
                MARKED: "Marked",
                UNMARKED: "Unmarked"
              };
              n.AnnotationMarkedState = f;
              const P = {
                ACCEPTED: "Accepted",
                REJECTED: "Rejected",
                CANCELLED: "Cancelled",
                COMPLETED: "Completed",
                NONE: "None"
              };
              n.AnnotationReviewState = P;
              const N = {
                GROUP: "Group",
                REPLY: "R"
              };
              n.AnnotationReplyType = N;
              const v = {
                INVISIBLE: 1,
                HIDDEN: 2,
                PRINT: 4,
                NOZOOM: 8,
                NOROTATE: 16,
                NOVIEW: 32,
                READONLY: 64,
                LOCKED: 128,
                TOGGLENOVIEW: 256,
                LOCKEDCONTENTS: 512
              };
              n.AnnotationFlag = v;
              const W = {
                READONLY: 1,
                REQUIRED: 2,
                NOEXPORT: 4,
                MULTILINE: 4096,
                PASSWORD: 8192,
                NOTOGGLETOOFF: 16384,
                RADIO: 32768,
                PUSHBUTTON: 65536,
                COMBO: 131072,
                EDIT: 262144,
                SORT: 524288,
                FILESELECT: 1048576,
                MULTISELECT: 2097152,
                DONOTSPELLCHECK: 4194304,
                DONOTSCROLL: 8388608,
                COMB: 16777216,
                RICHTEXT: 33554432,
                RADIOSINUNISON: 33554432,
                COMMITONSELCHANGE: 67108864
              };
              n.AnnotationFieldFlag = W;
              const c = {
                SOLID: 1,
                DASHED: 2,
                BEVELED: 3,
                INSET: 4,
                UNDERLINE: 5
              };
              n.AnnotationBorderStyleType = c;
              const y = {
                E: "Mouse Enter",
                X: "Mouse Exit",
                D: "Mouse Down",
                U: "Mouse Up",
                Fo: "Focus",
                Bl: "Blur",
                PO: "PageOpen",
                PC: "PageClose",
                PV: "PageVisible",
                PI: "PageInvisible",
                K: "Keystroke",
                F: "Format",
                V: "Validate",
                C: "Calculate"
              };
              n.AnnotationActionEventType = y;
              const I = {
                WC: "WillClose",
                WS: "WillSave",
                DS: "DidSave",
                WP: "WillPrint",
                DP: "DidPrint"
              };
              n.DocumentActionEventType = I;
              const T = {
                O: "PageOpen",
                C: "PageClose"
              };
              n.PageActionEventType = T;
              const b = {
                UNKNOWN: "UNKNOWN",
                FLATE: "FLATE",
                LZW: "LZW",
                DCT: "DCT",
                JPX: "JPX",
                JBIG: "JBIG",
                A85: "A85",
                AHX: "AHX",
                CCF: "CCF",
                RLX: "RLX"
              };
              n.StreamType = b;
              const r = {
                UNKNOWN: "UNKNOWN",
                TYPE1: "TYPE1",
                TYPE1STANDARD: "TYPE1STANDARD",
                TYPE1C: "TYPE1C",
                CIDFONTTYPE0: "CIDFONTTYPE0",
                CIDFONTTYPE0C: "CIDFONTTYPE0C",
                TRUETYPE: "TRUETYPE",
                CIDFONTTYPE2: "CIDFONTTYPE2",
                TYPE3: "TYPE3",
                OPENTYPE: "OPENTYPE",
                TYPE0: "TYPE0",
                MMTYPE1: "MMTYPE1"
              };
              n.FontType = r;
              const s = {
                ERRORS: 0,
                WARNINGS: 1,
                INFOS: 5
              };
              n.VerbosityLevel = s;
              const u = {
                NONE: 0,
                BINARY: 1,
                STREAM: 2
              };
              n.CMapCompressionType = u;
              const S = {
                dependency: 1,
                setLineWidth: 2,
                setLineCap: 3,
                setLineJoin: 4,
                setMiterLimit: 5,
                setDash: 6,
                setRenderingIntent: 7,
                setFlatness: 8,
                setGState: 9,
                save: 10,
                restore: 11,
                transform: 12,
                moveTo: 13,
                lineTo: 14,
                curveTo: 15,
                curveTo2: 16,
                curveTo3: 17,
                closePath: 18,
                rectangle: 19,
                stroke: 20,
                closeStroke: 21,
                fill: 22,
                eoFill: 23,
                fillStroke: 24,
                eoFillStroke: 25,
                closeFillStroke: 26,
                closeEOFillStroke: 27,
                endPath: 28,
                clip: 29,
                eoClip: 30,
                beginText: 31,
                endText: 32,
                setCharSpacing: 33,
                setWordSpacing: 34,
                setHScale: 35,
                setLeading: 36,
                setFont: 37,
                setTextRenderingMode: 38,
                setTextRise: 39,
                moveText: 40,
                setLeadingMoveText: 41,
                setTextMatrix: 42,
                nextLine: 43,
                showText: 44,
                showSpacedText: 45,
                nextLineShowText: 46,
                nextLineSetSpacingShowText: 47,
                setCharWidth: 48,
                setCharWidthAndBounds: 49,
                setStrokeColorSpace: 50,
                setFillColorSpace: 51,
                setStrokeColor: 52,
                setStrokeColorN: 53,
                setFillColor: 54,
                setFillColorN: 55,
                setStrokeGray: 56,
                setFillGray: 57,
                setStrokeRGBColor: 58,
                setFillRGBColor: 59,
                setStrokeCMYKColor: 60,
                setFillCMYKColor: 61,
                shadingFill: 62,
                beginInlineImage: 63,
                beginImageData: 64,
                endInlineImage: 65,
                paintXObject: 66,
                markPoint: 67,
                markPointProps: 68,
                beginMarkedContent: 69,
                beginMarkedContentProps: 70,
                endMarkedContent: 71,
                beginCompat: 72,
                endCompat: 73,
                paintFormXObjectBegin: 74,
                paintFormXObjectEnd: 75,
                beginGroup: 76,
                endGroup: 77,
                beginAnnotations: 78,
                endAnnotations: 79,
                beginAnnotation: 80,
                endAnnotation: 81,
                paintJpegXObject: 82,
                paintImageMaskXObject: 83,
                paintImageMaskXObjectGroup: 84,
                paintImageXObject: 85,
                paintInlineImageXObject: 86,
                paintInlineImageXObjectGroup: 87,
                paintImageXObjectRepeat: 88,
                paintImageMaskXObjectRepeat: 89,
                paintSolidColorImageMask: 90,
                constructPath: 91
              };
              n.OPS = S;
              const p = {
                unknown: "unknown",
                forms: "forms",
                javaScript: "javaScript",
                signatures: "signatures",
                smask: "smask",
                shadingPattern: "shadingPattern",
                font: "font",
                errorTilingPattern: "errorTilingPattern",
                errorExtGState: "errorExtGState",
                errorXObject: "errorXObject",
                errorFontLoadType3: "errorFontLoadType3",
                errorFontState: "errorFontState",
                errorFontMissing: "errorFontMissing",
                errorFontTranslate: "errorFontTranslate",
                errorColorSpace: "errorColorSpace",
                errorOperatorList: "errorOperatorList",
                errorFontToUnicode: "errorFontToUnicode",
                errorFontLoadNative: "errorFontLoadNative",
                errorFontBuildPath: "errorFontBuildPath",
                errorFontGetPath: "errorFontGetPath",
                errorMarkedContent: "errorMarkedContent"
              };
              n.UNSUPPORTED_FEATURES = p;
              const M = {
                NEED_PASSWORD: 1,
                INCORRECT_PASSWORD: 2
              };
              n.PasswordResponses = M;
              let R = s.WARNINGS;
              function V(z) {
                Number.isInteger(z) && (R = z);
              }
              function D() {
                return R;
              }
              function C(z) {
                R >= s.INFOS && console.log(`Info: ${z}`);
              }
              function L(z) {
                R >= s.WARNINGS && console.log(`Warning: ${z}`);
              }
              function j(z) {
                throw new Error(z);
              }
              function $(z, q) {
                z || j(q);
              }
              function O(z, q) {
                let H;
                try {
                  if (H = new URL(z), !H.origin || H.origin === "null")
                    return !1;
                } catch {
                  return !1;
                }
                const ee = new URL(q, H);
                return H.origin === ee.origin;
              }
              function o(z) {
                if (!z)
                  return !1;
                switch (z.protocol) {
                  case "http:":
                  case "https:":
                  case "ftp:":
                  case "mailto:":
                  case "tel:":
                    return !0;
                  default:
                    return !1;
                }
              }
              function e(z, q) {
                if (!z)
                  return null;
                try {
                  const H = q ? new URL(z, q) : new URL(z);
                  if (o(H))
                    return H;
                } catch {
                }
                return null;
              }
              function i(z, q, H) {
                return Object.defineProperty(z, q, {
                  value: H,
                  enumerable: !0,
                  configurable: !0,
                  writable: !1
                }), H;
              }
              const a = function() {
                function q(H) {
                  this.constructor === q && j("Cannot initialize BaseException."), this.message = H, this.name = this.constructor.name;
                }
                return q.prototype = new Error(), q.constructor = q, q;
              }();
              n.BaseException = a;
              class h extends a {
                constructor(q, H) {
                  super(q), this.code = H;
                }
              }
              n.PasswordException = h;
              class l extends a {
                constructor(q, H) {
                  super(q), this.details = H;
                }
              }
              n.UnknownErrorException = l;
              class A extends a {
              }
              n.InvalidPDFException = A;
              class k extends a {
              }
              n.MissingPDFException = k;
              class U extends a {
                constructor(q, H) {
                  super(q), this.status = H;
                }
              }
              n.UnexpectedResponseException = U;
              class G extends a {
              }
              n.FormatError = G;
              class B extends a {
              }
              n.AbortException = B;
              const Y = /\x00/g;
              function J(z) {
                return typeof z != "string" ? (L("The argument for removeNullCharacters must be a string."), z) : z.replace(Y, "");
              }
              function Q(z) {
                $(z !== null && typeof z == "object" && z.length !== void 0, "Invalid argument for bytesToString");
                const q = z.length, H = 8192;
                if (q < H)
                  return String.fromCharCode.apply(null, z);
                const ee = [];
                for (let se = 0; se < q; se += H) {
                  const ce = Math.min(se + H, q), fe = z.subarray(se, ce);
                  ee.push(String.fromCharCode.apply(null, fe));
                }
                return ee.join("");
              }
              function te(z) {
                $(typeof z == "string", "Invalid argument for stringToBytes");
                const q = z.length, H = new Uint8Array(q);
                for (let ee = 0; ee < q; ++ee)
                  H[ee] = z.charCodeAt(ee) & 255;
                return H;
              }
              function oe(z) {
                return z.length !== void 0 ? z.length : ($(z.byteLength !== void 0, "arrayByteLength - invalid argument."), z.byteLength);
              }
              function ie(z) {
                const q = z.length;
                if (q === 1 && z[0] instanceof Uint8Array)
                  return z[0];
                let H = 0;
                for (let ce = 0; ce < q; ce++)
                  H += oe(z[ce]);
                let ee = 0;
                const se = new Uint8Array(H);
                for (let ce = 0; ce < q; ce++) {
                  let fe = z[ce];
                  fe instanceof Uint8Array || (typeof fe == "string" ? fe = te(fe) : fe = new Uint8Array(fe));
                  const Me = fe.byteLength;
                  se.set(fe, ee), ee += Me;
                }
                return se;
              }
              function de(z) {
                return String.fromCharCode(z >> 24 & 255, z >> 16 & 255, z >> 8 & 255, z & 255);
              }
              function ae(z) {
                return Object.keys(z).length;
              }
              function ue(z) {
                const q = /* @__PURE__ */ Object.create(null);
                for (const [H, ee] of z)
                  q[H] = ee;
                return q;
              }
              function ye() {
                const z = new Uint8Array(4);
                return z[0] = 1, new Uint32Array(z.buffer, 0, 1)[0] === 1;
              }
              const ne = {
                get value() {
                  return i(this, "value", ye());
                }
              };
              n.IsLittleEndianCached = ne;
              function be() {
                try {
                  return new Function(""), !0;
                } catch {
                  return !1;
                }
              }
              const me = {
                get value() {
                  return i(this, "value", be());
                }
              };
              n.IsEvalSupportedCached = me;
              const Se = [...Array(256).keys()].map((z) => z.toString(16).padStart(2, "0"));
              class Ae {
                static makeHexColor(q, H, ee) {
                  return `#${Se[q]}${Se[H]}${Se[ee]}`;
                }
                static transform(q, H) {
                  return [q[0] * H[0] + q[2] * H[1], q[1] * H[0] + q[3] * H[1], q[0] * H[2] + q[2] * H[3], q[1] * H[2] + q[3] * H[3], q[0] * H[4] + q[2] * H[5] + q[4], q[1] * H[4] + q[3] * H[5] + q[5]];
                }
                static applyTransform(q, H) {
                  const ee = q[0] * H[0] + q[1] * H[2] + H[4], se = q[0] * H[1] + q[1] * H[3] + H[5];
                  return [ee, se];
                }
                static applyInverseTransform(q, H) {
                  const ee = H[0] * H[3] - H[1] * H[2], se = (q[0] * H[3] - q[1] * H[2] + H[2] * H[5] - H[4] * H[3]) / ee, ce = (-q[0] * H[1] + q[1] * H[0] + H[4] * H[1] - H[5] * H[0]) / ee;
                  return [se, ce];
                }
                static getAxialAlignedBoundingBox(q, H) {
                  const ee = Ae.applyTransform(q, H), se = Ae.applyTransform(q.slice(2, 4), H), ce = Ae.applyTransform([q[0], q[3]], H), fe = Ae.applyTransform([q[2], q[1]], H);
                  return [Math.min(ee[0], se[0], ce[0], fe[0]), Math.min(ee[1], se[1], ce[1], fe[1]), Math.max(ee[0], se[0], ce[0], fe[0]), Math.max(ee[1], se[1], ce[1], fe[1])];
                }
                static inverseTransform(q) {
                  const H = q[0] * q[3] - q[1] * q[2];
                  return [q[3] / H, -q[1] / H, -q[2] / H, q[0] / H, (q[2] * q[5] - q[4] * q[3]) / H, (q[4] * q[1] - q[5] * q[0]) / H];
                }
                static apply3dTransform(q, H) {
                  return [q[0] * H[0] + q[1] * H[1] + q[2] * H[2], q[3] * H[0] + q[4] * H[1] + q[5] * H[2], q[6] * H[0] + q[7] * H[1] + q[8] * H[2]];
                }
                static singularValueDecompose2dScale(q) {
                  const H = [q[0], q[2], q[1], q[3]], ee = q[0] * H[0] + q[1] * H[2], se = q[0] * H[1] + q[1] * H[3], ce = q[2] * H[0] + q[3] * H[2], fe = q[2] * H[1] + q[3] * H[3], Me = (ee + fe) / 2, Le = Math.sqrt((ee + fe) ** 2 - 4 * (ee * fe - ce * se)) / 2, De = Me + Le || 1, qe = Me - Le || 1;
                  return [Math.sqrt(De), Math.sqrt(qe)];
                }
                static normalizeRect(q) {
                  const H = q.slice(0);
                  return q[0] > q[2] && (H[0] = q[2], H[2] = q[0]), q[1] > q[3] && (H[1] = q[3], H[3] = q[1]), H;
                }
                static intersect(q, H) {
                  function ee(Me, Le) {
                    return Me - Le;
                  }
                  const se = [q[0], q[2], H[0], H[2]].sort(ee), ce = [q[1], q[3], H[1], H[3]].sort(ee), fe = [];
                  if (q = Ae.normalizeRect(q), H = Ae.normalizeRect(H), se[0] === q[0] && se[1] === H[0] || se[0] === H[0] && se[1] === q[0])
                    fe[0] = se[1], fe[2] = se[2];
                  else
                    return null;
                  if (ce[0] === q[1] && ce[1] === H[1] || ce[0] === H[1] && ce[1] === q[1])
                    fe[1] = ce[1], fe[3] = ce[2];
                  else
                    return null;
                  return fe;
                }
              }
              n.Util = Ae;
              const we = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 728, 711, 710, 729, 733, 731, 730, 732, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8226, 8224, 8225, 8230, 8212, 8211, 402, 8260, 8249, 8250, 8722, 8240, 8222, 8220, 8221, 8216, 8217, 8218, 8482, 64257, 64258, 321, 338, 352, 376, 381, 305, 322, 339, 353, 382, 0, 8364];
              function xe(z) {
                const q = z.length, H = [];
                if (z[0] === "þ" && z[1] === "ÿ")
                  for (let ee = 2; ee < q; ee += 2)
                    H.push(String.fromCharCode(z.charCodeAt(ee) << 8 | z.charCodeAt(ee + 1)));
                else if (z[0] === "ÿ" && z[1] === "þ")
                  for (let ee = 2; ee < q; ee += 2)
                    H.push(String.fromCharCode(z.charCodeAt(ee + 1) << 8 | z.charCodeAt(ee)));
                else
                  for (let ee = 0; ee < q; ++ee) {
                    const se = we[z.charCodeAt(ee)];
                    H.push(se ? String.fromCharCode(se) : z.charAt(ee));
                  }
                return H.join("");
              }
              function Re(z) {
                return z.replace(/([()\\\n\r])/g, (q) => q === `
` ? "\\n" : q === "\r" ? "\\r" : `\\${q}`);
              }
              function Ee(z) {
                return /^[\x00-\x7F]*$/.test(z);
              }
              function ke(z) {
                const q = ["þÿ"];
                for (let H = 0, ee = z.length; H < ee; H++) {
                  const se = z.charCodeAt(H);
                  q.push(String.fromCharCode(se >> 8 & 255), String.fromCharCode(se & 255));
                }
                return q.join("");
              }
              function ge(z) {
                return decodeURIComponent(escape(z));
              }
              function Oe(z) {
                return unescape(encodeURIComponent(z));
              }
              function je(z) {
                return typeof z == "boolean";
              }
              function Ge(z) {
                return typeof z == "number";
              }
              function He(z) {
                return typeof z == "string";
              }
              function $e(z) {
                return typeof z == "object" && z !== null && z.byteLength !== void 0;
              }
              function Ve(z, q) {
                if (z.length !== q.length)
                  return !1;
                for (let H = 0, ee = z.length; H < ee; H++)
                  if (z[H] !== q[H])
                    return !1;
                return !0;
              }
              function Xe(z = /* @__PURE__ */ new Date()) {
                return [z.getUTCFullYear().toString(), (z.getUTCMonth() + 1).toString().padStart(2, "0"), z.getUTCDate().toString().padStart(2, "0"), z.getUTCHours().toString().padStart(2, "0"), z.getUTCMinutes().toString().padStart(2, "0"), z.getUTCSeconds().toString().padStart(2, "0")].join("");
              }
              function ze() {
                const z = /* @__PURE__ */ Object.create(null);
                let q = !1;
                return Object.defineProperty(z, "settled", {
                  get() {
                    return q;
                  }
                }), z.promise = new Promise(function(H, ee) {
                  z.resolve = function(se) {
                    q = !0, H(se);
                  }, z.reject = function(se) {
                    q = !0, ee(se);
                  };
                }), z;
              }
              function Ue(z, q = "", H = !1) {
                if (URL.createObjectURL && !H)
                  return URL.createObjectURL(new Blob([z], {
                    type: q
                  }));
                const ee = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                let se = `data:${q};base64,`;
                for (let ce = 0, fe = z.length; ce < fe; ce += 3) {
                  const Me = z[ce] & 255, Le = z[ce + 1] & 255, De = z[ce + 2] & 255, qe = Me >> 2, Ye = (Me & 3) << 4 | Le >> 4, We = ce + 1 < fe ? (Le & 15) << 2 | De >> 6 : 64, Be = ce + 2 < fe ? De & 63 : 64;
                  se += ee[qe] + ee[Ye] + ee[We] + ee[Be];
                }
                return se;
              }
            },
            /* 3 */
            /***/
            (X, n, _) => {
              _(4);
            },
            /* 4 */
            /***/
            (X, n) => {
              Object.defineProperty(n, "__esModule", {
                value: !0
              }), n.isNodeJS = void 0;
              const _ = typeof process == "object" && process + "" == "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser");
              n.isNodeJS = _;
            },
            /* 5 */
            /***/
            (X, n, _) => {
              Object.defineProperty(n, "__esModule", {
                value: !0
              }), n.BaseSVGFactory = n.BaseStandardFontDataFactory = n.BaseCMapReaderFactory = n.BaseCanvasFactory = void 0;
              var t = _(2);
              class g {
                constructor() {
                  this.constructor === g && (0, t.unreachable)("Cannot initialize BaseCanvasFactory.");
                }
                create(d, f) {
                  if (d <= 0 || f <= 0)
                    throw new Error("Invalid canvas size");
                  const P = this._createCanvas(d, f);
                  return {
                    canvas: P,
                    context: P.getContext("2d")
                  };
                }
                reset(d, f, P) {
                  if (!d.canvas)
                    throw new Error("Canvas is not specified");
                  if (f <= 0 || P <= 0)
                    throw new Error("Invalid canvas size");
                  d.canvas.width = f, d.canvas.height = P;
                }
                destroy(d) {
                  if (!d.canvas)
                    throw new Error("Canvas is not specified");
                  d.canvas.width = 0, d.canvas.height = 0, d.canvas = null, d.context = null;
                }
                _createCanvas(d, f) {
                  (0, t.unreachable)("Abstract method `_createCanvas` called.");
                }
              }
              n.BaseCanvasFactory = g;
              class x {
                constructor({
                  baseUrl: d = null,
                  isCompressed: f = !1
                }) {
                  this.constructor === x && (0, t.unreachable)("Cannot initialize BaseCMapReaderFactory."), this.baseUrl = d, this.isCompressed = f;
                }
                async fetch({
                  name: d
                }) {
                  if (!this.baseUrl)
                    throw new Error('The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.');
                  if (!d)
                    throw new Error("CMap name must be specified.");
                  const f = this.baseUrl + d + (this.isCompressed ? ".bcmap" : ""), P = this.isCompressed ? t.CMapCompressionType.BINARY : t.CMapCompressionType.NONE;
                  return this._fetchData(f, P).catch((N) => {
                    throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${f}`);
                  });
                }
                _fetchData(d, f) {
                  (0, t.unreachable)("Abstract method `_fetchData` called.");
                }
              }
              n.BaseCMapReaderFactory = x;
              class F {
                constructor({
                  baseUrl: d = null
                }) {
                  this.constructor === F && (0, t.unreachable)("Cannot initialize BaseStandardFontDataFactory."), this.baseUrl = d;
                }
                async fetch({
                  filename: d
                }) {
                  if (!this.baseUrl)
                    throw new Error('The standard font "baseUrl" parameter must be specified, ensure that the "standardFontDataUrl" API parameter is provided.');
                  if (!d)
                    throw new Error("Font filename must be specified.");
                  const f = `${this.baseUrl}${d}`;
                  return this._fetchData(f).catch((P) => {
                    throw new Error(`Unable to load font data at: ${f}`);
                  });
                }
                _fetchData(d) {
                  (0, t.unreachable)("Abstract method `_fetchData` called.");
                }
              }
              n.BaseStandardFontDataFactory = F;
              class w {
                constructor() {
                  this.constructor === w && (0, t.unreachable)("Cannot initialize BaseSVGFactory.");
                }
                create(d, f) {
                  if (d <= 0 || f <= 0)
                    throw new Error("Invalid SVG dimensions");
                  const P = this._createSVG("svg:svg");
                  return P.setAttribute("version", "1.1"), P.setAttribute("width", `${d}px`), P.setAttribute("height", `${f}px`), P.setAttribute("preserveAspectRatio", "none"), P.setAttribute("viewBox", `0 0 ${d} ${f}`), P;
                }
                createElement(d) {
                  if (typeof d != "string")
                    throw new Error("Invalid SVG element type");
                  return this._createSVG(d);
                }
                _createSVG(d) {
                  (0, t.unreachable)("Abstract method `_createSVG` called.");
                }
              }
              n.BaseSVGFactory = w;
            },
            /* 6 */
            /***/
            (__unused_webpack_module, exports, __w_pdfjs_require__) => {
              Object.defineProperty(exports, "__esModule", {
                value: !0
              }), exports.getDocument = getDocument, exports.setPDFNetworkStreamFactory = setPDFNetworkStreamFactory, exports.version = exports.PDFWorker = exports.PDFPageProxy = exports.PDFDocumentProxy = exports.PDFDataRangeTransport = exports.LoopbackPort = exports.DefaultStandardFontDataFactory = exports.DefaultCMapReaderFactory = exports.DefaultCanvasFactory = exports.build = void 0;
              var _util = __w_pdfjs_require__(2), _display_utils = __w_pdfjs_require__(1), _font_loader = __w_pdfjs_require__(7), _node_utils = __w_pdfjs_require__(8), _annotation_storage = __w_pdfjs_require__(9), _canvas = __w_pdfjs_require__(10), _worker_options = __w_pdfjs_require__(12), _is_node = __w_pdfjs_require__(4), _message_handler = __w_pdfjs_require__(13), _metadata = __w_pdfjs_require__(14), _optional_content_config = __w_pdfjs_require__(15), _transport_stream = __w_pdfjs_require__(16);
              const DEFAULT_RANGE_CHUNK_SIZE = 65536, RENDERING_CANCELLED_TIMEOUT = 100, DefaultCanvasFactory = _is_node.isNodeJS ? _node_utils.NodeCanvasFactory : _display_utils.DOMCanvasFactory;
              exports.DefaultCanvasFactory = DefaultCanvasFactory;
              const DefaultCMapReaderFactory = _is_node.isNodeJS ? _node_utils.NodeCMapReaderFactory : _display_utils.DOMCMapReaderFactory;
              exports.DefaultCMapReaderFactory = DefaultCMapReaderFactory;
              const DefaultStandardFontDataFactory = _is_node.isNodeJS ? _node_utils.NodeStandardFontDataFactory : _display_utils.DOMStandardFontDataFactory;
              exports.DefaultStandardFontDataFactory = DefaultStandardFontDataFactory;
              let createPDFNetworkStream;
              function setPDFNetworkStreamFactory(X) {
                createPDFNetworkStream = X;
              }
              function getDocument(X) {
                const n = new PDFDocumentLoadingTask();
                let _;
                if (typeof X == "string" || X instanceof URL)
                  _ = {
                    url: X
                  };
                else if ((0, _util.isArrayBuffer)(X))
                  _ = {
                    data: X
                  };
                else if (X instanceof PDFDataRangeTransport)
                  _ = {
                    range: X
                  };
                else {
                  if (typeof X != "object")
                    throw new Error("Invalid parameter in getDocument, need either string, URL, Uint8Array, or parameter object.");
                  if (!X.url && !X.data && !X.range)
                    throw new Error("Invalid parameter object: need either .data, .range or .url");
                  _ = X;
                }
                const t = /* @__PURE__ */ Object.create(null);
                let g = null, x = null;
                for (const w in _) {
                  const m = _[w];
                  switch (w) {
                    case "url":
                      if (typeof window < "u")
                        try {
                          t[w] = new URL(m, window.location).href;
                          continue;
                        } catch (d) {
                          (0, _util.warn)(`Cannot create valid URL: "${d}".`);
                        }
                      else if (typeof m == "string" || m instanceof URL) {
                        t[w] = m.toString();
                        continue;
                      }
                      throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
                    case "range":
                      g = m;
                      continue;
                    case "worker":
                      x = m;
                      continue;
                    case "data":
                      if (_is_node.isNodeJS && typeof Buffer < "u" && m instanceof Buffer)
                        t[w] = new Uint8Array(m);
                      else {
                        if (m instanceof Uint8Array)
                          break;
                        if (typeof m == "string")
                          t[w] = (0, _util.stringToBytes)(m);
                        else if (typeof m == "object" && m !== null && !isNaN(m.length))
                          t[w] = new Uint8Array(m);
                        else if ((0, _util.isArrayBuffer)(m))
                          t[w] = new Uint8Array(m);
                        else
                          throw new Error("Invalid PDF binary data: either typed array, string, or array-like object is expected in the data property.");
                      }
                      continue;
                  }
                  t[w] = m;
                }
                if (t.rangeChunkSize = t.rangeChunkSize || DEFAULT_RANGE_CHUNK_SIZE, t.CMapReaderFactory = t.CMapReaderFactory || DefaultCMapReaderFactory, t.StandardFontDataFactory = t.StandardFontDataFactory || DefaultStandardFontDataFactory, t.ignoreErrors = t.stopAtErrors !== !0, t.fontExtraProperties = t.fontExtraProperties === !0, t.pdfBug = t.pdfBug === !0, t.enableXfa = t.enableXfa === !0, (typeof t.docBaseUrl != "string" || (0, _display_utils.isDataScheme)(t.docBaseUrl)) && (t.docBaseUrl = null), Number.isInteger(t.maxImageSize) || (t.maxImageSize = -1), typeof t.useWorkerFetch != "boolean" && (t.useWorkerFetch = t.CMapReaderFactory === _display_utils.DOMCMapReaderFactory && t.StandardFontDataFactory === _display_utils.DOMStandardFontDataFactory), typeof t.isEvalSupported != "boolean" && (t.isEvalSupported = !0), typeof t.disableFontFace != "boolean" && (t.disableFontFace = _is_node.isNodeJS), typeof t.useSystemFonts != "boolean" && (t.useSystemFonts = !_is_node.isNodeJS && !t.disableFontFace), typeof t.ownerDocument > "u" && (t.ownerDocument = globalThis.document), typeof t.disableRange != "boolean" && (t.disableRange = !1), typeof t.disableStream != "boolean" && (t.disableStream = !1), typeof t.disableAutoFetch != "boolean" && (t.disableAutoFetch = !1), (0, _util.setVerbosityLevel)(t.verbosity), !x) {
                  const w = {
                    verbosity: t.verbosity,
                    port: _worker_options.GlobalWorkerOptions.workerPort
                  };
                  x = w.port ? PDFWorker.fromPort(w) : new PDFWorker(w), n._worker = x;
                }
                const F = n.docId;
                return x.promise.then(function() {
                  if (n.destroyed)
                    throw new Error("Loading aborted");
                  const w = _fetchDocument(x, t, g, F), m = new Promise(function(d) {
                    let f;
                    g ? f = new _transport_stream.PDFDataTransportStream({
                      length: t.length,
                      initialData: t.initialData,
                      progressiveDone: t.progressiveDone,
                      contentDispositionFilename: t.contentDispositionFilename,
                      disableRange: t.disableRange,
                      disableStream: t.disableStream
                    }, g) : t.data || (f = createPDFNetworkStream({
                      url: t.url,
                      length: t.length,
                      httpHeaders: t.httpHeaders,
                      withCredentials: t.withCredentials,
                      rangeChunkSize: t.rangeChunkSize,
                      disableRange: t.disableRange,
                      disableStream: t.disableStream
                    })), d(f);
                  });
                  return Promise.all([w, m]).then(function([d, f]) {
                    if (n.destroyed)
                      throw new Error("Loading aborted");
                    const P = new _message_handler.MessageHandler(F, d, x.port);
                    P.postMessageTransfers = x.postMessageTransfers;
                    const N = new WorkerTransport(P, n, f, t);
                    n._transport = N, P.send("Ready", null);
                  });
                }).catch(n._capability.reject), n;
              }
              function _fetchDocument(X, n, _, t) {
                return X.destroyed ? Promise.reject(new Error("Worker was destroyed")) : (_ && (n.length = _.length, n.initialData = _.initialData, n.progressiveDone = _.progressiveDone, n.contentDispositionFilename = _.contentDispositionFilename), X.messageHandler.sendWithPromise("GetDocRequest", {
                  docId: t,
                  apiVersion: "2.10.377",
                  source: {
                    data: n.data,
                    url: n.url,
                    password: n.password,
                    disableAutoFetch: n.disableAutoFetch,
                    rangeChunkSize: n.rangeChunkSize,
                    length: n.length
                  },
                  maxImageSize: n.maxImageSize,
                  disableFontFace: n.disableFontFace,
                  postMessageTransfers: X.postMessageTransfers,
                  docBaseUrl: n.docBaseUrl,
                  ignoreErrors: n.ignoreErrors,
                  isEvalSupported: n.isEvalSupported,
                  fontExtraProperties: n.fontExtraProperties,
                  enableXfa: n.enableXfa,
                  useSystemFonts: n.useSystemFonts,
                  cMapUrl: n.useWorkerFetch ? n.cMapUrl : null,
                  standardFontDataUrl: n.useWorkerFetch ? n.standardFontDataUrl : null
                }).then(function(g) {
                  if (X.destroyed)
                    throw new Error("Worker was destroyed");
                  return g;
                }));
              }
              const PDFDocumentLoadingTask = /* @__PURE__ */ function() {
                let n = 0;
                class _ {
                  constructor() {
                    this._capability = (0, _util.createPromiseCapability)(), this._transport = null, this._worker = null, this.docId = "d" + n++, this.destroyed = !1, this.onPassword = null, this.onProgress = null, this.onUnsupportedFeature = null;
                  }
                  get promise() {
                    return this._capability.promise;
                  }
                  destroy() {
                    return this.destroyed = !0, (this._transport ? this._transport.destroy() : Promise.resolve()).then(() => {
                      this._transport = null, this._worker && (this._worker.destroy(), this._worker = null);
                    });
                  }
                }
                return _;
              }();
              class PDFDataRangeTransport {
                constructor(n, _, t = !1, g = null) {
                  this.length = n, this.initialData = _, this.progressiveDone = t, this.contentDispositionFilename = g, this._rangeListeners = [], this._progressListeners = [], this._progressiveReadListeners = [], this._progressiveDoneListeners = [], this._readyCapability = (0, _util.createPromiseCapability)();
                }
                addRangeListener(n) {
                  this._rangeListeners.push(n);
                }
                addProgressListener(n) {
                  this._progressListeners.push(n);
                }
                addProgressiveReadListener(n) {
                  this._progressiveReadListeners.push(n);
                }
                addProgressiveDoneListener(n) {
                  this._progressiveDoneListeners.push(n);
                }
                onDataRange(n, _) {
                  for (const t of this._rangeListeners)
                    t(n, _);
                }
                onDataProgress(n, _) {
                  this._readyCapability.promise.then(() => {
                    for (const t of this._progressListeners)
                      t(n, _);
                  });
                }
                onDataProgressiveRead(n) {
                  this._readyCapability.promise.then(() => {
                    for (const _ of this._progressiveReadListeners)
                      _(n);
                  });
                }
                onDataProgressiveDone() {
                  this._readyCapability.promise.then(() => {
                    for (const n of this._progressiveDoneListeners)
                      n();
                  });
                }
                transportReady() {
                  this._readyCapability.resolve();
                }
                requestDataRange(n, _) {
                  (0, _util.unreachable)("Abstract method PDFDataRangeTransport.requestDataRange");
                }
                abort() {
                }
              }
              exports.PDFDataRangeTransport = PDFDataRangeTransport;
              class PDFDocumentProxy {
                constructor(n, _) {
                  this._pdfInfo = n, this._transport = _, Object.defineProperty(this, "fingerprint", {
                    get() {
                      return (0, _display_utils.deprecated)("`PDFDocumentProxy.fingerprint`, please use `PDFDocumentProxy.fingerprints` instead."), this.fingerprints[0];
                    }
                  });
                }
                get annotationStorage() {
                  return this._transport.annotationStorage;
                }
                get numPages() {
                  return this._pdfInfo.numPages;
                }
                get fingerprints() {
                  return this._pdfInfo.fingerprints;
                }
                get isPureXfa() {
                  return !!this._transport._htmlForXfa;
                }
                get allXfaHtml() {
                  return this._transport._htmlForXfa;
                }
                getPage(n) {
                  return this._transport.getPage(n);
                }
                getPageIndex(n) {
                  return this._transport.getPageIndex(n);
                }
                getDestinations() {
                  return this._transport.getDestinations();
                }
                getDestination(n) {
                  return this._transport.getDestination(n);
                }
                getPageLabels() {
                  return this._transport.getPageLabels();
                }
                getPageLayout() {
                  return this._transport.getPageLayout();
                }
                getPageMode() {
                  return this._transport.getPageMode();
                }
                getViewerPreferences() {
                  return this._transport.getViewerPreferences();
                }
                getOpenAction() {
                  return this._transport.getOpenAction();
                }
                getAttachments() {
                  return this._transport.getAttachments();
                }
                getJavaScript() {
                  return this._transport.getJavaScript();
                }
                getJSActions() {
                  return this._transport.getDocJSActions();
                }
                getOutline() {
                  return this._transport.getOutline();
                }
                getOptionalContentConfig() {
                  return this._transport.getOptionalContentConfig();
                }
                getPermissions() {
                  return this._transport.getPermissions();
                }
                getMetadata() {
                  return this._transport.getMetadata();
                }
                getMarkInfo() {
                  return this._transport.getMarkInfo();
                }
                getData() {
                  return this._transport.getData();
                }
                getDownloadInfo() {
                  return this._transport.downloadInfoCapability.promise;
                }
                getStats() {
                  return this._transport.getStats();
                }
                cleanup(n = !1) {
                  return this._transport.startCleanup(n || this.isPureXfa);
                }
                destroy() {
                  return this.loadingTask.destroy();
                }
                get loadingParams() {
                  return this._transport.loadingParams;
                }
                get loadingTask() {
                  return this._transport.loadingTask;
                }
                saveDocument() {
                  return this._transport.annotationStorage.size <= 0 && (0, _display_utils.deprecated)("saveDocument called while `annotationStorage` is empty, please use the getData-method instead."), this._transport.saveDocument();
                }
                getFieldObjects() {
                  return this._transport.getFieldObjects();
                }
                hasJSActions() {
                  return this._transport.hasJSActions();
                }
                getCalculationOrderIds() {
                  return this._transport.getCalculationOrderIds();
                }
              }
              exports.PDFDocumentProxy = PDFDocumentProxy;
              class PDFPageProxy {
                constructor(n, _, t, g, x = !1) {
                  this._pageIndex = n, this._pageInfo = _, this._ownerDocument = g, this._transport = t, this._stats = x ? new _display_utils.StatTimer() : null, this._pdfBug = x, this.commonObjs = t.commonObjs, this.objs = new PDFObjects(), this.cleanupAfterRender = !1, this.pendingCleanup = !1, this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = !1;
                }
                get pageNumber() {
                  return this._pageIndex + 1;
                }
                get rotate() {
                  return this._pageInfo.rotate;
                }
                get ref() {
                  return this._pageInfo.ref;
                }
                get userUnit() {
                  return this._pageInfo.userUnit;
                }
                get view() {
                  return this._pageInfo.view;
                }
                getViewport({
                  scale: n,
                  rotation: _ = this.rotate,
                  offsetX: t = 0,
                  offsetY: g = 0,
                  dontFlip: x = !1
                } = {}) {
                  return new _display_utils.PageViewport({
                    viewBox: this.view,
                    scale: n,
                    rotation: _,
                    offsetX: t,
                    offsetY: g,
                    dontFlip: x
                  });
                }
                getAnnotations({
                  intent: n = null
                } = {}) {
                  const _ = n === "display" || n === "print" ? n : null;
                  return (!this._annotationsPromise || this._annotationsIntent !== _) && (this._annotationsPromise = this._transport.getAnnotations(this._pageIndex, _), this._annotationsIntent = _), this._annotationsPromise;
                }
                getJSActions() {
                  return this._jsActionsPromise || (this._jsActionsPromise = this._transport.getPageJSActions(this._pageIndex));
                }
                async getXfa() {
                  var n;
                  return ((n = this._transport._htmlForXfa) == null ? void 0 : n.children[this._pageIndex]) || null;
                }
                render({
                  canvasContext: n,
                  viewport: _,
                  intent: t = "display",
                  renderInteractiveForms: g = !1,
                  transform: x = null,
                  imageLayer: F = null,
                  canvasFactory: w = null,
                  background: m = null,
                  includeAnnotationStorage: d = !1,
                  optionalContentConfigPromise: f = null
                }) {
                  var P;
                  this._stats && this._stats.time("Overall");
                  const N = t === "print" ? "print" : "display";
                  this.pendingCleanup = !1, f || (f = this._transport.getOptionalContentConfig());
                  let v = this._intentStates.get(N);
                  v || (v = /* @__PURE__ */ Object.create(null), this._intentStates.set(N, v)), v.streamReaderCancelTimeout && (clearTimeout(v.streamReaderCancelTimeout), v.streamReaderCancelTimeout = null);
                  const W = w || new DefaultCanvasFactory({
                    ownerDocument: this._ownerDocument
                  }), c = d ? this._transport.annotationStorage.serializable : null;
                  v.displayReadyCapability || (v.displayReadyCapability = (0, _util.createPromiseCapability)(), v.operatorList = {
                    fnArray: [],
                    argsArray: [],
                    lastChunk: !1
                  }, this._stats && this._stats.time("Page Request"), this._pumpOperatorList({
                    pageIndex: this._pageIndex,
                    intent: N,
                    renderInteractiveForms: g === !0,
                    annotationStorage: c
                  }));
                  const y = (b) => {
                    v.renderTasks.delete(I), (this.cleanupAfterRender || N === "print") && (this.pendingCleanup = !0), this._tryCleanup(), b ? (I.capability.reject(b), this._abortOperatorList({
                      intentState: v,
                      reason: b
                    })) : I.capability.resolve(), this._stats && (this._stats.timeEnd("Rendering"), this._stats.timeEnd("Overall"));
                  }, I = new InternalRenderTask({
                    callback: y,
                    params: {
                      canvasContext: n,
                      viewport: _,
                      transform: x,
                      imageLayer: F,
                      background: m
                    },
                    objs: this.objs,
                    commonObjs: this.commonObjs,
                    operatorList: v.operatorList,
                    pageIndex: this._pageIndex,
                    canvasFactory: W,
                    useRequestAnimationFrame: N !== "print",
                    pdfBug: this._pdfBug
                  });
                  ((P = v).renderTasks || (P.renderTasks = /* @__PURE__ */ new Set())).add(I);
                  const T = I.task;
                  return Promise.all([v.displayReadyCapability.promise, f]).then(([b, r]) => {
                    if (this.pendingCleanup) {
                      y();
                      return;
                    }
                    this._stats && this._stats.time("Rendering"), I.initializeGraphics({
                      transparency: b,
                      optionalContentConfig: r
                    }), I.operatorListChanged();
                  }).catch(y), T;
                }
                getOperatorList({
                  intent: n = "display"
                } = {}) {
                  function _() {
                    g.operatorList.lastChunk && (g.opListReadCapability.resolve(g.operatorList), g.renderTasks.delete(x));
                  }
                  const t = `oplist-${n === "print" ? "print" : "display"}`;
                  let g = this._intentStates.get(t);
                  g || (g = /* @__PURE__ */ Object.create(null), this._intentStates.set(t, g));
                  let x;
                  if (!g.opListReadCapability) {
                    var F;
                    x = /* @__PURE__ */ Object.create(null), x.operatorListChanged = _, g.opListReadCapability = (0, _util.createPromiseCapability)(), ((F = g).renderTasks || (F.renderTasks = /* @__PURE__ */ new Set())).add(x), g.operatorList = {
                      fnArray: [],
                      argsArray: [],
                      lastChunk: !1
                    }, this._stats && this._stats.time("Page Request"), this._pumpOperatorList({
                      pageIndex: this._pageIndex,
                      intent: t
                    });
                  }
                  return g.opListReadCapability.promise;
                }
                streamTextContent({
                  normalizeWhitespace: n = !1,
                  disableCombineTextItems: _ = !1,
                  includeMarkedContent: t = !1
                } = {}) {
                  return this._transport.messageHandler.sendWithStream("GetTextContent", {
                    pageIndex: this._pageIndex,
                    normalizeWhitespace: n === !0,
                    combineTextItems: _ !== !0,
                    includeMarkedContent: t === !0
                  }, {
                    highWaterMark: 100,
                    size(x) {
                      return x.items.length;
                    }
                  });
                }
                getTextContent(n = {}) {
                  const _ = this.streamTextContent(n);
                  return new Promise(function(t, g) {
                    function x() {
                      F.read().then(function({
                        value: m,
                        done: d
                      }) {
                        if (d) {
                          t(w);
                          return;
                        }
                        Object.assign(w.styles, m.styles), w.items.push(...m.items), x();
                      }, g);
                    }
                    const F = _.getReader(), w = {
                      items: [],
                      styles: /* @__PURE__ */ Object.create(null)
                    };
                    x();
                  });
                }
                getStructTree() {
                  return this._structTreePromise || (this._structTreePromise = this._transport.getStructTree(this._pageIndex));
                }
                _destroy() {
                  this.destroyed = !0, this._transport.pageCache[this._pageIndex] = null;
                  const n = [];
                  for (const [_, t] of this._intentStates)
                    if (this._abortOperatorList({
                      intentState: t,
                      reason: new Error("Page was destroyed."),
                      force: !0
                    }), !_.startsWith("oplist-"))
                      for (const g of t.renderTasks)
                        n.push(g.completed), g.cancel();
                  return this.objs.clear(), this._annotationsPromise = null, this._jsActionsPromise = null, this._structTreePromise = null, this.pendingCleanup = !1, Promise.all(n);
                }
                cleanup(n = !1) {
                  return this.pendingCleanup = !0, this._tryCleanup(n);
                }
                _tryCleanup(n = !1) {
                  if (!this.pendingCleanup)
                    return !1;
                  for (const {
                    renderTasks: _,
                    operatorList: t
                  } of this._intentStates.values())
                    if (_.size > 0 || !t.lastChunk)
                      return !1;
                  return this._intentStates.clear(), this.objs.clear(), this._annotationsPromise = null, this._jsActionsPromise = null, this._structTreePromise = null, n && this._stats && (this._stats = new _display_utils.StatTimer()), this.pendingCleanup = !1, !0;
                }
                _startRenderPage(n, _) {
                  const t = this._intentStates.get(_);
                  t && (this._stats && this._stats.timeEnd("Page Request"), t.displayReadyCapability && t.displayReadyCapability.resolve(n));
                }
                _renderPageChunk(n, _) {
                  for (let t = 0, g = n.length; t < g; t++)
                    _.operatorList.fnArray.push(n.fnArray[t]), _.operatorList.argsArray.push(n.argsArray[t]);
                  _.operatorList.lastChunk = n.lastChunk;
                  for (const t of _.renderTasks)
                    t.operatorListChanged();
                  n.lastChunk && this._tryCleanup();
                }
                _pumpOperatorList(n) {
                  (0, _util.assert)(n.intent, 'PDFPageProxy._pumpOperatorList: Expected "intent" argument.');
                  const t = this._transport.messageHandler.sendWithStream("GetOperatorList", n).getReader(), g = this._intentStates.get(n.intent);
                  g.streamReader = t;
                  const x = () => {
                    t.read().then(({
                      value: F,
                      done: w
                    }) => {
                      if (w) {
                        g.streamReader = null;
                        return;
                      }
                      this._transport.destroyed || (this._renderPageChunk(F, g), x());
                    }, (F) => {
                      if (g.streamReader = null, !this._transport.destroyed) {
                        if (g.operatorList) {
                          g.operatorList.lastChunk = !0;
                          for (const w of g.renderTasks)
                            w.operatorListChanged();
                          this._tryCleanup();
                        }
                        if (g.displayReadyCapability)
                          g.displayReadyCapability.reject(F);
                        else if (g.opListReadCapability)
                          g.opListReadCapability.reject(F);
                        else
                          throw F;
                      }
                    });
                  };
                  x();
                }
                _abortOperatorList({
                  intentState: n,
                  reason: _,
                  force: t = !1
                }) {
                  if ((0, _util.assert)(_ instanceof Error || typeof _ == "object" && _ !== null, 'PDFPageProxy._abortOperatorList: Expected "reason" argument.'), !!n.streamReader) {
                    if (!t) {
                      if (n.renderTasks.size > 0)
                        return;
                      if (_ instanceof _display_utils.RenderingCancelledException) {
                        n.streamReaderCancelTimeout = setTimeout(() => {
                          this._abortOperatorList({
                            intentState: n,
                            reason: _,
                            force: !0
                          }), n.streamReaderCancelTimeout = null;
                        }, RENDERING_CANCELLED_TIMEOUT);
                        return;
                      }
                    }
                    if (n.streamReader.cancel(new _util.AbortException(_ == null ? void 0 : _.message)), n.streamReader = null, !this._transport.destroyed) {
                      for (const [g, x] of this._intentStates)
                        if (x === n) {
                          this._intentStates.delete(g);
                          break;
                        }
                      this.cleanup();
                    }
                  }
                }
                get stats() {
                  return this._stats;
                }
              }
              exports.PDFPageProxy = PDFPageProxy;
              class LoopbackPort {
                constructor() {
                  this._listeners = [], this._deferred = Promise.resolve(void 0);
                }
                postMessage(n, _) {
                  function t(F) {
                    var d;
                    if (typeof F == "function" || typeof F == "symbol" || F instanceof URL)
                      throw new Error(`LoopbackPort.postMessage - cannot clone: ${F == null ? void 0 : F.toString()}`);
                    if (typeof F != "object" || F === null)
                      return F;
                    if (g.has(F))
                      return g.get(F);
                    let w, m;
                    if ((w = F.buffer) && (0, _util.isArrayBuffer)(w))
                      return _ != null && _.includes(w) ? m = new F.constructor(w, F.byteOffset, F.byteLength) : m = new F.constructor(F), g.set(F, m), m;
                    if (F instanceof Map) {
                      m = /* @__PURE__ */ new Map(), g.set(F, m);
                      for (const [f, P] of F)
                        m.set(f, t(P));
                      return m;
                    }
                    if (F instanceof Set) {
                      m = /* @__PURE__ */ new Set(), g.set(F, m);
                      for (const f of F)
                        m.add(t(f));
                      return m;
                    }
                    m = Array.isArray(F) ? [] : /* @__PURE__ */ Object.create(null), g.set(F, m);
                    for (const f in F) {
                      let P, N = F;
                      for (; !(P = Object.getOwnPropertyDescriptor(N, f)); )
                        N = Object.getPrototypeOf(N);
                      typeof P.value > "u" || typeof P.value == "function" && !((d = F.hasOwnProperty) != null && d.call(F, f)) || (m[f] = t(P.value));
                    }
                    return m;
                  }
                  const g = /* @__PURE__ */ new WeakMap(), x = {
                    data: t(n)
                  };
                  this._deferred.then(() => {
                    for (const F of this._listeners)
                      F.call(this, x);
                  });
                }
                addEventListener(n, _) {
                  this._listeners.push(_);
                }
                removeEventListener(n, _) {
                  const t = this._listeners.indexOf(_);
                  this._listeners.splice(t, 1);
                }
                terminate() {
                  this._listeners.length = 0;
                }
              }
              exports.LoopbackPort = LoopbackPort;
              const PDFWorker = function PDFWorkerClosure() {
                var X;
                const pdfWorkerPorts = /* @__PURE__ */ new WeakMap();
                let isWorkerDisabled = !1, fallbackWorkerSrc, nextFakeWorkerId = 0, fakeWorkerCapability;
                if (_is_node.isNodeJS && typeof commonjsRequire == "function")
                  isWorkerDisabled = !0, fallbackWorkerSrc = "./pdf.worker.js";
                else if (typeof document == "object" && "currentScript" in document) {
                  const n = (X = document.currentScript) == null ? void 0 : X.src;
                  n && (fallbackWorkerSrc = n.replace(/(\.(?:min\.)?js)(\?.*)?$/i, ".worker$1$2"));
                }
                function getWorkerSrc() {
                  if (_worker_options.GlobalWorkerOptions.workerSrc)
                    return _worker_options.GlobalWorkerOptions.workerSrc;
                  if (typeof fallbackWorkerSrc < "u")
                    return _is_node.isNodeJS || (0, _display_utils.deprecated)('No "GlobalWorkerOptions.workerSrc" specified.'), fallbackWorkerSrc;
                  throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
                }
                function getMainThreadWorkerMessageHandler() {
                  var _;
                  let n;
                  try {
                    n = (_ = globalThis.pdfjsWorker) == null ? void 0 : _.WorkerMessageHandler;
                  } catch {
                  }
                  return n || null;
                }
                function setupFakeWorkerGlobal() {
                  if (fakeWorkerCapability)
                    return fakeWorkerCapability.promise;
                  fakeWorkerCapability = (0, _util.createPromiseCapability)();
                  const loader = async function() {
                    const mainWorkerMessageHandler = getMainThreadWorkerMessageHandler();
                    if (mainWorkerMessageHandler)
                      return mainWorkerMessageHandler;
                    if (_is_node.isNodeJS && typeof commonjsRequire == "function") {
                      const worker = eval("require")(getWorkerSrc());
                      return worker.WorkerMessageHandler;
                    }
                    return await (0, _display_utils.loadScript)(getWorkerSrc()), window.pdfjsWorker.WorkerMessageHandler;
                  };
                  return loader().then(fakeWorkerCapability.resolve, fakeWorkerCapability.reject), fakeWorkerCapability.promise;
                }
                function createCDNWrapper(n) {
                  const _ = "importScripts('" + n + "');";
                  return URL.createObjectURL(new Blob([_]));
                }
                class PDFWorker {
                  constructor({
                    name: _ = null,
                    port: t = null,
                    verbosity: g = (0, _util.getVerbosityLevel)()
                  } = {}) {
                    if (t && pdfWorkerPorts.has(t))
                      throw new Error("Cannot use more than one PDFWorker per port");
                    if (this.name = _, this.destroyed = !1, this.postMessageTransfers = !0, this.verbosity = g, this._readyCapability = (0, _util.createPromiseCapability)(), this._port = null, this._webWorker = null, this._messageHandler = null, t) {
                      pdfWorkerPorts.set(t, this), this._initializeFromPort(t);
                      return;
                    }
                    this._initialize();
                  }
                  get promise() {
                    return this._readyCapability.promise;
                  }
                  get port() {
                    return this._port;
                  }
                  get messageHandler() {
                    return this._messageHandler;
                  }
                  _initializeFromPort(_) {
                    this._port = _, this._messageHandler = new _message_handler.MessageHandler("main", "worker", _), this._messageHandler.on("ready", function() {
                    }), this._readyCapability.resolve();
                  }
                  _initialize() {
                    if (typeof Worker < "u" && !isWorkerDisabled && !getMainThreadWorkerMessageHandler()) {
                      let _ = getWorkerSrc();
                      try {
                        (0, _util.isSameOrigin)(window.location.href, _) || (_ = createCDNWrapper(new URL(_, window.location).href));
                        const t = new Worker(_), g = new _message_handler.MessageHandler("main", "worker", t), x = () => {
                          t.removeEventListener("error", F), g.destroy(), t.terminate(), this.destroyed ? this._readyCapability.reject(new Error("Worker was destroyed")) : this._setupFakeWorker();
                        }, F = () => {
                          this._webWorker || x();
                        };
                        t.addEventListener("error", F), g.on("test", (m) => {
                          if (t.removeEventListener("error", F), this.destroyed) {
                            x();
                            return;
                          }
                          m ? (this._messageHandler = g, this._port = t, this._webWorker = t, m.supportTransfers || (this.postMessageTransfers = !1), this._readyCapability.resolve(), g.send("configure", {
                            verbosity: this.verbosity
                          })) : (this._setupFakeWorker(), g.destroy(), t.terminate());
                        }), g.on("ready", (m) => {
                          if (t.removeEventListener("error", F), this.destroyed) {
                            x();
                            return;
                          }
                          try {
                            w();
                          } catch {
                            this._setupFakeWorker();
                          }
                        });
                        const w = () => {
                          const m = new Uint8Array([this.postMessageTransfers ? 255 : 0]);
                          try {
                            g.send("test", m, [m.buffer]);
                          } catch {
                            (0, _util.warn)("Cannot use postMessage transfers."), m[0] = 0, g.send("test", m);
                          }
                        };
                        w();
                        return;
                      } catch {
                        (0, _util.info)("The worker has been disabled.");
                      }
                    }
                    this._setupFakeWorker();
                  }
                  _setupFakeWorker() {
                    isWorkerDisabled || ((0, _util.warn)("Setting up fake worker."), isWorkerDisabled = !0), setupFakeWorkerGlobal().then((_) => {
                      if (this.destroyed) {
                        this._readyCapability.reject(new Error("Worker was destroyed"));
                        return;
                      }
                      const t = new LoopbackPort();
                      this._port = t;
                      const g = "fake" + nextFakeWorkerId++, x = new _message_handler.MessageHandler(g + "_worker", g, t);
                      _.setup(x, t);
                      const F = new _message_handler.MessageHandler(g, g + "_worker", t);
                      this._messageHandler = F, this._readyCapability.resolve(), F.send("configure", {
                        verbosity: this.verbosity
                      });
                    }).catch((_) => {
                      this._readyCapability.reject(new Error(`Setting up fake worker failed: "${_.message}".`));
                    });
                  }
                  destroy() {
                    this.destroyed = !0, this._webWorker && (this._webWorker.terminate(), this._webWorker = null), pdfWorkerPorts.delete(this._port), this._port = null, this._messageHandler && (this._messageHandler.destroy(), this._messageHandler = null);
                  }
                  static fromPort(_) {
                    if (!_ || !_.port)
                      throw new Error("PDFWorker.fromPort - invalid method signature.");
                    return pdfWorkerPorts.has(_.port) ? pdfWorkerPorts.get(_.port) : new PDFWorker(_);
                  }
                  static getWorkerSrc() {
                    return getWorkerSrc();
                  }
                }
                return PDFWorker;
              }();
              exports.PDFWorker = PDFWorker;
              class WorkerTransport {
                constructor(n, _, t, g) {
                  this.messageHandler = n, this.loadingTask = _, this.commonObjs = new PDFObjects(), this.fontLoader = new _font_loader.FontLoader({
                    docId: _.docId,
                    onUnsupportedFeature: this._onUnsupportedFeature.bind(this),
                    ownerDocument: g.ownerDocument,
                    styleElement: g.styleElement
                  }), this._params = g, g.useWorkerFetch || (this.CMapReaderFactory = new g.CMapReaderFactory({
                    baseUrl: g.cMapUrl,
                    isCompressed: g.cMapPacked
                  }), this.StandardFontDataFactory = new g.StandardFontDataFactory({
                    baseUrl: g.standardFontDataUrl
                  })), this.destroyed = !1, this.destroyCapability = null, this._passwordCapability = null, this._networkStream = t, this._fullReader = null, this._lastProgress = null, this.pageCache = [], this.pagePromises = [], this.downloadInfoCapability = (0, _util.createPromiseCapability)(), this.setupMessageHandler();
                }
                get annotationStorage() {
                  return (0, _util.shadow)(this, "annotationStorage", new _annotation_storage.AnnotationStorage());
                }
                destroy() {
                  if (this.destroyCapability)
                    return this.destroyCapability.promise;
                  this.destroyed = !0, this.destroyCapability = (0, _util.createPromiseCapability)(), this._passwordCapability && this._passwordCapability.reject(new Error("Worker was destroyed during onPassword callback"));
                  const n = [];
                  for (const t of this.pageCache)
                    t && n.push(t._destroy());
                  this.pageCache.length = 0, this.pagePromises.length = 0, this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
                  const _ = this.messageHandler.sendWithPromise("Terminate", null);
                  return n.push(_), Promise.all(n).then(() => {
                    this.commonObjs.clear(), this.fontLoader.clear(), this._hasJSActionsPromise = null, this._networkStream && this._networkStream.cancelAllRequests(new _util.AbortException("Worker was terminated.")), this.messageHandler && (this.messageHandler.destroy(), this.messageHandler = null), this.destroyCapability.resolve();
                  }, this.destroyCapability.reject), this.destroyCapability.promise;
                }
                setupMessageHandler() {
                  const {
                    messageHandler: n,
                    loadingTask: _
                  } = this;
                  n.on("GetReader", (t, g) => {
                    (0, _util.assert)(this._networkStream, "GetReader - no `IPDFStream` instance available."), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = (x) => {
                      this._lastProgress = {
                        loaded: x.loaded,
                        total: x.total
                      };
                    }, g.onPull = () => {
                      this._fullReader.read().then(function({
                        value: x,
                        done: F
                      }) {
                        if (F) {
                          g.close();
                          return;
                        }
                        (0, _util.assert)((0, _util.isArrayBuffer)(x), "GetReader - expected an ArrayBuffer."), g.enqueue(new Uint8Array(x), 1, [x]);
                      }).catch((x) => {
                        g.error(x);
                      });
                    }, g.onCancel = (x) => {
                      this._fullReader.cancel(x), g.ready.catch((F) => {
                        if (!this.destroyed)
                          throw F;
                      });
                    };
                  }), n.on("ReaderHeadersReady", (t) => {
                    const g = (0, _util.createPromiseCapability)(), x = this._fullReader;
                    return x.headersReady.then(() => {
                      (!x.isStreamingSupported || !x.isRangeSupported) && (this._lastProgress && _.onProgress && _.onProgress(this._lastProgress), x.onProgress = (F) => {
                        _.onProgress && _.onProgress({
                          loaded: F.loaded,
                          total: F.total
                        });
                      }), g.resolve({
                        isStreamingSupported: x.isStreamingSupported,
                        isRangeSupported: x.isRangeSupported,
                        contentLength: x.contentLength
                      });
                    }, g.reject), g.promise;
                  }), n.on("GetRangeReader", (t, g) => {
                    (0, _util.assert)(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
                    const x = this._networkStream.getRangeReader(t.begin, t.end);
                    if (!x) {
                      g.close();
                      return;
                    }
                    g.onPull = () => {
                      x.read().then(function({
                        value: F,
                        done: w
                      }) {
                        if (w) {
                          g.close();
                          return;
                        }
                        (0, _util.assert)((0, _util.isArrayBuffer)(F), "GetRangeReader - expected an ArrayBuffer."), g.enqueue(new Uint8Array(F), 1, [F]);
                      }).catch((F) => {
                        g.error(F);
                      });
                    }, g.onCancel = (F) => {
                      x.cancel(F), g.ready.catch((w) => {
                        if (!this.destroyed)
                          throw w;
                      });
                    };
                  }), n.on("GetDoc", ({
                    pdfInfo: t
                  }) => {
                    this._numPages = t.numPages, this._htmlForXfa = t.htmlForXfa, delete t.htmlForXfa, _._capability.resolve(new PDFDocumentProxy(t, this));
                  }), n.on("DocException", function(t) {
                    let g;
                    switch (t.name) {
                      case "PasswordException":
                        g = new _util.PasswordException(t.message, t.code);
                        break;
                      case "InvalidPDFException":
                        g = new _util.InvalidPDFException(t.message);
                        break;
                      case "MissingPDFException":
                        g = new _util.MissingPDFException(t.message);
                        break;
                      case "UnexpectedResponseException":
                        g = new _util.UnexpectedResponseException(t.message, t.status);
                        break;
                      case "UnknownErrorException":
                        g = new _util.UnknownErrorException(t.message, t.details);
                        break;
                    }
                    g instanceof Error || (0, _util.warn)("DocException - expected a valid Error."), _._capability.reject(g);
                  }), n.on("PasswordRequest", (t) => {
                    if (this._passwordCapability = (0, _util.createPromiseCapability)(), _.onPassword) {
                      const g = (x) => {
                        this._passwordCapability.resolve({
                          password: x
                        });
                      };
                      try {
                        _.onPassword(g, t.code);
                      } catch (x) {
                        this._passwordCapability.reject(x);
                      }
                    } else
                      this._passwordCapability.reject(new _util.PasswordException(t.message, t.code));
                    return this._passwordCapability.promise;
                  }), n.on("DataLoaded", (t) => {
                    _.onProgress && _.onProgress({
                      loaded: t.length,
                      total: t.length
                    }), this.downloadInfoCapability.resolve(t);
                  }), n.on("StartRenderPage", (t) => {
                    if (this.destroyed)
                      return;
                    this.pageCache[t.pageIndex]._startRenderPage(t.transparency, t.intent);
                  }), n.on("commonobj", (t) => {
                    var w;
                    if (this.destroyed)
                      return;
                    const [g, x, F] = t;
                    if (!this.commonObjs.has(g))
                      switch (x) {
                        case "Font":
                          const m = this._params;
                          if ("error" in F) {
                            const P = F.error;
                            (0, _util.warn)(`Error during font loading: ${P}`), this.commonObjs.resolve(g, P);
                            break;
                          }
                          let d = null;
                          m.pdfBug && ((w = globalThis.FontInspector) != null && w.enabled) && (d = {
                            registerFont(P, N) {
                              globalThis.FontInspector.fontAdded(P, N);
                            }
                          });
                          const f = new _font_loader.FontFaceObject(F, {
                            isEvalSupported: m.isEvalSupported,
                            disableFontFace: m.disableFontFace,
                            ignoreErrors: m.ignoreErrors,
                            onUnsupportedFeature: this._onUnsupportedFeature.bind(this),
                            fontRegistry: d
                          });
                          this.fontLoader.bind(f).catch((P) => n.sendWithPromise("FontFallback", {
                            id: g
                          })).finally(() => {
                            !m.fontExtraProperties && f.data && (f.data = null), this.commonObjs.resolve(g, f);
                          });
                          break;
                        case "FontPath":
                        case "Image":
                          this.commonObjs.resolve(g, F);
                          break;
                        default:
                          throw new Error(`Got unknown common object type ${x}`);
                      }
                  }), n.on("obj", (t) => {
                    var d;
                    if (this.destroyed)
                      return;
                    const [g, x, F, w] = t, m = this.pageCache[x];
                    if (!m.objs.has(g))
                      switch (F) {
                        case "Image":
                          m.objs.resolve(g, w), ((d = w == null ? void 0 : w.data) == null ? void 0 : d.length) > 8e6 && (m.cleanupAfterRender = !0);
                          break;
                        case "Pattern":
                          m.objs.resolve(g, w);
                          break;
                        default:
                          throw new Error(`Got unknown object type ${F}`);
                      }
                  }), n.on("DocProgress", (t) => {
                    this.destroyed || _.onProgress && _.onProgress({
                      loaded: t.loaded,
                      total: t.total
                    });
                  }), n.on("UnsupportedFeature", this._onUnsupportedFeature.bind(this)), n.on("FetchBuiltInCMap", (t) => this.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : this.CMapReaderFactory ? this.CMapReaderFactory.fetch(t) : Promise.reject(new Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter."))), n.on("FetchStandardFontData", (t) => this.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : this.StandardFontDataFactory ? this.StandardFontDataFactory.fetch(t) : Promise.reject(new Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter.")));
                }
                _onUnsupportedFeature({
                  featureId: n
                }) {
                  this.destroyed || this.loadingTask.onUnsupportedFeature && this.loadingTask.onUnsupportedFeature(n);
                }
                getData() {
                  return this.messageHandler.sendWithPromise("GetData", null);
                }
                getPage(n) {
                  if (!Number.isInteger(n) || n <= 0 || n > this._numPages)
                    return Promise.reject(new Error("Invalid page request"));
                  const _ = n - 1;
                  if (_ in this.pagePromises)
                    return this.pagePromises[_];
                  const t = this.messageHandler.sendWithPromise("GetPage", {
                    pageIndex: _
                  }).then((g) => {
                    if (this.destroyed)
                      throw new Error("Transport destroyed");
                    const x = new PDFPageProxy(_, g, this, this._params.ownerDocument, this._params.pdfBug);
                    return this.pageCache[_] = x, x;
                  });
                  return this.pagePromises[_] = t, t;
                }
                getPageIndex(n) {
                  return this.messageHandler.sendWithPromise("GetPageIndex", {
                    ref: n
                  }).catch(function(_) {
                    return Promise.reject(new Error(_));
                  });
                }
                getAnnotations(n, _) {
                  return this.messageHandler.sendWithPromise("GetAnnotations", {
                    pageIndex: n,
                    intent: _
                  });
                }
                saveDocument() {
                  var n;
                  return this.messageHandler.sendWithPromise("SaveDocument", {
                    isPureXfa: !!this._htmlForXfa,
                    numPages: this._numPages,
                    annotationStorage: this.annotationStorage.serializable,
                    filename: ((n = this._fullReader) == null ? void 0 : n.filename) ?? null
                  }).finally(() => {
                    this.annotationStorage.resetModified();
                  });
                }
                getFieldObjects() {
                  return this.messageHandler.sendWithPromise("GetFieldObjects", null);
                }
                hasJSActions() {
                  return this._hasJSActionsPromise || (this._hasJSActionsPromise = this.messageHandler.sendWithPromise("HasJSActions", null));
                }
                getCalculationOrderIds() {
                  return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
                }
                getDestinations() {
                  return this.messageHandler.sendWithPromise("GetDestinations", null);
                }
                getDestination(n) {
                  return typeof n != "string" ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", {
                    id: n
                  });
                }
                getPageLabels() {
                  return this.messageHandler.sendWithPromise("GetPageLabels", null);
                }
                getPageLayout() {
                  return this.messageHandler.sendWithPromise("GetPageLayout", null);
                }
                getPageMode() {
                  return this.messageHandler.sendWithPromise("GetPageMode", null);
                }
                getViewerPreferences() {
                  return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
                }
                getOpenAction() {
                  return this.messageHandler.sendWithPromise("GetOpenAction", null);
                }
                getAttachments() {
                  return this.messageHandler.sendWithPromise("GetAttachments", null);
                }
                getJavaScript() {
                  return this.messageHandler.sendWithPromise("GetJavaScript", null);
                }
                getDocJSActions() {
                  return this.messageHandler.sendWithPromise("GetDocJSActions", null);
                }
                getPageJSActions(n) {
                  return this.messageHandler.sendWithPromise("GetPageJSActions", {
                    pageIndex: n
                  });
                }
                getStructTree(n) {
                  return this.messageHandler.sendWithPromise("GetStructTree", {
                    pageIndex: n
                  });
                }
                getOutline() {
                  return this.messageHandler.sendWithPromise("GetOutline", null);
                }
                getOptionalContentConfig() {
                  return this.messageHandler.sendWithPromise("GetOptionalContentConfig", null).then((n) => new _optional_content_config.OptionalContentConfig(n));
                }
                getPermissions() {
                  return this.messageHandler.sendWithPromise("GetPermissions", null);
                }
                getMetadata() {
                  return this.messageHandler.sendWithPromise("GetMetadata", null).then((n) => {
                    var _, t;
                    return {
                      info: n[0],
                      metadata: n[1] ? new _metadata.Metadata(n[1]) : null,
                      contentDispositionFilename: ((_ = this._fullReader) == null ? void 0 : _.filename) ?? null,
                      contentLength: ((t = this._fullReader) == null ? void 0 : t.contentLength) ?? null
                    };
                  });
                }
                getMarkInfo() {
                  return this.messageHandler.sendWithPromise("GetMarkInfo", null);
                }
                getStats() {
                  return this.messageHandler.sendWithPromise("GetStats", null);
                }
                async startCleanup(n = !1) {
                  if (await this.messageHandler.sendWithPromise("Cleanup", null), !this.destroyed) {
                    for (let _ = 0, t = this.pageCache.length; _ < t; _++) {
                      const g = this.pageCache[_];
                      if (!g)
                        continue;
                      if (!g.cleanup())
                        throw new Error(`startCleanup: Page ${_ + 1} is currently rendering.`);
                    }
                    this.commonObjs.clear(), n || this.fontLoader.clear(), this._hasJSActionsPromise = null;
                  }
                }
                get loadingParams() {
                  const n = this._params;
                  return (0, _util.shadow)(this, "loadingParams", {
                    disableAutoFetch: n.disableAutoFetch
                  });
                }
              }
              class PDFObjects {
                constructor() {
                  this._objs = /* @__PURE__ */ Object.create(null);
                }
                _ensureObj(n) {
                  return this._objs[n] ? this._objs[n] : this._objs[n] = {
                    capability: (0, _util.createPromiseCapability)(),
                    data: null,
                    resolved: !1
                  };
                }
                get(n, _ = null) {
                  if (_)
                    return this._ensureObj(n).capability.promise.then(_), null;
                  const t = this._objs[n];
                  if (!t || !t.resolved)
                    throw new Error(`Requesting object that isn't resolved yet ${n}.`);
                  return t.data;
                }
                has(n) {
                  const _ = this._objs[n];
                  return (_ == null ? void 0 : _.resolved) || !1;
                }
                resolve(n, _) {
                  const t = this._ensureObj(n);
                  t.resolved = !0, t.data = _, t.capability.resolve(_);
                }
                clear() {
                  this._objs = /* @__PURE__ */ Object.create(null);
                }
              }
              class RenderTask {
                constructor(n) {
                  this._internalRenderTask = n, this.onContinue = null;
                }
                get promise() {
                  return this._internalRenderTask.capability.promise;
                }
                cancel() {
                  this._internalRenderTask.cancel();
                }
              }
              const InternalRenderTask = /* @__PURE__ */ function X() {
                const n = /* @__PURE__ */ new WeakSet();
                class _ {
                  constructor({
                    callback: g,
                    params: x,
                    objs: F,
                    commonObjs: w,
                    operatorList: m,
                    pageIndex: d,
                    canvasFactory: f,
                    useRequestAnimationFrame: P = !1,
                    pdfBug: N = !1
                  }) {
                    this.callback = g, this.params = x, this.objs = F, this.commonObjs = w, this.operatorListIdx = null, this.operatorList = m, this._pageIndex = d, this.canvasFactory = f, this._pdfBug = N, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = P === !0 && typeof window < "u", this.cancelled = !1, this.capability = (0, _util.createPromiseCapability)(), this.task = new RenderTask(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = x.canvasContext.canvas;
                  }
                  get completed() {
                    return this.capability.promise.catch(function() {
                    });
                  }
                  initializeGraphics({
                    transparency: g = !1,
                    optionalContentConfig: x
                  }) {
                    var P;
                    if (this.cancelled)
                      return;
                    if (this._canvas) {
                      if (n.has(this._canvas))
                        throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
                      n.add(this._canvas);
                    }
                    this._pdfBug && ((P = globalThis.StepperManager) != null && P.enabled) && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
                    const {
                      canvasContext: F,
                      viewport: w,
                      transform: m,
                      imageLayer: d,
                      background: f
                    } = this.params;
                    this.gfx = new _canvas.CanvasGraphics(F, this.commonObjs, this.objs, this.canvasFactory, d, x), this.gfx.beginDrawing({
                      transform: m,
                      viewport: w,
                      transparency: g,
                      background: f
                    }), this.operatorListIdx = 0, this.graphicsReady = !0, this.graphicsReadyCallback && this.graphicsReadyCallback();
                  }
                  cancel(g = null) {
                    this.running = !1, this.cancelled = !0, this.gfx && this.gfx.endDrawing(), this._canvas && n.delete(this._canvas), this.callback(g || new _display_utils.RenderingCancelledException(`Rendering cancelled, page ${this._pageIndex + 1}`, "canvas"));
                  }
                  operatorListChanged() {
                    if (!this.graphicsReady) {
                      this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound);
                      return;
                    }
                    this.stepper && this.stepper.updateOperatorList(this.operatorList), !this.running && this._continue();
                  }
                  _continue() {
                    this.running = !0, !this.cancelled && (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
                  }
                  _scheduleNext() {
                    this._useRequestAnimationFrame ? window.requestAnimationFrame(() => {
                      this._nextBound().catch(this._cancelBound);
                    }) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
                  }
                  async _next() {
                    this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), this._canvas && n.delete(this._canvas), this.callback())));
                  }
                }
                return _;
              }(), version = "2.10.377";
              exports.version = version;
              const build = "156762c48";
              exports.build = build;
            },
            /* 7 */
            /***/
            (X, n, _) => {
              Object.defineProperty(n, "__esModule", {
                value: !0
              }), n.FontLoader = n.FontFaceObject = void 0;
              var t = _(2);
              class g {
                constructor({
                  docId: m,
                  onUnsupportedFeature: d,
                  ownerDocument: f = globalThis.document,
                  styleElement: P = null
                }) {
                  this.constructor === g && (0, t.unreachable)("Cannot initialize BaseFontLoader."), this.docId = m, this._onUnsupportedFeature = d, this._document = f, this.nativeFontFaces = [], this.styleElement = null;
                }
                addNativeFontFace(m) {
                  this.nativeFontFaces.push(m), this._document.fonts.add(m);
                }
                insertRule(m) {
                  let d = this.styleElement;
                  d || (d = this.styleElement = this._document.createElement("style"), d.id = `PDFJS_FONT_STYLE_TAG_${this.docId}`, this._document.documentElement.getElementsByTagName("head")[0].appendChild(d));
                  const f = d.sheet;
                  f.insertRule(m, f.cssRules.length);
                }
                clear() {
                  for (const m of this.nativeFontFaces)
                    this._document.fonts.delete(m);
                  this.nativeFontFaces.length = 0, this.styleElement && (this.styleElement.remove(), this.styleElement = null);
                }
                async bind(m) {
                  if (m.attached || m.missingFile)
                    return;
                  if (m.attached = !0, this.isFontLoadingAPISupported) {
                    const f = m.createNativeFontFace();
                    if (f) {
                      this.addNativeFontFace(f);
                      try {
                        await f.loaded;
                      } catch (P) {
                        throw this._onUnsupportedFeature({
                          featureId: t.UNSUPPORTED_FEATURES.errorFontLoadNative
                        }), (0, t.warn)(`Failed to load font '${f.family}': '${P}'.`), m.disableFontFace = !0, P;
                      }
                    }
                    return;
                  }
                  const d = m.createFontFaceRule();
                  if (d) {
                    if (this.insertRule(d), this.isSyncFontLoadingSupported)
                      return;
                    await new Promise((f) => {
                      const P = this._queueLoadingCallback(f);
                      this._prepareFontLoadEvent([d], [m], P);
                    });
                  }
                }
                _queueLoadingCallback(m) {
                  (0, t.unreachable)("Abstract method `_queueLoadingCallback`.");
                }
                get isFontLoadingAPISupported() {
                  var d;
                  const m = !!((d = this._document) != null && d.fonts);
                  return (0, t.shadow)(this, "isFontLoadingAPISupported", m);
                }
                get isSyncFontLoadingSupported() {
                  (0, t.unreachable)("Abstract method `isSyncFontLoadingSupported`.");
                }
                get _loadTestFont() {
                  (0, t.unreachable)("Abstract method `_loadTestFont`.");
                }
                _prepareFontLoadEvent(m, d, f) {
                  (0, t.unreachable)("Abstract method `_prepareFontLoadEvent`.");
                }
              }
              let x;
              n.FontLoader = x, n.FontLoader = x = class extends g {
                constructor(m) {
                  super(m), this.loadingContext = {
                    requests: [],
                    nextRequestId: 0
                  }, this.loadTestFontId = 0;
                }
                get isSyncFontLoadingSupported() {
                  let m = !1;
                  if (typeof navigator > "u")
                    m = !0;
                  else {
                    const d = /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent);
                    (d == null ? void 0 : d[1]) >= 14 && (m = !0);
                  }
                  return (0, t.shadow)(this, "isSyncFontLoadingSupported", m);
                }
                _queueLoadingCallback(m) {
                  function d() {
                    for ((0, t.assert)(!P.done, "completeRequest() cannot be called twice."), P.done = !0; f.requests.length > 0 && f.requests[0].done; ) {
                      const N = f.requests.shift();
                      setTimeout(N.callback, 0);
                    }
                  }
                  const f = this.loadingContext, P = {
                    id: `pdfjs-font-loading-${f.nextRequestId++}`,
                    done: !1,
                    complete: d,
                    callback: m
                  };
                  return f.requests.push(P), P;
                }
                get _loadTestFont() {
                  const m = function() {
                    return atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
                  };
                  return (0, t.shadow)(this, "_loadTestFont", m());
                }
                _prepareFontLoadEvent(m, d, f) {
                  function P(C, L) {
                    return C.charCodeAt(L) << 24 | C.charCodeAt(L + 1) << 16 | C.charCodeAt(L + 2) << 8 | C.charCodeAt(L + 3) & 255;
                  }
                  function N(C, L, j, $) {
                    const O = C.substring(0, L), o = C.substring(L + j);
                    return O + $ + o;
                  }
                  let v, W;
                  const c = this._document.createElement("canvas");
                  c.width = 1, c.height = 1;
                  const y = c.getContext("2d");
                  let I = 0;
                  function T(C, L) {
                    if (I++, I > 30) {
                      (0, t.warn)("Load test font never loaded."), L();
                      return;
                    }
                    if (y.font = "30px " + C, y.fillText(".", 0, 20), y.getImageData(0, 0, 1, 1).data[3] > 0) {
                      L();
                      return;
                    }
                    setTimeout(T.bind(null, C, L));
                  }
                  const b = `lt${Date.now()}${this.loadTestFontId++}`;
                  let r = this._loadTestFont;
                  r = N(r, 976, b.length, b);
                  const u = 16, S = 1482184792;
                  let p = P(r, u);
                  for (v = 0, W = b.length - 3; v < W; v += 4)
                    p = p - S + P(b, v) | 0;
                  v < b.length && (p = p - S + P(b + "XXX", v) | 0), r = N(r, u, 4, (0, t.string32)(p));
                  const M = `url(data:font/opentype;base64,${btoa(r)});`, R = `@font-face {font-family:"${b}";src:${M}}`;
                  this.insertRule(R);
                  const V = [];
                  for (const C of d)
                    V.push(C.loadedName);
                  V.push(b);
                  const D = this._document.createElement("div");
                  D.style.visibility = "hidden", D.style.width = D.style.height = "10px", D.style.position = "absolute", D.style.top = D.style.left = "0px";
                  for (const C of V) {
                    const L = this._document.createElement("span");
                    L.textContent = "Hi", L.style.fontFamily = C, D.appendChild(L);
                  }
                  this._document.body.appendChild(D), T(b, () => {
                    this._document.body.removeChild(D), f.complete();
                  });
                }
              };
              class F {
                constructor(m, {
                  isEvalSupported: d = !0,
                  disableFontFace: f = !1,
                  ignoreErrors: P = !1,
                  onUnsupportedFeature: N,
                  fontRegistry: v = null
                }) {
                  this.compiledGlyphs = /* @__PURE__ */ Object.create(null);
                  for (const W in m)
                    this[W] = m[W];
                  this.isEvalSupported = d !== !1, this.disableFontFace = f === !0, this.ignoreErrors = P === !0, this._onUnsupportedFeature = N, this.fontRegistry = v;
                }
                createNativeFontFace() {
                  if (!this.data || this.disableFontFace)
                    return null;
                  let m;
                  if (!this.cssFontInfo)
                    m = new FontFace(this.loadedName, this.data, {});
                  else {
                    const d = {
                      weight: this.cssFontInfo.fontWeight
                    };
                    this.cssFontInfo.italicAngle && (d.style = `oblique ${this.cssFontInfo.italicAngle}deg`), m = new FontFace(this.cssFontInfo.fontFamily, this.data, d);
                  }
                  return this.fontRegistry && this.fontRegistry.registerFont(this), m;
                }
                createFontFaceRule() {
                  if (!this.data || this.disableFontFace)
                    return null;
                  const m = (0, t.bytesToString)(this.data), d = `url(data:${this.mimetype};base64,${btoa(m)});`;
                  let f;
                  if (!this.cssFontInfo)
                    f = `@font-face {font-family:"${this.loadedName}";src:${d}}`;
                  else {
                    let P = `font-weight: ${this.cssFontInfo.fontWeight};`;
                    this.cssFontInfo.italicAngle && (P += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), f = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${P}src:${d}}`;
                  }
                  return this.fontRegistry && this.fontRegistry.registerFont(this, d), f;
                }
                getPathGenerator(m, d) {
                  if (this.compiledGlyphs[d] !== void 0)
                    return this.compiledGlyphs[d];
                  let f;
                  try {
                    f = m.get(this.loadedName + "_path_" + d);
                  } catch (P) {
                    if (!this.ignoreErrors)
                      throw P;
                    return this._onUnsupportedFeature({
                      featureId: t.UNSUPPORTED_FEATURES.errorFontGetPath
                    }), (0, t.warn)(`getPathGenerator - ignoring character: "${P}".`), this.compiledGlyphs[d] = function(N, v) {
                    };
                  }
                  if (this.isEvalSupported && t.IsEvalSupportedCached.value) {
                    const P = [];
                    for (const N of f) {
                      const v = N.args !== void 0 ? N.args.join(",") : "";
                      P.push("c.", N.cmd, "(", v, `);
`);
                    }
                    return this.compiledGlyphs[d] = new Function("c", "size", P.join(""));
                  }
                  return this.compiledGlyphs[d] = function(P, N) {
                    for (const v of f)
                      v.cmd === "scale" && (v.args = [N, -N]), P[v.cmd].apply(P, v.args);
                  };
                }
              }
              n.FontFaceObject = F;
            },
            /* 8 */
            /***/
            (X, n, _) => {
              Object.defineProperty(n, "__esModule", {
                value: !0
              }), n.NodeStandardFontDataFactory = n.NodeCMapReaderFactory = n.NodeCanvasFactory = void 0;
              var t = _(5), g = _(4), x = _(2);
              let F = class {
                constructor() {
                  (0, x.unreachable)("Not implemented: NodeCanvasFactory");
                }
              };
              n.NodeCanvasFactory = F;
              let w = class {
                constructor() {
                  (0, x.unreachable)("Not implemented: NodeCMapReaderFactory");
                }
              };
              n.NodeCMapReaderFactory = w;
              let m = class {
                constructor() {
                  (0, x.unreachable)("Not implemented: NodeStandardFontDataFactory");
                }
              };
              if (n.NodeStandardFontDataFactory = m, g.isNodeJS) {
                const d = function(f) {
                  return new Promise((P, N) => {
                    require$$5.readFile(f, (W, c) => {
                      if (W || !c) {
                        N(new Error(W));
                        return;
                      }
                      P(new Uint8Array(c));
                    });
                  });
                };
                n.NodeCanvasFactory = F = class extends t.BaseCanvasFactory {
                  _createCanvas(f, P) {
                    return require$$5.createCanvas(f, P);
                  }
                }, n.NodeCMapReaderFactory = w = class extends t.BaseCMapReaderFactory {
                  _fetchData(f, P) {
                    return d(f).then((N) => ({
                      cMapData: N,
                      compressionType: P
                    }));
                  }
                }, n.NodeStandardFontDataFactory = m = class extends t.BaseStandardFontDataFactory {
                  _fetchData(f) {
                    return d(f);
                  }
                };
              }
            },
            /* 9 */
            /***/
            (X, n, _) => {
              Object.defineProperty(n, "__esModule", {
                value: !0
              }), n.AnnotationStorage = void 0;
              var t = _(2);
              class g {
                constructor() {
                  this._storage = /* @__PURE__ */ new Map(), this._modified = !1, this.onSetModified = null, this.onResetModified = null;
                }
                getValue(F, w) {
                  const m = this._storage.get(F);
                  return m !== void 0 ? m : w;
                }
                setValue(F, w) {
                  const m = this._storage.get(F);
                  let d = !1;
                  if (m !== void 0)
                    for (const [f, P] of Object.entries(w))
                      m[f] !== P && (d = !0, m[f] = P);
                  else
                    this._storage.set(F, w), d = !0;
                  d && this._setModified();
                }
                getAll() {
                  return this._storage.size > 0 ? (0, t.objectFromMap)(this._storage) : null;
                }
                get size() {
                  return this._storage.size;
                }
                _setModified() {
                  this._modified || (this._modified = !0, typeof this.onSetModified == "function" && this.onSetModified());
                }
                resetModified() {
                  this._modified && (this._modified = !1, typeof this.onResetModified == "function" && this.onResetModified());
                }
                get serializable() {
                  return this._storage.size > 0 ? this._storage : null;
                }
              }
              n.AnnotationStorage = g;
            },
            /* 10 */
            /***/
            (X, n, _) => {
              Object.defineProperty(n, "__esModule", {
                value: !0
              }), n.CanvasGraphics = void 0;
              var t = _(2), g = _(11);
              const x = 16, F = 100, w = 4096, m = 1e3, d = 16, f = 1.000001;
              function P(y) {
                if (!y.mozCurrentTransform) {
                  y._originalSave = y.save, y._originalRestore = y.restore, y._originalRotate = y.rotate, y._originalScale = y.scale, y._originalTranslate = y.translate, y._originalTransform = y.transform, y._originalSetTransform = y.setTransform, y._originalResetTransform = y.resetTransform, y._transformMatrix = y._transformMatrix || [1, 0, 0, 1, 0, 0], y._transformStack = [];
                  try {
                    const I = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(y), "lineWidth");
                    y._setLineWidth = I.set, y._getLineWidth = I.get, Object.defineProperty(y, "lineWidth", {
                      set: function(b) {
                        this._setLineWidth(b * f);
                      },
                      get: function() {
                        return this._getLineWidth();
                      }
                    });
                  } catch {
                  }
                  Object.defineProperty(y, "mozCurrentTransform", {
                    get: function() {
                      return this._transformMatrix;
                    }
                  }), Object.defineProperty(y, "mozCurrentTransformInverse", {
                    get: function() {
                      const [T, b, r, s, u, S] = this._transformMatrix, p = T * s - b * r, M = b * r - T * s;
                      return [s / p, b / M, r / M, T / p, (s * u - r * S) / M, (b * u - T * S) / p];
                    }
                  }), y.save = function() {
                    const T = this._transformMatrix;
                    this._transformStack.push(T), this._transformMatrix = T.slice(0, 6), this._originalSave();
                  }, y.restore = function() {
                    const T = this._transformStack.pop();
                    T && (this._transformMatrix = T, this._originalRestore());
                  }, y.translate = function(T, b) {
                    const r = this._transformMatrix;
                    r[4] = r[0] * T + r[2] * b + r[4], r[5] = r[1] * T + r[3] * b + r[5], this._originalTranslate(T, b);
                  }, y.scale = function(T, b) {
                    const r = this._transformMatrix;
                    r[0] *= T, r[1] *= T, r[2] *= b, r[3] *= b, this._originalScale(T, b);
                  }, y.transform = function(T, b, r, s, u, S) {
                    const p = this._transformMatrix;
                    this._transformMatrix = [p[0] * T + p[2] * b, p[1] * T + p[3] * b, p[0] * r + p[2] * s, p[1] * r + p[3] * s, p[0] * u + p[2] * S + p[4], p[1] * u + p[3] * S + p[5]], y._originalTransform(T, b, r, s, u, S);
                  }, y.setTransform = function(T, b, r, s, u, S) {
                    this._transformMatrix = [T, b, r, s, u, S], y._originalSetTransform(T, b, r, s, u, S);
                  }, y.resetTransform = function() {
                    this._transformMatrix = [1, 0, 0, 1, 0, 0], y._originalResetTransform();
                  }, y.rotate = function(T) {
                    const b = Math.cos(T), r = Math.sin(T), s = this._transformMatrix;
                    this._transformMatrix = [s[0] * b + s[2] * r, s[1] * b + s[3] * r, s[0] * -r + s[2] * b, s[1] * -r + s[3] * b, s[4], s[5]], this._originalRotate(T);
                  };
                }
              }
              class N {
                constructor(I) {
                  this.canvasFactory = I, this.cache = /* @__PURE__ */ Object.create(null);
                }
                getCanvas(I, T, b, r) {
                  let s;
                  return this.cache[I] !== void 0 ? (s = this.cache[I], this.canvasFactory.reset(s, T, b), s.context.setTransform(1, 0, 0, 1, 0, 0)) : (s = this.canvasFactory.create(T, b), this.cache[I] = s), r && P(s.context), s;
                }
                clear() {
                  for (const I in this.cache) {
                    const T = this.cache[I];
                    this.canvasFactory.destroy(T), delete this.cache[I];
                  }
                }
              }
              function v(y) {
                const T = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]), b = y.width, r = y.height, s = b + 1;
                let u, S, p, M;
                const R = new Uint8Array(s * (r + 1)), V = b + 7 & -8, D = y.data, C = new Uint8Array(V * r);
                let L = 0;
                for (u = 0, S = D.length; u < S; u++) {
                  const e = D[u];
                  let i = 128;
                  for (; i > 0; )
                    C[L++] = e & i ? 0 : 255, i >>= 1;
                }
                let j = 0;
                for (L = 0, C[L] !== 0 && (R[0] = 1, ++j), p = 1; p < b; p++)
                  C[L] !== C[L + 1] && (R[p] = C[L] ? 2 : 1, ++j), L++;
                for (C[L] !== 0 && (R[p] = 2, ++j), u = 1; u < r; u++) {
                  L = u * V, M = u * s, C[L - V] !== C[L] && (R[M] = C[L] ? 1 : 8, ++j);
                  let e = (C[L] ? 4 : 0) + (C[L - V] ? 8 : 0);
                  for (p = 1; p < b; p++)
                    e = (e >> 2) + (C[L + 1] ? 4 : 0) + (C[L - V + 1] ? 8 : 0), T[e] && (R[M + p] = T[e], ++j), L++;
                  if (C[L - V] !== C[L] && (R[M + p] = C[L] ? 2 : 4, ++j), j > 1e3)
                    return null;
                }
                for (L = V * (r - 1), M = u * s, C[L] !== 0 && (R[M] = 8, ++j), p = 1; p < b; p++)
                  C[L] !== C[L + 1] && (R[M + p] = C[L] ? 4 : 8, ++j), L++;
                if (C[L] !== 0 && (R[M + p] = 4, ++j), j > 1e3)
                  return null;
                const $ = new Int32Array([0, s, -1, 0, -s, 0, 0, 0, 1]), O = [];
                for (u = 0; j && u <= r; u++) {
                  let e = u * s;
                  const i = e + b;
                  for (; e < i && !R[e]; )
                    e++;
                  if (e === i)
                    continue;
                  const a = [e % s, u], h = e;
                  let l = R[e];
                  do {
                    const A = $[l];
                    do
                      e += A;
                    while (!R[e]);
                    const k = R[e];
                    k !== 5 && k !== 10 ? (l = k, R[e] = 0) : (l = k & 51 * l >> 4, R[e] &= l >> 2 | l << 2), a.push(e % s, e / s | 0), R[e] || --j;
                  } while (h !== e);
                  O.push(a), --u;
                }
                return function(e) {
                  e.save(), e.scale(1 / b, -1 / r), e.translate(0, -r), e.beginPath();
                  for (let i = 0, a = O.length; i < a; i++) {
                    const h = O[i];
                    e.moveTo(h[0], h[1]);
                    for (let l = 2, A = h.length; l < A; l += 2)
                      e.lineTo(h[l], h[l + 1]);
                  }
                  e.fill(), e.beginPath(), e.restore();
                };
              }
              class W {
                constructor() {
                  this.alphaIsShape = !1, this.fontSize = 0, this.fontSizeScale = 1, this.textMatrix = t.IDENTITY_MATRIX, this.textMatrixScale = 1, this.fontMatrix = t.FONT_IDENTITY_MATRIX, this.leading = 0, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRenderingMode = t.TextRenderingMode.FILL, this.textRise = 0, this.fillColor = "#000000", this.strokeColor = "#000000", this.patternFill = !1, this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.activeSMask = null, this.resumeSMaskCtx = null, this.transferMaps = null;
                }
                clone() {
                  return Object.create(this);
                }
                setCurrentPoint(I, T) {
                  this.x = I, this.y = T;
                }
              }
              const c = function() {
                function b(O, o, e = null) {
                  if (typeof ImageData < "u" && o instanceof ImageData) {
                    O.putImageData(o, 0, 0);
                    return;
                  }
                  const i = o.height, a = o.width, h = i % d, l = (i - h) / d, A = h === 0 ? l : l + 1, k = O.createImageData(a, d);
                  let U = 0, G;
                  const B = o.data, Y = k.data;
                  let J, Q, te, oe, ie, de, ae, ue;
                  if (e)
                    switch (e.length) {
                      case 1:
                        ie = e[0], de = e[0], ae = e[0], ue = e[0];
                        break;
                      case 4:
                        ie = e[0], de = e[1], ae = e[2], ue = e[3];
                        break;
                    }
                  if (o.kind === t.ImageKind.GRAYSCALE_1BPP) {
                    const ye = B.byteLength, ne = new Uint32Array(Y.buffer, 0, Y.byteLength >> 2), be = ne.length, me = a + 7 >> 3;
                    let Se = 4294967295, Ae = t.IsLittleEndianCached.value ? 4278190080 : 255;
                    for (ue && ue[0] === 255 && ue[255] === 0 && ([Se, Ae] = [Ae, Se]), J = 0; J < A; J++) {
                      for (te = J < l ? d : h, G = 0, Q = 0; Q < te; Q++) {
                        const we = ye - U;
                        let xe = 0;
                        const Re = we > me ? a : we * 8 - 7, Ee = Re & -8;
                        let ke = 0, ge = 0;
                        for (; xe < Ee; xe += 8)
                          ge = B[U++], ne[G++] = ge & 128 ? Se : Ae, ne[G++] = ge & 64 ? Se : Ae, ne[G++] = ge & 32 ? Se : Ae, ne[G++] = ge & 16 ? Se : Ae, ne[G++] = ge & 8 ? Se : Ae, ne[G++] = ge & 4 ? Se : Ae, ne[G++] = ge & 2 ? Se : Ae, ne[G++] = ge & 1 ? Se : Ae;
                        for (; xe < Re; xe++)
                          ke === 0 && (ge = B[U++], ke = 128), ne[G++] = ge & ke ? Se : Ae, ke >>= 1;
                      }
                      for (; G < be; )
                        ne[G++] = 0;
                      O.putImageData(k, 0, J * d);
                    }
                  } else if (o.kind === t.ImageKind.RGBA_32BPP) {
                    const ye = !!(ie || de || ae);
                    for (Q = 0, oe = a * d * 4, J = 0; J < l; J++) {
                      if (Y.set(B.subarray(U, U + oe)), U += oe, ye)
                        for (let ne = 0; ne < oe; ne += 4)
                          ie && (Y[ne + 0] = ie[Y[ne + 0]]), de && (Y[ne + 1] = de[Y[ne + 1]]), ae && (Y[ne + 2] = ae[Y[ne + 2]]);
                      O.putImageData(k, 0, Q), Q += d;
                    }
                    if (J < A) {
                      if (oe = a * h * 4, Y.set(B.subarray(U, U + oe)), ye)
                        for (let ne = 0; ne < oe; ne += 4)
                          ie && (Y[ne + 0] = ie[Y[ne + 0]]), de && (Y[ne + 1] = de[Y[ne + 1]]), ae && (Y[ne + 2] = ae[Y[ne + 2]]);
                      O.putImageData(k, 0, Q);
                    }
                  } else if (o.kind === t.ImageKind.RGB_24BPP) {
                    const ye = !!(ie || de || ae);
                    for (te = d, oe = a * te, J = 0; J < A; J++) {
                      for (J >= l && (te = h, oe = a * te), G = 0, Q = oe; Q--; )
                        Y[G++] = B[U++], Y[G++] = B[U++], Y[G++] = B[U++], Y[G++] = 255;
                      if (ye)
                        for (let ne = 0; ne < G; ne += 4)
                          ie && (Y[ne + 0] = ie[Y[ne + 0]]), de && (Y[ne + 1] = de[Y[ne + 1]]), ae && (Y[ne + 2] = ae[Y[ne + 2]]);
                      O.putImageData(k, 0, J * d);
                    }
                  } else
                    throw new Error(`bad image kind: ${o.kind}`);
                }
                function r(O, o) {
                  const e = o.height, i = o.width, a = e % d, h = (e - a) / d, l = a === 0 ? h : h + 1, A = O.createImageData(i, d);
                  let k = 0;
                  const U = o.data, G = A.data;
                  for (let B = 0; B < l; B++) {
                    const Y = B < h ? d : a;
                    let J = 3;
                    for (let Q = 0; Q < Y; Q++) {
                      let te, oe = 0;
                      for (let ie = 0; ie < i; ie++)
                        oe || (te = U[k++], oe = 128), G[J] = te & oe ? 0 : 255, J += 4, oe >>= 1;
                    }
                    O.putImageData(A, 0, B * d);
                  }
                }
                function s(O, o) {
                  const e = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font"];
                  for (let i = 0, a = e.length; i < a; i++) {
                    const h = e[i];
                    O[h] !== void 0 && (o[h] = O[h]);
                  }
                  O.setLineDash !== void 0 && (o.setLineDash(O.getLineDash()), o.lineDashOffset = O.lineDashOffset);
                }
                function u(O) {
                  O.strokeStyle = "#000000", O.fillStyle = "#000000", O.fillRule = "nonzero", O.globalAlpha = 1, O.lineWidth = 1, O.lineCap = "butt", O.lineJoin = "miter", O.miterLimit = 10, O.globalCompositeOperation = "source-over", O.font = "10px sans-serif", O.setLineDash !== void 0 && (O.setLineDash([]), O.lineDashOffset = 0);
                }
                function S(O, o, e, i) {
                  const a = O.length;
                  for (let h = 3; h < a; h += 4) {
                    const l = O[h];
                    if (l === 0)
                      O[h - 3] = o, O[h - 2] = e, O[h - 1] = i;
                    else if (l < 255) {
                      const A = 255 - l;
                      O[h - 3] = O[h - 3] * l + o * A >> 8, O[h - 2] = O[h - 2] * l + e * A >> 8, O[h - 1] = O[h - 1] * l + i * A >> 8;
                    }
                  }
                }
                function p(O, o, e) {
                  const i = O.length, a = 1 / 255;
                  for (let h = 3; h < i; h += 4) {
                    const l = e ? e[O[h]] : O[h];
                    o[h] = o[h] * l * a | 0;
                  }
                }
                function M(O, o, e) {
                  const i = O.length;
                  for (let a = 3; a < i; a += 4) {
                    const h = O[a - 3] * 77 + O[a - 2] * 152 + O[a - 1] * 28;
                    o[a] = e ? o[a] * e[h >> 8] >> 8 : o[a] * h >> 16;
                  }
                }
                function R(O, o, e, i, a, h, l) {
                  const A = !!h, k = A ? h[0] : 0, U = A ? h[1] : 0, G = A ? h[2] : 0;
                  let B;
                  a === "Luminosity" ? B = M : B = p;
                  const J = Math.min(i, Math.ceil(1048576 / e));
                  for (let Q = 0; Q < i; Q += J) {
                    const te = Math.min(J, i - Q), oe = O.getImageData(0, Q, e, te), ie = o.getImageData(0, Q, e, te);
                    A && S(oe.data, k, U, G), B(oe.data, ie.data, l), O.putImageData(ie, 0, Q);
                  }
                }
                function V(O, o, e) {
                  const i = o.canvas, a = o.context;
                  O.setTransform(o.scaleX, 0, 0, o.scaleY, o.offsetX, o.offsetY), R(a, e, i.width, i.height, o.subtype, o.backdrop, o.transferMap), O.drawImage(i, 0, 0);
                }
                const D = ["butt", "round", "square"], C = ["miter", "round", "bevel"], L = {}, j = {};
                class $ {
                  constructor(o, e, i, a, h, l) {
                    this.ctx = o, this.current = new W(), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = e, this.objs = i, this.canvasFactory = a, this.imageLayer = h, this.groupStack = [], this.processingType3 = null, this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.contentVisible = !0, this.markedContentStack = [], this.optionalContentConfig = l, this.cachedCanvases = new N(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), o && P(o), this._cachedGetSinglePixelWidth = null;
                  }
                  beginDrawing({
                    transform: o,
                    viewport: e,
                    transparency: i = !1,
                    background: a = null
                  }) {
                    const h = this.ctx.canvas.width, l = this.ctx.canvas.height;
                    if (this.ctx.save(), this.ctx.fillStyle = a || "rgb(255, 255, 255)", this.ctx.fillRect(0, 0, h, l), this.ctx.restore(), i) {
                      const A = this.cachedCanvases.getCanvas("transparent", h, l, !0);
                      this.compositeCtx = this.ctx, this.transparentCanvas = A.canvas, this.ctx = A.context, this.ctx.save(), this.ctx.transform.apply(this.ctx, this.compositeCtx.mozCurrentTransform);
                    }
                    this.ctx.save(), u(this.ctx), o && this.ctx.transform.apply(this.ctx, o), this.ctx.transform.apply(this.ctx, e.transform), this.baseTransform = this.ctx.mozCurrentTransform.slice(), this._combinedScaleFactor = Math.hypot(this.baseTransform[0], this.baseTransform[2]), this.imageLayer && this.imageLayer.beginLayout();
                  }
                  executeOperatorList(o, e, i, a) {
                    const h = o.argsArray, l = o.fnArray;
                    let A = e || 0;
                    const k = h.length;
                    if (k === A)
                      return A;
                    const U = k - A > 10 && typeof i == "function", G = U ? Date.now() + 15 : 0;
                    let B = 0;
                    const Y = this.commonObjs, J = this.objs;
                    let Q;
                    for (; ; ) {
                      if (a !== void 0 && A === a.nextBreakPoint)
                        return a.breakIt(A, i), A;
                      if (Q = l[A], Q !== t.OPS.dependency)
                        this[Q].apply(this, h[A]);
                      else
                        for (const te of h[A]) {
                          const oe = te.startsWith("g_") ? Y : J;
                          if (!oe.has(te))
                            return oe.get(te, i), A;
                        }
                      if (A++, A === k)
                        return A;
                      if (U && ++B > 10) {
                        if (Date.now() > G)
                          return i(), A;
                        B = 0;
                      }
                    }
                  }
                  endDrawing() {
                    for (; this.stateStack.length || this.current.activeSMask !== null; )
                      this.restore();
                    this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null), this.cachedCanvases.clear(), this.cachedPatterns.clear(), this.imageLayer && this.imageLayer.endLayout();
                  }
                  _scaleImage(o, e) {
                    const i = o.width, a = o.height;
                    let h = Math.max(Math.hypot(e[0], e[1]), 1), l = Math.max(Math.hypot(e[2], e[3]), 1), A = i, k = a, U = "prescale1", G, B;
                    for (; h > 2 && A > 1 || l > 2 && k > 1; ) {
                      let Y = A, J = k;
                      h > 2 && A > 1 && (Y = Math.ceil(A / 2), h /= A / Y), l > 2 && k > 1 && (J = Math.ceil(k / 2), l /= k / J), G = this.cachedCanvases.getCanvas(U, Y, J), B = G.context, B.clearRect(0, 0, Y, J), B.drawImage(o, 0, 0, A, k, 0, 0, Y, J), o = G.canvas, A = Y, k = J, U = U === "prescale1" ? "prescale2" : "prescale1";
                    }
                    return {
                      img: o,
                      paintWidth: A,
                      paintHeight: k
                    };
                  }
                  _createMaskCanvas(o) {
                    const e = this.ctx, i = o.width, a = o.height, h = this.current.fillColor, l = this.current.patternFill, A = this.cachedCanvases.getCanvas("maskCanvas", i, a), k = A.context;
                    r(k, o);
                    const U = e.mozCurrentTransform;
                    let G = t.Util.transform(U, [1 / i, 0, 0, -1 / a, 0, 0]);
                    G = t.Util.transform(G, [1, 0, 0, 1, 0, -a]);
                    const B = t.Util.applyTransform([0, 0], G), Y = t.Util.applyTransform([i, a], G), J = t.Util.normalizeRect([B[0], B[1], Y[0], Y[1]]), Q = Math.ceil(J[2] - J[0]), te = Math.ceil(J[3] - J[1]), oe = this.cachedCanvases.getCanvas("fillCanvas", Q, te, !0), ie = oe.context, de = Math.min(B[0], Y[0]), ae = Math.min(B[1], Y[1]);
                    ie.translate(-de, -ae), ie.transform.apply(ie, G);
                    const ue = this._scaleImage(A.canvas, ie.mozCurrentTransformInverse);
                    ie.drawImage(ue.img, 0, 0, ue.img.width, ue.img.height, 0, 0, i, a), ie.globalCompositeOperation = "source-in";
                    const ye = t.Util.transform(ie.mozCurrentTransformInverse, [1, 0, 0, 1, -de, -ae]);
                    return ie.fillStyle = l ? h.getPattern(e, this, ye, !1) : h, ie.fillRect(0, 0, i, a), {
                      canvas: oe.canvas,
                      offsetX: Math.round(de),
                      offsetY: Math.round(ae)
                    };
                  }
                  setLineWidth(o) {
                    this.current.lineWidth = o, this.ctx.lineWidth = o;
                  }
                  setLineCap(o) {
                    this.ctx.lineCap = D[o];
                  }
                  setLineJoin(o) {
                    this.ctx.lineJoin = C[o];
                  }
                  setMiterLimit(o) {
                    this.ctx.miterLimit = o;
                  }
                  setDash(o, e) {
                    const i = this.ctx;
                    i.setLineDash !== void 0 && (i.setLineDash(o), i.lineDashOffset = e);
                  }
                  setRenderingIntent(o) {
                  }
                  setFlatness(o) {
                  }
                  setGState(o) {
                    for (let e = 0, i = o.length; e < i; e++) {
                      const a = o[e], h = a[0], l = a[1];
                      switch (h) {
                        case "LW":
                          this.setLineWidth(l);
                          break;
                        case "LC":
                          this.setLineCap(l);
                          break;
                        case "LJ":
                          this.setLineJoin(l);
                          break;
                        case "ML":
                          this.setMiterLimit(l);
                          break;
                        case "D":
                          this.setDash(l[0], l[1]);
                          break;
                        case "RI":
                          this.setRenderingIntent(l);
                          break;
                        case "FL":
                          this.setFlatness(l);
                          break;
                        case "Font":
                          this.setFont(l[0], l[1]);
                          break;
                        case "CA":
                          this.current.strokeAlpha = a[1];
                          break;
                        case "ca":
                          this.current.fillAlpha = a[1], this.ctx.globalAlpha = a[1];
                          break;
                        case "BM":
                          this.ctx.globalCompositeOperation = l;
                          break;
                        case "SMask":
                          this.current.activeSMask && (this.stateStack.length > 0 && this.stateStack[this.stateStack.length - 1].activeSMask === this.current.activeSMask ? this.suspendSMaskGroup() : this.endSMaskGroup()), this.current.activeSMask = l ? this.tempSMask : null, this.current.activeSMask && this.beginSMaskGroup(), this.tempSMask = null;
                          break;
                        case "TR":
                          this.current.transferMaps = l;
                      }
                    }
                  }
                  beginSMaskGroup() {
                    const o = this.current.activeSMask, e = o.canvas.width, i = o.canvas.height, a = "smaskGroupAt" + this.groupLevel, h = this.cachedCanvases.getCanvas(a, e, i, !0), l = this.ctx, A = l.mozCurrentTransform;
                    this.ctx.save();
                    const k = h.context;
                    k.scale(1 / o.scaleX, 1 / o.scaleY), k.translate(-o.offsetX, -o.offsetY), k.transform.apply(k, A), o.startTransformInverse = k.mozCurrentTransformInverse, s(l, k), this.ctx = k, this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]), this.groupStack.push(l), this.groupLevel++;
                  }
                  suspendSMaskGroup() {
                    const o = this.ctx;
                    this.groupLevel--, this.ctx = this.groupStack.pop(), V(this.ctx, this.current.activeSMask, o), this.ctx.restore(), this.ctx.save(), s(o, this.ctx), this.current.resumeSMaskCtx = o;
                    const e = t.Util.transform(this.current.activeSMask.startTransformInverse, o.mozCurrentTransform);
                    this.ctx.transform.apply(this.ctx, e), o.save(), o.setTransform(1, 0, 0, 1, 0, 0), o.clearRect(0, 0, o.canvas.width, o.canvas.height), o.restore();
                  }
                  resumeSMaskGroup() {
                    const o = this.current.resumeSMaskCtx, e = this.ctx;
                    this.ctx = o, this.groupStack.push(e), this.groupLevel++;
                  }
                  endSMaskGroup() {
                    const o = this.ctx;
                    this.groupLevel--, this.ctx = this.groupStack.pop(), V(this.ctx, this.current.activeSMask, o), this.ctx.restore(), s(o, this.ctx);
                    const e = t.Util.transform(this.current.activeSMask.startTransformInverse, o.mozCurrentTransform);
                    this.ctx.transform.apply(this.ctx, e);
                  }
                  save() {
                    this.ctx.save();
                    const o = this.current;
                    this.stateStack.push(o), this.current = o.clone(), this.current.resumeSMaskCtx = null;
                  }
                  restore() {
                    this.current.resumeSMaskCtx && this.resumeSMaskGroup(), this.current.activeSMask !== null && (this.stateStack.length === 0 || this.stateStack[this.stateStack.length - 1].activeSMask !== this.current.activeSMask) && this.endSMaskGroup(), this.stateStack.length !== 0 ? (this.current = this.stateStack.pop(), this.ctx.restore(), this.pendingClip = null, this._cachedGetSinglePixelWidth = null) : this.current.activeSMask = null;
                  }
                  transform(o, e, i, a, h, l) {
                    this.ctx.transform(o, e, i, a, h, l), this._cachedGetSinglePixelWidth = null;
                  }
                  constructPath(o, e) {
                    const i = this.ctx, a = this.current;
                    let h = a.x, l = a.y;
                    for (let A = 0, k = 0, U = o.length; A < U; A++)
                      switch (o[A] | 0) {
                        case t.OPS.rectangle:
                          h = e[k++], l = e[k++];
                          const G = e[k++], B = e[k++], Y = h + G, J = l + B;
                          i.moveTo(h, l), G === 0 || B === 0 ? i.lineTo(Y, J) : (i.lineTo(Y, l), i.lineTo(Y, J), i.lineTo(h, J)), i.closePath();
                          break;
                        case t.OPS.moveTo:
                          h = e[k++], l = e[k++], i.moveTo(h, l);
                          break;
                        case t.OPS.lineTo:
                          h = e[k++], l = e[k++], i.lineTo(h, l);
                          break;
                        case t.OPS.curveTo:
                          h = e[k + 4], l = e[k + 5], i.bezierCurveTo(e[k], e[k + 1], e[k + 2], e[k + 3], h, l), k += 6;
                          break;
                        case t.OPS.curveTo2:
                          i.bezierCurveTo(h, l, e[k], e[k + 1], e[k + 2], e[k + 3]), h = e[k + 2], l = e[k + 3], k += 4;
                          break;
                        case t.OPS.curveTo3:
                          h = e[k + 2], l = e[k + 3], i.bezierCurveTo(e[k], e[k + 1], h, l, h, l), k += 4;
                          break;
                        case t.OPS.closePath:
                          i.closePath();
                          break;
                      }
                    a.setCurrentPoint(h, l);
                  }
                  closePath() {
                    this.ctx.closePath();
                  }
                  stroke(o) {
                    o = typeof o < "u" ? o : !0;
                    const e = this.ctx, i = this.current.strokeColor;
                    if (e.globalAlpha = this.current.strokeAlpha, this.contentVisible)
                      if (typeof i == "object" && (i != null && i.getPattern)) {
                        const a = this.getSinglePixelWidth();
                        e.save(), e.strokeStyle = i.getPattern(e, this, e.mozCurrentTransformInverse), e.lineWidth = Math.max(a, this.current.lineWidth), e.stroke(), e.restore();
                      } else {
                        const a = this.getSinglePixelWidth();
                        a < 0 && -a >= this.current.lineWidth ? (e.save(), e.resetTransform(), e.lineWidth = Math.round(this._combinedScaleFactor), e.stroke(), e.restore()) : (e.lineWidth = Math.max(a, this.current.lineWidth), e.stroke());
                      }
                    o && this.consumePath(), e.globalAlpha = this.current.fillAlpha;
                  }
                  closeStroke() {
                    this.closePath(), this.stroke();
                  }
                  fill(o) {
                    o = typeof o < "u" ? o : !0;
                    const e = this.ctx, i = this.current.fillColor, a = this.current.patternFill;
                    let h = !1;
                    a && (e.save(), e.fillStyle = i.getPattern(e, this, e.mozCurrentTransformInverse), h = !0), this.contentVisible && (this.pendingEOFill ? (e.fill("evenodd"), this.pendingEOFill = !1) : e.fill()), h && e.restore(), o && this.consumePath();
                  }
                  eoFill() {
                    this.pendingEOFill = !0, this.fill();
                  }
                  fillStroke() {
                    this.fill(!1), this.stroke(!1), this.consumePath();
                  }
                  eoFillStroke() {
                    this.pendingEOFill = !0, this.fillStroke();
                  }
                  closeFillStroke() {
                    this.closePath(), this.fillStroke();
                  }
                  closeEOFillStroke() {
                    this.pendingEOFill = !0, this.closePath(), this.fillStroke();
                  }
                  endPath() {
                    this.consumePath();
                  }
                  clip() {
                    this.pendingClip = L;
                  }
                  eoClip() {
                    this.pendingClip = j;
                  }
                  beginText() {
                    this.current.textMatrix = t.IDENTITY_MATRIX, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
                  }
                  endText() {
                    const o = this.pendingTextPaths, e = this.ctx;
                    if (o === void 0) {
                      e.beginPath();
                      return;
                    }
                    e.save(), e.beginPath();
                    for (let i = 0; i < o.length; i++) {
                      const a = o[i];
                      e.setTransform.apply(e, a.transform), e.translate(a.x, a.y), a.addToPath(e, a.fontSize);
                    }
                    e.restore(), e.clip(), e.beginPath(), delete this.pendingTextPaths;
                  }
                  setCharSpacing(o) {
                    this.current.charSpacing = o;
                  }
                  setWordSpacing(o) {
                    this.current.wordSpacing = o;
                  }
                  setHScale(o) {
                    this.current.textHScale = o / 100;
                  }
                  setLeading(o) {
                    this.current.leading = -o;
                  }
                  setFont(o, e) {
                    const i = this.commonObjs.get(o), a = this.current;
                    if (!i)
                      throw new Error(`Can't find font for ${o}`);
                    if (a.fontMatrix = i.fontMatrix || t.FONT_IDENTITY_MATRIX, (a.fontMatrix[0] === 0 || a.fontMatrix[3] === 0) && (0, t.warn)("Invalid font matrix for font " + o), e < 0 ? (e = -e, a.fontDirection = -1) : a.fontDirection = 1, this.current.font = i, this.current.fontSize = e, i.isType3Font)
                      return;
                    const h = i.loadedName || "sans-serif";
                    let l = "normal";
                    i.black ? l = "900" : i.bold && (l = "bold");
                    const A = i.italic ? "italic" : "normal", k = `"${h}", ${i.fallbackName}`;
                    let U = e;
                    e < x ? U = x : e > F && (U = F), this.current.fontSizeScale = e / U, this.ctx.font = `${A} ${l} ${U}px ${k}`;
                  }
                  setTextRenderingMode(o) {
                    this.current.textRenderingMode = o;
                  }
                  setTextRise(o) {
                    this.current.textRise = o;
                  }
                  moveText(o, e) {
                    this.current.x = this.current.lineX += o, this.current.y = this.current.lineY += e;
                  }
                  setLeadingMoveText(o, e) {
                    this.setLeading(-e), this.moveText(o, e);
                  }
                  setTextMatrix(o, e, i, a, h, l) {
                    this.current.textMatrix = [o, e, i, a, h, l], this.current.textMatrixScale = Math.hypot(o, e), this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
                  }
                  nextLine() {
                    this.moveText(0, this.current.leading);
                  }
                  paintChar(o, e, i, a, h) {
                    const l = this.ctx, A = this.current, k = A.font, U = A.textRenderingMode, G = A.fontSize / A.fontSizeScale, B = U & t.TextRenderingMode.FILL_STROKE_MASK, Y = !!(U & t.TextRenderingMode.ADD_TO_PATH_FLAG), J = A.patternFill && !k.missingFile;
                    let Q;
                    (k.disableFontFace || Y || J) && (Q = k.getPathGenerator(this.commonObjs, o)), k.disableFontFace || J ? (l.save(), l.translate(e, i), l.beginPath(), Q(l, G), a && l.setTransform.apply(l, a), (B === t.TextRenderingMode.FILL || B === t.TextRenderingMode.FILL_STROKE) && l.fill(), (B === t.TextRenderingMode.STROKE || B === t.TextRenderingMode.FILL_STROKE) && (h && (l.resetTransform(), l.lineWidth = Math.round(this._combinedScaleFactor)), l.stroke()), l.restore()) : ((B === t.TextRenderingMode.FILL || B === t.TextRenderingMode.FILL_STROKE) && l.fillText(o, e, i), (B === t.TextRenderingMode.STROKE || B === t.TextRenderingMode.FILL_STROKE) && (h ? (l.save(), l.moveTo(e, i), l.resetTransform(), l.lineWidth = Math.round(this._combinedScaleFactor), l.strokeText(o, 0, 0), l.restore()) : l.strokeText(o, e, i))), Y && (this.pendingTextPaths || (this.pendingTextPaths = [])).push({
                      transform: l.mozCurrentTransform,
                      x: e,
                      y: i,
                      fontSize: G,
                      addToPath: Q
                    });
                  }
                  get isFontSubpixelAAEnabled() {
                    const {
                      context: o
                    } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
                    o.scale(1.5, 1), o.fillText("I", 0, 10);
                    const e = o.getImageData(0, 0, 10, 10).data;
                    let i = !1;
                    for (let a = 3; a < e.length; a += 4)
                      if (e[a] > 0 && e[a] < 255) {
                        i = !0;
                        break;
                      }
                    return (0, t.shadow)(this, "isFontSubpixelAAEnabled", i);
                  }
                  showText(o) {
                    const e = this.current, i = e.font;
                    if (i.isType3Font)
                      return this.showType3Text(o);
                    const a = e.fontSize;
                    if (a === 0)
                      return;
                    const h = this.ctx, l = e.fontSizeScale, A = e.charSpacing, k = e.wordSpacing, U = e.fontDirection, G = e.textHScale * U, B = o.length, Y = i.vertical, J = Y ? 1 : -1, Q = i.defaultVMetrics, te = a * e.fontMatrix[0], oe = e.textRenderingMode === t.TextRenderingMode.FILL && !i.disableFontFace && !e.patternFill;
                    h.save();
                    let ie;
                    if (e.patternFill) {
                      h.save();
                      const be = e.fillColor.getPattern(h, this, h.mozCurrentTransformInverse);
                      ie = h.mozCurrentTransform, h.restore(), h.fillStyle = be;
                    }
                    h.transform.apply(h, e.textMatrix), h.translate(e.x, e.y + e.textRise), U > 0 ? h.scale(G, -1) : h.scale(G, 1);
                    let de = e.lineWidth, ae = !1;
                    const ue = e.textMatrixScale;
                    if (ue === 0 || de === 0) {
                      const be = e.textRenderingMode & t.TextRenderingMode.FILL_STROKE_MASK;
                      (be === t.TextRenderingMode.STROKE || be === t.TextRenderingMode.FILL_STROKE) && (this._cachedGetSinglePixelWidth = null, de = this.getSinglePixelWidth(), ae = de < 0);
                    } else
                      de /= ue;
                    l !== 1 && (h.scale(l, l), de /= l), h.lineWidth = de;
                    let ye = 0, ne;
                    for (ne = 0; ne < B; ++ne) {
                      const be = o[ne];
                      if ((0, t.isNum)(be)) {
                        ye += J * be * a / 1e3;
                        continue;
                      }
                      let me = !1;
                      const Se = (be.isSpace ? k : 0) + A, Ae = be.fontChar, we = be.accent;
                      let xe, Re, Ee = be.width;
                      if (Y) {
                        const ge = be.vmetric || Q, Oe = -(be.vmetric ? ge[1] : Ee * 0.5) * te, je = ge[2] * te;
                        Ee = ge ? -ge[0] : Ee, xe = Oe / l, Re = (ye + je) / l;
                      } else
                        xe = ye / l, Re = 0;
                      if (i.remeasure && Ee > 0) {
                        const ge = h.measureText(Ae).width * 1e3 / a * l;
                        if (Ee < ge && this.isFontSubpixelAAEnabled) {
                          const Oe = Ee / ge;
                          me = !0, h.save(), h.scale(Oe, 1), xe /= Oe;
                        } else Ee !== ge && (xe += (Ee - ge) / 2e3 * a / l);
                      }
                      if (this.contentVisible && (be.isInFont || i.missingFile)) {
                        if (oe && !we)
                          h.fillText(Ae, xe, Re);
                        else if (this.paintChar(Ae, xe, Re, ie, ae), we) {
                          const ge = xe + a * we.offset.x / l, Oe = Re - a * we.offset.y / l;
                          this.paintChar(we.fontChar, ge, Oe, ie, ae);
                        }
                      }
                      let ke;
                      Y ? ke = Ee * te - Se * U : ke = Ee * te + Se * U, ye += ke, me && h.restore();
                    }
                    Y ? e.y -= ye : e.x += ye * G, h.restore();
                  }
                  showType3Text(o) {
                    const e = this.ctx, i = this.current, a = i.font, h = i.fontSize, l = i.fontDirection, A = a.vertical ? 1 : -1, k = i.charSpacing, U = i.wordSpacing, G = i.textHScale * l, B = i.fontMatrix || t.FONT_IDENTITY_MATRIX, Y = o.length, J = i.textRenderingMode === t.TextRenderingMode.INVISIBLE;
                    let Q, te, oe, ie;
                    if (!(J || h === 0)) {
                      for (this._cachedGetSinglePixelWidth = null, e.save(), e.transform.apply(e, i.textMatrix), e.translate(i.x, i.y), e.scale(G, l), Q = 0; Q < Y; ++Q) {
                        if (te = o[Q], (0, t.isNum)(te)) {
                          ie = A * te * h / 1e3, this.ctx.translate(ie, 0), i.x += ie * G;
                          continue;
                        }
                        const de = (te.isSpace ? U : 0) + k, ae = a.charProcOperatorList[te.operatorListId];
                        if (!ae) {
                          (0, t.warn)(`Type3 character "${te.operatorListId}" is not available.`);
                          continue;
                        }
                        this.contentVisible && (this.processingType3 = te, this.save(), e.scale(h, h), e.transform.apply(e, B), this.executeOperatorList(ae), this.restore()), oe = t.Util.applyTransform([te.width, 0], B)[0] * h + de, e.translate(oe, 0), i.x += oe * G;
                      }
                      e.restore(), this.processingType3 = null;
                    }
                  }
                  setCharWidth(o, e) {
                  }
                  setCharWidthAndBounds(o, e, i, a, h, l) {
                    this.ctx.rect(i, a, h - i, l - a), this.clip(), this.endPath();
                  }
                  getColorN_Pattern(o) {
                    let e;
                    if (o[0] === "TilingPattern") {
                      const i = o[1], a = this.baseTransform || this.ctx.mozCurrentTransform.slice(), h = {
                        createCanvasGraphics: (l) => new $(l, this.commonObjs, this.objs, this.canvasFactory)
                      };
                      e = new g.TilingPattern(o, i, this.ctx, h, a);
                    } else
                      e = this._getPattern(o[1]);
                    return e;
                  }
                  setStrokeColorN() {
                    this.current.strokeColor = this.getColorN_Pattern(arguments);
                  }
                  setFillColorN() {
                    this.current.fillColor = this.getColorN_Pattern(arguments), this.current.patternFill = !0;
                  }
                  setStrokeRGBColor(o, e, i) {
                    const a = t.Util.makeHexColor(o, e, i);
                    this.ctx.strokeStyle = a, this.current.strokeColor = a;
                  }
                  setFillRGBColor(o, e, i) {
                    const a = t.Util.makeHexColor(o, e, i);
                    this.ctx.fillStyle = a, this.current.fillColor = a, this.current.patternFill = !1;
                  }
                  _getPattern(o) {
                    if (this.cachedPatterns.has(o))
                      return this.cachedPatterns.get(o);
                    const e = (0, g.getShadingPattern)(this.objs.get(o));
                    return this.cachedPatterns.set(o, e), e;
                  }
                  shadingFill(o) {
                    if (!this.contentVisible)
                      return;
                    const e = this.ctx;
                    this.save();
                    const i = this._getPattern(o);
                    e.fillStyle = i.getPattern(e, this, e.mozCurrentTransformInverse, !0);
                    const a = e.mozCurrentTransformInverse;
                    if (a) {
                      const h = e.canvas, l = h.width, A = h.height, k = t.Util.applyTransform([0, 0], a), U = t.Util.applyTransform([0, A], a), G = t.Util.applyTransform([l, 0], a), B = t.Util.applyTransform([l, A], a), Y = Math.min(k[0], U[0], G[0], B[0]), J = Math.min(k[1], U[1], G[1], B[1]), Q = Math.max(k[0], U[0], G[0], B[0]), te = Math.max(k[1], U[1], G[1], B[1]);
                      this.ctx.fillRect(Y, J, Q - Y, te - J);
                    } else
                      this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
                    this.restore();
                  }
                  beginInlineImage() {
                    (0, t.unreachable)("Should not call beginInlineImage");
                  }
                  beginImageData() {
                    (0, t.unreachable)("Should not call beginImageData");
                  }
                  paintFormXObjectBegin(o, e) {
                    if (this.contentVisible && (this.save(), this.baseTransformStack.push(this.baseTransform), Array.isArray(o) && o.length === 6 && this.transform.apply(this, o), this.baseTransform = this.ctx.mozCurrentTransform, e)) {
                      const i = e[2] - e[0], a = e[3] - e[1];
                      this.ctx.rect(e[0], e[1], i, a), this.clip(), this.endPath();
                    }
                  }
                  paintFormXObjectEnd() {
                    this.contentVisible && (this.restore(), this.baseTransform = this.baseTransformStack.pop());
                  }
                  beginGroup(o) {
                    if (!this.contentVisible)
                      return;
                    this.save();
                    const e = this.ctx;
                    o.isolated || (0, t.info)("TODO: Support non-isolated groups."), o.knockout && (0, t.warn)("Knockout groups not supported.");
                    const i = e.mozCurrentTransform;
                    if (o.matrix && e.transform.apply(e, o.matrix), !o.bbox)
                      throw new Error("Bounding box is required.");
                    let a = t.Util.getAxialAlignedBoundingBox(o.bbox, e.mozCurrentTransform);
                    const h = [0, 0, e.canvas.width, e.canvas.height];
                    a = t.Util.intersect(a, h) || [0, 0, 0, 0];
                    const l = Math.floor(a[0]), A = Math.floor(a[1]);
                    let k = Math.max(Math.ceil(a[2]) - l, 1), U = Math.max(Math.ceil(a[3]) - A, 1), G = 1, B = 1;
                    k > w && (G = k / w, k = w), U > w && (B = U / w, U = w);
                    let Y = "groupAt" + this.groupLevel;
                    o.smask && (Y += "_smask_" + this.smaskCounter++ % 2);
                    const J = this.cachedCanvases.getCanvas(Y, k, U, !0), Q = J.context;
                    Q.scale(1 / G, 1 / B), Q.translate(-l, -A), Q.transform.apply(Q, i), o.smask ? this.smaskStack.push({
                      canvas: J.canvas,
                      context: Q,
                      offsetX: l,
                      offsetY: A,
                      scaleX: G,
                      scaleY: B,
                      subtype: o.smask.subtype,
                      backdrop: o.smask.backdrop,
                      transferMap: o.smask.transferMap || null,
                      startTransformInverse: null
                    }) : (e.setTransform(1, 0, 0, 1, 0, 0), e.translate(l, A), e.scale(G, B)), s(e, Q), this.ctx = Q, this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]), this.groupStack.push(e), this.groupLevel++, this.current.activeSMask = null;
                  }
                  endGroup(o) {
                    if (!this.contentVisible)
                      return;
                    this.groupLevel--;
                    const e = this.ctx;
                    this.ctx = this.groupStack.pop(), this.ctx.imageSmoothingEnabled !== void 0 ? this.ctx.imageSmoothingEnabled = !1 : this.ctx.mozImageSmoothingEnabled = !1, o.smask ? this.tempSMask = this.smaskStack.pop() : this.ctx.drawImage(e.canvas, 0, 0), this.restore();
                  }
                  beginAnnotations() {
                    this.save(), this.baseTransform && this.ctx.setTransform.apply(this.ctx, this.baseTransform);
                  }
                  endAnnotations() {
                    this.restore();
                  }
                  beginAnnotation(o, e, i, a) {
                    if (this.save(), u(this.ctx), this.current = new W(), Array.isArray(e) && e.length === 4) {
                      const h = e[2] - e[0], l = e[3] - e[1];
                      this.ctx.rect(e[0], e[1], h, l), this.clip(), this.endPath();
                    }
                    this.transform.apply(this, i), this.transform.apply(this, a);
                  }
                  endAnnotation() {
                    this.restore();
                  }
                  paintImageMaskXObject(o) {
                    if (!this.contentVisible)
                      return;
                    const e = this.ctx, i = o.width, a = o.height, h = this.processingType3;
                    if (h && h.compiled === void 0 && (i <= m && a <= m ? h.compiled = v({
                      data: o.data,
                      width: i,
                      height: a
                    }) : h.compiled = null), h != null && h.compiled) {
                      h.compiled(e);
                      return;
                    }
                    const l = this._createMaskCanvas(o), A = l.canvas;
                    e.save(), e.setTransform(1, 0, 0, 1, 0, 0), e.drawImage(A, l.offsetX, l.offsetY), e.restore();
                  }
                  paintImageMaskXObjectRepeat(o, e, i = 0, a = 0, h, l) {
                    if (!this.contentVisible)
                      return;
                    const A = this.ctx;
                    A.save();
                    const k = A.mozCurrentTransform;
                    A.transform(e, i, a, h, 0, 0);
                    const U = this._createMaskCanvas(o);
                    A.setTransform(1, 0, 0, 1, 0, 0);
                    for (let G = 0, B = l.length; G < B; G += 2) {
                      const Y = t.Util.transform(k, [e, i, a, h, l[G], l[G + 1]]), [J, Q] = t.Util.applyTransform([0, 0], Y);
                      A.drawImage(U.canvas, J, Q);
                    }
                    A.restore();
                  }
                  paintImageMaskXObjectGroup(o) {
                    if (!this.contentVisible)
                      return;
                    const e = this.ctx, i = this.current.fillColor, a = this.current.patternFill;
                    for (let h = 0, l = o.length; h < l; h++) {
                      const A = o[h], k = A.width, U = A.height, G = this.cachedCanvases.getCanvas("maskCanvas", k, U), B = G.context;
                      B.save(), r(B, A), B.globalCompositeOperation = "source-in", B.fillStyle = a ? i.getPattern(B, this, e.mozCurrentTransformInverse, !1) : i, B.fillRect(0, 0, k, U), B.restore(), e.save(), e.transform.apply(e, A.transform), e.scale(1, -1), e.drawImage(G.canvas, 0, 0, k, U, 0, -1, 1, 1), e.restore();
                    }
                  }
                  paintImageXObject(o) {
                    if (!this.contentVisible)
                      return;
                    const e = o.startsWith("g_") ? this.commonObjs.get(o) : this.objs.get(o);
                    if (!e) {
                      (0, t.warn)("Dependent image isn't ready yet");
                      return;
                    }
                    this.paintInlineImageXObject(e);
                  }
                  paintImageXObjectRepeat(o, e, i, a) {
                    if (!this.contentVisible)
                      return;
                    const h = o.startsWith("g_") ? this.commonObjs.get(o) : this.objs.get(o);
                    if (!h) {
                      (0, t.warn)("Dependent image isn't ready yet");
                      return;
                    }
                    const l = h.width, A = h.height, k = [];
                    for (let U = 0, G = a.length; U < G; U += 2)
                      k.push({
                        transform: [e, 0, 0, i, a[U], a[U + 1]],
                        x: 0,
                        y: 0,
                        w: l,
                        h: A
                      });
                    this.paintInlineImageXObjectGroup(h, k);
                  }
                  paintInlineImageXObject(o) {
                    if (!this.contentVisible)
                      return;
                    const e = o.width, i = o.height, a = this.ctx;
                    this.save(), a.scale(1 / e, -1 / i);
                    let h;
                    if (typeof HTMLElement == "function" && o instanceof HTMLElement || !o.data)
                      h = o;
                    else {
                      const A = this.cachedCanvases.getCanvas("inlineImage", e, i), k = A.context;
                      b(k, o, this.current.transferMaps), h = A.canvas;
                    }
                    const l = this._scaleImage(h, a.mozCurrentTransformInverse);
                    if (a.drawImage(l.img, 0, 0, l.paintWidth, l.paintHeight, 0, -i, e, i), this.imageLayer) {
                      const A = this.getCanvasPosition(0, -i);
                      this.imageLayer.appendImage({
                        imgData: o,
                        left: A[0],
                        top: A[1],
                        width: e / a.mozCurrentTransformInverse[0],
                        height: i / a.mozCurrentTransformInverse[3]
                      });
                    }
                    this.restore();
                  }
                  paintInlineImageXObjectGroup(o, e) {
                    if (!this.contentVisible)
                      return;
                    const i = this.ctx, a = o.width, h = o.height, l = this.cachedCanvases.getCanvas("inlineImage", a, h), A = l.context;
                    b(A, o, this.current.transferMaps);
                    for (let k = 0, U = e.length; k < U; k++) {
                      const G = e[k];
                      if (i.save(), i.transform.apply(i, G.transform), i.scale(1, -1), i.drawImage(l.canvas, G.x, G.y, G.w, G.h, 0, -1, 1, 1), this.imageLayer) {
                        const B = this.getCanvasPosition(G.x, G.y);
                        this.imageLayer.appendImage({
                          imgData: o,
                          left: B[0],
                          top: B[1],
                          width: a,
                          height: h
                        });
                      }
                      i.restore();
                    }
                  }
                  paintSolidColorImageMask() {
                    this.contentVisible && this.ctx.fillRect(0, 0, 1, 1);
                  }
                  markPoint(o) {
                  }
                  markPointProps(o, e) {
                  }
                  beginMarkedContent(o) {
                    this.markedContentStack.push({
                      visible: !0
                    });
                  }
                  beginMarkedContentProps(o, e) {
                    o === "OC" ? this.markedContentStack.push({
                      visible: this.optionalContentConfig.isVisible(e)
                    }) : this.markedContentStack.push({
                      visible: !0
                    }), this.contentVisible = this.isContentVisible();
                  }
                  endMarkedContent() {
                    this.markedContentStack.pop(), this.contentVisible = this.isContentVisible();
                  }
                  beginCompat() {
                  }
                  endCompat() {
                  }
                  consumePath() {
                    const o = this.ctx;
                    this.pendingClip && (this.pendingClip === j ? o.clip("evenodd") : o.clip(), this.pendingClip = null), o.beginPath();
                  }
                  getSinglePixelWidth() {
                    if (this._cachedGetSinglePixelWidth === null) {
                      const o = this.ctx.mozCurrentTransform, e = Math.abs(o[0] * o[3] - o[2] * o[1]), i = o[0] ** 2 + o[2] ** 2, a = o[1] ** 2 + o[3] ** 2, h = Math.sqrt(Math.max(i, a)) / e;
                      i !== a && this._combinedScaleFactor * h > 1 ? this._cachedGetSinglePixelWidth = -(this._combinedScaleFactor * h) : e > Number.EPSILON ? this._cachedGetSinglePixelWidth = h : this._cachedGetSinglePixelWidth = 1;
                    }
                    return this._cachedGetSinglePixelWidth;
                  }
                  getCanvasPosition(o, e) {
                    const i = this.ctx.mozCurrentTransform;
                    return [i[0] * o + i[2] * e + i[4], i[1] * o + i[3] * e + i[5]];
                  }
                  isContentVisible() {
                    for (let o = this.markedContentStack.length - 1; o >= 0; o--)
                      if (!this.markedContentStack[o].visible)
                        return !1;
                    return !0;
                  }
                }
                for (const O in t.OPS)
                  $.prototype[t.OPS[O]] = $.prototype[O];
                return $;
              }();
              n.CanvasGraphics = c;
            },
            /* 11 */
            /***/
            (X, n, _) => {
              Object.defineProperty(n, "__esModule", {
                value: !0
              }), n.getShadingPattern = P, n.TilingPattern = void 0;
              var t = _(2);
              function g(W, c) {
                if (!c || typeof Path2D > "u")
                  return;
                const y = c[2] - c[0], I = c[3] - c[1], T = new Path2D();
                T.rect(c[0], c[1], y, I), W.clip(T);
              }
              class x {
                constructor() {
                  this.constructor === x && (0, t.unreachable)("Cannot initialize BaseShadingPattern.");
                }
                getPattern() {
                  (0, t.unreachable)("Abstract method `getPattern` called.");
                }
              }
              class F extends x {
                constructor(c) {
                  super(), this._type = c[1], this._bbox = c[2], this._colorStops = c[3], this._p0 = c[4], this._p1 = c[5], this._r0 = c[6], this._r1 = c[7], this._matrix = c[8], this._patternCache = null;
                }
                _createGradient(c) {
                  let y;
                  this._type === "axial" ? y = c.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : this._type === "radial" && (y = c.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
                  for (const I of this._colorStops)
                    y.addColorStop(I[0], I[1]);
                  return y;
                }
                getPattern(c, y, I, T = !1) {
                  let b;
                  if (this._patternCache)
                    b = this._patternCache;
                  else {
                    if (T)
                      g(c, this._bbox), b = this._createGradient(c);
                    else {
                      const r = y.cachedCanvases.getCanvas("pattern", y.ctx.canvas.width, y.ctx.canvas.height, !0), s = r.context;
                      s.clearRect(0, 0, s.canvas.width, s.canvas.height), s.beginPath(), s.rect(0, 0, s.canvas.width, s.canvas.height), s.setTransform.apply(s, y.baseTransform), this._matrix && s.transform.apply(s, this._matrix), g(s, this._bbox), s.fillStyle = this._createGradient(s), s.fill(), b = c.createPattern(r.canvas, "repeat");
                    }
                    this._patternCache = b;
                  }
                  if (!T) {
                    const r = new DOMMatrix(I);
                    try {
                      b.setTransform(r);
                    } catch (s) {
                      (0, t.warn)(`RadialAxialShadingPattern.getPattern: "${s == null ? void 0 : s.message}".`);
                    }
                  }
                  return b;
                }
              }
              function w(W, c, y, I, T, b, r, s) {
                const u = c.coords, S = c.colors, p = W.data, M = W.width * 4;
                let R;
                u[y + 1] > u[I + 1] && (R = y, y = I, I = R, R = b, b = r, r = R), u[I + 1] > u[T + 1] && (R = I, I = T, T = R, R = r, r = s, s = R), u[y + 1] > u[I + 1] && (R = y, y = I, I = R, R = b, b = r, r = R);
                const V = (u[y] + c.offsetX) * c.scaleX, D = (u[y + 1] + c.offsetY) * c.scaleY, C = (u[I] + c.offsetX) * c.scaleX, L = (u[I + 1] + c.offsetY) * c.scaleY, j = (u[T] + c.offsetX) * c.scaleX, $ = (u[T + 1] + c.offsetY) * c.scaleY;
                if (D >= $)
                  return;
                const O = S[b], o = S[b + 1], e = S[b + 2], i = S[r], a = S[r + 1], h = S[r + 2], l = S[s], A = S[s + 1], k = S[s + 2], U = Math.round(D), G = Math.round($);
                let B, Y, J, Q, te, oe, ie, de;
                for (let ae = U; ae <= G; ae++) {
                  if (ae < L) {
                    let me;
                    ae < D ? me = 0 : me = (D - ae) / (D - L), B = V - (V - C) * me, Y = O - (O - i) * me, J = o - (o - a) * me, Q = e - (e - h) * me;
                  } else {
                    let me;
                    ae > $ ? me = 1 : L === $ ? me = 0 : me = (L - ae) / (L - $), B = C - (C - j) * me, Y = i - (i - l) * me, J = a - (a - A) * me, Q = h - (h - k) * me;
                  }
                  let ue;
                  ae < D ? ue = 0 : ae > $ ? ue = 1 : ue = (D - ae) / (D - $), te = V - (V - j) * ue, oe = O - (O - l) * ue, ie = o - (o - A) * ue, de = e - (e - k) * ue;
                  const ye = Math.round(Math.min(B, te)), ne = Math.round(Math.max(B, te));
                  let be = M * ae + ye * 4;
                  for (let me = ye; me <= ne; me++)
                    ue = (B - me) / (B - te), ue < 0 ? ue = 0 : ue > 1 && (ue = 1), p[be++] = Y - (Y - oe) * ue | 0, p[be++] = J - (J - ie) * ue | 0, p[be++] = Q - (Q - de) * ue | 0, p[be++] = 255;
                }
              }
              function m(W, c, y) {
                const I = c.coords, T = c.colors;
                let b, r;
                switch (c.type) {
                  case "lattice":
                    const s = c.verticesPerRow, u = Math.floor(I.length / s) - 1, S = s - 1;
                    for (b = 0; b < u; b++) {
                      let p = b * s;
                      for (let M = 0; M < S; M++, p++)
                        w(W, y, I[p], I[p + 1], I[p + s], T[p], T[p + 1], T[p + s]), w(W, y, I[p + s + 1], I[p + 1], I[p + s], T[p + s + 1], T[p + 1], T[p + s]);
                    }
                    break;
                  case "triangles":
                    for (b = 0, r = I.length; b < r; b += 3)
                      w(W, y, I[b], I[b + 1], I[b + 2], T[b], T[b + 1], T[b + 2]);
                    break;
                  default:
                    throw new Error("illegal figure");
                }
              }
              class d extends x {
                constructor(c) {
                  super(), this._coords = c[2], this._colors = c[3], this._figures = c[4], this._bounds = c[5], this._matrix = c[6], this._bbox = c[7], this._background = c[8];
                }
                _createMeshCanvas(c, y, I) {
                  const s = Math.floor(this._bounds[0]), u = Math.floor(this._bounds[1]), S = Math.ceil(this._bounds[2]) - s, p = Math.ceil(this._bounds[3]) - u, M = Math.min(Math.ceil(Math.abs(S * c[0] * 1.1)), 3e3), R = Math.min(Math.ceil(Math.abs(p * c[1] * 1.1)), 3e3), V = S / M, D = p / R, C = {
                    coords: this._coords,
                    colors: this._colors,
                    offsetX: -s,
                    offsetY: -u,
                    scaleX: 1 / V,
                    scaleY: 1 / D
                  }, L = M + 2 * 2, j = R + 2 * 2, $ = I.getCanvas("mesh", L, j, !1), O = $.context, o = O.createImageData(M, R);
                  if (y) {
                    const i = o.data;
                    for (let a = 0, h = i.length; a < h; a += 4)
                      i[a] = y[0], i[a + 1] = y[1], i[a + 2] = y[2], i[a + 3] = 255;
                  }
                  for (const i of this._figures)
                    m(o, i, C);
                  return O.putImageData(o, 2, 2), {
                    canvas: $.canvas,
                    offsetX: s - 2 * V,
                    offsetY: u - 2 * D,
                    scaleX: V,
                    scaleY: D
                  };
                }
                getPattern(c, y, I, T = !1) {
                  g(c, this._bbox);
                  let b;
                  if (T)
                    b = t.Util.singularValueDecompose2dScale(c.mozCurrentTransform);
                  else if (b = t.Util.singularValueDecompose2dScale(y.baseTransform), this._matrix) {
                    const s = t.Util.singularValueDecompose2dScale(this._matrix);
                    b = [b[0] * s[0], b[1] * s[1]];
                  }
                  const r = this._createMeshCanvas(b, T ? null : this._background, y.cachedCanvases);
                  return T || (c.setTransform.apply(c, y.baseTransform), this._matrix && c.transform.apply(c, this._matrix)), c.translate(r.offsetX, r.offsetY), c.scale(r.scaleX, r.scaleY), c.createPattern(r.canvas, "no-repeat");
                }
              }
              class f extends x {
                getPattern() {
                  return "hotpink";
                }
              }
              function P(W) {
                switch (W[0]) {
                  case "RadialAxial":
                    return new F(W);
                  case "Mesh":
                    return new d(W);
                  case "Dummy":
                    return new f();
                }
                throw new Error(`Unknown IR type: ${W[0]}`);
              }
              const N = {
                COLORED: 1,
                UNCOLORED: 2
              };
              class v {
                static get MAX_PATTERN_SIZE() {
                  return (0, t.shadow)(this, "MAX_PATTERN_SIZE", 3e3);
                }
                constructor(c, y, I, T, b) {
                  this.operatorList = c[2], this.matrix = c[3] || [1, 0, 0, 1, 0, 0], this.bbox = c[4], this.xstep = c[5], this.ystep = c[6], this.paintType = c[7], this.tilingType = c[8], this.color = y, this.ctx = I, this.canvasGraphicsFactory = T, this.baseTransform = b;
                }
                createPatternCanvas(c) {
                  const y = this.operatorList, I = this.bbox, T = this.xstep, b = this.ystep, r = this.paintType, s = this.tilingType, u = this.color, S = this.canvasGraphicsFactory;
                  (0, t.info)("TilingType: " + s);
                  const p = I[0], M = I[1], R = I[2], V = I[3], D = t.Util.singularValueDecompose2dScale(this.matrix), C = t.Util.singularValueDecompose2dScale(this.baseTransform), L = [D[0] * C[0], D[1] * C[1]], j = this.getSizeAndScale(T, this.ctx.canvas.width, L[0]), $ = this.getSizeAndScale(b, this.ctx.canvas.height, L[1]), O = c.cachedCanvases.getCanvas("pattern", j.size, $.size, !0), o = O.context, e = S.createCanvasGraphics(o);
                  e.groupLevel = c.groupLevel, this.setFillAndStrokeStyleToContext(e, r, u);
                  let i = p, a = M, h = R, l = V;
                  return p < 0 && (i = 0, h += Math.abs(p)), M < 0 && (a = 0, l += Math.abs(M)), o.translate(-(j.scale * i), -($.scale * a)), e.transform(j.scale, 0, 0, $.scale, 0, 0), this.clipBbox(e, i, a, h, l), e.baseTransform = e.ctx.mozCurrentTransform.slice(), e.executeOperatorList(y), e.endDrawing(), {
                    canvas: O.canvas,
                    scaleX: j.scale,
                    scaleY: $.scale,
                    offsetX: i,
                    offsetY: a
                  };
                }
                getSizeAndScale(c, y, I) {
                  c = Math.abs(c);
                  const T = Math.max(v.MAX_PATTERN_SIZE, y);
                  let b = Math.ceil(c * I);
                  return b >= T ? b = T : I = b / c, {
                    scale: I,
                    size: b
                  };
                }
                clipBbox(c, y, I, T, b) {
                  const r = T - y, s = b - I;
                  c.ctx.rect(y, I, r, s), c.clip(), c.endPath();
                }
                setFillAndStrokeStyleToContext(c, y, I) {
                  const T = c.ctx, b = c.current;
                  switch (y) {
                    case N.COLORED:
                      const r = this.ctx;
                      T.fillStyle = r.fillStyle, T.strokeStyle = r.strokeStyle, b.fillColor = r.fillStyle, b.strokeColor = r.strokeStyle;
                      break;
                    case N.UNCOLORED:
                      const s = t.Util.makeHexColor(I[0], I[1], I[2]);
                      T.fillStyle = s, T.strokeStyle = s, b.fillColor = s, b.strokeColor = s;
                      break;
                    default:
                      throw new t.FormatError(`Unsupported paint type: ${y}`);
                  }
                }
                getPattern(c, y, I, T = !1) {
                  let b = I;
                  T || (b = t.Util.transform(b, y.baseTransform), this.matrix && (b = t.Util.transform(b, this.matrix)));
                  const r = this.createPatternCanvas(y);
                  let s = new DOMMatrix(b);
                  s = s.translate(r.offsetX, r.offsetY), s = s.scale(1 / r.scaleX, 1 / r.scaleY);
                  const u = c.createPattern(r.canvas, "repeat");
                  try {
                    u.setTransform(s);
                  } catch (S) {
                    (0, t.warn)(`TilingPattern.getPattern: "${S == null ? void 0 : S.message}".`);
                  }
                  return u;
                }
              }
              n.TilingPattern = v;
            },
            /* 12 */
            /***/
            (X, n) => {
              Object.defineProperty(n, "__esModule", {
                value: !0
              }), n.GlobalWorkerOptions = void 0;
              const _ = /* @__PURE__ */ Object.create(null);
              n.GlobalWorkerOptions = _, _.workerPort = _.workerPort === void 0 ? null : _.workerPort, _.workerSrc = _.workerSrc === void 0 ? "" : _.workerSrc;
            },
            /* 13 */
            /***/
            (X, n, _) => {
              Object.defineProperty(n, "__esModule", {
                value: !0
              }), n.MessageHandler = void 0;
              var t = _(2);
              const g = {
                DATA: 1,
                ERROR: 2
              }, x = {
                CANCEL: 1,
                CANCEL_COMPLETE: 2,
                CLOSE: 3,
                ENQUEUE: 4,
                ERROR: 5,
                PULL: 6,
                PULL_COMPLETE: 7,
                START_COMPLETE: 8
              };
              function F(m) {
                if (typeof m != "object" || m === null)
                  return m;
                switch (m.name) {
                  case "AbortException":
                    return new t.AbortException(m.message);
                  case "MissingPDFException":
                    return new t.MissingPDFException(m.message);
                  case "UnexpectedResponseException":
                    return new t.UnexpectedResponseException(m.message, m.status);
                  case "UnknownErrorException":
                    return new t.UnknownErrorException(m.message, m.details);
                  default:
                    return new t.UnknownErrorException(m.message, m.toString());
                }
              }
              class w {
                constructor(d, f, P) {
                  this.sourceName = d, this.targetName = f, this.comObj = P, this.callbackId = 1, this.streamId = 1, this.postMessageTransfers = !0, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), this._onComObjOnMessage = (N) => {
                    const v = N.data;
                    if (v.targetName !== this.sourceName)
                      return;
                    if (v.stream) {
                      this._processStreamMessage(v);
                      return;
                    }
                    if (v.callback) {
                      const c = v.callbackId, y = this.callbackCapabilities[c];
                      if (!y)
                        throw new Error(`Cannot resolve callback ${c}`);
                      if (delete this.callbackCapabilities[c], v.callback === g.DATA)
                        y.resolve(v.data);
                      else if (v.callback === g.ERROR)
                        y.reject(F(v.reason));
                      else
                        throw new Error("Unexpected callback case");
                      return;
                    }
                    const W = this.actionHandler[v.action];
                    if (!W)
                      throw new Error(`Unknown action from worker: ${v.action}`);
                    if (v.callbackId) {
                      const c = this.sourceName, y = v.sourceName;
                      new Promise(function(I) {
                        I(W(v.data));
                      }).then(function(I) {
                        P.postMessage({
                          sourceName: c,
                          targetName: y,
                          callback: g.DATA,
                          callbackId: v.callbackId,
                          data: I
                        });
                      }, function(I) {
                        P.postMessage({
                          sourceName: c,
                          targetName: y,
                          callback: g.ERROR,
                          callbackId: v.callbackId,
                          reason: F(I)
                        });
                      });
                      return;
                    }
                    if (v.streamId) {
                      this._createStreamSink(v);
                      return;
                    }
                    W(v.data);
                  }, P.addEventListener("message", this._onComObjOnMessage);
                }
                on(d, f) {
                  const P = this.actionHandler;
                  if (P[d])
                    throw new Error(`There is already an actionName called "${d}"`);
                  P[d] = f;
                }
                send(d, f, P) {
                  this._postMessage({
                    sourceName: this.sourceName,
                    targetName: this.targetName,
                    action: d,
                    data: f
                  }, P);
                }
                sendWithPromise(d, f, P) {
                  const N = this.callbackId++, v = (0, t.createPromiseCapability)();
                  this.callbackCapabilities[N] = v;
                  try {
                    this._postMessage({
                      sourceName: this.sourceName,
                      targetName: this.targetName,
                      action: d,
                      callbackId: N,
                      data: f
                    }, P);
                  } catch (W) {
                    v.reject(W);
                  }
                  return v.promise;
                }
                sendWithStream(d, f, P, N) {
                  const v = this.streamId++, W = this.sourceName, c = this.targetName, y = this.comObj;
                  return new ReadableStream({
                    start: (I) => {
                      const T = (0, t.createPromiseCapability)();
                      return this.streamControllers[v] = {
                        controller: I,
                        startCall: T,
                        pullCall: null,
                        cancelCall: null,
                        isClosed: !1
                      }, this._postMessage({
                        sourceName: W,
                        targetName: c,
                        action: d,
                        streamId: v,
                        data: f,
                        desiredSize: I.desiredSize
                      }, N), T.promise;
                    },
                    pull: (I) => {
                      const T = (0, t.createPromiseCapability)();
                      return this.streamControllers[v].pullCall = T, y.postMessage({
                        sourceName: W,
                        targetName: c,
                        stream: x.PULL,
                        streamId: v,
                        desiredSize: I.desiredSize
                      }), T.promise;
                    },
                    cancel: (I) => {
                      (0, t.assert)(I instanceof Error, "cancel must have a valid reason");
                      const T = (0, t.createPromiseCapability)();
                      return this.streamControllers[v].cancelCall = T, this.streamControllers[v].isClosed = !0, y.postMessage({
                        sourceName: W,
                        targetName: c,
                        stream: x.CANCEL,
                        streamId: v,
                        reason: F(I)
                      }), T.promise;
                    }
                  }, P);
                }
                _createStreamSink(d) {
                  const f = this, P = this.actionHandler[d.action], N = d.streamId, v = this.sourceName, W = d.sourceName, c = this.comObj, y = {
                    enqueue(I, T = 1, b) {
                      if (this.isCancelled)
                        return;
                      const r = this.desiredSize;
                      this.desiredSize -= T, r > 0 && this.desiredSize <= 0 && (this.sinkCapability = (0, t.createPromiseCapability)(), this.ready = this.sinkCapability.promise), f._postMessage({
                        sourceName: v,
                        targetName: W,
                        stream: x.ENQUEUE,
                        streamId: N,
                        chunk: I
                      }, b);
                    },
                    close() {
                      this.isCancelled || (this.isCancelled = !0, c.postMessage({
                        sourceName: v,
                        targetName: W,
                        stream: x.CLOSE,
                        streamId: N
                      }), delete f.streamSinks[N]);
                    },
                    error(I) {
                      (0, t.assert)(I instanceof Error, "error must have a valid reason"), !this.isCancelled && (this.isCancelled = !0, c.postMessage({
                        sourceName: v,
                        targetName: W,
                        stream: x.ERROR,
                        streamId: N,
                        reason: F(I)
                      }));
                    },
                    sinkCapability: (0, t.createPromiseCapability)(),
                    onPull: null,
                    onCancel: null,
                    isCancelled: !1,
                    desiredSize: d.desiredSize,
                    ready: null
                  };
                  y.sinkCapability.resolve(), y.ready = y.sinkCapability.promise, this.streamSinks[N] = y, new Promise(function(I) {
                    I(P(d.data, y));
                  }).then(function() {
                    c.postMessage({
                      sourceName: v,
                      targetName: W,
                      stream: x.START_COMPLETE,
                      streamId: N,
                      success: !0
                    });
                  }, function(I) {
                    c.postMessage({
                      sourceName: v,
                      targetName: W,
                      stream: x.START_COMPLETE,
                      streamId: N,
                      reason: F(I)
                    });
                  });
                }
                _processStreamMessage(d) {
                  const f = d.streamId, P = this.sourceName, N = d.sourceName, v = this.comObj;
                  switch (d.stream) {
                    case x.START_COMPLETE:
                      d.success ? this.streamControllers[f].startCall.resolve() : this.streamControllers[f].startCall.reject(F(d.reason));
                      break;
                    case x.PULL_COMPLETE:
                      d.success ? this.streamControllers[f].pullCall.resolve() : this.streamControllers[f].pullCall.reject(F(d.reason));
                      break;
                    case x.PULL:
                      if (!this.streamSinks[f]) {
                        v.postMessage({
                          sourceName: P,
                          targetName: N,
                          stream: x.PULL_COMPLETE,
                          streamId: f,
                          success: !0
                        });
                        break;
                      }
                      this.streamSinks[f].desiredSize <= 0 && d.desiredSize > 0 && this.streamSinks[f].sinkCapability.resolve(), this.streamSinks[f].desiredSize = d.desiredSize;
                      const {
                        onPull: W
                      } = this.streamSinks[d.streamId];
                      new Promise(function(y) {
                        y(W && W());
                      }).then(function() {
                        v.postMessage({
                          sourceName: P,
                          targetName: N,
                          stream: x.PULL_COMPLETE,
                          streamId: f,
                          success: !0
                        });
                      }, function(y) {
                        v.postMessage({
                          sourceName: P,
                          targetName: N,
                          stream: x.PULL_COMPLETE,
                          streamId: f,
                          reason: F(y)
                        });
                      });
                      break;
                    case x.ENQUEUE:
                      if ((0, t.assert)(this.streamControllers[f], "enqueue should have stream controller"), this.streamControllers[f].isClosed)
                        break;
                      this.streamControllers[f].controller.enqueue(d.chunk);
                      break;
                    case x.CLOSE:
                      if ((0, t.assert)(this.streamControllers[f], "close should have stream controller"), this.streamControllers[f].isClosed)
                        break;
                      this.streamControllers[f].isClosed = !0, this.streamControllers[f].controller.close(), this._deleteStreamController(f);
                      break;
                    case x.ERROR:
                      (0, t.assert)(this.streamControllers[f], "error should have stream controller"), this.streamControllers[f].controller.error(F(d.reason)), this._deleteStreamController(f);
                      break;
                    case x.CANCEL_COMPLETE:
                      d.success ? this.streamControllers[f].cancelCall.resolve() : this.streamControllers[f].cancelCall.reject(F(d.reason)), this._deleteStreamController(f);
                      break;
                    case x.CANCEL:
                      if (!this.streamSinks[f])
                        break;
                      const {
                        onCancel: c
                      } = this.streamSinks[d.streamId];
                      new Promise(function(y) {
                        y(c && c(F(d.reason)));
                      }).then(function() {
                        v.postMessage({
                          sourceName: P,
                          targetName: N,
                          stream: x.CANCEL_COMPLETE,
                          streamId: f,
                          success: !0
                        });
                      }, function(y) {
                        v.postMessage({
                          sourceName: P,
                          targetName: N,
                          stream: x.CANCEL_COMPLETE,
                          streamId: f,
                          reason: F(y)
                        });
                      }), this.streamSinks[f].sinkCapability.reject(F(d.reason)), this.streamSinks[f].isCancelled = !0, delete this.streamSinks[f];
                      break;
                    default:
                      throw new Error("Unexpected stream case");
                  }
                }
                async _deleteStreamController(d) {
                  await Promise.allSettled([this.streamControllers[d].startCall, this.streamControllers[d].pullCall, this.streamControllers[d].cancelCall].map(function(f) {
                    return f && f.promise;
                  })), delete this.streamControllers[d];
                }
                _postMessage(d, f) {
                  f && this.postMessageTransfers ? this.comObj.postMessage(d, f) : this.comObj.postMessage(d);
                }
                destroy() {
                  this.comObj.removeEventListener("message", this._onComObjOnMessage);
                }
              }
              n.MessageHandler = w;
            },
            /* 14 */
            /***/
            (X, n, _) => {
              Object.defineProperty(n, "__esModule", {
                value: !0
              }), n.Metadata = void 0;
              var t = _(2);
              class g {
                constructor({
                  parsedData: F,
                  rawData: w
                }) {
                  this._metadataMap = F, this._data = w;
                }
                getRaw() {
                  return this._data;
                }
                get(F) {
                  return this._metadataMap.get(F) ?? null;
                }
                getAll() {
                  return (0, t.objectFromMap)(this._metadataMap);
                }
                has(F) {
                  return this._metadataMap.has(F);
                }
              }
              n.Metadata = g;
            },
            /* 15 */
            /***/
            (X, n, _) => {
              Object.defineProperty(n, "__esModule", {
                value: !0
              }), n.OptionalContentConfig = void 0;
              var t = _(2);
              class g {
                constructor(w, m) {
                  this.visible = !0, this.name = w, this.intent = m;
                }
              }
              class x {
                constructor(w) {
                  if (this.name = null, this.creator = null, this._order = null, this._groups = /* @__PURE__ */ new Map(), w !== null) {
                    this.name = w.name, this.creator = w.creator, this._order = w.order;
                    for (const m of w.groups)
                      this._groups.set(m.id, new g(m.name, m.intent));
                    if (w.baseState === "OFF")
                      for (const m of this._groups)
                        m.visible = !1;
                    for (const m of w.on)
                      this._groups.get(m).visible = !0;
                    for (const m of w.off)
                      this._groups.get(m).visible = !1;
                  }
                }
                _evaluateVisibilityExpression(w) {
                  const m = w.length;
                  if (m < 2)
                    return !0;
                  const d = w[0];
                  for (let f = 1; f < m; f++) {
                    const P = w[f];
                    let N;
                    if (Array.isArray(P))
                      N = this._evaluateVisibilityExpression(P);
                    else if (this._groups.has(P))
                      N = this._groups.get(P).visible;
                    else
                      return (0, t.warn)(`Optional content group not found: ${P}`), !0;
                    switch (d) {
                      case "And":
                        if (!N)
                          return !1;
                        break;
                      case "Or":
                        if (N)
                          return !0;
                        break;
                      case "Not":
                        return !N;
                      default:
                        return !0;
                    }
                  }
                  return d === "And";
                }
                isVisible(w) {
                  if (w.type === "OCG")
                    return this._groups.has(w.id) ? this._groups.get(w.id).visible : ((0, t.warn)(`Optional content group not found: ${w.id}`), !0);
                  if (w.type === "OCMD") {
                    if (w.expression)
                      return this._evaluateVisibilityExpression(w.expression);
                    if (!w.policy || w.policy === "AnyOn") {
                      for (const m of w.ids) {
                        if (!this._groups.has(m))
                          return (0, t.warn)(`Optional content group not found: ${m}`), !0;
                        if (this._groups.get(m).visible)
                          return !0;
                      }
                      return !1;
                    } else if (w.policy === "AllOn") {
                      for (const m of w.ids) {
                        if (!this._groups.has(m))
                          return (0, t.warn)(`Optional content group not found: ${m}`), !0;
                        if (!this._groups.get(m).visible)
                          return !1;
                      }
                      return !0;
                    } else if (w.policy === "AnyOff") {
                      for (const m of w.ids) {
                        if (!this._groups.has(m))
                          return (0, t.warn)(`Optional content group not found: ${m}`), !0;
                        if (!this._groups.get(m).visible)
                          return !0;
                      }
                      return !1;
                    } else if (w.policy === "AllOff") {
                      for (const m of w.ids) {
                        if (!this._groups.has(m))
                          return (0, t.warn)(`Optional content group not found: ${m}`), !0;
                        if (this._groups.get(m).visible)
                          return !1;
                      }
                      return !0;
                    }
                    return (0, t.warn)(`Unknown optional content policy ${w.policy}.`), !0;
                  }
                  return (0, t.warn)(`Unknown group type ${w.type}.`), !0;
                }
                setVisibility(w, m = !0) {
                  if (!this._groups.has(w)) {
                    (0, t.warn)(`Optional content group not found: ${w}`);
                    return;
                  }
                  this._groups.get(w).visible = !!m;
                }
                getOrder() {
                  return this._groups.size ? this._order ? this._order.slice() : Array.from(this._groups.keys()) : null;
                }
                getGroups() {
                  return this._groups.size > 0 ? (0, t.objectFromMap)(this._groups) : null;
                }
                getGroup(w) {
                  return this._groups.get(w) || null;
                }
              }
              n.OptionalContentConfig = x;
            },
            /* 16 */
            /***/
            (X, n, _) => {
              Object.defineProperty(n, "__esModule", {
                value: !0
              }), n.PDFDataTransportStream = void 0;
              var t = _(2), g = _(1);
              class x {
                constructor(d, f) {
                  (0, t.assert)(f, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.'), this._queuedChunks = [], this._progressiveDone = d.progressiveDone || !1, this._contentDispositionFilename = d.contentDispositionFilename || null;
                  const P = d.initialData;
                  if ((P == null ? void 0 : P.length) > 0) {
                    const N = new Uint8Array(P).buffer;
                    this._queuedChunks.push(N);
                  }
                  this._pdfDataRangeTransport = f, this._isStreamingSupported = !d.disableStream, this._isRangeSupported = !d.disableRange, this._contentLength = d.length, this._fullRequestReader = null, this._rangeReaders = [], this._pdfDataRangeTransport.addRangeListener((N, v) => {
                    this._onReceiveData({
                      begin: N,
                      chunk: v
                    });
                  }), this._pdfDataRangeTransport.addProgressListener((N, v) => {
                    this._onProgress({
                      loaded: N,
                      total: v
                    });
                  }), this._pdfDataRangeTransport.addProgressiveReadListener((N) => {
                    this._onReceiveData({
                      chunk: N
                    });
                  }), this._pdfDataRangeTransport.addProgressiveDoneListener(() => {
                    this._onProgressiveDone();
                  }), this._pdfDataRangeTransport.transportReady();
                }
                _onReceiveData(d) {
                  const f = new Uint8Array(d.chunk).buffer;
                  if (d.begin === void 0)
                    this._fullRequestReader ? this._fullRequestReader._enqueue(f) : this._queuedChunks.push(f);
                  else {
                    const P = this._rangeReaders.some(function(N) {
                      return N._begin !== d.begin ? !1 : (N._enqueue(f), !0);
                    });
                    (0, t.assert)(P, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
                  }
                }
                get _progressiveDataLength() {
                  var d;
                  return ((d = this._fullRequestReader) == null ? void 0 : d._loaded) ?? 0;
                }
                _onProgress(d) {
                  if (d.total === void 0) {
                    const f = this._rangeReaders[0];
                    f != null && f.onProgress && f.onProgress({
                      loaded: d.loaded
                    });
                  } else {
                    const f = this._fullRequestReader;
                    f != null && f.onProgress && f.onProgress({
                      loaded: d.loaded,
                      total: d.total
                    });
                  }
                }
                _onProgressiveDone() {
                  this._fullRequestReader && this._fullRequestReader.progressiveDone(), this._progressiveDone = !0;
                }
                _removeRangeReader(d) {
                  const f = this._rangeReaders.indexOf(d);
                  f >= 0 && this._rangeReaders.splice(f, 1);
                }
                getFullReader() {
                  (0, t.assert)(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
                  const d = this._queuedChunks;
                  return this._queuedChunks = null, new F(this, d, this._progressiveDone, this._contentDispositionFilename);
                }
                getRangeReader(d, f) {
                  if (f <= this._progressiveDataLength)
                    return null;
                  const P = new w(this, d, f);
                  return this._pdfDataRangeTransport.requestDataRange(d, f), this._rangeReaders.push(P), P;
                }
                cancelAllRequests(d) {
                  this._fullRequestReader && this._fullRequestReader.cancel(d);
                  for (const f of this._rangeReaders.slice(0))
                    f.cancel(d);
                  this._pdfDataRangeTransport.abort();
                }
              }
              n.PDFDataTransportStream = x;
              class F {
                constructor(d, f, P = !1, N = null) {
                  this._stream = d, this._done = P || !1, this._filename = (0, g.isPdfFile)(N) ? N : null, this._queuedChunks = f || [], this._loaded = 0;
                  for (const v of this._queuedChunks)
                    this._loaded += v.byteLength;
                  this._requests = [], this._headersReady = Promise.resolve(), d._fullRequestReader = this, this.onProgress = null;
                }
                _enqueue(d) {
                  this._done || (this._requests.length > 0 ? this._requests.shift().resolve({
                    value: d,
                    done: !1
                  }) : this._queuedChunks.push(d), this._loaded += d.byteLength);
                }
                get headersReady() {
                  return this._headersReady;
                }
                get filename() {
                  return this._filename;
                }
                get isRangeSupported() {
                  return this._stream._isRangeSupported;
                }
                get isStreamingSupported() {
                  return this._stream._isStreamingSupported;
                }
                get contentLength() {
                  return this._stream._contentLength;
                }
                async read() {
                  if (this._queuedChunks.length > 0)
                    return {
                      value: this._queuedChunks.shift(),
                      done: !1
                    };
                  if (this._done)
                    return {
                      value: void 0,
                      done: !0
                    };
                  const d = (0, t.createPromiseCapability)();
                  return this._requests.push(d), d.promise;
                }
                cancel(d) {
                  this._done = !0;
                  for (const f of this._requests)
                    f.resolve({
                      value: void 0,
                      done: !0
                    });
                  this._requests.length = 0;
                }
                progressiveDone() {
                  this._done || (this._done = !0);
                }
              }
              class w {
                constructor(d, f, P) {
                  this._stream = d, this._begin = f, this._end = P, this._queuedChunk = null, this._requests = [], this._done = !1, this.onProgress = null;
                }
                _enqueue(d) {
                  if (!this._done) {
                    if (this._requests.length === 0)
                      this._queuedChunk = d;
                    else {
                      this._requests.shift().resolve({
                        value: d,
                        done: !1
                      });
                      for (const P of this._requests)
                        P.resolve({
                          value: void 0,
                          done: !0
                        });
                      this._requests.length = 0;
                    }
                    this._done = !0, this._stream._removeRangeReader(this);
                  }
                }
                get isStreamingSupported() {
                  return !1;
                }
                async read() {
                  if (this._queuedChunk) {
                    const f = this._queuedChunk;
                    return this._queuedChunk = null, {
                      value: f,
                      done: !1
                    };
                  }
                  if (this._done)
                    return {
                      value: void 0,
                      done: !0
                    };
                  const d = (0, t.createPromiseCapability)();
                  return this._requests.push(d), d.promise;
                }
                cancel(d) {
                  this._done = !0;
                  for (const f of this._requests)
                    f.resolve({
                      value: void 0,
                      done: !0
                    });
                  this._requests.length = 0, this._stream._removeRangeReader(this);
                }
              }
            },
            /* 17 */
            /***/
            (X, n, _) => {
              Object.defineProperty(n, "__esModule", {
                value: !0
              }), n.AnnotationLayer = void 0;
              var t = _(1), g = _(2), x = _(9), F = _(18);
              class w {
                static create(e) {
                  switch (e.data.annotationType) {
                    case g.AnnotationType.LINK:
                      return new d(e);
                    case g.AnnotationType.TEXT:
                      return new f(e);
                    case g.AnnotationType.WIDGET:
                      switch (e.data.fieldType) {
                        case "Tx":
                          return new N(e);
                        case "Btn":
                          return e.data.radioButton ? new W(e) : e.data.checkBox ? new v(e) : new c(e);
                        case "Ch":
                          return new y(e);
                      }
                      return new P(e);
                    case g.AnnotationType.POPUP:
                      return new I(e);
                    case g.AnnotationType.FREETEXT:
                      return new b(e);
                    case g.AnnotationType.LINE:
                      return new r(e);
                    case g.AnnotationType.SQUARE:
                      return new s(e);
                    case g.AnnotationType.CIRCLE:
                      return new u(e);
                    case g.AnnotationType.POLYLINE:
                      return new S(e);
                    case g.AnnotationType.CARET:
                      return new M(e);
                    case g.AnnotationType.INK:
                      return new R(e);
                    case g.AnnotationType.POLYGON:
                      return new p(e);
                    case g.AnnotationType.HIGHLIGHT:
                      return new V(e);
                    case g.AnnotationType.UNDERLINE:
                      return new D(e);
                    case g.AnnotationType.SQUIGGLY:
                      return new C(e);
                    case g.AnnotationType.STRIKEOUT:
                      return new L(e);
                    case g.AnnotationType.STAMP:
                      return new j(e);
                    case g.AnnotationType.FILEATTACHMENT:
                      return new $(e);
                    default:
                      return new m(e);
                  }
                }
              }
              class m {
                constructor(e, {
                  isRenderable: i = !1,
                  ignoreBorder: a = !1,
                  createQuadrilaterals: h = !1
                } = {}) {
                  this.isRenderable = i, this.data = e.data, this.layer = e.layer, this.page = e.page, this.viewport = e.viewport, this.linkService = e.linkService, this.downloadManager = e.downloadManager, this.imageResourcesPath = e.imageResourcesPath, this.renderInteractiveForms = e.renderInteractiveForms, this.svgFactory = e.svgFactory, this.annotationStorage = e.annotationStorage, this.enableScripting = e.enableScripting, this.hasJSActions = e.hasJSActions, this._mouseState = e.mouseState, i && (this.container = this._createContainer(a)), h && (this.quadrilaterals = this._createQuadrilaterals(a));
                }
                _createContainer(e = !1) {
                  const i = this.data, a = this.page, h = this.viewport, l = document.createElement("section");
                  let A = i.rect[2] - i.rect[0], k = i.rect[3] - i.rect[1];
                  l.setAttribute("data-annotation-id", i.id);
                  const U = g.Util.normalizeRect([i.rect[0], a.view[3] - i.rect[1] + a.view[1], i.rect[2], a.view[3] - i.rect[3] + a.view[1]]);
                  if (l.style.transform = `matrix(${h.transform.join(",")})`, l.style.transformOrigin = `${-U[0]}px ${-U[1]}px`, !e && i.borderStyle.width > 0) {
                    l.style.borderWidth = `${i.borderStyle.width}px`, i.borderStyle.style !== g.AnnotationBorderStyleType.UNDERLINE && (A -= 2 * i.borderStyle.width, k -= 2 * i.borderStyle.width);
                    const G = i.borderStyle.horizontalCornerRadius, B = i.borderStyle.verticalCornerRadius;
                    if (G > 0 || B > 0) {
                      const Y = `${G}px / ${B}px`;
                      l.style.borderRadius = Y;
                    }
                    switch (i.borderStyle.style) {
                      case g.AnnotationBorderStyleType.SOLID:
                        l.style.borderStyle = "solid";
                        break;
                      case g.AnnotationBorderStyleType.DASHED:
                        l.style.borderStyle = "dashed";
                        break;
                      case g.AnnotationBorderStyleType.BEVELED:
                        (0, g.warn)("Unimplemented border style: beveled");
                        break;
                      case g.AnnotationBorderStyleType.INSET:
                        (0, g.warn)("Unimplemented border style: inset");
                        break;
                      case g.AnnotationBorderStyleType.UNDERLINE:
                        l.style.borderBottomStyle = "solid";
                        break;
                    }
                    i.color ? l.style.borderColor = g.Util.makeHexColor(i.color[0] | 0, i.color[1] | 0, i.color[2] | 0) : l.style.borderWidth = 0;
                  }
                  return l.style.left = `${U[0]}px`, l.style.top = `${U[1]}px`, l.style.width = `${A}px`, l.style.height = `${k}px`, l;
                }
                _createQuadrilaterals(e = !1) {
                  if (!this.data.quadPoints)
                    return null;
                  const i = [], a = this.data.rect;
                  for (const h of this.data.quadPoints)
                    this.data.rect = [h[2].x, h[2].y, h[1].x, h[1].y], i.push(this._createContainer(e));
                  return this.data.rect = a, i;
                }
                _createPopup(e, i) {
                  let a = this.container;
                  this.quadrilaterals && (e = e || this.quadrilaterals, a = this.quadrilaterals[0]), e || (e = document.createElement("div"), e.style.height = a.style.height, e.style.width = a.style.width, a.appendChild(e));
                  const l = new T({
                    container: a,
                    trigger: e,
                    color: i.color,
                    title: i.title,
                    modificationDate: i.modificationDate,
                    contents: i.contents,
                    hideWrapper: !0
                  }).render();
                  l.style.left = a.style.width, a.appendChild(l);
                }
                _renderQuadrilaterals(e) {
                  for (const i of this.quadrilaterals)
                    i.className = e;
                  return this.quadrilaterals;
                }
                render() {
                  (0, g.unreachable)("Abstract method `AnnotationElement.render` called");
                }
              }
              class d extends m {
                constructor(e) {
                  const i = !!(e.data.url || e.data.dest || e.data.action || e.data.isTooltipOnly || e.data.actions && (e.data.actions.Action || e.data.actions["Mouse Up"] || e.data.actions["Mouse Down"]));
                  super(e, {
                    isRenderable: i,
                    createQuadrilaterals: !0
                  });
                }
                render() {
                  const {
                    data: e,
                    linkService: i
                  } = this, a = document.createElement("a");
                  return e.url ? (0, t.addLinkAttributes)(a, {
                    url: e.url,
                    target: e.newWindow ? t.LinkTarget.BLANK : i.externalLinkTarget,
                    rel: i.externalLinkRel,
                    enabled: i.externalLinkEnabled
                  }) : e.action ? this._bindNamedAction(a, e.action) : e.dest ? this._bindLink(a, e.dest) : e.actions && (e.actions.Action || e.actions["Mouse Up"] || e.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions ? this._bindJSAction(a, e) : this._bindLink(a, ""), this.quadrilaterals ? this._renderQuadrilaterals("linkAnnotation").map((h, l) => {
                    const A = l === 0 ? a : a.cloneNode();
                    return h.appendChild(A), h;
                  }) : (this.container.className = "linkAnnotation", this.container.appendChild(a), this.container);
                }
                _bindLink(e, i) {
                  e.href = this.linkService.getDestinationHash(i), e.onclick = () => (i && this.linkService.goToDestination(i), !1), (i || i === "") && (e.className = "internalLink");
                }
                _bindNamedAction(e, i) {
                  e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeNamedAction(i), !1), e.className = "internalLink";
                }
                _bindJSAction(e, i) {
                  e.href = this.linkService.getAnchorUrl("");
                  const a = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
                  for (const h of Object.keys(i.actions)) {
                    const l = a.get(h);
                    l && (e[l] = () => {
                      var A;
                      return (A = this.linkService.eventBus) == null || A.dispatch("dispatcheventinsandbox", {
                        source: this,
                        detail: {
                          id: i.id,
                          name: h
                        }
                      }), !1;
                    });
                  }
                  e.className = "internalLink";
                }
              }
              class f extends m {
                constructor(e) {
                  const i = !!(e.data.hasPopup || e.data.title || e.data.contents);
                  super(e, {
                    isRenderable: i
                  });
                }
                render() {
                  this.container.className = "textAnnotation";
                  const e = document.createElement("img");
                  return e.style.height = this.container.style.height, e.style.width = this.container.style.width, e.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg", e.alt = "[{{type}} Annotation]", e.dataset.l10nId = "text_annotation_type", e.dataset.l10nArgs = JSON.stringify({
                    type: this.data.name
                  }), this.data.hasPopup || this._createPopup(e, this.data), this.container.appendChild(e), this.container;
                }
              }
              class P extends m {
                render() {
                  return this.data.alternativeText && (this.container.title = this.data.alternativeText), this.container;
                }
                _getKeyModifier(e) {
                  return navigator.platform.includes("Win") && e.ctrlKey || navigator.platform.includes("Mac") && e.metaKey;
                }
                _setEventListener(e, i, a, h) {
                  i.includes("mouse") ? e.addEventListener(i, (l) => {
                    var A;
                    (A = this.linkService.eventBus) == null || A.dispatch("dispatcheventinsandbox", {
                      source: this,
                      detail: {
                        id: this.data.id,
                        name: a,
                        value: h(l),
                        shift: l.shiftKey,
                        modifier: this._getKeyModifier(l)
                      }
                    });
                  }) : e.addEventListener(i, (l) => {
                    var A;
                    (A = this.linkService.eventBus) == null || A.dispatch("dispatcheventinsandbox", {
                      source: this,
                      detail: {
                        id: this.data.id,
                        name: a,
                        value: l.target.checked
                      }
                    });
                  });
                }
                _setEventListeners(e, i, a) {
                  var h;
                  for (const [l, A] of i)
                    (A === "Action" || (h = this.data.actions) != null && h[A]) && this._setEventListener(e, l, A, a);
                }
                _dispatchEventFromSandbox(e, i) {
                  const a = (l, A, k) => {
                    const U = k.detail[l];
                    k.target.style[A] = F.ColorConverters[`${U[0]}_HTML`](U.slice(1));
                  }, h = {
                    display: (l) => {
                      const A = l.detail.display % 2 === 1;
                      l.target.style.visibility = A ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
                        hidden: A,
                        print: l.detail.display === 0 || l.detail.display === 3
                      });
                    },
                    print: (l) => {
                      this.annotationStorage.setValue(this.data.id, {
                        print: l.detail.print
                      });
                    },
                    hidden: (l) => {
                      l.target.style.visibility = l.detail.hidden ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
                        hidden: l.detail.hidden
                      });
                    },
                    focus: (l) => {
                      setTimeout(() => l.target.focus({
                        preventScroll: !1
                      }), 0);
                    },
                    userName: (l) => {
                      l.target.title = l.detail.userName;
                    },
                    readonly: (l) => {
                      l.detail.readonly ? l.target.setAttribute("readonly", "") : l.target.removeAttribute("readonly");
                    },
                    required: (l) => {
                      l.detail.required ? l.target.setAttribute("required", "") : l.target.removeAttribute("required");
                    },
                    bgColor: (l) => {
                      a("bgColor", "backgroundColor", l);
                    },
                    fillColor: (l) => {
                      a("fillColor", "backgroundColor", l);
                    },
                    fgColor: (l) => {
                      a("fgColor", "color", l);
                    },
                    textColor: (l) => {
                      a("textColor", "color", l);
                    },
                    borderColor: (l) => {
                      a("borderColor", "borderColor", l);
                    },
                    strokeColor: (l) => {
                      a("strokeColor", "borderColor", l);
                    }
                  };
                  for (const l of Object.keys(i.detail)) {
                    const A = e[l] || h[l];
                    A && A(i);
                  }
                }
              }
              class N extends P {
                constructor(e) {
                  const i = e.renderInteractiveForms || !e.data.hasAppearance && !!e.data.fieldValue;
                  super(e, {
                    isRenderable: i
                  });
                }
                setPropertyOnSiblings(e, i, a, h) {
                  const l = this.annotationStorage;
                  for (const A of document.getElementsByName(e.name))
                    if (A !== e) {
                      A[i] = a;
                      const k = /* @__PURE__ */ Object.create(null);
                      k[h] = a, l.setValue(A.getAttribute("id"), k);
                    }
                }
                render() {
                  var h;
                  const e = this.annotationStorage, i = this.data.id;
                  this.container.className = "textWidgetAnnotation";
                  let a = null;
                  if (this.renderInteractiveForms) {
                    const l = e.getValue(i, {
                      value: this.data.fieldValue,
                      valueAsString: this.data.fieldValue
                    }), A = l.valueAsString || l.value || "", k = {
                      userValue: null,
                      formattedValue: null,
                      beforeInputSelectionRange: null,
                      beforeInputValue: null
                    };
                    this.data.multiLine ? (a = document.createElement("textarea"), a.textContent = A) : (a = document.createElement("input"), a.type = "text", a.setAttribute("value", A)), k.userValue = A, a.setAttribute("id", i), a.addEventListener("input", (G) => {
                      e.setValue(i, {
                        value: G.target.value
                      }), this.setPropertyOnSiblings(a, "value", G.target.value, "value");
                    });
                    let U = (G) => {
                      k.formattedValue && (G.target.value = k.formattedValue), G.target.scrollLeft = 0, k.beforeInputSelectionRange = null;
                    };
                    if (this.enableScripting && this.hasJSActions) {
                      a.addEventListener("focus", (B) => {
                        k.userValue && (B.target.value = k.userValue);
                      }), a.addEventListener("updatefromsandbox", (B) => {
                        const Y = {
                          value(J) {
                            k.userValue = J.detail.value || "", e.setValue(i, {
                              value: k.userValue.toString()
                            }), k.formattedValue || (J.target.value = k.userValue);
                          },
                          valueAsString(J) {
                            k.formattedValue = J.detail.valueAsString || "", J.target !== document.activeElement && (J.target.value = k.formattedValue), e.setValue(i, {
                              formattedValue: k.formattedValue
                            });
                          },
                          selRange(J) {
                            const [Q, te] = J.detail.selRange;
                            Q >= 0 && te < J.target.value.length && J.target.setSelectionRange(Q, te);
                          }
                        };
                        this._dispatchEventFromSandbox(Y, B);
                      }), a.addEventListener("keydown", (B) => {
                        var J;
                        k.beforeInputValue = B.target.value;
                        let Y = -1;
                        B.key === "Escape" ? Y = 0 : B.key === "Enter" ? Y = 2 : B.key === "Tab" && (Y = 3), Y !== -1 && (k.userValue = B.target.value, (J = this.linkService.eventBus) == null || J.dispatch("dispatcheventinsandbox", {
                          source: this,
                          detail: {
                            id: i,
                            name: "Keystroke",
                            value: B.target.value,
                            willCommit: !0,
                            commitKey: Y,
                            selStart: B.target.selectionStart,
                            selEnd: B.target.selectionEnd
                          }
                        }));
                      });
                      const G = U;
                      U = null, a.addEventListener("blur", (B) => {
                        var Y;
                        this._mouseState.isDown && (k.userValue = B.target.value, (Y = this.linkService.eventBus) == null || Y.dispatch("dispatcheventinsandbox", {
                          source: this,
                          detail: {
                            id: i,
                            name: "Keystroke",
                            value: B.target.value,
                            willCommit: !0,
                            commitKey: 1,
                            selStart: B.target.selectionStart,
                            selEnd: B.target.selectionEnd
                          }
                        })), G(B);
                      }), a.addEventListener("mousedown", (B) => {
                        k.beforeInputValue = B.target.value, k.beforeInputSelectionRange = null;
                      }), a.addEventListener("keyup", (B) => {
                        B.target.selectionStart === B.target.selectionEnd && (k.beforeInputSelectionRange = null);
                      }), a.addEventListener("select", (B) => {
                        k.beforeInputSelectionRange = [B.target.selectionStart, B.target.selectionEnd];
                      }), (h = this.data.actions) != null && h.Keystroke && a.addEventListener("input", (B) => {
                        var Q;
                        let Y = -1, J = -1;
                        k.beforeInputSelectionRange && ([Y, J] = k.beforeInputSelectionRange), (Q = this.linkService.eventBus) == null || Q.dispatch("dispatcheventinsandbox", {
                          source: this,
                          detail: {
                            id: i,
                            name: "Keystroke",
                            value: k.beforeInputValue,
                            change: B.data,
                            willCommit: !1,
                            selStart: Y,
                            selEnd: J
                          }
                        });
                      }), this._setEventListeners(a, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (B) => B.target.value);
                    }
                    if (U && a.addEventListener("blur", U), a.disabled = this.data.readOnly, a.name = this.data.fieldName, this.data.maxLen !== null && (a.maxLength = this.data.maxLen), this.data.comb) {
                      const B = (this.data.rect[2] - this.data.rect[0]) / this.data.maxLen;
                      a.classList.add("comb"), a.style.letterSpacing = `calc(${B}px - 1ch)`;
                    }
                  } else
                    a = document.createElement("div"), a.textContent = this.data.fieldValue, a.style.verticalAlign = "middle", a.style.display = "table-cell";
                  return this._setTextStyle(a), this.container.appendChild(a), this.container;
                }
                _setTextStyle(e) {
                  const i = ["left", "center", "right"], {
                    fontSize: a,
                    fontColor: h
                  } = this.data.defaultAppearanceData, l = e.style;
                  a && (l.fontSize = `${a}px`), l.color = g.Util.makeHexColor(h[0], h[1], h[2]), this.data.textAlignment !== null && (l.textAlign = i[this.data.textAlignment]);
                }
              }
              class v extends P {
                constructor(e) {
                  super(e, {
                    isRenderable: e.renderInteractiveForms
                  });
                }
                render() {
                  const e = this.annotationStorage, i = this.data, a = i.id;
                  let h = e.getValue(a, {
                    value: i.fieldValue && (i.exportValue && i.exportValue === i.fieldValue || !i.exportValue && i.fieldValue !== "Off")
                  }).value;
                  typeof h == "string" && (h = h !== "Off", e.setValue(a, {
                    value: h
                  })), this.container.className = "buttonWidgetAnnotation checkBox";
                  const l = document.createElement("input");
                  return l.disabled = i.readOnly, l.type = "checkbox", l.name = this.data.fieldName, h && l.setAttribute("checked", !0), l.setAttribute("id", a), l.addEventListener("change", function(A) {
                    const k = A.target.name;
                    for (const U of document.getElementsByName(k))
                      U !== A.target && (U.checked = !1, e.setValue(U.parentNode.getAttribute("data-annotation-id"), {
                        value: !1
                      }));
                    e.setValue(a, {
                      value: A.target.checked
                    });
                  }), this.enableScripting && this.hasJSActions && (l.addEventListener("updatefromsandbox", (A) => {
                    const k = {
                      value(U) {
                        U.target.checked = U.detail.value !== "Off", e.setValue(a, {
                          value: U.target.checked
                        });
                      }
                    };
                    this._dispatchEventFromSandbox(k, A);
                  }), this._setEventListeners(l, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (A) => A.target.checked)), this.container.appendChild(l), this.container;
                }
              }
              class W extends P {
                constructor(e) {
                  super(e, {
                    isRenderable: e.renderInteractiveForms
                  });
                }
                render() {
                  this.container.className = "buttonWidgetAnnotation radioButton";
                  const e = this.annotationStorage, i = this.data, a = i.id;
                  let h = e.getValue(a, {
                    value: i.fieldValue === i.buttonValue
                  }).value;
                  typeof h == "string" && (h = h !== i.buttonValue, e.setValue(a, {
                    value: h
                  }));
                  const l = document.createElement("input");
                  if (l.disabled = i.readOnly, l.type = "radio", l.name = i.fieldName, h && l.setAttribute("checked", !0), l.setAttribute("id", a), l.addEventListener("change", function(A) {
                    const {
                      target: k
                    } = A;
                    for (const U of document.getElementsByName(k.name))
                      U !== k && e.setValue(U.getAttribute("id"), {
                        value: !1
                      });
                    e.setValue(a, {
                      value: k.checked
                    });
                  }), this.enableScripting && this.hasJSActions) {
                    const A = i.buttonValue;
                    l.addEventListener("updatefromsandbox", (k) => {
                      const U = {
                        value(G) {
                          const B = A === G.detail.value;
                          for (const Y of document.getElementsByName(G.target.name)) {
                            const J = Y.getAttribute("id");
                            Y.checked = J === a && B, e.setValue(J, {
                              value: Y.checked
                            });
                          }
                        }
                      };
                      this._dispatchEventFromSandbox(U, k);
                    }), this._setEventListeners(l, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (k) => k.target.checked);
                  }
                  return this.container.appendChild(l), this.container;
                }
              }
              class c extends d {
                render() {
                  const e = super.render();
                  return e.className = "buttonWidgetAnnotation pushButton", this.data.alternativeText && (e.title = this.data.alternativeText), e;
                }
              }
              class y extends P {
                constructor(e) {
                  super(e, {
                    isRenderable: e.renderInteractiveForms
                  });
                }
                render() {
                  this.container.className = "choiceWidgetAnnotation";
                  const e = this.annotationStorage, i = this.data.id;
                  e.getValue(i, {
                    value: this.data.fieldValue.length > 0 ? this.data.fieldValue[0] : void 0
                  });
                  const a = document.createElement("select");
                  a.disabled = this.data.readOnly, a.name = this.data.fieldName, a.setAttribute("id", i), this.data.combo || (a.size = this.data.options.length, this.data.multiSelect && (a.multiple = !0));
                  for (const A of this.data.options) {
                    const k = document.createElement("option");
                    k.textContent = A.displayValue, k.value = A.exportValue, this.data.fieldValue.includes(A.exportValue) && k.setAttribute("selected", !0), a.appendChild(k);
                  }
                  const h = (A, k) => {
                    const U = k ? "value" : "textContent", G = A.target.options;
                    return A.target.multiple ? Array.prototype.filter.call(G, (B) => B.selected).map((B) => B[U]) : G.selectedIndex === -1 ? null : G[G.selectedIndex][U];
                  }, l = (A) => {
                    const k = A.target.options;
                    return Array.prototype.map.call(k, (U) => ({
                      displayValue: U.textContent,
                      exportValue: U.value
                    }));
                  };
                  return this.enableScripting && this.hasJSActions ? (a.addEventListener("updatefromsandbox", (A) => {
                    const k = {
                      value(U) {
                        const G = a.options, B = U.detail.value, Y = new Set(Array.isArray(B) ? B : [B]);
                        Array.prototype.forEach.call(G, (J) => {
                          J.selected = Y.has(J.value);
                        }), e.setValue(i, {
                          value: h(U, !0)
                        });
                      },
                      multipleSelection(U) {
                        a.multiple = !0;
                      },
                      remove(U) {
                        const G = a.options, B = U.detail.remove;
                        G[B].selected = !1, a.remove(B), G.length > 0 && Array.prototype.findIndex.call(G, (J) => J.selected) === -1 && (G[0].selected = !0), e.setValue(i, {
                          value: h(U, !0),
                          items: l(U)
                        });
                      },
                      clear(U) {
                        for (; a.length !== 0; )
                          a.remove(0);
                        e.setValue(i, {
                          value: null,
                          items: []
                        });
                      },
                      insert(U) {
                        const {
                          index: G,
                          displayValue: B,
                          exportValue: Y
                        } = U.detail.insert, J = document.createElement("option");
                        J.textContent = B, J.value = Y, a.insertBefore(J, a.children[G]), e.setValue(i, {
                          value: h(U, !0),
                          items: l(U)
                        });
                      },
                      items(U) {
                        const {
                          items: G
                        } = U.detail;
                        for (; a.length !== 0; )
                          a.remove(0);
                        for (const B of G) {
                          const {
                            displayValue: Y,
                            exportValue: J
                          } = B, Q = document.createElement("option");
                          Q.textContent = Y, Q.value = J, a.appendChild(Q);
                        }
                        a.options.length > 0 && (a.options[0].selected = !0), e.setValue(i, {
                          value: h(U, !0),
                          items: l(U)
                        });
                      },
                      indices(U) {
                        const G = new Set(U.detail.indices), B = U.target.options;
                        Array.prototype.forEach.call(B, (Y, J) => {
                          Y.selected = G.has(J);
                        }), e.setValue(i, {
                          value: h(U, !0)
                        });
                      },
                      editable(U) {
                        U.target.disabled = !U.detail.editable;
                      }
                    };
                    this._dispatchEventFromSandbox(k, A);
                  }), a.addEventListener("input", (A) => {
                    var G;
                    const k = h(A, !0), U = h(A, !1);
                    e.setValue(i, {
                      value: k
                    }), (G = this.linkService.eventBus) == null || G.dispatch("dispatcheventinsandbox", {
                      source: this,
                      detail: {
                        id: i,
                        name: "Keystroke",
                        value: U,
                        changeEx: k,
                        willCommit: !0,
                        commitKey: 1,
                        keyDown: !1
                      }
                    });
                  }), this._setEventListeners(a, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"]], (A) => A.target.checked)) : a.addEventListener("input", function(A) {
                    e.setValue(i, {
                      value: h(A)
                    });
                  }), this.container.appendChild(a), this.container;
                }
              }
              class I extends m {
                constructor(e) {
                  const i = !!(e.data.title || e.data.contents);
                  super(e, {
                    isRenderable: i
                  });
                }
                render() {
                  const e = ["Line", "Square", "Circle", "PolyLine", "Polygon", "Ink"];
                  if (this.container.className = "popupAnnotation", e.includes(this.data.parentType))
                    return this.container;
                  const i = `[data-annotation-id="${this.data.parentId}"]`, a = this.layer.querySelectorAll(i);
                  if (a.length === 0)
                    return this.container;
                  const h = new T({
                    container: this.container,
                    trigger: Array.from(a),
                    color: this.data.color,
                    title: this.data.title,
                    modificationDate: this.data.modificationDate,
                    contents: this.data.contents
                  }), l = this.page, A = g.Util.normalizeRect([this.data.parentRect[0], l.view[3] - this.data.parentRect[1] + l.view[1], this.data.parentRect[2], l.view[3] - this.data.parentRect[3] + l.view[1]]), k = A[0] + this.data.parentRect[2] - this.data.parentRect[0], U = A[1];
                  return this.container.style.transformOrigin = `${-k}px ${-U}px`, this.container.style.left = `${k}px`, this.container.style.top = `${U}px`, this.container.appendChild(h.render()), this.container;
                }
              }
              class T {
                constructor(e) {
                  this.container = e.container, this.trigger = e.trigger, this.color = e.color, this.title = e.title, this.modificationDate = e.modificationDate, this.contents = e.contents, this.hideWrapper = e.hideWrapper || !1, this.pinned = !1;
                }
                render() {
                  const i = document.createElement("div");
                  i.className = "popupWrapper", this.hideElement = this.hideWrapper ? i : this.container, this.hideElement.hidden = !0;
                  const a = document.createElement("div");
                  a.className = "popup";
                  const h = this.color;
                  if (h) {
                    const U = 0.7 * (255 - h[0]) + h[0], G = 0.7 * (255 - h[1]) + h[1], B = 0.7 * (255 - h[2]) + h[2];
                    a.style.backgroundColor = g.Util.makeHexColor(U | 0, G | 0, B | 0);
                  }
                  const l = document.createElement("h1");
                  l.textContent = this.title, a.appendChild(l);
                  const A = t.PDFDateString.toDateObject(this.modificationDate);
                  if (A) {
                    const U = document.createElement("span");
                    U.textContent = "{{date}}, {{time}}", U.dataset.l10nId = "annotation_date_string", U.dataset.l10nArgs = JSON.stringify({
                      date: A.toLocaleDateString(),
                      time: A.toLocaleTimeString()
                    }), a.appendChild(U);
                  }
                  const k = this._formatContents(this.contents);
                  a.appendChild(k), Array.isArray(this.trigger) || (this.trigger = [this.trigger]);
                  for (const U of this.trigger)
                    U.addEventListener("click", this._toggle.bind(this)), U.addEventListener("mouseover", this._show.bind(this, !1)), U.addEventListener("mouseout", this._hide.bind(this, !1));
                  return a.addEventListener("click", this._hide.bind(this, !0)), i.appendChild(a), i;
                }
                _formatContents(e) {
                  const i = document.createElement("p"), a = e.split(/(?:\r\n?|\n)/);
                  for (let h = 0, l = a.length; h < l; ++h) {
                    const A = a[h];
                    i.appendChild(document.createTextNode(A)), h < l - 1 && i.appendChild(document.createElement("br"));
                  }
                  return i;
                }
                _toggle() {
                  this.pinned ? this._hide(!0) : this._show(!0);
                }
                _show(e = !1) {
                  e && (this.pinned = !0), this.hideElement.hidden && (this.hideElement.hidden = !1, this.container.style.zIndex += 1);
                }
                _hide(e = !0) {
                  e && (this.pinned = !1), !this.hideElement.hidden && !this.pinned && (this.hideElement.hidden = !0, this.container.style.zIndex -= 1);
                }
              }
              class b extends m {
                constructor(e) {
                  const i = !!(e.data.hasPopup || e.data.title || e.data.contents);
                  super(e, {
                    isRenderable: i,
                    ignoreBorder: !0
                  });
                }
                render() {
                  return this.container.className = "freeTextAnnotation", this.data.hasPopup || this._createPopup(null, this.data), this.container;
                }
              }
              class r extends m {
                constructor(e) {
                  const i = !!(e.data.hasPopup || e.data.title || e.data.contents);
                  super(e, {
                    isRenderable: i,
                    ignoreBorder: !0
                  });
                }
                render() {
                  this.container.className = "lineAnnotation";
                  const e = this.data, i = e.rect[2] - e.rect[0], a = e.rect[3] - e.rect[1], h = this.svgFactory.create(i, a), l = this.svgFactory.createElement("svg:line");
                  return l.setAttribute("x1", e.rect[2] - e.lineCoordinates[0]), l.setAttribute("y1", e.rect[3] - e.lineCoordinates[1]), l.setAttribute("x2", e.rect[2] - e.lineCoordinates[2]), l.setAttribute("y2", e.rect[3] - e.lineCoordinates[3]), l.setAttribute("stroke-width", e.borderStyle.width || 1), l.setAttribute("stroke", "transparent"), h.appendChild(l), this.container.append(h), this._createPopup(l, e), this.container;
                }
              }
              class s extends m {
                constructor(e) {
                  const i = !!(e.data.hasPopup || e.data.title || e.data.contents);
                  super(e, {
                    isRenderable: i,
                    ignoreBorder: !0
                  });
                }
                render() {
                  this.container.className = "squareAnnotation";
                  const e = this.data, i = e.rect[2] - e.rect[0], a = e.rect[3] - e.rect[1], h = this.svgFactory.create(i, a), l = e.borderStyle.width, A = this.svgFactory.createElement("svg:rect");
                  return A.setAttribute("x", l / 2), A.setAttribute("y", l / 2), A.setAttribute("width", i - l), A.setAttribute("height", a - l), A.setAttribute("stroke-width", l || 1), A.setAttribute("stroke", "transparent"), A.setAttribute("fill", "none"), h.appendChild(A), this.container.append(h), this._createPopup(A, e), this.container;
                }
              }
              class u extends m {
                constructor(e) {
                  const i = !!(e.data.hasPopup || e.data.title || e.data.contents);
                  super(e, {
                    isRenderable: i,
                    ignoreBorder: !0
                  });
                }
                render() {
                  this.container.className = "circleAnnotation";
                  const e = this.data, i = e.rect[2] - e.rect[0], a = e.rect[3] - e.rect[1], h = this.svgFactory.create(i, a), l = e.borderStyle.width, A = this.svgFactory.createElement("svg:ellipse");
                  return A.setAttribute("cx", i / 2), A.setAttribute("cy", a / 2), A.setAttribute("rx", i / 2 - l / 2), A.setAttribute("ry", a / 2 - l / 2), A.setAttribute("stroke-width", l || 1), A.setAttribute("stroke", "transparent"), A.setAttribute("fill", "none"), h.appendChild(A), this.container.append(h), this._createPopup(A, e), this.container;
                }
              }
              class S extends m {
                constructor(e) {
                  const i = !!(e.data.hasPopup || e.data.title || e.data.contents);
                  super(e, {
                    isRenderable: i,
                    ignoreBorder: !0
                  }), this.containerClassName = "polylineAnnotation", this.svgElementName = "svg:polyline";
                }
                render() {
                  this.container.className = this.containerClassName;
                  const e = this.data, i = e.rect[2] - e.rect[0], a = e.rect[3] - e.rect[1], h = this.svgFactory.create(i, a);
                  let l = [];
                  for (const k of e.vertices) {
                    const U = k.x - e.rect[0], G = e.rect[3] - k.y;
                    l.push(U + "," + G);
                  }
                  l = l.join(" ");
                  const A = this.svgFactory.createElement(this.svgElementName);
                  return A.setAttribute("points", l), A.setAttribute("stroke-width", e.borderStyle.width || 1), A.setAttribute("stroke", "transparent"), A.setAttribute("fill", "none"), h.appendChild(A), this.container.append(h), this._createPopup(A, e), this.container;
                }
              }
              class p extends S {
                constructor(e) {
                  super(e), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
                }
              }
              class M extends m {
                constructor(e) {
                  const i = !!(e.data.hasPopup || e.data.title || e.data.contents);
                  super(e, {
                    isRenderable: i,
                    ignoreBorder: !0
                  });
                }
                render() {
                  return this.container.className = "caretAnnotation", this.data.hasPopup || this._createPopup(null, this.data), this.container;
                }
              }
              class R extends m {
                constructor(e) {
                  const i = !!(e.data.hasPopup || e.data.title || e.data.contents);
                  super(e, {
                    isRenderable: i,
                    ignoreBorder: !0
                  }), this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline";
                }
                render() {
                  this.container.className = this.containerClassName;
                  const e = this.data, i = e.rect[2] - e.rect[0], a = e.rect[3] - e.rect[1], h = this.svgFactory.create(i, a);
                  for (const l of e.inkLists) {
                    let A = [];
                    for (const U of l) {
                      const G = U.x - e.rect[0], B = e.rect[3] - U.y;
                      A.push(`${G},${B}`);
                    }
                    A = A.join(" ");
                    const k = this.svgFactory.createElement(this.svgElementName);
                    k.setAttribute("points", A), k.setAttribute("stroke-width", e.borderStyle.width || 1), k.setAttribute("stroke", "transparent"), k.setAttribute("fill", "none"), this._createPopup(k, e), h.appendChild(k);
                  }
                  return this.container.append(h), this.container;
                }
              }
              class V extends m {
                constructor(e) {
                  const i = !!(e.data.hasPopup || e.data.title || e.data.contents);
                  super(e, {
                    isRenderable: i,
                    ignoreBorder: !0,
                    createQuadrilaterals: !0
                  });
                }
                render() {
                  return this.data.hasPopup || this._createPopup(null, this.data), this.quadrilaterals ? this._renderQuadrilaterals("highlightAnnotation") : (this.container.className = "highlightAnnotation", this.container);
                }
              }
              class D extends m {
                constructor(e) {
                  const i = !!(e.data.hasPopup || e.data.title || e.data.contents);
                  super(e, {
                    isRenderable: i,
                    ignoreBorder: !0,
                    createQuadrilaterals: !0
                  });
                }
                render() {
                  return this.data.hasPopup || this._createPopup(null, this.data), this.quadrilaterals ? this._renderQuadrilaterals("underlineAnnotation") : (this.container.className = "underlineAnnotation", this.container);
                }
              }
              class C extends m {
                constructor(e) {
                  const i = !!(e.data.hasPopup || e.data.title || e.data.contents);
                  super(e, {
                    isRenderable: i,
                    ignoreBorder: !0,
                    createQuadrilaterals: !0
                  });
                }
                render() {
                  return this.data.hasPopup || this._createPopup(null, this.data), this.quadrilaterals ? this._renderQuadrilaterals("squigglyAnnotation") : (this.container.className = "squigglyAnnotation", this.container);
                }
              }
              class L extends m {
                constructor(e) {
                  const i = !!(e.data.hasPopup || e.data.title || e.data.contents);
                  super(e, {
                    isRenderable: i,
                    ignoreBorder: !0,
                    createQuadrilaterals: !0
                  });
                }
                render() {
                  return this.data.hasPopup || this._createPopup(null, this.data), this.quadrilaterals ? this._renderQuadrilaterals("strikeoutAnnotation") : (this.container.className = "strikeoutAnnotation", this.container);
                }
              }
              class j extends m {
                constructor(e) {
                  const i = !!(e.data.hasPopup || e.data.title || e.data.contents);
                  super(e, {
                    isRenderable: i,
                    ignoreBorder: !0
                  });
                }
                render() {
                  return this.container.className = "stampAnnotation", this.data.hasPopup || this._createPopup(null, this.data), this.container;
                }
              }
              class $ extends m {
                constructor(e) {
                  var h;
                  super(e, {
                    isRenderable: !0
                  });
                  const {
                    filename: i,
                    content: a
                  } = this.data.file;
                  this.filename = (0, t.getFilenameFromUrl)(i), this.content = a, (h = this.linkService.eventBus) == null || h.dispatch("fileattachmentannotation", {
                    source: this,
                    id: (0, g.stringToPDFString)(i),
                    filename: i,
                    content: a
                  });
                }
                render() {
                  this.container.className = "fileAttachmentAnnotation";
                  const e = document.createElement("div");
                  return e.style.height = this.container.style.height, e.style.width = this.container.style.width, e.addEventListener("dblclick", this._download.bind(this)), !this.data.hasPopup && (this.data.title || this.data.contents) && this._createPopup(e, this.data), this.container.appendChild(e), this.container;
                }
                _download() {
                  var e;
                  (e = this.downloadManager) == null || e.openOrDownloadData(this.container, this.content, this.filename);
                }
              }
              class O {
                static render(e) {
                  const i = [], a = [];
                  for (const h of e.annotations)
                    if (h) {
                      if (h.annotationType === g.AnnotationType.POPUP) {
                        a.push(h);
                        continue;
                      }
                      i.push(h);
                    }
                  a.length && i.push(...a);
                  for (const h of i) {
                    const l = w.create({
                      data: h,
                      layer: e.div,
                      page: e.page,
                      viewport: e.viewport,
                      linkService: e.linkService,
                      downloadManager: e.downloadManager,
                      imageResourcesPath: e.imageResourcesPath || "",
                      renderInteractiveForms: e.renderInteractiveForms !== !1,
                      svgFactory: new t.DOMSVGFactory(),
                      annotationStorage: e.annotationStorage || new x.AnnotationStorage(),
                      enableScripting: e.enableScripting,
                      hasJSActions: e.hasJSActions,
                      mouseState: e.mouseState || {
                        isDown: !1
                      }
                    });
                    if (l.isRenderable) {
                      const A = l.render();
                      if (h.hidden && (A.style.visibility = "hidden"), Array.isArray(A))
                        for (const k of A)
                          e.div.appendChild(k);
                      else
                        l instanceof I ? e.div.prepend(A) : e.div.appendChild(A);
                    }
                  }
                }
                static update(e) {
                  const i = `matrix(${e.viewport.transform.join(",")})`;
                  for (const a of e.annotations) {
                    const h = e.div.querySelectorAll(`[data-annotation-id="${a.id}"]`);
                    if (h)
                      for (const l of h)
                        l.style.transform = i;
                  }
                  e.div.hidden = !1;
                }
              }
              n.AnnotationLayer = O;
            },
            /* 18 */
            /***/
            (X, n) => {
              Object.defineProperty(n, "__esModule", {
                value: !0
              }), n.ColorConverters = void 0;
              function _(g) {
                return Math.floor(Math.max(0, Math.min(1, g)) * 255).toString(16).padStart(2, "0");
              }
              class t {
                static CMYK_G([x, F, w, m]) {
                  return ["G", 1 - Math.min(1, 0.3 * x + 0.59 * w + 0.11 * F + m)];
                }
                static G_CMYK([x]) {
                  return ["CMYK", 0, 0, 0, 1 - x];
                }
                static G_RGB([x]) {
                  return ["RGB", x, x, x];
                }
                static G_HTML([x]) {
                  const F = _(x);
                  return `#${F}${F}${F}`;
                }
                static RGB_G([x, F, w]) {
                  return ["G", 0.3 * x + 0.59 * F + 0.11 * w];
                }
                static RGB_HTML([x, F, w]) {
                  const m = _(x), d = _(F), f = _(w);
                  return `#${m}${d}${f}`;
                }
                static T_HTML() {
                  return "#00000000";
                }
                static CMYK_RGB([x, F, w, m]) {
                  return ["RGB", 1 - Math.min(1, x + m), 1 - Math.min(1, w + m), 1 - Math.min(1, F + m)];
                }
                static CMYK_HTML(x) {
                  return this.RGB_HTML(this.CMYK_RGB(x));
                }
                static RGB_CMYK([x, F, w]) {
                  const m = 1 - x, d = 1 - F, f = 1 - w, P = Math.min(m, d, f);
                  return ["CMYK", m, d, f, P];
                }
              }
              n.ColorConverters = t;
            },
            /* 19 */
            /***/
            (X, n, _) => {
              Object.defineProperty(n, "__esModule", {
                value: !0
              }), n.renderTextLayer = I;
              var t = _(2);
              const g = 1e5, x = 30, F = 0.8, w = /* @__PURE__ */ new Map(), m = /^\s+$/g;
              function d(T, b) {
                const r = w.get(T);
                if (r)
                  return r;
                b.save(), b.font = `${x}px ${T}`;
                const s = b.measureText("");
                let u = s.fontBoundingBoxAscent, S = Math.abs(s.fontBoundingBoxDescent);
                if (u) {
                  b.restore();
                  const M = u / (u + S);
                  return w.set(T, M), M;
                }
                b.strokeStyle = "red", b.clearRect(0, 0, x, x), b.strokeText("g", 0, 0);
                let p = b.getImageData(0, 0, x, x).data;
                S = 0;
                for (let M = p.length - 1 - 3; M >= 0; M -= 4)
                  if (p[M] > 0) {
                    S = Math.ceil(M / 4 / x);
                    break;
                  }
                b.clearRect(0, 0, x, x), b.strokeText("A", 0, x), p = b.getImageData(0, 0, x, x).data, u = 0;
                for (let M = 0, R = p.length; M < R; M += 4)
                  if (p[M] > 0) {
                    u = x - Math.floor(M / 4 / x);
                    break;
                  }
                if (b.restore(), u) {
                  const M = u / (u + S);
                  return w.set(T, M), M;
                }
                return w.set(T, F), F;
              }
              function f(T, b, r, s) {
                const u = document.createElement("span"), S = {
                  angle: 0,
                  canvasWidth: 0,
                  hasText: b.str !== "",
                  hasEOL: b.hasEOL,
                  originalTransform: null,
                  paddingBottom: 0,
                  paddingLeft: 0,
                  paddingRight: 0,
                  paddingTop: 0,
                  scale: 1
                };
                T._textDivs.push(u);
                const p = t.Util.transform(T._viewport.transform, b.transform);
                let M = Math.atan2(p[1], p[0]);
                const R = r[b.fontName];
                R.vertical && (M += Math.PI / 2);
                const V = Math.hypot(p[2], p[3]), D = V * d(R.fontFamily, s);
                let C, L;
                M === 0 ? (C = p[4], L = p[5] - D) : (C = p[4] + D * Math.sin(M), L = p[5] - D * Math.cos(M)), u.style.left = `${C}px`, u.style.top = `${L}px`, u.style.fontSize = `${V}px`, u.style.fontFamily = R.fontFamily, u.setAttribute("role", "presentation"), u.textContent = b.str, u.dir = b.dir, T._fontInspectorEnabled && (u.dataset.fontName = b.fontName), M !== 0 && (S.angle = M * (180 / Math.PI));
                let j = !1;
                if (b.str.length > 1 || T._enhanceTextSelection && m.test(b.str))
                  j = !0;
                else if (b.transform[0] !== b.transform[3]) {
                  const $ = Math.abs(b.transform[0]), O = Math.abs(b.transform[3]);
                  $ !== O && Math.max($, O) / Math.min($, O) > 1.5 && (j = !0);
                }
                if (j && (R.vertical ? S.canvasWidth = b.height * T._viewport.scale : S.canvasWidth = b.width * T._viewport.scale), T._textDivProperties.set(u, S), T._textContentStream && T._layoutText(u), T._enhanceTextSelection && S.hasText) {
                  let $ = 1, O = 0;
                  M !== 0 && ($ = Math.cos(M), O = Math.sin(M));
                  const o = (R.vertical ? b.height : b.width) * T._viewport.scale, e = V;
                  let i, a;
                  M !== 0 ? (i = [$, O, -O, $, C, L], a = t.Util.getAxialAlignedBoundingBox([0, 0, o, e], i)) : a = [C, L, C + o, L + e], T._bounds.push({
                    left: a[0],
                    top: a[1],
                    right: a[2],
                    bottom: a[3],
                    div: u,
                    size: [o, e],
                    m: i
                  });
                }
              }
              function P(T) {
                if (T._canceled)
                  return;
                const b = T._textDivs, r = T._capability, s = b.length;
                if (s > g) {
                  T._renderingDone = !0, r.resolve();
                  return;
                }
                if (!T._textContentStream)
                  for (let u = 0; u < s; u++)
                    T._layoutText(b[u]);
                T._renderingDone = !0, r.resolve();
              }
              function N(T, b, r) {
                let s = 0;
                for (let u = 0; u < r; u++) {
                  const S = T[b++];
                  S > 0 && (s = s ? Math.min(S, s) : S);
                }
                return s;
              }
              function v(T) {
                const b = T._bounds, r = T._viewport, s = W(r.width, r.height, b);
                for (let u = 0; u < s.length; u++) {
                  const S = b[u].div, p = T._textDivProperties.get(S);
                  if (p.angle === 0) {
                    p.paddingLeft = b[u].left - s[u].left, p.paddingTop = b[u].top - s[u].top, p.paddingRight = s[u].right - b[u].right, p.paddingBottom = s[u].bottom - b[u].bottom, T._textDivProperties.set(S, p);
                    continue;
                  }
                  const M = s[u], R = b[u], V = R.m, D = V[0], C = V[1], L = [[0, 0], [0, R.size[1]], [R.size[0], 0], R.size], j = new Float64Array(64);
                  for (let O = 0, o = L.length; O < o; O++) {
                    const e = t.Util.applyTransform(L[O], V);
                    j[O + 0] = D && (M.left - e[0]) / D, j[O + 4] = C && (M.top - e[1]) / C, j[O + 8] = D && (M.right - e[0]) / D, j[O + 12] = C && (M.bottom - e[1]) / C, j[O + 16] = C && (M.left - e[0]) / -C, j[O + 20] = D && (M.top - e[1]) / D, j[O + 24] = C && (M.right - e[0]) / -C, j[O + 28] = D && (M.bottom - e[1]) / D, j[O + 32] = D && (M.left - e[0]) / -D, j[O + 36] = C && (M.top - e[1]) / -C, j[O + 40] = D && (M.right - e[0]) / -D, j[O + 44] = C && (M.bottom - e[1]) / -C, j[O + 48] = C && (M.left - e[0]) / C, j[O + 52] = D && (M.top - e[1]) / -D, j[O + 56] = C && (M.right - e[0]) / C, j[O + 60] = D && (M.bottom - e[1]) / -D;
                  }
                  const $ = 1 + Math.min(Math.abs(D), Math.abs(C));
                  p.paddingLeft = N(j, 32, 16) / $, p.paddingTop = N(j, 48, 16) / $, p.paddingRight = N(j, 0, 16) / $, p.paddingBottom = N(j, 16, 16) / $, T._textDivProperties.set(S, p);
                }
              }
              function W(T, b, r) {
                const s = r.map(function(S, p) {
                  return {
                    x1: S.left,
                    y1: S.top,
                    x2: S.right,
                    y2: S.bottom,
                    index: p,
                    x1New: void 0,
                    x2New: void 0
                  };
                });
                c(T, s);
                const u = new Array(r.length);
                for (const S of s) {
                  const p = S.index;
                  u[p] = {
                    left: S.x1New,
                    top: 0,
                    right: S.x2New,
                    bottom: 0
                  };
                }
                r.map(function(S, p) {
                  const M = u[p], R = s[p];
                  R.x1 = S.top, R.y1 = T - M.right, R.x2 = S.bottom, R.y2 = T - M.left, R.index = p, R.x1New = void 0, R.x2New = void 0;
                }), c(b, s);
                for (const S of s) {
                  const p = S.index;
                  u[p].top = S.x1New, u[p].bottom = S.x2New;
                }
                return u;
              }
              function c(T, b) {
                b.sort(function(u, S) {
                  return u.x1 - S.x1 || u.index - S.index;
                });
                const s = [{
                  start: -1 / 0,
                  end: 1 / 0,
                  boundary: {
                    x1: -1 / 0,
                    y1: -1 / 0,
                    x2: 0,
                    y2: 1 / 0,
                    index: -1,
                    x1New: 0,
                    x2New: 0
                  }
                }];
                for (const u of b) {
                  let S = 0;
                  for (; S < s.length && s[S].end <= u.y1; )
                    S++;
                  let p = s.length - 1;
                  for (; p >= 0 && s[p].start >= u.y2; )
                    p--;
                  let M, R, V, D, C = -1 / 0;
                  for (V = S; V <= p; V++) {
                    M = s[V], R = M.boundary;
                    let $;
                    R.x2 > u.x1 ? $ = R.index > u.index ? R.x1New : u.x1 : R.x2New === void 0 ? $ = (R.x2 + u.x1) / 2 : $ = R.x2New, $ > C && (C = $);
                  }
                  for (u.x1New = C, V = S; V <= p; V++)
                    M = s[V], R = M.boundary, R.x2New === void 0 ? R.x2 > u.x1 ? R.index > u.index && (R.x2New = R.x2) : R.x2New = C : R.x2New > C && (R.x2New = Math.max(C, R.x2));
                  const L = [];
                  let j = null;
                  for (V = S; V <= p; V++) {
                    M = s[V], R = M.boundary;
                    const $ = R.x2 > u.x2 ? R : u;
                    j === $ ? L[L.length - 1].end = M.end : (L.push({
                      start: M.start,
                      end: M.end,
                      boundary: $
                    }), j = $);
                  }
                  for (s[S].start < u.y1 && (L[0].start = u.y1, L.unshift({
                    start: s[S].start,
                    end: u.y1,
                    boundary: s[S].boundary
                  })), u.y2 < s[p].end && (L[L.length - 1].end = u.y2, L.push({
                    start: u.y2,
                    end: s[p].end,
                    boundary: s[p].boundary
                  })), V = S; V <= p; V++) {
                    if (M = s[V], R = M.boundary, R.x2New !== void 0)
                      continue;
                    let $ = !1;
                    for (D = S - 1; !$ && D >= 0 && s[D].start >= R.y1; D--)
                      $ = s[D].boundary === R;
                    for (D = p + 1; !$ && D < s.length && s[D].end <= R.y2; D++)
                      $ = s[D].boundary === R;
                    for (D = 0; !$ && D < L.length; D++)
                      $ = L[D].boundary === R;
                    $ || (R.x2New = C);
                  }
                  Array.prototype.splice.apply(s, [S, p - S + 1].concat(L));
                }
                for (const u of s) {
                  const S = u.boundary;
                  S.x2New === void 0 && (S.x2New = Math.max(T, S.x2));
                }
              }
              class y {
                constructor({
                  textContent: b,
                  textContentStream: r,
                  container: s,
                  viewport: u,
                  textDivs: S,
                  textContentItemsStr: p,
                  enhanceTextSelection: M
                }) {
                  var R;
                  this._textContent = b, this._textContentStream = r, this._container = s, this._document = s.ownerDocument, this._viewport = u, this._textDivs = S || [], this._textContentItemsStr = p || [], this._enhanceTextSelection = !!M, this._fontInspectorEnabled = !!((R = globalThis.FontInspector) != null && R.enabled), this._reader = null, this._layoutTextLastFontSize = null, this._layoutTextLastFontFamily = null, this._layoutTextCtx = null, this._textDivProperties = /* @__PURE__ */ new WeakMap(), this._renderingDone = !1, this._canceled = !1, this._capability = (0, t.createPromiseCapability)(), this._renderTimer = null, this._bounds = [], this._capability.promise.finally(() => {
                    this._layoutTextCtx && (this._layoutTextCtx.canvas.width = 0, this._layoutTextCtx.canvas.height = 0, this._layoutTextCtx = null);
                  }).catch(() => {
                  });
                }
                get promise() {
                  return this._capability.promise;
                }
                cancel() {
                  this._canceled = !0, this._reader && (this._reader.cancel(new t.AbortException("TextLayer task cancelled.")), this._reader = null), this._renderTimer !== null && (clearTimeout(this._renderTimer), this._renderTimer = null), this._capability.reject(new Error("TextLayer task cancelled."));
                }
                _processItems(b, r) {
                  for (let s = 0, u = b.length; s < u; s++) {
                    if (b[s].str === void 0) {
                      if (b[s].type === "beginMarkedContentProps" || b[s].type === "beginMarkedContent") {
                        const S = this._container;
                        this._container = document.createElement("span"), this._container.classList.add("markedContent"), b[s].id !== null && this._container.setAttribute("id", `${b[s].id}`), S.appendChild(this._container);
                      } else b[s].type === "endMarkedContent" && (this._container = this._container.parentNode);
                      continue;
                    }
                    this._textContentItemsStr.push(b[s].str), f(this, b[s], r, this._layoutTextCtx);
                  }
                }
                _layoutText(b) {
                  const r = this._textDivProperties.get(b);
                  let s = "";
                  if (r.canvasWidth !== 0 && r.hasText) {
                    const {
                      fontSize: u,
                      fontFamily: S
                    } = b.style;
                    (u !== this._layoutTextLastFontSize || S !== this._layoutTextLastFontFamily) && (this._layoutTextCtx.font = `${u} ${S}`, this._layoutTextLastFontSize = u, this._layoutTextLastFontFamily = S);
                    const {
                      width: p
                    } = this._layoutTextCtx.measureText(b.textContent);
                    p > 0 && (r.scale = r.canvasWidth / p, s = `scaleX(${r.scale})`);
                  }
                  if (r.angle !== 0 && (s = `rotate(${r.angle}deg) ${s}`), s.length > 0 && (this._enhanceTextSelection && (r.originalTransform = s), b.style.transform = s), r.hasText && this._container.appendChild(b), r.hasEOL) {
                    const u = document.createElement("br");
                    u.setAttribute("role", "presentation"), this._container.appendChild(u);
                  }
                }
                _render(b = 0) {
                  const r = (0, t.createPromiseCapability)();
                  let s = /* @__PURE__ */ Object.create(null);
                  const u = this._document.createElement("canvas");
                  if (u.height = u.width = x, u.mozOpaque = !0, this._layoutTextCtx = u.getContext("2d", {
                    alpha: !1
                  }), this._textContent) {
                    const S = this._textContent.items, p = this._textContent.styles;
                    this._processItems(S, p), r.resolve();
                  } else if (this._textContentStream) {
                    const S = () => {
                      this._reader.read().then(({
                        value: p,
                        done: M
                      }) => {
                        if (M) {
                          r.resolve();
                          return;
                        }
                        Object.assign(s, p.styles), this._processItems(p.items, s), S();
                      }, r.reject);
                    };
                    this._reader = this._textContentStream.getReader(), S();
                  } else
                    throw new Error('Neither "textContent" nor "textContentStream" parameters specified.');
                  r.promise.then(() => {
                    s = null, b ? this._renderTimer = setTimeout(() => {
                      P(this), this._renderTimer = null;
                    }, b) : P(this);
                  }, this._capability.reject);
                }
                expandTextDivs(b = !1) {
                  if (!this._enhanceTextSelection || !this._renderingDone)
                    return;
                  this._bounds !== null && (v(this), this._bounds = null);
                  const r = [], s = [];
                  for (let u = 0, S = this._textDivs.length; u < S; u++) {
                    const p = this._textDivs[u], M = this._textDivProperties.get(p);
                    M.hasText && (b ? (r.length = 0, s.length = 0, M.originalTransform && r.push(M.originalTransform), M.paddingTop > 0 ? (s.push(`${M.paddingTop}px`), r.push(`translateY(${-M.paddingTop}px)`)) : s.push(0), M.paddingRight > 0 ? s.push(`${M.paddingRight / M.scale}px`) : s.push(0), M.paddingBottom > 0 ? s.push(`${M.paddingBottom}px`) : s.push(0), M.paddingLeft > 0 ? (s.push(`${M.paddingLeft / M.scale}px`), r.push(`translateX(${-M.paddingLeft / M.scale}px)`)) : s.push(0), p.style.padding = s.join(" "), r.length && (p.style.transform = r.join(" "))) : (p.style.padding = null, p.style.transform = M.originalTransform));
                  }
                }
              }
              function I(T) {
                const b = new y({
                  textContent: T.textContent,
                  textContentStream: T.textContentStream,
                  container: T.container,
                  viewport: T.viewport,
                  textDivs: T.textDivs,
                  textContentItemsStr: T.textContentItemsStr,
                  enhanceTextSelection: T.enhanceTextSelection
                });
                return b._render(T.timeout), b;
              }
            },
            /* 20 */
            /***/
            (X, n, _) => {
              Object.defineProperty(n, "__esModule", {
                value: !0
              }), n.SVGGraphics = void 0;
              var t = _(2), g = _(1), x = _(4);
              let F = class {
                constructor() {
                  (0, t.unreachable)("Not implemented: SVGGraphics");
                }
              };
              n.SVGGraphics = F;
              {
                let W = function(r) {
                  let s = [];
                  const u = [];
                  for (const S of r) {
                    if (S.fn === "save") {
                      s.push({
                        fnId: 92,
                        fn: "group",
                        items: []
                      }), u.push(s), s = s[s.length - 1].items;
                      continue;
                    }
                    S.fn === "restore" ? s = u.pop() : s.push(S);
                  }
                  return s;
                }, c = function(r) {
                  if (Number.isInteger(r))
                    return r.toString();
                  const s = r.toFixed(10);
                  let u = s.length - 1;
                  if (s[u] !== "0")
                    return s;
                  do
                    u--;
                  while (s[u] === "0");
                  return s.substring(0, s[u] === "." ? u : u + 1);
                }, y = function(r) {
                  if (r[4] === 0 && r[5] === 0) {
                    if (r[1] === 0 && r[2] === 0)
                      return r[0] === 1 && r[3] === 1 ? "" : `scale(${c(r[0])} ${c(r[3])})`;
                    if (r[0] === r[3] && r[1] === -r[2]) {
                      const s = Math.acos(r[0]) * 180 / Math.PI;
                      return `rotate(${c(s)})`;
                    }
                  } else if (r[0] === 1 && r[1] === 0 && r[2] === 0 && r[3] === 1)
                    return `translate(${c(r[4])} ${c(r[5])})`;
                  return `matrix(${c(r[0])} ${c(r[1])} ${c(r[2])} ${c(r[3])} ${c(r[4])} ${c(r[5])})`;
                };
                const w = {
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fillColor: "#000000"
                }, m = "http://www.w3.org/XML/1998/namespace", d = "http://www.w3.org/1999/xlink", f = ["butt", "round", "square"], P = ["miter", "round", "bevel"], N = function() {
                  const r = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]), s = 12, u = new Int32Array(256);
                  for (let C = 0; C < 256; C++) {
                    let L = C;
                    for (let j = 0; j < 8; j++)
                      L & 1 ? L = 3988292384 ^ L >> 1 & 2147483647 : L = L >> 1 & 2147483647;
                    u[C] = L;
                  }
                  function S(C, L, j) {
                    let $ = -1;
                    for (let O = L; O < j; O++) {
                      const o = ($ ^ C[O]) & 255, e = u[o];
                      $ = $ >>> 8 ^ e;
                    }
                    return $ ^ -1;
                  }
                  function p(C, L, j, $) {
                    let O = $;
                    const o = L.length;
                    j[O] = o >> 24 & 255, j[O + 1] = o >> 16 & 255, j[O + 2] = o >> 8 & 255, j[O + 3] = o & 255, O += 4, j[O] = C.charCodeAt(0) & 255, j[O + 1] = C.charCodeAt(1) & 255, j[O + 2] = C.charCodeAt(2) & 255, j[O + 3] = C.charCodeAt(3) & 255, O += 4, j.set(L, O), O += L.length;
                    const e = S(j, $ + 4, O);
                    j[O] = e >> 24 & 255, j[O + 1] = e >> 16 & 255, j[O + 2] = e >> 8 & 255, j[O + 3] = e & 255;
                  }
                  function M(C, L, j) {
                    let $ = 1, O = 0;
                    for (let o = L; o < j; ++o)
                      $ = ($ + (C[o] & 255)) % 65521, O = (O + $) % 65521;
                    return O << 16 | $;
                  }
                  function R(C) {
                    if (!x.isNodeJS)
                      return V(C);
                    try {
                      let L;
                      parseInt(process.versions.node) >= 8 ? L = C : L = Buffer.from(C);
                      const j = require$$5.deflateSync(L, {
                        level: 9
                      });
                      return j instanceof Uint8Array ? j : new Uint8Array(j);
                    } catch (L) {
                      (0, t.warn)("Not compressing PNG because zlib.deflateSync is unavailable: " + L);
                    }
                    return V(C);
                  }
                  function V(C) {
                    let L = C.length;
                    const j = 65535, $ = Math.ceil(L / j), O = new Uint8Array(2 + L + $ * 5 + 4);
                    let o = 0;
                    O[o++] = 120, O[o++] = 156;
                    let e = 0;
                    for (; L > j; )
                      O[o++] = 0, O[o++] = 255, O[o++] = 255, O[o++] = 0, O[o++] = 0, O.set(C.subarray(e, e + j), o), o += j, e += j, L -= j;
                    O[o++] = 1, O[o++] = L & 255, O[o++] = L >> 8 & 255, O[o++] = ~L & 65535 & 255, O[o++] = (~L & 65535) >> 8 & 255, O.set(C.subarray(e), o), o += C.length - e;
                    const i = M(C, 0, C.length);
                    return O[o++] = i >> 24 & 255, O[o++] = i >> 16 & 255, O[o++] = i >> 8 & 255, O[o++] = i & 255, O;
                  }
                  function D(C, L, j, $) {
                    const O = C.width, o = C.height;
                    let e, i, a;
                    const h = C.data;
                    switch (L) {
                      case t.ImageKind.GRAYSCALE_1BPP:
                        i = 0, e = 1, a = O + 7 >> 3;
                        break;
                      case t.ImageKind.RGB_24BPP:
                        i = 2, e = 8, a = O * 3;
                        break;
                      case t.ImageKind.RGBA_32BPP:
                        i = 6, e = 8, a = O * 4;
                        break;
                      default:
                        throw new Error("invalid format");
                    }
                    const l = new Uint8Array((1 + a) * o);
                    let A = 0, k = 0;
                    for (let Q = 0; Q < o; ++Q)
                      l[A++] = 0, l.set(h.subarray(k, k + a), A), k += a, A += a;
                    if (L === t.ImageKind.GRAYSCALE_1BPP && $) {
                      A = 0;
                      for (let Q = 0; Q < o; Q++) {
                        A++;
                        for (let te = 0; te < a; te++)
                          l[A++] ^= 255;
                      }
                    }
                    const U = new Uint8Array([O >> 24 & 255, O >> 16 & 255, O >> 8 & 255, O & 255, o >> 24 & 255, o >> 16 & 255, o >> 8 & 255, o & 255, e, i, 0, 0, 0]), G = R(l), B = r.length + s * 3 + U.length + G.length, Y = new Uint8Array(B);
                    let J = 0;
                    return Y.set(r, J), J += r.length, p("IHDR", U, Y, J), J += s + U.length, p("IDATA", G, Y, J), J += s + G.length, p("IEND", new Uint8Array(0), Y, J), (0, t.createObjectURL)(Y, "image/png", j);
                  }
                  return function(L, j, $) {
                    const O = L.kind === void 0 ? t.ImageKind.GRAYSCALE_1BPP : L.kind;
                    return D(L, O, j, $);
                  };
                }();
                class v {
                  constructor() {
                    this.fontSizeScale = 1, this.fontWeight = w.fontWeight, this.fontSize = 0, this.textMatrix = t.IDENTITY_MATRIX, this.fontMatrix = t.FONT_IDENTITY_MATRIX, this.leading = 0, this.textRenderingMode = t.TextRenderingMode.FILL, this.textMatrixScale = 1, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRise = 0, this.fillColor = w.fillColor, this.strokeColor = "#000000", this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.lineJoin = "", this.lineCap = "", this.miterLimit = 0, this.dashArray = [], this.dashPhase = 0, this.dependencies = [], this.activeClipUrl = null, this.clipGroup = null, this.maskId = "";
                  }
                  clone() {
                    return Object.create(this);
                  }
                  setCurrentPoint(s, u) {
                    this.x = s, this.y = u;
                  }
                }
                let I = 0, T = 0, b = 0;
                n.SVGGraphics = F = class {
                  constructor(r, s, u = !1) {
                    this.svgFactory = new g.DOMSVGFactory(), this.current = new v(), this.transformMatrix = t.IDENTITY_MATRIX, this.transformStack = [], this.extraStack = [], this.commonObjs = r, this.objs = s, this.pendingClip = null, this.pendingEOFill = !1, this.embedFonts = !1, this.embeddedFonts = /* @__PURE__ */ Object.create(null), this.cssStyle = null, this.forceDataSchema = !!u, this._operatorIdMapping = [];
                    for (const S in t.OPS)
                      this._operatorIdMapping[t.OPS[S]] = S;
                  }
                  save() {
                    this.transformStack.push(this.transformMatrix);
                    const r = this.current;
                    this.extraStack.push(r), this.current = r.clone();
                  }
                  restore() {
                    this.transformMatrix = this.transformStack.pop(), this.current = this.extraStack.pop(), this.pendingClip = null, this.tgrp = null;
                  }
                  group(r) {
                    this.save(), this.executeOpTree(r), this.restore();
                  }
                  loadDependencies(r) {
                    const s = r.fnArray, u = r.argsArray;
                    for (let S = 0, p = s.length; S < p; S++)
                      if (s[S] === t.OPS.dependency)
                        for (const M of u[S]) {
                          const R = M.startsWith("g_") ? this.commonObjs : this.objs, V = new Promise((D) => {
                            R.get(M, D);
                          });
                          this.current.dependencies.push(V);
                        }
                    return Promise.all(this.current.dependencies);
                  }
                  transform(r, s, u, S, p, M) {
                    const R = [r, s, u, S, p, M];
                    this.transformMatrix = t.Util.transform(this.transformMatrix, R), this.tgrp = null;
                  }
                  getSVG(r, s) {
                    this.viewport = s;
                    const u = this._initialize(s);
                    return this.loadDependencies(r).then(() => (this.transformMatrix = t.IDENTITY_MATRIX, this.executeOpTree(this.convertOpList(r)), u));
                  }
                  convertOpList(r) {
                    const s = this._operatorIdMapping, u = r.argsArray, S = r.fnArray, p = [];
                    for (let M = 0, R = S.length; M < R; M++) {
                      const V = S[M];
                      p.push({
                        fnId: V,
                        fn: s[V],
                        args: u[M]
                      });
                    }
                    return W(p);
                  }
                  executeOpTree(r) {
                    for (const s of r) {
                      const u = s.fn, S = s.fnId, p = s.args;
                      switch (S | 0) {
                        case t.OPS.beginText:
                          this.beginText();
                          break;
                        case t.OPS.dependency:
                          break;
                        case t.OPS.setLeading:
                          this.setLeading(p);
                          break;
                        case t.OPS.setLeadingMoveText:
                          this.setLeadingMoveText(p[0], p[1]);
                          break;
                        case t.OPS.setFont:
                          this.setFont(p);
                          break;
                        case t.OPS.showText:
                          this.showText(p[0]);
                          break;
                        case t.OPS.showSpacedText:
                          this.showText(p[0]);
                          break;
                        case t.OPS.endText:
                          this.endText();
                          break;
                        case t.OPS.moveText:
                          this.moveText(p[0], p[1]);
                          break;
                        case t.OPS.setCharSpacing:
                          this.setCharSpacing(p[0]);
                          break;
                        case t.OPS.setWordSpacing:
                          this.setWordSpacing(p[0]);
                          break;
                        case t.OPS.setHScale:
                          this.setHScale(p[0]);
                          break;
                        case t.OPS.setTextMatrix:
                          this.setTextMatrix(p[0], p[1], p[2], p[3], p[4], p[5]);
                          break;
                        case t.OPS.setTextRise:
                          this.setTextRise(p[0]);
                          break;
                        case t.OPS.setTextRenderingMode:
                          this.setTextRenderingMode(p[0]);
                          break;
                        case t.OPS.setLineWidth:
                          this.setLineWidth(p[0]);
                          break;
                        case t.OPS.setLineJoin:
                          this.setLineJoin(p[0]);
                          break;
                        case t.OPS.setLineCap:
                          this.setLineCap(p[0]);
                          break;
                        case t.OPS.setMiterLimit:
                          this.setMiterLimit(p[0]);
                          break;
                        case t.OPS.setFillRGBColor:
                          this.setFillRGBColor(p[0], p[1], p[2]);
                          break;
                        case t.OPS.setStrokeRGBColor:
                          this.setStrokeRGBColor(p[0], p[1], p[2]);
                          break;
                        case t.OPS.setStrokeColorN:
                          this.setStrokeColorN(p);
                          break;
                        case t.OPS.setFillColorN:
                          this.setFillColorN(p);
                          break;
                        case t.OPS.shadingFill:
                          this.shadingFill(p[0]);
                          break;
                        case t.OPS.setDash:
                          this.setDash(p[0], p[1]);
                          break;
                        case t.OPS.setRenderingIntent:
                          this.setRenderingIntent(p[0]);
                          break;
                        case t.OPS.setFlatness:
                          this.setFlatness(p[0]);
                          break;
                        case t.OPS.setGState:
                          this.setGState(p[0]);
                          break;
                        case t.OPS.fill:
                          this.fill();
                          break;
                        case t.OPS.eoFill:
                          this.eoFill();
                          break;
                        case t.OPS.stroke:
                          this.stroke();
                          break;
                        case t.OPS.fillStroke:
                          this.fillStroke();
                          break;
                        case t.OPS.eoFillStroke:
                          this.eoFillStroke();
                          break;
                        case t.OPS.clip:
                          this.clip("nonzero");
                          break;
                        case t.OPS.eoClip:
                          this.clip("evenodd");
                          break;
                        case t.OPS.paintSolidColorImageMask:
                          this.paintSolidColorImageMask();
                          break;
                        case t.OPS.paintImageXObject:
                          this.paintImageXObject(p[0]);
                          break;
                        case t.OPS.paintInlineImageXObject:
                          this.paintInlineImageXObject(p[0]);
                          break;
                        case t.OPS.paintImageMaskXObject:
                          this.paintImageMaskXObject(p[0]);
                          break;
                        case t.OPS.paintFormXObjectBegin:
                          this.paintFormXObjectBegin(p[0], p[1]);
                          break;
                        case t.OPS.paintFormXObjectEnd:
                          this.paintFormXObjectEnd();
                          break;
                        case t.OPS.closePath:
                          this.closePath();
                          break;
                        case t.OPS.closeStroke:
                          this.closeStroke();
                          break;
                        case t.OPS.closeFillStroke:
                          this.closeFillStroke();
                          break;
                        case t.OPS.closeEOFillStroke:
                          this.closeEOFillStroke();
                          break;
                        case t.OPS.nextLine:
                          this.nextLine();
                          break;
                        case t.OPS.transform:
                          this.transform(p[0], p[1], p[2], p[3], p[4], p[5]);
                          break;
                        case t.OPS.constructPath:
                          this.constructPath(p[0], p[1]);
                          break;
                        case t.OPS.endPath:
                          this.endPath();
                          break;
                        case 92:
                          this.group(s.items);
                          break;
                        default:
                          (0, t.warn)(`Unimplemented operator ${u}`);
                          break;
                      }
                    }
                  }
                  setWordSpacing(r) {
                    this.current.wordSpacing = r;
                  }
                  setCharSpacing(r) {
                    this.current.charSpacing = r;
                  }
                  nextLine() {
                    this.moveText(0, this.current.leading);
                  }
                  setTextMatrix(r, s, u, S, p, M) {
                    const R = this.current;
                    R.textMatrix = R.lineMatrix = [r, s, u, S, p, M], R.textMatrixScale = Math.hypot(r, s), R.x = R.lineX = 0, R.y = R.lineY = 0, R.xcoords = [], R.ycoords = [], R.tspan = this.svgFactory.createElement("svg:tspan"), R.tspan.setAttributeNS(null, "font-family", R.fontFamily), R.tspan.setAttributeNS(null, "font-size", `${c(R.fontSize)}px`), R.tspan.setAttributeNS(null, "y", c(-R.y)), R.txtElement = this.svgFactory.createElement("svg:text"), R.txtElement.appendChild(R.tspan);
                  }
                  beginText() {
                    const r = this.current;
                    r.x = r.lineX = 0, r.y = r.lineY = 0, r.textMatrix = t.IDENTITY_MATRIX, r.lineMatrix = t.IDENTITY_MATRIX, r.textMatrixScale = 1, r.tspan = this.svgFactory.createElement("svg:tspan"), r.txtElement = this.svgFactory.createElement("svg:text"), r.txtgrp = this.svgFactory.createElement("svg:g"), r.xcoords = [], r.ycoords = [];
                  }
                  moveText(r, s) {
                    const u = this.current;
                    u.x = u.lineX += r, u.y = u.lineY += s, u.xcoords = [], u.ycoords = [], u.tspan = this.svgFactory.createElement("svg:tspan"), u.tspan.setAttributeNS(null, "font-family", u.fontFamily), u.tspan.setAttributeNS(null, "font-size", `${c(u.fontSize)}px`), u.tspan.setAttributeNS(null, "y", c(-u.y));
                  }
                  showText(r) {
                    const s = this.current, u = s.font, S = s.fontSize;
                    if (S === 0)
                      return;
                    const p = s.fontSizeScale, M = s.charSpacing, R = s.wordSpacing, V = s.fontDirection, D = s.textHScale * V, C = u.vertical, L = C ? 1 : -1, j = u.defaultVMetrics, $ = S * s.fontMatrix[0];
                    let O = 0;
                    for (const i of r) {
                      if (i === null) {
                        O += V * R;
                        continue;
                      } else if ((0, t.isNum)(i)) {
                        O += L * i * S / 1e3;
                        continue;
                      }
                      const a = (i.isSpace ? R : 0) + M, h = i.fontChar;
                      let l, A, k = i.width;
                      if (C) {
                        let G;
                        const B = i.vmetric || j;
                        G = i.vmetric ? B[1] : k * 0.5, G = -G * $;
                        const Y = B[2] * $;
                        k = B ? -B[0] : k, l = G / p, A = (O + Y) / p;
                      } else
                        l = O / p, A = 0;
                      (i.isInFont || u.missingFile) && (s.xcoords.push(s.x + l), C && s.ycoords.push(-s.y + A), s.tspan.textContent += h);
                      let U;
                      C ? U = k * $ - a * V : U = k * $ + a * V, O += U;
                    }
                    s.tspan.setAttributeNS(null, "x", s.xcoords.map(c).join(" ")), C ? s.tspan.setAttributeNS(null, "y", s.ycoords.map(c).join(" ")) : s.tspan.setAttributeNS(null, "y", c(-s.y)), C ? s.y -= O : s.x += O * D, s.tspan.setAttributeNS(null, "font-family", s.fontFamily), s.tspan.setAttributeNS(null, "font-size", `${c(s.fontSize)}px`), s.fontStyle !== w.fontStyle && s.tspan.setAttributeNS(null, "font-style", s.fontStyle), s.fontWeight !== w.fontWeight && s.tspan.setAttributeNS(null, "font-weight", s.fontWeight);
                    const o = s.textRenderingMode & t.TextRenderingMode.FILL_STROKE_MASK;
                    if (o === t.TextRenderingMode.FILL || o === t.TextRenderingMode.FILL_STROKE ? (s.fillColor !== w.fillColor && s.tspan.setAttributeNS(null, "fill", s.fillColor), s.fillAlpha < 1 && s.tspan.setAttributeNS(null, "fill-opacity", s.fillAlpha)) : s.textRenderingMode === t.TextRenderingMode.ADD_TO_PATH ? s.tspan.setAttributeNS(null, "fill", "transparent") : s.tspan.setAttributeNS(null, "fill", "none"), o === t.TextRenderingMode.STROKE || o === t.TextRenderingMode.FILL_STROKE) {
                      const i = 1 / (s.textMatrixScale || 1);
                      this._setStrokeAttributes(s.tspan, i);
                    }
                    let e = s.textMatrix;
                    s.textRise !== 0 && (e = e.slice(), e[5] += s.textRise), s.txtElement.setAttributeNS(null, "transform", `${y(e)} scale(${c(D)}, -1)`), s.txtElement.setAttributeNS(m, "xml:space", "preserve"), s.txtElement.appendChild(s.tspan), s.txtgrp.appendChild(s.txtElement), this._ensureTransformGroup().appendChild(s.txtElement);
                  }
                  setLeadingMoveText(r, s) {
                    this.setLeading(-s), this.moveText(r, s);
                  }
                  addFontStyle(r) {
                    if (!r.data)
                      throw new Error('addFontStyle: No font data available, ensure that the "fontExtraProperties" API parameter is set.');
                    this.cssStyle || (this.cssStyle = this.svgFactory.createElement("svg:style"), this.cssStyle.setAttributeNS(null, "type", "text/css"), this.defs.appendChild(this.cssStyle));
                    const s = (0, t.createObjectURL)(r.data, r.mimetype, this.forceDataSchema);
                    this.cssStyle.textContent += `@font-face { font-family: "${r.loadedName}"; src: url(${s}); }
`;
                  }
                  setFont(r) {
                    const s = this.current, u = this.commonObjs.get(r[0]);
                    let S = r[1];
                    s.font = u, this.embedFonts && !u.missingFile && !this.embeddedFonts[u.loadedName] && (this.addFontStyle(u), this.embeddedFonts[u.loadedName] = u), s.fontMatrix = u.fontMatrix || t.FONT_IDENTITY_MATRIX;
                    let p = "normal";
                    u.black ? p = "900" : u.bold && (p = "bold");
                    const M = u.italic ? "italic" : "normal";
                    S < 0 ? (S = -S, s.fontDirection = -1) : s.fontDirection = 1, s.fontSize = S, s.fontFamily = u.loadedName, s.fontWeight = p, s.fontStyle = M, s.tspan = this.svgFactory.createElement("svg:tspan"), s.tspan.setAttributeNS(null, "y", c(-s.y)), s.xcoords = [], s.ycoords = [];
                  }
                  endText() {
                    var s;
                    const r = this.current;
                    r.textRenderingMode & t.TextRenderingMode.ADD_TO_PATH_FLAG && ((s = r.txtElement) != null && s.hasChildNodes()) && (r.element = r.txtElement, this.clip("nonzero"), this.endPath());
                  }
                  setLineWidth(r) {
                    r > 0 && (this.current.lineWidth = r);
                  }
                  setLineCap(r) {
                    this.current.lineCap = f[r];
                  }
                  setLineJoin(r) {
                    this.current.lineJoin = P[r];
                  }
                  setMiterLimit(r) {
                    this.current.miterLimit = r;
                  }
                  setStrokeAlpha(r) {
                    this.current.strokeAlpha = r;
                  }
                  setStrokeRGBColor(r, s, u) {
                    this.current.strokeColor = t.Util.makeHexColor(r, s, u);
                  }
                  setFillAlpha(r) {
                    this.current.fillAlpha = r;
                  }
                  setFillRGBColor(r, s, u) {
                    this.current.fillColor = t.Util.makeHexColor(r, s, u), this.current.tspan = this.svgFactory.createElement("svg:tspan"), this.current.xcoords = [], this.current.ycoords = [];
                  }
                  setStrokeColorN(r) {
                    this.current.strokeColor = this._makeColorN_Pattern(r);
                  }
                  setFillColorN(r) {
                    this.current.fillColor = this._makeColorN_Pattern(r);
                  }
                  shadingFill(r) {
                    const s = this.viewport.width, u = this.viewport.height, S = t.Util.inverseTransform(this.transformMatrix), p = t.Util.applyTransform([0, 0], S), M = t.Util.applyTransform([0, u], S), R = t.Util.applyTransform([s, 0], S), V = t.Util.applyTransform([s, u], S), D = Math.min(p[0], M[0], R[0], V[0]), C = Math.min(p[1], M[1], R[1], V[1]), L = Math.max(p[0], M[0], R[0], V[0]), j = Math.max(p[1], M[1], R[1], V[1]), $ = this.svgFactory.createElement("svg:rect");
                    $.setAttributeNS(null, "x", D), $.setAttributeNS(null, "y", C), $.setAttributeNS(null, "width", L - D), $.setAttributeNS(null, "height", j - C), $.setAttributeNS(null, "fill", this._makeShadingPattern(r)), this.current.fillAlpha < 1 && $.setAttributeNS(null, "fill-opacity", this.current.fillAlpha), this._ensureTransformGroup().appendChild($);
                  }
                  _makeColorN_Pattern(r) {
                    return r[0] === "TilingPattern" ? this._makeTilingPattern(r) : this._makeShadingPattern(r);
                  }
                  _makeTilingPattern(r) {
                    const s = r[1], u = r[2], S = r[3] || t.IDENTITY_MATRIX, [p, M, R, V] = r[4], D = r[5], C = r[6], L = r[7], j = `shading${b++}`, [$, O, o, e] = t.Util.normalizeRect([...t.Util.applyTransform([p, M], S), ...t.Util.applyTransform([R, V], S)]), [i, a] = t.Util.singularValueDecompose2dScale(S), h = D * i, l = C * a, A = this.svgFactory.createElement("svg:pattern");
                    A.setAttributeNS(null, "id", j), A.setAttributeNS(null, "patternUnits", "userSpaceOnUse"), A.setAttributeNS(null, "width", h), A.setAttributeNS(null, "height", l), A.setAttributeNS(null, "x", `${$}`), A.setAttributeNS(null, "y", `${O}`);
                    const k = this.svg, U = this.transformMatrix, G = this.current.fillColor, B = this.current.strokeColor, Y = this.svgFactory.create(o - $, e - O);
                    if (this.svg = Y, this.transformMatrix = S, L === 2) {
                      const J = t.Util.makeHexColor(...s);
                      this.current.fillColor = J, this.current.strokeColor = J;
                    }
                    return this.executeOpTree(this.convertOpList(u)), this.svg = k, this.transformMatrix = U, this.current.fillColor = G, this.current.strokeColor = B, A.appendChild(Y.childNodes[0]), this.defs.appendChild(A), `url(#${j})`;
                  }
                  _makeShadingPattern(r) {
                    switch (r[0]) {
                      case "RadialAxial":
                        const s = `shading${b++}`, u = r[3];
                        let S;
                        switch (r[1]) {
                          case "axial":
                            const p = r[4], M = r[5];
                            S = this.svgFactory.createElement("svg:linearGradient"), S.setAttributeNS(null, "id", s), S.setAttributeNS(null, "gradientUnits", "userSpaceOnUse"), S.setAttributeNS(null, "x1", p[0]), S.setAttributeNS(null, "y1", p[1]), S.setAttributeNS(null, "x2", M[0]), S.setAttributeNS(null, "y2", M[1]);
                            break;
                          case "radial":
                            const R = r[4], V = r[5], D = r[6], C = r[7];
                            S = this.svgFactory.createElement("svg:radialGradient"), S.setAttributeNS(null, "id", s), S.setAttributeNS(null, "gradientUnits", "userSpaceOnUse"), S.setAttributeNS(null, "cx", V[0]), S.setAttributeNS(null, "cy", V[1]), S.setAttributeNS(null, "r", C), S.setAttributeNS(null, "fx", R[0]), S.setAttributeNS(null, "fy", R[1]), S.setAttributeNS(null, "fr", D);
                            break;
                          default:
                            throw new Error(`Unknown RadialAxial type: ${r[1]}`);
                        }
                        for (const p of u) {
                          const M = this.svgFactory.createElement("svg:stop");
                          M.setAttributeNS(null, "offset", p[0]), M.setAttributeNS(null, "stop-color", p[1]), S.appendChild(M);
                        }
                        return this.defs.appendChild(S), `url(#${s})`;
                      case "Mesh":
                        return (0, t.warn)("Unimplemented pattern Mesh"), null;
                      case "Dummy":
                        return "hotpink";
                      default:
                        throw new Error(`Unknown IR type: ${r[0]}`);
                    }
                  }
                  setDash(r, s) {
                    this.current.dashArray = r, this.current.dashPhase = s;
                  }
                  constructPath(r, s) {
                    const u = this.current;
                    let S = u.x, p = u.y, M = [], R = 0;
                    for (const V of r)
                      switch (V | 0) {
                        case t.OPS.rectangle:
                          S = s[R++], p = s[R++];
                          const D = s[R++], C = s[R++], L = S + D, j = p + C;
                          M.push("M", c(S), c(p), "L", c(L), c(p), "L", c(L), c(j), "L", c(S), c(j), "Z");
                          break;
                        case t.OPS.moveTo:
                          S = s[R++], p = s[R++], M.push("M", c(S), c(p));
                          break;
                        case t.OPS.lineTo:
                          S = s[R++], p = s[R++], M.push("L", c(S), c(p));
                          break;
                        case t.OPS.curveTo:
                          S = s[R + 4], p = s[R + 5], M.push("C", c(s[R]), c(s[R + 1]), c(s[R + 2]), c(s[R + 3]), c(S), c(p)), R += 6;
                          break;
                        case t.OPS.curveTo2:
                          M.push("C", c(S), c(p), c(s[R]), c(s[R + 1]), c(s[R + 2]), c(s[R + 3])), S = s[R + 2], p = s[R + 3], R += 4;
                          break;
                        case t.OPS.curveTo3:
                          S = s[R + 2], p = s[R + 3], M.push("C", c(s[R]), c(s[R + 1]), c(S), c(p), c(S), c(p)), R += 4;
                          break;
                        case t.OPS.closePath:
                          M.push("Z");
                          break;
                      }
                    M = M.join(" "), u.path && r.length > 0 && r[0] !== t.OPS.rectangle && r[0] !== t.OPS.moveTo ? M = u.path.getAttributeNS(null, "d") + M : (u.path = this.svgFactory.createElement("svg:path"), this._ensureTransformGroup().appendChild(u.path)), u.path.setAttributeNS(null, "d", M), u.path.setAttributeNS(null, "fill", "none"), u.element = u.path, u.setCurrentPoint(S, p);
                  }
                  endPath() {
                    const r = this.current;
                    if (r.path = null, !this.pendingClip)
                      return;
                    if (!r.element) {
                      this.pendingClip = null;
                      return;
                    }
                    const s = `clippath${I++}`, u = this.svgFactory.createElement("svg:clipPath");
                    u.setAttributeNS(null, "id", s), u.setAttributeNS(null, "transform", y(this.transformMatrix));
                    const S = r.element.cloneNode(!0);
                    if (this.pendingClip === "evenodd" ? S.setAttributeNS(null, "clip-rule", "evenodd") : S.setAttributeNS(null, "clip-rule", "nonzero"), this.pendingClip = null, u.appendChild(S), this.defs.appendChild(u), r.activeClipUrl) {
                      r.clipGroup = null;
                      for (const p of this.extraStack)
                        p.clipGroup = null;
                      u.setAttributeNS(null, "clip-path", r.activeClipUrl);
                    }
                    r.activeClipUrl = `url(#${s})`, this.tgrp = null;
                  }
                  clip(r) {
                    this.pendingClip = r;
                  }
                  closePath() {
                    const r = this.current;
                    if (r.path) {
                      const s = `${r.path.getAttributeNS(null, "d")}Z`;
                      r.path.setAttributeNS(null, "d", s);
                    }
                  }
                  setLeading(r) {
                    this.current.leading = -r;
                  }
                  setTextRise(r) {
                    this.current.textRise = r;
                  }
                  setTextRenderingMode(r) {
                    this.current.textRenderingMode = r;
                  }
                  setHScale(r) {
                    this.current.textHScale = r / 100;
                  }
                  setRenderingIntent(r) {
                  }
                  setFlatness(r) {
                  }
                  setGState(r) {
                    for (const [s, u] of r)
                      switch (s) {
                        case "LW":
                          this.setLineWidth(u);
                          break;
                        case "LC":
                          this.setLineCap(u);
                          break;
                        case "LJ":
                          this.setLineJoin(u);
                          break;
                        case "ML":
                          this.setMiterLimit(u);
                          break;
                        case "D":
                          this.setDash(u[0], u[1]);
                          break;
                        case "RI":
                          this.setRenderingIntent(u);
                          break;
                        case "FL":
                          this.setFlatness(u);
                          break;
                        case "Font":
                          this.setFont(u);
                          break;
                        case "CA":
                          this.setStrokeAlpha(u);
                          break;
                        case "ca":
                          this.setFillAlpha(u);
                          break;
                        default:
                          (0, t.warn)(`Unimplemented graphic state operator ${s}`);
                          break;
                      }
                  }
                  fill() {
                    const r = this.current;
                    r.element && (r.element.setAttributeNS(null, "fill", r.fillColor), r.element.setAttributeNS(null, "fill-opacity", r.fillAlpha), this.endPath());
                  }
                  stroke() {
                    const r = this.current;
                    r.element && (this._setStrokeAttributes(r.element), r.element.setAttributeNS(null, "fill", "none"), this.endPath());
                  }
                  _setStrokeAttributes(r, s = 1) {
                    const u = this.current;
                    let S = u.dashArray;
                    s !== 1 && S.length > 0 && (S = S.map(function(p) {
                      return s * p;
                    })), r.setAttributeNS(null, "stroke", u.strokeColor), r.setAttributeNS(null, "stroke-opacity", u.strokeAlpha), r.setAttributeNS(null, "stroke-miterlimit", c(u.miterLimit)), r.setAttributeNS(null, "stroke-linecap", u.lineCap), r.setAttributeNS(null, "stroke-linejoin", u.lineJoin), r.setAttributeNS(null, "stroke-width", c(s * u.lineWidth) + "px"), r.setAttributeNS(null, "stroke-dasharray", S.map(c).join(" ")), r.setAttributeNS(null, "stroke-dashoffset", c(s * u.dashPhase) + "px");
                  }
                  eoFill() {
                    this.current.element && this.current.element.setAttributeNS(null, "fill-rule", "evenodd"), this.fill();
                  }
                  fillStroke() {
                    this.stroke(), this.fill();
                  }
                  eoFillStroke() {
                    this.current.element && this.current.element.setAttributeNS(null, "fill-rule", "evenodd"), this.fillStroke();
                  }
                  closeStroke() {
                    this.closePath(), this.stroke();
                  }
                  closeFillStroke() {
                    this.closePath(), this.fillStroke();
                  }
                  closeEOFillStroke() {
                    this.closePath(), this.eoFillStroke();
                  }
                  paintSolidColorImageMask() {
                    const r = this.svgFactory.createElement("svg:rect");
                    r.setAttributeNS(null, "x", "0"), r.setAttributeNS(null, "y", "0"), r.setAttributeNS(null, "width", "1px"), r.setAttributeNS(null, "height", "1px"), r.setAttributeNS(null, "fill", this.current.fillColor), this._ensureTransformGroup().appendChild(r);
                  }
                  paintImageXObject(r) {
                    const s = r.startsWith("g_") ? this.commonObjs.get(r) : this.objs.get(r);
                    if (!s) {
                      (0, t.warn)(`Dependent image with object ID ${r} is not ready yet`);
                      return;
                    }
                    this.paintInlineImageXObject(s);
                  }
                  paintInlineImageXObject(r, s) {
                    const u = r.width, S = r.height, p = N(r, this.forceDataSchema, !!s), M = this.svgFactory.createElement("svg:rect");
                    M.setAttributeNS(null, "x", "0"), M.setAttributeNS(null, "y", "0"), M.setAttributeNS(null, "width", c(u)), M.setAttributeNS(null, "height", c(S)), this.current.element = M, this.clip("nonzero");
                    const R = this.svgFactory.createElement("svg:image");
                    R.setAttributeNS(d, "xlink:href", p), R.setAttributeNS(null, "x", "0"), R.setAttributeNS(null, "y", c(-S)), R.setAttributeNS(null, "width", c(u) + "px"), R.setAttributeNS(null, "height", c(S) + "px"), R.setAttributeNS(null, "transform", `scale(${c(1 / u)} ${c(-1 / S)})`), s ? s.appendChild(R) : this._ensureTransformGroup().appendChild(R);
                  }
                  paintImageMaskXObject(r) {
                    const s = this.current, u = r.width, S = r.height, p = s.fillColor;
                    s.maskId = `mask${T++}`;
                    const M = this.svgFactory.createElement("svg:mask");
                    M.setAttributeNS(null, "id", s.maskId);
                    const R = this.svgFactory.createElement("svg:rect");
                    R.setAttributeNS(null, "x", "0"), R.setAttributeNS(null, "y", "0"), R.setAttributeNS(null, "width", c(u)), R.setAttributeNS(null, "height", c(S)), R.setAttributeNS(null, "fill", p), R.setAttributeNS(null, "mask", `url(#${s.maskId})`), this.defs.appendChild(M), this._ensureTransformGroup().appendChild(R), this.paintInlineImageXObject(r, M);
                  }
                  paintFormXObjectBegin(r, s) {
                    if (Array.isArray(r) && r.length === 6 && this.transform(r[0], r[1], r[2], r[3], r[4], r[5]), s) {
                      const u = s[2] - s[0], S = s[3] - s[1], p = this.svgFactory.createElement("svg:rect");
                      p.setAttributeNS(null, "x", s[0]), p.setAttributeNS(null, "y", s[1]), p.setAttributeNS(null, "width", c(u)), p.setAttributeNS(null, "height", c(S)), this.current.element = p, this.clip("nonzero"), this.endPath();
                    }
                  }
                  paintFormXObjectEnd() {
                  }
                  _initialize(r) {
                    const s = this.svgFactory.create(r.width, r.height), u = this.svgFactory.createElement("svg:defs");
                    s.appendChild(u), this.defs = u;
                    const S = this.svgFactory.createElement("svg:g");
                    return S.setAttributeNS(null, "transform", y(r.transform)), s.appendChild(S), this.svg = S, s;
                  }
                  _ensureClipGroup() {
                    if (!this.current.clipGroup) {
                      const r = this.svgFactory.createElement("svg:g");
                      r.setAttributeNS(null, "clip-path", this.current.activeClipUrl), this.svg.appendChild(r), this.current.clipGroup = r;
                    }
                    return this.current.clipGroup;
                  }
                  _ensureTransformGroup() {
                    return this.tgrp || (this.tgrp = this.svgFactory.createElement("svg:g"), this.tgrp.setAttributeNS(null, "transform", y(this.transformMatrix)), this.current.activeClipUrl ? this._ensureClipGroup().appendChild(this.tgrp) : this.svg.appendChild(this.tgrp)), this.tgrp;
                  }
                };
              }
            },
            /* 21 */
            /***/
            (X, n) => {
              Object.defineProperty(n, "__esModule", {
                value: !0
              }), n.XfaLayer = void 0;
              class _ {
                static setupStorage(g, x, F, w, m) {
                  const d = w.getValue(x, {
                    value: null
                  });
                  switch (F.name) {
                    case "textarea":
                      if (d.value !== null && (g.textContent = d.value), m === "print")
                        break;
                      g.addEventListener("input", (f) => {
                        w.setValue(x, {
                          value: f.target.value
                        });
                      });
                      break;
                    case "input":
                      if (F.attributes.type === "radio" || F.attributes.type === "checkbox") {
                        if (d.value === F.attributes.xfaOn && g.setAttribute("checked", !0), m === "print")
                          break;
                        g.addEventListener("change", (f) => {
                          w.setValue(x, {
                            value: f.target.getAttribute("xfaOn")
                          });
                        });
                      } else {
                        if (d.value !== null && g.setAttribute("value", d.value), m === "print")
                          break;
                        g.addEventListener("input", (f) => {
                          w.setValue(x, {
                            value: f.target.value
                          });
                        });
                      }
                      break;
                    case "select":
                      if (d.value !== null)
                        for (const f of F.children)
                          f.attributes.value === d.value && (f.attributes.selected = !0);
                      g.addEventListener("input", (f) => {
                        const P = f.target.options, N = P.selectedIndex === -1 ? "" : P[P.selectedIndex].value;
                        w.setValue(x, {
                          value: N
                        });
                      });
                      break;
                  }
                }
                static setAttributes(g, x, F, w) {
                  const {
                    attributes: m
                  } = x;
                  m.type === "radio" && (m.name = `${m.name}-${w}`);
                  for (const [d, f] of Object.entries(m))
                    f == null || d === "dataId" || (d !== "style" ? d === "textContent" ? g.textContent = f : d === "class" ? g.setAttribute(d, f.join(" ")) : g.setAttribute(d, f) : Object.assign(g.style, f));
                  F && m.dataId && this.setupStorage(g, m.dataId, x, F);
                }
                static render(g) {
                  var N;
                  const x = g.annotationStorage, F = g.xfa, w = g.intent || "display", m = document.createElement(F.name);
                  F.attributes && this.setAttributes(m, F);
                  const d = [[F, -1, m]], f = g.div;
                  f.appendChild(m);
                  const P = `matrix(${g.viewport.transform.join(",")})`;
                  for (f.style.transform = P, f.setAttribute("class", "xfaLayer xfaFont"); d.length > 0; ) {
                    const [v, W, c] = d[d.length - 1];
                    if (W + 1 === v.children.length) {
                      d.pop();
                      continue;
                    }
                    const y = v.children[++d[d.length - 1][1]];
                    if (y === null)
                      continue;
                    const {
                      name: I
                    } = y;
                    if (I === "#text") {
                      c.appendChild(document.createTextNode(y.value));
                      continue;
                    }
                    let T;
                    (N = y == null ? void 0 : y.attributes) != null && N.xmlns ? T = document.createElementNS(y.attributes.xmlns, I) : T = document.createElement(I), c.appendChild(T), y.attributes && this.setAttributes(T, y, x, w), y.children && y.children.length > 0 ? d.push([y, -1, T]) : y.value && T.appendChild(document.createTextNode(y.value));
                  }
                  for (const v of f.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea"))
                    v.setAttribute("readOnly", !0);
                }
                static update(g) {
                  const x = `matrix(${g.viewport.transform.join(",")})`;
                  g.div.style.transform = x, g.div.hidden = !1;
                }
              }
              n.XfaLayer = _;
            },
            /* 22 */
            /***/
            (X, n, _) => {
              Object.defineProperty(n, "__esModule", {
                value: !0
              }), n.PDFNodeStream = void 0;
              var t = _(2), g = _(23);
              const x = require$$5, F = require$$5, w = require$$5, m = require$$5, d = /^file:\/\/\/[a-zA-Z]:\//;
              function f(b) {
                const r = m.parse(b);
                return r.protocol === "file:" || r.host ? r : /^[a-z]:[/\\]/i.test(b) ? m.parse(`file:///${b}`) : (r.host || (r.protocol = "file:"), r);
              }
              class P {
                constructor(r) {
                  this.source = r, this.url = f(r.url), this.isHttp = this.url.protocol === "http:" || this.url.protocol === "https:", this.isFsUrl = this.url.protocol === "file:", this.httpHeaders = this.isHttp && r.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
                }
                get _progressiveDataLength() {
                  var r;
                  return ((r = this._fullRequestReader) == null ? void 0 : r._loaded) ?? 0;
                }
                getFullReader() {
                  return (0, t.assert)(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), this._fullRequestReader = this.isFsUrl ? new I(this) : new c(this), this._fullRequestReader;
                }
                getRangeReader(r, s) {
                  if (s <= this._progressiveDataLength)
                    return null;
                  const u = this.isFsUrl ? new T(this, r, s) : new y(this, r, s);
                  return this._rangeRequestReaders.push(u), u;
                }
                cancelAllRequests(r) {
                  this._fullRequestReader && this._fullRequestReader.cancel(r);
                  for (const s of this._rangeRequestReaders.slice(0))
                    s.cancel(r);
                }
              }
              n.PDFNodeStream = P;
              class N {
                constructor(r) {
                  this._url = r.url, this._done = !1, this._storedError = null, this.onProgress = null;
                  const s = r.source;
                  this._contentLength = s.length, this._loaded = 0, this._filename = null, this._disableRange = s.disableRange || !1, this._rangeChunkSize = s.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !s.disableStream, this._isRangeSupported = !s.disableRange, this._readableStream = null, this._readCapability = (0, t.createPromiseCapability)(), this._headersCapability = (0, t.createPromiseCapability)();
                }
                get headersReady() {
                  return this._headersCapability.promise;
                }
                get filename() {
                  return this._filename;
                }
                get contentLength() {
                  return this._contentLength;
                }
                get isRangeSupported() {
                  return this._isRangeSupported;
                }
                get isStreamingSupported() {
                  return this._isStreamingSupported;
                }
                async read() {
                  if (await this._readCapability.promise, this._done)
                    return {
                      value: void 0,
                      done: !0
                    };
                  if (this._storedError)
                    throw this._storedError;
                  const r = this._readableStream.read();
                  return r === null ? (this._readCapability = (0, t.createPromiseCapability)(), this.read()) : (this._loaded += r.length, this.onProgress && this.onProgress({
                    loaded: this._loaded,
                    total: this._contentLength
                  }), {
                    value: new Uint8Array(r).buffer,
                    done: !1
                  });
                }
                cancel(r) {
                  if (!this._readableStream) {
                    this._error(r);
                    return;
                  }
                  this._readableStream.destroy(r);
                }
                _error(r) {
                  this._storedError = r, this._readCapability.resolve();
                }
                _setReadableStream(r) {
                  this._readableStream = r, r.on("readable", () => {
                    this._readCapability.resolve();
                  }), r.on("end", () => {
                    r.destroy(), this._done = !0, this._readCapability.resolve();
                  }), r.on("error", (s) => {
                    this._error(s);
                  }), !this._isStreamingSupported && this._isRangeSupported && this._error(new t.AbortException("streaming is disabled")), this._storedError && this._readableStream.destroy(this._storedError);
                }
              }
              class v {
                constructor(r) {
                  this._url = r.url, this._done = !1, this._storedError = null, this.onProgress = null, this._loaded = 0, this._readableStream = null, this._readCapability = (0, t.createPromiseCapability)();
                  const s = r.source;
                  this._isStreamingSupported = !s.disableStream;
                }
                get isStreamingSupported() {
                  return this._isStreamingSupported;
                }
                async read() {
                  if (await this._readCapability.promise, this._done)
                    return {
                      value: void 0,
                      done: !0
                    };
                  if (this._storedError)
                    throw this._storedError;
                  const r = this._readableStream.read();
                  return r === null ? (this._readCapability = (0, t.createPromiseCapability)(), this.read()) : (this._loaded += r.length, this.onProgress && this.onProgress({
                    loaded: this._loaded
                  }), {
                    value: new Uint8Array(r).buffer,
                    done: !1
                  });
                }
                cancel(r) {
                  if (!this._readableStream) {
                    this._error(r);
                    return;
                  }
                  this._readableStream.destroy(r);
                }
                _error(r) {
                  this._storedError = r, this._readCapability.resolve();
                }
                _setReadableStream(r) {
                  this._readableStream = r, r.on("readable", () => {
                    this._readCapability.resolve();
                  }), r.on("end", () => {
                    r.destroy(), this._done = !0, this._readCapability.resolve();
                  }), r.on("error", (s) => {
                    this._error(s);
                  }), this._storedError && this._readableStream.destroy(this._storedError);
                }
              }
              function W(b, r) {
                return {
                  protocol: b.protocol,
                  auth: b.auth,
                  host: b.hostname,
                  port: b.port,
                  path: b.path,
                  method: "GET",
                  headers: r
                };
              }
              class c extends N {
                constructor(r) {
                  super(r);
                  const s = (u) => {
                    if (u.statusCode === 404) {
                      const R = new t.MissingPDFException(`Missing PDF "${this._url}".`);
                      this._storedError = R, this._headersCapability.reject(R);
                      return;
                    }
                    this._headersCapability.resolve(), this._setReadableStream(u);
                    const S = (R) => this._readableStream.headers[R.toLowerCase()], {
                      allowRangeRequests: p,
                      suggestedLength: M
                    } = (0, g.validateRangeRequestCapabilities)({
                      getResponseHeader: S,
                      isHttp: r.isHttp,
                      rangeChunkSize: this._rangeChunkSize,
                      disableRange: this._disableRange
                    });
                    this._isRangeSupported = p, this._contentLength = M || this._contentLength, this._filename = (0, g.extractFilenameFromHeader)(S);
                  };
                  this._request = null, this._url.protocol === "http:" ? this._request = F.request(W(this._url, r.httpHeaders), s) : this._request = w.request(W(this._url, r.httpHeaders), s), this._request.on("error", (u) => {
                    this._storedError = u, this._headersCapability.reject(u);
                  }), this._request.end();
                }
              }
              class y extends v {
                constructor(r, s, u) {
                  super(r), this._httpHeaders = {};
                  for (const p in r.httpHeaders) {
                    const M = r.httpHeaders[p];
                    typeof M > "u" || (this._httpHeaders[p] = M);
                  }
                  this._httpHeaders.Range = `bytes=${s}-${u - 1}`;
                  const S = (p) => {
                    if (p.statusCode === 404) {
                      const M = new t.MissingPDFException(`Missing PDF "${this._url}".`);
                      this._storedError = M;
                      return;
                    }
                    this._setReadableStream(p);
                  };
                  this._request = null, this._url.protocol === "http:" ? this._request = F.request(W(this._url, this._httpHeaders), S) : this._request = w.request(W(this._url, this._httpHeaders), S), this._request.on("error", (p) => {
                    this._storedError = p;
                  }), this._request.end();
                }
              }
              class I extends N {
                constructor(r) {
                  super(r);
                  let s = decodeURIComponent(this._url.path);
                  d.test(this._url.href) && (s = s.replace(/^\//, "")), x.lstat(s, (u, S) => {
                    if (u) {
                      u.code === "ENOENT" && (u = new t.MissingPDFException(`Missing PDF "${s}".`)), this._storedError = u, this._headersCapability.reject(u);
                      return;
                    }
                    this._contentLength = S.size, this._setReadableStream(x.createReadStream(s)), this._headersCapability.resolve();
                  });
                }
              }
              class T extends v {
                constructor(r, s, u) {
                  super(r);
                  let S = decodeURIComponent(this._url.path);
                  d.test(this._url.href) && (S = S.replace(/^\//, "")), this._setReadableStream(x.createReadStream(S, {
                    start: s,
                    end: u - 1
                  }));
                }
              }
            },
            /* 23 */
            /***/
            (X, n, _) => {
              Object.defineProperty(n, "__esModule", {
                value: !0
              }), n.createResponseStatusError = m, n.extractFilenameFromHeader = w, n.validateRangeRequestCapabilities = F, n.validateResponseStatus = d;
              var t = _(2), g = _(24), x = _(1);
              function F({
                getResponseHeader: f,
                isHttp: P,
                rangeChunkSize: N,
                disableRange: v
              }) {
                (0, t.assert)(N > 0, "Range chunk size must be larger than zero");
                const W = {
                  allowRangeRequests: !1,
                  suggestedLength: void 0
                }, c = parseInt(f("Content-Length"), 10);
                return !Number.isInteger(c) || (W.suggestedLength = c, c <= 2 * N) || v || !P || f("Accept-Ranges") !== "bytes" || (f("Content-Encoding") || "identity") !== "identity" || (W.allowRangeRequests = !0), W;
              }
              function w(f) {
                const P = f("Content-Disposition");
                if (P) {
                  let N = (0, g.getFilenameFromContentDispositionHeader)(P);
                  if (N.includes("%"))
                    try {
                      N = decodeURIComponent(N);
                    } catch {
                    }
                  if ((0, x.isPdfFile)(N))
                    return N;
                }
                return null;
              }
              function m(f, P) {
                return f === 404 || f === 0 && P.startsWith("file:") ? new t.MissingPDFException('Missing PDF "' + P + '".') : new t.UnexpectedResponseException(`Unexpected server response (${f}) while retrieving PDF "${P}".`, f);
              }
              function d(f) {
                return f === 200 || f === 206;
              }
            },
            /* 24 */
            /***/
            (X, n, _) => {
              Object.defineProperty(n, "__esModule", {
                value: !0
              }), n.getFilenameFromContentDispositionHeader = g;
              var t = _(2);
              function g(x) {
                let F = !0, w = m("filename\\*", "i").exec(x);
                if (w) {
                  w = w[1];
                  let c = N(w);
                  return c = unescape(c), c = v(c), c = W(c), f(c);
                }
                if (w = P(x), w) {
                  const c = W(w);
                  return f(c);
                }
                if (w = m("filename", "i").exec(x), w) {
                  w = w[1];
                  let c = N(w);
                  return c = W(c), f(c);
                }
                function m(c, y) {
                  return new RegExp("(?:^|;)\\s*" + c + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', y);
                }
                function d(c, y) {
                  if (c) {
                    if (!/^[\x00-\xFF]+$/.test(y))
                      return y;
                    try {
                      const I = new TextDecoder(c, {
                        fatal: !0
                      }), T = (0, t.stringToBytes)(y);
                      y = I.decode(T), F = !1;
                    } catch {
                      if (/^utf-?8$/i.test(c))
                        try {
                          y = decodeURIComponent(escape(y)), F = !1;
                        } catch {
                        }
                    }
                  }
                  return y;
                }
                function f(c) {
                  return F && /[\x80-\xff]/.test(c) && (c = d("utf-8", c), F && (c = d("iso-8859-1", c))), c;
                }
                function P(c) {
                  const y = [];
                  let I;
                  const T = m("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
                  for (; (I = T.exec(c)) !== null; ) {
                    let [, r, s, u] = I;
                    if (r = parseInt(r, 10), r in y) {
                      if (r === 0)
                        break;
                      continue;
                    }
                    y[r] = [s, u];
                  }
                  const b = [];
                  for (let r = 0; r < y.length && r in y; ++r) {
                    let [s, u] = y[r];
                    u = N(u), s && (u = unescape(u), r === 0 && (u = v(u))), b.push(u);
                  }
                  return b.join("");
                }
                function N(c) {
                  if (c.startsWith('"')) {
                    const y = c.slice(1).split('\\"');
                    for (let I = 0; I < y.length; ++I) {
                      const T = y[I].indexOf('"');
                      T !== -1 && (y[I] = y[I].slice(0, T), y.length = I + 1), y[I] = y[I].replace(/\\(.)/g, "$1");
                    }
                    c = y.join('"');
                  }
                  return c;
                }
                function v(c) {
                  const y = c.indexOf("'");
                  if (y === -1)
                    return c;
                  const I = c.slice(0, y), b = c.slice(y + 1).replace(/^[^']*'/, "");
                  return d(I, b);
                }
                function W(c) {
                  return !c.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(c) ? c : c.replace(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(y, I, T, b) {
                    if (T === "q" || T === "Q")
                      return b = b.replace(/_/g, " "), b = b.replace(/=([0-9a-fA-F]{2})/g, function(r, s) {
                        return String.fromCharCode(parseInt(s, 16));
                      }), d(I, b);
                    try {
                      b = atob(b);
                    } catch {
                    }
                    return d(I, b);
                  });
                }
                return "";
              }
            },
            /* 25 */
            /***/
            (X, n, _) => {
              Object.defineProperty(n, "__esModule", {
                value: !0
              }), n.PDFNetworkStream = void 0;
              var t = _(2), g = _(23);
              const x = 200, F = 206;
              function w(N) {
                const v = N.response;
                return typeof v != "string" ? v : (0, t.stringToBytes)(v).buffer;
              }
              class m {
                constructor(v, W) {
                  this.url = v, W = W || {}, this.isHttp = /^https?:/i.test(v), this.httpHeaders = this.isHttp && W.httpHeaders || {}, this.withCredentials = W.withCredentials || !1, this.getXhr = W.getXhr || function() {
                    return new XMLHttpRequest();
                  }, this.currXhrId = 0, this.pendingRequests = /* @__PURE__ */ Object.create(null);
                }
                requestRange(v, W, c) {
                  const y = {
                    begin: v,
                    end: W
                  };
                  for (const I in c)
                    y[I] = c[I];
                  return this.request(y);
                }
                requestFull(v) {
                  return this.request(v);
                }
                request(v) {
                  const W = this.getXhr(), c = this.currXhrId++, y = this.pendingRequests[c] = {
                    xhr: W
                  };
                  W.open("GET", this.url), W.withCredentials = this.withCredentials;
                  for (const I in this.httpHeaders) {
                    const T = this.httpHeaders[I];
                    typeof T > "u" || W.setRequestHeader(I, T);
                  }
                  return this.isHttp && "begin" in v && "end" in v ? (W.setRequestHeader("Range", `bytes=${v.begin}-${v.end - 1}`), y.expectedStatus = F) : y.expectedStatus = x, W.responseType = "arraybuffer", v.onError && (W.onerror = function(I) {
                    v.onError(W.status);
                  }), W.onreadystatechange = this.onStateChange.bind(this, c), W.onprogress = this.onProgress.bind(this, c), y.onHeadersReceived = v.onHeadersReceived, y.onDone = v.onDone, y.onError = v.onError, y.onProgress = v.onProgress, W.send(null), c;
                }
                onProgress(v, W) {
                  const c = this.pendingRequests[v];
                  c && c.onProgress && c.onProgress(W);
                }
                onStateChange(v, W) {
                  const c = this.pendingRequests[v];
                  if (!c)
                    return;
                  const y = c.xhr;
                  if (y.readyState >= 2 && c.onHeadersReceived && (c.onHeadersReceived(), delete c.onHeadersReceived), y.readyState !== 4 || !(v in this.pendingRequests))
                    return;
                  if (delete this.pendingRequests[v], y.status === 0 && this.isHttp) {
                    c.onError && c.onError(y.status);
                    return;
                  }
                  const I = y.status || x;
                  if (!(I === x && c.expectedStatus === F) && I !== c.expectedStatus) {
                    c.onError && c.onError(y.status);
                    return;
                  }
                  const b = w(y);
                  if (I === F) {
                    const r = y.getResponseHeader("Content-Range"), s = /bytes (\d+)-(\d+)\/(\d+)/.exec(r);
                    c.onDone({
                      begin: parseInt(s[1], 10),
                      chunk: b
                    });
                  } else b ? c.onDone({
                    begin: 0,
                    chunk: b
                  }) : c.onError && c.onError(y.status);
                }
                getRequestXhr(v) {
                  return this.pendingRequests[v].xhr;
                }
                isPendingRequest(v) {
                  return v in this.pendingRequests;
                }
                abortRequest(v) {
                  const W = this.pendingRequests[v].xhr;
                  delete this.pendingRequests[v], W.abort();
                }
              }
              class d {
                constructor(v) {
                  this._source = v, this._manager = new m(v.url, {
                    httpHeaders: v.httpHeaders,
                    withCredentials: v.withCredentials
                  }), this._rangeChunkSize = v.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
                }
                _onRangeRequestReaderClosed(v) {
                  const W = this._rangeRequestReaders.indexOf(v);
                  W >= 0 && this._rangeRequestReaders.splice(W, 1);
                }
                getFullReader() {
                  return (0, t.assert)(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), this._fullRequestReader = new f(this._manager, this._source), this._fullRequestReader;
                }
                getRangeReader(v, W) {
                  const c = new P(this._manager, v, W);
                  return c.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(c), c;
                }
                cancelAllRequests(v) {
                  this._fullRequestReader && this._fullRequestReader.cancel(v);
                  for (const W of this._rangeRequestReaders.slice(0))
                    W.cancel(v);
                }
              }
              n.PDFNetworkStream = d;
              class f {
                constructor(v, W) {
                  this._manager = v;
                  const c = {
                    onHeadersReceived: this._onHeadersReceived.bind(this),
                    onDone: this._onDone.bind(this),
                    onError: this._onError.bind(this),
                    onProgress: this._onProgress.bind(this)
                  };
                  this._url = W.url, this._fullRequestId = v.requestFull(c), this._headersReceivedCapability = (0, t.createPromiseCapability)(), this._disableRange = W.disableRange || !1, this._contentLength = W.length, this._rangeChunkSize = W.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !1, this._isRangeSupported = !1, this._cachedChunks = [], this._requests = [], this._done = !1, this._storedError = void 0, this._filename = null, this.onProgress = null;
                }
                _onHeadersReceived() {
                  const v = this._fullRequestId, W = this._manager.getRequestXhr(v), c = (T) => W.getResponseHeader(T), {
                    allowRangeRequests: y,
                    suggestedLength: I
                  } = (0, g.validateRangeRequestCapabilities)({
                    getResponseHeader: c,
                    isHttp: this._manager.isHttp,
                    rangeChunkSize: this._rangeChunkSize,
                    disableRange: this._disableRange
                  });
                  y && (this._isRangeSupported = !0), this._contentLength = I || this._contentLength, this._filename = (0, g.extractFilenameFromHeader)(c), this._isRangeSupported && this._manager.abortRequest(v), this._headersReceivedCapability.resolve();
                }
                _onDone(v) {
                  if (v && (this._requests.length > 0 ? this._requests.shift().resolve({
                    value: v.chunk,
                    done: !1
                  }) : this._cachedChunks.push(v.chunk)), this._done = !0, !(this._cachedChunks.length > 0)) {
                    for (const W of this._requests)
                      W.resolve({
                        value: void 0,
                        done: !0
                      });
                    this._requests.length = 0;
                  }
                }
                _onError(v) {
                  const W = this._url, c = (0, g.createResponseStatusError)(v, W);
                  this._storedError = c, this._headersReceivedCapability.reject(c);
                  for (const y of this._requests)
                    y.reject(c);
                  this._requests.length = 0, this._cachedChunks.length = 0;
                }
                _onProgress(v) {
                  this.onProgress && this.onProgress({
                    loaded: v.loaded,
                    total: v.lengthComputable ? v.total : this._contentLength
                  });
                }
                get filename() {
                  return this._filename;
                }
                get isRangeSupported() {
                  return this._isRangeSupported;
                }
                get isStreamingSupported() {
                  return this._isStreamingSupported;
                }
                get contentLength() {
                  return this._contentLength;
                }
                get headersReady() {
                  return this._headersReceivedCapability.promise;
                }
                async read() {
                  if (this._storedError)
                    throw this._storedError;
                  if (this._cachedChunks.length > 0)
                    return {
                      value: this._cachedChunks.shift(),
                      done: !1
                    };
                  if (this._done)
                    return {
                      value: void 0,
                      done: !0
                    };
                  const v = (0, t.createPromiseCapability)();
                  return this._requests.push(v), v.promise;
                }
                cancel(v) {
                  this._done = !0, this._headersReceivedCapability.reject(v);
                  for (const W of this._requests)
                    W.resolve({
                      value: void 0,
                      done: !0
                    });
                  this._requests.length = 0, this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId), this._fullRequestReader = null;
                }
              }
              class P {
                constructor(v, W, c) {
                  this._manager = v;
                  const y = {
                    onDone: this._onDone.bind(this),
                    onProgress: this._onProgress.bind(this)
                  };
                  this._requestId = v.requestRange(W, c, y), this._requests = [], this._queuedChunk = null, this._done = !1, this.onProgress = null, this.onClosed = null;
                }
                _close() {
                  this.onClosed && this.onClosed(this);
                }
                _onDone(v) {
                  const W = v.chunk;
                  this._requests.length > 0 ? this._requests.shift().resolve({
                    value: W,
                    done: !1
                  }) : this._queuedChunk = W, this._done = !0;
                  for (const c of this._requests)
                    c.resolve({
                      value: void 0,
                      done: !0
                    });
                  this._requests.length = 0, this._close();
                }
                _onProgress(v) {
                  !this.isStreamingSupported && this.onProgress && this.onProgress({
                    loaded: v.loaded
                  });
                }
                get isStreamingSupported() {
                  return !1;
                }
                async read() {
                  if (this._queuedChunk !== null) {
                    const W = this._queuedChunk;
                    return this._queuedChunk = null, {
                      value: W,
                      done: !1
                    };
                  }
                  if (this._done)
                    return {
                      value: void 0,
                      done: !0
                    };
                  const v = (0, t.createPromiseCapability)();
                  return this._requests.push(v), v.promise;
                }
                cancel(v) {
                  this._done = !0;
                  for (const W of this._requests)
                    W.resolve({
                      value: void 0,
                      done: !0
                    });
                  this._requests.length = 0, this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId), this._close();
                }
              }
            },
            /* 26 */
            /***/
            (X, n, _) => {
              Object.defineProperty(n, "__esModule", {
                value: !0
              }), n.PDFFetchStream = void 0;
              var t = _(2), g = _(23);
              function x(f, P, N) {
                return {
                  method: "GET",
                  headers: f,
                  signal: N == null ? void 0 : N.signal,
                  mode: "cors",
                  credentials: P ? "include" : "same-origin",
                  redirect: "follow"
                };
              }
              function F(f) {
                const P = new Headers();
                for (const N in f) {
                  const v = f[N];
                  typeof v > "u" || P.append(N, v);
                }
                return P;
              }
              class w {
                constructor(P) {
                  this.source = P, this.isHttp = /^https?:/i.test(P.url), this.httpHeaders = this.isHttp && P.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
                }
                get _progressiveDataLength() {
                  var P;
                  return ((P = this._fullRequestReader) == null ? void 0 : P._loaded) ?? 0;
                }
                getFullReader() {
                  return (0, t.assert)(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), this._fullRequestReader = new m(this), this._fullRequestReader;
                }
                getRangeReader(P, N) {
                  if (N <= this._progressiveDataLength)
                    return null;
                  const v = new d(this, P, N);
                  return this._rangeRequestReaders.push(v), v;
                }
                cancelAllRequests(P) {
                  this._fullRequestReader && this._fullRequestReader.cancel(P);
                  for (const N of this._rangeRequestReaders.slice(0))
                    N.cancel(P);
                }
              }
              n.PDFFetchStream = w;
              class m {
                constructor(P) {
                  this._stream = P, this._reader = null, this._loaded = 0, this._filename = null;
                  const N = P.source;
                  this._withCredentials = N.withCredentials || !1, this._contentLength = N.length, this._headersCapability = (0, t.createPromiseCapability)(), this._disableRange = N.disableRange || !1, this._rangeChunkSize = N.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), typeof AbortController < "u" && (this._abortController = new AbortController()), this._isStreamingSupported = !N.disableStream, this._isRangeSupported = !N.disableRange, this._headers = F(this._stream.httpHeaders);
                  const v = N.url;
                  fetch(v, x(this._headers, this._withCredentials, this._abortController)).then((W) => {
                    if (!(0, g.validateResponseStatus)(W.status))
                      throw (0, g.createResponseStatusError)(W.status, v);
                    this._reader = W.body.getReader(), this._headersCapability.resolve();
                    const c = (T) => W.headers.get(T), {
                      allowRangeRequests: y,
                      suggestedLength: I
                    } = (0, g.validateRangeRequestCapabilities)({
                      getResponseHeader: c,
                      isHttp: this._stream.isHttp,
                      rangeChunkSize: this._rangeChunkSize,
                      disableRange: this._disableRange
                    });
                    this._isRangeSupported = y, this._contentLength = I || this._contentLength, this._filename = (0, g.extractFilenameFromHeader)(c), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new t.AbortException("Streaming is disabled."));
                  }).catch(this._headersCapability.reject), this.onProgress = null;
                }
                get headersReady() {
                  return this._headersCapability.promise;
                }
                get filename() {
                  return this._filename;
                }
                get contentLength() {
                  return this._contentLength;
                }
                get isRangeSupported() {
                  return this._isRangeSupported;
                }
                get isStreamingSupported() {
                  return this._isStreamingSupported;
                }
                async read() {
                  await this._headersCapability.promise;
                  const {
                    value: P,
                    done: N
                  } = await this._reader.read();
                  return N ? {
                    value: P,
                    done: N
                  } : (this._loaded += P.byteLength, this.onProgress && this.onProgress({
                    loaded: this._loaded,
                    total: this._contentLength
                  }), {
                    value: new Uint8Array(P).buffer,
                    done: !1
                  });
                }
                cancel(P) {
                  this._reader && this._reader.cancel(P), this._abortController && this._abortController.abort();
                }
              }
              class d {
                constructor(P, N, v) {
                  this._stream = P, this._reader = null, this._loaded = 0;
                  const W = P.source;
                  this._withCredentials = W.withCredentials || !1, this._readCapability = (0, t.createPromiseCapability)(), this._isStreamingSupported = !W.disableStream, typeof AbortController < "u" && (this._abortController = new AbortController()), this._headers = F(this._stream.httpHeaders), this._headers.append("Range", `bytes=${N}-${v - 1}`);
                  const c = W.url;
                  fetch(c, x(this._headers, this._withCredentials, this._abortController)).then((y) => {
                    if (!(0, g.validateResponseStatus)(y.status))
                      throw (0, g.createResponseStatusError)(y.status, c);
                    this._readCapability.resolve(), this._reader = y.body.getReader();
                  }).catch((y) => {
                    if ((y == null ? void 0 : y.name) !== "AbortError")
                      throw y;
                  }), this.onProgress = null;
                }
                get isStreamingSupported() {
                  return this._isStreamingSupported;
                }
                async read() {
                  await this._readCapability.promise;
                  const {
                    value: P,
                    done: N
                  } = await this._reader.read();
                  return N ? {
                    value: P,
                    done: N
                  } : (this._loaded += P.byteLength, this.onProgress && this.onProgress({
                    loaded: this._loaded
                  }), {
                    value: new Uint8Array(P).buffer,
                    done: !1
                  });
                }
                cancel(P) {
                  this._reader && this._reader.cancel(P), this._abortController && this._abortController.abort();
                }
              }
            }
            /******/
          ], __webpack_module_cache__ = {};
          function __w_pdfjs_require__(X) {
            var n = __webpack_module_cache__[X];
            if (n !== void 0)
              return n.exports;
            var _ = __webpack_module_cache__[X] = {
              /******/
              // no module.id needed
              /******/
              // no module.loaded needed
              /******/
              exports: {}
              /******/
            };
            return __webpack_modules__[X](_, _.exports, __w_pdfjs_require__), _.exports;
          }
          var __webpack_exports__ = {};
          return (() => {
            var X = __webpack_exports__;
            Object.defineProperty(X, "__esModule", {
              value: !0
            }), Object.defineProperty(X, "addLinkAttributes", {
              enumerable: !0,
              get: function() {
                return n.addLinkAttributes;
              }
            }), Object.defineProperty(X, "getFilenameFromUrl", {
              enumerable: !0,
              get: function() {
                return n.getFilenameFromUrl;
              }
            }), Object.defineProperty(X, "getPdfFilenameFromUrl", {
              enumerable: !0,
              get: function() {
                return n.getPdfFilenameFromUrl;
              }
            }), Object.defineProperty(X, "getXfaPageViewport", {
              enumerable: !0,
              get: function() {
                return n.getXfaPageViewport;
              }
            }), Object.defineProperty(X, "isPdfFile", {
              enumerable: !0,
              get: function() {
                return n.isPdfFile;
              }
            }), Object.defineProperty(X, "LinkTarget", {
              enumerable: !0,
              get: function() {
                return n.LinkTarget;
              }
            }), Object.defineProperty(X, "loadScript", {
              enumerable: !0,
              get: function() {
                return n.loadScript;
              }
            }), Object.defineProperty(X, "PDFDateString", {
              enumerable: !0,
              get: function() {
                return n.PDFDateString;
              }
            }), Object.defineProperty(X, "RenderingCancelledException", {
              enumerable: !0,
              get: function() {
                return n.RenderingCancelledException;
              }
            }), Object.defineProperty(X, "build", {
              enumerable: !0,
              get: function() {
                return _.build;
              }
            }), Object.defineProperty(X, "getDocument", {
              enumerable: !0,
              get: function() {
                return _.getDocument;
              }
            }), Object.defineProperty(X, "LoopbackPort", {
              enumerable: !0,
              get: function() {
                return _.LoopbackPort;
              }
            }), Object.defineProperty(X, "PDFDataRangeTransport", {
              enumerable: !0,
              get: function() {
                return _.PDFDataRangeTransport;
              }
            }), Object.defineProperty(X, "PDFWorker", {
              enumerable: !0,
              get: function() {
                return _.PDFWorker;
              }
            }), Object.defineProperty(X, "version", {
              enumerable: !0,
              get: function() {
                return _.version;
              }
            }), Object.defineProperty(X, "CMapCompressionType", {
              enumerable: !0,
              get: function() {
                return t.CMapCompressionType;
              }
            }), Object.defineProperty(X, "createObjectURL", {
              enumerable: !0,
              get: function() {
                return t.createObjectURL;
              }
            }), Object.defineProperty(X, "createPromiseCapability", {
              enumerable: !0,
              get: function() {
                return t.createPromiseCapability;
              }
            }), Object.defineProperty(X, "createValidAbsoluteUrl", {
              enumerable: !0,
              get: function() {
                return t.createValidAbsoluteUrl;
              }
            }), Object.defineProperty(X, "InvalidPDFException", {
              enumerable: !0,
              get: function() {
                return t.InvalidPDFException;
              }
            }), Object.defineProperty(X, "MissingPDFException", {
              enumerable: !0,
              get: function() {
                return t.MissingPDFException;
              }
            }), Object.defineProperty(X, "OPS", {
              enumerable: !0,
              get: function() {
                return t.OPS;
              }
            }), Object.defineProperty(X, "PasswordResponses", {
              enumerable: !0,
              get: function() {
                return t.PasswordResponses;
              }
            }), Object.defineProperty(X, "PermissionFlag", {
              enumerable: !0,
              get: function() {
                return t.PermissionFlag;
              }
            }), Object.defineProperty(X, "removeNullCharacters", {
              enumerable: !0,
              get: function() {
                return t.removeNullCharacters;
              }
            }), Object.defineProperty(X, "shadow", {
              enumerable: !0,
              get: function() {
                return t.shadow;
              }
            }), Object.defineProperty(X, "UnexpectedResponseException", {
              enumerable: !0,
              get: function() {
                return t.UnexpectedResponseException;
              }
            }), Object.defineProperty(X, "UNSUPPORTED_FEATURES", {
              enumerable: !0,
              get: function() {
                return t.UNSUPPORTED_FEATURES;
              }
            }), Object.defineProperty(X, "Util", {
              enumerable: !0,
              get: function() {
                return t.Util;
              }
            }), Object.defineProperty(X, "VerbosityLevel", {
              enumerable: !0,
              get: function() {
                return t.VerbosityLevel;
              }
            }), Object.defineProperty(X, "AnnotationLayer", {
              enumerable: !0,
              get: function() {
                return g.AnnotationLayer;
              }
            }), Object.defineProperty(X, "GlobalWorkerOptions", {
              enumerable: !0,
              get: function() {
                return x.GlobalWorkerOptions;
              }
            }), Object.defineProperty(X, "renderTextLayer", {
              enumerable: !0,
              get: function() {
                return w.renderTextLayer;
              }
            }), Object.defineProperty(X, "SVGGraphics", {
              enumerable: !0,
              get: function() {
                return m.SVGGraphics;
              }
            }), Object.defineProperty(X, "XfaLayer", {
              enumerable: !0,
              get: function() {
                return d.XfaLayer;
              }
            });
            var n = __w_pdfjs_require__(1), _ = __w_pdfjs_require__(6), t = __w_pdfjs_require__(2), g = __w_pdfjs_require__(17), x = __w_pdfjs_require__(12), F = __w_pdfjs_require__(4), w = __w_pdfjs_require__(19), m = __w_pdfjs_require__(20), d = __w_pdfjs_require__(21);
            if (F.isNodeJS) {
              const {
                PDFNodeStream: f
              } = __w_pdfjs_require__(22);
              (0, _.setPDFNetworkStreamFactory)((P) => new f(P));
            } else {
              const {
                PDFNetworkStream: f
              } = __w_pdfjs_require__(25), {
                PDFFetchStream: P
              } = __w_pdfjs_require__(26);
              (0, _.setPDFNetworkStreamFactory)((N) => (0, n.isValidFetchUrl)(N.url) ? new P(N) : new f(N));
            }
          })(), __webpack_exports__;
        })()
      );
    });
  }(pdf$1)), pdf$1.exports;
}
var pdfExports = requirePdf();
const FILE_TYPES = {
  IMAGE: "image",
  VIDEO: "video",
  PDF: "pdf",
  UNKNOWN: "unknown"
}, SUPPORTED_EXTENSIONS = {
  IMAGE: ["jpg", "jpeg", "png", "gif", "webp"],
  VIDEO: ["mp4", "webm", "ogg"],
  PDF: ["pdf"]
}, PDF_JS_LIB_SRC = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js", getFileType = async (X, n, _ = null) => {
  if (X) return X;
  try {
    let t;
    if (typeof n == "object" && n instanceof File)
      t = n.type.split("/")[1];
    else {
      const m = new URL(n).pathname.toLowerCase();
      t = getFileExtension(m);
    }
    if (SUPPORTED_EXTENSIONS.IMAGE.includes(t))
      return FILE_TYPES.IMAGE;
    if (SUPPORTED_EXTENSIONS.VIDEO.includes(t))
      return FILE_TYPES.VIDEO;
    if (SUPPORTED_EXTENSIONS.PDF.includes(t))
      return FILE_TYPES.PDF;
    const g = _ ? _.get : fetch, x = _ ? await g(n) : await g(n, { method: "GET" }), F = _ ? x.headers["content-type"] : x.headers.get("Content-Type");
    if (F.startsWith("image/")) return FILE_TYPES.IMAGE;
    if (F.startsWith("video/")) return FILE_TYPES.VIDEO;
    if (F === "application/pdf") return FILE_TYPES.PDF;
  } catch (t) {
    console.warn("Invalid URL or local file detected.", t);
  }
  return FILE_TYPES.UNKNOWN;
}, getFileExtension = (X) => {
  var _, t;
  if (!X.includes(".")) return "";
  const n = (t = (_ = X == null ? void 0 : X.split(".")) == null ? void 0 : _.pop()) == null ? void 0 : t.toLowerCase();
  return n || "";
};
pdfExports.GlobalWorkerOptions.workerSrc = PDF_JS_LIB_SRC;
const FilePreview = ({
  preview: X,
  clarity: n,
  placeHolderImage: _,
  errorImage: t,
  fileType: g,
  axiosInstance: x = null,
  getLoader: F
}) => {
  const [w, m] = useState(""), [d, f] = useState(null), [P, N] = useState(
    null
  ), [v, W] = useState(g ?? ""), [c, y] = useState(!1), [I, T] = useState(!1);
  useEffect(() => {
    if (X) {
      if (X instanceof File) {
        const M = URL.createObjectURL(X);
        return m(M), () => URL.revokeObjectURL(M);
      } else if (typeof X == "string") {
        if (X.length < 1) return;
        m(X);
      }
    }
  }, [X]), useEffect(() => {
    w && (v === FILE_TYPES.PDF && b(w), v === FILE_TYPES.IMAGE && x && r(w));
  }, [w, v, x]), useEffect(() => {
    (async () => {
      const R = await getFileType(g, X, x);
      W(R);
    })();
  }, [X, g, x]);
  const b = async (M) => {
    console.log(M);
    try {
      let R;
      if (x) {
        const i = await x.get(M, {
          responseType: "arraybuffer"
        });
        R = new Uint8Array(i.data);
      } else {
        const a = await (await fetch(M)).arrayBuffer();
        R = new Uint8Array(a);
      }
      const C = await (await pdfExports.getDocument({
        data: R,
        verbosity: pdfExports.VerbosityLevel.ERRORS
      }).promise).getPage(1), L = n ?? 1e3, j = C.getViewport({ scale: 1 }), $ = L / j.width, O = C.getViewport({ scale: $ }), o = document.createElement("canvas"), e = o.getContext("2d");
      if (!e) return;
      o.width = O.width, o.height = O.height, await C.render({ canvasContext: e, viewport: O }).promise, f(o.toDataURL("image/png")), T(!1);
    } catch (R) {
      T(!0), console.error("Error generating PDF thumbnail:", R);
    } finally {
      y(!1);
    }
  }, r = async (M) => {
    try {
      const R = await x.get(M, {
        responseType: "blob"
      }), V = new Blob([R.data], { type: "image/png" }), D = URL.createObjectURL(V);
      N(D), y(!1), T(!1);
    } catch (R) {
      T(!0), console.error("Error generating image thumbnail:", R);
    } finally {
      y(!1);
    }
  };
  function s() {
    y(!1);
  }
  function u() {
    requestAnimationFrame(s);
  }
  function S() {
    requestAnimationFrame(u);
  }
  const p = () => v === FILE_TYPES.IMAGE ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      onLoad: S,
      src: P || w,
      alt: "Preview",
      className: `preview-file ${c ? "hidden" : ""}`
    }
  ) : v === FILE_TYPES.VIDEO ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    "video",
    {
      onLoad: S,
      src: w,
      controls: !0,
      className: `preview-file ${c ? "hidden" : ""}`
    }
  ) : v === FILE_TYPES.PDF ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      onLoad: S,
      src: d || w,
      alt: "PDF Preview",
      className: `preview-file ${c ? "hidden" : ""}`
    }
  ) : t && v === FILE_TYPES.UNKNOWN ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      src: t,
      alt: "errorImage",
      className: `preview-file ${c ? "hidden" : ""}`,
      onLoad: () => y(!1)
    }
  ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Unsupported file type" });
  return w ? !v && _ ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: _, alt: "placeHolder", className: "preview-file" }) : v ? I ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      src: t,
      alt: "errorImage",
      className: `preview-file ${c ? "hidden" : ""}`,
      onLoad: () => y(!1)
    }
  ) : c ? F ? F() : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "loader-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "loader" }) }) : p() : null : /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      src: t,
      alt: "errorImage",
      className: `preview-file ${c ? "hidden" : ""}`,
      onLoad: () => y(!1)
    }
  );
};
export {
  FilePreview,
  FilePreview as default
};
