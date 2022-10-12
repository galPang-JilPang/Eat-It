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
  console.log(e.target);
  currentState[name].value = value.trim();

  // e.target.closest('.error-msg').textContent = !signinState[name].valid ? signinState[name].error : '';

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

export { toggleNav, validate, submit };
