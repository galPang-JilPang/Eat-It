import render from '../index.js';
import createElement from '../utils/createElement.js';
import { db } from '../utils/firebase.js';
import route from '../utils/route.js';
import Nav from './nav.js';

const Add = () =>
  createElement(`
  ${Nav()}
  <div id="add">
    <form class="add-form">
    <h1 class="add-title">투표 만들기 <a href="/" class="close">X</a></h1>
    <input type="text" class="vote-title" placeholder="투표 이름을 작성해주세요" />
    <input type="date" class="deadline"/>
    <div class="class-toggle">
    <input type="radio" id="single-vote" class="vote-type" name="vote-type" hidden/>
    <label for="single-vote">단일투표</label>
    <input type="radio" id="multi-vote" class="vote-type" name="vote-type" hidden/>
    <label for="multi-vote">다중투표</label>
    </div>
    <button class="btn-add" type="submit">추가하기</button>
    </form>
  </div>`);

const $root = document.getElementById('root');

$root.addEventListener('submit', async e => {
  e.preventDefault();

  const voteTitle = $root.querySelector('.vote-title').value;
  const deadline = $root.querySelector('.deadline').value;
  const voteId = [...$root.querySelectorAll('.vote-type')].find(type => type.checked).id;
  const voteType = document.querySelector(`label[for=${voteId}]`).textContent;

  const loginedEmail = localStorage.getItem('username');
  const doc = await db.collection('users').doc(loginedEmail).collection('voteList').get();

  let id = Math.max(...doc.docs.map(element => +element.id), 0) + 1;

  db.collection('users').doc(loginedEmail).collection('voteList').doc(`${id}`).set(
    {
      id,
      title: voteTitle,
      deadline,
      voteType,
    },
    { merge: true }

    // .then(users => users.forEach(u => console.log(u.data())))
  );

  // 다음 페이지로 넘어가야되는데 일단 이거 해둡니다~
  $root.querySelector('form').reset();
});

$root.addEventListener('click', e => {
  if (!e.target.matches('.close')) return;

  render(route(e));
});

export default Add;
