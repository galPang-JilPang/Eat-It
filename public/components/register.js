import createElement from '../utils/createElement.js';
import { toggleNav, validate, submit } from '../utils/sign.js';

const Register = () =>
  createElement(`
  <div id="register">
      <ul class="class-toggle">
        <li class="signin"><a href="/login">로그인</a></li>
        <li class="signup active"><a href="/register">회원가입</a></li>
      </ul>

    <form id="signup" class="signup-form">
      <label for="userid">이메일</label>
      <input type="email" name="userid" autocomplete="off" />
      <label for="password">비밀번호</label>
      <input type="password" name="password" autocomplete="off" />
      <label for="password-confirm">비밀번호 확인</label>
      <input type="password" name="password-confirm" autocomplete="off" />
      <a href="/welcome" class="signup-btn">회원가입</a>
      <div class="error-msg"></div>
    </form>
    </div>
`);

window.addEventListener('click', toggleNav);
window.addEventListener('input', validate);
window.addEventListener('click', submit);

export default Register;
