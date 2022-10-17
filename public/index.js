import render from './utils/render.js';

window.addEventListener('popstate', () => {
  console.log('[popstate]', window.location.pathname);
  const [path, params] = window.location.pathname.split('/:');

  render({ path, params });
});

window.addEventListener('DOMContentLoaded', () => {
  const [path, params] = window.location.pathname.split('/:');

  render({ path, params });
});

export default render;
