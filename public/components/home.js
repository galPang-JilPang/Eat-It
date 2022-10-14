import createElement from '../utils/createElement.js';
import route from '../utils/route.js';
import render from '../utils/render.js';
import { db } from '../utils/firebase.js';
import Nav from './nav.js';
// const getId = () => {
//   return Math.max(...HomeData.map(store => store.id), 0) + 1;
// };

const Home = async () => {
  const homeBody = createElement(`
    ${Nav()}
    <div id="home"></div>
  `);

  const getVoteList = async () => {
    const loginedEmail = 'test1@test.com';
    const doc = await db.collection('users').doc(loginedEmail).collection('voteList').get();
    const voteItems = doc.docs.map(voteItem => voteItem.data());

    return voteItems.reverse();
  };

  const isVoting = deadline => {
    const date = new Date().getTime();
    const voteDate = new Date(deadline).getTime();

    return voteDate > date;
  };

  const fetchUserVoteList = voteItems => `
    <div class="member-title">은지님의 투표 목록
     <a href="/add" class="add-vote"><img src="../src/plus.png"/></a>
   </div>

    <div class="vote-list-container">
       ${voteItems
         .map(
           ({ id, title, deadline, stores }) => `<div class="card" id="${id}">
        <button class ="delete-vote">X</button>
        <div class="vote-name">${title}</div>
         <a href="/" class="vote-link">공유링크</a>
        <div class="vote-date">${deadline}</div>
        <div class="stores">
        ${stores ? stores.map(store => `<span>${store}</span>`).join(' ') : ''}
        </div>
      <div class="card-status">
        <div class="${isVoting(deadline) ? 'is-voting' : 'voted'}">${isVoting(deadline) ? '투표중' : '투표 완료'}</div>
        <a href="${isVoting(deadline) ? '/voting' : '/voted'}" class="more-vote">더보기</a>
      </div>
    </div> 
    `
         )
         .join('')}
    </div>
    </div>
    `;
  const voteItems = await getVoteList();
  const voteList = fetchUserVoteList(voteItems);
  const voteListElement = await createElement(voteList);

  homeBody.getElementById('home').append(voteListElement);
  return homeBody;
};

const setHomeData = newHomeData => {
  voteItems = newHomeData;

  console.log(voteItems);

  render();
};

const $root = document.getElementById('root');

// 투표 목록 추가 버튼

$root.addEventListener('click', e => {
  if (!e.target.matches('.add-vote')) return;

  render(route(e));
});

// 투표 삭제

$root.addEventListener('click', async e => {
  if (!e.target.matches('.delete-vote')) return;

  const targetId = +e.target.closest('.card').id;

  const loginedEmail = 'test1@test.com';
  const doc = await db.collection('users').doc(loginedEmail).collection('voteList').where('id', '==', targetId).get();

  doc.forEach(element => {
    element.ref.delete();
  });
  render(route(e));
  // const voteItems = doc.docs.map(voteItem => voteItem.data());

  // console.log(voteItems);
  // setHomeData(voteItems.filter(data => data.id !== +target.closest('.card').id));
});

$root.addEventListener('click', e => {
  if (!e.target.matches('.more-vote')) return;

  render(route(e));
});

export default Home;
