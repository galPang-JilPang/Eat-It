import Login from './login.js';
import Register from './register.js';
import createElement from '../utils/createElement.js';
import { toggleNav, validate, submit } from '../utils/sign.js';

const $root = document.getElementById('root');

const Form = () =>
  createElement(`
    <nav>
      <ul>
        <li class="signin active">로그인</li>
        <li class="signup">회원가입</li>
      </ul>
    </nav>
    ${Login()}
    ${Register()}
  `);

$root.addEventListener('click', toggleNav);
$root.addEventListener('input', validate);
$root.addEventListener('submit', submit);

export default Form;
