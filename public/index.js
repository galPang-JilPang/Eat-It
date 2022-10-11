import { Home, Login } from './components/index.js';

const $root = document.getElementById('root');
const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
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

window.addEventListener('popstate', () => {
  console.log('[popstate]', window.location.pathname);
  render();
});

window.addEventListener('DOMContentLoaded', () => {
  render();
});
