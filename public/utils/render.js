import { Home, Login, Voting, Add, Register, Welcome, MakeVoteList } from '../components/index.js';

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

const render = async path => {
  const _path = path ?? window.location.pathname;

  try {
    const component = routes.find(route => route.path === _path)?.component || NotFound;
    $root.replaceChildren(await component());
  } catch (err) {
    console.error(err);
  }
};

export default render;
