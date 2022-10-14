import createElement from '../utils/createElement.js';
import { searchPlaces } from '../utils/kakaomap.js';

const makeVoteList = () => {
  const script = document.createElement('script');
  script.src =
    '//dapi.kakao.com/v2/maps/sdk.js?appkey=c8627785e5fed8e94625831777adf1ea&libraries=services&autoload=false';
  document.head.appendChild(script);
  window.addEventListener('load', () => {
    window.addEventListener('submit', e => {
      e.preventDefault();
      searchPlaces();
    });
  });
  return createElement(`
    <div class="map_wrap">
      <div
        id="map"
        style="width: 100%; height: 100%; position: relative; overflow: hidden"
      ></div>
      <div id="menu_wrap" style="display: flex">
        <div id="menu_select" class="bg_white">
          <div class="option">
            <div>
              <form id="store-keyword">
                키워드 :
                <input type="text" id="keyword" size="15" />
                <button type="submit">검색하기</button>
              </form>
            </div>
          </div>
          <hr />
          <ul id="placesList"></ul>
          <div id="pagination"></div>
        </div>
        <div id="store-detail"></div>
      </div>
    </div>
    <div id="selected-stores" style="display: flex">
      <div>저장목록</div>
      <a href="/home" class="total-submit-btn">투표완료</a>
      <hr />
      <ul id="placeList"></ul>
    </div>
`);
};

export default makeVoteList;
