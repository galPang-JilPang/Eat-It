import createElement from '../utils/createElement.js';
import { db } from '../utils/firebase.js';
import appendKakaoApi from '../utils/kakaoapi.js';
import { searchPlaces } from '../utils/kakaomap.js';
import Nav from './nav.js';
// prettier-ignore
const Voting = async params => {

  const selectOnlyOne = $input => {
    [...document.querySelectorAll('.voting-btn')].forEach(checkbox => {
      checkbox.checked = checkbox === $input;
    });
  };

  const getVoteItem = async id => {
    /*
      voteItem의 id 값을 params로 전달받습니다.
      로그인한 사용자의 voteList에서 params로 받은 id값으로 voteItem을 가져옵니다.
    */
    const user = localStorage.getItem('username');
    const doc = await db.collection('votes').where("id", "==", id).get();
    let voteItem = {}
    doc.forEach(docs => {
      voteItem = docs.data();
    })
    return voteItem
  }

  const domStr = voteItem => createElement(`
    <div class="voting">
      ${Nav()}  
      <div class="voting-container">
        <div class="vote-information">
          <span class="vote-name">${voteItem.title}</span>
          <span href="/" class="voting-link">공유링크</span>
          <div class="voting-deadline">마감일 : ${voteItem.deadline}</div>
          <div class="voting-type">투표 방식 : ${voteItem.voteType}</div>
          <button class="end-voting">투표 완료</button>
        </div>
        
        <div class="voting-list">
          ${voteItem.stores.map(({ id, title, description, thumbnails }) => `
            <div class="store-card">
            <input type="checkbox" id="${id}" class="voting-btn" name="voting"/>
            <div class="store-name">${title}</div>
            <div class="store-description">${description}</div>
            <div class="store-images">
            ${thumbnails.map(thumbnail =>
              `<div class="store-image" style="background-image:url(${thumbnail});background-size: contain;"></div>`
              ).join('')}
            </div>
          </div>`).join('')}
        </div>
      </div>
      <div id="map" ></div>
    </div>`)

  const voteItem = await getVoteItem(params);
  searchPlaces();
  window.addEventListener('click', async e => {
    if (!e.target.matches('.end-voting')) return;
  
    const voteList = JSON.parse(window.localStorage.getItem('voteList')) ?? [];
    window.localStorage.setItem('voteList', JSON.stringify([...voteList, params]));

    const selectedStore = [...document.querySelectorAll('.voting-btn')].filter($checkbox => $checkbox.checked).map($checkbox => $checkbox.id);
    const newStores = voteItem.stores.map(store => selectedStore.includes(store.id) ? { ...store, countVote: store.countVote + 1 } : store)
    await db.collection('votes').doc(params).update({ stores: newStores });
  });
  
  window.addEventListener('click', e => {
    if (!e.target.matches('.voting-btn')) return;

    if (voteItem.voteType === '단일투표') selectOnlyOne(e.target);
  });

  return domStr(voteItem)
};

export default Voting;
