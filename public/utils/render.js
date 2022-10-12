import { Home, Login, Voting } from '../components/index.js';

const $root = document.getElementById('root');
const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/home', component: Home },
  { path: '/voting', component: Voting },
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
