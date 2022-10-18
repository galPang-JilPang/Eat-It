import createElement from '../utils/createElement.js';
import { db } from '../utils/firebase.js';
import { searchPlaces } from '../utils/kakaomap.js';
import route from '../utils/route.js';
import render from '../utils/render.js';
import renderSelectedStoreList from './renderSelectedStoreList.js';
import appendKakaoApi from '../utils/kakaoapi.js';
const makeVoteList = params => {
  let selectedStoreList = [];
  if (window.kakao) searchPlaces();
  else {
    window.addEventListener('load', () => {
      searchPlaces();
    });
  }
  window.addEventListener('submit', e => {
    if (!e.target.matches('#store-keyword')) return;
    e.preventDefault();
    searchPlaces();
  });

  window.addEventListener('click', async e => {
    if (!e.target.matches('.add-store')) return;

    const $store = e.target.closest('li');
    const selectedStore = {
      countVote: 0,
      id: $store.className.split('-')[1],
      title: $store.querySelector('.store-name').textContent,
      description: $store.querySelector('.store-description').textContent,
      tel: $store.querySelector('.tel').textContent,
      thumbnails: [...$store.querySelectorAll('.store-image')].map($store =>
        $store.style.backgroundImage.slice(4, -1).replace(/"/g, '')
      ),
      x: $store.querySelector('.x').textContent,
      y: $store.querySelector('.y').textContent,
    };

    selectedStoreList = [...selectedStoreList, selectedStore];

    e.target.disabled = true;
  });

  window.addEventListener('click', async e => {
    if (e.target.matches('.map-home')) {
      document.querySelector('#menu_voted').style.display = 'none';
      document.querySelector('#menu_wrap').style.display = 'block';
      document.querySelector('.map-home').classList.add('active');
      document.querySelector('.map-list').classList.remove('active');
      renderSelectedStoreList(selectedStoreList);
    }
    if (e.target.matches('.map-list')) {
      document.querySelector('#menu_voted').style.display = 'block';
      document.querySelector('#menu_wrap').style.display = 'none';
      document.querySelector('.map-home').classList.remove('active');
      document.querySelector('.map-list').classList.add('active');
      renderSelectedStoreList(selectedStoreList);
    }
    if (e.target.matches('.remove-btn')) {
      selectedStoreList = selectedStoreList.filter(store => store.id !== e.target.closest('li').id);
      renderSelectedStoreList(selectedStoreList);

      const targetId = e.target.closest('li').id;
      document.querySelector(`li.item-${targetId}`).querySelector('.add-store').disabled = false;
    }
    if (e.target.matches('.total-submit-btn')) {
      e.preventDefault();
      const voteItem = await db.collection('votes').doc(params);
      voteItem.update({ stores: firebase.firestore.FieldValue.arrayUnion(...selectedStoreList) });
      render(route(e));
    }
  });

  return createElement(`
    <div class="map_wrap">
    <ul class="map-sidebar">
      <li>
        <button class="map-home active">
          지도 홈
        </button>
      </li>
      <li>
        <button class="map-list">
          투표 목록
        </button>
      </li>
      <li>
      <a href="/home" class="total-submit-btn">투표 완료</a>

      </li>
    </ul>
        <div id="map" ></div>
        <div id="menu_wrap" style="display: flex">
          <div id="menu_select" class="bg_white">
            <div class="option">
              <div>
                <form id="store-keyword">
                  <input type="text" id="keyword" size="15" value="강남역 맛집"/>
                  <button type="submit"></button>
                </form>
              </div>
            </div>

            <ul id="placesList"></ul>
            <div id="pagination"></div>
          </div>
          <div id="store-detail"></div>
        </div>
        <div id="menu_voted" style="display:none;">
          투표할 음식점이 없습니다. 음식점을 추가해주세요.
        </div>
      </div>
`);
};

export default makeVoteList;
