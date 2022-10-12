import createElement from '../utils/createElement.js';

const Add = () => {
  return createElement(`
  <form>
  <h1>투표 만들기</h1>
  <div class="close">X</div>
  <input type="text" class="vote-name" placeholder="투표 이름을 작성해주세요"></input>
  <input type="date"></input>
  <input type="button" id="single-vote" value="단일투표"></input>
  <input type="button" id="multi-vote" value="다중투표"></input>
  <button type="submit">추가하기</button>
  </form>`);
};

export default Add;
