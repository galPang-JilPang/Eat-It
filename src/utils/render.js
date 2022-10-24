import { Home, Create, Add } from '../components/index.js';

const $root = document.getElementById('root');
const routes = [
  { path: '/', component: Home },
  // { path: '/login', component: Login },
  // { path: '/register', component: Register },
  { path: '/home', component: Home },
  // { path: '/voting', component: Voting },
  // { path: '/voted', component: Voted },
  { path: '/create', component: Create },
  // { path: '/welcome', component: Welcome },
  { path: '/add', component: Add },
  // { path: '/notFound', component: NotFound },
];

const authPath = ['/', '/home', '/add'];

const route = async url => {
  /*
    투표 목록에서 더보기 버튼을 누르면 route parameter로 해당 투표의 아이디를 전달합니다.
    path는 /voting/:id -> 다른 방법이 없는지 생각해보겠습니다..
    component의 인수로 params를 전달합니다.
  */
  let _path = url?.path ?? window.location.pathname;
  const params = url?.params;
  const user = localStorage.getItem('username');
  try {
    if (!user && authPath.includes(_path)) {
      _path = '/login';
      window.history.pushState(null, null, _path);
    }
    const component = routes.find(route => route.path === _path)?.component || NotFound;
    $root.replaceChildren(await new component(params).domStr());
    if (window.kakao && document.querySelector('#root .map_wrap #kakao-map')) {
      kakao.setMap.insert(document.querySelector('#root #kakao-map'));
      kakao.setMap.search('강남역 맛집');
    } else if (window.kakao && document.querySelector('#root .voting #kakao-map')) {
      kakao.setMap.insert(document.querySelector('#root #kakao-map'));
      console.log(kakao.vote);
      kakao.setMap.marker(kakao.vote.stores);
    }
  } catch (err) {
    console.error(err);
  }
};

export default route;
