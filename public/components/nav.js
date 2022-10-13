import render from '../utils/render.js';
import route from '../utils/route.js';
import { auth } from '../utils/firebase.js';

const Nav = () => `
  <nav>
    <ul>
      <li><a href="/">투표 목록</a></li>
      <li><a href="/add">투표 추가</a></li>
      <li class="user">${auth.currentUser?.email}</li>
    </ul>
  </nav>
`;

window.addEventListener('click', e => {
  if (!e.target.matches('nav > ul > li > a')) return;

  e.preventDefault();

  console.log(e.target);
  render(route(e));
});

export default Nav;
