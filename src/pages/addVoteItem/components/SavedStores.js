import Component from '../../../core/Component.js';

class SavedStores extends Component {
  domStr() {
    return `
      <div id="menu_voted" style="display:none;">
        투표할 음식점이 없습니다. 음식점을 추가해주세요.
      </div>
    `;
  }

  addEventListener() {
    return [];
  }
}

export default SavedStores;
