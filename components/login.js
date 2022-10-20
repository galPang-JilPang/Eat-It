"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _createElement = _interopRequireDefault(require("../utils/createElement.js"));
var _sign = require("../utils/sign.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Login = function Login() {
  return (0, _createElement["default"])("\n    <div class=\"auth-wrapper\">\n      <div id=\"login\">\n        <ul class=\"class-toggle\">\n          <li class=\"signin active\"><a href=\"/login\">\uB85C\uADF8\uC778</a></li>\n          <li class=\"signup\"><a href=\"/register\">\uD68C\uC6D0\uAC00\uC785</a></li>\n        </ul>\n      <form id=\"signin\" class=\"signin-form\">\n\n        <label for=\"userid\">\uC774\uBA54\uC77C</label>\n        <input type=\"email\" name=\"userid\" autocomplete=\"off\" />\n        <div class=\"error-userid\"></div>\n        <label for=\"password\">\uBE44\uBC00\uBC88\uD638</label>\n        <input type=\"password\" name=\"password\" autocomplete=\"off\" />\n        <div class=\"error-password\"></div>\n        <div class=\"error-message\"></div>\n        <a href=\"/\" class=\"signin-btn\">\uB85C\uADF8\uC778</a>\n      </form>\n    </div>\n  </div>\n");
};
window.addEventListener('click', _sign.toggleNav);
window.addEventListener('input', _sign.validate);
window.addEventListener('click', _sign.submit);
var _default = Login;
exports["default"] = _default;