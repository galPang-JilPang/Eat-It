"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _createElement = _interopRequireDefault(require("../utils/createElement.js"));
var _render = _interopRequireDefault(require("../utils/render.js"));
var _route = _interopRequireDefault(require("../utils/route.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Welcome = function Welcome() {
  return (0, _createElement["default"])("\n  <div id=\"welcome\">\n  <p class=\"welcome-emoji\">\uD83C\uDF89</p>\n  <p class=\"welcome-message\">\uAC00\uC785\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!</p>\n    <a href=\"/login\" class=\"login-btn\">\uB85C\uADF8\uC778 \uD558\uAE30</a>\n    </div>\n");
};
window.addEventListener('click', function (e) {
  if (!e.target.matches('.login-btn')) return;
  (0, _render["default"])((0, _route["default"])(e));
});
var _default = Welcome;
exports["default"] = _default;