import render from './utils/render.js';
import appendKakaoApi from './utils/kakaoapi.js';
appendKakaoApi();
window.addEventListener('popstate', () => {
  console.log('[popstate]', window.location.pathname);
  const [path, params] = window.location.pathname.split('/:');
  console.log(path, params);
  render({ path, params });
});

window.addEventListener('DOMContentLoaded', () => {
  const [path, params] = window.location.pathname.split('/:');

  render({ path, params });
});

export default render;
