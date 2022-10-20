"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var renderSelectedStoreList = function renderSelectedStoreList(selectedStoreList) {
  // prettier-ignore
  document.querySelector('#menu_voted').innerHTML = "\n    ".concat(selectedStoreList < 1 ? "\n      <div class=\"empty-store\">\n        \uD22C\uD45C\uD560 \uC74C\uC2DD\uC810\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.\n\n        \uC74C\uC2DD\uC810\uC744 \uCD94\uAC00\uD574\uC8FC\uC138\uC694.\n      </div>\n      " : selectedStoreList.map(function (_ref) {
    var id = _ref.id,
      title = _ref.title,
      description = _ref.description,
      tel = _ref.tel,
      thumbnails = _ref.thumbnails;
    return "\n      <li id=".concat(id, ">\n        <div class=\"store-name\">").concat(title, "</div>\n        <div class=\"store-description\">").concat(description, "</div>\n        <span class=\"tel\">").concat(tel, "</span>\n        <button class=\"remove-btn\">\uC0AD\uC81C\uD558\uAE30</button>\n        <div class=\"store-images\">\n        ").concat(thumbnails.map(function (thumbnail) {
      return "<div class=\"store-image\" style=\"background-image:url(".concat(thumbnail, ");background-size: contain;\"></div>");
    }).join(''), "\n        </div>\n      </li>");
  }).join(''), "\n  ");
};
var _default = renderSelectedStoreList;
exports["default"] = _default;