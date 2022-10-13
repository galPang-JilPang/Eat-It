import render from './utils/render.js';

window.addEventListener('popstate', () => {
  console.log('[popstate]', window.location.pathname);
  render();
});

window.addEventListener('DOMContentLoaded', () => {
  render();
});

export default render;
