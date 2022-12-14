import createElement from '../utils/createElement.js';
import render from '../utils/render.js';
import route from '../utils/route.js';

const Welcome = () =>
  createElement(`
  <div id="welcome">
  <p class="welcome-emoji">π</p>
  <p class="welcome-message">κ°μμ΄ μλ£λμμ΅λλ€!</p>
    <a href="/login" class="login-btn">λ‘κ·ΈμΈ νκΈ°</a>
    </div>
`);

window.addEventListener('click', e => {
  if (!e.target.matches('.login-btn')) return;

  render(route(e));
});

export default Welcome;
