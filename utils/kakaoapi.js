"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var appendKakaoApi = function appendKakaoApi() {
  var script = document.createElement('script');
  script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=c8627785e5fed8e94625831777adf1ea&libraries=services&autoload=false';
  document.head.appendChild(script);
};
var _default = appendKakaoApi;
exports["default"] = _default;