import { Home, Login, Voting, Add, Register, Welcome } from '../components/index.js';
import { auth } from './firebase.js';

const $root = document.getElementById('root');
const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/home', component: Home },
  { path: '/voting', component: Voting },
  { path: '/add', component: Add },
  { path: '/welcome', component: Welcome },
];

const render = async path => {
  let _path = path ?? window.location.pathname;

  auth.onAuthStateChanged(user => {
    if (!user && ['/', '/voting', '/add', '/welcome'].includes(path)) {
      _path = '/login';
    }
  });

  try {
    const component = routes.find(route => route.path === _path)?.component || NotFound;
    $root.replaceChildren(await component());
  } catch (err) {
    console.error(err);
  }
};

export default render;
