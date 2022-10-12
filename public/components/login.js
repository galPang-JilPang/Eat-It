import { db } from '../utils/firebase.js';
import createElement from '../utils/createElement.js';

const Login = () =>
  createElement(
    `
    <form id="signin" class="signin-form">
      <label for="userid">이메일</label>
      <input type="email" name="userid" autocomplete="off" />
      <label for="password">비밀번호</label>
      <input type="password" name="password" autocomplete="off" />
      <button class="signin">로그인</button>
      <div class="error-msg"></div>
    </form>
  `
  );

const signinState = {
  userid: {
    value: '',
    get valid() {
      return /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(this.value);
    },
    error: '이메일 형식에 맞게 입력해 주세요.',
  },
  password: {
    value: '',
    get valid() {
      return /^[A-Za-z0-9]{6,12}$/.test(this.value);
    },
    error: '영문 또는 숫자를 6~12자 입력하세요.',
  },
  get valid() {
    return Object.keys(this).every(k => k === 'valid' || this[k].valid);
  },
};

const signupState = {
  ...signinState,
  username: {
    value: '',
    get valid() {
      return !!this.value;
    },
    error: '이름을 입력해 주세요.',
  },
  'confirm-password': {
    value: '',
    get valid() {
      return signinState.password.value === this.value;
    },
    error: '패스워드가 일치하지 않습니다.',
  },
};

let currentPage = 'signin';
let currentState = signinState;

const $root = document.getElementById('root');
const toggleNav = e => {
  if (!e.target.matches('nav > ul > li')) return;

  currentPage = currentPage === 'signin' ? 'signup' : 'signin';
  currentState = currentState === signupState ? signinState : signupState;

  [...document.querySelectorAll('nav > ul > li')].forEach($li => $li.classList.toggle('active'));
};

const activeButton = () => {
  const $siginForm = document.querySelector('.signin-form');
  $siginForm.querySelector('button').disabled = !signinState.valid;
};

const validate = e => {
  const { name, value } = e.target;
  currentState[name].value = value.trim();

  activeButton();
};

const submit = async e => {
  if (!e.target.matches('form')) return;

  e.preventDefault();

  try {
    const payload = {};
    Object.keys(currentState)
      .filter(name => name !== 'valid')
      .forEach(key => {
        payload[key] = currentState[key].value;
      });

    const res = await axios.post(`/api/${currentPage}`, payload);
    console.log(res);
    if (res.status === 200) {
      console.log(`${res.data.userid} 성공~!`);
    }
  } catch (err) {
    console.error(err);
  }
};
// console.log(
//   db
//     .collection('users')
//     .get()
//     .then(users => users.forEach(u => console.log(u.data())))
// );

// $root.addEventListener('click', toggleNav);
// $root.addEventListener('input', validate);
// $root.addEventListener('submit', submit);

export default Login;
