(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "../blocks/comment/comment.js":
/*!************************************!*\
  !*** ../blocks/comment/comment.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function () {
  if (typeof window.BX === "function") {
    return;
  }

  (function (e) {
    var t = e.babelHelpers = {};

    function r(e) {
      if (typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol") {
        t.typeof = r = function r(e) {
          return _typeof(e);
        };
      } else {
        t.typeof = r = function r(e) {
          return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
        };
      }

      return r(e);
    }

    t.typeof = r;
    var n;

    function i(e, t, r, i) {
      if (!n) {
        n = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 60103;
      }

      var a = e && e.defaultProps;
      var o = arguments.length - 3;

      if (!t && o !== 0) {
        t = {
          children: void 0
        };
      }

      if (t && a) {
        for (var s in a) {
          if (t[s] === void 0) {
            t[s] = a[s];
          }
        }
      } else if (!t) {
        t = a || {};
      }

      if (o === 1) {
        t.children = i;
      } else if (o > 1) {
        var u = new Array(o);

        for (var l = 0; l < o; l++) {
          u[l] = arguments[l + 3];
        }

        t.children = u;
      }

      return {
        $$typeof: n,
        type: e,
        key: r === undefined ? null : "" + r,
        ref: null,
        props: t,
        _owner: null
      };
    }

    t.jsx = i;

    function a(e) {
      var t;

      if (typeof Symbol === "function") {
        if (Symbol.asyncIterator) {
          t = e[Symbol.asyncIterator];
          if (t != null) return t.call(e);
        }

        if (Symbol.iterator) {
          t = e[Symbol.iterator];
          if (t != null) return t.call(e);
        }
      }

      throw new TypeError("Object is not async iterable");
    }

    t.asyncIterator = a;

    function o(e) {
      this.wrapped = e;
    }

    t.AwaitValue = o;

    function s(e) {
      var r, n;

      function i(e, t) {
        return new Promise(function (i, o) {
          var s = {
            key: e,
            arg: t,
            resolve: i,
            reject: o,
            next: null
          };

          if (n) {
            n = n.next = s;
          } else {
            r = n = s;
            a(e, t);
          }
        });
      }

      function a(r, n) {
        try {
          var i = e[r](n);
          var s = i.value;
          var u = s instanceof t.AwaitValue;
          Promise.resolve(u ? s.wrapped : s).then(function (e) {
            if (u) {
              a("next", e);
              return;
            }

            o(i.done ? "return" : "normal", e);
          }, function (e) {
            a("throw", e);
          });
        } catch (e) {
          o("throw", e);
        }
      }

      function o(e, t) {
        switch (e) {
          case "return":
            r.resolve({
              value: t,
              done: true
            });
            break;

          case "throw":
            r.reject(t);
            break;

          default:
            r.resolve({
              value: t,
              done: false
            });
            break;
        }

        r = r.next;

        if (r) {
          a(r.key, r.arg);
        } else {
          n = null;
        }
      }

      this._invoke = i;

      if (typeof e.return !== "function") {
        this.return = undefined;
      }
    }

    if (typeof Symbol === "function" && Symbol.asyncIterator) {
      s.prototype[Symbol.asyncIterator] = function () {
        return this;
      };
    }

    s.prototype.next = function (e) {
      return this._invoke("next", e);
    };

    s.prototype.throw = function (e) {
      return this._invoke("throw", e);
    };

    s.prototype.return = function (e) {
      return this._invoke("return", e);
    };

    t.AsyncGenerator = s;

    function u(e) {
      return function () {
        return new t.AsyncGenerator(e.apply(this, arguments));
      };
    }

    t.wrapAsyncGenerator = u;

    function l(e) {
      return new t.AwaitValue(e);
    }

    t.awaitAsyncGenerator = l;

    function f(e, t) {
      var r = {},
          n = false;

      function i(r, i) {
        n = true;
        i = new Promise(function (t) {
          t(e[r](i));
        });
        return {
          done: false,
          value: t(i)
        };
      }

      if (typeof Symbol === "function" && Symbol.iterator) {
        r[Symbol.iterator] = function () {
          return this;
        };
      }

      r.next = function (e) {
        if (n) {
          n = false;
          return e;
        }

        return i("next", e);
      };

      if (typeof e.throw === "function") {
        r.throw = function (e) {
          if (n) {
            n = false;
            throw e;
          }

          return i("throw", e);
        };
      }

      if (typeof e.return === "function") {
        r.return = function (e) {
          return i("return", e);
        };
      }

      return r;
    }

    t.asyncGeneratorDelegate = f;

    function c(e, t, r, n, i, a, o) {
      try {
        var s = e[a](o);
        var u = s.value;
      } catch (e) {
        r(e);
        return;
      }

      if (s.done) {
        t(u);
      } else {
        Promise.resolve(u).then(n, i);
      }
    }

    function v(e) {
      return function () {
        var t = this,
            r = arguments;
        return new Promise(function (n, i) {
          var a = e.apply(t, r);

          function o(e) {
            c(a, n, i, o, s, "next", e);
          }

          function s(e) {
            c(a, n, i, o, s, "throw", e);
          }

          o(undefined);
        });
      };
    }

    t.asyncToGenerator = v;

    function h(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    t.classCallCheck = h;

    function d(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || false;
        n.configurable = true;
        if ("value" in n) n.writable = true;
        Object.defineProperty(e, n.key, n);
      }
    }

    function p(e, t, r) {
      if (t) d(e.prototype, t);
      if (r) d(e, r);
      return e;
    }

    t.createClass = p;

    function y(e, t) {
      for (var r in t) {
        var n = t[r];
        n.configurable = n.enumerable = true;
        if ("value" in n) n.writable = true;
        Object.defineProperty(e, r, n);
      }

      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);

        for (var a = 0; a < i.length; a++) {
          var o = i[a];
          var n = t[o];
          n.configurable = n.enumerable = true;
          if ("value" in n) n.writable = true;
          Object.defineProperty(e, o, n);
        }
      }

      return e;
    }

    t.defineEnumerableProperties = y;

    function g(e, t) {
      var r = Object.getOwnPropertyNames(t);

      for (var n = 0; n < r.length; n++) {
        var i = r[n];
        var a = Object.getOwnPropertyDescriptor(t, i);

        if (a && a.configurable && e[i] === undefined) {
          Object.defineProperty(e, i, a);
        }
      }

      return e;
    }

    t.defaults = g;

    function m(e, t, r) {
      if (t in e) {
        Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        e[t] = r;
      }

      return e;
    }

    t.defineProperty = m;

    function b() {
      t.extends = b = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];

          for (var n in r) {
            if (Object.prototype.hasOwnProperty.call(r, n)) {
              e[n] = r[n];
            }
          }
        }

        return e;
      };

      return b.apply(this, arguments);
    }

    t.extends = b;

    function w(e) {
      for (var r = 1; r < arguments.length; r++) {
        var n = arguments[r] != null ? arguments[r] : {};
        var i = Object.keys(n);

        if (typeof Object.getOwnPropertySymbols === "function") {
          i = i.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable;
          }));
        }

        i.forEach(function (r) {
          t.defineProperty(e, r, n[r]);
        });
      }

      return e;
    }

    t.objectSpread = w;

    function S(e, r) {
      if (typeof r !== "function" && r !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }

      e.prototype = Object.create(r && r.prototype, {
        constructor: {
          value: e,
          writable: true,
          configurable: true
        }
      });
      if (r) t.setPrototypeOf(e, r);
    }

    t.inherits = S;

    function x(e, t) {
      e.prototype = Object.create(t.prototype);
      e.prototype.constructor = e;
      e.__proto__ = t;
    }

    t.inheritsLoose = x;

    function E(e) {
      t.getPrototypeOf = E = Object.setPrototypeOf ? Object.getPrototypeOf : function e(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      };
      return E(e);
    }

    t.getPrototypeOf = E;

    function B(e, r) {
      t.setPrototypeOf = B = Object.setPrototypeOf || function e(t, r) {
        t.__proto__ = r;
        return t;
      };

      return B(e, r);
    }

    t.setPrototypeOf = B;

    function j() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;

      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
        return true;
      } catch (e) {
        return false;
      }
    }

    function _(e, r, n) {
      if (j()) {
        t.construct = _ = Reflect.construct;
      } else {
        t.construct = _ = function e(r, n, i) {
          var a = [null];
          a.push.apply(a, n);
          var o = Function.bind.apply(r, a);
          var s = new o();
          if (i) t.setPrototypeOf(s, i.prototype);
          return s;
        };
      }

      return _.apply(null, arguments);
    }

    t.construct = _;

    function X(e) {
      return Function.toString.call(e).indexOf("[native code]") !== -1;
    }

    t.isNativeFunction = X;

    function O(e) {
      var r = typeof Map === "function" ? new Map() : undefined;

      t.wrapNativeSuper = O = function e(n) {
        if (n === null || !t.isNativeFunction(n)) return n;

        if (typeof n !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }

        if (typeof r !== "undefined") {
          if (r.has(n)) return r.get(n);
          r.set(n, i);
        }

        function i() {
          return t.construct(n, arguments, t.getPrototypeOf(this).constructor);
        }

        i.prototype = Object.create(n.prototype, {
          constructor: {
            value: i,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return t.setPrototypeOf(i, n);
      };

      return O(e);
    }

    t.wrapNativeSuper = O;

    function N(e, t) {
      if (t != null && typeof Symbol !== "undefined" && t[Symbol.hasInstance]) {
        return t[Symbol.hasInstance](e);
      } else {
        return e instanceof t;
      }
    }

    t.instanceof = N;

    function P(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    t.interopRequireDefault = P;

    function A(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        var t = {};

        if (e != null) {
          for (var r in e) {
            if (Object.prototype.hasOwnProperty.call(e, r)) {
              var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};

              if (n.get || n.set) {
                Object.defineProperty(t, r, n);
              } else {
                t[r] = e[r];
              }
            }
          }
        }

        t.default = e;
        return t;
      }
    }

    t.interopRequireWildcard = A;

    function T(e, t) {
      if (e !== t) {
        throw new TypeError("Cannot instantiate an arrow function");
      }
    }

    t.newArrowCheck = T;

    function C(e) {
      if (e == null) throw new TypeError("Cannot destructure undefined");
    }

    t.objectDestructuringEmpty = C;

    function k(e, t) {
      if (e == null) return {};
      var r = {};
      var n = Object.keys(e);
      var i, a;

      for (a = 0; a < n.length; a++) {
        i = n[a];
        if (t.indexOf(i) >= 0) continue;
        r[i] = e[i];
      }

      return r;
    }

    t.objectWithoutPropertiesLoose = k;

    function I(e, r) {
      if (e == null) return {};
      var n = t.objectWithoutPropertiesLoose(e, r);
      var i, a;

      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);

        for (a = 0; a < o.length; a++) {
          i = o[a];
          if (r.indexOf(i) >= 0) continue;
          if (!Object.prototype.propertyIsEnumerable.call(e, i)) continue;
          n[i] = e[i];
        }
      }

      return n;
    }

    t.objectWithoutProperties = I;

    function M(e) {
      if (e === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return e;
    }

    t.assertThisInitialized = M;

    function F(e, r) {
      if (r && (_typeof(r) === "object" || typeof r === "function")) {
        return r;
      }

      return t.assertThisInitialized(e);
    }

    t.possibleConstructorReturn = F;

    function L(e, r) {
      while (!Object.prototype.hasOwnProperty.call(e, r)) {
        e = t.getPrototypeOf(e);
        if (e === null) break;
      }

      return e;
    }

    t.superPropBase = L;

    function D(e, r, n) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        t.get = D = Reflect.get;
      } else {
        t.get = D = function e(r, n, i) {
          var a = t.superPropBase(r, n);
          if (!a) return;
          var o = Object.getOwnPropertyDescriptor(a, n);

          if (o.get) {
            return o.get.call(i);
          }

          return o.value;
        };
      }

      return D(e, r, n || e);
    }

    t.get = D;

    function R(e, r, n, i) {
      if (typeof Reflect !== "undefined" && Reflect.set) {
        R = Reflect.set;
      } else {
        R = function e(r, n, i, a) {
          var o = t.superPropBase(r, n);
          var s;

          if (o) {
            s = Object.getOwnPropertyDescriptor(o, n);

            if (s.set) {
              s.set.call(a, i);
              return true;
            } else if (!s.writable) {
              return false;
            }
          }

          s = Object.getOwnPropertyDescriptor(a, n);

          if (s) {
            if (!s.writable) {
              return false;
            }

            s.value = i;
            Object.defineProperty(a, n, s);
          } else {
            t.defineProperty(a, n, i);
          }

          return true;
        };
      }

      return R(e, r, n, i);
    }

    function H(e, t, r, n, i) {
      var a = R(e, t, r, n || e);

      if (!a && i) {
        throw new Error("failed to set property");
      }

      return r;
    }

    t.set = H;

    function W(e, t) {
      if (!t) {
        t = e.slice(0);
      }

      return Object.freeze(Object.defineProperties(e, {
        raw: {
          value: Object.freeze(t)
        }
      }));
    }

    t.taggedTemplateLiteral = W;

    function z(e, t) {
      if (!t) {
        t = e.slice(0);
      }

      e.raw = t;
      return e;
    }

    t.taggedTemplateLiteralLoose = z;

    function U(e, r) {
      if (e === t.temporalUndefined) {
        throw new ReferenceError(r + " is not defined - temporal dead zone");
      } else {
        return e;
      }
    }

    t.temporalRef = U;

    function G(e) {
      throw new Error('"' + e + '" is read-only');
    }

    t.readOnlyError = G;

    function V(e) {
      throw new Error('Class "' + e + '" cannot be referenced in computed property keys.');
    }

    t.classNameTDZError = V;
    t.temporalUndefined = {};

    function Y(e, r) {
      return t.arrayWithHoles(e) || t.iterableToArrayLimit(e, r) || t.nonIterableRest();
    }

    t.slicedToArray = Y;

    function J(e, r) {
      return t.arrayWithHoles(e) || t.iterableToArrayLimitLoose(e, r) || t.nonIterableRest();
    }

    t.slicedToArrayLoose = J;

    function q(e) {
      return t.arrayWithHoles(e) || t.iterableToArray(e) || t.nonIterableRest();
    }

    t.toArray = q;

    function $(e) {
      return t.arrayWithoutHoles(e) || t.iterableToArray(e) || t.nonIterableSpread();
    }

    t.toConsumableArray = $;

    function K(e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = new Array(e.length); t < e.length; t++) {
          r[t] = e[t];
        }

        return r;
      }
    }

    t.arrayWithoutHoles = K;

    function Q(e) {
      if (Array.isArray(e)) return e;
    }

    t.arrayWithHoles = Q;

    function Z(e) {
      if (Symbol.iterator in Object(e) || Object.prototype.toString.call(e) === "[object Arguments]") return Array.from(e);
    }

    t.iterableToArray = Z;

    function ee(e, t) {
      var r = [];
      var n = true;
      var i = false;
      var a = undefined;

      try {
        for (var o = e[Symbol.iterator](), s; !(n = (s = o.next()).done); n = true) {
          r.push(s.value);
          if (t && r.length === t) break;
        }
      } catch (e) {
        i = true;
        a = e;
      } finally {
        try {
          if (!n && o["return"] != null) o["return"]();
        } finally {
          if (i) throw a;
        }
      }

      return r;
    }

    t.iterableToArrayLimit = ee;

    function te(e, t) {
      var r = [];

      for (var n = e[Symbol.iterator](), i; !(i = n.next()).done;) {
        r.push(i.value);
        if (t && r.length === t) break;
      }

      return r;
    }

    t.iterableToArrayLimitLoose = te;

    function re() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }

    t.nonIterableSpread = re;

    function ne() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }

    t.nonIterableRest = ne;

    function ie(e) {
      return function () {
        var t = e.apply(this, arguments);
        t.next();
        return t;
      };
    }

    t.skipFirstGeneratorNext = ie;

    function ae(e) {
      if (_typeof(e) === "symbol") {
        return e;
      } else {
        return String(e);
      }
    }

    t.toPropertyKey = ae;

    function oe(e, t) {
      throw new Error("Decorating class property failed. Please ensure that " + "proposal-class-properties is enabled and set to use loose mode. " + "To use proposal-class-properties in spec mode with decorators, wait for " + "the next major version of decorators in stage 2.");
    }

    t.initializerWarningHelper = oe;

    function se(e, t, r, n) {
      if (!r) return;
      Object.defineProperty(e, t, {
        enumerable: r.enumerable,
        configurable: r.configurable,
        writable: r.writable,
        value: r.initializer ? r.initializer.call(n) : void 0
      });
    }

    t.initializerDefineProperty = se;

    function ue(e, t, r, n, i) {
      var a = {};
      Object["ke" + "ys"](n).forEach(function (e) {
        a[e] = n[e];
      });
      a.enumerable = !!a.enumerable;
      a.configurable = !!a.configurable;

      if ("value" in a || a.initializer) {
        a.writable = true;
      }

      a = r.slice().reverse().reduce(function (r, n) {
        return n(e, t, r) || r;
      }, a);

      if (i && a.initializer !== void 0) {
        a.value = a.initializer ? a.initializer.call(i) : void 0;
        a.initializer = undefined;
      }

      if (a.initializer === void 0) {
        Object["define" + "Property"](e, t, a);
        a = null;
      }

      return a;
    }

    t.applyDecoratedDescriptor = ue;
    var le = 0;

    function fe(e) {
      return "__private_" + le++ + "_" + e;
    }

    t.classPrivateFieldLooseKey = fe;

    function ce(e, t) {
      if (!Object.prototype.hasOwnProperty.call(e, t)) {
        throw new TypeError("attempted to use private field on non-instance");
      }

      return e;
    }

    t.classPrivateFieldLooseBase = ce;

    function ve(e, t) {
      if (!t.has(e)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return t.get(e).value;
    }

    t.classPrivateFieldGet = ve;

    function he(e, t, r) {
      if (!t.has(e)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      var n = t.get(e);

      if (!n.writable) {
        throw new TypeError("attempted to set read only private field");
      }

      n.value = r;
      return r;
    }

    t.classPrivateFieldSet = he;
  })(typeof global === "undefined" ? window : global);

  !function (e) {
    "use strict";

    var t = Object.prototype;
    var r = t.hasOwnProperty;
    var n;
    var i = typeof Symbol === "function" ? Symbol : {};
    var a = i.iterator || "@@iterator";
    var o = i.asyncIterator || "@@asyncIterator";
    var s = i.toStringTag || "@@toStringTag";
    var u = e.regeneratorRuntime = {};

    function l(e, t, r, n) {
      var i = t && t.prototype instanceof y ? t : y;
      var a = Object.create(i.prototype);
      var o = new N(n || []);
      a._invoke = j(e, r, o);
      return a;
    }

    u.wrap = l;

    function f(e, t, r) {
      try {
        return {
          type: "normal",
          arg: e.call(t, r)
        };
      } catch (e) {
        return {
          type: "throw",
          arg: e
        };
      }
    }

    var c = "suspendedStart";
    var v = "suspendedYield";
    var h = "executing";
    var d = "completed";
    var p = {};

    function y() {}

    function g() {}

    function m() {}

    var b = {};

    b[a] = function () {
      return this;
    };

    var w = Object.getPrototypeOf;
    var S = w && w(w(P([])));

    if (S && S !== t && r.call(S, a)) {
      b = S;
    }

    var x = m.prototype = y.prototype = Object.create(b);
    g.prototype = x.constructor = m;
    m.constructor = g;
    m[s] = g.displayName = "GeneratorFunction";

    function E(e) {
      ["next", "throw", "return"].forEach(function (t) {
        e[t] = function (e) {
          return this._invoke(t, e);
        };
      });
    }

    u.isGeneratorFunction = function (e) {
      var t = typeof e === "function" && e.constructor;
      return t ? t === g || (t.displayName || t.name) === "GeneratorFunction" : false;
    };

    u.mark = function (e) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(e, m);
      } else {
        e.__proto__ = m;

        if (!(s in e)) {
          e[s] = "GeneratorFunction";
        }
      }

      e.prototype = Object.create(x);
      return e;
    };

    u.awrap = function (e) {
      return {
        __await: e
      };
    };

    function B(e) {
      function t(n, i, a, o) {
        var s = f(e[n], e, i);

        if (s.type === "throw") {
          o(s.arg);
        } else {
          var u = s.arg;
          var l = u.value;

          if (l && _typeof(l) === "object" && r.call(l, "__await")) {
            return Promise.resolve(l.__await).then(function (e) {
              t("next", e, a, o);
            }, function (e) {
              t("throw", e, a, o);
            });
          }

          return Promise.resolve(l).then(function (e) {
            u.value = e;
            a(u);
          }, o);
        }
      }

      var n;

      function i(e, r) {
        function i() {
          return new Promise(function (n, i) {
            t(e, r, n, i);
          });
        }

        return n = n ? n.then(i, i) : i();
      }

      this._invoke = i;
    }

    E(B.prototype);

    B.prototype[o] = function () {
      return this;
    };

    u.AsyncIterator = B;

    u.async = function (e, t, r, n) {
      var i = new B(l(e, t, r, n));
      return u.isGeneratorFunction(t) ? i : i.next().then(function (e) {
        return e.done ? e.value : i.next();
      });
    };

    function j(e, t, r) {
      var n = c;
      return function i(a, o) {
        if (n === h) {
          throw new Error("Generator is already running");
        }

        if (n === d) {
          if (a === "throw") {
            throw o;
          }

          return A();
        }

        r.method = a;
        r.arg = o;

        while (true) {
          var s = r.delegate;

          if (s) {
            var u = _(s, r);

            if (u) {
              if (u === p) continue;
              return u;
            }
          }

          if (r.method === "next") {
            r.sent = r._sent = r.arg;
          } else if (r.method === "throw") {
            if (n === c) {
              n = d;
              throw r.arg;
            }

            r.dispatchException(r.arg);
          } else if (r.method === "return") {
            r.abrupt("return", r.arg);
          }

          n = h;
          var l = f(e, t, r);

          if (l.type === "normal") {
            n = r.done ? d : v;

            if (l.arg === p) {
              continue;
            }

            return {
              value: l.arg,
              done: r.done
            };
          } else if (l.type === "throw") {
            n = d;
            r.method = "throw";
            r.arg = l.arg;
          }
        }
      };
    }

    function _(e, t) {
      var r = e.iterator[t.method];

      if (r === n) {
        t.delegate = null;

        if (t.method === "throw") {
          if (e.iterator.return) {
            t.method = "return";
            t.arg = n;

            _(e, t);

            if (t.method === "throw") {
              return p;
            }
          }

          t.method = "throw";
          t.arg = new TypeError("The iterator does not provide a 'throw' method");
        }

        return p;
      }

      var i = f(r, e.iterator, t.arg);

      if (i.type === "throw") {
        t.method = "throw";
        t.arg = i.arg;
        t.delegate = null;
        return p;
      }

      var a = i.arg;

      if (!a) {
        t.method = "throw";
        t.arg = new TypeError("iterator result is not an object");
        t.delegate = null;
        return p;
      }

      if (a.done) {
        t[e.resultName] = a.value;
        t.next = e.nextLoc;

        if (t.method !== "return") {
          t.method = "next";
          t.arg = n;
        }
      } else {
        return a;
      }

      t.delegate = null;
      return p;
    }

    E(x);
    x[s] = "Generator";

    x[a] = function () {
      return this;
    };

    x.toString = function () {
      return "[object Generator]";
    };

    function X(e) {
      var t = {
        tryLoc: e[0]
      };

      if (1 in e) {
        t.catchLoc = e[1];
      }

      if (2 in e) {
        t.finallyLoc = e[2];
        t.afterLoc = e[3];
      }

      this.tryEntries.push(t);
    }

    function O(e) {
      var t = e.completion || {};
      t.type = "normal";
      delete t.arg;
      e.completion = t;
    }

    function N(e) {
      this.tryEntries = [{
        tryLoc: "root"
      }];
      e.forEach(X, this);
      this.reset(true);
    }

    u.keys = function (e) {
      var t = [];

      for (var r in e) {
        t.push(r);
      }

      t.reverse();
      return function r() {
        while (t.length) {
          var n = t.pop();

          if (n in e) {
            r.value = n;
            r.done = false;
            return r;
          }
        }

        r.done = true;
        return r;
      };
    };

    function P(e) {
      if (e) {
        var t = e[a];

        if (t) {
          return t.call(e);
        }

        if (typeof e.next === "function") {
          return e;
        }

        if (!isNaN(e.length)) {
          var i = -1,
              o = function t() {
            while (++i < e.length) {
              if (r.call(e, i)) {
                t.value = e[i];
                t.done = false;
                return t;
              }
            }

            t.value = n;
            t.done = true;
            return t;
          };

          return o.next = o;
        }
      }

      return {
        next: A
      };
    }

    u.values = P;

    function A() {
      return {
        value: n,
        done: true
      };
    }

    N.prototype = {
      constructor: N,
      reset: function reset(e) {
        this.prev = 0;
        this.next = 0;
        this.sent = this._sent = n;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = n;
        this.tryEntries.forEach(O);

        if (!e) {
          for (var t in this) {
            if (t.charAt(0) === "t" && r.call(this, t) && !isNaN(+t.slice(1))) {
              this[t] = n;
            }
          }
        }
      },
      stop: function stop() {
        this.done = true;
        var e = this.tryEntries[0];
        var t = e.completion;

        if (t.type === "throw") {
          throw t.arg;
        }

        return this.rval;
      },
      dispatchException: function dispatchException(e) {
        if (this.done) {
          throw e;
        }

        var t = this;

        function i(r, i) {
          s.type = "throw";
          s.arg = e;
          t.next = r;

          if (i) {
            t.method = "next";
            t.arg = n;
          }

          return !!i;
        }

        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
          var o = this.tryEntries[a];
          var s = o.completion;

          if (o.tryLoc === "root") {
            return i("end");
          }

          if (o.tryLoc <= this.prev) {
            var u = r.call(o, "catchLoc");
            var l = r.call(o, "finallyLoc");

            if (u && l) {
              if (this.prev < o.catchLoc) {
                return i(o.catchLoc, true);
              } else if (this.prev < o.finallyLoc) {
                return i(o.finallyLoc);
              }
            } else if (u) {
              if (this.prev < o.catchLoc) {
                return i(o.catchLoc, true);
              }
            } else if (l) {
              if (this.prev < o.finallyLoc) {
                return i(o.finallyLoc);
              }
            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },
      abrupt: function abrupt(e, t) {
        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
          var i = this.tryEntries[n];

          if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
            var a = i;
            break;
          }
        }

        if (a && (e === "break" || e === "continue") && a.tryLoc <= t && t <= a.finallyLoc) {
          a = null;
        }

        var o = a ? a.completion : {};
        o.type = e;
        o.arg = t;

        if (a) {
          this.method = "next";
          this.next = a.finallyLoc;
          return p;
        }

        return this.complete(o);
      },
      complete: function complete(e, t) {
        if (e.type === "throw") {
          throw e.arg;
        }

        if (e.type === "break" || e.type === "continue") {
          this.next = e.arg;
        } else if (e.type === "return") {
          this.rval = this.arg = e.arg;
          this.method = "return";
          this.next = "end";
        } else if (e.type === "normal" && t) {
          this.next = t;
        }

        return p;
      },
      finish: function finish(e) {
        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
          var r = this.tryEntries[t];

          if (r.finallyLoc === e) {
            this.complete(r.completion, r.afterLoc);
            O(r);
            return p;
          }
        }
      },
      catch: function _catch(e) {
        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
          var r = this.tryEntries[t];

          if (r.tryLoc === e) {
            var n = r.completion;

            if (n.type === "throw") {
              var i = n.arg;
              O(r);
            }

            return i;
          }
        }

        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(e, t, r) {
        this.delegate = {
          iterator: P(e),
          resultName: t,
          nextLoc: r
        };

        if (this.method === "next") {
          this.arg = n;
        }

        return p;
      }
    };
  }(function () {
    return this;
  }() || Function("return this")());

  (function (e) {
    "use strict";

    function t(e, t) {
      return t = {
        exports: {}
      }, e(t, t.exports), t.exports;
    }

    var r = t(function (e) {
      var t = e.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
      if (typeof __g == "number") __g = t;
    });
    var n = {}.hasOwnProperty;

    var i = function i(e, t) {
      return n.call(e, t);
    };

    var a = function a(e) {
      try {
        return !!e();
      } catch (e) {
        return true;
      }
    };

    var o = !a(function () {
      return Object.defineProperty({}, "a", {
        get: function e() {
          return 7;
        }
      }).a != 7;
    });
    var s = t(function (e) {
      var t = e.exports = {
        version: "2.6.3"
      };
      if (typeof __e == "number") __e = t;
    });
    var u = s.version;

    var l = function l(e) {
      return babelHelpers.typeof(e) === "object" ? e !== null : typeof e === "function";
    };

    var f = function f(e) {
      if (!l(e)) throw TypeError(e + " is not an object!");
      return e;
    };

    var c = r.document;
    var v = l(c) && l(c.createElement);

    var h = function h(e) {
      return v ? c.createElement(e) : {};
    };

    var d = !o && !a(function () {
      return Object.defineProperty(h("div"), "a", {
        get: function e() {
          return 7;
        }
      }).a != 7;
    });

    var p = function p(e, t) {
      if (!l(e)) return e;
      var r, n;
      if (t && typeof (r = e.toString) == "function" && !l(n = r.call(e))) return n;
      if (typeof (r = e.valueOf) == "function" && !l(n = r.call(e))) return n;
      if (!t && typeof (r = e.toString) == "function" && !l(n = r.call(e))) return n;
      throw TypeError("Can't convert object to primitive value");
    };

    var y = Object.defineProperty;
    var g = o ? Object.defineProperty : function e(t, r, n) {
      f(t);
      r = p(r, true);
      f(n);
      if (d) try {
        return y(t, r, n);
      } catch (e) {}
      if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
      if ("value" in n) t[r] = n.value;
      return t;
    };
    var m = {
      f: g
    };

    var b = function b(e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t
      };
    };

    var w = o ? function (e, t, r) {
      return m.f(e, t, b(1, r));
    } : function (e, t, r) {
      e[t] = r;
      return e;
    };
    var S = 0;
    var x = Math.random();

    var E = function E(e) {
      return "Symbol(".concat(e === undefined ? "" : e, ")_", (++S + x).toString(36));
    };

    var B = t(function (e) {
      var t = E("src");
      var n = "toString";
      var a = Function[n];
      var o = ("" + a).split(n);

      s.inspectSource = function (e) {
        return a.call(e);
      };

      (e.exports = function (e, n, a, s) {
        var u = typeof a == "function";
        if (u) i(a, "name") || w(a, "name", n);
        if (e[n] === a) return;
        if (u) i(a, t) || w(a, t, e[n] ? "" + e[n] : o.join(String(n)));

        if (e === r) {
          e[n] = a;
        } else if (!s) {
          delete e[n];
          w(e, n, a);
        } else if (e[n]) {
          e[n] = a;
        } else {
          w(e, n, a);
        }
      })(Function.prototype, n, function e() {
        return typeof this == "function" && this[t] || a.call(this);
      });
    });

    var j = function j(e) {
      if (typeof e != "function") throw TypeError(e + " is not a function!");
      return e;
    };

    var _ = function _(e, t, r) {
      j(e);
      if (t === undefined) return e;

      switch (r) {
        case 1:
          return function (r) {
            return e.call(t, r);
          };

        case 2:
          return function (r, n) {
            return e.call(t, r, n);
          };

        case 3:
          return function (r, n, i) {
            return e.call(t, r, n, i);
          };
      }

      return function () {
        return e.apply(t, arguments);
      };
    };

    var X = "prototype";

    var O = function e(t, n, i) {
      var a = t & e.F;
      var o = t & e.G;
      var u = t & e.S;
      var l = t & e.P;
      var f = t & e.B;
      var c = o ? r : u ? r[n] || (r[n] = {}) : (r[n] || {})[X];
      var v = o ? s : s[n] || (s[n] = {});
      var h = v[X] || (v[X] = {});
      var d, p, y, g;
      if (o) i = n;

      for (d in i) {
        p = !a && c && c[d] !== undefined;
        y = (p ? c : i)[d];
        g = f && p ? _(y, r) : l && typeof y == "function" ? _(Function.call, y) : y;
        if (c) B(c, d, y, t & e.U);
        if (v[d] != y) w(v, d, g);
        if (l && h[d] != y) h[d] = y;
      }
    };

    O.F = 1;
    O.G = 2;
    O.S = 4;
    O.P = 8;
    O.B = 16;
    O.W = 32;
    O.U = 64;
    O.R = 128;
    var N = O;
    var P = t(function (e) {
      var t = E("meta");
      var r = m.f;
      var n = 0;

      var o = Object.isExtensible || function () {
        return true;
      };

      var s = !a(function () {
        return o(Object.preventExtensions({}));
      });

      var u = function e(i) {
        r(i, t, {
          value: {
            i: "O" + ++n,
            w: {}
          }
        });
      };

      var f = function e(r, n) {
        if (!l(r)) return babelHelpers.typeof(r) == "symbol" ? r : (typeof r == "string" ? "S" : "P") + r;

        if (!i(r, t)) {
          if (!o(r)) return "F";
          if (!n) return "E";
          u(r);
        }

        return r[t].i;
      };

      var c = function e(r, n) {
        if (!i(r, t)) {
          if (!o(r)) return true;
          if (!n) return false;
          u(r);
        }

        return r[t].w;
      };

      var v = function e(r) {
        if (s && h.NEED && o(r) && !i(r, t)) u(r);
        return r;
      };

      var h = e.exports = {
        KEY: t,
        NEED: false,
        fastKey: f,
        getWeak: c,
        onFreeze: v
      };
    });
    var A = P.KEY;
    var T = P.NEED;
    var C = P.fastKey;
    var k = P.getWeak;
    var I = P.onFreeze;
    var M = false;
    var F = t(function (e) {
      var t = "__core-js_shared__";
      var n = r[t] || (r[t] = {});
      (e.exports = function (e, t) {
        return n[e] || (n[e] = t !== undefined ? t : {});
      })("versions", []).push({
        version: s.version,
        mode: M ? "pure" : "global",
        copyright: "(c) 2019 Denis Pushkarev (zloirock.ru)"
      });
    });
    var L = t(function (e) {
      var t = F("wks");
      var n = r.Symbol;
      var i = typeof n == "function";

      var a = e.exports = function (e) {
        return t[e] || (t[e] = i && n[e] || (i ? n : E)("Symbol." + e));
      };

      a.store = t;
    });
    var D = m.f;
    var R = L("toStringTag");

    var H = function H(e, t, r) {
      if (e && !i(e = r ? e : e.prototype, R)) D(e, R, {
        configurable: true,
        value: t
      });
    };

    var W = L;
    var z = {
      f: W
    };
    var U = m.f;

    var G = function G(e) {
      var t = s.Symbol || (s.Symbol = M ? {} : r.Symbol || {});
      if (e.charAt(0) != "_" && !(e in t)) U(t, e, {
        value: z.f(e)
      });
    };

    var V = {}.toString;

    var Y = function Y(e) {
      return V.call(e).slice(8, -1);
    };

    var J = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
      return Y(e) == "String" ? e.split("") : Object(e);
    };

    var q = function q(e) {
      if (e == undefined) throw TypeError("Can't call method on  " + e);
      return e;
    };

    var $ = function $(e) {
      return J(q(e));
    };

    var K = Math.ceil;
    var Q = Math.floor;

    var Z = function Z(e) {
      return isNaN(e = +e) ? 0 : (e > 0 ? Q : K)(e);
    };

    var ee = Math.min;

    var te = function te(e) {
      return e > 0 ? ee(Z(e), 9007199254740991) : 0;
    };

    var re = Math.max;
    var ne = Math.min;

    var ie = function ie(e, t) {
      e = Z(e);
      return e < 0 ? re(e + t, 0) : ne(e, t);
    };

    var ae = function ae(e) {
      return function (t, r, n) {
        var i = $(t);
        var a = te(i.length);
        var o = ie(n, a);
        var s;
        if (e && r != r) while (a > o) {
          s = i[o++];
          if (s != s) return true;
        } else for (; a > o; o++) {
          if (e || o in i) {
            if (i[o] === r) return e || o || 0;
          }
        }
        return !e && -1;
      };
    };

    var oe = F("keys");

    var se = function se(e) {
      return oe[e] || (oe[e] = E(e));
    };

    var ue = ae(false);
    var le = se("IE_PROTO");

    var fe = function fe(e, t) {
      var r = $(e);
      var n = 0;
      var a = [];
      var o;

      for (o in r) {
        if (o != le) i(r, o) && a.push(o);
      }

      while (t.length > n) {
        if (i(r, o = t[n++])) {
          ~ue(a, o) || a.push(o);
        }
      }

      return a;
    };

    var ce = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");

    var ve = Object.keys || function e(t) {
      return fe(t, ce);
    };

    var he = Object.getOwnPropertySymbols;
    var de = {
      f: he
    };
    var pe = {}.propertyIsEnumerable;
    var ye = {
      f: pe
    };

    var ge = function ge(e) {
      var t = ve(e);
      var r = de.f;

      if (r) {
        var n = r(e);
        var i = ye.f;
        var a = 0;
        var o;

        while (n.length > a) {
          if (i.call(e, o = n[a++])) t.push(o);
        }
      }

      return t;
    };

    var me = Array.isArray || function e(t) {
      return Y(t) == "Array";
    };

    var be = o ? Object.defineProperties : function e(t, r) {
      f(t);
      var n = ve(r);
      var i = n.length;
      var a = 0;
      var o;

      while (i > a) {
        m.f(t, o = n[a++], r[o]);
      }

      return t;
    };
    var we = r.document;
    var Se = we && we.documentElement;
    var xe = se("IE_PROTO");

    var Ee = function e() {};

    var Be = "prototype";

    var je = function e() {
      var t = h("iframe");
      var r = ce.length;
      var n = "<";
      var i = ">";
      var a;
      t.style.display = "none";
      Se.appendChild(t);
      t.src = "javascript:";
      a = t.contentWindow.document;
      a.open();
      a.write(n + "script" + i + "document.F=Object" + n + "/script" + i);
      a.close();
      je = a.F;

      while (r--) {
        delete je[Be][ce[r]];
      }

      return je();
    };

    var _e = Object.create || function e(t, r) {
      var n;

      if (t !== null) {
        Ee[Be] = f(t);
        n = new Ee();
        Ee[Be] = null;
        n[xe] = t;
      } else n = je();

      return r === undefined ? n : be(n, r);
    };

    var Xe = ce.concat("length", "prototype");

    var Oe = Object.getOwnPropertyNames || function e(t) {
      return fe(t, Xe);
    };

    var Ne = {
      f: Oe
    };
    var Pe = Ne.f;
    var Ae = {}.toString;
    var Te = (typeof window === "undefined" ? "undefined" : babelHelpers.typeof(window)) == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

    var Ce = function e(t) {
      try {
        return Pe(t);
      } catch (e) {
        return Te.slice();
      }
    };

    var ke = function e(t) {
      return Te && Ae.call(t) == "[object Window]" ? Ce(t) : Pe($(t));
    };

    var Ie = {
      f: ke
    };
    var Me = Object.getOwnPropertyDescriptor;
    var Fe = o ? Me : function e(t, r) {
      t = $(t);
      r = p(r, true);
      if (d) try {
        return Me(t, r);
      } catch (e) {}
      if (i(t, r)) return b(!ye.f.call(t, r), t[r]);
    };
    var Le = {
      f: Fe
    };
    var De = P.KEY;
    var Re = Le.f;
    var He = m.f;
    var We = Ie.f;
    var ze = r.Symbol;
    var Ue = r.JSON;
    var Ge = Ue && Ue.stringify;
    var Ve = "prototype";
    var Ye = L("_hidden");
    var Je = L("toPrimitive");
    var qe = {}.propertyIsEnumerable;
    var $e = F("symbol-registry");
    var Ke = F("symbols");
    var Qe = F("op-symbols");
    var Ze = Object[Ve];
    var et = typeof ze == "function";
    var tt = r.QObject;
    var rt = !tt || !tt[Ve] || !tt[Ve].findChild;
    var nt = o && a(function () {
      return _e(He({}, "a", {
        get: function e() {
          return He(this, "a", {
            value: 7
          }).a;
        }
      })).a != 7;
    }) ? function (e, t, r) {
      var n = Re(Ze, t);
      if (n) delete Ze[t];
      He(e, t, r);
      if (n && e !== Ze) He(Ze, t, n);
    } : He;

    var it = function e(t) {
      var r = Ke[t] = _e(ze[Ve]);

      r._k = t;
      return r;
    };

    var at = et && babelHelpers.typeof(ze.iterator) == "symbol" ? function (e) {
      return babelHelpers.typeof(e) == "symbol";
    } : function (e) {
      return e instanceof ze;
    };

    var ot = function e(t, r, n) {
      if (t === Ze) ot(Qe, r, n);
      f(t);
      r = p(r, true);
      f(n);

      if (i(Ke, r)) {
        if (!n.enumerable) {
          if (!i(t, Ye)) He(t, Ye, b(1, {}));
          t[Ye][r] = true;
        } else {
          if (i(t, Ye) && t[Ye][r]) t[Ye][r] = false;
          n = _e(n, {
            enumerable: b(0, false)
          });
        }

        return nt(t, r, n);
      }

      return He(t, r, n);
    };

    var st = function e(t, r) {
      f(t);
      var n = ge(r = $(r));
      var i = 0;
      var a = n.length;
      var o;

      while (a > i) {
        ot(t, o = n[i++], r[o]);
      }

      return t;
    };

    var ut = function e(t, r) {
      return r === undefined ? _e(t) : st(_e(t), r);
    };

    var lt = function e(t) {
      var r = qe.call(this, t = p(t, true));
      if (this === Ze && i(Ke, t) && !i(Qe, t)) return false;
      return r || !i(this, t) || !i(Ke, t) || i(this, Ye) && this[Ye][t] ? r : true;
    };

    var ft = function e(t, r) {
      t = $(t);
      r = p(r, true);
      if (t === Ze && i(Ke, r) && !i(Qe, r)) return;
      var n = Re(t, r);
      if (n && i(Ke, r) && !(i(t, Ye) && t[Ye][r])) n.enumerable = true;
      return n;
    };

    var ct = function e(t) {
      var r = We($(t));
      var n = [];
      var a = 0;
      var o;

      while (r.length > a) {
        if (!i(Ke, o = r[a++]) && o != Ye && o != De) n.push(o);
      }

      return n;
    };

    var vt = function e(t) {
      var r = t === Ze;
      var n = We(r ? Qe : $(t));
      var a = [];
      var o = 0;
      var s;

      while (n.length > o) {
        if (i(Ke, s = n[o++]) && (r ? i(Ze, s) : true)) a.push(Ke[s]);
      }

      return a;
    };

    if (!et) {
      ze = function e() {
        if (this instanceof ze) throw TypeError("Symbol is not a constructor!");
        var t = E(arguments.length > 0 ? arguments[0] : undefined);

        var r = function e(r) {
          if (this === Ze) e.call(Qe, r);
          if (i(this, Ye) && i(this[Ye], t)) this[Ye][t] = false;
          nt(this, t, b(1, r));
        };

        if (o && rt) nt(Ze, t, {
          configurable: true,
          set: r
        });
        return it(t);
      };

      B(ze[Ve], "toString", function e() {
        return this._k;
      });
      Le.f = ft;
      m.f = ot;
      Ne.f = Ie.f = ct;
      ye.f = lt;
      de.f = vt;

      if (o && !M) {
        B(Ze, "propertyIsEnumerable", lt, true);
      }

      z.f = function (e) {
        return it(L(e));
      };
    }

    N(N.G + N.W + N.F * !et, {
      Symbol: ze
    });

    for (var ht = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), dt = 0; ht.length > dt;) {
      L(ht[dt++]);
    }

    for (var pt = ve(L.store), yt = 0; pt.length > yt;) {
      G(pt[yt++]);
    }

    N(N.S + N.F * !et, "Symbol", {
      for: function e(t) {
        return i($e, t += "") ? $e[t] : $e[t] = ze(t);
      },
      keyFor: function e(t) {
        if (!at(t)) throw TypeError(t + " is not a symbol!");

        for (var r in $e) {
          if ($e[r] === t) return r;
        }
      },
      useSetter: function e() {
        rt = true;
      },
      useSimple: function e() {
        rt = false;
      }
    });
    N(N.S + N.F * !et, "Object", {
      create: ut,
      defineProperty: ot,
      defineProperties: st,
      getOwnPropertyDescriptor: ft,
      getOwnPropertyNames: ct,
      getOwnPropertySymbols: vt
    });
    Ue && N(N.S + N.F * (!et || a(function () {
      var e = ze();
      return Ge([e]) != "[null]" || Ge({
        a: e
      }) != "{}" || Ge(Object(e)) != "{}";
    })), "JSON", {
      stringify: function e(t) {
        var r = [t];
        var n = 1;
        var i, a;

        while (arguments.length > n) {
          r.push(arguments[n++]);
        }

        a = i = r[1];
        if (!l(i) && t === undefined || at(t)) return;
        if (!me(i)) i = function e(t, r) {
          if (typeof a == "function") r = a.call(this, t, r);
          if (!at(r)) return r;
        };
        r[1] = i;
        return Ge.apply(Ue, r);
      }
    });
    ze[Ve][Je] || w(ze[Ve], Je, ze[Ve].valueOf);
    H(ze, "Symbol");
    H(Math, "Math", true);
    H(r.JSON, "JSON", true);
    N(N.S, "Object", {
      create: _e
    });
    N(N.S + N.F * !o, "Object", {
      defineProperty: m.f
    });
    N(N.S + N.F * !o, "Object", {
      defineProperties: be
    });

    var gt = function gt(e, t) {
      var r = (s.Object || {})[e] || Object[e];
      var n = {};
      n[e] = t(r);
      N(N.S + N.F * a(function () {
        r(1);
      }), "Object", n);
    };

    var mt = Le.f;
    gt("getOwnPropertyDescriptor", function () {
      return function e(t, r) {
        return mt($(t), r);
      };
    });

    var bt = function bt(e) {
      return Object(q(e));
    };

    var wt = se("IE_PROTO");
    var St = Object.prototype;

    var xt = Object.getPrototypeOf || function (e) {
      e = bt(e);
      if (i(e, wt)) return e[wt];

      if (typeof e.constructor == "function" && e instanceof e.constructor) {
        return e.constructor.prototype;
      }

      return e instanceof Object ? St : null;
    };

    gt("getPrototypeOf", function () {
      return function e(t) {
        return xt(bt(t));
      };
    });
    gt("keys", function () {
      return function e(t) {
        return ve(bt(t));
      };
    });
    gt("getOwnPropertyNames", function () {
      return Ie.f;
    });
    var Et = P.onFreeze;
    gt("freeze", function (e) {
      return function t(r) {
        return e && l(r) ? e(Et(r)) : r;
      };
    });
    var Bt = P.onFreeze;
    gt("seal", function (e) {
      return function t(r) {
        return e && l(r) ? e(Bt(r)) : r;
      };
    });
    var jt = P.onFreeze;
    gt("preventExtensions", function (e) {
      return function t(r) {
        return e && l(r) ? e(jt(r)) : r;
      };
    });
    gt("isFrozen", function (e) {
      return function t(r) {
        return l(r) ? e ? e(r) : false : true;
      };
    });
    gt("isSealed", function (e) {
      return function t(r) {
        return l(r) ? e ? e(r) : false : true;
      };
    });
    gt("isExtensible", function (e) {
      return function t(r) {
        return l(r) ? e ? e(r) : true : false;
      };
    });
    var _t = Object.assign;
    var Xt = !_t || a(function () {
      var e = {};
      var t = {};
      var r = Symbol();
      var n = "abcdefghijklmnopqrst";
      e[r] = 7;
      n.split("").forEach(function (e) {
        t[e] = e;
      });
      return _t({}, e)[r] != 7 || Object.keys(_t({}, t)).join("") != n;
    }) ? function e(t, r) {
      var n = bt(t);
      var i = arguments.length;
      var a = 1;
      var o = de.f;
      var s = ye.f;

      while (i > a) {
        var u = J(arguments[a++]);
        var l = o ? ve(u).concat(o(u)) : ve(u);
        var f = l.length;
        var c = 0;
        var v;

        while (f > c) {
          if (s.call(u, v = l[c++])) n[v] = u[v];
        }
      }

      return n;
    } : _t;
    N(N.S + N.F, "Object", {
      assign: Xt
    });

    var Ot = Object.is || function e(t, r) {
      return t === r ? t !== 0 || 1 / t === 1 / r : t != t && r != r;
    };

    N(N.S, "Object", {
      is: Ot
    });

    var Nt = function e(t, r) {
      f(t);
      if (!l(r) && r !== null) throw TypeError(r + ": can't set as prototype!");
    };

    var Pt = {
      set: Object.setPrototypeOf || ("__proto__" in {} ? function (e, t, r) {
        try {
          r = _(Function.call, Le.f(Object.prototype, "__proto__").set, 2);
          r(e, []);
          t = !(e instanceof Array);
        } catch (e) {
          t = true;
        }

        return function e(n, i) {
          Nt(n, i);
          if (t) n.__proto__ = i;else r(n, i);
          return n;
        };
      }({}, false) : undefined),
      check: Nt
    };
    N(N.S, "Object", {
      setPrototypeOf: Pt.set
    });
    var At = L("toStringTag");
    var Tt = Y(function () {
      return arguments;
    }()) == "Arguments";

    var Ct = function e(t, r) {
      try {
        return t[r];
      } catch (e) {}
    };

    var kt = function kt(e) {
      var t, r, n;
      return e === undefined ? "Undefined" : e === null ? "Null" : typeof (r = Ct(t = Object(e), At)) == "string" ? r : Tt ? Y(t) : (n = Y(t)) == "Object" && typeof t.callee == "function" ? "Arguments" : n;
    };

    var It = {};
    It[L("toStringTag")] = "z";

    if (It + "" != "[object z]") {
      B(Object.prototype, "toString", function e() {
        return "[object " + kt(this) + "]";
      }, true);
    }

    var Mt = function Mt(e, t, r) {
      var n = r === undefined;

      switch (t.length) {
        case 0:
          return n ? e() : e.call(r);

        case 1:
          return n ? e(t[0]) : e.call(r, t[0]);

        case 2:
          return n ? e(t[0], t[1]) : e.call(r, t[0], t[1]);

        case 3:
          return n ? e(t[0], t[1], t[2]) : e.call(r, t[0], t[1], t[2]);

        case 4:
          return n ? e(t[0], t[1], t[2], t[3]) : e.call(r, t[0], t[1], t[2], t[3]);
      }

      return e.apply(r, t);
    };

    var Ft = [].slice;
    var Lt = {};

    var Dt = function e(t, r, n) {
      if (!(r in Lt)) {
        for (var i = [], a = 0; a < r; a++) {
          i[a] = "a[" + a + "]";
        }

        Lt[r] = Function("F,a", "return new F(" + i.join(",") + ")");
      }

      return Lt[r](t, n);
    };

    var Rt = Function.bind || function e(t) {
      var r = j(this);
      var n = Ft.call(arguments, 1);

      var i = function e() {
        var i = n.concat(Ft.call(arguments));
        return this instanceof e ? Dt(r, i.length, i) : Mt(r, i, t);
      };

      if (l(r.prototype)) i.prototype = r.prototype;
      return i;
    };

    N(N.P, "Function", {
      bind: Rt
    });
    var Ht = m.f;
    var Wt = Function.prototype;
    var zt = /^\s*function ([^ (]*)/;
    var Ut = "name";
    Ut in Wt || o && Ht(Wt, Ut, {
      configurable: true,
      get: function e() {
        try {
          return ("" + this).match(zt)[1];
        } catch (e) {
          return "";
        }
      }
    });
    var Gt = L("hasInstance");
    var Vt = Function.prototype;
    if (!(Gt in Vt)) m.f(Vt, Gt, {
      value: function e(t) {
        if (typeof this != "function" || !l(t)) return false;
        if (!l(this.prototype)) return t instanceof this;

        while (t = xt(t)) {
          if (this.prototype === t) return true;
        }

        return false;
      }
    });
    var Yt = "\t\n\v\f\r   ᠎    " + "\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
    var Jt = "[" + Yt + "]";
    var qt = "​";
    var $t = RegExp("^" + Jt + Jt + "*");
    var Kt = RegExp(Jt + Jt + "*$");

    var Qt = function e(t, r, n) {
      var i = {};
      var o = a(function () {
        return !!Yt[t]() || qt[t]() != qt;
      });
      var s = i[t] = o ? r(Zt) : Yt[t];
      if (n) i[n] = s;
      N(N.P + N.F * o, "String", i);
    };

    var Zt = Qt.trim = function (e, t) {
      e = String(q(e));
      if (t & 1) e = e.replace($t, "");
      if (t & 2) e = e.replace(Kt, "");
      return e;
    };

    var er = Qt;
    var tr = r.parseInt;
    var rr = er.trim;
    var nr = /^[-+]?0[xX]/;
    var ir = tr(Yt + "08") !== 8 || tr(Yt + "0x16") !== 22 ? function e(t, r) {
      var n = rr(String(t), 3);
      return tr(n, r >>> 0 || (nr.test(n) ? 16 : 10));
    } : tr;
    N(N.G + N.F * (parseInt != ir), {
      parseInt: ir
    });
    var ar = r.parseFloat;
    var or = er.trim;
    var sr = 1 / ar(Yt + "-0") !== -Infinity ? function e(t) {
      var r = or(String(t), 3);
      var n = ar(r);
      return n === 0 && r.charAt(0) == "-" ? -0 : n;
    } : ar;
    N(N.G + N.F * (parseFloat != sr), {
      parseFloat: sr
    });
    var ur = Pt.set;

    var lr = function lr(e, t, r) {
      var n = t.constructor;
      var i;

      if (n !== r && typeof n == "function" && (i = n.prototype) !== r.prototype && l(i) && ur) {
        ur(e, i);
      }

      return e;
    };

    var fr = Ne.f;
    var cr = Le.f;
    var vr = m.f;
    var hr = er.trim;
    var dr = "Number";
    var pr = r[dr];
    var yr = pr;
    var gr = pr.prototype;
    var mr = Y(_e(gr)) == dr;
    var br = "trim" in String.prototype;

    var wr = function e(t) {
      var r = p(t, false);

      if (typeof r == "string" && r.length > 2) {
        r = br ? r.trim() : hr(r, 3);
        var n = r.charCodeAt(0);
        var i, a, o;

        if (n === 43 || n === 45) {
          i = r.charCodeAt(2);
          if (i === 88 || i === 120) return NaN;
        } else if (n === 48) {
          switch (r.charCodeAt(1)) {
            case 66:
            case 98:
              a = 2;
              o = 49;
              break;

            case 79:
            case 111:
              a = 8;
              o = 55;
              break;

            default:
              return +r;
          }

          for (var s = r.slice(2), u = 0, l = s.length, f; u < l; u++) {
            f = s.charCodeAt(u);
            if (f < 48 || f > o) return NaN;
          }

          return parseInt(s, a);
        }
      }

      return +r;
    };

    if (!pr(" 0o1") || !pr("0b1") || pr("+0x1")) {
      pr = function e(t) {
        var r = arguments.length < 1 ? 0 : t;
        var n = this;
        return n instanceof pr && (mr ? a(function () {
          gr.valueOf.call(n);
        }) : Y(n) != dr) ? lr(new yr(wr(r)), n, pr) : wr(r);
      };

      for (var Sr = o ? fr(yr) : ("MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY," + "EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER," + "MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger").split(","), xr = 0, Er; Sr.length > xr; xr++) {
        if (i(yr, Er = Sr[xr]) && !i(pr, Er)) {
          vr(pr, Er, cr(yr, Er));
        }
      }

      pr.prototype = gr;
      gr.constructor = pr;
      B(r, dr, pr);
    }

    var Br = function Br(e, t) {
      if (typeof e != "number" && Y(e) != "Number") throw TypeError(t);
      return +e;
    };

    var jr = function e(t) {
      var r = String(q(this));
      var n = "";
      var i = Z(t);
      if (i < 0 || i == Infinity) throw RangeError("Count can't be negative");

      for (; i > 0; (i >>>= 1) && (r += r)) {
        if (i & 1) n += r;
      }

      return n;
    };

    var _r = 1..toFixed;
    var Xr = Math.floor;
    var Or = [0, 0, 0, 0, 0, 0];
    var Nr = "Number.toFixed: incorrect invocation!";
    var Pr = "0";

    var Ar = function e(t, r) {
      var n = -1;
      var i = r;

      while (++n < 6) {
        i += t * Or[n];
        Or[n] = i % 1e7;
        i = Xr(i / 1e7);
      }
    };

    var Tr = function e(t) {
      var r = 6;
      var n = 0;

      while (--r >= 0) {
        n += Or[r];
        Or[r] = Xr(n / t);
        n = n % t * 1e7;
      }
    };

    var Cr = function e() {
      var t = 6;
      var r = "";

      while (--t >= 0) {
        if (r !== "" || t === 0 || Or[t] !== 0) {
          var n = String(Or[t]);
          r = r === "" ? n : r + jr.call(Pr, 7 - n.length) + n;
        }
      }

      return r;
    };

    var kr = function e(t, r, n) {
      return r === 0 ? n : r % 2 === 1 ? e(t, r - 1, n * t) : e(t * t, r / 2, n);
    };

    var Ir = function e(t) {
      var r = 0;
      var n = t;

      while (n >= 4096) {
        r += 12;
        n /= 4096;
      }

      while (n >= 2) {
        r += 1;
        n /= 2;
      }

      return r;
    };

    N(N.P + N.F * (!!_r && (8e-5.toFixed(3) !== "0.000" || .9.toFixed(0) !== "1" || 1.255.toFixed(2) !== "1.25" || 0xde0b6b3a7640080.toFixed(0) !== "1000000000000000128") || !a(function () {
      _r.call({});
    })), "Number", {
      toFixed: function e(t) {
        var r = Br(this, Nr);
        var n = Z(t);
        var i = "";
        var a = Pr;
        var o, s, u, l;
        if (n < 0 || n > 20) throw RangeError(Nr);
        if (r != r) return "NaN";
        if (r <= -1e21 || r >= 1e21) return String(r);

        if (r < 0) {
          i = "-";
          r = -r;
        }

        if (r > 1e-21) {
          o = Ir(r * kr(2, 69, 1)) - 69;
          s = o < 0 ? r * kr(2, -o, 1) : r / kr(2, o, 1);
          s *= 4503599627370496;
          o = 52 - o;

          if (o > 0) {
            Ar(0, s);
            u = n;

            while (u >= 7) {
              Ar(1e7, 0);
              u -= 7;
            }

            Ar(kr(10, u, 1), 0);
            u = o - 1;

            while (u >= 23) {
              Tr(1 << 23);
              u -= 23;
            }

            Tr(1 << u);
            Ar(1, 1);
            Tr(2);
            a = Cr();
          } else {
            Ar(0, s);
            Ar(1 << -o, 0);
            a = Cr() + jr.call(Pr, n);
          }
        }

        if (n > 0) {
          l = a.length;
          a = i + (l <= n ? "0." + jr.call(Pr, n - l) + a : a.slice(0, l - n) + "." + a.slice(l - n));
        } else {
          a = i + a;
        }

        return a;
      }
    });
    var Mr = 1..toPrecision;
    N(N.P + N.F * (a(function () {
      return Mr.call(1, undefined) !== "1";
    }) || !a(function () {
      Mr.call({});
    })), "Number", {
      toPrecision: function e(t) {
        var r = Br(this, "Number#toPrecision: incorrect invocation!");
        return t === undefined ? Mr.call(r) : Mr.call(r, t);
      }
    });
    N(N.S, "Number", {
      EPSILON: Math.pow(2, -52)
    });
    var Fr = r.isFinite;
    N(N.S, "Number", {
      isFinite: function e(t) {
        return typeof t == "number" && Fr(t);
      }
    });
    var Lr = Math.floor;

    var Dr = function e(t) {
      return !l(t) && isFinite(t) && Lr(t) === t;
    };

    N(N.S, "Number", {
      isInteger: Dr
    });
    N(N.S, "Number", {
      isNaN: function e(t) {
        return t != t;
      }
    });
    var Rr = Math.abs;
    N(N.S, "Number", {
      isSafeInteger: function e(t) {
        return Dr(t) && Rr(t) <= 9007199254740991;
      }
    });
    N(N.S, "Number", {
      MAX_SAFE_INTEGER: 9007199254740991
    });
    N(N.S, "Number", {
      MIN_SAFE_INTEGER: -9007199254740991
    });
    N(N.S + N.F * (Number.parseFloat != sr), "Number", {
      parseFloat: sr
    });
    N(N.S + N.F * (Number.parseInt != ir), "Number", {
      parseInt: ir
    });

    var Hr = Math.log1p || function e(t) {
      return (t = +t) > -1e-8 && t < 1e-8 ? t - t * t / 2 : Math.log(1 + t);
    };

    var Wr = Math.sqrt;
    var zr = Math.acosh;
    N(N.S + N.F * !(zr && Math.floor(zr(Number.MAX_VALUE)) == 710 && zr(Infinity) == Infinity), "Math", {
      acosh: function e(t) {
        return (t = +t) < 1 ? NaN : t > 94906265.62425156 ? Math.log(t) + Math.LN2 : Hr(t - 1 + Wr(t - 1) * Wr(t + 1));
      }
    });
    var Ur = Math.asinh;

    function Gr(e) {
      return !isFinite(e = +e) || e == 0 ? e : e < 0 ? -Gr(-e) : Math.log(e + Math.sqrt(e * e + 1));
    }

    N(N.S + N.F * !(Ur && 1 / Ur(0) > 0), "Math", {
      asinh: Gr
    });
    var Vr = Math.atanh;
    N(N.S + N.F * !(Vr && 1 / Vr(-0) < 0), "Math", {
      atanh: function e(t) {
        return (t = +t) == 0 ? t : Math.log((1 + t) / (1 - t)) / 2;
      }
    });

    var Yr = Math.sign || function e(t) {
      return (t = +t) == 0 || t != t ? t : t < 0 ? -1 : 1;
    };

    N(N.S, "Math", {
      cbrt: function e(t) {
        return Yr(t = +t) * Math.pow(Math.abs(t), 1 / 3);
      }
    });
    N(N.S, "Math", {
      clz32: function e(t) {
        return (t >>>= 0) ? 31 - Math.floor(Math.log(t + .5) * Math.LOG2E) : 32;
      }
    });
    var Jr = Math.exp;
    N(N.S, "Math", {
      cosh: function e(t) {
        return (Jr(t = +t) + Jr(-t)) / 2;
      }
    });
    var qr = Math.expm1;
    var $r = !qr || qr(10) > 22025.465794806718 || qr(10) < 22025.465794806718 || qr(-2e-17) != -2e-17 ? function e(t) {
      return (t = +t) == 0 ? t : t > -1e-6 && t < 1e-6 ? t + t * t / 2 : Math.exp(t) - 1;
    } : qr;
    N(N.S + N.F * ($r != Math.expm1), "Math", {
      expm1: $r
    });
    var Kr = Math.pow;
    var Qr = Kr(2, -52);
    var Zr = Kr(2, -23);
    var en = Kr(2, 127) * (2 - Zr);
    var tn = Kr(2, -126);

    var rn = function e(t) {
      return t + 1 / Qr - 1 / Qr;
    };

    var nn = Math.fround || function e(t) {
      var r = Math.abs(t);
      var n = Yr(t);
      var i, a;
      if (r < tn) return n * rn(r / tn / Zr) * tn * Zr;
      i = (1 + Zr / Qr) * r;
      a = i - (i - r);
      if (a > en || a != a) return n * Infinity;
      return n * a;
    };

    N(N.S, "Math", {
      fround: nn
    });
    var an = Math.abs;
    N(N.S, "Math", {
      hypot: function e(t, r) {
        var n = 0;
        var i = 0;
        var a = arguments.length;
        var o = 0;
        var s, u;

        while (i < a) {
          s = an(arguments[i++]);

          if (o < s) {
            u = o / s;
            n = n * u * u + 1;
            o = s;
          } else if (s > 0) {
            u = s / o;
            n += u * u;
          } else n += s;
        }

        return o === Infinity ? Infinity : o * Math.sqrt(n);
      }
    });
    var on = Math.imul;
    N(N.S + N.F * a(function () {
      return on(4294967295, 5) != -5 || on.length != 2;
    }), "Math", {
      imul: function e(t, r) {
        var n = 65535;
        var i = +t;
        var a = +r;
        var o = n & i;
        var s = n & a;
        return 0 | o * s + ((n & i >>> 16) * s + o * (n & a >>> 16) << 16 >>> 0);
      }
    });
    N(N.S, "Math", {
      log10: function e(t) {
        return Math.log(t) * Math.LOG10E;
      }
    });
    N(N.S, "Math", {
      log1p: Hr
    });
    N(N.S, "Math", {
      log2: function e(t) {
        return Math.log(t) / Math.LN2;
      }
    });
    N(N.S, "Math", {
      sign: Yr
    });
    var sn = Math.exp;
    N(N.S + N.F * a(function () {
      return !Math.sinh(-2e-17) != -2e-17;
    }), "Math", {
      sinh: function e(t) {
        return Math.abs(t = +t) < 1 ? ($r(t) - $r(-t)) / 2 : (sn(t - 1) - sn(-t - 1)) * (Math.E / 2);
      }
    });
    var un = Math.exp;
    N(N.S, "Math", {
      tanh: function e(t) {
        var r = $r(t = +t);
        var n = $r(-t);
        return r == Infinity ? 1 : n == Infinity ? -1 : (r - n) / (un(t) + un(-t));
      }
    });
    N(N.S, "Math", {
      trunc: function e(t) {
        return (t > 0 ? Math.floor : Math.ceil)(t);
      }
    });
    var ln = String.fromCharCode;
    var fn = String.fromCodePoint;
    N(N.S + N.F * (!!fn && fn.length != 1), "String", {
      fromCodePoint: function e(t) {
        var r = [];
        var n = arguments.length;
        var i = 0;
        var a;

        while (n > i) {
          a = +arguments[i++];
          if (ie(a, 1114111) !== a) throw RangeError(a + " is not a valid code point");
          r.push(a < 65536 ? ln(a) : ln(((a -= 65536) >> 10) + 55296, a % 1024 + 56320));
        }

        return r.join("");
      }
    });
    N(N.S, "String", {
      raw: function e(t) {
        var r = $(t.raw);
        var n = te(r.length);
        var i = arguments.length;
        var a = [];
        var o = 0;

        while (n > o) {
          a.push(String(r[o++]));
          if (o < i) a.push(String(arguments[o]));
        }

        return a.join("");
      }
    });
    er("trim", function (e) {
      return function t() {
        return e(this, 3);
      };
    });

    var cn = function cn(e) {
      return function (t, r) {
        var n = String(q(t));
        var i = Z(r);
        var a = n.length;
        var o, s;
        if (i < 0 || i >= a) return e ? "" : undefined;
        o = n.charCodeAt(i);
        return o < 55296 || o > 56319 || i + 1 === a || (s = n.charCodeAt(i + 1)) < 56320 || s > 57343 ? e ? n.charAt(i) : o : e ? n.slice(i, i + 2) : (o - 55296 << 10) + (s - 56320) + 65536;
      };
    };

    var vn = {};
    var hn = {};
    w(hn, L("iterator"), function () {
      return this;
    });

    var dn = function dn(e, t, r) {
      e.prototype = _e(hn, {
        next: b(1, r)
      });
      H(e, t + " Iterator");
    };

    var pn = L("iterator");
    var yn = !([].keys && "next" in [].keys());
    var gn = "@@iterator";
    var mn = "keys";
    var bn = "values";

    var wn = function e() {
      return this;
    };

    var Sn = function Sn(e, t, r, n, i, a, o) {
      dn(r, t, n);

      var s = function e(t) {
        if (!yn && t in c) return c[t];

        switch (t) {
          case mn:
            return function e() {
              return new r(this, t);
            };

          case bn:
            return function e() {
              return new r(this, t);
            };
        }

        return function e() {
          return new r(this, t);
        };
      };

      var u = t + " Iterator";
      var l = i == bn;
      var f = false;
      var c = e.prototype;
      var v = c[pn] || c[gn] || i && c[i];
      var h = v || s(i);
      var d = i ? !l ? h : s("entries") : undefined;
      var p = t == "Array" ? c.entries || v : v;
      var y, g, m;

      if (p) {
        m = xt(p.call(new e()));

        if (m !== Object.prototype && m.next) {
          H(m, u, true);
          if (typeof m[pn] != "function") w(m, pn, wn);
        }
      }

      if (l && v && v.name !== bn) {
        f = true;

        h = function e() {
          return v.call(this);
        };
      }

      if (yn || f || !c[pn]) {
        w(c, pn, h);
      }

      vn[t] = h;
      vn[u] = wn;

      if (i) {
        y = {
          values: l ? h : s(bn),
          keys: a ? h : s(mn),
          entries: d
        };
        if (o) for (g in y) {
          if (!(g in c)) B(c, g, y[g]);
        } else N(N.P + N.F * (yn || f), t, y);
      }

      return y;
    };

    var xn = cn(true);
    Sn(String, "String", function (e) {
      this._t = String(e);
      this._i = 0;
    }, function () {
      var e = this._t;
      var t = this._i;
      var r;
      if (t >= e.length) return {
        value: undefined,
        done: true
      };
      r = xn(e, t);
      this._i += r.length;
      return {
        value: r,
        done: false
      };
    });
    var En = cn(false);
    N(N.P, "String", {
      codePointAt: function e(t) {
        return En(this, t);
      }
    });
    var Bn = L("match");

    var jn = function jn(e) {
      var t;
      return l(e) && ((t = e[Bn]) !== undefined ? !!t : Y(e) == "RegExp");
    };

    var _n = function _n(e, t, r) {
      if (jn(t)) throw TypeError("String#" + r + " doesn't accept regex!");
      return String(q(e));
    };

    var Xn = L("match");

    var On = function On(e) {
      var t = /./;

      try {
        "/./"[e](t);
      } catch (r) {
        try {
          t[Xn] = false;
          return !"/./"[e](t);
        } catch (e) {}
      }

      return true;
    };

    var Nn = "endsWith";
    var Pn = ""[Nn];
    N(N.P + N.F * On(Nn), "String", {
      endsWith: function e(t) {
        var r = _n(this, t, Nn);

        var n = arguments.length > 1 ? arguments[1] : undefined;
        var i = te(r.length);
        var a = n === undefined ? i : Math.min(te(n), i);
        var o = String(t);
        return Pn ? Pn.call(r, o, a) : r.slice(a - o.length, a) === o;
      }
    });
    var An = "includes";
    N(N.P + N.F * On(An), "String", {
      includes: function e(t) {
        return !!~_n(this, t, An).indexOf(t, arguments.length > 1 ? arguments[1] : undefined);
      }
    });
    N(N.P, "String", {
      repeat: jr
    });
    var Tn = "startsWith";
    var Cn = ""[Tn];
    N(N.P + N.F * On(Tn), "String", {
      startsWith: function e(t) {
        var r = _n(this, t, Tn);

        var n = te(Math.min(arguments.length > 1 ? arguments[1] : undefined, r.length));
        var i = String(t);
        return Cn ? Cn.call(r, i, n) : r.slice(n, n + i.length) === i;
      }
    });
    var kn = /"/g;

    var In = function e(t, r, n, i) {
      var a = String(q(t));
      var o = "<" + r;
      if (n !== "") o += " " + n + '="' + String(i).replace(kn, "&quot;") + '"';
      return o + ">" + a + "</" + r + ">";
    };

    var Mn = function Mn(e, t) {
      var r = {};
      r[e] = t(In);
      N(N.P + N.F * a(function () {
        var t = ""[e]('"');
        return t !== t.toLowerCase() || t.split('"').length > 3;
      }), "String", r);
    };

    Mn("anchor", function (e) {
      return function t(r) {
        return e(this, "a", "name", r);
      };
    });
    Mn("big", function (e) {
      return function t() {
        return e(this, "big", "", "");
      };
    });
    Mn("blink", function (e) {
      return function t() {
        return e(this, "blink", "", "");
      };
    });
    Mn("bold", function (e) {
      return function t() {
        return e(this, "b", "", "");
      };
    });
    Mn("fixed", function (e) {
      return function t() {
        return e(this, "tt", "", "");
      };
    });
    Mn("fontcolor", function (e) {
      return function t(r) {
        return e(this, "font", "color", r);
      };
    });
    Mn("fontsize", function (e) {
      return function t(r) {
        return e(this, "font", "size", r);
      };
    });
    Mn("italics", function (e) {
      return function t() {
        return e(this, "i", "", "");
      };
    });
    Mn("link", function (e) {
      return function t(r) {
        return e(this, "a", "href", r);
      };
    });
    Mn("small", function (e) {
      return function t() {
        return e(this, "small", "", "");
      };
    });
    Mn("strike", function (e) {
      return function t() {
        return e(this, "strike", "", "");
      };
    });
    Mn("sub", function (e) {
      return function t() {
        return e(this, "sub", "", "");
      };
    });
    Mn("sup", function (e) {
      return function t() {
        return e(this, "sup", "", "");
      };
    });
    N(N.S, "Date", {
      now: function e() {
        return new Date().getTime();
      }
    });
    N(N.P + N.F * a(function () {
      return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({
        toISOString: function e() {
          return 1;
        }
      }) !== 1;
    }), "Date", {
      toJSON: function e(t) {
        var r = bt(this);
        var n = p(r);
        return typeof n == "number" && !isFinite(n) ? null : r.toISOString();
      }
    });
    var Fn = Date.prototype.getTime;
    var Ln = Date.prototype.toISOString;

    var Dn = function e(t) {
      return t > 9 ? t : "0" + t;
    };

    var Rn = a(function () {
      return Ln.call(new Date(-5e13 - 1)) != "0385-07-25T07:06:39.999Z";
    }) || !a(function () {
      Ln.call(new Date(NaN));
    }) ? function e() {
      if (!isFinite(Fn.call(this))) throw RangeError("Invalid time value");
      var t = this;
      var r = t.getUTCFullYear();
      var n = t.getUTCMilliseconds();
      var i = r < 0 ? "-" : r > 9999 ? "+" : "";
      return i + ("00000" + Math.abs(r)).slice(i ? -6 : -4) + "-" + Dn(t.getUTCMonth() + 1) + "-" + Dn(t.getUTCDate()) + "T" + Dn(t.getUTCHours()) + ":" + Dn(t.getUTCMinutes()) + ":" + Dn(t.getUTCSeconds()) + "." + (n > 99 ? n : "0" + Dn(n)) + "Z";
    } : Ln;
    N(N.P + N.F * (Date.prototype.toISOString !== Rn), "Date", {
      toISOString: Rn
    });
    var Hn = Date.prototype;
    var Wn = "Invalid Date";
    var zn = "toString";
    var Un = Hn[zn];
    var Gn = Hn.getTime;

    if (new Date(NaN) + "" != Wn) {
      B(Hn, zn, function e() {
        var t = Gn.call(this);
        return t === t ? Un.call(this) : Wn;
      });
    }

    var Vn = "number";

    var Yn = function Yn(e) {
      if (e !== "string" && e !== Vn && e !== "default") throw TypeError("Incorrect hint");
      return p(f(this), e != Vn);
    };

    var Jn = L("toPrimitive");
    var qn = Date.prototype;
    if (!(Jn in qn)) w(qn, Jn, Yn);
    N(N.S, "Array", {
      isArray: me
    });

    var $n = function $n(e, t, r, n) {
      try {
        return n ? t(f(r)[0], r[1]) : t(r);
      } catch (t) {
        var i = e["return"];
        if (i !== undefined) f(i.call(e));
        throw t;
      }
    };

    var Kn = L("iterator");
    var Qn = Array.prototype;

    var Zn = function Zn(e) {
      return e !== undefined && (vn.Array === e || Qn[Kn] === e);
    };

    var ei = function ei(e, t, r) {
      if (t in e) m.f(e, t, b(0, r));else e[t] = r;
    };

    var ti = L("iterator");

    var ri = s.getIteratorMethod = function (e) {
      if (e != undefined) return e[ti] || e["@@iterator"] || vn[kt(e)];
    };

    var ni = L("iterator");
    var ii = false;

    try {
      var ai = [7][ni]();

      ai["return"] = function () {
        ii = true;
      };
    } catch (e) {}

    var oi = function oi(e, t) {
      if (!t && !ii) return false;
      var r = false;

      try {
        var n = [7];
        var i = n[ni]();

        i.next = function () {
          return {
            done: r = true
          };
        };

        n[ni] = function () {
          return i;
        };

        e(n);
      } catch (e) {}

      return r;
    };

    N(N.S + N.F * !oi(function (e) {}), "Array", {
      from: function e(t) {
        var r = bt(t);
        var n = typeof this == "function" ? this : Array;
        var i = arguments.length;
        var a = i > 1 ? arguments[1] : undefined;
        var o = a !== undefined;
        var s = 0;
        var u = ri(r);
        var l, f, c, v;
        if (o) a = _(a, i > 2 ? arguments[2] : undefined, 2);

        if (u != undefined && !(n == Array && Zn(u))) {
          for (v = u.call(r), f = new n(); !(c = v.next()).done; s++) {
            ei(f, s, o ? $n(v, a, [c.value, s], true) : c.value);
          }
        } else {
          l = te(r.length);

          for (f = new n(l); l > s; s++) {
            ei(f, s, o ? a(r[s], s) : r[s]);
          }
        }

        f.length = s;
        return f;
      }
    });
    N(N.S + N.F * a(function () {
      function e() {}

      return !(Array.of.call(e) instanceof e);
    }), "Array", {
      of: function e() {
        var t = 0;
        var r = arguments.length;
        var n = new (typeof this == "function" ? this : Array)(r);

        while (r > t) {
          ei(n, t, arguments[t++]);
        }

        n.length = r;
        return n;
      }
    });

    var si = function si(e, t) {
      return !!e && a(function () {
        t ? e.call(null, function () {}, 1) : e.call(null);
      });
    };

    var ui = [].join;
    N(N.P + N.F * (J != Object || !si(ui)), "Array", {
      join: function e(t) {
        return ui.call($(this), t === undefined ? "," : t);
      }
    });
    var li = [].slice;
    N(N.P + N.F * a(function () {
      if (Se) li.call(Se);
    }), "Array", {
      slice: function e(t, r) {
        var n = te(this.length);
        var i = Y(this);
        r = r === undefined ? n : r;
        if (i == "Array") return li.call(this, t, r);
        var a = ie(t, n);
        var o = ie(r, n);
        var s = te(o - a);
        var u = new Array(s);
        var l = 0;

        for (; l < s; l++) {
          u[l] = i == "String" ? this.charAt(a + l) : this[a + l];
        }

        return u;
      }
    });
    var fi = [].sort;
    var ci = [1, 2, 3];
    N(N.P + N.F * (a(function () {
      ci.sort(undefined);
    }) || !a(function () {
      ci.sort(null);
    }) || !si(fi)), "Array", {
      sort: function e(t) {
        return t === undefined ? fi.call(bt(this)) : fi.call(bt(this), j(t));
      }
    });
    var vi = L("species");

    var hi = function hi(e) {
      var t;

      if (me(e)) {
        t = e.constructor;
        if (typeof t == "function" && (t === Array || me(t.prototype))) t = undefined;

        if (l(t)) {
          t = t[vi];
          if (t === null) t = undefined;
        }
      }

      return t === undefined ? Array : t;
    };

    var di = function di(e, t) {
      return new (hi(e))(t);
    };

    var pi = function pi(e, t) {
      var r = e == 1;
      var n = e == 2;
      var i = e == 3;
      var a = e == 4;
      var o = e == 6;
      var s = e == 5 || o;
      var u = t || di;
      return function (t, l, f) {
        var c = bt(t);
        var v = J(c);

        var h = _(l, f, 3);

        var d = te(v.length);
        var p = 0;
        var y = r ? u(t, d) : n ? u(t, 0) : undefined;
        var g, m;

        for (; d > p; p++) {
          if (s || p in v) {
            g = v[p];
            m = h(g, p, c);

            if (e) {
              if (r) y[p] = m;else if (m) switch (e) {
                case 3:
                  return true;

                case 5:
                  return g;

                case 6:
                  return p;

                case 2:
                  y.push(g);
              } else if (a) return false;
            }
          }
        }

        return o ? -1 : i || a ? a : y;
      };
    };

    var yi = pi(0);
    var gi = si([].forEach, true);
    N(N.P + N.F * !gi, "Array", {
      forEach: function e(t) {
        return yi(this, t, arguments[1]);
      }
    });
    var mi = pi(1);
    N(N.P + N.F * !si([].map, true), "Array", {
      map: function e(t) {
        return mi(this, t, arguments[1]);
      }
    });
    var bi = pi(2);
    N(N.P + N.F * !si([].filter, true), "Array", {
      filter: function e(t) {
        return bi(this, t, arguments[1]);
      }
    });
    var wi = pi(3);
    N(N.P + N.F * !si([].some, true), "Array", {
      some: function e(t) {
        return wi(this, t, arguments[1]);
      }
    });
    var Si = pi(4);
    N(N.P + N.F * !si([].every, true), "Array", {
      every: function e(t) {
        return Si(this, t, arguments[1]);
      }
    });

    var xi = function xi(e, t, r, n, i) {
      j(t);
      var a = bt(e);
      var o = J(a);
      var s = te(a.length);
      var u = i ? s - 1 : 0;
      var l = i ? -1 : 1;
      if (r < 2) for (;;) {
        if (u in o) {
          n = o[u];
          u += l;
          break;
        }

        u += l;

        if (i ? u < 0 : s <= u) {
          throw TypeError("Reduce of empty array with no initial value");
        }
      }

      for (; i ? u >= 0 : s > u; u += l) {
        if (u in o) {
          n = t(n, o[u], u, a);
        }
      }

      return n;
    };

    N(N.P + N.F * !si([].reduce, true), "Array", {
      reduce: function e(t) {
        return xi(this, t, arguments.length, arguments[1], false);
      }
    });
    N(N.P + N.F * !si([].reduceRight, true), "Array", {
      reduceRight: function e(t) {
        return xi(this, t, arguments.length, arguments[1], true);
      }
    });
    var Ei = ae(false);
    var Bi = [].indexOf;
    var ji = !!Bi && 1 / [1].indexOf(1, -0) < 0;
    N(N.P + N.F * (ji || !si(Bi)), "Array", {
      indexOf: function e(t) {
        return ji ? Bi.apply(this, arguments) || 0 : Ei(this, t, arguments[1]);
      }
    });
    var _i = [].lastIndexOf;
    var Xi = !!_i && 1 / [1].lastIndexOf(1, -0) < 0;
    N(N.P + N.F * (Xi || !si(_i)), "Array", {
      lastIndexOf: function e(t) {
        if (Xi) return _i.apply(this, arguments) || 0;
        var r = $(this);
        var n = te(r.length);
        var i = n - 1;
        if (arguments.length > 1) i = Math.min(i, Z(arguments[1]));
        if (i < 0) i = n + i;

        for (; i >= 0; i--) {
          if (i in r) if (r[i] === t) return i || 0;
        }

        return -1;
      }
    });

    var Oi = [].copyWithin || function e(t, r) {
      var n = bt(this);
      var i = te(n.length);
      var a = ie(t, i);
      var o = ie(r, i);
      var s = arguments.length > 2 ? arguments[2] : undefined;
      var u = Math.min((s === undefined ? i : ie(s, i)) - o, i - a);
      var l = 1;

      if (o < a && a < o + u) {
        l = -1;
        o += u - 1;
        a += u - 1;
      }

      while (u-- > 0) {
        if (o in n) n[a] = n[o];else delete n[a];
        a += l;
        o += l;
      }

      return n;
    };

    var Ni = L("unscopables");
    var Pi = Array.prototype;
    if (Pi[Ni] == undefined) w(Pi, Ni, {});

    var Ai = function Ai(e) {
      Pi[Ni][e] = true;
    };

    N(N.P, "Array", {
      copyWithin: Oi
    });
    Ai("copyWithin");

    var Ti = function e(t) {
      var r = bt(this);
      var n = te(r.length);
      var i = arguments.length;
      var a = ie(i > 1 ? arguments[1] : undefined, n);
      var o = i > 2 ? arguments[2] : undefined;
      var s = o === undefined ? n : ie(o, n);

      while (s > a) {
        r[a++] = t;
      }

      return r;
    };

    N(N.P, "Array", {
      fill: Ti
    });
    Ai("fill");
    var Ci = pi(5);
    var ki = "find";
    var Ii = true;
    if (ki in []) Array(1)[ki](function () {
      Ii = false;
    });
    N(N.P + N.F * Ii, "Array", {
      find: function e(t) {
        return Ci(this, t, arguments.length > 1 ? arguments[1] : undefined);
      }
    });
    Ai(ki);
    var Mi = pi(6);
    var Fi = "findIndex";
    var Li = true;
    if (Fi in []) Array(1)[Fi](function () {
      Li = false;
    });
    N(N.P + N.F * Li, "Array", {
      findIndex: function e(t) {
        return Mi(this, t, arguments.length > 1 ? arguments[1] : undefined);
      }
    });
    Ai(Fi);
    var Di = L("species");

    var Ri = function Ri(e) {
      var t = r[e];
      if (o && t && !t[Di]) m.f(t, Di, {
        configurable: true,
        get: function e() {
          return this;
        }
      });
    };

    Ri("Array");

    var Hi = function Hi(e, t) {
      return {
        value: t,
        done: !!e
      };
    };

    var Wi = Sn(Array, "Array", function (e, t) {
      this._t = $(e);
      this._i = 0;
      this._k = t;
    }, function () {
      var e = this._t;
      var t = this._k;
      var r = this._i++;

      if (!e || r >= e.length) {
        this._t = undefined;
        return Hi(1);
      }

      if (t == "keys") return Hi(0, r);
      if (t == "values") return Hi(0, e[r]);
      return Hi(0, [r, e[r]]);
    }, "values");
    vn.Arguments = vn.Array;
    Ai("keys");
    Ai("values");
    Ai("entries");

    var zi = function zi() {
      var e = f(this);
      var t = "";
      if (e.global) t += "g";
      if (e.ignoreCase) t += "i";
      if (e.multiline) t += "m";
      if (e.unicode) t += "u";
      if (e.sticky) t += "y";
      return t;
    };

    var Ui = m.f;
    var Gi = Ne.f;
    var Vi = r.RegExp;
    var Yi = Vi;
    var Ji = Vi.prototype;
    var qi = /a/g;
    var $i = /a/g;
    var Ki = new Vi(qi) !== qi;

    if (o && (!Ki || a(function () {
      $i[L("match")] = false;
      return Vi(qi) != qi || Vi($i) == $i || Vi(qi, "i") != "/a/i";
    }))) {
      Vi = function e(t, r) {
        var n = this instanceof Vi;
        var i = jn(t);
        var a = r === undefined;
        return !n && i && t.constructor === Vi && a ? t : lr(Ki ? new Yi(i && !a ? t.source : t, r) : Yi((i = t instanceof Vi) ? t.source : t, i && a ? zi.call(t) : r), n ? this : Ji, Vi);
      };

      var Qi = function e(t) {
        t in Vi || Ui(Vi, t, {
          configurable: true,
          get: function e() {
            return Yi[t];
          },
          set: function e(r) {
            Yi[t] = r;
          }
        });
      };

      for (var Zi = Gi(Yi), ea = 0; Zi.length > ea;) {
        Qi(Zi[ea++]);
      }

      Ji.constructor = Vi;
      Vi.prototype = Ji;
      B(r, "RegExp", Vi);
    }

    Ri("RegExp");
    var ta = RegExp.prototype.exec;
    var ra = String.prototype.replace;
    var na = ta;
    var ia = "lastIndex";

    var aa = function () {
      var e = /a/,
          t = /b*/g;
      ta.call(e, "a");
      ta.call(t, "a");
      return e[ia] !== 0 || t[ia] !== 0;
    }();

    var oa = /()??/.exec("")[1] !== undefined;
    var sa = aa || oa;

    if (sa) {
      na = function e(t) {
        var r = this;
        var n, i, a, o;

        if (oa) {
          i = new RegExp("^" + r.source + "$(?!\\s)", zi.call(r));
        }

        if (aa) n = r[ia];
        a = ta.call(r, t);

        if (aa && a) {
          r[ia] = r.global ? a.index + a[0].length : n;
        }

        if (oa && a && a.length > 1) {
          ra.call(a[0], i, function () {
            for (o = 1; o < arguments.length - 2; o++) {
              if (arguments[o] === undefined) a[o] = undefined;
            }
          });
        }

        return a;
      };
    }

    var ua = na;
    N({
      target: "RegExp",
      proto: true,
      forced: ua !== /./.exec
    }, {
      exec: ua
    });
    if (o && /./g.flags != "g") m.f(RegExp.prototype, "flags", {
      configurable: true,
      get: zi
    });
    var la = "toString";
    var fa = /./[la];

    var ca = function e(t) {
      B(RegExp.prototype, la, t, true);
    };

    if (a(function () {
      return fa.call({
        source: "a",
        flags: "b"
      }) != "/a/b";
    })) {
      ca(function e() {
        var t = f(this);
        return "/".concat(t.source, "/", "flags" in t ? t.flags : !o && t instanceof RegExp ? zi.call(t) : undefined);
      });
    } else if (fa.name != la) {
      ca(function e() {
        return fa.call(this);
      });
    }

    var va = cn(true);

    var ha = function ha(e, t, r) {
      return t + (r ? va(e, t).length : 1);
    };

    var da = RegExp.prototype.exec;

    var pa = function pa(e, t) {
      var r = e.exec;

      if (typeof r === "function") {
        var n = r.call(e, t);

        if (babelHelpers.typeof(n) !== "object") {
          throw new TypeError("RegExp exec method returned something other than an Object or null");
        }

        return n;
      }

      if (kt(e) !== "RegExp") {
        throw new TypeError("RegExp#exec called on incompatible receiver");
      }

      return da.call(e, t);
    };

    var ya = L("species");
    var ga = !a(function () {
      var e = /./;

      e.exec = function () {
        var e = [];
        e.groups = {
          a: "7"
        };
        return e;
      };

      return "".replace(e, "$<a>") !== "7";
    });

    var ma = function () {
      var e = /(?:)/;
      var t = e.exec;

      e.exec = function () {
        return t.apply(this, arguments);
      };

      var r = "ab".split(e);
      return r.length === 2 && r[0] === "a" && r[1] === "b";
    }();

    var ba = function ba(e, t, r) {
      var n = L(e);
      var i = !a(function () {
        var t = {};

        t[n] = function () {
          return 7;
        };

        return ""[e](t) != 7;
      });
      var o = i ? !a(function () {
        var t = false;
        var r = /a/;

        r.exec = function () {
          t = true;
          return null;
        };

        if (e === "split") {
          r.constructor = {};

          r.constructor[ya] = function () {
            return r;
          };
        }

        r[n]("");
        return !t;
      }) : undefined;

      if (!i || !o || e === "replace" && !ga || e === "split" && !ma) {
        var s = /./[n];
        var u = r(q, n, ""[e], function e(t, r, n, a, o) {
          if (r.exec === ua) {
            if (i && !o) {
              return {
                done: true,
                value: s.call(r, n, a)
              };
            }

            return {
              done: true,
              value: t.call(n, r, a)
            };
          }

          return {
            done: false
          };
        });
        var l = u[0];
        var f = u[1];
        B(String.prototype, e, l);
        w(RegExp.prototype, n, t == 2 ? function (e, t) {
          return f.call(e, this, t);
        } : function (e) {
          return f.call(e, this);
        });
      }
    };

    ba("match", 1, function (e, t, r, n) {
      return [function r(n) {
        var i = e(this);
        var a = n == undefined ? undefined : n[t];
        return a !== undefined ? a.call(n, i) : new RegExp(n)[t](String(i));
      }, function (e) {
        var t = n(r, e, this);
        if (t.done) return t.value;
        var i = f(e);
        var a = String(this);
        if (!i.global) return pa(i, a);
        var o = i.unicode;
        i.lastIndex = 0;
        var s = [];
        var u = 0;
        var l;

        while ((l = pa(i, a)) !== null) {
          var c = String(l[0]);
          s[u] = c;
          if (c === "") i.lastIndex = ha(a, te(i.lastIndex), o);
          u++;
        }

        return u === 0 ? null : s;
      }];
    });
    var wa = Math.max;
    var Sa = Math.min;
    var xa = Math.floor;
    var Ea = /\$([$&`']|\d\d?|<[^>]*>)/g;
    var Ba = /\$([$&`']|\d\d?)/g;

    var ja = function e(t) {
      return t === undefined ? t : String(t);
    };

    ba("replace", 2, function (e, t, r, n) {
      return [function n(i, a) {
        var o = e(this);
        var s = i == undefined ? undefined : i[t];
        return s !== undefined ? s.call(i, o, a) : r.call(String(o), i, a);
      }, function (e, t) {
        var a = n(r, e, this, t);
        if (a.done) return a.value;
        var o = f(e);
        var s = String(this);
        var u = typeof t === "function";
        if (!u) t = String(t);
        var l = o.global;

        if (l) {
          var c = o.unicode;
          o.lastIndex = 0;
        }

        var v = [];

        while (true) {
          var h = pa(o, s);
          if (h === null) break;
          v.push(h);
          if (!l) break;
          var d = String(h[0]);
          if (d === "") o.lastIndex = ha(s, te(o.lastIndex), c);
        }

        var p = "";
        var y = 0;

        for (var g = 0; g < v.length; g++) {
          h = v[g];
          var m = String(h[0]);
          var b = wa(Sa(Z(h.index), s.length), 0);
          var w = [];

          for (var S = 1; S < h.length; S++) {
            w.push(ja(h[S]));
          }

          var x = h.groups;

          if (u) {
            var E = [m].concat(w, b, s);
            if (x !== undefined) E.push(x);
            var B = String(t.apply(undefined, E));
          } else {
            B = i(m, s, b, w, x, t);
          }

          if (b >= y) {
            p += s.slice(y, b) + B;
            y = b + m.length;
          }
        }

        return p + s.slice(y);
      }];

      function i(e, t, n, i, a, o) {
        var s = n + e.length;
        var u = i.length;
        var l = Ba;

        if (a !== undefined) {
          a = bt(a);
          l = Ea;
        }

        return r.call(o, l, function (r, o) {
          var l;

          switch (o.charAt(0)) {
            case "$":
              return "$";

            case "&":
              return e;

            case "`":
              return t.slice(0, n);

            case "'":
              return t.slice(s);

            case "<":
              l = a[o.slice(1, -1)];
              break;

            default:
              var f = +o;
              if (f === 0) return r;

              if (f > u) {
                var c = xa(f / 10);
                if (c === 0) return r;
                if (c <= u) return i[c - 1] === undefined ? o.charAt(1) : i[c - 1] + o.charAt(1);
                return r;
              }

              l = i[f - 1];
          }

          return l === undefined ? "" : l;
        });
      }
    });
    ba("search", 1, function (e, t, r, n) {
      return [function r(n) {
        var i = e(this);
        var a = n == undefined ? undefined : n[t];
        return a !== undefined ? a.call(n, i) : new RegExp(n)[t](String(i));
      }, function (e) {
        var t = n(r, e, this);
        if (t.done) return t.value;
        var i = f(e);
        var a = String(this);
        var o = i.lastIndex;
        if (!Ot(o, 0)) i.lastIndex = 0;
        var s = pa(i, a);
        if (!Ot(i.lastIndex, o)) i.lastIndex = o;
        return s === null ? -1 : s.index;
      }];
    });

    var _a = L("species");

    var Xa = function Xa(e, t) {
      var r = f(e).constructor;
      var n;
      return r === undefined || (n = f(r)[_a]) == undefined ? t : j(n);
    };

    var Oa = Math.min;
    var Na = [].push;
    var Pa = "split";
    var Aa = "length";
    var Ta = "lastIndex";
    var Ca = 4294967295;
    var ka = !a(function () {});
    ba("split", 2, function (e, t, r, n) {
      var i;

      if ("abbc"[Pa](/(b)*/)[1] == "c" || "test"[Pa](/(?:)/, -1)[Aa] != 4 || "ab"[Pa](/(?:ab)*/)[Aa] != 2 || "."[Pa](/(.?)(.?)/)[Aa] != 4 || "."[Pa](/()()/)[Aa] > 1 || ""[Pa](/.?/)[Aa]) {
        i = function e(t, n) {
          var i = String(this);
          if (t === undefined && n === 0) return [];
          if (!jn(t)) return r.call(i, t, n);
          var a = [];
          var o = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : "");
          var s = 0;
          var u = n === undefined ? Ca : n >>> 0;
          var l = new RegExp(t.source, o + "g");
          var f, c, v;

          while (f = ua.call(l, i)) {
            c = l[Ta];

            if (c > s) {
              a.push(i.slice(s, f.index));
              if (f[Aa] > 1 && f.index < i[Aa]) Na.apply(a, f.slice(1));
              v = f[0][Aa];
              s = c;
              if (a[Aa] >= u) break;
            }

            if (l[Ta] === f.index) l[Ta]++;
          }

          if (s === i[Aa]) {
            if (v || !l.test("")) a.push("");
          } else a.push(i.slice(s));

          return a[Aa] > u ? a.slice(0, u) : a;
        };
      } else if ("0"[Pa](undefined, 0)[Aa]) {
        i = function e(t, n) {
          return t === undefined && n === 0 ? [] : r.call(this, t, n);
        };
      } else {
        i = r;
      }

      return [function r(n, a) {
        var o = e(this);
        var s = n == undefined ? undefined : n[t];
        return s !== undefined ? s.call(n, o, a) : i.call(String(o), n, a);
      }, function (e, t) {
        var a = n(i, e, this, t, i !== r);
        if (a.done) return a.value;
        var o = f(e);
        var s = String(this);
        var u = Xa(o, RegExp);
        var l = o.unicode;
        var c = (o.ignoreCase ? "i" : "") + (o.multiline ? "m" : "") + (o.unicode ? "u" : "") + (ka ? "y" : "g");
        var v = new u(ka ? o : "^(?:" + o.source + ")", c);
        var h = t === undefined ? Ca : t >>> 0;
        if (h === 0) return [];
        if (s.length === 0) return pa(v, s) === null ? [s] : [];
        var d = 0;
        var p = 0;
        var y = [];

        while (p < s.length) {
          v.lastIndex = ka ? p : 0;
          var g = pa(v, ka ? s : s.slice(p));
          var m;

          if (g === null || (m = Oa(te(v.lastIndex + (ka ? 0 : p)), s.length)) === d) {
            p = ha(s, p, l);
          } else {
            y.push(s.slice(d, p));
            if (y.length === h) return y;

            for (var b = 1; b <= g.length - 1; b++) {
              y.push(g[b]);
              if (y.length === h) return y;
            }

            p = d = m;
          }
        }

        y.push(s.slice(d));
        return y;
      }];
    });

    var Ia = function Ia(e, t, r, n) {
      if (!(e instanceof t) || n !== undefined && n in e) {
        throw TypeError(r + ": incorrect invocation!");
      }

      return e;
    };

    var Ma = t(function (e) {
      var t = {};
      var r = {};

      var n = e.exports = function (e, n, i, a, o) {
        var s = o ? function () {
          return e;
        } : ri(e);

        var u = _(i, a, n ? 2 : 1);

        var l = 0;
        var c, v, h, d;
        if (typeof s != "function") throw TypeError(e + " is not iterable!");
        if (Zn(s)) for (c = te(e.length); c > l; l++) {
          d = n ? u(f(v = e[l])[0], v[1]) : u(e[l]);
          if (d === t || d === r) return d;
        } else for (h = s.call(e); !(v = h.next()).done;) {
          d = $n(h, u, v.value, n);
          if (d === t || d === r) return d;
        }
      };

      n.BREAK = t;
      n.RETURN = r;
    });
    var Fa = r.process;
    var La = r.setImmediate;
    var Da = r.clearImmediate;
    var Ra = r.MessageChannel;
    var Ha = r.Dispatch;
    var Wa = 0;
    var za = {};
    var Ua = "onreadystatechange";
    var Ga, Va, Ya;

    var Ja = function e() {
      var t = +this;

      if (za.hasOwnProperty(t)) {
        var r = za[t];
        delete za[t];
        r();
      }
    };

    var qa = function e(t) {
      Ja.call(t.data);
    };

    if (!La || !Da) {
      La = function e(t) {
        var r = [];
        var n = 1;

        while (arguments.length > n) {
          r.push(arguments[n++]);
        }

        za[++Wa] = function () {
          Mt(typeof t == "function" ? t : Function(t), r);
        };

        Ga(Wa);
        return Wa;
      };

      Da = function e(t) {
        delete za[t];
      };

      if (Y(Fa) == "process") {
        Ga = function e(t) {
          Fa.nextTick(_(Ja, t, 1));
        };
      } else if (Ha && Ha.now) {
        Ga = function e(t) {
          Ha.now(_(Ja, t, 1));
        };
      } else if (Ra) {
        Va = new Ra();
        Ya = Va.port2;
        Va.port1.onmessage = qa;
        Ga = _(Ya.postMessage, Ya, 1);
      } else if (r.addEventListener && typeof postMessage == "function" && !r.importScripts) {
        Ga = function e(t) {
          r.postMessage(t + "", "*");
        };

        r.addEventListener("message", qa, false);
      } else if (Ua in h("script")) {
        Ga = function e(t) {
          Se.appendChild(h("script"))[Ua] = function () {
            Se.removeChild(this);
            Ja.call(t);
          };
        };
      } else {
        Ga = function e(t) {
          setTimeout(_(Ja, t, 1), 0);
        };
      }
    }

    var $a = {
      set: La,
      clear: Da
    };
    var Ka = $a.set;
    var Qa = r.MutationObserver || r.WebKitMutationObserver;
    var Za = r.process;
    var eo = r.Promise;
    var to = Y(Za) == "process";

    var ro = function ro() {
      var e, t, n;

      var i = function r() {
        var i, a;
        if (to && (i = Za.domain)) i.exit();

        while (e) {
          a = e.fn;
          e = e.next;

          try {
            a();
          } catch (r) {
            if (e) n();else t = undefined;
            throw r;
          }
        }

        t = undefined;
        if (i) i.enter();
      };

      if (to) {
        n = function e() {
          Za.nextTick(i);
        };
      } else if (Qa && !(r.navigator && r.navigator.standalone)) {
        var a = true;
        var o = document.createTextNode("");
        new Qa(i).observe(o, {
          characterData: true
        });

        n = function e() {
          o.data = a = !a;
        };
      } else if (eo && eo.resolve) {
        var s = eo.resolve(undefined);

        n = function e() {
          s.then(i);
        };
      } else {
        n = function e() {
          Ka.call(r, i);
        };
      }

      return function (r) {
        var i = {
          fn: r,
          next: undefined
        };
        if (t) t.next = i;

        if (!e) {
          e = i;
          n();
        }

        t = i;
      };
    };

    function no(e) {
      var t, r;
      this.promise = new e(function (e, n) {
        if (t !== undefined || r !== undefined) throw TypeError("Bad Promise constructor");
        t = e;
        r = n;
      });
      this.resolve = j(t);
      this.reject = j(r);
    }

    var io = function io(e) {
      return new no(e);
    };

    var ao = {
      f: io
    };

    var oo = function oo(e) {
      try {
        return {
          e: false,
          v: e()
        };
      } catch (e) {
        return {
          e: true,
          v: e
        };
      }
    };

    var so = r.navigator;
    var uo = so && so.userAgent || "";

    var lo = function lo(e, t) {
      f(e);
      if (l(t) && t.constructor === e) return t;
      var r = ao.f(e);
      var n = r.resolve;
      n(t);
      return r.promise;
    };

    var fo = function fo(e, t, r) {
      for (var n in t) {
        B(e, n, t[n], r);
      }

      return e;
    };

    var co = $a.set;
    var vo = ro();
    var ho = "Promise";
    var po = r.TypeError;
    var yo = r.process;
    var go = yo && yo.versions;
    var mo = go && go.v8 || "";
    var bo = r[ho];
    var wo = kt(yo) == "process";

    var So = function e() {};

    var xo, Eo, Bo, jo;

    var _o = Eo = ao.f;

    var Xo = !!function () {
      try {
        var e = bo.resolve(1);

        var t = (e.constructor = {})[L("species")] = function (e) {
          e(So, So);
        };

        return (wo || typeof PromiseRejectionEvent == "function") && e.then(So) instanceof t && mo.indexOf("6.6") !== 0 && uo.indexOf("Chrome/66") === -1;
      } catch (e) {}
    }();

    var Oo = function e(t) {
      var r;
      return l(t) && typeof (r = t.then) == "function" ? r : false;
    };

    var No = function e(t, r) {
      if (t._n) return;
      t._n = true;
      var n = t._c;
      vo(function () {
        var e = t._v;
        var i = t._s == 1;
        var a = 0;

        var o = function r(n) {
          var a = i ? n.ok : n.fail;
          var o = n.resolve;
          var s = n.reject;
          var u = n.domain;
          var l, f, c;

          try {
            if (a) {
              if (!i) {
                if (t._h == 2) To(t);
                t._h = 1;
              }

              if (a === true) l = e;else {
                if (u) u.enter();
                l = a(e);

                if (u) {
                  u.exit();
                  c = true;
                }
              }

              if (l === n.promise) {
                s(po("Promise-chain cycle"));
              } else if (f = Oo(l)) {
                f.call(l, o, s);
              } else o(l);
            } else s(e);
          } catch (e) {
            if (u && !c) u.exit();
            s(e);
          }
        };

        while (n.length > a) {
          o(n[a++]);
        }

        t._c = [];
        t._n = false;
        if (r && !t._h) Po(t);
      });
    };

    var Po = function e(t) {
      co.call(r, function () {
        var e = t._v;
        var n = Ao(t);
        var i, a, o;

        if (n) {
          i = oo(function () {
            if (wo) {
              yo.emit("unhandledRejection", e, t);
            } else if (a = r.onunhandledrejection) {
              a({
                promise: t,
                reason: e
              });
            } else if ((o = r.console) && o.error) {
              o.error("Unhandled promise rejection", e);
            }
          });
          t._h = wo || Ao(t) ? 2 : 1;
        }

        t._a = undefined;
        if (n && i.e) throw i.v;
      });
    };

    var Ao = function e(t) {
      return t._h !== 1 && (t._a || t._c).length === 0;
    };

    var To = function e(t) {
      co.call(r, function () {
        var e;

        if (wo) {
          yo.emit("rejectionHandled", t);
        } else if (e = r.onrejectionhandled) {
          e({
            promise: t,
            reason: t._v
          });
        }
      });
    };

    var Co = function e(t) {
      var r = this;
      if (r._d) return;
      r._d = true;
      r = r._w || r;
      r._v = t;
      r._s = 2;
      if (!r._a) r._a = r._c.slice();
      No(r, true);
    };

    var ko = function e(t) {
      var r = this;
      var n;
      if (r._d) return;
      r._d = true;
      r = r._w || r;

      try {
        if (r === t) throw po("Promise can't be resolved itself");

        if (n = Oo(t)) {
          vo(function () {
            var i = {
              _w: r,
              _d: false
            };

            try {
              n.call(t, _(e, i, 1), _(Co, i, 1));
            } catch (e) {
              Co.call(i, e);
            }
          });
        } else {
          r._v = t;
          r._s = 1;
          No(r, false);
        }
      } catch (e) {
        Co.call({
          _w: r,
          _d: false
        }, e);
      }
    };

    if (!Xo) {
      bo = function e(t) {
        Ia(this, bo, ho, "_h");
        j(t);
        xo.call(this);

        try {
          t(_(ko, this, 1), _(Co, this, 1));
        } catch (e) {
          Co.call(this, e);
        }
      };

      xo = function e(t) {
        this._c = [];
        this._a = undefined;
        this._s = 0;
        this._d = false;
        this._v = undefined;
        this._h = 0;
        this._n = false;
      };

      xo.prototype = fo(bo.prototype, {
        then: function e(t, r) {
          var n = _o(Xa(this, bo));

          n.ok = typeof t == "function" ? t : true;
          n.fail = typeof r == "function" && r;
          n.domain = wo ? yo.domain : undefined;

          this._c.push(n);

          if (this._a) this._a.push(n);
          if (this._s) No(this, false);
          return n.promise;
        },
        catch: function e(t) {
          return this.then(undefined, t);
        }
      });

      Bo = function e() {
        var t = new xo();
        this.promise = t;
        this.resolve = _(ko, t, 1);
        this.reject = _(Co, t, 1);
      };

      ao.f = _o = function e(t) {
        return t === bo || t === jo ? new Bo(t) : Eo(t);
      };
    }

    N(N.G + N.W + N.F * !Xo, {
      Promise: bo
    });
    H(bo, ho);
    Ri(ho);
    jo = s[ho];
    N(N.S + N.F * !Xo, ho, {
      reject: function e(t) {
        var r = _o(this);

        var n = r.reject;
        n(t);
        return r.promise;
      }
    });
    N(N.S + N.F * (M || !Xo), ho, {
      resolve: function e(t) {
        return lo(M && this === jo ? bo : this, t);
      }
    });
    N(N.S + N.F * !(Xo && oi(function (e) {
      bo.all(e)["catch"](So);
    })), ho, {
      all: function e(t) {
        var r = this;

        var n = _o(r);

        var i = n.resolve;
        var a = n.reject;
        var o = oo(function () {
          var e = [];
          var n = 0;
          var o = 1;
          Ma(t, false, function (t) {
            var s = n++;
            var u = false;
            e.push(undefined);
            o++;
            r.resolve(t).then(function (t) {
              if (u) return;
              u = true;
              e[s] = t;
              --o || i(e);
            }, a);
          });
          --o || i(e);
        });
        if (o.e) a(o.v);
        return n.promise;
      },
      race: function e(t) {
        var r = this;

        var n = _o(r);

        var i = n.reject;
        var a = oo(function () {
          Ma(t, false, function (e) {
            r.resolve(e).then(n.resolve, i);
          });
        });
        if (a.e) i(a.v);
        return n.promise;
      }
    });

    var Io = function Io(e, t) {
      if (!l(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
      return e;
    };

    var Mo = m.f;
    var Fo = P.fastKey;
    var Lo = o ? "_s" : "size";

    var Do = function e(t, r) {
      var n = Fo(r);
      var i;
      if (n !== "F") return t._i[n];

      for (i = t._f; i; i = i.n) {
        if (i.k == r) return i;
      }
    };

    var Ro = {
      getConstructor: function e(t, r, n, i) {
        var a = t(function (e, t) {
          Ia(e, a, r, "_i");
          e._t = r;
          e._i = _e(null);
          e._f = undefined;
          e._l = undefined;
          e[Lo] = 0;
          if (t != undefined) Ma(t, n, e[i], e);
        });
        fo(a.prototype, {
          clear: function e() {
            for (var t = Io(this, r), n = t._i, i = t._f; i; i = i.n) {
              i.r = true;
              if (i.p) i.p = i.p.n = undefined;
              delete n[i.i];
            }

            t._f = t._l = undefined;
            t[Lo] = 0;
          },
          delete: function e(t) {
            var n = Io(this, r);
            var i = Do(n, t);

            if (i) {
              var a = i.n;
              var o = i.p;
              delete n._i[i.i];
              i.r = true;
              if (o) o.n = a;
              if (a) a.p = o;
              if (n._f == i) n._f = a;
              if (n._l == i) n._l = o;
              n[Lo]--;
            }

            return !!i;
          },
          forEach: function e(t) {
            Io(this, r);

            var n = _(t, arguments.length > 1 ? arguments[1] : undefined, 3);

            var i;

            while (i = i ? i.n : this._f) {
              n(i.v, i.k, this);

              while (i && i.r) {
                i = i.p;
              }
            }
          },
          has: function e(t) {
            return !!Do(Io(this, r), t);
          }
        });
        if (o) Mo(a.prototype, "size", {
          get: function e() {
            return Io(this, r)[Lo];
          }
        });
        return a;
      },
      def: function e(t, r, n) {
        var i = Do(t, r);
        var a, o;

        if (i) {
          i.v = n;
        } else {
          t._l = i = {
            i: o = Fo(r, true),
            k: r,
            v: n,
            p: a = t._l,
            n: undefined,
            r: false
          };
          if (!t._f) t._f = i;
          if (a) a.n = i;
          t[Lo]++;
          if (o !== "F") t._i[o] = i;
        }

        return t;
      },
      getEntry: Do,
      setStrong: function e(t, r, n) {
        Sn(t, r, function (e, t) {
          this._t = Io(e, r);
          this._k = t;
          this._l = undefined;
        }, function () {
          var e = this;
          var t = e._k;
          var r = e._l;

          while (r && r.r) {
            r = r.p;
          }

          if (!e._t || !(e._l = r = r ? r.n : e._t._f)) {
            e._t = undefined;
            return Hi(1);
          }

          if (t == "keys") return Hi(0, r.k);
          if (t == "values") return Hi(0, r.v);
          return Hi(0, [r.k, r.v]);
        }, n ? "entries" : "values", !n, true);
        Ri(r);
      }
    };

    var Ho = function Ho(e, t, n, i, o, s) {
      var u = r[e];
      var f = u;
      var c = o ? "set" : "add";
      var v = f && f.prototype;
      var h = {};

      var d = function e(t) {
        var r = v[t];
        B(v, t, t == "delete" ? function (e) {
          return s && !l(e) ? false : r.call(this, e === 0 ? 0 : e);
        } : t == "has" ? function e(t) {
          return s && !l(t) ? false : r.call(this, t === 0 ? 0 : t);
        } : t == "get" ? function e(t) {
          return s && !l(t) ? undefined : r.call(this, t === 0 ? 0 : t);
        } : t == "add" ? function e(t) {
          r.call(this, t === 0 ? 0 : t);
          return this;
        } : function e(t, n) {
          r.call(this, t === 0 ? 0 : t, n);
          return this;
        });
      };

      if (typeof f != "function" || !(s || v.forEach && !a(function () {
        new f().entries().next();
      }))) {
        f = i.getConstructor(t, e, o, c);
        fo(f.prototype, n);
        P.NEED = true;
      } else {
        var p = new f();
        var y = p[c](s ? {} : -0, 1) != p;
        var g = a(function () {
          p.has(1);
        });
        var m = oi(function (e) {
          new f(e);
        });
        var b = !s && a(function () {
          var e = new f();
          var t = 5;

          while (t--) {
            e[c](t, t);
          }

          return !e.has(-0);
        });

        if (!m) {
          f = t(function (t, r) {
            Ia(t, f, e);
            var n = lr(new u(), t, f);
            if (r != undefined) Ma(r, o, n[c], n);
            return n;
          });
          f.prototype = v;
          v.constructor = f;
        }

        if (g || b) {
          d("delete");
          d("has");
          o && d("get");
        }

        if (b || y) d(c);
        if (s && v.clear) delete v.clear;
      }

      H(f, e);
      h[e] = f;
      N(N.G + N.W + N.F * (f != u), h);
      if (!s) i.setStrong(f, e, o);
      return f;
    };

    var Wo = "Map";
    var zo = Ho(Wo, function (e) {
      return function t() {
        return e(this, arguments.length > 0 ? arguments[0] : undefined);
      };
    }, {
      get: function e(t) {
        var r = Ro.getEntry(Io(this, Wo), t);
        return r && r.v;
      },
      set: function e(t, r) {
        return Ro.def(Io(this, Wo), t === 0 ? 0 : t, r);
      }
    }, Ro, true);
    var Uo = "Set";
    var Go = Ho(Uo, function (e) {
      return function t() {
        return e(this, arguments.length > 0 ? arguments[0] : undefined);
      };
    }, {
      add: function e(t) {
        return Ro.def(Io(this, Uo), t = t === 0 ? 0 : t, t);
      }
    }, Ro);
    var Vo = P.getWeak;
    var Yo = pi(5);
    var Jo = pi(6);
    var qo = 0;

    var $o = function e(t) {
      return t._l || (t._l = new Ko());
    };

    var Ko = function e() {
      this.a = [];
    };

    var Qo = function e(t, r) {
      return Yo(t.a, function (e) {
        return e[0] === r;
      });
    };

    Ko.prototype = {
      get: function e(t) {
        var r = Qo(this, t);
        if (r) return r[1];
      },
      has: function e(t) {
        return !!Qo(this, t);
      },
      set: function e(t, r) {
        var n = Qo(this, t);
        if (n) n[1] = r;else this.a.push([t, r]);
      },
      delete: function e(t) {
        var r = Jo(this.a, function (e) {
          return e[0] === t;
        });
        if (~r) this.a.splice(r, 1);
        return !!~r;
      }
    };
    var Zo = {
      getConstructor: function e(t, r, n, a) {
        var o = t(function (e, t) {
          Ia(e, o, r, "_i");
          e._t = r;
          e._i = qo++;
          e._l = undefined;
          if (t != undefined) Ma(t, n, e[a], e);
        });
        fo(o.prototype, {
          delete: function e(t) {
            if (!l(t)) return false;
            var n = Vo(t);
            if (n === true) return $o(Io(this, r))["delete"](t);
            return n && i(n, this._i) && delete n[this._i];
          },
          has: function e(t) {
            if (!l(t)) return false;
            var n = Vo(t);
            if (n === true) return $o(Io(this, r)).has(t);
            return n && i(n, this._i);
          }
        });
        return o;
      },
      def: function e(t, r, n) {
        var i = Vo(f(r), true);
        if (i === true) $o(t).set(r, n);else i[t._i] = n;
        return t;
      },
      ufstore: $o
    };
    var es = t(function (e) {
      var t = pi(0);
      var r = "WeakMap";
      var n = P.getWeak;
      var i = Object.isExtensible;
      var o = Zo.ufstore;
      var s = {};
      var u;

      var f = function e(t) {
        return function e() {
          return t(this, arguments.length > 0 ? arguments[0] : undefined);
        };
      };

      var c = {
        get: function e(t) {
          if (l(t)) {
            var i = n(t);
            if (i === true) return o(Io(this, r)).get(t);
            return i ? i[this._i] : undefined;
          }
        },
        set: function e(t, n) {
          return Zo.def(Io(this, r), t, n);
        }
      };
      var v = e.exports = Ho(r, f, c, Zo, true, true);

      if (a(function () {
        return new v().set((Object.freeze || Object)(s), 7).get(s) != 7;
      })) {
        u = Zo.getConstructor(f, r);
        Xt(u.prototype, c);
        P.NEED = true;
        t(["delete", "has", "get", "set"], function (e) {
          var t = v.prototype;
          var r = t[e];
          B(t, e, function (t, n) {
            if (l(t) && !i(t)) {
              if (!this._f) this._f = new u();

              var a = this._f[e](t, n);

              return e == "set" ? this : a;
            }

            return r.call(this, t, n);
          });
        });
      }
    });
    var ts = "WeakSet";
    Ho(ts, function (e) {
      return function t() {
        return e(this, arguments.length > 0 ? arguments[0] : undefined);
      };
    }, {
      add: function e(t) {
        return Zo.def(Io(this, ts), t, true);
      }
    }, Zo, false, true);
    var rs = E("typed_array");
    var ns = E("view");
    var is = !!(r.ArrayBuffer && r.DataView);
    var as = is;
    var os = 0;
    var ss = 9;
    var us;
    var ls = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");

    while (os < ss) {
      if (us = r[ls[os++]]) {
        w(us.prototype, rs, true);
        w(us.prototype, ns, true);
      } else as = false;
    }

    var fs = {
      ABV: is,
      CONSTR: as,
      TYPED: rs,
      VIEW: ns
    };

    var cs = function cs(e) {
      if (e === undefined) return 0;
      var t = Z(e);
      var r = te(t);
      if (t !== r) throw RangeError("Wrong length!");
      return r;
    };

    var vs = t(function (e, t) {
      var n = Ne.f;
      var i = m.f;
      var s = "ArrayBuffer";
      var u = "DataView";
      var l = "prototype";
      var f = "Wrong length!";
      var c = "Wrong index!";
      var v = r[s];
      var h = r[u];
      var d = r.Math;
      var p = r.RangeError;
      var y = r.Infinity;
      var g = v;
      var b = d.abs;
      var S = d.pow;
      var x = d.floor;
      var E = d.log;
      var B = d.LN2;
      var j = "buffer";
      var _ = "byteLength";
      var X = "byteOffset";
      var O = o ? "_b" : j;
      var N = o ? "_l" : _;
      var P = o ? "_o" : X;

      function A(e, t, r) {
        var n = new Array(r);
        var i = r * 8 - t - 1;
        var a = (1 << i) - 1;
        var o = a >> 1;
        var s = t === 23 ? S(2, -24) - S(2, -77) : 0;
        var u = 0;
        var l = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
        var f, c, v;
        e = b(e);

        if (e != e || e === y) {
          c = e != e ? 1 : 0;
          f = a;
        } else {
          f = x(E(e) / B);

          if (e * (v = S(2, -f)) < 1) {
            f--;
            v *= 2;
          }

          if (f + o >= 1) {
            e += s / v;
          } else {
            e += s * S(2, 1 - o);
          }

          if (e * v >= 2) {
            f++;
            v /= 2;
          }

          if (f + o >= a) {
            c = 0;
            f = a;
          } else if (f + o >= 1) {
            c = (e * v - 1) * S(2, t);
            f = f + o;
          } else {
            c = e * S(2, o - 1) * S(2, t);
            f = 0;
          }
        }

        for (; t >= 8; n[u++] = c & 255, c /= 256, t -= 8) {}

        f = f << t | c;
        i += t;

        for (; i > 0; n[u++] = f & 255, f /= 256, i -= 8) {}

        n[--u] |= l * 128;
        return n;
      }

      function T(e, t, r) {
        var n = r * 8 - t - 1;
        var i = (1 << n) - 1;
        var a = i >> 1;
        var o = n - 7;
        var s = r - 1;
        var u = e[s--];
        var l = u & 127;
        var f;
        u >>= 7;

        for (; o > 0; l = l * 256 + e[s], s--, o -= 8) {}

        f = l & (1 << -o) - 1;
        l >>= -o;
        o += t;

        for (; o > 0; f = f * 256 + e[s], s--, o -= 8) {}

        if (l === 0) {
          l = 1 - a;
        } else if (l === i) {
          return f ? NaN : u ? -y : y;
        } else {
          f = f + S(2, t);
          l = l - a;
        }

        return (u ? -1 : 1) * f * S(2, l - t);
      }

      function C(e) {
        return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0];
      }

      function k(e) {
        return [e & 255];
      }

      function I(e) {
        return [e & 255, e >> 8 & 255];
      }

      function M(e) {
        return [e & 255, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255];
      }

      function F(e) {
        return A(e, 52, 8);
      }

      function L(e) {
        return A(e, 23, 4);
      }

      function D(e, t, r) {
        i(e[l], t, {
          get: function e() {
            return this[r];
          }
        });
      }

      function R(e, t, r, n) {
        var i = +r;
        var a = cs(i);
        if (a + t > e[N]) throw p(c);
        var o = e[O]._b;
        var s = a + e[P];
        var u = o.slice(s, s + t);
        return n ? u : u.reverse();
      }

      function W(e, t, r, n, i, a) {
        var o = +r;
        var s = cs(o);
        if (s + t > e[N]) throw p(c);
        var u = e[O]._b;
        var l = s + e[P];
        var f = n(+i);

        for (var v = 0; v < t; v++) {
          u[l + v] = f[a ? v : t - v - 1];
        }
      }

      if (!fs.ABV) {
        v = function e(t) {
          Ia(this, v, s);
          var r = cs(t);
          this._b = Ti.call(new Array(r), 0);
          this[N] = r;
        };

        h = function e(t, r, n) {
          Ia(this, h, u);
          Ia(t, v, u);
          var i = t[N];
          var a = Z(r);
          if (a < 0 || a > i) throw p("Wrong offset!");
          n = n === undefined ? i - a : te(n);
          if (a + n > i) throw p(f);
          this[O] = t;
          this[P] = a;
          this[N] = n;
        };

        if (o) {
          D(v, _, "_l");
          D(h, j, "_b");
          D(h, _, "_l");
          D(h, X, "_o");
        }

        fo(h[l], {
          getInt8: function e(t) {
            return R(this, 1, t)[0] << 24 >> 24;
          },
          getUint8: function e(t) {
            return R(this, 1, t)[0];
          },
          getInt16: function e(t) {
            var r = R(this, 2, t, arguments[1]);
            return (r[1] << 8 | r[0]) << 16 >> 16;
          },
          getUint16: function e(t) {
            var r = R(this, 2, t, arguments[1]);
            return r[1] << 8 | r[0];
          },
          getInt32: function e(t) {
            return C(R(this, 4, t, arguments[1]));
          },
          getUint32: function e(t) {
            return C(R(this, 4, t, arguments[1])) >>> 0;
          },
          getFloat32: function e(t) {
            return T(R(this, 4, t, arguments[1]), 23, 4);
          },
          getFloat64: function e(t) {
            return T(R(this, 8, t, arguments[1]), 52, 8);
          },
          setInt8: function e(t, r) {
            W(this, 1, t, k, r);
          },
          setUint8: function e(t, r) {
            W(this, 1, t, k, r);
          },
          setInt16: function e(t, r) {
            W(this, 2, t, I, r, arguments[2]);
          },
          setUint16: function e(t, r) {
            W(this, 2, t, I, r, arguments[2]);
          },
          setInt32: function e(t, r) {
            W(this, 4, t, M, r, arguments[2]);
          },
          setUint32: function e(t, r) {
            W(this, 4, t, M, r, arguments[2]);
          },
          setFloat32: function e(t, r) {
            W(this, 4, t, L, r, arguments[2]);
          },
          setFloat64: function e(t, r) {
            W(this, 8, t, F, r, arguments[2]);
          }
        });
      } else {
        if (!a(function () {
          v(1);
        }) || !a(function () {
          new v(-1);
        }) || a(function () {
          new v();
          new v(1.5);
          new v(NaN);
          return v.name != s;
        })) {
          v = function e(t) {
            Ia(this, v);
            return new g(cs(t));
          };

          var z = v[l] = g[l];

          for (var U = n(g), G = 0, V; U.length > G;) {
            if (!((V = U[G++]) in v)) w(v, V, g[V]);
          }

          z.constructor = v;
        }

        var Y = new h(new v(2));
        var J = h[l].setInt8;
        Y.setInt8(0, 2147483648);
        Y.setInt8(1, 2147483649);
        if (Y.getInt8(0) || !Y.getInt8(1)) fo(h[l], {
          setInt8: function e(t, r) {
            J.call(this, t, r << 24 >> 24);
          },
          setUint8: function e(t, r) {
            J.call(this, t, r << 24 >> 24);
          }
        }, true);
      }

      H(v, s);
      H(h, u);
      w(h[l], fs.VIEW, true);
      t[s] = v;
      t[u] = h;
    });
    var hs = r.ArrayBuffer;
    var ds = vs.ArrayBuffer;
    var ps = vs.DataView;
    var ys = fs.ABV && hs.isView;
    var gs = ds.prototype.slice;
    var ms = fs.VIEW;
    var bs = "ArrayBuffer";
    N(N.G + N.W + N.F * (hs !== ds), {
      ArrayBuffer: ds
    });
    N(N.S + N.F * !fs.CONSTR, bs, {
      isView: function e(t) {
        return ys && ys(t) || l(t) && ms in t;
      }
    });
    N(N.P + N.U + N.F * a(function () {
      return !new ds(2).slice(1, undefined).byteLength;
    }), bs, {
      slice: function e(t, r) {
        if (gs !== undefined && r === undefined) return gs.call(f(this), t);
        var n = f(this).byteLength;
        var i = ie(t, n);
        var a = ie(r === undefined ? n : r, n);
        var o = new (Xa(this, ds))(te(a - i));
        var s = new ps(this);
        var u = new ps(o);
        var l = 0;

        while (i < a) {
          u.setUint8(l++, s.getUint8(i++));
        }

        return o;
      }
    });
    Ri(bs);
    N(N.G + N.W + N.F * !fs.ABV, {
      DataView: vs.DataView
    });
    var ws = t(function (e) {
      if (o) {
        var t = r;
        var n = a;
        var s = N;
        var u = fs;
        var f = vs;
        var c = _;
        var v = Ia;
        var h = b;
        var d = w;
        var y = fo;
        var g = Z;
        var S = te;
        var x = cs;
        var B = ie;
        var j = p;
        var X = i;
        var O = kt;
        var P = l;
        var A = bt;
        var T = Zn;
        var C = _e;
        var k = xt;
        var I = Ne.f;
        var M = ri;
        var F = E;
        var D = L;
        var R = pi;
        var H = ae;
        var W = Xa;
        var z = Wi;
        var U = vn;
        var G = oi;
        var V = Ri;
        var Y = Ti;
        var J = Oi;
        var q = m;
        var $ = Le;
        var K = q.f;
        var Q = $.f;
        var ee = t.RangeError;
        var re = t.TypeError;
        var ne = t.Uint8Array;
        var oe = "ArrayBuffer";
        var se = "Shared" + oe;
        var ue = "BYTES_PER_ELEMENT";
        var le = "prototype";
        var fe = Array[le];
        var ce = f.ArrayBuffer;
        var ve = f.DataView;
        var he = R(0);
        var de = R(2);
        var pe = R(3);
        var ye = R(4);
        var ge = R(5);
        var me = R(6);
        var be = H(true);
        var we = H(false);
        var Se = z.values;
        var xe = z.keys;
        var Ee = z.entries;
        var Be = fe.lastIndexOf;
        var je = fe.reduce;
        var Xe = fe.reduceRight;
        var Oe = fe.join;
        var Pe = fe.sort;
        var Ae = fe.slice;
        var Te = fe.toString;
        var Ce = fe.toLocaleString;
        var ke = D("iterator");
        var Ie = D("toStringTag");
        var Me = F("typed_constructor");
        var Fe = F("def_constructor");
        var De = u.CONSTR;
        var Re = u.TYPED;
        var He = u.VIEW;
        var We = "Wrong length!";
        var ze = R(1, function (e, t) {
          return Je(W(e, e[Fe]), t);
        });
        var Ue = n(function () {
          return new ne(new Uint16Array([1]).buffer)[0] === 1;
        });
        var Ge = !!ne && !!ne[le].set && n(function () {
          new ne(1).set({});
        });

        var Ve = function e(t, r) {
          var n = g(t);
          if (n < 0 || n % r) throw ee("Wrong offset!");
          return n;
        };

        var Ye = function e(t) {
          if (P(t) && Re in t) return t;
          throw re(t + " is not a typed array!");
        };

        var Je = function e(t, r) {
          if (!(P(t) && Me in t)) {
            throw re("It is not a typed array constructor!");
          }

          return new t(r);
        };

        var qe = function e(t, r) {
          return $e(W(t, t[Fe]), r);
        };

        var $e = function e(t, r) {
          var n = 0;
          var i = r.length;
          var a = Je(t, i);

          while (i > n) {
            a[n] = r[n++];
          }

          return a;
        };

        var Ke = function e(t, r, n) {
          K(t, r, {
            get: function e() {
              return this._d[n];
            }
          });
        };

        var Qe = function e(t) {
          var r = A(t);
          var n = arguments.length;
          var i = n > 1 ? arguments[1] : undefined;
          var a = i !== undefined;
          var o = M(r);
          var s, u, l, f, v, h;

          if (o != undefined && !T(o)) {
            for (h = o.call(r), l = [], s = 0; !(v = h.next()).done; s++) {
              l.push(v.value);
            }

            r = l;
          }

          if (a && n > 2) i = c(i, arguments[2], 2);

          for (s = 0, u = S(r.length), f = Je(this, u); u > s; s++) {
            f[s] = a ? i(r[s], s) : r[s];
          }

          return f;
        };

        var Ze = function e() {
          var t = 0;
          var r = arguments.length;
          var n = Je(this, r);

          while (r > t) {
            n[t] = arguments[t++];
          }

          return n;
        };

        var et = !!ne && n(function () {
          Ce.call(new ne(1));
        });

        var tt = function e() {
          return Ce.apply(et ? Ae.call(Ye(this)) : Ye(this), arguments);
        };

        var rt = {
          copyWithin: function e(t, r) {
            return J.call(Ye(this), t, r, arguments.length > 2 ? arguments[2] : undefined);
          },
          every: function e(t) {
            return ye(Ye(this), t, arguments.length > 1 ? arguments[1] : undefined);
          },
          fill: function e(t) {
            return Y.apply(Ye(this), arguments);
          },
          filter: function e(t) {
            return qe(this, de(Ye(this), t, arguments.length > 1 ? arguments[1] : undefined));
          },
          find: function e(t) {
            return ge(Ye(this), t, arguments.length > 1 ? arguments[1] : undefined);
          },
          findIndex: function e(t) {
            return me(Ye(this), t, arguments.length > 1 ? arguments[1] : undefined);
          },
          forEach: function e(t) {
            he(Ye(this), t, arguments.length > 1 ? arguments[1] : undefined);
          },
          indexOf: function e(t) {
            return we(Ye(this), t, arguments.length > 1 ? arguments[1] : undefined);
          },
          includes: function e(t) {
            return be(Ye(this), t, arguments.length > 1 ? arguments[1] : undefined);
          },
          join: function e(t) {
            return Oe.apply(Ye(this), arguments);
          },
          lastIndexOf: function e(t) {
            return Be.apply(Ye(this), arguments);
          },
          map: function e(t) {
            return ze(Ye(this), t, arguments.length > 1 ? arguments[1] : undefined);
          },
          reduce: function e(t) {
            return je.apply(Ye(this), arguments);
          },
          reduceRight: function e(t) {
            return Xe.apply(Ye(this), arguments);
          },
          reverse: function e() {
            var t = this;
            var r = Ye(t).length;
            var n = Math.floor(r / 2);
            var i = 0;
            var a;

            while (i < n) {
              a = t[i];
              t[i++] = t[--r];
              t[r] = a;
            }

            return t;
          },
          some: function e(t) {
            return pe(Ye(this), t, arguments.length > 1 ? arguments[1] : undefined);
          },
          sort: function e(t) {
            return Pe.call(Ye(this), t);
          },
          subarray: function e(t, r) {
            var n = Ye(this);
            var i = n.length;
            var a = B(t, i);
            return new (W(n, n[Fe]))(n.buffer, n.byteOffset + a * n.BYTES_PER_ELEMENT, S((r === undefined ? i : B(r, i)) - a));
          }
        };

        var nt = function e(t, r) {
          return qe(this, Ae.call(Ye(this), t, r));
        };

        var it = function e(t) {
          Ye(this);
          var r = Ve(arguments[1], 1);
          var n = this.length;
          var i = A(t);
          var a = S(i.length);
          var o = 0;
          if (a + r > n) throw ee(We);

          while (o < a) {
            this[r + o] = i[o++];
          }
        };

        var at = {
          entries: function e() {
            return Ee.call(Ye(this));
          },
          keys: function e() {
            return xe.call(Ye(this));
          },
          values: function e() {
            return Se.call(Ye(this));
          }
        };

        var ot = function e(t, r) {
          return P(t) && t[Re] && babelHelpers.typeof(r) != "symbol" && r in t && String(+r) == String(r);
        };

        var st = function e(t, r) {
          return ot(t, r = j(r, true)) ? h(2, t[r]) : Q(t, r);
        };

        var ut = function e(t, r, n) {
          if (ot(t, r = j(r, true)) && P(n) && X(n, "value") && !X(n, "get") && !X(n, "set") && !n.configurable && (!X(n, "writable") || n.writable) && (!X(n, "enumerable") || n.enumerable)) {
            t[r] = n.value;
            return t;
          }

          return K(t, r, n);
        };

        if (!De) {
          $.f = st;
          q.f = ut;
        }

        s(s.S + s.F * !De, "Object", {
          getOwnPropertyDescriptor: st,
          defineProperty: ut
        });

        if (n(function () {
          Te.call({});
        })) {
          Te = Ce = function e() {
            return Oe.call(this);
          };
        }

        var lt = y({}, rt);
        y(lt, at);
        d(lt, ke, at.values);
        y(lt, {
          slice: nt,
          set: it,
          constructor: function e() {},
          toString: Te,
          toLocaleString: tt
        });
        Ke(lt, "buffer", "b");
        Ke(lt, "byteOffset", "o");
        Ke(lt, "byteLength", "l");
        Ke(lt, "length", "e");
        K(lt, Ie, {
          get: function e() {
            return this[Re];
          }
        });

        e.exports = function (e, r, i, a) {
          a = !!a;
          var o = e + (a ? "Clamped" : "") + "Array";
          var l = "get" + e;
          var f = "set" + e;
          var c = t[o];
          var h = c || {};
          var p = c && k(c);
          var y = !c || !u.ABV;
          var g = {};
          var m = c && c[le];

          var b = function e(t, n) {
            var i = t._d;
            return i.v[l](n * r + i.o, Ue);
          };

          var w = function e(t, n, i) {
            var o = t._d;
            if (a) i = (i = Math.round(i)) < 0 ? 0 : i > 255 ? 255 : i & 255;
            o.v[f](n * r + o.o, i, Ue);
          };

          var E = function e(t, r) {
            K(t, r, {
              get: function e() {
                return b(this, r);
              },
              set: function e(t) {
                return w(this, r, t);
              },
              enumerable: true
            });
          };

          if (y) {
            c = i(function (e, t, n, i) {
              v(e, c, o, "_d");
              var a = 0;
              var s = 0;
              var u, l, f, h;

              if (!P(t)) {
                f = x(t);
                l = f * r;
                u = new ce(l);
              } else if (t instanceof ce || (h = O(t)) == oe || h == se) {
                u = t;
                s = Ve(n, r);
                var p = t.byteLength;

                if (i === undefined) {
                  if (p % r) throw ee(We);
                  l = p - s;
                  if (l < 0) throw ee(We);
                } else {
                  l = S(i) * r;
                  if (l + s > p) throw ee(We);
                }

                f = l / r;
              } else if (Re in t) {
                return $e(c, t);
              } else {
                return Qe.call(c, t);
              }

              d(e, "_d", {
                b: u,
                o: s,
                l: l,
                e: f,
                v: new ve(u)
              });

              while (a < f) {
                E(e, a++);
              }
            });
            m = c[le] = C(lt);
            d(m, "constructor", c);
          } else if (!n(function () {
            c(1);
          }) || !n(function () {
            new c(-1);
          }) || !G(function (e) {
            new c();
            new c(null);
            new c(1.5);
            new c(e);
          }, true)) {
            c = i(function (e, t, n, i) {
              v(e, c, o);
              var a;
              if (!P(t)) return new h(x(t));

              if (t instanceof ce || (a = O(t)) == oe || a == se) {
                return i !== undefined ? new h(t, Ve(n, r), i) : n !== undefined ? new h(t, Ve(n, r)) : new h(t);
              }

              if (Re in t) return $e(c, t);
              return Qe.call(c, t);
            });
            he(p !== Function.prototype ? I(h).concat(I(p)) : I(h), function (e) {
              if (!(e in c)) d(c, e, h[e]);
            });
            c[le] = m;
            m.constructor = c;
          }

          var B = m[ke];
          var j = !!B && (B.name == "values" || B.name == undefined);
          var _ = at.values;
          d(c, Me, true);
          d(m, Re, o);
          d(m, He, true);
          d(m, Fe, c);

          if (a ? new c(1)[Ie] != o : !(Ie in m)) {
            K(m, Ie, {
              get: function e() {
                return o;
              }
            });
          }

          g[o] = c;
          s(s.G + s.W + s.F * (c != h), g);
          s(s.S, o, {
            BYTES_PER_ELEMENT: r
          });
          s(s.S + s.F * n(function () {
            h.of.call(c, 1);
          }), o, {
            from: Qe,
            of: Ze
          });
          if (!(ue in m)) d(m, ue, r);
          s(s.P, o, rt);
          V(o);
          s(s.P + s.F * Ge, o, {
            set: it
          });
          s(s.P + s.F * !j, o, at);
          if (m.toString != Te) m.toString = Te;
          s(s.P + s.F * n(function () {
            new c(1).slice();
          }), o, {
            slice: nt
          });
          s(s.P + s.F * (n(function () {
            return [1, 2].toLocaleString() != new c([1, 2]).toLocaleString();
          }) || !n(function () {
            m.toLocaleString.call([1, 2]);
          })), o, {
            toLocaleString: tt
          });
          U[o] = j ? B : _;
          if (!j) d(m, ke, _);
        };
      } else e.exports = function () {};
    });
    ws("Int8", 1, function (e) {
      return function t(r, n, i) {
        return e(this, r, n, i);
      };
    });
    ws("Uint8", 1, function (e) {
      return function t(r, n, i) {
        return e(this, r, n, i);
      };
    });
    ws("Uint8", 1, function (e) {
      return function t(r, n, i) {
        return e(this, r, n, i);
      };
    }, true);
    ws("Int16", 2, function (e) {
      return function t(r, n, i) {
        return e(this, r, n, i);
      };
    });
    ws("Uint16", 2, function (e) {
      return function t(r, n, i) {
        return e(this, r, n, i);
      };
    });
    ws("Int32", 4, function (e) {
      return function t(r, n, i) {
        return e(this, r, n, i);
      };
    });
    ws("Uint32", 4, function (e) {
      return function t(r, n, i) {
        return e(this, r, n, i);
      };
    });
    ws("Float32", 4, function (e) {
      return function t(r, n, i) {
        return e(this, r, n, i);
      };
    });
    ws("Float64", 8, function (e) {
      return function t(r, n, i) {
        return e(this, r, n, i);
      };
    });
    var Ss = (r.Reflect || {}).apply;
    var xs = Function.apply;
    N(N.S + N.F * !a(function () {
      Ss(function () {});
    }), "Reflect", {
      apply: function e(t, r, n) {
        var i = j(t);
        var a = f(n);
        return Ss ? Ss(i, r, a) : xs.call(i, r, a);
      }
    });
    var Es = (r.Reflect || {}).construct;
    var Bs = a(function () {
      function e() {}

      return !(Es(function () {}, [], e) instanceof e);
    });
    var js = !a(function () {
      Es(function () {});
    });
    N(N.S + N.F * (Bs || js), "Reflect", {
      construct: function e(t, r) {
        j(t);
        f(r);
        var n = arguments.length < 3 ? t : j(arguments[2]);
        if (js && !Bs) return Es(t, r, n);

        if (t == n) {
          switch (r.length) {
            case 0:
              return new t();

            case 1:
              return new t(r[0]);

            case 2:
              return new t(r[0], r[1]);

            case 3:
              return new t(r[0], r[1], r[2]);

            case 4:
              return new t(r[0], r[1], r[2], r[3]);
          }

          var i = [null];
          i.push.apply(i, r);
          return new (Rt.apply(t, i))();
        }

        var a = n.prototype;

        var o = _e(l(a) ? a : Object.prototype);

        var s = Function.apply.call(t, o, r);
        return l(s) ? s : o;
      }
    });
    N(N.S + N.F * a(function () {
      Reflect.defineProperty(m.f({}, 1, {
        value: 1
      }), 1, {
        value: 2
      });
    }), "Reflect", {
      defineProperty: function e(t, r, n) {
        f(t);
        r = p(r, true);
        f(n);

        try {
          m.f(t, r, n);
          return true;
        } catch (e) {
          return false;
        }
      }
    });
    var _s = Le.f;
    N(N.S, "Reflect", {
      deleteProperty: function e(t, r) {
        var n = _s(f(t), r);

        return n && !n.configurable ? false : delete t[r];
      }
    });

    var Xs = function e(t) {
      this._t = f(t);
      this._i = 0;
      var r = this._k = [];
      var n;

      for (n in t) {
        r.push(n);
      }
    };

    dn(Xs, "Object", function () {
      var e = this;
      var t = e._k;
      var r;

      do {
        if (e._i >= t.length) return {
          value: undefined,
          done: true
        };
      } while (!((r = t[e._i++]) in e._t));

      return {
        value: r,
        done: false
      };
    });
    N(N.S, "Reflect", {
      enumerate: function e(t) {
        return new Xs(t);
      }
    });

    function Os(e, t) {
      var r = arguments.length < 3 ? e : arguments[2];
      var n, a;
      if (f(e) === r) return e[t];
      if (n = Le.f(e, t)) return i(n, "value") ? n.value : n.get !== undefined ? n.get.call(r) : undefined;
      if (l(a = xt(e))) return Os(a, t, r);
    }

    N(N.S, "Reflect", {
      get: Os
    });
    N(N.S, "Reflect", {
      getOwnPropertyDescriptor: function e(t, r) {
        return Le.f(f(t), r);
      }
    });
    N(N.S, "Reflect", {
      getPrototypeOf: function e(t) {
        return xt(f(t));
      }
    });
    N(N.S, "Reflect", {
      has: function e(t, r) {
        return r in t;
      }
    });
    var Ns = Object.isExtensible;
    N(N.S, "Reflect", {
      isExtensible: function e(t) {
        f(t);
        return Ns ? Ns(t) : true;
      }
    });
    var Ps = r.Reflect;

    var As = Ps && Ps.ownKeys || function e(t) {
      var r = Ne.f(f(t));
      var n = de.f;
      return n ? r.concat(n(t)) : r;
    };

    N(N.S, "Reflect", {
      ownKeys: As
    });
    var Ts = Object.preventExtensions;
    N(N.S, "Reflect", {
      preventExtensions: function e(t) {
        f(t);

        try {
          if (Ts) Ts(t);
          return true;
        } catch (e) {
          return false;
        }
      }
    });

    function Cs(e, t, r) {
      var n = arguments.length < 4 ? e : arguments[3];
      var a = Le.f(f(e), t);
      var o, s;

      if (!a) {
        if (l(s = xt(e))) {
          return Cs(s, t, r, n);
        }

        a = b(0);
      }

      if (i(a, "value")) {
        if (a.writable === false || !l(n)) return false;

        if (o = Le.f(n, t)) {
          if (o.get || o.set || o.writable === false) return false;
          o.value = r;
          m.f(n, t, o);
        } else m.f(n, t, b(0, r));

        return true;
      }

      return a.set === undefined ? false : (a.set.call(n, r), true);
    }

    N(N.S, "Reflect", {
      set: Cs
    });
    if (Pt) N(N.S, "Reflect", {
      setPrototypeOf: function e(t, r) {
        Pt.check(t, r);

        try {
          Pt.set(t, r);
          return true;
        } catch (e) {
          return false;
        }
      }
    });
    var ks = ae(true);
    N(N.P, "Array", {
      includes: function e(t) {
        return ks(this, t, arguments.length > 1 ? arguments[1] : undefined);
      }
    });
    Ai("includes");
    var Is = L("isConcatSpreadable");

    function Ms(e, t, r, n, i, a, o, s) {
      var u = i;
      var f = 0;
      var c = o ? _(o, s, 3) : false;
      var v, h;

      while (f < n) {
        if (f in r) {
          v = c ? c(r[f], f, t) : r[f];
          h = false;

          if (l(v)) {
            h = v[Is];
            h = h !== undefined ? !!h : me(v);
          }

          if (h && a > 0) {
            u = Ms(e, t, v, te(v.length), u, a - 1) - 1;
          } else {
            if (u >= 9007199254740991) throw TypeError();
            e[u] = v;
          }

          u++;
        }

        f++;
      }

      return u;
    }

    var Fs = Ms;
    N(N.P, "Array", {
      flatMap: function e(t) {
        var r = bt(this);
        var n, i;
        j(t);
        n = te(r.length);
        i = di(r, 0);
        Fs(i, r, r, n, 0, 1, t, arguments[1]);
        return i;
      }
    });
    Ai("flatMap");
    N(N.P, "Array", {
      flatten: function e() {
        var t = arguments[0];
        var r = bt(this);
        var n = te(r.length);
        var i = di(r, 0);
        Fs(i, r, r, n, 0, t === undefined ? 1 : Z(t));
        return i;
      }
    });
    Ai("flatten");
    var Ls = cn(true);
    N(N.P, "String", {
      at: function e(t) {
        return Ls(this, t);
      }
    });

    var Ds = function Ds(e, t, r, n) {
      var i = String(q(e));
      var a = i.length;
      var o = r === undefined ? " " : String(r);
      var s = te(t);
      if (s <= a || o == "") return i;
      var u = s - a;
      var l = jr.call(o, Math.ceil(u / o.length));
      if (l.length > u) l = l.slice(0, u);
      return n ? l + i : i + l;
    };

    N(N.P + N.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(uo), "String", {
      padStart: function e(t) {
        return Ds(this, t, arguments.length > 1 ? arguments[1] : undefined, true);
      }
    });
    N(N.P + N.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(uo), "String", {
      padEnd: function e(t) {
        return Ds(this, t, arguments.length > 1 ? arguments[1] : undefined, false);
      }
    });
    er("trimLeft", function (e) {
      return function t() {
        return e(this, 1);
      };
    }, "trimStart");
    er("trimRight", function (e) {
      return function t() {
        return e(this, 2);
      };
    }, "trimEnd");
    var Rs = RegExp.prototype;

    var Hs = function e(t, r) {
      this._r = t;
      this._s = r;
    };

    dn(Hs, "RegExp String", function e() {
      var t = this._r.exec(this._s);

      return {
        value: t,
        done: t === null
      };
    });
    N(N.P, "String", {
      matchAll: function e(t) {
        q(this);
        if (!jn(t)) throw TypeError(t + " is not a regexp!");
        var r = String(this);
        var n = "flags" in Rs ? String(t.flags) : zi.call(t);
        var i = new RegExp(t.source, ~n.indexOf("g") ? n : "g" + n);
        i.lastIndex = te(t.lastIndex);
        return new Hs(i, r);
      }
    });
    G("asyncIterator");
    G("observable");
    N(N.S, "Object", {
      getOwnPropertyDescriptors: function e(t) {
        var r = $(t);
        var n = Le.f;
        var i = As(r);
        var a = {};
        var o = 0;
        var s, u;

        while (i.length > o) {
          u = n(r, s = i[o++]);
          if (u !== undefined) ei(a, s, u);
        }

        return a;
      }
    });
    var Ws = ye.f;

    var zs = function zs(e) {
      return function (t) {
        var r = $(t);
        var n = ve(r);
        var i = n.length;
        var a = 0;
        var o = [];
        var s;

        while (i > a) {
          if (Ws.call(r, s = n[a++])) {
            o.push(e ? [s, r[s]] : r[s]);
          }
        }

        return o;
      };
    };

    var Us = zs(false);
    N(N.S, "Object", {
      values: function e(t) {
        return Us(t);
      }
    });
    var Gs = zs(true);
    N(N.S, "Object", {
      entries: function e(t) {
        return Gs(t);
      }
    });
    var Vs = !a(function () {
      var e = Math.random();

      __defineSetter__.call(null, e, function () {});

      delete r[e];
    });
    o && N(N.P + Vs, "Object", {
      __defineGetter__: function e(t, r) {
        m.f(bt(this), t, {
          get: j(r),
          enumerable: true,
          configurable: true
        });
      }
    });
    o && N(N.P + Vs, "Object", {
      __defineSetter__: function e(t, r) {
        m.f(bt(this), t, {
          set: j(r),
          enumerable: true,
          configurable: true
        });
      }
    });
    var Ys = Le.f;
    o && N(N.P + Vs, "Object", {
      __lookupGetter__: function e(t) {
        var r = bt(this);
        var n = p(t, true);
        var i;

        do {
          if (i = Ys(r, n)) return i.get;
        } while (r = xt(r));
      }
    });
    var Js = Le.f;
    o && N(N.P + Vs, "Object", {
      __lookupSetter__: function e(t) {
        var r = bt(this);
        var n = p(t, true);
        var i;

        do {
          if (i = Js(r, n)) return i.set;
        } while (r = xt(r));
      }
    });

    var qs = function qs(e, t) {
      var r = [];
      Ma(e, false, r.push, r, t);
      return r;
    };

    var $s = function $s(e) {
      return function t() {
        if (kt(this) != e) throw TypeError(e + "#toJSON isn't generic");
        return qs(this);
      };
    };

    N(N.P + N.R, "Map", {
      toJSON: $s("Map")
    });
    N(N.P + N.R, "Set", {
      toJSON: $s("Set")
    });

    var Ks = function Ks(e) {
      N(N.S, e, {
        of: function e() {
          var t = arguments.length;
          var r = new Array(t);

          while (t--) {
            r[t] = arguments[t];
          }

          return new this(r);
        }
      });
    };

    Ks("Map");
    Ks("Set");
    Ks("WeakMap");
    Ks("WeakSet");

    var Qs = function Qs(e) {
      N(N.S, e, {
        from: function e(t) {
          var r = arguments[1];
          var n, i, a, o;
          j(this);
          n = r !== undefined;
          if (n) j(r);
          if (t == undefined) return new this();
          i = [];

          if (n) {
            a = 0;
            o = _(r, arguments[2], 2);
            Ma(t, false, function (e) {
              i.push(o(e, a++));
            });
          } else {
            Ma(t, false, i.push, i);
          }

          return new this(i);
        }
      });
    };

    Qs("Map");
    Qs("Set");
    Qs("WeakMap");
    Qs("WeakSet");
    N(N.G, {
      global: r
    });
    N(N.S, "System", {
      global: r
    });
    N(N.S, "Error", {
      isError: function e(t) {
        return Y(t) === "Error";
      }
    });
    N(N.S, "Math", {
      clamp: function e(t, r, n) {
        return Math.min(n, Math.max(r, t));
      }
    });
    N(N.S, "Math", {
      DEG_PER_RAD: Math.PI / 180
    });
    var Zs = 180 / Math.PI;
    N(N.S, "Math", {
      degrees: function e(t) {
        return t * Zs;
      }
    });

    var eu = Math.scale || function e(t, r, n, i, a) {
      if (arguments.length === 0 || t != t || r != r || n != n || i != i || a != a) return NaN;
      if (t === Infinity || t === -Infinity) return t;
      return (t - r) * (a - i) / (n - r) + i;
    };

    N(N.S, "Math", {
      fscale: function e(t, r, n, i, a) {
        return nn(eu(t, r, n, i, a));
      }
    });
    N(N.S, "Math", {
      iaddh: function e(t, r, n, i) {
        var a = t >>> 0;
        var o = r >>> 0;
        var s = n >>> 0;
        return o + (i >>> 0) + ((a & s | (a | s) & ~(a + s >>> 0)) >>> 31) | 0;
      }
    });
    N(N.S, "Math", {
      isubh: function e(t, r, n, i) {
        var a = t >>> 0;
        var o = r >>> 0;
        var s = n >>> 0;
        return o - (i >>> 0) - ((~a & s | ~(a ^ s) & a - s >>> 0) >>> 31) | 0;
      }
    });
    N(N.S, "Math", {
      imulh: function e(t, r) {
        var n = 65535;
        var i = +t;
        var a = +r;
        var o = i & n;
        var s = a & n;
        var u = i >> 16;
        var l = a >> 16;
        var f = (u * s >>> 0) + (o * s >>> 16);
        return u * l + (f >> 16) + ((o * l >>> 0) + (f & n) >> 16);
      }
    });
    N(N.S, "Math", {
      RAD_PER_DEG: 180 / Math.PI
    });
    var tu = Math.PI / 180;
    N(N.S, "Math", {
      radians: function e(t) {
        return t * tu;
      }
    });
    N(N.S, "Math", {
      scale: eu
    });
    N(N.S, "Math", {
      umulh: function e(t, r) {
        var n = 65535;
        var i = +t;
        var a = +r;
        var o = i & n;
        var s = a & n;
        var u = i >>> 16;
        var l = a >>> 16;
        var f = (u * s >>> 0) + (o * s >>> 16);
        return u * l + (f >>> 16) + ((o * l >>> 0) + (f & n) >>> 16);
      }
    });
    N(N.S, "Math", {
      signbit: function e(t) {
        return (t = +t) != t ? t : t == 0 ? 1 / t == Infinity : t > 0;
      }
    });
    N(N.S, "Promise", {
      try: function e(t) {
        var r = ao.f(this);
        var n = oo(t);
        (n.e ? r.reject : r.resolve)(n.v);
        return r.promise;
      }
    });
    var ru = F("metadata");
    var nu = ru.store || (ru.store = new es());

    var iu = function e(t, r, n) {
      var i = nu.get(t);

      if (!i) {
        if (!n) return undefined;
        nu.set(t, i = new zo());
      }

      var a = i.get(r);

      if (!a) {
        if (!n) return undefined;
        i.set(r, a = new zo());
      }

      return a;
    };

    var au = function e(t, r, n) {
      var i = iu(r, n, false);
      return i === undefined ? false : i.has(t);
    };

    var ou = function e(t, r, n) {
      var i = iu(r, n, false);
      return i === undefined ? undefined : i.get(t);
    };

    var su = function e(t, r, n, i) {
      iu(n, i, true).set(t, r);
    };

    var uu = function e(t, r) {
      var n = iu(t, r, false);
      var i = [];
      if (n) n.forEach(function (e, t) {
        i.push(t);
      });
      return i;
    };

    var lu = function e(t) {
      return t === undefined || babelHelpers.typeof(t) == "symbol" ? t : String(t);
    };

    var fu = function e(t) {
      N(N.S, "Reflect", t);
    };

    var cu = {
      store: nu,
      map: iu,
      has: au,
      get: ou,
      set: su,
      keys: uu,
      key: lu,
      exp: fu
    };
    var vu = cu.key;
    var hu = cu.set;
    cu.exp({
      defineMetadata: function e(t, r, n, i) {
        hu(t, r, f(n), vu(i));
      }
    });
    var du = cu.key;
    var pu = cu.map;
    var yu = cu.store;
    cu.exp({
      deleteMetadata: function e(t, r) {
        var n = arguments.length < 3 ? undefined : du(arguments[2]);
        var i = pu(f(r), n, false);
        if (i === undefined || !i["delete"](t)) return false;
        if (i.size) return true;
        var a = yu.get(r);
        a["delete"](n);
        return !!a.size || yu["delete"](r);
      }
    });
    var gu = cu.has;
    var mu = cu.get;
    var bu = cu.key;

    var wu = function e(t, r, n) {
      var i = gu(t, r, n);
      if (i) return mu(t, r, n);
      var a = xt(r);
      return a !== null ? e(t, a, n) : undefined;
    };

    cu.exp({
      getMetadata: function e(t, r) {
        return wu(t, f(r), arguments.length < 3 ? undefined : bu(arguments[2]));
      }
    });
    var Su = cu.keys;
    var xu = cu.key;

    var Eu = function e(t, r) {
      var n = Su(t, r);
      var i = xt(t);
      if (i === null) return n;
      var a = e(i, r);
      return a.length ? n.length ? qs(new Go(n.concat(a))) : a : n;
    };

    cu.exp({
      getMetadataKeys: function e(t) {
        return Eu(f(t), arguments.length < 2 ? undefined : xu(arguments[1]));
      }
    });
    var Bu = cu.get;
    var ju = cu.key;
    cu.exp({
      getOwnMetadata: function e(t, r) {
        return Bu(t, f(r), arguments.length < 3 ? undefined : ju(arguments[2]));
      }
    });
    var _u = cu.keys;
    var Xu = cu.key;
    cu.exp({
      getOwnMetadataKeys: function e(t) {
        return _u(f(t), arguments.length < 2 ? undefined : Xu(arguments[1]));
      }
    });
    var Ou = cu.has;
    var Nu = cu.key;

    var Pu = function e(t, r, n) {
      var i = Ou(t, r, n);
      if (i) return true;
      var a = xt(r);
      return a !== null ? e(t, a, n) : false;
    };

    cu.exp({
      hasMetadata: function e(t, r) {
        return Pu(t, f(r), arguments.length < 3 ? undefined : Nu(arguments[2]));
      }
    });
    var Au = cu.has;
    var Tu = cu.key;
    cu.exp({
      hasOwnMetadata: function e(t, r) {
        return Au(t, f(r), arguments.length < 3 ? undefined : Tu(arguments[2]));
      }
    });
    var Cu = cu.key;
    var ku = cu.set;
    cu.exp({
      metadata: function e(t, r) {
        return function e(n, i) {
          ku(t, r, (i !== undefined ? f : j)(n), Cu(i));
        };
      }
    });
    var Iu = ro();
    var Mu = r.process;
    var Fu = Y(Mu) == "process";
    N(N.G, {
      asap: function e(t) {
        var r = Fu && Mu.domain;
        Iu(r ? r.bind(t) : t);
      }
    });
    var Lu = ro();
    var Du = L("observable");
    var Ru = Ma.RETURN;

    var Hu = function e(t) {
      return t == null ? undefined : j(t);
    };

    var Wu = function e(t) {
      var r = t._c;

      if (r) {
        t._c = undefined;
        r();
      }
    };

    var zu = function e(t) {
      return t._o === undefined;
    };

    var Uu = function e(t) {
      if (!zu(t)) {
        t._o = undefined;
        Wu(t);
      }
    };

    var Gu = function e(t, r) {
      f(t);
      this._c = undefined;
      this._o = t;
      t = new Vu(this);

      try {
        var n = r(t);
        var i = n;

        if (n != null) {
          if (typeof n.unsubscribe === "function") n = function e() {
            i.unsubscribe();
          };else j(n);
          this._c = n;
        }
      } catch (e) {
        t.error(e);
        return;
      }

      if (zu(this)) Wu(this);
    };

    Gu.prototype = fo({}, {
      unsubscribe: function e() {
        Uu(this);
      }
    });

    var Vu = function e(t) {
      this._s = t;
    };

    Vu.prototype = fo({}, {
      next: function e(t) {
        var r = this._s;

        if (!zu(r)) {
          var n = r._o;

          try {
            var i = Hu(n.next);
            if (i) return i.call(n, t);
          } catch (e) {
            try {
              Uu(r);
            } finally {
              throw e;
            }
          }
        }
      },
      error: function e(t) {
        var r = this._s;
        if (zu(r)) throw t;
        var n = r._o;
        r._o = undefined;

        try {
          var i = Hu(n.error);
          if (!i) throw t;
          t = i.call(n, t);
        } catch (e) {
          try {
            Wu(r);
          } finally {
            throw e;
          }
        }

        Wu(r);
        return t;
      },
      complete: function e(t) {
        var r = this._s;

        if (!zu(r)) {
          var n = r._o;
          r._o = undefined;

          try {
            var i = Hu(n.complete);
            t = i ? i.call(n, t) : undefined;
          } catch (e) {
            try {
              Wu(r);
            } finally {
              throw e;
            }
          }

          Wu(r);
          return t;
        }
      }
    });

    var Yu = function e(t) {
      Ia(this, Yu, "Observable", "_f")._f = j(t);
    };

    fo(Yu.prototype, {
      subscribe: function e(t) {
        return new Gu(t, this._f);
      },
      forEach: function e(t) {
        var n = this;
        return new (s.Promise || r.Promise)(function (e, r) {
          j(t);
          var i = n.subscribe({
            next: function e(n) {
              try {
                return t(n);
              } catch (e) {
                r(e);
                i.unsubscribe();
              }
            },
            error: r,
            complete: e
          });
        });
      }
    });
    fo(Yu, {
      from: function e(t) {
        var r = typeof this === "function" ? this : Yu;
        var n = Hu(f(t)[Du]);

        if (n) {
          var i = f(n.call(t));
          return i.constructor === r ? i : new r(function (e) {
            return i.subscribe(e);
          });
        }

        return new r(function (e) {
          var r = false;
          Lu(function () {
            if (!r) {
              try {
                if (Ma(t, false, function (t) {
                  e.next(t);
                  if (r) return Ru;
                }) === Ru) return;
              } catch (t) {
                if (r) throw t;
                e.error(t);
                return;
              }

              e.complete();
            }
          });
          return function () {
            r = true;
          };
        });
      },
      of: function e() {
        for (var t = 0, r = arguments.length, n = new Array(r); t < r;) {
          n[t] = arguments[t++];
        }

        return new (typeof this === "function" ? this : Yu)(function (e) {
          var t = false;
          Lu(function () {
            if (!t) {
              for (var r = 0; r < n.length; ++r) {
                e.next(n[r]);
                if (t) return;
              }

              e.complete();
            }
          });
          return function () {
            t = true;
          };
        });
      }
    });
    w(Yu.prototype, Du, function () {
      return this;
    });
    N(N.G, {
      Observable: Yu
    });
    Ri("Observable");
    var Ju = [].slice;
    var qu = /MSIE .\./.test(uo);

    var $u = function e(t) {
      return function (e, r) {
        var n = arguments.length > 2;
        var i = n ? Ju.call(arguments, 2) : false;
        return t(n ? function () {
          (typeof e == "function" ? e : Function(e)).apply(this, i);
        } : e, r);
      };
    };

    N(N.G + N.B + N.F * qu, {
      setTimeout: $u(r.setTimeout),
      setInterval: $u(r.setInterval)
    });
    N(N.G + N.B, {
      setImmediate: $a.set,
      clearImmediate: $a.clear
    });
    var Ku = L("iterator");
    var Qu = L("toStringTag");
    var Zu = vn.Array;
    var el = {
      CSSRuleList: true,
      CSSStyleDeclaration: false,
      CSSValueList: false,
      ClientRectList: false,
      DOMRectList: false,
      DOMStringList: false,
      DOMTokenList: true,
      DataTransferItemList: false,
      FileList: false,
      HTMLAllCollection: false,
      HTMLCollection: false,
      HTMLFormElement: false,
      HTMLSelectElement: false,
      MediaList: true,
      MimeTypeArray: false,
      NamedNodeMap: false,
      NodeList: true,
      PaintRequestList: false,
      Plugin: false,
      PluginArray: false,
      SVGLengthList: false,
      SVGNumberList: false,
      SVGPathSegList: false,
      SVGPointList: false,
      SVGStringList: false,
      SVGTransformList: false,
      SourceBufferList: false,
      StyleSheetList: true,
      TextTrackCueList: false,
      TextTrackList: false,
      TouchList: false
    };

    for (var tl = ve(el), rl = 0; rl < tl.length; rl++) {
      var nl = tl[rl];
      var il = el[nl];
      var al = r[nl];
      var ol = al && al.prototype;
      var sl;

      if (ol) {
        if (!ol[Ku]) w(ol, Ku, Zu);
        if (!ol[Qu]) w(ol, Qu, nl);
        vn[nl] = Zu;
        if (il) for (sl in Wi) {
          if (!ol[sl]) B(ol, sl, Wi[sl], true);
        }
      }
    }

    if (window._main_core_polyfill) {
      console.warn("main.core.polyfill is loaded more than once on this page");
    }

    window._main_core_polyfill = true;
  })(this.window = this.window || {});

  (function (e) {
    "use strict";

    if (!e.matches && e.matchesSelector) {
      e.matches = e.matchesSelector;
    }

    if (!e.matches) {
      e.matches = function (e) {
        var t = document.querySelectorAll(e);
        var r = this;
        return Array.prototype.some.call(t, function (e) {
          return e === r;
        });
      };
    }
  })(Element.prototype);

  (function () {
    "use strict";

    if (!Element.prototype.closest) {
      Object.defineProperty(Element.prototype, "closest", {
        enumerable: false,
        value: function value(e) {
          var t = this;

          while (t) {
            if (t.matches(e)) {
              return t;
            }

            t = t.parentElement;
          }

          return null;
        }
      });
    }
  })();

  (function (e) {
    "use strict";

    if (!window.DOMRect || typeof DOMRect.prototype.toJSON !== "function" || typeof DOMRect.fromRect !== "function") {
      window.DOMRect = function () {
        function e(t, r, n, i) {
          babelHelpers.classCallCheck(this, e);
          this.x = t || 0;
          this.y = r || 0;
          this.width = n || 0;
          this.height = i || 0;
        }

        babelHelpers.createClass(e, [{
          key: "toJSON",
          value: function e() {
            return {
              top: this.top,
              left: this.left,
              right: this.right,
              bottom: this.bottom,
              width: this.width,
              height: this.height,
              x: this.x,
              y: this.y
            };
          }
        }, {
          key: "top",
          get: function e() {
            return this.y;
          }
        }, {
          key: "left",
          get: function e() {
            return this.x;
          }
        }, {
          key: "right",
          get: function e() {
            return this.x + this.width;
          }
        }, {
          key: "bottom",
          get: function e() {
            return this.y + this.height;
          }
        }], [{
          key: "fromRect",
          value: function t(r) {
            return new e(r.x, r.y, r.width, r.height);
          }
        }]);
        return e;
      }();
    }
  })(this.window = this.window || {});

  (function (e) {
    "use strict";

    var t = window.BX;

    window.BX = function (e) {
      if (window.BX.type.isNotEmptyString(e)) {
        return document.getElementById(e);
      }

      if (window.BX.type.isDomNode(e)) {
        return e;
      }

      if (window.BX.type.isFunction(e)) {
        return window.BX.ready(e);
      }

      return null;
    };

    if (t) {
      Object.keys(t).forEach(function (e) {
        window.BX[e] = t[e];
      });
    }

    e = window.BX;

    function r(e) {
      return Object.prototype.toString.call(e);
    }

    var n = Function.prototype.toString.call(Object);

    var i = function () {
      function e() {
        babelHelpers.classCallCheck(this, e);
      }

      babelHelpers.createClass(e, null, [{
        key: "isString",
        value: function e(t) {
          return typeof t === "string";
        }
      }, {
        key: "isFunction",
        value: function e(t) {
          return typeof t === "function";
        }
      }, {
        key: "isObject",
        value: function e(t) {
          return !!t && (babelHelpers.typeof(t) === "object" || typeof t === "function");
        }
      }, {
        key: "isObjectLike",
        value: function e(t) {
          return !!t && babelHelpers.typeof(t) === "object";
        }
      }, {
        key: "isPlainObject",
        value: function t(i) {
          if (!e.isObjectLike(i) || r(i) !== "[object Object]") {
            return false;
          }

          var a = Object.getPrototypeOf(i);

          if (a === null) {
            return true;
          }

          var o = a.hasOwnProperty("constructor") && a.constructor;
          return typeof o === "function" && Function.prototype.toString.call(o) === n;
        }
      }, {
        key: "isBoolean",
        value: function e(t) {
          return t === true || t === false;
        }
      }, {
        key: "isNumber",
        value: function e(t) {
          return !Number.isNaN(t) && typeof t === "number";
        }
      }, {
        key: "isInteger",
        value: function t(r) {
          return e.isNumber(r) && r % 1 === 0;
        }
      }, {
        key: "isFloat",
        value: function t(r) {
          return e.isNumber(r) && !e.isInteger(r);
        }
      }, {
        key: "isNil",
        value: function e(t) {
          return t === null || t === undefined;
        }
      }, {
        key: "isArray",
        value: function t(r) {
          return !e.isNil(r) && Array.isArray(r);
        }
      }, {
        key: "isArrayLike",
        value: function t(r) {
          return !e.isNil(r) && !e.isFunction(r) && r.length > -1 && r.length <= Number.MAX_SAFE_INTEGER;
        }
      }, {
        key: "isDate",
        value: function t(n) {
          return e.isObjectLike(n) && r(n) === "[object Date]";
        }
      }, {
        key: "isDomNode",
        value: function t(r) {
          return e.isObjectLike(r) && !e.isPlainObject(r) && "nodeType" in r;
        }
      }, {
        key: "isElementNode",
        value: function t(r) {
          return e.isDomNode(r) && r.nodeType === Node.ELEMENT_NODE;
        }
      }, {
        key: "isTextNode",
        value: function t(r) {
          return e.isDomNode(r) && r.nodeType === Node.TEXT_NODE;
        }
      }, {
        key: "isMap",
        value: function t(n) {
          return e.isObjectLike(n) && r(n) === "[object Map]";
        }
      }, {
        key: "isSet",
        value: function t(n) {
          return e.isObjectLike(n) && r(n) === "[object Set]";
        }
      }, {
        key: "isWeakMap",
        value: function t(n) {
          return e.isObjectLike(n) && r(n) === "[object WeakMap]";
        }
      }, {
        key: "isWeakSet",
        value: function t(n) {
          return e.isObjectLike(n) && r(n) === "[object WeakSet]";
        }
      }, {
        key: "isPrototype",
        value: function e(t) {
          return (typeof (t && t.constructor) === "function" && t.constructor.prototype || Object.prototype) === t;
        }
      }, {
        key: "isRegExp",
        value: function t(n) {
          return e.isObjectLike(n) && r(n) === "[object RegExp]";
        }
      }, {
        key: "isNull",
        value: function e(t) {
          return t === null;
        }
      }, {
        key: "isUndefined",
        value: function e(t) {
          return typeof t === "undefined";
        }
      }, {
        key: "isArrayBuffer",
        value: function t(n) {
          return e.isObjectLike(n) && r(n) === "[object ArrayBuffer]";
        }
      }, {
        key: "isTypedArray",
        value: function t(n) {
          var i = /^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)]$/;
          return e.isObjectLike(n) && i.test(r(n));
        }
      }, {
        key: "isBlob",
        value: function t(r) {
          return e.isObjectLike(r) && e.isNumber(r.size) && e.isString(r.type) && e.isFunction(r.slice);
        }
      }, {
        key: "isFile",
        value: function t(r) {
          return e.isBlob(r) && e.isObjectLike(r.lastModifiedDate) && e.isNumber(r.lastModified) && e.isString(r.name);
        }
      }, {
        key: "isFormData",
        value: function e(t) {
          return t instanceof FormData;
        }
      }]);
      return e;
    }();

    var a = function () {
      function e() {
        babelHelpers.classCallCheck(this, e);
      }

      babelHelpers.createClass(e, null, [{
        key: "getClass",
        value: function e(t) {
          if (i.isString(t) && !!t) {
            var r = null;
            var n = window;
            var a = t.split(".");

            for (var o = 0; o < a.length; o += 1) {
              var s = a[o];

              if (!n[s]) {
                return null;
              }

              n = n[s];
              r = n;
            }

            return r;
          }

          if (i.isFunction(t)) {
            return t;
          }

          return null;
        }
      }, {
        key: "namespace",
        value: function e(t) {
          var r = t.split(".");
          var n = window.BX;

          if (r[0] === "BX") {
            r = r.slice(1);
          }

          for (var a = 0; a < r.length; a += 1) {
            if (i.isUndefined(n[r[a]])) {
              n[r[a]] = {};
            }

            n = n[r[a]];
          }

          return n;
        }
      }]);
      return e;
    }();

    var o = /[&<>'"]/g;
    var s = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g;
    var u = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;"
    };
    var l = {
      "&amp;": "&",
      "&#38;": "&",
      "&lt;": "<",
      "&#60;": "<",
      "&gt;": ">",
      "&#62;": ">",
      "&apos;": "'",
      "&#39;": "'",
      "&quot;": '"',
      "&#34;": '"'
    };

    var f = function () {
      function e() {
        babelHelpers.classCallCheck(this, e);
      }

      babelHelpers.createClass(e, null, [{
        key: "encode",
        value: function e(t) {
          if (i.isString(t)) {
            return t.replace(o, function (e) {
              return u[e];
            });
          }

          return t;
        }
      }, {
        key: "decode",
        value: function e(t) {
          if (i.isString(t)) {
            return t.replace(s, function (e) {
              return l[e];
            });
          }

          return t;
        }
      }, {
        key: "getRandom",
        value: function e() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
          return babelHelpers.toConsumableArray(Array(t)).map(function () {
            return (~~(Math.random() * 36)).toString(36);
          }).join("");
        }
      }, {
        key: "toNumber",
        value: function e(t) {
          var r = Number.parseFloat(t);

          if (i.isNumber(r)) {
            return r;
          }

          return 0;
        }
      }, {
        key: "toInteger",
        value: function t(r) {
          return e.toNumber(Number.parseInt(r, 10));
        }
      }, {
        key: "toBoolean",
        value: function e(t) {
          var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
          var n = i.isString(t) ? t.toLowerCase() : t;
          return ["true", "y", "1", 1, true].concat(babelHelpers.toConsumableArray(r)).includes(n);
        }
      }]);
      return e;
    }();

    var c = {
      mousewheel: ["DOMMouseScroll"],
      bxchange: ["change", "cut", "paste", "drop", "keyup"],
      animationend: ["animationend", "oAnimationEnd", "webkitAnimationEnd", "MSAnimationEnd"],
      transitionend: ["webkitTransitionEnd", "otransitionend", "oTransitionEnd", "msTransitionEnd", "transitionend"],
      fullscreenchange: ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"],
      fullscreenerror: ["fullscreenerror", "webkitfullscreenerror", "mozfullscreenerror", "MSFullscreenError"]
    };

    var v = function () {
      function e() {
        babelHelpers.classCallCheck(this, e);
        babelHelpers.defineProperty(this, "registry", new WeakMap());
      }

      babelHelpers.createClass(e, [{
        key: "set",
        value: function e(t, r, n) {
          var a = this.get(t);

          if (!i.isSet(a[r])) {
            a[r] = new Set();
          }

          a[r].add(n);
          this.registry.set(t, a);
        }
      }, {
        key: "get",
        value: function e(t) {
          return this.registry.get(t) || {};
        }
      }, {
        key: "has",
        value: function e(t, r, n) {
          if (r && n) {
            return this.registry.has(t) && this.registry.get(t)[r].has(n);
          }

          return this.registry.has(t);
        }
      }, {
        key: "delete",
        value: function e(t, r, n) {
          if (!i.isDomNode(t)) {
            return;
          }

          if (i.isString(r) && i.isFunction(n)) {
            var a = this.registry.get(t);

            if (i.isPlainObject(a) && i.isSet(a[r])) {
              a[r].delete(n);
            }

            return;
          }

          if (i.isString(r)) {
            var o = this.registry.get(t);

            if (i.isPlainObject(o) && i.isSet(o[r])) {
              o[r] = new Set();
            }

            return;
          }

          this.registry.delete(t);
        }
      }]);
      return e;
    }();

    var h = new v();

    function d(e) {
      var t = false;

      try {
        var r = Object.defineProperty({}, e, {
          get: function e() {
            t = true;
            return undefined;
          }
        });
        window.addEventListener("test", null, r);
      } catch (e) {}

      return t;
    }

    function p(e) {
      if (!i.isPlainObject(e)) {
        return e;
      }

      return Object.keys(e).reduce(function (t, r) {
        if (d(r)) {
          t[r] = e[r];
        }

        return t;
      }, {});
    }

    function y(e, t, r, n) {
      if (!i.isObject(e) || !i.isFunction(e.addEventListener)) {
        return;
      }

      var a = p(n);

      if (t in c) {
        c[t].forEach(function (n) {
          e.addEventListener(n, r, a);
          h.set(e, t, r);
        });
        return;
      }

      e.addEventListener(t, r, a);
      h.set(e, t, r);
    }

    function g(e, t, r, n) {
      if (!i.isObject(e) || !i.isFunction(e.removeEventListener)) {
        return;
      }

      var a = p(n);

      if (t in c) {
        c[t].forEach(function (t) {
          e.removeEventListener(t, r, a);
          h.delete(e, t, r);
        });
        return;
      }

      e.removeEventListener(t, r, a);
      h.delete(e, t, r);
    }

    function m(e, t) {
      var r = h.get(e);
      Object.keys(r).forEach(function (n) {
        r[n].forEach(function (r) {
          if (!i.isString(t) || t === n) {
            g(e, n, r);
          }
        });
      });
    }

    function b(e, t, r, n) {
      var i = function i() {
        g(e, t, i, n);
        r.apply(void 0, arguments);
      };

      y(e, t, i, n);
    }

    var w = new Set();
    var S = new WeakMap();

    function x(e, t, r) {
      if (!i.isFunction(r)) {
        throw new TypeError('The "listener" argument must be of type Function. Received type '.concat(babelHelpers.typeof(r)));
      }

      var n = S.get(e),
          a = n.eventsMap,
          o = n.maxListeners;

      if (a.has(t)) {
        a.get(t).add(r);
      } else {
        a.set(t, new Set([r]));
      }

      var s = a.get(t);

      if (s.size > o) {
        console.warn("Possible BX.Event.EventEmitter memory leak detected. ".concat(s.size, " ").concat(t, " listeners added. Use emitter.setMaxListeners() to increase limit"));
      }

      return e;
    }

    function E(e, t, r) {
      if (!i.isFunction(r)) {
        throw new TypeError('The "listener" argument must be of type Function. Received type '.concat(babelHelpers.typeof(r)));
      }

      var n = S.get(e),
          a = n.onceMap;

      if (a.has(r)) {
        return;
      }

      var o = function n() {
        e.unsubscribe(t, n);
        a.delete(r);
        r.apply(void 0, arguments);
      };

      a.set(r);
      e.subscribe(t, o);
    }

    function B(e, t, r) {
      if (!i.isFunction(r)) {
        throw new TypeError('The "listener" argument must be of type Function. Received type '.concat(typeof event === "undefined" ? "undefined" : babelHelpers.typeof(event)));
      }

      var n = S.get(e),
          a = n.eventsMap;

      if (a.has(t)) {
        a.get(t).delete(r);
      }
    }

    var j = function () {
      function e() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
          data: {}
        };
        babelHelpers.classCallCheck(this, e);
        this.type = "";
        this.isTrusted = true;
        this.data = t.data;
        this.defaultPrevented = false;
        this.immediatePropagationStopped = false;
      }

      babelHelpers.createClass(e, [{
        key: "preventDefault",
        value: function e() {
          this.defaultPrevented = true;
        }
      }, {
        key: "isDefaultPrevented",
        value: function e() {
          return this.defaultPrevented;
        }
      }, {
        key: "stopImmediatePropagation",
        value: function e() {
          this.immediatePropagationStopped = true;
        }
      }, {
        key: "isImmediatePropagationStopped",
        value: function e() {
          return this.immediatePropagationStopped;
        }
      }]);
      return e;
    }();

    function _(e, t, r) {
      var n = S.get(e),
          i = n.eventsMap;

      if (i.has(t)) {
        var a = i.get(t);
        return babelHelpers.toConsumableArray(a.values()).map(function (e) {
          return e(r);
        });
      }

      return [];
    }

    function X(e, t) {
      if (!i.isNumber(t) || t < 0) {
        throw new TypeError('The value of "count" is out of range. It must be a non-negative number. Received '.concat(t));
      }

      S.get(e).maxListeners = t;
    }

    function O(e) {
      return S.get(e).maxListeners;
    }

    function N(e, t) {
      return S.get(e).eventsMap.get(t);
    }

    function P(e, t, r, n) {
      var a = r;

      if (!(r instanceof j)) {
        a = new j();
      }

      if (!i.isNil(r)) {
        if (i.isPlainObject(r)) {
          a.data = babelHelpers.objectSpread({}, a.data, r);
        } else {
          a.data.value = r;
        }
      }

      a.type = t;
      a.isTrusted = !i.isFunction(n);
      return Object.seal(a);
    }

    var A = function () {
      function e() {
        babelHelpers.classCallCheck(this, e);
        w.add(this);
        S.set(this, {
          eventsMap: new Map(),
          onceMap: new Map(),
          maxListeners: 10
        });
      }

      babelHelpers.createClass(e, [{
        key: "subscribe",
        value: function e(t, r) {
          x(this, t, r);
          return this;
        }
      }, {
        key: "subscribeOnce",
        value: function e(t, r) {
          E(this, t, r);
          return this;
        }
      }, {
        key: "unsubscribe",
        value: function e(t, r) {
          B(this, t, r);
          return this;
        }
      }, {
        key: "emit",
        value: function t(r, n) {
          var i = P(this, r, n, this);

          _(this, r, i);

          _(e, r, i);

          return this;
        }
      }, {
        key: "emitAsync",
        value: function t(r, n) {
          var i = P(this, r, n, this);
          return Promise.all([].concat(babelHelpers.toConsumableArray(_(this, r, i)), babelHelpers.toConsumableArray(_(e, r, i))));
        }
      }, {
        key: "setMaxListeners",
        value: function e(t) {
          X(this, t);
          return this;
        }
      }, {
        key: "getMaxListeners",
        value: function e() {
          return O(this);
        }
      }, {
        key: "getListeners",
        value: function e(t) {
          return N(this, t);
        }
      }], [{
        key: "subscribe",
        value: function t(r, n) {
          x(e, r, n);
          return this;
        }
      }, {
        key: "subscribeOnce",
        value: function t(r, n) {
          E(e, r, n);
          return this;
        }
      }, {
        key: "unsubscribe",
        value: function t(r, n) {
          B(e, r, n);
          return this;
        }
      }, {
        key: "emit",
        value: function t(r, n) {
          var i = P(this, r, n, this);

          _(e, r, i);

          w.forEach(function (e) {
            var t = S.get(e),
                n = t.eventsMap;

            if (n.has(r)) {
              _(e, r, i);
            }
          });
          return this;
        }
      }, {
        key: "emitAsync",
        value: function t(r, n) {
          var i = P(this, r, n, this);
          return Promise.all([].concat(babelHelpers.toConsumableArray(_(e, r, i)), babelHelpers.toConsumableArray(babelHelpers.toConsumableArray(w).reduce(function (e, t) {
            var n = S.get(t),
                a = n.eventsMap;

            if (a.has(r)) {
              return [].concat(babelHelpers.toConsumableArray(e), babelHelpers.toConsumableArray(_(t, r, i)));
            }

            return e;
          }, []))));
        }
      }, {
        key: "setMaxListeners",
        value: function t(r) {
          X(e, r);
          return this;
        }
      }, {
        key: "getMaxListeners",
        value: function t() {
          return O(e);
        }
      }, {
        key: "getListeners",
        value: function t(r) {
          return N(e, r);
        }
      }]);
      return e;
    }();

    S.set(A, {
      eventsMap: new Map(),
      onceMap: new Map(),
      maxListeners: 10
    });
    var T = [];
    e.isReady = false;

    function C(t) {
      switch (document.readyState) {
        case "loading":
          T.push(t);
          break;

        case "interactive":
        case "complete":
          if (i.isFunction(t)) {
            t();
          }

          e.isReady = true;
          break;

        default:
          break;
      }
    }

    document.addEventListener("readystatechange", function () {
      if (!e.isReady) {
        T.forEach(C);
        T = [];
      }
    });

    var k = function e() {
      babelHelpers.classCallCheck(this, e);
    };

    babelHelpers.defineProperty(k, "bind", y);
    babelHelpers.defineProperty(k, "bindOnce", b);
    babelHelpers.defineProperty(k, "unbind", g);
    babelHelpers.defineProperty(k, "unbindAll", m);
    babelHelpers.defineProperty(k, "EventEmitter", A);
    babelHelpers.defineProperty(k, "BaseEvent", j);
    babelHelpers.defineProperty(k, "ready", C);

    function I(e) {
      if (i.isPlainObject(e) || i.isArray(e)) {
        return JSON.stringify(e);
      }

      return f.encode(f.decode(e));
    }

    function M(e) {
      if (i.isString(e)) {
        var t = f.decode(e);
        var r;

        try {
          r = JSON.parse(t);
        } catch (e) {
          r = t;
        }

        if (r === t) {
          if (/^[\d.]+[.]?\d+$/.test(r)) {
            return Number(r);
          }
        }

        if (r === "true" || r === "false") {
          return Boolean(r);
        }

        return r;
      }

      return e;
    }

    function F() {
      var e = document,
          t = e.documentElement,
          r = e.body;
      var n = Math.max(window.pageYOffset || 0, t ? t.scrollTop : 0, r ? r.scrollTop : 0);
      var i = Math.max(window.pageXOffset || 0, t ? t.scrollLeft : 0, r ? r.scrollLeft : 0);
      return {
        scrollTop: n,
        scrollLeft: i
      };
    }

    var L = function () {
      function e() {
        babelHelpers.classCallCheck(this, e);
      }

      babelHelpers.createClass(e, null, [{
        key: "replace",
        value: function e(t, r) {
          if (i.isDomNode(t) && i.isDomNode(r)) {
            if (i.isDomNode(t.parentNode)) {
              t.parentNode.replaceChild(r, t);
            }
          }
        }
      }, {
        key: "remove",
        value: function e(t) {
          if (i.isDomNode(t) && i.isDomNode(t.parentNode)) {
            t.parentNode.removeChild(t);
          }
        }
      }, {
        key: "clean",
        value: function t(r) {
          if (i.isDomNode(r)) {
            while (r.childNodes.length > 0) {
              r.removeChild(r.firstChild);
            }

            return;
          }

          if (i.isString(r)) {
            e.clean(document.getElementById(r));
          }
        }
      }, {
        key: "insertBefore",
        value: function e(t, r) {
          if (i.isDomNode(t) && i.isDomNode(r)) {
            if (i.isDomNode(r.parentNode)) {
              r.parentNode.insertBefore(t, r);
            }
          }
        }
      }, {
        key: "insertAfter",
        value: function e(t, r) {
          if (i.isDomNode(t) && i.isDomNode(r)) {
            if (i.isDomNode(r.parentNode)) {
              var n = r.parentNode;

              if (i.isDomNode(r.nextSibling)) {
                n.insertBefore(t, r.nextSibling);
                return;
              }

              n.appendChild(t);
            }
          }
        }
      }, {
        key: "append",
        value: function e(t, r) {
          if (i.isDomNode(t) && i.isDomNode(r)) {
            r.appendChild(t);
          }
        }
      }, {
        key: "prepend",
        value: function t(r, n) {
          if (i.isDomNode(r) && i.isDomNode(n)) {
            if (i.isDomNode(n.firstChild)) {
              n.insertBefore(r, n.firstChild);
              return;
            }

            e.append(r, n);
          }
        }
      }, {
        key: "hasClass",
        value: function t(r, n) {
          if (i.isElementNode(r)) {
            if (i.isString(n)) {
              var a = n.trim();

              if (a.length > 0) {
                if (a.includes(" ")) {
                  return a.split(" ").every(function (t) {
                    return e.hasClass(r, t);
                  });
                }

                if ("classList" in r) {
                  return r.classList.contains(a);
                }

                if (i.isObject(r.className) && i.isString(r.className.baseVal)) {
                  return r.getAttribute("class").split(" ").some(function (e) {
                    return e === a;
                  });
                }
              }
            }

            if (i.isArray(n) && n.length > 0) {
              return n.every(function (t) {
                return e.hasClass(r, t);
              });
            }
          }

          return false;
        }
      }, {
        key: "addClass",
        value: function t(r, n) {
          if (i.isElementNode(r)) {
            if (i.isString(n)) {
              var a = n.trim();

              if (a.length > 0) {
                if (a.includes(" ")) {
                  e.addClass(r, a.split(" "));
                  return;
                }

                if ("classList" in r) {
                  r.classList.add(a);
                  return;
                }

                if (i.isObject(r.className) && i.isString(r.className.baseVal)) {
                  if (r.className.baseVal === "") {
                    r.className.baseVal = a;
                    return;
                  }

                  var o = r.className.baseVal.split(" ");

                  if (!o.includes(a)) {
                    o.push(a);
                    r.className.baseVal = o.join(" ").trim();
                    return;
                  }
                }

                return;
              }
            }

            if (i.isArray(n)) {
              n.forEach(function (t) {
                return e.addClass(r, t);
              });
            }
          }
        }
      }, {
        key: "removeClass",
        value: function t(r, n) {
          if (i.isElementNode(r)) {
            if (i.isString(n)) {
              var a = n.trim();

              if (a.length > 0) {
                if (a.includes(" ")) {
                  e.removeClass(r, a.split(" "));
                  return;
                }

                if ("classList" in r) {
                  r.classList.remove(a);
                  return;
                }

                if (i.isObject(r.className) && i.isString(r.className.baseVal)) {
                  var o = r.className.baseVal.split(" ").filter(function (e) {
                    return e !== a;
                  });
                  r.className.baseVal = o.join(" ");
                  return;
                }
              }
            }

            if (i.isArray(n)) {
              n.forEach(function (t) {
                return e.removeClass(r, t);
              });
            }
          }
        }
      }, {
        key: "toggleClass",
        value: function t(r, n) {
          if (i.isElementNode(r)) {
            if (i.isString(n)) {
              var a = n.trim();

              if (a.length > 0) {
                if (a.includes(" ")) {
                  e.toggleClass(r, a.split(" "));
                  return;
                }

                r.classList.toggle(a);
                return;
              }
            }

            if (i.isArray(n)) {
              n.forEach(function (t) {
                return e.toggleClass(r, t);
              });
            }
          }
        }
      }, {
        key: "style",
        value: function t(r, n, a) {
          if (i.isElementNode(r)) {
            if (i.isNull(n)) {
              r.removeAttribute("style");
              return r;
            }

            if (i.isPlainObject(n)) {
              Object.entries(n).forEach(function (t) {
                var n = babelHelpers.slicedToArray(t, 2),
                    i = n[0],
                    a = n[1];
                e.style(r, i, a);
              });
              return r;
            }

            if (i.isString(n)) {
              if (i.isUndefined(a) && r.nodeType !== Node.DOCUMENT_NODE) {
                var o = getComputedStyle(r);

                if (n in o) {
                  return o[n];
                }

                return o.getPropertyValue(n);
              }

              if (i.isNull(a) || a === "" || a === "null") {
                r.style[n] = "";
                return r;
              }

              if (i.isString(a) || i.isNumber(a)) {
                r.style[n] = a;
                return r;
              }
            }
          }

          return null;
        }
      }, {
        key: "adjust",
        value: function t(r) {
          var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          if (!r.nodeType) {
            return null;
          }

          var a = r;

          if (r.nodeType === Node.DOCUMENT_NODE) {
            a = r.body;
          }

          if (i.isPlainObject(n)) {
            if (i.isPlainObject(n.attrs)) {
              Object.keys(n.attrs).forEach(function (e) {
                if (e === "class" || e.toLowerCase() === "classname") {
                  a.className = n.attrs[e];
                  return;
                }

                if (n.attrs[e] == "") {
                  a.removeAttribute(e);
                  return;
                }

                a.setAttribute(e, n.attrs[e]);
              });
            }

            if (i.isPlainObject(n.style)) {
              e.style(a, n.style);
            }

            if (i.isPlainObject(n.props)) {
              Object.keys(n.props).forEach(function (e) {
                a[e] = n.props[e];
              });
            }

            if (i.isPlainObject(n.events)) {
              Object.keys(n.events).forEach(function (e) {
                k.bind(a, e, n.events[e]);
              });
            }

            if (i.isPlainObject(n.dataset)) {
              Object.keys(n.dataset).forEach(function (e) {
                a.dataset[e] = n.dataset[e];
              });
            }

            if (i.isString(n.children)) {
              n.children = [n.children];
            }

            if (i.isArray(n.children) && n.children.length > 0) {
              n.children.forEach(function (t) {
                if (i.isDomNode(t)) {
                  e.append(t, a);
                }

                if (i.isString(t)) {
                  a.innerHTML += t;
                }
              });
              return a;
            }

            if ("text" in n && !i.isNil(n.text)) {
              a.innerText = n.text;
              return a;
            }

            if ("html" in n && !i.isNil(n.html)) {
              a.innerHTML = n.html;
            }
          }

          return a;
        }
      }, {
        key: "create",
        value: function t(r) {
          var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;
          var o = r;
          var s = n;

          if (i.isObjectLike(r)) {
            s = r;
            o = r.tag;
          }

          return e.adjust(a.createElement(o), s);
        }
      }, {
        key: "show",
        value: function e(t) {
          if (i.isDomNode(t)) {
            t.hidden = false;
          }
        }
      }, {
        key: "hide",
        value: function e(t) {
          if (i.isDomNode(t)) {
            t.hidden = true;
          }
        }
      }, {
        key: "isShown",
        value: function e(t) {
          return i.isDomNode(t) && !t.hidden && t.style.getPropertyValue("display") !== "none";
        }
      }, {
        key: "toggle",
        value: function t(r) {
          if (i.isDomNode(r)) {
            if (e.isShown(r)) {
              e.hide(r);
            } else {
              e.show(r);
            }
          }
        }
      }, {
        key: "getPosition",
        value: function e(t) {
          if (i.isDomNode(t)) {
            var r = t.getBoundingClientRect();
            var n = F(),
                a = n.scrollLeft,
                o = n.scrollTop;
            return new DOMRect(r.left + a, r.top + o, r.width, r.height);
          }

          return new DOMRect();
        }
      }, {
        key: "getRelativePosition",
        value: function t(r, n) {
          if (i.isDomNode(r) && i.isDomNode(n)) {
            var a = e.getPosition(r);
            var o = e.getPosition(n);
            return new DOMRect(a.left - o.left, a.top - o.top, a.width, a.height);
          }

          return new DOMRect();
        }
      }, {
        key: "attr",
        value: function t(r, n, a) {
          if (i.isElementNode(r)) {
            if (i.isString(n)) {
              if (!i.isNil(a)) {
                return r.setAttribute(n, I(a));
              }

              if (i.isNull(a)) {
                return r.removeAttribute(n);
              }

              return M(r.getAttribute(n));
            }

            if (i.isPlainObject(n)) {
              return Object.entries(n).forEach(function (t) {
                var n = babelHelpers.slicedToArray(t, 2),
                    i = n[0],
                    a = n[1];
                e.attr(r, i, a);
              });
            }
          }

          return null;
        }
      }]);
      return e;
    }();

    var D = navigator.userAgent.toLowerCase();

    var R = function () {
      function e() {
        babelHelpers.classCallCheck(this, e);
      }

      babelHelpers.createClass(e, null, [{
        key: "isOpera",
        value: function e() {
          return D.includes("opera");
        }
      }, {
        key: "isIE",
        value: function t() {
          return "attachEvent" in document && !e.isOpera();
        }
      }, {
        key: "isIE6",
        value: function e() {
          return D.includes("msie 6");
        }
      }, {
        key: "isIE7",
        value: function e() {
          return D.includes("msie 7");
        }
      }, {
        key: "isIE8",
        value: function e() {
          return D.includes("msie 8");
        }
      }, {
        key: "isIE9",
        value: function e() {
          return "documentMode" in document && document.documentMode >= 9;
        }
      }, {
        key: "isIE10",
        value: function e() {
          return "documentMode" in document && document.documentMode >= 10;
        }
      }, {
        key: "isSafari",
        value: function e() {
          return D.includes("webkit");
        }
      }, {
        key: "isFirefox",
        value: function e() {
          return D.includes("firefox");
        }
      }, {
        key: "isChrome",
        value: function e() {
          return D.includes("chrome");
        }
      }, {
        key: "detectIEVersion",
        value: function t() {
          if (e.isOpera() || e.isSafari() || e.isFirefox() || e.isChrome()) {
            return -1;
          }

          var r = -1;

          if (!!window.MSStream && !window.ActiveXObject && "ActiveXObject" in window) {
            r = 11;
          } else if (e.isIE10()) {
            r = 10;
          } else if (e.isIE9()) {
            r = 9;
          } else if (e.isIE()) {
            r = 8;
          }

          if (r === -1 || r === 8) {
            if (navigator.appName === "Microsoft Internet Explorer") {
              var n = new RegExp("MSIE ([0-9]+[.0-9]*)");
              var a = navigator.userAgent.match(n);

              if (i.isArrayLike(a) && a.length > 0) {
                r = parseFloat(a[1]);
              }
            }

            if (navigator.appName === "Netscape") {
              r = 11;
              var o = new RegExp("Trident/.*rv:([0-9]+[.0-9]*)");

              if (o.exec(navigator.userAgent) != null) {
                var s = navigator.userAgent.match(o);

                if (i.isArrayLike(s) && s.length > 0) {
                  r = parseFloat(s[1]);
                }
              }
            }
          }

          return r;
        }
      }, {
        key: "isIE11",
        value: function t() {
          return e.detectIEVersion() >= 11;
        }
      }, {
        key: "isMac",
        value: function e() {
          return D.includes("macintosh");
        }
      }, {
        key: "isAndroid",
        value: function e() {
          return D.includes("android");
        }
      }, {
        key: "isIPad",
        value: function e() {
          return D.includes("ipad;");
        }
      }, {
        key: "isIPhone",
        value: function e() {
          return D.includes("iphone;");
        }
      }, {
        key: "isIOS",
        value: function t() {
          return e.isIPad() || e.isIPhone();
        }
      }, {
        key: "isMobile",
        value: function t() {
          return e.isIPhone() || e.isIPad() || e.isAndroid() || D.includes("mobile") || D.includes("touch");
        }
      }, {
        key: "isRetina",
        value: function e() {
          return window.devicePixelRatio && window.devicePixelRatio >= 2;
        }
      }, {
        key: "isDoctype",
        value: function e(t) {
          var r = t || document;

          if (r.compatMode) {
            return r.compatMode === "CSS1Compat";
          }

          return r.documentElement && r.documentElement.clientHeight;
        }
      }, {
        key: "isLocalStorageSupported",
        value: function e() {
          try {
            localStorage.setItem("test", "test");
            localStorage.removeItem("test");
            return true;
          } catch (e) {
            return false;
          }
        }
      }, {
        key: "addGlobalClass",
        value: function t() {
          var r = "bx-core";

          if (L.hasClass(document.documentElement, r)) {
            return;
          }

          if (e.isIOS()) {
            r += " bx-ios";
          } else if (e.isMac()) {
            r += " bx-mac";
          } else if (e.isAndroid()) {
            r += " bx-android";
          }

          r += e.isMobile() ? " bx-touch" : " bx-no-touch";
          r += e.isRetina() ? " bx-retina" : " bx-no-retina";
          var n = -1;

          if (/AppleWebKit/.test(navigator.userAgent)) {
            r += " bx-chrome";
          } else if (e.detectIEVersion() > 0) {
            n = e.detectIEVersion();
            r += " bx-ie bx-ie".concat(n);

            if (n > 7 && n < 10 && !e.isDoctype()) {
              r += " bx-quirks";
            }
          } else if (/Opera/.test(navigator.userAgent)) {
            r += " bx-opera";
          } else if (/Gecko/.test(navigator.userAgent)) {
            r += " bx-firefox";
          }

          L.addClass(document.documentElement, r);
        }
      }, {
        key: "detectAndroidVersion",
        value: function e() {
          var t = new RegExp("Android ([0-9]+[.0-9]*)");

          if (t.exec(navigator.userAgent) != null) {
            var r = navigator.userAgent.match(t);

            if (i.isArrayLike(r) && r.length > 0) {
              return parseFloat(r[1]);
            }
          }

          return 0;
        }
      }, {
        key: "isPropertySupported",
        value: function e(t, r) {
          if (t === "") {
            return false;
          }

          function n(e) {
            return e.replace(/([A-Z])/g, function () {
              for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
                t[r] = arguments[r];
              }

              return "-".concat(t[1].toLowerCase());
            });
          }

          function i(e) {
            var t = /(\\-([a-z]))/g;

            if (t.test(e)) {
              return e.replace(t, function () {
                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
                  t[r] = arguments[r];
                }

                return t[2].toUpperCase();
              });
            }

            return e;
          }

          var a = t.includes("-") ? i(t) : t;
          var o = !!r;
          var s = a.charAt(0).toUpperCase() + a.slice(1);
          var u = ["Webkit", "Moz", "O", "ms"].join("".concat(s, " "));
          var l = "".concat(a, " ").concat(u, " ").concat(s).split(" ");
          var f = document.body || document.documentElement;

          for (var c = 0; c < l.length; c += 1) {
            var v = l[c];

            if (f && "style" in f && v in f.style) {
              var h = v.substr(0, v.length - a.length).toLowerCase();
              var d = v === a ? "" : "-".concat(h, "-");
              return o ? d + n(a) : v;
            }
          }

          return false;
        }
      }, {
        key: "addGlobalFeatures",
        value: function t(r) {
          if (!i.isArray(r)) {
            return;
          }

          var n = [];

          for (var a = 0; a < r.length; a += 1) {
            var o = !!e.isPropertySupported(r[a]);
            n.push("bx-".concat(o ? "" : "no-").concat(r[a].toLowerCase()));
          }

          L.addClass(document.documentElement, n.join(" "));
        }
      }]);
      return e;
    }();

    var H = function () {
      function e() {
        babelHelpers.classCallCheck(this, e);
      }

      babelHelpers.createClass(e, null, [{
        key: "getList",
        value: function e() {
          return document.cookie.split(";").map(function (e) {
            return e.split("=");
          }).map(function (e) {
            return e.map(function (e) {
              return e.trim();
            });
          }).reduce(function (e, t) {
            var r = babelHelpers.slicedToArray(t, 2),
                n = r[0],
                i = r[1];
            e[decodeURIComponent(n)] = decodeURIComponent(i);
            return e;
          }, {});
        }
      }, {
        key: "get",
        value: function t(r) {
          var n = e.getList();

          if (r in n) {
            return n[r];
          }

          return undefined;
        }
      }, {
        key: "set",
        value: function e(t, r) {
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var a = babelHelpers.objectSpread({
            expires: ""
          }, n);

          if (i.isNumber(a.expires)) {
            var o = +new Date();
            var s = a.expires;
            var u = 864e5;
            a.expires = new Date(o + s * u);
          }

          if (i.isDate(a.expires)) {
            a.expires = a.expires.toUTCString();
          }

          var l = decodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
          var f = encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
          var c = Object.keys(a).reduce(function (e, t) {
            var r = a[t];

            if (!r) {
              return e;
            }

            if (r === true) {
              return "".concat(e, "; ").concat(t);
            }

            return "".concat(e, "; ").concat(t, "=").concat(r.split(";")[0]);
          }, "");
          document.cookie = "".concat(l, "=").concat(f).concat(c);
        }
      }, {
        key: "remove",
        value: function t(r) {
          var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          e.set(r, "", babelHelpers.objectSpread({}, n, {
            expires: -1
          }));
        }
      }]);
      return e;
    }();

    function W(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new FormData();
      var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      if (i.isUndefined(e)) {
        return t;
      }

      if (i.isNull(e)) {
        t.append(r, "");
      } else if (i.isArray(e)) {
        if (!e.length) {
          var n = "".concat(r, "[]");
          t.append(n, "");
        } else {
          e.forEach(function (e, n) {
            var i = "".concat(r, "[").concat(n, "]");
            W(e, t, i);
          });
        }
      } else if (i.isDate(e)) {
        t.append(r, e.toISOString());
      } else if (i.isObject(e) && !i.isFile(e) && !i.isBlob(e)) {
        Object.keys(e).forEach(function (n) {
          var a = e[n];
          var o = n;

          if (i.isArray(a)) {
            while (n.length > 2 && n.lastIndexOf("[]") === n.length - 2) {
              o = n.substring(0, n.length - 2);
            }
          }

          var s = r ? "".concat(r, "[").concat(o, "]") : o;
          W(a, t, s);
        });
      } else {
        t.append(r, e);
      }

      return t;
    }

    var z = function () {
      function e() {
        babelHelpers.classCallCheck(this, e);
      }

      babelHelpers.createClass(e, null, [{
        key: "convertObjectToFormData",
        value: function e(t) {
          return W(t);
        }
      }]);
      return e;
    }();

    var U = function e() {
      babelHelpers.classCallCheck(this, e);
    };

    babelHelpers.defineProperty(U, "Cookie", H);
    babelHelpers.defineProperty(U, "Data", z);
    var G = true;

    function V() {
      G = true;
    }

    function Y() {
      G = false;
    }

    function J() {
      return G;
    }

    function q() {
      if (J() && i.isObject(window.console)) {
        if (i.isFunction(window.console.log)) {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
            t[r] = arguments[r];
          }

          window.console.log("BX.debug: ", t.length > 0 ? t : t[0]);

          if (t[0] instanceof Error && t[0].stack) {
            window.console.log("BX.debug error stack trace", t[0].stack);
          }
        }

        if (i.isFunction(window.console.trace)) {
          console.trace();
        }
      }
    }

    var $ = function () {
      function e(t) {
        babelHelpers.classCallCheck(this, e);
        this.config = t.config || {};
        this.name = t.extension;
        this.state = "scheduled";
        var r = BX.processHTML(t.html || "");
        this.inlineScripts = r.SCRIPT.reduce(ae, []);
        this.externalScripts = r.SCRIPT.reduce(oe, []);
        this.externalStyles = r.STYLE.reduce(se, []);
      }

      babelHelpers.createClass(e, [{
        key: "load",
        value: function e() {
          var t = this;

          if (this.state === "error") {
            this.loadPromise = this.loadPromise || Promise.resolve(this);
            console.warn("Extension", this.name, "not found");
          }

          if (!this.loadPromise && this.state) {
            this.state = "load";
            this.inlineScripts.forEach(BX.evalGlobal);
            this.loadPromise = Promise.all([fe(this.externalScripts), fe(this.externalStyles)]).then(function () {
              t.state = "loaded";

              if (i.isPlainObject(t.config) && t.config.namespace) {
                return a.getClass(t.config.namespace);
              }

              return window;
            });
          }

          return this.loadPromise;
        }
      }]);
      return e;
    }();

    var K = {};
    var Q = "main.bitrix.main.controller.loadext.getextensions";

    function Z(e) {
      return i.isArray(e) ? e : [e];
    }

    function ee(e) {
      return e in K;
    }

    function te(e) {
      return K[e];
    }

    function re(e) {
      return e.every(ee);
    }

    function ne(e) {
      return Promise.all(e.map(function (e) {
        return e.load();
      }));
    }

    function ie(e) {
      return e.reduce(function (e, t) {
        if (i.isObject(t)) {
          return babelHelpers.objectSpread({}, t);
        }

        return t;
      }, {});
    }

    function ae(e, t) {
      if (t.isInternal) {
        e.push(t.JS);
      }

      return e;
    }

    function oe(e, t) {
      if (!t.isInternal) {
        e.push(t.JS);
      }

      return e;
    }

    function se(e, t) {
      if (i.isString(t) && t !== "") {
        e.push(t);
      }

      return e;
    }

    function ue(e) {
      return new Promise(function (t) {
        BX.ajax.runAction(Q, {
          data: e
        }).then(t);
      });
    }

    function le(e) {
      if (e.status !== "success") {
        e.errors.map(console.warn);
        return [];
      }

      return e.data.map(function (e) {
        var t = te(e.extension);

        if (t) {
          return t;
        }

        K[e.extension] = new $(e);
        return K[e.extension];
      });
    }

    function fe(e) {
      var t = Z(e);

      if (!t.length) {
        return Promise.resolve();
      }

      return new Promise(function (e) {
        BX.load(t, e);
      });
    }

    function ce(e) {
      var t = Z(e);
      var r = re(t);

      if (r) {
        var n = t.map(te);
        return ne(n).then(ie);
      }

      return ue({
        extension: t
      }).then(le).then(ne).then(ie);
    }

    var ve = ["[object Object]", "[object Array]", "[object RegExp]", "[object Arguments]", "[object Date]", "[object Error]", "[object Map]", "[object Set]", "[object ArrayBuffer]", "[object DataView]", "[object Float32Array]", "[object Float64Array]", "[object Int8Array]", "[object Int16Array]", "[object Int32Array]", "[object Uint8Array]", "[object Uint16Array]", "[object Uint32Array]", "[object Uint8ClampedArray]"];

    function he(e) {
      var t = i.isObjectLike(e) && ve.includes(r(e));
      return t || i.isDomNode(e);
    }

    function de(e, t) {
      if (t.has(e)) {
        return t.get(e);
      }

      if (he(e)) {
        if (i.isArray(e)) {
          var r = Array.from(e);
          t.set(e, r);
          e.forEach(function (e, n) {
            r[n] = de(e, t);
          });
          return t.get(e);
        }

        if (i.isDomNode(e)) {
          return e.cloneNode(true);
        }

        if (i.isMap(e)) {
          var n = new Map();
          t.set(e, n);
          e.forEach(function (e, r) {
            n.set(de(r, t), de(e, t));
          });
          return n;
        }

        if (i.isSet(e)) {
          var a = new Set();
          t.set(e, a);
          e.forEach(function (e) {
            a.add(de(e, t));
          });
          return a;
        }

        if (i.isDate(e)) {
          return new Date(e);
        }

        if (i.isRegExp(e)) {
          var o = /\w*$/;
          var s = o.exec(e);
          var u = new RegExp(e.source);

          if (s && i.isArray(s)) {
            u = new RegExp(e.source, s[0]);
          }

          u.lastIndex = e.lastIndex;
          return u;
        }

        var l = Object.getPrototypeOf(e);
        var f = Object.assign(Object.create(l), e);
        t.set(e, f);
        Object.keys(e).forEach(function (r) {
          f[r] = de(e[r], t);
        });
        return f;
      }

      return e;
    }

    function pe(e) {
      return de(e, new WeakMap());
    }

    function ye(e, t) {
      return Object.entries(t).reduce(function (e, t) {
        var r = babelHelpers.slicedToArray(t, 2),
            n = r[0],
            a = r[1];

        if (!i.isDomNode(e[n]) && i.isObjectLike(e[n]) && i.isObjectLike(a)) {
          e[n] = ye(e[n], a);
          return e;
        }

        e[n] = a;
        return e;
      }, e);
    }

    function ge(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      return function (r, n) {
        var a = e[0];
        var o = t[0] || "asc";

        if (i.isUndefined(a)) {
          return 0;
        }

        var s = r[a];
        var u = n[a];

        if (i.isString(s) && i.isString(u)) {
          s = s.toLowerCase();
          u = u.toLowerCase();
        }

        if (s < u) {
          return o === "asc" ? -1 : 1;
        }

        if (s > u) {
          return o === "asc" ? 1 : -1;
        }

        return ge(e.slice(1), t.slice(1))(r, n);
      };
    }

    var me = function () {
      function e() {
        babelHelpers.classCallCheck(this, e);
      }

      babelHelpers.createClass(e, null, [{
        key: "debounce",
        value: function e(t) {
          var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          var a;
          return function e() {
            var o = this;

            for (var s = arguments.length, u = new Array(s), l = 0; l < s; l++) {
              u[l] = arguments[l];
            }

            if (i.isNumber(a)) {
              clearTimeout(a);
            }

            a = setTimeout(function () {
              t.apply(n || o, u);
            }, r);
          };
        }
      }, {
        key: "throttle",
        value: function e(t) {
          var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          var i = 0;
          var a;
          return function e() {
            for (var o = arguments.length, s = new Array(o), u = 0; u < o; u++) {
              s[u] = arguments[u];
            }

            a = true;

            if (!i) {
              var l = function e() {
                if (a) {
                  t.apply(n || this, s);
                  a = false;
                  i = setTimeout(e, r);
                } else {
                  i = null;
                }
              };

              l();
            }
          };
        }
      }, {
        key: "html",
        value: function e(t, r) {
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

          if (i.isNil(r) && i.isDomNode(t)) {
            return t.innerHTML;
          }

          var a = BX.processHTML(r);
          var o = a.STYLE.reduce(se, []);
          var s = a.SCRIPT.reduce(oe, []);
          var u = a.SCRIPT.reduce(ae, []);

          if (i.isDomNode(t)) {
            if (n.htmlFirst || !s.length && !o.length) {
              t.innerHTML = a.HTML;
            }
          }

          return Promise.all([fe(s), fe(o)]).then(function () {
            if (i.isDomNode(t) && (s.length > 0 || o.length > 0)) {
              t.innerHTML = a.HTML;
            }

            u.forEach(function (e) {
              return BX.evalGlobal(e);
            });

            if (i.isFunction(n.callback)) {
              n.callback();
            }
          });
        }
      }, {
        key: "merge",
        value: function e() {
          for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) {
            r[n] = arguments[n];
          }

          if (i.isArray(r[0])) {
            r.unshift([]);
          } else if (i.isObject(r[0])) {
            r.unshift({});
          }

          return r.reduce(function (e, t) {
            return ye(e, t);
          }, r[0]);
        }
      }, {
        key: "orderBy",
        value: function e(t) {
          var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
          var i = ge(r, n);
          return Object.values(t).sort(i);
        }
      }]);
      return e;
    }();

    babelHelpers.defineProperty(me, "debug", q);
    babelHelpers.defineProperty(me, "loadExtension", ce);
    babelHelpers.defineProperty(me, "clone", pe);

    function be(e) {
      if (i.isString(e)) {
        if (i.isNil(be[e])) {
          BX.onCustomEvent(window, "onBXMessageNotFound", [e]);

          if (i.isNil(be[e])) {
            BX.onCustomEvent(window, "onBXMessageNotFound", [e]);
            me.debug("message undefined: ".concat(e));
            be[e] = "";
          }
        }
      }

      if (i.isPlainObject(e)) {
        Object.keys(e).forEach(function (t) {
          be[t] = e[t];
        });
      }

      return be[e];
    }

    if (!i.isNil(window.BX) && i.isFunction(window.BX.message)) {
      Object.keys(window.BX.message).forEach(function (e) {
        be(babelHelpers.defineProperty({}, e, window.BX.message[e]));
      });
    }

    var we = function () {
      function e() {
        babelHelpers.classCallCheck(this, e);
      }

      babelHelpers.createClass(e, null, [{
        key: "getMessage",
        value: function e(t) {
          return be(t);
        }
      }, {
        key: "setMessage",
        value: function e(t, r) {
          if (i.isString(t) && i.isString(r)) {
            be(babelHelpers.defineProperty({}, t, r));
          }

          if (i.isObject(t)) {
            be(t);
          }
        }
      }]);
      return e;
    }();

    var Se = new Map();
    var xe = new Map();

    var Ee = function () {
      var e = 0;
      return function () {
        e += 1;
        return e;
      };
    }();

    function Be(e, t) {
      t.forEach(function (t, r) {
        var n = e.querySelector("[".concat(r, "]"));

        if (n) {
          n.removeAttribute(r);
          var i = r.replace(/-(.*)/, "");
          k.bind(n, i, t);
          Se.delete(r);
        }
      });
    }

    function je(e, t) {
      t.forEach(function (t, r) {
        var n = e.getElementById(r);

        if (n) {
          L.replace(n, t);
          xe.delete(r);
        }
      });
    }

    function _e(e) {
      var t = /[ |\t]on(\w+)="$/;
      var r = /[\r\n\t]/g;

      for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) {
        a[o - 1] = arguments[o];
      }

      var s = a.reduce(function (n, a, o) {
        var s = n;
        var u = n.match(t);

        if (u && i.isFunction(a)) {
          var l = u[1].replace(/=['|"]/, "");
          var f = "".concat(l, "-").concat(Ee());
          var c = "".concat(f, '="');
          s = s.replace(t, " ".concat(c));
          Se.set(f, a);
          s += e[o + 1].replace(r, " ").replace(/  +/g, " ");
          return s;
        }

        if (i.isDomNode(a)) {
          var v = "tmp___".concat(Ee());
          xe.set(v, a);
          s += '<span id="'.concat(v, '"> </span>');
          s += e[o + 1];
          return s;
        }

        if (i.isArray(a)) {
          babelHelpers.toConsumableArray(a).forEach(function (e) {
            if (i.isDomNode(e)) {
              var t = "tmp___".concat(Ee());
              xe.set(t, e);
              s += '<span id="'.concat(t, '"> </span>');
            }
          });
          s += e[o + 1];
          return s;
        }

        return s + a + e[o + 1];
      }, e[0]);
      var u = s.trim().toLowerCase();

      if (u.startsWith("<!doctype") || u.startsWith("<html")) {
        var l = document.implementation.createHTMLDocument("");
        l.documentElement.innerHTML = s;
        je(l, xe);
        Be(l, Se);
        Se.clear();
        return l;
      }

      var f = new DOMParser();
      var c = f.parseFromString(s, "text/html");
      je(c, xe);
      Be(c, Se);

      if (c.head.children.length && c.body.children.length) {
        return c;
      }

      if (c.body.children.length === 1) {
        var v = babelHelpers.slicedToArray(c.body.children, 1),
            h = v[0];
        L.remove(h);
        return h;
      }

      if (c.body.children.length > 1) {
        return babelHelpers.toConsumableArray(c.body.children).map(function (e) {
          L.remove(e);
          return e;
        });
      }

      if (c.body.children.length === 0) {
        if (c.head.children.length === 1) {
          var d = babelHelpers.slicedToArray(c.head.children, 1),
              p = d[0];
          L.remove(p);
          return p;
        }

        if (c.head.children.length > 1) {
          return babelHelpers.toConsumableArray(c.head.children).map(function (e) {
            L.remove(e);
            return e;
          });
        }
      }

      return false;
    }

    function Xe(e) {
      for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) {
        r[n - 1] = arguments[n];
      }

      return r.reduce(function (t, r, n) {
        var a = n + 1;

        if (!i.isPlainObject(r) && !i.isArray(r)) {
          return t + r + e[a];
        }

        return "".concat(t, "__s").concat(n).concat(e[a]);
      }, e[0]).replace(/[\r\t]/gm, "").split(";\n").map(function (e) {
        return e.replace(/\n/, "");
      }).reduce(function (e, t) {
        if (t !== "") {
          var n = t.match(/^[\w-. ]+:/);
          var i = t.split(/^[\w-. ]+:/);
          var a = n[0].replace(":", "").trim();
          var o = i[1].trim();
          var s = /^__s\d+/;

          if (s.test(o)) {
            e[a] = r[o.replace("__s", "")];
            return e;
          }

          e[a] = o;
        }

        return e;
      }, {});
    }

    var Oe = function () {
      function e() {
        babelHelpers.classCallCheck(this, e);
      }

      babelHelpers.createClass(e, null, [{
        key: "safe",
        value: function e(t) {
          for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) {
            n[i - 1] = arguments[i];
          }

          return n.reduce(function (e, r, n) {
            return e + f.encode(r) + t[n + 1];
          }, t[0]);
        }
      }, {
        key: "unsafe",
        value: function e(t) {
          for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) {
            n[i - 1] = arguments[i];
          }

          return n.reduce(function (e, r, n) {
            return e + f.decode(r) + t[n + 1];
          }, t[0]);
        }
      }, {
        key: "style",
        value: function e(t) {
          if (!i.isDomNode(t)) {
            throw new Error("element is not HTMLElement");
          }

          return function e() {
            L.style(t, Xe.apply(void 0, arguments));
          };
        }
      }, {
        key: "message",
        value: function e(t) {
          for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) {
            n[i - 1] = arguments[i];
          }

          return n.reduce(function (e, r, n) {
            return e + we.getMessage(r) + t[n + 1];
          }, t[0]);
        }
      }, {
        key: "attrs",
        value: function e(t) {
          if (!i.isDomNode(t)) {
            throw new Error("element is not HTMLElement");
          }

          return function e() {
            L.attr(t, Xe.apply(void 0, arguments));
          };
        }
      }]);
      return e;
    }();

    babelHelpers.defineProperty(Oe, "render", _e);
    babelHelpers.defineProperty(Oe, "attr", Oe.attrs);

    function Ne(e) {
      switch (e) {
        case "index":
          return function (e, t, r) {
            var n = /\[(\w*)\]$/.exec(e);
            var a = e.replace(/\[\w*\]$/, "");

            if (i.isNil(n)) {
              r[a] = t;
              return;
            }

            if (i.isUndefined(r[a])) {
              r[a] = {};
            }

            r[a][n[1]] = t;
          };

        case "bracket":
          return function (e, t, r) {
            var n = /(\[\])$/.exec(e);
            var a = e.replace(/\[\]$/, "");

            if (i.isNil(n)) {
              r[a] = t;
              return;
            }

            if (i.isUndefined(r[a])) {
              r[a] = [t];
              return;
            }

            r[a] = [].concat(r[a], t);
          };

        default:
          return function (e, t, r) {
            var n = e.replace(/\[\]$/, "");
            r[n] = t;
          };
      }
    }

    function Pe(e) {
      if (/^\w+\[([\w]+)\]$/.test(e)) {
        return "index";
      }

      if (/^\w+\[\]$/.test(e)) {
        return "bracket";
      }

      return "default";
    }

    function Ae(e) {
      if (!i.isString(e)) {
        return {};
      }

      var t = e.trim().replace(/^[?#&]/, "");

      if (!t) {
        return {};
      }

      return t.split("&").reduce(function (e, t) {
        var r = t.replace(/\+/g, " ").split("="),
            n = babelHelpers.slicedToArray(r, 2),
            i = n[0],
            a = n[1];
        var o = Pe(i);
        var s = Ne(o);
        s(i, a, e);
        return e;
      }, {});
    }

    var Te = /^((\w+):)?(\/\/((\w+)?(:(\w+))?@)?([^\/\?:]+)(:(\d+))?)?(\/?([^\/\?#][^\?#]*)?)?(\?([^#]+))?(#(\w*))?/;

    function Ce(e) {
      var t = e.match(Te);

      if (i.isArray(t)) {
        var r = Ae(t[14]);
        return {
          useShort: /^\/\//.test(e),
          href: t[0] || "",
          schema: t[2] || "",
          host: t[8] || "",
          port: t[10] || "",
          path: t[11] || "",
          query: t[14] || "",
          queryParams: r,
          hash: t[16] || "",
          username: t[5] || "",
          password: t[7] || "",
          origin: t[8] || ""
        };
      }

      return {};
    }

    function ke() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var t = Object.keys(e).reduce(function (t, r) {
        if (i.isArray(e[r])) {
          e[r].forEach(function (e) {
            t.push("".concat(r, "[]=").concat(e));
          }, "");
        }

        if (i.isPlainObject(e[r])) {
          Object.keys(e[r]).forEach(function (n) {
            t.push("".concat(r, "[").concat(n, "]=").concat(e[r][n]));
          }, "");
        }

        if (!i.isObject(e[r]) && !i.isArray(e[r])) {
          t.push("".concat(r, "=").concat(e[r]));
        }

        return t;
      }, []).join("&");

      if (t.length > 0) {
        return "?".concat(t);
      }

      return t;
    }

    function Ie(e) {
      if (i.isArray(e)) {
        return e.map(function (e) {
          return String(e);
        });
      }

      if (i.isPlainObject(e)) {
        return babelHelpers.objectSpread({}, e);
      }

      return String(e);
    }

    var Me = new WeakMap();

    var Fe = function () {
      babelHelpers.createClass(e, null, [{
        key: "addParam",
        value: function t(r) {
          var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return new e(r).setQueryParams(n).toString();
        }
      }, {
        key: "removeParam",
        value: function t(r, n) {
          var a;
          var o = i.isArray(n) ? n : [n];
          return (a = new e(r)).removeQueryParam.apply(a, babelHelpers.toConsumableArray(o)).toString();
        }
      }]);

      function e() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        babelHelpers.classCallCheck(this, e);
        Me.set(this, Ce(t));
      }

      babelHelpers.createClass(e, [{
        key: "getSchema",
        value: function e() {
          return Me.get(this).schema;
        }
      }, {
        key: "setSchema",
        value: function e(t) {
          Me.get(this).schema = String(t);
          return this;
        }
      }, {
        key: "getHost",
        value: function e() {
          return Me.get(this).host;
        }
      }, {
        key: "setHost",
        value: function e(t) {
          Me.get(this).host = String(t);
          return this;
        }
      }, {
        key: "getPort",
        value: function e() {
          return Me.get(this).port;
        }
      }, {
        key: "setPort",
        value: function e(t) {
          Me.get(this).port = String(t);
          return this;
        }
      }, {
        key: "getPath",
        value: function e() {
          return Me.get(this).path;
        }
      }, {
        key: "setPath",
        value: function e(t) {
          if (!/^\//.test(t)) {
            Me.get(this).path = "/".concat(String(t));
            return this;
          }

          Me.get(this).path = String(t);
          return this;
        }
      }, {
        key: "getQuery",
        value: function e() {
          return ke(Me.get(this).queryParams);
        }
      }, {
        key: "getQueryParam",
        value: function e(t) {
          var r = this.getQueryParams();

          if (t in r) {
            return r[t];
          }

          return null;
        }
      }, {
        key: "setQueryParam",
        value: function e(t) {
          var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          Me.get(this).queryParams[t] = Ie(r);
          return this;
        }
      }, {
        key: "getQueryParams",
        value: function e() {
          return babelHelpers.objectSpread({}, Me.get(this).queryParams);
        }
      }, {
        key: "setQueryParams",
        value: function e() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var r = this.getQueryParams();
          var n = babelHelpers.objectSpread({}, r, t);
          Object.keys(n).forEach(function (e) {
            n[e] = Ie(n[e]);
          });
          Me.get(this).queryParams = n;
          return this;
        }
      }, {
        key: "removeQueryParam",
        value: function e() {
          var t = babelHelpers.objectSpread({}, Me.get(this).queryParams);

          for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) {
            n[i] = arguments[i];
          }

          n.forEach(function (e) {
            if (e in t) {
              delete t[e];
            }
          });
          Me.get(this).queryParams = t;
          return this;
        }
      }, {
        key: "getFragment",
        value: function e() {
          return Me.get(this).hash;
        }
      }, {
        key: "setFragment",
        value: function e(t) {
          Me.get(this).hash = String(t);
          return this;
        }
      }, {
        key: "serialize",
        value: function e() {
          var t = babelHelpers.objectSpread({}, Me.get(this));
          t.href = this.toString();
          return t;
        }
      }, {
        key: "toString",
        value: function e() {
          var t = babelHelpers.objectSpread({}, Me.get(this));
          var r = t.schema ? "".concat(t.schema, "://") : "";

          if (t.useShort) {
            r = "//";
          }

          var n = function () {
            if (i.isString(t.port) && !["", "80"].includes(t.port)) {
              return ":".concat(t.port);
            }

            return "";
          }();

          var a = this.getHost();
          var o = this.getPath();
          var s = ke(t.queryParams);
          var u = t.hash ? "#".concat(t.hash) : "";
          return "".concat(a ? r : "").concat(a).concat(a ? n : "").concat(o).concat(s).concat(u);
        }
      }]);
      return e;
    }();

    var Le = function () {
      function e() {
        babelHelpers.classCallCheck(this, e);
      }

      babelHelpers.createClass(e, null, [{
        key: "isEmail",
        value: function e(t) {
          var r = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
          return r.test(String(t).toLowerCase());
        }
      }]);
      return e;
    }();

    var De = function () {
      function e() {
        babelHelpers.classCallCheck(this, e);
        babelHelpers.defineProperty(this, "storage", new Map());
      }

      babelHelpers.createClass(e, [{
        key: "get",
        value: function e(t, r) {
          if (!this.storage.has(t)) {
            if (i.isFunction(r)) {
              return r();
            }

            if (!i.isUndefined(r)) {
              return r;
            }
          }

          return this.storage.get(t);
        }
      }, {
        key: "set",
        value: function e(t, r) {
          this.storage.set(t, r);
        }
      }, {
        key: "delete",
        value: function e(t) {
          this.storage.delete(t);
        }
      }, {
        key: "has",
        value: function e(t) {
          return this.storage.has(t);
        }
      }, {
        key: "remember",
        value: function e(t, r) {
          if (!this.storage.has(t)) {
            if (i.isFunction(r)) {
              this.storage.set(t, r());
            } else if (!i.isUndefined(r)) {
              this.storage.set(t, r);
            }
          }

          return this.storage.get(t);
        }
      }, {
        key: "size",
        value: function e() {
          return this.storage.size;
        }
      }, {
        key: "keys",
        value: function e() {
          return babelHelpers.toConsumableArray(this.storage.keys());
        }
      }, {
        key: "values",
        value: function e() {
          return babelHelpers.toConsumableArray(this.storage.values());
        }
      }]);
      return e;
    }();

    var Re = function (e) {
      babelHelpers.inherits(t, e);

      function t() {
        var e;
        var r;
        babelHelpers.classCallCheck(this, t);

        for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) {
          i[a] = arguments[a];
        }

        r = babelHelpers.possibleConstructorReturn(this, (e = babelHelpers.getPrototypeOf(t)).call.apply(e, [this].concat(i)));
        babelHelpers.defineProperty(babelHelpers.assertThisInitialized(r), "storage", new Map());
        return r;
      }

      return t;
    }(De);

    var He = function () {
      function e() {
        babelHelpers.classCallCheck(this, e);
        babelHelpers.defineProperty(this, "stackKey", "BX.Cache.Storage.LsStorage.stack");
        babelHelpers.defineProperty(this, "stack", null);
      }

      babelHelpers.createClass(e, [{
        key: "getStack",
        value: function e() {
          if (i.isPlainObject(this.stack)) {
            return this.stack;
          }

          var t = localStorage.getItem(this.stackKey);

          if (i.isString(t) && t !== "") {
            var r = JSON.parse(t);

            if (i.isPlainObject(r)) {
              this.stack = r;
            }
          }

          this.stack = {};
          return this.stack;
        }
      }, {
        key: "saveStack",
        value: function e() {
          if (i.isPlainObject(this.stack)) {
            var t = JSON.stringify(this.stack);
            localStorage.setItem(this.stackKey, t);
          }
        }
      }, {
        key: "get",
        value: function e(t) {
          var r = this.getStack();
          return r[t];
        }
      }, {
        key: "set",
        value: function e(t, r) {
          var n = this.getStack();
          n[t] = r;
          this.saveStack();
        }
      }, {
        key: "delete",
        value: function e(t) {
          var r = this.getStack();

          if (t in r) {
            delete r[t];
          }
        }
      }, {
        key: "has",
        value: function e(t) {
          var r = this.getStack();
          return t in r;
        }
      }, {
        key: "keys",
        value: function e() {
          var t = this.getStack();
          return Object.keys(t);
        }
      }, {
        key: "values",
        value: function e() {
          var t = this.getStack();
          return Object.values(t);
        }
      }, {
        key: "size",
        get: function e() {
          var t = this.getStack();
          return Object.keys(t).length;
        }
      }]);
      return e;
    }();

    var We = function (e) {
      babelHelpers.inherits(t, e);

      function t() {
        var e;
        var r;
        babelHelpers.classCallCheck(this, t);

        for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) {
          i[a] = arguments[a];
        }

        r = babelHelpers.possibleConstructorReturn(this, (e = babelHelpers.getPrototypeOf(t)).call.apply(e, [this].concat(i)));
        babelHelpers.defineProperty(babelHelpers.assertThisInitialized(r), "storage", new He());
        return r;
      }

      return t;
    }(De);

    var ze = function e() {
      babelHelpers.classCallCheck(this, e);
    };

    babelHelpers.defineProperty(ze, "MemoryCache", Re);
    babelHelpers.defineProperty(ze, "LocalStorageCache", We);

    function Ue(e) {
      if (i.isString(e)) {
        return document.getElementById(e);
      }

      return e;
    }

    function Ge(e) {
      if (i.isElementNode(e)) {
        return e.ownerDocument.parentWindow || e.ownerDocument.defaultView || window;
      }

      if (i.isDomNode(e)) {
        return e.parentWindow || e.defaultView || window;
      }

      return window;
    }

    var Ve = a.getClass,
        Ye = a.namespace;
    var Je = be;
    var qe = L.replace,
        $e = L.remove,
        Ke = L.clean,
        Qe = L.insertBefore,
        Ze = L.insertAfter,
        et = L.append,
        tt = L.prepend,
        rt = L.style,
        nt = L.adjust,
        it = L.create,
        at = L.isShown;

    var ot = function e() {
      L.addClass.apply(L, babelHelpers.toConsumableArray(me.merge([], Array.from(arguments), [Ue(arguments[0])])));
    };

    var st = function e() {
      L.removeClass.apply(L, babelHelpers.toConsumableArray(me.merge(Array.from(arguments), [Ue(arguments[0])])));
    };

    var ut = function e() {
      return L.hasClass.apply(L, babelHelpers.toConsumableArray(me.merge(Array.from(arguments), [Ue(arguments[0])])));
    };

    var lt = function e() {
      L.toggleClass.apply(L, babelHelpers.toConsumableArray(me.merge(Array.from(arguments), [Ue(arguments[0])])));
    };

    var ft = function e(t) {
      var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var n = Ue(t);

      if (i.isDomNode(n)) {
        L.clean(n);

        if (r) {
          L.remove(n);
          return n;
        }
      }

      return n;
    };

    var ct = U.Cookie.get;

    var vt = function e(t, r) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var a = babelHelpers.objectSpread({}, n);

      if (i.isNumber(a.expires)) {
        a.expires /= 3600 * 24;
      }

      U.Cookie.set(t, r, a);
    };

    var ht = k.bind,
        dt = k.unbind,
        pt = k.unbindAll,
        yt = k.bindOnce,
        gt = k.ready;
    var mt = G,
        bt = J,
        wt = q;

    var St = function e(t) {
      if (t) {
        V();
      } else {
        Y();
      }
    };

    var xt = me.clone,
        Et = me.loadExtension,
        Bt = me.debounce,
        jt = me.throttle,
        _t = me.html;
    var Xt = babelHelpers.objectSpread({}, Object.getOwnPropertyNames(i).filter(function (e) {
      return !["name", "length", "prototype", "caller", "arguments"].includes(e);
    }).reduce(function (e, t) {
      e[t] = i[t];
      return e;
    }, {}), {
      isNotEmptyString: function e(t) {
        return i.isString(t) && t !== "";
      },
      isNotEmptyObject: function e(t) {
        return i.isObjectLike(t) && Object.keys(t).length > 0;
      },
      isMapKey: i.isObject,
      stringToInt: function e(t) {
        var r = parseInt(t);
        return !Number.isNaN(r) ? r : 0;
      }
    });
    var Ot = {
      IsOpera: R.isOpera,
      IsIE: R.isIE,
      IsIE6: R.isIE6,
      IsIE7: R.isIE7,
      IsIE8: R.isIE8,
      IsIE9: R.isIE9,
      IsIE10: R.isIE10,
      IsIE11: R.isIE11,
      IsSafari: R.isSafari,
      IsFirefox: R.isFirefox,
      IsChrome: R.isChrome,
      DetectIeVersion: R.detectIEVersion,
      IsMac: R.isMac,
      IsAndroid: R.isAndroid,
      isIPad: R.isIPad,
      isIPhone: R.isIPhone,
      IsIOS: R.isIOS,
      IsMobile: R.isMobile,
      isRetina: R.isRetina,
      IsDoctype: R.isDoctype,
      SupportLocalStorage: R.isLocalStorageSupported,
      addGlobalClass: R.addGlobalClass,
      DetectAndroidVersion: R.detectAndroidVersion,
      isPropertySupported: R.isPropertySupported,
      addGlobalFeatures: R.addGlobalFeatures
    };
    var Nt = window.BX ? window.BX.ajax : function () {};

    function Pt() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
      return {
        scrollWidth: e.documentElement.scrollWidth,
        scrollHeight: e.documentElement.scrollHeight
      };
    }

    function At() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
      var t = Ge(e);
      return {
        scrollLeft: t.pageXOffset,
        scrollTop: t.pageYOffset
      };
    }

    function Tt() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
      var t = Ge(e);
      return {
        innerWidth: t.innerWidth,
        innerHeight: t.innerHeight
      };
    }

    function Ct() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
      return babelHelpers.objectSpread({}, Tt(e), At(e), Pt(e));
    }

    function kt(e) {
      return Ge(e);
    }

    function It(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!e) {
        return new DOMRect().toJSON();
      }

      if (e.ownerDocument === document && !t) {
        var r = e.getBoundingClientRect();
        var n = document.documentElement;
        var i = document,
            a = i.body;
        return {
          top: Math.round(r.top + (n.scrollTop || a.scrollTop)),
          left: Math.round(r.left + (n.scrollLeft || a.scrollLeft)),
          width: Math.round(r.right - r.left),
          height: Math.round(r.bottom - r.top),
          right: Math.round(r.right + (n.scrollLeft || a.scrollLeft)),
          bottom: Math.round(r.bottom + (n.scrollTop || a.scrollTop))
        };
      }

      var o = 0;
      var s = 0;
      var u = e.offsetWidth;
      var l = e.offsetHeight;
      var c = true;

      for (; e != null; e = e.offsetParent) {
        if (!c && t && BX.is_relative(e)) {
          break;
        }

        o += e.offsetLeft;
        s += e.offsetTop;

        if (c) {
          c = false;
          continue;
        }

        o += f.toNumber(L.style(e, "border-left-width"));
        s += f.toNumber(L.style(e, "border-top-width"));
      }

      return new DOMRect(o, s, u, l).toJSON();
    }

    if (global && global.window && global.window.BX) {
      Object.assign(global.window.BX, e);
    }

    e.Type = i;
    e.Reflection = a;
    e.Text = f;
    e.Dom = L;
    e.Browser = R;
    e.Event = k;
    e.Http = U;
    e.Runtime = me;
    e.Loc = we;
    e.Tag = Oe;
    e.Uri = Fe;
    e.Validation = Le;
    e.Cache = ze;
    e.getClass = Ve;
    e.namespace = Ye;
    e.message = Je;
    e.replace = qe;
    e.remove = $e;
    e.clean = Ke;
    e.insertBefore = Qe;
    e.insertAfter = Ze;
    e.append = et;
    e.prepend = tt;
    e.style = rt;
    e.adjust = nt;
    e.create = it;
    e.isShown = at;
    e.addClass = ot;
    e.removeClass = st;
    e.hasClass = ut;
    e.toggleClass = lt;
    e.cleanNode = ft;
    e.getCookie = ct;
    e.setCookie = vt;
    e.bind = ht;
    e.unbind = dt;
    e.unbindAll = pt;
    e.bindOnce = yt;
    e.ready = gt;
    e.debugEnableFlag = mt;
    e.debugStatus = bt;
    e.debug = wt;
    e.debugEnable = St;
    e.clone = xt;
    e.loadExt = Et;
    e.debounce = Bt;
    e.throttle = jt;
    e.html = _t;
    e.type = Xt;
    e.browser = Ot;
    e.ajax = Nt;
    e.GetWindowScrollSize = Pt;
    e.GetWindowScrollPos = At;
    e.GetWindowInnerSize = Tt;
    e.GetWindowSize = Ct;
    e.GetContext = kt;
    e.pos = It;
  })(this.BX = this.BX || {});

  (function (BX) {
    var proxyList = new WeakMap();
    var deferList = new WeakMap();
    var deniedEvents = [];
    var customEvents = new WeakMap();
    var customEventsCnt = 0;
    var garbageCollectors = [];
    var cssList = [];
    var cssInit = false;
    var jsList = [];
    var jsInit = false;
    var eventTypes = {
      click: "MouseEvent",
      dblclick: "MouseEvent",
      mousedown: "MouseEvent",
      mousemove: "MouseEvent",
      mouseout: "MouseEvent",
      mouseover: "MouseEvent",
      mouseup: "MouseEvent",
      focus: "MouseEvent",
      blur: "MouseEvent"
    };
    var lastWait = [];
    var CHECK_FORM_ELEMENTS = {
      tagName: /^INPUT|SELECT|TEXTAREA|BUTTON$/i
    };
    var PRELOADING = 1;
    var PRELOADED = 2;
    var LOADING = 3;
    var LOADED = 4;
    var assets = {};
    var isAsync = null;
    BX.MSLEFT = 1;
    BX.MSMIDDLE = 2;
    BX.MSRIGHT = 4;
    BX.AM_PM_UPPER = 1;
    BX.AM_PM_LOWER = 2;
    BX.AM_PM_NONE = false;

    BX.ext = function (e) {
      for (var t in e) {
        if (e.hasOwnProperty(t)) {
          this[t] = e[t];
        }
      }
    };

    var r = {
      script: /<script([^>]*)>/gi,
      script_end: /<\/script>/gi,
      script_src: /src=["\']([^"\']+)["\']/i,
      script_type: /type=["\']([^"\']+)["\']/i,
      space: /\s+/,
      ltrim: /^[\s\r\n]+/g,
      rtrim: /[\s\r\n]+$/g,
      style: /<link.*?(rel="stylesheet"|type="text\/css")[^>]*>/i,
      style_href: /href=["\']([^"\']+)["\']/i
    };

    BX.processHTML = function (e, t) {
      var n,
          i,
          a,
          o,
          s,
          u = [],
          l = [];
      var f = [];
      var c = r.script.lastIndex = r.script_end.lastIndex = 0;

      while ((n = r.script.exec(e)) !== null) {
        r.script_end.lastIndex = r.script.lastIndex;
        var v = r.script_end.exec(e);

        if (v === null) {
          break;
        }

        var h = false;

        if ((s = n[1].match(r.script_type)) !== null) {
          if (s[1] == "text/html" || s[1] == "text/template") h = true;
        }

        if (h) {
          f.push([c, r.script_end.lastIndex - c]);
        } else {
          f.push([c, n.index - c]);
          var d = t || n[1].indexOf("bxrunfirst") != "-1";

          if ((a = n[1].match(r.script_src)) !== null) {
            u.push({
              bRunFirst: d,
              isInternal: false,
              JS: a[1]
            });
          } else {
            var p = n.index + n[0].length;
            var y = e.substr(p, v.index - p);
            u.push({
              bRunFirst: d,
              isInternal: true,
              JS: y
            });
          }
        }

        c = v.index + 9;
        r.script.lastIndex = c;
      }

      f.push([c, c === 0 ? e.length : e.length - c]);
      var g = "";

      for (var m = 0, b = f.length; m < b; m++) {
        if (BX.type.isString(e) && BX.type.isFunction(e.substr)) {
          g += e.substr(f[m][0], f[m][1]);
        }
      }

      while ((i = g.match(r.style)) !== null) {
        if ((o = i[0].match(r.style_href)) !== null && i[0].indexOf('media="') < 0) {
          l.push(o[1]);
        }

        g = g.replace(i[0], "");
      }

      return {
        HTML: g,
        SCRIPT: u,
        STYLE: l
      };
    };

    BX.extend = function (e, t) {
      var r = function r() {};

      r.prototype = t.prototype;
      e.prototype = new r();
      e.prototype.constructor = e;
      e.superclass = t.prototype;
      e.prototype.superclass = t.prototype;

      if (t.prototype.constructor == Object.prototype.constructor) {
        t.prototype.constructor = t;
      }
    };

    BX.is_subclass_of = function (e, t) {
      if (e instanceof t) return true;
      if (t.superclass) return BX.is_subclass_of(e, t.superclass);
      return false;
    };

    BX.clearNodeCache = function () {
      return false;
    };

    BX.bitrix_sessid = function () {
      return BX.message("bitrix_sessid");
    };

    BX.createFragment = function (e) {
      var t = document.createDocumentFragment();

      if (!BX.type.isArray(e)) {
        return t;
      }

      for (var r = 0; r < e.length; r++) {
        t.appendChild(e[r]);
      }

      return t;
    };

    BX.setOpacity = function (e, t) {
      var r = parseFloat(t);

      if (!isNaN(r) && BX.type.isDomNode(e)) {
        r = r < 1 ? r : r / 100;
        BX.style(e, "opacity", r);
      }
    };

    BX.hoverEvents = function (e) {
      if (e) return BX.adjust(e, {
        events: BX.hoverEvents()
      });else return {
        mouseover: BX.hoverEventsHover,
        mouseout: BX.hoverEventsHout
      };
    };

    BX.hoverEventsHover = function () {
      BX.addClass(this, "bx-hover");
      this.BXHOVER = true;
    };

    BX.hoverEventsHout = function () {
      BX.removeClass(this, "bx-hover");
      this.BXHOVER = false;
    };

    BX.focusEvents = function (e) {
      if (e) return BX.adjust(e, {
        events: BX.focusEvents()
      });else return {
        mouseover: BX.focusEventsFocus,
        mouseout: BX.focusEventsBlur
      };
    };

    BX.focusEventsFocus = function () {
      BX.addClass(this, "bx-focus");
      this.BXFOCUS = true;
    };

    BX.focusEventsBlur = function () {
      BX.removeClass(this, "bx-focus");
      this.BXFOCUS = false;
    };

    BX.setUnselectable = function (e) {
      BX.style(e, {
        userSelect: "none",
        MozUserSelect: "none",
        WebkitUserSelect: "none",
        KhtmlUserSelect: "none"
      });
      e.setAttribute("unSelectable", "on");
    };

    BX.setSelectable = function (e) {
      BX.style(e, {
        userSelect: null,
        MozUserSelect: null,
        WebkitUserSelect: null,
        KhtmlUserSelect: null
      });
      e.removeAttribute("unSelectable");
    };

    BX.styleIEPropertyName = function (e) {
      if (e == "float") e = BX.browser.IsIE() ? "styleFloat" : "cssFloat";else {
        var t = BX.browser.isPropertySupported(e);

        if (t) {
          e = t;
        } else {
          var r = /(\-([a-z]){1})/g;

          if (r.test(e)) {
            e = e.replace(r, function () {
              return arguments[2].toUpperCase();
            });
          }
        }
      }
      return e;
    };

    BX.focus = function (e) {
      try {
        e.focus();
        return true;
      } catch (e) {
        return false;
      }
    };

    BX.firstChild = function (e) {
      return BX.type.isDomNode(e) ? e.firstElementChild : null;
    };

    BX.lastChild = function (e) {
      return BX.type.isDomNode(e) ? e.lastElementChild : null;
    };

    BX.previousSibling = function (e) {
      return BX.type.isDomNode(e) ? e.previousElementSibling : null;
    };

    BX.nextSibling = function (e) {
      return BX.type.isDomNode(e) ? e.nextElementSibling : null;
    };

    BX.findChildrenByClassName = function (e, t, r) {
      if (!e || !e.childNodes) return null;
      var n = [];

      if (typeof e.getElementsByClassName == "undefined") {
        r = r !== false;
        n = BX.findChildren(e, {
          className: t
        }, r);
      } else {
        var a = e.getElementsByClassName(t);

        for (i = 0, l = a.length; i < l; i++) {
          n[i] = a[i];
        }
      }

      return n;
    };

    BX.findChildByClassName = function (e, t, r) {
      if (!e || !e.childNodes) return null;
      var n = null;

      if (typeof e.getElementsByClassName == "undefined") {
        r = r !== false;
        n = BX.findChild(e, {
          className: t
        }, r);
      } else {
        var i = e.getElementsByClassName(t);

        if (i && typeof i[0] != "undefined") {
          n = i[0];
        } else {
          n = null;
        }
      }

      return n;
    };

    BX.findChildren = function (e, t, r) {
      return BX.findChild(e, t, r, true);
    };

    BX.findChild = function (e, t, r, n) {
      if (!e || !e.childNodes) return null;
      r = !!r;
      n = !!n;
      var i = e.childNodes.length,
          a = [];

      for (var o = 0; o < i; o++) {
        var s = e.childNodes[o];

        if (_checkNode(s, t)) {
          if (n) a.push(s);else return s;
        }

        if (r == true) {
          var u = BX.findChild(s, t, r, n);

          if (u) {
            if (n) a = BX.util.array_merge(a, u);else return u;
          }
        }
      }

      if (n || a.length > 0) return a;else return null;
    };

    BX.findParent = function (e, t, r) {
      if (!e) return null;
      var n = e;

      while (n.parentNode) {
        var i = n.parentNode;
        if (_checkNode(i, t)) return i;
        n = i;

        if (!!r && (BX.type.isFunction(r) || _typeof(r) == "object")) {
          if (BX.type.isElementNode(r)) {
            if (n == r) break;
          } else {
            if (_checkNode(n, r)) break;
          }
        }
      }

      return null;
    };

    BX.findNextSibling = function (e, t) {
      if (!e) return null;
      var r = e;

      while (r.nextSibling) {
        var n = r.nextSibling;
        if (_checkNode(n, t)) return n;
        r = n;
      }

      return null;
    };

    BX.findPreviousSibling = function (e, t) {
      if (!e) return null;
      var r = e;

      while (r.previousSibling) {
        var n = r.previousSibling;
        if (_checkNode(n, t)) return n;
        r = n;
      }

      return null;
    };

    BX.checkNode = function (e, t) {
      return _checkNode(e, t);
    };

    BX.findFormElements = function (e) {
      if (BX.type.isString(e)) e = document.forms[e] || BX(e);
      var t = [];

      if (BX.type.isElementNode(e)) {
        if (e.tagName.toUpperCase() == "FORM") {
          t = e.elements;
        } else {
          t = BX.findChildren(e, CHECK_FORM_ELEMENTS, true);
        }
      }

      return t;
    };

    BX.isParentForNode = function (e, t) {
      if (BX.type.isDomNode(e) && BX.type.isDomNode(t)) {
        return e.contains(t);
      }

      return false;
    };

    BX.getCaretPosition = function (e) {
      var t = 0;

      if (e.selectionStart || e.selectionStart == 0) {
        t = e.selectionStart;
      } else if (document.selection) {
        e.focus();
        var r = document.selection.createRange();
        r.moveStart("character", -e.value.length);
        t = r.text.length;
      }

      return t;
    };

    BX.setCaretPosition = function (e, t) {
      if (!BX.isNodeInDom(e) || BX.isNodeHidden(e) || e.disabled) {
        return;
      }

      if (e.setSelectionRange) {
        e.focus();
        e.setSelectionRange(t, t);
      } else if (e.createTextRange) {
        var r = e.createTextRange();
        r.collapse(true);
        r.moveEnd("character", t);
        r.moveStart("character", t);
        r.select();
      }
    };

    BX.merge = function () {
      var e = Array.prototype.slice.call(arguments);
      if (e.length < 2) return {};
      var t = e.shift();

      for (var r = 0; r < e.length; r++) {
        for (var n in e[r]) {
          if (typeof e[r] == "undefined" || e[r] == null) continue;

          if (e[r].hasOwnProperty(n)) {
            if (typeof e[r][n] == "undefined" || e[r][n] == null) continue;

            if (_typeof(e[r][n]) == "object" && !BX.type.isDomNode(e[r][n]) && typeof e[r][n]["isUIWidget"] == "undefined") {
              var i = "length" in e[r][n];
              if (_typeof(t[n]) != "object") t[n] = i ? [] : {};
              if (i) BX.util.array_merge(t[n], e[r][n]);else BX.merge(t[n], e[r][n]);
            } else t[n] = e[r][n];
          }
        }
      }

      return t;
    };

    BX.mergeEx = function () {
      var e = Array.prototype.slice.call(arguments);

      if (e.length < 2) {
        return {};
      }

      var t = e.shift();

      for (var r = 0; r < e.length; r++) {
        for (var n in e[r]) {
          if (typeof e[r] == "undefined" || e[r] == null || !e[r].hasOwnProperty(n)) {
            continue;
          }

          if (BX.type.isPlainObject(e[r][n]) && BX.type.isPlainObject(t[n])) {
            BX.mergeEx(t[n], e[r][n]);
          } else {
            t[n] = BX.type.isPlainObject(e[r][n]) ? BX.clone(e[r][n]) : e[r][n];
          }
        }
      }

      return t;
    };

    BX.getEventButton = function (e) {
      e = e || window.event;
      var t = 0;

      if (typeof e.which != "undefined") {
        switch (e.which) {
          case 1:
            t = t | BX.MSLEFT;
            break;

          case 2:
            t = t | BX.MSMIDDLE;
            break;

          case 3:
            t = t | BX.MSRIGHT;
            break;
        }
      } else if (typeof e.button != "undefined") {
        t = event.button;
      }

      return t || BX.MSLEFT;
    };

    var captured_events = null,
        _bind = null;

    BX.CaptureEvents = function (e, t) {
      if (_bind) return;
      _bind = BX.bind;
      captured_events = [];

      BX.bind = function (r, n, i) {
        if (r === e && n === t) captured_events.push(i);

        _bind.apply(this, arguments);
      };
    };

    BX.CaptureEventsGet = function () {
      if (_bind) {
        BX.bind = _bind;
        var e = captured_events;
        _bind = null;
        captured_events = null;
        return e;
      }

      return null;
    };

    BX.fireEvent = function (e, t) {
      var r = false,
          n = null;

      if (BX.type.isDomNode(e)) {
        r = true;

        if (document.createEventObject) {
          if (eventTypes[t] != "MouseEvent") {
            n = document.createEventObject();
            n.type = t;
            r = e.fireEvent("on" + t, n);
          }

          if (e[t]) {
            e[t]();
          }
        } else {
          n = null;

          switch (eventTypes[t]) {
            case "MouseEvent":
              n = document.createEvent("MouseEvent");

              try {
                n.initMouseEvent(t, true, true, top, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, null);
              } catch (e) {
                n.initMouseEvent(t, true, true, window, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, null);
              }

              break;

            default:
              n = document.createEvent("Event");
              n.initEvent(t, true, true);
          }

          r = e.dispatchEvent(n);
        }
      }

      return r;
    };

    BX.getWheelData = function (e) {
      e = e || window.event;
      e.wheelData = e.detail ? e.detail * -1 : e.wheelDelta / 40;
      return e.wheelData;
    };

    BX.proxy_context = null;

    BX.delegate = function (e, t) {
      if (!e || !t) return e;
      return function () {
        var r = BX.proxy_context;
        BX.proxy_context = this;
        var n = e.apply(t, arguments);
        BX.proxy_context = r;
        return n;
      };
    };

    BX.delegateLater = function (e, t, r) {
      return function () {
        if (t[e]) {
          var n = BX.proxy_context;
          BX.proxy_context = this;
          var i = t[e].apply(r || t, arguments);
          BX.proxy_context = n;
          return i;
        }

        return null;
      };
    };

    BX.proxy = function (e, t) {
      return getObjectDelegate(e, t, proxyList);
    };

    BX.defer = function (e, t) {
      if (!!t) return BX.defer_proxy(e, t);else return function () {
        var t = arguments;
        setTimeout(function () {
          e.apply(this, t);
        }, 10);
      };
    };

    BX.defer_proxy = function (e, t) {
      return getObjectDelegate(e, t, deferList, BX.defer);
    };

    function getObjectDelegate(e, t, r, n) {
      if (!BX.type.isFunction(e) || !BX.type.isMapKey(t)) {
        return e;
      }

      var i = r.get(t);

      if (!i) {
        i = new WeakMap();
        r.set(t, i);
      }

      var a = i.get(e);

      if (!a) {
        a = n ? n(BX.delegate(e, t)) : BX.delegate(e, t);
        i.set(e, a);
      }

      return a;
    }

    BX.once = function (e, t, r) {
      var n = function n() {
        BX.unbind(e, t, n);
        r.apply(this, arguments);
      };

      return n;
    };

    BX.bindDelegate = function (e, t, r, n) {
      var i = BX.delegateEvent(r, n);
      BX.bind(e, t, i);
      return i;
    };

    BX.delegateEvent = function (e, t) {
      return function (r) {
        r = r || window.event;
        var n = r.target || r.srcElement;

        while (n != this) {
          if (_checkNode(n, e)) {
            return t.call(n, r);
          }

          if (n && n.parentNode) n = n.parentNode;else break;
        }

        return null;
      };
    };

    BX.False = function () {
      return false;
    };

    BX.DoNothing = function () {};

    BX.denyEvent = function (e, t) {
      deniedEvents.push([e, t, e["on" + t]]);
      e["on" + t] = BX.DoNothing;
    };

    BX.allowEvent = function (e, t) {
      for (var r = 0, n = deniedEvents.length; r < n; r++) {
        if (deniedEvents[r][0] == e && deniedEvents[r][1] == t) {
          e["on" + t] = deniedEvents[r][2];
          BX.util.deleteFromArray(deniedEvents, r);
          return;
        }
      }
    };

    BX.fixEventPageXY = function (e) {
      BX.fixEventPageX(e);
      BX.fixEventPageY(e);
      return e;
    };

    BX.fixEventPageX = function (e) {
      if (e.pageX == null && e.clientX != null) {
        e.pageX = e.clientX + (document.documentElement && document.documentElement.scrollLeft || document.body && document.body.scrollLeft || 0) - (document.documentElement.clientLeft || 0);
      }

      return e;
    };

    BX.fixEventPageY = function (e) {
      if (e.pageY == null && e.clientY != null) {
        e.pageY = e.clientY + (document.documentElement && document.documentElement.scrollTop || document.body && document.body.scrollTop || 0) - (document.documentElement.clientTop || 0);
      }

      return e;
    };

    BX.PreventDefault = function (e) {
      if (!e) e = window.event;

      if (e.stopPropagation) {
        e.preventDefault();
        e.stopPropagation();
      } else {
        e.cancelBubble = true;
        e.returnValue = false;
      }

      return false;
    };

    BX.eventReturnFalse = function (e) {
      e = e || window.event;
      if (e && e.preventDefault) e.preventDefault();else e.returnValue = false;
      return false;
    };

    BX.eventCancelBubble = function (e) {
      e = e || window.event;
      if (e && e.stopPropagation) e.stopPropagation();else e.cancelBubble = true;
    };

    BX.addCustomEvent = function (e, t, r) {
      if (BX.type.isString(e)) {
        r = t;
        t = e;
        e = window;
      }

      if (!BX.type.isFunction(r) || !BX.type.isNotEmptyString(t) || !BX.type.isMapKey(e)) {
        return;
      }

      t = t.toLowerCase();
      var n = customEvents.get(e) || {};
      n[t] = BX.type.isArray(n[t]) ? n[t] : [];
      r["__bxSort"] = ++customEventsCnt;
      n[t].push(r);
      customEvents.set(e, n);
    };

    BX.removeCustomEvent = function (e, t, r) {
      if (BX.type.isString(e)) {
        r = t;
        t = e;
        e = window;
      }

      t = t.toLowerCase();
      var n = customEvents.get(e);

      if (n && BX.type.isArray(n[t])) {
        for (var i = n[t].length - 1; i >= 0; i--) {
          if (n[t][i] === r) {
            n[t].splice(i, 1);
          }
        }
      }
    };

    BX.removeAllCustomEvents = function (e, t) {
      if (BX.type.isString(e)) {
        t = e;
        e = window;
      }

      t = t.toLowerCase();
      var r = customEvents.get(e);

      if (r) {
        delete r[t];
      }
    };

    BX.onCustomEvent = function (e, t, r, n) {
      if (BX.type.isString(e)) {
        n = r;
        r = t;
        t = e;
        e = window;
      }

      if (!r) {
        r = [];
      }

      t = t.toLowerCase();
      var i = customEvents.get(window);
      var a = i && BX.type.isArray(i[t]) ? i[t] : [];
      var o = [];

      if (e !== window && BX.type.isMapKey(e)) {
        var s = customEvents.get(e);

        if (s && BX.type.isArray(s[t])) {
          o = s[t];
        }
      }

      var u = a.concat(o);
      u.sort(function (e, t) {
        return e["__bxSort"] - t["__bxSort"];
      });
      u.forEach(function (t) {
        if (a.indexOf(t) !== -1 || o.indexOf(t) !== -1) {
          t.apply(e, n === true ? BX.clone(r) : r);
        }
      });
    };

    BX.bindDebouncedChange = function (e, t, r, n, i) {
      i = i || window;
      n = n || 300;
      var a = "bx-dc-previous-value";
      BX.data(e, a, e.value);

      var o = function o(t, r) {
        var n = BX.data(e, a);

        if (typeof n == "undefined" || n != r) {
          if (_typeof(i) != "object") t(r);else t.apply(i, [r]);
        }
      };

      var s = BX.debounce(function () {
        var r = e.value;
        o(t, r);
        BX.data(e, a, r);
      }, n);
      BX.bind(e, "keyup", s);
      BX.bind(e, "change", s);
      BX.bind(e, "input", s);

      if (BX.type.isFunction(r)) {
        var u = function u() {
          o(r, e.value);
        };

        BX.bind(e, "keyup", u);
        BX.bind(e, "change", u);
        BX.bind(e, "input", u);
      }
    };

    BX.parseJSON = function (data, context) {
      var result = null;

      if (BX.type.isNotEmptyString(data)) {
        try {
          if (data.indexOf("\n") >= 0) eval("result = " + data);else result = new Function("return " + data)();
        } catch (e) {
          BX.onCustomEvent(context, "onParseJSONFailure", [data, context]);
        }
      } else if (BX.type.isPlainObject(data)) {
        return data;
      }

      return result;
    };

    BX.submit = function (e, t, r, n) {
      t = t || "save";

      if (!e["BXFormSubmit_" + t]) {
        e["BXFormSubmit_" + t] = e.appendChild(BX.create("INPUT", {
          props: {
            type: "submit",
            name: t,
            value: r || "Y"
          },
          style: {
            display: "none"
          }
        }));
      }

      if (e.sessid) e.sessid.value = BX.bitrix_sessid();
      setTimeout(BX.delegate(function () {
        BX.fireEvent(this, "click");
        if (n) n();
      }, e["BXFormSubmit_" + t]), 10);
    };

    BX.show = function (e, t) {
      if (e.BXDISPLAY || !_checkDisplay(e, t)) {
        e.style.display = e.BXDISPLAY;
      }
    };

    BX.hide = function (e, t) {
      if (!e.BXDISPLAY) _checkDisplay(e, t);
      e.style.display = "none";
    };

    BX.toggle = function (e, t) {
      if (!t && BX.type.isElementNode(e)) {
        var r = true;
        if (e.BXDISPLAY) r = !_checkDisplay(e);else r = e.style.display == "none";
        if (r) BX.show(e);else BX.hide(e);
      } else if (BX.type.isArray(t)) {
        for (var n = 0, i = t.length; n < i; n++) {
          if (e == t[n]) {
            e = t[n == i - 1 ? 0 : n + 1];
            break;
          }
        }

        if (n == i) e = t[0];
      }

      return e;
    };

    function _checkDisplay(e, t) {
      if (typeof t != "undefined") e.BXDISPLAY = t;
      var r = e.style.display || BX.style(e, "display");

      if (r != "none") {
        e.BXDISPLAY = e.BXDISPLAY || r;
        return true;
      } else {
        e.BXDISPLAY = e.BXDISPLAY || "block";
        return false;
      }
    }

    BX.util = {
      array_values: function array_values(e) {
        if (!BX.type.isArray(e)) return BX.util._array_values_ob(e);
        var t = [];

        for (var r = 0, n = e.length; r < n; r++) {
          if (e[r] !== null && typeof e[r] != "undefined") t.push(e[r]);
        }

        return t;
      },
      _array_values_ob: function _array_values_ob(e) {
        var t = [];

        for (var r in e) {
          if (e[r] !== null && typeof e[r] != "undefined") t.push(e[r]);
        }

        return t;
      },
      array_keys: function array_keys(e) {
        if (!BX.type.isArray(e)) return BX.util._array_keys_ob(e);
        var t = [];

        for (var r = 0, n = e.length; r < n; r++) {
          if (e[r] !== null && typeof e[r] != "undefined") t.push(r);
        }

        return t;
      },
      _array_keys_ob: function _array_keys_ob(e) {
        var t = [];

        for (var r in e) {
          if (e[r] !== null && typeof e[r] != "undefined") t.push(r);
        }

        return t;
      },
      object_keys: function object_keys(e) {
        var t = [];

        for (var r in e) {
          if (e.hasOwnProperty(r)) {
            t.push(r);
          }
        }

        return t;
      },
      array_merge: function array_merge(e, t) {
        if (!BX.type.isArray(e)) e = [];
        if (!BX.type.isArray(t)) t = [];
        var r = e.length,
            n = 0;

        if (typeof t.length === "number") {
          for (var i = t.length; n < i; n++) {
            e[r++] = t[n];
          }
        } else {
          while (t[n] !== undefined) {
            e[r++] = t[n++];
          }
        }

        e.length = r;
        return e;
      },
      array_flip: function array_flip(e) {
        var t = {};

        for (var r in e) {
          t[e[r]] = r;
        }

        return t;
      },
      array_diff: function array_diff(e, t, r) {
        r = BX.type.isFunction(r) ? r : null;
        var n,
            i,
            a,
            o,
            s = {},
            u = [];

        for (n = 0, i = t.length; n < i; n++) {
          a = t[n];
          o = r ? r(a) : a;
          s[o] = true;
        }

        for (n = 0, i = e.length; n < i; n++) {
          a = e[n];
          o = r ? r(a) : a;

          if (typeof s[o] === "undefined") {
            u.push(a);
          }
        }

        return u;
      },
      array_unique: function array_unique(e) {
        var t = 0,
            r,
            n = e.length;
        if (n < 2) return e;

        for (; t < n - 1; t++) {
          for (r = t + 1; r < n; r++) {
            if (e[t] == e[r]) {
              e.splice(r--, 1);
              n--;
            }
          }
        }

        return e;
      },
      in_array: function in_array(e, t) {
        for (var r = 0; r < t.length; r++) {
          if (t[r] == e) return true;
        }

        return false;
      },
      array_search: function array_search(e, t) {
        for (var r = 0; r < t.length; r++) {
          if (t[r] == e) return r;
        }

        return -1;
      },
      object_search_key: function object_search_key(e, t) {
        if (typeof t[e] != "undefined") return t[e];

        for (var r in t) {
          if (_typeof(t[r]) == "object") {
            var n = BX.util.object_search_key(e, t[r]);
            if (n !== false) return n;
          }
        }

        return false;
      },
      trim: function trim(e) {
        if (BX.type.isString(e)) {
          return e.trim();
        }

        return e;
      },
      urlencode: function urlencode(e) {
        return encodeURIComponent(e);
      },
      deleteFromArray: function deleteFromArray(e, t) {
        return e.slice(0, t).concat(e.slice(t + 1));
      },
      insertIntoArray: function insertIntoArray(e, t, r) {
        return e.slice(0, t).concat([r]).concat(e.slice(t));
      },
      htmlspecialchars: function htmlspecialchars(e) {
        return BX.Text.encode(e);
      },
      htmlspecialcharsback: function htmlspecialcharsback(e) {
        return BX.Text.decode(e);
      },
      preg_quote: function preg_quote(e, t) {
        if (!e.replace) return e;
        return e.replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\" + (t || "") + "-]", "g"), "\\$&");
      },
      jsencode: function jsencode(e) {
        if (!e || !e.replace) return e;
        var t = [{
          c: "\\\\",
          r: "\\\\"
        }, {
          c: "\\t",
          r: "\\t"
        }, {
          c: "\\n",
          r: "\\n"
        }, {
          c: "\\r",
          r: "\\r"
        }, {
          c: '"',
          r: '\\"'
        }, {
          c: "'",
          r: "\\'"
        }, {
          c: "<",
          r: "\\x3C"
        }, {
          c: ">",
          r: "\\x3E"
        }, {
          c: "\\u2028",
          r: "\\u2028"
        }, {
          c: "\\u2029",
          r: "\\u2029"
        }];

        for (var r = 0; r < t.length; r++) {
          e = e.replace(new RegExp(t[r].c, "g"), t[r].r);
        }

        return e;
      },
      getCssName: function getCssName(e) {
        if (!BX.type.isNotEmptyString(e)) {
          return "";
        }

        return e.replace(/[A-Z]/g, function (e) {
          return "-" + e.toLowerCase();
        });
      },
      getJsName: function getJsName(e) {
        var t = /\-([a-z]){1}/g;

        if (t.test(e)) {
          return e.replace(t, function (e, t) {
            return t.toUpperCase();
          });
        }

        return e;
      },
      nl2br: function nl2br(e) {
        if (!e || !e.replace) return e;
        return e.replace(/([^>])\n/g, "$1<br/>");
      },
      str_pad: function str_pad(e, t, r, n) {
        r = r || " ";
        n = n || "right";
        e = e.toString();

        if (n === "left") {
          return BX.util.str_pad_left(e, t, r);
        }

        return BX.util.str_pad_right(e, t, r);
      },
      str_pad_left: function str_pad_left(e, t, r) {
        return e.toString().padStart(t, r);
      },
      str_pad_right: function str_pad_right(e, t, r) {
        return e.toString().padEnd(t, r);
      },
      strip_tags: function strip_tags(e) {
        return e.split(/<[^>]+>/g).join("");
      },
      strip_php_tags: function strip_php_tags(e) {
        return e.replace(/<\?(.|[\r\n])*?\?>/g, "");
      },
      popup: function popup(e, t, r) {
        var n, i;

        if (BX.browser.IsOpera()) {
          n = document.body.offsetWidth;
          i = document.body.offsetHeight;
        } else {
          n = screen.width;
          i = screen.height;
        }

        return window.open(e, "", "status=no,scrollbars=yes,resizable=yes,width=" + t + ",height=" + r + ",top=" + Math.floor((i - r) / 2 - 14) + ",left=" + Math.floor((n - t) / 2 - 5));
      },
      shuffle: function shuffle(e) {
        var t, r;
        var n = e.length;

        while (0 !== n) {
          r = Math.floor(Math.random() * n);
          n -= 1;
          t = e[n];
          e[n] = e[r];
          e[r] = t;
        }

        return e;
      },
      objectSort: function objectSort(e, t, r) {
        r = r == "asc" ? "asc" : "desc";
        var n = [],
            i;

        for (i in e) {
          if (e.hasOwnProperty(i) && e[i][t]) {
            n.push([i, e[i][t]]);
          }
        }

        if (r == "asc") {
          n.sort(function (e, t) {
            var r, n;

            if (BX.type.isDate(e[1])) {
              r = e[1].getTime();
            } else if (!isNaN(e[1])) {
              r = parseInt(e[1]);
            } else {
              r = e[1].toString().toLowerCase();
            }

            if (BX.type.isDate(t[1])) {
              n = t[1].getTime();
            } else if (!isNaN(t[1])) {
              n = parseInt(t[1]);
            } else {
              n = t[1].toString().toLowerCase();
            }

            if (r > n) return 1;else if (r < n) return -1;else return 0;
          });
        } else {
          n.sort(function (e, t) {
            var r, n;

            if (BX.type.isDate(e[1])) {
              r = e[1].getTime();
            } else if (!isNaN(e[1])) {
              r = parseInt(e[1]);
            } else {
              r = e[1].toString().toLowerCase();
            }

            if (BX.type.isDate(t[1])) {
              n = t[1].getTime();
            } else if (!isNaN(t[1])) {
              n = parseInt(t[1]);
            } else {
              n = t[1].toString().toLowerCase();
            }

            if (r < n) return 1;else if (r > n) return -1;else return 0;
          });
        }

        var a = Array();

        for (i = 0; i < n.length; i++) {
          a.push(e[n[i][0]]);
        }

        return a;
      },
      objectMerge: function objectMerge() {
        return BX.mergeEx.apply(window, arguments);
      },
      objectClone: function objectClone(e) {
        return BX.clone(e, true);
      },
      hex2rgb: function hex2rgb(e) {
        var t = e.replace(/[# ]/g, "").replace(/^(.)(.)(.)$/, "$1$1$2$2$3$3").match(/.{2}/g);

        for (var r = 0; r < 3; r++) {
          t[r] = parseInt(t[r], 16);
        }

        return {
          r: t[0],
          g: t[1],
          b: t[2]
        };
      },
      remove_url_param: function remove_url_param(e, t) {
        return BX.Uri.removeParam(e, t);
      },
      add_url_param: function add_url_param(e, t) {
        var r = Object.entries(t).reduce(function (e, t) {
          e[t[0]] = BX.type.isArray(t[1]) ? t[1].join() : t[1];
          return e;
        }, {});
        return BX.Uri.addParam(e, r);
      },
      buildQueryString: function buildQueryString(e) {
        var t = "";

        for (var r in e) {
          var n = e[r];

          if (BX.type.isArray(n)) {
            n.forEach(function (e, n) {
              t += encodeURIComponent(r + "[" + n + "]") + "=" + encodeURIComponent(e) + "&";
            });
          } else {
            t += encodeURIComponent(r) + "=" + encodeURIComponent(n) + "&";
          }
        }

        if (t.length > 0) {
          t = t.substr(0, t.length - 1);
        }

        return t;
      },
      even: function even(e) {
        return parseInt(e) % 2 == 0;
      },
      hashCode: function hashCode(e) {
        if (!BX.type.isNotEmptyString(e)) {
          return 0;
        }

        var t = 0;

        for (var r = 0; r < e.length; r++) {
          var n = e.charCodeAt(r);
          t = (t << 5) - t + n;
          t = t & t;
        }

        return t;
      },
      getRandomString: function getRandomString(e) {
        return BX.Text.getRandom(e);
      },
      number_format: function number_format(e, t, r, n) {
        var i,
            a,
            o,
            s,
            u,
            l = "";
        t = Math.abs(t);

        if (isNaN(t) || t < 0) {
          t = 2;
        }

        r = r || ",";
        if (typeof n === "undefined") n = ".";
        e = (+e || 0).toFixed(t);

        if (e < 0) {
          l = "-";
          e = -e;
        }

        i = parseInt(e, 10) + "";
        a = i.length > 3 ? i.length % 3 : 0;
        u = a ? i.substr(0, a) + n : "";
        o = i.substr(a).replace(/(\d{3})(?=\d)/g, "$1" + n);
        s = t ? r + Math.abs(e - i).toFixed(t).replace(/-/, "0").slice(2) : "";
        return l + u + o + s;
      },
      getExtension: function getExtension(e) {
        e = e || "";
        var t = e.split("?")[0].split(".");
        return t[t.length - 1].toLowerCase();
      },
      addObjectToForm: function addObjectToForm(e, t, r) {
        if (!BX.type.isString(r)) {
          r = "";
        }

        for (var n in e) {
          if (!e.hasOwnProperty(n)) {
            continue;
          }

          var i = e[n];
          var a = r !== "" ? r + "[" + n + "]" : n;

          if (BX.type.isArray(i)) {
            var o = {};

            for (var s = 0; s < i.length; s++) {
              o[s] = i[s];
            }

            BX.util.addObjectToForm(o, t, a);
          } else if (BX.type.isPlainObject(i)) {
            BX.util.addObjectToForm(i, t, a);
          } else {
            i = BX.type.isFunction(i.toString) ? i.toString() : "";

            if (i !== "") {
              t.appendChild(BX.create("INPUT", {
                attrs: {
                  type: "hidden",
                  name: a,
                  value: i
                }
              }));
            }
          }
        }
      },
      observe: function observe(e, t) {
        console.error("BX.util.observe: function is no longer supported by browser.");
        return false;
      },
      escapeRegExp: function escapeRegExp(e) {
        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
      }
    };
    BX.validation = {
      checkIfEmail: function checkIfEmail(e) {
        var t = "[=a-z0-9_+~'!$&*^`|#%/?{}-]";
        return new RegExp("^\\s*" + t + "+(\\." + t + "+)*@([a-z0-9-]+\\.)+[a-z0-9-]{2,20}\\s*$", "i").test(e);
      },
      checkIfPhone: function checkIfPhone(e) {
        var t = new RegExp(typeof BX.PhoneNumber === "undefined" ? BX.PhoneNumber.getValidNumberPattern() : "^\\s*\\+?s*[0-9(-)\\s]+\\s*$", "i");
        return t.test(e);
      }
    };
    BX.prop = {
      get: function get(e, t, r) {
        return e && e.hasOwnProperty(t) ? e[t] : r;
      },
      getObject: function getObject(e, t, r) {
        return e && BX.type.isPlainObject(e[t]) ? e[t] : r;
      },
      getElementNode: function getElementNode(e, t, r) {
        return e && BX.type.isElementNode(e[t]) ? e[t] : r;
      },
      getArray: function getArray(e, t, r) {
        return e && BX.type.isArray(e[t]) ? e[t] : r;
      },
      getFunction: function getFunction(e, t, r) {
        return e && BX.type.isFunction(e[t]) ? e[t] : r;
      },
      getNumber: function getNumber(e, t, r) {
        if (!(e && e.hasOwnProperty(t))) {
          return r;
        }

        var n = e[t];

        if (BX.type.isNumber(n)) {
          return n;
        }

        n = parseFloat(n);
        return !isNaN(n) ? n : r;
      },
      getInteger: function getInteger(e, t, r) {
        if (!(e && e.hasOwnProperty(t))) {
          return r;
        }

        var n = e[t];

        if (BX.type.isNumber(n)) {
          return n;
        }

        n = parseInt(n);
        return !isNaN(n) ? n : r;
      },
      getBoolean: function getBoolean(e, t, r) {
        if (!(e && e.hasOwnProperty(t))) {
          return r;
        }

        var n = e[t];
        return BX.type.isBoolean(n) ? n : BX.type.isString(n) ? n.toLowerCase() === "true" : !!n;
      },
      getString: function getString(e, t, r) {
        if (!(e && e.hasOwnProperty(t))) {
          return r;
        }

        var n = e[t];
        return BX.type.isString(n) ? n : n ? n.toString() : "";
      },
      extractDate: function extractDate(e) {
        if (!BX.type.isDate(e)) {
          e = new Date();
        }

        e.setHours(0);
        e.setMinutes(0);
        e.setSeconds(0);
        e.setMilliseconds(0);
        return e;
      }
    };

    BX.isNodeInDom = function (e, t) {
      return e === (t || document) ? true : e.parentNode ? BX.isNodeInDom(e.parentNode) : false;
    };

    BX.isNodeHidden = function (e) {
      if (e === document) return false;else if (BX.style(e, "display") == "none") return true;else return e.parentNode ? BX.isNodeHidden(e.parentNode) : true;
    };

    BX.evalPack = function (e) {
      while (e.length > 0) {
        var t = e.shift();

        if (t.TYPE == "SCRIPT_EXT" || t.TYPE == "SCRIPT_SRC") {
          BX.loadScript(t.DATA, function () {
            BX.evalPack(e);
          });
          return;
        } else if (t.TYPE == "SCRIPT") {
          BX.evalGlobal(t.DATA);
        }
      }
    };

    BX.evalGlobal = function (e) {
      if (e) {
        var t = document.getElementsByTagName("head")[0] || document.documentElement,
            r = document.createElement("script");
        r.type = "text/javascript";

        if (!BX.browser.IsIE()) {
          r.appendChild(document.createTextNode(e));
        } else {
          r.text = e;
        }

        t.insertBefore(r, t.firstChild);
        t.removeChild(r);
      }
    };

    BX.garbage = function (e, t) {
      garbageCollectors.push({
        callback: e,
        context: t
      });
    };

    BX.GetDocElement = function (e) {
      e = e || document;
      return BX.browser.IsDoctype(e) ? e.documentElement : e.body;
    };

    BX.scrollTop = function (e, t) {
      if (typeof t != "undefined") {
        if (e == window) {
          throw new Error("scrollTop() for window is not implemented");
        } else e.scrollTop = parseInt(t);
      } else {
        if (e == window) return BX.GetWindowScrollPos().scrollTop;
        return e.scrollTop;
      }
    };

    BX.scrollLeft = function (e, t) {
      if (typeof t != "undefined") {
        if (e == window) {
          throw new Error("scrollLeft() for window is not implemented");
        } else e.scrollLeft = parseInt(t);
      } else {
        if (e == window) return BX.GetWindowScrollPos().scrollLeft;
        return e.scrollLeft;
      }
    };

    BX.hide_object = function (e) {
      e = BX(e);
      e.style.position = "absolute";
      e.style.top = "-1000px";
      e.style.left = "-1000px";
      e.style.height = "10px";
      e.style.width = "10px";
    };

    BX.is_relative = function (e) {
      var t = BX.style(e, "position");
      return t == "relative" || t == "absolute";
    };

    BX.is_float = function (e) {
      var t = BX.style(e, "float");
      return t == "right" || t == "left";
    };

    BX.is_fixed = function (e) {
      var t = BX.style(e, "position");
      return t == "fixed";
    };

    BX.width = function (e, t) {
      if (typeof t != "undefined") BX.style(e, "width", parseInt(t) + "px");else {
        if (e == window) return window.innerWidth;
        return BX.pos(e).width;
      }
    };

    BX.height = function (e, t) {
      if (typeof t != "undefined") BX.style(e, "height", parseInt(t) + "px");else {
        if (e == window) return window.innerHeight;
        return BX.pos(e).height;
      }
    };

    BX.align = function (e, t, r, n) {
      if (n) n = n.toLowerCase();else n = "";
      var i = document;

      if (BX.type.isElementNode(e)) {
        i = e.ownerDocument;
        e = BX.pos(e);
      }

      var a = e["left"],
          o = e["bottom"];
      var s = BX.GetWindowScrollPos(i);
      var u = BX.GetWindowInnerSize(i);

      if (u.innerWidth + s.scrollLeft - (e["left"] + t) < 0) {
        if (e["right"] - t >= 0) a = e["right"] - t;else a = s.scrollLeft;
      }

      if (u.innerHeight + s.scrollTop - (e["bottom"] + r) < 0 || ~n.indexOf("top")) {
        if (e["top"] - r >= 0 || ~n.indexOf("top")) o = e["top"] - r;else o = s.scrollTop;
      }

      return {
        left: a,
        top: o
      };
    };

    BX.scrollToNode = function (e) {
      var t = BX(e);
      if (t.scrollIntoView) t.scrollIntoView(true);else {
        var r = BX.pos(t);
        window.scrollTo(r.left, r.top);
      }
    };

    BX.showWait = function (e, t) {
      e = BX(e) || document.body || document.documentElement;
      t = t || BX.message("JS_CORE_LOADING");
      var r = e.id || Math.random();
      var n = e.bxmsg = document.body.appendChild(BX.create("DIV", {
        props: {
          id: "wait_" + r
        },
        style: {
          background: 'url("/bitrix/js/main/core/images/wait.gif") no-repeat scroll 10px center #fcf7d1',
          border: "1px solid #E1B52D",
          color: "black",
          fontFamily: "Verdana,Arial,sans-serif",
          fontSize: "11px",
          padding: "10px 30px 10px 37px",
          position: "absolute",
          zIndex: "10000",
          textAlign: "center"
        },
        text: t
      }));
      setTimeout(BX.delegate(_adjustWait, e), 10);
      lastWait[lastWait.length] = n;
      return n;
    };

    BX.closeWait = function (e, t) {
      if (e && !t) t = e.bxmsg;
      if (e && !t && BX.hasClass(e, "bx-core-waitwindow")) t = e;
      if (e && !t) t = BX("wait_" + e.id);
      if (!t) t = lastWait.pop();

      if (t && t.parentNode) {
        for (var r = 0, n = lastWait.length; r < n; r++) {
          if (t == lastWait[r]) {
            lastWait = BX.util.deleteFromArray(lastWait, r);
            break;
          }
        }

        t.parentNode.removeChild(t);
        if (e) e.bxmsg = null;
        BX.cleanNode(t, true);
      }
    };

    BX.setJSList = function (e) {
      if (BX.type.isArray(e)) {
        e = e.map(function (e) {
          return normalizeUrl(e);
        });
        jsList = jsList.concat(e);
      }
    };

    BX.getJSList = function () {
      initJsList();
      return jsList;
    };

    BX.setCSSList = function (e) {
      if (BX.type.isArray(e)) {
        e = e.map(function (e) {
          return normalizeUrl(e);
        });
        cssList = cssList.concat(e);
      }
    };

    BX.getCSSList = function () {
      initCssList();
      return cssList;
    };

    BX.getJSPath = function (e) {
      return e.replace(/^(http[s]*:)*\/\/[^\/]+/i, "");
    };

    BX.getCSSPath = function (e) {
      return e.replace(/^(http[s]*:)*\/\/[^\/]+/i, "");
    };

    BX.getCDNPath = function (e) {
      return e;
    };

    BX.loadScript = function (e, t, r) {
      if (BX.type.isString(e)) {
        e = [e];
      }

      return BX.load(e, t, r);
    };

    BX.loadCSS = function (e, t, r) {
      if (BX.type.isString(e)) {
        e = [e];
      }

      if (BX.type.isArray(e)) {
        e = e.map(function (e) {
          return {
            url: e,
            ext: "css"
          };
        });
        BX.load(e, null, t);
      }
    };

    BX.load = function (e, t, r) {
      if (!BX.isReady) {
        var n = arguments;
        BX.ready(function () {
          BX.load.apply(this, n);
        });
        return null;
      }

      r = r || document;

      if (isAsync === null) {
        isAsync = "async" in r.createElement("script") || "MozAppearance" in r.documentElement.style || window.opera;
      }

      return isAsync ? loadAsync(e, t, r) : loadAsyncEmulation(e, t, r);
    };

    BX.convert = {
      toNumber: function toNumber(e) {
        if (BX.type.isNumber(e)) {
          return e;
        }

        e = Number(e);
        return !isNaN(e) ? e : 0;
      },
      nodeListToArray: function nodeListToArray(e) {
        try {
          return Array.prototype.slice.call(e, 0);
        } catch (i) {
          var t = [];

          for (var r = 0, n = e.length; r < n; r++) {
            t.push(e[r]);
          }

          return t;
        }
      }
    };

    function loadAsync(e, t, r) {
      if (!BX.type.isArray(e)) {
        return;
      }

      function n(e) {
        e = e || assets;

        for (var t in e) {
          if (e.hasOwnProperty(t) && e[t].state !== LOADED) {
            return false;
          }
        }

        return true;
      }

      if (!BX.type.isFunction(t)) {
        t = null;
      }

      var i = {},
          a,
          o;

      for (o = 0; o < e.length; o++) {
        a = e[o];
        a = getAsset(a);
        i[a.name] = a;
      }

      var s = false;

      if (e.length > 0) {
        for (o = 0; o < e.length; o++) {
          a = e[o];
          a = getAsset(a);
          load(a, function () {
            if (n(i)) {
              if (!s) {
                t && t();
                s = true;
              }
            }
          }, r);
        }
      } else {
        if (typeof t === "function") {
          t();
          s = true;
        }
      }
    }

    function loadAsyncEmulation(e, t, r) {
      function n(e) {
        e.state = PRELOADED;

        if (BX.type.isArray(e.onpreload) && e.onpreload) {
          for (var t = 0; t < e.onpreload.length; t++) {
            e.onpreload[t].call();
          }
        }
      }

      function i(e) {
        if (e.state === undefined) {
          e.state = PRELOADING;
          e.onpreload = [];
          loadAsset({
            url: e.url,
            type: "cache",
            ext: e.ext
          }, function () {
            n(e);
          }, r);
        }
      }

      if (!BX.type.isArray(e)) {
        return;
      }

      if (!BX.type.isFunction(t)) {
        t = null;
      }

      var a = [].slice.call(e, 1);

      for (var o = 0; o < a.length; o++) {
        i(getAsset(a[o]));
      }

      load(getAsset(e[0]), e.length === 1 ? t : function () {
        loadAsyncEmulation.apply(null, [a, t, r]);
      }, r);
    }

    function load(e, t, r) {
      t = t || BX.DoNothing;

      if (e.state === LOADED) {
        t();
        return;
      }

      if (e.state === PRELOADING) {
        e.onpreload.push(function () {
          load(e, t, r);
        });
        return;
      }

      e.state = LOADING;
      loadAsset(e, function () {
        e.state = LOADED;
        t();
      }, r);
    }

    function loadAsset(e, t, r) {
      t = t || BX.DoNothing;

      function n(e) {
        o.onload = o.onreadystatechange = o.onerror = null;
        t();
      }

      function i(n) {
        n = n || window.event;

        if (n.type === "load" || /loaded|complete/.test(o.readyState) && (!r.documentMode || r.documentMode < 9)) {
          window.clearTimeout(e.errorTimeout);
          window.clearTimeout(e.cssTimeout);
          o.onload = o.onreadystatechange = o.onerror = null;
          t();
        }
      }

      function a() {
        if (e.state !== LOADED && e.cssRetries <= 20) {
          for (var t = 0, n = r.styleSheets.length; t < n; t++) {
            if (r.styleSheets[t].href === o.href) {
              i({
                type: "load"
              });
              return;
            }
          }

          e.cssRetries++;
          e.cssTimeout = window.setTimeout(a, 250);
        }
      }

      var o;
      var s = BX.type.isNotEmptyString(e.ext) ? e.ext : BX.util.getExtension(e.url);

      if (s === "css") {
        o = r.createElement("link");
        o.type = "text/" + (e.type || "css");
        o.rel = "stylesheet";
        o.href = e.url;
        e.cssRetries = 0;
        e.cssTimeout = window.setTimeout(a, 500);
      } else {
        o = r.createElement("script");
        o.type = "text/" + (e.type || "javascript");
        o.src = e.url;
      }

      o.onload = o.onreadystatechange = i;
      o.onerror = n;
      o.async = false;
      o.defer = false;
      e.errorTimeout = window.setTimeout(function () {
        n({
          type: "timeout"
        });
      }, 7e3);

      if (s === "css") {
        cssList.push(normalizeMinUrl(normalizeUrl(e.url)));
      } else {
        jsList.push(normalizeMinUrl(normalizeUrl(e.url)));
      }

      var u = null;
      var l = r.head || r.getElementsByTagName("head")[0];

      if (s === "css" && (u = getTemplateLink(l)) !== null) {
        u.parentNode.insertBefore(o, u);
      } else {
        l.insertBefore(o, l.lastChild);
      }
    }

    function getAsset(e) {
      var t = {};

      if (_typeof(e) === "object") {
        t = e;
        t.name = t.name ? t.name : BX.util.hashCode(e.url);
      } else {
        t = {
          name: BX.util.hashCode(e),
          url: e
        };
      }

      var r = BX.type.isNotEmptyString(t.ext) ? t.ext : BX.util.getExtension(t.url);

      if (r === "css" && isCssLoaded(t.url) || isScriptLoaded(t.url)) {
        t.state = LOADED;
      }

      var n = assets[t.name];

      if (n && n.url === t.url) {
        return n;
      }

      assets[t.name] = t;
      return t;
    }

    function normalizeUrl(e) {
      if (!BX.type.isNotEmptyString(e)) {
        return "";
      }

      e = BX.getJSPath(e);
      e = e.replace(/\?[0-9]*$/, "");
      return e;
    }

    function normalizeMinUrl(e) {
      if (!BX.type.isNotEmptyString(e)) {
        return "";
      }

      var t = e.indexOf(".min");
      return t >= 0 ? e.substr(0, t) + e.substr(t + 4) : e;
    }

    function isCssLoaded(e) {
      initCssList();
      e = normalizeUrl(e);
      var t = normalizeMinUrl(e);
      return e !== t && BX.util.in_array(t, cssList) || BX.util.in_array(e, cssList);
    }

    function initCssList() {
      if (!cssInit) {
        var e = document.getElementsByTagName("link");

        if (!!e && e.length > 0) {
          for (var t = 0; t < e.length; t++) {
            var r = e[t].getAttribute("href");

            if (BX.type.isNotEmptyString(r)) {
              r = normalizeMinUrl(normalizeUrl(r));
              cssList.push(r);
            }
          }
        }

        cssInit = true;
      }
    }

    function getTemplateLink(e) {
      var t = function t(_t2) {
        var r = e.getElementsByTagName(_t2);

        for (var n = 0, i = r.length; n < i; n++) {
          var a = r[n].getAttribute("data-template-style");

          if (BX.type.isNotEmptyString(a) && a == "true") {
            return r[n];
          }
        }

        return null;
      };

      var r = t("link");

      if (r === null) {
        r = t("style");
      }

      return r;
    }

    function isScriptLoaded(e) {
      initJsList();
      e = normalizeUrl(e);
      var t = normalizeMinUrl(e);
      return e !== t && BX.util.in_array(t, jsList) || BX.util.in_array(e, jsList);
    }

    function initJsList() {
      if (!jsInit) {
        var e = document.getElementsByTagName("script");

        if (!!e && e.length > 0) {
          for (var t = 0; t < e.length; t++) {
            var r = e[t].getAttribute("src");

            if (BX.type.isNotEmptyString(r)) {
              r = normalizeMinUrl(normalizeUrl(r));
              jsList.push(r);
            }
          }
        }

        jsInit = true;
      }
    }

    BX.reload = function (e, t) {
      if (e === true) {
        t = true;
        e = null;
      }

      var r = e || top.location.href;
      var n = r.indexOf("#"),
          i = "";

      if (n != -1) {
        i = r.substr(n);
        r = r.substr(0, n);
      }

      if (t && r.indexOf("clear_cache=Y") < 0) r += (r.indexOf("?") == -1 ? "?" : "&") + "clear_cache=Y";

      if (i) {
        if (t && (i.substr(0, 5) == "view/" || i.substr(0, 6) == "#view/") && i.indexOf("clear_cache%3DY") < 0) i += (i.indexOf("%3F") == -1 ? "%3F" : "%26") + "clear_cache%3DY";
        r = r.replace(/(\?|\&)_r=[\d]*/, "");
        r += (r.indexOf("?") == -1 ? "?" : "&") + "_r=" + Math.round(Math.random() * 1e4) + i;
      }

      top.location.href = r;
    };

    BX.clearCache = function () {
      BX.showWait();
      BX.reload(true);
    };

    BX.template = function (e, t, r) {
      BX.ready(function () {
        _processTpl(BX(e), t, r);
      });
    };

    BX.isAmPmMode = function (e) {
      if (e === true) {
        return BX.message.AMPM_MODE;
      }

      return BX.message.AMPM_MODE !== false;
    };

    BX.formatDate = function (e, t) {
      e = e || new Date();
      var r = e.getHours() || e.getMinutes() || e.getSeconds(),
          n = !!t ? t : r ? BX.message("FORMAT_DATETIME") : BX.message("FORMAT_DATE");
      return n.replace(/YYYY/gi, e.getFullYear()).replace(/MMMM/gi, BX.util.str_pad_left((e.getMonth() + 1).toString(), 2, "0")).replace(/MM/gi, BX.util.str_pad_left((e.getMonth() + 1).toString(), 2, "0")).replace(/DD/gi, BX.util.str_pad_left(e.getDate().toString(), 2, "0")).replace(/HH/gi, BX.util.str_pad_left(e.getHours().toString(), 2, "0")).replace(/MI/gi, BX.util.str_pad_left(e.getMinutes().toString(), 2, "0")).replace(/SS/gi, BX.util.str_pad_left(e.getSeconds().toString(), 2, "0"));
    };

    BX.formatName = function (e, t, r) {
      e = e || {};
      t = t || "";
      var n = {
        TITLE: e["TITLE"] || "",
        NAME: e["NAME"] || "",
        LAST_NAME: e["LAST_NAME"] || "",
        SECOND_NAME: e["SECOND_NAME"] || "",
        LOGIN: e["LOGIN"] || "",
        NAME_SHORT: e["NAME"] ? e["NAME"].substr(0, 1) + "." : "",
        LAST_NAME_SHORT: e["LAST_NAME"] ? e["LAST_NAME"].substr(0, 1) + "." : "",
        SECOND_NAME_SHORT: e["SECOND_NAME"] ? e["SECOND_NAME"].substr(0, 1) + "." : "",
        EMAIL: e["EMAIL"] || "",
        ID: e["ID"] || "",
        NOBR: "",
        "/NOBR": ""
      },
          i = t;

      for (var a in n) {
        if (n.hasOwnProperty(a)) {
          i = i.replace("#" + a + "#", n[a]);
        }
      }

      i = i.replace(/([\s]+)/gi, " ").trim();

      if (i == "") {
        i = r == "Y" ? n["LOGIN"] : "";
        i = i == "" ? "Noname" : i;
      }

      return i;
    };

    BX.getNumMonth = function (e) {
      var t = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
      var r = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
      var n = e.toUpperCase();

      for (i = 1; i <= 12; i++) {
        if (n == BX.message("MON_" + i).toUpperCase() || n == BX.message("MONTH_" + i).toUpperCase() || n == t[i - 1].toUpperCase() || n == r[i - 1].toUpperCase()) {
          return i;
        }
      }

      return e;
    };

    BX.parseDate = function (e, t, r, n) {
      if (BX.type.isNotEmptyString(e)) {
        if (!r) r = BX.message("FORMAT_DATE");
        if (!n) n = BX.message("FORMAT_DATETIME");
        var i = "";

        for (u = 1; u <= 12; u++) {
          i = i + "|" + BX.message("MON_" + u);
        }

        var a = new RegExp("([0-9]+|[a-z]+" + i + ")", "ig");
        var o = e.match(a),
            s = r.match(/(DD|MI|MMMM|MM|M|YYYY)/gi),
            u,
            l,
            f = [],
            c = [],
            v = {};
        if (!o) return null;

        if (o.length > s.length) {
          s = n.match(/(DD|MI|MMMM|MM|M|YYYY|HH|H|SS|TT|T|GG|G)/gi);
        }

        for (u = 0, l = o.length; u < l; u++) {
          if (BX.util.trim(o[u]) != "") {
            f[f.length] = o[u];
          }
        }

        for (u = 0, l = s.length; u < l; u++) {
          if (BX.util.trim(s[u]) != "") {
            c[c.length] = s[u];
          }
        }

        var h = BX.util.array_search("MMMM", c);

        if (h > 0) {
          f[h] = BX.getNumMonth(f[h]);
          c[h] = "MM";
        } else {
          h = BX.util.array_search("M", c);

          if (h > 0) {
            f[h] = BX.getNumMonth(f[h]);
            c[h] = "MM";
          }
        }

        for (u = 0, l = c.length; u < l; u++) {
          var d = c[u].toUpperCase();
          v[d] = d == "T" || d == "TT" ? f[u] : parseInt(f[u], 10);
        }

        if (v["DD"] > 0 && v["MM"] > 0 && v["YYYY"] > 0) {
          var p = new Date();

          if (t) {
            p.setUTCDate(1);
            p.setUTCFullYear(v["YYYY"]);
            p.setUTCMonth(v["MM"] - 1);
            p.setUTCDate(v["DD"]);
            p.setUTCHours(0, 0, 0, 0);
          } else {
            p.setDate(1);
            p.setFullYear(v["YYYY"]);
            p.setMonth(v["MM"] - 1);
            p.setDate(v["DD"]);
            p.setHours(0, 0, 0, 0);
          }

          if ((!isNaN(v["HH"]) || !isNaN(v["GG"]) || !isNaN(v["H"]) || !isNaN(v["G"])) && !isNaN(v["MI"])) {
            if (!isNaN(v["H"]) || !isNaN(v["G"])) {
              var y = (v["T"] || v["TT"] || "am").toUpperCase() == "PM";
              var g = parseInt(v["H"] || v["G"] || 0, 10);

              if (y) {
                v["HH"] = g + (g == 12 ? 0 : 12);
              } else {
                v["HH"] = g < 12 ? g : 0;
              }
            } else {
              v["HH"] = parseInt(v["HH"] || v["GG"] || 0, 10);
            }

            if (isNaN(v["SS"])) v["SS"] = 0;

            if (t) {
              p.setUTCHours(v["HH"], v["MI"], v["SS"]);
            } else {
              p.setHours(v["HH"], v["MI"], v["SS"]);
            }
          }

          return p;
        }
      }

      return null;
    };

    BX.selectUtils = {
      addNewOption: function addNewOption(e, t, r, n, i) {
        e = BX(e);

        if (e) {
          var a = e.length;

          if (i !== false) {
            for (var o = 0; o < a; o++) {
              if (e[o].value == t) {
                return;
              }
            }
          }

          e.options[a] = new Option(r, t, false, false);
        }

        if (n === true) {
          this.sortSelect(e);
        }
      },
      deleteOption: function deleteOption(e, t) {
        e = BX(e);

        if (e) {
          for (var r = 0; r < e.length; r++) {
            if (e[r].value == t) {
              e.remove(r);
              break;
            }
          }
        }
      },
      deleteSelectedOptions: function deleteSelectedOptions(e) {
        e = BX(e);

        if (e) {
          var t = 0;

          while (t < e.length) {
            if (e[t].selected) {
              e[t].selected = false;
              e.remove(t);
            } else {
              t++;
            }
          }
        }
      },
      deleteAllOptions: function deleteAllOptions(e) {
        e = BX(e);

        if (e) {
          for (var t = e.length - 1; t >= 0; t--) {
            e.remove(t);
          }
        }
      },
      optionCompare: function optionCompare(e, t) {
        var r = e.optText.toLowerCase();
        var n = t.optText.toLowerCase();
        if (r > n) return 1;
        if (r < n) return -1;
        return 0;
      },
      sortSelect: function sortSelect(e) {
        e = BX(e);

        if (e) {
          var t = [];
          var r = e.options.length;
          var n;

          for (n = 0; n < r; n++) {
            t[n] = {
              optText: e[n].text,
              optValue: e[n].value
            };
          }

          t.sort(this.optionCompare);
          e.length = 0;
          r = t.length;

          for (n = 0; n < r; n++) {
            e[n] = new Option(t[n].optText, t[n].optValue, false, false);
          }
        }
      },
      selectAllOptions: function selectAllOptions(e) {
        e = BX(e);

        if (e) {
          var t = e.length;

          for (var r = 0; r < t; r++) {
            e[r].selected = true;
          }
        }
      },
      selectOption: function selectOption(e, t) {
        e = BX(e);

        if (e) {
          var r = e.length;

          for (var n = 0; n < r; n++) {
            e[n].selected = e[n].value == t;
          }
        }
      },
      addSelectedOptions: function addSelectedOptions(e, t, r, n) {
        e = BX(e);
        if (!e) return;
        var i = e.length;

        for (var a = 0; a < i; a++) {
          if (e[a].selected) this.addNewOption(t, e[a].value, e[a].text, n, r);
        }
      },
      moveOptionsUp: function moveOptionsUp(e) {
        e = BX(e);
        if (!e) return;
        var t = e.length;

        for (var r = 0; r < t; r++) {
          if (e[r].selected && r > 0 && e[r - 1].selected == false) {
            var n = new Option(e[r].text, e[r].value);
            e[r] = new Option(e[r - 1].text, e[r - 1].value);
            e[r].selected = false;
            e[r - 1] = n;
            e[r - 1].selected = true;
          }
        }
      },
      moveOptionsDown: function moveOptionsDown(e) {
        e = BX(e);
        if (!e) return;
        var t = e.length;

        for (var r = t - 1; r >= 0; r--) {
          if (e[r].selected && r < t - 1 && e[r + 1].selected == false) {
            var n = new Option(e[r].text, e[r].value);
            e[r] = new Option(e[r + 1].text, e[r + 1].value);
            e[r].selected = false;
            e[r + 1] = n;
            e[r + 1].selected = true;
          }
        }
      }
    };

    BX.getEventTarget = function (e) {
      if (e.target) {
        return e.target;
      } else if (e.srcElement) {
        return e.srcElement;
      }

      return null;
    };

    BX.hint = function (e, t, r, n) {
      if (null == r) {
        r = t;
        t = "";
      }

      if (null == e.BXHINT) {
        e.BXHINT = new BX.CHint({
          parent: e,
          hint: r,
          title: t,
          id: n
        });
        e.BXHINT.Show();
      }
    };

    BX.hint_replace = function (e, t, r) {
      if (null == r) {
        r = t;
        t = "";
      }

      if (!e || !e.parentNode || !r) return null;
      var n = new BX.CHint({
        hint: r,
        title: t
      });
      n.CreateParent();
      e.parentNode.insertBefore(n.PARENT, e);
      e.parentNode.removeChild(e);
      n.PARENT.style.marginLeft = "5px";
      return e;
    };

    BX.CHint = function (e) {
      this.PARENT = BX(e.parent);
      this.HINT = e.hint;
      this.HINT_TITLE = e.title;
      this.PARAMS = {};

      for (var t in this.defaultSettings) {
        if (null == e[t]) this.PARAMS[t] = this.defaultSettings[t];else this.PARAMS[t] = e[t];
      }

      if (null != e.id) this.ID = e.id;
      this.timer = null;
      this.bInited = false;
      this.msover = true;

      if (this.PARAMS.showOnce) {
        this.__show();

        this.msover = false;
        this.timer = setTimeout(BX.proxy(this.__hide, this), this.PARAMS.hide_timeout);
      } else if (this.PARENT) {
        BX.bind(this.PARENT, "mouseover", BX.proxy(this.Show, this));
        BX.bind(this.PARENT, "mouseout", BX.proxy(this.Hide, this));
      }

      BX.addCustomEvent("onMenuOpen", BX.delegate(this.disable, this));
      BX.addCustomEvent("onMenuClose", BX.delegate(this.enable, this));
    };

    BX.CHint.prototype.defaultSettings = {
      show_timeout: 1e3,
      hide_timeout: 500,
      dx: 2,
      showOnce: false,
      preventHide: true,
      min_width: 250
    };

    BX.CHint.prototype.CreateParent = function (e, t) {
      if (this.PARENT) {
        BX.unbind(this.PARENT, "mouseover", BX.proxy(this.Show, this));
        BX.unbind(this.PARENT, "mouseout", BX.proxy(this.Hide, this));
      }

      if (!t) t = {};
      var r = "icon";
      if (t.type && (t.type == "link" || t.type == "icon")) r = t.type;
      if (e) r = "element";

      if (r == "icon") {
        e = BX.create("IMG", {
          props: {
            src: t.iconSrc ? t.iconSrc : "/bitrix/js/main/core/images/hint.gif"
          }
        });
      } else if (r == "link") {
        e = BX.create("A", {
          props: {
            href: "javascript:void(0)"
          },
          html: "[?]"
        });
      }

      this.PARENT = e;
      BX.bind(this.PARENT, "mouseover", BX.proxy(this.Show, this));
      BX.bind(this.PARENT, "mouseout", BX.proxy(this.Hide, this));
      return this.PARENT;
    };

    BX.CHint.prototype.Show = function () {
      this.msover = true;
      if (null != this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(BX.proxy(this.__show, this), this.PARAMS.show_timeout);
    };

    BX.CHint.prototype.Hide = function () {
      this.msover = false;
      if (null != this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(BX.proxy(this.__hide, this), this.PARAMS.hide_timeout);
    };

    BX.CHint.prototype.__show = function () {
      if (!this.msover || this.disabled) return;
      if (!this.bInited) this.Init();

      if (this.prepareAdjustPos()) {
        this.DIV.style.display = "block";
        this.adjustPos();
        BX.bind(window, "scroll", BX.proxy(this.__onscroll, this));

        if (this.PARAMS.showOnce) {
          this.timer = setTimeout(BX.proxy(this.__hide, this), this.PARAMS.hide_timeout);
        }
      }
    };

    BX.CHint.prototype.__onscroll = function () {
      if (!BX.admin || !BX.admin.panel || !BX.admin.panel.isFixed()) return;
      if (this.scrollTimer) clearTimeout(this.scrollTimer);
      this.DIV.style.display = "none";
      this.scrollTimer = setTimeout(BX.proxy(this.Reopen, this), this.PARAMS.show_timeout);
    };

    BX.CHint.prototype.Reopen = function () {
      if (null != this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(BX.proxy(this.__show, this), 50);
    };

    BX.CHint.prototype.__hide = function () {
      if (this.msover) return;
      if (!this.bInited) return;
      BX.unbind(window, "scroll", BX.proxy(this.Reopen, this));

      if (this.PARAMS.showOnce) {
        this.Destroy();
      } else {
        this.DIV.style.display = "none";
      }
    };

    BX.CHint.prototype.__hide_immediately = function () {
      this.msover = false;

      this.__hide();
    };

    BX.CHint.prototype.Init = function () {
      this.DIV = document.body.appendChild(BX.create("DIV", {
        props: {
          className: "bx-panel-tooltip"
        },
        style: {
          display: "none"
        },
        children: [BX.create("DIV", {
          props: {
            className: "bx-panel-tooltip-top-border"
          },
          html: '<div class="bx-panel-tooltip-corner bx-panel-tooltip-left-corner"></div><div class="bx-panel-tooltip-border"></div><div class="bx-panel-tooltip-corner bx-panel-tooltip-right-corner"></div>'
        }), this.CONTENT = BX.create("DIV", {
          props: {
            className: "bx-panel-tooltip-content"
          },
          children: [BX.create("DIV", {
            props: {
              className: "bx-panel-tooltip-underlay"
            },
            children: [BX.create("DIV", {
              props: {
                className: "bx-panel-tooltip-underlay-bg"
              }
            })]
          })]
        }), BX.create("DIV", {
          props: {
            className: "bx-panel-tooltip-bottom-border"
          },
          html: '<div class="bx-panel-tooltip-corner bx-panel-tooltip-left-corner"></div><div class="bx-panel-tooltip-border"></div><div class="bx-panel-tooltip-corner bx-panel-tooltip-right-corner"></div>'
        })]
      }));

      if (this.ID) {
        this.CONTENT.insertBefore(BX.create("A", {
          attrs: {
            href: "javascript:void(0)"
          },
          props: {
            className: "bx-panel-tooltip-close"
          },
          events: {
            click: BX.delegate(this.Close, this)
          }
        }), this.CONTENT.firstChild);
      }

      if (this.HINT_TITLE) {
        this.CONTENT.appendChild(BX.create("DIV", {
          props: {
            className: "bx-panel-tooltip-title"
          },
          text: this.HINT_TITLE
        }));
      }

      if (this.HINT) {
        this.CONTENT_TEXT = this.CONTENT.appendChild(BX.create("DIV", {
          props: {
            className: "bx-panel-tooltip-text"
          }
        })).appendChild(BX.create("SPAN", {
          html: this.HINT
        }));
      }

      if (this.PARAMS.preventHide) {
        BX.bind(this.DIV, "mouseout", BX.proxy(this.Hide, this));
        BX.bind(this.DIV, "mouseover", BX.proxy(this.Show, this));
      }

      this.bInited = true;
    };

    BX.CHint.prototype.setContent = function (e) {
      this.HINT = e;
      if (this.CONTENT_TEXT) this.CONTENT_TEXT.innerHTML = this.HINT;else this.CONTENT_TEXT = this.CONTENT.appendChild(BX.create("DIV", {
        props: {
          className: "bx-panel-tooltip-text"
        }
      })).appendChild(BX.create("SPAN", {
        html: this.HINT
      }));
    };

    BX.CHint.prototype.prepareAdjustPos = function () {
      this._wnd = {
        scrollPos: BX.GetWindowScrollPos(),
        scrollSize: BX.GetWindowScrollSize()
      };
      return BX.style(this.PARENT, "display") != "none";
    };

    BX.CHint.prototype.getAdjustPos = function () {
      var e = {},
          t = BX.pos(this.PARENT),
          r = 0;
      e.top = t.bottom + this.PARAMS.dx;

      if (BX.admin && BX.admin.panel.DIV) {
        r = BX.admin.panel.DIV.offsetHeight + this.PARAMS.dx;

        if (BX.admin.panel.isFixed()) {
          r += this._wnd.scrollPos.scrollTop;
        }
      }

      if (e.top < r) e.top = r;else {
        if (e.top + this.DIV.offsetHeight > this._wnd.scrollSize.scrollHeight) e.top = t.top - this.PARAMS.dx - this.DIV.offsetHeight;
      }
      e.left = t.left;
      if (t.left < this.PARAMS.dx) t.left = this.PARAMS.dx;else {
        var n = this.DIV.offsetWidth;
        var i = this._wnd.scrollSize.scrollWidth - n - this.PARAMS.dx;
        if (e.left > i) e.left = i;
      }
      return e;
    };

    BX.CHint.prototype.adjustWidth = function () {
      if (this.bWidthAdjusted) return;
      var e = this.DIV.offsetWidth,
          t = this.DIV.offsetHeight;
      if (e > this.PARAMS.min_width) e = Math.round(Math.sqrt(1.618 * e * t));
      if (e < this.PARAMS.min_width) e = this.PARAMS.min_width;
      this.DIV.style.width = e + "px";
      if (this._adjustWidthInt) clearInterval(this._adjustWidthInt);
      this._adjustWidthInt = setInterval(BX.delegate(this._adjustWidthInterval, this), 5);
      this.bWidthAdjusted = true;
    };

    BX.CHint.prototype._adjustWidthInterval = function () {
      if (!this.DIV || this.DIV.style.display == "none") clearInterval(this._adjustWidthInt);
      var e = 20,
          t = 1500,
          r = this.DIV.offsetWidth,
          n = this.CONTENT_TEXT.offsetWidth;

      if (r > 0 && n > 0 && r - n < e && r < t) {
        this.DIV.style.width = r + e + "px";
        return;
      }

      clearInterval(this._adjustWidthInt);
    };

    BX.CHint.prototype.adjustPos = function () {
      this.adjustWidth();
      var e = this.getAdjustPos();
      this.DIV.style.top = e.top + "px";
      this.DIV.style.left = e.left + "px";
    };

    BX.CHint.prototype.Close = function () {
      if (this.ID && BX.WindowManager) BX.WindowManager.saveWindowOptions(this.ID, {
        display: "off"
      });

      this.__hide_immediately();

      this.Destroy();
    };

    BX.CHint.prototype.Destroy = function () {
      if (this.PARENT) {
        BX.unbind(this.PARENT, "mouseover", BX.proxy(this.Show, this));
        BX.unbind(this.PARENT, "mouseout", BX.proxy(this.Hide, this));
      }

      if (this.DIV) {
        BX.unbind(this.DIV, "mouseover", BX.proxy(this.Show, this));
        BX.unbind(this.DIV, "mouseout", BX.proxy(this.Hide, this));
        BX.cleanNode(this.DIV, true);
      }
    };

    BX.CHint.prototype.enable = function () {
      this.disabled = false;
    };

    BX.CHint.prototype.disable = function () {
      this.__hide_immediately();

      this.disabled = true;
    };

    function _adjustWait() {
      if (!this.bxmsg) return;
      var e = BX.pos(this),
          t = e.top;
      if (t < BX.GetDocElement().scrollTop) t = BX.GetDocElement().scrollTop + 5;
      this.bxmsg.style.top = t + 5 + "px";

      if (this == BX.GetDocElement()) {
        this.bxmsg.style.right = "5px";
      } else {
        this.bxmsg.style.left = e.right - this.bxmsg.offsetWidth - 5 + "px";
      }
    }

    function _processTpl(e, t, r) {
      if (e) {
        if (r) e.parentNode.removeChild(e);
        var n = {},
            i = BX.findChildren(e, {
          attribute: "data-role"
        }, true);

        for (var a = 0, o = i.length; a < o; a++) {
          n[i[a].getAttribute("data-role")] = i[a];
        }

        t.apply(e, [n]);
      }
    }

    function _checkNode(e, t) {
      t = t || {};
      if (BX.type.isFunction(t)) return t.call(window, e);
      if (!t.allowTextNodes && !BX.type.isElementNode(e)) return false;
      var r, n, i;

      for (r in t) {
        if (t.hasOwnProperty(r)) {
          switch (r) {
            case "tag":
            case "tagName":
              if (BX.type.isString(t[r])) {
                if (e.tagName.toUpperCase() != t[r].toUpperCase()) return false;
              } else if (t[r] instanceof RegExp) {
                if (!t[r].test(e.tagName)) return false;
              }

              break;

            case "class":
            case "className":
              if (BX.type.isString(t[r])) {
                if (!BX.hasClass(e, t[r])) return false;
              } else if (t[r] instanceof RegExp) {
                if (!BX.type.isString(e.className) || !t[r].test(e.className)) return false;
              }

              break;

            case "attr":
            case "attrs":
            case "attribute":
              if (BX.type.isString(t[r])) {
                if (!e.getAttribute(t[r])) return false;
              } else if (BX.type.isArray(t[r])) {
                for (n = 0, i = t[r].length; n < i; n++) {
                  if (t[r] && !e.getAttribute(t[r])) return false;
                }
              } else {
                for (n in t[r]) {
                  if (t[r].hasOwnProperty(n)) {
                    var a = e.getAttribute(n);

                    if (t[r][n] instanceof RegExp) {
                      if (!BX.type.isString(a) || !t[r][n].test(a)) {
                        return false;
                      }
                    } else {
                      if (a != "" + t[r][n]) {
                        return false;
                      }
                    }
                  }
                }
              }

              break;

            case "property":
            case "props":
              if (BX.type.isString(t[r])) {
                if (!e[t[r]]) return false;
              } else if (BX.type.isArray(t[r])) {
                for (n = 0, i = t[r].length; n < i; n++) {
                  if (t[r] && !e[t[r]]) return false;
                }
              } else {
                for (n in t[r]) {
                  if (BX.type.isString(t[r][n])) {
                    if (e[n] != t[r][n]) return false;
                  } else if (t[r][n] instanceof RegExp) {
                    if (!BX.type.isString(e[n]) || !t[r][n].test(e[n])) return false;
                  }
                }
              }

              break;

            case "callback":
              return t[r](e);
          }
        }
      }

      return true;
    }

    function Trash() {
      var e, t;

      for (e = 0, t = garbageCollectors.length; e < t; e++) {
        try {
          garbageCollectors[e].callback.apply(garbageCollectors[e].context || window);
          delete garbageCollectors[e];
          garbageCollectors[e] = null;
        } catch (e) {}
      }
    }

    if (window.attachEvent) window.attachEvent("onunload", Trash);else if (window.addEventListener) window.addEventListener("unload", Trash, false);else window.onunload = Trash;
    BX(BX.DoNothing);
    window.BX = BX;
    BX.browser.addGlobalClass();

    BX.data = function (e, t, r) {
      if (typeof e == "undefined") return undefined;
      if (typeof t == "undefined") return undefined;

      if (typeof r != "undefined") {
        dataStorage.set(e, t, r);
      } else {
        var n;

        if ((n = dataStorage.get(e, t)) != undefined) {
          return n;
        } else {
          if ("getAttribute" in e) {
            n = e.getAttribute("data-" + t.toString());

            if (n === null) {
              return undefined;
            }

            return n;
          }
        }

        return undefined;
      }
    };

    BX.DataStorage = function () {
      this.keyOffset = 1;
      this.data = {};
      this.uniqueTag = "BX-" + Math.random();

      this.resolve = function (e, t) {
        if (typeof e[this.uniqueTag] == "undefined") if (t) {
          try {
            Object.defineProperty(e, this.uniqueTag, {
              value: this.keyOffset++
            });
          } catch (t) {
            e[this.uniqueTag] = this.keyOffset++;
          }
        } else return undefined;
        return e[this.uniqueTag];
      };

      this.get = function (e, t) {
        if (e != document && !BX.type.isElementNode(e) || typeof t == "undefined") return undefined;
        e = this.resolve(e, false);
        if (typeof e == "undefined" || typeof this.data[e] == "undefined") return undefined;
        return this.data[e][t];
      };

      this.set = function (e, t, r) {
        if (e != document && !BX.type.isElementNode(e) || typeof r == "undefined") return;
        var n = this.resolve(e, true);
        if (typeof this.data[n] == "undefined") this.data[n] = {};
        this.data[n][t] = r;
      };
    };

    var dataStorage = new BX.DataStorage();
  })(window.BX);

  (function (e) {
    if (!e.BX) {
      e.BX = {};
    }

    var t = e.BX;

    t.Promise = function (e, t) {
      this.state = null;
      this.value = null;
      this.reason = null;
      this.next = null;
      this.ctx = t || this;
      this.onFulfilled = [];
      this.onRejected = [];
    };

    t.Promise.prototype.fulfill = function (e) {
      this.checkState();
      this.value = e;
      this.state = true;
      this.execute();
    };

    t.Promise.prototype.reject = function (e) {
      this.checkState();
      this.reason = e;
      this.state = false;
      this.execute();
    };

    t.Promise.prototype.then = function (e, r) {
      if (typeof e == "function" || e instanceof Function) {
        this.onFulfilled.push(e);
      }

      if (typeof r == "function" || r instanceof Function) {
        this.onRejected.push(r);
      }

      if (this.next === null) {
        this.next = new t.Promise(null, this.ctx);
      }

      if (this.state !== null) {
        this.execute();
      }

      return this.next;
    };

    t.Promise.prototype.catch = function (e) {
      if (typeof e == "function" || e instanceof Function) {
        this.onRejected.push(e);
      }

      if (this.next === null) {
        this.next = new t.Promise(null, this.ctx);
      }

      if (this.state !== null) {
        this.execute();
      }

      return this.next;
    };

    t.Promise.prototype.setAutoResolve = function (e, t) {
      this.timer = setTimeout(function () {
        if (this.state === null) {
          this[e ? "fulfill" : "reject"]();
        }
      }.bind(this), t || 15);
    };

    t.Promise.prototype.cancelAutoResolve = function () {
      clearTimeout(this.timer);
    };

    t.Promise.prototype.resolve = function (e) {
      var t = this;

      if (this === e) {
        this.reject(new TypeError("Promise cannot fulfill or reject itself"));
      } else if (e && e.toString() === "[object BX.Promise]") {
        e.then(function (e) {
          t.fulfill(e);
        }, function (e) {
          t.reject(e);
        });
      } else {
        this.fulfill(e);
      }
    };

    t.Promise.prototype.toString = function () {
      return "[object BX.Promise]";
    };

    t.Promise.prototype.execute = function () {
      if (this.state === null) {
        return;
      }

      var r = undefined;
      var n = undefined;
      var i = undefined;
      var a;

      if (this.state === true) {
        if (this.onFulfilled.length) {
          try {
            for (a = 0; a < this.onFulfilled.length; a++) {
              i = this.onFulfilled[a].apply(this.ctx, [this.value]);

              if (typeof i != "undefined") {
                r = i;
              }
            }
          } catch (r) {
            if ("console" in e) {
              console.dir(r);
            }

            if (typeof t.debug !== "undefined") {
              t.debug(r);
            }

            n = r;
          }
        } else {
          r = this.value;
        }
      } else if (this.state === false) {
        if (this.onRejected.length) {
          try {
            for (a = 0; a < this.onRejected.length; a++) {
              i = this.onRejected[a].apply(this.ctx, [this.reason]);

              if (typeof i != "undefined") {
                r = i;
              }
            }
          } catch (r) {
            if ("console" in e) {
              console.dir(r);
            }

            if (typeof t.debug !== "undefined") {
              t.debug(r);
            }

            n = r;
          }
        } else {
          n = this.reason;
        }
      }

      if (this.next !== null) {
        if (typeof n != "undefined") {
          this.next.reject(n);
        } else if (typeof r != "undefined") {
          this.next.resolve(r);
        }
      }
    };

    t.Promise.prototype.checkState = function () {
      if (this.state !== null) {
        throw new Error("You can not do fulfill() or reject() multiple times");
      }
    };
  })(window);

  (function (e) {
    if (e.BX.ajax) return;
    var t = e.BX,
        r = {},
        n = {
      method: "GET",
      dataType: "html",
      timeout: 0,
      async: true,
      processData: true,
      scriptsRunFirst: false,
      emulateOnload: true,
      skipAuthCheck: false,
      start: true,
      cache: true,
      preparePost: true,
      headers: false,
      lsTimeout: 30,
      lsForce: false
    },
        i = null,
        a = {},
        o = [],
        s = {
      url_utf: /[^\034-\254]+/g,
      script_self: /\/bitrix\/js\/main\/core\/core(_ajax)*.js$/i,
      script_self_window: /\/bitrix\/js\/main\/core\/core_window.js$/i,
      script_self_admin: /\/bitrix\/js\/main\/core\/core_admin.js$/i,
      script_onload: /window.onload/g
    };

    t.ajax = function (e) {
      var i, a;

      if (!e || !e.url || !t.type.isString(e.url)) {
        return false;
      }

      for (var o in r) {
        if (typeof e[o] == "undefined") e[o] = r[o];
      }

      r = {};

      for (o in n) {
        if (typeof e[o] == "undefined") e[o] = n[o];
      }

      e.method = e.method.toUpperCase();
      if (!t.localStorage) e.lsId = null;

      if (t.browser.IsIE()) {
        var u = s.url_utf.exec(e.url);

        if (u) {
          do {
            e.url = e.url.replace(u, t.util.urlencode(u));
            u = s.url_utf.exec(e.url);
          } while (u);
        }
      }

      if (e.dataType == "json") e.emulateOnload = false;
      if (!e.cache && e.method == "GET") e.url = t.ajax._uncache(e.url);

      if (e.method == "POST" && e.preparePost) {
        e.data = t.ajax.prepareData(e.data);
      }

      var l = true;

      if (e.lsId && !e.lsForce) {
        var f = t.localStorage.get("ajax-" + e.lsId);

        if (f !== null) {
          l = false;

          var c = function c(r) {
            if (r.key == "ajax-" + e.lsId && r.value != "BXAJAXWAIT") {
              var n = r.value,
                  i = !!r.oldValue && n == null;
              if (!i) t.ajax.__run(e, n);else if (e.onfailure) e.onfailure("timeout");
              t.removeCustomEvent("onLocalStorageChange", c);
            }
          };

          if (f == "BXAJAXWAIT") {
            t.addCustomEvent("onLocalStorageChange", c);
          } else {
            setTimeout(function () {
              c({
                key: "ajax-" + e.lsId,
                value: f
              });
            }, 10);
          }
        }
      }

      if (l) {
        e.xhr = t.ajax.xhr();
        if (!e.xhr) return;

        if (e.lsId) {
          t.localStorage.set("ajax-" + e.lsId, "BXAJAXWAIT", e.lsTimeout);
        }

        e.xhr.open(e.method, e.url, e.async);

        if (!e.skipBxHeader && !t.ajax.isCrossDomain(e.url)) {
          e.xhr.setRequestHeader("Bx-ajax", "true");
        }

        if (e.method == "POST" && e.preparePost) {
          e.xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        }

        if (_typeof(e.headers) == "object") {
          for (o = 0; o < e.headers.length; o++) {
            e.xhr.setRequestHeader(e.headers[o].name, e.headers[o].value);
          }
        }

        if (!!e.onprogress) {
          t.bind(e.xhr, "progress", e.onprogress);
        }

        var v = false;

        var h = e.xhr.onreadystatechange = function (r) {
          if (v) return;

          if (r === "timeout") {
            if (e.onfailure) {
              e.onfailure("timeout");
            }

            t.onCustomEvent(e.xhr, "onAjaxFailure", ["timeout", "", e]);
            e.xhr.onreadystatechange = t.DoNothing;
            e.xhr.abort();

            if (e.async) {
              e.xhr = null;
            }
          } else {
            if (e.xhr.readyState == 4 || r == "run") {
              i = t.ajax.xhrSuccess(e.xhr) ? "success" : "error";
              v = true;
              e.xhr.onreadystatechange = t.DoNothing;

              if (i == "success") {
                var n = !!e.skipAuthCheck || t.ajax.isCrossDomain(e.url) ? false : e.xhr.getResponseHeader("X-Bitrix-Ajax-Status");

                if (!!n && n == "Authorize") {
                  if (e.onfailure) {
                    e.onfailure("auth", e.xhr.status);
                  }

                  t.onCustomEvent(e.xhr, "onAjaxFailure", ["auth", e.xhr.status, e]);
                } else {
                  var a = e.xhr.responseText;

                  if (e.lsId) {
                    t.localStorage.set("ajax-" + e.lsId, a, e.lsTimeout);
                  }

                  t.ajax.__run(e, a);
                }
              } else {
                if (e.onfailure) {
                  e.onfailure("status", e.xhr.status);
                }

                t.onCustomEvent(e.xhr, "onAjaxFailure", ["status", e.xhr.status, e]);
              }

              if (e.async) {
                e.xhr = null;
              }
            }
          }
        };

        if (e.async && e.timeout > 0) {
          setTimeout(function () {
            if (e.xhr && !v) {
              h("timeout");
            }
          }, e.timeout * 1e3);
        }

        if (e.start) {
          e.xhr.send(e.data);

          if (!e.async) {
            h("run");
          }
        }

        return e.xhr;
      }
    };

    t.ajax.xhr = function () {
      if (e.XMLHttpRequest) {
        try {
          return new XMLHttpRequest();
        } catch (e) {}
      } else if (e.ActiveXObject) {
        try {
          return new e.ActiveXObject("Msxml2.XMLHTTP.6.0");
        } catch (e) {}

        try {
          return new e.ActiveXObject("Msxml2.XMLHTTP.3.0");
        } catch (e) {}

        try {
          return new e.ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {}

        try {
          return new e.ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {}

        throw new Error("This browser does not support XMLHttpRequest.");
      }

      return null;
    };

    t.ajax.isCrossDomain = function (r, n) {
      n = n || e.location;

      if (r.indexOf("//") === 0) {
        r = n.protocol + r;
      }

      if (r.indexOf("http") !== 0) {
        return false;
      }

      var i = e.document.createElement("a");
      i.href = r;
      return i.protocol !== n.protocol || i.hostname !== n.hostname || t.ajax.getHostPort(i.protocol, i.host) !== t.ajax.getHostPort(n.protocol, n.host);
    };

    t.ajax.getHostPort = function (e, t) {
      var r = /:(\d+)$/.exec(t);

      if (r) {
        return r[1];
      } else {
        if (e === "http:") {
          return "80";
        } else if (e === "https:") {
          return "443";
        }
      }

      return "";
    };

    t.ajax.__prepareOnload = function (r) {
      if (r.length > 0) {
        t.ajax["onload_" + i] = null;

        for (var n = 0, a = r.length; n < a; n++) {
          if (r[n].isInternal) {
            r[n].JS = r[n].JS.replace(s.script_onload, "BX.ajax.onload_" + i);
          }
        }
      }

      t.CaptureEventsGet();
      t.CaptureEvents(e, "load");
    };

    t.ajax.__runOnload = function () {
      if (null != t.ajax["onload_" + i]) {
        t.ajax["onload_" + i].apply(e);
        t.ajax["onload_" + i] = null;
      }

      var r = t.CaptureEventsGet();

      if (r) {
        for (var n = 0; n < r.length; n++) {
          r[n].apply(e);
        }
      }
    };

    t.ajax.__run = function (e, r) {
      if (!e.processData) {
        if (e.onsuccess) {
          e.onsuccess(r);
        }

        t.onCustomEvent(e.xhr, "onAjaxSuccess", [r, e]);
      } else {
        r = t.ajax.processRequestData(r, e);
      }
    };

    t.ajax._onParseJSONFailure = function (e) {
      this.jsonFailure = true;
      this.jsonResponse = e;
      this.jsonProactive = /^\[WAF\]/.test(e);
    };

    t.ajax.processRequestData = function (e, r) {
      var n,
          a = [],
          o = [];

      switch (r.dataType.toUpperCase()) {
        case "JSON":
          t.addCustomEvent(r.xhr, "onParseJSONFailure", t.proxy(t.ajax._onParseJSONFailure, r));
          n = t.parseJSON(e, r.xhr);
          t.removeCustomEvent(r.xhr, "onParseJSONFailure", t.proxy(t.ajax._onParseJSONFailure, r));

          if (!!n && t.type.isArray(n["bxjs"])) {
            for (var s = 0; s < n["bxjs"].length; s++) {
              if (t.type.isNotEmptyString(n["bxjs"][s])) {
                a.push({
                  isInternal: false,
                  JS: n["bxjs"][s],
                  bRunFirst: r.scriptsRunFirst
                });
              } else {
                a.push(n["bxjs"][s]);
              }
            }
          }

          if (!!n && t.type.isArray(n["bxcss"])) {
            o = n["bxcss"];
          }

          break;

        case "SCRIPT":
          a.push({
            isInternal: true,
            JS: e,
            bRunFirst: r.scriptsRunFirst
          });
          n = e;
          break;

        default:
          var u = t.processHTML(e, r.scriptsRunFirst);
          n = u.HTML;
          a = u.SCRIPT;
          o = u.STYLE;
          break;
      }

      var l = false;

      if (null == i) {
        i = parseInt(Math.random() * 1e6);
        l = true;
      }

      if (o.length > 0) t.loadCSS(o);
      if (r.emulateOnload) t.ajax.__prepareOnload(a);
      var f = t.DoNothing;

      if (r.emulateOnload || l) {
        f = t.defer(function () {
          if (r.emulateOnload) t.ajax.__runOnload();
          if (l) i = null;
          t.onCustomEvent(r.xhr, "onAjaxSuccessFinish", [r]);
        });
      }

      try {
        if (!!r.jsonFailure) {
          throw {
            type: "json_failure",
            data: r.jsonResponse,
            bProactive: r.jsonProactive
          };
        }

        r.scripts = a;
        t.ajax.processScripts(r.scripts, true);

        if (r.onsuccess) {
          r.onsuccess(n);
        }

        t.onCustomEvent(r.xhr, "onAjaxSuccess", [n, r]);
        t.ajax.processScripts(r.scripts, false, f);
      } catch (e) {
        if (r.onfailure) r.onfailure("processing", e);
        t.onCustomEvent(r.xhr, "onAjaxFailure", ["processing", e, r]);
      }
    };

    t.ajax.processScripts = function (e, r, n) {
      var i = [],
          a = "";
      n = n || t.DoNothing;

      for (var o = 0, s = e.length; o < s; o++) {
        if (typeof r != "undefined" && r != !!e[o].bRunFirst) continue;
        if (e[o].isInternal) a += ";" + e[o].JS;else i.push(e[o].JS);
      }

      i = t.util.array_unique(i);
      var u = a.length > 0 ? function () {
        t.evalGlobal(a);
      } : t.DoNothing;

      if (i.length > 0) {
        t.load(i, function () {
          u();
          n();
        });
      } else {
        u();
        n();
      }
    };

    t.ajax.prepareData = function (e, r) {
      var n = "";
      if (t.type.isString(e)) n = e;else if (null != e) {
        for (var i in e) {
          if (e.hasOwnProperty(i)) {
            if (n.length > 0) n += "&";
            var a = t.util.urlencode(i);
            if (r) a = r + "[" + a + "]";
            if (_typeof(e[i]) == "object") n += t.ajax.prepareData(e[i], a);else n += a + "=" + t.util.urlencode(e[i]);
          }
        }
      }
      return n;
    };

    t.ajax.xhrSuccess = function (e) {
      return e.status >= 200 && e.status < 300 || e.status === 304 || e.status === 1223 || e.status === 0;
    };

    t.ajax.Setup = function (e, t) {
      t = !!t;

      for (var i in e) {
        if (t) r[i] = e[i];else n[i] = e[i];
      }
    };

    t.ajax.replaceLocalStorageValue = function (e, r, n) {
      if (!!t.localStorage) t.localStorage.set("ajax-" + e, r, n);
    };

    t.ajax._uncache = function (e) {
      return e + ((e.indexOf("?") !== -1 ? "&" : "?") + "_=" + new Date().getTime());
    };

    t.ajax.get = function (e, r, n) {
      if (t.type.isFunction(r)) {
        n = r;
        r = "";
      }

      r = t.ajax.prepareData(r);

      if (r) {
        e += (e.indexOf("?") !== -1 ? "&" : "?") + r;
        r = "";
      }

      return t.ajax({
        method: "GET",
        dataType: "html",
        url: e,
        data: "",
        onsuccess: n
      });
    };

    t.ajax.getCaptcha = function (e) {
      return t.ajax.loadJSON("/bitrix/tools/ajax_captcha.php", e);
    };

    t.ajax.insertToNode = function (e, n) {
      n = t(n);

      if (!!n) {
        var i = {
          cancel: false
        };
        t.onCustomEvent("onAjaxInsertToNode", [{
          url: e,
          node: n,
          eventArgs: i
        }]);

        if (i.cancel === true) {
          return;
        }

        var a = null;

        if (!r.denyShowWait) {
          a = t.showWait(n);
          delete r.denyShowWait;
        }

        return t.ajax.get(e, function (e) {
          n.innerHTML = e;
          t.closeWait(n, a);
        });
      }
    };

    t.ajax.post = function (e, r, n) {
      r = t.ajax.prepareData(r);
      return t.ajax({
        method: "POST",
        dataType: "html",
        url: e,
        data: r,
        onsuccess: n
      });
    };

    t.ajax.promise = function (e) {
      var r = new t.Promise();

      e.onsuccess = function (e) {
        r.fulfill(e);
      };

      e.onfailure = function (e, t) {
        r.reject({
          reason: e,
          data: t
        });
      };

      e.onprogress = function (e) {
        if (e.position == 0 && e.totalSize == 0) {
          r.reject({
            reason: "progress",
            data: e
          });
        }
      };

      var n = t.ajax(e);

      if (n) {
        if (typeof e.onrequeststart === "function") {
          e.onrequeststart(n);
        }
      } else {
        r.reject({
          reason: "init",
          data: false
        });
      }

      return r;
    };

    t.ajax.loadScriptAjax = function (e, r, n) {
      if (t.type.isArray(e)) {
        for (var i = 0, o = e.length; i < o; i++) {
          t.ajax.loadScriptAjax(e[i], r, n);
        }
      } else {
        var u = e.replace(/\.js\?.*/, ".js");
        if (s.script_self.test(u)) return;
        if (s.script_self_window.test(u) && t.CWindow) return;
        if (s.script_self_admin.test(u) && t.admin) return;

        if (typeof a[u] == "undefined") {
          if (!!n) {
            a[u] = "";
            return t.loadScript(e);
          } else {
            return t.ajax({
              url: e,
              method: "GET",
              dataType: "script",
              processData: true,
              emulateOnload: false,
              scriptsRunFirst: true,
              async: false,
              start: true,
              onsuccess: function onsuccess(e) {
                a[u] = e;
                if (r) r(e);
              }
            });
          }
        } else if (r) {
          r(a[u]);
        }
      }
    };

    t.ajax.loadJSON = function (e, r, n, i) {
      if (t.type.isFunction(r)) {
        i = n;
        n = r;
        r = "";
      }

      r = t.ajax.prepareData(r);

      if (r) {
        e += (e.indexOf("?") !== -1 ? "&" : "?") + r;
        r = "";
      }

      return t.ajax({
        method: "GET",
        dataType: "json",
        url: e,
        onsuccess: n,
        onfailure: i
      });
    };

    var u = function u(e) {
      var r = e.getParameters || {};

      if (t.type.isNotEmptyString(e.analyticsLabel)) {
        r.analyticsLabel = e.analyticsLabel;
      } else if (t.type.isNotEmptyObject(e.analyticsLabel)) {
        r.analyticsLabel = e.analyticsLabel;
      }

      if (typeof e.mode !== "undefined") {
        r.mode = e.mode;
      }

      if (e.navigation) {
        if (e.navigation.page) {
          r.nav = "page-" + e.navigation.page;
        }

        if (e.navigation.size) {
          if (r.nav) {
            r.nav += "-";
          } else {
            r.nav = "";
          }

          r.nav += "size-" + e.navigation.size;
        }
      }

      return r;
    };

    var l = function l(e) {
      e = t.type.isPlainObject(e) ? e : {};

      if (e.data instanceof FormData) {
        e.preparePost = false;
        e.data.append("sessid", t.bitrix_sessid());

        if (t.message.SITE_ID) {
          e.data.append("SITE_ID", t.message.SITE_ID);
        }

        if (typeof e.signedParameters !== "undefined") {
          e.data.append("signedParameters", e.signedParameters);
        }
      } else {
        e.data = t.type.isPlainObject(e.data) ? e.data : {};

        if (t.message.SITE_ID) {
          e.data.SITE_ID = t.message.SITE_ID;
        }

        e.data.sessid = t.bitrix_sessid();

        if (typeof e.signedParameters !== "undefined") {
          e.data.signedParameters = e.signedParameters;
        }
      }

      if (!e.method) {
        e.method = "POST";
      }

      return e;
    };

    var f = function f(e, r) {
      r = r || false;
      var n = t.clone(e);
      var i = null;
      var a = e.onrequeststart;

      e.onrequeststart = function (e) {
        i = e;

        if (t.type.isFunction(a)) {
          a(e);
        }
      };

      var o = n.onrequeststart;

      n.onrequeststart = function (e) {
        i = e;

        if (t.type.isFunction(o)) {
          o(e);
        }
      };

      var s = t.ajax.promise(e);
      return s.then(function (e) {
        if (!r && t.type.isPlainObject(e) && t.type.isArray(e.errors)) {
          var i = false;
          e.errors.forEach(function (e) {
            if (e.code === "invalid_csrf" && e.customData.csrf) {
              t.message({
                bitrix_sessid: e.customData.csrf
              });
              n.data.sessid = t.bitrix_sessid();
              i = true;
            }
          });

          if (i) {
            return f(n, true);
          }
        }

        if (!t.type.isPlainObject(e) || e.status !== "success") {
          var a = new t.Promise();
          a.reject(e);
          return a;
        }

        return e;
      }).catch(function (e) {
        var r = new t.Promise();

        if (t.type.isPlainObject(e) && e.status && e.hasOwnProperty("data")) {
          r.reject(e);
        } else {
          r.reject({
            status: "error",
            data: {
              ajaxRejectData: e
            },
            errors: [{
              code: "NETWORK_ERROR",
              message: "Network error"
            }]
          });
        }

        return r;
      }).then(function (e) {
        var r = new t.Promise();
        var n = i.getAllResponseHeaders().trim().split(/[\r\n]+/);
        var a = {};
        n.forEach(function (e) {
          var t = e.split(": ");
          var r = t.shift().toLowerCase();
          a[r] = t.join(": ");
        });

        if (!a["x-process-assets"]) {
          r.fulfill(e);
          return r;
        }

        var o = t.prop.getObject(t.prop.getObject(e, "data", {}), "assets", {});
        var s = new Promise(function (e, r) {
          var n = t.prop.getArray(o, "css", []);
          t.load(n, function () {
            t.loadScript(t.prop.getArray(o, "js", []), e);
          });
        });
        s.then(function () {
          var n = t.prop.getArray(o, "string", []);
          var i = n.join("\n");
          t.html(null, i).then(function () {
            r.fulfill(e);
          });
        });
        return r;
      });
    };

    t.ajax.runAction = function (e, r) {
      r = l(r);
      var n = u(r);
      n.action = e;
      var i = "/bitrix/services/main/ajax.php?" + t.ajax.prepareData(n);
      return f({
        method: r.method,
        dataType: "json",
        url: i,
        data: r.data,
        timeout: r.timeout,
        preparePost: r.preparePost,
        headers: r.headers,
        onrequeststart: r.onrequeststart
      });
    };

    t.ajax.runComponentAction = function (e, r, n) {
      n = l(n);
      n.mode = n.mode || "ajax";
      var i = u(n);
      i.c = e;
      i.action = r;
      var a = "/bitrix/services/main/ajax.php?" + t.ajax.prepareData(i);
      return f({
        method: n.method,
        dataType: "json",
        url: a,
        data: n.data,
        timeout: n.timeout,
        preparePost: n.preparePost,
        headers: n.headers,
        onrequeststart: n.onrequeststart ? n.onrequeststart : null
      });
    };

    t.ajax.load = function (e, r) {
      if (!t.type.isArray(e)) e = [e];
      var n = 0;
      if (!t.type.isFunction(r)) r = t.DoNothing;

      var i = function i(e) {
        if (t.type.isFunction(this.callback)) this.callback(e);
        if (++n >= o) r();
      };

      for (var a = 0, o = e.length; a < o; a++) {
        switch (e[a].type.toUpperCase()) {
          case "SCRIPT":
            t.loadScript([e[a].url], t.proxy(i, e[a]));
            break;

          case "CSS":
            t.loadCSS([e[a].url]);
            if (++n >= o) r();
            break;

          case "JSON":
            t.ajax.loadJSON(e[a].url, t.proxy(i, e[a]));
            break;

          default:
            t.ajax.get(e[a].url, "", t.proxy(i, e[a]));
            break;
        }
      }
    };

    t.ajax.submit = function (e, r) {
      if (!e.target) {
        if (null == e.BXFormTarget) {
          var n = "formTarget_" + Math.random();
          e.BXFormTarget = document.body.appendChild(t.create("IFRAME", {
            props: {
              name: n,
              id: n,
              src: "javascript:void(0)"
            },
            style: {
              display: "none"
            }
          }));
        }

        e.target = e.BXFormTarget.name;
      }

      e.BXFormCallback = r;
      t.bind(e.BXFormTarget, "load", t.proxy(t.ajax._submit_callback, e));
      t.submit(e);
      return false;
    };

    t.ajax.submitComponentForm = function (r, n, i) {
      if (!r.target) {
        if (null == r.BXFormTarget) {
          var a = "formTarget_" + Math.random();
          r.BXFormTarget = document.body.appendChild(t.create("IFRAME", {
            props: {
              name: a,
              id: a,
              src: "javascript:void(0)"
            },
            style: {
              display: "none"
            }
          }));
        }

        r.target = r.BXFormTarget.name;
      }

      if (!!i) var o = t.showWait(n);

      r.BXFormCallback = function (r) {
        if (!!i) t.closeWait(o);

        var a = function a() {
          if (!!e.bxcompajaxframeonload) {
            setTimeout(function () {
              e.bxcompajaxframeonload();
              e.bxcompajaxframeonload = null;
            }, 10);
          }
        };

        t(n).innerHTML = r;
        t.onCustomEvent("onAjaxSuccess", [null, null, a]);
      };

      t.bind(r.BXFormTarget, "load", t.proxy(t.ajax._submit_callback, r));
      return true;
    };

    t.ajax._submit_callback = function () {
      try {
        if (this.BXFormTarget.contentWindow.location.href.indexOf("http") != 0) return;
      } catch (e) {
        return;
      }

      if (this.BXFormCallback) this.BXFormCallback.apply(this, [this.BXFormTarget.contentWindow.document.body.innerHTML]);
      t.unbindAll(this.BXFormTarget);
    };

    t.ajax.prepareForm = function (e, t) {
      t = !!t ? t : {};
      var r,
          n,
          i,
          a = [],
          o = e.elements.length,
          s = 0,
          u = 0;

      if (!!e) {
        for (r = 0; r < o; r++) {
          i = e.elements[r];
          if (i.disabled) continue;
          if (!i.type) continue;

          switch (i.type.toLowerCase()) {
            case "text":
            case "textarea":
            case "password":
            case "number":
            case "hidden":
            case "select-one":
              a.push({
                name: i.name,
                value: i.value
              });
              u += i.name.length + i.value.length;
              break;

            case "file":
              if (!!i.files) {
                for (n = 0; n < i.files.length; n++) {
                  s++;
                  a.push({
                    name: i.name,
                    value: i.files[n],
                    file: true
                  });
                  u += i.files[n].size;
                }
              }

              break;

            case "radio":
            case "checkbox":
              if (i.checked) {
                a.push({
                  name: i.name,
                  value: i.value
                });
                u += i.name.length + i.value.length;
              }

              break;

            case "select-multiple":
              for (var l = 0; l < i.options.length; l++) {
                if (i.options[l].selected) {
                  a.push({
                    name: i.name,
                    value: i.options[l].value
                  });
                  u += i.name.length + i.options[l].length;
                }
              }

              break;

            default:
              break;
          }
        }

        r = 0;
        u = 0;
        var f = t,
            c,
            v,
            h,
            d;

        while (r < a.length) {
          var p = a[r].name.indexOf("[");

          if (d) {
            f[a[r].name] = {};
            f[a[r].name][d.replace(/\[|\]/gi, "")] = a[r].value;
            f = t;
            d = null;
            r++;
          } else if (p == -1) {
            f[a[r].name] = a[r].value;
            f = t;
            r++;
          } else {
            c = a[r].name.substring(0, p);
            v = a[r].name.substring(p + 1);
            h = v.indexOf("]");

            if (h == -1) {
              if (!f[c]) f[c] = [];
              f = t;
              r++;
            } else if (h == 0) {
              if (!f[c]) f[c] = [];
              f = f[c];
              a[r].name = "" + f.length;
              if (v.substring(h + 1).indexOf("[") === 0) d = v.substring(0, h) + v.substring(h + 1);
            } else {
              if (!f[c]) f[c] = {};
              f = f[c];
              a[r].name = v.substring(0, h) + v.substring(h + 1);
            }
          }
        }
      }

      return {
        data: t,
        filesCount: s,
        roughSize: u
      };
    };

    t.ajax.submitAjax = function (r, n) {
      n = n !== null && _typeof(n) == "object" ? n : {};
      n.url = n["url"] || r.getAttribute("action");
      var i = n["data"] || {};
      n.data = t.ajax.prepareForm(r).data;

      for (var a in i) {
        if (i.hasOwnProperty(a)) {
          n.data[a] = i[a];
        }
      }

      if (!e["FormData"]) {
        t.ajax(n);
      } else {
        var o = function o(e) {
          var t = Object.prototype.toString.call(e);
          return t == "[object File]" || t == "[object Blob]";
        },
            s = function s(e, t, r) {
          if (!!r && _typeof(r) == "object" && !o(r)) {
            for (var n in r) {
              if (r.hasOwnProperty(n)) {
                s(e, t == "" ? n : t + "[" + n + "]", r[n]);
              }
            }
          } else e.append(t, !!r ? r : "");
        },
            u = function u(e) {
          var r = {};

          if (null != e) {
            if (_typeof(e) == "object") {
              for (var n in e) {
                if (e.hasOwnProperty(n)) {
                  var i = t.util.urlencode(n);
                  if (_typeof(e[n]) == "object" && e[n]["file"] !== true) r[i] = u(e[n]);else if (e[n]["file"] === true) r[i] = e[n]["value"];else r[i] = t.util.urlencode(e[n]);
                }
              }
            } else r = t.util.urlencode(e);
          }

          return r;
        },
            l = new e.FormData();

        if (n.method !== "POST") {
          n.data = t.ajax.prepareData(n.data);

          if (n.data) {
            n.url += (n.url.indexOf("?") !== -1 ? "&" : "?") + n.data;
            n.data = "";
          }
        } else {
          if (n.preparePost === true) n.data = u(n.data);
          s(l, "", n.data);
          n.data = l;
        }

        n.preparePost = false;
        n.start = false;
        var f = t.ajax(n);
        if (!!n["onprogress"]) f.upload.addEventListener("progress", function (e) {
          var t = null;

          if (e.lengthComputable && (e.total || e["totalSize"])) {
            t = e.loaded * 100 / (e.total || e["totalSize"]);
          }

          n["onprogress"](e, t);
        });
        f.send(l);
      }
    };

    t.ajax.UpdatePageData = function (e) {
      if (e.TITLE) t.ajax.UpdatePageTitle(e.TITLE);
      if (e.WINDOW_TITLE || e.TITLE) t.ajax.UpdateWindowTitle(e.WINDOW_TITLE || e.TITLE);
      if (e.NAV_CHAIN) t.ajax.UpdatePageNavChain(e.NAV_CHAIN);
      if (e.CSS && e.CSS.length > 0) t.loadCSS(e.CSS);

      if (e.SCRIPTS && e.SCRIPTS.length > 0) {
        var r = function r(n, i, a) {
          if (!!i && t.type.isArray(i.scripts)) {
            for (var o = 0, s = e.SCRIPTS.length; o < s; o++) {
              i.scripts.push({
                isInternal: false,
                JS: e.SCRIPTS[o]
              });
            }
          } else {
            t.loadScript(e.SCRIPTS, a);
          }

          t.removeCustomEvent("onAjaxSuccess", r);
        };

        t.addCustomEvent("onAjaxSuccess", r);
      } else {
        var n = function n(e, r, i) {
          if (t.type.isFunction(i)) {
            i();
          }

          t.removeCustomEvent("onAjaxSuccess", n);
        };

        t.addCustomEvent("onAjaxSuccess", n);
      }
    };

    t.ajax.UpdatePageTitle = function (e) {
      var r = t("pagetitle");

      if (r) {
        r.removeChild(r.firstChild);
        if (!r.firstChild) r.appendChild(document.createTextNode(e));else r.insertBefore(document.createTextNode(e), r.firstChild);
      }
    };

    t.ajax.UpdateWindowTitle = function (e) {
      document.title = e;
    };

    t.ajax.UpdatePageNavChain = function (e) {
      var r = t("navigation");

      if (r) {
        r.innerHTML = e;
      }
    };

    t.userOptions = {
      options: null,
      bSend: false,
      delay: 5e3,
      path: "/bitrix/admin/user_options.php?"
    };

    t.userOptions.setAjaxPath = function (e) {
      t.userOptions.path = e.indexOf("?") == -1 ? e + "?" : e + "&";
    };

    t.userOptions.save = function (e, r, n, i, a) {
      if (null == t.userOptions.options) t.userOptions.options = {};
      a = !!a;
      t.userOptions.options[e + "." + r + "." + n] = [e, r, n, i, a];

      var o = t.userOptions.__get();

      if (o != "") document.cookie = t.message("COOKIE_PREFIX") + "_LAST_SETTINGS=" + encodeURIComponent(o) + "&sessid=" + t.bitrix_sessid() + "; expires=Thu, 31 Dec 2020 23:59:59 GMT; path=/;";

      if (!t.userOptions.bSend) {
        t.userOptions.bSend = true;
        setTimeout(function () {
          t.userOptions.send(null);
        }, t.userOptions.delay);
      }
    };

    t.userOptions.send = function (e) {
      var r = t.userOptions.__get();

      t.userOptions.options = null;
      t.userOptions.bSend = false;

      if (r != "") {
        document.cookie = t.message("COOKIE_PREFIX") + "_LAST_SETTINGS=; path=/;";
        t.ajax({
          method: "GET",
          dataType: "html",
          processData: false,
          cache: false,
          url: t.userOptions.path + r + "&sessid=" + t.bitrix_sessid(),
          onsuccess: e
        });
      }
    };

    t.userOptions.del = function (e, r, n, i) {
      t.ajax.get(t.userOptions.path + "action=delete&c=" + e + "&n=" + r + (n == true ? "&common=Y" : "") + "&sessid=" + t.bitrix_sessid(), i);
    };

    t.userOptions.__get = function () {
      if (!t.userOptions.options) return "";
      var e = "",
          r = -1,
          n = "",
          i,
          a;

      for (a in t.userOptions.options) {
        if (t.userOptions.options.hasOwnProperty(a)) {
          i = t.userOptions.options[a];

          if (n != i[0] + "." + i[1]) {
            r++;
            e += "&p[" + r + "][c]=" + t.util.urlencode(i[0]);
            e += "&p[" + r + "][n]=" + t.util.urlencode(i[1]);
            if (i[4] == true) e += "&p[" + r + "][d]=Y";
            n = i[0] + "." + i[1];
          }

          var o = i[2];
          var s = i[3];

          if (o === null) {
            e += "&p[" + r + "][v]=" + t.util.urlencode(s);
          } else {
            e += "&p[" + r + "][v][" + t.util.urlencode(o) + "]=" + t.util.urlencode(s);
          }
        }
      }

      return e.substr(1);
    };

    t.ajax.history = {
      expected_hash: "",
      obParams: null,
      obFrame: null,
      obImage: null,
      obTimer: null,
      bInited: false,
      bHashCollision: false,
      bPushState: !!(history.pushState && t.type.isFunction(history.pushState)),
      startState: null,
      init: function init(r) {
        if (t.ajax.history.bInited) return;
        this.obParams = r;
        var n = this.obParams.getState();

        if (t.ajax.history.bPushState) {
          t.ajax.history.expected_hash = e.location.pathname;
          if (e.location.search) t.ajax.history.expected_hash += e.location.search;
          t.ajax.history.put(n, t.ajax.history.expected_hash, "", true);
          setTimeout(function () {
            t.bind(e, "popstate", t.ajax.history.__hashListener);
          }, 500);
        } else {
          t.ajax.history.expected_hash = e.location.hash;
          if (!t.ajax.history.expected_hash || t.ajax.history.expected_hash == "#") t.ajax.history.expected_hash = "__bx_no_hash__";
          c.put(t.ajax.history.expected_hash, n);
          t.ajax.history.obTimer = setTimeout(t.ajax.history.__hashListener, 500);

          if (t.browser.IsIE()) {
            t.ajax.history.obFrame = document.createElement("IFRAME");
            t.hide_object(t.ajax.history.obFrame);
            document.body.appendChild(t.ajax.history.obFrame);
            t.ajax.history.obFrame.contentWindow.document.open();
            t.ajax.history.obFrame.contentWindow.document.write(t.ajax.history.expected_hash);
            t.ajax.history.obFrame.contentWindow.document.close();
          } else if (t.browser.IsOpera()) {
            t.ajax.history.obImage = document.createElement("IMG");
            t.hide_object(t.ajax.history.obImage);
            document.body.appendChild(t.ajax.history.obImage);
            t.ajax.history.obImage.setAttribute("src", "javascript:location.href = 'javascript:BX.ajax.history.__hashListener();';");
          }
        }

        t.ajax.history.bInited = true;
      },
      __hashListener: function __hashListener(r) {
        r = r || e.event || {
          state: false
        };

        if (t.ajax.history.bPushState) {
          t.ajax.history.obParams.setState(r.state || t.ajax.history.startState);
        } else {
          if (t.ajax.history.obTimer) {
            e.clearTimeout(t.ajax.history.obTimer);
            t.ajax.history.obTimer = null;
          }

          var n;
          if (null != t.ajax.history.obFrame) n = t.ajax.history.obFrame.contentWindow.document.body.innerText;else n = e.location.hash;
          if (!n || n == "#") n = "__bx_no_hash__";
          if (n.indexOf("#") == 0) n = n.substring(1);

          if (n != t.ajax.history.expected_hash) {
            var i = c.get(n);

            if (i) {
              t.ajax.history.obParams.setState(i);
              t.ajax.history.expected_hash = n;

              if (null != t.ajax.history.obFrame) {
                var a = n == "__bx_no_hash__" ? "" : n;
                if (e.location.hash != a && e.location.hash != "#" + a) e.location.hash = a;
              }
            }
          }

          t.ajax.history.obTimer = setTimeout(t.ajax.history.__hashListener, 500);
        }
      },
      put: function put(r, n, i, a) {
        if (this.bPushState) {
          if (!a) {
            history.pushState(r, "", n);
          } else {
            t.ajax.history.startState = r;
          }
        } else {
          if (typeof i != "undefined") n = i;else n = "view" + n;
          c.put(n, r);
          t.ajax.history.expected_hash = n;
          e.location.hash = t.util.urlencode(n);

          if (null != t.ajax.history.obFrame) {
            t.ajax.history.obFrame.contentWindow.document.open();
            t.ajax.history.obFrame.contentWindow.document.write(n);
            t.ajax.history.obFrame.contentWindow.document.close();
          }
        }
      },
      checkRedirectStart: function checkRedirectStart(r, n) {
        var i = e.location.hash;
        if (i.substring(0, 1) == "#") i = i.substring(1);
        var a = i.substring(0, 5);

        if (a == "view/" || a == "view%") {
          t.ajax.history.bHashCollision = true;
          document.write("<" + 'div id="__ajax_hash_collision_' + n + '" style="display: none;">');
        }
      },
      checkRedirectFinish: function checkRedirectFinish(r, n) {
        document.write("</div>");
        var i = e.location.hash;
        if (i.substring(0, 1) == "#") i = i.substring(1);
        t.ready(function () {
          var e = i.substring(0, 5);

          if (e == "view/" || e == "view%") {
            var a = t("__ajax_hash_collision_" + n);
            var o = a.firstChild;
            t.cleanNode(o);
            a.style.display = "block";
            if (e != "view%") i = t.util.urlencode(i);
            i += (i.indexOf("%3F") == -1 ? "%3F" : "%26") + r + "=" + n;
            var s = "/bitrix/tools/ajax_redirector.php?hash=" + i;
            t.ajax.insertToNode(s, o);
          }
        });
      }
    };

    t.ajax.component = function (e) {
      this.node = e;
    };

    t.ajax.component.prototype.getState = function () {
      var r = {
        node: this.node,
        title: e.document.title,
        data: t(this.node).innerHTML
      };
      var n = t("navigation");
      if (null != n) r.nav_chain = n.innerHTML;
      t.onCustomEvent(t(r.node), "onComponentAjaxHistoryGetState", [r]);
      return r;
    };

    t.ajax.component.prototype.setState = function (e) {
      t(e.node).innerHTML = e.data;
      t.ajax.UpdatePageTitle(e.title);

      if (e.nav_chain) {
        t.ajax.UpdatePageNavChain(e.nav_chain);
      }

      t.onCustomEvent(t(e.node), "onComponentAjaxHistorySetState", [e]);
    };

    var c = {
      arHistory: {},
      put: function put(e, t) {
        this.arHistory[e] = t;
      },
      get: function get(e) {
        return this.arHistory[e];
      }
    };

    t.ajax.FormData = function () {
      this.elements = [];
      this.files = [];
      this.features = {};
      this.isSupported();
      this.log("BX FormData init");
    };

    t.ajax.FormData.isSupported = function () {
      var e = new t.ajax.FormData();
      var r = e.features.supported;
      e = null;
      return r;
    };

    t.ajax.FormData.prototype.log = function (e) {
      if (false) {}
    };

    t.ajax.FormData.prototype.isSupported = function () {
      var t = {};
      t.fileReader = e.FileReader && e.FileReader.prototype.readAsBinaryString;
      t.readFormData = t.sendFormData = !!e.FormData;
      t.supported = !!(t.readFormData && t.sendFormData);
      this.features = t;
      this.log("features:");
      this.log(t);
      return t.supported;
    };

    t.ajax.FormData.prototype.append = function (e, t) {
      if (_typeof(t) === "object") {
        this.files.push({
          name: e,
          value: t
        });
      } else {
        this.elements.push({
          name: e,
          value: t
        });
      }
    };

    t.ajax.FormData.prototype.send = function (e, r, n, i) {
      this.log("FD send");
      this.xhr = t.ajax({
        method: "POST",
        dataType: "html",
        url: e,
        onsuccess: r,
        onfailure: i,
        start: false,
        preparePost: false
      });

      if (n) {
        this.xhr.upload.addEventListener("progress", function (e) {
          if (e.lengthComputable) n(e.loaded / (e.total || e.totalSize));
        }, false);
      }

      if (this.features.readFormData && this.features.sendFormData) {
        var a = new FormData();
        this.log("use browser formdata");

        for (var o in this.elements) {
          if (this.elements.hasOwnProperty(o)) a.append(this.elements[o].name, this.elements[o].value);
        }

        for (o in this.files) {
          if (this.files.hasOwnProperty(o)) a.append(this.files[o].name, this.files[o].value);
        }

        this.xhr.send(a);
      }

      return this.xhr;
    };

    t.addCustomEvent("onAjaxFailure", t.debug);
  })(window);

  (function (e) {
    "use strict";

    var t = {
      images: [],
      imageStatus: {
        hidden: -2,
        error: -1,
        undefined: 0,
        inited: 1,
        loaded: 2
      },
      imageTypes: {
        image: 1,
        background: 2
      },
      registerImage: function e(t, r, n) {
        n = n || {};

        if (BX.type.isNotEmptyString(t)) {
          this.images.push({
            id: t,
            node: null,
            src: null,
            dataSrcName: n.dataSrcName || "src",
            type: null,
            func: BX.type.isFunction(r) ? r : null,
            status: this.imageStatus.undefined
          });
        }
      },
      registerImages: function e(t, r, n) {
        if (BX.type.isArray(t)) {
          for (var i = 0, a = t.length; i < a; i++) {
            this.registerImage(t[i], r, n);
          }
        }
      },
      showImages: function e(t) {
        var r = null;
        var n = false;
        t = t !== false;

        for (var i = 0, a = this.images.length; i < a; i++) {
          r = this.images[i];

          if (r.status == this.imageStatus.undefined) {
            this.initImage(r);
          }

          if (r.status !== this.imageStatus.inited) {
            continue;
          }

          if (!r.node || !r.node.parentNode) {
            r.node = null;
            r.status = this.imageStatus.error;
            continue;
          }

          n = true;

          if (t && r.func) {
            n = r.func(r);
          }

          if (n === true && this.isElementVisibleOnScreen(r.node)) {
            if (r.type == this.imageTypes.image) {
              r.node.src = r.src;
            } else {
              r.node.style.backgroundImage = "url('" + r.src + "')";
            }

            r.node.dataset[r.dataSrcName] = "";
            r.status = this.imageStatus.loaded;
          }
        }
      },
      initImage: function e(t) {
        t.status = this.imageStatus.error;
        var r = BX(t.id);

        if (r) {
          var n = r.dataset[t.dataSrcName];

          if (BX.type.isNotEmptyString(n)) {
            t.node = r;
            t.src = n;
            t.status = this.imageStatus.inited;
            t.type = t.node.tagName.toLowerCase() == "img" ? this.imageTypes.image : this.imageTypes.background;
          }
        }
      },
      isElementVisibleOnScreen: function e(t) {
        var r = this.getElementCoords(t);
        var n = window.pageYOffset || document.documentElement.scrollTop;
        var i = n + document.documentElement.clientHeight;
        r.bottom = r.top + t.offsetHeight;
        var a = r.top > n && r.top < i;
        var o = r.bottom < i && r.bottom > n;
        return a || o;
      },
      isElementVisibleOn2Screens: function e(t) {
        var r = this.getElementCoords(t);
        var n = document.documentElement.clientHeight;
        var i = window.pageYOffset || document.documentElement.scrollTop;
        var a = i + n;
        r.bottom = r.top + t.offsetHeight;
        i -= n;
        a += n;
        var o = r.top > i && r.top < a;
        var s = r.bottom < a && r.bottom > i;
        return o || s;
      },
      getElementCoords: function e(t) {
        var r = t.getBoundingClientRect();
        return {
          originTop: r.top,
          originLeft: r.left,
          top: r.top + window.pageYOffset,
          left: r.left + window.pageXOffset
        };
      },
      onScroll: function e() {
        BX.LazyLoad.showImages();
      },
      clearImages: function e() {
        this.images = [];
      }
    };
    e.LazyLoad = t;
  })(this.BX = this.BX || {});

  (function (e) {
    "use strict";

    var t = function () {
      function e() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        babelHelpers.classCallCheck(this, e);

        if (!!t && babelHelpers.typeof(t) === "object") {
          this.params = new Map(Object.entries(t));
        } else {
          this.params = new Map();
        }
      }

      babelHelpers.createClass(e, [{
        key: "getParam",
        value: function e(t) {
          var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

          if (this.params.has(t)) {
            return this.params.get(t);
          }

          return r;
        }
      }, {
        key: "setParam",
        value: function e(t, r) {
          this.params.set(t, r);
        }
      }, {
        key: "clear",
        value: function e() {
          this.params.clear();
        }
      }], [{
        key: "create",
        value: function t() {
          var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return new e(r);
        }
      }]);
      return e;
    }();

    e.ParamBag = t;
  })(this.BX = this.BX || {});

  (function () {
    BX.FixFontSize = function (e) {
      var t, r, n;
      this.node = null;
      this.prevWindowSize = 0;
      this.prevWrapperSize = 0;
      this.mainWrapper = null;
      this.textWrapper = null;
      this.objList = e.objList;
      this.minFontSizeList = [];
      this.minFontSize = 0;

      if (e.onresize) {
        this.prevWindowSize = window.innerWidth || document.documentElement.clientWidth;
        BX.bind(window, "resize", BX.proxy(BX.throttle(this.onResize, 350), this));
      }

      if (e.onAdaptiveResize) {
        t = this.objList[0].scaleBy || this.objList[0].node;
        r = getComputedStyle(t);
        this.prevWrapperSize = parseInt(r["width"]) - parseInt(r["paddingLeft"]) - parseInt(r["paddingRight"]);
        BX.bind(window, "resize", BX.proxy(BX.throttle(this.onAdaptiveResize, 350), this));
      }

      this.createTestNodes();
      this.decrease();
    };

    BX.FixFontSize.prototype = {
      createTestNodes: function createTestNodes() {
        this.textWrapper = BX.create("div", {
          style: {
            display: "inline-block",
            whiteSpace: "nowrap"
          }
        });
        this.mainWrapper = BX.create("div", {
          style: {
            height: 0,
            overflow: "hidden"
          },
          children: [this.textWrapper]
        });
      },
      insertTestNodes: function insertTestNodes() {
        document.body.appendChild(this.mainWrapper);
      },
      removeTestNodes: function removeTestNodes() {
        document.body.removeChild(this.mainWrapper);
      },
      decrease: function decrease() {
        var e, t, r, n;
        this.insertTestNodes();

        for (var i = this.objList.length - 1; i >= 0; i--) {
          r = this.objList[i].scaleBy || this.objList[i].node;
          n = getComputedStyle(r);
          e = parseInt(n["width"]) - parseInt(n["paddingLeft"]) - parseInt(n["paddingRight"]);
          t = parseInt(getComputedStyle(this.objList[i].node)["font-size"]);
          this.textWrapperSetStyle(this.objList[i].node);

          if (this.textWrapperInsertText(this.objList[i].node)) {
            while (this.textWrapper.offsetWidth > e && t > 0) {
              this.textWrapper.style.fontSize = --t + "px";
            }

            if (this.objList[i].smallestValue) {
              this.minFontSize = this.minFontSize ? Math.min(this.minFontSize, t) : t;
              this.minFontSizeList.push(this.objList[i].node);
            } else {
              this.objList[i].node.style.fontSize = t + "px";
            }
          }
        }

        if (this.minFontSizeList.length > 0) this.setMinFont();
        this.removeTestNodes();
      },
      increase: function increase() {
        this.insertTestNodes();
        var e, t, r, n;
        this.insertTestNodes();

        for (var i = this.objList.length - 1; i >= 0; i--) {
          r = this.objList[i].scaleBy || this.objList[i].node;
          n = getComputedStyle(r);
          e = parseInt(n["width"]) - parseInt(n["paddingLeft"]) - parseInt(n["paddingRight"]);
          t = parseInt(getComputedStyle(this.objList[i].node)["font-size"]);
          this.textWrapperSetStyle(this.objList[i].node);

          if (this.textWrapperInsertText(this.objList[i].node)) {
            while (this.textWrapper.offsetWidth < e && t < this.objList[i].maxFontSize) {
              this.textWrapper.style.fontSize = ++t + "px";
            }

            t--;

            if (this.objList[i].smallestValue) {
              this.minFontSize = this.minFontSize ? Math.min(this.minFontSize, t) : t;
              this.minFontSizeList.push(this.objList[i].node);
            } else {
              this.objList[i].node.style.fontSize = t + "px";
            }
          }
        }

        if (this.minFontSizeList.length > 0) this.setMinFont();
        this.removeTestNodes();
      },
      setMinFont: function setMinFont() {
        for (var e = this.minFontSizeList.length - 1; e >= 0; e--) {
          this.minFontSizeList[e].style.fontSize = this.minFontSize + "px";
        }

        this.minFontSize = 0;
      },
      onResize: function onResize() {
        var e = window.innerWidth || document.documentElement.clientWidth;
        if (this.prevWindowSize > e) this.decrease();else if (this.prevWindowSize < e) this.increase();
        this.prevWindowSize = e;
      },
      onAdaptiveResize: function onAdaptiveResize() {
        var e = this.objList[0].scaleBy || this.objList[0].node,
            t = getComputedStyle(e),
            r = parseInt(t["width"]) - parseInt(t["paddingLeft"]) - parseInt(t["paddingRight"]);
        if (this.prevWrapperSize > r) this.decrease();else if (this.prevWrapperSize < r) this.increase();
        this.prevWrapperSize = r;
      },
      textWrapperInsertText: function textWrapperInsertText(e) {
        if (e.textContent) {
          this.textWrapper.textContent = e.textContent;
          return true;
        } else if (e.innerText) {
          this.textWrapper.innerText = e.innerText;
          return true;
        } else {
          return false;
        }
      },
      textWrapperSetStyle: function textWrapperSetStyle(e) {
        this.textWrapper.style.fontFamily = getComputedStyle(e)["font-family"];
        this.textWrapper.style.fontSize = getComputedStyle(e)["font-size"];
        this.textWrapper.style.fontStyle = getComputedStyle(e)["font-style"];
        this.textWrapper.style.fontWeight = getComputedStyle(e)["font-weight"];
        this.textWrapper.style.lineHeight = getComputedStyle(e)["line-height"];
      }
    };

    BX.FixFontSize.init = function (e) {
      return new BX.FixFontSize(e);
    };
  })();
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ })

}]);