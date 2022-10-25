import Component from '../../../core/Component.js';

class Search extends Component {
  domStr() {
    return `
      <form id="store-keyword">
        <input type="text" id="keyword" size="15" value="강남역 맛집"/>
        <button type="submit"></button>
      </form>
    `;
  }

  addEventListener() {
    const { handlerKeyWord } = this.props;

    return [{ type: 'submit', selector: '#store-keyword', handler: handlerKeyWord }];
  }
}

export default Search;
