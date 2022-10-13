import createElement from '../utils/createElement.js';
import route from './../utils/route.js';
import render from './../utils/render.js';

let HomeData = [
  {
    id: 1,
    title: '강남역 고고',
    deadline: '2022-10-28',
    stores: ['풍년식당', '영등포 여로집 강남점', '감동국밥'],
    isVoting: true,
  },

  {
    id: 2,
    title: '강남역 고고',
    deadline: '2022-10-28',
    stores: ['풍년식당', '영등포 여로집 강남점', '감동국밥'],
    isVoting: false,
  },

  {
    id: 3,
    title: '강남역 고고',
    deadline: '2022-10-28',
    stores: ['풍년식당', '영등포 여로집 강남점', '감동국밥'],
    isVoting: true,
  },

  {
    id: 4,
    title: '강남역 고고',
    deadline: '2022-10-28',
    stores: ['풍년식당', '영등포 여로집 강남점', '감동국밥'],
    isVoting: true,
  },

  {
    id: 5,
    title: '역삼역 고고',
    deadline: '2022-10-28',
    stores: ['풍년식당', '영등포 여로집 강남점', '감동국밥'],
    isVoting: true,
  },

  {
    id: 6,
    title: '사당역 고고',
    deadline: '2022-10-28',
    stores: ['풍년식당', '영등포 여로집 강남점', '감동국밥'],
    isVoting: true,
  },
];

// const getId = () => {
//   return Math.max(...HomeData.map(store => store.id), 0) + 1;
// };

const Home = () => {
  return createElement(`
  <div>은지님의 투표 목록</div>
  <a href="/home" class="add-vote">+</a>
  <div class="vote-list-container">
  ${HomeData.map(
    ({ id, title, deadline, stores, isVoting }) => `
    <div class="card" id="${id}">
      <button class ="delete-vote">X</button>
      <div class="vote-name">${title}</div>
       <a href="/" class="vote-link">공유링크</a>
      <div class="vote-date">${deadline}</div>
      <div class="stores">
      ${stores.map(store => `<span>${store}</span>`).join(' ')}
      <div class="is-votiong">${isVoting ? '투표중' : '투표 완료'}</div>
      <a href="/home" class="more-vote">더보기</a>
    </div>
  </div>
`
  ).join('')}
  </div>`);
};

const setHomeData = newHomeData => {
  HomeData = newHomeData;

  console.log(HomeData);

  render();
};

const $root = document.getElementById('root');

// 투표 목록 추가 버튼
$root.addEventListener('click', e => {
  if (!e.target.matches('.add-vote')) return;

  route(e);
});

// 투표 삭제
$root.addEventListener('click', ({ target }) => {
  if (!target.matches('.delete-vote')) return;

  setHomeData(HomeData.filter(data => data.id !== +target.closest('.card').id));
});

$root.addEventListener('click', e => {
  if (!e.target.matches('.more-vote')) return;

  route(e);
});

export default Home;
