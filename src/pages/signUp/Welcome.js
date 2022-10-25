import render from '../utils/render.js';
import route from '../utils/route.js';

class Welcome extends Component {
  render() {
    return `
    <div id="welcome">
      <p class="welcome-emoji">🎉</p>
      <p class="welcome-message">가입이 완료되었습니다!</p>
      <a href="/login" class="login-btn">로그인 하기</a>
    </div>
  `;
  }

  addEventListener() {
    return [
      { type: 'click', selector: '.map-home', handler: render(route(e)) },
      { type: 'click', selector: '.map-list', handler: handlerMapMenu },
    ];
  }
}

window.addEventListener('click', e => {
  if (!e.target.matches('.login-btn')) return;

  render(route(e));
});

export default Welcome;
