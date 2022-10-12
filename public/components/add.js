import createElement from '../utils/createElement.js';
import { db } from '../utils/firebase.js';

const Add = () => {
  return createElement(`
  <form>
  <h1>투표 만들기</h1>
  <a href="/" class="close">X</a>
  <input type="text" class="vote-title" placeholder="투표 이름을 작성해주세요"></input>
  <input type="date" class="deadline"></input>
  <label><input type="radio" id="single-vote" class="vote-type" name="vote-type">단일투표</label>
  <label><input type="radio" id="multi-vote" class="vote-type" name="vote-type">다중투표</label>
  <button type="submit">추가하기</button>
  </form>`);
};

const $root = document.getElementById('root');

$root.addEventListener('submit', async e => {
  e.preventDefault();

  const voteTitle = $root.querySelector('.vote-title').value;
  const deadline = $root.querySelector('.deadline').value;
  const voteType = [...$root.querySelectorAll('.vote-type')].find(type => type.checked).closest('label').outerText;

  let id = 0;

  const doc = await db.collection('사용자이메일').doc('투표목록').collection('투표목록').get();

  id = doc['docs'].length + 1;

  db.collection('사용자이메일').doc('투표목록').collection('투표목록').doc(`${id}`).set(
    {
      title: voteTitle,
      deadline: deadline,
      voteType: voteType,
    },
    { merge: true }

    // .then(users => users.forEach(u => console.log(u.data())))
  );

  // 다음 페이지로 넘어가야되는데 일단 이거 해둡니다~
  $root.querySelector('form').reset();
});

$root.addEventListener('click', e => {
  if (!e.target.matches('.close')) return;

  route(e);
});

export default Add;
