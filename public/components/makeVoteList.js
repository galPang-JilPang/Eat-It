import createElement from '../utils/createElement.js';

const MakeVoteList = () =>
  createElement(`   
  <div class="makeVoteList">
<div class="side-nav">
  <a href="/makeVoteList" class="view-stores">지도홈</a>
  <a href="/saved" class="saved-stores">투표목록</a>
  <a href="/home" class="saved-stores">투표목록</a>
</div>

<div class="search-container">
  <input type="text" value="검색어를 입력하세요" />
  <button class="search-button">검색버튼</button>

  <div class="stores-container">
    <div class="store-card">
      <div class="store-title">가게이름</div>
      <div class="store-description">가게설명</div>
      <div class="store-imgs"></div>
    </div>
    <div class="pagination"></div>
    <div class="map"></div>
  </div>
</div>
</div>`);

export default MakeVoteList;
