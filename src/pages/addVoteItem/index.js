import Component from '../../core/Component.js';
import { Sidebar, SearchStores, SavedStores } from './components/index.js';

class AddVoteItem extends Component {
  domStr() {
    return `
      <div class="map_wrap">
        ${new Sidebar({
          handlerMapMenu: this.handlerMapMenu.bind(this),
          handlerTotalSubmit: this.handlerTotalSubmit.bind(this),
        }).domStr()}
        ${new SearchStores({
          handlerKeyWord: this.handlerKeyWord.bind(this),
        }).domStr()}
        ${new SavedStores().domStr()}
        <div id="kakao-map" ></div>
      </div>
    `;
  }

  handlerMapMenu(e) {
    if (!e.target.matches('.map-home') && !e.target.matches('.map-list')) return;

    const isMapHome = e.target.matches('.map-home');
    const isVoteList = e.target.matches('.map-list');

    document.querySelector('#menu_wrap').classList.toggle('hidden', isVoteList);
    document.querySelector('.map-home').classList.toggle('active', isMapHome);
    document.querySelector('#menu_voted').classList.toggle('hidden', isMapHome);
    document.querySelector('.map-list').classList.toggle('active', isVoteList);
  }

  async handlerTotalSubmit(e) {
    if (!e.target.matches('.total-submit-btn')) return;

    e.preventDefault();

    if (selectedStoreList.length < 2) {
      window.alert('2개 이상의 음식점을 추가해주세요');
      return;
    }

    try {
      const voteItem = await db.collection('votes').doc(params);
      await voteItem.update({ stores: firebase.firestore.FieldValue.arrayUnion(...selectedStoreList) });
      render(route(e));
    } catch (err) {
      console.error(err);
    }
  }

  handlerKeyWord(e) {
    if (!e.target.matches('#store-keyword')) return;

    e.preventDefault();

    kakao.setMap.search(e.target.querySelector('#keyword').value);
  }
}

export default AddVoteItem;
