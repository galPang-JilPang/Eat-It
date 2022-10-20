"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var createElement = function createElement(domString) {
  var $temp = document.createElement('template');
  $temp.innerHTML = domString;
  return $temp.content;
};
var _default = createElement;
exports["default"] = _default;