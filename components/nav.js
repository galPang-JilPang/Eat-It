"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _render = _interopRequireDefault(require("../utils/render.js"));
var _route = _interopRequireDefault(require("../utils/route.js"));
var _sign = require("../utils/sign.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Nav = function Nav() {
  return window.localStorage.getItem('username') ? "<nav>\n      <div class=\"nav-wrapper\">\n      <a href=\"/\"><img class=\"logo-img\" src=\"../src/logo.png\"></a>\n      <ul>\n        <li class=\"pconly\"><a href=\"/\">\uD22C\uD45C \uBAA9\uB85D</a></li>\n        <li><a href=\"/add\">\uD22C\uD45C \uCD94\uAC00</a></li>\n        <li class=\"user\">".concat(localStorage.getItem('username').split('@')[0], "\uB2D8</li>\n        ").concat(localStorage.getItem('username') ? "<li class=\"logout\">\n                <a href=\"/login\">\uB85C\uADF8\uC544\uC6C3</a>\n              </li>" : '', "\n      </ul>\n      </div>\n    </nav>\n  ") : "<nav>\n    <div class=\"nav-wrapper\">\n    <a href=\"/\"><img class=\"logo-img\" src=\"../src/logo.png\"></a>\n    <ul>\n      <li><a href=\"/add\">\uC0C8\uB85C\uC6B4 \uD22C\uD45C \uB9CC\uB4E4\uAE30</a></li>\n    </ul>\n    </div>\n  </nav>";
};
window.addEventListener('click', function (e) {
  if (!e.target.matches('nav > ul > li > a')) return;
  (0, _render["default"])((0, _route["default"])(e));
});
window.addEventListener('click', _sign.logout);
var _default = Nav;
exports["default"] = _default;