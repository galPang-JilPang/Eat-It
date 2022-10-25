import Component from './core/Component.js';
import { Home, CreateVote, AddVoteItem } from './pages/index.js';

const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/create', component: CreateVote },
  { path: '/add', component: AddVoteItem },
];

class App extends Component {
  async render() {
    const _path = window.location.pathname;
    const component = routes.find(route => route.path === _path)?.component || NotFound;
    return await new component().domStr();

    // if (window.kakao && document.querySelector('#root .map_wrap #kakao-map')) {
    //   kakao.setMap.insert(document.querySelector('#root #kakao-map'));
    //   kakao.setMap.search('강남역 맛집');
    // } else if (window.kakao && document.querySelector('#root .voting #kakao-map')) {
    //   kakao.setMap.insert(document.querySelector('#root #kakao-map'));
    //   console.log(kakao.vote);
    //   kakao.setMap.marker(kakao.vote.stores);
    // }
  }

  // addEventListener() {
  //   const { popstate, getPath } = this.props;

  //   return [
  //     {
  //       type: 'popstate',
  //       selector: 'window',
  //       handler: popstate,
  //     },
  //     { type: 'DOMContentLoaded', selector: 'window', handler: getPath },
  //   ];
  // }

  // popstate() {
  //   console.log('[popstate]', window.location.pathname);
  //   const [path, params] = window.location.pathname.split('/:');
  // }

  // getPath() {
  //   const [path, params] = window.location.pathname.split('/:');
  // }
}

export default App;
