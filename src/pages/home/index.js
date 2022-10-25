import Component from '../../core/Component.js';
import { CardList } from './components/index.js';
import { db } from '../../utils/firebase.js';

const loginedEmail = localStorage.getItem('username');

class Home extends Component {
  getUserVoteList = async () => {
    const docs = await db.collection('votes').orderBy('timestamp', 'desc').where('owner', '==', loginedEmail).get();
    let vote = [];
    docs.forEach(doc => {
      vote = [...vote, doc.data()];
    });
    return vote;
  };

  async domStr() {
    const voteItems = await this.getUserVoteList();
    const username = loginedEmail.split('@')[0];

    return `
      <div id="home">
        <div class="member-title">${username}님의 투표 목록
          <a href="/create" class="add-vote"><img src="../src/assets/plus.png"/></a>
        </div>
      </div>
      ${new CardList({ voteItems }).domStr()}
    `;
  }
}

export default Home;
