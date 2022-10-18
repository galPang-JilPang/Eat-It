import createElement from '../utils/createElement.js';
import { db } from '../utils/firebase.js';
import Nav from './nav.js';
// prettier-ignore
const Voted = async params => {


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
        <div class="voting-list">
          ${voteItem.stores.map(({ id, title, description, thumbnails, countVote }) => `
            <div class="store-card ${Math.max(...voteItem.stores.map(store => store.countVote), 0) === countVote ? 'win-vote' : ''}">
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
      <div id="map"></div>
    </div>`)

  const voteItem = await getVoteItem(params);
  return domStr(voteItem)
};

export default Voted;
