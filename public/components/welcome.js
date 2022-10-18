import createElement from '../utils/createElement.js';
import render from '../utils/render.js';
import route from '../utils/route.js';

const Welcome = () =>
  createElement(`
  <div id="welcome">
    <p>축하합니다! 
    </p>
    <p>
    가입이 완료되었습니다</p>
    <a href="/login" class="login-btn">로그인 하기</a>
    </div>
`);

window.addEventListener('click', e => {
  if (!e.target.matches('.login-btn')) return;

  render(route(e));
});

export default Welcome;
