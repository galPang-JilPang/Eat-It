import Component from '../../../core/Component.js';
import Card from './Card.js';

class CardList extends Component {
  domStr() {
    const { voteItems } = this.props;

    return `
      <div class="vote-list-container">
      ${
        voteItems.length < 1
          ? `<div class="empty">투표 목록을 추가해주세요</div>`
          : voteItems.map(voteItem => new Card({ voteItem }).domStr()).join('')
      }
      </div>
      `;
  }

  addEventListener() {
    const { handleAddVote } = this.props;

    return [{ type: 'click', selector: '.add-vote', handler: handleAddVote }];
  }
}

export default CardList;
