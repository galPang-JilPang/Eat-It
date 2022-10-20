"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function marker(stores) {
  var positions = stores.map(function (_ref) {
    var title = _ref.title,
      x = _ref.x,
      y = _ref.y;
    return {
      title: title,
      latlng: new kakao.maps.LatLng(y, x)
    };
  });
  var mapContainer = document.getElementById('map'),
    mapOption = {
      center: new kakao.maps.LatLng(stores[0].y, stores[0].x),
      level: 3
    };
  var map = new kakao.maps.Map(mapContainer, mapOption);
  var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';
  for (var i = 0; i < positions.length; i++) {
    var imageSize = new kakao.maps.Size(24, 35);
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
    var marker = new kakao.maps.Marker({
      map: map,
      position: positions[i].latlng
    });
    var customOverlay = new kakao.maps.CustomOverlay({
      position: positions[i].latlng,
      content: "<div style=\"    border: 1px solid #292929;padding:0.5rem;background:white;margin-bottom:150px;\">".concat(positions[i].title, "</div>")
    });
    customOverlay.setMap(map);
  }
  console.log(document.querySelectorAll('.info-window').forEach(function (window) {
    return console.log(window.parentElement.parentElement.style.width);
  }));
}
var _default = marker;
exports["default"] = _default;