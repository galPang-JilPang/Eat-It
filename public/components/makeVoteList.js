import createElement from '../utils/createElement.js';
import { db } from '../utils/firebase.js';
import { searchPlaces } from '../utils/kakaomap.js';
import route from '../utils/route.js';
import render from '../utils/render.js';
import renderSelectedStoreList from './renderSelectedStoreList.js';

const makeVoteList = params => {
  let selectedStoreList = [];

  window.addEventListener('load', () => {
    // searchPlaces();
    window.addEventListener('submit', e => {
      if (!e.target.matches('#store-keyword')) return;
      e.preventDefault();
      searchPlaces();
    });
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
    };

    selectedStoreList = [...selectedStoreList, selectedStore];

    e.target.disabled = true;
  });

  window.addEventListener('click', async e => {
    if (e.target.matches('.map-home')) {
      document.querySelector('#menu_voted').style.display = 'none';
      document.querySelector('#menu_wrap').style.display = 'block';
      renderSelectedStoreList(selectedStoreList);
    }
    if (e.target.matches('.map-list')) {
      document.querySelector('#menu_voted').style.display = 'block';
      document.querySelector('#menu_wrap').style.display = 'none';

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
  // window.addEventListener('beforeunload', () => {
  //   console.log(db.collection('votes').doc(params));
  // if (isSubmitted) return;
  // db.collection('votes').doc(params).delete();
  // });
  // window.addEventListener('click', e => {
  //   if (!e.target.matches('.map-home')) return;

  //   document.querySelector('#store-detail').style.display = 'none';
  //   document.querySelector('#menu_select').style.display = 'block';

  //   renderSelectedStoreList();
  // });

  // window.addEventListener('click', e => {
  //   if (!e.target.matches('.map-list')) return;

  //   document.querySelector('#store-detail').style.display = 'block';
  //   document.querySelector('#menu_select').style.display = 'none';

  //   renderSelectedStoreList();
  // });

  // window.addEventListener('click', e => {
  //   if (!e.target.matches('.remove-btn')) return;
  //   selectedStoreList = selectedStoreList.filter(store => store.id !== e.target.closest('li').id);

  //   renderSelectedStoreList();
  // });

  // window.addEventListener('click', async e => {
  //   if (!e.target.matches('.total-submit-btn')) return;

  //   e.preventDefault();

  //   const voteItem = await db
  //     .collection('votes')
  //     .where('id', '==', params)
  //     .update({ stores: firebase.firestore.FieldValue.arrayUnion(...selectedStoreList) });

  // const uuid = await db.collection('votes').doc();

  // uuid.set({
  //   stores: firebase.firestore.FieldValue.arrayUnion(...selectedStoreList),
  //   owner: user,
  //   id: uuid.id,
  // });

  // db.collection('users').doc(user).collection('voteList').doc(uuid.id).set({});

  // render(route(e));
  // });

  return createElement(`
    <div class="map_wrap">
    <ul class="map-sidebar">
      <li>
        <button class="map-home">
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
        <div id="menu_voted" style="display:none;"></div>
      </div>
`);
};

export default makeVoteList;
