import Component from '../../../core/Component.js';

const isVoting = deadline => {
  const date = new Date().getTime();
  const voteDate = new Date(deadline).getTime();

  return voteDate > date;
};

class Card extends Component {
  domStr() {
    const { id, title, deadline, stores } = this.props.voteItem;
    // prettier-ignore
    return `
      <div class="card" id="${id}">
        <button class ="delete-vote">⨉</button>
        <div class="vote-name">
          ${title}
          <input class="copy-value" value="${window.location.origin}${isVoting(deadline) ? `/voting/:${id}` : `/voted/:${id}`}"/>
          <div class="button-nav">
          <button class="vote-link">링크공유</button>
          <button class="qr-link">QR</button>
          </div>
        </div>
        <div class="vote-date">${deadline}</div>
        <div class="stores">
          ${stores ? stores.map(({ title }, index) => (index < 3 ? `<span>${title}</span>` : '')).join(' ') : ''}
        </div>
        <div class="card-status">
          <div class="${isVoting(deadline) ? 'is-voting' : 'voted'}">
            ${isVoting(deadline) ? '투표중' : '투표 완료'}
          </div>
          <a href="${isVoting(deadline) ? `/voting/:${id}` : `/voted/:${id}`}" class="more-vote">더보기</a>
        </div>
      </div> 
    `;
  }

  addEventListener() {
    const { handleQrLink, handleVoteLink, handleDeleteVote, handleMoreVote } = this.props;

    return [
      { type: 'click', selector: '.qr-link', handler: handleQrLink },
      { type: 'click', selector: '.vote-link', handler: handleVoteLink },
      { type: 'click', selector: '.delete-vote', handler: handleDeleteVote },
      { type: 'click', selector: '.more-vote', handler: handleMoreVote },
    ];
  }
}

export default Card;
