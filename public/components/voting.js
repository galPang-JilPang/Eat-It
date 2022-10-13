import createElement from '../utils/createElement.js';

let votingData = {
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

const Voting = () => {
  return createElement(`  
  <div class="voting-list">
  <div class="vote-name">${votingData.voteTitle}</div>
  <a href="/" class="voting-link">공유링크</a>
  <div class="voting-deadline">${votingData.deadline}</div>
  <div class="voting-type">${votingData.voteType}</div>
  <button class="end-voting">투표 완료</button>

  <div class="voting-list">
  ${votingData.stores
    .map(
      ({ id, title, description, rating, reviews, img }) => `
    <div class="store-card">
      <input type="checkbox" id="${id}" class="voting-btn" name="voting"/>
      <div class="store-name">${title}</div>
      <div class="store-description">${description}</div>
      <div class="store-rating">${rating}</div>
      <div class="store-review">${reviews} 리뷰수</div>
      <div class="store-img-contaienr">
      ${img.map(img => `<img src="${img}" alt="음식점사진" />`).join('')}
      </div>
    </div>
  `
    )
    .join('')}
    
  </div>

</div>`);
};

const $root = document.getElementById('root');

const singleVote = e => {
  $root
    .querySelectorAll('.voting-btn')
    .forEach(checkbox => (checkbox.id !== e.target.id ? (checkbox.checked = false) : (checkbox.checked = true)));
};

$root.addEventListener('click', e => {
  if (!e.target.matches('.voting-btn')) return;

  if (votingData.voteType === '단일투표') {
    singleVote(e);
  }
});

export default Voting;
