import Component from '../../../core/Component.js';
import Search from './Search.js';

class SearchStores extends Component {
  domStr() {
    const { handlerKeyWord } = this.props;

    return `
      <div id="menu_wrap" style="display: flex">
        <div id="menu_select" class="bg_white">
          <div class="option">
            <div>
              ${new Search({ handlerKeyWord: handlerKeyWord.bind(this) }).domStr()}
            </div>
          </div>
          <ul id="placesList"></ul>
          <div id="pagination"></div>
        </div>
        <div id="store-detail"></div>
      </div>
    `;
  }

  addEventListener() {
    return [];
  }
}

export default SearchStores;
