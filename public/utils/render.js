import { Home, Login, Voting, Add, Register, Welcome, MakeVoteList } from '../components/index.js';
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
  { path: '/makeVoteList', component: MakeVoteList },
];

const authPath = ['/', '/home', '/voting', '/add'];

const render = async path => {
  let _path = path ?? window.location.pathname;

  const user = localStorage.getItem('username');
  try {
    if (!user && authPath.includes(_path)) {
      _path = '/login';
      window.history.pushState(null, null, _path);
    }
    const component = routes.find(route => route.path === _path)?.component || NotFound;
    $root.replaceChildren(await component());
  } catch (err) {
    console.error(err);
  }
};

export default render;
