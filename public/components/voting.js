import createElement from '../utils/createElement.js';
import { db } from '../utils/firebase.js';
import Nav from './nav.js';

// prettier-ignore
const Voting = async params => {
  const getVoteItem = async id => {
    /*
      voteItem의 id 값을 params로 전달받습니다.
      로그인한 사용자의 voteList에서 params로 받은 id값으로 voteItem을 가져옵니다.
    */
    const user = localStorage.getItem('username');
    const doc = await db.collection('users').doc(user).collection("voteList").where("id", "==", +id).get();
    let voteItem = {}
    doc.forEach(docs => {
      voteItem = docs.data();
    })
    return voteItem
  }

  const domStr = voteItem => createElement(`
    ${Nav()}  
    <div class="voting-list">
      <div class="vote-name">${voteItem.title}</div>
      <a href="/" class="voting-link">공유링크</a>
      <div class="voting-deadline">${voteItem.deadline}</div>
      <div class="voting-type">${voteItem.voteType}</div>
      <button class="end-voting">투표 완료</button>
  
      <div class="voting-list">
      ${voteItem.stores.map(({ id, title, description, thumbnails }) => `
        <div class="store-card">
          <input type="checkbox" id="${id}" class="voting-btn" name="voting"/>
          <div class="store-name">${title}</div>
          <div class="store-description">${description}</div>
          <div class="store-img-container">
            ${thumbnails.map(img => `<img src="${img}" alt="음식점사진" />`).join('')}
          </div>
        </div>
      `)
        .join('')}
      </div>
    </div>
  `)

  const voteItem = await getVoteItem(params);
  return domStr(voteItem)
};

const selectOnlyOne = $input => {
  [...document.querySelectorAll('.voting-btn')].forEach(checkbox => {
    checkbox.checked = checkbox === $input;
  });
};

window.addEventListener('click', e => {
  if (!e.target.matches('.voting-btn')) return;
  // 위에 있는 voteItem 가져와야되는디요...............
  const voteType = document.querySelector('.voting-type').textContent;
  if (voteType === '단일투표') selectOnlyOne(e.target);
});

export default Voting;
