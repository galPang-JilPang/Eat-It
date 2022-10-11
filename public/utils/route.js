const route = e => {
  e.preventDefault();

  const path = e.target.getAttribute('href');

  if (window.location.pathname === path) return;
  window.history.pushState(null, null, path);
  return path;
};

export default route;