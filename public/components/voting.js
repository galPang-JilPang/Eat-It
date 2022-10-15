import createElement from '../utils/createElement.js';
import { db } from '../utils/firebase.js';
import Nav from './nav.js';

const votingData = {
  voteTitle: '강남역 고고',
  deadline: 2022 - 10 - 23,
  voteType: '단일투표',
  stores: [
    {
      id: 1,
      title: '대낚식당',
      description: '모두를 낚을 것 같은 그 맛.',
      rating: 4.0,
      reviews: 7,
      img: ['/'],
    },
    {
      id: 2,
      title: '대낚식당',
      description: '모두를 낚을 것 같은 그 맛.',
      rating: 4.0,
      reviews: 7,
      img: ['/'],
    },
    {
      id: 3,
      title: '대낚식당',
      description: '모두를 낚을 것 같은 그 맛.',
      rating: 4.0,
      reviews: 7,
      img: ['/'],
    },

    {
      id: 4,
      title: '대낚식당',
      description: '모두를 낚을 것 같은 그 맛.',
      rating: 4.0,
      reviews: 7,
      img: ['/'],
    },
  ],
};

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

const $root = document.getElementById('root');

const selectOnlyOne = e => {
  [...$root.querySelectorAll('.voting-btn')].forEach(checkbox => {
    checkbox.checked = checkbox === e.target;
  });
};

$root.addEventListener('click', e => {
  if (!e.target.matches('.voting-btn')) return;

  if (votingData.voteType === '단일투표') {
    selectOnlyOne(e);
  }
});

export default Voting;
