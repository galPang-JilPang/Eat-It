import render from './utils/render.js';

window.addEventListener('popstate', () => {
  console.log('[popstate]', window.location.pathname);
  const [path, params] = window.location.pathname.split('/:');
  console.log(path, params);
  render({ path, params });
});

window.addEventListener('DOMContentLoaded', () => {
  console.log(window.location);
  const [path, params] = window.location.pathname.split('/:');
  console.log(path, params);
  render({ path, params });
});

export default render;
