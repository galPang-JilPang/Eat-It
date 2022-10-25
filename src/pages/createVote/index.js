import Component from '../../core/Component.js';
import { CreateVoteForm } from './components/index.js';
import { db } from '../../utils/firebase.js';

let uuid = await db.collection('votes').doc();

class CreateVote extends Component {
  domStr() {
    return `
      <div id="add">
        ${new CreateVoteForm({
          uuid: uuid,
          handleAddVote: this.handleAddVote.bind(this),
          handleClose: this.handleClose.bind(this),
        }).domStr()}
      </div>
    `;
  }

  async handleAddVote(e) {
    if (!e.target.matches('.btn-add')) return;

    e.preventDefault();

    const [title, deadline, isSingle, isMultiple] = e.target.closest('.add-form');
    if (!title.value || !deadline.value || (isSingle.checked && isMultiple.checked)) {
      document.querySelector('.warning-message').style.display = 'block';
      return;
    }

    document.querySelector('.warning-message').style.display = 'none';

    const user = localStorage.getItem('username');
    const data = {
      title: title.value,
      deadline: deadline.value,
      voteType: isSingle.checked ? '단일투표' : '다중투표',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      stores: [],
    };

    uuid.set({
      owner: user,
      id: uuid.id,
      ...data,
    });

    db.collection('users').doc(user).collection('voteList').doc(uuid.id).set({});
    uuid = await db.collection('votes').doc();
  }

  handleClose(e) {
    if (!e.target.matches('.close')) return;
  }
}

export default CreateVote;
