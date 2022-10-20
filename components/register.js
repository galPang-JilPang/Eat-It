"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _createElement = _interopRequireDefault(require("../utils/createElement.js"));
var _sign = require("../utils/sign.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Register = function Register() {
  return (0, _createElement["default"])("\n  <div class=\"auth-wrapper\">\n    <div id=\"register\">\n      <ul class=\"class-toggle\">\n        <li class=\"signin\"><a href=\"/login\">\uB85C\uADF8\uC778</a></li>\n        <li class=\"signup active\"><a href=\"/register\">\uD68C\uC6D0\uAC00\uC785</a></li>\n      </ul>\n\n    <form id=\"signup\" class=\"signup-form\">\n      <label for=\"userid\">\uC774\uBA54\uC77C</label>\n      <input type=\"email\" name=\"userid\" autocomplete=\"off\" />\n      <div class=\"error-userid\"></div>\n      <label for=\"password\">\uBE44\uBC00\uBC88\uD638</label>\n      <input type=\"password\" name=\"password\" autocomplete=\"off\" />\n      <div class=\"error-password\"></div>\n      <label for=\"confirm-password\">\uBE44\uBC00\uBC88\uD638 \uD655\uC778</label>\n      <input type=\"password\" name=\"confirm-password\" autocomplete=\"off\" />\n      <div class=\"error-confirm-password\"></div>\n      <div class=\"error-message\"></div>\n      <a href=\"/welcome\" class=\"signup-btn\">\uD68C\uC6D0\uAC00\uC785</a>\n    </form>\n    </div>\n  </div>\n");
};
window.addEventListener('click', _sign.toggleNav);
window.addEventListener('input', _sign.validate);
window.addEventListener('click', _sign.submit);
var _default = Register;
exports["default"] = _default;