import { auth } from './firebase.js';
import render from '../index.js';

// signin, signup에서 공통으로 사용하는 로직
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

const toggleNav = e => {
  if (!e.target.matches('nav > ul > li')) return;

  const isSigninPage = e.target.classList.contains('signin');
  currentPage = isSigninPage ? 'signin' : 'signup';
  currentState = isSigninPage ? signinState : signupState;

  [...document.querySelectorAll('nav > ul > li')].forEach($li => $li.classList.toggle('active'));
};

const activeButton = () => {
  const $form = document.querySelector(`.${currentPage}-form`);
  $form.querySelector('button').disabled = !signinState.valid;
};

const validate = e => {
  const { name, value } = e.target;
  currentState[name].value = value.trim();

  // e.target.closest('.error-msg').textContent = !signinState[name].valid ? signinState[name].error : '';

  activeButton();
};

/* 로그인해야 접근할 수 있는 페이지에서 사용할 request */
const authRequest = async () => {
  const firebaseUserIdToken = await auth.currentUser?.getIdToken(true);

  /**
   * getIdToken(true): 사용자의 토큰을 refresh 해준다.
   * 기본적으로, 1시간이 지나면 토큰은 만료된다.
   * */

  const response = await fetch('/api/hello', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + firebaseUserIdToken,
    },
  });
};

const route = path => {
  if (window.location.pathname === path) return;

  window.history.pushState(null, null, path);
  render(path);
};

const submit = async e => {
  if (!e.target.matches('.signin-form') && !e.target.matches('.signup-form')) return;

  e.preventDefault();

  try {
    if (currentPage === 'signin') {
      const res = await auth.signInWithEmailAndPassword(signinState.userid.value, signinState.password.value);
      route('/');
    }

    if (currentPage === 'signup') {
      const res = await auth.createUserWithEmailAndPassword(signupState.userid.value, signupState.password.value);
      route('/welcome');
    }
  } catch (err) {
    console.error(err);
  }
};

/* express를 사용해서 구현한 방법 */
const submitExpress = async e => {
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
    if (res.status === 200) {
      console.log(`${res.data.userid} 성공~!`);
      route('/');
    }
  } catch (err) {
    console.error(err);
  }
};

export { toggleNav, validate, submit };
