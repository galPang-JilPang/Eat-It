import Component from '../../../core/Component.js';

class CreateVoteForm extends Component {
  domStr() {
    const { uuid } = this.props;

    return `
      <form class="add-form">
        <h1 class="add-title">투표 만들기 <a href="/" class="close">X</a></h1>
        <input type="text" class="vote-title" placeholder="투표 이름을 작성해주세요" />
        <input type="date" class="deadline"/>
        <div class="class-toggle">
          <input type="radio" id="single-vote" class="vote-type" name="vote-type" hidden/>
          <label for="single-vote">단일투표</label>
          <input type="radio" id="multi-vote" class="vote-type" name="vote-type" hidden/>
          <label for="multi-vote">다중투표</label>
        </div>
        <a class="btn-add" href="/add/:${uuid.id}">추가하기</a>
        <div class="warning-message">입력되지 않은 항목이 있습니다.</div>
      </form>
    `;
  }

  addEventListener() {
    const { handleAddVote, handleClose } = this.props;

    return [
      {
        type: 'click',
        selector: '.btn-add',
        handler: handleAddVote,
      },
      { type: 'click', selector: '.close', handler: handleClose },
    ];
  }
}

export default CreateVoteForm;
