import render from '../utils/render.js';
import route from '../utils/route.js';
import { logout, logoutExpress } from '../utils/sign.js';

const Nav = () => `
  <nav>
    <ul>
      <li><a href="/">투표 목록</a></li>
      <li><a href="/add">투표 추가</a></li>
      <li class="user">${localStorage.getItem('username')}</li>
      ${
        localStorage.getItem('username')
          ? `<li class="logout">
              <a href="/login">로그아웃</a>
            </li>`
          : ''
      }
    </ul>
  </nav>
`;

window.addEventListener('click', e => {
  if (!e.target.matches('nav > ul > li > a')) return;

  render(route(e));
});

window.addEventListener('click', logout);

export default Nav;
