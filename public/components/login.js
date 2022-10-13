import createElement from '../utils/createElement.js';
import { toggleNav, validate, submit } from '../utils/sign.js';

const Login = () =>
  createElement(`
    <nav>
      <ul>
        <li class="signin active"><a href="/login">로그인</a></li>
        <li class="signup"><a href="/register">회원가입</a></li>
      </ul>
    </nav>
    <form id="signin" class="signin-form">
      <label for="userid">이메일</label>
      <input type="email" name="userid" autocomplete="off" />
      <label for="password">비밀번호</label>
      <input type="password" name="password" autocomplete="off" />
      <a href="/" class="signin-btn">로그인</a>
      <div class="error-msg"></div>
    </form>
`);

window.addEventListener('click', toggleNav);
window.addEventListener('input', validate);
window.addEventListener('click', submit);

export default Login;
