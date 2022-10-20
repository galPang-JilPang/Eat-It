"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = exports.toggleNav = exports.submitExpress = exports.submit = exports.logoutExpress = exports.logout = void 0;
var _firebase = require("./firebase.js");
var _route = _interopRequireDefault(require("./route.js"));
var _index = _interopRequireDefault(require("../index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
// signin, signup에서 공통으로 사용하는 로직
var signinState = {
  userid: {
    value: '',
    get valid() {
      return this.value && /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(this.value);
    },
    error: '이메일 형식에 맞게 입력해 주세요.'
  },
  password: {
    value: '',
    get valid() {
      return /^[A-Za-z0-9]{6,12}$/.test(this.value);
    },
    error: '영문 또는 숫자를 6~12자 입력하세요.'
  },
  get valid() {
    return this.userid.valid && this.password.valid;
  },
  error: '이메일과 비밀번호가 일치하지 않습니다. 다시 입력해주세요.'
};
var signupState = _objectSpread(_objectSpread({}, signinState), {}, {
  'confirm-password': {
    value: '',
    get valid() {
      return signupState.password.valid && signinState.password.value === this.value;
    },
    error: '패스워드가 일치하지 않습니다.'
  },
  get valid() {
    return this.userid.valid && this.password.valid && signupState['confirm-password'].valid;
  },
  error: '유효하지 않은 정보입니다. 다시 입력해주세요.'
});
var currentPage = 'signin';
var currentState = signinState;
var setCurrentPage = function setCurrentPage(page) {
  if (currentPage === page) return;
  currentPage = page;
  currentState = page === 'signin' ? signinState : signupState;
};
var toggleNav = function toggleNav(e) {
  if (!e.target.closest(".class-toggle > .signin") && !e.target.closest(".class-toggle > .signup")) return;
  e.preventDefault();
  var isSigninPage = e.target.closest('li').classList.contains('signin');
  setCurrentPage(isSigninPage ? 'signin' : 'signup');
  _toConsumableArray(document.querySelectorAll('.class-toggle > li')).forEach(function ($li) {
    return $li.classList.toggle('active');
  });
  (0, _index["default"])((0, _route["default"])(e));
};
exports.toggleNav = toggleNav;
var activateButton = function activateButton() {
  document.querySelector(".".concat(currentPage, "-btn")).classList.toggle('active', currentState.valid);
};
var validate = _.debounce(function (e) {
  var _currentState$confirm;
  if (!e.target.matches(".signin-form > input") && !e.target.matches(".signup-form > input")) return;
  setCurrentPage(e.target.closest('form').id);
  var _e$target = e.target,
    name = _e$target.name,
    value = _e$target.value;
  currentState[name].value = value.trim();
  document.querySelector(".error-".concat(name)).textContent = currentState[name].value && !currentState[name].valid ? currentState[name].error : '';
  if (name === 'password' && (_currentState$confirm = currentState['confirm-password']) !== null && _currentState$confirm !== void 0 && _currentState$confirm.value) {
    var _currentState$confirm2;
    document.querySelector(".error-confirm-password").textContent = currentState['confirm-password'].value && !((_currentState$confirm2 = currentState['confirm-password']) !== null && _currentState$confirm2 !== void 0 && _currentState$confirm2.valid) ? currentState['confirm-password'].error : '';
  }
  activateButton();
}, 300);

/* 로그인해야 접근할 수 있는 페이지에서 사용할 request */
exports.validate = validate;
var authRequest = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var _auth$currentUser;
    var firebaseUserIdToken, response;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (_auth$currentUser = _firebase.auth.currentUser) === null || _auth$currentUser === void 0 ? void 0 : _auth$currentUser.getIdToken(true);
          case 2:
            firebaseUserIdToken = _context.sent;
            _context.next = 5;
            return fetch('/api/hello', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + firebaseUserIdToken
              }
            });
          case 5:
            response = _context.sent;
          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function authRequest() {
    return _ref.apply(this, arguments);
  };
}();
var submit = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
    var res, _res;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(!e.target.matches('.signin-btn') && !e.target.matches('.signup-btn'))) {
              _context2.next = 2;
              break;
            }
            return _context2.abrupt("return");
          case 2:
            e.preventDefault();
            _context2.prev = 3;
            if (!(currentPage === 'signin')) {
              _context2.next = 10;
              break;
            }
            _context2.next = 7;
            return _firebase.auth.signInWithEmailAndPassword(signinState.userid.value, signinState.password.value);
          case 7:
            res = _context2.sent;
            localStorage.setItem('username', signinState.userid.value);
            (0, _index["default"])((0, _route["default"])(e));
          case 10:
            if (!(currentPage === 'signup')) {
              _context2.next = 16;
              break;
            }
            _context2.next = 13;
            return _firebase.auth.createUserWithEmailAndPassword(signupState.userid.value, signupState.password.value);
          case 13:
            _res = _context2.sent;
            _firebase.db.collection('users').doc("".concat(signupState.userid.value)).set({});
            (0, _index["default"])((0, _route["default"])(e));
          case 16:
            _context2.next = 23;
            break;
          case 18:
            _context2.prev = 18;
            _context2.t0 = _context2["catch"](3);
            console.error(_context2.t0);
            document.querySelector(".".concat(currentPage, "-form .error-message")).textContent = currentState.error;
            document.querySelector(".".concat(currentPage, "-btn")).classList.remove('active');
          case 23:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 18]]);
  }));
  return function submit(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* express를 사용해서 구현한 방법 */
exports.submit = submit;
var submitExpress = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(e) {
    var payload, res, response;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(!e.target.matches('.signin-btn') && !e.target.matches('.signup-btn'))) {
              _context3.next = 2;
              break;
            }
            return _context3.abrupt("return");
          case 2:
            e.preventDefault();
            _context3.prev = 3;
            payload = {};
            Object.keys(currentState).filter(function (name) {
              return name !== 'valid';
            }).forEach(function (key) {
              payload[key] = currentState[key].value;
            });
            _context3.next = 8;
            return axios.post("/api/".concat(currentPage), payload);
          case 8:
            res = _context3.sent;
            if (res.status === 200) {
              console.log("".concat(res.data.userid, " \uC131\uACF5~!"));
              (0, _index["default"])((0, _route["default"])(e));
            }
            _context3.next = 17;
            break;
          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](3);
            response = _context3.t0.response;
            if (response.status === 400) {
              console.log(response.data);
            }
            console.error(_context3.t0);
          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[3, 12]]);
  }));
  return function submitExpress(_x2) {
    return _ref3.apply(this, arguments);
  };
}();
exports.submitExpress = submitExpress;
var logout = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(e) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (e.target.closest('.logout')) {
              _context4.next = 2;
              break;
            }
            return _context4.abrupt("return");
          case 2:
            _context4.prev = 2;
            _context4.next = 5;
            return _firebase.auth.signOut();
          case 5:
            localStorage.removeItem('username');
            (0, _index["default"])((0, _route["default"])(e));
            _context4.next = 12;
            break;
          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](2);
            console.error(_context4.t0);
          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 9]]);
  }));
  return function logout(_x3) {
    return _ref4.apply(this, arguments);
  };
}();
exports.logout = logout;
var logoutExpress = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(e) {
    var res;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            if (e.target.closest('.logout')) {
              _context5.next = 2;
              break;
            }
            return _context5.abrupt("return");
          case 2:
            _context5.prev = 2;
            _context5.next = 5;
            return axios.post("/api/logout");
          case 5:
            res = _context5.sent;
            localStorage.removeItem('username');
            (0, _index["default"])((0, _route["default"])(e));
            _context5.next = 13;
            break;
          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](2);
            console.log(_context5.t0);
          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 10]]);
  }));
  return function logoutExpress(_x4) {
    return _ref5.apply(this, arguments);
  };
}();
exports.logoutExpress = logoutExpress;